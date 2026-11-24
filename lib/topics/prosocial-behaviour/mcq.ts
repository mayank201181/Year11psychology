import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "prosocial-behaviour-m1",
    title: "MCQ Paper 1: Bystander Intervention & Cost–Reward",
    questions: [
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q01",
        question:
          "Which statement accurately distinguishes **altruism** from the broader category of **prosocial behaviour** in CIE 0266 Psychology?",
        options: [
          "Altruism is helping motivated purely by concern for another's welfare at personal cost with no expected reward, whereas prosocial behaviour covers any voluntary act aimed at helping.",
          "Prosocial behaviour applies exclusively to helping close genetic relatives for inclusive fitness, whereas altruism refers to any everyday kindness shown toward unrelated strangers.",
          "Altruism is the broad umbrella term for any voluntary helpful action including helping for praise, whereas prosocial behaviour is restricted to anonymous acts with no self-benefit.",
          "Prosocial behaviour is an automatic involuntary biological reflex triggered by distress, whereas altruism refers solely to planned financial donations made through charitable groups.",
        ],
        answerIndex: 0,
        explanation:
          "Prosocial behaviour is the umbrella term for any voluntary action intended to help others (even if done for praise, reciprocity, or guilt relief). Altruism is a subtype motivated purely by unselfish desire to help another at personal cost without expecting external or internal reward.",
        difficulty: "warmup",
        guideRef: "bystander-apathy",
        hints: [
          "Think about which term is the broad umbrella and which term depends strictly on unselfish motivation.",
        ],
        strategy: "Define umbrella vs subtype",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q02",
        question:
          "In **Latané & Darley's (1968)** intercom seizure laboratory experiment, what were the percentages of participants who reported the emergency within 6 minutes when they believed **0**, **1**, or **4** other bystanders were also listening?",
        options: [
          "50%, 62%, and 95%",
          "85%, 62%, and 31%",
          "95%, 50%, and 18%",
          "75%, 45%, and 10%",
        ],
        answerIndex: 1,
        explanation:
          "Latané & Darley (1968) found that 85% reported the seizure when alone with the victim (0 other bystanders), 62% when 1 other bystander was believed present, and 31% when 4 other bystanders were believed present. Note that 95% and 50% belong to Piliavin et al. (1969).",
        difficulty: "warmup",
        guideRef: "bystander-apathy",
        hints: [
          "Helping started high (over four-fifths) when alone and dropped to roughly one-third with four other listeners.",
        ],
        strategy: "Recall core study figures",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q03",
        question:
          "Passengers on a bus hear a loud bang under the chassis. Everyone glances around, sees fellow passengers calmly scrolling on their phones, and concludes the sound was just a harmless pothole. Which psychological barrier and step of **Latané & Darley's (1970)** model does this illustrate?",
        options: [
          "Diffusion of responsibility at Step 3 (assuming personal responsibility)",
          "Skill deficit at Step 4 (knowing how to help)",
          "Pluralistic ignorance at Step 2 (interpreting the event as an emergency)",
          "Sensory overload at Step 1 (noticing the event)",
        ],
        answerIndex: 2,
        explanation:
          "Passengers already noticed the bang (passed Step 1), so sensory overload is ruled out. Using other bystanders' calm outward behaviour to conclude an ambiguous event is safe is pluralistic ignorance at Step 2 — before personal responsibility (Step 3) is even considered.",
        difficulty: "core",
        guideRef: "bystander-apathy",
        hints: [
          "Did the passengers fail to hear the bang, or did they misread what the bang meant?",
          "Check which concept explains misinterpreting an ambiguous event by copying calm witnesses.",
        ],
        strategy: "Pinpoint the exact cognitive step",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q04",
        question:
          "Why did **Latané & Darley (1968)** place each Columbia University student in a separate soundproof cubicle using a one-way intercom turn system?",
        options: [
          "To prevent participants from withdrawing before the 6-minute seizure recording ended",
          "To maximise mundane realism by mimicking everyday face-to-face conversations",
          "To test whether male students experience stronger physiological arousal than female students",
          "To eliminate visual cues and discussion between bystanders, isolating diffusion of responsibility from pluralistic ignorance",
        ],
        answerIndex: 3,
        explanation:
          "In a shared waiting room, bystanders can see each other's calm expressions (pluralistic ignorance) and talk about who will act. Soundproof cubicles and turn-limited microphones removed facial cues and communication, proving that merely knowing others are listening causes diffusion of responsibility.",
        difficulty: "core",
        guideRef: "bystander-apathy",
        hints: [
          "Ask what two processes get tangled up when bystanders can see one another's faces.",
          "Think about internal validity: what extraneous cue did soundproof cubicles remove?",
        ],
        strategy: "Link procedure to internal validity",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q05",
        question:
          "During a swimming gala, a spectator sees a swimmer struggling in deep water, realises nobody else has noticed, and feels responsible to act — yet freezes at the poolside because she cannot swim and sees no lifebuoy. At which step of **Latané & Darley's 5-step model** did intervention fail?",
        options: [
          "Step 4: Knowing how to help (deciding one has the competence/form of assistance)",
          "Step 2: Interpreting the event as an emergency (overcoming pluralistic ignorance)",
          "Step 3: Assuming personal responsibility (overcoming diffusion of responsibility)",
          "Step 1: Noticing the event (attending to distress cues amid surrounding distractions)",
        ],
        answerIndex: 0,
        explanation:
          "She saw the swimmer (Step 1), recognised the drowning emergency (Step 2), and accepted personal duty (Step 3). She was blocked at Step 4 because she lacked swimming competence and rescue equipment.",
        difficulty: "warmup",
        guideRef: "bystander-apathy",
        hints: [
          "Trace Steps 1, 2, and 3 in the stem — all three succeeded before she froze.",
        ],
        strategy: "Step-by-step elimination",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q06",
        question:
          "In **Piliavin, Rodin & Piliavin's (1969)** New York subway field experiment, what were the spontaneous helping rates (before the 70-second model intervened) for the **cane** victim versus the **drunk** victim?",
        options: [
          "85% for the cane victim and 31% for the drunk victim",
          "95% (62/65 trials) for the cane victim and 50% (19/38 trials) for the drunk victim",
          "100% for the cane victim and 10% for the drunk victim",
          "63% for the cane victim and 18% for the drunk victim",
        ],
        answerIndex: 1,
        explanation:
          "Piliavin et al. (1969) observed spontaneous passenger help before 70 seconds on 62 out of 65 cane trials (95%, median latency 5 s) compared with 19 out of 38 drunk trials (50%, median latency 109 s).",
        difficulty: "warmup",
        guideRef: "cost-reward-piliavin",
        hints: [
          "Remember the mnemonic: 'Cane 95 in 5; Drunk 50 in 109'.",
        ],
        strategy: "Recall core study figures",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q07",
        question:
          "How did **Piliavin et al.'s (1969)** findings regarding **bystander group size** compare with **Latané & Darley's (1968)** laboratory seizure findings?",
        options: [
          "Both studies found that larger groups sharply slowed helping due to diffusion of responsibility.",
          "Piliavin et al. found diffusion of responsibility for the cane victim but reverse diffusion for the drunk victim.",
          "Piliavin et al. found no diffusion of responsibility — carriages with 7 or more witnesses actually helped the cane victim faster than carriages with 1 to 3 witnesses.",
          "Piliavin et al. did not record carriage passenger numbers because covert observation made counting impossible.",
        ],
        answerIndex: 2,
        explanation:
          "Contrary to Latané & Darley (1968), Piliavin et al. (1969) found zero evidence of diffusion of responsibility on the subway: larger groups (7+ passengers) had shorter response latencies for the cane victim than small groups (1–3) because the collapse was visually unmistakable and passengers were trapped in the carriage.",
        difficulty: "core",
        guideRef: "cost-reward-piliavin",
        hints: [
          "Could subway passengers avoid seeing the collapsed victim on an express run?",
          "Compare audible-only cubicle isolation against a visible collapse in a locked train car.",
        ],
        strategy: "Contrast lab vs field findings",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q08",
        question:
          "According to **Piliavin's Arousal–Cost–Reward Matrix**, what is the most likely outcome when **BOTH** the cost of helping (e.g. risk of violence) **AND** the cost of not helping (e.g. intense guilt watching a victim suffer) are **high**?",
        options: [
          "Immediate direct physical intervention by bystanders, because high guilt always overrides personal danger in the cost–reward calculation",
          "Walking away calmly with minimal emotional conflict, because high danger immediately eliminates physiological arousal and personal guilt",
          "Unpredictable helping driven purely by personal social norms and mood, because both cost variables cancel out in the decision matrix",
          "Indirect help (calling emergency services) or cognitive reinterpretation (redefining the victim as not needing or deserving help)",
        ],
        answerIndex: 3,
        explanation:
          "When direct intervention feels too risky (high cost of helping) yet walking away feels intensely guilty (high cost of not helping), bystanders resolve the dilemma either by lowering helping cost via indirect assistance (phoning police) or lowering non-helping guilt via cognitive reinterpretation (blaming the victim or minimising severity).",
        difficulty: "core",
        guideRef: "cost-reward-piliavin",
        hints: [
          "Direct help is blocked by high danger, yet walking away triggers high guilt.",
          "How can a bystander lower either the danger of acting or the guilt of not acting?",
        ],
        strategy: "Read the 2×2 Cost–Reward Matrix",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q09",
        question:
          "Which pattern of **gender and race** effects did **Piliavin et al. (1969)** observe among helpers on the New York subway?",
        options: [
          "90% of spontaneous first helpers were male, and a slight same-race helping preference appeared only in the drunk condition.",
          "90% of spontaneous first helpers were female, and strong same-race bias appeared in both cane and drunk conditions.",
          "Men and women helped at identical 50% rates, and passengers only helped victims of their own race.",
          "Women helped the drunk victim faster than men because empathic concern overrode physical risk.",
        ],
        answerIndex: 0,
        explanation:
          "Although men made up roughly 60% of carriage passengers, 90% of first helpers were male (consistent with lower physical risk/effort costs for lifting an adult man and traditional male protector norms). Same-race preference emerged only when the victim was drunk (high cost of helping), not when ill with a cane.",
        difficulty: "core",
        guideRef: "cost-reward-piliavin",
        hints: [
          "Consider physical lifting cost and social role expectations for lifting a collapsed adult man.",
          "Did race matter when the victim clearly had an innocent medical need (cane)?",
        ],
        strategy: "Link demographics to cost-reward",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q10",
        question:
          "Why is **Piliavin et al.'s (1969)** Arousal–Cost–Reward Model classified as an **egoistic** rather than altruistic explanation of prosocial behaviour?",
        options: [
          "Because it claims bystanders never feel physiological arousal when witnessing emergencies",
          "Because its central premise is that bystanders help primarily to relieve their own unpleasant physiological arousal at minimal personal cost",
          "Because it argues only genetically related kin ever receive help on public transport",
          "Because it assumes bystanders help solely to win cash rewards from authorities",
        ],
        answerIndex: 1,
        explanation:
          "In Piliavin's model, witnessing suffering causes aversive physiological arousal; helping is chosen instrumentally as the most efficient way to eliminate the bystander's own unpleasant internal state — making the ultimate motive self-serving (egoistic).",
        difficulty: "core",
        guideRef: "cost-reward-piliavin",
        hints: [
          "Whose discomfort is the bystander ultimately trying to switch off in Piliavin's model?",
          "Recall the strict definition of egoistic vs altruistic motivation.",
        ],
        strategy: "Identify ultimate motivation",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q11",
        question:
          "In **Levine, Norenzayan & Philbrick's (2001)** cross-cultural field study across **23 large cities**, which two variables best predicted differences in street helping rates?",
        options: [
          "High economic purchasing power (positively linked to helping) and cultural values of *simpatía* (negatively linked to helping)",
          "Total metropolitan population size (positively linked to helping) and strict public policing density (negatively linked to helping)",
          "Cultural values of *simpatía* (positively linked to helping) and economic productivity / fast walking pace (negatively linked to helping)",
          "High pedestrian walking pace (positively linked to helping) and average national winter temperature (negatively linked to helping)",
        ],
        answerIndex: 2,
        explanation:
          "Levine et al. (2001) found that cities with Latin American simpatía traditions (e.g. Rio de Janeiro ~93%, San José ~91%) had the highest helping rates, whereas economically wealthier, fast-paced cities (e.g. Kuala Lumpur, New York, Singapore) had significantly lower helping rates.",
        difficulty: "core",
        guideRef: "cost-reward-piliavin",
        hints: [
          "Which cultural norm in Rio de Janeiro and San José promoted warmth toward strangers?",
          "How did economic purchasing power and pedestrian walking speed correlate with helping?",
        ],
        strategy: "Connect culture and pace of life",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q12",
        question:
          "Which ethical criticism applies **specifically** to **Piliavin et al.'s (1969)** subway field experiment in a way that did *not* apply to **Latané & Darley's (1968)** laboratory study?",
        options: [
          "Participants were deceived about the true aim of the emergency",
          "Participants experienced temporary emotional arousal when witnessing an emergency",
          "Only male participants were exposed to the staged emergency",
          "Commuters gave zero prior consent, could not withdraw between express stops, and were never debriefed afterwards",
        ],
        answerIndex: 3,
        explanation:
          "Both studies used deception and induced distress, and Piliavin's sample included both men and women. However, Latané & Darley obtained lab participation consent and thoroughly debriefed every student afterwards, whereas Piliavin's 4,450 express-train commuters could neither consent, exit a moving train for 7.5 minutes, nor receive a debrief.",
        difficulty: "challenge",
        guideRef: "cost-reward-piliavin",
        hints: [
          "Eliminate issues shared by BOTH studies (deception and distress).",
          "What happens to consent, withdrawal, and debriefing on a non-stop express subway train?",
        ],
        strategy: "Compare ethical trade-offs",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q13",
        question:
          "In **Darley & Batson's (1973)** 'Good Samaritan' situational study, theological seminary students walked past a slumped, coughing stranger in an alleyway. Which situational variable caused helping to plunge from **63%** to **10%**?",
        options: [
          "High time pressure (being told they were already late for their talk)",
          "Being asked to prepare a talk on seminary career jobs rather than the Good Samaritan parable",
          "Presence of four passive confederates standing silently in the alley",
          "The stranger holding a brown paper bag smelling of alcohol",
        ],
        answerIndex: 0,
        explanation:
          "Time pressure dominated helping: 63% helped in low hurry, 45% in medium hurry, and just 10% in high hurry — remarkably, even students rushing to deliver a sermon on the Good Samaritan stepped right over the victim!",
        difficulty: "core",
        guideRef: "cost-reward-piliavin",
        hints: [
          "Think about Step 1 (noticing) and the personal cost of delay when running late.",
          "Which situational variable varied across low (63%), medium (45%), and high (10%) conditions?",
        ],
        strategy: "Isolate situational variables",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q14",
        question:
          "A cyclist wipes out on wet tarmac outside a café with **10** patrons watching from under the awning. Nobody speaks, and each patron assumes one of the other nine patrons has already dialled 995. What percentage of equal personal responsibility sits on each patron, and why might **audience inhibition** also stop someone from running out?",
        options: [
          "20% share; fear of catching a cold in the rain",
          "10% share; fear of embarrassment or looking incompetent in front of café onlookers if the cyclist is unhurt",
          "100% share; belief that cyclists always prefer to recover without assistance",
          "5% share; physiological inability to hear noises through café glass",
        ],
        answerIndex: 1,
        explanation:
          "Across 10 witnesses, equal diffusion of responsibility leaves 100% ÷ 10 = 10% perceived obligation per patron (Step 3). Audience inhibition (Step 5) adds fear of social embarrassment in front of watching peers if one's help is clumsy or unwanted.",
        difficulty: "core",
        guideRef: "bystander-apathy",
        hints: [
          "Divide 100% equally across the 10 watching patrons.",
          "What does 'audience inhibition' mean at Step 5 of Latané & Darley's model?",
        ],
        strategy: "Combine calculation with concept",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m1-q15",
        question:
          "Which methodological advantage makes **Latané & Darley (1968)** stronger than **Piliavin et al. (1969)** for establishing a strict **cause-and-effect** relationship between group size and helping?",
        options: [
          "Naturalistic commuter behaviour free from laboratory artificiality",
          "A much larger sample of 4,450 diverse urban adults",
          "Random allocation to standardised perceived group sizes using an identical pre-recorded seizure tape",
          "Testing two different victim types (ill vs drunk) in the same setting",
        ],
        answerIndex: 2,
        explanation:
          "In Piliavin's subway field study, carriage crowd size varied naturally with time of day (an uncontrolled quasi-variable, so rush-hour passenger types could confound group size). Latané & Darley randomly allocated students to 2-, 3-, or 6-person conditions while playing the exact same tape, giving superior internal validity.",
        difficulty: "challenge",
        guideRef: "bystander-apathy",
        hints: [
          "Did Piliavin et al. randomly assign how many commuters boarded each subway car?",
          "Why does random allocation + a pre-recorded audio stimulus strengthen causal inference?",
        ],
        strategy: "Evaluate internal validity",
      },
    ],
  },
  {
    id: "prosocial-behaviour-m2",
    title: "MCQ Paper 2: Biological, Empathy-Altruism & Social Learning",
    questions: [
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q01",
        question:
          "In **Hamilton's Rule** (`{{r * B > C}}`) for **kin selection**, what does the symbol **{{r}}** represent?",
        options: [
          "The reciprocal probability that a stranger will return a favour next week",
          "The rate of vicarious reinforcement observed in family role models",
          "The reduction in physiological heart-rate arousal after helping",
          "The coefficient of genetic relatedness (probability that helper and recipient share a gene by descent)",
        ],
        answerIndex: 3,
        explanation:
          "In Hamilton's (1964) kin selection formula r × B > C, r is the coefficient of genetic relatedness (e.g. 0.50 for full siblings/parents/offspring, 0.25 for aunts/grandparents, 0.125 for first cousins), B is reproductive benefit to recipient, and C is reproductive cost to helper.",
        difficulty: "warmup",
        guideRef: "biological-evolutionary",
        hints: [
          "Think about why close relatives have a larger value of r than distant cousins.",
        ],
        strategy: "Define formula symbols",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q02",
        question:
          "According to **kin selection theory**, what are the correct coefficients of genetic relatedness (**{{r}}**) for (i) a **full sibling**, (ii) an **aunt**, and (iii) a **first cousin**?",
        options: [
          "0.50, 0.25, and 0.125",
          "1.00, 0.50, and 0.25",
          "0.50, 0.50, and 0.25",
          "0.25, 0.125, and 0.0625",
        ],
        answerIndex: 0,
        explanation:
          "Full siblings share on average 50% of segregating alleles (r = 0.50), aunts/uncles/grandparents/half-siblings share 25% (r = 0.25), and first cousins share 12.5% (r = 0.125). Only monozygotic (identical) twins have r = 1.00.",
        difficulty: "warmup",
        guideRef: "biological-evolutionary",
        hints: [
          "Start at 0.50 for a full sibling and halve r for each generational step outward.",
        ],
        strategy: "Halve relatedness per step",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q03",
        question:
          "A helper faces a personal reproductive cost of **{{C = 0.20}}** to provide a survival benefit of **{{B = 1.00}}** to one relative. Under **Hamilton's Rule** (`{{r * B > C}}`), for which relative will kin selection **NOT** favour the helping act?",
        options: [
          "Identical twin (r = 1.00)",
          "First cousin (r = 0.125)",
          "Full brother (r = 0.50)",
          "Maternal grandmother (r = 0.25)",
        ],
        answerIndex: 1,
        explanation:
          "Compute r × B for each relative: identical twin = 1.00 > 0.20; full brother = 0.50 > 0.20; grandmother = 0.25 > 0.20; first cousin = 0.125 × 1.00 = 0.125, which is LESS than C = 0.20, failing Hamilton's Rule.",
        difficulty: "core",
        guideRef: "biological-evolutionary",
        hints: [
          "Multiply each relative's r by B = 1.00 and check whether the product is strictly greater than 0.20.",
          "Which relative has r < 0.20?",
        ],
        strategy: "Substitute into Hamilton's Rule",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q04",
        question:
          "Two unrelated neighbours take turns feeding each other's cats during holidays, knowing that if either neighbour refuses to reciprocate, future favours will stop. Which evolutionary mechanism explains this behaviour?",
        options: [
          "Inclusive fitness via shared alleles",
          "Pluralistic ignorance",
          "Trivers's (1971) reciprocal altruism",
          "Hoffman's love-withdrawal socialisation",
        ],
        answerIndex: 2,
        explanation:
          "Because the neighbours are genetically unrelated (r = 0), kin selection cannot apply. Trivers's (1971) reciprocal altruism explains cooperation between non-relatives when repeated interactions allow mutual low-cost favours and cheater detection.",
        difficulty: "warmup",
        guideRef: "biological-evolutionary",
        hints: [
          "Notice the neighbours are unrelated (r = 0) and interact repeatedly over time.",
        ],
        strategy: "Check relatedness r = 0 vs r > 0",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q05",
        question:
          "In **Rushton et al.'s (1986)** twin study of **573 adult twin pairs**, approximately what proportion of variance in **altruism and empathy** was attributed to **additive genetic factors**, **shared family environment**, and **unique non-shared environment**?",
        options: [
          "~100% genetic, ~0% shared family environment, ~0% non-shared environment",
          "~20% genetic, ~60% shared family environment, ~20% non-shared environment",
          "~0% genetic, ~50% shared family environment, ~50% non-shared environment",
          "~50% genetic, ~0% shared family environment, ~50% unique non-shared environment",
        ],
        answerIndex: 3,
        explanation:
          "Rushton et al. (1986) found MZ twin correlations (~0.53–0.54) roughly double DZ correlations (~0.20–0.25), estimating ~50% additive genetic variance, ~0% shared upbringing variance, and ~50% unique non-shared environmental variance (plus measurement error).",
        difficulty: "core",
        guideRef: "biological-evolutionary",
        hints: [
          "Remember nature and unique experience split the variance roughly in half.",
          "Surprisingly, shared household upbringing accounted for almost zero variance in Rushton's model.",
        ],
        strategy: "Recall core twin-study split",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q06",
        question:
          "Which criticism is a valid **methodological limitation** of **Rushton et al.'s (1986)** twin study of altruism?",
        options: [
          "Altruism was measured via postal self-report questionnaires, which are vulnerable to social desirability bias rather than observing real costly helping.",
          "The sample included only 12 monozygotic and dizygotic twin pairs from one hospital, making statistical heritability estimates too small to generalise.",
          "Dizygotic twins share 100% of their segregating genes while monozygotic twins share only 50%, preventing researchers from isolating genetic variance.",
          "Twins were placed in isolated intercom cubicles and deceived into believing their co-twin was suffering a seizure, breaching ethical protection from harm.",
        ],
        answerIndex: 0,
        explanation:
          "Rushton et al. (1986) had a large sample (573 twin pairs) and compared MZ (100% shared DNA) against DZ (~50% shared DNA), but relied entirely on postal self-report scales — meaning twins could exaggerate their own generosity (social desirability bias).",
        difficulty: "core",
        guideRef: "biological-evolutionary",
        hints: [
          "How did Rushton et al. actually measure whether twins were altruistic — by watching them or asking them?",
          "What bias affects people rating their own kindness on paper?",
        ],
        strategy: "Critique self-report validity",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q07",
        question:
          "According to **Batson's Empathy–Altruism Hypothesis**, what happens when a bystander feels high **personal distress** (rather than empathic concern) and **escaping the scene is easy**?",
        options: [
          "They help at an 82% rate to ensure the victim recovers fully.",
          "They leave the scene without helping, because walking away relieves their own anxiety more cheaply than intervening.",
          "They summon four additional bystanders to increase inclusive fitness.",
          "They help even more enthusiastically than in the difficult-escape condition.",
        ],
        answerIndex: 1,
        explanation:
          "Personal distress is self-oriented anxiety aimed at reducing the bystander's own discomfort (egoistic motive). When escape is easy, leaving stops exposure to the victim's suffering at minimal cost — in Batson et al. (1981), helping dropped from 64% (difficult escape) to 18% (easy escape).",
        difficulty: "core",
        guideRef: "empathy-social-learning",
        hints: [
          "Distinguish self-oriented personal distress from other-oriented empathic concern.",
          "What is the easiest way to stop your own anxiety if you are allowed to walk out the door?",
        ],
        strategy: "Trace Batson's dual pathways",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q08",
        question:
          "In **Batson et al.'s (1981)** 'Elaine' electric-shock experiment, which crucial finding supported the existence of **true altruism**?",
        options: [
          "Low-empathy participants never helped Elaine even when forced to watch all 10 shock trials.",
          "Participants only helped Elaine when promised $20 by the experimenter.",
          "High-empathy participants still volunteered to take Elaine's shocks at a very high rate (82%) even when they could easily leave after Trial 2.",
          "Participants helped Elaine faster when four other observers were watching.",
        ],
        answerIndex: 2,
        explanation:
          "If high-empathy observers had been motivated egoistically just to avoid watching Elaine suffer, they would have taken the easy exit after Trial 2. The fact that 82% stayed to take shocks in the easy-escape condition (nearly matching 91% in difficult escape) supports genuine other-oriented altruism.",
        difficulty: "core",
        guideRef: "empathy-social-learning",
        hints: [
          "Focus on the High Empathy + Easy Escape cell of Batson's 2×2 design.",
          "Why does helping when you could freely walk out refute simple distress-avoidance?",
        ],
        strategy: "Focus on the decisive 2×2 cell",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q09",
        question:
          "A Year 11 student watches an older prefect receive warm praise from the principal after helping a lost Year 7 student find her classroom. The next day, the Year 11 student guides another new pupil to assembly. Which **Social Learning Theory** concept best explains this?",
        options: [
          "Genetic kin selection",
          "Pluralistic ignorance",
          "Negative-state relief",
          "Vicarious reinforcement",
        ],
        answerIndex: 3,
        explanation:
          "In Bandura's Social Learning Theory, vicarious reinforcement occurs when an observer becomes more motivated to imitate a behaviour after seeing a role model rewarded or praised for performing it — without receiving the initial reward directly.",
        difficulty: "warmup",
        guideRef: "empathy-social-learning",
        hints: [
          "Who received the principal's praise first — the Year 11 observer or the prefect model?",
        ],
        strategy: "Spot vicarious vs direct reward",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q10",
        question:
          "In **Bryan & Test's (1967)** roadside field experiment in Los Angeles, motorists were ~50% more likely to stop for a woman with a flat tyre if they had just driven past a staged scene 400 metres earlier showing a man changing another woman's tyre. Which process does this demonstrate?",
        options: [
          "Prosocial role-model imitation / observational learning",
          "Biological oxytocin administration",
          "Cognitive reinterpretation of high-cost emergencies",
          "Inductive parental discipline",
        ],
        answerIndex: 0,
        explanation:
          "Seeing a helpful roadside model reminded motorists of the social norm of helping and demonstrated an actionable prosocial script, increasing observational imitation 400 metres down the road.",
        difficulty: "core",
        guideRef: "empathy-social-learning",
        hints: [
          "What changed between the experimental and control motorists? Presence of an earlier helpful model!",
          "Connect this to Bandura's observational learning.",
        ],
        strategy: "Identify IV in modelling studies",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q11",
        question:
          "Which pair correctly contrasts the **norm of reciprocity** with the **norm of social responsibility**?",
        options: [
          "Reciprocity obliges us to help vulnerable strangers without expecting return favours, whereas social responsibility instructs us to repay only people who have assisted us before.",
          "Reciprocity instructs us to return help to those who have helped us, whereas social responsibility instructs us to help dependent people in need even if they can never pay us back.",
          "Reciprocity applies exclusively to close biological relatives who share DNA by descent, whereas social responsibility applies exclusively to paid workplace roles and formal contracts.",
          "Reciprocity reduces charitable giving whenever unsolicited small gifts are offered, whereas social responsibility encourages diffusion of responsibility inside large crowded groups.",
        ],
        answerIndex: 1,
        explanation:
          "Gouldner's (1960) reciprocity norm requires returning favours to prior benefactors, whereas Berkowitz's (1972) social responsibility norm obliges us to assist vulnerable/dependent people (e.g. young children, frail elderly, sick commuters) without expecting payback.",
        difficulty: "core",
        guideRef: "empathy-social-learning",
        hints: [
          "Can a frail elderly stranger or newborn baby 'pay you back' equally? Which norm covers helping them?",
          "What does 'reciprocal' mean in everyday English?",
        ],
        strategy: "Contrast twin social norms",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q12",
        question:
          "How did **Cialdini et al. (1987)** challenge **Batson's Empathy–Altruism Hypothesis** using the **Negative-State Relief Model**?",
        options: [
          "They argued that high-empathy participants only volunteered to take Elaine's shocks because they expected cash payment or public praise from the experimenter.",
          "They replicated Batson's easy-escape procedure and found that high-empathy participants actually helped significantly less often than low-empathy participants.",
          "They argued empathetic observers feel personal sadness that persists even if they walk out the door, so helping is still an egoistic way to lift their own sad mood.",
          "They claimed that empathetic observers experience zero emotional distress when watching a victim suffer, proving helping is driven purely by innate kin selection.",
        ],
        answerIndex: 2,
        explanation:
          "Cialdini argued that perspective-taking makes observers sad, and physically leaving the lab does not erase sadness in memory — therefore, helping Elaine might still be an egoistic mood-boosting strategy rather than pure selflessness.",
        difficulty: "challenge",
        guideRef: "empathy-social-learning",
        hints: [
          "Think about why physically walking away might stop acute alarm, yet fail to erase sadness.",
          "How does 'Negative-State Relief' reframe kindness as mood repair?",
        ],
        strategy: "Evaluate competing theories",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q13",
        question:
          "Which sequence gives **Bandura's (1977)** four mediational cognitive processes in **Social Learning Theory** in the correct order?",
        options: [
          "Motivation → Imitation → Habituation → Extinction",
          "Notice → Interpret → Responsibility → Implement",
          "Attention → Retention → Motor reproduction → Motivation",
          "Sensation → Arousal → Cost analysis → Reward",
        ],
        answerIndex: 2,
        explanation:
          "Bandura's (1977) four mediational steps (mnemonic ARMM) are Attention (noticing the model's prosocial act), Retention (encoding the script in memory), Motor reproduction (possessing physical/practical skill to perform it), and Motivation (expecting direct or vicarious reinforcement).",
        difficulty: "warmup",
        guideRef: "empathy-social-learning",
        hints: [
          "Use the mnemonic A-R-M-M (Attention, Retention, Motor reproduction, Motivation).",
        ],
        strategy: "Use ARMM mnemonic",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q14",
        question:
          "Which real-world action poses the **strongest challenge** to purely **evolutionary explanations** (kin selection and reciprocal altruism) of human helping?",
        options: [
          "A mother undergoing painful surgery to donate bone marrow so her biological daughter can recover from a serious illness",
          "Two university flatmates taking turns cooking evening meals and sharing revision notes throughout a busy final exam week",
          "A neighbourhood bakery owner giving regular loyal customers a complimentary box of pastries every Lunar New Year holiday",
          "An anonymous tourist diving onto railway tracks to save an unrelated stranger in a city she will leave forever that evening",
        ],
        answerIndex: 3,
        explanation:
          "Saving a daughter fits kin selection (r = 0.50); flatmates and loyal customers fit reciprocal altruism (repeated interactions). Risking one's life anonymously for an unrelated stranger with zero chance of future encounter violates both r × B > C (since r = 0) and reciprocity — pointing instead to empathy-altruism or internalised moral norms.",
        difficulty: "challenge",
        guideRef: "biological-evolutionary",
        hints: [
          "Eliminate scenarios where r > 0 (kin) or where repeated future favours are possible (reciprocity).",
          "Look for r = 0 + high personal cost + zero future contact.",
        ],
        strategy: "Test boundary conditions of a theory",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m2-q15",
        question:
          "Which neurochemical is most closely linked in biological psychology to **social bonding, trust, and in-group empathy**?",
        options: [
          "Melatonin",
          "Oxytocin",
          "Cortisol",
          "Adrenaline",
        ],
        answerIndex: 1,
        explanation:
          "Oxytocin (secreted by the hypothalamus/posterior pituitary) promotes social bonding, maternal care, trust, and empathic sensitivity toward in-group members. Melatonin regulates sleep; cortisol and adrenaline mediate stress responses.",
        difficulty: "warmup",
        guideRef: "biological-evolutionary",
        hints: [
          "Which neuropeptide is nicknamed the 'bonding' or 'trust' hormone?",
        ],
        strategy: "Match hormone to function",
      },
    ],
  },
  {
    id: "prosocial-behaviour-m3",
    title: "MCQ Paper 3: Parenting, Media & Synoptic CIE 0266 Evaluation",
    questions: [
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q01",
        question:
          "According to **Hoffman (2000)**, which parental discipline style is most effective at cultivating **internalised empathy and long-term prosocial behaviour** in children?",
        options: [
          "Power assertion — using strict punishments and confiscating privileges whenever a child refuses to share",
          "Love withdrawal — ignoring the child until they apologise",
          "Permissive non-intervention — never commenting when a child hurts a peer",
          "Inductive reasoning — calmly explaining how the child's behaviour affected another person's feelings and suggesting ways to repair harm",
        ],
        answerIndex: 3,
        explanation:
          "Hoffman's inductive discipline directs the child's attention to the victim's distress and the causal link from the child's own action, training perspective-taking and internalised moral motivation rather than external fear.",
        difficulty: "warmup",
        guideRef: "media-parental-influences",
        hints: [
          "Which style teaches *why* someone else feels hurt rather than making the child fear punishment?",
        ],
        strategy: "Contrast internalisation vs fear",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q02",
        question:
          "Why does **power-assertive** parenting often fail to produce prosocial behaviour when adults are **not watching**?",
        options: [
          "Harsh threats focus the child on self-focused fear and external compliance ('don't get caught') rather than empathic concern for peers.",
          "Power-assertive discipline relies too heavily on calm perspective-taking explanations, leaving young children unsure of explicit behavioural rules.",
          "Strict punishment completely suppresses physiological arousal when children witness peer distress, making them unable to notice emergencies.",
          "Because children only imitate warm peers rather than adult authority figures, parental discipline styles have zero effect on supervised behaviour.",
        ],
        answerIndex: 0,
        explanation:
          "Punishment and threats arouse self-oriented anger/anxiety and tie behaviour to external surveillance; once the authority figure leaves, external motivation vanishes because internalised empathy was never built.",
        difficulty: "core",
        guideRef: "media-parental-influences",
        hints: [
          "Think about where the child's attention goes during a punishment threat — onto the hurt peer or onto themselves?",
          "Link to external vs internalised motivation.",
        ],
        strategy: "Trace emotional focus",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q03",
        question:
          "In **Prot et al.'s (2014)** investigation of prosocial media, what were the samples and designs of **Study 1** and **Study 2**?",
        options: [
          "Study 1: 36 infants on a glass table; Study 2: 109 male college students in an outdoor field",
          "Study 1: 11,783 youths surveyed across 7 countries; Study 2: 3,034 Singaporean youths tracked longitudinally across 3 waves over 2 years",
          "Study 1: 4,450 New York subway riders; Study 2: 573 adult twin pairs in London",
          "Study 1: 72 Columbia intercom students; Study 2: 23 cities tested with dropped pens",
        ],
        answerIndex: 1,
        explanation:
          "Prot et al. (2014) combined a 7-country cross-cultural correlational study of 11,783 youths (Australia, China, Croatia, Germany, Japan, Romania, USA) with a 2-year, 3-wave longitudinal study of 3,034 children and adolescents in Singapore.",
        difficulty: "core",
        guideRef: "media-parental-influences",
        hints: [
          "Recall the large cross-national survey plus the 2-year Singapore school panel!",
          "Eliminate samples from Gibson & Walk, Piliavin, Rushton, and Latané & Darley.",
        ],
        strategy: "Match named study to exact sample",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q04",
        question:
          "In **Prot et al. (2014)** Study 2, which psychological variable acted as the **mediator** linking Wave 1 prosocial video game play to Wave 3 prosocial helping?",
        options: [
          "Fear of parental punishment at Wave 2",
          "Pluralistic ignorance at Wave 2",
          "Trait empathy at Wave 2",
          "Walking speed at Wave 2",
        ],
        answerIndex: 2,
        explanation:
          "Across both the 7-country cross-sectional sample and the 3-wave Singapore longitudinal study, prosocial media exposure predicted increases in trait empathy, which in turn predicted higher prosocial helping behaviour.",
        difficulty: "warmup",
        guideRef: "media-parental-influences",
        hints: [
          "What emotional-cognitive trait sits as the bridge between prosocial games and real-world helping?",
        ],
        strategy: "Identify the mediating variable",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q05",
        question:
          "Why was **Study 2** of **Prot et al. (2014)** methodologically crucial for strengthening **Study 1**?",
        options: [
          "Study 2 randomly assigned Singaporean youths to play cooperative or neutral games in a laboratory and timed real helping, establishing full experimental causation.",
          "Study 2 replaced Study 1's self-report scales with covert naturalistic street observations across 23 cities, eliminating social desirability bias in helping scores.",
          "Study 2 widened Study 1's single-nation Singapore sample by surveying 11,783 youths across seven Eastern and Western nations to improve population generalisability.",
          "Study 2's 3-wave longitudinal design controlled for Wave 1 baseline helping, showing prosocial gaming preceded later empathy and helping gains rather than just prior kindness.",
        ],
        answerIndex: 3,
        explanation:
          "A single cross-sectional snapshot (Study 1) suffers from the directionality problem: kind youths might simply pick kind games. Tracking 3,034 Singaporean youths across 3 waves over 2 years while controlling for Wave 1 baseline helping demonstrated temporal precedence.",
        difficulty: "challenge",
        guideRef: "media-parental-influences",
        hints: [
          "What can a 3-wave longitudinal design establish that a one-off cross-sectional survey cannot?",
          "Think about the 'selection effect' (do kind kids pick kind games, or do kind games build kindness?).",
        ],
        strategy: "Compare cross-sectional vs longitudinal",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q06",
        question:
          "In **Whiting & Whiting's (1975)** *Six Cultures Study*, children in rural Kenya, Mexico, and the Philippines showed markedly higher everyday altruistic behaviour than children in middle-class US Orchard Town primarily because:",
        options: [
          "Children in those collectivist communities routinely performed genuine family-care responsibilities such as tending younger siblings and household tasks.",
          "Children in Kenya, Mexico, and the Philippines played 4 hours of prosocial video games daily in 1975.",
          "Children in Orchard Town shared 0% of their genes with their siblings.",
          "Parents in rural Kenya relied exclusively on love withdrawal.",
        ],
        answerIndex: 0,
        explanation:
          "Whiting & Whiting (1975) showed that assigning children meaningful, interdependent responsibilities that genuinely benefit family welfare (such as sibling caregiving) rehearses prosocial habits daily.",
        difficulty: "core",
        guideRef: "media-parental-influences",
        hints: [
          "What everyday household duties differed between collectivist rural communities and affluent suburban USA in 1975?",
          "Connect guided practice of caregiving to prosocial development.",
        ],
        strategy: "Link cultural practice to behaviour",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q07",
        question:
          "According to **Clary & Miller's (1986)** study of crisis-hotline volunteers, what combination of **parental modelling and preaching** produced volunteers who sustained their commitment for the full 6 months?",
        options: [
          "Parents who lectured weekly about charity while never volunteering themselves ('hypocritical' models)",
          "Parents who both expressed warm prosocial values AND actively modelled costly helping behaviour themselves",
          "Parents who paid children cash for every chore completed at home",
          "Parents who forbade children from discussing emotions at the dinner table",
        ],
        answerIndex: 1,
        explanation:
          "Consistent parental models who practised the generosity they preached fostered internalised sustained volunteering, whereas 'hypocritical' models (preaching without practising) produced volunteers who quit early.",
        difficulty: "core",
        guideRef: "media-parental-influences",
        hints: [
          "Compare 'practising what you preach' against hypocritical preaching.",
          "Which builds durable internalised values?",
        ],
        strategy: "Evaluate model consistency",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q08",
        question:
          "How does Buckley & Anderson's **General Learning Model (GLM)** explain why cooperative video games can have a powerful prosocial effect?",
        options: [
          "Cooperative games activate innate biological kin-selection reflexes by convincing the brain that online avatars share genetic relatedness with the player.",
          "Players absorb prosocial norms purely through passive unconscious exposure during gaming, without needing active practice, emotion, or feedback rewards.",
          "Players actively rehearse prosocial cognitive scripts, practise perspective-taking, and receive immediate positive reinforcement for helping teammates.",
          "Playing cooperative games heightens audience inhibition and personal distress, forcing players to help strangers later purely to escape guilty arousal.",
        ],
        answerIndex: 2,
        explanation:
          "Unlike passive television, interactive cooperative games require the learner to choose helpful actions repeatedly and reward cooperation immediately — strengthening prosocial cognitive scripts and trait empathy.",
        difficulty: "core",
        guideRef: "media-parental-influences",
        hints: [
          "Combine cognitive scripts with active participation and operant reinforcement.",
          "Why is *playing* a rescue game more active than *watching* a cartoon?",
        ],
        strategy: "Synthesise cognitive + learning mechanisms",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q09",
        question:
          "Which of the four named CIE 0266 Prosocial Behaviour studies used a **naturalistic field experiment** with covert observers?",
        options: [
          "Latané & Darley (1968)",
          "Rushton et al. (1986)",
          "Prot et al. (2014)",
          "Piliavin, Rodin & Piliavin (1969)",
        ],
        answerIndex: 3,
        explanation:
          "Piliavin et al. (1969) manipulated victim type (cane vs drunk) on real New York express subway trains while two female observers covertly recorded commuter responses. Latané & Darley was a lab experiment; Rushton et al. and Prot et al. were non-experimental questionnaire studies.",
        difficulty: "warmup",
        guideRef: "cost-reward-piliavin",
        hints: [
          "A field experiment manipulates an IV in a real-world everyday setting.",
        ],
        strategy: "Classify core study methodology",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q10",
        question:
          "In **Latané & Darley's (1968)** smoke-filled waiting room study, **75%** of solo participants reported smoke within 6 minutes, compared with **10%** when placed with two passive confederates who shrugged and kept filling out forms. What is the **65 percentage-point** drop primarily evidence for?",
        options: [
          "Pluralistic ignorance — using calm confederates as social proof that the smoke was harmless steam or air-conditioning",
          "Lack of motor competence — forgetting how to walk through a waiting-room door",
          "Kin selection — assuming confederates were first cousins",
          "Overjustification — losing intrinsic interest in questionnaires",
        ],
        answerIndex: 0,
        explanation:
          "Smoke seeping through a wall vent is ambiguous (fire vs harmless steam). Seeing two calm confederates ignore it led naive participants into pluralistic ignorance at Step 2 (interpreting the event as a non-emergency).",
        difficulty: "core",
        guideRef: "bystander-apathy",
        hints: [
          "Unlike the intercom seizure study, participants in the smoke room could *see* the calm confederates.",
          "Which Step 2 barrier occurs when calm witnesses make an ambiguous hazard look safe?",
        ],
        strategy: "Distinguish smoke room vs intercom cubicles",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q11",
        question:
          "Mei-Ling collapses with heat exhaustion at an outdoor concert. Her sister (**{{r = 0.50}}**) sprints through the crowd to help immediately, a nurse (**{{r = 0}}**) steps in because she knows heat-stroke first aid, and a bystander who just watched a paramedic drama helps carry water. Which **three** explanations work *together* in this single event?",
        options: [
          "Reciprocal altruism (sister), pluralistic ignorance in Latané & Darley's model (nurse), and power-assertive discipline (bystander)",
          "Kin selection (sister), Step 4 competence in Latané & Darley's model (nurse), and prosocial media script activation (bystander)",
          "Vicarious reinforcement (sister), audience inhibition at Step 5 (nurse), and cognitive reinterpretation of victim need (bystander)",
          "Diffusion of responsibility (sister), negative-state mood relief (nurse), and love-withdrawal socialisation (bystander)",
        ],
        answerIndex: 1,
        explanation:
          "Real-world helping is multi-determined (holistic): evolutionary kin relatedness motivates the sister (r = 0.50), medical training clears Step 4 competence for the nurse, and recent prosocial media primes helping scripts in the bystander.",
        difficulty: "challenge",
        guideRef: "biological-evolutionary",
        hints: [
          "Match each helper (sister, trained nurse, drama viewer) to her specific psychological driver.",
          "Notice how biological, cognitive, and social-learning factors complement rather than exclude each other.",
        ],
        strategy: "Apply holistic multi-level analysis",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q12",
        question:
          "Why does **Prot et al. (2014)** have dramatically higher **population generalisability** than **Latané & Darley (1968)**?",
        options: [
          "Prot et al. randomly sampled 72 male and female university undergraduates in New York, whereas Latané & Darley tested only a single clinical case.",
          "Prot et al. observed 4,450 commuting adults covertly on public subway trains across Manhattan, whereas Latané & Darley tested only preschool infants.",
          "Prot et al. sampled over 14,800 male and female youths across 8 diverse Eastern and Western nations (7 countries in Study 1 plus Singapore in Study 2).",
          "Prot et al. tested 573 adult monozygotic and dizygotic twin pairs from a British register, whereas Latané & Darley sampled only one school in Singapore.",
        ],
        answerIndex: 2,
        explanation:
          "Latané & Darley (1968) used an androcentric, ethnocentric sample of male US university students (WEIRD sample). Prot et al. (2014) sampled 11,783 youths across Australia, China, Croatia, Germany, Japan, Romania, and the USA plus 3,034 youths in Singapore, spanning collectivist and individualist cultures.",
        difficulty: "core",
        guideRef: "media-parental-influences",
        hints: [
          "Compare a single-sex US college sample against 8 countries across East and West.",
          "Use CIE 0266 population validity reasoning.",
        ],
        strategy: "Compare sample diversity (WEIRD vs cross-cultural)",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q13",
        question:
          "A charity Campaign A sends plain donation envelopes; Campaign B encloses a free packet of flower seeds with a handwritten thank-you note and receives **twice as many donations**. Campaign B succeeded by activating:",
        options: [
          "Diffusion of responsibility",
          "The norm of reciprocity",
          "Audience inhibition",
          "Genetic inclusive fitness",
        ],
        answerIndex: 1,
        explanation:
          "Receiving an unsolicited gift creates a psychological obligation under Gouldner's (1960) norm of reciprocity to return a favour by donating.",
        difficulty: "warmup",
        guideRef: "empathy-social-learning",
        hints: [
          "Why does receiving a small gift first make people feel obliged to give back?",
        ],
        strategy: "Spot reciprocity nudges",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q14",
        question:
          "In **Greitemeyer's (2009)** media experiments, university students who listened to songs with **prosocial lyrics** (*'Heal the World'*, *'Help!'*) versus neutral lyrics subsequently:",
        options: [
          "Reported higher state empathy and donated significantly more of their participation fee to a non-profit charity",
          "Reported lower personal distress but ignored an intercom emergency whenever four other listeners were present",
          "Showed lower trait empathy and made harsher moral judgements because lyrical distractions lowered cognitive attention",
          "Donated the exact same amount as neutral-lyric listeners, showing audio media cannot prime helping scripts",
        ],
        answerIndex: 0,
        explanation:
          "Consistent with the General Learning Model and Prot et al. (2014), prosocial song lyrics primed prosocial thoughts and empathic feelings, increasing real charitable donations.",
        difficulty: "core",
        guideRef: "media-parental-influences",
        hints: [
          "Apply the General Learning Model: prosocial media primes prosocial cognition + empathy → helping.",
          "Check which outcome measures real prosocial behaviour.",
        ],
        strategy: "Extend GLM from games to music",
      },
      {
        kind: "mcq",
        id: "prosocial-behaviour-m3-q15",
        question:
          "Suppose a researcher wants to prove **experimentally** (with full cause-and-effect validity) whether playing a cooperative rescue video game increases real helping in Year 11 students. Which design fixes the main methodological limitation of **Prot et al. (2014)**?",
        options: [
          "Posting an anonymous online self-report survey across five schools asking 500 Year 11 gamers to rate their weekly rescue-game hours and how helpful they consider themselves",
          "Conducting semi-structured retrospective interviews with parents about which cooperative games their teenagers played at age six, then coding themes of childhood kindness",
          "Randomly allocating students to play a cooperative rescue game or a matched neutral game for 20 minutes, then counting how many 'accidentally' spilled pencils each student picks up",
          "Tracking monozygotic and dizygotic Year 11 twin pairs across two school terms to correlate their self-chosen weekly video-game genres with teacher ratings of classroom empathy",
        ],
        answerIndex: 2,
        explanation:
          "Prot et al. (2014) used non-experimental self-report surveys. Randomly allocating participants to a prosocial vs neutral game (manipulated IV with standardized playtime) and covertly measuring an objective behavioural DV (pencils picked up) eliminates selection bias and social desirability bias to establish causation.",
        difficulty: "challenge",
        guideRef: "media-parental-influences",
        hints: [
          "What two weaknesses remained in Prot et al. (2014)? Non-experimental correlation + self-report bias.",
          "How do random allocation and a covert behavioural DV solve both?",
        ],
        strategy: "Design an experimental upgrade",
      },
    ],
  },
];
