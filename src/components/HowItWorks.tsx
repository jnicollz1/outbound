"use client";

import { motion } from "framer-motion";
import { ClipboardList, Wrench, Rocket, Eye } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "30-Min Call",
    description:
      "Share your ICP, product, and growth goals. No deck, no proposal — just a conversation between two people who understand the problem.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Infrastructure & Calibration",
    description:
      "Month one: I set up sending infrastructure, ICP research, verified prospect lists, AI personalization systems, and multithreaded sequence logic across email, LinkedIn, and phone. Built from scratch.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Meetings Start Booking",
    description:
      "Month two: all three channels fire in coordinated sequences. Email on day 1, LinkedIn on day 3, warm call on day 5. Same prospect, multiple touches, tuned weekly on real response data.",
  },
  {
    icon: Eye,
    number: "04",
    title: "Full Visibility, Always",
    description:
      "Your real-time dashboard shows every metric — open rates, reply rates, conversion by ICP segment, meetings booked. Cancel anytime.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-green-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-green-600">
            Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Here&apos;s How It Works
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-2xl border border-green-200/80 bg-white p-6 shadow-sm"
            >
              <span className="mb-4 inline-block rounded-lg bg-green-500 px-3 py-1 text-lg font-bold text-white">
                {step.number}
              </span>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <step.icon size={20} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden h-px w-8 bg-green-200 lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#calendly-placeholder"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-green-600 hover:shadow-xl"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
