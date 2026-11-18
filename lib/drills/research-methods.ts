import type { Drill } from "./types.ts";
import type { Trap } from "../types.ts";
import { clean, gcd, num, roundTo } from "./helpers.ts";

const RESEARCHERS = [
  "Dr Tan",
  "Dr Patel",
  "Dr Mensah",
  "Dr Chen",
  "Dr Silva",
  "Dr Kowalski",
  "Dr Lim",
  "Dr Okafor",
  "Dr Sato",
  "Dr Rao",
] as const;

const CONTEXTS = [
  { unit: "words", label: "words recalled on a serial memory test" },
  { unit: "ms", label: "reaction times (ms) on a visual-search task" },
  { unit: "s", label: "latencies (seconds) before helping a confederate" },
  { unit: "points", label: "empathy scores on a 30-point self-report scale" },
  { unit: "errors", label: "tracking errors during a sleep-deprivation trial" },
  { unit: "mm", label: "size-estimation errors (mm) on the Müller-Lyer illusion" },
] as const;

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Mean, Median, Mode & Range (with Outlier Sensitivity)
  // =========================================================================
  {
    id: "research-methods.descriptive-stats",
    topicId: "research-methods",
    title: "Mean, median, mode & range (with outlier traps)",
    level: 1,
    guideRef: "data-analysis-graphs",
    generate(rng, tier) {
      const researcher = rng.pick(RESEARCHERS);
      const ctx = rng.pick(CONTEXTS);
      const modeKind =
        tier === 1
          ? rng.pick(["mean", "median-odd", "mode", "range"] as const)
          : tier === 2
            ? rng.pick(["mean-dp", "median-even", "mode", "range", "outlier-choice"] as const)
            : rng.pick(["mean-dp", "median-even", "missing-score", "outlier-diff"] as const);

      if (modeKind === "mean" || modeKind === "mean-dp") {
        const n = tier === 1 ? 5 : tier === 2 ? 6 : 8;
        const base = rng.int(8, 35);
        const raw: number[] = [];
        for (let i = 0; i < n; i++) raw.push(base + rng.int(-6, 9));
        if (modeKind === "mean") {
          const sum = raw.reduce((a, b) => a + b, 0);
          const rem = sum % n;
          if (rem !== 0) raw[0] += n - rem;
        } else {
          // Force a non-integer or clean 1 d.p. challenge
          const sum = raw.reduce((a, b) => a + b, 0);
          if (sum % n === 0) raw[0] += 1;
        }
        const shuffled = rng.shuffle(raw);
        const sum = shuffled.reduce((a, b) => a + b, 0);
        const exactMean = sum / n;
        const ans = modeKind === "mean" ? clean(exactMean) : roundTo(exactMean, 1);
        const sorted = [...shuffled].sort((a, b) => a - b);
        const med =
          n % 2 === 1
            ? sorted[(n - 1) / 2]
            : roundTo((sorted[n / 2 - 1] + sorted[n / 2]) / 2, 2);
        const traps: Trap[] = [];
        if (Math.abs(med - ans) > 0.15) {
          traps.push({
            spec: { type: "number", value: med },
            feedback: `${num(med)} is the median — for the mean, add all ${n} scores and divide by ${n}.`,
          });
        }
        if (Math.abs(sum - ans) > 1) {
          traps.push({
            spec: { type: "number", value: sum },
            feedback: `${sum} is the total sum — remember to divide by the number of participants (${n}).`,
          });
        }
        return {
          prompt:
            modeKind === "mean"
              ? `${researcher} records ${n} participants' ${ctx.label}: **${shuffled.join(", ")}**. Calculate the **mean**.`
              : `${researcher} records ${n} participants' ${ctx.label}: **${shuffled.join(", ")}**. Calculate the **mean**, giving your answer to **1 decimal place**.`,
          answer:
            modeKind === "mean"
              ? { type: "number", value: ans }
              : { type: "number", value: ans, tolerance: 0.05 },
          solution: [
            `Sum all ${n} scores: {{${shuffled.join(" + ")} = ${sum}}}.`,
            modeKind === "mean"
              ? `Divide by {{N = ${n}}}: {{${sum} / ${n} = ${ans}}}.`
              : `Divide by {{N = ${n}}}: {{${sum} / ${n} ~= ${ans}}} (to 1 d.p.).`,
          ],
          hint: `Add all ${n} numbers together and divide by ${n}.`,
          traps,
        };
      }

      if (modeKind === "median-odd" || modeKind === "median-even") {
        const n = modeKind === "median-odd" ? 7 : 8;
        const start = rng.int(5, 28);
        const sorted: number[] = [start];
        for (let i = 1; i < n; i++) sorted.push(sorted[i - 1] + rng.int(1, 5));
        // Ensure unsorted order differs in the middle so sorting actually matters
        let shuffled = rng.shuffle(sorted);
        for (let tries = 0; tries < 20; tries++) {
          const unsortedMid =
            n === 7 ? shuffled[3] : roundTo((shuffled[3] + shuffled[4]) / 2, 1);
          const trueMid =
            n === 7 ? sorted[3] : roundTo((sorted[3] + sorted[4]) / 2, 1);
          if (Math.abs(unsortedMid - trueMid) >= 1) break;
          shuffled = rng.shuffle(sorted);
        }
        const ans =
          n === 7 ? sorted[3] : roundTo((sorted[3] + sorted[4]) / 2, 1);
        const unsortedMid =
          n === 7 ? shuffled[3] : roundTo((shuffled[3] + shuffled[4]) / 2, 1);
        const traps: Trap[] = [];
        if (Math.abs(unsortedMid - ans) > 0.2) {
          traps.push({
            spec: { type: "number", value: unsortedMid },
            feedback: "You picked the middle of the UNSORTED list — always sort scores from lowest to highest first!",
          });
        }
        return {
          prompt: `${researcher} measures ${n} participants' ${ctx.label}: **${shuffled.join(", ")}**. Find the **median** score.`,
          answer: { type: "number", value: ans },
          solution: [
            `Sort the ${n} scores from lowest to highest: \`${sorted.join(", ")}\`.`,
            n === 7
              ? `With {{N = 7}}, the 4th ordered score is **${ans}**.`
              : `With {{N = 8}} (even), average the 4th (\`${sorted[3]}\`) and 5th (\`${sorted[4]}\`) ordered scores: {{(${sorted[3]} + ${sorted[4]}) / 2 = ${ans}}}.`,
          ],
          hint: "Sort all scores in ascending order BEFORE finding the middle value!",
          traps,
        };
      }

      if (modeKind === "mode") {
        const modeVal = rng.int(6, 29);
        const others: number[] = [];
        while (others.length < 5) {
          const cand = rng.int(4, 34);
          if (cand !== modeVal && !others.includes(cand)) others.push(cand);
        }
        const raw = rng.shuffle([modeVal, modeVal, modeVal, ...others]);
        const sorted = [...raw].sort((a, b) => a - b);
        const med = roundTo((sorted[3] + sorted[4]) / 2, 1);
        const traps: Trap[] = [];
        if (Math.abs(med - modeVal) > 0.2) {
          traps.push({
            spec: { type: "number", value: med },
            feedback: `${num(med)} is the median — the mode is the single value that occurs most often!`,
          });
        }
        return {
          prompt: `${researcher} collects 8 participants' ${ctx.label}: **${raw.join(", ")}**. What is the **mode**?`,
          answer: { type: "number", value: modeVal },
          solution: [
            `Count how often each value appears in \`${sorted.join(", ")}\`.`,
            `**${modeVal}** occurs 3 times (every other score occurs once), so **Mode = ${modeVal}**.`,
          ],
          hint: "Find the value that appears most frequently.",
          traps,
        };
      }

      if (modeKind === "range") {
        const low = rng.int(4, 22);
        const span = rng.int(9, 28);
        const high = low + span;
        const mids: number[] = [];
        for (let i = 0; i < 5; i++) mids.push(rng.int(low + 1, high - 1));
        // Put non-extremes first and last to catch first-minus-last errors
        const raw = [mids[0], ...rng.shuffle([low, high, mids[1], mids[2], mids[3]]), mids[4]];
        const firstLastDiff = Math.abs(raw[raw.length - 1] - raw[0]);
        const traps: Trap[] = [];
        if (firstLastDiff !== span) {
          traps.push({
            spec: { type: "number", value: firstLastDiff },
            feedback: "You subtracted the first and last numbers in the list — find the overall HIGHEST minus the overall LOWEST!",
          });
        }
        return {
          prompt: `${researcher} records 7 participants' ${ctx.label}: **${raw.join(", ")}**. Calculate the **range**.`,
          answer: { type: "number", value: span },
          solution: [
            `Highest score = \`${high}\`; Lowest score = \`${low}\`.`,
            `Range = {{${high} - ${low} = ${span}}}.`,
          ],
          hint: "Range = Highest value − Lowest value.",
          traps,
        };
      }

      if (modeKind === "outlier-choice") {
        const b = rng.int(10, 24);
        const normal = [b, b + 1, b + 2, b + 2, b + 3, b + 4];
        const outlier = b + rng.int(65, 120);
        const all = rng.shuffle([...normal, outlier]);
        return {
          prompt: `${researcher} records 7 participants' ${ctx.label}: **${all.join(", ")}** (one participant was distracted by a fire alarm, causing the extreme score of \`${outlier}\`). Which average (**mean**, **median**, or **mode**) best represents typical performance without distortion by the outlier?`,
          answer: { type: "text", accept: ["median"], display: "median" },
          solution: [
            `The extreme outlier (\`${outlier}\`) pulls the **mean** sharply upward away from the other 6 scores.`,
            `The **median** (\`${b + 2}\`) sits in the middle of the ordered scores and is completely unaffected by extreme outliers.`,
          ],
          hint: "Which measure of central tendency resists extreme anomalous outliers?",
          traps: [
            {
              spec: { type: "text", accept: ["mean"] },
              feedback: "The mean uses every score, so the extreme outlier pulls it way above typical participants — choose the median!",
            },
          ],
        };
      }

      if (modeKind === "missing-score") {
        const n = rng.pick([5, 6] as const);
        const targetMean = rng.int(11, 26);
        const total = n * targetMean;
        const known: number[] = [];
        let running = 0;
        for (let i = 0; i < n - 1; i++) {
          const v = Math.max(2, targetMean + rng.int(-5, 5));
          known.push(v);
          running += v;
        }
        let missing = total - running;
        if (missing <= 0) {
          const bump = Math.abs(missing) + rng.int(4, 10);
          const extraMean = Math.ceil(bump / n);
          missing += extraMean * n;
          return {
            prompt: `${researcher} tests ${n} participants on ${ctx.label}. The first ${n - 1} scores are **${known.join(", ")}**, and the overall **mean** of all ${n} scores is **${targetMean + extraMean}**. Find the ${n}th participant's score.`,
            answer: { type: "number", value: missing },
            solution: [
              `Total sum of all ${n} scores = {{${n} * ${targetMean + extraMean} = ${n * (targetMean + extraMean)}}}.`,
              `Sum of known ${n - 1} scores = {{${known.join(" + ")} = ${running}}}.`,
              `Missing score = {{${n * (targetMean + extraMean)} - ${running} = ${missing}}}.`,
            ],
            hint: `Multiply the mean by ${n} to find what all ${n} scores must add up to.`,
          };
        }
        return {
          prompt: `${researcher} tests ${n} participants on ${ctx.label}. The first ${n - 1} scores are **${known.join(", ")}**, and the overall **mean** of all ${n} scores is **${targetMean}**. Find the ${n}th participant's score.`,
          answer: { type: "number", value: missing },
          solution: [
            `Total sum of all ${n} scores = {{${n} * ${targetMean} = ${total}}}.`,
            `Sum of the first ${n - 1} scores = {{${known.join(" + ")} = ${running}}}.`,
            `Missing score = {{${total} - ${running} = ${missing}}}.`,
          ],
          hint: `Use Total = Mean × ${n}, then subtract the known scores.`,
        };
      }

      // outlier-diff: how much removing an outlier reduces the mean (1 d.p.)
      const b = rng.int(11, 25);
      const valid = [b, b + 2, b + 3, b + 4, b + 5, b + 6]; // sum = 6b + 20
      const outlier = b + rng.int(55, 95);
      const sum7 = valid.reduce((a, c) => a + c, 0) + outlier;
      const sum6 = valid.reduce((a, c) => a + c, 0);
      const mean7 = sum7 / 7;
      const mean6 = sum6 / 6;
      const diff = roundTo(mean7 - mean6, 1);
      const newMean1dp = roundTo(mean6, 1);
      const traps: Trap[] = [];
      if (Math.abs(newMean1dp - diff) > 0.2) {
        traps.push({
          spec: { type: "number", value: newMean1dp, tolerance: 0.05 },
          feedback: `${num(newMean1dp)} is the new 6-person mean — subtract it from the original 7-person mean (${roundTo(mean7, 2)})!`,
        });
      }
      return {
        prompt: `Seven participants record ${ctx.label}: **${valid.join(", ")}, ${outlier}**. By how much does **removing the anomalous outlier (\`${outlier}\`)** reduce the **mean**? Give your answer to **1 decimal place**.`,
        answer: { type: "number", value: diff, tolerance: 0.06 },
        solution: [
          `Original 7-person mean = {{${sum7} / 7 ~= ${roundTo(mean7, 2)}}}.`,
          `Cleaned 6-person mean = {{${sum6} / 6 ~= ${roundTo(mean6, 2)}}}.`,
          `Reduction in mean = {{${roundTo(mean7, 2)} - ${roundTo(mean6, 2)} ~= ${diff}}} (to 1 d.p.).`,
        ],
        hint: "Divide by 7 with the outlier, divide by 6 without the outlier, then subtract!",
        traps,
      };
    },
  },

  // =========================================================================
  // DRILL 2: Percentages, Percentage Change & Participant Ratios
  // =========================================================================
  {
    id: "research-methods.percentages-ratios",
    topicId: "research-methods",
    title: "Percentages, percentage change & participant ratios",
    level: 2,
    guideRef: "data-analysis-graphs",
    generate(rng, tier) {
      const researcher = rng.pick(RESEARCHERS);
      const kind =
        tier === 1
          ? rng.pick(["pct-of-total", "ratio-simple"] as const)
          : tier === 2
            ? rng.pick(["pct-of-total-dp", "pct-change", "ratio-complement"] as const)
            : rng.pick(["pct-change-dp", "two-group-weighted", "ratio-complement"] as const);

      if (kind === "pct-of-total" || kind === "pct-of-total-dp") {
        const totals = kind === "pct-of-total" ? [20, 25, 40, 50, 80, 120, 200] : [30, 35, 45, 60, 70, 90, 110];
        const total = rng.pick(totals);
        const part = rng.int(Math.ceil(total * 0.15), Math.floor(total * 0.85));
        const rawPct = (part / total) * 100;
        const ans = kind === "pct-of-total" ? roundTo(rawPct, 2) : roundTo(rawPct, 1);
        const beh = rng.pick([
          "stopped to help the confederate",
          "recalled the primacy words accurately",
          "crawled across the visual cliff",
          "returned their sleep diary completed",
          "used grammatical overregularisation",
        ]);
        const compAns = roundTo(100 - ans, 1);
        const traps: Trap[] = [];
        if (Math.abs(compAns - ans) > 0.5) {
          traps.push({
            spec: { type: "number", value: compAns, tolerance: 0.1 },
            feedback: `${num(compAns)}% is the percentage who did NOT show the behaviour — calculate (${part} ÷ ${total}) × 100.`,
          });
        }
        return {
          prompt:
            kind === "pct-of-total"
              ? `In ${researcher}'s study of **${total} participants**, **${part}** ${beh}. Calculate the **percentage** of participants who ${beh}.`
              : `In ${researcher}'s study of **${total} participants**, **${part}** ${beh}. Calculate the **percentage** who ${beh}, rounded to **1 decimal place**.`,
          answer:
            kind === "pct-of-total"
              ? { type: "number", value: ans, tolerance: 0.05 }
              : { type: "number", value: ans, tolerance: 0.06 },
          solution: [
            `Divide subgroup by total sample and multiply by 100: {{(${part} / ${total}) * 100 = ${ans}}}%.`,
          ],
          hint: `Compute (${part} ÷ ${total}) × 100.`,
          traps,
        };
      }

      if (kind === "pct-change" || kind === "pct-change-dp") {
        const orig = kind === "pct-change" ? rng.pick([10, 12, 16, 20, 24, 25, 40, 50]) : rng.int(13, 39);
        const dir = rng.pick(["increase", "decrease"] as const);
        const delta = rng.int(2, Math.max(3, Math.floor(orig * 0.45)));
        const nextVal = dir === "increase" ? orig + delta : orig - delta;
        const ans = roundTo((delta / orig) * 100, 1);
        const wrongDenom = roundTo((delta / nextVal) * 100, 1);
        const metric = rng.pick([
          "mean words recalled",
          "mean prosocial helping score",
          "mean REM dream-recall count",
          "mean intrinsic motivation score",
        ]);
        const traps: Trap[] = [];
        if (Math.abs(wrongDenom - ans) > 0.3) {
          traps.push({
            spec: { type: "number", value: wrongDenom, tolerance: 0.1 },
            feedback: `You divided the change (${delta}) by the NEW value (${nextVal}) — always divide by the ORIGINAL baseline (${orig})!`,
          });
        }
        return {
          prompt: `In ${researcher}'s experiment, ${metric} changed from **${orig}** in the baseline condition to **${nextVal}** in the experimental condition. Calculate the **percentage ${dir}**${kind === "pct-change-dp" ? " to **1 decimal place**" : ""}.`,
          answer: { type: "number", value: ans, tolerance: 0.06 },
          solution: [
            `Change = {{${Math.max(orig, nextVal)} - ${Math.min(orig, nextVal)} = ${delta}}}.`,
            `Divide by the **original** baseline (\`${orig}\`): {{(${delta} / ${orig}) * 100 ~= ${ans}}}%.`,
          ],
          hint: `Divide the change (${delta}) by the ORIGINAL value (${orig}), then multiply by 100.`,
          traps,
        };
      }

      if (kind === "two-group-weighted") {
        const nA = rng.pick([40, 60, 80, 120]);
        const nB = rng.pick([60, 80, 100, 140]);
        const pctA = rng.pick([25, 30, 40, 50, 60, 75, 80]);
        const pctB = rng.pick([10, 20, 25, 30, 50, 70].filter((p) => p !== pctA));
        const cA = Math.round((pctA / 100) * nA);
        const cB = Math.round((pctB / 100) * nB);
        // Ensure exact integer counts
        const exactA = (pctA * nA) % 100 === 0 ? cA : nA / 2;
        const usedPctA = (pctA * nA) % 100 === 0 ? pctA : 50;
        const exactB = (pctB * nB) % 100 === 0 ? cB : nB / 2;
        const usedPctB = (pctB * nB) % 100 === 0 ? pctB : 50;
        const totalHelpers = exactA + exactB;
        const unweightedPct = ((usedPctA + usedPctB) / 200) * (nA + nB);
        const traps: Trap[] = [];
        if (Math.abs(unweightedPct - totalHelpers) >= 1) {
          traps.push({
            spec: { type: "number", value: roundTo(unweightedPct, 1), tolerance: 0.2 },
            feedback: "Don't average the two percentages directly — the two groups have different sizes, so work out each group's headcount separately!",
          });
        }
        return {
          prompt: `${researcher} tests **${nA} Alone participants** (of whom **${usedPctA}%** helped) and **${nB} Group participants** (of whom **${usedPctB}%** helped). How many participants **in total** across both conditions helped?`,
          answer: { type: "number", value: totalHelpers },
          solution: [
            `Alone helpers = {{${usedPctA}% * ${nA} = ${exactA}}}.`,
            `Group helpers = {{${usedPctB}% * ${nB} = ${exactB}}}.`,
            `Total helpers = {{${exactA} + ${exactB} = ${totalHelpers}}} participants.`,
          ],
          hint: "Calculate the number of helpers in each group separately, then add them.",
          traps,
        };
      }

      // ratio-simple or ratio-complement
      const k = rng.int(3, 9);
      const a = rng.int(2, 7);
      let b = rng.int(2, 7);
      while (gcd(a, b) !== 1 || a === b) b = rng.int(2, 9);
      const countA = a * k;
      const countB = b * k;
      const total = countA + countB;
      if (kind === "ratio-simple") {
        return {
          prompt: `In ${researcher}'s perception task, **${countA} participants** saw the duck first and **${countB} participants** saw the rabbit first. Write the **ratio** of duck-perceivers to rabbit-perceivers in its **simplest form**.`,
          answer: { type: "ratio", parts: [a, b], simplest: true },
          solution: [
            `Start with \`${countA} : ${countB}\`.`,
            `Divide both parts by their highest common factor (\`${k}\`): **${a} : ${b}**.`,
          ],
          hint: `Divide both ${countA} and ${countB} by their highest common factor.`,
          traps: [
            {
              spec: { type: "ratio", parts: [b, a] },
              feedback: `Keep the exact order asked: duck (${countA}) : rabbit (${countB}) = ${a} : ${b}.`,
            },
          ],
        };
      }
      const gTot = gcd(countA, total);
      return {
        prompt: `Out of **${total} commuters** in ${researcher}'s subway field study, **${countA} helped** the collapsed passenger and the rest **did not help**. Write the **simplest ratio** of **helpers to non-helpers**.`,
        answer: { type: "ratio", parts: [a, b], simplest: true },
        solution: [
          `Non-helpers = {{${total} - ${countA} = ${countB}}}.`,
          `Helpers : Non-helpers = \`${countA} : ${countB}\` → divide both by \`${k}\` to get **${a} : ${b}**.`,
        ],
        hint: `First subtract ${countA} from ${total} to find non-helpers, then simplify!`,
        traps: [
          {
            spec: { type: "ratio", parts: [countA / gTot, total / gTot] },
            feedback: `You compared helpers (${countA}) to the TOTAL sample (${total}) — subtract first to get non-helpers (${countB})!`,
          },
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Variables, Hypotheses & Experimental Controls
  // =========================================================================
  {
    id: "research-methods.variables-hypotheses",
    topicId: "research-methods",
    title: "Identify IV, DV, hypothesis types & experimental controls",
    level: 1,
    guideRef: "variables-hypotheses-controls",
    generate(rng, tier) {
      const researcher = rng.pick(RESEARCHERS);
      const n = rng.int(24, 96);
      const studies = [
        {
          ivA: `${rng.pick([100, 150, 200])} mg of caffeine`,
          ivB: "an identical decaf placebo drink",
          dv: `words recalled out of ${rng.pick([20, 25, 30])}`,
          dirWord: "more",
        },
        {
          ivA: `${rng.pick([4, 5])} hours of sleep`,
          ivB: `${rng.pick([8, 9])} hours of sleep`,
          dv: `lane-drift errors on a ${rng.pick([15, 20, 30])}-minute driving simulator`,
          dirWord: "more",
        },
        {
          ivA: `studying in ${rng.pick([65, 75])} dB café noise`,
          ivB: "studying in a silent room",
          dv: `comprehension score out of ${rng.pick([20, 25, 40])}`,
          dirWord: "lower",
        },
        {
          ivA: "wearing blue-light blocking glasses before bed",
          ivB: "wearing clear plain-glass frames before bed",
          dv: "minutes taken to fall asleep on EEG",
          dirWord: "fewer",
        },
        {
          ivA: "playing a prosocial rescue game for 20 minutes",
          ivB: "playing a neutral puzzle game for 20 minutes",
          dv: `dropped pencils picked up out of ${rng.pick([10, 12, 15])}`,
          dirWord: "more",
        },
      ] as const;
      const st = rng.pick(studies);
      const qType =
        tier === 1
          ? rng.pick(["hyp-dir", "hyp-nondir", "hyp-null", "pilot"] as const)
          : tier === 2
            ? rng.pick(["hyp-dir", "hyp-nondir", "single-blind", "double-blind", "demand", "standardisation"] as const)
            : rng.pick(["confounding", "investigator", "double-blind", "operationalisation"] as const);

      if (qType === "hyp-dir") {
        return {
          prompt: `In a study of ${n} adults, ${researcher} predicts: *"Participants given ${st.ivA} will record **${st.dirWord}** ${st.dv} than participants given ${st.ivB}."* Name this **type of hypothesis** (\`directional\`, \`non-directional\`, or \`null\`).`,
          answer: {
            type: "text",
            accept: ["directional", "directional hypothesis", "one-tailed", "one-tailed hypothesis"],
            display: "directional hypothesis",
          },
          solution: [
            `Because the prediction explicitly states the expected direction (**"${st.dirWord}"**), it is a **directional (one-tailed) hypothesis**.`,
          ],
          hint: `Notice the comparative word "${st.dirWord}" stating which condition scores higher/lower.`,
          traps: [
            {
              spec: { type: "text", accept: ["non-directional", "non-directional hypothesis"] },
              feedback: `A non-directional hypothesis only predicts 'a difference' — saying "${st.dirWord}" specifies a clear direction!`,
            },
          ],
        };
      }

      if (qType === "hyp-nondir") {
        return {
          prompt: `In a study of ${n} volunteers, ${researcher} predicts: *"There will be a **significant difference** in ${st.dv} between participants exposed to ${st.ivA} and those exposed to ${st.ivB}."* Name this **type of hypothesis** (\`directional\`, \`non-directional\`, or \`null\`).`,
          answer: {
            type: "text",
            accept: ["non-directional", "non-directional hypothesis", "two-tailed", "two-tailed hypothesis"],
            display: "non-directional hypothesis",
          },
          solution: [
            `Predicting **"a significant difference"** without stating which condition scores higher is a **non-directional (two-tailed) hypothesis**.`,
          ],
          hint: "Does it state which group wins, or just 'a difference'?",
          traps: [
            {
              spec: { type: "text", accept: ["null", "null hypothesis"] },
              feedback: "A null hypothesis predicts NO difference — predicting 'a difference' without direction is non-directional!",
            },
          ],
        };
      }

      if (qType === "hyp-null") {
        return {
          prompt: `${researcher} tests ${n} participants and states: *"There will be **no significant difference** in ${st.dv} between ${st.ivA} and ${st.ivB}; any difference observed is due to chance."* Name this **type of hypothesis**.`,
          answer: {
            type: "text",
            accept: ["null", "null hypothesis"],
            display: "null hypothesis",
          },
          solution: [
            `Predicting **no significant difference** (attributing any difference to chance) defines the **null hypothesis**.`,
          ],
          hint: "No real effect (zero difference beyond chance).",
        };
      }

      if (qType === "pilot") {
        const smallN = rng.int(5, 10);
        return {
          prompt: `Before testing all ${n} participants on ${st.dv}, ${researcher} runs a preliminary trial on just **${smallN} people** to check that instructions are clear and the task isn't too easy. What is this small preliminary trial run called?`,
          answer: {
            type: "text",
            accept: ["pilot study", "pilot", "pilot test"],
            display: "pilot study",
          },
          solution: [
            `A small-scale preliminary 'dress rehearsal' run to identify procedural flaws or ceiling/floor effects before main testing is a **pilot study**.`,
          ],
          hint: "Two words: '______ study' (like a test flight).",
        };
      }

      if (qType === "single-blind") {
        return {
          prompt: `In ${researcher}'s trial of ${n} participants comparing ${st.ivA} vs ${st.ivB}, the **participants do not know** which condition they received, although **${researcher} does know**. Name this experimental control.`,
          answer: {
            type: "text",
            accept: ["single-blind", "single blind", "single-blind procedure", "single blind procedure"],
            display: "single-blind procedure",
          },
          solution: [
            `When **only the participants** are unaware of their condition (curbing demand characteristics), it is a **single-blind procedure**.`,
          ],
          hint: "Only ONE side (the participants) is kept blind to the condition.",
          traps: [
            {
              spec: { type: "text", accept: ["double-blind", "double blind"] },
              feedback: `${researcher} DOES know the condition here — double-blind requires BOTH participant and experimenter to be unaware!`,
            },
          ],
        };
      }

      if (qType === "double-blind") {
        return {
          prompt: `An independent technician labels treatments X and Y so **neither the ${n} participants nor ${researcher}** knows who received ${st.ivA} vs ${st.ivB} while measuring ${st.dv}. Name this experimental control.`,
          answer: {
            type: "text",
            accept: ["double-blind", "double blind", "double-blind procedure", "double blind procedure"],
            display: "double-blind procedure",
          },
          solution: [
            `Keeping **both** participants and the researcher blind to condition allocation is a **double-blind procedure**, eliminating demand characteristics and investigator effects.`,
          ],
          hint: "BOTH the participants AND the researcher are blind to condition codes.",
        };
      }

      if (qType === "demand") {
        return {
          prompt: `During ${researcher}'s study of ${n} students (${st.ivA} vs ${st.ivB}), several students spot clues on ${researcher}'s clipboard, guess the hypothesis, and deliberately try harder on ${st.dv}. What two-word term describes these cues?`,
          answer: {
            type: "text",
            accept: ["demand characteristics", "demand characteristic"],
            display: "demand characteristics",
          },
          solution: [
            `Cues in a research situation that reveal the aim and lead participants to alter their natural behaviour are **demand characteristics**.`,
          ],
          hint: "Starts with 'demand c…'.",
        };
      }

      if (qType === "standardisation") {
        const temp = rng.int(19, 23);
        return {
          prompt: `${researcher} ensures all ${n} participants read the exact same printed script, sit in a ${temp} °C booth, and have identical timings while measuring ${st.dv}. What one-word term describes keeping procedures identical for everyone?`,
          answer: {
            type: "text",
            accept: ["standardisation", "standardization"],
            display: "standardisation",
          },
          solution: [
            `Keeping instructions, environment and timings identical across every participant is **standardisation**.`,
          ],
          hint: "Every participant gets the exact same 'standard' experience.",
        };
      }

      if (qType === "confounding") {
        return {
          prompt: `In ${researcher}'s study (${n} participants), everyone given ${st.ivA} happens to be tested at 09:00 while everyone given ${st.ivB} is tested at 23:00 when exhausted. Because time of day varied **systematically** with the IV and ruined internal validity, what type of variable has time of day become?`,
          answer: {
            type: "text",
            accept: ["confounding variable", "confounding"],
            display: "confounding variable",
          },
          solution: [
            `An unwanted variable that varies **systematically** alongside the IV so its effect on the DV cannot be separated from the IV is a **confounding variable**.`,
          ],
          hint: "Not merely a random extraneous nuisance — it systematically co-varied with the IV!",
          traps: [
            {
              spec: { type: "text", accept: ["dependent variable"] },
              feedback: "Time of day wasn't the measured outcome — it systematically muddied the IV, making it a confounding variable!",
            },
          ],
        };
      }

      if (qType === "investigator") {
        return {
          prompt: `While testing ${n} participants on ${st.dv}, ${researcher} unconsciously smiles and nods warmly whenever participants in the ${st.ivA} group answer correctly, subtly boosting their confidence. What bias is this?`,
          answer: {
            type: "text",
            accept: [
              "investigator effects",
              "investigator effect",
              "experimenter effects",
              "experimenter effect",
              "investigator bias",
              "experimenter bias",
            ],
            display: "investigator effects",
          },
          solution: [
            `Unconscious researcher body language, tone or expectancy cues that influence participant behaviour are **investigator (experimenter) effects**.`,
          ],
          hint: "Remember Clever Hans — the bias comes from the investigator's unconscious cues!",
        };
      }

      // operationalisation
      return {
        prompt: `Instead of vaguely writing *"${st.ivA} affects performance"*, ${researcher} defines the outcome across all ${n} participants specifically as *"${st.dv}"*. What is the technical term for defining variables in exact measurable units?`,
        answer: {
          type: "text",
          accept: ["operationalisation", "operationalization"],
          display: "operationalisation",
        },
        solution: [
          `Turning abstract psychological concepts into exact, measurable, replicable variables is **operationalisation**.`,
        ],
        hint: "Starts with 'operational…'.",
      };
    },
  },

  // =========================================================================
  // DRILL 4: Experimental Methods, Designs, Counterbalancing & Sampling
  // =========================================================================
  {
    id: "research-methods.designs-sampling",
    topicId: "research-methods",
    title: "Experimental designs, counterbalancing & sampling calculations",
    level: 2,
    guideRef: "experiments-designs-sampling",
    generate(rng, tier) {
      const researcher = rng.pick(RESEARCHERS);
      const kind =
        tier === 1
          ? rng.pick(["exp-type", "design-id", "abba-half", "sampling-id"] as const)
          : tier === 2
            ? rng.pick(["stratified-calc", "systematic-nth", "design-id", "sampling-id"] as const)
            : rng.pick(["stratified-3way", "systematic-nth", "exp-type", "matched-drop"] as const);

      if (kind === "abba-half") {
        const half = rng.int(8, 45);
        const total = half * 2;
        const task = rng.pick([
          "Stroop colour naming",
          "mirror-drawing accuracy",
          "serial word recall",
          "binaural tone detection",
        ]);
        return {
          prompt: `${researcher} uses a **repeated measures design** with **${total} participants** on a ${task} task and applies **ABBA counterbalancing**. How many participants complete **Condition B first, followed by Condition A**?`,
          answer: { type: "number", value: half },
          solution: [
            `Counterbalancing splits the ${total} participants into two equal order groups.`,
            `{{${total} / 2 = ${half}}} complete A → B, and **${half}** complete B → A.`,
          ],
          hint: "Split the total repeated-measures sample into two equal halves.",
          traps: [
            {
              spec: { type: "number", value: total },
              feedback: `${total} is the whole sample — divide by 2 so half do A→B and half do B→A!`,
            },
          ],
        };
      }

      if (kind === "stratified-calc") {
        const sampleSize = rng.pick([20, 30, 40, 50, 60, 80]);
        const mult = rng.int(5, 15);
        const popTotal = sampleSize * mult;
        const stratumSample = rng.int(Math.floor(sampleSize * 0.2), Math.ceil(sampleSize * 0.75));
        const stratumPop = stratumSample * mult;
        const otherPop = popTotal - stratumPop;
        const groups = rng.pick([
          ["Sixth-Formers", "Lower-School pupils"],
          ["Shift nurses", "Day-ward nurses"],
          ["Bilingual toddlers", "Monolingual toddlers"],
          ["Club athletes", "Non-club students"],
        ] as const);
        return {
          prompt: `A target population of **${popTotal} people** consists of **${stratumPop} ${groups[0]}** and **${otherPop} ${groups[1]}**. ${researcher} wants a **stratified sample of ${sampleSize} people**. How many **${groups[0]}** must be randomly selected?`,
          answer: { type: "number", value: stratumSample },
          solution: [
            `Proportion of ${groups[0]} in population = {{${stratumPop} / ${popTotal}}}.`,
            `Multiply by desired sample size (\`${sampleSize}\`): {{(${stratumPop} / ${popTotal}) * ${sampleSize} = ${stratumSample}}}.`,
          ],
          hint: `Calculate (${stratumPop} ÷ ${popTotal}) × ${sampleSize}.`,
          traps:
            sampleSize - stratumSample !== stratumSample
              ? [
                  {
                    spec: { type: "number" as const, value: sampleSize - stratumSample },
                    feedback: `${sampleSize - stratumSample} is the count for ${groups[1]} — check you used ${stratumPop} for ${groups[0]}!`,
                  },
                ]
              : undefined,
        };
      }

      if (kind === "stratified-3way") {
        const a = rng.int(2, 5);
        const b = rng.int(2, 5);
        const c = rng.int(1, 4);
        const sumParts = a + b + c;
        const k = rng.int(3, 7);
        const sampleSize = sumParts * k * 2; // divisible by 2 for condition split!
        const popMult = rng.int(8, 20);
        const popTotal = sumParts * popMult;
        const y11Sample = b * k * 2;
        const y11CondA = b * k;
        return {
          prompt: `A school of **${popTotal} pupils** has Year 9, Year 10 and Year 11 in the ratio **${a} : ${b} : ${c}**. ${researcher} selects a **stratified sample of ${sampleSize} pupils**, then splits each year group equally between Condition A and Condition B in an **independent measures** study. How many **Year 10** pupils are placed in **Condition A**?`,
          answer: { type: "number", value: y11CondA },
          solution: [
            `Total ratio parts = {{${a} + ${b} + ${c} = ${sumParts}}}; Year 10 fraction = {{${b} / ${sumParts}}}.`,
            `Year 10 pupils in the stratified sample of ${sampleSize} = {{(${b} / ${sumParts}) * ${sampleSize} = ${y11Sample}}}.`,
            `Half placed in Condition A = {{${y11Sample} / 2 = ${y11CondA}}}.`,
          ],
          hint: `Find (${b} ÷ ${sumParts}) × ${sampleSize} for the Year 10 sample, then divide by 2 for Condition A!`,
          traps: [
            {
              spec: { type: "number", value: y11Sample },
              feedback: `${y11Sample} is the total Year 10 count across BOTH conditions — halve it for Condition A!`,
            },
          ],
        };
      }

      if (kind === "systematic-nth") {
        const sampleN = rng.pick([20, 25, 30, 40, 50, 60]);
        const step = rng.int(6, 25);
        const popN = sampleN * step;
        return {
          prompt: `${researcher} has a numbered register of **${popN} employees** and wants a **systematic sample of ${sampleN} employees**. Selecting every ***k*th** name from a random starting point, what interval ***k*** should ${researcher} use?`,
          answer: { type: "number", value: step },
          solution: [
            `Sampling interval {{k = \"Population\" / \"Sample\" = ${popN} / ${sampleN} = ${step}}} (select every ${step}th person).`,
          ],
          hint: `Divide the total register size (${popN}) by the desired sample size (${sampleN}).`,
        };
      }

      if (kind === "matched-drop") {
        const pairs = rng.int(12, 30);
        const dropped = rng.int(2, 5);
        const remainingPeople = (pairs - dropped) * 2;
        return {
          prompt: `${researcher} recruits **${pairs * 2} participants** arranged into **${pairs} IQ-matched pairs** (${pairs} in Condition A, ${pairs} in Condition B). Before testing finishes, **${dropped} participants** in Condition A exercise their right to withdraw (all from different pairs). How many **usable matched-pair participants** remain across **both** conditions?`,
          answer: { type: "number", value: remainingPeople },
          solution: [
            `In a matched pairs design, losing 1 member of a pair invalidates that entire pair for paired comparison.`,
            `Remaining intact pairs = {{${pairs} - ${dropped} = ${pairs - dropped}}} pairs = {{${pairs - dropped} * 2 = ${remainingPeople}}} participants.`,
          ],
          hint: `When 1 twin/partner drops out of a matched pair, that whole pair (${dropped} pairs) can no longer be compared!`,
          traps: [
            {
              spec: { type: "number", value: pairs * 2 - dropped },
              feedback: `In matched pairs, if one partner withdraws, their matched partner in Condition B also loses their pair — so ${dropped} whole pairs (${dropped * 2} people) are lost!`,
            },
          ],
        };
      }

      if (kind === "exp-type") {
        const n = rng.int(30, 120);
        const pickExp = rng.pick(["laboratory", "field", "natural"] as const);
        if (pickExp === "laboratory") {
          return {
            prompt: `${researcher} brings ${n} participants into a soundproof university room, directly manipulates screen brightness (100 lux vs 400 lux), and measures pupil-reaction speed. Which **type of experiment** (\`laboratory\`, \`field\`, or \`natural\`) is this?`,
            answer: {
              type: "text",
              accept: ["laboratory", "laboratory experiment", "lab", "lab experiment"],
              display: "laboratory experiment",
            },
            solution: [
              `Artificial controlled setting + researcher-manipulated IV = **laboratory experiment**.`,
            ],
            hint: "Controlled university room + manipulated IV.",
          };
        }
        if (pickExp === "field") {
          const place = rng.pick(["supermarket aisle", "MRT station platform", "public shopping mall", "school cafeteria"]);
          return {
            prompt: `In a busy ${place}, ${researcher} instructs an actor to drop ${rng.int(6, 15)} books while dressed either smartly or scruffily, and records how many passers-by help. Which **type of experiment** (\`laboratory\`, \`field\`, or \`natural\`) is this?`,
            answer: {
              type: "text",
              accept: ["field", "field experiment"],
              display: "field experiment",
            },
            solution: [
              `Everyday real-world setting (${place}) + researcher-manipulated IV (actor's outfit) = **field experiment**.`,
            ],
            hint: "Real-world everyday setting, yet the researcher STILL actively staged/manipulated the IV!",
            traps: [
              {
                spec: { type: "text", accept: ["natural", "natural experiment"] },
                feedback: `${researcher} actively manipulated the actor's outfit! Natural experiments have NO researcher manipulation of the IV.`,
              },
            ],
          };
        }
        return {
          prompt: `${researcher} compares memory scores of ${n} islanders **before and after** broadcast television was introduced to their island by the government (an IV ${researcher} could not manipulate). Which **type of experiment** (\`laboratory\`, \`field\`, or \`natural\`) is this?`,
          answer: {
            type: "text",
            accept: ["natural", "natural experiment", "quasi", "quasi-experiment", "quasi experiment"],
            display: "natural experiment",
          },
          solution: [
            `Because the IV occurred naturally without researcher manipulation or random allocation, it is a **natural (quasi) experiment**.`,
          ],
          hint: "The researcher took advantage of a naturally occurring change rather than manipulating the IV.",
        };
      }

      if (kind === "design-id") {
        const n = rng.int(16, 48) * 2;
        const pickDes = rng.pick(["independent", "repeated", "matched"] as const);
        if (pickDes === "independent") {
          return {
            prompt: `${researcher} recruits ${n} participants and uses a random number generator to assign ${n / 2} people to Silence Only and the other ${n / 2} people to Music Only. Name this **experimental design**.`,
            answer: {
              type: "text",
              accept: ["independent measures", "independent measures design", "independent groups", "independent groups design"],
              display: "independent measures",
            },
            solution: [
              `Different participants allocated to each condition of the IV = **independent measures design**.`,
            ],
            hint: "Two separate, independent groups of participants.",
          };
        }
        if (pickDes === "repeated") {
          return {
            prompt: `${researcher} tests the **exact same ${n} participants** on Monday after drinking chamomile tea and again on Thursday after drinking plain warm water. Name this **experimental design**.`,
            answer: {
              type: "text",
              accept: ["repeated measures", "repeated measures design"],
              display: "repeated measures",
            },
            solution: [
              `Every participant completes **both** conditions of the IV = **repeated measures design**.`,
            ],
            hint: "The same participants repeat the DV task under every IV condition.",
          };
        }
        return {
          prompt: `${researcher} pre-tests ${n} runners on VO2-max fitness, pairs the two fittest runners together (down to the least fit pair), and flips a coin to put one runner from each pair into Goal-Setting and the other into Control. Name this **experimental design**.`,
          answer: {
            type: "text",
            accept: ["matched pairs", "matched pairs design", "matched-pairs", "matched-pairs design"],
            display: "matched pairs",
          },
          solution: [
            `Pairing participants on a relevant pre-test variable and splitting each pair across Condition A and B = **matched pairs design**.`,
          ],
          hint: "Different people in each condition, deliberately paired up on a pre-test first.",
        };
      }

      // sampling-id
      const n = rng.int(20, 60);
      const sPick = rng.pick(["random", "opportunity", "volunteer"] as const);
      if (sPick === "random") {
        const pop = rng.int(400, 950);
        return {
          prompt: `${researcher} assigns numbers 1 to ${pop} to every student on a complete college roll and uses a computer random-number generator to pick ${n} names. Name this **sampling method**.`,
          answer: {
            type: "text",
            accept: ["random", "random sampling"],
            display: "random sampling",
          },
          solution: [
            `Every member of the complete sampling frame (${pop} students) had an equal mathematical chance of selection = **random sampling**.`,
          ],
          hint: "Complete list + equal mathematical chance via random number generator.",
        };
      }
      if (sPick === "opportunity") {
        const spot = rng.pick(["outside the library", "in the hospital café", "at a bus stop", "in the sixth-form lounge"]);
        return {
          prompt: `${researcher} stands ${spot} at 11:00 and asks the first ${n} available people who walk past to complete a depth-cue puzzle. Name this **sampling method**.`,
          answer: {
            type: "text",
            accept: ["opportunity", "opportunity sampling", "convenience", "convenience sampling"],
            display: "opportunity sampling",
          },
          solution: [
            `Selecting whoever happens to be present and willing at the time is **opportunity sampling** (NOT random sampling!).`,
          ],
          hint: "Beware the street-slang 'random people' trap — this recruits whoever is conveniently available!",
          traps: [
            {
              spec: { type: "text", accept: ["random", "random sampling"] },
              feedback: "Approaching available passers-by is OPPORTUNITY sampling — people absent at 11:00 had zero chance of selection!",
            },
          ],
        };
      }
      return {
        prompt: `${researcher} posts an advert in a local parenting newsletter asking for ${n} parents of toddlers to email in if they wish to join a language diary study. Name this **sampling method**.`,
        answer: {
          type: "text",
          accept: ["volunteer", "volunteer sampling", "self-selecting", "self-selecting sampling", "self selecting"],
          display: "volunteer sampling",
        },
        solution: [
          `Participants actively putting themselves forward in response to an advert = **volunteer (self-selecting) sampling**.`,
        ],
        hint: "Participants self-select by replying to an advert.",
      };
    },
  },

  // =========================================================================
  // DRILL 5: Non-Experimental Methods, Correlations & Graph Selection
  // =========================================================================
  {
    id: "research-methods.non-experimental-methods",
    topicId: "research-methods",
    title: "Self-reports, observations, correlations & graph choice",
    level: 2,
    guideRef: "non-experimental-methods",
    generate(rng, tier) {
      const researcher = rng.pick(RESEARCHERS);
      const n = rng.int(18, 95);
      const kind =
        tier === 1
          ? rng.pick(["corr-pos", "corr-neg", "corr-zero", "graph-bar", "graph-hist", "graph-scatter"] as const)
          : tier === 2
            ? rng.pick(["event-vs-time", "struct-vs-unstruct", "corr-neg", "graph-hist", "social-desirability"] as const)
            : rng.pick(["case-study", "obs-covert-overt", "co-variables", "content-analysis", "event-vs-time"] as const);

      if (kind === "corr-pos") {
        const pair = rng.pick([
          ["hours of weekly vocabulary reading", "comprehension score out of 50"],
          ["self-determination autonomy score", "months persisted in youth athletics"],
          ["parental warmth rating", "child's prosocial sharing count"],
        ] as const);
        return {
          prompt: `Across ${n} participants, ${researcher} finds that as **${pair[0]}** increases, **${pair[1]}** also steadily **increases**. What type of correlation is this?`,
          answer: {
            type: "text",
            accept: ["positive", "positive correlation"],
            display: "positive correlation",
          },
          solution: [
            `Both co-variables move in the **same upward direction** (as X increases, Y increases) = **positive correlation**.`,
          ],
          hint: "Both co-variables rise together (upward scattergraph slope).",
        };
      }

      if (kind === "corr-neg") {
        const pair = rng.pick([
          ["number of bystanders present", "speed of helping (1/latency score)"],
          ["hours of late-night screen exposure", "total nightly REM sleep minutes"],
          ["minutes of pre-exam relaxation breathing", "heart-rate anxiety beats per minute"],
          ["age in months (from 30 to 60)", "frequency of 'goed/foots' overregularisation errors"],
        ] as const);
        return {
          prompt: `Measuring ${n} participants, ${researcher} finds that as **${pair[0]}** increases, **${pair[1]}** steadily **decreases**. What type of correlation is this?`,
          answer: {
            type: "text",
            accept: ["negative", "negative correlation"],
            display: "negative correlation",
          },
          solution: [
            `As Co-variable X increases, Co-variable Y decreases (an inverse relationship) = **negative correlation**.`,
          ],
          hint: "One co-variable goes UP while the other goes DOWN — don't confuse inverse with 'zero'!",
          traps: [
            {
              spec: { type: "text", accept: ["zero", "zero correlation", "no correlation"] },
              feedback: "Zero correlation means NO pattern at all — when X rises and Y falls systematically, that's a NEGATIVE correlation!",
            },
          ],
        };
      }

      if (kind === "corr-zero") {
        const pair = rng.pick([
          ["adult shoe size", "serial digit-span memory score"],
          ["house door number", "Müller-Lyer illusion error (mm)"],
          ["birth day of the month (1–31)", "altruism questionnaire score"],
        ] as const);
        return {
          prompt: `${researcher} plots ${n} participants' **${pair[0]}** against **${pair[1]}** and sees a completely random cloud of dots with no upward or downward trend. What type of correlation is this?`,
          answer: {
            type: "text",
            accept: ["zero", "zero correlation", "no correlation"],
            display: "zero correlation",
          },
          solution: [
            `A random scatter cloud with no relationship between the two co-variables shows a **zero (no) correlation**.`,
          ],
          hint: "No upward or downward relationship at all.",
        };
      }

      if (kind === "graph-bar") {
        const cats = rng.pick([
          "four world cities (Rio, New York, Singapore, Vienna)",
          "three encoding conditions (Structural, Phonemic, Semantic)",
          "three victim conditions (Cane, Drunk, Kneeling)",
        ]);
        return {
          prompt: `${researcher} wants to graph the **mean helping/recall score** across **${cats}** ($N = ${n}$). Which type of graph (\`bar chart\`, \`histogram\`, or \`scattergraph\`) should ${researcher} draw?`,
          answer: {
            type: "text",
            accept: ["bar chart", "bar graph"],
            display: "bar chart",
          },
          solution: [
            `Separate named groups/conditions are **discrete categories**, requiring a **bar chart** (with equal gaps between bars).`,
          ],
          hint: "Discrete named categories → bars with GAPS!",
          traps: [
            {
              spec: { type: "text", accept: ["histogram"] },
              feedback: "Histograms are for continuous numerical intervals with touching bars — separate named conditions need a bar chart!",
            },
          ],
        };
      }

      if (kind === "graph-hist") {
        const ivl = rng.pick([
          "reaction times in continuous intervals (`200–249 ms`, `250–299 ms`, `300–349 ms`)",
          "sleep durations in continuous intervals (`4.0–5.9 h`, `6.0–7.9 h`, `8.0–9.9 h`)",
          "vocabulary sizes in continuous intervals (`0–49 words`, `50–99 words`, `100–149 words`)",
        ]);
        return {
          prompt: `${researcher} groups ${n} participants' ${ivl} and wants to plot frequency with **touching bars (no gaps)**. Name this type of graph.`,
          answer: {
            type: "text",
            accept: ["histogram"],
            display: "histogram",
          },
          solution: [
            `Continuous numerical data grouped into contiguous class intervals is plotted on a **histogram** (touching bars, zero gaps).`,
          ],
          hint: "Continuous intervals + touching bars ('H-Hug').",
          traps: [
            {
              spec: { type: "text", accept: ["bar chart", "bar graph"] },
              feedback: "Bar charts have gaps for discrete categories — continuous touching intervals form a histogram!",
            },
          ],
        };
      }

      if (kind === "graph-scatter") {
        return {
          prompt: `${researcher} measures two continuous co-variables on ${n} teenagers — **daily social-media minutes** and **sleep-onset latency (minutes)** — to inspect their correlation. Which type of graph should ${researcher} plot?`,
          answer: {
            type: "text",
            accept: ["scattergraph", "scatter diagram", "scatter plot", "scatterplot"],
            display: "scattergraph",
          },
          solution: [
            `Pairs of continuous co-variables in a correlation are plotted as coordinate dots on a **scattergraph**.`,
          ],
          hint: "One dot per participant for (Co-variable X, Co-variable Y).",
        };
      }

      if (kind === "event-vs-time") {
        const sub = rng.pick(["event", "time"] as const);
        const secs = rng.pick([20, 30, 45, 60]);
        if (sub === "time") {
          return {
            prompt: `Watching ${n} toddlers in a nursery, ${researcher} ticks a behavioural checklist **only when a timer beeps once every ${secs} seconds**. Name this observational sampling technique (\`event sampling\` or \`time sampling\`).`,
            answer: {
              type: "text",
              accept: ["time sampling", "time"],
              display: "time sampling",
            },
            solution: [
              `Recording behaviour at fixed periodic clock intervals (every ${secs} s) is **time sampling**.`,
            ],
            hint: `Recorded on a fixed clock beep every ${secs} seconds.`,
          };
        }
        return {
          prompt: `During a ${secs}-minute playground observation of ${n} pupils, ${researcher} tallies **every single instance** a pupil Comforts a Peer whenever it occurs. Name this observational sampling technique (\`event sampling\` or \`time sampling\`).`,
          answer: {
            type: "text",
            accept: ["event sampling", "event"],
            display: "event sampling",
          },
          solution: [
            `Counting **every occurrence** of a target behaviour whenever it happens is **event sampling**.`,
          ],
          hint: "Every occurrence of the target event is tallied, not just on fixed clock ticks.",
        };
      }

      if (kind === "struct-vs-unstruct") {
        const sub = rng.pick(["structured", "unstructured"] as const);
        if (sub === "structured") {
          return {
            prompt: `${researcher} interviews ${n} shift-workers by reading the **exact same 12 pre-written questions in the exact same order** with zero unscripted follow-ups. Is this a \`structured\` or \`unstructured\` interview?`,
            answer: {
              type: "text",
              accept: ["structured", "structured interview"],
              display: "structured interview",
            },
            solution: [
              `Fixed, standardised questions asked in an identical order for every interviewee = **structured interview**.`,
            ],
            hint: "Strict fixed script = high reliability.",
          };
        }
        return {
          prompt: `${researcher} conducts an informal, conversational interview with ${n} lucid dreamers, adapting each new question freely based on the dreamer's previous answer. Is this a \`structured\` or \`unstructured\` interview?`,
          answer: {
            type: "text",
            accept: ["unstructured", "unstructured interview"],
            display: "unstructured interview",
          },
          solution: [
            `Flexible, unscripted follow-up questions tailored to each participant's responses = **unstructured interview**.`,
          ],
          hint: "No fixed question list — adapts like a guided conversation.",
        };
      }

      if (kind === "social-desirability") {
        return {
          prompt: `In ${researcher}'s questionnaire of ${n} drivers, 94% claim they *'always stop to help stranded motorists'*, yet covert roadside cameras show only 18% actually stop. Name the self-report **bias** where respondents lie or exaggerate to look admirable.`,
          answer: {
            type: "text",
            accept: ["social desirability bias", "social desirability"],
            display: "social desirability bias",
          },
          solution: [
            `Answering in a way that presents oneself favourably to others rather than truthfully is **social desirability bias**.`,
          ],
          hint: "Three words: 'social ______ bias'.",
        };
      }

      if (kind === "case-study") {
        const yrs = rng.int(4, 25);
        return {
          prompt: `${researcher} conducts an in-depth **${yrs}-year investigation** of a single patient with rare selective visual agnosia, combining MRI scans, family interviews and daily memory diaries. Name this non-experimental **research method**.`,
          answer: {
            type: "text",
            accept: ["case study", "case-study"],
            display: "case study",
          },
          solution: [
            `An intensive, detailed multi-method investigation of a single rare individual or small unit over time is a **case study**.`,
          ],
          hint: "Like Milner et al. (1968) on patient H.M. — two words!",
        };
      }

      if (kind === "obs-covert-overt") {
        const hidden = rng.bool();
        if (hidden) {
          return {
            prompt: `${researcher} observes ${n} shoppers' recycling habits from behind a **one-way mirror** so shoppers have **no idea** they are being watched. Is this observation \`covert\` or \`overt\`?`,
            answer: { type: "text", accept: ["covert", "covert observation"], display: "covert" },
            solution: [
              `When participants are unaware they are being observed (hidden observer/mirror), the observation is **covert**.`,
            ],
            hint: "Undercover / hidden = covert; open / visible = overt.",
          };
        }
        return {
          prompt: `${researcher} sits visibly at the back of a classroom of ${n} pupils wearing a visitor badge after introducing the observation study to the class. Is this observation \`covert\` or \`overt\`?`,
          answer: { type: "text", accept: ["overt", "overt observation"], display: "overt" },
          solution: [
            `When participants know they are being watched and can see the observer openly, the observation is **overt**.`,
          ],
          hint: "Openly visible = overt.",
        };
      }

      if (kind === "co-variables") {
        return {
          prompt: `In ${researcher}'s correlational study of ${n} athletes (measuring sleep quality and sprint speed without manipulating either), what technical term MUST be used for the two measured variables instead of 'IV' and 'DV'?`,
          answer: {
            type: "text",
            accept: ["co-variables", "covariables", "co-variable"],
            display: "co-variables",
          },
          solution: [
            `Correlations have no manipulated IV — the two measured continuous variables are called **co-variables**.`,
          ],
          hint: "Starts with 'co-…'.",
        };
      }

      return {
        prompt: `${researcher} takes ${n} qualitative dream diaries and tallies how many times operationalised themes (*'falling'*, *'chased'*, *'late for exam'*) appear, converting qualitative text into quantitative frequencies. Name this analysis method.`,
        answer: {
          type: "text",
          accept: ["content analysis", "thematic coding", "coding"],
          display: "content analysis",
        },
        solution: [
          `Systematically coding qualitative text/media into categories to count frequencies is **content analysis** (coding).`,
        ],
        hint: "Two words: '______ analysis'.",
      };
    },
  },

  // =========================================================================
  // DRILL 6: Ethics (DRIP), Reliability & Validity (GRAVE)
  // =========================================================================
  {
    id: "research-methods.ethics-validity",
    topicId: "research-methods",
    title: "Ethics (DRIP), reliability & validity (GRAVE)",
    level: 3,
    guideRef: "ethics-reliability-validity",
    generate(rng, tier) {
      const researcher = rng.pick(RESEARCHERS);
      const n = rng.int(20, 85);
      const kind =
        tier === 1
          ? rng.pick(["ethic-withdraw", "ethic-confidentiality", "ethic-debrief", "rel-vs-val"] as const)
          : tier === 2
            ? rng.pick(["ethic-presumptive", "ethic-under16", "test-retest", "inter-observer", "io-pct"] as const)
            : rng.pick(["val-internal", "val-ecological", "val-population", "ethic-presumptive", "io-pct"] as const);

      if (kind === "ethic-withdraw") {
        return {
          prompt: `Halfway through ${researcher}'s ${n}-person memory stress test, Participant 14 feels uncomfortable, asks to stop immediately, and asks for their score sheet to be shredded. Which ethical right is Participant 14 exercising?`,
          answer: {
            type: "text",
            accept: ["right to withdraw", "withdraw", "withdrawal"],
            display: "right to withdraw",
          },
          solution: [
            `Allowing participants to stop participating at any point — and delete their data afterwards without penalty — is the **right to withdraw** ('R' in DRIP).`,
          ],
          hint: "The 'R' in DRIP!",
        };
      }

      if (kind === "ethic-confidentiality") {
        return {
          prompt: `In publishing findings on ${n} insomnia patients, ${researcher} replaces all names with code numbers (\`P01\`–\`P${n}\`) and stores consent forms in a locked file separate from raw scores. Which ethical guideline does this protect?`,
          answer: {
            type: "text",
            accept: ["confidentiality", "anonymity"],
            display: "confidentiality",
          },
          solution: [
            `Keeping personal data anonymous and unidentifiable upholds **confidentiality**.`,
          ],
          hint: "Protecting data anonymity so nobody can trace scores back to a named person.",
        };
      }

      if (kind === "ethic-debrief") {
        return {
          prompt: `Immediately after a ${n}-participant study that used mild deception about confederates, ${researcher} explains the true aim, answers questions, reassures participants and reminds them they can withhold their data. What is this post-study step called?`,
          answer: {
            type: "text",
            accept: ["debriefing", "debrief", "full debrief"],
            display: "debriefing",
          },
          solution: [
            `Explaining the true aim and restoring participants to their pre-study state *after* participation is **debriefing**.`,
          ],
          hint: "Happens AFTER the study ends to undo deception (starts with 'de…').",
          traps: [
            {
              spec: { type: "text", accept: ["informed consent"] },
              feedback: "Informed consent MUST happen BEFORE the study starts — explaining the true aim afterwards is debriefing!",
            },
          ],
        };
      }

      if (kind === "ethic-under16") {
        const age = rng.int(8, 15);
        return {
          prompt: `${researcher} wants to recruit ${n} schoolchildren aged **${age} years old** for a visual-illusion experiment. Aside from the children's own agreement, from **whom** must ${researcher} obtain written **informed consent** beforehand?`,
          answer: {
            type: "text",
            accept: ["parents", "parent", "parent or guardian", "parents or guardians", "legal guardian", "parental consent"],
            display: "parents or legal guardians",
          },
          solution: [
            `Because the participants are **under 16** (aged ${age}), written informed consent must be obtained from a **parent or legal guardian** beforehand.`,
          ],
          hint: `Children aged ${age} (<16) cannot give sole legal informed consent on their own.`,
        };
      }

      if (kind === "ethic-presumptive") {
        return {
          prompt: `Because telling subway commuters beforehand would ruin natural helping, ${researcher} explains the planned field study to **${n} similar commuters** who will NOT be in the real trial and asks if they would mind taking part. Name this type of consent.`,
          answer: {
            type: "text",
            accept: ["presumptive consent", "presumptive"],
            display: "presumptive consent",
          },
          solution: [
            `Asking a comparable peer group from the target population whether they would find the procedure acceptable is **presumptive consent**.`,
          ],
          hint: "Two words: '______ consent' (asking peers beforehand to presume acceptability).",
        };
      }

      if (kind === "rel-vs-val") {
        const askRel = rng.bool();
        if (askRel) {
          return {
            prompt: `${researcher}'s new ${n}-item anxiety scale produces the **exact same score** every Monday for a month, even though its questions accidentally measure **introversion** instead of anxiety. Is this scale high in \`reliability\` or high in \`validity\`?`,
            answer: { type: "text", accept: ["reliability", "reliable"], display: "reliability" },
            solution: [
              `Consistent, repeatable scores across occasions = high **reliability** (while measuring introversion instead of anxiety means low validity!).`,
            ],
            hint: "Think of the faulty bathroom scales: consistent every time = reliability!",
          };
        }
        return {
          prompt: `What one-word term in ` + "`GRAVE`" + ` refers to **accuracy** — whether ${researcher}'s test of ${n} people **genuinely measures what it claims to measure** (rather than merely being consistent)?`,
          answer: { type: "text", accept: ["validity", "valid"], display: "validity" },
          solution: [
            `**Validity** means accuracy/truthfulness — measuring what you claim to measure (whereas reliability means consistency).`,
          ],
          hint: "The 'V' in GRAVE!",
        };
      }

      if (kind === "test-retest") {
        const wks = rng.int(2, 6);
        return {
          prompt: `${researcher} administers a self-determination questionnaire to the **same ${n} athletes** in Week 1 and again **${wks} weeks later**, then correlates their two sets of scores to check consistency. Which specific type of reliability is this?`,
          answer: {
            type: "text",
            accept: ["test-retest reliability", "test-retest", "test retest reliability", "test retest"],
            display: "test-retest reliability",
          },
          solution: [
            `Giving the exact same test to the same sample on two separate occasions (${wks} weeks apart) checks **test-retest reliability**.`,
          ],
          hint: "Testing and then re-testing the same group later!",
        };
      }

      if (kind === "inter-observer") {
        return {
          prompt: `${researcher} and a colleague sit apart watching the **same ${n}-minute playground session simultaneously** with identical tally sheets, then correlate their counts to verify they exceeded +0.80. Which specific type of reliability is this?`,
          answer: {
            type: "text",
            accept: ["inter-observer reliability", "inter observer reliability", "inter-rater reliability", "inter rater reliability"],
            display: "inter-observer reliability",
          },
          solution: [
            `Checking consistency between two or more independent observers watching the same behaviour simultaneously assesses **inter-observer (inter-rater) reliability**.`,
          ],
          hint: "Consistency BETWEEN ('inter-') two observers.",
        };
      }

      if (kind === "io-pct") {
        const totalIntervals = rng.pick([40, 50, 60, 80]);
        const pct = rng.pick([75, 80, 85, 90, 95]);
        const agreed = Math.round((pct / 100) * totalIntervals);
        const exactPct = roundTo((agreed / totalIntervals) * 100, 1);
        return {
          prompt: `Checking inter-observer reliability across **${totalIntervals} time-sampling intervals**, ${researcher} and a co-observer record the exact same behaviour code in **${agreed} intervals**. Calculate their **percentage agreement**.`,
          answer: { type: "number", value: exactPct, tolerance: 0.05 },
          solution: [
            `Percentage agreement = {{(${agreed} / ${totalIntervals}) * 100 = ${exactPct}}}%.`,
          ],
          hint: `Compute (${agreed} ÷ ${totalIntervals}) × 100.`,
        };
      }

      if (kind === "val-internal") {
        return {
          prompt: `In ${researcher}'s memory experiment ($N = ${n}$), Group A happened to contain honours linguistics majors while Group B did not, making it impossible to be sure the IV caused Group A's higher score. Which specific type of validity (\`internal\`, \`ecological\`, or \`population\`) was ruined?`,
          answer: {
            type: "text",
            accept: ["internal", "internal validity"],
            display: "internal validity",
          },
          solution: [
            `When a confounding variable makes it uncertain whether the **IV genuinely caused** the change in the DV, **internal validity** is compromised.`,
          ],
          hint: "About cause-and-effect INSIDE the experiment (IV → DV), not real-world setting!",
          traps: [
            {
              spec: { type: "text", accept: ["ecological", "ecological validity"] },
              feedback: "Ecological validity is about generalising to everyday settings — confounding variables inside the study ruin INTERNAL validity!",
            },
          ],
        };
      }

      if (kind === "val-ecological") {
        return {
          prompt: `Critics argue that ${researcher}'s task — asking ${n} people in a dark chin-rest booth to judge glowing 2D dots — is completely artificial and doesn't reflect how people judge depth while walking down a street. Which specific type of validity (\`internal\`, \`ecological\`, or \`population\`) is criticised?`,
          answer: {
            type: "text",
            accept: ["ecological", "ecological validity"],
            display: "ecological validity",
          },
          solution: [
            `Whether findings from an artificial lab setting/task generalise to **real-world everyday environments** (mundane realism) is **ecological validity**.`,
          ],
          hint: "Artificial chin-rest lab vs everyday real-life streets.",
        };
      }

      // val-population
      return {
        prompt: `${researcher} tests only **${n} affluent 19-year-old female university students** in London and claims the findings apply to all humans worldwide. Which specific type of validity (\`internal\`, \`ecological\`, or \`population\`) is weak here?`,
        answer: {
          type: "text",
          accept: ["population", "population validity"],
          display: "population validity",
        },
        solution: [
          `Whether a narrow sample (affluent 19-year-old female undergraduates) generalises across age, gender and culture to the wider target population is **population validity**.`,
        ],
        hint: "About generalising from the SAMPLE to the wider TARGET POPULATION.",
      };
    },
  },
];
