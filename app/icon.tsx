// Browser-tab icon: a rounded violet square with a clean white Psi (Ψ) emblem.
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#ffffff" strokeWidth={13} strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 16 L50 84" />
            <path d="M22 24 C22 56, 78 56, 78 24" />
            <path d="M34 84 L66 84" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
