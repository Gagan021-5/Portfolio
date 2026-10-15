import React from "react";

const experienceList = [
  {
    role: "Software Developer Intern",
    company: "Oblu Healthcare LLP",
    period: "Aug 2026 - Present",
    type: "Internship",
    location: "New Delhi, India",
    description: "Building an employee call-tracking and analytics platform with React Native Expo, Django REST Framework, and PostgreSQL. Integrated into the company CRM.",
  },
  {
    role: "Full Stack AI Engineer Intern",
    company: "RentPrompts",
    period: "April 2026 - July 2026",
    type: "Full-Time",
    location: "Remote / Hybrid",
    description: "Built a multi-agent orchestration pipeline with LangGraph and FastAPI. Integrated a ChromaDB RAG system to ground prompts with dynamic blueprints.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Creatibl Solution Pvt Limited",
    period: "April 2025 - July 2025",
    type: "Internship",
    location: "Remote",
    description: "Built responsive frontend interfaces with React and Tailwind CSS. Improved page load speed and component reusability.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-[#F8F7F4] text-[#0A0A0A] py-24 sm:py-32 px-6 sm:px-10 lg:px-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-black/10">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-[#0A0A0A] leading-[0.9]">
            experience
          </h2>
        </div>

        {/* Experience Rows */}
        <div className="flex flex-col divide-y divide-black/10 border-t border-black/10">
          {experienceList.map((exp, index) => (
            <div
              key={index}
              className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
            >
              <div className="md:col-span-3">
                <span className="text-xs font-mono text-[#F4A836] uppercase tracking-wider block mb-1">
                  {exp.period}
                </span>
                <span className="text-xs font-bold text-black/40 uppercase tracking-widest">
                  {exp.type} • {exp.location}
                </span>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A0A0A] tracking-tight group-hover:text-[#F4A836] transition-colors">
                  {exp.role}
                </h3>
                <p className="text-base font-semibold text-black/60 mt-1">
                  {exp.company}
                </p>
              </div>

              <div className="md:col-span-4">
                <p className="text-sm text-black/70 leading-relaxed font-normal">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
