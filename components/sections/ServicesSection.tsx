'use client';

import { services } from "@/lib/data";
import { useScrollTrigger } from "@/lib/hooks/useScrollTrigger";

// Static background positions defined outside component to avoid hydration issues
const SERVICE_BG_POSITIONS: Record<string, string> = {
  "Миене и сушене": "35% 50%",
  "СПА пакет": "45% 50%",
  "Подстригване": "center center",
  "Ноктопочистване": "center center",
};

export default function ServicesSection() {
  const sectionRef = useScrollTrigger(0.1);

  return (
    <section
      id="услуги"
      className="relative bg-gradient-to-br from-[#FDF4E5] to-[#FFF8E7] py-16 md:py-24 px-4 md:px-8 z-10 overflow-hidden"
    >
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(8deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-8deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes float6 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(-3deg); }
        }
        @keyframes shimmerSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .service-card.animate-shimmer::before {
          animation: shimmerSlide 0.6s ease forwards;
        }
      `}</style>

      {/* Animated floating paw prints */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '8%', left: '5%', size: 42, anim: 'float1', dur: '4s', delay: '0s', opacity: 0.083 },
          { top: '15%', left: '92%', size: 52, anim: 'float2', dur: '5s', delay: '0.5s', opacity: 0.062 },
          { top: '35%', left: '3%', size: 47, anim: 'float3', dur: '4.5s', delay: '1s', opacity: 0.073 },
          { top: '65%', left: '95%', size: 57, anim: 'float4', dur: '5.5s', delay: '1.5s', opacity: 0.052 },
          { top: '85%', left: '8%', size: 50, anim: 'float5', dur: '4.2s', delay: '2s', opacity: 0.083 },
          { top: '45%', left: '88%', size: 44, anim: 'float6', dur: '4.8s', delay: '0.3s', opacity: 0.073 },
          { top: '25%', left: '15%', size: 40, anim: 'float2', dur: '5.2s', delay: '2.5s', opacity: 0.062 },
          { top: '75%', left: '90%', size: 48, anim: 'float1', dur: '4.3s', delay: '1.2s', opacity: 0.083 },
          { top: '55%', left: '4%', size: 54, anim: 'float4', dur: '5.8s', delay: '0.8s', opacity: 0.052 },
          { top: '92%', left: '75%', size: 42, anim: 'float3', dur: '4.6s', delay: '1.8s', opacity: 0.073 },
        ].map((paw, i) => (
          <svg
            key={i}
            viewBox="0 0 100 100"
            className="absolute text-[#609919]"
            style={{
              top: paw.top,
              left: paw.left,
              width: `${paw.size}px`,
              height: `${paw.size}px`,
              opacity: paw.opacity,
              animation: `${paw.anim} ${paw.dur} ease-in-out ${paw.delay} infinite`,
            }}
            fill="currentColor"
          >
            <ellipse cx="30" cy="18" rx="10" ry="12" />
            <ellipse cx="55" cy="12" rx="10" ry="12" />
            <ellipse cx="77" cy="22" rx="10" ry="12" />
            <ellipse cx="15" cy="38" rx="9" ry="11" />
            <ellipse cx="50" cy="68" rx="28" ry="26" />
          </svg>
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto px-2 md:px-0">
        <h2 className="text-[26px] md:text-[42px] font-black text-center mb-3 tracking-tight">
          Нашите услуги
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-black/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          {services.map((s, i) => {
            const cardRef = useScrollTrigger(0.2);

            return (
              <div
                key={i}
                ref={cardRef.ref}
                className={`service-card relative p-6 md:p-10 cursor-default overflow-hidden bg-cover ${
                  cardRef.isVisible ? 'animate-shimmer' : ''
                }`}
                style={{
                  backgroundImage: `url('${s.bg}')`,
                  backgroundPosition: SERVICE_BG_POSITIONS[s.title] || "center center"
                }}
              >
                {/* Overlay for background image - lighter to show images */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 transition-all duration-300"></div>

                {/* Large background number */}
                <div className="absolute -top-4 -right-2 text-[80px] md:text-[130px] font-black text-black/5 leading-none select-none pointer-events-none">
                  {s.num}
                </div>

                {/* Number badge */}
                <div className="inline-flex items-center gap-2 mb-4 md:mb-6 relative z-10">
                  <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-white/70">
                    {s.num}
                  </span>
                  <span className="w-8 h-[1.5px] bg-white/40 block"></span>
                </div>

                {/* Icon */}
                <div className="text-[40px] md:text-[56px] mb-4 md:mb-5 inline-block relative z-10">
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="text-[22px] md:text-[28px] font-black mb-3 tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] relative z-10">
                  {s.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-[3px] bg-white/50 rounded-full mb-3 md:mb-4 relative z-10"></div>

                {/* Description */}
                <p className="text-[13px] md:text-[15px] text-white/90 leading-relaxed max-w-[280px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] relative z-10">
                  {s.desc}
                </p>

                {/* CTA link */}
                <a
                  href="#контакти"
                  className="inline-flex items-center gap-2 mt-4 md:mt-6 text-[12px] md:text-[13px] font-bold text-white/70 hover:text-white transition-colors tracking-wider uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] relative z-10"
                >
                  Запази час
                  <span className="text-[14px] md:text-[16px] inline-block">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
