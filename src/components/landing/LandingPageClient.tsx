"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { CalendarPreview } from "./CalendarPreview";
import { BookingFlow } from "./BookingFlow";
import { Problems } from "./Problems";
import { Features } from "./Features";
import { BookingPagePreview } from "./BookingPagePreview";
import { Audience } from "./Audience";
import { HowItWorks } from "./HowItWorks";
import { DashboardPreview } from "./DashboardPreview";
import { Reschedule } from "./Reschedule";
import { MobileExperience } from "./MobileExperience";
import { Pricing } from "./Pricing";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { DemoModal } from "./DemoModal";

export function LandingPageClient() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Header with Accessible Navigation */}
      <Header onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Orbiting Schedules & Live Demo Pill */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 2. Mockup Principal: Calendário Semanal com Horários e Status */}
        <CalendarPreview onOpenDemo={handleOpenDemo} />

        {/* 3. Fluxo do Cliente: 4 Etapas no Smartphone */}
        <BookingFlow onOpenDemo={handleOpenDemo} />

        {/* 4. Problemas: WhatsApp Manual vs AgendaFlow */}
        <Problems onOpenDemo={handleOpenDemo} />

        {/* 5. Recursos Principais: Layout Assimétrico & Funcionalidades */}
        <Features onOpenDemo={handleOpenDemo} />

        {/* 6. Link Personalizado: Página Própria do Estabelecimento */}
        <BookingPagePreview onOpenDemo={handleOpenDemo} />

        {/* 7. Para Quem É: Segmentos e Categorias Profissionais */}
        <Audience onOpenDemo={handleOpenDemo} />

        {/* 8. Como Funciona para o Profissional: 4 Passos */}
        <HowItWorks onOpenDemo={handleOpenDemo} />

        {/* 9. Dashboard Demonstrativo: Métricas de Ocupação e Próximos Atendimentos */}
        <DashboardPreview onOpenDemo={handleOpenDemo} />

        {/* 10. Gestão de Cancelamentos e Reagendamentos Flexíveis */}
        <Reschedule onOpenDemo={handleOpenDemo} />

        {/* 11. Experiência Mobile Dedicada no Bolso */}
        <MobileExperience onOpenDemo={handleOpenDemo} />

        {/* 12. Planos e Preços (Solo, Pro, Equipe) */}
        <Pricing onOpenDemo={handleOpenDemo} />

        {/* 13. Prova Social: Depoimentos de Profissionais */}
        <Testimonials />

        {/* 14. FAQ: Accordion Acessível com as Perguntas Chave */}
        <FAQ onOpenDemo={handleOpenDemo} />

        {/* 15. CTA Final Vibrante */}
        <FinalCTA onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer Completo */}
      <Footer />

      {/* Interactive Demo Modal triggered by "Criar minha agenda" */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
