"use client";

import Link from "next/link";
import { ArrowUp, Mail, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              {/* Logo Clara para Modo Dark */}
              <img
                src="/images/logo/logo_isaac_light.png"
                alt="Leonardo Isaac"
                className="hidden dark:block h-8 w-auto object-contain"
              />
              {/* Logo Original Escura para Modo Light */}
              <img
                src="/images/logo/logo_isaac_final-1.png"
                alt="Leonardo Isaac"
                className="block dark:hidden h-8 w-auto object-contain"
              />
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 font-mono">
                leoisaac.com.br
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/leoisf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-isaac-silva-flores-9b66236b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:contato@leoisaac.com.br"
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105 transition-all"
              aria-label="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105 transition-all"
              aria-label={t.footer.backToTop}
              title={t.footer.backToTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500">
          <p>
            © {new Date().getFullYear()} Leonardo Isaac. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <span>Next.js 15 • Supabase • Cloudflare Pages</span>
            <Link
              href="/admin/login"
              className="flex items-center gap-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              <Shield className="w-3 h-3" />
              <span>{t.footer.admin}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
