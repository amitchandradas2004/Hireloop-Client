"use client";

import { useState } from "react";
import {
  Card,
  Button,
  Link,
  TextField,
  Label,
  InputGroup,
  Input,
} from "@heroui/react";
import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
import { signUp } from "@/lib/auth-client";
import { motion, AnimatePresence } from "framer-motion";

// ─── Animation Variants ───────────────────────────────────────────────────────

// Card entrance: springs up from below with a subtle scale
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Header fades in slightly after card
const headerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.2, ease: "easeOut" },
  },
};

// Stagger container for form fields
const formVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.35,
    },
  },
};

// Each form field slides up and fades in
const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

// Status badge (error/success): expands from 0 height
const badgeVariants = {
  hidden: { opacity: 0, scaleY: 0.85, height: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    height: "auto",
    transition: { duration: 0.28, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scaleY: 0.85,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// ─────────────────────────────────────────────────────────────────────────────

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const { data, error: authError } = await signUp.email({
        email,
        password,
        name,
        callbackURL: "/",
      });

      if (authError) {
        setError(authError.message || "Something went wrong during signup.");
      } else {
        setSuccess("Account created successfully! Welcome.");
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError("An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-25">
      {/* Card entrance animation */}
      <motion.div
        className="w-full max-w-md"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="w-full p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">

          {/* Header */}
          <motion.div
            className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Create an account
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Fill in the fields below to get started
            </p>
          </motion.div>

          {/* Form — staggered field entrance */}
          <motion.form
            onSubmit={handleSignup}
            className="flex flex-col gap-5"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name Field */}
            <motion.div variants={fieldVariants}>
              <TextField isRequired name="name" className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Name
                </Label>
                <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                  <Person className="text-zinc-400 pointer-events-none" size={16} />
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                  />
                </InputGroup>
              </TextField>
            </motion.div>

            {/* Email Field */}
            <motion.div variants={fieldVariants}>
              <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email Address
                </Label>
                <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                  <At className="text-zinc-400 pointer-events-none" size={16} />
                  <Input
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                  />
                </InputGroup>
              </TextField>
            </motion.div>

            {/* Password Field */}
            <motion.div variants={fieldVariants}>
              <TextField isRequired name="password" className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Password
                </Label>
                <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                  <ShieldKeyhole className="text-zinc-400 pointer-events-none" size={16} />
                  <Input
                    type={isVisible ? "text" : "password"}
                    placeholder="Choose a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                  />
                  {/* Eye icon flips on toggle */}
                  <motion.button
                    className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                    whileTap={{ scale: 0.85, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={isVisible ? "slash" : "eye"}
                        initial={{ opacity: 0, rotate: -20, scale: 0.7 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 20, scale: 0.7 }}
                        transition={{ duration: 0.18 }}
                        style={{ display: "inline-flex" }}
                      >
                        {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                </InputGroup>
              </TextField>
            </motion.div>

            {/* Status Badges — animate in/out with height expansion */}
            <AnimatePresence initial={false}>
              {error && (
                <motion.div
                  key="error"
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ overflow: "hidden", originY: 0 }}
                >
                  <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
                    <span className="font-semibold">Error:</span> {error}
                  </div>
                </motion.div>
              )}

              {success && (
                <motion.div
                  key="success"
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ overflow: "hidden", originY: 0 }}
                >
                  <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                    <span className="font-semibold">Success:</span> {success}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button — press feedback */}
            <motion.div
              variants={fieldVariants}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                type="submit"
                color="primary"
                className="w-full font-semibold rounded-xl text-sm h-12 bg-violet-600 hover:bg-violet-700"
                isLoading={isLoading}
                isDisabled={isLoading}
              >
                Sign Up
              </Button>
            </motion.div>

            {/* Footer link */}
            <motion.div variants={fieldVariants}>
              <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Already have an account?{" "}
                <Link
                  href="/SignInPage"
                  className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400"
                >
                  Sign in instead
                </Link>
              </div>
            </motion.div>
          </motion.form>
        </Card>
      </motion.div>
    </div>
  );
}