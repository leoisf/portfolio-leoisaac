"use client";

import React, { useState } from "react";
import { Project } from "@/types/database";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/context/LanguageContext";
import { GithubIcon } from "@/components/icons";
import { ExternalLink, Sparkles, FolderGit2 } from "lucide-react";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { key: "all", label: t.projects.categories.all, filter: "Todos" },
    { key: "data_ai", label: t.projects.categories.data_ai, filter: "Data & IA" },
    { key: "fullstack", label: t.projects.categories.fullstack, filter: "Full Stack" },
    { key: "social", label: t.projects.categories.social, filter: "Social / Inclusão" }
  ];

  const activeFilter = categories.find(c => c.key === activeCategory)?.filter || "Todos";

  const filteredProjects = activeFilter === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projetos" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/40 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
              {t.projects.tag}
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              {t.projects.title}
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  activeCategory === cat.key
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Banner */}
              <div 
                className="relative h-52 sm:h-60 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                {project.image_url ? (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-400">
                    <FolderGit2 className="w-12 h-12 stroke-[1.5]" />
                  </div>
                )}
                
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-900/80 text-white backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h4 
                    onClick={() => setActiveProject(project)}
                    className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h4>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.short_description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg text-xs font-mono text-zinc-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {t.projects.viewDetails}
                    </button>

                    <div className="flex items-center gap-2">
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
                          title="Repositório GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-xs transition-colors"
                          title="Acessar projeto"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Project Details */}
        <Modal
          isOpen={Boolean(activeProject)}
          onClose={() => setActiveProject(null)}
          title={activeProject?.title}
        >
          {activeProject && (
            <div className="space-y-6">
              {activeProject.image_url && (
                <div className="rounded-2xl overflow-hidden max-h-80 border border-zinc-200 dark:border-zinc-800">
                  <img
                    src={activeProject.image_url}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-1">
                  {t.projects.aboutProject}
                </h5>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {activeProject.full_description || activeProject.short_description}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  {t.projects.techUsed}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {activeProject.live_url && (
                  <a
                    href={activeProject.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500"
                  >
                    <span>{t.projects.liveProject}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProject.github_url && (
                  <a
                    href={activeProject.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{t.projects.githubRepo}</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
}
