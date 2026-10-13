import { useReveal } from '../hooks/useReveal';

const values = [
  {
    icon: 'confidentiality',
    title: 'Confidencialidade',
    text: 'Toda atuação é conduzida com ética, discrição e absoluto respeito à confidencialidade. Informações, documentos e circunstâncias confiados no exercício profissional são tratados com responsabilidade e proteção, preservando a privacidade, a segurança e a relação de confiança com cada cliente.',
  },
  {
    icon: 'empathy',
    title: 'Empatia',
    text: 'Cada situação envolve muito mais do que um processo ou uma questão jurídica: envolve pessoas, histórias e expectativas. A atuação é pautada pela escuta, pelo respeito e pela compreensão de cada realidade, aliando sensibilidade humana à responsabilidade e à firmeza profissional.',
  },
  {
    icon: 'personalized',
    title: 'Atendimento Personalizado e Humano',
    text: 'Cada pessoa e cada situação são únicas. Por isso, o atendimento é conduzido de forma próxima, individualizada e humana, com escuta atenta, comunicação clara e acompanhamento responsável, buscando compreender não apenas a questão jurídica, mas também as necessidades e particularidades de cada cliente.',
  },
];

function Icon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    confidentiality: (
      <>
        <rect x="5" y="11" width="14" height="10" rx="1" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        <circle cx="12" cy="16" r="1.5" />
      </>
    ),
    empathy: (
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    ),
    personalized: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.42 3.58-8 8-8s8 3.58 8 8" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="value-icon-svg"
    >
      {icons[name]}
    </svg>
  );
}

export default function Commitment() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="comprometimento" className="commitment">
      <div className="container">

        <div
          ref={ref}
          className={`commitment-header reveal ${visible ? 'visible' : ''}`}
        >
          <span className="section-label section-label-light">
            Comprometimento
          </span>

          <h2 className="commitment-title">
            Meu Comprometimento
          </h2>

          <p className="commitment-intro">
            Atuação responsável, humana e individualizada — porque cada caso é
            também uma história e uma vida.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              value={value}
              index={index}
            />
          ))}
        </div>

      </div>

      <style>{`
        .commitment {
          background-color: var(--primary-900);
          padding: 90px 0;
          position: relative;
          overflow: hidden;
        }

        .commitment::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(196,163,90,0.06) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .commitment-header {
          text-align: center;
          margin-bottom: 54px;
          position: relative;
          z-index: 1;
        }

        .section-label-light {
          color: var(--accent-400);
        }

        .commitment-title {
          color: #fff;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          margin-bottom: 18px;
        }

        .commitment-intro {
          color: rgba(255,255,255,0.68);
          max-width: 520px;
          margin: 0 auto;
          font-size: 1rem;
          line-height: 1.7;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .value-card {
          padding: 34px 30px;
          background-color: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          transition:
            background-color 0.4s ease,
            border-color 0.4s ease,
            transform 0.4s ease;
        }

        .value-card:hover {
          background-color: rgba(255,255,255,0.055);
          border-color: rgba(196,163,90,0.35);
          transform: translateY(-4px);
        }

        .value-icon-wrap {
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          border: 1px solid rgba(196,163,90,0.35);
          border-radius: 50%;
          color: var(--accent-400);
        }

        .value-icon-svg {
          width: 23px;
          height: 23px;
        }

        .value-card h4 {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 14px;
        }

        .value-card p {
          color: rgba(255,255,255,0.64);
          font-size: 0.92rem;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .values-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .commitment {
            padding: 70px 0;
          }

          .commitment-header {
            margin-bottom: 40px;
          }

          .value-card {
            padding: 30px 26px;
          }
        }
      `}</style>
    </section>
  );
}

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`value-card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="value-icon-wrap">
        <Icon name={value.icon} />
      </div>

      <h4>{value.title}</h4>

      <p>{value.text}</p>
    </div>
  );
}