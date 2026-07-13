#!/usr/bin/env python3
"""Batch generate TTS audio for Animal Farm reading course lessons.
Usage: python3 gen-af-audio.py <lesson-id> [lesson-id ...]
   or:  python3 gen-af-audio.py --all
   or:  python3 gen-af-audio.py --parallel  (parallel, all lessons)
"""

import subprocess, os, sys, json, time
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_DIR = os.path.expanduser("~/speakscope")
AUDIO_DIR = os.path.join(BASE_DIR, "lessons/assets/audio/animal-farm")

VOICE = "en-US-AriaNeural"

# Ensure audio dir exists
os.makedirs(AUDIO_DIR, exist_ok=True)

# ─── Lesson audio items ───
# Each lesson maps lesson_id -> [(filename_key, text), ...]
# The actual filename will be: {lesson_id}-{key}.mp3
# e.g. 0006-key-comrades.mp3

LESSON_AUDIO = {
    "0005": {  # Intro
        "items": [
            ("intro-orwell", "George Orwell was one of the most important English writers of the twentieth century."),
            ("intro-allegory", "An allegory is a story that has a hidden meaning, usually a moral or political one. Animal Farm is a political allegory."),
            ("intro-satire", "Satire is a way of using humor to criticize people or ideas. Orwell uses satire to criticize tyranny."),
            ("intro-rebellion", "The story begins on Manor Farm, where the animals are treated badly by their owner, Mr. Jones."),
            ("intro-comrades", "Comrades! The animals call each other comrades, just like revolutionaries in real political movements."),
            ("intro-manifesto", "Old Major gives a speech that becomes the manifesto of the Animal Farm revolution."),
            ("key-allegory", "allegory"),
            ("key-satire", "satire"),
            ("key-rebellion", "rebellion"),
            ("key-tyranny", "tyranny"),
            ("key-comrades", "comrades"),
            ("key-manifesto", "manifesto"),
            ("key-propaganda", "propaganda"),
            ("key-revolution", "revolution"),
        ]
    },
    "0006": {  # Ch.I - Old Major's Dream
        "items": [
            ("key-comrades", "Comrades, you have heard already about the strange dream that I had last night."),
            ("key-slavery", "No animal in England is free. The life of an animal is misery and slavery."),
            ("key-rebellion", "Rebellion. The animals dream of a rebellion that will set them free."),
            ("key-miserable", "Our lives are miserable, laborious, and short."),
            ("key-laborious", "Laborious. Full of hard work. Our lives are laborious."),
            ("key-ensconced", "Major was already ensconced on his bed of straw."),
            ("key-majestic", "He was still a majestic looking pig, with a wise and benevolent appearance."),
            ("key-benevolent", "Benevolent. Kind and generous."),
            ("key-cynical", "Benjamin seldom talked, and when he did, it was usually to make some cynical remark."),
            ("key-tremendous", "Boxer was respected for his steadiness of character and tremendous powers of work."),
            ("key-tyranny", "All the evils of this life spring from the tyranny of human beings."),
            ("key-manifesto", "Man is the only real enemy we have. Remove Man from the scene."),
            ("key-beasts", "Beasts of England, beasts of Ireland, Beasts of every land and hearing."),
            ("key-tremendous-powers", "tremendous"),
            ("passage-opening", "Mr. Jones, of the Manor Farm, had locked the hen-houses for the night, but was too drunk to remember to shut the pop-holes."),
            ("passage-major-speech", "Now, comrades, what is the nature of this life of ours? Let us face it: our lives are miserable, laborious, and short."),
            ("passage-boxer-clover", "Boxer was an enormous beast, nearly eighteen hands high, and as strong as any two ordinary horses put together."),
            ("shadowing", "Man is the only real enemy we have. Remove Man from the scene, and the root cause of hunger and overwork is abolished for ever."),
        ]
    },
    "0007": {  # Ch.II - The Rebellion
        "items": [
            ("key-animalism", "Animalism. These three had elaborated old Major's teachings into a complete system of thought, called Animalism."),
            ("key-expel", "They had expelled Mr. Jones from the farm. The rebellion had succeeded."),
            ("key-elaborate", "The pigs elaborated the old teachings into a complete system."),
            ("key-vivacious", "Snowball was a more vivacious pig than Napoleon, quicker in speech and more inventive."),
            ("key-persuasive", "Squealer was a brilliant talker. He could turn black into white."),
            ("key-abolish", "Abolish. To officially end something. They abolished the old ways."),
            ("key-principle", "The principle of Animalism was that all animals are equal."),
            ("key-resolution", "All animals are equal. That was the first and most important resolution."),
            ("key-counteract", "The pigs had to counteract the lies put about by Moses."),
            ("key-apathy", "Apathy. Lack of interest. The pigs met with much apathy at first."),
            ("key-treachery", "Treachery. Betrayal of trust."),
            ("key-sugarcandy", "Moses talked of a wonderful country called Sugarcandy Mountain."),
            ("passage-rebellion", "Suddenly, about nine o'clock, a great crash was heard in the farmhouse. The animals rushed in."),
            ("passage-seven", "The Seven Commandments were inscribed on the wall in white paint."),
            ("passage-mollie", "Will there still be sugar after the Rebellion? asked Mollie."),
        ]
    },
    "0008": {  # Ch.III - The Golden Age
        "items": [
            ("key-harvest", "How they toiled and sweated to get the hay in! But their efforts were rewarded."),
            ("key-toil", "Toil. To work very hard for a long period of time."),
            ("key-motto", "His answer to every problem, every setback, was: I will work harder!"),
            ("key-four-legs", "Four legs good, two legs bad."),
            ("key-supervise", "The pigs did not actually work, but directed and supervised the others."),
            ("key-admiration", "Boxer was the admiration of everybody."),
            ("key-voluntary", "Voluntary. Done by choice. Boxer did volunteer labour before the regular work began."),
            ("key-parasitical", "With the worthless parasitical human beings gone, there was more for everyone."),
            ("key-literacy", "Literacy. The ability to read and write. The animals tried to learn to read."),
            ("key-hoist", "First came the hoisting of the green flag."),
            ("key-committees", "Snowball formed various committees for the animals."),
            ("key-leadership", "With their superior knowledge it was natural that they should assume the leadership."),
            ("passage-harvest", "How they toiled and sweated to get the hay in! But their efforts were rewarded, for the harvest was an even bigger success than they had hoped."),
            ("passage-boxer-motto", "Boxer had made an arrangement with one of the cockerels to call him half an hour earlier. His answer to every problem was: I will work harder!"),
            ("passage-sunday", "On Sunday there was no work. The animals gathered in the big barn for the weekly meeting."),
        ]
    },
    "0009": {  # Ch.IV - The Battle of the Cowshed
        "items": [
            ("key-invasion", "The human beings were coming to take back the farm. The animals prepared for invasion."),
            ("key-repulse", "The animals successfully repulsed the human attack."),
            ("key-valor", "Snowball showed great valor in battle."),
            ("key-propaganda", "The humans spread propaganda about the terrible things happening on Animal Farm."),
            ("key-distorted", "Rumours of the wonderful farm continued in distorted forms."),
            ("key-circulate", "News of the rebellion began to circulate across the county."),
            ("key-defensive", "Snowball had studied an old book of Julius Caesar's campaigns and planned the defensive operations."),
            ("passage-battle", "Snowball, who had studied an old book of Julius Caesar's campaigns, was in charge of the defensive operations."),
            ("passage-victory", "The animals had won their first great victory. They fired the gun and hoisted the flag."),
        ]
    },
    "0010": {  # Ch.V - Napoleon's Coup
        "items": [
            ("key-coup", "Napoleon stood up and uttered a high-pitched whimper. Instantly, nine enormous dogs rushed in."),
            ("key-consolidate", "Napoleon began to consolidate his power. He announced that all meetings would be abolished."),
            ("key-controversy", "But of all their controversies, none was so bitter as the windmill debate."),
            ("key-dispute", "Snowball and Napoleon disputed at every point where disagreement was possible."),
            ("key-usurp", "Napoleon had usurped the leadership from Snowball."),
            ("key-banish", "Snowball was banished from the farm by the dogs."),
            ("key-scheme", "Snowball was full of plans and schemes for innovations and improvements."),
            ("key-slogan", "The sheep had taken to bleating Four legs good, two legs bad at crucial moments."),
            ("key-windmill", "Snowball declared that this was just the place for a windmill."),
            ("key-mollie", "Three days later Mollie disappeared. She had chosen ribbons and sugar over the revolution."),
            ("passage-coup", "At this moment Napoleon stood up and cast a peculiar glance at Snowball. He uttered a high-pitched whimper, and nine enormous dogs rushed into the barn."),
            ("passage-windmill", "Snowball used a shed as his study. With a piece of chalk gripped between the knuckles of his trotter, he drew line after line."),
        ]
    },
    "0011": {  # Ch.VI - The Windmill
        "items": [
            ("key-sabotage", "Napoleon announced that Snowball had come to the farm at night and sabotaged the windmill."),
            ("key-exploitation", "The animals worked like slaves. But they were told they were happy in their work."),
            ("key-ration", "The corn ration was drastically reduced."),
            ("key-trade", "Animal Farm would now engage in trade with the neighbouring farms."),
            ("key-policy", "Napoleon announced a new policy. They would sell hay and eggs for money."),
            ("key-sacrifice", "The hens should welcome this sacrifice as their contribution to the windmill."),
            ("key-consent", "The animals gave their consent, though it was not asked for."),
            ("key-deceive", "Napoleon used Mr. Whymper to deceive the outside world about the food situation."),
            ("key-commandment-amended", "No animal shall drink alcohol. But no one noticed that to excess had been added."),
            ("passage-trade", "Never to have any dealings with human beings had not that been among the earliest resolutions?"),
            ("passage-boxer-boulder", "Nothing could have been achieved without Boxer. When the boulder began to slip, it was always Boxer who strained himself."),
        ]
    },
    "0012": {  # Ch.VII - The Purge
        "items": [
            ("key-purge", "The dogs bounded forward and sank their teeth into the throats of the accused."),
            ("key-confess", "Under pressure the animals began to confess their imaginary crimes."),
            ("key-execute", "The executions took place in the farmyard, one by one."),
            ("key-terror", "A wave of terror swept through the farm."),
            ("key-famine", "Starvation seemed to stare them in the face."),
            ("key-conceal", "Napoleon ordered the empty bins to be filled with sand and covered with grain."),
            ("key-treason", "The animals were accused of treason for conspiring with Snowball."),
            ("key-beasts-abolished", "The song Beasts of England was abolished. A new song in praise of Napoleon replaced it."),
            ("key-infanticide", "It was put about that they had resorted to cannibalism and infanticide."),
            ("passage-confessions", "They were all slain on the spot. And when the last animal had fallen, the dogs came back covered with blood."),
            ("passage-clover", "Clover pulled herself to her feet and watched the last of her comrades dragged away. She felt a terrible sadness."),
        ]
    },
    "0013": {  # Ch.VIII - The Battle of the Windmill
        "items": [
            ("key-forgery", "Frederick had paid for the timber with forged banknotes. It was forgery."),
            ("key-explosives", "The men brought explosives and blew up the windmill."),
            ("key-bombard", "The men began to bombard the windmill with their field gun."),
            ("key-demolish", "The windmill had been demolished by the explosion."),
            ("key-blast", "The blast was heard for miles. The windmill lay in ruins."),
            ("key-deception", "Frederick deceived Napoleon with the forged banknotes."),
            ("key-whisky", "Napoleon drank whisky and became very drunk."),
            ("key-propaganda", "Squealer proved to the animals that production had increased by two hundred percent."),
            ("passage-windmill-destroyed", "The windmill had been blown to pieces. For a moment the animals stood frozen in horror."),
            ("passage-squealer-figures", "On Sunday mornings Squealer would read out lists of figures proving that everything was getting better and better."),
        ]
    },
    "0014": {  # Ch.IX - Boxer's Fall
        "items": [
            ("key-overwork", "Boxer had worked himself to the point of collapse. He died of overwork."),
            ("key-exploitation", "The pigs had been exploiting Boxer's strength all along."),
            ("key-deception", "The pigs deceived the animals about Boxer's fate. They claimed he went to a hospital."),
            ("key-knacker", "The van from the knacker's yard arrived to take Boxer away. A knacker is a horse slaughterer."),
            ("key-collapse", "Boxer collapsed. He could not get up."),
            ("key-loyalty", "Boxer's loyalty to the farm was absolute. He believed Napoleon is always right."),
            ("key-betrayal", "The pigs betrayed Boxer by selling him to the knacker."),
            ("passage-boxer-fall", "It was a Saturday evening. Boxer had collapsed. He could not get up."),
            ("passage-knacker", "Benjamin saw the van coming. He raised his voice and called out: Fools! Do you not see what is written on the side of that van?"),
        ]
    },
    "0015": {  # Ch.X - The Final Transformation
        "items": [
            ("key-indistinguishable", "The creatures outside looked from pig to man and from man to pig. It was impossible to say which was which."),
            ("key-transformation", "The pigs had learned to walk on their hind legs. They carried whips."),
            ("key-more-equal", "All animals are equal, but some animals are more equal than others."),
            ("key-prosperity", "The farm was more prosperous now. But the animals themselves were not any richer."),
            ("key-commandments-reduced", "There was only one commandment now: All animals are equal, but some are more equal than others."),
            ("key-tyranny-returns", "Napoleon had become as bad as any human tyrant. The revolution had come full circle."),
            ("key-forgotten", "Snowball was forgotten. Boxer was forgotten. Only the few who had known them remembered."),
            ("passage-final", "Twelve voices were shouting in anger, and they were all alike. No question now what had happened to the faces of the pigs."),
            ("passage-pig-men", "The creatures outside looked from pig to man, and from man to pig, and from pig to man again. But already it was impossible to say which was which."),
        ]
    },
}

