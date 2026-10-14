export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-tag">
            <span className="hero-tag-line" />
            Assistência Jurídica Especializada
          </div>

          <h1 className="hero-title">
            Defesa da cidadania,
            <br />
            dos direitos humanos
            <br />
            e do interesse público
          </h1>

          <p className="hero-subtitle">
            Atuação em Direito Administrativo, Constitucional, Ambiental e
            Civil — com ética, transparência e compromisso com a efetividade
            dos direitos fundamentais.
          </p>

          <div className="hero-actions">
            <a href="#atuacoes" className="btn btn-primary">
              Áreas de Atuação
            </a>

            <a
              href="https://wa.me/5544997754951?text=Ol%C3%A1%2C%20Dra.%20Regina.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hero-btn-light"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-frame">
            <div
              className="hero-photo-image"
              role="img"
              aria-label="Dra. Regina Perrotta"
            />
          </div>
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
          background-image: url('/advreginaperrotta/logo1.jpeg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: scaleIn 1.2s ease;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(74, 14, 18, 0.72) 0%,
            rgba(74, 14, 18, 0.62) 48%,
            rgba(74, 14, 18, 0.48) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
          align-items: center;
          gap: 60px;
        }

        .hero-copy {
          position: relative;
          z-index: 2;
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
          color: rgba(255,255,255,0.82);
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
          border-color: rgba(255,255,255,0.45);
        }

        .hero-btn-light:hover {
          background-color: #fff;
          color: var(--primary-900);
          border-color: #fff;
        }

        .hero-photo {
          position: relative;
          justify-self: end;
          width: min(100%, 430px);
          animation: fadeIn 1s ease 0.5s both;
        }

        .hero-photo-frame {
          position: relative;
          z-index: 1;
          overflow: hidden;
          border-radius: 180px 180px 18px 18px;
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 25px 60px rgba(0,0,0,0.35);
          background: rgba(255,255,255,0.05);
        }

        .hero-photo-image {
          width: 100%;
          height: 560px;
          background-image: url('/advreginaperrotta/regina.png');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
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
          z-index: 3;
          animation: fadeIn 1.5s ease 1s both;
        }

        .hero-scroll span {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }

        .hero-scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.5),
            transparent
          );
          position: relative;
        }

        .hero-scroll-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          background: linear-gradient(
            to bottom,
            var(--accent-400),
            transparent
          );
          animation: scrollHint 2s ease-in-out infinite;
        }

        @keyframes scrollHint {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }

          50% {
            transform: translateY(25px);
            opacity: 0;
          }
        }

        @media (max-width: 900px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-photo {
            justify-self: center;
            width: min(75vw, 360px);
          }

          .hero-copy {
            text-align: center;
          }

          .hero-tag {
            justify-content: center;
          }

          .hero-actions {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 110px 0 60px;
          }

          .hero-photo {
            width: min(78vw, 330px);
          }

          .hero-photo-image {
            height: 440px;
          }

          .hero-scroll {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
