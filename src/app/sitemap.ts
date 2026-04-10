import type { MetadataRoute } from "next";

const SITE_URL = "https://afeje.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/mission", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/programme", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/code", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/impact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/diagnostic", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/diagnostic/profil-cognitif", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/rejoindre", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
