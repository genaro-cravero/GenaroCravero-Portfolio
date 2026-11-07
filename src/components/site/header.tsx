import Link from "next/link";
import { profile } from "@/content/profile";
import { navigation } from "@/lib/site";
import { Container } from "./container";

export function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md"
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${profile.name} — Home`}
          className="group flex h-16 items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-150"
          />
          <span className="text-sm font-medium tracking-tight">
            {profile.name}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-16 items-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group relative md:hidden">
          <summary className="flex h-16 cursor-pointer list-none items-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 top-[calc(100%+1.25rem)] w-48 border border-line bg-surface p-2"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center px-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:bg-surface-raised hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </Container>
    </header>
  );
}
