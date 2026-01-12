import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 12px 24px -6px rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: {
      scale: 0.95,
    },
  };

  const gradientTextVariants = {
    hidden: { opacity: 0, skewX: -10 },
    visible: {
      opacity: 1,
      skewX: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen w-full flex justify-center items-center flex-col px-4 py-8 sm:py-12 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="rounded-full h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 bg-gradient-to-br from-blue-600 to-cyan-500 overflow-hidden border-2 border-indigo-400/50"
        variants={imageHoverVariants}
        whileHover="hover"
      >
        <motion.img
          src="https://avatars.githubusercontent.com/u/175534940?s=400&u=5ab341f9a8771411b76c9fe05fce3b3d45b737ac&v=4"
          alt="Gagan's Profile"
          className="object-cover rounded-full h-full w-full cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </motion.div>

      <motion.div
        className="w-full pt-6 sm:pt-8 flex items-center justify-center flex-col relative"
        variants={itemVariants}
      >
        <motion.h1 className="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-4xl sm:text-5xl font-bold text-transparent leading-tight text-center">
          I am{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Gagan
          </span>{" "}
          <br />
          Full Stack Web Developer
        </motion.h1>

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={150}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          particleColor="#FFFFFF"
        />
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8"
        variants={itemVariants}
      >
        <motion.a
          href="https://drive.google.com/file/d/1w0h43nb40FX9A2SME_8p2GqgCsDzxOOc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.button className="relative p-3 sm:px-6 sm:py-3 w-full sm:w-auto cursor-pointer rounded-full bg-gradient-to-r from-indigo-700 to-blue-600 text-white font-semibold overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="relative z-10 text-base sm:text-lg">
              My Resume
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-700 opacity-0 group-hover:opacity-100 rounded-full"
              initial={{ scale: 0, x: "-50%", y: "-50%" }}
              whileHover={{ scale: 3, opacity: 0.7 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.button>
        </motion.a>

        <motion.a
          href="#contact"
          className="w-full sm:w-auto"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.button className="relative p-3 sm:px-6 sm:py-3 w-full sm:w-auto cursor-pointer rounded-full bg-gradient-to-r from-blue-700 to-cyan-800 text-white font-semibold overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="relative z-10 text-base sm:text-lg">
              Get in Touch
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-600 opacity-0 group-hover:opacity-100 rounded-full"
              initial={{ scale: 0, x: "-50%", y: "-50%" }}
              whileHover={{ scale: 3, opacity: 0.7 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.button>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Home;
