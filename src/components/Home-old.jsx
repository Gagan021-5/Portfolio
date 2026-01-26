import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Icosahedron, TorusKnot, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";
import Typewriter from "react-simple-typewriter";

function AnimatedGeometric() {
  const meshRef = useRef();
  const { viewport, mouse } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Mouse interaction
      meshRef.current.position.x = mouse.x * viewport.width * 0.1;
      meshRef.current.position.y = mouse.y * viewport.height * 0.1;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 1]} scale={1.5}>
      <MeshDistortMaterial
        color="#4f46e5"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        emissive="#4f46e5"
        emissiveIntensity={0.2}
      />
    </Icosahedron>
  );
}

const Home = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const gradientTextVariants = {
    hidden: { opacity: 0, skewX: -10 },
    visible: {
      opacity: 1,
      skewX: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const words = ["Full Stack", "Creative", "Innovative", "Passionate"];

  // Split the main headline into words for staggered animation
  const headlineWords = ["I", "am", "Gagan"];

  return (
    <motion.section
      ref={containerRef}
      className="min-h-screen w-full flex justify-center items-center flex-col px-4 py-8 sm:py-12 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* 3D Canvas Container */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 75 }} 
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#4f46e5" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          <pointLight position={[0, 0, 20]} intensity={0.3} color="#8b5cf6" />
          <Suspense fallback={null}>
            <AnimatedGeometric />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={1}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          className="w-full flex flex-col items-center justify-center text-center"
          variants={itemVariants}
        >
          {/* Main Headline with staggered word reveal */}
          <motion.h1 
            className="relative z-10 mb-6"
            variants={gradientTextVariants}
          >
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          {/* Sub-headline with typewriter effect */}
          <motion.div 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-8"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              <Typewriter
                words={words}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
            <span className="text-gray-400 ml-2">Developer</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8"
            variants={itemVariants}
          >
            <motion.a
              href="https://drive.google.com/file/d/1w0h43nb40FX9A2SME_8p2GqgCsDzxOOc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto cursor-magnetic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button 
                className="relative p-4 sm:px-8 sm:py-4 w-full sm:w-auto cursor-pointer rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg overflow-hidden group shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 border border-indigo-500/20"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
                  scale: 1.05 
                }}
              >
                <span className="relative z-10">My Resume</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 rounded-full"
                  initial={{ scale: 0, x: "-50%", y: "-50%" }}
                  whileHover={{ scale: 3, opacity: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.button>
            </motion.a>

            <motion.a
              href="#contact"
              className="w-full sm:w-auto cursor-magnetic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button 
                className="relative p-4 sm:px-8 sm:py-4 w-full sm:w-auto cursor-pointer rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg overflow-hidden group shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-500/20"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
                  scale: 1.05 
                }}
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 rounded-full"
                  initial={{ scale: 0, x: "-50%", y: "-50%" }}
                  whileHover={{ scale: 3, opacity: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles effect */}
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
    </motion.section>
  );
};

export default Home;
