import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "research-methods",
  title: "Topic 7: Research Methods (Experimental, Non-Experimental & Data)",
  strand: "Paper 2: Perception, Development & Non-Experimental",
  icon: "🔬",
  summary:
    "How psychologists design valid experiments, collect ethical non-experimental evidence, and turn raw scores into conclusions.",
  intro:
    "Every claim in psychology stands or falls on **how** it was tested. In Cambridge IGCSE Psychology (0266), Research Methods bridges both exams: **Paper 1** tests experimental design, variables, hypotheses, controls and sampling, while **Paper 2** extends into questionnaires, interviews, observations, case studies, correlations, ethics, reliability, validity, descriptive statistics and graphs. Master operationalisation and evaluation here, and you unlock marks across every single topic.",
  guide: [
    {
      id: "variables-hypotheses-controls",
      heading: "Variables, Operationalisation, Hypotheses & Controls",
      discovery: {
        problem:
          "A student writes: *'My hypothesis is that caffeine improves memory.'* Why would a Cambridge 0266 examiner award **0 out of 2 marks** for this hypothesis — and what exact details are missing?",
        idea:
          "'Caffeine' and 'memory' are vague concepts, not measurable variables! To earn full marks you must **operationalise** both the **Independent Variable (IV)** (e.g. drinking 150 mg of caffeinated coffee vs 150 ml of plain water) and the **Dependent Variable (DV)** (e.g. number of words accurately recalled out of a 20-word list after 2 minutes).",
      },
      body:
        "In an experiment, a researcher manipulates one variable to measure its effect on another while holding everything else constant.\n\n- **Independent Variable (IV)**: the variable the researcher deliberately **manipulates** or changes between conditions.\n- **Dependent Variable (DV)**: the variable the researcher **measures** to see if the IV had an effect.\n- **Operationalisation**: defining variables in exact, measurable, observable units so another researcher could **replicate** the procedure identically.\n\n| Vague Concept ❌ | Operationalised Variable ✅ (CIE 0266 Full Marks) |\n|---|---|\n| Amount of sleep | Sleeping for **4 hours** vs **8 hours** in a sleep laboratory |\n| Memory | Number of **correct words recalled out of 20** in 60 seconds |\n| Helping behaviour | Whether a passer-by **picks up dropped folders within 30 seconds** (Yes/No) |\n| Stress | Self-rated stress score from **1 (calm) to 10 (extremely anxious)** |\n\n**Types of Hypotheses**\n\nA **hypothesis** is a precise, testable prediction stating the expected relationship between the operationalised IV and DV (or co-variables in a correlation):\n\n1. **Directional (One-Tailed) Hypothesis**: predicts the **exact direction** of the difference or relationship — used when previous research or theory already points one way.\n   - *Example*: 'Participants who sleep for 8 hours will recall **significantly more** words out of 20 than participants who sleep for 4 hours.'\n2. **Non-Directional (Two-Tailed) Hypothesis**: predicts there **will be a difference** (or relationship), without stating which group will score higher — used when prior evidence is mixed or absent.\n   - *Example*: 'There will be a **difference** in the number of words recalled out of 20 between participants who sleep for 8 hours and participants who sleep for 4 hours.'\n3. **Null Hypothesis**: predicts there will be **no significant difference** (or relationship), and that any observed difference is due to **chance** alone.\n   - *Example*: 'There will be **no significant difference** in the number of words recalled out of 20 between participants who sleep for 8 hours and those who sleep for 4 hours; any difference is due to chance.'\n\n**Extraneous vs Confounding Variables & Experimental Controls**\n\n- **Extraneous Variable (EV)**: any unwanted nuisance variable (other than the IV) that *could* affect the DV if left uncontrolled. Two main sources are **situational variables** (room noise, temperature, time of day, unclear instructions) and **participant variables** (individual differences in IQ, eyesight, prior knowledge, fatigue).\n- **Confounding Variable**: an extraneous variable that **actually varies systematically with the IV**, making it impossible to tell whether the IV or the confounding variable caused the change in the DV (destroying **internal validity**).\n- **Demand Characteristics**: cues in the study that let participants guess the aim and alter their behaviour — either trying to help (*'please-you'* effect) or sabotage (*'screw-you'* effect).\n- **Investigator (Experimenter) Effects**: unconscious cues from the researcher (tone of voice, smiling, body language, leading prompts) that bias participant performance or data recording.\n\n**How Psychologists Control Unwanted Variables**\n\n- **Standardisation**: keeping instructions, timings, materials and room conditions **identical** for every participant.\n- **Randomisation**: using chance (e.g. lottery draw or random number generator) to order word lists or assign stimuli so researcher bias cannot creep in.\n- **Single-Blind Procedure**: **participants** do not know which condition (e.g. active caffeine vs decaf placebo) they are in — reduces **demand characteristics**.\n- **Double-Blind Procedure**: **neither the participants nor the researcher running the trial** knows who is in which condition (an independent third party codes the conditions) — eliminates both **demand characteristics** and **investigator effects**.",
      diagram: `<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing operationalised Independent Variable causing changes in Dependent Variable while Extraneous Variables are blocked by Controls"><rect x="10" y="10" width="620" height="210" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><rect x="30" y="45" width="175" height="80" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="117" y="70" font-size="13" font-weight="bold" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">Independent Variable (IV)</text><text x="117" y="90" font-size="11" text-anchor="middle" fill="#1e40af" font-family="sans-serif">Manipulated by researcher</text><text x="117" y="108" font-size="10" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">e.g. 150 mg caffeine vs water</text><line x1="205" y1="85" x2="415" y2="85" stroke="#0f172a" stroke-width="2.5"/><polygon points="425,85 412,78 412,92" fill="#0f172a"/><text x="315" y="75" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Cause-and-Effect Link</text><rect x="425" y="45" width="180" height="80" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="515" y="70" font-size="13" font-weight="bold" text-anchor="middle" fill="#14532d" font-family="sans-serif">Dependent Variable (DV)</text><text x="515" y="90" font-size="11" text-anchor="middle" fill="#166534" font-family="sans-serif">Measured outcome</text><text x="515" y="108" font-size="10" text-anchor="middle" fill="#15803d" font-family="sans-serif">e.g. Words recalled / 20</text><rect x="175" y="150" width="280" height="54" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/><text x="315" y="171" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Extraneous &amp; Confounding Threats</text><text x="315" y="190" font-size="10.5" text-anchor="middle" fill="#b91c1c" font-family="sans-serif">Noise · IQ · Demand Characteristics · Investigator Bias</text><line x1="315" y1="150" x2="315" y2="98" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/><rect x="245" y="104" width="140" height="24" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="315" y="120" font-size="10" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">BLOCKED BY CONTROLS</text></svg>`,
      diagramCaption:
        "High internal validity requires isolating the IV → DV causal pathway by blocking extraneous variables through standardisation, randomisation and blinding.",
      workedExamples: [
        {
          title: "Operationalising a Directional Hypothesis (CIE 0266 2-Mark Style)",
          problem:
            "A psychologist investigates whether background music affects revision test performance. Write a fully operationalised **directional** hypothesis for this experiment.",
          steps: [
            "Operationalise the IV into two clear conditions: studying in **silence** vs studying with **70 dB pop music playing**.",
            "Operationalise the DV as an exact score: **score out of 25** on a 15-minute comprehension test.",
            "Choose directional wording ('higher' / 'fewer' / 'more') rather than just 'a difference'.",
          ],
          answer:
            "Participants who revise in silence will achieve a significantly higher score out of 25 on a 15-minute comprehension test than participants who revise while 70 dB pop music is playing.",
          yourTurn: {
            question:
              "Your turn: What procedure prevents **both** participants and the researcher conducting the session from knowing who received the active treatment vs the placebo?",
            answer: {
              type: "text",
              accept: [
                "double-blind",
                "double blind",
                "double-blind procedure",
                "double blind procedure",
                "double-blind technique",
              ],
              display: "double-blind procedure",
            },
            solution:
              "A **double-blind procedure** keeps both participants and the experimenter blind to condition allocation, removing both demand characteristics and investigator effects.",
          },
        },
      ],
      keyPoints: [
        "IV = manipulated; DV = measured; operationalise both in concrete, replicable units.",
        "Directional = states which group scores higher/lower; Non-directional = states 'a difference'; Null = 'no significant difference' (any difference is due to chance).",
        "Extraneous variables *could* muddy the DV; confounding variables *systematically vary* with the IV and ruin internal validity.",
        "Single-blind curbs demand characteristics; double-blind curbs both demand characteristics and investigator effects.",
      ],
      whyItWorks:
        "Science relies on **falsifiability** and **replicability**. Operationalising variables turns fuzzy everyday words ('better memory', 'more helpful') into exact numbers that an independent lab in Singapore or London can test and verify.",
      strategies: [
        "Name BOTH conditions of the IV and exact units of the DV in every hypothesis",
        "Never use 'will cause' or 'prove' in a hypothesis — state observable differences in the DV",
      ],
      thinkDeeper:
        "Why is it impossible to use a double-blind procedure in a study comparing 4 hours of sleep vs 8 hours of sleep, even though it works brilliantly in a caffeine vs decaf pill study?",
    },
    {
      id: "experiments-designs-sampling",
      heading: "Experimental Methods, Designs & Sampling (Paper 1 Core)",
      discovery: {
        problem:
          "Dr Tan tests memory in the morning with Condition A (no music) and tests the **same** 30 students in the afternoon with Condition B (classical music). They score lower in Condition B. Can Dr Tan conclude classical music harms memory?",
        idea:
          "No! Because everyone did Condition A first and Condition B second, **order effects** (afternoon fatigue or boredom) are confounded with the music condition. Splitting the sample in half for **ABBA counterbalancing** (Half do A→B, Half do B→A) balances order effects equally across both conditions.",
      },
      body:
        "**Three Types of Experiments**\n\n| Experiment Type | Setting | Who manipulates the IV? | Key Strength | Key Limitation |\n|---|---|---|---|---|\n| **Laboratory Experiment** | Artificial, tightly controlled environment | Researcher directly manipulates IV | High **internal validity** & easy **standardisation/replication** (establishes cause & effect) | Low **ecological validity** / low **mundane realism**; higher risk of **demand characteristics** |\n| **Field Experiment** | Real-world natural setting (e.g. subway, street, school) | Researcher directly manipulates IV | Higher **ecological validity** & natural behaviour (participants often unaware → fewer demand characteristics) | Less control over **extraneous situational variables** (weather, crowd noise); ethical issues with **informed consent** |\n| **Natural / Quasi Experiment** | Controlled or real-world setting | **Not manipulated** by researcher — IV varies naturally (e.g. age, brain injury H.M., before/after TV introduction) | Allows study of variables that are **unethical or impossible** to manipulate | **No random allocation** to conditions → participant confounding variables mean we **cannot be certain of cause and effect** |\n\n**Experimental Designs (How Participants Are Allocated to Conditions)**\n\n- **Independent Measures Design (Independent Groups)**: **Different** participants are allocated to each condition of the IV (ideally via **random allocation**).\n  - *Strength*: **No order effects** (no practice or fatigue), and participants are less likely to guess the aim (fewer demand characteristics).\n  - *Limitation*: **Participant variables** (e.g. one group happens by chance to have better memory) may act as confounding variables; requires **twice as many participants**.\n- **Repeated Measures Design**: The **same** participants take part in **every** condition of the IV.\n  - *Strength*: **Eliminates participant variables** completely (each person acts as their own baseline) and needs **half as many participants**.\n  - *Limitation*: Vulnerable to **order effects** (improvement from **practice** or decline from **fatigue/boredom**) and **demand characteristics** (seeing both conditions reveals the aim). Controlled using **counterbalancing (AB/BA)** and **matched equivalent word lists**.\n- **Matched Pairs Design**: Different participants are used in each condition, but they are **pre-tested and paired up** on key variables relevant to the DV (e.g. IQ, age, baseline memory score — or monozygotic twins!), with one member of each pair randomly assigned to Condition A and the other to Condition B.\n  - *Strength*: **No order effects**, while substantially **reducing participant variables**.\n  - *Limitation*: Pre-testing is **time-consuming and expensive**, matching is **never 100% identical**, and if one twin/partner drops out, the whole pair's data is lost.\n\n**Sampling Techniques & Target Populations**\n\nThe **target population** is the entire group of people a researcher wants to generalise findings to (e.g. *all Year 11 students in Singapore*). Because testing everyone is impractical, psychologists select a **sample**:\n\n1. **Random Sampling**: Every member of the target population has an **equal chance** of being selected (e.g. assigning numbers to every person on a complete register and drawing via a random number generator).\n   - *Evaluation*: Free from **researcher bias**, so likely representative (though a small random sample can still produce a freak unrepresentative draw by chance; requires a complete sampling frame, and selected people may refuse).\n2. **Opportunity Sampling**: Selecting whoever is **readily available and willing** at the time (e.g. approaching students sitting in the school canteen).\n   - *Evaluation*: Quick, cheap and convenient, **but** highly prone to **researcher bias** (avoiding certain people) and **unrepresentative** of the wider target population (low **population validity**).\n3. **Volunteer (Self-Selecting) Sampling**: Participants **select themselves** by responding to an advert, poster or social-media post.\n   - *Evaluation*: Easy to recruit engaged participants and ethically sound, **but** suffers from **volunteer bias** (volunteers tend to be more cooperative, inquisitive or have more free time than non-volunteers).\n4. **Stratified Sampling**: Identifying **subgroups (strata)** within the target population (e.g. 60% female, 40% male), calculating the **exact proportion** of each stratum, and **randomly selecting** that exact percentage from each subgroup.\n   - *Evaluation*: The **most representative** method (guarantees proportional representation of key strata → high generalisability), **but** time-consuming and cannot reflect every human characteristic.\n5. **Systematic Sampling**: Selecting every ***n*th person** from an ordered list of the target population (e.g. every 10th name on a school roll of 500 to get a sample of 50).\n   - *Evaluation*: Objective (removes researcher choice bias), **but** can be biased if the list has a hidden periodic pattern.",
      diagram: `<svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Independent Measures, Repeated Measures with ABBA Counterbalancing, and Matched Pairs experimental designs"><rect x="10" y="10" width="620" height="225" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><rect x="24" y="26" width="186" height="192" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.6"/><text x="117" y="48" font-size="12.5" font-weight="bold" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">Independent Measures</text><rect x="44" y="64" width="146" height="32" rx="6" fill="#dbeafe"/><text x="117" y="84" font-size="11" text-anchor="middle" fill="#1e40af" font-family="sans-serif">Sample (N = 20)</text><text x="75" y="122" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">Group 1 (n=10)</text><text x="158" y="122" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">Group 2 (n=10)</text><rect x="36" y="132" width="78" height="36" rx="6" fill="#bfdbfe"/><text x="75" y="154" font-size="10" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">Cond. A Only</text><rect x="120" y="132" width="78" height="36" rx="6" fill="#93c5fd"/><text x="159" y="154" font-size="10" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">Cond. B Only</text><text x="117" y="196" font-size="9.5" text-anchor="middle" fill="#334155" font-family="sans-serif">✔ No order effects</text><text x="117" y="210" font-size="9.5" text-anchor="middle" fill="#b91c1c" font-family="sans-serif">✘ Participant variables</text><rect x="227" y="26" width="186" height="192" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.6"/><text x="320" y="48" font-size="12.5" font-weight="bold" text-anchor="middle" fill="#14532d" font-family="sans-serif">Repeated + AB/BA</text><rect x="247" y="64" width="146" height="32" rx="6" fill="#dcfce7"/><text x="320" y="84" font-size="11" text-anchor="middle" fill="#166534" font-family="sans-serif">Same Sample (N = 10)</text><rect x="240" y="112" width="160" height="26" rx="5" fill="#bbf7d0"/><text x="320" y="129" font-size="10" text-anchor="middle" fill="#14532d" font-family="sans-serif">Half (n=5): Cond. A → Cond. B</text><rect x="240" y="144" width="160" height="26" rx="5" fill="#86efac"/><text x="320" y="161" font-size="10" text-anchor="middle" fill="#14532d" font-family="sans-serif">Half (n=5): Cond. B → Cond. A</text><text x="320" y="196" font-size="9.5" text-anchor="middle" fill="#166534" font-family="sans-serif">✔ Zero participant diffs</text><text x="320" y="210" font-size="9.5" text-anchor="middle" fill="#b91c1c" font-family="sans-serif">✘ Order effects (use AB/BA)</text><rect x="430" y="26" width="186" height="192" rx="10" fill="#faf5ff" stroke="#9333ea" stroke-width="1.6"/><text x="523" y="48" font-size="12.5" font-weight="bold" text-anchor="middle" fill="#581c87" font-family="sans-serif">Matched Pairs</text><rect x="450" y="64" width="146" height="32" rx="6" fill="#f3e8ff"/><text x="523" y="84" font-size="10.5" text-anchor="middle" fill="#6b21a8" font-family="sans-serif">Pair on Pre-Test (IQ/Age)</text><rect x="444" y="116" width="72" height="48" rx="6" fill="#e9d5ff"/><text x="480" y="138" font-size="10" text-anchor="middle" fill="#581c87" font-family="sans-serif">Twin 1s</text><text x="480" y="153" font-size="9.5" text-anchor="middle" fill="#6b21a8" font-family="sans-serif">→ Cond. A</text><rect x="530" y="116" width="72" height="48" rx="6" fill="#d8b4fe"/><text x="566" y="138" font-size="10" text-anchor="middle" fill="#581c87" font-family="sans-serif">Twin 2s</text><text x="566" y="153" font-size="9.5" text-anchor="middle" fill="#6b21a8" font-family="sans-serif">→ Cond. B</text><text x="523" y="196" font-size="9.5" text-anchor="middle" fill="#581c87" font-family="sans-serif">✔ No order + low p-vars</text><text x="523" y="210" font-size="9.5" text-anchor="middle" fill="#b91c1c" font-family="sans-serif">✘ Slow &amp; imperfect match</text></svg>`,
      diagramCaption:
        "Choosing an experimental design is a trade-off between participant variables (Independent Measures) and order effects (Repeated Measures).",
      workedExamples: [
        {
          title: "Calculating a Stratified Sample",
          problem:
            "A sixth-form college has **400 students** in total: **240 study Arts** and **160 study Sciences**. A researcher wants a **stratified sample of 50 students**. How many Science students must be randomly selected?",
          steps: [
            "Find the proportion of Science students in the target population: {{160 / 400 = 0.4}} (or 40%).",
            "Multiply that proportion by the desired total sample size (50): {{0.4 * 50 = 20}}.",
            "Randomly select 20 students from the list of 160 Science students (and 30 from Arts).",
          ],
          answer: "20 Science students (randomly selected from the Science stratum)",
          yourTurn: {
            question:
              "Your turn: A hospital ward has 120 nurses and 80 doctors (200 staff in total). For a stratified sample of 40 staff, how many **doctors** should be randomly chosen?",
            answer: { type: "number", value: 16 },
            solution:
              "Doctors make up 80 ÷ 200 = 0.4 (40%) of the staff. 0.4 × 40 = 16 doctors.",
          },
        },
      ],
      keyPoints: [
        "Lab = high control/internal validity, low ecological validity; Field = natural setting + researcher manipulates IV; Natural = naturally occurring IV, no random allocation.",
        "Counterbalancing (Half A→B, Half B→A) does NOT prevent order effects — it distributes them equally across both conditions so they do not skew the mean comparison.",
        "Random allocation ≠ Random sampling! Random **sampling** selects participants from the target population; random **allocation** assigns already-recruited participants to experimental conditions.",
        "Stratified sampling = proportional representation of strata + random selection within each stratum.",
      ],
      whyItWorks:
        "Counterbalancing works algebraically: if fatigue lowers every participant's second test by 3 points, half the sample loses 3 points on Condition B and the other half loses 3 points on Condition A — cancelling the fatigue bias out of the condition means!",
      strategies: [
        "Distinguish random sampling (population → sample) from random allocation (sample → Condition A/B)",
        "Show both proportion and random selection when explaining stratified sampling",
      ],
      thinkDeeper:
        "Piliavin et al.'s (1969) New York subway study took place on real trains, yet researchers staged whether the confederate carried a cane or smelled of alcohol. Why is it classified as a **field experiment** rather than a **naturalistic observation** or **natural experiment**?",
    },
    {
      id: "non-experimental-methods",
      heading: "Questionnaires, Interviews, Observations, Case Studies & Correlations (Paper 2 Core)",
      discovery: {
        problem:
          "A newspaper headline screams: *'Ice-cream sales strongly correlate with shark attacks — eating ice cream attracts sharks!'* What hidden third variable explains both, and what golden rule of CIE 0266 Paper 2 did the journalist break?",
        idea:
          "Hot summer weather (**an intervening third variable**) independently drives more people to buy ice cream *and* swim in the ocean! **Correlation measures the strength and direction of a relationship between two co-variables — it NEVER proves cause and effect** because no IV is manipulated or controlled.",
      },
      body:
        "When manipulating an IV is unethical or impossible, psychologists turn to **non-experimental methods**.\n\n**1. Self-Report Methods: Questionnaires & Interviews**\n\n- **Questionnaires**: written sets of questions completed by respondents.\n  - **Closed questions** (fixed choices: Yes/No, multiple choice, or **Likert / rating scales** e.g. 1 = Strongly Disagree to 5 = Strongly Agree) produce **quantitative data** that is objective and fast to compare statistically, *but* force oversimplified answers lacking depth.\n  - **Open questions** (*'Describe how you felt before your exam...'*) produce rich **qualitative data** with unexpected insights, *but* are hard to summarise numerically and open to researcher interpretation bias.\n- **Interviews**: live spoken self-reports.\n  - **Structured interview**: fixed, pre-set questions asked in the **exact same order** for every interviewee → high **reliability** and easy comparison, *but* cannot probe interesting new leads.\n  - **Unstructured interview**: informal conversation guided by broad themes where follow-up questions adapt to answers → rich **qualitative validity** and rapport, *but* low reliability and high risk of **interviewer bias**.\n  - **Semi-structured interview**: core set of standardised questions plus freedom to ask follow-up probes.\n- **Key Self-Report Pitfalls**: **Social desirability bias** (lying to look kind, healthy or law-abiding), **acquiescence bias** ('yea-saying' — agreeing with everything), and **leading/ambiguous questions**.\n\n**2. Observational Methods**\n\nWatching and recording what people actually *do* rather than what they *say* they do:\n\n| Dimension | Option A | Option B |\n|---|---|---|\n| **Setting** | **Naturalistic**: everyday environment with zero interference (high ecological validity, low control) | **Controlled**: structured room/lab (e.g. Ainsworth's Strange Situation — replicable, less natural) |\n| **Awareness** | **Covert**: hidden observer/one-way mirror (no demand characteristics / Hawthorne effect, *but* ethical privacy & consent issues) | **Overt**: participants know they are watched (ethically transparent, *but* triggers socially desirable acting) |\n| **Role** | **Participant**: observer joins the group (deep insider insight, *but* risks losing objectivity) | **Non-Participant**: observer watches from a distance (objective, *but* may miss social context) |\n\n- **Structured Observations** break target behaviour into **operationalised behavioural categories** (observable, mutually exclusive actions like *'smiles for >2s'*, *'hands toy to peer'* — NOT vague states like *'looks friendly'*).\n- **Event Sampling**: counting **every single time** a target behaviour occurs during the observation period (best for **infrequent** behaviours, though fast overlapping events can be missed).\n- **Time Sampling**: recording behaviour only at **fixed intervals** (e.g. every 30 seconds on a tally grid — manageable in busy settings, *but* misses behaviours occurring between intervals).\n\n**3. Case Studies**\n\nAn **in-depth, detailed investigation** of a single individual, small group, institution or rare event (often **longitudinal** over years), combining interviews, psychometric tests, brain scans and observations (triangulation) — e.g. **Milner et al. (1968)** on amnesic patient **H.M.**\n- *Strengths*: Rich, holistic **qualitative and quantitative** insight into rare conditions that could never ethically be induced experimentally; can **falsify** universal theories (H.M. proved STM and LTM are separate!).\n- *Limitations*: Sample of $n = 1$ is unique → **cannot generalise** safely to the wider population; reliance on retrospective memories can be inaccurate; researcher may become emotionally attached (**subjective bias**).\n\n**4. Correlations**\n\nA mathematical technique measuring the **direction and strength of association** between **two continuous co-variables** (e.g. hours of revision and exam score — note: there is **no IV and no DV**, only **Co-variable 1** and **Co-variable 2**!), plotted on a **scattergraph**:\n\n- **Positive Correlation**: as Co-variable X increases, Co-variable Y **also increases** (upward-sloping cluster).\n- **Negative Correlation**: as Co-variable X increases, Co-variable Y **decreases** (downward-sloping cluster — still a **strong relationship**, NOT 'no relationship'!).\n- **Zero (No) Correlation**: points scatter randomly like a cloud — **no relationship** between the co-variables.\n- **Crucial Evaluation**: Useful when manipulation is unethical and can spark future experiments, **but correlation NEVER establishes cause and effect** due to **directionality problems** (does X cause Y, or Y cause X?) and **third-variable problems**.",
      diagram: `<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three scattergraphs illustrating positive correlation, negative correlation, and zero correlation between two co-variables"><rect x="10" y="10" width="620" height="195" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><g transform="translate(35,28)"><text x="80" y="12" font-size="12" font-weight="bold" text-anchor="middle" fill="#166534" font-family="sans-serif">Positive Correlation</text><line x1="20" y1="145" x2="155" y2="145" stroke="#334155" stroke-width="2"/><line x1="20" y1="145" x2="20" y2="25" stroke="#334155" stroke-width="2"/><line x1="30" y1="132" x2="145" y2="36" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,3"/><g fill="#16a34a"><circle cx="34" cy="128" r="4"/><circle cx="48" cy="118" r="4"/><circle cx="60" cy="102" r="4"/><circle cx="76" cy="96" r="4"/><circle cx="92" cy="78" r="4"/><circle cx="108" cy="68" r="4"/><circle cx="124" cy="52" r="4"/><circle cx="140" cy="40" r="4"/></g><text x="88" y="164" font-size="10" text-anchor="middle" fill="#475569" font-family="sans-serif">As X rises, Y rises ↗</text></g><g transform="translate(240,28)"><text x="80" y="12" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e40af" font-family="sans-serif">Negative Correlation</text><line x1="20" y1="145" x2="155" y2="145" stroke="#334155" stroke-width="2"/><line x1="20" y1="145" x2="20" y2="25" stroke="#334155" stroke-width="2"/><line x1="30" y1="36" x2="145" y2="132" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="4,3"/><g fill="#2563eb"><circle cx="34" cy="40" r="4"/><circle cx="50" cy="55" r="4"/><circle cx="64" cy="64" r="4"/><circle cx="80" cy="82" r="4"/><circle cx="96" cy="94" r="4"/><circle cx="112" cy="108" r="4"/><circle cx="128" cy="118" r="4"/><circle cx="142" cy="130" r="4"/></g><text x="88" y="164" font-size="10" text-anchor="middle" fill="#475569" font-family="sans-serif">As X rises, Y falls ↘</text></g><g transform="translate(445,28)"><text x="80" y="12" font-size="12" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">Zero Correlation</text><line x1="20" y1="145" x2="155" y2="145" stroke="#334155" stroke-width="2"/><line x1="20" y1="145" x2="20" y2="25" stroke="#334155" stroke-width="2"/><g fill="#64748b"><circle cx="36" cy="50" r="4"/><circle cx="52" cy="126" r="4"/><circle cx="68" cy="82" r="4"/><circle cx="84" cy="42" r="4"/><circle cx="96" cy="130" r="4"/><circle cx="114" cy="74" r="4"/><circle cx="132" cy="115" r="4"/><circle cx="142" cy="54" r="4"/></g><text x="88" y="164" font-size="10" text-anchor="middle" fill="#475569" font-family="sans-serif">Random cloud (no link)</text></g></svg>`,
      diagramCaption:
        "Each dot on a scattergraph represents ONE participant's pair of scores (Co-variable X, Co-variable Y). Both positive and negative correlations can be equally strong!",
      workedExamples: [
        {
          title: "Writing Operationalised Behavioural Categories",
          problem:
            "A student wants to conduct a playground observation of 'aggression' in 6-year-olds. Explain why 'being aggressive' is a poor checklist item and suggest **two** operationalised behavioural categories.",
          steps: [
            "'Being aggressive' is subjective — two observers might disagree on whether rough-and-tumble play counts, lowering **inter-observer reliability**.",
            "Replace the vague label with concrete, visible physical or verbal actions that require zero mind-reading.",
          ],
          answer:
            "Category 1: Pushing, hitting or kicking another child. Category 2: Shouting an insult or snatching a toy from another child's hand.",
          yourTurn: {
            question:
              "Your turn: As daily screen time before bed (minutes) **increases**, total nightly sleep duration (hours) **decreases**. What type of correlation is this?",
            answer: {
              type: "text",
              accept: ["negative correlation", "negative"],
              display: "negative correlation",
            },
            solution:
              "When one co-variable increases as the other co-variable decreases, it is a **negative correlation**.",
          },
        },
      ],
      keyPoints: [
        "Closed questions = quantitative, reliable, easy to graph, lacks depth; Open questions = qualitative, rich detail, hard to analyse statistically.",
        "Event sampling counts every occurrence; time sampling records what happens at fixed time intervals.",
        "Correlations use **co-variables** (never write IV/DV in a correlation!) and **cannot prove causation**.",
        "A **negative correlation** is a genuine inverse relationship — never confuse it with **zero correlation**!",
      ],
      whyItWorks:
        "Triangulating methods balances their blind spots: self-reports access private thoughts that observations cannot see, while covert observations capture real behaviour uncorrupted by social desirability lies.",
      strategies: [
        "Check whether an IV is manipulated: if yes → experiment; if two measured variables → correlation",
        "Make behavioural categories observable, objective, and non-overlapping",
      ],
      thinkDeeper:
        "If two observers sit side-by-side watching the same 20-minute playground video using the same tally sheet, how could we test mathematically whether their behavioural categories are reliable?",
    },
    {
      id: "ethics-reliability-validity",
      heading: "Ethics, Reliability & Validity",
      discovery: {
        problem:
          "Your bathroom scales read **68.0 kg** every single time you step on them five times in a row — even though your true mass on calibrated hospital scales is **62.0 kg**. Are your bathroom scales **reliable**, **valid**, both, or neither?",
        idea:
          "They are **highly reliable** (consistent every time!) **but NOT valid** (off by 6 kg from the truth!). In psychology, **reliability = consistency** of a measure, whereas **validity = accuracy/truthfulness** — whether you are genuinely measuring what you claim to measure.",
      },
      body:
        "**Ethical Guidelines in Psychological Research (Remember `DRIP` + `CC`)**\n\nPsychologists have a duty of care to protect participants' dignity and welfare:\n\n- **Deception (`D`)**: Deliberately misleading participants or withholding information about the true aim. Avoid unless scientifically essential (to prevent demand characteristics) *and* harmless; resolve immediately via a **full debrief**.\n- **Right to Withdraw (`R`)**: Participants must know from the start (and throughout) that they can **leave the study at any time** — and **withdraw their data afterwards** — without penalty or loss of promised reward.\n- **Informed Consent (`I`)**: Participants must be given clear information about the procedure, duration and potential risks *before* agreeing to take part (for **under-16s**, **parental/guardian consent** plus child assent is required). Workarounds when full disclosure would ruin the study include **presumptive consent** (asking a similar peer group if they would find it acceptable) or **prior general consent**.\n- **Protection from Harm (`P`)**: Participants must be protected from both **physical and psychological harm** (stress, humiliation, guilt) — risk should be **no greater than in everyday life**.\n- **Confidentiality (`C`)**: Personal data must remain **anonymous** — use participant numbers or initials (e.g. *'H.M.'*), never publish real names or identifiable details.\n- **Privacy**: Respecting personal space — do not observe people covertly in private settings (bedrooms, changing rooms); covert observation is only acceptable in **public places** where people already expect to be seen by strangers.\n- **Debriefing**: After the study finishes, explain the **true aim**, reveal any deception/confederates, answer questions, offer counselling/reassurance to restore participants to their **pre-study psychological state**, and remind them of their **right to withdraw data**.\n\n**Reliability (Consistency & Replicability)**\n\nA method or measure is **reliable** if repeating it under the same conditions yields **consistent, similar results**:\n- **Test-Retest Reliability** (for questionnaires/tests): give the **same test** to the **same participants** on two separate occasions; if the two sets of scores show a strong positive correlation (e.g. $\\ge +0.80$), it is reliable. *Fix*: rewrite ambiguous questions into clear closed items.\n- **Inter-Observer / Inter-Rater Reliability** (for observations/interviews): **two or more independent observers** watch the **same event simultaneously** using the same checklist, then correlate their tallies. *Fix*: operationalise behavioural categories more precisely and train observers together.\n\n**Validity (Accuracy & Legitimacy — Remember `GRAVE` for Study Evaluation!)**\n\n- **Internal Validity**: Did the **IV genuinely cause** the change in the DV, or did confounding variables / demand characteristics hijack the result?\n- **Ecological Validity** (External): Do findings generalise from the research setting to **everyday real-world environments** (mundane realism of the task and setting)?\n- **Population Validity** (Generalisability): Does the **sample** accurately represent the wider **target population** across age, gender and culture (e.g. avoiding ethnocentric WEIRD samples)?\n- **Temporal Validity**: Do findings from decades ago (e.g. 1960s studies) still hold true in modern society?\n\n| Mnemonic `GRAVE` | Evaluation Question to Ask Every CIE 0266 Study |\n|---|---|\n| **G** — Generalisability | How large, diverse and representative was the sample of the target population? |\n| **R** — Reliability | Were instructions, timings and behavioural categories standardised so others can replicate it? |\n| **A** — Application | How does this finding help real life (schools, hospitals, therapy, policing)? |\n| **V** — Validity | Internal (any confounds/demand characteristics?) & Ecological (artificial task or real life?) |\n| **E** — Ethics | Were DRIP + Confidentiality + Privacy upheld, and was deception justified by a debrief? |",
      diagram: `<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three dartboards comparing Reliable but Invalid, Unreliable and Invalid, and Both Reliable and Valid measurements"><rect x="10" y="10" width="620" height="190" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><g transform="translate(115,95)"><circle cx="0" cy="0" r="62" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/><circle cx="0" cy="0" r="40" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/><circle cx="0" cy="0" r="18" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/><circle cx="0" cy="0" r="5" fill="#dc2626"/><g fill="#1e3a8a"><circle cx="34" cy="-32" r="4.5"/><circle cx="40" cy="-28" r="4.5"/><circle cx="36" cy="-24" r="4.5"/><circle cx="30" cy="-27" r="4.5"/></g><text x="0" y="82" font-size="11.5" font-weight="bold" text-anchor="middle" fill="#1e293b" font-family="sans-serif">Reliable, NOT Valid</text><text x="0" y="96" font-size="9.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">Consistent cluster, off-target</text></g><g transform="translate(320,95)"><circle cx="0" cy="0" r="62" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/><circle cx="0" cy="0" r="40" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/><circle cx="0" cy="0" r="18" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/><circle cx="0" cy="0" r="5" fill="#dc2626"/><g fill="#1e3a8a"><circle cx="-42" cy="-26" r="4.5"/><circle cx="38" cy="30" r="4.5"/><circle cx="-18" cy="44" r="4.5"/><circle cx="28" cy="-38" r="4.5"/></g><text x="0" y="82" font-size="11.5" font-weight="bold" text-anchor="middle" fill="#1e293b" font-family="sans-serif">Neither Reliable nor Valid</text><text x="0" y="96" font-size="9.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">Scattered &amp; inaccurate</text></g><g transform="translate(525,95)"><circle cx="0" cy="0" r="62" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><circle cx="0" cy="0" r="40" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/><circle cx="0" cy="0" r="18" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/><circle cx="0" cy="0" r="5" fill="#15803d"/><g fill="#14532d"><circle cx="-5" cy="-4" r="4.5"/><circle cx="6" cy="-3" r="4.5"/><circle cx="2" cy="6" r="4.5"/><circle cx="-4" cy="5" r="4.5"/></g><text x="0" y="82" font-size="11.5" font-weight="bold" text-anchor="middle" fill="#14532d" font-family="sans-serif">Reliable AND Valid</text><text x="0" y="96" font-size="9.5" text-anchor="middle" fill="#166534" font-family="sans-serif">Tight cluster on the bullseye</text></g></svg>`,
      diagramCaption:
        "Dartboard analogy: Reliability is how tightly clustered repeated measurements are; Validity is whether they hit the true target construct.",
      workedExamples: [
        {
          title: "Resolving Ethical Issues in a Field Study (CIE 0266 4-Mark Style)",
          problem:
            "In a subway helping study, commuters do not know a collapsed passenger is an actor. Identify **two** ethical issues raised and explain how researchers can deal with them.",
          steps: [
            "Issue 1: **Lack of informed consent / Deception** — commuters were misled into thinking an emergency was real and could not consent beforehand without ruining natural helping behaviour.",
            "Deal with Issue 1: Seek **presumptive consent** from a similar sample of commuters beforehand and get ethical committee approval.",
            "Issue 2: **Psychological harm (distress/guilt)** — witnessing an emergency may cause anxiety, and commuters cannot easily exit a moving carriage (**right to withdraw**).",
            "Deal with Issue 2: Keep trials brief (under 2 minutes), use only non-threatening scenarios, and maintain strict **anonymity/confidentiality** by recording zero names or faces.",
          ],
          answer:
            "1) Deception / lack of informed consent: gain presumptive consent from a comparable group beforehand and debrief where feasible. 2) Protection from psychological harm / confidentiality: keep the staged collapse brief so distress stays within everyday levels, and record only anonymous tallies without identifying commuters.",
          yourTurn: {
            question:
              "Your turn: Two observers simultaneously watch the same nursery class using the same tally sheet and compare their scores to check consistency. What specific type of **reliability** are they assessing?",
            answer: {
              type: "text",
              accept: [
                "inter-observer reliability",
                "inter observer reliability",
                "inter-rater reliability",
                "inter rater reliability",
              ],
              display: "inter-observer reliability",
            },
            solution:
              "Comparing independent observers' ratings of the exact same behaviour checks **inter-observer (inter-rater) reliability**.",
          },
        },
      ],
      keyPoints: [
        "Ethics `DRIP`: Deception, Right to withdraw, Informed consent (parental if <16), Protection from harm — plus Confidentiality, Privacy & Debriefing.",
        "Debriefing happens *after* a study so it **does not prevent** ethical breaches during the procedure — it mitigates harm and restores participants afterwards.",
        "Reliability = consistency (test-retest, inter-observer); Validity = accuracy (internal = free of confounds, ecological = real-world realism, population = generalisable sample).",
        "A measure can be **reliable without being valid**, but an unreliable random measure can **never** be valid!",
      ],
      whyItWorks:
        "Ethical guidelines protect public trust in psychology while cost-benefit committees allow carefully controlled deception when the societal insight outweighs minimal, everyday-level discomfort.",
      strategies: [
        "Use GRAVE to generate 4–5 distinct evaluation paragraphs on any extended essay",
        "Always explain WHY a small or opportunity sample hurts population validity (who is missing and why they might behave differently!)",
      ],
      thinkDeeper:
        "Why do examiners deduct marks if a student writes *'Giving a debrief at the end gives participants informed consent'*? What is the crucial difference between retrospective permission to use data and informed consent?",
    },
    {
      id: "data-analysis-graphs",
      heading: "Quantitative vs Qualitative Data, Descriptive Statistics & Graphs",
      discovery: {
        problem:
          "Seven participants complete a reaction-time task in milliseconds: **310, 315, 320, 320, 325, 330, 1,980** (Participant 7 sneezed and dropped the mouse!). Calculate the **mean** and the **median** — which average fairly represents typical reaction speed here?",
        idea:
          "The **mean** is {{(310 + 315 + 320 + 320 + 325 + 330 + 1980) / 7 = 3900 / 7 = 557.1}} ms — higher than *six out of seven* people! The **median** (4th ordered value) stays rock-steady at **320 ms**. Whenever an **extreme outlier** skews a dataset, choose the **median** over the mean!",
      },
      body:
        "**Types of Data**\n\n- **Quantitative Data**: numerical data (scores, reaction times, tallies, percentages) → objective, high reliability, easy to summarise statistically and graph, *but* strips away personal meaning and context (**reductionist**).\n- **Qualitative Data**: non-numerical descriptive words (interview transcripts, diary entries, open-question quotes) → rich, detailed **validity** into *why* people think or feel as they do, *but* time-consuming to analyse and vulnerable to **subjective researcher bias**.\n- **Primary Data**: collected **first-hand** by the researcher specifically for the current aim (tailored directly to the hypothesis, *but* costly and slow to gather).\n- **Secondary Data**: pre-existing data collected earlier by **someone else** — e.g. government crime records, hospital archives, or a **meta-analysis** combining dozens of published studies (fast, cheap and large-scale, *but* definitions or quality controls may not exactly match the researcher's aim).\n\n**Descriptive Statistics: Measures of Central Tendency & Dispersion**\n\n| Measure | How to Calculate | Best Used When… | Key Pitfall / Limitation |\n|---|---|---|---|\n| **Mean** | Add all scores together and divide by total number of scores ($N$) | Interval/ratio data with **no extreme outliers** — uses *every* score in the dataset | **Heavily distorted by outliers** (anomalous extreme values pull the mean away from typical scores) |\n| **Median** | Sort scores **lowest to highest** and find the **middle value** (if $N$ is even, mean of the two middle values) | Ordinal/numerical data **with extreme outliers** or skewed distributions | Ignores exact magnitudes of higher/lower scores; **forgetting to put numbers in order first!** |\n| **Mode** | The **most frequently occurring** value or category (can be bimodal if two tie) | **Nominal / categorical data** (e.g. favourite sleep position) | Crude; small datasets may have **no mode** or multiple modes |\n| **Range** (Dispersion) | **Highest score − Lowest score** | Quick measure of **spread / consistency** around the average | Uses **only the two extreme values** — one outlier inflates the entire range! |\n\n- **Percentages & Ratios**:\n  - Percentage of total: {{(\"part\" / \"total\") * 100}}.\n  - Percentage change: {{((\"new\" - \"original\") / \"original\") * 100}}.\n  - Ratio: compare group counts in the **exact order asked** and divide both sides by their highest common factor (e.g. 24 helpers : 16 non-helpers = **3 : 2**).\n\n**Choosing & Reading CIE 0266 Tables and Graphs**\n\n1. **Summary / Frequency Tables**: Display condition means and ranges clearly (never dump raw individual participant tables in a summary report without totals/averages).\n2. **Bar Chart**: Used for **discrete / categorical data** (e.g. mean words recalled in *Silence* vs *Pop Music*, or counts of helping across cities). Bars MUST have **equal gaps between them**, with categories on the x-axis and frequency/mean on the y-axis.\n3. **Histogram**: Used for **continuous numerical data grouped into class intervals** (e.g. reaction times `200–299 ms`, `300–399 ms`, `400–499 ms`). Bars **touch with NO gaps** because the x-axis scale is continuous!\n4. **Scattergraph**: Used ONLY for **correlations** between **two continuous co-variables** (one co-variable on x-axis, the other on y-axis; one plotted point per participant; never connect dots dot-to-dot — draw a single **line of best fit** if clear).",
      diagram: `<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side comparison of a Bar Chart with gaps for discrete categories versus a Histogram with touching bars for continuous intervals"><rect x="10" y="10" width="620" height="195" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><g transform="translate(45,28)"><text x="115" y="12" font-size="12.5" font-weight="bold" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">Bar Chart (Discrete Categories)</text><line x1="30" y1="142" x2="225" y2="142" stroke="#334155" stroke-width="2"/><line x1="30" y1="142" x2="30" y2="26" stroke="#334155" stroke-width="2"/><rect x="48" y="54" width="38" height="88" fill="#60a5fa" stroke="#1d4ed8"/><rect x="108" y="88" width="38" height="54" fill="#60a5fa" stroke="#1d4ed8"/><rect x="168" y="70" width="38" height="72" fill="#60a5fa" stroke="#1d4ed8"/><text x="67" y="156" font-size="9.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Silence</text><text x="127" y="156" font-size="9.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Lyrics</text><text x="187" y="156" font-size="9.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Classical</text><text x="127" y="172" font-size="10" font-weight="bold" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">✔ Equal GAPS between bars</text></g><g transform="translate(355,28)"><text x="115" y="12" font-size="12.5" font-weight="bold" text-anchor="middle" fill="#7c2d12" font-family="sans-serif">Histogram (Continuous Intervals)</text><line x1="30" y1="142" x2="225" y2="142" stroke="#334155" stroke-width="2"/><line x1="30" y1="142" x2="30" y2="26" stroke="#334155" stroke-width="2"/><rect x="40" y="96" width="42" height="46" fill="#fdba74" stroke="#c2410c"/><rect x="82" y="42" width="42" height="100" fill="#fb923c" stroke="#c2410c"/><rect x="124" y="64" width="42" height="78" fill="#fdba74" stroke="#c2410c"/><rect x="166" y="112" width="42" height="30" fill="#fed7aa" stroke="#c2410c"/><text x="40" y="156" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">0</text><text x="82" y="156" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">10</text><text x="124" y="156" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">20</text><text x="166" y="156" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">30</text><text x="208" y="156" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">40s</text><text x="127" y="172" font-size="10" font-weight="bold" text-anchor="middle" fill="#c2410c" font-family="sans-serif">✔ NO gaps (touching continuous scale)</text></g></svg>`,
      diagramCaption:
        "Examiner's favourite Paper 2 graph check: Bar charts compare separate categories (leave gaps!); Histograms show continuous numerical intervals (bars touch!).",
      workedExamples: [
        {
          title: "Mean, Median, Mode & Range from an Even-Sized Dataset",
          problem:
            "Eight participants recall the following numbers of objects in a perception test: **9, 5, 12, 8, 9, 15, 6, 12**. Find the **mean**, **median**, **mode(s)** and **range**.",
          steps: [
            "**Order the scores first** (essential for median & range!): `5, 6, 8, 9, 9, 12, 12, 15` ($N = 8$).",
            "**Mean**: {{(5 + 6 + 8 + 9 + 9 + 12 + 12 + 15) / 8 = 76 / 8 = 9.5}}.",
            "**Median**: With $N = 8$ (even), take the halfway point between the 4th (`9`) and 5th (`9`) ordered scores: {{(9 + 9) / 2 = 9}}.",
            "**Mode**: Both `9` and `12` appear twice → **bimodal: 9 and 12**.",
            "**Range**: Highest minus lowest = {{15 - 5 = 10}}.",
          ],
          answer: "Mean = 9.5, Median = 9, Modes = 9 and 12 (bimodal), Range = 10",
          yourTurn: {
            question:
              "Your turn: Six participants score **14, 8, 11, 20, 9, 10** on an empathy scale. What is the **median** score?",
            answer: { type: "number", value: 10.5 },
            solution:
              "Order first: 8, 9, 10, 11, 14, 20. With 6 scores, average the 3rd (10) and 4th (11) values: (10 + 11) ÷ 2 = 10.5.",
          },
        },
      ],
      keyPoints: [
        "Always **sort data in ascending order** before finding the median or range!",
        "Compare **both** central tendency (mean/median) **and** dispersion (range) when interpreting a results table: a higher mean shows better average performance, while a **smaller range** shows scores were more consistent.",
        "Bar chart = discrete categories (gaps); Histogram = continuous intervals (no gaps); Scattergraph = correlation co-variables.",
        "Qualitative data can be converted into quantitative data via **content analysis / coding** (counting how often specific themes appear in transcripts).",
      ],
      whyItWorks:
        "An average alone can deceive: two teaching methods can both produce a mean score of 70%, yet Method A ranges from 66%–74% (consistently effective for everyone) while Method B ranges from 20%–100% (polarising). Pairing central tendency with **range** tells the full story.",
      strategies: [
        "Sort first, count N second, check for outliers third",
        "Quote actual figures from the table for BOTH the mean AND the range in data-interpretation questions",
      ],
      thinkDeeper:
        "Suppose Condition A has a mean recall of 14.2 words (range = 13) and Condition B has a mean recall of 11.8 words (range = 3). How should you interpret the difference in **both** performance and consistency?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Independent Variable (IV) vs Dependent Variable (DV)",
        back: "IV = manipulated by the researcher; DV = measured outcome. Both must be operationalised in measurable units.",
      },
      {
        front: "Operationalisation",
        back: "Defining variables or behavioural categories in exact, observable, measurable units so the study can be replicated.",
      },
      {
        front: "Directional vs Non-Directional Hypothesis",
        back: "Directional (one-tailed) states which condition will score higher/lower; Non-directional (two-tailed) states there will be 'a difference' without specifying direction.",
      },
      {
        front: "Null Hypothesis",
        back: "Predicts NO significant difference or relationship between operationalised variables; any observed difference is due to chance.",
      },
      {
        front: "Extraneous vs Confounding Variable",
        back: "Extraneous = any nuisance variable that could affect the DV; Confounding = varies systematically with the IV, ruining internal validity.",
      },
      {
        front: "Demand Characteristics vs Investigator Effects",
        back: "Demand characteristics = participants guess the aim and change behaviour; Investigator effects = researcher's unconscious cues/bias influence results.",
      },
      {
        front: "Single-Blind vs Double-Blind",
        back: "Single-blind = participants don't know their condition; Double-blind = neither participants nor the researcher running the trial knows.",
      },
      {
        front: "ABBA Counterbalancing",
        back: "Used in Repeated Measures: half the sample completes Condition A then B, and half completes B then A — balances order effects (practice/fatigue) across conditions.",
      },
      {
        front: "Random Sampling vs Random Allocation",
        back: "Random sampling selects a sample from the target population with equal chance; Random allocation assigns recruited participants to Condition A or B by chance.",
      },
      {
        front: "Stratified Sampling",
        back: "Dividing the target population into key subgroups (strata) and randomly selecting participants from each stratum in exact proportion to the population.",
      },
      {
        front: "Event Sampling vs Time Sampling",
        back: "Event sampling records every occurrence of a target behaviour; Time sampling records behaviour only at fixed time intervals (e.g. every 30 seconds).",
      },
      {
        front: "Positive vs Negative vs Zero Correlation",
        back: "Positive = both co-variables rise together; Negative = as X rises, Y falls (inverse link); Zero = no relationship. Correlation never proves causation!",
      },
      {
        front: "Reliability vs Validity",
        back: "Reliability = consistency of a measure across repeats/observers; Validity = accuracy — whether it genuinely measures what it claims to measure.",
      },
      {
        front: "Internal vs Ecological Validity",
        back: "Internal = was the DV change genuinely caused by the IV (no confounds)?; Ecological = do findings generalise to real-world everyday settings?",
      },
      {
        front: "Bar Chart vs Histogram",
        back: "Bar chart = discrete categories on x-axis with GAPS between bars; Histogram = continuous numerical class intervals on x-axis with NO gaps.",
      },
      {
        front: "When to choose Median over Mean",
        back: "When the dataset contains extreme outliers or is skewed, because the median is unaffected by extreme values whereas the mean is pulled towards them.",
      },
    ],
    mustKnow: [
      "Write fully operationalised directional, non-directional and null hypotheses for any novel scenario.",
      "Distinguish laboratory, field and natural/quasi experiments and evaluate internal vs ecological validity.",
      "Compare independent measures, repeated measures (with ABBA counterbalancing) and matched pairs designs.",
      "Compare random, opportunity, volunteer, stratified and systematic sampling — and calculate stratified subgroup sizes.",
      "Evaluate open vs closed questions, structured vs unstructured interviews, and social desirability bias.",
      "Design structured observations with operationalised behavioural categories, event/time sampling, and inter-observer reliability.",
      "Plot and interpret positive, negative and zero correlations on scattergraphs without ever claiming cause and effect.",
      "Spot ethical issues (DRIP + Confidentiality + Privacy) and state practical ways to deal with them (presumptive consent, debriefing, anonymity).",
      "Calculate mean, median, mode, range, percentages and ratios accurately and choose between bar charts, histograms and scattergraphs.",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: 'Participants who drink coffee will have better memory than those who drink water.'",
        right: "Write Instead ✅: Operationalise BOTH variables: 'Participants who drink 150 mg of caffeinated coffee will recall significantly more words out of 20 than participants who drink 150 ml of water.'",
      },
      {
        wrong: "Never Write ❌: 'A negative correlation means there is weak or no relationship between the variables.'",
        right: "Write Instead ✅: A negative correlation can be very strong! It means an inverse relationship: as Co-variable X increases, Co-variable Y decreases. 'No relationship' is a zero correlation.",
      },
      {
        wrong: "Never Write ❌: 'The correlation proves that violent media causes lower helping behaviour.'",
        right: "Write Instead ✅: Correlations only show a relationship/association between two co-variables — they cannot prove cause and effect because no IV was manipulated and a third variable may explain both.",
      },
      {
        wrong: "Never Write ❌: 'Random sampling means walking up to random people in the street.'",
        right: "Write Instead ✅: Approaching passers-by in the street is OPPORTUNITY sampling! Random sampling requires a complete list of the target population where every member has an equal mathematical chance (e.g. random number generator).",
      },
      {
        wrong: "Never Write ❌: 'Counterbalancing stops order effects from happening in repeated measures.'",
        right: "Write Instead ✅: Participants still get tired or practised! Counterbalancing (AB/BA) balances/controls order effects equally across both conditions so neither condition has an unfair advantage.",
      },
      {
        wrong: "Never Write ❌: 'The study is reliable because it accurately measured real-life memory.'",
        right: "Write Instead ✅: Accuracy/realism is VALIDITY! Reliability means CONSISTENCY — repeating the standardised procedure produces similar scores (or high inter-observer agreement).",
      },
      {
        wrong: "Never Write ❌: 'The sample was small (n = 20) so it is bad.'",
        right: "Write Instead ✅: Explain WHY in full: 'The sample of 20 university students is small and narrow, lowering population validity because findings cannot be generalised to older adults or non-students whose behaviour may differ.'",
      },
      {
        wrong: "Never Write ❌: 'Researchers debriefed participants afterwards so they gave informed consent.'",
        right: "Write Instead ✅: Consent must happen BEFORE taking part! Debriefing happens AFTERWARDS to explain the true aim, undo deception, reassure participants and remind them of their right to withdraw data.",
      },
    ],
    examMistakes: [
      "Using 'IV' and 'DV' in a correlation hypothesis — correlations have two **co-variables**, never an IV or DV!",
      "Forgetting to put scores in ascending numerical order before picking the middle score for the **median**.",
      "Drawing touching bars on a **bar chart** or leaving gaps on a **histogram**.",
      "Writing generic 'generic evaluation' without contextualising it to the exact STEM scenario (always name the actual task, group and variable from the question!).",
      "Confusing **random sampling** (how you recruit from a population) with **random allocation** (how you split your sample into Condition A vs Condition B).",
      "Giving subjective internal states like *'looks anxious'* or *'is helpful'* as behavioural categories instead of observable physical actions (*'bites nails'*, *'picks up dropped pen'*).",
      "Only quoting condition **means** from a data table when the question says 'Interpret the findings' — always interpret **both** the mean (average level) and the **range** (spread/consistency).",
    ],
    mnemonics: [
      {
        topic: "Evaluating any psychology study",
        device: "GRAVE",
        explanation:
          "Generalisability (sample → population), Reliability (standardised/replicable), Application (real-world usefulness), Validity (internal & ecological), Ethics (DRIP + Confidentiality).",
      },
      {
        topic: "Core ethical guidelines",
        device: "DRIP + CC",
        explanation:
          "Deception, Right to withdraw, Informed consent, Protection from harm + Confidentiality & Complete debrief.",
      },
      {
        topic: "Choosing the right graph",
        device: "B-Gaps · H-Hug · S-Scatter",
        explanation:
          "Bar charts leave GAPS (discrete categories); Histograms HUG with no gaps (continuous intervals); Scattergraphs plot co-variable dots (correlations).",
      },
    ],
    realWorld: [
      {
        title: "Double-Blind Clinical Drug Trials",
        detail:
          "New insomnia or anxiety medicines are tested against identical-looking sugar pills (placebos) using double-blind randomised controlled trials so neither patients nor doctors unconsciously skew symptom ratings.",
        emoji: "💊",
      },
      {
        title: "UX Eye-Tracking & A/B Testing",
        detail:
          "Apps randomly allocate millions of users to Button Design A or Button Design B (an independent-measures field experiment!) and measure click-through percentages.",
        emoji: "📱",
      },
      {
        title: "Opinion Polls & Stratified Quotas",
        detail:
          "National pollsters stratify samples by age, gender, income and region so 1,000 respondents mirror millions of voters within ±3%.",
        emoji: "🗳️",
      },
      {
        title: "Classroom Playgrounds & Behavioural Checklists",
        detail:
          "Educational psychologists use time-sampled, operationalised behavioural categories to assess attention and social play objectively across school terms.",
        emoji: "🏫",
      },
    ],
    videos: [
      {
        title: "IGCSE & GCSE Psychology Research Methods — Variables, Hypotheses & Designs",
        channel: "Psych Boost",
        url: "https://www.youtube.com/results?search_query=psych+boost+research+methods+variables+hypotheses+experimental+designs",
      },
      {
        title: "Sampling Methods in Psychology — Random, Stratified, Opportunity & Volunteer",
        channel: "Tutor2u Psychology",
        url: "https://www.youtube.com/results?search_query=tutor2u+psychology+sampling+methods+stratified+random",
      },
      {
        title: "Reliability vs Validity & GRAVE Evaluation Explained",
        channel: "Simply Psychology",
        url: "https://www.youtube.com/results?search_query=reliability+vs+validity+psychology+grave+evaluation",
      },
      {
        title: "Correlations, Scattergraphs, Bar Charts & Histograms in Psychology",
        channel: "Tutor2u Psychology",
        url: "https://www.youtube.com/results?search_query=psychology+correlations+scattergraphs+histograms+descriptive+statistics",
      },
    ],
    formulas: [
      {
        name: "Mean",
        formula: "{{(\"Sum of all scores\") / (\"Number of scores \" N)}}",
        note: "Sensitive to extreme outliers.",
      },
      {
        name: "Median",
        formula: "Middle value when all scores are ordered lowest → highest",
        note: "If N is even, average the two middle scores. Robust against outliers!",
      },
      {
        name: "Mode",
        formula: "Most frequently occurring value or category",
        note: "Can have no mode, one mode, or two modes (bimodal). Ideal for nominal categories.",
      },
      {
        name: "Range",
        formula: "{{\"Highest score\" - \"Lowest score\"}}",
        note: "Measures dispersion (consistency); smaller range = more consistent performance.",
      },
      {
        name: "Percentage of Sample",
        formula: "{{(\"Subgroup count\" / \"Total sample\") * 100}}%",
        note: "Check whether the question asks for 1 d.p. or nearest whole percent.",
      },
      {
        name: "Percentage Change",
        formula: "{{((\"New value\" - \"Original value\") / \"Original value\") * 100}}%",
        note: "Divide by the ORIGINAL baseline value, never the new value.",
      },
      {
        name: "Stratified Stratum Size",
        formula: "{{(\"Stratum population\" / \"Total target population\") * \"Desired sample size\"}}",
        note: "Follow calculation with random selection inside each stratum.",
      },
      {
        name: "Operationalisation",
        formula: "Defining IV/DV or behavioural categories in exact, measurable units",
        note: "Essential for replication and full CIE 0266 hypothesis marks.",
      },
      {
        name: "Counterbalancing (ABBA)",
        formula: "Half sample: Condition A → B; Half sample: Condition B → A",
        note: "Controls order effects (practice/fatigue) in repeated measures designs.",
      },
      {
        name: "Inter-Observer Reliability",
        formula: "Two+ independent observers tally the same event simultaneously & correlate scores",
        note: "Correlation of +0.80 or higher indicates strong consistency.",
      },
      {
        name: "Internal Validity",
        formula: "Certainty that the manipulated IV (and no confounding variable) caused the DV change",
        note: "Threatened by confounding variables, demand characteristics & investigator effects.",
      },
      {
        name: "Ecological Validity",
        formula: "Extent to which findings generalise from the study setting to everyday real life",
        note: "Higher in field experiments and naturalistic observations than artificial labs.",
      },
    ],
  },
};
