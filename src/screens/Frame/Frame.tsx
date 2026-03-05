export const Frame = (): JSX.Element => {
  return (
    <div className="font-sans text-black overflow-x-hidden">

      {/* ─── FLOATING PAW BACKGROUND (fixed, behind everything) ─── */}
      <style>{`
        @keyframes float1 { 0%,100% { transform: translateY(0px) rotate(-12deg); } 50% { transform: translateY(-22px) rotate(-6deg); } }
        @keyframes float2 { 0%,100% { transform: translateY(0px) rotate(18deg);  } 50% { transform: translateY(-18px) rotate(25deg); } }
        @keyframes float3 { 0%,100% { transform: translateY(0px) rotate(5deg);   } 50% { transform: translateY(-28px) rotate(-3deg); } }
        @keyframes float4 { 0%,100% { transform: translateY(0px) rotate(-20deg); } 50% { transform: translateY(-14px) rotate(-10deg); } }
        @keyframes float5 { 0%,100% { transform: translateY(0px) rotate(30deg);  } 50% { transform: translateY(-20px) rotate(38deg); } }
        @keyframes float6 { 0%,100% { transform: translateY(0px) rotate(-5deg);  } 50% { transform: translateY(-24px) rotate(4deg); } }
        html { scroll-behavior: smooth; }
      `}</style>



      {/* ─── FLOATING NAV ─── */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/40 backdrop-blur-md px-10 py-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 flex gap-10 font-semibold text-[18px]">
        {[["Услуги", "#услуги"], ["Цени", "#цени"], ["Галерия", "#галерия"], ["Контакти", "#контакти"]].map(([label, href]) => (
          <a key={label} href={href} className="hover:text-amber-800 hover:scale-105 transition-all duration-200">{label}</a>
        ))}
      </nav>

      {/* ─── LOGO (fixed top-left) ─── */}
      <div className="fixed top-4 left-7 z-50 flex items-center gap-2">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-8 h-8 text-black">
          <ellipse cx="30" cy="18" rx="10" ry="12" />
          <ellipse cx="55" cy="12" rx="10" ry="12" />
          <ellipse cx="77" cy="22" rx="10" ry="12" />
          <ellipse cx="15" cy="38" rx="9" ry="11" />
          <ellipse cx="50" cy="68" rx="28" ry="26" />
        </svg>
        <div>
          <div className="text-[22px] font-black tracking-widest uppercase leading-none">Beauty Pawn</div>
          <div className="h-[3px] bg-black w-full rounded-full mt-0.5"></div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] bg-gradient-to-br from-[#FFAB00] via-[#FFCA58] to-[#FDF4E5] px-6 pt-5 pb-0 overflow-hidden">

        {/* Floating Paws — hero only */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          {[
            { top: "8%", left: "28%", size: 68, anim: "float1", dur: "4.2s", delay: "0s", op: 0.13 },
            { top: "22%", left: "52%", size: 54, anim: "float2", dur: "5.8s", delay: "0.8s", op: 0.11 },
            { top: "6%", left: "68%", size: 62, anim: "float3", dur: "3.9s", delay: "1.5s", op: 0.10 },
            { top: "42%", left: "80%", size: 76, anim: "float4", dur: "6.2s", delay: "0.3s", op: 0.12 },
            { top: "60%", left: "88%", size: 50, anim: "float5", dur: "4.7s", delay: "2.1s", op: 0.10 },
            { top: "35%", left: "38%", size: 44, anim: "float6", dur: "5.1s", delay: "1.0s", op: 0.11 },
            { top: "70%", left: "20%", size: 58, anim: "float3", dur: "4.5s", delay: "0.5s", op: 0.09 },
            { top: "15%", left: "82%", size: 46, anim: "float1", dur: "6.0s", delay: "1.8s", op: 0.10 },
            { top: "50%", left: "60%", size: 36, anim: "float5", dur: "4.0s", delay: "3.0s", op: 0.08 },
            { top: "80%", left: "45%", size: 64, anim: "float2", dur: "5.4s", delay: "0.2s", op: 0.10 },
            { top: "30%", left: "10%", size: 52, anim: "float4", dur: "4.9s", delay: "2.5s", op: 0.09 },
            { top: "5%", left: "44%", size: 42, anim: "float6", dur: "5.6s", delay: "0.6s", op: 0.09 },
            { top: "55%", left: "30%", size: 70, anim: "float2", dur: "4.3s", delay: "1.2s", op: 0.10 },
            { top: "18%", left: "18%", size: 56, anim: "float5", dur: "6.4s", delay: "2.8s", op: 0.08 },
            { top: "12%", left: "95%", size: 54, anim: "float2", dur: "5.9s", delay: "2.0s", op: 0.10 },
            { top: "65%", left: "50%", size: 46, anim: "float1", dur: "4.6s", delay: "1.3s", op: 0.09 },
          ].map((p, i) => (
            <svg key={i} viewBox="0 0 100 100" fill="black"
              style={{ position: "absolute", top: p.top, left: p.left, width: p.size, height: p.size, opacity: p.op, animation: `${p.anim} ${p.dur} ease-in-out ${p.delay} infinite` }}>
              <ellipse cx="30" cy="18" rx="10" ry="12" />
              <ellipse cx="55" cy="12" rx="10" ry="12" />
              <ellipse cx="77" cy="22" rx="10" ry="12" />
              <ellipse cx="15" cy="38" rx="9" ry="11" />
              <ellipse cx="50" cy="68" rx="28" ry="26" />
            </svg>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto h-full flex flex-col relative z-10">
          <div className="grid grid-cols-12 gap-4 mt-20 h-[calc(100vh-120px)]">

            {/* Left — Hero Copy */}
            <div className="col-span-5 flex flex-col pt-4 pl-4 relative">
              <h2 className="text-[44px] font-bold leading-[1.15] mb-4 tracking-tight">
                Вашият любимец<br />заслужава<br />най-доброто
              </h2>
              <p className="text-[18px] font-medium leading-relaxed max-w-[400px] mb-6 text-black/85">
                Професионална грижа, любов и<br />внимание за вашия домашен любимец.<br />Резервирайте час онлайн в секунди.
              </p>
              <a href="#контакти" className="bg-gradient-to-r from-[#205c2d] to-[#609919] text-white text-[22px] font-bold py-[12px] px-8 rounded-[50px] shadow-[0_10px_20px_rgba(32,92,45,0.4)] hover:scale-105 transition-transform w-max">
                Запази час
              </a>

              {/* Polaroid Gallery */}
              <div className="absolute bottom-4 left-0 w-[380px] h-[260px]" style={{ perspective: "800px" }}>
                {[
                  { img: "/images/dog for small galery.jpg", left: "0px", rotate: "-8deg", z: 10, name: "Рекс" },
                  { img: "/images/dog for small galery1.jpg", left: "90px", rotate: "3deg", z: 20, name: "Буся" },
                  { img: "/images/dogs for small galary.jpg", left: "180px", rotate: "11deg", z: 15, name: "Приятели" },
                ].map((p, i) => (
                  <div key={i} className="absolute bottom-0 w-[165px] cursor-pointer transition-all duration-300 ease-out hover:z-30 hover:scale-110 hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
                    style={{ left: p.left, rotate: p.rotate, zIndex: p.z, transformOrigin: "bottom center" }}>
                    <div className="bg-white p-[8px] pb-[36px] shadow-[4px_6px_20px_rgba(0,0,0,0.35)]">
                      <div className="w-full h-[110px] overflow-hidden bg-[#f0ebe3] flex items-center justify-center">
                        <img src={p.img} className="w-full h-full object-contain block" alt={p.name} />
                      </div>
                      <div className="mt-1 text-center text-[9px] font-medium text-black/40 tracking-widest uppercase">{p.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dogs */}
            <div className="col-span-7 relative h-full">
              <div className="absolute bottom-[-40px] left-[-20px] w-[620px] h-auto z-20 pointer-events-none">
                <img src="/images/dog1.png" className="w-full h-full object-contain drop-shadow-[10px_10px_15px_rgba(0,0,0,0.3)]" alt="Dog 1" />
              </div>
              <div className="absolute right-[-60px] bottom-[-40px] w-[420px] h-auto z-10 pointer-events-none">
                <img src="/images/dog2.png" className="w-full h-full object-contain drop-shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]" alt="Dog 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — УСЛУГИ (Services)
      ══════════════════════════════════════════ */}
      <section id="услуги" className="relative bg-gradient-to-br from-[#FDF4E5] to-[#FFF8E7] py-24 px-8 z-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[42px] font-black text-center mb-3 tracking-tight">Нашите услуги</h2>
          <style>{`
            .service-card::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%);
              transform: translateX(-100%);
              transition: transform 0.6s ease;
              pointer-events: none;
              border-radius: inherit;
            }
            .service-card:hover::before { transform: translateX(100%); }
          `}</style>

          <div className="grid grid-cols-2 gap-[2px] bg-black/10 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            {[
              {
                num: "01", icon: "🛁",
                title: "Миене и сушене",
                desc: "Нежно миене с висококачествена козметика и сушене с вентилатор.",
                accent: "from-black/50 to-black/20",
                bg: "/images/dogshower.jpg",
              },
              {
                num: "02", icon: "✂️",
                title: "Подстригване",
                desc: "Стилно подстригване по предпочитан модел или по стандарт на породата.",
                accent: "from-black/50 to-black/20",
                bg: "/images/grooming.jpg",
              },
              {
                num: "03", icon: "💅",
                title: "Ноктопочистване",
                desc: "Внимателно рязане и полиране на ноктите за комфортно ходене.",
                accent: "from-black/50 to-black/20",
                bg: "/images/nails.jpg",
              },
              {
                num: "04", icon: "🎀",
                title: "СПА пакет",
                desc: "Маски, масаж и ароматерапия — луксозна грижа от глава до опашка.",
                accent: "from-black/50 to-black/20",
                bg: "/images/spa.jpg",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`service-card relative p-10 cursor-default overflow-hidden group bg-cover bg-center`}
                style={{ backgroundImage: `url('${s.bg}')` }}
              >
                {/* Overlay for background image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent}`}></div>

                {/* Large background number */}
                <div className="absolute -top-4 -right-2 text-[130px] font-black text-black/5 leading-none select-none pointer-events-none">
                  {s.num}
                </div>

                {/* Number badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/70">{s.num}</span>
                  <span className="w-8 h-[1.5px] bg-white/40 block"></span>
                </div>

                {/* Icon */}
                <div className="text-[56px] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 inline-block">
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="text-[28px] font-black mb-3 tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  {s.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-[3px] bg-white/50 rounded-full mb-4 group-hover:w-24 transition-all duration-500"></div>

                {/* Description */}
                <p className="text-[15px] text-white/90 leading-relaxed max-w-[280px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  {s.desc}
                </p>

                {/* CTA link */}
                <a href="#контакти" className="inline-flex items-center gap-2 mt-6 text-[13px] font-bold text-white/70 hover:text-white transition-colors tracking-wider uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  Запази час
                  <span className="text-[16px] group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — ЦЕНИ (Pricing)
      ══════════════════════════════════════════ */}
      <section id="цени" className="relative bg-gradient-to-br from-[#FFCA58] to-[#FFAB00] py-24 px-8 z-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[42px] font-black text-center mb-3 tracking-tight">Цени</h2>
          <p className="text-center text-[18px] text-black/70 mb-14">Прозрачни цени без скрити такси</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tier: "Малък", emoji: "🐹", subtitle: "до 5 кг", services: ["Миене + сушене — 25 лв", "Подстригване — 35 лв", "Ноктопочистване — 10 лв", "СПА пакет — 55 лв"], highlight: false },
              { tier: "Среден", emoji: "🐕", subtitle: "5–15 кг", services: ["Миене + сушене — 35 лв", "Подстригване — 50 лв", "Ноктопочистване — 12 лв", "СПА пакет — 75 лв"], highlight: true },
              { tier: "Голям", emoji: "🦮", subtitle: "над 15 кг", services: ["Миене + сушене — 50 лв", "Подстригване — 70 лв", "Ноктопочистване — 15 лв", "СПА пакет — 100 лв"], highlight: false },
            ].map((p, i) => (
              <div key={i} className={`rounded-2xl p-7 border-2 transition-all duration-300 hover:-translate-y-1 ${p.highlight
                ? "bg-[#1a4a24] text-white border-[#1a4a24] shadow-[0_12px_40px_rgba(26,74,36,0.35)]"
                : "bg-white/80 border-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                }`}>
                <div className="text-4xl mb-2">{p.emoji}</div>
                <div className={`text-[28px] font-black mb-0.5 ${p.highlight ? "text-white" : ""}`}>{p.tier}</div>
                <div className={`text-[14px] mb-5 ${p.highlight ? "text-white/70" : "text-black/50"}`}>{p.subtitle}</div>
                <ul className="space-y-2">
                  {p.services.map((s, j) => (
                    <li key={j} className={`text-[15px] flex items-center gap-2 ${p.highlight ? "text-white/90" : "text-black/75"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.highlight ? "bg-[#90c948]" : "bg-[#609919]"}`}></span>
                      {s}
                    </li>
                  ))}
                </ul>
                <a href="#контакти" className={`mt-6 block text-center py-2.5 px-6 rounded-full font-bold text-[15px] transition-all hover:scale-105 ${p.highlight
                  ? "bg-[#90c948] text-[#1a4a24]"
                  : "bg-gradient-to-r from-[#205c2d] to-[#609919] text-white"
                  }`}>Запази час</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — ГАЛЕРИЯ (Gallery)
      ══════════════════════════════════════════ */}
      <section id="галерия" className="bg-[#111] py-24 px-0 z-10 relative overflow-hidden">
        <style>{`
          .story-img { transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
          .story-cell:hover .story-img { transform: scale(1.06); }
          .story-caption { opacity: 0; transform: translateY(12px); transition: all 0.4s ease; }
          .story-cell:hover .story-caption { opacity: 1; transform: translateY(0); }
        `}</style>

        {/* Header */}
        <div className="max-w-[1100px] mx-auto px-8 mb-16">
          <h2 className="text-[42px] font-black text-white text-center mb-3 tracking-tight">Нашите истории</h2>
          <p className="text-center text-[18px] text-white/50">Всяко куче заслужава своя момент на блясък ✨</p>
        </div>

        {/* ── Chapter 1: Full-width hero — arrival ── */}
        <div className="story-cell relative h-[55vh] overflow-hidden cursor-pointer mb-[3px]">
          <img
            className="story-img w-full h-full object-cover object-center"
            src="/images/lovely-pet-portrait-isolated.jpg"
            alt="Пристигане"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent flex items-end p-12">
            <div className="story-caption">
              <p className="text-white/60 text-[13px] tracking-[0.3em] uppercase mb-2">Глава 01</p>
              <h3 className="text-white text-[36px] font-black leading-tight">Добре дошъл,<br />приятелю 🐾</h3>
            </div>
          </div>
        </div>

        {/* ── Chapter 2: Side-by-side — wash & prep ── */}
        <div className="flex gap-[3px] mb-[3px]">
          <div className="story-cell relative flex-1 h-[45vh] overflow-hidden cursor-pointer">
            <img className="story-img w-full h-full object-cover object-center" src="/images/washing-pet-dog-home.jpg" alt="Миене" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="story-caption">
                <p className="text-white/60 text-[11px] tracking-[0.3em] uppercase mb-1">Глава 02</p>
                <h3 className="text-white text-[22px] font-black">Нежното миене</h3>
                <p className="text-white/70 text-[13px] mt-1">Топла вода, любов и аромат на чистота.</p>
              </div>
            </div>
          </div>
          <div className="story-cell relative flex-1 h-[45vh] overflow-hidden cursor-pointer">
            <img className="story-img w-full h-full object-cover object-center" src="/images/washing-pet-dog-home (1).jpg" alt="Миене 2" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="story-caption">
                <p className="text-white/60 text-[11px] tracking-[0.3em] uppercase mb-1">Продължение</p>
                <h3 className="text-white text-[22px] font-black">Грижа за козината</h3>
                <p className="text-white/70 text-[13px] mt-1">Всяка нишка — лъскава и мека.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Chapter 3: Wide cinematic — the cut ── */}
        <div className="flex gap-[3px] mb-[3px]">
          <div className="story-cell relative w-[65%] h-[50vh] overflow-hidden cursor-pointer">
            <img className="story-img w-full h-full object-cover object-top" src="/images/haircuting-process-small-dog-sits-table-dog-with-professional.jpg" alt="Подстригване" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/75 to-transparent flex items-end p-10">
              <div className="story-caption max-w-[420px]">
                <p className="text-white/60 text-[11px] tracking-[0.3em] uppercase mb-2">Глава 03</p>
                <h3 className="text-white text-[30px] font-black leading-tight">Изкуството<br />на подстригването</h3>
                <p className="text-white/70 text-[14px] mt-2">Опитни ръце, прецизни движения — стилинг по мярка.</p>
              </div>
            </div>
          </div>
          <div className="story-cell relative flex-1 h-[50vh] overflow-hidden cursor-pointer">
            <img className="story-img w-full h-full object-cover object-top" src="/images/haircuting-process-small-dog-sits-table-dog-with-professional (1).jpg" alt="Подстригване 2" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex items-end p-8">
              <div className="story-caption">
                <p className="text-white/60 text-[11px] tracking-[0.3em] uppercase mb-1">Детайлите</p>
                <h3 className="text-white text-[20px] font-black">Всеки милиметър<br />има значение</h3>
              </div>
            </div>
          </div>
        </div>

        {/* ── Chapter 4: Three-column — finishing touches ── */}
        <div className="flex gap-[3px] mb-[3px]">
          <div className="story-cell relative flex-1 h-[40vh] overflow-hidden cursor-pointer">
            <img className="story-img w-full h-full object-cover" src="/images/shaving-process-small-dog-sits-table-dog-shaved-by-professional.jpg" alt="Бръснене" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="story-caption">
                <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase mb-1">Глава 04</p>
                <h3 className="text-white text-[18px] font-black">Завършващ щрих</h3>
              </div>
            </div>
          </div>
          <div className="story-cell relative flex-1 h-[40vh] overflow-hidden cursor-pointer">
            <img className="story-img w-full h-full object-cover object-top" src="/images/woman-shears-dog-dog-sitting-couch-breed-yorkshire-terrier.jpg" alt="Стайлинг" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="story-caption">
                <h3 className="text-white text-[18px] font-black">Стайлинг у дома</h3>
                <p className="text-white/60 text-[13px] mt-1">Релаксиращ и уютен.</p>
              </div>
            </div>
          </div>
          <div className="story-cell relative flex-1 h-[40vh] overflow-hidden cursor-pointer">
            <img className="story-img w-full h-full object-cover object-center" src="/images/closeup-shot-cute-fluffy-border-collie-puppies.jpg" alt="Малки кученца" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div className="story-caption">
                <h3 className="text-white text-[18px] font-black">Дори за малките 🐶</h3>
                <p className="text-white/60 text-[13px] mt-1">Грижа от ден едно.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Chapter 5: Reveal — full width gorgeous result ── */}
        <div className="story-cell relative h-[55vh] overflow-hidden cursor-pointer">
          <img
            className="story-img w-full h-full object-cover object-center"
            src="/images/close-up-owner-holding-dog-with-bow.jpg"
            alt="Финалът"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/20 to-transparent flex items-center justify-end p-16 text-right">
            <div className="story-caption max-w-[400px]">
              <p className="text-white/60 text-[13px] tracking-[0.3em] uppercase mb-3">Финален акорд</p>
              <h3 className="text-white text-[38px] font-black leading-tight">Готови за<br />целия свят ✨</h3>
              <p className="text-white/70 text-[16px] mt-4 leading-relaxed">Щастлив любимец, щастлив стопанин.</p>
              <a href="#контакти" className="inline-block mt-6 bg-white text-black font-bold text-[15px] px-7 py-3 rounded-full hover:bg-amber-400 transition-colors">Запази час →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — КОНТАКТИ (Contact)
      ══════════════════════════════════════════ */}
      <section id="контакти" className="bg-gradient-to-br from-[#FFAB00] via-[#FFCA58] to-[#FDF4E5] py-24 px-8 z-10 relative">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[42px] font-black text-center mb-3 tracking-tight">Свържи се с нас</h2>
          <p className="text-center text-[18px] text-black/70 mb-14">Готови сме да се погрижим за вашия любимец</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contact Info */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-white space-y-5">
              {[
                { icon: "📍", label: "Адрес", value: "ул. Пример 12, София" },
                { icon: "📞", label: "Телефон", value: "+359 88 123 4567" },
                { icon: "📧", label: "Имейл", value: "info@beautypawn.bg" },
                { icon: "🕐", label: "Работно време", value: "Пон–Съб: 9:00–19:00" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-[13px] font-bold text-black/40 uppercase tracking-wider">{c.label}</div>
                    <div className="text-[17px] font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking Form */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-white">
              <h3 className="text-[22px] font-black mb-5">Запази час онлайн</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Вашето име" className="w-full border border-black/10 rounded-xl px-4 py-3 text-[16px] bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <input type="tel" placeholder="Телефон" className="w-full border border-black/10 rounded-xl px-4 py-3 text-[16px] bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <select className="w-full border border-black/10 rounded-xl px-4 py-3 text-[16px] bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-400 text-black/70">
                  <option value="">Изберете услуга</option>
                  <option>Миене и сушене</option>
                  <option>Подстригване</option>
                  <option>Ноктопочистване</option>
                  <option>СПА пакет</option>
                  <option>Антипаразитна грижа</option>
                </select>
                <input type="date" className="w-full border border-black/10 rounded-xl px-4 py-3 text-[16px] bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-400 text-black/70" />
                <button className="w-full bg-gradient-to-r from-[#205c2d] to-[#609919] text-white text-[18px] font-bold py-3.5 rounded-xl shadow-[0_8px_20px_rgba(32,92,45,0.35)] hover:scale-[1.02] transition-transform">
                  Запази час 🐾
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#1a1a1a] text-white/60 text-center py-6 text-[14px] z-10 relative">
        © 2025 Beauty Pawn — Всички права запазени 🐾
      </footer>

    </div>
  );
};
