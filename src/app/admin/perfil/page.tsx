"use client";

import React, { useState, useEffect } from "react";
import { initialProfile } from "@/data/initialData";
import { ProfileSettings } from "@/types/database";
import { 
  UserCircle, 
  Save, 
  RotateCcw, 
  Check, 
  MapPin, 
  Briefcase, 
  Mail, 
  Phone, 
  FileText, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Lock,
  User,
  Eye,
  EyeOff
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import { 
  getProfile, 
  updateProfile, 
  resetProfileToDefault, 
  getAdminCredentials, 
  updateAdminCredentials,
  AdminCredentials,
  defaultAdminCredentials
} from "@/lib/supabase/client";

export default function AdminPerfilPage() {
  const [profile, setProfile] = useState<ProfileSettings>(initialProfile);
  const [credentials, setCredentials] = useState<AdminCredentials>(defaultAdminCredentials);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getProfile();
        if (data) setProfile(data);
        setCredentials(getAdminCredentials());
      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
      }
    }
    loadData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: name === "years_experience" ? Number(value) : value
    }));
  };

  const handleCredsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSavedSuccess(false);

    try {
      await updateProfile(profile);
      updateAdminCredentials(credentials);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 4000);
    } catch (err) {
      console.error("Erro ao salvar perfil:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    if (confirm("Deseja restaurar as configurações originais do perfil?")) {
      resetProfileToDefault();
      setProfile(initialProfile);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400">
            <UserCircle className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-white">
              Gestão de Perfil, Contatos & Acesso
            </h1>
            <p className="text-xs text-zinc-500">
              Altere seu resumo profissional, contatos exibidos no site e suas credenciais de administrador.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-750 transition-colors"
            title="Restaurar dados originais"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar</span>
          </button>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <span>Ver no Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2 animate-in fade-in duration-200">
          <Check className="w-4 h-4 shrink-0" />
          <span>Alterações e credenciais salvas com sucesso! O site foi atualizado em tempo real.</span>
        </div>
      )}

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Identidade Principal */}
        <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Identidade & Destaque</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                Nome Completo
              </label>
              <input
                type="text"
                name="full_name"
                value={profile.full_name}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                Localização (Cidade - UF)
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  required
                  placeholder="Ouro Preto - MG, Brasil"
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-500 mb-1.5">
              Headline Profissional (Título de Destaque)
            </label>
            <input
              type="text"
              name="headline"
              value={profile.headline}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-500 mb-1.5">
              Biografia / Resumo Profissional
            </label>
            <textarea
              name="bio"
              rows={4}
              value={profile.bio}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500 leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                Anos de Experiência em TI
              </label>
              <input
                type="number"
                name="years_experience"
                value={profile.years_experience}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                Pessoas Impactadas (Texto de Métrica)
              </label>
              <input
                type="text"
                name="people_impacted"
                value={profile.people_impacted}
                onChange={handleChange}
                placeholder="+7.000"
                required
                className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Links e Contatos */}
        <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-500" />
            <span>Canais de Contato & Redes</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                E-mail Profissional
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                WhatsApp (com DDI e DDD)
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  name="whatsapp"
                  value={profile.whatsapp}
                  onChange={handleChange}
                  placeholder="+5531988527732"
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                URL do LinkedIn
              </label>
              <div className="relative">
                <div className="absolute left-3 top-2.5 text-zinc-400">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <input
                  type="url"
                  name="linkedin"
                  value={profile.linkedin}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                URL do GitHub
              </label>
              <div className="relative">
                <div className="absolute left-3 top-2.5 text-zinc-400">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <input
                  type="url"
                  name="github"
                  value={profile.github}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                URL do Instagram
              </label>
              <div className="relative">
                <div className="absolute left-3 top-2.5 text-zinc-400">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <input
                  type="url"
                  name="instagram"
                  value={profile.instagram ?? ""}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Segurança & Credenciais de Acesso ao CMS */}
        <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Segurança & Credenciais de Acesso ao Painel (CMS)</span>
            </h2>
            <span className="text-[11px] font-mono text-zinc-500">
              Login em /admin/login
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                Usuário de Acesso
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleCredsChange}
                  required
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                E-mail Alternativo de Login
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleCredsChange}
                  required
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-500 mb-1.5">
                Senha de Acesso
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={credentials.password}
                  onChange={handleCredsChange}
                  required
                  className="w-full pl-9 pr-9 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/20 transition-all disabled:opacity-50 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>{loading ? "Salvando..." : "Salvar Alterações"}</span>
          </button>
        </div>

      </form>

    </div>
  );
}
