import type { MetadataRoute } from "next";

const siteUrl = "https://andreiareis.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-22"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/logo.png`,
        `${siteUrl}/images/hero.png`,
        `${siteUrl}/images/about.png`,
        `${siteUrl}/images/work.png`,
        `${siteUrl}/images/office.png`,
      ],
    },
  ];
}
