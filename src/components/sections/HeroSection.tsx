"use client";

import React from "react";
import Image from "next/image";
import { ProfileSettings } from "@/types/database";
import { ArrowRight, Download, MessageSquare, Terminal, Award, Users, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  profile: ProfileSettings;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-cyan-400/15 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Disponível para projetos & desafios de TI</span>
            </div>

            {/* Headline Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              Olá, eu sou o <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                {profile.full_name}
              </span>
            </h1>

            {/* Subtitle / Headline */}
            <p className="mt-4 text-lg sm:text-xl font-medium text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              Cientista da Computação (UFOP), Analista & Desenvolvedor Web Full Stack e Agilista com mais de 22 anos de trajetória em tecnologia e transformação digital.
            </p>

            {/* Key Metrics Pill Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300">
                <Terminal className="w-3.5 h-3.5 text-blue-500" />
                22+ Anos em TI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Certified SAFe® 6 Agilist
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300">
                <Users className="w-3.5 h-3.5 text-emerald-500" />
                +7.000 Pessoas Impactadas
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profile.cv_url}
                download
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 shadow-xs hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Baixar Currículo</span>
              </a>

              <a
                href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}?text=Ol%C3%A1%20Leonardo!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative card */}
              <div className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6 shadow-2xl">
                
                {/* Header of code card */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">leonardo-isaac.ts</span>
                </div>

                {/* Profile Image with glow */}
                <div className="my-6 relative flex justify-center">
                  <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-xl bg-gradient-to-b from-blue-500/10 to-indigo-500/20 flex items-center justify-center">
                    <img
                      src="/images/profile/leo.png"
                      alt={profile.full_name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="font-mono text-3xl font-bold text-blue-600 dark:text-blue-400">
                      LI
                    </span>
                  </div>
                </div>

                {/* Micro tech specs */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/50">
                    <span className="text-zinc-500">Graduação:</span>
                    <span className="text-zinc-800 dark:text-zinc-200 font-semibold">BCC - UFOP</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/50">
                    <span className="text-zinc-500">Especialidade:</span>
                    <span className="text-blue-600 dark:text-cyan-400 font-semibold">Full Stack & Ágil</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/50">
                    <span className="text-zinc-500">Localização:</span>
                    <span className="text-zinc-800 dark:text-zinc-200">{profile.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center gap-2 text-xs text-zinc-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Código aberto & arquitetura limpa</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
