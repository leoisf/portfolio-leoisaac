import React from "react";
import { initialProfile } from "@/data/initialData";

export function JsonLd() {
  const siteUrl = "https://leoisaac.com.br";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: initialProfile.full_name,
    givenName: "Leonardo",
    familyName: "Isaac",
    jobTitle: initialProfile.headline,
    description: initialProfile.bio,
    url: siteUrl,
    image: `${siteUrl}${initialProfile.avatar_url}`,
    email: `mailto:${initialProfile.email}`,
    telephone: initialProfile.whatsapp,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ouro Preto",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Universidade Federal de Ouro Preto (UFOP)",
        url: "https://ufop.br",
      },
    ],
    knowsLanguage: [
      {
        "@type": "Language",
        name: "Portuguese",
        alternateName: "pt-BR",
      },
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
        description: "CEFR B1/B2 - Technical Reading, Writing and Professional Communication",
      },
    ],
    knowsAbout: [
      "Ciência da Computação",
      "Ciência de Dados",
      "Inteligência Artificial",
      "Machine Learning",
      "Engenharia de Software Full Stack",
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Supabase",
      "SAFe 6 Agilist",
      "Scrum",
      "DevOps",
      "Governança de TI",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Bacharelado em Ciência da Computação (UFOP)",
        credentialCategory: "degree",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Pós-Graduação em Ciência de Dados",
        credentialCategory: "certificate",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certified SAFe® 6 Agilist",
        credentialCategory: "certification",
      },
    ],
    sameAs: [
      initialProfile.linkedin,
      initialProfile.github,
    ].filter(Boolean),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Leonardo Isaac | Portfólio Profissional - Ciência de Dados, IA & Full Stack",
    description:
      "Portfólio profissional de Leonardo Isaac - Bacharel em Ciência da Computação (UFOP), Pós em Ciência de Dados, Desenvolvedor Full Stack e Especialista em IA com 25 anos em TI.",
    inLanguage: ["pt-BR", "en"],
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: "Portfólio Profissional de Leonardo Isaac",
    mainEntity: {
      "@id": `${siteUrl}/#person`,
    },
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
