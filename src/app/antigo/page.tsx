"use client";

import { useEffect } from "react";

export default function AntigoPage() {
  useEffect(() => {
    window.location.replace("/antigo/index.html");
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white p-6 font-sans">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-base font-medium text-zinc-200">
          Carregando a versão anterior do portfólio...
        </p>
      </div>
      <p className="text-xs text-zinc-500 mb-4">
        Você está sendo encaminhado para o arquivo histórico estático.
      </p>
      <a
        href="/antigo/index.html"
        className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
      >
        Acessar Diretamente
      </a>
    </div>
  );
}
