import type { Drill } from "./types.ts";
import { clean, roundTo } from "./helpers.ts";

const INSTRUCTORS = [
  "Dr Patel",
  "Prof Chen",
  "Ms Tan",
  "Mr Alverez",
  "Dr Mensah",
  "Ms Lindqvist",
  "Prof Sato",
  "Mr Okafor",
  "Dr Hassan",
  "Ms Kowalski",
] as const;

const COURSES = [
  "introductory psychology seminar",
  "Year 11 research-methods workshop",
  "cognitive science lecture",
  "developmental psychology tutorial",
  "behavioural neuroscience class",
  "social psychology discussion group",
] as const;

const NAMES = [
  "Aarav",
  "Mei",
  "Tariq",
  "Sofia",
  "Kieran",
  "Nadia",
  "Lucas",
  "Priya",
  "Jun",
  "Elena",
  "Zara",
  "Mateo",
] as const;

export const drills: Drill[] = [
  // -------------------------------------------------------------------------
  // DRILL 1: Token-Economy Participation & Latency Data Lab
  // -------------------------------------------------------------------------
  {
    id: "motivation-and-needs.token-data",
    topicId: "motivation-and-needs",
    title: "Token-Economy Participation & Latency Calculations (Boniecki & Moore)",
    level: 1,
    guideRef: "intrinsic-extrinsic-reinforcement",
    generate(rng, tier) {
      const prof = rng.pick(INSTRUCTORS);
      const course = rng.pick(COURSES);

      if (tier === 1) {
        // Clean latency reduction OR percentage of directed questions answered
        if (rng.bool(0.5)) {
          const baseLat = roundTo(rng.int(36, 68) / 10, 1);
          const drop = roundTo(rng.int(15, Math.min(32, Math.round(baseLat * 10) - 10)) / 10, 1);
          const tokLat = roundTo(baseLat - drop, 1);
          return {
            prompt: `In ${prof}'s ${course} replicating **Boniecki & Moore (2003)**, mean hand-raising latency fell from **${baseLat.toFixed(1)} s** in Baseline Phase A1 to **${tokLat.toFixed(1)} s** in Token Phase B. By how many **seconds** did mean response latency decrease?`,
            answer: { type: "number", value: drop, tolerance: 0.01 },
            solution: [
              `Decrease in latency = Baseline A1 latency − Token Phase B latency.`,
              `${baseLat.toFixed(1)} − ${tokLat.toFixed(1)} = **${drop.toFixed(1)} seconds**.`,
            ],
            hint: "Subtract the Phase B latency from the Baseline A1 latency.",
            traps: [
              {
                spec: { type: "number", value: roundTo(baseLat + tokLat, 1), tolerance: 0.01 },
                feedback: "You added the two latencies — subtract Phase B from Phase A1 to find the reduction.",
              },
            ],
          };
        } else {
          const totalQ = rng.pick([20, 25, 40, 50]);
          const ansQ = rng.int(Math.round(totalQ * 0.35), Math.round(totalQ * 0.95));
          const pct = clean((ansQ / totalQ) * 100);
          return {
            prompt: `During Token Phase B in ${prof}'s ${course}, students answered **${ansQ}** out of **${totalQ}** directed questions to earn extra-credit tokens. What **percentage** of directed questions were answered?`,
            answer: { type: "number", value: pct, tolerance: 0.01 },
            solution: [
              `Percentage answered = (questions answered ÷ total questions) × 100.`,
              `(${ansQ} ÷ ${totalQ}) × 100 = **${pct}%**.`,
            ],
            hint: "Divide answered questions by total questions, then multiply by 100.",
            traps: [
              {
                spec: { type: "number", value: totalQ - ansQ },
                feedback: `${totalQ - ansQ} is the number of unanswered questions — divide ${ansQ} by ${totalQ} and multiply by 100.`,
              },
            ],
          };
        }
      }

      if (tier === 2) {
        // Percentage increase in participation comments from Baseline A1 to Token Phase B
        const base = rng.pick([8, 10, 12, 15, 16, 20, 24, 25]);
        const pctInc = rng.pick([50, 75, 100, 125, 150, 175, 200]);
        let tok = (base * (100 + pctInc)) / 100;
        let finalPct = pctInc;
        if (!Number.isInteger(tok)) {
          finalPct = 150;
          tok = base * 2.5;
          if (!Number.isInteger(tok)) {
            finalPct = 100;
            tok = base * 2;
          }
        }
        return {
          prompt: `In ${prof}'s ${course}, students volunteered **${base} comments** per session in Baseline A1 and **${tok} comments** per session when wooden tokens were awarded in Phase B. Calculate the **percentage increase** in comments from A1 to B.`,
          answer: { type: "number", value: finalPct },
          solution: [
            `Increase = ${tok} − ${base} = ${tok - base} comments.`,
            `Percentage increase = (${tok - base} ÷ ${base}) × 100 = **${finalPct}%**.`,
          ],
          hint: "Compute (Phase B − Phase A1) ÷ Phase A1 × 100.",
          traps: [
            {
              spec: { type: "number", value: tok - base },
              feedback: `${tok - base} is the raw comment gain — divide by the baseline (${base}) and multiply by 100.`,
            },
            {
              spec: { type: "number", value: clean((tok / base) * 100) },
              feedback: "Remember to subtract the original baseline before dividing, otherwise you include the starting 100%.",
            },
          ],
        };
      }

      // Tier 3: Weighted/3-phase A-B-A mean OR overjustification % drop below baseline
      if (rng.bool(0.5)) {
        const sessions = rng.pick([6, 8, 10]);
        const a1 = rng.int(10, 18);
        const b = rng.int(26, 42);
        // Pick a2 so (a1 + b + a2) is divisible by 3 or gives 1 exact dp
        const rem = (a1 + b) % 3;
        const baseA2 = rng.int(9, 17);
        const a2 = baseA2 + ((3 - ((baseA2 + rem) % 3)) % 3);
        const meanAll = clean((a1 + b + a2) / 3);
        return {
          prompt: `${prof} runs an **A-B-A token-economy reversal** in a ${course} with **${sessions} classes per phase** (${sessions * 3} classes total). Mean comments per class are **${a1}** in A1, **${b}** in Token Phase B, and **${a2}** in Withdrawal Phase A2. Calculate the **overall mean** comments per class across all ${sessions * 3} classes.`,
          answer: { type: "number", value: meanAll },
          solution: [
            `Because all three phases have an equal ${sessions} classes, the overall mean equals (${a1} + ${b} + ${a2}) ÷ 3.`,
            `Sum of phase means = ${a1 + b + a2}; divide by 3 = **${meanAll}** comments per class.`,
          ],
          hint: "Each phase has the same number of classes, so average the three phase means.",
          traps: [
            {
              spec: { type: "number", value: a1 + b + a2 },
              feedback: "That is the sum of the three phase means — divide by 3.",
            },
          ],
        };
      } else {
        const baselineMins = rng.pick([16, 20, 24, 25, 30, 40]);
        const dropPct = rng.pick([20, 25, 30, 40, 50]);
        const afterMins = roundTo(baselineMins * (1 - dropPct / 100), 1);
        const duringMins = baselineMins + rng.int(6, 14);
        return {
          prompt: `${rng.pick(NAMES)} originally spent **${baselineMins} min/day** sketching for fun. Paid cash rewards raised sketching to **${duringMins} min/day**, but after rewards stopped (**overjustification effect**), free-choice sketching fell to **${afterMins} min/day**. Calculate the **percentage decrease** from the original **${baselineMins} min/day** baseline to the post-reward level.`,
          answer: { type: "number", value: dropPct, tolerance: 0.1 },
          solution: [
            `Compare post-reward time (${afterMins} min) against original baseline (${baselineMins} min): drop = ${roundTo(baselineMins - afterMins, 1)} min.`,
            `Percentage decrease below baseline = (${roundTo(baselineMins - afterMins, 1)} ÷ ${baselineMins}) × 100 = **${dropPct}%**.`,
          ],
          hint: "Ignore the rewarded peak! Subtract post-reward time from the original baseline, divide by baseline, and multiply by 100.",
          traps: [
            {
              spec: { type: "number", value: roundTo(((duringMins - afterMins) / duringMins) * 100, 1), tolerance: 0.2 },
              feedback: "You compared against the rewarded peak — the question asks for percentage decrease below the *original baseline*.",
            },
          ],
        };
      }
    },
  },

  // -------------------------------------------------------------------------
  // DRILL 2: Maslow Hierarchy Tier & D-Need vs B-Need Classifier
  // -------------------------------------------------------------------------
  {
    id: "motivation-and-needs.maslow-classifier",
    topicId: "motivation-and-needs",
    title: "Maslow's Hierarchy: Diagnose the Unmet Tier",
    level: 1,
    guideRef: "maslow-hierarchy",
    generate(rng, tier) {
      const person = rng.pick(NAMES);
      const scenarios = [
        {
          tierNum: 1,
          name: "physiological",
          accept: ["physiological", "physiological needs", "physiological need", "biological needs"],
          kind: "deficiency",
          clues: [
            `arrives at morning lessons dizzy and exhausted after skipping dinner and sleeping only three hours`,
            `cannot focus on warehouse training because the drinking-water dispenser broke during a heatwave`,
            `struggles to revise in a freezing bedroom with an empty fridge`,
          ],
          trapName: "safety",
        },
        {
          tierNum: 2,
          name: "safety",
          accept: ["safety", "safety needs", "safety need", "security", "safety and security"],
          kind: "deficiency",
          clues: [
            `has plenty of food at home, yet feels constantly anxious at school due to cyberbullying threats in the corridor`,
            `eats well, but cannot concentrate at work because temporary staff face sudden unannounced redundancy every Friday`,
            `is well-fed, yet lies awake worrying because faulty wiring and broken locks make their rented flat feel dangerous`,
          ],
          trapName: "physiological",
        },
        {
          tierNum: 3,
          name: "love and belonging",
          accept: [
            "love and belonging",
            "love & belonging",
            "belonging",
            "belongingness",
            "love and belonging needs",
          ],
          kind: "deficiency",
          clues: [
            `lives in a safe neighbourhood with nutritious meals, yet eats lunch alone every day after transferring to a new school where nobody speaks to them`,
            `has a secure remote salary and comfortable home, yet feels deeply isolated with zero close friends or community ties`,
            `trains in a well-equipped, safe swimming club, yet feels excluded by cliquey teammates who ignore newcomers`,
          ],
          trapName: "esteem",
        },
        {
          tierNum: 4,
          name: "esteem",
          accept: ["esteem", "esteem needs", "esteem need", "self-esteem"],
          kind: "deficiency",
          clues: [
            `enjoys warm friendships and a secure job, yet feels undervalued and incompetent because managers never credit their diligent coding work`,
            `gets along warmly with classmates in a safe school, yet doubts their own capability after repeated harsh mockery of their presentations`,
            `has supportive family and financial stability, yet craves professional respect and mastery recognition in their craft`,
          ],
          trapName: "love and belonging",
        },
        {
          tierNum: 5,
          name: "self-actualisation",
          accept: [
            "self-actualisation",
            "self actualisation",
            "self-actualization",
            "self actualization",
          ],
          kind: "growth",
          clues: [
            `is healthy, financially secure, warmly loved and respected at work, yet feels restless until they start composing original music to fulfil their creative potential`,
            `has every comfort, friendship and career accolade, yet leaves a routine role to pursue ethical humanitarian innovation aligned with their deepest values`,
            `enjoys stable health, close friends and high academic awards, and now immerses themselves in independent astronomy research purely to realise their fullest potential`,
          ],
          trapName: "esteem",
        },
      ] as const;

      const s = rng.pick(scenarios);
      const clue = rng.pick(s.clues);

      if (tier === 1) {
        return {
          prompt: `**Scenario**: ${person} ${clue}.\n\nGive the **tier number (1 to 5, where 1 = base and 5 = apex)** of **Maslow's Hierarchy of Needs** directly highlighted here.`,
          answer: { type: "number", value: s.tierNum },
          solution: [
            `Count upward from the base: 1 = Physiological, 2 = Safety, 3 = Love & Belonging, 4 = Esteem, 5 = Self-Actualisation.`,
            `This scenario highlights **Tier ${s.tierNum}** (${s.name}).`,
          ],
          hint: "1 = Physiological, 2 = Safety, 3 = Love & Belonging, 4 = Esteem, 5 = Self-Actualisation.",
        };
      }

      if (tier === 2) {
        return {
          prompt: `**Scenario**: ${person} ${clue}.\n\nName the specific **Maslow tier** directly highlighted in ${person}'s situation.`,
          answer: { type: "text", accept: [...s.accept] },
          solution: [
            `Match the clues against Maslow's 5 tiers (Physiological → Safety → Love & Belonging → Esteem → Self-Actualisation).`,
            `${person}'s situation directly targets **${s.name}** (Tier ${s.tierNum}).`,
          ],
          hint: "Recall Please Stop Leaving Every Saturday: Physiological, Safety, Love & belonging, Esteem, Self-actualisation.",
          traps: [
            {
              spec: { type: "text", accept: [s.trapName] },
              feedback: `Close neighbour tier! Re-check whether the clue is about ${s.trapName} versus **${s.name}**.`,
            },
          ],
        };
      }

      // Tier 3: Ask whether the highlighted need is a Deficiency (D) need or a Growth (B) need
      const otherKind = s.kind === "deficiency" ? "growth" : "deficiency";
      return {
        prompt: `**Scenario**: ${person} ${clue} (*Tier ${s.tierNum} of Maslow's pyramid*).\n\nDoes Maslow classify this tier as a **deficiency** need or a **growth** need? Type **deficiency** or **growth**.`,
        answer: {
          type: "text",
          accept:
            s.kind === "deficiency"
              ? ["deficiency", "deficiency need", "d-need", "d need"]
              : ["growth", "growth need", "being", "being need", "b-need", "b need"],
        },
        solution: [
          `Tiers 1–4 (Physiological, Safety, Love & Belonging, Esteem) are **deficiency** needs driven by deprivation.`,
          `Only Tier 5 (Self-Actualisation) is a **growth** (being) need. Tier ${s.tierNum} (${s.name}) is therefore a **${s.kind}** need.`,
        ],
        hint: "Tiers 1–4 fix a lack (deficiency); only Tier 5 expands potential (growth).",
        traps: [
          {
            spec: { type: "text", accept: [otherKind, `${otherKind} need`] },
            feedback: `Remember: Tiers 1–4 are deficiency needs; only Tier 5 (self-actualisation) is a growth need.`,
          },
        ],
      };
    },
  },

  // -------------------------------------------------------------------------
  // DRILL 3: Self-Determination Theory (ARC & Calvo et al. 2010)
  // -------------------------------------------------------------------------
  {
    id: "motivation-and-needs.sdt-arc",
    topicId: "motivation-and-needs",
    title: "Self-Determination Theory & Athlete Persistence Lab (Calvo et al.)",
    level: 2,
    guideRef: "self-determination-theory",
    generate(rng, tier) {
      const person = rng.pick(NAMES);
      const contexts = [
        "junior football academy",
        "competitive rowing squad",
        "school symphony orchestra",
        "robotics engineering club",
        "track-and-field team",
        "IGCSE drama ensemble",
      ] as const;
      const ctx = rng.pick(contexts);

      if (tier === 1 || (tier === 2 && rng.bool(0.6))) {
        const cases = [
          {
            ans: ["autonomy", "perceived autonomy"],
            trap: "competence",
            desc: `lets ${person} co-design weekly training drills and choose which tactical role to explore instead of barking rigid orders`,
            negDesc: `forces ${person} to follow a rigid minute-by-minute script with zero say or personal choice`,
          },
          {
            ans: ["competence", "perceived competence"],
            trap: "autonomy",
            desc: `sets ${person} optimally challenging drills and gives specific, constructive feedback as ${person} masters new skills`,
            negDesc: `sets drills so impossibly advanced that ${person} fails every single attempt and feels incapable of improving`,
          },
          {
            ans: ["relatedness", "perceived relatedness"],
            trap: "autonomy",
            desc: `welcomes ${person} warmly, checks in on their wellbeing, and pairs teammates in supportive peer mentoring`,
            negDesc: `ignores ${person} during breaks and tolerates cliquey hostility that leaves ${person} feeling completely excluded`,
          },
          {
            ans: ["amotivation", "a-motivation"],
            trap: "intrinsic motivation",
            desc: `leaves ${person} saying: 'I see zero point turning up anymore — nothing I do matters and I am quitting next week'`,
            negDesc: `leaves ${person} with a complete absence of intention or perceived value, predicting sport dropout in **Calvo et al. (2010)**`,
          },
        ] as const;

        const pool = tier === 1 ? cases.slice(0, 3) : cases;
        const c = rng.pick(pool);
        const text = tier === 1 ? c.desc : rng.bool(0.5) ? c.desc : c.negDesc;
        const isAmo = c.ans[0] === "amotivation";
        return {
          prompt: isAmo
            ? `In the ${ctx}, a controlling climate ${text}. What **SDT motivation-continuum term** names this total lack of intention to act?`
            : `In the ${ctx}, the coach/leader ${text}. Which of **Deci & Ryan's three basic psychological needs** (**autonomy**, **competence**, or **relatedness**) is directly ${text === c.desc ? "supported" : "thwarted"} here?`,
          answer: { type: "text", accept: [...c.ans] },
          solution: [
            isAmo
              ? `Complete absence of intention or value at the bottom of the SDT continuum is **amotivation** (a key dropout predictor in Calvo et al., 2010).`
              : `In SDT: **autonomy** = volitional choice, **competence** = feeling effective/mastering skills, **relatedness** = warm belonging. Here the target need is **${c.ans[0]}**.`,
          ],
          hint: isAmo
            ? "Starts with 'a-' before 'motivation'."
            : "Choose from ARC: Autonomy (choice), Relatedness (belonging), or Competence (mastery).",
          traps: [
            {
              spec: { type: "text", accept: [c.trap] },
              feedback: `Check the exact focus: choice = autonomy, skill mastery = competence, warm belonging = relatedness.`,
            },
          ],
        };
      }

      // Quantitative Calvo-style persistence vs dropout calculations (Tier 2 & Tier 3)
      const total = rng.pick([100, 200, 300, 400, 500]);
      const dropPct = rng.pick([12, 15, 18, 20, 24, 25, 30, 35, 40]);
      const dropouts = (total * dropPct) / 100;
      const persisters = total - dropouts;
      const persistPct = 100 - dropPct;

      if (tier === 2) {
        return {
          prompt: `In a longitudinal study modelled on **Calvo et al. (2010)** across a ${ctx} of **${total} teenage members**, **${dropouts}** members with low autonomy and relatedness dropped out after one year. What **percentage** of the original ${total} members **persisted**?`,
          answer: { type: "number", value: persistPct },
          solution: [
            `Persisters = ${total} − ${dropouts} = ${persisters} members.`,
            `Persistence percentage = (${persisters} ÷ ${total}) × 100 = **${persistPct}%**.`,
          ],
          hint: "First subtract dropouts from total to find persisters, then divide by total and multiply by 100.",
          traps: [
            {
              spec: { type: "number", value: dropPct },
              feedback: `${dropPct}% is the *dropout* percentage — subtract from 100% to get the percentage who **persisted**.`,
            },
          ],
        };
      }

      // Tier 3: Compare dropout rates between Autonomy-Supportive vs Controlling squads (nEach != 100 so headcount != percentage points)
      const nEach = rng.pick([200, 300, 400, 500]);
      const lowDropPct = rng.pick([6, 8, 10, 12, 15]);
      const highDropPct = rng.pick([26, 30, 34, 38, 42, 45]);
      const lowDrops = (nEach * lowDropPct) / 100;
      const highDrops = (nEach * highDropPct) / 100;
      const diffPP = highDropPct - lowDropPct;
      return {
        prompt: `Researchers led by ${rng.pick(INSTRUCTORS)} compare two ${ctx} cohorts of **${nEach} adolescents each** over one season (**Calvo et al. 2010** paradigm). In the autonomy-supportive cohort, **${lowDrops}** quit; in the controlling cohort, **${highDrops}** quit. By how many **percentage points** is the dropout rate higher in the controlling cohort?`,
        answer: { type: "number", value: diffPP },
        solution: [
          `Autonomy-supportive dropout rate = (${lowDrops} ÷ ${nEach}) × 100 = ${lowDropPct}%.`,
          `Controlling dropout rate = (${highDrops} ÷ ${nEach}) × 100 = ${highDropPct}%.`,
          `Difference = ${highDropPct}% − ${lowDropPct}% = **${diffPP} percentage points**.`,
        ],
        hint: `Convert both cohorts' dropout counts out of ${nEach} into percentages, then subtract.`,
        traps: [
          {
            spec: { type: "number", value: highDrops - lowDrops },
            feedback: `${highDrops - lowDrops} is the raw headcount difference out of ${nEach} — convert to percentage points.`,
          },
        ],
      };
    },
  },

  // -------------------------------------------------------------------------
  // DRILL 4: SMART Goal Audit & Drive / Incentive / Nostalgia Synthesis
  // -------------------------------------------------------------------------
  {
    id: "motivation-and-needs.smart-drive-audit",
    topicId: "motivation-and-needs",
    title: "SMART Goal Audit & Drive / Incentive / Nostalgia Classifier",
    level: 3,
    guideRef: "goal-setting-applications",
    generate(rng, tier) {
      const person = rng.pick(NAMES);

      if (tier === 1) {
        // Identify missing SMART letter
        const missingCases = [
          {
            letter: ["measurable", "m"],
            trap: "time-bound",
            goal: `'Improve my IGCSE Psychology Paper 2 vocabulary flashcards significantly before Friday 5 pm.'`,
            why: "It names the topic (Specific) and a Friday 5 pm deadline (Time-bound), but 'significantly' has **no number or percentage** (**Measurable**).",
          },
          {
            letter: ["time-bound", "time bound", "t", "timely"],
            trap: "measurable",
            goal: `'Complete 4 timed 15-mark Research Methods practice papers scoring at least 85%.'`,
            why: "It is Specific (Research Methods papers) and Measurable (4 papers, ≥85%), but states **no deadline or schedule** (**Time-bound**).",
          },
          {
            letter: ["specific", "s"],
            trap: "achievable",
            goal: `'Spend 45 minutes every Tuesday and Thursday for 4 weeks improving at school stuff.'`,
            why: "It has numbers (45 min) and a 4-week schedule, but *'school stuff'* fails to pinpoint the exact subject or skill (**Specific**).",
          },
          {
            letter: ["achievable", "attainable", "a", "realistic"],
            trap: "specific",
            goal: `'Cut my 100 m sprint time from 14.8 seconds down to a world-record 9.5 seconds by next Tuesday.'`,
            why: "Although Specific, Measurable (9.5 s) and Time-bound (next Tuesday), dropping 5.3 seconds in one week is physically impossible (**Achievable**).",
          },
        ] as const;

        const c = rng.pick(missingCases);
        const taskLabels = [
          "writes a revision target",
          "sets a sport training target",
          "drafts a personal study plan",
          "records a coaching goal",
        ] as const;
        return {
          prompt: `${person} ${rng.pick(taskLabels)}: ${c.goal}\n\nWhich **SMART** word (**Specific**, **Measurable**, **Achievable**, or **Time-bound**) is clearly violated or missing here?`,
          answer: { type: "text", accept: [...c.letter] },
          solution: [c.why],
          hint: "Check all letters of SMART: exact task (S), number/% (M), realistic stretch (A), deadline (T).",
          traps: [
            {
              spec: { type: "text", accept: [c.trap] },
              feedback: `Look closer — ${c.trap} is already addressed in the quote! Check which criterion is missing or impossible.`,
            },
          ],
        };
      }

      if (tier === 2) {
        // Classify Drive-Reduction (primary vs secondary) vs Incentive vs Psychodynamic Nostalgia
        const mechanisms = [
          {
            accept: ["primary drive", "primary", "primary biological drive"],
            trap: "secondary drive",
            stem: `gulps two glasses of water immediately after sweating heavily on a hot afternoon hike to restore cellular hydration`,
            exp: "Cellular dehydration triggers an innate, unlearned homeostatic survival tension — a **primary drive** in Hull's theory.",
          },
          {
            accept: ["secondary drive", "secondary", "acquired drive"],
            trap: "primary drive",
            stem: `works extra evening tutoring shifts to accumulate savings in a bank account`,
            exp: "Currency is not innately biological; its motivating power is learned via association with buying primary needs — a **secondary drive**.",
          },
          {
            accept: ["incentive", "incentive theory", "cognitive incentive", "cognitive incentive theory"],
            trap: "drive-reduction",
            stem: `orders a warm cinnamon pastry solely because the bakery aroma smells irresistible right after eating a full lunch`,
            exp: "With zero biological hunger deficit, an attractive external stimulus **pulls** behaviour — **Incentive Theory**.",
          },
          {
            accept: ["nostalgia", "nostalgic motivation", "psychodynamic", "personal nostalgia"],
            trap: "incentive",
            stem: `donates generously after a charity poster showing 1990s family board games awakens warm childhood memories (**Merchant et al. 2013**)`,
            exp: "Warm longing for an idealised personal past buffering negative thoughts and lifting empathy/giving is **nostalgia** (Merchant et al. 2013).",
          },
        ] as const;

        const m = rng.pick(mechanisms);
        const days = ["On Monday", "During the weekend", "After work", "On Friday evening", "During the holidays"] as const;
        return {
          prompt: `${rng.pick(days)}, ${person} ${m.stem}.\n\nIdentify the motivational concept (**primary drive**, **secondary drive**, **incentive**, or **nostalgia**) illustrated here.`,
          answer: { type: "text", accept: [...m.accept] },
          solution: [m.exp],
          hint: "Distinguish innate homeostatic survival (primary drive), learned money/grades (secondary drive), external food allure when full (incentive), and warm childhood memories (nostalgia).",
          traps: [
            {
              spec: { type: "text", accept: [m.trap] },
              feedback: `Re-read the exact mechanism: ${m.exp}`,
            },
          ],
        };
      }

      // Tier 3: Multi-step SMART progress rate calculation (donePct != 50 so completed != remaining)
      const weeks = rng.pick([4, 5, 6, 8, 10]);
      const sessionsPerWeek = rng.pick([2, 4, 5]);
      const itemsPerSession = rng.pick([5, 10, 15, 20, 25]);
      const totalTarget = weeks * sessionsPerWeek * itemsPerSession;
      const donePct = rng.pick([20, 25, 40, 60, 75, 80]);
      const completed = (totalTarget * donePct) / 100;
      const remaining = totalTarget - completed;
      if (Number.isInteger(remaining)) {
        return {
          prompt: `${person} sets a **SMART** revision goal: complete **${itemsPerSession} practice questions** per session, **${sessionsPerWeek} sessions per week**, over **${weeks} weeks**. Midway through the schedule, ${person} has completed **${donePct}%** of the entire ${weeks}-week target. How many questions **remain** to hit 100% of the SMART goal?`,
          answer: { type: "number", value: remaining },
          solution: [
            `Total SMART target = ${itemsPerSession} × ${sessionsPerWeek} × ${weeks} = ${totalTarget} questions.`,
            `Completed = ${donePct}% of ${totalTarget} = ${completed}; Remaining = ${totalTarget} − ${completed} = **${remaining} questions**.`,
          ],
          hint: "First multiply items × sessions/week × weeks for the total target, then work out the remaining percentage.",
          traps: [
            {
              spec: { type: "number", value: completed },
              feedback: `${completed} is the number *already completed* (${donePct}%) — subtract from ${totalTarget} to find how many **remain**.`,
            },
          ],
        };
      }

      return {
        prompt: `${person} sets a **SMART** goal to complete **${itemsPerSession} flashcards** per day, **${sessionsPerWeek} days a week**, for **${weeks} weeks**. How many flashcards in **total** will ${person} complete?`,
        answer: { type: "number", value: totalTarget },
        solution: [
          `Total = ${itemsPerSession} × ${sessionsPerWeek} × ${weeks} = **${totalTarget} flashcards**.`,
        ],
        hint: "Multiply daily flashcards × days per week × number of weeks.",
      };
    },
  },
];
