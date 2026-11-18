import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "motivation-and-needs-quiz-q01",
      question:
        "What psychological term describes motivation that comes from inherent enjoyment, curiosity or personal mastery inside an activity itself?",
      answer: {
        type: "text",
        accept: ["intrinsic", "intrinsic motivation"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["extrinsic", "extrinsic motivation"] },
          feedback: "Extrinsic motivation relies on external rewards or penalties — inherent joy inside the task is **intrinsic**.",
        },
      ],
      solution: [
        "When an activity is performed for its own inherent satisfaction rather than a separable external prize, it is **intrinsic motivation**.",
      ],
      difficulty: "warmup",
      guideRef: "intrinsic-extrinsic-reinforcement",
      hints: [
        "Contrast 'inside the task' with 'external reward'.",
        "Starts with 'in-'.",
      ],
    },
    {
      kind: "short",
      id: "motivation-and-needs-quiz-q02",
      question:
        "How many undergraduate psychology students participated in **Boniecki & Moore's (2003)** classroom token-economy reversal study?",
      answer: { type: "number", value: 63 },
      traps: [
        {
          spec: { type: "number", value: 492 },
          feedback: "492 is the teenage footballer sample in Calvo et al. (2010) — Boniecki & Moore studied **63** undergraduates.",
        },
      ],
      solution: [
        "Boniecki & Moore (2003) observed **63** introductory psychology undergraduates across 24 class sessions in an A-B-A design.",
      ],
      difficulty: "warmup",
      guideRef: "intrinsic-extrinsic-reinforcement",
      hints: [
        "It was a medium-sized university lecture class between 60 and 70 students.",
        "Recall the exact two-digit number ending in 3.",
      ],
    },
    {
      kind: "mcq",
      id: "motivation-and-needs-quiz-q03",
      question:
        "Which tier sits immediately **above** Safety needs and immediately **below** Esteem needs in Maslow's five-tier pyramid?",
      options: [
        "Physiological needs",
        "Love and belonging needs",
        "Self-actualisation",
        "Homeostatic secondary drives",
      ],
      answerIndex: 1,
      explanation:
        "Tier 3 is **Love and belonging needs** (friendship, family, affection), sitting directly between Tier 2 Safety and Tier 4 Esteem.",
      difficulty: "warmup",
      guideRef: "maslow-hierarchy",
      hints: [
        "Recite Please Stop Leaving Every Saturday.",
        "What does the 'L' stand for?",
      ],
    },
    {
      kind: "short",
      id: "motivation-and-needs-quiz-q04",
      question:
        "Name the **only** tier in Maslow's five-level pyramid classified as a **growth (being / B) need** rather than a deficiency need.",
      answer: {
        type: "text",
        accept: ["self-actualisation", "self actualisation", "self-actualization", "self actualization"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["esteem", "esteem needs"] },
          feedback: "Esteem (Tier 4) is still a deficiency need — Tier 5 at the very apex is the growth need.",
        },
      ],
      solution: [
        "Tiers 1–4 are deficiency (D) needs; Tier 5 — **self-actualisation** — is Maslow's growth (being) need.",
      ],
      difficulty: "warmup",
      guideRef: "maslow-hierarchy",
      hints: [
        "Look at Tier 5 at the apex of Maslow's pyramid.",
        "It means fulfilling your unique personal potential.",
      ],
    },
    {
      kind: "short",
      id: "motivation-and-needs-quiz-q05",
      question:
        "In **Deci & Ryan's Self-Determination Theory**, autonomy and relatedness are two of the three basic psychological needs. What is the **third** need?",
      answer: {
        type: "text",
        accept: ["competence", "perceived competence"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["competition", "competitive"] },
          feedback: "Careful with spelling and meaning: SDT requires feeling effective and skilled (**competence**), not beating rivals (**competition**).",
        },
      ],
      solution: [
        "Remember **ARC**: **A**utonomy, **R**elatedness and **C**ompetence (feeling capable and effective at optimal challenges).",
      ],
      difficulty: "warmup",
      guideRef: "self-determination-theory",
      hints: [
        "Use the ARC acronym: Autonomy, Relatedness, C___.",
        "It means feeling capable of mastering optimal challenges (not competition!).",
      ],
    },
    {
      kind: "mcq",
      id: "motivation-and-needs-quiz-q06",
      question:
        "In **Calvo et al. (2010)**, how long were the 492 adolescent football players tracked before persistent vs dropout status was recorded?",
      options: [
        "4.4 seconds",
        "8 weeks across an A-B-A lecture reversal",
        "One year (one full competitive season)",
        "Twenty-five years from infancy to adulthood",
      ],
      answerIndex: 2,
      explanation:
        "Calvo et al. (2010) used a **one-year prospective longitudinal design**, assessing teenage footballers' psychological needs and motivation and checking who persisted versus dropped out at the start of the following season.",
      difficulty: "core",
      guideRef: "self-determination-theory",
      hints: [
        "Eliminate 4.4 s and 8 weeks — those belong to Boniecki & Moore (2003).",
        "How long is one youth football season cycle?",
      ],
    },
    {
      kind: "short",
      id: "motivation-and-needs-quiz-q07",
      question:
        "What name is given to the phenomenon where an expected tangible reward crowds out a person's pre-existing intrinsic enjoyment once the reward is removed?",
      answer: {
        type: "text",
        accept: [
          "overjustification effect",
          "overjustification",
          "over-justification effect",
          "over-justification",
        ],
      },
      solution: [
        "The **overjustification effect** occurs when an expected external prize shifts attribution from internal enjoyment to external reward, lowering intrinsic interest post-withdrawal.",
      ],
      commonError: "Writing operant extinction instead of the overjustification effect (tangible rewards crowding out intrinsic interest).",
      difficulty: "core",
      guideRef: "intrinsic-extrinsic-reinforcement",
      hints: [
        "Having *too many* (external + internal) justifications makes the brain discount its internal joy.",
        "Two words: the ______ effect.",
      ],
    },
    {
      kind: "short",
      id: "motivation-and-needs-quiz-q08",
      question:
        "In **Merchant et al. (2013, Study 3)**, what emotional longing for an idealised personal past was evoked in charity print adverts to boost donation intentions?",
      answer: {
        type: "text",
        accept: ["nostalgia", "personal nostalgia", "nostalgic emotion", "nostalgic motivation"],
      },
      solution: [
        "Merchant et al. (2013) manipulated **personal nostalgia** in charity print adverts, triggering warm memories, empathy and higher donation intentions.",
      ],
      commonError: "Writing sadness or guilt instead of personal nostalgia (warm longing for one's cherished past in Merchant et al., 2013).",
      difficulty: "core",
      guideRef: "drive-incentive-psychodynamic",
      hints: [
        "Think of bittersweet, warm memories of childhood or 'the good old days'.",
        "Starts with 'nost-'.",
      ],
    },
    {
      kind: "short",
      id: "motivation-and-needs-quiz-q09",
      question:
        "In **Locke & Latham's SMART** goal framework, what does the letter **M** stand for?",
      answer: {
        type: "text",
        accept: ["measurable", "measureable"],
      },
      solution: [
        "**M** stands for **Measurable** — quantifying the target with an objective number, percentage or score so progress can be tracked.",
      ],
      commonError: "Writing Meaningful or Motivational instead of Measurable in Locke & Latham's SMART acronym.",
      difficulty: "warmup",
      guideRef: "goal-setting-applications",
      hints: [
        "How do you check objectively with numbers whether a target was hit?",
        "Specific, M______, Achievable, Realistic, Time-bound.",
      ],
    },
    {
      kind: "written",
      id: "motivation-and-needs-quiz-q10",
      question:
        "State **two** differences between a **primary drive** and a **secondary drive** in Hull's Drive-Reduction Theory, giving one example of each. [4 marks]",
      marks: 4,
      modelAnswer:
        "First, a primary drive is innate and biologically unlearned for physical survival, whereas a secondary drive is acquired through learning and association with primary needs. Second, satisfying a primary drive directly restores bodily homeostasis, whereas a secondary drive has no direct biological tissue value on its own. For example, thirst or hunger is a primary drive, while striving to earn money or high exam grades is a secondary drive.",
      markScheme: [
        {
          point: "Primary drive is innate / unlearned biological survival need",
          keywords: ["innate", "unlearned", "born with", "biological survival", "inborn"],
        },
        {
          point: "Secondary drive is learned / acquired via association with primary drives",
          keywords: ["learned", "learnt", "acquired", "association", "conditioned"],
        },
        {
          point: "Valid example of a primary drive (e.g. hunger, thirst, sleep, warmth)",
          keywords: ["hunger", "thirst", "sleep", "water", "food", "warmth"],
        },
        {
          point: "Valid example of a secondary drive (e.g. money, cash, grades, praise, status)",
          keywords: ["money", "cash", "grades", "praise", "tokens", "approval", "salary"],
        },
      ],
      difficulty: "core",
      guideRef: "drive-incentive-psychodynamic",
      hints: [
        "Contrast innate/unlearned survival needs with learned/conditioned motives.",
        "Include one concrete biological example (like thirst) and one learned example (like money).",
      ],
      strategy: "Contrast + concrete examples",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (2 papers × 15 questions)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1
    // -----------------------------------------------------------------------
    {
      id: "motivation-and-needs-p1",
      title: "Motivation & Needs — Practice Paper 1 (Structured & Scenario)",
      questions: [
        {
          kind: "short",
          id: "motivation-and-needs-p1-q01",
          question:
            "In **Boniecki & Moore (2003)**, mean response latency fell from **4.4 seconds** in Baseline A1 to **1.5 seconds** in Token Phase B. Calculate the **decrease** in response latency, in seconds.",
          answer: { type: "number", value: 2.9, tolerance: 0.01 },
          traps: [
            {
              spec: { type: "number", value: 5.9, tolerance: 0.01 },
              feedback: "You added 4.4 and 1.5 — subtract 1.5 from 4.4 to find the decrease.",
            },
          ],
          solution: [
            "Latency decrease = Baseline latency − Token latency.",
            "4.4 − 1.5 = **2.9 seconds** faster.",
          ],
          difficulty: "warmup",
          guideRef: "intrinsic-extrinsic-reinforcement",
          hints: [
            "Subtract the Phase B latency from the Phase A1 latency.",
          ],
        },
        {
          kind: "short",
          id: "motivation-and-needs-p1-q02",
          question:
            "In a school seminar replication, students answered **12 out of 25** teacher questions during Baseline Week 1, and **23 out of 25** questions during Token Week 2. Calculate the **percentage point** increase in questions answered between Week 1 and Week 2.",
          answer: { type: "number", value: 44 },
          traps: [
            {
              spec: { type: "number", value: 11 },
              feedback: "11 is the raw number of extra questions out of 25 — convert out of 25 into out of 100 (× 4) to get percentage points.",
            },
            {
              spec: { type: "number", value: 92 },
              feedback: "92% is the Week 2 percentage alone — subtract Week 1's 48% from 92%.",
            },
          ],
          solution: [
            "Week 1 percentage = (12 ÷ 25) × 100 = 48%.",
            "Week 2 percentage = (23 ÷ 25) × 100 = 92%.",
            "Percentage point increase = 92 − 48 = **44** percentage points.",
          ],
          difficulty: "core",
          guideRef: "intrinsic-extrinsic-reinforcement",
          hints: [
            "Convert 12/25 and 23/25 into percentages first.",
            "Subtract the Week 1 percentage from the Week 2 percentage.",
          ],
        },
        {
          kind: "short",
          id: "motivation-and-needs-p1-q03",
          question:
            "In a token economy, tokens are secondary reinforcers. What is the technical term for the valued prizes, privileges or extra-credit points that tokens are later exchanged for?",
          answer: {
            type: "text",
            accept: [
              "backup reinforcers",
              "backup reinforcer",
              "back-up reinforcers",
              "back-up reinforcer",
              "primary reinforcers",
            ],
          },
          solution: [
            "Tokens gain their reinforcing value because they can be cashed in for **backup reinforcers** (such as extra credit, treats or privileges).",
          ],
          commonError: "Calling the prizes tokens (secondary reinforcers) rather than backup reinforcers.",
          difficulty: "core",
          guideRef: "intrinsic-extrinsic-reinforcement",
          hints: [
            "What stands 'behind' or 'backs up' the plastic token to give it value?",
            "Two words: ______ reinforcers.",
          ],
        },
        {
          kind: "written",
          id: "motivation-and-needs-p1-q04",
          question:
            "Zara already spends every Sunday afternoon painting watercolours for pure enjoyment. Her father promises to pay her $10 for every painting she completes during May, then stops paying in June. Explain why Zara paints **less** in June than she did before May. [3 marks]",
          marks: 3,
          modelAnswer:
            "Zara experiences the overjustification effect. Initially she painted out of intrinsic motivation for pure personal enjoyment, but the expected $10 cash reward acted as a controlling extrinsic incentive. This shifted her perceived reason for painting from internal passion to external payment, crowding out her intrinsic interest once the cash stopped.",
          markScheme: [
            {
              point: "Identifies the overjustification effect",
              keywords: ["overjustification", "over-justification"],
            },
            {
              point: "Contrasts initial intrinsic motivation with the expected tangible/extrinsic reward",
              keywords: ["intrinsic", "extrinsic", "tangible", "external payment", "external reward"],
            },
            {
              point: "Explains shift in attribution / crowding out of internal interest once reward stops",
              keywords: ["attribution", "shifted", "crowding out", "crowded out", "locus", "undermined", "replaced"],
            },
          ],
          commonError: "Describing Zara as 'getting bored of watercolour' without naming intrinsic/extrinsic attribution or the overjustification effect.",
          difficulty: "core",
          guideRef: "intrinsic-extrinsic-reinforcement",
          hints: [
            "Name the cognitive-behavioural effect when expected rewards backfire.",
            "Explain how Zara's perceived reason (attribution) shifted from internal to external.",
          ],
          strategy: "Name effect → Contrast motives → Explain attribution shift",
        },
        {
          kind: "short",
          id: "motivation-and-needs-p1-q05",
          question:
            "How many tiers in Maslow's classic 5-tier Hierarchy of Needs are classified as **deficiency (D) needs**?",
          answer: { type: "number", value: 4 },
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "There are 5 tiers in total, but Tier 5 (self-actualisation) is a growth need — only Tiers 1 to 4 are deficiency needs.",
            },
          ],
          solution: [
            "Tiers 1 (Physiological), 2 (Safety), 3 (Love & Belonging) and 4 (Esteem) are **4** deficiency needs; Tier 5 is a growth need.",
          ],
          difficulty: "warmup",
          guideRef: "maslow-hierarchy",
          hints: [
            "Count all tiers below Self-Actualisation.",
          ],
        },
        {
          kind: "short",
          id: "motivation-and-needs-p1-q06",
          question:
            "Which specific tier of Maslow's hierarchy covers friendship, family affection, romantic intimacy and feeling accepted by peers?",
          answer: {
            type: "text",
            accept: [
              "love and belonging",
              "love & belonging",
              "belongingness and love",
              "love and belongingness",
              "belonging",
              "social needs",
            ],
          },
          traps: [
            {
              spec: { type: "text", accept: ["esteem", "esteem needs"] },
              feedback: "Esteem (Tier 4) is about status, mastery and respect — warm friendship and acceptance sit in Tier 3 (**love and belonging**).",
            },
          ],
          solution: [
            "Tier 3 of Maslow's pyramid is **love and belonging needs**.",
          ],
          difficulty: "warmup",
          guideRef: "maslow-hierarchy",
          hints: [
            "It is Tier 3 of Please Stop Leaving Every Saturday.",
          ],
        },
        {
          kind: "written",
          id: "motivation-and-needs-p1-q07",
          question:
            "A factory provides free hot canteen lunches and strict safety helmets, yet workers feel lonely on isolated booths and receive zero recognition for high-quality craftsmanship, so nobody volunteers for creative innovation teams. Explain this workplace problem using **Maslow's Hierarchy of Needs**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Hot meals satisfy Tier 1 physiological needs and helmets satisfy Tier 2 safety needs at the base of the pyramid. However, working on isolated booths leaves Tier 3 love and belonging unmet, while zero praise for skill leaves Tier 4 esteem unfulfilled. Because these lower deficiency needs remain deprived, employees are not motivated to pursue Tier 5 self-actualisation through creative innovation.",
          markScheme: [
            {
              point: "Links lunches/helmets to satisfied Tier 1 physiological and Tier 2 safety needs",
              keywords: ["physiological", "safety"],
            },
            {
              point: "Links isolated booths to unmet Tier 3 love and belonging",
              keywords: ["belonging", "love", "social"],
            },
            {
              point: "Links lack of recognition/praise to unmet Tier 4 esteem",
              keywords: ["esteem", "respect", "mastery"],
            },
            {
              point: "Explains that unmet deficiency needs block upward progression to Tier 5 self-actualisation",
              keywords: ["self-actualisation", "self actualisation", "self-actualization", "deficiency", "priority", "higher tier"],
            },
          ],
          difficulty: "core",
          guideRef: "maslow-hierarchy",
          hints: [
            "Map all four workplace clues onto Tiers 1, 2, 3 and 4.",
            "Explain why creative innovation (Tier 5 self-actualisation) stays blocked.",
          ],
          strategy: "Map every stem clue to its exact tier",
        },
        {
          kind: "short",
          id: "motivation-and-needs-p1-q08",
          question:
            "In **Deci & Ryan's Self-Determination Theory**, which specific basic psychological need is satisfied when a teacher gives students meaningful choice over *how* they investigate a topic?",
          answer: {
            type: "text",
            accept: ["autonomy", "need for autonomy", "perceived autonomy"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["competence"] },
              feedback: "Competence is feeling effective/skilled — having volitional choice and self-direction is **autonomy**.",
            },
            {
              spec: { type: "text", accept: ["relatedness"] },
              feedback: "Relatedness is social warmth and belonging — volitional choice is **autonomy**.",
            },
          ],
          solution: [
            "Experiencing volition, personal endorsement and choice satisfies **autonomy**.",
          ],
          difficulty: "warmup",
          guideRef: "self-determination-theory",
          hints: [
            "Which of Autonomy, Competence or Relatedness means self-directed choice?",
          ],
        },
        {
          kind: "short",
          id: "motivation-and-needs-p1-q09",
          question:
            "In **Calvo et al. (2010)**, out of **492** adolescent footballers, suppose **369** persisted into the next season and **123** dropped out. Calculate the **dropout rate** as a percentage.",
          answer: { type: "number", value: 25 },
          traps: [
            {
              spec: { type: "number", value: 75 },
              feedback: "75% is the persistence rate (369 ÷ 492) — calculate 123 ÷ 492 × 100 for the dropout rate.",
            },
          ],
          solution: [
            "Dropout percentage = (123 ÷ 492) × 100.",
            "123 ÷ 492 = 0.25 → **25%**.",
          ],
          difficulty: "core",
          guideRef: "self-determination-theory",
          hints: [
            "Divide the dropout count (123) by the total squad sample (492).",
            "Multiply the decimal by 100.",
          ],
        },
        {
          kind: "written",
          id: "motivation-and-needs-p1-q10",
          question:
            "Outline the procedure and **two** key findings of **Calvo et al.'s (2010)** study of adolescent athletes. [4 marks]",
          marks: 4,
          modelAnswer:
            "Researchers administered self-report questionnaires to 492 male Spanish football players aged 13 to 17 measuring satisfaction of autonomy, competence and relatedness alongside motivational regulation, then tracked one year later who stayed in the sport versus quit. First, players who quit had significantly lower perceived autonomy and relatedness satisfaction than persistent players. Second, dropouts reported higher amotivation and external regulation alongside lower intrinsic self-determined motivation.",
          markScheme: [
            {
              point: "Sample & longitudinal method: 492 teenage/Spanish male footballers tracked over 1 year",
              keywords: ["492", "spanish", "longitudinal", "one year", "1 year", "next season", "13"],
            },
            {
              point: "Measured SDT needs (autonomy, competence, relatedness) & motivation via questionnaires",
              keywords: ["questionnaire", "self-report", "autonomy", "relatedness", "competence"],
            },
            {
              point: "Finding 1: Dropouts had significantly lower perceived autonomy and/or relatedness",
              keywords: ["lower autonomy", "lower perceived autonomy", "autonomy and relatedness", "unsatisfied"],
            },
            {
              point: "Finding 2: Dropouts scored higher on amotivation / external regulation (or lower on intrinsic motivation)",
              keywords: ["amotivation", "external regulation", "lower intrinsic", "self-determined"],
            },
          ],
          difficulty: "core",
          guideRef: "self-determination-theory",
          hints: [
            "State who the 492 participants were, what questionnaires measured, and the 1-year follow-up.",
            "Give one finding about psychological needs (autonomy/relatedness) and one about motivation type (amotivation/intrinsic).",
          ],
          strategy: "Sample + Longitudinal Method + 2 Specific Findings",
        },
        {
          kind: "short",
          id: "motivation-and-needs-p1-q11",
          question:
            "Which psychologist proposed the biological **Drive-Reduction Theory** (1943) based on homeostatic need and tension reduction?",
          answer: {
            type: "text",
            accept: ["hull", "clark hull", "c. hull", "clark l. hull"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["maslow", "abraham maslow"] },
              feedback: "Maslow proposed the humanistic Hierarchy of Needs — biological Drive-Reduction Theory was proposed by **Clark Hull**.",
            },
          ],
          solution: [
            "**Clark Hull (1943)** formulated biological Drive-Reduction Theory.",
          ],
          difficulty: "warmup",
          guideRef: "drive-incentive-psychodynamic",
          hints: [
            "His surname is four letters starting with H.",
          ],
        },
        {
          kind: "short",
          id: "motivation-and-needs-p1-q12",
          question:
            "What graphical shape describes the relationship between physiological arousal (x-axis) and task performance (y-axis) in the **Yerkes-Dodson Law**?",
          answer: {
            type: "text",
            accept: [
              "inverted-u",
              "inverted u",
              "inverted-u curve",
              "inverted u curve",
              "upside-down u",
              "upside down u",
              "bell-shaped curve",
            ],
          },
          solution: [
            "The Yerkes-Dodson Law plots as an **inverted-U** curve peaking at moderate optimal arousal.",
          ],
          commonError: "Assuming a straight positive line (more arousal always helps) rather than the Yerkes-Dodson inverted-U curve.",
          difficulty: "warmup",
          guideRef: "drive-incentive-psychodynamic",
          hints: [
            "Low on the left, peaking in the middle, dropping again on the right — shaped like an upside-down letter.",
            "Called an ______-U curve.",
          ],
        },
        {
          kind: "written",
          id: "motivation-and-needs-p1-q13",
          question:
            "Explain how **Merchant et al. (2013, Study 3)** investigated nostalgic motivation in advertising and state what they concluded about charitable giving. [3 marks]",
          marks: 3,
          modelAnswer:
            "Adult consumers were randomly allocated in an independent-measures experiment to view either a charity print advert evoking personal childhood nostalgia or a non-nostalgic control advert, then rated their emotions and willingness to give. Viewing the nostalgic advert elicited warm emotional memories and stronger empathy or engagement with the cause. Consequently, nostalgic appeals significantly boosted charitable donation intentions compared with standard non-nostalgic adverts.",
          markScheme: [
            {
              point: "Procedure: Independent-measures experiment comparing nostalgic vs non-nostalgic charity print adverts on adult consumers",
              keywords: ["experiment", "independent", "control advert", "non-nostalgic", "adult consumers"],
            },
            {
              point: "Mechanism: Evoked warm past memories / reduced negative thoughts / increased empathy & emotional engagement",
              keywords: ["warm", "memories", "empathy", "emotional engagement", "negative thoughts"],
            },
            {
              point: "Conclusion: Nostalgic adverts significantly increased donation intentions / willingness to give",
              keywords: ["donation", "donate", "willingness to give", "boosted", "increased"],
            },
          ],
          difficulty: "core",
          guideRef: "drive-incentive-psychodynamic",
          hints: [
            "Contrast the two print-advert conditions shown to adult consumers.",
            "Link warm memories/empathy to the DV (donation intentions).",
          ],
          strategy: "IV manipulation → Emotional mediator → DV outcome",
        },
        {
          kind: "short",
          id: "motivation-and-needs-p1-q14",
          question:
            "A cyclist writes: *'Improve my 10 km time-trial personal best from 18 min 00 s to 17 min 15 s by 30 June.'* By how many **seconds** is she aiming to cut her 10 km time?",
          answer: { type: "number", value: 45 },
          traps: [
            {
              spec: { type: "number", value: 85 },
              feedback: "Remember there are 60 seconds in 1 minute, not 100! 18:00 minus 17:15 is 45 seconds.",
            },
          ],
          solution: [
            "18 min 00 s = 17 min 60 s.",
            "17 min 60 s − 17 min 15 s = **45 seconds**.",
          ],
          difficulty: "warmup",
          guideRef: "goal-setting-applications",
          hints: [
            "There are 60 seconds in a minute — count up from 17:15 to 18:00.",
          ],
        },
        {
          kind: "written",
          id: "motivation-and-needs-p1-q15",
          question:
            "Ben tells his tutor: *'I want to get much better at IGCSE Psychology sometime before exams.'* Rewrite Ben's wish as a complete **SMART** goal and briefly justify how your version meets **three** different SMART criteria. [4 marks]",
          marks: 4,
          modelAnswer:
            "SMART rewrite: 'Score at least 80% on two timed Topic 5 practice papers per fortnight over the next 6 weeks to prepare for my May mocks.' First, naming Topic 5 practice papers makes it Specific rather than vague. Second, setting an 80% score threshold on two papers makes progress Measurable. Third, anchoring completion to a 6-week schedule before May mocks makes it Time-bound (and moving steadily to 80% is Achievable and Relevant).",
          markScheme: [
            {
              point: "Provides a concrete rewritten goal containing exact task, metric and deadline",
              keywords: ["rewrite", "80%", "papers", "weeks", "per week", "fortnight", "by friday", "by may", "by june", "deadline", "minutes", "questions"],
            },
            {
              point: "Correctly justifies Specific (exact topic/task)",
              keywords: ["specific"],
            },
            {
              point: "Correctly justifies Measurable (quantified score/count)",
              keywords: ["measurable"],
            },
            {
              point: "Correctly justifies Time-bound, Achievable or Realistic/Relevant",
              keywords: ["time-bound", "time bound", "achievable", "realistic", "relevant"],
            },
          ],
          difficulty: "core",
          guideRef: "goal-setting-applications",
          hints: [
            "Write a clean 1-sentence goal first containing an exact Psychology task, a number/% and a deadline.",
            "Explicitly label three SMART words (e.g. Specific, Measurable, Time-bound) and match each to part of your sentence.",
          ],
          strategy: "Write concrete goal → Label 3 SMART criteria",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2
    // -----------------------------------------------------------------------
    {
      id: "motivation-and-needs-p2",
      title: "Motivation & Needs — Practice Paper 2 (Data, Methods & Evaluation)",
      questions: [
        {
          kind: "short",
          id: "motivation-and-needs-p2-q01",
          question:
            "What three-letter notation (with hyphens) names the single-group experimental reversal design used by **Boniecki & Moore (2003)**?",
          answer: {
            type: "text",
            accept: ["a-b-a", "aba", "a-b-a design", "aba design", "a-b-a reversal"],
          },
          solution: [
            "Boniecki & Moore used an **A-B-A** reversal design: Baseline (A) → Token intervention (B) → Baseline return (A).",
          ],
          commonError: "Writing ABBA (counterbalancing order) instead of A-B-A (Baseline → Token intervention → Return to baseline in Boniecki & Moore, 2003).",
          difficulty: "warmup",
          guideRef: "intrinsic-extrinsic-reinforcement",
          hints: [
            "Baseline = A, Intervention = B, Return to baseline = A.",
            "Write the three letters separated by hyphens.",
          ],
        },
        {
          kind: "short",
          id: "motivation-and-needs-p2-q02",
          question:
            "In a nursery study of the overjustification effect, children given an expected certificate spent **8.2 minutes** drawing during free play afterwards, whereas unrewarded children spent **16.4 minutes** drawing. Express the rewarded group's drawing time as a **percentage** of the unrewarded group's time.",
          answer: { type: "number", value: 50 },
          traps: [
            {
              spec: { type: "number", value: 200 },
              feedback: "200% compares unrewarded to rewarded (16.4 ÷ 8.2) — divide 8.2 by 16.4 and multiply by 100.",
            },
          ],
          solution: [
            "Percentage = (8.2 ÷ 16.4) × 100 = 0.5 × 100 = **50%**.",
          ],
          difficulty: "core",
          guideRef: "intrinsic-extrinsic-reinforcement",
          hints: [
            "Write 8.2 as a fraction of 16.4 first.",
            "Divide 8.2 by 16.4, then multiply by 100.",
          ],
        },
        {
          kind: "written",
          id: "motivation-and-needs-p2-q03",
          question:
            "Evaluate **Boniecki & Moore's (2003)** classroom token economy study by giving **one methodological strength** and **one limitation**. [4 marks]",
          marks: 4,
          modelAnswer:
            "One major strength is high ecological validity because data were collected inside a genuine university lecture hall during normal teaching rather than an artificial laboratory, and two independent observers timed latency objectively. However, one limitation is that participation dropped straight back to baseline during the final withdrawal phase, showing external tokens create temporary reward dependency rather than lasting intrinsic engagement (and a single-group reversal lacks a simultaneous control class).",
          markScheme: [
            {
              point: "Names a valid strength (e.g. high ecological validity / objective quantitative DVs / inter-observer reliability)",
              keywords: ["ecological validity", "real", "lecture", "natural", "inter-observer", "objective"],
            },
            {
              point: "Justifies the strength using study details (genuine university course / timed latency)",
              keywords: ["university", "classroom", "teaching", "latency", "observers"],
            },
            {
              point: "Names a valid limitation (short-lived effect on withdrawal / no parallel control group / single US university sample)",
              keywords: ["dropped", "reverted", "baseline", "temporary", "withdrawal", "control group", "sample"],
            },
            {
              point: "Explains the implication (reward dependency / lack of lasting intrinsic change / time confounds)",
              keywords: ["dependency", "intrinsic", "short-term", "confound", "generalise", "generalize"],
            },
          ],
          difficulty: "core",
          guideRef: "intrinsic-extrinsic-reinforcement",
          hints: [
            "Strength: think about where the study happened (real lecture hall) and how DVs were recorded.",
            "Limitation: what happened in Phase A2 when tokens stopped, or what is missing without a parallel control class?",
          ],
          strategy: "1 developed Strength (Point + Evidence) + 1 developed Limitation",
        },
        {
          kind: "short",
          id: "motivation-and-needs-p2-q04",
          question:
            "What evaluative term describes the cultural bias of assuming Western **individualist** priorities (such as solo self-actualisation at the top of Maslow's pyramid) apply identically to **collectivist** cultures?",
          answer: {
            type: "text",
            accept: [
              "ethnocentrism",
              "ethnocentric",
              "ethnocentric bias",
              "alpha bias",
              "beta bias",
              "cultural bias",
              "individualism bias",
            ],
          },
          solution: [
            "Judging all cultures through a single Western individualist lens is called **ethnocentrism** (or **cultural bias**).",
          ],
          commonError: "Writing androcentrism (gender bias) instead of ethnocentrism (judging collectivist cultures by Western individualist norms).",
          difficulty: "core",
          guideRef: "maslow-hierarchy",
          hints: [
            "Starts with 'ethno-' (or two words: 'cultural ____').",
            "Occurs when one culture's values are treated as the universal human norm.",
          ],
        },
        {
          kind: "short",
          id: "motivation-and-needs-p2-q05",
          question:
            "In **Tay & Diener's (2011)** global test of Maslow's needs across **123 countries**, roughly **60,865** people were surveyed. Round **60,865** to **2 significant figures**.",
          answer: { type: "number", value: 61000 },
          traps: [
            {
              spec: { type: "number", value: 60000 },
              feedback: "Look at the third digit (8 in 60,865): because 8 ≥ 5, round the second digit up from 0 to 1 → 61,000.",
            },
          ],
          solution: [
            "First two significant digits are 6 and 0; the next digit is 8 (≥ 5), so round up to **61,000**.",
          ],
          difficulty: "warmup",
          guideRef: "maslow-hierarchy",
          hints: [
            "Check the hundreds digit (8) to decide whether 60 thousand rounds up to 61 thousand.",
          ],
        },
        {
          kind: "written",
          id: "motivation-and-needs-p2-q06",
          question:
            "Give **two** evaluation points that challenge **Maslow's Hierarchy of Needs** as a universal scientific theory of motivation. [4 marks]",
          marks: 4,
          modelAnswer:
            "First, Maslow's hierarchy suffers from Western cultural ethnocentrism because placing solo self-actualisation at the summit reflects individualist values, whereas collectivist societies often prioritise group belonging and duty over individual fulfilment. Second, the strict bottom-up sequence is contradicted by real-world exceptions such as starving artists or hunger strikers, and cross-national research like Tay and Diener (2011) shows needs operate in parallel rather than rigid stages.",
          markScheme: [
            {
              point: "Identifies cultural bias / ethnocentrism (Western individualism)",
              keywords: ["ethnocentrism", "ethnocentric", "cultural bias", "individualist", "individualism", "western"],
            },
            {
              point: "Contrasts with collectivist cultures prioritising belonging / group harmony",
              keywords: ["collectivist", "collectivism", "group", "belonging", "nevis"],
            },
            {
              point: "Identifies non-sequential exceptions or subjective/unfalsifiable operationalisation",
              keywords: ["exceptions", "parallel", "starving", "hunger", "tay", "subjective", "falsifiable"],
            },
            {
              point: "Supports second critique with concrete example or evidence (e.g. artists, Gandhi, Tay & Diener 2011)",
              keywords: ["artist", "gandhi", "diener", "123", "wellbeing", "biographical"],
            },
          ],
          difficulty: "core",
          guideRef: "maslow-hierarchy",
          hints: [
            "Critique 1: Compare Western individualist self-actualisation with collectivist values.",
            "Critique 2: Do people *always* wait for Tiers 1–2 before creating art or protesting (or cite Tay & Diener 2011)?",
          ],
          strategy: "2 distinct critiques × (Claim + Evidence)",
        },
        {
          kind: "short",
          id: "motivation-and-needs-p2-q07",
          question:
            "In a 5-point Likert rating of **perceived autonomy** across 6 athletes, the scores are: **2, 5, 3, 2, 4, 2**. Calculate the **mean** autonomy score.",
          answer: { type: "number", value: 3 },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "2 is the mode (most frequent score), and 2.5 is the median — add all six scores (18) and divide by 6 for the mean.",
            },
            {
              spec: { type: "number", value: 2.5 },
              feedback: "2.5 is the median — for the **mean**, sum all 6 values (18) and divide by 6.",
            },
          ],
          solution: [
            "Sum of scores = 2 + 5 + 3 + 2 + 4 + 2 = 18.",
            "Mean = 18 ÷ 6 = **3**.",
          ],
          difficulty: "warmup",
          guideRef: "self-determination-theory",
          hints: [
            "Add all six ratings together, then divide by 6.",
          ],
        },
        {
          kind: "short",
          id: "motivation-and-needs-p2-q08",
          question:
            "Using the same 6 athlete autonomy scores (**2, 5, 3, 2, 4, 2**), state the **median** score.",
          answer: { type: "number", value: 2.5 },
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback: "3 is the mean — order the six numbers (2, 2, 2, 3, 4, 5) and average the 3rd and 4th values (2 and 3).",
            },
          ],
          solution: [
            "Order from lowest to highest: 2, 2, **2, 3**, 4, 5.",
            "Halfway between the two middle values (2 and 3) = (2 + 3) ÷ 2 = **2.5**.",
          ],
          difficulty: "core",
          guideRef: "self-determination-theory",
          hints: [
            "Sort the six numbers in ascending order first!",
            "With an even number of scores (6), average the 3rd and 4th ordered numbers.",
          ],
        },
        {
          kind: "written",
          id: "motivation-and-needs-p2-q09",
          question:
            "Explain **one strength** and **one limitation** of using **self-report questionnaires** in **Calvo et al.'s (2010)** longitudinal study of teenage footballers. [4 marks]",
          marks: 4,
          modelAnswer:
            "One strength is that standardised Likert questionnaires capture internal subjective feelings like perceived autonomy, relatedness and amotivation across a large sample of 492 athletes quickly and quantitatively for statistical comparison. However, a key limitation is social desirability bias: teenage players may exaggerate their commitment or downplay thoughts of quitting to appear dedicated, lowering internal validity.",
          markScheme: [
            {
              point: "Strength: Accesses internal subjective perceptions (autonomy/amotivation) OR large-scale quantitative comparability across 492 players",
              keywords: ["subjective", "internal", "492", "large sample", "quantitative", "standardised", "standardized"],
            },
            {
              point: "Explains why that helps (cannot directly observe felt autonomy; easy statistical comparison of persisters vs dropouts)",
              keywords: ["compare", "statistical", "directly observe", "feelings", "perceptions"],
            },
            {
              point: "Limitation: Social desirability bias / response set / fixed closed choices",
              keywords: ["social desirability", "response bias", "exaggerate", "lie", "closed questions"],
            },
            {
              point: "Explains impact on validity in youth sport context (players wanting to look loyal/dedicated)",
              keywords: ["validity", "loyal", "dedicated", "coach", "inaccurate", "distort"],
            },
          ],
          difficulty: "core",
          guideRef: "self-determination-theory",
          hints: [
            "Strength: Can you see 'amotivation' with a stopwatch, or do you need self-report across 492 teenagers?",
            "Limitation: Why might a teenage squad player give socially desirable answers on a motivation form?",
          ],
          strategy: "Method strength + Method limitation anchored to teenage footballers",
        },
        {
          kind: "short",
          id: "motivation-and-needs-p2-q10",
          question:
            "In **Merchant et al. (2013, Study 3)**, each participant viewed **either** the nostalgic charity advert **or** the non-nostalgic control advert (never both). Name this **experimental design**.",
          answer: {
            type: "text",
            accept: [
              "independent measures",
              "independent measures design",
              "independent groups",
              "independent groups design",
              "between-subjects",
              "between subjects",
            ],
          },
          traps: [
            {
              spec: { type: "text", accept: ["repeated measures", "repeated measures design"] },
              feedback: "In repeated measures, every participant sees *both* adverts — seeing only *one* condition is **independent measures**.",
            },
          ],
          solution: [
            "Allocating separate groups of participants to each condition of the IV is an **independent measures design** (avoiding order/demand effects from comparing two versions of the same charity's ad).",
          ],
          difficulty: "warmup",
          guideRef: "drive-incentive-psychodynamic",
          hints: [
            "Separate groups of people did Condition 1 vs Condition 2.",
            "Choose between independent measures, repeated measures and matched pairs.",
          ],
        },
        {
          kind: "short",
          id: "motivation-and-needs-p2-q11",
          question:
            "Suppose viewers of a non-nostalgic charity advert pledge a mean donation of **$12.50**, while viewers of a nostalgic advert (**Merchant et al. 2013**) pledge **$18.00**. Calculate the **percentage increase** in mean pledged donation.",
          answer: { type: "number", value: 44 },
          traps: [
            {
              spec: { type: "number", value: 5.5 },
              feedback: "$5.50 is the dollar increase — divide 5.50 by the control baseline (12.50) and multiply by 100.",
            },
          ],
          solution: [
            "Increase = 18.00 − 12.50 = $5.50.",
            "Percentage increase = (5.50 ÷ 12.50) × 100 = 0.44 × 100 = **44%**.",
          ],
          difficulty: "core",
          guideRef: "drive-incentive-psychodynamic",
          hints: [
            "Subtract 12.50 from 18.00 first.",
            "Divide 5.50 by 12.50, then multiply by 100.",
          ],
        },
        {
          kind: "written",
          id: "motivation-and-needs-p2-q12",
          question:
            "Contrast **Hull's Biological Drive-Reduction Theory** with **Cognitive Incentive Theory** in explaining why someone eats a slice of birthday cake right after finishing a large meal. [3 marks]",
          marks: 3,
          modelAnswer:
            "Hull's biological theory relies on internal homeostatic 'push': cellular nutrient deficits create hunger tension that eating reduces, so it struggles to explain eating cake when blood glucose is already full and balanced. By contrast, Cognitive Incentive Theory emphasises external 'pull': the appealing look, sweet smell and celebratory reward value of the frosting attract eating behaviour even with zero physiological need.",
          markScheme: [
            {
              point: "Explains Hull's internal 'push' / homeostasis and notes zero biological deficit after a large meal",
              keywords: ["homeostasis", "homeostatic", "push", "deficit", "full", "sated", "struggles", "cannot explain"],
            },
            {
              point: "Explains Incentive Theory's external 'pull' of valued environmental stimuli",
              keywords: ["pull", "external", "stimulus", "stimuli", "reward value", "appealing"],
            },
            {
              point: "Applies directly to the cake scenario (appearance/smell/taste pulls eating without hunger)",
              keywords: ["smell", "sight", "frosting", "sweet", "taste", "without hunger"],
            },
          ],
          difficulty: "core",
          guideRef: "drive-incentive-psychodynamic",
          hints: [
            "Why does internal 'push' fail when the stomach is already full?",
            "How does the external 'pull' of the cake's sight/taste explain eating anyway?",
          ],
          strategy: "Contrast internal push vs external pull on the stem",
        },
        {
          kind: "short",
          id: "motivation-and-needs-p2-q13",
          question:
            "In a study of **Locke & Latham's Goal-Setting Theory**, typists given a SMART goal averaged **68 words per minute**, whereas the *'do your best'* group averaged **50 words per minute**. Write the ratio of **SMART : 'do your best'** speed in its **simplest whole-number form**.",
          answer: { type: "ratio", parts: [34, 25], simplest: true },
          traps: [
            {
              spec: { type: "ratio", parts: [25, 34] },
              feedback: "Keep the order asked for in the question: SMART (68) first, then 'do your best' (50) → 34 : 25.",
            },
          ],
          solution: [
            "Start with 68 : 50.",
            "Divide both parts by their highest common factor (2): **34 : 25**.",
          ],
          difficulty: "core",
          guideRef: "goal-setting-applications",
          hints: [
            "Keep the order SMART first (68) and 'do your best' second (50).",
            "Write 68 : 50, then divide both parts by their highest common factor (2).",
          ],
        },
        {
          kind: "short",
          id: "motivation-and-needs-p2-q14",
          question:
            "In **Locke & Latham's (1990)** Goal-Setting Theory, alongside goal commitment and task ability, what single moderating factor provides ongoing information about progress so a learner knows whether to adjust their effort or strategy?",
          answer: {
            type: "text",
            accept: ["feedback", "timely feedback", "progress feedback", "knowledge of results"],
          },
          commonError: "Naming a SMART letter (like 'measurable' or 'time-bound') instead of ongoing progress feedback.",
          solution: [
            "Locke & Latham stressed **timely feedback** (knowledge of results) so learners can track progress against their specific goal and adjust effort.",
          ],
          difficulty: "warmup",
          guideRef: "goal-setting-applications",
          hints: [
            "How do you know how close you are to your target number?",
          ],
        },
        {
          kind: "written",
          id: "motivation-and-needs-p2-q15",
          question:
            "A hospital ward wants junior nurses to complete daily hand-hygiene audits enthusiastically over the whole year without feeling micromanaged. Design a **two-part psychological intervention** combining **Self-Determination Theory** and **SMART Goal-Setting**. [4 marks]",
          marks: 4,
          modelAnswer:
            "First, applying Self-Determination Theory, ward leaders should support autonomy by letting nurses co-design the audit checklist schedule, build competence with constructive mastery praise, and foster relatedness through supportive peer-buddy teams rather than punitive surveillance. Second, teams should co-set a SMART target: achieving at least 95% hand-hygiene compliance across 20 weekly spot-checks by the end of each monthly cycle, reviewed with positive weekly chart feedback.",
          markScheme: [
            {
              point: "Applies SDT autonomy (involving nurses in co-designing / choosing audit timing rather than micromanaging)",
              keywords: ["autonomy", "choice", "co-design", "voice", "volitional"],
            },
            {
              point: "Applies SDT competence and/or relatedness (constructive mastery praise / supportive peer teams)",
              keywords: ["competence", "relatedness", "peer", "supportive", "mastery", "praise"],
            },
            {
              point: "Includes a concrete Specific & Measurable hygiene target (e.g. 95% compliance across 20 checks)",
              keywords: ["95%", "90%", "100%", "checks", "measurable", "specific", "compliance"],
            },
            {
              point: "Includes Achievable/Time-bound schedule + regular feedback loop",
              keywords: ["weekly", "monthly", "deadline", "time-bound", "feedback"],
            },
          ],
          difficulty: "core",
          guideRef: "goal-setting-applications",
          hints: [
            "Part 1 (SDT): How do you give nurses autonomy, competence and relatedness instead of micromanagement?",
            "Part 2 (SMART): Write an exact % compliance target, number of checks, timeframe and feedback routine.",
          ],
          strategy: "Combine SDT climate + Concrete SMART target",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE PROBLEMS (8 CIE 0266 Extended & Synthesis Questions, 3-step hints)
  // =========================================================================
  challenge: [
    {
      kind: "written",
      id: "motivation-and-needs-ch-q01",
      question:
        "Principal Ong plans to pay every Year 11 student $5 cash for each past paper they submit across *all* subjects — both dull admin checklists and creative art portfolios they already adore. Using **Boniecki & Moore (2003)** and the **overjustification effect**, evaluate Principal Ong's plan. [4 marks]",
      marks: 4,
      modelAnswer:
        "For unappealing routine checklists with low baseline engagement, immediate cash or token contingencies act as positive reinforcement that will rapidly boost submission rates, mirroring Phase B of Boniecki and Moore (2003). However, once budget funding ends, submissions will likely revert to baseline just as in Phase A2. Worse, paying expected cash for beloved art portfolios triggers the overjustification effect, shifting students' attribution from internal creative passion to external money and permanently damaging intrinsic interest. Replacing cash bribes on enjoyed subjects with sincere competence-focused verbal praise would protect intrinsic drive.",
      markScheme: [
        {
          point: "Supports short-term efficacy on dull tasks using Boniecki & Moore (2003) positive reinforcement",
          keywords: ["boniecki", "positive reinforcement", "double", "rapidly", "routine", "phase b"],
        },
        {
          point: "Notes extinction / return to baseline once payments stop (Phase A2 reversal)",
          keywords: ["baseline", "revert", "withdrawn", "temporary", "phase a2", "stops"],
        },
        {
          point: "Applies overjustification effect to already-enjoyed subjects (external attribution crowds out intrinsic joy)",
          keywords: ["overjustification", "over-justification", "attribution", "intrinsic", "crowds out", "crowding"],
        },
        {
          point: "Recommends a psychologically sound alternative (e.g. informational verbal praise or reserving tokens for dull tasks)",
          keywords: ["praise", "informational", "competence", "alternative"],
        },
      ],
      difficulty: "challenge",
      guideRef: "intrinsic-extrinsic-reinforcement",
      hints: [
        "Split your evaluation by baseline interest: what works on dull admin tasks vs loved creative tasks?",
        "Cite both Phase B and Phase A2 of Boniecki & Moore (2003) for the short-term surge and post-withdrawal drop.",
        "Explain how the overjustification effect harms the art students and suggest competence-focused verbal praise instead.",
      ],
      strategy: "Differentiate by baseline task interest",
    },
    {
      kind: "written",
      id: "motivation-and-needs-ch-q02",
      question:
        "Compare **Maslow's Hierarchy of Needs** and **Deci & Ryan's Self-Determination Theory** as explanations of student motivation in school, identifying **two similarities** and **two differences**. [4 marks]",
      marks: 4,
      modelAnswer:
        "Similarity 1: Both theories reject purely mechanistic behaviourist bribery and emphasise innate psychological human needs essential for thriving and personal growth. Similarity 2: Both include social connection and mastery — Maslow's love/belonging and internal esteem map closely onto SDT's relatedness and competence. Difference 1: Maslow arranges needs in a sequential five-tier pyramid starting with biological survival (food/safety), whereas SDT focuses on three psychological needs (autonomy, competence, relatedness) operating simultaneously in parallel. Difference 2: SDT is backed by rigorous quantitative longitudinal studies like Calvo et al. (2010), whereas Maslow's self-actualisation apex relies heavily on subjective biographical examples.",
      markScheme: [
        {
          point: "Similarity 1: Both highlight innate internal human needs / growth beyond external behaviourist rewards",
          keywords: ["innate", "internal", "growth", "beyond", "humanistic", "wellbeing"],
        },
        {
          point: "Similarity 2: Shared conceptual overlap (Love/Belonging ≈ Relatedness; Esteem mastery ≈ Competence)",
          keywords: ["relatedness", "belonging", "competence", "esteem", "overlap"],
        },
        {
          point: "Difference 1: Sequential 5-tier hierarchy including physiological/safety vs 3 simultaneous psychological needs including autonomy",
          keywords: ["sequential", "pyramid", "physiological", "simultaneously", "parallel", "autonomy"],
        },
        {
          point: "Difference 2: Empirical testability / methodology (Calvo quantitative longitudinal vs Maslow subjective biographical)",
          keywords: ["calvo", "empirical", "quantitative", "biographical", "subjective", "longitudinal"],
        },
      ],
      difficulty: "challenge",
      guideRef: "self-determination-theory",
      hints: [
        "Map the overlapping needs first: Belonging ↔ Relatedness, Esteem ↔ Competence.",
        "Contrast structure: 5-step sequential ladder (including food/shelter) vs 3 simultaneous psychological nutrients (featuring Autonomy).",
        "Contrast scientific evidence: Maslow's biographical interviews vs SDT's quantitative longitudinal studies (Calvo et al. 2010).",
      ],
      strategy: "2 explicit Similarities + 2 explicit Differences",
    },
    {
      kind: "written",
      id: "motivation-and-needs-ch-q03",
      question:
        "An elite gymnastics academy recruits talented 13-year-old girls, enforces total coach control over routines, bans friendships between rivals, and suffers a 40% dropout rate within a year. Apply **Calvo et al. (2010)** to explain why they quit, AND evaluate **one** limit of generalising Calvo et al.'s original sample to these gymnasts. [4 marks]",
      marks: 4,
      modelAnswer:
        "According to Calvo et al. (2010), dictatorial routine control thwarts perceived autonomy, while banning friendships between squadmates crushes relatedness. Starving these basic psychological needs erodes intrinsic motivation and breeds amotivation and controlled regulation, directly predicting quitting over the season. However, generalising Calvo et al. requires caution because their original sample comprised 492 Spanish male footballers in a team sport, whereas these athletes are female gymnasts in an individual aesthetic sport where gender socialisation and individual-performance pressures may operate differently.",
      markScheme: [
        {
          point: "Links total coach control over routines to thwarted autonomy",
          keywords: ["autonomy", "choice", "volition"],
        },
        {
          point: "Links banning friendships to thwarted relatedness",
          keywords: ["relatedness", "belonging", "isolation", "connected"],
        },
        {
          point: "Explains mediation via increased amotivation / reduced intrinsic motivation predicting dropout",
          keywords: ["amotivation", "intrinsic", "external regulation", "self-determined"],
        },
        {
          point: "Evaluates generalisability limit: Calvo studied 492 Spanish male team footballers vs female individual gymnasts",
          keywords: ["male", "boys", "spanish", "football", "team sport", "female", "individual", "generalis"],
        },
      ],
      difficulty: "challenge",
      guideRef: "self-determination-theory",
      hints: [
        "Match the two academy rules directly to thwarted autonomy and thwarted relatedness.",
        "State how low need satisfaction raises amotivation to cause quitting in Calvo et al. (2010).",
        "Compare the demographics and sport type: Spanish boys in team football vs 13-year-old girls in individual gymnastics.",
      ],
      strategy: "Apply study mechanism → Critique sample generalisability",
    },
    {
      kind: "short",
      id: "motivation-and-needs-ch-q04",
      question:
        "In a 3-phase classroom A-B-A study across 24 lessons, mean directed questions answered per lesson were **2.5** in Phase A1 (8 lessons), **5.5** in Phase B (8 lessons), and **2.8** in Phase A2 (8 lessons). Calculate the **overall mean** number of directed questions answered per lesson across all 24 lessons.",
      answer: { type: "number", value: 3.6, tolerance: 0.01 },
      traps: [
        {
          spec: { type: "number", value: 10.8, tolerance: 0.05 },
          feedback: "10.8 is the sum of the three phase means — divide by 3 (since all three phases had an equal 8 lessons) to get 3.6.",
        },
      ],
      solution: [
        "Because all three phases contain exactly 8 lessons, the overall mean equals the mean of the three phase means (or total questions ÷ 24).",
        "Total questions = (8 × 2.5) + (8 × 5.5) + (8 × 2.8) = 20 + 44 + 22.4 = 86.4.",
        "Overall mean = 86.4 ÷ 24 = **3.6** questions per lesson.",
      ],
      difficulty: "challenge",
      guideRef: "intrinsic-extrinsic-reinforcement",
      hints: [
        "Notice each phase lasted the exact same number of lessons (8 lessons each).",
        "Calculate total questions across all 24 lessons: 8×2.5 + 8×5.5 + 8×2.8.",
        "Divide 86.4 by 24.",
      ],
      strategy: "Weighted mean across equal phases",
    },
    {
      kind: "written",
      id: "motivation-and-needs-ch-q05",
      question:
        "A fast-food chain airs an advert showing grandparents sharing milkshakes in the 1980s alongside warm childhood music to sell high-sugar milkshakes to stressed adults at midnight. Analyse how **both** **Merchant et al. (2013)** and **Incentive vs Drive-Reduction** theories explain why viewers buy the milkshake despite not being hungry, and raise **one ethical concern**. [4 marks]",
      marks: 4,
      modelAnswer:
        "First, because viewers at midnight are not physiologically nutrient-depleted, Hull's homeostatic drive-reduction cannot account for the purchase; instead, glossy milkshake visuals provide external incentive 'pull'. Second, mirroring Merchant et al. (2013), the 1980s family scene triggers personal nostalgia and unconscious warmth that buffers stress and lowers rational counter-arguing, driving impulsive spending. Ethically, exploiting unconscious nostalgic vulnerability to promote unhealthy high-sugar consumption at night raises serious concerns regarding consumer manipulation and physical health harm.",
      markScheme: [
        {
          point: "Contrasts lack of biological hunger (Hull fails) with external incentive 'pull' of the sweet milkshake",
          keywords: ["hull", "homeostasis", "incentive", "pull", "biological deficit"],
        },
        {
          point: "Applies Merchant et al. (2013): nostalgic childhood/family cues evoke warm emotion & reduce critical resistance",
          keywords: ["merchant", "nostalgia", "nostalgic", "warm", "stress", "counter-arguing", "unconscious"],
        },
        {
          point: "Explains resulting consumer purchase motivation despite fullness",
          keywords: ["impulsive", "purchase", "buying", "engagement", "desire"],
        },
        {
          point: "Raises a valid ethical concern (unconscious manipulation / exploiting stress to sell unhealthy sugar)",
          keywords: ["ethical", "manipulation", "manipulative", "harm", "unhealthy", "exploit", "consent"],
        },
      ],
      difficulty: "challenge",
      guideRef: "drive-incentive-psychodynamic",
      hints: [
        "Explain why Hull's biological push fails at midnight when full, whereas external incentive pull applies.",
        "Apply Merchant et al. (2013): how do nostalgic 1980s family cues soften scepticism and soothe stress?",
        "Evaluate the ethics of hijacking warm childhood nostalgia to sell high-sugar junk food.",
      ],
      strategy: "Multi-theory synthesis + Ethical critique",
    },
    {
      kind: "written",
      id: "motivation-and-needs-ch-q06",
      question:
        "During an Olympic penalty shootout, an experienced striker blasts the ball cleanly into the corner under roaring crowd noise, whereas a teenage debutant taking her very first international penalty skies the ball high over the crossbar. Explain this contrast using the **Yerkes-Dodson Law** and **task mastery/complexity**. [3 marks]",
      marks: 3,
      modelAnswer:
        "According to the Yerkes-Dodson Law, performance follows an inverted-U curve across physiological arousal, but the optimal peak shifts with skill automation and task complexity. For the seasoned veteran, striking a penalty is a highly overlearned automatic skill whose optimal arousal peak sits relatively high, so crowd roar energises sharp execution. For the inexperienced debutant, the unfamiliar high-stakes routine functions as a complex cognitive-motor demand with a much lower optimal arousal threshold, pushing her into over-aroused anxiety and somatic choking.",
      markScheme: [
        {
          point: "States Yerkes-Dodson inverted-U relationship between physiological arousal and performance",
          keywords: ["inverted-u", "inverted u", "optimal arousal"],
        },
        {
          point: "Explains veteran: well-practised/automatic skill has a higher optimal arousal peak so crowd roar helps",
          keywords: ["automatic", "overlearned", "well-learned", "higher", "energises", "veteran"],
        },
        {
          point: "Explains debutant: novel/unfamiliar demand has a lower peak so high crowd arousal causes panic/choking",
          keywords: ["lower", "choking", "anxiety", "panic", "over-aroused", "unfamiliar"],
        },
      ],
      difficulty: "challenge",
      guideRef: "drive-incentive-psychodynamic",
      hints: [
        "Start by naming the Yerkes-Dodson inverted-U curve.",
        "Compare where the optimal arousal peak sits for an automatic expert skill versus an unfamiliar high-pressure task.",
        "Explain why identical stadium noise lands the veteran near peak focus but pushes the debutant into choking.",
      ],
      strategy: "Compare shifted inverted-U peaks",
    },
    {
      kind: "written",
      id: "motivation-and-needs-ch-q07",
      question:
        "Design a **controlled field experiment** in a secondary school to test whether **self-chosen SMART revision goals** produce higher mock test scores than **teacher-imposed SMART revision goals**. Operationalise your **IV** and **DV**, name your **experimental design**, and state **one** control for extraneous variables. [4 marks]",
      marks: 4,
      modelAnswer:
        "Use an independent-measures field experiment across two parallel Year 10 Psychology classes. The operationalised IV is whether students co-author their own weekly SMART flashcard-and-paper target from a structured menu (autonomous condition) versus being assigned the exact same numerical SMART target by the teacher with zero choice (imposed condition). The operationalised DV is each student's percentage score on a standardised 40-mark end-of-unit test after four weeks. To control extraneous variables, both classes study identical syllabus booklets taught by the same teacher and sit the exact same blind-marked test at 9 am.",
      markScheme: [
        {
          point: "Names valid experimental design (e.g. independent measures / matched pairs)",
          keywords: ["independent-measures", "independent measures", "matched pairs"],
        },
        {
          point: "Operationalises IV clearly: self-chosen/autonomous SMART goal vs teacher-imposed SMART goal",
          keywords: ["iv", "independent variable", "co-author", "choose", "assigned", "imposed"],
        },
        {
          point: "Operationalises DV quantitatively: exact score or percentage on a standardised unit test after set weeks",
          keywords: ["dv", "dependent variable", "percentage", "40-mark", "score", "standardised", "standardized"],
        },
        {
          point: "Specifies a concrete control (identical teaching materials, same numerical difficulty, blind marking, same time of day)",
          keywords: ["identical", "same teacher", "blind", "control", "9 am", "same time"],
        },
      ],
      difficulty: "challenge",
      guideRef: "goal-setting-applications",
      hints: [
        "Make sure BOTH groups use SMART goals so the *only* difference (the IV) is student choice vs teacher imposition!",
        "Operationalise the DV with a concrete numerical test score after a fixed timeframe.",
        "Standardise teacher, syllabus materials, target difficulty and test time so nothing confounds the result.",
      ],
      strategy: "Isolate 1 clean IV + Operationalise DV + Standardise controls",
    },
    {
      kind: "written",
      id: "motivation-and-needs-ch-q08",
      question:
        "'Human behaviour is driven entirely by conscious rational planning rather than unconscious or biological forces.' Discuss this claim with reference to **at least two** theories/studies from CIE 0266 Motivation & Needs. [4 marks]",
      marks: 4,
      modelAnswer:
        "Conscious planning clearly plays a major role: Locke and Latham's Goal-Setting Theory shows explicit SMART targets, rational self-monitoring and feedback strongly elevate academic and workplace performance. However, claiming motivation is *entirely* conscious and rational is untenable. Biologically, Hull's homeostatic primary drives (such as cellular dehydration triggering intense thirst) override conscious study plans whenever survival needs are deprived, as Maslow's Tier 1 also recognises. Furthermore, Merchant et al. (2013, Study 3) proved that nostalgic charity adverts awaken partly unconscious warm memories of the past that boost donation intentions via emotion rather than cold calculation — showing human motivation integrates biological push, unconscious affect and conscious goals.",
      markScheme: [
        {
          point: "Supports conscious planning side using Locke & Latham SMART Goal-Setting (or SDT conscious endorsement)",
          keywords: ["locke", "latham", "smart", "self-monitoring", "explicit"],
        },
        {
          point: "Refutes 'entirely' using biological forces: Hull's homeostatic primary drives or Maslow's Tier 1 survival",
          keywords: ["hull", "homeostasis", "homeostatic", "dehydration", "thirst", "physiological", "survival"],
        },
        {
          point: "Refutes 'entirely' using psychodynamic/emotional evidence: Merchant et al. (2013) nostalgic charity adverts",
          keywords: ["merchant", "nostalgia", "nostalgic", "charity", "memories", "donation"],
        },
        {
          point: "Reaches an integrated evaluative judgement combining conscious, biological and emotional systems",
          keywords: ["integrates", "untenable", "combination", "interaction", "both", "overall"],
        },
      ],
      difficulty: "challenge",
      guideRef: "drive-incentive-psychodynamic",
      hints: [
        "Agree partially first: cite Locke & Latham's conscious SMART goals.",
        "Challenge with Biology (Hull's homeostatic thirst/hunger) AND Unconscious/Emotional Marketing (Merchant et al. 2013 nostalgia).",
        "Conclude that human motivation is multi-layered rather than purely rational.",
      ],
      strategy: "Thesis (Locke & Latham) → Antithesis (Hull + Merchant) → Synthesis",
    },
  ],
};
