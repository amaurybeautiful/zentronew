import { DeviceInfo, ContentCategory, FAQItem } from '../types';

export const POLITICA_DE_USO_TEXT = {
  title: 'Política de Uso',
  updatedAt: '21 de julho de 2026',
  intro: 'Bem-vindo à nossa plataforma.\n\nAo utilizar nossos serviços, você concorda integralmente com esta Política de Uso. Caso não concorde com qualquer disposição aqui descrita, recomendamos que não utilize nossos serviços.',
  sections: [
    {
      number: '1',
      title: 'Objetivo do Serviço',
      content: 'Nossa plataforma disponibiliza soluções de entretenimento digital por meio de aplicativos compatíveis com diversos dispositivos, incluindo:\n\n• Smart TVs;\n• TV Box;\n• Smartphones Android;\n• iPhone (iOS);\n• Tablets;\n• Computadores;\n• Outros dispositivos compatíveis.\n\nO serviço poderá sofrer alterações, melhorias ou atualizações sem aviso prévio.'
    },
    {
      number: '2',
      title: 'Responsabilidades do Usuário',
      content: 'O usuário compromete-se a:\n\n• Utilizar o serviço de forma lícita;\n• Fornecer informações verdadeiras durante o cadastro;\n• Manter seus dados de acesso em sigilo;\n• Não compartilhar sua conta com terceiros além do permitido pelo plano contratado;\n• Não tentar copiar, modificar, revender ou distribuir o serviço sem autorização.'
    },
    {
      number: '3',
      title: 'Uso Indevido',
      content: 'É expressamente proibido:\n\n• Compartilhar login e senha publicamente;\n• Revender acessos sem autorização;\n• Tentar invadir nossos sistemas;\n• Utilizar programas automatizados para acessar o serviço;\n• Praticar qualquer atividade que prejudique outros usuários ou a estabilidade da plataforma.\n\nO descumprimento poderá resultar em suspensão ou cancelamento da conta, sem direito a reembolso.'
    },
    {
      number: '4',
      title: 'Disponibilidade',
      content: 'Embora trabalhemos para manter o serviço disponível continuamente, poderão ocorrer:\n\n• Manutenções programadas;\n• Atualizações;\n• Instabilidades ocasionadas por provedores de internet;\n• Problemas de infraestrutura;\n• Eventos de força maior.\n\nNão garantimos disponibilidade ininterrupta de 100%.'
    },
    {
      number: '5',
      title: 'Compatibilidade',
      content: 'O desempenho do serviço depende de diversos fatores, incluindo:\n\n• velocidade da internet;\n• qualidade da rede local;\n• desempenho do dispositivo;\n• configuração do equipamento utilizado.\n\nO usuário é responsável por manter seu equipamento em condições adequadas de funcionamento.'
    },
    {
      number: '6',
      title: 'Atualizações',
      content: 'Podemos atualizar:\n\n• aplicativos;\n• funcionalidades;\n• interface;\n• servidores;\n• recursos do sistema.\n\nAs alterações poderão ocorrer automaticamente ou mediante disponibilização de nova versão do aplicativo.'
    },
    {
      number: '7',
      title: 'Suspensão ou Encerramento',
      content: 'Reservamo-nos o direito de suspender ou cancelar contas quando houver:\n\n• fraude;\n• uso abusivo;\n• inadimplência;\n• violação desta Política de Uso;\n• determinação legal ou judicial.'
    },
    {
      number: '8',
      title: 'Limitação de Responsabilidade',
      content: 'Não nos responsabilizamos por:\n\n• falhas na conexão de internet do usuário;\n• problemas causados por terceiros;\n• incompatibilidade de dispositivos;\n• interrupções decorrentes de manutenção;\n• utilização inadequada da plataforma.'
    },
    {
      number: '9',
      title: 'Alterações desta Política',
      content: 'Esta Política poderá ser alterada a qualquer momento para adequação a novas funcionalidades, requisitos legais ou melhorias do serviço.\n\nA versão mais recente estará sempre disponível em nosso site.'
    }
  ]
};

