import { useEffect, useState } from 'react';
import bannerDesktop1 from '../assets/banners/banner_desktop1.png';
import bannerDesktop2 from '../assets/banners/banner_desktop2.png';
import bannerMobile1 from '../assets/banners/Banner_mobile1.png';
import bannerMobile2 from '../assets/banners/Banner_mobile2.png';
import { differentials, managementPoints } from './content.js';
import { assetHref, getCurrentRoute, routeHref } from './routes.js';

const transportManagementItems = [
  { label: 'Transporte Rodoviário', icon: 'logistica', tone: 'orange' },
  { label: 'Carga Fracionada', icon: 'frete', tone: 'blue' },
  { label: 'Carga Lotação', icon: 'frete', tone: 'orange' },
  { label: 'Rotas Dedicadas', icon: 'logistica', tone: 'blue' },
  { label: 'Armazenagem', icon: 'contabilidade', tone: 'orange' },
  { label: 'Rastreamento', icon: 'credito', tone: 'blue' },
  { label: 'Gestão de Risco', icon: 'seguros', tone: 'blue' },
  { label: 'Atendimento B2B', icon: 'juridico', tone: 'orange' },
];

const transportServiceAreas = [
  {
    title: 'Transporte Rodoviário',
    slug: 'transporte-rodoviario',
    icon: 'assets/logistica.jpg',
    partner: 'EMS Transportes',
    eyebrow: 'Transporte nacional',
    headline: 'Transporte rodoviário para sua carga chegar com segurança.',
    summary: 'Operação planejada para cargas comerciais, industriais e distribuições em todo o Brasil.',
    lead:
      'Movimentamos cargas com planejamento de rota, controle operacional e acompanhamento próximo do embarque à entrega.',
    accent: 'green',
    visualItems: [
      { icon: 'truck', label: 'Frota' },
      { icon: 'route', label: 'Rotas' },
      { icon: 'shield', label: 'Segurança' },
      { icon: 'box', label: 'Carga' },
    ],
    highlights: ['Coleta programada', 'Rotas nacionais', 'Entrega monitorada'],
    cards: [
      { icon: 'truck', title: 'Coleta e entrega', text: 'Fluxo organizado para retirar, transportar e entregar sua carga com previsibilidade.' },
      { icon: 'route', title: 'Planejamento de rotas', text: 'Definição de trajetos conforme prazo, tipo de carga e destino.' },
      { icon: 'shield', title: 'Operação segura', text: 'Processos de conferência e acompanhamento para reduzir riscos durante o transporte.' },
    ],
    detailTitle: 'A estrada certa para cada operação.',
    detailText:
      'A EMS Transportes conecta origem e destino com planejamento, equipe preparada e comunicação clara em todas as etapas.',
    ctaText: 'Quero cotar transporte',
  },
  {
    title: 'Carga Fracionada',
    slug: 'carga-fracionada',
    icon: 'assets/fretes.jpg',
    partner: 'EMS Transportes',
    eyebrow: 'Frete sob medida',
    headline: 'Carga fracionada para empresas que precisam ganhar eficiência.',
    summary: 'Soluções para cargas menores, entregas recorrentes e melhor aproveitamento de frete.',
    lead:
      'Atendemos embarques fracionados com consolidação inteligente, prazos bem definidos e cuidado no manuseio da mercadoria.',
    accent: 'gold',
    visualItems: [
      { icon: 'box', label: 'Volumes' },
      { icon: 'warehouse', label: 'Consolidação' },
      { icon: 'route', label: 'Distribuição' },
      { icon: 'calendar', label: 'Agenda' },
    ],
    highlights: ['Menor custo por envio', 'Entregas recorrentes', 'Roteirização eficiente'],
    cards: [
      { icon: 'box', title: 'Embarques menores', text: 'Ideal para cargas que não ocupam um veículo inteiro, mantendo controle e economia.' },
      { icon: 'warehouse', title: 'Consolidação de carga', text: 'Organização dos volumes para otimizar espaço, prazo e custo.' },
      { icon: 'calendar', title: 'Frequência programada', text: 'Coletas e entregas planejadas conforme a necessidade da sua operação.' },
    ],
    detailTitle: 'Mais flexibilidade para movimentar sua mercadoria.',
    detailText:
      'A carga fracionada ajuda sua empresa a transportar com agilidade sem pagar por capacidade que não será usada.',
    ctaText: 'Quero cotar carga fracionada',
  },
  {
    title: 'Carga Lotação',
    slug: 'carga-lotacao',
    icon: 'assets/credito.jpg',
    partner: 'EMS Transportes',
    eyebrow: 'Veículo dedicado',
    headline: 'Carga lotação para operações que exigem exclusividade.',
    summary: 'Transporte dedicado para embarques maiores, prazos críticos e cargas estratégicas.',
    lead:
      'Quando sua carga precisa de um veículo exclusivo, estruturamos a operação com rota direta, controle de prazo e acompanhamento do percurso.',
    accent: 'green',
    visualItems: [
      { icon: 'truck', label: 'Dedicado' },
      { icon: 'route', label: 'Rota direta' },
      { icon: 'shield', label: 'Controle' },
      { icon: 'phone', label: 'Suporte' },
    ],
    highlights: ['Veículo exclusivo', 'Rota direta', 'Prazo controlado'],
    cards: [
      { icon: 'truck', title: 'Transporte dedicado', text: 'Estrutura sob medida para cargas que demandam veículo exclusivo.' },
      { icon: 'route', title: 'Menos paradas', text: 'Operação com trajeto planejado para reduzir manuseio e acelerar a entrega.' },
      { icon: 'phone', title: 'Acompanhamento próximo', text: 'Comunicação com o cliente durante as etapas mais importantes do transporte.' },
    ],
    detailTitle: 'Exclusividade para cargas de maior responsabilidade.',
    detailText:
      'A EMS Transportes monta a operação conforme volume, prazo e destino para preservar a integridade da carga.',
    ctaText: 'Quero cotar carga lotação',
  },
  {
    title: 'Logística Integrada',
    slug: 'logistica-integrada',
    icon: 'assets/contabilidade.jpg',
    partner: 'EMS Transportes',
    eyebrow: 'Operação conectada',
    headline: 'Logística integrada para sua empresa vender e entregar melhor.',
    summary: 'Planejamento de transporte, distribuição e apoio operacional em uma só estratégia.',
    lead:
      'Integramos etapas da operação para reduzir ruídos, melhorar previsibilidade e manter sua cadeia logística em movimento.',
    accent: 'gold',
    visualItems: [
      { icon: 'process', label: 'Fluxos' },
      { icon: 'warehouse', label: 'Base' },
      { icon: 'route', label: 'Distribuição' },
      { icon: 'chart', label: 'Indicadores' },
    ],
    highlights: ['Processos integrados', 'Mais previsibilidade', 'Apoio operacional'],
    cards: [
      { icon: 'process', title: 'Fluxo operacional', text: 'Organização das etapas para que coleta, transporte e entrega trabalhem em conjunto.' },
      { icon: 'chart', title: 'Indicadores de operação', text: 'Visão sobre prazos, ocorrências e desempenho das rotas.' },
      { icon: 'warehouse', title: 'Apoio à distribuição', text: 'Estrutura para facilitar a movimentação e o encaminhamento das cargas.' },
    ],
    detailTitle: 'Logística pensada do pedido ao destino.',
    detailText:
      'A integração reduz retrabalho e ajuda sua empresa a atender melhor, com menos improviso e mais controle.',
    ctaText: 'Quero estruturar minha logística',
  },
  {
    title: 'Armazenagem e Distribuição',
    slug: 'armazenagem-distribuicao',
    icon: 'assets/seguros.jpg',
    partner: 'EMS Transportes',
    eyebrow: 'Base operacional',
    headline: 'Armazenagem e distribuição com controle de movimentação.',
    summary: 'Apoio para receber, organizar e distribuir mercadorias com rastreabilidade.',
    lead:
      'Cuidamos da movimentação da carga com conferência, organização e encaminhamento para os destinos definidos.',
    accent: 'green',
    visualItems: [
      { icon: 'warehouse', label: 'Armazém' },
      { icon: 'box', label: 'Conferência' },
      { icon: 'route', label: 'Entrega' },
      { icon: 'control', label: 'Controle' },
    ],
    highlights: ['Conferência de volumes', 'Distribuição regional', 'Controle de saída'],
    cards: [
      { icon: 'warehouse', title: 'Recebimento organizado', text: 'Entrada de mercadorias com conferência e direcionamento operacional.' },
      { icon: 'box', title: 'Separação de volumes', text: 'Preparação das cargas conforme rota, cliente e prioridade de entrega.' },
      { icon: 'route', title: 'Distribuição eficiente', text: 'Saída planejada para reduzir atrasos e manter o fluxo de entregas.' },
    ],
    detailTitle: 'Sua carga organizada para seguir viagem.',
    detailText:
      'A EMS Transportes apoia a distribuição com processos simples, claros e voltados para a continuidade da operação.',
    ctaText: 'Quero apoio na distribuição',
  },
  {
    title: 'Segurança e Rastreamento',
    slug: 'seguranca-rastreamento',
    icon: 'assets/seguros.jpg',
    partner: 'EMS Transportes',
    eyebrow: 'Controle da jornada',
    headline: 'Segurança e rastreamento para acompanhar cada entrega.',
    summary: 'Acompanhamento de cargas, gestão de risco e comunicação durante o transporte.',
    lead:
      'Monitoramos pontos importantes da operação para trazer mais confiança, agilidade de resposta e transparência ao cliente.',
    accent: 'gold',
    visualItems: [
      { icon: 'shield', label: 'Seguro' },
      { icon: 'route', label: 'Trajeto' },
      { icon: 'phone', label: 'Comunicação' },
      { icon: 'control', label: 'Ocorrências' },
    ],
    highlights: ['Acompanhamento ativo', 'Gestão de risco', 'Comunicação clara'],
    cards: [
      { icon: 'shield', title: 'Gestão de risco', text: 'Critérios operacionais para prevenir perdas, avarias e atrasos.' },
      { icon: 'route', title: 'Rastreamento da viagem', text: 'Acompanhamento da rota e dos pontos críticos da entrega.' },
      { icon: 'phone', title: 'Avisos e suporte', text: 'Contato ágil quando a operação exige decisão ou alinhamento com o cliente.' },
    ],
    detailTitle: 'Mais confiança em cada quilômetro.',
    detailText:
      'Segurança logística é processo, comunicação e controle desde a coleta até a finalização da entrega.',
    ctaText: 'Quero transporte monitorado',
  },
];

