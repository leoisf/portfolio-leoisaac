import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leoisaac.com.br";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/docs/Curriculo%20Ciencia%20de%20Dados%20e%20IA%20-%20Leonardo%20Isaac.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/Curriculo%20Engenharia%20de%20Software%20-%20Leonardo%20Isaac.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/Curriculo%20Agilidade%20e%20Governanca%20-%20Leonardo%20Isaac.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/Master%20Professional%20History%20and%20Timeline%20-%20Leonardo%20Isaac.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/docs/curriculum_LEONARDO_ISAAC.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

