"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Companies", href: "/companies" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-5">
      <header className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/70 px-6 py-4 backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">
              Hire<span className="text-violet-500">Nest</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
            rounded-full
            px-5
            py-2
            text-sm
            font-medium
            text-white/80
            transition-all
            duration-300
            hover:bg-white/10
            hover:text-white
          "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/login"
              className="font-medium text-violet-500 transition hover:opacity-80"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-2 rounded-3xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="border-t border-white/10 pt-5">
                <Link
                  href="/login"
                  className="block text-violet-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="block rounded-xl bg-violet-600 px-4 py-3 text-center font-medium text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </nav>
  );
}
