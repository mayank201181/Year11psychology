import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p2b",
  title: "CIE 0266 Paper 2 Mock B — Perception, Development & Non-Experimental Methods",
  calculator: true,
  minutes: 80,
  questions: [
    // =========================================================================
    // SECTION A: VISUAL PERCEPTION (Q01–Q07)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p2b-q01",
      topicId: "visual-perception",
      guideRef: "sensation-depth-constancy",
      difficulty: "warmup",
      question:
        "As your friend walks 20 metres away down a school corridor, the retinal image she casts on the back of your eye shrinks to **half its previous height** — yet you perceive her as remaining her normal 165 cm height rather than shrinking into a doll! Name this perceptual phenomenon.",
      options: [
        "Colour constancy",
        "Shape constancy",
        "Size constancy",
        "Retinal disparity blindness",
      ],
      answerIndex: 2,
      explanation:
        "**Size constancy** maintains stable perceived object size despite dramatic changes in viewing distance and retinal image size (scaling retinal size against perceived distance cues).",
      hints: ["Perceived height/size stays constant even when retinal image size halves!"],
      strategy: "Stable perceived size across distance = Size constancy",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q02",
      topicId: "visual-perception",
      guideRef: "gestalt-and-illusions",
      difficulty: "core",
      question:
        "Why is **Rubin's Vase / Two Faces** classified as an **ambiguous figure** whereas the **Ponzo railway-track illusion** is classified as a **geometric distortion illusion**?",
      options: [
        "Rubin's Vase triggers multistable figure-ground reversal between two equally valid interpretations of the unchanging stimulus, whereas the Ponzo illusion uses converging linear-perspective depth cues to make two identical horizontal bars systematically look different in size",
        "Rubin's Vase requires binocular goggles, whereas the Ponzo illusion only works in darkness",
        "Rubin's Vase proves Gibson's optic flow, whereas the Ponzo illusion proves colour constancy",
        "Only infants under 6 months old can see Rubin's Vase",
      ],
      answerIndex: 0,
      explanation:
        "**Ambiguous figures** (Rubin's Vase, Necker Cube) flip back and forth between two valid perceptual interpretations (**figure-ground reversal**), whereas **distortion illusions** (Ponzo, Müller-Lyer, Ebbinghaus) trick size/length judgements via misleading depth or context cues.",
      hints: [
        "Compare flipping between Vase ↔ Faces (two equally valid readings) vs misjudging bar length on converging tracks!",
        "Rubin's Vase = figure-ground ambiguity; Ponzo = size/length distortion.",
      ],
      strategy: "Ambiguous = bistable figure-ground flip; Distortion = misjudged size/length",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q03",
      topicId: "visual-perception",
      guideRef: "perceptual-set-culture",
      difficulty: "core",
      question:
        "In Bruner & Minturn's (1955) classic **perceptual set** experiment, an identical broken figure (`I3`) was perceived as the **letter 'B'** by participants primed with `A, C, D, E` — and as the **number '13'** by participants primed with `12, 14, 15, 16`! Which factor shaped their perception?",
      options: [
        "Physiological hunger deprivation",
        "Innate infant optic flow invariants",
        "Retinal rod-cell bleaching",
        "Expectation and surrounding context (top-down mental readiness)",
      ],
      answerIndex: 3,
      explanation:
        "Prior sequence context (`letters` vs `numbers`) created a **top-down expectation** (perceptual readiness/set) that resolved the exact same ambiguous retinal stimulus into either `B` or `13`.",
      hints: [
        "The physical ink on the screen (`I3`) was 100% identical for both groups!",
        "Letters vs numbers created a mental **expectation / context**.",
      ],
      strategy: "Bruner & Minturn B/13 = Expectation & Context shaping perceptual set",
    },
    {
      kind: "short",
      id: "exam-p2b-q04",
      topicId: "visual-perception",
      guideRef: "gibson-direct-theory",
      commonError: "Writing schemas (top-down mental frameworks in Gregory/Bartlett) instead of Gibson's direct bottom-up action possibilities: affordances.",
      difficulty: "core",
      question:
        "In **Gibson's Direct Theory**, what single word describes the **action possibilities** an environment directly offers an organism without conscious calculation (e.g. a flat knee-high rock *offers sitting*, an apple *offers grasping/eating*)?",
      answer: {
        type: "text",
        accept: ["affordances", "affordance"],
        display: "affordances",
      },
      solution: [
        "Gibson coined the noun **affordances** for the direct ecological action opportunities perceived immediately in objects and surfaces.",
      ],
      hints: [
        "Starts with 'afford…' (what an object 'affords' you to do with it!).",
        "A core concept in Gibson's ecological bottom-up theory.",
      ],
      strategy: "Direct ecological action possibilities = Affordances",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q05",
      topicId: "visual-perception",
      guideRef: "perceptual-set-culture",
      difficulty: "warmup",
      question:
        "In Gilchrist & Nesberg's study, participants deprived of food for **20 hours** judged projected colour slides of **meals** (steak, fried chicken) to be **significantly brighter** than did well-fed control participants (with zero difference on non-food landscape slides). Which factor influenced perceptual set here?",
      options: [
        "Monocular linear perspective",
        "Physiological motivation (hunger)",
        "Perceptual defence against taboo words",
        "Carpentered architecture",
      ],
      answerIndex: 1,
      explanation:
        "Food deprivation heightened **motivation (biological hunger drive)**, selectively sensitising top-down perception to food-related stimuli so meals appeared brighter.",
      hints: ["20 hours without food selectively boosted perceived brightness of MEAL slides only!"],
      strategy: "Gilchrist & Nesberg = Motivation (hunger) alters perceptual set",
    },
    {
      kind: "written",
      id: "exam-p2b-q06",
      topicId: "visual-perception",
      guideRef: "perceptual-set-culture",
      difficulty: "core",
      marks: 4,
      question:
        "Describe **Bremner et al.'s (2016)** cross-cultural study of the **Ebbinghaus illusion** among the **Himba** of Namibia and British urban participants, and explain what it reveals about **nature vs nurture** in visual perception. [4 marks]",
      modelAnswer:
        "Bremner et al. (2016) compared rural traditional Himba adults in open Namibian savannahs, urbanised Himba living in a Namibian town, and urban British participants on the Ebbinghaus illusion (judging which of two orange central circles was larger when surrounded by rings of large vs small context circles). Rural Himba were far less deceived by the surrounding context circles (showing local/analytic precision) than British participants, whereas urbanised Himba performed much closer to British adults! This demonstrates strong nurture/cultural shaping: rather than visual illusions being 100% biologically fixed (pure nature), growing up in cluttered urban environments trains holistic context integration.",
      markScheme: [
        {
          point: "Describes groups & task accurately: rural Himba vs urban UK (and urbanised Himba) judging central circle sizes in the Ebbinghaus illusion",
          keywords: ["himba", "british", "uk", "central circle", "surrounding"],
        },
        {
          point: "States key finding: rural Himba were significantly less fooled / less deceived / more accurate than urban UK participants",
          keywords: ["less fooled", "less deceived", "less susceptible", "weaker illusion", "more accurate"],
        },
        {
          point: "Notes the urbanised Himba comparison (living in town increased susceptibility toward UK levels)",
          keywords: ["urbanis", "town", "moved to", "closer to"],
        },
        {
          point: "Explains nature-nurture implication: perceptual set / context sensitivity is shaped by visual environment and culture (nurture), not purely innate",
          keywords: ["nurture", "environment", "cluttered", "culture", "not purely innate", "experience"],
        },
      ],
      commonError:
        "Confusing Bremner et al.'s (2016) Ebbinghaus circle study with Hudson's antelope depth-picture study!",
      hints: [
        "Specify the THREE groups (Rural Himba, Urbanised Town Himba, Urban UK) + the Ebbinghaus circles result!",
        "Why is the difference between RURAL Himba and TOWN Himba (same genetics, different environment!) killer proof of nurture?",
      ],
      strategy: "Rural Himba vs Town Himba vs UK → Proves urban visual environment (nurture) shapes illusion!",
    },
    {
      kind: "written",
      id: "exam-p2b-q07",
      topicId: "visual-perception",
      guideRef: "sensation-depth-constancy",
      difficulty: "core",
      marks: 3,
      question:
        "An artist paints a flat 2D canvas of a mountain road that looks remarkably 3D. Name and explain **three distinct monocular depth cues** the artist can paint onto the flat canvas to create depth. [3 marks]",
      modelAnswer:
        "1) Linear perspective: painting the two parallel edges of the road converging toward a vanishing point on the horizon makes the road appear to recede into the distance. 2) Occlusion (interposition): painting a roadside tree partially overlapping/blocking a cottage behind it signals the tree is closer. 3) Relative size (or texture gradient / height in plane): painting cars tiny near the high horizon and large near the bottom foreground cues greater distance.",
      markScheme: [
        {
          point: "Names and accurately explains 1st monocular cue (e.g. linear perspective = parallel lines converging toward horizon)",
          keywords: ["linear perspective", "parallel", "converg", "vanishing"],
        },
        {
          point: "Names and accurately explains 2nd monocular cue (e.g. occlusion / interposition = closer object partially blocks farther object)",
          keywords: ["occlusion", "interposition", "overlap", "block"],
        },
        {
          point: "Names and accurately explains 3rd monocular cue (e.g. relative size, texture gradient becoming finer, OR height in plane closer to horizon)",
          keywords: ["relative size", "texture gradient", "height in", "smaller", "horizon"],
        },
      ],
      commonError:
        "Listing retinal disparity or convergence — a 2D flat painting CANNOT use binocular disparity!",
      hints: [
        "Watch the stem trap: a flat 2D canvas only has **monocular pictorial cues** (never retinal disparity or convergence)!",
        "Pick 3 from: Linear perspective, Occlusion, Relative size, Texture gradient, Height in plane.",
      ],
      strategy: "Pick 3 Monocular Pictorial Cues + Apply each to the mountain road",
    },

    // =========================================================================
    // SECTION B: MOTIVATION & NEEDS (Q08–Q15)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p2b-q08",
      topicId: "motivation-and-needs",
      guideRef: "maslow-hierarchy",
      difficulty: "warmup",
      question:
        "Put **Maslow's 5-tier Hierarchy of Needs** in the exact ascending sequence from the **bottom base (`1`)** to the **top apex (`5`)**:",
      options: [
        "1. Self-Actualisation → 2. Esteem → 3. Love & Belonging → 4. Safety → 5. Physiological",
        "1. Safety → 2. Physiological → 3. Esteem → 4. Love & Belonging → 5. Self-Actualisation",
        "1. Autonomy → 2. Competence → 3. Relatedness → 4. Token Rewards → 5. Nostalgia",
        "1. Physiological → 2. Safety → 3. Love & Belonging → 4. Esteem → 5. Self-Actualisation",
      ],
      answerIndex: 3,
      explanation:
        "Maslow's pyramid ascends from basic survival **Physiological** needs (food, water, sleep) → **Safety** (security, shelter) → **Love & Belonging** (friendship, family) → **Esteem** (respect, achievement) → **Self-Actualisation** (fulfilling personal potential).",
      hints: ["Survival food/water comes first (1), shelter/security second (2), friendship third (3), respect fourth (4), potential top (5)!"],
      strategy: "Physiological → Safety → Love/Belonging → Esteem → Self-Actualisation",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q09",
      topicId: "motivation-and-needs",
      guideRef: "maslow-hierarchy",
      difficulty: "core",
      question:
        "A starving artist skips meals in a freezing attic to finish a masterpiece, or a political hunger-striker risks their life for justice. How do such real-world cases **challenge Maslow's strict sequential pyramid**?",
      options: [
        "They prove physiological needs do not exist in humans",
        "They prove Boniecki & Moore's classroom tokens work in art studios",
        "They show people can pursue higher growth/esteem/self-actualisation values BEFORE lower deficiency survival and safety needs are satisfied, and collectivist cultures often prioritise group belonging above individual self-actualisation",
        "They show self-actualisation is a primary biological homeostasis drive",
      ],
      answerIndex: 2,
      explanation:
        "Maslow's rigid bottom-up sequence is falsified whenever people sacrifice lower physiological/safety tiers for higher artistic or moral ideals — and cross-cultural psychologists note Maslow's top tier ('*self*-actualisation') reflects Western **individualism** over collectivist community harmony.",
      hints: [
        "According to strict Maslow, can you self-actualise while starving or in danger?",
        "Hungry artists and heroic activists skip straight to the top despite unmet base needs!",
      ],
      strategy: "Non-sequential exceptions (starving artist) + Collectivist cultural critique",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q10",
      topicId: "motivation-and-needs",
      guideRef: "drive-incentive-psychodynamic",
      difficulty: "core",
      question:
        "According to the **Yerkes-Dodson Law** (`inverted-U curve` of arousal and performance), what level of physiological arousal produces **optimal performance** on a **complex, cognitively demanding exam** vs a **simple physical sprint**?",
      options: [
        "Moderate arousal produces peak performance overall — with complex cognitive tasks peaking at slightly lower-to-moderate arousal (before high anxiety impairs working memory), whereas simple well-practised tasks tolerate higher arousal",
        "Maximum panic-level arousal is optimal for complex exams, while very low arousal is optimal for sprinting",
        "Zero arousal (deep sleep) is optimal for both tasks",
        "Arousal has a linear positive correlation where more anxiety always improves exam marks",
      ],
      answerIndex: 0,
      explanation:
        "The **inverted-U Yerkes-Dodson curve** shows too little arousal causes boredom/inattention and excessive arousal causes choking/anxiety: **moderate arousal** is best, and difficult/unfamiliar cognitive tasks peak at lower arousal than simple endurance/speed tasks.",
      hints: [
        "Picture an upside-down 'U': low arousal = sleepy; moderate = sharp; extreme = panic/blanking out!",
        "Compare taking a tricky maths proof vs lifting a heavy weight.",
      ],
      strategy: "Inverted-U: Moderate arousal optimal (lower peak for complex cognitive tasks)",
    },
    {
      kind: "short",
      id: "exam-p2b-q11",
      topicId: "motivation-and-needs",
      guideRef: "intrinsic-extrinsic-reinforcement",
      difficulty: "warmup",
      question:
        "Rohan practises guitar every evening **purely because he loves the feeling of mastering chords**, whereas his brother practises **only because his dad pays him $5 per song**. Does **Rohan** show **intrinsic** or **extrinsic** motivation?",
      answer: {
        type: "text",
        accept: ["intrinsic", "intrinsic motivation"],
        display: "intrinsic motivation",
      },
      traps: [
        {
          spec: { type: "text", accept: ["extrinsic", "extrinsic motivation"] },
          feedback: "His brother ($5 cash reward) is extrinsically motivated — Rohan's internal love of playing is INTRINSIC motivation!",
        },
      ],
      solution: [
        "Performing an activity for internal enjoyment, curiosity and personal satisfaction rather than external rewards/punishments is **intrinsic motivation**.",
      ],
      hints: ["Read carefully which brother the question asks about: Rohan (internal love of chords)!"],
      strategy: "Internal enjoyment = Intrinsic; External money/grades/trophies = Extrinsic",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q12",
      topicId: "motivation-and-needs",
      guideRef: "intrinsic-extrinsic-reinforcement",
      difficulty: "core",
      question:
        "Why does **sincere verbal praise focused on effort and strategy** (*'Your breakdown of that essay plan was really clear!'*) usually **boost** rather than undermine intrinsic motivation, unlike cash bribes?",
      options: [
        "Because verbal praise is an unconditioned biological food stimulus",
        "Because praise is a negative punishment in Skinner's box",
        "Because verbal praise triggers retroactive amnesia for failure",
        "Because informational verbal praise affirms the learner's sense of competence without making them feel externally controlled",
      ],
      answerIndex: 3,
      explanation:
        "Deci's Cognitive Evaluation / SDT research shows tangible *controlling* rewards undermine **autonomy** (causing overjustification), whereas sincere *informational* verbal praise satisfies **competence** without feeling controlling — lifting intrinsic motivation!",
      hints: [
        "Compare feeling 'bribed/controlled' by cash vs feeling 'capable/competent' from genuine feedback!",
        "Connect verbal praise to Deci & Ryan's **competence** need.",
      ],
      strategy: "Controlling tangible bribes hurt Autonomy; Informational verbal praise boosts Competence",
    },
    {
      kind: "written",
      id: "exam-p2b-q13",
      topicId: "motivation-and-needs",
      guideRef: "self-determination-theory",
      difficulty: "core",
      marks: 4,
      question:
        "Using Deci & Ryan's **Self-Determination Theory** and **Calvo et al. (2010)**, explain how a secondary-school PE department can redesign lessons to stop Year 11 students dropping out of sport. [4 marks]",
      modelAnswer:
        "Deci & Ryan propose autonomous motivation thrives when three psychological needs are satisfied, supported by Calvo et al.'s (2010) 1-year longitudinal finding that adolescent athletes dropped out when coaches thwarted relatedness and autonomy (causing amotivation). First, to satisfy Autonomy, PE teachers should let Year 11s choose from diverse activities (badminton, dance, climbing, gym) and co-design personal fitness routines rather than barking authoritarian drills. Second, to satisfy Competence, teachers should set differentiated, achievable skill progressions with constructive technique feedback. Third, to satisfy Relatedness, supportive team pairings and inclusive, respectful teacher warmth build belonging.",
      markScheme: [
        {
          point: "Links Calvo et al. (2010): longitudinal athlete study showing thwarted relatedness & autonomy drive amotivation and sport dropout",
          keywords: ["calvo", "dropout", "amotivation", "longitudinal", "thwart"],
        },
        {
          point: "Applies Autonomy concretely to Year 11 PE (student choice of sport/role, non-controlling coaching)",
          keywords: ["autonomy", "choice", "choose", "options"],
        },
        {
          point: "Applies Competence concretely to Year 11 PE (graded skill mastery, constructive informational praise)",
          keywords: ["competence", "mastery", "skill", "constructive feedback"],
        },
        {
          point: "Applies Relatedness concretely to Year 11 PE (supportive team belonging, warm coach-pupil rapport)",
          keywords: ["relatedness", "belonging", "supportive", "teammate", "rapport"],
        },
      ],
      commonError:
        "Suggesting cash prizes for PE attendance — which relies on extrinsic tokens rather than SDT's Autonomy, Competence & Relatedness!",
      hints: [
        "Anchor your answer in **Calvo et al. (2010)** (thwarted relatedness + autonomy → dropout).",
        "Give one practical PE classroom strategy for **Autonomy**, **Competence**, and **Relatedness**!",
      ],
      strategy: "Cite Calvo (2010) + Apply Autonomy, Competence & Relatedness to Year 11 PE",
    },
    {
      kind: "written",
      id: "exam-p2b-q14",
      topicId: "motivation-and-needs",
      guideRef: "intrinsic-extrinsic-reinforcement",
      difficulty: "core",
      marks: 4,
      question:
        "Evaluate **Boniecki & Moore's (2003)** classroom token-economy study by explaining **one methodological strength** of its `ABA` design and **one practical/pedagogical limitation** of using tokens in schools. [4 marks]",
      modelAnswer:
        "Methodological strength: Using a structured A–B–A reversal design (2-week baseline → token economy → token removal) inside a real university psychology lecture gave high ecological validity AND strong causal internal validity — watching participation jump from ~4.5 to ~10.8 remarks per class and immediately revert to baseline proved the tokens (not student familiarity over term) caused the rise. Practical limitation: Participation dropped straight back to baseline the day tokens stopped, showing extrinsic token economies create dependency ('no reward, no hand-raising'), can trigger the overjustification effect on genuinely curious students, and reward quick surface answers rather than deep thought.",
      markScheme: [
        {
          point: "Strength: A-B-A baseline-intervention-return design OR natural real-classroom ecological validity / high inter-observer reliability",
          keywords: ["aba", "a-b-a", "baseline", "reversal", "real lecture", "ecological validity"],
        },
        {
          point: "Explains WHY A-B-A is strong: return to baseline proves tokens (not time/confident familiarity) caused the participation surge",
          keywords: ["prove", "time", "familiarity", "caused", "internal validity"],
        },
        {
          point: "Limitation: behaviour extinguishes immediately once tokens stop (short-lived extrinsic dependency)",
          keywords: ["stopped", "withdrawn", "removed", "dependen", "short-lived", "extinguish"],
        },
        {
          point: "Develops pedagogical risk (overjustification crowding out intrinsic curiosity, OR rewarding fast shallow hand-raising over quality)",
          keywords: ["overjustification", "intrinsic", "shallow", "quality", "curiosity"],
        },
      ],
      commonError:
        "Forgetting what happened in the second 'A' phase when tokens were removed!",
      hints: [
        "Why was removing the tokens in Phase 3 (`A2`) such a clever experimental control against 'students just got friendlier over the semester'?",
        "And what does that exact drop-back warn teachers about token dependency?",
      ],
      strategy: "ABA proves causal control (Strength) + Immediate drop shows extrinsic dependency (Limitation)",
    },
    {
      kind: "written",
      id: "exam-p2b-q15",
      topicId: "motivation-and-needs",
      guideRef: "drive-incentive-psychodynamic",
      difficulty: "challenge",
      marks: 3,
      question:
        "Compare **Biological Drive-Reduction ('Push')** motivation with **Cognitive Incentive ('Pull')** motivation when explaining why someone walks into a bakery right after eating a full dinner. [3 marks]",
      modelAnswer:
        "Hull's Biological Drive-Reduction ('push') theory cannot explain buying a pastry right after a full dinner because blood glucose and stomach stretch are already at homeostasis — there is zero internal physiological hunger deficit pushing the person! Instead, Cognitive Incentive ('pull') theory explains that enticing external environmental stimuli — the warm smell of cinnamon rolls and appealing window display — paired with learned expectation of pleasure pull behaviour toward an attractive external goal even without biological need.",
      markScheme: [
        {
          point: "Explains why Drive-Reduction ('push') fails here: person is full / in homeostasis with zero physiological deficit",
          keywords: ["full", "homeostasis", "no deficit", "push", "biological need"],
        },
        {
          point: "Explains Incentive ('pull') mechanism: external attractive stimulus (smell/sight of pastry) pulls behaviour",
          keywords: ["pull", "external", "smell", "sight", "attractive", "incentive"],
        },
        {
          point: "Includes cognitive expectation / learned reward value of eating the treat",
          keywords: ["expect", "pleasure", "learned", "anticipat", "reward value"],
        },
      ],
      commonError:
        "Saying 'smelling bread creates a primary biological need' — appetite for dessert when full is external incentive pull, not homeostatic deficit!",
      hints: [
        "Is a person who just ate a full dinner suffering a homeostatic energy deficit ('push')?",
        "Explain how external sensory/reward cues ('pull') + anticipated pleasure drive eating anyway!",
      ],
      strategy: "Zero internal 'push' (already in homeostasis) vs Strong external 'pull' (aroma + expected pleasure)",
    },

    // =========================================================================
    // SECTION C: LANGUAGE DEVELOPMENT (Q16–Q22)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p2b-q16",
      topicId: "language-development",
      guideRef: "stages-language-acquisition",
      difficulty: "core",
      question:
        "15-month-old Zara calls her family's golden retriever *'doggie'*, **AND** also points at cows, sheep and horses in a picture book calling every four-legged furry animal *'doggie!'* Meanwhile, her cousin Leo ONLY says *'duck'* for his yellow bath toy and refuses to call real pond ducks *'duck'*. Zara and Leo illustrate:",
      options: [
        "Zara = Underextension; Leo = Overextension",
        "Zara = Overextension; Leo = Underextension",
        "Zara = Grammatical overregularisation; Leo = Telegraphic syntax",
        "Zara = Babbling; Leo = Displacement",
      ],
      answerIndex: 1,
      explanation:
        "Stretching one word label too broadly to cover all similar objects (all 4-legged animals = *'doggie'*) is semantic **overextension**; restricting a category word too narrowly to one specific item (only the bath toy = *'duck'*) is **underextension**.",
      hints: [
        "Zara stretches *'doggie'* TOO WIDE across cows and horses; Leo shrinks *'duck'* TOO NARROW to one bath toy!",
        "Over-wide = Overextension; Too narrow = Underextension.",
      ],
      strategy: "Too broad category = Overextension; Too narrow single item = Underextension",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q17",
      topicId: "language-development",
      guideRef: "learning-behaviourist",
      difficulty: "core",
      question:
        "According to **Skinner's Behaviourist (Operant Conditioning) Theory** of language, how does an infant progress from random vocalisations (`'ba-da-ma'`) to saying `'mama'` when seeing their mother?",
      options: [
        "Through selective positive reinforcement and shaping of successive approximations (caregivers smile, hug and respond enthusiastically when sounds resemble real words, while ignoring random noises) alongside imitation",
        "Through an innate Universal Grammar switch in Broca's area",
        "Through resolving unconscious psychodynamic dream conflicts",
        "Through learning written spelling rules before speaking",
      ],
      answerIndex: 0,
      explanation:
        "Skinner (*Verbal Behavior*, 1957) explained word acquisition via **operant conditioning** — caregivers provide **selective positive reinforcement** (attention, smiles, milk) for closer and closer phonetic approximations (**shaping**), paired with Bandura-style **imitation/modelling**.",
      hints: [
        "Think Skinner's operant toolkit: **shaping** successive approximations + **selective positive reinforcement**!",
        "Eliminate Chomsky's Universal Grammar.",
      ],
      strategy: "Skinner = Operant shaping + Selective caregiver reinforcement + Imitation",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q18",
      topicId: "language-development",
      guideRef: "learning-behaviourist",
      difficulty: "core",
      question:
        "Brown & Hanlon observed real parent-child conversations and noticed parents rarely correct **bad grammar** (*Child: 'Mama isn't boy, he girl!' → Mum: 'That's right!'*), correcting **factual truth** instead! Why is this observation a major problem for **Skinner's behaviourist theory**?",
      options: [
        "Because it disproves Piaget's object permanence",
        "Because it proves parents never talk to young children",
        "Because it shows toddlers cannot hear consonants",
        "Because parents accidentally reinforce ungrammatical sentences as long as they are factually true, yet children still master adult syntax effortlessly within a few years!",
      ],
      answerIndex: 3,
      explanation:
        "If syntax depended on operant reinforcement of correct grammar, praising factually true *ungrammatical* speech (*'he girl!' → 'That's right!'*) should lock errors in! Rapid universal grammar mastery despite zero systematic grammar shaping supports Chomsky's **LAD**.",
      hints: [
        "Mum just praised *'Mama isn't boy, he girl!'* with *'That's right!'* — what did she accidentally reinforce?",
        "Yet every child still masters grammar anyway!",
      ],
      strategy: "Parents reinforce truth, not syntax — yet syntax still blossoms (critique of Skinner)",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q19",
      topicId: "language-development",
      guideRef: "piaget-bruner-cognitive",
      difficulty: "warmup",
      question:
        "Which features characterize **Child-Directed Speech (CDS / 'motherese')** within **Bruner's LASS**?",
      options: [
        "Rapid monotone whispering using complex passive clauses without pauses",
        "Refusing to speak until the child turns 4 years old",
        "Higher pitch, exaggerated prosodic intonation contours, slower tempo, clear pauses between phrases, repetition and concrete 'here-and-now' vocabulary",
        "Correcting every single morphological error with a time-out",
      ],
      answerIndex: 2,
      explanation:
        "**Child-Directed Speech** uses musical, exaggerated pitch contours, slower speech rate, clear word boundaries and joint-attention scaffolding to help infants segment the speech stream and map words onto objects.",
      hints: ["Think how caregivers naturally speak to babies across cultures: musical pitch, slower pace, clear pauses!"],
      strategy: "CDS = Higher musical pitch + Slower clear boundaries + Repetition/Recasting",
    },
    {
      kind: "short",
      id: "exam-p2b-q20",
      topicId: "language-development",
      guideRef: "animal-vs-human",
      difficulty: "core",
      question:
        "Name **Hockett's design feature** of human language that allows us to talk effortlessly about **dinosaurs 66 million years ago, next Friday's party, or unicorns on Mars** (things absent in time and space).",
      answer: {
        type: "text",
        accept: ["displacement"],
        display: "displacement",
      },
      traps: [
        {
          spec: { type: "text", accept: ["productivity", "creativity"] },
          feedback: "Productivity means recombining words into infinite novel sentences — referring to things distant in time/space (past, future, imaginary) is DISPLACEMENT!",
        },
      ],
      solution: [
        "**Displacement** is the capacity of language to communicate about events, objects and ideas removed in time (past/future) or space (absent/hypothetical) from the immediate here-and-now.",
      ],
      hints: [
        "Starts with 'displace…' — stepping outside the immediate here-and-now!",
        "Distinguish talking about absent past/future things (displacement) from infinite combinations (productivity).",
      ],
      strategy: "Past / Future / Absent things = Displacement",
    },
    {
      kind: "written",
      id: "exam-p2b-q21",
      topicId: "language-development",
      guideRef: "animal-vs-human",
      difficulty: "core",
      marks: 4,
      question:
        "Compare **great-ape lexigram/sign studies** (such as bonobo **Kanzi** or chimpanzee **Washoe**) with **human child language**, explaining **one impressive linguistic ability** apes demonstrated and **two key limitations** compared with human language. [4 marks]",
      modelAnswer:
        "Impressive ability: Savage-Rumbaugh showed bonobo Kanzi spontaneously acquired hundreds of geometric keyboard lexigrams via observation (without strict food drills) and understood novel spoken English requests like 'Put the pine needles in the refrigerator' (demonstrating semanticity and basic two-symbol word-order sensitivity). However, Limitation 1 is lack of open-ended recursive syntax/productivity: apes' utterances plateau around short 2–3 symbol telegraphic requests without mastering complex embedded clauses or morphological tenses. Limitation 2 is pragmatic function: ~90%+ of ape signing/lexigram presses are instrumental demands for food or tickles rather than declarative conversation, storytelling or asking curiosity questions — in sharp contrast to human children, who effortlessly master multi-clause grammar and rich displacement by age 3–4!",
      markScheme: [
        {
          point: "States genuine ape achievement (Kanzi/Washoe learned hundreds of symbols/signs; Kanzi understood novel word-order requests like 'pine needles in fridge' = semanticity)",
          keywords: ["kanzi", "washoe", "lexigram", "hundreds", "novel", "semantic"],
        },
        {
          point: "Limitation 1: Lacks open-ended recursive grammar / complex syntax (plateaus at short 2–3 word telegraphic combinations)",
          keywords: ["syntax", "grammar", "recursive", "2-3", "telegraphic", "plateau", "productivity"],
        },
        {
          point: "Limitation 2: Overwhelmingly food/action requests rather than declarative sharing, storytelling or asking questions",
          keywords: ["food", "request", "demand", "ask questions", "story", "conversation"],
        },
        {
          point: "Contrasts explicitly with effortless human child expansion (multi-clause syntax, displacement & rich social commentary by age 3–4)",
          keywords: ["3-year", "4-year", "effortless", "displacement", "children"],
        },
      ],
      commonError:
        "Claiming Kanzi learned 0 symbols (too dismissive!) OR claiming apes have full human grammar (ignoring the 2-year-old syntax ceiling!).",
      hints: [
        "Credit Kanzi fairly first (spontaneous lexigrams + novel sentence comprehension) for 1 mark.",
        "Then hit the two classic ceilings: (1) no complex recursive syntax beyond ~2–3 symbols, and (2) mostly food requests / never asking questions!",
      ],
      strategy: "Kanzi's Semantic Achievement (1m) + Syntax Ceiling & Food-Request Pragmatics vs Human Child (3m)",
    },
    {
      kind: "written",
      id: "exam-p2b-q22",
      topicId: "language-development",
      guideRef: "chomsky-nativist-lad",
      difficulty: "core",
      marks: 3,
      question:
        "Using **Lenneberg's Critical (Sensitive) Period Hypothesis** and **Senghas (1995)** (or case study **Genie**), explain why **age of first exposure** matters so deeply for mastering grammar. [3 marks]",
      modelAnswer:
        "Lenneberg proposed that human brain plasticity for native grammar acquisition peaks during an early biological window (infancy up to puberty), after which lateralisation reduces syntactic flexibility. Supporting this, Senghas (1995) found deaf Nicaraguan children exposed to Nicaraguan Sign Language in early childhood (<7–10 years) mastered fluent, complex spatial verb inflections far better than adolescents exposed late — mirrored by Genie, who was rescued from severe isolation at age 13½ and acquired many vocabulary words yet never mastered complex grammatical syntax or wh-questions.",
      markScheme: [
        {
          point: "Defines critical/sensitive biological window (early childhood before puberty when brain plasticity is highest)",
          keywords: ["window", "puberty", "plasticity", "early childhood", "lenneberg"],
        },
        {
          point: "Applies Senghas (1995) Nicaraguan Sign Language (early-exposed children surpassed late-exposed adolescents in grammatical inflections) OR Genie (rescued at 13)",
          keywords: ["senghas", "nicaraguan", "genie", "younger", "early", "13"],
        },
        {
          point: "Highlights the vocabulary-vs-grammar split (late learners can still learn words/semantics, but struggle permanently with complex syntax/morphology)",
          keywords: ["vocabulary", "words", "syntax", "grammar", "inflection"],
        },
      ],
      commonError:
        "Saying late learners 'cannot learn a single word' — Genie learned hundreds of nouns, proving the critical period specifically restricts SYNTAX/GRAMMAR!",
      hints: [
        "Define Lenneberg's early childhood plasticity window before puberty.",
        "Cite **Senghas (1995)** (young vs adolescent signers) or **Genie** — noting vocabulary can still grow while **grammar/syntax** suffers!",
      ],
      strategy: "Early plasticity window → Senghas (1995) / Genie → Vocabulary OK, Syntax impaired",
    },

    // =========================================================================
    // SECTION D: NON-EXPERIMENTAL RESEARCH METHODS & DATA (Q23–Q30)
    // =========================================================================
    {
      kind: "short",
      id: "exam-p2b-q23",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "warmup",
      question:
        "Ten athletes complete a 40-point Autonomy Questionnaire: **28, 31, 24, 31, 29, 35, 22, 31, 26, 33**. Calculate the **range** of these scores.",
      answer: { type: "number", value: 13 },
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback: "5 is 33 − 28 (last minus first)! Find the overall highest (35) minus the overall lowest (22).",
        },
      ],
      solution: [
        "Highest score = `35`; Lowest score = `22`.",
        "Range = {{35 - 22 = 13}}.",
      ],
      hints: ["Scan all 10 scores for the maximum (35) and minimum (22), then subtract."],
      strategy: "Highest − Lowest",
    },
    {
      kind: "short",
      id: "exam-p2b-q24",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "core",
      question:
        "Using the same ten Autonomy scores (**28, 31, 24, 31, 29, 35, 22, 31, 26, 33**), calculate the **median** score.",
      answer: { type: "number", value: 30 },
      traps: [
        {
          spec: { type: "number", value: 31 },
          feedback: "31 is the mode! Sort all 10 scores first (22, 24, 26, 28, 29, 31, 31, 31, 33, 35) and average the 5th (29) and 6th (31) values.",
        },
        {
          spec: { type: "number", value: 29 },
          feedback: "29 is the mean (290 ÷ 10 = 29) and the 5th value — for N = 10, average the 5th (29) and 6th (31) ordered scores!",
        },
      ],
      solution: [
        "Sort ascending: `22, 24, 26, 28, 29, 31, 31, 31, 33, 35` ($N = 10$).",
        "Average the 5th (`29`) and 6th (`31`) ordered scores: {{(29 + 31) / 2 = 30}}.",
      ],
      hints: [
        "Sort all 10 scores from 22 up to 35 first!",
        "With N = 10 (even), average the 5th (29) and 6th (31) numbers.",
      ],
      strategy: "Sort first, average 5th & 6th for N = 10",
    },
    {
      kind: "short",
      id: "exam-p2b-q25",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "core",
      question:
        "In a cross-cultural visual-illusion survey of **160 participants**, **64** came from rural villages and **96** came from cities. What **percentage** of the total sample came from **rural villages**?",
      answer: { type: "number", value: 40 },
      traps: [
        {
          spec: { type: "number", value: 60 },
          feedback: "60% is the urban city proportion (96 ÷ 160) — calculate 64 ÷ 160 × 100 for rural villages!",
        },
        {
          spec: { type: "number", value: 66.7, tolerance: 0.2 },
          feedback: "You divided 64 by 96 instead of the total sample (160)!",
        },
      ],
      solution: [
        "Percentage from rural villages = {{(64 / 160) * 100 = 0.40 * 100 = 40}}%.",
      ],
      hints: [
        "Divide the rural count (64) by the TOTAL sample (160).",
        "Multiply 0.40 by 100.",
      ],
      strategy: "(Subgroup ÷ Total N) × 100",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q26",
      topicId: "research-methods",
      guideRef: "non-experimental-methods",
      difficulty: "core",
      question:
        "A questionnaire on work motivation puts 10 positively worded items in a row (*'I love Monday mornings'*, *'I always enjoy extra tasks'*, *'My manager is inspiring'…*). Hurried respondents tick *'Agree'* down the entire page without reading carefully! What specific response bias is this, and how do questionnaire designers prevent it?",
      options: [
        "Order fatigue; prevent it via ABBA counterbalancing of participants' ages",
        "Acquiescence ('yea-saying') bias; prevent it by mixing positively worded and reverse-scored negatively worded items so respondents must read each statement thoughtfully",
        "Double-blind investigator bias; prevent it by switching to a histogram",
        "Event-sampling drift; prevent it by testing only 1 participant",
      ],
      answerIndex: 1,
      explanation:
        "Tendency to agree unthinkingly with questionnaire statements regardless of content is **acquiescence bias** ('yea-saying'), controlled by balancing positive items with **reverse-worded items**.",
      hints: [
        "Automatically saying 'Yes / Agree' to everything = acquiescence ('yea-saying') bias!",
        "What stops someone robotically ticking column 5 on every line?",
      ],
      strategy: "Yea-saying = Acquiescence bias → Fix with reverse-worded items",
    },
    {
      kind: "mcq",
      id: "exam-p2b-q27",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "core",
      question:
        "Dr Mensah downloads 50 published studies on Child-Directed Speech and vocabulary growth (totalling 4,800 infants across 14 countries) and combines their statistical results into a single overall effect size. What type of data and method is Dr Mensah using?",
      options: [
        "Primary qualitative case study",
        "Primary nominal mode tally",
        "Covert participant field experiment",
        "Secondary quantitative data in a meta-analysis",
      ],
      answerIndex: 3,
      explanation:
        "Synthesising pre-existing published studies collected by other researchers is **secondary data** analysed via a **meta-analysis** — boosting overall sample size and population generalisability, though vulnerable to publication ('file-drawer') bias.",
      hints: [
        "Did Dr Mensah test the 4,800 babies first-hand (primary), or combine existing published studies (secondary)?",
        "Combining statistical findings across many studies = meta-analysis.",
      ],
      strategy: "Combining pre-existing published studies = Secondary data (Meta-analysis)",
    },
    {
      kind: "written",
      id: "exam-p2b-q28",
      topicId: "research-methods",
      guideRef: "non-experimental-methods",
      difficulty: "core",
      marks: 4,
      question:
        "A charity researcher investigates whether **nostalgia score (0–50)** and **amount donated (£)** are linked across 80 adults viewing a print advert.\n1. Write a fully operationalised **non-directional correlational hypothesis** for this study. [2 marks]\n2. Explain **why** plotting these 80 adults on a **bar chart** would be inappropriate, naming the **correct graph** instead. [2 marks]",
      modelAnswer:
        "1) Hypothesis: There will be a significant correlation (relationship) between an adult's self-reported nostalgia score (out of 50) after viewing the advert and the amount of money they donate in pounds (£). 2) Graph choice: A bar chart is only appropriate for comparing discrete categories (with gaps between bars), whereas here every individual adult provides a pair of continuous numerical co-variable scores. Therefore, a scattergraph must be used (nostalgia score on one axis, £ donated on the other, with 80 coordinate dots).",
      markScheme: [
        {
          point: "Uses non-directional correlational wording ('a significant correlation / relationship' — NOT 'positive/negative' and NOT 'a difference')",
          keywords: ["significant correlation", "significant relationship", "correlation between", "relationship between"],
        },
        {
          point: "Operationalises BOTH co-variables (nostalgia score out of 50 AND amount donated in £/pounds)",
          keywords: ["out of 50", "0–50", "pounds", "£", "amount"],
        },
        {
          point: "Explains why bar chart is wrong (bar charts are for discrete categories, not two continuous co-variables)",
          keywords: ["discrete", "categor", "two continuous", "co-variable"],
        },
        {
          point: "Names Scattergraph (scatter diagram) as the correct graph",
          keywords: ["scattergraph", "scatter diagram", "scatter plot", "scatterplot"],
        },
      ],
      commonError:
        "Writing 'There will be a difference between nostalgia and donations' (0 marks — correlations test a CORRELATION/RELATIONSHIP, never a difference!) or specifying 'positive' when asked for NON-directional!",
      hints: [
        "Watch BOTH traps in Part 1: Non-directional correlation = *'There will be a significant correlation between [X] and [Y]'* (do NOT say 'positive' and do NOT say 'difference'!).",
        "Part 2: Contrast discrete categories (bar chart) with two continuous co-variables (**scattergraph**).",
      ],
      strategy: "Non-directional correlation ('significant correlation between…') + Scattergraph justification",
    },
    {
      kind: "written",
      id: "exam-p2b-q29",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "challenge",
      marks: 4,
      question:
        "Compare the **strengths and limitations** of collecting **quantitative data** versus **qualitative data** when investigating why employees feel unmotivated at work. [4 marks]",
      modelAnswer:
        "Quantitative data (e.g. numerical 1–10 job-satisfaction ratings) is objective, quick to analyse statistically into means/percentages, and high in reliability so departments can be compared easily — however, numbers are reductionist and force complex workplace frustrations into rigid tick-boxes, lowering validity. Conversely, qualitative data (e.g. open interview quotes about feeling micromanaged) captures rich, holistic personal meaning and uncovers unexpected reasons why morale fell (high validity), but transcripts are slow to code and vulnerable to subjective researcher interpretation bias.",
      markScheme: [
        {
          point: "Quantitative strength: objective numerical scores allow easy statistical comparison / graphs and high reliability",
          keywords: ["objective", "statist", "mean", "compare", "reliab"],
        },
        {
          point: "Quantitative limitation: reductionist / oversimplifies complex workplace feelings (lacks depth/why)",
          keywords: ["reductionist", "oversimplif", "lacks depth", "forced", "tick-box"],
        },
        {
          point: "Qualitative strength: rich, detailed insight in workers' own words uncovering unexpected reasons (high validity)",
          keywords: ["rich", "in-depth", "detail", "own words", "unexpected", "valid"],
        },
        {
          point: "Qualitative limitation: time-consuming to analyse and prone to subjective researcher interpretation bias",
          keywords: ["time-consuming", "slow", "subjective", "researcher bias", "interpretation"],
        },
      ],
      commonError:
        "Only giving strengths of both without giving a limitation of each (or failing to contextualise to workplace motivation).",
      hints: [
        "Give 1 Strength + 1 Limitation of **Quantitative** numbers (objective/reliable vs reductionist).",
        "Give 1 Strength + 1 Limitation of **Qualitative** words (rich validity vs slow/subjective bias).",
      ],
      strategy: "Balanced 2×2 matrix: Quant (+/-) vs Qual (+/-) in workplace context",
    },
    {
      kind: "written",
      id: "exam-p2b-q30",
      topicId: "research-methods",
      guideRef: "ethics-reliability-validity",
      difficulty: "challenge",
      marks: 6,
      question:
        "**GRAVE Methodological Critique (CIE 0266 Paper 2 Extended Question)**:\nDr Novak wants to study whether **strict parental screen rules correlate with toddler vocabulary size**. She posts an online questionnaire link on an **elite university alumnae parenting forum** (`volunteer sample of 35 mothers`). Mothers estimate their 2-year-old's **total spoken words from memory** and rate **'How strict are your screen rules?' from 1 to 5**. Dr Novak finds $r = +0.58$ and headlines her blog: *'Strict screen rules cause bigger toddler vocabularies everywhere!'*\nUsing **`GRAVE`**, identify **three major methodological/inferential weaknesses** in Dr Novak's study and explain **how each threatens her conclusion**. [6 marks]",
      modelAnswer:
        "1) Generalisability (Population Validity): Recruiting 35 volunteer mothers from one elite university alumnae forum creates severe volunteer and socioeconomic/educational bias — keen, highly educated mothers with abundant books/time are unrepresentative of working-class, fathers, or diverse cultural households, so findings cannot generalise 'everywhere'. 2) Validity of Self-Report Measurement: Asking mothers to estimate a 2-year-old's entire vocabulary from memory AND self-rate 'strictness' triggers social desirability bias (exaggerating strict screen limits and child cleverness to look like 'good mothers') plus subjective ambiguity over what 'strict' means, lowering construct validity. 3) Causal Inference Flaw (Correlation ≠ Causation): Because this is a correlational survey measuring two co-variables without manipulating an IV, $r = +0.58$ cannot prove screen rules CAUSE vocabulary growth — a third variable such as daily parent-child book reading (Bruner's LASS) likely drives both strict screen habits and richer toddler vocabulary!",
      markScheme: [
        {
          point: "Generalisability flaw: small volunteer sample (n = 35) from an elite university alumnae forum (volunteer + SES/education bias)",
          keywords: ["volunteer", "elite", "university", "educated", "socioeconomic", "35"],
        },
        {
          point: "Explains generalisability impact: low population validity — cannot generalise to diverse income/cultural families worldwide",
          keywords: ["population validity", "unrepresentative", "cannot generalis", "diverse", "working-class"],
        },
        {
          point: "Measurement validity flaw: parental self-report suffers social desirability bias / inaccurate memory / subjective 'strict' scale",
          keywords: ["social desirability", "exaggerat", "subjective", "memory", "good mother"],
        },
        {
          point: "Explains measurement impact: mothers may over-report vocabulary and screen strictness, distorting true validity",
          keywords: ["over-report", "inaccurate", "distort", "construct validity", "validity"],
        },
        {
          point: "Causal conclusion flaw: correlation (r = +0.58) only measures co-variables with no manipulated IV — cannot prove causation",
          keywords: ["cannot prove caus", "not prove cause", "co-variable", "no iv", "manipulat"],
        },
        {
          point: "Names a concrete third intervening variable in context (e.g. parental book reading / LASS / maternal education)",
          keywords: ["third variable", "reading", "lass", "books", "talk", "intervening"],
        },
      ],
      commonError:
        "Critiquing 'order effects' or 'lack of counterbalancing' — this is a single-shot correlational questionnaire, NOT a repeated-measures experiment!",
      hints: [
        "Spot the THREE huge flaws in the stem: (1) 35 volunteers on an elite university forum, (2) mothers self-reporting screen strictness + toddler words from memory, (3) claiming $r = +0.58$ PROVES CAUSATION!",
        "Explain each flaw + its exact consequence (including a third variable like bedtime reading / LASS)!",
      ],
      strategy: "Unpack Sample Bias (G) + Social Desirability/Subjectivity (V) + Correlation ≠ Causation + Third Variable",
    },
  ],
};
