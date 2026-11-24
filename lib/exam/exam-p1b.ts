import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p1b",
  title: "CIE 0266 Paper 1 Mock B — Cognition, Behaviour & Experimental Methods",
  calculator: true,
  minutes: 90,
  questions: [
    // =========================================================================
    // SECTION A: MEMORY & FORGETTING (Q01–Q08)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p1b-q01",
      topicId: "memory-and-forgetting",
      guideRef: "processes-and-msm",
      difficulty: "core",
      question:
        "In **Murdock's (1962)** serial position study, if participants are forced to **count backwards in threes for 30 seconds** immediately after hearing the 20th word before recalling, what happens to the serial position curve?",
      options: [
        "The primacy effect disappears completely (because early words decay from LTM during counting), while the recency effect stays high (held in STM)",
        "Both primacy and recency rise sharply (because counting aloud provides acoustic maintenance rehearsal that consolidates all 20 words into LTM)",
        "The recency effect disappears (because the 30s distractor displaces/decays STM), while the primacy effect remains high (already stored in LTM)",
        "Middle-list words become the best recalled (because the 30s verbal delay frees the central executive to retrieve items from the sensory register)",
      ],
      answerIndex: 2,
      explanation:
        "Counting backwards prevents maintenance rehearsal for 30 seconds — exceeding STM's 18–30s duration — so the final words drop out of STM (**recency disappears**), whereas early words already consolidated in LTM (**primacy**) survive intact!",
      hints: [
        "Which memory store holds the LAST few words (recency), and how long does STM last without rehearsal?",
        "30 seconds of counting backwards clears STM while leaving LTM untouched!",
      ],
      strategy: "30s distractor wipes STM (recency) but spares LTM (primacy)",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q02",
      topicId: "memory-and-forgetting",
      guideRef: "working-memory-levels",
      difficulty: "warmup",
      question:
        "In Baddeley & Hitch's Working Memory Model, which two subdivisions make up the **phonological loop**?",
      options: [
        "The phonological store ('inner ear') and the articulatory control process ('inner voice')",
        "The visual cache (storing form and colour) and the inner scribe (spatial movement coding)",
        "The central executive (attentional boss) and the episodic buffer (multi-modal integrator)",
        "The iconic register (brief visual trace) and the echoic register (brief auditory trace)",
      ],
      answerIndex: 0,
      explanation:
        "Baddeley split the phonological loop into the passive **phonological store** ('inner ear', holding speech sounds for ~2s) and the active **articulatory control process** ('inner voice', sub-vocal rehearsal). Visual cache + inner scribe belong to the visuo-spatial sketchpad.",
      hints: ["Think sound/speech: 'inner ear' + 'inner voice'!"],
      strategy: "Phonological loop = phonological store + articulatory process",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q03",
      topicId: "memory-and-forgetting",
      guideRef: "explanations-forgetting",
      difficulty: "core",
      question:
        "Deep-sea divers in Godden & Baddeley's classic study learned word lists either **on dry land** or **6 metres underwater**, and recalled far more words when tested in the **same environment** where they learned them. This illustrates:",
      options: [
        "State-dependent forgetting",
        "Proactive interference from swimming",
        "Psychodynamic repression",
        "Context-dependent cue retrieval failure",
      ],
      answerIndex: 3,
      explanation:
        "External physical surroundings (underwater vs dry beach) act as **external environmental cues** — when absent at test, **context-dependent retrieval failure** occurs. (*State*-dependent refers to *internal* bodily/mood states like drowsiness or caffeine.)",
      hints: [
        "Distinguish EXTERNAL surroundings (context-dependent) from INTERNAL physiological/mood state (state-dependent).",
        "Dry beach vs underwater = external physical environment!",
      ],
      strategy: "External setting = Context-dependent; Internal body/mood = State-dependent",
    },
    {
      kind: "short",
      id: "exam-p1b-q04",
      topicId: "memory-and-forgetting",
      guideRef: "explanations-forgetting",
      difficulty: "core",
      question:
        "At the start of a new year, Mr Lim keeps accidentally writing **last year's date (`2025`)** on cheques instead of the **new year (`2026`)**. Which type of interference (**proactive** or **retroactive**) is causing his error?",
      answer: {
        type: "text",
        accept: ["proactive", "proactive interference"],
        display: "proactive interference",
      },
      traps: [
        {
          spec: { type: "text", accept: ["retroactive", "retroactive interference"] },
          feedback: "Retroactive is NEW blocking OLD — here OLD habit (2025) acts forward ('pro-') to disrupt NEW learning (2026)!",
        },
      ],
      solution: [
        "Previously learned material (`2025`) acting **forward** to disrupt recall of newer material (`2026`) is **proactive interference**.",
      ],
      hints: [
        "Ask: is OLD knowledge disrupting NEW, or NEW disrupting OLD?",
        "'Pro-' = forward in time (old habit blocking new date)!",
      ],
      strategy: "OLD disrupts NEW = Proactive ('forward') interference",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q05",
      topicId: "memory-and-forgetting",
      guideRef: "brain-and-amnesia",
      difficulty: "core",
      question:
        "Following a cycling head injury, Priya can learn new friends' names and recall yesterday's lessons normally, **but she cannot remember any events from the two years BEFORE her accident**. Priya has:",
      options: [
        "Anterograde amnesia",
        "Retrograde amnesia",
        "Cerebellar procedural ataxia",
        "Phonological loop displacement",
      ],
      answerIndex: 1,
      explanation:
        "**Retrograde amnesia** ('retro' = backwards) is loss of memories formed *before* brain trauma, whereas **anterograde amnesia** (like H.M.'s main deficit) is inability to form *new* memories after trauma.",
      hints: [
        "'Retro-' = backwards in time (memories BEFORE the accident).",
        "'Antero-' = forward in time (forming new memories AFTER the accident).",
      ],
      strategy: "Retrograde = past lost; Anterograde = cannot form new LTM",
    },
    {
      kind: "short",
      id: "exam-p1b-q06",
      topicId: "memory-and-forgetting",
      guideRef: "brain-and-amnesia",
      commonError: "Writing hippocampus (damaged in H.M., used for episodic LTM) instead of the cerebellum (intact procedural motor skill learning).",
      difficulty: "warmup",
      question:
        "Which hindbrain structure enabled patient **H.M.** (Milner et al., 1968) to steadily improve his **procedural motor skill** on a mirror-drawing star task across days, despite having zero episodic memory of ever seeing the apparatus before?",
      answer: {
        type: "text",
        accept: ["cerebellum", "cerebellum and basal ganglia"],
        display: "cerebellum",
      },
      solution: [
        "Implicit **procedural motor skills** (mirror-drawing, riding a bike) rely on the **cerebellum** (and basal ganglia), which remained intact after H.M.'s hippocampal surgery.",
      ],
      hints: ["The 'little brain' at the back of the skull responsible for fine motor coordination and procedural skill memory."],
      strategy: "Procedural motor skills = Cerebellum; Emotional fear conditioning = Amygdala",
    },
    {
      kind: "written",
      id: "exam-p1b-q07",
      topicId: "memory-and-forgetting",
      guideRef: "working-memory-levels",
      difficulty: "core",
      marks: 4,
      question:
        "Describe **Craik & Tulving's (1975)** Levels of Processing experiment and explain **one limitation** of Levels of Processing as a theory of memory. [4 marks]",
      modelAnswer:
        "Craik & Tulving flashed 60 words to participants accompanied by Yes/No questions inducing three processing depths: structural (e.g. 'Is the word in CAPITALS?'), phonemic ('Does it rhyme with train?'), or semantic ('Does it fit in this sentence?'). On an unexpected recognition test afterwards, semantic words were recognised far more accurately (~80%) than phonemic (~50%) or structural (<20%), showing deeper meaning processing builds stronger memory traces. However, a key limitation is circularity: 'depth' cannot be measured independently — psychologists say a word is remembered because it was deeply processed, yet judge depth by how well it is remembered!",
      markScheme: [
        {
          point: "Describes the 3 question conditions: structural (appearance/capitals), phonemic (rhyme/sound), and semantic (meaning/sentence)",
          keywords: ["structural", "phonemic", "semantic", "rhyme", "capital"],
        },
        {
          point: "States key finding: unexpected recognition/recall was highest for semantic and lowest for structural processing",
          keywords: ["highest", "best", "more words", "80%", "lowest", "unexpected"],
        },
        {
          point: "Identifies a valid theoretical/methodological limitation (e.g. circular definition of 'depth', time/effort confound, ignores individual differences)",
          keywords: ["circular", "independently measur", "effort", "longer time", "transfer-appropriate"],
        },
        {
          point: "Explains the limitation clearly (e.g. depth cannot be measured separately from recall; OR semantic tasks simply involve more elaboration/distinctiveness)",
          keywords: ["cannot be measured", "defined by recall", "elaborat", "distinctive", "morris"],
        },
      ],
      commonError:
        "Confusing Craik & Tulving (1975) with Murdock (1962) serial position curves.",
      hints: [
        "Name all three question types (Structural, Phonemic, Semantic) + the recognition result (2 marks).",
        "Explain the famous 'circularity' critique of 'depth' (or Morris et al.'s transfer-appropriate rhyme test critique) for 2 marks!",
      ],
      strategy: "Procedure + Finding (2m) → Circularity/Elaboration Critique (2m)",
    },
    {
      kind: "written",
      id: "exam-p1b-q08",
      topicId: "memory-and-forgetting",
      guideRef: "brain-and-amnesia",
      difficulty: "challenge",
      marks: 4,
      question:
        "Explain **two major conclusions about human memory** drawn from **Milner et al.'s (1968)** case study of **H.M.**, and give **one methodological evaluation point** of relying on his case. [4 marks]",
      modelAnswer:
        "First, H.M. could hold digits in Short-Term Memory for ~15–20 seconds via rehearsal yet could not form new Long-Term Memories after hippocampal removal, proving STM and LTM are biologically separate stores (supporting the Multi-Store Model). Second, H.M. learned new procedural mirror-drawing skills while failing to recall declarative episodes, proving LTM itself is subdivided into hippocampal declarative memory and non-hippocampal procedural memory. Methodologically, however, because H.M. was a single patient ($n = 1$) who suffered severe lifelong epilepsy prior to surgery, his pre-existing brain abnormality limits population validity (generalisability to healthy brains).",
      markScheme: [
        {
          point: "Conclusion 1: STM and LTM are separate/distinct stores (intact STM digit span vs impaired new LTM consolidation via hippocampus)",
          keywords: ["separate", "distinct", "stm intact", "digit span", "multi-store"],
        },
        {
          point: "Conclusion 2: Procedural (motor) LTM is separate from episodic/declarative LTM (intact mirror-drawing)",
          keywords: ["procedural", "mirror", "declarative", "episodic", "motor"],
        },
        {
          point: "Identifies case-study feature (single individual n = 1, severe pre-existing epilepsy, unique surgical lesion)",
          keywords: ["epilepsy", "single", "one patient", "n = 1", "n=1", "unique"],
        },
        {
          point: "Explains impact on population validity / generalisability (or later MRI confirmation strengthening anatomical validity)",
          keywords: ["generalis", "generaliz", "population validity", "healthy brains"],
        },
      ],
      commonError:
        "Claiming H.M. lost all childhood memories AND all STM — his digit-span STM and procedural skills remained intact!",
      hints: [
        "What two dissociations did H.M. prove? (1: STM vs LTM; 2: Declarative LTM vs Procedural mirror-drawing LTM).",
        "Evaluate $n = 1$ + pre-surgery epilepsy!",
      ],
      strategy: "Two dissociations (STM≠LTM, Declarative≠Procedural) + n=1 epilepsy critique",
    },

    // =========================================================================
    // SECTION B: SLEEP & DREAMS (Q09–Q15)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p1b-q09",
      topicId: "sleep-and-dreams",
      guideRef: "sleep-stages-eeg",
      difficulty: "core",
      question:
        "Which EEG brainwave pattern characterizes **deep Slow-Wave Sleep (NREM Stage 3)**, and what happens to the proportion of SWS vs REM as a healthy night progresses from midnight to 06:30?",
      options: [
        "Gamma waves with muscle paralysis; SWS only occurs during daytime naps",
        "Fast beta waves and sleep spindles; early cycles are 90% REM whereas morning cycles are 90% SWS",
        "Alpha waves only; SWS and REM remain identical in duration across all 5 cycles",
        "High-amplitude, low-frequency delta waves; early cycles contain more deep SWS whereas later morning cycles contain longer REM periods",
      ],
      answerIndex: 3,
      explanation:
        "Deep NREM Stage 3 (SWS) displays slow, high-amplitude **delta waves** (<4 Hz). Across a night's hypnogram, **SWS dominates the first half of the night**, while **REM bouts lengthen progressively toward morning**.",
      hints: [
        "Deep Slow-Wave Sleep = slow, tall **delta** waves!",
        "Think of a hypnogram: physical repair (SWS) happens heavily in Cycles 1–2; vivid long dreams (REM) peak before waking!",
      ],
      strategy: "NREM 3 = Delta waves (early night); REM lengthens toward morning",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q10",
      topicId: "sleep-and-dreams",
      guideRef: "sleep-disorders-hygiene",
      difficulty: "core",
      question:
        "During which sleep stage does **somnambulism (sleepwalking)** occur, and why does it **NOT** occur during REM dreaming?",
      options: [
        "REM sleep during the final morning cycle, because high-amplitude delta waves excite the motor cortex and briefly disable brainstem muscle paralysis",
        "NREM Stage 1 light transition, because sleep spindles and K-complexes trigger sudden pineal adrenaline surges before deep delta paralysis sets in",
        "NREM Stage 3 (Slow-Wave Sleep), because voluntary skeletal muscles are NOT paralysed in NREM (whereas REM muscle atonia prevents acting out dreams)",
        "NREM Stage 2 light sleep, because brain activity slows completely during REM dreaming and fails to generate any motor signals toward skeletal limbs",
      ],
      answerIndex: 2,
      explanation:
        "Sleepwalking is a parasomnia arising out of incomplete arousal from **deep NREM Stage 3 (SWS)** — muscles retain tone in NREM, whereas brainstem **atonia** paralyses voluntary muscles during REM.",
      hints: [
        "Can you walk if your voluntary muscles have REM atonia (paralysis)?",
        "Sleepwalking happens during deep NREM Slow-Wave Sleep!",
      ],
      strategy: "Somnambulism = NREM Stage 3 SWS (no muscle paralysis, unlike REM!)",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q11",
      topicId: "sleep-and-dreams",
      guideRef: "circadian-rhythms-scn",
      difficulty: "core",
      question:
        "French cave explorer Michel Siffre lived underground for months with **zero clocks or natural daylight**, yet his body still maintained a regular ~24.5-hour sleep-wake cycle. What does Siffre's study demonstrate?",
      options: [
        "That humans possess an innate endogenous biological pacemaker (the SCN), though external zeitgebers like daylight normally entrain/reset it precisely to 24.0 hours",
        "That human circadian sleep-wake rhythms are governed entirely by exogenous social clocks and daylight, collapsing into random timing whenever external cues are removed",
        "That prolonged isolation in constant cave darkness shuts down pineal melatonin secretion permanently, eliminating REM sleep while leaving only NREM Stage 3 intact",
        "That removing morning sunlight stretches each 90-minute ultradian NREM–REM sleep cycle to 24.5 hours, proving exogenous zeitgebers control ultradian sleep stages",
      ],
      answerIndex: 0,
      explanation:
        "Siffre's 'free-running' rhythm (~24.5–25 h) proves an internal **endogenous pacemaker (SCN)** generates circadian rhythmicity, while the slight drift above 24.0 h shows **exogenous zeitgebers** (sunlight) are needed daily to keep it locked onto Earth's 24-hour day.",
      hints: [
        "Without external light cues, did his sleep become chaotic, or stay close to ~24.5 hours?",
        "Why did it drift slightly past 24.0 hours without sunlight?",
      ],
      strategy: "Free-running ~24.5h = Endogenous SCN exists + Exogenous light fine-tunes to 24h",
    },
    {
      kind: "short",
      id: "exam-p1b-q12",
      topicId: "sleep-and-dreams",
      guideRef: "circadian-rhythms-scn",
      commonError: "Confusing endogenous pacemakers (internal biological clocks like the SCN) with exogenous zeitgebers (external environmental time-givers).",
      difficulty: "warmup",
      question:
        "What German loanword (meaning *'time-giver'*) is used in psychology for **external environmental cues** — such as daylight, temperature and meal times — that reset our internal circadian clock?",
      answer: {
        type: "text",
        accept: ["zeitgeber", "zeitgebers", "exogenous zeitgeber", "exogenous zeitgebers"],
        display: "zeitgeber",
      },
      solution: [
        "External environmental cues like sunlight that entrain endogenous biological rhythms are **exogenous zeitgebers** (*'time-givers'*).",
      ],
      hints: ["Starts with 'z…' (literally German for 'time-giver')."],
      strategy: "Endogenous = internal pacemaker (SCN); Exogenous = external zeitgeber (light)",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q13",
      topicId: "sleep-and-dreams",
      guideRef: "theories-of-sleep",
      difficulty: "core",
      question:
        "Which comparative animal observation poses a **challenge** to **Meddis's Evolutionary (Predator-Avoidance) Theory** of sleep?",
      options: [
        "Little brown bats sleep roughly 19 hours a day hidden safely inside dark caves, showing that protected animals sleep longer when foraging windows are brief",
        "Exposed grazing herbivores such as horses and giraffes sleep only 2 to 3 hours per day on open grasslands, minimising time spent vulnerable to savannah predators",
        "Apex predators such as lions sleep up to 15 hours a day after feeding because they face minimal predation risk and benefit from conserving energy between hunts",
        "Sleep leaves animals unconscious and slow to detect approaching predators, whereas quiet wakeful resting in a safe shelter would conserve energy without sacrificing vigilance",
      ],
      answerIndex: 3,
      explanation:
        "Critics note a major evolutionary puzzle for Meddis: if the goal is staying safe from predators, losing consciousness during sleep actually makes animals *more* vulnerable than lying still while quietly awake — implying sleep must serve vital physiological/brain restoration functions too!",
      hints: [
        "Ask: if hiding quietly in a burrow saves energy, why risk becoming UNCONSCIOUS when predators prowl?",
        "Quiet wakefulness would avoid predators safer than unconscious sleep!",
      ],
      strategy: "Unconsciousness increases vulnerability → pure predator-avoidance is incomplete",
    },
    {
      kind: "written",
      id: "exam-p1b-q14",
      topicId: "sleep-and-dreams",
      guideRef: "theories-of-sleep",
      difficulty: "core",
      marks: 4,
      question:
        "Evaluate **Oswald's Restoration Theory of Sleep** by providing **one piece of supporting evidence** and **one limitation / counter-argument**. [4 marks]",
      modelAnswer:
        "Supporting evidence comes from total/selective sleep deprivation and recovery ('REM rebound') studies: after extreme physical endurance (e.g. ultramarathons) or brain-intensive learning, sleepers show increased SWS (when pituitary growth hormone surges for tissue repair) and increased REM rebound on recovery nights, while prolonged deprivation in rats (Rechtschaffen) impairs immune function. However, a limitation is that gentle moderate exercise does not consistently lengthen SWS (Horne argued core brain repair matters more than muscle repair, as quiet waking rest repairs muscles), and massive cross-species differences (bats sleeping 19 h vs horses 3 h regardless of exertion) are better explained by ecological/evolutionary niche factors.",
      markScheme: [
        {
          point: "Gives accurate empirical support (e.g. REM rebound after deprivation, SWS growth-hormone surge, ultra-endurance recovery, immune decline in deprived animals)",
          keywords: ["rebound", "growth hormone", "marathon", "depriv", "immune", "infants"],
        },
        {
          point: "Links that evidence clearly to body (SWS) or brain/neurotransmitter (REM) repair",
          keywords: ["tissue repair", "protein synthesis", "neurotransmitter", "brain restoration", "body repair"],
        },
        {
          point: "Gives a valid limitation (e.g. resting awake repairs body muscles, routine exercise doesn't always boost SWS, cross-species ecological differences)",
          keywords: ["horne", "resting", "awake", "exercise", "species", "evolutionary", "amino acid"],
        },
        {
          point: "Explains why this challenges pure restoration (e.g. evolutionary predator/foraging demands also shape sleep duration)",
          keywords: ["foraging", "predator", "ecological", "does not increase sws", "muscle repair"],
        },
      ],
      commonError:
        "Describing Oswald's claims for all 4 marks without giving empirical support AND a counter-argument.",
      hints: [
        "Support: think **REM rebound**, **infant REM/growth hormone**, or **deprivation** effects.",
        "Critique: think **Horne** (quiet rest repairs muscles) or **cross-species** ecological sleep differences!",
      ],
      strategy: "1 Empirical Support (explained) + 1 Limitation/Alternative (explained)",
    },
    {
      kind: "written",
      id: "exam-p1b-q15",
      topicId: "sleep-and-dreams",
      guideRef: "circadian-rhythms-scn",
      difficulty: "core",
      marks: 3,
      question:
        "A nurse switches every week between **day shifts** (`07:00–19:00`) and **night shifts** (`19:00–07:00`) and suffers exhaustion and micro-sleeps at 04:00. Using **endogenous pacemakers and exogenous zeitgebers**, explain why rotating night shifts disrupt alertness and health. [3 marks]",
      modelAnswer:
        "The nurse's hypothalamic SCN (endogenous pacemaker) remains entrained to outdoor daylight (the strongest exogenous zeitgeber), causing the pineal gland to secrete melatonin and drop core body temperature around 03:00–04:00 ('desynchronisation' / internal jet lag), triggering severe drowsiness on duty. Conversely, trying to sleep at 09:00 in bright morning light and traffic noise suppresses melatonin and fragments REM/SWS recovery sleep, increasing workplace error risk and long-term cardiovascular/stress strain.",
      markScheme: [
        {
          point: "Identifies conflict / desynchronisation between internal SCN pacemaker and external shift schedule / daylight zeitgeber",
          keywords: ["desynchronis", "conflict", "mismatch", "scn", "zeitgeber"],
        },
        {
          point: "Explains 04:00 night-shift dip via pineal melatonin secretion / core body temperature trough",
          keywords: ["melatonin", "pineal", "body temperature", "trough"],
        },
        {
          point: "Explains daytime sleep disruption (sunlight inhibits melatonin → fragmented/shortened sleep, errors or health risks)",
          keywords: ["daylight", "morning light", "suppress", "inhibit", "fragmented", "poor sleep", "error", "cardiovascular"],
        },
      ],
      commonError:
        "Writing 'she is tired because she works at night' without naming SCN, zeitgebers (daylight) and melatonin desynchronisation!",
      hints: [
        "What is her SCN + pineal melatonin doing at 04:00 in the dark?",
        "What happens when she walks out into bright morning sunlight (zeitgeber) at 07:30 trying to sleep?",
      ],
      strategy: "Desynchronisation: SCN/Melatonin high at 04:00 + Sunlight blocks daytime sleep",
    },

    // =========================================================================
    // SECTION C: PROSOCIAL BEHAVIOUR (Q16–Q22)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p1b-q16",
      topicId: "prosocial-behaviour",
      guideRef: "bystander-apathy",
      difficulty: "warmup",
      question:
        "Put the **first four steps** of **Latané & Darley's (1968) 5-Step Cognitive Decision Model** of bystander intervention in the **correct order** (before Step 5: *Engage in helping action*):",
      options: [
        "1. Assume personal responsibility → 2. Notice event → 3. Know how to help → 4. Interpret as emergency",
        "1. Notice event → 2. Interpret as emergency → 3. Assume personal responsibility → 4. Know how to help",
        "1. Feel kin selection → 2. Weigh subway costs → 3. Imitate parents → 4. Release oxytocin",
        "1. Know how to help → 2. Interpret as emergency → 3. Notice event → 4. Diffuse responsibility",
      ],
      answerIndex: 1,
      explanation:
        "A bystander must sequentially: **(1) Notice** something is happening → **(2) Interpret** it as an emergency → **(3) Assume personal responsibility** → **(4) Decide/know how to help** → **(5) Implement action**. Failing at *any* single step produces bystander apathy!",
      hints: ["You cannot interpret an event before noticing it, and you don't plan HOW to help until you accept responsibility!"],
      strategy: "Notice → Interpret → Responsibility → Competence → Act",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q17",
      topicId: "prosocial-behaviour",
      guideRef: "biological-evolutionary",
      difficulty: "core",
      question:
        "According to **Hamilton's Kin Selection (Inclusive Fitness) Theory**, why would an animal or human risk greater danger to rescue **three full siblings** (each sharing 50% of genes) than to rescue **one distant cousin** (sharing 12.5% of genes)?",
      options: [
        "Because natural selection favours genes that promote the survival and reproduction of close genetic relatives who carry copies of those same alleles",
        "Because three siblings are more likely to return equal future favours under Trivers's reciprocal altruism than a distant cousin who lives further away",
        "Because rescuing three siblings reduces bystander diffusion of responsibility faster than rescuing one cousin, lowering the helper's physiological arousal",
        "Because Social Learning Theory shows parents selectively reinforce helping full siblings with warm verbal praise while ignoring altruistic acts toward cousins",
      ],
      answerIndex: 0,
      explanation:
        "**Kin selection** explains self-sacrificing help toward blood relatives: saving three siblings ($3 \\times 0.50 = 1.50$ gene-equivalents) passes on more copies of shared alleles to future generations than saving oneself ($1.0$) or one cousin ($0.125$).",
      hints: [
        "Evolution selects for **gene survival** ('inclusive fitness'), not just individual survival!",
        "Compare shared DNA percentages: 50% per sibling vs 12.5% per cousin.",
      ],
      strategy: "Higher shared genes (r) × benefit > personal cost = Kin selection",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q18",
      topicId: "prosocial-behaviour",
      guideRef: "biological-evolutionary",
      difficulty: "core",
      question:
        "Vampire bats regurgitate blood meals to save unrelated roost-mates who failed to feed — **provided** those roost-mates have shared food with them in the past (cheaters are remembered and refused!). Which evolutionary mechanism explains helping **non-relatives**?",
      options: [
        "Hamilton's kin selection ('help close relatives who share DNA')",
        "Batson's empathy-altruism ('help purely to relieve suffering')",
        "Piliavin's cost–reward model ('help to reduce guilty arousal')",
        "Trivers's reciprocal altruism ('help now, be helped back later')",
      ],
      answerIndex: 3,
      explanation:
        "Kin selection cannot explain helping *unrelated* individuals. **Trivers's Reciprocal Altruism** shows natural selection favours mutual 'tit-for-tat' helping in social groups when the benefit to the recipient exceeds the cost to the donor and favours are returned later.",
      hints: [
        "Notice the roost-mates are UNRELATED, and cheaters who don't return favours get cut off!",
        "'You scratch my back today, I scratch yours tomorrow' = reciprocal altruism.",
      ],
      strategy: "Unrelated mutual return of favours = Reciprocal Altruism",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q19",
      topicId: "prosocial-behaviour",
      guideRef: "cost-reward-piliavin",
      difficulty: "warmup",
      question:
        "In Darley & Batson's 'Good Samaritan' seminary study, theology students walking past a slumped, coughing man in an alleyway were **far less likely to stop and help** when:",
      options: [
        "They had just read a parable about helping strangers",
        "They were walking completely alone rather than in a crowd",
        "They were told they were already late and had to hurry across campus (high time pressure)",
        "It was sunny outside",
      ],
      answerIndex: 2,
      explanation:
        "**Time pressure** dramatically increases the perceived personal cost of stopping (and narrows attentional focus so Step 1 noticing drops): only 10% of 'high-hurry' students helped versus 63% of 'low-hurry' students!",
      hints: ["Which situational factor hikes up the personal cost of stopping for 5 minutes?"],
      strategy: "High hurry / time pressure = steep drop in helping",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q20",
      topicId: "prosocial-behaviour",
      guideRef: "media-parental-influences",
      difficulty: "core",
      question:
        "Which **parenting approach** is most strongly associated with fostering internalised empathy and prosocial helping in children?",
      options: [
        "Strict power-assertive discipline, firm authority, and immediate confiscation of privileges (enforcing external compliance without emotional discussion)",
        "Parental warmth, prosocial role-modelling, and inductive reasoning discipline (calmly explaining how the child's actions made another person feel)",
        "Consistent love-withdrawal parenting paired with contingent cash rewards (withholding affection for selfishness and paying tokens for polite sharing)",
        "Permissive non-intervention combined with occasional preaching about charity (telling children to share while letting peer conflicts resolve themselves)",
      ],
      answerIndex: 1,
      explanation:
        "**Inductive discipline** (pointing out the emotional consequences of actions on others: *'Look how sad Leo feels when you snatch his blocks'*) paired with **warmth** and **parental modelling** builds perspective-taking and internalised empathy.",
      hints: [
        "Which discipline style teaches a child to step into another child's shoes?",
        "Inductive reasoning + warmth + modelling.",
      ],
      strategy: "Warmth + Modelling + Inductive reasoning = internalised prosociality",
    },
    {
      kind: "written",
      id: "exam-p1b-q21",
      topicId: "prosocial-behaviour",
      guideRef: "bystander-apathy",
      difficulty: "core",
      marks: 4,
      question:
        "Describe **Latané & Darley's (1968)** intercom seizure study and evaluate **one ethical OR ecological validity issue** with their procedure. [4 marks]",
      modelAnswer:
        "Latané & Darley placed university students in separate cubicles communicating via intercom about college life (so nobody could see others' faces). Participants believed they were in a discussion group of 2 (alone with the victim), 3, or 6 people when a pre-recorded confederate staged an epileptic seizure calling for help. Helping fell from 85% (2-person condition) to 62% (3-person) and 31% (6-person), demonstrating diffusion of responsibility. However, ethically the study used deception and exposed participants to acute psychological distress (trembling, sweating, guilt believing a peer was having a life-threatening seizure), breaching protection from harm — though researchers provided a thorough calming debrief afterwards.",
      markScheme: [
        {
          point: "Describes setup & IV accurately: separate intercom cubicles; perceived group size manipulated (2, 3 or 6 participants) with staged seizure recording",
          keywords: ["intercom", "cubicle", "2, 3", "6", "seizure", "epileptic"],
        },
        {
          point: "States finding accurately: helping dropped sharply as group size grew (85% alone vs 31% in group of 6), supporting diffusion of responsibility",
          keywords: ["85%", "31%", "dropped", "decreased", "diffusion of responsibility"],
        },
        {
          point: "Identifies a valid ethical (deception / psychological distress) OR ecological validity (audio-only cubicle lacks face-to-face cues) issue",
          keywords: ["distress", "psychological harm", "deception", "anxiety", "ecological validity", "could not see", "artificial"],
        },
        {
          point: "Develops the evaluation point in context (e.g. sweating/trembling distress balanced by debrief; OR Piliavin showed face-to-face subway crowds do help)",
          keywords: ["debrief", "sweat", "trembl", "piliavin", "face-to-face", "real-life"],
        },
      ],
      commonError:
        "Confusing Latané & Darley's intercom seizure study with their smoky-room study or Piliavin's subway study!",
      hints: [
        "State the IV (perceived group sizes 2, 3, 6 over intercom), DV (% reporting seizure), and 85% → 31% result (2 marks).",
        "Then evaluate either psychological distress/deception OR artificial audio-only isolation (2 marks).",
      ],
      strategy: "IV/DV + 85%→31% Result (2m) → Contextualised Ethics/Validity Critique (2m)",
    },
    {
      kind: "written",
      id: "exam-p1b-q22",
      topicId: "prosocial-behaviour",
      guideRef: "media-parental-influences",
      difficulty: "core",
      marks: 3,
      question:
        "Using **Prot et al.'s** research on prosocial media, explain how a school could design an evidence-based digital citizenship programme to boost helping among Year 7 pupils, and note **one limitation** of relying on self-report surveys in media studies. [3 marks]",
      modelAnswer:
        "Based on Prot et al.'s finding that prosocial video games and media cultivate empathy which increases helping across cultures, the school could run weekly cooperative gaming/film workshops where pupils practise rescuing, sharing and perspective-taking, reinforced by teacher praise. However, a key limitation of survey-based media studies like Prot et al. is social desirability bias: pupils filling out questionnaires may exaggerate how empathetic and helpful they are (or misremember exact weekly gaming hours) to impress researchers.",
      markScheme: [
        {
          point: "Applies Prot et al.'s pathway: cooperative/prosocial games or media used to build empathy and prosocial norms",
          keywords: ["cooperative", "prosocial game", "empathy", "perspective"],
        },
        {
          point: "Describes a concrete school activity (e.g. guided prosocial gaming clubs, role-play reflection, positive reinforcement)",
          keywords: ["club", "workshop", "lesson", "discuss", "praise"],
        },
        {
          point: "Identifies self-report limitation accurately (social desirability bias / exaggerating helpfulness or inaccurate memory of screen hours)",
          keywords: ["social desirability", "exaggerat", "lie", "impress", "inaccurate recall", "misremember"],
        },
      ],
      commonError:
        "Talking about banning violent games only instead of actively introducing PROSOCIAL media (Prot et al.'s focus!).",
      hints: [
        "Prot et al. studied **prosocial** media → empathy → helping!",
        "Why might teenagers over-report their helpfulness on a self-report questionnaire?",
      ],
      strategy: "Apply Prot pathway to school workshop + Critique self-report social desirability",
    },

    // =========================================================================
    // SECTION D: EXPERIMENTAL RESEARCH METHODS & DATA (Q23–Q30)
    // =========================================================================
    {
      kind: "short",
      id: "exam-p1b-q23",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "warmup",
      question:
        "Nine sleepers wake from REM and rate dream vividness (1–20): **14, 9, 17, 12, 15, 8, 19, 12, 11**. Find the **median** vividness score.",
      answer: { type: "number", value: 12 },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "15 is the 5th number in the UNSORTED list — sort all 9 numbers from lowest (8) to highest (19) first!",
        },
        {
          spec: { type: "number", value: 13 },
          feedback: "13 is the mean (117 ÷ 9 = 13). Sort the 9 numbers first to read the 5th ordered value!",
        },
      ],
      solution: [
        "Sort ascending: `8, 9, 11, 12, 12, 14, 15, 17, 19` ($N = 9$).",
        "The middle (5th) ordered score is **12**.",
      ],
      hints: ["Sort the 9 scores from 8 up to 19 first, then pick the 5th value!"],
      strategy: "Sort ascending first, pick (N+1)/2 position",
    },
    {
      kind: "short",
      id: "exam-p1b-q24",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "core",
      question:
        "In a sleep-hygiene experiment, mean sleep-onset latency dropped from **40 minutes** before the intervention to **26 minutes** after the intervention. Calculate the **percentage decrease** in sleep-onset latency.",
      answer: { type: "number", value: 35 },
      traps: [
        {
          spec: { type: "number", value: 53.8, tolerance: 0.2 },
          feedback: "You divided 14 by the NEW latency (26) — always divide by the ORIGINAL baseline (40)!",
        },
        {
          spec: { type: "number", value: 14 },
          feedback: "14 minutes is the raw drop — divide 14 by 40 and multiply by 100 for the percentage decrease!",
        },
      ],
      solution: [
        "Decrease = {{40 - 26 = 14}} minutes.",
        "Percentage decrease = {{(14 / 40) * 100 = 35}}%.",
      ],
      hints: [
        "Find the drop in minutes (40 − 26 = 14).",
        "Divide 14 by the ORIGINAL baseline (40) and multiply by 100.",
      ],
      strategy: "(Decrease ÷ Original) × 100",
    },
    {
      kind: "short",
      id: "exam-p1b-q25",
      topicId: "research-methods",
      guideRef: "experiments-designs-sampling",
      commonError: "Subtracting 720 − 45 instead of dividing population by sample size: k = 720 ÷ 45 = 16.",
      difficulty: "core",
      question:
        "An alphabetical roll contains **720 Year 11 pupils**. To select a **systematic sample of 45 pupils**, the researcher picks a random starting pupil and then selects every ***k*th** pupil on the roll. Calculate ***k***.",
      answer: { type: "number", value: 16 },
      solution: [
        "Sampling interval {{k = 720 / 45 = 16}} (select every **16th** pupil).",
      ],
      hints: [
        "Divide the total population size (720) by the desired sample size (45).",
        "720 ÷ 45 = ?",
      ],
      strategy: "Interval k = Population ÷ Sample",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q26",
      topicId: "research-methods",
      guideRef: "variables-hypotheses-controls",
      difficulty: "core",
      question:
        "Which of the following is a correctly **operationalised null hypothesis** for an experiment testing whether chewing gum affects digit-span recall?",
      options: [
        "There will be no significant difference in overall short-term memory performance between participants who chew gum and participants who do not chew gum; any difference is due to chance.",
        "There will be a significant difference in the maximum number of digits recalled in correct order between participants who chew mint gum and participants who do not chew gum.",
        "Participants who chew mint gum will recall significantly fewer digits in correct order than participants who do not chew gum during the digit-span recall task.",
        "There will be no significant difference in the maximum number of digits recalled in correct order between participants who chew mint gum and participants who do not chew gum; any difference is due to chance.",
      ],
      answerIndex: 3,
      explanation:
        "A full-mark CIE 0266 null hypothesis states **'no significant difference'** (attributing differences to chance) AND operationalises both IV conditions (mint gum vs no gum) and the exact DV (maximum digits recalled in order).",
      hints: [
        "Eliminate any option lacking 'no significant difference' (null).",
        "Then eliminate the vague option that says 'short-term memory' without measurable units!",
      ],
      strategy: "Null ('no significant difference' + chance) + Operationalised IV & DV",
    },
    {
      kind: "mcq",
      id: "exam-p1b-q27",
      topicId: "research-methods",
      guideRef: "experiments-designs-sampling",
      difficulty: "core",
      question:
        "Why is **matched pairs design** often chosen over **repeated measures** when testing whether a persuasive empathy video increases charitable donations?",
      options: [
        "Because watching both videos exposes the aim (demand characteristics) and causes irreversible emotional carry-over, whereas matched pairs avoid order effects while controlling baseline empathy",
        "Because matched pairs requires no baseline empathy pre-testing and recruits half as many participants as repeated measures, making data collection much faster and cheaper",
        "Because pairing participants by baseline empathy automatically eliminates all situational extraneous variables and guarantees high ecological validity inside a laboratory setting",
        "Because repeated measures designs cannot control individual differences in baseline empathy and require twice as many participants as matched pairs to avoid sampling bias",
      ],
      answerIndex: 0,
      explanation:
        "Once a participant feels moved by an empathy video, you cannot 'un-watch' it 5 minutes later for the neutral control condition (irreversible carry-over + obvious demand characteristics). Pre-matching pairs on baseline empathy solves both order effects and participant-variable bias!",
      hints: [
        "What happens if you watch a tear-jerking charity film in Trial 1 and then sit through a neutral clip in Trial 2?",
        "Matched pairs tests each person ONCE while still matching baseline empathy!",
      ],
      strategy: "Irreversible emotional carry-over → choose Matched Pairs over Repeated Measures",
    },
    {
      kind: "short",
      id: "exam-p1b-q28",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "challenge",
      question:
        "Seven participants complete a prosocial puzzle task in seconds: **18, 20, 21, 22, 24, 27, 108** (Participant 7 dropped the stopwatch). Calculate the **positive difference** between the **mean** and the **median** of all 7 scores, rounded to **1 decimal place**.",
      answer: { type: "number", value: 12.3, tolerance: 0.06 },
      traps: [
        {
          spec: { type: "number", value: 34.3, tolerance: 0.1 },
          feedback: "34.3 s is the mean — remember to subtract the median (22 s) from 34.29 s!",
        },
        {
          spec: { type: "number", value: 22 },
          feedback: "22 s is the median — calculate Mean (240 ÷ 7 ≈ 34.29) minus Median (22)!",
        },
      ],
      solution: [
        "Sum of all 7 scores = {{18 + 20 + 21 + 22 + 24 + 27 + 108 = 240}} s → **Mean** = {{240 / 7 ~= 34.286}} s.",
        "The list is already sorted; with {{N = 7}}, the 4th score is **Median = 22 s**.",
        "Difference = {{34.286 - 22 = 12.286}} ≈ **12.3 s** (to 1 d.p.).",
      ],
      hints: [
        "First find the 7-person mean (240 ÷ 7 ≈ 34.29 s).",
        "Find the 4th ordered value for the median (22 s), then subtract!",
      ],
      strategy: "Compute skewed Mean, compute robust Median, subtract",
    },
    {
      kind: "written",
      id: "exam-p1b-q29",
      topicId: "research-methods",
      guideRef: "ethics-reliability-validity",
      difficulty: "core",
      marks: 4,
      question:
        "In a field experiment on bystander helping, confederates fake fainting outside a shopping centre without shoppers' prior knowledge. Identify **two ethical guidelines** breached by this procedure and explain a practical step researchers can take to address **each** one. [4 marks]",
      modelAnswer:
        "1) Lack of informed consent / Deception: shoppers were misled into believing a medical emergency was genuine and could not consent beforehand without ruining natural reactions. Researchers can obtain presumptive consent beforehand by describing the exact fainting procedure to a similar group of shoppers and asking if they would find it acceptable (plus debriefing helpers immediately afterwards). 2) Protection from psychological harm: witnessing a sudden collapse may trigger anxiety or distress. Researchers can station a uniformed assistant nearby to halt each trial within 30 seconds, reassure bystanders promptly, and record zero names or faces to guarantee confidentiality.",
      markScheme: [
        {
          point: "Names 1st ethical breach: lack of informed consent OR deception",
          keywords: ["informed consent", "deception", "deceiv", "misled"],
        },
        {
          point: "Gives practical mitigation for 1st breach (presumptive consent from peer group beforehand, ethics committee approval, immediate debrief + right to withdraw data)",
          keywords: ["presumptive consent", "debrief", "withdraw their data", "similar group"],
        },
        {
          point: "Names 2nd distinct ethical breach: psychological harm (distress/anxiety/guilt) OR privacy/confidentiality",
          keywords: ["psychological harm", "distress", "anxiety", "guilt", "privacy", "confidential"],
        },
        {
          point: "Gives practical mitigation for 2nd breach (keep trials short, immediate reassurance, anonymous tallies with no video/names)",
          keywords: ["reassur", "brief", "short", "30 seconds", "anonymous", "no names"],
        },
      ],
      commonError:
        "Writing 'Get informed consent from every shopper beforehand' — which would ruin the entire field experiment by alerting shoppers to the fake collapse!",
      hints: [
        "Pick TWO distinct guidelines from DRIP (e.g. Informed Consent/Deception + Protection from Psychological Harm).",
        "Make sure your fix doesn't spoil the field study beforehand (use **presumptive consent** + **brief trials & immediate debrief**!).",
      ],
      strategy: "Pair each breached DRIP guideline with a realistic field-study safeguard",
    },
    {
      kind: "written",
      id: "exam-p1b-q30",
      topicId: "research-methods",
      guideRef: "experiments-designs-sampling",
      difficulty: "challenge",
      marks: 6,
      question:
        "**Evaluate & Redesign (CIE 0266 Paper 1 Extended Question)**:\nA student tests whether **20 minutes of afternoon napping** improves recall compared with **staying awake watching cartoons**. She recruits **14 classmates from her own psychology class** (opportunity sample). All 14 take Test List A (10 4-letter nouns) after watching cartoons on Monday, and the **same 14** take Test List B (10 12-letter scientific words) after napping on Tuesday. Mean recall drops from `8.4` on Monday to `5.1` on Tuesday, so she concludes *'Naps harm everyone's memory!'*\nIdentify **three serious methodological flaws** in her study and explain **how to fix each flaw**. [6 marks]",
      modelAnswer:
        "Flaw 1 (Confounding word-list difficulty): List A used easy 4-letter nouns whereas List B used hard 12-letter scientific terms, confounding the IV with stimulus difficulty! Fix 1: Match List A and List B on word length, syllable count and everyday familiarity (and randomise which list goes with which condition). Flaw 2 (Un-counterbalanced order effects in repeated measures): Everyone did Awake first on Monday and Nap second on Tuesday, introducing fatigue/interference or demand characteristics (especially among psychology classmates!). Fix 2: Apply ABBA counterbalancing — half (7) do Nap→Awake while half (7) do Awake→Nap. Flaw 3 (Biased, narrow opportunity sample): Recruiting 14 teenage psychology classmates from one school suffers researcher/participant bias and low population validity. Fix 3: Recruit a larger stratified or random sample across diverse ages and non-psychology subjects so findings generalise reliably.",
      markScheme: [
        {
          point: "Flaw 1: Unmatched word-list difficulty (4-letter nouns vs 12-letter scientific words) acts as a confounding variable",
          keywords: ["word length", "12-letter", "scientific", "harder", "difficulty", "confound"],
        },
        {
          point: "Fix 1: Use two equivalent word lists matched for syllable length and familiarity",
          keywords: ["matched", "equivalent", "same length", "familiarity"],
        },
        {
          point: "Flaw 2: No counterbalancing in repeated measures (everyone did Cartoons Monday → Nap Tuesday → order effects / demand characteristics)",
          keywords: ["order effect", "everyone did", "monday", "fatigue", "demand characteristic"],
        },
        {
          point: "Fix 2: Apply ABBA counterbalancing (half Nap→Awake, half Awake→Nap)",
          keywords: ["counterbalanc", "abba", "half", "reverse order"],
        },
        {
          point: "Flaw 3: Small, biased opportunity sample of 14 teenage psychology classmates limits population validity / adds demand characteristics",
          keywords: ["opportunity", "psychology class", "14", "population validity", "narrow"],
        },
        {
          point: "Fix 3: Use a larger random or stratified sample from a wider non-psychology target population",
          keywords: ["stratified", "random sampl", "larger sample", "non-psychology", "wider"],
        },
      ],
      commonError:
        "Spotting the flaws without stating the concrete methodological FIX for each one!",
      hints: [
        "Look at the THREE screaming red flags in the stem: (1) 4-letter nouns vs 12-letter science words, (2) Monday→Tuesday order for everyone, (3) 14 psychology classmates!",
        "Pair every Flaw (1m) with its exact Fix (1m) for 6/6!",
      ],
      strategy: "3 × (Identify Methodological Flaw + Concrete Fix)",
    },
  ],
};
