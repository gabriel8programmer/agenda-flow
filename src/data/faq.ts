/**
 * DADOS DEMONSTRATIVOS PARA PROJETO DE PORTFÓLIO
 * Perguntas frequentes para a seção de FAQ com respostas diretas e acessíveis.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Preciso instalar algum aplicativo?",
    answer:
      "Não. O AgendaFlow funciona 100% no navegador, tanto no celular quanto no computador ou tablet. Você acessa pelo link, sem ocupar memória do seu dispositivo.",
  },
  {
    id: "faq-2",
    question: "Meus clientes precisam criar conta?",
    answer:
      "Não! O processo para o cliente é direto: ele clica no seu link, escolhe o serviço, seleciona o dia/horário disponível e informa apenas nome e telefone para receber o lembrete.",
  },
  {
    id: "faq-3",
    question: "Posso usar pelo celular?",
    answer:
      "Com certeza. A plataforma foi pensada prioritariamente para smartphones. Você pode consultar sua agenda do dia, bloquear horários ou adicionar compromissos na palma da mão.",
  },
  {
    id: "faq-4",
    question: "Posso cadastrar vários serviços?",
    answer:
      "Sim. Você pode cadastrar quantos serviços desejar, definindo nome, valor, tempo de duração e até um intervalo entre os atendimentos (por exemplo, 10 minutos para higienização).",
  },
  {
    id: "faq-5",
    question: "É possível ter mais de um profissional?",
    answer:
      "Sim. Nos planos Pro e Equipe você pode cadastrar diferentes profissionais ou salas. Cada profissional tem sua própria agenda e seus próprios horários de trabalho.",
  },
  {
    id: "faq-6",
    question: "Posso bloquear horários?",
    answer:
      "Sim, com apenas dois toques. Você pode bloquear horários avulsos (como uma consulta médica particular), intervalos de almoço ou até dias inteiros de folga e feriados.",
  },
  {
    id: "faq-7",
    question: "Como compartilho minha agenda?",
    answer:
      "Você recebe um link exclusivo (ex: agendaflow.com/seunegocio). Basta copiar e colar na biografia do Instagram, nas mensagens automáticas do WhatsApp ou enviar direto aos clientes.",
  },
  {
    id: "faq-8",
    question: "Posso cancelar ou reagendar atendimentos?",
    answer:
      "Sim. Você ou seu cliente podem reagendar ou cancelar com antecedência. Quando um horário é cancelado, ele volta a ficar imediatamente disponível para outros clientes na página.",
  },
];
