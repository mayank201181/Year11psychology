import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "60s Psychology Terms & Stats Sprint",
  description: "Quick-fire 60-second recall of Cambridge IGCSE Psychology (0266) named studies, key terms, research methods and descriptive statistics.",
};

export default function SprintPage() {
  return <SprintRunner />;
}
