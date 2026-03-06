'use client';

import { useState } from 'react';
import FloatingPaws from "./FloatingPaws";
import Logo from "@/components/layout/Logo";
import Navigation from "@/components/layout/Navigation";
import { heroPolaroids } from "@/lib/data";
import { useScrollTrigger } from "@/lib/hooks/useScrollTrigger";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const titleRef = useScrollTrigger(0.2);
  const ctaRef = useScrollTrigger(0.2);
  const polaroidsRef = useScrollTrigger(0.3);

  return (
    <section className="relative h-screen min-h-[650px] md:min-h-[700px] bg-gradient-to-br from-[#FFAB00] via-[#FFCA58] to-[#FDF4E5] px-4 md:px-6 pt-5 pb-0 overflow-hidden">
      <Logo />
      <Navigation />
      <FloatingPaws />

      <div className="max-w-[1400px] mx-auto h-full flex flex-col relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 mt-16 md:mt-20 md:h-[calc(100vh-120px)]">
          {/* Left — Hero Copy */}
          <div className="col-span-1 md:col-span-5 flex flex-col pt-2 md:pt-4 pl-2 md:pl-4 relative z-20">
            <div
              ref={titleRef.ref}
              className={`transition-all duration-700 ease-out ${
                titleRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="font-display text-[38px] md:text-[44px] font-black leading-[1.05] mb-4 md:mb-4 tracking-[-0.02em] text-[#3B1A2E]">
                Подстригване и СПА<br />грижи, създадени<br />с <em className="italic text-[#FFCA58] relative inline-block"><span className="absolute inset-0 bg-[#6B3A5E]/90 -skew-y-2 -z-10 rounded-sm scale-x-110 scale-y-125"></span>любов</em>
              </h2>
              <p className="font-body text-[17px] md:text-[18px] font-light leading-[1.8] max-w-[400px] mb-3 md:mb-4 text-[#3B1A2E]/75">
                Професионално подстригване, СПА и<br />грижа за козината — в ръцете<br />на опитен екип.
              </p>
              <div className="flex items-center gap-2 mb-5 md:mb-6">
                <span className="font-body text-[14px] md:text-[15px] font-semibold text-black/70 tracking-wide">
                  🐾 Над 3000 щастливи любимци
                </span>
              </div>
            </div>

            <div
              ref={ctaRef.ref}
              className={`flex flex-row md:flex-row items-center gap-3 md:gap-4 transition-all duration-700 ease-out delay-100 ${
                ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="#контакти"
                className="group relative bg-[#6B3A5E] text-white text-[14px] md:text-[22px] font-bold py-[10px] md:py-[14px] px-5 md:px-10 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:bg-[#5B2E48] hover:shadow-[0_16px_40px_rgba(91,46,72,0.4)] text-center md:text-left"
              >
                <span className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
                  <span>Запази час</span>
                  <span className="w-7 h-7 md:w-10 md:h-10 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center group-hover:translate-x-1 group-hover:bg-white/30 transition-all">
                    →
                  </span>
                </span>
              </a>
              <a
                href="tel:+359881234567"
                className="group bg-white/80 backdrop-blur-sm text-[#6B3A5E] text-[14px] md:text-[22px] font-bold py-[10px] md:py-[14px] px-4 md:px-6 rounded-2xl shadow-[0_8px_24px_rgba(107,58,94,0.15)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_32px_rgba(107,58,94,0.25)] flex items-center justify-center gap-2 md:gap-3"
              >
                <span className="w-8 h-8 md:w-12 md:h-12 bg-[#6B3A5E]/10 rounded-xl flex items-center justify-center text-base md:text-2xl group-hover:bg-[#6B3A5E]/20 group-hover:rotate-12 transition-all">
                  📞
                </span>
                <span>Обади се</span>
              </a>
            </div>

            {/* Polaroid Gallery — desktop only */}
            <div
              ref={polaroidsRef.ref}
              className="hidden md:block absolute bottom-4 left-0 right-0 mx-auto w-[380px] h-[260px]"
              style={{ perspective: "800px" }}
            >
              {heroPolaroids.map((p, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 w-[165px] cursor-pointer transition-all duration-500 ease-out hover:z-30 hover:scale-110 hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                  style={{
                    left: `${(parseInt(p.left) / 380) * 100}%`,
                    rotate: p.rotate,
                    zIndex: p.z,
                    transformOrigin: "bottom center",
                  }}
                >
                  <div className="bg-white p-[8px] pb-[36px] shadow-[4px_6px_20px_rgba(0,0,0,0.35)]">
                    <div className="w-full h-[110px] overflow-hidden bg-[#f0ebe3] flex items-center justify-center">
                      <img src={p.img} className="w-full h-full object-contain block" alt={p.name} />
                    </div>
                    <div className="mt-1 text-center text-[9px] font-medium text-black/40 tracking-widest uppercase">
                      {p.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dogs (desktop: in grid) */}
          <div className="hidden md:block col-span-7 relative h-full">
            <div className="absolute bottom-[-40px] left-[-20px] w-[620px] z-20 pointer-events-none">
              <img
                src="/images/dog1.png"
                className="w-full h-full object-contain drop-shadow-[10px_10px_15px_rgba(0,0,0,0.3)]"
                alt="Dog 1"
              />
            </div>
            <div className="absolute right-[-60px] bottom-[-40px] w-[420px] z-10 pointer-events-none">
              <img
                src="/images/dog2.png"
                className="w-full h-full object-contain drop-shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]"
                alt="Dog 2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dogs — mobile only, stuck to section bottom */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 h-[220px] pointer-events-none z-10">
        <div className="absolute bottom-0 left-[5px] w-[170px] z-20">
          <img
            src="/images/dog1.png"
            className="w-full h-full object-contain drop-shadow-[10px_10px_15px_rgba(0,0,0,0.3)]"
            alt="Dog 1"
          />
        </div>
        <div className="absolute right-[5px] bottom-0 w-[140px] z-10">
          <img
            src="/images/dog2.png"
            className="w-full h-full object-contain drop-shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]"
            alt="Dog 2"
          />
        </div>
      </div>
    </section>
  );
}
