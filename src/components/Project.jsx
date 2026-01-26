import React, { useState, useRef } from "react";
import { project } from "../utils/Projects";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// --- 3D Tilt Card Component ---
const ProjectCard = ({ data, index }) => {
  const ref = useRef(null);

  // Mouse tracking for spotlight effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Spring physics for smooth tilt
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  // Update rotation based on mouse position
  // Note: Motion values need to be updated in a useEffect or similar if mapping directly, 
  // but for simplicity/performance in mapping, we can just use the transform template below.
  const transformRotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const transformRotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX: transformRotateX,
        rotateY: transformRotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full group perspective-1000"
    >
      {/* Spotlight Gradient Background */}
      <div 
        className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500" 
      />
      
      <div className="relative h-full bg-[#0b1121] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-transform duration-300">
        
        {/* Image Container with Overlay */}
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img
            src={data.img}
            alt={data.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            loading="lazy"
          />
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
            <a 
              href={data.url} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-indigo-600 hover:scale-110 transition-all border border-white/20 text-white"
              title="View Live"
            >
              <FiExternalLink size={24} />
            </a>
            {/* Assuming you might want a GitHub link later, placeholder structure */}
             {/* <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gray-800 hover:scale-110 transition-all border border-white/20 text-white"><FiGithub size={24} /></a> */}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 relative bg-[#0b1121]/95 backdrop-blur-xl">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-colors">
            {data.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {data.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-auto flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-3 py-1 text-xs font-mono font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Section ---
const Project = () => {
  const [data] = useState([...project]);

  return (
    <section id="project" className="min-h-screen w-full py-20 px-4 relative overflow-hidden bg-[#030712]">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-[0.3em] text-cyan-500 uppercase mb-4"
        >
          My Portfolio
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects</span>
        </motion.h1>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 px-2 sm:px-6 relative z-10">
        {data.map((val, index) => (
          <ProjectCard key={index} data={val} index={index} />
        ))}
      </div>
      
    </section>
  );
};

// Helper for transform hooks (needed if importing form separate file, but included here for single-file copy-paste)
import { useTransform } from "framer-motion";

export default Project;