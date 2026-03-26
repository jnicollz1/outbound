"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What exactly is a fractional GTM engineer?",
    a: "It means I embed into your team part-time — 20 hours a week — and own your entire outbound system. I'm not an agency with layers of account managers. I'm one person who builds the infrastructure, writes the copy, runs the campaigns, and built the dashboard you see metrics in. Think of it like hiring a senior SDR who also writes code.",
  },
  {
    q: "What's your background?",
    a: "Previously built $2.2M in qualified pipeline in 3 months doing enterprise outbound for a Series B data platform. Prospected into Fortune 500 accounts with 7-figure ACVs. I also work as a software engineer — which means I understand your product, I speak your prospects' language, and I build my own tools.",
  },
  {
    q: "How much does it cost?",
    a: "$5K/month is the standard retainer. For context: a full-time SDR in SF costs $130-150K fully loaded ($11-12K/month). You're getting 50% of that capacity for about a third of the cost, with zero ramp time and better tooling expertise. I also offer a $200-300 per qualified meeting performance kicker on top of the base.",
  },
  {
    q: "What does 'multithreaded' outbound mean?",
    a: "It means the same prospect gets hit across email, LinkedIn, and phone in one coordinated sequence. Day 1: personalized email. Day 3: LinkedIn connection request with a tailored note. Day 5: warm call — by then they've seen your name twice. This isn't three separate campaigns running in silos. It's one system where each channel reinforces the others. Reply rates are 3-5x what you get from email alone.",
  },
  {
    q: "How do you send 10K emails a week and keep them personalized?",
    a: "I built proprietary AI enrichment and personalization systems that research each prospect individually — their company, role, tech stack, recent news — and generate emails that read like a human wrote them after spending 5 minutes on their website. The system actually did. This runs at 10K/week scale without quality degradation, and costs a fraction of what you'd pay for Clay + an agency to do the same thing worse.",
  },
  {
    q: "How is this different from a $2K/month agency?",
    a: "Most agencies are a thin layer of strategy on top of cheap labor. They outsource the actual work to VAs who google your company for 30 seconds before writing an email. I do everything myself — I read your docs, understand your tech stack, and run the campaigns on proprietary tooling I built. The result is 10K hyper-personalized emails a week at a fraction of what agencies charge for 1-2K generic ones.",
  },
  {
    q: "How quickly can you launch campaigns?",
    a: "After a 30-minute onboarding call, I typically have your first campaigns live within 5-7 business days. That includes ICP research, prospect list building, email copy, domain setup, and inbox warming. Month one is calibration, month two you start seeing meetings.",
  },
  {
    q: "Why not just use Clay ourselves?",
    a: "You could, but Clay alone costs $3-5K/month at scale, and you still need someone to build the workflows, write the copy, manage the sending infrastructure, and actually run the campaigns. With me, you get 10K hyper-personalized emails a week on proprietary systems I built — plus LinkedIn, cold calling, and a real-time dashboard — all for one retainer. It's the full stack, not just a tool.",
  },
  {
    q: "What's the minimum commitment?",
    a: "No minimum. Cancel anytime. I ask for at least 3 months to give campaigns enough time to ramp and optimize, but there's no contract lock-in. Most clients see meaningful pipeline within the first 30 days and stay much longer.",
  },
  {
    q: "Why not just hire a full-time SDR?",
    a: "At seed stage, you probably can't justify $130-150K fully loaded for a full-time sales hire who takes 3 months to ramp. I give you half that capacity for a third of the cost, with zero ramp time, zero recruiting risk, and better tooling expertise than most full-time SDRs have. When you're ready to hire full-time, I'll help you build the playbook to hand off.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-green-200/80"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-medium text-slate-900">{faq.q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-slate-500">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-green-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-green-600">
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="rounded-2xl border border-green-200/80 bg-white px-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
