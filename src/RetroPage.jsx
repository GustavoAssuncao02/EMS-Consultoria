import { differentials, managementPoints, services } from './content.js';
import { assetHref, routeHref } from './routes.js';
import './RetroPage.css';

function RetroPage() {
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
    <main className="retro-page">
      <header className="retro-header" id="home">
        <div className="retro-topline">
          <div className="retro-shell">
            <span>Consultoria Comercial e Administrativa</span>
            <a href="https://wa.me/5575999319091">+55 75 99931-9091</a>
          </div>
        </div>

        <div className="retro-masthead retro-shell">
          <a href={routeHref('/retro#home')} className="retro-logo">
            <img
              src={assetHref('ems-logo-navbar.jpeg')}
              alt="EMS Consultoria Comercial e Administrativa - Apoio à Gestão"
            />
          </a>
          <div className="retro-masthead-copy">
            <strong>Bahia, Brasil</strong>
            <span>Atendimento presencial e remoto em todo o Brasil</span>
          </div>
        </div>

        <nav className="retro-nav">
          <div className="retro-shell retro-nav-inner">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#metodo">Método</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>
      </header>

      <section className="retro-hero">
        <div className="retro-shell retro-hero-grid">
          <div className="retro-hero-copy">
            <p className="retro-label">Apoio à gestão empresarial</p>
            <h1>Gestão sólida para empresas que querem crescer com controle.</h1>
            <p>
              Da eficiência operacional ao controle fiscal, a EMS apoia empresas de diferentes
              segmentos com processos claros, análise criteriosa e acompanhamento próximo.
            </p>
            <div className="retro-actions">
              <a href="#contato" className="retro-primary">
                Solicitar conversa
              </a>
              <a href="#servicos" className="retro-secondary">
                Conhecer serviços
              </a>
            </div>
          </div>

          <aside className="retro-ledger" aria-label="Resumo institucional">
            <div className="retro-ledger-title">Resumo Executivo</div>
            <dl>
              <div>
                <dt>30+</dt>
                <dd>Anos de experiência</dd>
              </div>
              <div>
                <dt>5</dt>
                <dd>Áreas de atuação</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>Foco em resultados</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="retro-about" id="sobre">
        <div className="retro-shell retro-two-col">
          <div>
            <p className="retro-label">Apresentação institucional</p>
            <h2>Consultoria com visão estratégica e prática.</h2>
          </div>
          <div className="retro-letter">
            <p>
              A <strong>EMS Consultoria Comercial e Administrativa</strong> nasceu da convicção
              de que toda empresa, independente do porte, merece acesso a uma gestão de
              qualidade.
            </p>
            <p>
              Com atuação voltada para empresas de diferentes áreas e sólida expertise fiscal,
              financeira, administrativa e de processos, oferecemos orientação técnica para
              decisões mais seguras e crescimento sustentável.
            </p>
            <p>
              Cada projeto começa com diagnóstico aprofundado, definição de prioridades e
              acompanhamento para que a gestão avance com método.
            </p>
          </div>
        </div>
      </section>

      <section className="retro-services" id="servicos">
        <div className="retro-shell">
          <div className="retro-section-head">
            <p className="retro-label">Áreas de atuação</p>
            <h2>Serviços de consultoria</h2>
          </div>
          <div className="retro-service-table">
            {services.map((service, index) => (
              <article className="retro-service-row" key={service.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ul>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="retro-method" id="metodo">
        <div className="retro-shell retro-method-grid">
          <div>
            <p className="retro-label">Método de trabalho</p>
            <h2>Processo direto, técnico e acompanhável.</h2>
            <p>
              A consultoria não nasce de fórmulas prontas. Ela parte da realidade da empresa,
              organiza prioridades e transforma análise em ação.
            </p>
          </div>
          <div className="retro-method-list">
            {managementPoints.map((point, index) => (
              <article className="retro-method-item" key={point.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="retro-differentials" id="diferenciais">
        <div className="retro-shell">
          <div className="retro-section-head retro-center">
            <p className="retro-label">Por que escolher a EMS</p>
            <h2>Diferenciais que preservam clareza e resultado.</h2>
          </div>
          <div className="retro-diff-grid">
            {differentials.map((item) => (
              <article className="retro-diff-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="retro-contact" id="contato">
        <div className="retro-shell retro-contact-grid">
          <div className="retro-contact-copy">
            <p className="retro-label">Contato</p>
            <h2>Vamos conversar sobre seu negócio?</h2>
            <p>
              Entre em contato e descubra como a EMS pode ajudar a sua empresa a crescer com
              solidez, controle e eficiência.
            </p>
            <div className="retro-contact-box">
              <strong>WhatsApp / Telefone</strong>
              <a href="https://wa.me/5575999319091">+55 75 99931-9091</a>
              <strong>Instagram</strong>
              <a
                href="https://www.instagram.com/emsconsultoria.adm?igsh=MXcwNGFvejRpNGRudQ=="
                target="_blank"
                rel="noreferrer"
              >
                @emsconsultoria.adm
              </a>
            </div>
          </div>

          <form className="retro-form" onSubmit={handleSubmit}>
            <div className="retro-form-title">Solicitação de contato</div>
            <label>
              Nome
              <input name="nome" type="text" placeholder="Seu nome completo" />
            </label>
            <label>
              WhatsApp
              <input name="telefone" type="tel" placeholder="(75) 9 0000-0000" />
            </label>
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

      <footer className="retro-footer">
        <div className="retro-shell">
          <strong>EMS Consultoria</strong>
          <span>© 2026 EMS Consultoria · Todos os direitos reservados</span>
        </div>
      </footer>
    </main>
  );
}

export default RetroPage;
