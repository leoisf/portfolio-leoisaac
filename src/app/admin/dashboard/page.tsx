"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { initialProjects, initialCertificates, initialSkills, initialClippings, initialTestimonials } from "@/data/initialData";
import { FolderGit2, Award, Layers, Plus, ExternalLink, ShieldCheck, Database, Newspaper, UserCircle, MessageSquareQuote } from "lucide-react";
import { isSupabaseConfigured, getProjects, getCertificates, getClippings, getAllTestimonials } from "@/lib/supabase/client";

export default function AdminDashboardPage() {
  const [projectCount, setProjectCount] = useState(initialProjects.length);
  const [certCount, setCertCount] = useState(initialCertificates.length);
  const [clippingCount, setClippingCount] = useState(initialClippings.length);
  const [testimonialCount, setTestimonialCount] = useState(initialTestimonials.length);

  const loadStats = async () => {
    try {
      const [p, c, cl, t] = await Promise.all([
        getProjects(),
        getCertificates(),
        getClippings(),
        getAllTestimonials()
      ]);
      setProjectCount(p.length);
      setCertCount(c.length);
      setClippingCount(cl.length);
      setTestimonialCount(t.length);
    } catch (e) {
      console.error("Erro ao carregar estatísticas:", e);
    }
  };

  useEffect(() => {
    loadStats();
    window.addEventListener("portfolio_data_changed", loadStats);
    return () => window.removeEventListener("portfolio_data_changed", loadStats);
  }, []);

  return (
    <div className="space-y-8 max-w-6xl">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-r from-blue-600/10 via-indigo-600/5 to-cyan-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Bem-vindo ao Painel, Leonardo!
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Aqui você gerencia os projetos exibidos, faz upload de novos certificados, modera depoimentos e atualiza seus dados.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/admin/perfil"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <UserCircle className="w-3.5 h-3.5 text-purple-500" />
            <span>Editar Perfil</span>
          </Link>
          <Link
            href="/admin/projetos"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Novo Projeto</span>
          </Link>
          <Link
            href="/admin/certificados"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Novo Certificado</span>
          </Link>
          <Link
            href="/admin/depoimentos"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-emerald-500" />
            <span>Depoimentos</span>
          </Link>
        </div>
      </div>

      {/* Supabase Status Banner */}
      <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Database className="w-5 h-5 text-blue-500" />
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">
              Status do Armazenamento
            </h4>
            <p className="text-xs text-zinc-500">
              {isSupabaseConfigured
                ? "Conectado ao Supabase PostgreSQL com persistência em nuvem ativa!"
                : "Modo Local Dinâmico Ativo (Persistência reativa via LocalStorage com sincronização instantânea na Home)."}
            </p>
          </div>
        </div>
        <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold ${
          isSupabaseConfigured ? "bg-emerald-500/10 text-emerald-500" : "bg-blue-500/10 text-blue-500"
        }`}>
          {isSupabaseConfigured ? "SUPABASE ONLINE" : "LOCAL STORAGE DYNAMIC"}
        </span>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-500">Projetos Ativos</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <FolderGit2 className="w-4 h-4" />
            </div>
          </div>
          <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {projectCount}
          </span>
          <div className="mt-3">
            <Link href="/admin/projetos" className="text-xs text-blue-600 dark:text-cyan-400 font-semibold hover:underline">
              Gerenciar projetos →
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-500">Certificados</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {certCount}
          </span>
          <div className="mt-3">
            <Link href="/admin/certificados" className="text-xs text-blue-600 dark:text-cyan-400 font-semibold hover:underline">
              Gerenciar certificados →
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-500">Depoimentos</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <MessageSquareQuote className="w-4 h-4" />
            </div>
          </div>
          <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {testimonialCount}
          </span>
          <div className="mt-3">
            <Link href="/admin/depoimentos" className="text-xs text-blue-600 dark:text-cyan-400 font-semibold hover:underline">
              Moderar mensagens →
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-500">Matérias / Clipping</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Newspaper className="w-4 h-4" />
            </div>
          </div>
          <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {clippingCount}
          </span>
          <div className="mt-3">
            <span className="text-xs text-zinc-400">Telecentros & Inclusão</span>
          </div>
        </div>

        <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-500">Habilidades Mapeadas</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <span className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            {initialSkills.length}
          </span>
          <div className="mt-3">
            <span className="text-xs text-zinc-400">Frontend, Backend, IA, Cloud</span>
          </div>
        </div>
      </div>

    </div>
  );
}
