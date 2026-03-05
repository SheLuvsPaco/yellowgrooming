'use client';

import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/data';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20 transition-all duration-300"
        aria-label="Menu"
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`w-6 h-0.5 bg-[#5B2E48] transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#5B2E48] transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#5B2E48] transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Overlay Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-[75%] max-w-sm bg-gradient-to-b from-[#FFCA58] to-[#FFAB00] shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-black/10">
            <span className="text-[20px] font-bold text-[#5B2E48]">Меню</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <nav className="p-6 space-y-2">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block py-4 px-6 text-[18px] font-semibold text-[#5B2E48] hover:bg-white/40 rounded-xl transition-all duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Quick Contact */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#FFAB00]/80 to-transparent">
            <a
              href="tel:+359881234567"
              className="flex items-center gap-3 bg-[#6B3A5E] text-white py-4 px-6 rounded-2xl shadow-lg hover:bg-[#5B2E48] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(91,46,72,0.4)] transition-all"
            >
              <span className="text-2xl">📞</span>
              <div className="flex-1 text-left">
                <div className="text-[12px] opacity-80">Обади се</div>
                <div className="text-[16px] font-bold">+359 88 123 4567</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
