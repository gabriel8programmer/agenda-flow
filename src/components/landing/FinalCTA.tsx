"use client";

import {
  CalendarCheck2,
  ArrowRight,
  Check,
  Smartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface FinalCTAProps {
  onOpenDemo: () => void;
}

export function FinalCTA({ onOpenDemo }: FinalCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/40 to-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 pointer-events-none opacity-40">
        <div className="absolute -top-10 left-10 w-72 h-72 rounded-full bg-blue-300 blur-3xl" />
        <div className="absolute -bottom-10 right-10 w-72 h-72 rounded-full bg-amber-300 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 text-white rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800 text-center relative overflow-hidden">
          {/* Subtle accent light */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-6">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Comece agora em menos de 2 minutos</span>
          </div>

          {/* Headline as requested */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto text-white">
            Sua agenda pode trabalhar mesmo quando você está ocupado.
          </h2>

          {/* Subheadline as requested */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Crie seus horários, compartilhe seu link e deixe seus clientes agendarem com mais autonomia.
          </p>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white font-extrabold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <CalendarCheck2 className="w-5 h-5" />
              <span>Criar minha agenda</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          {/* Microcopy guarantees */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4 text-emerald-400" />
              Sem necessidade de cartão
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Smartphone className="w-4 h-4 text-blue-400" />
              Configuração simples no celular
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Cancele quando quiser
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
