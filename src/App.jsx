import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import BackgroundCanvas from "./components/BackgroundCanvas";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced loading time slightly for better UX
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712]">
        <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mb-4" />
        <p className="text-indigo-400 font-mono text-sm tracking-[0.3em] animate-pulse">
          INITIALIZING SYSTEM
        </p>
      </div>
    );
  }

  return (
    <>
      {/* OPTIMIZED: Static Noise Overlay using tiny background pattern instead of heavy SVG filter */}
      <div className="fixed inset-0 z-[90] pointer-events-none opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
      </div>

      <CustomCursor />
      
      <ToastContainer 
        position="bottom-right"
        theme="dark"
        toastStyle={{ 
          backgroundColor: 'rgba(3, 7, 18, 0.9)', 
          backdropFilter: 'blur(10px)', 
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#fff',
          fontSize: '0.9rem'
        }}
      />

      <BackgroundCanvas />

      <SmoothScroll>
        <div className="relative z-10 w-full overflow-hidden">
          <Navbar />
          <main className="flex flex-col">
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skill />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="projects">
              <Project />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
          <footer className="py-8 text-center text-gray-600 text-xs tracking-widest uppercase border-t border-white/5 bg-[#030712]">
            © {new Date().getFullYear()} Gagan. All Rights Reserved.
          </footer>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;