def generate_one(item_key, text):
    """Generate one TTS audio file."""
    filename = f"{item_key}.mp3"
    output_path = os.path.join(AUDIO_DIR, filename)
    
    if os.path.exists(output_path):
        return f"  ⏭ {filename} (exists)"
    
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
        return f"  ❌ {filename}: {result.stderr[:120]}"

def generate_lesson(lesson_id, parallel=True):
    """Generate all audio for one lesson."""
    lesson = LESSON_AUDIO.get(lesson_id)
    if not lesson:
        print(f"Unknown lesson: {lesson_id}")
        return
    
    items = lesson["items"]
    
    # Build actual filenames: {lesson_id}-{key}.mp3
    file_text_pairs = [(f"{lesson_id}-{key}", text) for key, text in items]
    
    print(f"\n📢 Lesson {lesson_id} — {len(items)} audio files")
    
    if parallel and len(file_text_pairs) > 1:
        with ThreadPoolExecutor(max_workers=6) as executor:
            futures = {executor.submit(generate_one, fk, txt): fk for fk, txt in file_text_pairs}
            for future in as_completed(futures):
                print(future.result())
    else:
        for fk, txt in file_text_pairs:
            print(generate_one(fk, txt))
    
    print(f"  ✅ Lesson {lesson_id} done")

