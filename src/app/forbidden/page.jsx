"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Particle Background Component ---
const Particles = () => {
  // Generate a static array of random particles for the background
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
    size: Math.random() * 3 + 1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-0 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"
          style={{ width: p.size, height: p.size, left: p.left }}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: ["0vh", "-100vh"],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// --- Main Page Component ---
const DarkForbiddenPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-slate-950 font-sans overflow-hidden py-20">
      {/* Deep Background Glowing Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Particles */}
      <Particles />

      {/* Main Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-lg w-full mx-4 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 text-center shadow-2xl shadow-black"
      >
        {/* Holographic Lock Container */}
        <div className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center">
          {/* Spinning Dashed Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-red-500/30"
          />

          {/* Continuous Pulsing Inner Core */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 rounded-full bg-red-500/20 blur-md"
          />

          {/* 3D Entering Lock Icon */}
          <motion.div
            initial={{ rotateY: 90, scale: 0 }}
            animate={{ rotateY: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.4,
            }}
            className="relative z-10 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </motion.div>
        </div>

        {/* Staggered Typography */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500 mb-2 drop-shadow-lg"
        >
          403
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-2xl font-bold text-slate-200 mb-4 tracking-widest uppercase text-sm"
        >
          System Override Denied
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-slate-400 mb-10 leading-relaxed font-mono text-sm"
        >
          Access to this sector is strictly prohibited. Your clearance level is
          insufficient. Continued attempts to bypass protocols will be logged.
        </motion.p>

        {/* Advanced Glowing Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/SignInPage")}
            className="px-6 py-3 bg-slate-800 text-slate-300 font-medium rounded-xl border border-slate-700 transition-colors duration-300"
          >
            Sign In
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(239, 68, 68, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl border border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300"
          >
            Return to Home
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DarkForbiddenPage;
