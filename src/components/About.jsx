import React from "react";
import { FiCode, FiCpu, FiLayers } from "react-icons/fi";

const features = [
  {
    title: "AI Workflows",
    desc: "Building LangGraph multi-agent pipelines and RAG systems.",
    icon: <FiCpu />,
  },
  {
    title: "Backend APIs",
    desc: "Writing production backends with Node.js, FastAPI, and PostgreSQL.",
    icon: <FiLayers />,
  },
  {
    title: "Frontend Apps",
    desc: "Building responsive web interfaces with React and Tailwind CSS.",
    icon: <FiCode />,
  },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#F8F7F4] text-[#0A0A0A] py-24 sm:py-32 px-6 sm:px-10 lg:px-12 overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Top Narrative Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.92] tracking-tighter text-[#0A0A0A]">
              Building<br />
              <span className="text-[#F4A836]">Software</span><br />
              That Scales.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-2">
            <p className="text-lg sm:text-xl text-black/80 leading-relaxed font-normal">
              I work across the stack, from React interfaces to backend APIs and AI integrations. My focus is on building software that's useful, reliable, and ready for real-world use.
            </p>
          </div>

        </div>

        {/* Features / Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-black/10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-white hover:border-[#F4A836] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl border border-black/10 bg-[#F8F7F4] flex items-center justify-center text-xl text-[#0A0A0A] mb-6 group-hover:bg-[#F4A836] group-hover:text-black group-hover:border-[#F4A836] transition-colors">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-[#0A0A0A] tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-black/60 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;