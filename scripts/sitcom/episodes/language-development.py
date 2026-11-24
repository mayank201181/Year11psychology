# "Mind Games: CIE 0266 Psychology" S01E06 "Wugs In The Hawker Centre" (Topic: Language Development)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: stages-language-acquisition, chomsky-nativist-lad, learning-behaviourist, piaget-bruner-cognitive, animal-vs-human.

EP = dict(
    topic="language-development",
    logline="Dad babysits toddler cousin Aarav at Uncle Hock's hawker stall and panics when the child shouts 'two foots goed fast!', while Vani celebrates textbook grammatical overregularisation. "
            "Dr. Synapse, Vani, and Examiner Chen unpack language stages, Berko's wug test, Chomsky and Senghas, Skinner and Goldstein, Piaget, Hewitt, Bruner's LASS, and Hockett's animal features."
)

D_STAGES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold">
<rect x="14" y="14" width="328" height="90" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="30" y="50" fill="#38bdf8">1. Pre-linguistic</text>
<text x="30" y="88" fill="#cbd5e1" font-weight="normal">0–12m · Babbling</text>
<rect x="358" y="14" width="328" height="90" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="374" y="50" fill="#4ade80">2. Holophrastic</text>
<text x="374" y="88" fill="#cbd5e1" font-weight="normal">12–18m · 1 word</text>
<rect x="14" y="114" width="328" height="90" rx="10" fill="#1e293b" stroke="#a78bfa" stroke-width="3"/>
<text x="30" y="150" fill="#a78bfa">3. Telegraphic</text>
<text x="30" y="188" fill="#cbd5e1" font-weight="normal">18–30m · 2+ words</text>
<rect x="358" y="114" width="328" height="90" rx="10" fill="#1e293b" stroke="#f472b6" stroke-width="3"/>
<text x="374" y="150" fill="#f472b6">4. Multi-word</text>
<text x="374" y="188" fill="#fde047" font-weight="normal">30m+ · "foots/goed"</text>
<rect x="14" y="216" width="672" height="90" rx="12" fill="#1e293b" stroke="#fde047" stroke-width="3"/>
<text x="350" y="254" fill="#fde047" text-anchor="middle">Berko (1958): 1 Wug → 2 Wugs!</text>
<text x="350" y="292" fill="#4ade80" font-weight="normal" text-anchor="middle">Proves internal rules, NOT imitation</text>
</g>
</svg>"""

D_CHOMSKY = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<rect x="14" y="14" width="328" height="292" rx="12" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="178" y="56" fill="#4ade80">CHOMSKY: LAD</text>
<text x="178" y="102" fill="#fde047">Innate Grammar</text>
<text x="178" y="148" fill="#cbd5e1" font-weight="normal">Poverty of stimulus</text>
<rect x="28" y="178" width="300" height="112" rx="10" fill="#0f172a" stroke="#f472b6" stroke-width="2"/>
<text x="178" y="222" fill="#f472b6">Critical Period</text>
<text x="178" y="268" fill="#cbd5e1" font-weight="normal">Genie: weak syntax</text>
<rect x="358" y="14" width="328" height="292" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="522" y="56" fill="#38bdf8">SENGHAS (1995)</text>
<text x="522" y="102" fill="#fde047">Nicaraguan Sign</text>
<rect x="372" y="122" width="300" height="74" rx="8" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
<text x="522" y="170" fill="#cbd5e1" font-weight="normal">Cohort 1: Pidgin</text>
<rect x="372" y="210" width="300" height="80" rx="8" fill="#064e3b" stroke="#4ade80" stroke-width="2"/>
<text x="522" y="260" fill="#4ade80">Cohort 2: Full rules!</text>
</g>
</svg>"""

