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
    hoverColor: "#fff",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/gagan-singh-145781321",
    hoverColor: "#0A66C2",
  },
  {
    icon: <SiLeetcode />,
    href: "https://leetcode.com/u/Gagan021/",
    hoverColor: "#FFA116",
  },
  {
    icon: <RiTwitterXLine />,
    href: "https://x.com/Gagan_zs",
    hoverColor: "#1DA1F2",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
  ];

    const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const navbarHeight = 80; 
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActive(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
    >
      <div className="flex justify-between items-center px-6 md:px-12 h-20">
        {/* Logo / Greeting */}
        <motion.div whileHover={{ scale: 1.05 }} className="min-w-[200px]">
          <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-400  bg-clip-text text-transparent select-none">
            <Typewriter
              words={["Hello!", "नमस्ते!", "Bonjour!", "Hola!"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={`text-xl font-medium transition-all duration-300 ${
                active === link.href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              } relative`}
            >
              {link.name}
              {active === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 ">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              whileHover={{ scale: 1.2, color: link.hoverColor }}
              className="text-gray-400 text-2xl"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <IoClose /> : <CiMenuFries />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center bg-slate-900/95 backdrop-blur-xl border-t border-slate-700 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-gray-300 text-lg py-3 w-full text-center hover:bg-slate-800/50 transition-all ${
                  active === link.href ? "text-white" : ""
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex gap-6 py-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  whileHover={{ scale: 1.2, color: link.hoverColor }}
                  className="text-gray-400 text-2xl"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
