# "Mind Games: CIE 0266 Psychology" S01E01 "Seven Plus Or Minus Dad" (Topic: Memory & Forgetting)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: processes-and-msm, working-memory-levels, reconstructive-schemas, explanations-forgetting, brain-and-amnesia.

EP = dict(
    topic="memory-and-forgetting",
    logline="Dad refuses to write a twelve-item supermarket list because his mind is 'a steel vault', then returns with only the first two and last two items. "
            "Dr. Synapse, Vani, and Examiner Chen unpack Murdock's serial position curve, Multi-Store and Working Memory, Craik and Tulving, Bartlett's schemas, forgetting, and patient H.M."
)

D_MSM = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">
<rect width="520" height="240" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="16" y="20" width="110" height="58" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="71" y="42" fill="#38bdf8">SENSORY</text>
<text x="71" y="58" fill="#cbd5e1" font-weight="normal">Modality · &lt;1 s</text>
<path d="M126 49 H182" stroke="#fde047" stroke-width="2"/>
<text x="154" y="42" fill="#fde047" font-size="10">Attention</text>
<rect x="182" y="20" width="132" height="58" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>
<text x="248" y="42" fill="#a78bfa">SHORT-TERM</text>
<text x="248" y="58" fill="#cbd5e1" font-weight="normal">7±2 · Acoustic · 18-30s</text>
<path d="M314 49 H376" stroke="#4ade80" stroke-width="2"/>
<text x="345" y="42" fill="#4ade80" font-size="10">Rehearsal</text>
<rect x="376" y="20" width="128" height="58" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="440" y="42" fill="#4ade80">LONG-TERM</text>
<text x="440" y="58" fill="#cbd5e1" font-weight="normal">Unlimited · Semantic</text>
</g>
<path d="M60 112 V212 H470" stroke="#94a3b8" stroke-width="2" fill="none"/>
<path d="M75 124 Q130 198 255 202 Q380 198 455 120" stroke="#f472b6" stroke-width="4" fill="none"/>
<g font-family="sans-serif" font-size="12" font-weight="bold">
<text x="82" y="118" fill="#4ade80">Primacy (LTM)</text>
<text x="265" y="186" fill="#94a3b8" text-anchor="middle">Middle forgotten</text>
<text x="450" y="114" fill="#a78bfa" text-anchor="end">Recency (STM)</text>
<text x="265" y="230" fill="#fde047" text-anchor="middle">Murdock (1962) Serial Position Curve</text>
</g>
</svg>"""

D_WMM = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">
<rect width="520" height="240" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="95" y="14" width="160" height="40" rx="8" fill="#3b0764" stroke="#fde047" stroke-width="2"/>
<text x="175" y="38" fill="#fde047">CENTRAL EXECUTIVE</text>
<path d="M130 54 L65 86 M175 54 V86 M220 54 L285 86" stroke="#cbd5e1" stroke-width="1.8"/>
<rect x="12" y="86" width="104" height="58" rx="7" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="64" y="108" fill="#38bdf8">Phonological</text>
<text x="64" y="126" fill="#cbd5e1" font-weight="normal">Inner ear + voice</text>
<rect x="124" y="86" width="102" height="58" rx="7" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
<text x="175" y="108" fill="#f472b6">Episodic Buffer</text>
<text x="175" y="126" fill="#cbd5e1" font-weight="normal">Integrates info</text>
<rect x="234" y="86" width="104" height="58" rx="7" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="286" y="108" fill="#4ade80">Visuo-Spatial</text>
<text x="286" y="126" fill="#cbd5e1" font-weight="normal">Inner eye</text>
<rect x="64" y="168" width="222" height="36" rx="7" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>
<text x="175" y="190" fill="#a78bfa">LONG-TERM MEMORY</text>
<path d="M64 144 V168 M175 144 V168 M286 144 V168" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
</g>
<g font-family="sans-serif" font-size="11" font-weight="bold">
<text x="432" y="30" fill="#fde047" text-anchor="middle">Craik &amp; Tulving</text>
<rect x="366" y="158" width="36" height="46" fill="#64748b"/>
<rect x="414" y="116" width="36" height="88" fill="#38bdf8"/>
<rect x="462" y="54" width="36" height="150" fill="#4ade80"/>
<text x="384" y="220" fill="#cbd5e1" text-anchor="middle" font-size="10">Visual</text>
<text x="432" y="220" fill="#cbd5e1" text-anchor="middle" font-size="10">Rhyme</text>
<text x="480" y="220" fill="#4ade80" text-anchor="middle" font-size="10">Semantic</text>
</g>
</svg>"""

