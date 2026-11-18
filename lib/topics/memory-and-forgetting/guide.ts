import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "memory-and-forgetting",
  title: "Topic 1: Memory & Forgetting",
  strand: "Paper 1: Cognition, Behaviour & Experiments",
  icon: "🧠",
  summary:
    "How the brain encodes, stores, reconstructs and loses experiences — from millisecond sensory traces to lifelong schemas and hippocampal consolidation.",
  intro:
    "Every exam fact you recall, bike ride you balance through, and childhood story you retell relies on distinct memory systems working together. In Cambridge IGCSE Psychology (0266 Paper 1), you will compare structural models (**Atkinson & Shiffrin's Multi-Store Model** and **Baddeley & Hitch's Working Memory Model**) with processing and schema accounts (**Craik & Tulving's Levels of Processing** and **Bartlett's Reconstructive Memory**), test five explanations of **forgetting**, and link memory stores to **brain localisation** and **Milner et al.'s (1968)** landmark case study of patient **H.M.**",
  guide: [
    {
      id: "processes-and-msm",
      heading: "Encoding, Storage, Retrieval & the Multi-Store Model",
      discovery: {
        problem:
          "Read these 12 words once at one word per second, close your eyes, and write down all you remember: *apple, train, cloud, violin, pencil, river, jacket, mirror, lemon, bridge, candle, dolphin*. Which positions on the list were easiest to recall — and why did the middle words vanish?",
        idea:
          "Most people recall the **first few words** (rehearsed into **Long-Term Memory**) and the **last few words** (still sitting in **Short-Term Memory**), while middle words are displaced. That U-shaped pattern is **Murdock's (1962) serial position effect**, classic experimental support for **Atkinson & Shiffrin's (1968) Multi-Store Model**.",
      },
      body:
        "Psychologists break memory into three sequential stages:\n- **Encoding (coding)**: converting raw sensory input into a mental representation the brain can store — **visual** (how it looks), **acoustic** (how it sounds), **semantic** (what it means), or **tactile/motor** (how it feels).\n- **Storage**: holding encoded information across time, measured by **capacity** (how much can be held) and **duration** (how long it stays).\n- **Retrieval**: recovering stored traces via **free recall** (no cues, any order), **cued recall** (prompted by a hint), or **recognition** (identifying targets among distractors).\n\n**Atkinson & Shiffrin (1968)** proposed the **Multi-Store Model (MSM)** — a structural, linear information-processing model with three separate unitary stores linked by **attention** and **rehearsal**:\n\n| Memory Store | Dominant Coding | Capacity | Duration | Transfer / Loss Mechanism |\n|---|---|---|---|---|\n| **Sensory Register (SR)** | Modality-specific (iconic = visual, echoic = acoustic) | Very large (all incoming stimuli) | Less than 1–2 seconds (~0.5 s iconic, ~2 s echoic) | **Attention** moves data to STM; unattended traces **decay** |\n| **Short-Term Memory (STM)** | Predominantly **acoustic** (Conrad, 1964) | **7 ± 2 items/chunks** (5–9 items; Miller, 1956) | **18–30 seconds** without rehearsal (Peterson & Peterson, 1959) | **Maintenance rehearsal** holds/transfers to LTM; lost by **displacement** or **decay** |\n| **Long-Term Memory (LTM)** | Predominantly **semantic** (meaning-based; Baddeley, 1966) | **Potentially unlimited** | **Minutes to a lifetime** (Bahrick et al., 1975) | Retrieved back into STM for conscious use; lost via **interference** or **retrieval failure** |\n\n> **Chunking (Miller, 1956)**: Grouping individual items into meaningful units (e.g. `1 9 6 8 2 0 2 7` → `1968` and `2027`) stretches how much information fits inside STM's **7 ± 2** slot limit.\n\n**Compulsory Named Study — Murdock (1962): The Serial Position Effect**\n- **Aim**: To test whether immediate free recall of a word list varies systematically with each word's position, testing whether STM and LTM are separate stores.\n- **Sample & Procedure**: **103 psychology students** took part in multiple laboratory sessions listening to word lists ranging from **10 to 40 unrelated common English words** (such as 20 words presented at **1 or 2 seconds per word**). Immediately after the final word, participants had **90 seconds** for **free recall** in any order.\n- **Findings**: Recall formed a U-shaped **serial position curve**:\n  1. **Primacy effect**: High recall (~70%+) for the **first few words** because they received extra **maintenance rehearsal** before STM filled up and transferred into **LTM**.\n  2. **Recency effect**: Even higher recall (~80%+) for the **final few words** because they were still held in **STM** at the instant of recall.\n  3. **Middle asymptote**: Low recall (~20–30%) for middle words — STM was already full when they arrived (too little rehearsal for LTM) and later words **displaced** them from STM.\n- **Evaluation of MSM & Murdock (1962)**:\n  - **Strengths**: High **internal validity** and **standardisation** (fixed presentation speed, objective recall score, replicable U-curve). Supported by **Glanzer & Cunitz (1966)** (a 30-second counting distractor wiped out the recency effect by clearing STM while leaving the LTM primacy effect intact) and brain-damaged cases (**H.M.** and **K.F.**).\n  - **Limitations**: **Low ecological validity / mundane realism** — memorising lists of random disconnected words in a lab does not reflect everyday meaningful memory; **student sample** limits generalisability; MSM **oversimplifies** STM and LTM as single unitary boxes and overstates rote repetition compared with semantic meaning.",
      diagram:
        '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Atkinson and Shiffrin Multi-Store Model showing Sensory Register, Short-Term Memory and Long-Term Memory alongside Murdock U-shaped serial position curve"><rect x="10" y="16" width="88" height="76" rx="10" fill="#e0f2fe" stroke="#0369a1" stroke-width="2"/><text x="54" y="42" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Sensory</text><text x="54" y="56" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Register</text><text x="54" y="74" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">&lt;1–2s · Raw</text><line x1="98" y1="54" x2="144" y2="54" stroke="#0e7490" stroke-width="2"/><polygon points="144,54 137,50 137,58" fill="#0e7490"/><text x="121" y="46" font-size="9" font-weight="bold" text-anchor="middle" fill="#0e7490" font-family="sans-serif">Attention</text><rect x="146" y="16" width="106" height="76" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="199" y="42" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Short-Term</text><text x="199" y="56" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Memory (STM)</text><text x="199" y="74" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">7±2 · 18–30s · Acoustic</text><path d="M180,16 C180,-2 218,-2 218,16" fill="none" stroke="#d97706" stroke-width="1.8"/><text x="199" y="11" font-size="8.5" text-anchor="middle" fill="#b45309" font-family="sans-serif">Rehearsal loop</text><line x1="252" y1="44" x2="306" y2="44" stroke="#15803d" stroke-width="2"/><polygon points="306,44 299,40 299,48" fill="#15803d"/><text x="279" y="37" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#15803d" font-family="sans-serif">Rehearsal</text><line x1="306" y1="66" x2="252" y2="66" stroke="#475569" stroke-width="1.8" stroke-dasharray="3,2"/><polygon points="252,66 259,62 259,70" fill="#475569"/><text x="279" y="79" font-size="8.5" text-anchor="middle" fill="#475569" font-family="sans-serif">Retrieval</text><rect x="308" y="16" width="108" height="76" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><text x="362" y="42" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Long-Term</text><text x="362" y="56" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Memory (LTM)</text><text x="362" y="74" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">Unlimited · Semantic</text><rect x="428" y="16" width="82" height="198" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="469" y="33" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Murdock (1962)</text><line x1="440" y1="192" x2="502" y2="192" stroke="#64748b" stroke-width="1.5"/><line x1="440" y1="192" x2="440" y2="52" stroke="#64748b" stroke-width="1.5"/><path d="M443,72 Q456,168 471,170 Q487,170 499,62" fill="none" stroke="#db2777" stroke-width="2.5"/><text x="452" y="64" font-size="8" font-weight="bold" fill="#15803d" font-family="sans-serif">Primacy</text><text x="477" y="55" font-size="8" font-weight="bold" fill="#d97706" font-family="sans-serif">Recency</text><text x="471" y="206" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Word position 1→20</text><line x1="54" y1="92" x2="54" y2="118" stroke="#dc2626" stroke-width="1.5"/><text x="54" y="130" font-size="8.5" text-anchor="middle" fill="#dc2626" font-family="sans-serif">Decay</text><line x1="199" y1="92" x2="199" y2="118" stroke="#dc2626" stroke-width="1.5"/><text x="199" y="130" font-size="8.5" text-anchor="middle" fill="#dc2626" font-family="sans-serif">Displacement / Decay</text><line x1="362" y1="92" x2="362" y2="118" stroke="#dc2626" stroke-width="1.5"/><text x="362" y="130" font-size="8.5" text-anchor="middle" fill="#dc2626" font-family="sans-serif">Interference / Cue loss</text><rect x="14" y="148" width="398" height="66" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/><text x="213" y="168" font-size="10" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Key Exam Link: Why a 30s Distractor Task Changes the Curve</text><text x="213" y="185" font-size="9.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Counting backwards for 30s empties STM → Recency disappears,</text><text x="213" y="200" font-size="9.5" text-anchor="middle" fill="#334155" font-family="sans-serif">but Primacy survives because early words are already safely stored in LTM!</text></svg>',
      diagramCaption:
        "Atkinson & Shiffrin's (1968) Multi-Store Model paired with Murdock's (1962) U-shaped serial position curve.",
      workedExamples: [
        {
          title: "Calculating percentage recall across serial positions",
          problem:
            "In a classroom replication of Murdock (1962), 25 students listen to a 20-word list. For Word 1 (start of list), 19 students recall it correctly. For Word 11 (middle of list), only 6 students recall it correctly. Calculate the percentage recall difference between Word 1 and Word 11.",
          steps: [
            "Word 1 recall percentage = (19 ÷ 25) × 100 = 76%.",
            "Word 11 recall percentage = (6 ÷ 25) × 100 = 24%.",
            "Difference = 76% − 24% = 52 percentage points (reflecting the primacy effect over middle-list displacement).",
          ],
          answer: "52% (or 52 percentage points)",
          yourTurn: {
            question:
              "In the same 25-student trial, 22 students recall Word 20 (the final word). What percentage of students recalled Word 20?",
            answer: { type: "number", value: 88 },
            solution: "(22 ÷ 25) × 100 = 88%, illustrating the recency effect from STM.",
          },
        },
      ],
      keyPoints: [
        "Sensory Register: modality-specific coding, huge capacity, duration under 1–2 seconds; **attention** selects input for STM.",
        "STM: **acoustic** coding, **7 ± 2 chunks** capacity, **18–30 seconds** duration; **maintenance rehearsal** keeps items active and transfers them to LTM.",
        "LTM: **semantic** coding, **potentially unlimited** capacity, **up to a lifetime** duration.",
        "Murdock (1962): 103 students, 10–40 word lists → **primacy effect** (rehearsed into LTM) + **recency effect** (still in STM) = U-shaped serial position curve.",
      ],
      whyItWorks:
        "Separating STM and LTM explains why brain injuries and distractor tasks can wipe out one end of the serial position curve while leaving the other end completely untouched — something a single-store model of memory could never predict.",
      strategies: [
        "Compare stores across all 3 dimensions: coding, capacity, and duration",
        "Link primacy to LTM rehearsal and recency to STM availability",
      ],
      thinkDeeper:
        "You have seen a S$10 note or school logo hundreds of times, yet most people draw its details inaccurately from memory. What does that reveal about whether mere repetition guarantees transfer into LTM?",
    },
    {
      id: "working-memory-levels",
      heading: "Working Memory & Levels of Processing",
      discovery: {
        problem:
          "Try tapping a steady three-beat rhythm on your desk with one hand while repeating a 6-digit phone number out loud. Now try repeating that 6-digit phone number out loud while reading a paragraph and counting every word containing the letter 'e'. Why is the first dual task easy and the second nearly impossible?",
        idea:
          "Tapping uses spatial/motor processing while repeating digits uses verbal processing — two **separate slave systems** in **Baddeley & Hitch's Working Memory Model**. Reading words and repeating digits both compete for the **phonological loop**, overloading a single limited component!",
      },
      body:
        "**Baddeley & Hitch (1974; Baddeley, 2000)** argued that STM is **not** a passive unitary storage box. Instead, **Working Memory (WM)** is an active, multi-component workspace that holds and manipulates information during live cognitive tasks (mental arithmetic, reading comprehension, navigation):\n\n| Working Memory Component | Role & Sub-systems | Coding & Capacity |\n|---|---|---|\n| **Central Executive (CE)** | Attentional supervisor: directs focus, switches tasks, inhibits distractions, allocates work to slave systems | **Modality-free**; very limited attentional capacity (minimal storage itself) |\n| **Phonological Loop (PL)** | **Phonological store** (*inner ear*: holds speech sounds 1–2 s) + **Articulatory control process** (*inner voice*: sub-vocal rehearsal & converts written text to speech code) | **Acoustic / speech-based**; holds ~**2 seconds** of spoken words |\n| **Visuo-Spatial Sketchpad (VSS)** | **Visual cache** (form & colour) + **Inner scribe** (spatial locations & movement trajectories) | **Visual & spatial**; ~**3–4 objects** |\n| **Episodic Buffer (EB, 2000)** | Integrates visual, spatial & verbal streams with **LTM** into unified, time-ordered episodes | **Modality-free**; ~**4 chunks** |\n\n- **Dual-Task Evidence**: Participants perform a verbal task + visual task simultaneously almost as accurately as alone, because PL and VSS do not share capacity. Two concurrent verbal tasks (e.g. **articulatory suppression** — saying *'the, the, the'* while memorising words) severely impair recall.\n- **Word-Length Effect**: People recall more short monosyllabic words (*cat, bus, pen*) than long polysyllabic words (*university, hippopotamus*) because the articulatory loop holds ~2 seconds of spoken speech, not a fixed item count.\n- **Evaluation of WMM**: Explains active real-world cognition and clinical double dissociations (patient **K.F.** had damaged verbal STM after a motorcycle accident yet normal visual STM). However, critics note the **Central Executive** remains vague and difficult to measure directly (*'a homunculus inside the head'*).\n\n**Levels of Processing — Craik & Lockhart (1972) & Craik & Tulving (1975)**\nRather than separate boxes, **Craik & Lockhart (1972)** proposed that memory durability is a **by-product of depth of encoding** along a continuum:\n1. **Structural processing (Shallow)**: Encoding physical appearance (e.g. uppercase vs lowercase font).\n2. **Phonemic processing (Intermediate)**: Encoding acoustic sound/rhyme.\n3. **Semantic processing (Deep)**: Encoding **meaning**, associations, and category fit — involving **elaborative rehearsal**.\n\n**Compulsory Named Study — Craik & Tulving (1975)**\n- **Aim**: To test whether deeper semantic processing produces stronger subsequent recognition than shallow structural or phonemic processing.\n- **Procedure**: Participants (e.g. **24 university students** in key laboratory trials) viewed **60 words** flashed briefly (**200 ms** each on a tachistoscope). Before each word, they answered a Yes/No orienting question inducing one of three levels:\n  - **Structural**: *'Is the word in CAPITAL letters?'*\n  - **Phonemic**: *'Does the word rhyme with WEIGHT?'*\n  - **Semantic**: *'Would the word fit in the sentence: The girl placed the ___ on the table?'*\n  Participants did **not** know their memory would be tested (**incidental learning**). Afterwards, they completed an unexpected **recognition test** picking the 60 target words out of **180 words**.\n- **Findings**: Recognition soared with processing depth: roughly **18%** for structural (case), **57%** for phonemic (rhyme), and **81%** (up to **96%** on 'Yes' semantic trials) for semantic encoding! 'Yes' answers outperformed 'No' answers because target words integrated richly into the question context.\n- **Evaluation**: High **internal validity** (controlled 200 ms exposure, incidental test ruled out deliberate rehearsal) and huge **real-world educational value** (active semantic self-quizzing beats passive highlighting). **Limitations**: Concept of 'depth' risks **circularity** (we only know encoding was 'deep' because it was remembered well, and decision time alone did not fully explain it), plus **Morris et al. (1977)** showed rhyme encoding outperformed semantic encoding when tested on a rhyme-recognition test (**transfer-appropriate processing**).",
      diagram:
        '<svg viewBox="0 0 520 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: Baddeley and Hitch Working Memory Model with Central Executive, Phonological Loop, Episodic Buffer, Visuo-Spatial Sketchpad and LTM. Right: Craik and Tulving 1975 recognition percentages"><rect x="10" y="14" width="280" height="198" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="150" y="32" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Working Memory Model (Baddeley, 2000)</text><rect x="78" y="42" width="144" height="36" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="150" y="58" font-size="10" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Central Executive</text><text x="150" y="71" font-size="8.5" text-anchor="middle" fill="#4c1d95" font-family="sans-serif">Attentional boss · Modality-free</text><line x1="108" y1="78" x2="62" y2="104" stroke="#7c3aed" stroke-width="1.6"/><line x1="150" y1="78" x2="150" y2="104" stroke="#7c3aed" stroke-width="1.6"/><line x1="192" y1="78" x2="238" y2="104" stroke="#7c3aed" stroke-width="1.6"/><rect x="18" y="104" width="84" height="50" rx="7" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/><text x="60" y="122" font-size="9" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Phonological</text><text x="60" y="134" font-size="9" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Loop</text><text x="60" y="147" font-size="8" text-anchor="middle" fill="#0369a1" font-family="sans-serif">Inner ear + voice</text><rect x="108" y="104" width="84" height="50" rx="7" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/><text x="150" y="122" font-size="9" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Episodic</text><text x="150" y="134" font-size="9" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Buffer</text><text x="150" y="147" font-size="8" text-anchor="middle" fill="#b45309" font-family="sans-serif">Integrates ~4 chunks</text><rect x="198" y="104" width="84" height="50" rx="7" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/><text x="240" y="122" font-size="9" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Visuo-Spatial</text><text x="240" y="134" font-size="9" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Sketchpad</text><text x="240" y="147" font-size="8" text-anchor="middle" fill="#166534" font-family="sans-serif">Visual + spatial</text><line x1="60" y1="154" x2="105" y2="174" stroke="#64748b" stroke-width="1.4"/><line x1="150" y1="154" x2="150" y2="174" stroke="#64748b" stroke-width="1.4"/><line x1="240" y1="154" x2="195" y2="174" stroke="#64748b" stroke-width="1.4"/><rect x="46" y="174" width="208" height="28" rx="6" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/><text x="150" y="192" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Long-Term Memory (Semantic / Episodic)</text><rect x="302" y="14" width="208" height="198" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="406" y="32" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Craik &amp; Tulving (1975) Recall</text><line x1="330" y1="180" x2="494" y2="180" stroke="#475569" stroke-width="1.5"/><rect x="342" y="154" width="34" height="26" rx="4" fill="#94a3b8"/><text x="359" y="149" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#334155" font-family="sans-serif">18%</text><text x="359" y="195" font-size="8.5" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Structural</text><text x="359" y="205" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">(FONT CASE)</text><rect x="394" y="98" width="34" height="82" rx="4" fill="#38bdf8"/><text x="411" y="93" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0369a1" font-family="sans-serif">57%</text><text x="411" y="195" font-size="8.5" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Phonemic</text><text x="411" y="205" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">(RHYME)</text><rect x="446" y="62" width="34" height="118" rx="4" fill="#16a34a"/><text x="463" y="57" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#15803d" font-family="sans-serif">81%</text><text x="463" y="195" font-size="8.5" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Semantic</text><text x="463" y="205" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">(MEANING)</text></svg>',
      diagramCaption:
        "Left: Baddeley's Working Memory workspace. Right: Craik & Tulving (1975) recognition jump from shallow structural to deep semantic processing.",
      workedExamples: [
        {
          title: "Applying Working Memory to a real-world driving scenario",
          problem:
            "Mei is driving along Orchard Road using a visual satellite map on her dashboard while chatting hands-free to her mother. Suddenly, roadworks force an unfamiliar detour and she has to read complex street signs while listening to spoken directions. Explain using the Working Memory Model why driving felt effortless at first, then suddenly difficult.",
          steps: [
            "At first, watching the road/map used Mei's **visuo-spatial sketchpad** while chatting used her **phonological loop** — two separate slave systems that do not compete for capacity.",
            "During the complex detour, reading unfamiliar street signs (converted to speech via the articulatory control process) AND listening to spoken directions both demanded the **phonological loop**, while urgent route-planning overloaded the limited-capacity **central executive**.",
          ],
          answer:
            "Separate slave systems (VSS + PL) allow smooth dual-tasking, whereas competing verbal inputs + heavy decision-making overload the phonological loop and central executive.",
          yourTurn: {
            question:
              "In Craik & Tulving's (1975) study, 20 words were encoded semantically and a student recognised 17 of them. What percentage of the semantic words did the student recognise?",
            answer: { type: "number", value: 85 },
            solution: "(17 ÷ 20) × 100 = 85%.",
          },
        },
      ],
      keyPoints: [
        "WMM replaces unitary STM with the **Central Executive**, **Phonological Loop**, **Visuo-Spatial Sketchpad**, and **Episodic Buffer**.",
        "Dual-task studies support WMM: verbal + visual tasks run smoothly in parallel, whereas two verbal tasks clash in the phonological loop.",
        "Craik & Tulving (1975): **semantic** processing (meaning) yields far higher recognition (~81%+) than **phonemic** (~57%) or **structural** (~18%) encoding.",
        "Elaborative rehearsal (linking new ideas to meaning and examples) beats passive maintenance rehearsal for exam revision.",
      ],
      whyItWorks:
        "If short-term memory were just one bucket, *any* two simultaneous tasks would interfere equally. Showing selective interference only when two tasks share the same sensory code proves STM is divided into specialised subsystems.",
      strategies: [
        "Identify which exact WMM slave system each task in an exam scenario uses",
        "Rank encoding tasks cleanly: Structural (look) < Phonemic (sound) < Semantic (meaning)",
      ],
      thinkDeeper:
        "Why might a student who spends three hours colour-coding revision notes with pastel highlighters score worse in an exam than a student who spends 40 minutes writing practice explanations from memory?",
    },
    {
      id: "reconstructive-schemas",
      heading: "Reconstructive Memory & Schemas",
      discovery: {
        problem:
          "Picture a typical headteacher's office for 10 seconds. Without looking back, would you bet there were **books**, a **computer**, a **desk**, and a **filing cabinet** — or a **picnic basket** and **bowling ball**? In Brewer & Treyens (1981), 30% of participants 'remembered' books in an office that actually contained *zero* books! Why?",
        idea:
          "Your brain did not play back a photograph — it combined fragments of the real room with your pre-existing **'office schema'**, confidently **confabulating** books because offices *usually* have books!",
      },
      body:
        "**Sir Frederic Bartlett (1932)** challenged the idea that memory works like a tape recorder. In his **Theory of Reconstructive Memory**, remembering is an **active, imaginative reconstruction**: we store only key fragments of an event and rebuild the full story at retrieval using **schemas**.\n\nA **schema** is an organised mental package of knowledge, beliefs, and expectations about objects, people, situations (scripts), or cultures, built from past experience. Schemas make perception and comprehension fast, automatic, and efficient — but distort recall in four predictable ways:\n\n| Reconstructive Distortion | Definition | Concrete Example |\n|---|---|---|\n| **Assimilation (Rationalisation)** | Changing unfamiliar or puzzling details to fit existing cultural schemas so the story makes sense | Changing Native American *'canoes'* into British *'boats'* and *'paddles'* into *'oars'* |\n| **Levelling (Omission)** | Dropping unfamiliar, supernatural, or seemingly irrelevant details so the story becomes **shorter** | Omitting the ghost battle and *'something black came out of his mouth'* |\n| **Sharpening** | Emphasising, elaborating, or exaggerating details that stand out as familiar or emotionally salient | Highlighting physical combat or grief reactions familiar to one's own culture |\n| **Confabulation** | Unconsciously filling memory gaps with plausible **invented** details (without intending to lie) | Remembering books in a bookless office, or adding glass on the road after hearing *'smashed'* |\n\n**Bartlett's (1932) Classic Study — *The War of the Ghosts***\n- **Aim**: To investigate how cultural schemas transform recall of an unfamiliar folk story over repeated reproductions.\n- **Sample & Procedure**: **20 British university participants** read *The War of the Ghosts* (a Native American folk tale containing supernatural elements, canoes, seal-hunting, and unusual narrative jumps) twice at their normal reading speed. Recall was tested via **serial reproduction** (passing written recalls along a chain of participants, like *Telephone*) and **repeated reproduction** (the same individual recalling the story after 15 minutes, weeks, months, and even years).\n- **Findings**:\n  - Stories grew substantially **shorter** (**levelling**: shrinking from ~330 words to ~180 words).\n  - Unfamiliar details were **assimilated** to Edwardian English culture (*'hunting seals'* → *'fishing'*, *'canoes'* → *'boats'*).\n  - Supernatural details (ghosts, soul leaving the body as a black mist at sunrise) were dropped or rationalised into ordinary battle wounds.\n- **Real-World Application — Eyewitness Testimony (EWT)**:\n  - Witnesses to crimes or car crashes reconstruct incomplete memories using schemas and post-event cues (**Loftus & Palmer, 1974**: asking how fast cars were going when they *'smashed'* vs *'contacted'* inflated speed estimates from 31.8 mph to 40.8 mph and doubled false recall of broken glass).\n- **Evaluation**:\n  - **Strengths**: High **ecological validity** — uses rich, meaningful stories and realistic retention intervals (days to years) rather than artificial nonsense syllables; crucial real-world value for police **Cognitive Interviews**.\n  - **Limitations**: **Low internal validity / weak experimental controls** — Bartlett gave loose, unstandardised instructions, varied recall intervals across participants, and analysed recalls qualitatively without blind inter-rater scoring, risking **investigator bias**.",
      diagram:
        '<svg viewBox="0 0 520 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bartlett Reconstructive Memory diagram showing original fragmented event combining with Cultural Schema to produce reconstructed recall with assimilation, levelling, sharpening and confabulation"><rect x="16" y="22" width="142" height="74" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><text x="87" y="44" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Original Event</text><text x="87" y="60" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">&quot;War of the Ghosts&quot;</text><text x="87" y="75" font-size="8.5" text-anchor="middle" fill="#0369a1" font-family="sans-serif">Canoes · Seals · Ghosts</text><text x="87" y="88" font-size="8" text-anchor="middle" fill="#64748b" font-family="sans-serif">(Stored as fragments)</text><rect x="16" y="118" width="142" height="74" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="87" y="140" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Existing Schema</text><text x="87" y="156" font-size="9" text-anchor="middle" fill="#334155" font-family="sans-serif">Past Experience &amp; Culture</text><text x="87" y="172" font-size="8.5" text-anchor="middle" fill="#5b21b6" font-family="sans-serif">Boats · Fishing · Logic</text><line x1="158" y1="59" x2="212" y2="96" stroke="#0284c7" stroke-width="2"/><line x1="158" y1="155" x2="212" y2="118" stroke="#7c3aed" stroke-width="2"/><circle cx="232" cy="107" r="24" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="232" y="104" font-size="9" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">Active</text><text x="232" y="116" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">Rebuild</text><line x1="256" y1="107" x2="296" y2="107" stroke="#d97706" stroke-width="2"/><polygon points="296,107 289,103 289,111" fill="#d97706"/><rect x="298" y="18" width="206" height="178" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><text x="401" y="38" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Reconstructed Recall</text><rect x="310" y="48" width="182" height="31" rx="5" fill="#ffffff" stroke="#86efac"/><text x="318" y="61" font-size="9" font-weight="bold" fill="#166534" font-family="sans-serif">1. Assimilation:</text><text x="318" y="73" font-size="8.5" fill="#334155" font-family="sans-serif">&quot;Canoes&quot; → &quot;Boats&quot;, &quot;Seals&quot; → &quot;Fishing&quot;</text><rect x="310" y="84" width="182" height="31" rx="5" fill="#ffffff" stroke="#86efac"/><text x="318" y="97" font-size="9" font-weight="bold" fill="#166534" font-family="sans-serif">2. Levelling:</text><text x="318" y="109" font-size="8.5" fill="#334155" font-family="sans-serif">330 → 180 words; ghosts dropped</text><rect x="310" y="120" width="182" height="31" rx="5" fill="#ffffff" stroke="#86efac"/><text x="318" y="133" font-size="9" font-weight="bold" fill="#166534" font-family="sans-serif">3. Sharpening:</text><text x="318" y="145" font-size="8.5" fill="#334155" font-family="sans-serif">Familiar dramatic actions emphasised</text><rect x="310" y="156" width="182" height="31" rx="5" fill="#ffffff" stroke="#86efac"/><text x="318" y="169" font-size="9" font-weight="bold" fill="#166534" font-family="sans-serif">4. Confabulation:</text><text x="318" y="181" font-size="8.5" fill="#334155" font-family="sans-serif">Plausible details invented to fill gaps</text></svg>',
      diagramCaption:
        "Bartlett (1932): Stored fragments + cultural schemas merge during active retrieval, generating systematic distortions.",
      workedExamples: [
        {
          title: "Distinguishing Bartlett's four schema distortions in an eyewitness account",
          problem:
            "Arjun witnesses a brief shoplifting incident at a convenience store where a teenager in a green hoodie pockets an energy bar and walks calmly out. A week later, Arjun tells police: 'A hooded thief sprinted out after grabbing snacks and knocking over the cashier's till — he didn't even wear a school tie.' Identify two distinct reconstructive processes in Arjun's statement.",
          steps: [
            "**Assimilation / Confabulation**: Turning a calm walk into 'sprinted out' and inventing 'knocking over the cashier's till' fills gaps with Arjun's stereotypical 'robbery script/schema'.",
            "**Sharpening**: Exaggerating the 'hooded thief' detail because hoodies fit crime stereotypes.",
          ],
          answer:
            "Confabulation/assimilation (inventing sprinting and knocking over the till to match a robbery schema) and sharpening (emphasising the hoodie).",
          yourTurn: {
            question:
              "In Bartlett's War of the Ghosts study, the original folk tale was 330 words long, and a participant's fifth recall shrank to 165 words as supernatural details were omitted. What reconstructive term names this shortening through omission?",
            answer: { type: "text", accept: ["levelling", "leveling", "omission"] },
            solution:
              "Levelling (omitting unfamiliar or seemingly irrelevant details so recalls become progressively shorter).",
          },
        },
      ],
      keyPoints: [
        "Memory is **reconstructive**, not reproductive: we rebuild events from fragments + **schemas**.",
        "Know all four distortions: **assimilation** (making details culturally familiar), **levelling** (dropping unfamiliar details), **sharpening** (highlighting familiar details), and **confabulation** (inventing plausible gap-fillers).",
        "Bartlett's *War of the Ghosts* (1932) has high **ecological validity** (naturalistic prose) but **low experimental control** (unstandardised intervals and qualitative scoring).",
        "Explains why honest eyewitnesses can be **confident yet inaccurate**.",
      ],
      whyItWorks:
        "Storing every pixel of every waking second would overwhelm neural storage and slow decisions; storing compressed gist + general schemas lets the brain predict the world rapidly at the price of occasional false-memory errors.",
      strategies: [
        "Never confuse confabulation with lying — confabulation is unconscious and honest",
        "Pair Bartlett's ecological validity strength against his lack of standardised lab controls",
      ],
      thinkDeeper:
        "If two witnesses talk to each other right after seeing an accident, why can schema reconstruction make their statements agree *more* with each other while becoming *less* accurate?",
    },
    {
      id: "explanations-forgetting",
      heading: "Explanations of Forgetting",
      discovery: {
        problem:
          "Scenario 1: You learn a new 6-digit Wi-Fi password, then keep accidentally typing your **old** router password. Scenario 2: After three months using the **new** Wi-Fi password, you visit your old flat and can no longer remember the **old** password. Both involve two similar passwords competing — what is the exact difference?",
        idea:
          "Scenario 1 is **proactive interference** (**old** memory disrupts **new** learning — *P*ast blocks *P*resent). Scenario 2 is **retroactive interference** (**new** learning disrupts **old** memory — working *backwards* in time). Getting the direction right is one of the highest-yield marks in CIE 0266!",
      },
      body:
        "Forgetting occurs for different reasons depending on **which store** is involved and whether a trace was **lost** (*unavailable*) or merely **unreachable** (*inaccessible*):\n\n| Explanation | Store Primarily Affected | Core Mechanism & Classic Evidence |\n|---|---|---|\n| **1. Trace Decay** | Sensory Register & unrehearsed STM | Physical/neurochemical memory trace (**engram**) fades spontaneously as time passes without rehearsal (Peterson & Peterson, 1959). Hard to prove in LTM because sleep slows forgetting over equal time (**Jenkins & Dallenbach, 1924**). |\n| **2. Displacement** | **STM only** (7 ± 2 slot limit) | When STM is full, incoming new items **push out** older items if unrehearsed (**Waugh & Norman, 1965** probe-digit study; middle words in Murdock, 1962). Cannot explain LTM forgetting because LTM capacity is unlimited. |\n| **3. Cue-Dependent Retrieval Failure** | **LTM** (trace is *available* but *inaccessible*) | **Tulving's Encoding Specificity Principle**: cues encoded alongside the target are missing at recall. Includes **context-dependent** (external setting — **Godden & Baddeley, 1975** divers recalled ~40% more when land/water matched) and **state-dependent** (internal mood/physiological state — **Carter & Cassaday, 1998**). |\n| **4. Interference (PI & RI)** | **LTM** (strongest when memories are **similar**) | Competing associations block or overwrite each other: **Proactive Interference (PI)** = **old** disrupts **new**; **Retroactive Interference (RI)** = **new** disrupts **old** (**McGeoch & McDonald, 1931** found worst RI when intervening lists were synonyms). |\n| **5. Motivated Forgetting (Repression)** | **LTM** (Psychodynamic / Freud) | Ego defence mechanism unconsciously pushes traumatic, painful, or threatening memories into the **unconscious** to prevent overwhelming anxiety (**repression** = unconscious; **suppression** = deliberate conscious avoidance). |\n\n> **CIE 0266 Memory Mnemonic — P.O.R.N.**:\n> - **P**roactive = **O**ld disrupts new.\n> - **R**etroactive = **N**ew disrupts old.\n\n**Comparing Availability vs Accessibility (Tulving & Pearlstone, 1966)**\n- **Decay** and **displacement** claim the trace has vanished (**availability problem**).\n- **Cue-dependent forgetting** and **repression** argue the trace still exists inside LTM (**accessibility problem**) — which explains why walking back into your kitchen suddenly reminds you what you came downstairs to fetch!\n\n**Evaluation Across Forgetting Theories**:\n- **Interference & Cue-Dependent studies** enjoy strong **experimental control** (lab word lists, matched diver groups), though memorising word lists can lack **mundane realism** (yet Baddeley & Hitch, 1977 confirmed RI in real rugby players recalling opponents from earlier matches depending on how many games intervened, not mere time elapsed!).\n- **Motivated forgetting (repression)** comes from rich clinical case studies (Freud; Williams, 1994 hospital trauma records) but suffers from **low falsifiability** — in a lab we cannot ethically traumatise participants, nor easily prove a forgotten trauma was *repressed* rather than forgotten through ordinary encoding failure or childhood amnesia.",
      diagram:
        '<svg viewBox="0 0 520 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Proactive Interference where Old Task 1 blocks New Task 2 versus Retroactive Interference where New Task 2 blocks Old Task 1, plus Context vs State cues"><rect x="14" y="16" width="240" height="88" rx="9" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/><text x="134" y="34" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Proactive Interference (PI)</text><rect x="28" y="46" width="76" height="34" rx="6" fill="#ffffff" stroke="#dc2626"/><text x="66" y="61" font-size="9" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">OLD Info</text><text x="66" y="73" font-size="8" text-anchor="middle" fill="#64748b" font-family="sans-serif">(French vocab)</text><line x1="104" y1="63" x2="156" y2="63" stroke="#dc2626" stroke-width="2.5"/><polygon points="156,63 148,58 148,68" fill="#dc2626"/><text x="130" y="56" font-size="8" font-weight="bold" text-anchor="middle" fill="#dc2626" font-family="sans-serif">BLOCKS →</text><rect x="158" y="46" width="82" height="34" rx="6" fill="#ffffff" stroke="#94a3b8" stroke-dasharray="3,2"/><text x="199" y="61" font-size="9" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">NEW Recall</text><text x="199" y="73" font-size="8" text-anchor="middle" fill="#64748b" font-family="sans-serif">(Spanish test)</text><text x="134" y="96" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Forward arrow: Past disrupts Present</text><rect x="266" y="16" width="240" height="88" rx="9" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/><text x="386" y="34" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">Retroactive Interference (RI)</text><rect x="280" y="46" width="82" height="34" rx="6" fill="#ffffff" stroke="#94a3b8" stroke-dasharray="3,2"/><text x="321" y="61" font-size="9" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">OLD Recall</text><text x="321" y="73" font-size="8" text-anchor="middle" fill="#64748b" font-family="sans-serif">(French test)</text><line x1="414" y1="63" x2="364" y2="63" stroke="#d97706" stroke-width="2.5"/><polygon points="364,63 372,58 372,68" fill="#d97706"/><text x="389" y="56" font-size="8" font-weight="bold" text-anchor="middle" fill="#b45309" font-family="sans-serif">← BLOCKS</text><rect x="416" y="46" width="76" height="34" rx="6" fill="#ffffff" stroke="#d97706"/><text x="454" y="61" font-size="9" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">NEW Info</text><text x="454" y="73" font-size="8" text-anchor="middle" fill="#64748b" font-family="sans-serif">(Spanish vocab)</text><text x="386" y="96" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">Backward arrow: Recent disrupts Old</text><rect x="14" y="116" width="492" height="84" rx="9" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.6"/><text x="260" y="135" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Cue-Dependent Retrieval Failure (Godden &amp; Baddeley, 1975 Divers)</text><text x="140" y="158" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#15803d" font-family="sans-serif">Matched Context (Land→Land / Wet→Wet)</text><text x="140" y="176" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d" font-family="sans-serif">High Recall (~36–40% higher)</text><line x1="260" y1="145" x2="260" y2="190" stroke="#94a3b8" stroke-width="1.5"/><text x="382" y="158" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#c2410c" font-family="sans-serif">Mismatched Context (Land→Wet / Wet→Land)</text><text x="382" y="176" font-size="11" font-weight="bold" text-anchor="middle" fill="#c2410c" font-family="sans-serif">Retrieval Failure (Missing external cues)</text></svg>',
      diagramCaption:
        "Top: Direction of interference in PI vs RI. Bottom: Context-dependent retrieval cues in Godden & Baddeley (1975).",
      workedExamples: [
        {
          title: "Diagnosing the exact type of forgetting from an exam stem",
          problem:
            "Rohan revises Psychology every evening in a silent bedroom while drinking chamomile tea. On exam morning, he drinks two strong espressos (heart racing, jittery) and sits in a huge echoing sports hall, where his mind goes blank on a study he knew well last night. Name TWO specific cue-dependent mechanisms explaining Rohan's retrieval failure.",
          steps: [
            "**Context-dependent forgetting**: His external physical environment changed from a quiet bedroom to an echoing sports hall, removing environmental cues encoded with the material.",
            "**State-dependent forgetting**: His internal physiological state shifted from calm/relaxed (chamomile) to high caffeine arousal (two espressos), mismatching internal encoding cues.",
          ],
          answer:
            "Context-dependent forgetting (external room mismatch) and state-dependent forgetting (internal physiological arousal mismatch).",
          yourTurn: {
            question:
              "Coach Lim learns the names of 15 new Year 7 swimmers in Term 2, and as a result she suddenly forgets the names of last year's squad who graduated. Is this proactive or retroactive interference? (Type one word: proactive or retroactive.)",
            answer: { type: "text", accept: ["retroactive", "retroactive interference"] },
            solution:
              "Retroactive interference — NEW Term 2 names worked backwards to disrupt recall of OLD squad names.",
          },
        },
      ],
      keyPoints: [
        "**Displacement** only explains forgetting from **STM** (limited to 7 ± 2 slots), never LTM.",
        "**Proactive interference**: **old** blocks **new**. **Retroactive interference**: **new** blocks **old**. Both peak when the two sets of material are **similar**.",
        "**Context-dependent** = external environment cues (Godden & Baddeley divers); **state-dependent** = internal mood/drug/physiological state cues.",
        "**Repression** = unconscious psychodynamic defence against trauma (hard to falsify scientifically).",
      ],
      whyItWorks:
        "Testing *which* memory failed (the older one or the newer one) and *whether a cue restores it* lets psychologists distinguish permanent trace loss from temporary retrieval blockages.",
      strategies: [
        "Always underline WHICH memory is being tested in interference questions (if the OLD memory fails, it is Retroactive; if the NEW memory fails, it is Proactive)",
        "Distinguish external context cues from internal physiological/emotional state cues",
      ],
      thinkDeeper:
        "Baddeley & Hitch (1977) asked rugby players at the end of a season to name teams they had played earlier. Players who missed several matches through injury remembered earlier opponents *much better* than players who played every week, even though identical calendar time had passed! Which theory of forgetting does that support, and which does it refute?",
    },
    {
      id: "brain-and-amnesia",
      heading: "Brain Structures in Memory & Amnesia",
      discovery: {
        problem:
          "Imagine a patient who cannot remember eating breakfast 15 minutes ago or recognise the doctor who tests him every single morning — yet each afternoon he traces a tricky five-pointed star seen only in a mirror faster and with fewer mistakes than the day before, while swearing he has *never seen the star puzzle in his life*! How can someone learn a new skill with 'no memory'?",
        idea:
          "That real patient was **H.M. (Henry Molaison)**, studied by **Scoville & Milner (1957)** and **Milner et al. (1968)**. Removing his **hippocampus** destroyed consolidation of **conscious declarative (episodic/semantic) LTM**, while his intact **cerebellum and basal ganglia** continued building **unconscious procedural (motor) LTM**!",
      },
      body:
        "Neuroscience shows that different types of memory are **localised** across distinct brain structures rather than stored in a single spot:\n\n| Brain Structure | Primary Memory Function | Effect of Damage |\n|---|---|---|\n| **Hippocampus** (medial temporal lobe) | **Consolidates** new **declarative / explicit** memories (**episodic** events & **semantic** facts) from STM into neocortical LTM; spatial navigation | Severe **anterograde amnesia** for new facts/events; STM and old childhood memories stay largely intact |\n| **Cerebellum & Basal Ganglia** | Stores **procedural / implicit** motor skills (cycling, mirror-drawing, playing piano) & motor conditioning | Impaired motor skill learning and coordination, even if conscious factual recall works |\n| **Amygdala** | Attaches **emotional significance** and fear conditioning to memories; boosts hippocampal consolidation of emotional events | Loss of emotional fear conditioning; emotional events are no longer remembered better than neutral ones |\n| **Prefrontal Cortex (PFC)** | Powers **Working Memory** (**central executive** attention), strategic retrieval, and source/prospective memory | Disorganised working memory, poor dual-tasking, and confabulation/source confusion |\n\n**Two Types of Amnesia**\n- **Anterograde Amnesia** (*antero* = forward/after): Inability to form or consolidate **new** long-term memories **after** brain injury. Undistracted STM (~18–30 s) often works, so the patient can hold a brief conversation until distracted.\n- **Retrograde Amnesia** (*retro* = backward/before): Loss of memories formed **before** brain injury. Usually **temporally graded** — memories from the months/years just before the trauma are lost (not yet fully consolidated in the neocortex), whereas distant childhood memories survive.\n\n**Compulsory Named Case Study — Milner et al. (1968) / Scoville & Milner (1957): Patient H.M.**\n- **Background**: At age 27 (1953), **Henry Molaison (H.M.)** underwent experimental **bilateral medial temporal lobectomy** (removing ~8 cm of tissue including two-thirds of both **hippocampi** and parts of the amygdala) to relieve incapacitating **epileptic seizures**.\n- **Research Method**: Longitudinal **clinical case study** spanning 50+ years using **methodological triangulation** — IQ tests, digit-span & **Corkin's (1968) mirror-drawing** experiments, cognitive interviews, observations, and later structural **MRI** + post-mortem brain histology.\n- **Key Findings**:\n  1. **IQ & STM intact**: H.M.'s IQ rose slightly (104 → 118 as seizures declined), and he held digits in STM normally as long as he rehearsed without interruption.\n  2. **Profound anterograde declarative amnesia**: He could **not** transfer new episodic events or semantic facts into LTM — he forgot his uncle's death repeatedly, reread the same magazine without recognition, and greeted Brenda Milner as a stranger for decades.\n  3. **Temporally graded retrograde amnesia**: He lost memories from roughly **1–11 years before surgery**, while childhood memories remained clear (proving the hippocampus *consolidates* LTMs rather than storing them forever).\n  4. **Intact procedural memory**: Across three days of **star mirror-drawing**, H.M.'s tracing errors dropped steeply from trial to trial (preserved **cerebellum/basal ganglia**), despite having **zero episodic recall** of ever practising the task!\n- **Evaluation**:\n  - **Strengths**: Rich, in-depth longitudinal data impossible to create experimentally due to **protection from harm**; high reliability via standardised cognitive tests and MRI verification; revolutionised psychology by proving **STM ≠ LTM** and **declarative ≠ procedural LTM**.\n  - **Limitations**: **Single-participant case study (`n = 1`)** of a man with severe chronic epilepsy and anti-epileptic drugs → **cannot generalise** automatically to healthy brains; surgical lesion extended beyond pure hippocampus; long-term familiarity risked **researcher bias**.",
      diagram:
        '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: Medial view of brain highlighting Prefrontal Cortex, Amygdala, Hippocampus and Cerebellum. Right: Timeline comparing Retrograde vs Anterograde Amnesia and H.M. mirror-drawing error curve"><rect x="12" y="14" width="246" height="192" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="135" y="32" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Brain Localisation of Memory</text><path d="M52,132 C42,88 76,48 136,46 C192,44 226,74 222,118 C220,142 198,154 178,154 L144,154 L132,182 L114,182 L118,152 C82,154 58,148 52,132 Z" fill="#e2e8f0" stroke="#475569" stroke-width="2"/><ellipse cx="78" cy="96" rx="22" ry="18" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/><text x="78" y="99" font-size="8" font-weight="bold" text-anchor="middle" fill="#1e40af" font-family="sans-serif">PFC (WM)</text><circle cx="122" cy="126" r="10" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/><text x="122" y="129" font-size="7.5" font-weight="bold" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Amyg</text><path d="M134,124 C150,114 170,122 166,136 C162,146 140,142 134,132 Z" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="152" y="111" font-size="8" font-weight="bold" text-anchor="middle" fill="#b45309" font-family="sans-serif">Hippocampus</text><ellipse cx="192" cy="162" rx="26" ry="16" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/><text x="192" y="165" font-size="8" font-weight="bold" text-anchor="middle" fill="#166534" font-family="sans-serif">Cerebellum</text><text x="135" y="198" font-size="8" text-anchor="middle" fill="#334155" font-family="sans-serif">Hippocampus: Episodic · Cerebellum: Procedural</text><rect x="268" y="14" width="240" height="92" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="388" y="32" font-size="10" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Retrograde vs Anterograde Amnesia</text><line x1="286" y1="68" x2="490" y2="68" stroke="#334155" stroke-width="2"/><line x1="388" y1="44" x2="388" y2="92" stroke="#dc2626" stroke-width="2.5"/><text x="388" y="42" font-size="8" font-weight="bold" text-anchor="middle" fill="#dc2626" font-family="sans-serif">INJURY / SURGERY</text><path d="M382,60 L300,60" stroke="#7c3aed" stroke-width="2.5"/><polygon points="300,60 307,56 307,64" fill="#7c3aed"/><text x="340" y="54" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#6d28d9" font-family="sans-serif">← Retrograde</text><text x="340" y="84" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Lost past memories</text><path d="M394,60 L476,60" stroke="#0284c7" stroke-width="2.5"/><polygon points="476,60 469,56 469,64" fill="#0284c7"/><text x="436" y="54" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#0369a1" font-family="sans-serif">Anterograde →</text><text x="436" y="84" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">Cannot form new LTM</text><rect x="268" y="114" width="240" height="92" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="388" y="131" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">H.M. Mirror-Drawing Errors (Day 1→3)</text><line x1="298" y1="186" x2="484" y2="186" stroke="#64748b" stroke-width="1.5"/><line x1="298" y1="186" x2="298" y2="140" stroke="#64748b" stroke-width="1.5"/><polyline points="312,144 350,160 390,173 430,180 470,183" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="312" cy="144" r="3" fill="#16a34a"/><circle cx="390" cy="173" r="3" fill="#16a34a"/><circle cx="470" cy="183" r="3" fill="#16a34a"/><text x="391" y="199" font-size="8" text-anchor="middle" fill="#166534" font-family="sans-serif">Errors drop → Procedural skill intact!</text></svg>',
      diagramCaption:
        "Left: Key memory brain regions. Top-right: Amnesia timeline relative to injury. Bottom-right: H.M.'s intact procedural learning curve.",
      workedExamples: [
        {
          title: "Explaining dissociated symptoms after brain injury",
          problem:
            "After a cycling head injury that damaged her medial temporal lobe (hippocampus), Nadia can still play Chopin waltzes on the piano and clearly recalls her Primary 6 graduation, yet she cannot remember what her neurologist told her five minutes ago. Explain all three observations using psychology concepts.",
          steps: [
            "**Cannot remember 5 minutes ago**: Hippocampal damage caused **anterograde amnesia** — she can no longer consolidate new declarative/episodic information from STM into LTM once STM's 18–30 s window passes.",
            "**Recalls Primary 6 graduation**: Remote childhood episodic memories were already consolidated across the **neocortex** long before the injury, sparing them from retrograde loss.",
            "**Still plays piano**: Playing Chopin is an automatic **procedural (motor) memory** stored in her undamaged **cerebellum and basal ganglia**.",
          ],
          answer:
            "Hippocampal damage causes anterograde amnesia for new episodic memories, while consolidated neocortical childhood memories and cerebellar procedural piano skills remain intact.",
          yourTurn: {
            question:
              "Which specific brain structure at the base/back of the brain coordinates automatic procedural motor memories like mirror-drawing and riding a bicycle?",
            answer: { type: "text", accept: ["cerebellum", "the cerebellum"] },
            solution:
              "The cerebellum (alongside the basal ganglia) underpins procedural motor skills, which remained intact in patient H.M.",
          },
        },
      ],
      keyPoints: [
        "**Hippocampus**: consolidates new **declarative (episodic/semantic)** LTMs; **Cerebellum**: stores **procedural (motor)** skills; **Amygdala**: emotional memory tagging; **Prefrontal cortex**: working memory.",
        "**Anterograde amnesia** = cannot form new LTMs *after* damage; **Retrograde amnesia** = loss of pre-existing LTMs *before* damage.",
        "**Milner et al. (1968) / Scoville & Milner on H.M.**: bilateral hippocampal surgery cured epilepsy seizures and left STM + procedural mirror-drawing intact, but caused permanent anterograde declarative amnesia.",
        "Case studies like H.M. offer deep longitudinal biological insight where experiments are **unethical**, though `n = 1` limits **population generalisability**.",
      ],
      whyItWorks:
        "In cognitive neuropsychology, a **dissociation** (where brain damage destroys Ability X while leaving Ability Y completely normal) is gold-standard biological proof that X and Y rely on separate neural systems.",
      strategies: [
        "Use chronological anchors: Retrograde = BEFORE injury; Anterograde = AFTER injury",
        "Always evaluate H.M. with BOTH strengths (ethical necessity, rich triangulation, MRI) and limits (n=1 epilepsy patient, low generalisability)",
      ],
      thinkDeeper:
        "Why did H.M.'s preserved childhood memories force neuroscientists to abandon the early assumption that the hippocampus is the permanent 'warehouse' where all episodic memories live forever?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Multi-Store Model (Atkinson & Shiffrin, 1968) — STM coding, capacity & duration",
        back: "**Coding**: Acoustic · **Capacity**: 7 ± 2 items/chunks (5–9) · **Duration**: 18–30 seconds without maintenance rehearsal.",
      },
      {
        front: "Multi-Store Model — LTM coding, capacity & duration",
        back: "**Coding**: Predominantly semantic (meaning) · **Capacity**: Potentially unlimited · **Duration**: Minutes up to a lifetime.",
      },
      {
        front: "Sensory Register — role & transfer mechanism",
        back: "Modality-specific buffer (iconic visual, echoic auditory) holding raw sensory input for <1–2 seconds; **attention** transfers selected input into STM.",
      },
      {
        front: "Murdock (1962) — aim, procedure & key finding",
        back: "103 psychology students heard 10–40 word lists and did immediate free recall → U-shaped **serial position curve** with **primacy** (rehearsed into LTM) and **recency** (still in STM).",
      },
      {
        front: "Central Executive (Working Memory Model)",
        back: "Modality-free attentional supervisor with limited processing capacity that directs focus and coordinates the slave systems.",
      },
      {
        front: "Phonological Loop & its two sub-components",
        back: "Verbal/acoustic slave system (~2 s speech): **phonological store** (*inner ear*) + **articulatory control process** (*inner voice* for sub-vocal rehearsal).",
      },
      {
        front: "Visuo-Spatial Sketchpad & Episodic Buffer",
        back: "**VSS** (*inner eye*): visual cache + inner scribe for shapes/locations (~3–4 objects). **Episodic Buffer** (Baddeley, 2000): modality-free integrator (~4 chunks) linking WM to LTM.",
      },
      {
        front: "Craik & Tulving (1975) — three levels & findings",
        back: "200 ms flashed words with unexpected recognition test: **Structural** (font case ~18%) < **Phonemic** (rhyme ~57%) < **Semantic** (sentence meaning ~81%+).",
      },
      {
        front: "Bartlett (1932) — Schema & Reconstructive Memory",
        back: "Remembering actively rebuilds past events by combining stored fragments with cultural **schemas** (*War of the Ghosts*): assimilation, levelling, sharpening, confabulation.",
      },
      {
        front: "Assimilation vs Levelling vs Sharpening vs Confabulation",
        back: "**Assimilation**: altering details to fit culture (*canoes→boats*). **Levelling**: dropping unfamiliar details. **Sharpening**: emphasising familiar details. **Confabulation**: unconsciously inventing plausible gap-fillers.",
      },
      {
        front: "Proactive vs Retroactive Interference",
        back: "**Proactive (PI)**: **OLD** memory disrupts **NEW** learning. **Retroactive (RI)**: **NEW** learning disrupts **OLD** memory. Strongest when material is similar.",
      },
      {
        front: "Context-Dependent vs State-Dependent Forgetting",
        back: "**Context-dependent**: external environment mismatch at recall (Godden & Baddeley divers). **State-dependent**: internal mood/physiological state mismatch at recall.",
      },
      {
        front: "Motivated Forgetting (Repression)",
        back: "Freud's psychodynamic explanation: threatening or traumatic memories are unconsciously pushed into the unconscious mind to protect the ego from anxiety.",
      },
      {
        front: "Hippocampus vs Cerebellum vs Amygdala in memory",
        back: "**Hippocampus**: consolidates new declarative (episodic/semantic) LTMs. **Cerebellum**: procedural motor skills. **Amygdala**: emotional memory significance.",
      },
      {
        front: "Anterograde vs Retrograde Amnesia",
        back: "**Anterograde**: inability to form **new** LTMs *after* brain damage. **Retrograde**: loss of pre-existing LTMs formed *before* brain damage.",
      },
      {
        front: "Milner et al. (1968) / Scoville & Milner — Patient H.M.",
        back: "Bilateral medial temporal/hippocampal surgery for epilepsy → intact STM & intact procedural mirror-drawing, mild graded retrograde amnesia, severe permanent **anterograde declarative amnesia**.",
      },
    ],
    mustKnow: [
      "Compare coding, capacity, and duration across Sensory Register, STM, and LTM in Atkinson & Shiffrin's Multi-Store Model.",
      "Describe Murdock's (1962) procedure and explain primacy, recency, and middle-list recall using STM and LTM.",
      "Explain all four components of Baddeley's Working Memory Model and apply dual-task interference to unfamiliar scenarios.",
      "Describe and evaluate Craik & Tulving's (1975) Levels of Processing study (structural, phonemic, semantic).",
      "Explain Bartlett's Theory of Reconstructive Memory (*War of the Ghosts*) and identify assimilation, levelling, sharpening, and confabulation.",
      "Distinguish decay, displacement, cue-dependent retrieval failure (context vs state), proactive vs retroactive interference, and repression.",
      "Identify the memory roles of the hippocampus, cerebellum, amygdala, and prefrontal cortex.",
      "Contrast anterograde and retrograde amnesia and evaluate Milner et al.'s (1968) longitudinal case study of patient H.M.",
      "Evaluate experimental memory studies (Murdock, Craik & Tulving) using internal validity vs mundane realism / ecological validity.",
      "Evaluate clinical case studies (H.M.) and naturalistic prose studies (Bartlett) using population generalisability, ethics, and control.",
    ],
    misconceptions: [
      {
        wrong:
          "Writing 'Proactive interference is when new information makes you forget old information' (reversing PI and RI).",
        right:
          "State the exact direction AND which memory fails: **Proactive interference** is when **previously learned (old)** information disrupts recall of **newly learned** information; **retroactive interference** is when **newly learned** information disrupts recall of **older** information.",
      },
      {
        wrong:
          "Writing 'Information moves from Sensory Register to STM by rehearsal' or 'STM capacity is unlimited'.",
        right:
          "Information transfers from the Sensory Register to STM via **attention** (not rehearsal!), and transfers from STM (`7 ± 2` chunks, `18–30 s`) to LTM via **maintenance/elaborative rehearsal**.",
      },
      {
        wrong:
          "Writing 'Displacement explains why we forget childhood memories in Long-Term Memory'.",
        right:
          "**Displacement** ONLY applies to **Short-Term Memory** because STM has a strict `7 ± 2` item capacity limit; LTM has potentially unlimited capacity, so LTM forgetting occurs via **interference**, **retrieval failure**, or **decay/repression**.",
      },
      {
        wrong:
          "Writing 'H.M. lost all his memory and could not learn anything new after his hippocampus was removed'.",
        right:
          "Specify the dissociation: H.M. suffered severe **anterograde amnesia for declarative (episodic/semantic) LTM**, while his **STM** (undistracted digit span), **distant childhood memories**, and **procedural motor learning** (mirror-drawing via the cerebellum) remained **intact**.",
      },
      {
        wrong:
          "Writing 'Confabulation in Bartlett's theory means witnesses deliberately lie to the police'.",
        right:
          "**Confabulation** is an **unconscious, honest** schema-driven process in which gaps in fragmented memory are filled with plausible details that *feel* genuinely remembered.",
      },
      {
        wrong:
          "Writing 'The recency effect happens because the last words were rehearsed into Long-Term Memory'.",
        right:
          "The **primacy effect** reflects early words rehearsed into **LTM**, whereas the **recency effect** occurs because the final few words are **still sitting in Short-Term Memory** at immediate recall.",
      },
      {
        wrong:
          "Confusing **anterograde** and **retrograde** amnesia by saying 'anterograde is forgetting your past life before the crash'.",
        right:
          "**Retrograde amnesia** is losing memories formed **before** brain injury; **anterograde amnesia** is the inability to consolidate **new** long-term memories **after** brain injury.",
      },
      {
        wrong:
          "Evaluating Murdock (1962) or Craik & Tulving (1975) by saying 'it was unethical because students had to memorise 20 words'.",
        right:
          "Evaluate lab memory studies with relevant methodological points: **low mundane realism / ecological validity** (artificial isolated word lists vs meaningful everyday events) and **unrepresentative university student samples**.",
      },
    ],
    examMistakes: [
      "Naming a model component (e.g. 'phonological loop') without **applying** it to the named character in the CIE 0266 scenario stem — always mention the character's exact task (e.g. 'Amira's podcast listening and essay reading both compete for her phonological loop').",
      "Mixing up **coding**, **capacity**, and **duration** in 1-mark or 2-mark STM/LTM comparison questions ('acoustic' is coding, '7 ± 2 items' is capacity, '18–30 seconds' is duration).",
      "Saying the **hippocampus permanently stores** all lifelong memories — in CIE 0266, emphasise that the hippocampus **encodes/consolidates** new declarative memories into cortical LTM.",
      "Confusing **context-dependent** cues (external physical room/underwater setting) with **state-dependent** cues (internal mood, tiredness, caffeine, or medication).",
      "Forgetting that Craik & Tulving (1975) used an **unexpected recognition** test (incidental learning) so participants could not deliberately rehearse shallow words.",
      "Giving generic 'small sample' criticisms without explaining **why** `n = 1` in H.M. matters (pre-existing severe epilepsy + medication means his brain may already have been atypically organised before surgery).",
      "Calling repression 'choosing not to think about an awkward memory' — conscious avoidance is **suppression**; Freudian **repression** is **unconscious**.",
      "Writing vague evaluation ('this study is good') instead of structured **Point → Evidence from procedure → Explain impact on validity/generalisability**.",
    ],
    mnemonics: [
      {
        topic: "Interference Direction (PI vs RI)",
        device: "P.O.R.N.",
        explanation:
          "**P**roactive = **O**ld disrupts new · **R**etroactive = **N**ew disrupts old.",
      },
      {
        topic: "Levels of Processing (Shallow → Deep)",
        device: "S → P → S (See → Pronounce → Sense)",
        explanation:
          "**S**tructural (how font *looks*) → **P**honemic (how rhyme *sounds*) → **S**emantic (what meaning makes *sense*).",
      },
      {
        topic: "Bartlett's Four Schema Distortions",
        device: "C.L.A.S.",
        explanation:
          "**C**onfabulation (invent gap-fillers) · **L**evelling (omit/shorten) · **A**ssimilation (fit own culture) · **S**harpening (exaggerate familiar bits).",
      },
      {
        topic: "Amnesia Direction",
        device: "R-Before / A-After",
        explanation:
          "**R**etrograde = *retro* (backwards **before** injury) · **A**nterograde = **A**fter injury (cannot make new LTM).",
      },
    ],
    realWorld: [
      {
        title: "Police Cognitive Interviews & Eyewitness Testimony",
        detail:
          "Detectives ask witnesses to mentally reinstate external **context** and internal **state** cues (Tulving) and report every fragment without guessing, countering Bartlett's **schema confabulation**.",
        emoji: "🕵️",
      },
      {
        title: "Beating Exam Cramming with Craik & Tulving",
        detail:
          "Re-reading highlighted notes is shallow **structural** processing; writing self-test answers in your own words and teaching a friend forces deep **semantic** elaboration (~81%+ retention).",
        emoji: "📚",
      },
      {
        title: "Cockpit & Hands-Free Driving Design",
        detail:
          "Aviation and car interfaces present lane warnings visually (visuo-spatial sketchpad) while delivering collision alerts audibly (phonological loop) to avoid single-channel Working Memory overload.",
        emoji: "✈️",
      },
      {
        title: "Chunking Singapore NRIC, OTPs & Phone Numbers",
        detail:
          "Banks split 16-digit card numbers into four 4-digit chunks (`4532 8910 ...`) so customers hold 4 chunks comfortably within Miller's **7 ± 2** STM capacity.",
        emoji: "🔢",
      },
      {
        title: "Dementia Rehabilitation via Preserved Procedural Memory",
        detail:
          "Just like patient H.M., patients with early hippocampal Alzheimer's disease often retain cerebellar **procedural** music and craft skills long after episodic recall declines.",
        emoji: "🎹",
      },
    ],
    videos: [
      {
        title: "Multi-Store Model & Murdock (1962) Serial Position Effect",
        channel: "Simply Psychology / Tutor2u Psychology",
        url: "https://www.youtube.com/results?search_query=multi+store+model+of+memory+murdock+1962+psychology",
      },
      {
        title: "Working Memory Model (Baddeley & Hitch) & Craik & Tulving (1975)",
        channel: "CrashCourse / Psych Boost",
        url: "https://www.youtube.com/results?search_query=working+memory+model+baddeley+craik+and+tulving+1975",
      },
      {
        title: "Bartlett's War of the Ghosts & Reconstructive Schemas",
        channel: "Psych Boost",
        url: "https://www.youtube.com/results?search_query=bartlett+war+of+the+ghosts+reconstructive+memory+schemas",
      },
      {
        title: "The Case of Patient H.M. (Henry Molaison) — Milner & Scoville",
        channel: "TED-Ed",
        url: "https://www.youtube.com/results?search_query=ted+ed+what+happens+when+you+remove+the+hippocampus+patient+hm",
      },
    ],
    formulas: [
      {
        name: "Atkinson & Shiffrin (1968) — Multi-Store Model",
        formula: "Sensory Register → (Attention) → STM [7±2, 18–30s, acoustic] → (Rehearsal) → LTM [unlimited, lifetime, semantic]",
        note: "Linear structural model; forgetting via decay/displacement in STM and interference/cue failure in LTM.",
      },
      {
        name: "Murdock (1962) — Serial Position Study",
        formula: "103 students · 10–40 word lists · Immediate free recall → Primacy (LTM) + Recency (STM) U-curve",
        note: "Compulsory named experimental study supporting separate STM and LTM stores.",
      },
      {
        name: "Baddeley & Hitch (1974 / 2000) — Working Memory Model",
        formula: "Central Executive → Phonological Loop + Visuo-Spatial Sketchpad + Episodic Buffer ↔ LTM",
        note: "Supported by dual-task studies and patient K.F.; replaces unitary STM.",
      },
      {
        name: "Craik & Tulving (1975) — Levels of Processing Study",
        formula: "60 words (200 ms) · Structural (~18%) < Phonemic (~57%) < Semantic (~81%+ unexpected recognition)",
        note: "Compulsory named experimental study showing deeper elaborative encoding yields durable memory.",
      },
      {
        name: "Bartlett (1932) — Reconstructive Memory & War of the Ghosts",
        formula: "Stored Fragments + Cultural Schemas → Assimilation, Levelling, Sharpening & Confabulation",
        note: "20 British participants; canoes became boats and supernatural elements were levelled out.",
      },
      {
        name: "Proactive vs Retroactive Interference",
        formula: "PI: Old learning blocks New recall · RI: New learning blocks Old recall",
        note: "Strongest when competing memories are semantically similar (McGeoch & McDonald, 1931).",
      },
      {
        name: "Cue-Dependent Retrieval Failure (Tulving)",
        formula: "Context-Dependent (external environment, Godden & Baddeley divers) + State-Dependent (internal state)",
        note: "Memory is available in LTM but temporarily inaccessible without matching encoding cues.",
      },
      {
        name: "Trace Decay vs Displacement",
        formula: "Decay = trace fades over time without rehearsal · Displacement = new items push old out of 7±2 STM",
        note: "Displacement applies strictly to limited-capacity STM, never unlimited LTM.",
      },
      {
        name: "Motivated Forgetting (Repression)",
        formula: "Traumatic/threatening LTM → Unconscious ego defence blocks conscious recall",
        note: "Psychodynamic theory (Freud); rich clinical insight but difficult to falsify experimentally.",
      },
      {
        name: "Hippocampus vs Cerebellum Dissociation",
        formula: "Hippocampus = Declarative LTM consolidation (episodic/semantic) · Cerebellum = Procedural motor LTM",
        note: "Amygdala tags emotional salience; Prefrontal Cortex coordinates Working Memory.",
      },
      {
        name: "Anterograde vs Retrograde Amnesia",
        formula: "Anterograde = cannot consolidate new LTM after injury · Retrograde = loss of LTM from before injury",
        note: "Retrograde amnesia is typically temporally graded (oldest cortical memories survive best).",
      },
      {
        name: "Milner et al. (1968) / Scoville & Milner — Patient H.M.",
        formula: "Bilateral hippocampal removal → Severe anterograde declarative amnesia + Intact STM & mirror-drawing",
        note: "Compulsory named longitudinal case study using triangulation (psychometrics, experiments, MRI).",
      },
    ],
  },
};
