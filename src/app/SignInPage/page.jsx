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
import { Eye, EyeSlash, At, ShieldKeyhole } from "@gravity-ui/icons";
import { signIn } from "@/lib/auth-client";
import { motion, AnimatePresence } from "framer-motion";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);
    try {
      const { data, error: authError } = await signIn.email({
        email,
        password,
        callbackURL: "/",
      });
      if (authError) {
        setError(authError.message || "Invalid email or password.");
      } else {
        setSuccess("Signed in successfully! Redirecting...");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError("An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-25 bg-linear-to-br from-black-950 via-slate-950 to-black-900">
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-120 w-120 rounded-full bg-violet-600/40 blur-[120px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-100 w-100 rounded-full bg-indigo-500/30 blur-[100px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-75 w-75 rounded-full bg-fuchsia-600/20 blur-[80px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 p-6">
          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-white/10 mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Welcome back
            </h1>
            <p className="text-sm text-white/60">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSignin}
            className="flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Email */}
            <motion.div variants={itemVariants}>
              <TextField
                isRequired
                name="email"
                type="email"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-sm font-medium text-white/80">
                  Email Address
                </Label>
                <InputGroup className="flex items-center gap-2 border border-white/20 rounded-xl px-3 bg-white/10 backdrop-blur-sm focus-within:border-violet-400/60 focus-within:bg-white/15 transition-all">
                  <At className="text-white/40 pointer-events-none" size={16} />
                  <Input
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent py-2 text-sm outline-none border-none text-white placeholder:text-white/30"
                  />
                </InputGroup>
              </TextField>
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants}>
              <TextField
                isRequired
                name="password"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-sm font-medium text-white/80">
                  Password
                </Label>
                <InputGroup className="flex items-center gap-2 border border-white/20 rounded-xl px-3 bg-white/10 backdrop-blur-sm focus-within:border-violet-400/60 focus-within:bg-white/15 transition-all">
                  <ShieldKeyhole
                    className="text-white/40 pointer-events-none"
                    size={16}
                  />
                  <Input
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent py-2 text-sm outline-none border-none text-white placeholder:text-white/30"
                  />
                  <button
                    className="focus:outline-none text-white/40 hover:text-white/80 transition"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                  >
                    {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
                  </button>
                </InputGroup>
              </TextField>
            </motion.div>

            {/* Status badges */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3.5 text-xs font-medium rounded-xl bg-red-500/20 text-red-300 border border-red-400/30 backdrop-blur-sm">
                    <span className="font-semibold">Error:</span> {error}
                  </div>
                </motion.div>
              )}
              {success && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-sm">
                    <span className="font-semibold">Success:</span> {success}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <motion.div variants={itemVariants} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                color="primary"
                className="w-full font-semibold rounded-xl text-sm h-12 bg-violet-600/90 hover:bg-violet-500 backdrop-blur-sm border border-violet-400/30 text-white transition-all"
                isLoading={isLoading}
                isDisabled={isLoading}
              >
                Sign In
              </Button>
            </motion.div>

            {/* Footer link */}
            <motion.div variants={itemVariants}>
              <div className="text-center pt-4 border-t border-white/10 mt-2 text-sm text-white/50">
                New to HireLoop?{" "}
                <Link
                  href="/SignUpPage"
                  className="font-medium cursor-pointer text-sm text-violet-300 hover:text-violet-200 transition-colors"
                >
                  Create an account
                </Link>
              </div>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
