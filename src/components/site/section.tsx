import { ArrowLink } from "@/components/ui/arrow-link";
import { cn } from "@/lib/cn";
import { Container } from "./container";

type SectionProps = {
  id?: string;
  index: string;
  label: string;
  title?: string;
  action?: {
    href: string;
    label: string;
  };
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  label,
  title,
  action,
  children,
  className,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("border-t border-line py-20 md:py-28", className)}
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id={headingId}
              className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-faint"
            >
              <span className="text-accent">{index}</span>
              <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
              {label}
            </h2>
            {title ? (
              <p className="mt-6 max-w-2xl text-balance text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                {title}
              </p>
            ) : null}
          </div>
          {action ? (
            <ArrowLink href={action.href} className="shrink-0">
              {action.label}
            </ArrowLink>
          ) : null}
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </Container>
    </section>
  );
}
