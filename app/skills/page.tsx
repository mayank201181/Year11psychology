import type { Metadata } from "next";
import { SkillsMap } from "@/components/SkillsMap";
import { TOPICS } from "@/lib/server/content";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Skills & Mastery Map",
  description: "Every Cambridge IGCSE Psychology (0266) procedural skill — from New to Mastered — with one-tap practice on your weakest skills.",
};

export default function SkillsPage() {
  return <SkillsMap readyTopicIds={TOPICS.map((t) => t.id)} />;
}