D_THEORIES_LANG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<rect x="14" y="14" width="328" height="292" rx="12" fill="#1e293b" stroke="#fb923c" stroke-width="3"/>
<text x="178" y="56" fill="#fb923c">SKINNER &amp; GOLD.</text>
<text x="178" y="102" fill="#f8fafc" font-weight="normal">Operant shaping</text>
<rect x="28" y="128" width="300" height="162" rx="10" fill="#0f172a" stroke="#fb923c" stroke-width="2"/>
<text x="178" y="172" fill="#fde047">Goldstein (2003)</text>
<text x="178" y="220" fill="#4ade80" font-weight="normal">Contingent smiles</text>
<text x="178" y="264" fill="#f8fafc" font-weight="normal">→ Mature babbling!</text>
<rect x="358" y="14" width="328" height="292" rx="12" fill="#1e293b" stroke="#a78bfa" stroke-width="3"/>
<text x="522" y="56" fill="#a78bfa">PIAGET &amp; BRUNER</text>
<text x="522" y="102" fill="#38bdf8">Piaget (Hewitt)</text>
<text x="522" y="144" fill="#cbd5e1" font-weight="normal">Schemas → Words</text>
<line x1="378" y1="168" x2="666" y2="168" stroke="#475569" stroke-width="2"/>
<text x="522" y="212" fill="#4ade80">Bruner LASS</text>
<text x="522" y="256" fill="#f8fafc" font-weight="normal">Scaffolding + CDS</text>
<text x="522" y="294" fill="#fde047">LAD + LASS team</text>
</g>
</svg>"""

D_HOCKETT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold">
<rect x="14" y="14" width="672" height="48" rx="8" fill="#1e293b"/>
<text x="30" y="48" fill="#cbd5e1">FEATURE</text>
<text x="356" y="48" fill="#fde047" text-anchor="middle">BEES</text>
<text x="484" y="48" fill="#fb923c" text-anchor="middle">APES</text>
<text x="614" y="48" fill="#4ade80" text-anchor="middle">HUMAN</text>
<text x="30" y="106" fill="#f8fafc">Semanticity</text>
<text x="356" y="106" fill="#4ade80" text-anchor="middle">Yes</text>
<text x="484" y="106" fill="#4ade80" text-anchor="middle">Yes</text>
<text x="614" y="106" fill="#4ade80" text-anchor="middle">Rich</text>
<text x="30" y="158" fill="#f8fafc">Displacement</text>
<text x="356" y="158" fill="#fde047" text-anchor="middle">Nectar</text>
<text x="484" y="158" fill="#94a3b8" text-anchor="middle">Low</text>
<text x="614" y="158" fill="#4ade80" text-anchor="middle">Full</text>
<text x="30" y="210" fill="#f8fafc">Productivity</text>
<text x="356" y="210" fill="#ef4444" text-anchor="middle">Closed</text>
<text x="484" y="210" fill="#fb923c" text-anchor="middle">Limit</text>
<text x="614" y="210" fill="#4ade80" text-anchor="middle">Infinite</text>
<text x="30" y="262" fill="#f8fafc">Syntax</text>
<text x="356" y="262" fill="#ef4444" text-anchor="middle">No</text>
<text x="484" y="262" fill="#ef4444" text-anchor="middle">Weak</text>
<text x="614" y="262" fill="#4ade80" text-anchor="middle">Rules!</text>
<text x="350" y="306" fill="#38bdf8" font-weight="normal" text-anchor="middle">Von Frisch: Waggle angle + length</text>
</g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("hawker", [("vani", 240), ("dad", 560), ("uncle", 1000)], "SATURDAY LUNCH · Dad Babysits Cousin Aarav")
L("dad", "Uncle Hock, emergency! Little three-year-old Aarav just pointed at a mynah bird and yelled, Look Uncle, two birdies with four foots goed away!", mood="shock", shot="close")
L("uncle", "Cute kid. Wants extra fishballs.", mood="happy", shot="close")
L("dad", "Cute?! He said FOOTS and GOED! His grammar engine is malfunctioning! Hand me emergency flashcards!", mood="worried", shot="close", prop="book")
L("vani", "Put the flashcards down, Dad! Saying foots and goed proves Aarav's brain is a genius rule-extracting machine!", mood="excited", shot="close")
L("dad", "Bad English means genius?! Did they change the dictionary?", mood="annoyed", shot="close", gap=0.3)
freeze("FOUR FOOTS GOED", 2.4, narrator="Narrator: The toddler was outsmarting Vikram.")

confess("vani", "VANI · Sixteen · Proud Cousin")
L("vani", "No adult ever taught Aarav the word goed. Which means he discovered past-tense grammar rules all by himself.", mood="smug", gap=0.5)

title()

# ---------------- ACT 1: UNIVERSAL STAGES & BERKO'S WUG TEST ----------------
scene("hawker", [("vani", 260), ("dad", 600)])
L("dad", "Explain yourself, Year Eleven! Why did Aarav say doggy at Uncle Hock's ginger cat last year, and foots today?", mood="thinking", shot="two")
sfx("poof")
poof("synapse", 960)
L("synapse", "Because every human child marches through four universal stages of language acquisition! Doctor Synapse at the microphone!", mood="excited", shot="close")
L("vani", "Stage one, birth to twelve months, is Pre-linguistic: crying, vowel cooing, then canonical babbling like bababa!", mood="teach", shot="close",
  boardClear=True, board="1. Pre-linguistic (0-12m): Coo & babble", diagram=D_STAGES)
L("synapse", "Stage two, twelve to eighteen months, is the Holophrastic one-word stage, where Juice means a whole sentence!", mood="teach", shot="close",
  board="2. Holophrastic (12-18m): Overextension")
L("vani", "Calling Uncle Hock's cat doggy is overextension; calling ONLY the family poodle doggy is underextension!", mood="teach", shot="close")
L("synapse", "Stage three, eighteen to thirty months, moves from two-word phrases to Telegraphic speech like Mummy eat noodle!", mood="teach", shot="close",
  board="3. Telegraphic → 4. Multi-word grammar")
L("vani", "Then at thirty months plus comes the Multi-word stage and grammatical overregularisation!", mood="excited", shot="close")
L("synapse", "Aarav learned add S for plurals and add ED for past tense, and applied them to irregular words: foots and goed!", mood="teach", shot="close")
L("vani", "Jean Berko proved this in nineteen fifty eight with the Wug Test! Show one cartoon wug, then two, and children shout WUGS!", mood="excited", shot="close",
  boardClear=True, board="Berko (1958): 1 Wug → 2 Wugs! (Rule!)", diagram=D_STAGES)
L("dad", "Wait. Nobody ever said wugs to them before, yet they nailed the plural?", mood="shock", shot="close")
L("synapse", "Exactly! Children build internal grammar rules, not parrot recordings!", mood="happy", shot="close",
  board="Overregularisation = rule extraction")
sfx("ding")

# ---------------- ACT 2: CHOMSKY NATIVIST LAD VS SKINNER & GOLDSTEIN ----------------
card("NATURE VERSUS NURTURE", "Chomsky's LAD battles Skinner's rewards", 2.3)
scene("hawker", [("vani", 260), ("dad", 600), ("synapse", 960)])
L("vani", "Enter Noam Chomsky's Nativist Theory: humans are born with an innate Language Acquisition Device, or LAD, wired for Universal Grammar!", mood="teach", shot="close",
  boardClear=True, board="Chomsky: Innate LAD & Universal Grammar", diagram=D_CHOMSKY)
L("synapse", "Poverty of the stimulus proves it: adult talk is full of slips, yet toddlers master syntax before age five!", mood="teach", shot="close",
  board="Poverty of stimulus + Critical period")
L("vani", "Lenneberg added a biological critical period, illustrated by Genie, whose extreme early isolation prevented full grammar later.", mood="teach", shot="close")
L("synapse", "And in nineteen ninety five, Ann Senghas studied deaf children brought together at a new school in Nicaragua with NO existing sign language!", mood="teach", shot="close",
  board="Senghas (1995): Nicaraguan Sign Language")
L("vani", "Older children made basic signs, and younger children spontaneously invented a complete grammatical language!", mood="excited", shot="close")
L("dad", "Hold on! When Aarav babbled Dada, I clapped and gave him mashed banana! Surely Skinner gets SOME credit?", mood="smug", shot="close", prop="plate")
L("vani", "Fair point! Skinner's operant reinforcement and shaping, plus Bandura's imitation, build specific vocabulary and accent.", mood="teach", shot="close",
  boardClear=True, board="Skinner: Reinforcement & shaping words", diagram=D_THEORIES_LANG)
L("synapse", "And Goldstein, King, and West in two thousand and three showed contingent maternal smiles and touches right after babbling matured infant syllables!", mood="teach", shot="close",
  board="Goldstein (2003): Contingent mum feedback")
L("vani", "Non-contingent control babies did not advance!", mood="teach", shot="close")
L("synapse", "Still, Skinner alone cannot explain novel sentences or why toddlers say foots even after parents correct them!", mood="teach", shot="close",
  board="Limit: Cannot explain 'foots' or 'goed'!")

# ---------------- ACT 3: PIAGET, HEWITT, BRUNER'S LASS & ANIMAL COMMUNICATION ----------------
card("PARK STROLL", "Schemas, scaffolding, and honeybee dances", 2.3)
scene("park", [("vani", 260), ("mum", 600), ("synapse", 960)])
L("mum", "Notice how Aarav only started saying ALL GONE after he understood his toy ball still existed under the blanket!", mood="happy", shot="close")
L("synapse", "Spot on! Jean Piaget argued cognitive development precedes language: children need sensorimotor schemas like object permanence before words make sense!", mood="teach", shot="close",
  boardClear=True, board="Piaget: Cognitive schemas precede words", diagram=D_THEORIES_LANG)
L("vani", "Hewitt's twenty twenty two naturalistic case studies showed toddlers' repeated action schemas, like containment and trajectory play, directly scaffold their earliest concepts and talk!", mood="teach", shot="close",
  board="Hewitt (2022) + Bruner Interactionist LASS")
L("synapse", "And Jerome Bruner bridged nature and nurture! Chomsky's innate LAD needs a social partner: the Language Acquisition Support System, or LASS, through caregiver scaffolding, peekaboo turn-taking, and warm child-directed speech!", mood="teach", shot="close",
  board="LAD (innate) + LASS (caregiver scaffold)")
L("mum", "Look at those honeybees around the park flowers! Do animals have true human language too?", mood="thinking", shot="close", prop="umbrella")
L("vani", "Let us check Hockett's design features! Karl von Frisch showed honeybees perform a figure-eight waggle dance indicating nectar direction and distance.", mood="teach", shot="close",
  boardClear=True, board="Hockett: Semanticity, Displacement, Syntax", diagram=D_HOCKETT)
L("synapse", "That shows semanticity and tiny displacement for nectar! Even great apes like Kanzi learned hundreds of lexigram symbols, yet animal systems remain closed!", mood="teach", shot="close",
  board="Bees: Nectar waggle · Apes: Limited signs")
L("vani", "Only human language combines unrestricted displacement across past, future, and imaginary worlds with infinite productivity and open-ended recursive syntax!", mood="excited", shot="close",
  board="Humans: Infinite productivity & syntax!")

confess("dad", "VIKRAM · Dad · Retired Flashcard Coach")
L("dad", "Aarav can talk about dinosaurs from sixty six million years ago eating ice cream on Mars next Tuesday. Try waggling THAT, honeybees.", mood="smug", gap=0.5)

# ---------------- ACT 4: EXAMINER MARK-SCHEME TRAP ----------------
scene("park", [("vani", 220), ("dad", 480), ("synapse", 740)])
L("dad", "Easy marks! Saying foots proves Skinner's imitation, Chomsky invented the social LASS, and honeybees have zero displacement!", mood="smug", shot="close")
sfx("buzzer")
poof("examiner", 1000)
L("examiner", "STOP THAT BABBLE! Examiner Chen, Paper Two mark-scheme alert! Vikram just scrambled three favourite CIE questions!", mood="shock", shot="close",
  boardClear=True, board="EXAMINER MARK-SCHEME TRAP!")
L("examiner", "Trap one! Never cite foots or goed as evidence for Skinner! Adults do NOT model goed; overregularisation refutes pure imitation and supports Chomsky's rule-driven LAD!", mood="teach", shot="close",
  board="✘ Never: 'goed/foots' = Skinner imitation", prop="book")
L("examiner", "Trap two! LAD with one D is Chomsky's innate brain device; LASS with double S is Bruner's social caregiver support system!", mood="teach", shot="close",
  board="✔ 'goed' = rule extraction (Chomsky LAD)")
L("vani", "And Trap three: von Frisch's bees DO show limited displacement for distant flowers, just not human infinite productivity across time and fiction!", mood="happy", shot="close",
  board="✔ LAD = innate · LASS = social support")
sfx("ding")

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 600), ("dad", 940)])
L("dad", "I tested Berko's Wug experiment on Uncle Hock! I drew a blob and said, Here is one snorf, now there are two...?", mood="excited", shot="close", prop="tablet")
L("mum", "And did Uncle Hock say snorfs?", mood="happy", shot="close")
L("dad", "He said, Two dollars fifty, stop drawing on my napkins.", mood="deadpan", shot="close")
L("mum", "Honestly, Uncle Hock's syntax is flawless.", mood="smug", shot="close")
L("vani", "Pragmatics undefeated, Dad.", mood="happy", shot="close")
L("dad", "Next week I am teaching the mynah birds recursive clauses.", mood="determined", shot="close")
L("vani", "Please leave the wildlife alone.", mood="eyeroll", shot="close")
sfx("trombone")
L("synapse", "Keep scaffolding those schemas, mortals! Wugs out!", mood="happy", shot="wide", offstage=True, gap=0.6)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Flex your LAD — 5 seconds per question!", 2.8)
challenge(
    1,
    "A toddler says 'two foots' and 'I goed'. What linguistic phenomenon is this?",
    "OVERREGULAR",
    "Overregularisation = applying regular rules to irregulars",
    "Question one. A toddler says two foots and I goed. What grammatical phenomenon is this?",
    "Overregularisation. It proves children actively extract grammar rules rather than merely imitating adults."
)
challenge(
    2,
    "Which natural study by Senghas (1995) supported Chomsky's innate LAD?",
    "NICARAGUAN",
    "Deaf children in Nicaragua invented a new sign grammar",
    "Question two. Which nineteen ninety five natural study by Ann Senghas strongly supported Chomsky's innate Language Acquisition Device?",
    "Nicaraguan Sign Language, where deaf children spontaneously created complex grammatical rules from scratch."
)
challenge(
    3,
    "In Goldstein et al. (2003), what caregiver response advanced infant babbling?",
    "CONTINGENT",
    "Contingent smiling & touching right after vocalising",
    "Question three. In Goldstein, King, and West's two thousand and three study, what type of maternal response matured infant babbling?",
    "Contingent social feedback, smiling and touching immediately in response to the baby's vocalisations."
)
end_card()
