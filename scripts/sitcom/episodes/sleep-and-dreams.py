# "Mind Games: CIE 0266 Psychology" S01E02 "Manifest Destiny, Latent Chaos" (Topic: Sleep & Dreams)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: sleep-stages-eeg, circadian-rhythms-scn, theories-of-sleep, sleep-disorders-hygiene, dream-theories.

EP = dict(
    topic="sleep-and-dreams",
    logline="Dad drinks double kopi-o at ten at night, dreams of a giant durian in a tuxedo chasing him down Orchard Road, and proclaims himself Singapore's Sigmund Freud. "
            "Dr. Synapse, Vani, and Examiner Chen decode NREM and REM EEG waves, the SCN and melatonin, Oswald versus Meddis, sleep hygiene, and Freud versus Hobson and McCarley."
)

D_HYPNO = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold">
<text x="350" y="38" fill="#fde047" text-anchor="middle">90-MIN ULTRADIAN SLEEP CYCLES</text>
<path d="M160 54 V246 H676" stroke="#94a3b8" stroke-width="3" fill="none"/>
<text x="150" y="82" fill="#f87171" text-anchor="end">Wake</text>
<text x="150" y="122" fill="#f472b6" text-anchor="end">REM</text>
<text x="150" y="162" fill="#38bdf8" text-anchor="end">N1 Theta</text>
<text x="150" y="202" fill="#a78bfa" text-anchor="end">N2 Spind.</text>
<text x="150" y="242" fill="#4ade80" text-anchor="end">N3 Delta</text>
<path d="M164 74 H192 V154 H216 V194 H238 V234 H284 V194 H304 V114 H336 V154 H360 V194 H386 V234 H418 V114 H462 V194 H504 V114 H562 V154 H596 V114 H656 V74 H672" stroke="#38bdf8" stroke-width="4.5" fill="none"/>
<rect x="304" y="102" width="32" height="20" fill="#f472b6"/>
<rect x="418" y="102" width="44" height="20" fill="#f472b6"/>
<rect x="504" y="102" width="58" height="20" fill="#f472b6"/>
<rect x="596" y="102" width="60" height="20" fill="#f472b6"/>
<text x="350" y="296" fill="#fde047" text-anchor="middle">Early: Deep N3 SWS · Late: Longer REM</text>
</g>
</svg>"""

D_SCN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<text x="350" y="40" fill="#fde047">24-HR CIRCADIAN RHYTHM</text>
<rect x="14" y="60" width="206" height="108" rx="10" fill="#1e293b" stroke="#fde047" stroke-width="3"/>
<text x="117" y="102" fill="#fde047">LIGHT</text>
<text x="117" y="144" fill="#cbd5e1" font-weight="normal">Zeitgeber</text>
<path d="M220 114 H246" stroke="#fde047" stroke-width="4"/>
<rect x="246" y="60" width="208" height="108" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
<text x="350" y="102" fill="#38bdf8">SCN</text>
<text x="350" y="144" fill="#cbd5e1" font-weight="normal">Pacemaker</text>
<path d="M454 114 H480" stroke="#a78bfa" stroke-width="4"/>
<rect x="480" y="60" width="206" height="108" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="583" y="102" fill="#4ade80">PINEAL</text>
<text x="583" y="144" fill="#cbd5e1" font-weight="normal">Melatonin</text>
<rect x="14" y="188" width="672" height="116" rx="12" fill="#1e293b" stroke="#f472b6" stroke-width="3"/>
<text x="350" y="234" fill="#f472b6">Endogenous SCN + Exogenous Light</text>
<text x="350" y="280" fill="#cbd5e1" font-weight="normal">Blue light blocks melatonin → Jet lag</text>
</g>
</svg>"""