export const POLITICA_DE_PRIVACIDADE_TEXT = {
  title: 'Política de Privacidade',
  updatedAt: '21 de julho de 2026',
  intro: 'Sua privacidade é importante para nós. Esta Política explica como coletamos, utilizamos, armazenamos e protegemos suas informações.',
  sections: [
    {
      number: '1',
      title: 'Informações Coletadas',
      content: 'Podemos coletar informações como:\n\n• nome;\n• telefone;\n• endereço de e-mail;\n• endereço IP;\n• informações do dispositivo;\n• sistema operacional;\n• registros de acesso;\n• dados técnicos necessários para funcionamento do serviço.'
    },
    {
      number: '2',
      title: 'Como Utilizamos as Informações',
      content: 'Os dados poderão ser utilizados para:\n\n• criar sua conta;\n• autenticar seu acesso;\n• prestar suporte;\n• melhorar nossos serviços;\n• prevenir fraudes;\n• garantir a segurança da plataforma;\n• enviar informações relacionadas ao serviço contratado.'
    },
    {
      number: '3',
      title: 'Compartilhamento de Dados',
      content: 'Não comercializamos dados pessoais.\n\nAs informações poderão ser compartilhadas apenas quando:\n\n• exigido por lei;\n• necessário para cumprimento de ordem judicial;\n• indispensável para prestação do serviço por fornecedores de infraestrutura tecnológica.'
    },
    {
      number: '4',
      title: 'Segurança',
      content: 'Adotamos medidas técnicas e administrativas para proteger as informações contra:\n\n• acesso não autorizado;\n• alteração indevida;\n• divulgação;\n• perda;\n• destruição.\n\nApesar dos nossos esforços, nenhum sistema é completamente imune a riscos.'
    },
    {
      number: '5',
      title: 'Cookies',
      content: 'Nosso site poderá utilizar cookies para:\n\n• melhorar a navegação;\n• manter sessões autenticadas;\n• analisar desempenho;\n• personalizar a experiência do usuário.\n\nO usuário pode desativar os cookies nas configurações do navegador, embora algumas funcionalidades possam ser afetadas.'
    },
    {
      number: '6',
      title: 'Retenção dos Dados',
      content: 'As informações serão armazenadas pelo tempo necessário para:\n\n• prestação do serviço;\n• cumprimento de obrigações legais;\n• resolução de disputas;\n• proteção de direitos.\n\nApós esse período, poderão ser excluídas ou anonimizadas.'
    },
    {
      number: '7',
      title: 'Direitos do Usuário',
      content: 'Nos termos da Lei Geral de Proteção de Dados (LGPD), o usuário poderá solicitar:\n\n• confirmação da existência de tratamento;\n• acesso aos seus dados;\n• correção de informações;\n• exclusão de dados quando aplicável;\n• revogação do consentimento, quando este for a base legal do tratamento.'
    },
    {
      number: '8',
      title: 'Segurança da Conta',
      content: 'O usuário é responsável por manter sua senha em sigilo.\n\nNão compartilhe suas credenciais de acesso com terceiros.'
    },
    {
      number: '9',
      title: 'Alterações desta Política',
      content: 'Esta Política poderá ser modificada periodicamente para refletir alterações legais, tecnológicas ou operacionais.\n\nA versão mais recente estará sempre disponível em nosso site.'
    },
    {
      number: '10',
      title: 'Contato',
      content: 'Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato por meio dos canais oficiais de atendimento disponibilizados em nosso site.'
    }
  ]
};

