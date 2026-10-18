"use client";

import React, { useState } from "react";
import { SocialInitiative } from "@/types/database";
import { useLanguage } from "@/context/LanguageContext";
import { HeartHandshake, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

interface SocialSectionProps {
  initiatives: SocialInitiative[];
}

export function SocialSection({ initiatives }: SocialSectionProps) {
  const { t, language } = useLanguage();
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="social" className="py-12 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] sm:text-xs font-semibold mb-2.5 sm:mb-3">
          <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>{t.social.badge}</span>
        </div>
        <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          {t.social.title}
        </h3>
        <p className="mt-2 sm:mt-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-base leading-relaxed">
          {t.social.subtitle}
        </p>
      </div>

      {/* Initiatives Cards (Compact List on Mobile, Full Card on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        {initiatives.map((item) => {
          const isExpanded = expandedIds.has(item.id);
          return (
            <div
              key={item.id}
              className="rounded-2xl sm:rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 sm:p-8 shadow-xs hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-6">
                  <span className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-bold font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    {item.impact_metric}
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-500 font-mono">
                    {item.period}
                  </span>
                </div>

                <h4 className="text-base sm:text-2xl font-bold text-zinc-900 dark:text-white mb-1 sm:mb-2">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs font-mono text-blue-600 dark:text-cyan-400 mb-2.5 sm:mb-4">
                  {item.role}
                </p>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 sm:mb-6">
                  {item.description}
                </p>

                {/* Mobile Expand Button for Achievements */}
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className="sm:hidden inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-2 cursor-pointer"
                >
                  <span>
                    {isExpanded
                      ? (language === "en" ? "Hide Achievements" : "Ocultar Realizações")
                      : (language === "en" ? "View Achievements" : "Ver Realizações")}
                  </span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <div className={`${isExpanded ? "block" : "hidden sm:block"} space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-zinc-100 dark:border-zinc-800`}>
                  <h5 className="text-[10px] sm:text-xs font-mono uppercase text-zinc-400 mb-1.5 sm:mb-2">
                    {t.social.highlights}
                  </h5>
                  {item.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {item.image_url && (
                <div className={`${isExpanded ? "block" : "hidden sm:block"} mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-zinc-100 dark:border-zinc-800`}>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden h-36 sm:h-40 border border-zinc-200 dark:border-zinc-800">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
