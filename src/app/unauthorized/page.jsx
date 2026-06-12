"use client";
import React from "react";
import { motion } from "framer-motion";
import { LockKeyhole, ArrowLeft, LogIn, ShieldAlert } from "lucide-react";

const UnauthorizedDark = () => {
  // --- Framer Motion Variants ---

  // Main card staggered reveal
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Individual item fade & slide
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Lock icon spring and shake
  const lockVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    shake: {
      x: [0, -8, 8, -8, 8, 0],
      transition: { delay: 0.8, duration: 0.4 },
    },
  };

  // Continuous pulse rings for the lock background
  const pulseVariants = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: {
      scale: 1.8,
      opacity: 0,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#2f2d2d] flex flex-col items-center justify-center  overflow-hidden py-20">
      {/* --- Ambient Background Effects --- */}
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />
      {/* Glowing Red Orb in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- Main Content Card --- */}
      <motion.div
        className="relative max-w-md w-full bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-[0_0_40px_-10px_rgba(220,38,38,0.15)] p-8 sm:p-10 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -5, transition: { duration: 0.4 } }}
      >
        {/* Animated Lock & Pulse Rings */}
        <div className="relative mx-auto w-24 h-24 mb-8 flex items-center justify-center">
          {/* Pulsing rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-red-500/30"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-red-500/20"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1,
            }}
          />

          {/* Solid lock container */}
          <motion.div
            className="relative w-full h-full bg-linear-to-b from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-red-500 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] border border-gray-700/50"
            variants={lockVariants}
            animate={["visible", "shake"]}
          >
            <LockKeyhole
              size={40}
              strokeWidth={2}
              className="drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
            />
          </motion.div>
        </div>

        {/* Error Code & Title */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <ShieldAlert size={16} className="text-red-400" />
            <span className="text-xs font-bold tracking-[0.2em] text-red-400 uppercase">
              Error 401
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-white to-gray-400 mb-4 tracking-tight">
            Access Denied
          </h1>
        </motion.div>

        {/* Meaningful Message */}
        <motion.div variants={itemVariants}>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
            It looks like you do not have the proper permissions to view this
            page. This area is restricted to{" "}
            <span className="text-gray-200 font-medium">
              authorized personnel only
            </span>
            . Please log in with an authorized account to continue.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(75, 85, 99, 0.8)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => (window.location.href = "/")}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-800 border border-gray-700 text-gray-300 font-semibold rounded-xl transition-colors w-full sm:w-auto hover:text-white"
          >
            <ArrowLeft size={18} />
            Go Back
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px -5px rgba(239,68,68,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => (window.location.href = "/SignInPage")}
            className="relative flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl transition-all w-full sm:w-auto overflow-hidden group"
          >
            {/* Button subtle shine effect */}
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <LogIn size={18} className="relative z-10" />
            <span className="relative z-10">Login Now</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Subtle Footer */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-10 text-sm text-gray-500 z-10"
      >
        Think this is a mistake?{" "}
        <a
          href="/support"
          className="text-gray-400 hover:text-white underline decoration-gray-600 hover:decoration-gray-400 underline-offset-4 transition-all"
        >
          Contact Support
        </a>
      </motion.p>
    </div>
  );
};

export default UnauthorizedDark;
