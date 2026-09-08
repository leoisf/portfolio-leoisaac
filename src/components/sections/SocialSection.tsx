"use client";

import React from "react";
import { SocialInitiative } from "@/types/database";
import { HeartHandshake, CheckCircle2, Users2, Sparkles } from "lucide-react";

interface SocialSectionProps {
  initiatives: SocialInitiative[];
}

export function SocialSection({ initiatives }: SocialSectionProps) {
  return (
    <section id="social" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
          <HeartHandshake className="w-4 h-4" />
          <span>Transformação Social & Inclusão Digital</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Tecnologia a Serviço da Comunidade
        </h3>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          Histórico de coordenação de projetos públicos que levaram capacitação profissional, acesso à internet e revitalização de laboratórios para milhares de cidadãos em Minas Gerais.
        </p>
      </div>

      {/* Initiatives Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {initiatives.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-xs hover:border-blue-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Metric & Role */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  {item.impact_metric}
                </span>
                <span className="text-xs text-zinc-500 font-mono">
                  {item.period}
                </span>
              </div>

              <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mb-4">
                {item.role}
              </p>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Achievements Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <h5 className="text-xs font-mono uppercase text-zinc-400 mb-2">
                  Destaques & Entregas
                </h5>
                {item.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {item.image_url && (
              <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className="rounded-2xl overflow-hidden h-40 border border-zinc-200 dark:border-zinc-800">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
