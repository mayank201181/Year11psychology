import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "When newspaper headlines claimed 38 neighbours calmly watched Kitty Genovese die without lifting a finger, two young New York psychologists suspected human cruelty wasn't the culprit — crowd geometry was.",
  didYouKnow: [
    "Historical archives later revealed the famous '38 passive witnesses' story about Kitty Genovese was partly exaggerated by a newspaper editor — several neighbours *did* shout out of windows or phone police — yet the myth sparked 60 years of life-saving bystander science!",
    "Vampire bats (*Desmodus rotundus*) starve in just 60 hours without blood; fed bats regurgitate blood meals to hungry roost-mates and **remember cheaters**, refusing future help to bats that hoard blood (classic Trivers reciprocal altruism!).",
    "In Levine et al.'s (2001) 23-city street experiments, pedestrians in Rio de Janeiro helped a blind stranger cross the road or picked up dropped pens **more than twice as often** as pedestrians in New York or Kuala Lumpur — even though Rio's average income was a fraction of New York's.",
    "Toddlers as young as **14 to 18 months** spontaneously toddle across a room to pick up a clothespin an adult accidentally dropped (Warneken & Tomasello, 2006) — and bizarrely, giving toddlers **toy rewards** afterwards actually *reduces* their future helping via the overjustification effect!",
  ],
  activities: [
    {
      title: "The Dropped-Pen Field Micro-Observation",
      emoji: "🖊️",
      materials: ["A brightly coloured pen or stack of index cards", "A notebook or phone timer", "A partner acting as covert observer"],
      steps: [
        "Pick two safe, public school or mall walkways at quiet vs busy periods (never deceive or distress anyone — stick strictly to a harmless dropped pen!).",
        "Walk at a steady pace and 'accidentally' drop a pen clearly in view of (a) a single passer-by walking alone and (b) a cluster of 4+ people walking past.",
        "Have your partner covertly record whether anyone alerts you or picks up the pen within 10 seconds, and whether the passer-by was rushing or strolling.",
        "Thank anyone who helps and compare solo vs group helping rates!",
      ],
      maths:
        "Tests Latané & Darley's **diffusion of responsibility** (`1/n` duty share) alongside Levine et al.'s **walking-pace / time-pressure** situational factor in a harmless non-emergency.",
    },
    {
      title: "Hamilton's Kin-Rescue Ranking Lab",
      emoji: "🧬",
      materials: ["8 sticky notes", "Pen"],
      steps: [
        "Write eight fictional people on sticky notes: Identical Twin, Younger Sister, Mother, Grandmother, Half-Brother, First Cousin, Best Friend, Polite Stranger.",
        "Label each note with its genetic relatedness coefficient `r` (`1.0`, `0.5`, `0.5`, `0.25`, `0.25`, `0.125`, `0.0`, `0.0`).",
        "Rank whom people typically help first in (1) an everyday favour (lending $5 for lunch) vs (2) a high-risk emergency (running into a smoke-filled building).",
      ],
      maths:
        "Replicates Burnstein, Crandall & Kitayama (1994): Best Friend (`r = 0`) often beats First Cousin (`r = 0.125`) in everyday favours via **reciprocal altruism**, whereas high-cost emergencies snap sharply to **Hamilton's `r × B > C` kin curve**!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Latané & Darley (1968) Seizure Helping Rate vs Response Latency",
      svg: `<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of helping percentage and response latency across 2-person, 3-person, and 6-person intercom groups"><rect x="8" y="8" width="544" height="184" rx="12" fill="#f8fafc" stroke="#cbd5e1"/><text x="280" y="28" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#0f172a">As Bystander Count Rises, Helping Drops &amp; Latency Triples</text><g font-family="sans-serif" text-anchor="middle"><rect x="65" y="54" width="60" height="102" rx="5" fill="#2563eb"/><text x="95" y="48" font-size="11" font-weight="bold" fill="#1e3a8a">85%</text><text x="95" y="172" font-size="10" fill="#1e293b">0 others (52 s)</text><rect x="250" y="82" width="60" height="74" rx="5" fill="#3b82f6"/><text x="280" y="76" font-size="11" font-weight="bold" fill="#1e3a8a">62%</text><text x="280" y="172" font-size="10" fill="#1e293b">1 other (93 s)</text><rect x="435" y="119" width="60" height="37" rx="5" fill="#93c5fd"/><text x="465" y="113" font-size="11" font-weight="bold" fill="#1e3a8a">31%</text><text x="465" y="172" font-size="10" fill="#1e293b">4 others (166 s)</text><line x1="40" y1="156" x2="520" y2="156" stroke="#64748b"/></g></svg>`,
      caption: "Even over headphones with zero facial contact, adding four passive listeners slashed emergency reporting from 85% to 31% and slowed help from 52 s to 166 s.",
    },
  ],
  history: {
    title: "From a Tragic Headline to the New York Subway Lab",
    story:
      "In March 1964, *The New York Times* printed a front-page story claiming 38 respectable citizens in Queens watched from their apartment windows for half an hour as Kitty Genovese was attacked, without a single person calling police. Over dinner a few days later, Columbia psychologist Bibb Latané and NYU psychologist John Darley refused to accept the newspaper's lazy diagnosis of 'urban moral decay'. Instead, they asked a scientific question: what if the sheer *number* of witnesses trapped everyone in a psychological hall of mirrors? Within five years, Latané & Darley's cubicle intercom experiments (1968) and Jane & Irving Piliavin's bold express-train trials (1969) transformed emergency medicine, dispatcher protocols, and first-aid training around the world.",
  },
};
