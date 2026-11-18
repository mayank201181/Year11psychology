import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "motivation-and-needs",
  title: "Topic 5: Motivation & Needs",
  strand: "Paper 2: Perception, Development & Non-Experimental",
  icon: "🔥",
  summary:
    "Why we strive, persist or quit: from classroom token economies and Maslow's pyramid to Self-Determination Theory, biological homeostasis, nostalgic ads and SMART goals.",
  intro:
    "Why will a student spend four unpaid hours perfecting a guitar riff yet procrastinate over a ten-minute worksheet — and why can paying someone for a hobby destroy their love for it? In Cambridge IGCSE Psychology (0266 Paper 2), **motivation** refers to the internal physiological and psychological processes, alongside external incentives, that **initiate, direct and sustain** goal-directed behaviour. Across these five sections you will compare behaviourist reinforcement, humanistic needs hierarchies, Deci and Ryan's Self-Determination Theory, biological drive-reduction, psychodynamic nostalgia in marketing, and cognitive SMART goal-setting.",
  guide: [
    {
      id: "intrinsic-extrinsic-reinforcement",
      heading: "Intrinsic vs Extrinsic Motivation & Positive Reinforcement",
      discovery: {
        problem:
          "Nursery children already love drawing with felt-tip pens during free play. Researchers promise half the children a shiny 'Good Player Award' certificate with a gold seal for drawing, while the other half draw with no reward mentioned. Two weeks later, the pens are put out again with no rewards offered. Which group spends **less** time drawing now — and why?",
        idea:
          "Surprisingly, the **rewarded** children draw roughly half as much as before! Promising a tangible external prize shifted their perceived reason for drawing from *'because I love it'* (**intrinsic**) to *'because I get a certificate'* (**extrinsic**). Once the prize disappeared, so did the reason to draw — a classic cognitive-behavioural trap called the **overjustification effect**.",
      },
      body:
        "Psychologists distinguish two fundamental sources of motivation based on the **locus of causality** (where the reason for acting comes from):\n\n- **Intrinsic motivation**: performing an activity for its **inherent satisfaction, curiosity, enjoyment or personal mastery**, with no separable external consequence (e.g. solving a puzzle because the challenge itself feels rewarding).\n- **Extrinsic motivation**: performing an activity to **obtain a separable external outcome** (e.g. money, house points, trophies, grades) or to **avoid punishment or guilt**.\n\n**Behaviourist Positive Reinforcement & Classroom Token Economies**\nFrom B.F. Skinner's operant conditioning perspective, behaviour is shaped by its consequences. **Positive reinforcement** occurs when adding a desirable stimulus immediately after a target behaviour increases the future frequency of that behaviour. In schools and clinics, this is formalised as a **token economy**:\n\n1. Target behaviours are **operationalised** clearly (e.g. raising a hand to answer a seminar question).\n2. Learners immediately receive **tokens** (**secondary reinforcers** such as stars, wooden chips or digital points that have no biological value on their own).\n3. Tokens are later exchanged for **backup reinforcers** (**primary** or valued rewards such as extra credit, privileges or prizes).\n\n**Compulsory Named Study — Boniecki & Moore (2003): Breaking the Silence**\n- **Aim**: To test whether a classroom token economy using positive reinforcement increases active student participation in a large university psychology lecture.\n- **Participants & Design**: **63 undergraduates** in an introductory psychology course studied in a single-group **A-B-A reversal field experiment** across 24 class sessions (8 weeks).\n- **Procedure**: Every class included 6 instructor-posed questions. Observers recorded two operationalised DVs: the **percentage of directed questions answered** and **response latency** (seconds before a hand was raised). In **Phase A1 (Baseline, 8 classes)**, no rewards were offered. In **Phase B (Token intervention, 8 classes)**, the first student to raise their hand and answer received a wooden token redeemable for **1 point of extra exam credit**. In **Phase A2 (Withdrawal, 8 classes)**, tokens were removed.\n- **Results**: Directed participation **more than doubled** during the token phase (rising from roughly **48%** of questions answered at baseline to **98–100%**, while overall volunteer comments per minute more than doubled), and **response latency dropped sharply** from about **4.4 seconds** to **1.5 seconds**. Non-directed spontaneous questions also rose. When tokens ceased in Phase A2, participation and latency **returned to baseline levels**.\n- **Conclusion**: Immediate positive reinforcement via a token economy rapidly and reliably boosts classroom participation, though maintenance fades once external contingencies are withdrawn.\n\n**Praise vs Tangible Rewards & The Overjustification Effect**\nWhy did participation drop back in Phase A2? According to **Lepper, Greene & Nisbett (1973)** and **Deci (1971)**, offering an **expected, tangible extrinsic reward** for an activity someone *already* enjoys triggers the **overjustification effect**: the learner attributes their behaviour to the external prize rather than internal interest, **crowding out** intrinsic motivation. Crucially, **unexpected rewards** and **sincere verbal praise focused on effort and competence** (*informational feedback*) usually **enhance** rather than undermine intrinsic motivation.\n\n| Dimension | Intrinsic Motivation | Extrinsic Motivation (Token / Tangible) |\n|---|---|---|\n| **Driving source** | Internal enjoyment, curiosity, mastery | External reward, grade, pay or avoiding penalty |\n| **Speed of behaviour change** | Gradual; requires interest & autonomy | Rapid onset for dull or avoided tasks (Boniecki & Moore 2003) |\n| **Long-term persistence** | High even when nobody is watching | Drops sharply once tokens stop (A-B-A reversal) |\n| **Main risk** | Hard to spark if task feels meaningless | **Overjustification effect** crowds out existing passion |",
      diagram: `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A-B-A reversal graph of Boniecki and Moore 2003 classroom token economy alongside the overjustification pathway"><rect x="8" y="8" width="624" height="224" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="195" y="32" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Boniecki &amp; Moore (2003) A-B-A Token Reversal</text><line x1="48" y1="190" x2="345" y2="190" stroke="#475569" stroke-width="1.5"/><line x1="48" y1="50" x2="48" y2="190" stroke="#475569" stroke-width="1.5"/><line x1="147" y1="50" x2="147" y2="190" stroke="#94a3b8" stroke-dasharray="4 4"/><line x1="246" y1="50" x2="246" y2="190" stroke="#94a3b8" stroke-dasharray="4 4"/><text x="97" y="64" font-size="10" font-weight="700" text-anchor="middle" fill="#475569" font-family="sans-serif">A1: Baseline</text><text x="196" y="64" font-size="10" font-weight="700" text-anchor="middle" fill="#0284c7" font-family="sans-serif">B: Tokens (+1 pt)</text><text x="295" y="64" font-size="10" font-weight="700" text-anchor="middle" fill="#475569" font-family="sans-serif">A2: Return</text><polyline points="62,142 97,138 132,144 162,76 196,72 230,74 262,139 295,145 330,143" fill="none" stroke="#0284c7" stroke-width="3"/><circle cx="97" cy="138" r="4" fill="#0284c7"/><circle cx="196" cy="72" r="4" fill="#0284c7"/><circle cx="295" cy="145" r="4" fill="#0284c7"/><text x="42" y="76" font-size="10" text-anchor="end" fill="#334155" font-family="sans-serif">High</text><text x="42" y="144" font-size="10" text-anchor="end" fill="#334155" font-family="sans-serif">Low</text><text x="196" y="212" font-size="11" text-anchor="middle" fill="#334155" font-family="sans-serif">Participation surges with tokens, drops on removal</text><rect x="372" y="26" width="244" height="190" rx="10" fill="#fff7ed" stroke="#fdba74"/><text x="494" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#9a3412" font-family="sans-serif">Overjustification Effect</text><rect x="392" y="60" width="204" height="30" rx="6" fill="#ffedd5" stroke="#fb923c"/><text x="494" y="79" font-size="11" text-anchor="middle" fill="#7c2d12" font-family="sans-serif">1. High initial intrinsic joy</text><text x="494" y="104" font-size="12" text-anchor="middle" fill="#ea580c" font-family="sans-serif">↓ Expected tangible prize</text><rect x="392" y="112" width="204" height="34" rx="6" fill="#ffedd5" stroke="#fb923c"/><text x="494" y="133" font-size="11" text-anchor="middle" fill="#7c2d12" font-family="sans-serif">2. Shift to external attribution</text><text x="494" y="159" font-size="12" text-anchor="middle" fill="#ea580c" font-family="sans-serif">↓ Prize removed</text><rect x="392" y="167" width="204" height="34" rx="6" fill="#fee2e2" stroke="#f87171"/><text x="494" y="188" font-size="11" font-weight="700" text-anchor="middle" fill="#991b1b" font-family="sans-serif">3. Intrinsic interest falls below baseline</text></svg>`,
      diagramCaption:
        "Left: Boniecki & Moore (2003) showed classroom participation doubled under token reinforcement but reverted when tokens stopped. Right: Why tangible rewards can crowd out existing intrinsic interest.",
      workedExamples: [
        {
          title: "Evaluating a school reading-voucher scheme",
          problem:
            "A primary school pays Year 5 pupils $2 book tokens for every novel they finish. Keen readers read more books during Term 1, but in Term 2 (after funding ends) those previously keen readers read fewer books than before Term 1 started. Calculate the percentage drop if a pupil read 8 books per term before the scheme, 12 during Term 1, and 5 in Term 2, and name the psychological effect.",
          steps: [
            "Compare post-reward Term 2 reading (5 books) against original pre-reward baseline (8 books): drop = 8 − 5 = 3 books.",
            "Percentage decrease below baseline = (3 ÷ 8) × 100 = 37.5%.",
            "Because an expected tangible reward undermined pre-existing intrinsic enjoyment once withdrawn, this is the **overjustification effect**.",
          ],
          answer: "37.5% decrease below baseline — caused by the overjustification effect.",
          yourTurn: {
            question:
              "In a replication of Boniecki & Moore (2003), mean response latency falls from 5.0 seconds in Baseline A1 to 1.8 seconds in Token Phase B. By what percentage did response latency decrease?",
            answer: { type: "number", value: 64 },
            solution:
              "Decrease = 5.0 − 1.8 = 3.2 s. Percentage decrease = (3.2 ÷ 5.0) × 100 = 64%.",
          },
        },
      ],
      keyPoints: [
        "**Intrinsic** = inside the task itself (joy, curiosity); **extrinsic** = separable consequence (tokens, money, grades).",
        "Tokens are **secondary reinforcers** that gain value by being exchangeable for **backup reinforcers**.",
        "**Boniecki & Moore (2003)**: A-B-A reversal with 63 undergraduates; extra-credit tokens doubled participation and cut latency (~4.4 s → ~1.5 s), returning to baseline in A2.",
        "**Overjustification effect**: expected tangible rewards shift attribution outward and reduce intrinsic motivation when removed; informational **verbal praise** protects intrinsic drive.",
      ],
      whyItWorks:
        "Token economies bridge the timing gap in classrooms: an exam grade is weeks away (too delayed to reinforce today's hand-raise), whereas handing over a physical token within two seconds creates an immediate operant contingency.",
      strategies: [
        "Check baseline interest first: use tokens only for initially unappealing tasks, never for hobbies a learner already loves",
        "Cite both phases of A-B-A in exam evaluations: Phase B proves immediate efficacy; Phase A2 exposes reward dependency",
      ],
      thinkDeeper:
        "If Boniecki & Moore's participation returned to baseline in Phase A2, did the tokens trigger the overjustification effect (falling *below* baseline), or simple **extinction** of an operantly conditioned response? How would you tell the two apart on a graph?",
    },
    {
      id: "maslow-hierarchy",
      heading: "Maslow's Hierarchy of Needs",
      discovery: {
        problem:
          "A school launches an inspiring robotics design competition, yet students who arrived without breakfast after an eviction scare at home sit staring blankly at the kit. Why does a brilliant creative opportunity fail to motivate them?",
        idea:
          "Abraham Maslow argued that human needs form a **priority hierarchy**: urgent survival and security deficits (**physiological** and **safety** needs) monopolise attention until met, leaving little psychological bandwidth for higher-level belonging, esteem or creative **self-actualisation**.",
      },
      body:
        "In 1943, **Abraham Maslow** proposed a **humanistic** theory of motivation rejecting both rigid behaviourism (humans as reward-chasing rats) and deterministic psychoanalysis. Instead, Maslow viewed people as holistic, conscious agents striving toward personal growth through a **five-tier Hierarchy of Needs**.\n\n**Deficiency Needs (D-Needs: Tiers 1–4) vs Growth Need (B-Need: Tier 5)**\nMaslow divided the five levels into two qualitatively different motivational systems:\n\n1. **Physiological needs** (*D-need, Tier 1 — Base*): Biological survival requirements — food, water, oxygen, sleep, warmth and homeostasis.\n2. **Safety needs** (*D-need, Tier 2*): Physical security, shelter, predictable routines, financial/job stability, health and freedom from fear or chaos.\n3. **Love and belonging needs** (*D-need, Tier 3*): Affection, family bonds, friendship, romantic intimacy and acceptance within peer or cultural groups.\n4. **Esteem needs** (*D-need, Tier 4*): Both *internal* self-respect (mastery, competence, independence) and *external* recognition (status, respect, appreciation from others).\n5. **Self-actualisation** (*Being / Growth B-need, Tier 5 — Apex*): Realising one's full unique potential — creativity, moral purpose, personal growth and **peak experiences** of deep fulfilment.\n\n**How D-Needs and B-Needs Differ**\n- **Deficiency (D) needs** arise from *deprivation*: the hungrier or lonelier you feel, the stronger the tension, and **once satisfied, motivation to seek more subsides** (eating a full meal switches off hunger).\n- **Growth / Being (B) needs** do **not** stem from a lack; engaging in self-actualisation (e.g. composing music, scientific inquiry, mentoring others) **sustains or intensifies** the desire to keep growing.\n\n| Tier | Category | Everyday School / Workplace Examples | Consequence if Unmet |\n|---|---|---|---|\n| **5. Self-actualisation** | Growth (B-need) | Pursuing original art, autonomous research, ethical leadership | Restlessness; feeling unfulfilled despite comfort |\n| **4. Esteem** | Deficiency (D-need) | Merit awards, mastering difficult skills, job promotion | Feelings of inferiority, helplessness, low confidence |\n| **3. Love & belonging** | Deficiency (D-need) | Supportive tutor group, inclusive team culture, close friends | Loneliness, social anxiety, alienation |\n| **2. Safety** | Deficiency (D-need) | Anti-bullying policy, safe housing, job contract security | Chronic hypervigilance, fear, inability to focus |\n| **1. Physiological** | Deficiency (D-need) | School breakfast clubs, water breaks, adequate sleep | Physical exhaustion; survival overrides learning |\n\n**CIE 0266 Evaluation of Maslow's Hierarchy**\n- **Holistic & practical**: Recognises whole-person wellbeing; directly inspired **school breakfast clubs**, pastoral safeguarding and employee welfare before demanding academic or creative excellence.\n- **Non-sequential real-world exceptions**: People frequently pursue higher tiers while lower tiers are deprived — e.g. impoverished artists (*Van Gogh*), political hunger strikers (*Mahatma Gandhi*), or mountaineers risking physical safety for self-actualisation. **Tay & Diener (2011)** surveyed **60,865 participants across 123 countries** and found that while universal human needs exist, they operate **in parallel** rather than strict bottom-up lockstep (people still gain wellbeing from love and mastery even when basic needs are insecure).\n- **Cultural ethnocentrism (Individualism bias)**: Placing *individual* **self-actualisation** at the summit reflects Western **individualist** values; **Nevis (1983)** noted that in **collectivist** societies (such as China), **social belonging and societal contribution** sit at the foundation and pinnacle rather than individualistic self-fulfilment.\n- **Vague operationalisation**: Concepts like *'self-actualisation'* and *'peak experiences'* are subjective and difficult to measure falsifiably in controlled experiments.",
      diagram: `<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maslow five-tier hierarchy of needs pyramid contrasting Tiers 1 to 4 Deficiency needs with Tier 5 Growth need"><rect x="8" y="8" width="624" height="234" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><polygon points="270,22 335,62 205,62" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/><polygon points="205,66 335,66 375,106 165,106" fill="#ddd6fe" stroke="#7c3aed" stroke-width="1.5"/><polygon points="165,110 375,110 415,150 125,150" fill="#fbcfe8" stroke="#db2777" stroke-width="1.5"/><polygon points="125,154 415,154 455,194 85,194" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/><polygon points="85,198 455,198 495,234 45,234" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/><text x="270" y="54" font-size="11" font-weight="700" text-anchor="middle" fill="#713f12" font-family="sans-serif">5. Self-Actualisation</text><text x="270" y="91" font-size="12" font-weight="700" text-anchor="middle" fill="#4c1d95" font-family="sans-serif">4. Esteem (mastery, respect)</text><text x="270" y="135" font-size="12" font-weight="700" text-anchor="middle" fill="#831843" font-family="sans-serif">3. Love &amp; Belonging (friends, family)</text><text x="270" y="179" font-size="12" font-weight="700" text-anchor="middle" fill="#0c4a6e" font-family="sans-serif">2. Safety (shelter, security, stability)</text><text x="270" y="221" font-size="12" font-weight="700" text-anchor="middle" fill="#14532d" font-family="sans-serif">1. Physiological (food, water, sleep)</text><line x1="512" y1="24" x2="524" y2="24" stroke="#ca8a04" stroke-width="2"/><line x1="524" y1="24" x2="524" y2="62" stroke="#ca8a04" stroke-width="2"/><line x1="512" y1="62" x2="524" y2="62" stroke="#ca8a04" stroke-width="2"/><text x="534" y="40" font-size="11" font-weight="700" fill="#854d0e" font-family="sans-serif">Growth (B-Need)</text><text x="534" y="55" font-size="10" fill="#713f12" font-family="sans-serif">Grows with fulfilment</text><line x1="512" y1="70" x2="524" y2="70" stroke="#334155" stroke-width="2"/><line x1="524" y1="70" x2="524" y2="232" stroke="#334155" stroke-width="2"/><line x1="512" y1="232" x2="524" y2="232" stroke="#334155" stroke-width="2"/><text x="534" y="145" font-size="11" font-weight="700" fill="#1e293b" font-family="sans-serif">Deficiency</text><text x="534" y="160" font-size="11" font-weight="700" fill="#1e293b" font-family="sans-serif">(D-Needs 1–4)</text><text x="534" y="176" font-size="10" fill="#475569" font-family="sans-serif">Fade once satisfied</text></svg>`,
      diagramCaption:
        "Maslow's five-tier humanistic pyramid: Tiers 1–4 are deficiency (D) needs driven by deprivation; Tier 5 is a growth (B) need driven by realising potential.",
      workedExamples: [
        {
          title: "Applying & critiquing Maslow on a novel scenario",
          problem:
            "Tariq has just moved to a new city. He has a well-paid remote software job and a secure flat, but knows nobody locally and turns down an invitation to lead an innovative open-source creative project because he feels lonely and isolated. Use Maslow's hierarchy to explain Tariq's lack of motivation for the creative project.",
          steps: [
            "Identify met tiers: Tariq's **physiological** (income for food/living) and **safety** (secure flat, stable job) needs are satisfied.",
            "Pinpoint the unmet deficiency tier: moving to a new city where he knows nobody leaves Tier 3 (**love and belonging**) unfulfilled.",
            "Link to Tier 5: leading an innovative creative project represents **self-actualisation** (or Tier 4 esteem), which Maslow predicts will not strongly motivate Tariq until his lower-level belonging deficit is resolved.",
          ],
          answer:
            "Although Tiers 1–2 are satisfied, Tariq has an unmet Tier 3 love and belonging deficiency need; according to Maslow, lower D-needs take priority before Tier 5 self-actualisation.",
          yourTurn: {
            question:
              "Which specific tier name in Maslow's hierarchy is directly addressed when a factory installs machine guards, fire exits and permanent employment contracts?",
            answer: {
              type: "text",
              accept: ["safety", "safety needs", "safety need", "security", "safety and security"],
            },
            solution:
              "Physical protection from workplace hazards and job security belong to Tier 2: **safety needs**.",
          },
        },
      ],
      keyPoints: [
        "Bottom-to-top order: **Physiological → Safety → Love & Belonging → Esteem → Self-Actualisation**.",
        "**Deficiency (D) needs** (Tiers 1–4) decrease once met; **Growth / Being (B) need** (Tier 5) strengthens as you pursue it.",
        "Critique with **cultural bias** (individualist self-actualisation vs collectivist belonging) and **non-sequential exceptions** (starving artists; Tay & Diener 2011).",
      ],
      whyItWorks:
        "Framing motivation as nested priorities explains why purely cognitive interventions (like study planners or inspiring posters) fail when a learner is sleep-deprived, bullied or socially excluded.",
      strategies: [
        "Always name BOTH met lower tiers AND the exact unmet tier blocking upward progression in CIE scenario answers",
        "Pair every humanistic strength (holistic welfare) with cultural relativism (individualist vs collectivist priorities)",
      ],
      thinkDeeper:
        "Why might social media 'likes' feel addictive even though Maslow classified esteem as a deficiency need that *should* switch off once satisfied?",
    },
    {
      id: "self-determination-theory",
      heading: "Self-Determination Theory (Autonomy, Competence, Relatedness)",
      discovery: {
        problem:
          "Two youth football coaches train equally talented 15-year-olds. Coach X dictates every pass, yells at mistakes, and benchmarks players against rivals. Coach Y lets players co-design drills, praises technical progress, and builds team camaraderie. By next season, 35% of Coach X's squad have quit the sport entirely. Which psychological needs did Coach X crush?",
        idea:
          "Edward Deci and Richard Ryan's **Self-Determination Theory (SDT)** shows that thriving intrinsic persistence requires three universal psychological nutrients — **autonomy** (choice), **competence** (mastery) and **relatedness** (warm connection). Coach X thwarted all three, pushing players toward **amotivation** and dropout.",
      },
      body:
        "Developed by **Edward Deci and Richard Ryan (1985, 2000)**, **Self-Determination Theory (SDT)** is a contemporary macro-theory of human motivation focusing on the *quality* (not merely the quantity) of motivation. Rather than treating extrinsic and intrinsic motivation as a simple on/off switch, SDT places motivation along a **self-determination continuum** from **amotivation** (utter lack of intention) → **controlled regulation** (acting solely for external rewards, punishment avoidance or guilt) → **autonomous / intrinsic motivation** (acting with full personal endorsement and enjoyment).\n\n**The Three Basic Psychological Needs**\nFor autonomous, intrinsic motivation and psychological wellbeing to flourish across cultures, social environments must satisfy **three innate psychological needs**:\n\n1. **Autonomy**: The need to feel **volitional, self-directed and in control of one's own choices**, rather than pressured, coerced or micromanaged (e.g. choosing your own CIE research topic or training focus).\n2. **Competence**: The need to feel **effective, capable and increasingly skilled** when tackling **optimally challenging** tasks, supported by clear, constructive mastery feedback.\n3. **Relatedness**: The need to feel **warmly connected, valued, respected and cared for** within a supportive community of peers, teachers, teammates or family.\n\n| Psychological Need | Supportive Coaching / Classroom Climate | Thwarting (Controlling) Climate |\n|---|---|---|\n| **Autonomy** | Explaining rationales, offering meaningful choice, welcoming student voice | Barking commands, surveillance, coercive threats, rigid deadlines |\n| **Competence** | Optimal challenge + specific mastery feedback on controllable effort | Tasks far too easy/hard; public humiliation or vague criticism |\n| **Relatedness** | Inclusive warmth, active listening, cooperative peer support | Favouritism, cold rejection, pitting teammates against each other |\n\n**Compulsory Named Study — Calvo et al. (2010): Adolescent Sport Persistence vs Dropout**\n- **Aim**: To investigate longitudinally how satisfaction of SDT's basic psychological needs (autonomy, competence, relatedness) and types of motivation predict whether adolescent athletes **persist** in competitive sport or **drop out**.\n- **Participants & Method**: **492 Spanish male adolescent football (soccer) players** aged **13–17 years** completed validated self-report questionnaires measuring perceived autonomy, competence, relatedness and motivational regulation along the SDT continuum. One year later (start of the next season), researchers recorded objective behavioural status: **persisters** (still competing) vs **dropouts** (had quit the sport).\n- **Results**:\n  - Athletes who **dropped out** had reported significantly **lower satisfaction of autonomy and relatedness** (and lower perceived competence support) a year earlier compared with athletes who persisted.\n  - Dropouts scored significantly **higher on amotivation and external (controlled) regulation** and significantly **lower on intrinsic / autonomous motivation**.\n  - Path/regression analyses showed that unsatisfied psychological needs eroded self-determined motivation, directly predicting sport dropout.\n- **Conclusion**: Supporting young athletes' **autonomy, relatedness and competence** nurtures self-determined motivation and protects against adolescent dropout, whereas controlling environments breed amotivation and withdrawal.\n\n**Evaluation of SDT & Calvo et al. (2010)**\n- **High real-world utility**: Gives teachers, coaches and managers three concrete levers (choice, mastery feedback, belonging) to sustain engagement without relying on costly external bribes.\n- **Methodological strengths & limits of Calvo et al. (2010)**: Prospective **longitudinal** tracking over 12 months establishes temporal sequence (low need satisfaction *preceded* quitting), and dropout itself is an objective behavioural measure; however, the sample comprised **only Spanish teenage boys in one team sport**, limiting **population generalisability** to female athletes, individual sports or non-sport settings, and questionnaire scores remain vulnerable to **social desirability bias**.",
      diagram: `<svg viewBox="0 0 640 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deci and Ryan Self-Determination Theory diagram linking Autonomy Competence and Relatedness to Autonomous Motivation and Persistence in Calvo et al 2010"><rect x="8" y="8" width="624" height="219" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="320" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Deci &amp; Ryan Self-Determination Theory &amp; Calvo et al. (2010)</text><rect x="28" y="48" width="168" height="46" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/><text x="112" y="68" font-size="12" font-weight="700" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">Autonomy</text><text x="112" y="84" font-size="10" text-anchor="middle" fill="#1e40af" font-family="sans-serif">Choice &amp; personal ownership</text><rect x="28" y="104" width="168" height="46" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="112" y="124" font-size="12" font-weight="700" text-anchor="middle" fill="#14532d" font-family="sans-serif">Competence</text><text x="112" y="140" font-size="10" text-anchor="middle" fill="#166534" font-family="sans-serif">Optimal challenge &amp; mastery</text><rect x="28" y="160" width="168" height="46" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/><text x="112" y="180" font-size="12" font-weight="700" text-anchor="middle" fill="#831843" font-family="sans-serif">Relatedness</text><text x="112" y="196" font-size="10" text-anchor="middle" fill="#9d174d" font-family="sans-serif">Warmth &amp; team belonging</text><line x1="198" y1="71" x2="255" y2="95" stroke="#16a34a" stroke-width="2"/><line x1="198" y1="127" x2="255" y2="105" stroke="#16a34a" stroke-width="2"/><line x1="198" y1="183" x2="255" y2="115" stroke="#16a34a" stroke-width="2"/><rect x="256" y="72" width="168" height="58" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="2"/><text x="340" y="96" font-size="11" font-weight="700" text-anchor="middle" fill="#065f46" font-family="sans-serif">Needs Satisfied →</text><text x="340" y="114" font-size="11" text-anchor="middle" fill="#047857" font-family="sans-serif">Autonomous / Intrinsic</text><line x1="426" y1="101" x2="462" y2="101" stroke="#059669" stroke-width="2.5"/><rect x="464" y="72" width="148" height="58" rx="10" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><text x="538" y="96" font-size="12" font-weight="700" text-anchor="middle" fill="#14532d" font-family="sans-serif">Sport Persistence</text><text x="538" y="114" font-size="10" text-anchor="middle" fill="#166534" font-family="sans-serif">(Continued next season)</text><rect x="256" y="148" width="168" height="58" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/><text x="340" y="172" font-size="11" font-weight="700" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Needs Thwarted →</text><text x="340" y="190" font-size="11" text-anchor="middle" fill="#b91c1c" font-family="sans-serif">Controlled / Amotivation</text><line x1="426" y1="177" x2="462" y2="177" stroke="#dc2626" stroke-width="2.5"/><rect x="464" y="148" width="148" height="58" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="538" y="172" font-size="12" font-weight="700" text-anchor="middle" fill="#7f1d1d" font-family="sans-serif">Sport Dropout</text><text x="538" y="190" font-size="10" text-anchor="middle" fill="#991b1b" font-family="sans-serif">(Calvo et al., 2010)</text></svg>`,
      diagramCaption:
        "In SDT, satisfying autonomy, competence and relatedness builds self-determined motivation and long-term persistence, whereas thwarting them drives amotivation and dropout (Calvo et al., 2010).",
      workedExamples: [
        {
          title: "Diagnosing SDT needs in a music-student dropout scenario",
          problem:
            "Mei quits the school orchestra even though she plays violin skillfully and receives top grades. She explains: 'The conductor picks every single piece without asking us, and nobody in the violin section talks to me during breaks.' Using Self-Determination Theory, identify which need IS met and which TWO needs are unmet.",
          steps: [
            "Skillful playing and top grades show Mei feels effective at the instrument → **competence** IS satisfied.",
            "'Conductor picks every single piece without asking us' shows zero voice or choice → **autonomy** is thwarted.",
            "'Nobody talks to me during breaks' shows social isolation → **relatedness** is thwarted.",
          ],
          answer:
            "Competence is satisfied, but both autonomy (no choice over repertoire) and relatedness (social exclusion) are unmet — mirroring the exact two-need deficit highlighted in Calvo et al. (2010) dropouts.",
          yourTurn: {
            question:
              "What is the technical SDT term for a complete lack of intention or motivation to act, found at high levels among athletes who quit in Calvo et al. (2010)?",
            answer: { type: "text", accept: ["amotivation", "a-motivation"] },
            solution:
              "**Amotivation** refers to the state of lacking any intention or perceived value/control to act, which strongly predicted adolescent sport dropout in Calvo et al. (2010).",
          },
        },
      ],
      keyPoints: [
        "**ARC** of Self-Determination Theory: **Autonomy** (choice/volition), **Competence** (effective mastery), **Relatedness** (social connection).",
        "**Autonomy ≠ working alone**: you can work closely in a team (high relatedness) while freely endorsing shared goals (high autonomy).",
        "**Calvo et al. (2010)**: 1-year longitudinal study of 492 teenage male footballers; lower autonomy & relatedness + higher external regulation & **amotivation** predicted dropout.",
      ],
      whyItWorks:
        "Unlike Maslow's sequential ladder, SDT treats autonomy, competence and relatedness like sunlight, water and soil for a plant: starving *any one* of the three stunts intrinsic flourishing even if the other two are abundant.",
      strategies: [
        "Distinguish **autonomy** (choice & volition) from **independence/isolation** — CIE examiners penalise defining autonomy as 'working alone'",
        "Use Calvo et al.'s non-experimental longitudinal design to evaluate cause-and-effect vs correlation",
      ],
      thinkDeeper:
        "Why could giving a novice learner *twenty* completely unstructured project options actually **reduce** motivation according to SDT? (Hint: consider how overwhelming choice affects *competence*!)",
    },
    {
      id: "drive-incentive-psychodynamic",
      heading: "Drive-Reduction, Cognitive Incentive & Psychodynamic Motivation",
      discovery: {
        problem:
          "If biological motivation exists purely to restore calm bodily balance (eating when hungry, warming up when cold), why do millions of people pay money to leap out of aeroplanes, ride terrifying rollercoasters, or donate cash after seeing a childhood photo?",
        idea:
          "Internal biological **'push'** (**Hull's drive-reduction**) explains survival homeostasis, but fails whenever humans actively *seek* arousal or respond to external **'pull'** (**incentives**, **Yerkes-Dodson optimal arousal**) and **unconscious emotional/nostalgic triggers** (**Merchant et al. 2013**).",
      },
      body:
        "Beyond behaviourist tokens and humanistic growth, CIE 0266 compares three classic lenses on what energises human action: **biological push**, **cognitive pull / arousal**, and **psychodynamic unconscious emotion**.\n\n**1. Hull's (1943) Biological Drive-Reduction Theory ('Push')**\nRooted in **homeostasis** (the body's physiological self-regulation of stable internal conditions such as core temperature ≈ 37 °C, blood glucose and hydration), **Clark Hull** proposed a four-step homeostatic loop:\n\n1. **Homeostatic imbalance → Physiological Need**: e.g. fluid loss triggers cellular dehydration detected by the hypothalamus.\n2. **Psychological Drive**: the biological deficit creates an unpleasant internal state of tension/arousal (thirst).\n3. **Drive-Reducing Behaviour**: the organism acts to relieve the tension (finding and drinking water).\n4. **Homeostasis Restored (Drive Reduction)**: tension drops, reinforcing the successful habit.\n\nHull separated **primary drives** (innate, unlearned biological survival drives: hunger, thirst, sleep, pain avoidance) from **secondary (acquired) drives** (learned through classical/operant association with primary drives — e.g. striving for **money** or **grades** because they secure food, shelter and comfort).\n\n- **Key Limitation**: Drive-reduction **cannot explain sensation-seeking / thrill-seeking** (skydiving, bungee jumping, horror movies, curiosity exploration) that *deliberately increases* physiological tension, nor why sated people eat dessert when blood glucose is already normal!\n\n**2. Cognitive Incentive Theory ('Pull') & Yerkes-Dodson Arousal**\n- **Incentive Theory** argues behaviour is **pulled** by the perceived value and expectancy of external stimuli (the aroma of fresh bakery bread pulls you in even at zero biological hunger).\n- **Yerkes-Dodson Law (1908)** resolves the thrill-seeking puzzle: organisms seek an **optimal level of arousal**, not zero arousal! Performance follows an **inverted-U curve** against arousal — too low causes boredom/sluggishness; moderate arousal maximises alertness; excessive arousal triggers panic/choking. Simple, well-practised skills tolerate higher arousal than complex, unfamiliar cognitive tasks.\n\n**3. Psychodynamic Motivation & Nostalgia in Marketing — Merchant et al. (2013)**\nSigmund Freud's **psychodynamic approach** holds that much human behaviour is driven by **unconscious wishes, emotional conflicts and ego-defence mechanisms** operating beneath conscious awareness. Modern consumer psychology applies this to **nostalgia** — a bittersweet, emotionally warm longing for an idealised personal past that unconsciously buffers anxiety, loneliness and existential threat.\n\n**Compulsory Named Study — Merchant, Ford & Dianoux (2013, Study 3): Nostalgia & Charitable Giving**\n- **Aim**: To test experimentally whether evoking **personal nostalgia** in charity print advertisements increases consumers' emotional engagement and **charitable donation intentions**, and how unconscious/affective processes mediate this effect.\n- **Participants & Design**: **Adult US consumers** (non-student sample in Study 3, ~200+ participants) in an **independent-measures experiment** randomly assigned to view either a **nostalgic charity print advert** (invoking warm childhood/family memories, e.g. *'Remember the good old days…'*) or a **non-nostalgic control advert** for the same charity.\n- **Findings**:\n  - The nostalgic advert evoked significantly stronger **personal nostalgia and positive warm emotions** (while buffering/reducing negative thoughts when nostalgia proneness was high).\n  - Heightened nostalgia increased **emotional engagement / empathy** with the charity, which in turn produced significantly **stronger intentions to donate money and volunteer** compared with the non-nostalgic advert.\n- **Conclusion**: Marketing appeals that tap deep, partly unconscious emotional attachments to the past (**nostalgic motivation**) powerfully drive prosocial consumer spending beyond rational cost-benefit calculations.\n\n| Theory | Core Mechanism | Best Explains… | Struggles to Explain… |\n|---|---|---|---|\n| **Hull Drive-Reduction** | Internal biological *push* to restore homeostasis | Drinking when dehydrated; putting on a coat when shivering | Skydiving; eating cake when full; fasting for beliefs |\n| **Incentive & Optimal Arousal** | External *pull* of valued stimuli + inverted-U arousal | Window-shopping; rollercoaster thrills; exam choking | Deep unconscious emotional attachments |\n| **Psychodynamic / Nostalgia** | Unconscious wishes, anxiety buffering & warm past bonds | Impulse luxury buys; nostalgic charity ads (Merchant et al. 2013) | Hard to falsify unconscious motives directly |",
      diagram: `<svg viewBox="0 0 640 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hull homeostatic drive-reduction cycle compared with the Yerkes-Dodson inverted-U arousal curve and Merchant et al 2013 nostalgia pathway"><rect x="8" y="8" width="624" height="219" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><rect x="20" y="22" width="286" height="192" rx="10" fill="#eff6ff" stroke="#93c5fd"/><text x="163" y="42" font-size="12" font-weight="700" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">Hull's Homeostatic Drive-Reduction ('Push')</text><rect x="36" y="56" width="112" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="92" y="74" font-size="10" font-weight="700" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">1. Biological Need</text><text x="92" y="88" font-size="9" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">(Low water / glucose)</text><rect x="178" y="56" width="112" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="234" y="74" font-size="10" font-weight="700" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">2. Internal Drive</text><text x="234" y="88" font-size="9" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">(Thirst / hunger tension)</text><rect x="178" y="132" width="112" height="40" rx="6" fill="#dcfce7" stroke="#22c55e"/><text x="234" y="150" font-size="10" font-weight="700" text-anchor="middle" fill="#14532d" font-family="sans-serif">3. Action</text><text x="234" y="164" font-size="9" text-anchor="middle" fill="#15803d" font-family="sans-serif">(Drink / eat)</text><rect x="36" y="132" width="112" height="40" rx="6" fill="#dcfce7" stroke="#22c55e"/><text x="92" y="150" font-size="10" font-weight="700" text-anchor="middle" fill="#14532d" font-family="sans-serif">4. Homeostasis</text><text x="92" y="164" font-size="9" text-anchor="middle" fill="#15803d" font-family="sans-serif">(Drive reduced!)</text><line x1="148" y1="76" x2="176" y2="76" stroke="#2563eb" stroke-width="2"/><line x1="234" y1="96" x2="234" y2="130" stroke="#2563eb" stroke-width="2"/><line x1="178" y1="152" x2="150" y2="152" stroke="#16a34a" stroke-width="2"/><text x="163" y="198" font-size="10" text-anchor="middle" fill="#475569" font-family="sans-serif">Critique: Cannot explain thrill-seeking!</text><rect x="320" y="22" width="300" height="192" rx="10" fill="#fefce8" stroke="#fde047"/><text x="470" y="42" font-size="12" font-weight="700" text-anchor="middle" fill="#713f12" font-family="sans-serif">Yerkes-Dodson Optimal Arousal Curve</text><line x1="358" y1="176" x2="594" y2="176" stroke="#475569" stroke-width="1.5"/><line x1="358" y1="58" x2="358" y2="176" stroke="#475569" stroke-width="1.5"/><path d="M 368 168 Q 470 32 582 168" fill="none" stroke="#d97706" stroke-width="3"/><line x1="474" y1="96" x2="474" y2="176" stroke="#d97706" stroke-dasharray="4 3"/><circle cx="474" cy="100" r="4" fill="#b45309"/><text x="474" y="88" font-size="10" font-weight="700" text-anchor="middle" fill="#92400e" font-family="sans-serif">Optimal Peak</text><text x="386" y="192" font-size="9" fill="#64748b" font-family="sans-serif">Boredom</text><text x="548" y="192" font-size="9" fill="#991b1b" font-family="sans-serif">Panic / Choke</text><text x="474" y="206" font-size="10" text-anchor="middle" fill="#334155" font-family="sans-serif">Physiological Arousal (Low → High)</text></svg>`,
      diagramCaption:
        "Left: Hull's homeostatic loop pushes organisms to eliminate internal deficits. Right: The Yerkes-Dodson inverted-U shows performance peaks at moderate optimal arousal rather than zero tension.",
      workedExamples: [
        {
          title: "Distinguishing primary vs secondary drives & push vs pull",
          problem:
            "Rohan works overtime every Saturday to earn cash bonuses, then spends Sunday afternoon bungee jumping. Classify 'earning cash' under Hull's drive types, and explain why Rohan's Sunday hobby challenges Hull's Drive-Reduction Theory.",
          steps: [
            "Cash has no innate biological value (you cannot eat banknotes), so earning money is a learned **secondary (acquired) drive** associated with buying primary necessities like food and shelter.",
            "Hull's Drive-Reduction Theory predicts organisms act to **reduce** physiological arousal and restore calm homeostasis.",
            "Bungee jumping deliberately **maximises** adrenaline and physiological arousal when no biological deficit exists — contradicting drive reduction and supporting **optimal arousal** theory instead.",
          ],
          answer:
            "Cash is a secondary drive; bungee jumping increases rather than reduces physiological arousal, refuting Hull's claim that all motivation seeks tension reduction.",
          yourTurn: {
            question:
              "What is the biological term for the body's maintenance of a balanced, stable internal environment (such as core temperature or hydration) at the heart of Hull's theory?",
            answer: { type: "text", accept: ["homeostasis", "homeostatic balance", "homeostatic equilibrium"] },
            solution:
              "**Homeostasis** is the maintenance of stable internal physiological equilibrium; deviations create needs and drives in Hull's theory.",
          },
        },
      ],
      keyPoints: [
        "**Hull's Drive-Reduction ('push')**: Homeostatic imbalance → biological **need** → psychological **drive** → behaviour reduces drive.",
        "**Primary drives** are innate survival needs (hunger, thirst); **secondary drives** are learned via association (money, grades).",
        "**Incentive theory ('pull')** & **Yerkes-Dodson inverted-U** explain eating without hunger and thrill-seeking for optimal arousal.",
        "**Merchant et al. (2013, Study 3)**: Nostalgic charity ads evoked warm past memories, boosting emotional engagement and **donation intentions**.",
      ],
      whyItWorks:
        "Pairing 'push' (internal deficits), 'pull' (external incentives) and unconscious emotion (nostalgia) gives psychology a complete toolkit covering survival reflexes, rational ambition and emotional consumer persuasion.",
      strategies: [
        "Never confuse **need** (physiological deficit in cells/body) with **drive** (psychological tension state pushing action)",
        "Use **thrill-seeking** (skydiving/rollercoasters) as your instant, high-scoring evaluation point against Hull",
      ],
      thinkDeeper:
        "Ethical debate: If Merchant et al. (2013) show nostalgic music and childhood imagery bypass critical resistance to increase charity donations, is using the exact same nostalgic trigger to advertise sugary fast food or gambling **unethical manipulation**?",
    },
    {
      id: "goal-setting-applications",
      heading: "SMART Goal-Setting & Applications to Education, Work & Sport",
      discovery: {
        problem:
          "Before a mock exam season, Student A writes on a sticky note: *'Revise Psychology much harder this month!'* Student B writes: *'Complete two timed 15-mark CIE Paper 2 practice sections every Tuesday and Thursday at 4:30 pm for the next 4 weeks, scoring at least 80%.'* Why does Student B complete three times more revision?",
        idea:
          "**Edwin Locke and Gary Latham's Goal-Setting Theory** proves that vague *'do your best'* wishes allow self-deception because almost *any* effort counts as 'trying'. Student B's **SMART** goal eliminates ambiguity, directs attention, and creates a concrete feedback loop.",
      },
      body:
        "In cognitive psychology, **Edwin Locke and Gary Latham (1990)** demonstrated across hundreds of workplace and sport studies that conscious **goals** directly regulate human effort, persistence and attention. Crucially, **specific and challenging goals** consistently produce higher performance than easy goals or vague instructions to *'do your best'* — provided the person is committed, possesses the necessary skill, and receives timely **feedback**.\n\n**The SMART Goal Framework**\nApplied psychologists translate Locke and Latham's principles into **SMART** targets:\n\n- **S — Specific**: Pinpoints the *exact* behaviour, topic or skill to perform (not *'get fitter'*, but *'swim 20 lengths of front crawl'*).\n- **M — Measurable**: Includes a quantifiable number, percentage, time or checklist so progress can be tracked objectively.\n- **A — Achievable (Attainable)**: Stretching enough to spark effort without being impossible given current skill and resources (preserving SDT **competence**).\n- **R — Realistic / Relevant**: Meaningful to the person's own values and life context (supporting SDT **autonomy**) and practical alongside other commitments.\n- **T — Time-bound**: Anchored to a clear deadline or schedule to prevent procrastination.\n\n| Domain | Weak Motivation Practice | Evidence-Based Psychological Redesign |\n|---|---|---|\n| **Education** | Paying cash for every book read; vague *'revise more'* nagging | Co-authored **SMART** revision sprints + informational **mastery praise**; reserve token economies (Boniecki & Moore) for unappealing routine drills |\n| **Workplace** | Micromanagement, unsafe hours, vague annual reviews | Meet **safety/physiological** baseline first (Maslow), grant task **autonomy** & team **relatedness** (SDT), set participatory **SMART** milestones |\n| **Sport Coaching** | Authoritarian shouting; obsession with winning trophies only | Autonomy-supportive coaching + team belonging to prevent dropout (Calvo et al. 2010) + controllable **process SMART goals** (e.g. *'85% first-serve accuracy by May'*) |\n\n**Process / Mastery Goals vs Outcome Goals**\nIn sport and exams, **outcome goals** (*'Win the championship'*, *'Top the cohort'*) depend partly on opponents' performance — something outside your control, which spikes anxiety past the **Yerkes-Dodson** peak! Combining long-term aspirations with controllable **process/performance SMART goals** (*'Practise 30 free-throws daily for 3 weeks aiming for 24/30'*) sustains **competence** and intrinsic persistence.\n\n**Evaluation of Cognitive Goal-Setting**\n- **Strengths**: Highly replicable across classrooms, businesses and elite sport; operationalises progress clearly and empowers self-regulation.\n- **Limitations**: Overly rigid, externally imposed numerical targets (e.g. call-centre quotas) can **thwart autonomy**, narrow focus (ignoring unmeasured teamwork or ethics — *tunnel vision*), or induce panic if set unrealistically high without skill support.",
      diagram: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five interconnected SMART goal pillars feeding into Attention Effort Persistence and Strategy in Locke and Latham Goal-Setting Theory"><rect x="8" y="8" width="624" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1"/><text x="320" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Locke &amp; Latham Cognitive Goal-Setting: The SMART Engine</text><rect x="24" y="48" width="110" height="78" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="79" y="72" font-size="18" font-weight="800" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">S</text><text x="79" y="90" font-size="11" font-weight="700" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">Specific</text><text x="79" y="108" font-size="9" text-anchor="middle" fill="#1e40af" font-family="sans-serif">Exact action</text><rect x="144" y="48" width="110" height="78" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="199" y="72" font-size="18" font-weight="800" text-anchor="middle" fill="#15803d" font-family="sans-serif">M</text><text x="199" y="90" font-size="11" font-weight="700" text-anchor="middle" fill="#14532d" font-family="sans-serif">Measurable</text><text x="199" y="108" font-size="9" text-anchor="middle" fill="#166534" font-family="sans-serif">Quantified metric</text><rect x="264" y="48" width="110" height="78" rx="8" fill="#fef9c3" stroke="#ca8a04"/><text x="319" y="72" font-size="18" font-weight="800" text-anchor="middle" fill="#a16207" font-family="sans-serif">A</text><text x="319" y="90" font-size="11" font-weight="700" text-anchor="middle" fill="#713f12" font-family="sans-serif">Achievable</text><text x="319" y="108" font-size="9" text-anchor="middle" fill="#854d0e" font-family="sans-serif">Optimal stretch</text><rect x="384" y="48" width="110" height="78" rx="8" fill="#fce7f3" stroke="#db2777"/><text x="439" y="72" font-size="18" font-weight="800" text-anchor="middle" fill="#be185d" font-family="sans-serif">R</text><text x="439" y="90" font-size="11" font-weight="700" text-anchor="middle" fill="#831843" font-family="sans-serif">Realistic</text><text x="439" y="108" font-size="9" text-anchor="middle" fill="#9d174d" font-family="sans-serif">Relevant &amp; valued</text><rect x="504" y="48" width="112" height="78" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="560" y="72" font-size="18" font-weight="800" text-anchor="middle" fill="#6d28d9" font-family="sans-serif">T</text><text x="560" y="90" font-size="11" font-weight="700" text-anchor="middle" fill="#4c1d95" font-family="sans-serif">Time-bound</text><text x="560" y="108" font-size="9" text-anchor="middle" fill="#5b21b6" font-family="sans-serif">Clear deadline</text><rect x="84" y="148" width="472" height="46" rx="10" fill="#0f172a"/><text x="320" y="169" font-size="11" font-weight="700" text-anchor="middle" fill="#f8fafc" font-family="sans-serif">+ Regular Feedback &amp; Self-Chosen Commitment →</text><text x="320" y="185" font-size="11" text-anchor="middle" fill="#38bdf8" font-family="sans-serif">Sustained Focus, Higher Effort &amp; Mastery Persistence</text></svg>`,
      diagramCaption:
        "Each SMART element removes a cognitive barrier to action: together with feedback and personal commitment, they outperform vague 'do your best' intentions.",
      workedExamples: [
        {
          title: "Upgrading a vague goal into a full SMART target",
          problem:
            "An athlete tells her coach: 'I want to get faster at the 100 m sprint sometime soon.' Diagnose TWO missing SMART components and rewrite her statement as a complete SMART goal (current personal best: 13.4 seconds).",
          steps: [
            "Missing **Measurable**: 'get faster' states no target time or improvement margin.",
            "Missing **Time-bound** (and **Achievable** check): 'sometime soon' sets no deadline, and we must pick a realistic stretch from 13.4 s (not 9.5 s!).",
            "SMART rewrite: 'Reduce my 100 m sprint electronic time from 13.4 s to **13.0 s or under** (**S, M, A**) for the inter-school track championships (**R**) within **8 weeks** by completing two block-start sessions per week (**T**).'",
          ],
          answer:
            "Missing Measurable and Time-bound criteria; rewritten with an exact 13.0 s target (realistic 0.4 s improvement from 13.4 s) within an 8-week deadline.",
          yourTurn: {
            question:
              "A student writes: 'I will memorise all 24 flashcards in Topic 5 with 100% accuracy.' Which single SMART letter is still missing from this statement?",
            answer: {
              type: "text",
              accept: ["t", "time-bound", "time bound", "time", "timed", "timely"],
            },
            solution:
              "It is Specific (24 Topic 5 flashcards), Measurable (100% accuracy) and Achievable/Realistic, but lacks **T — Time-bound** (no deadline such as *'by Friday 6 pm'*).",
          },
        },
      ],
      keyPoints: [
        "**Locke & Latham (1990)**: Specific, moderately challenging goals + **feedback** + **commitment** beat vague *'do your best'* targets.",
        "**SMART** = **S**pecific, **M**easurable, **A**chievable, **R**ealistic/Relevant, **T**ime-bound.",
        "Combine **SMART** structure with **SDT autonomy** (let learners co-set their own targets) to avoid controlling quota burnout.",
      ],
      whyItWorks:
        "A SMART goal converts an abstract future wish into an immediate discrepancy detector: your brain can compare *'where I am today'* against an exact number and date, energising corrective effort.",
      strategies: [
        "In CIE 'Design an intervention' questions, integrate TWO theories (e.g. co-designed SMART goals + SDT autonomy/competence praise)",
        "Check every rewritten SMART goal on your fingers for all 5 letters — forgetting the deadline (T) or metric (M) drops an easy mark",
      ],
      thinkDeeper:
        "When learning a brand-new, complex skill for the very first time (like air-traffic control or statistics), Locke & Latham found that an aggressive *performance* SMART target can temporarily **hurt** accuracy compared with a *learning-strategy* goal. Why?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Intrinsic vs Extrinsic motivation",
        back: "**Intrinsic**: acting for inherent interest, enjoyment or personal mastery.\n**Extrinsic**: acting for a separable external reward (money, tokens, grades) or to avoid punishment.",
      },
      {
        front: "Overjustification effect",
        back: "When offering an **expected, tangible extrinsic reward** for an already-enjoyed activity shifts attribution outward, **reducing intrinsic motivation** once the reward is removed.",
      },
      {
        front: "Token economy (Secondary vs Backup reinforcers)",
        back: "An operant conditioning system awarding immediate **tokens** (secondary reinforcers) for target behaviours, later exchanged for valued **backup reinforcers** (privileges, extra credit).",
      },
      {
        front: "Boniecki & Moore (2003) — Aim, Design & Sample",
        back: "Tested classroom token economy on **63 US psychology undergraduates** using an **A-B-A reversal design** (Baseline → Wooden extra-credit tokens → Token withdrawal).",
      },
      {
        front: "Boniecki & Moore (2003) — Key Results",
        back: "Directed participation **more than doubled** (~48% → ~98–100%) and hand-raise latency dropped (~4.4 s → ~1.5 s) in Phase B, then **returned to baseline** when tokens stopped.",
      },
      {
        front: "Maslow's 5 Tiers (Bottom → Top)",
        back: "1. **Physiological** → 2. **Safety** → 3. **Love & Belonging** → 4. **Esteem** (all *Deficiency D-needs*) → 5. **Self-Actualisation** (*Growth B-need*).",
      },
      {
        front: "Deficiency (D) needs vs Growth / Being (B) needs",
        back: "**D-needs (Tiers 1–4)** arise from deprivation and *fade once met*; **B-need (Tier 5 self-actualisation)** stems from realising potential and *grows stronger* when engaged.",
      },
      {
        front: "Self-Determination Theory (Deci & Ryan) — 3 Basic Needs",
        back: "**Autonomy** (volitional choice/ownership), **Competence** (mastering optimal challenges), and **Relatedness** (warm social belonging).",
      },
      {
        front: "Calvo et al. (2010) — Adolescent Sport Study",
        back: "1-year longitudinal study of **492 Spanish male teenage footballers** (13–17): athletes who **dropped out** had lower perceived **autonomy & relatedness** and higher external regulation & **amotivation**.",
      },
      {
        front: "Hull's Drive-Reduction Theory",
        back: "Disrupted **homeostasis** creates a biological **need**, arousing an unpleasant internal **drive** (e.g. thirst) that pushes **drive-reducing behaviour** to restore balance.",
      },
      {
        front: "Primary vs Secondary drives",
        back: "**Primary drives**: innate biological survival drives (hunger, thirst, sleep).\n**Secondary drives**: learned via association with primary drives (money, exam grades).",
      },
      {
        front: "Yerkes-Dodson Law",
        back: "Performance follows an **inverted-U** curve with arousal: moderate **optimal arousal** maximises performance, while under-arousal (boredom) and over-arousal (panic) impair it.",
      },
      {
        front: "Merchant et al. (2013, Study 3) — Nostalgia in Marketing",
        back: "Experiment comparing **nostalgic** vs non-nostalgic charity print adverts on adult consumers: nostalgic ads evoked warm past memories, reduced negative thoughts, and increased **emotional engagement & donation intentions**.",
      },
      {
        front: "Locke & Latham's Goal-Setting & SMART",
        back: "Specific, challenging goals + feedback beat *'do your best'*. **SMART** = **S**pecific, **M**easurable, **A**chievable, **R**ealistic/Relevant, **T**ime-bound.",
      },
      {
        front: "Informational praise vs Controlling tangible rewards",
        back: "**Sincere verbal praise** for effort/strategy informs **competence** and boosts intrinsic drive, whereas **expected tangible bribes** feel controlling and risk overjustification.",
      },
      {
        front: "Cultural critique of Maslow's Hierarchy",
        back: "**Ethnocentrism / Individualism bias**: placing individual self-actualisation at the apex reflects Western individualism, whereas collectivist cultures often prioritise group belonging and duty.",
      },
    ],
    mustKnow: [
      "Distinguish **intrinsic** vs **extrinsic** motivation and explain when tangible rewards cause the **overjustification effect** vs when verbal praise enhances intrinsic interest.",
      "Outline the aim, A-B-A procedure, sample (63 undergrads), findings (participation doubled, latency fell, reverted in A2) and evaluation of **Boniecki & Moore (2003)**.",
      "Order all five tiers of **Maslow's Hierarchy of Needs**, contrast **deficiency (D)** vs **growth (B)** needs, and evaluate cultural bias and non-sequential exceptions.",
      "Define **autonomy**, **competence** and **relatedness** in **Deci & Ryan's Self-Determination Theory** without confusing autonomy with working alone.",
      "Describe and evaluate **Calvo et al. (2010)** on adolescent footballer persistence vs dropout (low autonomy/relatedness → amotivation → dropout).",
      "Explain **Hull's biological Drive-Reduction Theory** (homeostasis, need vs drive, primary vs secondary drives) and critique it using **thrill-seeking** and **incentive / Yerkes-Dodson** theories.",
      "Describe **Merchant et al. (2013, Study 3)** on psychodynamic/nostalgic charity advertising and explain how emotional nostalgia increases donation intentions.",
      "Rewrite vague intentions into **SMART** targets (**Locke & Latham**) and design multi-theory motivation interventions for classrooms, workplaces and sport.",
    ],
    misconceptions: [
      {
        wrong: "Writing: 'Extrinsic rewards ALWAYS destroy intrinsic motivation (the overjustification effect).'",
        right: "Write instead: 'Only **expected, tangible** rewards given for an **already intrinsically enjoyable** task cause overjustification; **unexpected rewards** and **sincere competence-focused verbal praise** maintain or boost intrinsic motivation, and tokens help initiate dull tasks.'",
      },
      {
        wrong: "Writing: 'In SDT, autonomy means working completely alone and independently without help from teachers or teammates.'",
        right: "Write instead: 'In Deci & Ryan's SDT, **autonomy** means feeling **volitional choice and personal endorsement** over your actions — you can collaborate closely in a team (high relatedness) while still experiencing high autonomy.'",
      },
      {
        wrong: "Writing: 'In Hull's theory, a need and a drive are the exact same thing.'",
        right: "Write instead: 'A **need** is the objective **physiological deficit** (e.g. cellular dehydration), whereas a **drive** is the resulting **psychological state of unpleasant tension/arousal** (feeling thirsty) that motivates behaviour.'",
      },
      {
        wrong: "Writing: 'Self-actualisation is a deficiency need at the top of Maslow's pyramid that switches off once met.'",
        right: "Write instead: 'Tiers 1–4 are **deficiency (D) needs** that subside once satisfied, whereas Tier 5 (**self-actualisation**) is a **growth / being (B) need** that continues to strengthen as a person fulfils their potential.'",
      },
      {
        wrong: "Writing: 'Boniecki & Moore (2003) proved classroom tokens permanently cure low student participation.'",
        right: "Write instead: 'In Boniecki & Moore's **A-B-A reversal**, participation doubled during Phase B (tokens) but **dropped right back to baseline in Phase A2** when tokens were withdrawn, showing short-term operant control rather than permanent intrinsic change.'",
      },
      {
        wrong: "Writing: 'Calvo et al. (2010) experimentally manipulated coaches' behaviour to make teenage footballers quit.'",
        right: "Write instead: 'Calvo et al. (2010) used a **non-experimental longitudinal questionnaire design** tracking natural perceptions of autonomy, competence and relatedness over one season; ethically and practically they did not force players to drop out.'",
      },
      {
        wrong: "Writing: 'Money is a primary drive because people need money to survive in modern society.'",
        right: "Write instead: 'Money is a **secondary (learned) drive / secondary reinforcer** — newborns do not innately crave banknotes; money acquires motivating power through association with **primary** biological needs like food and shelter.'",
      },
    ],
    examMistakes: [
      "Mixing up the order of **Love & Belonging (Tier 3)** and **Esteem (Tier 4)** in Maslow's pyramid — social belonging comes *before* status/esteem.",
      "Quoting a study name (e.g. *'Boniecki & Moore 2003'*) in an Extended Response without stating **what they actually measured and found** (participation % + latency across A1 → B → A2).",
      "Forgetting to link answers to the **named character/stem** in CIE Paper 2 application questions (generic definitions without stem details are capped at half marks!).",
      "Rewriting a SMART goal with only 3 of the 5 criteria — most often omitting a **quantified number (Measurable)** or an **exact deadline (Time-bound)**.",
      "Evaluating Calvo et al. (2010) as having 'low ecological validity because it was in a lab' — it studied real competitive youth football leagues over a real season (high mundane/ecological relevance, but **androcentric/sample bias**).",
      "Confusing **Merchant et al. (2013)** (nostalgic charity print ads increasing empathy & donation intentions) with subliminal flashing messages.",
    ],
    mnemonics: [
      {
        topic: "Maslow's 5 Tiers (Bottom to Top)",
        device: "Please Stop Leaving Every Saturday",
        explanation: "**P**hysiological → **S**afety → **L**ove & belonging → **E**steem → **S**elf-actualisation.",
      },
      {
        topic: "Deci & Ryan's Self-Determination Theory Needs",
        device: "ARC of Intrinsic Fire",
        explanation: "**A**utonomy (choice) + **R**elatedness (belonging) + **C**ompetence (mastery) ignite self-determined persistence.",
      },
      {
        topic: "Locke & Latham's Goal-Setting Criteria",
        device: "SMART",
        explanation: "**S**pecific · **M**easurable · **A**chievable · **R**ealistic/Relevant · **T**ime-bound.",
      },
      {
        topic: "Hull's Homeostatic Sequence",
        device: "I-N-D-B-R",
        explanation: "**I**mbalance → **N**eed (biological) → **D**rive (tension) → **B**ehaviour → **R**eduction (homeostasis).",
      },
    ],
    realWorld: [
      {
        title: "School Breakfast Clubs & Pastoral Care",
        detail: "Schools across Singapore and the UK provide free morning meals and safe quiet spaces before lessons — directly applying Maslow's Tiers 1–2 so deficiency hunger doesn't block Tier 4–5 learning.",
        emoji: "🥣",
      },
      {
        title: "Duolingo Streaks & Gamified Apps",
        detail: "Language apps combine immediate secondary token reinforcers (XP, gems) with optimal difficulty levelling (SDT competence) — though losing a 200-day streak can shift learners into anxious extrinsic compliance!",
        emoji: "🦉",
      },
      {
        title: "Youth Sport Coaching Reforms",
        detail: "National football and swimming academies train coaches in autonomy-supportive feedback after longitudinal evidence like Calvo et al. (2010) revealed authoritarian coaching drives teenage talent dropout.",
        emoji: "⚽",
      },
      {
        title: "Nostalgia Marketing in Festive Campaigns",
        detail: "Charities and heritage brands air childhood kampong/family scenes during festive appeals, leveraging Merchant et al.'s (2013) finding that warm personal nostalgia softens scepticism and lifts donations.",
        emoji: "📻",
      },
    ],
    videos: [
      {
        title: "Intrinsic vs Extrinsic Motivation & Overjustification Effect",
        channel: "CrashCourse Psychology",
        url: "https://www.youtube.com/results?search_query=crash+course+psychology+motivation+overjustification+effect",
      },
      {
        title: "Self-Determination Theory: Autonomy, Competence & Relatedness",
        channel: "Sprouts",
        url: "https://www.youtube.com/results?search_query=sprouts+self+determination+theory+deci+ryan",
      },
      {
        title: "Maslow's Hierarchy of Needs Explained & Evaluated",
        channel: "Simply Psychology",
        url: "https://www.youtube.com/results?search_query=maslow+hierarchy+of+needs+psychology+evaluation",
      },
      {
        title: "Drive-Reduction, Arousal & Incentive Theories of Motivation",
        channel: "Khan Academy",
        url: "https://www.youtube.com/results?search_query=khan+academy+drive+reduction+incentive+arousal+theory+motivation",
      },
    ],
    formulas: [
      {
        name: "Boniecki & Moore (2003)",
        formula: "63 undergrads · A-B-A reversal · Wooden tokens (+1 extra credit) doubled participation (~48% → ~98%) & cut latency (~4.4 s → ~1.5 s); reverted in A2.",
        note: "Compulsory CIE 0266 study for positive reinforcement & classroom token economies.",
      },
      {
        name: "Overjustification Effect",
        formula: "High Intrinsic Interest + Expected Tangible Reward → External Attribution → Lower Intrinsic Motivation post-withdrawal.",
        note: "Avoided by using unexpected rewards or sincere competence-focused verbal praise.",
      },
      {
        name: "Maslow's Hierarchy (1943)",
        formula: "D-Needs: Physiological → Safety → Love/Belonging → Esteem | B-Need: Self-Actualisation.",
        note: "Humanistic holistic model; critiqued for Western individualism bias & parallel needs (Tay & Diener 2011).",
      },
      {
        name: "Self-Determination Theory (Deci & Ryan)",
        formula: "Autonomy + Competence + Relatedness → Autonomous / Intrinsic Motivation & Wellbeing.",
        note: "Thwarting these needs shifts learners toward controlled regulation or amotivation.",
      },
      {
        name: "Calvo et al. (2010)",
        formula: "492 Spanish male footballers (13–17), 1-yr longitudinal · Low autonomy & relatedness + high amotivation → Sport Dropout.",
        note: "Compulsory CIE 0266 study for SDT in adolescent sport persistence.",
      },
      {
        name: "Hull's Drive-Reduction Theory (1943)",
        formula: "Homeostatic Imbalance → Biological Need → Psychological Drive ('Push') → Behaviour → Drive Reduction.",
        note: "Distinguishes innate Primary Drives (hunger/thirst) vs learned Secondary Drives (money); refuted by thrill-seeking.",
      },
      {
        name: "Incentive Theory ('Pull')",
        formula: "Valued External Stimulus + Expectancy → Goal-Directed Approach (even without biological deficit).",
        note: "Complements Hull's internal push (e.g. eating dessert when physiologically full).",
      },
      {
        name: "Yerkes-Dodson Law (1908)",
        formula: "Inverted-U: Performance peaks at Moderate Optimal Arousal; drops at Boredom (too low) or Anxiety/Panic (too high).",
        note: "Simple tasks peak at higher arousal than complex cognitive tasks.",
      },
      {
        name: "Merchant et al. (2013, Study 3)",
        formula: "Nostalgic Charity Print Ad → Warm Past Memories & Reduced Negative Thoughts → Empathy/Engagement → Higher Donation Intentions.",
        note: "Compulsory CIE 0266 study for psychodynamic/nostalgic emotional motivation in marketing.",
      },
      {
        name: "Locke & Latham Goal-Setting (SMART)",
        formula: "Specific + Measurable + Achievable + Realistic/Relevant + Time-bound (+ Feedback & Commitment).",
        note: "Specific, challenging goals outperform vague 'do your best' instructions.",
      },
      {
        name: "Amotivation",
        formula: "Complete absence of intention, perceived competence or value for acting (lowest end of SDT continuum).",
        note: "Key predictor of quitting in Calvo et al. (2010).",
      },
      {
        name: "Secondary vs Backup Reinforcer",
        formula: "Token/Point (Secondary) → Exchanged for Valued Prize/Privilege (Backup Reinforcer).",
        note: "Bridges immediate reinforcement timing in schools and psychiatric/rehab settings.",
      },
    ],
  },
};
