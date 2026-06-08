"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const { data: session } = useSession();
  const user = session?.user;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const handleSignOut = async () => {
    await signOut();
    window.location.reload();
  };

  const navLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Companies", href: "/dashboard/recruiter/company" },
    { label: "Recruiter", href: "/dashboard/recruiter" },
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
      className="fixed top-0 z-50 w-full border-b border-slate-800 bg-black/50 px-4 py-3 shadow backdrop-blur-2xl"
    >
      <header
        ref={menuRef}
        className="mx-auto flex max-w-7xl items-center justify-between"
      >
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
            </>
          ) : (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.99 }}>
              <Link href="/SignUpPage" onClick={() => setIsMenuOpen(false)}>
                <Button className="block rounded-2xl bg-violet-600 font-bold   transition-all hover:bg-violet-800 w-30">
                  Get Started
                </Button>{" "}
              </Link>
            </motion.div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            animate={{
              rotate: isMenuOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-lg shadow-violet-900/20"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </motion.div>
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute right-4 top-17 z-50 w-[85%] max-w-sm rounded-3xl border border-white/10 bg-black/90 p-5 backdrop-blur-2xl shadow-2xl shadow-violet-900/20 lg:hidden"
            >
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <motion.li key={link.href} whileHover={{ x: 2 }}>
                    <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                      <Button className="flex items-center justify-center rounded-2xl  w-full transition-all bg-slate-800 hover:bg-slate-700/80">
                        {link.label}
                      </Button>
                    </Link>
                  </motion.li>
                ))}
                <li className="my-2 border-t border-white/10" />
                {user ? (
                  <li>
                    <Button
                      onClick={handleSignOut}
                      className="w-full bg-red-500/60 text-white hover:bg-red-500/80"
                    >
                      Sign Out
                    </Button>
                  </li>
                ) : (
                  <li>
                    <Link
                      href="/SignInPage"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button className="block border border-white/10 bg-white/10 hover:bg-white/15 transition-all w-full">
                        {" "}
                        Sign In
                      </Button>
                    </Link>
                  </li>
                )}
                <Link href="/SignUpPage" onClick={() => setIsMenuOpen(false)}>
                  <Button className="block rounded-2xl bg-violet-600 w-full font-medium   transition-all hover:bg-violet-800">
                    Get Started
                  </Button>{" "}
                </Link>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