export const DEVICE_LIST: DeviceInfo[] = [
  {
    id: 'smart-tv',
    name: 'Smart TVs (Samsung, LG, Android TV)',
    iconName: 'Tv',
    apps: ['IBO Player', 'SSIPTV', 'Smartone', 'DuplexPlay', 'IPTV Smarters'],
    description: 'Acesse diretamente na loja de aplicativos da sua televisão sem necessidade de fios ou aparelhos adicionais.',
    setupSteps: [
      'Abra a loja de aplicativos da sua Smart TV (Samsung Apps, LG Content Store ou Google Play Store).',
      'Pesquise e instale um dos aplicativos recomendados (ex: IBO Player ou IPTV Smarters).',
      'Abra o aplicativo e anote o número MAC e chave de acesso exibidos na tela.',
      'Envie o código para nosso suporte no WhatsApp para ativarmos seu teste ou assinatura instantaneamente.'
    ]
  },
  {
    id: 'tv-box',
    name: 'TV Box, Firestick & Chromecast',
    iconName: 'Box',
    apps: ['XCIPTV', 'IPTV Smarters Pro', 'TiviMate', 'Purple Player'],
    description: 'Transforme qualquer televisão com entrada HDMI em uma central de entretenimento 4K de altíssima velocidade.',
    setupSteps: [
      'Ligue seu TV Box ou Amazon Firestick e acesse a loja Google Play Store ou o navegador Downloader.',
      'Baixe nosso aplicativo oficial ZentroPlay ou um player recomendado como XCIPTV / Smarters Pro.',
      'Insira os dados de Usuário, Senha e URL fornecidos pelo nosso suporte no WhatsApp.',
      'Pronto! Todo o catálogo de canais 4K e filmes será carregado automaticamente.'
    ]
  },
  {
    id: 'android-phone',
    name: 'Smartphones & Tablets Android',
    iconName: 'Smartphone',
    apps: ['ZentroPlay Android App', 'IPTV Smarters Pro', 'XCIPTV Player'],
    description: 'Assista seus jogos de futebol ao vivo e séries preferidas na palma da sua mão com sinal estabilizado.',
    setupSteps: [
      'Baixe o aplicativo ZentroPlay ou IPTV Smarters diretamente no seu celular Android.',
      'Abra o app e clique em "Adicionar Usuário" utilizando a opção Xtream Codes / M3U.',
      'Digite seu login e senha recebidos no WhatsApp.',
      'Aproveite a transmissão em HD e 4K mesmo na rede 4G/5G ou Wi-Fi.'
    ]
  },
  {
    id: 'ios-iphone',
    name: 'iPhone (iOS) & iPad',
    iconName: 'Apple',
    apps: ['GSE Smart IPTV', 'Smarters Player Lite', 'IPTV Stream Player'],
    description: 'Compatibilidade total com dispositivos Apple iOS, trazendo imagens cristalinas em alta fidelidade.',
    setupSteps: [
      'Acesse a App Store do seu iPhone ou iPad.',
      'Pesquise pelo aplicativo "Smarters Player Lite" ou "GSE Smart IPTV".',
      'Faça o download gratuito e insira suas credenciais de acesso ZentroPlay.',
      'Sua lista de canais e guia de programação estarão prontos para uso.'
    ]
  },
  {
    id: 'pc-computer',
    name: 'Computadores & Notebooks (PC / Mac)',
    iconName: 'Monitor',
    apps: ['Web Player Browser', 'VLC Media Player', 'IPTV Smarters Windows/Mac'],
    description: 'Assista direto pelo navegador sem instalar nada, ou utilize players dedicados para Windows e macOS.',
    setupSteps: [
      'Acesse nosso link exclusivo de Web Player enviado no seu WhatsApp.',
      'Insira seu Usuário e Senha para carregar a interface web idêntica à de uma TV.',
      'Ou se preferir, baixe a versão para Windows/Mac e assista em tela cheia.'
    ]
  }
];

