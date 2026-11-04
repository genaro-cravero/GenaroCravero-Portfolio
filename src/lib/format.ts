import type { ExperienceEntry } from "@/content/types";

export function formatIndex(index: number): string {
  return String(index).padStart(2, "0");
}

export function formatPeriod(entry: ExperienceEntry): string {
  return `${entry.startYear} — ${entry.endYear ?? "Present"}`;
}
