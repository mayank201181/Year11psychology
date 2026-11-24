import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: Core Stages, Theories & Compulsory Studies
  // =========================================================================
  {
    id: "language-development-m1",
    title: "Language Development — MCQ Paper 1 (Core Stages & Theories)",
    questions: [
      {
        kind: "mcq",
        id: "language-development-m1-q01",
        question:
          "What is the universal chronological sequence of **early language acquisition** from birth onward?",
        options: [
          "Pre-linguistic → Holophrastic → Two-word & Telegraphic → Multi-word",
          "Holophrastic → Pre-linguistic → Multi-word → Telegraphic",
          "Telegraphic → Pre-linguistic → Holophrastic → Multi-word",
          "Pre-linguistic → Telegraphic → Holophrastic → Multi-word",
        ],
        answerIndex: 0,
        explanation:
          "Children universally move from **Pre-linguistic** vocalisations (0–12 m: crying, cooing, babbling) → **Holophrastic** one-word utterances (12–18 m) → **Two-word & Telegraphic** speech (18–30 m) → **Multi-word** grammatical speech (30+ m).",
        difficulty: "warmup",
        guideRef: "stages-language-acquisition",
        hints: [
          "Use the mnemonic: Pretty Happy Toddlers Multiply.",
          "Babies babble before saying single words, then string content words together.",
        ],
        strategy: "Use ordered stage mnemonic",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q02",
        question:
          "Around **6–9 months**, infants produce repeated consonant-vowel strings such as *'bababa'* or *'mamama'*. What is this pre-linguistic milestone called?",
        options: [
          "Telegraphic functor omission",
          "Canonical (reduplicated) babbling",
          "Grammatical overregularisation",
          "Holophrastic underextension",
        ],
        answerIndex: 1,
        explanation:
          "Repeating identical consonant-vowel syllables (*'bababa'*, *'dadada'*) at 6–9 months is **canonical (reduplicated) babbling**, preceding variegated babbling (*'bamido'*) at 9–12 months.",
        difficulty: "warmup",
        guideRef: "stages-language-acquisition",
        hints: [
          "At 6–9 months the baby is still in the pre-linguistic stage (no real words yet).",
          "Repeated syllable strings = canonical/reduplicated babbling.",
        ],
        strategy: "Match age & sound pattern",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q03",
        question:
          "A 15-month-old toddler points to the Moon, an orange, a doorknob and a tennis ball, calling every single round object ***'ball!'*** Which semantic error is this?",
        options: [
          "Grammatical overregularisation",
          "Semantic underextension",
          "Semantic overextension",
          "Phonemic displacement",
        ],
        answerIndex: 2,
        explanation:
          "Applying one word **too broadly** across a wider category of objects sharing a perceptual feature (shape) during the holophrastic stage is **semantic overextension**. Underextension is too narrow; overregularisation involves grammar suffixes like *-ed*.",
        difficulty: "warmup",
        guideRef: "stages-language-acquisition",
        hints: [
          "Is 'ball' being stretched *too broadly* or restricted *too narrowly*?",
          "Do not confuse vocabulary category stretching with '-ed' grammar suffixes!",
        ],
        strategy: "Distinguish overextension vs overregularisation",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q04",
        question:
          "Which utterance is the clearest example of **telegraphic speech** (around 24–30 months)?",
        options: [
          "'Goo-goo aah-aah'",
          "'Milk!'",
          "'Mummy give biscuit table'",
          "'Yesterday I wented to the park because it weren't raining'",
        ],
        answerIndex: 2,
        explanation:
          "*'Mummy give biscuit table'* strings high-information **content words** in accurate subject-verb-object-location order while omitting low-information **functor words** (*is, -ing, me, a, on, the*), just like an old telegram.",
        difficulty: "warmup",
        guideRef: "stages-language-acquisition",
        hints: [
          "Eliminate cooing, a 1-word holophrase, and a full multi-clause sentence.",
          "Look for 3–4+ content nouns/verbs in order with missing small words ('the', 'on', 'is').",
        ],
        strategy: "Count words & check functor omission",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q05",
        question:
          "What did **Jean Berko Gleason's (1958) 'Wug' Test** demonstrate when young children pluralised a novel cartoon creature from *'one wug'* to ***'two wugs'***?",
        options: [
          "Children acquire plural endings purely by imitating and repeating familiar nouns that adults have previously reinforced aloud",
          "Children unconsciously extract productive morphological rules and apply them to brand-new words they have never heard before",
          "Children rely on semantic overextension to stretch a familiar animal label like 'bird' across every unfamiliar cartoon creature",
          "Children cannot apply regular grammatical suffixes until they have mastered Piaget's concrete operational conservation tasks",
        ],
        answerIndex: 1,
        explanation:
          "Because ***'wug'*** is an invented nonsense word, no adult could ever have modelled or reinforced *'wugs'*. Instant accurate pluralisation proves children internalise **abstract productive grammar rules**.",
        difficulty: "core",
        guideRef: "stages-language-acquisition",
        hints: [
          "Why did Berko invent a nonsense word instead of testing 'one cat, two cats'?",
          "Can imitation explain pluralising a word you heard five seconds ago for the first time?",
        ],
        strategy: "Identify why nonsense stimuli rule out imitation",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q06",
        question:
          "In **Noam Chomsky's Nativist Theory**, what is the role of **Universal Grammar (UG)** inside the **Language Acquisition Device (LAD)**?",
        options: [
          "It pre-loads infants at birth with an innate spoken vocabulary of specific local English, Mandarin or Spanish words before any social exposure",
          "It guides caregivers to deliver immediate contingent smiles, rhythmic child-directed speech and recasting whenever a baby begins babbling",
          "It builds general sensorimotor play schemas such as object permanence and transporting through assimilation before any words can emerge",
          "It provides innate, species-specific deep structural principles shared across all human languages so children rapidly extract local syntax",
        ],
        answerIndex: 3,
        explanation:
          "Babies are not born knowing English or Mandarin words; rather, the **LAD** contains **Universal Grammar** — innate structural principles common to all human languages that allow rapid parameter-setting from local speech.",
        difficulty: "core",
        guideRef: "chomsky-nativist-lad",
        hints: [
          "Does Universal Grammar store specific vocabulary words, or deep structural rules shared across all human languages?",
          "Connect Chomsky's biological module to rapid syntax extraction.",
        ],
        strategy: "Separate universal syntax rules from local vocabulary",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q07",
        question:
          "What crucial finding did **Ann Senghas (1995)** report in her study of **Nicaraguan Sign Language (NSL)**?",
        options: [
          "Spanish-speaking teachers designed a complete sign grammar textbook that older teenagers memorised word for word",
          "First-cohort signers created a rough pidgin, whereas younger second-cohort deaf children exposed before age 10 spontaneously invented full grammatical sign structure",
          "Deaf children refused to gesture on school buses unless paid wooden extra-credit tokens",
          "Adults exposed for the first time at age 35 mastered spatial sign inflections faster than 5-year-olds",
        ],
        answerIndex: 1,
        explanation:
          "Senghas (1995) showed that **young (<10 years) second-cohort deaf children** transformed Cohort 1's incomplete pidgin into a rich, fully grammatical language (**ISN**) without adult grammar models — supporting both an **innate LAD** and a **sensitive period**.",
        difficulty: "core",
        guideRef: "chomsky-nativist-lad",
        hints: [
          "Compare Cohort 1 (pidgin) with young Cohort 2 (<10 years) in Managua.",
          "Who actually invented the new spatial grammar — teachers or young deaf children?",
        ],
        strategy: "Contrast Cohort 1 vs young Cohort 2",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q08",
        question:
          "According to **B.F. Skinner's (1957) Behaviourist Theory**, how do infants progress from rough sounds like *'muh'* to clear words like *'milk'*?",
        options: [
          "Through innate Universal Grammar: setting biological syntax parameters inside the Language Acquisition Device",
          "Through Piagetian cognitive development: forming sensorimotor object-permanence schemas via accommodation",
          "Through operant conditioning: selective positive reinforcement and shaping of successive approximations",
          "Through classical conditioning: automatically pairing neutral milk bottles with innate reflex salivation",
        ],
        answerIndex: 2,
        explanation:
          "Skinner argued caregivers reinforce rough vocal attempts at first and progressively require closer matches before rewarding — **operant shaping of successive approximations** paired with **selective positive reinforcement**.",
        difficulty: "warmup",
        guideRef: "learning-behaviourist",
        hints: [
          "Skinner = operant conditioning.",
          "Which operant technique rewards closer and closer steps toward a target word?",
        ],
        strategy: "Link theorist to core mechanism",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q09",
        question:
          "In **Goldstein, King & West (2003)**, how did the **contingent** mother–infant group differ experimentally from the **yoked non-contingent control** group?",
        options: [
          "Contingent mothers repeated clear Child-Directed Speech words aloud right after every babble, while yoked mothers remained completely motionless with a stone-faced expression",
          "Contingent mothers smiled, approached and touched silently *immediately* when their baby vocalised, while yoked mothers gave the exact same total smiles/touches on a random schedule",
          "Contingent mothers gave twice as many smiles, touches and cuddling episodes overall, while yoked mothers withheld physical touch completely until the final ten minutes of the session",
          "Contingent infants were 24–30 months old practising telegraphic sentences with toy props, while yoked control infants were 8–10-month-olds tested before canonical babbling began",
        ],
        answerIndex: 1,
        explanation:
          "In Goldstein, King & West (2003), both groups of 8–10-month-olds received **identical amounts of silent maternal smiling, approaching and touching**, differing *only* in **contingency** (immediate timing after vocalising vs yoked random timing).",
        difficulty: "core",
        guideRef: "learning-behaviourist",
        hints: [
          "Remember neither mother group was allowed to speak words!",
          "What makes a 'yoked control' so fair in testing timing vs total affection?",
        ],
        strategy: "Identify the yoked-control IV",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q10",
        question:
          "What is **Jean Piaget's** core claim about the relationship between **cognitive development** and **language acquisition**?",
        options: [
          "Language develops independently of general thought inside an innate biological grammar module (LAD), so complex syntax can emerge without prior sensorimotor schemas",
          "Spoken language precedes and shapes thought: children must first hear adult words via Child-Directed Speech before they can form mental concepts like object permanence",
          "Cognitive development precedes language: children must first build mental schemas (such as object permanence) via assimilation and accommodation before naming those concepts",
          "Internal mental schemas cannot be studied scientifically: verbal speech arises solely from external caregiver reinforcement shaping observable vocal habits over time",
        ],
        answerIndex: 2,
        explanation:
          "Piaget argued **thought precedes language**: children construct sensorimotor **schemas** (like **object permanence** at ~8–12 m) through **assimilation** and **accommodation** *before* they can meaningfully attach linguistic symbols (*'All gone!'*) to them.",
        difficulty: "core",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "For Piaget, which comes first: the mental concept/schema or the spoken word?",
          "Think of object permanence unlocking 'All gone!'.",
        ],
        strategy: "Check causal direction (Cognition → Language)",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q11",
        question:
          "What research method and key focus characterise **Hewitt's (2022)** study in CIE 0266 Language Development?",
        options: [
          "Controlled laboratory experiment using wireless headphones and a yoked control group to test whether silent contingent maternal smiles accelerate infant babbling",
          "Cross-cohort natural experiment comparing early-exposed and late-exposed deaf school children in Managua to track the spontaneous emergence of spatial sign grammar",
          "Quantitative laboratory picture-card test presenting cartoon nonsense creatures like 'wugs' to preschoolers to measure productive English plural and past-tense rules",
          "Naturalistic qualitative case studies observing how young children's repetitive play action schemas (such as transporting and enveloping) scaffold conceptual language",
        ],
        answerIndex: 3,
        explanation:
          "**Hewitt (2022)** conducted rich **naturalistic qualitative case studies** in early childhood, documenting how toddlers' repetitive sensorimotor **action schemas** (transporting, trajectory, rotation, enveloping) underpin emerging relational words.",
        difficulty: "core",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "Hewitt (2022) sits inside the Piagetian cognitive-schema section.",
          "Match the method: qualitative early-years case studies of play schemas.",
        ],
        strategy: "Recall compulsory named study",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q12",
        question:
          "In **Jerome Bruner's Interactionist Theory**, what does **LASS** stand for, and how does it relate to Chomsky's **LAD**?",
        options: [
          "Language Acquisition Support System; it completely rejects Chomsky's innate LAD and argues children learn grammar solely through solitary operant reinforcement",
          "Language Acquisition Support System; adult social scaffolding, joint-attention routines and child-directed speech partner with the child's innate LAD",
          "Linguistic Assimilation Schema Stage; it extends Piaget's sensorimotor period by arguing private cognitive play replaces both caregiver interaction and the LAD",
          "Lexical Auditory Shaping System; it describes how caregivers ignore babbling and correct grammatical suffixes strictly through explicit classroom drills",
        ],
        answerIndex: 1,
        explanation:
          "Bruner (1983) proposed the **Language Acquisition Support System (LASS)** — caregiver **scaffolding**, interactive routines (*peek-a-boo*, joint book-reading) and **child-directed speech** — working hand-in-hand with Chomsky's biological **LAD**.",
        difficulty: "warmup",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "Bruner's famous line: if there is an innate LAD, there must also be a social LASS!",
          "Look for 'Support System' involving caregiver scaffolding.",
        ],
        strategy: "Pair LAD (nature) + LASS (social support)",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q13",
        question:
          "Which of **Hockett's design features** refers to combining a finite set of sounds and words via recursive grammar to create an **infinite number of brand-new messages**?",
        options: [
          "Productivity (open-endedness)",
          "Thermal homeostasis",
          "Semantic underextension",
          "Rote acoustic echo",
        ],
        answerIndex: 0,
        explanation:
          "**Productivity** (also called **open-endedness** or **creativity**) is the uniquely powerful property of human syntax that lets speakers generate limitless novel sentences never uttered before.",
        difficulty: "warmup",
        guideRef: "animal-vs-human",
        hints: [
          "Recall Hockett's four features: Semanticity, Displacement, Productivity, Cultural transmission.",
          "Which word means 'producing' infinite new combinations?",
        ],
        strategy: "Match Hockett feature definition",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q14",
        question:
          "In **Karl von Frisch's (1967)** research on the **honeybee waggle dance**, what two pieces of information are encoded by the **angle** of the straight waggle run on the vertical comb and its **duration**?",
        options: [
          "Distance to the flowers (via run angle), and nectar scent quality (via duration)",
          "Vertical altitude of flowers above the hive, and exact nectar sugar volume",
          "Direction of the food source relative to the sun, and distance from the hive",
          "Type of approaching hive predator, and seasonal blooming month of the clover",
        ],
        answerIndex: 2,
        explanation:
          "von Frisch showed that the waggle run's **angle** relative to vertical maps the **direction** to flowers relative to the sun's position, while waggle **duration/vigour** signals **distance** from the hive.",
        difficulty: "core",
        guideRef: "animal-vs-human",
        hints: [
          "What two coordinates do hive-mates need to fly to distant clover?",
          "Angle ↔ sun direction; duration ↔ distance.",
        ],
        strategy: "Decode waggle vector components",
      },
      {
        kind: "mcq",
        id: "language-development-m1-q15",
        question:
          "What overall conclusion emerges from great-ape communication studies such as **Washoe** (ASL signs) and **Kanzi** (Yerkish lexigrams)?",
        options: [
          "Apes cannot acquire semantic meaning for even a handful of visual symbols, responding solely to unconditioned food reflexes rather than learning sign associations",
          "Apes master open-ended recursive syntax and complex multi-clause grammar matching human ten-year-olds, spontaneously narrating abstract events from distant centuries",
          "Apes can acquire hundreds of meaningful symbols and understand simple word order, yet plateau around a two-year-old toddler's level without human recursive syntax",
          "Apes easily acquire fluent vocal spoken English pronunciation once raised in human homes, proving their vocal tracts are identical to human speech anatomy",
        ],
        answerIndex: 2,
        explanation:
          "Washoe and especially bonobo **Kanzi** (~350+ lexigrams) demonstrate genuine **semanticity** and simple 2–3 symbol combinations, **but** their output stays predominantly instrumental (food/play requests) and lacks open-ended **recursive human grammar**.",
        difficulty: "core",
        guideRef: "animal-vs-human",
        hints: [
          "Avoid both false extremes ('zero symbols' vs 'adult human grammar').",
          "Apes master vocabulary symbols well, but hit a syntactic ceiling around toddlerhood.",
        ],
        strategy: "Avoid extremes — state balanced empirical ceiling",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: CIE 0266 Novel Scenarios & Theoretical Debates
  // =========================================================================
  {
    id: "language-development-m2",
    title: "Language Development — MCQ Paper 2 (Scenario Application)",
    questions: [
      {
        kind: "mcq",
        id: "language-development-m2-q01",
        question:
          "Three-year-old Ravi tells his grandma: *'I **runned** fast and hurt both my **foots**!'* Grandma worries Ravi is picking up 'bad slang' from television. How should a psychology student reassure her?",
        options: [
          "Ravi is demonstrating semantic overextension — stretching familiar vocabulary labels too broadly across unrelated objects that share similar surface shapes or actions",
          "Ravi is demonstrating grammatical overregularisation — positive proof that he has extracted English past-tense (-ed) and plural (-s) rules rather than merely parroting adults",
          "Ravi is demonstrating telegraphic functor omission — dropping essential auxiliary verbs and articles because toddlers under four cannot yet string more than two words together",
          "Ravi is demonstrating semantic underextension — restricting irregular verbs and nouns too narrowly because he missed the early sensitive period for acquiring spoken English",
        ],
        answerIndex: 1,
        explanation:
          "*'Runned'* and *'foots'* are classic **grammatical overregularisations** in the multi-word stage (30+ months): no TV show models those forms, so they prove Ravi has actively discovered regular morphological rules!",
        difficulty: "core",
        guideRef: "stages-language-acquisition",
        hints: [
          "Notice the suffixes '-ed' on 'run' and '-s' on 'foot'.",
          "Why does applying regular grammar suffixes to irregular words refute mere imitation?",
        ],
        strategy: "Diagnose morphological rule extraction",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q02",
        question:
          "14-month-old Chloe says *'teddy'* **only** when holding her own worn brown bear, and stays silent when shown fuzzy toy bears in a toyshop. Which concept accurately labels Chloe's word use?",
        options: [
          "Semantic overextension in the multi-word stage",
          "Grammatical overregularisation of plurals",
          "Telegraphic functor omission",
          "Semantic underextension in the holophrastic stage",
        ],
        answerIndex: 3,
        explanation:
          "At 14 months (**holophrastic stage**), restricting the category word *'teddy'* **too narrowly** to one unique personal bear while excluding other toy bears is **semantic underextension**.",
        difficulty: "core",
        guideRef: "stages-language-acquisition",
        hints: [
          "Check age (14 months = holophrastic) and boundary width (too narrow = only one bear).",
          "Too narrow = underextension; too broad = overextension.",
        ],
        strategy: "Check category width (narrow vs broad)",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q03",
        question:
          "Why does a toddler's utterance *'Mummy isn't boy, he girl'* — followed by the mother smiling and replying *'That's right, darling!'* (**Brown & Hanlon, 1970**) — challenge **Skinner's Behaviourist Theory**?",
        options: [
          "It shows parents positively reinforce **factual truth** even when grammar is wrong, so operant reinforcement cannot explain how children eliminate grammatical errors",
          "It shows caregivers systematically punish every minor pronoun or syntax slip with scolding, leaving toddlers too anxious to attempt novel multi-word sentences",
          "It shows children learn accurate pronouns strictly through silent visual imitation of mothers' facial gestures rather than through spoken verbal feedback at home",
          "It shows toddlers in the two-word stage lack Piagetian object permanence, making them unable to distinguish between male and female family members until age five",
        ],
        answerIndex: 0,
        explanation:
          "If operant reinforcement stamped in grammar, praising *'he girl'* with *'That's right!'* should **strengthen** ungrammatical speech! Because parents reinforce truth rather than syntax yet children still master syntax, Chomsky's **poverty of the stimulus** critique gains support.",
        difficulty: "challenge",
        guideRef: "learning-behaviourist",
        hints: [
          "Look at what the mother rewarded: was 'he girl' grammatically right, or factually true?",
          "What would operant conditioning predict happens to an error when you praise it?",
        ],
        strategy: "Trace reinforcement contingency on grammar vs truth",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q04",
        question:
          "A deaf boy in rural Central America is not enrolled in a deaf school until **age 14**, whereas his younger deaf cousin joins at **age 5**. Based on **Senghas (1995)** and the **sensitive period hypothesis**, what outcome is predicted ten years later?",
        options: [
          "The boy who entered at age 14 will master subtle spatial verb inflections far more rapidly because adolescent formal-operational cognition speeds up implicit grammar acquisition",
          "Both cousins will achieve identical native-like spatial sign syntax within ten years, because Chomsky's Universal Grammar remains equally flexible at any age throughout adulthood",
          "The cousin who entered at age 5 will display native-like grammatical sign fluency, whereas the boy exposed at 14 will show persistent gaps in complex syntax despite learning vocabulary signs",
          "The boy exposed at age 14 will be completely unable to learn even basic individual vocabulary signs, because passing puberty shuts down both lexical memory and syntax acquisition",
        ],
        answerIndex: 2,
        explanation:
          "Both **Senghas (1995)** (<10 years vs >10 years entry in Nicaragua) and **Curtiss (1977, Genie)** show that vocabulary symbols can still be learned later, **but** full native **grammatical/morphological syntax** depends on exposure during the childhood **sensitive period**.",
        difficulty: "core",
        guideRef: "chomsky-nativist-lad",
        hints: [
          "Compare age 5 (<10 sensitive window) against age 14 (>10 post-puberty) in Senghas (1995).",
          "Separate vocabulary learning (still possible) from native grammatical inflection (sensitive period).",
        ],
        strategy: "Distinguish lexicon vs syntax in sensitive period",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q05",
        question:
          "A paediatric clinic advises new fathers: *'When your 9-month-old baby babbles, look over, smile warmly and touch their hand right away — don't stare at your phone and smile two minutes later!'* Which compulsory CIE 0266 study directly underpins this advice?",
        options: [
          "Senghas (1995) — Managua deaf cohorts",
          "Hewitt (2022) — early-years play cases",
          "Ochs & Schieffelin (1984) — Kaluli homes",
          "Goldstein, King & West (2003) — lab dyads",
        ],
        answerIndex: 3,
        explanation:
          "**Goldstein, King & West (2003)** showed with 8–10-month-olds that **immediate, contingent** silent smiling and touching right after infant vocalisations increased mature canonical babbling, whereas delayed/random (**non-contingent**) smiles did not.",
        difficulty: "warmup",
        guideRef: "learning-behaviourist",
        hints: [
          "Match 9-month-old babbling + immediate silent smile/touch vs delayed random smiles.",
          "Which 2003 lab experiment used 30 mother–infant dyads?",
        ],
        strategy: "Match clinical scenario to compulsory study",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q06",
        question:
          "In a nursery playroom, 20-month-old Amir spends twenty minutes wrapping toy cars inside silk scarves and peeking underneath while his key-worker narrates: *'Under the scarf… gone! Look, inside!'* Within days, Amir uses *'under'* and *'gone'* spontaneously. Which pair of theorists/studies **together** best explain Amir's rapid learning?",
        options: [
          "Skinner's operant conditioning shaping isolated phonemes + Goldstein, King & West (2003) on silent non-verbal maternal smiling",
          "Piaget / Hewitt (2022) on enveloping action schemas building concepts + Bruner's LASS adult scaffolding mapping words onto play",
          "Chomsky's strict innate LAD activating grammar automatically + Senghas (1995) showing adult language models are unnecessary",
          "Hockett's semantic displacement for absent events + von Frisch (1967) on genetically fixed spatial foraging signals in hives",
        ],
        answerIndex: 1,
        explanation:
          "Amir's repetitive wrapping play exemplifies an **enveloping/object-permanence schema** (**Piaget** & **Hewitt 2022**), while the practitioner's joint-attention narration provides **Bruner's LASS scaffolding** to attach relational vocabulary (*'under'*, *'gone'*) at the exact moment the concept is active!",
        difficulty: "core",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "Identify the repetitive wrapping play first: enveloping action schema (Piaget / Hewitt 2022).",
          "Identify the adult's responsive play narration: Bruner's LASS scaffolding.",
        ],
        strategy: "Combine Piagetian schema + Brunerian LASS",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q07",
        question:
          "18-month-old Farah calls both ladybirds and helicopters ***'buzz'*** because both fly overhead. After seeing a silent hot-air balloon float overhead and learning the word *'balloon'*, she restructures her mental categories into *living insects* versus *flying machines*. In **Piaget's theory**, the second step (restructuring and splitting her categories) is called:",
        options: [
          "Canonical reduplication",
          "Assimilation",
          "Accommodation",
          "Operant extinction",
        ],
        answerIndex: 2,
        explanation:
          "Fitting helicopters into her existing *'buzz'* schema was **assimilation**; **modifying and splitting** her mental schemas when new information no longer fits is **accommodation** (remember: a**cc**ommodate = **c**hange/**c**reate).",
        difficulty: "core",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "Use the mnemonic: aSSimilate = Same Schema; aCCommodate = Change/Create.",
          "Splitting one schema into two new categories = changing/creating schemas.",
        ],
        strategy: "Apply ASS vs ACC mnemonic",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q08",
        question:
          "When speaking to her 14-month-old son, Mrs Lim raises her pitch, slows down, stresses key nouns (*'Look at the BIG DOGGY!'*), and when her son says *'Doggy bark'*, she replies *'Yes, the doggy is barking!'* What are Mrs Lim's speech style and grammar-expanding reply called inside **Bruner's LASS**?",
        options: [
          "Poverty of the stimulus and negative punishment",
          "Telegraphic pidgin and lexical underextension",
          "Waggle modulation and homeostatic drive",
          "Child-Directed Speech (CDS) and recasting / expansion",
        ],
        answerIndex: 3,
        explanation:
          "Melodic, slower, exaggerated caregiver speech is **Child-Directed Speech (CDS / 'motherese')**, and repeating a toddler's telegraphic phrase back in full grammatical form (*'Doggy bark'* → *'Yes, the doggy is barking!'*) is **recasting / expansion** within **Bruner's LASS**.",
        difficulty: "core",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "What is the academic term for 'motherese/parentese'?",
          "Re-phrasing a child's 2-word sentence with full grammar = recasting/expansion.",
        ],
        strategy: "Identify LASS scaffolding features",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q09",
        question:
          "A kitten born in Tokyo and adopted by a family in Paris still miaows identically to Japanese cats, whereas a human infant born in Tokyo and adopted by Parisian parents grows up speaking fluent French with a Parisian accent. Which **Hockett design feature** does this contrast illustrate?",
        options: [
          "Cultural transmission",
          "Acoustic reflex arc",
          "Spatial waggle angle",
          "Object permanence",
        ],
        answerIndex: 0,
        explanation:
          "Cat miaows are genetically fixed across the species, whereas the specific human language code (French vs Japanese) is passed down socially via learning within a community — **cultural transmission** (which also explains why Bandura's imitation accounts for local language/accent!).",
        difficulty: "warmup",
        guideRef: "animal-vs-human",
        hints: [
          "Contrast DNA-fixed animal calls with socially learned human languages across generations.",
          "Check Hockett's four features: Semanticity, Displacement, Productivity, Cultural transmission.",
        ],
        strategy: "Compare innate call vs culturally learned code",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q10",
        question:
          "Scientists place a dish of sugar water directly on top of a **20-metre vertical tower** right above a beehive. Scout bees placed on the dish fly down and perform random circular dances, and **zero** hive-mates find the tower top. Which limitation of animal communication does this classic **von Frisch** test prove?",
        options: [
          "The honeybee waggle dance lacks spatial displacement altogether, meaning scout bees can never indicate food located out of direct sight of the hive",
          "The honeybee waggle dance is a closed, genetically restricted code lacking open-ended productivity to invent a novel signal for 'straight up'",
          "The honeybee waggle dance relies strictly on cultural transmission across generations, so scouts failed only because older bees had not taught them",
          "The honeybee waggle dance lacks semanticity entirely, proving that neither the angle nor duration of a dance conveys any specific foraging meaning",
        ],
        answerIndex: 1,
        explanation:
          "Because the waggle dance maps **horizontal** solar angles onto vertical comb, it has **no productive grammar** to coin a brand-new message (*'fly straight up'*), proving bee communication is a **closed system** lacking Hockett's **productivity**.",
        difficulty: "core",
        guideRef: "animal-vs-human",
        hints: [
          "If bee language had open-ended productivity like human speech, could a bee say 'look straight up'?",
          "Contrast closed genetic codes with open-ended productivity.",
        ],
        strategy: "Connect 'no word for up' to closed non-productive code",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q11",
        question:
          "A child with **Williams syndrome** struggles severely with Piagetian spatial/number conservation tasks (scoring an IQ around 55), yet speaks in rich, grammatically complex embedded sentences. Which theory is **most challenged** by this dissociation, and which theory gains **partial support**?",
        options: [
          "Challenges Piaget's claim that general cognitive development strictly precedes complex grammar; partially supports Chomsky's modular LAD",
          "Challenges Chomsky's claim of an innate modular LAD; partially supports Piaget's view that general spatial intelligence drives all syntax",
          "Challenges Skinner's claim that parents shape vocabulary through reinforcement; partially supports Piaget's preoperational conservation stage",
          "Challenges Bruner's claim that caregivers scaffold early words via LASS; partially supports von Frisch's genetically closed communication code",
        ],
        answerIndex: 0,
        explanation:
          "If general cognitive schemas were an absolute prerequisite for complex syntax (**Piaget**), severe cognitive delay should block complex grammar. Fluent syntax in **Williams syndrome** suggests grammar relies at least partly on a specialised module (**Chomsky's LAD**).",
        difficulty: "challenge",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "What would Piaget predict if general cognitive IQ is severely impaired?",
          "Seeing intact syntax alongside low spatial cognition points toward a relatively specialised language module (Chomsky).",
        ],
        strategy: "Use neuropsychological dissociation to test theories",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q12",
        question:
          "Hearing toddler *'Jim'* grew up with loving deaf parents who did not sign to him at home and instead let him watch hours of spoken English television daily. At age 3 years 9 months his spoken grammar was severely delayed, until live play sessions with a speech therapist rapidly unlocked fluent English. What does Jim's case show?",
        options: [
          "Passive audio input alone is not enough to trigger Chomsky's LAD — interactive two-way social scaffolding (Bruner's LASS) is vital",
          "Passive television speech alone triggers Chomsky's innate LAD fully, proving social turn-taking and caregiver scaffolding are unnecessary",
          "Missing interactive spoken input before age three closes the critical period permanently, preventing children from ever acquiring grammar",
          "Non-contingent background speech accelerates syntax better than contingent interaction, supporting Goldstein et al.'s yoked control group",
        ],
        answerIndex: 0,
        explanation:
          "Jim heard thousands of spoken English sentences on TV (plenty of acoustic stimulus), yet his **LAD** did not unlock syntax until paired with **live, contingent joint-attention interaction** — powerful support for **Bruner's LASS**!",
        difficulty: "challenge",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "TV gave Jim spoken words, but what couldn't a TV screen do when Jim pointed or spoke?",
          "Connect live turn-taking scaffolding to Bruner's LASS.",
        ],
        strategy: "Evaluate passive input vs interactive LASS",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q13",
        question:
          "In **Berko's (1958)** original study, **76%** of preschoolers (ages 4–5) and **97%** of first-graders (ages 6–7) correctly pluralised *'one wug'* to ***'two wugs'***. By how many **percentage points** did accuracy rise between preschoolers and first-graders?",
        options: [
          "19 percentage points",
          "21 percentage points",
          "27.6 percentage points",
          "173 percentage points",
        ],
        answerIndex: 1,
        explanation:
          "Percentage point gain = 97% − 76% = **21 percentage points**.",
        difficulty: "warmup",
        guideRef: "stages-language-acquisition",
        hints: [
          "Subtract 76 from 97.",
          "Note the question asks for *percentage points* (direct subtraction), not relative percentage change.",
        ],
        strategy: "Distinguish percentage points from % change",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q14",
        question:
          "Vervet monkeys emit a sharp bark when they spot a leopard **right now**, causing troop-mates to sprint up trees, but they never gather around at dusk to discuss a leopard they escaped last month or might meet next winter. Which **Hockett design feature** is present vs absent here?",
        options: [
          "Semanticity is present (specific call = leopard), but temporal displacement is absent",
          "Infinite syntactic productivity is present, but semanticity is absent",
          "Cultural transmission of written grammar is present, but hearing is absent",
          "Overregularisation of past-tense suffixes is present",
        ],
        answerIndex: 0,
        explanation:
          "Distinct alarm calls for leopards, eagles and snakes show clear **semanticity** (each signal stands for a specific predator), **but** being bound strictly to immediate present danger shows a lack of **displacement** across past and future time.",
        difficulty: "core",
        guideRef: "animal-vs-human",
        hints: [
          "Does the leopard call have a specific meaning? Yes → Semanticity.",
          "Can the monkeys talk about last month or next winter? No → lacks Displacement.",
        ],
        strategy: "Audit Hockett checklist item by item",
      },
      {
        kind: "mcq",
        id: "language-development-m2-q15",
        question:
          "How does a **bilingual** toddler raised in Singapore hearing both **English** at preschool and **Mandarin** from grandparents illustrate the partnership of **nature and nurture** in language?",
        options: [
          "Biological maturation (nature) determines which specific local words and accents the child speaks, while social scaffolding (nurture) forces bilingual toddlers to skip the holophrastic stage",
          "Innate biological readiness (Chomsky's LAD) supports both grammars on the universal milestone schedule, while social learning and LASS supply *which* two vocabularies and accents emerge",
          "Exposure to two environmental languages overloads Piagetian schemas and Chomsky's LAD equally, delaying babbling and telegraphic speech by several years until formal schooling begins",
          "Language is 100% environmental operant conditioning, so bilingual toddlers can only separate English from Mandarin when caregivers punish every mixed-language sentence during early play",
        ],
        answerIndex: 1,
        explanation:
          "Bilingual infants hit babbling, holophrastic (~12 m) and telegraphic (~24 m) milestones on the **same biological schedule** as monolinguals (**Chomsky's nature**), while **social interaction and modelling** (**Skinner/Bandura/Bruner's nurture**) supply the specific English and Mandarin lexicons.",
        difficulty: "core",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "What part of bilingual acquisition comes from biology (timing & syntax capacity) vs environment (specific languages)?",
          "Combine LAD + LASS/social learning.",
        ],
        strategy: "Synthesise Nature + Nurture",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: Research Methods, Data & Critical Evaluation in Language
  // =========================================================================
  {
    id: "language-development-m3",
    title: "Language Development — MCQ Paper 3 (Methods, Data & Evaluation)",
    questions: [
      {
        kind: "mcq",
        id: "language-development-m3-q01",
        question:
          "Why did **Goldstein, King & West (2003)** use a **yoked non-contingent control group** rather than a control group where mothers completely ignored their babies with stone-faced silence for 30 minutes?",
        options: [
          "Because stone-faced silence could distress infants AND would confound *contingent timing* with *total amount of maternal warmth/stimulation*",
          "Because yoked mothers were permitted to speak full Child-Directed Speech sentences, allowing researchers to test vocal imitation against silence",
          "Because using a yoked schedule converts an independent-measures lab study into a longitudinal repeated-measures design with zero participant variables",
          "Because silent stone-faced mothers would increase ecological validity too much, making acoustic spectrogram recording impossible inside the playroom",
        ],
        answerIndex: 0,
        explanation:
          "A yoked control delivers the **exact same number and duration of smiles/touches** (preventing infant distress from neglect and holding general arousal/affection constant), isolating **immediate contingency** as the true causal IV!",
        difficulty: "challenge",
        guideRef: "learning-behaviourist",
        hints: [
          "Think about BOTH internal validity (isolating timing vs total smiles) AND infant ethics (avoiding prolonged 'still-face' distress).",
          "What stayed equal between the two groups of 15 dyads?",
        ],
        strategy: "Evaluate yoked-control internal validity & ethics",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q02",
        question:
          "In **Goldstein, King & West (2003)**, mothers wore wireless headphones so researchers could cue exact response timing while keeping infant vocal coding objective. What **research method** and **setting** is this?",
        options: [
          "Covert naturalistic observation in a supermarket",
          "Controlled laboratory experiment",
          "Unstructured psychodynamic dream interview",
          "Secondary meta-analysis of census records",
        ],
        answerIndex: 1,
        explanation:
          "Manipulating an IV (contingent vs yoked non-contingent feedback) across 30 mother–infant dyads inside a standardised playroom equipped with audio/video recording and headphone cues is a **controlled laboratory experiment**.",
        difficulty: "warmup",
        guideRef: "learning-behaviourist",
        hints: [
          "Researchers manipulated an IV in a standardised playroom with wireless headphones.",
          "High control over extraneous variables = laboratory experiment.",
        ],
        strategy: "Classify study method & setting",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q03",
        question:
          "What is a valid **ecological validity** limitation of **Goldstein, King & West (2003)**?",
        options: [
          "In real family homes, caregivers almost *always* talk, coo and sing back verbally when smiling at a babbling baby — so silent headphone-cued smiling is somewhat artificial",
          "Because the study relied solely on naturalistic covert filming in noisy family supermarkets, extraneous background chatter ruined internal control over response timing",
          "Because mothers were instructed to repeat complex multi-word grammar rules aloud to 8-month-olds, the task failed to isolate silent non-verbal social reinforcement",
          "Because acoustic spectrograms and blind audio coders could not score syllable maturity objectively, the vocal data consisted purely of unverified parental diary notes",
        ],
        answerIndex: 0,
        explanation:
          "Forbidding mothers from speaking boosted **internal validity** (ruling out vocal imitation), **but** lowered **mundane realism / ecological validity** because real-world caregiver LASS responses naturally blend smiles, touch *and* child-directed speech.",
        difficulty: "core",
        guideRef: "learning-behaviourist",
        hints: [
          "Remember the trade-off in CIE Research Methods: tight lab control (silent mothers on headphones) vs natural everyday parenting!",
          "How do mothers normally respond at home when a baby babbles?",
        ],
        strategy: "Spot the Internal vs Ecological Validity trade-off",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q04",
        question:
          "Why is **Senghas's (1995)** Nicaraguan Sign Language study classified as a **natural / quasi-experiment** rather than a true laboratory experiment?",
        options: [
          "Because the IVs — year cohort of school entry and age at first exposure — occurred naturally in real life rather than being randomly assigned by the researcher",
          "Because Senghas collected strictly qualitative unstructured diaries and never quantified spatial verb inflections or grammatical modulations across age groups",
          "Because every deaf student completed both the early-entry (<10 years) and late-entry (>10 years) conditions in a counterbalanced repeated-measures design",
          "Because Senghas actively manipulated school-entry ages inside a university soundproofed laboratory while keeping control children isolated until adolescence",
        ],
        answerIndex: 0,
        explanation:
          "Researchers obviously could not ethically or practically hold deaf children in isolation to randomise age of exposure! Because **cohort** and **age at school entry** varied naturally, Senghas (1995) is a **natural / quasi-experiment**.",
        difficulty: "core",
        guideRef: "chomsky-nativist-lad",
        hints: [
          "Could Ann Senghas randomly assign a child to be born in 1970 vs 1983 or kept out of school until 12?",
          "Naturally occurring IV without random allocation = natural/quasi-experiment.",
        ],
        strategy: "Check random allocation of IV",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q05",
        question:
          "Why must psychologists interpret the tragic case study of **Genie (Curtiss, 1977)** with methodological caution when testing Chomsky's **critical period hypothesis**?",
        options: [
          "Because Genie was rescued at age six before puberty began and rapidly mastered complex adult syntax, her case actually disproves any sensitive period for language acquisition",
          "Severe abuse, malnutrition, trauma and attachment deprivation act as major confounding variables, so we cannot separate pure age effects from neurological or emotional damage",
          "Because Curtiss used a large cross-cultural sample of over 500 deaf children in California, individual qualitative detail about Genie's home environment was never documented",
          "Because single-participant case studies eliminate all extraneous variables and automatically achieve high population generalisability, Genie's outcome needs no replication",
        ],
        answerIndex: 1,
        explanation:
          "Single-participant **case studies** of extreme deprivation carry **confounding variables** (starvation, beatings, social trauma, possible pre-existing neurological differences) and **low population generalisability**, making **Senghas (1995)** (healthy, loved deaf children!) much cleaner evidence for the sensitive period.",
        difficulty: "challenge",
        guideRef: "chomsky-nativist-lad",
        hints: [
          "What else happened to Genie besides missing spoken language before 13½?",
          "Compare severely abused Genie with healthy, socially loved late-entry signers in Nicaragua.",
        ],
        strategy: "Identify confounding variables in extreme case studies",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q06",
        question:
          "What are **one key strength** and **one key limitation** of **Hewitt's (2022)** qualitative naturalistic case-study method for investigating child schemas and language?",
        options: [
          "Strength: Tight laboratory control proves direct cause-and-effect between play and words; Limitation: Artificial wireless headphone cues lower everyday mundane realism",
          "Strength: Large representative sample across multiple countries boosts population validity; Limitation: Rigid closed Likert scales miss rich qualitative play context",
          "Strength: Objective computer spectrograms eliminate all researcher subjectivity completely; Limitation: Counterbalanced repeated-measures trials cause toddler fatigue",
          "Strength: Rich, holistic, ecologically valid detail of natural play-to-word transitions; Limitation: Small sample limits generalisability and qualitative coding risks researcher subjectivity",
        ],
        answerIndex: 3,
        explanation:
          "In CIE Paper 2 Research Methods, **naturalistic qualitative case studies** (**Hewitt 2022**) excel at **ecological validity** and rich longitudinal insight into real play schemas, **but** sacrifice wide **population generalisability** and risk **subjective interpretation bias**.",
        difficulty: "core",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "Recall CIE Paper 2 strengths & weaknesses of qualitative case studies.",
          "Rich real-world play detail vs small sample + subjective coding.",
        ],
        strategy: "Evaluate qualitative case-study trade-offs",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q07",
        question:
          "Cross-cultural anthropologists **Ochs & Schieffelin (1984)** observed that caregivers among the Kaluli people of Papua New Guinea rarely use high-pitched baby-talk (**Child-Directed Speech**) directly to infants, yet Kaluli children still acquire full native language at the normal age. Which theory's claim is **moderated** by this finding?",
        options: [
          "It shows Motherese / CDS inside Bruner's LASS is a helpful *facilitator* rather than a strictly universal prerequisite for acquiring grammar",
          "It proves Kaluli children are honeybees in disguise",
          "It proves children can learn language locked in silent dark rooms with zero people around",
          "It refutes the existence of spoken nouns",
        ],
        answerIndex: 0,
        explanation:
          "Kaluli infants still grow up immersed in rich human social life, so language still emerges on schedule — showing exaggerated Western-style **Child-Directed Speech** *accelerates and scaffolds* vocabulary (**Bruner**), rather than being the *sole* route to syntax.",
        difficulty: "challenge",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "If Kaluli babies still learn full grammar without 'motherese' baby-talk, is CDS 100% essential or a helpful scaffold?",
          "Use cross-cultural evidence to nuance Bruner's LASS.",
        ],
        strategy: "Use cross-cultural evidence to refine a theory",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q08",
        question:
          "In **Goldstein, King & West (2003)**, **30 mother–infant dyads** were split equally between the contingent group and the yoked non-contingent control group. How many infants were in **each** condition, and why were acoustic properties measured with computer spectrograms alongside blind coders?",
        options: [
          "30 in each condition; blind coding and acoustic spectrograms ensure every infant experiences both conditions in a repeated-measures design",
          "15 in each condition; blind coding and acoustic spectrograms increase mundane realism by mimicking natural noisy home conversations",
          "15 in each condition; blind coding and acoustic measurements prevent investigator bias and raise objectivity/reliability",
          "10 in each condition; blind coding allows researchers to identify which mothers smiled most warmly so they can reward those babies",
        ],
        answerIndex: 2,
        explanation:
          "30 dyads ÷ 2 groups = **15 dyads per condition**. Using **blind coders** (unaware of whether an audio clip came from a contingent or control baby) plus acoustic parameters prevents **investigator / observer bias**.",
        difficulty: "core",
        guideRef: "learning-behaviourist",
        hints: [
          "Divide 30 dyads equally into 2 independent conditions.",
          "Why shouldn't the coder scoring 'syllable maturity' know which group the baby belonged to?",
        ],
        strategy: "Combine sample arithmetic + blind-coding control",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q09",
        question:
          "A developmental researcher records the number of distinct words spoken by **7 toddlers** aged 16 months: **18, 24, 15, 30, 24, 21, 98**. Which measure of central tendency best represents the **typical** toddler here without being distorted by the extreme **98-word** outlier, and what is its value?",
        options: [
          "Mean = 32.9 words",
          "Range = 83 words",
          "Median = 24 words",
          "Median = 30 words",
        ],
        answerIndex: 2,
        explanation:
          "When data contain an extreme **outlier** (98 words), the **mean** (32.9) is pulled sharply upward; the **median** resists outliers! Ordering the 7 values (**15, 18, 21, 24, 24, 30, 98**) puts the 4th (middle) value at **24 words**.",
        difficulty: "core",
        guideRef: "stages-language-acquisition",
        hints: [
          "Which average resists extreme outliers: mean or median?",
          "Sort all 7 numbers from smallest to largest and pick the 4th number!",
        ],
        strategy: "Choose median for skewed/outlier data & sort first",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q10",
        question:
          "When **Terrace et al. (1979)** scrutinised slow-motion videotapes of chimpanzee **Nim Chimpsky** signing with trainers, what methodological flaw undermined earlier claims that apes compose spontaneous human-like sentences?",
        options: [
          "Nim's trainers spoke English strictly through one-way mirrors while wearing loud music headphones, preventing Nim from seeing any human signing models to imitate",
          "Many of Nim's signs were unconscious **cued imitations** of the trainer's immediately preceding hand movements ('Clever Hans' cueing) paired with repetitive food-begging",
          "Nim suffered severe hearing loss during infancy and therefore failed to acquire even a single individual lexical sign across four years of behavioural training",
          "Nim mastered complex multi-clause past-tense grammar effortlessly, but trainers under-reported his fluency because they lacked inter-observer video checklists",
        ],
        answerIndex: 1,
        explanation:
          "Frame-by-frame video analysis showed trainers inadvertently prompted signs (**investigator / 'Clever Hans' cueing**), and Nim interrupted trainers to repeat random combinations (*'give orange me give eat orange'*) until handed food — operant conditioning rather than syntactic grammar! (Note: Savage-Rumbaugh later used double-blind headphone tests with **Kanzi** to avoid cueing.)",
        difficulty: "challenge",
        guideRef: "animal-vs-human",
        hints: [
          "Think of the 'Clever Hans' investigator-cueing effect in animal psychology.",
          "What did slow-motion video reveal Nim was watching right before signing?",
        ],
        strategy: "Spot subtle trainer cueing in animal studies",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q11",
        question:
          "To prove bonobo **Kanzi** genuinely understood novel spoken English sentences like *'Put the soap on the apple'* without reading facial/body cues, **Savage-Rumbaugh et al. (1993)** had the tester speak from behind a **one-way mirror** while caregivers in the room wore **loud music headphones**. Which threat to **internal validity** did this eliminate?",
        options: [
          "Participant attrition across multi-year longitudinal developmental cohorts",
          "Unconscious visual/gestural cueing (investigator effects / Clever Hans cues)",
          "Practice and fatigue order effects across repeated-measures testing blocks",
          "Self-report social desirability bias on anonymous caregiver questionnaires",
        ],
        answerIndex: 1,
        explanation:
          "Putting the speaker out of sight and masking in-room caregivers' hearing with headphones is a **double-blind / cue-eliminating control** ensuring Kanzi responded **purely to the spoken English syntax**, ruling out trainer pointing or glances!",
        difficulty: "core",
        guideRef: "animal-vs-human",
        hints: [
          "If caregivers in the room cannot hear the instruction, can they accidentally glance at the soap and apple?",
          "Link double-blind controls to eliminating investigator effects.",
        ],
        strategy: "Explain blind controls in animal comprehension",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q12",
        question:
          "A researcher wants to plot the relationship between **child age in months** (12 to 36 months) and **mean length of utterance (MLU)** in words across 25 toddlers. Which graph type is appropriate for two continuous **co-variables**?",
        options: [
          "Pie chart",
          "Bar chart with wide gaps between bars",
          "Scattergraph",
          "Pedigree family tree",
        ],
        answerIndex: 2,
        explanation:
          "Examining the correlation between **two continuous numerical co-variables** (age in months and mean length of utterance) requires plotting each toddler as a coordinate point on a **scattergraph**.",
        difficulty: "warmup",
        guideRef: "stages-language-acquisition",
        hints: [
          "Both age (months) and MLU (words) are continuous co-variables measured on each child.",
          "Which CIE graph plots pairs of co-variables to show correlation?",
        ],
        strategy: "Match co-variables to scattergraph",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q13",
        question:
          "In an ethical nursery observation of toddler action schemas (**Hewitt 2022** style), 18-month-olds cannot read or sign a consent form themselves. How must the researcher satisfy **CIE ethical guidelines** for **informed consent** and **right to withdraw**?",
        options: [
          "Obtain written consent from the nursery headteacher alone, and continue filming even if a toddler cries so that natural distress reactions remain intact in the dataset",
          "Obtain prior written informed consent from parents/legal guardians AND monitor the child's own non-verbal assent (stopping immediately if a toddler shows fussiness, crying or turns away)",
          "Film covertly without informing parents beforehand to prevent observer effects, then debrief the 18-month-old toddlers verbally at the end of the afternoon play session",
          "Rely solely on the child's verbal consent during play without contacting parents, and publish toddlers' full names alongside video stills to ensure research transparency",
        ],
        answerIndex: 1,
        explanation:
          "With infants and young children, ethical research requires **proxy parental/guardian informed consent** beforehand **plus** ongoing sensitivity to the child's behavioural distress cues to honour their **right to withdraw** and **protection from harm** (alongside anonymising identities).",
        difficulty: "core",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "Who gives legal informed consent for an 18-month-old?",
          "How does a pre-verbal toddler signal they want to 'withdraw' from a session?",
        ],
        strategy: "Apply DRIP child-ethics rules",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q14",
        question:
          "In **Senghas's (1995)** Nicaraguan study, suppose **Early-exposed Cohort 2** signers produced a mean of **2.8 grammatical modulations per verb**, while **Late-exposed (>10 yrs)** signers produced **1.4 modulations per verb**. Express Early Cohort 2's score as a **percentage** of Late signers' score.",
        options: [
          "50%",
          "100%",
          "140%",
          "200%",
        ],
        answerIndex: 3,
        explanation:
          "(2.8 ÷ 1.4) × 100 = 2 × 100 = **200%** (Early Cohort 2 produced **twice** as many grammatical modulations per verb — a 100% *increase*, or 200% *of* the late signers' score).",
        difficulty: "core",
        guideRef: "chomsky-nativist-lad",
        hints: [
          "Read carefully: 'as a percentage OF Late signers' score' means (Early ÷ Late) × 100.",
          "Divide 2.8 by 1.4, then multiply by 100.",
        ],
        strategy: "Distinguish 'A as % of B' vs '% increase'",
      },
      {
        kind: "mcq",
        id: "language-development-m3-q15",
        question:
          "Which overarching evaluative conclusion best resolves the **nature vs nurture debate** in CIE 0266 Language Development?",
        options: [
          "Pure nativism is strongest: innate Universal Grammar (Chomsky's LAD) automatically generates fluent spoken English and local vocabulary by age three even when children receive zero interactive human input",
          "Pure behaviourism is strongest: language is 100% operant shaping and imitation (Skinner), meaning chimpanzees and infants alike develop full recursive syntax solely through adult reinforcement of every word",
          "An interactionist synthesis is strongest: innate biological readiness (LAD & sensitive period — Senghas 1995) combines with cognitive schemas (Piaget/Hewitt 2022) and contingent social scaffolding (Goldstein 2003; Bruner's LASS) to build fluent language",
          "Pure Piagetian maturation is strongest: general non-verbal spatial conservation alone creates human syntax automatically, proving neither innate grammar modules nor caregiver scaffolding contribute to language",
        ],
        answerIndex: 2,
        explanation:
          "Pure Nativism overlooks social contingency (**Goldstein et al. 2003**, *Jim*), while pure Behaviourism fails on novel rules (**Berko's wugs**, **Senghas 1995**). Combining innate **LAD** readiness, **Piagetian** conceptual schemas and **Bruner's LASS** provides the most complete scientific account.",
        difficulty: "core",
        guideRef: "piaget-bruner-cognitive",
        hints: [
          "Why do both 100%-nature and 100%-nurture extremes fail empirically?",
          "Look for the interactionist synthesis uniting Senghas, Piaget/Hewitt, Goldstein and Bruner.",
        ],
        strategy: "Synthesise Nature × Cognition × Social Nurture",
      },
    ],
  },
];
