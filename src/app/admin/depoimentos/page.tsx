"use client";

import React, { useState, useEffect } from "react";
import { initialTestimonials } from "@/data/initialData";
import { Testimonial } from "@/types/database";
import { 
  Plus, 
  Trash2, 
  Edit2, 
  Check, 
  RotateCcw, 
  MessageSquareQuote, 
  Star, 
  Eye, 
  EyeOff 
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import {
  getAllTestimonials,
  submitTestimonial,
  updateTestimonial,
  deleteTestimonial,
  resetTestimonialsToDefault,
  isSupabaseConfigured
} from "@/lib/supabase/client";

export default function AdminDepoimentosPage() {
  const [items, setItems] = useState<Testimonial[]>(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    relationship: "Colega de Equipe" as Testimonial["relationship"],
    rating: 5,
    linkedin_url: "",
    message: "",
    is_approved: true
  });

  const loadData = async () => {
    try {
      const data = await getAllTestimonials();
      if (data) setItems(data);
    } catch (err) {
      console.error("Erro ao carregar depoimentos:", err);
    }
  };

  useEffect(() => {
    loadData();
    window.addEventListener("portfolio_data_changed", loadData);
    return () => window.removeEventListener("portfolio_data_changed", loadData);
  }, []);

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      role: "",
      company: "",
      relationship: "Colega de Equipe",
      rating: 5,
      linkedin_url: "",
      message: "",
      is_approved: true
    });
    setIsModalOpen(true);
  };

  const openEditModal = (item: Testimonial) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      role: item.role,
      company: item.company || "",
      relationship: item.relationship,
      rating: item.rating || 5,
      linkedin_url: item.linkedin_url || "",
      message: item.message,
      is_approved: item.is_approved
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const payload: Testimonial = {
      id: editingItem ? editingItem.id : `test-${Date.now()}`,
      name: formData.name.trim(),
      role: formData.role.trim() || "Profissional",
      company: formData.company.trim() || undefined,
      relationship: formData.relationship,
      rating: Number(formData.rating) || 5,
      linkedin_url: formData.linkedin_url.trim() || undefined,
      message: formData.message.trim(),
      is_approved: formData.is_approved,
      created_at: editingItem ? editingItem.created_at : new Date().toISOString().split("T")[0]
    };

    if (editingItem) {
      await updateTestimonial(payload);
    } else {
      await submitTestimonial(payload);
    }

    await loadData();
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleToggleApproval = async (item: Testimonial) => {
    await updateTestimonial({
      ...item,
      is_approved: !item.is_approved
    });
    await loadData();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta mensagem/depoimento?")) {
      await deleteTestimonial(id);
      await loadData();
    }
  };

  const handleReset = async () => {
    if (confirm("Deseja restaurar os depoimentos originais de fábrica?")) {
      resetTestimonialsToDefault();
      await loadData();
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Gerenciar Depoimentos & Mensagens
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Modere, aprove, edite ou adicione recomendações deixadas por visitantes no site.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Restaurar dados originais"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Padrão</span>
          </button>

          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Novo Depoimento</span>
          </button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-300">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>
            {isSupabaseConfigured
              ? "Sincronizado com Supabase PostgreSQL em tempo real."
              : "Modo Dinâmico Ativo: Alterações e mensagens são salvas e refletidas instantaneamente na página inicial."}
          </span>
        </div>
        <span className="font-mono font-bold">{items.length} registros</span>
      </div>

      {/* Table */}
      <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 text-[11px] font-mono uppercase text-zinc-400 bg-zinc-50/50 dark:bg-zinc-950/50">
                <th className="py-3.5 px-6">Autor & Cargo</th>
                <th className="py-3.5 px-6">Mensagem</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-xs">
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                        <MessageSquareQuote className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-zinc-900 dark:text-white">{item.name}</p>
                        <p className="text-zinc-500 text-[11px]">
                          {item.role} {item.company ? `• ${item.company}` : ""}
                        </p>
                        <div className="flex items-center gap-0.5 mt-1">
                          {Array.from({ length: item.rating || 5 }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-6 max-w-md">
                    <p className="text-zinc-600 dark:text-zinc-300 line-clamp-2 italic">
                      &ldquo;{item.message}&rdquo;
                    </p>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                      {item.relationship}
                    </span>
                  </td>

                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleToggleApproval(item)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold cursor-pointer transition-colors ${
                        item.is_approved
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                      }`}
                      title="Clique para aprovar ou ocultar da página inicial"
                    >
                      {item.is_approved ? (
                        <>
                          <Eye className="w-3 h-3" />
                          <span>Visível</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3 h-3" />
                          <span>Oculto</span>
                        </>
                      )}
                    </button>
                  </td>

                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => openEditModal(item)}
                        className="p-2 rounded-lg text-zinc-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors cursor-pointer"
                        title="Editar"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 rounded-lg text-zinc-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors cursor-pointer"
                        title="Excluir"
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

      {/* Create / Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingItem ? "Editar Depoimento" : "Novo Depoimento"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                Nome do Autor *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                Cargo / Papel *
              </label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                Empresa / Instituição
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                Relação Profissional
              </label>
              <select
                value={formData.relationship}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    relationship: e.target.value as Testimonial["relationship"]
                  })
                }
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              >
                <option value="Colega de Equipe">Colega de Equipe</option>
                <option value="Liderança / Gestão">Liderança / Gestão</option>
                <option value="Cliente / Parceiro">Cliente / Parceiro</option>
                <option value="Comunidade / Acadêmico">Comunidade / Acadêmico</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
              Mensagem / Recomendação *
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_approved"
              checked={formData.is_approved}
              onChange={(e) => setFormData({ ...formData, is_approved: e.target.checked })}
              className="rounded border-zinc-300"
            />
            <label htmlFor="is_approved" className="text-xs text-zinc-700 dark:text-zinc-300">
              Visível publicamente na página inicial
            </label>
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500"
            >
              {editingItem ? "Salvar Alterações" : "Adicionar Depoimento"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
