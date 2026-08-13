import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/12 py-3 shadow-xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-[5vw] flex items-center justify-between mx-auto max-w-[1800px]">
          
          {/* TOP-LEFT: Small geometric S/bolt logo */}
          <a
            href="#"
            className="flex items-center gap-3 group text-decoration-none"
            aria-label="Shreehith Sai Vodapally"
          >
            <div className="w-8 h-8 rounded border border-white/20 bg-black/50 group-hover:border-white flex items-center justify-center transition-all duration-300 backdrop-blur-md">
              <svg className="w-4 h-4 text-white" viewBox="0 0 100 100" fill="none">
                <path d="M55 12L22 54H48L42 88L78 44H50L55 12Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-semibold text-xs tracking-widest uppercase text-white font-[Manrope]">
              SHREEHITH
            </span>
          </a>

          {/* TOP-CENTER: Navigation */}
          <nav className="hidden lg:flex items-center gap-7 bg-black/40 px-6 py-2 rounded-full border border-white/12 backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-medium tracking-wide text-neutral-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* TOP-RIGHT: LET'S CONNECT */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center px-5 h-[38px] rounded-full bg-white text-black font-extrabold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300"
            >
              LET'S CONNECT
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 rounded-lg border border-white/20 bg-black/50 text-white backdrop-blur-md"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#050505] flex flex-col justify-between p-8 pt-28">
          <div className="flex flex-col gap-6">
            <div className="mono text-xs text-neutral-400 tracking-widest uppercase border-b border-white/12 pb-3">
              NAVIGATION
            </div>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-2xl font-bold tracking-tight text-white hover:text-neutral-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/12 pt-6">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-3.5 rounded-full bg-white text-black font-bold text-center text-xs tracking-wider uppercase"
            >
              LET'S CONNECT
            </a>
            <p className="mono text-center text-[10px] text-neutral-500 uppercase">
              Shreehith Sai Vodapally &bull; ECE
            </p>
          </div>
        </div>
      )}
    </>
  );
}
