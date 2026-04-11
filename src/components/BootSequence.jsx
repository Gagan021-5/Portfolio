import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootSequence({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Elegant fast countdown to 100
    const duration = 2200; // 2.2 seconds for a premium feel
    const interval = 20;
    let current = 0;
    
    const timer = setInterval(() => {
      // Easing out the progress
      const remaining = 100 - current;
      const step = Math.max(0.5, remaining * 0.05);
      
      current += step;
      
      if (current >= 99.5) {
        setProgress(100);
        clearInterval(timer);
        
        // Trigger exit animations
        setTimeout(() => setStage(1), 400); // brief pause at 100%
        setTimeout(onComplete, 1200); // 800ms for the exit animations
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712] text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
    >
      {/* Background glow aligned with theme */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ 
          scale: stage === 1 ? 1.5 : [1, 1.1, 1],
          opacity: stage === 1 ? 0 : [0.5, 0.8, 0.5]
        }}
        transition={{ duration: stage === 1 ? 0.8 : 4, repeat: stage === 1 ? 0 : Infinity }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Name Reveal */}
        <div className="overflow-hidden pb-4">
          <AnimatePresence>
            {stage === 0 && (
              <motion.div
                exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 sm:gap-4 text-5xl sm:text-7xl font-black tracking-widest"
              >
                {"GAGAN".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="bg-clip-text text-transparent bg-gradient-to-br from-white via-indigo-100 to-indigo-300 drop-shadow-sm"
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Minimalist Progress Indicator */}
        <AnimatePresence>
          {stage === 0 && (
            <motion.div 
              className="mt-8 flex flex-col items-center gap-6"
              exit={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Animated Line */}
              <div className="relative w-56 sm:w-72 h-[2px] bg-white/5 overflow-hidden rounded-full">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-600 via-cyan-400 to-white"
                  style={{ width: `${progress}%` }}
                  layoutId="progress"
                />
              </div>

              {/* Status Text */}
              <div className="flex w-full justify-between items-center px-1 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-indigo-200/60 uppercase">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Initializing Environment
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="tabular-nums"
                >
                  {progress.toString().padStart(3, '0')}%
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Elegant Frame Corners */}
      <AnimatePresence>
        {stage === 0 && (
          <motion.div
            className="absolute inset-6 sm:inset-10 pointer-events-none hidden sm:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
