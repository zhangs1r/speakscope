#!/usr/bin/env python3
"""Batch generate audio for full-text guided reading lessons.
Reads each lesson HTML, extracts text from each paragraph, generates audio.
"""
import subprocess, os, re, sys
from concurrent.futures import ThreadPoolExecutor, as_completed

LESSONS_DIR = os.path.expanduser("~/speakscope/lessons")
AUDIO_DIR = os.path.join(LESSONS_DIR, "assets/audio/animal-farm")
VOICE = "en-US-AriaNeural"
os.makedirs(AUDIO_DIR, exist_ok=True)

# All new full-text lessons
LESSON_FILES = [
    "0006-AnimalFarm-Ch1-P1-Gathering.html",
    "0007-AnimalFarm-Ch1-P2-Speech.html",
    "0008-AnimalFarm-Ch2-P1-Animalism.html",
    "0009-AnimalFarm-Ch2-P2-Rebellion.html",
    "0010-AnimalFarm-Ch3-P1-Harvest.html",
    "0011-AnimalFarm-Ch3-P2-Slogans.html",
    "0012-AnimalFarm-Ch4-Battle.html",
    "0013-AnimalFarm-Ch5-P1-Mollie.html",
    "0014-AnimalFarm-Ch5-P2-Coup.html",
    "0015-AnimalFarm-Ch6-P1-Windmill.html",
    "0016-AnimalFarm-Ch6-P2-Trade.html",
    "0017-AnimalFarm-Ch7-P1-Famine.html",
    "0018-AnimalFarm-Ch7-P2-Purge.html",
    "0019-AnimalFarm-Ch8-P1-Forgery.html",
    "0020-AnimalFarm-Ch8-P2-Battle.html",
    "0021-AnimalFarm-Ch9-P1-Decline.html",
    "0022-AnimalFarm-Ch9-P2-Knacker.html",
    "0023-AnimalFarm-Ch10-P1-Forgotten.html",
    "0024-AnimalFarm-Ch10-P2-Final.html",
]

def extract_paragraphs(html_path):
    """Extract (audio_filename, text) pairs from a lesson HTML."""
    lesson_id = os.path.basename(html_path).split("-")[0]
    with open(html_path) as f:
        html = f.read()
    
    items = []
    # Find all .en divs inside .line-block that have playAudio buttons
    # Pattern: look for playAudio('{id}-p{N}.mp3') and find the preceding .en text
    
    # Find all playAudio calls with p-number pattern
    for m in re.finditer(r"playAudio\('(\d{4})-p(\d+)\.mp3','pb-\d+'\)", html):
        audio_file = f"{m.group(1)}-p{m.group(2)}.mp3"
        pos = m.start()
        
        # Look backwards for the closest .en div
        preceding = html[max(0,pos-3000):pos]
        en_match = re.search(r'class="en">(.*?)</div>\s*<button', preceding, re.DOTALL)
        
        if en_match:
            text = re.sub(r'<[^>]+>', '', en_match.group(1))
            text = re.sub(r'\s+', ' ', text).strip()
            text = text[:500]  # cap length
            if text:
                items.append((audio_file, text))
                continue
        
        items.append((audio_file, None))  # couldn't extract
    
    return items

def generate_one(filename, text):
    output = os.path.join(AUDIO_DIR, filename)
    if os.path.exists(output):
        return f"  ⏭ {filename}"
    if not text:
        return f"  ❌ {filename} (no text)"
    
    r = subprocess.run(["edge-tts", "--voice", VOICE, "--text", text,
                        "--write-media", output], capture_output=True, text=True, timeout=120)
    if r.returncode == 0:
        return f"  ✅ {filename} ({os.path.getsize(output)//1024}KB)"
    return f"  ❌ {filename}: {r.stderr[:80]}"

def process_all():
    existing = set(os.listdir(AUDIO_DIR)) if os.path.isdir(AUDIO_DIR) else set()
    all_items = []
    
    for lf in LESSON_FILES:
        path = os.path.join(LESSONS_DIR, lf)
        if not os.path.exists(path):
            print(f"  ⚠️  {lf} not found")
            continue
        items = extract_paragraphs(path)
        all_items.extend(items)
        lesson_id = lf.split("-")[0]
        print(f"  {lf}: {len(items)} paragraphs")
    
    # Find missing
    missing = [(f, t) for f, t in all_items if f not in existing]
    seen = set()
    unique = []
    for f, t in missing:
        if f not in seen:
            seen.add(f)
            unique.append((f, t))
    
    print(f"\nTotal paragraphs: {len(all_items)}")
    print(f"Missing audio: {len(unique)}")
    
    if not unique:
        print("All audio already generated!")
        return
    
    print("\nGenerating...")
    with ThreadPoolExecutor(max_workers=6) as ex:
        fs = {ex.submit(generate_one, f, t): f for f, t in unique}
        for f in as_completed(fs):
            print(f.result())
    
    print(f"\nDone! Generated {len(unique)} files.")

if __name__ == "__main__":
    process_all()
