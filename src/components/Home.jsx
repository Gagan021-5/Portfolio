import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode, SiSubstack } from "react-icons/si";
import profileImg from "../assets/profile.jpg";

const socials = [
  { icon: <FaGithub size={18} />, title: "GitHub", href: "https://github.com/Gagan021-5" },
  { icon: <FaLinkedinIn size={18} />, title: "LinkedIn", href: "https://www.linkedin.com/in/gagan-singh-145781321" },
  { icon: <SiSubstack size={16} />, title: "Substack", href: "https://substack.com/@gagannn" },
  { icon: <SiLeetcode size={17} />, title: "LeetCode", href: "https://leetcode.com/u/Gagan021/" },
];

const Home = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const elem = document.querySelector("#project");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen w-full bg-[#F8F7F4] pt-28 sm:pt-32 pb-16 px-6 sm:px-10 lg:px-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Bold Editorial Typography & Metrics */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Main Huge Headline with Typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.4rem] font-black leading-[0.92] tracking-tighter text-[#0A0A0A] mb-8"
          >
            <span>creative</span><br />
            <span className="text-[#F4A836] inline-block">
              <Typewriter
                words={[
                  "software developer",
                  "backend developer",
                  "full stack developer",
                  "frontend developer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={35}
                delaySpeed={1800}
              />
            </span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-black/70 max-w-lg leading-relaxed mb-8 font-normal"
          >
            I build applications that solve real problems, run fast, and scale cleanly. Working with modern web architectures and practical AI systems.
          </motion.p>

          {/* Outlined Social Circles with Real Brand Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="flex items-center gap-3.5"
          >
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                title={item.title}
                className="w-11 h-11 rounded-full border border-black/20 bg-white flex items-center justify-center text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-all duration-300 shadow-sm"
              >
                {item.icon}
              </a>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Signature Amber/Yellow Curved Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] bg-[#F4A836] p-6 sm:p-8 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(244,168,54,0.35)] overflow-hidden group"
          >
            {/* Top Bar inside Card: Cursive Signature */}
            <div className="relative z-20 flex items-center justify-between">
              <span className="font-signature text-4xl sm:text-5xl text-white tracking-wide drop-shadow-sm select-none">
                Gagan
              </span>
            </div>

            {/* Main Portrait Photo */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
              <img
                src={profileImg}
                alt="Gagan"
                className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Home;