export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content">

          <div className="about-header">
            <span className="section-label">Sobre</span>
            <h2 className="section-title">Dra. Regina Perrotta</h2>
          </div>

          <div className="about-quote">
            <span className="about-quote-author">Dra. Regina Perrotta</span>

            <blockquote>
              “O Direito deveria ser inerente à existência humana, jamais algo
              pelo qual fosse necessário lutar. Mas, quando é negado, violado
              ou usurpado, cabe ao advogado ser a mão firme que o sustenta, a
              voz que o reivindica e a confiança de quem precisa vê-lo
              restabelecido.”
            </blockquote>
          </div>

          <div className="about-text">

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
              da Administração Pública, com atenção à legalidade, transparência,
              moralidade administrativa, acesso à informação, proteção do
              patrimônio público, meio ambiente, saúde pública e efetividade dos
              direitos assegurados pela Constituição Federal.
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
          padding: 80px 0 70px;
          height: auto !important;
          min-height: 0 !important;
        }

        .about-content {
          max-width: 900px;
          margin: 0 auto;
          height: auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 42px;
        }

        .about-header .section-label {
          display: block;
          margin-bottom: 12px;
        }

        .about-header .section-title {
          margin: 0;
        }

        .about-quote {
          max-width: 760px;
          margin: 0 auto 42px;
          padding: 30px 36px;
          background-color: #fdf3f2;
          border-left: 2px solid var(--accent-500);
          text-align: center;
        }

        .about-quote-author {
          display: block;
          margin-bottom: 14px;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: var(--primary-700);
          letter-spacing: 0.04em;
        }

        .about-quote blockquote {
          margin: 0;
          font-family: var(--font-serif);
          font-size: clamp(1.35rem, 2vw, 1.65rem);
          line-height: 1.35;
          font-weight: 400;
          color: var(--primary-700);
        }

        .about-text {
          max-width: 820px;
          margin: 0 auto;
        }

        .about-text p {
          margin: 0 0 22px;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--neutral-600);
        }

        .about-text p:first-child {
          font-size: 1.05rem;
          color: var(--neutral-700);
        }

        .about-text p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .about {
            padding: 70px 24px 60px;
          }

          .about-quote {
            padding: 24px 20px;
            margin-bottom: 40px;
          }

          .about-quote blockquote {
            font-size: 1.3rem;
          }

          .about-text p {
            font-size: 0.96rem;
            line-height: 1.7;
          }
        }
      `}</style>
    </section>
  );
}