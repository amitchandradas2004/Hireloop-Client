"use client";
import React from "react";
import { motion } from "framer-motion";
import { LockKeyhole, ArrowLeft, LogIn } from "lucide-react";

const UnauthorizedDark = () => {
  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const lockVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { delay: 0.6, duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 my-20">
      <motion.div
        className="max-w-md w-full bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Lock Icon - Using opacity for a subtle glow effect in dark mode */}
        <motion.div
          className="mx-auto w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500 border border-red-500/20"
          variants={lockVariants}
          animate={["visible", "shake"]}
        >
          <LockKeyhole size={48} strokeWidth={2} />
        </motion.div>

        {/* Error Code & Title */}
        <motion.div variants={itemVariants}>
          <span className="text-sm font-bold tracking-widest text-red-400 uppercase mb-2 block">
            401 Error
          </span>
          <h1 className="text-3xl font-extrabold text-white mb-4">
            Access Denied
          </h1>
        </motion.div>

        {/* Meaningful Message */}
        <motion.div variants={itemVariants}>
          <p className="text-gray-300 mb-8 leading-relaxed">
            It looks like you do not have the proper permissions to view this
            page. This area is restricted to authorized personnel only. Please
            log in with an authorized account to continue.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-gray-200 font-semibold rounded-lg hover:bg-gray-600 transition-colors w-full sm:w-auto"
          >
            <ArrowLeft size={18} />
            Go Back
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/SignInPage")}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors w-full sm:w-auto shadow-lg shadow-red-500/20"
          >
            <LogIn size={18} />
            Login Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Subtle Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-8 text-sm text-gray-500"
      >
        Think this is a mistake?{" "}
        <a
          href="/support"
          className="text-red-400 hover:text-red-300 transition-colors"
        >
          Contact Support
        </a>
      </motion.p>
    </div>
  );
};

export default UnauthorizedDark;
