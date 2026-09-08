"use client";

import React, { useState } from "react";
import { Skill } from "@/types/database";
import { Cpu, Layers, Database, GitMerge, ShieldCheck } from "lucide-react";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const categories = [
    "Todas",
    "Frontend",
    "Backend",
    "Database",
    "Agile / Gestão",
    "DevOps / Infra"
  ];

  const filteredSkills = selectedCategory === "Todas"
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend": return Layers;
      case "Backend": return Cpu;
      case "Database": return Database;
      case "Agile / Gestão": return ShieldCheck;
      default: return GitMerge;
    }
  };

  return (
    <section id="habilidades" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
          // Competências & Tecnologias
        </h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Stack Tecnológica & Metodologias
        </h3>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm">
          Ferramentas modernas, linguagens de programação e práticas ágeis utilizadas no dia a dia.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
        {filteredSkills.map((skill) => {
          const Icon = getCategoryIcon(skill.category);
          return (
            <div
              key={skill.id}
              className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-850 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group shadow-2xs"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                  {skill.category.split(" ")[0]}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
