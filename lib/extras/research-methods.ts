import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "In 1904, a horse named Clever Hans amazed Berlin crowds by tapping out cube roots and German spelling with his hoof — until psychologist Oskar Pfungst put blinkers on the horse and discovered why **double-blind controls** had to be invented!",
  didYouKnow: [
    "**The Hawthorne Effect**: Factory workers at Western Electric in Illinois boosted productivity whether researchers brightened *or* dimmed the lights — simply because they knew psychologists were watching them!",
    "**WEIRD Psychology**: Over 80% of participants in classic psychology journals come from **W**estern, **E**ducated, **I**ndustrialised, **R**ich, **D**emocratic societies — only ~12% of humanity, which is why cross-cultural replication (like Bremner et al. with the Himba or Levine et al. across 23 cities) matters so much.",
    "**Placebo Power**: Even when patients are told a pill contains zero active medicine, brain imaging shows expectation alone can trigger real endogenous endorphin release — making single- and double-blind placebo controls indispensable.",
    "**Spurious Correlations**: US per-capita mozzarella consumption correlates at r = 0.96 with civil engineering doctorates awarded — proof that a steep scattergraph trendline never proves causation!",
  ],
  activities: [
    {
      title: "The 2-Minute Coin-Flip Reaction vs Serial Recall Mini-Lab",
      emoji: "⏱️",
      materials: ["A sheet of paper", "20 everyday 5-letter nouns split into List A (10) & List B (10)", "Phone stopwatch"],
      steps: [
        "Test two friends or family members using a **Repeated Measures** design: Condition A = study 10 words for 30s in silence; Condition B = study 10 matched words for 30s while counting backwards from 50.",
        "Apply **AB/BA counterbalancing**: Friend 1 completes Silence → Counting; Friend 2 completes Counting → Silence.",
        "Calculate the **mean** and **range** for both conditions, then write the **fully operationalised directional hypothesis** you just tested!",
      ],
      maths:
        "Even with n = 2, you immediately experience why matched word lists (avoiding unequal word difficulty as an extraneous variable) and AB/BA counterbalancing (balancing fatigue) are essential to internal validity.",
    },
    {
      title: "Inter-Observer Reliability Challenge",
      emoji: "👀",
      materials: ["A 3-minute muted comedy or sport clip", "Two blank tally sheets"],
      steps: [
        "Round 1 (Un-operationalised): Ask a partner to independently tally every time a character 'acts frustrated' — don't discuss what counts beforehand! Compare your two totals.",
        "Round 2 (Operationalised): Agree two concrete behavioural categories first (e.g. *'places hands on head/hips'*, *'shakes head side-to-side'*), watch a fresh 3-minute clip silently, and compare tallies again.",
      ],
      maths:
        "Round 1 almost always produces divergent counts (low inter-observer reliability), whereas Round 2's operationalised categories snap both observers' counts together.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Experimental Validity vs Ecological Realism Trade-Off",
      svg: `<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spectrum comparing Laboratory, Field, and Natural experiments on control versus ecological validity"><rect x="10" y="10" width="540" height="170" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><defs><linearGradient id="rmgrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#dbeafe"/><stop offset="50%" stop-color="#dcfce7"/><stop offset="100%" stop-color="#fef3c7"/></linearGradient></defs><rect x="40" y="65" width="480" height="44" rx="22" fill="url(#rmgrad)" stroke="#64748b"/><circle cx="105" cy="87" r="16" fill="#2563eb"/><text x="105" y="91" font-size="10" font-weight="bold" text-anchor="middle" fill="#ffffff" font-family="sans-serif">LAB</text><circle cx="280" cy="87" r="16" fill="#16a34a"/><text x="280" y="91" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#ffffff" font-family="sans-serif">FIELD</text><circle cx="455" cy="87" r="16" fill="#d97706"/><text x="455" y="91" font-size="9" font-weight="bold" text-anchor="middle" fill="#ffffff" font-family="sans-serif">NAT</text><text x="105" y="45" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e3a8a" font-family="sans-serif">Highest Control</text><text x="105" y="132" font-size="9.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Strong cause &amp; effect</text><text x="105" y="146" font-size="9.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">Artificial setting</text><text x="280" y="45" font-size="11" font-weight="bold" text-anchor="middle" fill="#14532d" font-family="sans-serif">Balanced Real-World</text><text x="280" y="132" font-size="9.5" text-anchor="middle" fill="#334155" font-family="sans-serif">IV still manipulated</text><text x="280" y="146" font-size="9.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">Natural setting</text><text x="455" y="45" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e" font-family="sans-serif">Naturally Varying IV</text><text x="455" y="132" font-size="9.5" text-anchor="middle" fill="#334155" font-family="sans-serif">Studies rare/unethical IVs</text><text x="455" y="146" font-size="9.5" text-anchor="middle" fill="#64748b" font-family="sans-serif">No random allocation</text></svg>`,
      caption:
        "Moving from a Lab to a Field to a Natural experiment trades strict control over extraneous variables for real-world mundane realism.",
    },
  ],
  history: {
    title: "Clever Hans (1907) — The Horse Who Exposed Investigator Effects",
    story:
      "Wilhelm von Osten genuinely believed he had taught his stallion, Clever Hans, arithmetic. Hans could tap out '12' when strangers asked 'What is 3 × 4?' Psychologist Oskar Pfungst ran a systematic series of controlled experiments: when the questioner stood behind a screen *or* did not know the answer themselves, Hans's accuracy plunged to 0%! Hans was actually reading microscopic involuntary posture shifts — a 1-millimetre tilt of the questioner's head and eyebrows — the instant Hans reached the right tap count. Pfungst's discovery proved that honest researchers can unconsciously cue answers, inspiring the **double-blind procedure** across modern psychology and medicine.",
  },
};
