"use client";

import { useState } from "react";
import {
  Link2,
  Clock,
  Users,
  Ban,
  Bell,
  Check,
  Smartphone,
  Sparkles,
} from "lucide-react";

/**
 * RECURSOS PRINCIPAIS COM COMPOSIÇÃO VARIADA
 * Evita o padrão repetitivo de "6 cards idênticos com ícone no círculo".
 * Usa blocos visuais assimétricos com elementos reais de interface.
 */

interface FeaturesProps {
  onOpenDemo: () => void;
}

export function Features({ onOpenDemo }: FeaturesProps) {
  const [calendarView, setCalendarView] = useState<"dia" | "semana" | "mes">("semana");
  const [lunchBlocked, setLunchBlocked] = useState(true);

  return (
    <section id="recursos" className="py-16 md:py-24 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Recursos Essenciais
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tudo o que seu negócio precisa para rodar no piloto automático
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Ferramentas pensadas para quem não tem tempo a perder com configurações complicadas.
          </p>
        </div>

        {/* BENTO-STYLE ASYMMETRICAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* FEATURE 1 (Large - 7 cols): Agenda online com alternância de visualização */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Visualização Flexível
                </span>
                {/* View switcher demo */}
                <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-medium">
                  {(["dia", "semana", "mes"] as const).map((view) => (
                    <button
                      key={view}
                      type="button"
                      onClick={() => setCalendarView(view)}
                      className={`px-2.5 py-1 rounded-lg capitalize transition-all cursor-pointer ${
                        calendarView === view
                          ? "bg-white text-slate-900 shadow-2xs font-bold"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      {view}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Agenda online diária, semanal e mensal
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Alterne entre a visão focada do dia a dia ou o panorama da semana e do mês com apenas um toque. Veja quem vem hoje, quanto tempo livre você tem e onde encaixar novas tarefas.
              </p>

              {/* Dynamic UI snippet depending on toggle */}
              <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                {calendarView === "dia" && (
                  <div className="space-y-2 text-xs">
                    <div className="font-bold text-slate-700 mb-2">Hoje • 6 atendimentos agendados</div>
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                      <span className="font-mono font-bold text-blue-600">09:00</span>
                      <span className="font-semibold text-slate-900">Lucas Ribeiro • Corte</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[11px]">Confirmado</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                      <span className="font-mono font-bold text-blue-600">10:30</span>
                      <span className="font-semibold text-slate-900">Rafael Mendes • Barba</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[11px]">Confirmado</span>
                    </div>
                  </div>
                )}
                {calendarView === "semana" && (
                  <div className="grid grid-cols-5 gap-2 text-center text-xs">
                    {["Seg", "Ter", "Qua", "Qui", "Sex"].map((d, i) => (
                      <div key={d} className={`p-2 rounded-xl border ${i === 1 ? "bg-blue-50 border-blue-200" : "bg-white border-slate-200"}`}>
                        <div className="font-bold text-slate-800">{d}</div>
                        <div className="text-[11px] text-slate-500 mt-1">{i === 1 ? "6 agend." : `${4 + i} agend.`}</div>
                        <div className="mt-1 h-1.5 rounded-full bg-blue-500 mx-auto w-3/4" />
                      </div>
                    ))}
                  </div>
                )}
                {calendarView === "mes" && (
                  <div className="text-xs text-slate-600 flex items-center justify-between">
                    <span>Taxa de ocupação média de Outubro:</span>
                    <span className="font-bold text-blue-600 font-mono text-sm">78% de vagas preenchidas</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FEATURE 2 (Medium - 5 cols): Página de agendamento & Link próprio */}
          <div className="md:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral-600">
                Página Própria
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Seu link exclusivo para bio e WhatsApp
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Tenha um endereço limpo e elegante com o nome do seu negócio para divulgar no Instagram, site ou cartões digitais.
              </p>

              {/* URL pill visual */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200/80">
                <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                  <Link2 className="w-3.5 h-3.5 text-blue-600" />
                  Pronto para copiar e colar
                </div>
                <div className="font-mono text-xs font-bold text-slate-900 bg-white px-3 py-2 rounded-xl border border-blue-200/70 truncate flex items-center justify-between">
                  <span>agendaflow.com/seunegocio</span>
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="text-[10px] bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded-md font-sans transition-colors cursor-pointer"
                  >
                    Personalizar
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Sem anúncios na página do seu cliente</span>
            </div>
          </div>

          {/* FEATURE 3 (Medium - 4 cols): Serviços personalizados */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Duração e valores por serviço
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Defina o tempo de cada procedimento e adicione um intervalo de respiro automático entre eles (ex: 10 min para limpar a bancada).
              </p>
            </div>

            <div className="mt-5 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
              <div className="flex justify-between font-medium">
                <span>Corte Masculino</span>
                <span className="font-mono font-bold text-slate-900">45 min • R$ 50</span>
              </div>
              <div className="text-[11px] text-slate-500">
                +10 min de intervalo para preparação
              </div>
            </div>
          </div>

          {/* FEATURE 4 (Medium - 4 cols): Múltiplos profissionais */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Múltiplas agendas em um só lugar
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cadastre sócios, atendentes ou salas diferentes. Cada pessoa tem sua própria grade de horários sem misturar as rotinas.
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">LS</div>
                <div className="w-7 h-7 rounded-full bg-coral-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">RM</div>
                <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">MC</div>
              </div>
              <span className="text-xs text-slate-600 font-medium">3 profissionais ativos</span>
            </div>
          </div>

          {/* FEATURE 5 (Medium - 4 cols): Bloqueio de horários com 1 clique */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
                <Ban className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Bloqueio fácil de horários
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Precisa sair para o médico ou tirar a tarde de folga? Bloqueie com um clique e nenhum cliente conseguirá marcar naquele período.
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <span className="font-semibold text-slate-700">Intervalo de almoço (12h - 13h)</span>
              <button
                type="button"
                onClick={() => setLunchBlocked(!lunchBlocked)}
                className={`px-2 py-1 rounded-md text-[10px] font-bold transition-colors cursor-pointer ${
                  lunchBlocked ? "bg-rose-100 text-rose-800" : "bg-slate-200 text-slate-700"
                }`}
              >
                {lunchBlocked ? "Bloqueado" : "Liberado"}
              </button>
            </div>
          </div>

          {/* FEATURE 6 (Full - 12 cols): Lembretes inteligentes para evitar faltas */}
          <div className="md:col-span-12 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-600 text-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-blue-500/15 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-3">
                <Bell className="w-3.5 h-3.5" />
                Redução de Faltas
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Lembretes automáticos que seus clientes realmente leem
              </h3>
              <p className="mt-2 text-sm text-blue-100 leading-relaxed">
                Envie avisos automáticos e cordiais horas antes do atendimento. O cliente pode confirmar com um clique ou avisar com antecedência se precisar reagendar.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shrink-0 max-w-sm w-full">
              <div className="text-xs font-semibold text-sky-200 mb-1 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                Exemplo de lembrete automático:
              </div>
              <div className="bg-white text-slate-900 text-xs p-3 rounded-xl shadow-xs space-y-1">
                <p className="font-medium text-slate-800">
                  &ldquo;Olá, Lucas! Lembra do seu corte hoje às 10:30 na Black House Barber? Estamos te esperando!&rdquo;
                </p>
                <div className="flex gap-2 pt-1">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Confirmar presença</span>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Reagendar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
