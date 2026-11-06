import { profile } from "@/content/profile";
import { Container } from "@/components/site/container";
import { ArrowLink } from "@/components/ui/arrow-link";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="hairline-grid pointer-events-none absolute inset-0"
      />

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24 md:py-32">
        <div className="relative">
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-8">
            <div className="flex flex-col lg:min-w-0 lg:flex-1 lg:pb-16">
              <h1
                id="hero-heading"
                className="animate-rise text-balance text-[clamp(2.5rem,6vw,4rem)] font-medium leading-[0.95] tracking-[-0.04em]"
              >
                {profile.name}
              </h1>

              <p className="animate-rise animate-rise-delayed mt-5 flex items-center gap-3 text-lg text-muted md:text-xl">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-accent"
                />
                {profile.role}
              </p>

              <p className="animate-rise animate-rise-delayed mt-6 max-w-md text-pretty text-base leading-relaxed text-muted">
                {profile.tagline}
              </p>
            </div>

            <div
              aria-hidden="true"
              className="hidden lg:block lg:w-56 lg:shrink-0 lg:border-l lg:border-line lg:pl-6 lg:pt-2"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
                Focus
              </p>
              <ul className="mt-4 divide-y divide-line border-t border-line">
                {profile.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="py-2.5 font-mono text-[10px] leading-relaxed tracking-[0.06em] text-faint"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-rise animate-rise-delayed mt-12 flex flex-col gap-6 border-t border-line pt-8 md:mt-16 md:flex-row md:items-center md:justify-between lg:mt-0">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <ArrowLink href="/projects">View selected work</ArrowLink>
              <ArrowLink href="/#contact">Get in touch</ArrowLink>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              {profile.stack.join(" · ")}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 select-none font-mono text-xs leading-none text-faint opacity-50"
          >
            +
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 select-none font-mono text-xs leading-none text-faint opacity-50"
          >
            +
          </span>
        </div>
      </Container>
    </section>
  );
}
