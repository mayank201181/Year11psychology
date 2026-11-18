# "Mind Games: CIE 0266 Psychology" S01E02 "Manifest Destiny, Latent Chaos" (Topic: Sleep & Dreams)
# Format and helpers: see common.py; check with lint_episode.py.
# Sections taught: sleep-stages-eeg, circadian-rhythms-scn, theories-of-sleep, sleep-disorders-hygiene, dream-theories.

EP = dict(
    topic="sleep-and-dreams",
    logline="Dad drinks double kopi-o at ten at night, dreams of a giant durian in a tuxedo chasing him down Orchard Road, and proclaims himself Singapore's Sigmund Freud. "
            "Dr. Synapse, Vani, and Examiner Chen decode NREM and REM EEG waves, the SCN and melatonin, Oswald versus Meddis, sleep hygiene, and Freud versus Hobson and McCarley."
)

D_HYPNO = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 240">
<rect width="520" height="240" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold">
<text x="260" y="20" fill="#fde047" text-anchor="middle">90-MIN ULTRADIAN SLEEP CYCLE &amp; EEG WAVES</text>
<path d="M72 34 V186 H496" stroke="#94a3b8" stroke-width="1.8" fill="none"/>
<text x="64" y="48" fill="#f87171" text-anchor="end">Wake</text>
<text x="64" y="78" fill="#f472b6" text-anchor="end">REM</text>
<text x="64" y="110" fill="#38bdf8" text-anchor="end">N1 Theta</text>
<text x="64" y="142" fill="#a78bfa" text-anchor="end">N2 Spindle</text>
<text x="64" y="174" fill="#4ade80" text-anchor="end">N3 Delta</text>
<path d="M75 46 H95 V110 H112 V142 H130 V174 H168 V142 H182 V76 H204 V110 H220 V142 H242 V174 H268 V76 H302 V142 H336 V76 H382 V110 H412 V76 H468 V46 H490" stroke="#38bdf8" stroke-width="3" fill="none"/>
<rect x="182" y="68" width="22" height="14" fill="#f472b6"/>
<rect x="268" y="68" width="34" height="14" fill="#f472b6"/>
<rect x="336" y="68" width="46" height="14" fill="#f472b6"/>
<rect x="412" y="68" width="56" height="14" fill="#f472b6"/>
<text x="150" y="206" fill="#4ade80" text-anchor="middle">Early night: deep N3 SWS</text>
<text x="400" y="206" fill="#f472b6" text-anchor="middle">Late night: longer REM</text>
<text x="280" y="228" fill="#cbd5e1" text-anchor="middle" font-weight="normal">REM = Paradoxical: fast Beta-like EEG + Muscle Atonia</text>
</g>
</svg>"""

D_SCN = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<text x="260" y="22" fill="#fde047">24-HOUR CIRCADIAN SLEEP-WAKE SYSTEM</text>
<rect x="18" y="54" width="102" height="64" rx="8" fill="#1e293b" stroke="#fde047" stroke-width="2"/>
<text x="69" y="78" fill="#fde047">ZEITGEBER</text>
<text x="69" y="98" fill="#cbd5e1" font-weight="normal">Light hits retina</text>
<path d="M120 86 H156" stroke="#fde047" stroke-width="2.5"/>
<rect x="156" y="54" width="124" height="64" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
<text x="218" y="78" fill="#38bdf8">SCN PACEMAKER</text>
<text x="218" y="98" fill="#cbd5e1" font-weight="normal">Hypothalamus</text>
<path d="M280 86 H316" stroke="#a78bfa" stroke-width="2.5"/>
<rect x="316" y="54" width="100" height="64" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>
<text x="366" y="78" fill="#a78bfa">PINEAL GLAND</text>
<text x="366" y="98" fill="#cbd5e1" font-weight="normal">Darkness signal</text>
<path d="M416 86 H440" stroke="#4ade80" stroke-width="2.5"/>
<rect x="440" y="54" width="66" height="64" rx="8" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="473" y="78" fill="#4ade80">SLEEP</text>
<text x="473" y="98" fill="#cbd5e1" font-weight="normal" font-size="10">Melatonin</text>
<rect x="40" y="144" width="440" height="54" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="1.5"/>
<text x="260" y="166" fill="#f472b6">Endogenous Pacemaker (SCN) + Exogenous Zeitgebers (Light, Meals)</text>
<text x="260" y="186" fill="#cbd5e1" font-weight="normal">Mismatch → Jet lag &amp; shift-work insomnia · Blue light suppresses melatonin</text>
</g>
</svg>"""

