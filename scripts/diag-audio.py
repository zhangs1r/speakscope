#!/usr/bin/env python3
"""Diagnose audio-content mismatches in full-text reading lessons.
For each lesson, extracts the text that SHOULD be in each audio file
and checks if it seems reasonable.
"""
import os, re, html as html_mod

LESSONS_DIR = os.path.expanduser("~/speakscope/lessons")
AUDIO_DIR = os.path.join(LESSONS_DIR, "assets/audio/animal-farm")

# Check all new format lessons
LESSON_IDS = [f"{i:04d}" for i in range(6, 25)]  # 0006 to 0024

def find_lesson_file(lesson_id):
    """Find the new-format HTML file for a lesson."""
    for f in os.listdir(LESSONS_DIR):
        if f.startswith(lesson_id + "-") and f.endswith(".html"):
            # Make sure it's new format (has P1/P2 or is Ch4-Battle etc)
            if "P1-" in f or "P2-" in f or "Ch4-Battle" in f:
                return f
    return None

def extract_displayed_and_audio_text(html, lesson_id):
    """For each playAudio call, extract what text is displayed and what TTS got."""
    issues = []
    
    for m in re.finditer(r"playAudio\('(\d{4})-p(\d+)\.mp3','pb-(\d+)'\)", html):
        audio_file = m.group(1) + "-p" + m.group(2) + ".mp3"
        btn_id = m.group(3)
        pos = m.start()
        
        # Get the displayed English text - find the .en div
        preceding = html[max(0,pos-3000):pos]
        en_match = re.search(r'class="en">(.*?)</div>\s*<button', preceding, re.DOTALL)
        
        if not en_match:
            issues.append((audio_file, btn_id, "NO_EN_DIV", "Could not find .en div"))
            continue
        
        raw_text = en_match.group(1)
        
        # Check for HTML entities
        entities = re.findall(r'&[a-z]+;', raw_text)
        
        # Check for HTML tags that weren't stripped
        tags_remaining = re.findall(r'<[^>]+>', raw_text)
        
        # Decode entities and strip tags for clean text
        clean_text = re.sub(r'<[^>]+>', '', raw_text)
        clean_text = html_mod.unescape(clean_text)
        clean_text = re.sub(r'\s+', ' ', clean_text).strip()
        
        # Check text length
        word_count = len(clean_text.split())
        
        # Log if issues found
        if entities:
            issues.append((audio_file, btn_id, "HTML_ENTITIES", f"Found entities: {entities[:3]} in text: {clean_text[:80]}..."))
        if word_count > 100:
            issues.append((audio_file, btn_id, "LONG_TEXT", f"{word_count} words (capped at ~500 chars?)"))
        if word_count < 2:
            issues.append((audio_file, btn_id, "SHORT_TEXT", f"Only {word_count} words"))
    
    return issues

def main():
    total_issues = 0
    for lid in LESSON_IDS:
        lf = find_lesson_file(lid)
        if not lf:
            print(f"  ⚠️  {lid}: no new-format file found")
            continue
        
        path = os.path.join(LESSONS_DIR, lf)
        with open(path) as f:
            html = f.read()
        
        issues = extract_displayed_and_audio_text(html, lid)
        if issues:
            print(f"\n  ❌ {lid} ({lf}): {len(issues)} issue(s)")
            for af, btn, typ, desc in issues:
                print(f"    [{typ}] {af} (pb-{btn}): {desc[:120]}")
                total_issues += 1
        else:
            print(f"  ✅ {lid}: clean")
    
    print(f"\n\nTotal issues found: {total_issues}")

if __name__ == "__main__":
    main()
