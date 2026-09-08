"use client";

import React, { useState } from "react";
import { initialProjects } from "@/data/initialData";
import { Project } from "@/types/database";
import { Plus, Trash2, Edit2, ExternalLink, Image as ImageIcon, Check } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export default function AdminProjetosPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    technologies: "",
    category: "Full Stack" as const,
    image_url: "",
    live_url: "",
    github_url: "",
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = {
      id: "proj-" + Date.now(),
      title: formData.title,
      slug: formData.title.toLowerCase().replace(/\s+/g, "-"),
      short_description: formData.short_description,
      technologies: formData.technologies.split(",").map(t => t.trim()).filter(Boolean),
      category: formData.category,
      image_url: formData.image_url || "/images/projects/system.jpg",
      live_url: formData.live_url,
      github_url: formData.github_url,
      is_featured: true,
      display_order: projects.length + 1,
    };

    setProjects([newProject, ...projects]);
    setIsModalOpen(false);
    setFormData({
      title: "",
      short_description: "",
      technologies: "",
      category: "Full Stack",
      image_url: "",
      live_url: "",
      github_url: "",
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja remover este projeto?")) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Gerenciador de Projetos
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Cadastre, edite e remova os projetos exibidos no portfólio.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Projeto</span>
        </button>
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
                          {proj.short_description}
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
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(proj.id)}
                      className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                      title="Excluir"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: New Project */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Novo Projeto">
        <form onSubmit={handleCreate} className="space-y-4">
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Categoria</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              >
                <option value="Full Stack">Full Stack</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Social / Inclusão">Social / Inclusão</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Tecnologias (separadas por vírgula)</label>
              <input
                type="text"
                value={formData.technologies}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                placeholder="React, Next.js, Node, Supabase"
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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

          <div className="pt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500"
            >
              Salvar Projeto
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