D_RESTORE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220">
<rect width="520" height="220" fill="#0f172a"/>
<g font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">
<rect x="18" y="20" width="234" height="178" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="135" y="44" fill="#4ade80">OSWALD (1966) RESTORATION</text>
<rect x="34" y="60" width="202" height="54" rx="6" fill="#0f172a" stroke="#38bdf8"/>
<text x="135" y="80" fill="#38bdf8" font-size="11">NREM Stage 3 (SWS) = BODY</text>
<text x="135" y="100" fill="#cbd5e1" font-size="10" font-weight="normal">Growth hormone · Tissue repair</text>
<rect x="34" y="126" width="202" height="54" rx="6" fill="#0f172a" stroke="#f472b6"/>
<text x="135" y="146" fill="#f472b6" font-size="11">REM Sleep = BRAIN</text>
<text x="135" y="166" fill="#cbd5e1" font-size="10" font-weight="normal">Neurotransmitters · Brain protein</text>
<rect x="268" y="20" width="234" height="178" rx="10" fill="#1e293b" stroke="#fde047" stroke-width="2"/>
<text x="385" y="44" fill="#fde047">MEDDIS (1975) EVOLUTIONARY</text>
<rect x="284" y="60" width="202" height="54" rx="6" fill="#0f172a" stroke="#fb923c"/>
<text x="385" y="80" fill="#fb923c" font-size="11">PREDATOR AVOIDANCE</text>
<text x="385" y="100" fill="#cbd5e1" font-size="10" font-weight="normal">Stay still &amp; hidden in dark</text>
<rect x="284" y="126" width="202" height="54" rx="6" fill="#0f172a" stroke="#a78bfa"/>
<text x="385" y="146" fill="#a78bfa" font-size="11">ENERGY CONSERVATION</text>
<text x="385" y="166" fill="#cbd5e1" font-size="10" font-weight="normal">Adapted to ecological niche</text>
</g>
</svg>"""

D_DREAMS = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 230">
<rect width="520" height="230" fill="#0f172a"/>
<g font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">
<rect x="16" y="18" width="236" height="192" rx="10" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
<text x="134" y="40" fill="#f472b6" font-size="12">FREUD (1900): WISH-FULFILMENT</text>
<rect x="34" y="54" width="200" height="38" rx="6" fill="#3b0764"/>
<text x="134" y="77" fill="#fde047">LATENT CONTENT (Hidden wish)</text>
<text x="134" y="112" fill="#cbd5e1" font-size="10">↓ Dreamwork: Symbolism, Displacement ↓</text>
<rect x="34" y="124" width="200" height="38" rx="6" fill="#0c4a6e"/>
<text x="134" y="147" fill="#38bdf8">MANIFEST CONTENT (Surface story)</text>
<text x="134" y="188" fill="#94a3b8" font-weight="normal" font-size="10">Critique: Unfalsifiable &amp; subjective</text>
<rect x="268" y="18" width="236" height="192" rx="10" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
<text x="386" y="40" fill="#4ade80" font-size="12">HOBSON &amp; McCARLEY (1977)</text>
<rect x="286" y="54" width="200" height="38" rx="6" fill="#064e3b"/>
<text x="386" y="77" fill="#4ade80">ACTIVATION: Pons fires in REM</text>
<text x="386" y="112" fill="#cbd5e1" font-size="10">↑ Random neural signals rise ↑</text>
<rect x="286" y="124" width="200" height="38" rx="6" fill="#1e3a8a"/>
<text x="386" y="147" fill="#7dd3fc">SYNTHESIS: Cortex builds story</text>
<text x="386" y="188" fill="#fde047" font-weight="normal" font-size="10">Iorio et al.: Waking stress shapes dreams</text>
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
