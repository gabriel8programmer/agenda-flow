"use client";

import {
  MessageSquareX,
  CalendarCheck,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";

interface ProblemsProps {
  onOpenDemo: () => void;
}

export function Problems({ onOpenDemo }: ProblemsProps) {
  const painPoints = [
    {
      title: "'Tem horário pra hoje?'",
      desc: "Você para o atendimento no meio para pegar o celular e responder a mesma pergunta dezenas de vezes ao dia.",
    },
    {
      title: "Mensagens tarde da noite",
      desc: "Clientes mandam mensagem às 23h ou no domingo e esperam resposta imediata sobre horários da semana.",
    },
    {
      title: "Dois clientes no mesmo horário",
      desc: "Na correria, você anota um corte na cabeça e outro no papel. Resultado: dois clientes chegam ao mesmo tempo.",
    },
    {
      title: "Esquecimentos e clientes que somem",
      desc: "Sem lembrete automático, o cliente simplesmente esquece e você fica com 1 hora ociosa sem faturar.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            Problemas do Dia a Dia
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Seu WhatsApp não precisa ser sua agenda.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Enquanto você trabalha, seus clientes podem consultar horários disponíveis e fazer o próprio agendamento. Sem você precisar parar o que está fazendo.
          </p>
        </div>

        {/* Real Comparison Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: The WhatsApp Chaos */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
                    <MessageSquareX className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Como é hoje no WhatsApp manual
                    </h3>
                    <p className="text-xs text-slate-500">Muitas trocas de mensagens para 1 atendimento</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                  Desorganizado
                </span>
              </div>

              {/* Chat simulation */}
              <div className="mt-5 space-y-2.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                    C
                  </div>
                  <div className="bg-slate-100 text-slate-800 text-xs px-3 py-2 rounded-2xl rounded-tl-xs max-w-[80%]">
                    Oi! Tem horário pra cortar hoje às 16h?
                  </div>
                </div>

                <div className="flex items-start justify-end gap-2">
                  <div className="bg-emerald-100 text-emerald-950 text-xs px-3 py-2 rounded-2xl rounded-tr-xs max-w-[80%]">
                    Oi! Às 16h já tá ocupado. Tenho só às 18h ou amanhã às 10h.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                    C
                  </div>
                  <div className="bg-slate-100 text-slate-800 text-xs px-3 py-2 rounded-2xl rounded-tl-xs max-w-[80%]">
                    (3 horas depois...) Putz, às 18h não consigo. E quinta-feira?
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {painPoints.map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{point.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70 text-xs text-rose-700 font-medium">
              Resultado: até 2 horas por dia perdidas apenas digitando mensagens.
            </div>
          </div>

          {/* RIGHT: The Peace with AgendaFlow */}
          <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/50 border border-blue-200/90 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-blue-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                    <CalendarCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Com o AgendaFlow
                    </h3>
                    <p className="text-xs text-slate-600">Autonomia para o cliente, paz para você</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Automático
                </span>
              </div>

              {/* Solution card */}
              <div className="mt-5 bg-white p-4 rounded-2xl border border-blue-200/70 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-800">
                    Mensagem automática enviada:
                  </span>
                  <span className="text-[10px] text-blue-600 font-mono">1 segundo</span>
                </div>
                <p className="text-xs text-slate-700 italic">
                  &ldquo;Olá! Para ver todos os horários livres e marcar seu serviço em 30 segundos, basta acessar: <strong className="text-blue-600 not-italic">agendaflow.com/sua-agenda</strong>&rdquo;
                </p>
              </div>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Disponibilidade 24 horas por dia
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      O cliente marca no domingo à noite ou no almoço sem precisar esperar sua resposta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Zero conflito de agenda
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Assim que um horário é escolhido, ele desaparece automaticamente da lista para os outros.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Lembretes automáticos anti-esquecimento
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Mensagem cordial de confirmação enviada antes do atendimento, reduzindo faltas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Você no controle total
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Bloqueie intervalos de almoço, folgas ou compromissos com apenas um toque no celular.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between">
              <span className="text-xs text-blue-900 font-semibold">
                Mais foco em atender com excelência
              </span>
              <button
                type="button"
                onClick={onOpenDemo}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 underline cursor-pointer"
              >
                Experimentar agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
