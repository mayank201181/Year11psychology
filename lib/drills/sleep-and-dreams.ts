import type { Drill } from "./types.ts";
import { roundTo } from "./helpers.ts";

const SLEEPERS = [
  "Amira",
  "Brandon",
  "Celeste",
  "Darius",
  "Elena",
  "Farhan",
  "Grace",
  "Haruto",
  "Isla",
  "Junwei",
  "Kavya",
  "Liam",
  "Meilin",
  "Noah",
  "Olivia",
  "Rohan",
] as const;

export const drills: Drill[] = [
  {
    id: "sleep-and-dreams.ultradian-rem-math",
    topicId: "sleep-and-dreams",
    title: "Ultradian Sleep Cycles, REM & SWS Architecture Calculations",
    level: 1,
    guideRef: "sleep-stages-eeg",
    generate(rng, tier) {
      const person = rng.pick(SLEEPERS);

      if (tier === 1) {
        if (rng.bool(0.45)) {
          const cycleLen = rng.pick([85, 90, 95, 100]);
          const cycles = rng.int(4, 6);
          const totalMin = cycleLen * cycles;
          return {
            prompt: `${person} sleeps for **${totalMin} minutes** continuously, completing equal **${cycleLen}-minute ultradian sleep cycles**. How many **complete ultradian cycles** did ${person} experience?`,
            answer: { type: "number", value: cycles },
            solution: [
              `Divide total sleep duration by cycle length: ${totalMin} ÷ ${cycleLen} = ${cycles} ultradian cycles.`,
            ],
            hint: `Compute ${totalMin} ÷ ${cycleLen}.`,
            traps:
              roundTo(totalMin / 60, 2) !== cycles
                ? [
                    {
                      spec: { type: "number", value: roundTo(totalMin / 60, 2) },
                      feedback: `Dividing by 60 converts minutes into hours; divide by ${cycleLen} minutes per ultradian cycle.`,
                    },
                  ]
                : undefined,
          };
        }

        const totalMin = rng.pick([400, 420, 450, 480, 500, 540]);
        const stage = rng.bool()
          ? { name: "REM sleep", pct: rng.pick([20, 25]) }
          : { name: "NREM Stage 3 (Slow-Wave Sleep)", pct: rng.pick([15, 20, 25]) };
        const mins = roundTo((totalMin * stage.pct) / 100, 1);
        const other = roundTo(totalMin - mins, 1);
        return {
          prompt: `Polysomnography shows ${person} slept for **${totalMin} minutes** and spent **${stage.pct}%** of total sleep in **${stage.name}**. How many **minutes** did ${person} spend in ${stage.name}?`,
          answer: { type: "number", value: mins },
          solution: [
            `Minutes in ${stage.name} = ${stage.pct}% of ${totalMin} = (${stage.pct} ÷ 100) × ${totalMin} = ${mins} minutes.`,
          ],
          hint: `Multiply ${totalMin} by ${stage.pct / 100}.`,
          traps:
            other !== mins
              ? [
                  {
                    spec: { type: "number", value: other },
                    feedback: `${other} minutes is the time spent in OTHER stages (${100 - stage.pct}% of ${totalMin}).`,
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        const totalMin = rng.pick([400, 450, 480, 500]);
        const pN2 = rng.pick([45, 48, 50]);
        const pSWS = rng.pick([18, 20, 22]);
        const pREM = rng.pick([20, 22, 25]);
        const pN1 = 100 - (pN2 + pSWS + pREM);
        const minsN1 = roundTo((totalMin * pN1) / 100, 2);
        return {
          prompt: `Across a **${totalMin}-minute** sleep-lab recording, ${person} spent **${pN2}%** in NREM Stage 2, **${pSWS}%** in NREM Stage 3 (SWS), **${pREM}%** in REM sleep, and the remainder in **NREM Stage 1**. How many **minutes** did ${person} spend in **NREM Stage 1**?`,
          answer: { type: "number", value: minsN1 },
          solution: [
            `Sum of N2 + SWS + REM = ${pN2}% + ${pSWS}% + ${pREM}% = ${100 - pN1}%.`,
            `NREM Stage 1 percentage = 100% − ${100 - pN1}% = ${pN1}%.`,
            `Minutes in Stage 1 = ${pN1}% of ${totalMin} = ${minsN1} minutes.`,
          ],
          hint: `First subtract (${pN2} + ${pSWS} + ${pREM}) from 100%, then take that percentage of ${totalMin} minutes.`,
          traps:
            pN1 !== minsN1
              ? [
                  {
                    spec: { type: "number", value: pN1 },
                    feedback: `${pN1}% is the percentage in Stage 1 — multiply (${pN1} ÷ 100) × ${totalMin} to convert into minutes!`,
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: Dement & Kleitman REM vs NREM dream-recall difference or progressive REM bout mean
      if (rng.bool()) {
        const b1 = rng.int(8, 13);
        const step = rng.int(4, 7);
        const bouts = [b1, b1 + step, b1 + 2 * step, b1 + 3 * step, b1 + 4 * step];
        const sum = bouts.reduce((a, b) => a + b, 0);
        const mean = roundTo(sum / 5, 1);
        const range = bouts[4] - bouts[0];
        return {
          prompt: `Across 5 ultradian cycles on ${person}'s hypnogram, REM bouts lengthen progressively: **${bouts.join(", ")} minutes**. Calculate the **mean** REM bout duration in minutes.`,
          answer: { type: "number", value: mean },
          solution: [
            `Total REM time = ${bouts.join(" + ")} = ${sum} minutes.`,
            `Mean REM bout = ${sum} ÷ 5 = ${mean} minutes.`,
          ],
          hint: `Add all 5 durations (${sum}) and divide by 5.`,
          traps:
            range !== mean
              ? [
                  {
                    spec: { type: "number", value: range },
                    feedback: `${range} minutes is the range (${bouts[4]} − ${bouts[0]}); divide the sum (${sum}) by 5 for the mean.`,
                  },
                ]
              : undefined,
        };
      }

      const remTotal = rng.pick([40, 50, 80]);
      const remRecalled = rng.int(Math.round(remTotal * 0.72), Math.round(remTotal * 0.88));
      const nremTotal = rng.pick([40, 50, 80]);
      const nremRecalled = rng.int(2, Math.round(nremTotal * 0.15));
      const remPct = roundTo((remRecalled / remTotal) * 100, 1);
      const nremPct = roundTo((nremRecalled / nremTotal) * 100, 1);
      const diff = roundTo(remPct - nremPct, 1);
      const rawDiff = remRecalled - nremRecalled;
      return {
        prompt: `In ${person}'s replication of **Dement & Kleitman (1957)**, vivid dreams were reported on **${remRecalled} out of ${remTotal}** REM awakenings versus **${nremRecalled} out of ${nremTotal}** NREM awakenings. By how many **percentage points** did REM dream recall exceed NREM dream recall?`,
        answer: { type: "number", value: diff },
        solution: [
          `REM dream recall = (${remRecalled} ÷ ${remTotal}) × 100 = ${remPct}%.`,
          `NREM dream recall = (${nremRecalled} ÷ ${nremTotal}) × 100 = ${nremPct}%.`,
          `Difference = ${remPct}% − ${nremPct}% = ${diff} percentage points.`,
        ],
        hint: `Convert ${remRecalled}/${remTotal} and ${nremRecalled}/${nremTotal} into percentages, then subtract.`,
        traps:
          rawDiff !== diff
            ? [
                {
                  spec: { type: "number", value: rawDiff },
                  feedback: `${rawDiff} is the raw count difference — convert both fractions to percentages first!`,
                },
              ]
            : undefined,
      };
    },
  },
  {
    id: "sleep-and-dreams.circadian-caffeine-drift",
    topicId: "sleep-and-dreams",
    title: "Circadian Cave Drift & Caffeine Half-Life Calculations",
    level: 2,
    guideRef: "circadian-rhythms-scn",
    generate(rng, tier) {
      const person = rng.pick(SLEEPERS);

      if (tier === 1) {
        const dose = rng.pick([80, 100, 120, 140, 160, 180, 200, 240]);
        const startHr = rng.pick([3, 4, 5, 6]);
        const bedHr = startHr + 5;
        const left = dose / 2;
        return {
          prompt: `${person} drinks an iced coffee with **${dose} mg of caffeine** at **${startHr}:00 pm** and goes to bed 5 hours later at **${bedHr}:00 pm**. Given a **5-hour biological half-life**, how many **mg of caffeine** are still active at bedtime?`,
          answer: { type: "number", value: left },
          solution: [
            `From ${startHr}:00 pm to ${bedHr}:00 pm is 5 hours = 1 half-life.`,
            `Remaining caffeine = ${dose} ÷ 2 = ${left} mg.`,
          ],
          hint: `5 hours equals 1 half-life, so divide ${dose} mg by 2.`,
          traps: [
            {
              spec: { type: "number", value: roundTo(dose / 5, 1) },
              feedback: `Don't divide by 5 hours — after one 5-hour half-life, exactly HALF (${dose} ÷ 2) remains!`,
            },
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool()) {
          const dose = rng.pick([100, 120, 160, 200, 240, 280, 320]);
          const startHr = rng.pick([12, 1, 2]);
          const labelStart = startHr === 12 ? "12:00 noon" : `${startHr}:00 pm`;
          const labelBed = startHr === 12 ? "10:00 pm" : startHr === 1 ? "11:00 pm" : "12:00 midnight";
          const left = dose / 4;
          const afterOne = dose / 2;
          return {
            prompt: `${person} consumes **${dose} mg of caffeine** at **${labelStart}**. Assuming a **5-hour half-life**, how many **mg of caffeine** remain circulating **10 hours later** at **${labelBed}**?`,
            answer: { type: "number", value: left },
            solution: [
              `10 hours ÷ 5 hours = 2 half-lives.`,
              `After 5 hours: ${dose} ÷ 2 = ${afterOne} mg.`,
              `After 10 hours: ${afterOne} ÷ 2 = ${left} mg.`,
            ],
            hint: `10 hours is TWO 5-hour half-lives — halve ${dose} mg twice!`,
            traps: [
              {
                spec: { type: "number", value: afterOne },
                feedback: `${afterOne} mg is left after 5 hours (1 half-life); halve it once more for 10 hours!`,
              },
            ],
          };
        }

        const driftPerCycle = rng.pick([0.4, 0.5, 0.6, 0.75, 0.8, 1.0, 1.2]);
        const period = roundTo(24 + driftPerCycle, 2);
        const cycles = rng.pick([10, 12, 15, 20, 25, 30]);
        const totalDrift = roundTo(driftPerCycle * cycles, 2);
        return {
          prompt: `In a dark-cave study modelled on **Siffre (1962)**, ${person}'s endogenous SCN clock free-runs at **${period} hours** per cycle. After **${cycles} sleep-wake cycles**, how many **total hours** has ${person}'s rhythm drifted behind a normal 24.0-hour surface clock?`,
          answer: { type: "number", value: totalDrift },
          solution: [
            `Drift per cycle = ${period} − 24.0 = ${driftPerCycle} hours.`,
            `Total drift over ${cycles} cycles = ${driftPerCycle} × ${cycles} = ${totalDrift} hours.`,
          ],
          hint: `Multiply (${period} − 24) by ${cycles} cycles.`,
          traps:
            roundTo(period * cycles, 2) !== totalDrift
              ? [
                  {
                    spec: { type: "number", value: roundTo(period * cycles, 2) },
                    feedback: `${roundTo(period * cycles, 2)} hours is total time elapsed inside the cave; subtract ${24 * cycles} surface hours!`,
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: How many complete 24-hour surface days elapsed vs perceived cave days, or caffeine 15h
      const driftPerCycle = rng.pick([0.5, 0.6, 0.8, 1.0, 1.2, 1.5]);
      const period = roundTo(24 + driftPerCycle, 2);
      const validCycles = [16, 20, 24, 30, 32, 40, 48];
      const cycles = rng.pick(validCycles);
      const totalElapsedHours = roundTo(period * cycles, 2);
      const surfaceDays = roundTo(totalElapsedHours / 24, 2);
      return {
        prompt: `In an underground isolation bunker with zero exogenous zeitgebers, ${person}'s free-running cycle averages **${period} hours**. When ${person} completes **${cycles} personal sleep-wake cycles**, how many **total hours** have elapsed on the surface?`,
        answer: { type: "number", value: totalElapsedHours },
        solution: [
          `Total surface hours = ${cycles} cycles × ${period} hours/cycle = ${totalElapsedHours} hours (equivalent to ${surfaceDays} normal 24-hour surface days).`,
        ],
        hint: `Multiply ${cycles} cycles by ${period} hours per cycle.`,
        traps: [
          {
            spec: { type: "number", value: cycles * 24 },
            feedback: `${cycles * 24} hours assumes a 24.0-hour cycle, ignoring ${person}'s ${period}-hour free-running SCN clock!`,
          },
        ],
      };
    },
  },
  {
    id: "sleep-and-dreams.stage-disorder-diagnose",
    topicId: "sleep-and-dreams",
    title: "Diagnose EEG Stages, Clocks & CIE 0266 Sleep Disorders",
    level: 2,
    guideRef: "sleep-disorders-hygiene",
    generate(rng, tier) {
      const person = rng.pick(SLEEPERS);
      const age = rng.int(14, 58);
      const mins = rng.int(45, 95);

      const tier1Items = [
        {
          prompt: `Polysomnography of ${person} (aged ${age}) shows giant, slow **0.5–4 Hz** waves occupying over half the epoch, high Growth Hormone secretion, and deep sleep inertia if woken. Name this EEG wave type (one word: beta, alpha, theta, or delta).`,
          accept: ["delta", "delta waves"],
          trap: ["beta", "beta waves"],
          trapMsg: "Beta waves are fast alert waking waves (13–30 Hz); deep Slow-Wave Sleep shows delta waves.",
          sol: "Slow, high-amplitude **delta** waves (0.5–4 Hz) define NREM Stage 3 (Slow-Wave Sleep).",
          hint: "B.A.T.D. — the slowest, deepest wave at the end of the sequence.",
        },
        {
          prompt: `${person} (aged ${age}) goes to bed at 10:30 pm every night but lies tossing and worrying for **${mins} minutes** before finally falling asleep, then sleeps uninterrupted until morning. Is this **sleep-onset** or **sleep-maintenance** insomnia?`,
          accept: ["sleep-onset", "sleep onset", "sleep-onset insomnia", "onset"],
          trap: ["sleep-maintenance", "sleep maintenance", "maintenance"],
          trapMsg: "Sleep-maintenance is waking repeatedly in the middle of the night; difficulty falling asleep initially is sleep-onset insomnia.",
          sol: "Difficulty initiating sleep at bedtime is **sleep-onset** insomnia.",
          hint: "'Onset' = starting sleep; 'Maintenance' = staying asleep.",
        },
        {
          prompt: `${person} (aged ${age}) falls asleep within 10 minutes at bedtime, yet wakes up **${rng.int(4, 7)} times** every night for 25 minutes each time and feels exhausted all day. Is this **sleep-onset** or **sleep-maintenance** insomnia?`,
          accept: ["sleep-maintenance", "sleep maintenance", "sleep-maintenance insomnia", "maintenance"],
          trap: ["sleep-onset", "sleep onset", "onset"],
          trapMsg: "Sleep-onset is trouble falling asleep initially; repeated night awakenings are sleep-maintenance insomnia.",
          sol: "Difficulty staying asleep across the night is **sleep-maintenance** insomnia.",
          hint: "Repeated awakenings break the *maintenance* of sleep.",
        },
        {
          prompt: `Every night ${person} cycles through NREM Stages 1–3 and REM roughly every **${rng.int(85, 95)} minutes** (five times per night). Is this 90-minute cycle an **ultradian** or **circadian** rhythm?`,
          accept: ["ultradian", "ultradian rhythm"],
          trap: ["circadian", "circadian rhythm"],
          trapMsg: "Circadian rhythms last ~24 hours (daily sleep-wake); the ~90-minute sleep-stage cycle is an ultradian rhythm.",
          sol: "Cycles shorter than 24 hours (~90-minute sleep stages) are **ultradian** rhythms.",
          hint: "Circadian = ~24h day; Ultra-many = several 90-minute cycles per night.",
        },
      ];

      const tier2Items = [
        ...tier1Items,
        {
          prompt: `${mins} minutes after falling asleep (in the first third of the night), ${person} sits up with blank open eyes during NREM Stage 3 delta waves, walks into the hall, and has **complete amnesia** for it next morning. Give the clinical one-word name for sleepwalking.`,
          accept: ["somnambulism", "sleepwalking"],
          trap: ["insomnia"],
          trapMsg: "Insomnia is trouble sleeping; walking during NREM Stage 3 Slow-Wave Sleep is somnambulism.",
          sol: "**Somnambulism** (sleepwalking) is an incomplete arousal from NREM Stage 3 Slow-Wave Sleep.",
          hint: "Latin *somnus* (sleep) + *ambulare* (walk) → somnam___.",
        },
        {
          prompt: `When ${person} steps into bright morning sunshine at **7:${rng.int(10, 45)} am**, sunlight acts as an external environmental cue that resets ${person}'s internal SCN clock to 24 hours. Is sunlight an **endogenous** pacemaker or an **exogenous** zeitgeber?`,
          accept: ["exogenous", "exogenous zeitgeber", "zeitgeber"],
          trap: ["endogenous", "endogenous pacemaker"],
          trapMsg: "Endogenous means internal (like the hypothalamic SCN); external light cues are exogenous zeitgebers.",
          sol: "Sunlight originates outside the body, so it is an **exogenous** zeitgeber.",
          hint: "Exo = external outside cue; Endo = internal clock.",
        },
        {
          prompt: `In darkness at **10:${rng.int(15, 55)} pm**, ${person}'s hypothalamic SCN signals a small endocrine gland in the brain to release **melatonin** into the bloodstream. Name that **gland** (two words or gland name).`,
          accept: ["pineal gland", "pineal", "the pineal gland"],
          trap: ["scn", "hypothalamus"],
          trapMsg: "The SCN (in the hypothalamus) sends the neural signal, whereas the hormone melatonin is secreted by the pineal gland.",
          sol: "The **pineal gland** secretes melatonin in darkness when stimulated by the SCN.",
          hint: "R → S → P → M: Retina → SCN → ___ gland → Melatonin.",
        },
      ];

      const tier3Items = [
        ...tier2Items,
        {
          prompt: `On ${person}'s polysomnogram (aged ${age}), EOG sensors show rapid darting eye bursts while chin EMG sensors show **near-total paralysis of skeletal muscles** so ${person} cannot act out dreams. Name this physiological muscle state.`,
          accept: ["muscle atonia", "atonia", "rem atonia"],
          trap: ["somnambulism"],
          trapMsg: "Somnambulism is sleepwalking in Stage 3; REM skeletal paralysis is called muscle atonia.",
          sol: "**Muscle atonia** is brainstem motor inhibition paralysing skeletal muscles during REM paradoxical sleep.",
          hint: "Two words: 'muscle ___' (meaning absence of muscle tone).",
        },
        {
          prompt: `Clinician Dr Tan tells ${person} (aged ${age}, who revises on bed sheets for ${mins} minutes nightly) to use the bed **exclusively for sleep** and move all desk work outside the bedroom to break conditioned bedtime arousal. Name this two-word sleep-hygiene technique.`,
          accept: ["stimulus control", "stimulus control therapy"],
          trap: ["dreamwork"],
          trapMsg: "Dreamwork is Freud's dream censorship; reserving the bed strictly for sleep to retrain conditioning cues is stimulus control.",
          sol: "**Stimulus control** extinguishes learned associations between the bed and anxious wakefulness.",
          hint: "Two words ('___ control') from classical/operant conditioning.",
        },
      ];

      const pool = tier === 1 ? tier1Items : tier === 2 ? tier2Items : tier3Items;
      const item = rng.pick(pool);
      return {
        prompt: item.prompt,
        answer: { type: "text", accept: item.accept },
        solution: [item.sol],
        hint: item.hint,
        traps: [{ spec: { type: "text", accept: item.trap }, feedback: item.trapMsg }],
      };
    },
  },
  {
    id: "sleep-and-dreams.dream-restoration-cases",
    topicId: "sleep-and-dreams",
    title: "Dream Theories, Oswald vs Meddis & Iorio et al. (2020) Lab",
    level: 3,
    guideRef: "dream-theories",
    generate(rng, tier) {
      const person = rng.pick(SLEEPERS);

      if (rng.bool(0.45)) {
        // Quantitative Iorio et al. (2020) or Oswald newborn-vs-adult REM hours
        if (rng.bool()) {
          const sampleN = rng.pick([200, 250, 300, 400, 500, 600, 800]);
          const pct = rng.pick([35, 40, 45, 55, 60, 65, 70, 75]);
          const count = (sampleN * pct) / 100;
          if (Number.isInteger(count)) {
            const rest = sampleN - count;
            return {
              prompt: `In ${person}'s replication of **Iorio et al. (2020)** with **${sampleN} lockdown participants**, **${pct}%** reported manifest dream themes of **contagion or dangerous enclosed spaces**. How many **participants** reported those lockdown dream themes?`,
              answer: { type: "number", value: count },
              solution: [
                `Count = ${pct}% of ${sampleN} = (${pct} ÷ 100) × ${sampleN} = ${count} participants.`,
              ],
              hint: `Calculate (${pct} ÷ 100) × ${sampleN}.`,
              traps:
                rest !== count
                  ? [
                      {
                        spec: { type: "number", value: rest },
                        feedback: `${rest} is the remaining ${100 - pct}% who did NOT report those themes!`,
                      },
                    ]
                  : undefined,
            };
          }
        }
        const infantSleep = rng.pick([14, 15, 16, 18]);
        const infantRemPct = 50;
        const adultSleep = rng.pick([7, 8]);
        const adultRemPct = 25;
        const infantRemHrs = roundTo((infantSleep * infantRemPct) / 100, 2);
        const adultRemHrs = roundTo((adultSleep * adultRemPct) / 100, 2);
        const diffHrs = roundTo(infantRemHrs - adultRemHrs, 2);
        return {
          prompt: `Testing **Oswald's Restoration Theory**, ${person} compares a newborn sleeping **${infantSleep} hours/day** (**50% REM**) with an adult sleeping **${adultSleep} hours/day** (**25% REM**). How many **more hours of REM sleep per day** does the newborn get than the adult?`,
          answer: { type: "number", value: diffHrs },
          solution: [
            `Newborn REM = 50% of ${infantSleep} h = ${infantRemHrs} hours.`,
            `Adult REM = 25% of ${adultSleep} h = ${adultRemHrs} hours.`,
            `Difference = ${infantRemHrs} − ${adultRemHrs} = ${diffHrs} hours/day.`,
          ],
          hint: `Find 50% of ${infantSleep} h (${infantRemHrs} h) minus 25% of ${adultSleep} h (${adultRemHrs} h).`,
          traps: [
            {
              spec: { type: "number", value: infantSleep - adultSleep },
              feedback: `${infantSleep - adultSleep} hours is the difference in TOTAL sleep — calculate REM hours first!`,
            },
          ],
        };
      }

      const cases = [
        {
          prompt: `Upon waking at **6:${rng.int(10, 50)} am**, ${person} writes down a literal dream story about riding a glass lift onto a snowy rooftop. In **Freud's (1900)** theory, is this recalled surface plot **manifest** or **latent** content?`,
          accept: ["manifest", "manifest content"],
          trap: ["latent", "latent content"],
          trapMsg: "Latent content is the hidden unconscious wish beneath the disguise; the literal recalled story is manifest content.",
          sol: "The literal surface dream plot recalled on waking is **manifest** content (*M = Movie*).",
          hint: "M = Movie you remember; L = Locked unconscious wish.",
        },
        {
          prompt: `In psychoanalysis, ${person}'s dream of missing ${rng.int(2, 5)} flights is interpreted as disguising a deeper **unconscious repressed wish** to escape family pressure. In **Freud's** theory, is that hidden unconscious meaning **manifest** or **latent** content?`,
          accept: ["latent", "latent content"],
          trap: ["manifest", "manifest content"],
          trapMsg: "Manifest content is the literal recalled flight story; the hidden unconscious wish underneath is latent content.",
          sol: "The hidden unconscious wish disguised by dreamwork is **latent** content (*L = Locked wish*).",
          hint: "L = Locked unconscious wish hidden underneath.",
        },
        {
          prompt: `According to **Hobson & McCarley (1977)**, during ${person}'s ${rng.int(20, 35)}-minute REM bout, cholinergic neurons in a specific **brainstem** structure fire random PGO spikes upward (**activation**). Name this 4-letter brainstem structure.`,
          accept: ["pons", "the pons"],
          trap: ["forebrain", "cortex"],
          trapMsg: "The forebrain/cortex performs the Synthesis; bottom-up brainstem Activation originates in the pons.",
          sol: "The **pons** in the brainstem generates random REM electrical activation.",
          hint: "Four letters starting with 'p' — brainstem hub of REM activation.",
        },
        {
          prompt: `In **Hobson & McCarley (1977)**, after ${person}'s brainstem fires random signals for ${rng.int(15, 40)} minutes during REM, which upper brain region weaves (**synthesises**) those chaotic signals and memories into a best-fit storyline?`,
          accept: ["forebrain", "cerebral cortex", "the forebrain", "cortex"],
          trap: ["pons", "brainstem"],
          trapMsg: "The pons generates initial Activation; narrative Synthesis is carried out by the forebrain / cerebral cortex.",
          sol: "The **forebrain (cerebral cortex)** synthesises chaotic brainstem signals into a narrative.",
          hint: "Upper thinking layer of the brain ('fore___' or 'cerebral ___').",
        },
        {
          prompt: `Comparing **${rng.int(35, 55)} mammalian species**, ${person} notes open-plain prey like giraffes sleep under 2 hours to spot lions, whereas safe cave bats sleep nearly 20 hours to save calories. Which sleep theorist (**Oswald** or **Meddis**) proposed this **Evolutionary / Ecological Theory**?`,
          accept: ["meddis", "ray meddis"],
          trap: ["oswald", "ian oswald"],
          trapMsg: "Oswald proposed Restoration Theory (SWS body / REM brain repair); predator avoidance + energy conservation is Meddis (1975).",
          sol: "**Meddis (1975)** proposed the Evolutionary/Ecological Theory (energy conservation + predator avoidance).",
          hint: "6-letter surname starting with 'M' (1975).",
        },
      ];

      const chosen = rng.pick(tier === 1 ? cases.slice(0, 3) : cases);
      return {
        prompt: chosen.prompt,
        answer: { type: "text", accept: chosen.accept },
        solution: [chosen.sol],
        hint: chosen.hint,
        traps: [{ spec: { type: "text", accept: chosen.trap }, feedback: chosen.trapMsg }],
      };
    },
  },
];
