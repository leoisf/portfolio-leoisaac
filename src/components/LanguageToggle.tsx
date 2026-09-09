"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-1 shadow-xs">
      <button
        onClick={() => setLanguage("pt")}
        className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg transition-all ${
          language === "pt"
            ? "bg-blue-600 text-white shadow-xs"
            : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        }`}
        title="Mudar idioma para Português"
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg transition-all ${
          language === "en"
            ? "bg-blue-600 text-white shadow-xs"
            : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        }`}
        title="Switch language to English"
      >
        EN
      </button>
    </div>
  );
}
