import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "In 1971, Edward Deci paid university students $1 for every Soma block puzzle they solved — and watched them abandon the puzzles during free time while unpaid students kept playing for fun!",
  didYouKnow: [
    "In Boniecki & Moore's (2003) university token economy, the average silence after a professor asked a question shrank from an awkward **4.4 seconds** to just **1.5 seconds** as hands shot up for wooden chips.",
    "A global Gallup poll analysed by **Tay & Diener (2011)** across **123 countries** found that people can still experience strong love and mastery satisfaction even when food and shelter are precarious — showing Maslow's pyramid works more like overlapping waves than locked dungeon doors.",
    "Blood donors in several field studies actually became *less* likely to donate blood when offered small cash payments compared with volunteering unpaid, because payment reframed a proud civic identity into a cheap financial transaction!",
    "In **Merchant et al. (2013)**, charity adverts using nostalgic cues worked hardest on people who naturally use rosy past memories to soothe present-day stress — turning emotional nostalgia into real charitable generosity.",
  ],
  activities: [
    {
      title: "The 7-Day SMART vs 'Do Your Best' Audit",
      emoji: "🎯",
      materials: ["Two index cards", "Phone stopwatch or revision tracker"],
      steps: [
        "On Card A, write one genuine vague study wish you usually tell yourself (e.g. 'Revise Paper 2 Psychology soon').",
        "On Card B, rewrite that exact wish using all five **SMART** criteria plus one **SDT autonomy** choice (pick *which* method you enjoy most).",
        "Track three days under each style and compare total focused minutes completed plus your 1–10 enjoyment rating.",
      ],
      maths:
        "Locke & Latham (1990) showed specific, moderately challenging goals sharpen attention and self-monitoring, while self-chosen methods preserve Deci & Ryan's **autonomy** so targets feel empowering rather than controlling.",
    },
    {
      title: "Spot the 'Push', 'Pull' & Nostalgia in Real Adverts",
      emoji: "📺",
      materials: ["3 print or video adverts (food, sport/travel, charity)"],
      steps: [
        "Classify each advert's primary motivational hook: biological deficit (**Hull's drive push**), desirable reward/status (**cognitive incentive pull**), or warm childhood memory (**Merchant et al. nostalgia**).",
        "Check whether the advert appeals to a **Maslow deficiency tier** (safety, belonging, esteem) or **self-actualisation**.",
      ],
      maths:
        "Real campaigns rarely rely on homeostatic need alone; nostalgia ads (Merchant et al. 2013) bypass rational price resistance by activating warm attachment memories and empathy.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Self-Determination Continuum (Deci & Ryan)",
      svg: `<svg viewBox="0 0 620 145" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Self-Determination Theory continuum from Amotivation through Controlled Extrinsic Regulation to Autonomous Intrinsic Motivation"><rect x="6" y="6" width="608" height="133" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><rect x="20" y="34" width="132" height="68" rx="8" fill="#fee2e2" stroke="#ef4444"/><text x="86" y="62" font-size="11" font-weight="700" text-anchor="middle" fill="#991b1b" font-family="sans-serif">Amotivation</text><text x="86" y="80" font-size="9" text-anchor="middle" fill="#7f1d1d" font-family="sans-serif">No intention (Dropout risk)</text><rect x="166" y="34" width="142" height="68" rx="8" fill="#ffedd5" stroke="#f97316"/><text x="237" y="62" font-size="11" font-weight="700" text-anchor="middle" fill="#9a3412" font-family="sans-serif">External / Controlled</text><text x="237" y="80" font-size="9" text-anchor="middle" fill="#7c2d12" font-family="sans-serif">Bribes, threats, guilt</text><rect x="322" y="34" width="138" height="68" rx="8" fill="#dbeafe" stroke="#3b82eb"/><text x="391" y="62" font-size="11" font-weight="700" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">Identified / Valued</text><text x="391" y="80" font-size="9" text-anchor="middle" fill="#1d4ed8" font-family="sans-serif">Personally important goal</text><rect x="474" y="34" width="126" height="68" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="537" y="62" font-size="11" font-weight="700" text-anchor="middle" fill="#14532d" font-family="sans-serif">Intrinsic</text><text x="537" y="80" font-size="9" text-anchor="middle" fill="#166534" font-family="sans-serif">Pure joy &amp; curiosity</text><text x="310" y="124" font-size="10" font-weight="700" text-anchor="middle" fill="#334155" font-family="sans-serif">Increasing Autonomy, Competence &amp; Relatedness Satisfaction →</text></svg>`,
      caption:
        "SDT shows extrinsic goals can become autonomous ('Identified') when a learner personally values why a tough revision topic matters for their own future.",
    },
  ],
  history: {
    title: "Harlow's Puzzle-Solving Monkeys Break Hull's Drive Theory (1949)",
    story:
      "In the 1940s, Clark Hull's Drive-Reduction Theory dominated psychology: animals supposedly acted only when pushed by hunger, thirst or pain. Then **Harry Harlow (1949)** placed mechanical latch puzzles inside rhesus monkeys' cages with **no food rewards whatsoever**. Far from ignoring the latches, the monkeys worked intensely for hours just for the sheer satisfaction of cracking the mechanism — and when Harlow *added* raisin rewards, the monkeys actually made more errors and lost interest faster! Harlow coined the phrase **'intrinsic motivation'**, paving the way for Lepper's overjustification studies and Deci & Ryan's Self-Determination Theory.",
  },
};
