import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atuações', href: '#atuacoes' },
  { label: 'Comprometimento', href: '#comprometimento' },
  { label: 'FAQ', href: '#faq' },
];

function getBasePath() {
  if (window.location.hostname === 'giovanni-perrotta.github.io') {
    return '/advreginaperrotta/';
  }

  return '/';
}

function isSpecialPage() {
  return (
    window.location.hash === '#/contato' ||
    window.location.hash === '#/privacidade'
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(() => {
    return window.scrollY > 60 || isSpecialPage();
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60 || isSpecialPage());
    };

    onScroll();

    window.addEventListener('scroll', onScroll);
    window.addEventListener('hashchange', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
          aria-label="Regina Perrotta Advocacia - Início"
        >
          <span className="header-logo-serif">
            Regina Perrotta
          </span>

          <span className="header-logo-sub">
            Advocacia &amp; Cidadania
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
          transition:
            background-color 0.4s ease,
            padding 0.4s ease,
            box-shadow 0.4s ease;
          padding: 20px 0;
        }

        .header-scrolled {
          background-color: rgba(74, 14, 18, 0.97);
          padding: 12px 0;
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
          position: relative;
          z-index: 102;
        }

        .header-logo {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
          position: relative;
          z-index: 103;
          text-decoration: none;
        }

        .header-logo-serif {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.01em;
        }

        .header-logo-sub {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent-400);
          margin-top: 2px;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 32px;
          position: relative;
          z-index: 103;
        }

        .header-nav-link {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          transition:
            color 0.3s ease,
            opacity 0.3s ease;
          position: relative;
          padding: 4px 0;
          text-decoration: none;
        }

        .header-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--accent-500);
          transition: width 0.3s ease;
        }

        .header-nav-link:hover {
          color: #fff;
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
          width: 42px;
          height: 42px;
          padding: 8px;
          border: 0;
          background: transparent;
          cursor: pointer;
          position: relative;
          z-index: 104;
        }

        .header-burger span {
          display: block;
          width: 26px;
          height: 2px;
          background-color: #fff;
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
          border-radius: 1px;
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

        @media (max-width: 900px) {
          .header {
            padding: 16px 0;
          }

          .header-scrolled {
            padding: 12px 0;
          }

          .header-inner {
            padding: 0 20px;
          }

          .header-logo-serif {
            font-size: 1.35rem;
          }

          .header-logo-sub {
            font-size: 0.6rem;
            letter-spacing: 0.18em;
          }

          .header-nav {
            position: fixed;
            top: 0;
            right: 0;
            width: min(380px, 88vw);
            height: 100vh;
            background-color: var(--primary-900);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 28px;
            padding: 80px 32px 40px;
            transform: translateX(100%);
            transition: transform 0.4s ease;
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.25);
            z-index: 103;
          }

          .header-nav.open {
            transform: translateX(0);
          }

          .header-nav-link {
            font-size: 1.2rem;
            font-family: var(--font-serif);
            color: rgba(255, 255, 255, 0.9);
            padding: 6px 0;
          }

          .header-nav-link::after {
            height: 2px;
          }

          .header-burger {
            display: flex;
          }

          .header-menu-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.35);
            border: 0;
            padding: 0;
            cursor: pointer;
            z-index: 102;
          }
        }

        @media (max-width: 480px) {
          .header-inner {
            padding: 0 16px;
          }

          .header-logo-serif {
            font-size: 1.2rem;
          }

          .header-logo-sub {
            font-size: 0.55rem;
            letter-spacing: 0.15em;
          }

          .header-nav {
            width: 90vw;
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
