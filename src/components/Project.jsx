import React, { useState, useRef } from "react";
import { project } from "../utils/Projects";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

// --- Filter categories derived from skills ---
const categories = ["All", "Full Stack", "AI / ML", "Frontend"];

function getCategory(skills) {
  const s = skills.map((sk) => sk.toLowerCase());
  if (
    s.some(
      (sk) =>
        sk.includes("gemini") ||
        sk.includes("groq") ||
        sk.includes("langchain") ||
        sk.includes("rag") ||
        sk.includes("scikit") ||
        sk.includes("tavily")
    )
  )
    return "AI / ML";
  if (
    s.some(
      (sk) =>
        sk.includes("node") ||
        sk.includes("express") ||
        sk.includes("mongo") ||
        sk.includes("firebase") ||
        sk.includes("flask")
    )
  )
    return "Full Stack";
  return "Frontend";
}

// --- Magnetic Spotlight Project Card ---
const ProjectCard = ({ data, index }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), {
    stiffness: 200,
    damping: 25,
  });

  // Radial spotlight gradient
  const spotlightX = useTransform(mouseX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(mouseY, (v) => `${v * 100}%`);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full group"
    >
      {/* Outer glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-25 blur-sm transition-opacity duration-500" />

      <div className="relative h-full bg-[#0b1121] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl group-hover:border-white/20 transition-colors duration-300">
        {/* Magnetic spotlight overlay */}
        <motion.div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{
            background: useMotionValue(
              `radial-gradient(600px circle at 50% 50%, rgba(99,102,241,0.08), transparent 40%)`
            ),
          }}
        />

        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={data.img}
            alt={data.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            loading="lazy"
          />
          {/* Gradient fade at bottom of image */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1121] to-transparent" />

          {/* Overlay actions */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-indigo-600 hover:scale-105 transition-all border border-white/20 text-white text-sm font-medium flex items-center gap-2"
              title="View Live"
            >
              <FiExternalLink size={16} />
              View Project
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
            {data.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
            {data.description}
          </p>

          {/* Tech pills */}
          <div className="mt-auto flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[10px] font-mono font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-md uppercase tracking-wider"
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

// --- Featured Hero Card (first project) ---
const FeaturedCard = ({ data }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full group mb-6"
    >
      {/* Border glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-500" />

      <div className="relative bg-[#0b1121]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image side */}
          <div className="relative h-64 md:h-auto min-h-[320px] overflow-hidden">
            <img
              src={data.img}
              alt={data.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0b1121]/80 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] to-transparent md:hidden" />

            {/* Featured badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-indigo-600/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-indigo-400/30 shadow-lg">
              ⭐ Featured
            </div>
          </div>

          {/* Content side */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              {data.title}
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              {data.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {data.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-mono font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4">
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="group/btn flex items-center gap-2 px-6 py-3 bg-white text-indigo-950 font-bold text-sm rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                View Live
                <FiExternalLink
                  size={14}
                  className="group-hover/btn:translate-x-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Section ---
const Project = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const allProjects = [...project];
  const featured = allProjects[0];
  const rest = allProjects.slice(1);

  const filtered =
    activeFilter === "All"
      ? rest
      : rest.filter((p) => getCategory(p.skills) === activeFilter);

  const visible = showAll ? filtered : filtered.slice(0, 5);

  return (
    <section
      id="project"
      className="min-h-screen w-full py-20 px-4 relative overflow-hidden bg-[#030712]"
    >
      {/* Background ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center relative z-10">
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
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Projects
          </span>
        </motion.h1>
      </div>

      {/* Featured Hero */}
      <div className="max-w-7xl mx-auto relative z-10 px-2 sm:px-6">
        <FeaturedCard data={featured} />
      </div>

      {/* Filter Chips */}
      <motion.div
        className="max-w-7xl mx-auto relative z-10 flex flex-wrap justify-center gap-3 mb-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => {
              setActiveFilter(cat);
              setShowAll(false);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer ${
              activeFilter === cat
                ? "bg-indigo-600/30 border-indigo-500/50 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 relative z-10">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((val, index) => (
              <ProjectCard key={val.title} data={val} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Less */}
        {filtered.length > 5 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 text-sm font-medium transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>
                  Show Less <FiChevronUp size={16} />
                </>
              ) : (
                <>
                  Show All Projects <FiChevronDown size={16} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Project;