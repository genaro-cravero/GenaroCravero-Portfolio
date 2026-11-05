import { profile } from "@/content/profile";
import { Container } from "@/components/site/container";
import { ArrowLink } from "@/components/ui/arrow-link";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24 md:py-32">
        <h1
          id="hero-heading"
          className="animate-rise text-balance text-[clamp(2.5rem,6vw,4rem)] font-medium leading-[0.95] tracking-[-0.04em]"
        >
          {profile.name}
        </h1>

        <p className="animate-rise animate-rise-delayed mt-5 flex items-center gap-3 text-lg text-muted md:text-xl">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          {profile.role}
        </p>

        <p className="animate-rise animate-rise-delayed mt-6 max-w-md text-pretty text-base leading-relaxed text-muted">
          {profile.tagline}
        </p>

        <div className="animate-rise animate-rise-delayed mt-12 flex flex-col gap-6 border-t border-line pt-8 md:mt-16 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <ArrowLink href="/projects">View selected work</ArrowLink>
            <ArrowLink href="/#contact">Get in touch</ArrowLink>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            {profile.stack.join(" · ")}
          </p>
        </div>
      </Container>
    </section>
  );
}
