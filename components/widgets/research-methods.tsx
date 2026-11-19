"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ============================================================================
// WIDGET 1: Research-Design & Hypothesis Operationaliser Studio
// ============================================================================

type StudyKey = "caffeine" | "bluelight" | "bystander" | "music";
type HypKey = "directional" | "nondirectional" | "null";
type DesignKey = "independent" | "repeated-raw" | "repeated-abba" | "matched";
type SampleKey = "random" | "stratified" | "volunteer" | "opportunity";

const STUDIES: Record<
  StudyKey,
  {
    label: string;
    vagueHyp: string;
    ivCondA: string;
    ivCondB: string;
    dvUnit: string;
    dirPrediction: string;
    matchedVar: string;
  }
> = {
  caffeine: {
    label: "☕ Caffeine & Memory",
    vagueHyp: "Drinking coffee will improve participants' memory compared with not drinking coffee.",
    ivCondA: "drink 250 ml of coffee containing 150 mg of caffeine",
    ivCondB: "drink 250 ml of decaffeinated placebo coffee (0 mg caffeine)",
    dvUnit: "the number of words accurately recalled out of 20 in 60 seconds",
    dirPrediction: "recall significantly more words out of 20 in 60 seconds",
    matchedVar: "baseline digit-span memory score",
  },
  bluelight: {
    label: "📱 Blue Light & Sleep",
    vagueHyp: "Using a phone before bed makes teenagers sleep worse.",
    ivCondA: "read on an unfiltered blue-light tablet for 45 minutes before bed",
    ivCondB: "read a printed paper book under warm 2700K light for 45 minutes before bed",
    dvUnit: "sleep-onset latency in minutes measured via polysomnography EEG",
    dirPrediction: "take significantly more minutes to fall asleep on EEG",
    matchedVar: "habitual bedtime & age",
  },
  bystander: {
    label: "🤝 Crowd Size & Helping",
    vagueHyp: "People are less helpful when lots of bystanders are around.",
    ivCondA: "witness a staged folder drop while waiting alone in a corridor",
    ivCondB: "witness a staged folder drop alongside 4 passive confederates",
    dvUnit: "latency (in seconds) taken to bend down and help pick up the dropped folder",
    dirPrediction: "take significantly fewer seconds to bend down and help pick up the dropped folder",
    matchedVar: "pre-tested dispositional empathy score",
  },
  music: {
    label: "🎵 Lyrics & Reading",
    vagueHyp: "Music affects concentration during revision.",
    ivCondA: "study a 400-word passage in complete silence",
    ivCondB: "study a 400-word passage while 70 dB pop music with lyrics plays",
    dvUnit: "score out of 15 on a timed comprehension quiz",
    dirPrediction: "achieve a significantly higher score out of 15 on the comprehension quiz",
    matchedVar: "reading-comprehension pre-test score",
  },
};

