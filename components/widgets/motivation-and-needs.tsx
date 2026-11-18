"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type Domain = "school" | "sport" | "work";
type BaseSecurity = "secure" | "deprived";

const DOMAIN_INFO: Record<
  Domain,
  {
    label: string;
    contextTitle: string;
    autonomyEx: string;
    competenceEx: string;
    relatednessEx: string;
    extrinsicEx: string;
    studyCite: string;
  }
> = {
  school: {
    label: "🏫 Classroom",
    contextTitle: "Year 11 Psychology Seminar & Revision",
    autonomyEx: "Choice over essay focus & revision strategy",
    competenceEx: "Optimal stretch + sincere mastery verbal praise",
    relatednessEx: "Supportive study peers & warm teacher rapport",
    extrinsicEx: "Expected cash / wooden tokens per answer",
    studyCite: "Boniecki & Moore (2003) token reversal & Lepper (1973) overjustification",
  },
  sport: {
    label: "⚽ Youth Sport",
    contextTitle: "Competitive Adolescent Squad (13–17 yrs)",
    autonomyEx: "Athlete input into tactical drills & personal SMART goals",
    competenceEx: "Controllable technique feedback vs public shaming",
    relatednessEx: "Inclusive squad camaraderie vs cliquey rivalry",
    extrinsicEx: "Win-bonus bribes / coach threats for mistakes",
    studyCite: "Calvo et al. (2010) 1-year footballer persistence vs dropout study",
  },
  work: {
    label: "💼 Workplace",
    contextTitle: "Design & Operations Team",
    autonomyEx: "Flexible task ownership vs rigid call-script surveillance",
    competenceEx: "Clear SMART feedback (Locke & Latham) & skill growth",
    relatednessEx: "Collaborative team respect & mentorship",
    extrinsicEx: "Controlling commission quotas & penalty threats",
    studyCite: "Locke & Latham (1990) SMART goals + Maslow workplace welfare",
  },
};

