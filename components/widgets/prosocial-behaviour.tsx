"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type VictimCondition = "cane" | "drunk";
type AmbiguityLevel = "clear" | "ambiguous";
type CostLevel = "low" | "high";

function BystanderCostRewardSimulator() {
  const [bystanders, setBystanders] = useState<number>(5);
  const [ambiguity, setAmbiguity] = useState<AmbiguityLevel>("ambiguous");
  const [costOfHelping, setCostOfHelping] = useState<CostLevel>("low");
  const [victim, setVictim] = useState<VictimCondition>("cane");

  // Individual share of responsibility across n bystanders: 100 / n
  const responsibilityShare = +(100 / bystanders).toFixed(1);

  // Calibrated cognitive + Piliavin cost-reward model grounded in Latané & Darley (1968) & Piliavin et al. (1969)
  const costOfNotHelping: "High" | "Low" = victim === "cane" ? "High" : "Low";

  // Base individual probability of helping in 6 min
  let indivProb = 0.85;
  if (ambiguity === "ambiguous") {
    // Intercom / smoke-room curve: strong pluralistic ignorance + diffusion of responsibility
    indivProb = 0.85 * Math.pow(bystanders, -0.62);
  } else {
    // Clear face-to-face subway emergency: minimal pluralistic ignorance
    indivProb = 0.88 * Math.pow(bystanders, -0.18);
  }

  if (victim === "drunk") indivProb *= 0.52;
  if (costOfHelping === "high") indivProb *= 0.45;
  indivProb = Math.max(0.04, Math.min(0.95, indivProb));

  // Group probability that AT LEAST ONE bystander helps: 1 - (1 - p)^n
  // In Piliavin's clear cane condition with low cost, group helping stays very high (~95%)!
  const groupProb = Math.min(0.99, 1 - Math.pow(1 - indivProb, bystanders));
  const indivPct = Math.round(indivProb * 100);
  const groupPct = Math.round(groupProb * 100);

  // Predicted Piliavin matrix outcome
  let piliavinOutcome = "Direct Intervention";
  let outcomeDetail =
    "Low cost of helping + high empathic guilt of ignoring an ill commuter drives rapid direct help (95% in Piliavin et al., 1969).";
  if (costOfHelping === "high" && victim === "cane") {
    piliavinOutcome = "Indirect Help or Reinterpretation";
    outcomeDetail =
      "High danger/effort clashes with high guilt — bystanders either call staff/995 indirectly or cognitively reinterpret the event as less serious.";
  } else if (costOfHelping === "low" && victim === "drunk") {
    piliavinOutcome = "Norm / Mood Dependent";
    outcomeDetail =
      "Low cost of helping, but low guilt because passengers attribute blame to the drunk victim — helping depends on personal norms and mood.";
  } else if (costOfHelping === "high" && victim === "drunk") {
    piliavinOutcome = "Leave Scene / Ignore";
    outcomeDetail =
      "High personal cost + low empathic guilt (victim blamed) makes walking away or looking away the cheapest way to reduce arousal.";
  }

  return (
    <WidgetFrame
      title="Bystander Diffusion & Piliavin Cost–Reward Simulator"
      tryThis={[
        "Set **Ambiguity = Ambiguous**, **Victim = Ill (Cane)**, **Cost = Low**, and slide **Bystanders** from **1** to **5** to reproduce **Latané & Darley's (1968)** drop from **85%** toward **31%**.",
        "Switch **Ambiguity = Clear** with **8 bystanders** to see why **Piliavin et al. (1969)** found ~**95%** group helping on crowded subway trains!",
        "Toggle **Victim = Drunk** and **Cost of Helping = High** to watch Piliavin's matrix flip from **Direct Intervention** to **Leave / Ignore**.",
      ]}
      caption={
        <div>
          <strong>CIE 0266 Model Verdict — {piliavinOutcome}:</strong> {outcomeDetail}{" "}
          {ambiguity === "ambiguous" && bystanders > 1 ? (
            <span>
              Because the event is <strong>ambiguous</strong> with <strong>{bystanders}</strong> witnesses,{" "}
              <strong>pluralistic ignorance</strong> (Step 2) and <strong>diffusion of responsibility</strong> ({responsibilityShare}% duty each, Step 3) sharply suppress individual action.
            </span>
          ) : (
            <span>
              Because the emergency is <strong>clear and face-to-face</strong>, Step 2 ambiguity vanishes so overall group intervention reaches <strong>{groupPct}%</strong>.
            </span>
          )}
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4 rounded-xl border border-line bg-surface-2 p-3.5">
          <Slider
            label="Number of bystanders present (n)"
            value={bystanders}
            min={1}
            max={12}
            step={1}
            onChange={setBystanders}
            format={(v) => `${v} ${v === 1 ? "bystander (alone)" : "bystanders"}`}
          />

          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Emergency Clarity (Step 2)</div>
            <Segmented
              label="Emergency clarity"
              value={ambiguity}
              onChange={setAmbiguity}
              options={[
                { value: "clear", label: "Clear (Subway collapse)" },
                { value: "ambiguous", label: "Ambiguous (Intercom / smoke)" },
              ]}
            />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Victim Condition (Cost of Not Helping)</div>
            <Segmented
              label="Victim condition"
              value={victim}
              onChange={setVictim}
              options={[
                { value: "cane", label: "Ill with Cane (High empathy)" },
                { value: "drunk", label: "Drunk with Bottle (Blamed)" },
              ]}
            />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Personal Cost of Helping</div>
            <Segmented
              label="Cost of helping"
              value={costOfHelping}
              onChange={setCostOfHelping}
              options={[
                { value: "low", label: "Low Cost (Safe & quick)" },
                { value: "high", label: "High Cost (Risk / disgust)" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-3">
          <div className="grid grid-cols-2 gap-2.5">
            <Readout
              label="Responsibility Share (1/n)"
              value={`${responsibilityShare}%`}
              tone={responsibilityShare >= 50 ? "good" : "brand"}
            />
            <Readout
              label="Individual Helping Prob."
              value={`${indivPct}%`}
              tone={indivPct >= 60 ? "good" : indivPct <= 30 ? "bad" : "brand"}
            />
            <Readout
              label="At Least 1 Helps (Group)"
              value={`${groupPct}%`}
              tone={groupPct >= 75 ? "good" : groupPct <= 45 ? "bad" : "ink"}
            />
            <Readout
              label="Cost of Not Helping"
              value={costOfNotHelping}
              tone={costOfNotHelping === "High" ? "good" : "bad"}
            />
          </div>

          <svg
            viewBox="0 0 360 155"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Visual ring of bystanders surrounding victim showing individual duty share and Piliavin outcome"
            className="w-full rounded-xl border border-line bg-surface"
          >
            <text x="180" y="20" fontSize={11} fontWeight="bold" textAnchor="middle" className="fill-ink">
              Bystander Ring ({bystanders} {bystanders === 1 ? "witness" : "witnesses"}) — {piliavinOutcome}
            </text>
            <circle
              cx={110}
              cy={88}
              r={20}
              fill={victim === "cane" ? "#dbeafe" : "#fef3c7"}
              stroke={victim === "cane" ? "#2563eb" : "#d97706"}
              strokeWidth={2}
            />
            <text x={110} y={86} fontSize={9.5} fontWeight="bold" textAnchor="middle" fill="#0f172a">
              {victim === "cane" ? "Cane" : "Drunk"}
            </text>
            <text x={110} y={98} fontSize={8.5} textAnchor="middle" fill="#334155">
              Victim
            </text>

            {Array.from({ length: bystanders }, (_, idx) => {
              const angle = (2 * Math.PI * idx) / bystanders - Math.PI / 2;
              const bx = +(110 + 52 * Math.cos(angle)).toFixed(2);
              const by = +(88 + 52 * Math.sin(angle)).toFixed(2);
              return (
                <g key={idx}>
                  <line
                    x1={bx}
                    y1={by}
                    x2={110}
                    y2={88}
                    stroke={ambiguity === "ambiguous" ? "#94a3b8" : "#16a34a"}
                    strokeWidth={1.2}
                    strokeDasharray={ambiguity === "ambiguous" ? "3,3" : undefined}
                  />
                  <circle
                    cx={bx}
                    cy={by}
                    r={9}
                    fill={idx === 0 ? "#2563eb" : "#cbd5e1"}
                    className="stroke-ink"
                    strokeWidth={1.2}
                  />
                </g>
              );
            })}

            <g transform="translate(205, 42)">
              <text x={0} y={10} fontSize={9.5} fontWeight="bold" className="fill-ink-2">
                Individual Help ({indivPct}%)
              </text>
              <rect x={0} y={16} width={135} height={14} rx={4} className="fill-surface-2" />
              <rect
                x={0}
                y={16}
                width={Math.round(1.35 * indivPct)}
                height={14}
                rx={4}
                fill={indivPct >= 60 ? "#16a34a" : indivPct <= 30 ? "#dc2626" : "#2563eb"}
              />

              <text x={0} y={50} fontSize={9.5} fontWeight="bold" className="fill-ink-2">
                Group Help ({groupPct}%)
              </text>
              <rect x={0} y={56} width={135} height={14} rx={4} className="fill-surface-2" />
              <rect x={0} y={56} width={Math.round(1.35 * groupPct)} height={14} rx={4} fill="#0284c7" />

              <text x={0} y={90} fontSize={9.5} fontWeight="bold" className="fill-ink-2">
                Personal Duty ({responsibilityShare}%)
              </text>
              <rect x={0} y={96} width={135} height={14} rx={4} className="fill-surface-2" />
              <rect x={0} y={96} width={Math.round(1.35 * responsibilityShare)} height={14} rx={4} fill="#7c3aed" />
            </g>
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "bystander-cost-reward-simulator",
    title: "Bystander Diffusion & Cost–Reward Simulator",
    blurb:
      "Manipulate crowd size, emergency ambiguity, victim condition, and cost of helping to compare Latané & Darley (1968) against Piliavin et al. (1969).",
    Component: BystanderCostRewardSimulator,
  },
];
