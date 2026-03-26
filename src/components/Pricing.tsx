"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$2,000",
    period: "/month",
    description: "Core outbound engine for early-stage teams testing the waters.",
    popular: false,
    features: [
      "Cold email campaigns via Instantly",
      "ICP research & drilldown",
      "Prospect list building (up to 1,000/mo)",
      "Real-time pipeline dashboard",
      "Weekly strategy sync",
      "A/B tested email templates",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$3,000",
    period: "/month",
    description:
      "Multi-channel outbound for teams ready to accelerate pipeline.",
    popular: true,
    features: [
      "Everything in Starter",
      "LinkedIn outreach campaigns",
      "Expanded prospect lists (up to 3,000/mo)",
      "Multi-channel sequence coordination",
      "Template performance analytics",
      "ICP segment breakdowns",
      "Bi-weekly strategy call",
    ],
    cta: "Get Started",
  },
  {
    name: "Scale",
    price: "$4,000",
    period: "/month",
    description: "Full-stack outbound with dedicated support and cold calling.",
    popular: false,
    features: [
      "Everything in Growth",
      "Light cold calling layer",
      "Dedicated outbound strategist",
      "Unlimited prospect lists",
      "Custom dashboard views",
      "Priority Slack support",
      "Monthly pipeline review",
    ],
    cta: "Get Started",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="slds-text-align_center mb-14 text-center"
        >
          <span className="slds-text-title_caps mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-green-600">
            Pricing
          </span>
          <h2 className="slds-text-heading_medium text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Transparent Pricing. No Surprises.
          </h2>
          <p className="slds-text-body_regular mx-auto mt-4 max-w-2xl text-base text-slate-500">
            Dashboard access is included in every plan — not an upsell. Pick the
            package that fits your stage.
          </p>
        </motion.div>

        <div className="slds-grid slds-wrap slds-gutters grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`slds-card relative flex flex-col rounded-2xl border ${
                tier.popular
                  ? "border-green-400 bg-green-50 shadow-xl shadow-green-500/10"
                  : "border-green-200/80 bg-white shadow-sm"
              }`}
            >
              {tier.popular && (
                <span className="slds-badge slds-badge_inverse absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold">
                  Most Popular
                </span>
              )}

              <div className="slds-card__header slds-card__header_inner px-6 pt-6 md:px-8 md:pt-8">
                <h3 className="slds-card__header-title mb-1 text-lg font-semibold text-slate-900">
                  {tier.name}
                </h3>
                <p className="slds-text-body_small mb-4 text-sm text-slate-500">
                  {tier.description}
                </p>
                <div className="mb-6 flex items-end gap-1">
                  <span className="slds-text-heading_medium text-4xl font-bold text-slate-900">
                    {tier.price}
                  </span>
                  <span className="slds-text-body_small mb-1 text-sm text-slate-400">
                    {tier.period}
                  </span>
                </div>
              </div>

              <div className="slds-card__body slds-card__body_inner flex-1 px-6 md:px-8">
                <ul className="slds-list_vertical mb-8 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="slds-list__item flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <Check size={12} className="text-green-600" />
                      </div>
                      <span className="slds-text-body_regular text-sm text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="slds-card__footer px-6 pb-6 md:px-8 md:pb-8">
                <a
                  href="#calendly-placeholder"
                  className={`slds-button block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                    tier.popular
                      ? "slds-button_brand shadow-lg shadow-green-500/25"
                      : "slds-button_outline-brand border border-green-300 bg-white hover:bg-green-50"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
