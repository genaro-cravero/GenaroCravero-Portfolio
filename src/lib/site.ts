import { profile } from "@/content/profile";

const fallbackUrl = "https://genaro-cravero.vercel.app";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl
).replace(/\/+$/, "");

export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: `${profile.name} — ${profile.role}`,
};

export const navigation = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
