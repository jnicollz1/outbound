"use client";

import { motion } from "framer-motion";
import { Target, Mail, Users, Network, Phone, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "Deep ICP Research",
    description:
      "I define your ideal customer profile down to title, tech stack, funding stage, and company size. I actually read your docs and understand what you build.",
  },
  {
    icon: Mail,
    title: "10K/Week Sending Infrastructure",
    description:
      "Dedicated domains, inboxes, sequences, and warming — built to scale to 10,000 cold emails a week without deliverability issues. Multi-inbox, multi-domain. No templates. No VAs.",
  },
  {
    icon: Users,
    title: "AI-Driven Personalization at Scale",
    description:
      "Every one of those 10K emails is hyper-personalized to the individual. Proprietary enrichment and AI systems I built myself — not Clay, not off-the-shelf. Emails that sound like a human who read the prospect's website, because the system actually did.",
  },
  {
    icon: Network,
    title: "LinkedIn — Threaded with Email",
    description:
      "Not a separate silo. LinkedIn touches fire in sequence with your email campaigns — a prospect gets an email on Monday, a connection request on Wednesday, a personalized follow-up on Friday. Same ICP targeting, coordinated timing.",
  },
  {
    icon: Phone,
    title: "Cold Calls — The Third Thread",
    description:
      "Warm calls hit after email opens and LinkedIn engagement. By the time I call, the prospect has seen your name twice. Conversion to meeting is 3-5x higher than cold-calling blind.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description:
      "Open rates, reply rates, conversion by ICP segment, meetings booked — not a weekly Loom recap. Full visibility into everything, built by me.",
  },
];

export default function Capabilities() {
  return (
    <section id="what-i-do" className="bg-green-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-green-600">
            What You Get
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Three Channels. One Coordinated System.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
            Email, LinkedIn, and cold call hit the same prospect in multithreaded sequences — 10K personalized emails a week plus coordinated touches across every channel. Not a generic email tool. A full outbound engine.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-green-200/80 bg-white p-6 shadow-sm transition-all hover:border-green-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-colors group-hover:bg-green-500 group-hover:text-white">
                <cap.icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