def generate_all(parallel=True):
    """Generate audio for all lessons."""
    total_files = sum(len(v["items"]) for v in LESSON_AUDIO.values())
    print(f"🎯 Total: {len(LESSON_AUDIO)} lessons, ~{total_files} audio files")
    print(f"📁 Target: {AUDIO_DIR}")
    start = time.time()
    
    for lesson_id in sorted(LESSON_AUDIO.keys()):
        generate_lesson(lesson_id, parallel=parallel)
    
    elapsed = time.time() - start
    print(f"\n✨ All done in {elapsed:.1f}s")

if __name__ == "__main__":
    parallel = "--parallel" in sys.argv or "-p" in sys.argv
    
    if "--all" in sys.argv:
        generate_all(parallel=parallel)
    elif len(sys.argv) > 1:
        for arg in sys.argv[1:]:
            if arg.startswith("00"):
                generate_lesson(arg, parallel=parallel)
            elif arg == "--parallel" or arg == "-p":
                continue
            else:
                print(f"Usage: {sys.argv[0]} [--all|--parallel|<lesson-id>...]")
    else:
        print(f"Usage: {sys.argv[0]} [--all|--parallel|<lesson-id>...]")
        print(f"Available: {', '.join(sorted(LESSON_AUDIO.keys()))}")
