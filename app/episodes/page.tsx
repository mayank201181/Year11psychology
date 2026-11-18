import { Suspense } from "react";
import type { Metadata } from "next";
import { EpisodesHub } from "@/components/EpisodesHub";

export const metadata: Metadata = {
  title: "Sitcom Episodes — Mind Games: CIE 0266 Psychology",
  description: "7 narrated animated sitcom episodes for every Year 11 Cambridge IGCSE Psychology (0266) topic, with Examiner Mark-Scheme Traps and 3 pause challenges.",
};

export default function EpisodesPage() {
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Loading episodes…</p>}>
      <EpisodesHub />
    </Suspense>
  );
}
