"use client";

import {
  CalendarPlus,
  Sliders,
  Share2,
  CalendarCheck2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface HowItWorksProps {
  onOpenDemo: () => void;
}

export function HowItWorks({ onOpenDemo }: HowItWorksProps) {
  const steps = [
    {
      num: "01",
      icon: CalendarPlus,
      title: "1. Crie sua agenda",
      desc: "Cadastre seus dias de trabalho, horários disponíveis e intervalos de descanso em poucos minutos.",
      highlight: "Seg a Sex • 09h às 18h",
    },
    {
      num: "02",
      icon: Sliders,
      title: "2. Configure seus serviços",
      desc: "Defina o tempo de atendimento, os valores e quanto tempo você precisa entre um cliente e outro.",
      highlight: "Duração, preço e folgas",
    },
    {
      num: "03",
      icon: Share2,
      title: "3. Compartilhe seu link",
      desc: "Coloque o link na bio do Instagram, configure na resposta automática do WhatsApp ou envie direto no chat.",
      highlight: "agendaflow.com/voce",
    },
    {
      num: "04",
      icon: CalendarCheck2,
      title: "4. Receba agendamentos",
      desc: "Os clientes marcam sozinhos e os horários aparecem organizados na sua agenda com notificações no celular.",
      highlight: "100% automático",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Simplicidade do Início ao Fim
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Como funciona para você e seu negócio
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Você não precisa entender nada de tecnologia. Em menos de 5 minutos tudo está pronto para receber agendamentos.
          </p>
        </div>

        {/* Steps composition: Horizontal in desktop with connecting line, vertical in mobile */}
        <div className="relative">
          {/* Subtle line across desktop steps */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-200 via-sky-200 to-emerald-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.num}
                  className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Number and Icon Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-blue-200 transition-colors">
                        {st.num}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-200/60">
                    <span className="inline-block text-[11px] font-semibold text-blue-700 bg-blue-100/60 px-2.5 py-1 rounded-lg">
                      {st.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA banner below */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold shadow-sm transition-all cursor-pointer"
          >
            <span>Criar minha agenda em poucos passos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
