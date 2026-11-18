import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Right now your eyes receive millions of bits of visual data per second — yet in 30 seconds almost everything you did not attend to or link to meaning will vanish forever.",
  didYouKnow: [
    "After Henry Molaison (patient H.M.) passed away in 2008 at age 82, neuroscientists sliced his preserved brain into 2,401 ultra-thin sections streamed live online to map his exact hippocampal lesion in 3D!",
    "London black-cab drivers who pass 'The Knowledge' (memorising 25,000 streets and 20,000 landmarks) physically grow significantly larger **posterior hippocampi** than control adults (Maguire et al., 2000).",
    "In Godden & Baddeley's (1975) underwater experiment, divers wore heavy breathing gear 20 feet down off the coast of Scotland — and forgot nearly a third of words learned on land simply because the beach cues were missing!",
    "World memory champions who memorise 1,000+ digits in 15 minutes have completely ordinary brain anatomy — fMRI scans show they simply turn numbers into vivid **visuo-spatial** stories along familiar routes (*Method of Loci*).",
  ],
  activities: [
    {
      title: "Run Murdock's (1962) Serial Position Test at Home",
      emoji: "📝",
      materials: ["20 everyday nouns on a sheet of paper", "A phone stopwatch", "2–3 family members + blank paper"],
      steps: [
        "Read all 20 unrelated nouns aloud at a steady pace of 1 word every 2 seconds.",
        "For Round 1, say 'Go!' immediately after Word 20 and give everyone 60 seconds to write all words they remember in any order.",
        "For Round 2 (with a fresh 20-word list), make everyone count backwards in threes from 389 for 30 seconds right after Word 20 before writing.",
        "Tally recall for Words 1–5 (Primacy), Words 8–13 (Middle), and Words 16–20 (Recency) in both rounds!",
      ],
      maths:
        "Round 1 produces Murdock's classic U-curve. Round 2's 30-second counting distractor wipes out **recency** (emptying STM) while leaving **primacy** standing tall in **LTM** (Glanzer & Cunitz, 1966).",
    },
    {
      title: "Dual-Task Working Memory Clash",
      emoji: "🤹",
      materials: ["A printed maze or dot-to-dot puzzle", "A 7-digit list of numbers", "A timer"],
      steps: [
        "Time how fast a friend completes half the visual maze silently.",
        "Have them hold a new 7-digit number in head by repeating it aloud while finishing a second matched maze.",
        "Finally, have them repeat *'ba, ba, ba'* aloud (**articulatory suppression**) while reading and recalling 8 printed words.",
      ],
      maths:
        "Maze + digits uses **visuo-spatial sketchpad + phonological loop** (minimal clash), whereas *'ba, ba, ba'* + word reading jams the **articulatory control process** in the same phonological loop!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Double Dissociation Between Patient H.M. and Patient K.F.",
      svg: '<svg viewBox="0 0 500 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison grid of Patient H.M. intact STM but impaired declarative LTM versus Patient K.F. impaired verbal STM but intact LTM"><rect x="14" y="14" width="228" height="146" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="128" y="36" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">Patient H.M. (Milner et al., 1968)</text><text x="128" y="62" font-size="10" font-weight="bold" text-anchor="middle" fill="#15803d" font-family="sans-serif">✔ STM Digit Span: INTACT</text><text x="128" y="84" font-size="10" font-weight="bold" text-anchor="middle" fill="#15803d" font-family="sans-serif">✔ Procedural LTM: INTACT</text><text x="128" y="108" font-size="10" font-weight="bold" text-anchor="middle" fill="#dc2626" font-family="sans-serif">✘ New Episodic LTM: SEVERELY LOST</text><text x="128" y="138" font-size="8.5" text-anchor="middle" fill="#475569" font-family="sans-serif">Bilateral Hippocampal Lesion</text><rect x="258" y="14" width="228" height="146" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><text x="372" y="36" font-size="11" font-weight="bold" text-anchor="middle" fill="#075985" font-family="sans-serif">Patient K.F. (Shallice &amp; Warrington)</text><text x="372" y="62" font-size="10" font-weight="bold" text-anchor="middle" fill="#dc2626" font-family="sans-serif">✘ Verbal STM (1–2 digits): IMPAIRED</text><text x="372" y="84" font-size="10" font-weight="bold" text-anchor="middle" fill="#15803d" font-family="sans-serif">✔ Visual STM: INTACT</text><text x="372" y="108" font-size="10" font-weight="bold" text-anchor="middle" fill="#15803d" font-family="sans-serif">✔ New LTM Formation: INTACT</text><text x="372" y="138" font-size="8.5" text-anchor="middle" fill="#475569" font-family="sans-serif">Left Parieto-Occipital Lesion</text></svg>',
      caption:
        "Together, H.M. and K.F. form a double dissociation proving STM and LTM are independent AND verbal vs visual STM are separate.",
    },
  ],
  history: {
    title: "How One Patient Changed Brain Science Forever",
    story:
      "In 1953, 27-year-old factory worker Henry Molaison suffered up to ten blackouts and severe seizures a week after a childhood bicycle accident. Neurosurgeon William Scoville removed tissue from both medial temporal lobes, calming Henry's epilepsy — only to discover Henry could no longer remember eating lunch half an hour earlier. Young neuropsychologist Brenda Milner took the night train from Montreal to Hartford with cognitive puzzles including a metal star viewed through a mirror. Watching Henry's hand grow steadier day after day while he politely introduced himself to her as a stranger every morning revealed for the first time in history that 'memory' is not one thing, but an orchestra of distinct brain systems.",
  },
};
