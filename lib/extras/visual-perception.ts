import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Right now, there is a hole the size of a grape on each of your retinas with zero light receptors at all — yet you never see two black holes floating in front of your face because your visual cortex paints over them live!",
  didYouKnow: [
    "In 1896, psychologist George Stratton wore special prisms for **eight straight days** that flipped the entire world upside-down and backwards — by Day 5, his visual cortex adapted so completely that he could walk and pour tea upright, until taking the goggles off flipped the world upside-down again!",
    "Patients with schizophrenia often **do NOT fall for Richard Gregory's Hollow Mask Illusion** — because their top-down 'faces are always convex' prior expectation is weaker, they accurately perceive the hollow inside of the mask!",
    "Chameleons can move both eyes independently, and instead of binocular disparity they judge exact insect-strike distance with **one eye** using super-precise lens accommodation!",
    "In **Bremner et al.'s (2016)** Ebbinghaus illusion tests, traditional rural **Himba** adults in Namibia out-performed London university students by a huge margin — refusing to be tricked by giant or tiny surrounding circles because their culture trains razor-sharp **local attention**!",
  ],
  activities: [
    {
      title: "Find Your Retinal Blind Spot & Watch Closure Fill It In",
      emoji: "🎯",
      materials: ["A strip of lined notebook paper", "A dark marker pen"],
      steps: [
        "Draw a small solid **+** on the left side of the paper and a solid **●** (dot) exactly **10 cm to the right** on the same horizontal ruled line.",
        "Close your **left eye**, hold the paper at arm's length, and stare steadily at the **+** with your **right eye** (do not glance at the dot!).",
        "Slowly bring the paper closer toward your face: at around **25–30 cm**, the black dot vanishes completely — yet notice the blue notebook line **continues unbroken** right across the missing spot!",
      ],
      maths:
        "Where the optic nerve exits the retina (optic disc), there are **0 rods or cones** (zero sensation). Instead of leaving a black gap, cortical **top-down completion / Gestalt closure** extrapolates the background pattern seamlessly!",
    },
    {
      title: "The Floating 'Frankfurter Sausage' Retinal Disparity Demo",
      emoji: "👀",
      materials: ["Just your two index fingers!"],
      steps: [
        "Hold both index fingers horizontally in front of your eyes at ~25 cm distance, tips touching end-to-end.",
        "Look *past* your fingers to focus on a distant wall across the room (changing binocular **convergence**).",
        "Pull your fingertips 1 cm apart: a miniature two-ended 'floating sausage' finger magically hovers in mid-air between them! Close one eye and watch it vanish instantly.",
      ],
      maths:
        "Because your eyes are converged on the far wall, your left and right retinas receive **overlapping disparate images** of your near fingertips (**retinal disparity**), which only exists when **both eyes** are open!",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Ames Room: When Size Constancy Loses a Tug-of-War to Linear Perspective",
      svg: `<svg viewBox="0 0 560 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top-down trapezoidal plan of an Ames Room showing how one distant corner shrinks a twin while a near corner makes an identical twin look giant"><rect x="8" y="8" width="544" height="189" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><text x="280" y="28" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">Adelbert Ames's Trapezoidal Room (Viewed Through 1-Eye Peephole)</text><g font-family="sans-serif"><polygon points="60,48 250,86 250,162 60,162" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><circle cx="155" cy="180" r="6" fill="#1e293b"/><text x="155" y="194" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#0f172a">1-Eye Peephole (Kills Binocular Cues!)</text><line x1="155" y1="174" x2="72" y2="58" stroke="#dc2626" stroke-dasharray="4,3"/><line x1="155" y1="174" x2="238" y2="92" stroke="#16a34a" stroke-dasharray="4,3"/><circle cx="72" cy="58" r="7" fill="#dc2626"/><text x="72" y="42" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#991b1b">Far Twin (2× distance)</text><circle cx="238" cy="92" r="7" fill="#16a34a"/><text x="228" y="76" font-size="9.5" font-weight="bold" text-anchor="middle" fill="#14532d">Near Twin</text><rect x="318" y="52" width="210" height="122" rx="6" fill="#fff" stroke="#475569" stroke-width="1.5"/><text x="423" y="70" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#0f172a">What Your Brain Sees:</text><circle cx="368" cy="134" r="7" fill="#dc2626"/><line x1="368" y1="141" x2="368" y2="162" stroke="#dc2626" stroke-width="3"/><text x="368" y="122" font-size="9" text-anchor="middle" fill="#991b1b">'Tiny'</text><circle cx="478" cy="98" r="13" fill="#16a34a"/><line x1="478" y1="111" x2="478" y2="162" stroke="#16a34a" stroke-width="5"/><text x="478" y="80" font-size="9" text-anchor="middle" fill="#14532d">'Giant!'</text><line x1="330" y1="162" x2="516" y2="162" stroke="#64748b"/></g></svg>`,
      caption: "Peeking with one eye removes binocular disparity, while trapezoidal walls mimic a normal rectangular room (Gregory's carpentered-world schema) — forcing your brain to misjudge twin sizes instead of room shape!",
    },
  ],
  history: {
    title: "Eleanor Gibson's Picnic Blanket at the Grand Canyon",
    story:
      "During a family road trip in the 1940s, psychologist Eleanor Jack Gibson perched nervously at the rim of the Grand Canyon while her toddler daughter peered near the sheer drop. Her husband — future rival theorist James J. Gibson! — casually assured her that toddlers naturally recognise cliffs, yet Eleanor realised science had zero controlled proof. Years later at Cornell University, Eleanor Gibson and Richard Walk built the first **Visual Cliff** out of salvaged laboratory glass and red-and-white checkered oilcloth bought from a dime store. When 24 of 27 crawling babies flatly refused their own mothers' beckoning hands across the deep glass — and day-old goat kids froze stiff the instant they saw the drop — developmental psychology gained one of its most iconic experiments.",
  },
};
