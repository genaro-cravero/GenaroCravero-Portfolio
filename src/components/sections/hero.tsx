import { profile } from "@/content/profile";
import { Container } from "@/components/site/container";
import { ArrowLink } from "@/components/ui/arrow-link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24 md:py-32">
        <p className="animate-rise flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-faint">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          {profile.role}
          <span aria-hidden="true" className="text-line-strong">
            /
          </span>
          Unity · C# · Web
        </p>

        <h1 className="animate-rise animate-rise-delayed mt-8 max-w-5xl text-balance text-[clamp(3rem,9vw,6.75rem)] font-medium leading-[0.92] tracking-[-0.06em]">
          Interactive software,
          <br />
          <span className="text-muted">built with intent.</span>
        </h1>

        <div className="animate-rise animate-rise-delayed mt-12 grid gap-8 border-t border-line pt-8 md:mt-16 md:grid-cols-2 md:items-end">
          <p className="max-w-md text-pretty text-base leading-relaxed text-muted md:text-lg">
            C# developer focused on Unity and gameplay systems, with experience
            building web products with React, Node.js and Next.js.
          </p>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <ArrowLink href="/projects">View selected work</ArrowLink>
              <ArrowLink href="/#contact">Get in touch</ArrowLink>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              {profile.stack.join(" · ")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
