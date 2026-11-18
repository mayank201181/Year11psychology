"use client";

import { useEffect, useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type DelayMode = "immediate" | "distractor15" | "distractor30";
type DepthMode = "rote" | "semantic";

const WORD_SETS: Record<"set1" | "set2" | "set3", readonly string[]> = {
  set1: ["apple", "violin", "cloud", "jacket", "river", "candle", "bridge", "lemon", "mirror", "train", "pencil", "dolphin"],
  set2: ["lantern", "harbour", "velvet", "compass", "kettle", "orchid", "marble", "glacier", "feather", "trumpet", "walnut", "anchor"],
  set3: ["planet", "cactus", "ribbon", "tunnel", "breeze", "helmet", "cherry", "saddle", "island", "fossil", "ladder", "falcon"],
};

function computeSerialCurve(listLen: number, paceSec: number, delay: DelayMode, depth: DepthMode) {
  const depthBoost = depth === "semantic" ? 22 : 0;
  const paceBoost = (paceSec - 1) * 7;
  const stmSurvival = delay === "immediate" ? 1 : delay === "distractor15" ? 0.42 : 0.06;

  const points: { pos: number; ltm: number; stm: number; total: number }[] = [];
  for (let i = 1; i <= listLen; i++) {
    // Primacy: early positions get exponentially more rehearsals before STM fills
    const primacyDecay = Math.exp(-(i - 1) / (2.4 + paceSec * 0.75));
    const baseLtm = 18 + paceBoost + depthBoost + (54 + paceSec * 3) * primacyDecay;
    const ltm = Math.min(96, Math.max(8, baseLtm));

    // Recency: last ~5–7 items still sitting in STM unless displaced/decayed by distractor
    const distFromEnd = listLen - i;
    const rawStm = 82 * Math.exp(-distFromEnd / 2.6);
    const stm = rawStm * stmSurvival;

    // Independent probability combination: P(LTM or STM) = 1 - (1 - pLTM)(1 - pSTM)
    const pTotal = 1 - (1 - ltm / 100) * (1 - stm / 100);
    const total = Math.round(Math.min(98, pTotal * 100));
    points.push({
      pos: i,
      ltm: Math.round(ltm),
      stm: Math.round(stm),
      total,
    });
  }
  return points;
}

function SerialPositionExplorer() {
  const [listLen, setListLen] = useState(20);
  const [paceSec, setPaceSec] = useState(2);
  const [delay, setDelay] = useState<DelayMode>("immediate");
  const [depth, setDepth] = useState<DepthMode>("rote");

  const pts = computeSerialCurve(listLen, paceSec, delay, depth);
  const avg = (arr: { total: number }[]) =>
    Math.round(arr.reduce((s, x) => s + x.total, 0) / Math.max(1, arr.length));

  const primacyMean = avg(pts.slice(0, 3));
  const midStart = Math.floor(listLen * 0.4);
  const midEnd = Math.max(midStart + 2, Math.ceil(listLen * 0.6));
  const middleMean = avg(pts.slice(midStart, midEnd));
  const recencyMean = avg(pts.slice(-3));

  const W = 500;
  const H = 220;
  const padL = 42;
  const padR = 18;
  const padT = 18;
  const padB = 34;
  const px = (pos: number) => padL + ((pos - 1) / Math.max(1, listLen - 1)) * (W - padL - padR);
  const py = (pct: number) => H - padB - (pct / 100) * (H - padT - padB);

  const pathOf = (key: "total" | "ltm" | "stm") =>
    pts.map((p, idx) => `${idx === 0 ? "M" : "L"}${px(p.pos).toFixed(1)},${py(p[key]).toFixed(1)}`).join(" ");

  return (
    <WidgetFrame
      title="Multi-Store & Serial-Position Curve Explorer (Murdock, 1962)"
      tryThis={[
        "Switch **Pre-Recall Condition** to **30s Counting Distractor** — watch the **Recency** tail collapse while **Primacy** (in LTM) survives!",
        "Slow **Presentation Pace** to **4 s/word** or switch to **Semantic Encoding** to see how elaborative LTM raises the whole curve.",
      ]}
      caption={
        delay === "distractor30" ? (
          <span>
            <strong>Glanzer &amp; Cunitz (1966) dissociation:</strong> Counting backwards for 30 seconds blocks maintenance rehearsal and exceeds{" "}
            <strong>STM&apos;s 18–30 s duration</strong>, wiping out recency ({recencyMean}%) while sparing LTM primacy ({primacyMean}%).
          </span>
        ) : (
          <span>
            <strong>Murdock&apos;s U-shaped curve:</strong> Early words ({primacyMean}%) had time to rehearse into <strong>LTM</strong> (primacy), middle words ({middleMean}%) suffered{" "}
            <strong>STM displacement</strong>, and final words ({recencyMean}%) remain active in <strong>7 ± 2 STM</strong> (recency).
          </span>
        )
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Slider
          label="Word-list length"
          value={listLen}
          min={10}
          max={30}
          step={2}
          onChange={setListLen}
          format={(v) => `${v} words`}
        />
        <Slider
          label="Presentation pace"
          value={paceSec}
          min={1}
          max={4}
          step={1}
          onChange={setPaceSec}
          format={(v) => `${v} s / word`}
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Segmented<DelayMode>
          label="Pre-recall delay condition"
          value={delay}
          onChange={setDelay}
          options={[
            { value: "immediate", label: "Immediate Recall" },
            { value: "distractor15", label: "15s Distractor" },
            { value: "distractor30", label: "30s Counting Distractor" },
          ]}
        />
        <Segmented<DepthMode>
          label="Encoding style"
          value={depth}
          onChange={setDepth}
          options={[
            { value: "rote", label: "Rote Acoustic" },
            { value: "semantic", label: "Deep Semantic" },
          ]}
        />
      </div>

      <div className="mt-4 rounded-xl border border-line bg-surface p-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Interactive serial position curve plotting percentage recall across word positions">
          {[0, 25, 50, 75, 100].map((y) => (
            <g key={y}>
              <line x1={padL} x2={W - padR} y1={py(y)} y2={py(y)} className="stroke-line" strokeWidth={1} />
              <text x={padL - 6} y={py(y) + 3.5} fontSize={10} textAnchor="end" className="fill-ink-2">
                {y}%
              </text>
            </g>
          ))}
          <path d={pathOf("ltm")} fill="none" stroke="#16a34a" strokeWidth={1.8} strokeDasharray="4,3" />
          <path d={pathOf("stm")} fill="none" stroke="#d97706" strokeWidth={1.8} strokeDasharray="4,3" />
          <path d={pathOf("total")} fill="none" className="stroke-brand" strokeWidth={3} />
          {pts.map((p) => (
            <circle key={p.pos} cx={px(p.pos)} cy={py(p.total)} r={3.2} className="fill-brand" />
          ))}
          <text x={padL + 6} y={padT + 10} fontSize={10} fontWeight="bold" fill="#16a34a">
            --- LTM trace (Primacy)
          </text>
          <text x={W - padR - 6} y={padT + 10} fontSize={10} fontWeight="bold" textAnchor="end" fill="#d97706">
            --- STM trace (Recency)
          </text>
          <text x={(padL + W - padR) / 2} y={H - 6} fontSize={10.5} fontWeight="bold" textAnchor="middle" className="fill-ink-2">
            Serial Position of Word (1 → {listLen})
          </text>
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <Readout label="Primacy (First 3)" value={`${primacyMean}%`} tone="good" />
        <Readout label="Middle Asymptote" value={`${middleMean}%`} tone="ink" />
        <Readout label="Recency (Last 3)" value={`${recencyMean}%`} tone={delay === "distractor30" ? "bad" : "brand"} />
      </div>
    </WidgetFrame>
  );
}

function LiveMemoryTester() {
  const [setKey, setSetKey] = useState<"set1" | "set2" | "set3">("set1");
  const [useDistractor, setUseDistractor] = useState<"off" | "on">("off");
  const [phase, setPhase] = useState<"idle" | "flashing" | "distractor" | "recall" | "scored">("idle");
  const [wordIdx, setWordIdx] = useState(0);
  const [countdown, setCountdown] = useState(12);
  const [typed, setTyped] = useState("");

  const words = WORD_SETS[setKey];

  useEffect(() => {
    if (phase !== "flashing") return;
    const t = setTimeout(() => {
      if (wordIdx + 1 < words.length) {
        setWordIdx((i) => i + 1);
      } else if (useDistractor === "on") {
        setCountdown(12);
        setPhase("distractor");
      } else {
        setPhase("recall");
      }
    }, 1100);
    return () => clearTimeout(t);
  }, [phase, wordIdx, words.length, useDistractor]);

  useEffect(() => {
    if (phase !== "distractor") return;
    const t = setTimeout(() => {
      if (countdown > 1) setCountdown((c) => c - 1);
      else setPhase("recall");
    }, 1000);
    return () => clearTimeout(t);
  }, [phase, countdown]);

  const startTest = () => {
    setTyped("");
    setWordIdx(0);
    setPhase("flashing");
  };

  const recalledSet = new Set(
    typed
      .toLowerCase()
      .split(/[\s,;\n]+/)
      .map((w) => w.trim())
      .filter(Boolean),
  );

  const hits = words.map((w) => recalledSet.has(w));
  const primacyHits = hits.slice(0, 4).filter(Boolean).length;
  const middleHits = hits.slice(4, 8).filter(Boolean).length;
  const recencyHits = hits.slice(8, 12).filter(Boolean).length;
  const totalHits = hits.filter(Boolean).length;

  return (
    <WidgetFrame
      title="Test Your Own Brain: Live 12-Word Serial Position Lab"
      tryThis={[
        "Run **Word List 1** with **Distractor Off** — check whether you remember the first 4 and last 4 words best!",
        "Switch to **Word List 2** with **12s Distractor On** and count backwards aloud — see what happens to your last 4 words!",
      ]}
      caption={
        phase === "scored" ? (
          <span>
            You recalled <strong>{totalHits} / 12</strong> words: <strong>{primacyHits}/4</strong> Primacy (Positions 1–4),{" "}
            <strong>{middleHits}/4</strong> Middle (Positions 5–8), and <strong>{recencyHits}/4</strong> Recency (Positions 9–12).
          </span>
        ) : (
          <span>
            Click <strong>Start 12-Word Flash</strong> and keep your hands off the keyboard until all 12 words finish flashing!
          </span>
        )
      }
    >
      <div className="flex flex-wrap items-center gap-3">
        <Segmented<"set1" | "set2" | "set3">
          label="Word list selection"
          value={setKey}
          onChange={(v) => {
            setSetKey(v);
            setPhase("idle");
            setTyped("");
          }}
          options={[
            { value: "set1", label: "Word List 1" },
            { value: "set2", label: "Word List 2" },
            { value: "set3", label: "Word List 3" },
          ]}
        />
        <Segmented<"off" | "on">
          label="Counting distractor toggle"
          value={useDistractor}
          onChange={(v) => {
            setUseDistractor(v);
            setPhase("idle");
          }}
          options={[
            { value: "off", label: "Immediate Recall" },
            { value: "on", label: "12s Counting Distractor" },
          ]}
        />
        <button type="button" className="btn btn-primary btn-sm" onClick={startTest}>
          {phase === "idle" ? "Start 12-Word Flash" : "Restart Flash"}
        </button>
      </div>

      <div className="mt-4 rounded-xl border border-line bg-surface-2 p-5 text-center">
        {phase === "idle" && (
          <p className="text-sm font-semibold text-ink-2">
            12 common nouns will flash one at a time (1.1 s per word). Ready to test your STM &amp; LTM?
          </p>
        )}
        {phase === "flashing" && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-ink-2">
              Word {wordIdx + 1} of {words.length}
            </div>
            <div className="mt-2 text-3xl font-extrabold tracking-wide text-brand">{words[wordIdx]}</div>
          </div>
        )}
        {phase === "distractor" && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-bad">
              Articulatory Suppression / STM Distractor ({countdown}s left)
            </div>
            <div className="mt-2 text-lg font-extrabold text-ink">
              Count backwards out loud in threes from <span className="text-brand">{300 + countdown * 3}</span>!
            </div>
          </div>
        )}
        {phase === "recall" && (
          <div className="space-y-3 text-left">
            <label className="block text-sm font-bold text-ink">
              Free Recall — type every word you remember in any order (separated by spaces or commas):
            </label>
            <input
              type="text"
              className="input"
              placeholder="e.g. dolphin apple bridge..."
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
            />
            <button type="button" className="btn btn-good btn-sm" onClick={() => setPhase("scored")}>
              Score My Recall
            </button>
          </div>
        )}
        {phase === "scored" && (
          <div className="space-y-3 text-left">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {words.map((w, i) => (
                <div
                  key={w}
                  className={`rounded-lg border px-2 py-1.5 text-center text-xs font-bold ${
                    hits[i] ? "border-good bg-good-soft text-good" : "border-line bg-surface text-ink-2"
                  }`}
                >
                  <div>#{i + 1}</div>
                  <div>{w}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Readout label="Primacy (#1–4)" value={`${primacyHits} / 4`} tone="good" />
              <Readout label="Middle (#5–8)" value={`${middleHits} / 4`} tone="ink" />
              <Readout label="Recency (#9–12)" value={`${recencyHits} / 4`} tone="brand" />
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "serial-position-explorer",
    title: "Multi-Store & Serial-Position Curve Explorer",
    blurb: "Manipulate word-list length, presentation speed, semantic depth, and counting distractors to see STM and LTM curves separate.",
    Component: SerialPositionExplorer,
  },
  {
    id: "live-serial-memory-tester",
    title: "Live 12-Word Serial-Position Memory Tester",
    blurb: "Run Murdock's (1962) immediate vs distracted free-recall experiment on yourself in 20 seconds.",
    Component: LiveMemoryTester,
  },
];
