"use client";

import React, { useState } from "react";
import { ClippingItem } from "@/types/database";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/context/LanguageContext";
import { Newspaper, Eye, ChevronDown, ChevronUp, RotateCw } from "lucide-react";

interface ClippingSectionProps {
  clippings: ClippingItem[];
}

const INITIAL_COUNT = 4;

export function ClippingSection({ clippings }: ClippingSectionProps) {
  const { t } = useLanguage();
  const [activeClip, setActiveClip] = useState<ClippingItem | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { key: "all", label: t.clipping.categories.all, filter: "Todos" },
    { key: "telecentros", label: t.clipping.categories.telecentros, filter: "Telecentros" },
    { key: "escolaDigital", label: t.clipping.categories.escolaDigital, filter: "Escola Digital" },
    { key: "inclusao", label: t.clipping.categories.inclusao, filter: "Inclusão Digital" }
  ];

  const handleCategoryChange = (catKey: string) => {
    setActiveCategory(catKey);
    setShowAll(false);
  };

  const activeFilter = categories.find(c => c.key === activeCategory)?.filter || "Todos";

  const filteredClippings = activeFilter === "Todos"
    ? clippings
    : clippings.filter((c) => c.category === activeFilter);

  const displayedClippings = showAll
    ? filteredClippings
    : filteredClippings.slice(0, INITIAL_COUNT);

  const handleOpenClip = (item: ClippingItem) => {
    setRotation(0);
    setActiveClip(item);
  };

  return (
    <section id="clipping" className="py-12 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] sm:text-xs font-semibold mb-2.5 sm:mb-3">
          <Newspaper className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>{t.clipping.tag}</span>
        </div>
        <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          {t.clipping.title}
        </h3>
        <p className="mt-2 sm:mt-3 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
          {t.clipping.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleCategoryChange(cat.key)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-medium rounded-xl transition-all cursor-pointer ${
              activeCategory === cat.key
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Clippings: Mobile Horizontal List View | Desktop Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
        {displayedClippings.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpenClip(item)}
            className="group cursor-pointer rounded-xl sm:rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-row sm:flex-col items-center sm:items-stretch justify-between p-2.5 sm:p-0 gap-3 sm:gap-0"
          >
            {/* Image Preview */}
            <div className="relative w-16 h-16 sm:h-56 sm:w-full rounded-lg sm:rounded-none bg-zinc-100 dark:bg-zinc-800 overflow-hidden sm:border-b border-zinc-100 dark:border-zinc-800 shrink-0">
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="hidden sm:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-2xs">
                <Eye className="w-4 h-4" />
                <span>{t.clipping.readArticle}</span>
              </div>
            </div>

            {/* Content info */}
            <div className="sm:p-4 flex flex-col flex-1 justify-between min-w-0">
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  {item.category}
                </span>
                <h4 className="mt-1 sm:mt-2 text-xs font-bold text-zinc-900 dark:text-white line-clamp-1 sm:line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
              </div>
              <div className="mt-1 sm:mt-3 sm:pt-2 sm:border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-zinc-500">
                <span className="truncate pr-2">{item.source}</span>
                {item.date && <span className="shrink-0">{item.date}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show All Button */}
      {filteredClippings.length > INITIAL_COUNT && (
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs cursor-pointer"
          >
            <span>
              {showAll
                ? t.clipping.showLess
                : `${t.clipping.viewAll} (${filteredClippings.length})`}
            </span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <Modal
        isOpen={Boolean(activeClip)}
        onClose={() => setActiveClip(null)}
        title={activeClip?.title}
      >
        {activeClip && (
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 p-2 flex items-center justify-center min-h-[320px]">
              <img
                src={activeClip.image_url}
                alt={activeClip.title}
                style={{ transform: `rotate(${rotation}deg)` }}
                className="w-full max-h-[72vh] object-contain mx-auto transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
              <div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                  {activeClip.title}
                </h4>
                <p className="text-xs text-zinc-500">
                  {t.clipping.mediaSource}: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{activeClip.source}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setRotation((prev) => (prev + 90) % 360)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                  title="Girar imagem em 90°"
                >
                  <RotateCw className="w-3.5 h-3.5 text-blue-500" />
                  <span>Girar 90°</span>
                </button>
                <span className="px-3 py-1.5 rounded-xl text-xs font-mono bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                  {activeClip.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
