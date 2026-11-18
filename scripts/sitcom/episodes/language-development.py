# "Mind Games: CIE 0266 Psychology" S01E06 "Wugs In The Hawker Centre" (Topic: Language Development)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: stages-language-acquisition, chomsky-nativist-lad, learning-behaviourist, piaget-bruner-cognitive, animal-vs-human.

EP = dict(
    topic="language-development",
    logline="Dad babysits toddler cousin Aarav at Uncle Hock's hawker stall and panics when the child shouts 'two foots goed fast!', while Vani celebrates textbook grammatical overregularisation. "
            "Dr. Synapse, Vani, and Examiner Chen unpack language stages, Berko's wug test, Chomsky and Senghas, Skinner and Goldstein, Piaget, Hewitt, Bruner's LASS, and Hockett's animal features."
)

D_STAGES = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<text x="260" y="20" fill="#fde047">STAGES OF LANGUAGE ACQUISITION &amp; BERKO'S WUG TEST</text>
<rect x="14" y="34" width="114" height="78" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="71" y="54" fill="#38bdf8">1. Pre-linguistic</text>
<text x="71" y="72" fill="#cbd5e1" font-weight="normal" font-size="10">0-12m · Cooing</text>
<text x="71" y="90" fill="#cbd5e1" font-weight="normal" font-size="10">Babbling (baba)</text>
<rect x="138" y="34" width="114" height="78" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="195" y="54" fill="#4ade80">2. Holophrastic</text>
<text x="195" y="72" fill="#cbd5e1" font-weight="normal" font-size="10">12-18m · 1 word</text>
<text x="195" y="90" fill="#cbd5e1" font-weight="normal" font-size="10">Overextension</text>
<rect x="262" y="34" width="114" height="78" rx="6" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>
<text x="319" y="54" fill="#a78bfa">3. Telegraphic</text>
<text x="319" y="72" fill="#cbd5e1" font-weight="normal" font-size="10">18-30m · 2+ words</text>
<text x="319" y="90" fill="#cbd5e1" font-weight="normal" font-size="10">"Daddy kick ball"</text>
<rect x="386" y="34" width="120" height="78" rx="6" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
<text x="446" y="54" fill="#f472b6">4. Multi-word</text>
<text x="446" y="72" fill="#cbd5e1" font-weight="normal" font-size="10">30m+ · Grammar</text>
<text x="446" y="90" fill="#fde047" font-size="10">"foots", "goed"</text>
<rect x="24" y="128" width="472" height="84" rx="8" fill="#1e293b" stroke="#fde047" stroke-width="1.8"/>
<circle cx="92" cy="168" r="18" fill="#38bdf8"/>
<circle cx="98" cy="162" r="4" fill="#0f172a"/>
<circle cx="204" cy="168" r="18" fill="#38bdf8"/>
<circle cx="246" cy="168" r="18" fill="#38bdf8"/>
<text x="372" y="158" fill="#fde047">Berko (1958): "1 WUG → 2 WUGS!"</text>
<text x="372" y="178" fill="#f8fafc" font-weight="normal" font-size="10">Overregularisation proves INTERNAL RULES,</text>
<text x="372" y="196" fill="#4ade80" font-size="10">NOT adult imitation!</text>
</g>
</svg>"""

D_CHOMSKY = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="16" y="18" width="236" height="184" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="134" y="40" fill="#4ade80" font-size="12">CHOMSKY: NATIVIST LAD</text>
<text x="134" y="66" fill="#fde047">Innate Universal Grammar</text>
<text x="134" y="90" fill="#cbd5e1" font-weight="normal">Poverty of Stimulus: messy input</text>
<text x="134" y="110" fill="#cbd5e1" font-weight="normal">yet rapid syntax mastery!</text>
<rect x="34" y="128" width="200" height="56" rx="6" fill="#0f172a" stroke="#f472b6"/>
<text x="134" y="148" fill="#f472b6">Critical Period (Lenneberg)</text>
<text x="134" y="168" fill="#cbd5e1" font-weight="normal" font-size="10">Genie: late exposure → weak grammar</text>
<rect x="268" y="18" width="236" height="184" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="386" y="40" fill="#38bdf8" font-size="12">SENGHAS (1995) NICARAGUA</text>
<text x="386" y="66" fill="#fde047">Deaf School Sign Emergence</text>
<rect x="288" y="82" width="196" height="44" rx="6" fill="#0f172a" stroke="#94a3b8"/>
<text x="386" y="102" fill="#cbd5e1" font-size="10">Older Cohort 1: Simple pidgin signs</text>
<text x="386" y="118" fill="#94a3b8" font-weight="normal" font-size="9">(Entered later in childhood)</text>
<rect x="288" y="136" width="196" height="50" rx="6" fill="#064e3b" stroke="#4ade80"/>
<text x="386" y="156" fill="#4ade80" font-size="10">Younger Cohort 2: Full grammar!</text>
<text x="386" y="174" fill="#f8fafc" font-weight="normal" font-size="9">Children INVENTED spatial inflections!</text>
</g>
</svg>"""

