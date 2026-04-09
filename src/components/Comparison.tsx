"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const otherAgencies = [
  "Single-channel — email only, competing with every other cold email in the inbox",
  "No LinkedIn, no calling. Prospects see one touchpoint and ignore it",
  "Clay + agency stack costs $3-5K/mo in tooling alone before you add labor",
  "Generic copy from someone who googled your company for 30 seconds",
  "$12K/month for a full-time SDR who takes 3 months to ramp",
];

const us = [
  "Multithreaded — email, LinkedIn, and cold calls hitting the same prospect in coordinated sequences",
  "Prospects see your name 3+ times across channels before they reply. Conversion is 3-5x single-channel",
  "10K hyper-personalized emails/week plus LinkedIn + calls — fraction of Clay + agency costs",
  "Proprietary AI personalization. Every touchpoint reads like a human who understands the prospect",
  "Embedded 20hrs/week — one person, full stack, real-time dashboard, with receipts",
];

export default function Comparison() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-green-600">
            Compare
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Agencies vs. Fractional GTM Engineer
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8"
          >
            <h3 className="mb-6 text-lg font-semibold text-slate-400">Typical Agency / Full-Time SDR</h3>
            <ul className="space-y-4">
              {otherAgencies.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <X size={12} className="text-red-500" />
                  </div>
                  <span className="text-sm text-slate-500">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border-2 border-green-300 bg-green-50 p-6 shadow-lg shadow-green-500/10 md:p-8"
          >
            <h3 className="mb-6 text-lg font-semibold text-green-700">Your Fractional GTM Engineer</h3>
            <ul className="space-y-4">
              {us.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-200">
                    <Check size={12} className="text-green-700" />
                  </div>
                  <span className="text-sm font-medium text-green-800">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