const bannerSlides = [
  {
    desktop: bannerDesktop1,
    mobile: bannerMobile1,
    alt: 'EMS Transportes: movemos sua carga e impulsionamos seu negócio',
  },
  {
    desktop: bannerDesktop2,
    mobile: bannerMobile2,
    alt: 'EMS Transportes: sua carga no destino certo, no tempo certo',
  },
];

function CompleteManagementIcon({ type }) {
  const iconProps = {
    viewBox: '0 0 64 64',
    role: 'img',
    focusable: 'false',
  };

  if (type === 'seguros') {
    return (
      <svg {...iconProps}>
        <path d="M32 8 48 15v12c0 12-7 21-16 27-9-6-16-15-16-27V15l16-7Z" />
        <path d="m25 31 5 5 10-12" />
        <path d="M14 48h9l9 5 14-9c3-2 6 2 3 5L36 58H23l-9-5" />
      </svg>
    );
  }

  if (type === 'saude') {
    return (
      <svg {...iconProps}>
        <path d="M32 9 48 16v12c0 11-7 20-16 26-9-6-16-15-16-26V16l16-7Z" />
        <path d="M32 22v16" />
        <path d="M24 30h16" />
        <path d="M14 48h10l8 5 13-8c3-2 6 2 3 5L36 58H23l-9-5" />
      </svg>
    );
  }

  if (type === 'consorcio') {
    return (
      <svg {...iconProps}>
        <path d="m18 36 8-8 8 8 4-4 9 9" />
        <path d="m26 28 6-5 9 8" />
        <path d="M13 36 8 44l10 7 5-8" />
        <path d="m51 36 5 8-10 7-5-8" />
        <path d="m23 43 7 6c2 2 5 2 7 0l6-6" />
        <path d="m28 48 4 3" />
        <path d="m35 48-4 3" />
      </svg>
    );
  }

  if (type === 'credito') {
    return (
      <svg {...iconProps}>
        <rect x="14" y="22" width="36" height="22" rx="2" />
        <path d="M32 27v12" />
        <path d="M36 30c-1-2-7-3-8 0-1 4 8 3 8 7 0 3-7 3-9 0" />
        <path d="M20 17h22l-4-4" />
        <path d="m42 17-4 4" />
        <path d="M44 49H22l4 4" />
        <path d="m22 49 4-4" />
      </svg>
    );
  }

  if (type === 'frete') {
    return (
      <svg {...iconProps}>
        <path d="M20 22h25v24H20z" />
        <path d="m20 22 6-7h25l-6 7" />
        <path d="M45 22v24l6-7V15" />
        <path d="M28 16v10h10V16" />
        <path d="m27 37 4 4 8-9" />
      </svg>
    );
  }

  if (type === 'logistica') {
    return (
      <svg {...iconProps}>
        <path d="M9 36h34V20H9z" />
        <path d="M43 28h8l5 8v8H43z" />
        <path d="M15 44a5 5 0 1 0 10 0" />
        <path d="M43 44a5 5 0 1 0 10 0" />
        <path d="M17 20 26 14l9 6-9 6-9-6Z" />
        <path d="M26 26v11" />
      </svg>
    );
  }

  if (type === 'contabilidade') {
    return (
      <svg {...iconProps}>
        <rect x="12" y="18" width="22" height="34" rx="2" />
        <path d="M17 24h12" />
        <path d="M17 32h4" />
        <path d="M25 32h4" />
        <path d="M17 39h4" />
        <path d="M25 39h4" />
        <path d="M17 46h4" />
        <path d="M25 46h4" />
        <circle cx="45" cy="42" r="10" />
        <path d="M45 36v12" />
        <path d="M49 39c-1-2-7-2-8 1-1 4 8 2 8 6 0 3-7 3-9 0" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <path d="M32 12v39" />
      <path d="M20 20h24" />
      <path d="M18 51h28" />
      <path d="M22 20 12 39h20L22 20Z" />
      <path d="M42 20 32 39h20L42 20Z" />
      <path d="M12 39c2 5 18 5 20 0" />
      <path d="M32 39c2 5 18 5 20 0" />
    </svg>
  );
}

function AreaLineIcon({ type }) {
  const iconProps = {
    viewBox: '0 0 64 64',
    focusable: 'false',
    'aria-hidden': 'true',
  };

  if (type === 'plane') {
    return (
      <svg {...iconProps}>
        <path d="M7 35 57 15 44 49 33 36 20 46l5-17L7 35Z" />
        <path d="m25 29 19 20" />
      </svg>
    );
  }

  if (type === 'building') {
    return (
      <svg {...iconProps}>
        <path d="M10 30 32 13l22 17" />
        <path d="M15 28v25h34V28" />
        <path d="M27 53V38h10v15" />
        <path d="M20 34h6" />
        <path d="M38 34h6" />
      </svg>
    );
  }

  if (type === 'car') {
    return (
      <svg {...iconProps}>
        <path d="M13 37h38l-4-13H17l-4 13Z" />
        <path d="M18 37v8" />
        <path d="M46 37v8" />
        <circle cx="22" cy="45" r="4" />
        <circle cx="42" cy="45" r="4" />
      </svg>
    );
  }

  if (type === 'moto') {
    return (
      <svg {...iconProps}>
        <circle cx="18" cy="44" r="8" />
        <circle cx="47" cy="44" r="8" />
        <path d="M18 44h10l9-15h8" />
        <path d="m32 29 8 15" />
        <path d="M37 29h-9l-5 8" />
        <path d="M44 24h7" />
      </svg>
    );
  }

  if (type === 'truck' || type === 'freight') {
    return (
      <svg {...iconProps}>
        <path d="M8 38h34V21H8z" />
        <path d="M42 29h9l5 9v8H42z" />
        <circle cx="18" cy="46" r="5" />
        <circle cx="47" cy="46" r="5" />
        <path d="M15 27h18" />
      </svg>
    );
  }

  if (type === 'services') {
    return (
      <svg {...iconProps}>
        <path d="M32 9 37 23l15 1-12 9 4 15-12-8-12 8 4-15-12-9 15-1 5-14Z" />
        <path d="M19 55h26" />
      </svg>
    );
  }

  if (type === 'calculator') {
    return (
      <svg {...iconProps}>
        <rect x="16" y="10" width="32" height="44" rx="4" />
        <path d="M22 18h20" />
        <path d="M23 29h5M32 29h5M41 29h1" />
        <path d="M23 38h5M32 38h5M41 38h1" />
        <path d="M23 47h5M32 47h10" />
      </svg>
    );
  }

  if (type === 'chart') {
    return (
      <svg {...iconProps}>
        <path d="M12 52h42" />
        <path d="M18 44V30" />
        <path d="M31 44V20" />
        <path d="M44 44V13" />
        <path d="m17 27 13-9 12-5" />
      </svg>
    );
  }

  if (type === 'process') {
    return (
      <svg {...iconProps}>
        <path d="M19 18h26v12H19z" />
        <path d="M19 38h26v12H19z" />
        <path d="M32 30v8" />
        <path d="m27 35 5 5 5-5" />
      </svg>
    );
  }

  if (type === 'strategy') {
    return (
      <svg {...iconProps}>
        <circle cx="32" cy="32" r="20" />
        <circle cx="32" cy="32" r="10" />
        <path d="M32 12v8" />
        <path d="M32 44v8" />
        <path d="M12 32h8" />
        <path d="M44 32h8" />
      </svg>
    );
  }

  if (type === 'control') {
    return (
      <svg {...iconProps}>
        <path d="M14 18h36" />
        <path d="M14 32h36" />
        <path d="M14 46h36" />
        <circle cx="25" cy="18" r="4" />
        <circle cx="41" cy="32" r="4" />
        <circle cx="31" cy="46" r="4" />
      </svg>
    );
  }

  if (type === 'cash') {
    return (
      <svg {...iconProps}>
        <rect x="12" y="22" width="40" height="24" rx="3" />
        <circle cx="32" cy="34" r="7" />
        <path d="M18 29v10" />
        <path d="M46 29v10" />
      </svg>
    );
  }

  if (type === 'calendar') {
    return (
      <svg {...iconProps}>
        <rect x="13" y="16" width="38" height="36" rx="4" />
        <path d="M13 26h38" />
        <path d="M23 11v10" />
        <path d="M41 11v10" />
        <path d="M24 37h16" />
      </svg>
    );
  }

  if (type === 'factory') {
    return (
      <svg {...iconProps}>
        <path d="M12 52V29l13 8V29l13 8V18h14v34H12Z" />
        <path d="M20 45h6M32 45h6M44 45h4" />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg {...iconProps}>
        <rect x="21" y="9" width="22" height="46" rx="5" />
        <path d="M28 15h8" />
        <path d="M29 48h6" />
      </svg>
    );
  }

  if (type === 'shield') {
    return (
      <svg {...iconProps}>
        <path d="M32 8 50 16v14c0 12-8 21-18 27-10-6-18-15-18-27V16l18-8Z" />
        <path d="m24 33 6 6 11-14" />
      </svg>
    );
  }

  if (type === 'people') {
    return (
      <svg {...iconProps}>
        <circle cx="24" cy="24" r="8" />
        <circle cx="43" cy="27" r="6" />
        <path d="M10 52c2-11 9-17 18-17s16 6 18 17" />
        <path d="M38 39c7 1 12 5 14 13" />
      </svg>
    );
  }

  if (type === 'warehouse') {
    return (
      <svg {...iconProps}>
        <path d="M9 29 32 14l23 15" />
        <path d="M14 27v26h36V27" />
        <path d="M23 53V35h18v18" />
        <path d="M27 40h10M27 46h10" />
      </svg>
    );
  }

  if (type === 'route') {
    return (
      <svg {...iconProps}>
        <circle cx="16" cy="18" r="6" />
        <circle cx="48" cy="46" r="6" />
        <path d="M16 24v5c0 7 5 10 12 10h8c7 0 12 3 12 7" />
        <path d="m39 37 9 9 7-10" />
      </svg>
    );
  }

  if (type === 'box') {
    return (
      <svg {...iconProps}>
        <path d="m12 22 20-10 20 10-20 10-20-10Z" />
        <path d="M12 22v21l20 10 20-10V22" />
        <path d="M32 32v21" />
      </svg>
    );
  }

  if (type === 'health') {
    return (
      <svg {...iconProps}>
        <path d="M32 51S14 40 14 25c0-8 5-13 12-13 4 0 7 2 9 5 2-3 5-5 9-5 7 0 12 5 12 13 0 15-18 26-24 26Z" />
        <path d="M32 24v14" />
        <path d="M25 31h14" />
      </svg>
    );
  }

  return (
    <svg {...iconProps}>
      <circle cx="32" cy="32" r="20" />
      <path d="M22 34 29 41 43 24" />
    </svg>
  );
}

function AreaVisual({ area }) {
  if (area.heroImage) {
    return (
      <div className="area-image-visual">
        <img src={assetHref(area.heroImage)} alt={`${area.title} - ${area.headline}`} />
      </div>
    );
  }

  return (
    <div className={`area-visual ${area.accent === 'green' ? 'green' : 'gold'}`}>
      <div className="area-visual-orb" />
      <div className="area-visual-main">
        <AreaLineIcon type={area.visualItems[0]?.icon || area.slug} />
      </div>
      <div className="area-visual-items">
        {area.visualItems.map((item) => (
          <div className="area-visual-chip" key={item.label}>
            <AreaLineIcon type={item.icon} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandLogo() {
  return (
    <picture className="nav-logo-picture">
      <source media="(max-width: 640px)" srcSet={assetHref('assets/logos/logo1.png')} />
      <img src={assetHref('assets/logos/logo1.png')} alt="EMS Transportes e Logística" className="nav-logo-img" />
    </picture>
  );
}

function TransportBanners() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="banner-slider" id="home" aria-label="Destaques da EMS Transportes">
      <div className="banner-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {bannerSlides.map((slide, index) => (
          <div className="banner-slide" key={slide.desktop} aria-hidden={activeSlide !== index}>
            <picture>
              <source media="(max-width: 640px)" srcSet={slide.mobile} />
              <img
                src={slide.desktop}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </picture>
          </div>
        ))}
      </div>
      <div className="banner-dots" role="tablist" aria-label="Selecionar banner">
        {bannerSlides.map((slide, index) => (
          <button
            className={`banner-dot${activeSlide === index ? ' active' : ''}`}
            type="button"
            role="tab"
            aria-selected={activeSlide === index}
            aria-label={`Mostrar banner ${index + 1}`}
            key={slide.desktop}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

function MobileMenu({ links, ctaHref, ctaLabel, onLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `mobile-menu-panel-${links.map((link) => link.href).join('-').replace(/[^a-z0-9]/gi, '')}`;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const handleLinkClick = (event) => {
    onLinkClick?.(event);
    closeMenu();
  };

  return (
    <div className={`mobile-menu${isOpen ? ' open' : ''}`}>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className="mobile-menu-panel" id={panelId}>
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
        <a href={ctaHref} className="mobile-menu-cta" onClick={handleLinkClick}>
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

function ServiceAreaPage({ area }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [area.slug]);

  return (
    <>
      <nav className="scrolled area-nav">
        <div className="nav-inner">
          <a href={routeHref('/')} className="nav-logo">
            <BrandLogo />
          </a>
          <ul className="nav-links">
            <li>
              <a href={routeHref('/#sobre')}>Sobre</a>
            </li>
            <li>
              <a href={routeHref('/#frota')}>Frota</a>
            </li>
            <li>
              <a href={routeHref('/#contato')}>Contato</a>
            </li>
          </ul>
          <a href={routeHref('/#contato')} className="nav-cta">
            Solicitar Cotação
          </a>
          <MobileMenu
            links={[
              { href: routeHref('/#sobre'), label: 'Sobre' },
              { href: routeHref('/#frota'), label: 'Frota' },
              { href: routeHref('/#contato'), label: 'Contato' },
            ]}
            ctaHref={routeHref('/#contato')}
            ctaLabel="Solicitar Cotação"
          />
        </div>
      </nav>

      <main className={`area-page area-${area.slug} ${area.accent === 'green' ? 'area-green' : 'area-gold'}`}>
        <section className="area-landing">
          <div className="area-landing-inner">
            <div className="area-landing-copy">
              <a href={routeHref('/#frota')} className="area-back">
                ← Voltar para frota
              </a>
              <div className="area-kicker-row">
                <img src={assetHref(area.icon)} alt="" className="area-kicker-icon" aria-hidden="true" />
                <span>{area.partner}</span>
              </div>
              <span className="section-tag">{area.eyebrow}</span>
              <h1>{area.headline}</h1>
              <p>{area.lead}</p>
              <div className="area-highlights">
                {area.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
              <a href={routeHref('/#contato')} className="btn-primary area-primary-action">
                {area.ctaText}
              </a>
            </div>
            <AreaVisual area={area} />
          </div>
        </section>

        <section className="area-content-section">
          <div className="area-content-inner">
            <div className="area-section-heading">
              <span className="section-tag">Soluções</span>
              <h2>{area.detailTitle}</h2>
              <p>{area.detailText}</p>
            </div>
            <div className="area-card-grid">
              {area.cards.map((card) => (
                <article className="area-info-card" key={card.title}>
                  <div className="area-card-icon">
                    <AreaLineIcon type={card.icon} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="area-final-cta">
          <div className="area-final-inner">
            <span>{area.partner}</span>
            <h2>Vamos encontrar a melhor rota para sua carga?</h2>
            <a href={routeHref('/#contato')} className="btn-primary">
              Solicitar cotação
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      setShowScrollTop(window.scrollY > 400);

      let current = '';
      document.querySelectorAll('section[id]').forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    const revealItems = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView();
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nome = formData.get('nome') || '(não informado)';
    const tel = formData.get('telefone') || '(não informado)';
    const email = formData.get('email') || '(não informado)';
    const area = formData.get('area') || '(não informado)';
    const msg = formData.get('mensagem') || '(não informado)';
    const text = encodeURIComponent(
      `Olá! Vim pelo site da EMS Transportes e gostaria de solicitar uma cotação.\n\n*Nome:* ${nome}\n*Telefone:* ${tel}\n*E-mail:* ${email}\n*Serviço de interesse:* ${area}\n*Mensagem:* ${msg}`,
    );

    window.open(`https://wa.me/5575999319091?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const navLinkStyle = (section) => ({
    color: activeSection === section ? 'var(--navy)' : undefined,
  });

  const handleSectionLinkClick = (event) => {
    const href = event.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) {
      return;
    }

    const target = document.getElementById(href.slice(1));
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  };

  return (
    <>
      <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo" onClick={handleSectionLinkClick}>
            <BrandLogo />
          </a>
          <ul className="nav-links">
            <li>
              <a href="#sobre" style={navLinkStyle('sobre')} onClick={handleSectionLinkClick}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#frota" style={navLinkStyle('frota')} onClick={handleSectionLinkClick}>
                Frota
              </a>
            </li>
            <li>
              <a href="#contato" style={navLinkStyle('contato')} onClick={handleSectionLinkClick}>
                Contato
              </a>
            </li>
          </ul>
          <a href="#contato" className="nav-cta" onClick={handleSectionLinkClick}>
            Solicitar Cotação
          </a>
          <MobileMenu
            links={[
              { href: '#sobre', label: 'Sobre' },
              { href: '#frota', label: 'Frota' },
              { href: '#contato', label: 'Contato' },
            ]}
            ctaHref="#contato"
            ctaLabel="Solicitar Cotação"
            onLinkClick={handleSectionLinkClick}
          />
        </div>
      </nav>

      <TransportBanners />

      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-accent-line" />
        <div className="hero-accent-line2" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-tag">Transportadora e logística</div>
            <h1>
              Movemos sua
              <br />
              <em>carga com</em>
              <br />
              segurança
            </h1>
            <p className="hero-sub">
              Transporte rodoviário, cargas fracionadas, lotação e distribuição com
              planejamento de rotas, acompanhamento próximo e compromisso com o prazo.
            </p>
            <div className="hero-actions">
              <a href="#contato" className="btn-primary" onClick={handleSectionLinkClick}>
                Solicitar Cotação
              </a>
              <a href="#frota" className="btn-outline" onClick={handleSectionLinkClick}>
                Conhecer Frota
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">
                  24<span>h</span>
                </div>
                <div className="stat-label">Monitoramento operacional</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">BR</div>
                <div className="stat-label">Atuação nacional</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">
                  100<span>%</span>
                </div>
                <div className="stat-label">Compromisso com sua carga</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="chart-card">
              <div className="chart-card-header">
                <span className="chart-card-title">Operação Logística</span>
                <span className="chart-badge">No prazo</span>
              </div>
              <div className="mini-chart">
                <div className="bar bar-1" />
                <div className="bar bar-2" />
                <div className="bar bar-3" />
                <div className="bar bar-4" />
                <div className="bar bar-5" />
                <div className="bar bar-6" />
                <div className="bar bar-7" />
              </div>
              <div className="trend-line" />
              <div className="chart-metrics">
                <div className="metric-item">
                  <div className="metric-label">Entregas</div>
                  <div className="metric-val">
                    98%<small>▲</small>
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">Rotas</div>
                  <div className="metric-val">
                    +12<small>▲</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-badge top">
              <div className="badge-icon badge-success">✓</div>
              <div className="badge-text">
                <strong>Carga Monitorada</strong>
                <small>Rastreamento ativo</small>
              </div>
            </div>
            <div className="floating-badge bottom">
              <div className="badge-icon badge-warm">✓</div>
              <div className="badge-text">
                <strong>Entrega Segura</strong>
                <small>Conferência realizada</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-orange-divider" />

      <section className="about" id="sobre">
        <div className="section-inner">
          <div className="complete-management reveal">
            <div className="complete-management-title">
              <h2>
                <span className="title-orange">Soluções Completas</span>
                <span className="title-blue">para sua carga</span>
              </h2>
              <div className="complete-title-divider" />
            </div>
            <div className="complete-management-grid" aria-label="Soluções de transporte e logística">
              {transportManagementItems.map((item) => (
                <div className={`complete-management-item ${item.tone}`} key={item.label}>
                  <div className="complete-management-icon" aria-hidden="true">
                    <CompleteManagementIcon type={item.icon} />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-section-divider" id="sobre-divisor" aria-hidden="true">
            <span className="about-divider-line" />
            <span className="about-divider-icon">
              <CompleteManagementIcon type="logistica" />
            </span>
            <span className="about-divider-line orange" />
          </div>
          <div className="about-grid">
            <div className="about-img-wrap reveal-left">
              <div className="about-img-box">
                <div className="about-big-letter">EMS</div>
                <div className="mission-block">
                  <div className="hero-tag">Nossa Missão</div>
                  <p>
                    Movimentar cargas com responsabilidade, agilidade e comunicação clara em
                    cada etapa da operação.
                  </p>
                </div>
                <div className="about-pillars">
                  <div className="pillar">
                    <div className="pillar-dot" />
                    <div className="pillar-text">Planejamento de rota conforme prazo, destino e perfil da carga</div>
                  </div>
                  <div className="pillar">
                    <div className="pillar-dot" />
                    <div className="pillar-text">Transporte fracionado, lotação e distribuição sob medida</div>
                  </div>
                  <div className="pillar">
                    <div className="pillar-dot" />
                    <div className="pillar-text">Acompanhamento próximo da coleta até a entrega</div>
                  </div>
                  <div className="pillar">
                    <div className="pillar-dot" />
                    <div className="pillar-text">Equipe preparada para cargas comerciais e industriais</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-content reveal-right">
              <span className="section-tag">Quem Somos</span>
              <h2 className="section-title">
                Transportadora com operação
                <br />
                planejada e segura
              </h2>
              <p>
                A <strong>EMS Logística</strong> atua para conectar empresas,
                fornecedores e clientes com transporte rodoviário eficiente, seguro e bem
                acompanhado.
              </p>
              <p>
                Com foco em <strong>cargas fracionadas, lotação, rotas dedicadas e distribuição</strong>,
                estruturamos cada embarque conforme volume, prazo, destino e necessidade de
                controle da operação.
              </p>
              <p>
                Nosso compromisso é simples: retirar, transportar e entregar com responsabilidade,
                mantendo o cliente informado durante o caminho.
              </p>
              <div className="value-cards">
                <div className="value-card">
                  <div className="value-card-icon">01</div>
                  <h4>Pontualidade</h4>
                  <p>Rotas planejadas para cumprir prazos acordados</p>
                </div>
                <div className="value-card">
                  <div className="value-card-icon">02</div>
                  <h4>Segurança</h4>
                  <p>Conferência, cuidado e gestão de risco no transporte</p>
                </div>
                <div className="value-card">
                  <div className="value-card-icon">03</div>
                  <h4>Atendimento Próximo</h4>
                  <p>Comunicação clara antes, durante e depois da entrega</p>
                </div>
                <div className="value-card">
                  <div className="value-card-icon">04</div>
                  <h4>Flexibilidade</h4>
                  <p>Modelos de frete adequados à operação da empresa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="diff">
        <div className="diff-inner">
          <div className="reveal diff-heading">
            <span className="section-tag">Por Que Escolher a EMS Transportes</span>
            <h2 className="section-title">
              Diferenciais que
              <br />
              fazem a carga chegar
            </h2>
          </div>
          <div className="diff-grid stagger">
            {differentials.map((item, index) => (
              <div className="diff-item reveal" key={item.number} style={{ '--i': index }}>
                <div className="diff-num">{item.number}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="management" id="frota">
        <div className="management-inner">
          <div className="management-visual reveal-left">
            <div className="management-box">
              <div className="management-label">Operação Logística</div>
              <div className="route-visual">
                <div className="route-item">
                  <div className="route-dot org" />
                  <div className="route-info">
                    <strong>Coleta</strong>
                    <small>Agendamento, conferência e retirada da carga</small>
                  </div>
                </div>
                <div className="route-connector">
                  <div className="route-line" />
                </div>
                <div className="route-item">
                  <div className="route-dot mid" />
                  <div className="route-info">
                    <strong>Monitoramento</strong>
                    <small>Rota acompanhada e comunicação ativa</small>
                  </div>
                </div>
                <div className="route-connector">
                  <div className="route-line" />
                </div>
                <div className="route-item">
                  <div className="route-dot end" />
                  <div className="route-info">
                    <strong>Entrega</strong>
                    <small>Finalização com cuidado e confirmação</small>
                  </div>
                </div>
              </div>
              <div className="management-note">
                <p>
                  Da coleta ao destino, conectamos rota, equipe e informação para manter sua
                  carga em movimento.
                </p>
              </div>
            </div>
          </div>
          <div className="management-content reveal-right">
            <span className="section-tag">Frota e atendimento para empresas</span>
            <h2 className="section-title">
              Transporte para cargas
              <br />
              de diferentes segmentos
            </h2>
            <p className="section-sub">
              Cada carga tem um cuidado próprio. A EMS combina frota, planejamento de rotas,
              controle operacional e comunicação para entregar com segurança e previsibilidade.
            </p>
            <div className="management-points">
              {managementPoints.map((point) => (
                <div className="mpoint" key={point.title}>
                  <div className="mpoint-icon">{point.icon}</div>
                  <div className="mpoint-text">
                    <strong>{point.title}</strong>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contato" className="btn-primary management-cta" onClick={handleSectionLinkClick}>
              Quero cotar transporte →
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-inner">
          <div className="contact-heading reveal">
            <span className="section-tag">Contato</span>
            <h2 className="section-title">
              Vamos conversar
              <br />
              sobre sua carga?
            </h2>
          </div>
          <div className="contact-info reveal-left">
            <p className="section-sub">
              Informe origem, destino, volume e prazo desejado. Nossa equipe retorna com a
              melhor solução para movimentar sua mercadoria.
            </p>
            <div className="contact-channels">
              <a href="https://wa.me/5575999319091" className="channel">
                <div className="channel-icon phone">📱</div>
                <div className="channel-text">
                  <strong>WhatsApp / Telefone</strong>
                  <span>+55 75 99931-9091</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/emsconsultoria.adm?igsh=MXcwNGFvejRpNGRudQ=="
                target="_blank"
                rel="noreferrer"
                className="channel"
              >
                <div className="channel-icon instagram">📸</div>
                <div className="channel-text">
                  <strong>Instagram</strong>
                  <span>@emsconsultoria.adm</span>
                </div>
              </a>
            </div>
            <div className="location-box">
              <p>Localização</p>
              <strong>Bahia, Brasil</strong>
              <span>Atendimento presencial e remoto em todo o Brasil</span>
            </div>
          </div>
          <form className="contact-form-box reveal-right" onSubmit={handleSubmit}>
            <h3>Solicite uma Conversa</h3>
            <p>Preencha o formulário e retornamos em breve para alinhar sua cotação.</p>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="nome" type="text" placeholder="Seu nome completo" />
              </div>
              <div className="form-group">
                <label htmlFor="telefone">WhatsApp</label>
                <input id="telefone" name="telefone" type="tel" placeholder="(75) 9 0000-0000" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" placeholder="seu@email.com.br" />
            </div>
            <div className="form-group">
              <label htmlFor="area">Serviço de Interesse</label>
              <select id="area" name="area" defaultValue="">
                <option value="">Selecione o serviço</option>
                <option>Transporte Rodoviário</option>
                <option>Carga Fracionada</option>
                <option>Carga Lotação</option>
                <option>Logística Integrada</option>
                <option>Armazenagem e Distribuição</option>
                <option>Segurança e Rastreamento</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Conte origem, destino, tipo de carga, volume e prazo desejado..."
              />
            </div>
            <button className="submit-btn" type="submit">
              Enviar Cotação via WhatsApp →
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <strong>EMS Transportes</strong>
            <span>Transporte rodoviário · Logística · Distribuição</span>
          </div>
          <div className="footer-links">
            <a href="#sobre" onClick={handleSectionLinkClick}>Sobre</a>
            <a href="#frota" onClick={handleSectionLinkClick}>Frota</a>
            <a href="#contato" onClick={handleSectionLinkClick}>Contato</a>
          </div>
          <div className="footer-copy">© 2026 EMS Transportes · Todos os direitos reservados</div>
        </div>
      </footer>

      <button
        className={`scroll-top${showScrollTop ? ' show' : ''}`}
        type="button"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
}

function App() {
  const normalizedPath = getCurrentRoute();
  const selectedArea = transportServiceAreas.find((area) => normalizedPath === `/${area.slug}`);

  useEffect(() => {
    if (!selectedArea && normalizedPath !== '/' && normalizedPath !== '/estilo-1') {
      window.history.replaceState(null, '', routeHref('/'));
    }
  }, [normalizedPath, selectedArea]);

  if (selectedArea) {
    return <ServiceAreaPage area={selectedArea} />;
  }

  return <HomePage />;
}

export default App;
