import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";

export function PersonStructuredData() {
  const sameAs = profile.socials
    .filter((social) => social.href.startsWith("http"))
    .map((social) => social.href);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.about,
    email: `mailto:${profile.email}`,
    url: siteUrl,
    sameAs,
    knowsAbout: [...new Set([...profile.stack, ...profile.focusAreas])],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
