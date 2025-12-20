import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const paths = [
    "",
    "/fundraisers",
    "/live",
    "/news",
    "/team",
    "/awards",
    "/media",
    "/partners",
    "/closed",
    "/raffles",
    "/support",
    "/templates"
  ];

  return paths.map(p => ({
    url: `${base}${p}`,
    lastModified: new Date()
  }));
}
