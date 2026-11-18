import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "sleep-and-dreams-quiz-q01",
      question:
        "Approximately how many **minutes** does one typical adult **ultradian sleep cycle** (from NREM Stage 1 through Stage 3 and REM) last?",
      answer: { type: "number", value: 90, tolerance: 5 },
      traps: [
        { spec: { type: "number", value: 24 }, feedback: "24 hours is the daily circadian cycle; one ultradian sleep cycle lasts about 90 minutes." },
        { spec: { type: "number", value: 60 }, feedback: "One ultradian NREM-to-REM sleep cycle averages roughly 90 minutes (1.5 hours), not 60." },
      ],
      solution: ["One adult ultradian sleep cycle lasts approximately **90 minutes** (completing 4–6 cycles across an 8-hour night)."],
      difficulty: "warmup",
      guideRef: "sleep-stages-eeg",
      hints: ["Think of 1.5 hours expressed in minutes (5 cycles fit neatly into 7.5 hours)."],
    },
    {
      kind: "short",
      id: "sleep-and-dreams-quiz-q02",
      question:
        "Name the high-amplitude, low-frequency (`0.5–4 Hz`) EEG waves that dominate **NREM Stage 3 (Slow-Wave Sleep)**.",
      answer: { type: "text", accept: ["delta", "delta waves"] },
      traps: [
        { spec: { type: "text", accept: ["beta", "beta waves"] }, feedback: "Beta waves (13–30 Hz) are fast alert waking waves; deep Slow-Wave Sleep shows delta waves." },
        { spec: { type: "text", accept: ["theta", "theta waves"] }, feedback: "Theta waves characterise lighter NREM Stages 1–2; NREM Stage 3 is dominated by delta waves." },
      ],
      solution: ["**Delta waves** (0.5–4 Hz) have the lowest frequency and highest amplitude, defining deep NREM Stage 3 (SWS)."],
      difficulty: "warmup",
      guideRef: "sleep-stages-eeg",
      hints: ["Use B.A.T.D. (Beta → Alpha → Theta → ___)."],
    },
    {
      kind: "mcq",
      id: "sleep-and-dreams-quiz-q03",
      question:
        "Which endocrine gland secretes the sleep-promoting hormone **melatonin** when signalled by the SCN in darkness?",
      options: [
        "Pineal gland",
        "Adrenal gland",
        "Thyroid gland",
        "Salivary gland",
      ],
      answerIndex: 0,
      explanation:
        "The **pineal gland** secretes **melatonin** at night when stimulated by the hypothalamic SCN; bright light inhibits melatonin release.",
      difficulty: "warmup",
      guideRef: "circadian-rhythms-scn",
      hints: ["Follow R → S → P → M: Retina → SCN → ___ gland → Melatonin."],
    },
    {
      kind: "short",
      id: "sleep-and-dreams-quiz-q04",
      question:
        "What single adjective (contrasting with *exogenous*) describes an **internal** biological pacemaker such as the suprachiasmatic nucleus (SCN)?",
      answer: { type: "text", accept: ["endogenous", "endogenous pacemaker"] },
      traps: [
        { spec: { type: "text", accept: ["exogenous", "exogenous zeitgeber"] }, feedback: "Exogenous means external (like sunlight); internal biological clocks are endogenous." },
      ],
      solution: ["**Endogenous** (*endo* = within) refers to internal biological pacemakers like the hypothalamic SCN."],
      difficulty: "warmup",
      guideRef: "circadian-rhythms-scn",
      hints: ["Starts with 'endo-' (meaning *inside*, opposite of *exo-*)."],
    },
    {
      kind: "mcq",
      id: "sleep-and-dreams-quiz-q05",
      question:
        "According to **Oswald's Restoration Theory**, why do newborn babies spend roughly **50% of their sleep in REM** compared with ~20–25% in adults?",
      options: [
        "Newborns need to hide from savannah predators twice as much as adults",
        "REM sleep supports rapid brain maturation, protein synthesis, and synaptic wiring in infancy",
        "Newborns lack NREM Stage 3 until they turn eighteen years old",
        "REM sleep releases adrenaline so infants stay ready to walk",
      ],
      answerIndex: 1,
      explanation:
        "Oswald argued **REM sleep restores and develops the brain** (neurotransmitters, neural protein synthesis, synaptic plasticity), matching the explosive brain growth of infancy.",
      difficulty: "core",
      guideRef: "theories-of-sleep",
      hints: [
        "In Oswald's model, SWS restores the body whereas REM restores the ___.",
        "What organ is growing fastest in a newborn baby?",
      ],
    },
    {
      kind: "short",
      id: "sleep-and-dreams-quiz-q06",
      question:
        "In a sleep clinic, `24` out of `30` adults diagnosed with chronic insomnia report taking more than `45` minutes to fall asleep initially. What **percentage** of the group shows **sleep-onset** symptoms?",
      answer: { type: "number", value: 80 },
      traps: [
        { spec: { type: "number", value: 20 }, feedback: "20% (`6 ÷ 30`) is the remainder without onset delay; `(24 ÷ 30) × 100 = 80%`." },
      ],
      solution: ["Percentage = `(24 ÷ 30) × 100 = 0.8 × 100 = 80%`."],
      difficulty: "core",
      guideRef: "sleep-disorders-hygiene",
      hints: ["Simplify `24 / 30` by dividing top and bottom by `6` (`= 4 / 5`).", "Convert `4 / 5` to a percentage."],
    },
    {
      kind: "short",
      id: "sleep-and-dreams-quiz-q07",
      question:
        "In **Freud's (1900) dream theory**, what word names the literal surface storyline and images a dreamer consciously recalls upon waking?",
      answer: { type: "text", accept: ["manifest", "manifest content"] },
      traps: [
        { spec: { type: "text", accept: ["latent", "latent content"] }, feedback: "Latent content is the hidden unconscious wish underneath; the recalled surface story is manifest content." },
      ],
      solution: ["**Manifest content** (*M = Movie*) is the remembered surface plot; **latent content** is the disguised unconscious wish."],
      difficulty: "warmup",
      guideRef: "dream-theories",
      hints: ["Use M = Movie on screen (recalled storyline) vs L = Locked wish."],
    },
    {
      kind: "short",
      id: "sleep-and-dreams-quiz-q08",
      question:
        "In **Hobson & McCarley's (1977) Activation-Synthesis Theory**, which specific **brainstem** structure generates random electrical bursts during REM sleep?",
      answer: { type: "text", accept: ["pons", "the pons"] },
      traps: [
        { spec: { type: "text", accept: ["forebrain", "cerebral cortex"] }, feedback: "The forebrain/cerebral cortex performs the Synthesis (story-weaving); the brainstem activation comes from the pons." },
      ],
      solution: ["Cholinergic neurons in the **pons** (brainstem) fire PGO bursts upward during REM (**activation**), which the forebrain **synthesises**."],
      difficulty: "core",
      guideRef: "dream-theories",
      hints: ["Four-letter brainstem region starting with 'p'.", "Gives the 'P' in PGO (ponto-geniculo-occipital) waves!"],
    },
    {
      kind: "written",
      id: "sleep-and-dreams-quiz-q09",
      question:
        "Explain **why** sleepwalking (**somnambulism**) occurs during **NREM Stage 3 (Slow-Wave Sleep)** rather than during **REM sleep**. [2 marks]",
      marks: 2,
      modelAnswer:
        "During REM sleep, brainstem motor inhibition produces skeletal muscle atonia (temporary paralysis), making walking physically impossible. By contrast, during NREM Stage 3 Slow-Wave Sleep skeletal muscle tone remains active, so an incomplete arousal allows motor routines while prefrontal conscious awareness stays asleep.",
      markScheme: [
        {
          point: "Explains REM sleep involves skeletal muscle atonia / paralysis preventing movement",
          keywords: ["atonia", "paralys", "inhibit"],
        },
        {
          point: "Explains NREM Stage 3 / SWS preserves muscle tone during incomplete arousal",
          keywords: ["muscle tone", "incomplete arousal", "partial arousal", "active"],
        },
      ],
      commonError: "Assuming sleepwalkers are acting out vivid REM dreams.",
      difficulty: "core",
      guideRef: "sleep-disorders-hygiene",
      hints: [
        "What happens to skeletal muscles during REM paradoxical sleep?",
        "Why are legs able to move during NREM Stage 3 incomplete arousal?",
      ],
    },
    {
      kind: "written",
      id: "sleep-and-dreams-quiz-q10",
      question:
        "Outline **two** key findings from **Iorio, Sommantico & Parrello's (2020)** study of dreaming during the COVID-19 lockdown in Italy. [2 marks]",
      marks: 2,
      modelAnswer:
        "First, women and participants directly affected by COVID-19 reported higher dream recall frequency alongside stronger negative emotions (fear, sadness, anxiety) and vividness. Second, qualitative dream themes reflected waking lockdown anxieties such as dangerous enclosed spaces, contagion/illness, separation from loved ones, and mourning.",
      markScheme: [
        {
          point: "States group/quantitative finding: women or COVID-exposed reported higher recall / negative emotions / vividness",
          keywords: ["women", "female", "negative emotion", "anxiety", "fear", "vivid", "higher recall"],
        },
        {
          point: "States qualitative manifest theme: contagion/illness, enclosed/trapped spaces, separation, or mourning",
          keywords: ["contagion", "enclosed", "trapped", "confinement", "separation", "mourning", "illness"],
        },
      ],
      commonError: "Writing vague statements like 'people had weird dreams' without naming negative emotions and pandemic themes (contagion/confinement).",
      difficulty: "core",
      guideRef: "dream-theories",
      hints: [
        "Mention who reported higher recall and negative emotions (fear/anxiety).",
        "Name concrete lockdown dream themes found in their *Most Recent Dream* accounts.",
      ],
    },
  ],
  papers: [
    {
      id: "sleep-and-dreams-p1",
      title: "Practice Paper 1: Sleep Stages, Clocks & Theories",
      questions: [
        {
          kind: "short",
          id: "sleep-and-dreams-p1-q01",
          question:
            "An adult sleeps for `7.5` hours (`450` minutes) and completes `90`-minute ultradian cycles back-to-back. How many **complete ultradian cycles** occur during those `450` minutes?",
          answer: { type: "number", value: 5 },
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "6 cycles × 90 min would take 540 minutes (9 hours); `450 ÷ 90 = 5`." },
          ],
          solution: ["Cycles = `450 ÷ 90 = 5` complete ultradian sleep cycles."],
          difficulty: "warmup",
          guideRef: "sleep-stages-eeg",
          hints: ["Divide total sleep minutes (`450`) by `90` minutes per cycle."],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p1-q02",
          question:
            "During an `8`-hour (`480`-minute) sleep recording, polysomnography shows a participant spent `45%` in NREM Stage 2, `20%` in NREM Stage 3 (SWS), `25%` in REM sleep, and the rest in NREM Stage 1. How many **minutes** did she spend in **NREM Stage 1**?",
          answer: { type: "number", value: 48 },
          traps: [
            { spec: { type: "number", value: 10 }, feedback: "10% is the percentage spent in Stage 1 (`100 − 90`), not the number of minutes out of 480." },
            { spec: { type: "number", value: 120 }, feedback: "120 minutes (`25%` of 480) is REM sleep; Stage 1 is the remaining `10%` of 480." },
          ],
          solution: [
            "Other stages sum to `45% + 20% + 25% = 90%`, so NREM Stage 1 = `100% − 90% = 10%`.",
            "`10%` of `480` minutes = `0.10 × 480 = 48` minutes.",
          ],
          difficulty: "core",
          guideRef: "sleep-stages-eeg",
          hints: [
            "Find the percentage left over for Stage 1 (`100% − (45% + 20% + 25%)`).",
            "Calculate `10%` of `480` minutes.",
          ],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p1-q03",
          question:
            "What two-word physiological term names the near-total **brainstem paralysis of skeletal muscles** during REM sleep that stops dreamers from physically acting out dreams?",
          answer: { type: "text", accept: ["muscle atonia", "atonia", "sleep paralysis", "rem atonia"] },
          solution: ["**Muscle atonia** is the temporary inhibition of spinal motor neurons during REM sleep."],
          commonError: "Writing insomnia or somnambulism instead of muscle atonia (the normal protective brainstem paralysis during REM sleep).",
          difficulty: "core",
          guideRef: "sleep-stages-eeg",
          hints: ["Two words: 'muscle ___' (from Greek *a-tonia* = without muscle tone).", "Explains why REM is paradoxical."],
        },
        {
          kind: "written",
          id: "sleep-and-dreams-p1-q04",
          question:
            "Compare **NREM Stage 3 (Slow-Wave Sleep)** and **REM sleep** across **two** physiological measures recorded during polysomnography (such as EEG waves, eye movements, or muscle tone). [4 marks]",
          marks: 4,
          modelAnswer:
            "First, on an EEG recording, NREM Stage 3 exhibits slow, low-frequency (0.5–4 Hz), high-amplitude delta waves, whereas REM sleep shows fast, high-frequency, low-amplitude desynchronised waves resembling an awake brain. Second, on EMG and EOG sensors, NREM Stage 3 retains moderate skeletal muscle tone with minimal eye movement, whereas REM sleep displays near-total skeletal muscle atonia (paralysis) paired with rapid darting eye movements.",
          markScheme: [
            {
              point: "Describes NREM Stage 3 EEG accurately (low-frequency / high-amplitude delta waves)",
              keywords: ["delta", "high-amplitude", "high amplitude", "low-frequency", "low frequency"],
            },
            {
              point: "Contrasts REM EEG accurately (fast / low-amplitude / beta-like / waking-like waves)",
              keywords: ["fast", "waking", "awake", "beta", "desynchronis", "low-amplitude"],
            },
            {
              point: "Describes NREM Stage 3 muscle tone or eye activity (muscle tone preserved / no rapid eye darts)",
              keywords: ["muscle tone", "retained", "preserved", "active", "no rapid"],
            },
            {
              point: "Contrasts REM muscle atonia/paralysis or rapid eye movements",
              keywords: ["atonia", "paralys", "rapid eye"],
            },
          ],
          commonError: "Describing only dreaming subjective feelings without naming concrete physiological EEG/EOG/EMG differences.",
          difficulty: "core",
          guideRef: "sleep-stages-eeg",
          hints: [
            "Measure 1 (EEG): Contrast Stage 3 delta waves against REM's fast waking-like waves.",
            "Measure 2 (EMG/EOG): Contrast Stage 3 muscle tone against REM muscle atonia and rapid eye bursts.",
          ],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p1-q05",
          question:
            "What `3`-letter abbreviation (or full anatomical name) identifies the master **endogenous circadian pacemaker** located in the hypothalamus directly above the optic chiasm?",
          answer: { type: "text", accept: ["scn", "suprachiasmatic nucleus", "the scn"] },
          traps: [
            { spec: { type: "text", accept: ["pfc", "prefrontal cortex"] }, feedback: "PFC is the prefrontal cortex (Working Memory); the hypothalamic master clock is the SCN (suprachiasmatic nucleus)." },
          ],
          solution: ["The **SCN (suprachiasmatic nucleus)** in the hypothalamus is the master circadian clock."],
          difficulty: "warmup",
          guideRef: "circadian-rhythms-scn",
          hints: ["Stands for **S**upra**c**hiasmatic **N**ucleus."],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p1-q06",
          question:
            "In **Ralph et al.'s (1990)** mutant hamster transplant experiment, donor hamsters carried a genetic mutation giving them a `20`-hour endogenous cycle instead of a normal `24`-hour cycle. By what **percentage** was the mutant cycle shorter than a normal `24`-hour cycle? Give your answer to **1 decimal place**.",
          answer: { type: "number", value: 16.7, tolerance: 0.05 },
          traps: [
            { spec: { type: "number", value: 4 }, feedback: "4 hours is the raw time difference (`24 − 20`); divide 4 by 24 and multiply by 100." },
            { spec: { type: "number", value: 20 }, feedback: "`4 ÷ 20 = 20%` divides by the mutant value instead of the original 24-hour baseline (`4 ÷ 24 = 16.7%`)." },
          ],
          solution: [
            "Difference = `24 − 20 = 4` hours.",
            "Percentage shorter = `(4 ÷ 24) × 100 = (1 ÷ 6) × 100 ≈ 16.7%`.",
          ],
          difficulty: "core",
          guideRef: "circadian-rhythms-scn",
          hints: [
            "Find the reduction (`24 − 20 = 4` hours) and divide by the normal baseline (`24` hours).",
            "`(4 ÷ 24) × 100` rounded to 1 d.p.",
          ],
        },
        {
          kind: "written",
          id: "sleep-and-dreams-p1-q07",
          question:
            "Nurse Tan rotates onto a hospital night shift (`10:00 pm – 7:00 am`) under bright ward lights, drives home in bright tropical morning sunshine at `7:30 am`, and struggles to sleep past `11:00 am` in her bedroom. Using **endogenous pacemakers**, **melatonin**, and **exogenous zeitgebers**, explain why Nurse Tan suffers daytime sleep disruption. [4 marks]",
          marks: 4,
          modelAnswer:
            "Bright hospital ward lights overnight and intense tropical sunlight on her 7:30 am commute act as powerful exogenous zeitgebers hitting her retina. This light input signals her endogenous pacemaker — the hypothalamic suprachiasmatic nucleus (SCN) — that it is daytime, causing the SCN to inhibit her pineal gland from secreting melatonin. With suppressed daytime melatonin and rising circadian body temperature, her internal clock becomes desynchronised from her work schedule, cutting her daytime sleep short.",
          markScheme: [
            {
              point: "Identifies bright ward/morning sunlight as an exogenous zeitgeber hitting the retina",
              keywords: ["zeitgeber", "exogenous", "retina"],
            },
            {
              point: "Names the hypothalamic SCN as the endogenous pacemaker receiving the light signal",
              keywords: ["scn", "suprachiasmatic", "endogenous", "pacemaker"],
            },
            {
              point: "Explains SCN inhibits pineal gland secretion of melatonin in bright light",
              keywords: ["inhibit", "suppress", "pineal", "melatonin"],
            },
            {
              point: "Links low melatonin / circadian desynchronisation to difficulty staying asleep at 11:00 am",
              keywords: ["desynchronis", "alert", "out of phase", "wake"],
            },
          ],
          commonError: "Saying light 'destroys melatonin in the blood' without naming the SCN and pineal gland pathway.",
          difficulty: "core",
          guideRef: "circadian-rhythms-scn",
          hints: [
            "Classify morning sunlight as an exogenous zeitgeber and the SCN as the endogenous pacemaker.",
            "Trace what bright morning light on her drive home tells her SCN and pineal gland to do to melatonin!",
          ],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p1-q08",
          question:
            "According to **Oswald's Restoration Theory**, which pituitary hormone surges during **NREM Stage 3 (Slow-Wave Sleep)** to stimulate protein synthesis and physical tissue repair?",
          answer: { type: "text", accept: ["growth hormone", "human growth hormone", "gh", "hgh"] },
          traps: [
            { spec: { type: "text", accept: ["melatonin"] }, feedback: "Melatonin is secreted by the pineal gland to initiate sleepiness; physical tissue repair in SWS is driven by Growth Hormone." },
          ],
          solution: ["**Growth Hormone (GH)** surges during deep Slow-Wave Sleep to promote protein synthesis and cellular/muscle repair."],
          difficulty: "warmup",
          guideRef: "theories-of-sleep",
          hints: ["Two words (`G___ H___`) — promotes cell growth and protein repair during deep SWS."],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p1-q09",
          question:
            "In **Allison & Cicchetti's (1976)** comparative data, a cave-roosting brown bat sleeps `19.8` hours per day whereas an exposed grazing horse sleeps `2.9` hours per day. How many **more hours per day** does the bat sleep than the horse?",
          answer: { type: "number", value: 16.9 },
          traps: [
            { spec: { type: "number", value: 17.1 }, feedback: "Check tenths column carefully: `19.8 − 2.9 = 16.9` hours." },
          ],
          solution: ["Difference = `19.8 − 2.9 = 16.9` hours per day."],
          difficulty: "warmup",
          guideRef: "theories-of-sleep",
          hints: ["Subtract `2.9` from `19.8`."],
        },
        {
          kind: "written",
          id: "sleep-and-dreams-p1-q10",
          question:
            "Compare **Oswald's Restoration Theory** and **Meddis's Evolutionary Theory** of sleep, giving **one piece of supporting evidence** for each theory. [4 marks]",
          marks: 4,
          modelAnswer:
            "Oswald's Restoration Theory is a physiological account proposing that Slow-Wave Sleep repairs body tissues via Growth Hormone and protein synthesis while REM sleep restores brain neurotransmitters; this is supported by newborn infants spending ~50% of sleep in REM during rapid brain growth (and Randy Gardner's SWS/REM rebound after 264 hours awake). By contrast, Meddis's Evolutionary Theory is an ecological survival account arguing sleep conserves metabolic energy and keeps animals immobile and hidden from predators; this is supported by Allison & Cicchetti (1976) showing safe predators like lions sleep ~15 hours while exposed grazing prey like giraffes sleep only ~2 hours.",
          markScheme: [
            {
              point: "Outlines Oswald's Restoration Theory accurately (SWS physical/GH repair + REM brain/neurotransmitter repair)",
              keywords: ["growth hormone", "protein", "neurotransmitter", "physical", "tissue"],
            },
            {
              point: "Gives valid evidence for Restoration (newborn 50% REM, Randy Gardner 264h rebound, or Shapiro marathon runners)",
              keywords: ["infant", "newborn", "50%", "gardner", "rebound", "marathon", "shapiro"],
            },
            {
              point: "Outlines Meddis's Evolutionary Theory accurately (energy conservation + predator avoidance/immobility)",
              keywords: ["energy conservation", "predator", "immob", "survival", "hidden"],
            },
            {
              point: "Gives valid comparative species evidence for Evolutionary Theory (Allison & Cicchetti predators vs open prey)",
              keywords: ["allison", "giraffe", "horse", "lion", "bat", "prey"],
            },
          ],
          commonError: "Describing only one theory in detail and forgetting empirical evidence for the second theory.",
          difficulty: "core",
          guideRef: "theories-of-sleep",
          hints: [
            "State Oswald's claim (SWS body + REM brain) + 1 study/fact (infants or Gardner).",
            "State Meddis's claim (energy + predator avoidance) + 1 comparative species finding (lions/bats vs giraffes/horses).",
          ],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p1-q11",
          question:
            "What clinical term (also called *sleepwalking*) refers to the NREM Stage 3 parasomnia characterised by motor walking during Slow-Wave Sleep and complete amnesia upon waking?",
          answer: { type: "text", accept: ["somnambulism"] },
          traps: [
            { spec: { type: "text", accept: ["insomnia"] }, feedback: "Insomnia is difficulty initiating or maintaining sleep; sleepwalking's clinical name is somnambulism." },
          ],
          solution: ["**Somnambulism** (from Latin *somnus* = sleep + *ambulare* = to walk) is the clinical name for NREM Stage 3 sleepwalking."],
          difficulty: "core",
          guideRef: "sleep-disorders-hygiene",
          hints: ["From Latin *somnus* (sleep) + *ambulare* (walk).", "Starts with 'somnam-'."],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p1-q12",
          question:
            "In **Freud's (1900)** dream theory, what single collective term names the unconscious censorship mechanisms (condensation, displacement, symbolism) that disguise **latent content** into **manifest content**?",
          answer: { type: "text", accept: ["dreamwork", "dream-work", "dream work"] },
          solution: ["**Dreamwork** transforms threatening unconscious latent wishes into disguised manifest dream imagery."],
          commonError: "Naming only one sub-mechanism (like condensation or displacement) instead of the collective Freudian term dreamwork.",
          difficulty: "core",
          guideRef: "dream-theories",
          hints: [
            "Think of the 'work' the ego's censor does while you dream.",
            "Compound word starting with 'dream___'.",
          ],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p1-q13",
          question:
            "How many **Italian participants** completed the online lockdown dream survey in **Iorio, Sommantico & Parrello (2020)**?",
          answer: { type: "number", value: 796 },
          traps: [
            { spec: { type: "number", value: 103 }, feedback: "103 participants is Murdock's (1962) memory study; Iorio et al. (2020) surveyed 796 Italian participants." },
          ],
          solution: ["**796** Italian adults/students completed the *Most Recent Dream* pandemic survey in Iorio et al. (2020)."],
          difficulty: "core",
          guideRef: "dream-theories",
          hints: ["Just four short of `800` (`79_`).", "`796` Italian participants."],
        },
        {
          kind: "written",
          id: "sleep-and-dreams-p1-q14",
          question:
            "Evaluate **Iorio, Sommantico & Parrello's (2020)** COVID-19 lockdown dream study by explaining **one strength** and **one limitation**. [4 marks]",
          marks: 4,
          modelAnswer:
            "One major strength is high ecological validity and mixed-methods richness: studying 796 Italians during an authentic national lockdown combined quantitative emotion ratings with qualitative 'Most Recent Dream' narratives to capture real collective trauma. However, a key limitation is sampling and retrospective self-report bias: recruiting volunteers online produced a 73% female Italian sample (limiting generalisability to men and other cultures), and waking dream reports remain vulnerable to rapid forgetting and social desirability editing.",
          markScheme: [
            {
              point: "Identifies strength: real-world lockdown ecological validity or mixed quantitative + qualitative data / large sample",
              keywords: ["ecological validity", "mixed", "quantitative", "qualitative", "real-world", "796"],
            },
            {
              point: "Explains why this strengthens conclusions (statistical reliability + rich thematic insight into real trauma)",
              keywords: ["statist", "rich", "theme", "authentic", "trauma"],
            },
            {
              point: "Identifies limitation: retrospective waking self-report distortion OR volunteer/gender/ethnocentric sampling bias",
              keywords: ["self-report", "retrospective", "volunteer", "female", "gender", "italian", "ethnocentric"],
            },
            {
              point: "Explains impact on validity or generalisability (forgetting/social desirability or poor generalisability to men/other cultures)",
              keywords: ["generalis", "generaliz", "forget", "social desirability", "men", "other cultures"],
            },
          ],
          commonError: "Critiquing Iorio et al. as if it were an artificial laboratory EEG study when it was an online survey.",
          difficulty: "core",
          guideRef: "dream-theories",
          hints: [
            "Strength: Real-world pandemic setting + combining numerical scales with open dream narratives.",
            "Limitation: Online volunteer sample (73% female Italians) + waking self-report memory distortion.",
          ],
        },
        {
          kind: "written",
          id: "sleep-and-dreams-p1-q15",
          question:
            "Contrast **Freud's (1900) Psychoanalytic Dream Theory** with **Hobson & McCarley's (1977) Activation-Synthesis Theory** on **where dreams originate** and **whether dream symbols carry hidden psychological meaning**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Freud argued dreams originate top-down in the unconscious mind (repressed id wishes) and carry deep hidden psychological meaning: dreamwork disguises taboo latent content into symbolic manifest content to protect sleep. Conversely, Hobson & McCarley argued dreams originate bottom-up from random cholinergic electrical firing in the brainstem pons during REM sleep (activation), and carry no disguised unconscious wish — bizarreness simply reflects the forebrain cortex doing its best to synthesise chaotic neural signals into a coherent story.",
          markScheme: [
            {
              point: "States Freud's origin: unconscious repressed wishes / id impulses",
              keywords: ["unconscious", "wish", "repressed", "id"],
            },
            {
              point: "Explains Freud's meaning view: manifest symbols disguise meaningful latent content via dreamwork",
              keywords: ["latent", "manifest", "dreamwork", "disguis", "symbolic"],
            },
            {
              point: "States Hobson & McCarley's origin: random REM brainstem / pons electrical activation",
              keywords: ["pons", "brainstem", "random", "rem"],
            },
            {
              point: "Explains Activation-Synthesis meaning view: no hidden wish; forebrain cortex synthesises chaotic signals",
              keywords: ["forebrain", "cortex", "synthes", "no hidden", "chaotic"],
            },
          ],
          commonError: "Describing Freud well while vaguely calling Activation-Synthesis 'brain chemistry' without naming the pons and forebrain.",
          difficulty: "challenge",
          guideRef: "dream-theories",
          hints: [
            "Origin: Unconscious repressed wishes (Freud) vs brainstem pons REM spikes (Hobson & McCarley).",
            "Meaning: Disguised latent wish via dreamwork vs forebrain best-fit synthesis of random signals.",
            "Use exact terminology for both sides.",
          ],
        },
      ],
    },
    {
      id: "sleep-and-dreams-p2",
      title: "Practice Paper 2: Disorders, Hygiene, Methods & Synthesis",
      questions: [
        {
          kind: "short",
          id: "sleep-and-dreams-p2-q01",
          question:
            "Which NREM sleep stage (`1`, `2`, or `3`) accounts for the **largest percentage** (`~45–50%`) of a healthy adult's total night sleep and features **sleep spindles** (`12–14 Hz`)?",
          answer: { type: "number", value: 2 },
          traps: [
            { spec: { type: "number", value: 3 }, feedback: "Stage 3 (SWS) is the deepest stage (~20–25%, delta waves), whereas Stage 2 occupies ~45–50% and shows sleep spindles." },
          ],
          solution: ["**NREM Stage 2** makes up roughly **45–50%** of adult sleep and is marked by 12–14 Hz sleep spindles and K-complexes."],
          difficulty: "warmup",
          guideRef: "sleep-stages-eeg",
          hints: ["Stage 1 is ~5% and Stage 3 is ~20–25% — which middle NREM stage has sleep spindles and takes nearly half the night?"],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p2-q02",
          question:
            "In **Dement & Kleitman (1957)**, one participant had `6` REM periods across the night lasting `9, 14, 19, 24, 30, and 36` minutes. Calculate the **mean** REM period duration in minutes.",
          answer: { type: "number", value: 22 },
          traps: [
            { spec: { type: "number", value: 27 }, feedback: "27 minutes is the range (`36 − 9`), not the mean." },
            { spec: { type: "number", value: 132 }, feedback: "132 minutes is the total REM sum — divide by 6 periods to find the mean." },
          ],
          solution: [
            "Total REM minutes = `9 + 14 + 19 + 24 + 30 + 36 = 132` minutes.",
            "Mean REM duration = `132 ÷ 6 = 22` minutes (note how REM lengthens steadily across cycles!).",
          ],
          difficulty: "core",
          guideRef: "sleep-stages-eeg",
          hints: ["Add all six durations (`9 + 14 + 19 + 24 + 30 + 36`).", "Divide the sum (`132`) by `6`."],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p2-q03",
          question:
            "What German loanword (meaning *'time-giver'*) is used in CIE 0266 Psychology for an **exogenous environmental cue** like morning daylight that resets our circadian clock?",
          answer: { type: "text", accept: ["zeitgeber", "zeitgebers", "exogenous zeitgeber"] },
          solution: ["**Zeitgeber** (*zeit* = time, *geber* = giver) names external resetting cues such as light, meals, and social routines."],
          commonError: "Confusing an exogenous zeitgeber (external environmental cue like daylight) with an endogenous pacemaker (internal SCN clock).",
          difficulty: "warmup",
          guideRef: "circadian-rhythms-scn",
          hints: ["Starts with the letter 'z' — literally 'time-giver' in German."],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p2-q04",
          question:
            "A student drinks a double espresso (`120 mg` caffeine) at `1:00 pm`. Assuming a `5`-hour half-life, how many **milligrams (mg)** of caffeine remain in his body `10` hours later at `11:00 pm`?",
          answer: { type: "number", value: 30 },
          traps: [
            { spec: { type: "number", value: 60 }, feedback: "60 mg remains after 5 hours (6:00 pm); 10 hours is TWO 5-hour half-lives, so halve 60 mg once more!" },
          ],
          solution: [
            "`10` hours = `2` half-lives (`10 ÷ 5 = 2`).",
            "After 5 h (6:00 pm): `120 ÷ 2 = 60 mg`.",
            "After 10 h (11:00 pm): `60 ÷ 2 = 30 mg`.",
          ],
          difficulty: "core",
          guideRef: "sleep-disorders-hygiene",
          hints: [
            "How many 5-hour half-lives fit into 10 hours (`1:00 pm` to `11:00 pm`)?",
            "Halve `120` twice (`120 → 60 → ?`).",
          ],
        },
        {
          kind: "written",
          id: "sleep-and-dreams-p2-q05",
          question:
            "Amira (age 15) complains she cannot fall asleep before 2:00 am on school nights. She drinks bubble tea (black tea with caffeine) at 8:00 pm, plays competitive video games on her phone in bed until 1:00 am, and sleeps until 1:00 pm every Saturday and Sunday. Recommend **three distinct sleep-hygiene changes** for Amira and explain the **biological or psychological reason** why each change will help. [6 marks]",
          marks: 6,
          modelAnswer:
            "First, Amira should avoid caffeinated black bubble tea after mid-afternoon because caffeine blocks drowsiness adenosine receptors for hours (5-hour half-life), keeping her nervous system aroused past midnight. Second, she should switch off her phone screen at least 60–90 minutes before bed and game outside the bedroom: eliminating blue light stops her SCN from inhibiting pineal melatonin release, while stimulus control re-associates her bed exclusively with sleep rather than competitive arousal. Third, she should keep a consistent wake-up time on weekends instead of sleeping until 1:00 pm, entraining her endogenous SCN circadian clock so Sunday-night sleep onset is not phase-delayed.",
          markScheme: [
            {
              point: "Recommends cutting evening caffeinated bubble tea (6+ hours before bed)",
              keywords: ["caffeine", "bubble tea", "afternoon"],
            },
            {
              point: "Explains caffeine mechanism (long half-life / blocks adenosine / physiological arousal)",
              keywords: ["adenosine", "half-life", "stimulant", "arousal"],
            },
            {
              point: "Recommends stopping pre-bed phone screens AND/OR removing gaming from the bed",
              keywords: ["blue light", "screen", "60", "90", "only for sleep"],
            },
            {
              point: "Explains melatonin (SCN/pineal) OR classical conditioning stimulus-control mechanism",
              keywords: ["melatonin", "pineal", "stimulus control", "condition"],
            },
            {
              point: "Recommends fixed/consistent morning wake time across weekends",
              keywords: ["consistent", "fixed", "weekend", "same time"],
            },
            {
              point: "Explains SCN circadian entrainment / avoiding social jet lag phase delay",
              keywords: ["scn", "suprachiasmatic", "circadian", "entrain", "phase"],
            },
          ],
          commonError: "Listing three sensible tips (no tea, no phone, wake early) without explaining the biology/psychology (adenosine, melatonin, SCN, stimulus control) for the second half of the marks!",
          difficulty: "core",
          guideRef: "sleep-disorders-hygiene",
          hints: [
            "Tip 1 (8 pm bubble tea): Link caffeine half-life / adenosine to arousal.",
            "Tip 2 (1 am phone in bed): Link blue light → SCN → pineal melatonin (and stimulus control).",
            "Tip 3 (1 pm weekend lie-in): Link consistent wake time to entraining the SCN circadian clock.",
          ],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p2-q06",
          question:
            "What term distinguishes insomnia that arises **on its own** (e.g. learned bedtime hyperarousal with no other illness) from *secondary* insomnia caused by pain or medical illness?",
          answer: { type: "text", accept: ["primary", "primary insomnia", "idiopathic"] },
          traps: [
            { spec: { type: "text", accept: ["comorbid", "secondary"] }, feedback: "Secondary/comorbid insomnia is caused by another medical or psychiatric condition; standalone insomnia is primary insomnia." },
          ],
          solution: ["**Primary insomnia** occurs independently rather than as a symptom of another medical or psychiatric condition."],
          difficulty: "warmup",
          guideRef: "sleep-disorders-hygiene",
          hints: ["Opposite of *secondary* ('first' / standalone)."],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p2-q07",
          question:
            "In **Freud's dreamwork**, what term describes shifting intense emotion away from a threatening taboo target onto a **safe, trivial, neutral object** in the dream?",
          answer: { type: "text", accept: ["displacement", "dream displacement"] },
          traps: [
            { spec: { type: "text", accept: ["condensation"] }, feedback: "Condensation merges multiple ideas into one composite image; shifting emotion onto a neutral substitute is displacement." },
          ],
          solution: ["**Displacement** redirects emotional charge from the dangerous latent wish onto an innocent manifest detail."],
          difficulty: "core",
          guideRef: "dream-theories",
          hints: [
            "Do not confuse with *condensation* (fusing multiple figures).",
            "Think of redirecting/moving emotion onto a safer substitute ('dis-___').",
          ],
        },
        {
          kind: "written",
          id: "sleep-and-dreams-p2-q08",
          question:
            "After staying awake for `264` hours (`11` days), **Randy Gardner** slept for `14` hours and `40` minutes on his first recovery night, showing a huge **rebound** in **Slow-Wave Sleep** and **REM sleep** rather than recovering every missed hour equally (`1` hour for `1` hour). Explain how **both** his rebound pattern **and** his lack of permanent physical harm help us evaluate **Oswald's Restoration Theory**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Gardner's selective SWS and REM rebound strongly supports Oswald's Restoration Theory: rather than making up light NREM Stages 1–2, his brain prioritised recovering deep Slow-Wave Sleep (physical/cortical repair) and REM sleep (neurotransmitter replenishment), proving those stages serve essential restorative functions. However, the fact that Gardner recovered quickly within days with zero permanent organ damage — and only needed ~15 hours rather than all ~88 lost hours of sleep — challenges extreme versions of Restoration Theory (supporting Horne's view that much of lighter NREM is 'optional' rather than strictly vital bodily tissue repair) and suffers from low generalisability as an n = 1 teenager case study.",
          markScheme: [
            {
              point: "Explains SWS & REM rebound supports Oswald (brain selectively prioritises restorative stages over light sleep)",
              keywords: ["rebound", "selective", "prioritis"],
            },
            {
              point: "Links SWS to physical/GH repair and REM to brain/neurotransmitter restoration",
              keywords: ["neurotransmitter", "growth hormone", "tissue", "brain restoration", "physical"],
            },
            {
              point: "Explains challenge: no permanent physical harm / recovered in ~15h rather than all ~88 lost hours",
              keywords: ["no permanent", "all lost hours", "optional", "horne", "14", "15"],
            },
            {
              point: "Adds methodological evaluation: single case study (n = 1) limits generalisability",
              keywords: ["case study", "single", "n = 1", "generalis", "generaliz"],
            },
          ],
          commonError: "Mentioning only that Gardner hallucinated while awake without analysing what his recovery sleep rebound proved!",
          difficulty: "challenge",
          guideRef: "theories-of-sleep",
          hints: [
            "Support: Why did his brain selectively boost SWS and REM % on Night 1 instead of light Stage 1?",
            "Challenge: Did he need 88 hours of recovery sleep or suffer permanent muscle breakdown? Also note `n = 1`!",
            "Connect both points directly to Oswald.",
          ],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p2-q09",
          question:
            "In a hospital study of `50` paediatric sleepwalkers, `32` had at least one parent who also sleepwalked in childhood. Express the proportion of sleepwalkers **with** a parental history to those **without** a parental history as a **ratio in its simplest form**.",
          answer: { type: "ratio", parts: [16, 9], simplest: true },
          traps: [
            { spec: { type: "ratio", parts: [16, 25] }, feedback: "`16 : 25` compares those WITH history (`32`) to the TOTAL (`50`); compare WITH (`32`) to WITHOUT (`50 − 32 = 18`)!" },
            { spec: { type: "ratio", parts: [9, 16] }, feedback: "Keep the requested order: WITH parental history first, then WITHOUT (`16 : 9`)." },
          ],
          solution: [
            "With parental history = `32`; without parental history = `50 − 32 = 18`.",
            "Ratio = `32 : 18`. Divide both parts by `2` → `16 : 9`.",
          ],
          difficulty: "core",
          guideRef: "sleep-disorders-hygiene",
          hints: [
            "First find how many had NO parental history (`50 − 32 = 18`).",
            "Simplify `32 : 18` by dividing both sides by `2`.",
          ],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p2-q10",
          question:
            "In **Hobson & McCarley's Activation-Synthesis Theory**, which higher brain region (**two words** or single region name) weaves random brainstem activation into a coherent dream narrative?",
          answer: {
            type: "text",
            accept: ["forebrain", "cerebral cortex", "the forebrain", "the cerebral cortex", "cortex", "neocortex"],
          },
          traps: [
            { spec: { type: "text", accept: ["pons", "brainstem"] }, feedback: "The pons/brainstem generates the initial random Activation; narrative Synthesis is performed by the forebrain / cerebral cortex." },
          ],
          solution: ["The **forebrain (cerebral cortex)** synthesises chaotic REM signals from the pons using stored memories and schemas."],
          difficulty: "warmup",
          guideRef: "dream-theories",
          hints: ["Pons = Activation; which upper brain layer (`fore___` or `cerebral ___`) performs Synthesis?"],
        },
        {
          kind: "written",
          id: "sleep-and-dreams-p2-q11",
          question:
            "Dr Lim wants to test experimentally whether listening to `45` minutes of slow `60 bpm` classical music before bed reduces **sleep-onset latency** in university students compared with `45` minutes of silence. State:\n1. An operationalised **non-directional (two-tailed) hypothesis**.\n2. Why recording sleep onset with **EEG polysomnography** is more **valid** than asking students next morning *'How many minutes did you take to fall asleep?'* [4 marks]",
          marks: 4,
          modelAnswer:
            "Non-directional hypothesis: There will be a significant difference in sleep-onset latency (measured in minutes from lights-out to the first appearance of NREM Stage 1/2 EEG theta/spindles) between university students who listen to 45 minutes of 60 bpm classical music before bed and those who sit in 45 minutes of silence. Objective EEG polysomnography has higher internal validity than morning self-report because sleepers cannot consciously observe the exact minute they lose awareness, eliminating retrospective estimation guesswork and demand characteristics.",
          markScheme: [
            {
              point: "Writes a non-directional (two-tailed) hypothesis predicting a 'significant difference' without stating direction",
              keywords: ["difference", "differ", "whether"],
            },
            {
              point: "Operationalises both IV (45 min 60 bpm music vs silence) and DV (minutes to fall asleep / EEG onset)",
              keywords: ["minutes", "lights-out", "45", "silence"],
            },
            {
              point: "Explains EEG provides an objective physiological marker of exact sleep transition",
              keywords: ["objective", "physiological", "theta", "spindle", "exact"],
            },
            {
              point: "Explains morning self-report suffers from unconsciousness estimation error / demand characteristics / social desirability",
              keywords: ["self-report", "guess", "estimate", "demand characteristics", "subjective", "unconscious"],
            },
          ],
          commonError: "Writing a directional hypothesis ('will fall asleep faster') when the question explicitly asks for a non-directional (two-tailed) hypothesis!",
          difficulty: "core",
          guideRef: "sleep-stages-eeg",
          hints: [
            "Non-directional = *'There will be a significant difference in [operationalised DV] between [Condition 1] and [Condition 2]'* — do NOT say 'faster' or 'fewer minutes'!",
            "Why can't a human accurately time the exact minute they fall unconscious on a self-report sheet?",
          ],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p2-q12",
          question:
            "In **Siffre's** cave isolation study, suppose his free-running circadian cycle averaged `24.8` hours over `15` cycles. How many **extra hours** beyond `15` normal `24.0`-hour days had elapsed on the surface?",
          answer: { type: "number", value: 12 },
          traps: [
            { spec: { type: "number", value: 0.8 }, feedback: "0.8 hours is the extra drift on ONE cycle — multiply `0.8 × 15` cycles!" },
            { spec: { type: "number", value: 372 }, feedback: "372 hours is total cave time (`15 × 24.8`); subtract `15 × 24 = 360` hours to find the extra hours." },
          ],
          solution: [
            "Drift per cycle = `24.8 − 24.0 = 0.8` hours.",
            "Over `15` cycles: `15 × 0.8 = 12` extra hours (half a full day behind surface clocks!).",
          ],
          difficulty: "core",
          guideRef: "circadian-rhythms-scn",
          hints: [
            "Each cycle is `0.8` hours longer than 24 hours.",
            "Multiply `0.8 × 15`.",
          ],
        },
        {
          kind: "short",
          id: "sleep-and-dreams-p2-q13",
          question:
            "Which neuropsychologist (`2000`) challenged **Hobson & McCarley** by showing that **forebrain** motivational lesions abolish dreaming even when brainstem REM sleep stays completely intact?",
          answer: { type: "text", accept: ["solms", "mark solms"] },
          traps: [
            { spec: { type: "text", accept: ["siffre", "michel siffre"] }, feedback: "Siffre ran cave circadian studies; Mark Solms (2000) studied forebrain vs brainstem lesion effects on dreaming." },
          ],
          solution: ["**Mark Solms (2000)** proved REM sleep and dreaming are doubly dissociable, restoring a key role for forebrain motivational circuits."],
          difficulty: "core",
          guideRef: "dream-theories",
          hints: [
            "South African-born neuropsychologist who studied stroke patients with forebrain vs pons lesions in 2000.",
            "5-letter surname starting with 'S' (`Mark S____`).",
          ],
        },
        {
          kind: "written",
          id: "sleep-and-dreams-p2-q14",
          question:
            "Explain how **nature (biological/genetic factors)** and **nurture/environment (situational triggers)** interact to cause **sleepwalking (somnambulism)**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Nature provides a strong biological vulnerability: twin and family studies show ~5× higher concordance for sleepwalking in identical (MZ) twins than non-identical (DZ) twins, alongside developmental biology (children experience deeper Slow-Wave Sleep and immature inhibitory GABA pathways). However, because MZ concordance is ~50–55% rather than 100%, environmental triggers (nurture/situation) interact via a diathesis-stress process — episodes are frequently precipitated by prior sleep deprivation (causing intense SWS rebound), psychological exam stress, fever, or bedroom noise.",
          markScheme: [
            {
              point: "Explains genetic/biological vulnerability (MZ > DZ twin concordance / family history / high childhood SWS)",
              keywords: ["genetic", "twin", "mz", "concordance", "heritab", "family"],
            },
            {
              point: "Links biological mechanism to incomplete arousal from NREM Stage 3 (SWS)",
              keywords: ["stage 3", "slow-wave", "sws", "delta", "incomplete arousal"],
            },
            {
              point: "Notes MZ concordance is below 100%, proving environmental triggers are required",
              keywords: ["100%", "trigger", "environment", "interact", "diathesis"],
            },
            {
              point: "Names concrete environmental triggers (sleep deprivation SWS rebound, stress, fever, noise)",
              keywords: ["sleep deprivation", "rebound", "stress", "fever", "noise"],
            },
          ],
          commonError: "Treating nature vs nurture as 100% one or the other instead of explaining the diathesis-stress interaction.",
          difficulty: "challenge",
          guideRef: "sleep-disorders-hygiene",
          hints: [
            "Nature: Cite MZ vs DZ twin concordance and childhood Slow-Wave Sleep depth.",
            "Interaction clue: Why isn't MZ concordance 100%?",
            "Environment: Name triggers like sleep deprivation (SWS rebound), stress, or fever.",
          ],
        },
        {
          kind: "written",
          id: "sleep-and-dreams-p2-q15",
          question:
            "In **Iorio et al. (2020)**, participants who knew someone infected or deceased from COVID-19 reported vivid dreams of **contagion and being trapped in dangerous spaces**. Explain why these findings challenge **both** pure **Freudian wish-fulfilment** **and** pure **Activation-Synthesis**. [4 marks]",
          marks: 4,
          modelAnswer:
            "These lockdown dreams challenge Freud's claim that dreams are disguised wish-fulfilments: terrifying, undisguised dreams of contagion, suffocation, and mourning clearly reflect acute waking trauma and anxiety rather than pleasurable repressed wishes. At the same time, they challenge pure Activation-Synthesis's claim that dreams are merely random brainstem noise from the pons: finding systematic, predictable pandemic themes specifically among COVID-exposed participants proves dream content is meaningfully shaped by waking emotional concerns (the continuity hypothesis).",
          markScheme: [
            {
              point: "Explains challenge to Freud: contagion/mourning nightmares are distressing and undisguised, not wish-fulfilment",
              keywords: ["wish-fulfilment", "wish fulfilment", "undisguised", "distressing", "nightmare"],
            },
            {
              point: "Links lockdown distress directly to manifest plot without needing unconscious childhood disguise",
              keywords: ["freud", "latent", "disguis", "trauma"],
            },
            {
              point: "Explains challenge to Activation-Synthesis: themes are systematic/meaningful, not purely random brainstem noise",
              keywords: ["random", "pons", "brainstem", "hobson", "noise"],
            },
            {
              point: "Links systematic COVID-exposure differences to waking emotional continuity",
              keywords: ["continuity", "waking", "meaningful", "systematic", "emotional"],
            },
          ],
          commonError: "Only explaining what Iorio et al. found without showing why those findings contradict BOTH Freud's wish claim and Hobson's randomness claim.",
          difficulty: "challenge",
          guideRef: "dream-theories",
          hints: [
            "Against Freud: Is dreaming about suffocating in lockdown a secret 'wish', and was it disguised?",
            "Against Hobson & McCarley: If dreams were purely *random* pons spikes, why did COVID-exposed Italians systematically dream of contagion?",
            "Tie both together via the continuity hypothesis.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "written",
      id: "sleep-and-dreams-ch-q01",
      question:
        "Two Year 11 students each sleep **6 hours** before a memory test, but at **different clock windows**:\n- **Student 1** sleeps from `10:00 pm to 4:00 am` (waking 2.5 hours early).\n- **Student 2** stays up late and sleeps from `2:30 am to 8:30 am` (missing early-night hours).\nUsing **ultradian hypnogram architecture** and **Oswald's Restoration Theory**, predict and explain how their **NREM Slow-Wave Sleep vs REM sleep** proportions and recovery will differ. [4 marks]",
      marks: 4,
      modelAnswer:
        "Student 1 (sleeping 10:00 pm–4:00 am, the first part of the night) obtains most of her normal NREM Stage 3 Slow-Wave Sleep (physical Growth Hormone repair) because SWS clusters heavily in early ultradian cycles, but loses a large share of REM sleep (which dominates the final morning cycles), impairing neurotransmitter and emotional/procedural consolidation. Conversely, Student 2 (2:30 am–8:30 am) sleeps during the late circadian REM peak and therefore gets substantial REM sleep, while losing deep early-night Slow-Wave Sleep.",
      markScheme: [
        {
          point: "Identifies hypnogram asymmetry: SWS dominates early-night cycles while REM lengthens in late-morning cycles",
          keywords: ["early", "first half", "morning", "lengthen", "later cycles"],
        },
        {
          point: "Predicts Student 1 retains SWS but loses late-night REM sleep",
          keywords: ["student 1", "loses rem", "misses rem", "retains sws", "keeps slow-wave"],
        },
        {
          point: "Links Student 1's lost REM to Oswald's brain/neurotransmitter/memory restoration",
          keywords: ["neurotransmitter", "brain", "consolidation", "oswald"],
        },
        {
          point: "Predicts Student 2 retains higher REM proportion while losing early-night SWS physical repair",
          keywords: ["student 2", "growth hormone", "physical", "loses slow-wave", "loses sws"],
        },
      ],
      difficulty: "challenge",
      guideRef: "sleep-stages-eeg",
      hints: [
        "Recall which half of the night packs in deep NREM Stage 3 (SWS) vs long REM bouts.",
        "What does Student 1 miss by waking at 4:00 am, and what does Oswald say that stage restores?",
        "Contrast with Student 2 sleeping 2:30–8:30 am.",
      ],
      strategy: "Combine hypnogram timing with Oswald's stage-specific restoration",
    },
    {
      kind: "short",
      id: "sleep-and-dreams-ch-q02",
      question:
        "**Czeisler et al. (1999)** placed volunteers on a strict 'forced desynchrony' dim-light `28`-hour day (removing Siffre's bright-lamp confound) and discovered the true human endogenous SCN period is `24.18` hours rather than `25.0` hours! Over `50` consecutive days without zeitgebers, how many **fewer hours** of total drift does a `24.18`-hour clock accumulate compared with a `25.0`-hour clock?",
      answer: { type: "number", value: 41 },
      traps: [
        { spec: { type: "number", value: 9 }, feedback: "9 hours (`50 × 0.18`) is the drift of the 24.18h clock alone — subtract that from the 25.0h clock's 50-hour drift (`50 − 9 = 41`)!" },
        { spec: { type: "number", value: 0.82 }, feedback: "0.82 hours (`25.0 − 24.18`) is the difference per single day — multiply by 50 days!" },
      ],
      solution: [
        "25.0-hour clock drift over 50 days = `50 × (25.0 − 24.0) = 50` hours.",
        "24.18-hour clock drift over 50 days = `50 × (24.18 − 24.0) = 9` hours.",
        "Difference = `50 − 9 = 41` fewer hours of drift.",
      ],
      difficulty: "challenge",
      guideRef: "circadian-rhythms-scn",
      hints: [
        "Find the per-day difference between the two estimates: `25.0 − 24.18 = 0.82` hours/day.",
        "Multiply `0.82` hours/day by `50` days.",
        "`0.82 × 50`.",
      ],
      strategy: "Compare cumulative rates across experimental vs confounded models",
    },
    {
      kind: "written",
      id: "sleep-and-dreams-ch-q03",
      question:
        "'Neither **Oswald's Restoration Theory** nor **Meddis's Evolutionary Theory** can explain human and animal sleep on its own, but **Horne's (1988) Core vs Optional Sleep** model unites them.' Discuss and evaluate this claim using empirical evidence. [6 marks]",
      marks: 6,
      modelAnswer:
        "Oswald's Restoration Theory explains why sleep deprivation triggers selective SWS and REM rebound (Randy Gardner) and why infants spend 50% of sleep in REM during rapid brain maturation, yet it struggles to explain why moderate physical exercise barely alters SWS (since quiet waking rest already relaxes body muscles) or why species vary from 2 hours in giraffes to 20 hours in bats. Conversely, Meddis's Evolutionary Theory explains cross-species sleep durations via predator exposure and energy conservation (Allison & Cicchetti, 1976), yet cannot explain why sleep induces dangerous unresponsiveness or why dolphins evolved complex unihemispheric SWS rather than abandoning sleep. Horne (1988) resolves both puzzles by splitting sleep into 'core sleep' (deep SWS + part of REM essential for cerebral brain restoration) and 'optional sleep' (lighter NREM Stage 1–2 serving evolutionary energy-saving and safe-inactivity roles).",
      markScheme: [
        {
          point: "Supports Oswald's Restoration Theory with evidence (Gardner rebound, infant 50% REM, or Shapiro marathon)",
          keywords: ["oswald", "gardner", "rebound", "infant", "50%", "growth hormone"],
        },
        {
          point: "Critiques pure Restoration (quiet rest relaxes muscles; species differences unexplained)",
          keywords: ["quiet", "muscle", "moderate exercise", "species"],
        },
        {
          point: "Supports Meddis's Evolutionary Theory with comparative evidence (Allison & Cicchetti predator vs prey)",
          keywords: ["meddis", "predator", "prey", "giraffe", "bat", "allison", "energy"],
        },
        {
          point: "Critiques pure Evolutionary Theory (unresponsiveness risk or dolphin unihemispheric sleep)",
          keywords: ["dolphin", "unihemispheric", "vulnerable", "unresponsive"],
        },
        {
          point: "Explains Horne's (1988) 'core sleep' (SWS/REM for essential brain restoration)",
          keywords: ["core sleep", "cerebral", "brain restoration"],
        },
        {
          point: "Explains Horne's 'optional sleep' (lighter NREM fulfilling ecological/evolutionary adaptation)",
          keywords: ["optional sleep", "lighter", "ecological", "unites", "combines"],
        },
      ],
      difficulty: "challenge",
      guideRef: "theories-of-sleep",
      hints: [
        "Paragraph 1: Give Oswald's strength (rebound/infants) AND blind spot (species variation / muscles rest while awake).",
        "Paragraph 2: Give Meddis's strength (giraffe vs bat) AND blind spot (dolphin unihemispheric sleep).",
        "Paragraph 3: Show how Horne's Core Sleep (brain repair) + Optional Sleep (ecological inactivity) integrates both.",
      ],
      strategy: "Synthesise competing theories via Horne's Core vs Optional model",
    },
    {
      kind: "written",
      id: "sleep-and-dreams-ch-q04",
      question:
        "A rare neurological patient with **REM Sleep Behaviour Disorder (RBD)** has a small lesion in the **brainstem pons** that selectively disables **REM muscle atonia** while leaving REM dreaming intact: he physically punches and leaps out of bed while dreaming of fending off an attacker! Contrast RBD with **NREM Stage 3 sleepwalking (somnambulism)** across **sleep stage/timing**, **motor physiology**, and **morning dream recall**. [4 marks]",
      marks: 4,
      modelAnswer:
        "First, RBD occurs during REM sleep (longest in the late-night/early-morning hours), whereas somnambulism occurs during deep NREM Stage 3 Slow-Wave Sleep in the first third of the night. Second, RBD is caused by loss of brainstem REM muscle atonia so the sleeper physically acts out motor-cortex dream commands, whereas somnambulism involves incomplete arousal from delta sleep where skeletal muscle tone is normally preserved. Third, RBD patients typically recall a vivid action-packed dream matching their movements if woken, whereas sleepwalkers have complete morning amnesia with no vivid narrative dream.",
      markScheme: [
        {
          point: "Contrasts stage & night timing: RBD in late-night REM vs sleepwalking in early-night NREM Stage 3 (SWS)",
          keywords: ["stage 3", "slow-wave", "sws", "first third", "late", "morning"],
        },
        {
          point: "Explains RBD motor cause: failure/loss of normal brainstem REM muscle atonia",
          keywords: ["loss of", "disables", "failure", "lack", "normal"],
        },
        {
          point: "Explains sleepwalking motor cause: incomplete/partial arousal from delta sleep with intact muscle tone",
          keywords: ["incomplete arousal", "partial arousal", "delta", "preserved"],
        },
        {
          point: "Contrasts recall: RBD recalls vivid matching dream vs sleepwalker shows complete morning amnesia",
          keywords: ["amnesia", "vivid", "remember", "recall"],
        },
      ],
      difficulty: "challenge",
      guideRef: "sleep-disorders-hygiene",
      hints: [
        "Timing: First third of night (NREM 3 SWS) vs late morning cycles (REM).",
        "Physiology: Broken REM muscle-atonia brake vs incomplete delta arousal.",
        "Memory on waking: Vivid matching fight dream vs complete amnesia!",
      ],
      strategy: "Contrast clinical dissociations across stage, mechanism, and recall",
    },
    {
      kind: "short",
      id: "sleep-and-dreams-ch-q05",
      question:
        "In a study of **adolescent circadian phase delay**, `80` Year 11 students moved from a `7:30 am` school start to an `8:30 am` school start. Mean school-night sleep rose from `6.4` hours (`384` minutes) to `7.2` hours (`432` minutes), and `65%` of those extra minutes occurred specifically in **late-morning REM sleep**! How many **extra minutes of REM sleep** per night did students gain on average (give exact decimal)?",
      answer: { type: "number", value: 31.2 },
      traps: [
        { spec: { type: "number", value: 48 }, feedback: "48 minutes (`432 − 384`) is the total extra sleep gained; take `65%` of `48` minutes for the extra REM minutes!" },
        { spec: { type: "number", value: 0.52 }, feedback: "0.52 is in hours (`65%` of `0.8 h`) — multiply `0.52 × 60` to give your answer in minutes (`31.2`)." },
      ],
      solution: [
        "Total extra sleep = `432 − 384 = 48` minutes.",
        "Extra REM minutes = `65%` of `48` = `0.65 × 48 = 31.2` minutes.",
      ],
      difficulty: "challenge",
      guideRef: "circadian-rhythms-scn",
      hints: [
        "Find total extra minutes gained per night (`432 − 384 = 48` min).",
        "Multiply `48` minutes by `0.65` (`65%`).",
        "`48 × 0.65`.",
      ],
      strategy: "Chain subtraction with percentage proportion",
    },
    {
      kind: "written",
      id: "sleep-and-dreams-ch-q06",
      question:
        "Evaluate the **scientific status** of **Freud's (1900) Dream Theory** versus **Hobson & McCarley's (1977) Activation-Synthesis Theory**, showing how **Mark Solms (2000)** forced a rethink of **both**. [4 marks]",
      marks: 4,
      modelAnswer:
        "Freud's theory lacks scientific falsifiability and objectivity because subjective clinical interpretations of latent wishes and dreamwork cannot be empirically disproven or replicated. Hobson & McCarley's Activation-Synthesis is far more scientific and testable via objective EEG and PET scans of REM brainstem pons activity, yet it suffers from biological reductionism by dismissing psychological meaning as random neural noise. Solms (2000) reshaped both views: finding that forebrain dopamine/motivational lesions (not pons lesions!) abolish dreaming even during intact REM refuted Hobson's claim that the pons alone drives dreams, while partially rehabilitating Freud's insight that higher motivational emotion circuits generate dreams.",
      markScheme: [
        {
          point: "Critiques Freud on unfalsifiability, subjectivity, and researcher bias in case studies",
          keywords: ["unfalsifiab", "falsifiab", "subjective", "bias", "case stud"],
        },
        {
          point: "Praises Activation-Synthesis for objective neurobiological testability (EEG/PET) while noting biological reductionism",
          keywords: ["objective", "eeg", "pet", "reductionis"],
        },
        {
          point: "States Solms's (2000) key dissociation: forebrain motivational lesions abolish dreaming despite intact REM/pons",
          keywords: ["solms", "forebrain", "dopamine", "motivational", "abolish"],
        },
        {
          point: "Explains how Solms refutes pure brainstem generation while supporting motivated cortical dream generation",
          keywords: ["refut", "rehabilitat", "higher", "pons alone"],
        },
      ],
      difficulty: "challenge",
      guideRef: "dream-theories",
      hints: [
        "Compare falsifiability/objectivity: Freud (subjective case studies) vs Hobson & McCarley (EEG/PET).",
        "What did Solms (2000) find when comparing brainstem pons damage vs ventromedial forebrain damage?",
        "Show how Solms challenges Hobson's brainstem-only view while giving biological footing to motivated dreaming.",
      ],
      strategy: "Use neuropsychological lesion evidence to arbitrate between theories",
    },
    {
      kind: "written",
      id: "sleep-and-dreams-ch-q07",
      question:
        "Design a **field experiment** to test whether wearing **amber blue-light-blocking glasses** for `2` hours before bed improves **sleep quality** in night-studying sixth-formers. Specify:\n1. Operationalised **IV** and **DV**.\n2. How you will control **demand characteristics**.\n3. One **ethical consideration** and how you will address it. [4 marks]",
      marks: 4,
      modelAnswer:
        "The operationalised IV is wearing genuine amber blue-light-blocking lenses versus identical-looking clear non-blocking placebo lenses for 2 hours prior to bedtime at home over 7 nights. The operationalised DV is mean sleep-onset latency in minutes (or total sleep minutes) recorded objectively via a wrist actigraph watch. Providing the sham clear-lens placebo group (single-blind or double-blind) controls demand characteristics so expectations alone cannot shorten latency. Ethically, we obtain full informed consent beforehand (with debriefing afterwards about the placebo lenses) and remind participants of their right to withdraw at any point.",
      markScheme: [
        {
          point: "Operationalises IV clearly (blue-blocking lenses vs placebo/control lenses for 2h pre-bed at home)",
          keywords: ["placebo", "clear", "control group", "home"],
        },
        {
          point: "Operationalises DV quantitatively (actigraph minutes / sleep-onset latency / sleep efficiency %)",
          keywords: ["actigraph", "minutes", "latency", "percentage", "tracker"],
        },
        {
          point: "Explains placebo / blind control prevents participant expectations (demand characteristics)",
          keywords: ["blind", "expectation", "sham", "dummy"],
        },
        {
          point: "Names valid ethical issue (informed consent, debriefing after placebo deception, right to withdraw, confidentiality)",
          keywords: ["informed consent", "debrief", "withdraw", "confidential"],
        },
      ],
      difficulty: "challenge",
      guideRef: "circadian-rhythms-scn",
      hints: [
        "Why is testing at home with wrist actigraphs a *field* experiment rather than a lab study?",
        "How do sham/placebo lenses stop students guessing the aim and reporting better sleep out of politeness?",
        "Because placebo lenses involve mild deception, mention informed consent + full debriefing + right to withdraw.",
      ],
      strategy: "Combine field ecological validity with placebo controls and DRIP ethics",
    },
    {
      kind: "written",
      id: "sleep-and-dreams-ch-q08",
      question:
        "Explain why a student who crams until `3:00 am` (getting only `3.5` hours of sleep) before a CIE 0266 Psychology exam harms **both** **declarative hippocampal consolidation** (`Topic 1`) **and** **REM brain restoration** (`Topic 2`). [4 marks]",
      marks: 4,
      modelAnswer:
        "Cutting sleep to 3.5 hours sacrifices both early Slow-Wave Sleep spindles/delta waves — which replay hippocampal traces to consolidate new declarative (semantic/episodic) exam facts into neocortical Long-Term Memory — and virtually all late-night REM cycles (Hours 4–8). According to Oswald's Restoration Theory, losing those long morning REM bouts prevents neurotransmitter replenishment and emotional/procedural integration, leaving the student's prefrontal Working Memory impaired and prone to retrieval failure during the morning exam.",
      markScheme: [
        {
          point: "Links NREM/SWS spindles & hippocampal replay to consolidating declarative exam facts into cortical LTM",
          keywords: ["hippocamp", "declarative", "semantic", "spindle", "consolidat", "ltm"],
        },
        {
          point: "Identifies that 3.5 hours of sleep cuts off late-night ultradian cycles where REM bouts are longest",
          keywords: ["late", "morning", "final cycles", "cuts off", "misses"],
        },
        {
          point: "Links lost REM sleep to Oswald's brain/neurotransmitter restoration",
          keywords: ["oswald", "neurotransmitter", "restoration"],
        },
        {
          point: "Connects sleep loss to impaired exam retrieval / prefrontal Working Memory attention next morning",
          keywords: ["working memory", "prefrontal", "retriev", "attention"],
        },
      ],
      difficulty: "challenge",
      guideRef: "theories-of-sleep",
      hints: [
        "Topic 1 link: What happens during NREM/SWS sleep between the hippocampus and neocortex to lock in new revision?",
        "Topic 2 hypnogram link: Which half of an 8-hour night holds the longest REM bouts, and what does Oswald say REM restores?",
        "Link both to morning exam performance!",
      ],
      strategy: "Bridge Topic 1 (hippocampal consolidation) with Topic 2 (hypnogram & Oswald)",
    },
  ],
};
