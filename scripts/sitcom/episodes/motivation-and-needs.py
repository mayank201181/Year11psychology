# "Mind Games: CIE 0266 Psychology" S01E05 "Tokens Of Affection" (Topic: Motivation & Needs)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: intrinsic-extrinsic-reinforcement, maslow-hierarchy, self-determination-theory, drive-incentive-psychodynamic, goal-setting-applications.

EP = dict(
    topic="motivation-and-needs",
    logline="Dad launches a household 'Gold Star Token Economy' paying Vani fifty cents per chore and study page, accidentally triggering the overjustification effect. "
            "Dr. Synapse, Vani, and Examiner Chen unpack Boniecki and Moore, Maslow's pyramid, Self-Determination Theory and Calvo, Hull's drive-reduction, Merchant's nostalgic ads, and SMART goals."
)

D_TOKENS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="16" y="18" width="234" height="194" rx="8" fill="#1e293b" stroke="#fde047" stroke-width="2"/>
<text x="133" y="40" fill="#fde047">BONIECKI &amp; MOORE (2003) TOKENS</text>
<path d="M44 176 H226 M44 176 V64" stroke="#94a3b8" stroke-width="1.5"/>
<rect x="60" y="138" width="38" height="38" fill="#64748b"/>
<rect x="116" y="74" width="38" height="102" fill="#4ade80"/>
<rect x="172" y="136" width="38" height="40" fill="#ef4444"/>
<text x="79" y="192" fill="#cbd5e1" font-size="9">Baseline</text>
<text x="135" y="192" fill="#4ade80" font-size="9">Tokens ON</text>
<text x="191" y="192" fill="#ef4444" font-size="9">Removed</text>
<text x="133" y="206" fill="#94a3b8" font-weight="normal" font-size="9">Participation doubled, then fell back</text>
<rect x="268" y="18" width="236" height="194" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
<text x="386" y="40" fill="#f472b6">OVERJUSTIFICATION EFFECT</text>
<rect x="288" y="56" width="196" height="36" rx="6" fill="#064e3b"/>
<text x="386" y="78" fill="#4ade80">Pure Intrinsic Joy (Sketching)</text>
<text x="386" y="108" fill="#fde047" font-size="10">↓ Add expected cash / tangible bribe ↓</text>
<rect x="288" y="118" width="196" height="36" rx="6" fill="#7f1d1d"/>
<text x="386" y="140" fill="#fca5a5">Remove bribe → Interest drops!</text>
<text x="386" y="176" fill="#38bdf8" font-size="10">Tip: Sincere verbal competence praise</text>
<text x="386" y="194" fill="#cbd5e1" font-weight="normal" font-size="10">protects intrinsic motivation!</text>
</g>
</svg>"""

D_MASLOW = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<text x="200" y="20" fill="#fde047">MASLOW'S HIERARCHY OF NEEDS (1943)</text>
<polygon points="200,32 252,68 148,68" fill="#a78bfa" stroke="#f8fafc"/>
<text x="200" y="58" fill="#fff" font-size="9">Self-Actualisation</text>
<polygon points="148,72 252,72 284,106 116,106" fill="#f472b6" stroke="#f8fafc"/>
<text x="200" y="94" fill="#fff">4. Esteem (Respect, Mastery)</text>
<polygon points="116,110 284,110 316,144 84,144" fill="#4ade80" stroke="#f8fafc"/>
<text x="200" y="132" fill="#0f172a">3. Love &amp; Belonging (Friends, Family)</text>
<polygon points="84,148 316,148 348,182 52,182" fill="#38bdf8" stroke="#f8fafc"/>
<text x="200" y="170" fill="#0f172a">2. Safety (Security, Shelter, Stability)</text>
<polygon points="52,186 348,186 380,220 20,220" fill="#fde047" stroke="#f8fafc"/>
<text x="200" y="208" fill="#0f172a">1. Physiological (Food, Water, Sleep)</text>
<text x="446" y="54" fill="#a78bfa">GROWTH (B)</text>
<text x="446" y="72" fill="#cbd5e1" font-weight="normal" font-size="10">Grows stronger!</text>
<path d="M392 84 V216" stroke="#fb923c" stroke-width="2"/>
<text x="448" y="144" fill="#fb923c">DEFICIENCY (D)</text>
<text x="448" y="162" fill="#cbd5e1" font-weight="normal" font-size="10">Fades once met</text>
<text x="448" y="196" fill="#94a3b8" font-weight="normal" font-size="9">Critique: Western</text>
<text x="448" y="210" fill="#94a3b8" font-weight="normal" font-size="9">individualism bias</text>
</g>
</svg>"""

