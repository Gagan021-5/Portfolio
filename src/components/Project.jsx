import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { project } from "../utils/Projects";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const Project = () => {
  const [activeProject, setActiveProject] = useState(project[0]);
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section id="project" className="w-full bg-[#F8F7F4] text-[#0A0A0A] py-24 sm:py-32 px-6 sm:px-10 lg:px-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-black/10">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[#0A0A0A] leading-[0.9]">
            projects
          </h2>
        </div>

        {/* Main Grid: Editorial List (Left) + Interactive Floating Preview Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Numbered Editorial Projects List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/10 border-t border-black/10">
            {project.map((item, index) => {
              const isSelected = hoveredIdx === index;
              const formattedNum = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setHoveredIdx(index);
                    setActiveProject(item);
                  }}
                  className={`py-8 sm:py-10 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group cursor-pointer ${
                    isSelected ? "opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-sm sm:text-base font-mono text-black/40 mt-1">
                      {formattedNum}
                    </span>

                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0A0A0A] group-hover:text-[#F4A836] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-black/60 max-w-md mt-2 line-clamp-2 leading-relaxed font-normal">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.skills.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono font-semibold text-black/60 bg-black/[0.04] px-2.5 py-0.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean Pill Button (like 'Buy Ticket' pill button in reference image) */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start sm:self-center shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/25 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] bg-white group-hover:bg-[#0A0A0A] group-hover:text-white group-hover:border-[#0A0A0A] transition-all duration-300 shadow-sm"
                  >
                    <span>View Project</span>
                    <FiArrowUpRight className="text-sm" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Right Column: Floating Golden-Accent Preview Card (Image 2 Mockup Style) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-[2.5rem] bg-[#F4A836] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(244,168,54,0.35)] overflow-hidden">
              
              {/* Header inside preview card */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0A0A0A] bg-white/90 px-3 py-1 rounded-full shadow-sm">
                  Active Showcase
                </span>

                <a
                  href={activeProject?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                >
                  <FiExternalLink />
                </a>
              </div>

              {/* Dynamic Image Container */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/10 border-2 border-white/60 shadow-lg mb-6">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProject?.title}
                    src={activeProject?.img}
                    alt={activeProject?.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatePresence>
              </div>

              {/* Card Meta Details */}
              <div className="relative z-10 text-[#0A0A0A]">
                <h4 className="text-2xl font-black tracking-tight mb-2">
                  {activeProject?.title}
                </h4>
                <p className="text-xs sm:text-sm text-black/80 line-clamp-3 leading-relaxed mb-4">
                  {activeProject?.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {activeProject?.skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/10 text-[#0A0A0A]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Project;