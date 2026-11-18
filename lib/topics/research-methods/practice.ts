import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "research-methods-quiz-q01",
      question:
        "What is the technical term for defining an Independent or Dependent Variable in exact, observable, measurable units so a study can be replicated?",
      answer: {
        type: "text",
        accept: ["operationalisation", "operationalization", "operationalising", "operationalizing"],
        display: "operationalisation",
      },
      solution: [
        "Defining fuzzy concepts (like 'memory' or 'caffeine') in exact measurable units is called **operationalisation**.",
      ],
      commonError: "Confusing standardisation (keeping procedures identical) with operationalisation (making variables observable and measurable).",
      difficulty: "warmup",
      guideRef: "variables-hypotheses-controls",
      hints: ["Starts with 'operational…'."],
      strategy: "Key term recall",
    },
    {
      kind: "mcq",
      id: "research-methods-quiz-q02",
      question:
        "Which hypothesis predicts there will be **no significant difference** between two conditions, and that any observed difference is due to **chance**?",
      options: [
        "Directional (one-tailed) hypothesis",
        "Non-directional (two-tailed) hypothesis",
        "Null hypothesis",
        "Correlational positive hypothesis",
      ],
      answerIndex: 2,
      explanation:
        "The **null hypothesis** states there is no true effect (any difference in scores is merely random chance); researchers test whether evidence is strong enough to reject it.",
      difficulty: "warmup",
      guideRef: "variables-hypotheses-controls",
      hints: ["'Null' means zero / nothing!"],
      strategy: "Null = zero real difference (chance only)",
    },
    {
      kind: "short",
      id: "research-methods-quiz-q03",
      question:
        "In a repeated measures experiment with **36 participants** using **ABBA counterbalancing**, how many participants complete **Condition B first and Condition A second**?",
      answer: { type: "number", value: 18 },
      traps: [
        {
          spec: { type: "number", value: 36 },
          feedback: "All 36 do both conditions, so split the sample in half: half do A→B and half do B→A.",
        },
        {
          spec: { type: "number", value: 9 },
          feedback: "AB/BA counterbalancing splits the sample into 2 equal order groups (36 ÷ 2), not 4.",
        },
      ],
      solution: [
        "Counterbalancing divides the repeated-measures sample into two equal halves.",
        "Half (36 ÷ 2 = 18) complete Condition A → Condition B, and the other **18** complete Condition B → Condition A.",
      ],
      difficulty: "warmup",
      guideRef: "experiments-designs-sampling",
      hints: ["AB/BA splits the sample into two equal halves taking opposite orders."],
      strategy: "Halve N for AB/BA order groups",
    },
    {
      kind: "short",
      id: "research-methods-quiz-q04",
      question:
        "A university department has **300 psychology undergraduates** (`210 female`, `90 male`). For a **stratified sample of 40 students**, how many **male** students must be randomly selected?",
      answer: { type: "number", value: 12 },
      traps: [
        {
          spec: { type: "number", value: 28 },
          feedback: "28 is the number of female students (70% of 40) — the question asked for male students (30% of 40).",
        },
        {
          spec: { type: "number", value: 20 },
          feedback: "20 would be a 50/50 split — stratified sampling preserves the exact population proportion (90 ÷ 300 = 30%).",
        },
      ],
      solution: [
        "Male proportion in the target population = {{90 / 300 = 0.3}} (30%).",
        "Multiply by desired sample size: {{0.3 * 40 = 12}} male students.",
      ],
      difficulty: "core",
      guideRef: "experiments-designs-sampling",
      hints: [
        "Find the fraction of males in the population (90 / 300).",
        "Multiply that fraction by 40.",
      ],
      strategy: "Stratum proportion × sample size",
    },
    {
      kind: "mcq",
      id: "research-methods-quiz-q05",
      question:
        "As daily hours spent outdoors in natural daylight **increase**, self-rated daytime sleepiness scores **decrease**. What type of correlation is this?",
      options: [
        "Positive correlation",
        "Negative correlation",
        "Zero correlation",
        "Causal experimental proof",
      ],
      answerIndex: 1,
      explanation:
        "One co-variable rises (daylight hours) while the other co-variable falls (sleepiness score) — an inverse or **negative correlation**.",
      difficulty: "warmup",
      guideRef: "non-experimental-methods",
      hints: ["One co-variable goes UP while the other goes DOWN."],
      strategy: "Opposite directions = negative correlation",
    },
    {
      kind: "short",
      id: "research-methods-quiz-q06",
      question:
        "Seven participants recall the following numbers of objects from a scene: **14, 8, 11, 19, 7, 11, 16**. Calculate the **range** of these scores.",
      answer: { type: "number", value: 12 },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "You subtracted first (14) and last (16)! Sort the list first: highest (19) minus lowest (7).",
        },
      ],
      solution: [
        "Ordered scores: `7, 8, 11, 11, 14, 16, 19`.",
        "Range = Highest − Lowest = {{19 - 7 = 12}}.",
      ],
      difficulty: "warmup",
      guideRef: "data-analysis-graphs",
      hints: ["Find the largest number and smallest number in the list, then subtract."],
      strategy: "Highest minus lowest",
    },
    {
      kind: "short",
      id: "research-methods-quiz-q07",
      question:
        "Eight children speak their first two-word phrase at the following ages (in months): **17, 22, 19, 20, 18, 24, 19, 21**. Calculate the **median** age in months.",
      answer: { type: "number", value: 19.5 },
      traps: [
        {
          spec: { type: "number", value: 19 },
          feedback: "19 is the mode (and the 3rd/4th value is 19 and 20) — average the 4th (19) and 5th (20) ordered values!",
        },
        {
          spec: { type: "number", value: 20 },
          feedback: "20 is the mean (160 ÷ 8 = 20). For the median of 8 ordered values, average the 4th (19) and 5th (20) numbers!",
        },
      ],
      solution: [
        "Sort the 8 ages in ascending order: `17, 18, 19, 19, 20, 21, 22, 24`.",
        "With N = 8 (even), the median lies halfway between the 4th (`19`) and 5th (`20`) values: {{(19 + 20) / 2 = 19.5}} months.",
      ],
      difficulty: "core",
      guideRef: "data-analysis-graphs",
      hints: [
        "Put all 8 numbers in order from smallest to largest FIRST!",
        "With 8 numbers, average the 4th and 5th ordered values.",
      ],
      strategy: "Sort first, then average middle pair",
    },
    {
      kind: "short",
      id: "research-methods-quiz-q08",
      question:
        "Which type of graph uses **touching bars with NO gaps** to display frequency data across **continuous numerical class intervals** (such as `0–9 s`, `10–19 s`, `20–29 s`)?",
      answer: {
        type: "text",
        accept: ["histogram"],
        display: "histogram",
      },
      traps: [
        {
          spec: { type: "text", accept: ["bar chart", "bar graph"] },
          feedback: "Bar charts display discrete categories and MUST have gaps between bars — continuous touching intervals use a histogram!",
        },
      ],
      solution: [
        "A **histogram** plots continuous numerical class intervals on the x-axis with adjacent bars touching (zero gaps).",
      ],
      difficulty: "warmup",
      guideRef: "data-analysis-graphs",
      hints: ["Remember: B-Gaps (Bar chart) vs H-Hug (touching bars)!"],
      strategy: "Continuous intervals = Histogram",
    },
    {
      kind: "mcq",
      id: "research-methods-quiz-q09",
      question:
        "In the `GRAVE` evaluation framework, if a laboratory memory test uses standardized 2-second word flashes and scripted instructions so another scientist in Tokyo gets the exact same results, which quality is demonstrated?",
      options: [
        "Ecological validity",
        "Reliability (replicability)",
        "Population validity",
        "Presumptive ethics",
      ],
      answerIndex: 1,
      explanation:
        "Standardised procedures enable replication, and getting consistent results across repeats demonstrates high **reliability**.",
      difficulty: "warmup",
      guideRef: "ethics-reliability-validity",
      hints: ["Consistency across replications = R in GRAVE!"],
      strategy: "Consistency = Reliability",
    },
    {
      kind: "written",
      id: "research-methods-quiz-q10",
      question:
        "A researcher investigates whether chewing mint gum affects concentration in teenagers. Write a fully operationalised **directional hypothesis** for an experiment testing this. [2 marks]",
      marks: 2,
      modelAnswer:
        "Teenagers who chew one piece of sugar-free mint gum during a task will spot significantly more letter targets out of 50 on a 3-minute cancellation test than teenagers who complete the task without chewing gum.",
      markScheme: [
        {
          point: "States a clear directional prediction ('more' / 'higher' / 'fewer errors') rather than just 'a difference'",
          keywords: ["more", "higher", "fewer", "faster", "greater", "longer"],
        },
        {
          point: "Operationalises BOTH the IV (gum vs no gum) and the DV in measurable test units (e.g. score out of 50 / errors / seconds)",
          keywords: ["without", "no gum", "score", "out of", "errors", "seconds", "minutes", "correct", "words", "questions"],
        },
      ],
      commonError:
        "Writing 'Teenagers who chew gum will concentrate better' — scores 0/2 because neither 'chewing gum vs control' nor 'concentration' is operationalised!",
      difficulty: "core",
      guideRef: "variables-hypotheses-controls",
      hints: [
        "Pick a directional comparison word like 'higher score' or 'fewer errors'.",
        "Name BOTH conditions of the IV (chewing mint gum vs no gum) AND an exact numerical measure for concentration!",
      ],
      strategy: "Operationalise IV conditions + DV units",
    },
  ],
  papers: [
    {
      id: "research-methods-p1",
      title: "Practice Paper 1 — Experimental Methods, Designs, Sampling & Calculations",
      questions: [
        {
          kind: "short",
          id: "research-methods-p1-q01",
          question:
            "Five participants in a sleep-deprivation reaction test record mean response times (in ms) of **280, 310, 295, 340, 275**. Calculate the **mean** response time in ms.",
          answer: { type: "number", value: 300 },
          traps: [
            {
              spec: { type: "number", value: 295 },
              feedback: "295 ms is the median (middle ordered score) — add all 5 scores and divide by 5 for the mean!",
            },
          ],
          solution: [
            "Sum all five scores: {{280 + 310 + 295 + 340 + 275 = 1500}} ms.",
            "Divide by {{N = 5}}: {{1500 / 5 = 300}} ms.",
          ],
          difficulty: "warmup",
          guideRef: "data-analysis-graphs",
          hints: ["Add all five reaction times together and divide by 5."],
          strategy: "Sum ÷ N",
        },
        {
          kind: "short",
          id: "research-methods-p1-q02",
          question:
            "Using the same five reaction times (**280, 310, 295, 340, 275** ms), calculate the **range** in ms.",
          answer: { type: "number", value: 65 },
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "You subtracted 280 − 275 (first and last)! Use Highest (340) − Lowest (275).",
            },
          ],
          solution: [
            "Highest value = 340 ms; Lowest value = 275 ms.",
            "Range = {{340 - 275 = 65}} ms.",
          ],
          difficulty: "warmup",
          guideRef: "data-analysis-graphs",
          hints: ["Find the maximum (340) and minimum (275), then subtract."],
          strategy: "Max − Min",
        },
        {
          kind: "short",
          id: "research-methods-p1-q03",
          question:
            "In Latané & Darley's bystander seizure experiment, **85%** of participants who believed they were **alone** reported the seizure within 2 minutes. If **20 participants** were in that condition, how many individuals reported the seizure?",
          answer: { type: "number", value: 17 },
          solution: [
            "Convert 85% to a decimal: {{0.85}}.",
            "Multiply by 20 participants: {{0.85 * 20 = 17}} participants.",
          ],
          commonError: "Writing 85 (the percentage) instead of calculating 85% of 20 participants = 17 participants.",
          difficulty: "warmup",
          guideRef: "data-analysis-graphs",
          hints: ["Work out 85% of 20 (0.85 × 20)."],
          strategy: "Percentage × total N",
        },
        {
          kind: "short",
          id: "research-methods-p1-q04",
          question:
            "A researcher pre-tests 30 children on baseline vocabulary and pairs the two highest scorers together, the next two together, and so on — then tosses a coin to put one child from each pair into Storytelling and the other into Flashcards. Name this **experimental design**.",
          answer: {
            type: "text",
            accept: ["matched pairs", "matched pairs design", "matched-pairs", "matched-pairs design", "matched groups"],
            display: "matched pairs design",
          },
          traps: [
            {
              spec: { type: "text", accept: ["independent measures", "independent groups"] },
              feedback: "Different children are in each group, yes — but because they were pre-tested and paired on vocabulary first, it is a matched pairs design!",
            },
          ],
          solution: [
            "Pre-testing participants on a key variable (vocabulary) to form equivalent pairs, then randomly assigning one member of each pair to each condition, is a **matched pairs design**.",
          ],
          difficulty: "core",
          guideRef: "experiments-designs-sampling",
          hints: [
            "Different children are in each condition, yet they were deliberately paired on a pre-test first.",
            "Two words: '______ pairs'.",
          ],
          strategy: "Pre-test pairing + split pair = matched pairs",
        },
        {
          kind: "short",
          id: "research-methods-p1-q05",
          question:
            "A company employs **500 staff**: `200 Engineers`, `175 Sales`, and `125 Admin`. A psychologist constructs a **stratified sample of 60 staff**. How many **Admin** staff must be randomly selected?",
          answer: { type: "number", value: 15 },
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback: "25% is the percentage of Admin staff in the company (125 ÷ 500) — now find 25% of the 60-person sample!",
            },
            {
              spec: { type: "number", value: 24 },
              feedback: "24 is the number of Engineers (200/500 × 60). Check the Admin count (125/500 × 60).",
            },
          ],
          solution: [
            "Admin proportion in the population = {{125 / 500 = 0.25}} (25%).",
            "Number of Admin staff in a sample of 60 = {{0.25 * 60 = 15}}.",
          ],
          difficulty: "core",
          guideRef: "experiments-designs-sampling",
          hints: [
            "First find what fraction 125 Admin staff is out of 500 total staff.",
            "Multiply that fraction (1/4) by the sample size of 60.",
          ],
          strategy: "Proportion × sample size",
        },
        {
          kind: "short",
          id: "research-methods-p1-q06",
          question:
            "In a visual-cliff study, **27 infants refused** to crawl onto the glass 'deep' side while **9 infants crawled** across. Write the **ratio** of infants who **refused** to infants who **crawled** in its **simplest form**.",
          answer: { type: "ratio", parts: [3, 1], simplest: true },
          traps: [
            {
              spec: { type: "ratio", parts: [1, 3] },
              feedback: "Right numbers, reversed order — write Refused (27) : Crawled (9) = 3 : 1.",
            },
            {
              spec: { type: "ratio", parts: [3, 4] },
              feedback: "3 : 4 compares Refused (27) to Total (36) — compare Refused (27) to Crawled (9)!",
            },
          ],
          solution: [
            "Refused : Crawled = {{27 : 9}}.",
            "Divide both parts by their highest common factor (9): **3 : 1**.",
          ],
          difficulty: "core",
          guideRef: "data-analysis-graphs",
          hints: [
            "Start with 27 : 9 in the exact order asked.",
            "Divide both numbers by 9 to simplify fully.",
          ],
          strategy: "Keep order, divide by HCF",
        },
        {
          kind: "short",
          id: "research-methods-p1-q07",
          question:
            "Participants guess what a researcher is testing from obvious clues in the instructions and deliberately alter their answers to 'help' confirm the hypothesis. What is the two-word term for these cues?",
          answer: {
            type: "text",
            accept: ["demand characteristics", "demand characteristic"],
            display: "demand characteristics",
          },
          solution: [
            "Cues in an experiment that reveal its aim and prompt participants to change their natural behaviour are **demand characteristics**.",
          ],
          commonError: "Confusing investigator effects (researcher behaviour) with demand characteristics (task cues prompting participants to guess the aim).",
          difficulty: "core",
          guideRef: "variables-hypotheses-controls",
          hints: [
            "Participants respond to perceived 'demands' of the experimental situation.",
            "Starts with 'demand c…'.",
          ],
          strategy: "Key term recall",
        },
        {
          kind: "written",
          id: "research-methods-p1-q08",
          question:
            "Dr Verma tests whether **font colour** affects reading retention. Group 1 reads a 300-word passage printed in **blue ink** and answers 15 comprehension questions; Group 2 reads the same passage in **black ink** and answers the same 15 questions. Write a fully operationalised **null hypothesis** for Dr Verma's study. [2 marks]",
          marks: 2,
          modelAnswer:
            "There will be no significant difference in the comprehension score out of 15 between participants who read the passage printed in blue ink and those who read it in black ink; any observed difference will be due to chance.",
          markScheme: [
            {
              point: "States 'no significant difference' (or any difference is due to chance)",
              keywords: ["no significant difference", "no difference", "due to chance"],
            },
            {
              point: "Operationalises both the IV (blue vs black ink) and DV (score / number of correct answers out of 15)",
              keywords: ["out of 15", "correct answers", "score", "15 questions"],
            },
          ],
          commonError:
            "Forgetting to operationalise the DV (writing 'no difference in retention') or writing 'there will be a difference' (which is non-directional, not null!).",
          difficulty: "core",
          guideRef: "variables-hypotheses-controls",
          hints: [
            "Start with 'There will be no significant difference in…' and mention chance.",
            "Include the exact DV metric (score out of 15) alongside blue vs black ink.",
          ],
          strategy: "Null = 'no significant difference' + operationalised IV & DV",
        },
        {
          kind: "written",
          id: "research-methods-p1-q09",
          question:
            "Identify **one participant extraneous variable** and **one situational extraneous variable** that could affect Dr Verma's blue-vs-black font comprehension experiment, and state how each could be controlled. [4 marks]",
          marks: 4,
          modelAnswer:
            "A participant extraneous variable is differences in prior reading ability or eyesight between the two groups. This can be controlled by randomly allocating participants to the blue or black condition (or screening for normal/corrected vision). A situational extraneous variable is uneven room noise or lighting during testing. This can be controlled through standardisation — testing both groups in the same quiet room under identical lux lighting and timings.",
          markScheme: [
            {
              point: "Identifies a relevant participant variable (e.g. reading skill, IQ, eyesight, colour blindness)",
              keywords: ["eyesight", "vision", "reading ability", "iq", "colour-blind", "color-blind", "vocabulary", "dyslexia"],
            },
            {
              point: "States a valid control for the participant variable (e.g. random allocation, matched pairs pre-test, vision check)",
              keywords: ["random allocation", "randomly allocate", "matched pairs", "pre-test", "screen"],
            },
            {
              point: "Identifies a relevant situational variable (e.g. room lighting, background noise, temperature, time limit)",
              keywords: ["lighting", "noise", "quiet", "temperature", "time of day", "time limit"],
            },
            {
              point: "States a valid control for the situational variable (standardisation / keeping room, light and timing identical)",
              keywords: ["standardis", "identical", "same room", "constant", "keep the lighting"],
            },
          ],
          commonError:
            "Naming two situational variables (noise and heat) instead of one participant + one situational variable.",
          difficulty: "core",
          guideRef: "variables-hypotheses-controls",
          hints: [
            "Participant variable = something inside the people (eyesight, reading skill); Situational = something in the room/procedure (lighting, noise).",
            "Pair each variable with a concrete control (random allocation / standardisation).",
          ],
          strategy: "1 Participant EV + Control; 1 Situational EV + Control",
        },
        {
          kind: "written",
          id: "research-methods-p1-q10",
          question:
            "Explain **one strength** and **one limitation** of using a **laboratory experiment** rather than a **field experiment** to study bystander helping (such as Latané & Darley's intercom study vs Piliavin's subway study). [4 marks]",
          marks: 4,
          modelAnswer:
            "A key strength of a laboratory experiment is strict control over extraneous situational variables (such as pre-recorded intercom voices and isolated booths), giving high internal validity and allowing researchers to establish a clear cause-and-effect link between group size and helping. Furthermore, standardised scripts make replication straightforward. However, a major limitation is low ecological validity: sitting in an artificial university cubicle lacks mundane realism, so participants may spot demand characteristics or react differently than commuters facing a real street emergency.",
          markScheme: [
            {
              point: "Strength: strict control over extraneous variables / standardized setup",
              keywords: ["control", "extraneous", "standardis", "isolated"],
            },
            {
              point: "Explains WHY control helps: high internal validity / establishes cause and effect / easy replication",
              keywords: ["internal validity", "cause and effect", "cause-and-effect", "replicat"],
            },
            {
              point: "Limitation: artificial environment / low mundane realism / low ecological validity",
              keywords: ["artificial", "ecological validity", "mundane realism", "unnatural"],
            },
            {
              point: "Explains WHY artificiality hurts: behaviour may not generalise to real-life emergencies or triggers demand characteristics",
              keywords: ["real-life emergencies", "street emergency", "demand characteristics", "generalise", "generalize"],
            },
          ],
          commonError:
            "Writing 'It has high validity' without specifying HIGH INTERNAL validity vs LOW ECOLOGICAL validity!",
          difficulty: "core",
          guideRef: "experiments-designs-sampling",
          hints: [
            "Always name WHICH validity: labs have high INTERNAL validity but low ECOLOGICAL validity!",
            "Link both points directly to helping/emergency behaviour.",
          ],
          strategy: "Contrast internal validity vs ecological validity in context",
        },
        {
          kind: "short",
          id: "research-methods-p1-q11",
          question:
            "Mean error scores on a Ponzo illusion task dropped from **16.0 mm** in childhood to **12.4 mm** in adulthood. Calculate the **percentage decrease** in mean error.",
          answer: { type: "number", value: 22.5 },
          traps: [
            {
              spec: { type: "number", value: 29, tolerance: 0.1 },
              feedback: "You divided the 3.6 mm drop by the new adult value (12.4) instead of the original childhood value (16.0)!",
            },
            {
              spec: { type: "number", value: 3.6 },
              feedback: "3.6 mm is the raw decrease — divide 3.6 by 16.0 and multiply by 100 for the percentage decrease!",
            },
          ],
          solution: [
            "Raw decrease = {{16.0 - 12.4 = 3.6}} mm.",
            "Percentage decrease = {{(3.6 / 16.0) * 100 = 22.5}}%.",
          ],
          difficulty: "core",
          guideRef: "data-analysis-graphs",
          hints: [
            "Subtract 16.0 − 12.4 to get the decrease (3.6).",
            "Divide 3.6 by the ORIGINAL starting value (16.0) and multiply by 100.",
          ],
          strategy: "(Drop ÷ Original) × 100",
        },
        {
          kind: "written",
          id: "research-methods-p1-q12",
          question:
            "A student recruits 20 friends sitting in the sixth-form common room at breaktime for a motivation experiment. Name this **sampling method** and explain **why** it limits the **generalisability** of the findings to all adults. [3 marks]",
          marks: 3,
          modelAnswer:
            "This is opportunity sampling (selecting whoever is conveniently available at the time). It limits generalisability (population validity) because 20 teenage sixth-formers from one school are narrow in age and educational background, and researcher bias arises when recruiting friends — so their motivation responses may not represent older working adults or people from diverse socio-economic backgrounds.",
          markScheme: [
            {
              point: "Correctly names opportunity sampling (convenience sampling)",
              keywords: ["opportunity", "convenience"],
            },
            {
              point: "Identifies sample bias / narrowness in context (only teenage sixth-form friends from one school)",
              keywords: ["teenage", "sixth-form", "friends", "same age", "one school", "researcher bias", "unrepresentative"],
            },
            {
              point: "Explains impact on generalisability / population validity (older / working adults may be motivated differently)",
              keywords: ["older", "working adults", "population validity", "wider population", "different backgrounds"],
            },
          ],
          commonError:
            "Calling it 'random sampling' or merely writing '20 is a small sample so ungeneralisable' without explaining WHO is missing (older/working adults).",
          difficulty: "core",
          guideRef: "experiments-designs-sampling",
          hints: [
            "Name the convenience-based sampling method first (1 mark).",
            "Explain BOTH why friends/teenagers in one room are unrepresentative AND who in the adult population is left out (2 marks).",
          ],
          strategy: "Identify method → Name sample bias → Link to missing target population",
        },
        {
          kind: "short",
          id: "research-methods-p1-q13",
          question:
            "Six participants recall **7, 9, 10, 12, 14, x** words out of 20. If the **mean** recall across all 6 participants is **11 words**, what was the sixth participant's score **x**?",
          answer: { type: "number", value: 14 },
          traps: [
            {
              spec: { type: "number", value: 10.4, tolerance: 0.1 },
              feedback: "10.4 is the mean of the first 5 scores! Total of all 6 scores must be 6 × 11 = 66.",
            },
          ],
          solution: [
            "Total sum of all 6 scores = {{6 * 11 = 66}} words.",
            "Sum of the first 5 scores = {{7 + 9 + 10 + 12 + 14 = 52}} words.",
            "Sixth score {{x = 66 - 52 = 14}} words.",
          ],
          difficulty: "challenge",
          guideRef: "data-analysis-graphs",
          hints: [
            "Work backwards from the mean: if 6 scores average 11, what must all 6 scores add up to?",
            "Subtract (7 + 9 + 10 + 12 + 14) from 66.",
          ],
          strategy: "Work backwards using Total = Mean × N",
        },
        {
          kind: "written",
          id: "research-methods-p1-q14",
          question:
            "A psychologist switches a sleep-and-alertness study from an **independent measures design** to a **repeated measures design**. Explain **one problem** this change introduces and describe **precisely** how the psychologist can control it. [3 marks]",
          marks: 3,
          modelAnswer:
            "Switching to repeated measures introduces order effects: participants completing both conditions may improve on the second alertness test due to practice, or perform worse due to boredom and fatigue (and may also spot the study's aim, causing demand characteristics). The psychologist can control order effects using ABBA counterbalancing — randomly splitting the sample in half so 50% complete Condition A followed by Condition B, while the remaining 50% complete Condition B followed by Condition A.",
          markScheme: [
            {
              point: "Identifies order effects (practice, boredom or fatigue) or increased demand characteristics",
              keywords: ["order effect", "practice", "fatigue", "boredom", "tired", "demand characteristic"],
            },
            {
              point: "Names counterbalancing (AB/BA) or matched equivalent alertness tasks",
              keywords: ["counterbalanc", "abba", "ab/ba"],
            },
            {
              point: "Describes how counterbalancing works in full (half do A then B, half do B then A)",
              keywords: ["half", "50%", "a then b", "b then a", "opposite order", "reverse order"],
            },
          ],
          commonError:
            "Writing 'use counterbalancing' without explaining HOW half do A→B and half do B→A!",
          difficulty: "core",
          guideRef: "experiments-designs-sampling",
          hints: [
            "Name what happens when the same person takes two tests in a row.",
            "Name counterbalancing AND spell out what each half of the sample does!",
          ],
          strategy: "State order effect → Name counterbalancing → Spell out 50% A→B / 50% B→A",
        },
        {
          kind: "written",
          id: "research-methods-p1-q15",
          question:
            "Examine the results table from an experiment comparing serial recall under two processing instructions:\n\n| Condition | Mean Words Recalled (/20) | Range |\n|---|---|---|\n| Shallow Structural (Capital Letters?) | 7.2 | 3 |\n| Deep Semantic (Fits Sentence Meaning?) | 15.6 | 9 |\n\nInterpret what **both** the **mean** and the **range** reveal about participant recall across the two conditions. [4 marks]",
          marks: 4,
          modelAnswer:
            "First, the mean recall in the Deep Semantic condition (15.6 words) is more than double that of the Shallow Structural condition (7.2 words), supporting the prediction that semantic encoding produces superior average memory recall. Second, however, the range is much smaller in Shallow Structural (3 words) than in Deep Semantic (9 words), showing that shallow recall scores were tightly clustered and consistent across individuals, whereas semantic recall varied much more widely between participants.",
          markScheme: [
            {
              point: "Compares condition means accurately using figures (15.6 vs 7.2 words)",
              keywords: ["15.6", "7.2", "more than double", "higher mean"],
            },
            {
              point: "Interprets what the means show (deep semantic processing leads to better average recall)",
              keywords: ["better", "superior", "higher average", "more words on average", "improved recall"],
            },
            {
              point: "Compares condition ranges accurately using figures (range 3 vs range 9)",
              keywords: ["3", "9", "smaller range", "wider range", "larger range"],
            },
            {
              point: "Interprets what the ranges show about spread/consistency (Shallow is more consistent; Deep has greater individual variation/spread)",
              keywords: ["consistent", "consistency", "spread", "varied", "variation", "dispersed", "clustered"],
            },
          ],
          commonError:
            "Quoting the numbers without interpreting 'consistency/spread' for the range, or falsely claiming a bigger range means 'more reliable'!",
          difficulty: "core",
          guideRef: "data-analysis-graphs",
          hints: [
            "Paragraph 1: Compare the two means (15.6 vs 7.2) and state what that says about average recall.",
            "Paragraph 2: Compare the two ranges (3 vs 9) and state which condition had more consistent vs more varied scores!",
          ],
          strategy: "Quote figures + interpret Mean (level) AND Range (consistency)",
        },
      ],
    },
    {
      id: "research-methods-p2",
      title: "Practice Paper 2 — Non-Experimental Methods, Correlations, Ethics & Validity",
      questions: [
        {
          kind: "short",
          id: "research-methods-p2-q01",
          question:
            "In a correlational study, what name is given to the **two measured continuous variables** (instead of 'IV' and 'DV')?",
          answer: {
            type: "text",
            accept: ["co-variables", "covariables", "co-variable", "covariable"],
            display: "co-variables",
          },
          solution: [
            "Because neither variable is manipulated by the researcher, the two measured variables in a correlation are called **co-variables**.",
          ],
          commonError: "Calling correlated variables IV and DV — correlations have NO manipulated IV, only two measured co-variables!",
          difficulty: "warmup",
          guideRef: "non-experimental-methods",
          hints: ["Starts with 'co-…'."],
          strategy: "Correlations = co-variables",
        },
        {
          kind: "short",
          id: "research-methods-p2-q02",
          question:
            "On a scattergraph of **32 participants** investigating daily caffeine intake (mg) and sleep onset latency (minutes), how many **plotted points (dots)** should appear on the graph?",
          answer: { type: "number", value: 32 },
          traps: [
            {
              spec: { type: "number", value: 64 },
              feedback: "Don't double N! Each participant's (caffeine, sleep latency) pair forms ONE coordinate point (x, y), so 32 people = 32 dots.",
            },
          ],
          solution: [
            "Each dot plots one participant's `(x, y)` pair of co-variable scores — so 32 participants produce **32** points.",
          ],
          difficulty: "warmup",
          guideRef: "data-analysis-graphs",
          hints: ["1 participant = 1 (x, y) coordinate dot!"],
          strategy: "Dots on scattergraph = N participants",
        },
        {
          kind: "short",
          id: "research-methods-p2-q03",
          question:
            "In a playground observation, an observer tallies **every single time** a child shares a crayon during a 20-minute free-play session. Name this observational **sampling technique**.",
          answer: {
            type: "text",
            accept: ["event sampling", "event"],
            display: "event sampling",
          },
          traps: [
            {
              spec: { type: "text", accept: ["time sampling"] },
              feedback: "20 minutes is just the total session length! Because every occurrence of sharing is tallied whenever it happens, it is event sampling.",
            },
          ],
          solution: [
            "Counting every occurrence of a target behaviour throughout the observation period is **event sampling**.",
          ],
          difficulty: "core",
          guideRef: "non-experimental-methods",
          hints: [
            "Don't be tricked by '20-minute session' — ask whether they record at fixed clock ticks or count EVERY sharing event!",
            "Two words: '______ sampling'.",
          ],
          strategy: "Count every occurrence = event sampling",
        },
        {
          kind: "short",
          id: "research-methods-p2-q04",
          question:
            "Ten participants rate a nostalgic advert's warmth from 1 to 10: **7, 8, 5, 8, 9, 6, 8, 10, 4, 5**. What is the **mode** of these ratings?",
          answer: { type: "number", value: 8 },
          traps: [
            {
              spec: { type: "number", value: 7 },
              feedback: "7 is the mean (70 ÷ 10 = 7). The mode is the single score that appears most often!",
            },
            {
              spec: { type: "number", value: 7.5 },
              feedback: "7.5 is the median ((7 + 8) ÷ 2). The mode is the most frequent value!",
            },
          ],
          solution: [
            "Count frequencies: `4 (×1), 5 (×2), 6 (×1), 7 (×1), 8 (×3), 9 (×1), 10 (×1)`.",
            "`8` occurs three times (more than any other rating), so **Mode = 8**.",
          ],
          difficulty: "warmup",
          guideRef: "data-analysis-graphs",
          hints: ["Which number appears most frequently in the list?"],
          strategy: "Mode = most frequent",
        },
        {
          kind: "short",
          id: "research-methods-p2-q05",
          question:
            "Using the same ten advert ratings (**7, 8, 5, 8, 9, 6, 8, 10, 4, 5**), calculate the **median** rating.",
          answer: { type: "number", value: 7.5 },
          traps: [
            {
              spec: { type: "number", value: 7 },
              feedback: "7 is the mean! Sort first: 4, 5, 5, 6, 7, 8, 8, 8, 9, 10 — then average the 5th (7) and 6th (8) scores.",
            },
            {
              spec: { type: "number", value: 8 },
              feedback: "8 is the mode! Sort the list ascending first, then average the 5th (7) and 6th (8) scores.",
            },
          ],
          solution: [
            "Sort ascending: `4, 5, 5, 6, 7, 8, 8, 8, 9, 10` ($N = 10$).",
            "Average the 5th (`7`) and 6th (`8`) ordered scores: {{(7 + 8) / 2 = 7.5}}.",
          ],
          difficulty: "core",
          guideRef: "data-analysis-graphs",
          hints: [
            "Write the 10 numbers in order from 4 up to 10.",
            "Average the 5th and 6th numbers in your sorted list.",
          ],
          strategy: "Sort first, average 5th & 6th for N = 10",
        },
        {
          kind: "short",
          id: "research-methods-p2-q06",
          question:
            "Out of **80 questionnaires** posted to parents about toddler language milestones, **52** are returned completed. Calculate the **response rate as a percentage**.",
          answer: { type: "number", value: 65 },
          solution: [
            "Percentage returned = {{(52 / 80) * 100 = 0.65 * 100 = 65}}%.",
          ],
          commonError: "Subtracting 80 − 52 = 28 instead of calculating (52 ÷ 80) × 100 = 65%.",
          difficulty: "warmup",
          guideRef: "data-analysis-graphs",
          hints: ["Divide 52 by 80 and multiply by 100."],
          strategy: "(Part ÷ Total) × 100",
        },
        {
          kind: "short",
          id: "research-methods-p2-q07",
          question:
            "In an ethical research report on brain-injured amnesia patients, researchers refer to Henry Molaison only by his initials **'H.M.'** Which ethical guideline does this uphold?",
          answer: {
            type: "text",
            accept: ["confidentiality", "anonymity", "privacy and confidentiality"],
            display: "confidentiality",
          },
          solution: [
            "Using initials or participant numbers so personal data cannot be traced back to an identifiable individual protects **confidentiality** (anonymity).",
          ],
          commonError: "Writing protection from harm or debriefing instead of confidentiality (anonymising participants with initials).",
          difficulty: "warmup",
          guideRef: "ethics-reliability-validity",
          hints: ["Keeping a participant's identity and personal records anonymous."],
          strategy: "Initials/numbers = Confidentiality",
        },
        {
          kind: "written",
          id: "research-methods-p2-q08",
          question:
            "A psychologist designs a questionnaire on **teenage exam stress** containing both **closed Likert-scale items** and **open questions**. Explain **one advantage of the closed items** and **one advantage of the open questions** in this study. [4 marks]",
          marks: 4,
          modelAnswer:
            "Closed Likert-scale items (e.g. rating exam anxiety from 1 to 5) produce quantitative numerical data, making it fast and objective to calculate mean stress scores and compare year groups on a bar chart with high reliability. Meanwhile, open questions (e.g. 'Describe what worries you most about exams') generate rich, detailed qualitative data in teenagers' own words, uncovering unexpected personal triggers of stress without forcing them into pre-set boxes (higher validity).",
          markScheme: [
            {
              point: "Closed items yield quantitative / numerical scores",
              keywords: ["quantitative", "numerical", "numbers"],
            },
            {
              point: "Explains why quantitative helps: easy/objective to compare statistically (means/graphs) with high reliability",
              keywords: ["mean", "average", "compare", "graph", "bar chart", "statist", "objective", "reliab"],
            },
            {
              point: "Open items yield rich / in-depth qualitative data in respondents' own words",
              keywords: ["qualitative", "in-depth", "rich", "detail", "own words"],
            },
            {
              point: "Explains why qualitative helps: reveals unexpected insights / reasons behind exam stress (higher validity)",
              keywords: ["unexpected", "why", "valid", "insight", "not forced", "explain"],
            },
          ],
          commonError:
            "Saying closed questions are 'more valid' — closed questions are more RELIABLE/objective, whereas open questions offer deeper qualitative VALIDITY!",
          difficulty: "core",
          guideRef: "non-experimental-methods",
          hints: [
            "Closed items → Quantitative numbers → easy statistical comparison / reliability.",
            "Open items → Qualitative words → rich unexpected reasons why teenagers feel stressed / validity.",
          ],
          strategy: "Link Closed→Quantitative→Comparison and Open→Qualitative→Insight",
        },
        {
          kind: "written",
          id: "research-methods-p2-q09",
          question:
            "A researcher conducts a **correlational study** and finds a strong **positive correlation** between **daily minutes of prosocial video-game play** and **teacher-rated classroom helpfulness (out of 20)**. Write a operationalised **directional correlational hypothesis** for this study AND explain **why** the researcher **cannot** conclude that prosocial gaming *causes* helpfulness. [4 marks]",
          marks: 4,
          modelAnswer:
            "Hypothesis: There will be a significant positive correlation between a pupil's daily minutes spent playing prosocial video games and their teacher-rated classroom helpfulness score out of 20. Explanation: Because correlations only measure two naturally occurring co-variables without manipulating an IV or randomly allocating pupils, causation cannot be established — reverse directionality is possible (naturally kind, helpful pupils may choose prosocial games), or a third intervening variable such as warm parental modelling could independently boost both.",
          markScheme: [
            {
              point: "States a clear directional correlational relationship ('positive correlation') without using 'difference' or 'causes'",
              keywords: ["positive correlation", "positively correlated"],
            },
            {
              point: "Operationalises both co-variables (minutes of prosocial gaming AND teacher helpfulness rating out of 20)",
              keywords: ["minutes", "out of 20", "rating", "score"],
            },
            {
              point: "Explains no IV manipulation / no experimental control over variables",
              keywords: ["manipulat", "no iv", "not an experiment", "co-variable", "control"],
            },
            {
              point: "Explains directionality problem (helpful children choose prosocial games) OR a plausible third variable (e.g. parenting / empathy)",
              keywords: ["third variable", "intervening", "other way", "reverse", "choose", "parent", "empathy", "direction"],
            },
          ],
          commonError:
            "Writing 'There will be a difference between gaming and helpfulness' — correlations test a RELATIONSHIP/CORRELATION between co-variables, never a 'difference' between groups!",
          difficulty: "core",
          guideRef: "non-experimental-methods",
          hints: [
            "Use the exact phrase 'positive correlation between [Co-variable 1] and [Co-variable 2]' — never write 'difference'!",
            "Explain BOTH lack of IV manipulation AND reverse directionality or a third variable (like parenting).",
          ],
          strategy: "Use 'positive correlation' + explain third-variable / reverse directionality",
        },
        {
          kind: "written",
          id: "research-methods-p2-q10",
          question:
            "Compare **covert observation** and **overt observation** when studying how shoppers react to a littering sign in a public park. Give **one methodological advantage of covert observation** and **one ethical advantage of overt observation**. [4 marks]",
          marks: 4,
          modelAnswer:
            "Methodological advantage of covert observation: because park visitors do not know they are being watched, they act naturally without demand characteristics or social desirability bias (avoiding the Hawthorne effect, where people only bin litter because an observer is staring at them), boosting internal and ecological validity. Ethical advantage of overt observation: when observers are visible and notify park users beforehand, visitors can give informed consent and exercise their right to withdraw by walking away if they do not wish to be recorded.",
          markScheme: [
            {
              point: "Covert advantage: participants are unaware they are being observed",
              keywords: ["unaware", "do not know", "don't know", "secret", "hidden"],
            },
            {
              point: "Explains methodological benefit: natural behaviour / eliminates demand characteristics, Hawthorne effect or social desirability",
              keywords: ["natural", "demand characteristic", "social desirability", "hawthorne", "valid"],
            },
            {
              point: "Overt advantage: transparent / avoids deception about being watched",
              keywords: ["deception", "transparent", "honest", "openly", "know they are"],
            },
            {
              point: "Links overt observation to informed consent or right to withdraw / privacy",
              keywords: ["informed consent", "consent", "withdraw", "privacy"],
            },
          ],
          commonError:
            "Swapping covert (hidden) and overt (open), or giving two ethical points instead of one methodological + one ethical.",
          difficulty: "core",
          guideRef: "non-experimental-methods",
          hints: [
            "Covert = hidden camera/observer → why does that make littering behaviour more genuine?",
            "Overt = open observer → which DRIP ethical rights does openness protect?",
          ],
          strategy: "Covert = higher validity (no acting); Overt = stronger ethics (consent)",
        },
        {
          kind: "short",
          id: "research-methods-p2-q11",
          question:
            "Seven students complete a test twice (Monday and Friday) to check **test-retest reliability**. Look at one student's scores across 6 sub-scales on Monday: **11, 14, 14, 15, 17, 49** (a computer glitch added 30 points to Sub-scale 6!). Which measure of central tendency (**mean**, **median**, or **mode**) best represents typical sub-scale performance without distortion by the `49`?",
          answer: {
            type: "text",
            accept: ["median"],
            display: "median",
          },
          traps: [
            {
              spec: { type: "text", accept: ["mean"] },
              feedback: "The glitch outlier (49) pulls the mean up to 20.0 — higher than 5 out of 6 sub-scales! Use the median (14.5).",
            },
          ],
          solution: [
            "Because `49` is an extreme outlier, the mean (`20.0`) is severely skewed upward, whereas the **median** (`(14 + 15) ÷ 2 = 14.5`) remains unaffected.",
          ],
          difficulty: "core",
          guideRef: "data-analysis-graphs",
          hints: [
            "Notice that 49 is an extreme outlier caused by a glitch.",
            "Which average ignores extreme values at the ends of an ordered list?",
          ],
          strategy: "Outlier present → Median",
        },
        {
          kind: "written",
          id: "research-methods-p2-q12",
          question:
            "Explain the difference between **reliability** and **validity** in psychological research, using an example of either a **questionnaire** or an **observation** to illustrate your answer. [4 marks]",
          marks: 4,
          modelAnswer:
            "Reliability refers to the consistency and replicability of a measuring tool — whether repeating it produces the same results. Validity refers to accuracy and truthfulness — whether the tool genuinely measures the psychological construct it claims to measure. For example, a closed sleep-quality questionnaire has high test-retest reliability if respondents get the same score two weeks apart, yet it would have low validity if its questions actually measured daytime caffeine intake or if social desirability caused respondents to lie about bedtime.",
          markScheme: [
            {
              point: "Defines reliability accurately as consistency / replicability of measurements",
              keywords: ["consisten", "same score", "same result", "replicab", "repeatable"],
            },
            {
              point: "Defines validity accurately as accuracy / measuring what it claims or intends to measure",
              keywords: ["accura", "claims to measure", "intends to measure", "supposed to measure", "truth"],
            },
            {
              point: "Applies reliability concretely to a questionnaire (test-retest) or observation (inter-observer tally agreement)",
              keywords: ["test-retest", "inter-observer", "inter-rater", "two observers", "two occasions", "weeks apart"],
            },
            {
              point: "Applies validity concretely to that same method (measuring wrong construct, social desirability, or covert naturalness)",
              keywords: ["social desirability", "wrong", "lie", "covert", "actually measur", "demand characteristic"],
            },
          ],
          commonError:
            "Using 'reliable' to mean 'trustworthy/accurate' — in CIE 0266, reliable strictly means CONSISTENT!",
          difficulty: "core",
          guideRef: "ethics-reliability-validity",
          hints: [
            "Define both terms clearly first: Reliability = consistency; Validity = accuracy.",
            "Show how ONE method (like a questionnaire or playground observation) can be consistent yet inaccurate (or vice versa).",
          ],
          strategy: "Define both + apply both to one concrete example",
        },
        {
          kind: "written",
          id: "research-methods-p2-q13",
          question:
            "Evaluate the use of **in-depth case studies** (such as Milner et al.'s study of H.M. or Hewitt's child schema studies) by explaining **one strength** and **one limitation**. [4 marks]",
          marks: 4,
          modelAnswer:
            "A major strength of case studies is that they gather rich, holistic longitudinal data (often triangulating interviews, observations and cognitive tests) on rare neurological or developmental cases like H.M.'s hippocampal surgery — phenomena that psychologists could never ethically induce in an experiment. However, a key limitation is low population validity: because the sample consists of one unique individual (n = 1), atypical factors such as H.M.'s severe pre-surgery epilepsy mean findings cannot automatically be generalised to healthy brains.",
          markScheme: [
            {
              point: "Strength: rich, holistic, detailed / longitudinal insight (triangulation)",
              keywords: ["rich", "in-depth", "detailed", "holistic", "longitudinal", "triangulat"],
            },
            {
              point: "Strength explained: enables study of rare / unethical conditions or falsifies universal theories",
              keywords: ["rare", "unethical", "impossible to", "falsif", "surgery", "brain damage"],
            },
            {
              point: "Limitation: unique single individual / tiny sample (n = 1) / researcher subjectivity",
              keywords: ["unique", "single individual", "one person", "n = 1", "n=1", "atypical", "epilepsy", "subjective"],
            },
            {
              point: "Limitation explained: low generalisability / low population validity to the wider population",
              keywords: ["generalis", "generaliz", "population validity", "wider population"],
            },
          ],
          commonError:
            "Writing 'Case studies have no quantitative data' — Milner et al. actually used many quantitative IQ and digit-span tests alongside qualitative observations!",
          difficulty: "core",
          guideRef: "non-experimental-methods",
          hints: [
            "Why couldn't scientists run a lab experiment removing people's hippocampi?",
            "Why might one rare patient (n = 1) not represent everyone else?",
          ],
          strategy: "Strength (rare/unethical rich insight) vs Limitation (n=1 generalisability)",
        },
        {
          kind: "short",
          id: "research-methods-p2-q14",
          question:
            "In a language observation, Observer 1 and Observer 2 independently watch the same 15 toddlers and record counts of overregularisation (`'goed'`, `'foots'`). Out of **60 time intervals**, both observers write the exact same tally code in **51 intervals**. Calculate their **percentage agreement**.",
          answer: { type: "number", value: 85 },
          solution: [
            "Percentage agreement = {{(51 / 60) * 100 = 0.85 * 100 = 85}}%.",
          ],
          commonError: "Using total toddlers (15) instead of total observation intervals: (34 ÷ 40) × 100 = 85%.",
          difficulty: "core",
          guideRef: "ethics-reliability-validity",
          hints: [
            "Write agreed intervals over total intervals as a fraction (51 / 60).",
            "Multiply (51 ÷ 60) by 100 to convert to a percentage.",
          ],
          strategy: "(Agreed ÷ Total) × 100",
        },
        {
          kind: "written",
          id: "research-methods-p2-q15",
          question:
            "A psychologist wants to display two datasets in a report:\n- **Dataset 1**: Mean number of prosocial acts across four cities (*Singapore, Rio, London, Tokyo*).\n- **Dataset 2**: Individual participants' **empathy test score (0–40)** paired with **minutes spent volunteering per week**.\n\nName the **correct graph** for Dataset 1 and the **correct graph** for Dataset 2, justifying **each** choice. [4 marks]",
          marks: 4,
          modelAnswer:
            "Dataset 1 should be displayed on a bar chart (with equal gaps between bars) because the four cities are discrete, separate nominal categories plotted against mean prosocial acts. Dataset 2 should be displayed on a scattergraph because it examines a correlational relationship between two continuous co-variables (empathy score on one axis and weekly volunteering minutes on the other, with one dot per participant).",
          markScheme: [
            {
              point: "Identifies Bar Chart (with gaps) for Dataset 1",
              keywords: ["bar chart", "bar graph"],
            },
            {
              point: "Justifies Bar Chart: the four cities are discrete / nominal / separate categories",
              keywords: ["discrete", "categor", "nominal", "separate", "gaps"],
            },
            {
              point: "Identifies Scattergraph (scatter diagram) for Dataset 2",
              keywords: ["scattergraph", "scatter diagram", "scatter plot", "scatterplot"],
            },
            {
              point: "Justifies Scattergraph: two continuous co-variables / testing a correlation",
              keywords: ["continuous", "co-variable", "covariable", "correlat", "relationship"],
            },
          ],
          commonError:
            "Choosing a histogram for Dataset 1 (cities are discrete categories, not continuous numerical intervals!).",
          difficulty: "core",
          guideRef: "data-analysis-graphs",
          hints: [
            "Are four cities continuous numbers or separate discrete categories?",
            "Are empathy score + volunteering minutes two continuous co-variables per person?",
          ],
          strategy: "Match data structure (discrete vs 2 continuous co-variables) to graph type",
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "short",
      id: "research-methods-ch-q01",
      question:
        "A college has **1,200 students** across three year groups in the ratio **Year 10 : Year 11 : Year 12 = 5 : 4 : 3**. A psychologist selects a **stratified sample of 72 students**, and then allocates each stratum equally into Condition A and Condition B of an **independent measures** experiment. How many **Year 11** students end up in **Condition A**?",
      answer: { type: "number", value: 12 },
      traps: [
        {
          spec: { type: "number", value: 24 },
          feedback: "24 is the total number of Year 11 students in the 72-person sample — remember half of them go into Condition A!",
        },
        {
          spec: { type: "number", value: 400 },
          feedback: "400 is the Year 11 population in the whole college — calculate the stratified sample of 72 and then halve for Condition A!",
        },
      ],
      solution: [
        "Total ratio parts = {{5 + 4 + 3 = 12}} parts.",
        "Year 11 makes up {{4 / 12 = 1 / 3}} of the college.",
        "Year 11 students in the stratified sample of 72 = {{(1 / 3) * 72 = 24}} students.",
        "Allocated equally between Condition A and Condition B: {{24 / 2 = 12}} Year 11 students in Condition A.",
      ],
      difficulty: "challenge",
      guideRef: "experiments-designs-sampling",
      hints: [
        "First find what fraction of the total ratio (5 + 4 + 3 = 12) is Year 11 (4/12).",
        "Find 4/12 of 72 for the total Year 11 sample, then divide by 2 for Condition A!",
      ],
      strategy: "Multi-step: Ratio proportion → Stratified count → Condition split",
    },
    {
      kind: "short",
      id: "research-methods-ch-q02",
      question:
        "Seven participants complete a visual-search task in seconds: **12, 14, 15, 16, 18, 20, 93** (Participant 7 accidentally knocked the keyboard onto the floor). By how many seconds does removing the anomalous outlier (`93 s`) **reduce the mean**? Give your answer to **1 decimal place**.",
      answer: { type: "number", value: 11.0, tolerance: 0.05 },
      traps: [
        {
          spec: { type: "number", value: 15.8, tolerance: 0.1 },
          feedback: "15.8 s is the new mean of the remaining 6 participants — subtract 15.83 from the original 7-person mean (26.86)!",
        },
        {
          spec: { type: "number", value: 26.9, tolerance: 0.1 },
          feedback: "26.9 s is the original mean with the outlier included — find the difference between the old mean and the new 6-person mean!",
        },
      ],
      solution: [
        "Original sum (all 7) = {{12 + 14 + 15 + 16 + 18 + 20 + 93 = 188}} s → Original mean = {{188 / 7 = 26.857}} s.",
        "Cleaned sum (6 valid scores) = {{188 - 93 = 95}} s → New mean = {{95 / 6 = 15.833}} s.",
        "Reduction in mean = {{26.857 - 15.833 = 11.024}} ≈ **11.0 s** (to 1 d.p.).",
      ],
      difficulty: "challenge",
      guideRef: "data-analysis-graphs",
      hints: [
        "Calculate the 7-person mean first (188 ÷ 7 ≈ 26.86).",
        "Remove 93 and divide the remaining sum (95) by 6 (NOT 7!), then subtract!",
      ],
      strategy: "Recompute denominator N − 1 when removing an outlier",
    },
    {
      kind: "written",
      id: "research-methods-ch-q03",
      question:
        "**Design an Experiment (CIE 0266 Extended Paper 1 Style)**:\nA teacher claims that **doing 5 minutes of star-jumps before a lesson improves vocabulary learning** in 15-year-olds. Design an **ethical laboratory experiment** using a **repeated measures design** to test this claim. In your plan, clearly state:\n1. The operationalised **IV** and **DV**.\n2. How **counterbalancing** and **stimulus controls** will prevent order/carry-over effects.\n3. **One ethical consideration** for 15-year-old participants and how you will address it. [6 marks]",
      marks: 6,
      modelAnswer:
        "1) Operationalised variables: The IV is whether participants perform 5 minutes of star-jumps vs sit quietly on a chair for 5 minutes immediately before studying. The DV is the number of unfamiliar Spanish-English word pairs accurately recalled out of 20 on a written test after 3 minutes of study. 2) Repeated measures controls: Using ABBA counterbalancing, half the sample (e.g. 15 pupils) completes Star-Jumps on Day 1 then Sitting Quietly on Day 2, while the other 15 complete Sitting Quietly on Day 1 then Star-Jumps on Day 2 to balance fatigue/practice. Crucially, two different 20-word lists matched for syllable length and difficulty (List X and List Y) are used so pupils cannot recall Day 1's words on Day 2. 3) Ethics: Because participants are 15 (under 16), written parental/guardian informed consent plus pupil assent must be obtained beforehand, alongside medical screening (e.g. asthma/injury check) and clear right to stop exercising at any moment to protect from physical harm.",
      markScheme: [
        {
          point: "Operationalises the IV with both exercise and non-exercise control conditions (5 min star-jumps vs 5 min sitting quietly)",
          keywords: ["sit quietly", "sitting", "resting", "no exercise", "without exercise"],
        },
        {
          point: "Operationalises the DV in exact recall units (e.g. number of words recalled out of 20)",
          keywords: ["out of 20", "out of 15", "out of 30", "number of words", "score out of"],
        },
        {
          point: "Explains ABBA counterbalancing (half exercise→rest, half rest→exercise)",
          keywords: ["counterbalanc", "half", "reverse order", "abba", "b then a"],
        },
        {
          point: "Controls word-list carry-over using two different word lists matched for difficulty/length",
          keywords: ["different word list", "two word lists", "list a and list b", "list x and list y", "matched for difficulty", "equivalent list"],
        },
        {
          point: "Identifies under-16 consent OR physical exercise harm risk (asthma/exhaustion)",
          keywords: ["under 16", "parental consent", "parent", "guardian", "asthma", "physical harm", "medical", "injury"],
        },
        {
          point: "Addresses ethical issue concretely (written parental + pupil assent beforehand, health screening, right to withdraw)",
          keywords: ["assent", "screen", "withdraw", "stop at any time"],
        },
      ],
      commonError:
        "Designing an independent-measures study (two separate groups) when the prompt explicitly specifies a repeated measures design, or reusing the same vocabulary list twice!",
      difficulty: "challenge",
      guideRef: "experiments-designs-sampling",
      hints: [
        "Check every bullet in the brief: Repeated Measures requires BOTH AB/BA counterbalancing AND two matched vocabulary lists!",
        "Notice the participants' age (15 = under 16!) AND physical star-jumps (health/harm check!).",
      ],
      strategy: "Hit every design rubric bullet: IV/DV + Counterbalancing + Matched Lists + <16 Ethics",
    },
    {
      kind: "written",
      id: "research-methods-ch-q04",
      question:
        "**Design a Non-Experimental Observation (CIE 0266 Extended Paper 2 Style)**:\nA psychologist wants to conduct a **structured naturalistic observation** of **polite prosocial behaviour** among customers queuing in a busy supermarket café.\n1. State **two operationalised behavioural categories** the observers should tally.\n2. Justify whether **event sampling** or **time sampling** is better here.\n3. Explain how the psychologist can establish **inter-observer reliability** before collecting main data. [5 marks]",
      marks: 5,
      modelAnswer:
        "1) Behavioural categories: Category A = verbally saying 'please' or 'thank you' to café staff when ordering; Category B = gesturing to let another customer with fewer items step ahead in the queue (or holding a tray/chair for someone). 2) Event sampling is better here because discrete polite gestures at a counter are relatively brief, distinct acts that might be missed completely between fixed 30-second clock beeps in time sampling. 3) To establish inter-observer reliability, two trained observers sit separately watching the exact same pilot café session simultaneously using the same tally sheet, then correlate or calculate percentage agreement between their counts (aiming for at least 80% / +0.80 correlation, refining categories if lower).",
      markScheme: [
        {
          point: "Gives 1st concrete observable behavioural category (e.g. saying 'please'/'thank you')",
          keywords: ["please", "thank you", "holds door", "holding door", "smiles"],
        },
        {
          point: "Gives 2nd distinct concrete observable behavioural category (e.g. letting customer ahead, picking up dropped item, carrying tray)",
          keywords: ["ahead", "queue", "dropped", "tray", "chair", "seat", "wipe"],
        },
        {
          point: "Chooses event or time sampling with a valid contextual justification (e.g. event catches brief discrete acts missed between intervals; OR time manages peak rushes)",
          keywords: ["event sampling", "time sampling", "missed between", "brief", "infrequent", "every occurrence", "fixed interval"],
        },
        {
          point: "Describes two independent observers watching the same session simultaneously with the same checklist",
          keywords: ["two observers", "second observer", "simultaneously", "same time", "independently"],
        },
        {
          point: "Explains comparing/correlating tallies (aiming for ≥80% agreement or ≥+0.80 correlation)",
          keywords: ["correlat", "80%", "0.8", "agreement", "compare their tallies"],
        },
      ],
      commonError:
        "Writing 'Customer is polite' or 'Customer is friendly' as behavioural categories — those are vague judgements, not observable actions!",
      difficulty: "challenge",
      guideRef: "non-experimental-methods",
      hints: [
        "Make both checklist items concrete actions you can see or hear ('says thank you', 'lets person ahead').",
        "Spell out the two-observer simultaneous pilot + correlation/agreement threshold (+0.80 / 80%).",
      ],
      strategy: "Concrete visible acts + Sampling justification + Two-observer correlation",
    },
    {
      kind: "written",
      id: "research-methods-ch-q05",
      question:
        "A health magazine reports: *'A 10-year study of 5,000 adults found a strong negative correlation between daily crossword puzzles completed and memory errors at age 70. Therefore, doing crosswords prevents memory decline!'*\nCritically evaluate the magazine's causal conclusion **and** explain how a psychologist could follow up ethically to test causation more rigorously. [5 marks]",
      marks: 5,
      modelAnswer:
        "First, a negative correlation (as crossword frequency increases, memory errors decrease) shows an inverse association between two co-variables, NOT cause and effect, because no IV was manipulated. Second, reverse directionality is plausible: 70-year-olds who already suffer early memory decline may find crosswords frustrating and stop doing them, rather than crosswords protecting memory! Third, third-variable confounds such as higher baseline education or socioeconomic health could independently drive both crossword habits and sharper memory. To test causation ethically, a psychologist could run a longitudinal randomised field experiment: randomly allocating healthy older volunteers to either a daily 15-minute crossword programme or a control activity for 6 months and comparing pre- vs post-intervention word-recall change.",
      markScheme: [
        {
          point: "Identifies that negative correlation only shows an inverse relationship between co-variables, never causation (no manipulated IV)",
          keywords: ["inverse", "co-variable", "not prove cause", "cannot prove caus", "no iv", "association"],
        },
        {
          point: "Explains reverse directionality in context (early memory decline causes adults to stop doing crosswords)",
          keywords: ["reverse", "other way", "stop doing", "give up", "frustrat", "already have better memory"],
        },
        {
          point: "Identifies a plausible third variable (e.g. education level, IQ, occupation, general health)",
          keywords: ["third variable", "education", "iq", "intelligence", "health", "occupation"],
        },
        {
          point: "Proposes an experimental follow-up manipulating crossword practice vs a control group",
          keywords: ["experiment", "control group", "manipulat"],
        },
        {
          point: "Includes random allocation and pre/post memory measurement to isolate cause and effect",
          keywords: ["random allocation", "randomly allocate", "before and after", "pre-test", "baseline"],
        },
      ],
      commonError:
        "Claiming the magazine got the correlation sign wrong — fewer errors as crosswords rise IS a negative correlation; the flaw is jumping from correlation to causation!",
      difficulty: "challenge",
      guideRef: "non-experimental-methods",
      hints: [
        "Check why correlation ≠ causation in TWO specific ways: reverse directionality (memory loss → quitting crosswords) AND a third variable (education).",
        "Then design a randomised controlled experiment (crossword group vs control group) to actually test cause and effect!",
      ],
      strategy: "Unpack Reverse Direction + Third Variable → Propose Randomised Experiment",
    },
    {
      kind: "short",
      id: "research-methods-ch-q06",
      question:
        "Eight participants take a dichotic-listening error test. Seven of their scores are **3, 5, 5, 7, 8, 10, 12**, and the eighth score **k** is greater than `12`. If the **range** of all 8 scores is **twice the median** of all 8 scores, find **k**.",
      answer: { type: "number", value: 18 },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "If k = 15, range = 15 − 3 = 12, which is NOT twice the median (7.5 × 2 = 15) — remember Range = k − 3 = 15, so add the lowest score (3)!",
        },
      ],
      solution: [
        "Since {{k > 12}}, the sorted list of 8 scores is `3, 5, 5, 7, 8, 10, 12, k`.",
        "Regardless of how large {{k > 12}} is, the 4th and 5th ordered values are `7` and `8`, so **Median** = {{(7 + 8) / 2 = 7.5}}!",
        "Range = {{2 * 7.5 = 15}}.",
        "Since Lowest = `3` and Range = {{k - 3 = 15}}, we get {{k = 15 + 3 = 18}}.",
      ],
      difficulty: "challenge",
      guideRef: "data-analysis-graphs",
      hints: [
        "Write all 8 scores in ascending order (`3, 5, 5, 7, 8, 10, 12, k`): notice that the 4th and 5th values don't depend on k!",
        "Find the median ((7 + 8) ÷ 2 = 7.5), double it to get the range (15), and solve k − 3 = 15!",
      ],
      strategy: "Exploit median invariance to extreme upper value",
    },
    {
      kind: "written",
      id: "research-methods-ch-q07",
      question:
        "Using the **`GRAVE` framework**, evaluate a laboratory study in which **24 American male psychology undergraduates** volunteered for course credit to memorise lists of 15 numbers in silence vs white noise. Provide **four distinct evaluation points** (covering at least **Generalisability**, **Reliability**, **Ecological Validity**, and **Internal Validity / Ethics**). [6 marks]",
      marks: 6,
      modelAnswer:
        "Generalisability (Population Validity): The volunteer sample of 24 American male psychology undergraduates is gender-biased (androcentric), narrow in age/education, and culturally WEIRD, so findings cannot safely be generalised to females, older adults, or non-Western populations; volunteer bias also means keen students are over-represented. Reliability: Conducting the test inside a controlled lab with standardised 15-number lists and calibrated white-noise decibels makes exact replication easy, ensuring high reliability. Ecological Validity: Memorising isolated 15-digit strings in a lab cubicle lacks mundane realism compared with everyday studying in offices or cafés, limiting ecological validity. Internal Validity & Ethics: Psychology undergraduates may recognise memory-design cues (increasing demand characteristics), though ethically adults gave informed consent and white noise poses minimal everyday-level harm provided they could withdraw without losing all course credit alternatives.",
      markScheme: [
        {
          point: "Generalisability: identifies narrow WEIRD / all-male / psychology student volunteer sample",
          keywords: ["androcentric", "all-male", "females", "weird", "undergraduates", "volunteer bias"],
        },
        {
          point: "Explains generalisability impact (low population validity to women, older adults or other cultures)",
          keywords: ["population validity", "older adults", "other cultures", "women", "cannot be generalised", "cannot safely be generalised"],
        },
        {
          point: "Reliability: standardised lab lists / decibels allow exact replication and consistency",
          keywords: ["reliab", "standardis", "replicat", "calibrated"],
        },
        {
          point: "Ecological validity: artificial 15-number task / lab booth lacks mundane realism for real-world studying",
          keywords: ["ecological validity", "mundane realism", "artificial", "everyday studying", "real-world studying"],
        },
        {
          point: "Internal validity: psychology students are especially prone to guessing the aim (demand characteristics)",
          keywords: ["demand characteristic", "guess the aim", "internal validity"],
        },
        {
          point: "Ethics: informed consent / low harm, OR course-credit pressure potentially compromising free right to withdraw",
          keywords: ["informed consent", "withdraw", "course credit", "minimal", "harm"],
        },
      ],
      commonError:
        "Listing G-R-A-V-E headings as one-word labels without tying each point back to '24 American male psychology undergraduates' and '15 numbers in white noise'!",
      difficulty: "challenge",
      guideRef: "ethics-reliability-validity",
      hints: [
        "Look at every clue in the stem: '24' + 'American' + 'male' + 'psychology undergraduates' + 'volunteered for course credit' + '15 numbers in a lab'!",
        "Turn each clue into a contextualised GRAVE point.",
      ],
      strategy: "Mine every stem adjective using GRAVE",
    },
    {
      kind: "written",
      id: "research-methods-ch-q08",
      question:
        "A researcher wants to investigate **dream anxiety during exam season** using **triangulation** (combining a **closed sleep-diary scale** with a **semi-structured interview**). Explain why combining **quantitative and qualitative methods** produces stronger research conclusions than using either method alone. [4 marks]",
      marks: 4,
      modelAnswer:
        "The closed sleep-diary scale collects objective quantitative scores each morning, allowing reliable statistical comparison of mean dream-anxiety trends across weeks with minimal memory distortion. However, numbers alone are reductionist and cannot explain symbolic personal meanings. Adding a semi-structured interview supplies rich qualitative detail into why specific exam fears surface in dream narratives, while cross-checking (triangulating) diary trends against spoken accounts boosts overall validity by offsetting each method's individual weaknesses.",
      markScheme: [
        {
          point: "Quantitative diary benefit: objective numerical scores enable statistical comparison / trends with high reliability",
          keywords: ["quantitative", "objective", "mean", "trend", "statist", "reliab"],
        },
        {
          point: "Identifies limitation of numbers alone (reductionist / lacks personal meaning or context)",
          keywords: ["reductionist", "context", "meaning", "cannot explain why", "lacks depth"],
        },
        {
          point: "Qualitative interview benefit: rich in-depth insight into personal dream feelings/reasons",
          keywords: ["qualitative", "rich", "in-depth", "personal", "narratives", "why"],
        },
        {
          point: "Explains triangulation: cross-checking both data types offsets individual method biases and boosts overall validity",
          keywords: ["cross-check", "offset", "compensat", "overall validity", "both strengths", "complement"],
        },
      ],
      commonError:
        "Describing the diary and interview separately without explaining how TRIANGULATION cross-checks and compensates for each method's weakness.",
      difficulty: "challenge",
      guideRef: "data-analysis-graphs",
      hints: [
        "What can the quantitative daily scale do that interviews cannot?",
        "What can the qualitative interview uncover that a 1–5 number hides — and how do they cross-check each other?",
      ],
      strategy: "Quant strength + Qual strength = Triangulation validity",
    },
    {
      kind: "short",
      id: "research-methods-ch-q09",
      question:
        "In a hospital memory clinic, **40% of patients** have anterograde amnesia and the remaining **60%** have retrograde amnesia. Among anterograde patients, **75%** use digital reminder apps; among retrograde patients, **25%** use digital reminder apps. Out of **200 patients** in total, how many patients across the entire clinic use digital reminder apps?",
      answer: { type: "number", value: 90 },
      traps: [
        {
          spec: { type: "number", value: 100 },
          feedback: "You averaged 75% and 25% to get 50% (100 patients) — weight each percentage by its group size (80 anterograde and 120 retrograde)!",
        },
        {
          spec: { type: "number", value: 45 },
          feedback: "45% is the overall percentage of clinic patients using apps — multiply 45% by 200 patients to get the number of patients!",
        },
      ],
      solution: [
        "Anterograde patients = {{0.40 * 200 = 80}}; app users among them = {{0.75 * 80 = 60}}.",
        "Retrograde patients = {{0.60 * 200 = 120}}; app users among them = {{0.25 * 120 = 30}}.",
        "Total clinic app users = {{60 + 30 = 90}} patients.",
      ],
      difficulty: "challenge",
      guideRef: "data-analysis-graphs",
      hints: [
        "Split the 200 patients into the two amnesia groups first (40% of 200 = 80; 60% of 200 = 120).",
        "Find 75% of 80 and 25% of 120, then add them together!",
      ],
      strategy: "Two-way contingency table breakdown",
    },
  ],
};
