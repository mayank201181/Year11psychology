import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "sleep-and-dreams",
  title: "Topic 2: Sleep & Dreams",
  strand: "Paper 1: Cognition, Behaviour & Experiments",
  icon: "🌙",
  summary:
    "Why we spend a third of our lives unconscious — EEG sleep architecture, SCN & melatonin clocks, restoration vs survival, sleep disorders, and why we dream.",
  intro:
    "Far from switching off at bedtime, the sleeping brain cycles through precision-timed electrical stages that repair tissue, consolidate memories, paralyse skeletal muscles, and weave vivid nocturnal stories. In Cambridge IGCSE Psychology (0266 Paper 1), you will trace **NREM Stages 1–3 and REM paradoxical sleep** on a hypnogram, explain how the **suprachiasmatic nucleus (SCN)** and **melatonin** drive the **24-hour circadian rhythm**, weigh **Oswald's Restoration Theory** (supported by **Robinson et al., 2018**) against **Meddis's Evolutionary Theory**, diagnose **insomnia** and **sleepwalking**, and contrast **Freud's wish-fulfilment** (**Iorio et al., 2020**) with **Hobson & McCarley's Activation-Synthesis** (**Williams et al., 1992**).",
  guide: [
    {
      id: "sleep-stages-eeg",
      heading: "Stages of Sleep, EEG Waves & Ultradian Cycles",
      discovery: {
        problem:
          "If a sleep scientist looks at two EEG brainwave printouts — one from a student solving a puzzle wide awake and one from a student fast asleep in the middle of a vivid dream — the two electrical traces look startlingly *similar*! How does the scientist prove from sensors alone which trace is awake and which is dreaming?",
        idea:
          "During **REM (Rapid Eye Movement) sleep**, brainwaves look fast and desynchronised like wakefulness, yet **EOG** sensors show darting eye bursts and **EMG** chin sensors show near-total **muscle atonia** (skeletal paralysis) — earning REM the name **paradoxical sleep**!",
      },
      body:
        "Sleep laboratories record physiological activity objectively using **polysomnography (PSG)**, combining three core measures:\n- **EEG (Electroencephalogram)**: scalp electrodes measuring brainwave **frequency** (cycles per second, **Hz**) and **amplitude** (wave height / voltage).\n- **EOG (Electrooculogram)**: tracks eye movements beside the eyelids.\n- **EMG (Electromyogram)**: measures skeletal muscle tone under the chin.\n\nAcross a typical night, we cycle through **three Non-REM (NREM) stages** and **REM sleep**:\n\n| State / Stage | Dominant EEG Pattern | Share of Adult Sleep | Physiological & Behavioural Features |\n|---|---|---|---|\n| **Awake (Alert → Relaxed)** | **Beta** (13–30 Hz, low amplitude) → **Alpha** (8–12 Hz, eyes shut) | — | Normal muscle tone, conscious awareness |\n| **NREM Stage 1** (Light transition) | **Theta** waves (4–7 Hz) replace alpha | ~5% | Slow rolling eye movements, heart rate & breathing slow, **hypnic jerks**; easily woken |\n| **NREM Stage 2** (Light sleep) | Theta waves + **sleep spindles** (12–14 Hz bursts) & **K-complexes** | ~45–50% | Core body temperature drops; spindles block external noise and aid memory consolidation |\n| **NREM Stage 3** (**Slow-Wave Sleep / SWS**) | High-amplitude, low-frequency **Delta** waves (0.5–4 Hz) | ~20–25% | Deepest physical rest; hardest to wake (**sleep inertia**); **Growth Hormone (GH)** surge; **sleepwalking** & night terrors occur here |\n| **REM Sleep** (**Paradoxical sleep**) | Fast, low-amplitude **beta/theta-like** waves (resembles waking EEG) | ~20–25% | Rapid eye movements, irregular heart rate/breathing, **muscle atonia** (brainstem motor paralysis), ~80% vivid narrative **dreaming** |\n\n**The ~90-Minute Ultradian Sleep Cycle & Night Hypnogram**\n- An **ultradian rhythm** repeats **more than once every 24 hours** (period shorter than 24 h). In adults, one full sleep cycle (`N1 → N2 → N3 → N2 → REM`) lasts roughly **90 minutes**, repeating **4 to 6 times** per 8-hour night.\n- **Shift across the night**: Early cycles (Hours 1–4) are rich in deep **NREM Stage 3 (SWS)** with short REM bouts (~10 min). Later cycles (Hours 5–8 before waking) contain very little SWS and progressively **longer REM episodes** (up to 30–60 min).\n\n**Classic Experimental Evidence — Dement & Kleitman (1957)**\n- Monitored **9 adults** (5 studied intensively across multiple nights) via laboratory EEG/EOG and woke them repeatedly during REM vs NREM.\n- Participants woken from **REM recalled vivid dreams ~79–80%** of the time, versus only **~7–9%** when woken from NREM, and REM duration correlated strongly with estimated dream narrative length.\n- **Evaluation**: High **objectivity and internal validity** (quantitative EEG/EOG avoids subjective guesswork), though sleeping wired to scalp electrodes in an unfamiliar lab lowers **ecological validity** (*'first-night effect'*).",
      diagram:
        '<svg viewBox="0 0 520 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: EEG waveforms from fast low-amplitude Beta and REM to high-amplitude slow Delta in Stage 3 SWS. Right: 8-hour adult hypnogram showing 5 ninety-minute ultradian cycles with deep SWS early and long REM late"><rect x="10" y="14" width="212" height="198" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="116" y="32" font-size="10" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">EEG Waveforms by Stage</text><text x="20" y="54" font-size="8.5" font-weight="bold" fill="#0369a1" font-family="sans-serif">Awake (Beta 13–30 Hz)</text><polyline points="20,66 28,60 36,72 44,61 52,71 60,60 68,72 76,62 84,70 92,60 100,72 108,61 116,71 124,60 132,72 140,62 148,70 156,61 164,71 172,60 180,72 188,62 196,70 206,63" fill="none" stroke="#0284c7" stroke-width="1.6"/><text x="20" y="92" font-size="8.5" font-weight="bold" fill="#7c3aed" font-family="sans-serif">NREM 1–2 (Theta + Spindles)</text><polyline points="20,108 32,100 44,116 56,101 68,115 74,97 79,119 84,96 89,119 94,98 100,115 114,102 128,114 142,92 150,122 162,104 176,114 190,102 206,112" fill="none" stroke="#7c3aed" stroke-width="1.6"/><text x="20" y="138" font-size="8.5" font-weight="bold" fill="#15803d" font-family="sans-serif">NREM 3 / SWS (Delta 0.5–4 Hz)</text><path d="M20,160 Q36,134 52,160 T84,160 T116,160 T148,160 T180,160 T208,160" fill="none" stroke="#15803d" stroke-width="2.2"/><text x="20" y="185" font-size="8.5" font-weight="bold" fill="#db2777" font-family="sans-serif">REM (Paradoxical + Muscle Atonia)</text><polyline points="20,198 29,192 38,203 47,193 56,202 65,191 74,203 83,193 92,202 101,192 110,203 119,192 128,202 137,193 146,203 155,192 164,202 173,193 182,203 194,193 206,201" fill="none" stroke="#db2777" stroke-width="1.7"/><rect x="232" y="14" width="278" height="198" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="371" y="32" font-size="10" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">8-Hour Ultradian Hypnogram (~90 min cycles)</text><line x1="274" y1="184" x2="498" y2="184" stroke="#475569" stroke-width="1.5"/><line x1="274" y1="48" x2="274" y2="184" stroke="#475569" stroke-width="1.5"/><text x="269" y="56" font-size="8" text-anchor="end" fill="#334155" font-family="sans-serif">Awake</text><text x="269" y="84" font-size="8" font-weight="bold" text-anchor="end" fill="#db2777" font-family="sans-serif">REM</text><text x="269" y="114" font-size="8" text-anchor="end" fill="#334155" font-family="sans-serif">N1/N2</text><text x="269" y="168" font-size="8" font-weight="bold" text-anchor="end" fill="#15803d" font-family="sans-serif">N3 SWS</text><polyline points="274,54 282,112 292,168 310,168 316,82 322,82 328,112 338,168 350,168 356,82 368,82 376,112 386,142 394,142 400,82 418,82 426,112 438,112 444,82 468,82 476,112 486,82 496,54" fill="none" stroke="#0e7490" stroke-width="2.2"/><rect x="315" y="76" width="8" height="10" fill="#fbcfe8" opacity="0.8"/><rect x="355" y="76" width="14" height="10" fill="#fbcfe8" opacity="0.8"/><rect x="399" y="76" width="20" height="10" fill="#fbcfe8" opacity="0.8"/><rect x="443" y="76" width="26" height="10" fill="#fbcfe8" opacity="0.8"/><text x="386" y="201" font-size="8.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Hours of Sleep (0h → 8h: SWS shrinks, REM lengthens)</text></svg>',
      diagramCaption:
        "Left: Progressive slowing and enlarging of EEG waves from Awake to NREM 3 (Delta SWS), then fast REM. Right: Five ~90-minute ultradian cycles across an 8-hour night.",
      workedExamples: [
        {
          title: "Calculating ultradian cycles and REM minutes across a night",
          problem:
            "A teenager sleeps continuously for 7.5 hours (450 minutes). Assuming each ultradian sleep cycle lasts 90 minutes and REM sleep makes up 22% of total sleep time, calculate: (a) how many complete ultradian cycles she completes, and (b) how many minutes she spends in REM sleep.",
          steps: [
            "(a) Number of ultradian cycles = 450 minutes ÷ 90 minutes per cycle = 5 complete cycles.",
            "(b) Minutes in REM = 22% of 450 = 0.22 × 450 = 99 minutes.",
          ],
          answer: "5 ultradian cycles and 99 minutes of REM sleep",
          yourTurn: {
            question:
              "An adult sleeps for 8 hours (480 minutes) and spends 25% of that time in NREM Stage 3 (Slow-Wave Sleep). How many minutes does he spend in Slow-Wave Sleep?",
            answer: { type: "number", value: 120 },
            solution: "25% of 480 minutes = 0.25 × 480 = 120 minutes (2 hours).",
          },
        },
      ],
      keyPoints: [
        "As sleep deepens from Awake → NREM 1 → NREM 2 → **NREM 3 (SWS)**, EEG **frequency falls** and **amplitude rises** (culminating in 0.5–4 Hz **delta waves**).",
        "**REM sleep** is **paradoxical**: fast waking-like EEG + rapid eye movements + vivid dreaming (~80%) paired with skeletal **muscle atonia**.",
        "The **~90-minute cycle** through NREM and REM is an **ultradian rhythm** (4–6 cycles/night), shifting from SWS-heavy early night to REM-heavy late night.",
        "Dement & Kleitman (1957) objectively linked REM sleep to vivid dreaming (~80% recall vs ~7–9% in NREM).",
      ],
      whyItWorks:
        "Brainstem **muscle atonia** during REM is an essential evolutionary safety lock: because motor cortex neurons fire vividly during dreams, temporarily disconnecting spinal motor neurons stops sleepers from physically sprinting or jumping out of windows!",
      strategies: [
        "Never confuse ultradian (~90-minute sleep-stage cycle) with circadian (~24-hour sleep-wake cycle)",
        "Remember the inverse EEG rule into deep sleep: Frequency goes DOWN while Amplitude goes UP",
      ],
      thinkDeeper:
        "Why does hitting 'snooze' or cutting an 8-hour sleep down to 6 hours disproportionately rob you of **REM sleep** much more than **Slow-Wave Sleep**?",
    },
    {
      id: "circadian-rhythms-scn",
      heading: "Circadian Rhythms, the SCN & Melatonin",
      discovery: {
        problem:
          "In 1962, French cave explorer **Michel Siffre** lived for two months deep inside a pitch-black glacial cavern with zero clocks, daylight, or radio. Did he start sleeping at completely random hours — or did his body keep a regular daily beat on its own?",
        idea:
          "Siffre's body kept a steady **free-running sleep-wake cycle of ~24.5 to 25 hours**! That proved humans possess a built-in **endogenous pacemaker** (**the SCN**), which external **daylight zeitgebers** normally reset by ~30–60 minutes every morning to match Earth's exact 24.0-hour spin.",
      },
      body:
        "A **circadian rhythm** (*circa* = about, *diem* = day) is any biological cycle repeating approximately every **24 hours**, most notably the **sleep-wake cycle** and core body temperature cycle.\n\nCircadian timing is governed by an interaction between **internal clocks** and **external cues**:\n\n| Mechanism | Technical Term | Key Structures / Examples & Function |\n|---|---|---|\n| **Internal Biological Clock** | **Endogenous Pacemaker** | **Suprachiasmatic Nucleus (SCN)** — master clock of ~20,000 neurons in the **hypothalamus** sitting directly above the **optic chiasm** |\n| **Hormonal Messenger** | **Pineal Gland & Melatonin** | In **darkness**, the SCN signals the **pineal gland** to secrete **melatonin** into the blood (inducing drowsiness); **bright/blue light** inhibits melatonin |\n| **External Resetting Cues** | **Exogenous Zeitgebers** (*'time-givers'*) | **Light** (primary cue hitting retinal ganglion cells → retinohypothalamic tract → SCN), plus social meal times, alarms, and exercise |\n\n**How Light, the SCN & Melatonin Regulate Sleep**\n1. **Morning daylight** enters the eyes (even through closed eyelids) → photosensitive retinal ganglion cells signal the **SCN** via the optic nerve.\n2. The **SCN inhibits the pineal gland**, shutting off **melatonin** production so alertness and body temperature rise.\n3. **Evening darkness** removes retinal inhibition → the **SCN stimulates the pineal gland** to release **melatonin** (peaking around 2:00–4:00 am), lowering alertness and initiating sleep.\n\n**Key Experimental & Naturalistic Evidence**\n- **Siffre (1962, 1972) Cave Isolation Case Studies**: Without exogenous zeitgebers, Siffre's sleep-wake cycle persisted endogenously at **~24.5–25 hours**, proving an internal pacemaker exists *and* showing zeitgebers are needed to entrain it to 24.0 hours.\n- **Ralph et al. (1990) Mutant Hamster SCN Transplants**: Transplanting SCN cells from mutant hamsters bred with a **20-hour** circadian cycle into normal 24-hour hamsters immediately shifted the host hamsters' sleep-wake cycle to **20 hours**, proving the SCN is the genetic master pacemaker (though animal physiology may not generalise identically to complex human social schedules).\n\n**Real-World Circadian Desynchronisation**\n- **Jet Lag**: Flying rapidly across time zones leaves the endogenous **SCN/melatonin** clock out of phase with local daylight zeitgebers, causing insomnia, daytime fatigue, and poor concentration. **Eastward flights** (e.g. London → Singapore, *shortening* the day = **phase advance**) take longer to recover from than **westward flights** (**phase delay**) because our ~24.5h clock naturally lengthens more easily than it compresses!\n- **Night-Shift Work**: Working under artificial light at 3:00 am and trying to sleep in bright morning daylight pits endogenous melatonin rhythms against exogenous cues, cutting sleep by 1–3 hours and raising accident errors.",
      diagram:
        '<svg viewBox="0 0 520 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Retina to Hypothalamic SCN to Pineal Gland Melatonin pathway comparing Daylight inhibition versus Darkness stimulation"><rect x="14" y="20" width="96" height="76" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="62" y="44" font-size="10" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">Exogenous</text><text x="62" y="58" font-size="10" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">Zeitgeber</text><text x="62" y="76" font-size="8.5" text-anchor="middle" fill="#78350f" font-family="sans-serif">Light / Darkness</text><text x="62" y="88" font-size="8" text-anchor="middle" fill="#78350f" font-family="sans-serif">hits Retina</text><line x1="110" y1="58" x2="156" y2="58" stroke="#d97706" stroke-width="2"/><polygon points="156,58 149,54 149,62" fill="#d97706"/><text x="133" y="50" font-size="8" text-anchor="middle" fill="#92400e" font-family="sans-serif">Optic nerve</text><rect x="158" y="20" width="128" height="76" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><text x="222" y="42" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">SCN (Master Clock)</text><text x="222" y="57" font-size="8.5" text-anchor="middle" fill="#0369a1" font-family="sans-serif">Endogenous Pacemaker</text><text x="222" y="71" font-size="8.5" text-anchor="middle" fill="#334155" font-family="sans-serif">in Hypothalamus</text><text x="222" y="85" font-size="8" text-anchor="middle" fill="#64748b" font-family="sans-serif">(Above optic chiasm)</text><line x1="286" y1="58" x2="332" y2="58" stroke="#0284c7" stroke-width="2"/><polygon points="332,58 325,54 325,62" fill="#0284c7"/><rect x="334" y="20" width="172" height="76" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/><text x="420" y="42" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Pineal Gland</text><text x="420" y="59" font-size="9" font-weight="bold" text-anchor="middle" fill="#5b21b6" font-family="sans-serif">Secretes Melatonin</text><text x="420" y="75" font-size="8.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Dark = HIGH melatonin (Sleepy)</text><text x="420" y="88" font-size="8.5" text-anchor="middle" fill="#c2410c" font-family="sans-serif">Bright/Blue light = INHIBITED</text><rect x="14" y="112" width="492" height="88" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="260" y="130" font-size="10" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">24-Hour Melatonin Hormone Curve (Normal vs Late Screen Exposure)</text><line x1="56" y1="184" x2="480" y2="184" stroke="#475569" stroke-width="1.5"/><path d="M60,180 L180,180 Q230,178 265,148 Q310,126 350,136 Q395,155 430,180 L476,180" fill="none" stroke="#7c3aed" stroke-width="2.5"/><path d="M60,180 L235,180 Q275,179 310,156 Q350,140 385,152 Q420,168 455,180 L476,180" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/><text x="95" y="196" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">12:00 Noon</text><text x="215" y="196" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">9:00 pm</text><text x="330" y="196" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">3:00 am Peak</text><text x="445" y="196" font-size="8" text-anchor="middle" fill="#475569" font-family="sans-serif">7:00 am Dawn</text><text x="275" y="142" font-size="8" font-weight="bold" fill="#7c3aed" font-family="sans-serif">Normal dark evening</text><text x="392" y="146" font-size="8" font-weight="bold" fill="#dc2626" font-family="sans-serif">Blue-light delay →</text></svg>',
      diagramCaption:
        "Top: Light → Retina → Hypothalamic SCN → Pineal Gland melatonin pathway. Bottom: Evening blue light delays the nocturnal melatonin surge.",
      workedExamples: [
        {
          title: "Calculating free-running circadian drift in cave isolation",
          problem:
            "In a cave isolation study modelled on Siffre (1962), a volunteer's endogenous sleep-wake cycle free-runs at 24.5 hours per cycle with zero daylight cues. After 28 cycles inside the cave, how many total hours have actually elapsed on the surface — and how many surface 24-hour days is that?",
          steps: [
            "Total elapsed hours = 28 cycles × 24.5 hours/cycle = 686 hours.",
            "Surface 24-hour days = 686 ÷ 24 ≈ 28.58 days (so the volunteer thinks only 28 days have passed when nearly 28.6 days have elapsed!).",
          ],
          answer: "686 hours (approx. 28.6 surface days)",
          yourTurn: {
            question:
              "If another cave participant has a free-running circadian cycle of exactly 25 hours, how many hours behind Earth's 24-hour clock does her bedtime drift after 12 cycles?",
            answer: { type: "number", value: 12 },
            solution: "She drifts by 25 − 24 = 1 hour per cycle; over 12 cycles, 12 × 1 = 12 hours (turning day completely upside down!).",
          },
        },
      ],
      keyPoints: [
        "**Circadian rhythm** = ~24-hour cycle (sleep-wake); **ultradian rhythm** = <24-hour cycle (~90-minute sleep stages).",
        "**Endogenous pacemaker**: the hypothalamic **SCN** acts as the master clock, signalling the **pineal gland** to secrete **melatonin** in darkness.",
        "**Exogenous zeitgebers**: external environmental cues — chiefly **light** — that entrain the ~24.5h free-running clock (Siffre) to 24.0 hours.",
        "Blue-light screens at night suppress melatonin (delaying sleep onset), and eastward jet lag (phase advance) disrupts circadian alignment.",
      ],
      whyItWorks:
        "Having an **internal clock (SCN)** lets your body start warming up and releasing cortisol *before* dawn wakes you, while keeping it **resettable by light (zeitgebers)** ensures you adapt smoothly as sunrise shifts across seasons and latitudes.",
      strategies: [
        "Trace the 4-step chain accurately in written answers: Light/Dark → Retina → SCN (hypothalamus) → Pineal gland (melatonin)",
        "Distinguish Endogenous (inside = SCN/melatonin) from Exogenous (outside = light/social cues)",
      ],
      thinkDeeper:
        "In Siffre's third cave stay at age 60 (1999), his free-running cycle occasionally stretched to 48 hours, and bright artificial lamps inside the cave could artificially shift his rhythm! What limit does artificial cave lighting place on early isolation studies?",
    },
    {
      id: "theories-of-sleep",
      heading: "Restoration vs Evolutionary Theories of Sleep",
      discovery: {
        problem:
          "Compare two facts: (1) Newborn human babies spend ~16 hours a day asleep — half of it in REM — while grazing giraffes sleep under 2 hours a night! (2) Bottlenose dolphins swim 24/7 to breathe air at the surface, so they evolved to put **one half of their brain into Slow-Wave Sleep at a time** while the other half steers! What do these two facts prove when combined?",
        idea:
          "Giraffes vs lions show **ecological predator risk** shapes *how long and safely* species can afford to sleep (**Meddis's Evolutionary Theory**), while dolphins refusing to abandon sleep altogether proves sleep performs vital **biological & brain repair** (**Oswald's Restoration Theory**)!",
      },
      body:
        "Why did sleep evolve? CIE 0266 contrasts two major explanations — **physiological repair** vs **ecological survival**:\n\n**1. Oswald's (1966, 1980) Restoration Theory of Sleep**\nOswald proposed that waking life depletes bodily energy, damages cells, and exhausts neurotransmitters, and that **different stages of sleep restore different systems**:\n- **NREM Slow-Wave Sleep (SWS / Stage 3) → Physical Body Restoration**: Surges of **Growth Hormone (GH)** from the pituitary gland drive **protein synthesis**, cell mitosis, muscle/tissue repair, and immune strengthening.\n- **REM Sleep → Brain Restoration**: Restores **neurotransmitters** (serotonin, norepinephrine, dopamine), supports **brain growth/synaptic plasticity**, and consolidates procedural/emotional memories.\n- **Key Supporting Evidence**:\n  - **Developmental REM decline**: Premature and newborn infants undergoing explosive brain growth spend **~50–75% of sleep in REM**, falling to ~20–25% in adults once brain wiring matures.\n  - **Sleep deprivation & rebound**: **Randy Gardner** stayed awake **264 hours (11 days)** (monitored by Dement, 1965), experiencing blurred vision, ataxia, paranoia, and short-term memory lapses — followed on recovery nights by a massive **SWS and REM rebound** (recovering a much higher proportion of deep SWS and REM than light N1/N2!). Extreme rat deprivation (**Rechtschaffen et al., 1983**) caused immune collapse and death.\n  - **Ultra-marathon runners** (**Shapiro et al., 1981**) slept ~90 minutes longer with significantly elevated **SWS** over two nights following a 92 km race.\n- **Compulsory Named Study — Robinson, Erath, Kana & El-Sheikh (2018): Adolescent Sleep Restriction (7T fMRI)**\n  - **Aim & Design**: To investigate how a **single night of restricted sleep** alters resting-state neurophysiological brain network efficiency in teenagers, using a **counterbalanced within-subjects crossover experiment** (`N = 18` healthy adolescents: 9 males, 9 females, aged **13–15 years**; scanned via ultra-high-field **7-Tesla fMRI** one week apart after an 8-hour normal sleep night vs an acute restricted-sleep night).\n  - **Key Findings**: Following a normal 8-hour night, adolescents showed significantly higher **global and local functional efficiency in the bilateral amygdala**, whereas a single night of sleep restriction disrupted **fronto-limbic connectivity** (networks linking prefrontal cortex and amygdala critical for emotional regulation).\n  - **Link to Restoration Theory**: Objective neuroimaging evidence that adequate nightly sleep restores neural efficiency in emotional-regulation circuits — even one restricted night degrades brain function (**strength**: high scientific objectivity & repeated-measures control of participant variables; **limitation**: small sample `N = 18` and artificial MRI scanner setting).\n- **Criticisms of Restoration Theory**:\n  - Moderate everyday exercise often fails to increase SWS (**Horne, 1988** proposed only SWS + part of REM is essential *'core sleep'* primarily for **cerebral** recovery rather than body muscles, since resting quietly in bed relaxes muscles without needing unconsciousness!).\n  - **Stress confounds deprivation studies** (rats knocked off rotating discs in Rechtschaffen's study died partly from severe stress, and Randy Gardner was a `n = 1` case study with no long-term harm).\n\n**2. Meddis's (1975) Evolutionary / Ecological (Adaptive Inactivity) Theory**\nMeddis argued sleep is **not** primarily for repair, but evolved via natural selection to keep animals alive across two survival pressures:\n- **Energy Conservation**: Dropping metabolic rate and body temperature during hours when hunting or foraging is inefficient saves precious calories (crucial for small warm-blooded mammals with high metabolic rates).\n- **Predator Avoidance ('Waste-of-Time' immobility)**: Keeping an animal **motionless, silent, and hidden** in a safe burrow or tree during hours when its sensory vision is weakest reduces predation risk.\n\n| Feature | Oswald's Restoration Theory | Meddis's Evolutionary Theory |\n|---|---|---|\n| **Core Purpose** | Biological tissue repair (SWS) & brain/neurotransmitter recovery (REM) | Energy conservation & staying still/hidden from predators |\n| **Strongest Evidence** | Infant 50% REM, Randy Gardner SWS/REM rebound, marathon SWS surge | **Allison & Cicchetti (1976)**: safe predators (lions ~14–16h, brown bats ~19h) sleep far longer than exposed prey (giraffes/horses ~2–3h) |\n| **Biggest Weakness** | Resting quietly saves muscles without needing sleep; moderate exercise barely alters SWS | Deep sleep makes animals **less responsive** to predators; **unihemispheric sleep in dolphins** proves sleep cannot simply be dropped even when dangerous |\n\n> **Synoptic Integration (Horne, 1988)**: Rather than an either/or battle, **core sleep** (SWS + REM) fulfils **brain restoration**, while **optional sleep** (lighter NREM) reflects **evolutionary** energy and predator-avoidance adaptation.",
      diagram:
        '<svg viewBox="0 0 520 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Oswald Restoration Theory SWS physical repair and REM brain restoration on the left versus Meddis Evolutionary Theory predator-prey sleep hours on the right"><rect x="12" y="14" width="244" height="188" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><text x="134" y="34" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#14532d" font-family="sans-serif">Oswald: Restoration Theory</text><rect x="24" y="46" width="220" height="58" rx="7" fill="#ffffff" stroke="#86efac"/><text x="134" y="63" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#166534" font-family="sans-serif">NREM Stage 3 (SWS) → BODY</text><text x="134" y="78" font-size="8.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Growth Hormone surge · Protein synthesis</text><text x="134" y="92" font-size="8.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Tissue repair &amp; immune recovery</text><rect x="24" y="112" width="220" height="58" rx="7" fill="#ffffff" stroke="#86efac"/><text x="134" y="129" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#db2777" font-family="sans-serif">REM Sleep → BRAIN</text><text x="134" y="144" font-size="8.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Neurotransmitter replenishment · Infant 50% REM</text><text x="134" y="158" font-size="8.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Synaptic plasticity &amp; memory consolidation</text><text x="134" y="189" font-size="8" font-weight="bold" text-anchor="middle" fill="#14532d" font-family="sans-serif">Evidence: Gardner (264h) SWS/REM Rebound</text><rect x="266" y="14" width="242" height="188" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="387" y="34" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">Meddis: Evolutionary Theory</text><text x="387" y="50" font-size="8.5" text-anchor="middle" fill="#78350f" font-family="sans-serif">Energy Conservation + Predator Avoidance</text><text x="280" y="74" font-size="8.5" font-weight="bold" fill="#0f172a" font-family="sans-serif">Brown Bat (safe cave)</text><rect x="382" y="64" width="108" height="13" rx="3" fill="#d97706"/><text x="486" y="74" font-size="8" text-anchor="end" fill="#ffffff" font-family="sans-serif">19.9h</text><text x="280" y="100" font-size="8.5" font-weight="bold" fill="#0f172a" font-family="sans-serif">Lion (apex predator)</text><rect x="382" y="90" width="82" height="13" rx="3" fill="#f59e0b"/><text x="460" y="100" font-size="8" text-anchor="end" fill="#ffffff" font-family="sans-serif">15.0h</text><text x="280" y="126" font-size="8.5" font-weight="bold" fill="#0f172a" font-family="sans-serif">Human (shelter)</text><rect x="382" y="116" width="44" height="13" rx="3" fill="#0284c7"/><text x="432" y="126" font-size="8" fill="#0f172a" font-family="sans-serif">8.0h</text><text x="280" y="152" font-size="8.5" font-weight="bold" fill="#0f172a" font-family="sans-serif">Giraffe (open prey)</text><rect x="382" y="142" width="12" height="13" rx="3" fill="#dc2626"/><text x="400" y="152" font-size="8" fill="#dc2626" font-family="sans-serif">1.9h</text><text x="387" y="176" font-size="8" text-anchor="middle" fill="#78350f" font-family="sans-serif">Allison &amp; Cicchetti (1976) Cross-Species Data</text><text x="387" y="190" font-size="8" font-weight="bold" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Limit: Dolphin unihemispheric sleep = vital need!</text></svg>',
      diagramCaption:
        "Left: Oswald's division of physical (SWS) vs neural (REM) restoration. Right: Comparative animal sleep durations supporting ecological predator constraints.",
      workedExamples: [
        {
          title: "Comparing REM proportion in newborns vs adults (Oswald's evidence)",
          problem:
            "A newborn baby sleeps 16 hours a day with 50% REM sleep, whereas a 30-year-old adult sleeps 8 hours a day with 25% REM sleep. How many times more hours of REM sleep per day does the newborn get than the adult — and how does Oswald explain this?",
          steps: [
            "Newborn REM hours = 50% of 16 h = 8 hours/day.",
            "Adult REM hours = 25% of 8 h = 2 hours/day.",
            "Ratio = 8 ÷ 2 = 4 times more REM sleep per day, which Oswald links to rapid neonatal brain growth, protein synthesis, and synaptic maturation.",
          ],
          answer: "4 times as many REM hours (8 h vs 2 h), supporting REM's role in brain growth and restoration.",
          yourTurn: {
            question:
              "Randy Gardner stayed awake for 264 hours continuously. How many full 24-hour days is 264 hours?",
            answer: { type: "number", value: 11 },
            solution: "264 ÷ 24 = 11 full days.",
          },
        },
      ],
      keyPoints: [
        "**Oswald's Restoration Theory**: **SWS** restores the **physical body** (Growth Hormone, protein synthesis, tissue repair) while **REM** restores the **brain** (neurotransmitters, infant brain growth, memory).",
        "**Robinson et al. (2018)** (18 adolescents, 13–15 yrs, 7T fMRI crossover): one night of restricted sleep reduced bilateral **amygdala** network efficiency and disrupted **fronto-limbic** emotional circuitry — objective neuroimaging support for **Restoration Theory**.",
        "**Meddis's Evolutionary Theory**: sleep conserves **metabolic energy** and enforces **immobility/hiding** when predation risk is highest.",
        "Comparative animal data (**Allison & Cicchetti, 1976**) supports ecological constraints (exposed prey like giraffes/horses sleep ~2–3h vs safe predators ~15–20h).",
        "Dolphin **unihemispheric sleep** and post-deprivation **SWS/REM rebound** show sleep cannot be reduced purely to 'hiding quietly' — brain restoration is essential.",
      ],
      whyItWorks:
        "Pairing Restoration and Evolutionary theories solves each theory's blind spot: **Restoration** explains *why* every vertebrate brain needs sleep at all, while **Evolutionary** ecology explains *why* a bat sleeps 20 hours and a giraffe sleeps 2!",
      strategies: [
        "Always split Oswald into two halves for full marks: SWS = physical/GH vs REM = brain/neurotransmitters",
        "Use dolphin unihemispheric sleep as your sharp counter-argument against pure Evolutionary Theory",
      ],
      thinkDeeper:
        "Sloths have a very slow metabolism AND sleep ~10 hours in the wild (less than captive lab sloths at ~16 hours!). Why does comparing wild vs captive animals matter for the **ecological validity** of evolutionary sleep databases?",
    },
    {
      id: "sleep-disorders-hygiene",
      heading: "Insomnia, Parasomnias & Sleep Hygiene",
      discovery: {
        problem:
          "Popular cartoons show sleepwalkers strolling down the corridor with arms stretched out *while acting out a vivid REM dream*, and warn you never to wake them or they'll have a heart attack! Spot **two** scientific myths hidden in that cartoon.",
        idea:
          "First, **sleepwalking (somnambulism)** happens in **deep NREM Stage 3 (Slow-Wave Sleep)** — *never* in REM, where **muscle atonia** paralyses your limbs! Second, waking a sleepwalker won't cause a heart attack, though deep delta **sleep inertia** leaves them disoriented (gently guiding them back to bed is safest).",
      },
      body:
        "Sleep disorders split broadly into **dyssomnias** (abnormalities in the amount, quality, or timing of sleep, like **insomnia**) and **parasomnias** (unusual motor or autonomic behaviours intruding into sleep, like **sleepwalking**):\n\n**1. Insomnia**\n**Insomnia** is persistent difficulty initiating or maintaining restorative sleep despite adequate sleep opportunity, causing significant **daytime dysfunction** (fatigue, poor attention, mood irritability, slower reaction time; chronic when occurring `≥ 3 nights/week` for `≥ 3 months`).\n- **Sleep-Onset Insomnia**: Trouble **falling asleep** at the start of the night (often taking `> 30–45 minutes`), commonly driven by **cognitive hyperarousal** (exam worry/anxiety), late **caffeine**, or evening **blue-light melatonin suppression**.\n- **Sleep-Maintenance Insomnia**: Trouble **staying asleep** — waking repeatedly during the night or waking far too early and being unable to return to sleep (linked to pain, sleep apnoea, alcohol rebound, depression, or ageing).\n- **Primary vs Secondary Insomnia**: **Primary** insomnia arises independently (e.g. learned classical conditioning associating one's bed with frustration and tossing/turning); **secondary (comorbid)** insomnia stems from an underlying medical illness, chronic pain, psychiatric disorder, or shift work.\n\n**2. Sleepwalking (Somnambulism — NREM Parasomnia)**\n- **When it occurs**: Specifically during **NREM Stage 3 (Slow-Wave Sleep / delta waves)** in the **first third of the night**.\n- **Symptoms**: Partial arousal from SWS — sitting up with blank glassy eyes, walking around, performing routine motor habits (opening cupboards, dressing) with slow responsiveness, disorientation if woken, and **complete amnesia** for the episode next morning.\n- **Causes & Risk Factors**:\n  - **Incomplete neural arousal**: Motor regions switch on while prefrontal conscious awareness stays in delta sleep (much commoner in **children ~10–15%** than adults ~1–4% due to higher childhood SWS and maturing GABA inhibitory pathways).\n  - **Genetic heritability**: Twin & family studies (**Lecendreux et al. / Hublin et al.**) show **~5× higher concordance in monozygotic (MZ)** than dizygotic (DZ) twins; ~45–60% risk if both parents sleepwalked.\n  - **Environmental triggers**: **Prior sleep deprivation** (triggers deeper SWS rebound!), psychological stress, fever, noisy interruptions, or sedative medications.\n\n**3. Evidence-Based Sleep Hygiene**\n\n| Sleep Hygiene Practice | Psychological / Biological Mechanism |\n|---|---|\n| **Fixed wake-up & bedtime** (even weekends) | Entrains the **hypothalamic SCN** circadian pacemaker, preventing 'social jet lag' |\n| **Switch off blue-light screens 60–90 min pre-bed** | Prevents retinal inhibition of the **pineal gland**, allowing nocturnal **melatonin** to rise |\n| **Avoid caffeine 6+ hours & alcohol before bed** | Caffeine blocks drowsiness **adenosine** receptors (half-life ~5 h); alcohol fragments **REM** causing maintenance awakenings |\n| **Cool (~18 °C), dark, quiet bedroom** | Mimics natural evening core temperature drop and removes exogenous light/noise arousal |\n| **Stimulus Control (bed = sleep only)** | Breaks learned association (*classical conditioning*) between the bed and anxious wakefulness/scrolling |",
      diagram:
        '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Sleep-Onset Insomnia, Sleep-Maintenance Insomnia, and NREM Stage 3 Somnambulism across an 8-hour night alongside 5 Sleep Hygiene pillars"><rect x="12" y="14" width="268" height="182" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="146" y="32" font-size="10" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Where Sleep Disorders Strike Across the Night</text><rect x="24" y="44" width="244" height="40" rx="6" fill="#fee2e2" stroke="#dc2626"/><text x="32" y="60" font-size="9" font-weight="bold" fill="#991b1b" font-family="sans-serif">Sleep-Onset Insomnia (Hours 0–1.5):</text><text x="32" y="74" font-size="8" fill="#334155" font-family="sans-serif">High anxiety / caffeine / blue light blocks sleep start</text><rect x="24" y="92" width="244" height="40" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="32" y="108" font-size="9" font-weight="bold" fill="#92400e" font-family="sans-serif">Maintenance Insomnia (Hours 2–6):</text><text x="32" y="122" font-size="8" fill="#334155" font-family="sans-serif">Repeated night awakenings / early waking</text><rect x="24" y="140" width="244" height="44" rx="6" fill="#dcfce7" stroke="#15803d"/><text x="32" y="156" font-size="9" font-weight="bold" fill="#166534" font-family="sans-serif">Sleepwalking / Somnambulism (First 1/3 night):</text><text x="32" y="170" font-size="8" fill="#334155" font-family="sans-serif">Incomplete arousal from NREM Stage 3 (Delta SWS) —</text><text x="32" y="180" font-size="8" font-weight="bold" fill="#dc2626" font-family="sans-serif">NEVER during REM (muscle atonia!)</text><rect x="290" y="14" width="218" height="182" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/><text x="399" y="32" font-size="10" font-weight="bold" text-anchor="middle" fill="#075985" font-family="sans-serif">5 Pillars of Sleep Hygiene</text><text x="304" y="56" font-size="8.5" font-weight="bold" fill="#0f172a" font-family="sans-serif">1. Fixed Wake Time → Entrain SCN</text><text x="304" y="82" font-size="8.5" font-weight="bold" fill="#0f172a" font-family="sans-serif">2. No Screens 60–90m → Melatonin rises</text><text x="304" y="108" font-size="8.5" font-weight="bold" fill="#0f172a" font-family="sans-serif">3. Cut Caffeine 6h+ → Unblock adenosine</text><text x="304" y="134" font-size="8.5" font-weight="bold" fill="#0f172a" font-family="sans-serif">4. Cool Dark Room (~18°C) → Thermal drop</text><text x="304" y="160" font-size="8.5" font-weight="bold" fill="#0f172a" font-family="sans-serif">5. Bed = Sleep Only → Stimulus control</text><text x="399" y="184" font-size="8" text-anchor="middle" fill="#0369a1" font-family="sans-serif">Targets biological + cognitive causes!</text></svg>',
      diagramCaption:
        "Left: Timing & physiological mechanisms of onset insomnia, maintenance insomnia, and SWS sleepwalking. Right: Mechanism-linked sleep hygiene rules.",
      workedExamples: [
        {
          title: "Designing a targeted sleep-hygiene plan for a student",
          problem:
            "Jayden (age 16) drinks an iced coffee at 7:30 pm, revises on his laptop sitting on his bed until 11:45 pm, then lies awake staring at the ceiling until 1:30 am (**sleep-onset insomnia**), sleeping in until 11:30 am on Sundays. Recommend **three** specific sleep-hygiene changes and explain the **psychological or biological mechanism** behind each.",
          steps: [
            "**Stop caffeine by mid-afternoon (~2:00 pm)**: Caffeine has a ~5–6 h half-life and blocks drowsiness receptors, delaying sleep onset.",
            "**Turn off laptop screens 60–90 min before bed & move revision to a desk**: Eliminating late blue light restores **pineal melatonin** release, and keeping the bed strictly for sleep (**stimulus control**) breaks the conditioned association between bed and anxious studying.",
            "**Keep a consistent wake time even on Sundays**: Prevents weekend circadian phase delay in the **SCN**.",
          ],
          answer:
            "Cut evening caffeine, stop pre-bed blue-light screens + study at a desk (melatonin + stimulus control), and anchor Sunday wake time (SCN entrainment).",
          yourTurn: {
            question:
              "During which numbered NREM sleep stage (`1`, `2`, or `3`) does sleepwalking (somnambulism) occur?",
            answer: { type: "number", value: 3 },
            solution:
              "NREM Stage 3 (Slow-Wave Sleep / delta waves) in the first third of the night — never in REM!",
          },
        },
      ],
      keyPoints: [
        "Distinguish **sleep-onset insomnia** (difficulty falling asleep) from **sleep-maintenance insomnia** (night awakenings / early waking) and **primary** vs **secondary** causes.",
        "**Sleepwalking (somnambulism)** is an incomplete arousal from **NREM Stage 3 (Slow-Wave Sleep)**, NOT REM sleep (REM has muscle atonia).",
        "Sleepwalking has a strong **genetic predisposition** (higher MZ twin concordance & childhood SWS levels) triggered by **sleep deprivation** (SWS rebound), stress, or fever.",
        "In CIE 0266 advice questions, always link each **sleep hygiene** rule to its **mechanism** (SCN, pineal melatonin, caffeine arousal, or stimulus-control conditioning).",
      ],
      whyItWorks:
        "Generic advice like *'just try harder to fall asleep'* backfires by increasing sympathetic arousal! Sleep hygiene works because it removes biological blockers (blue light, caffeine) and retrains classical conditioning cues (**bed = sleep**).",
      strategies: [
        "Pair every sleep-hygiene tip with 'BECAUSE...' naming melatonin, SCN, or stimulus control",
        "Highlight why sleepwalking CANNOT be REM dream enactment (REM muscle atonia paralyses limbs)",
      ],
      thinkDeeper:
        "Why does pulling an all-nighter on Friday ironically make a child who is genetically prone to sleepwalking *much more likely* to sleepwalk on Saturday night?",
    },
    {
      id: "dream-theories",
      heading: "Freudian vs Activation-Synthesis Dream Theories",
      discovery: {
        problem:
          "Suppose you dream of trying to board an MRT train whose doors slam shut while your schoolbag bursts open into hundreds of fluttering white moths. Would **Sigmund Freud (1900)** and neurobiologists **Hobson & McCarley (1977)** agree on *why* your sleeping brain produced that bizarre scene?",
        idea:
          "Not at all! **Freud** would treat the train and moths as disguised **manifest symbols** concealing a repressed unconscious **latent wish**, whereas **Hobson & McCarley** would argue random electrical spikes from your **brainstem pons** hit visual/motor cortex and your **forebrain** simply improvised the best story it could!",
      },
      body:
        "Why do we dream, and do dreams carry hidden psychological meaning? CIE 0266 contrasts **psychodynamic**, **neurobiological**, and **contemporary trauma/continuity** accounts:\n\n**1. Freud's (1900) Psychoanalytic Dream Theory (*Wish-Fulfilment*)**\nFreud called dreams *'the royal road to the unconscious'*. During sleep, ego defences relax slightly, allowing repressed instinctual desires (**id** impulses — unacceptable, aggressive, or childhood wishes) to push towards awareness. To protect sleep without shocking the conscious ego awake, **dreamwork** disguises the true wish:\n- **Manifest Content**: The literal surface storyline and imagery recalled upon waking (e.g. missing a train with moths flying out).\n- **Latent Content**: The hidden, repressed **unconscious wish or conflict** underneath the disguise.\n- **Dreamwork Mechanisms** (transforming *latent → manifest*):\n  - **Condensation**: Compressing multiple unconscious ideas/people into a single dream figure.\n  - **Displacement**: Shifting strong emotion from the true taboo target onto a neutral, trivial detail.\n  - **Symbolism**: Turning abstract repressed impulses into concrete visual objects.\n  - **Secondary Elaboration**: Weaving disjointed dream images into a tidy narrative upon waking.\n- **Evaluation of Freud**: Recognised that dreams reflect personal emotional life (partially echoed by **Solms, 2000**, who found forebrain motivational dopamine damage abolishes dreaming!). **Limitations**: Scientifically **unfalsifiable** (if a patient rejects an interpretation, an analyst can claim 'resistance'), relies on **subjective clinical case studies** (*Little Hans*, *Wolf Man*) prone to **researcher bias** and cultural bias, and fails to explain undisguised **trauma nightmares**.\n\n**2. Hobson & McCarley's (1977) Activation-Synthesis Theory**\nA bottom-up **neurobiological** explanation grounded in REM brain physiology:\n1. **Activation**: Every ~90 minutes in REM sleep, cholinergic neurons in the **pons (brainstem)** fire rhythmic, largely random bursts (**PGO waves** — ponto-geniculo-occipital spikes) upward to the **occipital visual cortex** and **limbic emotional centres**, while spinal motor neurons are inhibited (**muscle atonia**).\n2. **Synthesis**: The waking-like **forebrain / cerebral cortex** tries to make sense of this chaotic internal bombardment by automatically stitching (*synthesising*) activated memories and images into a narrative — explaining why dreams are visually vivid yet bizarre and jump illogically!\n- **Evaluation**: Objectively **testable** via EEG, PET scans, and animal recordings; neatly explains dream bizarreness (e.g. dreaming of trying to run in treacle mirrors the brain firing motor commands against **REM muscle atonia**!). **Limitations**: **Biologically reductionist** — dismisses clear personal/emotional patterns in recurring dreams; **Solms (2000)** found patients with **brainstem pons lesions** *still dreamed*, whereas patients with **forebrain (ventromedial prefrontal/parietal) lesions** stopped dreaming despite normal REM sleep!\n- **Compulsory Named Study — Williams, Merritt, Rittenhouse & Hobson (1992): Bizarreness in Dreams vs Waking Fantasies**\n  - **Aim & Sample**: To test **Activation-Synthesis Theory's** prediction that REM dreams are significantly more bizarre than spontaneous waking fantasies, using **12 adult Harvard Extension biopsychology students** (2 males, 10 females, aged **23–45 years**).\n  - **Procedure**: Participants kept home logs recording both remembered night-time **dreams** and spontaneous daytime **waking fantasies** across an academic term. Researchers compiled **120 reports** (**60 dream / 60 waking-fantasy pairs**) and **blind independent judges** scored them using Hobson's standardised two-stage bizarreness scale (**discontinuities** in time/place/action, **incongruities**, and **uncertainties**).\n  - **Key Findings**: Bizarreness was **twice as prevalent in dream reports** as in wake-state fantasy reports from the same participants, with greater spatial/temporal remoteness and character shifts — supporting **Hobson & McCarley's** claim that dream bizarreness arises from state-dependent chaotic REM neural activation rather than everyday imagination (**strength**: blind scoring boosts inter-rater reliability & high naturalistic home validity; **limitation**: tiny biased sample `N = 12`, mostly female university students, plus retrospective self-report recall limits).\n\n**3. Compulsory Named Study — Iorio, Sommantico & Parrello (2020): Pandemic & Trauma Dreaming**\n- **Aim**: To examine how collective trauma, isolation, and anxiety during Italy's strict Spring 2020 **COVID-19 lockdown** shaped dream recall, emotional tone, and manifest dream themes.\n- **Sample & Procedure**: **796 Italian adults/university students** completed an online self-report questionnaire measuring COVID-19 exposure and distress alongside the **Most Recent Dream** method (writing out their latest dream in full + rating emotional intensity and sensory vividness). Analysed both **quantitatively** (statistical comparisons) and **qualitatively** (thematic cluster analysis).\n- **Key Findings**:\n  - **Women** and participants who knew someone infected/deceased by COVID-19 reported **higher dream recall**, **higher negative dream emotions** (fear, anxiety, sadness, helplessness), and stronger sensory vividness.\n  - Manifest dream narratives directly mirrored waking pandemic fears — **trapped/dangerous enclosed spaces**, **contagion/illness**, **separation from loved ones**, and **mourning** — supporting the **continuity hypothesis** and trauma emotional-processing rather than purely random brainstem noise or disguised childhood wishes!\n- **Evaluation**: High **ecological validity** capturing real collective trauma + rich **mixed-methods** data (quantitative ratings + qualitative narratives) in a large sample (`N = 796`). **Limitations**: **Retrospective waking self-report** risks forgetting/reconstructive distortion; **online volunteer sample** (predominantly female Italian students) introduces **gender and ethnocentric sampling bias**.",
      diagram:
        '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-column comparison of Freud Dreamwork Latent to Manifest, Hobson and McCarley Brainstem Pons Activation to Forebrain Synthesis, and Iorio et al. 2020 Pandemic Continuity Dreaming"><rect x="10" y="14" width="160" height="192" rx="9" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/><text x="90" y="32" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#4c1d95" font-family="sans-serif">Freud (1900)</text><text x="90" y="45" font-size="8" text-anchor="middle" fill="#5b21b6" font-family="sans-serif">Psychoanalytic Wish-Fulfilment</text><rect x="22" y="56" width="136" height="34" rx="6" fill="#ffffff" stroke="#a78bfa"/><text x="90" y="71" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Latent Content</text><text x="90" y="83" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">(Hidden unconscious wish)</text><line x1="90" y1="90" x2="90" y2="122" stroke="#7c3aed" stroke-width="2"/><polygon points="90,122 86,115 94,115" fill="#7c3aed"/><text x="90" y="110" font-size="7.5" font-weight="bold" text-anchor="middle" fill="#6d28d9" font-family="sans-serif">Dreamwork disguise</text><rect x="22" y="124" width="136" height="34" rx="6" fill="#ffffff" stroke="#a78bfa"/><text x="90" y="139" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Manifest Content</text><text x="90" y="151" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">(Recalled surface story)</text><text x="90" y="182" font-size="7.5" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Limit: Unfalsifiable &amp; subjective</text><rect x="180" y="14" width="160" height="192" rx="9" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/><text x="260" y="32" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#075985" font-family="sans-serif">Hobson &amp; McCarley (1977)</text><text x="260" y="45" font-size="8" text-anchor="middle" fill="#0369a1" font-family="sans-serif">Activation-Synthesis (REM)</text><rect x="192" y="56" width="136" height="34" rx="6" fill="#ffffff" stroke="#7dd3fc"/><text x="260" y="71" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">1. Pons Activation</text><text x="260" y="83" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">(Random brainstem PGO spikes)</text><line x1="260" y1="90" x2="260" y2="122" stroke="#0284c7" stroke-width="2"/><polygon points="260,122 256,115 264,115" fill="#0284c7"/><text x="260" y="110" font-size="7.5" font-weight="bold" text-anchor="middle" fill="#0369a1" font-family="sans-serif">Upward neural firing</text><rect x="192" y="124" width="136" height="34" rx="6" fill="#ffffff" stroke="#7dd3fc"/><text x="260" y="139" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">2. Forebrain Synthesis</text><text x="260" y="151" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">(Cortex weaves best-fit story)</text><text x="260" y="182" font-size="7.5" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Limit: Reductionist (Solms, 2000)</text><rect x="350" y="14" width="160" height="192" rx="9" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/><text x="430" y="32" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">Iorio et al. (2020)</text><text x="430" y="45" font-size="8" text-anchor="middle" fill="#b45309" font-family="sans-serif">COVID-19 Lockdown Dreams</text><rect x="362" y="56" width="136" height="34" rx="6" fill="#ffffff" stroke="#fcd34d"/><text x="430" y="71" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">796 Italian Participants</text><text x="430" y="83" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">(Most Recent Dream survey)</text><line x1="430" y1="90" x2="430" y2="122" stroke="#d97706" stroke-width="2"/><polygon points="430,122 426,115 434,115" fill="#d97706"/><text x="430" y="110" font-size="7.5" font-weight="bold" text-anchor="middle" fill="#b45309" font-family="sans-serif">Waking stress continuity</text><rect x="362" y="124" width="136" height="34" rx="6" fill="#ffffff" stroke="#fcd34d"/><text x="430" y="139" font-size="8.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Contagion &amp; Trapped</text><text x="430" y="151" font-size="7.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">(Negative emotion &amp; vividness)</text><text x="430" y="182" font-size="7.5" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Limit: Self-report &amp; gender bias</text></svg>',
      diagramCaption:
        "Comparing Freud's top-down unconscious wish disguise, Hobson & McCarley's bottom-up brainstem firing, and Iorio et al.'s (2020) waking-trauma continuity.",
      workedExamples: [
        {
          title: "Contrasting Freud vs Activation-Synthesis on the same dream stem",
          problem:
            "Before her final violin audition, Mei dreams she is standing onstage with a giant spaghetti noodle instead of a bow while her legs refuse to move. Contrast how **Freud's Dream Theory** and **Hobson & McCarley's Activation-Synthesis Theory** explain Mei's dream.",
          steps: [
            "**Freud**: Standing onstage with spaghetti and frozen legs is the recalled **manifest content**; **dreamwork** (symbolism/displacement) disguised a repressed unconscious **latent wish** (e.g. an unconscious desire to avoid competing or fear of failure) so she could remain asleep.",
            "**Hobson & McCarley**: During REM sleep, Mei's **brainstem pons** sent random electrical spikes to her visual and motor cortex while **REM muscle atonia** paralysed her legs; her **forebrain cortex synthesised** those random visual signals + lack of leg feedback + recent violin memory into the bizarre frozen-onstage storyline.",
          ],
          answer:
            "Freud explains it via dreamwork transforming a hidden latent wish into symbolic manifest content, whereas Hobson & McCarley explain it via forebrain synthesis of random REM pons activation + muscle atonia.",
          yourTurn: {
            question:
              "In Freud's dream theory, does the hidden unconscious meaning beneath a dream's surface storyline represent **manifest** content or **latent** content? (Type one word: manifest or latent.)",
            answer: { type: "text", accept: ["latent", "latent content"] },
            solution:
              "**Latent** content is the hidden unconscious wish/meaning (*latent* = hidden); **manifest** content is the recalled surface story.",
          },
        },
      ],
      keyPoints: [
        "**Freud (1900)**: dreams fulfil repressed unconscious wishes; **dreamwork** (condensation, displacement, symbolism) disguises **latent content** into **manifest content**.",
        "**Hobson & McCarley (1977)**: **Activation** = random REM firing from the **pons (brainstem)**; **Synthesis** = **forebrain cortex** weaves chaotic signals into a best-fit story — supported by **Williams et al. (1992)** (12 adults, 60 dream/fantasy pairs: dreams were **2× more bizarre** than waking fantasies).",
        "**Iorio et al. (2020)**: 796 Italian lockdown participants showed vivid negative dreams of **contagion, confinement, and mourning**, supporting waking emotional **continuity** and psychodynamic trauma processing.",
        "Evaluate Freud on **unfalsifiability & subjective bias**, Hobson & McCarley on **biological reductionism** (Solms, 2000), and Iorio et al. on **retrospective self-report & volunteer sampling bias**.",
      ],
      whyItWorks:
        "**Iorio et al. (2020)** and **Solms (2000)** bridge the gap between Freud and Hobson: REM brainstem activation provides the raw visual energy for dreaming, while forebrain emotional and waking concerns (**continuity**) shape *which* memories get woven into the plot!",
      strategies: [
        "Lock in Manifest vs Latent: Manifest = Movie on screen (recalled plot); Latent = Locked beneath (hidden unconscious wish)",
        "Lock in Brainstem vs Forebrain in Activation-Synthesis: Pons = Activation; Cerebral Cortex = Synthesis",
      ],
      thinkDeeper:
        "Why do repetitive post-traumatic nightmares in war veterans or pandemic healthcare workers (**Iorio et al., 2020**) pose a direct puzzle for **Freud's claim that every dream is a comforting wish-fulfilment**?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Polysomnography (EEG, EOG, EMG)",
        back: "Objective sleep-lab recording combining **EEG** (brainwaves), **EOG** (eye movements), and **EMG** (muscle tone).",
      },
      {
        front: "NREM Stage 1 vs Stage 2 EEG signatures",
        back: "**Stage 1**: light transition, **theta waves** (4–7 Hz). **Stage 2**: ~45–50% of sleep, theta + **sleep spindles** (12–14 Hz bursts) & **K-complexes**.",
      },
      {
        front: "NREM Stage 3 (Slow-Wave Sleep / SWS)",
        back: "Deepest sleep (~20–25%), slow high-amplitude **delta waves** (0.5–4 Hz), **Growth Hormone** release, physical repair, and stage where **sleepwalking** occurs.",
      },
      {
        front: "REM Sleep (Paradoxical Sleep)",
        back: "Fast waking-like EEG + rapid eye movements + ~80% vivid dreaming (Dement & Kleitman, 1957) paired with skeletal **muscle atonia** (paralysis).",
      },
      {
        front: "Ultradian vs Circadian Rhythm in Sleep",
        back: "**Ultradian** (<24 h): ~**90-minute** NREM/REM sleep-stage cycle (4–6/night). **Circadian** (~24 h): daily **sleep-wake** cycle.",
      },
      {
        front: "Suprachiasmatic Nucleus (SCN)",
        back: "Master **endogenous pacemaker** in the **hypothalamus** above the optic chiasm; receives retinal light signals and regulates the pineal gland.",
      },
      {
        front: "Pineal Gland & Melatonin",
        back: "Endocrine gland stimulated by the SCN in **darkness** to secrete **melatonin** (promoting sleepiness); inhibited by bright/blue light.",
      },
      {
        front: "Exogenous Zeitgebers & Siffre's Cave Study",
        back: "External 'time-givers' (chiefly **daylight**) that entrain our ~24.5–25 h endogenous free-running clock (Siffre, 1962) to an exact 24.0 h day.",
      },
      {
        front: "Oswald's (1966) Restoration Theory of Sleep",
        back: "**SWS** restores the **physical body** (Growth Hormone, protein synthesis, cell repair); **REM** restores the **brain** (neurotransmitters, infant brain growth, memory).",
      },
      {
        front: "Meddis's (1975) Evolutionary Theory of Sleep",
        back: "Sleep evolved for **energy conservation** and **predator avoidance** (staying immobile and hidden during vulnerable hours; Allison & Cicchetti, 1976).",
      },
      {
        front: "Sleep-Onset vs Sleep-Maintenance Insomnia",
        back: "**Sleep-onset**: persistent difficulty falling asleep at bedtime. **Sleep-maintenance**: frequent night awakenings or waking too early unable to return to sleep.",
      },
      {
        front: "Sleepwalking (Somnambulism) — stage & causes",
        back: "Incomplete arousal from **NREM Stage 3 (SWS)** in the first third of the night (amnesia next day); genetic MZ concordance + triggered by sleep deprivation/stress.",
      },
      {
        front: "Freud (1900) — Manifest vs Latent Content & Dreamwork",
        back: "**Manifest** = literal recalled dream plot; **Latent** = hidden unconscious wish disguised via **dreamwork** (condensation, displacement, symbolism).",
      },
      {
        front: "Hobson & McCarley (1977) — Activation-Synthesis Theory",
        back: "**Activation**: random REM firing from **pons (brainstem)**; **Synthesis**: **forebrain/cerebral cortex** weaves chaotic signals + memories into a best-fit story.",
      },
      {
        front: "Robinson et al. (2018) — Adolescent Sleep Restriction (7T fMRI)",
        back: "**18 adolescents (13–15 yrs)** in a counterbalanced crossover study: normal 8h sleep boosted bilateral **amygdala** efficiency, whereas 1 night of restricted sleep disrupted **fronto-limbic** emotional circuitry (supports **Restoration Theory**).",
      },
      {
        front: "Williams et al. (1992) — Bizarreness in Dreams vs Waking Fantasies",
        back: "**12 students (120 reports = 60 dream/fantasy pairs)** blind-scored for discontinuities, incongruities & uncertainties: **dreams were 2× more bizarre** than waking fantasies (supports **Activation-Synthesis Theory**).",
      },
      {
        front: "Iorio et al. (2020) — COVID-19 Lockdown Dream Study",
        back: "796 Italian participants (Most Recent Dream survey): women & COVID-exposed showed vivid negative dreams of **contagion, confinement & mourning** (waking continuity).",
      },
      {
        front: "Solms (2000) — Neuropsychological Challenge to Activation-Synthesis",
        back: "Pons damage did NOT abolish dreaming, whereas **ventromedial forebrain** motivational lesions eliminated dreaming even when REM sleep stayed intact!",
      },
    ],
    mustKnow: [
      "Trace EEG frequency and amplitude changes across Awake, NREM Stages 1–3 (SWS delta), and REM paradoxical sleep.",
      "Explain how the ~90-minute ultradian cycle shifts from SWS-rich early night to REM-rich late night on an 8-hour hypnogram.",
      "Explain the circadian pathway: Light/Dark → Retina → Hypothalamic SCN (endogenous pacemaker) → Pineal Gland → Melatonin, plus exogenous zeitgebers, jet lag, and shift work.",
      "Compare Oswald's Restoration Theory (SWS body vs REM brain; Robinson et al. 2018 7T fMRI, Gardner, infants) against Meddis's Evolutionary Theory (energy conservation & predator avoidance; Allison & Cicchetti, dolphin unihemispheric sleep).",
      "Distinguish sleep-onset vs sleep-maintenance insomnia and primary vs secondary causes.",
      "Explain why sleepwalking occurs in NREM Stage 3 (SWS) rather than REM sleep, and outline its genetic and environmental triggers.",
      "Design evidence-based sleep-hygiene interventions linked explicitly to SCN, melatonin, adenosine/caffeine, and stimulus control.",
      "Contrast Freud's wish-fulfilment theory (manifest vs latent content, dreamwork) with Hobson & McCarley's Activation-Synthesis Theory (pons vs forebrain; Williams et al. 1992 dream bizarreness).",
      "Describe and evaluate all three CIE 0266 named studies in Sleep & Dreams: Robinson et al. (2018), Williams et al. (1992), and Iorio et al. (2020).",
    ],
    misconceptions: [
      {
        wrong:
          "Writing 'The 90-minute cycle through NREM and REM is a circadian rhythm'.",
        right:
          "A **circadian rhythm** lasts ~**24 hours** (the daily sleep-wake cycle); the **~90-minute** cycle through NREM Stages 1–3 and REM repeats 4–6 times a night, so it is an **ultradian rhythm** (<24 hours).",
      },
      {
        wrong:
          "Writing 'Sleepwalking happens during REM sleep when someone acts out their vivid dream'.",
        right:
          "During REM sleep, brainstem **muscle atonia** paralyses skeletal muscles! **Sleepwalking (somnambulism)** occurs during incomplete arousal from **NREM Stage 3 (Slow-Wave Sleep / delta waves)** in the first third of the night.",
      },
      {
        wrong:
          "Writing 'Freud's manifest content is the hidden unconscious meaning of the dream'.",
        right:
          "**Manifest content** is the literal surface storyline recalled upon waking; **latent content** is the hidden, repressed **unconscious wish** disguised beneath it by dreamwork.",
      },
      {
        wrong:
          "Writing 'The SCN gland secretes melatonin when bright light hits the eye'.",
        right:
          "Keep the two structures and light direction accurate: the **SCN** (neurons in the hypothalamus) signals the **pineal gland** to secrete **melatonin in darkness**; bright/blue light **inhibits** melatonin release.",
      },
      {
        wrong:
          "Writing 'Oswald's Restoration Theory says all sleep repairs muscles equally'.",
        right:
          "Specify Oswald's division of labour: **NREM Slow-Wave Sleep (SWS)** drives **physical/bodily restoration** (via Growth Hormone and protein synthesis), whereas **REM sleep** drives **brain restoration** (neurotransmitter replenishment and synaptic consolidation).",
      },
      {
        wrong:
          "Writing 'Hobson & McCarley say the pons synthesises the dream story'.",
        right:
          "In **Activation-Synthesis**, the **pons (brainstem)** provides random electrical **activation** during REM, while the **cerebral cortex / forebrain** performs **synthesis** (interpreting signals into a narrative).",
      },
      {
        wrong:
          "Giving vague sleep hygiene advice like 'relax and go to bed early' with zero psychological explanation.",
        right:
          "Earn full CIE 0266 marks by pairing each concrete action with its mechanism — e.g. *'Avoid blue-light screens 60 minutes before bed so the SCN does not inhibit pineal melatonin secretion'*.",
      },
    ],
    examMistakes: [
      "Mixing up **EEG frequency** and **EEG amplitude**: as you enter deep NREM Stage 3 (delta SWS), frequency drops **lowest** (0.5–4 Hz) while amplitude rises **highest**.",
      "Forgetting to mention **muscle atonia** when asked why REM is called **paradoxical sleep** (active waking-like brain vs paralysed skeletal body).",
      "Confusing **endogenous pacemakers** (internal biological clocks like the SCN) with **exogenous zeitgebers** (external environmental cues like sunlight and meal times).",
      "Assuming **prey animals sleep more** to hide — **Allison & Cicchetti (1976)** showed exposed grazing prey (giraffes, horses ~2–3h) actually sleep **far less** than safe apex predators (lions ~15h) because deep sleep leaves open-plain animals vulnerable!",
      "Describing **Iorio et al. (2020)** as a sleep-lab EEG experiment — it was an **online self-report questionnaire + Most Recent Dream narrative study** of 796 Italians during COVID-19 lockdown!",
      "Critiquing Freud by saying 'dreams don't exist' instead of using precise scientific terms: **unfalsifiability**, **researcher interpretation bias**, and **unrepresentative clinical case studies**.",
      "Failing to distinguish **sleep-onset** insomnia (trouble falling asleep initially) from **sleep-maintenance** insomnia (waking repeatedly in the night).",
    ],
    mnemonics: [
      {
        topic: "EEG Waves from Alert Awake → Deep SWS",
        device: "B.A.T.D. (Bats Are Truly Nocturnal/Deep!)",
        explanation:
          "**B**eta (alert awake 13–30 Hz) → **A**lpha (relaxed eyes shut 8–12 Hz) → **T**heta (NREM 1–2, 4–7 Hz) → **D**elta (deep NREM 3 SWS, 0.5–4 Hz).",
      },
      {
        topic: "Freud's Manifest vs Latent Content",
        device: "M = Movie · L = Locked Wish",
        explanation:
          "**M**anifest = the **M**ovie storyline you remember on waking; **L**atent = the **L**ocked unconscious wish hidden underneath.",
      },
      {
        topic: "Circadian Pathway",
        device: "R → S → P → M (Retina Sees Pitch Midnight)",
        explanation:
          "**R**etina detects darkness → **S**CN (hypothalamus) → **P**ineal gland → **M**elatonin secreted.",
      },
      {
        topic: "Ultradian vs Circadian",
        device: "Circa-Day (24h) vs Ultra-Many (~90m)",
        explanation:
          "**Circa**dian = *circa diem* (~1 cycle per **24h day**); **Ultra**dian = *beyond* once a day (**4–6 cycles of ~90 min** per night).",
      },
    ],
    realWorld: [
      {
        title: "Later Teenager School Start Times & Adolescent Melatonin Shift",
        detail:
          "During puberty, the adolescent **SCN** naturally shifts pineal **melatonin** release ~1–2 hours later ('phase delay'); schools shifting start times from 7:30 am to 8:30 am saw longer REM sleep, fewer absences, and higher grades.",
        emoji: "⏰",
      },
      {
        title: "Beating Eastbound Jet Lag Between Singapore & Europe",
        detail:
          "Airline sports scientists time bright morning light exposure and dim-evening glasses to entrain a traveller's **SCN** faster across time zones.",
        emoji: "🛫",
      },
      {
        title: "Night-Shift Hospital & Aviation Safety",
        detail:
          "High-wattage cool-white light on night wards suppresses melatonin during shifts while blackout blinds protect daytime recovery sleep, cutting medical fatigue errors.",
        emoji: "🏥",
      },
      {
        title: "Cognitive Behavioural Therapy for Insomnia (CBT-I)",
        detail:
          "Clinics treat chronic insomnia without sleeping pills using **stimulus control** (leaving bed if awake >20 min) and strict sleep-hygiene schedules.",
        emoji: "🛏️",
      },
      {
        title: "Processing Collective Trauma Through Dreams (Iorio et al., 2020)",
        detail:
          "Tracking lockdown nightmare spikes helped Italian clinicians identify students experiencing acute pandemic anxiety and grief.",
        emoji: "💭",
      },
    ],
    videos: [
      {
        title: "Stages of Sleep: NREM 1–3, Delta SWS, REM & Ultradian Cycles",
        channel: "CrashCourse Psychology / Khan Academy",
        url: "https://www.youtube.com/results?search_query=stages+of+sleep+nrem+rem+eeg+waves+ultradian+cycle+psychology",
      },
      {
        title: "Circadian Rhythms, Suprachiasmatic Nucleus (SCN) & Melatonin",
        channel: "TED-Ed / Tutor2u Psychology",
        url: "https://www.youtube.com/results?search_query=circadian+rhythm+suprachiasmatic+nucleus+pineal+gland+melatonin",
      },
      {
        title: "Restoration Theory (Oswald) vs Evolutionary Theory (Meddis) of Sleep",
        channel: "Psych Boost",
        url: "https://www.youtube.com/results?search_query=restoration+theory+oswald+evolutionary+theory+meddis+sleep+psychology",
      },
      {
        title: "Why Do We Dream? Freud Wish-Fulfilment vs Activation-Synthesis",
        channel: "Simply Psychology / SciShow Psych",
        url: "https://www.youtube.com/results?search_query=freud+dream+theory+manifest+latent+vs+activation+synthesis+hobson+mccarley",
      },
    ],
    formulas: [
      {
        name: "EEG Wave Progression (Awake → Deep SWS)",
        formula: "Beta (13–30 Hz) → Alpha (8–12 Hz) → Theta (N1/N2, 4–7 Hz + spindles) → Delta (N3 SWS, 0.5–4 Hz)",
        note: "As NREM deepens, wave frequency decreases and amplitude increases.",
      },
      {
        name: "REM Paradoxical Sleep & Dement & Kleitman (1957)",
        formula: "Waking-like Beta/Theta EEG + Rapid Eye Movements + Muscle Atonia → ~80% vivid dream recall",
        note: "NREM awakenings yielded only ~7–9% vivid dream recall.",
      },
      {
        name: "Ultradian Sleep Cycle Architecture",
        formula: "1 cycle ≈ 90 min (4–6 cycles / 8h night) · Early night = high N3 SWS · Late night = long REM",
        note: "Ultradian = period < 24 hours (distinct from ~24-hour circadian sleep-wake cycle).",
      },
      {
        name: "Circadian Pacemaker & Melatonin Pathway",
        formula: "Darkness → Retina → Hypothalamic SCN → Pineal Gland secretes Melatonin → Sleepiness",
        note: "Bright/blue light inhibits melatonin; exogenous zeitgebers entrain the ~24.5h clock (Siffre, 1962).",
      },
      {
        name: "Oswald (1966, 1980) — Restoration Theory",
        formula: "NREM SWS = Physical repair (Growth Hormone, protein synthesis) · REM = Brain/neurotransmitter repair",
        note: "Supported by newborn 50% REM and Randy Gardner's (264h) SWS/REM rebound.",
      },
      {
        name: "Meddis (1975) — Evolutionary / Ecological Theory",
        formula: "Sleep = Metabolic Energy Conservation + Predator Avoidance (immobility in safe shelter)",
        note: "Supported by Allison & Cicchetti (1976) predator vs prey durations; challenged by dolphin unihemispheric sleep.",
      },
      {
        name: "Insomnia Classification",
        formula: "Sleep-Onset (trouble falling asleep) vs Sleep-Maintenance (night awakenings) · Primary vs Secondary",
        note: "Must cause daytime impairment despite adequate opportunity to sleep.",
      },
      {
        name: "Sleepwalking (Somnambulism)",
        formula: "Incomplete arousal from NREM Stage 3 (Delta SWS) in first third of night + Morning amnesia",
        note: "Strong MZ genetic concordance; triggered by prior sleep deprivation (SWS rebound), stress, or fever.",
      },
      {
        name: "Freud (1900) — Psychoanalytic Dream Theory",
        formula: "Latent Content (unconscious wish) → [Dreamwork: condensation, displacement, symbolism] → Manifest Content",
        note: "Protects sleep via disguised wish-fulfilment; criticised as unfalsifiable and subjective.",
      },
      {
        name: "Hobson & McCarley (1977) — Activation-Synthesis Theory",
        formula: "Pons (brainstem) random REM firing [Activation] → Forebrain cortex weaves story [Synthesis]",
        note: "Objective neurobiological account; challenged as reductionist by Solms (2000) forebrain lesion cases.",
      },
      {
        name: "Robinson et al. (2018) — Sleep Restriction (7T fMRI)",
        formula: "18 adolescents (13–15 yrs, crossover: 8h vs restricted) → Restricted sleep disrupts amygdala & fronto-limbic efficiency",
        note: "Compulsory CIE 0266 named study supporting Restoration Theory of sleep.",
      },
      {
        name: "Williams et al. (1992) — Dream Bizarreness Study",
        formula: "12 adults (60 dream vs 60 waking-fantasy reports, blind-scored) → Dreams 2× more bizarre than waking fantasies",
        note: "Compulsory CIE 0266 named study supporting Hobson & McCarley's Activation-Synthesis Theory.",
      },
      {
        name: "Iorio, Sommantico & Parrello (2020) — Pandemic Dream Study",
        formula: "796 Italians (COVID-19 lockdown survey + Most Recent Dream) → Contagion/confinement themes & negative emotion",
        note: "Compulsory named contemporary study supporting continuity between waking distress/trauma and dream content.",
      },
    ],
  },
};
