import React from "react";
import { motion } from "framer-motion";
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
    title: "Online Round Qualifier",
    company: "Code Veda Hackathon",
    date: "2025",
    desc: "Qualified for the online round among 6000+ participants, showcasing strong problem-solving skills.",
    icon: <FaCode />,
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
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
              x: [null, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-cyan-200">
          Experience & <br /> Achievements
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring" }}
              className={`relative flex items-center justify-between md:justify-normal ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-[3px] border-[#030712] shadow-[0_0_15px_rgba(99,102,241,0.5)] transform -translate-x-1/2 md:translate-x-[-50%]" />

              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <motion.div 
                  className="p-6 rounded-2xl bg-[#0f1236]/60 backdrop-blur-xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 shadow-xl group hover:shadow-[0_0_30px_rgba(79,70,229,0.2)]"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="flex items-center gap-3 mb-2 text-indigo-400">
                    <span className="text-xl">{exp.icon}</span>
                    <span className="text-sm font-mono tracking-wider opacity-80">{exp.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-400 mb-3">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
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
