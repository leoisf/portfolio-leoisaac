"use client";

import React, { useState } from "react";
import { Certificate } from "@/types/database";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/context/LanguageContext";
import { Award, ExternalLink, Eye } from "lucide-react";

interface CertificatesSectionProps {
  certificates: Certificate[];
}

export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  const { t } = useLanguage();
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const categories = [
    { key: "all", label: t.certificates.categories.all, filter: "Todos" },
    { key: "agile", label: t.certificates.categories.agile, filter: "Metodologias Ágeis" },
    { key: "cloud", label: t.certificates.categories.cloud, filter: "Cloud / DevOps" },
    { key: "dev", label: t.certificates.categories.dev, filter: "Desenvolvimento" },
    { key: "database", label: t.certificates.categories.database, filter: "Banco de Dados" }
  ];

  const activeFilter = categories.find(c => c.key === selectedCat)?.filter || "Todos";

  const filteredCerts = activeFilter === "Todos"
    ? certificates
    : certificates.filter((c) => c.category === activeFilter);

  return (
    <section id="certificados" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/40 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
            {t.certificates.tag}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.certificates.title}
          </h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm">
            {t.certificates.subtitle}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCat(cat.key)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all ${
                selectedCat === cat.key
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                <img
                  src={cert.image_url}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-2xs">
                  <Eye className="w-4 h-4" />
                  <span>{t.clipping.readArticle}</span>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    {cert.category}
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-zinc-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h4>
                </div>
                <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                  <span className="truncate pr-2">{cert.issuer}</span>
                  {cert.issue_date && <span>{cert.issue_date}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Modal
          isOpen={Boolean(activeCert)}
          onClose={() => setActiveCert(null)}
          title={activeCert?.title}
        >
          {activeCert && (
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={activeCert.image_url}
                  alt={activeCert.title}
                  className="w-full max-h-[70vh] object-contain mx-auto"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    {activeCert.title}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {t.certificates.issuer}: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{activeCert.issuer}</span>
                  </p>
                </div>

                {activeCert.credential_url && (
                  <a
                    href={activeCert.credential_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500"
                  >
                    <span>{t.certificates.validateBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