D_RESTORE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<rect x="14" y="14" width="328" height="292" rx="12" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="178" y="56" fill="#4ade80">OSWALD (1966)</text>
<text x="178" y="96" fill="#a7f3d0">Restoration</text>
<rect x="28" y="114" width="300" height="82" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
<text x="178" y="148" fill="#38bdf8">N3 SWS = BODY</text>
<text x="178" y="184" fill="#cbd5e1" font-weight="normal">Growth hormone</text>
<rect x="28" y="208" width="300" height="82" rx="8" fill="#0f172a" stroke="#f472b6" stroke-width="2"/>
<text x="178" y="242" fill="#f472b6">REM = BRAIN</text>
<text x="178" y="278" fill="#cbd5e1" font-weight="normal">Neurotransmitters</text>
<rect x="358" y="14" width="328" height="292" rx="12" fill="#1e293b" stroke="#fde047" stroke-width="3"/>
<text x="522" y="56" fill="#fde047">MEDDIS (1975)</text>
<text x="522" y="96" fill="#fde68a">Evolutionary</text>
<rect x="372" y="114" width="300" height="82" rx="8" fill="#0f172a" stroke="#fb923c" stroke-width="2"/>
<text x="522" y="148" fill="#fb923c">AVOID PREDATORS</text>
<text x="522" y="184" fill="#cbd5e1" font-weight="normal">Hide still in dark</text>
<rect x="372" y="208" width="300" height="82" rx="8" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/>
<text x="522" y="242" fill="#a78bfa">SAVE ENERGY</text>
<text x="522" y="278" fill="#cbd5e1" font-weight="normal">Fits niche</text>
</g>
</svg>"""

D_DREAMS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 320" width="700" height="320">
<rect width="700" height="320" rx="14" fill="#0f172a"/>
<g font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">
<rect x="14" y="14" width="328" height="292" rx="12" fill="#1e293b" stroke="#f472b6" stroke-width="3"/>
<text x="178" y="56" fill="#f472b6">FREUD (1900)</text>
<rect x="28" y="76" width="300" height="60" rx="8" fill="#3b0764"/>
<text x="178" y="116" fill="#fde047">Latent (hidden)</text>
<text x="178" y="168" fill="#cbd5e1" font-weight="normal">↓ Dreamwork ↓</text>
<rect x="28" y="184" width="300" height="60" rx="8" fill="#0c4a6e"/>
<text x="178" y="224" fill="#38bdf8">Manifest (story)</text>
<text x="178" y="286" fill="#fca5a5" font-weight="normal">Unfalsifiable!</text>
<rect x="358" y="14" width="328" height="292" rx="12" fill="#1e293b" stroke="#4ade80" stroke-width="3"/>
<text x="522" y="56" fill="#4ade80">HOBSON &amp; McC.</text>
<rect x="372" y="76" width="300" height="60" rx="8" fill="#064e3b"/>
<text x="522" y="116" fill="#4ade80">Activation: Pons</text>
<text x="522" y="168" fill="#cbd5e1" font-weight="normal">↑ Random firing ↑</text>
<rect x="372" y="184" width="300" height="60" rx="8" fill="#1e3a8a"/>
<text x="522" y="224" fill="#7dd3fc">Synthesis: Cortex</text>
<text x="522" y="286" fill="#fde047" font-weight="normal">Iorio: stress links</text>
</g>
</svg>"""

# ---------------- COLD OPEN ----------------
scene("kitchen", [("vani", 260), ("mum", 600), ("dad", 940)], "SUNDAY · 7:00 A.M. · Dad Has Not Slept")
L("dad", "Family, gather round. Last night at ten o'clock I drank two cups of strong kopi-o, stared at my tablet, and unlocked my unconscious mind.", mood="excited", shot="close", prop="book")
L("mum", "You tossed and turned until three in the morning and kicked the duvet onto the floor.", mood="annoyed", shot="close")
L("dad", "Because I was dreaming! A giant thorny durian wearing a tuxedo chased me onto an MRT train while shouting about tax returns!", mood="shock", shot="close")
L("vani", "And let me guess. You bought a dream dictionary.", mood="deadpan", shot="close")
L("dad", "I AM Singapore's Sigmund Freud! Clearly the durian represents my majestic leadership!", mood="smug", shot="close", gap=0.3)
freeze("SINGAPORE FREUD", 2.4, narrator="Narrator: It represented caffeine and poor life choices.")

