'use client';

import { useState, useEffect, useRef } from 'react';
import { navLinks } from '@/lib/data';

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroHeight = window.innerHeight;
      const scrollingUp = currentY < lastScrollY.current;

      if (currentY > heroHeight && scrollingUp) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/40 backdrop-blur-md px-10 py-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 gap-10 font-semibold text-[18px] transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      {navLinks.map(([label, href]) => (
        <a
          key={label}
          href={href}
          className="hover:text-amber-800 hover:scale-105 transition-all duration-200"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
