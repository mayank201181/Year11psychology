import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "visual-perception-quiz-q01",
      question:
        "Which term (**sensation** or **perception**) refers to the physiological detection and transduction of light wavelengths by retinal rods and cones into nerve impulses?",
      answer: {
        type: "text",
        accept: ["sensation", "visual sensation", "retinal sensation"],
      },
      solution: [
        "**Sensation** is raw receptor detection and transduction on the retina; **perception** is cortical organisation and interpretation in the brain.",
      ],
      traps: [
        {
          spec: { type: "text", accept: ["perception", "visual perception"] },
          feedback: "Perception is the brain's active *interpretation* stage — name the earlier retinal *detection* stage!",
        },
      ],
      difficulty: "warmup",
      guideRef: "sensation-depth-constancy",
      hints: ["Starts with 'S' — raw sensory detection before brain interpretation."],
    },
    {
      kind: "short",
      id: "visual-perception-quiz-q02",
      question:
        "Name the **monocular depth cue** in which parallel lines (such as straight railway tracks or corridor walls) appear to converge toward a vanishing point on the horizon.",
      answer: {
        type: "text",
        accept: ["linear perspective", "perspective"],
      },
      solution: [
        "**Linear perspective** is a monocular pictorial depth cue in which parallel lines converge with increasing distance.",
      ],
      commonError: "Confusing linear perspective (parallel lines converging) with texture gradient (surface detail becoming finer with distance).",
      difficulty: "warmup",
      guideRef: "sensation-depth-constancy",
      hints: ["Two words: 'linear p_________'."],
    },
    {
      kind: "mcq",
      id: "visual-perception-quiz-q03",
      question:
        "Which pair lists the **two binocular depth cues** that require **both eyes** working together?",
      options: [
        "Retinal disparity and oculomotor convergence",
        "Linear perspective and occlusion",
        "Height in plane and texture gradient",
        "Size constancy and Gestalt closure",
      ],
      answerIndex: 0,
      explanation:
        "Retinal disparity (comparing slightly different views from two eyes ~6.3 cm apart) and convergence (inward eye-muscle rotation) both require two functioning eyes.",
      difficulty: "warmup",
      guideRef: "sensation-depth-constancy",
      hints: ["Eliminate pictorial cues that still work on a flat 2D photograph with one eye closed!"],
    },
    {
      kind: "short",
      id: "visual-perception-quiz-q04",
      question:
        "Which single-word **Gestalt principle** explains why viewers group elements that share the same **colour** or **shape** into unified rows or columns?",
      answer: {
        type: "text",
        accept: ["similarity", "law of similarity", "principle of similarity"],
      },
      solution: [
        "Gestalt **similarity** groups visual elements that share colour, shape, size, or orientation.",
      ],
      traps: [
        {
          spec: { type: "text", accept: ["proximity"] },
          feedback: "Proximity groups items by physical *closeness* in space — name the rule that groups by shared *colour/shape*!",
        },
      ],
      difficulty: "warmup",
      guideRef: "gestalt-and-illusions",
      hints: ["Starts with 'S' in F-P-S-C-C."],
    },
    {
      kind: "short",
      id: "visual-perception-quiz-q05",
      question:
        "In **Gibson & Walk's (1960)** Visual Cliff study, out of the **27 crawling human infants** who moved off the central board, how many (**exact number**) crawled onto the **deep ('cliff')** side?",
      answer: { type: "number", value: 3 },
      solution: [
        "All 27 mobile infants (100%) crossed the shallow side, while **24 refused** and only **3** (11%) crawled onto the deep cliff side.",
      ],
      traps: [
        {
          spec: { type: "number", value: 24 },
          feedback: "24 was the number of mobile infants who *refused* the deep side — only 3 crossed onto it!",
        },
        {
          spec: { type: "number", value: 11 },
          feedback: "11% is the percentage — the question asks for the exact number of infants out of 27!",
        },
      ],
      difficulty: "core",
      guideRef: "gibson-direct-theory",
      hints: [
        "24 out of 27 refused to cross the deep glass.",
        "Subtract 24 from 27!",
      ],
    },
    {
      kind: "short",
      id: "visual-perception-quiz-q06",
      question:
        "Is **Gregory's (1970) Constructivist Theory** of perception classified as **bottom-up** or **top-down** processing?",
      answer: {
        type: "text",
        accept: ["top-down", "top down", "top-down processing", "top down processing"],
      },
      solution: [
        "Gregory's Constructivist Theory is **top-down** (conceptually driven from stored brain schemas, past experience, and expectations). Gibson's Direct Theory is bottom-up.",
      ],
      traps: [
        {
          spec: { type: "text", accept: ["bottom-up", "bottom up"] },
          feedback: "Bottom-up belongs to Gi**B**son — Gre**G**ory uses **top-down** stored schemas to build hypotheses!",
        },
      ],
      difficulty: "warmup",
      guideRef: "gregory-constructivist",
      hints: ["Gi**B**son = **B**ottom-up; so Gre**G**ory = ?"],
    },
    {
      kind: "mcq",
      id: "visual-perception-quiz-q07",
      question:
        "In **Haber & Levin's (2001)** outdoor field study, which type of target object yielded the **most accurate** size and distance judgements?",
      options: [
        "Unfamiliar geometric cardboard cut-outs (such as plain flat circles, triangles, and rectangles)",
        "Familiar invariant-sized objects (such as regulation basketballs and 2-litre soda bottles)",
        "Familiar variant-sized objects (such as teddy bears, Christmas trees, and houseplants)",
        "Monocular 2D geometric illusion cards (such as Müller-Lyer shafts and Ebbinghaus rings)",
      ],
      answerIndex: 1,
      explanation:
        "Objects with a standard, invariant real-world size stored in memory schemas anchored both size estimates and outdoor distance judgements up to 100 metres.",
      difficulty: "core",
      guideRef: "gregory-constructivist",
      hints: [
        "Compare standard-sized familiar objects against variable-sized objects and arbitrary cardboard shapes.",
        "Why does knowing an exact standard height help judge distance outdoors?",
      ],
    },
    {
      kind: "short",
      id: "visual-perception-quiz-q08",
      question:
        "In **Bruner & Minturn's (1955)** perceptual set study, what **percentage** of participants primed with two-digit numbers perceived the ambiguous broken symbol `I3` as the number **13**?",
      answer: { type: "number", value: 92 },
      solution: [
        "**92%** of number-primed participants reported '13', whereas **83%** of letter-primed participants reported 'B'.",
      ],
      traps: [
        {
          spec: { type: "number", value: 83 },
          feedback: "83% was the letter-primed group reporting 'B' — give the number-primed group percentage reporting '13'!",
        },
      ],
      difficulty: "core",
      guideRef: "perceptual-set-culture",
      hints: [
        "Over nine out of ten number-primed students saw '13'.",
        "Exact percentage in the low nineties: 9_%.",
      ],
    },
    {
      kind: "short",
      id: "visual-perception-quiz-q09",
      question:
        "In **Bremner et al. (2016)**, semi-nomadic rural **Himba** pastoralists in which African country showed remarkably low susceptibility to the Ebbinghaus circles illusion?",
      answer: {
        type: "text",
        accept: ["namibia", "republic of namibia"],
      },
      solution: [
        "Bremner et al. (2016) compared British participants in London against rural Himba compounds and urbanised Opuwo residents in northern **Namibia**.",
      ],
      commonError: "Confusing Namibia (home of the rural Himba in Bremner et al., 2016) with South Africa or Kenya.",
      difficulty: "core",
      guideRef: "perceptual-set-culture",
      hints: [
        "South-west African nation immediately north of South Africa.",
        "Starts with 'Nam-'.",
      ],
    },
    {
      kind: "written",
      id: "visual-perception-quiz-q10",
      question:
        "Distinguish between **sensation** and **perception** using the example of looking at a rectangular textbook lying at an angle on your desk. [2 marks]",
      marks: 2,
      modelAnswer:
        "Sensation occurs when light reflected from the angled cover stimulates rods and cones on the retina, projecting a skewed trapezoidal pattern of neural impulses along the optic nerve. Perception occurs when the visual cortex organises and interprets those impulses using shape constancy and depth cues so you consciously recognise a rectangular book.",
      markScheme: [
        {
          point: "Sensation: retinal photoreceptors (rods/cones) detect/transduce reflected light (skewed/trapezoidal retinal image)",
          keywords: ["retina", "retinal", "rods", "cones", "receptors", "trapezoid", "impulses", "transduc"],
        },
        {
          point: "Perception: visual cortex/brain organises & interprets signals (via shape constancy) as a meaningful rectangular book",
          keywords: ["cortex", "brain", "interpret", "organis", "organiz", "shape constancy", "meaning"],
        },
      ],
      commonError: "Giving abstract textbook definitions without applying them to the angled rectangular textbook asked for in the stem.",
      difficulty: "core",
      guideRef: "sensation-depth-constancy",
      hints: [
        "Describe what hits the **retina** first (trapezoidal light pattern transduced by rods/cones).",
        "Then explain how the **visual cortex** interprets it via **shape constancy**!",
      ],
      strategy: "Define + apply to angled book (1+1)",
    },
  ],
  papers: [
    {
      id: "visual-perception-p1",
      title: "Practice Paper 1: Depth Cues, Constancy, Gestalt & Visual Illusions",
      questions: [
        {
          kind: "short",
          id: "visual-perception-p1-q01",
          question:
            "Name the **monocular depth cue** operating when a coffee mug standing on a desk partially blocks your view of a laptop screen behind it, making the mug appear closer.",
          answer: {
            type: "text",
            accept: ["occlusion", "interposition", "overlap", "overlapping", "superposition"],
          },
          solution: [
            "**Occlusion** (also called **interposition** or **overlap**) occurs when a nearer object partially conceals the contour of a further object.",
          ],
          commonError: "Confusing occlusion/interposition (blocking part of a farther object) with relative size or height in plane.",
          difficulty: "warmup",
          guideRef: "sensation-depth-constancy",
          hints: ["Starts with 'O' (or 'I' for interposition) in L-R-O-H-T."],
        },
        {
          kind: "short",
          id: "visual-perception-p1-q02",
          question:
            "A parked car 6 metres away casts a **4.5 mm** horizontal image on your retina. When you walk down the road to **18 metres** away, what is the new horizontal **retinal image width** in **mm**?",
          answer: { type: "number", value: 1.5 },
          solution: [
            "Distance increased by a factor of 18 ÷ 6 = 3.",
            "Retinal image shrinks to one-third: 4.5 mm ÷ 3 = **1.5 mm**.",
          ],
          traps: [
            {
              spec: { type: "number", value: 13.5 },
              feedback: "You multiplied by 3 — retinal images *shrink* proportionally as viewing distance increases!",
            },
          ],
          difficulty: "core",
          guideRef: "sensation-depth-constancy",
          hints: [
            "How many times further is 18 m compared with 6 m?",
            "Divide 4.5 mm by 3.",
          ],
        },
        {
          kind: "written",
          id: "visual-perception-p1-q03",
          question:
            "Explain the difference between the two **binocular depth cues** — **retinal disparity** and **convergence** — including why both become ineffective beyond roughly 10 metres. [4 marks]",
          marks: 4,
          modelAnswer:
            "Retinal disparity relies on the ~6.3 cm horizontal separation between our two eyes, meaning each retina receives a slightly different view of a close object; the visual cortex fuses greater image disparity into closer 3D depth. In contrast, convergence is a neuromuscular cue in which extraocular muscles rotate both eyeballs inwards toward the nose to focus on a near target, sending muscle-tension feedback to the brain. Beyond roughly 10 metres, light rays enter both eyes almost parallel: the two retinal images become virtually identical (zero disparity), and the eyes look straight ahead with minimal inward muscle tension (zero convergence shift).",
          markScheme: [
            {
              point: "Defines retinal disparity: ~6 cm eye separation creates two slightly different retinal views; larger difference = closer",
              keywords: ["different", "two retinal", "apart", "separation", "views"],
            },
            {
              point: "Defines convergence: extraocular muscles turn eyeballs inwards; stronger muscle tension = closer",
              keywords: ["muscles", "muscle", "inwards", "inward", "rotate", "tension", "eyeballs"],
            },
            {
              point: "Explains why disparity fades >10 m: left and right retinal images become nearly identical",
              keywords: ["identical", "same image", "negligible", "zero disparity"],
            },
            {
              point: "Explains why convergence fades >10 m: lines of sight become parallel with no extra inward turn",
              keywords: ["parallel", "straight ahead", "relaxed"],
            },
          ],
          commonError: "Describing both cues as 'using two eyes to judge distance' without distinguishing *image comparison* from *inward eye-muscle tension*.",
          difficulty: "core",
          guideRef: "sensation-depth-constancy",
          hints: [
            "Contrast **two retinal images** (disparity) against **extraocular muscle tension** (convergence).",
            "Then explain what happens to image difference and eye angle when staring at a distant mountain!",
          ],
          strategy: "Define Cue 1 + Define Cue 2 + Explain >10 m limit for each",
        },
        {
          kind: "short",
          id: "visual-perception-p1-q04",
          question:
            "Which type of **perceptual constancy** (**size**, **shape**, or **colour**) allows you to perceive a coin flipped in the air as remaining **round** even while its retinal image alternates between a circle, an ellipse, and a thin line?",
          answer: {
            type: "text",
            accept: ["shape constancy", "shape"],
          },
          solution: [
            "**Shape constancy** preserves stable perception of an object's 3D geometric form despite tilt/rotation altering its 2D retinal projection.",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["size constancy", "size"] },
              feedback: "Size constancy keeps *dimensions/scale* stable across distance — name the constancy that keeps *roundness* stable across tilt angles!",
            },
          ],
          difficulty: "warmup",
          guideRef: "sensation-depth-constancy",
          hints: ["Circle → ellipse → line are changes in geometric *shape* on the retina."],
        },
        {
          kind: "short",
          id: "visual-perception-p1-q05",
          question:
            "Name the **ambiguous wireframe 3D illusion** (invented in 1832) whose perceived front square face spontaneously flips orientation without any change to the lines on the page.",
          answer: {
            type: "text",
            accept: ["necker cube", "necker's cube", "necker cube illusion"],
          },
          solution: [
            "The **Necker Cube** lacks occlusion and perspective taper, causing multistable perceptual flipping between two 3D orientations.",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["rubin's vase", "rubin vase"] },
              feedback: "Rubin's vase flips between a goblet and two faces — name the 3D wireframe *cube*!",
            },
          ],
          difficulty: "warmup",
          guideRef: "gestalt-and-illusions",
          hints: ["Named after Swiss crystallographer Louis Albert N_____: the N_____ Cube."],
        },
        {
          kind: "written",
          id: "visual-perception-p1-q06",
          question:
            "A graphic designer creates a transit map: stations on the Circle Line sit tightly clustered in pairs, every interchange hub is drawn as a bold white hexagon, and a curved river line passes smoothly beneath six intersecting rail lines without seeming to break into jagged segments. Identify and apply **three Gestalt principles** used in this map. [3 marks]",
          marks: 3,
          modelAnswer:
            "First, the Law of Proximity groups stations placed close together in tight pairs as belonging to the same local zone. Second, the Law of Similarity groups all bold white hexagons together as interchange hubs because they share identical shape and colour. Third, the Law of Continuity (good continuation) enables riders to trace the curved river smoothly beneath the six crossing rail lines rather than breaking it into disconnected angles.",
          markScheme: [
            {
              point: "Proximity + linked to tightly clustered station pairs",
              keywords: ["proximity", "close", "pairs", "clustered"],
            },
            {
              point: "Similarity + linked to identical white hexagon interchange symbols",
              keywords: ["similarity", "hexagon", "hexagons", "same shape", "shared"],
            },
            {
              point: "Continuity (good continuation) + linked to tracing the smooth unbroken river across intersecting rail lines",
              keywords: ["continuity", "continuation", "smooth", "river", "unbroken"],
            },
          ],
          commonError: "Confusing **continuity** (smooth intersecting river curve) with **closure** (completing an enclosed shape with missing border gaps).",
          difficulty: "core",
          guideRef: "gestalt-and-illusions",
          hints: [
            "Match 'tightly clustered pairs' → **Proximity**, 'white hexagons' → **Similarity**, and 'smooth crossing river' → **Continuity**.",
            "Tie every Gestalt law explicitly to its map feature!",
          ],
          strategy: "Match 3 features to 3 Gestalt laws",
        },
        {
          kind: "short",
          id: "visual-perception-p1-q07",
          question:
            "Name the **geometric distortion illusion** in which two identical horizontal bars lie between converging railway-track lines, making the upper bar appear longer than the lower bar.",
          answer: {
            type: "text",
            accept: ["ponzo illusion", "ponzo", "ponzo railway illusion"],
          },
          solution: [
            "Mario **Ponzo (1911)** demonstrated that converging linear-perspective lines make an upper horizontal bar appear longer than an identical lower bar.",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["muller-lyer", "müller-lyer", "muller-lyer illusion", "müller-lyer illusion"] },
              feedback: "Müller-Lyer uses fins/arrowheads (`>—<` vs `<—>`) attached to the ends of lines — name the *converging railway-track* illusion!",
            },
          ],
          difficulty: "warmup",
          guideRef: "gestalt-and-illusions",
          hints: ["Starts with 'P' (5 letters): the P____ illusion."],
        },
        {
          kind: "short",
          id: "visual-perception-p1-q08",
          question:
            "In **Gibson & Walk's (1960)** Visual Cliff study, how many **human infants in total** (aged 6 to 14 months) were placed on the central board (including the 9 who did not crawl off)?",
          answer: { type: "number", value: 36 },
          solution: [
            "Gibson & Walk (1960) tested **36** human infants in total: 9 remained on the centre board and 27 crawled off onto the shallow side.",
          ],
          traps: [
            {
              spec: { type: "number", value: 27 },
              feedback: "27 was the number who crawled off the board — add the 9 stationary infants for the total sample (36)!",
            },
          ],
          difficulty: "core",
          guideRef: "gibson-direct-theory",
          hints: [
            "27 crawlers + 9 infants who stayed on the board = ?",
            "Three dozen infants.",
          ],
        },
        {
          kind: "written",
          id: "visual-perception-p1-q09",
          question:
            "Describe the apparatus, procedure, and main findings of **Gibson & Walk's (1960)** *Visual Cliff* study, and explain **one criticism** of drawing purely nativist conclusions from the human infant sample. [4 marks]",
          marks: 4,
          modelAnswer:
            "Gibson & Walk placed 36 crawling human infants (aged 6–14 months) on a central wooden board bisecting a raised heavy glass table: the shallow side had red-and-white checkerboard fabric directly beneath the glass, while the deep side had the checkerboard ~1.2 m below to create visual cliff cues while tactilely solid. Mothers called their babies alternately from the shallow and deep sides. Of the 27 infants who moved off the board, 100% (27/27) crawled onto the shallow side, whereas 89% (24/27) refused the deep side (only 3/27, or 11%, crossed). However, because human infants could not be tested until old enough to crawl at 6–14 months, they already possessed at least half a year of visual experience — meaning learned depth associations cannot be fully ruled out in the human sample alone.",
          markScheme: [
            {
              point: "Apparatus: raised solid safety glass with centre board; checkerboard directly beneath (shallow) vs ~1.2 m below (deep)",
              keywords: ["glass", "checkerboard", "shallow", "deep", "1.2", "below"],
            },
            {
              point: "Procedure: 36 infants (6–14 m) placed on centre board while mothers beckoned/called from shallow and deep sides",
              keywords: ["36", "mothers", "mother", "called", "beckoned"],
            },
            {
              point: "Findings: 27/27 (100%) mobile crawlers crossed shallow vs only 3/27 (11%) crossed deep / 89% refused",
              keywords: ["27", "100%", "11%", "89%", "24", "refused"],
            },
            {
              point: "Nativist critique: 6–14-month crawling infants already had months of postnatal visual learning experience",
              keywords: ["6–14", "6 to 14", "months", "crawl", "experience", "learned", "postnatal"],
            },
          ],
          commonError: "Saying '3 out of 36 crossed the deep side' instead of specifying **3 out of the 27 mobile crawlers (11%)**.",
          difficulty: "core",
          guideRef: "gibson-direct-theory",
          hints: [
            "Include **glass + checkerboard shallow/deep**, **mother calling**, and **27/27 vs 3/27 (11%)**.",
            "Then critique why 6–14 months of age isn't 'newborn'!",
          ],
          strategy: "Apparatus → Procedure → Exact stats → Age critique",
        },
        {
          kind: "short",
          id: "visual-perception-p1-q10",
          question:
            "In **Gibson's Direct Theory**, what three-word term describes the stationary point straight ahead from which all radial **optic flow** vectors expand during forward motion?",
          answer: {
            type: "text",
            accept: [
              "focus of expansion",
              "expansion focus",
              "invariant focus",
            ],
          },
          solution: [
            "The **focus of expansion** is the motionless centre in the optic flow array specifying the observer's exact heading.",
          ],
          commonError: "Writing optic flow array (the whole streaming pattern) instead of the stationary centre point: focus of expansion.",
          difficulty: "core",
          guideRef: "gibson-direct-theory",
          hints: [
            "Type the standard Gibsonian phrase: 'focus of e_________'.",
            "All texture vectors *expand* outward from this *focus*.",
          ],
        },
        {
          kind: "written",
          id: "visual-perception-p1-q11",
          question:
            "Leo walks across a dim park at twilight: first, while jogging forward along a gravel path, he effortlessly steers around a knee-high flat log and sits on it to tie his shoelace; second, squinting at a distant bush 60 metres away, he briefly mistakes a discarded jacket for a crouching dog. Explain how **Gibson's Direct Theory** accounts for the first part of Leo's walk while **Gregory's Constructivist Theory** accounts for the second. [4 marks]",
          marks: 4,
          modelAnswer:
            "Gibson's bottom-up Direct Theory explains Leo's jogging and sitting without needing conscious calculation: forward movement along the gravel creates radial optic flow and texture gradients specifying his heading and distance, while the knee-high flat log directly presents the ecological affordance of 'sitting-on' relative to Leo's leg length. Conversely, Gregory's top-down Constructivist Theory explains Leo's mistake at 60 metres: because twilight and distance make retinal sensory data impoverished and ambiguous, Leo's brain draws on stored park schemas ('dogs walk in parks at dusk') to construct a faulty perceptual hypothesis — misinterpreting the jacket as a crouching dog.",
          markScheme: [
            {
              point: "Gibson bottom-up: jogging creates optic flow / texture gradient specifying path layout directly",
              keywords: ["optic flow", "texture gradient", "bottom-up", "heading"],
            },
            {
              point: "Gibson affordance: knee-high flat log directly offers the action possibility ('affords sitting')",
              keywords: ["affordance", "affordances", "affords", "action possibility"],
            },
            {
              point: "Gregory stimulus ambiguity: twilight + 60 m distance degrade/impoverish bottom-up retinal data",
              keywords: ["ambiguous", "impoverished", "incomplete", "dim", "degraded"],
            },
            {
              point: "Gregory top-down hypothesis: stored park schemas / past experience generate wrong perceptual hypothesis (dog)",
              keywords: ["perceptual hypothesis", "hypothesis", "schema", "schemas", "top-down", "past experience"],
            },
          ],
          commonError: "Explaining both theories generically without tying **affordances/optic flow** to the log and **perceptual hypothesis/schemas** to the jacket-dog error.",
          difficulty: "core",
          guideRef: "gibson-direct-theory",
          hints: [
            "Part 1 (Gibson): link jogging + gravel → **optic flow / texture gradient**, and knee-high log → **affordance**!",
            "Part 2 (Gregory): link dim 60 m view → **ambiguous input**, and park dog → **top-down schema / perceptual hypothesis**!",
          ],
          strategy: "2 Gibson concepts + 2 Gregory concepts anchored to Leo",
        },
        {
          kind: "short",
          id: "visual-perception-p1-q12",
          question:
            "In **Gibson & Walk (1960)**, what **percentage** of day-old **chicks** and 1-day-old **goat kids** ever stepped onto the deep ('cliff') side of the Visual Cliff?",
          answer: { type: "number", value: 0 },
          solution: [
            "**0%** — not a single day-old chick, lamb, or goat kid ever stepped onto the deep glass side, providing strong cross-species nativist evidence.",
          ],
          traps: [
            {
              spec: { type: "number", value: 11 },
              feedback: "11% (3/27) was for 6–14-month *human infants* — newborn chicks and goat kids had ZERO deep crossings!",
            },
          ],
          difficulty: "core",
          guideRef: "gibson-direct-theory",
          hints: [
            "Did *any* day-old chick or goat kid ever step onto the cliff glass?",
            "Exact integer percentage!",
          ],
        },
        {
          kind: "written",
          id: "visual-perception-p1-q13",
          question:
            "Using **Gregory's (1970) misplaced size-constancy scaling**, explain why the two equal-length shafts in the **Müller-Lyer illusion** look unequal in length. [3 marks]",
          marks: 3,
          modelAnswer:
            "Gregory argues the brain treats the 2D fin lines as 3D linear-perspective depth cues learned from carpentered architectural environments. The shaft with outward-flaring fins (>—<) resembles a distant inside room corner receding away from the viewer, whereas the shaft with inward arrowheads (<—>) resembles a near outside building corner jutting closer. Because both shafts cast identical-sized retinal images, misplaced size-constancy scaling inappropriately enlarges the 'distant' inside-corner shaft so it looks longer and shrinks the 'near' outside-corner shaft.",
          markScheme: [
            {
              point: "Names misplaced size-constancy scaling (applying 3D depth-scaling rules to a flat 2D drawing)",
              keywords: ["misplaced", "size-constancy", "size constancy", "scaling", "2d"],
            },
            {
              point: "Explains outward fins (>—<) mimic a distant receding inside room corner",
              keywords: ["inside corner", "interior corner", "receding", "further away", "outward"],
            },
            {
              point: "Explains inward arrowheads (<—>) mimic a near jutting outside building corner + equal retinal size scaled up vs down",
              keywords: ["outside corner", "exterior corner", "jutting", "closer", "enlarg", "longer"],
            },
          ],
          commonError: "Getting inside vs outside corners backwards — remember `>—<` recedes away (scaled UP = longer)!",
          difficulty: "core",
          guideRef: "gregory-constructivist",
          hints: [
            "State the core mechanism: **misplaced size-constancy scaling**.",
            "Contrast **inside room corner** (`>—<`, far → scaled UP) vs **outside building corner** (`<—>`, near → scaled DOWN).",
          ],
          strategy: "Mechanism + Inside corner + Outside corner",
        },
        {
          kind: "short",
          id: "visual-perception-p1-q14",
          question:
            "In a landscape painting *below* the horizon line, two identical sailboats are drawn the same size, except Boat P sits **higher up on the canvas** (nearer the horizon) than Boat Q. Which monocular depth cue makes Boat P look further away?",
          answer: {
            type: "text",
            accept: ["height in plane", "height in the visual field", "elevation", "relative height"],
          },
          solution: [
            "**Height in plane** (relative height): objects positioned higher toward the horizon line on the ground/sea plane appear further away.",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["relative size"] },
              feedback: "Both boats were drawn the *same size* — focus on vertical position toward the horizon!",
            },
          ],
          difficulty: "warmup",
          guideRef: "sensation-depth-constancy",
          hints: ["Focus on 'H' in L-R-O-H-T: H_____ in plane."],
        },
        {
          kind: "short",
          id: "visual-perception-p1-q15",
          question:
            "In **Kanizsa's Triangle**, viewers see phantom edges that do not physically exist in the ink on the page. Into which of the three CIE 0266 illusion categories (**ambiguous**, **fiction**, or **distortion**) does Kanizsa's Triangle fall?",
          answer: {
            type: "text",
            accept: ["fiction", "fictions", "illusory contour", "subjective contour", "fiction illusion"],
          },
          solution: [
            "Kanizsa's Triangle is a **fiction** (illusory/subjective contour) generated by Gestalt closure.",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["ambiguous", "ambiguous figure", "distortion"] },
              feedback: "Necker cube is ambiguous and Müller-Lyer is a distortion — inventing phantom contours is a **fiction**!",
            },
          ],
          difficulty: "warmup",
          guideRef: "gestalt-and-illusions",
          hints: ["Choose one of the three named categories in the question: perceiving something 'invented' that isn't physically drawn."],
        },
      ],
    },
    {
      id: "visual-perception-p2",
      title: "Practice Paper 2: Haber & Levin, Perceptual Set, Bremner & Paper 2 Evaluation",
      questions: [
        {
          kind: "short",
          id: "visual-perception-p2-q01",
          question:
            "In **Haber & Levin (2001)** Experiment 1, how many male US college students (**exact sample size**) estimated the sizes of the 45 objects?",
          answer: { type: "number", value: 109 },
          solution: [
            "Experiment 1 (size estimation) tested **109** male college students, while Experiment 2 (outdoor distance estimation up to 100 m) tested **9** students.",
          ],
          traps: [
            {
              spec: { type: "number", value: 45 },
              feedback: "45 was the number of *target objects* (15 invariant + 15 variant + 15 unfamiliar), not participants!",
            },
            {
              spec: { type: "number", value: 9 },
              feedback: "9 was the sample size in Experiment 2 (distance estimation) — Experiment 1 had 109 students!",
            },
          ],
          difficulty: "core",
          guideRef: "gregory-constructivist",
          hints: [
            "Just over one hundred male college students in Experiment 1 (and 100 more than Experiment 2's 9!).",
            "Exact three-digit number: 10_.",
          ],
        },
        {
          kind: "short",
          id: "visual-perception-p2-q02",
          question:
            "Up to what maximum viewing distance in **metres** were target objects staked across the outdoor grassy field in **Haber & Levin (2001)** Experiment 2?",
          answer: { type: "number", value: 100 },
          solution: [
            "Haber & Levin (2001) placed real objects at distances up to **100 metres** in an open grassy field.",
          ],
          commonError: "Confusing 100 metres (maximum field viewing distance in Haber & Levin, 2001) with 109 (Experiment 1 participant count).",
          difficulty: "core",
          guideRef: "gregory-constructivist",
          hints: [
            "Equal to the length of an Olympic sprint track in metres!",
            "Round three-digit number.",
          ],
        },
        {
          kind: "written",
          id: "visual-perception-p2-q03",
          question:
            "Describe the three object categories used by **Haber & Levin (2001)** and explain how their findings support **Gregory's Constructivist Theory** while overcoming a classic criticism of laboratory perception studies. [4 marks]",
          marks: 4,
          modelAnswer:
            "Haber & Levin compared 15 familiar invariant-sized objects (e.g. basketball, 2-litre soda bottle), 15 familiar variant-sized objects (e.g. Christmas tree, teddy bear), and 15 unfamiliar geometric cardboard cut-outs. Participants estimated both object size (even without sight) and outdoor distance up to 100 m significantly more accurately for familiar invariant-sized objects than for unfamiliar cut-outs. This supports Gregory's top-down theory by proving stored memory schemas of standard object sizes anchor real-world spatial perception. Crucially, conducting the study outdoors in a natural grassy field gave high ecological validity, overcoming Gibson's criticism that top-down effects only happen with impoverished 2D laboratory flashes.",
          markScheme: [
            {
              point: "Correctly distinguishes the 3 object tiers: familiar invariant-sized, familiar variant-sized, and unfamiliar geometric shapes",
              keywords: ["invariant", "variant", "unfamiliar", "cardboard", "basketball"],
            },
            {
              point: "States key finding: highest size & distance accuracy for familiar invariant-sized objects vs worst for unfamiliar shapes",
              keywords: ["accurate", "accuracy", "highest", "distance"],
            },
            {
              point: "Links to Gregory: top-down stored schemas / prior familiarity actively guide spatial perception",
              keywords: ["top-down", "schema", "schemas", "prior knowledge", "memory"],
            },
            {
              point: "Explains methodological strength: real outdoor grassy field up to 100 m provides high ecological validity vs lab peepholes",
              keywords: ["outdoor", "field", "ecological validity", "gibson", "peephole", "impoverished"],
            },
          ],
          commonError: "Listing 'familiar vs unfamiliar' as only two categories and forgetting the vital distinction between **invariant-sized** and **variant-sized** familiar objects.",
          difficulty: "core",
          guideRef: "gregory-constructivist",
          hints: [
            "Name all **3** groups of 15 objects (invariant, variant, unfamiliar).",
            "Connect the outdoor 100 m field to **ecological validity** against Gibson's lab critique!",
          ],
          strategy: "3 object tiers + finding + Gregory link + ecological strength",
        },
        {
          kind: "short",
          id: "visual-perception-p2-q04",
          question:
            "In **Gilchrist & Nesberg (1952)**, for how many **hours** did the experimental group of 26 students fast without food (drinking only water)?",
          answer: { type: "number", value: 20 },
          solution: [
            "The food-deprived group fasted for **20 hours** (tested at intervals up to 20 h against 20 normally fed controls).",
          ],
          traps: [
            {
              spec: { type: "number", value: 26 },
              feedback: "26 was the number of *hungry participants* — they fasted for 20 hours!",
            },
          ],
          difficulty: "core",
          guideRef: "perceptual-set-culture",
          hints: [
            "Just four hours shy of a full 24-hour day!",
            "Two-digit multiple of 10.",
          ],
        },
        {
          kind: "short",
          id: "visual-perception-p2-q05",
          question:
            "In **McGinnies (1949)**, what physiological measure of sweat-gland arousal (**3-letter abbreviation or full term**) spiked *before* participants verbally reported taboo words?",
          answer: {
            type: "text",
            accept: [
              "gsr",
              "galvanic skin response",
              "electrodermal activity",
              "skin conductance",
            ],
          },
          solution: [
            "**Galvanic Skin Response (GSR)** measured electrical skin conductance from sweat arousal prior to conscious verbal recognition.",
          ],
          commonError: "Writing EEG or fMRI instead of GSR (galvanic skin response), which measures autonomic sweat-gland conductance in McGinnies (1949).",
          difficulty: "core",
          guideRef: "perceptual-set-culture",
          hints: [
            "Three-letter initials: G-S-R.",
            "Stands for Galvanic S___ R_______.",
          ],
        },
        {
          kind: "written",
          id: "visual-perception-p2-q06",
          question:
            "Chef Nadia has skipped breakfast and lunch during a busy catering shift; driving home at 4 p.m., a red-and-yellow hardware shop sign reading **BURNERS** catches her eye from 80 metres away and she momentarily reads it as **BURGERS**! Explain Nadia's misreading using **perceptual set** and **one supporting research study**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Nadia's misreading is driven by perceptual set — a top-down state of readiness driven by physiological motivation (hunger) that acts as both a selector (drawing attention to food-coloured signage) and an interpreter (biasing ambiguous distant letters 'RN' into 'RG' for 'BURGERS'). Because 80 metres degrades bottom-up letter sharpness, top-down hunger schemas dominate. This is supported by Gilchrist & Nesberg (1952), who found 26 students fasting for 20 hours perceived colour slides of meals (including hamburgers) as significantly brighter than 20 fed controls (and Sanford, 1936, who showed hungry participants completed ambiguous word stems as food words twice as often).",
          markScheme: [
            {
              point: "Defines perceptual set as top-down cognitive readiness (selector/interpreter) shaped here by physiological motivation (hunger)",
              keywords: ["readiness", "top-down", "motivation", "hunger", "selector", "interpreter"],
            },
            {
              point: "Applies to Nadia: skipping meals + 80 m visual ambiguity caused 'BURNERS' ('RN') to be assimilated as 'BURGERS'",
              keywords: ["skipped", "80 m", "ambiguous", "rn", "food"],
            },
            {
              point: "Names relevant motivation study: Gilchrist & Nesberg (1952) or Sanford (1936)",
              keywords: ["gilchrist", "nesberg", "sanford"],
            },
            {
              point: "Provides accurate empirical study detail (20-hour fast → food slides perceived brighter / ambiguous word stems completed as food)",
              keywords: ["20 hours", "20-hour", "brighter", "dimmer", "word stems", "satiated"],
            },
          ],
          commonError: "Naming Bruner & Minturn (`B/13`) instead of a **hunger/motivation** study (Gilchrist & Nesberg or Sanford) when the stem focuses on skipping breakfast and lunch!",
          difficulty: "core",
          guideRef: "perceptual-set-culture",
          hints: [
            "Identify the specific M-E-E-C factor in Nadia's stem: **motivation / hunger**!",
            "Back it up with **Gilchrist & Nesberg (1952)** (20-hour fast, meal slides appearing brighter).",
          ],
          strategy: "Match stem driver to exact M-E-E-C study",
        },
        {
          kind: "short",
          id: "visual-perception-p2-q07",
          question:
            "What name did **Segall, Campbell & Herskovits (1966)** give to the hypothesis that living in rectangular urban buildings with straight walls and 90-degree corners increases susceptibility to the Müller-Lyer illusion?",
          answer: {
            type: "text",
            accept: [
              "carpentered-world hypothesis",
              "carpentered world hypothesis",
              "carpentered world",
              "carpentered-world",
              "carpentered environment hypothesis",
            ],
          },
          solution: [
            "The **Carpentered-World Hypothesis** proposes that habitual exposure to carpenter-built rectangular environments trains 3D-corner depth inference.",
          ],
          commonError: "Confusing Gregory's misapplied size constancy with Segall et al.'s specific cross-cultural label: the carpentered-world hypothesis.",
          difficulty: "warmup",
          guideRef: "perceptual-set-culture",
          hints: ["Named after woodworkers who build straight 90° corners: the 'C_________-World Hypothesis'."],
        },
        {
          kind: "short",
          id: "visual-perception-p2-q08",
          question:
            "In **Bremner et al. (2016)**, do traditional rural **Himba** adults rely primarily on a **local** (detail-focused) or **global** (context-focused) perceptual processing style when judging the Ebbinghaus circles?",
          answer: {
            type: "text",
            accept: ["local", "local processing", "local style", "local attention", "detail-focused"],
          },
          solution: [
            "Rural Himba maintain a **local** (detail-focused) attentional style, isolating the central target circle from surrounding inducer circles (whereas UK adults use a global context style).",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["global", "global processing", "global style"] },
              feedback: "Global context processing describes **UK** adults (who get fooled by surrounding rings) — rural Himba use **local** processing!",
            },
          ],
          difficulty: "core",
          guideRef: "perceptual-set-culture",
          hints: [
              "Choose between 'local' and 'global' — which one focuses strictly on the central circle itself without being fooled by neighbours?",
              "Four-letter word? Five-letter word starting with 'L'!",
          ],
        },
        {
          kind: "written",
          id: "visual-perception-p2-q09",
          question:
            "Describe the sample, procedure, and key developmental & cultural findings of **Bremner et al. (2016)**, and explain **one methodological limitation** of this cross-cultural study. [4 marks]",
          marks: 4,
          modelAnswer:
            "Bremner et al. (2016) compared children (aged 3–10 years) and adults from traditional rural Himba compounds in Namibia and London (UK), alongside urbanised Himba adults living in the town of Opuwo. Participants viewed two orange central target circles surrounded by rings of larger or smaller inducer circles (Ebbinghaus illusion) and indicated which orange circle looked larger. At ages 3–4, both UK and rural Himba toddlers showed very low illusion susceptibility; across ages 5–10 into adulthood, UK participants became strongly fooled (global contextual set), rural Himba stayed highly accurate (local set), and urbanised Opuwo Himba shifted midway toward UK levels. A limitation is its quasi-experimental design: because culture and town residence cannot be randomly allocated, confounding factors such as formal Western schooling or screen familiarity could co-vary with visual environment.",
          markScheme: [
            {
              point: "Sample & procedure: rural Namibian Himba, urbanised Opuwo Himba, and UK children (3–10 yrs) & adults judging Ebbinghaus target circles",
              keywords: ["himba", "opuwo", "namibia", "ebbinghaus", "inducer", "orange"],
            },
            {
              point: "Age 3–4 baseline + UK developmental rise in global context susceptibility",
              keywords: ["3–4", "3 to 4", "both", "global", "grew", "increased"],
            },
            {
              point: "Rural Himba local immunity vs urbanised Opuwo Himba shifting toward UK levels",
              keywords: ["local", "urbanised", "urbanized", "midway", "shifted"],
            },
            {
              point: "Methodological limitation: quasi-experiment (no random allocation to culture/town → schooling/literacy confounds) or cross-cultural task familiarity",
              keywords: ["quasi", "random", "schooling", "education", "confound", "literacy"],
            },
          ],
          commonError: "Omitting the **urbanised Himba** group in Opuwo or forgetting the **age 3–4 developmental baseline**.",
          difficulty: "core",
          guideRef: "perceptual-set-culture",
          hints: [
            "Include all **3 groups** (UK, rural Himba, urban Opuwo Himba) and the **age 3–4 → adult** curve.",
            "Critique **quasi-experimental** confounds (e.g. Western classroom schooling vs rural pastoral life).",
          ],
          strategy: "3 groups + age curve + quasi-experiment critique",
        },
        {
          kind: "short",
          id: "visual-perception-p2-q10",
          question:
            "In **Bruner & Minturn (1955)**, **83%** of letter-primed participants reported `'B'` while **92%** of number-primed participants reported `'13'`. Calculate the **percentage-point difference** between these two priming rates.",
          answer: { type: "number", value: 9 },
          solution: ["92% − 83% = **9 percentage points**."],
          commonError: "Giving 92 or 83 individually instead of the percentage-point difference (92% − 83% = 9 percentage points).",
          difficulty: "warmup",
          guideRef: "perceptual-set-culture",
          hints: ["Subtract 83 from 92."],
        },
        {
          kind: "written",
          id: "visual-perception-p2-q11",
          question:
            "Compare **Gibson's Direct Theory** and **Gregory's Constructivist Theory** of visual perception across **three** distinct points of comparison. [6 marks]",
          marks: 6,
          modelAnswer:
            "First, on processing direction, Gibson proposes purely bottom-up (data-driven) perception where the ambient optic array supplies complete, unambiguous spatial data (optic flow, texture gradients, affordances), whereas Gregory proposes top-down (conceptually driven) processing where ambiguous retinal input requires stored schemas to build perceptual hypotheses. Second, on the nature–nurture debate, Gibson is nativist — supported by Gibson & Walk (1960), where 89% of crawling infants and 100% of day-old chicks avoided the deep Visual Cliff — whereas Gregory emphasises nurture and past experience, supported by Haber & Levin's (2001) familiarity boost and Bremner et al.'s (2016) cultural divergence. Third, on explanatory scope, Gibson excels at explaining rapid, accurate real-world movement (e.g. pilots landing) but struggles with static 2D visual illusions, whereas Gregory readily explains Müller-Lyer and Ponzo illusions via misplaced size-constancy scaling.",
          markScheme: [
            {
              point: "Contrast 1a: Gibson = bottom-up / data-driven from unambiguous optic array (optic flow, affordances)",
              keywords: ["bottom-up", "data-driven", "optic array", "optic flow", "affordances"],
            },
            {
              point: "Contrast 1b: Gregory = top-down / conceptually driven using schemas to form perceptual hypotheses",
              keywords: ["top-down", "schemas", "perceptual hypotheses", "hypothesis", "ambiguous"],
            },
            {
              point: "Contrast 2a: Gibson = nature / innate depth perception (supported by Gibson & Walk 1960 Visual Cliff)",
              keywords: ["nativist", "innate", "visual cliff", "89%", "chicks"],
            },
            {
              point: "Contrast 2b: Gregory = nurture / learned past experience (supported by Haber & Levin 2001 or Bremner 2016)",
              keywords: ["nurture", "learned", "haber", "bremner", "experience"],
            },
            {
              point: "Contrast 3a: Gibson explains real-world motion well, but struggles with 2D illusions / perceptual set",
              keywords: ["motion", "movement", "struggles", "pilots"],
            },
            {
              point: "Contrast 3b: Gregory explains 2D distortions (Müller-Lyer/Ponzo) via misplaced size-constancy scaling",
              keywords: ["misplaced", "size-constancy", "ponzo", "müller-lyer", "muller-lyer"],
            },
          ],
          commonError: "Writing everything known about Gibson in one block without matching each point to an explicit counterpoint on Gregory.",
          difficulty: "core",
          guideRef: "gregory-constructivist",
          hints: [
            "Structure around 3 clear axes: (1) **Bottom-up vs Top-down**, (2) **Nature + Visual Cliff vs Nurture + Haber/Bremner**, and (3) **Real motion vs Visual illusions**.",
            "Include named studies and technical terms on BOTH sides of every axis!",
          ],
          strategy: "3 side-by-side comparison axes (2+2+2)",
        },
        {
          kind: "short",
          id: "visual-perception-p2-q12",
          question:
            "What laboratory device (**single technical noun**) did **Bruner & Minturn (1955)** and **McGinnies (1949)** use to flash letters, numbers, or taboo words for controlled millisecond durations?",
          answer: {
            type: "text",
            accept: ["tachistoscope", "t-scope"],
          },
          solution: [
            "A **tachistoscope** flashes visual stimuli at precisely timed brief durations (e.g. 30–90 ms) to test perceptual thresholds and set.",
          ],
          commonError: "Writing electroencephalograph or eye-tracker instead of tachistoscope (the millisecond flash-exposure viewer).",
          difficulty: "core",
          guideRef: "perceptual-set-culture",
          hints: [
            "Starts with 'tachisto-' (from Greek *tachistos* = fastest + *scope* = viewer).",
            "13 letters: t-a-c-h-i-s-t-o-s-c-o-p-e.",
          ],
        },
        {
          kind: "written",
          id: "visual-perception-p2-q13",
          question:
            "Explain **one strength** and **one limitation** of laboratory experiments on **perceptual set** (such as **Bruner & Minturn, 1955** or **McGinnies, 1949**). [4 marks]",
          marks: 4,
          modelAnswer:
            "A major strength is high internal validity and replicability: using a calibrated tachistoscope allowed Bruner & Minturn to standardise exposure duration to exact milliseconds and randomly allocate students to letter vs number primes, isolating expectation as the cause of seeing 'B' (83%) vs '13' (92%). Conversely, a major limitation is low ecological validity (mundane realism) and response bias: peering motionless at isolated 2D symbols flashed for 30 ms bears little resemblance to Gibson's continuous moving everyday vision, and in McGinnies (1949) verbal delays for taboo words may reflect social embarrassment rather than genuine perceptual defence.",
          markScheme: [
            {
              point: "Strength: high internal validity / standardised millisecond control via tachistoscope",
              keywords: ["internal validity", "standardis", "tachistoscope", "milliseconds", "replicab"],
            },
            {
              point: "Develops strength: random allocation / isolated IV establishes cause-and-effect (e.g. 83% B vs 92% 13)",
              keywords: ["random", "cause", "83%", "92%", "isolat"],
            },
            {
              point: "Limitation: low ecological validity / mundane realism (artificial brief static peephole flashes) OR social embarrassment",
              keywords: ["ecological validity", "mundane realism", "artificial", "embarrassment", "response bias"],
            },
            {
              point: "Develops limitation: contrasts impoverished static lab flashes with natural continuous movement or separates seeing from speaking",
              keywords: ["continuous", "moving", "everyday vision", "natural vision", "speaking", "hesitat"],
            },
          ],
          commonError: "Stating 'low ecological validity' as a two-word slogan without explaining *why* brief motionless tachistoscope flashes differ from natural vision.",
          difficulty: "core",
          guideRef: "perceptual-set-culture",
          hints: [
            "Strength: link **tachistoscope millisecond standardisation + random allocation** to internal validity.",
            "Limitation: link **artificial 30 ms flashes** to ecological validity (and/or **McGinnies embarrassment**).",
          ],
          strategy: "Method feature → validity impact (×2)",
        },
        {
          kind: "short",
          id: "visual-perception-p2-q14",
          question:
            "In **Haber & Levin (2001)**, **109** students participated in Experiment 1 and **9** students participated in Experiment 2. Assuming independent samples, how many participants took part across both experiments combined?",
          answer: { type: "number", value: 118 },
          solution: ["109 + 9 = **118 participants**."],
          commonError: "Giving 109 (Experiment 1 alone) instead of pooling Experiment 1 (109) + Experiment 2 (9) = 118 students.",
          difficulty: "warmup",
          guideRef: "gregory-constructivist",
          hints: ["Add 109 and 9."],
        },
        {
          kind: "written",
          id: "visual-perception-p2-q15",
          question:
            "An interior architect wants a narrow, windowless hotel corridor to feel **longer and grander** to guests walking out of the lift. Suggest **two design techniques** based on **monocular depth cues** or **visual illusions** and explain psychologically why each will work. [4 marks]",
          marks: 4,
          modelAnswer:
            "First, apply texture gradient and relative size to the carpet and wall lamps: lay patterned floor tiles that start large near the lift and become progressively smaller and finer toward the far end, tricking the cortex into perceiving a much deeper distance. Second, paint angled ceiling and skirting trim at the far doorway with outward-flaring V-lines (>—<, like an exaggerated Müller-Lyer inside corner) or slightly tapering dado rails (**linear perspective**), triggering Gregory's misplaced size-constancy scaling so the corridor's length is perceptually stretched.",
          markScheme: [
            {
              point: "Technique 1: Concrete architectural change using texture gradient, relative size, or linear perspective",
              keywords: ["tiles", "carpet", "smaller", "finer", "tapering", "converg"],
            },
            {
              point: "Psychological explanation 1: links named monocular depth cue to amplified perceived distance",
              keywords: ["texture gradient", "relative size", "linear perspective", "monocular"],
            },
            {
              point: "Technique 2: Second distinct architectural cue (e.g. Müller-Lyer outward corner trim / Ponzo framing / height in plane)",
              keywords: ["müller-lyer", "muller-lyer", "outward", "ponzo", "height in plane"],
            },
            {
              point: "Psychological explanation 2: explains via Gregory's misplaced size-constancy scaling or second distinct depth mechanism",
              keywords: ["size-constancy", "size constancy", "scaling", "stretched", "inside corner"],
            },
          ],
          commonError: "Saying 'put up mirrors' without naming and explaining CIE 0266 monocular depth cues or visual illusions.",
          difficulty: "core",
          guideRef: "sensation-depth-constancy",
          hints: [
            "Use **shrinking floor-tile texture gradient / tapering dado lines (linear perspective)** for Cue 1.",
            "Use **outward-flaring Müller-Lyer corner trim** + **size-constancy scaling** for Cue 2!",
          ],
          strategy: "Concrete design feature + named perceptual cue (×2)",
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "written",
      id: "visual-perception-ch-q01",
      question:
        "'**Bremner et al. (2016)** proves that **Gregory** is completely right and **Gibson** is completely wrong about human visual perception.' Critically evaluate this statement. [5 marks]",
      marks: 5,
      modelAnswer:
        "I only partially agree: Bremner et al. (2016) strongly supports Gregory's top-down nurture framework for contextual illusions, yet does not refute Gibson's bottom-up account of everyday ecological action. Supporting Gregory, Bremner et al. showed that British adults are strongly deceived by the Ebbinghaus illusion (global contextual schemas), rural Namibian Himba remain largely immune (local style), and urbanised Himba in Opuwo shift midway — proving learned cultural visual environments sculpt top-down perception. However, notice that 3–4-year-olds in BOTH London and rural Namibia initially perceived central circle sizes accurately with minimal illusion error, demonstrating an early veridical bottom-up baseline consistent with Gibson! Moreover, Bremner tested static 2D screen circles rather than moving 3D locomotion; when rural Himba or Londoners sprint across uneven ground, both rely identically on Gibson's optic flow and affordances (as shown in Gibson & Walk, 1960). Thus, Bremner refines *how culture tunes top-down context* atop a shared Gibsonian foundation.",
      markScheme: [
        {
          point: "Balanced thesis: supports Gregory on cultural context illusions without overturning Gibson on ecological movement",
          keywords: ["partially", "balanced", "both", "refines", "ecological"],
        },
        {
          point: "Uses Bremner et al. adult + urbanised Opuwo Himba data to support Gregory's learned top-down visual environment",
          keywords: ["opuwo", "urbanised", "urbanized", "global", "local", "top-down"],
        },
        {
          point: "Points out age 3–4 low-illusion baseline in BOTH cultures aligns with accurate early bottom-up perception",
          keywords: ["3–4", "3 to 4", "toddlers", "baseline", "accurate"],
        },
        {
          point: "Defends Gibson: static 2D screen circles lack moving optic flow / affordances where Gibson's theory applies",
          keywords: ["2d", "static", "optic flow", "affordances", "visual cliff"],
        },
        {
          point: "Synthesises into an interactionist conclusion (bottom-up foundation + cultural top-down tuning)",
          keywords: ["interactionist", "foundation", "tuning", "complement"],
        },
      ],
      difficulty: "challenge",
      guideRef: "perceptual-set-culture",
      hints: [
        "First show why Bremner's UK vs rural vs Opuwo Himba results are a triumph for **Gregory**.",
        "Then look closely at **3–4-year-olds** in Bremner (both accurate!) and the **static 2D screen** task.",
        "Conclude by uniting Gibson's moving ecological base with Gregory's cultural context tuning!",
      ],
      strategy: "Use internal study nuance (age 3–4 + 2D task) to build synthesis",
    },
    {
      kind: "short",
      id: "visual-perception-ch-q02",
      question:
        "An observer views a statue from **4 metres** away, producing a **9.0 mm** retinal image. She walks backwards until the retinal image shrinks by **75%** (i.e. to 25% of its original height), while **size constancy** keeps perceived statue height constant. How many **metres** did she walk **backwards** from her starting spot?",
      answer: { type: "number", value: 12 },
      solution: [
        "Shrinking by 75% leaves 25% ({{1/4}}) of original retinal height (2.25 mm).",
        "For retinal height to become {{1/4}}, viewing distance must become 4 × 4 m = 16 m.",
        "Distance walked backwards = new distance − starting distance = 16 m − 4 m = **12 m**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 16 },
          feedback: "16 m is her *final* distance from the statue — subtract her starting distance (4 m) to find how far she walked backwards!",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "Careful: shrinking *by* 75% means 25% (1/4) remains, so distance quadrupled to 16 m!",
        },
      ],
      difficulty: "challenge",
      guideRef: "sensation-depth-constancy",
      hints: [
        "If retinal height decreases *by* 75%, what fraction of original height remains? (`25% = 1/4`).",
        "If retinal size is `1/4`, total distance from the statue is `4 × 4 m = 16 m`.",
        "Re-read the final question carefully: 'How many metres did she walk *backwards* from her starting spot?'",
      ],
      strategy: "Watch 'shrinks by 75%' + 'distance walked' vs 'final distance'",
    },
    {
      kind: "written",
      id: "visual-perception-ch-q03",
      question:
        "Design a **laboratory experiment** (avoiding ethical distress!) to test whether **category expectation (perceptual set)** alters how Year 11 students perceive an **ambiguous musical/number symbol** (`§` / stylized `S` or `8`). State your **experimental design**, **operationalised IV & DV**, **two methodological controls**, and **how you prevent demand characteristics**. [4 marks]",
      marks: 4,
      modelAnswer:
        "Use an independent measures design with 40 Year 11 students randomly allocated into two groups of 20 (avoiding order effects, since once a student sees the ambiguous target they cannot unsee it). Operationalised IV: Prime sequence — Group 1 views five clear capital letters (K, P, R, T, M) for 100 ms each on a laptop screen; Group 2 views five single-digit numbers (2, 4, 6, 9, 3) for 100 ms each. Operationalised DV: Whether each participant types 'S' (letter) or '8' (digit) when the identical ambiguous stylised 'S/8' glyph flashes for 80 ms on Trial 6. Controls: Standardise screen brightness, viewing distance (60 cm chin-rest), and exact 80 ms exposure across both groups. Prevent demand characteristics via a single-blind cover story ('testing visual reaction speed to classroom fonts') followed by full debriefing and right to withdraw data.",
      markScheme: [
        {
          point: "Justifies independent measures design + random allocation (prevents order effects on ambiguous figure)",
          keywords: ["independent measures", "random", "order effects"],
        },
        {
          point: "Operationalised IV (letter sequence vs number sequence) AND operationalised DV (typing/reporting 'S' vs '8')",
          keywords: ["letters", "numbers", "digit", "types", "reports"],
        },
        {
          point: "Two concrete controls: identical exposure duration (ms), screen brightness, font contrast, or viewing distance",
          keywords: ["exposure", "ms", "brightness", "distance", "standardis"],
        },
        {
          point: "Controls demand characteristics via single-blind neutral cover story + ethical debrief",
          keywords: ["cover story", "single-blind", "demand characteristics", "debrief"],
        },
      ],
      difficulty: "challenge",
      guideRef: "perceptual-set-culture",
      hints: [
        "Why would **repeated measures** fail terribly with an ambiguous figure? Use **independent measures**!",
        "Operationalise both primes (IV) and exact typed classification (DV) with millisecond controls.",
        "Add a neutral cover story to block **demand characteristics**, plus ethical debriefing.",
      ],
      strategy: "Justify design + IV/DV + ms controls + single-blind cover",
    },
    {
      kind: "written",
      id: "visual-perception-ch-q04",
      question:
        "Compare the **research methods and validity trade-offs** of **Gibson & Walk (1960)**, **Haber & Levin (2001)**, and **Bremner et al. (2016)** as Paper 2 perception studies. [4 marks]",
      marks: 4,
      modelAnswer:
        "Gibson & Walk (1960) used a controlled laboratory apparatus (solid safety glass isolating visual cliff cues from touch), achieving high internal validity over extraneous tactile cues, though testing inside an artificial checkerboard lab lowered mundane realism. Haber & Levin (2001) moved perception testing into a real 100-metre outdoor grassy field, achieving superior ecological validity for everyday spatial distance estimation, but suffered from low population generalisability (an all-male US college sample, with n = 9 in Exp. 2). Finally, Bremner et al. (2016) used a cross-cultural developmental quasi-experiment across London, rural Namibia, and urban Opuwo, achieving outstanding population and cultural insight, though inability to randomly assign participants to cultures means schooling and lifestyle variables could partially confound internal validity.",
      markScheme: [
        {
          point: "Gibson & Walk (1960): high lab internal control (solid glass isolated vision from touch) vs artificial checkerboard setting",
          keywords: ["glass", "touch", "tactile", "checkerboard", "internal"],
        },
        {
          point: "Haber & Levin (2001): high ecological validity (100 m outdoor grassy field) vs male US college population bias / small n = 9",
          keywords: ["outdoor", "100", "male", "androcentric", "population"],
        },
        {
          point: "Bremner et al. (2016): strong cross-cultural developmental breadth (UK vs rural/urban Himba)",
          keywords: ["cross-cultural", "himba", "developmental", "opuwo"],
        },
        {
          point: "Bremner limitation: quasi-experimental (non-random cultural groups risk schooling/lifestyle confounds)",
          keywords: ["quasi", "random", "schooling", "confound"],
        },
      ],
      difficulty: "challenge",
      guideRef: "gregory-constructivist",
      hints: [
        "Evaluate **Gibson & Walk** on lab tactile control vs artificial checkerboard.",
        "Evaluate **Haber & Levin** on 100 m outdoor ecological validity vs all-male US sample (`n = 9`).",
        "Evaluate **Bremner et al.** on cross-cultural insight vs **quasi-experimental** non-random groups.",
      ],
      strategy: "Strength + trade-off per named core study",
    },
    {
      kind: "short",
      id: "visual-perception-ch-q05",
      question:
        "In **Gibson & Walk (1960)**, **9** of the **36** human infants never moved off the centre board, while **3** of the **27** mobile infants crossed onto the deep side. By how many **percentage points** would a student **understate** the deep-side crossing rate if they mistakenly divided 3 by **36** instead of dividing 3 by **27**? Give your answer rounded to **1 decimal place**.",
      answer: { type: "number", value: 2.8, tolerance: 0.1 },
      solution: [
        "True deep-side rate among mobile crawlers = (3 ÷ 27) × 100 = 11.111...%.",
        "Mistaken rate using all 36 infants = (3 ÷ 36) × 100 = 8.333...%.",
        "Difference = 11.111...% − 8.333...% = 2.777...% ≈ **2.8 percentage points**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 8.3, tolerance: 0.1 },
          feedback: "8.3% is the mistaken percentage itself — subtract 8.33% from 11.11% to find how many percentage points lower it is!",
        },
      ],
      difficulty: "challenge",
      guideRef: "gibson-direct-theory",
      hints: [
        "Calculate `(3 ÷ 27) × 100 = 11.11%` (keep full precision before rounding!).",
        "Calculate `(3 ÷ 36) × 100 = 8.33%`.",
        "Subtract `11.111 − 8.333` and round to 1 d.p.!",
      ],
      strategy: "Keep unrounded intermediates then subtract",
    },
    {
      kind: "written",
      id: "visual-perception-ch-q06",
      question:
        "Explain why **Adelbert Ames's Trapezoidal Room (Ames Room)** fools adults when viewed through a **single-eye peephole**, yet loses its illusion as soon as the viewer **walks inside with both eyes open** — integrating **depth cues**, **Gregory**, and **Gibson**. [4 marks]",
      marks: 4,
      modelAnswer:
        "Viewing through a stationary one-eye peephole eliminates both binocular depth cues (retinal disparity and convergence) and Gibson's dynamic motion parallax / optic flow. Meanwhile, the skewed trapezoidal walls and floor tiles are engineered to project the exact same monocular retinal image as a normal rectangular room. Driven by Gregory's top-down 'carpentered-world' schema that rooms have parallel walls and equal-distance back corners, the brain refuses to see a lopsided room and instead misapplies size constancy — shrinking the distant twin and enlarging the near twin! Once the viewer walks inside with both eyes open, bottom-up binocular disparity, convergence, and dynamic optic flow instantly reveal the true slanted depth, shattering the wrong hypothesis.",
      markScheme: [
        {
          point: "One-eye stationary peephole strips away binocular cues (disparity & convergence) and motion parallax / optic flow",
          keywords: ["binocular", "disparity", "convergence", "motion parallax", "optic flow"],
        },
        {
          point: "Trapezoidal room mimics monocular retinal projection of a normal rectangular room",
          keywords: ["trapezoid", "rectangular", "monocular", "projection"],
        },
        {
          point: "Gregory's top-down carpentered-world schema assumes equal-depth corners, distorting perceived twin sizes",
          keywords: ["gregory", "carpentered", "schema", "hypothesis", "size constancy"],
        },
        {
          point: "Walking inside with two eyes restores Gibsonian bottom-up optic flow + binocular depth cues to override the illusion",
          keywords: ["gibson", "both eyes", "two eyes", "override", "true"],
        },
      ],
      difficulty: "challenge",
      guideRef: "gregory-constructivist",
      hints: [
        "Ask first: *why* must the viewer peek motionless with **one eye**? Which cues get stripped?",
        "Next, apply **Gregory's carpentered-world room schema** to explain why one twin looks giant.",
        "Finally, explain how walking in with **two eyes** restores **binocular cues + Gibson's optic flow**!",
      ],
      strategy: "Peephole cue removal → Gregory's wrong hypothesis → Gibsonian restoration",
    },
    {
      kind: "written",
      id: "visual-perception-ch-q07",
      question:
        "In **McGinnies (1949)**, researchers claimed delayed recognition of taboo words proved unconscious **psychodynamic perceptual defence**, whereas cognitive/social critics blamed **conscious response suppression (embarrassment)**. Propose a **methodological modification** to McGinnies's experiment that would decisively separate perceptual threshold from verbal embarrassment. [3 marks]",
      marks: 3,
      modelAnswer:
        "First, replace speaking taboo words aloud to an experimenter with a private, non-verbal forced-choice button press (e.g. anonymously pressing Key 1 or Key 2 on a computer screen with no researcher in the room) so social embarrassment about saying swear words aloud is eliminated. Second, include matched neutral words with identical word frequency/familiarity in print (since taboo words appear less often in textbooks, which could otherwise slow bottom-up reading). If recognition thresholds for taboo words drop back to match frequency-matched neutral words when responses are private and anonymous, embarrassment — not perceptual defence — caused McGinnies's delay.",
      markScheme: [
        {
          point: "Replaces aloud verbal report with private/anonymous non-verbal button press or forced-choice selection",
          keywords: ["button", "anonymous", "private", "non-verbal", "key", "forced-choice"],
        },
        {
          point: "Matches word familiarity / print frequency between taboo and neutral words as a control",
          keywords: ["frequency", "familiarity", "matched", "common"],
        },
        {
          point: "Explains diagnostic logic: if delay disappears privately, embarrassment caused it; if delay persists, perceptual defence is supported",
          keywords: ["disappears", "persists", "embarrassment", "perceptual defence"],
        },
      ],
      difficulty: "challenge",
      guideRef: "perceptual-set-culture",
      hints: [
        "Why were 1949 students embarrassed? Because they had to *say rude words aloud* to a researcher!",
        "How can you measure recognition privately without speaking?",
        "Also control how often neutral vs taboo words appear in everyday print (**word frequency**).",
      ],
      strategy: "Isolate confounding response stage via non-verbal task",
    },
    {
      kind: "short",
      id: "visual-perception-ch-q08",
      question:
        "In **Haber & Levin (2001)**, participants judged **45** objects divided equally into 3 categories (15 familiar invariant, 15 familiar variant, 15 unfamiliar shapes). If a researcher randomly selects **one** object from the invariant category and **one** from the unfamiliar category to form a paired comparison trial, how many **distinct (invariant, unfamiliar) object pairs** can be formed?",
      answer: { type: "number", value: 225 },
      solution: [
        "There are 15 familiar invariant objects and 15 unfamiliar shapes.",
        "Number of ordered/distinct category pairs = 15 × 15 = **225 pairs**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "30 is 15 + 15 — multiply 15 choices of invariant object by 15 choices of unfamiliar shape!",
        },
      ],
      difficulty: "challenge",
      guideRef: "gregory-constructivist",
      hints: [
        "Each category contains 45 ÷ 3 = 15 objects.",
        "Any of the 15 invariant objects can be paired with any of the 15 unfamiliar objects.",
        "Multiply 15 × 15!",
      ],
      strategy: "Product rule across experimental stimulus sets",
    },
  ],
};
