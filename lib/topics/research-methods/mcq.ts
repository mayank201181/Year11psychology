import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "research-methods-m1",
    title: "MCQ Paper 1 — Variables, Hypotheses, Designs & Sampling",
    questions: [
      {
        kind: "mcq",
        id: "research-methods-m1-q01",
        question:
          "Dr Lim tests whether drinking 200 ml of peppermint tea or 200 ml of warm water affects the number of anagrams solved in 3 minutes. What is the **operationalised Dependent Variable (DV)**?",
        options: [
          "The number of anagrams solved accurately in 3 minutes",
          "Whether participants drank 200 ml of peppermint tea or 200 ml of warm water",
          "Cognitive problem-solving ability",
          "Room temperature in the testing laboratory",
        ],
        answerIndex: 0,
        explanation:
          "The DV is the measured outcome operationalised in exact units — the number of anagrams solved in 3 minutes. Peppermint tea vs warm water is the operationalised IV, 'cognitive problem-solving ability' is un-operationalised, and room temperature is a situational variable.",
        difficulty: "warmup",
        guideRef: "variables-hypotheses-controls",
        hints: ["Ask: what is Dr Lim measuring at the end of the 3 minutes, and in what exact units?"],
        strategy: "Separate manipulated IV from measured DV",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q02",
        question:
          "Which statement is a properly **operationalised non-directional (two-tailed) hypothesis**?",
        options: [
          "Participants who study flashcards will recall more French words out of 30 than those who re-read notes.",
          "There will be a difference in the number of French words recalled out of 30 between participants who study flashcards for 10 minutes and those who re-read notes for 10 minutes.",
          "There will be no significant difference in the number of French words recalled out of 30 between flashcard users and note re-readers.",
          "Studying flashcards causes a difference in memory compared with re-reading notes.",
        ],
        answerIndex: 1,
        explanation:
          "A non-directional hypothesis predicts 'a difference' without stating which group will score higher, while operationalising both IV (10 minutes flashcards vs 10 minutes re-reading) and DV (words recalled out of 30). Predicting 'more words' is directional, 'no significant difference' is null, and 'memory' is un-operationalised.",
        difficulty: "core",
        guideRef: "variables-hypotheses-controls",
        hints: [
          "Non-directional hypotheses predict a difference without saying 'higher' or 'more'.",
          "Check that BOTH the study method time and the exact score out of 30 are stated.",
        ],
        strategy: "Check direction + operationalisation",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q03",
        question:
          "In a study on lighting and typing accuracy, all bright-light participants are tested at 09:00 and all dim-light participants are tested at 22:00 when exhausted. Time of day has become a **confounding variable** because it:",
        options: [
          "Was deliberately operationalised by the researcher as a second Dependent Variable alongside the number of typing errors made",
          "Varied randomly and unpredictably across individuals in both lighting conditions, adding minor unsystematic noise to typing scores",
          "Varied systematically with the Independent Variable, making it unclear whether light level or fatigue caused the accuracy difference",
          "Standardised the testing procedure across conditions by keeping lighting conditions separated, thereby improving internal validity",
        ],
        answerIndex: 2,
        explanation:
          "An extraneous variable turns into a confounding variable when it changes systematically alongside the IV (every dim-light participant was also tired at 22:00), destroying internal validity.",
        difficulty: "core",
        guideRef: "variables-hypotheses-controls",
        hints: [
          "Compare how an extraneous nuisance differs from a systematic confound.",
          "Notice that every person in one IV condition also shares the exact same late-night timing.",
        ],
        strategy: "Spot systematic co-variation with the IV",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q04",
        question:
          "Why would a psychologist use a **double-blind procedure** rather than a single-blind procedure in a caffeine-pill study?",
        options: [
          "To eliminate participant order effects without needing counterbalancing",
          "To ensure the sample is proportionally representative of the target population",
          "To convert qualitative interview transcripts into quantitative tallies",
          "To control both participant demand characteristics and unconscious investigator effects",
        ],
        answerIndex: 3,
        explanation:
          "Single-blind hides condition allocation from participants (curbing demand characteristics), whereas double-blind ALSO hides condition allocation from the researcher interacting with them (curbing unconscious investigator cues and biased scoring).",
        difficulty: "core",
        guideRef: "variables-hypotheses-controls",
        hints: [
          "Who is kept 'blind' in single-blind vs double-blind?",
          "Remember Clever Hans: even honest researchers give away subtle body-language cues when they know the condition.",
        ],
        strategy: "Match control technique to specific bias",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q05",
        question:
          "Piliavin et al. (1969) staged collapses on real New York subway trains while manipulating whether the confederate carried a cane or smelled of alcohol. What type of research method is this?",
        options: [
          "Laboratory experiment",
          "Field experiment",
          "Natural (quasi) experiment",
          "Covert non-participant correlation",
        ],
        answerIndex: 1,
        explanation:
          "Because the researchers actively manipulated the IV (cane vs drunk appearance) inside an everyday real-world environment (the New York subway), it is a field experiment — combining natural behaviour with experimental manipulation.",
        difficulty: "warmup",
        guideRef: "experiments-designs-sampling",
        hints: ["Check two things: was the setting everyday life, and did the researchers deliberately stage/manipulate the IV?"],
        strategy: "Check setting + who controls the IV",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q06",
        question:
          "Researchers compare lung-function and memory test scores of factory workers exposed to solvents for 10 years against office workers who were not exposed. Why is this a **natural/quasi experiment** rather than a field experiment?",
        options: [
          "The Independent Variable occurred naturally without the researcher manipulating it or randomly allocating people to conditions",
          "The Dependent Variable was measured using qualitative open interviews rather than numbers",
          "All testing took place inside a university laboratory room",
          "The same workers completed both conditions using ABBA counterbalancing",
        ],
        answerIndex: 0,
        explanation:
          "In a natural/quasi experiment, the IV (long-term solvent exposure) pre-exists rather than being manipulated by the researcher, and participants cannot be randomly allocated to conditions — even if the DV is measured in a controlled lab.",
        difficulty: "core",
        guideRef: "experiments-designs-sampling",
        hints: [
          "Did the psychologist assign people to breathe factory solvents for 10 years?",
          "Natural experiments rely on pre-existing groups rather than researcher manipulation.",
        ],
        strategy: "Ask who created the IV groups",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q07",
        question:
          "What is the **main advantage** of a **repeated measures design** compared with an independent measures design?",
        options: [
          "Order effects such as practice, boredom, and fatigue are completely eliminated because each participant takes part in both conditions",
          "Demand characteristics are far lower because completing all levels of the Independent Variable hides the hypothesis from participants",
          "Individual participant differences (such as baseline IQ or eyesight) are completely controlled because each person serves as their own control",
          "Only one identical stimulus set or word list is ever required across both memory conditions, saving preparation time without carry-over",
        ],
        answerIndex: 2,
        explanation:
          "Because the exact same people complete Condition A and Condition B, between-group participant variables (e.g. unequal IQ) vanish completely, and half as many participants are needed. Order effects and demand characteristics are its limitations.",
        difficulty: "warmup",
        guideRef: "experiments-designs-sampling",
        hints: ["In repeated measures, Group A and Group B are the exact same individuals!"],
        strategy: "Compare designs on participant variables vs order effects",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q08",
        question:
          "How does **ABBA counterbalancing** improve a repeated measures experiment with 24 participants?",
        options: [
          "It stops participants from ever getting tired or practised during the second condition",
          "12 participants do Condition A then B while 12 do Condition B then A, balancing order effects equally across both conditions",
          "It pairs the 24 participants into 12 twin-like pairs matched on pre-test IQ scores",
          "It guarantees the 24 participants proportionally match the age strata of the target population",
        ],
        answerIndex: 1,
        explanation:
          "Counterbalancing does NOT prevent fatigue or practice from happening — instead, having half complete A→B and half B→A spreads any second-trial fatigue or practice equally across Condition A and Condition B.",
        difficulty: "core",
        guideRef: "experiments-designs-sampling",
        hints: [
          "Beware the examiner trap: does counterbalancing stop tiredness, or balance it?",
          "Split the sample into two equal halves taking opposite condition orders.",
        ],
        strategy: "Watch out for 'stops' vs 'balances' order effects",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q09",
        question:
          "A psychology student stands outside a shopping-mall MRT exit at lunchtime and asks the first 25 passers-by who agree to fill out a sleep habit scale. Which sampling method is this?",
        options: [
          "Random sampling",
          "Stratified sampling",
          "Systematic sampling",
          "Opportunity sampling",
        ],
        answerIndex: 3,
        explanation:
          "Recruiting whoever happens to be conveniently present and willing at the time is opportunity sampling — NOT random sampling (which requires every member of a complete population list to have an equal mathematical chance).",
        difficulty: "warmup",
        guideRef: "experiments-designs-sampling",
        hints: ["'Random people in the street' in everyday slang is NOT random sampling in CIE 0266!"],
        strategy: "Spot the 'random people in the street' trap",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q10",
        question:
          "A secondary school has **800 students**: **320 in Lower Secondary** and **480 in Upper Secondary**. For a **stratified sample of 50 students**, how many **Upper Secondary** students should be randomly selected?",
        options: [
          "25 Upper Secondary students",
          "30 Upper Secondary students",
          "20 Upper Secondary students",
          "48 Upper Secondary students",
        ],
        answerIndex: 1,
        explanation:
          "Upper Secondary makes up 480 ÷ 800 = 0.60 (60%) of the target population. 0.60 × 50 = 30 Upper Secondary students (and 20 Lower Secondary students).",
        difficulty: "core",
        guideRef: "experiments-designs-sampling",
        hints: [
          "First find the fraction of the 800 students who are in Upper Secondary (480 / 800).",
          "Multiply that fraction by the desired sample size of 50.",
        ],
        strategy: "Proportion × target sample size",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q11",
        question:
          "Which sampling technique involves placing a poster on a community noticeboard and testing only the people who email the researcher offering to take part?",
        options: [
          "Volunteer (self-selecting) sampling",
          "Systematic sampling",
          "Random sampling",
          "Matched pairs sampling",
        ],
        answerIndex: 0,
        explanation:
          "Participants actively put themselves forward in response to an advert — volunteer (self-selecting) sampling, which risks volunteer bias because keen, helpful people with spare time are over-represented.",
        difficulty: "warmup",
        guideRef: "experiments-designs-sampling",
        hints: ["Participants choose ('select') themselves after seeing an advert."],
        strategy: "Match recruitment method to sampling label",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q12",
        question:
          "An alphabetical register lists **600 employees**. A researcher picks a random starting point between 1 and 15 and then selects **every 15th name** on the list to obtain 40 participants. Which sampling method is used?",
        options: [
          "Stratified sampling",
          "Opportunity sampling",
          "Systematic sampling",
          "Volunteer sampling",
        ],
        answerIndex: 2,
        explanation:
          "Selecting every nth individual (600 ÷ 40 = every 15th name) from an ordered sampling frame is systematic sampling.",
        difficulty: "warmup",
        guideRef: "experiments-designs-sampling",
        hints: ["Look for the 'every nth person on a list' rule."],
        strategy: "Every nth item = systematic",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q13",
        question:
          "What is the **crucial difference** between **random sampling** and **random allocation**?",
        options: [
          "Random sampling uses a coin toss, whereas random allocation uses an alphabetical list",
          "Random sampling only works in field experiments, whereas random allocation only works in questionnaires",
          "Random sampling selects participants from the target population; random allocation assigns already-recruited participants into experimental conditions",
          "Random sampling controls order effects, whereas random allocation controls social desirability bias",
        ],
        answerIndex: 2,
        explanation:
          "Random sampling happens at recruitment (population → sample, boosting population validity/generalisability), whereas random allocation happens inside an independent-measures experiment (sample → Group A vs Group B, curbing participant confounding variables).",
        difficulty: "challenge",
        guideRef: "experiments-designs-sampling",
        hints: [
          "Think about the two stages of an experiment: recruiting people vs splitting them into Condition A and Condition B.",
          "Which one boosts generalisability to the target population, and which one balances IQ/age across Condition A and B?",
        ],
        strategy: "Separate population→sample from sample→condition",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q14",
        question:
          "A researcher studying reaction times gives identical printed instructions, uses the exact same 60 Hz monitor, and tests every participant in the same quiet booth at 21 °C. This control is called:",
        options: [
          "Counterbalancing",
          "Presumptive consent",
          "Event sampling",
          "Standardisation",
        ],
        answerIndex: 3,
        explanation:
          "Keeping instructions, apparatus and environmental conditions identical for every participant is standardisation — controlling situational extraneous variables and boosting replicability/reliability.",
        difficulty: "warmup",
        guideRef: "variables-hypotheses-controls",
        hints: ["Every participant receives the exact same 'standard' procedure."],
        strategy: "Same procedure for all = standardisation",
      },
      {
        kind: "mcq",
        id: "research-methods-m1-q15",
        question:
          "In a memory study where the **same** participants recall words in Quiet vs Noisy conditions, why MUST the researcher prepare **two different word lists of matched syllable length and familiarity** instead of reusing the same 20 words?",
        options: [
          "Because using two separate word lists converts a laboratory repeated-measures design into a naturalistic field experiment, eliminating order effects without counterbalancing",
          "Because reusing identical words lets memorisation from Trial 1 inflate Trial 2 scores, while unmatched lists would introduce word difficulty as an extraneous variable",
          "Because repeated-measures designs require twice as many participants as independent-measures designs, so each half of the sample needs an unrelated vocabulary list",
          "Because testing two separate matched word lists ensures the recall scores are recorded as qualitative descriptive data rather than numerical frequencies",
        ],
        answerIndex: 1,
        explanation:
          "Reusing the exact same word list causes massive practice carry-over, whereas using an easier or harder second list confounds the IV with list difficulty — so matched equivalent lists are essential.",
        difficulty: "challenge",
        guideRef: "experiments-designs-sampling",
        hints: [
          "Imagine being tested twice on the exact same 20 words!",
          "Now imagine List 1 has 4-letter nouns and List 2 has 14-letter scientific terms — what new threat appears?",
        ],
        strategy: "Anticipate both practice carry-over and stimulus difficulty",
      },
    ],
  },
  {
    id: "research-methods-m2",
    title: "MCQ Paper 2 — Non-Experimental Methods, Ethics, Reliability & Validity",
    questions: [
      {
        kind: "mcq",
        id: "research-methods-m2-q01",
        question:
          "A questionnaire asks: *'On a scale from 1 (Never) to 5 (Every night), how often do you wake up after midnight?'* What type of question is this, and what type of data does it produce?",
        options: [
          "Closed rating-scale question producing quantitative data",
          "Open question producing qualitative data",
          "Closed question producing qualitative data",
          "Unstructured probe producing secondary data",
        ],
        answerIndex: 0,
        explanation:
          "Respondents choose from fixed numerical options (1–5), making it a closed rating/Likert-style question that directly yields numerical (quantitative) data.",
        difficulty: "warmup",
        guideRef: "non-experimental-methods",
        hints: ["Fixed numerical choices = closed + quantitative."],
        strategy: "Check response format and numerical output",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q02",
        question:
          "When asked in a face-to-face interview *'How often do you donate change to charity?'*, participants claim they donate far more often than covert street observations show. Which bias best explains this gap?",
        options: [
          "Order effects (fatigue)",
          "Social desirability bias",
          "Retroactive interference",
          "Investigator double-blind bias",
        ],
        answerIndex: 1,
        explanation:
          "Social desirability bias occurs when respondents exaggerate prosocial or admirable behaviours (and hide unflattering ones) to appear kind and respectable to the researcher.",
        difficulty: "warmup",
        guideRef: "non-experimental-methods",
        hints: ["People want to look admirable and generous in front of an interviewer."],
        strategy: "Link self-report inflation to social desirability",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q03",
        question:
          "Compared with a **structured interview**, a key **strength** of an **unstructured interview** is that:",
        options: [
          "Every participant answers identical questions in the exact same order, maximising test-retest reliability",
          "The interviewer can tailor follow-up questions to explore unexpected, complex feelings in rich qualitative depth",
          "Responses can be tallied instantly into a histogram without any coding",
          "Interviewer bias and subjectivity are completely eliminated",
        ],
        answerIndex: 1,
        explanation:
          "Unstructured interviews sacrifice strict standardisation in exchange for flexibility — allowing the interviewer to build rapport and probe novel insights deeply (higher qualitative validity, lower reliability).",
        difficulty: "core",
        guideRef: "non-experimental-methods",
        hints: [
          "Structured = rigid script (reliable); Unstructured = flexible conversation (deep insight).",
          "Ask what an interviewer can do when a participant mentions something surprising.",
        ],
        strategy: "Trade off reliability vs rich validity",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q04",
        question:
          "Two psychologists sit disguised as shoppers on a mall bench, secretly tallying how many teenagers hold doors open for strangers without joining any group. How should this observation be classified?",
        options: [
          "Naturalistic, covert, non-participant observation",
          "Controlled, overt, participant observation",
          "Naturalistic, overt, participant observation",
          "Controlled, covert, participant observation",
        ],
        answerIndex: 0,
        explanation:
          "Shopping mall = naturalistic setting; disguised/secret = covert (teenagers unaware); sitting apart without joining teenage groups = non-participant.",
        difficulty: "core",
        guideRef: "non-experimental-methods",
        hints: [
          "Check all three pairs: Naturalistic vs Controlled? Covert vs Overt? Participant vs Non-participant?",
          "Are the observers hidden, in an everyday setting, and staying outside the group?",
        ],
        strategy: "Classify observations across all 3 dimensions",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q05",
        question:
          "Which of the following is a well-**operationalised behavioural category** for a classroom observation of 'student engagement'?",
        options: [
          "Student feels intrinsically motivated by the lesson",
          "Student pays keen attention to the teacher",
          "Student raises hand above shoulder height to ask or answer a question",
          "Student enjoys working collaboratively with peers",
        ],
        answerIndex: 2,
        explanation:
          "Behavioural categories must be directly visible, objective physical or verbal actions ('raises hand above shoulder height') rather than invisible mental states ('feels motivated', 'pays keen attention', 'enjoys').",
        difficulty: "core",
        guideRef: "non-experimental-methods",
        hints: [
          "Two independent observers cannot see inside a student's mind!",
          "Pick the action two cameras/observers would count identically.",
        ],
        strategy: "Reject invisible feelings; pick visible actions",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q06",
        question:
          "An observer watches a busy nursery playground for 30 minutes and ticks a checklist **only once every 60 seconds on the beep** to record what Child A is doing at that instant. Which sampling method is being used?",
        options: [
          "Event sampling",
          "Stratified sampling",
          "Time sampling",
          "Systematic population sampling",
        ],
        answerIndex: 2,
        explanation:
          "Recording behaviour at fixed periodic intervals (every 60 seconds) is time sampling — ideal when continuous behaviour is too busy to tally every single occurrence, though brief acts between beeps are missed.",
        difficulty: "warmup",
        guideRef: "non-experimental-methods",
        hints: ["Fixed clock intervals (every 60s) vs counting every event whenever it happens."],
        strategy: "Fixed clock beep = time sampling",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q07",
        question:
          "Milner et al.'s (1968) decades-long investigation of amnesic patient H.M. using interviews, IQ tests and memory tasks is a classic **case study**. What is the **primary limitation** of case studies?",
        options: [
          "They only collect quantitative numbers and cannot capture personal detail",
          "Findings from one unique individual (such as H.M.'s specific surgical brain lesion) may not generalise to the wider population",
          "They can never falsify existing psychological theories",
          "They always violate confidentiality by publishing the patient's full legal name during their lifetime",
        ],
        answerIndex: 1,
        explanation:
          "Because a case study examines a single atypical person or small group (n = 1), population validity / generalisability is low — H.M.'s pre-existing severe epilepsy or exact surgical lesion might make him unusual (note: Milner protected confidentiality using initials 'H.M.'!).",
        difficulty: "core",
        guideRef: "non-experimental-methods",
        hints: [
          "How big is the sample in a study of one rare brain-injured patient?",
          "Remember Milner DID protect his identity as 'H.M.', and H.M. DID falsify unitary memory views!",
        ],
        strategy: "Evaluate n = 1 generalisability",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q08",
        question:
          "A psychologist measures two continuous co-variables in 60 students: **daily minutes of mindfulness practice** and **exam-week anxiety score (out of 50)**. As mindfulness minutes **increase**, anxiety scores **steadily decrease**. What does this show?",
        options: [
          "A zero correlation between mindfulness and anxiety",
          "Proof that mindfulness directly causes lower anxiety",
          "A positive correlation between mindfulness and anxiety",
          "A negative correlation between mindfulness minutes and anxiety scores",
        ],
        answerIndex: 3,
        explanation:
          "When one co-variable increases as the other co-variable decreases, it is a negative (inverse) correlation — and because no IV was manipulated, it still cannot prove cause and effect.",
        difficulty: "warmup",
        guideRef: "non-experimental-methods",
        hints: ["X goes UP while Y goes DOWN — and beware claiming 'proof of cause'!"],
        strategy: "Opposite directions = negative correlation (never causation)",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q09",
        question:
          "Why is it **always wrong** in CIE 0266 to write *'The Independent Variable in this correlation was hours of revision'*?",
        options: [
          "Because hours of revision must always be labelled the Dependent Variable while exam score serves as the Independent Variable",
          "Because in a correlational study the researcher measures two naturally varying co-variables without manipulating an IV",
          "Because correlational studies can only analyse qualitative nominal categories rather than continuous numerical measurements",
          "Because correlational designs allocate participants into matched pairs beforehand, replacing the IV with a control group",
        ],
        answerIndex: 1,
        explanation:
          "Only experiments have an IV (manipulated) and DV (measured). Correlations measure two existing continuous **co-variables** to test their association.",
        difficulty: "core",
        guideRef: "non-experimental-methods",
        hints: [
          "Did the researcher force students to revise for fixed numbers of hours?",
          "Correlations have Co-variable 1 and Co-variable 2 — never IV and DV!",
        ],
        strategy: "Use 'co-variables' exclusively for correlations",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q10",
        question:
          "A researcher wishes to study 13-year-old pupils' bedtime phone habits. Under psychological **ethical guidelines**, how must **informed consent** be obtained?",
        options: [
          "Obtain written permission solely from the school headteacher, since pupils under 16 cannot give or withhold personal assent",
          "Administer the bedtime questionnaire first to avoid demand characteristics, then collect retrospective consent during the debrief",
          "Obtain informed consent from a parent/legal guardian AND assent/agreement from the 13-year-old pupils beforehand",
          "Allow 13-year-old pupils to sign their own sole consent forms, provided the anonymous questionnaire takes under ten minutes",
        ],
        answerIndex: 2,
        explanation:
          "Participants under 16 cannot legally give sole informed consent — researchers must obtain parental/guardian informed consent beforehand alongside the young person's own willingness (assent) and right to withdraw.",
        difficulty: "warmup",
        guideRef: "ethics-reliability-validity",
        hints: ["Check the age rule (<16 years old) and WHEN consent must be given."],
        strategy: "Under-16 = parental consent + child assent beforehand",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q11",
        question:
          "Before running a field study that involves mild deception, a psychologist describes the exact procedure to 30 people from the **same target population** (who will NOT be in the actual study) and asks whether they would find it acceptable. What ethical method is this?",
        options: [
          "Retrospective debriefing",
          "Presumptive consent",
          "Test-retest reliability",
          "Double-blind standardisation",
        ],
        answerIndex: 1,
        explanation:
          "Asking a similar peer group whether they would consent — so researchers can 'presume' real participants would agree too without spoiling natural behaviour — is presumptive consent.",
        difficulty: "core",
        guideRef: "ethics-reliability-validity",
        hints: [
          "The researcher asks a comparable group beforehand to 'presume' how actual participants would feel.",
          "Distinguish presumptive consent (peer group) from prior general consent (same participants consenting to 'one of several procedures').",
        ],
        strategy: "Similar peer group asked beforehand = presumptive consent",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q12",
        question:
          "Which action is **NOT** a required part of a full ethical **debrief** after a study involving mild deception?",
        options: [
          "Revealing the true aim of the research and explaining why deception was necessary",
          "Reminding participants of their right to withdraw their data now that they know the true aim",
          "Publishing participants' full names in the final journal report to thank them publicly",
          "Reassuring participants and answering questions so they leave in the same psychological state in which they arrived",
        ],
        answerIndex: 2,
        explanation:
          "Publishing participants' real names breaches **confidentiality/anonymity**! A proper debrief explains the true aim, offers data withdrawal, and restores pre-study psychological wellbeing while keeping identities strictly anonymous.",
        difficulty: "warmup",
        guideRef: "ethics-reliability-validity",
        hints: ["Spot the option that breaks confidentiality!"],
        strategy: "Check DRIP + Confidentiality",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q13",
        question:
          "A new 'Optimism Questionnaire' is completed by the same 40 adults in March and again in April. Every adult gets almost the exact same score both times, yet the questions actually measure **extraversion** rather than optimism! This questionnaire has:",
        options: [
          "High reliability and high validity",
          "Low reliability but high validity",
          "High test-retest reliability, but low validity",
          "High ecological validity, but zero inter-observer reliability",
        ],
        answerIndex: 2,
        explanation:
          "Consistent scores across March and April demonstrate high **test-retest reliability**, while measuring extraversion instead of optimism means it fails to measure what it claims to measure — **low validity**.",
        difficulty: "core",
        guideRef: "ethics-reliability-validity",
        hints: [
          "Remember the faulty bathroom scales: consistent every time = reliable; measuring the wrong thing = invalid.",
          "March vs April with the same test = test-retest.",
        ],
        strategy: "Separate consistency (reliability) from accuracy (validity)",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q14",
        question:
          "How can two researchers directly **improve the inter-observer reliability** of a playground observation whose pilot trial produced a weak correlation of +0.42 between their tallies?",
        options: [
          "Switch from a naturalistic playground to an unstructured interview",
          "Redefine vague checklist items into tighter, concrete operationalised behavioural categories and practise coding a training video together",
          "Increase the sample from 20 children to 200 children using the exact same vague checklist",
          "Plot the data on a bar chart instead of a scattergraph",
        ],
        answerIndex: 1,
        explanation:
          "Low inter-observer agreement happens when categories are ambiguous/subjective. Tightening operationalisation and joint observer training ensure both observers count the exact same behaviours consistently.",
        difficulty: "core",
        guideRef: "ethics-reliability-validity",
        hints: [
          "Why did the two observers disagree (+0.42) while watching the exact same children?",
          "Fixing vague behavioural categories fixes observer disagreement!",
        ],
        strategy: "Diagnose ambiguity → fix via operationalisation + training",
      },
      {
        kind: "mcq",
        id: "research-methods-m2-q15",
        question:
          "Participants memorise nonsense trigrams (`XQJ`, `BKP`) flashed on a lab screen to test everyday memory. Critics argue people rarely memorise meaningless three-letter strings in daily life. Which specific type of validity is being criticised?",
        options: [
          "Test-retest reliability (consistency across trials)",
          "Population validity (generalisability across people)",
          "Ecological validity (mundane realism of the task)",
          "Internal validity (control of confounding variables)",
        ],
        answerIndex: 2,
        explanation:
          "Artificial tasks lacking mundane realism (nonsense syllables vs real-world shopping lists or conversations) limit **ecological validity** — how well findings generalise to everyday real-life situations.",
        difficulty: "challenge",
        guideRef: "ethics-reliability-validity",
        hints: [
          "Is the criticism about who the participants were (population), confounds (internal), or artificiality vs everyday life (ecological)?",
          "Nonsense trigrams lack mundane realism.",
        ],
        strategy: "Distinguish internal, ecological, and population validity",
      },
    ],
  },
  {
    id: "research-methods-m3",
    title: "MCQ Paper 3 — Data Types, Descriptive Statistics, Tables & Graphs",
    questions: [
      {
        kind: "mcq",
        id: "research-methods-m3-q01",
        question:
          "Prot et al. analysed numerical rating scales alongside cross-cultural survey totals, whereas Hewitt (2022) recorded rich written descriptions of children's play dialogues. Written transcripts of children's spoken words are:",
        options: [
          "Primary quantitative data",
          "Qualitative data",
          "Continuous histogram interval data",
          "Nominal mode-only numerical data",
        ],
        answerIndex: 1,
        explanation:
          "Non-numerical words, quotes and rich descriptions of behaviour are **qualitative data**, whereas numerical scores and counts are quantitative data.",
        difficulty: "warmup",
        guideRef: "data-analysis-graphs",
        hints: ["Words/quotes = qualitative (quality); numbers/counts = quantitative (quantity)."],
        strategy: "Qualitative = words; Quantitative = numbers",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q02",
        question:
          "A psychologist downloads anonymised national hospital admission statistics from the Ministry of Health website to compare winter vs summer insomnia referrals. These statistics are an example of:",
        options: [
          "Primary qualitative data",
          "Secondary quantitative data",
          "Experimental double-blind primary data",
          "Case-study qualitative transcripts",
        ],
        answerIndex: 1,
        explanation:
          "Hospital statistics already collected by someone else for another purpose are **secondary** data, and admission counts/rates are **quantitative**.",
        difficulty: "warmup",
        guideRef: "data-analysis-graphs",
        hints: ["First-hand = primary; pre-existing archive collected by others = secondary."],
        strategy: "Classify source (primary/secondary) + form (quant/qual)",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q03",
        question:
          "Nine participants recall the following numbers of words in a serial recall trial: **12, 7, 15, 9, 12, 6, 18, 11, 12**. What are the **median** and **mode** of this dataset?",
        options: [
          "Median = 9, Mode = 12",
          "Median = 11.3, Mode = 18",
          "Median = 11, Mode = 9",
          "Median = 12, Mode = 12",
        ],
        answerIndex: 3,
        explanation:
          "First sort all 9 scores in ascending order: `6, 7, 9, 11, 12, 12, 12, 15, 18`. The middle (5th) score is **12** (median), and **12** appears three times — more than any other score (mode = 12). Picking `12` from the unsorted middle or `9` at index 4 unsorted is a classic trap!",
        difficulty: "core",
        guideRef: "data-analysis-graphs",
        hints: [
          "Sort the 9 numbers from smallest to largest FIRST!",
          "With 9 ordered scores, the 5th number is the median, and the most frequent number is the mode.",
        ],
        strategy: "Always sort ascending before reading the median",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q04",
        question:
          "Eight commuters wait the following times (in seconds) before helping a person who dropped groceries: **8, 10, 11, 12, 14, 15, 16, 114**. Why should the researcher report the **median (13 s)** rather than the **mean (25 s)**?",
        options: [
          "Because the median incorporates the exact numerical value of every single commuter's score, making it mathematically more sensitive than the mean",
          "Because the extreme outlier (114 s) heavily inflates the mean, making 25 s higher than 7 of the 8 commuters, whereas the median is unaffected by outliers",
          "Because timed helping latencies measured in seconds are nominal categorical data, for which calculating an arithmetic mean is mathematically invalid",
          "Because in any positively skewed distribution with a high outlier, the median always sits above the mean and represents the upper boundary of scores",
        ],
        answerIndex: 1,
        explanation:
          "One extreme outlier (114 s) pulls the mean up to 25 s — misrepresenting almost everyone in the sample — whereas the median (halfway between 12 s and 14 s = 13 s) accurately reflects typical helping latency.",
        difficulty: "core",
        guideRef: "data-analysis-graphs",
        hints: [
          "Compare 25 seconds against the first seven commuters (8 to 16 seconds)!",
          "Which measure of central tendency resists extreme anomalous scores?",
        ],
        strategy: "Spot outliers → justify the median",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q05",
        question:
          "A survey asks 120 students to choose their single favourite revision location: *Library (48), Bedroom (39), Café (21), Park (12)*. Which measure of central tendency is the **ONLY** valid choice here?",
        options: [
          "Mean",
          "Median",
          "Mode",
          "Range",
        ],
        answerIndex: 2,
        explanation:
          "Revision locations (*Library, Bedroom, Café, Park*) are **nominal/categorical** data — you cannot average 'Library + Park ÷ 2', so only the **mode** (*Library*, most frequent category) makes mathematical sense.",
        difficulty: "core",
        guideRef: "data-analysis-graphs",
        hints: [
          "Can you add 'Library' + 'Bedroom' and divide by 2?",
          "Nominal named categories only have a most-frequent category!",
        ],
        strategy: "Nominal categories → Mode only",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q06",
        question:
          "Look at this summary table from a sleep-hygiene experiment:\n\n| Condition | Mean Hours Slept | Range (Hours) |\n|---|---|---|\n| No Screens Before Bed | 8.1 | 1.2 |\n| 60 Min TikTok Before Bed | 6.4 | 3.9 |\n\nWhich conclusion accurately interprets **both** the mean and the range?",
        options: [
          "The No-Screens group slept longer on average AND had much more varied, inconsistent sleep durations",
          "The TikTok group slept longer on average, while the No-Screens group had more varied sleep durations",
          "The No-Screens group slept longer on average (8.1 vs 6.4 h) AND slept more consistently around that average (smaller range of 1.2 h vs 3.9 h)",
          "Both groups showed identical consistency, proving screen light causes insomnia in every single teenager",
        ],
        answerIndex: 2,
        explanation:
          "Higher mean (8.1 h > 6.4 h) = longer average sleep; smaller range (1.2 h < 3.9 h) = tighter clustering / greater consistency across participants in the No-Screens group.",
        difficulty: "core",
        guideRef: "data-analysis-graphs",
        hints: [
          "Mean = average performance; Range = spread/consistency.",
          "Does a smaller range (1.2 vs 3.9) mean MORE consistent or LESS consistent?",
        ],
        strategy: "Smaller range = higher consistency",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q07",
        question:
          "In a bystander experiment, **18 out of 45** participants in a 5-person group helped within 60 seconds. What **percentage** of participants helped, and what is the **simplest ratio** of **helpers to non-helpers**?",
        options: [
          "40%, and ratio 2 : 3",
          "40%, and ratio 2 : 5",
          "18%, and ratio 3 : 2",
          "60%, and ratio 3 : 5",
        ],
        answerIndex: 0,
        explanation:
          "Percentage helping = (18 ÷ 45) × 100 = 40%. Non-helpers = 45 − 18 = 27. Helpers : Non-helpers = 18 : 27; dividing both by 9 gives **2 : 3** (beware 2 : 5, which compares helpers to total!).",
        difficulty: "core",
        guideRef: "data-analysis-graphs",
        hints: [
          "First calculate 18 ÷ 45 × 100 for the percentage.",
          "Watch the wording: 'helpers to non-helpers' means 18 : (45 − 18), NOT 18 : 45!",
        ],
        strategy: "Subtract from total to find the complement group for ratios",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q08",
        question:
          "Mean words recalled rose from **12 words** before mnemonic training to **15 words** after mnemonic training. What is the **percentage increase** in mean recall?",
        options: [
          "20%",
          "3%",
          "80%",
          "25%",
        ],
        answerIndex: 3,
        explanation:
          "Percentage change always divides the change (15 − 12 = 3) by the **original** value (12): (3 ÷ 12) × 100 = **25%** (dividing 3 by the new value 15 gives the classic 20% trap!).",
        difficulty: "core",
        guideRef: "data-analysis-graphs",
        hints: [
          "Find the increase (15 − 12 = 3).",
          "Divide by the ORIGINAL baseline (12), NOT the new score (15)!",
        ],
        strategy: "Change ÷ Original × 100",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q09",
        question:
          "Which graph is **most appropriate** to display the **mean depth-estimation error (cm)** across three separate conditions: *Monocular Vision*, *Binocular Vision*, and *Motion Parallax*?",
        options: [
          "A histogram with touching bars",
          "A scattergraph with a line of best fit",
          "A bar chart with equal gaps between the three condition bars",
          "A continuous cumulative frequency curve",
        ],
        answerIndex: 2,
        explanation:
          "The three experimental conditions are **discrete categories**, so a **bar chart with gaps between the bars** (conditions on x-axis, mean error on y-axis) is correct.",
        difficulty: "warmup",
        guideRef: "data-analysis-graphs",
        hints: ["Separate named conditions = discrete categories → bar chart with gaps!"],
        strategy: "Discrete categories → Bar chart (gaps)",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q10",
        question:
          "A psychologist records the continuous distribution of infant first-word ages grouped into class intervals (`8–10.9 months`, `11–13.9 months`, `14–16.9 months`, `17–19.9 months`). Which graph should be drawn, and how should the bars look?",
        options: [
          "A histogram with NO gaps between adjacent bars",
          "A bar chart with wide gaps between bars",
          "A scattergraph with infant names on the x-axis",
          "A pie chart with a line of best fit",
        ],
        answerIndex: 0,
        explanation:
          "Continuous numerical data grouped into contiguous class intervals is plotted as a **histogram** with **touching bars (no gaps)** to show the uninterrupted numerical scale.",
        difficulty: "warmup",
        guideRef: "data-analysis-graphs",
        hints: ["Continuous grouped numerical intervals → Histogram (bars hug with no gaps)!"],
        strategy: "Continuous intervals → Histogram (no gaps)",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q11",
        question:
          "A student plots 20 participants' **hours of daily gaming** on the x-axis against their **empathy score** on the y-axis. Each plotted dot on this **scattergraph** represents:",
        options: [
          "The mean score of an entire experimental group",
          "One variable only (either gaming hours OR empathy score, so 40 dots are drawn for 20 people)",
          "One individual participant's pair of scores (their gaming hours AND their empathy score)",
          "The range between the highest and lowest scorer",
        ],
        answerIndex: 2,
        explanation:
          "In a correlation scattergraph, 20 participants produce **20 dots** — each coordinate `(x, y)` pairs Participant i's Co-variable 1 score with their Co-variable 2 score.",
        difficulty: "core",
        guideRef: "data-analysis-graphs",
        hints: [
          "How many dots appear on a scattergraph of 20 people?",
          "Each person has an x-coordinate AND a y-coordinate!",
        ],
        strategy: "1 dot = 1 participant's (x, y) co-variable pair",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q12",
        question:
          "Researchers transcribe 30 unstructured interviews with insomniacs, create a coding list of recurring themes (*'racing thoughts'*, *'money worries'*, *'noise'*), and tally how many times each theme appears. This technique is called:",
        options: [
          "Content analysis (coding qualitative data into quantitative frequencies)",
          "ABBA counterbalancing (rotating condition order to balance order effects)",
          "Time sampling (recording visible actions at fixed periodic intervals)",
          "Stratified sampling (matching subgroup proportions to a target population)",
        ],
        answerIndex: 0,
        explanation:
          "Categorising qualitative text/transcripts into operationalised coding units and counting their frequencies converts qualitative material into quantitative data (content/thematic coding).",
        difficulty: "challenge",
        guideRef: "data-analysis-graphs",
        hints: [
          "Notice the shift: rich interview words → counted theme frequencies!",
          "This bridges qualitative transcripts and quantitative tallies.",
        ],
        strategy: "Tallying themes in transcripts = content analysis / coding",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q13",
        question:
          "Six participants score **4, 6, 6, 8, 10, 14** on a visual-illusion error scale (mm). What is the **mean** minus the **median** of this dataset?",
        options: [
          "0 mm",
          "2 mm",
          "10 mm",
          "1 mm",
        ],
        answerIndex: 3,
        explanation:
          "Sum = 4 + 6 + 6 + 8 + 10 + 14 = 48, so **Mean** = 48 ÷ 6 = **8 mm**. The data is already ordered; with N = 6, the **Median** is halfway between the 3rd (6) and 4th (8) scores = (6 + 8) ÷ 2 = **7 mm**. Mean − Median = 8 − 7 = **1 mm**.",
        difficulty: "challenge",
        guideRef: "data-analysis-graphs",
        hints: [
          "Calculate the mean of all 6 numbers first (sum ÷ 6).",
          "Find the median of an even set (average of 3rd and 4th ordered numbers), then subtract!",
        ],
        strategy: "Compute Mean and even-N Median step-by-step",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q14",
        question:
          "Before running a full 200-person questionnaire, Dr Rao tests the draft questions on **8 volunteers** to check whether any instructions or items are confusing or ambiguous. This small-scale trial run is called a:",
        options: [
          "Meta-analysis",
          "Pilot study",
          "Longitudinal case study",
          "Quasi-experiment",
        ],
        answerIndex: 1,
        explanation:
          "A **pilot study** is a small preliminary 'dress rehearsal' conducted before the main study to spot unclear questions, ceiling/floor effects or timing flaws and save time/money before full data collection.",
        difficulty: "warmup",
        guideRef: "variables-hypotheses-controls",
        hints: ["A small test flight before launching the full-scale investigation!"],
        strategy: "Small trial run to fix flaws = pilot study",
      },
      {
        kind: "mcq",
        id: "research-methods-m3-q15",
        question:
          "Every single participant in Dr Koh's memory test scores **20 out of 20** in BOTH the Caffeine condition and the Water condition because the 20 words were far too easy (`cat, dog, sun...`). Why does this **ceiling effect** ruin internal validity?",
        options: [
          "Because everyone hit the maximum possible score in both conditions, hiding any genuine improvement that caffeine might have produced",
          "Because identical scores of 20 out of 20 eliminate the statistical mode and prevent the researcher from calculating a mean or range",
          "Because an overly easy word list artificially exaggerates the gap between caffeine and water scores, producing a false positive difference",
          "Because achieving 100% accuracy in both conditions violates informed consent and proves participants colluded to guess the hypothesis",
        ],
        answerIndex: 0,
        explanation:
          "A ceiling effect occurs when a task is so easy that almost everyone scores near 100% (or a floor effect when so hard everyone scores near 0%), masking any real effect of the IV on the DV — easily caught by running a pilot study first!",
        difficulty: "challenge",
        guideRef: "ethics-reliability-validity",
        hints: [
          "If a baseline group already scores 20/20, can the experimental group score higher than 20/20?",
          "Hitting the top roof of the scale masks any true IV difference!",
        ],
        strategy: "Check task difficulty (ceiling/floor effects)",
      },
    ],
  },
];
