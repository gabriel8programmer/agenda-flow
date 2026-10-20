"use client";

import { useState } from "react";
import {
  CalendarCheck2,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Bell,
  Check,
  User,
  Share2,
  Smartphone,
} from "lucide-react";

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const [selectedSlot, setSelectedSlot] = useState("14:00");
  const [booked, setBooked] = useState(false);

  const demoSlots = [
    { time: "09:00", status: "ocupado", client: "Lucas R." },
    { time: "10:30", status: "ocupado", client: "Rafael M." },
    { time: "14:00", status: "livre" },
    { time: "15:30", status: "livre" },
    { time: "17:00", status: "ocupado", client: "André C." },
  ];

  const handleSlotClick = (time: string) => {
    setSelectedSlot(time);
    setBooked(true);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28">
      {/* Subtle organic background glows without neon gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-60">
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute top-16 right-1/4 w-80 h-80 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute top-32 right-1/3 w-64 h-64 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top pill badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-semibold text-blue-800 tracking-wide">
              Chega de perder tempo marcando no WhatsApp
            </span>
            <span className="hidden sm:inline-block text-[11px] font-medium text-blue-600 bg-white px-2 py-0.5 rounded-full border border-blue-200">
              100% online
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Sua agenda organizada.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700">
              Seus clientes marcando sozinhos.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Compartilhe sua agenda, mostre os horários disponíveis e deixe seus clientes escolherem quando querem ser atendidos. Sem trocas infinitas de mensagens.
          </p>

          {/* Action buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <CalendarCheck2 className="w-5 h-5" />
              <span>Criar minha agenda</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>

            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <span>Ver como funciona</span>
            </a>
          </div>

          {/* Microcopy */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
              Configuração simples
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-blue-600 stroke-[2.2]" />
              Funciona no celular
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Share2 className="w-4 h-4 text-coral-500 stroke-[2.2]" />
              Link próprio de agendamento
            </span>
          </div>
        </div>

        {/* Orbiting visual composition: central schedule card + floating cards */}
        <div className="mt-12 lg:mt-16 relative max-w-5xl mx-auto">
          {/* FLOATING CARD 1: Top-Left New Booking Notification */}
          <div className="hidden lg:flex absolute -top-6 -left-6 z-20 items-center gap-3 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100 animate-bounce [animation-duration:5s]">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5" />
            </div>
            <div className="text-left pr-2">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900">Novo agendamento!</span>
                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-1.5 py-0.2 rounded-full">
                  Confirmado
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Lucas Ribeiro • Terça 10:30 (Corte)
              </p>
            </div>
          </div>

          {/* FLOATING CARD 2: Right Status Pill */}
          <div className="hidden lg:flex absolute top-1/4 -right-8 z-20 items-center gap-3 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left pr-2">
              <span className="text-xs font-bold text-slate-900 block">Horário liberado</span>
              <span className="text-xs text-slate-600">Terça às 14:00 ficou disponível</span>
            </div>
          </div>

          {/* FLOATING CARD 3: Bottom-Left WhatsApp Link Preview */}
          <div className="hidden md:flex absolute -bottom-6 -left-4 z-20 items-center gap-3 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold text-xs">
              WA
            </div>
            <div className="text-left text-xs">
              <span className="text-slate-500 block text-[10px]">Link na bio e WhatsApp</span>
              <span className="font-mono font-semibold text-blue-600">agendaflow.com/blackhouse</span>
            </div>
          </div>

          {/* CENTRAL INTERACTIVE SCHEDULE COMPONENT */}
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-slate-200/70 border border-slate-200/80 overflow-hidden">
            {/* Window bar */}
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="ml-3 text-xs font-semibold text-slate-500 flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  agendaflow.com/blackhouse-barber
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 hidden sm:inline-block">
                  Agenda Aberta • Outubro
                </span>
              </div>
            </div>

            {/* Inner Interactive Schedule Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Day header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md">
                      Visão Semanal
                    </span>
                    <span className="text-xs text-slate-500">Terça-feira, 21 de Outubro</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mt-1">
                    Atendimentos de hoje — Barbearia Black House
                  </h2>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    Lucas Silva (Barbeiro)
                  </span>
                </div>
              </div>

              {/* Slot row demo */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Clique em um horário para simular a escolha do cliente:
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Tempo real
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {demoSlots.map((slot) => {
                    const isOccupied = slot.status === "ocupado";
                    const isSelected = selectedSlot === slot.time;

                    return (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => !isOccupied && handleSlotClick(slot.time)}
                        disabled={isOccupied}
                        className={`relative p-3.5 rounded-2xl border text-left transition-all text-xs font-medium cursor-pointer ${
                          isOccupied
                            ? "bg-slate-50 border-slate-200/80 text-slate-400 cursor-not-allowed opacity-80"
                            : isSelected
                            ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/30 scale-[1.02]"
                            : "bg-white hover:bg-blue-50/50 border-slate-200 text-slate-800 hover:border-blue-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span
                            className={`font-mono font-bold text-sm ${
                              isSelected ? "text-white" : isOccupied ? "text-slate-400" : "text-slate-900"
                            }`}
                          >
                            {slot.time}
                          </span>
                          {isOccupied ? (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-200/70 text-slate-600 font-semibold">
                              Ocupado
                            </span>
                          ) : isSelected ? (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20 text-white font-semibold">
                              Escolhido
                            </span>
                          ) : (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold">
                              Disponível
                            </span>
                          )}
                        </div>

                        <div className="truncate">
                          {isOccupied ? (
                            <span className="text-[11px] text-slate-500 font-medium">
                              {slot.client} (Reservado)
                            </span>
                          ) : isSelected ? (
                            <span className="text-[11px] text-blue-100 font-medium">
                              Pronto para reservar
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-500 font-medium">
                              Toque para reservar
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom interactive feedback banner */}
              {booked && (
                <div className="mt-5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-emerald-950 block">
                        Horário das {selectedSlot} selecionado pelo cliente!
                      </span>
                      <span className="text-emerald-700">
                        O cliente confirma em 2 toques e o horário é bloqueado automaticamente na sua agenda.
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onOpenDemo}
                    className="shrink-0 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Testar na minha agenda
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
