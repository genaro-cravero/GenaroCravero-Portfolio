import Link from "next/link";
import type { Project } from "@/content/types";
import { ProjectVisual } from "./project-visual";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col"
    >
      <ProjectVisual
        project={project}
        index={index}
        className="aspect-[4/3]"
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      />

      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium tracking-[-0.015em] transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          {project.year}
        </span>
      </div>

      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
        {project.tech.slice(0, 4).join(" / ")}
      </p>
    </Link>
  );
}