D_SDT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<text x="260" y="22" fill="#fde047">DECI &amp; RYAN: SELF-DETERMINATION THEORY (SDT)</text>
<rect x="18" y="38" width="152" height="84" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="94" y="62" fill="#38bdf8" font-size="12">AUTONOMY</text>
<text x="94" y="84" fill="#f8fafc" font-weight="normal">Volition &amp; choice</text>
<text x="94" y="104" fill="#94a3b8" font-weight="normal" font-size="10">(NOT working alone!)</text>
<rect x="184" y="38" width="152" height="84" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="260" y="62" fill="#4ade80" font-size="12">COMPETENCE</text>
<text x="260" y="84" fill="#f8fafc" font-weight="normal">Mastery &amp; skill</text>
<text x="260" y="104" fill="#94a3b8" font-weight="normal" font-size="10">Optimal challenge</text>
<rect x="350" y="38" width="152" height="84" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
<text x="426" y="62" fill="#f472b6" font-size="12">RELATEDNESS</text>
<text x="426" y="84" fill="#f8fafc" font-weight="normal">Warm belonging</text>
<text x="426" y="104" fill="#94a3b8" font-weight="normal" font-size="10">Mutual care</text>
<rect x="24" y="140" width="472" height="62" rx="8" fill="#1e293b" stroke="#fde047" stroke-width="1.8"/>
<text x="260" y="162" fill="#fde047">CALVO ET AL. (2010): TEENAGE FOOTBALL PLAYERS</text>
<text x="260" y="184" fill="#cbd5e1" font-weight="normal">Thwarted Autonomy + Relatedness + Competence → Burnout &amp; Sport Dropout!</text>
</g>
</svg>"""

D_DRIVE_SMART = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="16" y="16" width="238" height="196" rx="8" fill="#1e293b" stroke="#fb923c" stroke-width="2"/>
<text x="135" y="38" fill="#fb923c">HULL (1943) &amp; MERCHANT (2013)</text>
<text x="135" y="62" fill="#f8fafc" font-size="10">Need → Drive → Action → Homeostasis</text>
<text x="135" y="82" fill="#94a3b8" font-weight="normal" font-size="10">Primary (food) vs Secondary (money)</text>
<text x="135" y="102" fill="#fca5a5" font-weight="normal" font-size="10">Limit: Fails to explain skydiving!</text>
<line x1="32" y1="118" x2="238" y2="118" stroke="#475569"/>
<text x="135" y="140" fill="#f472b6">Merchant et al. (2013) Nostalgia</text>
<text x="135" y="162" fill="#cbd5e1" font-weight="normal" font-size="10">Nostalgic ads → warm past memories</text>
<text x="135" y="182" fill="#4ade80" font-weight="normal" font-size="10">+ guilt relief → ↑ Charity donations!</text>
<rect x="268" y="16" width="236" height="196" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="386" y="38" fill="#4ade80">LOCKE &amp; LATHAM: SMART GOALS</text>
<text x="294" y="68" fill="#fde047" text-anchor="start">S · Specific (exact topic &amp; task)</text>
<text x="294" y="96" fill="#38bdf8" text-anchor="start">M · Measurable (track score)</text>
<text x="294" y="124" fill="#4ade80" text-anchor="start">A · Achievable (stretching)</text>
<text x="294" y="152" fill="#a78bfa" text-anchor="start">R · Relevant (fits CIE 0266)</text>
<text x="294" y="180" fill="#f472b6" text-anchor="start">T · Time-bound (clear deadline)</text>
</g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("living", [("vani", 260), ("mum", 600), ("dad", 940)])
L("dad", "Attention household! Welcome to Vikram's Gold Star Token Economy! Every chore, textbook page, or comic sketch earns one shiny plastic token!", mood="excited", shot="close", prop="bucket")
L("mum", "And what are plastic tokens worth in the real economy, Vikram?", mood="deadpan", shot="close")
L("dad", "Fifty cents each! Vani already loves sketching brain cartoons for fun, so paying her will make her sketch TWICE as much!", mood="smug", shot="close")
L("vani", "Dad, please do not pay me fifty cents for my favourite hobby. You are about to ruin it.", mood="worried", shot="close", prop="book")
L("dad", "Nonsense! Capitalism improves everything!", mood="excited", shot="close", gap=0.3)

card("THREE DAYS LATER", "Dad ran out of fifty-cent coins", 2.2)
scene("living", [("vani", 260), ("dad", 600)])
L("dad", "Budget freeze! No more fifty-cent tokens! Go draw your cute brain cartoons for free again!", mood="happy", shot="two")
L("vani", "Weird. Now sketching feels like unpaid overtime. I do not even want to pick up my pencil.", mood="bored", shot="close", gap=0.3)
freeze("HOBBY DESTROYED", 2.4, narrator="Narrator: Fifty cents broke her artistic soul.")

confess("vani", "VANI · Sixteen · On Unpaid Artist Strike")
L("vani", "My father tried behaviourism on an intrinsically motivated hobby and triggered a textbook overjustification effect.", mood="deadpan", gap=0.5)

title()

# ---------------- ACT 1: INTRINSIC VS EXTRINSIC & BONIECKI AND MOORE ----------------
scene("living", [("vani", 260), ("dad", 600)])
L("dad", "How can paying someone make them want to do it LESS afterward? Did my coins have negative energy?", mood="shock", shot="two")
sfx("poof")
poof("synapse", 960)
L("synapse", "Not negative energy, Vikram! You collided intrinsic motivation with extrinsic positive reinforcement!", mood="teach", shot="close")
L("vani", "Intrinsic motivation comes from inside: doing an activity for pure enjoyment, curiosity, or personal challenge.", mood="teach", shot="close",
  boardClear=True, board="Intrinsic = inner joy · Extrinsic = reward", diagram=D_TOKENS)
L("synapse", "Extrinsic motivation comes from outside: money, grades, tokens, or avoiding punishment!", mood="teach", shot="close")
L("vani", "Now, token economies DO work wonders for dull or low-baseline tasks.", mood="teach", shot="close",
  board="Boniecki & Moore (2003): Tokens ↑ answers")
L("synapse", "In two thousand and three, Boniecki and Moore gave university students tokens worth bonus credit for answering class questions!", mood="teach", shot="close")
L("vani", "Participation doubled and hands shot up faster! Yet once tokens stopped, answers dropped straight back to baseline!", mood="teach", shot="close",
  board="Overjustification: Bribe kills inner joy")
L("synapse", "Worse still, when someone ALREADY loves sketching intrinsically, adding expected cash shifts their reason outside!", mood="teach", shot="close")
L("vani", "Remove the cash, and the overjustification effect leaves motivation LOWER than before!", mood="excited", shot="close")
L("synapse", "Whereas sincere verbal praise for skill boosts competence WITHOUT crowding out intrinsic joy!", mood="teach", shot="close",
  boardClear=True, board="Verbal competence praise = keeps joy!", diagram=D_TOKENS)
sfx("ding")

# ---------------- ACT 2: MASLOW'S HIERARCHY & SELF-DETERMINATION THEORY ----------------
card("KITCHEN STRATEGY MEETING", "Mum diagnoses Dad's management style", 2.3)
scene("kitchen", [("vani", 240), ("mum", 560), ("dad", 880)])
L("dad", "Fine! Forget coins! Vani, go self-actualise your full potential right now before breakfast!", mood="determined", shot="close")
L("mum", "Vikram, she has not eaten toast yet and the Wi-Fi is broken. Nobody self-actualises hungry.", mood="annoyed", shot="close", prop="plate")
scene("kitchen", [("vani", 260), ("dad", 600), ("synapse", 960)])
sfx("poof")
L("synapse", "Mum speaks humanistic psychology! In nineteen forty three, Maslow arranged needs into a five-tier pyramid!", mood="teach", shot="close",
  boardClear=True, board="Maslow (1943): 5-Tier Hierarchy of Needs", diagram=D_MASLOW)
L("vani", "Bottom four tiers are Deficiency needs: Physiological food and sleep, Safety, Love and belonging, then Esteem.", mood="teach", shot="close",
  board="D-Needs: Physio → Safety → Love → Esteem")
L("synapse", "At the peak sits the Growth need: Self-Actualisation, fulfilling creative potential!", mood="teach", shot="close",
  board="Top Growth B-Need: Self-Actualisation")
L("vani", "Critics note collectivist cultures put belonging above individual esteem, and starving artists sometimes skip tiers!", mood="teach", shot="close")
L("dad", "Okay, I fed her toast AND hovered behind her shouting instructions every ten seconds! Why is she still annoyed?", mood="worried", shot="close")
L("vani", "Because you crushed my autonomy! Deci and Ryan's Self-Determination Theory names three innate psychological needs!", mood="determined", shot="close",
  boardClear=True, board="SDT: Autonomy · Competence · Relatedness", diagram=D_SDT)
L("synapse", "First, Autonomy: personal choice over how you work. Second, Competence: mastery. Third, Relatedness: warm connection!", mood="teach", shot="close",
  board="Calvo et al. (2010): Teen football study")
L("vani", "Calvo and colleagues in two thousand and ten tracked teenage footballers: coaches thwarting those three needs caused burnout and dropout!", mood="teach", shot="close",
  board="Thwarted needs → burnout & sport dropout")
L("dad", "Whoa. Micromanaging coaches create bench-quitters. Noted.", mood="thinking", shot="close")

confess("dad", "VIKRAM · Dad · Recovering Micromanager")
L("dad", "I thought autonomy meant locking yourself in a room alone. Turns out you can study with friends and still have autonomy if YOU chose the plan.", mood="happy", gap=0.5)

# ---------------- ACT 3: HULL, NOSTALGIC ADS & SMART GOALS ----------------
card("AFTERNOON AT THE HAWKER CENTRE", "Hunger drives, nostalgic posters, and SMART plans", 2.4)
scene("hawker", [("vani", 240), ("dad", 520), ("synapse", 760), ("uncle", 1000)])
L("dad", "Uncle Hock, two plates of char kway teow immediately! My stomach rumble is driving my behaviour!", mood="excited", shot="close")
L("synapse", "Meet Hull's nineteen forty three Drive-Reduction Theory! Low blood sugar creates an unpleasant drive tension called hunger.", mood="teach", shot="close",
  boardClear=True, board="Hull (1943): Need → Drive → Homeostasis", diagram=D_DRIVE_SMART)
L("vani", "Eating reduces the drive and restores homeostasis! Food is a primary drive; money is a secondary drive.", mood="teach", shot="close",
  board="Primary vs Secondary · Fails thrill-seeking")
L("synapse", "Yet Hull cannot explain why skydivers pay good money to INCREASE arousal!", mood="eyeroll", shot="close")
L("uncle", "Hey Vikram, look at my vintage nineteen eighties charity poster with kampung swings. Customers donated fifty dollars already!", mood="happy", shot="close")
L("synapse", "Psychodynamic unconscious motivation in action! Merchant and colleagues in two thousand and thirteen showed nostalgic charity advertisements stir warm childhood memories and unconscious guilt-relief, boosting donations!", mood="teach", shot="close",
  board="Merchant et al. (2013): Nostalgia → donate")
L("vani", "And to finish my revision without Dad's plastic tokens, Locke and Latham's Goal-Setting Theory says vague 'do your best' wishes lose to SMART goals!", mood="excited", shot="close",
  boardClear=True, board="SMART: Specific, Measurable, Achievable", diagram=D_DRIVE_SMART)
L("synapse", "Specific, Measurable, Achievable, Relevant, and Time-bound! Like completing twenty CIE Paper Two practice marks on Visual Perception before six o'clock Friday!", mood="teach", shot="close",
  board="Relevant & Time-bound beats 'do your best'")

# ---------------- ACT 4: EXAMINER MARK-SCHEME TRAP ----------------
scene("hawker", [("vani", 220), ("dad", 480), ("synapse", 740)])
L("dad", "Sorted! Extrinsic rewards ALWAYS destroy motivation, Maslow's Esteem is a Growth need, and Autonomy means working completely alone!", mood="smug", shot="close")
sfx("buzzer")
poof("examiner", 1000)
L("examiner", "FREEZE THOSE TOKENS! Examiner Chen, zero two six six mark-scheme tribunal! Vikram just missed three high-tariff distinctions!", mood="shock", shot="close",
  boardClear=True, board="EXAMINER MARK-SCHEME TRAP!")
L("examiner", "Trap one! Never claim extrinsic rewards ALWAYS fail! Token economies like Boniecki and Moore boost boring or low-baseline tasks; overjustification ONLY strikes tasks already rich in intrinsic interest!", mood="teach", shot="close",
  board="✘ Never: Extrinsic rewards ALWAYS fail", prop="book")
L("examiner", "Trap two! Physiological, Safety, Love, and Esteem are ALL Deficiency needs! Only Self-Actualisation at tier five is a Growth need!", mood="teach", shot="close",
  board="✔ Esteem = D-Need · Self-Actual = Growth")
L("vani", "And Trap three: in Self-Determination Theory, Autonomy means self-endorsed CHOICE, never isolation, because humans also need Relatedness!", mood="happy", shot="close",
  board="✔ Autonomy = choice/volition, NOT alone!")
sfx("ding")

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 600), ("dad", 940)])
L("vani", "Look Mum, I sketched four new brain comics today! Zero fifty-cent coins, full autonomy, and one SMART revision goal ticked off!", mood="happy", shot="close", prop="book")
L("mum", "And what happened to Vikram's bucket of plastic gold stars?", mood="thinking", shot="close")
L("dad", "I put myself on a token economy for jogging. Ten laps around the block earns one curry puff. Extrinsic brilliance for a task with zero intrinsic joy!", mood="smug", shot="close", prop="bucket")
L("mum", "Wait, one curry puff has more calories than ten laps burn.", mood="deadpan", shot="close")
sfx("trombone")
L("synapse", "Homeostasis undefeated! Keep your goals SMART and your autonomy fierce, mortals!", mood="happy", shot="wide", offstage=True, gap=0.6)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Motivate your neurons — 5 seconds per question!", 2.8)
challenge(
    1,
    "Paying someone for a hobby they already love reduces inner interest later. Name this effect.",
    "OVERJUSTIFY",
    "Overjustification effect = extrinsic bribe crowds out joy",
    "Question one. What effect occurs when giving expected tangible rewards for an enjoyable hobby undermines intrinsic motivation once rewards stop?",
    "The overjustification effect. External rewards shift a person's perceived reason for doing the activity outside themselves."
)
challenge(
    2,
    "Name the three psychological needs in Deci & Ryan's Self-Determination Theory.",
    "A · C · R",
    "Autonomy, Competence, and Relatedness",
    "Question two. Name the three core psychological needs in Deci and Ryan's Self-Determination Theory.",
    "Autonomy, competence, and relatedness. Thwarting them predicted athlete dropout in Calvo and colleagues' study."
)
challenge(
    3,
    "In Merchant et al. (2013), what emotional appeal in charity ads increased donations?",
    "NOSTALGIA",
    "Personal nostalgia → warm attachment memories + guilt relief",
    "Question three. In Merchant and colleagues' two thousand and thirteen study, what emotional theme in charity advertisements boosted donations?",
    "Nostalgia. Warm nostalgic memories triggered emotional engagement and guilt relief when helping others."
)
end_card()
