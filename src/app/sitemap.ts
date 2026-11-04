import type { MetadataRoute } from "next";
import { allProjects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";
import { getSiteTimestamp } from "@/lib/time";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date(await getSiteTimestamp());

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...allProjects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
