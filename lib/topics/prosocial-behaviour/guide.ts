import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "prosocial-behaviour",
  title: "Topic 3: Prosocial Behaviour",
  strand: "Paper 1: Cognition, Behaviour & Experiments",
  icon: "🤝",
  summary:
    "Why crowds freeze when one stranger collapses — and what makes humans risk their own safety to help others.",
  intro:
    "Why did commuters on a packed New York subway leap up within five seconds to help a man with a cane, while university students listening over an intercom let an epileptic seizure go unreported when four other bystanders were listening? In CIE 0266 Paper 1, you will distinguish broad **prosocial behaviour** from pure **altruism**, trace cognitive blocks in **Latané & Darley's (1968)** decision model, weigh situational costs and rewards in **Piliavin et al. (1969)** and **Levine et al. (2001)**, compare **evolutionary/genetic** explanations (**Rushton et al., 1986**) against **empathy-altruism** and **Social Learning Theory**, and evaluate how **parenting** and **prosocial media** (**Prot et al., 2014**) cultivate everyday kindness.",
  guide: [
    {
      id: "bystander-apathy",
      heading: "Bystander Apathy, Diffusion of Responsibility & Pluralistic Ignorance",
      discovery: {
        problem:
          "Imagine you smell faint smoke seeping through a classroom vent. Scenario A: You are revising completely alone in the room. Scenario B: Six calm classmates sit around you, glancing at the vent and then returning to their worksheets. In which scenario do you report the smoke faster — and why would having more pairs of eyes make everyone *less* safe?",
        idea:
          "Alone, 100% of the duty rests on you, and nobody else's poker face misleads you. Surrounded by calm classmates, two social-cognitive traps fire at once: **pluralistic ignorance** (reading others' outward calm as proof there is no real emergency) and **diffusion of responsibility** (mentally dividing the duty to act across {{n}} bystanders so each person feels only {{1/n}} responsible).",
      },
      body:
        "**Prosocial behaviour** refers to any voluntary action intended to benefit another person or group (such as sharing, comforting, donating blood, or rescuing), *regardless* of the helper's underlying motive. **Altruism** is a stricter subcategory of prosocial behaviour: helping motivated purely by an unselfish desire to improve another person's welfare, even at a personal cost and with **zero expectation of external or internal reward**.\n\nFollowing sensationalised reports of the 1964 murder of Kitty Genovese in New York, social psychologists Bibb Latané and John Darley investigated **bystander apathy** (the **bystander effect**): the counter-intuitive finding that an individual is **less likely and slower to intervene** in an emergency when passive others are present than when alone.\n\n**Named Core Study — Latané & Darley (1968): The Intercom Seizure Experiment**\n- **Aim**: To test whether increasing the perceived number of bystanders in an emergency reduces helping rate and slows response speed via diffusion of responsibility.\n- **Sample & Design**: Laboratory experiment using an **independent measures design** with male introductory psychology students at Columbia University.\n- **Procedure**: Each participant sat alone in a soundproof cubicle speaking via intercom (headphones and microphone) to discuss personal adjustments to city university life. Crucially, the microphone switched on only during a speaker's two-minute turn, so bystanders could **neither see one another nor coordinate who should act**. A pre-recorded male confederate mentioned he suffered from stress-related seizures; on his second turn, he choked, stammered, and pleaded urgently for help during a simulated epileptic seizure.\n- **Independent Variable (IV)**: Perceived group size — participants believed they were in a **2-person group** (alone with the victim: 0 other bystanders), a **3-person group** (1 other bystander), or a **6-person group** (4 other bystanders).\n- **Dependent Variables (DVs)**: (1) Percentage of participants leaving their cubicle to report the seizure to the experimenter within the 6-minute cut-off, and (2) response latency in seconds from the onset of the seizure.\n\n| Condition (Perceived Group Size) | Other Bystanders Believed Present | % Reporting Emergency (within 6 min) | Mean Response Latency (s) | Individual Share of Duty |\n|---|---|---|---|---|\n| **2-person** (participant + victim) | 0 | **85%** | **52 s** | {{1/1}} = 100% |\n| **3-person** (victim + 2 listeners) | 1 | **62%** | **93 s** | {{1/2}} = 50% |\n| **6-person** (victim + 5 listeners) | 4 | **31%** | **166 s** | {{1/5}} = 20% |\n\n- **Post-interview insight**: Non-helpers were *not* callous or indifferent — they had sweaty palms, trembling hands, and high anxiety, proving they experienced moral conflict rather than cold apathy.\n\n**Latané & Darley's (1970) 5-Step Cognitive Decision Model**\nBefore a bystander helps, they must pass through five sequential cognitive checkpoints; failing at *any single step* produces bystander non-intervention:\n1. **Notice the event**: Blocked by urban noise, smartphone distraction, or sensory overload.\n2. **Interpret the event as an emergency**: Blocked when an event is ambiguous and bystanders engage in **pluralistic ignorance** — scanning others' calm faces and mistakenly concluding nothing is wrong (in Latané & Darley's smoke-filled room study, **75%** reported smoke when alone vs **10%** alongside two passive confederates).\n3. **Assume personal responsibility**: Blocked by **diffusion of responsibility** — assuming someone else has already called an ambulance or is more senior.\n4. **Know how to help (competence)**: Blocked by lacking CPR, swimming, or mechanical skills.\n5. **Decide to implement help**: Blocked by **audience inhibition** (fear of looking foolish if it is a false alarm), physical danger, or legal liability.\n\n**Evaluation (CIE 0266 Paper 1)**:\n- **Strengths**: High **internal validity** — pre-recorded seizure tapes and isolated cubicles standardised the emergency across every participant and eliminated visual cues (isolating diffusion of responsibility from pluralistic ignorance).\n- **Limitations**: Low **ecological validity** (hearing a disembodied voice over headphones differs from seeing a bleeding stranger in real life); **population bias** (male US undergraduates limit generalisability); **ethical issues** of deception and acute psychological distress (sweating, trembling), partially mitigated by full debriefing.",
      diagram: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Latane and Darley 5-step cognitive decision model of bystander intervention showing barriers at each step"><rect x="8" y="8" width="664" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="340" y="32" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Latané &amp; Darley (1970) 5-Step Cognitive Decision Model</text><g font-family="sans-serif" text-anchor="middle"><rect x="22" y="54" width="112" height="58" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="78" y="75" font-size="11" font-weight="bold" fill="#1e3a8a">1. Notice</text><text x="78" y="92" font-size="10" fill="#1e40af">Spot the event</text><line x1="134" y1="83" x2="152" y2="83" stroke="#2563eb" stroke-width="2"/><polygon points="152,83 146,79 146,87" fill="#2563eb"/><rect x="154" y="54" width="112" height="58" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="210" y="75" font-size="11" font-weight="bold" fill="#1e3a8a">2. Interpret</text><text x="210" y="92" font-size="10" fill="#1e40af">Emergency?</text><line x1="266" y1="83" x2="284" y2="83" stroke="#2563eb" stroke-width="2"/><polygon points="284,83 278,79 278,87" fill="#2563eb"/><rect x="286" y="54" width="112" height="58" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="342" y="75" font-size="11" font-weight="bold" fill="#1e3a8a">3. Responsibility</text><text x="342" y="92" font-size="10" fill="#1e40af">My duty to act?</text><line x1="398" y1="83" x2="416" y2="83" stroke="#2563eb" stroke-width="2"/><polygon points="416,83 410,79 410,87" fill="#2563eb"/><rect x="418" y="54" width="112" height="58" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="474" y="75" font-size="11" font-weight="bold" fill="#1e3a8a">4. Competence</text><text x="474" y="92" font-size="10" fill="#1e40af">Know how?</text><line x1="530" y1="83" x2="548" y2="83" stroke="#16a34a" stroke-width="2"/><polygon points="548,83 542,79 542,87" fill="#16a34a"/><rect x="550" y="54" width="108" height="58" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="604" y="75" font-size="11" font-weight="bold" fill="#14532d">5. Implement</text><text x="604" y="92" font-size="10" fill="#166534">HELP GIVEN!</text><line x1="78" y1="112" x2="78" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><rect x="22" y="142" width="112" height="52" rx="6" fill="#fee2e2" stroke="#ef4444"/><text x="78" y="162" font-size="9.5" font-weight="bold" fill="#991b1b">Distraction</text><text x="78" y="177" font-size="9" fill="#7f1d1d">Rushing / noise</text><line x1="210" y1="112" x2="210" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><rect x="154" y="142" width="112" height="52" rx="6" fill="#fee2e2" stroke="#ef4444"/><text x="210" y="160" font-size="9.5" font-weight="bold" fill="#991b1b">Pluralistic</text><text x="210" y="173" font-size="9.5" font-weight="bold" fill="#991b1b">Ignorance</text><text x="210" y="187" font-size="8.5" fill="#7f1d1d">Others look calm</text><line x1="342" y1="112" x2="342" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><rect x="286" y="142" width="112" height="52" rx="6" fill="#fee2e2" stroke="#ef4444"/><text x="342" y="160" font-size="9.5" font-weight="bold" fill="#991b1b">Diffusion of</text><text x="342" y="173" font-size="9.5" font-weight="bold" fill="#991b1b">Responsibility</text><text x="342" y="187" font-size="8.5" fill="#7f1d1d">Duty split 1/n</text><line x1="474" y1="112" x2="474" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><rect x="418" y="142" width="112" height="52" rx="6" fill="#fee2e2" stroke="#ef4444"/><text x="474" y="162" font-size="9.5" font-weight="bold" fill="#991b1b">Skill Deficit</text><text x="474" y="177" font-size="9" fill="#7f1d1d">No first-aid skill</text><line x1="604" y1="112" x2="604" y2="140" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/><rect x="550" y="142" width="108" height="52" rx="6" fill="#fee2e2" stroke="#ef4444"/><text x="604" y="160" font-size="9.5" font-weight="bold" fill="#991b1b">Audience</text><text x="604" y="173" font-size="9.5" font-weight="bold" fill="#991b1b">Inhibition</text><text x="604" y="187" font-size="8.5" fill="#7f1d1d">High cost / fear</text></g></svg>`,
      diagramCaption:
        "Helping requires passing all five cognitive gates; red drop-outs show the specific psychological barrier that causes bystander apathy at each stage.",
      workedExamples: [
        {
          title: "Calculating responsibility share and percentage drop in Latané & Darley (1968)",
          problem:
            "In Latané & Darley's (1968) seizure study, 85% of participants helped when they believed 0 other bystanders heard the victim, falling to 31% when 4 other bystanders were believed present. (a) By how many percentage points did helping fall? (b) What percentage of personal responsibility sits on each listener when 4 other bystanders are present alongside the participant?",
          steps: [
            "(a) Subtract the 6-person helping percentage from the 2-person helping percentage: 85% − 31% = 54 percentage points.",
            "(b) Total potential helpers (excluding the victim) = 1 participant + 4 other bystanders = 5 listeners.",
            "Equal responsibility share per bystander = (100 ÷ 5)% = 20%.",
          ],
          answer: "(a) 54 percentage points drop; (b) 20% share of responsibility per bystander.",
          yourTurn: {
            question:
              "Suppose an emergency occurs in front of 8 bystanders (none of whom is the victim). Assuming equal diffusion of responsibility across all bystanders, what percentage of personal responsibility does each bystander feel?",
            answer: { type: "number", value: 12.5 },
            solution: "100% ÷ 8 bystanders = 12.5% per bystander.",
          },
        },
      ],
      keyPoints: [
        "**Prosocial behaviour** = any voluntary act intended to benefit others; **altruism** = helping purely for the other's welfare with zero personal gain.",
        "**Latané & Darley (1968)**: intercom seizure helping fell from **85%** (alone with victim) to **62%** (1 other bystander) to **31%** (4 other bystanders).",
        "**Pluralistic ignorance** blocks Step 2 (interpreting ambiguous emergencies via others' calm cues); **diffusion of responsibility** blocks Step 3 (dividing duty across {{n}} witnesses).",
        "If *you* ever need help in a crowd, break Steps 2 and 3 directly: point at **one specific person** ('You in the blue shirt — call 995, I am having chest pain!').",
      ],
      whyItWorks:
        "Why did Latané & Darley place participants in separate cubicles with one-way intercoms rather than in a shared waiting room? In a shared room, bystanders see each other's calm faces (**pluralistic ignorance**) *and* share duty (**diffusion of responsibility**). Isolating participants eliminated facial cues completely, proving that *mere knowledge* of other listeners is sufficient to diffuse responsibility!",
      strategies: ["Distinguish Step 2 vs Step 3 traps", "Quote exact percentages (85% → 62% → 31%)", "Evaluate lab control vs mundane realism"],
      thinkDeeper:
        "Does diffusion of responsibility still happen online when 500 students read a cyberbullying message in a school group chat? Which step(s) of Latané & Darley's 5-step model explain why nobody replies — and how would tagging one named class rep change the outcome?",
    },
    {
      id: "cost-reward-piliavin",
      heading: "Cost-Reward Arousal Model & Situational Factors",
      discovery: {
        problem:
          "If Latané & Darley's bystander effect were universal, a crowded subway carriage with 45 strangers should be the *worst* place on Earth to collapse. Yet when researchers staged collapses on real New York express trains, passengers rushed to help an ill commuter in **5 seconds** on **95%** of journeys! Why did the crowd suddenly *accelerate* helping instead of freezing?",
        idea:
          "On a moving express train between stations, passengers **could clearly see** the unambiguous collapse (no pluralistic ignorance) and **could not leave the carriage** — so watching someone suffer kept their own unpleasant physiological distress high. When the **cost of helping** is low and the **cost of not helping** (guilt/distress) is high, the quickest way to relieve distress is to help!",
      },
      body:
        "Jane and Irving Piliavin challenged the idea that crowds always breed apathy, proposing that bystanders act both emotionally and economically via the **Arousal–Cost–Reward Model (Piliavin et al., 1969; 1981)**:\n1. **Physiological Arousal**: Witnessing an emergency triggers unpleasant sympathetic arousal (racing heart, shock, empathic distress). More severe, close-up emergencies cause stronger arousal.\n2. **Egoistic Cost–Reward Calculation**: Bystanders are motivated to **reduce their own unpleasant arousal** in the least costly way by weighing two sets of costs:\n   - **Costs of Helping**: Physical danger, effort, lost time, embarrassment, or disgust (e.g. vomit/alcohol).\n   - **Costs of Not Helping**: Empathic distress at ongoing suffering, guilt/self-blame, and public disapproval.\n\n| Costs of Not Helping | **Low Cost of Helping** | **High Cost of Helping** |\n|---|---|---|\n| **High Cost of Not Helping** (strong empathy / clear need) | **Direct intervention** (rush forward to assist victim personally) | **Indirect help** (call staff/police) *or* **cognitive reinterpretation** (convince yourself victim does not need/deserve help) |\n| **Low Cost of Not Helping** (low empathy / victim blamed) | **Variable** — governed by social norms & mood | **Leave the scene / ignore** (walk away or look away) |\n\n**Named Core Study — Piliavin, Rodin & Piliavin (1969): Good Samaritanism on the New York Subway**\n- **Aim**: To test how victim appearance (ill vs drunk), victim race, model helpers, and bystander group size affect real-world helping in a **field experiment**.\n- **Sample & Setting**: Approx. **4,450 unsuspecting commuters** (~45% Black, ~55% White; mean ~43 passengers per car) across **103 trials** on non-stop 7.5-minute express runs of the New York 8th Avenue IND subway.\n- **Procedure**: Teams of four researchers boarded through different doors (one male victim aged 26–35, one male model helper, two female covert observers recording counts, race, latencies, and passenger remarks). Exactly **70 seconds** into the ride, the victim staggered forward and collapsed face-up in the critical area.\n- **Independent Variables (IVs)**:\n  1. **Victim condition**: Carrying a black **cane** (appearing ill/disabled, **65 trials**) vs smelling of alcohol and carrying a bottle in a brown paper bag (**drunk**, **38 trials**).\n  2. **Victim race**: White (3 confederates) vs Black (1 confederate).\n  3. **Model timing**: No model vs early model (70 s) vs late model (150 s).\n- **Key Findings**:\n  - **Cane vs Drunk**: Spontaneous help *before* the 70 s model occurred on **62/65 (95%)** of cane trials (median latency **5 seconds**) versus **19/38 (50%)** of drunk trials (median latency **109 seconds**). Helping a drunk commuter carried higher **costs of helping** (unpredictability, embarrassment, disgust) and lower **costs of not helping** (passengers blamed him for his own state).\n  - **Zero diffusion of responsibility**: Larger carriages (7+ witnesses in the critical area) actually helped the cane victim *faster* than small groups (1–3 witnesses)!\n  - **Gender & Race**: **90%** of first helpers were **male** (lower physical cost / protective gender norm). Same-race favouritism appeared **only in the drunk condition**, where high helping costs gave passengers an excuse not to help an out-group member.\n\n**Situational & Cross-Cultural Factors — Levine, Norenzayan & Philbrick (2001)**\n- **Time pressure**: Darley & Batson (1973) sent seminary students to give a talk (even on the Good Samaritan parable!); **63%** helped a slumped coughing victim when unhurried, **45%** in moderate hurry, and only **10%** when running late.\n- **Cross-cultural city helping — Levine et al. (2001)**: Researchers staged **three non-emergency field tests** (accidentally dropping a pen, a person in a leg brace dropping magazines, and a blind pedestrian with a white cane waiting at traffic lights) across **23 large cities worldwide**:\n  - **Highest helping**: **Rio de Janeiro** (~93%), **San José, Costa Rica** (~91%), **Lilongwe, Malawi** (~86%).\n  - **Lowest helping**: **Kuala Lumpur** (~40%), **New York** (~45%), **Singapore** (~48%).\n  - **Why?**: Cities with Latin American ***simpatía*** cultural norms (valuing warmth, politeness, and interpersonal harmony) helped far more, whereas cities with **high economic productivity (GDP/purchasing power)** and **fast pedestrian walking pace** helped significantly less!",
      diagram: `<svg viewBox="0 0 660 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Piliavin Arousal Cost-Reward 2 by 2 matrix comparing low vs high costs of helping and not helping"><rect x="8" y="8" width="644" height="214" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="345" y="30" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#0f172a">Piliavin et al. (1981) Arousal–Cost–Reward Decision Matrix</text><text x="275" y="54" font-family="sans-serif" font-size="11.5" font-weight="bold" text-anchor="middle" fill="#15803d">LOW Cost of Helping (safe, quick, clean)</text><text x="515" y="54" font-family="sans-serif" font-size="11.5" font-weight="bold" text-anchor="middle" fill="#b91c1c">HIGH Cost of Helping (danger, disgust, delay)</text><text x="82" y="100" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e3a8a">HIGH Cost of</text><text x="82" y="115" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Not Helping</text><text x="82" y="130" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#475569">(guilt, empathy)</text><text x="82" y="172" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#475569">LOW Cost of</text><text x="82" y="187" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#475569">Not Helping</text><text x="82" y="202" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#64748b">(victim blamed)</text><rect x="160" y="66" width="230" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="275" y="90" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#14532d">DIRECT INTERVENTION</text><text x="275" y="108" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#166534">Subway cane victim: 95% helped</text><text x="275" y="123" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#15803d">Median latency = 5 seconds</text><rect x="402" y="66" width="228" height="70" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="516" y="88" font-family="sans-serif" font-size="11.5" font-weight="bold" text-anchor="middle" fill="#78350f">INDIRECT HELP or REINTERPRET</text><text x="516" y="106" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#92400e">Call emergency services OR</text><text x="516" y="121" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#92400e">redefine victim as undeserving</text><rect x="160" y="144" width="230" height="66" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/><text x="275" y="168" font-family="sans-serif" font-size="11.5" font-weight="bold" text-anchor="middle" fill="#0c4a6e">NORM / MOOD DEPENDENT</text><text x="275" y="186" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#075985">Varies with personal norms,</text><text x="275" y="200" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#075985">good mood &amp; time pressure</text><rect x="402" y="144" width="228" height="66" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/><text x="516" y="168" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">LEAVE / IGNORE VICTIM</text><text x="516" y="186" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#7f1d1d">Subway drunk victim: 50% ignored</text><text x="516" y="200" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#7f1d1d">before 70 s (median 109 s)</text></svg>`,
      diagramCaption:
        "How Piliavin's Arousal–Cost–Reward Matrix predicts direct help, indirect help, cognitive reinterpretation, or walking away.",
      workedExamples: [
        {
          title: "Analysing Piliavin et al. (1969) trial counts and percentages",
          problem:
            "In Piliavin et al. (1969), spontaneous help before 70 seconds occurred on 62 of the 65 cane trials and on 19 of the 38 drunk trials. Verify both helping percentages to the nearest whole number and state one methodological problem with commuters' consent.",
          steps: [
            "Cane spontaneous helping rate = (62 ÷ 65) × 100 = 95.38% ≈ 95%.",
            "Drunk spontaneous helping rate = (19 ÷ 38) × 100 = 50%.",
            "Ethical limitation: Commuters gave **no informed consent**, could **not withdraw** from a moving express carriage between 59th and 125th Streets, and **could not be debriefed** afterwards.",
          ],
          answer: "95% (cane) vs 50% (drunk); commuters lacked informed consent, right to withdraw, and debriefing.",
          yourTurn: {
            question:
              "Across all 103 subway trials in Piliavin et al. (1969), spontaneous help before 70 seconds occurred on 62 cane trials and 19 drunk trials. On how many trials in total out of the 103 did commuters help spontaneously before 70 seconds?",
            answer: { type: "number", value: 81 },
            solution: "62 + 19 = 81 trials out of 103.",
          },
        },
      ],
      keyPoints: [
        "**Piliavin et al. (1969)**: high **ecological validity** & zero demand characteristics (4,450 covert subway passengers), showing **95%** spontaneous helping for the **cane** victim (5 s) vs **50%** for the **drunk** victim (109 s).",
        "**Arousal–Cost–Reward Model** is fundamentally **egoistic**: people help (or cognitively reinterpret the situation) to reduce their own unpleasant arousal at minimum net cost.",
        "**Levine et al. (2001)** across **23 cities**: ***simpatía*** cultures (Rio de Janeiro ~93%, San José ~91%) helped far more than fast-paced, economically productive cities (Kuala Lumpur ~40%, New York ~45%, Singapore ~48%).",
      ],
      whyItWorks:
        "Notice how **cognitive reinterpretation** solves a puzzle: what does a bystander do when *both* costs are high (e.g. a bleeding stranger in a dark alley)? Walking away feels horribly guilty, yet stepping in feels dangerous — so the brain lowers the *cost of not helping* by inventing a story ('That's just a domestic argument' or 'Someone else definitely called 999').",
      strategies: ["Classify BOTH costs (helping vs not helping)", "Contrast lab (Latané & Darley) vs field (Piliavin)", "Evaluate field ethics (consent, withdrawal, debrief)"],
      thinkDeeper:
        "Levine et al. (2001) found Singapore had a fast walking speed, strong economic output, and relatively low spontaneous street helping (~48%) in 2001. How does Singapore's modern SCDF *myResponder* app re-engineer Piliavin's Cost–Reward Matrix and Latané & Darley's 5 steps for cardiac arrests?",
    },
    {
      id: "biological-evolutionary",
      heading: "Biological & Evolutionary Explanations of Helping",
      discovery: {
        problem:
          "Charles Darwin called self-sacrificing altruism a 'special difficulty' for evolution: if a prairie dog barks an alarm call when a hawk dives, it draws the predator's attention to itself and is *more* likely to be eaten! Why didn't natural selection wipe out 'helpful' genes millions of years ago?",
        idea:
          "Evolution selects for **gene survival**, not just individual bodies! If the prairie dog's alarm call saves **four full siblings** (each sharing **50%** of its alleles), {{4 * 0.5 = 2.0}} copies of those shared alleles survive — **twice** as many as inside the caller's own body! W. D. Hamilton called this **kin selection** (inclusive fitness).",
      },
      body:
        "Biological and evolutionary psychologists argue that humans possess an innate, evolved capacity for prosociality because helping under strategic conditions increased ancestral gene survival.\n\n**1. Kin Selection Theory & Hamilton's Rule (Hamilton, 1964)**\n- **Inclusive fitness** equals an organism's **direct fitness** (own offspring) plus its **indirect fitness** (extra survival/reproduction of genetic relatives who carry shared alleles).\n- **Hamilton's Rule** predicts that natural selection favours a costly helping gene whenever:\n\n    {{r * B > C}}\n\n  where **{{r}}** = **coefficient of genetic relatedness** (probability two individuals share a rare allele by descent), **{{B}}** = reproductive benefit to the recipient, and **{{C}}** = reproductive cost to the helper.\n\n| Relationship to Helper | Genetic Relatedness ({{r}}) | Minimum Benefit-to-Cost Ratio ({{B/C}}) Needed |\n|---|---|---|\n| **Identical (MZ) twin** | **1.00** (100%) | {{B > 1 * C}} |\n| **Parent, offspring, full sibling, DZ twin** | **0.50** (50%) | {{B > 2 * C}} |\n| **Grandparent, aunt/uncle, half-sibling** | **0.25** (25%) | {{B > 4 * C}} |\n| **First cousin** | **0.125** (12.5%) | {{B > 8 * C}} |\n| **Unrelated stranger** | **0.00** (0%) | Cannot evolve via kin selection alone! |\n\n- **Empirical support**: Burnstein, Crandall & Kitayama (1994) found that in **life-or-death** house-fire scenarios, American and Japanese participants overwhelmingly chose to rescue close, young kin (`r = 0.5`) over distant kin (`r = 0.125`), whereas in everyday errands relatedness mattered much less. Madsen et al. (2007) showed British and South African Zulu participants endured a painful wall-sit squat longest to earn money/food for `r = 0.5` kin, less for `r = 0.25`, and least for `r = 0.125`.\n\n**2. Reciprocal Altruism (Trivers, 1971)**\n- How does evolution explain helping **non-relatives (`r = 0`)**? Robert Trivers proposed **reciprocal altruism** (*'you scratch my back today, I'll scratch yours tomorrow'*): natural selection favours helping unrelated individuals when (a) the immediate cost to the helper is small compared to the recipient's benefit (e.g. sharing surplus food), (b) individuals live in stable groups with repeated encounters, and (c) brains evolve **cheater-detection** mechanisms (gratitude towards reciprocators, moral outrage/ostracism towards free-riders).\n\n**3. Genetic Heritability & Twin Evidence — Rushton, Fulker, Neale, Nias & Eysenck (1986)**\n- **Aim**: To estimate the relative contributions of **genes**, **shared family environment**, and **non-shared unique environment** to adult altruism and empathy.\n- **Sample & Method**: **573 adult twin pairs** from the University of London Institute of Psychiatry Twin Register (**296 monozygotic [MZ]** identical pairs sharing 100% of genes vs **179 same-sex dizygotic [DZ]** fraternal pairs sharing ~50% of segregating genes, plus opposite-sex DZ pairs) completed postal **self-report questionnaires** (Self-Report Altruism Scale, Emotional Empathy Scale, and Nurturance).\n- **Key Findings**:\n  - MZ twins were **roughly twice as similar** to each other as DZ twins on altruism (`r = 0.53` MZ vs `r = 0.25` DZ) and empathy (`r = 0.54` MZ vs `r = 0.20` DZ).\n  - Biometric variance modelling estimated that **~50% (50%–60%)** of individual variance in altruism and empathy was due to **additive genetic inheritance**, **~0%** to shared family upbringing, and **~50%** to **unique non-shared environmental experiences**!\n- **Neurobiological mechanisms**: The neuropeptide **oxytocin** enhances trust, social bonding, and in-group empathy, while helping activates **anterior insula / anterior cingulate** empathy circuits and **mesolimbic dopamine** reward centres (the 'helper's high').\n\n**Evaluation (CIE 0266 Paper 1)**:\n- **Strengths**: Explains cross-cultural kinship universals and aligns quantitative twin correlations (**Rushton et al., 1986**) with neurochemical evidence.\n- **Limitations**: **Biological reductionism** — cannot easily explain anonymous one-off sacrifices for strangers (e.g. donating a kidney to an unknown stranger or rescuing a stranger from train tracks where neither `r > 0` nor future reciprocity applies); **Rushton et al. (1986)** relied on **self-report questionnaires** vulnerable to **social desirability bias** (claiming to be more generous on paper than in real emergencies), and MZ twins may be treated more similarly by peers/parents (**equal environments assumption** critique).",
      diagram: `<svg viewBox="0 0 660 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kin selection relatedness bars and Rushton 1986 MZ vs DZ twin correlation comparison"><rect x="8" y="8" width="644" height="199" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="175" y="32" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Hamilton's Relatedness (r)</text><g font-family="sans-serif" font-size="10.5" fill="#1e293b"><text x="24" y="64">MZ Twin (1.0)</text><rect x="130" y="52" width="180" height="16" rx="4" fill="#2563eb"/><text x="24" y="96">Sibling / Parent (0.5)</text><rect x="130" y="84" width="90" height="16" rx="4" fill="#3b82f6"/><text x="24" y="128">Aunt / Grandparent (0.25)</text><rect x="130" y="116" width="45" height="16" rx="4" fill="#60a5fa"/><text x="24" y="160">First Cousin (0.125)</text><rect x="130" y="148" width="23" height="16" rx="4" fill="#93c5fd"/><text x="175" y="188" font-size="10" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Hamilton's Rule: r × B &gt; C</text></g><line x1="340" y1="22" x2="340" y2="192" stroke="#cbd5e1" stroke-dasharray="4,4"/><text x="500" y="32" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Rushton et al. (1986) Twin Study</text><text x="500" y="48" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#475569">573 adult twin pairs (~50% genetic variance)</text><g font-family="sans-serif" text-anchor="middle"><rect x="395" y="72" width="46" height="90" rx="4" fill="#16a34a"/><text x="418" y="66" font-size="10" font-weight="bold" fill="#14532d">r = 0.53</text><text x="418" y="177" font-size="10" fill="#1e293b">MZ Altruism</text><rect x="450" y="120" width="46" height="42" rx="4" fill="#86efac"/><text x="473" y="114" font-size="10" font-weight="bold" fill="#166534">r = 0.25</text><text x="473" y="177" font-size="10" fill="#1e293b">DZ Altruism</text><rect x="520" y="70" width="46" height="92" rx="4" fill="#7c3aed"/><text x="543" y="64" font-size="10" font-weight="bold" fill="#4c1d95">r = 0.54</text><text x="543" y="177" font-size="10" fill="#1e293b">MZ Empathy</text><rect x="575" y="128" width="46" height="34" rx="4" fill="#c4b5fd"/><text x="598" y="122" font-size="10" font-weight="bold" fill="#5b21b6">r = 0.20</text><text x="598" y="177" font-size="10" fill="#1e293b">DZ Empathy</text><line x1="378" y1="162" x2="635" y2="162" stroke="#64748b"/></g></svg>`,
      diagramCaption:
        "Left: Hamilton's coefficient of genetic relatedness (r). Right: Rushton et al. (1986) twin correlations — MZ twins correlate more than twice as strongly as DZ twins on altruism and empathy.",
      workedExamples: [
        {
          title: "Testing Hamilton's Rule ({{r * B > C}})",
          problem:
            "A swimmer considers diving into rough surf at a personal survival cost of C = 0.30 to rescue a drowning relative, yielding a survival benefit of B = 1.00 to the relative. According to Hamilton's Rule (r × B > C), will kin selection favour this rescue for (a) a full sibling (r = 0.50) and (b) a first cousin (r = 0.125)?",
          steps: [
            "(a) Full sibling: r × B = 0.50 × 1.00 = 0.50. Since 0.50 > 0.30 (r × B > C), Hamilton's Rule IS satisfied — kin selection favours the rescue.",
            "(b) First cousin: r × B = 0.125 × 1.00 = 0.125. Since 0.125 < 0.30, Hamilton's Rule is NOT satisfied for one cousin alone (she would need to save at least 3 cousins: 3 × 0.125 = 0.375 > 0.30).",
          ],
          answer: "Favoured for a full sibling (0.50 > 0.30), not favoured for a single first cousin (0.125 < 0.30).",
          yourTurn: {
            question:
              "Using Hamilton's Rule (r × B > C), calculate the value of r × B when helping an aunt (r = 0.25) yields a benefit of B = 2.4.",
            answer: { type: "number", value: 0.6 },
            solution: "r × B = 0.25 × 2.4 = 0.6.",
          },
        },
      ],
      keyPoints: [
        "**Kin selection (Hamilton, 1964)**: helping relatives increases **inclusive fitness** when `{{r * B > C}}` (`r = 0.5` full sibling/parent/child; `0.25` grandparent/aunt/half-sibling; `0.125` first cousin).",
        "**Reciprocal altruism (Trivers, 1971)**: helping non-kin evolves when future returned favours outweigh present cost and cheaters are detected.",
        "**Rushton et al. (1986)**: **573 adult twin pairs** showed MZ correlations (`~0.53–0.54`) more than double DZ correlations (`~0.20–0.25`), estimating **~50% genetic heritability** — but limited by self-report social desirability bias.",
      ],
      whyItWorks:
        "Comparing **monozygotic (100% shared genes)** and **dizygotic (~50% shared genes)** twins raised together controls for family socioeconomic status and household culture: if shared upbringing alone drove kindness, MZ and DZ correlations would be nearly equal (`r ≈ r`). Because MZ similarity was *double* DZ similarity, additive genetic differences must contribute substantially.",
      strategies: ["Apply r = 0.5, 0.25, 0.125 accurately", "Distinguish kin selection vs reciprocal altruism", "Critique self-report bias in Rushton et al."],
      thinkDeeper:
        "Why did Rushton et al. (1986) find almost **0%** variance from *shared* family environment, yet developmental studies show parenting matters? Think about how two siblings in the *same* home can experience very different peer groups, birth-order roles, and parent-child interactions (**non-shared environment**)!",
    },
    {
      id: "empathy-social-learning",
      heading: "Empathy-Altruism & Social Learning Explanations",
      discovery: {
        problem:
          "Suppose you watch a fellow student ('Elaine') wince as she receives mild electric shocks in a memory trial, and the researcher offers to let you take her place. Half the observers are told they can walk out right now and never see Elaine again (**easy escape**); the other half must stay and watch eight more shock trials (**difficult escape**). How can this clever 2 × 2 design prove whether human kindness is **truly altruistic** or **secretly selfish**?",
        idea:
          "If helping is purely **egoistic** (just a way to stop *your own* uncomfortable distress), you will bolt for the door as soon as **escape is easy**! Only someone driven by genuine **empathic concern** for Elaine's welfare will *still* volunteer to take her shocks even when walking away is completely free and easy — exactly what Daniel Batson (1981) discovered!",
      },
      body:
        "Does genuine selflessness exist, or is every kind act secretly aimed at making *ourselves* feel better? Social-cognitive psychology answers this debate through **Batson's Empathy–Altruism Hypothesis** and **Bandura's Social Learning Theory**.\n\n**1. Batson's Empathy–Altruism Hypothesis (Batson et al., 1981; 1991)**\nDaniel Batson proposed that witnessing another person suffer evokes **two distinct emotional states** leading to two different motives:\n- **Personal Distress** (self-focused anxiety, alarm, unease) → triggers **egoistic motivation** to relieve *one's own* discomfort. If escaping the scene is easy, the bystander walks away; they help *only* when escape is difficult.\n- **Empathic Concern** (other-focused sympathy, compassion, warmth sparked by **perspective-taking** and perceived similarity) → triggers **genuinely altruistic motivation** whose ultimate goal is relieving the *victim's* suffering, even when escape is effortless.\n\n**Empirical Test — Batson et al. (1981) 'Elaine' Shock Study**:\nFemale undergraduates watched confederate 'Elaine' struggle with painful electric shocks. Empathy was manipulated via questionnaire similarity (**High Empathy**: very similar values vs **Low Empathy**: dissimilar values), crossed with **Escape Difficulty** (**Easy Escape**: observer leaves after Trial 2 vs **Difficult Escape**: observer must watch Trials 3–10).\n\n| Emotional State Condition | **Easy Escape** (% taking Elaine's shocks) | **Difficult Escape** (% taking Elaine's shocks) | Underlying Motivation |\n|---|---|---|---|\n| **Low Empathy** (Personal Distress dominant) | **18%** (walked away!) | **64%** (helped to stop watching) | **Egoistic** distress reduction |\n| **High Empathy** (Empathic Concern dominant) | **82%** (stayed to help!) | **91%** | **True Altruism** |\n\n- *Counter-argument*: Cialdini et al. (1987) proposed the **Negative-State Relief Model** — arguing high-empathy observers feel *sadness*, and even walking out the door would leave them sad, so helping is still an egoistic mood-repair strategy!\n\n**2. Social Learning Theory (Bandura, 1977) & Social Norms**\nAlbert Bandura argued that prosocial behaviour is acquired through social experience via four mediational cognitive processes (**Attention → Retention → Motor Reproduction → Motivation**):\n- **Observational Learning & Role-Model Imitation**: Children and adults imitate helpful role models. In **Bryan & Test (1967)**, Los Angeles motorists were ~50% more likely to stop and help a woman with a flat tyre if they had driven past a staged **helpful model** changing another flat tyre 400 metres earlier; shoppers also donated more to a Salvation Army kettle right after seeing a confederate donate.\n- **Direct & Vicarious Reinforcement**: Praise and gratitude (**positive reinforcement**, Moss & Page 1972) strengthen helping, while **vicarious reinforcement** occurs when an observer sees a *model* rewarded or praised for helping (Rushton & Teachman, 1978, found children who watched an adult model generously donate tokens to 'Bobby' donated significantly more themselves — even weeks later!).\n- **Internalised Social Norms**:\n  1. **Norm of Reciprocity (Gouldner, 1960)**: We should help — and never harm — those who have helped us (e.g. free charity address labels doubling donations).\n  2. **Norm of Social Responsibility (Berkowitz, 1972)**: Society expects us to help dependent people who cannot help themselves (children, elderly, sick) *provided* they are not blamed for causing their own predicament.",
      diagram: `<svg viewBox="0 0 660 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Batson Empathy-Altruism two pathways diagram and Elaine 1981 easy vs difficult escape bar results"><rect x="8" y="8" width="644" height="199" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="200" y="30" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Batson's Dual-Pathway Model</text><rect x="20" y="92" width="88" height="44" rx="8" fill="#e2e8f0" stroke="#64748b"/><text x="64" y="112" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#0f172a">Witness</text><text x="64" y="126" font-family="sans-serif" font-size="9.5" text-anchor="middle" fill="#334155">Suffering</text><line x1="108" y1="104" x2="140" y2="74" stroke="#16a34a" stroke-width="2"/><line x1="108" y1="124" x2="140" y2="154" stroke="#d97706" stroke-width="2"/><rect x="142" y="50" width="118" height="46" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="201" y="70" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#14532d">Empathic Concern</text><text x="201" y="85" font-size="9" font-family="sans-serif" text-anchor="middle" fill="#166534">Other-oriented</text><line x1="260" y1="73" x2="284" y2="73" stroke="#16a34a" stroke-width="2"/><rect x="286" y="46" width="114" height="54" rx="8" fill="#bbf7d0" stroke="#15803d"/><text x="343" y="66" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#14532d">TRUE ALTRUISM</text><text x="343" y="81" font-family="sans-serif" font-size="8.8" text-anchor="middle" fill="#166534">Helps in Easy (82%)</text><text x="343" y="93" font-family="sans-serif" font-size="8.8" text-anchor="middle" fill="#166534">&amp; Hard Escape (91%)</text><rect x="142" y="132" width="118" height="46" rx="8" fill="#fef3c7" stroke="#d97706"/><text x="201" y="152" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#78350f">Personal Distress</text><text x="201" y="167" font-size="9" font-family="sans-serif" text-anchor="middle" fill="#92400e">Self-oriented anxiety</text><line x1="260" y1="155" x2="284" y2="155" stroke="#d97706" stroke-width="2"/><rect x="286" y="128" width="114" height="54" rx="8" fill="#fde68a" stroke="#b45309"/><text x="343" y="148" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#78350f">EGOISTIC MOTIVE</text><text x="343" y="163" font-family="sans-serif" font-size="8.8" text-anchor="middle" fill="#92400e">Leaves if Easy (18%)</text><text x="343" y="175" font-family="sans-serif" font-size="8.8" text-anchor="middle" fill="#92400e">Helps if Hard (64%)</text><line x1="416" y1="22" x2="416" y2="192" stroke="#cbd5e1" stroke-dasharray="4,4"/><text x="534" y="30" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Social Learning (Bandura)</text><g font-family="sans-serif" text-anchor="middle" font-size="10"><rect x="436" y="46" width="196" height="32" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="534" y="66" font-weight="bold" fill="#1e3a8a">1. Attention to Role Model</text><rect x="436" y="86" width="196" height="32" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="534" y="106" font-weight="bold" fill="#1e3a8a">2. Retention (Prosocial Script)</text><rect x="436" y="126" width="196" height="32" rx="6" fill="#dbeafe" stroke="#2563eb"/><text x="534" y="146" font-weight="bold" fill="#1e3a8a">3. Motor Reproduction (Skill)</text><rect x="436" y="166" width="196" height="30" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="534" y="185" font-weight="bold" fill="#14532d">4. Motivation (Vicarious Reward)</text></g></svg>`,
      diagramCaption:
        "Left: Batson's (1981) empathy-altruism vs egoistic distress pathways. Right: Bandura's four mediational processes in prosocial Social Learning Theory.",
      workedExamples: [
        {
          title: "Interpreting Batson et al.'s (1981) Easy vs Difficult Escape results",
          problem:
            "In Batson et al. (1981), helping dropped from 64% (difficult escape) to 18% (easy escape) in the low-empathy group, whereas in the high-empathy group helping remained high at 91% (difficult) and 82% (easy). Compare the percentage-point drops and explain why this supports Batson over a purely egoistic model.",
          steps: [
            "Low-empathy drop when escape became easy: 64% − 18% = 46 percentage points.",
            "High-empathy drop when escape became easy: 91% − 82% = 9 percentage points.",
            "Interpretation: Low-empathy participants helped mainly to stop their own distress of watching Elaine suffer (egoistic), so most fled when given an easy exit. High-empathy participants stayed to take shocks even with an easy exit because only helping Elaine relieved their other-focused empathic concern (altruistic).",
          ],
          answer: "46 percentage-point drop (low empathy) vs 9 percentage-point drop (high empathy) — proving high empathy drives genuine altruism even when escape is effortless.",
          yourTurn: {
            question:
              "In Batson et al.'s (1981) easy-escape condition, 82% of high-empathy participants helped compared with 18% of low-empathy participants. By how many percentage points was helping higher in the high-empathy group?",
            answer: { type: "number", value: 64 },
            solution: "82% − 18% = 64 percentage points.",
          },
        },
      ],
      keyPoints: [
        "**Batson's Empathy–Altruism Hypothesis**: **empathic concern** (other-oriented) produces true altruism (82% helped even in easy escape), whereas **personal distress** (self-oriented) produces egoistic escape (only 18% helped in easy escape).",
        "**Social Learning Theory (Bandura)**: prosociality is learned via **modelling** (Bryan & Test 1967), **attention/retention/reproduction/motivation**, and **vicarious reinforcement**.",
        "**Social Responsibility Norm** vs **Reciprocity Norm**: helping dependent others out of moral duty vs returning favours to those who helped us.",
      ],
      whyItWorks:
        "Notice why **vicarious reinforcement** is a bridge between behaviourism and cognition: the observer never receives a sweet or praise directly, yet watching a role model get thanked builds a *cognitive expectancy* ('Helping brings social warmth and respect') that motivates future prosocial acts.",
      strategies: ["Contrast empathic concern vs personal distress", "Use ARMM for Bandura's 4 processes", "Compare reciprocity vs social responsibility norms"],
      thinkDeeper:
        "Can we ever 100% disprove Cialdini's egoistic counter-claim? Even if an anonymous blood donor receives zero money or fame, they still feel a warm inner glow afterwards — is that 'warm glow' the *cause* of helping (egoism) or merely an evolved *by-product* of genuine care?",
    },
    {
      id: "media-parental-influences",
      heading: "Media & Parental Influences on Prosocial Behaviour",
      discovery: {
        problem:
          "Two parents catch their seven-year-old laughing at a classmate who tripped in the canteen. Parent A snaps: *'Stop laughing right now or no iPad for a week!'* Parent B says calmly: *'Imagine your tray flew everywhere in front of everyone — how embarrassed and hurt would your knees feel? What could help him right now?'* Ten years later, when no adult is watching, which teenager helps a struggling peer — and why?",
        idea:
          "Parent A used **power assertion** (external punishment), teaching the child to focus on *self-protection* ('Don't get caught!'). Parent B used **inductive reasoning discipline** (Hoffman, 2000), guiding the child to practise **perspective-taking** and connect their own actions to another person's feelings — building an internalised moral compass that works even when nobody is watching!",
      },
      body:
        "How do families and modern digital media shape whether children grow into empathetic helpers? Developmental and media psychologists point to **parental socialisation** and **prosocial media learning**.\n\n**1. Parental & Cultural Socialisation of Prosocial Behaviour**\n- **Parental Warmth & Secure Attachment (Eisenberg et al., 2006)**: Warm, sensitive caregivers who comfort children's distress teach emotional self-regulation. Children who can regulate their own anxiety experience other-focused **empathic concern** rather than overwhelming **personal distress**.\n- **Inductive Discipline vs Power Assertion (Hoffman, 1970; 2000)**:\n  - **Inductive reasoning**: Explaining *why* an action helped or harmed someone and highlighting the victim's feelings fosters perspective-taking, healthy empathy-based guilt, and **intrinsic prosocial values**.\n  - **Power assertion** (shouting, threats, physical punishment, confiscating privileges) triggers anger, fear, and external compliance — children behave prosocially only while policed.\n  - **Love withdrawal** (cold silence, refusing affection) breeds high anxiety rather than empathy.\n- **Parental Modelling & Guided Practice**: In Clary & Miller's (1986) study of civil-rights and crisis-hotline volunteers, sustained long-term volunteers had parents who both *preached* kindness **and** *modelled* active volunteering themselves ('hypocritical' models who preached charity without practising it produced short-lived helpers). Cross-culturally, **Whiting & Whiting's (1975) Six Cultures Study** found children in rural Kenya, Mexico, and the Philippines who routinely cared for younger siblings and contributed to family survival acted altruistically on **90%–100%** of observations versus **~8%** in individualistic middle-class US Orchard Town.\n\n**2. Prosocial Media & Video Games — General Learning Model & Prot et al. (2014)**\nWhile public headlines fixate on violent video games, Buckley & Anderson's **General Learning Model (GLM)** predicts that **prosocial media** (cooperative/rescue video games like *Animal Crossing* or *Super Mario Sunshine*, children's shows like *Sesame Street*, and prosocial song lyrics — Greitemeyer, 2009) rehearse **prosocial cognitive scripts**, elevate state empathy, and build long-term trait empathy.\n\n**Named Core Study — Prot et al. (2014): Prosocial Media, Empathy & Helping Across Cultures**\n- **Aim**: To test whether prosocial media exposure predicts higher **empathy** and **prosocial helping** across diverse Eastern and Western cultures (**Study 1**) and whether prosocial video games cause **longitudinal increases** in empathy and helping over time (**Study 2**).\n- **Study 1 (Cross-Cultural Correlational Survey)**:\n  - **Sample**: **11,783 adolescents/young adults** across **7 countries** (**Australia, China, Croatia, Germany, Japan, Romania, and the USA**).\n  - **Findings**: Across all seven individualistic and collectivist nations, habitual exposure to prosocial video games, TV, and movies positively correlated with **trait empathy** and **helping behaviour** (whereas violent media correlated negatively with empathy). **Empathy statistically mediated** the pathway from prosocial media to helping.\n- **Study 2 (2-Year Longitudinal Study in Singapore)**:\n  - **Sample & Design**: **3,034 Singaporean school children and adolescents** surveyed in **3 waves across 2 years**.\n  - **Findings**: Playing **prosocial video games at Wave 1** significantly predicted **higher empathy at Wave 2**, which in turn predicted **increased prosocial helping at Wave 3** — even after statistically controlling for Wave 1 baseline helping, gender, violent game play, and parental involvement!\n\n| Feature | Prot et al. (2014) Study 1 | Prot et al. (2014) Study 2 |\n|---|---|---|\n| **Research Method** | Cross-sectional correlational survey | 3-wave longitudinal panel survey (2 years) |\n| **Sample** | **11,783** youths in **7 countries** (East & West) | **3,034** youths in **Singapore** |\n| **Key Result** | Prosocial media → ↑ empathy → ↑ helping universally | Wave 1 prosocial gaming → Wave 2 empathy → Wave 3 helping |\n| **Main Strength / Limit** | Huge **cross-cultural population validity**, but cross-sectional (cannot prove temporal order) | Establishes **temporal direction** over 2 years, though still non-experimental self-report |",
      diagram: `<svg viewBox="0 0 660 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Longitudinal mediation pathway from Prot et al 2014 Singapore study alongside Hoffman inductive parenting pathway"><rect x="8" y="8" width="644" height="189" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="330" y="30" font-family="sans-serif" font-size="13.5" font-weight="bold" text-anchor="middle" fill="#0f172a">Socialising Empathy &amp; Helping: Family + Prosocial Media (Prot et al., 2014)</text><g font-family="sans-serif" text-anchor="middle"><rect x="24" y="48" width="176" height="58" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/><text x="112" y="68" font-size="10.5" font-weight="bold" fill="#4c1d95">Wave 1: Prosocial Games</text><text x="112" y="83" font-size="9.5" fill="#5b21b6">Prot et al. (2014): 3,034</text><text x="112" y="96" font-size="9.5" fill="#5b21b6">Singapore youths + 7 nations</text><rect x="24" y="122" width="176" height="58" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="142" font-size="10.5" font-weight="bold" fill="#1e3a8a">Warmth + Inductive</text><text x="112" y="156" font-size="10.5" font-weight="bold" fill="#1e3a8a">Reasoning &amp; Modelling</text><text x="112" y="170" font-size="9.5" fill="#1e40af">Hoffman (2000) parenting</text><line x1="200" y1="77" x2="246" y2="106" stroke="#7c3aed" stroke-width="2"/><line x1="200" y1="151" x2="246" y2="122" stroke="#2563eb" stroke-width="2"/><rect x="248" y="82" width="172" height="64" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/><text x="334" y="104" font-size="11.5" font-weight="bold" fill="#78350f">Wave 2 Mediator:</text><text x="334" y="120" font-size="11.5" font-weight="bold" fill="#78350f">TRAIT EMPATHY</text><text x="334" y="136" font-size="9.5" fill="#92400e">Perspective-taking &amp; scripts</text><line x1="420" y1="114" x2="462" y2="114" stroke="#16a34a" stroke-width="2.5"/><polygon points="462,114 454,109 454,119" fill="#16a34a"/><rect x="464" y="82" width="172" height="64" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/><text x="550" y="104" font-size="11.5" font-weight="bold" fill="#14532d">Wave 3 Outcome:</text><text x="550" y="120" font-size="11.5" font-weight="bold" fill="#14532d">PROSOCIAL HELPING</text><text x="550" y="136" font-size="9.5" fill="#166534">Sustained internalised care</text></g></svg>`,
      diagramCaption:
        "Both inductive parenting (Hoffman) and prosocial media (Prot et al., 2014) build long-term helping via the same psychological bridge: perspective-taking and trait empathy.",
      workedExamples: [
        {
          title: "Evaluating Prot et al. (2014) on CIE 0266 Paper 1",
          problem:
            "A newspaper claims: 'Prot et al. (2014) proved that empathetic children simply choose kinder video games — the games themselves don't change behaviour.' Use Study 2 of Prot et al. (2014) to evaluate this claim.",
          steps: [
            "Acknowledge the bidirectional / reverse-causation concern: in cross-sectional surveys (like Study 1 alone), already-kind children may indeed prefer prosocial games (selection effect).",
            "Refute 'selection only' using **Study 2's 3-wave longitudinal design** (3,034 Singaporean youths over 2 years): researchers statistically **controlled for Wave 1 baseline empathy and helping**, yet Wave 1 prosocial game play *still* predicted *increases* in Wave 2 empathy and Wave 3 helping.",
            "Balanced methodological nuance: Because Study 2 was still a **non-experimental longitudinal survey** using self-report scales (not random allocation to game conditions), unmeasured third variables and social desirability bias cannot be 100% ruled out without lab/field experiments (e.g. Gentile et al., 2009).",
          ],
          answer: "Study 2 refutes pure reverse causation by controlling for Wave 1 baseline helping across 3,034 Singaporean youths over 2 years, though non-experimental self-report still stops short of strict lab causation.",
          yourTurn: {
            question:
              "How many countries were surveyed in Study 1 of Prot et al.'s (2014) cross-cultural investigation of prosocial media?",
            answer: { type: "number", value: 7 },
            solution: "Study 1 surveyed 11,783 youths across 7 countries (Australia, China, Croatia, Germany, Japan, Romania, and the USA).",
          },
        },
      ],
      keyPoints: [
        "**Inductive discipline (Hoffman)**: explaining how actions impact others' feelings builds internalised empathy and perspective-taking, outperforming **power assertion** and **love withdrawal**.",
        "**Parental modelling** works best when parents *practise* helping rather than merely preaching it, and assign meaningful household care roles.",
        "**Prot et al. (2014)**: **11,783** youths across **7 countries** (Study 1) + **3,034 Singaporean youths** over **2 years / 3 waves** (Study 2) showed prosocial media increases **empathy**, which mediates long-term **prosocial helping**.",
      ],
      whyItWorks:
        "Why do video games often show *stronger* prosocial learning effects than passive TV? In a cooperative video game, the player **actively enacts** helping choices and receives **immediate positive reinforcement** (points, grateful characters, team victory) — combining Bandura's observational scripts with Skinner's operant reinforcement!",
      strategies: ["Contrast inductive discipline vs power assertion", "Cite both Study 1 (7 countries) & Study 2 (Singapore longitudinal) of Prot et al.", "Distinguish longitudinal directionality from experimental causation"],
      thinkDeeper:
        "If Tanglin Trust School wanted to design an evidence-based Year 7 onboarding programme to reduce bystander silence and boost peer kindness, which **three** ingredients from Latané & Darley, Hoffman, and Prot et al. would you combine — and how would you measure whether real behaviour (not just self-report!) changed?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Prosocial behaviour vs Altruism",
        back: "**Prosocial behaviour**: any voluntary act intended to benefit another person (regardless of motive). **Altruism**: prosocial helping motivated *purely* by unselfish concern for another's welfare at personal cost, with zero expected external or internal reward.",
      },
      {
        front: "Latané & Darley (1968) — Intercom Seizure Study results",
        back: "Helping within 6 min fell as perceived group size grew: **85%** (alone with victim, 52 s) → **62%** (1 other bystander, 93 s) → **31%** (4 other bystanders, 166 s).",
      },
      {
        front: "Latané & Darley's (1970) 5-Step Cognitive Decision Model",
        back: "1. **Notice** event → 2. **Interpret** as emergency → 3. **Assume personal responsibility** → 4. **Know how** to help (competence) → 5. **Implement** help.",
      },
      {
        front: "Pluralistic ignorance vs Diffusion of responsibility",
        back: "**Pluralistic ignorance** (Step 2): misinterpreting an ambiguous emergency as safe because other bystanders look calm. **Diffusion of responsibility** (Step 3): dividing personal duty to act across {{n}} witnesses so each feels less responsible.",
      },
      {
        front: "Piliavin et al. (1969) — Subway Samaritan key results",
        back: "Across 103 NYC express subway trials (~4,450 passengers): **95%** (62/65) spontaneous help before 70 s for **ill cane** victim (median 5 s) vs **50%** (19/38) for **drunk** victim (median 109 s); **zero diffusion of responsibility**; **90%** of first helpers were male.",
      },
      {
        front: "Piliavin's Arousal–Cost–Reward Model",
        back: "Emergencies cause unpleasant **physiological arousal**; bystanders choose the lowest-cost way to reduce arousal by weighing **costs of helping** (danger, effort, disgust) against **costs of not helping** (guilt, empathic distress, blame).",
      },
      {
        front: "Cognitive reinterpretation (Piliavin)",
        back: "When *both* cost of helping and cost of not helping are high, bystanders reduce guilt without intervening by **redefining the situation** (e.g. 'It is not serious' or 'The drunk victim brought it on himself').",
      },
      {
        front: "Levine et al. (2001) — Cross-cultural helping in 23 cities",
        back: "Tested dropped pen, hurt-leg magazines, and blind street-crossing in 23 cities: Latin American ***simpatía*** cities helped most (**Rio ~93%, San José ~91%**), while fast-walking, high-GDP cities helped least (**Kuala Lumpur ~40%, NYC ~45%, Singapore ~48%**).",
      },
      {
        front: "Kin Selection & Hamilton's Rule (1964)",
        back: "Costly helping evolves via **inclusive fitness** when `{{r * B > C}}` (`r` = genetic relatedness: **0.5** parent/child/full sibling, **0.25** grandparent/aunt/half-sibling, **0.125** first cousin; `B` = benefit to kin; `C` = cost to helper).",
      },
      {
        front: "Reciprocal Altruism (Trivers, 1971)",
        back: "Evolutionary explanation for helping **non-relatives (`r = 0`)**: natural selection favours helping strangers/peers when repeated interactions make returned future help likely (`B > C`) and **cheaters** are detected and shunned.",
      },
      {
        front: "Rushton et al. (1986) — Twin Study of Altruism & Empathy",
        back: "Self-report scales from **573 adult twin pairs** (296 MZ, 179 same-sex DZ): MZ correlations (`~0.53–0.54`) were roughly double DZ (`~0.20–0.25`), estimating **~50% genetic heritability**, ~0% shared family environment, and ~50% unique non-shared environment.",
      },
      {
        front: "Batson's Empathy–Altruism Hypothesis & 'Elaine' study (1981)",
        back: "**Empathic concern** (other-focused) drives true altruism (**82%** helped even in **easy escape**), whereas **personal distress** (self-focused anxiety) drives egoistic escape (only **18%** helped in easy escape vs **64%** in difficult escape).",
      },
      {
        front: "Social Learning Theory of Prosocial Behaviour (Bandura, 1977)",
        back: "Helping is learned via **Attention, Retention, Motor reproduction, Motivation**, **role-model imitation** (Bryan & Test 1967 flat-tyre model), and **vicarious reinforcement** (seeing models praised/rewarded for helping).",
      },
      {
        front: "Norm of Reciprocity vs Norm of Social Responsibility",
        back: "**Reciprocity norm** (Gouldner): help those who have helped you. **Social responsibility norm** (Berkowitz): moral duty to help dependent people in need who cannot help themselves.",
      },
      {
        front: "Inductive Discipline vs Power Assertion (Hoffman, 2000)",
        back: "**Inductive discipline**: explaining how a child's actions affect another person's feelings → builds perspective-taking and internalised empathy. **Power assertion**: threats/punishment → breeds fear and external compliance only when watched.",
      },
      {
        front: "Prot et al. (2014) — Prosocial Media Study 1 & Study 2",
        back: "**Study 1**: **11,783** youths in **7 countries** — prosocial media correlated with higher empathy & helping universally. **Study 2**: **3,034 Singaporean youths** over **2 years (3 waves)** — Wave 1 prosocial gaming → Wave 2 empathy → Wave 3 helping.",
      },
    ],
    mustKnow: [
      "Distinguish **prosocial behaviour** (any voluntary helpful action) from **altruism** (unselfish helping at personal cost with no expected internal or external gain).",
      "Describe **Latané & Darley's (1968)** intercom seizure procedure, IV, DVs, and exact results (**85% → 62% → 31%**), and apply all **5 steps** of their cognitive decision model.",
      "Differentiate **pluralistic ignorance** (Step 2: misreading calm others in ambiguous situations) from **diffusion of responsibility** (Step 3: dividing obligation across bystanders).",
      "Describe and evaluate **Piliavin et al.'s (1969)** New York subway field experiment (**95% cane vs 50% drunk** before 70 s; no diffusion of responsibility) and apply the **Arousal–Cost–Reward Matrix**.",
      "Explain how situational time pressure (Darley & Batson) and cultural ***simpatía*** vs economic pace (**Levine et al., 2001** across 23 cities) modify helping rates.",
      "Apply **kin selection** (`{{r * B > C}}`), **reciprocal altruism**, and **Rushton et al.'s (1986)** twin findings (573 pairs; ~50% genetic heritability) — and evaluate biological reductionism & self-report bias.",
      "Contrast **Batson's Empathy–Altruism Hypothesis** (empathic concern vs personal distress in easy/difficult escape) with **Bandura's Social Learning Theory** (modelling, vicarious reinforcement, social norms).",
      "Explain how **parental warmth + inductive discipline** (Hoffman) and **prosocial video games/media** (**Prot et al., 2014** 7-country + 2-year Singapore longitudinal study) foster empathy and helping.",
      "Compare **laboratory experiments** (Latané & Darley), **field experiments** (Piliavin et al.), and **correlational/longitudinal self-reports** (Rushton et al.; Prot et al.) on internal validity, ecological validity, and ethics.",
    ],
    misconceptions: [
      {
        wrong: "Writing 'Prosocial behaviour and altruism mean the exact same thing — helping someone else.'",
        right: "Write: '**Prosocial behaviour** is the umbrella term for any voluntary act intended to benefit others (including egoistic helping for praise or guilt relief), whereas **altruism** is helping motivated purely by concern for the other's welfare at a personal cost with no expected reward.'",
      },
      {
        wrong: "Confusing pluralistic ignorance with diffusion of responsibility: 'Pluralistic ignorance is when everyone assumes someone else will call 999.'",
        right: "Write: 'Assuming someone else will act is **diffusion of responsibility** (Step 3). **Pluralistic ignorance** occurs earlier at **Step 2**, when bystanders look at others' calm reactions in an ambiguous situation and conclude it is *not* an emergency.'",
      },
      {
        wrong: "Writing 'Piliavin et al. (1969) supported Latané & Darley by showing diffusion of responsibility on crowded trains.'",
        right: "Write: 'Piliavin et al. (1969) **refuted** diffusion of responsibility in clear face-to-face emergencies: larger subway groups actually helped the cane victim *faster* than smaller groups because witnesses could see the victim and could not escape arousal.'",
      },
      {
        wrong: "Calling Piliavin's Arousal–Cost–Reward Model an 'altruistic theory of helping'.",
        right: "Write: 'Piliavin's Cost–Reward Model is an **egoistic** explanation: bystanders help (or reinterpret the victim as undeserving) primarily to **reduce their own unpleasant physiological arousal** at the lowest personal cost.'",
      },
      {
        wrong: "Writing 'Rushton et al. (1986) observed twins helping strangers in a lab experiment and proved altruism is 100% genetic.'",
        right: "Write: 'Rushton et al. (1986) was a **non-experimental twin correlation** using **postal self-report questionnaires** (573 pairs), finding **~50% genetic heritability** and **~50% unique non-shared environment** — never 100% genetic!'",
      },
      {
        wrong: "Writing 'In Batson's theory, personal distress makes people help even when they can easily walk away.'",
        right: "Write: 'Self-focused **personal distress** produces egoistic escape when leaving is easy (only 18% helped in easy escape); other-focused **empathic concern** drives true altruism even when escape is easy (82% helped).'",
      },
      {
        wrong: "Writing 'Prot et al. (2014) ran a laboratory experiment that proved prosocial games cause helping.'",
        right: "Write: 'Prot et al. (2014) used a **7-country cross-sectional survey** (11,783 youths) and a **2-year 3-wave longitudinal survey** in Singapore (3,034 youths) — establishing temporal direction via empathy mediation, but not experimental manipulation.'",
      },
      {
        wrong: "Writing 'Strict punishment (power assertion) is the best parenting method to make children intrinsically kind.'",
        right: "Write: 'Hoffman showed **inductive discipline** (explaining how actions affect others' feelings) builds perspective-taking and internalised prosociality, whereas **power assertion** produces only external compliance out of fear of punishment.'",
      },
    ],
    examMistakes: [
      "Naming Latané & Darley's 5 steps out of sequence or mixing up Step 2 (**pluralistic ignorance**) and Step 3 (**diffusion of responsibility**) in novel scenario questions.",
      "Giving generic evaluation ('low ecological validity') without **linking to the specific procedure** (e.g. 'hearing an audio recording over cubicle headphones in Latané & Darley lacks the visual cues of a real street collapse').",
      "Analysing only the **cost of helping** in Piliavin questions and forgetting the second axis of the matrix: the **cost of not helping** (empathy, guilt, public shame).",
      "Forgetting that Piliavin et al. (1969) raised three distinct **ethical breaches** in a field experiment: lack of **informed consent**, inability to **withdraw** from a moving express train, and impossibility of **debriefing** 4,450 commuters.",
      "Stating Hamilton's genetic relatedness `r` wrongly for cousins (`r = 0.125`, NOT `0.25`) or claiming kin selection explains helping unrelated strangers (that requires **reciprocal altruism** or social norms!).",
      "Failing to apply CIE 0266 **AO2 stem details** — when a question names 'Tariq walking past a slumped cyclist while late for an exam', explicitly link *Tariq*, *time pressure*, and *the cyclist* in every mark point!",
      "Confusing **direct positive reinforcement** (the helper is praised) with **vicarious reinforcement** (the observer sees a *role model* get praised for helping).",
      "Describing Prot et al. (2014) without naming **empathy** as the psychological **mediator** linking prosocial media exposure to helping behaviour.",
    ],
    mnemonics: [
      {
        topic: "Latané & Darley's 5-Step Cognitive Decision Model",
        device: "N-I-R-K-I — 'Never Ignore Real Kind Impulse'",
        explanation: "1. **N**otice the event → 2. **I**nterpret as emergency (beat pluralistic ignorance) → 3. **R**esponsibility assumed (beat diffusion) → 4. **K**now how to help (competence) → 5. **I**mplement action.",
      },
      {
        topic: "Piliavin et al. (1969) Subway Key Numbers",
        device: "'Cane 95 in 5; Drunk 50 in 109'",
        explanation: "**Cane** (ill) victim received **95%** spontaneous help in a median **5 seconds**; **Drunk** victim received **50%** spontaneous help in a median **109 seconds**.",
      },
      {
        topic: "Bandura's 4 Mediational Processes in Social Learning",
        device: "A-R-M-M — 'Always Model Real Mercy'",
        explanation: "**A**ttention (notice helpful model) → **R**etention (store prosocial script) → **M**otor reproduction (have skill to perform help) → **M**otivation (direct or vicarious reinforcement).",
      },
      {
        topic: "Hamilton's Relatedness Fractions (r)",
        device: "Halve Each Step Outward: 1 → 1/2 → 1/4 → 1/8",
        explanation: "**1.0** MZ twin → **0.5** parent / child / full sibling → **0.25** grandparent / aunt-uncle / half-sibling → **0.125** first cousin (`r × B > C`).",
      },
    ],
    realWorld: [
      {
        title: "Singapore SCDF myResponder App",
        detail: "When a 995 cardiac arrest call comes in, Singapore's *myResponder* app alerts trained community first-responders within 400 metres and marks the nearest AED — simultaneously eliminating Step 1 (noticing), Step 2 (ambiguity), Step 3 (targeted alert cuts diffusion), and Step 4 (CPR/AED guidance)!",
        emoji: "🚑",
      },
      {
        title: "First-Aid Training: 'Point and Assign'",
        detail: "Red Cross and St John Ambulance courses explicitly train rescuers never to shout 'Somebody call an ambulance!' into a crowd. Pointing at one person ('You in the green jacket, call 995 and come back to confirm!') assigns 100% responsibility to one individual.",
        emoji: "🫵",
      },
      {
        title: "Prosocial Game Design (Sky: Children of the Light & Journey)",
        detail: "Modern cooperative games like *Sky: Children of the Light* reward players only when they share light and guide strangers through storms — applying Prot et al.'s (2014) General Learning Model to rehearse empathy scripts.",
        emoji: "🎮",
      },
      {
        title: "Charity Reciprocity Nudges",
        detail: "Charities that enclose a small unconditional gift (a pen, greeting card, or wildflower seeds) nearly double donation rates by triggering Gouldner's **Norm of Reciprocity**.",
        emoji: "💌",
      },
      {
        title: "Restorative Justice in Schools",
        detail: "Many international schools replace punitive detentions (**power assertion**) with restorative circles where students hear how peers were affected — directly applying Hoffman's **inductive reasoning** to build lasting empathy.",
        emoji: "🏫",
      },
    ],
    videos: [
      {
        title: "The Bystander Effect: Latané & Darley (1968) Explained",
        channel: "CrashCourse Psychology",
        url: "https://www.youtube.com/results?search_query=latane+and+darley+1968+bystander+effect+seizure+experiment+psychology",
      },
      {
        title: "Piliavin et al. (1969) Subway Samaritan Field Experiment & Cost-Reward",
        channel: "Cambridge Psychology Revision",
        url: "https://www.youtube.com/results?search_query=piliavin+1969+subway+samaritan+study+cost+reward+model+psychology",
      },
      {
        title: "Kin Selection, Hamilton's Rule & Reciprocal Altruism",
        channel: "Bozeman Science / Evolutionary Psychology",
        url: "https://www.youtube.com/results?search_query=kin+selection+hamiltons+rule+reciprocal+altruism+rushton+twin+study",
      },
      {
        title: "Batson's Empathy-Altruism Hypothesis vs Egoism",
        channel: "Khan Academy / Social Psychology",
        url: "https://www.youtube.com/results?search_query=batson+empathy+altruism+hypothesis+elaine+experiment+psychology",
      },
    ],
    formulas: [
      {
        name: "Prosocial Behaviour vs Altruism",
        formula: "Prosocial = any voluntary act intended to help; Altruism = pure other-focused helping with 0 self-reward",
        note: "All altruism is prosocial, but egoistic prosocial acts (helping for praise/guilt-relief) are NOT altruistic.",
      },
      {
        name: "Latané & Darley (1968) Seizure Study",
        formula: "Alone (0 others): 85% (52 s) | 1 other: 62% (93 s) | 4 others: 31% (166 s)",
        note: "Lab intercom experiment; isolated cubicles proved diffusion of responsibility without visual cues.",
      },
      {
        name: "Individual Share of Responsibility",
        formula: "{{100 / n}}% per bystander (where {{n}} = number of witnesses able to help)",
        note: "Explains Step 3 blockage in Latané & Darley's 5-step decision model.",
      },
      {
        name: "Latané & Darley (1970) 5-Step Model",
        formula: "1. Notice → 2. Interpret → 3. Responsibility → 4. Know how → 5. Implement",
        note: "Pluralistic ignorance blocks Step 2; diffusion of responsibility blocks Step 3; audience inhibition blocks Step 5.",
      },
      {
        name: "Piliavin et al. (1969) Subway Study",
        formula: "Cane: {{62/65}} = 95% (median 5 s) | Drunk: {{19/38}} = 50% (median 109 s)",
        note: "Field experiment (~4,450 NYC commuters, 103 trials); zero diffusion of responsibility; 90% first helpers male.",
      },
      {
        name: "Arousal–Cost–Reward Matrix (Piliavin)",
        formula: "Low help cost + High non-help cost → Direct help; Both high → Indirect help / Reinterpret",
        note: "Egoistic model: bystanders act to reduce unpleasant physiological arousal.",
      },
      {
        name: "Levine et al. (2001) 23-City Helping",
        formula: "High: Rio (~93%), San José (~91%) | Low: KL (~40%), NYC (~45%), Singapore (~48%)",
        note: "Cultural simpatía boosted helping; high economic productivity & fast walking pace lowered helping.",
      },
      {
        name: "Hamilton's Rule (Kin Selection, 1964)",
        formula: "{{r * B > C}}",
        note: "r = relatedness (0.5 sibling/parent/child, 0.25 aunt/grandparent, 0.125 first cousin); B = benefit; C = cost.",
      },
      {
        name: "Rushton et al. (1986) Twin Study",
        formula: "573 twin pairs: MZ r ≈ 0.53 vs DZ r ≈ 0.25 → ~50% genetic, ~50% unique environment",
        note: "Postal self-report scales of altruism & empathy; ~0% shared family environment variance.",
      },
      {
        name: "Batson et al. (1981) Empathy–Altruism",
        formula: "Easy escape: High empathy 82% vs Low empathy 18% | Hard escape: 91% vs 64%",
        note: "Empathic concern → true altruism; Personal distress → egoistic escape when easy.",
      },
      {
        name: "Hoffman's Inductive Discipline",
        formula: "Explain victim's feelings + causal impact → perspective-taking → internalised empathy",
        note: "Outperforms power assertion (fear/external compliance) and love withdrawal (anxiety).",
      },
      {
        name: "Prot et al. (2014) Prosocial Media",
        formula: "Study 1: 11,783 youths (7 nations) | Study 2: 3,034 Singapore youths (3 waves, 2 yrs)",
        note: "Prosocial media/games → ↑ trait empathy (mediator) → ↑ prosocial helping across cultures.",
      },
    ],
  },
};
