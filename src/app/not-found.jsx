"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  const floatingParticles = Array.from({ length: 12 });

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-hidden flex items-center justify-center font-sans py-10">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-150 h-150 rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Grid lines background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {floatingParticles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
          style={{
            left: `${8 + ((i * 8) % 88)}%`,
            top: `${10 + ((i * 13) % 80)}%`,
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* 404 glitch number */}
        <motion.div
          className="relative select-none mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="text-[11rem] md:text-[16rem] font-black leading-none tracking-tighter text-transparent"
            style={{
              WebkitTextStroke: "1.5px rgba(99,102,241,0.5)",
              fontFamily: "'Georgia', serif",
            }}
          >
            404
          </span>

          {/* Glitch layer 1 */}
          <motion.span
            className="absolute inset-0 text-[11rem] md:text-[16rem] font-black leading-none tracking-tighter text-indigo-500/20"
            style={{ fontFamily: "'Georgia', serif" }}
            animate={{ x: [-2, 2, -2], opacity: [0, 0.6, 0] }}
            transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3.5 }}
          >
            404
          </motion.span>

          {/* Glitch layer 2 */}
          <motion.span
            className="absolute inset-0 text-[11rem] md:text-[16rem] font-black leading-none tracking-tighter text-rose-500/15"
            style={{ fontFamily: "'Georgia', serif" }}
            animate={{ x: [2, -2, 2], opacity: [0, 0.5, 0] }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: 3.5,
              delay: 0.05,
            }}
          >
            404
          </motion.span>
        </motion.div>

        {/* Divider line */}
        <motion.div
          className="h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent mb-8"
          initial={{ width: 0 }}
          animate={{ width: "240px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />

        {/* Headline */}
        <motion.h1
          className="text-2xl md:text-3xl font-semibold text-white/90 mb-3 tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Page not found
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-white/40 text-base md:text-lg max-w-sm leading-relaxed mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Looks like this page wandered off into the void. Let&apos;s get you
          back on track.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link href="/">
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium cursor-pointer transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Go home
            </motion.span>
          </Link>

          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-white/60 hover:text-white/90 text-sm font-medium transition-colors duration-200 cursor-pointer bg-white/3"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.history.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Go back
          </motion.button>
        </motion.div>

        {/* Status badge */}
        <motion.div
          className="mt-12 flex items-center gap-2 text-xs text-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-rose-500"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Error 404 · Page does not exist
        </motion.div>
      </div>
    </div>
  );
}
