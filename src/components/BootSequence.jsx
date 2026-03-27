import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const BOOT_PHASES = [
  { label: "HANDSHAKE", detail: "Securing signal routing" },
  { label: "RENDER MATRIX", detail: "Calibrating motion lattice" },
  { label: "STABILIZING INTERFACE", detail: "Syncing portfolio modules" },
  { label: "SYSTEM ONLINE", detail: "Experience ready for launch" },
];

const MODULES = ["UI", "MOTION", "PROJECTS", "CONTACT"];
const PHASE_TIMEOUTS = [700, 1100, 1500];
const PHASE_PROGRESS = [18, 46, 74, 100];
const TOTAL_DURATION = 2100;

const DATA_CHIPS = [
  { label: "SIGNAL", value: "LOCKED", position: "left-4 top-8 lg:left-10 lg:top-12" },
  { label: "STACK", value: "REACT // FRAMER", position: "right-4 top-8 lg:right-10 lg:top-12" },
  { label: "VECTOR", value: "22.57N // 88.36E", position: "left-4 bottom-8 lg:left-10 lg:bottom-12" },
  { label: "STATUS", value: "CYBER BOOT", position: "right-4 bottom-8 lg:right-10 lg:bottom-12" },
];

function DataChip({ chip, index, shouldReduceMotion }) {
  return (
    <motion.div
      className={`absolute hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-left font-mono text-[0.58rem] uppercase tracking-[0.32em] text-white/55 backdrop-blur-md md:block ${chip.position}`}
      initial={{ opacity: 0, y: 12 }}
      animate={
        shouldReduceMotion
          ? { opacity: 0.75, y: 0 }
          : { opacity: 0.85, y: [0, -6, 0] }
      }
      transition={{
        duration: shouldReduceMotion ? 0.4 : 5 + index,
        delay: 0.2 + index * 0.08,
        repeat: shouldReduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="block text-white/35">{chip.label}</span>
      <span className="mt-1 block text-[0.68rem] tracking-[0.22em] text-cyan-200/90">
        {chip.value}
      </span>
    </motion.div>
  );
}

export default function BootSequence({ onComplete }) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    const timeouts = PHASE_TIMEOUTS.map((timeout, index) =>
      setTimeout(() => {
        setPhaseIndex(index + 1);
      }, timeout)
    );

    timeouts.push(
      setTimeout(() => {
        if (!hasCompletedRef.current) {
          hasCompletedRef.current = true;
          onComplete?.();
        }
      }, TOTAL_DURATION)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [onComplete]);

  const currentPhase = BOOT_PHASES[phaseIndex];
  const progress = PHASE_PROGRESS[phaseIndex];
  const statusLabel = phaseIndex === BOOT_PHASES.length - 1 ? "ONLINE" : "SYNCING";

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#02050b] text-white"
      role="status"
      aria-live="polite"
      aria-label="Initializing portfolio"
      initial={{ opacity: 0, scale: 1.03, filter: "blur(12px)" }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration: shouldReduceMotion ? 0.18 : 0.32,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.985,
        filter: "blur(10px)",
        transition: {
          duration: shouldReduceMotion ? 0.24 : 0.46,
          ease: [0.4, 0, 0.2, 1],
        },
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.24),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.16),transparent_18%),radial-gradient(circle_at_18%_80%,rgba(99,102,241,0.12),transparent_24%),linear-gradient(180deg,#02050b_0%,#020814_55%,#010308_100%)]" />
      <div className="boot-sequence-scanlines absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.18),transparent_35%)]" />

      <motion.div
        className="absolute left-1/2 top-[14%] h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/18 blur-[120px]"
        animate={
          shouldReduceMotion
            ? { opacity: [0.5, 0.65, 0.5] }
            : { opacity: [0.45, 0.7, 0.45], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[14%] h-56 w-56 rounded-full bg-cyan-400/10 blur-[100px]"
        animate={
          shouldReduceMotion
            ? { opacity: [0.2, 0.32, 0.2] }
            : { x: [0, 24, 0], y: [0, -10, 0], opacity: [0.15, 0.3, 0.15] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[24%] h-44 w-44 rounded-full bg-sky-300/8 blur-[90px]"
        animate={
          shouldReduceMotion
            ? { opacity: [0.18, 0.26, 0.18] }
            : { x: [0, -18, 0], y: [0, 14, 0], opacity: [0.16, 0.26, 0.16] }
        }
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="boot-sequence-grid absolute inset-x-[-20%] bottom-[-28%] h-[70%]" />

      {DATA_CHIPS.map((chip, index) => (
        <DataChip
          key={chip.label}
          chip={chip}
          index={index}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}

      <div className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.45em] text-white/60 backdrop-blur-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 }}
            >
              <span className="text-cyan-200/85">GAGAN</span>
              <span className="text-white/20">//</span>
              <span>PORTFOLIO OS</span>
            </motion.div>

            <div className="relative flex h-[290px] w-full items-center justify-center sm:h-[340px]">
              <motion.div
                className="absolute h-[260px] w-[260px] rounded-full border border-cyan-300/12 sm:h-[320px] sm:w-[320px]"
                animate={
                  shouldReduceMotion
                    ? { scale: [1, 1.01, 1], opacity: [0.7, 0.9, 0.7] }
                    : { rotate: 360, scale: [1, 1.02, 1] }
                }
                transition={{
                  duration: shouldReduceMotion ? 4.5 : 16,
                  repeat: Infinity,
                  ease: shouldReduceMotion ? "easeInOut" : "linear",
                }}
              />
              <motion.div
                className="absolute h-[220px] w-[220px] rounded-full border border-indigo-200/18 sm:h-[280px] sm:w-[280px]"
                animate={
                  shouldReduceMotion
                    ? { scale: [1, 1.015, 1], opacity: [0.5, 0.75, 0.5] }
                    : { rotate: -360 }
                }
                transition={{
                  duration: shouldReduceMotion ? 5 : 20,
                  repeat: Infinity,
                  ease: shouldReduceMotion ? "easeInOut" : "linear",
                }}
              />
              <motion.div
                className="absolute h-[184px] w-[184px] rounded-full border-l border-t border-cyan-300/70 border-b-transparent border-r-transparent sm:h-[230px] sm:w-[230px]"
                animate={
                  shouldReduceMotion
                    ? { opacity: [0.5, 0.85, 0.5] }
                    : { rotate: 360 }
                }
                transition={{
                  duration: shouldReduceMotion ? 3.8 : 6,
                  repeat: Infinity,
                  ease: shouldReduceMotion ? "easeInOut" : "linear",
                }}
              />
              <motion.div
                className="absolute h-[152px] w-[152px] rounded-full border-b border-r border-indigo-400/75 border-l-transparent border-t-transparent sm:h-[194px] sm:w-[194px]"
                animate={
                  shouldReduceMotion
                    ? { opacity: [0.45, 0.7, 0.45] }
                    : { rotate: -360 }
                }
                transition={{
                  duration: shouldReduceMotion ? 4.6 : 7.5,
                  repeat: Infinity,
                  ease: shouldReduceMotion ? "easeInOut" : "linear",
                }}
              />
              <motion.div
                className="absolute h-[110px] w-[110px] rounded-full border border-white/10 bg-white/[0.03] shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:h-[128px] sm:w-[128px]"
                animate={
                  shouldReduceMotion
                    ? { scale: [1, 1.015, 1] }
                    : {
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 40px rgba(34,211,238,0.08)",
                          "0 0 58px rgba(99,102,241,0.2)",
                          "0 0 40px rgba(34,211,238,0.08)",
                        ],
                      }
                }
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-[18px] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95),rgba(125,211,252,0.95)_30%,rgba(99,102,241,0.92)_65%,rgba(79,70,229,0.18)_100%)]" />
                <motion.div
                  className="absolute inset-[34px] rounded-full border border-cyan-100/30"
                  animate={
                    shouldReduceMotion
                      ? { opacity: [0.4, 0.7, 0.4] }
                      : { scale: [1, 1.08, 1], opacity: [0.45, 0.9, 0.45] }
                  }
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              <motion.div
                className="absolute h-px w-36 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent sm:w-52"
                animate={
                  shouldReduceMotion
                    ? { opacity: [0.35, 0.8, 0.35] }
                    : { scaleX: [0.85, 1.1, 0.85], opacity: [0.3, 0.9, 0.3] }
                }
                transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute h-36 w-px bg-gradient-to-b from-transparent via-indigo-200/70 to-transparent sm:h-52"
                animate={
                  shouldReduceMotion
                    ? { opacity: [0.35, 0.8, 0.35] }
                    : { scaleY: [0.82, 1.1, 0.82], opacity: [0.3, 0.9, 0.3] }
                }
                transition={{
                  duration: 2.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.24,
                }}
              />
            </div>

            <div className="w-full max-w-2xl">
              <div className="mb-4 flex items-center justify-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.42em] text-white/35">
                <span>BOOT SEQUENCE</span>
                <div className="h-px w-12 bg-white/12 sm:w-16" />
                <span
                  className={
                    phaseIndex === BOOT_PHASES.length - 1
                      ? "text-cyan-200/90"
                      : "text-indigo-100/65"
                  }
                >
                  {statusLabel}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentPhase.label}
                  className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-[clamp(2rem,6vw,4.4rem)] font-black uppercase tracking-[0.12em] text-transparent drop-shadow-[0_0_24px_rgba(103,232,249,0.18)]"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.18 : 0.32,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {currentPhase.label}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentPhase.detail}
                  className="mt-4 text-sm font-medium uppercase tracking-[0.28em] text-white/55 sm:text-[0.94rem]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: shouldReduceMotion ? 0.16 : 0.26 }}
                >
                  {currentPhase.detail}
                </motion.p>
              </AnimatePresence>

              <div className="mt-8 rounded-full border border-white/10 bg-white/[0.03] p-2 backdrop-blur-md">
                <div className="relative h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,0.92),rgba(129,140,248,0.9),rgba(255,255,255,0.96))]"
                    initial={{ width: "12%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{
                      duration: shouldReduceMotion ? 0.22 : 0.38,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                  <motion.div
                    className="absolute inset-y-0 w-24 rounded-full bg-white/30 blur-xl"
                    animate={{ left: `calc(${progress}% - 3rem)` }}
                    transition={{
                      duration: shouldReduceMotion ? 0.22 : 0.38,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {MODULES.map((module, index) => {
                  const isActive = index <= phaseIndex;

                  return (
                    <motion.div
                      key={module}
                      className={`rounded-full border px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.36em] backdrop-blur-md transition-colors ${
                        isActive
                          ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100"
                          : "border-white/10 bg-white/[0.03] text-white/35"
                      }`}
                      animate={
                        shouldReduceMotion || !isActive
                          ? { opacity: isActive ? 1 : 0.7 }
                          : { opacity: [0.75, 1, 0.75], y: [0, -2, 0] }
                      }
                      transition={{
                        duration: 1.8,
                        repeat: isActive && !shouldReduceMotion ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    >
                      {module}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
