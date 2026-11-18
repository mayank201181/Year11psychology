import type { Drill } from "./types.ts";
import { clean, roundTo } from "./helpers.ts";

const SETTINGS = [
  "outside a school science lab",
  "on a quiet MRT station platform",
  "along a shopping mall walkway",
  "inside a university library reading room",
  "at a community sports hall entrance",
  "near a bus interchange shelter",
  "in an apartment lobby",
  "by a campus cafeteria queue",
  "along a park connector path",
  "outside a cinema ticket desk",
] as const;

const VICTIMS = [
  "an elderly pedestrian who drops a bag of groceries",
  "a cyclist who slips on wet tiles",
  "a student whose stack of revision folders scatters",
  "a commuter who stumbles on a step",
  "a runner cramping badly on a bench",
  "a shopper struggling with a jammed stroller wheel",
] as const;

const RELATIVES: ReadonlyArray<{ label: string; r: number; rFrac: string }> = [
  { label: "identical (monozygotic) twin", r: 1.0, rFrac: "1.0" },
  { label: "full sister", r: 0.5, rFrac: "0.5" },
  { label: "full brother", r: 0.5, rFrac: "0.5" },
  { label: "biological mother", r: 0.5, rFrac: "0.5" },
  { label: "biological son", r: 0.5, rFrac: "0.5" },
  { label: "dizygotic (fraternal) twin", r: 0.5, rFrac: "0.5" },
  { label: "maternal aunt", r: 0.25, rFrac: "0.25" },
  { label: "paternal uncle", r: 0.25, rFrac: "0.25" },
  { label: "maternal grandmother", r: 0.25, rFrac: "0.25" },
  { label: "half-sister", r: 0.25, rFrac: "0.25" },
  { label: "first cousin", r: 0.125, rFrac: "0.125" },
];

