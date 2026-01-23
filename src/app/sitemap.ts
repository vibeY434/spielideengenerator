import { MetadataRoute } from "next";
import { games, generateSlug } from "@/data/games";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spielgenerator.de";

  // Statische Seiten
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/arbeitsblaetter`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamische Spielseiten (167 Spiele)
  const gamePages: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${baseUrl}/spiel/${generateSlug(game.title)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...gamePages];
}
