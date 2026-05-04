import React, { useRef, useState, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";

function LiquidSphere() {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.4} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#4f46e5" : "#4338ca"}
          attach="material"
          distort={0.45}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
          emissive={hovered ? "#4f46e5" : "#1e1b4b"}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

const Home = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = ["Full Stack", "Creative", "Innovative", "Passionate"];
  const headlineWords = ["I", "am", "Gagan"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="min-h-screen w-full flex justify-center items-center flex-col px-4 py-8 sm:py-12 relative overflow-hidden bg-[#030712]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* 3D Background Layer - Optimized DPR */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-70"
        style={{ y, opacity }}
      >
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 45 }}
          dpr={[1, 1.5]} // Capped at 1.5 for performance
          gl={{ antialias: false }} // Disabled antialias for speed
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" />
          <directionalLight position={[-10, -10, -5]} intensity={2} color="#06b6d4" />
          <Suspense fallback={null}>
            <LiquidSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        
        <motion.div
          className="relative group mb-8 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 rounded-full bg-indigo-600 blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#030712] z-10 bg-[#030712]">
            <img
              src="https://avatars.githubusercontent.com/u/175534940?s=400&u=5ab341f9a8771411b76c9fe05fce3b3d45b737ac&v=4"
              alt="Gagan"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </div>
        </motion.div>

        <div className="space-y-4 mb-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter"
            variants={containerVariants}
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                className="bg-clip-text text-transparent bg-gradient-to-br from-white via-indigo-50 to-indigo-200 drop-shadow-sm"
                variants={itemVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            className="text-xl sm:text-2xl md:text-3xl font-medium text-indigo-200/80 font-mono tracking-wide"
            variants={itemVariants}
          >
            &lt;
            <span className="text-cyan-400">
              <Typewriter
                words={words}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
            /&gt;
            <span className="ml-2 text-gray-500">Developer</span>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-6"
          variants={itemVariants} 
        >
          <a
            href="https://drive.google.com/file/d/15-EASa1jwEteii7dFr46jd9WVzrsedyY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full bg-white text-indigo-950 font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download CV 
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
          </a>

          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg overflow-hidden transition-all hover:border-white/30 hover:bg-white/10 backdrop-blur-sm"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>
        </motion.div>

      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-[10px] tracking-[0.3em] uppercase opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-indigo-500 to-transparent relative overflow-hidden">
          <motion.div 
            className="absolute top-0 w-full h-1/2 bg-white blur-[1px]"
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

    </motion.section>
  );
};

export default Home;