"use client";

import React, { useState, useEffect } from "react";
import { initialCertificates } from "@/data/initialData";
import { Certificate } from "@/types/database";
import { Plus, Trash2, Edit2, Award, RotateCcw } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { 
  getCertificates, 
  saveCertificate, 
  updateCertificate, 
  deleteCertificate, 
  resetCertificatesToDefault, 
  isSupabaseConfigured 
} from "@/lib/supabase/client";

export default function AdminCertificadosPage() {
  const [certs, setCerts] = useState<Certificate[]>(initialCertificates);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCert, setEditingCert] = useState<Certificate | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    category: "Metodologias Ágeis" as Certificate["category"],
    issue_date: "",
    image_url: "",
    hours: "",
    credential_url: ""
  });

  const loadData = async () => {
    try {
      const data = await getCertificates();
      if (data && data.length > 0) setCerts(data);
    } catch (err) {
      console.error("Erro ao carregar certificados:", err);
    }
  };

  useEffect(() => {
    loadData();
    window.addEventListener("portfolio_data_changed", loadData);
    return () => window.removeEventListener("portfolio_data_changed", loadData);
  }, []);

  const openCreateModal = () => {
    setEditingCert(null);
    setFormData({
      title: "",
      issuer: "",
      category: "Metodologias Ágeis",
      issue_date: "",
      image_url: "",
      hours: "",
      credential_url: ""
    });
    setIsModalOpen(true);
  };

  const openEditModal = (cert: Certificate) => {
    setEditingCert(cert);
    setFormData({
      title: cert.title,
      issuer: cert.issuer,
      category: cert.category,
      issue_date: cert.issue_date || "",
      image_url: cert.image_url || "",
      hours: cert.hours ? String(cert.hours) : "",
      credential_url: cert.credential_url || ""
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingCert) {
      const updated: Certificate = {
        ...editingCert,
        title: formData.title,
        issuer: formData.issuer,
        category: formData.category,
        issue_date: formData.issue_date || undefined,
        image_url: formData.image_url || "/images/certificates/01.png",
        hours: formData.hours ? Number(formData.hours) : undefined,
        credential_url: formData.credential_url || undefined
      };
      await updateCertificate(updated);
    } else {
      const newCert: Certificate = {
        id: "cert-" + Date.now(),
        title: formData.title,
        issuer: formData.issuer,
        category: formData.category,
        issue_date: formData.issue_date || undefined,
        image_url: formData.image_url || "/images/certificates/01.png",
        hours: formData.hours ? Number(formData.hours) : undefined,
        credential_url: formData.credential_url || undefined,
        display_order: certs.length + 1,
      };
      await saveCertificate(newCert);
    }

    setIsModalOpen(false);
    await loadData();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Remover este certificado?")) {
      await deleteCertificate(id);
      await loadData();
    }
  };

  const handleReset = () => {
    if (confirm("Restaurar lista original de certificados? Todas as alterações locais serão resetadas.")) {
      resetCertificatesToDefault();
      setCerts(initialCertificates);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Gerenciador de Certificados
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
            Cadastre e atualize suas formações, cursos e certificações profissionais com reflexo imediato no site.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Restaurar certificados de fábrica"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Restaurar Padrão</span>
          </button>

          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Cadastrar Certificado</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certs.map((c) => (
          <div
            key={c.id}
            className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between group shadow-2xs hover:border-blue-500/40 transition-all"
          >
            <div>
              <div className="h-32 w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden mb-3">
                <img src={c.image_url} alt={c.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                {c.category}
              </span>
              <h4 className="mt-2 text-xs font-bold text-zinc-900 dark:text-white line-clamp-2">
                {c.title}
              </h4>
              <p className="text-[11px] text-zinc-500 mt-1 truncate">{c.issuer}</p>
            </div>

            <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-400">
                {c.issue_date || "—"}
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => openEditModal(c)}
                  className="p-1 rounded text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                  title="Editar Certificado"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="p-1 rounded text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                  title="Excluir Certificado"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: New / Edit Certificate */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingCert ? "Editar Certificado" : "Novo Certificado"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Título do Certificado</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Ex: Certified SAFe® 6 Agilist"
              className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Emissor / Instituição</label>
              <input
                type="text"
                required
                value={formData.issuer}
                onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                placeholder="Ex: Scaled Agile, AWS, UFOP"
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Categoria</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              >
                <option value="Data & IA">Data & IA</option>
                <option value="Metodologias Ágeis">Metodologias Ágeis</option>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Cloud / DevOps">Cloud / DevOps</option>
                <option value="Banco de Dados">Banco de Dados</option>
                <option value="Inclusão Digital & Social">Inclusão Digital & Social</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Data / Ano (ex: 2025-04)</label>
              <input
                type="text"
                value={formData.issue_date}
                onChange={(e) => setFormData({ ...formData, issue_date: e.target.value })}
                placeholder="Ex: 2025-04"
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Carga Horária (horas)</label>
              <input
                type="number"
                value={formData.hours}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                placeholder="Ex: 40"
                className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Caminho da Imagem</label>
            <input
              type="text"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="/images/certificates/01.png"
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
              {editingCert ? "Salvar Alterações" : "Salvar Certificado"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
