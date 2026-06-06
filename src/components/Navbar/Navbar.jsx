"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = useSession();
  // console.log("Session data in Navbar:", session, "ispending:", isPending);
  const user = session?.user;

  const handleSignOut = async () => {
    await signOut();
    window.location.reload();
  };

  const navLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Companies", href: "/companies" },
    { label: "Pricing", href: "/pricing" },
  ];

  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const navContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="show"
      className="w-full z-50 px-4 py-3 fixed top-0 bg-black/20 backdrop-blur-2xl border-b border-slate-800 shadow"
    >
      <header className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between">
          {/* Navbar Glow */}
          <div className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-violet-500/5 via-white/5 to-cyan-500/5 blur-xl" />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Hire<span className="text-violet-500">loop</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <motion.ul
              variants={navContainerVariants}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl"
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={navItemVariants}>
                  <Link
                    href={link.href}
                    className="group relative rounded-full px-5 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white"
                  >
                    {link.label}

                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-violet-500 transition-all duration-300 group-hover:w-3/4" />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            {user ? (
              <>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-white"
                >
                  Hi, {user.name}!
                </motion.span>

                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  className="text-white"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/SignInPage"
                  className="font-medium text-violet-500 transition hover:opacity-80"
                >
                  Sign In
                </Link>
              </motion.div>
            )}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link
                href="/SignUpPage"
                className="rounded-xl bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-700"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={{
                rotate: isMenuOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="mt-4 rounded-3xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl lg:hidden"
            >
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-gray-300 transition hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                <li className="border-t border-white/10 pt-5">
                  {user ? (
                    <Button
                      onClick={handleSignOut}
                      variant="ghost"
                      className="w-full text-white"
                    >
                      Sign Out
                    </Button>
                  ) : (
                    <Link
                      href="/SignInPage"
                      className="block text-violet-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                  )}
                </li>

                <li>
                  <Link
                    href="/SignUpPage"
                    className="block rounded-xl bg-violet-600 px-4 py-3 text-center font-medium text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.nav>
  );
}
