"use client";

import { CalendarCheck, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 text-white mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-sky-400 flex items-center justify-center text-white shadow-xs">
                <CalendarCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Agenda<span className="text-blue-400">Flow</span>
              </span>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-4">
              A plataforma moderna de agendamento online para profissionais e pequenos negócios que valorizam seu tempo.
            </p>

            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 text-[11px] text-slate-300">
              <span className="font-semibold text-white block mb-0.5">Nota de Portfólio:</span>
              Projeto fictício desenvolvido exclusivamente para fins de apresentação de portfólio.
            </div>
          </div>

          {/* Col 1: Produto */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Produto
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#mockup-agenda" className="hover:text-white transition-colors">
                  Agenda
                </a>
              </li>
              <li>
                <a href="#fluxo-agendamento" className="hover:text-white transition-colors">
                  Agendamento online
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-white transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white transition-colors">
                  Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Empresa & Recursos */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#para-quem-e" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Central de ajuda
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Conteúdos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Privacidade
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Termos de uso
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  Segurança
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">
                  LGPD
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 AgendaFlow. Todos os direitos reservados. Projeto fictício desenvolvido para fins de portfólio.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
