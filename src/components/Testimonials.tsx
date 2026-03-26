"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We went from zero outbound to 15 qualified meetings in our first month. The dashboard alone is worth the price — I check it more than Slack.",
    name: "Alex Chen",
    role: "Co-founder & CTO",
    company: "StreamlineAI",
  },
  {
    quote:
      "As engineers, we didn't trust agencies that sent weekly Loom recaps. outbound by jn gave us Grafana-level visibility into our pipeline. That changed everything.",
    name: "Sarah Patel",
    role: "Founder",
    company: "CodeShip Labs",
  },
  {
    quote:
      "We tried doing cold email ourselves for 3 months. Zero meetings. JN's team booked 22 meetings in the first 6 weeks. Wish we'd started here.",
    name: "Marcus Rivera",
    role: "CEO & Co-founder",
    company: "Dockyard",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-green-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="slds-text-align_center mb-14 text-center"
        >
          <span className="slds-text-title_caps mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-green-600">
            Testimonials
          </span>
          <h2 className="slds-text-heading_medium text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Founders Are Saying
          </h2>
        </motion.div>

        <div className="slds-grid slds-wrap slds-gutters grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="slds-card flex flex-col rounded-2xl border border-green-200/80 bg-white shadow-sm"
            >
              <div className="slds-card__body slds-card__body_inner flex flex-1 flex-col p-6">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <blockquote className="slds-text-body_regular mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author — SLDS media object */}
                <div className="slds-media slds-media_center flex items-center gap-3 border-t border-green-100 pt-4">
                  <div className="slds-media__figure">
                    <span className="slds-avatar slds-avatar_circle slds-avatar_medium flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="slds-media__body">
                    <p className="slds-text-body_regular text-sm font-semibold text-slate-900">
                      {t.name}
                    </p>
                    <p className="slds-text-body_small text-xs text-slate-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
