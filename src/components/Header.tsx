
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atuações', href: '#atuacoes' },
  { label: 'Comprometimento', href: '#comprometimento' },
  { label: 'FAQ', href: '#faq' },
];

function getBasePath() {
  return window.location.hostname.endsWith('github.io')
    ? '/advreginaperrotta/'
    : '/';
}

function isSpecialPage() {
  return (
    window.location.hash === '#/contato' ||
    window.location.hash === '#/privacidade'
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(
    () => window.scrollY > 60 || isSpecialPage()
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setScrolled(window.scrollY > 60 || isSpecialPage());
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader);
    window.addEventListener('hashchange', updateHeader);

    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('hashchange', updateHeader);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSectionNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    closeMenu();

    if (isSpecialPage()) {
      window.location.href = `${getBasePath()}${href}`;
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      window.history.replaceState(null, '', href);
    }
  };

  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    closeMenu();
    window.location.href = getBasePath();
  };

  const handleContactNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    closeMenu();
    window.location.hash = '/contato';
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <a
          href={getBasePath()}
          className="header-logo"
          onClick={handleLogoClick}
          aria-label="Regina Perrotta Advocacia - Voltar ao início"
        >
          <img
            src={`${getBasePath()}headerLogo1.png`}
            alt=""
            className="header-logo-image"
          />

          <span className="header-logo-text">
            <span className="header-logo-serif">
              Regina Perrotta
            </span>
            <span className="header-logo-sub">
              Advocacia &amp; Cidadania
            </span>
          </span>
        </a>

        <nav
          id="menu-principal"
          className={`header-nav ${menuOpen ? 'open' : ''}`}
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) =>
                handleSectionNavigation(event, link.href)
              }
              className="header-nav-link"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#/contato"
            onClick={handleContactNavigation}
            className="header-nav-link"
          >
            Contato
          </a>
        </nav>

        {menuOpen && (
          <button
            type="button"
            className="header-menu-backdrop"
            onClick={closeMenu}
            aria-label="Fechar menu"
          />
        )}

        <button
          type="button"
          className={`header-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 16px 0;
          background-color: rgba(74, 14, 18, 0.97);
          transition: background-color 0.3s ease,
            padding 0.3s ease, box-shadow 0.3s ease;
        }

        .header-scrolled {
          padding: 10px 0;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        }

        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          position: relative;
          z-index: 102;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          min-width: 0;
          text-decoration: none;
          position: relative;
          z-index: 103;
        }

        .header-logo-image {
          width: 58px;
          height: 58px;
          object-fit: contain;
          flex-shrink: 0;
          border-radius: 5px;
        }

        .header-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
          min-width: 0;
        }

        .header-logo-serif {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        .header-logo-sub {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 0.19em;
          text-transform: uppercase;
          color: var(--accent-400, #c5a66b);
          margin-top: 3px;
          white-space: nowrap;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 103;
        }

        .header-nav-link {
          font-family: var(--font-sans);
          font-size: 0.83rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.85);
          position: relative;
          padding: 8px 0;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .header-nav-link:hover {
          color: #fff;
        }

        .header-nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-500, #c5a66b);
          transition: width 0.3s ease;
        }

        .header-nav-link:hover::after {
          width: 100%;
        }

        .header-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 44px;
          height: 44px;
          padding: 8px;
          border: 0;
          background: transparent;
          cursor: pointer;
          position: relative;
          z-index: 105;
          flex-shrink: 0;
        }

        .header-burger span {
          display: block;
          width: 25px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .header-burger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .header-burger.open span:nth-child(2) {
          opacity: 0;
        }

        .header-burger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .header-menu-backdrop {
          display: none;
        }

        @media (max-width: 1050px) {
          .header-inner {
            padding: 0 20px;
          }

          .header-nav {
            position: fixed;
            top: 0;
            right: 0;
            width: min(360px, 88vw);
            height: 100vh;
            height: 100dvh;
            background: #4a0e12;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 24px;
            padding: 85px 24px 35px;
            transform: translateX(110%);
            visibility: hidden;
            pointer-events: none;
            transition: transform 0.35s ease, visibility 0.35s;
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.25);
            z-index: 103;
            overflow-y: auto;
          }

          .header-nav.open {
            transform: translateX(0);
            visibility: visible;
            pointer-events: auto;
          }

          .header-nav-link {
            font-family: var(--font-serif);
            font-size: 1.35rem;
            padding: 7px 0;
            color: #fff;
          }

          .header-burger {
            display: flex;
          }

          .header-menu-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
            border: 0;
            padding: 0;
            cursor: pointer;
            z-index: 102;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 10px 0;
          }

          .header-scrolled {
            padding: 8px 0;
          }

          .header-inner {
            padding: 0 14px;
            gap: 10px;
          }

          .header-logo {
            gap: 8px;
          }

          .header-logo-image {
            width: 43px;
            height: 43px;
          }

          .header-logo-serif {
            font-size: 1.12rem;
          }

          .header-logo-sub {
            font-size: 0.49rem;
            letter-spacing: 0.12em;
          }

          .header-nav {
            width: min(330px, 90vw);
          }
        }

        @media (max-width: 350px) {
          .header-logo-image {
            width: 36px;
            height: 36px;
          }

          .header-logo-serif {
            font-size: 1rem;
          }

          .header-logo-sub {
            font-size: 0.43rem;
            letter-spacing: 0.08em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .header,
          .header-nav,
          .header-nav-link,
          .header-nav-link::after,
          .header-burger span {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
}
