# "Mind Games: CIE 0266 Psychology" S01E07 "Confounded At Birth" (Topic: Research Methods)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: variables-hypotheses-controls, experiments-designs-sampling, non-experimental-methods, ethics-reliability-validity, data-analysis-graphs.

EP = dict(
    topic="research-methods",
    logline="Dad launches a 'Nobel-worthy experiment' at Uncle Hock's hawker stall asking his three best friends if secret ghost-pepper chilli 'improves mood', breaking every rule of CIE 0266 Research Methods. "
            "Dr. Synapse, Vani, and Examiner Chen overhaul his operationalisation, hypotheses, designs, sampling, self-reports, observations, correlations, ethics, validity, stats, and graphs."
)

D_VARS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<rect x="14" y="14" width="328" height="172" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="178" y="54" fill="#38bdf8">VARIABLES</text>
<text x="178" y="102" fill="#4ade80">IV: 10g vs 0g chilli</text>
<text x="178" y="148" fill="#f472b6">DV: Mood (1–20)</text>
<rect x="358" y="14" width="328" height="172" rx="12" fill="#1e293b" stroke="#fde047" stroke-width="3"/>
<text x="522" y="54" fill="#fde047">HYPOTHESES</text>
<text x="522" y="96" fill="#f8fafc" font-weight="normal">1-tail: higher/lower</text>
<text x="522" y="136" fill="#f8fafc" font-weight="normal">2-tail: difference</text>
<text x="522" y="174" fill="#cbd5e1" font-weight="normal">Null: no diff (chance)</text>
<rect x="14" y="200" width="672" height="106" rx="12" fill="#1e293b" stroke="#a78bfa" stroke-width="3"/>
<text x="350" y="242" fill="#a78bfa">DESIGNS &amp; COUNTERBALANCING</text>
<text x="350" y="286" fill="#4ade80">Repeated → Order effects → ABBA fix!</text>
</g>
</svg>"""

D_SAMPLING = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold">
<rect x="14" y="14" width="302" height="292" rx="12" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="165" y="54" fill="#4ade80" text-anchor="middle">EXPERIMENTS</text>
<text x="30" y="108" fill="#38bdf8">Lab: ↑ Internal</text>
<text x="30" y="158" fill="#fde047">Field: ↑ Ecological</text>
<text x="30" y="208" fill="#f472b6">Natural: IV occurs</text>
<text x="30" y="258" fill="#cbd5e1" font-weight="normal">(No random alloc.)</text>
<rect x="330" y="14" width="356" height="292" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="508" y="54" fill="#38bdf8" text-anchor="middle">5 SAMPLING TYPES</text>
<text x="348" y="104" fill="#4ade80">Random: Equal RNG</text>
<text x="348" y="150" fill="#fde047">Stratified: Exact %</text>
<text x="348" y="196" fill="#a78bfa">Systematic: Every nth</text>
<text x="348" y="242" fill="#fb923c">Opportunity: Nearby</text>
<text x="348" y="288" fill="#f472b6">Volunteer: Self-pick</text>
</g>
</svg>"""

