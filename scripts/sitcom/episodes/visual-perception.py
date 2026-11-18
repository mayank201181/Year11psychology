# "Mind Games: CIE 0266 Psychology" S01E04 "Seeing Is Deceiving" (Topic: Visual Perception)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: sensation-depth-constancy, gestalt-and-illusions, gibson-direct-theory, gregory-constructivist, perceptual-set-culture.

EP = dict(
    topic="visual-perception",
    logline="Mum snaps up a 'palatial living-room rug' online for ten dollars, only to discover the seller used Ponzo floorboards and miniature furniture to make a mouse mat look huge. "
            "Dr. Synapse, Vani, and Examiner Chen unpack depth cues, Gestalt laws, Gibson and Walk versus Gregory and Haber and Levin, perceptual set, and Bremner's Himba study."
)

D_DEPTH = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold">
<text x="260" y="20" fill="#fde047" text-anchor="middle">SENSATION (Retina) → PERCEPTION (Brain) &amp; DEPTH CUES</text>
<rect x="18" y="34" width="246" height="178" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="141" y="54" fill="#38bdf8" text-anchor="middle">MONOCULAR CUES (One Eye)</text>
<path d="M44 188 L122 82 M238 188 L160 82" stroke="#94a3b8" stroke-width="2"/>
<line x1="92" y1="126" x2="190" y2="126" stroke="#fde047" stroke-width="3"/>
<line x1="68" y1="164" x2="214" y2="164" stroke="#4ade80" stroke-width="3"/>
<circle cx="88" cy="96" r="14" fill="#f472b6"/>
<rect x="94" y="92" width="26" height="26" fill="#a78bfa"/>
<text x="141" y="202" fill="#cbd5e1" text-anchor="middle" font-weight="normal" font-size="10">Linear perspective · Occlusion · Relative size</text>
<rect x="280" y="34" width="222" height="178" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="391" y="54" fill="#4ade80" text-anchor="middle">BINOCULAR CUES (Two Eyes)</text>
<circle cx="346" cy="148" r="16" fill="#0f172a" stroke="#fde047" stroke-width="2"/>
<circle cx="436" cy="148" r="16" fill="#0f172a" stroke="#fde047" stroke-width="2"/>
<circle cx="391" cy="84" r="9" fill="#ef4444"/>
<path d="M346 132 L391 84 L436 132" stroke="#4ade80" stroke-width="2" stroke-dasharray="4 3"/>
<text x="391" y="182" fill="#f8fafc" text-anchor="middle" font-size="10">Retinal Disparity (2 views)</text>
<text x="391" y="200" fill="#cbd5e1" text-anchor="middle" font-weight="normal" font-size="10">Convergence (eye muscle angle)</text>
</g>
</svg>"""

D_ILLUSIONS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="16" y="18" width="234" height="194" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
<text x="133" y="40" fill="#f472b6">MÜLLER-LYER &amp; PONZO</text>
<g stroke="#38bdf8" stroke-width="3" fill="none">
<path d="M68 78 H198 M84 66 L68 78 L84 90 M182 66 L198 78 L182 90"/>
<path d="M68 122 H198 M52 110 L68 122 L52 134 M214 110 L198 122 L214 134"/>
</g>
<text x="133" y="154" fill="#fde047" font-size="10">Both shafts are EXACTLY 130 px!</text>
<text x="133" y="176" fill="#cbd5e1" font-weight="normal" font-size="10">Misplaced size-constancy scaling</text>
<text x="133" y="196" fill="#94a3b8" font-weight="normal" font-size="10">(Corners &amp; converging railway lines)</text>
<rect x="268" y="18" width="236" height="194" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>
<text x="386" y="40" fill="#a78bfa">GESTALT PRINCIPLES</text>
<circle cx="322" cy="86" r="16" fill="#4ade80"/>
<circle cx="386" cy="86" r="16" fill="#4ade80"/>
<circle cx="354" cy="138" r="16" fill="#4ade80"/>
<polygon points="322,86 386,86 354,138" fill="#0f172a"/>
<g fill="#fde047">
<circle cx="436" cy="76" r="6"/><circle cx="452" cy="76" r="6"/>
<circle cx="436" cy="96" r="6"/><circle cx="452" cy="96" r="6"/>
<circle cx="480" cy="76" r="6"/><circle cx="480" cy="96" r="6"/>
</g>
<text x="386" y="172" fill="#f8fafc" font-size="10">Closure · Proximity · Similarity</text>
<text x="386" y="194" fill="#cbd5e1" font-weight="normal" font-size="10">Figure-Ground (Rubin) · Necker Cube</text>
</g>
</svg>"""

