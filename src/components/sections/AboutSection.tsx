"use client";

import React from "react";
import { ProfileSettings } from "@/types/database";
import { GraduationCap, Briefcase, HeartHandshake, Code, Sparkles } from "lucide-react";

interface AboutSectionProps {
  profile: ProfileSettings;
}

export function AboutSection({ profile }: AboutSectionProps) {
  const milestones = [
    {
      year: "Início",
      title: "Câmara Municipal de Ouro Preto",
      desc: "Primeiros passos no programa 'Jovens de Ouro': manutenção de redes de dados, computadores e periféricos, consolidando a base em infraestrutura.",
      icon: Briefcase,
    },
    {
      year: "+15 Anos",
      title: "Coordenação dos Telecentros Comunitários",
      desc: "Liderança e gestão técnica de inclusão digital que capacitou e atendeu mais de 7.000 pessoas gratuitamente com acesso à internet e formação em informática.",
      icon: HeartHandshake,
    },
    {
      year: "Inovação",
      title: "Projeto Escola Digital",
      desc: "Atuação na Prefeitura Municipal de Ouro Preto revitalizando laboratórios de informática escolares parados ou subutilizados, treinando educadores.",
      icon: Sparkles,
    },
    {
      year: "Formação",
      title: "Ciência da Computação (UFOP)",
      desc: "Graduação como Bacharel em Ciência da Computação na Universidade Federal de Ouro Preto, aprofundando em engenharia de software, algoritmos e banco de dados.",
      icon: GraduationCap,
    },
    {
      year: "Atualmente",
      title: "Desenvolvimento Full Stack & Agilidade",
      desc: "Atuação corporativa de alto impacto (Compass UOL, órgãos públicos), certificado SAFe® 6 Agilist, construindo arquiteturas modernas e escaláveis.",
      icon: Code,
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/40 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-2">
            // Trajetória & Experiência
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Mais de 2 décadas transformando tecnologia em impacto real
          </h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
            {profile.bio}
          </p>
        </div>

        {/* Career Timeline */}
        <div className="relative mt-12">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-8">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content card */}
                  <div className="w-full lg:w-1/2 p-2 sm:p-4">
                    <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 text-xs font-mono font-bold rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
                          {item.year}
                        </span>
                        <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot Indicator */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white dark:border-zinc-950 bg-blue-600 text-white items-center justify-center shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
