import { useState } from 'react';

const faqs = [
  {
    question: 'O que fazer quando o direito à saúde é negado?',
    answer:
      'Negativas de exames, medicamentos, tratamentos, cirurgias ou atendimentos podem ser questionadas administrativa ou judicialmente, tanto no sistema público quanto na saúde suplementar, conforme cada situação.',
  },
  {
    question: 'Quando meus direitos civis estão sendo violados?',
    answer:
      'Quando há lesão ou ameaça à liberdade, honra, imagem, privacidade, patrimônio, igualdade ou outros direitos da pessoa, podem existir medidas jurídicas destinadas à proteção e reparação.',
  },
  {
    question: 'Para que serve uma Ação Popular?',
    answer:
      'A Ação Popular é um instrumento constitucional que permite ao cidadão questionar atos lesivos ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="faq">
      <div className="container-narrow">

        <div className="faq-header">
          <span className="section-label">Dúvidas</span>

          <h2 className="section-title">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : i)
                  }
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span className="faq-toggle">
                    <span className="faq-toggle-line" />

                    <span
                      className={`faq-toggle-line vertical ${
                        isOpen ? 'open' : ''
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`faq-answer-wrap ${
                    isOpen ? 'open' : ''
                  }`}
                >
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .faq {
          background-color: var(--neutral-50);
          padding: 80px 0;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .faq-item {
          border-bottom: 1px solid var(--neutral-200);
        }

        .faq-item:first-child {
          border-top: 1px solid var(--neutral-200);
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          text-align: left;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--primary-900);
          transition: color 0.3s ease;
          gap: 20px;
        }

        .faq-question:hover {
          color: var(--primary-600);
        }

        .faq-toggle {
          position: relative;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .faq-toggle-line {
          position: absolute;
          width: 16px;
          height: 1.5px;
          background-color: var(--accent-600);
          transition: all 0.3s ease;
        }

        .faq-toggle-line.vertical {
          transform: rotate(90deg);
        }

        .faq-toggle-line.vertical.open {
          transform: rotate(0deg);
          opacity: 0;
        }

        .faq-answer-wrap {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .faq-answer-wrap.open {
          max-height: 300px;
        }

        .faq-answer {
          padding: 0 0 22px;
        }

        .faq-answer p {
          font-size: 0.95rem;
          color: var(--neutral-600);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .faq {
            padding: 65px 24px;
          }

          .faq-header {
            margin-bottom: 36px;
          }

          .faq-question {
            font-size: 1.1rem;
            padding: 20px 0;
          }
        }
      `}</style>
    </section>
  );
}