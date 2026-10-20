"use client";

import { useState } from "react";
import { weeklySchedule, Appointment } from "@/data/appointments";
import {
  CalendarDays,
  Clock,
  User,
  Plus,
  Filter,
  CheckCircle2,
  AlertCircle,
  Scissors,
} from "lucide-react";

/**
 * MOCKUP PRINCIPAL DA AGENDA SEMANAL
 * Dados demonstrativos para projeto de portfólio.
 * Demonstra a interface visual de organização semanal para profissionais e pequenos estabelecimentos.
 */

interface CalendarPreviewProps {
  onOpenDemo: () => void;
}

export function CalendarPreview({ onOpenDemo }: CalendarPreviewProps) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [statusFilter, setStatusFilter] = useState<string>("todos");

  const currentDay = weeklySchedule[activeDayIndex] || weeklySchedule[0];

  const filteredAppointments = currentDay.appointments.filter((app: Appointment) => {
    if (statusFilter === "todos") return true;
    return app.status === statusFilter;
  });

  const getStatusBadge = (status: Appointment["status"]) => {
    switch (status) {
      case "confirmado":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Confirmado
          </span>
        );
      case "em_andamento":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Em andamento
          </span>
        );
      case "disponivel":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
            <Clock className="w-3 h-3 text-sky-600" />
            Disponível
          </span>
        );
      case "reagendado":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <AlertCircle className="w-3 h-3 text-amber-600" />
            Bloqueado / Reagendado
          </span>
        );
    }
  };

  return (
    <section id="mockup-agenda" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <CalendarDays className="w-3.5 h-3.5" />
            Interface do Profissional
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tudo o que acontece na sua semana em uma tela limpa
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Horários, clientes, serviços e status sincronizados automaticamente. Esqueça rasuras em cadernos e planilhas confusas.
          </p>
        </div>

        {/* Mockup Container */}
        <div className="mt-12 bg-slate-50/70 border border-slate-200 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl shadow-slate-100">
          {/* Top Controls: Day Tabs & Filter */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            {/* Days switcher */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {weeklySchedule.map((day, idx) => {
                const isActive = idx === activeDayIndex;
                return (
                  <button
                    key={day.dayName}
                    type="button"
                    onClick={() => setActiveDayIndex(idx)}
                    className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer flex flex-col items-center sm:items-start ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                        : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80"
                    }`}
                  >
                    <span>{day.shortDay}</span>
                    <span className={`text-[10px] font-normal ${isActive ? "text-blue-100" : "text-slate-400"}`}>
                      {day.date}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Filter tags & Add mock button */}
            <div className="flex items-center gap-2 self-start lg:self-auto flex-wrap">
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs">
                <span className="text-slate-600 px-2 flex items-center gap-1 font-medium">
                  <Filter className="w-3 h-3" />
                  Filtrar:
                </span>
                <button
                  type="button"
                  onClick={() => setStatusFilter("todos")}
                  className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer transition-colors ${
                    statusFilter === "todos" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Todos
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter("confirmado")}
                  className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer transition-colors ${
                    statusFilter === "confirmado" ? "bg-emerald-600 text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Confirmados
                </button>
                <button
                  type="button"
                  onClick={() => setStatusFilter("disponivel")}
                  className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer transition-colors ${
                    statusFilter === "disponivel" ? "bg-sky-600 text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Livres
                </button>
              </div>

              <button
                type="button"
                onClick={onOpenDemo}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-blue-600" />
                Novo Agendamento
              </button>
            </div>
          </div>

          {/* Schedule list */}
          <div className="mt-6 space-y-3">
            {filteredAppointments.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
                Nenhum compromisso com este filtro para {currentDay.dayName}.
              </div>
            ) : (
              filteredAppointments.map((item) => {
                const isAvailable = item.status === "disponivel";
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border transition-all ${
                      isAvailable
                        ? "bg-white/60 border-dashed border-sky-300 hover:border-sky-400"
                        : item.status === "em_andamento"
                        ? "bg-blue-50/40 border-blue-200 shadow-xs"
                        : "bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs"
                    }`}
                  >
                    {/* Left: Time and client details */}
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Time pill */}
                      <div className="flex sm:flex-col items-center justify-center min-w-[72px] px-3 py-2 bg-slate-100 rounded-xl font-mono text-slate-900 font-bold text-sm shrink-0">
                        <Clock className="w-3.5 h-3.5 text-slate-500 mr-1.5 sm:mr-0 sm:mb-1" />
                        <span>{item.time}</span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3
                            className={`font-bold text-sm sm:text-base ${
                              isAvailable ? "text-slate-500 font-normal italic" : "text-slate-900"
                            }`}
                          >
                            {item.client}
                          </h3>
                          {getStatusBadge(item.status)}
                        </div>

                        <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500 flex-wrap">
                          <span className="flex items-center gap-1 font-medium text-slate-700">
                            <Scissors className="w-3.5 h-3.5 text-blue-500" />
                            {item.service}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-slate-400" />
                            Profissional: {item.professional}
                          </span>
                          <span>•</span>
                          <span>Duração: {item.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Price & Quick Action */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                      {item.price !== "-" && (
                        <span className="text-sm font-bold text-slate-900 font-mono">
                          {item.price}
                        </span>
                      )}

                      {isAvailable ? (
                        <button
                          type="button"
                          onClick={onOpenDemo}
                          className="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                        >
                          Reservar horário
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={onOpenDemo}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                        >
                          Ver detalhes
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer note in component */}
          <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
            <span>
              Mostrando {filteredAppointments.length} horários para {currentDay.dayName} ({currentDay.date})
            </span>
            <span className="text-slate-600 font-medium">
              * Dados demonstrativos para projeto de portfólio.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
