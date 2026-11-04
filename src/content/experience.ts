import type { ExperienceEntry } from "./types";

// Example entries: replace them with real roles before publishing.
export const experience = [
  {
    company: "Studio Name",
    role: "Unity Developer",
    startYear: 2023,
    location: "Remote",
    summary:
      "Developing gameplay systems and tools for commercial Unity projects.",
    highlights: [
      "Owned gameplay features from prototype to release, including combat, UI and progression systems.",
      "Built editor tooling that reduced iteration time for designers.",
      "Worked with artists, designers and QA in two-week delivery cycles.",
    ],
    tech: ["Unity", "C#", "Addressables", "Git"],
  },
  {
    company: "Company Name",
    role: "Software Developer",
    startYear: 2021,
    endYear: 2023,
    location: "Hybrid",
    summary:
      "Built internal tools and web applications across the stack.",
    highlights: [
      "Developed React front ends backed by Node.js services.",
      "Improved application performance by refactoring data access and rendering paths.",
      "Collaborated with product and design to ship features end to end.",
    ],
    tech: ["React", "Node.js", "JavaScript", "C#"],
  },
] satisfies ExperienceEntry[];
