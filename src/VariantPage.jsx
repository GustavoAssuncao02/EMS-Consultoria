import { differentials, managementPoints, services } from './content.js';
import './VariantPage.css';

const variants = {
  minimalista: {
    label: 'Estilo 4',
    path: '/estilo-4',
    title: 'Gestão clara, processos simples, resultados mensuráveis.',
    intro:
      'Uma apresentação limpa da EMS, com foco em leitura rápida, hierarquia objetiva e decisões sem excesso visual.',
    note: 'Menos ruído. Mais clareza para entender onde a consultoria atua e como ela pode apoiar a sua empresa.',
  },
  suave: {
    label: 'Estilo 5',
    path: '/estilo-5',
    title: 'Gestão com leveza, método e direção.',
    intro:
      'Uma página mais calma e arejada, com azul claro, branco e laranja em pontos estratégicos.',
    note: 'Ideal para transmitir confiança com uma presença visual tranquila, moderna e sem agressividade.',
  },
  contraste: {
    label: 'Estilo 6',
    path: '/estilo-6',
    title: 'Presença institucional para decisões com mais controle.',
    intro:
      'Uma versão com azul mais dominante, blocos brancos e laranja usado como sinal de ação e prioridade.',
    note: 'A paleta inverte a força visual: o azul sustenta a autoridade e o laranja conduz os próximos passos.',
  },
  laranja: {
    label: 'Estilo 7',
    path: '/estilo-7',
    title: 'Energia comercial com base técnica de gestão.',
    intro:
      'Aqui o laranja assume o primeiro plano, criando uma página mais ativa sem fugir da linguagem empresarial.',
    note: 'O azul entra como estrutura, enquanto o laranja destaca movimento, crescimento e contato.',
  },
  editorial: {
    label: 'Estilo 8',
    path: '/estilo-8',
    title: 'Consultoria apresentada com sobriedade editorial.',
    intro:
      'Uma leitura mais elegante, institucional e espaçada, com títulos de presença e divisões claras.',
    note: 'O azul aparece como texto nobre e o laranja como marcação precisa, sem competir com o conteúdo.',
  },
  executivo: {
    label: 'Estilo 9',
    path: '/estilo-9',
    title: 'Uma página executiva para vender confiança rápido.',
    intro:
      'Blocos mais densos, alto contraste e CTAs firmes para uma percepção corporativa de alto impacto.',
    note: 'A experiência privilegia decisão: contraste forte, áreas bem separadas e contato sempre evidente.',
  },
};

function VariantPage({ type }) {
  const variant = variants[type] || variants.minimalista;

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
    <main className={`variant-page ${type}`}>
      <nav className="variant-nav">
        <div className="variant-shell variant-nav-inner">
          <a href={`${variant.path}#home`} className="variant-logo">
            <img
              src="/ems-logo-navbar.jpeg"
              alt="EMS Consultoria Comercial e Administrativa - Apoio à Gestão"
            />
          </a>
          <div className="variant-links">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#metodo">Método</a>
            <a href="#contato">Contato</a>
          </div>
          <a href="/main" className="variant-switch">
            Ver estilos
          </a>
        </div>
      </nav>

      <section className="variant-hero" id="home">
        <div className="variant-shell variant-hero-grid">
          <div className="variant-hero-copy">
            <span>{variant.label}</span>
            <h1>{variant.title}</h1>
            <p>{variant.intro}</p>
            <div className="variant-actions">
              <a href="#contato">Falar com a EMS</a>
              <a href="#servicos">Ver serviços</a>
            </div>
          </div>
          <aside className="variant-note">
            <strong>EMS Consultoria</strong>
            <p>{variant.note}</p>
            <div className="variant-mini-metrics">
              <div>
                <b>30+</b>
                <small>Anos de experiência</small>
              </div>
              <div>
                <b>5</b>
                <small>Áreas de atuação</small>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="variant-about" id="sobre">
        <div className="variant-shell variant-two-col">
          <div>
            <span className="variant-kicker">Quem Somos</span>
            <h2>Consultoria com visão estratégica e prática.</h2>
          </div>
          <div className="variant-copy">
            <p>
              A <strong>EMS Consultoria Comercial e Administrativa</strong> nasceu da
              convicção de que toda empresa, independente do porte, merece acesso a uma gestão
              de qualidade.
            </p>
            <p>
              Com atuação voltada para empresas de diferentes áreas e sólida expertise fiscal,
              financeira, administrativa e de processos, a EMS apoia decisões mais seguras e
              crescimento sustentável.
            </p>
          </div>
        </div>
      </section>

      <section className="variant-services" id="servicos">
        <div className="variant-shell">
          <div className="variant-heading">
            <span className="variant-kicker">O Que Fazemos</span>
            <h2>Nossas áreas de atuação</h2>
          </div>
          <div className="variant-service-grid">
            {services.map((service) => (
              <article className="variant-service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div>
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="variant-method" id="metodo">
        <div className="variant-shell variant-method-grid">
          <div>
            <span className="variant-kicker">Método</span>
            <h2>Da análise à execução, com acompanhamento.</h2>
            <p>
              A consultoria começa pela leitura da realidade da empresa e avança com
              prioridades, indicadores e ações práticas.
            </p>
          </div>
          <div className="variant-point-list">
            {managementPoints.map((point, index) => (
              <article className="variant-point" key={point.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="variant-diff">
        <div className="variant-shell">
          <div className="variant-heading variant-centered">
            <span className="variant-kicker">Diferenciais</span>
            <h2>Por que escolher a EMS</h2>
          </div>
          <div className="variant-diff-grid">
            {differentials.map((item) => (
              <article className="variant-diff-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="variant-contact" id="contato">
        <div className="variant-shell variant-contact-grid">
          <div>
            <span className="variant-kicker">Contato</span>
            <h2>Vamos conversar sobre seu negócio?</h2>
            <p>
              Entre em contato e descubra como a EMS pode ajudar sua empresa a crescer com
              solidez e eficiência.
            </p>
            <a className="variant-whatsapp" href="https://wa.me/5575999319091">
              +55 75 99931-9091
            </a>
          </div>
          <form className="variant-form" onSubmit={handleSubmit}>
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
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </section>

      <footer className="variant-footer">
        <div className="variant-shell">
          <strong>EMS Consultoria</strong>
          <span>© 2026 EMS Consultoria · Todos os direitos reservados</span>
        </div>
      </footer>
    </main>
  );
}

export default VariantPage;
