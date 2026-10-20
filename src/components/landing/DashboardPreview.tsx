"use client";

import {
  TrendingUp,
  Calendar,
  Users,
  Clock,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

/**
 * DASHBOARD DEMONSTRATIVO
 * Dados demonstrativos para projeto de portfólio.
 * Apresenta métricas visuais fictícias para mostrar como o gestor ou profissional
 * acompanha o ritmo do seu negócio em tempo real.
 */

interface DashboardPreviewProps {
  onOpenDemo: () => void;
}

export function DashboardPreview({ onOpenDemo }: DashboardPreviewProps) {
  // Dados demonstrativos fictícios:
  const metrics = [
    {
      label: "Hoje",
      value: "8",
      sub: "agendamentos confirmados",
      icon: Calendar,
      color: "text-blue-600",
      bg: "bg-blue-50",
      trend: "+2 vs ontem",
    },
    {
      label: "Esta semana",
      value: "34",
      sub: "atendimentos na grade",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      trend: "Quase cheia",
    },
    {
      label: "Ocupação",
      value: "78%",
      sub: "das vagas preenchidas",
      icon: TrendingUp,
      color: "text-amber-600",
      bg: "bg-amber-50",
      trend: "+12% esse mês",
    },
    {
      label: "Próximo atendimento",
      value: "14:30",
      sub: "Ana Ribeiro • Nutrição",
      icon: Clock,
      color: "text-coral-600",
      bg: "bg-rose-50",
      trend: "Em 45 min",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Visão Geral em Tempo Real
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Controle simples do seu dia sem complicação
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Acompanhe quantos clientes você vai atender hoje, a taxa de ocupação da sua semana e o próximo compromisso.
          </p>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </span>
                    <div className={`w-8 h-8 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                    {item.value}
                  </div>

                  <p className="text-xs text-slate-600 mt-1 font-medium">{item.sub}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    {item.trend}
                  </span>
                  <span className="text-slate-400">Tempo real</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini schedule snapshot for today */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Atendimentos de hoje (Visão do Painel)
              </h3>
              <p className="text-xs text-slate-500">
                8 agendamentos • 2 intervalos programados
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenDemo}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 underline self-start sm:self-auto cursor-pointer"
            >
              Ver agenda completa
            </button>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-blue-700">14:30</span>
                <div>
                  <div className="font-bold text-slate-900">Ana Ribeiro</div>
                  <div className="text-[11px] text-slate-500">Nutrição Clínica</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200">
                A seguir
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-slate-800">16:00</span>
                <div>
                  <div className="font-bold text-slate-900">Carlos Eduardo</div>
                  <div className="text-[11px] text-slate-500">Avaliação Física</div>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Confirmado
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-slate-800">17:30</span>
                <div>
                  <div className="font-bold text-slate-900">Gabriel Martins</div>
                  <div className="text-[11px] text-slate-500">Retorno</div>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Confirmado
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 mt-4 text-center">
            * Dados demonstrativos para projeto de portfólio.
          </p>
        </div>
      </div>
    </section>
  );
}
