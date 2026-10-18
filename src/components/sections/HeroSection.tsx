"use client";

import React, { useState, useEffect } from "react";
import { ProfileSettings } from "@/types/database";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowRight, 
  Download, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap, 
  Briefcase, 
  MapPin,
  Brain,
  Cpu,
  Globe
} from "lucide-react";
import { HeroConstellation } from "@/components/ui/HeroConstellation";
import { openCvSelectorModal } from "@/components/ui/CvSelectorModal";

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
    <section className="relative pt-24 pb-12 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Interactive Neural / Data Network Animation */}
      <HeroConstellation />

      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-cyan-400/15 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] sm:text-xs font-semibold mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{t.hero.availability}</span>
            </div>

            {/* Headline Title */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              {t.hero.greeting} <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                {profile.full_name}
              </span>
            </h1>

            {/* Dynamic Animated Role Headline */}
            <div className="h-6 sm:h-8 mt-2 sm:mt-3 mb-1 overflow-hidden flex items-center max-w-full">
              <span className="text-xs font-mono text-zinc-400 mr-1.5 sm:mr-2 select-none">&gt;</span>
              <span className={`text-[11px] sm:text-sm font-mono font-semibold text-blue-600 dark:text-cyan-400 transition-all duration-300 truncate ${
                fadeState ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
              }`}>
                {roles[currentRoleIndex]}
              </span>
              <span className="w-1.5 h-3.5 ml-1 bg-blue-600 dark:text-cyan-400 animate-pulse inline-block shrink-0" />
            </div>

            {/* Subtitle / Headline */}
            <p className="mt-2 sm:mt-3 text-xs sm:text-base lg:text-lg font-medium text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              {t.hero.headline}
            </p>

            {/* Action Buttons (Ver Projetos + WhatsApp Direto) */}
            <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>{t.hero.btnProjects}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a
                href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}?text=Olá%20Leonardo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3.5 text-xs sm:text-sm font-semibold rounded-xl sm:rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 shadow-xs hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                <span>{t.hero.btnWhatsapp}</span>
              </a>
            </div>
          </div>

          {/* Right Column: AI & Data Science Architecture Cockpit */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <div className="relative rounded-2xl sm:rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl p-4 sm:p-6 shadow-2xl transition-all duration-300">
                
                {/* Header of Cockpit */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono text-zinc-400 pl-1">{t.hero.aiHubTag}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{t.hero.aiHubStatus}</span>
                  </div>
                </div>

                {/* Identity & Avatar Presentation - Natural & Modern Blend */}
                <div className="my-3.5 sm:my-5 flex items-center gap-3 sm:gap-4">
                  <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 shadow-md shadow-cyan-500/15 shrink-0 group">
                    <div className="w-full h-full rounded-[14px] overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative">
                      {!imgError ? (
                        <>
                          <img
                            src={avatarSrc}
                            alt={profile.full_name}
                            onError={() => setImgError(true)}
                            className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-all duration-500 contrast-[1.03] saturate-[0.98]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/25 via-transparent to-cyan-400/10 pointer-events-none mix-blend-overlay" />
                          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/15 rounded-[14px] pointer-events-none" />
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">
                          LI
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] font-mono font-semibold mb-1">
                      <span>{t.hero.aiHubRole}</span>
                    </div>
                    <h2 className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-white tracking-tight truncate">
                      {profile.full_name}
                    </h2>
                    <div className="mt-1 space-y-0.5 text-[10px] sm:text-[11px] font-mono text-zinc-600 dark:text-zinc-300">
                      <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="truncate font-semibold">{t.hero.aiHubAffiliationLine1}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{t.hero.aiHubAffiliationLine2}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Core Telemetry Pillars: Data Science, AI & Critical Engineering */}
                <div className="space-y-2 sm:space-y-2.5">
                  
                  {/* Pilar 1: Ciência de Dados & Machine Learning */}
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-cyan-50/70 via-blue-50/40 to-transparent dark:from-cyan-950/40 dark:via-blue-950/25 dark:to-transparent border border-cyan-200/60 dark:border-cyan-800/40 hover:border-cyan-400/60 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-0.5 sm:mb-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-lg bg-cyan-500 text-white shadow-xs">
                          <Brain className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </span>
                        <h4 className="text-[11px] sm:text-xs font-bold text-zinc-900 dark:text-zinc-100">
                          {t.hero.pillarDataTitle}
                        </h4>
                      </div>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-zinc-600 dark:text-zinc-300 font-mono pl-6 sm:pl-7 leading-relaxed">
                      {t.hero.pillarDataDesc}
                    </p>
                  </div>

                  {/* Pilar 2: IA Generativa, Agentes & Automação */}
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-indigo-50/70 via-purple-50/40 to-transparent dark:from-indigo-950/40 dark:via-purple-950/20 dark:to-transparent border border-indigo-200/60 dark:border-indigo-800/40 hover:border-indigo-400/60 transition-colors">
                    <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                      <span className="p-1 rounded-lg bg-indigo-600 text-white shadow-xs">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </span>
                      <h4 className="text-[11px] sm:text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {t.hero.pillarAiTitle}
                      </h4>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-zinc-600 dark:text-zinc-300 font-mono pl-6 sm:pl-7 leading-relaxed">
                      {t.hero.pillarAiDesc}
                    </p>
                  </div>

                  {/* Pilar 3: Sistemas Críticos & Nuvem */}
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-teal-50/40 to-transparent dark:from-emerald-950/40 dark:via-teal-950/20 dark:to-transparent border border-emerald-200/60 dark:border-emerald-900/40 hover:border-emerald-400/60 transition-colors">
                    <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                      <span className="p-1 rounded-lg bg-emerald-600 text-white shadow-xs">
                        <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </span>
                      <h4 className="text-[11px] sm:text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {t.hero.pillarEngTitle}
                      </h4>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-zinc-600 dark:text-zinc-300 font-mono pl-6 sm:pl-7 leading-relaxed">
                      {t.hero.pillarEngDesc}
                    </p>
                  </div>
                </div>

                {/* Footer Badges: 25 Anos em TI, UFOP, SAFe Governança, Inglês B1/B2 & Localização (Left Aligned) */}
                <div className="mt-3.5 sm:mt-4 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center justify-start gap-1.5 sm:gap-2 text-[10px] font-mono text-zinc-500">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>{t.hero.experienceYears}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    <GraduationCap className="w-3 h-3 text-blue-500" />
                    <span>UFOP (BCC & Pós)</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    <ShieldCheck className="w-3 h-3 text-emerald-500" />
                    <span>{t.hero.safeBadge}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    <Globe className="w-3 h-3 text-cyan-500" />
                    <span>{t.hero.englishBadge || "Inglês: B1/B2"}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    <span>{t.hero.location}</span>
                  </span>
                </div>

                {/* Bottom Action: Download CV Selector (Restored in Cockpit Card Footer) */}
                <div className="mt-3 sm:mt-3.5">
                  <button
                    type="button"
                    onClick={() => openCvSelectorModal()}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100/80 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-750 text-zinc-900 dark:text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" />
                    <span>{t.hero.downloadCvCard}</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
