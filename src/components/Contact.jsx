import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/Gagan021-5", label: "GitHub" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/gagan-singh-145781321", label: "LinkedIn" },
  { icon: <SiSubstack />, href: "https://substack.com/@gagannn", label: "Substack" },
];

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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: "f07d2f9d-5ebc-4c6e-8ee9-c290132b4ea4",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 4000);
        toast.success("Message sent successfully!", {
          position: "top-right",
          theme: "dark",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        theme: "dark",
      });
    }
  };

  return (
    <section id="contact" className="w-full bg-[#F8F7F4] text-[#0A0A0A] py-24 sm:py-32 px-6 sm:px-10 lg:px-12 relative overflow-hidden border-t border-black/10">
      <ToastContainer />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-6">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[#0A0A0A] leading-[0.9] mb-8">
            let's talk
          </h2>

          <p className="text-lg text-black/70 max-w-md leading-relaxed font-normal mb-10">
            Have a project, role, or idea you want to build? Send me a message and let's talk.
          </p>

          <div className="space-y-4 mb-12">
            <div className="text-xs font-mono text-black/40 uppercase tracking-widest font-semibold">
              Direct Contact
            </div>
            <a
              href="mailto:gagansingh010221@gmail.com"
              className="text-2xl sm:text-3xl font-black text-[#0A0A0A] hover:text-[#F4A836] transition-colors tracking-tight inline-block"
            >
              gagansingh010221@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full border border-black/15 bg-white text-xs font-bold uppercase tracking-wider text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-all duration-300 flex items-center gap-2 shadow-xs"
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Editorial Contact Form */}
        <div className="lg:col-span-6 bg-white border border-black/10 rounded-[2rem] p-8 sm:p-12 shadow-xl relative">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4A836] text-black mx-auto flex items-center justify-center text-3xl font-bold">
                  <FiCheck />
                </div>
                <h3 className="text-3xl font-black text-[#0A0A0A]">Message Dispatched</h3>
                <p className="text-black/60 text-sm max-w-xs mx-auto">
                  Thank you for reaching out. I'll get back to your message shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-black/70 mb-2 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-[#F8F7F4] border border-black/15 focus:border-[#F4A836] focus:bg-white rounded-xl px-5 py-3.5 text-[#0A0A0A] placeholder-black/30 outline-none font-medium transition-all"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 mt-1 block font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-black/70 mb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full bg-[#F8F7F4] border border-black/15 focus:border-[#F4A836] focus:bg-white rounded-xl px-5 py-3.5 text-[#0A0A0A] placeholder-black/30 outline-none font-medium transition-all"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 mt-1 block font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-black/70 mb-2 font-semibold">
                    Project Brief / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project, timeline, and goals..."
                    {...register("message", { required: "Message is required" })}
                    className="w-full bg-[#F8F7F4] border border-black/15 focus:border-[#F4A836] focus:bg-white rounded-xl px-5 py-3.5 text-[#0A0A0A] placeholder-black/30 outline-none font-medium transition-all resize-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-1 block font-medium">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#F4A836] text-[#0A0A0A] font-black text-sm uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                  <FiArrowUpRight className="text-lg" />
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Contact;
