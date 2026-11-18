import type { Drill } from "./types.ts";
import { clean, roundTo } from "./helpers.ts";

const OBJECTS = [
  "a regulation basketball",
  "a roadside stop sign",
  "an adult commuter bicycle",
  "a park lamppost",
  "a red postbox",
  "a classroom door",
  "a wooden garden bench",
  "a traffic bollard",
] as const;

const ILLUSIONS = [
  "Müller-Lyer outward-fin shaft",
  "Ponzo upper railway bar",
  "Ebbinghaus small-inducer target circle",
  "vertical line in the Horizontal–Vertical illusion",
] as const;

export const drills: Drill[] = [
  {
    id: "visual-perception.retinal-scaling",
    topicId: "visual-perception",
    title: "Retinal image scaling & size-constancy calculations",
    level: 1,
    guideRef: "sensation-depth-constancy",
    generate(rng, tier) {
      const obj = rng.pick(OBJECTS);

      if (tier === 1) {
        const d1 = rng.pick([2, 3, 4, 5, 6, 8, 10]);
        const mult = rng.pick([2, 3, 4, 5]);
        const d2 = d1 * mult;
        const h2 = rng.pick([1.2, 1.5, 1.8, 2.0, 2.4, 2.5, 3.0, 3.5]);
        const h1 = roundTo(h2 * mult, 2);
        return {
          prompt: `Viewing ${obj} from **${d1} metres** away produces a vertical retinal image of height **${h1} mm**. When you walk backwards to **${d2} metres** away (while **size constancy** keeps perceived physical height unchanged), what is the new **retinal image height** in **mm**?`,
          answer: { type: "number", value: h2, tolerance: 0.01 },
          solution: [
            `Distance increased by a factor of ${d2} ÷ ${d1} = ${mult}.`,
            `Retinal image size is inversely proportional to distance: ${h1} mm ÷ ${mult} = **${h2} mm**.`,
          ],
          hint: "Find how many times further away the object is (d2 ÷ d1), then divide the original retinal image height by that factor.",
          traps:
            h1 * mult !== h2
              ? [
                  {
                    spec: { type: "number", value: roundTo(h1 * mult, 2) },
                    feedback: "Retinal images *shrink* as viewing distance increases — divide by the distance factor instead of multiplying!",
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        const d1 = rng.pick([3, 4, 5, 6, 8, 10, 12]);
        const ratio = rng.pick([1.5, 2.5, 3, 4, 5]);
        const d2 = clean(d1 * ratio);
        const h2 = rng.pick([0.8, 1.2, 1.4, 1.6, 2.0, 2.2, 2.4]);
        const h1 = roundTo(h2 * ratio, 2);
        return {
          prompt: `At **${d1} m**, ${obj} casts a **${h1} mm** retinal image. As the observer walks further back, the retinal image shrinks to **${h2} mm**. Assuming inverse proportionality ({{h_1 * d_1 = h_2 * d_2}}), calculate the observer's **new viewing distance** in **metres**.`,
          answer: { type: "number", value: d2, tolerance: 0.05 },
          solution: [
            `Retinal image shrank by a factor of ${h1} ÷ ${h2} = ${ratio}.`,
            `Therefore viewing distance increased by the same factor: ${d1} m × ${ratio} = **${d2} m**.`,
          ],
          hint: "Divide original retinal height by new retinal height, then multiply the starting distance by that ratio.",
          traps: [
            {
              spec: { type: "number", value: roundTo(d1 / ratio, 2), tolerance: 0.02 },
              feedback: "A smaller retinal image means the observer moved *further away*, so distance must be larger than the starting distance!",
            },
          ],
        };
      }

      // Tier 3: Percentage decrease in retinal image size when moving from d1 to d2
      const d1 = rng.pick([2, 3, 4, 5, 6, 8, 10, 12, 15]);
      const mult = rng.pick([2, 2.5, 4, 5, 8, 10]);
      const d2 = clean(d1 * mult);
      const pctDrop = roundTo((1 - 1 / mult) * 100, 1);
      const remainingPct = roundTo((1 / mult) * 100, 1);
      return {
        prompt: `An observer views ${obj} at **${d1} m** and then steps back to **${d2} m**. Even though **size constancy** keeps ${obj} looking the same real height, by what **percentage** did its **retinal image height decrease**?`,
        answer: { type: "number", value: pctDrop, tolerance: 0.1 },
        solution: [
          `Distance increased by a factor of ${d2} ÷ ${d1} = ${mult}, so the new retinal height is {{1 / ${mult}}} = ${remainingPct}% of its original height.`,
          `Percentage decrease = 100% − ${remainingPct}% = **${pctDrop}%**.`,
        ],
        hint: "Find what percentage of the original retinal height *remains* (100 ÷ distance multiplier), then subtract from 100%.",
        traps:
          Math.abs(remainingPct - pctDrop) > 0.5
            ? [
                {
                  spec: { type: "number", value: remainingPct, tolerance: 0.1 },
                  feedback: `That (${remainingPct}%) is the remaining retinal size as a percentage of original — subtract it from 100% to get the percentage *decrease*!`,
                },
              ]
            : undefined,
      };
    },
  },
  {
    id: "visual-perception.visual-cliff-rates",
    topicId: "visual-perception",
    title: "Gibson & Walk (1960) Visual Cliff infant data calculations",
    level: 2,
    guideRef: "gibson-direct-theory",
    generate(rng, tier) {
      const speciesOrAge = rng.pick([
        "6-to-14-month-old crawling infants",
        "7-to-12-month-old human infants",
        "8-to-13-month-old crawling babies",
        "young kittens reared in normal light",
        "infant puppies tested on patterned glass",
      ]);

      if (tier === 1) {
        const movers = rng.pick([20, 24, 25, 30, 40, 50]);
        const stayed = rng.pick([3, 4, 5, 6, 8, 9, 10]);
        const total = movers + stayed;
        const deepCrossers = rng.pick([1, 2, 3, 4, 5]);
        const refused = movers - deepCrossers;
        const refusePct = roundTo((refused / movers) * 100, 1);
        const wrongDenomPct = roundTo((refused / total) * 100, 1);
        return {
          prompt: `In a replication of **Gibson & Walk's (1960)** Visual Cliff study with **${total}** ${speciesOrAge}, **${stayed}** remained on the central board while **${movers}** crawled off onto the shallow side. Only **${deepCrossers}** of those ${movers} mobile subjects crossed onto the **deep** side. What **percentage** of the **${movers} mobile subjects** refused to cross the deep side (to 1 d.p. if needed)?`,
          answer: { type: "number", value: refusePct, tolerance: 0.1 },
          solution: [
            `Mobile subjects who refused deep side = ${movers} − ${deepCrossers} = ${refused}.`,
            `Refusal percentage among mobile crawlers = (${refused} ÷ ${movers}) × 100 = **${refusePct}%**.`,
          ],
          hint: "First subtract deep-side crossers from mobile crawlers, then divide by mobile crawlers (NOT total subjects on the board) × 100.",
          traps:
            Math.abs(wrongDenomPct - refusePct) > 0.5
              ? [
                  {
                    spec: { type: "number", value: wrongDenomPct, tolerance: 0.15 },
                    feedback: `Divide by the ${movers} mobile crawlers who left the centre board, not by ${total}!`,
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        const movers = rng.pick([22, 26, 27, 28, 32, 35, 36, 45]);
        const stayed = rng.pick([4, 6, 7, 8, 9, 11]);
        const total = movers + stayed;
        const deep = rng.pick([2, 3, 4, 5, 6]);
        const deepPct = roundTo((deep / movers) * 100, 1);
        const totalDenomPct = roundTo((deep / total) * 100, 1);
        return {
          prompt: `Out of **${total}** ${speciesOrAge} placed on a Visual Cliff centre board, **${stayed}** never left the board. Among the **${movers}** who crawled off, **100%** crossed the shallow side while **${deep}** crossed onto the deep cliff glass. Calculate the **percentage of mobile crawlers** who crossed onto the deep side, rounded to **1 decimal place**.`,
          answer: { type: "number", value: deepPct, tolerance: 0.1 },
          solution: [
            `Use mobile crawlers (${movers}) as the denominator (excluding the ${stayed} who never moved off the board).`,
            `Deep-crossing rate = (${deep} ÷ ${movers}) × 100 ≈ **${deepPct}%**.`,
          ],
          hint: "Divide deep crossers by mobile crawlers (excluding those who stayed on the centre board), then multiply by 100.",
          traps:
            Math.abs(totalDenomPct - deepPct) > 0.4
              ? [
                  {
                    spec: { type: "number", value: totalDenomPct, tolerance: 0.15 },
                    feedback: `Classic CIE 0266 trap! Exclude the ${stayed} stationary subjects and divide ${deep} by ${movers} mobile crawlers.`,
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: Compare normal-light vs dark-reared kittens (Walk & Gibson perceptual learning contrast)
      const lightN = rng.pick([20, 24, 25, 27, 30]);
      const lightRefuse = rng.int(Math.ceil(lightN * 0.82), lightN - 1);
      const darkN = rng.pick([16, 20, 24, 25]);
      const darkRefuse = rng.int(Math.floor(darkN * 0.45), Math.floor(darkN * 0.58));
      const lightPct = roundTo((lightRefuse / lightN) * 100, 1);
      const darkPct = roundTo((darkRefuse / darkN) * 100, 1);
      const diff = roundTo(lightPct - darkPct, 1);
      return {
        prompt: `In a Visual Cliff comparison, **${lightRefuse} of ${lightN}** normal light-reared kittens refused the deep side, whereas only **${darkRefuse} of ${darkN}** kittens reared in darkness for 4 weeks refused the deep side on their first day in light. By how many **percentage points** was deep-side refusal higher in light-reared kittens (to **1 d.p.**)?`,
        answer: { type: "number", value: diff, tolerance: 0.15 },
        solution: [
          `Light-reared refusal rate = (${lightRefuse} ÷ ${lightN}) × 100 ≈ ${lightPct}%.`,
          `Dark-reared refusal rate = (${darkRefuse} ÷ ${darkN}) × 100 ≈ ${darkPct}%.`,
          `Difference = ${lightPct}% − ${darkPct}% = **${diff} percentage points**.`,
        ],
        hint: "Convert both fractions to percentages first, then subtract the dark-reared percentage from the light-reared percentage.",
        traps:
          Math.abs(lightRefuse - darkRefuse - diff) > 0.5
            ? [
                {
                  spec: { type: "number", value: lightRefuse - darkRefuse },
                  feedback: "Convert both raw counts into percentages before subtracting!",
                },
              ]
            : undefined,
      };
    },
  },
  {
    id: "visual-perception.illusion-distortion",
    topicId: "visual-perception",
    title: "Gregory's illusion scaling & Haber & Levin (2001) accuracy calculations",
    level: 2,
    guideRef: "gregory-constructivist",
    generate(rng, tier) {
      const illusion = rng.pick(ILLUSIONS);

      if (tier === 1) {
        const trueLen = rng.pick([50, 60, 80, 100, 120, 150, 200]);
        const pct = rng.pick([10, 15, 18, 20, 22, 25]);
        const perceivedLen = clean(trueLen * (1 + pct / 100));
        return {
          prompt: `In a psychophysics lab test of the **${illusion}**, the true physical length of the target is **${trueLen} mm**, but due to **Gregory's misplaced size-constancy scaling** a participant judges its length to be **${perceivedLen} mm**. Calculate the participant's **percentage overestimation**.`,
          answer: { type: "number", value: pct, tolerance: 0.05 },
          solution: [
            `Overestimation in mm = ${perceivedLen} − ${trueLen} = ${clean(perceivedLen - trueLen)} mm.`,
            `Percentage overestimation = (${clean(perceivedLen - trueLen)} ÷ ${trueLen}) × 100 = **${pct}%**.`,
          ],
          hint: "Subtract true length from perceived length, divide by true length, and multiply by 100.",
          traps:
            Math.abs(perceivedLen - trueLen - pct) > 0.5
              ? [
                  {
                    spec: { type: "number", value: clean(perceivedLen - trueLen) },
                    feedback: `That (${clean(perceivedLen - trueLen)} mm) is the raw millimetre error — divide by ${trueLen} mm and multiply by 100!`,
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        const trueLen = rng.pick([64, 75, 80, 90, 110, 125, 140, 160]);
        const stretchPct = rng.pick([12, 14, 15, 16, 18, 20, 24, 25]);
        const perceived = roundTo(trueLen * (1 + stretchPct / 100), 2);
        const shrunk = roundTo(trueLen * (1 - stretchPct / 100), 2);
        return {
          prompt: `The **${illusion}** has a true physical size of **${trueLen} mm**. If **misplaced size-constancy scaling** enlarges its perceived size by **${stretchPct}%**, what length (in **mm**) does the observer perceive?`,
          answer: { type: "number", value: perceived, tolerance: 0.05 },
          solution: [
            `Multiplier for a ${stretchPct}% enlargement = 1 + (${stretchPct} ÷ 100) = ${clean(1 + stretchPct / 100)}.`,
            `Perceived size = ${trueLen} × ${clean(1 + stretchPct / 100)} = **${perceived} mm**.`,
          ],
          hint: "Multiply the true size in mm by (1 + percentage ÷ 100).",
          traps: [
            {
              spec: { type: "number", value: shrunk, tolerance: 0.05 },
              feedback: "Outward-fin / upper-Ponzo cues *enlarge* perceived size — add the percentage rather than subtracting it!",
            },
          ],
        };
      }

      // Tier 3: Haber & Levin (2001) outdoor distance error comparison (familiar invariant vs unfamiliar cut-out)
      const trueDist = rng.pick([40, 50, 60, 75, 80, 100]);
      const famEst = clean(trueDist - rng.pick([2, 3, 4, 5]));
      const unfamEst = clean(trueDist - rng.pick([10, 12, 15, 18, 20, 24]));
      const famErrPct = roundTo((Math.abs(trueDist - famEst) / trueDist) * 100, 1);
      const unfamErrPct = roundTo((Math.abs(trueDist - unfamEst) / trueDist) * 100, 1);
      const advantage = roundTo(unfamErrPct - famErrPct, 1);
      const obj = rng.pick(["regulation basketball", "2-litre soda bottle", "standard stop sign", "adult bicycle"]);
      return {
        prompt: `In an outdoor field replication of **Haber & Levin (2001)** at a true distance of **${trueDist} m**, participants' mean distance estimate was **${famEst} m** for a familiar invariant-sized **${obj}** versus **${unfamEst} m** for an **unfamiliar cardboard triangle**. By how many **percentage points** was the percentage distance error smaller for the familiar ${obj} than for the unfamiliar triangle (to **1 d.p.**)?`,
        answer: { type: "number", value: advantage, tolerance: 0.15 },
        solution: [
          `Familiar object error = (|${trueDist} − ${famEst}| ÷ ${trueDist}) × 100 = ${famErrPct}%.`,
          `Unfamiliar shape error = (|${trueDist} − ${unfamEst}| ÷ ${trueDist}) × 100 = ${unfamErrPct}%.`,
          `Top-down familiarity advantage = ${unfamErrPct}% − ${famErrPct}% = **${advantage} percentage points**.`,
        ],
        hint: "Find each object's absolute error ÷ true distance × 100, then subtract the familiar error % from the unfamiliar error %.",
        traps:
          Math.abs(unfamEst - famEst) !== advantage && Math.abs(Math.abs(unfamEst - famEst) - advantage) > 0.5
            ? [
                {
                  spec: { type: "number", value: Math.abs(unfamEst - famEst) },
                  feedback: `That (${Math.abs(unfamEst - famEst)} m) is the raw metre gap — divide by true distance (${trueDist} m) × 100 to express in percentage points!`,
                },
              ]
            : undefined,
      };
    },
  },
  {
    id: "visual-perception.perceptual-set-stats",
    topicId: "visual-perception",
    title: "Perceptual set priming (Bruner & Minturn) & cultural context (Bremner) stats",
    level: 3,
    guideRef: "perceptual-set-culture",
    generate(rng, tier) {
      if (tier === 1) {
        const n = rng.pick([20, 24, 25, 30, 40, 50]);
        const primedPctChoice = rng.pick([75, 80, 84, 85, 88, 90, 92, 95]);
        const count = Math.round((n * primedPctChoice) / 100);
        const actualPct = roundTo((count / n) * 100, 1);
        const primeType = rng.pick([
          { ctx: "capital letters (A, C, D, F)", target: "'B'" },
          { ctx: "two-digit numbers (12, 14, 16, 18)", target: "'13'" },
          { ctx: "farm animal sketches", target: "a 'rat'" },
          { ctx: "portrait drawings of faces", target: "an 'old man wearing glasses'" },
        ]);
        return {
          prompt: `In a tachistoscope perceptual-set study modelled on **Bruner & Minturn (1955)**, **${n} participants** were primed with **${primeType.ctx}** before viewing an ambiguous figure; **${count}** of them reported seeing **${primeType.target}**. Calculate the **percentage** reporting the primed interpretation (to 1 d.p. if needed).`,
          answer: { type: "number", value: actualPct, tolerance: 0.1 },
          solution: [
            `Percentage primed = (${count} ÷ ${n}) × 100 = **${actualPct}%**.`,
          ],
          hint: "Divide the number reporting the primed percept by total participants in that group, then multiply by 100.",
          traps:
            Math.abs(100 - 2 * actualPct) > 0.5
              ? [
                  {
                    spec: { type: "number", value: roundTo(100 - actualPct, 1), tolerance: 0.1 },
                    feedback: "That is the percentage who did NOT report the primed interpretation.",
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        // Bremner et al. (2016) UK vs Urban Himba vs Rural Himba Ebbinghaus magnitude
        const uk = rng.pick([20, 22, 24, 25, 26, 28, 30]);
        const rural = rng.pick([4, 5, 6, 7, 8, 9]);
        const urban = rng.int(rural + 3, uk - 4);
        const reductionPct = roundTo(((uk - rural) / uk) * 100, 1);
        const rawGap = uk - rural;
        return {
          prompt: `In an Ebbinghaus size-contrast test modelled on **Bremner et al. (2016)**, mean illusion magnitude was **${uk}%** in **UK adults**, **${urban}%** in **urbanised Opuwo Himba**, and **${rural}%** in **rural traditional Himba**. By what **percentage** (relative to UK adults) was illusion magnitude lower in **rural Himba** than in **UK adults**, rounded to **1 decimal place**?`,
          answer: { type: "number", value: reductionPct, tolerance: 0.15 },
          solution: [
            `Difference between UK and rural Himba = ${uk}% − ${rural}% = ${rawGap} percentage points.`,
            `Relative percentage lower = (${rawGap} ÷ ${uk}) × 100 ≈ **${reductionPct}%**.`,
          ],
          hint: "Subtract rural Himba magnitude from UK magnitude, divide by UK magnitude (not urban Himba!), and multiply by 100.",
          traps:
            Math.abs(rawGap - reductionPct) > 0.5
              ? [
                  {
                    spec: { type: "number", value: rawGap },
                    feedback: `That (${rawGap}) is the raw percentage-point difference — divide ${rawGap} by the UK baseline (${uk}) × 100!`,
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: Gilchrist & Nesberg (1952) brightness dial shift after 20-hour fast
      const baseLux = rng.pick([80, 100, 120, 150, 160, 200]);
      const controlLux = clean(baseLux + rng.pick([-2, -1, 0, 1, 2]));
      const hungryDrop = rng.pick([12, 15, 18, 20, 24, 28, 30]);
      const hungryLux = clean(baseLux - hungryDrop);
      const netShiftPct = roundTo(((controlLux - hungryLux) / baseLux) * 100, 1);
      const food = rng.pick(["grilled steak", "fried chicken", "spaghetti", "cheeseburger"]);
      return {
        prompt: `In a hunger perceptual-set test modelled on **Gilchrist & Nesberg (1952)**, a colour slide of **${food}** was originally displayed at **${baseLux} lux**. When asked to restore original brightness after **20 hours**, fed controls set the projector to **${controlLux} lux**, whereas fasting hungry participants set it down to **${hungryLux} lux** (because the meal already looked brighter to them). Express the **difference between control and hungry settings** as a **percentage of the ${baseLux} lux baseline** (to **1 d.p.**).`,
        answer: { type: "number", value: netShiftPct, tolerance: 0.15 },
        solution: [
          `Lux gap between fed controls and 20-hour hungry group = ${controlLux} − ${hungryLux} = ${clean(controlLux - hungryLux)} lux.`,
          `As a percentage of the ${baseLux} lux baseline: (${clean(controlLux - hungryLux)} ÷ ${baseLux}) × 100 = **${netShiftPct}%**.`,
        ],
        hint: "Subtract the hungry lux setting from the control lux setting, then divide by the original baseline lux × 100.",
        traps:
          Math.abs(controlLux - hungryLux - netShiftPct) > 0.5
            ? [
                {
                  spec: { type: "number", value: clean(controlLux - hungryLux) },
                  feedback: `That (${clean(controlLux - hungryLux)} lux) is the raw lux difference — divide by ${baseLux} lux × 100!`,
                },
              ]
            : undefined,
      };
    },
  },
];
