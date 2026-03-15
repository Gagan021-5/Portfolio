import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaBriefcase, FaTrophy, FaCode } from "react-icons/fa";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Creatibl Solution",
    date: "April 2025 - July 2025",
    desc: "Developed responsive and interactive user interfaces using React.js and Tailwind CSS. Optimized application performance for maximum speed.",
    icon: <FaBriefcase />,
    type: "work",
  },
  {
    title: "National Qualifier (Top 250)",
    company: "Code Clash 2.0 National Hackathon",
    date: "2025",
    desc: "Selected among in Online Round amoung Top 250 teams out of 4000+ participants nationwide. Demonstrated rapid prototyping skills.",
    icon: <FaTrophy />,
    type: "hackathon",
  },

  {
    title: "SIH 2025 Shortlisted",
    company: "Smart India Hackathon",
    date: "2025",
    desc: "Cleared internal college round and shortlisted to top 45 teams for the next stage of SIH 2025.",
    icon: <FaTrophy />,
    type: "hackathon",
  },
 {
    title: "Winner (1st Prize)",
    company: "Praxis 2.0 AI/ML Hackathon",
    date: "2026",
    desc: "Secured the top position among 400+ teams in a nationwide online hackathon.",
    icon: <FaTrophy />, 
    type: "hackathon",
  },
];

const Experience = () => {
  const containerRef = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the progress bar animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="py-20 relative min-h-screen overflow-hidden bg-[#030712]"
    >
      {/* --- Premium Background Effects --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-20" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* --- Content --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-500 uppercase mb-3">
          My Journey
        </h2>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 drop-shadow-sm">
          Experience & <br /> Achievements
        </h2>
      </motion.div>

      <div ref={containerRef} className="max-w-5xl mx-auto px-4 relative z-10">
        {/* --- THE JOURNEY LINES --- */}

        {/* 1. Base Static Line (Faint Track) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 transform md:-translate-x-1/2" />

        {/* 2. Animated Progress Line (Glowing) */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.6)] z-0"
        />

        <div className="space-y-12 pt-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
              className={`relative flex items-center justify-between md:justify-normal ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot (Lights up when in view) */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#030712] border-2 border-indigo-500 rounded-full transform -translate-x-1/2 md:translate-x-[-50%] z-20 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute inset-0 bg-indigo-400 rounded-full"
                />
              </div>

              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <motion.div
                  className="p-6 rounded-2xl bg-[#0b1121]/80 backdrop-blur-md border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-lg group hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl text-cyan-400 bg-cyan-900/20 p-2 rounded-lg">
                        {exp.icon}
                      </span>
                      <span className="text-xs font-mono tracking-widest text-indigo-300/80 uppercase">
                        {exp.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400 mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-400/80 text-sm leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
