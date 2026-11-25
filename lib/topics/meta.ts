// ---------------------------------------------------------------------------
// Topic registry: order, strand, icon and the fixed guide-section outline.
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Pure data — safe to import from Node scripts.
//
// Source: Cambridge IGCSE Psychology (0266) — 2027–2029 specification &
// Tanglin Trust School Senior School IGCSE Psychology (Paper 1 & Paper 2).
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** Sixth Form IB/A-Level Psychology look-ahead. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Which IGCSE year normally teaches this topic (Year 10 vs Year 11). */
  courseYear: 10 | 11;
  /** Teaching order used when ?year=10 is active (1..N). */
  courseOrder: number;
  /** Which CIE 0266 syllabus component & core studies this topic covers. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Paper 1: Cognition, Behaviour & Experiments",
  "Paper 2: Perception, Development & Non-Experimental",
];

export const TOPIC_META: TopicMeta[] = [
  // =========================================================================
  // PAPER 1: COGNITION, BEHAVIOUR & EXPERIMENTS
  // =========================================================================
  {
    id: "memory-and-forgetting",
    title: "Topic 1: Memory & Forgetting",
    strand: "Paper 1: Cognition, Behaviour & Experiments",
    icon: "🧠",
    courseYear: 10,
    courseOrder: 2,
    curriculum: "CIE 0266 Paper 1 — Multi-Store Model (Atkinson & Shiffrin; Murdock 1962), Working Memory (Baddeley & Hitch) & Levels of Processing (Craik & Tulving 1975), Reconstructive Schemas (Bartlett), Forgetting, Brain & Amnesia (Milner et al. 1968 on H.M.)",
    sections: [
      {
        id: "processes-and-msm",
        heading: "Encoding, Storage, Retrieval & the Multi-Store Model",
        covers: "Encoding/coding, capacity and duration of Sensory Register, Short-Term Memory (7±2 items, acoustic, 18–30s) and Long-Term Memory (unlimited, semantic, lifetime) in Atkinson & Shiffrin's Multi-Store Model; Murdock (1962) Serial Position Effect (primacy & recency) as empirical support.",
      },
      {
        id: "working-memory-levels",
        heading: "Working Memory & Levels of Processing",
        covers: "Baddeley & Hitch's Working Memory Model (central executive, phonological loop, visuo-spatial sketchpad, episodic buffer, dual-task evidence) and Craik & Tulving (1975) Levels of Processing (structural, phonemic and deep semantic processing).",
      },
      {
        id: "reconstructive-schemas",
        heading: "Reconstructive Memory & Schemas",
        covers: "Bartlett's Theory of Reconstructive Memory and cultural schemas (War of the Ghosts): assimilation, levelling, sharpening and confabulation; eyewitness testimony implications.",
      },
      {
        id: "explanations-forgetting",
        heading: "Explanations of Forgetting",
        covers: "Trace decay, displacement from STM, cue-dependent retrieval failure (context-dependent & state-dependent cues), proactive vs retroactive interference, and psychodynamic motivated forgetting (repression).",
      },
      {
        id: "brain-and-amnesia",
        heading: "Brain Structures in Memory & Amnesia",
        covers: "Localisation of memory: hippocampus (episodic/declarative consolidation), cerebellum & basal ganglia (procedural skills), amygdala (emotional memory), prefrontal cortex; anterograde vs retrograde amnesia and Milner et al. (1968) / Scoville & Milner case study of patient H.M.",
      },
    ],
  },
  {
    id: "sleep-and-dreams",
    title: "Topic 2: Sleep & Dreams",
    strand: "Paper 1: Cognition, Behaviour & Experiments",
    icon: "🌙",
    courseYear: 10,
    courseOrder: 3,
    curriculum: "CIE 0266 Paper 1 — NREM & REM Sleep Stages, Ultradian & Circadian Rhythms (SCN & Melatonin), Restoration (Robinson et al. 2018) vs Evolutionary Theories, Insomnia & Sleep Hygiene, Freud (Iorio et al. 2020) vs Activation-Synthesis (Hobson & McCarley; Williams et al. 1992)",
    sections: [
      {
        id: "sleep-stages-eeg",
        heading: "Stages of Sleep, EEG Waves & Ultradian Cycles",
        covers: "Polysomnography & EEG patterns across NREM Stages 1–3 (alpha, theta, sleep spindles, slow-wave delta SWS) and REM paradoxical sleep (beta-like EEG, rapid eye movements, muscle atonia); the ~90-minute ultradian sleep cycle hypnogram across the night.",
      },
      {
        id: "circadian-rhythms-scn",
        heading: "Circadian Rhythms, the SCN & Melatonin",
        covers: "The ~24-hour circadian sleep-wake cycle; endogenous pacemakers (hypothalamic suprachiasmatic nucleus / SCN and pineal gland melatonin secretion) interacting with exogenous zeitgebers (light, social cues); jet lag and shift work.",
      },
      {
        id: "theories-of-sleep",
        heading: "Restoration vs Evolutionary Theories of Sleep",
        covers: "Oswald's Restoration Theory (SWS growth hormone release & physical tissue repair; REM brain protein synthesis, neurotransmitter replenishment & memory consolidation) vs Meddis's Evolutionary / Ecological Theory (energy conservation & predator avoidance).",
      },
      {
        id: "sleep-disorders-hygiene",
        heading: "Insomnia, Parasomnias & Sleep Hygiene",
        covers: "Symptoms and causes of sleep-onset vs sleep-maintenance insomnia and sleepwalking (somnambulism in SWS); evidence-based sleep hygiene (consistent wake time, limiting blue light/caffeine, dark cool bedroom, stimulus control).",
      },
      {
        id: "dream-theories",
        heading: "Freudian vs Activation-Synthesis Dream Theories",
        covers: "Freud's Psychoanalytic Dream Theory (unconscious wish-fulfilment, manifest content vs latent content, dreamwork condensation/displacement/symbolism) vs Hobson & McCarley's neurobiological Activation-Synthesis Theory (brainstem pons random firing interpreted by forebrain cortex) & trauma/pandemic dreaming (Iorio et al.).",
      },
    ],
  },
  {
    id: "prosocial-behaviour",
    title: "Topic 3: Prosocial Behaviour",
    strand: "Paper 1: Cognition, Behaviour & Experiments",
    icon: "🤝",
    courseYear: 10,
    courseOrder: 4,
    curriculum: "CIE 0266 Paper 1 — Bystander Apathy & Intervention (Latané & Darley), Cost-Reward Model (Piliavin; Levine et al. 2005 & 2001), Biological/Kin Selection (Rushton 2004 & 1986) vs Empathy-Altruism & Social Learning, Media & Parental Influences (Prot et al. 2014)",
    sections: [
      {
        id: "bystander-apathy",
        heading: "Bystander Apathy, Diffusion of Responsibility & Pluralistic Ignorance",
        covers: "Prosocial behaviour vs altruism; Latané & Darley's (1968) intercom seizure experiment and 5-step cognitive decision model (notice event, interpret as emergency, assume responsibility, know how to help, decide to act); diffusion of responsibility and pluralistic ignorance.",
      },
      {
        id: "cost-reward-piliavin",
        heading: "Cost-Reward Arousal Model & Situational Factors",
        covers: "Piliavin et al. (1969) New York subway Samaritan field experiment (ill victim with cane vs drunk victim); arousal-cost-reward matrix (costs of helping vs costs of not helping); situational factors (mood, time pressure, victim similarity/in-group & cross-cultural city helping — Levine et al.).",
      },
      {
        id: "biological-evolutionary",
        heading: "Biological & Evolutionary Explanations of Helping",
        covers: "Evolutionary kin selection (inclusive fitness / Hamilton's rule) and Trivers's reciprocal altruism; genetic heritability & twin-study evidence for empathy and altruism (Rushton et al.); oxytocin and neural empathy circuits.",
      },
      {
        id: "empathy-social-learning",
        heading: "Empathy-Altruism & Social Learning Explanations",
        covers: "Batson's Empathy-Altruism Hypothesis (empathic concern driving true altruism vs personal distress driving egoistic escape) and Social Learning Theory (observational learning, role-model imitation, vicarious reinforcement and social responsibility/reciprocity norms).",
      },
      {
        id: "media-parental-influences",
        heading: "Media & Parental Influences on Prosocial Behaviour",
        covers: "Parental socialisation (warmth, secure attachment, inductive reasoning discipline, modelling charity) and prosocial media effects (prosocial video games, TV & lyrics increasing empathy and helping across cultures — Prot et al.).",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: PERCEPTION, DEVELOPMENT & NON-EXPERIMENTAL
  // =========================================================================
  {
    id: "visual-perception",
    title: "Topic 4: Visual Perception",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    icon: "👁️",
    courseYear: 11,
    courseOrder: 5,
    curriculum: "CIE 0266 Paper 2 — Sensation vs Perception, Depth Cues & Constancy, Gestalt Laws & Illusions, Gibson Direct Theory (Gibson & Walk 1960) vs Gregory Constructivist Theory (Haber & Levin 2001), Perceptual Set & Culture (Bremner et al. 2016)",
    sections: [
      {
        id: "sensation-depth-constancy",
        heading: "Sensation vs Perception, Depth Cues & Perceptual Constancy",
        covers: "Retinal sensation vs cortical perception; monocular depth cues (linear perspective, relative size, occlusion/interposition, height in plane, texture gradient) vs binocular depth cues (retinal disparity & convergence); size, shape and colour constancy.",
      },
      {
        id: "gestalt-and-illusions",
        heading: "Gestalt Laws & Visual Illusions",
        covers: "Gestalt principles of organisation (figure-ground — Rubin's vase, proximity, similarity, continuity, closure — Kanizsa subjective contour triangle); ambiguous figures (Necker cube) and geometric distortions (Müller-Lyer, Ponzo and Ebbinghaus illusions).",
      },
      {
        id: "gibson-direct-theory",
        heading: "Gibson's Direct Theory of Perception (Bottom-Up)",
        covers: "Data-driven bottom-up processing: rich environmental array, optic flow patterns, texture gradients, invariants and ecological affordances; Gibson & Walk (1960) Visual Cliff infant depth perception study; strengths and limits with illusions.",
      },
      {
        id: "gregory-constructivist",
        heading: "Gregory's Constructivist Theory of Perception (Top-Down)",
        covers: "Conceptually driven top-down processing: perception as active hypothesis testing using stored schemas and past experience; misplaced size-constancy scaling in Müller-Lyer & Ponzo illusions; Haber & Levin (2001) object familiarity and distance perception.",
      },
      {
        id: "perceptual-set-culture",
        heading: "Perceptual Set: Motivation, Emotion, Expectation & Culture",
        covers: "Factors shaping perceptual readiness/set: expectation & context (Bruner & Minturn B/13), physiological motivation/hunger (Gilchrist & Nesberg), emotion/perceptual defence, and culture & visual environment (carpentered-world hypothesis & Bremner et al. 2016 Himba vs UK Ebbinghaus illusion study).",
      },
    ],
  },
  {
    id: "motivation-and-needs",
    title: "Topic 5: Motivation & Needs",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    icon: "🔥",
    courseYear: 11,
    courseOrder: 6,
    curriculum: "CIE 0266 Paper 2 — Intrinsic vs Extrinsic & Positive Reinforcement (Boniecki & Moore 2003), Maslow's Hierarchy, Self-Determination Theory (Calvo et al. 2010), Drive-Reduction, Incentive & Psychodynamic Nostalgia (Merchant et al. 2013), SMART Goals",
    sections: [
      {
        id: "intrinsic-extrinsic-reinforcement",
        heading: "Intrinsic vs Extrinsic Motivation & Positive Reinforcement",
        covers: "Intrinsic vs extrinsic motivation; behaviourist positive reinforcement, praise and classroom token economies (Boniecki & Moore 2003 participation study); the overjustification effect when tangible rewards crowd out intrinsic interest.",
      },
      {
        id: "maslow-hierarchy",
        heading: "Maslow's Hierarchy of Needs",
        covers: "Humanistic 5-tier pyramid: deficiency (D) needs (physiological, safety, love & belonging, esteem) vs growth (B) need (self-actualisation); holistic person-centred strengths vs cultural individualism bias and non-sequential exceptions.",
      },
      {
        id: "self-determination-theory",
        heading: "Self-Determination Theory (Autonomy, Competence, Relatedness)",
        covers: "Deci & Ryan's Self-Determination Theory: satisfying autonomy, competence and relatedness fosters autonomous intrinsic motivation; Calvo et al. (2010) longitudinal study of adolescent sport persistence vs dropout.",
      },
      {
        id: "drive-incentive-psychodynamic",
        heading: "Drive-Reduction, Cognitive Incentive & Psychodynamic Motivation",
        covers: "Hull's Biological Drive-Reduction Theory (homeostasis, physiological need → drive → drive-reducing behaviour, primary vs secondary drives; thrill-seeking critique), Incentive 'pull' & Yerkes-Dodson optimal arousal, and psychodynamic unconscious/nostalgic motivation in advertising (Merchant et al. 2013).",
      },
      {
        id: "goal-setting-applications",
        heading: "SMART Goal-Setting & Applications to Education, Work & Sport",
        covers: "Locke & Latham's cognitive Goal-Setting Theory and SMART targets (Specific, Measurable, Achievable, Realistic/Relevant, Time-bound); designing evidence-based motivation interventions in classrooms, workplaces and athletic coaching.",
      },
    ],
  },
  {
    id: "language-development",
    title: "Topic 6: Language Development",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    icon: "🗣️",
    courseYear: 11,
    courseOrder: 7,
    curriculum: "CIE 0266 Paper 2 — Stages of Language Acquisition & Overregularisation, Chomsky Nativist LAD (Senghas 1995), Behaviourist Learning Theory (Goldstein, King & West 2003), Piaget Cognitive Schemas (Hewitt 2022) & Bruner LASS, Animal vs Human Communication",
    sections: [
      {
        id: "stages-language-acquisition",
        heading: "Stages of Early Language Acquisition",
        covers: "Universal sequence: pre-linguistic stage (crying, cooing, canonical/variegated babbling 0–12m), holophrastic one-word stage (12–18m, overextension/underextension), two-word & telegraphic stage (18–30m, content words without functor inflections), multi-word stage & grammatical overregularisation ('goed', 'foots', Berko's 'wug' test).",
      },
      {
        id: "chomsky-nativist-lad",
        heading: "Chomsky's Nativist Theory & the LAD",
        covers: "Biological pre-wiring: innate Language Acquisition Device (LAD), Universal Grammar, poverty of the stimulus argument, critical/sensitive period hypothesis (Lenneberg / Genie); Senghas (1995) Nicaraguan Sign Language emergence in deaf children.",
      },
      {
        id: "learning-behaviourist",
        heading: "Learning & Behaviourist Theory of Language",
        covers: "Skinner's operant conditioning (selective positive reinforcement, shaping successive approximations) and Bandura's imitation/modelling; Goldstein, King & West (2003) contingent social feedback shaping infant babbling; novel-utterance & overregularisation critiques.",
      },
      {
        id: "piaget-bruner-cognitive",
        heading: "Piaget's Cognitive Theory & Bruner's Interactionist LASS",
        covers: "Piaget's cognitive prerequisite view (sensorimotor object permanence & schemas via assimilation/accommodation precede linguistic symbols — Hewitt 2022 child schema case studies) and Bruner's social interactionist Language Acquisition Support System (LASS, scaffolding & child-directed speech).",
      },
      {
        id: "animal-vs-human",
        heading: "Animal Communication vs Human Language",
        covers: "Hockett's design features: semanticity, displacement (talking about past/future/absent things), productivity/infinite creativity and cultural transmission; von Frisch's honeybee waggle dance and great-ape sign/lexigram studies (Kanzi/Washoe) vs open-ended human recursive syntax.",
      },
    ],
  },
  {
    id: "research-methods",
    title: "Topic 7: Research Methods (Experimental, Non-Experimental & Data)",
    strand: "Paper 2: Perception, Development & Non-Experimental",
    icon: "🔬",
    courseYear: 10,
    courseOrder: 1,
    curriculum: "CIE 0266 Paper 1 Experimental Methods + Paper 2 Non-Experimental Methods & Data Analysis — IV/DV Operationalisation, Hypotheses, Designs, Sampling, Self-Reports, Observations, Case Studies, Correlations, Ethics, Reliability/Validity, Stats & Graphs",
    sections: [
      {
        id: "variables-hypotheses-controls",
        heading: "Variables, Operationalisation, Hypotheses & Controls",
        covers: "Independent Variable (IV) & Dependent Variable (DV) with strict CIE operationalisation; directional (one-tailed), non-directional (two-tailed) and null hypotheses; extraneous vs confounding variables, situational & participant variables, demand characteristics, investigator effects, standardisation, randomisation and single/double-blind procedures.",
      },
      {
        id: "experiments-designs-sampling",
        heading: "Experimental Methods, Designs & Sampling (Paper 1 Core)",
        covers: "Laboratory, Field and Natural/Quasi experiments (cause-and-effect vs mundane realism); Independent Measures, Repeated Measures (order effects: practice/fatigue & ABBA counterbalancing) and Matched Pairs designs; target population & Random, Opportunity, Volunteer (self-selecting), Stratified and Systematic sampling.",
      },
      {
        id: "non-experimental-methods",
        heading: "Questionnaires, Interviews, Observations, Case Studies & Correlations (Paper 2 Core)",
        covers: "Self-reports (open vs closed questions, Likert/rating scales, structured vs unstructured interviews, social desirability & response bias); Observations (naturalistic vs controlled, covert vs overt, participant vs non-participant, operationalised behavioural categories, event vs time sampling); longitudinal/in-depth Case Studies; Correlations (co-variables, positive, negative & zero correlation — correlation ≠ causation).",
      },
      {
        id: "ethics-reliability-validity",
        heading: "Ethics, Reliability & Validity",
        covers: "Ethical guidelines (Informed Consent, Presumptive/Prior General Consent, Deception, Protection from Psychological & Physical Harm, Right to Withdraw, Confidentiality, Privacy & Full Debriefing); Reliability (consistency: test-retest, inter-observer/inter-rater) vs Validity (accuracy: internal validity, ecological validity, population validity / generalisability — GRAVE).",
      },
      {
        id: "data-analysis-graphs",
        heading: "Quantitative vs Qualitative Data, Descriptive Statistics & Graphs",
        covers: "Quantitative vs Qualitative data and Primary vs Secondary data; calculating and choosing Mean, Median, Mode, Range, Percentages and Ratios (including outlier sensitivity); Frequency Tables, Bar Charts (discrete categories, gaps between bars), Histograms (continuous class intervals, touching bars) and Scattergraphs (plotting co-variables & interpreting correlation).",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
