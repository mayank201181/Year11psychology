import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p1a",
  title: "CIE 0266 Paper 1 Mock A — Cognition, Behaviour & Experimental Methods",
  calculator: true,
  minutes: 90,
  questions: [
    // =========================================================================
    // SECTION A: MEMORY & FORGETTING (Q01–Q08)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p1a-q01",
      topicId: "memory-and-forgetting",
      guideRef: "processes-and-msm",
      difficulty: "warmup",
      question:
        "According to Atkinson & Shiffrin's Multi-Store Model of Memory, what are the typical **coding, capacity and duration** of **Short-Term Memory (STM)**?",
      options: [
        "Modality-specific sensory coding, huge capacity, duration under 2 seconds",
        "Semantic coding, unlimited capacity, duration up to a lifetime",
        "Acoustic coding, capacity of 7 ± 2 items, duration of 18–30 seconds without rehearsal",
        "Procedural motor coding, capacity of 4 hours, duration of 90 minutes",
      ],
      answerIndex: 2,
      explanation:
        "STM encodes primarily acoustically (by sound), holds roughly 7 ± 2 items/chunks (Miller), and lasts 18–30 seconds unless maintained via rehearsal (Peterson & Peterson). Semantic/unlimited/lifetime describes Long-Term Memory.",
      hints: ["Recall Miller's magic number (7 ± 2) and Peterson & Peterson's trigram duration (18–30 s)."],
      strategy: "Match store to Coding + Capacity + Duration",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q02",
      topicId: "memory-and-forgetting",
      guideRef: "processes-and-msm",
      difficulty: "core",
      question:
        "In **Murdock's (1962)** serial position curve experiment, why were words from the **beginning** of a 20-word list recalled far better than words from the **middle** of the list?",
      diagram: `<svg viewBox="0 0 380 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="U-shaped serial position curve showing high primacy recall at start, low recall in middle, and high recency recall at end"><rect x="8" y="8" width="364" height="159" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="48" y1="138" x2="345" y2="138" stroke="#334155" stroke-width="2"/><line x1="48" y1="138" x2="48" y2="24" stroke="#334155" stroke-width="2"/><path d="M 62 38 Q 140 128 205 124 Q 275 120 332 32" fill="none" stroke="#2563eb" stroke-width="3"/><circle cx="62" cy="38" r="5" fill="#1d4ed8"/><text x="95" y="42" font-size="10.5" font-weight="bold" fill="#1e3a8a" font-family="sans-serif">Primacy (?)</text><text x="200" y="114" font-size="10" text-anchor="middle" fill="#64748b" font-family="sans-serif">Asymptote</text><text x="305" y="42" font-size="10.5" font-weight="bold" fill="#166534" font-family="sans-serif">Recency</text><text x="196" y="156" font-size="10" text-anchor="middle" fill="#334155" font-family="sans-serif">Word Position in List (1 → 20)</text><text x="18" y="82" font-size="10" text-anchor="middle" transform="rotate(-90 18 82)" fill="#334155" font-family="sans-serif">% Recalled</text></svg>`,
      options: [
        "Early words received more rehearsal and were transferred into Long-Term Memory (the primacy effect)",
        "Early words remained sitting in the sensory register throughout testing",
        "Early words displaced the final words out of Long-Term Memory",
        "Early words were encoded purely visually in the visuo-spatial sketchpad",
      ],
      answerIndex: 0,
      explanation:
        "Words at the start of the list can be rehearsed repeatedly before STM fills up, transferring them into LTM (**primacy effect**). Final words still sit in STM at immediate test (**recency effect**), while middle words suffer displacement before transfer.",
      hints: [
        "Distinguish the primacy effect (start of list → LTM) from the recency effect (end of list → still in STM).",
        "Why do the first 3–4 words get more rehearsal time than the 11th word?",
      ],
      strategy: "Primacy = rehearsed into LTM; Recency = still in STM",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q03",
      topicId: "memory-and-forgetting",
      guideRef: "working-memory-levels",
      difficulty: "core",
      question:
        "In **Craik & Tulving's (1975)** Levels of Processing study, participants recognized the highest percentage of words when the initial question asked:",
      options: [
        "Whether the word was printed in CAPITAL letters (structural processing)",
        "Whether the word rhymed with another spoken word (phonemic processing)",
        "How many milliseconds the word stayed on the tachistoscope screen",
        "Whether the word meaningfully fitted into a sentence gap (deep semantic processing)",
      ],
      answerIndex: 3,
      explanation:
        "Craik & Tulving (1975) demonstrated that **deep semantic processing** (judging meaning / sentence fit) creates a far stronger, more durable memory trace (~80%+ recognition) than phonemic (rhyme) or shallow structural (capitals) processing (<20%).",
      hints: [
        "Compare shallow physical appearance (structural) vs sound (phonemic) vs meaning (semantic).",
        "Which level of processing produces the most elaborate memory trace?",
      ],
      strategy: "Meaning (semantic) > Sound (phonemic) > Appearance (structural)",
    },
    {
      kind: "short",
      id: "exam-p1a-q04",
      topicId: "memory-and-forgetting",
      guideRef: "working-memory-levels",
      difficulty: "warmup",
      question:
        "In Baddeley & Hitch's Working Memory Model, name the **supervisory component** with limited attentional capacity that allocates cognitive resources to the slave systems.",
      answer: {
        type: "text",
        accept: ["central executive"],
        display: "central executive",
      },
      traps: [
        {
          spec: { type: "text", accept: ["episodic buffer"] },
          feedback: "The episodic buffer integrates multi-modal information into episodes — the attentional boss directing resources is the central executive!",
        },
      ],
      solution: [
        "The **central executive** directs attention and coordinates the phonological loop, visuo-spatial sketchpad and episodic buffer.",
      ],
      hints: ["Two words: 'central ______' (the attentional boss of Working Memory)."],
      strategy: "Key component recall",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q05",
      topicId: "memory-and-forgetting",
      guideRef: "explanations-forgetting",
      difficulty: "core",
      question:
        "Mei learns Spanish vocabulary in Year 10 and then starts learning Italian in Year 11. When she tries to recall her **old Spanish** words in an exam, her **new Italian** words keep intruding and blocking them! Which explanation of forgetting is this?",
      options: [
        "Proactive interference",
        "Retroactive interference",
        "State-dependent cue failure",
        "Anterograde hippocampal decay",
      ],
      answerIndex: 1,
      explanation:
        "**Retroactive interference** acts *backwards* ('retro'): **newer** learning (Italian) disrupts recall of **older** memories (Spanish). Proactive interference is when old learning disrupts new learning.",
      hints: [
        "Ask WHICH memory failed: the OLD Spanish or the NEW Italian?",
        "New learning acting backwards ('retro-') on old memories = retroactive interference!",
      ],
      strategy: "Retroactive = NEW disrupts OLD; Proactive = OLD disrupts NEW",
    },
    {
      kind: "short",
      id: "exam-p1a-q06",
      topicId: "memory-and-forgetting",
      guideRef: "brain-and-amnesia",
      difficulty: "core",
      question:
        "In **Milner et al.'s (1968)** case study of patient **H.M.**, bilateral removal of which medial temporal brain structure left him unable to consolidate new long-term episodic/declarative memories (**anterograde amnesia**)?",
      answer: {
        type: "text",
        accept: ["hippocampus", "hippocampi"],
        display: "hippocampus",
      },
      traps: [
        {
          spec: { type: "text", accept: ["cerebellum"] },
          feedback: "H.M.'s cerebellum remained intact (which is why he COULD learn mirror-drawing procedural motor skills!) — his episodic loss came from removing the hippocampus.",
        },
        {
          spec: { type: "text", accept: ["hypothalamus"] },
          feedback: "The hypothalamus regulates homeostasis and circadian SCN rhythms — episodic memory consolidation relies on the hippocampus!",
        },
      ],
      solution: [
        "Surgical removal of H.M.'s **hippocampus** (and surrounding medial temporal tissue) caused severe anterograde amnesia for new episodic/semantic facts while sparing STM and cerebellar procedural skills.",
      ],
      hints: [
        "Starts with 'hippo…' (not hypothalamus!).",
        "This brain structure transfers new declarative memories into long-term storage.",
      ],
      strategy: "Hippocampus = episodic consolidation; Cerebellum = procedural motor skill",
    },
    {
      kind: "written",
      id: "exam-p1a-q07",
      topicId: "memory-and-forgetting",
      guideRef: "reconstructive-schemas",
      difficulty: "core",
      marks: 4,
      question:
        "Using **Bartlett's Theory of Reconstructive Memory** (*War of the Ghosts*), explain how **cultural schemas** can distort eyewitness testimony. [4 marks]",
      modelAnswer:
        "Bartlett proposed that memory is not an exact video recording; instead, we store fragments and actively rebuild memories using schemas — mental packets of prior knowledge and cultural expectations. Through assimilation (rationalisation), witnesses unconsciously alter unfamiliar details to fit their own cultural norms (just as British participants turned Native American 'canoes' into 'boats'). Witnesses also omit unfamiliar details (levelling) or fill memory gaps with plausible invented details (confabulation), meaning two honest eyewitnesses can recall distorted, inaccurate accounts of the same crime.",
      markScheme: [
        {
          point: "Defines memory as active reconstruction (not an exact copy/video) guided by schemas (prior expectations/knowledge)",
          keywords: ["reconstruct", "not an exact", "not a video", "schema", "prior knowledge", "expectation"],
        },
        {
          point: "Explains assimilation / rationalisation (changing unfamiliar details to match cultural norms, e.g. canoes → boats)",
          keywords: ["assimilation", "rationalis", "canoes", "boats", "familiar", "fit their culture"],
        },
        {
          point: "Mentions levelling (omitting details) or confabulation / sharpening (filling gaps with invented plausible details)",
          keywords: ["levelling", "omitting", "leave out", "confabulat", "fill in gaps", "filling gaps", "sharpening"],
        },
        {
          point: "Links directly to eyewitness testimony accuracy (honest witnesses recall distorted / stereotyped / inaccurate crime details)",
          keywords: ["inaccurate", "distort", "crime", "stereotyp", "unreliable", "honest"],
        },
      ],
      commonError:
        "Describing the Multi-Store Model instead of Bartlett's schemas, assimilation and confabulation.",
      hints: [
        "Explain what a **schema** is and how **assimilation** / **confabulation** work in *War of the Ghosts*.",
        "Apply that directly to why an honest crime eyewitness remembers what they *expected* to see rather than what actually happened.",
      ],
      strategy: "Define reconstructive schemas → Name assimilation/confabulation → Apply to crime witness",
    },
    {
      kind: "written",
      id: "exam-p1a-q08",
      topicId: "memory-and-forgetting",
      guideRef: "working-memory-levels",
      difficulty: "challenge",
      marks: 3,
      question:
        "Explain how **dual-task experiments** support **Baddeley & Hitch's Working Memory Model** over Atkinson & Shiffrin's unitary STM store. [3 marks]",
      modelAnswer:
        "Atkinson & Shiffrin viewed STM as a single unitary store, which predicts any two simultaneous STM tasks should interfere equally. However, dual-task studies show participants perform a verbal digit-span task AND a visual tracking task simultaneously almost as accurately as alone because they use separate slave systems (the phonological loop vs the visuo-spatial sketchpad). Performance drops sharply when two verbal tasks compete for the phonological loop at once, proving STM has multiple modality-specific subsystems.",
      markScheme: [
        {
          point: "Contrasts unitary single STM (MSM) with multiple separate slave subsystems in Working Memory",
          keywords: ["unitary", "single store", "separate", "multiple", "subsystems", "slave"],
        },
        {
          point: "Explains that one verbal + one visual task can be performed together with little interference (phonological loop + visuo-spatial sketchpad)",
          keywords: ["verbal and visual", "phonological loop", "visuo-spatial", "sketchpad", "little interference", "almost as well"],
        },
        {
          point: "Explains that two tasks using the SAME slave system (e.g. two verbal tasks) compete for limited capacity and impair performance",
          keywords: ["two verbal", "same slave", "same component", "compete", "drops", "impair", "worse"],
        },
      ],
      commonError:
        "Describing the components without explaining the contrast between cross-modal (verbal + visual = smooth) vs same-modal (verbal + verbal = clash) dual tasks!",
      hints: [
        "Compare doing ONE verbal + ONE visual task together versus doing TWO verbal tasks together.",
        "Why does that disprove a single all-purpose STM box?",
      ],
      strategy: "Verbal+Visual (no clash) vs Verbal+Verbal (clash) → proves separate subsystems",
    },

    // =========================================================================
    // SECTION B: SLEEP & DREAMS (Q09–Q15)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p1a-q09",
      topicId: "sleep-and-dreams",
      guideRef: "sleep-stages-eeg",
      difficulty: "warmup",
      question:
        "Why is **REM sleep** frequently called **'paradoxical sleep'** by neuroscientists?",
      options: [
        "Because it occurs only once per week rather than in 90-minute ultradian cycles",
        "Because slow high-amplitude delta waves dominate while the sleeper sleepwalks around the house",
        "Because melatonin drops to zero while core body temperature rises by 4 °C",
        "Because EEG brainwaves are high-frequency and active (resembling wakefulness) while skeletal voluntary muscles are paralysed (atonia)",
      ],
      answerIndex: 3,
      explanation:
        "REM sleep is a paradox: the brain's cortex is highly active (fast beta-like desynchronised EEG and vivid dreaming, plus rapid eye movements), yet brainstem inhibition causes temporary skeletal **muscle atonia** (paralysis).",
      hints: ["Compare what the BRAIN is doing on EEG with what the BODY's skeletal muscles are doing!"],
      strategy: "Active wake-like brain + paralysed body = paradoxical sleep",
    },
    {
      kind: "short",
      id: "exam-p1a-q10",
      topicId: "sleep-and-dreams",
      guideRef: "sleep-stages-eeg",
      difficulty: "warmup",
      question:
        "Approximately how many **minutes** does **one complete ultradian NREM-to-REM sleep cycle** last in a typical adult night? (Give a single typical number.)",
      answer: { type: "number", value: 90, tolerance: 10 },
      traps: [
        {
          spec: { type: "number", value: 24 },
          feedback: "24 hours is the circadian sleep-wake cycle! One ultradian NREM-REM sleep cycle lasts about 90 minutes.",
        },
      ],
      solution: [
        "Adults pass through **4 to 5 ultradian sleep cycles** per night, each lasting approximately **90 minutes**.",
      ],
      hints: ["Adults complete roughly 5 of these cycles across a 7.5-hour sleep!"],
      strategy: "Ultradian cycle ≈ 90 minutes; Circadian cycle ≈ 24 hours",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q11",
      topicId: "sleep-and-dreams",
      guideRef: "circadian-rhythms-scn",
      difficulty: "core",
      question:
        "How do the **suprachiasmatic nucleus (SCN)** and the **pineal gland** interact with **light** to regulate the circadian sleep-wake rhythm?",
      options: [
        "Bright morning light causes the pineal gland to flood the bloodstream with melatonin to wake the cortex",
        "The SCN is an exogenous zeitgeber in the cerebellum that releases growth hormone at noon",
        "Light detected by retinal ganglion cells signals the hypothalamic SCN (endogenous pacemaker), which inhibits pineal melatonin release during daylight and allows melatonin secretion in darkness",
        "Darkness shuts down the SCN completely so REM sleep cannot occur after midnight",
      ],
      answerIndex: 2,
      explanation:
        "Light (the primary **exogenous zeitgeber**) strikes specialised retinal cells that reset the **SCN** (master **endogenous pacemaker** in the hypothalamus). In darkness, the SCN signals the **pineal gland** to secrete **melatonin**, inducing drowsiness.",
      hints: [
        "Track the pathway: Light (zeitgeber) → Retina → SCN (hypothalamus) → Pineal gland → Melatonin.",
        "Does melatonin rise in bright daylight or in darkness?",
      ],
      strategy: "Darkness → SCN allows Pineal Melatonin → Sleepiness",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q12",
      topicId: "sleep-and-dreams",
      guideRef: "theories-of-sleep",
      difficulty: "core",
      question:
        "According to **Oswald's Restoration Theory of Sleep**, how do the restorative roles of **Slow-Wave Sleep (NREM Stage 3)** and **REM sleep** differ?",
      options: [
        "SWS drives physical body restoration via growth-hormone release and tissue repair, while REM drives brain restoration via protein synthesis, neurotransmitter replenishment and memory consolidation",
        "SWS restores procedural motor skills only, while REM repairs broken bone tissue",
        "Both SWS and REM exist solely to keep animals immobile in burrows away from nocturnal predators",
        "SWS flushes melatonin out of muscles, while REM suppresses brain protein synthesis",
      ],
      answerIndex: 0,
      explanation:
        "Oswald distinguishes **SWS (NREM 3)** = **body repair** (growth hormone surge, cellular/immune repair) from **REM** = **brain repair** (brain protein synthesis, neurotransmitter recovery, emotional/memory consolidation). Predator avoidance is Meddis's evolutionary theory.",
      hints: [
        "Match SWS → Body (Growth Hormone) and REM → Brain (Neurotransmitters & Memory).",
        "Eliminate predator avoidance, which belongs to Meddis's Ecological/Evolutionary theory.",
      ],
      strategy: "SWS = Body repair; REM = Brain repair",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q13",
      topicId: "sleep-and-dreams",
      guideRef: "dream-theories",
      difficulty: "core",
      question:
        "A student dreams of **climbing an endless icy staircase** (`storyline remembered on waking`), which a Freudian analyst interprets as **unconscious anxiety about failing upcoming IGCSE exams** (`hidden symbolic meaning`). In Freud's dream theory, these two levels are:",
      options: [
        "Icy staircase = Latent content; Exam anxiety = Manifest content",
        "Icy staircase = Somnambulism; Exam anxiety = Ultradian spindle",
        "Icy staircase = Brainstem pons activation; Exam anxiety = Pineal synthesis",
        "Icy staircase = Manifest content; Exam anxiety = Latent content",
      ],
      answerIndex: 3,
      explanation:
        "**Manifest content** is the surface storyline the dreamer consciously recalls (climbing the icy stairs); **latent content** is the disguised unconscious wish or conflict underneath (exam failure anxiety), transformed via dreamwork symbolism.",
      hints: [
        "Beware the classic CIE 0266 swap trap!",
        "Manifest = surface movie you remember; Latent = hidden ('latent') unconscious meaning underneath.",
      ],
      strategy: "Manifest = surface story; Latent = hidden unconscious meaning",
    },
    {
      kind: "written",
      id: "exam-p1a-q14",
      topicId: "sleep-and-dreams",
      guideRef: "dream-theories",
      difficulty: "core",
      marks: 4,
      question:
        "Contrast **Hobson & McCarley's Activation-Synthesis Theory** of dreaming with **Freud's Psychoanalytic Dream Theory**, and note how **Iorio et al.'s** pandemic dream research relates to dream content. [4 marks]",
      modelAnswer:
        "Freud argued dreams are meaningful psychological disguises fulfilling repressed unconscious wishes (turning latent content into symbolic manifest storylines). In contrast, Hobson & McCarley's neurobiological Activation-Synthesis model proposes that during REM sleep, the brainstem pons fires random electrical signals ('activation') up to the forebrain/cerebral cortex, which tries to stitch those random bursts into a coherent story ('synthesis') using stored memories — so dreams have no hidden unconscious code. However, studies like Iorio et al. (COVID-19 lockdown dreaming) show waking emotional stress and trauma reliably carry over into dream themes (continuity), suggesting dreams reflect real waking concerns more systematically than pure random noise.",
      markScheme: [
        {
          point: "Summarises Freud: unconscious wish-fulfilment / latent thoughts disguised into symbolic manifest content",
          keywords: ["unconscious", "wish", "latent", "manifest", "symbolic"],
        },
        {
          point: "Explains Activation: random neural firing from the brainstem / pons during REM sleep",
          keywords: ["pons", "brainstem", "random", "electrical", "signals"],
        },
        {
          point: "Explains Synthesis: forebrain / cortex weaves those signals into a narrative without hidden symbolic meaning",
          keywords: ["forebrain", "cortex", "meaning", "story", "narrative", "stitched", "interprets"],
        },
        {
          point: "Links Iorio et al. (pandemic / waking emotional distress shaping recurring dream themes / continuity)",
          keywords: ["iorio", "pandemic", "covid", "lockdown", "waking", "emotional", "trauma", "distress"],
        },
      ],
      commonError:
        "Confusing 'Activation' and 'Synthesis' or forgetting to mention the pons (brainstem) and cerebral cortex (forebrain).",
      hints: [
        "Spell out BOTH halves of Hobson & McCarley: Activation (pons in REM) + Synthesis (cortex making sense of signals).",
        "Contrast with Freud's unconscious wish-fulfilment and bring in Iorio et al.'s pandemic anxiety dreams!",
      ],
      strategy: "Freud (wish symbolism) vs Hobson & McCarley (Pons + Cortex) + Iorio continuity",
    },
    {
      kind: "written",
      id: "exam-p1a-q15",
      topicId: "sleep-and-dreams",
      guideRef: "sleep-disorders-hygiene",
      difficulty: "core",
      marks: 3,
      question:
        "Arjun drinks espresso at 20:30, revises on a bright laptop in bed until midnight, and lies awake for two hours with **sleep-onset insomnia**. Recommend **three distinct evidence-based sleep hygiene strategies**, briefly stating **why** one of them works biologically. [3 marks]",
      modelAnswer:
        "1) Avoid caffeine (coffee/energy drinks) for at least 6–8 hours before bedtime. 2) Stop using blue-light screens 60 minutes before sleep and keep the bedroom dark, quiet and cool. 3) Reserve the bed strictly for sleep (stimulus control — study at a desk instead) and maintain a consistent wake-up time every morning. Biologically, eliminating late-night laptop blue light stops retinal suppression of the SCN–pineal pathway, allowing natural melatonin secretion to trigger sleepiness.",
      markScheme: [
        {
          point: "Gives 1st valid sleep hygiene step (e.g. cut evening caffeine 6+ hours before bed)",
          keywords: ["caffeine", "coffee", "espresso", "afternoon"],
        },
        {
          point: "Gives 2nd & 3rd valid sleep hygiene steps (screen curfew / dark cool room / bed only for sleep stimulus control / fixed wake time)",
          keywords: ["screen", "blue light", "dark", "cool", "desk", "stimulus control", "consistent wake", "same time"],
        },
        {
          point: "Explains biological mechanism accurately (e.g. blocking blue light lets SCN/pineal release melatonin, OR avoiding caffeine prevents adenosine-receptor blockade)",
          keywords: ["melatonin", "pineal", "scn", "adenosine", "stimulant"],
        },
      ],
      commonError:
        "Vaguely writing 'sleep earlier' instead of concrete behavioural hygiene changes + biological mechanism.",
      hints: [
        "Spot Arjun's three bad habits in the stem: 20:30 espresso, bright laptop screen, and studying IN bed!",
        "Explain how blue light suppresses pineal **melatonin** (or how caffeine blocks adenosine).",
      ],
      strategy: "Fix stem habits + link to SCN/melatonin biology",
    },

    // =========================================================================
    // SECTION C: PROSOCIAL BEHAVIOUR (Q16–Q23)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p1a-q16",
      topicId: "prosocial-behaviour",
      guideRef: "bystander-apathy",
      difficulty: "warmup",
      question:
        "What is the precise distinction between **prosocial behaviour** and **true altruism**?",
      options: [
        "Prosocial behaviour only occurs among genetic relatives, whereas altruism only occurs on public transport",
        "Prosocial behaviour includes any voluntary action intended to benefit others (even for praise or mood boost), whereas altruism helps another at personal cost with zero expectation of self-reward",
        "Prosocial behaviour is reflexive and unconscious, whereas altruism requires tangible token rewards",
        "Altruism means ignoring emergencies in crowds, whereas prosocial behaviour means copying television violence",
      ],
      answerIndex: 1,
      explanation:
        "**Prosocial behaviour** is the broad umbrella for any helping/sharing act that benefits others; **altruism** is the selfless subset motivated purely by concern for the other person without egoistic reward.",
      hints: ["One is the broad helping umbrella; the other requires pure unselfishness without personal gain."],
      strategy: "Prosocial = any helping act; Altruism = selfless helping with no egoistic reward",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q17",
      topicId: "prosocial-behaviour",
      guideRef: "bystander-apathy",
      difficulty: "core",
      question:
        "Smoke seeps through an exam-hall vent. Every student glances around, sees everyone else staying calm and writing, and concludes *'It can't be a real fire, just steam!'* Which psychological process from Latané & Darley's model is preventing Step 2 (interpreting the event as an emergency)?",
      options: [
        "Pluralistic ignorance",
        "Kin selection",
        "Vicarious token reinforcement",
        "Reciprocal altruism",
      ],
      answerIndex: 0,
      explanation:
        "**Pluralistic ignorance** occurs in ambiguous situations when bystanders look to others' calm outward reactions to define reality and collectively misinterpret an emergency as harmless. (**Diffusion of responsibility** happens at Step 3 once an emergency IS recognised: assuming someone else will act!)",
      hints: [
        "Careful: are they assuming someone else will phone 999 (Step 3), or using others' calm faces to decide NOTHING is wrong (Step 2)?",
        "Collectively misreading an ambiguous event because everyone looks calm = pluralistic ignorance!",
      ],
      strategy: "Step 2 (ambiguous → 'not an emergency') = Pluralistic Ignorance; Step 3 ('someone else will act') = Diffusion of Responsibility",
    },
    {
      kind: "short",
      id: "exam-p1a-q18",
      topicId: "prosocial-behaviour",
      guideRef: "bystander-apathy",
      commonError: "Confusing pluralistic ignorance (looking at calm faces to judge whether an emergency is real) with diffusion of responsibility (dividing personal duty to act across listeners).",
      difficulty: "warmup",
      question:
        "In **Latané & Darley's (1968)** intercom seizure experiment, 85% of participants helped when they thought they were alone (`2-person group`), dropping to **31%** when they believed **4 other bystanders** were also listening (`6-person group`). Name the cognitive mechanism where each bystander feels less personal duty to act as crowd size grows.",
      answer: {
        type: "text",
        accept: ["diffusion of responsibility"],
        display: "diffusion of responsibility",
      },
      solution: [
        "When multiple witnesses are present, personal obligation is divided psychologically across the group — **diffusion of responsibility**.",
      ],
      hints: ["Three words: '______ of responsibility'."],
      strategy: "More bystanders → shared/diffused responsibility",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q19",
      topicId: "prosocial-behaviour",
      guideRef: "cost-reward-piliavin",
      difficulty: "core",
      question:
        "What surprising result did **Piliavin et al. (1969)** find on New York subway trains regarding the **number of passengers in the carriage** when the cane-carrying victim collapsed?",
      options: [
        "Zero passengers ever helped the cane victim in any carriage",
        "Female passengers carried the male victim off the train significantly more often than male passengers",
        "Passengers only helped when promised a $10 subway voucher beforehand",
        "Opposite to laboratory bystander apathy, larger crowds on the subway helped JUST AS FAST (or slightly faster) than smaller crowds — while the cane victim received far more spontaneous help (~95%) than the drunk victim (~50%)",
      ],
      answerIndex: 3,
      explanation:
        "In Piliavin's real-world subway field experiment, **diffusion of responsibility did NOT slow down helping** for the clearly visible cane victim (~95% spontaneous help in median ~5 s!) because passengers could see each other face-to-face and could not easily escape distressing arousal.",
      hints: [
        "Compare the cane victim (~95% help) vs drunk victim (~50% help).",
        "Did Piliavin find classic lab bystander apathy in crowded carriages, or rapid helping?",
      ],
      strategy: "Know Piliavin's two headline findings: Cane >> Drunk, and NO crowd-size slowdown!",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q20",
      topicId: "prosocial-behaviour",
      guideRef: "biological-evolutionary",
      difficulty: "core",
      question:
        "How did **Rushton et al.'s** twin questionnaire study support a **biological/genetic** basis for prosocial behaviour?",
      options: [
        "Dizygotic (non-identical) twins scored higher on altruism than monozygotic twins",
        "Twins raised in cities helped dropped pens less often than singletons in Levine et al.",
        "Monozygotic (identical, 100% shared genes) twins showed significantly stronger correlations on self-reported altruism and empathy scales (~50% heritability) than dizygotic twins (~50% shared genes)",
        "Brain scans showed twins lacked an amygdala altogether",
      ],
      answerIndex: 2,
      explanation:
        "Rushton et al. compared monozygotic (MZ) and dizygotic (DZ) adult twin pairs and found much higher concordance/correlation for altruism, empathy and nurturance in MZ twins, estimating roughly ~50% genetic variance alongside environmental shaping.",
      hints: [
        "Compare MZ twins (100% shared DNA) against DZ twins (50% shared DNA).",
        "Higher similarity in MZ twins points to genetic heritability.",
      ],
      strategy: "MZ > DZ similarity = genetic heritability support",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q21",
      topicId: "prosocial-behaviour",
      guideRef: "media-parental-influences",
      difficulty: "core",
      question:
        "What did **Prot et al.'s** large cross-cultural investigation (across Western and East Asian nations) conclude about **prosocial media** (video games/TV where characters help and cooperate)?",
      options: [
        "Prosocial media had zero relationship with empathy in collectivist cultures",
        "Exposure to prosocial media increased trait empathy, which in turn predicted higher real-world helping behaviour across diverse cultures both correlationally and longitudinally",
        "Playing prosocial video games actually increased playground aggression",
        "Only parental punishment, never media role models, influenced teenagers' helping",
      ],
      answerIndex: 1,
      explanation:
        "Prot et al. demonstrated across thousands of youths in multiple countries (e.g. US, Europe, Japan, Singapore/East Asia) that prosocial media exposure builds **empathy** over time, mediating higher real-world **helping**.",
      hints: [
        "Think Social Learning + General Learning Model: prosocial media → empathy → helping!",
        "Did this hold in only one country, or cross-culturally?",
      ],
      strategy: "Prot et al. = Prosocial media → ↑ Empathy → ↑ Helping across cultures",
    },
    {
      kind: "written",
      id: "exam-p1a-q22",
      topicId: "prosocial-behaviour",
      guideRef: "cost-reward-piliavin",
      difficulty: "core",
      marks: 4,
      question:
        "Using **Piliavin's Arousal-Cost-Reward Model**, explain why subway commuters helped the **ill cane victim** far more readily than the **drunk victim**, and link one cross-cultural finding from **Levine et al.** on situational helping. [4 marks]",
      modelAnswer:
        "According to Piliavin's model, witnessing an emergency triggers unpleasant physiological arousal that bystanders seek to reduce by weighing the costs of helping against the costs of NOT helping. For the drunk victim, perceived costs of helping were high (risk of aggression, embarrassment or disgust) while costs of not helping were low (blaming the victim as personally responsible), so bystanders didn't intervene. For the cane victim, helping costs were low and guilt/shame for ignoring an innocent ill person was high, driving rapid direct help. Situationally, Levine et al. showed across 23 world cities that helping strangers also varies by cultural norms (e.g. higher simpatico values in Rio de Janeiro) and slower pace of life / economic context.",
      markScheme: [
        {
          point: "Explains unpleasant physiological/empathic arousal motivating cost-reward calculation",
          keywords: ["arousal", "unpleasant", "distress", "weigh"],
        },
        {
          point: "Explains high cost of helping (danger/disgust/embarrassment) + low cost of not helping (self-blame/fault) for the drunk victim",
          keywords: ["drunk", "danger", "embarrass", "disgust", "own fault", "blam", "high cost"],
        },
        {
          point: "Explains low cost of helping + high guilt/empathy cost of NOT helping the innocent cane victim",
          keywords: ["cane", "innocent", "guilt", "shame", "low cost"],
        },
        {
          point: "Accurately links Levine et al.'s cross-cultural city study (e.g. 23 cities, simpatico norms in Rio/Latin America, pace of life or economic factors)",
          keywords: ["cities", "rio", "simpatico", "pace of life", "cross-cultural", "cultural norm", "economic"],
        },
      ],
      commonError:
        "Mentioning 'costs' without distinguishing Costs of Helping vs Costs of NOT Helping!",
      hints: [
        "Compare BOTH sides of Piliavin's matrix (Cost of Helping vs Cost of NOT Helping) for Drunk vs Cane.",
        "Add 1 sentence on Levine et al.'s cross-cultural street studies (e.g. Rio's *simpatico* culture or city pace of life).",
      ],
      strategy: "Arousal → Cost of Helping vs Cost of Not Helping + Levine cross-cultural link",
    },
    {
      kind: "written",
      id: "exam-p1a-q23",
      topicId: "prosocial-behaviour",
      guideRef: "empathy-social-learning",
      difficulty: "challenge",
      marks: 4,
      question:
        "Contrast **Batson's Empathy-Altruism Hypothesis** with **Social Learning Theory** as explanations for why a Year 11 student volunteers every Saturday at an animal shelter. [4 marks]",
      modelAnswer:
        "Batson's Empathy-Altruism Hypothesis argues that if the student feels genuine empathic concern (putting themselves in the neglected animals' perspective), their motivation is purely altruistic — aiming solely to relieve the animals' suffering even when nobody is watching and walking away would be easy (unlike egoistic personal distress). In contrast, Social Learning Theory explains volunteering through nurture and environmental learning: observing admired role models (such as parents or older siblings volunteering), imitating their charitable behaviour, and receiving direct praise or vicarious reinforcement (seeing role models praised for kindness).",
      markScheme: [
        {
          point: "Explains Batson's empathic concern / perspective-taking driving true unselfish altruism",
          keywords: ["empathic concern", "perspective", "altruis", "unselfish", "purely"],
        },
        {
          point: "Contrasts genuine altruism with egoistic personal distress / helping even without external reward or when escape is easy",
          keywords: ["personal distress", "egoistic", "escape", "nobody is watching", "without reward"],
        },
        {
          point: "Explains Social Learning: observing and imitating prosocial role models (parents, peers, media)",
          keywords: ["role model", "observ", "imitat", "modelling", "parent"],
        },
        {
          point: "Includes vicarious reinforcement or social praise / norms strengthening helping",
          keywords: ["vicarious reinforcement", "praise", "reward", "reinforc"],
        },
      ],
      commonError:
        "Treating empathy and social learning as identical rather than contrasting internal altruistic motive (Batson) against learned role-model reinforcement (SLT).",
      hints: [
        "Unpack Batson: empathic concern → true altruism (vs personal distress).",
        "Unpack SLT: role-model observation + imitation + vicarious reinforcement.",
      ],
      strategy: "Contrast internal empathic concern (Batson) vs external modelling/vicarious reward (SLT)",
    },

    // =========================================================================
    // SECTION D: EXPERIMENTAL RESEARCH METHODS & DATA (Q24–Q30)
    // =========================================================================
    {
      kind: "short",
      id: "exam-p1a-q24",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "warmup",
      question:
        "Eight participants in an acoustic-interference STM trial recall the following numbers of digits: **11, 14, 9, 16, 11, 13, 8, 11**. Calculate the **mean** number of digits recalled, to **1 decimal place**.",
      answer: { type: "number", value: 11.6, tolerance: 0.05 },
      traps: [
        {
          spec: { type: "number", value: 11 },
          feedback: "11 is both the mode and the median! Add all 8 scores (93) and divide by 8 for the mean.",
        },
      ],
      solution: [
        "Sum all 8 scores: {{11 + 14 + 9 + 16 + 11 + 13 + 8 + 11 = 93}}.",
        "Divide by {{N = 8}}: {{93 / 8 = 11.625}} ≈ **11.6** digits (to 1 d.p.).",
      ],
      hints: ["Add all 8 numbers (93) and divide by 8, rounding 11.625 to 1 decimal place."],
      strategy: "Sum ÷ N, round to 1 d.p.",
    },
    {
      kind: "short",
      id: "exam-p1a-q25",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "core",
      question:
        "In a subway helping trial of **120 commuters**, **84 commuters** helped the cane victim within 10 seconds while the remaining **36** did not. Write the **ratio** of **helpers to non-helpers** in its **simplest form**.",
      answer: { type: "ratio", parts: [7, 3], simplest: true },
      traps: [
        {
          spec: { type: "ratio", parts: [7, 10] },
          feedback: "7 : 10 compares helpers (84) to ALL commuters (120) — compare helpers (84) to non-helpers (36)!",
        },
        {
          spec: { type: "ratio", parts: [3, 7] },
          feedback: "Keep the order asked: helpers (84) first, non-helpers (36) second = 7 : 3.",
        },
      ],
      solution: [
        "Helpers : Non-helpers = `84 : 36`.",
        "Divide both sides by their highest common factor (`12`): **7 : 3**.",
      ],
      hints: [
        "Start with 84 : 36.",
        "Divide both numbers by 12 to simplify completely.",
      ],
      strategy: "Keep order, divide by HCF (12)",
    },
    {
      kind: "short",
      id: "exam-p1a-q26",
      topicId: "research-methods",
      guideRef: "experiments-designs-sampling",
      difficulty: "core",
      question:
        "A hospital sleep clinic treats **250 patients** (`150 with sleep-onset insomnia` and `100 with sleep-maintenance insomnia`). A researcher selects a **stratified sample of 30 patients**. How many **sleep-onset insomnia** patients must be randomly selected?",
      answer: { type: "number", value: 18 },
      traps: [
        {
          spec: { type: "number", value: 12 },
          feedback: "12 is the count for sleep-maintenance insomnia (100/250 × 30) — calculate 150/250 × 30 for sleep-onset!",
        },
      ],
      solution: [
        "Proportion with sleep-onset insomnia = {{150 / 250 = 0.6}} (60%).",
        "Number in stratified sample of 30 = {{0.6 * 30 = 18}} patients.",
      ],
      hints: [
        "Find the fraction of sleep-onset patients in the clinic (150 ÷ 250 = 0.6).",
        "Multiply 0.6 by the desired sample size of 30.",
      ],
      strategy: "Stratum proportion × sample size",
    },
    {
      kind: "mcq",
      id: "exam-p1a-q27",
      topicId: "research-methods",
      guideRef: "variables-hypotheses-controls",
      difficulty: "core",
      question:
        "Dr Yeo investigates whether room temperature (16 °C vs 28 °C) affects recall of a 25-word list. Halfway through, the air-conditioning breaks so the '16 °C' group actually sits in a noisy hallway while workmen hammer! Why does this destroy **internal validity**?",
      options: [
        "Because the hallway has too much ecological validity",
        "Because 25 words is qualitative nominal data",
        "Because Dr Yeo used a bar chart instead of a histogram",
        "Because loud hammering noise varied systematically with one condition only, acting as a confounding variable so Dr Yeo cannot tell whether temperature or noise changed recall",
      ],
      answerIndex: 3,
      explanation:
        "Hammering noise occurred *only* in the cool condition, becoming a **confounding variable** that makes it impossible to isolate the effect of the IV (temperature) on the DV (words recalled).",
      hints: [
        "Only ONE condition suffered the loud hammering noise!",
        "When a nuisance variable varies systematically with the IV, it becomes a confounding variable.",
      ],
      strategy: "Systematic nuisance on one condition = Confounding variable → Low internal validity",
    },
    {
      kind: "written",
      id: "exam-p1a-q28",
      topicId: "research-methods",
      guideRef: "variables-hypotheses-controls",
      difficulty: "core",
      marks: 2,
      question:
        "A psychologist tests whether **guided imagery** improves dream recall compared with **no imagery instruction**. Participants keep a morning tally of the number of distinct dreams remembered across 7 nights. Write a fully operationalised **directional hypothesis** for this study. [2 marks]",
      modelAnswer:
        "Participants who practise guided imagery before sleep will record significantly more distinct remembered dreams across 7 nights in their morning tally than participants given no imagery instruction.",
      markScheme: [
        {
          point: "States a clear directional prediction ('more' / 'higher' / 'greater number')",
          keywords: ["more", "higher", "greater"],
        },
        {
          point: "Operationalises BOTH IV conditions (guided imagery vs no imagery instruction) AND the DV (number of dreams tallied/recorded over 7 nights)",
          keywords: ["number of", "7 nights", "seven nights", "tallied", "recorded", "without imagery"],
        },
      ],
      commonError:
        "Writing 'Guided imagery improves dream memory' without naming the control condition or the 7-night dream count.",
      hints: [
        "Use 'significantly more…' to make it directional.",
        "Include BOTH 'guided imagery vs no imagery instruction' AND 'number of dreams recorded across 7 nights'!",
      ],
      strategy: "Directional comparative + operationalised IV & DV",
    },
    {
      kind: "written",
      id: "exam-p1a-q29",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "core",
      marks: 4,
      question:
        "Inspect the bar chart below from an independent-measures experiment on bystander group size and helping latency:\n\n| Condition | Mean Latency to Help (s) | Range (s) |\n|---|---|---|\n| Alone Bystander ($n = 20$) | 9.5 | 6 |\n| Group of 5 Passive Confederates ($n = 20$) | 34.0 | 29 |\n\nInterpret what **both** the **mean** and the **range** show about helping behaviour in the two conditions. [4 marks]",
      diagram: `<svg viewBox="0 0 380 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart with gaps comparing mean helping latency of 9.5 seconds when Alone versus 34.0 seconds in a Group of 5"><rect x="8" y="8" width="364" height="159" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="55" y1="138" x2="340" y2="138" stroke="#334155" stroke-width="2"/><line x1="55" y1="138" x2="55" y2="22" stroke="#334155" stroke-width="2"/><rect x="98" y="108" width="68" height="30" fill="#34d399" stroke="#059669" stroke-width="1.5"/><text x="132" y="102" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#065f46" font-family="sans-serif">9.5 s</text><text x="132" y="153" font-size="10" text-anchor="middle" fill="#334155" font-family="sans-serif">Alone</text><rect x="224" y="32" width="68" height="106" fill="#f87171" stroke="#dc2626" stroke-width="1.5"/><text x="258" y="26" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b" font-family="sans-serif">34.0 s</text><text x="258" y="153" font-size="10" text-anchor="middle" fill="#334155" font-family="sans-serif">Group of 5</text><text x="22" y="82" font-size="9.5" text-anchor="middle" transform="rotate(-90 22 82)" fill="#334155" font-family="sans-serif">Mean Latency (s)</text></svg>`,
      modelAnswer:
        "First, the mean helping latency is far shorter when Alone (9.5 s) than in a Group of 5 passive confederates (34.0 s), showing participants helped much faster on average when alone (supporting diffusion of responsibility in groups). Second, the range is much smaller when Alone (6 s) than in the Group of 5 (29 s), demonstrating that lone bystanders reacted consistently fast, whereas group bystanders showed wide individual variation in hesitation time.",
      markScheme: [
        {
          point: "Compares condition means using exact figures (9.5 s vs 34.0 s)",
          keywords: ["9.5", "34"],
        },
        {
          point: "Interprets latency direction correctly (shorter latency = FASTER average helping when Alone / slower in Group)",
          keywords: ["faster", "quicker", "slower", "hesitat", "longer to help"],
        },
        {
          point: "Compares condition ranges using exact figures (6 s vs 29 s)",
          keywords: ["6", "29", "smaller range", "wider range"],
        },
        {
          point: "Interprets range in terms of consistency vs individual spread/variation",
          keywords: ["consistent", "consistency", "varied", "variation", "spread", "clustered"],
        },
      ],
      commonError:
        "Carelessly writing '34.0 s is higher so the Group of 5 helped BETTER' — 34.0 s is LATENCY (delay), so higher seconds means SLOWER helping!",
      hints: [
        "Watch the units: 'Latency to Help (s)' = delay time! Is 9.5 s faster or slower than 34.0 s?",
        "Then compare the two ranges (6 s vs 29 s) in terms of consistency vs variation.",
      ],
      strategy: "Check whether lower or higher DV = better performance, then interpret Mean + Range",
    },
    {
      kind: "written",
      id: "exam-p1a-q30",
      topicId: "research-methods",
      guideRef: "experiments-designs-sampling",
      difficulty: "challenge",
      marks: 6,
      question:
        "**Design an Experiment (CIE 0266 Paper 1 Extended Question)**:\nDesign a **laboratory experiment** using an **independent measures design** to test whether **acoustic similarity** (rhyming words vs non-rhyming words) affects **Short-Term Memory recall** in adults. Your plan must state:\n1. The operationalised **IV** and **DV**.\n2. How participants are **allocated** to conditions and **one situational control**.\n3. **Two ethical guidelines** you will uphold during and after the experiment. [6 marks]",
      modelAnswer:
        "1) Variables: The operationalised IV is whether participants view a sequence of 8 acoustically similar rhyming words (e.g. cat, mat, hat, bat...) vs 8 acoustically dissimilar non-rhyming words matched for 3-letter length (e.g. pen, dog, bus, cup...). The operationalised DV is the number of words recalled in the exact serial order out of 8 immediately after presentation. 2) Allocation & Control: Forty adult participants are assigned via random allocation (computer random generator putting 20 in Rhyming, 20 in Non-Rhyming) to minimise participant memory differences. Situational variables are standardised by flashing every word on the same screen for exactly 1.0 second in an identical quiet room. 3) Ethics: Obtain written informed consent before testing (explaining the memory task and right to withdraw at any point without penalty), and keep score sheets anonymous using participant numbers to protect confidentiality, followed by a full debrief.",
      markScheme: [
        {
          point: "Operationalises IV clearly (list of rhyming/acoustically similar words vs non-rhyming words matched for length)",
          keywords: ["rhym", "similar", "dissimilar", "matched", "length"],
        },
        {
          point: "Operationalises DV clearly (number of words recalled out of 8/10/12 in order)",
          keywords: ["out of", "number of words", "correct order", "serial order"],
        },
        {
          point: "Uses random allocation (chance/generator/hat) to split participants into the two independent groups",
          keywords: ["random allocation", "randomly allocate", "random generator", "coin", "hat"],
        },
        {
          point: "Describes a concrete standardisation control (fixed seconds per word, silent room, identical instructions)",
          keywords: ["standardis", "1 second", "1.0 second", "2 seconds", "quiet room", "identical instructions"],
        },
        {
          point: "Explains 1st ethical step (written informed consent beforehand OR clear right to withdraw)",
          keywords: ["informed consent", "withdraw"],
        },
        {
          point: "Explains 2nd distinct ethical step (anonymity/confidentiality via ID numbers OR full debriefing afterwards)",
          keywords: ["confidential", "anonym", "participant number", "debrief"],
        },
      ],
      commonError:
        "Confusing random sampling with random allocation, or using unequal word lengths across the rhyming and non-rhyming lists.",
      hints: [
        "Make sure your two word lists have the SAME number of letters/syllables so only rhyme varies!",
        "Specify random allocation for independent measures + timed screen standardisation + two distinct DRIP/CC ethics steps.",
      ],
      strategy: "Operationalise IV/DV → Random Allocation + Standardisation → 2 Applied Ethics Points",
    },
  ],
};
