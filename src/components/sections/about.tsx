import { profile } from "@/content/profile";
import { Section } from "@/components/site/section";

export function AboutSection() {
  return (
    <Section id="about" index="01" label="About">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
        <p className="max-w-3xl text-pretty text-xl leading-[1.65] text-ink/90 md:text-2xl md:leading-[1.6]">
          {profile.about}
        </p>

        <div className="space-y-8 border-line lg:border-l lg:pl-10">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
              Focus
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {profile.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
              Core stack
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {profile.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
