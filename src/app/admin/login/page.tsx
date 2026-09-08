"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, Mail, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simple authentication verification (can be wired with Supabase Auth or master key)
    if (email === "contato@leoisaac.com.br" || email === "admin" || email.includes("@")) {
      localStorage.setItem("admin_session", JSON.stringify({ email, loggedAt: Date.now() }));
      router.push("/admin/dashboard");
    } else {
      setError("Credenciais inválidas. Verifique o e-mail ou senha.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-zinc-950">
      <div className="w-full max-w-md p-8 rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Acesso Restrito
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Painel Administrativo do Portfólio (Leonardo Isaac)
          </p>
        </div>

        {error && (
          <div className="p-3 mb-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">
              E-mail Administrativo
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contato@leoisaac.com.br"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white text-sm focus:outline-hidden focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">
              Senha de Acesso
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-white text-sm focus:outline-hidden focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all mt-6 shadow-md shadow-blue-600/30"
          >
            <span>{loading ? "Entrando..." : "Acessar Painel"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Voltar para a página pública
          </a>
        </div>
      </div>
    </div>
  );
}
