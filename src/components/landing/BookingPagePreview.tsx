"use client";

import { useState } from "react";
import {
  Link as LinkIcon,
  Copy,
  Check,
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Sparkles,
  Scissors,
} from "lucide-react";

interface BookingPagePreviewProps {
  onOpenDemo: () => void;
}

export function BookingPagePreview({ onOpenDemo }: BookingPagePreviewProps) {
  const [businessSlug, setBusinessSlug] = useState("blackhouse");
  const [copied, setCopied] = useState(false);

  const cleanSlug =
    businessSlug
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "meu-negocio";

  const handleCopy = () => {
    navigator.clipboard?.writeText(`agendaflow.com/${cleanSlug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Context & Interactive URL bar */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
              <LinkIcon className="w-3.5 h-3.5" />
              Sua Identidade
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Uma página própria para o seu estabelecimento
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Você ganha um link exclusivo para colocar na bio do Instagram, no botão do WhatsApp e nos seus cartões. Seus clientes abrem sem precisar instalar nada.
            </p>

            {/* Interactive Slug Playground */}
            <div className="mt-8 p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <label htmlFor="testSlug" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Simule como ficaria o seu link:
              </label>

              <div className="flex flex-col sm:flex-row items-stretch gap-2">
                <div className="flex-1 flex items-center bg-white px-3.5 py-2.5 rounded-xl border border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                  <span className="text-xs text-slate-400 font-mono select-none">
                    agendaflow.com/
                  </span>
                  <input
                    id="testSlug"
                    type="text"
                    value={businessSlug}
                    onChange={(e) => setBusinessSlug(e.target.value)}
                    placeholder="nome-do-negocio"
                    className="flex-1 text-xs font-mono font-bold text-slate-900 focus:outline-none ml-0.5"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar link</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Digite acima para ver a página à direita se atualizando instantaneamente.</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-colors cursor-pointer"
              >
                <span>Criar minha agenda agora</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Mobile View of the Business Page */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[360px] bg-slate-900 p-3 sm:p-4 rounded-[40px] shadow-2xl border-4 border-slate-800">
              {/* Phone speaker */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

              {/* Inner screen */}
              <div className="bg-white rounded-[28px] overflow-hidden p-4 sm:p-5 text-slate-900 min-h-[500px] flex flex-col justify-between">
                <div>
                  {/* Shop Header Banner */}
                  <div className="text-center pb-4 border-b border-slate-100">
                    <div className="w-14 h-14 bg-gradient-to-tr from-slate-900 to-slate-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-md">
                      <Scissors className="w-7 h-7 text-amber-400" />
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 capitalize">
                      {cleanSlug.replace(/-/g, " ")}
                    </h3>

                    <div className="flex items-center justify-center gap-1.5 mt-1 text-[11px] text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>Rua Augusta, 1240 • Jardins</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Aberto hoje até 20:00
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        4.9 (184 avaliações)
                      </span>
                    </div>
                  </div>

                  {/* Services list as requested in prompt */}
                  <div className="mt-4 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Serviços disponíveis
                    </span>

                    {/* Corte — 45 min */}
                    <div className="p-2.5 rounded-xl border border-slate-200 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">Corte</h4>
                        <span className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          45 min
                        </span>
                      </div>
                      <span className="text-xs font-bold font-mono text-slate-900">R$ 50</span>
                    </div>

                    {/* Barba — 30 min */}
                    <div className="p-2.5 rounded-xl border border-slate-200 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">Barba</h4>
                        <span className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          30 min
                        </span>
                      </div>
                      <span className="text-xs font-bold font-mono text-slate-900">R$ 35</span>
                    </div>

                    {/* Corte + Barba — 1h */}
                    <div className="p-2.5 rounded-xl border border-blue-200 bg-blue-50/40 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs font-bold text-slate-900">Corte + Barba</h4>
                          <span className="text-[9px] bg-amber-100 text-amber-800 font-semibold px-1 rounded">Popular</span>
                        </div>
                        <span className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          1h
                        </span>
                      </div>
                      <span className="text-xs font-bold font-mono text-blue-600">R$ 80</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA on phone as specified */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Escolher horário</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[9px] text-center text-slate-400 mt-1.5">
                    Não requer cadastro • Confirmação instantânea
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
