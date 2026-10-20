"use client";

import {
  Smartphone,
  Bell,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

/**
 * EXPERIÊNCIA MOBILE
 * Destaca que o AgendaFlow funciona perfeitamente no celular de qualquer profissional
 * e no navegador do cliente sem downloads pesados.
 */

interface MobileExperienceProps {
  onOpenDemo: () => void;
}

export function MobileExperience({ onOpenDemo }: MobileExperienceProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            100% Otimizado para Celulares
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sua agenda vai com você.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Acesse seus atendimentos pelo celular de onde estiver. Notificações rápidas, visual limpo e botões pensados para o toque do polegar.
          </p>
        </div>

        {/* Dual Mobile Mockup Showcase: Professional View & Client View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-center">
          {/* MOCKUP 1: Visão do Profissional no Bolso */}
          <div className="bg-slate-900 p-4 sm:p-5 rounded-[40px] shadow-2xl border-4 border-slate-800 max-w-[340px] mx-auto w-full">
            <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

            <div className="bg-slate-50 rounded-[28px] p-4 text-slate-900 space-y-3.5 min-h-[460px] flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase">
                      Painel do Profissional
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      Agenda de Terça
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    8 agendados
                  </span>
                </div>

                {/* Push Notification Card */}
                <div className="mt-3 p-3 bg-white rounded-2xl border border-blue-200/80 shadow-xs flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Bell className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] leading-tight">
                    <div className="font-bold text-slate-900">Novo agendamento recebido!</div>
                    <div className="text-slate-500 mt-0.5">Rodrigo Vieira marcou Corte para quinta às 09h.</div>
                  </div>
                </div>

                {/* Próximo atendimento destaque */}
                <div className="mt-3 p-3 bg-gradient-to-tr from-blue-600 to-sky-500 text-white rounded-2xl shadow-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-100 block">
                    Próximo atendimento em 25 min
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <h4 className="text-sm font-extrabold">Lucas Ribeiro</h4>
                    <span className="font-mono text-xs font-bold bg-white/20 px-2 py-0.5 rounded">
                      10:30
                    </span>
                  </div>
                  <span className="text-[11px] text-blue-100 block mt-0.5">
                    Corte Masculino • Lucas Silva
                  </span>
                </div>

                {/* Today timeline */}
                <div className="mt-3 space-y-1.5 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Linha do tempo
                  </span>

                  <div className="p-2 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                    <span className="font-mono font-bold text-slate-700 text-[11px]">12:00</span>
                    <span className="text-slate-500 text-[11px]">Almoço (bloqueado)</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">Intervalo</span>
                  </div>

                  <div className="p-2 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                    <span className="font-mono font-bold text-slate-900 text-[11px]">14:00</span>
                    <span className="font-semibold text-slate-900 text-[11px]">André Costa • Combo</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-semibold">Confirmado</span>
                  </div>

                  <div className="p-2 rounded-xl bg-sky-50 border border-sky-200 flex justify-between items-center">
                    <span className="font-mono font-bold text-sky-700 text-[11px]">16:00</span>
                    <span className="text-sky-800 text-[11px] font-medium">Horário vago</span>
                    <span className="text-[10px] bg-sky-200/60 text-sky-900 px-1.5 py-0.5 rounded font-semibold">Livre</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-center block text-slate-400 font-medium">
                  Toque para adicionar ou bloquear horários
                </span>
              </div>
            </div>
          </div>

          {/* MOCKUP 2: Visão do Cliente no WhatsApp Browser */}
          <div className="bg-slate-900 p-4 sm:p-5 rounded-[40px] shadow-2xl border-4 border-slate-800 max-w-[340px] mx-auto w-full">
            <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

            <div className="bg-white rounded-[28px] p-4 text-slate-900 space-y-3.5 min-h-[460px] flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase">
                      Link aberto no WhatsApp
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      Black House Barber
                    </h3>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>

                <div className="mt-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-900">
                    Escolha o melhor horário para você:
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Quinta-feira, 23 de Outubro
                  </p>
                </div>

                {/* Available slot grid */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl border border-blue-500 bg-blue-50/70 font-mono font-bold text-blue-700 shadow-2xs">
                    09:00 (Livre)
                  </div>
                  <div className="p-2.5 rounded-xl border border-slate-200 bg-white font-mono font-bold text-slate-800 hover:border-slate-300">
                    10:30 (Livre)
                  </div>
                  <div className="p-2.5 rounded-xl border border-slate-200 bg-white font-mono font-bold text-slate-800 hover:border-slate-300">
                    14:00 (Livre)
                  </div>
                  <div className="p-2.5 rounded-xl border border-slate-100 bg-slate-100 font-mono font-medium text-slate-400 line-through">
                    15:30 (Lotado)
                  </div>
                </div>

                {/* Bottom trust banner */}
                <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-[11px] text-emerald-800 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Sem aplicativo para baixar
                  </div>
                  <p className="text-[10px] text-emerald-700">
                    Abre direto no Chrome ou Safari com carregamento em menos de 1 segundo.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Reservar em 30 segundos</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature bullets below */}
        <div className="mt-14 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900">Leve e Ultrarrápido</h4>
            <p className="text-xs text-slate-600 mt-1">Carrega instantaneamente até em redes 3G e 4G.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900">Sem Senhas</h4>
            <p className="text-xs text-slate-600 mt-1">O cliente não precisa lembrar de logins complicados.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900">Notificações Claras</h4>
            <p className="text-xs text-slate-600 mt-1">Você sabe no mesmo segundo quando alguém agendou.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
