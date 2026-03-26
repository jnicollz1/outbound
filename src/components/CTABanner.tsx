"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function CTABanner() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-green-500 to-green-600 px-8 py-16 text-center shadow-2xl shadow-green-500/25 md:px-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            You just raised your seed round.
            <br />
            You need pipeline, not a sales hire.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-green-100">
            Email, LinkedIn, and cold calls — coordinated into one multithreaded system.
            I build it, I run it, 20 hours a week embedded in your team. Cancel anytime.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:jake@jakeoutbound.com"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-green-700 shadow-lg transition-all hover:bg-green-50 hover:shadow-xl"
            >
              jake@jakeoutbound.com
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/jake-nicoll-91b32a26a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
