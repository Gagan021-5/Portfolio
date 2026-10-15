import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode, SiSubstack } from "react-icons/si";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/Gagan021-5" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/gagan-singh-145781321" },
  { icon: <SiSubstack />, href: "https://substack.com/@gagannn" },
  { icon: <SiLeetcode />, href: "https://leetcode.com/u/Gagan021/" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#project" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActive(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F7F4]/90 backdrop-blur-md border-b border-black/10 py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Logo - Geometric editorial mark like mockup */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded-full bg-[#0A0A0A] group-hover:bg-[#F4A836] transition-colors" />
              <span className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[10px] border-r-[#0A0A0A] group-hover:border-r-[#F4A836] transition-colors" />
            </div>
            <span className="text-xl font-black tracking-tight text-[#0A0A0A]">
              gagan
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm font-semibold tracking-tight transition-colors duration-200 ${
                  active === link.href
                    ? "text-[#0A0A0A] font-bold"
                    : "text-black/60 hover:text-[#0A0A0A]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/15 bg-white/70 text-xs font-semibold text-[#0A0A0A] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F4A836] animate-pulse" />
            <span>Delhi, India</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl p-2 rounded-full border border-black/15 bg-white text-[#0A0A0A]"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <IoClose /> : <CiMenuFries />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F8F7F4] pt-24 px-8 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-3xl font-black text-[#0A0A0A] hover:text-[#F4A836] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-black/10 flex items-center justify-between">
              <span className="text-sm font-bold text-black/60">© Gagan</span>
              <div className="flex gap-4">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl text-[#0A0A0A] hover:text-[#F4A836]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
