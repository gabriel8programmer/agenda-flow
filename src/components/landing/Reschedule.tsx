"use client";

import { useState } from "react";
import {
  RotateCcw,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

/**
 * GESTÃO DE CANCELAMENTOS E REAGENDAMENTOS
 * Demonstra como cancelamentos não se tornam prejuízo, pois horários vagos
 * voltam instantaneamente para a vitrine online.
 */

interface RescheduleProps {
  onOpenDemo: () => void;
}

export function Reschedule({ onOpenDemo }: RescheduleProps) {
  const [simulatedAction, setSimulatedAction] = useState<"nenhuma" | "reagendado" | "liberado">("nenhuma");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Explanatory Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
              <RotateCcw className="w-3.5 h-3.5" />
              Flexibilidade Sem Atrito
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Mudou o horário? A agenda acompanha.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Imprevistos acontecem para você e para seu cliente. Com o AgendaFlow, alterações de horário não geram estresse e não deixam você no prejuízo.
            </p>

            <div className="mt-6">
              <button
                type="button"
                onClick={onOpenDemo}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 underline cursor-pointer"
              >
                Ver como configurar regras de cancelamento
              </button>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Liberação instantânea do horário vago
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Se alguém cancelar com antecedência, a vaga reaparece imediatamente na sua página pública para outro cliente reservar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Reagendamento autônomo pelo cliente
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    O próprio cliente clica no link do lembrete e escolhe uma nova data permitida pelas suas regras de antecedência.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Troca rápida de profissional ou sala
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Se um profissional faltar, você realoca os clientes para outro atendente em dois toques com aviso automático.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Demonstration Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Simulação de Gestão
                </span>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Sem mensagens manuais
                </span>
              </div>

              {/* Appointment card */}
              <div className="mt-5 p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Marcos Vinicius
                    </span>
                    <span className="text-[11px] text-slate-500">Corte + Barba (1h) • Lucas Silva</span>
                  </div>
                  <span className="font-mono text-xs font-bold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg">
                    Hoje • 15:00
                  </span>
                </div>

                {/* Status indicator */}
                {simulatedAction === "nenhuma" && (
                  <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 flex items-center justify-between">
                    <span>Cliente avisou que terá uma reunião no horário.</span>
                    <span className="text-[11px] font-semibold text-amber-600">Ação pendente</span>
                  </div>
                )}

                {simulatedAction === "reagendado" && (
                  <div className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Reagendado para amanhã às 10:00. O cliente recebeu a confirmação.</span>
                  </div>
                )}

                {simulatedAction === "liberado" && (
                  <div className="text-xs text-sky-800 bg-sky-50 p-2.5 rounded-xl border border-sky-200 flex items-center gap-2 animate-in fade-in">
                    <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Horário das 15:00 liberado na página! Disponível para outros clientes.</span>
                  </div>
                )}

                {/* Action buttons to test */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSimulatedAction("reagendado")}
                    className="flex-1 min-w-[120px] py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold text-center transition-colors cursor-pointer"
                  >
                    Reagendar horário
                  </button>
                  <button
                    type="button"
                    onClick={() => setSimulatedAction("liberado")}
                    className="flex-1 min-w-[120px] py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold text-center transition-colors cursor-pointer"
                  >
                    Liberar para outros
                  </button>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Regra de antecedência configurável:</strong> Você decide até quantas horas antes o cliente pode desmarcar (ex: no mínimo 2 horas de aviso prévio).
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
