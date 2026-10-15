import React from "react";

export default function Marquee({ text, inverted = false, speed = 25 }) {
  // Repeat the text block to ensure continuous infinite looping
  const items = Array(8).fill(text);

  return (
    <div
      className={`w-full overflow-hidden select-none py-4 sm:py-6 border-y ${
        inverted
          ? "bg-[#0A0A0A] text-[#F8F7F4] border-white/10"
          : "bg-[#F8F7F4] text-[#0A0A0A] border-black/10"
      }`}
    >
      <div className="flex w-max animate-marquee">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter px-6 sm:px-8 inline-flex items-center gap-6 sm:gap-8 opacity-90 hover:opacity-100 transition-opacity"
          >
            <span>{item}</span>
            <span className="inline-block w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#F4A836]" />
          </span>
        ))}
      </div>
    </div>
  );
}
