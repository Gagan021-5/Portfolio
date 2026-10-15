import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Asset Imports
import htmlsvg from "../assets/html-5-svgrepo-com.svg";
import csssvg from "../assets/css-svgrepo-com.svg";
import jssvg from "../assets/javascript-svgrepo-com.svg";
import reactsvg from "../assets/react-svgrepo-com.svg";
import tailwindsvg from "../assets/tailwind-svgrepo-com.svg";
import nodesvg from "../assets/nodejs-icon-svgrepo-com.svg";
import expressvg from "../assets/express-svgrepo-com.svg";
import postsqlsvg from "../assets/postgresql-svgrepo-com.svg";
import mongodbsvg from "../assets/mongo-svgrepo-com.svg";
import firebasesvg from "../assets/firebase-svgrepo-com.svg";
import githubsvg from "../assets/github-142-svgrepo-com.svg";
import pythonsvg from "../assets/python-svgrepo-com.svg";
import csvg from "../assets/c++.svg";
import javsvg from "../assets/java-svgrepo-com.svg";
import jupyter from "../assets/jupyter-svgrepo-com.svg";
import figma from "../assets/figma-svgrepo-com.svg";
import nextjs from "../assets/nextjs-fill-svgrepo-com.svg";
import git from "../assets/git-svgrepo-com.svg";
import flask from "../assets/Flask.svg";
import vscode from "../assets/vscode.svg";
import Fastapi from "../assets/FastAPI.svg";

const skillsData = [
  { name: "React", icon: reactsvg, category: "Frontend" },
  { name: "Next.js", icon: nextjs, category: "Frontend" },
  { name: "JavaScript", icon: jssvg, category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwindsvg, category: "Frontend" },
  { name: "HTML5", icon: htmlsvg, category: "Frontend" },
  { name: "CSS3", icon: csssvg, category: "Frontend" },

  { name: "Node.js", icon: nodesvg, category: "Backend" },
  { name: "Express.js", icon: expressvg, category: "Backend" },
  { name: "FastAPI", icon: Fastapi, category: "Backend" },
  { name: "Flask", icon: flask, category: "Backend" },

  { name: "PostgreSQL", icon: postsqlsvg, category: "Database" },
  { name: "MongoDB", icon: mongodbsvg, category: "Database" },
  { name: "Firebase", icon: firebasesvg, category: "Database" },

  { name: "Python", icon: pythonsvg, category: "Languages & Tools" },
  { name: "C++", icon: csvg, category: "Languages & Tools" },
  { name: "Java", icon: javsvg, category: "Languages & Tools" },
  { name: "Git", icon: git, category: "Languages & Tools" },
  { name: "GitHub", icon: githubsvg, category: "Languages & Tools" },
  { name: "VS Code", icon: vscode, category: "Languages & Tools" },
  { name: "Jupyter", icon: jupyter, category: "Languages & Tools" },
  { name: "Figma", icon: figma, category: "Languages & Tools" },
];

const categories = [
  { id: "All", label: "All Tech" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "Database", label: "Database" },
  { id: "Languages & Tools", label: "Tools" },
];

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skillsData;
    return skillsData.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="w-full bg-[#F8F7F4] text-[#0A0A0A] py-24 sm:py-32 px-6 sm:px-10 lg:px-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/10">
          <div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[#0A0A0A] leading-[0.9]">
              skills
            </h2>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0A0A0A] text-white shadow-sm"
                      : "border border-black/15 text-black/70 hover:border-black hover:text-[#0A0A0A] bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Editorial Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white border border-black/10 hover:border-[#F4A836] hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default"
              >
                <div className="w-12 h-12 mb-3 rounded-xl bg-[#F8F7F4] flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-sm font-bold text-[#0A0A0A] tracking-tight group-hover:text-[#F4A836] transition-colors">
                  {skill.name}
                </h3>

                <span className="text-[10px] font-mono text-black/40 mt-1 uppercase">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skill;