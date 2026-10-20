"use client";

import { useState } from "react";
import { pricingPlans, PricingPlan } from "@/data/plans";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

/**
 * SEÇÃO DE PREÇOS E PLANOS
 * Valores fictícios utilizados exclusivamente para apresentação do projeto.
 * Não há processamento financeiro real.
 */

interface PricingProps {
  onOpenDemo: () => void;
}

export function Pricing({ onOpenDemo }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"mensal" | "anual">("anual");

  return (
    <section id="precos" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Planos Transparentes
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Invista menos do que o valor de um único corte ou consulta
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Comece a organizar seus horários hoje mesmo. Sem taxas escondidas, sem surpresas no fim do mês.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              type="button"
              onClick={() => setBillingCycle("mensal")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === "mensal"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Cobrança Mensal
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("anual")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                billingCycle === "anual"
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Cobrança Anual</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  billingCycle === "anual"
                    ? "bg-white/20 text-white"
                    : "bg-emerald-100 text-emerald-800"
                }`}
              >
                Economize 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan: PricingPlan) => {
            const price = billingCycle === "anual" ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  plan.highlighted
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10 ring-2 ring-blue-500 transform lg:-translate-y-2"
                    : "bg-white text-slate-900 border border-slate-200 shadow-2xs hover:shadow-md"
                }`}
              >
                {/* Badge for highlighted plan */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold bg-blue-500 text-white shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`text-xl font-extrabold ${
                        plan.highlighted ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.name}
                    </h3>
                  </div>

                  <p
                    className={`text-xs min-h-[36px] ${
                      plan.highlighted ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-slate-200/40">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-slate-400">R$</span>
                      <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
                        {price}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          plan.highlighted ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        /mês
                      </span>
                    </div>

                    <span
                      className={`block text-[11px] mt-1 ${
                        plan.highlighted ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {billingCycle === "anual"
                        ? "Cobrado anualmente (2 meses grátis)"
                        : "Cobrado mensalmente, cancele quando quiser"}
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="mt-6 space-y-3">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block ${
                        plan.highlighted ? "text-slate-400" : "text-slate-400"
                      }`}
                    >
                      O que está incluso:
                    </span>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.highlighted ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <span className={plan.highlighted ? "text-slate-200" : "text-slate-700"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/30">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      plan.highlighted
                        ? "bg-blue-500 hover:bg-blue-400 text-white shadow-md shadow-blue-500/25"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p
                    className={`text-[10px] text-center mt-3 ${
                      plan.highlighted ? "text-slate-400" : "text-slate-400"
                    }`}
                  >
                    Ideal para: {plan.idealFor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer note as required */}
        <div className="mt-10 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>Valores fictícios utilizados exclusivamente para apresentação do projeto de portfólio.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
