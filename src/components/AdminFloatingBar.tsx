"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  LayoutDashboard, 
  FolderGit2, 
  Award, 
  UserCircle, 
  MessageSquareQuote,
  LogOut, 
  ChevronUp, 
  ChevronDown, 
  Sparkles 
} from "lucide-react";

export function AdminFloatingBar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const checkSession = () => {
      if (typeof window !== "undefined") {
        const session = localStorage.getItem("admin_session");
        setIsAdmin(Boolean(session));
      }
    };

    checkSession();
    window.addEventListener("storage", checkSession);
    window.addEventListener("portfolio_data_changed", checkSession);

    return () => {
      window.removeEventListener("storage", checkSession);
      window.removeEventListener("portfolio_data_changed", checkSession);
    };
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_session");
      setIsAdmin(false);
      window.dispatchEvent(new Event("portfolio_data_changed"));
    }
  };

  if (!isAdmin) return null;

  return (
    <aside 
      aria-label="Barra de Gestão Rápida CMS"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      {isCollapsed ? (
        <button
          onClick={() => setIsCollapsed(false)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-900/90 dark:bg-zinc-900/95 text-white border border-blue-500/40 shadow-xl backdrop-blur-md hover:scale-105 transition-all text-xs font-semibold"
          title="Expandir barra de gestão CMS"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>CMS Ativo</span>
          <ChevronUp className="w-3 h-3 text-zinc-400" />
        </button>
      ) : (
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-2xl sm:rounded-full bg-zinc-950/90 dark:bg-zinc-900/95 text-white border border-zinc-700/80 dark:border-zinc-700/90 shadow-2xl backdrop-blur-xl">
          {/* Status Indicator */}
          <div className="flex items-center gap-2 pr-2 border-r border-zinc-700/60 hidden sm:flex">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold text-zinc-200">
              CMS Studio
            </span>
          </div>

          {/* Quick Action Links */}
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg sm:rounded-full text-xs font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
            title="Abrir Painel Geral"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden md:inline">Painel</span>
          </Link>

          <Link
            href="/admin/perfil"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg sm:rounded-full text-xs font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
            title="Editar Perfil, Bio e Contatos"
          >
            <UserCircle className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden md:inline">Perfil</span>
          </Link>

          <Link
            href="/admin/projetos"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg sm:rounded-full text-xs font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
            title="Gerenciar Projetos"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Projetos</span>
          </Link>

          <Link
            href="/admin/certificados"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg sm:rounded-full text-xs font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
            title="Gerenciar Certificados e Vitrine VIP"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Certificados</span>
          </Link>

          <Link
            href="/admin/depoimentos"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg sm:rounded-full text-xs font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
            title="Moderar Depoimentos e Mensagens"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Depoimentos</span>
          </Link>

          {/* Controls */}
          <div className="flex items-center gap-1 pl-1 border-l border-zinc-700/60">
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg sm:rounded-full text-zinc-400 hover:text-rose-400 hover:bg-zinc-800 transition-colors"
              title="Encerrar sessão de administração"
              aria-label="Sair do CMS"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-1.5 rounded-lg sm:rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Recolher barra"
              aria-label="Recolher barra"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
