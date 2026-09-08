"use client";

import React, { useState } from "react";
import { initialCertificates } from "@/data/initialData";
import { Certificate } from "@/types/database";
import { Plus, Trash2, Eye, Award } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export default function AdminCertificadosPage() {
  const [certs, setCerts] = useState<Certificate[]>(initialCertificates);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    category: "Desenvolvimento" as const,
    issue_date: "",
    image_url: "",
  });

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newCert: Certificate = {
      id: "cert-" + Date.now(),
      title: formData.title,
      issuer: formData.issuer,
      category: formData.category,
      issue_date: formData.issue_date,
      image_url: formData.image_url || "/images/certificates/01.png",
      display_order: certs.length + 1,
    };

    setCerts([newCert, ...certs]);
    setIsModalOpen(false);
    setFormData({
      title: "",
      issuer: "",
      category: "Desenvolvimento",
      issue_date: "",
      image_url: "",
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Remover este certificado?")) {
      setCerts(certs.filter(c => c.id !== id));
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Gerenciador de Certificados
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Cadastre e atualize suas formações, cursos e certificações profissionais.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Certificado</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certs.map((c) => (
          <div
            key={c.id}
            className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between"
          >
            <div>
              <div className="h-32 w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden mb-3">
                <img src={c.image_url} alt={c.title} className="w-full h-full object-cover object-top" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                {c.category}
              </span>
              <h4 className="mt-2 text-xs font-bold text-zinc-900 dark:text-white line-clamp-2">
                {c.title}
              </h4>
              <p className="text-[11px] text-zinc-500 mt-1 truncate">{c.issuer}</p>
            </div>

            <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
              <button
                onClick={() => handleDelete(c.id)}
                className="p-1 rounded text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: New Certificate */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Novo Certificado">
        <form onSubmit={handleCreate} className="space-y-4">
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Emissor</label>
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
                <option value="Metodologias Ágeis">Metodologias Ágeis</option>
                <option value="Cloud / DevOps">Cloud / DevOps</option>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Banco de Dados">Banco de Dados</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">Data / Ano</label>
            <input
              type="text"
              value={formData.issue_date}
              onChange={(e) => setFormData({ ...formData, issue_date: e.target.value })}
              placeholder="Ex: 2025-04"
              className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
            />
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
              Salvar Certificado
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
