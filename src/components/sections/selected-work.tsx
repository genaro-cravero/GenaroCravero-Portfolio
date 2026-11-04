import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/site/section";
import { getFeaturedProjects } from "@/lib/projects";

export function SelectedWorkSection() {
  const projects = getFeaturedProjects(3);

  return (
    <Section
      id="work"
      index="02"
      label="Projects"
      title="Selected work"
      action={{ href: "/projects", label: "All projects" }}
    >
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index + 1}
          />
        ))}
      </div>
    </Section>
  );
}
