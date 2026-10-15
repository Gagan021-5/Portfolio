import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiAward } from "react-icons/fi";

const achievements = [
  {
    title: "Winner (1st Prize)",
    organization: "Praxis 2.0 AI/ML Hackathon",
    year: "2026",
    description: "Won 1st place out of 400+ teams in a national AI hackathon.",
    stat: "1st",
    statLabel: "Among 400+ Teams",
    rank: "1st",
  },
  {
    title: "National Space Hackathon Finalist",
    organization: "Organized by IIT Delhi",
    year: "2026",
    description: "Placed in the top 10 out of 750+ teams at the IIT Delhi national space hackathon.",
    stat: "Top 10",
    statLabel: "Among 750+ Teams",
    rank: "Top 10",
  },
  {
    title: "SIH 2025 Shortlisted",
    organization: "Smart India Hackathon",
    year: "2025",
    description: "Selected in the top 45 national teams in Smart India Hackathon.",
    stat: "Top 45",
    statLabel: "Teams Selected",
    rank: "Top 45",
  },
];

const Achievement = () => {
  return (
    <section id="achievements" className="w-full bg-[#F8F7F4] text-[#0A0A0A] py-24 sm:py-32 px-6 sm:px-10 lg:px-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-black/10">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[#0A0A0A] leading-[0.9]">
            achievements
          </h2>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 hover:border-[#F4A836] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-[#F4A836] font-bold tracking-widest uppercase">
                    [{item.year}]
                  </span>
                  <div className="w-10 h-10 rounded-full border border-black/10 bg-[#F8F7F4] flex items-center justify-center text-[#0A0A0A] text-lg group-hover:bg-[#F4A836] group-hover:text-black group-hover:border-[#F4A836] transition-colors">
                    <FiAward />
                  </div>
                </div>

                <div className="text-5xl sm:text-6xl font-black text-[#0A0A0A] tracking-tight mb-2">
                  {item.stat}
                </div>
                <div className="text-xs font-mono text-[#F4A836] font-bold uppercase tracking-wider mb-6">
                  {item.statLabel}
                </div>

                <h3 className="text-2xl font-bold text-[#0A0A0A] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-mono text-black/50 mb-4">
                  {item.organization}
                </p>
                <p className="text-sm text-black/70 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievement;
