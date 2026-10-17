"use client";

import React, { useState } from "react";
import { Project } from "@/types/database";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/context/LanguageContext";
import { GithubIcon } from "@/components/icons";
import { 
  ExternalLink, 
  Sparkles, 
  FolderGit2, 
  GitBranch, 
  Terminal, 
  Copy, 
  Check, 
  HeartHandshake, 
  CheckCircle2, 
  Layers 
} from "lucide-react";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { key: "all", label: t.projects.categories.all },
    { key: "github", label: t.projects.categories.github },
    { key: "data_ai", label: t.projects.categories.data_ai },
    { key: "fullstack", label: t.projects.categories.fullstack },
    { key: "social", label: t.projects.categories.social }
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "github") {
      return project.repo_type === "public" || Boolean(project.github_url);
    }
    if (activeCategory === "data_ai") {
      return project.category === "Data & IA";
    }
    if (activeCategory === "fullstack") {
      return project.category === "Full Stack" || project.category === "Backend" || project.category === "Frontend";
    }
    if (activeCategory === "social") {
      return project.category === "Social / Inclusão" || project.repo_type === "social";
    }
    return true;
  });

  const handleCopyClone = (e: React.MouseEvent, id: string, repoUrl: string) => {
    e.stopPropagation();
    const command = `git clone ${repoUrl}.git`;
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const getLanguageColor = (lang?: string) => {
    if (!lang) return "bg-zinc-400";
    const lower = lang.toLowerCase();
    if (lower.includes("python")) return "bg-amber-400";
    if (lower.includes("typescript")) return "bg-blue-500";
    if (lower.includes("dart") || lower.includes("flutter")) return "bg-cyan-400";
    if (lower.includes("java") || lower.includes("kotlin")) return "bg-orange-500";
    if (lower.includes("linux") || lower.includes("ltsp")) return "bg-emerald-500";
    if (lower.includes("hardware") || lower.includes("redes")) return "bg-violet-500";
    if (lower.includes("salesforce") || lower.includes("safe")) return "bg-sky-500";
    return "bg-blue-400";
  };

  return (
    <section id="projetos" className="py-24 bg-zinc-50/70 dark:bg-zinc-950/60 border-y border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{t.projects.tag}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              {t.projects.title}
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm max-w-2xl leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
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

        {/* GitHub Developer Terminal Bar */}
        <div className="mb-10 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white dark:bg-zinc-800 flex items-center justify-center shrink-0 shadow-xs">
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white">
                  leoisf
                </span>
                <span className="text-xs font-mono text-zinc-400">/</span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  repositories
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                {t.projects.terminalStatus}
              </p>
            </div>
          </div>

          <a
            href="https://github.com/leoisf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-800 dark:text-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors shadow-xs"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>{t.projects.gitHubProfileCta}</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isPublicGit = project.repo_type === "public" || Boolean(project.github_url);
            const isSocial = project.category === "Social / Inclusão" || project.repo_type === "social";
            const repoSlug = project.repo_name || `leoisf/${project.slug}`;

            return (
              <div
                key={project.id}
                className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Repo Header Bar */}
                  <div className="px-6 py-4 border-b border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      {isSocial ? (
                        <HeartHandshake className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : isPublicGit ? (
                        <FolderGit2 className="w-4 h-4 text-blue-500 shrink-0" />
                      ) : (
                        <Layers className="w-4 h-4 text-purple-500 shrink-0" />
                      )}
                      
                      <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                        {repoSlug}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.default_branch && (
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                          <GitBranch className="w-3 h-3 text-zinc-400" />
                          <span>{project.default_branch}</span>
                        </div>
                      )}

                      <span 
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold ${
                          isSocial
                            ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                            : isPublicGit
                            ? "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                            : "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                        }`}
                      >
                        {isSocial
                          ? t.projects.badges.social
                          : isPublicGit
                          ? t.projects.badges.public
                          : t.projects.badges.enterprise}
                      </span>
                    </div>
                  </div>

                  {/* Optional Image Banner */}
                  {project.image_url && (
                    <div 
                      className="relative h-44 sm:h-52 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 cursor-pointer border-b border-zinc-100 dark:border-zinc-800/80"
                      onClick={() => setActiveProject(project)}
                    >
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-900/85 text-white backdrop-blur-md border border-white/10 shadow-xs">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Main Body */}
                  <div className="p-6 sm:p-7">
                    <h4 
                      onClick={() => setActiveProject(project)}
                      className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h4>

                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.short_description}
                    </p>

                    {/* Key Technical Highlights (Enriched Emphasis) */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                          {t.projects.highlights}
                        </p>
                        <div className="space-y-1.5">
                          {project.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies & Language Indicator */}
                    <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-wrap items-center gap-2">
                      {project.primary_language && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                          <span className={`w-2 h-2 rounded-full ${getLanguageColor(project.primary_language)}`} />
                          <span>{project.primary_language}</span>
                        </div>
                      )}

                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100/70 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 sm:px-7 py-4 bg-zinc-50/70 dark:bg-zinc-900/60 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t.projects.viewDetails}</span>
                    </button>

                    {/* Quick Git Clone Copy Button for Public Repos */}
                    {project.github_url && (
                      <button
                        onClick={(e) => handleCopyClone(e, project.id, project.github_url!)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-200/60 dark:bg-zinc-800 hover:bg-zinc-300/60 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
                        title={t.projects.copyClone}
                      >
                        {copiedId === project.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                              {t.projects.copied}
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-zinc-400" />
                            <span>git clone</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.clipping_anchor && (
                      <a
                        href={project.clipping_anchor}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <HeartHandshake className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{t.projects.viewClipping}</span>
                      </a>
                    )}

                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold transition-colors"
                        title="Ver Código no GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors"
                        title="Acessar projeto online"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Project Details */}
        <Modal
          isOpen={Boolean(activeProject)}
          onClose={() => setActiveProject(null)}
          title={activeProject?.title}
        >
          {activeProject && (
            <div className="space-y-6">
              {/* Image banner in modal if exists */}
              {activeProject.image_url && (
                <div className="rounded-2xl overflow-hidden max-h-72 border border-zinc-200 dark:border-zinc-800">
                  <img
                    src={activeProject.image_url}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Repo meta bar in modal */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700/60 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-blue-500" />
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {activeProject.repo_name || `leoisf/${activeProject.slug}`}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {activeProject.default_branch && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300">
                      <GitBranch className="w-3 h-3 text-zinc-400" />
                      {activeProject.default_branch}
                    </span>
                  )}

                  <span className="px-2.5 py-0.5 rounded-full font-semibold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                    {activeProject.category}
                  </span>
                </div>
              </div>

              {/* About description */}
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
                  {t.projects.aboutProject}
                </h5>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {activeProject.full_description || activeProject.short_description}
                </p>
              </div>

              {/* Key Technical Highlights in Modal */}
              {activeProject.highlights && activeProject.highlights.length > 0 && (
                <div>
                  <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                    {t.projects.highlights}
                  </h5>
                  <div className="space-y-2">
                    {activeProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies used */}
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

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {activeProject.live_url && (
                  <a
                    href={activeProject.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>{t.projects.githubRepo}</span>
                  </a>
                )}

                {activeProject.clipping_anchor && (
                  <a
                    href={activeProject.clipping_anchor}
                    onClick={() => setActiveProject(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
                  >
                    <HeartHandshake className="w-3.5 h-3.5" />
                    <span>{t.projects.viewClipping}</span>
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
