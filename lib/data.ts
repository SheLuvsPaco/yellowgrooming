// Service data extracted from Frame.tsx
export const services = [
  {
    num: "01",
    icon: "🛁",
    title: "Миене и сушене",
    desc: "Нежно миене с висококачествена козметика и сушене с вентилатор.",
    accent: "from-black/50 to-black/20",
    bg: "/images/dogshower-new.jpg",
  },
  {
    num: "02",
    icon: "✂️",
    title: "Подстригване",
    desc: "Стилно подстригване по предпочитан модел или по стандарт на породата.",
    accent: "from-black/50 to-black/20",
    bg: "/images/grooming.jpg",
  },
  {
    num: "03",
    icon: "💅",
    title: "Ноктопочистване",
    desc: "Внимателно рязане и полиране на ноктите за комфортно ходене.",
    accent: "from-black/50 to-black/20",
    bg: "/images/nails.jpg",
  },
  {
    num: "04",
    icon: "🎀",
    title: "СПА пакет",
    desc: "Маски, масаж и ароматерапия — луксозна грижа от глава до опашка.",
    accent: "from-black/50 to-black/20",
    bg: "/images/spa.jpg",
  },
];

// Pricing tiers extracted from Frame.tsx
export const pricingTiers = [
  {
    tier: "Малък",
    emoji: "🐹",
    subtitle: "до 5 кг",
    price: "25",
    priceLabel: "от 25 €",
    services: [
      "Миене + сушене",
      "Подстригване — 35 €",
      "Ноктопочистване — 10 €",
      "СПА пакет — 55 €",
    ],
    highlight: false,
  },
  {
    tier: "Среден",
    emoji: "🐕",
    subtitle: "5–15 кг",
    price: "35",
    priceLabel: "от 35 €",
    services: [
      "Миене + сушене",
      "Подстригване — 50 €",
      "Ноктопочистване — 12 €",
      "СПА пакет — 75 €",
    ],
    highlight: true,
  },
  {
    tier: "Голям",
    emoji: "🦮",
    subtitle: "над 15 кг",
    price: "50",
    priceLabel: "от 50 €",
    services: [
      "Миене + сушене",
      "Подстригване — 70 €",
      "Ноктопочистване — 15 €",
      "СПА пакет — 100 €",
    ],
    highlight: false,
  },
];

// Contact info extracted from Frame.tsx
export const contactInfo = [
  { icon: "📍", label: "Адрес", value: "ул. Пример 12, София" },
  { icon: "📞", label: "Телефон", value: "+359 88 123 4567" },
  { icon: "📧", label: "Имейл", value: "info@polinatsvetkova.bg" },
  { icon: "🕐", label: "Работно време", value: "Пон–Съб: 9:00–19:00" },
];

// Navigation links
export const navLinks = [
  ["Услуги", "#услуги"],
  ["Цени", "#цени"],
  ["Галерия", "#галерия"],
  ["Контакти", "#контакти"],
] as const;

// Floating paw animations data for hero section
export const floatingPaws = [
  { top: "8%", left: "28%", size: 71, anim: "float1", dur: "4.2s", delay: "0s", op: 0.135 },
  { top: "22%", left: "52%", size: 56, anim: "float2", dur: "5.8s", delay: "0.8s", op: 0.115 },
  { top: "6%", left: "68%", size: 64, anim: "float3", dur: "3.9s", delay: "1.5s", op: 0.105 },
  { top: "42%", left: "80%", size: 79, anim: "float4", dur: "6.2s", delay: "0.3s", op: 0.125 },
  { top: "60%", left: "88%", size: 52, anim: "float5", dur: "4.7s", delay: "2.1s", op: 0.105 },
  { top: "35%", left: "38%", size: 46, anim: "float6", dur: "5.1s", delay: "1.0s", op: 0.115 },
  { top: "70%", left: "20%", size: 60, anim: "float3", dur: "4.5s", delay: "0.5s", op: 0.095 },
  { top: "15%", left: "82%", size: 48, anim: "float1", dur: "6.0s", delay: "1.8s", op: 0.105 },
  { top: "50%", left: "60%", size: 38, anim: "float5", dur: "4.0s", delay: "3.0s", op: 0.085 },
  { top: "80%", left: "45%", size: 66, anim: "float2", dur: "5.4s", delay: "0.2s", op: 0.105 },
  { top: "30%", left: "10%", size: 54, anim: "float4", dur: "4.9s", delay: "2.5s", op: 0.095 },
  { top: "5%", left: "44%", size: 44, anim: "float6", dur: "5.6s", delay: "0.6s", op: 0.095 },
  { top: "55%", left: "30%", size: 73, anim: "float2", dur: "4.3s", delay: "1.2s", op: 0.105 },
  { top: "18%", left: "18%", size: 58, anim: "float5", dur: "6.4s", delay: "2.8s", op: 0.085 },
  { top: "12%", left: "95%", size: 56, anim: "float2", dur: "5.9s", delay: "2.0s", op: 0.105 },
  { top: "65%", left: "50%", size: 48, anim: "float1", dur: "4.6s", delay: "1.3s", op: 0.095 },
];

