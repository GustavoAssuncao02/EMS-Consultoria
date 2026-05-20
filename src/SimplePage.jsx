import { differentials, managementPoints, services } from './content.js';
import { assetHref, routeHref } from './routes.js';
import './SimplePage.css';

function SimplePage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nome = formData.get('nome') || '(não informado)';
    const tel = formData.get('telefone') || '(não informado)';
    const email = formData.get('email') || '(não informado)';
    const area = formData.get('area') || '(não informado)';
    const msg = formData.get('mensagem') || '(não informado)';
    const text = encodeURIComponent(
      `Olá! Vim pelo site da EMS Consultoria.\n\n*Nome:* ${nome}\n*Telefone:* ${tel}\n*E-mail:* ${email}\n*Área de interesse:* ${area}\n*Mensagem:* ${msg}`,
    );

    window.open(`https://wa.me/5575999319091?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="simple-page">
      <nav className="simple-nav">
        <div className="simple-shell simple-nav-inner">
          <a href={routeHref('/simples#home')} className="simple-logo">
            <img
              src={assetHref('ems-logo-navbar.jpeg')}
              alt="EMS Consultoria Comercial e Administrativa - Apoio à Gestão"
            />
          </a>
          <div className="simple-menu">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#gestao">Gestão</a>
            <a href="#contato">Contato</a>
          </div>
          <a href="#contato" className="simple-nav-button">
            Falar com Consultor
          </a>
        </div>
      </nav>

      <section className="simple-hero" id="home">
        <div className="simple-shell simple-hero-grid">
          <div className="simple-hero-copy">
            <span className="simple-kicker">Consultoria Comercial e Administrativa</span>
            <h1>Gestão que transforma resultados</h1>
            <p>
              Da eficiência operacional ao controle fiscal, apoiamos empresas de diferentes
              segmentos a crescerem com processos sólidos e gestão estratégica.
            </p>
            <div className="simple-actions">
              <a href="#contato" className="simple-button-primary">
                Agendar Consultoria
              </a>
              <a href="#servicos" className="simple-button-secondary">
                Ver Serviços
              </a>
            </div>
          </div>

          <aside className="simple-hero-panel" aria-label="Resumo da consultoria">
            <div className="simple-panel-title">Apoio à gestão com método</div>
            <div className="simple-steps">
              <div>
                <strong>01</strong>
                <span>Diagnóstico</span>
                <p>Leitura clara da realidade empresarial.</p>
              </div>
              <div>
                <strong>02</strong>
                <span>Plano de ação</span>
                <p>Prioridades, processos e indicadores.</p>
              </div>
              <div>
                <strong>03</strong>
                <span>Acompanhamento</span>
                <p>Execução próxima e ajustes contínuos.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="simple-about" id="sobre">
        <div className="simple-shell simple-two-column">
          <div>
            <span className="simple-kicker">Quem Somos</span>
            <h2>Consultoria com visão estratégica e prática</h2>
          </div>
          <div className="simple-text-block">
            <p>
              A <strong>EMS Consultoria Comercial e Administrativa</strong> nasceu da
              convicção de que toda empresa, independente do porte, merece acesso a uma gestão
              de qualidade.
            </p>
            <p>
              Com atuação voltada para empresas de diferentes áreas e sólida expertise nas
              áreas fiscal, financeira, administrativa e de processos, somos parceiros no
              crescimento sustentável do seu negócio.
            </p>
          </div>
        </div>
      </section>

      <section className="simple-services" id="servicos">
        <div className="simple-shell">
          <div className="simple-section-heading">
            <span className="simple-kicker">O Que Fazemos</span>
            <h2>Nossas áreas de atuação</h2>
            <p>Soluções completas para os principais desafios da gestão empresarial moderna.</p>
          </div>
          <div className="simple-service-grid">
            {services.map((service) => (
              <article className="simple-service-card" key={service.title}>
                <div className="simple-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="simple-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="simple-diff">
        <div className="simple-shell">
          <div className="simple-section-heading simple-centered">
            <span className="simple-kicker">Por Que Escolher a EMS</span>
            <h2>Diferenciais que fazem a diferença</h2>
          </div>
          <div className="simple-diff-grid">
            {differentials.map((item) => (
              <article className="simple-diff-item" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="simple-management" id="gestao">
        <div className="simple-shell simple-management-grid">
          <div>
            <span className="simple-kicker">Atendimento para Empresas</span>
            <h2>Soluções para empresas de todos os setores</h2>
            <p>
              Cada empresa tem uma realidade própria. A EMS combina análise fiscal,
              financeira, administrativa e operacional para construir um plano de consultoria
              aderente ao seu momento.
            </p>
          </div>
          <div className="simple-point-list">
            {managementPoints.map((point) => (
              <article className="simple-point" key={point.title}>
                <div>{point.icon}</div>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="simple-contact" id="contato">
        <div className="simple-shell simple-contact-grid">
          <div>
            <span className="simple-kicker">Contato</span>
            <h2>Vamos conversar sobre seu negócio?</h2>
            <p>
              Entre em contato e descubra como a EMS pode ajudar a sua empresa a crescer com
              solidez e eficiência.
            </p>
            <div className="simple-contact-links">
              <a href="https://wa.me/5575999319091">+55 75 99931-9091</a>
              <a
                href="https://www.instagram.com/emsconsultoria.adm?igsh=MXcwNGFvejRpNGRudQ=="
                target="_blank"
                rel="noreferrer"
              >
                @emsconsultoria.adm
              </a>
            </div>
          </div>

          <form className="simple-form" onSubmit={handleSubmit}>
            <div className="simple-form-row">
              <label>
                Nome
                <input name="nome" type="text" placeholder="Seu nome completo" />
              </label>
              <label>
                WhatsApp
                <input name="telefone" type="tel" placeholder="(75) 9 0000-0000" />
              </label>
            </div>
            <label>
              E-mail
              <input name="email" type="email" placeholder="seu@email.com.br" />
            </label>
            <label>
              Área de Interesse
              <select name="area" defaultValue="">
                <option value="">Selecione a área de consultoria...</option>
                <option>Consultoria Empresarial</option>
                <option>Consultoria Fiscal</option>
                <option>Consultoria Financeira</option>
                <option>Consultoria de Processos</option>
                <option>Melhoria de Processos</option>
                <option>Apoio à Gestão Geral</option>
              </select>
            </label>
            <label>
              Mensagem
              <textarea
                name="mensagem"
                placeholder="Conte um pouco sobre seu negócio e o que você busca melhorar..."
              />
            </label>
            <button type="submit">Enviar Mensagem via WhatsApp</button>
          </form>
        </div>
      </section>

      <footer className="simple-footer">
        <div className="simple-shell">
          <strong>EMS Consultoria</strong>
          <span>© 2026 EMS Consultoria · Todos os direitos reservados</span>
        </div>
      </footer>
    </main>
  );
}

export default SimplePage;
