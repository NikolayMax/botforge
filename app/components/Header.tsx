'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#bots', label: 'Боты' },
  { href: '#skills', label: 'Навыки' },
  { href: '#contact', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a1a]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold gradient-text">
            BotForge
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://max.ru/u/f9LHodD0cOLMf1t-m7ctyrmKkylRxa4_cU1Gyp15QJKRKlGlizfYP95bR3c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium gradient-bg text-white hover:opacity-90 transition-opacity"
            >
              <img src="/max-favicon.png" alt="" className="w-4 h-4" />
              MAX
            </a>
          </nav>

          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-white/5">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://max.ru/u/f9LHodD0cOLMf1t-m7ctyrmKkylRxa4_cU1Gyp15QJKRKlGlizfYP95bR3c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium gradient-bg text-white"
            >
              <img src="/max-favicon.png" alt="" className="w-4 h-4" />
              MAX
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
