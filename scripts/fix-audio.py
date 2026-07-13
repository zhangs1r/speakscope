#!/usr/bin/env python3
"""Fix missing audio files: extract text from HTML and generate missing audio."""
import subprocess, os, re, json

LESSONS_DIR = os.path.expanduser("~/speakscope/lessons")
AUDIO_DIR = os.path.join(LESSONS_DIR, "assets/audio/animal-farm")
VOICE = "en-US-AriaNeural"

lesson_files = [
    "0005-AnimalFarm-导读.html",
    "0006-AnimalFarm-Ch1-Old-Major-Dream.html",
    "0007-AnimalFarm-Ch2-The-Rebellion.html",
    "0008-AnimalFarm-Ch3-The-Golden-Age.html",
    "0009-AnimalFarm-Ch4-Battle-Cowshed.html",
    "0010-AnimalFarm-Ch5-Napoleon-Coup.html",
    "0011-AnimalFarm-Ch6-The-Windmill.html",
    "0012-AnimalFarm-Ch7-The-Purge.html",
    "0013-AnimalFarm-Ch8-Battle-Windmill.html",
    "0014-AnimalFarm-Ch9-Boxers-Fall.html",
    "0015-AnimalFarm-Ch10-Final-Transformation.html",
]

def extract_all_text_from_html(html_path):
    """Extract all (audio_filename, text) pairs from a lesson HTML."""
    with open(html_path) as f:
        html = f.read()
    
    pairs = []
    
    # Find all playAudio calls with their surrounding p-en divs
    # Strategy: find each playAudio call, then look for the closest preceding p-en text
    
    # Pattern: playAudio('FILE.mp3','...')
    audio_calls = list(re.finditer(r"playAudio\('([^']+\.mp3)','([^']+)'\)", html))
    
    for m in audio_calls:
        filename = m.group(1)
        btn_id = m.group(2)
        pos = m.start()
        
        # Look for the text content - find the closest preceding .p-en or .v-example or .v-word
        preceding = html[max(0,pos-2000):pos]
        
        # Try to find p-en text (passage)
        p_en = re.search(r'class="p-en">(.*?)</div>\s*<button', preceding, re.DOTALL)
        if p_en:
            text = re.sub(r'<[^>]+>', '', p_en.group(1))
            text = re.sub(r'\s+', ' ', text).strip()[:300]  # cap at 300 chars
            pairs.append((filename, text))
            continue
        
        # Try to find v-example text (keyword example sentence)
        v_ex = re.search(r'class="v-example">(.*?)</div>', preceding, re.DOTALL)
        if v_ex:
            text = re.sub(r'<[^>]+>', '', v_ex.group(1))
            text = re.sub(r'\s+', ' ', text).strip()[:300]
            pairs.append((filename, text))
            continue
        
        # Try to find v-cn text (just the word's meaning isn't great for TTS)
        # Fall back: find the v-word text (the word itself)
        v_word = re.search(r'class="v-word">.*?<span[^>]*>(?:🔵|🟡)</span>\s*([^<\s]+)', preceding)
        if v_word:
            word = v_word.group(1).strip()
            pairs.append((filename, word))
            continue
        
        # Last resort: use the surrounding text
        surrounding = html[pos-100:pos+50]
        print(f"  ⚠️  Could not extract text for {filename} in {os.path.basename(html_path)}")
        pairs.append((filename, None))
    
    return pairs

def generate_one(filename, text):
    """Generate one TTS audio file."""
    output_path = os.path.join(AUDIO_DIR, filename)
    
    if os.path.exists(output_path):
        return f"  ⏭ {filename} (exists)"
    
    if not text:
        return f"  ❌ {filename} (no text extracted)"
    
    cmd = [
        "edge-tts",
        "--voice", VOICE,
        "--text", text,
        "--write-media", output_path,
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
    if result.returncode == 0:
        size = os.path.getsize(output_path)
        return f"  ✅ {filename} ({size//1024}KB)"
    else:
        return f"  ❌ {filename}: {result.stderr[:100]}"

def process_all():
    # Check existing audio files
    existing = set(os.listdir(AUDIO_DIR)) if os.path.isdir(AUDIO_DIR) else set()
    print(f"Existing audio files: {len(existing)}")
    
    all_pairs = []
    for lf in lesson_files:
        path = os.path.join(LESSONS_DIR, lf)
        if not os.path.exists(path):
            print(f"  ⚠️  {lf} not found")
            continue
        pairs = extract_all_text_from_html(path)
        all_pairs.extend(pairs)
        print(f"  {lf}: {len(pairs)} audio references")
    
    # Find missing files
    missing = [(f, t) for f, t in all_pairs if f not in existing]
    # Remove duplicates (same filename, keep first text)
    seen = set()
    unique_missing = []
    for f, t in missing:
        if f not in seen:
            seen.add(f)
            unique_missing.append((f, t))
    
    print(f"\nTotal audio references: {len(all_pairs)}")
    print(f"Missing (unique): {len(unique_missing)}")
    
    if not unique_missing:
        print("No missing files! All audio is generated.")
        return
    
    print("\nGenerating missing audio...")
    for filename, text in unique_missing:
        print(generate_one(filename, text))
    
    print(f"\nDone. Generated {len(unique_missing)} files.")

if __name__ == "__main__":
    process_all()
