import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative w-full h-24 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      {/* Center gradient line */}
      <div className="relative w-full max-w-4xl h-[1px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
        
        {/* Traveling light beam */}
        <motion.div
          className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent blur-[1px]"
          animate={{ left: ["-10%", "110%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
        />
      </div>

      {/* Center diamond accent */}
      <div className="absolute w-2 h-2 rotate-45 bg-indigo-500/50 border border-indigo-400/30 shadow-[0_0_12px_rgba(99,102,241,0.4)]" />
    </div>
  );
}
