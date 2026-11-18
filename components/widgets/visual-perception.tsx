"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type IllusionMode = "muller-lyer" | "ponzo";

function IllusionMeasurerWidget() {
  const [mode, setMode] = useState<IllusionMode>("muller-lyer");
  const [finAngle, setFinAngle] = useState<number>(35); // degrees from horizontal: 0..75
  const [railTilt, setRailTilt] = useState<number>(68); // px convergence per side: 0..95
  const [showRuler, setShowRuler] = useState<"hide" | "show">("hide");

  const shaftLength = 180; // Both horizontal bars are ALWAYS 180 px!
  const xStart = 150;
  const xEnd = xStart + shaftLength; // 330

  // Perceived percentage distortion (empirical psychophysical curve for textbook illustration)
  const perceivedDistortionPct =
    mode === "muller-lyer"
      ? Math.round(24 * Math.cos(((finAngle - 25) * Math.PI) / 140) * (finAngle > 2 ? 1 : 0))
      : Math.round((railTilt / 95) * 22);

  const finLen = 30;
  const rad = (finAngle * Math.PI) / 180;
  const dx = +(finLen * Math.cos(rad)).toFixed(2);
  const dy = +(finLen * Math.sin(rad)).toFixed(2);

  return (
    <WidgetFrame
      title="Müller-Lyer & Ponzo Illusion Measurer (Gregory's Scaling Lab)"
      tryThis={[
        "In **Müller-Lyer** mode, set **Fin Angle = 35°** with **Ruler = Hidden**: notice how the top outward-finned shaft (`>———<`) looks ~20% longer than the bottom arrowhead shaft (`<———>`).",
        "Switch **Calibrated Pixel Ruler = Show** to drop vertical laser guides and verify **both shafts measure 180 px** to the exact pixel!",
        "Switch to **Ponzo Railway** mode and slide **Rail Convergence** down to **0 px** (parallel rails) to watch the illusion vanish instantly when linear perspective disappears!",
      ]}
      caption={
        <div>
          <strong>Gregory&apos;s Constructivist Verdict:</strong> Both red horizontal shafts cast{" "}
          <strong>identical 180 px images</strong>, yet your cortex perceives a{" "}
          <strong>~{Math.max(0, perceivedDistortionPct)}% length difference</strong>!{" "}
          {mode === "muller-lyer" ? (
            <span>
              Outward fins mimic a receding <strong>inside room corner</strong> (scaled UP), while inward arrowheads mimic a jutting{" "}
              <strong>outside building corner</strong> (scaled DOWN) via <strong>misplaced size-constancy scaling</strong>.
            </span>
          ) : (
            <span>
              Converging rails trigger a <strong>linear perspective</strong> monocular depth cue that the top bar lies further away, so{" "}
              <strong>misplaced size-constancy scaling</strong> enlarges the top bar on a flat 2D screen!
            </span>
          )}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-surface-2 p-3">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Illusion Type</div>
            <Segmented
              label="Select illusion"
              value={mode}
              onChange={setMode}
              options={[
                { value: "muller-lyer", label: "Müller-Lyer (3D Corners)" },
                { value: "ponzo", label: "Ponzo (Linear Perspective)" },
              ]}
            />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Calibrated Pixel Ruler</div>
            <Segmented
              label="Toggle ruler overlay"
              value={showRuler}
              onChange={setShowRuler}
              options={[
                { value: "hide", label: "Hide Ruler (Raw Perception)" },
                { value: "show", label: "Show 180 px Proof Guides" },
              ]}
            />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3.5">
          {mode === "muller-lyer" ? (
            <Slider
              label="Fin / Arrowhead Angle (degrees)"
              value={finAngle}
              min={5}
              max={85}
              step={5}
              onChange={setFinAngle}
              format={(v) => `${v}°`}
            />
          ) : (
            <Slider
              label="Converging Rail Perspective Strength"
              value={railTilt}
              min={0}
              max={95}
              step={5}
              onChange={setRailTilt}
              format={(v) => (v === 0 ? "0 px (Parallel — no depth cue!)" : `${v} px convergence`)}
            />
          )}
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <Readout label="Top Shaft (True px)" value="180 px" tone="ink" />
          <Readout label="Bottom Shaft (True px)" value="180 px" tone="ink" />
          <Readout
            label="Illusory Stretch"
            value={`~+${Math.max(0, perceivedDistortionPct)}%`}
            tone={perceivedDistortionPct > 8 ? "brand" : "good"}
          />
        </div>

        <svg
          viewBox="0 0 480 215"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Interactive Muller-Lyer and Ponzo visual illusion canvas with optional 180 pixel verification ruler"
          className="w-full rounded-xl border border-line bg-surface"
        >
          {mode === "ponzo" ? (
            <g>
              {/* Converging railway tracks + texture sleepers */}
              <line
                x1={80 + railTilt}
                y1={24}
                x2={80}
                y2={196}
                stroke="#475569"
                strokeWidth={3}
              />
              <line
                x1={400 - railTilt}
                y1={24}
                x2={400}
                y2={196}
                stroke="#475569"
                strokeWidth={3}
              />
              {[42, 66, 94, 126, 162, 188].map((yPos, idx) => {
                const t = (yPos - 24) / (196 - 24);
                const leftX = +(80 + railTilt * (1 - t)).toFixed(1);
                const rightX = +(400 - railTilt * (1 - t)).toFixed(1);
                return (
                  <line
                    key={idx}
                    x1={leftX}
                    y1={yPos}
                    x2={rightX}
                    y2={yPos}
                    stroke="#cbd5e1"
                    strokeWidth={1.5 + t * 1.5}
                  />
                );
              })}
              {/* Upper & Lower Identical 180 px Bars */}
              <line x1={xStart} y1={66} x2={xEnd} y2={66} stroke="#dc2626" strokeWidth={5} />
              <line x1={xStart} y1={154} x2={xEnd} y2={154} stroke="#dc2626" strokeWidth={5} />
            </g>
          ) : (
            <g>
              {/* Top shaft: Outward-flaring fins (>---<) */}
              <line x1={xStart} y1={68} x2={xEnd} y2={68} stroke="#dc2626" strokeWidth={4} />
              <polyline
                points={`${xStart - dx},${68 - dy} ${xStart},68 ${xStart - dx},${68 + dy}`}
                fill="none"
                stroke="#1e293b"
                strokeWidth={3}
                strokeLinecap="round"
              />
              <polyline
                points={`${xEnd + dx},${68 - dy} ${xEnd},68 ${xEnd + dx},${68 + dy}`}
                fill="none"
                stroke="#1e293b"
                strokeWidth={3}
                strokeLinecap="round"
              />

              {/* Bottom shaft: Inward-pointing arrowheads (<--->) */}
              <line x1={xStart} y1={148} x2={xEnd} y2={148} stroke="#dc2626" strokeWidth={4} />
              <polyline
                points={`${xStart + dx},${148 - dy} ${xStart},148 ${xStart + dx},${148 + dy}`}
                fill="none"
                stroke="#1e293b"
                strokeWidth={3}
                strokeLinecap="round"
              />
              <polyline
                points={`${xEnd - dx},${148 - dy} ${xEnd},148 ${xEnd - dx},${148 + dy}`}
                fill="none"
                stroke="#1e293b"
                strokeWidth={3}
                strokeLinecap="round"
              />
            </g>
          )}

          {showRuler === "show" ? (
            <g>
              <line x1={xStart} y1={20} x2={xStart} y2={195} stroke="#16a34a" strokeWidth={2} strokeDasharray="5,4" />
              <line x1={xEnd} y1={20} x2={xEnd} y2={195} stroke="#16a34a" strokeWidth={2} strokeDasharray="5,4" />
              <rect x={xStart} y={180} width={shaftLength} height={22} rx={4} fill="#dcfce7" stroke="#16a34a" />
              {[0, 30, 60, 90, 120, 150, 180].map((tick) => (
                <line
                  key={tick}
                  x1={xStart + tick}
                  y1={180}
                  x2={xStart + tick}
                  y2={187}
                  stroke="#15803d"
                  strokeWidth={1.5}
                />
              ))}
              <text x={240} y={196} fontSize={10.5} fontWeight="bold" textAnchor="middle" fill="#14532d">
                Exact Verified Width = 180 px (x = 150 → 330)
              </text>
            </g>
          ) : null}
        </svg>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "muller-lyer-ponzo-measurer",
    title: "Müller-Lyer & Ponzo Illusion Measurer",
    blurb:
      "Adjust fin angles and perspective convergence — then toggle the calibrated pixel ruler to see Gregory's misplaced size-constancy scaling in action.",
    Component: IllusionMeasurerWidget,
  },
];
