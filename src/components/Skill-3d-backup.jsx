import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, OrbitControls, Image, Billboard } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

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

const skills = [
  { name: "HTML", icon: htmlsvg, color: "#E34C26" },
  { name: "CSS", icon: csssvg, color: "#1572B6" },
  { name: "JavaScript", icon: jssvg, color: "#F7DF1E" },
  { name: "React", icon: reactsvg, color: "#61DAFB" },
  { name: "Tailwind", icon: tailwindsvg, color: "#06B6D4" },
  { name: "Next.js", icon: nextjs, color: "#ffffff" },
  { name: "Python", icon: pythonsvg, color: "#3776AB" },
  { name: "C++", icon: csvg, color: "#00599C" },
  { name: "Java", icon: javsvg, color: "#007396" },
  { name: "Node.js", icon: nodesvg, color: "#339933" },
  { name: "Express", icon: expressvg, color: "#ffffff" },
  { name: "PostgreSQL", icon: postsqlsvg, color: "#336791" },
  { name: "MongoDB", icon: mongodbsvg, color: "#47A248" },
  { name: "Firebase", icon: firebasesvg, color: "#FFCA28" },
  { name: "Flask", icon: flask, color: "#ffffff" },
  { name: "FastAPI", icon: Fastapi, color: "#009688" },
  { name: "Git", icon: git, color: "#F05032" },
  { name: "GitHub", icon: githubsvg, color: "#ffffff" },
  { name: "VSCode", icon: vscode, color: "#007ACC" },
  { name: "Jupyter", icon: jupyter, color: "#F37626" },
  { name: "Figma", icon: figma, color: "#F24E1E" },
];

/**
 * Individual Floating Skill Icon (3D)
 */
function SkillIcon({ skill, position }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      // Subtle "breathing" animation
      const t = state.clock.elapsedTime;
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.1;
    }
  });

  return (
    <group position={position} ref={ref}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Billboard
          follow={true}
          lockX={false}
          lockY={false}
          lockZ={false} 
        >
          <mesh
            onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true); }}
            onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false); }}
            scale={hovered ? 1.25 : 1}
          >
            {/* The Icon Image */}
            <Image 
              url={skill.icon} 
              transparent 
              scale={[1.2, 1.2]} 
              opacity={hovered ? 1 : 0.85}
              color={hovered ? "#ffffff" : "#cccccc"} // Tint slightly grey when not hovered
            />
            
            {/* The Text Label (Visible on Hover or always slightly visible) */}
            <Text
              position={[0, -0.9, 0]}
              fontSize={0.25}
              color={hovered ? "#61dafb" : "white"}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#000000"
            >
              {skill.name}
            </Text>
          </mesh>
        </Billboard>
      </Float>
    </group>
  );
}

/**
 * The Sphere Cloud of Icons
 */
function SkillCloud() {
  const positions = useMemo(() => {
    const pos = [];
    const count = skills.length;
    // Fibonacci Sphere Distribution
    const phi = Math.PI * (3 - Math.sqrt(5)); 
    const radius = 6.5; // Spread radius

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      pos.push([
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius,
      ]);
    }
    return pos;
  }, []);

  return (
    <group>
      {skills.map((skill, i) => (
        <SkillIcon key={i} skill={skill} position={positions[i]} />
      ))}
    </group>
  );
}

const Skill = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="skills" className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 overflow-hidden bg-[#030712]">
      
      {/* --- Background Ambience --- */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- Header --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="z-10 text-center mb-10"
      >
        <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">
          My Tech Stack
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-200">
          Skills & Technologies
        </h1>
      </motion.div>

      {/* --- Content Switcher --- */}
      {isMobile ? (
        // === Mobile Premium Grid ===
        <div className="w-full max-w-6xl px-4 z-10">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 mb-2 relative">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        // === Desktop 3D Hologram ===
        <div className="w-full h-[700px] relative z-10 cursor-move">
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 14], fov: 45 }}>
            {/* Lighting */}
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} color="#4f46e5" intensity={2} />
            
            {/* Controls */}
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.8} 
              enablePan={false}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
            
            {/* The Cloud */}
            <SkillCloud />
            
            {/* Mist for depth */}
            <fog attach="fog" args={['#030712', 12, 25]} />
          </Canvas>

          {/* Interaction Hint */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm tracking-widest uppercase opacity-70 animate-pulse pointer-events-none">
            Click & Drag to Rotate
          </div>
        </div>
      )}
    </section>
  );
};

export default Skill;