D_ETHICS_VAL = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold">
<rect x="14" y="14" width="328" height="292" rx="12" fill="#1e293b" stroke="#f472b6" stroke-width="3"/>
<text x="178" y="54" fill="#f472b6" text-anchor="middle">ETHICS (DRIP)</text>
<text x="30" y="106" fill="#4ade80">✔ Consent (16+)</text>
<text x="30" y="152" fill="#4ade80">✔ Protect from harm</text>
<text x="30" y="198" fill="#4ade80">✔ Right to withdraw</text>
<text x="30" y="244" fill="#4ade80">✔ Debrief deception</text>
<text x="30" y="290" fill="#fde047">✔ Confidentiality</text>
<rect x="358" y="14" width="328" height="292" rx="12" fill="#1e293b" stroke="#fde047" stroke-width="3"/>
<text x="522" y="54" fill="#fde047" text-anchor="middle">REL vs VAL</text>
<rect x="372" y="74" width="300" height="98" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
<text x="522" y="114" fill="#38bdf8" text-anchor="middle">RELIABILITY</text>
<text x="522" y="156" fill="#cbd5e1" font-weight="normal" text-anchor="middle">Consistent (≥0.80)</text>
<rect x="372" y="186" width="300" height="104" rx="8" fill="#0f172a" stroke="#4ade80" stroke-width="2"/>
<text x="522" y="226" fill="#4ade80" text-anchor="middle">VALIDITY</text>
<text x="522" y="268" fill="#cbd5e1" font-weight="normal" text-anchor="middle">Accurate · Real life</text>
</g>
</svg>"""

D_GRAPHS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<rect x="14" y="14" width="214" height="238" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="121" y="52" fill="#38bdf8">BAR (Gaps)</text>
<path d="M40 198 H202 M40 198 V74" stroke="#94a3b8" stroke-width="3"/>
<rect x="56" y="110" width="32" height="88" fill="#38bdf8"/>
<rect x="104" y="140" width="32" height="58" fill="#38bdf8"/>
<rect x="152" y="88" width="32" height="110" fill="#38bdf8"/>
<text x="121" y="236" fill="#f8fafc" font-weight="normal">Categories</text>
<rect x="243" y="14" width="214" height="238" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="350" y="52" fill="#4ade80">HISTOGRAM</text>
<path d="M269 198 H431 M269 198 V74" stroke="#94a3b8" stroke-width="3"/>
<rect x="284" y="148" width="34" height="50" fill="#4ade80" stroke="#0f172a" stroke-width="2"/>
<rect x="318" y="92" width="34" height="106" fill="#4ade80" stroke="#0f172a" stroke-width="2"/>
<rect x="352" y="116" width="34" height="82" fill="#4ade80" stroke="#0f172a" stroke-width="2"/>
<rect x="386" y="160" width="34" height="38" fill="#4ade80" stroke="#0f172a" stroke-width="2"/>
<text x="350" y="236" fill="#f8fafc" font-weight="normal">Touching!</text>
<rect x="472" y="14" width="214" height="238" rx="10" fill="#1e293b" stroke="#f472b6" stroke-width="3"/>
<text x="579" y="52" fill="#f472b6">SCATTER</text>
<path d="M498 198 H660 M498 198 V74" stroke="#94a3b8" stroke-width="3"/>
<circle cx="518" cy="180" r="7" fill="#fde047"/><circle cx="546" cy="158" r="7" fill="#fde047"/>
<circle cx="576" cy="136" r="7" fill="#fde047"/><circle cx="608" cy="112" r="7" fill="#fde047"/>
<circle cx="640" cy="90" r="7" fill="#fde047"/>
<text x="579" y="236" fill="#f8fafc" font-weight="normal">Co-vars</text>
<rect x="14" y="262" width="672" height="46" rx="8" fill="#1e293b"/>
<text x="350" y="295" fill="#fde047">Outliers → MEDIAN · Corr ≠ Causation!</text>
</g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("hawker", [("vani", 240), ("dad", 560), ("uncle", 1000)], "SUNDAY NOON · Dad's 'Scientific Breakthrough'")
L("dad", "Stand back, Vani! I am conducting a Nobel-winning psychology experiment! I secretly slipped ghost-pepper chilli into Uncle Hock's soup for my three golf buddies!", mood="excited", shot="close", prop="tablet")
L("uncle", "Mr Tan is crying into a tissue and drinking soy milk straight from the jug.", mood="deadpan", shot="close")
L("dad", "Then I winked and asked, Hey buddy, my legendary chilli improved your mood, right? All three nodded! Science proved!", mood="smug", shot="close")
L("vani", "Un-operationalised variables, opportunity sample of three friends, leading questions, demand characteristics, AND five ethical violations before lunch!", mood="shock", shot="close")
L("dad", "Minor paperwork details!", mood="worried", shot="close", gap=0.3)
freeze("ZERO OUT OF TWENTY", 2.4, narrator="Narrator: Every ethics committee on Earth just fainted.")

confess("uncle", "UNCLE HOCK · Hawker Legend · Unwilling Lab Assistant")
L("uncle", "Mr Tan did not nod because he was happy. He nodded because his tongue lost feeling.", mood="deadpan", gap=0.5)

title()

# ---------------- ACT 1: VARIABLES, HYPOTHESES, DESIGNS & SAMPLING ----------------
scene("hawker", [("vani", 260), ("dad", 600)])
L("dad", "Fine! Help me fix my study properly! My hypothesis is: chilli affects mood!", mood="determined", shot="two")
sfx("poof")
poof("synapse", 960)
L("synapse", "Buzzer worthy already! Every Independent Variable and Dependent Variable MUST be operationalised into exact measurable units!", mood="teach", shot="close",
  boardClear=True, board="Operationalise BOTH IV and DV!", diagram=D_VARS)
L("vani", "Manipulated IV: ten grams of chilli versus zero grams plain sauce. Measured DV: happiness rating from one to twenty!", mood="teach", shot="close",
  board="IV = manipulated · DV = measured score")
L("synapse", "Use a directional one-tailed hypothesis ONLY when prior research points one way; otherwise use a non-directional hypothesis!", mood="teach", shot="close",
  board="Directional vs Non-directional vs Null")
L("vani", "And the null hypothesis states any difference is due to chance!", mood="teach", shot="close")
L("synapse", "Standardised instructions and double-blind procedures stop demand characteristics and investigator winks becoming confounding variables!", mood="teach", shot="close")
L("vani", "Next, experimental design! Independent measures uses separate groups, fixed by random allocation. Matched pairs pre-tests spice tolerance!", mood="teach", shot="close",
  boardClear=True, board="Repeated measures → ABBA counterbalance", diagram=D_VARS)
L("synapse", "Repeated measures tests the SAME people twice, risking practice or fatigue order effects!", mood="teach", shot="close")
L("vani", "Fix order effects with ABBA counterbalancing: half eat chilli first, half eat plain first!", mood="excited", shot="close",
  board="Lab vs Field vs Natural/Quasi experiment")
L("synapse", "Lab experiments maximise control, field experiments manipulate the IV in real life, and natural experiments study a natural IV!", mood="teach", shot="close",
  boardClear=True, board="Sampling: Random · Stratified · System.", diagram=D_SAMPLING)
L("vani", "For sampling, opportunity and volunteer samples bias generalisability!", mood="teach", shot="close",
  board="Opportunity & Volunteer = biased sample")
L("synapse", "Random gives equal chance, systematic picks every tenth name, and stratified matches exact population subgroup proportions!", mood="teach", shot="close")
sfx("ding")

# ---------------- ACT 2: NON-EXPERIMENTAL METHODS & CORRELATIONS ----------------
card("PAPER TWO TOOLKIT", "Self-reports, observations, case studies, and correlations", 2.4)
scene("hawker", [("vani", 260), ("dad", 600), ("synapse", 960)])
L("dad", "What if I hand out questionnaires, or hide behind a potted palm with binoculars watching diners?", mood="thinking", shot="close", prop="binoculars")
L("synapse", "Questionnaires and structured or unstructured interviews use closed Likert scales for quantitative data and open questions for qualitative depth!", mood="teach", shot="close",
  boardClear=True, board="Closed = quantitative · Open = qualitative")
L("vani", "Watch out for social desirability bias when diners fib to look polite!", mood="happy", shot="close")
L("synapse", "Hiding behind a palm is a naturalistic, covert, non-participant observation!", mood="teach", shot="close")
L("vani", "Define operationalised behavioural categories like smiling, then count every smile via event sampling or every thirty seconds via time sampling!", mood="teach", shot="close",
  board="Observation: Event vs Time sampling")
L("synapse", "Meanwhile, unique individuals like H.M. need longitudinal case studies.", mood="teach", shot="close",
  board="Case study: Rich depth, low generalise")
L("dad", "Wait! Ice-tea sales and sunglasses worn both rose today! Ice tea CAUSES sunglasses!", mood="excited", shot="close", prop="calculator")
L("vani", "NO, Dad! That is a positive correlation between two co-variables! Hot weather is the third variable!", mood="annoyed", shot="close",
  board="Correlation: Positive, Negative, Zero")
L("synapse", "CORRELATION NEVER PROVES CAUSATION because no Independent Variable was manipulated!", mood="teach", shot="close",
  board="CORRELATION NEVER PROVES CAUSATION!")

# ---------------- ACT 3: ETHICS, RELIABILITY, VALIDITY, STATS & GRAPHS ----------------
card("ETHICS AND DATA CLINIC", "Saving Mr Tan and plotting the numbers", 2.3)
scene("living", [("vani", 260), ("dad", 600), ("synapse", 960)])
L("vani", "Learn CIE ethics! You broke Informed Consent, Deception, and Protection from Harm!", mood="determined", shot="close",
  boardClear=True, board="Ethics: Consent, No Harm, Right Withdraw", diagram=D_ETHICS_VAL)
L("synapse", "Participants also keep the Right to Withdraw data, Confidentiality, and a full Debrief!", mood="teach", shot="close",
  board="Debrief + Confidentiality & Anonymity")
L("vani", "Reliability means consistency, like test-retest or eighty percent inter-observer agreement.", mood="teach", shot="close",
  board="Reliability = consistent · Validity = true")
L("synapse", "Validity means accuracy without confounds, plus ecological and population generalisability!", mood="teach", shot="close")
L("dad", "Five diners rated plain noodles: four, five, five, six, and Uncle Hock wrote NINETY! Should I use the mean?", mood="smug", shot="close", prop="calculator")
L("synapse", "Never with an extreme outlier like ninety! Ninety drags the mean sky-high!", mood="teach", shot="close",
  boardClear=True, board="Outlier present? Use MEDIAN, not Mean!", diagram=D_GRAPHS)
L("vani", "Use the median, five! Mode is most frequent, and range is highest minus lowest!", mood="teach", shot="close")
L("synapse", "For graphs: discrete categories take a Bar Chart with GAPS; continuous intervals take a Histogram with TOUCHING bars; correlations take a Scattergraph!", mood="teach", shot="close",
  board="Bar = GAPS · Histogram = TOUCHING bars")

confess("dad", "VIKRAM · Dad · Reforming Principal Investigator")
L("dad", "Turns out yelling Trust me bro while ambushing your mates with ghost peppers does not pass peer review.", mood="sad", gap=0.5)

# ---------------- ACT 4: MEGA EXAMINER MARK-SCHEME SHOWDOWN ----------------
scene("living", [("vani", 220), ("dad", 480), ("synapse", 740)])
L("dad", "Final check! My directional hypothesis says chilli affects mood, my positive correlation proves chilli causes joy, and my bar chart bars touch neatly!", mood="smug", shot="close")
sfx("buzzer")
poof("examiner", 1000)
L("examiner", "SOUND EVERY SIREN IN CAMBRIDGE! Examiner Chen here for the Season Finale Research Methods Boss Fight! Three lethal mark-killers!", mood="shock", shot="close",
  boardClear=True, board="MEGA EXAMINER MARK-SCHEME TRAP!")
L("examiner", "Trap one! Saying 'affects mood' is BOTH non-directional AND un-operationalised! State exact measured IV and DV units, and say HIGHER or LOWER for directional!", mood="teach", shot="close",
  board="✘ Never write un-operationalised IV/DV", prop="book")
L("examiner", "Trap two! Never write 'proves' or 'causes' in a correlation! Write 'there is a positive relationship between co-variable A and co-variable B'!", mood="teach", shot="close",
  board="✔ Operationalise units · No 'causes'!")
L("vani", "And Trap three: leave clear GAPS between bars on a bar chart, label both axes with units, and only touch bars on a continuous histogram!", mood="happy", shot="close",
  board="✔ Bar chart = GAPS + labelled axes!")
sfx("ding")

# ---------------- BUTTON ----------------
scene("hawker", [("vani", 240), ("mum", 520), ("dad", 760), ("uncle", 1000)])
L("dad", "Behold Version Two! Signed informed consent forms, mild operationalised sambal, ABBA counterbalancing, double-blind bowls, and free ice milk at debrief!", mood="excited", shot="close", prop="book")
L("mum", "Impressive! What did the median mood ratings show?", mood="happy", shot="close")
L("dad", "Uncle Hock's plain noodles scored eighteen out of twenty, and my secret chilli scored... four. Null hypothesis rejected in the wrong direction.", mood="sad", shot="close")
L("uncle", "Even four was generous. Mr Tan gave you one.", mood="deadpan", shot="close")
L("mum", "High inter-rater reliability on never letting Vikram cook again!", mood="smug", shot="close")
L("vani", "Cheer up, Dad! Bad chef, first-class CIE zero two six six psychologist! Happy studying, everyone!", mood="excited", shot="close")
sfx("ding")
L("synapse", "Season One complete! Operationalise your dreams, guard your ethics, and go smash those exams, Vanishree!", mood="excited", shot="wide", offstage=True, gap=0.8)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Final Boss Round — 5 seconds per question!", 2.8)
challenge(
    1,
    "Which control splits a repeated-measures sample so half do A→B and half do B→A?",
    "COUNTERBALANCE",
    "ABBA counterbalancing controls practice & fatigue effects",
    "Question one. What experimental technique splits a repeated-measures sample so half complete Condition A then B, and half complete B then A?",
    "Counterbalancing. It balances out practice, boredom, and fatigue order effects across both conditions."
)
challenge(
    2,
    "A dataset has one huge extreme outlier. Which average is best: mean, median, or mode?",
    "THE MEDIAN",
    "Median = middle ranked score (unaffected by outliers)",
    "Question two. Your dataset contains one extreme outlier score. Which measure of central tendency should you choose: mean, median, or mode?",
    "The median, because extreme outliers distort the mean while leaving the middle ranked value stable."
)
challenge(
    3,
    "Which graph uses TOUCHING bars for continuous intervals, and which uses GAPS?",
    "HISTO / BAR",
    "Histogram = touching continuous · Bar chart = discrete gaps",
    "Question three. Which graph uses touching bars for continuous intervals, and which leaves gaps between discrete categories?",
    "A histogram uses touching bars for continuous data, whereas a bar chart leaves clear gaps between discrete categories."
)
end_card()
