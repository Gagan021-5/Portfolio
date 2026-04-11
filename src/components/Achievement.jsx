import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "Winner (1st Prize)",
    organization: "Praxis 2.0 AI/ML Hackathon",
    year: "2026",
    description:
      "Secured first place among 400+ teams in a nationwide online competition.",
    stat: "400+",
    statLabel: "Teams Beaten",
    rank: "🥇",
    accentColor: "from-amber-400 to-yellow-500",
    glowColor: "rgba(251, 191, 36, 0.3)",
  },
  {
    title: "National Qualifier (Top 250)",
    organization: "Code Clash 2.0 National Hackathon",
    year: "2025",
    description:
      "Selected among the top 250 teams from 4000+ nationwide participants during the online round.",
    stat: "4000+",
    statLabel: "Participants",
    rank: "🏆",
    accentColor: "from-indigo-400 to-cyan-400",
    glowColor: "rgba(99, 102, 241, 0.3)",
  },
  {
    title: "SIH 2025 Shortlisted",
    organization: "Smart India Hackathon",
    year: "2025",
    description:
      "Cleared the internal college round and reached the top 45 teams advancing to the next stage.",
    stat: "Top 45",
    statLabel: "Teams Selected",
    rank: "🎯",
    accentColor: "from-emerald-400 to-teal-400",
    glowColor: "rgba(52, 211, 153, 0.3)",
  },
];

// --- Animated Counter ---
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

// --- Timeline Card ---
function TimelineCard({ achievement, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:gap-0 gap-4`}
    >
      {/* Card */}
      <motion.div
        className={`w-full md:w-[calc(50%-2rem)] ${
          isLeft ? "md:pr-0" : "md:pl-0"
        }`}
        initial={{
          opacity: 0,
          x: isLeft ? -60 : 60,
          y: 20,
        }}
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
        <div className="relative group">
          {/* Animated border glow on hover */}
          <div
            className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.accentColor} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`}
          />

          <div className="relative bg-[#0b1121]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl group-hover:border-white/20 transition-colors duration-300">
            {/* Top row: rank + year */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{achievement.rank}</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/10">
                {achievement.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
              {achievement.title}
            </h3>

            {/* Organization */}
            <p className="text-sm font-medium text-cyan-400/80 mb-4">
              {achievement.organization}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {achievement.description}
            </p>

            {/* Stat counter */}
            <div className="pt-4 border-t border-white/5 flex items-end gap-2">
              <span
                className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${achievement.accentColor}`}
              >
                <AnimatedCounter value={achievement.stat} />
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-medium pb-1">
                {achievement.statLabel}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Center Timeline Dot - Desktop */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 flex-col items-center">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-2 rounded-full"
            style={{
              boxShadow: `0 0 20px ${achievement.glowColor}`,
            }}
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
          {/* Inner dot */}
          <div
            className={`w-4 h-4 rounded-full bg-gradient-to-r ${achievement.accentColor} border-4 border-[#030712] shadow-lg`}
          />
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
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
    <div className="py-20 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical connector line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px]">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-indigo-500/40 via-cyan-500/20 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              animate={isTimelineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Mobile connector line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[2px]">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-indigo-500/40 via-cyan-500/20 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              animate={isTimelineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-12 md:gap-16">
            {achievements.map((achievement, index) => (
              <TimelineCard
                key={achievement.title}
                achievement={achievement}
                index={index}
                isLast={index === achievements.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
