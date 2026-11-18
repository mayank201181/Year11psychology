import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Newborn babies only **two days old** already cry with the rising or falling melody of their mother's native language heard inside the womb — French newborns cry with a rising pitch contour, while German newborns cry with a falling contour (Mampe et al., 2009)!",
  didYouKnow: [
    "Congenitally deaf babies exposed to sign language **babble silently with their hands** (*manual babbling*) at 6–10 months using slower, rhythmic sign-syllable rhythms completely distinct from random infant waving (Petitto & Marentette, 1991).",
    "In **Brown & Hanlon's (1970)** classic transcripts of Adam, Eve and Sarah, when a toddler said *'Mama isn't boy, he girl'*, the mother cheerfully replied *'That's right!'* — proving parents reinforce **factual truth**, not grammar, yet children still fix their grammar!",
    "When **Karl von Frisch** first claimed tiny honeybee brains calculated solar angles in pitch darkness and translated them into gravity angles on vertical comb, fellow biologists refused to believe him until he built glass observation hives and predicted exact foraging spots blind!",
    "Hearing toddler *'Jim'* (Bard & Sachs, 1977), born to loving deaf parents who put him in front of **spoken television and radio** for hours daily so he would learn English, could barely form a grammatical English sentence at age 3 years 9 months — yet caught up in **months** once a live speech therapist conversed with him face-to-face (**Bruner's LASS** in action!).",
  ],
  activities: [
    {
      title: "Run Your Own Family 'Wug' & Overregularisation Mini-Lab",
      emoji: "🐦",
      materials: ["2 index cards with cartoon doodles", "Informed parental consent if testing a younger cousin/sibling (aged 3–6)"],
      steps: [
        "Draw one imaginary creature labelled **'1 blick'** on Card 1, and two of them on Card 2. Draw someone doing an imaginary action (**'spow'**) on Card 3.",
        "Say: *'This is a blick. Now there is another one. There are two \_\_\_?'* and *'Every day she spows. Yesterday she \_\_\_?'*",
        "Compare whether a 4-year-old vs an adult automatically applies voiceless /s/ (*blicks*) and voiced *-ed* (*spowed*) without ever hearing those words before!",
      ],
      maths:
        "Jean Berko Gleason (1958) used nonsense words to control 100% for prior memorisation or Skinnerian reinforcement — proving children apply productive phonological and morphological rules.",
    },
    {
      title: "Decode a Honeybee Waggle Vector",
      emoji: "🐝",
      materials: ["Protractor or paper clockface", "Stopwatch"],
      steps: [
        "Draw '12 o'clock' straight up on vertical paper to represent the current direction of the **sun** outside the hive.",
        "Have a partner trace a figure-of-eight waggle run tilted **60° clockwise** from vertical lasting **2.0 seconds** (≈ 2 km).",
        "Now try asking your partner to dance *'There WAS clover 2 km east YESTERDAY, Watch Out For Spiders!'* — notice immediately why Hockett's **productivity** and **temporal displacement** fail!",
      ],
      maths:
        "von Frisch (1967) won the Nobel Prize for decoding this innate vector transformation (gravity angle ↔ solar azimuth), while Hockett's design features clarify why closed genetic codes differ from open-ended human syntax.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The U-Shaped Learning Curve of Irregular Past Tense ('Went → Goed → Went')",
      svg: `<svg viewBox="0 0 600 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="U-shaped developmental curve showing high early accuracy on memorised went, dip during overregularised goed around age 3, and recovery to went"><rect x="6" y="6" width="588" height="153" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><line x1="65" y1="132" x2="550" y2="132" stroke="#475569" stroke-width="1.5"/><line x1="65" y1="28" x2="65" y2="132" stroke="#475569" stroke-width="1.5"/><path d="M 95 46 C 185 48, 235 122, 305 122 C 375 122, 430 44, 525 42" fill="none" stroke="#7c3aed" stroke-width="3.2"/><circle cx="110" cy="47" r="4.5" fill="#16a34a"/><circle cx="305" cy="122" r="5" fill="#dc2626"/><circle cx="505" cy="43" r="4.5" fill="#2563eb"/><text x="130" y="38" font-size="10" font-weight="700" fill="#15803d" font-family="sans-serif">Phase 1 (~2 yrs): Rote 'went'</text><text x="305" y="147" font-size="10" font-weight="700" text-anchor="middle" fill="#b91c1c" font-family="sans-serif">Phase 2 (~3 yrs): Rule extracted → 'goed!'</text><text x="460" y="34" font-size="10" font-weight="700" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">Phase 3 (~5+ yrs): Rule + exceptions</text><text x="56" y="48" font-size="9" text-anchor="end" fill="#334155" font-family="sans-serif">100%</text><text x="56" y="125" font-size="9" text-anchor="end" fill="#334155" font-family="sans-serif">Low</text></svg>`,
      caption:
        "Why apparent 'mistakes' at age 3 signal cognitive progress: the dip in the U-curve marks the moment the child discovers the general '-ed' grammar rule.",
    },
  ],
  history: {
    title: "The Playground That Built a Language From Scratch (Managua, 1977–1995)",
    story:
      "For decades, linguists wished they could ethically test what happens if children grow up together without an existing language — a 'forbidden experiment' impossible in laboratories. Then in 1977, Nicaragua opened its first public school for deaf children in Managua. Teachers drilled Spanish lip-reading in class with minimal success, while ignoring the children's furious gesturing on school buses and playgrounds. When psycholinguist Judy Kegl and her doctoral student **Ann Senghas** arrived in the late 1980s and 1990s to film the signers, they stunned the scientific world: while the oldest teenagers had cobbled together a rough pidgin, the **youngest 5-to-9-year-old newcomers** had spontaneously regularised those gestures into a full-blown, rapid, grammatically inflected language (**Idioma de Señas de Nicaragua**) — turning a schoolyard into living proof of human Universal Grammar.",
  },
};
