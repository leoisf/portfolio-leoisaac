"use client";

import React, { useState } from "react";
import { Skill } from "@/types/database";
import { useLanguage } from "@/context/LanguageContext";
import { Cpu, Layers, Database, GitMerge, ShieldCheck, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

interface SkillsSectionProps {
  skills: Skill[];
}

const INITIAL_SKILL_COUNT = 8;

export function SkillsSection({ skills }: SkillsSectionProps) {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { key: "all", label: t.skills.categories.all, filter: "Todas" },
    { key: "data", label: t.skills.categories.data, filter: "Data Science & IA" },
    { key: "agile", label: t.skills.categories.agile, filter: "Agile / Gestão" },
    { key: "backend", label: t.skills.categories.backend, filter: "Backend" },
    { key: "database", label: t.skills.categories.database, filter: "Database" },
    { key: "frontend", label: t.skills.categories.frontend, filter: "Frontend" },
    { key: "devops", label: t.skills.categories.devops, filter: "DevOps / Infra" }
  ];

  const handleCategoryChange = (key: string) => {
    setSelectedCategory(key);
    setShowAll(false);
  };

  const activeFilter = categories.find(c => c.key === selectedCategory)?.filter || "Todas";

  const filteredSkills = activeFilter === "Todas"
    ? skills
    : skills.filter((s) => s.category === activeFilter);

  const displayedSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_SKILL_COUNT);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Data Science & IA": return Sparkles;
      case "Frontend": return Layers;
      case "Backend": return Cpu;
      case "Database": return Database;
      case "Agile / Gestão": return ShieldCheck;
      default: return GitMerge;
    }
  };

  return (
    <section id="habilidades" className="py-12 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-1.5 sm:mb-2">
          {t.skills.tag}
        </h2>
        <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          {t.skills.title}
        </h3>
        <p className="mt-2 sm:mt-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm">
          {t.skills.subtitle}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer ${
              selectedCategory === cat.key
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Mobile: Compact List View (1 column rows) | Desktop: Multi-column Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3.5">
        {displayedSkills.map((skill) => {
          const Icon = getCategoryIcon(skill.category);
          return (
            <div
              key={skill.id}
              className="px-3.5 py-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-850 hover:border-blue-500/40 dark:hover:border-blue-500/40 sm:hover:-translate-y-1 transition-all duration-200 flex flex-row sm:flex-col items-center sm:items-stretch justify-between gap-3 sm:gap-0 group shadow-2xs"
            >
              <div className="flex items-center gap-2.5 sm:justify-between sm:mb-3 min-w-0">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
                <h4 className="sm:hidden text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                  {skill.name}
                </h4>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                  {skill.category.split(" ")[0]}
                </span>
              </div>
              <h4 className="hidden sm:block text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h4>
              <span className="sm:hidden text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 shrink-0">
                {skill.category.split(" ")[0]}
              </span>
            </div>
          );
        })}
      </div>

      {/* Show More / Show Less Button */}
      {filteredSkills.length > INITIAL_SKILL_COUNT && (
        <div className="mt-6 sm:mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-2xs cursor-pointer"
          >
            <span>
              {showAll
                ? (language === "en" ? "Show Less" : "Mostrar Menos")
                : (language === "en"
                    ? `View All Skills (${filteredSkills.length})`
                    : `Ver Todas as Habilidades (${filteredSkills.length})`)}
            </span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}
    </section>
  );
}
