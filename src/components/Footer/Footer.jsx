import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black container mx-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative mx-auto  px-6 py-10">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="text-2xl lg:text-3xl font-bold text-white"
              >
                Hire<span className="text-violet-500">Nest</span>
              </Link>

              <p className="mt-8 max-w-sm leading-relaxed text-zinc-400">
                The AI-native career platform. Built for people who take their
                work seriously.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-300 transition hover:bg-violet-600 hover:text-white"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:scale-105"
              >
                <FaPinterestP />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-300 transition hover:bg-violet-600 hover:text-white"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 text-xl lg:text-[22px] font-semibold text-violet-500">
              Product
            </h3>

            <ul className="space-y-4 text-xs lg:text-xl">
              <li>
                <Link
                  href="/jobs"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Job Discovery
                </Link>
              </li>

              <li>
                <Link
                  href="/ai-assistant"
                  className="text-zinc-400 transition hover:text-white"
                >
                  AI Career Assistant
                </Link>
              </li>

              <li>
                <Link
                  href="/companies"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Companies
                </Link>
              </li>

              <li>
                <Link
                  href="/salary-insights"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Salary Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-xl lg:text-[22px] font-semibold text-violet-500">
              Navigation
            </h3>

            <ul className="space-y-4 text-xs lg:text-xl">
              <li>
                <Link
                  href="/help-center"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  href="/career-library"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Career Library
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/recruiters"
                  className="text-zinc-400 transition hover:text-white"
                >
                  For Recruiters
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-xl lg:text-[22px] font-semibold text-violet-500">
              Resources
            </h3>

            <ul className="space-y-4 text-xs lg:text-xl">
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/newsroom"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Newsroom
                </Link>
              </li>

              <li>
                <Link
                  href="/guidelines"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Brand Guidelines
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-400 transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} HireNest. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