// Hero polaroid images
export const heroPolaroids = [
  { img: "/images/dog for small galery.jpg", left: "0px", rotate: "-8deg", z: 10, name: "Рекс" },
  { img: "/images/dog for small galery1.jpg", left: "90px", rotate: "3deg", z: 20, name: "Буся" },
  { img: "/images/dogs for small galary.jpg", left: "180px", rotate: "11deg", z: 15, name: "Приятели" },
];

// Gallery story chapters
export const galleryChapters = {
  chapter1: {
    img: "/images/lovely-pet-portrait-isolated.jpg",
    alt: "Пристигане",
    chapterLabel: "Глава 01",
    title: "Добре дошъл,<br />приятелю 🐾",
  },
  chapter2: {
    images: [
      {
        img: "/images/washing-pet-dog-home.jpg",
        alt: "Миене",
        chapterLabel: "Глава 02",
        title: "Нежното миене",
        subtitle: "Топла вода, любов и аромат на чистота.",
      },
      {
        img: "/images/washing-pet-dog-home (1).jpg",
        alt: "Миене 2",
        chapterLabel: "Продължение",
        title: "Грижа за козината",
        subtitle: "Всяка нишка — лъскава и мека.",
      },
    ],
  },
  chapter3: {
    images: [
      {
        img: "/images/haircuting-process-small-dog-sits-table-dog-with-professional.jpg",
        alt: "Подстригване",
        chapterLabel: "Глава 03",
        title: "Изкуството<br />на подстригването",
        subtitle: "Опитни ръце, прецизни движения — стилинг по мярка.",
        wide: true,
      },
      {
        img: "/images/haircuting-process-small-dog-sits-table-dog-with-professional (1).jpg",
        alt: "Подстригване 2",
        chapterLabel: "Детайлите",
        title: "Всеки милиметър<br />има значение",
      },
    ],
  },
  chapter4: {
    images: [
      {
        img: "/images/shaving-process-small-dog-sits-table-dog-shaved-by-professional.jpg",
        alt: "Бръснене",
        chapterLabel: "Глава 04",
        title: "Завършващ щрих",
      },
      {
        img: "/images/woman-shears-dog-dog-sitting-couch-breed-yorkshire-terrier.jpg",
        alt: "Стайлинг",
        title: "Стайлинг у дома",
        subtitle: "Релаксиращ и уютен.",
      },
      {
        img: "/images/closeup-shot-cute-fluffy-border-collie-puppies.jpg",
        alt: "Малки кученца",
        title: "Дори за малките 🐶",
        subtitle: "Грижа от ден едно.",
      },
    ],
  },
  chapter4b: {
    images: [
      {
        img: "/images/dogshower-new.jpg",
        alt: "Спа момент",
        chapterLabel: "Глава 05",
        title: "СПА моментът 🍊",
        subtitle: "Ароматерапия и релакс.",
        wide: true,
      },
      {
        img: "/images/spa.jpg",
        alt: "Пълен релакс",
        chapterLabel: "Продължение",
        title: "Пълен релакс",
      },
    ],
  },
  chapter4c: {
    images: [
      {
        img: "/images/dogshower.jpg",
        alt: "Мехурчета",
        chapterLabel: "Глава 06",
        title: "Мехурчета и усмивки",
        subtitle: "Банята е забавление!",
      },
      {
        img: "/images/nails.jpg",
        alt: "Маникюр",
        title: "Нежен маникюр 💅",
        subtitle: "Прецизно и безболезнено.",
      },
      {
        img: "/images/grooming.jpg",
        alt: "Финален стайлинг",
        title: "Финален стайлинг ✂️",
        subtitle: "Готов за подиума.",
      },
    ],
  },
  chapter5: {
    img: "/images/close-up-owner-holding-dog-with-bow.jpg",
    alt: "Финалът",
    chapterLabel: "Финален акорд",
    title: "Готови за<br />целия свят ✨",
    subtitle: "Щастлив любимец, щастлив стопанин.",
    hasLink: true,
  },
};

// Service options for contact form
export const serviceOptions = [
  { value: "", label: "Изберете услуга" },
  { value: "washing", label: "Миене и сушене" },
  { value: "grooming", label: "Подстригване" },
  { value: "nails", label: "Ноктопочистване" },
  { value: "spa", label: "СПА пакет" },
  { value: "anti-parasite", label: "Антипаразитна грижа" },
];
