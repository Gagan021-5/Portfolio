import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Gagan021-5",
    color: "#ffffff",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/gagan-singh-145781321",
    color: "#0A66C2",
  },
  {
    icon: <SiLeetcode />,
    href: "https://leetcode.com/u/Gagan021/",
    color: "#FFA116",
  },
  {
    icon: <RiTwitterXLine />,
    href: "https://x.com/Gagan_zs",
    color: "#1DA1F2",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for the navbar background/size
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Projects", href: "#project" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const offsetTop = section.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setActive(href);
      setIsMobileMenuOpen(false);
    }
  };

  const navbarVariants = {
    initial: { y: -100, opacity: 0, x: "-50%" },
    animate: { 
      y: scrolled ? 20 : 30, 
      opacity: 1, 
      x: "-50%",
      scale: scrolled ? 0.9 : 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 20 }
    },
  };

  return (
    <>
      <motion.nav
        className="fixed left-1/2 z-[100] w-[90%] max-w-5xl"
        variants={navbarVariants}
        initial="initial"
        animate="animate"
      >
        <div className={`
          flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
          ${scrolled 
            ? "bg-[#030712]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border border-transparent"
          }
        `}>
          
          {/* --- Logo Area --- */}
          <motion.a 
            href="#home"
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleSmoothScroll(e, "#home")}
          >
            <span className="font-mono text-xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              &lt;Gagan /&gt;
            </span>
          </motion.a>

          {/* --- Desktop Menu --- */}
          <div className="hidden md:flex items-center gap-1 bg-[#0b1121]/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full text-gray-400 hover:text-white group"
              >
                {active === link.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-full bg-indigo-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </a>
            ))}
          </div>

          {/* --- Socials & Mobile Toggle --- */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10, color: link.color }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              className="md:hidden text-2xl text-white p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <IoClose /> : <CiMenuFries />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* --- Mobile Full Screen Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 md:hidden bg-[#030712]/90 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="flex flex-col items-center gap-8 w-full px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-3xl font-bold ${
                    active === link.href ? "text-indigo-400" : "text-white/50"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex gap-6 mt-8">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    className="text-2xl text-gray-400 hover:text-white"
                    whileHover={{ scale: 1.2, color: link.color }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
