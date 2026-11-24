# "Mind Games: CIE 0266 Psychology" S01E03 "Diffusion Of Dishwashing" (Topic: Prosocial Behaviour)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: bystander-apathy, cost-reward-piliavin, biological-evolutionary, empathy-social-learning, media-parental-influences.

EP = dict(
    topic="prosocial-behaviour",
    logline="Thirty greasy curry plates sit unwashed in the kitchen sink because Dad, Mum, and Uncle Hock each assumed someone else would scrub them. "
            "Dr. Synapse, Vani, and Examiner Chen unpack Latané and Darley, Piliavin's subway study, Levine, kin selection, Rushton's twins, Batson's empathy-altruism, and Prot's prosocial media."
)

D_BYSTANDER = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold">
<text x="235" y="40" fill="#fde047" text-anchor="middle">LATANÉ &amp; DARLEY 5 STEPS</text>
<text x="26" y="90" fill="#38bdf8">1. Notice event</text>
<text x="26" y="142" fill="#f472b6">2. Interpret emergency</text>
<text x="26" y="194" fill="#fb923c">3. Assume responsibility</text>
<text x="26" y="246" fill="#a78bfa">4. Know how to help</text>
<text x="26" y="298" fill="#4ade80">5. Decide → ACTION!</text>
<text x="576" y="40" fill="#cbd5e1" text-anchor="middle">1968 Study</text>
<rect x="488" y="94" width="66" height="162" rx="6" fill="#4ade80"/>
<rect x="594" y="196" width="66" height="60" rx="6" fill="#ef4444"/>
<text x="521" y="84" fill="#4ade80" text-anchor="middle">85%</text>
<text x="627" y="186" fill="#ef4444" text-anchor="middle">31%</text>
<text x="521" y="296" fill="#cbd5e1" text-anchor="middle">Alone</text>
<text x="627" y="296" fill="#cbd5e1" text-anchor="middle">Grp 6</text>
</g>
</svg>"""

D_PILIAVIN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<text x="350" y="40" fill="#fde047">PILIAVIN (1969) COST-REWARD</text>
<rect x="14" y="58" width="328" height="136" rx="12" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="178" y="100" fill="#4ade80">ILL (CANE): 95%</text>
<text x="178" y="142" fill="#cbd5e1" font-weight="normal">Low cost to help</text>
<text x="178" y="178" fill="#cbd5e1" font-weight="normal">High guilt if ignored</text>
<rect x="358" y="58" width="328" height="136" rx="12" fill="#1e293b" stroke="#fb923c" stroke-width="3"/>
<text x="522" y="100" fill="#fb923c">DRUNK: 50%</text>
<text x="522" y="142" fill="#cbd5e1" font-weight="normal">Higher risk/disgust</text>
<text x="522" y="178" fill="#cbd5e1" font-weight="normal">Blame lowers guilt</text>
<rect x="14" y="210" width="672" height="96" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="350" y="250" fill="#38bdf8">LEVINE (2001): 23 CITIES</text>
<text x="350" y="290" fill="#fde047" font-weight="normal">Simpático high · Fast big cities low</text>
</g>
</svg>"""

D_BIO = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold">
<rect x="16" y="16" width="668" height="86" rx="12" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="34" y="54" fill="#4ade80">KIN SELECTION (Hamilton)</text>
<text x="34" y="90" fill="#cbd5e1" font-weight="normal">Help relatives (50% genes) → Inclusive fitness</text>
<rect x="16" y="116" width="668" height="86" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="34" y="154" fill="#38bdf8">RECIPROCAL (Trivers 1971)</text>
<text x="34" y="190" fill="#cbd5e1" font-weight="normal">Help non-kin when favour returned later</text>
<rect x="16" y="216" width="668" height="86" rx="12" fill="#1e293b" stroke="#f472b6" stroke-width="3"/>
<text x="34" y="254" fill="#f472b6">RUSHTON TWINS (MZ &gt; DZ)</text>
<text x="34" y="290" fill="#fde047" font-weight="normal">~50% heritable altruism + Oxytocin bonding</text>
</g>
</svg>"""

D_EMPATHY = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<rect x="14" y="14" width="328" height="178" rx="12" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="178" y="56" fill="#4ade80">BATSON</text>
<text x="178" y="100" fill="#f8fafc" font-weight="normal">Empathy → Altruism</text>
<text x="178" y="142" fill="#94a3b8" font-weight="normal">(Even if easy escape)</text>
<text x="178" y="180" fill="#fb923c" font-weight="normal">Distress → Egoistic</text>
<rect x="358" y="14" width="328" height="178" rx="12" fill="#1e293b" stroke="#a78bfa" stroke-width="3"/>
<text x="522" y="56" fill="#a78bfa">SOCIAL LEARNING</text>
<text x="522" y="100" fill="#f8fafc" font-weight="normal">Bandura role models</text>
<text x="522" y="142" fill="#cbd5e1" font-weight="normal">Vicarious praise</text>
<text x="522" y="180" fill="#38bdf8" font-weight="normal">Inductive parents</text>
<rect x="14" y="206" width="672" height="100" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="350" y="248" fill="#38bdf8">PROT ET AL. (2014) MEDIA</text>
<text x="350" y="290" fill="#fde047" font-weight="normal">Prosocial games/TV → Empathy ↑ → Help ↑</text>
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
