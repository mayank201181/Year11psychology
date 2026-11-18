import type { Drill } from "./types.ts";
import { roundTo } from "./helpers.ts";

const NAMES = [
  "Aarav",
  "Beatrice",
  "Callum",
  "Divya",
  "Ethan",
  "Farah",
  "Gabriel",
  "Hana",
  "Ibrahim",
  "Jiaxin",
  "Kieran",
  "Layla",
  "Mateo",
  "Nadia",
  "Owen",
  "Priya",
] as const;

export const drills: Drill[] = [
  {
    id: "memory-and-forgetting.serial-recall-stats",
    topicId: "memory-and-forgetting",
    title: "STM Chunking & Murdock (1962) Serial Position Calculations",
    level: 1,
    guideRef: "processes-and-msm",
    generate(rng, tier) {
      const researcher = rng.pick(NAMES);
      if (tier === 1) {
        if (rng.bool(0.45)) {
          const perChunk = rng.pick([3, 4, 5]);
          const chunks = rng.int(5, 9);
          const totalItems = perChunk * chunks;
          const kind = rng.pick(["digits", "letters", "syllables", "binary bits"]);
          return {
            prompt: `${researcher} uses **chunking** (Miller, 1956) to group a sequence of **${totalItems} ${kind}** into equal chunks of **${perChunk} ${kind}** each. How many **chunks** are held in Short-Term Memory?`,
            answer: { type: "number", value: chunks },
            solution: [
              `Divide total ${kind} by items per chunk: ${totalItems} ÷ ${perChunk} = ${chunks} chunks.`,
              `${chunks} chunks fits inside Miller's 7 ± 2 (5–9 chunks) STM capacity.`,
            ],
            hint: `Divide ${totalItems} by ${perChunk}.`,
            traps: [
              {
                spec: { type: "number", value: totalItems - perChunk },
                feedback: `Subtracting gives ${totalItems - perChunk}; divide ${totalItems} by ${perChunk} to count equal groups.`,
              },
            ],
          };
        }
        const n = rng.pick([20, 25, 40, 50]);
        const mult = 100 / n;
        const k = rng.int(Math.ceil(n * 0.55), n - 2);
        const pct = roundTo(k * mult, 1);
        const listLen = rng.pick([15, 20, 25, 30]);
        const posLabel = rng.bool() ? "Word 1 (primacy region)" : `Word ${listLen} (recency region)`;
        return {
          prompt: `In ${researcher}'s replication of **Murdock (1962)** with **${n} participants** hearing a ${listLen}-word list, **${k} participants** correctly recall **${posLabel}**. Calculate the **percentage** of participants who recalled that word.`,
          answer: { type: "number", value: pct },
          solution: [
            `Recall fraction = ${k} ÷ ${n}.`,
            `Percentage = (${k} ÷ ${n}) × 100 = ${pct}%.`,
          ],
          hint: `Calculate (${k} ÷ ${n}) × 100.`,
          traps:
            roundTo(100 - pct, 1) !== pct
              ? [
                  {
                    spec: { type: "number", value: roundTo(100 - pct, 1) },
                    feedback: `${roundTo(100 - pct, 1)}% is the percentage who FORGOT the word; we want the percentage who RECALLED it.`,
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        const n = rng.pick([20, 25, 40, 50, 80]);
        const kHigh = rng.int(Math.ceil(n * 0.65), n - 2);
        const kMid = rng.int(Math.max(2, Math.floor(n * 0.15)), Math.floor(n * 0.4));
        const pctHigh = roundTo((kHigh / n) * 100, 1);
        const pctMid = roundTo((kMid / n) * 100, 1);
        const diff = roundTo(pctHigh - pctMid, 1);
        const rawDiff = kHigh - kMid;
        const listLen = rng.pick([20, 24, 30, 40]);
        const midPos = listLen / 2;
        const endOrStart = rng.bool()
          ? { name: "Word 1 (primacy)", effect: "primacy advantage" }
          : { name: `Word ${listLen} (recency)`, effect: "recency advantage" };
        return {
          prompt: `In ${researcher}'s **Murdock (1962)** trial (**${n} participants**, ${listLen}-word list), **${kHigh}** participants recalled **${endOrStart.name}** whereas only **${kMid}** recalled **Word ${midPos} (middle)**. By how many **percentage points** did ${endOrStart.name} exceed Word ${midPos}?`,
          answer: { type: "number", value: diff },
          solution: [
            `${endOrStart.name} recall = (${kHigh} ÷ ${n}) × 100 = ${pctHigh}%.`,
            `Word ${midPos} recall = (${kMid} ÷ ${n}) × 100 = ${pctMid}%.`,
            `Difference (${endOrStart.effect}) = ${pctHigh}% − ${pctMid}% = ${diff} percentage points.`,
          ],
          hint: `Convert both raw counts out of ${n} to percentages first, then subtract.`,
          traps:
            rawDiff !== diff
              ? [
                  {
                    spec: { type: "number", value: rawDiff },
                    feedback: `${rawDiff} is the raw participant difference (${kHigh} − ${kMid}) — convert to percentages out of ${n}!`,
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: Glanzer & Cunitz 30s distractor drop or mean across primacy positions
      const mult20 = rng.pick([20, 40, 60, 80, 120]);
      const pImm = rng.pick([70, 75, 80, 85, 90]);
      const pDel = rng.pick([15, 20, 25, 30, 35]);
      const cImm = (mult20 * pImm) / 100;
      const cDel = (mult20 * pDel) / 100;
      if (Number.isInteger(cImm) && Number.isInteger(cDel) && rng.bool(0.75)) {
        const dropCount = cImm - cDel;
        const ppDrop = pImm - pDel;
        const pctDrop = roundTo((dropCount / cImm) * 100, 1);
        return {
          prompt: `${researcher} tests **${mult20} students** in two conditions on a 20-word list: with **immediate recall**, **${pImm}%** recall Word 20; after a **30-second counting distractor** (clearing STM), only **${pDel}%** recall Word 20. How many **fewer students** (headcount) recalled Word 20 after the distractor?`,
          answer: { type: "number", value: dropCount },
          solution: [
            `Immediate recall count = ${pImm}% of ${mult20} = ${cImm} students.`,
            `Delayed distractor count = ${pDel}% of ${mult20} = ${cDel} students.`,
            `Fewer students recalling Word 20 = ${cImm} − ${cDel} = ${dropCount} students.`,
          ],
          hint: `Find (${pImm}% − ${pDel}%) of ${mult20} students.`,
          traps:
            ppDrop !== dropCount
              ? [
                  {
                    spec: { type: "number", value: ppDrop },
                    feedback: `${ppDrop} is the percentage-point drop — multiply by ${mult20} ÷ 100 for the actual number of students (${pctDrop}% relative drop).`,
                  },
                ]
              : undefined,
        };
      }
      const scores = [rng.int(13, 19), rng.int(12, 18), rng.int(14, 20), rng.int(11, 17)];
      const sum = scores.reduce((a, b) => a + b, 0);
      const mean = roundTo(sum / 4, 2);
      return {
        prompt: `In ${researcher}'s serial-position study, four primacy words (Positions 1 to 4) were recalled by **${scores.join(", ")}** out of 20 participants respectively. Calculate the **mean** number of participants recalling a primacy word (give exact decimal if needed).`,
        answer: { type: "number", value: mean },
        solution: [
          `Sum = ${scores.join(" + ")} = ${sum}.`,
          `Mean = ${sum} ÷ 4 = ${mean}.`,
        ],
        hint: `Add the four counts (${sum}) and divide by 4.`,
      };
    },
  },
  {
    id: "memory-and-forgetting.levels-recognition-math",
    topicId: "memory-and-forgetting",
    title: "Working Memory & Craik & Tulving (1975) Data Analysis",
    level: 2,
    guideRef: "working-memory-levels",
    generate(rng, tier) {
      const name = rng.pick(NAMES);
      if (tier === 1) {
        const totalPerLevel = rng.pick([20, 25, 40, 50]);
        const level = rng.pick([
          { label: "Structural (font case)", minP: 12, maxP: 28 },
          { label: "Phonemic (rhyme)", minP: 45, maxP: 65 },
          { label: "Semantic (sentence meaning)", minP: 75, maxP: 95 },
        ]);
        const step = 100 / totalPerLevel;
        const hits = rng.int(Math.ceil(level.minP / step), Math.floor(level.maxP / step));
        const pct = roundTo(hits * step, 1);
        const missed = totalPerLevel - hits;
        return {
          prompt: `In ${name}'s replication of **Craik & Tulving (1975)**, participants encode **${totalPerLevel} words** in the **${level.label}** condition and recognise **${hits} words** on the unexpected test. What **percentage** of ${level.label.split(" ")[0].toLowerCase()} words were recognised?`,
          answer: { type: "number", value: pct },
          solution: [
            `Proportion recognised = ${hits} ÷ ${totalPerLevel}.`,
            `Percentage = (${hits} ÷ ${totalPerLevel}) × 100 = ${pct}%.`,
          ],
          hint: `Work out (${hits} ÷ ${totalPerLevel}) × 100.`,
          traps:
            missed !== pct
              ? [
                  {
                    spec: { type: "number", value: missed },
                    feedback: `${missed} is the raw count missed — calculate (${hits} ÷ ${totalPerLevel}) × 100.`,
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        const wordsEach = rng.pick([20, 25, 40]);
        const sHits = rng.int(Math.max(2, Math.round(wordsEach * 0.12)), Math.round(wordsEach * 0.25));
        const semHits = rng.int(Math.round(wordsEach * 0.76), wordsEach - 1);
        const sPct = roundTo((sHits / wordsEach) * 100, 1);
        const semPct = roundTo((semHits / wordsEach) * 100, 1);
        const gain = roundTo(semPct - sPct, 1);
        const rawGain = semHits - sHits;
        return {
          prompt: `In ${name}'s **Levels of Processing** experiment (**${wordsEach} words per level**), a participant recognises **${sHits}** Structural words and **${semHits}** Semantic words. Calculate the **percentage-point increase** from Structural to Semantic recognition.`,
          answer: { type: "number", value: gain },
          solution: [
            `Structural recognition = (${sHits} ÷ ${wordsEach}) × 100 = ${sPct}%.`,
            `Semantic recognition = (${semHits} ÷ ${wordsEach}) × 100 = ${semPct}%.`,
            `Increase = ${semPct}% − ${sPct}% = ${gain} percentage points.`,
          ],
          hint: `Convert ${sHits}/${wordsEach} and ${semHits}/${wordsEach} into percentages, then subtract.`,
          traps:
            rawGain !== gain
              ? [
                  {
                    spec: { type: "number", value: rawGain },
                    feedback: `${rawGain} is the raw difference in words — convert out of ${wordsEach} into percentage points first!`,
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: Total words recognised across all 3 levels from percentages
      const wordsEach = rng.pick([20, 40]);
      const pStruct = rng.pick([10, 15, 20, 25]);
      const pPhon = rng.pick([45, 50, 55, 60, 65]);
      const pSem = rng.pick([75, 80, 85, 90, 95]);
      const c1 = (wordsEach * pStruct) / 100;
      const c2 = (wordsEach * pPhon) / 100;
      const c3 = (wordsEach * pSem) / 100;
      if (Number.isInteger(c1) && Number.isInteger(c2) && Number.isInteger(c3)) {
        const total = c1 + c2 + c3;
        const meanPct = roundTo((pStruct + pPhon + pSem) / 3, 1);
        return {
          prompt: `${name} flashes **${wordsEach * 3} words** in total (**${wordsEach}** Structural, **${wordsEach}** Phonemic, **${wordsEach}** Semantic). A participant recognises **${pStruct}%** of Structural, **${pPhon}%** of Phonemic, and **${pSem}%** of Semantic words. How many **total words out of ${wordsEach * 3}** were recognised?`,
          answer: { type: "number", value: total },
          solution: [
            `Structural words = ${pStruct}% of ${wordsEach} = ${c1}.`,
            `Phonemic words = ${pPhon}% of ${wordsEach} = ${c2}.`,
            `Semantic words = ${pSem}% of ${wordsEach} = ${c3}.`,
            `Total recognised = ${c1} + ${c2} + ${c3} = ${total} words.`,
          ],
          hint: `Find each count out of ${wordsEach} separately, then add the three counts.`,
          traps:
            meanPct !== total
              ? [
                  {
                    spec: { type: "number", value: meanPct },
                    feedback: `That is the mean percentage — multiply each percentage by ${wordsEach}/100 and add the word counts.`,
                  },
                ]
              : undefined,
        };
      }
      // Dual-task error percentage increase
      const baseSpan = rng.pick([8, 10]);
      const dualSpan = rng.int(3, baseSpan - 2);
      const dropPct = roundTo(((baseSpan - dualSpan) / baseSpan) * 100, 1);
      return {
        prompt: `In ${name}'s **Working Memory** dual-task test, verbal digit span drops from **${baseSpan} digits** when silent to **${dualSpan} digits** during articulatory suppression (*'the, the, the'*). Calculate the **percentage decrease** in digit span.`,
        answer: { type: "number", value: dropPct },
        solution: [
          `Decrease in digits = ${baseSpan} − ${dualSpan} = ${baseSpan - dualSpan} digits.`,
          `Percentage decrease = (${baseSpan - dualSpan} ÷ ${baseSpan}) × 100 = ${dropPct}%.`,
        ],
        hint: `Compute ((${baseSpan} − ${dualSpan}) ÷ ${baseSpan}) × 100.`,
      };
    },
  },
  {
    id: "memory-and-forgetting.forgetting-diagnose",
    topicId: "memory-and-forgetting",
    title: "Diagnose CIE 0266 Forgetting & Schema Mechanisms",
    level: 2,
    guideRef: "explanations-forgetting",
    generate(rng, tier) {
      const person = rng.pick(NAMES);
      const codeOld = rng.int(11, 49);
      const codeNew = rng.int(51, 98);

      const tier1Cases = [
        {
          prompt: `${person} used locker PIN **#${codeOld}09** all last year. After getting a new Year 11 locker PIN **#${codeNew}14**, ${person} keeps accidentally typing **#${codeOld}09** on the new lock. Is this **proactive** or **retroactive** interference?`,
          accept: ["proactive", "proactive interference"],
          trap: ["retroactive", "retroactive interference"],
          trapMsg: "Check which memory failed: the OLD PIN disrupted the NEW PIN — Proactive = Old disrupts new!",
          sol: "Old PIN (#" + codeOld + "09) disrupts recall of the new PIN (#" + codeNew + "14) → **proactive interference**.",
          hint: "P.O.R.N.: Proactive = Old disrupts new; Retroactive = New disrupts old.",
        },
        {
          prompt: `After ${codeNew - 45} weeks of practising a **new** badminton serve, ${person} tries to demonstrate last season's **old** serve and can no longer remember the old grip. Is this **proactive** or **retroactive** interference?`,
          accept: ["retroactive", "retroactive interference"],
          trap: ["proactive", "proactive interference"],
          trapMsg: "Here the NEW serve worked backwards to disrupt the OLD serve — Retroactive = New disrupts old!",
          sol: "New badminton serve disrupts recall of the older serve → **retroactive interference**.",
          hint: "Which memory failed — the old serve or the new serve? Retroactive = New blocks old.",
        },
        {
          prompt: `${person} hears a list of **${rng.int(11, 16)} spoken items** without rehearsing. Because Short-Term Memory holds only **7 ± 2** items, later items push earlier items out of the store. Name this one-word STM forgetting mechanism.`,
          accept: ["displacement", "stm displacement"],
          trap: ["repression"],
          trapMsg: "Repression is unconscious trauma defence; items pushed out of a full 7 ± 2 STM store is displacement.",
          sol: "Incoming items pushing older items out of full 7 ± 2 STM slots is **displacement**.",
          hint: "Starts with 'dis-' — STM's 7 ± 2 slots overflow.",
        },
      ];

      const tier2Cases = [
        ...tier1Cases,
        {
          prompt: `${person} learns ${rng.int(20, 35)} Biology definitions in Science Lab B${codeOld % 9 + 1}, then sits the test in the noisy Sports Hall and forgets words that return immediately upon walking back into Lab B${codeOld % 9 + 1}. Is this **context-dependent** or **state-dependent** forgetting?`,
          accept: ["context-dependent", "context dependent", "context-dependent forgetting", "context"],
          trap: ["state-dependent", "state dependent", "state"],
          trapMsg: "State-dependent refers to internal mood/physiology; external room mismatch is context-dependent.",
          sol: "External physical environment mismatch (Lab vs Sports Hall) causes **context-dependent** retrieval failure.",
          hint: "External room = context; internal body/mood = state.",
        },
        {
          prompt: `${person} revises ${rng.int(15, 30)} flashcards late at night feeling exhausted after a ${rng.int(5, 10)} km run, then struggles to recall them when fresh and alert the next morning. Is this **context-dependent** or **state-dependent** forgetting?`,
          accept: ["state-dependent", "state dependent", "state-dependent forgetting", "state"],
          trap: ["context-dependent", "context dependent", "context"],
          trapMsg: "Context-dependent is external room mismatch; internal fatigue vs alertness is state-dependent.",
          sol: "Internal physiological state mismatch (exhausted vs alert) causes **state-dependent** retrieval failure.",
          hint: "Exhaustion vs alertness is inside the body — context or state?",
        },
        {
          prompt: `In ${person}'s replication of **Bartlett (1932)**, a ${rng.int(310, 350)}-word folk tale shrinks to **${rng.int(140, 195)} words** by the fourth recall as unfamiliar ghost details are dropped. Which single Bartlett term names this shortening?`,
          accept: ["levelling", "leveling"],
          trap: ["sharpening"],
          trapMsg: "Sharpening exaggerates familiar details; dropping unfamiliar details so the story shortens is levelling.",
          sol: "Omitting unfamiliar details so recalls shrink in length is **levelling**.",
          hint: "C.L.A.S.: Confabulation, Levelling (shortening), Assimilation, Sharpening.",
        },
      ];

      const tier3Cases = [
        ...tier2Cases,
        {
          prompt: `After witnessing a ${rng.int(10, 25)}-second bicycle tumble outside a jeweller's shop, ${person} sincerely 'remembers' seeing broken shop-window glass that never existed, guided by a burglary schema. Name Bartlett's term for unconsciously inventing plausible gap-fillers.`,
          accept: ["confabulation", "confabulating"],
          trap: ["levelling", "leveling"],
          trapMsg: "Levelling omits details; unconsciously inventing plausible schema-consistent details is confabulation.",
          sol: "Unconsciously inventing plausible details to fill memory gaps without intending to lie is **confabulation**.",
          hint: "Starts with 'confab-' — honest unconscious gap-filling.",
        },
        {
          prompt: `${person} survived a frightening lift breakdown at age ${rng.int(6, 10)} with zero head injury, yet has no conscious memory of the event because an unconscious ego defence blocked anxiety. Name Freud's mechanism.`,
          accept: ["repression", "motivated forgetting"],
          trap: ["suppression"],
          trapMsg: "Suppression is conscious avoidance; Freud's UNCONSCIOUS blocking of trauma is repression.",
          sol: "Freud's psychodynamic **repression** unconsciously blocks traumatic memories from conscious awareness.",
          hint: "Unconscious psychodynamic defence (do not confuse with conscious suppression!).",
        },
        {
          prompt: `When retelling a traditional story mentioning **'yam canoes'** after ${rng.int(14, 28)} days, ${person} writes **'wooden fishing boats'** so the text fits modern expectations. Name Bartlett's term for altering unfamiliar cultural items into familiar ones.`,
          accept: ["assimilation", "rationalisation", "rationalization"],
          trap: ["levelling", "leveling"],
          trapMsg: "Levelling drops details completely; transforming 'canoes' into 'boats' to match culture is assimilation.",
          sol: "Transforming unfamiliar cultural elements into familiar cultural terms is **assimilation**.",
          hint: "Same process that turned Native American 'canoes' into British 'boats' in Bartlett (1932).",
        },
      ];

      const pool = tier === 1 ? tier1Cases : tier === 2 ? tier2Cases : tier3Cases;
      const chosen = rng.pick(pool);
      return {
        prompt: chosen.prompt,
        answer: { type: "text", accept: chosen.accept },
        solution: [chosen.sol],
        hint: chosen.hint,
        traps: [{ spec: { type: "text", accept: chosen.trap }, feedback: chosen.trapMsg }],
      };
    },
  },
  {
    id: "memory-and-forgetting.brain-amnesia-cases",
    topicId: "memory-and-forgetting",
    title: "Brain Localisation, Amnesia & H.M. Mirror-Drawing Lab",
    level: 3,
    guideRef: "brain-and-amnesia",
    generate(rng, tier) {
      const patient = rng.pick(NAMES);
      const age = rng.int(21, 64);

      if (rng.bool(0.45)) {
        // Quantitative mirror-drawing or retrograde/anterograde stats
        const day1Errors = rng.pick([20, 24, 25, 30, 32, 40, 50]);
        const dropPctChoices = tier === 1 ? [50, 75, 80] : [40, 60, 70, 75, 80, 85];
        const validPcts = dropPctChoices.filter((p) => Number.isInteger((day1Errors * p) / 100));
        const targetPct = rng.pick(validPcts.length ? validPcts : [50]);
        const reduction = (day1Errors * targetPct) / 100;
        const day3Errors = day1Errors - reduction;
        return {
          prompt: `Amnesia patient ${patient} (aged ${age}, hippocampal lesion like **H.M.**) completes **Corkin's mirror-drawing star task**: boundary errors fall from **${day1Errors} errors** on Day 1 to **${day3Errors} errors** on Day 3. Calculate the **percentage reduction** in boundary errors from Day 1 to Day 3.`,
          answer: { type: "number", value: targetPct },
          solution: [
            `Error reduction = ${day1Errors} − ${day3Errors} = ${reduction} errors.`,
            `Percentage reduction = (${reduction} ÷ ${day1Errors}) × 100 = ${targetPct}% (confirming intact procedural memory in the cerebellum!).`,
          ],
          hint: `Work out ((${day1Errors} − ${day3Errors}) ÷ ${day1Errors}) × 100.`,
          traps: [
            {
              spec: { type: "number", value: reduction },
              feedback: `${reduction} is the raw error reduction (${day1Errors} − ${day3Errors}) — divide by Day 1's ${day1Errors} errors and multiply by 100.`,
            },
          ],
        };
      }

      const vignettes = [
        {
          prompt: `Following a stroke at age ${age}, ${patient} holds a normal 20-second conversation in STM and plays violin concertos smoothly, yet cannot consolidate **any new episodic memories** formed **after** the stroke. Name the **brain structure** whose bilateral damage causes this deficit.`,
          accept: ["hippocampus", "the hippocampus"],
          trap: ["cerebellum"],
          trapMsg: "The cerebellum stores procedural violin skills (which are intact here!); consolidating new episodic LTM requires the hippocampus.",
          sol: "Bilateral **hippocampus** damage prevents consolidation of new declarative/episodic memories into LTM (Milner et al., 1968).",
          hint: "Same medial temporal structure removed in patient H.M.",
        },
        {
          prompt: `Patient ${patient} (aged ${age}) has bilateral hippocampal damage like **H.M.**, yet learns to trace a reflected star pattern **${rng.int(2, 4)} times faster** across three days without remembering the apparatus. Which **brain structure** at the back/base of the brain stores this intact procedural motor skill?`,
          accept: ["cerebellum", "the cerebellum"],
          trap: ["hippocampus"],
          trapMsg: "The hippocampus handles declarative LTM (which is damaged!); automatic motor skill learning relies on the cerebellum.",
          sol: "The **cerebellum** (with the basal ganglia) stores implicit **procedural motor skills** independently of the hippocampus.",
          hint: "Starts with 'cereb-' — coordinates motor balance and procedural skills.",
        },
        {
          prompt: `After a rugby concussion at age ${age}, ${patient} easily remembers new nurses met in hospital today, but has completely lost memories of the **${rng.int(3, 14)} days leading up to** the tackle. Is this **anterograde** or **retrograde** amnesia?`,
          accept: ["retrograde", "retrograde amnesia"],
          trap: ["anterograde", "anterograde amnesia"],
          trapMsg: "Anterograde is failing to form NEW memories after injury; losing memories from BEFORE the concussion is retrograde amnesia.",
          sol: "Loss of memories formed **before** brain injury is **retrograde amnesia**.",
          hint: "Retro = backwards in time BEFORE the injury.",
        },
        {
          prompt: `After viral encephalitis at age ${age}, ${patient} recalls childhood school trips clearly, but forgets every visitor within **${rng.int(2, 5)} minutes** of them leaving the hospital room **after** the illness. Is this **anterograde** or **retrograde** amnesia?`,
          accept: ["anterograde", "anterograde amnesia"],
          trap: ["retrograde", "retrograde amnesia"],
          trapMsg: "Retrograde is losing memories from BEFORE the illness; inability to consolidate NEW memories after onset is anterograde amnesia.",
          sol: "Inability to consolidate **new** declarative memories **after** brain damage is **anterograde amnesia**.",
          hint: "Antero = forward AFTER the brain injury.",
        },
        {
          prompt: `Neuroimaging of ${patient} (aged ${age}) shows selective damage to an almond-shaped limbic structure: ${patient} remembers neutral word lists normally, but emotionally shocking scenes no longer receive any extra memory boost or fear conditioning. Name this **brain structure**.`,
          accept: ["amygdala", "the amygdala"],
          trap: ["prefrontal cortex"],
          trapMsg: "The prefrontal cortex controls Working Memory attention; emotional memory tagging is performed by the amygdala.",
          sol: "The **amygdala** attaches emotional arousal and fear conditioning to memories.",
          hint: "Almond-shaped emotional hub sitting right next to the hippocampus.",
        },
      ];

      const v = rng.pick(tier === 1 ? vignettes.slice(0, 4) : vignettes);
      return {
        prompt: v.prompt,
        answer: { type: "text", accept: v.accept },
        solution: [v.sol],
        hint: v.hint,
        traps: [{ spec: { type: "text", accept: v.trap }, feedback: v.trapMsg }],
      };
    },
  },
];
