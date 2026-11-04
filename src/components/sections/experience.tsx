import { experience } from "@/content/experience";
import { Section } from "@/components/site/section";
import { formatPeriod } from "@/lib/format";

export function ExperienceSection() {
  const entries = [...experience].sort(
    (a, b) => b.startYear - a.startYear,
  );

  return (
    <Section id="experience" index="03" label="Experience">
      <ol className="border-t border-line">
        {entries.map((entry) => (
          <li
            key={`${entry.company}-${entry.role}`}
            className="grid gap-6 border-b border-line py-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-12 md:py-10"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint md:pt-1.5">
              {formatPeriod(entry)}
            </p>

            <div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-medium tracking-[-0.015em]">
                  {entry.role}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {[entry.company, entry.location].filter(Boolean).join(" · ")}
                </p>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                {entry.summary}
              </p>

              <ul className="mt-5 space-y-2.5">
                {entry.highlights.map((highlight) => (
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

              {entry.tech?.length ? (
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  {entry.tech.join(" / ")}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
