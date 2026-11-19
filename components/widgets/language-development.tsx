"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type EnvMode = "lass" | "passive" | "nsl";
type WugCase = "wug" | "rick" | "goed" | "overext";

interface WugItem {
  label: string;
  promptText: string;
  childReply: string;
  phenomenon: string;
  morphemes: string;
  whyItMatters: string;
}

const WUG_CASES: Record<WugCase, WugItem> = {
  wug: {
    label: "🐦 '1 Wug → 2 Wugs'",
    promptText: "'This is a WUG. Now there is another one. There are two ___?'",
    childReply: "'Two WUGS!' (/wʌgz/)",
    phenomenon: "Productive Plural Rule (Berko, 1958)",
    morphemes: "2 morphemes: root {wug} + voiced plural suffix {-s}",
    whyItMatters:
      "76% of preschoolers & 97% of 1st-graders pluralise a novel nonsense word instantly — proving internalised morphological rules rather than Skinnerian imitation!",
  },
  rick: {
    label: "🤸 'Ricks → Ricked'",
    promptText: "'Every day this man RICKS. Yesterday he ___?'",
    childReply: "'Yesterday he RICKED!' (/rɪkt/)",
    phenomenon: "Productive Past-Tense Inflection (Berko, 1958)",
    morphemes: "2 morphemes: root {rick} + voiceless past suffix {-ed}",
    whyItMatters:
      "Children automatically select voiceless /t/ after /k/ ('ricked') vs voiced /d/ ('spowed') without ever being taught phonology rules.",
  },
  goed: {
    label: "👣 'Goed & Foots'",
    promptText: "Natural spontaneous toddler speech at ~34 months",
    childReply: "'Daddy GOED work and hurt his FOOTS!'",
    phenomenon: "Grammatical Overregularisation (Multi-word stage)",
    morphemes: "Irregular roots {go}, {foot} forced into regular {-ed} / {-s}",
    whyItMatters:
      "Creates the U-shaped accuracy dip! Adults NEVER model or reinforce 'goed', refuting pure Behaviourism and supporting Chomsky's LAD rule extraction.",
  },
  overext: {
    label: "🐄 Cow = 'Doggy!'",
    promptText: "15-month-old sees a cow in a field for the first time",
    childReply: "'DOGGY!' (pointing at the four-legged cow)",
    phenomenon: "Semantic Overextension (Holophrastic stage — NOT overregularisation!)",
    morphemes: "1 free lexical morpheme stretched across a broad category",
    whyItMatters:
      "CIE Trap Alert: Overextension stretches *word meaning* (Piagetian assimilation into an existing 4-legged schema), whereas overregularisation applies *grammar suffixes*.",
  },
};