export const CONTENT_CATEGORIES: ContentCategory[] = [
  {
    id: 'esportes',
    title: 'Esportes Ao Vivo em 60 FPS',
    count: '+150 Canais Esportivos',
    badge: '4K & FHD sem Atrasos',
    description: 'Todos os jogos do Brasileirão, Champions League, Libertadores, UFC, Premier League e F1 ao vivo.',
    items: [
      { name: 'Premiere Clubes 4K', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=80', tag: 'Aovivo 4K' },
      { name: 'ESPN & Disney+ Sports', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=80', tag: '60 FPS' },
      { name: 'SporTV 1, 2, 3 Ultra HD', image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=500&auto=format&fit=crop&q=80', tag: 'FHD' },
      { name: 'UFC Combat PPV', image: 'https://images.unsplash.com/photo-1517649763962-0c6232662000?w=500&auto=format&fit=crop&q=80', tag: 'Ao Vivo' }
    ]
  },
  {
    id: 'filmes-lancamentos',
    title: 'Filmes & Séries de Lançamento',
    count: '+80.000 Títulos VOD',
    badge: 'Atualizado Diariamente',
    description: 'Os últimos lançamentos do cinema, superproduções das plataformas de streaming e sagas completas.',
    items: [
      { name: 'Lançamentos de Cinema 2026', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=80', tag: '4K HDR' },
      { name: 'Séries Originais Streaming', image: 'https://images.unsplash.com/photo-1518676599625-58292881a54f?w=500&auto=format&fit=crop&q=80', tag: 'Dual Áudio' },
      { name: 'Ação & Ficção Científica', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80', tag: 'Dolby 5.1' },
      { name: 'Animes & Desenhos HD', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80', tag: 'Dublado' }
    ]
  },
  {
    id: 'canais-abertos-fechados',
    title: 'Canais Abertos & Fechados',
    count: '+3.500 Canais',
    badge: 'Guia EPG Integrado',
    description: 'Grade completa de variedades, notícias, novidades, documentários e entretenimento 24 horas.',
    items: [
      { name: 'Grade de Variedades & TV', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&auto=format&fit=crop&q=80', tag: 'Nacional' },
      { name: 'Canais de Notícias 24h', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&auto=format&fit=crop&q=80', tag: 'Ao Vivo' },
      { name: 'Documentários & Ciência', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80', tag: '4K' },
      { name: 'Novelas Completa & 24h', image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=500&auto=format&fit=crop&q=80', tag: 'HD' }
    ]
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    category: 'instalacao',
    question: 'Como funciona o teste grátis do ZentroPlay?',
    answer: 'Você entra em contato pelo nosso WhatsApp, escolhe o seu dispositivo (Smart TV, Celular, TV Box, etc.), e nossa equipe libera um acesso gratuito com duração para você testar a velocidade, qualidade dos canais 4K/FHD e estabilidade do servidor.'
  },
  {
    category: 'planos',
    question: 'Qual a diferença entre os planos FHD e 4K Premium?',
    answer: 'O plano FHD oferece transmissão de alta definição Full HD (1080p) com 2 telas simultâneas por R$ 30,00/mês. Já o plano Premium 4K possui servidores ultra otimizados para conteúdos em Ultra HD 4K em 60 FPS com maior largura de banda para telas de alta resolução.'
  },
  {
    category: 'planos',
    question: 'Quantas telas posso usar no mesmo plano?',
    answer: 'Oferecemos opções de 1 Tela ou 2 Telas simultâneas. Por exemplo, no plano de 2 telas (mensal por R$ 30,00 FHD ou R$ 50,00 4K, e semestrais), você pode assistir na sua Smart TV da sala e no celular/TV Box em outro cômodo ao mesmo tempo.'
  },
  {
    category: 'instalacao',
    question: 'Qual velocidade de internet é recomendada?',
    answer: 'Recomendamos uma internet estável a partir de 15 Mbps para conteúdos FHD e 35 Mbps ou mais para os canais e filmes em 4K Ultra HD. A conexão via cabo de rede na TV Box ou Wi-Fi 5Ghz garante a melhor estabilidade.'
  },
  {
    category: 'pagamento',
    question: 'Quais as formas de pagamento aceitas?',
    answer: 'Aceitamos PIX com liberação instantânea e automática em menos de 2 minutos, além de Cartão de Crédito e Boleto Bancário.'
  },
  {
    category: 'suporte',
    question: 'Terei suporte se precisar de ajuda para configurar?',
    answer: 'Sim! Nossa equipe presta suporte passo a passo via WhatsApp para lhe orientar na instalação do aplicativo em sua Smart TV, TV Box, celular ou computador.'
  }
];

export const ICON_GUIDE_INFO = {
  title: 'Guia de Ícones e Logotipos da Empresa',
  subtitle: 'Instruções técnicas para personalização da marca ZentroPlay',
  summary: 'Aqui você encontra a estrutura de pastas, formatos aceitos e tamanhos recomendados para incluir suas próprias imagens e logotipos no projeto.',
  paths: [
    {
      folder: '/public/',
      fileName: 'logo.png ou logo.svg',
      purpose: 'Logotipo principal exibido no topo (Navbar) e rodapé do site.',
      recommendedSize: '250 x 80 px (Proporção ~3:1 com fundo transparente PNG ou vetor SVG)',
      specs: 'Fundo Transparente, Cores recomendadas: Branco com destaques Roxo/Ciano Neon.'
    },
    {
      folder: '/public/',
      fileName: 'favicon.ico ou favicon.png',
      purpose: 'Ícone que aparece na aba do navegador do usuário e atalhos de celular.',
      recommendedSize: '32 x 32 px ou 64 x 64 px (Quadrado 1:1)',
      specs: 'Ícone simplificado (ex: a letra Z com brilho neon) em PNG ou ICO.'
    },
    {
      folder: '/public/icons/',
      fileName: 'app-icon-512.png',
      purpose: 'Ícone do App Web para instalação no celular / PWA.',
      recommendedSize: '512 x 512 px',
      specs: 'PNG de alta resolução.'
    },
    {
      folder: '/public/banners/',
      fileName: 'hero-banner.jpg ou hero-bg.webp',
      purpose: 'Imagens de fundo do painel de destaque e cinema.',
      recommendedSize: '1920 x 1080 px (16:9 4K/FHD)',
      specs: 'Formato WebP ou JPG otimizado para web.'
    }
  ]
};
