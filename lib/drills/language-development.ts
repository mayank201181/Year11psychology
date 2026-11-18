import type { Drill } from "./types.ts";
import { clean, roundTo } from "./helpers.ts";

const KIDS = [
  "Leo",
  "Maya",
  "Noah",
  "Ava",
  "Ravi",
  "Chloe",
  "Amir",
  "Hana",
  "Lucas",
  "Farah",
  "Zoe",
  "Ethan",
] as const;

const RESEARCHERS = [
  "Dr Gomez",
  "Prof Lin",
  "Dr Patel",
  "Ms Hassan",
  "Dr Novak",
  "Prof Mensah",
  "Dr Takahashi",
  "Mr Rivera",
] as const;

export const drills: Drill[] = [
  // -------------------------------------------------------------------------
  // DRILL 1: Utterance Stage & Semantic / Morphological Error Classifier
  // -------------------------------------------------------------------------
  {
    id: "language-development.stage-error",
    topicId: "language-development",
    title: "Classify Early Language Stages & Errors (Overextension vs Overregularisation)",
    level: 1,
    guideRef: "stages-language-acquisition",
    generate(rng, tier) {
      const kid = rng.pick(KIDS);

      if (tier === 1) {
        const stageCases = [
          {
            stage: ["pre-linguistic", "prelinguistic", "pre-linguistic stage", "babbling"],
            trap: "holophrastic",
            age: rng.int(4, 10),
            utt: rng.pick([
              `lies on a playmat repeating rhythmic syllable strings *'bababa'* and *'dadada'* without referring to specific objects`,
              `coos melodic vowel sounds *'oooh-aaah'* while gazing at a cot mobile`,
              `produces variegated babbling *'bamido-gaga'* with rising question-like intonation`,
            ]),
          },
          {
            stage: ["holophrastic", "holophrastic stage", "one-word", "one-word stage"],
            trap: "telegraphic",
            age: rng.int(13, 17),
            utt: rng.pick([
              `reaches out both arms toward a cup on the counter and shouts the single word *'Juice!'* to mean *'Give me juice'*`,
              `points excitedly at the front door and says *'Up!'* to ask to be lifted`,
              `holds up an empty bowl and says the single word *'More!'*`,
            ]),
          },
          {
            stage: ["telegraphic", "telegraphic stage", "telegraphic speech"],
            trap: "holophrastic",
            age: rng.int(24, 29),
            utt: rng.pick([
              `says *'Mummy give biscuit table'* — keeping content nouns/verbs in order while omitting functors (*is, a, on, the*)`,
              `points outside and says *'Big doggy run garden now'* without articles or verb inflections`,
              `tells Dad *'Baby sleep cot upstairs'* using content words like a telegram`,
            ]),
          },
          {
            stage: ["multi-word", "multi-word stage", "post-telegraphic", "multiword"],
            trap: "telegraphic",
            age: rng.int(33, 46),
            utt: rng.pick([
              `asks *'Why isn't Grandma coming to our house before dinner?'* using auxiliaries, negatives and prepositions`,
              `explains *'Yesterday I goed to the park and we feeded two ducks!'*`,
              `says *'Can I have the blue crayon after you finish colouring?'*`,
            ]),
          },
        ] as const;

        const c = rng.pick(stageCases);
        return {
          prompt: `**${c.age}-month-old ${kid}** ${c.utt}.\n\nName ${kid}'s **stage of language acquisition** (**pre-linguistic**, **holophrastic**, **telegraphic**, or **multi-word**).`,
          answer: { type: "text", accept: [...c.stage] },
          solution: [
            `0–12 m = pre-linguistic; 12–18 m = holophrastic (1 word); 24–30 m = telegraphic (content words, no functors); 30+ m = multi-word.`,
            `At ${c.age} months, ${kid}'s speech exemplifies the **${c.stage[0]}** stage.`,
          ],
          hint: "Match both the child's age in months and the word/grammar structure (Pretty Happy Toddlers Multiply).",
          traps: [
            {
              spec: { type: "text", accept: [c.trap] },
              feedback: `Check utterance length and age (${c.age} months): 1 word = holophrastic; 3–4+ content words without 'the/is' = telegraphic; full clauses/'-ed' = multi-word.`,
            },
          ],
        };
      }

      if (tier === 2) {
        // Distinguish Overextension, Underextension, and Overregularisation!
        const errorCases = [
          {
            ans: ["overextension", "over-extension", "semantic overextension"],
            trap: "overregularisation",
            age: rng.int(14, 18),
            desc: rng.pick([
              `points at horses, goats, cows and cats at a farm and calls every four-legged animal ***'doggy!'***`,
              `calls oranges, doorknobs, balloons and the full Moon ***'ball!'***`,
              `calls every adult man wearing glasses on the bus ***'Daddy!'***`,
            ]),
            why: "Stretching a single word's **semantic category too broadly** across perceptually similar objects in the holophrastic stage is **overextension**.",
          },
          {
            ans: ["underextension", "under-extension", "semantic underextension"],
            trap: "overextension",
            age: rng.int(13, 17),
            desc: rng.pick([
              `uses the word ***'shoes'*** exclusively for their own red trainers in the cupboard and refuses to call anyone else's footwear 'shoes'`,
              `calls only the family's ginger tabby ***'cat'*** and shakes their head at every other cat on the street`,
              `uses ***'bottle'*** only for one green sippy bottle and never for milk bottles in shops`,
            ]),
            why: "Restricting a category word **too narrowly** to one specific item rather than the whole class is **underextension**.",
          },
          {
            ans: [
              "overregularisation",
              "overregularization",
              "grammatical overregularisation",
              "grammatical overregularization",
            ],
            trap: "overextension",
            age: rng.int(32, 48),
            desc: rng.pick([
              `proudly announces: *'I **runned** fast and saw three white **mouses**!'*`,
              `says: *'Daddy **goed** to work and **buyed** apples!'*`,
              `complains: *'Both my **foots** hurt and my **tooths** wiggled!'*`,
            ]),
            why: "Applying regular morphological grammar suffixes (*-ed*, *-s*) to irregular verbs and nouns is **grammatical overregularisation**.",
          },
        ] as const;

        const e = rng.pick(errorCases);
        return {
          prompt: `**${e.age}-month-old ${kid}** ${e.desc}.\n\nIdentify the exact linguistic phenomenon (**overextension**, **underextension**, or **overregularisation**).`,
          answer: { type: "text", accept: [...e.ans] },
          solution: [e.why],
          hint: "ExtenSion = Semantic category size (over = too wide, under = too narrow); Regularisation = grammar suffix rule (-ed / -s).",
          traps: [
            {
              spec: { type: "text", accept: [e.trap] },
              feedback: `Watch out for CIE's #1 Topic 6 trap! ${e.why}`,
            },
          ],
        };
      }

      // Tier 3: Mean Length of Utterance (MLU) OR median vocabulary with outlier
      if (rng.bool(0.5)) {
        // 5 utterances whose sum is a multiple of 5 or gives 1 clean decimal place
        const u1 = rng.int(1, 3);
        const u2 = rng.int(2, 4);
        const u3 = rng.int(2, 5);
        const u4 = rng.int(3, 5);
        const u5 = rng.int(2, 6);
        const sum = u1 + u2 + u3 + u4 + u5;
        const mlu = roundTo(sum / 5, 1);
        const mAge = rng.int(22, 34);
        return {
          prompt: `${rng.pick(RESEARCHERS)} records the word counts of **5 consecutive utterances** spoken by **${mAge}-month-old ${kid}**: **${u1}, ${u2}, ${u3}, ${u4}, ${u5}**. Calculate ${kid}'s **Mean Length of Utterance (MLU)** in words.`,
          answer: { type: "number", value: mlu, tolerance: 0.01 },
          solution: [
            `Sum of words = ${u1} + ${u2} + ${u3} + ${u4} + ${u5} = ${sum}.`,
            `MLU = ${sum} ÷ 5 = **${mlu} words**.`,
          ],
          hint: "Add all five utterance word counts and divide by 5.",
          traps: [
            {
              spec: { type: "number", value: sum },
              feedback: `${sum} is the total words across all 5 utterances — divide by 5 for the mean.`,
            },
          ],
        };
      } else {
        const base = rng.int(14, 28);
        const sorted = [base - 5, base - 2, base, base + 3, base + 7, base + 11, base + 75];
        const shuffled = rng.shuffle(sorted);
        const median = sorted[3];
        const meanVal = roundTo(sorted.reduce((a, b) => a + b, 0) / 7, 1);
        return {
          prompt: `${rng.pick(RESEARCHERS)} counts spoken words in **7 toddlers** aged 17 months: **${shuffled.join(", ")}** (note the extreme outlier **${base + 75}**). Calculate the **median** vocabulary size.`,
          answer: { type: "number", value: median },
          solution: [
            `Sort all 7 scores in ascending order: ${sorted.join(", ")}.`,
            `The 4th (middle) score is **${median} words** (resisting the ${base + 75} outlier!).`,
          ],
          hint: "Sort all 7 numbers from smallest to largest first, then pick the 4th value.",
          traps: [
            {
              spec: { type: "number", value: shuffled[3] === median ? base + 75 : shuffled[3] },
              feedback: "Sort the 7 values from lowest to highest *before* picking the middle position!",
            },
            ...(meanVal !== median
              ? [
                  {
                    spec: { type: "number" as const, value: meanVal, tolerance: 0.1 },
                    feedback: "That is the mean (pulled up by the outlier) — sort the 7 numbers and pick the 4th for the **median**.",
                  },
                ]
              : []),
          ],
        };
      }
    },
  },

  // -------------------------------------------------------------------------
  // DRILL 2: Wug Test & Goldstein Contingent Babbling Data Lab
  // -------------------------------------------------------------------------
  {
    id: "language-development.wug-babbling-stats",
    topicId: "language-development",
    title: "Berko's Wug Test & Goldstein (2003) Babbling Data Calculations",
    level: 2,
    guideRef: "learning-behaviourist",
    generate(rng, tier) {
      const res = rng.pick(RESEARCHERS);
      const nonceWords = ["wug", "blick", "gutch", "kazh", "torp", "pilk"] as const;
      const nw = rng.pick(nonceWords);

      if (tier === 1) {
        const n = rng.pick([20, 25, 40, 50]);
        const pct = rng.pick([60, 68, 72, 75, 80, 84, 88, 90, 92, 95]);
        const correct = (n * pct) / 100;
        if (Number.isInteger(correct) && correct !== n - correct) {
          return {
            prompt: `In ${res}'s classroom replication of **Berko's (1958) '${nw}' plural test**, **${correct}** out of **${n}** children aged 5 correctly answered ***'two ${nw}s'***. What **percentage** of children applied the plural rule?`,
            answer: { type: "number", value: pct },
            solution: [
              `Percentage = (${correct} ÷ ${n}) × 100 = **${pct}%**.`,
            ],
            hint: `Divide ${correct} by ${n} and multiply by 100.`,
            traps: [
              {
                spec: { type: "number", value: 100 - pct },
                feedback: `${100 - pct}% is the percentage who *missed* the rule — calculate (${correct} ÷ ${n}) × 100.`,
              },
            ],
          };
        }
        return {
          prompt: `In ${res}'s replication of **Goldstein, King & West (2003)**, **${n * 2}** mother–infant dyads are divided equally between the **contingent** group and the **yoked non-contingent** control group. How many dyads are in **each** condition?`,
          answer: { type: "number", value: n },
          solution: [`${n * 2} ÷ 2 equal conditions = **${n} dyads per condition**.`],
          hint: "Divide total dyads by 2.",
        };
      }

      if (tier === 2) {
        // Goldstein et al. (2003) percentage increase in mature canonical syllables from Baseline to Contingent Response Phase
        const base = rng.pick([10, 12, 15, 16, 20, 24, 25]);
        const incPct = rng.pick([50, 75, 100, 125, 150]);
        let resp = (base * (100 + incPct)) / 100;
        let finalInc = incPct;
        if (!Number.isInteger(resp)) {
          finalInc = 100;
          resp = base * 2;
        }
        return {
          prompt: `In ${res}'s lab replication of **Goldstein, King & West (2003)**, a 9-month-old infant (${rng.pick(KIDS)}) produced **${base}** mature canonical syllables in the 10-min Baseline and **${resp}** in the 10-min **Contingent Social Response Phase**. Calculate the **percentage increase** in mature syllables.`,
          answer: { type: "number", value: finalInc },
          solution: [
            `Increase = ${resp} − ${base} = ${resp - base} syllables.`,
            `Percentage increase = (${resp - base} ÷ ${base}) × 100 = **${finalInc}%**.`,
          ],
          hint: "Compute (Contingent − Baseline) ÷ Baseline × 100.",
          traps: [
            {
              spec: { type: "number", value: resp - base },
              feedback: `${resp - base} is the raw syllable gain — divide by Baseline (${base}) and multiply by 100.`,
            },
          ],
        };
      }

      // Tier 3: Syllables per minute across 3 × 10-minute phases (30 minutes total)
      const p1 = rng.int(12, 24);
      const p2 = rng.int(36, 58);
      // Choose p3 so (p1 + p2 + p3) is divisible by 3 (giving exact 1 decimal place when divided by 30!)
      const rem = (p1 + p2) % 3;
      const rawP3 = rng.int(15, 29);
      const p3 = rawP3 + ((3 - ((rawP3 + rem) % 3)) % 3);
      const totalSyl = p1 + p2 + p3;
      const perMin = clean(totalSyl / 30);
      const perPhase = clean(totalSyl / 3);
      return {
        prompt: `In ${res}'s **Goldstein et al. (2003)** test on 9-month-old ${rng.pick(KIDS)}, mature canonical syllables across three **10-minute** phases were: Baseline = **${p1}**, Contingent Smile/Touch = **${p2}**, Extinction Return = **${p3}**. Calculate the **mean rate of mature syllables per minute** across the entire **30-minute** session.`,
        answer: { type: "number", value: perMin, tolerance: 0.01 },
        solution: [
          `Total mature syllables = ${p1} + ${p2} + ${p3} = ${totalSyl}.`,
          `Total time = 3 × 10 = 30 minutes.`,
          `Mean rate per minute = ${totalSyl} ÷ 30 = **${perMin} syllables/min**.`,
        ],
        hint: "Sum all three phase counts, then divide by 30 minutes (not 3 phases!).",
        traps: [
          {
            spec: { type: "number", value: perPhase, tolerance: 0.01 },
            feedback: `${perPhase} is the mean per *10-minute phase* — divide by **30 minutes** for syllables **per minute**.`,
          },
        ],
      };
    },
  },

  // -------------------------------------------------------------------------
  // DRILL 3: Language Theories & Compulsory Named Studies Diagnostic
  // -------------------------------------------------------------------------
  {
    id: "language-development.theories-diagnose",
    topicId: "language-development",
    title: "Match Scenarios to Chomsky, Skinner, Piaget & Bruner (+ Named Studies)",
    level: 2,
    guideRef: "chomsky-nativist-lad",
    generate(rng, tier) {
      const kid = rng.pick(KIDS);
      const res = rng.pick(RESEARCHERS);

      if (tier === 1) {
        const items = [
          {
            ans: ["chomsky", "noam chomsky", "nativist", "nativist theory"],
            trap: "skinner",
            clue: `argues ${kid}'s rapid mastery of syntax despite fragmentary adult speech (**poverty of the stimulus**) proves an innate **Language Acquisition Device (LAD)**`,
          },
          {
            ans: ["skinner", "b.f. skinner", "b. f. skinner", "behaviourist", "learning theory"],
            trap: "chomsky",
            clue: `explains ${kid}'s progression from *'muh'* to *'milk'* through **operant shaping** of successive approximations and **selective positive reinforcement**`,
          },
          {
            ans: ["piaget", "jean piaget", "cognitive", "cognitive theory"],
            trap: "bruner",
            clue: `argues ${kid} could only start using *'All gone!'* meaningfully **after** constructing sensorimotor **object permanence** and **schemas** via assimilation and accommodation`,
          },
          {
            ans: ["bruner", "jerome bruner", "interactionist", "social interactionist"],
            trap: "piaget",
            clue: `explains how caregiver **Child-Directed Speech**, *peek-a-boo* routines and shared book **scaffolding** (**LASS**) partner with ${kid}'s innate readiness`,
          },
        ] as const;

        const it = rng.pick(items);
        return {
          prompt: `In a seminar report on toddler ${kid}, ${res} ${it.clue}.\n\nWhich **theorist** (**Chomsky**, **Skinner**, **Piaget**, or **Bruner**) is ${res} applying?`,
          answer: { type: "text", accept: [...it.ans] },
          solution: [
            `Chomsky = innate LAD/UG; Skinner = operant reinforcement/shaping; Piaget = cognitive schemas precede language; Bruner = social LASS scaffolding.`,
            `Here the matching theorist is **${it.ans[0][0].toUpperCase() + it.ans[0].slice(1)}**.`,
          ],
          hint: "LAD/poverty of stimulus = Chomsky; shaping/reinforcement = Skinner; schemas/object permanence = Piaget; LASS/scaffolding = Bruner.",
          traps: [
            {
              spec: { type: "text", accept: [it.trap] },
              feedback: "Re-check the signature concept in the prompt against LAD (Chomsky), shaping (Skinner), schemas (Piaget) and LASS (Bruner).",
            },
          ],
        };
      }

      if (tier === 2) {
        // Match compulsory named studies OR Piaget assimilation vs accommodation
        const studies = [
          {
            ans: ["senghas", "senghas (1995)", "ann senghas", "senghas 1995"],
            trap: "hewitt",
            desc: `documented how young (<10 yrs) **second-cohort** deaf children in Managua spontaneously transformed Cohort 1's rough pidgin into full grammatical **Nicaraguan Sign Language**`,
          },
          {
            ans: [
              "goldstein",
              "goldstein, king & west",
              "goldstein, king and west",
              "goldstein et al.",
              "goldstein et al. (2003)",
            ],
            trap: "senghas",
            desc: `used a 30-dyad **yoked-control** lab experiment showing **contingent silent maternal smiling and touching** matured 8–10-month-old infants' canonical babbling`,
          },
          {
            ans: ["hewitt", "hewitt (2022)", "hewitt 2022"],
            trap: "berko",
            desc: `conducted **naturalistic qualitative case studies** observing how young children's repetitive **transporting and enveloping play schemas** scaffold relational language`,
          },
          {
            ans: ["berko", "jean berko", "berko gleason", "berko (1958)"],
            trap: "goldstein",
            desc: `showed 4–7-year-old children a cartoon nonsense creature (***'one wug'***) to prove morphological rule extraction (***'two wugs'***) without prior adult modelling`,
          },
          {
            ans: ["assimilation", "schema assimilation"],
            trap: "accommodation",
            desc: `notes that ${kid} fits a new fluffy white rabbit into their existing *'doggy'* schema without changing the category yet (*Piagetian schema process*)`,
          },
          {
            ans: ["accommodation", "schema accommodation"],
            trap: "assimilation",
            desc: `notes that ${kid} **modifies and splits** their old four-legged-animal schema to create a brand-new *'horse'* category after seeing horses carry riders (*Piagetian schema process*)`,
          },
        ] as const;

        const st = rng.pick(studies);
        const isSchema = st.ans[0] === "assimilation" || st.ans[0] === "accommodation";
        return {
          prompt: `While reviewing evidence on ${kid}'s development, ${res} ${st.desc}.\n\n${
            isSchema
              ? "Name this specific **Piagetian schema process** (**assimilation** or **accommodation**)."
              : "Give the **lead researcher's surname** (**Senghas**, **Goldstein**, **Hewitt**, or **Berko**)."
          }`,
          answer: { type: "text", accept: [...st.ans] },
          solution: [
            isSchema
              ? `aSSimilation = fitting into the Same Schema; aCCommodation = Changing/Creating a schema. Answer: **${st.ans[0]}**.`
              : `Match: Senghas (1995) = Nicaraguan Sign Language; Goldstein et al. (2003) = contingent babbling; Hewitt (2022) = play schema case studies; Berko (1958) = wug test. Answer: **${st.ans[0]}**.`,
          ],
          hint: isSchema
            ? "Double S = Same Schema; Double C = Change/Create."
            : "NSL deaf cohorts = Senghas; yoked babbling = Goldstein; play schemas = Hewitt; wugs = Berko.",
          traps: [
            {
              spec: { type: "text", accept: [st.trap] },
              feedback: "Double-check the exact study/process details in the stem!",
            },
          ],
        };
      }

      // Tier 3: Senghas (1995) cohort grammatical modulation ratio / percentage comparison
      const lateRate = roundTo(rng.pick([12, 14, 15, 16, 18, 20, 25]) / 10, 1);
      const multPct = rng.pick([50, 100, 150, 200]);
      const earlyRate = roundTo(lateRate * (1 + multPct / 100), 2);
      // Ensure clean 1-2 decimal places
      return {
        prompt: `In ${res}'s analysis of **Senghas (1995)** Nicaraguan Sign Language signing, **Late-exposed (>10 yrs)** signers averaged **${lateRate}** spatial inflections per verb, whereas **Early Cohort 2 (<7 yrs)** signers averaged **${earlyRate}** inflections per verb. Calculate the **percentage increase** from Late-exposed to Early Cohort 2 signers.`,
        answer: { type: "number", value: multPct },
        solution: [
          `Increase = ${earlyRate} − ${lateRate} = ${roundTo(earlyRate - lateRate, 2)} inflections/verb.`,
          `Percentage increase = (${roundTo(earlyRate - lateRate, 2)} ÷ ${lateRate}) × 100 = **${multPct}%**.`,
        ],
        hint: "Subtract Late rate from Early Cohort 2 rate, divide by Late rate, and multiply by 100.",
        traps: [
          {
            spec: { type: "number", value: 100 + multPct },
            feedback: `${100 + multPct}% is Early as a percentage *of* Late — subtract 100% (or subtract ${lateRate} before dividing) for percentage **increase**.`,
          },
        ],
      };
    },
  },

  // -------------------------------------------------------------------------
  // DRILL 4: Hockett's Design Features & Animal vs Human Communication
  // -------------------------------------------------------------------------
  {
    id: "language-development.hockett-animal",
    topicId: "language-development",
    title: "Hockett's Design Features, Honeybees & Ape Lexigrams",
    level: 3,
    guideRef: "animal-vs-human",
    generate(rng, tier) {
      const res = rng.pick(RESEARCHERS);
      const kid = rng.pick(KIDS);

      if (tier === 1 || tier === 2) {
        const cases = [
          {
            ans: ["semanticity"],
            trap: "productivity",
            t1: `A vervet monkey gives a specific 'eagle' alarm call that reliably means *aerial predator*, causing troop-mates to look up and hide in bushes.`,
            t2: `In **von Frisch's** hive study, the waggle angle and duration reliably stand for solar direction and distance to nectar, while **Kanzi's** 350+ keyboard lexigrams each refer to a specific food or action.`,
          },
          {
            ans: ["displacement"],
            trap: "semanticity",
            t1: `Four-year-old ${kid} chats excitedly about dinosaurs that lived millions of years ago and a spaceship holiday next summer.`,
            t2: `While honeybees can signal out-of-sight horizontal clover right now, they **cannot** warn hive-mates about a bear that raided the meadow *yesterday* or discuss *hypothetical* weather next week.`,
          },
          {
            ans: ["productivity", "open-endedness", "creativity"],
            trap: "displacement",
            t1: `${kid} combines familiar words via recursive grammar to utter a brand-new sentence nobody on Earth has ever spoken before.`,
            t2: `When ${res} places sugar water **straight up** on a 20 m tower above a hive, scout bees fail completely because their closed dance code cannot invent a novel expression for *'fly vertically upward'*.`,
          },
          {
            ans: ["cultural transmission"],
            trap: "semanticity",
            t1: `A baby born in Seoul and adopted in Madrid grows up speaking fluent Spanish learned socially from surrounding family, whereas an isolated kitten still miaows normally from DNA.`,
            t2: `A honeybee raised in isolation performs the figure-of-eight waggle dance innately without being taught, whereas human vocabularies and **Nicaraguan Sign Language** pass across generations socially.`,
          },
        ] as const;

        const c = rng.pick(cases);
        const contexts = ["lab seminar", "ethology field log", "psycholinguistics review", "comparative lecture"] as const;
        const ctx = rng.pick(contexts);
        const text = tier === 1 ? c.t1 : c.t2;
        return {
          prompt: `**Observation (${res}, ${ctx} #${rng.int(1, 5)})**: ${text}\n\nWhich of **Hockett's four core design features** (**semanticity**, **displacement**, **productivity**, or **cultural transmission**) is the central focus here?`,
          answer: { type: "text", accept: [...c.ans] },
          solution: [
            `Semanticity = specific symbol meaning; Displacement = past/future/absent/imaginary reference; Productivity = infinite novel combinations via recursive syntax; Cultural transmission = socially learned across generations.`,
            `Here the target feature is **${c.ans[0]}**.`,
          ],
          hint: "Check Some Dogs Play Catch: Semanticity (meaning), Displacement (absent time/space), Productivity (novel infinite rules), Cultural transmission (learned socially).",
          traps: [
            {
              spec: { type: "text", accept: [c.trap] },
              feedback: "Re-read carefully: meaning = semanticity; distant time/space = displacement; coining infinite new messages = productivity; social generation learning = cultural transmission.",
            },
          ],
        };
      }

      // Tier 3: Quantitative Kanzi instrumental vs declarative symbol breakdown OR von Frisch waggle angle geometry
      if (rng.bool(0.5)) {
        const total = rng.pick([200, 250, 300, 400, 500]);
        const instPct = rng.pick([84, 85, 88, 90, 92, 95]);
        const instCount = (total * instPct) / 100;
        if (Number.isInteger(instCount)) {
          const declCount = total - instCount;
          return {
            prompt: `${res} analyses **${total}** recorded lexigram combinations from an ape language session (**Kanzi** paradigm) and finds **${instPct}%** are **instrumental requests** (asking for food/tickles), while only the remainder are declarative comments. How many combinations were **declarative comments**?`,
            answer: { type: "number", value: declCount },
            solution: [
              `Declarative percentage = 100% − ${instPct}% = ${100 - instPct}%.`,
              `${100 - instPct}% of ${total} = **${declCount} declarative combinations**.`,
            ],
            hint: `Subtract ${instPct}% from 100%, then find that percentage of ${total}.`,
            traps: [
              {
                spec: { type: "number", value: instCount },
                feedback: `${instCount} is the ${instPct}% instrumental requests — subtract from ${total} to get **declarative comments**.`,
              },
            ],
          };
        }
      }

      // von Frisch waggle angle relative to vertical (Sun = 0° straight UP on comb)
      const sunAzimuth = rng.pick([90, 120, 150, 180, 210, 240]);
      const combOffset = rng.pick([30, 45, 60, 90]);
      const foodBearing = (sunAzimuth + combOffset) % 360;
      return {
        prompt: `In ${res}'s **von Frisch** honeybee observation hive, the **sun** is currently at compass bearing **${sunAzimuth}°**. A scout bee dances a straight waggle run angled **${combOffset}° clockwise** from straight **up** on the vertical honeycomb. At what compass bearing (**in degrees, 0–359**) do the flowers lie?`,
        answer: { type: "number", value: foodBearing },
        solution: [
          `Straight up (0°) on the vertical honeycomb points toward the sun (${sunAzimuth}°).`,
          `Rotating ${combOffset}° clockwise adds ${combOffset}° to the sun's bearing: ${sunAzimuth}° + ${combOffset}° = **${foodBearing}°**.`,
        ],
        hint: "Straight up = sun's bearing; clockwise on the comb adds degrees clockwise to the sun's compass bearing.",
        traps: [
          {
            spec: { type: "number", value: (sunAzimuth - combOffset + 360) % 360 },
            feedback: "Clockwise from vertical adds to the sun's compass bearing rather than subtracting.",
          },
        ],
      };
    },
  },
];
