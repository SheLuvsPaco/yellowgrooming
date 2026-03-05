'use client';

import { useState } from "react";
import { contactInfo, serviceOptions } from "@/lib/data";

const DOG_BREEDS = [
  "Златист ретривър", "Лабрадор", "Немска овчарка", "Булдог", "Пудел",
  "Чихуахуа", "Йоркширски териер", "Шицу", "Корги", "Хъски",
  "Боксер", "Ротвейлер", "Доберман", "Далматинец", "Колли",
  "Бордер коли", "Коки(spaniel)", "Бостон териер", "Френски булдог", "Друга"
];

const TIME_SLOTS = [
  "09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"
];

export default function ContactSection() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    breed: "",
    services: [] as string[],
    selectedDate: null as Date | null,
    selectedTime: "",
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getDay() !== 0; // Not Sunday
  };

  const handleDateSelect = (date: Date) => {
    if (isDateAvailable(date)) {
      setFormData({ ...formData, selectedDate: date, selectedTime: "" });
    }
  };

  const toggleService = (serviceValue: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceValue)
        ? prev.services.filter((s) => s !== serviceValue)
        : [...prev.services, serviceValue],
    }));
  };

  const handleContinue = () => {
    if (formData.name && formData.phone && formData.breed && formData.services.length > 0) {
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    if (!formData.selectedDate || !formData.selectedTime) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus({
        type: "success",
        message: `Часът е запазен успешно за ${formData.services.length} услуг${formData.services.length === 1 ? 'а' : 'и'}! Ще се свържем с вас скоро.`
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        breed: "",
        services: [],
        selectedDate: null,
        selectedTime: "",
      });
      setStep(1);
    }, 1500);
  };

  const monthNames = ["Януари", "Февруари", "Март", "Април", "Май", "Юни",
    "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"];
  const dayNames = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  return (
    <section
      id="контакти"
      className="py-16 md:py-20 px-4 md:px-6 z-10 relative overflow-hidden min-h-screen"
      style={{
        background: `
          linear-gradient(135deg, rgba(255,171,0,0.95) 0%, rgba(255,202,88,0.9) 50%, rgba(253,244,229,0.95) 100%),
          radial-gradient(circle at 20% 80%, rgba(96,153,25,0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(107,58,94,0.1) 0%, transparent 50%),
          linear-gradient(45deg, #FFAB00 25%, #FFCA58 25%, #FFCA58 50%, #FFAB00 50%, #FFAB00 75%, #FFCA58 75%)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 60px 60px',
        backgroundPosition: '0 0, 0 0, 0 0, 0 0'
      }}
    >
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B3A5E' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Paw Prints - Floating and Rotating */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '5%', left: '8%', size: 40, rotate: -15, delay: '0s', duration: '8s', opacity: 0.15 },
          { top: '12%', left: '92%', size: 55, rotate: 20, delay: '1s', duration: '10s', opacity: 0.12 },
          { top: '28%', left: '3%', size: 48, rotate: -10, delay: '2s', duration: '9s', opacity: 0.14 },
          { top: '45%', left: '95%', size: 62, rotate: 25, delay: '1.5s', duration: '11s', opacity: 0.1 },
          { top: '65%', left: '7%', size: 52, rotate: -20, delay: '3s', duration: '9.5s', opacity: 0.13 },
          { top: '78%', left: '90%', size: 45, rotate: 15, delay: '0.5s', duration: '8.5s', opacity: 0.16 },
          { top: '88%', left: '15%', size: 38, rotate: -25, delay: '2.5s', duration: '7s', opacity: 0.15 },
          { top: '35%', left: '88%', size: 42, rotate: 10, delay: '3.5s', duration: '10s', opacity: 0.11 },
          { top: '55%', left: '2%', size: 58, rotate: -5, delay: '1.2s', duration: '9s', opacity: 0.12 },
          { top: '20%', left: '45%', size: 35, rotate: 30, delay: '4s', duration: '12s', opacity: 0.14 },
        ].map((paw, i) => (
          <svg
            key={`paw-${i}`}
            viewBox="0 0 100 100"
            className="absolute"
            style={{
              top: paw.top,
              left: paw.left,
              width: `${paw.size}px`,
              height: `${paw.size}px`,
              opacity: paw.opacity,
              animation: `floatAndRotate ${paw.duration} ease-in-out ${paw.delay} infinite`,
              transform: `rotate(${paw.rotate}deg)`,
            }}
            fill="#6B3A5E"
          >
            <ellipse cx="30" cy="18" rx="10" ry="12" />
            <ellipse cx="55" cy="12" rx="10" ry="12" />
            <ellipse cx="77" cy="22" rx="10" ry="12" />
            <ellipse cx="15" cy="38" rx="9" ry="11" />
            <ellipse cx="50" cy="68" rx="28" ry="26" />
          </svg>
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '15%', left: '20%', size: 28, delay: '0s', duration: '6s' },
          { top: '40%', left: '80%', size: 22, delay: '2s', duration: '7s' },
          { top: '70%', left: '25%', size: 32, delay: '1s', duration: '8s' },
          { top: '85%', left: '75%', size: 26, delay: '3s', duration: '6.5s' },
          { top: '30%', left: '60%', size: 24, delay: '4s', duration: '7.5s' },
        ].map((heart, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-pink-400/30"
            style={{
              top: heart.top,
              left: heart.left,
              fontSize: `${heart.size}px`,
              animation: `floatHeart ${heart.duration} ease-in-out ${heart.delay} infinite`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Floating Bones */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '25%', left: '70%', size: 24, rotate: 45, delay: '0.5s', duration: '9s' },
          { top: '60%', left: '15%', size: 30, rotate: -30, delay: '2.5s', duration: '8s' },
          { top: '80%', left: '85%', size: 26, rotate: 15, delay: '1.5s', duration: '10s' },
          { top: '45%', left: '40%', size: 20, rotate: -15, delay: '3.5s', duration: '7s' },
        ].map((bone, i) => (
          <div
            key={`bone-${i}`}
            className="absolute text-[#609919]/25"
            style={{
              top: bone.top,
              left: bone.left,
              fontSize: `${bone.size}px`,
              transform: `rotate(${bone.rotate}deg)`,
              animation: `floatBone ${bone.duration} ease-in-out ${bone.delay} infinite`,
            }}
          >
            🦴
          </div>
        ))}
      </div>

      {/* Organic Blob Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '-10%', left: '-5%', size: 300, color: 'rgba(96,153,25,0.08)', delay: '0s', duration: '20s' },
          { top: '60%', left: '-8%', size: 250, color: 'rgba(107,58,94,0.06)', delay: '5s', duration: '18s' },
          { top: '20%', right: '-10%', size: 280, color: 'rgba(255,202,88,0.15)', delay: '3s', duration: '22s' },
          { top: '80%', right: '-5%', size: 320, color: 'rgba(96,153,25,0.07)', delay: '7s', duration: '19s' },
        ].map((blob, i) => (
          <div
            key={`blob-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              top: blob.top,
              left: blob.left,
              right: blob.right ? blob.right : 'auto',
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              background: blob.color,
              animation: `morphBlob ${blob.duration} ease-in-out ${blob.delay} infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '10%', left: '30%', delay: '0s' },
          { top: '30%', left: '85%', delay: '1s' },
          { top: '50%', left: '20%', delay: '2s' },
          { top: '70%', left: '70%', delay: '3s' },
          { top: '90%', left: '45%', delay: '4s' },
          { top: '20%', left: '60%', delay: '5s' },
          { top: '60%', left: '50%', delay: '6s' },
          { top: '80%', left: '30%', delay: '7s' },
        ].map((sparkle, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute text-amber-300/60"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animation: `sparkle 2s ease-in-out ${sparkle.delay} infinite`,
            }}
          >
            ✨
          </div>
        ))}
      </div>


      <style>{`
        @keyframes floatAndRotate {
          0%, 100% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
          25% { transform: translateY(-15px) rotate(calc(var(--rotate, 0deg) + 5deg)); }
          50% { transform: translateY(-8px) rotate(var(--rotate, 0deg)); }
          75% { transform: translateY(-20px) rotate(calc(var(--rotate, 0deg) - 5deg)); }
        }
        @keyframes floatHeart {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-25px) scale(1.1); opacity: 0.5; }
        }
        @keyframes floatBone {
          0%, 100% { transform: translateY(0) rotate(var(--bone-rotate, 0deg)); }
          50% { transform: translateY(-30px) rotate(calc(var(--bone-rotate, 0deg) + 10deg)); }
        }
        @keyframes morphBlob {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1) rotate(0deg); }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: scale(1.1) rotate(45deg); }
          100% { border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; transform: scale(1) rotate(90deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes confetti {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slide-in { animation: slideIn 0.4s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.3s ease-out forwards; }
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .input-field {
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid rgba(107, 58, 94, 0.15);
          transition: all 0.3s ease;
        }
        .input-field:focus {
          border-color: #6B3A5E;
          box-shadow: 0 0 0 3px rgba(107, 58, 94, 0.15);
        }
        .calendar-day {
          transition: all 0.2s ease;
        }
        .calendar-day:hover:not(.disabled) {
          transform: scale(1.08);
        }
      `}</style>

      <div className="max-w-[800px] mx-auto relative z-10 px-2">
        <h2 className="text-[24px] md:text-[36px] font-black text-center mb-2 tracking-tight">
          Запазете час
        </h2>
        <p className="text-center text-[12px] md:text-[15px] text-black/70 mb-6 md:mb-10">
          Няколко стъпки до перфектната грижа за вашия любимец
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-start">
          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4 order-2 lg:order-1">
            {/* Phone Widget */}
            <div className="glass-card rounded-2xl p-4 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <a
                href="tel:+359881234567"
                className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#6B3A5E]/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:bg-[#6B3A5E]/20 group-hover:scale-110 transition-all">
                  📞
                </div>
                <div>
                  <div className="text-[10px] md:text-[11px] font-bold text-black/40 uppercase tracking-wider">Телефон</div>
                  <div className="text-[16px] md:text-[19px] font-bold text-[#6B3A5E]">+359 88 123 4567</div>
                </div>
              </a>

              <a
                href="tel:+359881234567"
                className="group w-full bg-[#6B3A5E] text-white text-[13px] md:text-[15px] font-bold py-3 md:py-4 rounded-xl shadow-[0_8px_24px_rgba(107,58,94,0.3)] hover:scale-[1.02] hover:-translate-y-1 hover:bg-[#5B2E48] hover:shadow-[0_12px_32px_rgba(91,46,72,0.4)] transition-all flex items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Обади се</span>
                  <span className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </span>
              </a>

              <div className="border-t border-black/10 pt-3 md:pt-4 space-y-2 md:space-y-3">
                {contactInfo.slice(1).map((c, i) => (
                  <div key={i} className="flex items-start gap-2 md:gap-3">
                    <span className="text-lg md:text-xl mt-0.5">{c.icon}</span>
                    <div>
                      <div className="text-[9px] md:text-[10px] font-bold text-black/40 uppercase tracking-wider">
                        {c.label}
                      </div>
                      <div className="text-[12px] md:text-[13px] font-semibold">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div className="glass-card rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.8897654321!2d23.3217!3d42.6971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzQxLjYiTiAyM8KwMTknMTguMSJF!5e0!3m2!1sbg!2sbg!4v1612345678905!5m2!1sbg!2sbg"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yellow Pet Grooming Location"
              />
            </div>
          </div>

          {/* Multi-step Booking Form */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-3 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] order-1 lg:order-2">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
              <div className={`flex items-center gap-1.5 ${step === 1 ? "text-[#6B3A5E]" : "text-black/30"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-bold transition-all ${
                  step === 1 ? "bg-[#6B3A5E] text-white shadow-lg" : "bg-black/10"
                }`}>
                  1
                </div>
                <span className="text-[13px] font-semibold">Данни</span>
              </div>
              <div className={`w-12 h-1 rounded-full transition-all ${step === 2 ? "bg-[#6B3A5E]" : "bg-black/10"}`} />
              <div className={`flex items-center gap-1.5 ${step === 2 ? "text-[#6B3A5E]" : "text-black/30"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-bold transition-all ${
                  step === 2 ? "bg-[#6B3A5E] text-white shadow-lg" : "bg-black/10"
                }`}>
                  2
                </div>
                <span className="text-[13px] font-semibold">Час</span>
              </div>
            </div>

            {step === 1 ? (
              <div className="animate-slide-in space-y-3 md:space-y-4">
                <h3 className="text-[16px] md:text-[18px] font-black mb-3 md:mb-4">Информация за резервацията</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-black/50 uppercase tracking-wider">Вашето име *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="input-field w-full rounded-xl px-3 py-2.5 text-[16px] md:text-[14px] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-black/50 uppercase tracking-wider">Телефон *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+359 88 123 4567"
                      className="input-field w-full rounded-xl px-3 py-2.5 text-[16px] md:text-[14px] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-black/50 uppercase tracking-wider">Порода на кучето *</label>
                  <input
                    type="text"
                    value={formData.breed}
                    onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                    placeholder="напр. Златист ретривър"
                    className="input-field w-full rounded-xl px-3 py-2.5 text-[16px] md:text-[14px] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-black/50 uppercase tracking-wider">Услуги *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceOptions.slice(1).map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => toggleService(option.value)}
                        className={`p-2.5 md:p-3 rounded-xl transition-all text-left relative ${
                          formData.services.includes(option.value)
                            ? "bg-[#6B3A5E] text-white shadow-lg scale-[1.02]"
                            : "bg-white/80 text-black hover:bg-white"
                        }`}
                      >
                        <div className="text-[18px] mb-0.5">
                          {option.value === "washing" && "🛁"}
                          {option.value === "grooming" && "✂️"}
                          {option.value === "nails" && "💅"}
                          {option.value === "spa" && "🎀"}
                        </div>
                        <div className="text-[12px] font-bold leading-tight pr-5">{option.label}</div>
                        {formData.services.includes(option.value) && (
                          <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#6B3A5E] text-[12px] font-bold shadow-md">
                            ✓
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  {formData.services.length > 0 && (
                    <p className="text-[11px] text-black/50 mt-1">
                      Избрани: {formData.services.length} услуг{formData.services.length === 1 ? 'а' : 'и'}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleContinue}
                  disabled={!formData.name || !formData.phone || !formData.breed || formData.services.length === 0}
                  className="group w-full bg-[#6B3A5E] text-white text-[15px] font-bold py-3 rounded-xl shadow-[0_8px_24px_rgba(107,58,94,0.3)] hover:scale-[1.02] hover:bg-[#5B2E48] hover:shadow-[0_12px_32px_rgba(91,46,72,0.4)] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  <span>Продължи</span>
                  <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </button>
              </div>
            ) : (
              <div className="animate-slide-in space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[18px] font-black">Изберете дата и час</h3>
                  <button
                    onClick={() => setStep(1)}
                    className="text-[13px] font-bold text-black/50 hover:text-black transition-colors flex items-center gap-1"
                  >
                    <span>←</span> Назад
                  </button>
                </div>

                {/* Calendar */}
                <div className="bg-white/60 rounded-2xl p-4 shadow-inner">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                      className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform text-sm"
                    >
                      ←
                    </button>
                    <div className="text-[16px] font-bold">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </div>
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                      className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform text-sm"
                    >
                      →
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1.5 mb-3">
                    {dayNames.map((day, i) => (
                      <div key={i} className="text-center text-[11px] font-bold text-black/40 py-1">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1.5">
                    {getDaysInMonth(currentMonth).map((date, i) => {
                      const isSelected = formData.selectedDate &&
                        date?.toDateString() === formData.selectedDate.toDateString();
                      const isDisabled = !date || !isDateAvailable(date);

                      return (
                        <button
                          key={i}
                          onClick={() => date && handleDateSelect(date)}
                          disabled={isDisabled}
                          className={`calendar-day aspect-square rounded-xl text-[13px] font-bold transition-all ${
                            isDisabled
                              ? "bg-transparent text-black/10 cursor-not-allowed"
                              : isSelected
                              ? "bg-[#6B3A5E] text-white shadow-lg scale-110"
                              : "bg-white/80 hover:bg-white text-black"
                          }`}
                        >
                          {date?.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                {formData.selectedDate && (
                  <div className="animate-scale-in">
                    <label className="text-[11px] font-bold text-black/50 uppercase tracking-wider mb-2 block">
                      Чasове за {formData.selectedDate.toLocaleDateString("bg-BG", { day: "numeric", month: "long" })}
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {TIME_SLOTS.map((time) => (
                        <button
                          key={time}
                          onClick={() => setFormData({ ...formData, selectedTime: time })}
                          className={`py-2.5 rounded-xl transition-all font-bold text-[13px] ${
                            formData.selectedTime === time
                              ? "bg-[#6B3A5E] text-white shadow-lg scale-105"
                              : "bg-white/80 text-black hover:bg-white"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-4 border-t border-black/10">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-xl bg-black/5 text-black text-[13px] font-bold hover:bg-black/10 transition-all"
                  >
                    ← Назад
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.selectedDate || !formData.selectedTime || isSubmitting}
                    className="group flex-1 bg-[#6B3A5E] text-white text-[15px] font-bold py-3 rounded-xl shadow-[0_8px_24px_rgba(107,58,94,0.3)] hover:scale-[1.02] hover:bg-[#5B2E48] hover:shadow-[0_12px_32px_rgba(91,46,72,0.4)] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Обработка...</span>
                    ) : (
                      <>
                        <span>Запази</span>
                        <span className="text-lg">🐾</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {submitStatus.type && (
              <div className={`mt-4 p-4 rounded-xl text-center animate-scale-in text-[13px] ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}>
                {submitStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
