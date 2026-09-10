"use client";

import React, { useState } from "react";
import { ProfileSettings } from "@/types/database";
import { useLanguage } from "@/context/LanguageContext";
import { 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Code, 
  Sparkles, 
  ChevronDown, 
  CheckCircle2, 
  ChevronsUpDown,
  Building2
} from "lucide-react";

interface AboutSectionProps {
  profile: ProfileSettings;
}

export function AboutSection({ profile }: AboutSectionProps) {
  const { t, language } = useLanguage();

  // Initially expand the current active role (index 0)
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const milestones = t.about.milestones;
  const allExpanded = expandedItems.size === milestones.length;

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedItems(new Set([0])); // keep current role open
    } else {
      setExpandedItems(new Set(milestones.map((_, i) => i)));
    }
  };

  const getMilestoneIcon = (index: number) => {
    switch (index) {
      case 0:
        return Briefcase;
      case 1:
        return Sparkles;
      case 2:
        return Building2;
      case 3:
        return GraduationCap;
      case 4:
        return Code;
      case 5:
        return HeartHandshake;
      case 6:
      default:
        return Code;
    }
  };

  return (
    <section id="sobre" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/40 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
            {t.about.tag}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.about.title}
          </h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
            {language === "en" ? t.hero.headline : profile.bio}
          </p>
        </div>

        {/* Global Expand / Collapse Control */}
        <div className="flex justify-center sm:justify-end mb-8">
          <button
            onClick={toggleAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-xs hover:shadow transition-all duration-200"
          >
            <ChevronsUpDown className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span>{allExpanded ? t.about.collapseAll : t.about.expandAll}</span>
          </button>
        </div>

        {/* Career Timeline - Expandable List */}
        <div className="relative">
          {/* Vertical Timeline spine on desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-8 sm:space-y-10">
            {milestones.map((item, index) => {
              const Icon = getMilestoneIcon(index);
              const isEven = index % 2 === 0;
              const isExpanded = expandedItems.has(index);
              const isCurrent = Boolean(item.current);

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full lg:w-1/2 p-2 sm:p-4">
                    <div 
                      className={`p-6 rounded-2xl border transition-all duration-300 bg-white dark:bg-zinc-900 shadow-xs ${
                        isCurrent
                          ? "border-emerald-500/50 dark:border-emerald-500/40 ring-1 ring-emerald-500/20 shadow-emerald-500/5"
                          : isExpanded
                          ? "border-blue-500/40 dark:border-blue-500/40 ring-1 ring-blue-500/10"
                          : "border-zinc-200 dark:border-zinc-800 hover:border-blue-400/40 dark:hover:border-blue-500/40"
                      }`}
                    >
                      {/* Card Header */}
                      <div 
                        onClick={() => toggleItem(index)}
                        className="cursor-pointer select-none"
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2.5">
                          {/* Year Badge */}
                          <span className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded-md border ${
                            isCurrent
                              ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60"
                              : "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900/60"
                          }`}>
                            {item.year}
                          </span>

                          {/* Current Role Badge */}
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                              </span>
                              {t.about.currentRoleBadge}
                            </span>
                          )}

                          {/* Role tag if present */}
                          {item.role && (
                            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                              • {item.role}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                          {item.title}
                        </h4>

                        {/* Company / Client Subtitle */}
                        {item.company && (
                          <p className="text-xs font-medium text-blue-600 dark:text-cyan-400 mt-1">
                            {item.company}
                          </p>
                        )}

                        {/* Summary Description */}
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2.5">
                          {item.desc}
                        </p>
                      </div>

                      {/* Expandable Accordion Body */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-4 animate-in fade-in duration-200">
                          {/* Full detailed description if available */}
                          {item.fullDesc && (
                            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                              {item.fullDesc}
                            </p>
                          )}

                          {/* Key Responsibilities / Deliverables */}
                          {item.achievements && item.achievements.length > 0 && (
                            <div>
                              <h5 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                                {t.about.responsibilitiesTag}
                              </h5>
                              <ul className="space-y-1.5">
                                {item.achievements.map((ach, achIdx) => (
                                  <li key={achIdx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                                    <span>{ach}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Tech Stack Pills */}
                          {item.technologies && item.technologies.length > 0 && (
                            <div>
                              <h5 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                                {t.about.technologiesTag}
                              </h5>
                              <div className="flex flex-wrap gap-1.5">
                                {item.technologies.map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="px-2 py-0.5 text-[11px] rounded-md font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Expand / Collapse Button */}
                      <button
                        onClick={() => toggleItem(index)}
                        className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? t.about.hideDetails : t.about.viewDetails}</span>
                        <ChevronDown 
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`} 
                        />
                      </button>
                    </div>
                  </div>

                  {/* Desktop Center Timeline Node */}
                  <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white dark:border-zinc-950 items-center justify-center shadow-md ${
                    isCurrent
                      ? "bg-emerald-600 text-white ring-4 ring-emerald-500/20"
                      : "bg-blue-600 text-white"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
