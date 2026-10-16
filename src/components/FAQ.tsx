
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
  {
    question: 'Por que atuamos exclusivamente na esfera criminal no caso ONIL?',
    answer:
      'Porque a esfera criminal também permite buscar a recuperação do dinheiro das vítimas, além da responsabilização dos envolvidos. A investigação pode identificar o destino dos recursos, rastrear movimentações financeiras e viabilizar medidas judiciais de bloqueio e sequestro de bens para futura restituição.\n\nNossa atuação no caso ONIL é exclusivamente criminal: buscamos investigar possíveis fraudes, identificar os responsáveis, localizar o patrimônio e utilizar os mecanismos legais para recuperar os valores das vítimas.',
  },
  {
    question: 'Quem tem direito a receber o salário-maternidade?',
    answer:
      'O salário-maternidade é um benefício previdenciário destinado a proteger a renda durante o afastamento por parto, adoção, guarda judicial para fins de adoção e outras situações previstas em lei.\n\nTrabalhadoras com carteira assinada, autônomas, MEIs, empregadas domésticas, trabalhadoras rurais e até mulheres desempregadas podem ter direito ao benefício, desde que preencham os requisitos legais.\n\nAtualmente, não é exigida carência mínima de contribuições, mas é necessário comprovar a qualidade de segurada do INSS ou outra condição legal que assegure o benefício.\n\nEm regra, o pagamento corresponde a 120 dias, e o valor depende da categoria e do histórico contributivo da beneficiária.\n\nMesmo quem contribuiu pouco ou está desempregada pode ter direito. Cada situação merece uma análise individualizada.',
  },
  {
    question: 'A lei exige a regularização dos imóveis rurais localizados na faixa de fronteira? Como podemos ajudar?',
    answer:
      'Sim. A Lei nº 13.178/2015, alterada pela Lei nº 15.206/2025, estabelece regras para a ratificação de determinados registros de imóveis rurais situados na faixa de fronteira, incluindo exigências de georreferenciamento e atualização cadastral, conforme as características da propriedade.\n\nOferecemos acompanhamento jurídico extrajudicial, com apoio de agrimensor habilitado e atuação junto aos cartórios de registro de imóveis e órgãos competentes, auxiliando o proprietário na regularização documental e na segurança jurídica de seu patrimônio.',
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
                  type="button"
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : i)
                  }
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{faq.question}</span>

                  <span className="faq-toggle" aria-hidden="true">
                    <span className="faq-toggle-line" />

                    <span
                      className={`faq-toggle-line vertical ${
                        isOpen ? 'open' : ''
                      }`}
                    />
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  className={`faq-answer-wrap ${
                    isOpen ? 'open' : ''
                  }`}
                  hidden={!isOpen}
                >
                  <div className="faq-answer">
                    {faq.answer.split('\n\n').map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
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
          cursor: pointer;
          background: transparent;
          border: none;
        }

        .faq-question:hover {
          color: var(--primary-600);
        }

        .faq-question:focus-visible {
          outline: 2px solid var(--accent-600);
          outline-offset: 4px;
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
          width: 100%;
        }

        .faq-answer-wrap[hidden] {
          display: none;
        }

        .faq-answer {
          padding: 0 0 22px;
          animation: faqFadeIn 0.3s ease;
        }

        .faq-answer p {
          font-size: 0.95rem;
          color: var(--neutral-600);
          line-height: 1.7;
          margin: 0 0 16px;
        }

        .faq-answer p:last-child {
          margin-bottom: 0;
        }

        @keyframes faqFadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
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

          .faq-answer p {
            font-size: 0.94rem;
            line-height: 1.75;
          }
        }

        @media (max-width: 480px) {
          .faq {
            padding: 55px 20px;
          }

          .faq-question {
            font-size: 1.05rem;
            gap: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-answer {
            animation: none;
          }

          .faq-toggle-line {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
