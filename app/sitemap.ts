import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";

const baseUrl = "https://thinksmartergroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = routes
    .map((r) => r.href)
    .filter((href) => href.startsWith("/") && !href.includes("#"))
    .map((href) => ({
      url: `${baseUrl}${href}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: href === "/" ? 0.8 : 0.7,
    }));

  // If you later add dynamic routes, fetch and append here.

  return staticRoutes;
}


