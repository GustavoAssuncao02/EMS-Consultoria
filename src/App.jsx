import { useEffect, useState } from 'react';
import MainPage from './MainPage.jsx';
import RetroPage from './RetroPage.jsx';
import SimplePage from './SimplePage.jsx';
import VariantPage from './VariantPage.jsx';
import { differentials, managementPoints, services } from './content.js';

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

  const navLinkStyle = (section) => ({
    color: activeSection === section ? 'var(--navy)' : undefined,
  });

  return (
    <>
      <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo">
            <img
              src="/ems-logo-navbar.jpeg"
              alt="EMS Consultoria Comercial e Administrativa - Apoio à Gestão"
              className="nav-logo-img"
            />
          </a>
          <ul className="nav-links">
            <li>
              <a href="#sobre" style={navLinkStyle('sobre')}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#servicos" style={navLinkStyle('servicos')}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#gestao" style={navLinkStyle('gestao')}>
                Gestão
              </a>
            </li>
            <li>
              <a href="#contato" style={navLinkStyle('contato')}>
                Contato
              </a>
            </li>
          </ul>
          <a href="#contato" className="nav-cta">
            Falar com Consultor
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-bg-grid" />
        <div className="hero-accent-line" />
        <div className="hero-accent-line2" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-tag">Consultoria Comercial e Administrativa</div>
            <h1>
              Gestão que
              <br />
              <em>transforma</em>
              <br />
              resultados
            </h1>
            <p className="hero-sub">
              Da eficiência operacional ao controle fiscal, apoiamos empresas de diferentes
              segmentos a crescerem com processos sólidos e gestão estratégica.
            </p>
            <div className="hero-actions">
              <a href="#contato" className="btn-primary">
                Agendar Consultoria
              </a>
              <a href="#servicos" className="btn-outline">
                Ver Serviços
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">
                  30<span>+</span>
                </div>
                <div className="stat-label">Anos de experiência</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">5</div>
                <div className="stat-label">Áreas de atuação</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">
                  100<span>%</span>
                </div>
                <div className="stat-label">Foco em resultados</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="chart-card">
              <div className="chart-card-header">
                <span className="chart-card-title">Performance Empresarial</span>
                <span className="chart-badge">↑ +34%</span>
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
                  <div className="metric-label">Receita</div>
                  <div className="metric-val">
                    R$ 2,4M<small>▲</small>
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">Eficiência</div>
                  <div className="metric-val">
                    +28%<small>▲</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-badge top">
              <div className="badge-icon badge-success">✓</div>
              <div className="badge-text">
                <strong>Processos Otimizados</strong>
                <small>Consultoria concluída</small>
              </div>
            </div>
            <div className="floating-badge bottom">
              <div className="badge-icon badge-warm">📋</div>
              <div className="badge-text">
                <strong>Compliance Fiscal</strong>
                <small>100% em dia</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-img-wrap reveal-left">
              <div className="about-img-box">
                <div className="about-big-letter">EMS</div>
                <div className="mission-block">
                  <div className="hero-tag">Nossa Missão</div>
                  <p>
                    Transformar a gestão empresarial com soluções práticas, resultados
                    mensuráveis e suporte contínuo.
                  </p>
                </div>
                <div className="about-pillars">
                  <div className="pillar">
                    <div className="pillar-dot" />
                    <div className="pillar-text">Diagnóstico preciso da realidade empresarial</div>
                  </div>
                  <div className="pillar">
                    <div className="pillar-dot" />
                    <div className="pillar-text">Soluções personalizadas para cada negócio</div>
                  </div>
                  <div className="pillar">
                    <div className="pillar-dot" />
                    <div className="pillar-text">Acompanhamento próximo e resultados reais</div>
                  </div>
                  <div className="pillar">
                    <div className="pillar-dot" />
                    <div className="pillar-text">Expertise em gestão administrativa e processos</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-content reveal-right">
              <span className="section-tag">Quem Somos</span>
              <h2 className="section-title">
                Consultoria com visão
                <br />
                estratégica e prática
              </h2>
              <p>
                A <strong>EMS Consultoria Comercial e Administrativa</strong> nasceu da
                convicção de que toda empresa, independente do porte, merece acesso a uma
                gestão de qualidade.
              </p>
              <p>
                Com atuação voltada para <strong>empresas de diferentes áreas</strong> e
                sólida expertise nas áreas fiscal, financeira, administrativa e de processos,
                oferecemos muito mais do que consultoria: somos parceiros no crescimento
                sustentável do seu negócio.
              </p>
              <p>
                Cada projeto começa com um diagnóstico aprofundado e termina com resultados
                que você pode medir.
              </p>
              <div className="value-cards">
                <div className="value-card">
                  <div className="value-card-icon">🎯</div>
                  <h4>Foco em Resultado</h4>
                  <p>Metas claras e indicadores reais de desempenho</p>
                </div>
                <div className="value-card">
                  <div className="value-card-icon">🤝</div>
                  <h4>Parceria Real</h4>
                  <p>Presença ativa durante toda a jornada</p>
                </div>
                <div className="value-card">
                  <div className="value-card-icon">🧭</div>
                  <h4>Visão Estratégica</h4>
                  <p>Análise profunda com perspectiva de mercado</p>
                </div>
                <div className="value-card">
                  <div className="value-card-icon">⚡</div>
                  <h4>Agilidade</h4>
                  <p>Respostas rápidas e soluções práticas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos">
        <div className="section-inner">
          <div className="services-header">
            <div className="reveal">
              <span className="section-tag">O Que Fazemos</span>
              <h2 className="section-title">
                Nossas Áreas
                <br />
                de Atuação
              </h2>
            </div>
            <p className="section-sub services-sub reveal">
              Soluções completas para os principais desafios da gestão empresarial moderna.
            </p>
          </div>
          <div className="services-grid stagger">
            {services.map((service, index) => (
              <div
                className={`service-card reveal${service.featured ? ' featured' : ''}`}
                key={service.title}
                style={{ '--i': index }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span className="stag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="service-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="diff">
        <div className="diff-inner">
          <div className="reveal diff-heading">
            <span className="section-tag">Por Que Escolher a EMS</span>
            <h2 className="section-title">
              Diferenciais que
              <br />
              fazem a diferença
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

      <section className="management" id="gestao">
        <div className="management-inner">
          <div className="management-visual reveal-left">
            <div className="management-box">
              <div className="management-label">Gestão Empresarial</div>
              <div className="route-visual">
                <div className="route-item">
                  <div className="route-dot org" />
                  <div className="route-info">
                    <strong>Diagnóstico</strong>
                    <small>Leitura da operação e dos números</small>
                  </div>
                </div>
                <div className="route-connector">
                  <div className="route-line" />
                </div>
                <div className="route-item">
                  <div className="route-dot mid" />
                  <div className="route-info">
                    <strong>Plano de Ação</strong>
                    <small>Prioridades, processos e indicadores</small>
                  </div>
                </div>
                <div className="route-connector">
                  <div className="route-line" />
                </div>
                <div className="route-item">
                  <div className="route-dot end" />
                  <div className="route-info">
                    <strong>Resultado</strong>
                    <small>Controle, margem e crescimento</small>
                  </div>
                </div>
              </div>
              <div className="management-note">
                <p>
                  Do financeiro à operação, conectamos processos, pessoas e indicadores para
                  melhorar a gestão.
                </p>
              </div>
            </div>
          </div>
          <div className="management-content reveal-right">
            <span className="section-tag">Atendimento para Empresas</span>
            <h2 className="section-title">
              Soluções para empresas
              <br />
              de todos os setores
            </h2>
            <p className="section-sub">
              Cada empresa tem uma realidade própria. A EMS combina análise fiscal, financeira,
              administrativa e operacional para construir um plano de consultoria aderente ao
              seu momento.
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
            <a href="#contato" className="btn-primary management-cta">
              Quero essa consultoria →
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-inner">
          <div className="contact-info reveal-left">
            <span className="section-tag">Contato</span>
            <h2 className="section-title">
              Vamos conversar
              <br />
              sobre seu negócio?
            </h2>
            <p className="section-sub">
              Entre em contato e descubra como a EMS pode ajudar a sua empresa a crescer com
              solidez e eficiência.
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
            <p>Preencha o formulário e retornamos em breve com uma proposta personalizada.</p>
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
              <label htmlFor="area">Área de Interesse</label>
              <select id="area" name="area" defaultValue="">
                <option value="">Selecione a área de consultoria...</option>
                <option>Consultoria Empresarial</option>
                <option>Consultoria Fiscal</option>
                <option>Consultoria Financeira</option>
                <option>Consultoria de Processos</option>
                <option>Melhoria de Processos</option>
                <option>Apoio à Gestão Geral</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Conte um pouco sobre seu negócio e o que você busca melhorar..."
              />
            </div>
            <button className="submit-btn" type="submit">
              Enviar Mensagem via WhatsApp →
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <strong>EMS Consultoria</strong>
            <span>Consultoria Comercial e Administrativa · Apoio à Gestão</span>
          </div>
          <div className="footer-links">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#gestao">Gestão</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="footer-copy">© 2026 EMS Consultoria · Todos os direitos reservados</div>
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
  const normalizedPath = window.location.pathname.replace(/\/+$/, '');

  if (normalizedPath === '/main') {
    return <MainPage />;
  }

  if (normalizedPath === '/estilo-1') {
    return <HomePage />;
  }

  if (normalizedPath === '/simples' || normalizedPath === '/estilo-2') {
    return <SimplePage />;
  }

  if (normalizedPath === '/retro' || normalizedPath === '/estilo-3') {
    return <RetroPage />;
  }

  if (normalizedPath === '/minimalista' || normalizedPath === '/estilo-4') {
    return <VariantPage type="minimalista" />;
  }

  if (normalizedPath === '/suave' || normalizedPath === '/estilo-5') {
    return <VariantPage type="suave" />;
  }

  if (normalizedPath === '/estilo-6') {
    return <VariantPage type="contraste" />;
  }

  if (normalizedPath === '/estilo-7') {
    return <VariantPage type="laranja" />;
  }

  if (normalizedPath === '/estilo-8') {
    return <VariantPage type="editorial" />;
  }

  if (normalizedPath === '/estilo-9') {
    return <VariantPage type="executivo" />;
  }

  return <HomePage />;
}

export default App;
