"use client";

import React, { useState } from "react";
import { Testimonial } from "@/types/database";
import { useLanguage } from "@/context/LanguageContext";
import { submitTestimonial } from "@/lib/supabase/client";
import { Modal } from "@/components/ui/Modal";
import { 
  Quote, 
  MessageSquarePlus, 
  CheckCircle2, 
  ExternalLink, 
  UserCheck, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from "lucide-react";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const INITIAL_TESTIMONIAL_COUNT = 2;

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    relationship: "Colega de Equipe" as Testimonial["relationship"],
    linkedin_url: "",
    message: ""
  });

  // Não exibir nada inventado no site enquanto não houver depoimentos reais aprovados
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, INITIAL_TESTIMONIAL_COUNT);

  const handleOpenModal = () => {
    setSubmittedSuccess(false);
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setSubmitting(true);
    try {
      const newTestimonial: Testimonial = {
        id: `test-${Date.now()}`,
        name: formData.name.trim(),
        role: formData.role.trim() || "Profissional",
        company: formData.company.trim() || undefined,
        relationship: formData.relationship,
        message: formData.message.trim(),
        linkedin_url: formData.linkedin_url.trim() || undefined,
        is_approved: true,
        is_featured: false,
        created_at: new Date().toISOString().split("T")[0]
      };

      await submitTestimonial(newTestimonial);
      setSubmittedSuccess(true);
      setFormData({
        name: "",
        role: "",
        company: "",
        relationship: "Colega de Equipe",
        linkedin_url: "",
        message: ""
      });
    } finally {
      setSubmitting(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");
  };

  const getRelationshipBadgeStyle = (rel: Testimonial["relationship"]) => {
    switch (rel) {
      case "Liderança / Gestão":
        return "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/80";
      case "Cliente / Parceiro":
        return "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/80";
      case "Comunidade / Acadêmico":
        return "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/80";
      default:
        return "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/80";
    }
  };

  return (
    <section id="depoimentos" className="py-12 sm:py-24 bg-zinc-50/60 dark:bg-zinc-950/50 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.testimonials.tag}</span>
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              {t.testimonials.title}
            </h3>
            <p className="mt-1.5 sm:mt-2 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              {t.testimonials.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenModal}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>{t.testimonials.leaveMessageBtn}</span>
          </button>
        </div>

        {/* Testimonials List (Compact on Mobile, Grid on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {displayedTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl sm:rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-4 sm:p-7 shadow-xs hover:shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Meta: Relationship Badge */}
                <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold border ${getRelationshipBadgeStyle(
                      item.relationship
                    )}`}
                  >
                    {item.relationship}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-400">
                    {item.created_at}
                  </span>
                </div>

                {/* Quote Icon & Message */}
                <div className="relative">
                  <Quote className="hidden sm:block w-7 h-7 text-blue-500/15 dark:text-cyan-400/15 mb-2" />
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                    &ldquo;{item.message}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white font-mono text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0 shadow-xs">
                    {getInitials(item.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white truncate">
                        {item.name}
                      </h4>
                      <UserCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 shrink-0" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      {item.role}
                      {item.company ? ` • ${item.company}` : ""}
                    </p>
                  </div>
                </div>

                {item.linkedin_url && (
                  <a
                    href={item.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors shrink-0"
                    title="Ver perfil no LinkedIn"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show All Testimonials Button */}
        {testimonials.length > INITIAL_TESTIMONIAL_COUNT && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs cursor-pointer"
            >
              <span>
                {showAll
                  ? (language === "en" ? "Show Fewer Testimonials" : "Mostrar Menos Depoimentos")
                  : (language === "en"
                      ? `View All Testimonials (${testimonials.length})`
                      : `Ver Todos os Depoimentos (${testimonials.length})`)}
              </span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Modal: Submit New Message / Testimonial */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={t.testimonials.modalTitle}
        >
          {submittedSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                {t.testimonials.successTitle}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                {t.testimonials.successDesc}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                    {t.testimonials.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.testimonials.namePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                    {t.testimonials.formRole} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder={t.testimonials.rolePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                    {t.testimonials.formCompany}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={t.testimonials.companyPlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                    {t.testimonials.formRelationship}
                  </label>
                  <select
                    value={formData.relationship}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        relationship: e.target.value as Testimonial["relationship"]
                      })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                  >
                    <option value="Colega de Equipe">{t.testimonials.relationships.colleague}</option>
                    <option value="Liderança / Gestão">{t.testimonials.relationships.leadership}</option>
                    <option value="Cliente / Parceiro">{t.testimonials.relationships.client}</option>
                    <option value="Comunidade / Acadêmico">{t.testimonials.relationships.community}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                  {t.testimonials.formLinkedin}
                </label>
                <input
                  type="url"
                  value={formData.linkedin_url}
                  onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                  placeholder="https://linkedin.com/in/seu-perfil"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-1">
                  {t.testimonials.formMessage} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.testimonials.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  {t.testimonials.cancelBtn}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm shadow-blue-600/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {submitting ? "..." : t.testimonials.submitBtn}
                </button>
              </div>
            </form>
          )}
        </Modal>

      </div>
    </section>
  );
}

