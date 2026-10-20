"use client";

import { useState } from "react";
import { demoServices, demoProfessionals, demoAvailableSlots } from "@/data/services";
import {
  Smartphone,
  Check,
  ChevronRight,
  Clock,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

/**
 * FLUXO DO CLIENTE (MOBILE BOOKING FLOW)
 * Esta seção é uma das mais importantes da página.
 * Apresenta a experiência que o cliente final tem ao abrir o link do estabelecimento no smartphone.
 * Permite alternar entre as 4 etapas de agendamento de forma interativa.
 */

interface BookingFlowProps {
  onOpenDemo: () => void;
}

export function BookingFlow({ onOpenDemo }: BookingFlowProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState(demoServices[0]);
  const [selectedProf, setSelectedProf] = useState(demoProfessionals[0]);
  const [selectedSlot, setSelectedSlot] = useState("10:30");

  const stepsInfo = [
    {
      num: 1,
      title: "Escolhe o serviço",
      desc: "O cliente vê o cardápio completo com preço, duração e detalhes sem precisar perguntar 'quanto custa'.",
    },
    {
      num: 2,
      title: "Escolhe o profissional",
      desc: "Se o seu negócio tem mais de uma pessoa, o cliente escolhe seu atendente favorito ou a primeira vaga livre.",
    },
    {
      num: 3,
      title: "Escolhe o horário",
      desc: "Apenas horários realmente livres aparecem na tela. Impossível ter dois clientes marcados no mesmo minuto.",
    },
    {
      num: 4,
      title: "Confirmação instantânea",
      desc: "Em poucos toques, tudo confirmado com lembrete automático agendado no WhatsApp.",
    },
  ];

  return (
    <section id="fluxo-agendamento" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            Experiência do Seu Cliente
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Agendar pode ser simples.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Seus clientes não precisam baixar aplicativo nem criar senhas complicadas. Em menos de 1 minuto, direto do WhatsApp ou Instagram, a reserva está feita.
          </p>
        </div>

        {/* Interactive Layout: Left Step Navigation & Right Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Steps Accordion / Selector */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Passo a passo no celular do cliente:
            </div>

            {stepsInfo.map((st) => {
              const isActive = currentStep === st.num;
              const isPast = currentStep > st.num;

              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => setCurrentStep(st.num as 1 | 2 | 3 | 4)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? "bg-white border-blue-500 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/20"
                      : isPast
                      ? "bg-white/80 border-slate-200 hover:border-slate-300"
                      : "bg-white/50 border-slate-200/60 hover:bg-white text-slate-400"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : isPast
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {isPast ? <Check className="w-5 h-5 stroke-[2.5]" /> : st.num}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-base font-bold ${
                          isActive ? "text-slate-900" : isPast ? "text-slate-800" : "text-slate-600"
                        }`}
                      >
                        {st.title}
                      </h3>
                      {isActive && (
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                          Visualizando
                        </span>
                      )}
                    </div>
                    <p
                      className={`mt-1 text-xs sm:text-sm leading-relaxed ${
                        isActive ? "text-slate-600" : "text-slate-500"
                      }`}
                    >
                      {st.desc}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  const next = (currentStep % 4) + 1;
                  setCurrentStep(next as 1 | 2 | 3 | 4);
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                <span>Avançar próxima tela</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
              >
                Criar fluxo para o meu negócio
              </button>
            </div>
          </div>

          {/* RIGHT: High-fidelity Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] bg-slate-900 p-3 sm:p-4 rounded-[40px] shadow-2xl shadow-slate-400/30 border-4 border-slate-800">
              {/* Phone speaker & camera notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-700 rounded-full" />
                <div className="w-2.5 h-2.5 bg-slate-800 rounded-full ml-3 border border-slate-700" />
              </div>

              {/* Screen container */}
              <div className="relative bg-white rounded-[32px] overflow-hidden min-h-[560px] flex flex-col pt-8 pb-5 px-4 text-slate-900 border border-slate-100">
                {/* Mobile top app bar */}
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        agendaflow.com/blackhouse
                      </span>
                      <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                        Black House Barber
                      </h4>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  {/* Step dots */}
                  <div className="flex items-center gap-1.5 mt-2.5">
                    {[1, 2, 3, 4].map((stepIdx) => (
                      <div
                        key={stepIdx}
                        className={`h-1 rounded-full flex-1 transition-all ${
                          stepIdx <= currentStep ? "bg-blue-600" : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* DYNAMIC SCREEN CONTENT BASED ON currentStep */}
                <div className="flex-1 overflow-y-auto">
                  {/* STEP 1: Escolhe o serviço */}
                  {currentStep === 1 && (
                    <div className="space-y-2.5 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800">
                          1. Selecione o serviço:
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">Toque para escolher</span>
                      </div>

                      {demoServices.map((service) => {
                        const isSel = selectedService.id === service.id;
                        return (
                          <div
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                              isSel
                                ? "bg-blue-50/70 border-blue-500 ring-1 ring-blue-500 shadow-xs"
                                : "bg-white border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900">{service.name}</span>
                              <span className="text-xs font-extrabold text-blue-600 font-mono">
                                {service.price}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                              {service.description}
                            </p>
                            <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-400">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-slate-400" />
                                {service.duration}
                              </span>
                              {service.popular && (
                                <span className="bg-amber-100 text-amber-700 font-semibold px-1.5 rounded">
                                  Mais pedido
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* STEP 2: Escolhe o profissional */}
                  {currentStep === 2 && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800">
                          2. Escolha o profissional:
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">{selectedService.name}</span>
                      </div>

                      {demoProfessionals.map((prof) => {
                        const isSel = selectedProf.id === prof.id;
                        return (
                          <div
                            key={prof.id}
                            onClick={() => setSelectedProf(prof)}
                            className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                              isSel
                                ? "bg-blue-50/70 border-blue-500 ring-1 ring-blue-500 shadow-xs"
                                : "bg-white border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-9 h-9 rounded-full ${prof.avatarBg} text-white flex items-center justify-center font-bold text-xs`}
                              >
                                {prof.initials}
                              </div>
                              <div>
                                <h5 className="text-xs font-bold text-slate-900">{prof.name}</h5>
                                <p className="text-[10px] text-slate-500">{prof.role}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-bold text-amber-500 flex items-center justify-end gap-0.5">
                                ★ {prof.rating.toFixed(1)}
                              </div>
                              <span className="text-[9px] text-slate-400">({prof.reviewsCount} cortes)</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* STEP 3: Escolhe o horário */}
                  {currentStep === 3 && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800">
                          3. Escolha a data e hora:
                        </span>
                        <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          Terça, 21 Out
                        </span>
                      </div>

                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                        <span className="text-slate-600 font-medium">Com: {selectedProf.name}</span>
                        <span className="text-slate-400 text-[11px]">{selectedService.duration}</span>
                      </div>

                      <div className="text-[11px] font-semibold text-slate-600">
                        Horários disponíveis hoje:
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {demoAvailableSlots.slice(0, 9).map((slot) => {
                          const isSel = selectedSlot === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedSlot(slot)}
                              className={`py-2 px-1 rounded-lg text-xs font-mono font-bold transition-all text-center cursor-pointer ${
                                isSel
                                  ? "bg-blue-600 text-white shadow-xs"
                                  : "bg-white border border-slate-200 text-slate-800 hover:border-blue-400"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Confirma */}
                  {currentStep === 4 && (
                    <div className="space-y-3 animate-in fade-in duration-200 text-center py-1">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-1">
                        <Check className="w-7 h-7 stroke-[3]" />
                      </div>

                      <h4 className="text-base font-extrabold text-slate-900">
                        Agendamento Confirmado!
                      </h4>
                      <p className="text-[11px] text-slate-600 -mt-1">
                        Seu horário foi reservado e sincronizado na agenda do estabelecimento.
                      </p>

                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-left space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Serviço:</span>
                          <span className="font-bold text-slate-900">{selectedService.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Profissional:</span>
                          <span className="font-semibold text-slate-800">{selectedProf.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Data e Hora:</span>
                          <span className="font-bold text-blue-600">Terça, 21 Out às {selectedSlot}</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-slate-200">
                          <span className="text-slate-600">Valor estimado:</span>
                          <span className="font-bold text-slate-900 font-mono">{selectedService.price}</span>
                        </div>
                      </div>

                      <div className="p-2 bg-emerald-50 rounded-lg text-[10px] text-emerald-800 flex items-center gap-1.5 text-left">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Lembrete automático será enviado pelo WhatsApp 2 horas antes.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone Bottom action button */}
                <div className="pt-3 border-t border-slate-100">
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(((currentStep + 1) as 1 | 2 | 3 | 4))}
                      className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                    >
                      <span>Avançar para o Passo {currentStep + 1}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Simular novamente</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
