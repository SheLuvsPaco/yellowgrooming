'use client';

import { floatingPaws } from "@/lib/data";

export default function FloatingPaws() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {floatingPaws.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 100 100"
          fill="black"
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.op,
            animation: `${p.anim} ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        >
          <ellipse cx="30" cy="18" rx="10" ry="12" />
          <ellipse cx="55" cy="12" rx="10" ry="12" />
          <ellipse cx="77" cy="22" rx="10" ry="12" />
          <ellipse cx="15" cy="38" rx="9" ry="11" />
          <ellipse cx="50" cy="68" rx="28" ry="26" />
        </svg>
      ))}
    </div>
  );
}
