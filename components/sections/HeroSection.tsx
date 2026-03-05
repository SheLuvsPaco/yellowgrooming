'use client';

import { useState } from 'react';
import FloatingPaws from "./FloatingPaws";
import { heroPolaroids } from "@/lib/data";
import { useScrollTrigger } from "@/lib/hooks/useScrollTrigger";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const titleRef = useScrollTrigger(0.2);
  const ctaRef = useScrollTrigger(0.2);
  const polaroidsRef = useScrollTrigger(0.3);

  return (
    <section className="relative h-screen min-h-[650px] md:min-h-[700px] bg-gradient-to-br from-[#FFAB00] via-[#FFCA58] to-[#FDF4E5] px-4 md:px-6 pt-5 pb-0 overflow-hidden">
      <FloatingPaws />

      <div className="max-w-[1400px] mx-auto h-full flex flex-col relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 mt-16 md:mt-20 h-[calc(100vh-100px)] md:h-[calc(100vh-120px)]">
          {/* Left — Hero Copy */}
          <div className="col-span-1 md:col-span-5 flex flex-col pt-2 md:pt-4 pl-2 md:pl-4 relative z-20">
            <div
              ref={titleRef.ref}
              className={`transition-all duration-700 ease-out ${
                titleRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-[24px] md:text-[44px] font-bold leading-[1.15] mb-3 md:mb-4 tracking-tight">
                Вашият любимец<br />заслужава<br />най-доброто
              </h2>
              <p className="text-[13px] md:text-[18px] font-medium leading-relaxed max-w-[400px] mb-3 md:mb-6 text-black/85">
                Професионална грижа, любов и<br />внимание за вашия домашен любимец.<br />Резервирайте час онлайн в секунди.
              </p>
            </div>

            <div
              ref={ctaRef.ref}
              className={`flex flex-col md:flex-row items-center gap-3 md:gap-4 transition-all duration-700 ease-out delay-100 ${
                ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="#контакти"
                className="group relative bg-[#6B3A5E] text-white text-[16px] md:text-[22px] font-bold py-[10px] md:py-[14px] px-6 md:px-10 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:bg-[#5B2E48] hover:shadow-[0_16px_40px_rgba(91,46,72,0.4)] text-center md:text-left"
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
                className="group bg-white/80 backdrop-blur-sm text-[#6B3A5E] text-[16px] md:text-[22px] font-bold py-[10px] md:py-[14px] px-4 md:px-6 rounded-2xl shadow-[0_8px_24px_rgba(107,58,94,0.15)] transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:shadow-[0_12px_32px_rgba(107,58,94,0.25)] flex items-center justify-center gap-3"
              >
                <span className="w-9 h-9 md:w-12 md:h-12 bg-[#6B3A5E]/10 rounded-xl flex items-center justify-center text-lg md:text-2xl group-hover:bg-[#6B3A5E]/20 group-hover:rotate-12 transition-all">
                  📞
                </span>
                <span>Обади се</span>
              </a>
            </div>

            {/* Polaroid Gallery */}
            <div
              ref={polaroidsRef.ref}
              className="absolute bottom-0 md:bottom-4 left-0 right-0 mx-auto w-[280px] md:w-[380px] h-[140px] md:h-[260px]"
              style={{ perspective: "800px" }}
            >
              {heroPolaroids.map((p, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 w-[60px] md:w-[165px] cursor-pointer transition-all duration-500 ease-out hover:z-30 hover:scale-110 hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                  style={{
                    left: `${(parseInt(p.left) / 380) * 100}%`,
                    rotate: p.rotate,
                    zIndex: p.z,
                    transformOrigin: "bottom center",
                  }}
                >
                  <div className="bg-white p-[4px] md:p-[8px] pb-[16px] md:pb-[36px] shadow-[4px_6px_20px_rgba(0,0,0,0.35)]">
                    <div className="w-full h-[45px] md:h-[110px] overflow-hidden bg-[#f0ebe3] flex items-center justify-center">
                      <img src={p.img} className="w-full h-full object-contain block" alt={p.name} />
                    </div>
                    <div className="mt-0.5 md:mt-1 text-center text-[5px] md:text-[9px] font-medium text-black/40 tracking-widest uppercase">
                      {p.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dogs */}
          <div className="col-span-1 md:col-span-7 relative h-full order-first md:order-last">
            <div className="absolute bottom-[-10px] md:bottom-[-40px] left-[-10px] md:left-[-20px] w-[200px] md:w-[620px] z-20 pointer-events-none">
              <img
                src="/images/dog1.png"
                className="w-full h-full object-contain drop-shadow-[10px_10px_15px_rgba(0,0,0,0.3)]"
                alt="Dog 1"
              />
            </div>
            <div className="absolute right-[-20px] md:right-[-60px] bottom-[-10px] md:bottom-[-40px] w-[150px] md:w-[420px] z-10 pointer-events-none">
              <img
                src="/images/dog2.png"
                className="w-full h-full object-contain drop-shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]"
                alt="Dog 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
