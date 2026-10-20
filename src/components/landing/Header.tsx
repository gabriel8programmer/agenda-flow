"use client";

import { useState, useEffect } from "react";
import { CalendarCheck, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenDemo: () => void;
}

export function Header({ onOpenDemo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Produto", href: "#mockup-agenda" },
    { label: "Para quem é", href: "#para-quem-e" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Recursos", href: "#recursos" },
    { label: "Preços", href: "#precos" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-white/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-sky-400 flex items-center justify-center text-white shadow-sm shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <CalendarCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                Agenda<span className="text-blue-600">Flow</span>
              </span>
              <span className="text-[10px] font-medium text-slate-600 tracking-wide">
                Agendamento online
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <span>Criar minha agenda</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-4 py-3 text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold shadow-md shadow-blue-500/20 transition-all"
            >
              <span>Criar minha agenda</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-slate-600 mt-1 font-medium">
              Sem cartão de crédito • Funciona no celular
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
