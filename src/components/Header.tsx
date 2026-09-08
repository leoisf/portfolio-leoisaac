"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Code2, ShieldCheck, Download, MessageSquare } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Projetos", href: "#projetos" },
    { label: "Clipping", href: "#clipping" },
    { label: "Impacto Social", href: "#social" },
    { label: "Certificados", href: "#certificados" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80 shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Oficial */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group py-1"
        >
          {/* Versão para Dark Mode */}
          <img
            src="/images/logo/logo_isaac_dark_mode.png"
            alt="Leonardo Isaac - Portfólio"
            className="hidden dark:block h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          {/* Versão para Light Mode */}
          <img
            src="/images/logo/logo_isaac_final.png"
            alt="Leonardo Isaac - Portfólio"
            className="block dark:hidden h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/60 p-1.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-cyan-400 rounded-xl hover:bg-white dark:hover:bg-zinc-800/80 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/docs/curriculum_LEONARDO_ISAAC.pdf"
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-blue-500" />
            <span>Currículo</span>
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-200"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Fale Comigo</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
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
            <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex gap-2">
              <a
                href="/docs/curriculum_LEONARDO_ISAAC.pdf"
                download
                className="flex-1 text-center py-2.5 text-xs font-semibold rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
              >
                Baixar CV
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 text-xs font-semibold rounded-xl bg-blue-600 text-white"
              >
                Contato
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