D_THEORIES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="16" y="18" width="236" height="184" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="134" y="40" fill="#4ade80" font-size="12">GIBSON: DIRECT (BOTTOM-UP)</text>
<text x="134" y="64" fill="#fde047">Data-driven · No schemas needed</text>
<text x="134" y="88" fill="#cbd5e1" font-weight="normal">Optic array · Optic flow · Affordances</text>
<rect x="34" y="106" width="200" height="78" rx="6" fill="#0f172a" stroke="#4ade80"/>
<text x="134" y="128" fill="#4ade80">Gibson &amp; Walk (1960) Visual Cliff</text>
<text x="134" y="150" fill="#f8fafc" font-weight="normal" font-size="10">6-14m infants refuse deep glass side</text>
<text x="134" y="168" fill="#94a3b8" font-weight="normal" font-size="10">→ Early / innate depth perception</text>
<rect x="268" y="18" width="236" height="184" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="386" y="40" fill="#386df8" fill-opacity="0"/>
<text x="386" y="40" fill="#38bdf8" font-size="12">GREGORY: CONSTRUCTIVIST (TOP-DOWN)</text>
<text x="386" y="64" fill="#fde047">Schema-driven · Hypothesis testing</text>
<text x="386" y="88" fill="#cbd5e1" font-weight="normal">Brain fills gaps from past experience</text>
<rect x="286" y="106" width="200" height="78" rx="6" fill="#0f172a" stroke="#38bdf8"/>
<text x="386" y="128" fill="#38bdf8">Haber &amp; Levin (2001) + Illusions</text>
<text x="386" y="150" fill="#f8fafc" font-weight="normal" font-size="10">Familiar objects → accurate distance</text>
<text x="386" y="168" fill="#94a3b8" font-weight="normal" font-size="10">Explains 2D illusions via schemas!</text>
</g>
</svg>"""

D_SET = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="18" y="18" width="224" height="184" rx="8" fill="#1e293b" stroke="#fde047" stroke-width="2"/>
<text x="130" y="40" fill="#fde047">PERCEPTUAL SET (EXPECTATION)</text>
<text x="130" y="72" fill="#94a3b8" font-size="14">A</text>
<text x="74" y="108" fill="#38bdf8" font-size="14">12</text>
<text x="130" y="108" fill="#f8fafc" font-size="18">I3</text>
<text x="186" y="108" fill="#38bdf8" font-size="14">14</text>
<text x="130" y="144" fill="#94a3b8" font-size="14">C</text>
<text x="130" y="172" fill="#cbd5e1" font-weight="normal" font-size="10">Bruner &amp; Minturn: B or 13?</text>
<text x="130" y="190" fill="#cbd5e1" font-weight="normal" font-size="10">+ Hunger (Gilchrist) &amp; Emotion</text>
<rect x="260" y="18" width="242" height="184" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
<text x="381" y="40" fill="#f472b6">BREMNER ET AL. (2016) CULTURE</text>
<circle cx="332" cy="106" r="11" fill="#fde047"/>
<circle cx="304" cy="106" r="14" fill="none" stroke="#94a3b8" stroke-width="2"/>
<circle cx="360" cy="106" r="14" fill="none" stroke="#94a3b8" stroke-width="2"/>
<circle cx="434" cy="106" r="11" fill="#fde047"/>
<circle cx="414" cy="106" r="5" fill="none" stroke="#94a3b8" stroke-width="2"/>
<circle cx="454" cy="106" r="5" fill="none" stroke="#94a3b8" stroke-width="2"/>
<text x="381" y="156" fill="#f8fafc" font-size="10">Ebbinghaus Illusion: UK fooled strongly</text>
<text x="381" y="176" fill="#4ade80" font-size="10">Rural Himba (Namibia) much less fooled!</text>
<text x="381" y="194" fill="#cbd5e1" font-weight="normal" font-size="10">Local vs holistic visual environment</text>
</g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("vani", 260), ("mum", 600), ("dad", 940)])
L("mum", "Stand back, everyone! My ten-dollar luxury Persian living-room carpet has arrived in the post!", mood="excited", shot="close", prop="phone")
L("dad", "Ten dollars? Show me the website photo. Whoa, it stretches past a leather sofa down a massive wooden hallway!", mood="shock", shot="close")
L("mum", "Unbox the majesty, Vani!", mood="happy", shot="close")
L("vani", "Mum. It is twelve centimetres long. It fits underneath one teacup.", mood="deadpan", shot="close", prop="cushion")
L("mum", "Wait. That leather sofa in the photo was from a Barbie house?!", mood="shock", shot="close", gap=0.3)
freeze("TEN DOLLAR COASTER", 2.4, narrator="Narrator: Her tea mug has never felt more regal.")

confess("mum", "MUM · Bargain Queen · Temporarily Humbled")
L("mum", "The seller painted converging floorboards and tiny armchairs around a coaster. That is not interior design, that is psychological warfare.", mood="annoyed", gap=0.5)

title()

# ---------------- ACT 1: SENSATION VS PERCEPTION, DEPTH CUES & ILLUSIONS ----------------
scene("living", [("vani", 260), ("mum", 600)])
L("mum", "My eyeballs work fine, Vani! Why did my brain swear that tiny coaster was three metres wide?", mood="annoyed", shot="two")
sfx("poof")
poof("synapse", 960)
L("synapse", "Because sensation and perception are NOT the same process! Doctor Synapse reporting for visual duty!", mood="excited", shot="close")
L("vani", "Sensation is passive physical light detection by photoreceptors in your retina.", mood="teach", shot="close",
  boardClear=True, board="Sensation = receptors · Perception = brain", diagram=D_DEPTH)
L("synapse", "Perception is how your visual cortex actively organises and interprets those signals into meaningful objects!", mood="teach", shot="close")
L("vani", "A flat photo only gives monocular depth cues that work with one eye: converging linear perspective, texture gradient, and height in plane!", mood="teach", shot="close",
  board="Monocular: Linear perspective, occlusion")
L("synapse", "Putting a tiny dollhouse sofa behind the rug hijacked relative size and occlusion!", mood="teach", shot="close")
L("vani", "In real three-dimensional life, two eyes add binocular depth cues: retinal disparity and eye-muscle convergence!", mood="teach", shot="close",
  board="Binocular: Retinal disparity, convergence")
L("synapse", "Normally, size, shape, and colour constancy keep objects stable even when retinal images shrink. Yet clever geometry triggers illusions!", mood="teach", shot="close",
  boardClear=True, board="Constancy: stable size, shape & colour", diagram=D_ILLUSIONS)
L("vani", "In the Ponzo railway illusion and Müller-Lyer arrow-fin illusion, identical lines look unequal!", mood="happy", shot="close")
L("synapse", "Plus Gestalt laws show we perceive wholes: figure-ground in Rubin's vase, proximity, similarity, continuity, and closure!", mood="teach", shot="close",
  board="Gestalt: Figure-ground, closure, proximity")
L("vani", "And ambiguous figures like the Necker cube flip between two interpretations while retinal sensation stays unchanged!", mood="teach", shot="close",
  board="Illusions: Müller-Lyer, Ponzo, Necker")
sfx("ding")

# ---------------- ACT 2: GIBSON BOTTOM-UP VS GREGORY TOP-DOWN ----------------
card("PARK FIELD TEST", "Dad tests his depth perception", 2.3)
scene("park", [("vani", 260), ("dad", 600), ("synapse", 960)])
L("dad", "Ha! Nobody fools MY eyes outdoors. Look at that tiny toy car parked by the pond!", mood="smug", shot="close", prop="binoculars")
L("vani", "Dad, that is a real family saloon car two hundred metres away. Let us settle Gibson versus Gregory!", mood="deadpan", shot="close")
L("synapse", "In nineteen sixty six, Gibson proposed Direct Theory: purely bottom-up and data-driven!", mood="teach", shot="close",
  boardClear=True, board="Gibson: Direct BOTTOM-UP (optic array)", diagram=D_THEORIES)
L("vani", "The optic array of light already carries texture gradients, optic flow, and ecological affordances for action without needing schemas!", mood="teach", shot="close")
L("synapse", "Supporting Gibson, Gibson and Walk in nineteen sixty tested crawling infants aged six to fourteen months on a glass Visual Cliff!", mood="teach", shot="close",
  board="Gibson & Walk (1960): Visual Cliff babies")
L("vani", "Even when mothers coaxed them across the deep glass side, babies refused to crawl over! Depth perception works early!", mood="excited", shot="close")
L("synapse", "Yet Gibson struggles to explain why Mum fell for a flat online rug illusion.", mood="teach", shot="close",
  board="Gregory: Constructivist TOP-DOWN schemas")
L("vani", "Enter Gregory's nineteen seventy Constructivist Theory: top-down active hypothesis testing using stored schemas and past experience!", mood="teach", shot="close")
L("synapse", "Gregory explains Müller-Lyer via misplaced size-constancy scaling from room corners! And Haber and Levin in two thousand and one proved familiarity helps!", mood="teach", shot="close",
  boardClear=True, board="Haber & Levin (2001): Familiar size helps", diagram=D_THEORIES)
L("vani", "Participants judged outdoor distances far more accurately for familiar-sized everyday objects than unfamiliar shapes!", mood="happy", shot="close",
  board="Misplaced size constancy → 2D illusions")

confess("dad", "VIKRAM · Dad · Self-Certified Eagle Eye")
L("dad", "In fairness, from two hundred metres away a silver saloon car really does afford picking up and putting in your pocket.", mood="smug", gap=0.5)

# ---------------- ACT 3: PERCEPTUAL SET & BREMNER'S HIMBA STUDY ----------------
card("HAWKER LUNCH", "Hungry brains see nasi lemak everywhere", 2.3)
scene("hawker", [("vani", 240), ("mum", 520), ("dad", 760), ("uncle", 1000)])
L("dad", "Uncle Hock, I skipped breakfast and I swear that fluffy white cloud above your stall is shaped like steamed bao!", mood="excited", shot="close")
L("uncle", "That is steam from my kettle, Vikram. Eat something before you bite a napkin.", mood="deadpan", shot="close")
scene("hawker", [("vani", 260), ("mum", 600), ("synapse", 960)])
sfx("poof")
L("synapse", "Vikram has perceptual set, a top-down readiness to perceive in line with expectation, motivation, emotion, and culture!", mood="teach", shot="close",
  boardClear=True, board="Perceptual Set: Expectation & Motivation", diagram=D_SET)
L("vani", "Bruner and Minturn showed an ambiguous broken-B shape reads as B between letters, yet thirteen between numbers!", mood="teach", shot="close",
  board="Bruner & Minturn (B/13) · Hunger · Emotion")
L("synapse", "Gilchrist and Nesberg found hungry participants judged food photos brighter, while emotion triggers perceptual defence against taboo words!", mood="teach", shot="close")
L("synapse", "Culture shapes perception too! Urban carpentered worlds full of rectangular rooms strengthen Müller-Lyer illusions.", mood="teach", shot="close",
  board="Bremner et al. (2016): Himba vs UK")
L("vani", "And in two thousand and sixteen, Bremner and colleagues tested the Ebbinghaus circle illusion comparing rural Himba participants in Namibia with urban British participants!", mood="excited", shot="close")
L("synapse", "British viewers were strongly fooled by surrounding large or small circles, whereas rural Himba adults focused locally on the target circle and were far MORE accurate!", mood="teach", shot="close",
  boardClear=True, board="Himba local focus → weak Ebbinghaus error", diagram=D_SET)
L("mum", "Right! Next time I shop online, I am hiring a Himba consultant!", mood="determined", shot="close")

# ---------------- ACT 4: EXAMINER MARK-SCHEME TRAP ----------------
scene("living", [("vani", 220), ("mum", 480), ("synapse", 740)])
L("mum", "Easy! Sensation is my brain interpreting the rug, linear perspective is a binocular cue, and Gibson is top-down!", mood="smug", shot="close")
sfx("buzzer")
poof("examiner", 1000)
L("examiner", "HALT THE DELIVERY VAN! Examiner Chen, Paper Two mark-scheme inspection! Three fatal reversals in one sentence!", mood="shock", shot="close",
  boardClear=True, board="EXAMINER MARK-SCHEME TRAP!")
L("examiner", "Trap one! Sensation is raw receptor detection at the eye; PERCEPTION is the brain's organisation and interpretation! Never swap them!", mood="teach", shot="close",
  board="✘ Never swap Sensation & Perception", prop="book")
L("examiner", "Trap two! Linear perspective, occlusion, and relative size need only ONE eye, so they are MONOCULAR! Only retinal disparity and convergence are binocular!", mood="teach", shot="close",
  board="✔ Gibson = Bottom-up · Gregory = Top-down")
L("vani", "And Trap three: Gibson is Direct BOTTOM-UP from the optic array; Gregory is Constructivist TOP-DOWN using schemas!", mood="happy", shot="close",
  board="✔ Binocular = ONLY disparity & convergence")
sfx("ding")

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 600), ("dad", 940)])
L("mum", "Good news! I sold the tiny Persian rug online for twenty dollars!", mood="smug", shot="close", prop="phone")
L("vani", "Mum! Did you photograph it next to Barbie furniture again?", mood="shock", shot="close")
L("mum", "Heavens no! I photographed it next to a real thirty-centimetre ruler for honest bottom-up invariants. A hamster owner bought it!", mood="happy", shot="close")
L("dad", "Wait, twenty dollars? Double profit! Buy ten more!", mood="excited", shot="close")
L("mum", "Touch my phone and you are sleeping on a mouse mat, Vikram.", mood="annoyed", shot="close")
L("vani", "Size constancy cannot save you now, Dad.", mood="smug", shot="close")
sfx("trombone")
L("synapse", "Ethical commerce AND accurate affordances! Keep both eyes calibrated, mortals!", mood="happy", shot="wide", offstage=True, gap=0.6)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Trust your cortex — 5 seconds per question!", 2.8)
challenge(
    1,
    "Which depth cue compares slightly different images from your left and right eyes?",
    "DISPARITY",
    "Retinal disparity = binocular depth cue (2 eyes)",
    "Question one. Which binocular depth cue relies on comparing slightly different retinal images from your left and right eyes?",
    "Retinal disparity. Along with eye-muscle convergence, it requires two eyes working together."
)
challenge(
    2,
    "Does Gregory's Constructivist Theory describe bottom-up or top-down processing?",
    "TOP-DOWN",
    "Gregory = Top-down hypothesis testing with schemas",
    "Question two. Does Gregory's Constructivist Theory explain perception as bottom-up or top-down processing?",
    "Top-down processing. Your brain uses stored past experience and schemas to build perceptual hypotheses."
)
challenge(
    3,
    "In Bremner et al. (2016), which group was LESS fooled by the Ebbinghaus circle illusion?",
    "THE HIMBA",
    "Rural Himba focused locally → resisted surrounding circles",
    "Question three. In Bremner and colleagues' two thousand and sixteen study, which cultural group was far less fooled by the Ebbinghaus illusion?",
    "The rural Himba participants of Namibia, whose local perceptual style resisted the misleading surrounding circles."
)
end_card()
