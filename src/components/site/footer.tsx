import { profile } from "@/content/profile";
import { getSiteTimestamp } from "@/lib/time";
import { Container } from "./container";

export async function Footer() {
  const timestamp = await getSiteTimestamp();
  const year = new Date(timestamp).getFullYear();
  const socials = profile.socials.filter((social) => social.label !== "Email");

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-8 font-mono text-[11px] uppercase tracking-[0.18em] text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>

        <nav aria-label="Social" className="flex flex-wrap items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center transition-colors hover:text-ink"
            >
              {social.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className="group inline-flex min-h-11 items-center gap-2 transition-colors hover:text-ink"
        >
          Back to top
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          >
            ↑
          </span>
        </a>
      </Container>
    </footer>
  );
}
