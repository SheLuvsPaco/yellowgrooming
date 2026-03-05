import { navLinks } from "@/lib/data";

export default function Navigation() {
  return (
    <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/40 backdrop-blur-md px-10 py-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 gap-10 font-semibold text-[18px]">
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
