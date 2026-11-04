import { skillGroups } from "@/content/skills";
import { Section } from "@/components/site/section";

export function SkillsSection() {
  return (
    <Section id="skills" index="04" label="Skills">
      <dl className="border-t border-line">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-3 border-b border-line py-6 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12"
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint md:pt-1">
              {group.title}
            </dt>
            <dd className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
