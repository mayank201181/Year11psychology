import type { MetadataRoute } from "next";

// Web app manifest: makes Vanishree's Year 11 IGCSE Psychology Lab installable ("Add to Home Screen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Year 11 IGCSE Psychology (0266)",
    short_name: "Y11 Psychology",
    description: "Cambridge IGCSE Psychology (0266) — discovery lessons, mark-scheme traps, interactive explorables, drills, mock exams and narrated sitcoms.",
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f5f6fb",
    theme_color: "#7c3aed",
    categories: ["education"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
