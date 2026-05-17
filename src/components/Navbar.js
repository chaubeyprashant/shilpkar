import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#gallery', label: 'Shop Artworks' },
    { href: '#artforms', label: 'Artforms' },
    { href: '#workshops', label: 'Workshops' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="navbar">
        <div className="nav-container">
          <button
            type="button"
            className="nav-burger"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links nav-links--left ${menuOpen ? 'nav-links--open' : ''}`}>
            {navItems.slice(0, 3).map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>

          <a href="#home" className="nav-logo">SHILPI PANDEY</a>

          <ul className={`nav-links nav-links--right ${menuOpen ? 'nav-links--open' : ''}`}>
            {navItems.slice(3).map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cart" aria-label="Inquire">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Inquire</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
