export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-tag-line" />
          Assistência Jurídica Especializada
        </div>
        <h1 className="hero-title">
          Defesa da cidadania,<br />
          dos direitos humanos<br />
          e do interesse público
        </h1>
        <p className="hero-subtitle">
          Atuação em Direito Administrativo, Constitucional, Ambiental e Civil —
          com ética, transparência e compromisso com a efetividade dos direitos
          fundamentais.
        </p>
        <div className="hero-actions">
          <a href="#atuacoes" className="btn btn-primary">Áreas de Atuação</a>
          <a href="#contato" className="btn btn-outline hero-btn-light">Entrar em Contato</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Role para conhecer</span>
        <div className="hero-scroll-line" />
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 0 80px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.pexels.com/photos/6077091/pexels-photo-6077091.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600');
          background-size: cover;
          background-position: center;
          animation: scaleIn 1.2s ease;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(74, 14, 18, 0.92) 0%,
            rgba(74, 14, 18, 0.78) 50%,
            rgba(74, 14, 18, 0.88) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
        }

        .hero-tag {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent-400);
          margin-bottom: 28px;
          animation: fadeInUp 0.8s ease 0.2s both;
        }

        .hero-tag-line {
          width: 40px;
          height: 1px;
          background-color: var(--accent-500);
        }

        .hero-title {
          color: #fff;
          font-weight: 400;
          font-size: clamp(2.2rem, 5vw, 4.2rem);
          line-height: 1.15;
          max-width: 760px;
          margin-bottom: 28px;
          animation: fadeInUp 0.8s ease 0.4s both;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.75);
          max-width: 560px;
          margin-bottom: 40px;
          line-height: 1.7;
          animation: fadeInUp 0.8s ease 0.6s both;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease 0.8s both;
        }

        .hero-btn-light {
          color: #fff;
          border-color: rgba(255,255,255,0.35);
        }

        .hero-btn-light:hover {
          background-color: #fff;
          color: var(--primary-900);
          border-color: #fff;
        }

        .hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 1;
          animation: fadeIn 1.5s ease 1s both;
        }

        .hero-scroll span {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        .hero-scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
          position: relative;
        }

        .hero-scroll-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background: linear-gradient(to bottom, var(--accent-400), transparent);
          animation: scrollHint 2s ease-in-out infinite;
        }

        @keyframes scrollHint {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(25px); opacity: 0; }
        }

        @media (max-width: 768px) {
          .hero-scroll {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
