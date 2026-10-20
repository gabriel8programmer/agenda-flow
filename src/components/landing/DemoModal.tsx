"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, Sparkles, Calendar, Clock, Copy, Check } from "lucide-react";

/**
 * MODAL DEMONSTRATIVO PARA PROJETO DE PORTFÓLIO
 * Simula a criação de uma conta e agenda sem backend real.
 */

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBusinessName?: string;
}

export function DemoModal({ isOpen, onClose, initialBusinessName = "Barbearia Black House" }: DemoModalProps) {
  const [businessName, setBusinessName] = useState(initialBusinessName);
  const [category, setCategory] = useState("Beleza e Estética");
  const [step, setStep] = useState<"form" | "success">("form");
  const [copied, setCopied] = useState(false);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setStep("form");
    setCopied(false);
    onClose();
  };

  const slug =
    businessName
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "minha-agenda";

  const handleCopy = () => {
    navigator.clipboard?.writeText(`agendaflow.com/${slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="h-2 bg-gradient-to-r from-blue-500 via-sky-400 to-coral-400" />

        <div className="p-6 sm:p-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Fechar janela"
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {step === "form" ? (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  Demonstração Rápida
                </span>
                <span className="text-xs text-slate-500">Sem cartão de crédito</span>
              </div>

              <h3 id="modal-title" className="text-2xl font-bold text-slate-900 tracking-tight">
                Crie sua agenda em 30 segundos
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Veja como seu link de agendamento fica pronto instantaneamente para compartilhar com seus clientes.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="bizName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Nome do seu negócio ou seu nome
                  </label>
                  <input
                    id="bizName"
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Ex: Studio Mariana Costa ou Barbearia Silva"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="bizCategory" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Área de atuação
                  </label>
                  <select
                    id="bizCategory"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-white"
                  >
                    <option>Beleza e Barbearia</option>
                    <option>Saúde e Consultórios</option>
                    <option>Fitness e Personal Trainer</option>
                    <option>Aulas e Educação</option>
                    <option>Consultoria e Serviços</option>
                    <option>Estúdio e Fotografia</option>
                  </select>
                </div>

                {/* Live link preview */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="block text-xs font-medium text-slate-500 mb-1">
                    Seu link público será:
                  </span>
                  <div className="flex items-center font-mono text-sm text-blue-600 font-semibold truncate">
                    <span>agendaflow.com/</span>
                    <span className="text-slate-900 bg-blue-100/60 px-1 rounded">{slug}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
                  >
                    <span>Gerar minha página de demonstração</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-center text-slate-500">
                  * Interface demonstrativa de portfólio. Não requer cadastro real ou dados de pagamento.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-2 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Sua agenda foi criada!
              </h3>
              <p className="mt-1 text-sm text-slate-600 max-w-sm mx-auto">
                Este seria o link que você compartilharia no seu WhatsApp e Instagram para seus clientes marcarem sozinhos:
              </p>

              {/* Link box */}
              <div className="mt-5 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-3">
                <div className="text-left font-mono text-xs sm:text-sm text-slate-800 truncate font-semibold">
                  agendaflow.com/{slug}
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors shrink-0 shadow-sm cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar link</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-left">
                <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    Horários configurados
                  </div>
                  <p className="text-[11px] text-blue-700">
                    Seg a Sex, 09:00 às 18:00 com intervalos automáticos de 15 min.
                  </p>
                </div>
                <div className="p-3 bg-amber-50/70 border border-amber-100 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    Lembretes ativos
                  </div>
                  <p className="text-[11px] text-amber-700">
                    Avisos 2h antes do atendimento enviados diretamente pelo WhatsApp.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => {
                    const el = document.getElementById("fluxo-agendamento");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    handleClose();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <span>Ver experiência do cliente</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleClose}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Fechar demonstração
                </button>
              </div>

              <p className="mt-3 text-[11px] text-slate-500">
                Projeto fictício desenvolvido para fins de portfólio.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
