import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { ArrowLink } from "@/components/ui/arrow-link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-faint">
        Error 404
      </p>
      <h1 className="mt-6 max-w-2xl text-balance text-4xl font-medium tracking-[-0.045em] md:text-6xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
        The link may be broken, or the page may have moved.
      </p>
      <div className="mt-10">
        <ArrowLink href="/" direction="left">
          Back to home
        </ArrowLink>
      </div>
    </Container>
  );
}
