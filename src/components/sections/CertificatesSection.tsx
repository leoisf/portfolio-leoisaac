"use client";

import React, { useState } from "react";
import { Certificate } from "@/types/database";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Award, 
  ExternalLink, 
  Eye, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2,
  Calendar,
  Building2
} from "lucide-react";

interface CertificatesSectionProps {
  certificates: Certificate[];
}

const INITIAL_COUNT = 8;

export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  const { t } = useLanguage();
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

  // Certificados em Destaque de Alto Impacto (SAFe 6 Agilist, POPM, Kiro AI, AWS, etc.)
  const featuredCerts = certificates.filter((c) => c.is_featured);

  const categories = [
    { key: "all", label: t.certificates.categories.all, filter: "Todos" },
    { key: "data_ai", label: t.certificates.categories.data_ai, filter: "Data & IA" },
    { key: "agile", label: t.certificates.categories.agile, filter: "Metodologias Ágeis" },
    { key: "cloud", label: t.certificates.categories.cloud, filter: "Cloud / DevOps" },
    { key: "dev", label: t.certificates.categories.dev, filter: "Desenvolvimento" },
    { key: "social", label: t.certificates.categories.social, filter: "Inclusão Digital & Social" }
  ];

  const handleCategoryChange = (catKey: string) => {
    setSelectedCat(catKey);
    setShowAll(false);
  };

  const activeFilter = categories.find((c) => c.key === selectedCat)?.filter || "Todos";

  const filteredCerts = activeFilter === "Todos"
    ? certificates
    : certificates.filter((c) => c.category === activeFilter);

  const displayedCerts = showAll
    ? filteredCerts
    : filteredCerts.slice(0, INITIAL_COUNT);

  return (
    <section id="certificados" className="py-24 bg-zinc-50/60 dark:bg-zinc-950/60 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Principal */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{t.certificates.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.certificates.title}
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t.certificates.subtitle}
          </p>

          {/* Stats Bar de Credibilidade */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-600 dark:text-zinc-400">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">{t.certificates.statsTotal}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xs">
              <Building2 className="w-4 h-4 text-blue-500" />
              <span>{t.certificates.statsIssuers}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xs">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>{t.certificates.statsFocus}</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* VITRINE VIP: CREDENCIAIS DE ALTO IMPACTO (FEATURED SHOWCASE)   */}
        {/* ============================================================== */}
        {featuredCerts.length > 0 && selectedCat === "all" && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.certificates.featuredTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                  {t.certificates.featuredTitle}
                </h3>
              </div>
              <span className="hidden sm:inline-block text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {t.certificates.featuredSubtitle}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCerts.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setActiveCert(cert)}
                  className="group relative cursor-pointer rounded-2xl border-2 border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 hover:border-blue-500/70 dark:hover:border-blue-500/70 p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Top Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400" />

                  <div>
                    {/* Header do Card VIP */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        {t.certificates.verifiedBadge}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                        {cert.issue_date}
                      </span>
                    </div>

                    {/* Imagem do Certificado em Destaque */}
                    <div className="relative h-44 w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-800/80 mb-4">
                      <img
                        src={cert.image_url}
                        alt={cert.title}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-2xs">
                        <Eye className="w-4 h-4" />
                        <span>{t.certificates.viewCertificateBtn}</span>
                      </div>
                    </div>

                    {/* Título & Emissor */}
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300">{cert.issuer}</span>
                    </p>
                  </div>

                  {/* Ação Inferior */}
                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-cyan-400">
                    <span className="inline-flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {t.certificates.viewCertificateBtn}
                    </span>
                    {cert.credential_url && (
                      <span className="inline-flex items-center gap-1 text-zinc-500 hover:text-blue-600 dark:hover:text-cyan-400">
                        <ExternalLink className="w-3 h-3" />
                        {t.certificates.validateBtn}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Separador e Filtros de Categoria */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-10 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              {activeFilter === "Todos" ? "Acervo Completo de Certificações" : `Certificados em ${activeFilter}`}
            </h3>
            <span className="text-xs text-zinc-500">
              {filteredCerts.length} certificados catalogados
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  selectedCat === cat.key
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grade Geral de Certificados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-44 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={cert.image_url}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-2xs">
                  <Eye className="w-4 h-4" />
                  <span>{t.certificates.viewCertificateBtn}</span>
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
                  <span className="truncate pr-2 font-medium">{cert.issuer}</span>
                  {cert.issue_date && <span className="font-mono text-[11px]">{cert.issue_date}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Ver Mais / Ver Menos */}
        {filteredCerts.length > INITIAL_COUNT && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs cursor-pointer"
            >
              <span>
                {showAll
                  ? t.certificates.showLess
                  : `${t.certificates.viewAll} (${filteredCerts.length})`}
              </span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Lightbox Modal com Detalhes e Link de Validação */}
        <Modal
          isOpen={Boolean(activeCert)}
          onClose={() => setActiveCert(null)}
          title={activeCert?.title}
        >
          {activeCert && (
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 p-3">
                <img
                  src={activeCert.image_url}
                  alt={activeCert.title}
                  className="w-full max-h-[70vh] object-contain mx-auto rounded-lg shadow-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    {activeCert.category}
                  </span>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white mt-1">
                    {activeCert.title}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-0.5 flex items-center gap-2">
                    <span>
                      {t.certificates.issuer}: <strong className="text-zinc-700 dark:text-zinc-300">{activeCert.issuer}</strong>
                    </span>
                    {activeCert.issue_date && (
                      <span>• Data: {activeCert.issue_date}</span>
                    )}
                  </p>
                </div>

                {activeCert.credential_url && (
                  <a
                    href={activeCert.credential_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors"
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

