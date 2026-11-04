import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

const seenSlugs = new Set<string>();

for (const project of projects) {
  if (seenSlugs.has(project.slug)) {
    throw new Error(`Duplicate project slug: "${project.slug}".`);
  }

  seenSlugs.add(project.slug);
}

export const allProjects: Project[] = [...projects].sort(
  (a, b) => b.year - a.year || a.title.localeCompare(b.title),
);

export function getProject(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getProjectPosition(slug: string): number {
  return allProjects.findIndex((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  const featured = allProjects.filter((project) => project.featured);
  const selection = featured.length > 0 ? featured : allProjects;

  return selection.slice(0, limit);
}

export function getNextProject(slug: string): Project | undefined {
  if (allProjects.length === 0) {
    return undefined;
  }

  const position = getProjectPosition(slug);
  const nextPosition = position === -1 ? 0 : (position + 1) % allProjects.length;

  return allProjects[nextPosition];
}
