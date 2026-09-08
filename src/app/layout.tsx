import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Leonardo Isaac | Cientista da Computação & Desenvolvedor Full Stack",
  description: "Portfólio profissional de Leonardo Isaac - Bacharel em Ciência da Computação (UFOP), Desenvolvedor Full Stack, Certified SAFe® 6 Agilist com mais de 22 anos de trajetória em TI e transformação digital.",
  keywords: ["Leonardo Isaac", "Desenvolvedor Full Stack", "Ciência da Computação", "UFOP", "SAFe 6", "React", "Next.js", "PostgreSQL", "Ouro Preto"],
  authors: [{ name: "Leonardo Isaac" }],
  openGraph: {
    title: "Leonardo Isaac - Portfólio Profissional",
    description: "Cientista da Computação | Analista & Desenvolvedor Web Full Stack | Agilista",
    url: "https://leoisaac.com.br",
    siteName: "Portfólio - Leonardo Isaac",
    locale: "pt_BR",
    type: "website",
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
