"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type AgeGroup = "infant" | "teen" | "older";
type EveningFactor = "clean" | "caffeine" | "alcohol";

type StageCode = "Awake" | "REM" | "N1" | "N2" | "N3";

const STAGE_LEVEL: Record<StageCode, number> = {
  Awake: 0,
  REM: 1,
  N1: 2,
  N2: 3,
  N3: 4,
};

function buildHypnogram(age: AgeGroup, factor: EveningFactor): StageCode[] {
  // 49 samples from 0 to 480 min every 10 min
  const cycleLen = age === "infant" ? 60 : 90;
  const onsetDelay = factor === "caffeine" ? 50 : factor === "alcohol" ? 10 : age === "older" ? 30 : 15;

  const stages: StageCode[] = [];
  for (let m = 0; m <= 480; m += 10) {
    if (m < onsetDelay || m === 480) {
      stages.push("Awake");
      continue;
    }
    const asleepMin = m - onsetDelay;
    const cycleIdx = Math.floor(asleepMin / cycleLen);
    const posInCycle = (asleepMin % cycleLen) / cycleLen; // 0..1

    // Alcohol fragments second half of night with brief maintenance awakenings
    if (factor === "alcohol" && m >= 240 && posInCycle > 0.86) {
      stages.push("Awake");
      continue;
    }
    // Older adults have occasional brief awakenings late in the night
    if (age === "older" && cycleIdx >= 3 && posInCycle > 0.9) {
      stages.push("Awake");
      continue;
    }

    // REM proportion grows across cycles (or starts ~50% in infants)
    const remShare =
      age === "infant"
        ? 0.48
        : factor === "alcohol" && m < 240
          ? 0.08
          : Math.min(0.42, 0.12 + cycleIdx * (age === "older" ? 0.05 : 0.075));

    // SWS shrinks across cycles (early night heavy; diminished in older age & caffeine)
    const baseSws = age === "older" ? 0.14 : factor === "caffeine" ? 0.2 : 0.34;
    const swsShare = Math.max(0, baseSws - cycleIdx * 0.09);

    if (posInCycle < 0.08) {
      stages.push("N1");
    } else if (posInCycle < 0.08 + (1 - 0.08 - swsShare - remShare) * 0.55) {
      stages.push("N2");
    } else if (swsShare > 0.03 && posInCycle < 0.08 + (1 - 0.08 - swsShare - remShare) * 0.55 + swsShare) {
      stages.push("N3");
    } else if (posInCycle < 1 - remShare) {
      stages.push("N2");
    } else {
      stages.push("REM");
    }
  }
  return stages;
}

