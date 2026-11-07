import { profile } from "@/content/profile";
import { Section } from "@/components/site/section";

export function ContactSection() {
  const socials = profile.socials.filter((social) => social.label !== "Email");

  return (
    <Section id="contact" index="06" label="Contact">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <h3 className="max-w-xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-muted">worth playing.</span>
          </h3>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            Have a project in mind or want to talk about games and software?
            Email is the best way to reach me.
          </p>
        </div>

        <div className="lg:pt-2">
          <a
            href={`mailto:${profile.email}`}
            className="group flex flex-wrap items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:text-accent"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              Email
            </span>
            <span className="flex items-center gap-3 text-sm sm:text-base">
              {profile.email}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                ↗
              </span>
            </span>
          </a>

          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-wrap items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:text-accent"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                {social.label}
              </span>
              <span className="flex items-center gap-3 text-sm sm:text-base">
                {social.handle}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
