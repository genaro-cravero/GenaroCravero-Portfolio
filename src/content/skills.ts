import type { SkillGroup } from "./types";

export const skillGroups = [
  {
    title: "Languages",
    skills: ["C#", "JavaScript", "TypeScript", "Java", "HTML & CSS"],
  },
  {
    title: "Game Development",
    skills: [
      "Unity",
      "Gameplay Systems",
      "Software Architecture",
      "UI Systems",
      "Editor Tooling",
    ],
  },
  {
    title: "Web",
    skills: ["React", "Next.js", "Node.js", "REST APIs", "Tailwind CSS"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "Agile", "Code Review", "Debugging"],
  },
] satisfies SkillGroup[];
