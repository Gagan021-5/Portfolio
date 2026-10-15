import React from "react";
import { motion } from "framer-motion";
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
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";

// --- Editorial Footer ---
function EditorialFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] text-[#F8F7F4] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-white inline-block" />
              <span className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[12px] border-r-white inline-block" />
              <span className="text-2xl font-black tracking-tight text-white ml-1">
                gagan
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm font-normal">
              Full-stack developer building web apps and AI systems with React, Node.js, and Python.
            </p>
            <div className="pt-4 border-t border-white/10 max-w-sm space-y-1.5">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                Still learning. Still curious.
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-normal">
                Building things, exploring technology, and figuring it out along the way.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#F4A836]">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm font-semibold transition-colors duration-200 inline-block"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#F4A836]">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://github.com/Gagan021-5"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white text-sm font-semibold transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gagan-singh-145781321"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white text-sm font-semibold transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://substack.com/@gagannn"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white text-sm font-semibold transition-colors"
              >
                Substack
              </a>
              <a
                href="https://leetcode.com/u/Gagan021/"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white text-sm font-semibold transition-colors"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} GAGAN. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#F4A836] hover:text-black hover:border-[#F4A836] transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

function PortfolioShell() {
  return (
    <div className="w-full min-h-screen bg-[#F8F7F4] text-[#0A0A0A]">
      <ScrollProgress />

      <ToastContainer
        position="bottom-right"
        theme="dark"
        toastStyle={{
          backgroundColor: "#0A0A0A",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff",
          fontSize: "0.9rem",
        }}
      />

      <SmoothScroll>
        <div className="relative w-full overflow-hidden">
          <Navbar />

          <main className="flex flex-col">
            {/* Hero Section */}
            <section id="home">
              <Home />
            </section>

            {/* About Section */}
            <section id="about">
              <About />
            </section>

            {/* Projects Section */}
            <div id="project">
              <Project />
            </div>

            {/* Skills Section */}
            <section id="skills">
              <Skill />
            </section>

            {/* Experience Section */}
            <section id="experience">
              <Experience />
            </section>

            {/* Achievements Section */}
            <section id="achievements">
              <Achievement />
            </section>

            {/* Contact Form */}
            <section id="contact">
              <Contact />
            </section>
          </main>

          <EditorialFooter />
        </div>
      </SmoothScroll>
    </div>
  );
}

function App() {
  return <PortfolioShell />;
}

export default App;
