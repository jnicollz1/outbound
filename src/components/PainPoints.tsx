"use client";

import { motion } from "framer-motion";

const pains = [
  {
    message:
      "We just raised our seed round. We need pipeline but we're not ready to hire a full-time sales person.",
  },
  {
    message:
      "We tried an agency — they only did email. No LinkedIn, no calls. Single-channel outbound into a crowded inbox. And the copy sounded like a VA wrote it.",
  },
  {
    message:
      "I'm spending 10 hours a week on outbound instead of shipping product and iterating on customer feedback.",
  },
];

const responses = [
  "You shouldn't hire a full-time SDR at your stage. I embed 20 hours a week as your fractional GTM engineer — half the capacity, a third the cost, zero ramp time.",
  "I run email, LinkedIn, and cold calls as one coordinated system — multithreaded sequences where a prospect sees your name across three channels before they ever reply. Proprietary tooling I built, not off-the-shelf platforms.",
  "Your dashboard shows every metric in real time — emails sent, opens, replies, meetings booked. Month one is infrastructure and calibration. Month two, meetings start booking.",
];

export default function PainPoints() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-green-600">
            We get it
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sound Familiar?
          </h2>
        </motion.div>

        <div className="space-y-8">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500">
                  F
                </div>
                <div className="max-w-lg rounded-2xl rounded-tl-sm border border-slate-200 bg-slate-50 px-5 py-3.5">
                  <p className="text-sm leading-relaxed text-slate-700">{pain.message}</p>
                </div>
              </div>

              <div className="flex items-start justify-end gap-3">
                <div className="max-w-lg rounded-2xl rounded-tr-sm border border-green-200 bg-green-50 px-5 py-3.5">
                  <p className="text-sm leading-relaxed text-green-800">{responses[i]}</p>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                  JN
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#dashboard"
            className="text-sm font-semibold text-green-600 transition-colors hover:text-green-700"
          >
            See the dashboard &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
