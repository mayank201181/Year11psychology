import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "prosocial-behaviour-quiz-q01",
      question:
        "What subtype of prosocial behaviour describes helping motivated **purely** by concern for another person's welfare at a personal cost, with zero expectation of external or internal reward?",
      answer: {
        type: "text",
        accept: ["altruism", "pure altruism", "true altruism", "altruistic behaviour", "altruistic behavior"],
      },
      solution: [
        "Prosocial behaviour is the broad category of any voluntary helpful act; **altruism** is the specific unselfish subtype with zero expected personal gain.",
      ],
      traps: [
        {
          spec: { type: "text", accept: ["empathy", "empathic concern"] },
          feedback: "Empathy is the emotional feeling — name the unselfish *helping behaviour* itself!",
        },
      ],
      difficulty: "warmup",
      guideRef: "bystander-apathy",
      hints: ["Starts with 'A' — contrasts with egoistic helping."],
    },
    {
      kind: "short",
      id: "prosocial-behaviour-quiz-q02",
      question:
        "In **Latané & Darley's (1968)** intercom seizure study, what **percentage** of participants reported the emergency within 6 minutes when they believed **4 other bystanders** were also listening?",
      answer: { type: "number", value: 31 },
      solution: [
        "Helping rates across perceived group sizes were 85% (0 other bystanders), 62% (1 other bystander), and **31%** (4 other bystanders).",
      ],
      traps: [
        {
          spec: { type: "number", value: 85 },
          feedback: "85% was the solo condition (0 other bystanders) — give the 6-person group rate (4 other bystanders).",
        },
        {
          spec: { type: "number", value: 62 },
          feedback: "62% was the 3-person condition (1 other bystander) — give the 6-person group rate.",
        },
      ],
      difficulty: "warmup",
      guideRef: "bystander-apathy",
      hints: ["Remember the sequence: 85% → 62% → ?%."],
    },
    {
      kind: "mcq",
      id: "prosocial-behaviour-quiz-q03",
      question:
        "Shoppers smell burning plastic near an escalator, look at nearby shoppers who keep browsing calmly, and decide nothing is wrong. Which specific barrier is operating?",
      options: [
        "Pluralistic ignorance at Step 2",
        "Diffusion of responsibility at Step 3",
        "Lack of first-aid competence at Step 4",
        "Reciprocal altruism",
      ],
      answerIndex: 0,
      explanation:
        "Relying on other bystanders' calm expressions to misinterpret an ambiguous situation as safe is pluralistic ignorance at Step 2 of Latané & Darley's model.",
      difficulty: "core",
      guideRef: "bystander-apathy",
      hints: [
        "Did shoppers fail to assume duty for a known fire, or did they conclude there was *no* fire?",
        "Step 2 vs Step 3!",
      ],
    },
    {
      kind: "short",
      id: "prosocial-behaviour-quiz-q04",
      question:
        "In **Piliavin et al.'s (1969)** New York subway field experiment, what was the **median response latency in seconds** before commuters spontaneously helped the ill **cane** victim?",
      answer: { type: "number", value: 5 },
      solution: [
        "On the 62 of 65 cane trials (95%) with spontaneous help before 70 s, the median time taken to assist was just **5 seconds** (compared with 109 seconds for the drunk victim).",
      ],
      traps: [
        {
          spec: { type: "number", value: 70 },
          feedback: "70 seconds was when the collapse occurred (and when the early model waited to act) — median commuter help took just 5 seconds!",
        },
        {
          spec: { type: "number", value: 95 },
          feedback: "95% was the percentage of cane trials helped — the question asks for median latency in seconds.",
        },
      ],
      difficulty: "core",
      guideRef: "cost-reward-piliavin",
      hints: [
        "Use the mnemonic: 'Cane 95 in __; Drunk 50 in 109'.",
        "It was remarkably fast — a single-digit number of seconds!",
      ],
    },
    {
      kind: "short",
      id: "prosocial-behaviour-quiz-q05",
      question:
        "In **Levine et al.'s (2001)** 23-city helping study, what Spanish cultural term describes the Latin American norm of warmth, politeness, and interpersonal harmony linked to top helping rates in Rio de Janeiro and San José?",
      answer: {
        type: "text",
        accept: ["simpatia", "simpatía"],
      },
      solution: [
        "Levine et al. (2001) identified cultural **simpatía** (valuing friendliness, social harmony, and helpfulness toward strangers) as a key predictor of high urban helping.",
      ],
      commonError: "Writing collectivism or empathy instead of Levine et al.'s specific Latin American cultural script simpatia.",
      difficulty: "core",
      guideRef: "cost-reward-piliavin",
      hints: [
        "It resembles the English word 'sympathy' and starts with 'simp-'.",
        "Nine letters in Spanish: s-i-m-p-a-t-í-a.",
      ],
    },
    {
      kind: "short",
      id: "prosocial-behaviour-quiz-q06",
      question:
        "According to **Hamilton's (1964)** kin selection theory, what is the decimal **coefficient of genetic relatedness ({{r}})** between two **first cousins**?",
      answer: { type: "number", value: 0.125 },
      solution: [
        "Full siblings = 0.50; aunts/uncles/grandparents/half-siblings = 0.25; first cousins = {{1/8}} = **0.125**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 0.25 },
          feedback: "0.25 applies to aunts, uncles, grandparents, and half-siblings — halve it once more for first cousins!",
        },
      ],
      difficulty: "core",
      guideRef: "biological-evolutionary",
      hints: [
        "Halve outward: sibling 0.5 → aunt/uncle 0.25 → first cousin ?",
        "Express 1/8 as a decimal.",
      ],
    },
    {
      kind: "mcq",
      id: "prosocial-behaviour-quiz-q07",
      question:
        "In **Rushton et al. (1986)**, monozygotic (MZ) adult twins correlated at roughly **0.53** on self-reported altruism compared with **0.25** for same-sex dizygotic (DZ) twins. What does this primarily indicate?",
      options: [
        "Individual differences in altruism are 100% genetically determined with zero environmental influence.",
        "Additive genetic inheritance accounts for roughly 50% of variance in altruism, alongside roughly 50% unique non-shared environment.",
        "Shared family upbringing accounts for 80% of adult altruism.",
        "Postal questionnaires completely eliminate social desirability bias.",
      ],
      answerIndex: 1,
      explanation:
        "Because MZ twins (100% shared genes) were roughly twice as similar as DZ twins (~50% shared genes), biometric analysis attributed ~50% of variance to genetics and ~50% to non-shared unique environment.",
      difficulty: "core",
      guideRef: "biological-evolutionary",
      hints: [
        "Compare MZ (1.0) vs DZ (0.5) correlations using Rushton's 50% / 0% / 50% split.",
        "Avoid extreme '100% genetic' reductionist claims!",
      ],
    },
    {
      kind: "short",
      id: "prosocial-behaviour-quiz-q08",
      question:
        "In **Bandura's Social Learning Theory**, what two-word term describes becoming more motivated to help after watching a **role model** receive praise or reward for helping?",
      answer: {
        type: "text",
        accept: ["vicarious reinforcement", "indirect reinforcement"],
      },
      solution: [
        "**Vicarious reinforcement** occurs when an observer sees a model positively reinforced for prosocial behaviour, strengthening the observer's motivation to imitate it.",
      ],
      traps: [
        {
          spec: { type: "text", accept: ["positive reinforcement", "direct reinforcement"] },
          feedback: "Direct positive reinforcement rewards the learner directly — what word means learning via a *model's* reward?",
        },
      ],
      difficulty: "core",
      guideRef: "empathy-social-learning",
      hints: [
        "First word starts with 'V' (meaning experienced through watching someone else).",
        "Second word is 'reinforcement'.",
      ],
    },
    {
      kind: "short",
      id: "prosocial-behaviour-quiz-q09",
      question:
        "In **Prot et al. (2014)** Study 2, **3,034** school children and adolescents were tracked across 3 waves over 2 years in which country?",
      answer: {
        type: "text",
        accept: ["singapore", "republic of singapore"],
      },
      solution: [
        "Study 1 surveyed 11,783 youths across 7 countries, while Study 2 tracked **3,034 youths in Singapore** across 3 waves over 2 years.",
      ],
      commonError: "Naming Japan or the USA (Study 1 cross-sectional countries) instead of Singapore, where Prot et al. (2014) ran their 2-year longitudinal Study 2.",
      difficulty: "warmup",
      guideRef: "media-parental-influences",
      hints: ["It is the Southeast Asian island city-state right where Tanglin Trust School is located!"],
    },
    {
      kind: "written",
      id: "prosocial-behaviour-quiz-q10",
      question:
        "Distinguish between **Hoffman's inductive discipline** and **power assertion** as parental methods for encouraging helpful behaviour in children. [2 marks]",
      marks: 2,
      modelAnswer:
        "Inductive reasoning explains to the child how their actions affect another person's feelings, fostering perspective-taking and internalised empathy. In contrast, power-assertive parenting relies on threats, shouting, or punishment, which produces only temporary external compliance driven by fear when adults are watching.",
      markScheme: [
        {
          point: "Inductive discipline explains impact on the victim's feelings / builds perspective-taking and internalised empathy",
          keywords: ["feelings", "perspective", "empathy", "internalised", "internalized", "victim", "impact"],
        },
        {
          point: "Power assertion uses punishment/threats, creating fear and external compliance only under surveillance",
          keywords: ["punishment", "punish", "threats", "threat", "fear", "compliance", "external"],
        },
      ],
      commonError: "Describing inductive discipline vaguely as 'being nice' without mentioning explaining consequences for the other person's feelings.",
      difficulty: "core",
      guideRef: "media-parental-influences",
      hints: [
        "Define what a parent actually *says* during inductive reasoning (focusing on the peer's feelings).",
        "Contrast that with threats/punishment and why compliance fades when unsupervised.",
      ],
      strategy: "Contrast both halves with 'In contrast'",
    },
  ],
  papers: [
    {
      id: "prosocial-behaviour-p1",
      title: "Practice Paper 1: Bystander Decisions, Subway Field Data & Kin Selection",
      questions: [
        {
          kind: "short",
          id: "prosocial-behaviour-p1-q01",
          question:
            "In **Latané & Darley's (1968)** intercom seizure experiment, **85%** of participants helped when they believed 0 other bystanders heard the seizure, compared with **62%** when 1 other bystander was believed present. Calculate the **percentage-point decrease** between these two conditions.",
          answer: { type: "number", value: 23 },
          solution: [
            "Solo condition (0 other bystanders) = 85%.",
            "3-person condition (1 other bystander) = 62%.",
            "85% − 62% = **23 percentage points**.",
          ],
          traps: [
            {
              spec: { type: "number", value: 54 },
              feedback: "54 percentage points is the drop from 85% to 31% (4 other bystanders) — subtract 62% from 85%.",
            },
          ],
          difficulty: "warmup",
          guideRef: "bystander-apathy",
          hints: ["Subtract 62 from 85."],
          strategy: "Read exact condition pair",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p1-q02",
          question:
            "State the **third step** of **Latané & Darley's (1970)** 5-step cognitive decision model (immediately after interpreting the event as an emergency).",
          answer: {
            type: "text",
            accept: [
              "assume personal responsibility",
              "assume responsibility",
              "assuming personal responsibility",
              "assuming responsibility",
              "accept personal responsibility",
              "accept responsibility",
              "accepting personal responsibility",
              "accepting responsibility",
              "take personal responsibility",
              "take responsibility",
              "taking personal responsibility",
              "taking responsibility",
              "personal responsibility",
              "responsibility",
            ],
          },
          solution: [
            "1. Notice event → 2. Interpret as emergency → **3. Assume personal responsibility** → 4. Know how to help → 5. Implement help.",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["diffusion of responsibility"] },
              feedback: "Diffusion of responsibility is the *barrier* that blocks Step 3 — name the positive decision step itself!",
            },
          ],
          difficulty: "warmup",
          guideRef: "bystander-apathy",
          hints: ["Use N-I-R-K-I: what does 'R' stand for?"],
          strategy: "Step vs barrier distinction",
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p1-q03",
          question:
            "Rohan is studying in a busy sixth-form common room with 14 other students when he hears someone groaning inside an adjacent locked toilet cubicle. Nobody looks worried, so Rohan puts his headphones back on and assumes the school nurse or a prefect will check later. Using **two named concepts** from **Latané & Darley**, explain why Rohan did not intervene. [4 marks]",
          marks: 4,
          modelAnswer:
            "First, pluralistic ignorance blocked Step 2 (interpreting the event as an emergency): because the situation was ambiguous behind a closed door, Rohan scanned his calm peers' faces and wrongly inferred the groaning was harmless rather than a medical crisis. Second, diffusion of responsibility blocked Step 3: with 15 witnesses sharing the obligation, Rohan's perceived personal duty dropped to a tiny fraction, making it easy to shift the burden onto a senior prefect or nurse.",
          markScheme: [
            {
              point: "Identifies pluralistic ignorance at Step 2 (interpreting ambiguous event)",
              keywords: ["pluralistic ignorance", "step 2", "interpret"],
            },
            {
              point: "Applies pluralistic ignorance to stem: hidden/ambiguous cubicle sound + reading calm peers as non-emergency",
              keywords: ["calm", "ambiguous", "harmless", "crisis", "emergency", "faces"],
            },
            {
              point: "Identifies diffusion of responsibility at Step 3",
              keywords: ["diffusion of responsibility", "step 3", "shared", "divided"],
            },
            {
              point: "Applies diffusion to stem: 15 people / tiny personal fraction of duty shifted away from himself",
              keywords: ["15", "fraction", "shared", "obligation", "duty", "burden"],
            },
          ],
          commonError: "Naming both terms accurately for 2 marks, but losing both AO2 marks by failing to link them to the calm peers and the 14 other sixth-formers.",
          difficulty: "core",
          guideRef: "bystander-apathy",
          hints: [
            "Link 'nobody looks worried' to Step 2 (**pluralistic ignorance**).",
            "Link '14 other students / assumes someone else will check' to Step 3 (**diffusion of responsibility**).",
          ],
          strategy: "Name concept + link to stem (2+2)",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p1-q04",
          question:
            "In **Piliavin et al. (1969)**, spontaneous help before 70 seconds occurred on **19 out of 38** drunk-victim trials. Express this spontaneous helping rate as a **percentage**.",
          answer: { type: "number", value: 50 },
          solution: ["(19 ÷ 38) × 100 = 0.5 × 100 = **50%**."],
          traps: [
            {
              spec: { type: "number", value: 95 },
              feedback: "95% (62/65) was for the cane victim — calculate 19 ÷ 38 as a percentage for the drunk victim.",
            },
          ],
          difficulty: "warmup",
          guideRef: "cost-reward-piliavin",
          hints: ["19 is exactly half of 38."],
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p1-q05",
          question:
            "According to **Piliavin's Cost–Reward Matrix**, when **both** the cost of helping and the cost of not helping are **high**, by what two-word psychological defence can a bystander lower their guilt without intervening?",
          answer: {
            type: "text",
            accept: [
              "cognitive reinterpretation",
              "reinterpreting situation",
              "victim blaming",
              "situational reinterpretation",
            ],
          },
          solution: [
            "Bystanders use **cognitive reinterpretation** — convincing themselves the emergency is minor or that the victim brought it upon themselves — to lower the cost of not helping.",
          ],
          commonError: "Saying bystanders simply walk away calmly — when NOT helping also carries high guilt/cost, Piliavin predicts cognitive reinterpretation (blaming the victim or minimizing need).",
          difficulty: "core",
          guideRef: "cost-reward-piliavin",
          hints: [
            "First word is 'cognitive' (a mental reframing).",
            "Second word starts with 'reinterp-' (changing the meaning of the situation).",
          ],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p1-q06",
          question:
            "Evaluate **Piliavin, Rodin & Piliavin's (1969)** New York subway study in terms of **one methodological strength** and **two ethical weaknesses**. [3 marks]",
          marks: 3,
          modelAnswer:
            "A major strength is high ecological validity and absence of demand characteristics: commuters on a real express subway did not know they were being observed, so their 5-second helping responses were completely natural. However, ethically, the 4,450 passengers never gave informed consent to participate in a distressing staged collapse. Furthermore, commuters had zero right to withdraw for 7.5 minutes on a non-stop express train and could never be debriefed afterwards.",
          markScheme: [
            {
              point: "Strength: high ecological validity / mundane realism / zero demand characteristics due to covert naturalistic setting",
              keywords: ["ecological validity", "mundane realism", "demand characteristics", "natural", "covert"],
            },
            {
              point: "Ethical issue 1: lack of informed consent (and/or deception causing distress)",
              keywords: ["informed consent", "consent", "deception", "deceived"],
            },
            {
              point: "Ethical issue 2: inability to withdraw from moving express carriage and/or lack of debriefing",
              keywords: ["withdraw", "debrief", "debriefed", "debriefing", "trapped"],
            },
          ],
          commonError: "Listing three ethical issues and forgetting the methodological strength asked for in the stem.",
          difficulty: "core",
          guideRef: "cost-reward-piliavin",
          hints: [
            "Why does covert observation on a real train boost validity?",
            "Think about consent, leaving a non-stop express carriage, and debriefing 4,450 strangers.",
          ],
          strategy: "Match mark allocation (1 strength + 2 ethics)",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p1-q07",
          question:
            "In **Levine et al. (2001)**, how many **cities** worldwide were compared using dropped-pen, hurt-leg, and blind-pedestrian field tests?",
          answer: { type: "number", value: 23 },
          solution: [
            "Levine, Norenzayan & Philbrick (2001) conducted field tests of stranger helping across **23 large cities** worldwide.",
          ],
          traps: [
            {
              spec: { type: "number", value: 7 },
              feedback: "7 countries belongs to Prot et al. (2014) Study 1 — Levine et al. tested 23 cities!",
            },
          ],
          difficulty: "core",
          guideRef: "cost-reward-piliavin",
          hints: [
            "It was just over twenty major cities across Latin America, Asia, Europe, Africa, and North America.",
            "Exact integer in the low twenties: 2_.",
          ],
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p1-q08",
          question:
            "Using **Hamilton's Rule** ({{r * B > C}}), a woman donates a kidney to her **maternal aunt** ({{r = 0.25}}), giving her aunt a survival benefit of **{{B = 1.6}}** at a donor fitness cost of **{{C = 0.30}}**. Calculate the value of **{{r * B}}**.",
          answer: { type: "number", value: 0.4 },
          solution: [
            "r × B = 0.25 × 1.6 = **0.4** (since 0.4 > 0.30, Hamilton's Rule predicts kin selection favours this donation).",
          ],
          traps: [
            {
              spec: { type: "number", value: 0.1 },
              feedback: "0.10 is r × B − C (the net surplus); the question asks strictly for r × B!",
            },
            {
              spec: { type: "number", value: 0.8 },
              feedback: "You used r = 0.50 (full sibling) instead of r = 0.25 (aunt).",
            },
          ],
          difficulty: "core",
          guideRef: "biological-evolutionary",
          hints: [
            "Multiply 0.25 by 1.6.",
            "One quarter of 1.6 is 0.4.",
          ],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p1-q09",
          question:
            "Explain how **Trivers's (1971) reciprocal altruism** accounts for helping between **unrelated** classmates (`r = 0`), including **two conditions** necessary for it to evolve. [3 marks]",
          marks: 3,
          modelAnswer:
            "Reciprocal altruism proposes that natural selection favours helping non-relatives when the immediate cost to the donor is outweighed by the likelihood of receiving valuable returned help in the future ('you scratch my back, I'll scratch yours'). First, individuals must interact repeatedly over time in a stable group so favours can be repaid. Second, individuals must possess cognitive memory to detect and stop helping 'cheaters' (free-riders) who take benefits without reciprocating.",
          markScheme: [
            {
              point: "Defines mutual exchange where future returned benefit exceeds immediate cost of helping",
              keywords: ["future", "return", "returned", "repay", "repaid", "mutual", "cost"],
            },
            {
              point: "Condition 1: repeated interactions / ongoing contact in a stable social group",
              keywords: ["repeated", "ongoing", "again", "stable", "frequent"],
            },
            {
              point: "Condition 2: ability to recognise/punish/exclude cheaters or free-riders",
              keywords: ["cheater", "cheaters", "free-rider", "free-riders", "exploit", "punish", "shun"],
            },
          ],
          commonError: "Mentioning shared genes (kin selection) when the question explicitly specifies r = 0!",
          difficulty: "core",
          guideRef: "biological-evolutionary",
          hints: [
            "Why does helping a non-relative pay off over time?",
            "What two group/cognitive conditions stop selfish classmates from exploiting generous ones?",
          ],
          strategy: "Define + state two evolutionary conditions",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p1-q10",
          question:
            "How many **adult twin pairs** participated in **Rushton et al.'s (1986)** postal questionnaire study of altruism and empathy?",
          answer: { type: "number", value: 573 },
          solution: [
            "Rushton et al. (1986) analysed postal self-report questionnaires from **573 adult twin pairs** (296 MZ, 179 same-sex DZ, plus opposite-sex DZ pairs).",
          ],
          traps: [
            {
              spec: { type: "number", value: 296 },
              feedback: "296 was only the monozygotic (identical) twin pairs — give the total across all twin pairs (573).",
            },
          ],
          difficulty: "core",
          guideRef: "biological-evolutionary",
          hints: [
            "Between 550 and 600 twin pairs from the University of London Twin Register.",
            "Exact three-digit number: 57_.",
          ],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p1-q11",
          question:
            "Compare **Latané & Darley (1968)** and **Piliavin et al. (1969)** on **research method** and **internal validity**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Methodologically, Latané & Darley conducted a controlled laboratory experiment in university cubicles, whereas Piliavin et al. conducted a naturalistic field experiment on public subway carriages. Consequently, Latané & Darley achieved much higher internal validity because participants were randomly allocated to group sizes and heard an identical pre-recorded seizure tape, eliminating extraneous visual cues. Conversely, Piliavin et al. had lower internal control over extraneous variables — such as natural fluctuations in passenger numbers, train noise, or prior medical training — making strict causal control harder.",
          markScheme: [
            {
              point: "Identifies Latané & Darley as a controlled laboratory experiment",
              keywords: ["laboratory", "lab experiment", "cubicles"],
            },
            {
              point: "Identifies Piliavin et al. as a naturalistic field experiment",
              keywords: ["field experiment", "subway", "commuters"],
            },
            {
              point: "Explains Latané & Darley's higher internal validity via random allocation / standardised pre-recorded tape",
              keywords: ["random", "standardised", "standardized", "pre-recorded", "recorded", "tape"],
            },
            {
              point: "Explains Piliavin's lower control over extraneous variables (uncontrolled crowd size, noise, passenger traits)",
              keywords: ["extraneous", "uncontrolled", "noise", "fluctuat", "confound"],
            },
          ],
          commonError: "Describing each study in separate paragraphs without explicitly contrasting both on the two requested dimensions.",
          difficulty: "core",
          guideRef: "bystander-apathy",
          hints: [
            "State the exact experimental method used by each study first.",
            "Then contrast pre-recorded standardisation + random allocation against uncontrolled subway variables.",
          ],
          strategy: "Point-by-point comparative structure",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p1-q12",
          question:
            "In **Darley & Batson's (1973)** Good Samaritan hurry experiment, only **10%** of seminary students helped when in a **high hurry**, compared with **63%** in a **low hurry**. Calculate the **percentage-point drop** caused by high time pressure.",
          answer: { type: "number", value: 53 },
          solution: ["63% − 10% = **53 percentage points**."],
          commonError: "Giving the unhurried rate (63%) or medium-hurry rate (45%) instead of subtracting 63% − 10% = 53 percentage points.",
          difficulty: "warmup",
          guideRef: "cost-reward-piliavin",
          hints: ["Subtract 10 from 63."],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p1-q13",
          question:
            "On a rainy evening, Anya walks past two collapsed men on separate streets: first, an elderly man holding a white mobility cane; ten minutes later, a man shouting slurs beside an empty vodka bottle. Anya immediately helps the first man into a shelter but crosses the street away from the second. Explain Anya's contrasting behaviour using **Piliavin's Arousal–Cost–Reward Model**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Witnessing both collapses triggers unpleasant physiological arousal that Anya is motivated to reduce. For the man with the mobility cane, the cost of helping is low (he appears safe and cooperative) while the cost of not helping is high (strong empathic guilt and social disapproval if an innocent disabled person is abandoned), leading to direct intervention. For the intoxicated man shouting slurs, the cost of helping is high (risk of aggression, embarrassment, or disgust). Simultaneously, the cost of not helping is low because Anya attributes personal blame to him for drinking, making crossing the street the least costly way to reduce her arousal.",
          markScheme: [
            {
              point: "States both emergencies cause unpleasant physiological arousal motivating arousal reduction",
              keywords: ["arousal", "physiological", "unpleasant", "reduce"],
            },
            {
              point: "Cane victim: low cost of helping + high cost of not helping (empathy/guilt) → direct help",
              keywords: ["guilt", "empathic", "empathy", "innocent", "direct"],
            },
            {
              point: "Vodka/shouting victim: high cost of helping (danger/aggression/embarrassment/disgust)",
              keywords: ["danger", "risk", "aggression", "embarrassment", "disgust", "unpredictable"],
            },
            {
              point: "Vodka/shouting victim: low cost of not helping because victim is blamed / held responsible for own state",
              keywords: ["blame", "blamed", "fault", "responsible", "deserve"],
            },
          ],
          commonError: "Explaining only the high danger of the drunk man while omitting why Anya feels *less guilt* (low cost of not helping via blame attribution).",
          difficulty: "core",
          guideRef: "cost-reward-piliavin",
          hints: [
            "Start with unpleasant **physiological arousal**.",
            "Compare BOTH **cost of helping** AND **cost of not helping** across the two men!",
          ],
          strategy: "Cover arousal + both axes for both victims",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p1-q14",
          question:
            "What **percentage** of spontaneous first helpers in **Piliavin et al.'s (1969)** New York subway study were **male**?",
          answer: { type: "number", value: 90 },
          solution: [
            "Even though men comprised roughly 60% of carriage passengers, **90%** of spontaneous first helpers were male (reflecting lower physical lifting cost and protective gender norms).",
          ],
          traps: [
            {
              spec: { type: "number", value: 60 },
              feedback: "60% was the approximate proportion of men riding the carriage — 90% of actual first helpers were male!",
            },
          ],
          difficulty: "core",
          guideRef: "cost-reward-piliavin",
          hints: [
            "Nine out of every ten first helpers were men.",
            "Give as a percentage out of 100.",
          ],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p1-q15",
          question:
            "Explain **one strength** and **one limitation** of **biological/evolutionary explanations** of prosocial behaviour. [4 marks]",
          marks: 4,
          modelAnswer:
            "One strength is strong empirical twin support: Rushton et al. (1986) studied 573 adult twin pairs and found monozygotic twins correlated roughly twice as strongly on altruism and empathy (r ≈ 0.53) as dizygotic twins (r ≈ 0.25), indicating around 50% genetic heritability. However, a key limitation is biological reductionism: kin selection (r × B > C) and reciprocal altruism cannot adequately explain anonymous, high-risk sacrifices for complete strangers (such as rescuing an unknown child from a fire when r = 0 and no future repayment is possible), showing cognitive empathy and learned moral norms are also essential.",
          markScheme: [
            {
              point: "Strength: identifies twin or cross-cultural kin evidence (e.g. Rushton et al. 1986 MZ vs DZ correlations)",
              keywords: ["rushton", "twin", "monozygotic", "mz", "madsen", "burnstein"],
            },
            {
              point: "Develops strength with specific detail (~50% heritability / MZ 0.53 vs DZ 0.25 / r × B > C life-or-death priority)",
              keywords: ["50%", "0.53", "0.25", "573", "twice", "double", "heritability"],
            },
            {
              point: "Limitation: identifies biological reductionism / determinism or inability to explain anonymous stranger altruism",
              keywords: ["reductionism", "reductionist", "stranger", "strangers", "anonymous"],
            },
            {
              point: "Develops limitation: explains why r = 0 + no future reciprocity requires cognitive empathy or social norms",
              keywords: ["r = 0", "repay", "reciprocity", "norms", "empathy", "social learning"],
            },
          ],
          commonError: "Stating 'it ignores nurture' for 1 mark without giving a concrete example of stranger altruism that violates r × B > C and reciprocity.",
          difficulty: "core",
          guideRef: "biological-evolutionary",
          hints: [
            "Back up your strength with exact figures from **Rushton et al. (1986)**.",
            "Show why anonymous sacrifice for a stranger (`r = 0`, zero future contact) breaks purely evolutionary equations.",
          ],
          strategy: "PEEL strength + PEEL limitation",
        },
      ],
    },
    {
      id: "prosocial-behaviour-p2",
      title: "Practice Paper 2: Empathy–Altruism, Social Learning, Parenting & Media",
      questions: [
        {
          kind: "short",
          id: "prosocial-behaviour-p2-q01",
          question:
            "In **Batson's Empathy–Altruism Hypothesis**, what two-word term names the **other-oriented** emotional feeling of compassion and warmth that motivates genuine altruism?",
          answer: {
            type: "text",
            accept: ["empathic concern", "empathetic concern"],
          },
          solution: [
            "Batson contrasted other-oriented **empathic concern** (producing true altruism) against self-oriented **personal distress** (producing egoistic escape).",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["personal distress"] },
              feedback: "Personal distress is *self-oriented* anxiety that leads to egoistic escape — name the *other-oriented* emotion!",
            },
          ],
          difficulty: "warmup",
          guideRef: "empathy-social-learning",
          hints: ["First word: 'empathic'; second word starts with 'c'."],
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p2-q02",
          question:
            "In **Batson et al.'s (1981)** 'Elaine' electric-shock experiment, what **percentage** of **low-empathy** participants volunteered to take Elaine's shocks when **escape was easy**?",
          answer: { type: "number", value: 18 },
          solution: [
            "In the low-empathy (personal distress) group, helping dropped from 64% in difficult escape to just **18%** in easy escape (whereas high-empathy stayed at 82%).",
          ],
          traps: [
            {
              spec: { type: "number", value: 82 },
              feedback: "82% was the *high-empathy* easy-escape rate — give the *low-empathy* easy-escape percentage!",
            },
            {
              spec: { type: "number", value: 64 },
              feedback: "64% was the low-empathy *difficult-escape* rate — give the *easy-escape* rate!",
            },
          ],
          difficulty: "core",
          guideRef: "empathy-social-learning",
          hints: [
            "Over four-fifths of low-empathy participants walked out when given an easy exit, leaving less than 20% helping.",
            "Exact two-digit percentage: 1_%.",
          ],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p2-q03",
          question:
            "Explain how **Batson et al.'s (1981)** 2 × 2 design (manipulating **empathy level** and **ease of escape**) tested whether human helping can be genuinely **altruistic**. [4 marks]",
          marks: 4,
          modelAnswer:
            "If all helping were egoistically motivated to stop the bystander's own unpleasant distress, observers should walk out whenever escape is easy rather than taking painful shocks themselves. In the low-empathy condition (personal distress), helping indeed plunged from 64% in difficult escape to 18% in easy escape, confirming egoistic escape. Crucially, in the high-empathy condition (empathic concern via similarity to Elaine), 82% still volunteered to take shocks even when escape was effortless (compared with 91% in difficult escape). Because walking away could not satisfy their concern for Elaine's welfare, this supports genuine other-focused altruism.",
          markScheme: [
            {
              point: "Explains the logic of easy escape: egoistic helpers should leave when exit is cost-free rather than take shocks",
              keywords: ["egoistic", "egoistically", "leave", "walk out", "own", "discomfort"],
            },
            {
              point: "Cites low-empathy / personal distress drop (64% difficult → 18% easy escape)",
              keywords: ["18%", "64%", "personal distress", "dropped", "plunged"],
            },
            {
              point: "Cites high-empathy persistence even in easy escape (82% vs 91%)",
              keywords: ["82%", "91%", "stayed", "effortless", "similar"],
            },
            {
              point: "Concludes only relieving Elaine's suffering satisfies empathic concern → supports true altruism",
              keywords: ["empathic concern", "welfare", "altruism", "altruistic", "other-focused"],
            },
          ],
          commonError: "Describing Elaine getting shocks without explaining *why* the Easy Escape condition is the decisive test separating egoism from altruism.",
          difficulty: "core",
          guideRef: "empathy-social-learning",
          hints: [
            "Ask: What would a purely selfish distress-avoider do when told 'you can leave right now'?",
            "Contrast 18% (low empathy, easy escape) against 82% (high empathy, easy escape).",
          ],
          strategy: "Explain experimental logic + quote 2×2 figures",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p2-q04",
          question:
            "State the **second** mediational process in **Bandura's (1977)** Social Learning Theory (between *Attention* and *Motor reproduction*), in which the observer stores a mental prosocial script in memory.",
          answer: {
            type: "text",
            accept: ["retention", "retaining"],
          },
          solution: [
            "Bandura's four mediational processes (ARMM) are: 1. Attention → **2. Retention** → 3. Motor reproduction → 4. Motivation.",
          ],
          commonError: "Swapping the order of Bandura's mediational ARRM stages (Attention → Retention → Motor Reproduction → Motivation).",
          difficulty: "warmup",
          guideRef: "empathy-social-learning",
          hints: ["A-R-M-M: what does the 'R' stand for?"],
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p2-q05",
          question:
            "Which social norm (**norm of reciprocity** or **norm of social responsibility**) explains why lifeguards and passers-by help a **toddler** who cannot swim, even though the toddler cannot return the favour?",
          answer: {
            type: "text",
            accept: ["norm of social responsibility", "social responsibility norm", "social responsibility"],
          },
          solution: [
            "Berkowitz's **norm of social responsibility** obliges society members to assist dependent, vulnerable individuals who cannot help themselves, without expecting payback.",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["norm of reciprocity", "reciprocity norm", "reciprocity"] },
              feedback: "Reciprocity means returning a prior favour — a toddler hasn't helped the stranger first!",
            },
          ],
          difficulty: "warmup",
          guideRef: "empathy-social-learning",
          hints: ["Focus on moral duty toward *dependent* people rather than trading favours."],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p2-q06",
          question:
            "Zara, aged 8, watches her older brother bake cupcakes for an elderly neighbour; their father hugs her brother and calls him 'thoughtful and generous'. That weekend, Zara offers to sweep the neighbour's porch. Explain Zara's behaviour using **three** concepts from **Social Learning Theory**. [3 marks]",
          marks: 3,
          modelAnswer:
            "First, through observational learning (attention and retention), Zara attended to a high-status family role model (her older brother) and encoded a prosocial script for helping neighbours. Second, Zara possessed motor reproduction capability, choosing an age-appropriate task (sweeping the porch) she could physically perform. Third, watching her father hug and praise her brother acted as vicarious reinforcement, creating a positive expectancy of warmth and approval that motivated Zara to imitate kind behaviour.",
          markScheme: [
            {
              point: "Observational learning / role-model imitation + attention/retention of her brother's helpful script",
              keywords: ["observational", "role model", "model", "attention", "retention", "script"],
            },
            {
              point: "Motor reproduction: possessing physical competence to carry out an equivalent helpful act (sweeping)",
              keywords: ["motor reproduction", "reproduction", "physically", "competence", "capable"],
            },
            {
              point: "Vicarious reinforcement: seeing her brother rewarded/praised motivated imitation",
              keywords: ["vicarious reinforcement", "vicarious", "expectancy", "motivated"],
            },
          ],
          commonError: "Calling the father's praise of the brother 'direct positive reinforcement' for Zara — Zara observed it *vicariously*!",
          difficulty: "core",
          guideRef: "empathy-social-learning",
          hints: [
            "Use **role-model / attention & retention**, **motor reproduction**, and **vicarious reinforcement**.",
            "Anchor every term to Zara, her brother, and the porch!",
          ],
          strategy: "3 SLT concepts × AO2 links",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p2-q07",
          question:
            "In **Prot et al. (2014)** Study 1, how many youths in total (**exact number**) were surveyed across Australia, China, Croatia, Germany, Japan, Romania, and the USA?",
          answer: { type: "number", value: 11783 },
          solution: [
            "Prot et al. (2014) Study 1 surveyed **11,783** adolescents and young adults across 7 countries (while Study 2 tracked 3,034 youths in Singapore).",
          ],
          traps: [
            {
              spec: { type: "number", value: 3034 },
              feedback: "3,034 was the Singapore longitudinal sample in Study 2 — give Study 1's 7-country sample size (11,783).",
            },
          ],
          difficulty: "core",
          guideRef: "media-parental-influences",
          hints: [
            "Just under twelve thousand participants across the 7 countries.",
            "Exact five-digit figure: 11,78_.",
          ],
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p2-q08",
          question:
            "Across how many **waves** (measurement time-points) over 2 years did **Prot et al. (2014)** track Singaporean youths in Study 2?",
          answer: { type: "number", value: 3 },
          solution: [
            "Study 2 measured Singaporean youths across **3 waves** over 2 years: Wave 1 prosocial gaming → Wave 2 trait empathy → Wave 3 prosocial helping.",
          ],
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "The study lasted 2 years, but measurements were collected in **3** waves (Wave 1, Wave 2, Wave 3) to test mediation!",
            },
          ],
          difficulty: "warmup",
          guideRef: "media-parental-influences",
          hints: ["To prove A → Mediator B → Outcome C over time, you need Wave 1, Wave 2, and Wave _."],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p2-q09",
          question:
            "Describe the findings of **both** Study 1 and Study 2 of **Prot et al. (2014)** and explain **one limitation** of the research. [4 marks]",
          marks: 4,
          modelAnswer:
            "In Study 1 (11,783 youths across 7 Eastern and Western countries), prosocial media exposure positively correlated with trait empathy and prosocial helping across all cultures, whereas violent media correlated negatively with empathy. In Study 2 (3,034 Singaporean youths followed across 3 waves over 2 years), Wave 1 prosocial video-game play predicted higher empathy at Wave 2, which mediated increased helping at Wave 3 even after controlling for baseline helping. However, a limitation is that both studies relied on non-experimental self-report questionnaires: participants may have exaggerated their empathy and helpfulness due to social desirability bias, and lack of random IV manipulation prevents 100% certainty of causation.",
          markScheme: [
            {
              point: "Study 1 finding: across 7 countries (11,783 youths), prosocial media linked to higher empathy & helping universally",
              keywords: ["7 countries", "seven countries", "11,783", "11783", "cultures", "correlated"],
            },
            {
              point: "Study 2 finding: in Singapore (3,034 youths, 2 years / 3 waves), Wave 1 prosocial gaming → Wave 2 empathy → Wave 3 helping",
              keywords: ["singapore", "3,034", "3034", "wave", "mediated", "longitudinal"],
            },
            {
              point: "Identifies methodological limitation: self-report bias OR non-experimental/correlational design",
              keywords: ["self-report", "social desirability", "non-experimental", "correlational", "questionnaires"],
            },
            {
              point: "Explains impact on validity: youths may over-report kindness on paper / unmeasured third variables prevent strict causal proof",
              keywords: ["exaggerat", "over-report", "third variable", "confound", "causation", "random"],
            },
          ],
          commonError: "Describing only Study 1 and forgetting the Singapore longitudinal mediation in Study 2.",
          difficulty: "core",
          guideRef: "media-parental-influences",
          hints: [
            "Include Study 1 (7 countries, 11,783) AND Study 2 (Singapore, 3,034, 3 waves).",
            "Critique self-report social desirability bias and lack of experimental manipulation.",
          ],
          strategy: "Study 1 + Study 2 + developed critique",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p2-q10",
          question:
            "Name **Hoffman's (2000)** parenting discipline technique in which caregivers calm a child and explain **how** the child's behaviour hurt or helped another person's feelings.",
          answer: {
            type: "text",
            accept: [
              "inductive discipline",
              "inductive reasoning",
              "induction",
              "inductive parenting",
            ],
          },
          solution: [
            "**Inductive discipline (induction)** fosters perspective-taking and internalised moral motivation by pointing out the impact of actions on others' emotions.",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["power assertion", "love withdrawal"] },
              feedback: "Power assertion and love withdrawal rely on fear or anxiety — name Hoffman's empathy-building reasoning style!",
            },
          ],
          difficulty: "warmup",
          guideRef: "media-parental-influences",
          hints: ["Starts with 'induct-'."],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p2-q11",
          question:
            "Compare **biological explanations** (kin selection / twin genetics) and **social learning / media explanations** of prosocial behaviour in terms of the **nature–nurture debate**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Biological explanations sit on the nature side, arguing helping tendencies are innate adaptations shaped by natural selection (Hamilton's r × B > C kin selection) and inherited genetically, supported by Rushton et al.'s (1986) finding of ~50% genetic heritability in twins. Conversely, Social Learning Theory and media models (Bandura; Prot et al., 2014) sit on the nurture side, arguing prosocial scripts are acquired postnatally through role-model imitation, vicarious reinforcement, inductive parenting, and cooperative video games. Rather than an 'either/or' split, an interactionist view fits the data best: Rushton's remaining ~50% unique environmental variance shows inherited empathic temperament is shaped and directed toward wider out-groups by parenting and media.",
          markScheme: [
            {
              point: "Places biological explanations on the nature side (innate evolution / Hamilton's kin selection / Rushton ~50% twin heritability)",
              keywords: ["innate", "hamilton", "rushton", "genetic", "inherited", "50%"],
            },
            {
              point: "Places SLT/media on the nurture side (postnatal learning via modelling, vicarious reinforcement, inductive parenting, Prot et al.)",
              keywords: ["bandura", "modelling", "vicarious", "prot", "inductive", "scripts"],
            },
            {
              point: "Integrates via interactionist conclusion rather than extreme determinism",
              keywords: ["interactionist", "interaction", "both", "complement", "together"],
            },
            {
              point: "Supports synthesis using Rushton's ~50% environmental variance or how culture shapes innate empathy",
              keywords: ["non-shared", "unique environment", "temperament", "out-group", "directed"],
            },
          ],
          commonError: "Claiming Rushton et al. proved helping is '100% nature' instead of using Rushton's 50/50 split to justify interactionism!",
          difficulty: "core",
          guideRef: "biological-evolutionary",
          hints: [
            "Define the **nature** side with Hamilton + Rushton.",
            "Define the **nurture** side with Bandura + Prot et al., then conclude with **interactionism**!",
          ],
          strategy: "Nature → Nurture → Interactionist synthesis",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p2-q12",
          question:
            "In **Prot et al. (2014)**, Study 1 sampled **11,783** youths and Study 2 sampled **3,034** youths. Calculate the **combined total number of participants** across both studies.",
          answer: { type: "number", value: 14817 },
          solution: ["11,783 + 3,034 = **14,817 participants**."],
          commonError: "Subtracting the two samples instead of adding Study 1 (11,783) + Study 2 (3,034) = 14,817 participants.",
          difficulty: "warmup",
          guideRef: "media-parental-influences",
          hints: ["Add 11,783 and 3,034 carefully."],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p2-q13",
          question:
            "Two families want their 9-year-olds to become more helpful at home. Family X fines their son $2 from his pocket money every time he leaves dishes in the sink. Family Y models volunteering at a food bank together and explains how tired everyone feels when one person leaves extra mess for the family. Predict and explain which child will be more helpful at a school camp where parents are **absent**. [3 marks]",
          marks: 3,
          modelAnswer:
            "Family Y's child will be significantly more helpful at camp. Family X relies on power assertion (financial punishment), which produces only external compliance motivated by avoiding fines when parents are policing him; at camp without parental surveillance, that external pressure disappears. Family Y combines consistent prosocial role-modelling with Hoffman's inductive reasoning (highlighting others' feelings), building perspective-taking and internalised prosocial norms that guide behaviour autonomously.",
          markScheme: [
            {
              point: "Correctly predicts Family Y's child will be more helpful when unsupervised",
              keywords: ["family y", "second family"],
            },
            {
              point: "Explains Family X's failure via power assertion / external compliance vanishing without surveillance",
              keywords: ["power assertion", "punishment", "external compliance", "surveillance", "watching"],
            },
            {
              point: "Explains Family Y's success via role-modelling + Hoffman's inductive reasoning building internalised empathy/norms",
              keywords: ["inductive", "modelling", "perspective-taking", "internalised", "internalized", "empathy"],
            },
          ],
          commonError: "Predicting Family Y without naming **power assertion** and **inductive reasoning / modelling**.",
          difficulty: "core",
          guideRef: "media-parental-influences",
          hints: [
            "Classify Family X's $2 fine using Hoffman's terminology.",
            "Combine **modelling** + **inductive reasoning** to explain why Family Y's values travel to camp.",
          ],
          strategy: "Predict + contrast external vs internalised mechanisms",
        },
        {
          kind: "short",
          id: "prosocial-behaviour-p2-q14",
          question:
            "What acronym names Buckley & Anderson's media model (used by **Prot et al., 2014**) explaining how cooperative video games build prosocial cognitive scripts and trait empathy?",
          answer: {
            type: "text",
            accept: ["glm", "general learning model"],
          },
          solution: [
            "The **General Learning Model (GLM)** explains how short-term media scripts, arousal, and affect accumulate into long-term trait empathy and prosocial personality.",
          ],
          commonError: "Writing GAM (General Aggression Model) instead of GLM (General Learning Model), which extends media learning to prosocial behaviour.",
          difficulty: "core",
          guideRef: "media-parental-influences",
          hints: [
            "Three words (or 3-letter initials): General L______ M____.",
            "The middle word is 'Learning' — General Learning Model (GLM).",
          ],
        },
        {
          kind: "written",
          id: "prosocial-behaviour-p2-q15",
          question:
            "A school prefect collapses during assembly in front of 200 students. Suggest **two practical strategies** — grounded directly in **Latané & Darley's 5-step model** — that the collapsed prefect (if conscious) or a school first-aid trainer could use to overcome bystander apathy immediately. [4 marks]",
          marks: 4,
          modelAnswer:
            "First, to overcome pluralistic ignorance at Step 2 (ambiguity), the prefect should state the emergency explicitly and unmistakably ('I am having a severe asthma attack, this is a medical emergency!') so nobody misreads calm peers' faces. Second, to eliminate diffusion of responsibility at Step 3, the prefect should point directly at one named individual ('You in the front row wearing glasses — fetch the school nurse and inhaler now!'), concentrating 100% of personal obligation onto a single person rather than splitting it 1/200.",
          markScheme: [
            {
              point: "Strategy 1: Explicitly declare the medical emergency aloud to remove ambiguity",
              keywords: ["explicitly", "clearly", "state", "medical emergency", "unambiguous"],
            },
            {
              point: "Links Strategy 1 to overcoming Step 2 / pluralistic ignorance",
              keywords: ["pluralistic ignorance", "step 2", "ambiguity", "misread"],
            },
            {
              point: "Strategy 2: Point at / single out one specific bystander and assign a concrete task",
              keywords: ["point", "single", "specific", "assign", "individual", "one person"],
            },
            {
              point: "Links Strategy 2 to overcoming Step 3 / diffusion of responsibility (100% duty on one person)",
              keywords: ["diffusion of responsibility", "step 3", "100%", "concentrat"],
            },
          ],
          commonError: "Giving sensible real-world advice ('point at one person') without explicitly linking each tactic to **pluralistic ignorance (Step 2)** and **diffusion of responsibility (Step 3)**.",
          difficulty: "core",
          guideRef: "bystander-apathy",
          hints: [
            "How do you beat Step 2 (**pluralistic ignorance**)? Remove all ambiguity!",
            "How do you beat Step 3 (**diffusion of responsibility**)? Concentrate 100% duty on one pointed-out person!",
          ],
          strategy: "Practical action + theoretical step link (×2)",
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "written",
      id: "prosocial-behaviour-ch-q01",
      question:
        "'**Piliavin et al. (1969)** completely disproved **Latané & Darley (1968)**.' Critically evaluate this claim using evidence from both studies. [5 marks]",
      marks: 5,
      modelAnswer:
        "I disagree that Piliavin completely disproved Latané & Darley; rather, Piliavin revealed the boundary conditions under which the bystander effect switches off. At first glance, Piliavin's 95% spontaneous helping (median 5 s) and faster helping in larger subway groups contradict Latané & Darley's drop from 85% to 31% in cubicles. However, in Latané & Darley's intercom and smoke studies, emergencies were visually unseen or ambiguous and escape/ignoring was easy, allowing pluralistic ignorance and diffusion of responsibility to dominate. On Piliavin's non-stop express subway, the cane victim's collapse was visually unambiguous (eliminating Step 2 pluralistic ignorance) and commuters were physically trapped for 7.5 minutes (keeping empathic arousal high). Furthermore, when Piliavin's victim was drunk (raising helping costs), spontaneous helping dropped to 50% (109 s), aligning with Step 5 cost barriers in Latané & Darley's own model.",
      markScheme: [
        {
          point: "Takes a nuanced stance: Piliavin refined boundary conditions rather than wholly disproving Latané & Darley",
          keywords: ["boundary", "disagree", "partially", "conditions", "context", "nuanced"],
        },
        {
          point: "Contrasts key quantitative results: Piliavin 95% (5 s) + reverse group-size effect vs Latané & Darley 85% → 31%",
          keywords: ["95%", "31%", "85%", "5 s", "faster"],
        },
        {
          point: "Explains visual clarity difference: face-to-face subway collapse eliminated Step 2 ambiguity / pluralistic ignorance",
          keywords: ["unambiguous", "visual", "pluralistic ignorance", "face-to-face", "see"],
        },
        {
          point: "Explains inescapable carriage: 7.5-min express run trapped bystanders with high physiological arousal",
          keywords: ["trapped", "escape", "express", "arousal", "7.5"],
        },
        {
          point: "Shows convergence on drunk condition: 50% / 109 s high-cost reluctance matches Step 5 implementation costs",
          keywords: ["drunk", "50%", "109", "step 5", "cost"],
        },
      ],
      difficulty: "challenge",
      guideRef: "cost-reward-piliavin",
      hints: [
        "Start by comparing the exact statistics (85%→31% vs 95% cane).",
        "Ask *why* the subway differed structurally: visual clarity + inescapable carriage!",
        "Show how the **drunk** condition (50%, 109 s) actually *agrees* with Latané & Darley's Step 5!",
      ],
      strategy: "Reconcile apparent contradictions via moderators",
    },
    {
      kind: "short",
      id: "prosocial-behaviour-ch-q02",
      question:
        "A hiker faces a personal survival risk of **{{C = 0.45}}** to throw a rope to a group of **first cousins** trapped on a ledge, where each rescued cousin gains a survival benefit of **{{B = 0.90}}**. According to **Hamilton's Rule** (`{{n * r * B > C}}`), what is the **minimum whole number of first cousins ({{n}})** she must save simultaneously for kin selection to favour the rescue?",
      answer: { type: "number", value: 5 },
      solution: [
        "For one first cousin, r = 0.125, so 1 cousin yields r × B = 0.125 × 0.90 = 0.1125.",
        "We need n × 0.1125 > 0.45 (strictly greater!).",
        "Divide: 0.45 ÷ 0.1125 = 4 exactly, where 4 × 0.1125 = 0.45 (which equals C, not strictly greater than C!).",
        "Therefore, at least **5** first cousins are needed (5 × 0.1125 = 0.5625 > 0.45).",
      ],
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "Careful! For n = 4, n × r × B = 4 × 0.125 × 0.90 = 0.45, which EQUALS C rather than strictly exceeding C (rB > C)!",
        },
        {
          spec: { type: "number", value: 3 },
          feedback: "Did you use r = 0.25 instead of r = 0.125 for first cousins?",
        },
      ],
      difficulty: "challenge",
      guideRef: "biological-evolutionary",
      hints: [
        "First find r × B for one first cousin (`r = 0.125 × 0.90 = 0.1125`).",
        "Divide C = 0.45 by 0.1125.",
        "Watch the strict inequality `>` in Hamilton's Rule (`rB > C`, not `>=`)!",
      ],
      strategy: "Check strict inequality at boundary",
    },
    {
      kind: "written",
      id: "prosocial-behaviour-ch-q03",
      question:
        "Design a **controlled field experiment** to test whether **prosocial role modelling** increases recycling / litter-picking in a secondary school courtyard. Specify your **operationalised IV**, **operationalised DV**, **controls for extraneous variables**, and **ethical safeguards**. [4 marks]",
      marks: 4,
      modelAnswer:
        "Operationalised IV: Presence vs absence of a peer role model — in Condition 1, a sixth-form confederate visibly picks up two empty plastic bottles and places them in a recycling bin 5 metres ahead of an approaching solo student; in Condition 2 (control), the confederate walks past the bottles without touching them. Operationalised DV: Whether or not each unsuspecting solo passer-by picks up a standardised clean empty cup placed directly on the central path within 10 metres (recorded covertly by two observers to check inter-observer reliability). Controls: Conduct all 60 trials at identical dry break-time intervals using the exact same cup position and only counting solo walkers (controlling diffusion of responsibility). Ethics: Use harmless litter (zero psychological distress), maintain complete anonymity (record zero names), obtain prior general/presumptive consent from the school head and student council, and post a debrief notice afterwards.",
      markScheme: [
        {
          point: "Operationalised IV: confederate visibly picking up litter vs walking past without helping",
          keywords: ["confederate", "picks up", "condition 1", "control", "walks past"],
        },
        {
          point: "Operationalised DV: count/percentage of solo passers-by placing standardised litter item into bin",
          keywords: ["count", "percentage", "whether", "bin", "inter-observer", "covertly"],
        },
        {
          point: "Controls: same location/weather/time, standardised litter item, solo walkers only to control group size",
          keywords: ["standardised", "standardized", "solo", "weather", "same location", "diffusion"],
        },
        {
          point: "Ethics: zero harm/distress, anonymity/confidentiality, presumptive/school consent, retrospective debrief poster",
          keywords: ["anonymity", "anonymous", "consent", "debrief", "harmless"],
        },
      ],
      difficulty: "challenge",
      guideRef: "empathy-social-learning",
      hints: [
        "Make both levels of your **IV** and your observable **DV** concrete and measurable.",
        "Remember to restrict trials to **solo** walkers so bystander group size doesn't confound your results!",
        "Address covert field ethics cleanly (anonymity, harmless task, presumptive consent, debrief notice).",
      ],
      strategy: "CIE 0266 Paper 1 design blueprint (IV, DV, Controls, Ethics)",
    },
    {
      kind: "written",
      id: "prosocial-behaviour-ch-q04",
      question:
        "Evaluate the debate between **Batson's Empathy–Altruism Hypothesis** and **egoistic explanations** (Piliavin's Cost–Reward Model and Cialdini's Negative-State Relief Model). Can psychology ever prove pure altruism exists? [4 marks]",
      marks: 4,
      modelAnswer:
        "Batson's (1981) Elaine experiment strongly challenged simple arousal-escape egoism (Piliavin): while low-empathy observers escaped when exit was easy (only 18% helped), 82% of high-empathy observers still endured shocks despite having an effortless physical exit. However, Cialdini's (1987) Negative-State Relief Model counters that perspective-taking induces lingering personal sadness that physical escape cannot cure — meaning high-empathy helpers might still help egoistically to repair their own mood or avoid internal self-censure. Conversely, Batson showed that empathetic participants feel distressed if *someone else* fails to save the victim, proving their goal is genuinely the victim's recovery rather than personal credit. Ultimately, because internal neural reward ('warm glow' dopamine) always accompanies compassionate acts, pure behavioural outcomes rarely isolate motive completely without converging affective measures.",
      markScheme: [
        {
          point: "Supports Batson using easy-escape evidence (82% high empathy vs 18% low empathy refutes physical distress-escape)",
          keywords: ["82%", "18%", "easy escape", "elaine", "shocks"],
        },
        {
          point: "Presents Cialdini's Negative-State Relief / egoistic mood-repair or guilt-avoidance counter-explanation",
          keywords: ["cialdini", "negative-state", "sadness", "mood", "guilt"],
        },
        {
          point: "Evaluates Batson's rebuttal: empathetic helpers care whether the *victim actually recovers*, not just getting personal credit",
          keywords: ["victim", "recovers", "recovery", "welfare", "someone else"],
        },
        {
          point: "Reaches reasoned methodological judgement on internal 'warm glow' / dopamine vs ultimate goal",
          keywords: ["warm glow", "dopamine", "ultimate", "internal", "by-product"],
        },
      ],
      difficulty: "challenge",
      guideRef: "empathy-social-learning",
      hints: [
        "Pit **Batson's 82% easy-escape result** directly against **Piliavin's distress-escape** prediction.",
        "Bring in **Cialdini's Negative-State Relief** mood-repair critique.",
        "Distinguish an *ultimate goal* (saving Elaine) from an emotional *by-product* (warm glow).",
      ],
      strategy: "Thesis → Antithesis → Synthesis",
    },
    {
      kind: "short",
      id: "prosocial-behaviour-ch-q05",
      question:
        "In a city study replicating **Levine et al. (2001)**, researchers staged **40** dropped-pen trials (helped on **75%** of trials), **30** hurt-leg magazine trials (helped on **60%** of trials), and **30** blind pedestrian crossing trials (helped on **80%** of trials). Calculate the **overall percentage of trials helped** across all **100** trials.",
      answer: { type: "number", value: 72 },
      solution: [
        "Dropped-pen helps = 75% of 40 = 30 trials.",
        "Hurt-leg helps = 60% of 30 = 18 trials.",
        "Blind-crossing helps = 80% of 30 = 24 trials.",
        "Total helped = 30 + 18 + 24 = **72** out of 100 trials = **72%**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 71.7, tolerance: 0.1 },
          feedback: "You took an unweighted average of 75%, 60%, and 80% — weight each percentage by its trial count (40, 30, 30)!",
        },
      ],
      difficulty: "challenge",
      guideRef: "cost-reward-piliavin",
      hints: [
        "Notice the trial counts are unequal (40, 30, 30), so don't just average the three percentages!",
        "Find the exact number of helped trials in each test (`0.75×40`, `0.60×30`, `0.80×30`).",
        "Sum the three counts out of 100.",
      ],
      strategy: "Weighted percentage via raw counts",
    },
    {
      kind: "written",
      id: "prosocial-behaviour-ch-q06",
      question:
        "Explain why **Rushton et al. (1986)** and **Prot et al. (2014)** BOTH face a threat to **construct/internal validity** from their measurement tool, yet differ sharply in how they address **developmental change over time**. [4 marks]",
      marks: 4,
      modelAnswer:
        "Both Rushton et al. (1986) and Prot et al. (2014) measured empathy and prosociality using self-report questionnaires rather than observing real helping behaviour, creating vulnerability to social desirability bias (participants rating themselves as kinder than they truly act in costly emergencies). However, Rushton et al. used a single cross-sectional snapshot of adult twins (mean age ~30s), offering zero longitudinal tracking of how helping shifts across childhood. In contrast, Prot et al. (2014) Study 2 tracked 3,034 Singaporean youths longitudinally across 3 waves over 2 years, controlling for Wave 1 baseline helping to demonstrate genuine developmental growth in empathy and helping.",
      markScheme: [
        {
          point: "Shared measurement weakness: both rely on self-report questionnaires rather than direct behavioural observation",
          keywords: ["self-report", "questionnaires", "questionnaire", "observation"],
        },
        {
          point: "Explains social desirability bias: participants exaggerate kindness on paper vs costly real emergencies",
          keywords: ["social desirability", "exaggerat", "desirable", "bias"],
        },
        {
          point: "Identifies Rushton et al. as a one-time cross-sectional snapshot of adults",
          keywords: ["cross-sectional", "snapshot", "single", "adult twins"],
        },
        {
          point: "Contrasts Prot et al. Study 2's 2-year / 3-wave longitudinal design tracking developmental change & controlling baseline",
          keywords: ["longitudinal", "3 waves", "three waves", "2 years", "two years", "baseline"],
        },
      ],
      difficulty: "challenge",
      guideRef: "media-parental-influences",
      hints: [
        "What data-collection method do Rushton (1986) and Prot (2014) have in common?",
        "Name the exact bias affecting self-rated kindness.",
        "Contrast Rushton's one-off adult snapshot against Prot Study 2's 3-wave Singapore design.",
      ],
      strategy: "Shared weakness + contrasting design strength",
    },
    {
      kind: "written",
      id: "prosocial-behaviour-ch-q07",
      question:
        "A government health ministry notes that urban commuters rarely stop when elderly pedestrians stumble on busy pavements in a fast-paced financial district. Using **Levine et al. (2001)**, **Piliavin et al. (1969)**, and **Social Learning Theory**, propose and justify a **three-part city campaign** to increase street helping. [4 marks]",
      marks: 4,
      modelAnswer:
        "First, drawing on Levine et al.'s (2001) finding that fast economic pace suppresses noticing and simpatía, install pedestrian 'slow zones' with seating plazas and community warmth signage ('Pause & Care') so commuters notice distressed elders at Step 1. Second, applying Piliavin's Cost–Reward Model, lower the perceived cost of helping by placing one-touch emergency intercom pillars and hygiene kits at bus stops so commuters can assist safely without missing trains or risking injury. Third, applying Bandura's Social Learning Theory, broadcast short commuter-screen clips showing everyday office workers praised and thanked for helping older citizens (**vicarious reinforcement** and relatable **role-modelling**).",
      markScheme: [
        {
          point: "Addresses Levine et al. (2001) pace-of-life / simpatía norm with an environmental or cultural intervention",
          keywords: ["levine", "pace", "simpatia", "simpatía", "slow", "notice"],
        },
        {
          point: "Applies Piliavin's Cost–Reward Model by concretely lowering the personal cost of helping (time/safety/effort)",
          keywords: ["piliavin", "cost of helping", "lower", "intercom", "safe"],
        },
        {
          point: "Applies Bandura's Social Learning Theory via relatable role models on public media",
          keywords: ["bandura", "role model", "modelling", "observational"],
        },
        {
          point: "Includes vicarious reinforcement (showing helpers thanked/praised to build positive expectancy)",
          keywords: ["vicarious reinforcement", "vicarious", "praised", "thanked", "rewarded"],
        },
      ],
      difficulty: "challenge",
      guideRef: "cost-reward-piliavin",
      hints: [
        "Part 1: Counter **Levine et al.'s** fast walking speed / low *simpatía*.",
        "Part 2: Lower **Piliavin's** cost of helping.",
        "Part 3: Use **Bandura's** relatable models + **vicarious reinforcement**.",
      ],
      strategy: "Translate 3 theories into concrete interventions",
    },
    {
      kind: "short",
      id: "prosocial-behaviour-ch-q08",
      question:
        "In **Latané & Darley's (1968)** intercom seizure study, the mean response latency rose from **52 seconds** (alone with victim) to **166 seconds** (4 other bystanders). Express the **percentage increase** in response latency from the solo condition to the 6-person condition, rounded to **1 decimal place**.",
      answer: { type: "number", value: 219.2, tolerance: 0.2 },
      solution: [
        "Absolute latency increase = 166 − 52 = 114 seconds.",
        "Percentage increase = (114 ÷ 52) × 100 = 219.23...% ≈ **219.2%**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 114 },
          feedback: "114 seconds is the raw increase in seconds — divide 114 by the original 52 seconds and multiply by 100!",
        },
        {
          spec: { type: "number", value: 68.7, tolerance: 0.2 },
          feedback: "You divided 114 by 166 instead of dividing by the starting value (52 seconds)!",
        },
      ],
      difficulty: "challenge",
      guideRef: "bystander-apathy",
      hints: [
        "First find the increase in seconds: `166 − 52`.",
        "Divide that increase by the *original* solo latency (`52`), NOT `166`.",
        "Multiply by 100 and round to 1 decimal place.",
      ],
      strategy: "Percentage change = (change ÷ original) × 100",
    },
  ],
};
