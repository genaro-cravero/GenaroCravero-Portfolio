import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/site/container";
import { ArrowLink } from "@/components/ui/arrow-link";
import { allProjects } from "@/lib/projects";
import { ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected games, tools and web products built by Genaro Cravero.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    title: "Projects — Genaro Cravero",
    description:
      "Selected games, tools and web products built by Genaro Cravero.",
    url: "/projects",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Genaro Cravero",
    description:
      "Selected games, tools and web products built by Genaro Cravero.",
    images: [ogImage],
  },
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
          Projects
        </p>
        <h1 className="mt-6 text-balance text-4xl font-medium leading-[1] tracking-[-0.045em] md:text-6xl">
          Games, tools and web products.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          A selection of interactive projects, from Unity prototypes to
          production web applications.
        </p>
      </header>

      {allProjects.length > 0 ? (
        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {allProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index + 1}
            />
          ))}
        </div>
      ) : (
        <p className="mt-16 border-t border-line pt-8 text-sm text-muted">
          Projects are being prepared. Check back soon.
        </p>
      )}

      <div className="mt-20 border-t border-line pt-8">
        <ArrowLink href="/" direction="left">
          Back to home
        </ArrowLink>
      </div>
    </Container>
  );
}
