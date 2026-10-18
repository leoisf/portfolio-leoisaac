"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Brain, 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Sparkles 
} from "lucide-react";

export function openCvSelectorModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open_cv_selector"));
  }
}

export function CvSelectorModal() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("open_cv_selector", handleOpen);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("open_cv_selector", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getItemIcon = (id: string) => {
    switch (id) {
      case "cv-data-ai":
        return <Brain className="w-5 h-5 text-blue-500 dark:text-cyan-400" />;
      case "cv-software-eng":
        return <Cpu className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case "cv-agile-gov":
        return <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      case "cv-master-en":
        return <Globe className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      default:
        return <FileText className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 py-5 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-[11px] font-mono font-semibold mb-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>PDF • Documentos Oficiais</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              {t.cvModal.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              {t.cvModal.subtitle}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Options List */}
        <div className="p-6 space-y-4">
          {t.cvModal.items.map((item) => {
            const encodedUrl = encodeURI(item.fileUrl);
            return (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  item.featured
                    ? "border-blue-500/40 dark:border-blue-500/40 bg-gradient-to-r from-blue-50/50 via-white to-white dark:from-blue-950/25 dark:via-zinc-900 dark:to-zinc-900 shadow-xs hover:border-blue-500"
                    : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                <div className="flex items-start gap-3.5 min-w-0 flex-1">
                  <div className="w-11 h-11 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    {getItemIcon(item.id)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {item.badge}
                      </span>
                      {item.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-blue-600 text-white">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{t.cvModal.recommendedBadge}</span>
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-zinc-400">
                        ({item.fileSize})
                      </span>
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 sm:shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-200/60 dark:border-zinc-800/60">
                  <a
                    href={encodedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-semibold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{t.cvModal.previewBtn}</span>
                  </a>

                  <a
                    href={encodedUrl}
                    download={item.fileName}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm shadow-blue-600/20 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t.cvModal.downloadBtn}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Click outside to close */}
      <div className="fixed inset-0 -z-10" onClick={() => setIsOpen(false)} />
    </div>
  );
}

