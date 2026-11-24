# "Mind Games: CIE 0266 Psychology" S01E01 "Seven Plus Or Minus Dad" (Topic: Memory & Forgetting)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: processes-and-msm, working-memory-levels, reconstructive-schemas, explanations-forgetting, brain-and-amnesia.

EP = dict(
    topic="memory-and-forgetting",
    logline="Dad refuses to write a twelve-item supermarket list because his mind is 'a steel vault', then returns with only the first two and last two items. "
            "Dr. Synapse, Vani, and Examiner Chen unpack Murdock's serial position curve, Multi-Store and Working Memory, Craik and Tulving, Bartlett's schemas, forgetting, and patient H.M."
)

D_MSM = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<rect x="14" y="14" width="194" height="104" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="111" y="54" fill="#38bdf8">SENSORY</text>
<text x="111" y="96" fill="#cbd5e1" font-weight="normal">&lt;1 s</text>
<path d="M208 66 H244" stroke="#fde047" stroke-width="4"/>
<rect x="244" y="14" width="212" height="104" rx="10" fill="#1e293b" stroke="#a78bfa" stroke-width="3"/>
<text x="350" y="54" fill="#a78bfa">STM (7±2)</text>
<text x="350" y="96" fill="#cbd5e1" font-weight="normal">18–30s Acous.</text>
<path d="M456 66 H492" stroke="#4ade80" stroke-width="4"/>
<rect x="492" y="14" width="194" height="104" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="589" y="54" fill="#4ade80">LTM (∞)</text>
<text x="589" y="96" fill="#cbd5e1" font-weight="normal">Semantic</text>
</g>
<path d="M56 142 V264 H646" stroke="#94a3b8" stroke-width="3" fill="none"/>
<path d="M76 156 Q160 250 350 252 Q540 250 626 154" stroke="#f472b6" stroke-width="5" fill="none"/>
<g font-family="sans-serif" font-size="28" font-weight="bold">
<text x="84" y="160" fill="#4ade80">Primacy (LTM)</text>
<text x="618" y="160" fill="#a78bfa" text-anchor="end">Recency (STM)</text>
<text x="350" y="302" fill="#fde047" text-anchor="middle">Murdock (1962) Serial Position Curve</text>
</g>
</svg>"""

D_WMM = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<rect x="16" y="14" width="424" height="54" rx="10" fill="#3b0764" stroke="#fde047" stroke-width="3"/>
<text x="228" y="52" fill="#fde047">CENTRAL EXECUTIVE</text>
<rect x="16" y="84" width="424" height="52" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="228" y="120" fill="#38bdf8">Phonological Loop (Sound)</text>
<rect x="16" y="148" width="424" height="52" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="228" y="184" fill="#4ade80">Visuo-Spatial (Inner Eye)</text>
<rect x="16" y="212" width="424" height="52" rx="10" fill="#1e293b" stroke="#f472b6" stroke-width="3"/>
<text x="228" y="248" fill="#f472b6">Episodic Buffer ↔ LTM</text>
<text x="228" y="302" fill="#cbd5e1">Baddeley &amp; Hitch WMM</text>
<text x="572" y="48" fill="#fde047">Levels</text>
<rect x="470" y="198" width="52" height="62" rx="4" fill="#64748b"/>
<rect x="544" y="142" width="52" height="118" rx="4" fill="#38bdf8"/>
<rect x="618" y="72" width="52" height="188" rx="4" fill="#4ade80"/>
<text x="496" y="300" fill="#cbd5e1">Vis</text>
<text x="570" y="300" fill="#38bdf8">Rhy</text>
<text x="644" y="300" fill="#4ade80">Sem</text>
</g>
</svg>"""

