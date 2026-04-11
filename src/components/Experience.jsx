import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const experienceSlides = [
  {
    id: "exp-1",
    eyebrow: "01",
    heading: "Frontend Developer Intern",
    subheading: "Creatibl Solution Pvt Limited",
    rows: [
      ["Role", "Frontend Developer Intern"],
      ["Company", "Creatibl Solution Pvt Limited"],
      ["Duration", "April 2025 - July 2025"],
      ["Location", "Remote"],
      ["Work Type", "Internship"],
      ["Tech Stack", "React.js, Tailwind CSS, JavaScript"],
      [
        "Summary",
        "Developed responsive and interactive user interfaces and optimized the application for faster performance.",
      ],
    ],
  },
  {
    id: "exp-2",
    eyebrow: "02",
    heading: "UI Engineer Intern",
    subheading: "NovaStack Labs",
    rows: [
      ["Role", "UI Engineer Intern"],
      ["Company", "NovaStack Labs"],
      ["Duration", "August 2025 - November 2025"],
      ["Location", "Bangalore, India"],
      ["Work Type", "Internship"],
      ["Tech Stack", "React, TypeScript, Tailwind CSS, Figma"],
      [
        "Summary",
        "Built dashboard flows, refined reusable components, and improved handoff quality between design and development teams.",
      ],
    ],
  },
];

const Experience = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = experienceSlides[activeSlide];

  return (
    <div className="relative py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">
            Experience
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Work history in a clean, focused view
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            A dedicated experience section with manual slide navigation and transparent styling to keep the layout minimal.
          </p>
        </motion.div>

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8">
          <div className="w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_80px_rgba(2,6,23,0.22)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full"
              >
                <div className="flex flex-col gap-6 p-6 sm:p-8">
                  <div className="flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
                        Slide {currentSlide.eyebrow}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                        {currentSlide.heading}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300 sm:text-base">
                        {currentSlide.subheading}
                      </p>
                    </div>

                    <p className="text-sm text-slate-400">
                      {activeSlide + 1} / {experienceSlides.length}
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-left text-sm text-slate-200">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="w-44 px-4 py-4 font-semibold text-white sm:px-6">
                            Field
                          </th>
                          <th className="px-4 py-4 font-semibold text-white sm:px-6">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentSlide.rows.map(([label, value]) => (
                          <tr key={label} className="border-b border-white/10 last:border-b-0">
                            <th className="px-4 py-4 align-top text-xs font-medium uppercase tracking-[0.22em] text-cyan-300 sm:px-6">
                              {label}
                            </th>
                            <td className="px-4 py-4 leading-7 text-slate-300 sm:px-6">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3" aria-label="Experience slide navigation">
            {experienceSlides.map((slide, index) => {
              const isActive = index === activeSlide;

              return (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show experience slide ${index + 1}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveSlide(index)}
                  className={`h-3 w-3 rounded-full border transition-all duration-200 ${
                    isActive
                      ? "scale-125 border-cyan-400 shadow-[0_0_0_3px_rgba(34,211,238,0.12)]"
                      : "border-white/35 hover:border-white/70"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
