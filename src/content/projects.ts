import type { Project } from "./types";

// Example entries: replace them with real projects before publishing.
export const projects = [
  {
    slug: "ember-protocol",
    title: "Ember Protocol",
    summary:
      "A fast-paced action roguelike built around modular weapon systems and responsive combat.",
    category: "Game Development",
    year: 2025,
    role: "Gameplay & Systems Programmer",
    status: "In development",
    featured: true,
    tech: ["Unity", "C#", "Addressables", "Shader Graph"],
    description: [
      "Ember Protocol is a top-down action roguelike prototype focused on tight combat feel and build variety. The architecture is data-driven: weapons, modifiers and enemy behaviours are composed from small, reusable definitions instead of hard-coded classes.",
      "My work covered the gameplay layer end to end: player controller, combat loop, enemy AI, upgrade system and the tools used to tune them. The project was an exercise in keeping a growing feature set readable and easy to iterate on.",
    ],
    highlights: [
      "Designed a modular weapon and modifier system that supports new builds without code changes.",
      "Built a state-driven player controller with input buffering and responsive feedback.",
      "Implemented pooled projectiles and effects to keep frame times stable during combat.",
      "Created in-editor tooling for tuning enemy waves and combat parameters.",
    ],
  },
  {
    slug: "hollow-circuit",
    title: "Hollow Circuit",
    summary:
      "A 3D puzzle platformer about restoring power to an abandoned facility.",
    category: "Game Development",
    year: 2024,
    role: "Gameplay Programmer",
    status: "Released",
    featured: true,
    tech: ["Unity", "C#", "Cinemachine", "ProBuilder"],
    description: [
      "Hollow Circuit is a compact 3D puzzle platformer built around energy routing and spatial reasoning. Each room introduces a single mechanic, then combines it with earlier ideas to create increasingly layered solutions.",
      "I implemented the interaction framework, moving platforms, checkpoints and the puzzle state machine that connects every element in a level. The focus was on predictable physics, clear feedback and a low-friction retry loop.",
    ],
    highlights: [
      "Built a reusable interaction framework for switches, doors and energy nodes.",
      "Implemented deterministic puzzle state tracking with save and reset support.",
      "Designed a fast checkpoint and respawn flow to keep retries frictionless.",
      "Collaborated with level designers to iterate on physics and camera behaviour.",
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
    featured: true,
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
