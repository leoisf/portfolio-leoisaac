import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/LanguageContext";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leoisaac.com.br"),
  title: {
    default: "Leonardo Isaac | Cientista de Dados, Especialista em IA & Engenheiro Full Stack",
    template: "%s | Leonardo Isaac",
  },
  description:
    "Portfólio oficial de Leonardo Isaac — Bacharel em Ciência da Computação (UFOP), Pós em Ciência de Dados, Engenheiro de Software Full Stack, Agilista SAFe® 6 (Inglês B1/B2) com 25 anos de trajetória em TI.",
  applicationName: "Portfólio Leonardo Isaac",
  category: "technology",
  icons: {
    icon: "/images/logo/ivector-g.png",
    apple: "/images/logo/ivector-g.png",
  },
  keywords: [
    "Leonardo Isaac",
    "Cientista de Dados",
    "Especialista em Inteligência Artificial",
    "Desenvolvedor Full Stack",
    "Engenheiro de Software",
    "Ciência da Computação UFOP",
    "Pós-Graduação Ciência de Dados",
    "SAFe 6 Agilist",
    "Inglês B1/B2",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Machine Learning",
    "PostgreSQL",
    "Supabase",
    "Ouro Preto MG",
    "Governança de TI",
  ],
  authors: [{ name: "Leonardo Isaac", url: "https://leoisaac.com.br" }],
  creator: "Leonardo Isaac",
  publisher: "Leonardo Isaac",
  alternates: {
    canonical: "https://leoisaac.com.br",
    languages: {
      "pt-BR": "https://leoisaac.com.br",
      "en-US": "https://leoisaac.com.br",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Leonardo Isaac | Cientista de Dados, IA & Engenheiro Full Stack",
    description:
      "Bacharel em Ciência da Computação (UFOP) • Pós em Ciência de Dados • 25 Anos em TI • SAFe® 6 • Inglês B1/B2. Confira projetos em IA, sistemas críticos, certificações e currículos.",
    url: "https://leoisaac.com.br",
    siteName: "Portfólio - Leonardo Isaac",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "profile",
    images: [
      {
        url: "/images/profile/perfil.jpeg",
        width: 800,
        height: 800,
        alt: "Leonardo Isaac - Cientista da Computação & Especialista em Ciência de Dados e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Isaac | Cientista de Dados, IA & Engenheiro Full Stack",
    description:
      "Cientista da Computação (UFOP), Pós em Ciência de Dados, Full Stack & Agilista SAFe® 6 com 25 anos em TI.",
    images: ["/images/profile/perfil.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-blue-500 selection:text-white">
        <JsonLd />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
