"use client";

import React, { useState, useEffect } from "react";
import { initialProjects } from "@/data/initialData";
import { Project } from "@/types/database";
import { Plus, Trash2, Edit2, ExternalLink, Image as ImageIcon, Check, RotateCcw, FolderGit2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { 
  getProjects, 
  saveProject, 
  updateProject, 
  deleteProject, 
  resetProjectsToDefault, 
  isSupabaseConfigured 
} from "@/lib/supabase/client";

export default function AdminProjetosPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    technologies: "",
    category: "Full Stack" as Project["category"],
    image_url: "",
    live_url: "",
    github_url: "",
    repo_name: "",
    primary_language: "",
    highlights: ""
  });

  const loadData = async () => {
    try {
      const data = await getProjects();
      if (data && data.length > 0) setProjects(data);
    } catch (err) {
      console.error("Erro ao carregar projetos:", err);
    }
  };

  useEffect(() => {
    loadData();
    window.addEventListener("portfolio_data_changed", loadData);
    return () => window.removeEventListener("portfolio_data_changed", loadData);
  }, []);

  const openCreateModal = () => {
    setEditingProject(null);
    setFormData({
      title: "",
      short_description: "",
      technologies: "",
      category: "Full Stack",
      image_url: "",
      live_url: "",
      github_url: "",
      repo_name: "",
      primary_language: "",
      highlights: ""
    });
    setIsModalOpen(true);
  };

  const openEditModal = (proj: Project) => {
    setEditingProject(proj);
    setFormData({
      title: proj.title,
      short_description: proj.short_description,
      technologies: proj.technologies.join(", "),
      category: proj.category,
      image_url: proj.image_url || "",
      live_url: proj.live_url || "",
      github_url: proj.github_url || "",
      repo_name: proj.repo_name || "",
      primary_language: proj.primary_language || "",
      highlights: (proj.highlights || []).join("\n")
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const techArray = formData.technologies
      .split(",")
      .map(t => t.trim())
      .filter(Boolean);

    const highlightsArray = formData.highlights
      .split("\n")
      .map(h => h.trim())
      .filter(Boolean);

    if (editingProject) {
      const updated: Project = {
        ...editingProject,
        title: formData.title,
        short_description: formData.short_description,
        technologies: techArray,
        category: formData.category,
        image_url: formData.image_url || "/images/projects/system.jpg",
        live_url: formData.live_url || undefined,
        github_url: formData.github_url || undefined,
        repo_name: formData.repo_name || undefined,
        primary_language: formData.primary_language || undefined,
        highlights: highlightsArray.length > 0 ? highlightsArray : undefined
      };
      await updateProject(updated);
    } else {
      const newProject: Project = {
        id: "proj-" + Date.now(),
        title: formData.title,
        slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        short_description: formData.short_description,
        technologies: techArray,
        category: formData.category,
        image_url: formData.image_url || "/images/projects/system.jpg",
        live_url: formData.live_url || undefined,
        github_url: formData.github_url || undefined,
        repo_name: formData.repo_name || undefined,
        primary_language: formData.primary_language || undefined,
        highlights: highlightsArray.length > 0 ? highlightsArray : undefined,
        is_featured: true,
        display_order: projects.length + 1,
      };
      await saveProject(newProject);
    }

    setIsModalOpen(false);
    await loadData();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Tem certeza que deseja remover este projeto?")) {
      await deleteProject(id);
      await loadData();
    }
  };

  const handleReset = () => {
    if (confirm("Restaurar lista original de projetos de fábrica? Todas as modificações locais serão reiniciadas.")) {
      resetProjectsToDefault();
      setProjects(initialProjects);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Gerenciador de Projetos
            </h1>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
              isSupabaseConfigured 
                ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                : "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
            }`}>
              {isSupabaseConfigured ? "Supabase Cloud" : "LocalStorage Dinâmico"}
            </span>
          </div>
          <p className="text-xs text-zinc-500">
            Cadastre, edite e remova os projetos exibidos no portfólio. As alterações refletem instantaneamente no site.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Restaurar dados iniciais"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Restaurar Padrão</span>
          </button>

          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Cadastrar Projeto</span>
          </button>
        </div>
      </div>

      {/* Projects Table */}
      <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 text-zinc-500 font-mono">
              <tr>
                <th className="px-6 py-4">Projeto</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4">Tecnologias</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {projects.map((proj) => (
                <tr key={proj.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
                        {proj.image_url ? (
                          <img src={proj.image_url} alt={proj.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-400">
                            <ImageIcon className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="font-bold text-zinc-900 dark:text-white block">
                          {proj.title}
                        </span>
                        <span className="text-zinc-500 line-clamp-1 max-w-xs">
                          {proj.repo_name || proj.short_description}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-md font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {proj.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {proj.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300">
                          {t}
                        </span>
                      ))}
                      {proj.technologies.length > 3 && (
                        <span className="text-[10px] font-mono text-zinc-400">+{proj.technologies.length - 3}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEditModal(proj)}
                        className="p-1.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                        title="Editar Projeto"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(proj.id)}
                        className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                        title="Excluir Projeto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: New / Edit Project */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingProject ? "Editar Projeto" : "Novo Projeto"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Título do Projeto</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Ex: Plataforma de Inclusão Digital"
              className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Descrição Curta</label>
            <textarea
              required
              rows={3}
              value={formData.short_description}
              onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
              placeholder="Resumo das funcionalidades e impacto gerado..."
              className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Categoria</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              >
                <option value="Data & IA">Data & IA</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Social / Inclusão">Social / Inclusão</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Tecnologias (vírgula)</label>
              <input
                type="text"
                value={formData.technologies}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                placeholder="React, Next.js, Node, Supabase"
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Repositório Git (ex: leoisf/meu-repo)</label>
              <input
                type="text"
                value={formData.repo_name}
                onChange={(e) => setFormData({ ...formData, repo_name: e.target.value })}
                placeholder="leoisf/meu-projeto"
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Linguagem Primária</label>
              <input
                type="text"
                value={formData.primary_language}
                onChange={(e) => setFormData({ ...formData, primary_language: e.target.value })}
                placeholder="TypeScript, Python, Java, etc."
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Link do GitHub (opcional)</label>
              <input
                type="url"
                value={formData.github_url}
                onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
                placeholder="https://github.com/..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Link do Demo / Site (opcional)</label>
              <input
                type="url"
                value={formData.live_url}
                onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
                placeholder="https://..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
              Destaques Técnicos (um por linha)
            </label>
            <textarea
              rows={3}
              value={formData.highlights}
              onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
              placeholder="Arquitetura Jamstack com alta performance&#10;Integração de APIs de Machine Learning&#10;Deploy automatizado na Cloudflare"
              className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="pt-4 flex justify-end gap-2 border-t border-zinc-200 dark:border-zinc-800">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
            >
              {editingProject ? "Salvar Alterações" : "Cadastrar Projeto"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