function LanguageStageWugLab() {
  const [months, setMonths] = useState(27);
  const [envMode, setEnvMode] = useState<EnvMode>("lass");
  const [wugKey, setWugKey] = useState<WugCase>("wug");

  let stageName = "1. Pre-linguistic Stage";
  let ageBand = "0–12 months";
  let mlu = "0 words (phonemic vocalising)";
  let sampleUtt =
    months < 3
      ? "Reflexive crying ('waaah')"
      : months < 6
        ? "Vowel cooing ('oooh, aaah')"
        : months < 9
          ? "Canonical babbling ('bababa, mamama')"
          : "Variegated babbling ('bamido?') + pointing";
  let structureNote = "Phonemes & prosody tuning; zero lexical morphemes yet.";

  if (months >= 12 && months < 18) {
    stageName = "2. Holophrastic (One-Word) Stage";
    ageBand = "12–18 months";
    mlu = "1.0 word (~1 morpheme)";
    sampleUtt = "'Juice!' · 'All gone!' · 'Doggy!' (overextended to cats)";
    structureNote = "1 word = whole communicative sentence; semantic over/underextension.";
  } else if (months >= 18 && months < 30) {
    stageName = months < 24 ? "3a. Two-Word Stage" : "3b. Telegraphic Stage";
    ageBand = "18–30 months";
    mlu = months < 24 ? "1.8–2.2 words" : "2.8–3.5 content words";
    sampleUtt =
      months < 24
        ? "'Mummy sock' · 'More milk' · 'Daddy went'"
        : "'Daddy go work now' · 'Doggy eat biscuit garden'";
    structureNote =
      "Content nouns/verbs in strict SVO order; omits functors ('the', 'is', 'in'); early irregulars ('went') echoed by rote.";
  } else if (months >= 30) {
    stageName = "4. Multi-Word (Post-Telegraphic) Stage";
    ageBand = "30–48+ months";
    mlu = "4.0–7.0+ words (bound morphemes active)";
    const inDip = months >= 30 && months <= 41;
    sampleUtt = inDip
      ? "'Yesterday we GOED to the park and saw two MOUSES!'"
      : "'Yesterday we went to the park — why do clouds float?'";
    structureNote = inDip
      ? "Auxiliaries + bound suffixes (-ed, -s) surge → Grammatical overregularisation dip!"
      : "Full recursive syntax, WH-questions, passives & irregular exceptions mastered.";
  }

  if (envMode === "passive" && months >= 9) {
    sampleUtt =
      months < 12
        ? "Less mature non-resonant babble (no contingent smile timing — Goldstein 2003)"
        : "Delayed syntax & sparse vocabulary (passive screen lacks LASS — 'Jim' case)";
  } else if (envMode === "nsl" && months >= 24) {
    sampleUtt = "Spontaneous spatial verb inflections & discrete sign syntax (Senghas 1995 Cohort 2!)";
  }

  const wug = WUG_CASES[wugKey];
  const xPos = 40 + (months / 48) * 280;
  const smoothBlend = (a: number, b: number, t: number) => a + (b - a) * (0.5 - 0.5 * Math.cos(Math.PI * t));
  const dotY =
    months < 12
      ? 150
      : months <= 26
        ? smoothBlend(135, 74, (months - 12) / 14)
        : months <= 37
          ? smoothBlend(74, 134, (months - 26) / 11)
          : smoothBlend(134, 66, (months - 37) / 11);

  return (
    <WidgetFrame
      title="Language-Stage Classifier & Berko 'Wug' Lab"
      tryThis={[
        "Scrub **Child Age** from **6 m → 15 m → 26 m → 35 m → 46 m** and watch the purple **U-shaped irregular accuracy dot** rise at 22 m (*rote 'went'*), dip at 35 m (*overregularised 'goed'*), and recover!",
        "Switch **Social Environment** to **Passive Screen / Non-Contingent** at 9 months or 30 months to compare **Goldstein et al. (2003)** and **Bruner's LASS** against Chomsky.",
        "Click all four cards in the **Wug & Error Tester** below to nail the CIE distinction between **overregularisation** and **overextension**.",
      ]}
      caption={
        <div className="space-y-1.5">
          <div>
            <strong>Chomsky (LAD):</strong>{" "}
            {months < 12
              ? "Universal babbling inventory starts biologically even in deaf infants; sensitive period window is wide open."
              : months < 30
                ? "Innate Universal Grammar preserves strict subject-verb-object word order even inside stripped-down telegraphic speech."
                : "Overregularising 'goed' (and Cohort 2 NSL syntax in Senghas, 1995) proves active rule construction, not adult mimicry."}
          </div>
          <div>
            <strong>Skinner / Goldstein (2003) &amp; Bruner (LASS):</strong>{" "}
            {envMode === "passive"
              ? "Without immediate contingent smiles/touches (Goldstein et al. 2003) or live two-way joint attention (Bruner's LASS), passive audio stalls phonological maturity and syntax!"
              : "Contingent caregiver smiles mature 8–10m canonical syllables (Goldstein 2003), while Piagetian schemas (Hewitt 2022) + LASS recasting scaffold concepts into fluent speech."}
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-line bg-surface-2 p-3.5">
            <Slider
              label="Child Age (0 to 48 months)"
              value={months}
              min={0}
              max={48}
              onChange={setMonths}
              format={(v) => `${v} mos (${(v / 12).toFixed(1)} yrs)`}
            />
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
                Social &amp; Linguistic Environment
              </div>
              <Segmented
                label="Social environment"
                value={envMode}
                onChange={setEnvMode}
                options={[
                  { value: "lass", label: "🗣️ Live LASS" },
                  { value: "passive", label: "📺 Non-Contingent" },
                  { value: "nsl", label: "👐 NSL (<10y)" },
                ]}
              />
            </div>
            <div className="rounded-lg border border-line bg-surface p-2.5 text-xs leading-relaxed">
              <div className="font-extrabold text-brand">{sampleUtt}</div>
              <div className="mt-1 text-ink-2">{structureNote}</div>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-surface p-3">
            <svg
              viewBox="0 0 350 185"
              className="w-full"
              role="img"
              aria-label="Timeline of four early language stages from 0 to 48 months with U-shaped irregular past-tense curve"
            >
              <text x="175" y="15" fontSize="11" fontWeight="700" textAnchor="middle" className="fill-ink">
                Stage Timeline &amp; U-Shaped Irregular Verb Curve
              </text>
              <rect x="40" y="26" width="70" height="22" fill="#dbeafe" stroke="#3b82f6" />
              <text x="75" y="40" fontSize="8.5" fontWeight="700" textAnchor="middle" fill="#1e3a8a">
                Pre-ling (0–12)
              </text>
              <rect x="110" y="26" width="35" height="22" fill="#dcfce7" stroke="#16a34a" />
              <text x="127.5" y="40" fontSize="8" fontWeight="700" textAnchor="middle" fill="#14532d">
                Holo
              </text>
              <rect x="145" y="26" width="70" height="22" fill="#fef9c3" stroke="#ca8a04" />
              <text x="180" y="40" fontSize="8.5" fontWeight="700" textAnchor="middle" fill="#713f12">
                Telegr (18–30)
              </text>
              <rect x="215" y="26" width="105" height="22" fill="#fce7f3" stroke="#db2777" />
              <text x="267.5" y="40" fontSize="8.5" fontWeight="700" textAnchor="middle" fill="#831843">
                Multi-word (30–48+)
              </text>

              <line x1="40" y1="152" x2="320" y2="152" className="stroke-ink-2" strokeWidth="1.2" />
              <line x1="40" y1="62" x2="40" y2="152" className="stroke-ink-2" strokeWidth="1.2" />
              <path
                d="M 110 135 Q 168 68 195 74 C 218 80, 232 136, 255 134 C 278 132, 298 68, 320 66"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2.5"
              />
              <line
                x1={xPos}
                y1="24"
                x2={xPos}
                y2="154"
                stroke="#0284c7"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              <circle cx={xPos} cy={dotY} r="5" fill="#0284c7" />
              <text x="180" y="172" fontSize="9" textAnchor="middle" className="fill-ink-2">
                Age scrubber ({months}m) · Purple curve = Irregular accuracy (&apos;went&apos; → &apos;goed&apos; → &apos;went&apos;)
              </text>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          <Readout label="Diagnosed Stage" value={stageName} tone="brand" />
          <Readout label="Typical Window" value={ageBand} tone="ink" />
          <Readout label="Utterance Span" value={mlu} tone="good" />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3.5 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-extrabold text-ink">
              🧪 Berko (1958) Wug &amp; Error Contrast Tester
            </span>
            <Segmented
              label="Wug test selector"
              value={wugKey}
              onChange={setWugKey}
              options={[
                { value: "wug", label: WUG_CASES.wug.label },
                { value: "rick", label: WUG_CASES.rick.label },
                { value: "goed", label: WUG_CASES.goed.label },
                { value: "overext", label: WUG_CASES.overext.label },
              ]}
            />
          </div>
          <div className="grid gap-2 sm:grid-cols-2 text-xs">
            <div className="rounded-lg bg-surface p-2.5 border border-line">
              <div className="font-bold text-ink-2">Stimulus: {wug.promptText}</div>
              <div className="mt-1 text-sm font-extrabold text-brand">{wug.childReply}</div>
              <div className="mt-1 font-semibold text-ink">{wug.morphemes}</div>
            </div>
            <div className="rounded-lg bg-surface p-2.5 border border-line">
              <div className="font-extrabold text-good">{wug.phenomenon}</div>
              <div className="mt-1 leading-relaxed text-ink-2">{wug.whyItMatters}</div>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "language-stage-wug-lab",
    title: "Language-Stage Classifier & Wug Overregularisation Lab",
    blurb:
      "Scrub child age from 0 to 48 months, toggle contingent LASS vs passive exposure, and test Berko's 'wug' prompts to compare Chomsky, Skinner, Piaget and Bruner.",
    Component: LanguageStageWugLab,
  },
];
