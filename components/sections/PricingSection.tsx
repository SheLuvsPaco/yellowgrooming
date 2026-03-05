'use client';

import { useState, useRef, useEffect } from "react";
import { pricingTiers } from "@/lib/data";

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // For mobile: use Intersection Observer to animate on scroll
      cardRefs.current.forEach((element, index) => {
        if (element) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  setVisibleCards((prev) => new Set(prev).add(index));
                }, 150 * index); // Stagger animations
                observer.unobserve(element);
              }
            },
            { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
          );

          observer.observe(element);
          return () => observer.disconnect();
        }
      });
    }
  }, []);

  const isCardVisible = (index: number) => visibleCards.has(index);

  return (
    <section
      id="цени"
      className="relative bg-gradient-to-br from-[#5B2E48] via-[#6B3A5E] to-[#7a4a6d] py-16 md:py-28 px-4 md:px-8 overflow-hidden"
    >
      {/* Decorative paw prints background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] hidden md:block">
        {Array.from({ length: 20 }).map((_, i) => {
          // Use a seeded approach based on index for consistent positioning
          const seed = i * 12345;
          const pseudoRandom = ((seed * 9301 + 49297) % 233280) / 233280;

          return (
            <svg
              key={i}
              viewBox="0 0 100 100"
              className="absolute text-[#FFCA58]"
              style={{
                top: `${pseudoRandom * 100}%`,
                left: `${((seed * 1234) % 100000) / 100000 * 100}%`,
                width: `${80 + ((seed * 5678) % 100000) / 100000 * 100}px`,
                height: `${80 + ((seed * 9012) % 100000) / 100000 * 100}px`,
                transform: `rotate(${((seed * 3456) % 100000) / 100000 * 360}deg)`,
              }}
              fill="currentColor"
            >
              <ellipse cx="30" cy="18" rx="10" ry="12" />
              <ellipse cx="55" cy="12" rx="10" ry="12" />
              <ellipse cx="77" cy="22" rx="10" ry="12" />
              <ellipse cx="15" cy="38" rx="9" ry="11" />
              <ellipse cx="50" cy="68" rx="28" ry="26" />
            </svg>
          );
        })}
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Warm, friendly header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <span className="text-3xl md:text-4xl" style={{ filter: 'drop-shadow(0 0 8px #FFCA58)' }}>🐾</span>
            <span className="text-3xl md:text-4xl">💝</span>
            <span className="text-3xl md:text-4xl">✨</span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-black text-white mb-3 md:mb-4 tracking-tight leading-tight">
            Нашите Цени
          </h2>
          <p className="text-[14px] md:text-[18px] text-white/80 max-w-[500px] mx-auto leading-relaxed px-4">
            Всеки пухкав приятел получава индивидуално внимание и безбройна любов
          </p>
        </div>

        {/* Pricing Cards with unique pet-friendly design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {pricingTiers.map((tier, index) => {
            const isHighlighted = tier.highlight;
            const isHovered = hoveredIndex === index;
            const isVisibleOnScroll = isCardVisible(index);

            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Floating heart on hover or scroll */}
                {(isHovered || isVisibleOnScroll) && (
                  <div
                    className="absolute -top-6 md:-top-8 left-6 md:left-8 text-3xl md:text-4xl animate-bounce z-20"
                    style={{ animationDuration: '1s' }}
                  >
                    💚
                  </div>
                )}

                {/* Card with organic feel */}
                <div
                  className={`relative bg-[#FFFEF9] rounded-[2rem] md:rounded-[3rem] transition-all duration-500 flex flex-col h-full border-2 border-white/50 ${
                    isHighlighted
                      ? 'shadow-[0_20px_60px_rgba(255,202,88,0.4),0_0_40px_rgba(255,202,88,0.2)] scale-105 z-10'
                      : (isHovered || isVisibleOnScroll)
                      ? 'shadow-[0_15px_45px_rgba(255,255,255,0.25),0_0_30px_rgba(255,255,255,0.15)] scale-[1.02]'
                      : 'shadow-[0_8px_30px_rgba(255,255,255,0.2),0_0_20px_rgba(255,255,255,0.1)]'
                  }`}
                >
                  {/* Top decorative curve */}
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 rounded-b-full transition-colors duration-300 ${
                      isHighlighted ? 'bg-[#6B3A5E]' : isHovered ? 'bg-[#6B3A5E]/70' : 'bg-[#6B3A5E]/50'
                    }`}
                  ></div>

                  {/* Highlighted badge on top */}
                  {isHighlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6B3A5E] text-white px-6 py-2 rounded-full text-[13px] font-bold tracking-wider shadow-lg z-20 whitespace-nowrap">
                      ★ НАЙ-ДОБЪР ★
                    </div>
                  )}

                  {/* Paw print decoration */}
                  <div className="absolute top-4 right-4 text-4xl opacity-20">
                    🐾
                  </div>

                  <div className="p-8 pt-12 flex-1 flex flex-col">
                    {/* Pet size indicator with creative styling */}
                    <div className="text-center mb-4">
                      <div
                        className={`inline-block p-6 rounded-full mb-4 transition-all duration-300 ${
                          isHighlighted
                            ? 'bg-gradient-to-br from-[#6B3A5E] to-[#5B2E48] scale-110'
                            : isHovered
                            ? 'bg-[#6B3A5E]/10 scale-105'
                            : 'bg-[#6B3A5E]/5'
                        }`}
                      >
                        <span className="text-5xl block">{tier.emoji}</span>
                      </div>
                      <h3
                        className={`text-[28px] font-black mb-1 transition-colors ${
                          isHighlighted ? 'text-[#6B3A5E]' : 'text-black'
                        }`}
                      >
                        {tier.tier}
                      </h3>
                      <p className="text-[15px] text-black/50 font-medium mb-4">
                        {tier.subtitle}
                      </p>
                      {/* Price Display */}
                      <div className="flex items-baseline justify-center gap-1">
                        <span className={`text-[42px] font-black leading-none ${isHighlighted ? 'text-[#6B3A5E]' : 'text-black'}`}>
                          {tier.price}
                        </span>
                        <span className={`text-[18px] font-semibold ${isHighlighted ? 'text-[#6B3A5E]' : 'text-black/60'}`}>
                          лв
                        </span>
                      </div>
                      <p className="text-[13px] text-black/40 mt-1">
                        {tier.priceLabel}
                      </p>
                    </div>

                    {/* Services with warm checkmarks */}
                    <div className="space-y-3 mb-8 flex-1">
                      {tier.services.map((service, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 group/service"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              isHighlighted
                                ? 'bg-[#6B3A5E] text-white'
                                : 'bg-[#6B3A5E]/10 text-[#6B3A5E] group-hover/service:bg-[#6B3A5E] group-hover/service:text-white'
                            }`}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                          </div>
                          <span className="text-[14px] text-black/70 leading-snug flex-1">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA with warm styling */}
                    <a
                      href="#контакти"
                      className={`block w-full text-center py-4 rounded-2xl font-bold text-[16px] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-[#6B3A5E] to-[#5B2E48] text-white shadow-lg hover:shadow-[0_12px_32px_rgba(107,58,94,0.4)]'
                          : 'bg-[#6B3A5E]/10 text-[#6B3A5E] hover:bg-gradient-to-r hover:from-[#6B3A5E] hover:to-[#5B2E48] hover:text-white hover:shadow-lg'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>Запази час</span>
                        <span className="text-xl">🐾</span>
                      </span>
                      {isHighlighted && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#90c948] to-[#6B3A5E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </a>
                  </div>

                  {/* Bottom decorative wave */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-3 rounded-b-[3rem] transition-all duration-300 ${
                      isHighlighted ? 'bg-[#6B3A5E]' : 'bg-[#6B3A5E]/30'
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emotional trust message */}
        <div className="mt-12 md:mt-20 text-center px-4">
          <div className="inline-flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-4 bg-white/15 backdrop-blur-sm px-4 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-3xl shadow-lg border border-white/20">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-lg md:text-xl shadow-md flex-shrink-0">
                ♥
              </div>
              <div className="text-left">
                <div className="text-[12px] md:text-[15px] font-bold text-white">С любов за всеки пухкав приятел</div>
                <div className="text-[11px] md:text-[13px] text-white/70">Над 5000 щастливи опашки</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-lg md:text-xl shadow-md flex-shrink-0">
                ✨
              </div>
              <div className="text-left">
                <div className="text-[12px] md:text-[15px] font-bold text-white">Професионална грижа</div>
                <div className="text-[11px] md:text-[13px] text-white/70">Сертифицирани грумъри</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-lg md:text-xl shadow-md flex-shrink-0">
                ☘
              </div>
              <div className="text-left">
                <div className="text-[12px] md:text-[15px] font-bold text-white">Еко продукти</div>
                <div className="text-[11px] md:text-[13px] text-white/70">Безопасни за любимците</div>
              </div>
            </div>
          </div>
        </div>

        {/* Warm footer message */}
        <div className="mt-8 md:mt-12 text-center px-4">
          <p className="text-[12px] md:text-[15px] text-white/70 italic">
            "Всяко куче си заслужава да се чувства специално..."
          </p>
        </div>
      </div>
    </section>
  );
}
