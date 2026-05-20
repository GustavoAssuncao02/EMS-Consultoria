import './MainPage.css';

const siteOptions = [
  {
    title: 'Estilo 1',
    path: '/estilo-1',
    tag: 'Opção 1',
    description: 'Versão moderna com hero escuro, gráficos e presença visual mais forte.',
  },
  {
    title: 'Estilo 2',
    path: '/estilo-2',
    tag: 'Opção 2',
    description: 'Layout direto, cores institucionais e estrutura enxuta.',
  },
  {
    title: 'Estilo 3',
    path: '/estilo-3',
    tag: 'Opção 3',
    description: 'Visual old school, institucional, com serifas e blocos formais.',
  },
  {
    title: 'Estilo 4',
    path: '/estilo-4',
    tag: 'Opção 4',
    description: 'Pouco ruído visual, bastante branco e leitura rápida.',
  },
  {
    title: 'Estilo 5',
    path: '/estilo-5',
    tag: 'Opção 5',
    description: 'Página arejada, calma, com azul claro e laranja pontual.',
  },
  {
    title: 'Estilo 6',
    path: '/estilo-6',
    tag: 'Opção 6',
    description: 'Hero azul sólido, leitura forte e blocos brancos com acento laranja.',
  },
  {
    title: 'Estilo 7',
    path: '/estilo-7',
    tag: 'Opção 7',
    description: 'Laranja mais protagonista, com azul dando estrutura e contraste.',
  },
  {
    title: 'Estilo 8',
    path: '/estilo-8',
    tag: 'Opção 8',
    description: 'Composição editorial, mais elegante, com serifas e divisões firmes.',
  },
  {
    title: 'Estilo 9',
    path: '/estilo-9',
    tag: 'Opção 9',
    description: 'Visual executivo com blocos densos, azul profundo e CTAs em laranja.',
  },
];

function MainPage() {
  return (
    <main className="main-page">
      <section className="main-hero">
        <div className="main-shell">
          <nav className="main-nav">
            <img
              src="/ems-logo-navbar.jpeg"
              alt="EMS Consultoria Comercial e Administrativa - Apoio à Gestão"
            />
            <a href="/estilo-1">Abrir estilo 1</a>
          </nav>

          <div className="main-heading">
            <span>EMS Consultoria</span>
            <h1>Escolha uma direção visual para o site.</h1>
            <p>
              Todas as opções usam a mesma base de conteúdo, mas cada uma muda a sensação da
              marca: mais forte, clássica, direta, essencial, leve ou mais corporativa.
            </p>
          </div>

          <div className="main-options">
            {siteOptions.map((option) => (
              <a className="main-card" href={option.path} key={option.path}>
                <span>{option.tag}</span>
                <h2>{option.title}</h2>
                <p>{option.description}</p>
                <strong>Abrir site</strong>
              </a>
            ))}
          </div>

          <footer className="main-footer">
            <strong>EMS Consultoria</strong>
            <span>© 2026 EMS Consultoria · Todos os direitos reservados</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