function HypothesisDesignStudio() {
  const [study, setStudy] = useState<StudyKey>("caffeine");
  const [hyp, setHyp] = useState<HypKey>("directional");
  const [design, setDesign] = useState<DesignKey>("repeated-abba");
  const [sample, setSample] = useState<SampleKey>("stratified");

  const s = STUDIES[study];

  const goodHyp =
    hyp === "directional"
      ? `Participants who ${s.ivCondA} will ${s.dirPrediction} than participants who ${s.ivCondB}.`
      : hyp === "nondirectional"
        ? `There will be a significant difference in ${s.dvUnit} between participants who ${s.ivCondA} and participants who ${s.ivCondB}.`
        : `There will be no significant difference in ${s.dvUnit} between participants who ${s.ivCondA} and participants who ${s.ivCondB}; any observed difference will be due to chance.`;

  const pVarRisk =
    design === "repeated-raw" || design === "repeated-abba"
      ? "Zero (Same People)"
      : design === "matched"
        ? "Low (Paired)"
        : "High (Unmatched)";

  const orderRisk =
    design === "independent" || design === "matched"
      ? "None (1 Trial Only)"
      : design === "repeated-abba"
        ? "Balanced (AB/BA)"
        : "SEVERE (Confounded!)";

  const internalScore =
    design === "repeated-abba" ? "High (9/10)" : design === "matched" ? "High (8.5/10)" : design === "independent" ? "Moderate (7/10)" : "Low (4/10)";

  const popValidity =
    sample === "stratified"
      ? "Very High (Proportional)"
      : sample === "random"
        ? "High (Unbiased Chance)"
        : sample === "volunteer"
          ? "Low (Volunteer Bias)"
          : "Very Low (Convenience Bias)";

  return (
    <WidgetFrame
      title="CIE 0266 Hypothesis Operationaliser & Experimental Design Studio"
      tryThis={[
        "Compare the **0-Mark Vague** hypothesis against the **2-Mark Operationalised** hypothesis as you switch between Directional, Non-Directional and Null.",
        "Switch Design from **Repeated (No AB/BA)** to **Repeated + AB/BA** and watch what happens to Order Effects and Internal Validity!",
        "Switch Sampling from **Opportunity** to **Stratified** to see how Population Validity changes.",
      ]}
      caption={
        <span>
          <strong>Examiner Check:</strong> Your current setup uses <strong>{design === "repeated-abba" ? "Repeated Measures with AB/BA Counterbalancing" : design === "repeated-raw" ? "Un-counterbalanced Repeated Measures" : design === "matched" ? `Matched Pairs (paired on ${s.matchedVar})` : "Independent Measures (random allocation)"}</strong> and <strong>{sample} sampling</strong>.{" "}
          {design === "repeated-raw"
            ? "⚠️ Because everyone does Condition A before Condition B without counterbalancing, fatigue/practice confounds your DV!"
            : design === "repeated-abba"
              ? "✅ Half complete A→B and half complete B→A — fatigue still happens, but it affects both conditions equally!"
              : design === "matched"
                ? `✅ Pre-testing on ${s.matchedVar} curbs participant variables without triggering order effects (though pre-testing takes longer).`
                : "✅ Each participant only sees one condition (zero order effects), so use random allocation to reduce participant differences."}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Segmented
            label="Investigation"
            value={study}
            onChange={setStudy}
            options={[
              { value: "caffeine", label: "☕ Caffeine" },
              { value: "bluelight", label: "📱 Blue Light" },
              { value: "bystander", label: "🤝 Bystander" },
              { value: "music", label: "🎵 Music" },
            ]}
          />
          <Segmented
            label="Hypothesis Type"
            value={hyp}
            onChange={setHyp}
            options={[
              { value: "directional", label: "Directional (1-Tailed)" },
              { value: "nondirectional", label: "Non-Directional (2-Tailed)" },
              { value: "null", label: "Null Hypothesis" },
            ]}
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-bad/40 bg-bad/5 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-bad">
              ❌ Never Write This (0 / 2 Marks — Un-operationalised)
            </div>
            <p className="mt-1.5 text-sm italic text-ink">&ldquo;{s.vagueHyp}&rdquo;</p>
            <p className="mt-1 text-xs text-ink-2">
              Fails because neither condition of the IV nor the exact measurable unit of the DV is defined.
            </p>
          </div>
          <div className="rounded-xl border border-good/40 bg-good/5 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-good">
              ✅ Write This Instead (2 / 2 Marks — CIE 0266 Operationalised)
            </div>
            <p className="mt-1.5 text-sm font-semibold text-ink">&ldquo;{goodHyp}&rdquo;</p>
            <p className="mt-1 text-xs text-ink-2">
              Names both exact IV conditions AND concrete DV units ({s.dvUnit}).
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Segmented
            label="Experimental Design"
            value={design}
            onChange={setDesign}
            options={[
              { value: "independent", label: "Independent Measures" },
              { value: "repeated-raw", label: "Repeated (No AB/BA)" },
              { value: "repeated-abba", label: "Repeated + AB/BA" },
              { value: "matched", label: "Matched Pairs" },
            ]}
          />
          <Segmented
            label="Sampling Method"
            value={sample}
            onChange={setSample}
            options={[
              { value: "stratified", label: "Stratified" },
              { value: "random", label: "Random" },
              { value: "volunteer", label: "Volunteer" },
              { value: "opportunity", label: "Opportunity" },
            ]}
          />
        </div>

        <svg
          viewBox="0 0 600 135"
          className="w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="Participant allocation diagram for the selected experimental design"
        >
          <rect x="14" y="20" width="145" height="95" rx="10" className="fill-surface-2 stroke-line" />
          <text x="86" y="45" fontSize="11" fontWeight="bold" textAnchor="middle" className="fill-ink">
            Sample (N = 40)
          </text>
          <text x="86" y="64" fontSize="10" textAnchor="middle" className="fill-brand">
            {sample.toUpperCase()} SAMPLE
          </text>
          <text x="86" y="84" fontSize="9.5" textAnchor="middle" className="fill-ink-2">
            {design === "matched" ? "Paired on pre-test" : design === "independent" ? "Randomly allocated" : "Same people in both"}
          </text>

          <line x1="160" y1="67" x2="215" y2="42" className="stroke-ink-2" strokeWidth="2" />
          <line x1="160" y1="67" x2="215" y2="94" className="stroke-ink-2" strokeWidth="2" />

          <rect x="218" y="16" width="364" height="44" rx="8" fill="#dbeafe" stroke="#2563eb" />
          <text x="400" y="35" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">
            {design === "independent"
              ? "Group 1 (n = 20): Condition A Only"
              : design === "matched"
                ? "Pair Member 1s (n = 20): Condition A Only"
                : design === "repeated-abba"
                  ? "Subgroup 1 (n = 20): Condition A → then Condition B"
                  : "All 40 Participants: Condition A FIRST (Morning)"}
          </text>
          <text x="400" y="51" fontSize="9.5" textAnchor="middle" fill="#1d4ed8">
            Measure DV: {s.dvUnit.length > 52 ? `${s.dvUnit.slice(0, 51)}…` : s.dvUnit}
          </text>

          <rect
            x="218"
            y="74"
            width="364"
            height="44"
            rx="8"
            fill={design === "repeated-raw" ? "#fee2e2" : "#dcfce7"}
            stroke={design === "repeated-raw" ? "#dc2626" : "#16a34a"}
          />
          <text
            x="400"
            y="93"
            fontSize="11"
            fontWeight="bold"
            textAnchor="middle"
            fill={design === "repeated-raw" ? "#991b1b" : "#14532d"}
          >
            {design === "independent"
              ? "Group 2 (n = 20): Condition B Only"
              : design === "matched"
                ? "Pair Member 2s (n = 20): Condition B Only"
                : design === "repeated-abba"
                  ? "Subgroup 2 (n = 20): Condition B → then Condition A"
                  : "All 40 Participants: Condition B SECOND (Tired / Practised!)"}
          </text>
          <text
            x="400"
            y="109"
            fontSize="9.5"
            textAnchor="middle"
            fill={design === "repeated-raw" ? "#b91c1c" : "#166534"}
          >
            {design === "repeated-raw"
              ? "⚠ Order effects confound Condition B!"
              : "✔ Balanced comparison on identical DV scale"}
          </text>
        </svg>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout
            label="Participant Vars"
            value={pVarRisk}
            tone={design === "independent" ? "bad" : "good"}
          />
          <Readout
            label="Order Effects"
            value={orderRisk}
            tone={design === "repeated-raw" ? "bad" : "good"}
          />
          <Readout
            label="Internal Validity"
            value={internalScore}
            tone={design === "repeated-raw" ? "bad" : design === "independent" ? "brand" : "good"}
          />
          <Readout
            label="Population Validity"
            value={popValidity}
            tone={sample === "stratified" || sample === "random" ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: Live Descriptive Statistics, Outlier Trap & Graph Explorer
// ============================================================================

type DataPreset = "positive" | "negative" | "zero";
type GraphKind = "scatter" | "bar" | "histogram";

const PRESETS: Record<
  DataPreset,
  {
    label: string;
    xLabel: string;
    yLabel: string;
    points: [number, number][];
    corrText: string;
  }
> = {
  positive: {
    label: "↗ Positive (Revision h vs Recall)",
    xLabel: "Weekly Revision (hours)",
    yLabel: "Words Recalled (/20)",
    points: [
      [1, 6],
      [2, 8],
      [3, 9],
      [4, 12],
      [5, 12],
      [6, 14],
      [7, 16],
      [8, 18],
    ],
    corrText: "Strong POSITIVE correlation: as weekly revision hours increase, words recalled increases — still cannot prove causation (e.g. baseline motivation could drive both!).",
  },
  negative: {
    label: "↘ Negative (Screen h vs Sleep h)",
    xLabel: "Evening Screen Time (hours)",
    yLabel: "Nightly Sleep (hours)",
    points: [
      [1, 9.0],
      [2, 8.5],
      [3, 8.0],
      [4, 7.5],
      [5, 7.5],
      [6, 6.5],
      [7, 6.0],
      [8, 5.0],
    ],
    corrText: "Strong NEGATIVE correlation: as evening screen time increases, nightly sleep decreases (inverse link — NOT 'zero correlation'!).",
  },
  zero: {
    label: "☁ Zero (Shoe Size vs Memory)",
    xLabel: "Adult Shoe Size (UK)",
    yLabel: "Words Recalled (/20)",
    points: [
      [4, 14],
      [5, 8],
      [6, 17],
      [7, 11],
      [8, 14],
      [9, 7],
      [10, 16],
      [11, 10],
    ],
    corrText: "ZERO correlation: points form a random cloud with no upward or downward trend between the two co-variables.",
  },
};

function StatsScatterLab() {
  const [preset, setPreset] = useState<DataPreset>("positive");
  const [graph, setGraph] = useState<GraphKind>("scatter");
  const [outlierBoost, setOutlierBoost] = useState<number>(0);

  const p = PRESETS[preset];
  const pts: [number, number][] = p.points.map(([x, y], idx) =>
    idx === p.points.length - 1 ? [x, +(y + outlierBoost).toFixed(1)] : [x, y],
  );
  const ys = pts.map(([, y]) => y);
  const sortedY = [...ys].sort((a, b) => a - b);
  const n = ys.length;
  const mean = +(ys.reduce((a, b) => a + b, 0) / n).toFixed(2);
  const median = +((sortedY[n / 2 - 1] + sortedY[n / 2]) / 2).toFixed(2);
  const range = +(sortedY[n - 1] - sortedY[0]).toFixed(2);

  const freq = new Map<number, number>();
  for (const v of sortedY) freq.set(v, (freq.get(v) ?? 0) + 1);
  let maxFreq = 0;
  for (const c of freq.values()) if (c > maxFreq) maxFreq = c;
  const modes = maxFreq > 1 ? Array.from(freq.entries()).filter(([, c]) => c === maxFreq).map(([v]) => v) : [];
  const modeStr = modes.length ? modes.join(", ") : "No mode";

  const yMax = Math.max(22, sortedY[n - 1] + 2);
  const lowHalfMean = +(pts.slice(0, 4).reduce((acc, [, y]) => acc + y, 0) / 4).toFixed(1);
  const highHalfMean = +(pts.slice(4).reduce((acc, [, y]) => acc + y, 0) / 4).toFixed(1);

  // 4 histogram bins across [0, yMax]
  const binWidth = Math.ceil(yMax / 4);
  const bins = [0, 1, 2, 3].map((b) => {
    const lo = b * binWidth;
    const hi = (b + 1) * binWidth;
    const count = ys.filter((v) => (b === 3 ? v >= lo && v <= hi : v >= lo && v < hi)).length;
    return { label: `${lo}–${hi}`, count };
  });

  return (
    <WidgetFrame
      title="Live Descriptive Stats, Outlier Trap & Graph-Type Lab"
      tryThis={[
        "Drag **Participant 8 Outlier Spike** from `+0` up to `+36` and watch the **Mean** and **Range** explode while the **Median** barely budges!",
        "Switch between **Positive**, **Negative**, and **Zero** correlation presets on the Scattergraph.",
        "Toggle **Scattergraph**, **Bar Chart (Gaps)**, and **Histogram (No Gaps)** to see why examiners care whether bars touch!",
      ]}
      caption={
        <span>
          <strong>Dataset Y-Scores (ordered):</strong> <code>{sortedY.join(", ")}</code>.{" "}
          {outlierBoost >= 12
            ? `⚠️ With an extreme outlier (+${outlierBoost}), the Mean (${mean}) is dragged far above typical scores — report the Median (${median}) instead!`
            : p.corrText}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Segmented
            label="Co-variable Dataset"
            value={preset}
            onChange={setPreset}
            options={[
              { value: "positive", label: "↗ Positive" },
              { value: "negative", label: "↘ Negative" },
              { value: "zero", label: "☁ Zero" },
            ]}
          />
          <Segmented
            label="Graph Type"
            value={graph}
            onChange={setGraph}
            options={[
              { value: "scatter", label: "Scattergraph (Dots)" },
              { value: "bar", label: "Bar Chart (Gaps)" },
              { value: "histogram", label: "Histogram (No Gaps)" },
            ]}
          />
        </div>

        <Slider
          label="Participant 8 Anomalous Outlier Spike (+Y)"
          value={outlierBoost}
          min={0}
          max={36}
          step={2}
          onChange={setOutlierBoost}
          format={(v) => (v === 0 ? "0 (Clean Data)" : `+${v} Outlier!`)}
        />

        {graph === "scatter" ? (
          <svg
            viewBox="0 0 560 220"
            className="w-full rounded-xl border border-line bg-surface"
            role="img"
            aria-label="Interactive scattergraph of the 8 participants"
          >
            <line x1="65" y1="180" x2="520" y2="180" className="stroke-ink" strokeWidth="2" />
            <line x1="65" y1="180" x2="65" y2="24" className="stroke-ink" strokeWidth="2" />
            <text x="292" y="208" fontSize="11" fontWeight="bold" textAnchor="middle" className="fill-ink-2">
              Co-variable X: {p.xLabel}
            </text>
            <text
              x="22"
              y="102"
              fontSize="11"
              fontWeight="bold"
              textAnchor="middle"
              transform="rotate(-90 22 102)"
              className="fill-ink-2"
            >
              {p.yLabel}
            </text>
            {pts.map(([x, y], idx) => {
              const xMin = pts[0][0] - 1;
              const xSpan = pts[pts.length - 1][0] - xMin + 1;
              const cx = 65 + ((x - xMin) / xSpan) * 430;
              const cy = 180 - (y / yMax) * 145;
              const isOutlier = idx === pts.length - 1 && outlierBoost > 0;
              return (
                <g key={idx}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isOutlier ? 7 : 5.5}
                    fill={isOutlier ? "#dc2626" : "#2563eb"}
                  />
                  <text x={cx} y={cy - 9} fontSize="9.5" textAnchor="middle" className="fill-ink-2">
                    ({x}, {y})
                  </text>
                </g>
              );
            })}
            <text x="495" y="34" fontSize="10" textAnchor="end" className="fill-brand font-bold">
              1 dot = 1 participant (N = 8)
            </text>
          </svg>
        ) : graph === "bar" ? (
          <svg
            viewBox="0 0 560 220"
            className="w-full rounded-xl border border-line bg-surface"
            role="img"
            aria-label="Bar chart with discrete category gaps comparing Low X versus High X groups"
          >
            <line x1="65" y1="178" x2="500" y2="178" className="stroke-ink" strokeWidth="2" />
            <line x1="65" y1="178" x2="65" y2="24" className="stroke-ink" strokeWidth="2" />
            {[
              { label: "Low X Group (n=4)", val: lowHalfMean, x: 140 },
              { label: "High X Group (n=4)", val: highHalfMean, x: 330 },
            ].map((b) => {
              const h = Math.max(6, (b.val / yMax) * 140);
              return (
                <g key={b.label}>
                  <rect x={b.x} y={178 - h} width={95} height={h} rx="4" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="1.5" />
                  <text x={b.x + 47.5} y={172 - h} fontSize="11" fontWeight="bold" textAnchor="middle" className="fill-ink">
                    Mean = {b.val}
                  </text>
                  <text x={b.x + 47.5} y="196" fontSize="10.5" fontWeight="bold" textAnchor="middle" className="fill-ink-2">
                    {b.label}
                  </text>
                </g>
              );
            })}
            <text x="282" y="213" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#1d4ed8">
              ✔ BAR CHART: Discrete categories → Wide GAPS between bars!
            </text>
          </svg>
        ) : (
          <svg
            viewBox="0 0 560 220"
            className="w-full rounded-xl border border-line bg-surface"
            role="img"
            aria-label="Histogram with touching continuous interval bars"
          >
            <line x1="65" y1="178" x2="500" y2="178" className="stroke-ink" strokeWidth="2" />
            <line x1="65" y1="178" x2="65" y2="24" className="stroke-ink" strokeWidth="2" />
            {bins.map((b, i) => {
              const h = (b.count / n) * 135;
              const bx = 95 + i * 92;
              return (
                <g key={b.label}>
                  <rect x={bx} y={178 - h} width={92} height={h} fill="#fdba74" stroke="#c2410c" strokeWidth="1.5" />
                  <text x={bx + 46} y={Math.max(34, Math.min(170, 172 - h))} fontSize="11" fontWeight="bold" textAnchor="middle" className="fill-ink">
                    f = {b.count}
                  </text>
                  <text x={bx + 46} y="195" fontSize="10" textAnchor="middle" className="fill-ink-2">
                    {b.label}
                  </text>
                </g>
              );
            })}
            <text x="282" y="213" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#c2410c">
              ✔ HISTOGRAM: Continuous class intervals → Bars TOUCH with ZERO gaps!
            </text>
          </svg>
        )}

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout
            label="Mean (Sum ÷ 8)"
            value={mean}
            tone={outlierBoost >= 12 ? "bad" : "brand"}
          />
          <Readout
            label="Median (Ordered Mid)"
            value={median}
            tone="good"
          />
          <Readout label="Mode (Most Frequent)" value={modeStr} tone="ink" />
          <Readout
            label="Range (Max − Min)"
            value={range}
            tone={outlierBoost >= 12 ? "bad" : "ink"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "hypothesis-design-studio",
    title: "Hypothesis Operationaliser & Experimental Design Studio",
    blurb: "Turn 0-mark vague predictions into full-mark CIE 0266 operationalised hypotheses and explore ABBA counterbalancing.",
    Component: HypothesisDesignStudio,
  },
  {
    id: "stats-scattergraph-lab",
    title: "Descriptive Stats, Outlier Trap & Graph-Type Explorer",
    blurb: "Spike an anomalous outlier to test Mean vs Median resilience, and switch live between Scattergraphs, Bar Charts & Histograms.",
    Component: StatsScatterLab,
  },
];
