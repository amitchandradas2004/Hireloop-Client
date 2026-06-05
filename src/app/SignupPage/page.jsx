"use client";

import { useState } from "react";
import {
  Button,
  Link,
  TextField,
  Label,
  InputGroup,
  Input,
  Description,
  Radio,
  RadioGroup,
} from "@heroui/react";
import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
import { signUp } from "@/lib/auth-client";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.2, ease: "easeOut" },
  },
};

const formVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.35 },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

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

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("seeker");

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
        role,
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
        className="relative z-10 w-full max-w-md"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 p-6">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-white/10 mb-6 text-center"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Create an account
            </h1>
            <p className="text-sm text-white/60">
              Fill in the fields below to get started
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSignup}
            className="flex flex-col gap-5"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name Field */}
            <motion.div variants={fieldVariants}>
              <TextField
                isRequired
                name="name"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-sm font-medium text-white/80">
                  Name
                </Label>
                <InputGroup className="flex items-center gap-2 border border-white/20 rounded-xl px-3 bg-white/10 backdrop-blur-sm focus-within:border-violet-400/60 focus-within:bg-white/15 transition-all">
                  <Person
                    className="text-white/40 pointer-events-none"
                    size={16}
                  />
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent py-2 text-sm outline-none border-none text-white placeholder:text-white/30"
                  />
                </InputGroup>
              </TextField>
            </motion.div>

            {/* Email Field */}
            <motion.div variants={fieldVariants}>
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

            {/* Password Field */}
            <motion.div variants={fieldVariants}>
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
                    placeholder="Choose a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent py-2 text-sm outline-none border-none text-white placeholder:text-white/30"
                  />
                  <motion.button
                    className="focus:outline-none text-white/40 hover:text-white/80 transition"
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
            {/* {role selection} */}
            <div className="flex flex-col gap-4">
              <Label>Select Role</Label>
              <RadioGroup
                onChange={(value) => setRole(value)}
                defaultValue="seeker"
                name="role"
                orientation="horizontal"
              >
                <Radio value="seeker">
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  <Radio.Content>
                    <Label>Job Seeker</Label>
                  </Radio.Content>
                </Radio>
                <Radio value="recruiter">
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  <Radio.Content>
                    <Label>Recruiter</Label>
                  </Radio.Content>
                </Radio>
              </RadioGroup>
            </div>
            {/* Status Badges */}
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
                  <div className="p-3.5 text-xs font-medium rounded-xl bg-red-500/20 text-red-300 border border-red-400/30 backdrop-blur-sm">
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
                  <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-sm">
                    <span className="font-semibold">Success:</span> {success}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.div
              variants={fieldVariants}
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Button
                type="submit"
                color="primary"
                className="w-full font-semibold rounded-xl text-sm h-12 bg-violet-600/90 hover:bg-violet-500 backdrop-blur-sm border border-violet-400/30 text-white transition-all"
                isLoading={isLoading}
                isDisabled={isLoading}
              >
                Sign Up
              </Button>
            </motion.div>

            {/* Footer link */}
            <motion.div variants={fieldVariants}>
              <div className="text-center pt-4 border-t border-white/10 mt-2 text-sm text-white/50">
                Already have an account?{" "}
                <Link
                  href="/SignInPage"
                  className="font-medium cursor-pointer text-sm text-violet-300 hover:text-violet-200 transition-colors"
                >
                  Sign in instead
                </Link>
              </div>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