D_FORGET = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<rect x="14" y="14" width="328" height="148" rx="12" fill="#1e293b" stroke="#fb923c" stroke-width="3"/>
<text x="178" y="56" fill="#fb923c">PROACTIVE</text>
<text x="178" y="102" fill="#f8fafc">OLD → blocks NEW</text>
<text x="178" y="142" fill="#cbd5e1" font-weight="normal">Old PIN ruins new</text>
<rect x="358" y="14" width="328" height="148" rx="12" fill="#1e293b" stroke="#f472b6" stroke-width="3"/>
<text x="522" y="56" fill="#f472b6">RETROACTIVE</text>
<text x="522" y="102" fill="#f8fafc">NEW → wipes OLD</text>
<text x="522" y="142" fill="#cbd5e1" font-weight="normal">Spanish wipes French</text>
<rect x="14" y="176" width="672" height="130" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="350" y="218" fill="#38bdf8">BARTLETT: RECONSTRUCTIVE SCHEMAS</text>
<text x="350" y="258" fill="#fde047">Canoes → Boats · Ghosts dropped</text>
<text x="350" y="294" fill="#cbd5e1" font-weight="normal">Assimilation · Levelling · Sharpening</text>
</g>
</svg>"""

D_BRAIN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold">
<rect x="16" y="10" width="668" height="172" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2"/>
<text x="36" y="48" fill="#38bdf8">Prefrontal: Working memory</text>
<text x="36" y="88" fill="#4ade80">Hippocampus: Episodic LTM</text>
<text x="36" y="128" fill="#f472b6">Amygdala: Emotional tags</text>
<text x="36" y="168" fill="#fde047">Cerebellum: Procedural skills</text>
<path d="M40 256 H660" stroke="#94a3b8" stroke-width="4"/>
<line x1="350" y1="238" x2="350" y2="274" stroke="#ef4444" stroke-width="5"/>
<text x="350" y="226" fill="#ef4444" text-anchor="middle">H.M. Surgery</text>
<text x="175" y="302" fill="#fb923c" text-anchor="middle">← Retrograde</text>
<text x="525" y="302" fill="#4ade80" text-anchor="middle">Anterograde →</text>
</g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("kitchen", [("vani", 260), ("mum", 600), ("dad", 940)])
L("mum", "Vikram, read back the twelve supermarket items before you leave. Write them down.", mood="determined", shot="close", prop="book")
L("dad", "Write them down? My brain is a steel vault, dear. Photographic. Shoot.", mood="smug", shot="close")
L("mum", "Milk, pandan cake, garlic, tofu, batteries, dish soap, ginger, eggs, bananas, Milo, chilli, tissues.", mood="neutral", shot="close")
L("vani", "Twelve unrelated items, zero rehearsal, no chunking. In psychology, we call this an impending disaster.", mood="deadpan", shot="close")
L("dad", "Watch and weep, Year Eleven. Not a single sticky note.", mood="excited", shot="close", gap=0.4)

scene("checkout", [("vani", 260), ("dad", 600), ("cashier", 1000)], "FORTY MINUTES LATER · Checkout Lane Four")
L("cashier", "Okay uncle, let me scan your grand haul. Milk. Pandan cake. Chilli. Tissues. That is four items.", mood="bored", shot="close")
L("vani", "Wait. First two on Mum's list, and last two on Mum's list. Everything in the middle vanished!", mood="shock", shot="close")
L("dad", "The middle eight items were optional vibes.", mood="worried", shot="close", gap=0.3)
freeze("FOUR OUT OF TWELVE", 2.5, narrator="Narrator: The steel vault had a giant hole in the middle.")

confess("vani", "VANI · Sixteen · CIE Psychology Student")
L("vani", "My dad did not lose his mind. He just walked face first into Murdock's serial position curve.", mood="smug", gap=0.5)

title()

# ---------------- ACT 1: MULTI-STORE MODEL & SERIAL POSITION ----------------
scene("mall", [("vani", 260), ("dad", 600)])
L("dad", "How did pandan cake survive in my head while tofu evaporated? Tofu betrayed me.", mood="annoyed", shot="two")
sfx("poof")
poof("synapse", 960)
L("synapse", "Greetings, mortals! Doctor Synapse here, summoned by textbook short term memory displacement!", mood="excited", shot="close")
L("dad", "Why is a glowing purple brain hovering next to the trolley?", mood="shock", shot="close")
L("vani", "Relax Dad, he runs the Neuro-Board. Show him Atkinson and Shiffrin's Multi-Store Model from nineteen sixty eight.", mood="happy", shot="close")
L("synapse", "Every memory passes through three stores, differing in coding, capacity, and duration.", mood="teach", shot="close",
  boardClear=True, board="Multi-Store Model: Atkinson & Shiffrin", diagram=D_MSM)
L("synapse", "First, the Sensory Register holds raw modality-specific input for under a second. Pay attention, and it enters Short-Term Memory.", mood="teach", shot="close",
  board="STM: 7±2 items · Acoustic · 18-30 s")
L("vani", "Short-Term Memory codes acoustically, holds seven plus or minus two items, and lasts eighteen to thirty seconds.", mood="teach", shot="close",
  board="LTM: Unlimited · Semantic · Lifetime")
L("synapse", "Maintenance rehearsal moves items to Long-Term Memory, coded semantically with unlimited capacity for life!", mood="teach", shot="close")
L("vani", "That explains your trolley! Murdock in nineteen sixty two found a U-shaped serial position curve.", mood="excited", shot="close",
  boardClear=True, board="Murdock (1962): U-shaped recall curve", diagram=D_MSM)
L("synapse", "Early words show the primacy effect, rehearsed into Long-Term Memory. Milk and pandan cake!", mood="teach", shot="close",
  board="Primacy = rehearsed into LTM")
L("vani", "Final words show the recency effect, still in Short-Term Memory. The middle eight got displaced!", mood="happy", shot="close",
  board="Recency = still in STM · Middle lost")
L("dad", "So I am not forgetful. I am replicating cognitive science.", mood="smug", shot="close")
sfx("trombone")

# ---------------- ACT 2: WORKING MEMORY & LEVELS OF PROCESSING ----------------
card("AISLE SEVEN", "Dad tries doing two things at once", 2.3)
scene("mall", [("vani", 260), ("dad", 600), ("synapse", 960)])
L("dad", "Watch! I can chant ginger eggs bananas while reading the aisle map for tofu!", mood="determined", shot="close", prop="map")
L("vani", "You actually did both! Because Short-Term Memory is not one passive box.", mood="happy", shot="close")
L("synapse", "Baddeley and Hitch in nineteen seventy four proposed the active Working Memory Model!", mood="teach", shot="close",
  boardClear=True, board="Working Memory: Baddeley & Hitch (1974)", diagram=D_WMM)
L("synapse", "The Central Executive is the attentional boss steering three limited slave systems.", mood="teach", shot="close",
  board="Phonological Loop = verbal + acoustic")
L("vani", "Chanting used your Phonological Loop: phonological store inner ear plus articulatory process inner voice.", mood="teach", shot="close",
  board="Visuo-Spatial = visual · Buffer = links")
L("synapse", "Reading the map used your Visuo-Spatial Sketchpad! Dual-task studies show verbal and visual tasks run together, whereas two visual tasks clash.", mood="teach", shot="close")
L("vani", "And the Episodic Buffer integrates sight and sound and links to Long-Term Memory.", mood="happy", shot="close")
L("dad", "Okay, what if I stare at the word TOFU in capital letters so I never forget it?", mood="thinking", shot="close")
L("synapse", "Terrible plan! Craik and Tulving in nineteen seventy five showed memory depends on depth of processing, not mere repetition.", mood="eyeroll", shot="close",
  boardClear=True, board="Craik & Tulving (1975): Depth of Coding", diagram=D_WMM)
L("vani", "Checking capital letters is shallow structural processing. Asking if tofu rhymes with shoe is phonemic processing.", mood="teach", shot="close",
  board="Shallow: Structural < Phonemic (rhyme)")
L("synapse", "Asking whether tofu fits into Mum's mapo dish is deep semantic processing by meaning. Semantic questions gave the highest recall by far!", mood="teach", shot="close",
  board="Deep SEMANTIC processing = best recall")
sfx("ding")

# ---------------- ACT 3: BARTLETT'S SCHEMAS & FORGETTING ----------------
card("BACK HOME", "Dad reconstructs his alibi", 2.3)
scene("living", [("vani", 240), ("mum", 560), ("dad", 880)])
L("dad", "Sweetheart, I remember the list clearly! You asked for dragonfruit, oat milk, and artisanal sourdough.", mood="smug", shot="close")
L("mum", "I asked for bananas, regular milk, and pandan cake! Why are you inventing hipster groceries?", mood="annoyed", shot="close")
scene("living", [("vani", 260), ("dad", 600), ("synapse", 960)])
sfx("poof")
L("synapse", "Classic Bartlett! Memory is not a video camera. It is active reconstruction guided by cultural schemas, mental packets of past knowledge.", mood="teach", shot="close",
  boardClear=True, board="Bartlett (1932): Reconstructive Memory", diagram=D_FORGET)
L("vani", "In War of the Ghosts, British participants read a Native American folk tale. Over serial reproductions, canoes became boats and seal hunting became fishing!", mood="teach", shot="close",
  board="War of the Ghosts → schema distortions")
L("synapse", "Stories shortened via levelling, weird details dropped, familiar ones popped via sharpening, and gaps filled by confabulation. That is why eyewitness testimony can distort!", mood="teach", shot="close",
  board="Assimilation · Levelling · Confabulation")
L("dad", "Wait, I also typed our old house alarm code into the supermarket locker and locked my keys inside!", mood="worried", shot="close", prop="phone")
L("vani", "That is proactive interference! Old memory disrupts new learning. If a new password made you forget the old one, that would be retroactive interference.", mood="happy", shot="close",
  boardClear=True, board="Proactive: OLD→NEW · Retro: NEW→OLD", diagram=D_FORGET)
L("synapse", "We also forget via trace decay, displacement, Freud's repression of trauma, or cue-dependent retrieval failure when context or internal state cues are missing!", mood="teach", shot="close",
  board="Cue-dependent: Context & State cues")

confess("dad", "VIKRAM · Dad · Victim Of Proactive Interference")
L("dad", "So when I walk into the kitchen and forget why I came in, I just need to walk back to the sofa to restore my environmental context cue. Science excuses nap time.", mood="smug", gap=0.5)

# ---------------- ACT 4: BRAIN, H.M. & EXAMINER TRAP ----------------
scene("living", [("vani", 220), ("dad", 480), ("synapse", 740)])
L("vani", "Last piece of Topic One: where do memories live in the brain?", mood="determined", shot="close")
L("synapse", "The hippocampus consolidates new episodic and semantic declarative memories into Long-Term Memory, while the prefrontal cortex drives working memory.", mood="teach", shot="close",
  boardClear=True, board="Hippocampus = episodic LTM consolidation", diagram=D_BRAIN)
L("vani", "The amygdala tags emotional memories, and the cerebellum plus basal ganglia store procedural motor skills, like riding a bike!", mood="teach", shot="close",
  board="Cerebellum = procedural · Amygdala = fear")
L("synapse", "Milner and colleagues in nineteen sixty eight studied patient H.M., whose hippocampus was removed for severe epilepsy. He suffered profound anterograde amnesia!", mood="teach", shot="close",
  board="H.M.: Anterograde amnesia (intact skill)")
L("vani", "H.M. could not form new episodic Long-Term Memories, yet his Short-Term Memory worked and he learned mirror-drawing via his intact cerebellum!", mood="excited", shot="close")
L("dad", "Easy! So Short-Term Memory codes by meaning, and H.M. had retrograde amnesia because he forgot everything!", mood="smug", shot="close")
sfx("buzzer")
poof("examiner", 1000)
L("examiner", "STOP THE CLOCK! Examiner Chen, Cambridge zero two six six mark-scheme patrol! Vikram just threw away four marks in one breath!", mood="shock", shot="close",
  boardClear=True, board="EXAMINER MARK-SCHEME TRAP!")
L("examiner", "Trap one! Never write that Short-Term Memory codes semantically or Long-Term Memory codes acoustically. Short-Term is acoustic, Long-Term is semantic!", mood="teach", shot="close",
  board="✘ Never: STM = semantic / LTM = acoustic", prop="book")
L("examiner", "Trap two! Retrograde amnesia loses memories from BEFORE brain damage. Anterograde amnesia means failing to form NEW Long-Term Memories AFTER damage, like H.M.!", mood="teach", shot="close",
  board="✔ STM=acoustic · Anterograde=no NEW LTM")
L("vani", "Hear that, Dad? Name coding, capacity, AND duration distinctly, and never swap anterograde with retrograde!", mood="happy", shot="close",
  board="✔ Retrograde = loses OLD pre-damage LTM")
sfx("ding")

# ---------------- BUTTON ----------------
scene("kitchen", [("vani", 260), ("mum", 600), ("dad", 940)])
L("mum", "Vikram went back to the supermarket with deep semantic processing. Let us inspect the bag.", mood="neutral", shot="close")
L("dad", "I linked every item to a rich meaningful recipe story! Tofu, ginger, garlic, eggs, dish soap, Milo, bananas, batteries!", mood="excited", shot="close", prop="bucket")
L("vani", "Wait. Where are the keys to the car?", mood="thinking", shot="close")
L("dad", "Still in locker four. Context cue pending.", mood="deadpan", shot="close")
sfx("trombone")
L("synapse", "Write a shopping list, Vikram! Even a hippocampus appreciates external storage!", mood="smug", shot="wide", offstage=True, gap=0.6)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Dr. Synapse gives you 5 seconds per question!", 2.8)
challenge(
    1,
    "In Murdock (1962), better recall of the FIRST words on a list is called the...?",
    "PRIMACY EFFECT",
    "Early words rehearsed → transferred to LTM",
    "Question one. In Murdock's nineteen sixty two study, what do we call superior recall of the first few words on a list?",
    "The primacy effect. Early words get more rehearsal and transfer into Long-Term Memory."
)
challenge(
    2,
    "Your OLD phone PIN stops you remembering your NEW PIN. Which interference is this?",
    "PROACTIVE",
    "Proactive = OLD memory blocks NEW learning",
    "Question two. Your old phone password keeps blocking your new password. Which type of interference is that?",
    "Proactive interference. Old memories push forward and disrupt new learning."
)
challenge(
    3,
    "After hippocampus surgery, patient H.M. could not form new episodic LTMs. Name the amnesia.",
    "ANTEROGRADE",
    "Anterograde = cannot form NEW LTM after damage",
    "Question three. After hippocampus surgery, patient H.M. could not form new episodic Long-Term Memories. Name this amnesia.",
    "Anterograde amnesia. Meanwhile, his procedural mirror-drawing stayed intact thanks to his cerebellum."
)
end_card()
