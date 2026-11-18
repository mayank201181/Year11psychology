// Concept & Exam-Trap Shorts manifest for Year 11 IGCSE Psychology (0266).
export interface ShortCaption {
  t: number;
  who: string;
  text: string;
}

export interface ShortPart {
  src: string;
  start: number;
  duration: number;
}

export interface ShortClip {
  id: string;
  topicId: string;
  topicTitle: string;
  topicShort: string;
  topicIcon: string;
  strand: string;
  episodeTitle: string;
  index: number;
  totalInTopic: number;
  title: string;
  summary: string;
  startSec: number;
  endSec: number;
  durationSec: number;
  src?: string;
  parts?: ShortPart[];
  poster?: string;
  embedHref?: string;
  chapterId?: string;
  captions: ShortCaption[];
}

export const SHORTS: ShortClip[] = [
  {
    id: "memory-and-forgetting-s01",
    topicId: "memory-and-forgetting",
    topicTitle: "Topic 1: Memory & Forgetting",
    topicShort: "Memory & Forgetting",
    topicIcon: "🧠",
    strand: "Paper 1: Cognition, Behaviour & Experiments",
    episodeTitle: "Seven Plus Or Minus Dad",
    index: 1,
    totalInTopic: 2,
    title: "Multi-Store Model & Serial Position Hook",
    summary: "Why you remember the first and last items on a list — Murdock (1962), STM vs LTM coding, capacity and duration.",
    startSec: 0,
    endSec: 65,
    durationSec: 65,
    src: "/videos/memory-and-forgetting.mp4",
    poster: "/videos/posters/memory-and-forgetting.jpg",
    captions: [
      { t: 2, who: "Vani", text: "Primacy goes into long-term memory via rehearsal; recency stays active in short-term memory!" },
      { t: 30, who: "Dr. Synapse", text: "Atkinson and Shiffrin's Multi-Store Model separates sensory, short-term, and long-term stores." },
    ],
  },
  {
    id: "memory-and-forgetting-s02",
    topicId: "memory-and-forgetting",
    topicTitle: "Topic 1: Memory & Forgetting",
    topicShort: "Memory & Forgetting",
    topicIcon: "🧠",
    strand: "Paper 1: Cognition, Behaviour & Experiments",
    episodeTitle: "Seven Plus Or Minus Dad",
    index: 2,
    totalInTopic: 2,
    title: "Examiner Trap: Proactive vs Retroactive & Patient H.M.",
    summary: "How to avoid mixing up proactive vs retroactive interference and anterograde vs retrograde amnesia in Paper 1.",
    startSec: 120,
    endSec: 190,
    durationSec: 70,
    src: "/videos/memory-and-forgetting.mp4",
    poster: "/videos/posters/memory-and-forgetting.jpg",
    captions: [
      { t: 125, who: "Examiner Chen", text: "Proactive: old blocks new. Retroactive: recent blocks old. Never swap them!" },
      { t: 155, who: "Vani", text: "And H.M. kept procedural motor memory via his cerebellum despite hippocampal damage!" },
    ],
  },
  {
    id: "sleep-and-dreams-s01",
    topicId: "sleep-and-dreams",
    topicTitle: "Topic 2: Sleep & Dreams",
    topicShort: "Sleep & Dreams",
    topicIcon: "🌙",
    strand: "Paper 1: Cognition, Behaviour & Experiments",
    episodeTitle: "Manifest Destiny, Latent Chaos",
    index: 1,
    totalInTopic: 2,
    title: "90-Minute Ultradian Sleep Cycles & SCN Melatonin",
    summary: "NREM slow-wave delta repair vs REM paradoxical EEG, plus how light resets the suprachiasmatic nucleus.",
    startSec: 0,
    endSec: 65,
    durationSec: 65,
    src: "/videos/sleep-and-dreams.mp4",
    poster: "/videos/posters/sleep-and-dreams.jpg",
    captions: [
      { t: 4, who: "Dr. Synapse", text: "Circadian is your twenty-four hour sleep-wake rhythm; ultradian is each ninety-minute sleep cycle!" },
    ],
  },
  {
    id: "sleep-and-dreams-s02",
    topicId: "sleep-and-dreams",
    topicTitle: "Topic 2: Sleep & Dreams",
    topicShort: "Sleep & Dreams",
    topicIcon: "🌙",
    strand: "Paper 1: Cognition, Behaviour & Experiments",
    episodeTitle: "Manifest Destiny, Latent Chaos",
    index: 2,
    totalInTopic: 2,
    title: "Freud Manifest/Latent vs Activation-Synthesis",
    summary: "Freudian wish-fulfilment vs Hobson & McCarley's brainstem pons firing synthesised by the forebrain cortex.",
    startSec: 130,
    endSec: 200,
    durationSec: 70,
    src: "/videos/sleep-and-dreams.mp4",
    poster: "/videos/posters/sleep-and-dreams.jpg",
    captions: [
      { t: 135, who: "Examiner Chen", text: "Manifest content is the literal storyline you remember; latent content is the hidden unconscious wish!" },
    ],
  },
  {
    id: "prosocial-behaviour-s01",
    topicId: "prosocial-behaviour",
    topicTitle: "Topic 3: Prosocial Behaviour",
    topicShort: "Prosocial Behaviour",
    topicIcon: "🤝",
    strand: "Paper 1: Cognition, Behaviour & Experiments",
    episodeTitle: "Diffusion Of Dishwashing",
    index: 1,
    totalInTopic: 2,
    title: "Bystander Apathy: Latané & Darley vs Piliavin",
    summary: "Diffusion of responsibility, pluralistic ignorance, and Piliavin's New York subway cost-reward matrix.",
    startSec: 0,
    endSec: 65,
    durationSec: 65,
    src: "/videos/prosocial-behaviour.mp4",
    poster: "/videos/posters/prosocial-behaviour.jpg",
    captions: [
      { t: 5, who: "Vani", text: "More bystanders means less personal responsibility — unless the victim clearly needs medical aid!" },
    ],
  },
  {
    id: "prosocial-behaviour-s02",
    topicId: "prosocial-behaviour",
    topicTitle: "Topic 3: Prosocial Behaviour",
    topicShort: "Prosocial Behaviour",
    topicIcon: "🤝",
    strand: "Paper 1: Cognition, Behaviour & Experiments",
    episodeTitle: "Diffusion Of Dishwashing",
    index: 2,
    totalInTopic: 2,
    title: "Kin Selection, Empathy-Altruism & Prosocial Media",
    summary: "Rushton twin genetics, Batson's empathy-altruism vs Bandura's social learning and Prot et al. media effects.",
    startSec: 130,
    endSec: 200,
    durationSec: 70,
    src: "/videos/prosocial-behaviour.mp4",
    poster: "/videos/posters/prosocial-behaviour.jpg",
    captions: [
      { t: 135, who: "Examiner Chen", text: "Distinguish prosocial behaviour (any helpful act) from pure altruism (helping with zero self-reward)!" },
    ],
  },
  {
    id: "visual-perception-s01",
    topicId: "visual-perception",
    topicTitle: "Topic 4: Visual Perception",
    topicShort: "Visual Perception",
    topicIcon: "👁️",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    episodeTitle: "Seeing Is Deceiving",
    index: 1,
    totalInTopic: 2,
    title: "Gibson Bottom-Up vs Gregory Top-Down",
    summary: "Gibson & Walk's Visual Cliff vs Gregory's constructivist hypotheses and Haber & Levin's familiarity study.",
    startSec: 0,
    endSec: 65,
    durationSec: 65,
    src: "/videos/visual-perception.mp4",
    poster: "/videos/posters/visual-perception.jpg",
    captions: [
      { t: 5, who: "Dr. Synapse", text: "Sensation is raw retinal detection; perception is cortical organisation and interpretation!" },
    ],
  },
  {
    id: "visual-perception-s02",
    topicId: "visual-perception",
    topicTitle: "Topic 4: Visual Perception",
    topicShort: "Visual Perception",
    topicIcon: "👁️",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    episodeTitle: "Seeing Is Deceiving",
    index: 2,
    totalInTopic: 2,
    title: "Visual Illusions, Perceptual Set & Culture",
    summary: "Müller-Lyer, Ponzo, Ebbinghaus illusions and Bremner et al. (2016) Himba vs UK cross-cultural perception.",
    startSec: 130,
    endSec: 200,
    durationSec: 70,
    src: "/videos/visual-perception.mp4",
    poster: "/videos/posters/visual-perception.jpg",
    captions: [
      { t: 135, who: "Examiner Chen", text: "Remember: retinal disparity and convergence are BINOCULAR; linear perspective and occlusion are MONOCULAR!" },
    ],
  },
  {
    id: "motivation-and-needs-s01",
    topicId: "motivation-and-needs",
    topicTitle: "Topic 5: Motivation & Needs",
    topicShort: "Motivation & Needs",
    topicIcon: "🔥",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    episodeTitle: "Tokens Of Affection",
    index: 1,
    totalInTopic: 2,
    title: "Token Economies vs Overjustification",
    summary: "Boniecki & Moore (2003) classroom tokens vs Deci & Ryan's Autonomy, Competence and Relatedness (Calvo et al.).",
    startSec: 0,
    endSec: 65,
    durationSec: 65,
    src: "/videos/motivation-and-needs.mp4",
    poster: "/videos/posters/motivation-and-needs.jpg",
    captions: [
      { t: 5, who: "Vani", text: "Pay someone for a hobby they already love and watch intrinsic motivation vanish once tokens stop!" },
    ],
  },
  {
    id: "motivation-and-needs-s02",
    topicId: "motivation-and-needs",
    topicTitle: "Topic 5: Motivation & Needs",
    topicShort: "Motivation & Needs",
    topicIcon: "🔥",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    episodeTitle: "Tokens Of Affection",
    index: 2,
    totalInTopic: 2,
    title: "Maslow, Hull's Drive Reduction & SMART Goals",
    summary: "Deficiency vs growth needs, homeostasis drives, Merchant et al. nostalgia, and specific measurable SMART targets.",
    startSec: 130,
    endSec: 200,
    durationSec: 70,
    src: "/videos/motivation-and-needs.mp4",
    poster: "/videos/posters/motivation-and-needs.jpg",
    captions: [
      { t: 135, who: "Examiner Chen", text: "Hull's drive reduction explains hunger and thirst — NOT skydiving or curiosity!" },
    ],
  },
  {
    id: "language-development-s01",
    topicId: "language-development",
    topicTitle: "Topic 6: Language Development",
    topicShort: "Language Development",
    topicIcon: "🗣️",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    episodeTitle: "Wugs In The Hawker Centre",
    index: 1,
    totalInTopic: 2,
    title: "Holophrastic, Telegraphic & Overregularisation",
    summary: "Why saying 'two foots goed' proves children extract grammar rules rather than merely imitating adults.",
    startSec: 0,
    endSec: 65,
    durationSec: 65,
    src: "/videos/language-development.mp4",
    poster: "/videos/posters/language-development.jpg",
    captions: [
      { t: 5, who: "Vani", text: "No parent ever reinforces 'goed' — overregularisation is gold-standard evidence for rule extraction!" },
    ],
  },
  {
    id: "language-development-s02",
    topicId: "language-development",
    topicTitle: "Topic 6: Language Development",
    topicShort: "Language Development",
    topicIcon: "🗣️",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    episodeTitle: "Wugs In The Hawker Centre",
    index: 2,
    totalInTopic: 2,
    title: "Chomsky LAD vs Skinner vs Piaget Schemas",
    summary: "Senghas Nicaraguan Sign Language, Goldstein contingent babbling, Hewitt child schemas, and Bruner's LASS.",
    startSec: 130,
    endSec: 200,
    durationSec: 70,
    src: "/videos/language-development.mp4",
    poster: "/videos/posters/language-development.jpg",
    captions: [
      { t: 135, who: "Examiner Chen", text: "Chomsky = innate LAD; Bruner = social LASS; Piaget = cognitive schemas precede language!" },
    ],
  },
  {
    id: "research-methods-s01",
    topicId: "research-methods",
    topicTitle: "Topic 7: Research Methods",
    topicShort: "Research Methods",
    topicIcon: "🔬",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    episodeTitle: "Confounded At Birth",
    index: 1,
    totalInTopic: 2,
    title: "Operationalising IV, DV & Hypotheses",
    summary: "How to turn a 0-mark vague prediction into a full-mark CIE 0266 directional or non-directional hypothesis.",
    startSec: 0,
    endSec: 65,
    durationSec: 65,
    src: "/videos/research-methods.mp4",
    poster: "/videos/posters/research-methods.jpg",
    captions: [
      { t: 5, who: "Examiner Chen", text: "Operationalise BOTH conditions of the IV and the exact numerical score of the DV!" },
    ],
  },
  {
    id: "research-methods-s02",
    topicId: "research-methods",
    topicTitle: "Topic 7: Research Methods",
    topicShort: "Research Methods",
    topicIcon: "🔬",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    episodeTitle: "Confounded At Birth",
    index: 2,
    totalInTopic: 2,
    title: "Correlations, Sampling, Ethics (DRIP) & GRAVE",
    summary: "Negative vs zero correlation, random vs opportunity sampling, bar chart vs histogram, and reliability vs validity.",
    startSec: 130,
    endSec: 200,
    durationSec: 70,
    src: "/videos/research-methods.mp4",
    poster: "/videos/posters/research-methods.jpg",
    captions: [
      { t: 135, who: "Dr. Synapse", text: "Bar charts leave gaps between discrete categories; histograms touch across continuous intervals!" },
    ],
  },
];