D_FORGET = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<g font-family="sans-serif" font-size="12" font-weight="bold">
<rect x="20" y="20" width="225" height="84" rx="8" fill="#1e293b" stroke="#fb923c" stroke-width="2"/>
<text x="132" y="42" fill="#fb923c" text-anchor="middle">PROACTIVE INTERFERENCE</text>
<text x="132" y="66" fill="#f8fafc" text-anchor="middle">OLD memory → blocks NEW</text>
<text x="132" y="88" fill="#94a3b8" font-size="11" font-weight="normal" text-anchor="middle">Old PIN ruins learning new PIN</text>
<rect x="275" y="20" width="225" height="84" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
<text x="387" y="42" fill="#f472b6" text-anchor="middle">RETROACTIVE INTERFERENCE</text>
<text x="387" y="66" fill="#f8fafc" text-anchor="middle">NEW memory → wipes OLD</text>
<text x="387" y="88" fill="#94a3b8" font-size="11" font-weight="normal" text-anchor="middle">New Spanish overwrites old French</text>
<rect x="20" y="122" width="480" height="80" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="260" y="145" fill="#38bdf8" text-anchor="middle">BARTLETT: RECONSTRUCTIVE SCHEMAS (War of the Ghosts)</text>
<text x="260" y="168" fill="#fde047" text-anchor="middle" font-size="11">Canoes → Boats · Seal hunting → Fishing · Ghosts dropped</text>
<text x="260" y="188" fill="#cbd5e1" text-anchor="middle" font-size="11" font-weight="normal">Assimilation · Levelling · Sharpening · Confabulation</text>
</g>
</svg>"""

D_BRAIN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<ellipse cx="145" cy="108" rx="105" ry="74" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
<circle cx="78" cy="92" r="24" fill="#38bdf8" fill-opacity="0.35" stroke="#38bdf8" stroke-width="2"/>
<ellipse cx="152" cy="116" rx="28" ry="15" fill="#4ade80" fill-opacity="0.4" stroke="#4ade80" stroke-width="2"/>
<circle cx="122" cy="126" r="11" fill="#f472b6" fill-opacity="0.5" stroke="#f472b6" stroke-width="2"/>
<ellipse cx="215" cy="162" rx="34" ry="22" fill="#fde047" fill-opacity="0.35" stroke="#fde047" stroke-width="2"/>
<g font-family="sans-serif" font-size="12" font-weight="bold">
<text x="280" y="36" fill="#38bdf8">Prefrontal: Working memory</text>
<text x="280" y="64" fill="#4ade80">Hippocampus: Episodic LTM</text>
<text x="280" y="92" fill="#f472b6">Amygdala: Emotional tags</text>
<text x="280" y="120" fill="#fde047">Cerebellum: Procedural skills</text>
<path d="M280 156 H495" stroke="#94a3b8" stroke-width="2"/>
<line x1="388" y1="142" x2="388" y2="172" stroke="#ef4444" stroke-width="3"/>
<text x="388" y="138" fill="#ef4444" text-anchor="middle" font-size="11">H.M. Surgery</text>
<text x="330" y="190" fill="#fb923c" text-anchor="middle" font-size="11">← Retrograde</text>
<text x="446" y="190" fill="#4ade80" text-anchor="middle" font-size="11">Anterograde →</text>
<text x="388" y="212" fill="#cbd5e1" text-anchor="middle" font-size="10" font-weight="normal">Milner et al. (1968): No new episodic LTM</text>
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
