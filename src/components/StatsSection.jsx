"use client";

import { Briefcase, Factory, Magnifier, Star } from "@gravity-ui/icons";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <Briefcase className="h-10 w-10 text-violet-500" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <Factory className="h-10 w-10 text-cyan-500" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <Magnifier className="h-10 w-10 text-green-500" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="h-10 w-10 text-yellow-400" />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative py-25">
      {/* Background Globe */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/globe.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[25%] h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-medium leading-relaxed text-white/90">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>
          <motion.p
            animate={{
              y: [0, -12, 0],
              rotate: [-45, -42, -45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mt-4 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2"
          >
            Remote Jobs
          </motion.p>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="inline-block mt-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2"
          >
            On-site Jobs
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateX: 3,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/30"
            >
              {/* Card Glow */}
              <div className="absolute bottom-0 right-0 h-30 w-30 rounded-full bg-white/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

              {/* Icon */}
              <div className="relative z-10 text-white/90">{stat.icon}</div>

              {/* Number with pop-in animation */}
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  delay: stat.id * 0.1,
                }}
                className="relative z-10 mt-10 text-5xl font-bold tracking-tight"
              >
                {stat.value}
              </motion.h3>

              {/* Label */}
              <p className="relative z-10 mt-4 text-base text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
