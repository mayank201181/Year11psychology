import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "sleep-and-dreams-m1",
    title: "MCQ Paper 1: Sleep Architecture, Clocks & Core Theories",
    questions: [
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q01",
        question:
          "Which EEG brainwave pattern dominates **NREM Stage 3 (Slow-Wave Sleep)**?",
        options: [
          "High-amplitude, low-frequency delta waves (0.5–4 Hz)",
          "Low-amplitude, high-frequency beta waves (13–30 Hz)",
          "Rhythmic alpha waves (8–12 Hz) typical of relaxed wakefulness",
          "Rapid sawtooth waves accompanied by voluntary limb movement",
        ],
        answerIndex: 0,
        explanation:
          "Deep **NREM Stage 3 (SWS)** is characterised by large, slow **delta waves** (0.5–4 Hz). Beta waves occur in alert wakefulness and alpha waves occur when awake with eyes closed.",
        difficulty: "warmup",
        guideRef: "sleep-stages-eeg",
        hints: ["Use B.A.T.D. (Beta → Alpha → Theta → Delta) to find the deepest slow wave."],
        strategy: "Use B.A.T.D. wave sequence",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q02",
        question:
          "Why do psychologists describe **REM sleep** as **'paradoxical sleep'**?",
        options: [
          "Core body temperature rises to fever levels while EEG waves flatten completely",
          "EEG brain activity resembles an active waking brain while skeletal muscles experience near-total paralysis (atonia)",
          "Heart rate stops briefly every ninety minutes while the sleeper walks around the room",
          "Growth Hormone reaches its maximum surge while dreaming is completely suppressed",
        ],
        answerIndex: 1,
        explanation:
          "The paradox of **REM sleep** is that internal cortical activity (fast desynchronised EEG, high oxygen use, darting eyes) looks almost awake, yet brainstem **muscle atonia** leaves skeletal muscles paralysed. Growth Hormone surges and sleepwalking occur in **NREM Stage 3**, not REM.",
        difficulty: "warmup",
        guideRef: "sleep-stages-eeg",
        hints: ["Compare what the *brain* is doing with what the *body's skeletal muscles* are doing during REM."],
        strategy: "Contrast active cortex with muscle atonia",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q03",
        question:
          "What biological rhythm category describes the **~90-minute cycle** through NREM Stages 1–3 and REM sleep that repeats 4 to 6 times per night?",
        options: [
          "Circadian rhythm",
          "Infradian rhythm",
          "Ultradian rhythm",
          "Seasonal photoperiod rhythm",
        ],
        answerIndex: 2,
        explanation:
          "Any biological cycle shorter than 24 hours (repeating multiple times per day, like the ~90-minute sleep-stage cycle) is an **ultradian rhythm**. A **circadian** rhythm lasts ~24 hours (the overall daily sleep-wake cycle), and an **infradian** rhythm lasts longer than 24 hours (e.g. menstrual cycle).",
        difficulty: "warmup",
        guideRef: "sleep-stages-eeg",
        hints: ["Circadian = ~24 hours; what prefix names cycles that happen *many* times within 24 hours?"],
        strategy: "Distinguish ultradian (<24h) from circadian (~24h)",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q04",
        question:
          "Where is the **suprachiasmatic nucleus (SCN)** — the body's master endogenous circadian pacemaker — located, and why is its anatomical position significant?",
        options: [
          "Inside the cerebellum, allowing it to paralyse muscles during Slow-Wave Sleep",
          "Inside the occipital lobe, allowing it to construct manifest dream symbols",
          "Inside the brainstem pons, allowing it to secrete melatonin directly into spinal fluid",
          "In the hypothalamus directly above the optic chiasm, allowing it to receive direct retinal light input",
        ],
        answerIndex: 3,
        explanation:
          "The **SCN** sits in the **hypothalamus** right above the **optic chiasm** (*suprachiasmatic* = 'above the crossing'), receiving direct light signals from retinal ganglion cells to reset circadian timing. Note that the **pineal gland** (not the pons or SCN itself) secretes melatonin!",
        difficulty: "core",
        guideRef: "circadian-rhythms-scn",
        hints: [
          "Break down the name *supra-chiasmatic* ('above the optic chiasm').",
          "Which brain region houses homeostatic and circadian control centres above the pituitary?",
        ],
        strategy: "Decode anatomical names (supra + chiasmatic)",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q05",
        question:
          "How does evening darkness trigger drowsiness along the **SCN–melatonin pathway**?",
        options: [
          "Reduced retinal light causes the SCN to stimulate the pineal gland to secrete melatonin",
          "Bright darkness causes the hippocampus to block melatonin release from the adrenal gland",
          "Darkness shuts down the suprachiasmatic nucleus permanently until an alarm clock rings",
          "Reduced light causes the pineal gland to release adrenaline into the visual cortex",
        ],
        answerIndex: 0,
        explanation:
          "When darkness falls, retinal inhibition drops and the **SCN** signals the **pineal gland** to secrete **melatonin**, lowering alertness and promoting sleep onset. Morning daylight inhibits this melatonin release.",
        difficulty: "core",
        guideRef: "circadian-rhythms-scn",
        hints: [
          "Follow R → S → P → M: Retina → SCN → Pineal gland → Melatonin.",
          "Does darkness *increase* or *inhibit* pineal melatonin?",
        ],
        strategy: "Trace Retina → SCN → Pineal → Melatonin",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q06",
        question:
          "According to **Oswald's (1966, 1980) Restoration Theory**, how do **Slow-Wave Sleep (SWS)** and **REM sleep** divide restorative duties?",
        options: [
          "SWS replenishes brain neurotransmitters while REM secretes Growth Hormone to repair muscles",
          "SWS drives physical bodily repair via Growth Hormone and protein synthesis, while REM restores brain neurotransmitters and plasticity",
          "SWS conserves calories from predators while REM digests late-evening carbohydrates",
          "Both SWS and REM perform identical muscle repair with zero effect on brain chemistry",
        ],
        answerIndex: 1,
        explanation:
          "Oswald distinguished **SWS** for **bodily/physical restoration** (pituitary Growth Hormone surge, protein synthesis, tissue repair) from **REM** for **brain/neural restoration** (replenishing neurotransmitters and supporting infant brain development).",
        difficulty: "core",
        guideRef: "theories-of-sleep",
        hints: [
          "Match Growth Hormone (released in deep NREM Stage 3) to body vs brain.",
          "Why do newborns with rapidly wiring brains spend 50% of sleep in REM?",
        ],
        strategy: "Split Oswald into SWS = Body vs REM = Brain",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q07",
        question:
          "What are the **two** central survival functions proposed by **Meddis's (1975) Evolutionary (Ecological) Theory of Sleep**?",
        options: [
          "Unconscious wish-fulfilment and ego defence against childhood anxiety",
          "Growth hormone secretion and hippocampal episodic consolidation",
          "Metabolic energy conservation and immobility to avoid predators during vulnerable hours",
          "Rapid eye movement calibration and pineal gland detoxification",
        ],
        answerIndex: 2,
        explanation:
          "**Meddis (1975)** argued sleep evolved via natural selection to **conserve metabolic energy** when foraging is inefficient and keep animals **still, silent, and hidden from predators**. Growth hormone belongs to Oswald's Restoration Theory, and wish-fulfilment belongs to Freud.",
        difficulty: "warmup",
        guideRef: "theories-of-sleep",
        hints: ["Think like an evolutionary biologist: calories + predators."],
        strategy: "Pair energy conservation with predator avoidance",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q08",
        question:
          "During which sleep stage does **sleepwalking (somnambulism)** occur, and why?",
        options: [
          "During REM sleep, when vivid dreams switch on voluntary motor cortex circuits",
          "During NREM Stage 1, when alpha waves first transition into light hypnic twitches",
          "During late-morning REM rebound, when melatonin reaches zero",
          "During deep NREM Stage 3 (Slow-Wave Sleep), via incomplete arousal while skeletal muscle tone is still active",
        ],
        answerIndex: 3,
        explanation:
          "**Sleepwalking** is an incomplete arousal from **NREM Stage 3 (SWS)** during the first third of the night, when skeletal muscles are **not** paralysed. During **REM sleep**, brainstem **muscle atonia** prevents walking.",
        difficulty: "core",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "Can you walk during REM when muscle atonia paralyses your legs?",
          "Which deep delta-wave stage dominates the first third of the night?",
        ],
        strategy: "Rule out REM via muscle atonia → pinpoint NREM 3 SWS",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q09",
        question:
          "Which patient description illustrates **sleep-maintenance insomnia** rather than **sleep-onset insomnia**?",
        options: [
          "Falling asleep within ten minutes at 10:30 pm, but waking four times every night for forty minutes each time",
          "Lying wide awake from 11:00 pm until 2:30 am before finally sleeping deeply until morning",
          "Sitting up with glassy eyes during Slow-Wave Sleep and walking into the kitchen with morning amnesia",
          "Falling asleep involuntarily during daytime conversations due to sudden loss of muscle tone",
        ],
        answerIndex: 0,
        explanation:
          "**Sleep-maintenance insomnia** is difficulty **staying asleep** (frequent prolonged awakenings or waking far too early). Taking hours to fall asleep initially is **sleep-onset insomnia**, walking in SWS is **somnambulism**, and sudden daytime sleep attacks with cataplexy describe **narcolepsy**.",
        difficulty: "warmup",
        guideRef: "sleep-disorders-hygiene",
        hints: ["'Onset' = starting sleep; 'Maintenance' = keeping/staying asleep through the night."],
        strategy: "Match 'onset' to start and 'maintenance' to staying asleep",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q10",
        question:
          "In **Freud's (1900) psychoanalytic dream theory**, what is the difference between **manifest content** and **latent content**?",
        options: [
          "Manifest content occurs only in NREM Stage 3, whereas latent content occurs only in Stage 1",
          "Manifest content is the literal storyline recalled on waking, whereas latent content is the hidden unconscious wish disguised beneath it",
          "Manifest content is random firing from the pons, whereas latent content is melatonin release",
          "Manifest content is repressed into the unconscious, whereas latent content is written directly in a dream diary",
        ],
        answerIndex: 1,
        explanation:
          "**Manifest content** (*M = Movie*) is the surface narrative the dreamer remembers, produced after **dreamwork** disguises the **latent content** (*L = Locked unconscious wish*).",
        difficulty: "warmup",
        guideRef: "dream-theories",
        hints: ["Use M = Movie on screen (recalled plot) vs L = Locked beneath (unconscious wish)."],
        strategy: "Use M = Movie vs L = Locked Wish",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q11",
        question:
          "In **Hobson & McCarley's (1977) Activation-Synthesis Theory**, which brain structure generates the random electrical **activation** during REM sleep, and which structure performs the narrative **synthesis**?",
        options: [
          "Activation: Pineal gland · Synthesis: Cerebellum",
          "Activation: Hippocampus · Synthesis: Suprachiasmatic nucleus",
          "Activation: Pons (brainstem) · Synthesis: Forebrain / cerebral cortex",
          "Activation: Prefrontal cortex · Synthesis: Spinal cord motor neurons",
        ],
        answerIndex: 2,
        explanation:
          "During REM, cholinergic neurons in the **pons (brainstem)** fire random **PGO waves** upward (**activation**), and the **forebrain / cerebral cortex** weaves those signals and stored memories into a best-fit story (**synthesis**).",
        difficulty: "core",
        guideRef: "dream-theories",
        hints: [
          "Activation is bottom-up from the brainstem; Synthesis is higher-order story-making at the top of the brain.",
          "Match 'pons' and 'forebrain/cerebral cortex' in the right order.",
        ],
        strategy: "Bottom-up brainstem Activation → cortical Synthesis",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q12",
        question:
          "What was a headline finding of **Iorio, Sommantico & Parrello's (2020)** study of **796 Italian participants** during the COVID-19 lockdown?",
        options: [
          "Men and older adults reported higher dream recall than women, while participants directly affected by COVID-19 recalled almost no dreams at all",
          "Lockdown dreams consisted predominantly of disguised positive wish-fulfilment themes, with virtually no waking pandemic or confinement imagery",
          "Home EEG sleep logs showed that infected participants spent twice as long in Slow-Wave Sleep while REM dreaming disappeared during quarantine",
          "Women and participants directly affected by COVID-19 reported higher dream recall, stronger negative emotions, and themes of contagion and confinement",
        ],
        answerIndex: 3,
        explanation:
          "**Iorio et al. (2020)** used an online survey + *Most Recent Dream* narratives during Italy's lockdown and found elevated recall, negative emotions (fear, helplessness, sadness), and manifest themes of **dangerous enclosed spaces, contagion, and mourning** — supporting waking emotional continuity.",
        difficulty: "core",
        guideRef: "dream-theories",
        hints: [
          "Recall how stressful lockdown anxiety carried over into Italian participants' *Most Recent Dream* reports.",
          "Did their dreams hide stress behind joyful wishes, or reflect contagion and being trapped?",
        ],
        strategy: "Connect Iorio et al. (2020) to waking trauma continuity",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q13",
        question:
          "On a standard 8-hour adult hypnogram, how does the balance of **NREM Stage 3 (SWS)** versus **REM sleep** change from the **first half** of the night to the **final two hours** before morning?",
        options: [
          "Early cycles contain long SWS and brief REM, whereas late-night cycles contain minimal SWS and much longer REM bouts",
          "Early cycles contain 100% REM sleep, whereas late-night cycles contain 100% delta SWS",
          "Every 90-minute cycle across the entire night has the exact same 22.5 minutes of SWS and 22.5 minutes of REM",
          "NREM Stage 2 disappears completely after midnight, leaving only alpha waves",
        ],
        answerIndex: 0,
        explanation:
          "Physiological **SWS** is prioritised in **Cycles 1–2** (first half of the night), whereas **REM episodes** lengthen progressively from ~10 minutes in Cycle 1 to 30–60 minutes in **Cycles 4–5** just before waking.",
        difficulty: "core",
        guideRef: "sleep-stages-eeg",
        hints: [
          "Why are people much more likely to wake straight out of a long vivid dream at 6:30 am than at 12:30 am?",
          "Which stage comes first for urgent physical repair (SWS), and which expands towards morning (REM)?",
        ],
        strategy: "Read hypnogram left-to-right: SWS early → REM late",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q14",
        question:
          "Which EEG feature specifically distinguishes **NREM Stage 2** from **NREM Stage 1** on a polysomnogram?",
        options: [
          "Continuous 25 Hz alert beta rhythms",
          "Brief 12–14 Hz bursts called sleep spindles alongside sharp K-complexes",
          "Uninterrupted high-amplitude 1 Hz delta waves occupying over half the trace",
          "Complete skeletal muscle paralysis with rapid conjugate eye darts",
        ],
        answerIndex: 1,
        explanation:
          "**Sleep spindles** (short 12–14 Hz bursts that gate external noise and aid memory consolidation) and **K-complexes** are the diagnostic hallmarks of **NREM Stage 2** (~45–50% of total sleep).",
        difficulty: "core",
        guideRef: "sleep-stages-eeg",
        hints: [
          "Stage 1 has plain theta waves; Stage 3 has big delta waves.",
          "What short 12–14 Hz bursts appear specifically in Stage 2?",
        ],
        strategy: "Match sleep spindles & K-complexes to NREM Stage 2",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m1-q15",
        question:
          "In circadian biology, what is an **exogenous zeitgeber**?",
        options: [
          "A cluster of hypothalamic neurons that keeps ticking inside a dark cave",
          "A pineal hormone released only during Slow-Wave Sleep",
          "An external environmental cue such as daylight or meal times that entrains internal rhythms to 24 hours",
          "An unconscious ego defence mechanism that disguises taboo dream wishes",
        ],
        answerIndex: 2,
        explanation:
          "*Exogenous* means originating **outside** the organism, and *zeitgeber* is German for **'time-giver'** — external cues (chiefly **daylight**, plus social schedules) that reset our ~24.5h internal SCN pacemaker to an exact 24.0-hour day.",
        difficulty: "warmup",
        guideRef: "circadian-rhythms-scn",
        hints: ["Exo = outside; Zeitgeber = 'time-giver' (like morning sunlight)."],
        strategy: "Translate exogenous (external) + zeitgeber (time-giver)",
      },
    ],
  },
  {
    id: "sleep-and-dreams-m2",
    title: "MCQ Paper 2: Applied Scenarios, Disorders & Sleep Hygiene",
    questions: [
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q01",
        question:
          "Nadia scrolls social media on a bright tablet held 20 cm from her face from 10:30 pm to midnight, then wonders why she feels wide awake at 12:30 am. Which biological chain accurately explains her delayed sleep onset?",
        options: [
          "Blue light stimulates her cerebellum to release adrenaline into the spinal cord",
          "Tablet audio triggers NREM Stage 3 delta waves too early in the evening",
          "Scrolling activates REM muscle atonia before she closes her eyes",
          "Short-wavelength blue light hits her retina, causing the SCN to inhibit pineal melatonin secretion",
        ],
        answerIndex: 3,
        explanation:
          "Blue-enriched screen light mimics daylight to photosensitive retinal cells, signalling the **hypothalamic SCN** to **suppress melatonin release from the pineal gland**, delaying physiological sleepiness (**sleep-onset insomnia**).",
        difficulty: "core",
        guideRef: "circadian-rhythms-scn",
        hints: [
          "What does blue screen light trick the SCN into thinking time of day it is?",
          "When the SCN detects bright light, does pineal melatonin go up or get inhibited?",
        ],
        strategy: "Apply Retina → SCN → Pineal inhibition to screen use",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q02",
        question:
          "Singapore Airlines passengers flying **eastward** from London to Singapore (shortening their day by 8 hours — a **phase advance**) typically suffer worse jet lag than when flying **westward** from Singapore to London (**phase delay**). Why?",
        options: [
          "The human endogenous SCN clock naturally free-runs slightly longer than 24 hours (~24.5h), making it easier to lengthen a day westward than compress it eastward",
          "The endogenous SCN pacemaker naturally free-runs shorter than 24 hours (~22h), making it harder to stay awake longer westward than to advance sleep eastward",
          "Pineal melatonin secretion is triggered exclusively by bright morning sunlight, so crossing eastward time zones floods the cortex with excess sleep hormones",
          "Eastward jet travel suppresses NREM Stage 3 delta waves altogether while lengthening ultradian REM cycles from 90 minutes to 12 hours after arrival",
        ],
        answerIndex: 0,
        explanation:
          "As **Siffre's** cave studies showed, our endogenous clock naturally drifts to **~24.5–25 hours** (a slight natural delay). Extending your day westward aligns with that drift, whereas forcing your SCN to sleep 8 hours *earlier* eastward fights peak circadian alertness!",
        difficulty: "challenge",
        guideRef: "circadian-rhythms-scn",
        hints: [
          "Recall Michel Siffre's free-running cave cycle: was it shorter than 24 hours (~22h) or slightly longer (~24.5–25h)?",
          "Is it easier for a ~24.5-hour internal clock to stay up later (westward) or force sleep much earlier (eastward)?",
        ],
        strategy: "Link Siffre's >24h endogenous period to eastward vs westward jet lag",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q03",
        question:
          "After completing a gruelling 90 km ultramarathon (**Shapiro et al., 1981**), athletes slept significantly longer over the next two nights with a marked surge in **NREM Stage 3 (Slow-Wave Sleep)**. Which theory does this finding most directly support?",
        options: [
          "Meddis's predator-avoidance hypothesis",
          "Oswald's Restoration Theory (physical tissue repair via SWS Growth Hormone)",
          "Freud's psychodynamic dreamwork condensation theory",
          "Hobson & McCarley's random brainstem activation theory",
        ],
        answerIndex: 1,
        explanation:
          "Extreme physical muscle micro-damage followed specifically by increased **SWS** directly supports **Oswald's Restoration Theory**, which links NREM Stage 3 Growth Hormone release and protein synthesis to bodily tissue repair.",
        difficulty: "core",
        guideRef: "theories-of-sleep",
        hints: [
          "What suffered extreme wear-and-tear in a 90 km race — physical muscles or predator hiding?",
          "Which sleep theorist linked Slow-Wave Sleep specifically to physical tissue repair?",
        ],
        strategy: "Connect physical exertion + SWS surge to Oswald",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q04",
        question:
          "Why does **unihemispheric Slow-Wave Sleep** in bottlenose and Indus River dolphins (putting **one brain hemisphere to sleep at a time** while swimming continuously to breathe) pose a powerful challenge to **Meddis's Evolutionary Theory**?",
        options: [
          "It demonstrates that aquatic mammals lack an endogenous suprachiasmatic nucleus and pineal gland, relying entirely on water temperature as a zeitgeber",
          "It proves that dolphins spend almost all their sleep time in paralysed REM dreaming to process sonar memories, whereas Meddis argued only land mammals dream",
          "If sleep merely evolved to enforce safe stillness, dolphins should have lost sleep when immobility risks drowning — showing sleep meets an essential brain-restoration need",
          "It contradicts Meddis's predator-avoidance data by showing that large ocean predators sleep significantly fewer hours per day than exposed savannah herbivores",
        ],
        answerIndex: 2,
        explanation:
          "For a dolphin that *must* keep moving to surface and breathe, unconsciousness is dangerous rather than protective! Evolving complex **alternating half-brain SWS** rather than dropping sleep proves SWS fulfils a vital **biological brain-restoration** requirement (**Oswald**).",
        difficulty: "challenge",
        guideRef: "theories-of-sleep",
        hints: [
          "Ask: does staying motionless help a dolphin survive, or would motionlessness drown it?",
          "If evolution kept SWS anyway by alternating hemispheres, what must SWS be doing for brain cells?",
        ],
        strategy: "Use dolphin unihemispheric sleep as a decisive counter-argument",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q05",
        question:
          "Nine-year-old Toby pulled a late night at a cousin's party on Friday (sleeping only 5 hours). On Saturday night, 90 minutes after falling fast asleep, his parents find him walking calmly down the hallway with open, unfocused eyes; on Sunday morning Toby remembers **nothing** of the walk. What triggered Saturday's episode?",
        options: [
          "REM rebound removed Toby's brainstem muscle atonia so he acted out a party nightmare",
          "Secondary sleep-maintenance insomnia caused Toby to fake walking for attention",
          "Circadian phase advance shifted Toby's pineal melatonin peak to Sunday noon",
          "Prior sleep deprivation triggered deeper Slow-Wave Sleep rebound on Saturday, provoking incomplete arousal from NREM Stage 3",
        ],
        answerIndex: 3,
        explanation:
          "**Sleep deprivation** on Friday caused intense **SWS rebound** early on Saturday night (first 90 min = NREM Stage 3), a classic environmental trigger for **somnambulism** in genetically predisposed children, complete with morning **amnesia**.",
        difficulty: "challenge",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "Check the timing: 90 minutes into sleep (first third of the night) + complete morning amnesia = NREM Stage 3 sleepwalking.",
          "What did Friday's 5-hour short sleep do to Toby's depth of Slow-Wave Sleep on Saturday night?",
        ],
        strategy: "Link prior sleep loss → SWS rebound → sleepwalking trigger",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q06",
        question:
          "A sleep clinician advises Zara (who revises, watches movies, and worries in bed for hours every night) to **use her bed strictly for sleeping**, do all revision at a desk, and leave the bedroom for quiet dim-light reading whenever she is still awake after 20 minutes. What psychological principle underpins this **stimulus control** sleep-hygiene rule?",
        options: [
          "Breaking the learned classical conditioning association between the bed and anxious wakefulness so the bed cues rapid sleepiness again",
          "Suppressing late-night REM sleep cycles so Zara transitions directly from relaxed alpha wakefulness into uninterrupted NREM Stage 1 sleep",
          "Exposing the retina to bright room lighting every 20 minutes to reset the suprachiasmatic nucleus and speed up nocturnal melatonin release",
          "Using cognitive displacement and proactive interference at a desk so exam anxieties are permanently repressed before sleep onset begins",
        ],
        answerIndex: 0,
        explanation:
          "Doing stressful homework and tossing/turning in bed pairs the **bed** (*stimulus*) with **cognitive arousal/frustration**. **Stimulus control** (Bootzin) extinguishes that unhelpful conditioned arousal and re-establishes `bed → sleepiness`.",
        difficulty: "core",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "Think about classical conditioning: what had Zara's brain learned to associate her mattress with?",
          "Why does moving homework to a desk restore 'bed = sleep'?",
        ],
        strategy: "Connect stimulus control hygiene to classical conditioning",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q07",
        question:
          "Why does sleep-hygiene advice warn against drinking **alcohol** as a 'nightcap' right before bed, even though alcohol initially makes people feel drowsy?",
        options: [
          "Alcohol permanently destroys the suprachiasmatic nucleus after a single drink",
          "As alcohol is metabolised a few hours later, it fragments REM sleep and triggers sleep-maintenance awakenings",
          "Alcohol locks the brain into eight uninterrupted hours of NREM Stage 3 delta waves",
          "Alcohol doubles pineal melatonin secretion at midday the following afternoon",
        ],
        answerIndex: 1,
        explanation:
          "Although alcohol is a sedative that shortens sleep onset, its metabolic rebound in the second half of the night **suppresses/fragments REM sleep** and causes frequent **sleep-maintenance awakenings** and unrefreshing sleep.",
        difficulty: "core",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "Alcohol helps people fall asleep fast at 11 pm, so why do they wake up tossing and sweating at 3:30 am?",
          "Distinguish initial sedation from second-half REM fragmentation / maintenance insomnia.",
        ],
        strategy: "Distinguish sleep onset from second-half sleep quality",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q08",
        question:
          "Tariq is secretly furious at his strict boss, Mr Lim, but cannot express anger at work. That night Tariq dreams of shouting angrily at a **parking ticket machine** wearing Mr Lim's distinctive round spectacles! In **Freud's dreamwork**, shifting anger onto the ticket machine illustrates **displacement**, while merging Mr Lim's spectacles onto the machine illustrates:",
        options: [
          "Muscle atonia",
          "Circadian entrainment",
          "Condensation (and symbolism)",
          "Ponto-geniculo-occipital synthesis",
        ],
        answerIndex: 2,
        explanation:
          "**Dreamwork** disguises Tariq's latent anger at his boss: **displacement** redirects hostility onto a safe neutral object (ticket machine), while **condensation** fuses multiple elements (boss's glasses + machine) into one composite manifest image.",
        difficulty: "core",
        guideRef: "dream-theories",
        hints: [
          "Identify which theorist uses *dreamwork* to disguise taboo anger.",
          "What Freudian dreamwork term means fusing/compressing two ideas into one dream object?",
        ],
        strategy: "Differentiate displacement (redirect emotion) from condensation (fuse images)",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q09",
        question:
          "Many people report the common dream of **trying to sprint away from danger while their legs feel heavy like concrete or paralysed**. How does **Hobson & McCarley's Activation-Synthesis Theory** neatly explain this exact sensation?",
        options: [
          "Dreamwork disguises a repressed unconscious desire to stay passive and dependent as a manifest running nightmare, protecting the dreamer from waking in anxiety",
          "High pineal melatonin levels temporarily suppress the occipital visual cortex during REM, preventing the dreamer from seeing their legs moving normally in bed",
          "High-amplitude delta waves in NREM Stage 3 slow cerebellar balance signals so drastically that the sleeping cortex perceives normal body weight as paralysed",
          "Brainstem activation triggers motor-cortex running signals during REM, while muscle atonia blocks real leg movement — and the forebrain synthesises that mismatch as 'frozen legs'",
        ],
        answerIndex: 3,
        explanation:
          "During REM, the **motor cortex fires 'run!' commands**, yet spinal **muscle atonia** prevents sensory feedback from moving muscles returning to the brain; the **forebrain synthesises** *command-to-run + zero-leg-feedback* into a storyline of wading through treacle!",
        difficulty: "challenge",
        guideRef: "dream-theories",
        hints: [
          "During REM, your brain commands movement, but what is happening to your real leg muscles?",
          "How does the forebrain interpret 'I commanded my legs to run, yet zero movement feedback came back'?",
        ],
        strategy: "Connect REM physiology (motor firing + atonia) to cortical synthesis",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q10",
        question:
          "Mr Patel suffers painful rheumatoid arthritis flares that wake him repeatedly through the night, leaving him exhausted at work. How would a clinician classify Mr Patel's insomnia?",
        options: [
          "Secondary (comorbid) sleep-maintenance insomnia caused by an underlying medical pain condition",
          "Primary sleep-onset insomnia with zero physical or medical cause",
          "NREM Stage 3 somnambulism triggered by excessive Growth Hormone",
          "REM behaviour disorder caused by loss of endogenous zeitgebers",
        ],
        answerIndex: 0,
        explanation:
          "Because Mr Patel's insomnia is directly caused by another medical illness (arthritis pain = **secondary / comorbid**) and involves repeated night awakenings (**sleep-maintenance**), both labels apply accurately.",
        difficulty: "core",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "Check two dimensions: (1) falling asleep vs staying asleep, and (2) standalone (primary) vs caused by arthritis pain (secondary).",
          "Put both together!",
        ],
        strategy: "Classify insomnia on both timing (onset/maintenance) and cause (primary/secondary)",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q11",
        question:
          "In **Allison & Cicchetti's (1976)** comparative mammal dataset, open-grassland grazing **horses and giraffes** sleep roughly **2–3 hours** per 24 hours, whereas cave-roosting **little brown bats** and apex-predator **lions** sleep **15–20 hours**. How does **Meddis's Evolutionary Theory** explain this huge contrast?",
        options: [
          "Giraffes have much smaller brains than bats, so they need zero REM neurotransmitter restoration",
          "Large open-plain herbivores cannot hide safely in burrows, so natural selection favoured brief sleep to minimise predation risk",
          "Lions eat grass with low calories, forcing them into twenty hours of coma",
          "Horses lack a hypothalamus, so sunlight never resets their circadian rhythm",
        ],
        answerIndex: 1,
        explanation:
          "Exposed grazing **prey** face severe **predation danger** whenever unconscious in open habitats, constraining them to brief sleep bouts, whereas safe cave-roosting bats and apex predators face minimal predation risk and conserve energy via long sleep.",
        difficulty: "core",
        guideRef: "theories-of-sleep",
        hints: [
          "Compare how safe a cave bat or lion is while asleep versus a giraffe lying down on an open lion-filled savannah!",
          "Link sleeping site safety to natural selection.",
        ],
        strategy: "Connect ecological sleeping safety to species sleep duration",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q12",
        question:
          "A student drinks a large energy drink containing **160 mg of caffeine** at **6:00 pm**. Given caffeine's biological half-life in healthy teens/adults is roughly **5 hours**, approximately how much caffeine is **still circulating** in her bloodstream at **11:00 pm** when she tries to sleep?",
        options: [
          "0 mg",
          "16 mg",
          "80 mg",
          "320 mg",
        ],
        answerIndex: 2,
        explanation:
          "From 6:00 pm to 11:00 pm is **5 hours** — one half-life — so half of the 160 mg (`160 ÷ 2 = 80 mg`, equivalent to a strong espresso!) is still blocking drowsiness **adenosine** receptors at bedtime, explaining why sleep hygiene advises cutting caffeine 6–8+ hours before bed.",
        difficulty: "core",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "Count the hours from 6:00 pm to 11:00 pm (`5 hours` = `1 half-life`).",
          "After 1 half-life, half of `160 mg` remains!",
        ],
        strategy: "Apply half-life math to sleep-hygiene caffeine timing",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q13",
        question:
          "During exam week, Mei sleeps only **4.5 hours** (`12:30 am – 5:00 am`) instead of her normal **7.5 hours** (`11:00 pm – 6:30 am`). Based on how ultradian cycles change across an 8-hour hypnogram, which sleep stage does Mei lose the **largest proportion** of by waking 2.5 hours early?",
        options: [
          "NREM Stage 1 hypnic transition",
          "NREM Stage 3 Slow-Wave Sleep (which occurs only at 6:00 am)",
          "Relaxed alpha wakefulness",
          "REM sleep (whose longest episodes cluster in the final morning cycles)",
        ],
        answerIndex: 3,
        explanation:
          "Deep **SWS** occurs predominantly in the first 3–4 hours of sleep, whereas **REM bouts** grow longest during Hours 5–8 right before natural morning waking. Cutting the final 2.5–3 hours off sleep strips away **over half of nightly REM sleep**, impairing emotional regulation and memory consolidation!",
        difficulty: "challenge",
        guideRef: "sleep-stages-eeg",
        hints: [
          "Look at the right-hand side (Hours 5–8) of a night hypnogram.",
          "Which sleep stage has its longest 30–60 minute bouts right before morning?",
        ],
        strategy: "Use hypnogram asymmetry to predict partial sleep-loss effects",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q14",
        question:
          "During the 2020 lockdown (**Iorio et al., 2020**), an Italian medical student whose aunt was hospitalised with COVID-19 repeatedly dreamed of being locked inside a crowded ward unable to breathe. Which dream explanation fits this undisguised, emotionally realistic dream **best**?",
        options: [
          "Waking-trauma continuity / emotional processing of real-life pandemic distress",
          "Purely random brainstem noise with zero link to daytime experiences",
          "Disguised wish-fulfilment expressing a secret desire to catch a virus",
          "Somnambulism occurring in NREM Stage 3 delta waves",
        ],
        answerIndex: 0,
        explanation:
          "**Iorio et al. (2020)** showed lockdown dreams directly echoed participants' real-world anxieties (**contagion, suffocation, trapped spaces**), supporting the **continuity hypothesis** between waking emotional trauma and dream content — challenging both pure random noise and Freudian wish-fulfilment.",
        difficulty: "core",
        guideRef: "dream-theories",
        hints: [
          "Notice there is no disguise here — her dream directly mirrors her waking fear for her hospitalised aunt.",
          "Which concept from Iorio et al. (2020) links daytime trauma directly to manifest dream themes?",
        ],
        strategy: "Match direct waking-fear dreams to Iorio et al.'s continuity findings",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m2-q15",
        question:
          "Why does keeping a bedroom cool (~`18 °C`) rather than hot (`28 °C`) serve as an effective **sleep-hygiene** practice?",
        options: [
          "Cool bedroom air lowers skeletal muscle tone rapidly, bypassing light NREM Stages 1 and 2 to trigger REM atonia immediately at sleep onset",
          "Falling core body temperature naturally accompanies circadian melatonin rise at sleep onset, whereas overheating triggers wakeful arousal",
          "Warm room temperatures above 22 °C inhibit the pineal gland from releasing Growth Hormone, preventing physical tissue repair during Stage 3",
          "Lower ambient temperatures slow the endogenous SCN pacemaker, stretching each 90-minute ultradian sleep cycle into a longer six-hour cycle",
        ],
        answerIndex: 1,
        explanation:
          "Along our **24-hour circadian curve**, core body temperature naturally drops by ~`0.5–1 °C` in the evening to initiate and sustain NREM/SWS sleep; a cool bedroom (~`18 °C`) facilitates heat loss from hands/feet, whereas excessive heat fragments sleep.",
        difficulty: "core",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "What happens to normal human core body temperature in the late evening as melatonin rises?",
          "Does a cool room help or block that natural evening temperature drop?",
        ],
        strategy: "Link thermal bedroom hygiene to the circadian temperature drop",
      },
    ],
  },
  {
    id: "sleep-and-dreams-m3",
    title: "MCQ Paper 3: Research Methods, Data & Critical Evaluation",
    questions: [
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q01",
        question:
          "In **Dement & Kleitman (1957)**, 9 adult participants slept in a laboratory wired to EEG and EOG electrodes and were woken by a doorbell next to the bed during REM or NREM to speak into a recorder. What is a primary **strength** and primary **limitation** of this method?",
        options: [
          "Strength: Naturalistic home setting · Limitation: Subjective dream interpretation by Freud",
          "Strength: Huge cross-cultural sample of 800 adults · Limitation: No quantitative data collected",
          "Strength: Objective EEG/EOG physiological measurement · Limitation: Low ecological validity ('first-night effect' of sleeping wired up in a lab)",
          "Strength: Double-blind drug placebo · Limitation: Deliberate surgical brain damage",
        ],
        answerIndex: 2,
        explanation:
          "Polysomnography provides **objective, replicable quantitative measures** of REM vs NREM stages, avoiding guesswork (**high internal validity**). However, sleeping with scalp/face wires in an unfamiliar laboratory with a tiny sample (`N = 9`) lowers **ecological validity** and generalisability.",
        difficulty: "core",
        guideRef: "sleep-stages-eeg",
        hints: [
          "Strength: Why are EEG/EOG electrodes more scientific than just watching someone sleep?",
          "Limitation: How natural does it feel to sleep in a university lab taped up with wires?",
        ],
        strategy: "Weigh physiological objectivity against sleep-lab artificiality",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q02",
        question:
          "In **Dement & Kleitman (1957)**, `152` out of `191` **REM awakenings** produced vivid dream recall, compared with only `11` out of `160` **NREM awakenings**. Approximately what **percentage** of **REM awakenings** resulted in dream recall (to the nearest whole percent)?",
        options: [
          "7%",
          "39%",
          "95%",
          "80%",
        ],
        answerIndex: 3,
        explanation:
          "`(152 ÷ 191) × 100 = 79.58% ≈ 80%` (whereas NREM recall was `(11 ÷ 160) × 100 ≈ 6.9% ≈ 7%`).",
        difficulty: "core",
        guideRef: "sleep-stages-eeg",
        hints: [
          "Notice `152` is very close to `4/5` of `190` (`152 ÷ 190 = 0.80`).",
          "Multiply `0.796` by `100` and round to the nearest whole percent.",
        ],
        strategy: "Estimate fraction benchmarks (152/191 ≈ 4/5 = 80%)",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q03",
        question:
          "**Michel Siffre (1962)** spent two months alone in an icy underground cave with no clocks or daylight, phoning a surface team whenever he woke, ate, or went to sleep. Why must psychologists be cautious when **generalising** Siffre's ~24.5-hour rhythm to all humans?",
        options: [
          "It was an `n = 1` case study in freezing isolation where his battery-powered lamp could inadvertently act as an artificial light zeitgeber",
          "He slept surrounded by 100 other noisy cave explorers who woke him every morning at 7:00 am",
          "His suprachiasmatic nucleus had been surgically removed prior to entering the cave",
          "Cave studies last only ninety minutes and never measure more than one ultradian cycle",
        ],
        answerIndex: 0,
        explanation:
          "Siffre was a **single self-selected adventurer (`n = 1`)** enduring extreme cold and solitude, AND switching on his **artificial cave lamp** whenever awake (later shown by **Czeisler et al., 1999** to slightly phase-delay the SCN, making free-running cycles look ~24.5–25h rather than closer to ~24.18h!).",
        difficulty: "challenge",
        guideRef: "circadian-rhythms-scn",
        hints: [
          "Consider two methodological issues: `n = 1` sample size AND what Siffre turned on so he could read inside the dark cave!",
          "Could a bright cave lamp act as a confounding exogenous zeitgeber?",
        ],
        strategy: "Spot artificial light as a confounding variable in cave studies",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q04",
        question:
          "**Ralph et al. (1990)** transplanted SCN tissue from mutant **20-hour** hamsters into normal **24-hour** hamsters whose own SCN had been lesioned, shifting the recipients to a **20-hour** sleep-wake cycle. Mention **one key limitation** of using this study to explain human circadian rhythms.",
        options: [
          "It relied on subjective owner self-reports of hamster sleep schedules rather than objective behavioural monitoring, introducing social desirability bias",
          "Invasive animal brain surgery raises ethical harm concerns and rodent circadian responsiveness may not generalise fully to humans influenced by complex social cues",
          "It was a purely correlational field observation with no manipulated Independent Variable and no standardised control over light-dark exposure",
          "Because hamsters lack both a hypothalamus and retinal light pathways, their biological clocks operate through entirely different brain structures from humans",
        ],
        answerIndex: 1,
        explanation:
          "Animal lesion/transplant experiments involve **irreversible surgical harm** (ethical cost) and **extrapolation/generalisability limits** because human sleep-wake behaviour is also shaped by conscious social obligations, work shifts, and cognitive choices.",
        difficulty: "core",
        guideRef: "circadian-rhythms-scn",
        hints: [
          "Think about the two standard CIE 0266 evaluation points for animal brain-lesion research.",
          "Ethics (surgical harm) + generalisability from rodents to complex human behaviour.",
        ],
        strategy: "Evaluate animal studies on ethics + human generalisability",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q05",
        question:
          "In **Rechtschaffen et al.'s (1983)** 'disk-over-water' experiment, rats forced awake whenever they drifted into sleep lost weight and died within weeks. Beyond ethical harm, what **confounding variable** weakens using this study as pure proof of **Oswald's Restoration Theory**?",
        options: [
          "Experimental rats received high daily melatonin doses that suppressed Growth Hormone release, preventing tissue repair independently of waking duration",
          "Yoked control rats were housed in total darkness without light zeitgebers, so their deaths reflected circadian disruption rather than sleep deprivation",
          "Being repeatedly knocked into cold water induced extreme physiological stress, so stress rather than lack of sleep repair alone may have caused death",
          "Laboratory rats naturally lack Slow-Wave Sleep and REM muscle atonia, meaning the rotating disk procedure could never deprive them of restorative stages",
        ],
        answerIndex: 2,
        explanation:
          "Repeatedly tipping exhausted animals towards water triggers massive **HPA-axis stress responses** (cortisol/adrenaline). Because **severe stress** itself suppresses immunity and causes ulcers/death, **stress confounded sleep loss**, lowering **internal validity**.",
        difficulty: "challenge",
        guideRef: "theories-of-sleep",
        hints: [
          "Ask: did ONLY sleep change, or did being pushed towards water whenever sleepy also cause massive physical stress?",
          "When an unwanted variable (stress) varies alongside the IV (sleep deprivation), what does that do to internal validity?",
        ],
        strategy: "Identify stress as a confounding variable in deprivation studies",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q06",
        question:
          "Neuropsychologist **Mark Solms (2000)** studied stroke and tumour patients and discovered two striking facts: (1) patients with **brainstem pons damage** often *continued dreaming*, whereas (2) patients with **ventromedial prefrontal/parietal forebrain damage** completely *lost dreaming* even though their **REM sleep stayed intact**! Which theory does this directly challenge?",
        options: [
          "Oswald's claim that Slow-Wave Sleep Growth Hormone drives physical muscle and tissue repair",
          "Siffre's claim that the endogenous SCN pacemaker free-runs slightly longer than 24 hours",
          "Meddis's claim that sleep evolved to conserve energy and keep vulnerable prey immobile",
          "Hobson & McCarley's claim that REM pons activation is the essential generator of all dreams",
        ],
        answerIndex: 3,
        explanation:
          "Hobson & McCarley (1977) equated dreaming with **REM brainstem pons activation**. Solms's double dissociation proves **REM sleep ≠ dreaming**: higher **forebrain motivational/dopamine circuits** generate dreams even outside REM, showing pure Activation-Synthesis was overly **biologically reductionist**.",
        difficulty: "challenge",
        guideRef: "dream-theories",
        hints: [
          "Hobson & McCarley claimed the *pons* drives dreaming during *REM*.",
          "What happens to that claim if you can lose the pons and still dream, OR keep REM and lose dreaming after forebrain damage?",
        ],
        strategy: "Use Solms (2000) to critique Activation-Synthesis reductionism",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q07",
        question:
          "Why do research psychologists classify **Freud's (1900) dream theory** as **unfalsifiable**?",
        options: [
          "No empirical observation can ever disprove it — whether a dream matches a wish or shows the exact opposite, an analyst can claim dreamwork disguised or inverted the latent wish",
          "Freud relied exclusively on quantitative EEG sleep-lab recordings from large samples, which produced statistical correlations that could never establish clinical case validity",
          "Because REM dreams occur solely in NREM Stage 3 delta sleep, participants experience total morning amnesia and cannot report any manifest dream plot to test empirically",
          "Freud deliberately refused to formulate hypotheses about latent content or childhood wishes in his published works, focusing purely on brainstem activation during sleep",
        ],
        answerIndex: 0,
        explanation:
          "Karl Popper argued scientific theories must make risky predictions that *could* be proved wrong (**falsifiability**). Because Freud's **dreamwork** allows any symbol to mean itself, its opposite, or 'ego resistance', **no possible dream outcome refutes the theory**.",
        difficulty: "core",
        guideRef: "dream-theories",
        hints: [
          "What happens if a patient says 'My dream wasn't a wish at all — it was a terrifying exam failure!' and Freud replies 'Aha, a disguised self-punishment wish!'?",
          "Can any evidence ever prove such a flexible claim wrong?",
        ],
        strategy: "Explain unfalsifiability via circular post-hoc interpretation",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q08",
        question:
          "In **Iorio, Sommantico & Parrello (2020)**, roughly **73%** of the `796` Italian lockdown respondents were **female** (recruited online via university and social networks). Approximately how many **female participants** took part (to the nearest whole person), and what **sampling limitation** does this create?",
        options: [
          "About 215 females · High inter-observer reliability bias",
          "About 581 females · Volunteer/gender sampling bias limiting generalisability to men and non-Italian cultures",
          "About 796 females · Counterbalancing order effects across sleep labs",
          "About 73 females · Demand characteristics from scalp EEG electrodes",
        ],
        answerIndex: 1,
        explanation:
          "`0.73 × 796 = 581.08 ≈ 581` females. Because women self-selected into an online survey in one country (Italy) and women typically report higher baseline dream recall than men, **volunteer, gender, and ethnocentric bias** limit population validity.",
        difficulty: "core",
        guideRef: "dream-theories",
        hints: [
          "Calculate `0.73 × 796` (`~0.73 × 800 ≈ 584`).",
          "Why does a 73% female online volunteer sample in Italy limit generalising to all adults worldwide?",
        ],
        strategy: "Combine percentage calculation with sampling-bias critique",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q09",
        question:
          "Why was **Iorio et al.'s (2020)** combination of **standardised rating scales** (emotion intensity 1–5) AND **open-ended written 'Most Recent Dream' narratives** a strong methodological choice?",
        options: [
          "Combining scales with written reports eliminated retrospective forgetting and social desirability bias, guaranteeing 100% accurate dream recall",
          "It enabled researchers to randomly allocate Italian adults into lockdown versus non-lockdown laboratory conditions, establishing strict causation",
          "Quantitative scales enabled objective statistical comparisons across groups, while qualitative narratives captured rich symbolic lockdown themes",
          "Using mixed self-report formats provided objective EEG verification of whether each reported lockdown dream occurred during REM or NREM Stage 3",
        ],
        answerIndex: 2,
        explanation:
          "Collecting **both quantitative and qualitative data** gives the best of both worlds: numerical scales test statistical significance reliably (e.g. higher negative emotion in COVID-exposed participants), while open dream texts preserve subjective phenomenological richness.",
        difficulty: "core",
        guideRef: "dream-theories",
        hints: [
          "What is the advantage of numerical rating scales (quantitative)?",
          "What extra insight do full written dream stories (qualitative) add?",
        ],
        strategy: "Highlight mixed-methods (quantitative + qualitative) complementarity",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q10",
        question:
          "Twin studies of **sleepwalking (somnambulism)** (e.g. Hublin et al.; Lecendreux et al.) find concordance rates of roughly **~50–55% in monozygotic (MZ, identical) twins** versus **~10–15% in dizygotic (DZ, non-identical) twins**. What conclusion do both numbers together support?",
        options: [
          "Sleepwalking is purely environmentally learned through sibling imitation at home, because DZ twins show almost the exact same concordance as MZ twins",
          "Sleepwalking is 100% genetically determined with no influence from stress or sleep loss, because MZ concordance is more than three times higher than DZ concordance",
          "Sleepwalking has only a weak environmental basis because DZ twins share 100% of their genes while MZ twins share 50%, inverting the usual heritability pattern",
          "Sleepwalking has a strong genetic predisposition (MZ > DZ), but environmental triggers like sleep deprivation or stress also play a role since MZ concordance is well below 100%",
        ],
        answerIndex: 3,
        explanation:
          "Higher concordance in **MZ twins** (100% shared DNA) than **DZ twins** (~50% shared DNA) proves a **heritable genetic component**, while MZ concordance being ~55% rather than **100%** proves **environmental triggers** (diathesis-stress: sleep loss, fever, anxiety) are also involved!",
        difficulty: "challenge",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "First compare MZ (~55%) vs DZ (~12%): why does MZ > DZ prove genetics?",
          "Second check MZ (~55%) vs 100%: if identical twins have identical DNA, why isn't concordance 100%?",
        ],
        strategy: "Read twin data two ways: MZ>DZ = genes; MZ<100% = environment",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q11",
        question:
          "A psychologist tests a new **blue-light-blocking glasses** intervention on 40 Year 11 students with **sleep-onset insomnia**. Group 1 wears genuine amber blue-blocking lenses for 90 minutes before bed; Group 2 wears identical-looking clear lenses that do **not** block blue light. Neither the students nor the sleep technician scoring the actigraph watches knows who wore which lenses. Name the control design used.",
        options: [
          "Double-blind placebo-controlled independent measures design",
          "Covert naturalistic correlation with opportunity sampling",
          "Repeated measures design without standardisation",
          "Psychodynamic case-study triangulation",
        ],
        answerIndex: 0,
        explanation:
          "Separate students in each lens group = **independent measures**; clear dummy lenses = **placebo control** against **demand characteristics**; hiding group allocation from both participants and technicians = **double-blind** control against **investigator effects**!",
        difficulty: "core",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "Why were clear look-alike lenses given to Group 2 (placebo)?",
          "When BOTH participants and researchers are unaware of group assignment, is that single-blind or double-blind?",
        ],
        strategy: "Link placebo to demand characteristics and double-blind to investigator bias",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q12",
        question:
          "A school survey finds a **strong negative correlation (`r = −0.68`)** between **hours of late-night phone use after 10:00 pm** and **total hours slept on school nights**. Which interpretation is scientifically **valid**?",
        options: [
          "Late-night phone use is proven experimentally to be the direct cause of shorter sleep in teenagers, because an r value of −0.68 confirms a causal link",
          "As late-night phone hours increase, total hours slept tend to decrease — yet a third variable (like stress or insomnia) could contribute, since correlation cannot prove causation",
          "As late-night phone use increases, total school-night sleep tends to increase as well, though a third variable like homework load could confound this positive trend",
          "Because the correlation coefficient is negative rather than positive, there is no meaningful association between late-night phone use and sleep duration",
        ],
        answerIndex: 1,
        explanation:
          "A **negative correlation** (`−0.68`) means as Variable 1 rises, Variable 2 falls. Crucially, correlational surveys have no manipulated IV: teenagers who *already* have anxiety/insomnia might pick up their phones because they cannot sleep (**reverse/bidirectional causation** or third variable)!",
        difficulty: "core",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "Negative correlation means one variable goes UP as the other goes DOWN.",
          "Remember the golden CIE 0266 rule on correlations vs causation (could insomnia cause phone scrolling too?).",
        ],
        strategy: "State inverse trend + correlation ≠ causation (bidirectional/third variable)",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q13",
        question:
          "In a sleep clinic study, five chronic insomnia patients record how many **minutes** they took to fall asleep (**sleep-onset latency**): `42, 55, 38, 140, 45`. Why is the **median** (`45` min) a more representative average here than the **mean** (`64` min)?",
        options: [
          "The median uses every digit of the extreme score to inflate the average",
          "The mode is 140 minutes, which cancels out the mean",
          "The extreme outlier of 140 minutes skews the mean upwards, whereas the median is unaffected by extreme outliers",
          "Minutes of sleep latency are nominal categories that cannot be added together",
        ],
        answerIndex: 2,
        explanation:
          "Four of the five patients fell asleep in `38–55` minutes, so `64` minutes (pulled up by the single `140`-minute outlier) misrepresents typical latency. Ordering the scores (`38, 42, 45, 55, 140`) gives a **median of 45 minutes**, which resists outlier distortion.",
        difficulty: "core",
        guideRef: "sleep-disorders-hygiene",
        hints: [
          "Look at the five numbers: `38, 42, 45, 55`... and `140`!",
          "Which measure of central tendency is pulled upward by one extreme outlier, and which resists it?",
        ],
        strategy: "Choose median over mean when skewed by an extreme outlier",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q14",
        question:
          "**Horne & Minard (1985)** took participants on an exhausting but **physically gentle** day out (cinema, shopping centres, art galleries, scenic drives — heavy visual/mental stimulation with minimal muscle exercise) and found **Slow-Wave Sleep increased significantly** that night! How does this refine **Oswald's Restoration Theory**?",
        options: [
          "It supports Meddis's evolutionary view that Slow-Wave Sleep rises purely to conserve calories after prolonged periods of low physical movement",
          "It indicates that Slow-Wave Sleep increases solely in response to intense skeletal muscle fatigue, confirming physical exercise is its only trigger",
          "It demonstrates that REM sleep rather than Slow-Wave Sleep releases pituitary Growth Hormone to repair overworked visual pathways after mental effort",
          "It suggests Slow-Wave Sleep is vital for cerebral cortex recovery from intense waking mental processing, not merely physical muscle repair",
        ],
        answerIndex: 3,
        explanation:
          "If SWS existed *only* to repair physically exercised muscles, a low-exercise mentally rich day would not increase SWS. **Horne (1988)** concluded SWS ('core sleep') primarily restores the overworked **cerebral cortex** (especially prefrontal cortex)!",
        difficulty: "challenge",
        guideRef: "theories-of-sleep",
        hints: [
          "Notice what worked hard all day in Horne & Minard's study: leg muscles or the cerebral cortex?",
          "If SWS rose anyway, what organ must SWS also be restoring?",
        ],
        strategy: "Use Horne & Minard (1985) to refine SWS as cortical + bodily repair",
      },
      {
        kind: "mcq",
        id: "sleep-and-dreams-m3-q15",
        question:
          "What major methodological limitation affects **all** dream-content studies — whether **Freud's** clinical notes, **Dement & Kleitman's** lab awakenings, or **Iorio et al.'s (2020)** online lockdown surveys?",
        options: [
          "Researchers cannot observe dreams directly — they must rely on subjective retrospective waking reports, which are vulnerable to forgetting and reconstructive distortion",
          "All dream-content studies rely exclusively on tiny `n = 1` clinical case studies of Austrian patients, preventing quantitative comparison across larger adult samples",
          "Polysomnography scalp electrodes artificially disrupt REM sleep in every dream study, causing low ecological validity and eliminating natural emotional themes",
          "Because REM muscle atonia persists for over an hour after waking, participants cannot speak or write until their dream memories have completely decayed from STM",
        ],
        answerIndex: 0,
        explanation:
          "Unlike eye movements or brainwaves, the **private subjective experience of a dream** cannot be seen directly on a screen! Every dream study relies on **self-report after waking**, introducing rapid forgetting, **Bartlett-style secondary elaboration**, and **social desirability bias** (editing embarrassing details).",
        difficulty: "core",
        guideRef: "dream-theories",
        hints: [
          "Can a brain scanner print out a movie of your exact dream plot, or must you *tell* the researcher?",
          "What biases affect retrospective waking self-reports?",
        ],
        strategy: "Highlight private subjectivity + retrospective self-report across all dream research",
      },
    ],
  },
];