export const drills: Drill[] = [
  {
    id: "prosocial-behaviour.responsibility-share",
    topicId: "prosocial-behaviour",
    title: "Diffusion of responsibility & bystander helping calculations",
    level: 1,
    guideRef: "bystander-apathy",
    generate(rng, tier) {
      const setting = rng.pick(SETTINGS);
      const victim = rng.pick(VICTIMS);

      if (tier === 1) {
        const n = rng.pick([2, 4, 5, 8, 10, 20, 25]);
        const share = clean(100 / n);
        return {
          prompt: `An emergency unfolds ${setting} involving ${victim}. Exactly **${n} bystanders** (excluding the victim) witness the incident at the same time. Assuming **equal diffusion of responsibility** across all ${n} bystanders, what **percentage** of personal responsibility does each bystander feel?`,
          answer: { type: "number", value: share },
          solution: [
            `Total responsibility = 100%, shared equally among n = ${n} bystanders.`,
            `Individual share = {{100 / ${n}}}% = **${share}%**.`,
          ],
          hint: "Divide 100% by the number of bystanders (excluding the victim).",
          traps: [
            {
              spec: { type: "number", value: roundTo(100 / (n + 1), 2), tolerance: 0.05 },
              feedback: `You divided by ${n + 1} (including the victim) — divide 100% by the ${n} bystanders who can help.`,
            },
            {
              spec: { type: "number", value: clean(1 / n) },
              feedback: "That is the proportion as a decimal — multiply by 100 to give a percentage.",
            },
          ],
        };
      }

      if (tier === 2) {
        const otherCount = rng.pick([1, 3, 4, 7, 9, 15, 19]);
        const totalListeners = otherCount + 1;
        const share = clean(100 / totalListeners);
        const soloRate = rng.pick([75, 80, 84, 85, 90]);
        const groupRate = rng.pick([15, 22, 28, 31, 36, 42]);
        if (rng.bool(0.5)) {
          return {
            prompt: `In a replication of **Latané & Darley (1968)** ${setting}, a participant believes **${otherCount} other passive bystanders** (plus the participant herself, excluding the victim) can also hear ${victim}. Under equal **diffusion of responsibility**, what **percentage** of duty rests on the participant?`,
            answer: { type: "number", value: share },
            solution: [
              `Total bystanders able to help = 1 participant + ${otherCount} others = ${totalListeners} bystanders.`,
              `Participant's responsibility share = {{100 / ${totalListeners}}}% = **${share}%**.`,
            ],
            hint: "Add the participant herself to the other bystanders first, then divide 100% by that total.",
            traps: [
              {
                spec: { type: "number", value: roundTo(100 / otherCount, 2), tolerance: 0.05 },
                feedback: `Don't forget to include the participant herself: 1 + ${otherCount} = ${totalListeners} listeners in total!`,
              },
            ],
          };
        }
        const drop = soloRate - groupRate;
        return {
          prompt: `In a bystander experiment ${setting}, **${soloRate}%** of solo witnesses helped ${victim}, compared with **${groupRate}%** when **${otherCount}** calm bystanders were also present. By how many **percentage points** did helping fall in the group condition?`,
          answer: { type: "number", value: drop },
          solution: [
            `Solo helping rate = ${soloRate}%; group helping rate = ${groupRate}%.`,
            `Drop = ${soloRate}% − ${groupRate}% = **${drop} percentage points**.`,
          ],
          hint: "Subtract the group helping percentage from the solo helping percentage.",
          traps: [
            {
              spec: { type: "number", value: roundTo((drop / soloRate) * 100, 1), tolerance: 0.2 },
              feedback: "The question asks for the drop in percentage points (direct subtraction), not relative percentage decrease.",
            },
          ],
        };
      }

      // Tier 3: Expected helper count + non-helper count across N trials
      const trials = rng.pick([40, 50, 60, 80, 120, 150, 200]);
      const soloPct = rng.pick([75, 80, 85, 90]);
      const groupPct = rng.pick([10, 20, 25, 30, 35, 40]);
      const soloHelpers = clean((trials * soloPct) / 100);
      const groupHelpers = clean((trials * groupPct) / 100);
      const fewerHelpers = soloHelpers - groupHelpers;
      return {
        prompt: `A researcher runs **${trials} solo trials** and **${trials} group trials** ${setting} with ${victim}. Helping occurs on **${soloPct}%** of solo trials but drops to **${groupPct}%** of group trials due to pluralistic ignorance and diffusion of responsibility. How many **fewer trials** resulted in help in the group condition than in the solo condition?`,
        answer: { type: "number", value: fewerHelpers },
        solution: [
          `Solo trials with help = ${soloPct}% of ${trials} = ${soloHelpers}.`,
          `Group trials with help = ${groupPct}% of ${trials} = ${groupHelpers}.`,
          `Difference = ${soloHelpers} − ${groupHelpers} = **${fewerHelpers} fewer trials**.`,
        ],
        hint: "Work out the number of helped trials in each condition (or multiply the percentage-point gap by total trials ÷ 100).",
        traps: [
          ...(soloPct - groupPct !== fewerHelpers
            ? [
                {
                  spec: { type: "number" as const, value: soloPct - groupPct },
                  feedback: `That is the percentage-point difference (${soloPct - groupPct}%) — multiply by ${trials} ÷ 100 to find the number of trials.`,
                },
              ]
            : []),
          ...(groupHelpers !== fewerHelpers
            ? [
                {
                  spec: { type: "number" as const, value: groupHelpers },
                  feedback: `That is the number of helped group trials (${groupHelpers}) — subtract it from the solo helped trials (${soloHelpers}).`,
                },
              ]
            : []),
        ],
      };
    },
  },
  {
    id: "prosocial-behaviour.piliavin-field-stats",
    topicId: "prosocial-behaviour",
    title: "Piliavin field-experiment helping rates & Cost–Reward outcomes",
    level: 2,
    guideRef: "cost-reward-piliavin",
    generate(rng, tier) {
      const setting = rng.pick(SETTINGS);
      if (tier === 1) {
        const total = rng.pick([20, 25, 40, 50, 80, 100]);
        const fracNum = rng.int(6, total - 2);
        // Ensure clean integer or .5 percentage
        const helped = Math.max(2, Math.min(total - 2, Math.round((fracNum * 2) / 2)));
        const pct = roundTo((helped / total) * 100, 1);
        const compPct = roundTo(((total - helped) / total) * 100, 1);
        const condition = rng.pick(["ill victim carrying a cane", "victim wearing a knee brace", "commuter who fainted", "passenger smelling of alcohol"]);
        return {
          prompt: `In a subway-style field experiment ${setting}, covert observers staged **${total} trials** with a **${condition}**. Spontaneous help occurred before 70 seconds on **${helped}** of those ${total} trials. Calculate the spontaneous helping percentage (to 1 d.p. if needed).`,
          answer: { type: "number", value: pct, tolerance: 0.05 },
          solution: [
            `Helping percentage = (spontaneous help trials ÷ total trials) × 100.`,
            `({{${helped} / ${total}}}) × 100 = **${pct}%**.`,
          ],
          hint: "Divide helped trials by total trials, then multiply by 100.",
          traps:
            Math.abs(compPct - pct) > 0.2
              ? [
                  {
                    spec: { type: "number", value: compPct, tolerance: 0.05 },
                    feedback: "That is the percentage of trials where NO spontaneous help occurred.",
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        const caneTotal = rng.pick([40, 50, 60, 65, 80]);
        const caneHelped = rng.int(Math.ceil(caneTotal * 0.78), caneTotal - 2);
        const drunkTotal = rng.pick([30, 38, 40, 50]);
        const drunkHelped = rng.int(Math.floor(drunkTotal * 0.3), Math.floor(drunkTotal * 0.6));
        const canePct = roundTo((caneHelped / caneTotal) * 100, 1);
        const drunkPct = roundTo((drunkHelped / drunkTotal) * 100, 1);
        const gap = roundTo(canePct - drunkPct, 1);
        return {
          prompt: `Following **Piliavin et al. (1969)** ${setting}, researchers observed spontaneous help on **${caneHelped} of ${caneTotal}** cane-victim trials and **${drunkHelped} of ${drunkTotal}** drunk-victim trials. Calculate the **percentage-point difference** between the cane and drunk helping rates, rounded to **1 decimal place**.`,
          answer: { type: "number", value: gap, tolerance: 0.15 },
          solution: [
            `Cane helping rate = (${caneHelped} ÷ ${caneTotal}) × 100 ≈ ${canePct}%.`,
            `Drunk helping rate = (${drunkHelped} ÷ ${drunkTotal}) × 100 ≈ ${drunkPct}%.`,
            `Difference = ${canePct}% − ${drunkPct}% = **${gap} percentage points**.`,
          ],
          hint: "Convert BOTH fractions into percentages first, then subtract the drunk percentage from the cane percentage.",
          traps:
            Math.abs(caneHelped - drunkHelped - gap) > 0.5
              ? [
                  {
                    spec: { type: "number", value: caneHelped - drunkHelped },
                    feedback: "You subtracted raw trial counts — convert both conditions to percentages first because their trial totals differ!",
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: Combined spontaneous rate across unequal trial blocks
      const caneT = rng.pick([45, 55, 62, 65, 70]);
      const caneH = rng.int(Math.ceil(caneT * 0.8), caneT - 2);
      const drunkT = rng.pick([35, 38, 45, 50]);
      const drunkH = rng.int(Math.floor(drunkT * 0.35), Math.floor(drunkT * 0.6));
      const allT = caneT + drunkT;
      const allH = caneH + drunkH;
      const overallPct = roundTo((allH / allT) * 100, 1);
      const unweightedMean = roundTo(((caneH / caneT) * 100 + (drunkH / drunkT) * 100) / 2, 1);
      const traps = Math.abs(unweightedMean - overallPct) >= 0.4
        ? [
            {
              spec: { type: "number" as const, value: unweightedMean, tolerance: 0.1 },
              feedback: "You averaged the two percentages equally — pool total helped trials ÷ total trials across both conditions instead!",
            },
          ]
        : undefined;
      return {
        prompt: `In a commuter field study ${setting}, spontaneous help occurred on **${caneH} out of ${caneT}** ill-victim trials and **${drunkH} out of ${drunkT}** drunk-victim trials. Calculate the **overall spontaneous helping percentage** across all **${allT}** trials combined, to **1 decimal place**.`,
        answer: { type: "number", value: overallPct, tolerance: 0.1 },
        solution: [
          `Total trials with spontaneous help = ${caneH} + ${drunkH} = ${allH}.`,
          `Total trials staged = ${caneT} + ${drunkT} = ${allT}.`,
          `Overall helping rate = (${allH} ÷ ${allT}) × 100 = **${overallPct}%**.`,
        ],
        hint: "Add total helped trials (cane + drunk) and divide by total trials (cane + drunk), then multiply by 100.",
        traps,
      };
    },
  },
  {
    id: "prosocial-behaviour.hamiltons-rule",
    topicId: "prosocial-behaviour",
    title: "Kin selection & Hamilton's Rule (r × B > C)",
    level: 2,
    guideRef: "biological-evolutionary",
    generate(rng, tier) {
      const rel = rng.pick(RELATIVES);

      if (tier === 1) {
        const B = rng.pick([2, 4, 6, 8, 10, 12, 16, 20]);
        const rB = clean(rel.r * B);
        return {
          prompt: `Using **Hamilton's Rule** ({{r * B > C}}), a helper performs an action for their **${rel.label}** that delivers a reproductive benefit of **{{B = ${B}}}**. Calculate the inclusive-fitness benefit weighted by relatedness (**{{r * B}}**).`,
          answer: { type: "number", value: rB },
          solution: [
            `Genetic relatedness for a ${rel.label} is r = ${rel.rFrac}.`,
            `r × B = ${rel.rFrac} × ${B} = **${rB}**.`,
          ],
          hint: "Recall r: identical twin = 1.0, parent/child/full sibling/DZ twin = 0.5, aunt/uncle/grandparent/half-sibling = 0.25, first cousin = 0.125.",
          traps:
            rel.r === 0.125
              ? [
                  {
                    spec: { type: "number", value: clean(0.25 * B) },
                    feedback: "A first cousin has r = 0.125 (1/8), not 0.25 (which is for aunts/uncles/grandparents).",
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        const B = rng.pick([1.6, 2.0, 2.4, 3.2, 4.0, 4.8, 5.6, 6.4, 8.0]);
        const C = rng.pick([0.15, 0.25, 0.35, 0.45, 0.6, 0.75, 0.9]);
        const rB = clean(rel.r * B);
        const net = roundTo(rB - C, 3);
        return {
          prompt: `A helper can assist their **${rel.label}** for a recipient benefit of **{{B = ${B}}}** at a personal fitness cost of **{{C = ${C}}}**. Calculate the **net inclusive fitness value** (**{{r * B - C}}**), giving a negative sign if Hamilton's Rule is not met.`,
          answer: { type: "number", value: net, tolerance: 0.001 },
          solution: [
            `For a ${rel.label}, r = ${rel.rFrac}, so r × B = ${rel.rFrac} × ${B} = ${rB}.`,
            `Net inclusive fitness = r × B − C = ${rB} − ${C} = **${net}** (${net > 0 ? "favoured by kin selection" : "NOT favoured by kin selection"}).`,
          ],
          hint: "First multiply r (for that specific relative) by B, then subtract C.",
          traps:
            rel.r < 1
              ? [
                  {
                    spec: { type: "number", value: roundTo(B - C, 3) },
                    feedback: "You forgot to multiply B by the coefficient of relatedness r first!",
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: Minimum benefit B threshold (C / r) where r * B = C
      const nonTwin = rng.pick(RELATIVES.filter((x) => x.r < 1));
      const C = rng.pick([0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6, 0.75]);
      const thresholdB = clean(C / nonTwin.r);
      return {
        prompt: `According to **Hamilton's Rule** ({{r * B > C}}), a helper faces a personal survival cost of **{{C = ${C}}}** to rescue a **${nonTwin.label}**. What is the **exact threshold value of {{B}}** at which {{r * B = C}} (above which kin selection favours helping)?`,
        answer: { type: "number", value: thresholdB, tolerance: 0.001 },
        solution: [
          `For a ${nonTwin.label}, genetic relatedness is r = ${nonTwin.rFrac}.`,
          `Rearrange r × B = C to get B = {{C / r}} = {{${C} / ${nonTwin.rFrac}}} = **${thresholdB}**.`,
        ],
        hint: "Set r × B = C and divide C by the relative's relatedness r.",
        traps: [
          {
            spec: { type: "number", value: clean(C * nonTwin.r) },
            feedback: "You multiplied C by r instead of dividing C by r!",
          },
        ],
      };
    },
  },
  {
    id: "prosocial-behaviour.twin-empathy-data",
    topicId: "prosocial-behaviour",
    title: "Twin heritability (Rushton) & Empathy–Altruism (Batson) data analysis",
    level: 3,
    guideRef: "empathy-social-learning",
    generate(rng, tier) {
      if (tier === 1) {
        const highEasy = rng.pick([78, 80, 82, 84, 86, 88]);
        const lowEasy = rng.pick([12, 15, 18, 20, 22, 25]);
        const diff = highEasy - lowEasy;
        const setting = rng.pick(["electric-shock", "charity-tutoring", "hospital-visit", "peer-counselling"]);
        return {
          prompt: `In a replication of **Batson et al.'s (1981)** easy-escape paradigm using a **${setting}** scenario, **${highEasy}%** of **high-empathy** participants volunteered to help compared with **${lowEasy}%** of **low-empathy** (personal-distress) participants. By how many **percentage points** did empathic concern boost helping in the easy-escape condition?`,
          answer: { type: "number", value: diff },
          solution: [
            `High-empathy easy-escape rate = ${highEasy}%; low-empathy easy-escape rate = ${lowEasy}%.`,
            `Empathy boost = ${highEasy}% − ${lowEasy}% = **${diff} percentage points**.`,
          ],
          hint: "Subtract the low-empathy easy-escape percentage from the high-empathy easy-escape percentage.",
        };
      }

      if (tier === 2) {
        // Falconer's heritability estimate h^2 = 2 * (r_MZ - r_DZ) expressed as %
        const rMZ = rng.pick([0.48, 0.50, 0.52, 0.53, 0.54, 0.56, 0.58, 0.60]);
        const rDZ = rng.pick([0.18, 0.20, 0.22, 0.24, 0.25, 0.27, 0.28]);
        const h2Pct = roundTo(2 * (rMZ - rDZ) * 100, 1);
        const trait = rng.pick(["self-reported altruism", "emotional empathy", "prosocial nurturance", "charitable helping"]);
        return {
          prompt: `In a twin study modelled on **Rushton et al. (1986)** measuring **${trait}**, monozygotic (MZ) twins correlated at **{{r = ${rMZ}}}** while same-sex dizygotic (DZ) twins correlated at **{{r = ${rDZ}}}**. Using Falconer's twin formula **{{2 * (r_MZ - r_DZ) * 100}}%**, estimate the **percentage genetic heritability**!`,
          answer: { type: "number", value: h2Pct, tolerance: 0.1 },
          solution: [
            `Difference between MZ and DZ correlations = ${rMZ} − ${rDZ} = ${roundTo(rMZ - rDZ, 2)}.`,
            `Multiply by 2 and convert to percentage: 2 × ${roundTo(rMZ - rDZ, 2)} × 100 = **${h2Pct}%**.`,
          ],
          hint: "Subtract r_DZ from r_MZ, double the difference, and multiply by 100.",
          traps: [
            {
              spec: { type: "number", value: roundTo((rMZ - rDZ) * 100, 1) },
              feedback: "Don't forget to multiply (r_MZ − r_DZ) by 2 in Falconer's twin heritability formula!",
            },
          ],
        };
      }

      // Tier 3: Batson 2x2 interaction — compare escape-drop in Low Empathy vs High Empathy
      const lowHard = rng.pick([60, 64, 68, 70, 72]);
      const lowEasy = rng.pick([14, 16, 18, 20, 22]);
      const highHard = rng.pick([88, 90, 91, 92, 95]);
      const highEasy = rng.pick([79, 81, 82, 84, 85]);
      const lowDrop = lowHard - lowEasy;
      const highDrop = highHard - highEasy;
      const netInteraction = lowDrop - highDrop;
      return {
        prompt: `In a 2 × 2 **Empathy × Escape** experiment modelled on **Batson et al. (1981)**:\n- **Low Empathy**: **${lowHard}%** helped in difficult escape vs **${lowEasy}%** in easy escape.\n- **High Empathy**: **${highHard}%** helped in difficult escape vs **${highEasy}%** in easy escape.\n\nHow many **more percentage points** did helping drop when escape became easy in the **Low-Empathy** group compared with the **High-Empathy** group?`,
        answer: { type: "number", value: netInteraction },
        solution: [
          `Low-empathy drop (egoistic escape) = ${lowHard}% − ${lowEasy}% = ${lowDrop} percentage points.`,
          `High-empathy drop (altruistic persistence) = ${highHard}% − ${highEasy}% = ${highDrop} percentage points.`,
          `Difference between drops = ${lowDrop} − ${highDrop} = **${netInteraction} percentage points**.`,
        ],
        hint: "Find the drop (difficult − easy) for Low Empathy, find the drop for High Empathy, then subtract the smaller drop from the larger drop.",
        traps: [
          {
            spec: { type: "number", value: lowDrop },
            feedback: `That is the Low-Empathy drop alone (${lowDrop} pp) — subtract the High-Empathy drop (${highDrop} pp) from it!`,
          },
        ],
      };
    },
  },
];
