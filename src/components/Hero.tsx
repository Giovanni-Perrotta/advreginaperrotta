
export default function Hero() {
  const basePath = window.location.hostname.endsWith('github.io')
    ? '/advreginaperrotta/'
    : '/';

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-tag">
            <span className="hero-tag-line" />
            Assistência Jurídica Especializada
          </div>

          <h1 className="hero-title">
            Defesa da cidadania,
            <br className="hero-desktop-break" />
            {' '}dos direitos humanos
            <br className="hero-desktop-break" />
            {' '}e do interesse público
          </h1>

          <p className="hero-subtitle">
            Atuação em Direito Administrativo, Constitucional,
            Ambiental e Civil — com ética, transparência e
            compromisso com a efetividade dos direitos fundamentais.
          </p>

          <div className="hero-actions">
            <a href="#atuacoes" className="btn btn-primary hero-button">
              Áreas de Atuação
            </a>

            <a
              href="https://wa.me/5544997754951?text=Ol%C3%A1%2C%20Dra.%20Regina.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hero-btn-light hero-button"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-frame">
            <img
              className="hero-photo-image"
              src={`${basePath}regina.png`}
              alt="Dra. Regina Perrotta"
              fetchPriority="high"
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
          min-height: 100svh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 130px 0 100px;
          background: linear-gradient(
            135deg,
            #500e18 0%,
            #4a0e12 55%,
            #390b12 100%
          );
          box-sizing: border-box;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
          display: grid;
          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(0, 0.85fr);
          align-items: center;
          gap: clamp(30px, 5vw, 65px);
          box-sizing: border-box;
        }

        .hero-copy {
          min-width: 0;
          position: relative;
          z-index: 2;
        }

        .hero-tag {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: var(--font-sans);
          font-size: 0.76rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent-400, #c5a66b);
          margin-bottom: 26px;
          animation: heroFadeUp 0.8s ease both;
        }

        .hero-tag-line {
          width: 35px;
          height: 1px;
          background-color: var(--accent-500, #c5a66b);
          flex-shrink: 0;
        }

        .hero-title {
          color: #fff;
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: clamp(2.2rem, 4.4vw, 4rem);
          line-height: 1.16;
          letter-spacing: -0.015em;
          margin: 0 0 26px;
          max-width: 700px;
          animation: heroFadeUp 0.8s ease 0.15s both;
        }

        .hero-subtitle {
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.3vw, 1.06rem);
          color: rgba(255, 255, 255, 0.82);
          max-width: 550px;
          margin: 0 0 35px;
          line-height: 1.8;
          animation: heroFadeUp 0.8s ease 0.3s both;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          animation: heroFadeUp 0.8s ease 0.45s both;
        }

        .hero-button {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 22px;
          text-align: center;
          font-size: 0.88rem;
          text-decoration: none;
          box-sizing: border-box;
        }

        .hero-btn-light {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.5);
        }

        .hero-btn-light:hover {
          background-color: #fff;
          color: #4a0e12;
          border-color: #fff;
        }

        .hero-photo {
          position: relative;
          justify-self: end;
          width: min(100%, 420px);
          min-width: 0;
          animation: heroFadeIn 1s ease 0.3s both;
        }

        .hero-photo-frame {
          position: relative;
          overflow: hidden;
          border-radius: 180px 180px 18px 18px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 24px 55px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        .hero-photo-image {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 3 / 4;
          object-fit: cover;
          object-position: center top;
        }

        .hero-scroll {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 3;
        }

        .hero-scroll span {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
        }

        .hero-scroll-line {
          width: 1px;
          height: 38px;
          background: linear-gradient(
            to bottom,
            var(--accent-400, #c5a66b),
            transparent
          );
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @media (max-width: 900px) {
          .hero {
            padding: 115px 0 65px;
            min-height: auto;
          }

          .hero-content {
            grid-template-columns: minmax(0, 1fr);
            gap: 42px;
            max-width: 650px;
          }

          .hero-copy {
            text-align: center;
          }

          .hero-tag {
            justify-content: center;
          }

          .hero-title {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-photo {
            justify-self: center;
            width: min(75%, 350px);
          }

          .hero-scroll {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 105px 0 55px;
          }

          .hero-content {
            padding: 0 22px;
            gap: 30px;
          }

          .hero-tag {
            gap: 9px;
            font-size: 0.63rem;
            letter-spacing: 0.11em;
            margin-bottom: 22px;
          }

          .hero-tag-line {
            width: 22px;
          }

          .hero-title {
            font-size: clamp(2rem, 8vw, 2.8rem);
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .hero-desktop-break {
            display: none;
          }

          .hero-subtitle {
            font-size: 0.94rem;
            line-height: 1.75;
            margin-bottom: 26px;
          }

          .hero-photo {
            width: min(78vw, 320px);
          }

          .hero-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            width: 100%;
            max-width: 340px;
            margin: 0 auto;
          }

          .hero-button {
            width: 100%;
            min-height: 50px;
            font-size: 0.93rem;
            padding: 14px 20px;
          }
        }

        @media (max-width: 360px) {
          .hero-content {
            padding: 0 16px;
          }

          .hero-title {
            font-size: 1.9rem;
          }

          .hero-subtitle {
            font-size: 0.9rem;
          }

          .hero-photo {
            width: min(82vw, 290px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-tag,
          .hero-title,
          .hero-subtitle,
          .hero-actions,
          .hero-photo {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