function MotivationScenarioMatrix() {
  const [domain, setDomain] = useState<Domain>("sport");
  const [baseSecurity, setBaseSecurity] = useState<BaseSecurity>("secure");
  const [autonomy, setAutonomy] = useState(72);
  const [competence, setCompetence] = useState(70);
  const [relatedness, setRelatedness] = useState(75);
  const [extrinsicDep, setExtrinsicDep] = useState(25);

  const info = DOMAIN_INFO[domain];
  const arcMean = (autonomy + competence + relatedness) / 3;
  const securityPenalty = baseSecurity === "deprived" ? 32 : 0;

  // Overjustification kicks in strongly when intrinsic ARC potential is decent/high AND expected tangible extrinsic dependency is high
  const overjustPenalty =
    extrinsicDep > 55 ? Math.round(((extrinsicDep - 55) / 45) * (arcMean > 45 ? 28 : 14)) : 0;

  const rawIntrinsic = Math.round(
    Math.max(4, Math.min(99, arcMean * 0.92 - overjustPenalty - securityPenalty + (extrinsicDep <= 30 ? 4 : 0))),
  );

  // Short-term compliance can still look high under heavy tokens/quotas even as intrinsic persistence suffers
  const shortTermCompliance = Math.round(
    Math.max(10, Math.min(99, rawIntrinsic * 0.55 + extrinsicDep * 0.52 - (baseSecurity === "deprived" ? 20 : 0))),
  );

  const dropoutRisk = Math.round(Math.max(3, Math.min(96, 100 - rawIntrinsic)));

  let statusLabel = "Autonomous Persistence";
  let statusTone: "good" | "brand" | "bad" = "good";
  if (baseSecurity === "deprived") {
    statusLabel = "D-Need Block (Tiers 1–2)";
    statusTone = "bad";
  } else if (extrinsicDep >= 65 && arcMean >= 50) {
    statusLabel = "Overjustification Risk";
    statusTone = "bad";
  } else if (arcMean < 40) {
    statusLabel = "Amotivation / Dropout";
    statusTone = "bad";
  } else if (arcMean < 62) {
    statusLabel = "Controlled Compliance";
    statusTone = "brand";
  }

  let maslowTier = "5. Self-Actualisation";
  let maslowIndex = 5;
  if (baseSecurity === "deprived") {
    maslowTier = "1–2. Physiological / Safety";
    maslowIndex = 1;
  } else if (relatedness < 45) {
    maslowTier = "3. Love & Belonging Deficit";
    maslowIndex = 3;
  } else if (competence < 48) {
    maslowTier = "4. Esteem Deficit";
    maslowIndex = 4;
  } else if (autonomy < 55 || extrinsicDep > 65) {
    maslowTier = "4. External Esteem Focus";
    maslowIndex = 4;
  }

  const tiers = [
    { idx: 5, name: "5. Self-Actualisation (B-Need)", y: 24, w: 120, color: "#eab308" },
    { idx: 4, name: "4. Esteem (Mastery & Respect)", y: 58, w: 170, color: "#8b5cf6" },
    { idx: 3, name: "3. Love & Belonging", y: 92, w: 220, color: "#ec4899" },
    { idx: 2, name: "2. Safety & Security", y: 126, w: 270, color: "#0ea5e9" },
    { idx: 1, name: "1. Physiological Survival", y: 160, w: 320, color: "#22c55e" },
  ];

  return (
    <WidgetFrame
      title="Motivation & Self-Determination Scenario Matrix"
      tryThis={[
        "Switch to **Youth Sport**, drag **Autonomy** and **Relatedness** below 30% to reproduce **Calvo et al. (2010)** athlete amotivation and dropout.",
        "Set all three **ARC** sliders above 75%, then push **Tangible Extrinsic Bribes** to 90% — watch **short-term compliance** stay high while **post-reward intrinsic persistence** drops (**overjustification effect**!).",
        "Flip **Maslow Tiers 1–2 Baseline** to **Deprived** to see why creative growth stalls when food, sleep or safety are missing.",
      ]}
      caption={
        <div className="space-y-1">
          <div>
            <strong>{info.contextTitle}</strong> ({info.studyCite}):{" "}
            {baseSecurity === "deprived" ? (
              <span>
                Unmet <strong>Maslow Tier 1–2 deficiency needs</strong> (hunger, exhaustion or fear) hijack attention first, suppressing long-term intrinsic growth even if tasks look appealing.
              </span>
            ) : extrinsicDep >= 65 && arcMean >= 50 ? (
              <span>
                <strong>Overjustification alert!</strong> Heavy tangible bribes boost immediate token-phase output ({shortTermCompliance}%), just like Phase B of <strong>Boniecki &amp; Moore (2003)</strong>, but shift attribution outward so intrinsic persistence drops to {rawIntrinsic}% once rewards stop.
              </span>
            ) : arcMean < 40 ? (
              <span>
                <strong>Amotivation warning!</strong> Thwarting Deci &amp; Ryan&apos;s basic psychological needs pushes dropout risk to {dropoutRisk}%, matching <strong>Calvo et al.&apos;s (2010)</strong> longitudinal youth sport dropouts.
              </span>
            ) : (
              <span>
                Strong <strong>Autonomy ({autonomy}%)</strong>, <strong>Competence ({competence}%)</strong> and <strong>Relatedness ({relatedness}%)</strong> with low controlling bribery sustain self-determined intrinsic persistence ({rawIntrinsic}%) toward <strong>Tier 5 Self-Actualisation</strong>.
              </span>
            )}
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Scenario domain"
            value={domain}
            onChange={setDomain}
            options={[
              { value: "school", label: DOMAIN_INFO.school.label },
              { value: "sport", label: DOMAIN_INFO.sport.label },
              { value: "work", label: DOMAIN_INFO.work.label },
            ]}
          />
          <Segmented
            label="Maslow Tiers 1–2 Baseline"
            value={baseSecurity}
            onChange={setBaseSecurity}
            options={[
              { value: "secure", label: "✅ Tiers 1–2 Secure" },
              { value: "deprived", label: "⚠️ Hungry / Unsafe" },
            ]}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-line bg-surface-2 p-3.5">
            <Slider
              label={`Autonomy — ${info.autonomyEx}`}
              value={autonomy}
              min={0}
              max={100}
              onChange={setAutonomy}
              format={(v) => `${v}%`}
            />
            <Slider
              label={`Competence — ${info.competenceEx}`}
              value={competence}
              min={0}
              max={100}
              onChange={setCompetence}
              format={(v) => `${v}%`}
            />
            <Slider
              label={`Relatedness — ${info.relatednessEx}`}
              value={relatedness}
              min={0}
              max={100}
              onChange={setRelatedness}
              format={(v) => `${v}%`}
            />
            <Slider
              label={`Extrinsic Tangible Bribes — ${info.extrinsicEx}`}
              value={extrinsicDep}
              min={0}
              max={100}
              onChange={setExtrinsicDep}
              format={(v) => `${v}%`}
            />
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface p-3">
            <svg
              viewBox="0 0 360 205"
              className="w-full"
              role="img"
              aria-label="Live Maslow pyramid focus tier and comparison of immediate token compliance versus post-withdrawal intrinsic persistence"
            >
              <text x="180" y="15" fontSize="11" fontWeight="700" textAnchor="middle" className="fill-ink">
                Active Maslow Priority &amp; Persistence Forecast
              </text>
              {tiers.map((t) => {
                const active =
                  maslowIndex === t.idx || (maslowIndex === 1 && (t.idx === 1 || t.idx === 2));
                const x = 180 - t.w / 2;
                return (
                  <g key={t.idx}>
                    <rect
                      x={x}
                      y={t.y}
                      width={t.w}
                      height={28}
                      rx={6}
                      fill={t.color}
                      fillOpacity={active ? 0.28 : 0.08}
                      stroke={t.color}
                      strokeWidth={active ? 2.2 : 1}
                    />
                    <text
                      x="180"
                      y={t.y + 18}
                      fontSize="10"
                      fontWeight={active ? "800" : "500"}
                      textAnchor="middle"
                      className="fill-ink"
                    >
                      {t.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout
            label="Post-Reward Intrinsic"
            value={`${rawIntrinsic}%`}
            tone={rawIntrinsic >= 65 ? "good" : rawIntrinsic >= 42 ? "brand" : "bad"}
          />
          <Readout
            label="Token-Phase Output"
            value={`${shortTermCompliance}%`}
            tone="ink"
          />
          <Readout
            label="1-Yr Dropout Risk"
            value={`${dropoutRisk}%`}
            tone={dropoutRisk <= 30 ? "good" : dropoutRisk <= 55 ? "brand" : "bad"}
          />
          <Readout label="SDT / Maslow Diagnosis" value={statusLabel} tone={statusTone} />
        </div>
        <div className="text-xs font-semibold text-ink-2">
          Active Maslow bottleneck / summit: <span className="font-extrabold text-ink">{maslowTier}</span>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "motivation-sdt-matrix",
    title: "Motivation, SDT & Maslow Scenario Matrix",
    blurb:
      "Adjust Autonomy, Competence, Relatedness, tangible reward bribes and survival security across school, sport and work to test intrinsic persistence vs overjustification and dropout.",
    Component: MotivationScenarioMatrix,
  },
];
