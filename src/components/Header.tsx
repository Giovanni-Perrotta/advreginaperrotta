import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atuações', href: '#atuacoes' },
  { label: 'Comprometimento', href: '#comprometimento' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#inicio" className="header-logo" onClick={closeMenu}>
          <span className="header-logo-serif">Regina Perrotta</span>
          <span className="header-logo-sub">Advocacia &amp; Cidadania</span>
        </a>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="header-nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`header-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.4s ease;
          padding: 20px 0;
        }

        .header-scrolled {
          background-color: rgba(74, 14, 18, 0.97);
          padding: 12px 0;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }

        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-logo {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
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
        }

        .header-nav {
          display: flex;
          gap: 32px;
        }

        .header-nav-link {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 400;
          color: rgba(255,255,255,0.8);
          transition: color 0.3s ease;
          position: relative;
          padding: 4px 0;
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
          gap: 5px;
          padding: 4px;
          z-index: 101;
        }

        .header-burger span {
          width: 26px;
          height: 2px;
          background-color: #fff;
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .header-burger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .header-burger.open span:nth-child(2) {
          opacity: 0;
        }

        .header-burger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 900px) {
          .header-nav {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            background-color: var(--primary-900);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 28px;
            transform: translateX(100%);
            transition: transform 0.4s ease;
          }

          .header-nav.open {
            transform: translateX(0);
          }

          .header-nav-link {
            font-size: 1.1rem;
            font-family: var(--font-serif);
          }

          .header-burger {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
