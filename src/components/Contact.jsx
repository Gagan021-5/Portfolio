import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";

const Contact = () => {
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
        toast.success("🚀 Message sent successfully!", {
          position: "top-right",
          theme: "dark",
        });
        reset();
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
        {/* --- Left Column: Text & Visuals --- */}
        <motion.div className="flex flex-col gap-6" variants={fadeInUp}>
          <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-400 uppercase mb-2">
            Get in Touch
          </h2>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 leading-tight">
            Let’s build something <br />
            <span className="italic font-light text-indigo-400">
              extraordinary.
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Have a project in mind or just want to chat? I'm currently open to
            new opportunities and collaborations. Drop a message and I'll get
            back to you asap.
          </p>

          <div className="mt-8 flex items-center gap-4 text-gray-500 text-sm">
            <div className="h-[1px] w-12 bg-gray-700"></div>
            <span>Based in India • Available Worldwide</span>
          </div>
        </motion.div>

        {/* --- Right Column: The "Holographic" Form Card --- */}
        <motion.div className="relative group" variants={fadeInUp}>
          {/* Card Glow Effect on Hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <div className="relative bg-[#0b1121]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 pl-1">
                  Full Name
                </label>
                <div className="relative group/input">
                  <FiUser className="absolute left-4 top-4 text-gray-400 group-focus-within/input:text-indigo-400 transition-colors" />
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-gray-200 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                    placeholder="Alpha Beta"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-xs pl-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 pl-1">
                  Email Address
                </label>
                <div className="relative group/input">
                  <FiMail className="absolute left-4 top-4 text-gray-400 group-focus-within/input:text-indigo-400 transition-colors" />
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-gray-200 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                    placeholder="alpha@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs pl-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 pl-1">
                  Your Message
                </label>
                <div className="relative group/input">
                  <FiMessageSquare className="absolute left-4 top-4 text-gray-400 group-focus-within/input:text-indigo-400 transition-colors" />
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 5, message: "Minimum 5 chars" },
                    })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-gray-200 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 focus:bg-white/10 transition-all duration-300 min-h-[140px] resize-none placeholder:text-gray-600"
                    placeholder="Tell me about your project..."
                  />
                </div>
                {errors.message && (
                  <p className="text-red-400 text-xs pl-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative cursor-pointer group/btn overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:border-white/20"
              >
                {/* 1. Shimmer Effect (Moves on Hover) */}
                <div className="absolute inset-0 -translate-x-[100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                {/* 2. Bottom "Energy" Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 group-hover/btn:opacity-100 transition-opacity duration-300" />

                {/* 3. Content */}
                <div className="relative z-10 flex items-center justify-center gap-3 px-8 py-4">
                  <span className="font-bold text-gray-200 text-lg tracking-wide group-hover/btn:text-white transition-colors">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>

                  {!isSubmitting && (
                    <FiSend className="text-indigo-400 text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:text-cyan-400 transition-all duration-300" />
                  )}
                </div>

                {/* 4. Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-10 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 transition-opacity duration-300 pointer-events-none" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
