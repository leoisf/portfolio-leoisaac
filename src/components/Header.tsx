"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Download, MessageSquare, History } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.skills, href: "#habilidades" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.clipping, href: "#clipping" },
    { label: t.nav.social, href: "#social" },
    { label: t.nav.certificates, href: "#certificados" },
    { label: t.nav.contact, href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Oficial Autoral */}
        <Link 
          href="/" 
          className="flex items-center group py-1"
          title="Leonardo Isaac"
        >
          {/* Logo Clara para Modo Dark */}
          <img
            src="/images/logo/logo_isaac_light.png"
            alt="Leonardo Isaac - Portfólio"
            className="hidden dark:block h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          {/* Logo Original Escura para Modo Light */}
          <img
            src="/images/logo/logo_isaac_final-1.png"
            alt="Leonardo Isaac - Portfólio"
            className="block dark:hidden h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/60 p-1.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 rounded-xl hover:bg-white dark:hover:bg-zinc-800/80 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="/antigo/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/50 dark:hover:border-cyan-400/50 transition-colors shadow-xs"
            title={t.nav.legacySite}
          >
            <History className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
            <span>{t.nav.legacySite}</span>
          </a>
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="/docs/curriculum_LEONARDO_ISAAC.pdf"
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-blue-500" />
            <span>{t.nav.resume}</span>
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-200"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.nav.getInTouch}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/antigo/index.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-blue-600 dark:text-cyan-400 bg-blue-50/60 dark:bg-blue-950/40 flex items-center gap-2"
            >
              <History className="w-4 h-4" />
              <span>{t.nav.legacySite}</span>
            </a>
            <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex gap-2">
              <a
                href="/docs/curriculum_LEONARDO_ISAAC.pdf"
                download
                className="flex-1 text-center py-2.5 text-xs font-semibold rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
              >
                {t.nav.resume}
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 text-xs font-semibold rounded-xl bg-blue-600 text-white"
              >
                {t.nav.contact}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
