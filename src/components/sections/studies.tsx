import { studies } from "@/content/studies";
import type { Study } from "@/content/types";
import { Section } from "@/components/site/section";

function StudyList({
  title,
  items,
}: {
  title: string;
  items: Study[];
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        {title}
      </h3>
      <ul className="mt-6 border-t border-line">
        {items.map((item) => (
          <li
            key={`${item.title}-${item.institution}`}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-5"
          >
            <div>
              <h4 className="text-sm font-medium tracking-[-0.01em]">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h4>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              {item.year}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StudiesSection() {
  const degrees = studies.filter((item) => item.type === "degree");
  const certifications = studies.filter(
    (item) => item.type === "certification",
  );

  return (
    <Section id="studies" index="05" label="Studies and Certifications">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <StudyList title="Education" items={degrees} />
        <StudyList title="Certifications" items={certifications} />
      </div>
    </Section>
  );
}
