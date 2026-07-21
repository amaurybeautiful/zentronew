import { Plan } from '../types';

export const PLANS_DATA: Plan[] = [
  // PLANOS MENSAIS
  {
    id: 'mensal-fhd-2telas',
    name: 'Plano Mensal FHD',
    period: 'mensal',
    price: 30.00,
    periodText: '/mês',
    quality: 'FHD',
    screens: 2,
    popular: false,
    features: [
      'Qualidade Full HD 1080p',
      '2 Telas Simultâneas',
      'Acesso a +100.000 Conteúdos',
      'Canais Abertos e Fechados',
      'Filmes & Séries Atualizados',
      'Guia de Programação (EPG)',
      'Suporte Técnico via WhatsApp',
      'Sem fidelidade ou multa'
    ]
  },
  {
    id: 'mensal-4k-1tela',
    name: 'Plano Mensal Premium 4K',
    period: 'mensal',
    price: 35.00,
    periodText: '/mês',
    quality: '4K Premium',
    screens: 1,
    popular: true,
    features: [
      'Qualidade Ultra HD 4K + FHD',
      '1 Tela Dedicada',
      'Servidor Anti-Trava Ultra Rápido',
      'Acesso a +100.000 Conteúdos',
      'Canais de Esportes em 60 FPS',
      'Filmes e Lançamentos de Cinema',
      'Séries das Principais Plataformas',
      'Suporte Prioritário VIP'
    ]
  },
  {
    id: 'mensal-4k-2telas',
    name: 'Plano Mensal Premium 4K (2 Telas)',
    period: 'mensal',
    price: 50.00,
    periodText: '/mês',
    quality: '4K Premium',
    screens: 2,
    popular: false,
    features: [
      'Qualidade Ultra HD 4K + FHD',
      '2 Telas Simultâneas em 4K',
      'Servidor Anti-Trava Ultra Rápido',
      'Ideal para Famílias e Compartilhamento',
      'Acesso Ilimitado a Todo o Catálogo',
      'Esportes Ao Vivo sem Atrasos',
      'Canais Adultos (Opção de Bloqueio)',
      'Suporte VIP 24 Horas'
    ]
  },

  // PLANOS SEMESTRAIS
  {
    id: 'semestral-fhd-2telas',
    name: 'Plano Semestral FHD',
    period: 'semestral',
    price: 150.00,
    periodText: '/6 meses',
    quality: 'FHD',
    screens: 2,
    discountBadge: 'Economia de R$ 30,00',
    equivalentMonthlyPrice: 25.00,
    popular: false,
    features: [
      'Qualidade Full HD 1080p',
      '2 Telas Simultâneas',
      'Equivale a R$ 25,00 por mês',
      'Economize R$ 30,00 no Período',
      'Renovação a cada 6 meses',
      'Canais, Filmes e Séries Ilimitados',
      'Troca de Aparelho Grátis',
      'Suporte Prioritário'
    ]
  },
  {
    id: 'semestral-4k-1tela',
    name: 'Plano Semestral Premium 4K',
    period: 'semestral',
    price: 180.00,
    periodText: '/6 meses',
    quality: '4K Premium',
    screens: 1,
    discountBadge: 'Economia no Semestre',
    equivalentMonthlyPrice: 30.00,
    popular: true,
    features: [
      'Qualidade Ultra HD 4K + FHD',
      '1 Tela Dedicada',
      'Equivale a R$ 30,00 por mês',
      'Servidor de Alta Performance 60 FPS',
      'Acesso Ilimitado ao Lançamentos 2026',
      'Assista onde e quando quiser',
      'Sem interrupções e sem travas',
      'Suporte VIP Especializado'
    ]
  },
  {
    id: 'semestral-4k-2telas',
    name: 'Plano Semestral Premium 4K (2 Telas)',
    period: 'semestral',
    price: 240.00,
    periodText: '/6 meses',
    quality: '4K Premium',
    screens: 2,
    discountBadge: 'Maior Economia: R$ 60,00 OFF',
    equivalentMonthlyPrice: 40.00,
    popular: false,
    features: [
      'Qualidade Ultra HD 4K + FHD',
      '2 Telas Simultâneas em 4K',
      'Equivale a R$ 40,00 por mês',
      'Economia Massiva de R$ 60,00',
      'Melhor custo-benefício familiar',
      'Servidores CDN de Alta Velocidade',
      'Instalação e Configuração Assistida',
      'Suporte Preferencial 24/7'
    ]
  }
];