confess("mum", "MUM · Light Sleeper · Confiscated The Coffee Tin")
L("mum", "If Sigmund Freud drank double kopi-o at ten at night, Mrs Freud would have made him sleep on the balcony too.", mood="deadpan", gap=0.5)

title()

# ---------------- ACT 1: SLEEP STAGES, EEG & ULTRADIAN CYCLES ----------------
scene("living", [("vani", 260), ("dad", 600)])
L("dad", "Vani, why did the durian dream happen right before my alarm at six thirty, and why could my legs not run away?", mood="thinking", shot="two")
sfx("poof")
poof("synapse", 960)
L("synapse", "Because you were deep inside Rapid Eye Movement paradoxical sleep! Let us wire Vikram to a polysomnography EEG!", mood="excited", shot="close")
L("vani", "Across the night, sleep runs in ninety minute ultradian cycles through three Non-REM stages and REM sleep.", mood="teach", shot="close",
  boardClear=True, board="Ultradian sleep cycle ≈ 90 minutes", diagram=D_HYPNO)
L("synapse", "Awake and relaxed, your brain shows alpha waves. Drift into Non-REM Stage One light sleep, and waves slow into theta!", mood="teach", shot="close",
  board="N1: Theta · N2: Spindles & K-complexes")
L("vani", "In Non-REM Stage Two, heart rate drops and EEG shows sudden bursts called sleep spindles and K-complexes that protect sleep.", mood="teach", shot="close",
  board="N3 (SWS): Slow high-amp DELTA waves")
L("synapse", "Then comes Non-REM Stage Three, Slow-Wave Sleep, dominated by slow, high-amplitude delta waves! It is hardest to wake someone here.", mood="teach", shot="close")
L("vani", "Finally you ascend into REM sleep! Your eyes dart rapidly, vivid dreams play out, and your EEG looks fast and beta-like, almost awake!", mood="excited", shot="close",
  boardClear=True, board="REM = Paradoxical: active brain, atonia", diagram=D_HYPNO)
L("synapse", "Yet your brainstem switches off skeletal muscles, causing muscle atonia so you do not sprint into the bedroom wardrobe!", mood="teach", shot="close")
L("vani", "Notice the night shift too: early cycles pack in deep Slow-Wave Sleep, whereas early morning cycles have much longer REM!", mood="teach", shot="close",
  board="Early night = more SWS · Late = more REM")
L("dad", "Aha! Muscle atonia saved the wardrobe from my flying kick!", mood="smug", shot="close")

# ---------------- ACT 2: CIRCADIAN RHYTHMS, SCN & SLEEP HYGIENE ----------------
card("WHY DAD COULDN'T SLEEP", "Caffeine, blue light, and a furious hypothalamus", 2.4)
scene("living", [("vani", 260), ("dad", 600), ("synapse", 960)])
L("vani", "Now let us talk about why you stared at the ceiling until three. Meet your twenty four hour circadian sleep-wake rhythm.", mood="determined", shot="close",
  boardClear=True, board="Circadian rhythm ≈ 24-hour sleep-wake", diagram=D_SCN)
L("synapse", "Deep in your hypothalamus sits your master endogenous pacemaker: the suprachiasmatic nucleus, or SCN!", mood="teach", shot="close",
  board="SCN (hypothalamus) = endogenous clock")
L("vani", "External cues called exogenous zeitgebers, especially daylight hitting your retina, reset the SCN every morning.", mood="teach", shot="close",
  board="Zeitgebers (light) → SCN → Pineal melatonin")
