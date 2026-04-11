import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    title: "Winner (1st Prize)",
    organization: "Praxis 2.0 AI/ML Hackathon",
    year: "2026",
    description:
      "Secured first place among 400+ teams in a nationwide online competition.",
    stat: "400+",
    statLabel: "Teams Beaten",
    rank: "1st",
    accentColor: "from-amber-400 to-yellow-500",
    glowColor: "rgba(251, 191, 36, 0.3)",
    orgColor: "text-amber-300/90",
  },
  {
    title: "National Space Hackathon Finalist",
    organization: "Organized by IIT Delhi",
    year: "2026",
    description:
      "Finished in the top 10 among 750+ teams in the National Space Hackathon organized by IIT Delhi.",
    stat: "750+",
    statLabel: "Teams Participated",
    rank: "Top 10",
    accentColor: "from-cyan-300 via-sky-500 to-indigo-500",
    glowColor: "rgba(59, 130, 246, 0.35)",
    orgColor: "text-sky-300/90",
  },
  {
    title: "SIH 2025 Shortlisted",
    organization: "Smart India Hackathon",
    year: "2025",
    description:
      "Cleared the internal college round and reached the top 45 teams advancing to the next stage.",
    stat: "Top 45",
    statLabel: "Teams Selected",
    rank: "Top 45",
    accentColor: "from-emerald-400 to-teal-400",
    glowColor: "rgba(52, 211, 153, 0.3)",
    orgColor: "text-emerald-300/90",
  },
];

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(numericValue)) {
      setCount(value);
      return;
    }

    let current = 0;
    const step = Math.max(1, Math.floor(numericValue / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }
      setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const hasPlus = value.includes("+");
  const isTextOnly = isNaN(parseInt(value.replace(/\D/g, ""), 10));

  return (
    <span ref={ref} className="tabular-nums">
      {isTextOnly ? value : count}
      {!isTextOnly && hasPlus ? "+" : ""}
      {suffix}
    </span>
  );
}

function TimelineCard({ achievement, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex w-full items-center ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col gap-4 md:gap-0`}
    >
      <motion.div
        className={`w-full md:w-[calc(50%-2rem)] ${
          isLeft ? "md:pr-0" : "md:pl-0"
        }`}
        initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: isLeft ? -60 : 60, y: 20 }
        }
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="group relative">
          <div
            className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${achievement.accentColor} opacity-0 blur transition-opacity duration-500 group-hover:opacity-30`}
          />

          <div className="relative rounded-2xl border border-white/10 bg-[#0b1121]/80 p-6 shadow-2xl backdrop-blur-xl transition-colors duration-300 group-hover:border-white/20 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-semibold tracking-wide text-white">
                {achievement.rank}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-400">
                {achievement.year}
              </span>
            </div>

            <h3
              className={`mb-1 text-xl font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent sm:text-2xl ${achievement.accentColor}`}
            >
              {achievement.title}
            </h3>

            <p className={`mb-4 text-sm font-medium ${achievement.orgColor}`}>
              {achievement.organization}
            </p>

            <p className="mb-5 text-sm leading-relaxed text-gray-400">
              {achievement.description}
            </p>

            <div className="flex items-end gap-2 border-t border-white/5 pt-4">
              <span
                className={`bg-gradient-to-r bg-clip-text text-3xl font-extrabold text-transparent ${achievement.accentColor}`}
              >
                <AnimatedCounter value={achievement.stat} />
              </span>
              <span className="pb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                {achievement.statLabel}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 md:flex flex-col items-center">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            type: "spring",
            stiffness: 200,
          }}
        >
          <motion.div
            className="absolute -inset-2 rounded-full"
            style={{ boxShadow: `0 0 20px ${achievement.glowColor}` }}
            animate={
              isInView
                ? {
                    boxShadow: [
                      `0 0 10px ${achievement.glowColor}`,
                      `0 0 25px ${achievement.glowColor}`,
                      `0 0 10px ${achievement.glowColor}`,
                    ],
                  }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div
            className={`h-4 w-4 rounded-full border-4 border-[#030712] bg-gradient-to-r ${achievement.accentColor} shadow-lg`}
          />
        </motion.div>
      </div>

      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
}

const Achievement = () => {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-amber-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[120px]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">
            Achievements
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Milestones & Recognition
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Key competitive wins and national-level recognitions.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-[2px] -translate-x-1/2 md:block">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-indigo-500/40 via-cyan-500/20 to-transparent"
              initial={{ scaleY: 0 }}
              animate={isTimelineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="absolute left-6 top-0 bottom-0 w-[2px] md:hidden">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-indigo-500/40 via-cyan-500/20 to-transparent"
              initial={{ scaleY: 0 }}
              animate={isTimelineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {achievements.map((achievement, index) => (
              <TimelineCard
                key={achievement.title}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
