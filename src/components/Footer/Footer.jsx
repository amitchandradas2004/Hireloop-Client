"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const columnVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const bottomBarVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.6,
      },
    },
  };

  const footerLinks = {
    Product: [
      "Job Discovery",
      "AI Career Assistant",
      "Companies",
      "Salary Data",
    ],
    Navigation: ["Help Center", "Career Library", "Contact", "For Recruiters"],
    Resources: ["Blog", "Newsroom", "Brand Guidelines", "Privacy Policy"],
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-linear(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Animated Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative container mx-auto px-6 py-16"
      >
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            variants={columnVariants}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/" className="text-3xl font-bold text-white">
                  Hire<span className="text-violet-500">Nest</span>
                </Link>
              </motion.div>

              <p className="mt-8 max-w-sm leading-relaxed text-zinc-400">
                The AI-native career platform. Built for people who take their
                work seriously.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {[
                {
                  icon: <FaFacebookF />,
                  href: "#",
                },
                {
                  icon: <FaPinterestP />,
                  href: "#",
                  active: true,
                },
                {
                  icon: <FaLinkedinIn />,
                  href: "#",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Link
                    href={social.href}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
                      social.active
                        ? "bg-violet-600 text-white"
                        : "bg-white/5 text-zinc-300 hover:bg-violet-600 hover:text-white"
                    }`}
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product */}
          <motion.div variants={columnVariants}>
            <h3 className="mb-6 text-xl font-semibold text-violet-500">
              Product
            </h3>

            <ul className="space-y-4">
              {footerLinks.Product.map((item) => (
                <li key={item}>
                  <motion.div whileHover={{ x: 6 }}>
                    <Link
                      href="#"
                      className="text-zinc-400 transition hover:text-white"
                    >
                      {item}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={columnVariants}>
            <h3 className="mb-6 text-xl font-semibold text-violet-500">
              Navigation
            </h3>

            <ul className="space-y-4">
              {footerLinks.Navigation.map((item) => (
                <li key={item}>
                  <motion.div whileHover={{ x: 6 }}>
                    <Link
                      href="#"
                      className="text-zinc-400 transition hover:text-white"
                    >
                      {item}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={columnVariants}>
            <h3 className="mb-6 text-xl font-semibold text-violet-500">
              Resources
            </h3>

            <ul className="space-y-4">
              {footerLinks.Resources.map((item) => (
                <li key={item}>
                  <motion.div whileHover={{ x: 6 }}>
                    <Link
                      href="#"
                      className="text-zinc-400 transition hover:text-white"
                    >
                      {item}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={bottomBarVariants}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row"
        >
          <p>© {new Date().getFullYear()} HireNest. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