L("synapse", "When darkness falls, the SCN signals the pineal gland to secrete melatonin, inducing sleepiness!", mood="teach", shot="close")
L("vani", "Staring at tablet blue light at night tricks your SCN into thinking it is noon and suppresses melatonin!", mood="annoyed", shot="close")
L("dad", "What about my harmless ten o'clock kopi-o?", mood="worried", shot="close", prop="tablet")
L("vani", "Caffeine blocks adenosine sleep receptors! That triggers sleep-onset insomnia, struggling to fall asleep, and sleep-maintenance insomnia, waking repeatedly!", mood="teach", shot="close",
  boardClear=True, board="Insomnia: sleep-onset vs maintenance")
L("synapse", "Fun fact: sleepwalking, or somnambulism, happens during Non-REM Stage Three Slow-Wave Sleep when muscles still work, NOT during REM!", mood="teach", shot="close",
  board="Sleepwalking = NREM Stage 3 (NOT REM!)")
L("vani", "Good sleep hygiene means a fixed wake time, zero late caffeine or screens, and a cool dark bedroom.", mood="happy", shot="close",
  board="Hygiene: dark cool room, no screens/kopi")
L("synapse", "Plus flying across time zones or night shift work desynchronises your internal SCN from outside daylight, causing jet lag!", mood="teach", shot="close")
sfx("ding")

# ---------------- ACT 3: OSWALD VS MEDDIS & FREUD VS ACTIVATION-SYNTHESIS ----------------
card("THEORY SHOWDOWN", "Why do we sleep, and what is that durian?", 2.4)
scene("kitchen", [("vani", 260), ("dad", 600), ("synapse", 960)])
L("dad", "Why do humans waste a third of life unconscious anyway? Think how many spreadsheets I could colour-code!", mood="excited", shot="close")
L("synapse", "Two rival theories! In nineteen sixty six, Oswald proposed Restoration Theory!", mood="teach", shot="close",
  boardClear=True, board="Oswald (1966): SWS=body · REM=brain", diagram=D_RESTORE)
L("synapse", "Non-REM Slow-Wave Sleep repairs the body via growth hormone, while REM restores brain proteins and neurotransmitters!", mood="teach", shot="close")
L("vani", "That explains why ultra-marathon runners get extra Slow-Wave Sleep and newborn babies spend half their sleep in REM!", mood="happy", shot="close",
  board="Meddis (1975): Conserve energy & hide")
L("synapse", "Against that, Meddis in nineteen seventy five argued Evolutionary Theory: sleep conserves energy and keeps animals still and hidden from predators!", mood="teach", shot="close")
L("dad", "Fine, now validate my Freudian genius! The tuxedo durian is my manifest destiny!", mood="smug", shot="close", prop="book")
L("vani", "Backwards already, Dad! In nineteen hundred, Freud argued dreams are unconscious wish-fulfilment.", mood="eyeroll", shot="close",
  boardClear=True, board="Freud (1900): Unconscious wish-fulfilment", diagram=D_DREAMS)
L("synapse", "The surface story you remember, a durian in a tuxedo, is the MANIFEST content!", mood="teach", shot="close",
  board="Manifest = surface story · Latent = hidden")
L("vani", "The hidden unconscious wish underneath is the LATENT content, disguised by dreamwork symbolism and displacement!", mood="teach", shot="close")
L("vani", "Critics point out Freud's interpretations are subjective and unfalsifiable. So in nineteen seventy seven, Hobson and McCarley proposed neurobiological Activation-Synthesis!", mood="teach", shot="close",
  board="Hobson & McCarley: Pons random → Cortex")
L("synapse", "During REM, the brainstem pons fires random bursts of activation upward, and your forebrain cerebral cortex synthesises a makeshift story out of recent memories!", mood="teach", shot="close")
L("vani", "And Iorio and colleagues studied pandemic dreaming, supporting the continuity hypothesis: waking anxiety and emotional stress spill straight into dream themes, like your overdue tax return!", mood="happy", shot="close",
  boardClear=True, board="Iorio et al.: Waking stress → dream themes")

