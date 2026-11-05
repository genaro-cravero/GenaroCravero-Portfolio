import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

const coverSrcPattern =
  /^\/images\/projects\/[a-z0-9-]+\.(?:jpe?g|png|webp|avif)$/;

const seenSlugs = new Set<string>();
const projectList: Project[] = projects;

for (const project of projectList) {
  if (seenSlugs.has(project.slug)) {
    throw new Error(`Duplicate project slug: "${project.slug}".`);
  }

  seenSlugs.add(project.slug);

  if (project.cover) {
    if (!coverSrcPattern.test(project.cover.src)) {
      throw new Error(
        `Invalid cover for project "${project.slug}": cover.src must match /images/projects/<slug>.(jpg|jpeg|png|webp|avif), received "${project.cover.src}".`,
      );
    }

    if (project.cover.alt.trim().length === 0) {
      throw new Error(
        `Invalid cover for project "${project.slug}": cover.alt must not be empty.`,
      );
    }
  }

  for (const link of project.links ?? []) {
    const href = link.href.trim();

    if (link.label.trim().length === 0 || href.length === 0) {
      throw new Error(
        `Invalid link for project "${project.slug}": label and href must not be empty.`,
      );
    }

    if (href === "#") {
      throw new Error(
        `Invalid link for project "${project.slug}": href must not be "#".`,
      );
    }
  }
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
