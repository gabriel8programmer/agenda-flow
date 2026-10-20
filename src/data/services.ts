/**
 * DADOS DEMONSTRATIVOS PARA PROJETO DE PORTFÓLIO
 * Serviços de demonstração para a simulação do fluxo de agendamento mobile e página própria.
 */

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  category: string;
  popular?: boolean;
}

export const demoServices: ServiceItem[] = [
  {
    id: "srv-1",
    name: "Corte Masculino",
    description: "Lavagem, corte estilizado com tesoura ou máquina e acabamento com navalha.",
    duration: "45 min",
    price: "R$ 50",
    category: "Cabelo",
    popular: true,
  },
  {
    id: "srv-2",
    name: "Barba Tradicional",
    description: "Alinhamento com toalha quente, óleo hidratante e navalha esterilizada.",
    duration: "30 min",
    price: "R$ 35",
    category: "Barba",
    popular: false,
  },
  {
    id: "srv-3",
    name: "Corte + Barba",
    description: "Experiência completa de cabelo e barba com atendimento personalizado.",
    duration: "1h 15min",
    price: "R$ 80",
    category: "Combo",
    popular: true,
  },
  {
    id: "srv-4",
    name: "Sobrancelha & Acabamento",
    description: "Design rápido de sobrancelha na pinça ou navalhete.",
    duration: "15 min",
    price: "R$ 20",
    category: "Detalhes",
    popular: false,
  },
];

export interface Professional {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviewsCount: number;
  initials: string;
  avatarBg: string;
}

export const demoProfessionals: Professional[] = [
  {
    id: "prof-1",
    name: "Lucas Silva",
    role: "Master Barber",
    rating: 4.9,
    reviewsCount: 142,
    initials: "LS",
    avatarBg: "bg-blue-500",
  },
  {
    id: "prof-2",
    name: "Rafael Mendes",
    role: "Especialista em Barba",
    rating: 4.8,
    reviewsCount: 98,
    initials: "RM",
    avatarBg: "bg-amber-500",
  },
  {
    id: "prof-3",
    name: "Mariana Costa",
    role: "Visagista & Estilista",
    rating: 5.0,
    reviewsCount: 116,
    initials: "MC",
    avatarBg: "bg-coral-500",
  },
];

export const demoAvailableSlots = [
  "09:00",
  "09:45",
  "10:30",
  "11:15",
  "14:00",
  "14:45",
  "15:30",
  "16:15",
  "17:00",
  "17:45",
];
