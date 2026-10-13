import { useReveal } from '../hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div ref={ref} className={`about-grid ${visible ? 'visible' : ''}`}>
          <div className="about-image-wrap reveal">
            <div className="about-image-frame">
              <img
                src="https://images.pexels.com/photos/8111888/pexels-photo-8111888.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Dra. Regina Perrotta"
                className="about-image"
              />
            </div>
            <div className="about-image-accent" />
          </div>

          <div className="about-text reveal">
            <span className="section-label">Sobre</span>
            <h2 className="section-title">Dra. Regina Perrotta</h2>
            <p>
              Regina Perrotta é advogada, com atuação voltada à defesa da
              cidadania, dos direitos humanos e do interesse público. Dedica sua
              trajetória à observação, fiscalização e defesa de direitos
              fundamentais, especialmente nas áreas do Direito Administrativo,
              Constitucional, Ambiental e dos direitos sociais, coletivos e
              difusos.
            </p>
            <p>
              Sua atuação é marcada pelo acompanhamento das políticas públicas e
              da Administração Pública, com atenção à legalidade,
              transparência, moralidade administrativa, acesso à informação,
              proteção do patrimônio público, meio ambiente, saúde pública e
              efetividade dos direitos assegurados pela Constituição Federal.
            </p>
            <p>
              Como observadora dos direitos humanos e da cidadania, desenvolve
              trabalho de fiscalização cidadã e controle social, acompanhando a
              atuação dos Poderes Públicos e instituições responsáveis pela
              proteção dos interesses da coletividade. Sua atuação busca
              transformar o exercício da cidadania em instrumento concreto de
              defesa da sociedade, especialmente diante de situações que
              envolvam omissões administrativas, utilização de recursos
              públicos, políticas sociais, proteção ambiental e direitos
              fundamentais.
            </p>
            <p>
              Para Regina Perrotta, cidadania não se limita ao reconhecimento de
              direitos: compreende também o direito de fiscalizar, questionar,
              exigir transparência e cobrar do Estado o cumprimento de seus
              deveres constitucionais.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          background-color: var(--neutral-50);
          padding: 110px 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 64px;
          align-items: start;
        }

        .about-image-wrap {
          position: relative;
          padding-top: 16px;
        }

        .about-image-frame {
          position: relative;
          z-index: 1;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .about-image {
          width: 100%;
          height: auto;
          filter: saturate(0.85) contrast(1.05);
          transition: transform 0.6s ease;
        }

        .about-image:hover {
          transform: scale(1.03);
        }

        .about-image-accent {
          position: absolute;
          bottom: -16px;
          right: -16px;
          width: 60%;
          height: 60%;
          border: 2px solid var(--accent-500);
          z-index: 0;
        }

        .about-text p {
          margin-bottom: 18px;
          font-size: 0.98rem;
          color: var(--neutral-600);
        }

        .about-text p:first-of-type {
          font-size: 1.05rem;
          color: var(--neutral-700);
        }

        .about-text .section-label {
          margin-bottom: 12px;
        }

        .about-text .section-title {
          margin-bottom: 28px;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-image-wrap {
            max-width: 380px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
