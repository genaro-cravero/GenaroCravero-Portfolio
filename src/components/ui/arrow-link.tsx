import Link from "next/link";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
  external?: boolean;
};

export function ArrowLink({
  href,
  children,
  className,
  direction = "right",
  external = false,
}: ArrowLinkProps) {
  const classes = cn(
    "group inline-flex min-h-11 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink",
    className,
  );

  const content = (
    <>
      {direction === "left" ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-x-1"
        >
          ←
        </span>
      ) : null}
      {children}
      {direction === "right" ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
