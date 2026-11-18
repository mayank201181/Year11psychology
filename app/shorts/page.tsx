import { Suspense } from "react";
import type { Metadata } from "next";
import { ShortsHub } from "@/components/ShortsHub";

export const metadata: Metadata = {
  title: "Concept Shorts — Year 11 IGCSE Psychology (0266)",
  description: "Bite-sized concept & mark-scheme trap Shorts for every topic in Cambridge IGCSE Psychology (0266).",
};

export default function ShortsPage() {
  return (
    <Suspense fallback={<p className="p-6">Loading Concept Shorts…</p>}>
      <ShortsHub subjectLabel="Year 11 IGCSE Psychology (0266)" />
    </Suspense>
  );
}
