"use client";

import { useState } from "react";
import { audienceCategories } from "@/data/categories";
import {
  Scissors,
  HeartPulse,
  Dumbbell,
  GraduationCap,
  Briefcase,
  Camera,
  Check,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

interface AudienceProps {
  onOpenDemo: () => void;
}

export function Audience({ onOpenDemo }: AudienceProps) {
  const [selectedCatId, setSelectedCatId] = useState<string>("beleza");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors":
        return <Scissors className="w-5 h-5" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5" />;
      case "Dumbbell":
        return <Dumbbell className="w-5 h-5" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5" />;
      case "Camera":
      default:
        return <Camera className="w-5 h-5" />;
    }
  };

  const activeCategory =
    audienceCategories.find((c) => c.id === selectedCatId) || audienceCategories[0];

  return (
    <section id="para-quem-e" className="py-16 md:py-24 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Segmentos Atendidos
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Feito para quem trabalha com hora marcada.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Seja você um profissional autônomo ou uma equipe com várias salas, o AgendaFlow se adapta ao seu ritmo.
          </p>
        </div>

        {/* Compact category chips / tabs - Avoids huge repetitive cards */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
          {audienceCategories.map((cat) => {
            const isSelected = cat.id === selectedCatId;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCatId(cat.id)}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]"
                    : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                <span className={isSelected ? "text-amber-400" : "text-blue-600"}>
                  {getIcon(cat.iconName)}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Highlight Box for the Selected Category */}
        <div className="mt-8 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                {getIcon(activeCategory.iconName)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900">{activeCategory.name}</h3>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {activeCategory.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{activeCategory.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto shrink-0">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{activeCategory.sampleTimeslot}</span>
            </div>
          </div>

          <div className="mt-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              Negócios e profissionais que usam o AgendaFlow neste segmento:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeCategory.examples.map((ex) => (
                <div
                  key={ex}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{ex}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-500">
              Configuração rápida: defina seus horários e comece a divulgar hoje mesmo.
            </span>
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <span>Criar agenda para {activeCategory.name.split(" ")[0]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
