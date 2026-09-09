"use client";

import React, { useState } from "react";
import { ProfileSettings } from "@/types/database";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

interface ContactSectionProps {
  profile: ProfileSettings;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const text = `Olá Leonardo, meu nome é ${formData.name} (${formData.email}): ${formData.message}`;
    const waUrl = `https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Info Column */}
        <div className="lg:col-span-5">
          <h2 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
            {t.contact.tag}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            {t.contact.subtitle}
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3.5 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 block font-mono">{t.contact.emailLabel}</span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">{profile.email}</span>
              </div>
            </a>

            <a
              href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 block font-mono">{t.contact.phoneLabel}</span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">{profile.whatsapp}</span>
              </div>
            </a>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 block font-mono">{t.contact.locationLabel}</span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Form Column */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {t.contact.sentTitle}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                  {t.contact.sentDesc}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-semibold rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
