# "Mind Games: CIE 0266 Psychology" S01E03 "Diffusion Of Dishwashing" (Topic: Prosocial Behaviour)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: bystander-apathy, cost-reward-piliavin, biological-evolutionary, empathy-social-learning, media-parental-influences.

EP = dict(
    topic="prosocial-behaviour",
    logline="Thirty greasy curry plates sit unwashed in the kitchen sink because Dad, Mum, and Uncle Hock each assumed someone else would scrub them. "
            "Dr. Synapse, Vani, and Examiner Chen unpack Latané and Darley, Piliavin's subway study, Levine, kin selection, Rushton's twins, Batson's empathy-altruism, and Prot's prosocial media."
)

D_BYSTANDER = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">
<rect width="520" height="240" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold">
<text x="165" y="20" fill="#fde047" text-anchor="middle">LATANÉ &amp; DARLEY 5-STEP MODEL</text>
<rect x="18" y="30" width="294" height="30" rx="5" fill="#1e293b" stroke="#38bdf8"/>
<text x="28" y="49" fill="#38bdf8">1. Notice the event</text>
<rect x="18" y="68" width="294" height="30" rx="5" fill="#1e293b" stroke="#f472b6"/>
<text x="28" y="87" fill="#f472b6">2. Interpret as emergency (≠ Pluralistic Ignorance)</text>
<rect x="18" y="106" width="294" height="30" rx="5" fill="#1e293b" stroke="#fb923c"/>
<text x="28" y="125" fill="#fb923c">3. Assume responsibility (≠ Diffusion!)</text>
<rect x="18" y="144" width="294" height="30" rx="5" fill="#1e293b" stroke="#a78bfa"/>
<text x="28" y="163" fill="#a78bfa">4. Know how to help (Competence)</text>
<rect x="18" y="182" width="294" height="30" rx="5" fill="#1e293b" stroke="#4ade80"/>
<text x="28" y="201" fill="#4ade80">5. Decide to implement help → ACTION!</text>
<text x="420" y="38" fill="#cbd5e1" text-anchor="middle">1968 Seizure Study</text>
<rect x="364" y="62" width="44" height="136" fill="#4ade80"/>
<rect x="434" y="148" width="44" height="50" fill="#ef4444"/>
<text x="386" y="56" fill="#4ade80" text-anchor="middle">85%</text>
<text x="456" y="142" fill="#ef4444" text-anchor="middle">31%</text>
<text x="386" y="216" fill="#cbd5e1" text-anchor="middle" font-size="10">Alone</text>
<text x="456" y="216" fill="#cbd5e1" text-anchor="middle" font-size="10">Group of 6</text>
</g>
</svg>"""

D_PILIAVIN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<text x="260" y="22" fill="#fde047">PILIAVIN ET AL. (1969) SUBWAY COST-REWARD MODEL</text>
<rect x="20" y="38" width="230" height="82" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="135" y="60" fill="#4ade80" font-size="12">ILL VICTIM (CANE): 95% Help</text>
<text x="135" y="82" fill="#cbd5e1" font-weight="normal">Low cost of helping</text>
<text x="135" y="102" fill="#cbd5e1" font-weight="normal">High guilt cost of NOT helping</text>
<rect x="270" y="38" width="230" height="82" rx="8" fill="#1e293b" stroke="#fb923c" stroke-width="2"/>
<text x="385" y="60" fill="#fb923c" font-size="12">DRUNK VICTIM: 50% Help</text>
<text x="385" y="82" fill="#cbd5e1" font-weight="normal">Higher risk / disgust cost</text>
<text x="385" y="102" fill="#cbd5e1" font-weight="normal">Perceived blame lowers guilt</text>
<rect x="20" y="136" width="480" height="74" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
<text x="260" y="158" fill="#38bdf8">SITUATIONAL &amp; CULTURAL FACTORS (LEVINE ET AL. 2001)</text>
<text x="260" y="180" fill="#f8fafc" font-weight="normal">Good mood · Low time pressure · In-group similarity boost helping</text>
<text x="260" y="198" fill="#fde047" font-weight="normal">23 Cities: Rio &amp; simpático cultures highest · Fast big cities lower</text>
</g>
</svg>"""

