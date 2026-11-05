import type { Project } from "./types";

export const projects = [
  {
    slug: "depuro",
    title: "Depuro",
    cover: {
      src: "/images/projects/depuro.png",
      alt: "Depuro cover art",
    },
    links: [
      {
        label: "Document Pitch",
        href: "https://docs.google.com/presentation/d/1rGOkJwQAuxzkTsPXXmi2lqiop1B9NfvS/preview",
      },
    ],
    summary: "3D action-platformer videogame.",
    category: "Game Development",
    year: 2022,
    role: "Gameplay & Systems Programmer",
    status: "Finished",
    featured: false,
    tech: ["Unity", "C#", "Git"],
    description: [
      "Depuro is a 3D action-platformer videogame developed with Unity as part of the Video Game Workshop 4 course. The game focuses on fast-paced gameplay and exploration, challenging players to navigate complex environments while fighting different types of enemies.",
    ],
    highlights: [
      "Character abilities progression",
      "Short combat loops",
      "Final Boss",
      "Story cinematics",
      "In-game tutorial",
    ],
  },
  {
    slug: "gamify",
    title: "Gamify",
    cover: {
      src: "/images/projects/gamify.png",
      alt: "Gamify cover art",
    },
    links: [
      { label: "GitHub", href: "https://github.com/genaro-cravero/Gamify" },
      { label: "Live site", href: "https://genaro-cravero.github.io/Gamify/" },
    ],
    summary: "Landing page for the Argentina Programa project.",
    category: "Web Development",
    year: 2022,
    role: "Web Developer",
    status: "Finished",
    featured: false,
    tech: ["HTML", "CSS", "JavaScript"],
    description: [
      "Integrative Project completed for Argentina Programa 4.0. The website is a simulation of an e-commerce platform for selling electronic products. Made with HTML, CSS and JS",
    ],
    highlights: [
      "Designed with figma",
      "Mobile Responsive Design",
      "Switchable Theme",
      "E-commerce visualization design",
    ],
  },
  {
    slug: "umbral",
    title: "Umbral",
    cover: {
      src: "/images/projects/umbral.png",
      alt: "Umbral cover art",
    },
    links: [
      {
        label: "Trailer",
        href: "https://www.youtube.com/watch?v=hJWYPl6T2PY",
      },
    ],
    summary: "Unreal Engine 4 project",
    category: "Game Development",
    year: 2021,
    role: "Game Developer",
    status: "Finished",
    featured: false,
    tech: ["Unreal Engine 4", "C++", "Blueprints"],
    description: [
      "Umbral is a videogame developed in Unreal Engine 4. The project emphasized gameplay programming, mechanics design, and teamwork in a production-oriented environment.",
    ],
    highlights: [
      "2.5D Adventure-Horror game",
      "Made with Unreal Engine 4",
      "Flashlight mechanic → No light = Danger",
      "Puzzle elements",
    ],
  },
  {
    slug: "telerehabilitation-web-app",
    title: "Telerehabilitation Web App",
    cover: {
      src: "/images/projects/telerehabilitation-web-app.png",
      alt: "Telerehabilitation Web App cover art",
    },
    links: [
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=hcfSaPUAP0E",
      },
    ],
    summary: "Telerehabilitation web application with React and Next.js",
    category: "Web Development",
    year: 2022,
    role: "Web Developer",
    status: "Finished",
    featured: true,
    tech: ["React", "Next.js", "TypeScript", "TensorFlow.js"],
    description: [
      "Developed a telerehabilitation web application with React and Next.js for a private telemedicine company, implementing AI-based pose and posture recognition with TensorFlow. The platform allowed doctors and patients to interact through real-time motion analysis.",
    ],
    highlights: [
      "Role-based views for institutions, physicians, and patients",
      "Made with React and Next.js",
      "Developed motion capture features to calculate body angles and postures in real time",
      "Real-time motion analysis",
      "Collaborated with product and design to ship features end to end",
    ],
  },
  {
    slug: "heroes-de-la-gripe",
    title: "Heroes de la Gripe",
    cover: {
      src: "/images/projects/heroes-de-la-gripe.png",
      alt: "Heroes de la Gripe cover art",
    },
    links: [
      {
        label: "Play it",
        href: "https://iocusstudio.github.io/Heroes-de-la-Gripe/",
      },
    ],
    summary: "Educational videogame built with Phaser 3",
    category: "Game Development",
    year: 2020,
    role: "Game Developer",
    status: "Finished",
    featured: false,
    tech: ["JavaScript", "Phaser 3"],
    description: [
      "Héroes de la Gripe is an educational videogame built with Phaser 3 during the course of two university subjects. The project aimed to raise awareness about prevention and self-care against swine flu through interactive gameplay.",
    ],
    highlights: [
      "Educational Game",
      "Built with Phaser 3 for web",
      "Awareness and prevention campaign",
      "Leaderboard",
    ],
  },
  {
    slug: "furious-punch",
    title: "Furious Punch",
    cover: {
      src: "/images/projects/furious-punch.png",
      alt: "Furious Punch cover art",
    },
    links: [
      {
        label: "Trailer",
        href: "https://www.youtube.com/watch?v=qcBI7WsxTDQ",
      },
    ],
    summary: "Mobile action videogame created with Unity 3D",
    category: "Game Development",
    year: 2020,
    role: "Game Developer",
    status: "Finished",
    featured: false,
    tech: ["Unity 3D", "C#"],
    description: [
      "Furious Punch is a mobile action videogame created with Unity 3D for UX Lab Games, featuring dynamic combat mechanics and an engaging player experience.",
    ],
    highlights: [
      "Mobile action game",
      "Built with Unity 3D",
      "Dynamic combat mechanics",
      "Engaging player experience",
      "Fast pacing levels",
      "Design as an hypercasual action game",
    ],
  },
  {
    slug: "hexperiment",
    title: "Hexperiment",
    cover: {
      src: "/images/projects/hexperiment.png",
      alt: "Hexperiment cover art",
    },
    links: [
      {
        label: "Trailer",
        href: "https://www.youtube.com/watch?v=tov4FODMtmI",
      },
      {
        label: "Gameplay",
        href: "https://www.youtube.com/watch?v=uW0GDp47hPc",
      },
      { label: "Itch.io", href: "https://nicocravero.itch.io/hexperiment" },
      {
        label: "GitHub",
        href: "https://github.com/genaro-cravero/Hexperiment/",
      },
    ],
    summary: "Top-down waves shooter created with Unity 3D",
    category: "Game Development",
    year: 2026,
    role: "Game Developer",
    status: "Finished",
    featured: true,
    tech: ["Unity 3D", "C#"],
    description: [
      "Top-down waves shooter prototype made in Unity focused on gameplay feel and clean architecture. The prototype includes enemies / AI with state machine, Improvement system, waves spawning, boss, a decoupled health and damage system, object pooling, mouse aiming and interfaces.",
    ],
    highlights: [
      "Desktop top down shooter",
      "Waves of enemies",
      "Final wave boss",
      "Dynamic gameplay",
      "Level progression",
      "Improvement system",
      "Enemy AI with state machine",
      "Object pooling",
    ],
  },
  {
    slug: "skinwalker",
    title: "Skinwalker",
    cover: {
      src: "/images/projects/skinwalker.jpg",
      alt: "Skinwalker cover art",
    },
    links: [
      {
        label: "Trailer",
        href: "https://www.youtube.com/watch?v=4xG92utzJWA",
      },
      {
        label: "Steam Page",
        href: "https://store.steampowered.com/app/3086670/SKINWALKER_First_Blood/",
      },
    ],
    summary:
      "2D action platformer videogame developed in Unity for Sismo Games and Team17.",
    category: "Game Development",
    year: 2026,
    role: "Game Developer",
    status: "Finished",
    featured: true,
    tech: ["Unity 3D", "C#"],
    description: [
      "A 2D action platformer videogame developed in Unity for Sismo Games and Team17. Responsible for character and boss behavior programming, dialogue system, and gameplay mechanics design.",
    ],
    highlights: [
      "Character Controllers",
      "Boss Mechanics",
      "Soldiers and Scientist AI",
      "Dialogue System",
      "Combat Mechanics",
      "Checkpoint System",
      "Puzzles",
      "UI implementation",
      "Cinemachine cameras",
      "Cinematic playables",
      "Rooms and alarms systems",
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    summary:
      "A minimal, content-driven portfolio built with Next.js, TypeScript and Tailwind CSS.",
    category: "Web Development",
    year: 2026,
    role: "Designer & Developer",
    status: "Live",
    featured: false,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: [
      "This site is intentionally small: a typed content layer, a handful of composable sections and no database. Projects and experience live in data modules, so adding an entry never requires touching layout code.",
      "The design system is built on a near-black canvas, a single warm accent and a strict type scale. Content is versioned in Git, which keeps the authoring workflow simple and the published site fully static.",
    ],
    highlights: [
      "Typed content modules with static generation for every project page.",
      "Zero client-side data fetching and no database.",
      "Accessible, responsive layouts with a single accent color.",
      "Automatic sitemap, robots, metadata and Open Graph image.",
    ],
  },
] satisfies Project[];
