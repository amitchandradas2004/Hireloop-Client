"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Factory, Star } from "lucide-react";

// ─── Shared animation helpers ────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const pillVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "backOut", delay: 0.65 + i * 0.09 },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const trendingTags = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

const stats = [
  {
    id: 1,
    icon: <Briefcase className="h-9 w-9 text-violet-400" />,
    value: "50K",
    label: "Active Jobs",
    accent: "violet",
  },
  {
    id: 2,
    icon: <Factory className="h-9 w-9 text-cyan-400" />,
    value: "12K",
    label: "Companies",
    accent: "cyan",
  },
  {
    id: 3,
    icon: <Search className="h-9 w-9 text-emerald-400" />,
    value: "2M",
    label: "Job Seekers",
    accent: "emerald",
  },
  {
    id: 4,
    icon: <Star className="h-9 w-9 text-amber-400" />,
    value: "97%",
    label: "Satisfaction Rate",
    accent: "amber",
  },
];

const accentGlow = {
  violet: "group-hover:bg-violet-500/25",
  cyan: "group-hover:bg-cyan-500/25",
  emerald: "group-hover:bg-emerald-500/25",
  amber: "group-hover:bg-amber-500/25",
};

const accentBorder = {
  violet: "hover:border-violet-500/40",
  cyan: "hover:border-cyan-500/40",
  emerald: "hover:border-emerald-500/40",
  amber: "hover:border-amber-500/40",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function HireLoopFullPage() {
  return (
    <main
      className="relative min-h-screen bg-[#080810] overflow-hidden"
      style={{ fontFamily: "'Sora', 'Inter', sans-serif" }}
    >
      {/* ── Globe background – spans the entire page ──────────────────────── */}
      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/globe.png')", opacity: 0.18 }}
      />
      {/* radial vignette so globe fades toward edges */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_30%,#080810_100%)]" />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-28">
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-700/10 blur-[140px]" />
          <div className="absolute left-[20%] bottom-[25%] w-[320px] h-[320px] rounded-full bg-violet-600/8 blur-[100px]" />
          <div className="absolute right-[18%] top-[28%] w-[260px] h-[260px] rounded-full bg-blue-600/8 blur-[90px]" />
        </div>

        {/* Fine grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="relative mb-10 flex items-center gap-3"
        >
          <span className="hidden sm:block w-24 h-px bg-gradient-to-r from-transparent to-white/12" />
          <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-md">
            <span className="text-base">💼</span>
            <span className="font-mono text-sm font-bold tracking-wider text-white">
              50,000+
            </span>
            <span className="text-[11px] font-semibold tracking-[0.22em] text-white/40 uppercase">
              New Jobs This Month
            </span>
          </div>
          <span className="hidden sm:block w-24 h-px bg-gradient-to-l from-transparent to-white/12" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="max-w-3xl text-center text-5xl sm:text-6xl md:text-[72px] font-extrabold leading-[1.04] tracking-[-0.02em] text-white"
        >
          Find Your Dream
          <br />
          Job Today
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-7 max-w-lg text-center text-[15px] sm:text-base text-white/40 leading-relaxed"
        >
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </motion.p>

        {/* Search bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-12 w-full max-w-2xl"
        >
          <div className="flex items-center rounded-2xl border border-white/[0.09] bg-white/[0.04] p-1.5 backdrop-blur-lg shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_64px_rgba(0,0,0,0.6)]">
            {/* Job input */}
            <div className="flex flex-1 items-center gap-3 px-4 py-3 min-w-0">
              <Search className="shrink-0 text-white/25" size={17} />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/28 outline-none"
              />
            </div>
            {/* Divider */}
            <div className="w-px h-7 bg-white/10 shrink-0" />
            {/* Location input */}
            <div className="flex flex-1 items-center gap-3 px-4 py-3 min-w-0">
              <MapPin className="shrink-0 text-white/25" size={17} />
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/28 outline-none"
              />
            </div>
            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="shrink-0 rounded-xl bg-indigo-600 p-3.5 text-white shadow-lg shadow-indigo-700/35 hover:bg-indigo-500 transition-colors duration-200"
            >
              <Search size={17} />
            </motion.button>
          </div>
        </motion.div>

        {/* Trending tags */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
        >
          <span className="text-sm text-white/28">Trending Position</span>
          {trendingTags.map((tag, i) => (
            <motion.button
              key={tag}
              variants={pillVariant}
              initial="hidden"
              animate="show"
              custom={i}
              whileHover={{
                scale: 1.06,
                borderColor: "rgba(255,255,255,0.22)",
              }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[13px] text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 px-4">
        {/* Stronger globe glow at centre of this section */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-violet-600/25 blur-[150px]"
        />

        {/* Top fade from hero into this section */}

        {/* Bottom fade out */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080810] to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Heading block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-2xl text-center"
          >
            {/* Eyebrow */}
            <p className="mb-5 text-[11px] font-semibold tracking-[0.28em] text-violet-400/80 uppercase">
              Trusted Worldwide
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold leading-snug text-white tracking-tight">
              Assisting over{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                15,000
              </span>{" "}
              job seekers
              <br />
              find their dream positions.
            </h2>

            {/* Floating job-type pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <motion.span
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-5 py-2 text-sm text-violet-300 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                Remote Jobs
              </motion.span>
              <motion.span
                animate={{ y: [0, -14, 0], rotate: [2, -2, 2] }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                On-site Jobs
              </motion.span>
              <motion.span
                animate={{ y: [0, -8, 0], rotate: [-1, 3, -1] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.1,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-300 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Hybrid
              </motion.span>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 ${accentBorder[stat.accent]}`}
              >
                {/* Inner card shimmer */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.04),transparent_60%)]" />

                {/* Corner glow */}
                <div
                  className={`absolute -bottom-6 -right-6 h-32 w-32 rounded-full blur-3xl transition-colors duration-500 bg-white/5 ${accentGlow[stat.accent]}`}
                />

                {/* Icon */}
                <div className="relative z-10">{stat.icon}</div>

                {/* Value */}
                <motion.h3
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    delay: stat.id * 0.08,
                  }}
                  className="relative z-10 mt-10 text-5xl font-extrabold tracking-tight text-white"
                >
                  {stat.value}
                </motion.h3>

                {/* Label */}
                <p className="relative z-10 mt-3 text-sm text-white/45 font-medium">
                  {stat.label}
                </p>

                {/* Bottom line accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + stat.id * 0.1 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