D_THEORIES_LANG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="16" y="18" width="236" height="184" rx="8" fill="#1e293b" stroke="#fb923c" stroke-width="2"/>
<text x="134" y="40" fill="#fb923c">SKINNER &amp; GOLDSTEIN (2003)</text>
<text x="134" y="64" fill="#f8fafc" font-weight="normal">Operant reinforcement + shaping</text>
<text x="134" y="84" fill="#cbd5e1" font-weight="normal">Bandura imitation of models</text>
<rect x="32" y="100" width="204" height="84" rx="6" fill="#0f172a" stroke="#fb923c"/>
<text x="134" y="122" fill="#fde047" font-size="10">Goldstein, King &amp; West (2003)</text>
<text x="134" y="142" fill="#4ade80" font-weight="normal" font-size="10">Contingent mum smiles/touch →</text>
<text x="134" y="160" fill="#f8fafc" font-weight="normal" font-size="10">infants shift to mature babbling!</text>
<text x="134" y="176" fill="#fca5a5" font-weight="normal" font-size="9">(Non-contingent control did not)</text>
<rect x="268" y="18" width="236" height="184" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>
<text x="386" y="40" fill="#a78bfa">PIAGET (HEWITT) &amp; BRUNER LASS</text>
<text x="386" y="64" fill="#38bdf8">Piaget: Schemas BEFORE words</text>
<text x="386" y="84" fill="#cbd5e1" font-weight="normal" font-size="10">Object permanence → "All gone!"</text>
<text x="386" y="102" fill="#cbd5e1" font-weight="normal" font-size="10">Hewitt (2022): Action schemas → talk</text>
<line x1="286" y1="118" x2="486" y2="118" stroke="#475569"/>
<text x="386" y="140" fill="#4ade80">Bruner: Interactionist LASS</text>
<text x="386" y="160" fill="#f8fafc" font-weight="normal" font-size="10">Scaffolding · Child-directed speech</text>
<text x="386" y="180" fill="#fde047" font-size="10">Innate LAD + Social LASS partner up!</text>
</g>
</svg>"""

D_HOCKETT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<text x="260" y="22" fill="#fde047">HOCKETT'S DESIGN FEATURES: ANIMALS VS HUMANS</text>
<rect x="18" y="36" width="484" height="32" fill="#1e293b"/>
<text x="110" y="56" fill="#cbd5e1">Design Feature</text>
<text x="265" y="56" fill="#fde047">Bees (Waggle)</text>
<text x="375" y="56" fill="#fb923c">Apes (Kanzi)</text>
<text x="462" y="56" fill="#4ade80">Humans</text>
<text x="110" y="88" fill="#f8fafc">Semanticity (meaning)</text>
<text x="265" y="88" fill="#4ade80">Yes (nectar)</text>
<text x="375" y="88" fill="#4ade80">Yes (symbols)</text>
<text x="462" y="88" fill="#4ade80">Rich</text>
<text x="110" y="118" fill="#f8fafc">Displacement (absent)</text>
<text x="265" y="118" fill="#fde047">Nectar only</text>
<text x="375" y="118" fill="#94a3b8">Minimal</text>
<text x="462" y="118" fill="#4ade80">Past/Future</text>
<text x="110" y="148" fill="#f8fafc">Productivity (infinite)</text>
<text x="265" y="148" fill="#ef4444">Closed</text>
<text x="375" y="148" fill="#fb923c">Limited</text>
<text x="462" y="148" fill="#4ade80">Infinite!</text>
<text x="110" y="178" fill="#f8fafc">Recursive Syntax</text>
<text x="265" y="178" fill="#ef4444">No</text>
<text x="375" y="178" fill="#ef4444">Weak</text>
<text x="462" y="178" fill="#4ade80">Full rules!</text>
<text x="260" y="206" fill="#38bdf8" font-weight="normal" font-size="10">Von Frisch: Bee dance angle = sun direction · waggle length = distance</text>
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
