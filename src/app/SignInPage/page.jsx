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
  // Form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI States
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

  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-25">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        <Card className="w-full p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
          {/* Header Container */}
          <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Welcome back
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form Body */}
          <motion.form
            onSubmit={handleSignin}
            className="flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <TextField
                isRequired
                name="email"
                type="email"
                className="flex flex-col gap-1.5"
              >
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
            <motion.div variants={itemVariants}>
              <TextField
                isRequired
                name="password"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Password
                </Label>
                <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                  <ShieldKeyhole
                    className="text-zinc-400 pointer-events-none"
                    size={16}
                  />
                  <Input
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                  />
                  <button
                    className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                    type="button"
                    onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                  >
                    {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
                  </button>
                </InputGroup>
              </TextField>
            </motion.div>

            {/* Dynamic Status Badges */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
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
                  <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                    <span className="font-semibold">Success:</span> {success}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Button */}
            <motion.div variants={itemVariants} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                color="primary"
                className="w-full font-semibold rounded-xl text-sm h-12 bg-violet-600 hover:bg-violet-700"
                isLoading={isLoading}
                isDisabled={isLoading}
              >
                Sign In
              </Button>
            </motion.div>

            {/* Navigation Option */}
            <motion.div variants={itemVariants}>
              <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                New to HireLoop?{" "}
                <Link
                  href="/SignUpPage"
                  className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400"
                >
                  Create an account
                </Link>
              </div>
            </motion.div>
          </motion.form>
        </Card>
      </motion.div>
    </div>
  );
}