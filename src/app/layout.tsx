import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgendaFlow | Agendamento Online para Profissionais e Negócios",
  description:
    "Organize seus horários e permita que seus clientes façam agendamentos online de forma simples. Menos mensagens, mais tempo para atender.",
  keywords: [
    "agendamento online",
    "agenda profissional",
    "sistema de agendamento",
    "barbearia",
    "salão",
    "clínica",
    "personal trainer",
    "AgendaFlow",
  ],
  authors: [{ name: "AgendaFlow Team" }],
  openGraph: {
    title: "AgendaFlow | Agendamento Online para Profissionais e Negócios",
    description:
      "Organize seus horários e permita que seus clientes façam agendamentos online de forma simples.",
    url: "https://agendaflow.com.br",
    siteName: "AgendaFlow",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgendaFlow | Agendamento Online para Profissionais e Negócios",
    description:
      "Organize seus horários e permita que seus clientes façam agendamentos online de forma simples.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

