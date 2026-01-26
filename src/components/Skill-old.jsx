import React from "react";
import { motion } from "framer-motion";
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
const Skill = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      boxShadow: "0 15px 30px -5px rgba(99, 102, 241, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="skills"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl pb-6 sm:pb-8 text-center font-bold text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text"
        variants={containerVariants}
      >
        Skills
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl mt-8 cursor-pointer"
        variants={containerVariants}
      >
        <motion.div
          className="p-6 backdrop-blur-md rounded-2xl shadow-lg bg-gradient-to-b from-[#14184b]/90 to-[#0f1236]/90 border border-transparent hover:border-indigo-400/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300"
          variants={cardVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <h2 className="text-2xl font-semibold text-center text-indigo-400 mb-4">
            Frontend
          </h2>
          <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
            {[htmlsvg, csssvg, jssvg, reactsvg, tailwindsvg, nextjs].map(
              (icon, i) => (
                <motion.img
                  key={i}
                  src={icon}
                  alt="Frontend Skill"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-23 md:h-23 cursor-pointer"
                  variants={iconVariants}
                  whileHover="hover"
                />
              )
            )}
          </div>
        </motion.div>

        <motion.div
          className="p-6 backdrop-blur-md rounded-2xl shadow-lg bg-gradient-to-b from-[#14184b]/90 to-[#0f1236]/90 border border-transparent hover:border-indigo-400/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300"
          variants={cardVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <h2 className="text-2xl font-semibold text-center text-cyan-500 mb-4 ">
            Programming
          </h2>
          <div className="flex flex-wrap justify-center gap-4 cursor-pointer ">
            {[pythonsvg, csvg, javsvg].map((icon, i) => (
              <motion.img
                key={i}
                src={icon}
                alt="Programming Skill"
                className="w-16 h-16 sm:w-20 sm:h-20  md:w-23 md:h-23 cursor-pointer"
                variants={iconVariants}
                whileHover="hover"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="p-6 backdrop-blur-md rounded-2xl shadow-lg bg-gradient-to-b from-[#14184b]/90 to-[#0f1236]/90 border border-transparent hover:border-indigo-400/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300"
          variants={cardVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <h2 className="text-2xl font-semibold text-center text-blue-400 mb-4">
            Backend & Databases
          </h2>
          <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
            {[
              nodesvg,
              expressvg,
              postsqlsvg,
              mongodbsvg,
              firebasesvg,
              flask,
              Fastapi,
            ].map((icon, i) => (
              <motion.img
                key={i}
                src={icon}
                alt="Backend Skill"
                className="w-16 h-16 sm:w-20 sm:h-20  md:w-23 md:h-23 cursor-pointer"
                variants={iconVariants}
                whileHover="hover"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="p-6 backdrop-blur-md rounded-2xl shadow-lg bg-gradient-to-b from-[#14184b]/90 to-[#0f1236]/90 border border-transparent hover:border-indigo-400/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-center text-violet-400 mb-4">
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
            {[git, githubsvg,vscode, jupyter , figma].map((icon, i) => (
              <motion.img
                key={i}
                src={icon}
                alt="Tools & Tech"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-23 md:h-23 cursor-pointer"
                variants={iconVariants}
                whileHover="hover"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skill;
