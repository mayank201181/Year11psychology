import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Tonight, roughly 90 minutes after your head hits the pillow, your brainstem will temporarily paralyse almost every voluntary muscle in your body while firing storm-strength visual waves into your cortex!",
  didYouKnow: [
    "In 1964, 17-year-old high-schooler **Randy Gardner** stayed awake for **264.4 hours (11 days)** for a San Diego science-fair project monitored by sleep pioneer William Dement — beating the researcher at pinball on Day 10 before sleeping 14 hours 40 minutes on Night 1!",
    "Frigatebirds flying non-stop across the Pacific Ocean for 10 days can enter **unihemispheric Slow-Wave Sleep** mid-glide while soaring on thermal air currents!",
    "When **Michel Siffre** emerged from two months inside the freezing Scarasson glacier cave in 1962, his ~24.5-hour internal clock had drifted so steadily that he thought it was August 20 when the surface calendar already read September 14!",
    "Blind individuals who have lost visual sight completely can *still* entrain their **SCN** to daylight if their photosensitive **intrinsically photosensitive retinal ganglion cells (ipRGCs)** expressing melanopsin remain intact!",
  ],
  activities: [
    {
      title: "7-Day Sleep Hygiene & Dream Continuity Log",
      emoji: "📓",
      materials: ["A bedside notebook + pen (no phone screen!)", "Morning alarm"],
      steps: [
        "For 3 nights, record your last screen time, last caffeinated drink, estimated minutes to fall asleep, and morning alertness (1–10).",
        "For the next 4 nights, switch off all blue-light screens 60 minutes before bed and cut caffeine after 2:00 pm.",
        "Keep the notebook beside your pillow and jot down 3 keywords from any dream within 30 seconds of waking (before checking your phone!).",
        "Compare your sleep-onset minutes and check whether your manifest dream themes echo daytime events (**Iorio et al. continuity**)!",
      ],
      maths:
        "Writing dream notes within 30 seconds captures traces still in **STM** before waking motor movement and phone notifications cause **retroactive interference**, while cutting late screens restores **pineal melatonin**.",
    },
    {
      title: "Caffeine Half-Life Countdown Audit",
      emoji: "☕",
      materials: ["Labels from tea, coffee, cola, or energy drinks", "Paper & calculator"],
      steps: [
        "Look up the caffeine content (`mg`) of common drinks (e.g. black bubble tea ~50 mg, espresso ~75 mg, energy drink ~160 mg).",
        "Pick a drink time (e.g. 5:00 pm) and divide the caffeine in half every 5 hours (`5:00 pm → 10:00 pm → 3:00 am`).",
        "Check how many milligrams are still blocking **adenosine** receptors at 2:00–3:00 am during your longest REM cycles!",
      ],
      maths:
        "Exponential decay (`remaining = dose × 0.5^(hours / 5)`) explains why a 5:00 pm energy drink leaves `80 mg` circulating at 10:00 pm and `40 mg` even at 3:00 am!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Lifespan Shift in Total Sleep vs REM Sleep (Oswald's Brain Growth Evidence)",
      svg: '<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stacked bar chart comparing Newborn 16 hours total sleep with 8 hours REM, Teenager 8.5 hours with 2 hours REM, Adult 7.5 hours with 1.8 hours REM, and Older Adult 6.5 hours with 1 hour REM"><rect x="12" y="12" width="476" height="156" rx="10" fill="#f8fafc" stroke="#cbd5e1"/><text x="250" y="31" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a" font-family="sans-serif">Oswald&apos;s Lifespan Evidence: REM Shrinks as Brain Maturation Completes</text><text x="95" y="60" font-size="9" font-weight="bold" text-anchor="end" fill="#0f172a" font-family="sans-serif">Newborn (16h)</text><rect x="104" y="48" width="160" height="16" fill="#db2777"/><rect x="264" y="48" width="160" height="16" fill="#38bdf8"/><text x="432" y="60" font-size="8.5" font-weight="bold" fill="#db2777" font-family="sans-serif">50% REM (8h)</text><text x="95" y="88" font-size="9" font-weight="bold" text-anchor="end" fill="#0f172a" font-family="sans-serif">Teenager (8.5h)</text><rect x="104" y="76" width="40" height="16" fill="#db2777"/><rect x="144" y="76" width="130" height="16" fill="#38bdf8"/><text x="282" y="88" font-size="8.5" fill="#334155" font-family="sans-serif">~23% REM (2h)</text><text x="95" y="116" font-size="9" font-weight="bold" text-anchor="end" fill="#0f172a" font-family="sans-serif">Adult (7.5h)</text><rect x="104" y="104" width="36" height="16" fill="#db2777"/><rect x="140" y="104" width="114" height="16" fill="#38bdf8"/><text x="262" y="116" font-size="8.5" fill="#334155" font-family="sans-serif">~22% REM (1.7h)</text><text x="95" y="144" font-size="9" font-weight="bold" text-anchor="end" fill="#0f172a" font-family="sans-serif">Age 70+ (6.5h)</text><rect x="104" y="132" width="22" height="16" fill="#db2777"/><rect x="126" y="132" width="108" height="16" fill="#38bdf8"/><text x="242" y="144" font-size="8.5" fill="#334155" font-family="sans-serif">~15% REM (1h)</text></svg>',
      caption:
        "Pink = REM sleep (neural plasticity & neurotransmitter restoration); Blue = NREM sleep.",
    },
  ],
  history: {
    title: "The Night Eugene Aserinsky Thought His Son's Sleep Recorder Was Broken",
    story:
      "In 1953 at the University of Chicago, broke graduate student Eugene Aserinsky hooked up an antique ink-pen polygraph to his 8-year-old son Armond's eyelids overnight. Halfway through the night, the pens began scratching violently across the paper as if Armond were wide awake looking around the room! Convinced the old machine was malfunctioning, Aserinsky crept into the dark bedroom with a torch — and saw Armond fast asleep while his eyeballs darted beneath closed lids. Together with his supervisor Nathaniel Kleitman and medical student William Dement, Aserinsky had just discovered **REM paradoxical sleep**, overturning 2,000 years of belief that the sleeping brain simply powers down.",
  },
};
