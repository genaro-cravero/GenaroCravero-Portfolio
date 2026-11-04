import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/projects/project-visual";
import { Container } from "@/components/site/container";
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  allProjects,
  getNextProject,
  getProject,
  getProjectPosition,
} from "@/lib/projects";
import { ogImage } from "@/lib/site";

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Page not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const position = getProjectPosition(project.slug);
  const nextProject = getNextProject(project.slug);

  return (
    <article>
      <Container className="py-16 md:py-24">
        <ArrowLink href="/projects" direction="left">
          All projects
        </ArrowLink>

        <header className="mt-12 grid gap-8 border-b border-line pb-12 md:pb-16">
          <p className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            <span>{project.category}</span>
            <span aria-hidden="true" className="h-px w-5 bg-line-strong" />
            <span>{project.year}</span>
          </p>

          <h1 className="max-w-4xl text-balance text-5xl font-medium leading-[0.98] tracking-[-0.05em] md:text-7xl">
            {project.title}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {project.summary}
          </p>
        </header>

        <div className="mt-10 md:mt-14">
          <ProjectVisual
            project={project}
            index={position + 1}
            className="aspect-[16/9]"
            sizes="(min-width: 1024px) 72rem, 100vw"
          />
        </div>

        <div className="grid gap-12 border-b border-line py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
          <div>
            <div className="space-y-5">
              {project.description.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <section aria-labelledby="highlights" className="mt-12">
              <h2
                id="highlights"
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint"
              >
                Highlights
              </h2>
              <ul className="mt-6 space-y-3 border-t border-line pt-6">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-px w-3 shrink-0 bg-accent/70"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            {project.links?.length ? (
              <div className="mt-12 flex flex-wrap gap-3">
                {project.links.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <a
                      key={`${link.label}-${link.href}`}
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="group inline-flex items-center gap-3 border border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:border-line-strong hover:text-ink"
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          <aside aria-label="Project details">
            <dl className="grid grid-cols-2 gap-8 lg:grid-cols-1">
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                  Year
                </dt>
                <dd className="mt-2 text-sm">{project.year}</dd>
              </div>

              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                  Role
                </dt>
                <dd className="mt-2 text-sm">{project.role}</dd>
              </div>

              {project.status ? (
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                    Status
                  </dt>
                  <dd className="mt-2 text-sm">{project.status}</dd>
                </div>
              ) : null}

              <div className="col-span-2 lg:col-span-1">
                <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
                  Stack
                </dt>
                <dd className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        {nextProject ? (
          <div className="pt-12 md:pt-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
              Next project
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group mt-5 flex items-end justify-between gap-6"
            >
              <h2 className="text-balance text-3xl font-medium tracking-[-0.035em] transition-colors group-hover:text-accent md:text-5xl">
                {nextProject.title}
              </h2>
              <span
                aria-hidden="true"
                className="pb-1 text-xl text-faint transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </Link>
          </div>
        ) : null}
      </Container>
    </article>
  );
}
