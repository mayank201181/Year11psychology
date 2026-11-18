import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      kind: "short",
      id: "memory-and-forgetting-quiz-q01",
      question:
        "According to **Miller (1956)** and the Multi-Store Model, `7 ± 2` items (between 5 and 9 items) is the standard capacity of Short-Term Memory. What is the midpoint integer capacity `7 ± 2` centres around?",
      answer: { type: "number", value: 7 },
      traps: [
        { spec: { type: "number", value: 18 }, feedback: "18–30 seconds is the duration of STM, not its item capacity." },
        { spec: { type: "number", value: 30 }, feedback: "30 seconds is the upper duration of STM, whereas capacity centres on 7 items." },
      ],
      solution: ["Miller's (1956) 'Magical Number Seven, Plus or Minus Two' puts average STM capacity at 7 items/chunks (range 5–9)."],
      difficulty: "warmup",
      guideRef: "processes-and-msm",
      hints: ["Look at the central number in Miller's famous phrase 'Magical Number ___, Plus or Minus Two'."],
    },
    {
      kind: "short",
      id: "memory-and-forgetting-quiz-q02",
      question:
        "In **Murdock's (1962)** study, what term names the superior recall of the **first few words** at the beginning of a word list?",
      answer: { type: "text", accept: ["primacy effect", "primacy"] },
      traps: [
        { spec: { type: "text", accept: ["recency effect", "recency"] }, feedback: "Recency is high recall of the LAST few words (still in STM); the FIRST few words show the primacy effect." },
      ],
      solution: ["The **primacy effect** refers to superior recall of early list items because they receive more rehearsal and transfer into LTM."],
      difficulty: "warmup",
      guideRef: "processes-and-msm",
      hints: ["Think of the word meaning 'first in order' (as opposed to recency at the end)."],
    },
    {
      kind: "mcq",
      id: "memory-and-forgetting-quiz-q03",
      question:
        "Which slave system of **Baddeley & Hitch's Working Memory Model** temporarily stores visual shapes/colours and spatial locations?",
      options: [
        "Visuo-spatial sketchpad",
        "Phonological loop",
        "Central executive",
        "Sensory echoic store",
      ],
      answerIndex: 0,
      explanation:
        "The **visuo-spatial sketchpad** (*inner eye*) handles visual properties (visual cache) and spatial layouts (inner scribe). The phonological loop handles speech/sound.",
      difficulty: "warmup",
      guideRef: "working-memory-levels",
      hints: ["Look for the component whose name combines sight and space."],
    },
    {
      kind: "short",
      id: "memory-and-forgetting-quiz-q04",
      question:
        "In **Craik & Tulving (1975)**, what single word names the **deepest** level of processing, in which participants judge the **meaning** of a word?",
      answer: { type: "text", accept: ["semantic", "semantic processing", "semantic encoding"] },
      traps: [
        { spec: { type: "text", accept: ["structural", "structural processing"] }, feedback: "Structural processing (appearance/font case) is the shallowest level." },
        { spec: { type: "text", accept: ["phonemic", "phonemic processing"] }, feedback: "Phonemic processing (sound/rhyme) is the intermediate level, not the deepest." },
      ],
      solution: ["**Semantic** processing encodes meaning and context, producing the strongest recognition (~81%+)."],
      difficulty: "warmup",
      guideRef: "working-memory-levels",
      hints: ["Compare the three levels: structural (look), phonemic (sound), and ___ (meaning)."],
    },
    {
      kind: "short",
      id: "memory-and-forgetting-quiz-q05",
      question:
        "In **Bartlett's (1932)** Theory of Reconstructive Memory, what key term describes an organised mental packet of knowledge and cultural expectations formed from past experience?",
      answer: { type: "text", accept: ["schema", "schemas", "schemata"] },
      solution: ["A **schema** is a mental framework of stored knowledge and cultural expectations used to interpret and reconstruct events."],
      commonError: "Confusing a schema (organised LTM expectation packet) with confabulation (the process of inventing missing details to fit that schema).",
      difficulty: "warmup",
      guideRef: "reconstructive-schemas",
      hints: ["Starts with 'sch-' — British participants used their cultural ones when retelling *The War of the Ghosts*."],
    },
    {
      kind: "mcq",
      id: "memory-and-forgetting-quiz-q06",
      question:
        "A student learns Spanish verbs on Monday and Italian verbs on Wednesday. On Friday she takes a **Spanish** test and keeps writing Italian endings instead. Which forgetting process occurred?",
      options: [
        "Proactive interference",
        "Retroactive interference",
        "Displacement from Short-Term Memory",
        "Context-dependent decay",
      ],
      answerIndex: 1,
      explanation:
        "Wednesday's **new** Italian verbs worked backwards to disrupt Friday's recall of Monday's **older** Spanish verbs — **retroactive interference**. Proactive interference would be old Spanish disrupting a new Italian test.",
      difficulty: "core",
      guideRef: "explanations-forgetting",
      hints: [
        "Which language is being tested on Friday: Monday's old Spanish or Wednesday's new Italian?",
        "When NEW learning disrupts OLD recall, use P.O.R.N.",
      ],
    },
    {
      kind: "short",
      id: "memory-and-forgetting-quiz-q07",
      question:
        "In a classroom replication of **Godden & Baddeley (1975)**, students tested in the **same** room where they studied recalled a mean of `18` out of `24` words. Calculate this mean recall as a **percentage**.",
      answer: { type: "number", value: 75 },
      traps: [
        { spec: { type: "number", value: 25 }, feedback: "25% is the percentage forgotten (6 out of 24), not the percentage recalled." },
      ],
      solution: ["Percentage recalled = `(18 ÷ 24) × 100 = 0.75 × 100 = 75%`."],
      difficulty: "core",
      guideRef: "explanations-forgetting",
      hints: ["Simplify `18 / 24` first (`divide top and bottom by 6`), then multiply by `100`.", "`3 / 4 × 100`."],
    },
    {
      kind: "short",
      id: "memory-and-forgetting-quiz-q08",
      question:
        "What type of amnesia prevented patient **H.M.** from consolidating **new** long-term episodic and semantic memories **after** his 1953 surgery?",
      answer: { type: "text", accept: ["anterograde amnesia", "anterograde"] },
      traps: [
        { spec: { type: "text", accept: ["retrograde amnesia", "retrograde"] }, feedback: "Retrograde amnesia is losing memories formed BEFORE brain damage; inability to form NEW LTMs after surgery is anterograde amnesia." },
      ],
      solution: ["**Anterograde amnesia** is the inability to transfer/consolidate new declarative experiences into LTM following hippocampal brain damage."],
      difficulty: "core",
      guideRef: "brain-and-amnesia",
      hints: [
        "Distinguish before-surgery loss (retrograde) from after-surgery inability to form new LTMs.",
        "Starts with 'antero-'.",
      ],
    },
    {
      kind: "written",
      id: "memory-and-forgetting-quiz-q09",
      question:
        "State **two** differences between **Short-Term Memory (STM)** and **Long-Term Memory (LTM)** according to Atkinson & Shiffrin's Multi-Store Model. [2 marks]",
      marks: 2,
      modelAnswer:
        "First, STM has a strictly limited capacity of 7 ± 2 chunks, whereas LTM has a potentially unlimited capacity. Second, STM encodes predominantly acoustically and lasts only 18–30 seconds without rehearsal, whereas LTM encodes predominantly semantically and can last a lifetime.",
      markScheme: [
        {
          point: "Contrasts capacity or duration accurately (STM 7±2 items / 18–30s vs LTM unlimited / lifetime)",
          keywords: ["7", "unlimited", "18", "30", "lifetime"],
        },
        {
          point: "Contrasts dominant coding accurately (STM acoustic vs LTM semantic)",
          keywords: ["acoustic", "semantic"],
        },
      ],
      commonError: "Describing only STM without explicitly stating the contrasting feature of LTM.",
      difficulty: "core",
      guideRef: "processes-and-msm",
      hints: [
        "Compare capacity or duration for your first difference.",
        "Compare dominant coding (sound vs meaning) for your second difference.",
      ],
    },
    {
      kind: "written",
      id: "memory-and-forgetting-quiz-q10",
      question:
        "Explain **one** strength and **one** limitation of using a clinical case study such as **Milner et al. (1968)** on patient **H.M.** to investigate brain localisation of memory. [4 marks]",
      marks: 4,
      modelAnswer:
        "One major strength is ethical necessity and depth: deliberately lesioning a healthy human hippocampus would cause severe harm, so studying H.M. longitudinally through triangulation (IQ tests, mirror-drawing, and MRI) revealed the dissociation between declarative and procedural LTM. However, a key limitation is low population generalisability because H.M. was a single unique individual (n = 1) who suffered severe chronic epilepsy prior to surgery, meaning his brain organisation may not represent healthy adults.",
      markScheme: [
        {
          point: "Identifies ethical advantage or longitudinal triangulation depth",
          keywords: ["ethic", "harm", "longitudinal", "triangulation", "in-depth"],
        },
        {
          point: "Explains what this strength revealed (e.g. declarative vs procedural dissociation / MRI verification)",
          keywords: ["procedural", "declarative", "mirror", "mri", "dissociation"],
        },
        {
          point: "Identifies low generalisability / population validity from single sample (n = 1)",
          keywords: ["generalis", "generaliz", "single", "one individual", "n = 1", "unique"],
        },
        {
          point: "Explains why H.M. was atypical (severe pre-existing epilepsy / atypical brain)",
          keywords: ["epilepsy", "epileptic", "seizure", "atypical"],
        },
      ],
      commonError: "Saying 'sample size was small' without linking H.M.'s pre-existing epilepsy to why his brain might differ from healthy people.",
      difficulty: "core",
      guideRef: "brain-and-amnesia",
      hints: [
        "Why couldn't psychologists run a true lab experiment removing people's hippocampi?",
        "Why might `n = 1` with severe pre-surgery epilepsy limit generalising to the wider population?",
      ],
    },
  ],
  papers: [
    {
      id: "memory-and-forgetting-p1",
      title: "Practice Paper 1: Cognitive Models, Schemas & Data",
      questions: [
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q01",
          question:
            "In **Murdock (1962)**, how many **psychology students** participated in the serial position word-list experiments?",
          answer: { type: "number", value: 103 },
          traps: [
            { spec: { type: "number", value: 20 }, feedback: "20 was a typical word-list length (10–40 words), whereas the participant sample size was 103." },
            { spec: { type: "number", value: 24 }, feedback: "24 participants is from Craik & Tulving (1975); Murdock (1962) tested 103 psychology students." },
          ],
          solution: ["Murdock (1962) tested **103** undergraduate psychology students across multiple word-list sessions."],
          difficulty: "warmup",
          guideRef: "processes-and-msm",
          hints: ["It is just over one hundred psychology students."],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q02",
          question:
            "Without maintenance rehearsal, **Peterson & Peterson (1959)** showed that consonant trigrams fade from Short-Term Memory within `18` to `30` seconds. Calculate the **range** (upper bound minus lower bound) of this STM duration window in seconds.",
          answer: { type: "number", value: 12 },
          traps: [
            { spec: { type: "number", value: 24 }, feedback: "24 seconds is the midpoint `(18 + 30) ÷ 2`, whereas the range is `30 − 18`." },
          ],
          solution: ["Range = maximum − minimum = `30 − 18 = 12` seconds."],
          difficulty: "warmup",
          guideRef: "processes-and-msm",
          hints: ["Range = highest value minus lowest value (`30 − 18`)."],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q03",
          question:
            "In a replication of **Murdock (1962)** with `40` participants, `34` participants recalled Word 1 (start), `9` recalled Word 10 (middle), and `36` recalled Word 20 (end). Calculate the **percentage** of participants who recalled **Word 1**.",
          answer: { type: "number", value: 85 },
          traps: [
            { spec: { type: "number", value: 90 }, feedback: "90% (`36 ÷ 40`) is the recency recall for Word 20; check Word 1 (`34 ÷ 40`)." },
            { spec: { type: "number", value: 34 }, feedback: "34 is the raw count out of 40 — divide by 40 and multiply by 100 for the percentage." },
          ],
          solution: [
            "Word 1 recall = `34` out of `40`.",
            "Percentage = `(34 ÷ 40) × 100 = 0.85 × 100 = 85%`.",
          ],
          difficulty: "core",
          guideRef: "processes-and-msm",
          hints: ["Divide the number who recalled Word 1 (`34`) by total participants (`40`).", "Multiply `0.85` by `100`."],
        },
        {
          kind: "written",
          id: "memory-and-forgetting-p1-q04",
          question:
            "Kieran reads a 25-word shopping list aloud once, immediately gets distracted for 40 seconds answering a phone call from his dad, and then tries to write down the shopping list. Using the **Multi-Store Model**, explain what happens to Kieran's recall of words from the **start** versus the **end** of the list. [4 marks]",
          marks: 4,
          modelAnswer:
            "Kieran will still recall several items from the start of the list (the primacy effect) because he rehearsed those early words enough times to transfer them into Long-Term Memory, which has a long duration. However, his recall of items from the end of the list (the recency effect) will drop sharply because the 40-second phone conversation prevented maintenance rehearsal and exceeded STM's 18–30 second duration, causing the final items to be lost from Short-Term Memory via displacement and decay.",
          markScheme: [
            {
              point: "States start/early items are recalled well (primacy effect survives)",
              keywords: ["primacy", "early words", "first few", "start of"],
            },
            {
              point: "Explains early items were rehearsed and transferred into Long-Term Memory (LTM)",
              keywords: ["rehears", "long-term memory", "ltm"],
            },
            {
              point: "States end/final items are forgotten (recency effect abolished)",
              keywords: ["recency", "final items", "last few", "drop", "lost"],
            },
            {
              point: "Explains the 40s call exceeded STM's 18–30s duration / displaced items from STM",
              keywords: ["short-term memory", "stm", "18", "30", "displac", "decay"],
            },
          ],
          commonError: "Claiming Kieran forgets the entire list, forgetting that early primacy items are already safely consolidated in LTM.",
          difficulty: "core",
          guideRef: "processes-and-msm",
          hints: [
            "Where are the early list items stored by the time the phone rings (STM or LTM)?",
            "How does a 40-second verbal phone call compare against STM's 18–30 second duration and 7 ± 2 slot limit?",
          ],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q05",
          question:
            "Which component of **Baddeley's (2000) Working Memory Model** is a modality-free temporary store holding roughly `4` chunks that binds visual, spatial, and verbal information together with Long-Term Memory?",
          answer: { type: "text", accept: ["episodic buffer", "the episodic buffer"] },
          traps: [
            { spec: { type: "text", accept: ["central executive"] }, feedback: "The central executive directs attention, whereas the episodic buffer binds multimodal chunks together with LTM." },
            { spec: { type: "text", accept: ["phonological loop"] }, feedback: "The phonological loop only stores acoustic/speech code, not multimodal episodes." },
          ],
          solution: ["Baddeley (2000) added the **episodic buffer** (~4 chunks) to integrate visual, spatial, and verbal streams and link Working Memory to LTM."],
          difficulty: "core",
          guideRef: "working-memory-levels",
          hints: ["Added in the year 2000 update to solve the binding problem.", "Two words: '___ buffer'."],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q06",
          question:
            "In **Craik & Tulving (1975)**, words were flashed briefly on a tachistoscope for `0.2` seconds so participants could not scan them repeatedly. Convert `0.2` seconds into **milliseconds (ms)**.",
          answer: { type: "number", value: 200 },
          traps: [
            { spec: { type: "number", value: 20 }, feedback: "`0.02` s is 20 ms — multiply `0.2` by `1,000` milliseconds per second." },
            { spec: { type: "number", value: 2000 }, feedback: "`2,000` ms would be 2 full seconds; `0.2 × 1,000 = 200` ms." },
          ],
          solution: ["`1` second = `1,000` milliseconds, so `0.2 × 1,000 = 200` ms."],
          difficulty: "warmup",
          guideRef: "working-memory-levels",
          hints: ["There are `1,000` milliseconds in `1` second — multiply `0.2` by `1,000`."],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q07",
          question:
            "In a classroom test of **Levels of Processing**, students recognised a mean of `4` words in the Structural condition, `12` words in the Phonemic condition, and `16` words in the Semantic condition. Express the ratio of **Structural : Phonemic : Semantic** mean recognition in its **simplest whole-number form**.",
          answer: { type: "ratio", parts: [1, 3, 4], simplest: true },
          traps: [
            { spec: { type: "ratio", parts: [4, 3, 1] }, feedback: "Keep the exact order requested in the question: Structural : Phonemic : Semantic (`1 : 3 : 4`)." },
          ],
          solution: [
            "Start with `4 : 12 : 16`.",
            "Divide every part by the highest common factor (`4`): `1 : 3 : 4`.",
          ],
          difficulty: "core",
          guideRef: "working-memory-levels",
          hints: ["Write `4 : 12 : 16` in that order.", "Divide all three numbers by `4`."],
        },
        {
          kind: "written",
          id: "memory-and-forgetting-p1-q08",
          question:
            "Ananya revises History by listening to a History podcast while simultaneously reading her History textbook chapter silently. Meanwhile, her brother Kabir revises Biology by studying a colour-coded brain anatomy diagram while listening to an instrumental piano track (no lyrics). Using **Baddeley & Hitch's Working Memory Model**, explain why Kabir revises far more effectively than Ananya. [4 marks]",
          marks: 4,
          modelAnswer:
            "Ananya's podcast (spoken speech entering her phonological store) and textbook reading (converted into inner speech by her articulatory control process) are both verbal tasks that compete for her limited-capacity phonological loop, causing severe dual-task interference. By contrast, Kabir's contour map uses his visuo-spatial sketchpad while the lyric-free instrumental track does not demand verbal articulatory coding, so his slave systems do not compete and he avoids overloading one channel.",
          markScheme: [
            {
              point: "Identifies that both of Ananya's tasks are verbal/acoustic and compete for the phonological loop",
              keywords: ["phonological loop", "both verbal", "acoustic", "articulatory"],
            },
            {
              point: "Explains that competing for one limited slave system causes dual-task interference / overload",
              keywords: ["overload", "compete", "interfer", "limited capacity"],
            },
            {
              point: "Identifies that Kabir's contour map uses the visuo-spatial sketchpad",
              keywords: ["visuo-spatial", "visuospatial", "sketchpad"],
            },
            {
              point: "Explains that separate non-competing slave systems allow smooth parallel processing",
              keywords: ["separate", "different slave", "no lyrics", "parallel", "do not compete"],
            },
          ],
          commonError: "Naming the central executive alone without naming the phonological loop and visuo-spatial sketchpad.",
          difficulty: "core",
          guideRef: "working-memory-levels",
          hints: [
            "Which slave system handles spoken words AND silently read text?",
            "Which slave system handles Kabir's visual contour map, and why does instrumental piano avoid clashing with it?",
          ],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q09",
          question:
            "In **Bartlett's (1932)** *The War of the Ghosts*, what specific reconstructive term describes **unconsciously inventing plausible details** to fill memory gaps without any deliberate intention to lie?",
          answer: { type: "text", accept: ["confabulation", "confabulating"] },
          traps: [
            { spec: { type: "text", accept: ["levelling", "leveling"] }, feedback: "Levelling omits unfamiliar details to make the story shorter; inventing plausible gap-fillers is confabulation." },
            { spec: { type: "text", accept: ["sharpening"] }, feedback: "Sharpening exaggerates existing familiar details rather than inventing new gap-filling ones." },
          ],
          solution: ["**Confabulation** is the honest, unconscious filling-in of missing memory fragments using plausible schema-consistent details."],
          difficulty: "core",
          guideRef: "reconstructive-schemas",
          hints: [
            "Distinguish omitting details (levelling) from unconsciously making up plausible gap-fillers.",
            "Starts with 'confab-'.",
          ],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q10",
          question:
            "In a study replicating **Bartlett (1932)**, six British students recalled *The War of the Ghosts* one week later with word counts of `195, 160, 210, 175, 180, 160`. Calculate the **mean** recalled word count.",
          answer: { type: "number", value: 180 },
          traps: [
            { spec: { type: "number", value: 160 }, feedback: "160 is the mode (most frequent score), not the mean." },
            { spec: { type: "number", value: 177.5 }, feedback: "177.5 is the median; for the mean, sum all 6 values (`1,080`) and divide by `6`." },
          ],
          solution: [
            "Sum of scores = `195 + 160 + 210 + 175 + 180 + 160 = 1,080`.",
            "Mean = `1,080 ÷ 6 = 180` words.",
          ],
          difficulty: "core",
          guideRef: "reconstructive-schemas",
          hints: ["Add all six word counts carefully (`195 + 160 + 210 + 175 + 180 + 160`).", "Divide the total (`1,080`) by `6`."],
        },
        {
          kind: "written",
          id: "memory-and-forgetting-p1-q11",
          question:
            "Describe **Bartlett's (1932)** *The War of the Ghosts* study and explain **one** methodological limitation of how it was conducted. [4 marks]",
          marks: 4,
          modelAnswer:
            "Bartlett asked 20 British participants to read the unfamiliar Native American folk tale 'The War of the Ghosts' twice and recall it through repeated and serial reproduction after delays ranging from 15 minutes to years. He found recalls became much shorter (levelling) and culturally assimilated — for example, 'canoes' became 'boats' and supernatural ghost elements were omitted. However, a major limitation was the lack of strict experimental controls: Bartlett used unstandardised instructions and varying retention intervals across participants, lowering internal validity and replicability.",
          markScheme: [
            {
              point: "Describes procedure (British sample read Native American folk tale twice; serial/repeated reproduction)",
              keywords: ["native american", "folk tale", "twice", "serial reproduction", "repeated reproduction", "british"],
            },
            {
              point: "States key schema finding with example (levelling/shorter or assimilation e.g. canoes to boats)",
              keywords: ["canoe", "boat", "levelling", "shorter", "assimilation", "ghost"],
            },
            {
              point: "Identifies lack of experimental control / unstandardised instructions or intervals",
              keywords: ["unstandardised", "unstandardized", "lack of control", "varying", "different intervals", "subjective"],
            },
            {
              point: "Explains impact on internal validity, reliability, or investigator bias",
              keywords: ["internal validity", "reliab", "replicab", "bias"],
            },
          ],
          commonError: "Describing Bartlett's theory in abstract terms without citing specific procedural details and findings from *War of the Ghosts*.",
          difficulty: "core",
          guideRef: "reconstructive-schemas",
          hints: [
            "State who took part, what story they read, and give one concrete change (e.g. *canoes → boats*).",
            "Critique Bartlett's lack of standardised timing/instructions and explain how that affects reliability or internal validity.",
          ],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q12",
          question:
            "Which explanation of forgetting applies **exclusively** to **Short-Term Memory** because incoming items push older items out once its `7 ± 2` slot capacity is full?",
          answer: { type: "text", accept: ["displacement", "stm displacement"] },
          traps: [
            { spec: { type: "text", accept: ["decay", "trace decay"] }, feedback: "Trace decay is fading over time; pushing items out of full 7 ± 2 slots is displacement." },
            { spec: { type: "text", accept: ["interference"] }, feedback: "Interference primarily explains LTM competition between similar memories, whereas slot overflow in STM is displacement." },
          ],
          solution: ["**Displacement** occurs when STM's limited 7 ± 2 capacity is full and new incoming items push older unrehearsed items out."],
          difficulty: "warmup",
          guideRef: "explanations-forgetting",
          hints: ["Think of 8 people trying to sit on a 7-seat bench — the oldest item gets pushed off."],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q13",
          question:
            "Every January for the first week of the new year, Mr Lim keeps accidentally writing **last year's date** (`2026` instead of `2027`) on cheques and forms. Name the exact type of **interference** shown.",
          answer: { type: "text", accept: ["proactive interference", "proactive"] },
          traps: [
            { spec: { type: "text", accept: ["retroactive interference", "retroactive"] }, feedback: "Retroactive is new disrupting old; here the OLD habit (2026) disrupts the NEW year (2027), which is proactive interference." },
          ],
          solution: ["**Proactive interference**: the well-learned **old** year (`2026`) intrudes forward to disrupt recall of the **new** year (`2027`)."],
          difficulty: "core",
          guideRef: "explanations-forgetting",
          hints: ["Is the OLD date (`2026`) blocking the NEW date (`2027`), or the reverse?", "Use P.O.R.N.: Proactive = Old blocks new."],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p1-q14",
          question:
            "Which specific limbic structure sitting just in front of the hippocampus attaches **emotional significance** and fear conditioning to memories?",
          answer: { type: "text", accept: ["amygdala", "the amygdala"] },
          traps: [
            { spec: { type: "text", accept: ["cerebellum"] }, feedback: "The cerebellum stores procedural motor skills, whereas emotional significance is tagged by the amygdala." },
            { spec: { type: "text", accept: ["prefrontal cortex"] }, feedback: "The prefrontal cortex manages working memory attention; emotional memory tagging is performed by the amygdala." },
          ],
          solution: ["The **amygdala** encodes emotional arousal and boosts hippocampal consolidation of emotionally vivid events."],
          difficulty: "warmup",
          guideRef: "brain-and-amnesia",
          hints: ["Almond-shaped brain region famous for fear and emotional memory."],
        },
        {
          kind: "written",
          id: "memory-and-forgetting-p1-q15",
          question:
            "Evaluate **Craik & Tulving's (1975)** Levels of Processing study by explaining **one methodological strength** and **one theoretical or methodological limitation**. [4 marks]",
          marks: 4,
          modelAnswer:
            "One methodological strength is high internal validity: words were flashed for exactly 200 ms on a tachistoscope using an incidental learning design (an unexpected recognition test), preventing participants from deliberately rehearsing shallow words. However, a key limitation is theoretical circularity and low ecological validity — 'depth' cannot easily be measured independently of recall success, and Morris et al. (1977) demonstrated via rhyme-recognition tests that memory depends on transfer-appropriate match between encoding and retrieval rather than semantic depth alone.",
          markScheme: [
            {
              point: "Identifies standardized lab controls (200 ms tachistoscope / counterbalancing / incidental unexpected test)",
              keywords: ["200", "tachistoscope", "incidental", "unexpected", "standardis", "standardiz", "control"],
            },
            {
              point: "Explains how this control boosts internal validity (prevents deliberate rehearsal confounding depth)",
              keywords: ["internal validity", "deliberate rehearsal", "confound", "extraneous"],
            },
            {
              point: "Identifies circularity of 'depth', transfer-appropriate critique, or artificial isolated word task",
              keywords: ["circular", "morris", "transfer-appropriate", "rhyme test", "mundane realism", "ecological validity"],
            },
            {
              point: "Explains why this limits the theory (depth cannot be measured independently / test match matters)",
              keywords: ["independently", "encoding and retrieval", "cannot measure", "cannot easily be measured"],
            },
          ],
          commonError: "Describing the 18%, 57%, 81% results again instead of giving genuine methodological and theoretical evaluation.",
          difficulty: "challenge",
          guideRef: "working-memory-levels",
          hints: [
            "Why was flashing words for 200 ms with an *unexpected* test a major strength for internal validity?",
            "Why do critics call 'depth' circular, or what did Morris et al. (1977) prove using a rhyme test?",
            "Link both points explicitly to validity or explanatory power.",
          ],
        },
      ],
    },
    {
      id: "memory-and-forgetting-p2",
      title: "Practice Paper 2: Forgetting, Brain & Amnesia",
      questions: [
        {
          kind: "short",
          id: "memory-and-forgetting-p2-q01",
          question:
            "In **Atkinson & Shiffrin's Multi-Store Model**, what is the **dominant form of coding** in **Long-Term Memory**?",
          answer: { type: "text", accept: ["semantic", "semantic coding", "meaning"] },
          traps: [
            { spec: { type: "text", accept: ["acoustic", "acoustic coding"] }, feedback: "Acoustic coding dominates Short-Term Memory (Conrad, 1964); Long-Term Memory relies predominantly on semantic coding (Baddeley, 1966)." },
          ],
          solution: ["Baddeley (1966) demonstrated that **LTM** encodes information predominantly **semantically** (by meaning)."],
          difficulty: "warmup",
          guideRef: "processes-and-msm",
          hints: ["Baddeley (1966) found LTM confuses words with similar *meanings* (`big / huge`) rather than similar sounds."],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p2-q02",
          question:
            "A student chunks a string of `24` binary digits (`0`s and `1`s) into groups of `3` digits each (for example `101 = 5`). How many **chunks** must she hold in Short-Term Memory?",
          answer: { type: "number", value: 8 },
          traps: [
            { spec: { type: "number", value: 3 }, feedback: "3 is the size of each group; divide 24 total digits by 3 per chunk." },
          ],
          solution: ["Number of chunks = `24 ÷ 3 = 8` chunks (which sits right inside Miller's `7 ± 2`, i.e. 5–9 chunk span!)."],
          difficulty: "warmup",
          guideRef: "processes-and-msm",
          hints: ["Divide total digits (`24`) by digits per chunk (`3`)."],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p2-q03",
          question:
            "Inside the **phonological loop**, the phonological store acts as the *'inner ear'*. What 3-word name did Baddeley give to the *'inner voice'* sub-system responsible for sub-vocal rehearsal?",
          answer: {
            type: "text",
            accept: ["articulatory control process", "articulatory loop", "articulatory control system", "articulatory process"],
          },
          traps: [
            { spec: { type: "text", accept: ["inner scribe"] }, feedback: "The inner scribe belongs to the visuo-spatial sketchpad, not the phonological loop." },
          ],
          solution: ["The **articulatory control process** (*inner voice*) refreshes traces in the phonological store via sub-vocal speech."],
          difficulty: "core",
          guideRef: "working-memory-levels",
          hints: ["Starts with 'articulatory' (meaning speech production).", "Three words: 'articulatory ___ ___'."],
        },
        {
          kind: "written",
          id: "memory-and-forgetting-p2-q04",
          question:
            "Dr Nair wants to test whether **context-dependent cues** affect Year 11 Biology vocabulary recall. Design a brief controlled experiment by stating:\n1. Your operationalised **Independent Variable (IV)** and **Dependent Variable (DV)**.\n2. How two conditions are compared to test encoding specificity. [4 marks]",
          marks: 4,
          modelAnswer:
            "The operationalised IV is whether students recall the 25 Biology terms in a matched physical room (learning in the Biology lab and recalling in the same Biology lab) versus a mismatched room (learning in the Biology lab and recalling in the outdoor canteen). The operationalised DV is the number of Biology terms correctly written down out of 25 in a 5-minute free-recall test. Comparing the matched-room group against the mismatched-room group tests whether external environmental cues present at encoding improve retrieval accessibility.",
          markScheme: [
            {
              point: "Operationalises IV clearly as matched vs mismatched physical learning/testing rooms",
              keywords: ["matched", "same room", "different room", "mismatched", "lab", "hall", "classroom"],
            },
            {
              point: "Operationalises DV quantitatively (exact count/score of words recalled out of total)",
              keywords: ["number of", "out of", "score", "count", "how many"],
            },
            {
              point: "Describes clear comparison between same-environment and changed-environment conditions",
              keywords: ["compare", "group", "condition", "versus"],
            },
            {
              point: "Links matched external environmental cues to retrieval accessibility",
              keywords: ["cue", "external", "environment", "encoding", "retriev"],
            },
          ],
          commonError: "Writing 'IV = context, DV = memory' with zero operationalisation — CIE 0266 requires specific rooms and an exact numerical recall measure!",
          difficulty: "core",
          guideRef: "explanations-forgetting",
          hints: [
            "Name two concrete locations (like Godden & Baddeley's land vs water, e.g. Lab vs Sports Hall) for your IV.",
            "Give an exact numerical score (e.g. number of terms recalled out of 25) for your DV.",
          ],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p2-q05",
          question:
            "In **Godden & Baddeley's (1975)** diver study, mean recall out of `36` words was roughly `13.5` words in the **Dry–Dry** condition and `8.6` words in the **Dry–Wet** condition. Calculate how many **more words** on average were recalled in **Dry–Dry** than **Dry–Wet** (to 1 decimal place).",
          answer: { type: "number", value: 4.9 },
          traps: [
            { spec: { type: "number", value: 5.1 }, feedback: "Check your subtraction carefully: `13.5 − 8.6 = 4.9` (not `5.1`)." },
          ],
          solution: ["Difference = `13.5 − 8.6 = 4.9` words."],
          difficulty: "core",
          guideRef: "explanations-forgetting",
          hints: ["Subtract `8.6` from `13.5`.", "`13.5 − 8.6`."],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p2-q06",
          question:
            "In **Freud's psychodynamic explanation of motivated forgetting**, what key term names the **unconscious** ego defence mechanism that blocks traumatic memories from conscious awareness?",
          answer: { type: "text", accept: ["repression"] },
          traps: [
            { spec: { type: "text", accept: ["suppression"] }, feedback: "Suppression is a CONSCIOUS decision to avoid thinking about something; Freud's UNCONSCIOUS mechanism is repression." },
            { spec: { type: "text", accept: ["denial"] }, feedback: "Denial refuses to accept an external reality; pushing traumatic memories into the unconscious mind is repression." },
          ],
          solution: ["**Repression** unconsciously pushes anxiety-provoking or traumatic memories into the unconscious mind."],
          difficulty: "warmup",
          guideRef: "explanations-forgetting",
          hints: ["Be careful not to write *suppression* (conscious) — we want the *unconscious* defence starting with 'rep-'."],
        },
        {
          kind: "written",
          id: "memory-and-forgetting-p2-q07",
          question:
            "Mrs Gomez teaches Piano Grade 3 to Leo at 4:00 pm and Piano Grade 3 to Sam at 4:30 pm. At 5:00 pm, Mrs Gomez tries to write feedback notes for **Leo's** 4:00 pm lesson, but she keeps mixing in mistakes that **Sam** made at 4:30 pm! Identify and explain the specific type of interference shown, including **why** the interference is so strong here. [3 marks]",
          marks: 3,
          modelAnswer:
            "Mrs Gomez is experiencing retroactive interference because her newer memory from Sam's 4:30 pm lesson is working backwards to disrupt recall of her older memory from Leo's 4:00 pm lesson. Interference is especially strong here because both lessons involved highly similar material (Piano Grade 3 pieces taught in the same room half an hour apart), creating competing associations in Long-Term Memory.",
          markScheme: [
            {
              point: "Correctly names retroactive interference",
              keywords: ["retroactive"],
            },
            {
              point: "Applies direction to scenario: newer 4:30 Sam lesson disrupts older 4:00 Leo memory",
              keywords: ["sam", "newer", "new", "disrupt", "older", "leo"],
            },
            {
              point: "Explains similarity factor: both lessons involved very similar Piano Grade 3 material",
              keywords: ["similar", "same grade", "competing"],
            },
          ],
          commonError: "Calling it proactive interference because Leo came first — always check WHICH memory failed (her recall of Leo's older lesson failed!).",
          difficulty: "core",
          guideRef: "explanations-forgetting",
          hints: [
            "Whose feedback notes is Mrs Gomez failing to recall cleanly at 5:00 pm — Leo's (older) or Sam's (newer)?",
            "Why did teaching the *same* Piano Grade 3 syllabus to both students make interference worse?",
          ],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p2-q08",
          question:
            "In **Milner et al. (1968)**, patient **H.M.**'s IQ actually rose from `104` before his epilepsy surgery to `118` afterwards (because his frequent seizures eased). By how many **IQ points** did H.M.'s score increase?",
          answer: { type: "number", value: 14 },
          traps: [
            { spec: { type: "number", value: -14 }, feedback: "His IQ rose from 104 to 118, so the change is positive (`+14`)." },
          ],
          solution: ["Increase = `118 − 104 = 14` IQ points (confirming hippocampal removal did not impair general intelligence!)."],
          difficulty: "warmup",
          guideRef: "brain-and-amnesia",
          hints: ["Subtract his pre-surgery IQ (`104`) from his post-surgery IQ (`118`)."],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p2-q09",
          question:
            "Across 3 days of **Corkin's (1968) mirror-drawing task**, suppose an amnesia patient made `32` boundary errors on Day 1 and `8` boundary errors on Day 3. Calculate the **percentage reduction** in boundary errors from Day 1 to Day 3.",
          answer: { type: "number", value: 75 },
          traps: [
            { spec: { type: "number", value: 24 }, feedback: "24 is the raw reduction in errors (`32 − 8`); divide 24 by the original 32 errors and multiply by 100." },
            { spec: { type: "number", value: 25 }, feedback: "25% (`8 ÷ 32`) is the fraction of errors remaining on Day 3; the percentage reduction is `(24 ÷ 32) × 100 = 75%`." },
          ],
          solution: [
            "Error reduction = `32 − 8 = 24` errors.",
            "Percentage reduction = `(24 ÷ 32) × 100 = 0.75 × 100 = 75%`.",
          ],
          difficulty: "core",
          guideRef: "brain-and-amnesia",
          hints: [
            "Find how many fewer errors were made (`32 − 8 = 24`).",
            "Divide the reduction (`24`) by the starting Day 1 value (`32`) and multiply by `100`.",
          ],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p2-q10",
          question:
            "Which cortical region at the front of the brain supports **Working Memory's central executive**, attentional control, and strategic retrieval?",
          answer: { type: "text", accept: ["prefrontal cortex", "the prefrontal cortex", "frontal lobe", "pfc"] },
          traps: [
            { spec: { type: "text", accept: ["hippocampus"] }, feedback: "The hippocampus consolidates new declarative LTMs; executive Working Memory resides in the prefrontal cortex." },
          ],
          solution: ["The **prefrontal cortex (PFC)** underpins executive Working Memory control and strategic retrieval."],
          difficulty: "core",
          guideRef: "brain-and-amnesia",
          hints: ["Located right behind your forehead ('pre-___ cortex').", "Abbreviated PFC."],
        },
        {
          kind: "written",
          id: "memory-and-forgetting-p2-q11",
          question:
            "Compare **anterograde amnesia** and **retrograde amnesia**, and state which **both** patterns appeared in patient **H.M.** (`Milner et al., 1968`). [4 marks]",
          marks: 4,
          modelAnswer:
            "Anterograde amnesia is the inability to consolidate new long-term declarative memories after brain damage occurs, whereas retrograde amnesia is the loss of pre-existing memories formed before the brain injury. Patient H.M. suffered profound, permanent anterograde amnesia for all new episodic and semantic events after his 1953 surgery, alongside mild temporally graded retrograde amnesia for events in the 1–11 years just before surgery while keeping his distant childhood memories.",
          markScheme: [
            {
              point: "Defines anterograde amnesia accurately (inability to form/consolidate new LTM after damage)",
              keywords: ["new", "after", "consolidat"],
            },
            {
              point: "Defines retrograde amnesia accurately (loss of memories from before damage)",
              keywords: ["before", "prior", "past", "pre-existing"],
            },
            {
              point: "Applies anterograde amnesia to H.M. (profound/permanent loss of new episodic/semantic LTM)",
              keywords: ["profound", "severe", "permanent", "episodic", "declarative"],
            },
            {
              point: "Applies graded retrograde amnesia to H.M. (lost recent pre-surgery years, childhood intact)",
              keywords: ["childhood", "graded", "mild", "years before"],
            },
          ],
          commonError: "Saying H.M. had zero retrograde amnesia at all, or reversing 'before' and 'after' the injury.",
          difficulty: "core",
          guideRef: "brain-and-amnesia",
          hints: [
            "Define each type clearly using 'before injury' vs 'after injury'.",
            "Describe H.M.'s severe post-surgery deficit AND why his childhood survived while the few years right before surgery faded.",
          ],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p2-q12",
          question:
            "In **Bartlett's** theory, when a witness exaggerates and elaborates one familiar, dramatic detail (such as a loud shout) so it stands out much more prominently in recall than in reality, what reconstructive process is shown?",
          answer: { type: "text", accept: ["sharpening"] },
          traps: [
            { spec: { type: "text", accept: ["levelling", "leveling"] }, feedback: "Levelling omits details; emphasising/exaggerating salient details is sharpening." },
            { spec: { type: "text", accept: ["assimilation"] }, feedback: "Assimilation alters unfamiliar cultural items into familiar ones; exaggerating prominent details is sharpening." },
          ],
          solution: ["**Sharpening** selectively emphasises and exaggerates salient, schema-relevant details during reconstruction."],
          difficulty: "core",
          guideRef: "reconstructive-schemas",
          hints: [
            "Opposite of *levelling* (flattening).",
            "Think of making a point on a pencil stand out more vividly.",
          ],
        },
        {
          kind: "short",
          id: "memory-and-forgetting-p2-q13",
          question:
            "What ethical guideline was protected during Henry Molaison's lifetime (`1953–2008`) by referring to him strictly by his initials **'H.M.'** in all published journal articles?",
          answer: { type: "text", accept: ["confidentiality", "privacy", "anonymity"] },
          solution: ["Using initials **H.M.** protected the patient's **confidentiality** (anonymity and privacy) in line with psychological ethics."],
          commonError: "Writing informed consent or right to withdraw instead of confidentiality/anonymity (using initials H.M. specifically protects identity).",
          difficulty: "warmup",
          guideRef: "brain-and-amnesia",
          hints: ["Keeping a participant's real identity secret in published reports protects ___."],
        },
        {
          kind: "written",
          id: "memory-and-forgetting-p2-q14",
          question:
            "Explain how **patient H.M.** (`Milner et al., 1968`) provides **both support for** and **a challenge to** **Atkinson & Shiffrin's (1968) Multi-Store Model**. [4 marks]",
          marks: 4,
          modelAnswer:
            "H.M. supports the Multi-Store Model's core claim that Short-Term Memory and Long-Term Memory are separate stores: he retained normal acoustic STM digit span for 20 seconds when undistracted, yet could not transfer new declarative facts into LTM. However, H.M. challenges the Multi-Store Model's assumption that LTM is a single unitary store, because his procedural motor LTM (mirror-drawing) stayed completely intact while his episodic and semantic LTM consolidation was destroyed.",
          markScheme: [
            {
              point: "Explains support: separates STM from LTM as distinct stores",
              keywords: ["separate", "distinct", "two stores"],
            },
            {
              point: "Gives H.M. evidence for STM vs LTM (intact digit span/STM vs impaired LTM transfer)",
              keywords: ["digit", "rehears", "short-term", "stm", "transfer"],
            },
            {
              point: "Explains challenge: MSM wrongly treats LTM as one unitary store",
              keywords: ["unitary", "single store", "one box", "subdivided", "types of ltm"],
            },
            {
              point: "Gives H.M. evidence splitting LTM (intact procedural mirror-drawing vs lost declarative/episodic)",
              keywords: ["procedural", "mirror", "motor", "declarative", "episodic"],
            },
          ],
          commonError: "Only explaining how H.M. supports MSM and forgetting that intact procedural mirror-drawing refutes unitary LTM.",
          difficulty: "challenge",
          guideRef: "brain-and-amnesia",
          hints: [
            "Support: What worked for ~20 seconds in H.M. while long-term factual consolidation failed?",
            "Challenge: How many LTM boxes does MSM draw, and why does H.M.'s mirror-drawing prove there must be more than one kind of LTM?",
            "State both sides with explicit evidence from H.M.",
          ],
        },
        {
          kind: "written",
          id: "memory-and-forgetting-p2-q15",
          question:
            "Two detectives interview witnesses to a hit-and-run crash. Detective Lin asks: *'How fast was the reckless driver speeding when he smashed into the barrier?'* Detective Tan asks: *'Please picture the street lighting and weather first, then tell me everything you remember in your own words.'* Using **reconstructive memory** and **cue-dependent retrieval**, explain why Detective Tan will gather more accurate testimony than Detective Lin. [4 marks]",
          marks: 4,
          modelAnswer:
            "Detective Lin's leading verb 'smashed' and phrase 'reckless driver' activate a severe-crash schema in witnesses, triggering Bartlett-style reconstructive distortion and confabulation (inflating speed estimates and inventing non-existent details). Detective Tan avoids leading schema cues and instead uses context reinstatement (picturing street lighting and weather), which restores context-dependent encoding cues in line with Tulving's encoding specificity principle so genuine stored fragments become accessible.",
          markScheme: [
            {
              point: "Identifies Detective Lin's leading wording ('smashed' / 'reckless') activates a crash schema",
              keywords: ["leading", "schema", "reckless"],
            },
            {
              point: "Explains schema distortion / confabulation reduces accuracy of Lin's witness accounts",
              keywords: ["confabulat", "distort", "reconstruct", "inflat", "false"],
            },
            {
              point: "Identifies Detective Tan reinstates external context-dependent cues (lighting/weather)",
              keywords: ["context", "cue", "reinstat"],
            },
            {
              point: "Explains matching encoding cues unlocks accessible LTM traces without contamination",
              keywords: ["encoding", "accessib", "retriev", "ltm", "accurate"],
            },
          ],
          commonError: "Describing Loftus & Palmer without linking Detective Tan's weather/lighting prompt to context-dependent retrieval cues.",
          difficulty: "challenge",
          guideRef: "reconstructive-schemas",
          hints: [
            "What does Detective Lin's word *'smashed'* do to a witness's crash schema (Bartlett / Loftus)?",
            "Why does Detective Tan ask about street lighting and weather before asking what happened (Tulving / Godden & Baddeley)?",
            "Contrast contaminated schema reconstruction against clean cue-dependent retrieval.",
          ],
        },
      ],
    },
  ],
  challenge: [
    {
      kind: "written",
      id: "memory-and-forgetting-ch-q01",
      question:
        "**Glanzer & Cunitz (1966)** modified **Murdock's (1962)** experiment in two ways: Condition 1 slowed presentation down from 1 second per word to **4 seconds per word** (immediate recall); Condition 2 kept 1 second per word but inserted a **30-second counting distractor** before recall. Predict and explain the exact effect of **each** manipulation on the **primacy** and **recency** regions of the serial position curve. [4 marks]",
      marks: 4,
      modelAnswer:
        "In Condition 1, slowing presentation to 4 seconds per word raises the primacy (and middle) curve because participants have extra time between words for maintenance rehearsal, transferring more early items into Long-Term Memory, while recency stays similar because STM capacity remains 7 ± 2. In Condition 2, the 30-second counting distractor abolishes the recency effect by preventing rehearsal and displacing/decaying final words from Short-Term Memory, whereas the primacy effect stays intact because early words are already safely stored in LTM.",
      markScheme: [
        {
          point: "Predicts Condition 1 (slower 4s rate) increases primacy recall",
          keywords: ["increase", "higher", "raises", "boosts"],
        },
        {
          point: "Explains extra time per word allows more rehearsal and transfer into LTM",
          keywords: ["rehears", "long-term memory", "ltm", "transfer"],
        },
        {
          point: "Predicts Condition 2 (30s counting) eliminates/reduces recency while sparing primacy",
          keywords: ["recency", "abolish", "eliminat", "disappear", "intact", "spares"],
        },
        {
          point: "Explains counting clears/displaces STM (18–30s limit) without erasing LTM",
          keywords: ["short-term memory", "stm", "displac", "decay", "18", "30"],
        },
      ],
      difficulty: "challenge",
      guideRef: "processes-and-msm",
      hints: [
        "Condition 1 gives 4× more rehearsal time between words — which store benefits from extra rehearsal?",
        "Condition 2 fills STM with numbers for 30 seconds — which part of the curve lives in STM right before recall?",
        "State what happens to BOTH primacy and recency in each condition.",
      ],
      strategy: "Manipulate one store at a time to test double dissociation",
    },
    {
      kind: "short",
      id: "memory-and-forgetting-ch-q02",
      question:
        "In an experiment on **Craik & Tulving's (1975)** 'Yes vs No' effect, `60` words were divided equally across **Structural**, **Phonemic**, and **Semantic** levels (`20` words each), and within each level half (`10`) had **'Yes'** answers and half (`10`) had **'No'** answers. A participant recognised `20%` of Structural-Yes, `10%` of Structural-No, `70%` of Phonemic-Yes, `40%` of Phonemic-No, `90%` of Semantic-Yes, and `70%` of Semantic-No words. How many **total words out of 60** did this participant recognise?",
      answer: { type: "number", value: 30 },
      traps: [
        { spec: { type: "number", value: 50 }, feedback: "50% (`30 ÷ 60`) is the overall percentage recognised — the question asks for the total number of words out of 60." },
        { spec: { type: "number", value: 300 }, feedback: "You summed the six percentages (`300`); since each sub-condition has 10 words, `10%` of 10 words = `1` word!" },
      ],
      solution: [
        "Each of the 6 sub-conditions contains `10` words.",
        "Words recognised = `2 + 1 + 7 + 4 + 9 + 7 = 30` words out of 60 (overall 50%).",
      ],
      difficulty: "challenge",
      guideRef: "working-memory-levels",
      hints: [
        "Notice how convenient the numbers are: each of the 6 sub-groups (`Yes` / `No` × 3 levels) has exactly `10` words!",
        "Find each count out of 10 (`20%` of 10 = `2`, `10%` of 10 = `1`, etc.).",
        "Add all six counts together.",
      ],
      strategy: "Break weighted percentages into sub-group counts",
    },
    {
      kind: "written",
      id: "memory-and-forgetting-ch-q03",
      question:
        "'Structural models of memory (**Multi-Store** and **Working Memory**) are better at explaining everyday memory than **Craik & Tulving's Levels of Processing**.' Evaluate this claim using psychological evidence. [6 marks]",
      marks: 6,
      modelAnswer:
        "Structural models have strong neuropsychological and experimental support: Murdock (1962) and patient H.M. confirm separate STM and LTM stores, while Baddeley & Hitch's Working Memory Model uses dual-task studies and patient K.F. to explain how we actively juggle verbal and visual tasks in everyday reading or driving. However, Multi-Store overemphasises passive rote repetition, which fails to explain why seeing everyday objects hundreds of times rarely guarantees recall. Levels of Processing (Craik & Tulving, 1975) better explains everyday study retention by showing deep semantic elaboration (~81% recognition) beats shallow structural repetition (~18%). Yet Levels of Processing suffers from circularity in defining 'depth' and ignores retrieval matching (Morris et al., 1977). Overall, Working Memory best captures live short-term processing, while Levels of Processing best explains what actually consolidates durably into LTM.",
      markScheme: [
        {
          point: "Supports structural models with empirical/clinical evidence (Murdock 1962, H.M., K.F., or dual-task studies)",
          keywords: ["murdock", "dual-task", "k.f", "h.m", "slave"],
        },
        {
          point: "Explains how Working Memory captures active everyday multitasking (verbal vs visual)",
          keywords: ["phonological", "visuo-spatial", "multitask", "active"],
        },
        {
          point: "Critiques MSM for passive unitary stores / over-reliance on rote maintenance rehearsal",
          keywords: ["rote", "unitary", "passive", "maintenance rehearsal"],
        },
        {
          point: "Supports Levels of Processing with Craik & Tulving (1975) semantic vs structural findings",
          keywords: ["craik", "semantic", "structural", "81", "meaning"],
        },
        {
          point: "Critiques Levels of Processing (circularity of depth or Morris transfer-appropriate processing)",
          keywords: ["circular", "morris", "transfer-appropriate"],
        },
        {
          point: "Reaches a balanced synoptic judgement integrating structure and encoding depth",
          keywords: ["overall", "both", "complement", "whereas", "conclusion"],
        },
      ],
      difficulty: "challenge",
      guideRef: "working-memory-levels",
      hints: [
        "Argue FOR structural models first: what can WMM (dual-tasking, K.F.) and MSM (Murdock, H.M.) explain?",
        "Argue FOR Levels of Processing next: why does semantic meaning (Craik & Tulving) beat MSM's rote repetition?",
        "Weigh the flaws on both sides (MSM passive/unitary vs LoP circularity) and conclude how they complement each other.",
      ],
      strategy: "Build a balanced 2-sided CIE 0266 evaluation essay",
    },
    {
      kind: "written",
      id: "memory-and-forgetting-ch-q04",
      question:
        "Clive Wearing, a British musician whose hippocampus and temporal lobes were damaged by herpes viral encephalitis, remembers almost nothing beyond a 20-second window and repeatedly writes *'Now I am really awake'* in his diary — yet he can still sight-read complex scores, play the organ, and conduct a choir brilliantly, and still bursts into joy upon seeing his wife Deborah. Explain Clive Wearing's preserved and impaired abilities using **at least three** brain structures or memory systems. [4 marks]",
      marks: 4,
      modelAnswer:
        "Damage to Clive's hippocampus caused severe anterograde (and partial retrograde) declarative amnesia, preventing him from consolidating new episodic diary entries beyond his intact 20-second Short-Term Memory span. His preserved ability to play the organ and conduct a choir relies on procedural motor memory stored in his undamaged cerebellum and basal ganglia. Finally, his immediate emotional warmth towards his wife Deborah reflects preserved emotional conditioning mediated by limbic/amygdala pathways independent of conscious episodic recall.",
      markScheme: [
        {
          point: "Links hippocampal damage to severe anterograde declarative/episodic amnesia",
          keywords: ["hippocamp", "anterograde", "episodic", "declarative"],
        },
        {
          point: "Explains the 20-second window using intact Short-Term Memory (STM)",
          keywords: ["short-term memory", "stm", "18", "30"],
        },
        {
          point: "Links preserved piano/conducting skill to procedural memory in the cerebellum / basal ganglia",
          keywords: ["procedural", "cerebellum", "basal ganglia", "motor"],
        },
        {
          point: "Links preserved emotional recognition of his wife to amygdala / emotional memory",
          keywords: ["amygdala", "emotion"],
        },
      ],
      difficulty: "challenge",
      guideRef: "brain-and-amnesia",
      hints: [
        "Why does his memory reset every ~20 seconds (STM vs hippocampal consolidation)?",
        "Which brain region lets him play the organ (procedural LTM)?",
        "Which limbic structure preserves emotional warmth towards his wife even when episodic facts fail?",
      ],
      strategy: "Decompose complex clinical cases by memory system + brain structure",
    },
    {
      kind: "short",
      id: "memory-and-forgetting-ch-q05",
      question:
        "**Underwood (1957)** analysed recall 24 hours after learning a word list as a function of how many **previous** word lists participants had learned earlier in the week: with `0` prior lists, 24-hour recall was `80%`; with `20` prior lists, 24-hour recall plunged to `20%`! Assuming a steady linear drop across those `20` prior lists, how many **percentage points** of recall were lost **per prior list** due to proactive interference?",
      answer: { type: "number", value: 3 },
      traps: [
        { spec: { type: "number", value: 60 }, feedback: "60 percentage points (`80 − 20`) is the total drop across all 20 lists — divide by 20 prior lists." },
        { spec: { type: "number", value: 4 }, feedback: "`80 ÷ 20 = 4` ignores that recall dropped to 20%, not 0%! Subtract `80 − 20 = 60` first, then divide by `20`." },
      ],
      solution: [
        "Total drop in recall = `80% − 20% = 60` percentage points.",
        "Drop per prior list = `60 ÷ 20 = 3` percentage points per list.",
      ],
      difficulty: "challenge",
      guideRef: "explanations-forgetting",
      hints: [
        "Find the total percentage-point drop from `0` prior lists (`80%`) to `20` prior lists (`20%`).",
        "Subtract `80 − 20 = 60`.",
        "Divide `60` by `20` prior lists.",
      ],
      strategy: "Calculate rate of change across experimental conditions",
    },
    {
      kind: "written",
      id: "memory-and-forgetting-ch-q06",
      question:
        "**Baddeley & Hitch (1977)** asked amateur rugby players at the end of a season to recall the names of teams they had played earlier. Because injuries caused different players to miss different matches, two players could have played Match 3 the **exact same number of weeks ago**, yet Player 1 played **zero** games since Match 3 (injured) while Player 2 played **six** more rugby games since Match 3. Player 1 recalled Match 3 far better than Player 2! Explain what this natural field study proves about **trace decay** versus **retroactive interference**, and give **one** methodological strength of studying real rugby matches. [4 marks]",
      marks: 4,
      modelAnswer:
        "Because identical calendar time had passed since Match 3 for both players, pure trace decay predicts both should forget equally — refuting time-based decay as the main cause of LTM forgetting. Instead, Player 2 forgot Match 3 because playing six subsequent similar rugby matches created retroactive interference (new matches disrupting older match memories). Studying real rugby games outside the lab gives high ecological validity and mundane realism, showing interference applies to genuine autobiographical memories rather than just artificial word lists.",
      markScheme: [
        {
          point: "Refutes pure trace decay because calendar time elapsed since Match 3 was identical for both players",
          keywords: ["decay", "equal time", "identical", "calendar", "refut"],
        },
        {
          point: "Supports retroactive interference: six newer rugby games disrupted recall of older Match 3",
          keywords: ["retroactive", "subsequent", "newer", "intervening"],
        },
        {
          point: "Identifies ecological validity / mundane realism strength of real-world autobiographical events",
          keywords: ["ecological validity", "mundane realism", "autobiographical", "real-life", "naturalistic"],
        },
        {
          point: "Contrasts real matches against artificial laboratory word lists",
          keywords: ["word list", "artificial", "lab"],
        },
      ],
      difficulty: "challenge",
      guideRef: "explanations-forgetting",
      hints: [
        "Compare time elapsed (same for Player 1 and Player 2) vs intervening matches (0 vs 6).",
        "Is newer matches disrupting an older match proactive or retroactive interference?",
        "Why is testing real rugby seasons stronger on ecological validity than nonsense-syllable lab tests?",
      ],
      strategy: "Use natural experiments to disentangle confounded variables",
    },
    {
      kind: "written",
      id: "memory-and-forgetting-ch-q07",
      question:
        "Explain why **Bartlett's Theory of Reconstructive Memory** is considered **both adaptive (useful)** in everyday cognition **and dangerous** in the criminal justice system. [4 marks]",
      marks: 4,
      modelAnswer:
        "Reconstructive schemas are cognitively adaptive in everyday life because they compress experience into efficient gist frameworks, allowing us to interpret new situations rapidly and fill predictable gaps without storing every trivial sensory detail. However, in the criminal justice system this same schema-filling becomes dangerous: eyewitnesses unconsciously assimilate ambiguous events to crime stereotypes and confabulate plausible details (or incorporate post-event leading questions), producing confident yet false courtroom testimony that can cause wrongful convictions.",
      markScheme: [
        {
          point: "Explains cognitive adaptiveness: efficient storage / rapid comprehension and prediction of new situations",
          keywords: ["efficient", "rapid", "predict", "compress", "gist", "cognitive"],
        },
        {
          point: "Links schemas to filling predictable gaps/expectations without overloading storage",
          keywords: ["schema", "expectation", "overload", "predictable gaps", "trivial"],
        },
        {
          point: "Explains legal danger: unconscious assimilation to stereotypes or confabulation / leading-question distortion",
          keywords: ["eyewitness", "confabulat", "assimilat", "stereotype", "leading"],
        },
        {
          point: "Links confident false recall to wrongful conviction / unreliable courtroom evidence",
          keywords: ["confident", "wrongful", "conviction", "court", "inaccurate", "false"],
        },
      ],
      difficulty: "challenge",
      guideRef: "reconstructive-schemas",
      hints: [
        "First side: Why did human brains evolve schemas instead of recording every raw pixel?",
        "Second side: What goes wrong when a witness uses crime stereotypes or hears leading police questions?",
        "Explain why witnesses sound 100% sincere (confabulation is unconscious!).",
      ],
      strategy: "Weigh evolutionary efficiency against forensic error",
    },
    {
      kind: "written",
      id: "memory-and-forgetting-ch-q08",
      question:
        "Design a laboratory experiment to test whether **articulatory suppression** impairs **verbal** Short-Term Memory more than **visual** Short-Term Memory (`Working Memory Model`). State your **directional (one-tailed) hypothesis**, **experimental design** (with justification), and **one control** for extraneous variables. [4 marks]",
      marks: 4,
      modelAnswer:
        "Directional hypothesis: Participants performing articulatory suppression (repeating 'the, the, the' aloud at two words per second) will recall significantly fewer spoken consonant letters out of 9 than visual grid-square positions out of 9. I would use a repeated measures design where every participant completes both the verbal and visual recall tasks in ABBA counterbalanced order, eliminating individual differences in baseline working memory capacity. One key control is standardising presentation duration at 1 second per item in a quiet room so exposure time cannot confound scores.",
      markScheme: [
        {
          point: "Writes a directional hypothesis predicting articulatory suppression impairs verbal score more than visual score",
          keywords: ["fewer", "lower", "more errors", "worse", "significantly"],
        },
        {
          point: "Operationalises both variables quantitatively (e.g. 'the, the' aloud; recall score out of 9)",
          keywords: ["out of", "repeating", "aloud", "grid", "consonant"],
        },
        {
          point: "Selects a valid experimental design (e.g. repeated measures with counterbalancing) and justifies it",
          keywords: ["repeated measures", "independent measures", "counterbalanc", "individual differences", "order effects"],
        },
        {
          point: "States a concrete procedural control (e.g. standardised 1s timing per item, quiet environment)",
          keywords: ["standardis", "standardiz", "1 second", "exposure time", "quiet"],
        },
      ],
      difficulty: "challenge",
      guideRef: "working-memory-levels",
      hints: [
        "Make your hypothesis one-tailed ('recall significantly fewer...') and operationalise both IV and DV with numbers.",
        "Choose repeated measures (+ counterbalancing) or independent measures (+ random allocation) and explain why.",
        "Name one specific timing or environmental variable to hold constant across both conditions.",
      ],
      strategy: "Operationalise IV, DV, design, and standardisation cleanly",
    },
  ],
};
