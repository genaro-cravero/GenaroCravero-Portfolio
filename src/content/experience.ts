import type { ExperienceEntry } from "./types";

export const experience = [
  {
    company: "Sismo Games",
    role: "Unity Developer",
    startYear: 2022,
    endYear: 2026,
    location: "Hybrid | Rafaela - Santa Fe",
    summary:
      "Developing gameplay systems and tools for professional Unity projects.",
    highlights: [
      "Developed 2D and 3D games using Unity and C# for mobile and PC platforms.",
      "Designed, documented, and prototyped game mechanics and systems.",
      "Implemented character behaviors, dialogue systems, and core gameplay interactions.",
      "Managed tasks and coordinated team workflows in Trello and Jira across iterative development cycles.",
      "Proposed and implemented mechanics redesigns to improve game feel and player experience.",
      "Owned gameplay features from prototype to release, including combat, UI and progression systems.",
      "Worked with artists, designers and QA in delivery cycles.",
    ],
    tech: ["Unity", "C#", "Addressables", "Git", "Trello", "Jira", "Slack"],
  },
  {
    company: "Laboratorio de Entretenimiento Digital",
    role: "Front-End Developer",
    startYear: 2021,
    endYear: 2022,
    location: "Rafaela, Santa Fe",
    summary:
      "Built web applications from concept to MVP.",
    highlights: [
      "Developed React front ends backed by Node.js services.",
      "Researched and integrated pose estimation technology using TensorFlow - MoveNet.",
      "Built a React web application for telerehabilitation with role-based views for institutions, physicians, and patients.",
      "Developed motion capture features to calculate body angles and postures in real time.",
      "Collaborated with product and design to ship features end to end.",
    ],
    tech: ["React", "Node.js", "JavaScript", "HTML", "CSS", "TypeScript", "TensorFlow", "Git", "Trello"],
  },
  {
    company: "Freelance Developer",
    role: "Software Developer",
    startYear: 2023,
    endYear: 2023,
    location: "Remote",
    summary:
      "Built interactive desktop and mobile applications for the Santa Fe's Ministry of Environment.",
    highlights: [
      "Design of an interactive application for the UNRaf Start-up competition.",
      "Developed the application for desktop and mobile, in collaboration with Santa Fe's Ministry of Environment.",
      "Handled architecture design, programming, QA, and final delivery end-to-end.",
    ],
    tech: ["C#", "Unity", "Addressables", "Git"],
  },
  {
    company: "Universidad Tecnológica Nacional (UTN)",
    role: "Instructor",
    startYear: 2023,
    endYear: 2024,
    location: "Rafaela, Santa Fe",
    summary:
      "Instructor of Object-Oriented Programming with Java",
    highlights: [
      "Instructor of the Programming Lab II subject in a University Technical Programming degree.",
      "Taught OOP with Java to first-year students.",
    ],
    tech: ["Java", "OOP", "NetBeans"],
  },
  {
    company: "Lifecole",
    role: "Instructor",
    startYear: 2023,
    endYear: 2025,
    location: "Remote | Spain",
    summary:
      "Instructor of Programming for Kids",
    highlights: [
      "Designed and delivered online programming and web/app development courses for children.",
      "Designed and delivered game development courses for children.",
    ],
    tech: ["JavaScript", "CSS", "HTML", "OOP", "Unity", "C#"],
  },
  {
    company: "Universidad Nacional de Rafaela",
    role: "Tutor",
    startYear: 2023,
    endYear: 2023,
    location: "Remote | Rafaela, Santa Fe",
    summary:
      "Tutor for the Argentina Programa 4.0 Course",
    highlights: [
      "Provided technical support and guidance to students in a software development course.",
    ],
    tech: ["C#", "JavaScript"],
  },
] satisfies ExperienceEntry[];
