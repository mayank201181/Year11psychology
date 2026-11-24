import type { ExamPaper } from "../types.ts";

export const paper: ExamPaper = {
  id: "exam-p2a",
  title: "CIE 0266 Paper 2 Mock A — Perception, Development & Non-Experimental Methods",
  calculator: true,
  minutes: 80,
  questions: [
    // =========================================================================
    // SECTION A: VISUAL PERCEPTION (Q01–Q08)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p2a-q01",
      topicId: "visual-perception",
      guideRef: "sensation-depth-constancy",
      difficulty: "warmup",
      question:
        "What is the fundamental distinction between **sensation** and **perception**?",
      options: [
        "Sensation relies exclusively on binocular cues from both eyes working together, whereas perception operates solely through monocular pictorial cues learned from flat 2D images",
        "Sensation is the brain's top-down construction of meaningful scenes using stored memory schemas, whereas perception is the raw detection of light wavelengths by retinal cells",
        "Sensation is the raw physical detection of stimulus energy by sensory receptors (e.g. light hitting the retina), whereas perception is the brain's active organisation and interpretation",
        "Sensation occurs only in conscious awareness after Gestalt laws group contours together, whereas perception is an automatic unconscious reflex restricted to the eye's cornea",
      ],
      answerIndex: 2,
      explanation:
        "**Sensation** is raw sensory receptor detection and neural transduction (retinal rods/cones), whereas **perception** is cortical organisation and meaningful interpretation of what we are seeing.",
      hints: ["Raw physical detection at the sense organ vs meaningful interpretation in the brain!"],
      strategy: "Sensation = raw receptor detection; Perception = meaningful cortical interpretation",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q02",
      topicId: "visual-perception",
      guideRef: "sensation-depth-constancy",
      difficulty: "core",
      question:
        "Which option lists **ONLY binocular depth cues** (requiring **both** eyes working together) rather than monocular pictorial cues?",
      options: [
        "Retinal disparity and ocular convergence",
        "Linear perspective and occlusion (interposition)",
        "Relative size and texture gradient",
        "Height in the visual plane and size constancy",
      ],
      answerIndex: 0,
      explanation:
        "**Retinal disparity** (comparing slightly different left-eye and right-eye images within ~10 m) and **convergence** (neuromuscular feedback as both eyes turn inward on close objects) require **two** eyes (**binocular**). Linear perspective, occlusion, relative size, texture gradient and height in plane work with just one eye (**monocular**).",
      hints: [
        "'Bi-nocular' = TWO eyes! Can you see linear railway tracks in a flat 2D photograph with one eye closed?",
        "Pick the pair that relies on comparing two eye angles / eye-muscle inward turning.",
      ],
      strategy: "Binocular = Retinal Disparity + Convergence; Pictorial 2D cues = Monocular",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q03",
      topicId: "visual-perception",
      guideRef: "gestalt-and-illusions",
      difficulty: "core",
      question:
        "In the **Kanizsa triangle** diagram below, viewers vividly perceive a bright white upright triangle even though its side borders are completely missing! Which **Gestalt law of perceptual organisation** explains filling in missing gaps to perceive a complete whole shape?",
      diagram: `<svg viewBox="0 0 260 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kanizsa subjective contour illusion made of three black Pac-Man circles arranged at triangle corners"><rect x="8" y="8" width="244" height="159" rx="10" fill="#ffffff" stroke="#cbd5e1"/><circle cx="130" cy="44" r="22" fill="#0f172a"/><circle cx="75" cy="136" r="22" fill="#0f172a"/><circle cx="185" cy="136" r="22" fill="#0f172a"/><polygon points="130,44 75,136 185,136" fill="#ffffff"/></svg>`,
      options: [
        "Law of Proximity",
        "Law of Similarity",
        "Binocular Convergence",
        "Law of Closure",
      ],
      answerIndex: 3,
      explanation:
        "The Gestalt **Law of Closure** states our visual system automatically fills in missing contour gaps to perceive complete, bounded figures (creating illusory contours in the Kanizsa triangle).",
      hints: [
        "Notice the gaps in the triangle's edges that your brain mentally 'closes' up!",
        "Proximity = nearness; Similarity = alike items; Closure = completing unfinished shapes.",
      ],
      strategy: "Completing missing gaps into a whole shape = Gestalt Closure",
    },
    {
      kind: "short",
      id: "exam-p2a-q04",
      topicId: "visual-perception",
      guideRef: "gibson-direct-theory",
      difficulty: "warmup",
      question:
        "In **Gibson & Walk's (1960)** classic infant depth-perception study (`Visual Cliff`), did **bottom-up** or **top-down** processing guide 6-month-old infants to refuse crawling over the apparent drop?",
      answer: {
        type: "text",
        accept: ["bottom-up", "bottom up", "bottom-up processing", "direct"],
        display: "bottom-up processing",
      },
      traps: [
        {
          spec: { type: "text", accept: ["top-down", "top down"] },
          feedback: "Top-down is Gregory's constructivist past-experience theory — Gibson's Direct Theory argues depth perception is innate, data-driven BOTTOM-UP processing!",
        },
      ],
      solution: [
        "Gibson's Direct Theory explains depth perception on the Visual Cliff as innate, stimulus-driven **bottom-up processing** using rich optic array cues without needing learned schemas.",
      ],
      hints: ["Gibson = Direct = data-driven from the optic array upwards!"],
      strategy: "Gibson = Bottom-Up (Direct); Gregory = Top-Down (Constructivist)",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q05",
      topicId: "visual-perception",
      guideRef: "gregory-constructivist",
      difficulty: "core",
      question:
        "How did **Haber & Levin (2001)** provide empirical support for **Gregory's top-down Constructivist Theory** when participants estimated distances to objects in an open field?",
      options: [
        "Participants estimated distances equally accurately for unfamiliar flat cardboard triangles and familiar everyday objects, showing prior size knowledge played no role outdoors",
        "Participants estimated distances far more accurately for objects with familiar, invariant sizes (such as bottles and doors) than for unfamiliar cutouts or variable-sized items",
        "Participants judged outdoor distances accurately only when walking forward to generate radial optic flow across the grass, failing completely whenever they stood stationary",
        "Participants consistently underestimated distances to familiar objects like basketballs and bicycles because misplaced size-constancy scaling distorted real-world outdoor scenes",
      ],
      answerIndex: 1,
      explanation:
        "Haber & Levin (2001) showed stored **prior knowledge (top-down familiarity with standard object sizes)** directly sharpens real-world distance perception — supporting Gregory's view that stored memory schemas actively construct spatial perception.",
      hints: [
        "Compare everyday objects whose exact size you know from past experience (door, soda bottle) vs random cardboard shapes!",
        "Stored familiarity improving distance judgement = top-down knowledge!",
      ],
      strategy: "Haber & Levin (2001) = Object size familiarity sharpens distance perception (supports Gregory)",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q06",
      topicId: "visual-perception",
      guideRef: "perceptual-set-culture",
      difficulty: "core",
      question:
        "In **Bremner et al.'s (2016)** cross-cultural study comparing rural **Himba** participants in Namibia with **urban British** participants on the **Ebbinghaus (Titchener circles) illusion**, what was the key finding?",
      options: [
        "Rural Himba participants were far more susceptible to the surrounding Ebbinghaus context circles than urban British participants, reflecting stronger holistic visual processing",
        "Urbanised Himba living in Namibian towns remained just as immune to the illusion as rural Himba, proving genetic ethnicity rather than visual environment drives susceptibility",
        "Both rural Himba and urban British participants showed identical high illusion error from age three into adulthood, supporting Gibson's claim that size perception is purely innate",
        "Rural Himba showed a much weaker Ebbinghaus illusion (more accurate local size judgements) than urban British participants, showing culture and visual environment shape perception",
      ],
      answerIndex: 3,
      explanation:
        "Bremner et al. (2016) found rural Himba individuals (analytic local focus in open rural landscapes) were far *less* susceptible to the surrounding Ebbinghaus context circles than urban UK participants (and urbanized Himba townspeople shifted closer to the UK pattern!), proving visual environment and culture shape perceptual set.",
      hints: [
        "Did rural Himba focus more accurately on the central target circle without being tricked by surrounding circles?",
        "What happened when Himba people moved into urban towns?",
      ],
      strategy: "Bremner (2016) = Rural Himba less fooled by Ebbinghaus context than urban UK",
    },
    {
      kind: "written",
      id: "exam-p2a-q07",
      topicId: "visual-perception",
      guideRef: "gregory-constructivist",
      difficulty: "core",
      marks: 4,
      question:
        "Using **Gregory's Constructivist Theory** and **misplaced size-constancy scaling**, explain why the two equal vertical shafts in the **Müller-Lyer illusion** look unequal in length, and connect this to the **carpentered-world hypothesis**. [4 marks]",
      modelAnswer:
        "Gregory argues perception is an active top-down process of generating perceptual hypotheses from stored schemas. On 2D paper, our brain misinterprets the Müller-Lyer fins as 3D perspective corners: outward-pointing fins resemble an inside room corner receding FAR AWAY, while inward-pointing arrowheads resemble an outside building corner sticking NEAR us. Because both vertical shafts cast the exact same retinal image size, misplaced size-constancy scaling enlarges the 'farther' inside-corner line so it looks longer! Supporting this top-down view, the carpentered-world hypothesis shows Westerners raised among rectangular 90° buildings suffer a much stronger illusion than rural peoples living in round circular huts.",
      markScheme: [
        {
          point: "Identifies top-down perceptual hypothesis / past experience applied inappropriately to a flat 2D drawing",
          keywords: ["top-down", "hypothesis", "past experience", "2d", "3d"],
        },
        {
          point: "Interprets fins as 3D depth cues: outward fins = distant inside room corner; arrowheads = closer outside building corner",
          keywords: ["inside corner", "outside corner", "farther", "further away", "closer", "room"],
        },
        {
          point: "Explains misplaced size-constancy scaling (equal retinal length + perceived greater distance → scaled up to look longer)",
          keywords: ["size constancy", "size-constancy", "retinal image", "scaled up", "compensat"],
        },
        {
          point: "Connects carpentered-world cross-cultural evidence (rectangular urban buildings vs circular rural huts)",
          keywords: ["carpentered", "rectangular", "circular huts", "round huts", "western", "zulu"],
        },
      ],
      commonError:
        "Merely saying 'the outward fins pull your eyes outward' without mentioning 3D corners and misplaced size-constancy scaling!",
      hints: [
        "Picture the corner of your bedroom wall (fins out = far) vs the outside edge of a wardrobe (arrowheads = near)!",
        "Why does equal retinal length + 'farther away' make your brain scale it UP — and why are round-hut cultures less fooled?",
      ],
      strategy: "2D→3D Corner Cue → Equal Retinal Image + Misplaced Size Constancy → Carpentered World",
    },
    {
      kind: "written",
      id: "exam-p2a-q08",
      topicId: "visual-perception",
      guideRef: "gibson-direct-theory",
      difficulty: "challenge",
      marks: 3,
      question:
        "Evaluate **Gibson's Direct Theory of Perception** by giving **one strength** (using **Gibson & Walk 1960** or real-world motion) and **one limitation** regarding **visual illusions**. [3 marks]",
      modelAnswer:
        "Strength: Gibson's theory has high ecological validity for everyday movement (pilots landing planes via optic flow and texture gradients) and is supported by Gibson & Walk's (1960) Visual Cliff, where 6-month-old infants with minimal crawling experience refused the 'deep' side, pointing to innate bottom-up depth detection. Limitation: Because Gibson insists the optic array provides unambiguous, accurate perception without cognitive inference, his theory struggles to explain why humans systematically misperceive 2D geometric illusions (such as the Ponzo or Müller-Lyer) or ambiguous figures like the Necker cube.",
      markScheme: [
        {
          point: "Strength: Visual Cliff infant innate depth support (Gibson & Walk 1960) OR real-world ecological movement / optic flow",
          keywords: ["visual cliff", "gibson", "optic flow", "pilots", "innate", "infants"],
        },
        {
          point: "Explains why this supports bottom-up direct perception without extensive prior learning",
          keywords: ["bottom-up", "little experience", "minimal experience", "unambiguous", "ecological"],
        },
        {
          point: "Limitation: cannot easily explain perceptual errors in visual illusions / ambiguous figures where perception goes beyond raw sensory data",
          keywords: ["illusion", "ambiguous", "necker", "ponzo", "mispercei", "error"],
        },
      ],
      commonError:
        "Saying Gibson 'explains illusions well' — illusions are Gregory's strength and Gibson's classic Achilles' heel!",
      hints: [
        "Support: Gibson & Walk (1960) Visual Cliff infants or real-world optic flow.",
        "Critique: if perception is 100% direct and accurate, why do illusions fool us every single time?",
      ],
      strategy: "Strength (Visual Cliff / Optic Flow) + Limitation (Illusions / Perceptual Errors)",
    },

    // =========================================================================
    // SECTION B: MOTIVATION & NEEDS (Q09–Q15)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p2a-q09",
      topicId: "motivation-and-needs",
      guideRef: "intrinsic-extrinsic-reinforcement",
      difficulty: "warmup",
      question:
        "Four-year-old Maya loves painting dinosaurs purely for fun during free play. Her teacher begins handing out a shiny plastic medal **only** when children paint a picture — and two weeks after the medals stop, Maya paints **far less** than she did originally! This drop in internal enjoyment is called:",
      options: [
        "Maslow's deficiency frustration (unmet safety needs blocking creative growth)",
        "Hull's primary drive satiation (biological tension returning to homeostasis)",
        "The overjustification effect (extrinsic rewards crowding out intrinsic motivation)",
        "Yerkes-Dodson over-arousal (excessive pressure impairing skilled performance)",
      ],
      answerIndex: 2,
      explanation:
        "Lepper et al. demonstrated the **overjustification effect**: giving expected tangible **extrinsic** rewards for an already-enjoyed **intrinsic** activity shifts the child's perceived locus of causality outside ('I only paint for medals'), undermining intrinsic interest once rewards end.",
      hints: ["Expected external rewards 'over-justify' an activity you already loved for its own sake!"],
      strategy: "Tangible extrinsic reward undermines existing intrinsic love = Overjustification effect",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q10",
      topicId: "motivation-and-needs",
      guideRef: "intrinsic-extrinsic-reinforcement",
      difficulty: "core",
      question:
        "In **Boniecki & Moore's (2003)** university classroom experiment (`ABA reversal design`), what happened when the professor awarded a **token** (redeemable for 1 extra exam point) to the first student answering each lecture question?",
      options: [
        "Directed participation more than doubled AND latency to raise hands plummeted during the token phase — then fell straight back down to baseline as soon as tokens were withdrawn",
        "Directed participation dropped sharply during the token phase due to immediate overjustification, then rebounded above original baseline levels once the tokens were withdrawn",
        "Hand-raising rose steadily during the token phase and remained permanently elevated throughout the second baseline phase, showing tokens built lasting intrinsic motivation",
        "Voluntary comments doubled while directed question-answering stayed flat, and hand-raising latency increased because students hesitated to appear extrinsically motivated",
      ],
      answerIndex: 0,
      explanation:
        "Boniecki & Moore (2003) used an **A–B–A baseline–token–return-to-baseline** design: positive reinforcement via a **token economy** dramatically boosted participation and response speed during Phase B, and returning right back to baseline in Phase A2 proved tokens caused the surge (while showing extrinsic reinforcement stops working once removed!).",
      hints: [
        "Recall the three-phase reversal design: Baseline → Token Economy → Tokens Removed.",
        "Did participation stay high after tokens vanished, or drop right back to baseline?",
      ],
      strategy: "Boniecki & Moore (2003) = Token economy spikes participation fast, drops back when removed",
    },
    {
      kind: "short",
      id: "exam-p2a-q11",
      topicId: "motivation-and-needs",
      guideRef: "maslow-hierarchy",
      commonError: "Naming esteem or transcendence instead of Maslow's original 5-tier growth (B-need) apex: self-actualisation.",
      difficulty: "warmup",
      question:
        "In **Maslow's 5-tier Hierarchy of Needs**, the lower four tiers (Physiological, Safety, Love & Belonging, Esteem) are *Deficiency (D) needs*. Name the **5th top tier** (*Growth / Being need*), where an individual fulfils their unique creative potential.",
      answer: {
        type: "text",
        accept: ["self-actualisation", "self-actualization", "self actualisation", "self actualization"],
        display: "self-actualisation",
      },
      solution: [
        "The pinnacle growth need at the top of Maslow's pyramid is **self-actualisation**.",
      ],
      hints: ["Hyphenated term starting with 'self-a…'."],
      strategy: "Top of Maslow's pyramid = Self-actualisation",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q12",
      topicId: "motivation-and-needs",
      guideRef: "self-determination-theory",
      difficulty: "core",
      question:
        "According to Deci & Ryan's **Self-Determination Theory (SDT)** and **Calvo et al.'s (2010)** longitudinal study of teenage footballers, which three innate psychological needs must a coach satisfy to prevent **sport dropout**?",
      options: [
        "Hunger, thirst and body temperature",
        "Specificity, measurability and time-pressure",
        "Id, ego and superego",
        "Autonomy, competence and relatedness",
      ],
      answerIndex: 3,
      explanation:
        "SDT identifies **Autonomy** (feeling choice/ownership), **Competence** (feeling capable/mastering skills) and **Relatedness** (feeling connected/valued by teammates & coach). Calvo et al. (2010) found thwarting relatedness and autonomy predicted amotivation and sport dropout one year later.",
      hints: [
        "Remember the SDT trio: Choice (`A…`), Mastery (`C…`), Connection (`R…`).",
        "Which two thwarted needs predicted teenage football dropout in Calvo et al. (2010)?",
      ],
      strategy: "SDT = Autonomy + Competence + Relatedness (Calvo 2010 sport persistence)",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q13",
      topicId: "motivation-and-needs",
      guideRef: "drive-incentive-psychodynamic",
      difficulty: "core",
      question:
        "How did **Merchant et al. (2013)** explain why **nostalgic charity advertisements** (*'remember warm childhood moments...'*) motivate adults to donate money?",
      options: [
        "Childhood nostalgia lowers physiological arousal into a calm homeostatic state, reducing Hull's primary biological drives so viewers donate out of pure rational calculation",
        "Evoking personal nostalgia stirs warm longing alongside subtle discomfort or sadness, which donating relieves via emotional recovery (mood repair), boosting donation intentions",
        "Nostalgic charity adverts work solely by setting specific, measurable SMART fundraising goals with strict deadlines, bypassing unconscious emotions and childhood memories",
        "Adults only increase charitable giving when nostalgic advertisements pair childhood images with tangible extrinsic cash vouchers, avoiding the overjustification effect",
      ],
      answerIndex: 1,
      explanation:
        "Merchant et al. (2013) linked psychodynamic/emotional nostalgia to charitable giving: nostalgic ads stir bittersweet memories and negative affect/guilt that charitable helping resolves via **emotional recovery**, increasing willingness to donate.",
      hints: [
        "Think bittersweet childhood memories + emotional recovery through giving!",
        "Merchant et al. (2013) sits under unconscious/emotional nostalgic motivation in advertising.",
      ],
      strategy: "Merchant et al. (2013) = Nostalgia ad → emotional longing/guilt → donation brings emotional recovery",
    },
    {
      kind: "written",
      id: "exam-p2a-q14",
      topicId: "motivation-and-needs",
      guideRef: "drive-incentive-psychodynamic",
      difficulty: "core",
      marks: 3,
      question:
        "Outline **Hull's Biological Drive-Reduction Theory** of motivation (using **homeostasis**) and explain **one everyday human behaviour** that Drive-Reduction Theory **fails** to explain. [3 marks]",
      modelAnswer:
        "Hull proposed that biological survival relies on homeostasis (maintaining stable internal equilibrium, like water or glucose levels). A physiological deficit (need) creates uncomfortable internal tension called a drive (e.g. thirst), motivating drive-reducing behaviour (drinking water) which restores homeostasis and negatively reinforces that action. However, Drive-Reduction Theory fails to explain sensation-seeking behaviours that deliberately INCREASE arousal and tension — such as skydiving, riding rollercoasters, watching horror movies, or eating rich dessert when already completely full!",
      markScheme: [
        {
          point: "Explains homeostasis + biological deficit/need creating uncomfortable internal tension (drive)",
          keywords: ["homeostasis", "deficit", "imbalance", "tension", "thirst", "hunger"],
        },
        {
          point: "Explains behaviour reducing the drive to restore balance (reinforcing the action)",
          keywords: ["reduce", "restore", "balance", "equilibrium", "reinforc"],
        },
        {
          point: "Gives a clear counter-example that INCREASES arousal/tension or acts without biological deficit (e.g. skydiving, bungee jumping, eating when full, curiosity)",
          keywords: ["skydiv", "rollercoaster", "bungee", "thrill", "horror", "already full", "increase arousal", "curiosity"],
        },
      ],
      commonError:
        "Confusing 'need' (physiological deficit like low blood water) with 'drive' (psychological tension of thirst).",
      hints: [
        "Trace the chain: Homeostatic imbalance (Need) → Internal tension (Drive) → Action reduces tension!",
        "Then name a fun human behaviour where people pay money to INCREASE arousal/adrenaline!",
      ],
      strategy: "Homeostasis → Need → Drive → Reduction + Thrill-seeking critique",
    },
    {
      kind: "written",
      id: "exam-p2a-q15",
      topicId: "motivation-and-needs",
      guideRef: "goal-setting-applications",
      difficulty: "core",
      marks: 4,
      question:
        "A Year 11 swimmer says: *'My goal is to get faster at freestyle someday.'* Using Locke & Latham's **SMART goal-setting** principles, rewrite her vague wish into a full **SMART target** and explain how **two** of the SMART letters improve athletic motivation. [4 marks]",
      modelAnswer:
        "SMART Target: 'Reduce my 100 m freestyle personal best from 68.0 seconds to 65.5 seconds at the regional gala in 8 weeks' time by completing three timed turn-technique sessions per week.' First, making the target Specific and Measurable (68.0 s down to 65.5 s on 100 m freestyle) focuses attention and provides clear objective feedback on progress rather than vague 'do your best' drift. Second, making it Achievable/Realistic yet challenging (2.5 s improvement, not an impossible 15 s) and Time-bound (8 weeks) sustains effort, persistence and competence without triggering demoralisation.",
      markScheme: [
        {
          point: "Rewrites goal with concrete Specific + Measurable + Time-bound figures (exact distance, stopwatch target & deadline)",
          keywords: ["seconds", "100", "50", "weeks", "months"],
        },
        {
          point: "Unpacks S or M accurately (Specific / Measurable gives objective feedback & clear focus)",
          keywords: ["specific", "measurable", "feedback", "track progress"],
        },
        {
          point: "Unpacks A, R or T accurately (Achievable/Realistic avoids demoralisation; Time-bound creates urgency/persistence)",
          keywords: ["achievable", "realistic", "time-bound", "deadline", "urgency", "persistence", "demoralis"],
        },
        {
          point: "Links back to Locke & Latham (challenging specific goals outperform vague 'try your best' wishes)",
          keywords: ["vague", "challenging", "effort", "locke"],
        },
      ],
      commonError:
        "Listing what S-M-A-R-T stands for without writing an actual swimming target or explaining WHY it motivates.",
      hints: [
        "Write an exact stopwatch target + stroke/distance + week deadline first!",
        "Then explain WHY Measurable feedback and Achievable + Time-bound deadlines beat vague 'get faster someday'.",
      ],
      strategy: "Write concrete SMART swimming target + Explain 2 SMART mechanisms",
    },

    // =========================================================================
    // SECTION C: LANGUAGE DEVELOPMENT (Q16–Q23)
    // =========================================================================
    {
      kind: "mcq",
      id: "exam-p2a-q16",
      topicId: "language-development",
      guideRef: "stages-language-acquisition",
      difficulty: "warmup",
      question:
        "At 22 months old, toddler Noah points at his dad's empty shoes by the front door and says *'Daddy go work!'* (retaining high-meaning content words while omitting auxiliary verbs and prepositions like *'has gone to'*). Which stage of language acquisition is Noah in?",
      options: [
        "Telegraphic stage (around 18–30 months)",
        "Holophrastic one-word stage (12–18 months)",
        "Pre-linguistic cooing stage (0–6 months)",
        "Adult post-critical pragmatic stage",
      ],
      answerIndex: 0,
      explanation:
        "Short 2–3+ word phrases packed with high-information **content words** (nouns/verbs: *'Daddy go work'*, *' Doggie bite'*) while dropping grammatical function words (*'is'*, *'to'*, *'the'*) — like an old telegram — define the **telegraphic stage** (~18–30 months).",
      hints: ["Sounds like an old-fashioned telegram where every extra little word ('is', 'to', 'the') was left out!"],
      strategy: "1 word = Holophrastic; Content-word telegram ('Daddy go work') = Telegraphic",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q17",
      topicId: "language-development",
      guideRef: "stages-language-acquisition",
      difficulty: "core",
      question:
        "In **Jean Berko's (1958) 'Wug Test'**, 4-year-old children shown a cartoon bird they had NEVER seen before (*'This is a wug. Now there are two of them. There are two ___?'*) overwhelmingly answered **'wugs!'** — and similarly say *'I goed'* or *'two foots'*. Why is this crucial evidence against pure **imitation**?",
      options: [
        "Because adults frequently repeat words like 'wugs' and 'goed' during Child-Directed Speech, showing toddlers only reproduce irregular forms after intensive operant shaping",
        "Because 4-year-olds refuse to pluralise any unfamiliar creature name until caregivers reward each new syllable with praise, confirming Skinner's reinforcement hypothesis",
        "Because children under age five lack Piagetian object permanence and therefore treat two cartoon birds as a single holophrastic label rather than applying plural morphology",
        "Because applying plural (-s) and past-tense (-ed) rules to novel nonsense words ('wugs') and irregular verbs ('goed') shows children internalise grammar rules rather than copying adults",
      ],
      answerIndex: 3,
      explanation:
        "**Grammatical overregularisation** (*'goed'*, *'foots'*, *'mouses'*) and passing Berko's nonsense **Wug Test** prove children actively internalise generative morphological rules — they could NEVER have heard an adult model *'goed'* or *'wugs'*!",
      hints: [
        "Has a toddler EVER heard their mum or dad say 'two foots' or 'wugs'?",
        "Inventing rule-governed forms never heard before disproves pure behaviourist copying!",
      ],
      strategy: "'Goed' / 'Wugs' = Productive internal grammar rule (cannot come from adult imitation)",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q18",
      topicId: "language-development",
      guideRef: "chomsky-nativist-lad",
      difficulty: "core",
      question:
        "How did **Senghas's (1995)** natural study of deaf schoolchildren in Managua (**Nicaraguan Sign Language**) strongly support **Chomsky's Nativist LAD** and the **Critical Period Hypothesis**?",
      options: [
        "Teachers systematically drilled American Sign Language syntax flashcards using operant food tokens, demonstrating that explicit adult reinforcement created the grammar",
        "Late-exposed adolescents aged 15 to 17 developed richer spatial verb inflections than children entering school at age five, showing mature cognitive schemas outweigh age",
        "Deaf children with no pre-existing sign language spontaneously built structured grammar — and younger cohorts exposed early developed richer inflections than late-exposed adolescents",
        "Children failed to form any shared gestures until they first mastered spoken Spanish lip-reading in class, confirming language depends solely on auditory verbal input",
      ],
      answerIndex: 2,
      explanation:
        "Senghas (1995) documented a brand-new language being born from scratch! Without adult sign models, deaf children's innate **LAD** created systematic spatial grammar — and **younger cohorts (<10 years)** drove grammatical complexity far beyond late-exposed adolescents, supporting both nativism and Lenneberg's **sensitive/critical period**.",
      hints: [
        "Did adults teach Nicaraguan Sign Language, or did deaf children's brains build its grammar spontaneously?",
        "Compare younger learners vs older late-exposed learners!",
      ],
      strategy: "Senghas (1995) = Spontaneous new sign grammar (LAD) + Young > Old learners (Critical Period)",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q19",
      topicId: "language-development",
      guideRef: "learning-behaviourist",
      difficulty: "core",
      question:
        "In **Goldstein, King & West's (2003)** experiment on 8-month-old infants, Group A mothers smiled and touched their baby **contingently** (immediately after every babble), while Group B ('yoked control') mothers smiled just as often at **random** moments unrelated to babbling. What happened?",
      options: [
        "Both groups showed identical gains in mature syllabic babbling, showing total maternal warmth mattered far more than whether smiles followed vocalisations immediately",
        "Only infants receiving contingent social feedback shifted rapidly toward mature, syllabic speech-like babbling — supporting social reinforcement in early phonological growth",
        "Infants in the yoked random-smiling group produced significantly more mature consonant–vowel syllables, because unpredictable timing sustained higher cortical curiosity",
        "Neither group changed babbling quality without verbal spoken coaching from mothers, supporting Chomsky's claim that non-verbal social feedback cannot shape speech",
      ],
      answerIndex: 1,
      explanation:
        "Goldstein et al. (2003) proved social stimulation alone isn't enough — **contingent positive social reinforcement** (smiling/touching *immediately following* vocalisations) shapes 8-month-olds' babbling toward mature syllabic forms.",
      hints: [
        "Notice BOTH groups got the exact same total amount of mother smiles — the IV was **timing** (contingent on babbling vs random)!",
        "Which group matured their babbling quality?",
      ],
      strategy: "Goldstein et al. (2003) = Contingent maternal social feedback shapes mature infant babbling",
    },
    {
      kind: "short",
      id: "exam-p2a-q20",
      topicId: "language-development",
      guideRef: "piaget-bruner-cognitive",
      difficulty: "warmup",
      question:
        "Chomsky proposed the innate *LAD*; **Jerome Bruner** argued that innate capacity needs a social partner — naming caregivers' scaffolding, joint-attention routines and child-directed speech the **`____`** (4-letter acronym).",
      answer: {
        type: "text",
        accept: ["lass", "language acquisition support system"],
        display: "LASS",
      },
      traps: [
        {
          spec: { type: "text", accept: ["lad"] },
          feedback: "LAD is Chomsky's internal Language Acquisition Device — Bruner's social caregiver scaffolding partner is LASS!",
        },
      ],
      solution: [
        "Bruner's **LASS** (*Language Acquisition Support System*) works alongside LAD via caregiver scaffolding, peekaboo/book-reading formats and child-directed speech.",
      ],
      hints: ["Four letters starting with 'L…' (*Language Acquisition Support System*)."],
      strategy: "Chomsky = Innate LAD; Bruner = Social LASS",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q21",
      topicId: "language-development",
      guideRef: "animal-vs-human",
      difficulty: "core",
      question:
        "Karl von Frisch discovered foraging honeybees perform a figure-eight **waggle dance** indicating the direction and distance of distant nectar flowers not visible from the dark hive. Which of **Hockett's design features** DOES the bee waggle dance partially show — and which feature does it **LACK** compared with human language?",
      options: [
        "Shows full cultural transmission (learned purely through caregiver LASS scaffolding), but lacks any genetic basis or consistent direction encoding inside dark hives",
        "Shows open-ended productivity and recursive syntax (combining dance steps into novel topics), but lacks semanticity because dance angles carry no consistent meaning",
        "Shows zero spatial displacement (bees can only signal flowers visible right beside the hive), yet shows unlimited creativity to invent new vertical 'straight-up' cues",
        "Shows limited displacement (signalling spatially distant nectar), yet lacks open-ended productivity (bees cannot invent novel signals for abstract ideas or vertical 'up' nectar)",
      ],
      answerIndex: 3,
      explanation:
        "Honeybees show remarkable **spatial displacement** (signalling food hundreds of metres away), yet their code is genetically closed and rigid — lacking human **open-ended productivity/creativity** and rich past/hypothetical displacement.",
      hints: [
        "The flowers are out of sight far from the hive (= spatial displacement).",
        "Can a bee compose a poem or warn about a fake flower placed straight UP above the hive?",
      ],
      strategy: "Bee waggle dance = Spatial Displacement YES, Open Productivity/Syntax NO",
    },
    {
      kind: "written",
      id: "exam-p2a-q22",
      topicId: "language-development",
      guideRef: "piaget-bruner-cognitive",
      difficulty: "core",
      marks: 4,
      question:
        "Explain **Piaget's Cognitive Theory** of language development (including **schemas** and **object permanence**, referencing **Hewitt 2022**), and state **one challenge** to Piaget's claim that thought always precedes language. [4 marks]",
      modelAnswer:
        "Piaget argued language is NOT an isolated innate module; instead, cognitive development comes FIRST — children can only use words for concepts they already understand via sensorimotor schemas (built through assimilation and accommodation, as illustrated in Hewitt's 2022 observations of young children's action schemas like trajectories/enclosure guiding talk). For instance, toddlers only use disappearance words ('all gone!') and past references once they master object permanence (~8–12 months). However, rare dissociations challenge strict cognitive prerequisites: individuals with Williams syndrome (or cases like 'Laura') show fluent, complex grammar despite severe non-verbal spatial/cognitive impairments, suggesting language and general IQ can develop somewhat independently.",
      markScheme: [
        {
          point: "States Piaget's core principle: cognitive development / understanding precedes language (words map onto existing concepts)",
          keywords: ["precede", "comes first", "before language", "understand a concept"],
        },
        {
          point: "Explains schemas (assimilation/accommodation) and/or object permanence enabling disappearance/symbolic words (referencing Hewitt 2022)",
          keywords: ["schema", "object permanence", "all gone", "hewitt", "assimilation", "accommodation"],
        },
        {
          point: "Identifies a valid critique/counter-example (e.g. Williams syndrome / Laura fluent syntax with low IQ, OR Sapir-Whorf / Vygotsky social speech)",
          keywords: ["williams", "laura", "low iq", "cognitive impairment", "independent", "vygotsky"],
        },
        {
          point: "Explains why this challenges Piaget (complex grammar shouldn't exceed cognitive level if cognition strictly limits language)",
          keywords: ["fluent", "complex grammar", "exceed", "separate", "dissociat"],
        },
      ],
      commonError:
        "Confusing Piaget (cognition precedes language) with Chomsky (innate LAD independent of general IQ)!",
      hints: [
        "Why must a baby grasp **object permanence** & **schemas** (Hewitt 2022) before meaningfully saying *' teddy all gone'*?",
        "Then cite **Williams syndrome** (fluent talkers who struggle with simple cognitive puzzles) to challenge Piaget!",
      ],
      strategy: "Cognition precedes words (Object Permanence + Hewitt Schemas) → Williams Syndrome Dissociation",
    },
    {
      kind: "written",
      id: "exam-p2a-q23",
      topicId: "language-development",
      guideRef: "chomsky-nativist-lad",
      difficulty: "challenge",
      marks: 3,
      question:
        "Explain Chomsky's **'poverty of the stimulus'** argument and state **one limitation** of Chomsky's pure Nativist theory of language acquisition. [3 marks]",
      modelAnswer:
        "Chomsky's 'poverty of the stimulus' argues that everyday adult speech heard by infants is fragmented, full of slips, incomplete sentences and lacks systematic grammar lessons — too impoverished to teach complex syntax by imitation alone — so children must possess an innate Language Acquisition Device (LAD) encoding Universal Grammar. However, a major limitation is that pure Nativism underestimates social interaction (Bruner's LASS): children exposed only to overheard television/radio speech without responsive human conversation (e.g. hearing children of deaf parents watching TV, 'Jim', or severely neglected Genie) fail to acquire normal grammar from exposure alone.",
      markScheme: [
        {
          point: "Explains poverty of the stimulus: adult speech input is messy/incomplete/fragmented, insufficient to learn complex grammar from scratch",
          keywords: ["incomplete", "fragment", "slips", "errors", "insufficient", "not enough"],
        },
        {
          point: "Links to innate LAD / Universal Grammar enabling rapid rule acquisition",
          keywords: ["lad", "language acquisition device", "universal grammar", "innate"],
        },
        {
          point: "States a clear limitation with example (ignores social interaction / Bruner's LASS — e.g. 'Jim' watching TV alone couldn't learn grammar without interactive communication)",
          keywords: ["interaction", "lass", "bruner", "television", "tv", "jim", "social"],
        },
      ],
      commonError:
        "Thinking 'poverty of the stimulus' means growing up in low-income financial poverty — it strictly means linguistic input alone is logically under-determined for syntax!",
      hints: [
        "Beware the name trap: 'poverty of the stimulus' is about messy/incomplete SPOKEN INPUT, not money!",
        "Critique: why couldn't 'Jim' learn English just by watching TV without two-way human interaction (LASS)?",
      ],
      strategy: "Fragmented input → Innate LAD needed + Social interaction (Jim / LASS) critique",
    },

    // =========================================================================
    // SECTION D: NON-EXPERIMENTAL RESEARCH METHODS & DATA (Q24–Q30)
    // =========================================================================
    {
      kind: "short",
      id: "exam-p2a-q24",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "warmup",
      question:
        "Eight toddlers produce the following total counts of novel two-word utterances during a 15-minute play session: **6, 11, 8, 14, 8, 10, 5, 18**. Calculate the **mean** count.",
      answer: { type: "number", value: 10 },
      traps: [
        {
          spec: { type: "number", value: 9 },
          feedback: "9 is the median ((8 + 10) ÷ 2 = 9). Add all 8 counts (80) and divide by 8 for the mean!",
        },
        {
          spec: { type: "number", value: 8 },
          feedback: "8 is the mode! Add all 8 scores (80) and divide by 8.",
        },
      ],
      solution: [
        "Sum all 8 counts: {{6 + 11 + 8 + 14 + 8 + 10 + 5 + 18 = 80}}.",
        "Mean = {{80 / 8 = 10}} utterances.",
      ],
      hints: ["Add all 8 utterance counts together (80) and divide by 8."],
      strategy: "Sum ÷ N",
    },
    {
      kind: "mcq",
      id: "exam-p2a-q25",
      topicId: "research-methods",
      guideRef: "non-experimental-methods",
      difficulty: "core",
      question:
        "Inspect the scattergraph below plotting **Co-variable X: Perceived Coaching Control/Pressure (1–10)** against **Co-variable Y: Intrinsic Sport Enjoyment Score (0–40)** across 10 youth athletes. Which statement accurately interprets this scattergraph?",
      diagram: `<svg viewBox="0 0 360 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scattergraph showing downward trend from top-left to bottom-right as Coaching Pressure increases and Intrinsic Enjoyment decreases"><rect x="8" y="8" width="344" height="169" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><line x1="52" y1="145" x2="325" y2="145" stroke="#334155" stroke-width="2"/><line x1="52" y1="145" x2="52" y2="22" stroke="#334155" stroke-width="2"/><g fill="#2563eb"><circle cx="72" cy="34" r="4.5"/><circle cx="95" cy="44" r="4.5"/><circle cx="118" cy="52" r="4.5"/><circle cx="145" cy="68" r="4.5"/><circle cx="170" cy="76" r="4.5"/><circle cx="198" cy="88" r="4.5"/><circle cx="222" cy="102" r="4.5"/><circle cx="250" cy="112" r="4.5"/><circle cx="278" cy="126" r="4.5"/><circle cx="305" cy="134" r="4.5"/></g><text x="188" y="165" font-size="10" text-anchor="middle" fill="#334155" font-family="sans-serif">Coaching Pressure Score (1 → 10)</text><text x="18" y="84" font-size="9.5" text-anchor="middle" transform="rotate(-90 18 84)" fill="#334155" font-family="sans-serif">Enjoyment (0–40)</text></svg>`,
      options: [
        "There is a strong negative correlation: as perceived coaching pressure increases, intrinsic sport enjoyment decreases (without proving causation)",
        "It proves experimentally that strict coaching pressure directly causes lower sport enjoyment, because the plotted points follow a tight straight line",
        "There is a zero correlation between coaching pressure and enjoyment, because dots sloping downwards from top-left to bottom-right cancel out mathematically",
        "There is a strong positive correlation across the 10 athletes: as perceived coaching pressure rises from 1 to 10, intrinsic enjoyment rises steadily alongside it",
      ],
      answerIndex: 0,
      explanation:
        "The 10 dots cluster tightly along a downward-sloping line from top-left to bottom-right: as X rises, Y falls = **strong negative correlation** (and because no IV was manipulated, causation cannot be proven!).",
      hints: [
        "Read left to right: as Coaching Pressure rises from 1 to 10, does Enjoyment rise or fall?",
        "Eliminate any option claiming experimental proof of causation or calling a downward slope 'zero correlation'!",
      ],
      strategy: "Downward tight cluster = Strong Negative Correlation (≠ causation)",
    },
    {
      kind: "short",
      id: "exam-p2a-q26",
      topicId: "research-methods",
      guideRef: "ethics-reliability-validity",
      commonError: "Using 30 minutes or 45 seconds as the denominator instead of the 40 time-sampling intervals: (34 ÷ 40) × 100 = 85%.",
      difficulty: "core",
      question:
        "Two observers watch a 30-minute video of infant depth reactions using 45-second **time sampling** (`40 intervals` in total). They record identical category codes in **34 out of 40 intervals**. Calculate their **percentage inter-observer agreement**.",
      answer: { type: "number", value: 85 },
      solution: [
        "Percentage agreement = {{(34 / 40) * 100 = 0.85 * 100 = 85}}%.",
      ],
      hints: [
        "Write agreed intervals over total intervals: 34 ÷ 40.",
        "Multiply 0.85 by 100 to convert to a percentage.",
      ],
      strategy: "(Agreed ÷ Total) × 100",
    },
    {
      kind: "short",
      id: "exam-p2a-q27",
      topicId: "research-methods",
      guideRef: "data-analysis-graphs",
      difficulty: "core",
      question:
        "A researcher groups 60 adults' continuous Müller-Lyer illusion error scores into contiguous class intervals (`0.0–4.9 mm`, `5.0–9.9 mm`, `10.0–14.9 mm`, `15.0–19.9 mm`). Name the **exact type of graph** required (where adjacent bars **touch with NO gaps**).",
      answer: {
        type: "text",
        accept: ["histogram"],
        display: "histogram",
      },
      traps: [
        {
          spec: { type: "text", accept: ["bar chart", "bar graph"] },
          feedback: "Bar charts have gaps for discrete categories — continuous numerical class intervals require a histogram!",
        },
      ],
      solution: [
        "Continuous numerical data grouped into contiguous intervals is plotted as a **histogram** (no gaps between bars).",
      ],
      hints: [
        "Continuous numerical intervals (`0.0–4.9 mm`, `5.0–9.9 mm`…) rather than separate categories.",
        "Remember: B-Gaps vs H-Hug!",
      ],
      strategy: "Continuous class intervals = Histogram",
    },
    {
      kind: "written",
      id: "exam-p2a-q28",
      topicId: "research-methods",
      guideRef: "non-experimental-methods",
      difficulty: "core",
      marks: 4,
      question:
        "A psychologist interviews parents about how often they read bedtime stories to their 3-year-olds (to study Bruner's LASS). Compare using a **structured interview** versus an **unstructured interview** for this investigation. [4 marks]",
      modelAnswer:
        "A structured interview asks every parent the exact same fixed questions in an identical order, ensuring high reliability (easy replication and objective comparison of reading counts across families), though rigid scripts prevent probing unexpected routines. Conversely, an unstructured interview flows like a flexible conversation where follow-up questions adapt to each parent's answers, capturing rich, detailed qualitative insight into how parents scaffold questions during reading (higher validity), though it is harder to compare statistically and carries greater risk of interviewer bias or social desirability exaggeration.",
      markScheme: [
        {
          point: "Structured feature: fixed preset questions in identical order for every parent",
          keywords: ["same questions", "fixed", "same order", "identical order", "standardis"],
        },
        {
          point: "Structured evaluation: high reliability / easy comparison across families, OR lacks depth to probe new answers",
          keywords: ["reliab", "replicat", "easy to compare", "cannot probe", "follow-up"],
        },
        {
          point: "Unstructured feature: flexible conversational probes tailored to each parent's previous response",
          keywords: ["flexible", "conversation", "adapt", "tailor", "unscripted"],
        },
        {
          point: "Unstructured evaluation: rich qualitative validity into bedtime scaffolding, OR time-consuming / interviewer bias",
          keywords: ["qualitative", "rich", "in-depth", "valid", "interviewer bias"],
        },
      ],
      commonError:
        "Confusing structured interviews with covert observations, or forgetting to apply the answer to bedtime story reading!",
      hints: [
        "Give 1 feature + 1 strength/limitation of **structured** interviews (reliability/comparison).",
        "Give 1 feature + 1 strength/limitation of **unstructured** interviews (qualitative depth/flexibility) in the bedtime-reading context.",
      ],
      strategy: "Structured (Standardised → Reliable) vs Unstructured (Flexible → Rich Qualitative Validity)",
    },
    {
      kind: "written",
      id: "exam-p2a-q29",
      topicId: "research-methods",
      guideRef: "ethics-reliability-validity",
      difficulty: "core",
      marks: 3,
      question:
        "Explain how a psychologist can test **test-retest reliability** on a newly written *Self-Determination Questionnaire*, and state **one practical change** if reliability turns out to be weak (`r = +0.35`). [3 marks]",
      modelAnswer:
        "To assess test-retest reliability, the psychologist administers the exact same Self-Determination Questionnaire to the same sample of participants on two separate occasions (e.g. 2–3 weeks apart, long enough not to recall exact answers from memory yet short enough that trait motivation hasn't changed) and correlates each person's Test 1 and Test 2 totals (requiring r ≥ +0.80 for strong reliability). If reliability is weak (+0.35), ambiguous or double-barrelled open items should be rewritten into clear, unambiguous closed Likert-scale items.",
      markScheme: [
        {
          point: "Give the same questionnaire to the same participants on two separate occasions (e.g. 2–4 weeks apart)",
          keywords: ["same participants", "same people", "two occasions", "twice", "weeks apart"],
        },
        {
          point: "Compare / correlate the two sets of scores (strong positive correlation ≥ +0.80 indicates reliability)",
          keywords: ["correlat", "0.8", "compare the two"],
        },
        {
          point: "Practical fix: replace vague/ambiguous/open wording with clear, standardised closed / rating-scale questions",
          keywords: ["ambiguous", "vague", "rewrit", "clear", "closed", "likert"],
        },
      ],
      commonError:
        "Confusing test-retest reliability (same test, two dates) with inter-observer reliability (two observers, one video)!",
      hints: [
        "Spell out WHO takes WHAT and WHEN (same sample, same questionnaire, two dates) + correlation (+0.80).",
        "Why would someone answer differently two weeks later? Fix confusing/ambiguous question wording!",
      ],
      strategy: "Same test + Same sample + 2 dates → Correlate scores → Clarify ambiguous items",
    },
    {
      kind: "written",
      id: "exam-p2a-q30",
      topicId: "research-methods",
      guideRef: "non-experimental-methods",
      difficulty: "challenge",
      marks: 6,
      question:
        "**Design a Non-Experimental Study (CIE 0266 Paper 2 Extended Question)**:\nA nursery manager wants to investigate whether **4-year-old children use more complex multi-word utterances during imaginative role-play than during solitary puzzle play** without interfering in their natural morning routine. Design an **ethical structured naturalistic observation**. Your plan must explain:\n1. **Two operationalised speech/behavioural categories** to tally.\n2. Whether the observation is **covert or overt**, and **event or time sampling** (justifying one).\n3. How **inter-observer reliability** AND **under-16 ethical guidelines** will be satisfied. [6 marks]",
      modelAnswer:
        "1) Operationalised categories: Category 1 = 'Utters a sentence containing 4 or more spoken words during role-play/puzzle play'; Category 2 = 'Asks a peer or adult a wh-question (who/what/where/why) aloud'. 2) Overt-to-staff/parents yet minimally intrusive non-participant sitting quietly in the corner so 4-year-olds quickly habituate and play naturally; use event sampling (tallying every 4+-word sentence or wh-question during 10 min of role-play and 10 min of puzzles per child) so brief utterances between clock ticks are not missed. 3) Reliability & Ethics: Two trained observers independently code the same 10-minute pilot session simultaneously and correlate tallies to verify ≥ +0.80 agreement; ethically, because children are aged 4 (<16), obtain written parental/guardian informed consent beforehand, stop observing any child showing discomfort (assent/withdrawal), and use anonymous child codes (`C1`–`C20`) for confidentiality.",
      markScheme: [
        {
          point: "Defines 1st concrete, countable operationalised speech category (e.g. utterance of ≥4 words / past-tense verb)",
          keywords: ["4 or more", "four or more", "3 or more", "words", "past tense"],
        },
        {
          point: "Defines 2nd distinct countable speech category (e.g. asking a question, turn-taking reply, naming imaginary object)",
          keywords: ["question", "who/what", "reply", "turn-taking", "adjectiv"],
        },
        {
          point: "Specifies non-participant / covert-or-habituated setup AND chooses event or time sampling with a valid reason",
          keywords: ["event sampling", "time sampling", "non-participant", "missed between", "fixed interval"],
        },
        {
          point: "Explains inter-observer reliability check (two independent observers simultaneously tally pilot + correlate ≥ +0.80 / 80%)",
          keywords: ["two observers", "simultaneously", "correlat", "0.8", "80%"],
        },
        {
          point: "Addresses under-16 informed consent via written parental/guardian permission beforehand",
          keywords: ["parent", "guardian", "under 16", "aged 4"],
        },
        {
          point: "Includes confidentiality (anonymous codes, no real names) or child assent / right to withdraw",
          keywords: ["confidential", "anonym", "code", "withdraw"],
        },
      ],
      commonError:
        "Writing 'Tally good language' (un-operationalised!) or asking 4-year-olds to sign written consent forms themselves!",
      hints: [
        "Make both categories exact spoken counts (e.g. 'utterance of 4+ words', 'asks a wh-question').",
        "Cover Event/Time sampling + Two-observer +0.80 check + Parental consent (<16) & Anonymity!",
      ],
      strategy: "2 Audible Categories + Sampling Choice + 2-Observer Check + Parental Consent & Anonymity",
    },
  ],
};
