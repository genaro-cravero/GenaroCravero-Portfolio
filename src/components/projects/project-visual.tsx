import Image from "next/image";
import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";
import { formatIndex } from "@/lib/format";

type ProjectVisualProps = {
  project: Project;
  index: number;
  className?: string;
  sizes?: string;
  preload?: boolean;
};

export function ProjectVisual({
  project,
  index,
  className,
  sizes = "100vw",
  preload = false,
}: ProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-line bg-surface transition-colors duration-300 group-hover:border-line-strong",
        className,
      )}
    >
      {project.cover ? (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <>
          <div aria-hidden="true" className="hairline-grid absolute inset-0" />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/60"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-3 right-4 font-mono text-[clamp(3.5rem,8vw,6rem)] leading-none tracking-[-0.08em] text-white/[0.055]"
          >
            {formatIndex(index)}
          </span>
        </>
      )}

      <span className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
        {project.category}
      </span>
      <span
        aria-hidden="true"
        className="absolute right-4 top-4 text-sm text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      >
        ↗
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-4 h-px w-8 bg-accent/70 transition-all duration-300 group-hover:w-14"
      />
    </div>
  );
}