D_BIO = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="18" y="20" width="154" height="180" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="95" y="44" fill="#4ade80">KIN SELECTION</text>
<text x="95" y="72" fill="#fde047">Hamilton's Rule</text>
<text x="95" y="98" fill="#cbd5e1" font-weight="normal">Help close relatives</text>
<text x="95" y="118" fill="#cbd5e1" font-weight="normal">50% sibling genes</text>
<text x="95" y="148" fill="#4ade80">Inclusive Fitness</text>
<text x="95" y="172" fill="#94a3b8" font-weight="normal" font-size="10">Shared alleles survive</text>
<rect x="184" y="20" width="152" height="180" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="260" y="44" fill="#38bdf8">RECIPROCAL</text>
<text x="260" y="72" fill="#fde047">Trivers (1971)</text>
<text x="260" y="98" fill="#cbd5e1" font-weight="normal">Help non-relatives</text>
<text x="260" y="118" fill="#cbd5e1" font-weight="normal">when favour returned</text>
<text x="260" y="148" fill="#38bdf8">Mutual Survival</text>
<text x="260" y="172" fill="#94a3b8" font-weight="normal" font-size="10">Cheaters get shunned</text>
<rect x="348" y="20" width="154" height="180" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
<text x="425" y="44" fill="#f472b6">RUSHTON TWINS</text>
<rect x="378" y="74" width="34" height="86" fill="#f472b6"/>
<rect x="436" y="118" width="34" height="42" fill="#64748b"/>
<text x="395" y="68" fill="#f472b6" font-size="10">MZ</text>
<text x="453" y="112" fill="#cbd5e1" font-size="10">DZ</text>
<text x="425" y="182" fill="#fde047" font-size="10">~50% Heritable + Oxytocin</text>
</g>
</svg>"""

D_EMPATHY = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<text x="260" y="22" fill="#fde047">PSYCHOLOGICAL, SOCIAL LEARNING &amp; MEDIA INFLUENCES</text>
<rect x="18" y="36" width="234" height="104" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="135" y="56" fill="#4ade80">BATSON: EMPATHY-ALTRUISM</text>
<text x="135" y="80" fill="#f8fafc" font-weight="normal">Empathic concern → True Altruism</text>
<text x="135" y="100" fill="#94a3b8" font-weight="normal">(Helps even when escape is easy)</text>
<text x="135" y="122" fill="#fb923c" font-weight="normal">Personal distress → Egoistic escape</text>
<rect x="268" y="36" width="234" height="104" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>
<text x="385" y="56" fill="#a78bfa">SOCIAL LEARNING &amp; PARENTS</text>
<text x="385" y="80" fill="#f8fafc" font-weight="normal">Bandura: Role models + praise</text>
<text x="385" y="100" fill="#cbd5e1" font-weight="normal">Vicarious reinforcement</text>
<text x="385" y="122" fill="#38bdf8" font-weight="normal">Warmth + Inductive discipline</text>
<rect x="18" y="154" width="484" height="58" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="260" y="176" fill="#38bdf8">PROT ET AL. (2014): PROSOCIAL MEDIA ACROSS CULTURES</text>
<text x="260" y="198" fill="#fde047" font-weight="normal">Prosocial games/TV → ↑ Empathy → ↑ Real-world helping over 2 years</text>
</g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("kitchen", [("vani", 220), ("mum", 480), ("dad", 740), ("uncle", 1000)], "SUNDAY · 9:15 P.M. · Post-Curry Standoff")
L("vani", "Everybody freeze. There are thirty greasy curry plates towering in the sink like Mount Everest. Who left them there?", mood="shock", shot="close", prop="plate")
L("dad", "Well, Mum AND Uncle Hock were standing in the kitchen, so obviously one of them was handling it.", mood="smug", shot="close")
L("mum", "Excuse me! Vikram and Uncle Hock were right next to the sponge, so I went to read my magazine!", mood="annoyed", shot="close")
L("uncle", "And I looked at your father looking calm, so I decided a sink crisis did not exist.", mood="deadpan", shot="close", gap=0.3)
freeze("NOBODY WASHED UP", 2.4, narrator="Narrator: Three adults. Zero clean forks.")

confess("vani", "VANI · Sixteen · Surrounded By Bystanders")
L("vani", "Put one adult alone in a kitchen and the plates get washed. Put three adults together and welcome to bystander apathy.", mood="eyeroll", gap=0.5)

title()

# ---------------- ACT 1: BYSTANDER APATHY & LATANÉ AND DARLEY ----------------
scene("kitchen", [("vani", 260), ("dad", 600)])
L("dad", "It is simple maths, Vani. More people in the room means MORE chance someone grabs the dish brush!", mood="smug", shot="two")
sfx("poof")
poof("synapse", 960)
L("synapse", "Wrong, Vikram! More witnesses frequently mean LESS helping! First, distinguish prosocial behaviour from altruism.", mood="teach", shot="close")
L("vani", "Prosocial behaviour is any voluntary action intended to benefit another person.", mood="teach", shot="close",
  boardClear=True, board="Prosocial = any help · Altruism = selfless", diagram=D_BYSTANDER)
L("synapse", "Altruism is a stricter subtype motivated purely to help someone else with zero personal gain!", mood="teach", shot="close")
L("vani", "In nineteen sixty eight, Latané and Darley placed students in intercom cubicles when one student suffered a simulated seizure!", mood="teach", shot="close",
  board="Latané & Darley (1968): 85% vs 31% help")
L("synapse", "Thinking they were the ONLY listener, eighty five percent helped!", mood="teach", shot="close")
L("vani", "Thinking four other bystanders were listening too, helping plunged to thirty one percent!", mood="shock", shot="close",
  board="5 steps: Notice → Emergency → Responsibility")
L("synapse", "Their five-step decision model explains why! Step one, notice the event. Step two, interpret it as an emergency.", mood="teach", shot="close")
L("vani", "Uncle Hock failed step two via pluralistic ignorance, seeing calm faces and assuming nothing was wrong!", mood="happy", shot="close",
  boardClear=True, board="Pluralistic Ignorance = fails Step 2", diagram=D_BYSTANDER)
L("synapse", "Step three, assume personal responsibility! Dad and Mum failed step three via diffusion of responsibility, dividing blame across witnesses!", mood="teach", shot="close",
  board="Diffusion of Responsibility = fails Step 3")
L("vani", "Step four is knowing how to help, and step five is deciding to act!", mood="teach", shot="close",
  board="Step 4: Competence · Step 5: Act!")
L("dad", "So technically, Mum diffused fifty percent of my dishwashing guilt.", mood="smug", shot="close")
sfx("trombone")

# ---------------- ACT 2: PILIAVIN COST-REWARD & LEVINE CROSS-CULTURAL ----------------
card("MEANWHILE AT THE HAWKER CENTRE", "Uncle Hock tests human kindness", 2.4)
scene("hawker", [("vani", 240), ("dad", 520), ("synapse", 760), ("uncle", 1000)])
L("uncle", "Funny thing. Yesterday on the MRT, an uncle with a walking cane dropped his groceries and six commuters jumped up immediately!", mood="happy", shot="close")
L("vani", "That mirrors Piliavin and colleagues' nineteen sixty nine New York subway field experiment!", mood="excited", shot="close",
  boardClear=True, board="Piliavin (1969): Cane 95% vs Drunk 50%", diagram=D_PILIAVIN)
L("synapse", "Confederates collapsed on moving trains carrying either a black cane or smelling of alcohol.", mood="teach", shot="close")
L("vani", "The ill cane victim received help ninety five percent of the time, versus fifty percent for the drunk victim!", mood="teach", shot="close",
  board="Arousal-Cost-Reward: weigh costs of help")
L("synapse", "And crowded carriages helped just as fast as quiet ones! Face to face, Piliavin's Arousal-Cost-Reward Model takes over.", mood="teach", shot="close")
L("vani", "Seeing distress sparks unpleasant arousal, so bystanders weigh costs of helping against guilt costs of walking past!", mood="teach", shot="close")
L("dad", "Wait, so an ill person with a cane feels safer and less awkward to help than someone drunk?", mood="thinking", shot="close")
L("synapse", "Spot on! Plus good mood, spare time, and in-group similarity boost helping.", mood="teach", shot="close",
  board="Levine (2001): Culture & pace shape help")
L("vani", "And Levine and colleagues tested twenty three world cities on dropped pens and blind pedestrians!", mood="happy", shot="close")
L("synapse", "Cities with warm simpático cultural values like Rio de Janeiro helped strangers far more than frantic, high-pressure cities!", mood="teach", shot="close")
sfx("ding")

# ---------------- ACT 3: BIOLOGY VS EMPATHY, SOCIAL LEARNING & MEDIA ----------------
card("NATURE VERSUS NURTURE", "Why do we ever share the last curry puff?", 2.4)
scene("living", [("vani", 260), ("dad", 600), ("synapse", 960)])
L("dad", "Yesterday I gave Vani my last crispy curry puff, yet refused Uncle Hock a chip. Explain my noble heart!", mood="smug", shot="close", prop="plate")
L("synapse", "Not noble, Vikram, evolutionary! Kin selection favours helping genetic relatives because Vani shares fifty percent of your genes, boosting inclusive fitness!", mood="teach", shot="close",
  boardClear=True, board="Kin selection: help relatives (shared DNA)", diagram=D_BIO)
L("vani", "For non-relatives like Uncle Hock, Trivers's reciprocal altruism applies: we help expecting the favour returned! Plus oxytocin promotes bonding.", mood="teach", shot="close",
  board="Reciprocal altruism: return the favour")
L("synapse", "And Rushton studied adult twins: identical monozygotic twins were twice as similar in altruism and empathy as fraternal dizygotic twins!", mood="teach", shot="close",
  board="Rushton twins: MZ > DZ (~50% genetic)")
L("vani", "Is all helping selfish genetics then? Batson's Empathy-Altruism Hypothesis says NO!", mood="determined", shot="close",
  boardClear=True, board="Batson: Empathy → genuine altruism", diagram=D_EMPATHY)
L("synapse", "Empathic concern for someone's pain drives true altruism even when escape is easy!", mood="teach", shot="close")
L("vani", "Whereas egoistic personal distress only makes bystanders escape when nobody is watching.", mood="teach", shot="close")
L("synapse", "Bandura's Social Learning Theory adds nurture: children imitate charitable parents via warmth, vicarious praise, and inductive discipline!", mood="teach", shot="close",
  board="Bandura SLT: Models + vicarious praise")
L("vani", "And Prot and colleagues tracked youths across cultures for two years, proving prosocial video games and media boost empathy and real-world helping!", mood="excited", shot="close",
  board="Prot et al. (2014): Prosocial media → help")

confess("dad", "VIKRAM · Dad · Reluctant Role Model")
L("dad", "So if I want Vani to wash dishes for me when I am eighty, Bandura says I have to model washing dishes right now. Psychology is a trap.", mood="annoyed", gap=0.5)

# ---------------- ACT 4: EXAMINER MARK-SCHEME TRAP ----------------
scene("kitchen", [("vani", 220), ("dad", 480), ("synapse", 740)])
L("dad", "Easy! Prosocial behaviour and altruism mean the exact same thing, and ignoring the plates because Mum was there is pluralistic ignorance!", mood="smug", shot="close")
sfx("buzzer")
poof("examiner", 1000)
L("examiner", "DROP THAT SPONGE! Examiner Chen, zero two six six mark-scheme rescue! Vikram just tumbled into two classic Paper One traps!", mood="shock", shot="close",
  boardClear=True, board="EXAMINER MARK-SCHEME TRAP!")
L("examiner", "Trap one! Never treat prosocial behaviour and altruism as synonyms! Buying charity cookies so neighbours praise you is prosocial, NOT altruistic, because you gain social reward!", mood="teach", shot="close",
  board="✘ Never equate Prosocial = Altruism", prop="book")
L("examiner", "Trap two! Pluralistic ignorance means deciding an ambiguous event is NOT an emergency because others look calm. Diffusion of responsibility means knowing help is needed, yet assuming someone ELSE will act!", mood="teach", shot="close",
  board="✔ Altruism = zero personal gain")
L("vani", "Check the step: Pluralistic blocks Step Two interpretation; Diffusion blocks Step Three responsibility!", mood="happy", shot="close",
  board="✔ Pluralistic=Step 2 · Diffusion=Step 3")
sfx("ding")

# ---------------- BUTTON ----------------
scene("kitchen", [("vani", 260), ("mum", 600), ("dad", 940)])
L("mum", "Good news! All thirty plates are sparkling clean!", mood="excited", shot="close")
L("vani", "Wait, Dad actually modelled prosocial social learning?", mood="shock", shot="close")
L("dad", "Even better. I promised Uncle Hock two free curry puffs tomorrow. Reciprocal altruism works miracles!", mood="smug", shot="close", prop="bucket")
L("mum", "Wait. Those were MY curry puffs in the fridge!", mood="annoyed", shot="close")
L("vani", "Uh oh. High cost of helping incoming.", mood="deadpan", shot="close")
L("dad", "Quick, activate kin selection! Save your father!", mood="worried", shot="close")
sfx("trombone")
L("synapse", "Trivers wins in the kitchen! Keep your empathy circuits warm, everyone!", mood="happy", shot="wide", offstage=True, gap=0.6)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Don't diffuse responsibility — answer all three!", 2.8)
challenge(
    1,
    "Bystanders see calm faces and assume nothing is wrong. Name this barrier.",
    "PLURALISTIC",
    "Pluralistic ignorance = fails Step 2 (not emergency)",
    "Question one. Bystanders look at each other's calm faces and conclude an ambiguous situation is not an emergency. What is this called?",
    "Pluralistic ignorance. It blocks Step Two of Latané and Darley's decision model."
)
challenge(
    2,
    "In Piliavin (1969), which subway victim received help on 95% of trials?",
    "CANE VICTIM",
    "Ill victim with cane = low cost of helping, high guilt",
    "Question two. In Piliavin's nineteen sixty nine subway field study, which victim was helped on ninety five percent of trials?",
    "The ill victim carrying a cane. Helping carried lower perceived risk and much higher guilt for walking past."
)
challenge(
    3,
    "In Batson's theory, what emotion drives genuine selfless altruism even when escape is easy?",
    "EMPATHY",
    "Empathic concern → altruism (Personal distress → escape)",
    "Question three. According to Batson, what emotional response drives true selfless altruism even when escaping the situation is easy?",
    "Empathic concern, or empathy. By contrast, personal distress only motivates egoistic self-relief."
)
end_card()
