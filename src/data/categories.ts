/**
 * DADOS DEMONSTRATIVOS PARA PROJETO DE PORTFÓLIO
 * Categorias de profissionais atendidos pelo AgendaFlow.
 */

export interface AudienceCategory {
  id: string;
  name: string;
  badge: string;
  description: string;
  examples: string[];
  sampleTimeslot: string;
  accentColor: string;
  iconName: string;
}

export const audienceCategories: AudienceCategory[] = [
  {
    id: "beleza",
    name: "Beleza & Estética",
    badge: "Alta frequência",
    description: "Para quem atende vários clientes ao dia e precisa de rapidez entre cortes e tratamentos.",
    examples: ["Barbearias", "Salões de beleza", "Lash designers", "Manicures", "Estética facial"],
    sampleTimeslot: "Horários de 30 a 60 min",
    accentColor: "blue",
    iconName: "Scissors",
  },
  {
    id: "saude",
    name: "Saúde & Bem-Estar",
    badge: "Pontualidade",
    description: "Organização silenciosa para consultórios que prezam por discrição e confirmação de presença.",
    examples: ["Psicólogos", "Nutricionistas", "Fisioterapeutas", "Dentistas", "Fonoaudiólogos"],
    sampleTimeslot: "Sessões de 45 a 60 min",
    accentColor: "emerald",
    iconName: "HeartPulse",
  },
  {
    id: "fitness",
    name: "Fitness & Treinamento",
    badge: "Aulas individuais e turmas",
    description: "Alunos agendando treinos sem mensagens repetitivas todo início de semana.",
    examples: ["Personal trainers", "Estúdios de pilates", "Instrutores de yoga", "Quadras esportivas"],
    sampleTimeslot: "Aulas de 50 a 60 min",
    accentColor: "amber",
    iconName: "Dumbbell",
  },
  {
    id: "educacao",
    name: "Educação & Aulas",
    badge: "Horários flexíveis",
    description: "Aulas de reforço, idiomas e instrumentos com confirmação automática de horários disponíveis.",
    examples: ["Professores particulares", "Escolas de música", "Idiomas", "Mentores acadêmicos"],
    sampleTimeslot: "Aulas de 45 a 90 min",
    accentColor: "indigo",
    iconName: "GraduationCap",
  },
  {
    id: "consultoria",
    name: "Consultoria & Negócios",
    badge: "Profissionalismo",
    description: "Passe uma imagem moderna para seus clientes desde o momento de marcar a reunião inicial.",
    examples: ["Consultores empresariais", "Advogados", "Contadores", "Designers autônomos"],
    sampleTimeslot: "Reuniões de 30 a 60 min",
    accentColor: "sky",
    iconName: "Briefcase",
  },
  {
    id: "servicos",
    name: "Estúdios & Serviços",
    badge: "Sessões reservadas",
    description: "Evite sobreposição de reservas de estúdio e facilite o agendamento de sessões com antecedência.",
    examples: ["Fotógrafos", "Estúdios de tatuagem", "Podcasts", "Estética automotiva"],
    sampleTimeslot: "Ensaios de 1h a 3h",
    accentColor: "rose",
    iconName: "Camera",
  },
];
