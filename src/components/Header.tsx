"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Download, MessageSquare, History, ShieldCheck } from "lucide-react";
import { openCvSelectorModal } from "@/components/ui/CvSelectorModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const checkAdmin = () => {
      if (typeof window !== "undefined") {
        setIsAdmin(Boolean(localStorage.getItem("admin_session")));
      }
    };
    checkAdmin();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("storage", checkAdmin);
    window.addEventListener("portfolio_data_changed", checkAdmin);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkAdmin);
      window.removeEventListener("portfolio_data_changed", checkAdmin);
    };
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.skills, href: "#habilidades" },
    { label: t.nav.certificates, href: "#certificados" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.clipping, href: "#clipping" },
    { label: t.nav.social, href: "#social" },
    { label: t.nav.testimonials || "Depoimentos", href: "#depoimentos" },
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
          onClick={(e) => {
            if (typeof window !== "undefined" && window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center group py-1 cursor-pointer"
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
          {/* CMS Studio Quick Access */}
          <Link
            href={isAdmin ? "/admin/dashboard" : "/admin/login"}
            className="relative p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/50 transition-colors shadow-xs"
            title={isAdmin ? "Painel CMS Studio (Ativo)" : "Acesso CMS Studio (Gestão do Site)"}
            aria-label="CMS Studio"
          >
            <ShieldCheck className="w-4 h-4" />
            {isAdmin && (
              <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-1 right-1 ring-2 ring-white dark:ring-zinc-950 animate-pulse" />
            )}
          </Link>
          <button
            type="button"
            onClick={() => openCvSelectorModal()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-blue-500" />
            <span>{t.nav.resume}</span>
          </button>
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
            <Link
              href={isAdmin ? "/admin/dashboard" : "/admin/login"}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>Painel CMS Studio</span>
              </div>
              {isAdmin && (
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[10px] font-mono font-bold">
                  ATIVO
                </span>
              )}
            </Link>
            <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCvSelectorModal();
                }}
                className="flex-1 text-center py-2.5 text-xs font-semibold rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 cursor-pointer"
              >
                {t.nav.resume}
              </button>
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