function buildEegWaveformPath(stage: StageCode, width: number, height: number): string {
  const mid = height / 2;
  const samples = 140;
  const pts: string[] = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples; // 0..1 across a 4-second epoch
    const x = 12 + t * (width - 24);
    let yOffset = 0;
    if (stage === "Awake") {
      // Fast low-amplitude Beta (18 Hz)
      yOffset = Math.sin(t * Math.PI * 2 * 26) * 7 + Math.cos(t * Math.PI * 2 * 15) * 4;
    } else if (stage === "N1") {
      // Slower Theta (5–6 Hz)
      yOffset = Math.sin(t * Math.PI * 2 * 11) * 13 + Math.sin(t * Math.PI * 2 * 5) * 5;
    } else if (stage === "N2") {
      // Theta background + 13 Hz sleep spindle burst around t = 0.35..0.55 + K-complex at t = 0.78
      const spindleEnv = Math.exp(-Math.pow((t - 0.42) / 0.08, 2));
      const kComplex = (t > 0.74 && t < 0.82 ? Math.sin(((t - 0.74) / 0.08) * Math.PI * 2) : 0) * 28;
      yOffset = Math.sin(t * Math.PI * 2 * 9) * 10 + Math.sin(t * Math.PI * 2 * 30) * 18 * spindleEnv + kComplex;
    } else if (stage === "N3") {
      // Giant slow Delta waves (1.5–2 Hz)
      yOffset = Math.sin(t * Math.PI * 2 * 4.5) * 29 + Math.cos(t * Math.PI * 2 * 2) * 7;
    } else {
      // REM: fast paradoxical sawtooth/beta-like waves
      yOffset = Math.sin(t * Math.PI * 2 * 22) * 8 + Math.sin(t * Math.PI * 2 * 9) * 5;
    }
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${(mid - yOffset).toFixed(1)}`);
  }
  return pts.join(" ");
}

const STAGE_INFO: Record<StageCode, { wave: string; body: string; color: string }> = {
  Awake: { wave: "Beta / Alpha (8–30 Hz)", body: "Active muscle tone · Conscious", color: "#0284c7" },
  N1: { wave: "Theta waves (4–7 Hz)", body: "Slow rolling eyes · Hypnic drift", color: "#6366f1" },
  N2: { wave: "Theta + Spindles (12–14 Hz)", body: "Temp drops · Memory spindles", color: "#7c3aed" },
  N3: { wave: "High-amp Delta (0.5–4 Hz)", body: "GH physical repair · SWS (Somnambulism stage)", color: "#16a34a" },
  REM: { wave: "Paradoxical Beta/Theta", body: "Rapid eyes + Muscle Atonia (80% Dreams)", color: "#db2777" },
};

function SleepHypnogramExplorer() {
  const [minute, setMinute] = useState(90);
  const [age, setAge] = useState<AgeGroup>("teen");
  const [factor, setFactor] = useState<EveningFactor>("clean");

  const stages = buildHypnogram(age, factor);
  const idx = Math.min(stages.length - 1, Math.round(minute / 10));
  const currentStage = stages[idx];
  const info = STAGE_INFO[currentStage];

  const asleepStages = stages.filter((s) => s !== "Awake");
  const denom = Math.max(1, asleepStages.length);
  const swsPct = Math.round((asleepStages.filter((s) => s === "N3").length / denom) * 100);
  const remPct = Math.round((asleepStages.filter((s) => s === "REM").length / denom) * 100);

  const W = 500;
  const H = 165;
  const padL = 56;
  const padR = 16;
  const padT = 16;
  const padB = 26;
  const px = (i: number) => padL + (i / (stages.length - 1)) * (W - padL - padR);
  const py = (s: StageCode) => padT + (STAGE_LEVEL[s] / 4) * (H - padT - padB);

  // Step-style hypnogram path
  const hypPath = stages
    .map((s, i) => {
      const x = px(i).toFixed(1);
      const y = py(s).toFixed(1);
      if (i === 0) return `M${x},${y}`;
      const prevY = py(stages[i - 1]).toFixed(1);
      return `L${x},${prevY} L${x},${y}`;
    })
    .join(" ");

  const eegPath = buildEegWaveformPath(currentStage, 500, 82);

  return (
    <WidgetFrame
      title="8-Hour Ultradian Hypnogram & Live EEG Explorer"
      tryThis={[
        "Scrub **Time Across Night** from **Hour 1.5 (90 min)** to **Hour 7 (420 min)** — watch **Delta SWS** give way to long **Paradoxical REM**!",
        "Switch **Age Profile** to **Infant (~50% REM)** to verify **Oswald's brain-growth evidence**, or test **Late Caffeine** vs **Nightcap Alcohol**.",
      ]}
      caption={
        <span>
          At <strong>{(minute / 60).toFixed(1)} hours</strong> ({minute} min), the sleeper is in <strong>{currentStage === "N3" ? "NREM Stage 3 (SWS)" : currentStage}</strong>:{" "}
          <strong>{info.wave}</strong> — {info.body}.
        </span>
      }
    >
      <Slider
        label="Scrub time across an 8-hour night"
        value={minute}
        min={0}
        max={480}
        step={10}
        onChange={setMinute}
        format={(v) => `${(v / 60).toFixed(1)} h (${v} min)`}
      />

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Segmented<AgeGroup>
          label="Age group"
          value={age}
          onChange={setAge}
          options={[
            { value: "infant", label: "Newborn Infant" },
            { value: "teen", label: "Teen / Young Adult" },
            { value: "older", label: "Older Adult (70+)" },
          ]}
        />
        <Segmented<EveningFactor>
          label="Evening sleep hygiene factor"
          value={factor}
          onChange={setFactor}
          options={[
            { value: "clean", label: "Good Hygiene" },
            { value: "caffeine", label: "Late Caffeine" },
            { value: "alcohol", label: "Nightcap Alcohol" },
          ]}
        />
      </div>

      <div className="mt-4 space-y-2 rounded-xl border border-line bg-surface p-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="8-hour sleep hypnogram showing transitions across Awake, REM, and NREM Stages 1 to 3">
          {(["Awake", "REM", "N1", "N2", "N3"] as const).map((s) => (
            <g key={s}>
              <line x1={padL} x2={W - padR} y1={py(s)} y2={py(s)} className="stroke-line" strokeWidth={1} />
              <text
                x={padL - 6}
                y={py(s) + 3.5}
                fontSize={9.5}
                fontWeight={s === currentStage ? "bold" : "normal"}
                textAnchor="end"
                fill={STAGE_INFO[s].color}
              >
                {s === "N3" ? "N3 SWS" : s}
              </text>
            </g>
          ))}
          {stages.map((s, i) =>
            s === "REM" && i < stages.length - 1 ? (
              <rect key={`rem-${i}`} x={px(i)} y={py("REM") - 5} width={px(i + 1) - px(i)} height={10} fill="#fbcfe8" opacity={0.7} />
            ) : null,
          )}
          <path d={hypPath} fill="none" className="stroke-brand" strokeWidth={2.3} />
          <line x1={px(idx)} x2={px(idx)} y1={padT - 4} y2={H - padB + 4} stroke={info.color} strokeWidth={2} strokeDasharray="3,2" />
          <circle cx={px(idx)} cy={py(currentStage)} r={5} fill={info.color} />
          {[0, 2, 4, 6, 8].map((hr) => (
            <text key={hr} x={px((hr * 60) / 10)} y={H - 6} fontSize={9.5} textAnchor="middle" className="fill-ink-2">
              {hr}h
            </text>
          ))}
        </svg>

        <div className="rounded-lg bg-surface-2 px-3 py-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-ink-2">
            <span>Live 4-Second Scalp EEG Trace ({currentStage})</span>
            <span style={{ color: info.color }}>{info.wave}</span>
          </div>
          <svg viewBox="0 0 500 82" className="h-auto w-full" role="img" aria-label="Simulated 4-second EEG waveform for the selected sleep stage">
            <line x1={12} x2={488} y1={41} y2={41} className="stroke-line" strokeWidth={1} strokeDasharray="2,2" />
            <path d={eegPath} fill="none" stroke={info.color} strokeWidth={2.2} />
          </svg>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label="Active Stage" value={currentStage === "N3" ? "N3 (SWS)" : currentStage} tone="brand" />
        <Readout label="Muscle Tone" value={currentStage === "REM" ? "Atonia (Paralysed)" : "Active"} tone={currentStage === "REM" ? "bad" : "ink"} />
        <Readout label="Night SWS %" value={`${swsPct}%`} tone="good" />
        <Readout label="Night REM %" value={`${remPct}%`} tone="brand" />
      </div>
    </WidgetFrame>
  );
}

function CircadianMelatoninExplorer() {
  const [jetLagShift, setJetLagShift] = useState(0);
  const [screenMode, setScreenMode] = useState<"dark" | "bluelight">("dark");

  const screenDelay = screenMode === "bluelight" ? 2.2 : 0;
  const peakSuppression = screenMode === "bluelight" ? 0.62 : 1.0;
  // Normal melatonin peak at 3:00 am (hour 27 on a 12:00 noon -> 12:00 noon 24h axis)
  // Eastward (+shift) means destination clock jumped ahead, so internal SCN lags behind local midnight!
  const effectiveShift = jetLagShift + screenDelay;

  const W = 500;
  const H = 175;
  const padL = 42;
  const padR = 18;
  const padT = 18;
  const padB = 30;
  const px = (hFromNoon: number) => padL + (hFromNoon / 24) * (W - padL - padR);
  const py = (level: number) => H - padB - (level / 100) * (H - padT - padB);

  const curvePts: string[] = [];
  for (let i = 0; i <= 96; i++) {
    const h = (i / 96) * 24; // 0 = 12:00 noon, 12 = midnight, 15 = 3:00 am, 24 = next noon
    // Wrap cyclic distance to peak at h = 15 + effectiveShift
    let d = ((h - (15 + effectiveShift)) % 24 + 36) % 24 - 12;
    if (d < -12) d += 24;
    const mel = Math.round(92 * peakSuppression * Math.exp(-(d * d) / 14));
    curvePts.push(`${i === 0 ? "M" : "L"}${px(h).toFixed(1)},${py(mel).toFixed(1)}`);
  }

  const onsetClock = (((21.5 + effectiveShift) % 24) + 24) % 24;
  const fmtClock = (hr24: number) => {
    const hWhole = Math.floor(hr24);
    const mins = Math.round((hr24 - hWhole) * 60) % 60;
    const suffix = hWhole >= 12 && hWhole < 24 ? "pm" : "am";
    const h12 = hWhole % 12 === 0 ? 12 : hWhole % 12;
    return `${h12}:${String(mins).padStart(2, "0")} ${suffix}`;
  };

  return (
    <WidgetFrame
      title="24-Hour SCN, Blue-Light & Jet-Lag Melatonin Explorer"
      tryThis={[
        "Toggle **2h Pre-Bed Blue-Light Screen** — see how retinal light inhibits the **pineal gland**, suppressing and delaying melatonin!",
        "Slide **Time-Zone Flight** to **+8h Eastward (London → Singapore)** to see why your SCN peaks in the morning instead of bedtime.",
      ]}
      caption={
        <span>
          <strong>SCN → Pineal Melatonin Onset:</strong> ~<strong>{fmtClock(onsetClock)}</strong> local time.{" "}
          {jetLagShift > 0
            ? "Eastward flights force a tough phase advance (compressing your ~24.5h endogenous clock) — seek bright morning daylight!"
            : jetLagShift < 0
              ? "Westward flights require a gentler phase delay that aligns naturally with Siffre's >24h free-running drift."
              : screenMode === "bluelight"
                ? "Blue screen light tricks the hypothalamic SCN into thinking it is still dusk, causing sleep-onset insomnia."
                : "Endogenous melatonin aligns cleanly with the dark bedroom window (10:30 pm – 6:30 am)."}
        </span>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Slider
          label="Time-zone flight shift (Jet Lag)"
          value={jetLagShift}
          min={-8}
          max={8}
          step={2}
          onChange={setJetLagShift}
          format={(v) => (v === 0 ? "0h (Home)" : v > 0 ? `+${v}h Eastward` : `${v}h Westward`)}
        />
        <div className="flex flex-col justify-end">
          <Segmented<"dark" | "bluelight">
            label="Evening light exposure"
            value={screenMode}
            onChange={setScreenMode}
            options={[
              { value: "dark", label: "Dim Evening" },
              { value: "bluelight", label: "2h Blue-Light Screen" },
            ]}
          />
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-line bg-surface p-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="24-hour melatonin concentration curve relative to the local night sleep window">
          {/* Shaded target local sleep window: 10:30 pm (h=10.5) to 6:30 am (h=18.5) */}
          <rect x={px(10.5)} y={padT} width={px(18.5) - px(10.5)} height={H - padT - padB} fill="#7c3aed" opacity={0.12} />
          <text x={(px(10.5) + px(18.5)) / 2} y={padT + 12} fontSize={9.5} fontWeight="bold" textAnchor="middle" fill="#7c3aed">
            Local Night Window (10:30 pm – 6:30 am)
          </text>
          <line x1={padL} x2={W - padR} y1={py(0)} y2={py(0)} className="stroke-line" strokeWidth={1.5} />
          <path d={curvePts.join(" ")} fill="none" stroke={screenMode === "bluelight" ? "#dc2626" : "#7c3aed"} strokeWidth={2.8} />
          {[
            { h: 0, lbl: "12 pm" },
            { h: 6, lbl: "6 pm" },
            { h: 12, lbl: "12 am" },
            { h: 18, lbl: "6 am" },
            { h: 24, lbl: "12 pm" },
          ].map((tk) => (
            <text key={`${tk.h}-${tk.lbl}`} x={px(tk.h)} y={H - 8} fontSize={9.5} textAnchor="middle" className="fill-ink-2">
              {tk.lbl}
            </text>
          ))}
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Readout label="Melatonin Surge" value={fmtClock(onsetClock)} tone={Math.abs(effectiveShift) > 2 ? "bad" : "good"} />
        <Readout label="Peak Hormone" value={`${Math.round(peakSuppression * 100)}%`} tone={screenMode === "bluelight" ? "bad" : "brand"} />
        <Readout
          label="SCN Status"
          value={Math.abs(effectiveShift) <= 1 ? "Entrained" : jetLagShift > 0 ? "Phase-Lagging" : "Delayed"}
          tone={Math.abs(effectiveShift) <= 1 ? "good" : "bad"}
        />
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "sleep-hypnogram-explorer",
    title: "Sleep-Cycle & Live EEG Hypnogram Explorer",
    blurb: "Scrub through 8 hours of sleep across age groups, caffeine, and alcohol to inspect live EEG waves and SWS vs REM proportions.",
    Component: SleepHypnogramExplorer,
  },
  {
    id: "circadian-melatonin-explorer",
    title: "24-Hour SCN, Blue-Light & Jet-Lag Melatonin Lab",
    blurb: "Simulate late-night phone screens and east/west time-zone flights on the hypothalamic SCN and pineal melatonin surge.",
    Component: CircadianMelatoninExplorer,
  },
];
