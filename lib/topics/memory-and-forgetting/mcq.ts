import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "memory-and-forgetting-m1",
    title: "MCQ Paper 1: Core Models & Named Studies",
    questions: [
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q01",
        question:
          "According to **Atkinson & Shiffrin's (1968) Multi-Store Model**, what cognitive process transfers information from the **Sensory Register** into **Short-Term Memory**?",
        options: [
          "Selective attention to the sensory input",
          "Prolonged maintenance rehearsal",
          "Deep semantic elaboration",
          "Cue-dependent retrieval",
        ],
        answerIndex: 0,
        explanation:
          "Paying **attention** selects raw sensory data from the Sensory Register into STM; unattended traces decay in under two seconds. **Maintenance rehearsal** holds items in STM and transfers them to LTM, not from the Sensory Register to STM.",
        difficulty: "warmup",
        guideRef: "processes-and-msm",
        hints: ["Think about what you must do first to notice one sound in a noisy hall before you can even rehearse it."],
        strategy: "Trace arrows in the Multi-Store Model",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q02",
        question:
          "Which row accurately states the **dominant coding**, **capacity**, and **duration** of **Short-Term Memory (STM)** in the Multi-Store Model?",
        options: [
          "Semantic coding · Unlimited capacity · Up to a lifetime",
          "Acoustic coding · 7 ± 2 items · 18–30 seconds",
          "Modality-specific coding · Huge capacity · Less than 2 seconds",
          "Visual coding · 3–4 chunks · 90 minutes",
        ],
        answerIndex: 1,
        explanation:
          "STM encodes predominantly **acoustically** (Conrad, 1964), holds **7 ± 2 items/chunks** (Miller, 1956), and lasts **18–30 seconds** without rehearsal (Peterson & Peterson, 1959). Semantic coding, unlimited capacity, and lifetime duration describe **LTM**.",
        difficulty: "warmup",
        guideRef: "processes-and-msm",
        hints: ["Recall Miller's magic number and Peterson & Peterson's trigram retention window."],
        strategy: "Compare stores across coding, capacity, duration",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q03",
        question:
          "In **Murdock's (1962)** serial position study, why were words near the **end** of a 20-word list recalled at a high rate during immediate free recall?",
        options: [
          "They had received the most rehearsals and were consolidated into Long-Term Memory",
          "They were more emotionally vivid than words placed in the middle of the list",
          "They were still held in Short-Term Memory at the moment recall began",
          "They triggered cultural schemas that reconstructed the list backwards",
        ],
        answerIndex: 2,
        explanation:
          "The **recency effect** occurs because the last few words have not yet been displaced from **STM** when immediate recall starts. Extra rehearsal into **LTM** explains the **primacy effect** at the start of the list, not the end.",
        difficulty: "core",
        guideRef: "processes-and-msm",
        hints: [
          "Separate the two ends of Murdock's U-shaped curve: primacy (start) vs recency (end).",
          "Which temporary store still holds the final 5–7 items right when the list stops?",
        ],
        strategy: "Link primacy to LTM and recency to STM",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q04",
        question:
          "Which component of **Baddeley & Hitch's Working Memory Model** acts as an attentional supervisor with limited processing capacity and is **modality-free**?",
        options: [
          "Phonological loop",
          "Visuo-spatial sketchpad",
          "Articulatory control process",
          "Central executive",
        ],
        answerIndex: 3,
        explanation:
          "The **central executive** directs attention, switches tasks, and coordinates the slave systems across any sensory code (**modality-free**). The phonological loop is purely acoustic/verbal and the visuo-spatial sketchpad is visual/spatial.",
        difficulty: "warmup",
        guideRef: "working-memory-levels",
        hints: ["Which component is the 'boss' sitting at the top of the Working Memory diagram?"],
        strategy: "Match component to coding and role",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q05",
        question:
          "In **Craik & Tulving (1975)**, which orienting question produced the **highest** proportion of words correctly identified on the unexpected recognition test?",
        options: [
          "Asking whether the target word fitted meaningfully into a given sentence",
          "Asking whether the target word was printed in capital or lowercase letters",
          "Asking whether the target word rhymed with another spoken word",
          "Asking how many consonant letters appeared inside the target word",
        ],
        answerIndex: 0,
        explanation:
          "Sentence-fit questions required **deep semantic processing** of meaning, producing roughly **81%** recognition (up to 96% for 'Yes' items), compared with ~57% for **phonemic** rhyme questions and ~18% for **structural** capital-letter questions.",
        difficulty: "warmup",
        guideRef: "working-memory-levels",
        hints: ["Rank Craik & Tulving's three levels from shallowest (appearance) to deepest (meaning)."],
        strategy: "Rank Structural < Phonemic < Semantic",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q06",
        question:
          "Why did **Baddeley (2000)** add the **episodic buffer** to the original 1974 Working Memory Model?",
        options: [
          "To store automatic motor skills such as riding a bicycle without conscious effort",
          "To integrate visual, spatial, and verbal information with Long-Term Memory into unified episodes",
          "To hold raw iconic images for half a second before selective attention occurs",
          "To push anxiety-provoking memories out of conscious awareness",
        ],
        answerIndex: 1,
        explanation:
          "The original 1974 model could not explain how separate verbal (PL) and visual (VSS) streams combine with **LTM** into bound scenes or chunks; the modality-free **episodic buffer** (~4 chunks) solves this binding problem. Motor skills belong to procedural LTM in the cerebellum.",
        difficulty: "core",
        guideRef: "working-memory-levels",
        hints: [
          "Notice that the phonological loop only handles sound and the sketchpad only handles visuals.",
          "What bridges those separate streams together and connects Working Memory to LTM?",
        ],
        strategy: "Identify theoretical gaps solved by model updates",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q07",
        question:
          "In **Bartlett's (1932)** *The War of the Ghosts* study, British participants frequently recalled Native American **'canoes'** as **'boats'** and **'hunting seals'** as **'fishing'**. Which reconstructive process does this illustrate?",
        options: [
          "Trace decay",
          "Articulatory suppression",
          "Assimilation to cultural schemas",
          "Proactive interference from phonology",
        ],
        answerIndex: 2,
        explanation:
          "**Assimilation** alters unfamiliar details so they match the participant's existing **cultural schemas** (Edwardian British norms). Trace decay refers to passive fading over time rather than systematic cultural substitution.",
        difficulty: "warmup",
        guideRef: "reconstructive-schemas",
        hints: ["Which schema distortion makes unfamiliar foreign details fit your own culture?"],
        strategy: "Match War of the Ghosts examples to Bartlett's terms",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q08",
        question:
          "What does **levelling** mean in **Bartlett's Theory of Reconstructive Memory**?",
        options: [
          "Exaggerating one dramatic detail so it dominates the entire story",
          "Keeping word-for-word accuracy across every serial reproduction",
          "Repeating a word aloud until its acoustic trace transfers to LTM",
          "Omitting unfamiliar or seemingly irrelevant details so recalls grow shorter",
        ],
        answerIndex: 3,
        explanation:
          "**Levelling** is the progressive **omission** of unfamiliar, supernatural, or puzzling details (reducing *War of the Ghosts* from ~330 words to ~180 words). Exaggerating familiar salient details is **sharpening**.",
        difficulty: "core",
        guideRef: "reconstructive-schemas",
        hints: [
          "Contrast *levelling* (flattening/cutting down) with *sharpening* (highlighting/exaggerating).",
          "What happened to the total word count of Bartlett's folk tale over repeated recalls?",
        ],
        strategy: "Contrast paired definitions",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q09",
        question:
          "Why can **displacement** explain forgetting from **Short-Term Memory** but **not** from **Long-Term Memory**?",
        options: [
          "STM has a strict capacity limit of about 7 ± 2 items, whereas LTM capacity is potentially unlimited",
          "STM encodes information semantically, whereas LTM encodes information acoustically",
          "Displacement only affects traumatic memories stored inside the unconscious mind",
          "LTM traces disappear completely after 18 to 30 seconds without vocal rehearsal",
        ],
        answerIndex: 0,
        explanation:
          "Displacement happens when a **fixed-capacity store** (STM: 7 ± 2 slots) is full, so incoming items push older items out. Because **LTM** has potentially **unlimited capacity**, it never 'fills up', so LTM forgetting requires interference or retrieval failure instead.",
        difficulty: "core",
        guideRef: "explanations-forgetting",
        hints: [
          "Think about a tray that holds only 7 cups versus an infinite warehouse.",
          "Which memory store has a strict 7 ± 2 slot limit?",
        ],
        strategy: "Connect forgetting mechanism to store capacity",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q10",
        question:
          "**Godden & Baddeley (1975)** found that scuba divers recalled roughly **40% more words** when they learned and recalled both on dry land (or both 20 feet underwater) than when learning and recall environments differed. Which explanation of forgetting does this support?",
        options: [
          "Motivated forgetting via ego repression",
          "Context-dependent retrieval failure",
          "State-dependent physiological forgetting",
          "Displacement from the sensory register",
        ],
        answerIndex: 1,
        explanation:
          "Dry land vs underwater is an **external physical environment** cue, so mismatched settings cause **context-dependent retrieval failure** (Tulving's encoding specificity). **State-dependent** forgetting refers to *internal* mood, drug, or arousal states rather than external location.",
        difficulty: "core",
        guideRef: "explanations-forgetting",
        hints: [
          "Was the manipulated cue outside the diver's body (beach vs underwater) or an internal mood/drug state?",
          "External environment = context; internal body/mood = state.",
        ],
        strategy: "Distinguish external context from internal state",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q11",
        question:
          "Which statement accurately defines **retroactive interference**?",
        options: [
          "Previously learned information disrupts the encoding and recall of newly learned information",
          "Memories formed before a head injury are permanently erased while new memories form normally",
          "Newly learned information disrupts the recall of older, previously stored information",
          "Painful childhood memories are unconsciously blocked from entering conscious awareness",
        ],
        answerIndex: 2,
        explanation:
          "In **retroactive interference** (*retro* = acting backwards), **new** learning interferes with recalling **old** memories. When **old** learning disrupts **new** recall, that is **proactive interference**; memory loss from physical brain trauma is **retrograde amnesia**, not cognitive interference.",
        difficulty: "warmup",
        guideRef: "explanations-forgetting",
        hints: ["Use the P.O.R.N. mnemonic: Proactive = Old blocks new; Retroactive = New blocks old."],
        strategy: "Use mnemonic P.O.R.N.",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q12",
        question:
          "Which brain structure is primarily responsible for **consolidating new declarative (episodic and semantic) memories** from Short-Term Memory into Long-Term Memory?",
        options: [
          "Cerebellum",
          "Occipital visual cortex",
          "Pineal gland",
          "Hippocampus",
        ],
        answerIndex: 3,
        explanation:
          "The **hippocampus** (in the medial temporal lobe) consolidates new conscious episodic and semantic LTMs, as demonstrated when its surgical removal in H.M. caused severe anterograde amnesia. The **cerebellum** coordinates procedural motor skills, and the pineal gland secretes melatonin.",
        difficulty: "warmup",
        guideRef: "brain-and-amnesia",
        hints: ["Which medial temporal structure was surgically removed in patient H.M.?"],
        strategy: "Match brain structure to memory type",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q13",
        question:
          "In **Milner et al.'s (1968)** case study of patient **H.M.**, what did H.M.'s steady improvement across three days on the **mirror-drawing star task** demonstrate?",
        options: [
          "Procedural motor memory relies on brain regions outside the hippocampus that remained intact",
          "His hippocampus had regenerated enough tissue to consolidate new episodic memories",
          "Short-Term Memory has an unlimited duration even when distraction occurs",
          "Retrograde amnesia destroys automatic motor skills more severely than factual knowledge",
        ],
        answerIndex: 0,
        explanation:
          "H.M. improved steadily in motor accuracy (intact **procedural LTM** via his undamaged **cerebellum and basal ganglia**) despite having zero conscious **episodic recall** of ever seeing the mirror-drawing apparatus before.",
        difficulty: "core",
        guideRef: "brain-and-amnesia",
        hints: [
          "H.M. could not consciously remember doing the task yesterday, yet his hand made fewer errors each day.",
          "What type of LTM handles motor skills, and does it depend on the hippocampus?",
        ],
        strategy: "Use clinical dissociations as evidence",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q14",
        question:
          "A cyclist suffers a concussion and can form new memories of hospital visitors today, but cannot remember the two weeks leading up to the crash. Which condition does the cyclist show?",
        options: [
          "Anterograde amnesia",
          "Retrograde amnesia",
          "Proactive interference",
          "Articulatory suppression",
        ],
        answerIndex: 1,
        explanation:
          "Losing memories formed **before** brain trauma while retaining the ability to form new post-injury memories is **retrograde amnesia** (*retro* = backwards before injury). **Anterograde amnesia** is the inability to form *new* LTMs after the injury.",
        difficulty: "core",
        guideRef: "brain-and-amnesia",
        hints: [
          "Draw a timeline with the concussion in the middle.",
          "Are the missing memories from BEFORE the crash (retro-) or AFTER the crash (antero-)?",
        ],
        strategy: "Anchor amnesia to injury timeline",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m1-q15",
        question:
          "Which methodological criticism applies most directly to **Milner et al.'s (1968)** research on patient **H.M.**?",
        options: [
          "Participants knew they would be tested on word meaning, creating demand characteristics",
          "Using undergraduate psychology students meant the researchers lacked informed consent",
          "Findings came from a single severe epilepsy patient, limiting generalisability to healthy brains",
          "There were no objective quantitative tasks used to measure his cognitive abilities",
        ],
        answerIndex: 2,
        explanation:
          "Because H.M. was a **single unique case (`n = 1`)** whose brain had suffered years of severe epileptic seizures prior to surgery, his neural organisation may have been atypical, limiting **population generalisability**. Milner *did* use many objective quantitative tests (IQ, digit span, mirror-drawing errors).",
        difficulty: "core",
        guideRef: "brain-and-amnesia",
        hints: [
          "Consider the sample size (`n = 1`) and H.M.'s medical condition before surgery.",
          "Why might one epilepsy patient's brain not represent the wider general population?",
        ],
        strategy: "Link case-study sample characteristics to generalisability",
      },
    ],
  },
  {
    id: "memory-and-forgetting-m2",
    title: "MCQ Paper 2: Everyday Scenarios & Application",
    questions: [
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q01",
        question:
          "Priya memorises a 12-digit Wi-Fi code `1 9 6 5 2 0 2 7 0 2 6 6` by grouping it into Singapore's independence year (`1965`), exam year (`2027`), and syllabus code (`0266`). Which memory strategy is Priya using?",
        options: [
          "Serial reproduction",
          "Articulatory suppression",
          "State-dependent cueing",
          "Chunking into meaningful units",
        ],
        answerIndex: 3,
        explanation:
          "**Chunking** (Miller, 1956) groups 12 separate digits into **3 meaningful chunks**, fitting easily inside STM's **7 ± 2 chunk** capacity with help from existing LTM knowledge. Articulatory suppression blocks rehearsal rather than aiding it.",
        difficulty: "warmup",
        guideRef: "processes-and-msm",
        hints: ["How do you pack 12 digits into fewer than 7 STM slots?"],
        strategy: "Identify STM capacity strategies",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q02",
        question:
          "In a replication of **Murdock (1962)**, a teacher adds a **30-second backwards-counting task** (counting backwards in threes from 497) immediately after reading out a 20-word list, before students write down what they recall. Which change to the serial position curve is predicted by the **Multi-Store Model**?",
        options: [
          "The recency effect disappears, while the primacy effect remains high",
          "The primacy effect disappears, while the recency effect doubles in size",
          "Middle-list words become the best-recalled part of the entire list",
          "Both primacy and recency rise to 100% because counting boosts acoustic coding",
        ],
        answerIndex: 0,
        explanation:
          "Counting backwards for 30 seconds prevents rehearsal and **displaces/decays** the final words out of **STM** (whose duration is 18–30 s), abolishing the **recency effect** (Glanzer & Cunitz, 1966). The **primacy effect** survives because early words were already transferred into **LTM**.",
        difficulty: "challenge",
        guideRef: "processes-and-msm",
        hints: [
          "How long does unrehearsed STM last (18–30 s), and what does counting backwards prevent?",
          "Are the early words (already in LTM) or the final words (still in STM) wiped out by a 30-second verbal distractor?",
        ],
        strategy: "Predict experimental manipulations from model rules",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q03",
        question:
          "Conrad (1964) presented consonant strings visually on a screen for immediate STM recall and found participants frequently confused `B` with `V` or `P` (similar-sounding letters) rather than `E` with `F` (similar-looking letters). What does this prove about **STM**?",
        options: [
          "STM has an unlimited duration when letters are presented silently",
          "STM relies predominantly on acoustic coding even for visual input",
          "STM encodes letters primarily according to their semantic dictionary definition",
          "STM cannot hold consonant letters unless they form rhyming poetry",
        ],
        answerIndex: 1,
        explanation:
          "Making **acoustic substitution errors** (`B` → `V`) on visually presented letters shows participants converted visual symbols into **acoustic code** inside STM (via sub-vocal rehearsal). Semantic confusion errors are characteristic of **LTM** (Baddeley, 1966), not STM.",
        difficulty: "core",
        guideRef: "processes-and-msm",
        hints: [
          "Notice what `B`, `V`, and `P` have in common: how they look or how they sound?",
          "What kind of error reveals how a memory store encodes information?",
        ],
        strategy: "Infer coding type from confusion errors",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q04",
        question:
          "Lucas tries to mentally rotate a 3D Tetris block to check where it fits while simultaneously memorising a spoken shopping list read aloud by his sister. According to **Baddeley & Hitch's Working Memory Model**, why does Lucas perform **both** tasks relatively well?",
        options: [
          "Both tasks bypass the central executive and run directly inside the sensory register",
          "Both tasks use deep semantic encoding in the hippocampus rather than working memory",
          "Mental rotation uses the visuo-spatial sketchpad while spoken words use the phonological loop",
          "The articulatory control process converts 3D shapes into unlimited acoustic chunks",
        ],
        answerIndex: 2,
        explanation:
          "3D mental rotation uses the **visuo-spatial sketchpad** whereas spoken shopping items use the **phonological loop**. Because these two slave systems have **independent capacities**, dual-task interference is minimal.",
        difficulty: "core",
        guideRef: "working-memory-levels",
        hints: [
          "Assign each of Lucas's two tasks to its exact Working Memory slave system.",
          "Do those two tasks share one slave system or use two separate ones?",
        ],
        strategy: "Map dual tasks to Working Memory slave systems",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q05",
        question:
          "Hannah repeats the word *'the, the, the'* out loud continuously while reading a printed list of 8 vocabulary words silently. Her immediate recall drops sharply. Which specific sub-component of Working Memory was blocked?",
        options: [
          "Inner scribe of the visuo-spatial sketchpad",
          "Visual cache of the visuo-spatial sketchpad",
          "Long-term procedural store in the cerebellum",
          "Articulatory control process of the phonological loop",
        ],
        answerIndex: 3,
        explanation:
          "Repeating an irrelevant sound (*articulatory suppression*) occupies the **articulatory control process** (*inner voice*), preventing Hannah from sub-vocally rehearsing or converting printed words into phonological code. Visual sub-components handle shapes and spatial movement, not speech rehearsal.",
        difficulty: "challenge",
        guideRef: "working-memory-levels",
        hints: [
          "Which Working Memory sub-system acts as your 'inner voice' to convert written words into speech sounds?",
          "Look inside the phonological loop: phonological store (inner ear) vs articulatory control process (inner voice).",
        ],
        strategy: "Pinpoint sub-components within slave systems",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q06",
        question:
          "Four Year 11 students spend 25 minutes studying 30 Psychology terms. Based on **Craik & Tulving (1975)**, which student will recognise and recall the **most** terms next week?",
        options: [
          "Zara, who links each term to a real-life example from her own family and explains why it differs from a contrasting concept",
          "Jin-Ho, who counts how many vowels appear in each bold heading and writes the totals neatly in the margin",
          "Chloe, who whispers each term five times to find an English word that rhymes with it",
          "Dev, who traces over every printed heading with three different neon highlighters",
        ],
        answerIndex: 0,
        explanation:
          "Zara engages in **deep semantic and self-referent elaboration** (processing meaning and distinctions), which Craik & Tulving showed creates the strongest memory trace. Tracing fonts and counting vowels are **shallow structural** tasks, and rhyming is intermediate **phonemic** processing.",
        difficulty: "core",
        guideRef: "working-memory-levels",
        hints: [
          "Classify each student's revision method as structural, phonemic, or semantic.",
          "Which student processes the *meaning* of the terms most deeply?",
        ],
        strategy: "Apply Levels of Processing to study habits",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q07",
        question:
          "Two witnesses watch a cyclist slip on wet leaves outside a bank. Neither sees anyone run away, yet a week later one witness sincerely reports: *'A masked man ran out of the bank doors right before the bike crashed!'* Knowing the witness is **not** lying deliberately, how does **Bartlett's** theory explain this false detail?",
        options: [
          "Retroactive displacement from the witness's sensory echoic store",
          "Schema-driven confabulation triggered by an association between banks and robberies",
          "Anterograde amnesia caused by emotional activation of the cerebellum",
          "Phonemic encoding of the sound of wet leaves on the pavement",
        ],
        answerIndex: 1,
        explanation:
          "Seeing an incident outside a **bank** activated the witness's pre-existing **bank-robbery schema**, leading to **confabulation** — unconsciously inventing a plausible masked suspect to fill gaps in a fragmented memory without any intent to deceive.",
        difficulty: "core",
        guideRef: "reconstructive-schemas",
        hints: [
          "Why did the location ('outside a bank') trigger a 'masked man' memory?",
          "Which Bartlett term describes unconsciously inventing plausible details to fill memory gaps?",
        ],
        strategy: "Spot schema triggers in eyewitness scenarios",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q08",
        question:
          "In January of Year 11, Ethan moves from Classroom 3B to Classroom 4D, yet for the first two weeks of term he keeps accidentally walking to **Classroom 3B** and writing **'10B'** instead of **'11B'** at the top of his worksheets. Which type of forgetting is Ethan experiencing?",
        options: [
          "Retroactive interference",
          "Context-dependent amnesia",
          "Proactive interference",
          "Motivated repression",
        ],
        answerIndex: 2,
        explanation:
          "Ethan's well-practised **old** habits/memories (Classroom 3B, class 10B) are intruding forward to disrupt recall of his **new** Year 11 room and class code — classic **proactive interference** (**P**roactive = **O**ld disrupts new). Retroactive interference would be forgetting his old Year 10 room because of the new one.",
        difficulty: "core",
        guideRef: "explanations-forgetting",
        hints: [
          "Ask: which memory failed — the OLD Year 10 room or the NEW Year 11 room?",
          "When OLD memories disrupt NEW recall, is that proactive or retroactive?",
        ],
        strategy: "Underline which memory failed (old vs new)",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q09",
        question:
          "Sofia studies Malay vocabulary in Term 1 and German vocabulary in Term 2. At the end of Term 2, she sits a test on her **Term 1 Malay** words and scores much worse than classmates who studied **Art** instead of German in Term 2. What explains Sofia's lower Malay score?",
        options: [
          "Proactive interference because Malay disrupted her German test",
          "Displacement from Short-Term Memory because STM holds only 7 words",
          "Anterograde amnesia caused by learning two subjects in one year",
          "Retroactive interference because new similar vocabulary disrupted older Malay traces",
        ],
        answerIndex: 3,
        explanation:
          "Sofia is being tested on her **old** Term 1 Malay words, and learning **new** similar foreign vocabulary (German in Term 2) worked backwards to disrupt them — **retroactive interference**. Classmates taking Art experienced less interference because visual art is **dissimilar** to foreign vocabulary.",
        difficulty: "core",
        guideRef: "explanations-forgetting",
        hints: [
          "Check which subject Sofia is being tested on: Term 1 Malay (old) or Term 2 German (new)?",
          "Why did German interfere with Malay much more than Art did?",
        ],
        strategy: "Check test target + similarity of intervening task",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q10",
        question:
          "Tariq memorises key speech points while feeling **drowsy on hay-fever antihistamine tablets**. The next day, tablet-free and wide awake, he forgets half his lines — yet when taking the same antihistamine the following afternoon, the lines come flooding back! Which mechanism best explains this?",
        options: [
          "State-dependent retrieval failure",
          "Context-dependent retrieval failure",
          "Structural levels-of-processing decay",
          "Bartlett's cultural assimilation",
        ],
        answerIndex: 0,
        explanation:
          "Drowsiness vs alertness caused by antihistamine medication is an **internal physiological state** (Carter & Cassaday, 1998). When Tariq's internal state at recall mismatched encoding, cues were missing (**state-dependent retrieval failure**); restoring the state restored access.",
        difficulty: "core",
        guideRef: "explanations-forgetting",
        hints: [
          "Did Tariq's external room change, or did his internal bodily state change?",
          "Match internal drug/mood/arousal states to the right cue-dependent term.",
        ],
        strategy: "Distinguish internal state from external context",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q11",
        question:
          "After surviving a terrifying childhood house fire, 17-year-old Maya has **no conscious recollection** of the night of the fire despite having **no physical head injury**, though fire alarms still trigger sudden unexplained panic in her. How would **Freud's psychodynamic theory** explain Maya's memory loss?",
        options: [
          "Trace decay in her echoic sensory register after 18 seconds",
          "Motivated forgetting in which ego defence repression keeps trauma unconscious",
          "Displacement of childhood memories once Short-Term Memory reached nine chunks",
          "Cerebellar damage preventing procedural motor consolidation",
        ],
        answerIndex: 1,
        explanation:
          "With no brain injury, **motivated forgetting (repression)** proposes that the ego **unconsciously** pushes overwhelming, anxiety-provoking trauma out of conscious awareness into the unconscious mind, where it can still trigger emotional anxiety responses.",
        difficulty: "core",
        guideRef: "explanations-forgetting",
        hints: [
          "Notice two clues: extreme psychological trauma and zero physical head injury.",
          "Which psychodynamic defence mechanism unconsciously blocks threatening memories?",
        ],
        strategy: "Spot trauma without brain injury → repression",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q12",
        question:
          "A viral infection selectively damages Mr Tan's **bilateral hippocampi**, leaving his prefrontal cortex and cerebellum unharmed. Which everyday behaviour would Mr Tan **still be able to perform** normally?",
        options: [
          "Remembering the name of a new nurse introduced to him thirty minutes ago",
          "Recalling where he parked a rental car at a shopping mall two hours ago",
          "Learning over a week of practice to juggle three beanbags more smoothly",
          "Consolidating new vocabulary definitions for next month's quiz",
        ],
        answerIndex: 2,
        explanation:
          "Juggling is a **procedural motor skill** coordinated by Mr Tan's intact **cerebellum and basal ganglia** (just like H.M.'s mirror-drawing). Remembering a new nurse's name, a car's location after two hours, or new quiz definitions all require **hippocampal declarative consolidation**.",
        difficulty: "challenge",
        guideRef: "brain-and-amnesia",
        hints: [
          "Recall patient H.M.: what could he still learn despite bilateral hippocampal loss?",
          "Separate declarative facts/events (hippocampus) from motor skills (cerebellum).",
        ],
        strategy: "Separate declarative vs procedural tasks",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q13",
        question:
          "Which brain structure explains why emotionally shocking memories (such as witnessing an accident) are typically consolidated more vividly than mundane memories (such as Tuesday's lunch)?",
        options: [
          "Phonological store",
          "Cerebellar cortex",
          "Suprachiasmatic nucleus",
          "Amygdala",
        ],
        answerIndex: 3,
        explanation:
          "The **amygdala** processes fear and emotional arousal, signalling the neighbouring **hippocampus** via stress hormones/norepinephrine to consolidate emotionally significant events more strongly than neutral ones.",
        difficulty: "warmup",
        guideRef: "brain-and-amnesia",
        hints: ["Which almond-shaped limbic structure tags memories with emotional significance?"],
        strategy: "Link emotion + memory consolidation to amygdala",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q14",
        question:
          "Why does patient **K.F.** (Shallice & Warrington, 1970) — who could recall only **1–2 spoken digits** after a motorcycle crash yet recalled **visual images and faces** normally in STM — challenge **Atkinson & Shiffrin's Multi-Store Model**?",
        options: [
          "MSM treats Short-Term Memory as one unitary store, so brain damage should impair all STM tasks equally",
          "MSM claims Short-Term Memory only stores semantic meanings rather than acoustic digits",
          "MSM predicts that head injuries always destroy Long-Term Memory before Short-Term Memory",
          "MSM states that visual information skips Short-Term Memory and enters the cerebellum directly",
        ],
        answerIndex: 0,
        explanation:
          "If STM were a **single unitary store** as MSM claims, damaging STM would impair both verbal and visual short-term recall together. K.F.'s selective verbal deficit (damaged phonological loop, intact visuo-spatial sketchpad) supports **Baddeley & Hitch's multi-component Working Memory Model** instead.",
        difficulty: "challenge",
        guideRef: "working-memory-levels",
        hints: [
          "How many STM boxes does the Multi-Store Model draw versus the Working Memory Model?",
          "If there were only ONE STM box, could verbal STM break while visual STM worked perfectly?",
        ],
        strategy: "Use neuropsychological dissociations to evaluate models",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m2-q15",
        question:
          "Police officers interviewing an eyewitness ask her to first picture the rain, streetlamps, and smell of wet asphalt at the scene, and how nervous she felt at the time, before recounting what she saw. Which psychological principle underpins this instruction?",
        options: [
          "Preventing displacement from her 7-item sensory register",
          "Reinstating context-dependent and state-dependent retrieval cues",
          "Inducing retroactive interference to overwrite false schemas",
          "Using articulatory suppression to clear her phonological loop",
        ],
        answerIndex: 1,
        explanation:
          "Mentally recreating the external scene (rain, streetlamps = **context**) and internal feelings (nervousness = **state**) reinstates cues encoded alongside the target memory (**Tulving's encoding specificity**), making stored LTM details accessible again.",
        difficulty: "core",
        guideRef: "explanations-forgetting",
        hints: [
          "Rain and streetlamps are external environmental cues; feeling nervous is an internal state cue.",
          "Which theory says matching encoding cues unlocks inaccessible LTM traces?",
        ],
        strategy: "Connect Cognitive Interview steps to cue-dependent theory",
      },
    ],
  },
  {
    id: "memory-and-forgetting-m3",
    title: "MCQ Paper 3: Data, Research Methods & Evaluation",
    questions: [
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q01",
        question:
          "In a laboratory test of **Levels of Processing**, 40 students each view 15 structural words, 15 phonemic words, and 15 semantic words (presented in counterbalanced order). Which **experimental design** has the researcher used?",
        options: [
          "Independent measures design",
          "Matched pairs design",
          "Repeated measures design",
          "Naturalistic covert observation",
        ],
        answerIndex: 2,
        explanation:
          "Every single student experiences **all three levels of the Independent Variable** (structural, phonemic, semantic), with **counterbalancing** controlling order effects — the hallmark of a **repeated measures design** (as used in Craik & Tulving, 1975).",
        difficulty: "core",
        guideRef: "working-memory-levels",
        hints: [
          "Does each participant complete just one condition or all three conditions?",
          "Why was counterbalancing needed?",
        ],
        strategy: "Check whether participants experience one or all IV levels",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q02",
        question:
          "In a replication of **Craik & Tulving (1975)**, participants correctly recognise **4 out of 20** structurally encoded words and **17 out of 20** semantically encoded words. By how many **percentage points** did semantic recognition exceed structural recognition?",
        options: [
          "13 percentage points",
          "20 percentage points",
          "85 percentage points",
          "65 percentage points",
        ],
        answerIndex: 3,
        explanation:
          "Structural recognition = `(4 ÷ 20) × 100 = 20%`. Semantic recognition = `(17 ÷ 20) × 100 = 85%`. Difference = `85% − 20% = 65` percentage points. Notice `13` is the raw word difference (`17 − 4`), not the percentage difference!",
        difficulty: "core",
        guideRef: "working-memory-levels",
        hints: [
          "Convert both raw scores out of 20 into percentages first (`× 5`).",
          "Subtract the structural percentage from the semantic percentage.",
        ],
        strategy: "Convert raw counts to percentages before subtracting",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q03",
        question:
          "Why is **Murdock's (1962)** word-list study praised for **high internal validity** yet criticised for **low mundane realism**?",
        options: [
          "Strict timing controls isolate serial position as the cause of recall differences, but memorising unrelated words rarely reflects everyday memory tasks",
          "It was conducted secretly at a bus stop, giving realistic behaviour but zero control over background noise",
          "Only one brain-damaged participant was tested, preventing statistical comparison across positions",
          "Participants wrote essays in their own words without any quantitative recall scoring",
        ],
        answerIndex: 0,
        explanation:
          "Controlled pacing (1–2 s per word) and standardised lists rule out extraneous variables (**high internal validity**), whereas lists of disconnected English words are artificial compared to real-life conversations and events (**low mundane realism / ecological validity**).",
        difficulty: "core",
        guideRef: "processes-and-msm",
        hints: [
          "Internal validity = control over variables; mundane realism = how much the task resembles everyday life.",
          "How realistic is memorising 30 random words at a metronome pace?",
        ],
        strategy: "Trade off lab control against mundane realism",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q04",
        question:
          "**Morris, Bransford & Franks (1977)** found that when the final memory test asked *'Did any word on the study list rhyme with EAGLE?'*, participants who originally did **phonemic (rhyme)** encoding actually scored **higher** than those who did **semantic** encoding! What challenge does this pose to **Craik & Tulving (1975)**?",
        options: [
          "It proves semantic processing erases acoustic traces from the cerebellum",
          "It shows retention depends on matching encoding style to the retrieval test, not depth alone",
          "It demonstrates that structural capital-letter processing is always the deepest level",
          "It confirms that Short-Term Memory holds unlimited phonemic items for a lifetime",
        ],
        answerIndex: 1,
        explanation:
          "**Transfer-appropriate processing** (Morris et al., 1977) shows that 'deep' semantic processing is not universally superior on *every* test: memory is best when the **type of processing at encoding matches the demands of the retrieval cue**.",
        difficulty: "challenge",
        guideRef: "working-memory-levels",
        hints: [
          "In Craik & Tulving's standard recognition test, semantic won; on a rhyme test, rhyme encoding won.",
          "What mattered here: depth alone, or the *match* between encoding and test?",
        ],
        strategy: "Use counter-studies to evaluate universal claims",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q05",
        question:
          "Compare **Bartlett's (1932)** *War of the Ghosts* study with **Murdock's (1962)** serial position study. Which evaluation comparison is **accurate**?",
        options: [
          "Bartlett used stricter laboratory timing and double-blind scoring than Murdock",
          "Murdock relied on qualitative folk-tale summaries, whereas Bartlett calculated exact percentage curves",
          "Bartlett achieved higher ecological validity with meaningful stories, whereas Murdock achieved higher standardisation and replicability",
          "Both studies used brain-lesion case studies of amnesia patients rather than university students",
        ],
        answerIndex: 2,
        explanation:
          "Bartlett's naturalistic folk-tale prose mirrors how people retell real stories (**higher ecological validity**), but his loose instructions and irregular recall intervals lowered control compared with Murdock's tightly timed, replicable laboratory word lists.",
        difficulty: "core",
        guideRef: "reconstructive-schemas",
        hints: [
          "Compare prose folk tales recalled over months (Bartlett) with timed word lists recalled in 90 s (Murdock).",
          "Which study wins on naturalism, and which wins on strict lab standardisation?",
        ],
        strategy: "Contrast studies on validity vs control",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q06",
        question:
          "Why did **Craik & Tulving (1975)** use an **incidental learning** design (not warning participants in advance that their memory for the words would be tested)?",
        options: [
          "To deceive participants into feeling anxiety so repression could be measured",
          "To ensure all words were forgotten through trace decay before the test began",
          "To damage the central executive so only the visuo-spatial sketchpad operated",
          "To prevent participants from deliberately rehearsing shallowly encoded words into LTM",
        ],
        answerIndex: 3,
        explanation:
          "If participants knew a memory test was coming (**intentional learning**), they would actively rehearse *every* word semantically regardless of whether the question asked about capital letters! Keeping the recognition test unexpected ensured only the **orienting question** controlled processing depth.",
        difficulty: "challenge",
        guideRef: "working-memory-levels",
        hints: [
          "Imagine you knew you would be graded on remembering a word after answering 'Is it in CAPITALS?' — what would you secretly do?",
          "How does an unexpected test keep the Independent Variable pure?",
        ],
        strategy: "Explain methodological controls against confounding rehearsal",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q07",
        question:
          "**Jenkins & Dallenbach (1924)** taught participants lists of nonsense syllables and tested recall after 1, 2, 4, or 8 hours spent either **asleep** or **awake doing normal daily tasks**. Across every time interval, sleeping participants recalled **significantly more** than waking participants. Which explanation of forgetting does this **challenge**, and which does it **support**?",
        options: [
          "Challenges pure trace decay (equal time passed) and supports retroactive interference from waking activity",
          "Challenges retroactive interference and supports displacement from sensory memory",
          "Challenges state-dependent retrieval and proves sleep destroys hippocampal neurons",
          "Challenges Bartlett's schemas and proves Short-Term Memory lasts eight hours",
        ],
        answerIndex: 0,
        explanation:
          "Both groups waited the **exact same number of hours** (1–8 h). Pure **trace decay** predicts identical forgetting over identical time, yet waking participants forgot far more because new waking experiences caused **retroactive interference** (while sleep protected consolidation).",
        difficulty: "challenge",
        guideRef: "explanations-forgetting",
        hints: [
          "Notice that 8 hours asleep and 8 hours awake involve the *exact same passage of time*.",
          "If time alone isn't causing the extra forgetting while awake, what waking events are interfering backwards?",
        ],
        strategy: "Hold time constant to separate decay from interference",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q08",
        question:
          "Why is **Freud's theory of motivated forgetting (repression)** considered much harder to test scientifically than **interference theory**?",
        options: [
          "Interference theory relies solely on qualitative clinical interviews, whereas Freud's repression theory can only be tested with nonsense trigrams",
          "Trauma cannot ethically be induced in a lab, and unconscious repression cannot easily be falsified or distinguished from ordinary forgetting",
          "Repression only disrupts acoustic Short-Term Memory traces for 18–30 seconds, making it too brief to measure with standardised recall scales",
          "Interference occurs exclusively in semantic Long-Term Memory during sleep, whereas Freud claimed repression operates only as a conscious strategy",
        ],
        answerIndex: 1,
        explanation:
          "Ethical guidelines (**protection from psychological harm**) forbid experimentally inducing severe trauma, and because repression is defined as **unconscious**, if someone denies a trauma or simply forgot normally, the theory is virtually **unfalsifiable**.",
        difficulty: "core",
        guideRef: "explanations-forgetting",
        hints: [
          "Think about both ethics (protection from harm) and scientific falsifiability.",
          "Can you prove in a lab whether a forgotten childhood event was unconsciously repressed versus never encoded?",
        ],
        strategy: "Evaluate psychodynamic theories on ethics and falsifiability",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q09",
        question:
          "In a classroom experiment on **proactive interference**, Group 1 learns **List 1 (15 fruits)** then **List 2 (15 other fruits)**, while Group 2 rests during List 1 and only learns **List 2 (15 other fruits)**. Both groups are tested on **List 2**. Which result supports proactive interference?",
        options: [
          "Group 1 recalls significantly more words from List 2 than Group 2",
          "Both groups recall 0 words from List 2 because fruits are encoded structurally",
          "Group 1 recalls significantly fewer words from List 2 than Group 2",
          "Group 2 recalls List 1 accurately despite never having seen it",
        ],
        answerIndex: 2,
        explanation:
          "Group 1 has prior similar learning (**old List 1 fruits**) that competes forward to disrupt recall of **new List 2 fruits**, so Group 1 recalls **fewer** List 2 words than the control Group 2 (who had no prior fruit list to interfere).",
        difficulty: "core",
        guideRef: "explanations-forgetting",
        hints: [
          "Compare Group 1 (learned Old List 1 → New List 2) against Control Group 2 (Rest → New List 2).",
          "Does prior similar learning help or hinder Group 1 on List 2?",
        ],
        strategy: "Trace experimental vs control group designs in interference",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q10",
        question:
          "In **Milner et al.'s (1968)** study of **H.M.**, researchers combined IQ scales, experimental memory tasks, clinical interviews, behavioural observations, and later MRI scans. What is the methodological term and main advantage of combining multiple data sources like this?",
        options: [
          "Opportunity sampling, which guarantees zero researcher bias across every hospital",
          "Counterbalancing, which turns a case study into an independent-measures field experiment",
          "Deception, which prevents epilepsy symptoms from acting as an extraneous variable",
          "Triangulation, which increases the validity and credibility of conclusions in a case study",
        ],
        answerIndex: 3,
        explanation:
          "**Methodological triangulation** cross-checks qualitative clinical observations against objective quantitative tasks and physical neuroimaging (Corkin et al., 1997 MRI), boosting **validity and reliability** even within an `n = 1` case study.",
        difficulty: "core",
        guideRef: "brain-and-amnesia",
        hints: [
          "What term describes cross-verifying findings using quantitative tests + qualitative interviews + brain scans?",
          "Why does cross-checking multiple methods strengthen a single case study?",
        ],
        strategy: "Use 'triangulation' when evaluating rich case studies",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q11",
        question:
          "Why was a **natural/clinical case study** the **only ethical way** for Scoville and Milner to investigate the effect of bilateral hippocampal removal on human memory?",
        options: [
          "Deliberately removing brain tissue from healthy volunteers solely to test memory would severely breach protection from harm",
          "Healthy volunteers have no hippocampus until they reach old age",
          "Ethical guidelines forbid asking healthy participants to recall lists of more than seven words",
          "Case studies never require confidentiality or anonymised initials like H.M.",
        ],
        answerIndex: 0,
        explanation:
          "Neurosurgery was performed as a last-resort medical treatment for H.M.'s life-disrupting epilepsy, **not** as an experimental manipulation; deliberately lesioning human brains for research violates **protection from physical and psychological harm**. (Note too that using initials **'H.M.'** protected his **confidentiality** during his lifetime!)",
        difficulty: "warmup",
        guideRef: "brain-and-amnesia",
        hints: ["Could a psychologist ever randomly assign healthy people to have their hippocampus removed?"],
        strategy: "Link brain-damage case studies to ethical guidelines",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q12",
        question:
          "A researcher tests **state-dependent forgetting** by giving 30 adults caffeinated coffee or decaf coffee during encoding and recall. Across four equal groups (`Caff–Caff`, `Decaf–Decaf`, `Caff–Decaf`, `Decaf–Caff`), mean recall out of 25 words is **19, 18, 12, and 11** respectively. What is the **mean recall** across the two **matched-state** groups combined?",
        options: [
          "11.5 words",
          "18.5 words",
          "15.0 words",
          "37.0 words",
        ],
        answerIndex: 1,
        explanation:
          "The two **matched-state** groups are `Caff–Caff` (19) and `Decaf–Decaf` (18). Their combined mean is `(19 + 18) ÷ 2 = 37 ÷ 2 = 18.5` words (compared with `(12 + 11) ÷ 2 = 11.5` words for mismatched states).",
        difficulty: "core",
        guideRef: "explanations-forgetting",
        hints: [
          "Identify the two groups whose encoding state matched their recall state (`Caff–Caff` and `Decaf–Decaf`).",
          "Add their two means (`19 + 18`) and divide by `2`.",
        ],
        strategy: "Select relevant cells in a 2×2 table before averaging",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q13",
        question:
          "Which operationalised **Dependent Variable (DV)** would earn full credit in a CIE 0266 experimental hypothesis testing **Bartlett's levelling effect**?",
        options: [
          "How good participants' memory schemas are overall",
          "Whether participants enjoy Native American stories or British stories",
          "The number of story words omitted compared with the 330-word original text after 7 days",
          "Whether the story is printed in Arial or Times New Roman font",
        ],
        answerIndex: 2,
        explanation:
          "CIE 0266 operationalisation requires a **precise, observable, quantifiable measurement**: counting the **exact number of words/idea units omitted** relative to the 330-word original after 7 days directly measures **levelling**. 'How good schemas are' is unmeasured and vague.",
        difficulty: "core",
        guideRef: "reconstructive-schemas",
        hints: [
          "Operationalising a DV means stating the exact numerical score or measurement recorded.",
          "How do you measure 'levelling' (shortening/omission) quantitatively?",
        ],
        strategy: "Operationalise DVs with exact units and counts",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q14",
        question:
          "Patient **H.M.** retained clear memories of childhood holidays from age 10, lost memories from roughly age 16–27 (just before his surgery at 27), and could form zero new episodic memories after age 27. What does his **preserved age-10 memory** prove about **Long-Term Memory storage**?",
        options: [
          "Childhood memories stay permanently inside Short-Term Memory through rehearsal",
          "All episodic memories are stored exclusively inside the cerebellum after age ten",
          "The hippocampus is only needed to retrieve old memories, never to encode new ones",
          "Once fully consolidated over years, remote declarative memories are stored across the neocortex independently of the hippocampus",
        ],
        answerIndex: 3,
        explanation:
          "If the hippocampus were the permanent storage site for all episodic memories, removing it at age 27 would have wiped out H.M.'s childhood too! Instead, the hippocampus acts as a **temporary consolidation bridge**, gradually transferring declarative traces to distributed **neocortical** storage.",
        difficulty: "challenge",
        guideRef: "brain-and-amnesia",
        hints: [
          "Ask: if H.M. had almost no hippocampus left, where must his age-10 childhood memories have been living?",
          "Why were memories from just before surgery lost while much older childhood memories survived?",
        ],
        strategy: "Distinguish hippocampal consolidation from cortical permanent storage",
      },
      {
        kind: "mcq",
        id: "memory-and-forgetting-m3-q15",
        question:
          "Which key critique highlights a **circularity problem** in **Craik & Lockhart's (1972) Levels of Processing** framework?",
        options: [
          "There is no independent objective measure of 'depth' — researchers often infer a task was 'deep' simply because participants remembered it better",
          "It treats Short-Term Memory as a single passive store with fixed rehearsal loops, ignoring the central executive and separate slave systems",
          "It assumes all memories are reconstructed through cultural folk-tale schemas, so researchers cannot score factual word lists objectively in labs",
          "It relies solely on single-case studies of epilepsy patients with hippocampal damage, preventing generalisation to healthy adult memory encoding",
        ],
        answerIndex: 0,
        explanation:
          "Critics (e.g. Baddeley, 1978; Eysenck, 1978) noted that **processing time** failed as an independent measure of depth (complex structural tasks can take longer than simple semantic ones yet still be poorly remembered), leaving 'depth' perilously circular: *Why is it remembered well? Deep processing. How do we know it was deep? It was remembered well!*",
        difficulty: "challenge",
        guideRef: "working-memory-levels",
        hints: [
          "What does 'circular explanation' mean in science?",
          "How can you measure how 'deep' encoding was *without* just looking at the final recall score?",
        ],
        strategy: "Spot circularity in cognitive explanations",
      },
    ],
  },
];
