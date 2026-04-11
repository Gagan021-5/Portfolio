import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Achievement from "./components/Achievement";
import Project from "./components/Project";
import Contact from "./components/Contact";
import BackgroundCanvas from "./components/BackgroundCanvas";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import BootSequence from "./components/BootSequence";
import SectionDivider from "./components/SectionDivider";
import ScrollProgress from "./components/ScrollProgress";

// --- Premium Footer ---
function PremiumFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#030712] pt-16 pb-8 overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <span className="font-mono text-xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              &lt;Gagan /&gt;
            </span>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting intelligent, high-performance web
              experiences with modern technologies and AI integration.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Work
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://github.com/Gagan021-5"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gagan-singh-145781321"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/Gagan_zs"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Twitter / X
              </a>
              <a
                href="https://leetcode.com/u/Gagan021/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Gagan. All Rights Reserved.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-xs font-medium transition-all cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

function PortfolioShell() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* OPTIMIZED: Static Noise Overlay using tiny background pattern instead of heavy SVG filter */}
      <div className="fixed inset-0 z-[90] pointer-events-none opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
      </div>

      <CustomCursor />

      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastStyle={{
          backgroundColor: "rgba(3, 7, 18, 0.9)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#fff",
          fontSize: "0.9rem",
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
            <SectionDivider />
            <section id="about">
              <About />
            </section>
            <SectionDivider />
            <section id="skills">
              <Skill />
            </section>
            <SectionDivider />
            <section id="experience">
              <Experience />
            </section>
            <SectionDivider />
            <section id="achievements">
              <Achievement />
            </section>
            <SectionDivider />
            <section id="projects">
              <Project />
            </section>
            <SectionDivider />
            <section id="contact">
              <Contact />
            </section>
          </main>
          <PremiumFooter />
        </div>
      </SmoothScroll>
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={() => setShowPortfolio(true)}>
        {isLoading ? (
          <BootSequence key="boot-sequence" onComplete={() => setIsLoading(false)} />
        ) : null}
      </AnimatePresence>

      {showPortfolio ? <PortfolioShell /> : null}
    </>
  );
}

export default App;
