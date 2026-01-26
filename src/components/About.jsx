import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiLayers, FiActivity } from "react-icons/fi";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const features = [
    { 
      title: "Intelligent Systems", 
      desc: "Integrating AI agents for smarter web interactions.", 
      icon: <FiCpu /> 
    },
    { 
      title: "Full-Stack Architecture", 
      desc: "Scalable MERN backends with optimized performance.", 
      icon: <FiLayers /> 
    },
    { 
      title: "Modern UI/UX", 
      desc: "Crafting fluid, glassmorphic interfaces.", 
      icon: <FiCode /> 
    },
  ];

  return (
    <motion.section
      id="about"
      className="min-h-screen w-full flex items-center justify-center px-6 py-24 relative overflow-hidden bg-[#030712]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* --- AI Grid Background --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,27,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,27,0)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] translate-y-1/4 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- Left Column: The Narrative --- */}
        <motion.div variants={fadeInUp} className="space-y-8 text-center lg:text-left">
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wide mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            SYSTEM ONLINE
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Next-Gen</span> Experiences.
            </h1>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I am a Full Stack Developer obsessed with 
            <span className="text-white font-medium"> Performance</span>, 
            <span className="text-white font-medium"> Scalability</span>, and 
            <span className="text-white font-medium"> AI Integration</span>. 
            I build systems that don't just function—they anticipate user needs and deliver fluid, immersive interactions.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
             {['React.js', 'Node.js', 'AI Agents', 'Three.js'].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-[#0f1236]/80 border border-indigo-500/20 text-sm text-indigo-200 font-mono">
                {`> ${tag}`}
              </span>
            ))}
          </div>
        </motion.div>

        {/* --- Right Column: The "AI Core" Visualization --- */}
        <motion.div 
          variants={fadeInUp}
          className="relative"
        >
          {/* Holographic Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-2xl blur opacity-30 animate-pulse"></div>
          
          <div className="relative bg-[#050914]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-auto text-xs text-gray-500 font-mono">user_profile.json</div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group cursor-default">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Data Stream Simulation */}
              <div className="mt-6 p-4 rounded-lg bg-black/50 border border-white/5 font-mono text-xs text-gray-500 overflow-hidden">
                <div className="flex gap-2">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-cyan-400">~/gagan-dev</span>
                  <span className="text-white">git commit -m "Optimize AI Core"</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-gray-400">Compiling modules... <span className="text-emerald-400">Done (0.4s)</span></span>
                </div>
                 <div className="flex gap-2 mt-1 animate-pulse">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-gray-400">_</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;