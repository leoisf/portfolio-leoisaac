"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  FolderGit2, 
  Award, 
  LayoutDashboard, 
  LogOut, 
  Home, 
  Layers, 
  Menu, 
  X, 
  ShieldCheck 
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // If on login page, render clean layout without sidebar
  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-zinc-950 text-white">{children}</div>;
  }

  const navItems = [
    { label: "Visão Geral", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Projetos", href: "/admin/projetos", icon: FolderGit2 },
    { label: "Certificados", href: "/admin/certificados", icon: Award },
  ];

  const handleLogout = () => {
    localStorage.removeItem("admin_session");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 flex-col justify-between border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5">
        <div>
          <div className="flex flex-col gap-2 px-2 py-3 mb-6">
            <div className="px-2 py-1 rounded-xl bg-white border border-zinc-200/80 shadow-xs inline-flex w-fit">
              <img
                src="/images/logo/logo_isaac_final-1.png"
                alt="Logo Leonardo Isaac"
                className="h-7 w-auto object-contain"
              />
            </div>
            <span className="text-[11px] font-mono text-zinc-500">Admin Studio • leoisaac.com.br</span>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <Home className="w-4 h-4" />
            <span>Voltar ao Site</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30"
          >
            <LogOut className="w-4 h-4" />
            <span>Sair do Painel</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-md px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 rounded-xl border border-zinc-200 dark:border-zinc-800"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <span className="text-xs font-mono text-zinc-500 uppercase">
              Painel de Controle • Gestão de Conteúdo
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
              Leonardo Isaac
            </span>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
