"use client";

import { testimonials, TestimonialItem } from "@/data/testimonials";
import { Star, Sparkles, Building2 } from "lucide-react";

/**
 * PROVA SOCIAL
 * Depoimentos fictícios utilizados exclusivamente para fins de demonstração
 * comercial de produto no portfólio.
 */

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Experiência Real
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quem começou a usar não volta para o WhatsApp
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Veja como profissionais de diferentes áreas ganharam horas de tranquilidade no seu dia a dia.
          </p>
        </div>

        {/* Testimonials 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t: TestimonialItem) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Metric pill & Stars */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${t.badgeColor}`}>
                    {t.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-slate-500">{t.role}</p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <Building2 className="w-2.5 h-2.5" />
                    {t.business} • {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-slate-400">
          * Depoimentos fictícios para fins de apresentação de portfólio.
        </p>
      </div>
    </section>
  );
}