confess("dad", "VIKRAM · Dad · Former Psychoanalyst")
L("dad", "So the tuxedo durian was just my pons firing random static onto yesterday's fruit stall receipt and my tax folder. Honestly, I preferred being deep and mysterious.", mood="sad", gap=0.5)

# ---------------- ACT 4: EXAMINER MARK-SCHEME TRAP ----------------
scene("kitchen", [("vani", 220), ("dad", 480), ("synapse", 740)])
L("dad", "Got it! Every twenty four hour ultradian cycle, my latent surface story plays during REM!", mood="smug", shot="close")
sfx("buzzer")
poof("examiner", 1000)
L("examiner", "RED PEN EMERGENCY! Examiner Chen here! Vikram just detonated the two biggest Paper One Sleep and Dreams traps!", mood="shock", shot="close",
  boardClear=True, board="EXAMINER MARK-SCHEME TRAP!")
L("examiner", "Trap one! Never confuse circadian and ultradian! Circadian lasts roughly twenty four hours, like sleep-wake. Ultradian cycles repeat MORE than once a day, like the ninety minute sleep-stage cycle!", mood="teach", shot="close",
  board="✘ Never swap Circadian (24h) & Ultradian", prop="book")
L("examiner", "Trap two! Never call the hidden meaning manifest! Manifest content is the remembered surface plot; latent content is the disguised unconscious meaning!", mood="teach", shot="close",
  board="✔ Ultradian = 90-min · Circadian = 24-hr")
L("vani", "Memory hook: Manifest is on the Movie screen; Latent lies Locked underneath!", mood="happy", shot="close",
  board="✔ Manifest = surface · Latent = hidden")
sfx("ding")

# ---------------- BUTTON ----------------
scene("living", [("vani", 260), ("mum", 600), ("dad", 940)], "THAT NIGHT · 9:45 P.M.")
L("dad", "Behold! Bedroom cooled, blackout curtains shut, chamomile tea, zero screens, immaculate sleep hygiene!", mood="determined", shot="close", prop="cushion")
L("mum", "Vikram, why are you wearing sunglasses indoors?", mood="thinking", shot="close")
L("dad", "Protecting my suprachiasmatic nucleus from the fridge lightbulb. Melatonin waits for no man!", mood="smug", shot="close", prop="sunglasses")
L("vani", "Goodnight, Doctor Freud.", mood="happy", shot="close")
sfx("ding")
L("synapse", "Sweet delta waves, mortals! Watch out for tuxedo durians in cycle four!", mood="happy", shot="wide", offstage=True, gap=0.6)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Five seconds on the Neuro-Clock!", 2.8)
challenge(
    1,
    "Which brain structure in the hypothalamus acts as the master circadian pacemaker?",
    "THE SCN",
    "Suprachiasmatic Nucleus → signals pineal gland",
    "Question one. Which tiny cluster of neurons in the hypothalamus acts as our master endogenous circadian pacemaker?",
    "The SCN, or suprachiasmatic nucleus. It reads retinal light cues and tells the pineal gland when to release melatonin."
)
challenge(
    2,
    "In Freud's dream theory, what do we call the hidden symbolic unconscious wish?",
    "LATENT CONTENT",
    "Manifest = surface story · Latent = hidden wish",
    "Question two. In Freud's dream theory, what term describes the hidden symbolic unconscious wish behind a dream?",
    "Latent content. The surface storyline you actually recall when you wake up is the manifest content."
)
challenge(
    3,
    "Which brain region fires random signals during REM in Activation-Synthesis Theory?",
    "THE PONS",
    "Hobson & McCarley: Brainstem pons → forebrain cortex",
    "Question three. According to Hobson and McCarley's Activation-Synthesis Theory, which brainstem region fires random signals during REM sleep?",
    "The pons. Then the forebrain cerebral cortex synthesises those random signals into a dream narrative."
)
end_card()
