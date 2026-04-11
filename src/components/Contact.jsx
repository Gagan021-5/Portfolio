import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSend, FiCheck, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

const socialLinks = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/Gagan021-5",
    label: "GitHub",
    hoverColor: "hover:text-white hover:border-white/30",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    href: "https://www.linkedin.com/in/gagan-singh-145781321",
    label: "LinkedIn",
    hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/30",
  },
  {
    icon: <RiTwitterXLine size={18} />,
    href: "https://x.com/Gagan_zs",
    label: "Twitter / X",
    hoverColor: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30",
  },
  {
    icon: <FiMail size={18} />,
    href: "mailto:gagan@example.com",
    label: "Email",
    hoverColor: "hover:text-emerald-400 hover:border-emerald-400/30",
  },
];

// --- Floating Label Input ---
const FloatingInput = ({
  label,
  type = "text",
  register,
  name,
  rules,
  error,
  isTextarea = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const isFloat = isFocused || hasValue;

  const inputProps = {
    ...register(name, {
      ...rules,
      onChange: (e) => setHasValue(e.target.value.length > 0),
    }),
    onFocus: () => setIsFocused(true),
    onBlur: (e) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    },
    className: `w-full bg-white/5 border ${
      error
        ? "border-red-500/50 focus:border-red-500/80 focus:ring-red-500/30"
        : "border-white/10 focus:border-indigo-500/50 focus:ring-indigo-500/30"
    } rounded-xl py-4 px-5 text-gray-200 outline-none focus:ring-1 focus:bg-white/10 transition-all duration-300 ${
      isTextarea ? "min-h-[140px] resize-none pt-6" : ""
    }`,
  };

  return (
    <div className="relative group/field">
      {/* Floating label */}
      <motion.label
        className={`absolute left-5 pointer-events-none font-medium transition-colors duration-200 ${
          error ? "text-red-400" : isFloat ? "text-indigo-400" : "text-gray-500"
        }`}
        animate={{
          y: isFloat ? -2 : isTextarea ? 16 : 12,
          scale: isFloat ? 0.75 : 1,
          originX: 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.label>

      {isTextarea ? (
        <textarea {...inputProps} />
      ) : (
        <input type={type} {...inputProps} />
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs mt-1.5 pl-1"
        >
          {error.message}
        </motion.p>
      )}
    </div>
  );
};

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xdkdkyol", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 4000);
        toast.success("🚀 Message sent successfully!", {
          position: "top-right",
          theme: "dark",
        });
      } else throw new Error("Failed to send");
    } catch (error) {
      toast.error("❌ Failed to send message. Try again.", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative overflow-hidden bg-[#030712]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <ToastContainer />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* --- Left Column --- */}
        <motion.div className="flex flex-col gap-6" variants={fadeInUp}>
          <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-400 uppercase mb-2">
            Get in Touch
          </h2>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 leading-tight">
            Let's build something <br />
            <span className="italic font-light text-indigo-400">
              extraordinary.
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Have a project in mind or just want to chat? I'm currently open to
            new opportunities and collaborations. Drop a message and I'll get
            back to you asap.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 mt-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm font-medium transition-all duration-300 ${link.hoverColor}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4 text-gray-500 text-sm">
            <div className="h-[1px] w-12 bg-gray-700"></div>
            <span>Based in India • Available Worldwide</span>
          </div>
        </motion.div>

        {/* --- Right Column: Form Card --- */}
        <motion.div className="relative group" variants={fadeInUp}>
          {/* Card glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <div className="relative bg-[#0b1121]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* Success State */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <FiCheck size={36} className="text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                /* Form State */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FloatingInput
                    label="Full Name"
                    register={register}
                    name="name"
                    rules={{ required: "Name is required" }}
                    error={errors.name}
                  />

                  <FloatingInput
                    label="Email Address"
                    type="email"
                    register={register}
                    name="email"
                    rules={{ required: "Email is required" }}
                    error={errors.email}
                  />

                  <FloatingInput
                    label="Your Message"
                    register={register}
                    name="message"
                    rules={{
                      required: "Message is required",
                      minLength: { value: 5, message: "Minimum 5 chars" },
                    }}
                    error={errors.message}
                    isTextarea
                  />

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative cursor-pointer group/btn overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:border-white/20"
                  >
                    {/* Shimmer */}
                    <div className="absolute inset-0 -translate-x-[100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                    {/* Bottom line */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 group-hover/btn:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center gap-3 px-8 py-4">
                      <span className="font-bold text-gray-200 text-lg tracking-wide group-hover/btn:text-white transition-colors">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      {!isSubmitting && (
                        <FiSend className="text-indigo-400 text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:text-cyan-400 transition-all duration-300" />
                      )}
                    </div>

                    {/* Inner glow */}
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-10 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 transition-opacity duration-300 pointer-events-none" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
