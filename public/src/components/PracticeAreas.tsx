import { useReveal } from '../hooks/useReveal';

const areas = [
  {
    number: '01',
    title: 'Administrativo',
    text: 'Atuação voltada à defesa dos direitos do cidadão em suas relações com a Administração Pública e ao controle da legalidade dos atos administrativos. Abrange o acompanhamento e questionamento de atos, omissões e decisões do Poder Público, o acesso à informação e a documentos públicos, a transparência administrativa, a fiscalização da aplicação de recursos públicos e a observância dos princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência.',
    text2: 'A atuação compreende ainda medidas administrativas e judiciais destinadas à proteção do interesse público, do patrimônio público e dos direitos individuais, coletivos e difusos, especialmente diante de ilegalidades, omissões, negativas de acesso à informação ou situações em que a atuação estatal possa comprometer direitos assegurados pela Constituição e pela legislação.',
    quote: 'No Direito Administrativo, defender o cidadão é lembrar ao Poder Público que toda autoridade nasce da lei, encontra limites na Constituição e somente se legitima quando exercida em favor do interesse público.',
  },
  {
    number: '02',
    title: 'Constitucional',
    text: 'O Direito Constitucional é o alicerce e o grande guarda-chuva de proteção dos demais direitos, estabelecendo os limites do poder estatal e as garantias fundamentais que orientam todo o ordenamento jurídico.',
    text2: 'A atuação nessa área parte da Constituição como instrumento efetivo de proteção da pessoa e da coletividade, abrangendo a defesa da cidadania, da dignidade humana, da igualdade, da liberdade, do devido processo legal, do acesso à informação, do meio ambiente equilibrado e dos direitos sociais, coletivos e difusos.',
    quote: 'É a Constituição funcionando como parâmetro para fiscalizar o Estado, limitar abusos e assegurar que todos os demais direitos sejam reconhecidos, respeitados e concretizados.',
  },
  {
    number: '03',
    title: 'Meio Ambiente',
    text: 'Atuação voltada à proteção do meio ambiente como direito fundamental, patrimônio coletivo e responsabilidade compartilhada entre Poder Público e sociedade. Abrange a fiscalização de atos e omissões administrativas, políticas públicas, licenciamento, uso e ocupação de áreas, recursos naturais, saneamento e situações capazes de produzir danos ambientais ou comprometer a qualidade de vida das presentes e futuras gerações.',
    text2: 'A atuação jurídica busca não apenas a reparação do dano já ocorrido, mas principalmente sua prevenção, exigindo transparência, responsabilidade, cumprimento da legislação e atuação efetiva dos órgãos públicos responsáveis pela proteção ambiental.',
    quote: 'Defender o meio ambiente é defender um direito que não pertence apenas a alguém, mas a todos — inclusive àqueles que ainda virão.',
  },
  {
    number: '04',
    title: 'Civil',
    text: 'Atuação na proteção dos direitos da pessoa nas relações privadas e nas situações em que sua dignidade, liberdade, patrimônio, saúde, imagem, honra ou autonomia sejam ameaçados ou violados.',
    text2: 'Compreende demandas relacionadas ao Direito do Consumidor, responsabilidade civil, contratos, relações com empresas e prestadores de serviços, planos e serviços de saúde, acesso e continuidade de tratamentos, reparação de danos e proteção diante de práticas abusivas. A atuação também alcança a defesa dos direitos da personalidade, da liberdade de expressão e de informação, inclusive diante de restrições indevidas, censura ou conflitos envolvendo honra, imagem e atividade informativa.',
    quote: null,
  },
];

export default function PracticeAreas() {
  return (
    <section id="atuacoes" className="areas">
      <div className="container">
        <div className="areas-header reveal">
          <span className="section-label">Atuações</span>
          <h2 className="section-title">Áreas de Atuação</h2>
          <p className="areas-intro">
            Cada área representa um compromisso com a defesa de direitos
            fundamentais e o controle da atuação do Estado.
          </p>
        </div>

        <div className="areas-list">
          {areas.map((area, i) => (
            <AreaItem key={area.number} area={area} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .areas {
          background-color: #fff;
          padding: 110px 0;
        }

        .areas-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .areas-header .section-label {
          margin-bottom: 12px;
        }

        .areas-intro {
          max-width: 540px;
          margin: 0 auto;
          font-size: 1.02rem;
          color: var(--neutral-500);
        }

        .areas-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .area-item {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 40px;
          padding: 56px 0;
          border-top: 1px solid var(--neutral-200);
          transition: background-color 0.4s ease;
        }

        .area-item:last-child {
          border-bottom: 1px solid var(--neutral-200);
        }

        .area-item:hover {
          background-color: var(--neutral-50);
        }

        .area-number {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 400;
          color: var(--accent-500);
          letter-spacing: 0.02em;
        }

        .area-content h3 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 500;
          color: var(--primary-900);
          margin-bottom: 20px;
        }

        .area-content p {
          margin-bottom: 16px;
          font-size: 0.96rem;
          color: var(--neutral-600);
        }

        .area-quote {
          margin-top: 24px;
          padding-left: 20px;
          border-left: 2px solid var(--accent-500);
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--primary-700);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .area-item {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 40px 0;
          }
        }
      `}</style>
    </section>
  );
}

function AreaItem({
  area,
  index,
}: {
  area: (typeof areas)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`area-item reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="area-number">{area.number}</div>
      <div className="area-content">
        <h3>{area.title}</h3>
        <p>{area.text}</p>
        {area.text2 && <p>{area.text2}</p>}
        {area.quote && (
          <blockquote className="area-quote">{area.quote}</blockquote>
        )}
      </div>
    </div>
  );
}
