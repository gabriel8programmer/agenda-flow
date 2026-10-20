"use client";

import { useState } from "react";
import { faqItems, FAQItem } from "@/data/faq";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

/**
 * SEÇÃO DE PERGUNTAS FREQUENTES (FAQ)
 * Implementa accordion acessível com WAI-ARIA, suporte a teclado e foco visível.
 */

interface FAQProps {
  onOpenDemo: () => void;
}

export function FAQ({ onOpenDemo }: FAQProps) {
  // Let the first question be opened by default for better user engagement
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tudo o que você precisa saber antes de criar sua agenda no AgendaFlow.
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="space-y-3">
          {faqItems.map((item: FAQItem) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-50/50 transition-colors"
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer text-sm sm:text-base"
                >
                  <span>{item.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-500 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600 border-blue-200" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions helper box */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-50/60 border border-blue-200/70 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-slate-900">Ainda ficou com alguma dúvida?</h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Nossa equipe está disponível para tirar dúvidas sobre o funcionamento do produto.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar com o suporte</span>
          </button>
        </div>
      </div>
    </section>
  );
}
