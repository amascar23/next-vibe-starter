import type { MetadataRoute } from "next";
import { getAllJournalSlugs, getAllProjectSlugs } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://annisa-pendidik.vercel.app";
  const now = new Date();

  const journalEntries: MetadataRoute.Sitemap = getAllJournalSlugs().map((slug) => ({
    url: `${siteUrl}/jurnal/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: `${siteUrl}/karya/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...journalEntries,
    ...projectEntries,
  ];
}

