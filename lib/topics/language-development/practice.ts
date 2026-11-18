import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ (10 mixed questions)
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "language-development-quiz-q01",
      question:
        "Which stage of early language acquisition (around **12–18 months**) involves single words functioning as whole communicative sentences?",
      answer: {
        type: "text",
        accept: [
          "holophrastic",
          "holophrastic stage",
          "one-word",
          "one-word stage",
          "one word stage",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["telegraphic", "telegraphic stage"] },
          feedback: "Telegraphic speech (24–30 months) combines 3–4+ content words — the 12–18 month single-word stage is **holophrastic**.",
        },
      ],
      solution: [
        "Between **12 and 18 months**, toddlers enter the **holophrastic (one-word) stage**, where one word like *'Juice!'* conveys an entire request.",
      ],
      difficulty: "warmup",
      guideRef: "stages-language-acquisition",
      hints: [
        "Recall Pretty Happy Toddlers Multiply: what does 'H' stand for?",
        "Starts with 'holo-' (meaning 'whole' phrase).",
      ],
    },
    {
      kind: "short",
      id: "language-development-quiz-q02",
      question:
        "What is the exact grammatical term when a 3-year-old says ***'goed'*** or ***'mouses'*** by applying regular suffixes to irregular words?",
      answer: {
        type: "text",
        accept: [
          "overregularisation",
          "overregularization",
          "grammatical overregularisation",
          "grammatical overregularization",
          "over-regularisation",
        ],
      },
      traps: [
        {
          spec: { type: "text", accept: ["overextension", "over-extension"] },
          feedback: "Classic CIE exam trap! Overextension stretches *word meaning* (calling a cat 'doggy'); adding *-ed*/*-s* rules to irregular words is **overregularisation**.",
        },
      ],
      solution: [
        "Applying regular morphological rules (*-ed*, *-s*) to irregular verbs and nouns is **grammatical overregularisation**.",
      ],
      difficulty: "core",
      guideRef: "stages-language-acquisition",
      hints: [
        "Do NOT write overextension (that is for word category size)!",
        "The child makes an irregular word follow a *regular* rule: over______.",
      ],
    },
    {
      kind: "short",
      id: "language-development-quiz-q03",
      question:
        "What invented 3-letter nonsense creature word did **Jean Berko Gleason (1958)** ask young children to pluralise to test morphological rule extraction?",
      answer: {
        type: "text",
        accept: ["wug", "wugs", "the wug"],
      },
      solution: [
        "Berko (1958) presented a cartoon ***'wug'*** (*'Now there are two of them. There are two wugs!'*).",
      ],
      commonError: "Writing a real English noun (like bird or dog, which children could have memorised by rote) instead of Berko's invented pseudoword Wug.",
      difficulty: "warmup",
      guideRef: "stages-language-acquisition",
      hints: [
        "Three letters starting with W and rhyming with 'bug'.",
      ],
    },
    {
      kind: "mcq",
      id: "language-development-quiz-q04",
      question:
        "Who proposed the **Nativist Theory** that human children are biologically pre-wired with an innate **Language Acquisition Device (LAD)**?",
      options: [
        "B.F. Skinner",
        "Noam Chomsky",
        "Karl von Frisch",
        "Clark Hull",
      ],
      answerIndex: 1,
      explanation:
        "**Noam Chomsky (1959)** proposed the **Nativist Theory** featuring an innate **Language Acquisition Device (LAD)** and **Universal Grammar**, critiquing B.F. Skinner's behaviourist account.",
      difficulty: "warmup",
      guideRef: "chomsky-nativist-lad",
      hints: [
        "Skinner = Behaviourist; von Frisch = Honeybees; Hull = Drive-reduction.",
        "Which linguist proposed Universal Grammar and the LAD?",
      ],
    },
    {
      kind: "short",
      id: "language-development-quiz-q05",
      question:
        "In **Senghas's (1995)** study, deaf children in which Central American country spontaneously created a new grammatically structured sign language?",
      answer: {
        type: "text",
        accept: ["nicaragua", "nicaraguan", "nicaraguan sign language"],
      },
      solution: [
        "Ann Senghas (1995) studied the emergence of **Nicaraguan** Sign Language in Managua, **Nicaragua**.",
      ],
      commonError: "Confusing Nicaragua (Senghas, 1995 Nicaraguan Sign Language) with Costa Rica or Guatemala.",
      difficulty: "warmup",
      guideRef: "chomsky-nativist-lad",
      hints: [
        "Think of the abbreviation NSL (capital city: Managua).",
      ],
    },
    {
      kind: "short",
      id: "language-development-quiz-q06",
      question:
        "How many mother–infant pairs (dyads) participated in **Goldstein, King & West's (2003)** laboratory experiment on contingent social feedback and infant babbling?",
      answer: { type: "number", value: 30 },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "15 was the number of dyads in *each* condition — across both contingent and yoked control groups there were **30** dyads in total.",
        },
      ],
      solution: [
        "Goldstein, King & West (2003) tested **30** mothers and their 8-to-10-month-old infants (15 contingent, 15 yoked non-contingent).",
      ],
      difficulty: "core",
      guideRef: "learning-behaviourist",
      hints: [
        "There were 15 pairs in the contingent group and 15 pairs in the yoked control group.",
        "Add both groups together.",
      ],
    },
    {
      kind: "mcq",
      id: "language-development-quiz-q07",
      question:
        "In **Piaget's sensorimotor stage**, understanding around 8–12 months that a hidden rattle still exists under a cushion is called:",
      options: [
        "Object permanence",
        "Grammatical recasting",
        "Lexigram productivity",
        "Vicarious extinction",
      ],
      answerIndex: 0,
      explanation:
        "**Object permanence** (~8–12 months) is the cognitive schema that objects continue to exist out of sight — unlocking early holophrastic words for absent things such as *'All gone!'*",
      difficulty: "warmup",
      guideRef: "piaget-bruner-cognitive",
      hints: [
        "Objects stay *permanent* even when hidden.",
      ],
    },
    {
      kind: "short",
      id: "language-development-quiz-q08",
      question:
        "What four-letter acronym names **Jerome Bruner's** caregiver scaffolding system (*Language Acquisition Support System*)?",
      answer: {
        type: "text",
        accept: ["lass", "l.a.s.s."],
      },
      traps: [
        {
          spec: { type: "text", accept: ["lad", "l.a.d."] },
          feedback: "LAD (3 letters) is Chomsky's innate brain device — Bruner's 4-letter social support system is **LASS**.",
        },
      ],
      solution: [
        "Bruner paired Chomsky's **LAD** with the caregiver **LASS** (*Language Acquisition Support System*).",
      ],
      difficulty: "warmup",
      guideRef: "piaget-bruner-cognitive",
      hints: [
        "Four letters starting with L-A-S-.",
      ],
    },
    {
      kind: "short",
      id: "language-development-quiz-q09",
      question:
        "Name the bonobo great ape studied by **Savage-Rumbaugh et al. (1993)** who acquired over 350 visual Yerkish lexigrams observationally.",
      answer: {
        type: "text",
        accept: ["kanzi"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["washoe"] },
          feedback: "Washoe was a chimpanzee taught ASL hand signs by Gardner & Gardner — the bonobo using Yerkish lexigrams was **Kanzi**.",
        },
      ],
      solution: [
        "Bonobo **Kanzi** acquired 350+ geometric lexigrams observationally while trainers taught his adoptive mother Matata.",
      ],
      difficulty: "core",
      guideRef: "animal-vs-human",
      hints: [
        "Five letters starting with K (not Washoe or Nim).",
        "He learned lexigrams on a visual keyboard.",
      ],
    },
    {
      kind: "written",
      id: "language-development-quiz-q10",
      question:
        "State **two** of **Hockett's design features** and briefly explain how **human language** exceeds **von Frisch's honeybee waggle dance** on one of them. [3 marks]",
      marks: 3,
      modelAnswer:
        "Two of Hockett's design features are displacement and open-ended productivity (alongside semanticity and cultural transmission). Regarding productivity, human speakers combine words via recursive syntax to invent infinite novel sentences on any topic, whereas the honeybee waggle dance is a closed, genetically fixed code restricted solely to horizontal food distance and sun angle (unable even to signal 'straight up').",
      markScheme: [
        {
          point: "Names a first valid Hockett feature (semanticity, displacement, productivity, or cultural transmission)",
          keywords: ["displacement", "semanticity", "cultural transmission"],
        },
        {
          point: "Names a second valid Hockett feature (e.g. productivity / open-endedness)",
          keywords: ["productivity", "open-endedness", "creativity"],
        },
        {
          point: "Explains human advantage over honeybees (infinite novel syntax / past-future-imaginary time vs closed genetic food vector)",
          keywords: ["infinite", "novel", "recursive", "closed", "horizontal", "straight up", "genetically", "past"],
        },
      ],
      difficulty: "core",
      guideRef: "animal-vs-human",
      hints: [
        "Pick two features from Some Dogs Play Catch (Semanticity, Displacement, Productivity, Cultural transmission).",
        "Contrast infinite human novel messages (or past/future time) with the bee's fixed horizontal nectar vector.",
      ],
      strategy: "Name 2 features + Contrast open human vs closed bee code",
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
      id: "language-development-p1",
      title: "Language Development — Practice Paper 1 (Structured & Scenario)",
      questions: [
        {
          kind: "short",
          id: "language-development-p1-q01",
          question:
            "What is the typical upper age boundary, in **months**, of the **pre-linguistic stage** before an infant speaks their first true holophrastic word?",
          answer: { type: "number", value: 12, tolerance: 1 },
          traps: [
            {
              spec: { type: "number", value: 24 },
              feedback: "By 24 months toddlers are combining two words into telegraphic speech — the pre-linguistic stage runs from 0 to **12** months.",
            },
          ],
          solution: [
            "The pre-linguistic stage (crying, cooing, babbling) spans roughly **0 to 12 months**, with first words emerging around **12 months**.",
          ],
          difficulty: "warmup",
          guideRef: "stages-language-acquisition",
          hints: [
            "First words typically appear right around a baby's first birthday.",
          ],
        },
        {
          kind: "short",
          id: "language-development-p1-q02",
          question:
            "A 16-month-old toddler calls apples, peaches, tomatoes and red rubber balls ***'apple!'*** Name this specific **holophrastic semantic error**.",
          answer: {
            type: "text",
            accept: ["overextension", "over-extension", "semantic overextension"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["underextension", "under-extension"] },
              feedback: "Underextension is too narrow — applying 'apple' too broadly across peaches, tomatoes and red balls is **overextension**.",
            },
            {
              spec: { type: "text", accept: ["overregularisation", "overregularization"] },
              feedback: "Overregularisation involves grammar suffixes like *-ed* ('goed') — stretching a word's category too wide is **overextension**.",
            },
          ],
          solution: [
            "Applying one word too broadly to other round red objects sharing perceptual features is **semantic overextension**.",
          ],
          difficulty: "warmup",
          guideRef: "stages-language-acquisition",
          hints: [
            "Is the word's meaning stretched *too wide* (over-) or *too narrow* (under-)?",
          ],
        },
        {
          kind: "short",
          id: "language-development-p1-q03",
          question:
            "In **Berko's (1958) Wug Test**, out of **50** first-grade children tested on a novel past-tense verb (*'rick → ricked'*), suppose **42** produced the correct regular past tense. Calculate the **percentage** who succeeded.",
          answer: { type: "number", value: 84 },
          traps: [
            {
              spec: { type: "number", value: 42 },
              feedback: "42 is the count out of 50 — multiply by 2 (42 ÷ 50 × 100) to convert to a percentage.",
            },
          ],
          solution: [
            "Percentage = (42 ÷ 50) × 100 = **84%**.",
          ],
          difficulty: "warmup",
          guideRef: "stages-language-acquisition",
          hints: [
            "Divide 42 by 50, then multiply by 100.",
          ],
        },
        {
          kind: "written",
          id: "language-development-p1-q04",
          question:
            "27-month-old Lucas points at his empty bowl and says: *'Daddy give more cereal kitchen.'* Identify Lucas's **stage of language development** and explain **two** linguistic features of his utterance. [3 marks]",
          marks: 3,
          modelAnswer:
            "Lucas is in the telegraphic stage (typically 24 to 30 months). First, he strings together high-meaning content words (nouns and verbs like 'Daddy', 'give', 'cereal', 'kitchen') while omitting low-information functor words and inflections such as prepositions ('in', 'the') and auxiliaries. Second, despite missing small grammatical words, he preserves accurate English subject-verb-object-location word order.",
          markScheme: [
            {
              point: "Identifies telegraphic stage / telegraphic speech",
              keywords: ["telegraphic"],
            },
            {
              point: "Feature 1: Retains high-meaning content words while omitting functors / articles / prepositions / auxiliaries",
              keywords: ["content words", "functor", "functors", "omitting", "omits", "prepositions", "articles"],
            },
            {
              point: "Feature 2: Preserves correct grammatical word order (subject-verb-object)",
              keywords: ["word order", "subject-verb", "correct order", "syntax"],
            },
          ],
          difficulty: "core",
          guideRef: "stages-language-acquisition",
          hints: [
            "Match 27 months + 5 content words without 'in' or 'the' to the telegram-like stage.",
            "Comment on BOTH which word types are kept/dropped AND whether the word order makes sense.",
          ],
          strategy: "Name stage + Content/functor contrast + Word order",
        },
        {
          kind: "short",
          id: "language-development-p1-q05",
          question:
            "What phrase names Chomsky's argument that everyday adult speech is too fragmentary, messy and lacking in grammar corrections to explain rapid syntax learning without innate knowledge?",
          answer: {
            type: "text",
            accept: [
              "poverty of the stimulus",
              "poverty of stimulus",
              "stimulus poverty",
            ],
          },
          solution: [
            "Chomsky called this the **poverty of the stimulus** argument.",
          ],
          commonError: "Confusing poverty of the stimulus with overregularisation or the critical period hypothesis.",
          difficulty: "core",
          guideRef: "chomsky-nativist-lad",
          hints: [
            "The environmental input ('stimulus') is too 'poor' to teach full syntax on its own.",
            "Starts with 'poverty of...'.",
          ],
        },
        {
          kind: "short",
          id: "language-development-p1-q06",
          question:
            "In **Curtiss's (1977)** famous deprivation case study supporting Lenneberg and Chomsky's **critical/sensitive period**, at approximately what age in **years** (accept 13 or 13.5) was **Genie** rescued?",
          answer: { type: "number", value: 13.5, tolerance: 0.5 },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "Genie was isolated from roughly 20 months old until puberty — she was rescued around **13.5** years old.",
            },
          ],
          solution: [
            "Genie was discovered and rescued at **13 years 7 months (~13.5 years)** — around puberty — after which she acquired words but never full grammatical syntax.",
          ],
          difficulty: "core",
          guideRef: "chomsky-nativist-lad",
          hints: [
            "She was rescued right around puberty (early teens, between 13 and 14).",
            "Recall 13½ years.",
          ],
        },
        {
          kind: "written",
          id: "language-development-p1-q07",
          question:
            "Describe **Senghas's (1995)** study of **Nicaraguan Sign Language** and explain how her findings support **Chomsky's Nativist Theory**. [4 marks]",
          marks: 4,
          modelAnswer:
            "When previously isolated deaf children in Managua were brought together at new schools from the late 1970s, Cohort 1 pooled home gestures into a basic pidgin without systematic grammar. Senghas filmed and coded narrative signing across Cohort 1 versus Cohort 2 and across age at entry. Younger Cohort 2 children exposed before age 10 spontaneously transformed that rough pidgin into a fully grammatical language with spatial verb inflections, whereas learners entering after age 10 did not achieve equal fluency. Inventing complex grammar absent from adult or peer input supports an innate LAD, and the under-10 advantage supports a biological sensitive period.",
          markScheme: [
            {
              point: "Context & method: Deaf pupils in Managua compared across Cohort 1 vs Cohort 2 and age of entry",
              keywords: ["managua", "cohort 1", "cohort 2", "first cohort", "second cohort", "pidgin"],
            },
            {
              point: "Finding: Young Cohort 2 children (<10 yrs) invented full spatial grammar / discrete inflections not present in Cohort 1",
              keywords: ["spatial", "inflections", "grammatical", "creole", "invented", "transformed"],
            },
            {
              point: "Supports innate LAD / Universal Grammar (grammar created without adult teaching)",
              keywords: ["lad", "language acquisition device", "universal grammar", "innate", "without adult"],
            },
            {
              point: "Supports sensitive/critical period (<10 yrs outperformed late >10 yrs learners)",
              keywords: ["sensitive period", "critical period", "age 10", "under 10", "before age 10"],
            },
          ],
          difficulty: "core",
          guideRef: "chomsky-nativist-lad",
          hints: [
            "Contrast Cohort 1 (rough pidgin) with young (<10 yrs) Cohort 2 signers.",
            "Link spontaneous grammar creation → innate LAD, and <10 vs >10 age difference → sensitive period.",
          ],
          strategy: "Cohort contrast → Link to LAD + Sensitive period",
        },
        {
          kind: "short",
          id: "language-development-p1-q08",
          question:
            "In **Goldstein, King & West (2003)**, what was the age range in **months** (give the midpoint **9**, or any value from 8 to 10) of the infants whose babbling was shaped by maternal smiling and touch?",
          answer: { type: "number", value: 9, tolerance: 1 },
          traps: [
            {
              spec: { type: "number", value: 24 },
              feedback: "24-month-olds already speak in two-word phrases — Goldstein et al. tested pre-linguistic **8-to-10-month-old** (~9-month) infants.",
            },
          ],
          solution: [
            "Infants in Goldstein, King & West (2003) were **8 to 10 months old** (canonical/variegated babbling stage, midpoint **9 months**).",
          ],
          difficulty: "core",
          guideRef: "learning-behaviourist",
          hints: [
            "Infants are in the peak pre-linguistic babbling window just before their first birthday.",
            "Between 8 and 10 months.",
          ],
        },
        {
          kind: "short",
          id: "language-development-p1-q09",
          question:
            "What experimental control word describes how each non-contingent mother in **Goldstein, King & West (2003)** had her smile/touch timings paired to match a contingent mother's exact schedule?",
          answer: {
            type: "text",
            accept: ["yoked", "yoked control", "yoked-control", "yoked control group"],
          },
          solution: [
            "Pairing each control mother's delivery timestamps to an experimental dyad is called a **yoked control**.",
          ],
          commonError: "Writing matched pairs or counterbalanced instead of yoked control (linking each control mother's cue timing to an experimental infant's vocalisations).",
          difficulty: "core",
          guideRef: "learning-behaviourist",
          hints: [
            "Named after the wooden bar ('yoke') that links two oxen side by side.",
            "Five letters starting with Y: _____ control.",
          ],
        },
        {
          kind: "written",
          id: "language-development-p1-q10",
          question:
            "Explain how **Skinner's operant conditioning** and **Bandura's imitation** account for early word learning, and give **one** piece of evidence that **contradicts** pure Behaviourist theory. [4 marks]",
          marks: 4,
          modelAnswer:
            "According to Skinner, caregivers selectively reinforce target vocalisations with smiles, praise or desired objects (positive reinforcement) and shape successive approximations from rough babble ('muh') toward accurate words ('milk'). Alongside this, Bandura's social learning explains how toddlers observe and imitate the specific vocabulary and regional accent modelled by family members. However, pure Behaviourism is contradicted by grammatical overregularisation (such as saying 'goed' or pluralising Berko's novel 'wug' into 'wugs'), because children systematically produce rule-governed forms that adults never model or reinforce.",
          markScheme: [
            {
              point: "Explains Skinner's positive reinforcement (smiles/praise/getting requested item strengthens vocalisation)",
              keywords: ["positive reinforcement", "reinforce", "smiles", "praise", "rewarded"],
            },
            {
              point: "Explains shaping of successive approximations ('muh' → 'milk')",
              keywords: ["shaping", "approximations"],
            },
            {
              point: "Explains imitation/modelling of local words and accent",
              keywords: ["imitate", "modelling", "modeling", "accent", "vocabulary"],
            },
            {
              point: "Provides valid contradicting evidence (overregularisation 'goed'/'foots', Berko's wug test, or Brown & Hanlon truth reinforcement)",
              keywords: ["overregularisation", "overregularization", "goed", "wug", "wugs", "never model", "brown"],
            },
          ],
          difficulty: "core",
          guideRef: "learning-behaviourist",
          hints: [
            "Cover positive reinforcement + shaping ('muh' → 'milk') + imitation of local accent.",
            "Counter-evidence: cite 'goed'/'foots' or Berko's 'wug' test!",
          ],
          strategy: "Reinforcement + Shaping + Imitation → Overregularisation critique",
        },
        {
          kind: "short",
          id: "language-development-p1-q11",
          question:
            "In **Piaget's schema theory**, what term means **modifying an existing schema or creating a new schema** when a child discovers that cats miaow and are *not* dogs?",
          answer: {
            type: "text",
            accept: ["accommodation", "schema accommodation"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["assimilation", "schema assimilation"] },
              feedback: "Assimilation keeps the *same* schema (calling the cat 'doggy') — *changing/creating* a separate cat schema is **accommodation**.",
            },
          ],
          solution: [
            "Remember **aCCommodation** = **C**hange / **C**reate a schema when new evidence does not fit.",
          ],
          difficulty: "warmup",
          guideRef: "piaget-bruner-cognitive",
          hints: [
            "Double S in aSSimilation = Same Schema; double C in aCCommodation = Change/Create.",
          ],
        },
        {
          kind: "short",
          id: "language-development-p1-q12",
          question:
            "What three-word term (or acronym **CDS**) describes the higher-pitched, slower, exaggerated melodic speech style caregivers use with infants inside **Bruner's LASS**?",
          answer: {
            type: "text",
            accept: [
              "child-directed speech",
              "child directed speech",
              "cds",
              "infant-directed speech",
              "motherese",
              "parentese",
            ],
          },
          solution: [
            "Caregivers' exaggerated, melodic speech register is **Child-Directed Speech (CDS)** (traditionally nicknamed *motherese* or *parentese*).",
          ],
          commonError: "Writing LAD or LASS instead of child-directed speech (CDS / motherese), the melodic speech register itself.",
          difficulty: "warmup",
          guideRef: "piaget-bruner-cognitive",
          hints: [
            "Three words matching the initials C-D-S (or 'motherese').",
          ],
        },
        {
          kind: "written",
          id: "language-development-p1-q13",
          question:
            "Outline how **Hewitt (2022)** investigated young children's **schemas** and explain how those findings support **Piaget's Cognitive Theory** of language. [3 marks]",
          marks: 3,
          modelAnswer:
            "Hewitt conducted qualitative naturalistic case studies observing toddlers in early-years play settings as they enacted repetitive sensorimotor action schemas such as transporting items in baskets, rotation, or enveloping toys under cloths. Children physically explored and mastered these spatial/action concepts first before mapping relational words like 'inside', 'under' or 'more' onto them, especially when practitioners narrated their active play. This supports Piaget's core claim that sensorimotor cognitive schemas precede and provide the conceptual foundation for linguistic symbols.",
          markScheme: [
            {
              point: "Method: Naturalistic qualitative case studies of young children's play",
              keywords: ["case studies", "case study", "naturalistic", "qualitative", "early-years"],
            },
            {
              point: "Observations: Repetitive sensorimotor action schemas (transporting, enveloping, trajectory, rotation) mapped to relational words",
              keywords: ["transporting", "enveloping", "rotation", "trajectory", "relational", "inside", "under"],
            },
            {
              point: "Link to Piaget: Demonstrates physical cognitive concept/schema construction precedes spoken language",
              keywords: ["precedes", "before", "prerequisite", "foundation", "cognitive"],
            },
          ],
          difficulty: "core",
          guideRef: "piaget-bruner-cognitive",
          hints: [
            "Name Hewitt's research method (qualitative naturalistic case studies) and give examples of play schemas (transporting, enveloping).",
            "Connect 'action schema first → relational word second' directly to Piaget's claim that cognition precedes language.",
          ],
          strategy: "Method + Concrete schema examples → Link to Piaget",
        },
        {
          kind: "short",
          id: "language-development-p1-q14",
          question:
            "Which **Hockett design feature** is demonstrated when a 5-year-old tells a bedtime story about *a purple dragon that will visit Grandma's house next Saturday*?",
          answer: {
            type: "text",
            accept: ["displacement", "temporal and hypothetical displacement", "productivity"],
          },
          solution: [
            "Talking about future time (*next Saturday*), distant places (*Grandma's house*) and imaginary entities (*purple dragon*) demonstrates **displacement** (and novel storytelling also reflects **productivity**).",
          ],
          commonError: "Confusing semanticity (symbols having fixed meaning) with displacement (talking about future, past, distant or imaginary things).",
          difficulty: "warmup",
          guideRef: "animal-vs-human",
          hints: [
            "Which Hockett feature covers things absent in time, space, or reality?",
          ],
        },
        {
          kind: "written",
          id: "language-development-p1-q15",
          question:
            "Compare **Karl von Frisch's honeybee waggle dance** with **human language** using **three** different **Hockett design features**. [3 marks]",
          marks: 3,
          modelAnswer:
            "First, on semanticity, both systems convey specific meaning: waggle angle and duration represent solar direction and distance to nectar just as human words represent concepts. Second, on displacement, bees show only narrow horizontal spatial displacement for current flowers, whereas humans display full temporal and hypothetical displacement across past, future and fiction. Third, on productivity (and cultural transmission), the bee dance is a closed, DNA-hardwired code unable to coin new topics like 'straight up', whereas human syntax is culturally learned and infinitely productive.",
          markScheme: [
            {
              point: "Compares Semanticity (both convey meaning: bee angle/duration = direction/distance vs human words)",
              keywords: ["semanticity", "angle", "direction", "distance", "meaning"],
            },
            {
              point: "Compares Displacement (bees have limited spatial displacement only vs full human past/future/imaginary displacement)",
              keywords: ["displacement", "spatial", "past", "future", "imaginary", "temporal"],
            },
            {
              point: "Compares Productivity or Cultural Transmission (closed/innate bee code vs infinite novel human syntax / socially learned)",
              keywords: ["productivity", "closed", "infinite", "novel", "cultural transmission", "hardwired"],
            },
          ],
          difficulty: "core",
          guideRef: "animal-vs-human",
          hints: [
            "Name three distinct Hockett features explicitly (Semanticity, Displacement, Productivity/Cultural transmission).",
            "For each feature, state BOTH what bees can/cannot do AND what humans do.",
          ],
          strategy: "3 Hockett features × (Bee vs Human comparison)",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2
    // -----------------------------------------------------------------------
    {
      id: "language-development-p2",
      title: "Language Development — Practice Paper 2 (Data, Methods & Evaluation)",
      questions: [
        {
          kind: "short",
          id: "language-development-p2-q01",
          question:
            "In **Berko's (1958) Wug Test**, **76%** of 25 preschoolers pluralised *'wug'* accurately. How many **individual preschoolers** out of 25 answered *'wugs'*?",
          answer: { type: "number", value: 19 },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "6 is the number who missed it (24%) — compute 76% of 25 = 0.76 × 25 = **19**.",
            },
          ],
          solution: [
            "76% of 25 = (76 ÷ 100) × 25 = 76 ÷ 4 = **19 preschoolers**.",
          ],
          difficulty: "core",
          guideRef: "stages-language-acquisition",
          hints: [
            "Notice 25 is one-quarter of 100.",
            "Divide 76 by 4 (or multiply 0.76 × 25).",
          ],
        },
        {
          kind: "short",
          id: "language-development-p2-q02",
          question:
            "A speech therapist calculates the **Mean Length of Utterance (MLU)** in words across 5 consecutive sentences spoken by a 26-month-old: **'Mummy sock' (2), 'More cold milk' (3), 'Daddy go work' (3), 'Big doggy bark' (3), 'Want blue ball now' (4)**. Calculate the child's **mean** utterance length in words.",
          answer: { type: "number", value: 3 },
          traps: [
            {
              spec: { type: "number", value: 15 },
              feedback: "15 is the total word count across all 5 utterances — divide 15 by 5 to get the mean length per utterance.",
            },
          ],
          solution: [
            "Total words = 2 + 3 + 3 + 3 + 4 = 15 words.",
            "MLU = 15 ÷ 5 utterances = **3 words**.",
          ],
          difficulty: "warmup",
          guideRef: "stages-language-acquisition",
          hints: [
            "Add the five word counts (2+3+3+3+4) and divide by 5.",
          ],
        },
        {
          kind: "written",
          id: "language-development-p2-q03",
          question:
            "Explain clearly the difference between **semantic overextension** and **grammatical overregularisation**, giving **one** child example and the **typical stage/age** for each. [4 marks]",
          marks: 4,
          modelAnswer:
            "Semantic overextension is a vocabulary/meaning error during the holophrastic one-word stage (12 to 18 months) where a toddler stretches one word too broadly across perceptually similar items, such as calling every four-legged animal 'doggy'. By contrast, grammatical overregularisation is a morphological syntax error during the multi-word stage (30+ months) where a child applies regular inflection rules like '-ed' or '-s' to irregular words, such as saying 'goed' or 'foots'.",
          markScheme: [
            {
              point: "Defines overextension as stretching a word's meaning/category too broadly in the holophrastic stage (12–18 m)",
              keywords: ["too broadly", "vocabulary", "meaning", "holophrastic", "12"],
            },
            {
              point: "Gives a valid example of overextension (e.g. calling cats/cows 'doggy', or moon 'ball')",
              keywords: ["doggy", "four-legged", "moon", "ball", "cat"],
            },
            {
              point: "Defines overregularisation as applying regular morphological grammar suffixes (-ed / -s) to irregulars in multi-word stage (30+ m)",
              keywords: ["irregular", "suffix", "-ed", "morphological", "multi-word", "30"],
            },
            {
              point: "Gives a valid example of overregularisation (e.g. 'goed', 'runned', 'foots', 'mouses')",
              keywords: ["goed", "runned", "foots", "mouses", "feets", "tooths"],
            },
          ],
          difficulty: "core",
          guideRef: "stages-language-acquisition",
          hints: [
            "Pair 1 (Overextension): vocabulary category size + 12–18 m holophrastic + concrete example.",
            "Pair 2 (Overregularisation): regular grammar suffix (-ed/-s) on irregulars + 30+ m multi-word + concrete example.",
          ],
          strategy: "Definition + Stage/Age + Example for BOTH terms",
        },
        {
          kind: "short",
          id: "language-development-p2-q04",
          question:
            "What specific CIE 0266 experimental type describes **Senghas (1995)**, given that school-entry cohort and age at exposure occurred naturally rather than being randomly assigned by researchers?",
          answer: {
            type: "text",
            accept: [
              "natural experiment",
              "quasi-experiment",
              "quasi experiment",
              "natural/quasi-experiment",
            ],
          },
          traps: [
            {
              spec: { type: "text", accept: ["laboratory experiment", "lab experiment"] },
              feedback: "Researchers could not manipulate or randomly assign age of deafness exposure in a lab — naturally varying IVs define a **natural / quasi-experiment**.",
            },
          ],
          solution: [
            "Because the IVs (cohort & age of entry) varied naturally without researcher manipulation, Senghas (1995) is a **natural (or quasi) experiment**.",
          ],
          difficulty: "core",
          guideRef: "chomsky-nativist-lad",
          hints: [
            "Choose from laboratory experiment, field experiment, or natural/quasi-experiment.",
            "Who controlled when deaf children entered school — the researcher, or real-life history?",
          ],
        },
        {
          kind: "written",
          id: "language-development-p2-q05",
          question:
            "Evaluate **Chomsky's Nativist Theory** of language acquisition by providing **one empirical strength** and **one theoretical or empirical limitation**. [4 marks]",
          marks: 4,
          modelAnswer:
            "A powerful empirical strength comes from Senghas (1995): young second-cohort deaf children in Nicaragua invented systematic spatial grammar absent from older signers' pidgin input, directly supporting an innate LAD and a childhood sensitive period (alongside Berko's wug test showing rule extraction). However, a major limitation is that Chomsky treats the LAD as an abstract theoretical black box and underestimates social interaction: cases like hearing child 'Jim' (who failed to acquire grammar from passive television until given live speech-therapy interaction) show innate readiness requires Bruner's social LASS.",
          markScheme: [
            {
              point: "Names a valid strength (Senghas 1995 NSL creolisation, Berko wug overregularisation, or universal milestones)",
              keywords: ["senghas", "nicaraguan", "wug", "berko", "overregularisation", "universal"],
            },
            {
              point: "Explains how that evidence backs innate LAD / Universal Grammar / sensitive period",
              keywords: ["innate", "pidgin", "invented", "sensitive period", "without adult"],
            },
            {
              point: "Names a valid limitation (underestimates social interaction/LASS, LAD unfalsifiable/black box, or Goldstein babbling)",
              keywords: ["social interaction", "lass", "bruner", "black box", "television", "jim", "goldstein"],
            },
            {
              point: "Explains the limitation clearly (passive exposure fails without live contingent scaffolding; no single LAD brain spot)",
              keywords: ["passive", "scaffolding", "contingent", "live", "anatomical", "falsif"],
            },
          ],
          difficulty: "core",
          guideRef: "chomsky-nativist-lad",
          hints: [
            "Strength: Use Senghas (1995) Nicaraguan Sign Language (or Berko's wugs).",
            "Limitation: Explain why passive TV failed 'Jim' without Bruner's live LASS interaction (or critique the abstract 'black box' LAD).",
          ],
          strategy: "1 developed Strength + 1 developed Limitation",
        },
        {
          kind: "short",
          id: "language-development-p2-q06",
          question:
            "In **Goldstein, King & West (2003)**, during the 10-minute Response Phase, suppose a contingent infant produced **45** vocalisations, of which **27** were mature canonical syllables. What **percentage** of that infant's vocalisations were mature canonical syllables?",
          answer: { type: "number", value: 60 },
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback: "40% is the immature proportion (18 ÷ 45) — compute (27 ÷ 45) × 100 = **60%**.",
            },
          ],
          solution: [
            "27 ÷ 45 = 3 ÷ 5 = 0.60 → **60%**.",
          ],
          difficulty: "core",
          guideRef: "learning-behaviourist",
          hints: [
            "Simplify the fraction 27/45 by dividing top and bottom by 9 first!",
            "(3 ÷ 5) × 100.",
          ],
        },
        {
          kind: "written",
          id: "language-development-p2-q07",
          question:
            "Evaluate **Goldstein, King & West (2003)** in terms of **internal validity** AND **ecological validity**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Internal validity was exceptionally high because the yoked non-contingent control group received the exact same total quantity of silent maternal smiling and touching as the contingent group, while forbidding maternal speech ruled out vocal imitation — proving immediate social contingency alone caused mature babbling. However, ecological validity (mundane realism) was lower because testing occurred in a laboratory playroom where mothers wore wireless instruction headphones and stayed completely silent, whereas real caregivers at home naturally speak and sing back verbally.",
          markScheme: [
            {
              point: "Praises high internal validity via the yoked non-contingent control (matching total smiles/touches)",
              keywords: ["internal validity", "yoked", "same total", "quantity", "equal"],
            },
            {
              point: "Notes silent feedback / blind acoustic coding ruled out vocal imitation or observer bias",
              keywords: ["silent", "imitation", "blind", "acoustic", "confound"],
            },
            {
              point: "Identifies lower ecological validity / mundane realism due to artificial laboratory setup",
              keywords: ["ecological validity", "mundane realism", "artificial", "laboratory", "headphones"],
            },
            {
              point: "Explains contrast with real everyday parenting (mothers normally talk/coo verbally rather than smiling silently on cue)",
              keywords: ["home", "talk", "verbally", "speak", "natural"],
            },
          ],
          difficulty: "core",
          guideRef: "learning-behaviourist",
          hints: [
            "Internal validity: explain how the yoked control + silent rule eliminated alternative explanations.",
            "Ecological validity: compare headphone-cued silent mothers in a lab with normal chatty parenting at home.",
          ],
          strategy: "High Internal Validity (Yoked + Silent) vs Lower Ecological Validity (Headphones)",
        },
        {
          kind: "short",
          id: "language-development-p2-q08",
          question:
            "Seven 18-month-old toddlers in a playgroup know the following numbers of spoken words: **22, 35, 19, 40, 28, 35, 31**. Calculate the **range** (highest minus lowest) of vocabulary size.",
          answer: { type: "number", value: 21 },
          traps: [
            {
              spec: { type: "number", value: 30 },
              feedback: "30 is the mean (210 ÷ 7), and 31 is the median — for the **range**, subtract lowest (19) from highest (40).",
            },
          ],
          solution: [
            "Highest value = 40; Lowest value = 19.",
            "Range = 40 − 19 = **21 words**.",
          ],
          difficulty: "warmup",
          guideRef: "stages-language-acquisition",
          hints: [
            "Scan all 7 values for the maximum (40) and minimum (19), then subtract.",
          ],
        },
        {
          kind: "short",
          id: "language-development-p2-q09",
          question:
            "Using the same 7 toddler vocabulary counts (**22, 35, 19, 40, 28, 35, 31**), state the **mode**.",
          answer: { type: "number", value: 35 },
          traps: [
            {
              spec: { type: "number", value: 31 },
              feedback: "31 is the median — the **mode** is the value that appears most often (**35** appears twice).",
            },
          ],
          solution: [
            "**35** appears twice while every other number appears once, so the mode is **35**.",
          ],
          difficulty: "warmup",
          guideRef: "stages-language-acquisition",
          hints: [
            "Mode = Most frequent number in the list.",
          ],
        },
        {
          kind: "written",
          id: "language-development-p2-q10",
          question:
            "A parent says: *'I bought my 11-month-old toddler three hours of educational vocabulary cartoons on a tablet every day so I don't need to waste time playing peek-a-boo or reading picture books together.'* Use **Bruner's LASS** and **Goldstein, King & West (2003)** to explain why the parent's plan is flawed. [4 marks]",
          marks: 4,
          modelAnswer:
            "First, Goldstein, King and West (2003) proved that pre-linguistic vocal maturity depends on immediate, contingent social responsiveness timed directly to the infant's own babbling — a pre-recorded tablet cartoon plays on a non-contingent schedule that cannot smile or respond when the baby vocalises. Second, Bruner's Language Acquisition Support System (LASS) shows toddlers map words onto concepts through live joint attention, turn-taking formats like peek-a-boo and shared picture-book scaffolding (plus recasting), which passive one-way screen audio lacks.",
          markScheme: [
            {
              point: "Applies Goldstein et al. (2003): tablet audio is non-contingent and cannot respond immediately to baby's vocalisations",
              keywords: ["goldstein", "contingent", "non-contingent", "immediately", "timed"],
            },
            {
              point: "Explains consequence: lacks operant social reinforcement that matures early babbling",
              keywords: ["babbling", "reinforcement", "smiles", "mature"],
            },
            {
              point: "Applies Bruner's LASS: highlights joint attention, scaffolding, turn-taking formats & recasting",
              keywords: ["bruner", "lass", "scaffolding", "joint attention", "turn-taking", "recasting"],
            },
            {
              point: "Contrasts active two-way book/play routines with passive one-way screen exposure",
              keywords: ["passive", "one-way", "two-way", "interactive"],
            },
          ],
          difficulty: "core",
          guideRef: "piaget-bruner-cognitive",
          hints: [
            "Why is a pre-recorded tablet like the *non-contingent* group in Goldstein, King & West (2003)?",
            "What active LASS ingredients (joint attention, turn-taking, scaffolding) happen in picture-book reading but not passive cartoons?",
          ],
          strategy: "Link non-contingent screen to Goldstein (2003) + Missing LASS scaffolding (Bruner)",
        },
        {
          kind: "short",
          id: "language-development-p2-q11",
          question:
            "In **Hewitt (2022)**, what qualitative **research method** was used to study individual young children's repetitive play schemas (such as transporting and enveloping) in rich detail over time?",
          answer: {
            type: "text",
            accept: [
              "case study",
              "case studies",
              "naturalistic case study",
              "naturalistic case studies",
              "qualitative case study",
              "qualitative case studies",
            ],
          },
          solution: [
            "Hewitt (2022) used **in-depth naturalistic qualitative case studies** of young children's play schemas.",
          ],
          commonError: "Writing laboratory experiment instead of naturalistic qualitative case study (Hewitt, 2022 observed toddlers' everyday play).",
          difficulty: "warmup",
          guideRef: "piaget-bruner-cognitive",
          hints: [
            "Recall the CIE Paper 2 non-experimental method studying a few individuals in rich depth: ____ study.",
          ],
        },
        {
          kind: "short",
          id: "language-development-p2-q12",
          question:
            "In **von Frisch's** honeybee experiments, if the sun is directly South and a scout bee performs a waggle run pointing **straight UP (0° from vertical)** on the dark honeycomb, in which compass direction should hive-mates fly to find the flowers?",
          answer: {
            type: "text",
            accept: ["south", "towards the sun", "toward the sun", "due south"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["north"] },
              feedback: "Straight UP on the comb means fly straight *toward* the sun — since the sun is South, hive-mates fly **South** (downward = away from the sun = North).",
            },
          ],
          solution: [
            "On vertical honeycomb, **straight up (vertical)** represents the current direction **toward the sun**. Because the sun is due South, 0° upward signals **South**.",
          ],
          difficulty: "core",
          guideRef: "animal-vs-human",
          hints: [
            "Remember von Frisch's rule: straight UP on the vertical comb = fly directly *toward* the sun!",
            "Check which compass direction the sun is in the question stem.",
          ],
        },
        {
          kind: "short",
          id: "language-development-p2-q13",
          question:
            "Suppose **90%** of bonobo **Kanzi's** 250 recorded symbol combinations during a day were **instrumental requests** (asking for food, tickles or chases), while only the remainder were declarative comments. How many combinations were **declarative comments**?",
          answer: { type: "number", value: 25 },
          traps: [
            {
              spec: { type: "number", value: 225 },
              feedback: "225 is the 90% instrumental requests — calculate the remaining 10% of 250 = **25**.",
            },
          ],
          solution: [
            "Declarative percentage = 100% − 90% = 10%.",
            "10% of 250 = **25 combinations**.",
          ],
          difficulty: "core",
          guideRef: "animal-vs-human",
          hints: [
            "Subtract 90% from 100% first to find the percentage of declarative comments.",
            "Work out 10% of 250.",
          ],
        },
        {
          kind: "short",
          id: "language-development-p2-q14",
          question:
            "Which **Hockett design feature** explains why every human child must **learn** their community's specific vocabulary (e.g. Tagalog, Hindi or English) from surrounding speakers rather than inheriting words in their DNA?",
          answer: {
            type: "text",
            accept: ["cultural transmission", "tradition"],
          },
          traps: [
            {
              spec: { type: "text", accept: ["semanticity"] },
              feedback: "Semanticity means signals carry specific meanings — passing a language down socially across generations is **cultural transmission**.",
            },
          ],
          solution: [
            "Passing specific language conventions socially from one generation to the next via learning is **cultural transmission**.",
          ],
          difficulty: "warmup",
          guideRef: "animal-vs-human",
          hints: [
            "Recall Some Dogs Play Catch: what does the 'C' stand for?",
          ],
        },
        {
          kind: "written",
          id: "language-development-p2-q15",
          question:
            "Evaluate great-ape lexigram/sign studies (**Washoe** & **Kanzi**) as evidence for whether non-human primates can acquire **true human language**. [4 marks]",
          marks: 4,
          modelAnswer:
            "In support of partial language capacity, bonobo Kanzi acquired over 350 visual lexigrams through spontaneous observation without operant food bribery and passed double-blind headphone comprehension tests on novel spoken requests ('put soap on apple'), proving genuine semanticity and basic word-order sensitivity. However, against true human language, ape signing/lexigram output (such as Nim Chimpsky and even Kanzi) remains roughly 90% instrumental food or play requests, plateaus around a two-year-old human toddler's length, and lacks open-ended recursive syntax or rich temporal displacement.",
          markScheme: [
            {
              point: "Evidence FOR symbol comprehension: Kanzi/Washoe learned 130–350+ symbols (semanticity) / double-blind novel comprehension",
              keywords: ["kanzi", "washoe", "350", "lexigrams", "semanticity", "double-blind", "comprehension"],
            },
            {
              point: "Notes observational acquisition or basic word-order sensitivity",
              keywords: ["observational", "word order", "novel", "without food"],
            },
            {
              point: "Evidence AGAINST full language: lacks recursive syntax / open-ended productivity (plateaus ~2-year-old toddler)",
              keywords: ["recursive", "syntax", "productivity", "toddler", "2-year-old", "two-year-old", "plateau"],
            },
            {
              point: "Notes overwhelming reliance on instrumental requests / trainer cueing (Terrace / Nim)",
              keywords: ["instrumental", "requests", "food", "nim", "cueing", "terrace"],
            },
          ],
          difficulty: "core",
          guideRef: "animal-vs-human",
          hints: [
            "Side 1 (What apes CAN do): Cite Kanzi's 350+ lexigrams & double-blind spoken sentence comprehension (semanticity).",
            "Side 2 (Where apes STOP): Cite the ~2-year-old syntactic ceiling, lack of recursive productivity, and mostly instrumental food requests.",
          ],
          strategy: "Balanced two-sided evaluation (Semanticity ✔ vs Recursive Syntax ✘)",
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
      id: "language-development-ch-q01",
      question:
        "At 22 months, Ava accurately says *'feet'* and *'ran'*. At 34 months, Ava starts saying *'two **feets**'* and *'I **ranned**'*. Explain why Ava's accuracy appears to drop (**U-shaped curve**), and contrast what **Skinner's Behaviourist Theory** versus **Chomsky's Nativist Theory** would predict about this phenomenon. [4 marks]",
      marks: 4,
      modelAnswer:
        "At 22 months Ava merely echoed 'feet' and 'ran' as unanalysed memorised chunks, whereas by 34 months she extracted productive morphological rules (add '-s' for plural, '-ed' for past) and over-applied them to irregular exceptions — grammatical overregularisation, creating the classic U-shaped curve before exceptions are mastered. Skinner's Behaviourist Theory cannot explain this dip because adults never model or positively reinforce 'feets' or 'ranned' (and Ava had already been reinforced for correct 'ran'!). Conversely, Chomsky's Nativist Theory predicts overregularisation naturally as the child's innate LAD actively constructs systematic grammatical rules rather than passively imitating adults.",
      markScheme: [
        {
          point: "Explains U-shaped curve: early rote chunk memory ('ran') shifts to rule-governed grammatical overregularisation ('ranned')",
          keywords: ["memorised", "rote", "chunk", "overregularisation", "overregularization", "rule"],
        },
        {
          point: "Identifies the exact morphological rule extraction (-s plural / -ed past tense)",
          keywords: ["-ed", "-s", "past", "plural", "irregular"],
        },
        {
          point: "Explains why Skinner fails: adults never model or reinforce 'feets'/'ranned', and prior 'ran' was already reinforced",
          keywords: ["skinner", "never model", "reinforce", "imitation", "cannot explain"],
        },
        {
          point: "Explains why Chomsky succeeds: innate LAD actively extracts systematic Universal Grammar rules",
          keywords: ["chomsky", "lad", "innate", "nativist", "universal grammar"],
        },
      ],
      difficulty: "challenge",
      guideRef: "stages-language-acquisition",
      hints: [
        "Explain Phase 1 (22 m rote memory) vs Phase 2 (34 m rule extraction = grammatical overregularisation).",
        "Ask: Could Skinner's imitation or reinforcement ever turn an already-correct 'ran' into unmodelled 'ranned'?",
        "Connect rule-extraction directly to Chomsky's innate LAD.",
      ],
      strategy: "Explain U-curve → Refute Skinner → Support Chomsky",
    },
    {
      kind: "written",
      id: "language-development-ch-q02",
      question:
        "Compare **Senghas (1995)** on Nicaraguan Sign Language and **Curtiss (1977)** on **Genie** as empirical tests of the **critical/sensitive period hypothesis**, explaining why Senghas provides **stronger internal validity**. [4 marks]",
      marks: 4,
      modelAnswer:
        "Both studies support a childhood sensitive period for syntax: Genie (rescued at 13.5) and late-exposed Nicaraguan deaf signers (>10 years) both acquired vocabulary symbols yet failed to master complex native grammar, whereas young second-cohort Nicaraguan children (<10 years) achieved full grammatical fluency. However, Genie was a single-individual case study severely confounded by extreme emotional trauma, physical abuse, malnutrition and social isolation, making it unclear whether brain damage or age caused her syntax deficit. By contrast, Senghas studied a larger sample of neurologically healthy, socially loved deaf children raised in normal families, cleanly isolating age of exposure and yielding much higher internal validity and generalisability.",
      markScheme: [
        {
          point: "Shared finding: Both show post-childhood (>10–13 yrs) learners acquire vocabulary but struggle with native grammatical syntax",
          keywords: ["vocabulary", "syntax", "grammar", "10", "13"],
        },
        {
          point: "Identifies confounding variables in Genie's case (severe abuse, malnutrition, trauma, isolation, N=1)",
          keywords: ["confounding", "abuse", "malnutrition", "trauma", "case study"],
        },
        {
          point: "Explains Senghas's methodological advantage: healthy, loved deaf children in normal homes across larger cohorts",
          keywords: ["healthy", "loved", "normal", "larger", "cohorts"],
        },
        {
          point: "Concludes Senghas isolates age of exposure cleanly, yielding higher internal validity / generalisability",
          keywords: ["isolating", "isolates", "age of exposure", "generalisability", "generalizability"],
        },
      ],
      difficulty: "challenge",
      guideRef: "chomsky-nativist-lad",
      hints: [
        "State what BOTH Genie and late (>10 yr) Nicaraguan signers have in common (vocabulary yes, full grammar no).",
        "List the severe confounding variables in Genie's tragic upbringing (abuse, starvation, social deprivation).",
        "Explain why healthy, loved deaf children in Senghas (1995) isolate *age of exposure* far more cleanly!",
      ],
      strategy: "Shared sensitive-period conclusion → Confound comparison",
    },
    {
      kind: "written",
      id: "language-development-ch-q03",
      question:
        "'Goldstein, King & West (2003) proved that B.F. Skinner was 100% right and Noam Chomsky was 100% wrong about human language.' Critically evaluate this statement. [4 marks]",
      marks: 4,
      modelAnswer:
        "Goldstein, King and West (2003) strongly support operant social learning in pre-linguistic phonology: 8-to-10-month-olds given immediate contingent maternal smiles and touches produced significantly more mature canonical syllables than yoked non-contingent controls, proving babbling is not purely passive biological maturation. However, claiming this proves Skinner 100% right overstates the scope of the study: shaping pre-linguistic vowel-consonant sounds at 9 months does not explain how 3-year-olds acquire abstract recursive syntax, produce unmodelled overregularisations ('goed', Berko's 'wugs'), or invent brand-new sign grammar in Nicaragua (Senghas 1995). Instead, social contingency tunes early speech sounds (LASS/learning) while innate syntactic mechanisms (LAD) drive grammar.",
      markScheme: [
        {
          point: "Credits Goldstein et al. (2003) accurately: contingent silent maternal smiles/touch shaped mature babbling vs yoked controls",
          keywords: ["contingent", "yoked", "canonical", "babbling", "8-to-10", "smiles"],
        },
        {
          point: "Identifies scope limit: pre-linguistic phonology/babbling ≠ complex multi-word grammatical syntax",
          keywords: ["pre-linguistic", "phonology", "syntax", "scope", "9 months"],
        },
        {
          point: "Cites Nativist counter-evidence Skinner cannot explain (Senghas 1995 NSL, Berko's wugs, overregularisation 'goed')",
          keywords: ["senghas", "nicaraguan", "wugs", "overregularisation", "overregularization", "goed", "recursive"],
        },
        {
          point: "Reaches balanced interactionist judgement (both social feedback AND innate readiness contribute)",
          keywords: ["interactionist", "both", "lass", "lad", "complement"],
        },
      ],
      difficulty: "challenge",
      guideRef: "learning-behaviourist",
      hints: [
        "Acknowledge what Goldstein et al. (2003) genuinely proved about 8–10-month babbling.",
        "Point out the leap from *9-month babbling sounds* to *3-year-old recursive grammar*!",
        "Bring in Senghas (1995) and Berko's wug test to show why Chomsky's LAD + Bruner's LASS synthesis beats an extreme 100% claim.",
      ],
      strategy: "Credit study scope → Expose syntactic gap → Synthesise",
    },
    {
      kind: "short",
      id: "language-development-ch-q04",
      question:
        "In a replication of **Goldstein, King & West (2003)** across three 10-minute phases, a contingent infant produced **20** mature syllables in Baseline (10 min), **50** in the Contingent Social Response Phase (10 min), and **26** in Extinction Return (10 min). Calculate the infant's **mean rate of mature syllables per minute** across the entire **30-minute** session.",
      answer: { type: "number", value: 3.2, tolerance: 0.01 },
      traps: [
        {
          spec: { type: "number", value: 32 },
          feedback: "32 is the mean per *10-minute phase* (96 ÷ 3) — divide total syllables (96) by **30 minutes** to get syllables **per minute**!",
        },
      ],
      solution: [
        "Total mature syllables = 20 + 50 + 26 = 96 syllables.",
        "Total time = 10 + 10 + 10 = 30 minutes.",
        "Mean rate per minute = 96 ÷ 30 = **3.2 syllables per minute**.",
      ],
      difficulty: "challenge",
      guideRef: "learning-behaviourist",
      hints: [
        "Read the units carefully: per *minute*, not per 10-minute phase!",
        "Sum all mature syllables (20 + 50 + 26 = 96).",
        "Divide 96 by total session duration (30 minutes).",
      ],
      strategy: "Check rate units (per minute vs per phase)",
    },
    {
      kind: "written",
      id: "language-development-ch-q05",
      question:
        "Contrast **Chomsky's Nativist Theory** and **Piaget's Cognitive Theory** on whether language is a **separate specialised module** or **dependent on general cognitive schemas**, citing **Hewitt (2022)** and **one** clinical/empirical counter-argument. [4 marks]",
      marks: 4,
      modelAnswer:
        "Chomsky argues language is a domain-specific, biologically autonomous module (the LAD) operating largely independently of general intelligence, whereas Piaget argues language is domain-general and strictly subordinate to cognitive development — toddlers must build sensorimotor schemas first before naming concepts. Supporting Piaget, Hewitt's (2022) naturalistic case studies show toddlers enact physical transporting and enveloping schemas before mapping spatial words like 'inside' or 'gone' onto them. However, challenging strict Piagetian dependence, individuals with Williams syndrome exhibit fluent, complex grammatical syntax despite severe spatial and Piagetian conservation deficits, suggesting grammar is partially modular as Chomsky proposed.",
      markScheme: [
        {
          point: "Contrasts Chomsky's domain-specific autonomous LAD module vs Piaget's domain-general cognition-precedes-language view",
          keywords: ["module", "modular", "lad", "subordinate", "precedes", "domain"],
        },
        {
          point: "Cites Hewitt (2022) play/action schemas (transporting/enveloping) supporting Piaget's schema-before-word sequence",
          keywords: ["hewitt", "transporting", "enveloping", "action schemas", "case studies"],
        },
        {
          point: "Cites clinical dissociation (e.g. Williams syndrome fluent grammar despite low IQ/spatial cognition) challenging strict Piaget",
          keywords: ["williams", "dissociation", "iq", "conservation", "fluent"],
        },
        {
          point: "Synthesises clearly (conceptual vocabulary relies on Piagetian schemas while syntax shows modular readiness)",
          keywords: ["vocabulary", "syntax", "partially", "both", "relational"],
        },
      ],
      difficulty: "challenge",
      guideRef: "piaget-bruner-cognitive",
      hints: [
        "Contrast 'isolated grammar module' (Chomsky) vs 'thought/schemas come first' (Piaget).",
        "Support Piaget with Hewitt's (2022) transporting/enveloping schema case studies.",
        "Challenge strict Piaget with Williams syndrome (strong syntax despite low non-verbal IQ).",
      ],
      strategy: "Theoretical contrast → Hewitt support → Williams dissociation",
    },
    {
      kind: "written",
      id: "language-development-ch-q06",
      question:
        "Design a **naturalistic observation** in an early-years nursery (inspired by **Hewitt 2022** & **Bruner's LASS**) to investigate whether **adult scaffolding during schema play** is associated with toddlers using more **relational spatial words**. Specify **two operationalised behavioural categories**, your **sampling technique** (event or time), **inter-observer reliability**, and **one ethical safeguard**. [4 marks]",
      marks: 4,
      modelAnswer:
        "Observe 20-to-28-month-old toddlers during free play using event sampling across two 30-minute morning sessions. Operationalised Category 1 (Adult Scaffolding): practitioner makes joint eye contact with the child's active toy and speaks a spatial comment or recast within 3 seconds of a transporting/enveloping action. Operationalised Category 2 (Child Relational Speech): toddler utters an audible spatial preposition or disappearance word ('in', 'under', 'on', 'gone', 'out'). Two independent observers simultaneously tally the same play zone after a pilot trial, checking for ≥ 0.80 correlation to ensure inter-observer reliability. Ethically, secure prior written parental informed consent and pause recording immediately if any child appears uncomfortable.",
      markScheme: [
        {
          point: "Defines two concrete, observable operationalised behavioural categories (adult scaffolding act + child spatial word)",
          keywords: ["eye contact", "3 seconds", "preposition", "under", "inside", "gone", "audible"],
        },
        {
          point: "Specifies event sampling or time sampling appropriately with clear schedule",
          keywords: ["event sampling", "time sampling", "30-minute", "tally"],
        },
        {
          point: "Explains inter-observer reliability (two independent observers tallying simultaneously + checking ≥0.80 agreement)",
          keywords: ["two independent", "inter-observer", "0.8", "agreement", "pilot"],
        },
        {
          point: "Includes valid child ethics safeguard (parental informed consent + monitoring non-verbal child distress/assent + anonymity)",
          keywords: ["parental", "consent", "uncomfortable", "distress", "withdraw", "anonym"],
        },
      ],
      difficulty: "challenge",
      guideRef: "piaget-bruner-cognitive",
      hints: [
        "Operationalise BOTH categories so two strangers would count the exact same physical actions/words (no vague 'good play').",
        "State event sampling or time sampling + how two independent observers establish ≥0.80 inter-observer reliability.",
        "Include parental proxy informed consent + stopping if a toddler shows distress.",
      ],
      strategy: "2 Operationalised Categories + Sampling + Inter-observer + Child Ethics",
    },
    {
      kind: "written",
      id: "language-development-ch-q07",
      question:
        "A tech journalist claims: *'Because bonobo Kanzi understands 3,000 spoken words and honeybees dance exact GPS coordinates to flowers, Hockett was wrong — animals possess full human language!'* Refute this claim systematically using **Hockett's design features**. [4 marks]",
      marks: 4,
      modelAnswer:
        "The journalist confuses impressive semanticity with full human language. While honeybees (von Frisch) encode solar angle and distance semantically and show narrow horizontal spatial displacement, their code is genetically hardwired (zero cultural transmission) and completely closed — lacking open-ended productivity to express 'upward', yesterday's predators, or hypothetical ideas. Similarly, although Kanzi demonstrates rich lexical semanticity and basic two-symbol requests, his output remains ~90% instrumental food/action demands, plateaus around a two-year-old toddler's grammar, and lacks human recursive syntax capable of embedding infinite novel clauses across past, future and imaginary worlds.",
      markScheme: [
        {
          point: "Acknowledges genuine animal Semanticity (Kanzi's vocabulary / bee angle-distance meaning) to frame the distinction",
          keywords: ["semanticity", "angle", "vocabulary", "confuses"],
        },
        {
          point: "Critiques Honeybees on Productivity & Cultural Transmission (closed genetic code; cannot say 'up' or past events)",
          keywords: ["closed", "hardwired", "cultural transmission", "upward", "productivity"],
        },
        {
          point: "Critiques Kanzi on Recursive Syntax & Productivity (~90% instrumental requests; 2-year-old toddler grammar ceiling)",
          keywords: ["recursive", "syntax", "instrumental", "toddler", "two-year-old"],
        },
        {
          point: "Highlights full human Temporal & Hypothetical Displacement (past, future, abstract/fiction)",
          keywords: ["temporal", "hypothetical", "future", "imaginary", "fiction", "displacement"],
        },
      ],
      difficulty: "challenge",
      guideRef: "animal-vs-human",
      hints: [
        "Concede Semanticity first so your argument is scientifically fair!",
        "Show where honeybees fail: closed DNA-fixed code, zero cultural transmission, zero productivity ('up' / yesterday).",
        "Show where Kanzi plateaus: mostly instrumental requests, ~2-year-old grammar ceiling, lacking recursive syntax & full displacement.",
      ],
      strategy: "Concede Semanticity → Critique Bees → Critique Apes on Syntax & Displacement",
    },
    {
      kind: "written",
      id: "language-development-ch-q08",
      question:
        "A 3-year-old child grows up in a loving family speaking Tamil and English, goes through babbling at 7 months, says *'ball'* for moons at 15 months, says *'I goed school'* at 34 months, and asks *'Why do clouds float?'* at 38 months. Synthesise **Chomsky**, **Skinner/Goldstein**, **Piaget/Hewitt** and **Bruner** to explain how **all four** perspectives contribute to this child's journey. [4 marks]",
      marks: 4,
      modelAnswer:
        "First, Skinner's learning principles and Goldstein et al. (2003) explain how contingent parental smiles shape 7-month babbling and how imitation determines that the child speaks Tamil and English specifically rather than French. Second, Piaget and Hewitt (2022) explain 15-month semantic overextension ('ball' for moon) as assimilating round objects into an existing sensorimotor schema before accommodating separate categories. Third, Chomsky's innate LAD explains universal milestone timing across both languages and 34-month grammatical overregularisation ('goed'), where productive syntax rules are extracted without adult modelling. Finally, Bruner's LASS explains how responsive caregiver child-directed speech and joint book-reading scaffolded those milestones into 38-month abstract inquiry.",
      markScheme: [
        {
          point: "Links Skinner / Goldstein (2003) to contingent shaping of 7m babbling & imitating specific Tamil/English vocabulary",
          keywords: ["goldstein", "skinner", "contingent", "tamil", "imitation"],
        },
        {
          point: "Links Piaget / Hewitt (2022) to 15m overextension ('ball' for moon) via schema assimilation/accommodation",
          keywords: ["piaget", "hewitt", "assimilation", "overextension", "schema"],
        },
        {
          point: "Links Chomsky's innate LAD to universal bilingual schedule & 34m overregularisation ('goed')",
          keywords: ["chomsky", "lad", "overregularisation", "overregularization", "innate"],
        },
        {
          point: "Links Bruner's LASS (scaffolding / CDS / joint attention) to guiding interactive fluency",
          keywords: ["bruner", "lass", "scaffolding", "child-directed", "joint"],
        },
      ],
      difficulty: "challenge",
      guideRef: "piaget-bruner-cognitive",
      hints: [
        "Match 7m babbling + Tamil/English choice → Goldstein (2003) & Skinner/Bandura.",
        "Match 15m 'ball' for moon → Piaget's assimilation/overextension (& Hewitt schemas); match 34m 'goed' → Chomsky's LAD.",
        "Match interactive family scaffolding into 38m questions → Bruner's LASS.",
      ],
      strategy: "Map each developmental milestone to its best-fitting theory",
    },
  ],
};
