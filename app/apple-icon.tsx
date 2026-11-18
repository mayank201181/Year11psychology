// iOS home-screen icon: full-bleed violet square with Psi (Ψ) + Y11 badge.
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
        }}
      >
        <svg width={96} height={96} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={12} strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 14 L50 86" />
            <path d="M20 22 C20 56, 80 56, 80 22" />
            <path d="M34 86 L66 86" />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#6d28d9",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 1.5,
          }}
        >
          Y11
        </div>
      </div>
    ),
    { ...size },
  );
}
