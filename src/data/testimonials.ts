/**
 * DADOS DEMONSTRATIVOS PARA PROJETO DE PORTFÓLIO
 * Depoimentos fictícios criados exclusivamente para ilustração comercial do produto.
 */

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  business: string;
  city: string;
  rating: number;
  metric: string;
  avatarInitials: string;
  badgeColor: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "Antes eu passava boa parte do dia respondendo quais horários estavam disponíveis no WhatsApp. Agora envio o link e o cliente escolhe sozinho em menos de um minuto.",
    author: "Lucas Silveira",
    role: "Barbeiro e Proprietário",
    business: "Barbearia Black House",
    city: "São Paulo, SP",
    rating: 5,
    metric: "-2h por dia no WhatsApp",
    avatarInitials: "LS",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "test-2",
    quote:
      "Ficou muito mais fácil visualizar os atendimentos da semana. Meus pacientes elogiam muito a praticidade de poder marcar à noite sem precisar esperar eu responder de manhã.",
    author: "Mariana Costa",
    role: "Nutricionista Clínica",
    business: "Consultório NutriEquilíbrio",
    city: "Curitiba, PR",
    rating: 5,
    metric: "35% mais agendamentos fora do horário",
    avatarInitials: "MC",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "test-3",
    quote:
      "Os lembretes automáticos mudaram meu negócio. Reduzi as faltas a quase zero e quando alguém precisa desmarcar, o horário é liberado na hora para outros alunos.",
    author: "Rafael Drumond",
    role: "Personal Trainer",
    business: "RD Studio Fitness",
    city: "Belo Horizonte, MG",
    rating: 5,
    metric: "Faltas reduzidas em 85%",
    avatarInitials: "RD",
    badgeColor: "bg-amber-100 text-amber-700",
  },
];
