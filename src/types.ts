export type Quality = 'FHD' | '4K' | '4K Premium';

export interface Plan {
  id: string;
  name: string;
  period: 'mensal' | 'semestral';
  price: number;
  periodText: string;
  quality: Quality;
  screens: number;
  discountBadge?: string;
  equivalentMonthlyPrice?: number;
  popular?: boolean;
  features: string[];
}

export interface DeviceInfo {
  id: string;
  name: string;
  iconName: string;
  apps: string[];
  description: string;
  setupSteps: string[];
}

export interface ContentCategory {
  id: string;
  title: string;
  count: string;
  badge: string;
  description: string;
  items: {
    name: string;
    image: string;
    tag?: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'instalacao' | 'planos' | 'suporte' | 'pagamento';
}

export type ActiveTab = 'home' | 'planos' | 'canais' | 'dispositivos' | 'politica-uso' | 'politica-privacidade';
