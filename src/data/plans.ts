/**
 * DADOS DEMONSTRATIVOS PARA PROJETO DE PORTFÓLIO
 * Valores e planos fictícios utilizados exclusivamente para apresentação do projeto.
 */

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "solo",
    name: "Solo",
    tagline: "Para profissionais autônomos que querem parar de marcar horários pelo WhatsApp.",
    monthlyPrice: 29,
    annualPrice: 24,
    features: [
      "1 profissional / agenda",
      "Página personalizada com seu link",
      "Agendamentos ilimitados",
      "Lembretes automáticos no WhatsApp",
      "Bloqueio manual de horários",
      "Visualização diária e semanal",
      "Histórico de clientes",
      "Suporte por e-mail e chat",
    ],
    idealFor: "Barbeiros autônomos, psicólogos, nutricionistas e personal trainers.",
    ctaText: "Criar minha agenda",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "A escolha favorita de pequenos estabelecimentos em crescimento.",
    monthlyPrice: 59,
    annualPrice: 49,
    highlighted: true,
    badge: "Mais escolhido",
    features: [
      "Até 3 profissionais simultâneos",
      "Link próprio com logo e cores da sua marca",
      "Agendamentos e clientes ilimitados",
      "Lembretes automáticos com confirmação",
      "Relatórios simples de ocupação e faturamento",
      "Controle de cancelamentos com liberação rápida",
      "Sincronização com Google Agenda",
      "Suporte prioritário via WhatsApp",
    ],
    idealFor: "Estúdios, barbearias com sócios, consultórios e salões de médio porte.",
    ctaText: "Criar minha agenda",
  },
  {
    id: "equipe",
    name: "Equipe",
    tagline: "Para clínicas, escolas e negócios com múltiplos atendentes e salas.",
    monthlyPrice: 119,
    annualPrice: 99,
    features: [
      "Até 10 profissionais e salas",
      "Agendas individuais e visão geral da recepção",
      "Controle de permissões por profissional",
      "Múltiplas unidades ou filiais",
      "Lembretes inteligentes personalizados",
      "Exportação de dados e métricas em CSV",
      "Onboarding dedicado para a equipe",
      "Gerente de conta exclusivo",
    ],
    idealFor: "Clínicas integradas, salões maiores, academias e escolas de cursos.",
    ctaText: "Criar minha agenda",
  },
];
