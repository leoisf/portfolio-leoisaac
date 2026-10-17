"use client";

import React, { useState, useEffect } from "react";
import { ProfileSettings } from "@/types/database";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowRight, 
  Download, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  GraduationCap,
  Briefcase,
  MapPin
} from "lucide-react";
import { HeroConstellation } from "@/components/ui/HeroConstellation";

interface HeroSectionProps {
  profile: ProfileSettings;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const { t, language } = useLanguage();

  const [imgError, setImgError] = useState(false);
  const avatarSrc = profile.avatar_url || "/images/profile/foto_perfil.png";

  const roles = language === "en" 
    ? [
        "Full-Stack Web Engineering & Microservices",
        "Data Science, Applied Modeling & AI",
        "Enterprise Agile Governance (SAFe® 6)",
        "High-Reliability Cloud Architecture"
      ]
    : [
        "Engenharia Web Full-Stack & Microsserviços",
        "Ciência de Dados, Modelagem Aplicada & IA",
        "Governança Ágil em Escala (SAFe® 6)",
        "Arquitetura Cloud & Alta Disponibilidade"
      ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeState(true);
      }, 280);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Interactive Neural / Data Network Animation */}
      <HeroConstellation />

      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-cyan-400/15 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{t.hero.availability}</span>
            </div>

            {/* Headline Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              {t.hero.greeting} <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                {profile.full_name}
              </span>
            </h1>

            {/* Dynamic Animated Role Headline */}
            <div className="h-7 sm:h-8 mt-3 mb-1 overflow-hidden flex items-center">
              <span className="text-xs font-mono text-zinc-400 mr-2 select-none">&gt;</span>
              <span className={`text-xs sm:text-sm font-mono font-semibold text-blue-600 dark:text-cyan-400 transition-all duration-300 ${
                fadeState ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
              }`}>
                {roles[currentRoleIndex]}
              </span>
              <span className="w-1.5 h-3.5 ml-1 bg-blue-600 dark:text-cyan-400 animate-pulse inline-block" />
            </div>

            {/* Subtitle / Headline */}
            <p className="mt-3 text-base sm:text-lg font-medium text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              {t.hero.headline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{t.hero.btnProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}?text=Olá%20Leonardo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 shadow-xs hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>{t.hero.btnWhatsapp}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Unified Official Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-6 shadow-2xl">
                
                {/* Header of code card */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">leonardo-isaac.ts</span>
                </div>

                {/* Profile Photo in High Quality & Role Badge */}
                <div className="my-5 flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl bg-gradient-to-b from-blue-600/20 via-indigo-600/10 to-zinc-900 p-1 group">
                    {!imgError ? (
                      <img
                        src={avatarSrc}
                        alt={profile.full_name}
                        className="w-full h-full object-cover object-top rounded-xl transition-transform duration-300 group-hover:scale-105"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1 w-full h-full">
                        <span className="font-mono text-2xl font-bold text-blue-600 dark:text-blue-400">
                          LI
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-500/30 text-blue-600 dark:text-cyan-400 text-[11px] font-mono font-medium shadow-2xs">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{t.hero.currentRole}</span>
                  </div>
                </div>

                {/* Unified Specs & Credential Lines */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="text-zinc-500 flex items-center gap-1.5 shrink-0">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                      <span>{language === "en" ? "Education:" : "Formação:"}</span>
                    </span>
                    <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-left sm:text-right">
                      {t.hero.graduation}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="text-zinc-500 flex items-center gap-1.5 shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{language === "en" ? "Agile Method:" : "Metodologia:"}</span>
                    </span>
                    <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-left sm:text-right">
                      {t.hero.safeRole}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="text-zinc-500 flex items-center gap-1.5 shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      <span>{language === "en" ? "Location:" : "Localização:"}</span>
                    </span>
                    <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-left sm:text-right">
                      {t.hero.location}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="text-zinc-500 flex items-center gap-1.5 shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{language === "en" ? "Trajectory:" : "Trajetória:"}</span>
                    </span>
                    <span className="text-blue-600 dark:text-cyan-400 font-semibold text-left sm:text-right">
                      {t.hero.experienceSummary}
                    </span>
                  </div>
                </div>

                {/* Bottom Card Action: Official CV Download */}
                <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80">
                  <a
                    href={profile.cv_url}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100/80 dark:bg-zinc-800/70 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white text-xs font-semibold transition-colors shadow-2xs"
                  >
                    <Download className="w-4 h-4 text-blue-500" />
                    <span>{t.hero.downloadCvCard}</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
