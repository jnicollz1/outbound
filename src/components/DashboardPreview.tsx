"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Mail,
  Eye,
  MessageSquare,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Clock,
  Filter,
  Download,
  RefreshCw,
} from "lucide-react";

/* ── realistic 30-day email activity data ── */
const emailTrendData = [
  { day: "Mar 1", sent: 320, opens: 198, replies: 28 },
  { day: "Mar 3", sent: 410, opens: 254, replies: 35 },
  { day: "Mar 5", sent: 380, opens: 241, replies: 31 },
  { day: "Mar 7", sent: 450, opens: 289, replies: 42 },
  { day: "Mar 9", sent: 520, opens: 334, replies: 48 },
  { day: "Mar 11", sent: 480, opens: 302, replies: 39 },
  { day: "Mar 13", sent: 510, opens: 327, replies: 45 },
  { day: "Mar 15", sent: 490, opens: 311, replies: 41 },
  { day: "Mar 17", sent: 560, opens: 362, replies: 52 },
  { day: "Mar 19", sent: 530, opens: 341, replies: 47 },
  { day: "Mar 21", sent: 610, opens: 396, replies: 56 },
  { day: "Mar 23", sent: 580, opens: 371, replies: 53 },
  { day: "Mar 25", sent: 620, opens: 403, replies: 58 },
  { day: "Mar 27", sent: 650, opens: 422, replies: 61 },
  { day: "Mar 29", sent: 690, opens: 448, replies: 64 },
];

/* ── meetings by ICP segment ── */
const icpMeetingsData = [
  { segment: "Series A SaaS", meetings: 8 },
  { segment: "Dev Tools", meetings: 6 },
  { segment: "FinTech", meetings: 4 },
  { segment: "HealthTech", meetings: 3 },
  { segment: "AI/ML", meetings: 2 },
];

/* ── channel distribution pie data ── */
const channelData = [
  { name: "Cold Email", value: 58, color: "#4ade80" },
  { name: "LinkedIn", value: 28, color: "#60a5fa" },
  { name: "Cold Call", value: 14, color: "#fbbf24" },
];

/* ── template performance ── */
const templateData = [
  { name: "Pain-point opener", sent: 3420, openRate: 68.2, replyRate: 9.4, meetings: 12 },
  { name: "Case study follow-up", sent: 2810, openRate: 64.1, replyRate: 8.9, meetings: 8 },
  { name: "Founder-to-founder", sent: 3150, openRate: 71.3, replyRate: 11.2, meetings: 14 },
  { name: "ROI breakdown", sent: 2460, openRate: 59.7, replyRate: 7.1, meetings: 5 },
  { name: "Tech stack angle", sent: 1840, openRate: 66.8, replyRate: 10.1, meetings: 9 },
];

/* ── top-level KPI cards ── */
const kpis = [
  { label: "Emails Sent", value: "41,230", delta: "+10K/wk", up: true, icon: Mail, accent: "#60a5fa" },
  { label: "Open Rate", value: "62.3%", delta: "+4.2pp", up: true, icon: Eye, accent: "#4ade80" },
  { label: "Reply Rate", value: "8.7%", delta: "+1.3pp", up: true, icon: MessageSquare, accent: "#fbbf24" },
  { label: "Meetings Booked", value: "23", delta: "+6", up: true, icon: Calendar, accent: "#a78bfa" },
  { label: "Avg Response Time", value: "2.4h", delta: "-0.8h", up: true, icon: Clock, accent: "#f472b6" },
  { label: "Pipeline Value", value: "$184K", delta: "+$42K", up: true, icon: TrendingUp, accent: "#34d399" },
];

/* ── recent activity feed ── */
const activityFeed = [
  { type: "reply", text: "Sarah K. (Acme) replied to email Sequence #3", time: "2m ago", color: "#4ade80" },
  { type: "linkedin", text: "LinkedIn: James L. (Zeta AI) accepted connection request", time: "8m ago", color: "#60a5fa" },
  { type: "meeting", text: "Meeting booked: James L. (Zeta AI) — Wed 2pm (via cold call)", time: "18m ago", color: "#a78bfa" },
  { type: "call", text: "Cold call: Mike D. (Beam Labs) — warm lead, follow-up scheduled", time: "42m ago", color: "#fbbf24" },
  { type: "open", text: "12 new opens on \"Founder-to-founder\" email template", time: "1h ago", color: "#4ade80" },
  { type: "linkedin", text: "LinkedIn: 8 new profile views from Dev Tools ICP segment", time: "2h ago", color: "#60a5fa" },
];

/* ── tooltip shared style ── */
const tooltipStyle = {
  backgroundColor: "#16181f",
  border: "1px solid #2e3240",
  borderRadius: "8px",
  fontSize: "12px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
};

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-green-400">
            Real-Time Visibility
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See Real Data, Not a Weekly Loom Recap
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Engineering-heavy founding teams want to see real data — open rates, reply rates,
            conversion by ICP segment, meetings booked. I built this dashboard myself.
            Full visibility into everything.
          </p>
        </motion.div>

        {/* Dashboard shell */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl border border-[#2e3240] bg-[#0d0f14] shadow-2xl"
        >
          {/* ── Title bar ── */}
          <div className="flex items-center justify-between border-b border-[#2e3240] bg-[#12141b] px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="ml-3 flex items-center gap-2 rounded-md bg-[#1a1d27] px-3 py-1">
                <Activity size={12} className="text-green-400" />
                <span className="text-xs font-medium text-slate-300">Pipeline Dashboard</span>
                <span className="ml-1 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 rounded-md border border-[#2e3240] bg-[#1a1d27] px-2.5 py-1 text-xs text-slate-400 transition-colors hover:text-slate-200">
                <Filter size={11} /> Filters
              </button>
              <button className="flex items-center gap-1.5 rounded-md border border-[#2e3240] bg-[#1a1d27] px-2.5 py-1 text-xs text-slate-400 transition-colors hover:text-slate-200">
                <Download size={11} /> Export
              </button>
              <button className="flex items-center gap-1.5 rounded-md border border-[#2e3240] bg-[#1a1d27] px-2.5 py-1 text-xs text-slate-400 transition-colors hover:text-slate-200">
                <RefreshCw size={11} /> Refresh
              </button>
              <span className="ml-2 rounded-md bg-[#1a1d27] px-2.5 py-1 text-xs text-slate-500">
                Last 30 days
              </span>
            </div>
          </div>

          {/* ── KPI row ── */}
          <div className="grid grid-cols-2 gap-px border-b border-[#2e3240] bg-[#2e3240] md:grid-cols-3 lg:grid-cols-6">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="bg-[#0d0f14] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <kpi.icon size={14} style={{ color: kpi.accent }} />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    {kpi.label}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold tabular-nums text-white lg:text-2xl">
                    {kpi.value}
                  </span>
                  <span className={`flex items-center gap-0.5 text-xs font-medium ${kpi.up ? "text-emerald-400" : "text-red-400"}`}>
                    {kpi.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    {kpi.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Main content area ── */}
          <div className="p-4 md:p-5">
            {/* Charts row */}
            <div className="mb-4 grid gap-4 lg:grid-cols-12">
              {/* Area chart */}
              <div className="rounded-lg border border-[#2e3240] bg-[#12141b] p-4 lg:col-span-7">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-sm font-medium text-slate-200">Email Activity</h4>
                  <div className="flex gap-4 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#60a5fa]" /> Sent
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#4ade80]" /> Opens
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#fbbf24]" /> Replies
                    </span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={emailTrendData}>
                    <defs>
                      <linearGradient id="gSent" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="gOpens" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4ade80" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="gReplies" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e2130" />
                    <XAxis dataKey="day" tick={{ fill: "#4b5268", fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "#4b5268", fontSize: 10 }} axisLine={false} tickLine={false} width={35} />
                    <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "#94a3b8" }} />
                    <Area type="monotone" dataKey="sent" stroke="#60a5fa" fill="url(#gSent)" strokeWidth={1.5} dot={false} />
                    <Area type="monotone" dataKey="opens" stroke="#4ade80" fill="url(#gOpens)" strokeWidth={1.5} dot={false} />
                    <Area type="monotone" dataKey="replies" stroke="#fbbf24" fill="url(#gReplies)" strokeWidth={1.5} dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Right column: bar chart + pie */}
              <div className="flex flex-col gap-4 lg:col-span-5">
                {/* Bar chart */}
                <div className="flex-1 rounded-lg border border-[#2e3240] bg-[#12141b] p-4">
                  <h4 className="mb-3 text-sm font-medium text-slate-200">Meetings by ICP</h4>
                  <ResponsiveContainer width="100%" height={130}>
                    <BarChart data={icpMeetingsData} layout="vertical" margin={{ left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e2130" horizontal={false} />
                      <XAxis type="number" tick={{ fill: "#4b5268", fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis type="category" dataKey="segment" tick={{ fill: "#94a3b8", fontSize: 10 }} axisLine={false} tickLine={false} width={80} />
                      <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: "#94a3b8" }} />
                      <Bar dataKey="meetings" fill="#4ade80" radius={[0, 4, 4, 0]} barSize={14} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Pie chart */}
                <div className="flex-1 rounded-lg border border-[#2e3240] bg-[#12141b] p-4">
                  <h4 className="mb-2 text-sm font-medium text-slate-200">Channel Mix</h4>
                  <div className="flex items-center gap-4">
                    <ResponsiveContainer width={100} height={100}>
                      <PieChart>
                        <Pie
                          data={channelData}
                          cx="50%"
                          cy="50%"
                          innerRadius={28}
                          outerRadius={44}
                          paddingAngle={3}
                          dataKey="value"
                          strokeWidth={0}
                        >
                          {channelData.map((entry) => (
                            <Cell key={entry.name} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="flex flex-col gap-2">
                      {channelData.map((ch) => (
                        <div key={ch.name} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ch.color }} />
                          <span className="text-xs text-slate-400">{ch.name}</span>
                          <span className="text-xs font-semibold text-slate-200">{ch.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row: table + activity feed */}
            <div className="grid gap-4 lg:grid-cols-12">
              {/* Template performance table */}
              <div className="rounded-lg border border-[#2e3240] bg-[#12141b] p-4 lg:col-span-8">
                <h4 className="mb-4 text-sm font-medium text-slate-200">Template Performance</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-[#2e3240]">
                        <th className="pb-3 pr-6 text-[11px] font-medium uppercase tracking-wider text-slate-500">Template</th>
                        <th className="pb-3 pr-6 text-right text-[11px] font-medium uppercase tracking-wider text-slate-500">Sent</th>
                        <th className="pb-3 pr-6 text-right text-[11px] font-medium uppercase tracking-wider text-slate-500">Open Rate</th>
                        <th className="pb-3 pr-6 text-right text-[11px] font-medium uppercase tracking-wider text-slate-500">Reply Rate</th>
                        <th className="pb-3 text-right text-[11px] font-medium uppercase tracking-wider text-slate-500">Meetings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {templateData.map((t) => (
                        <tr key={t.name} className="border-b border-[#2e3240]/50 last:border-0">
                          <td className="py-3 pr-6 text-sm font-medium text-slate-200">{t.name}</td>
                          <td className="py-3 pr-6 text-right text-sm tabular-nums text-slate-400">{t.sent.toLocaleString()}</td>
                          <td className="py-3 pr-6 text-right">
                            <span className="inline-flex items-center gap-1 text-sm tabular-nums text-emerald-400">
                              {t.openRate}%
                            </span>
                          </td>
                          <td className="py-3 pr-6 text-right">
                            <span className="inline-flex items-center gap-1 text-sm tabular-nums text-amber-400">
                              {t.replyRate}%
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            <span className="inline-block min-w-[2rem] rounded-md bg-green-500/10 px-2 py-0.5 text-center text-sm font-semibold tabular-nums text-green-400">
                              {t.meetings}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Activity feed */}
              <div className="rounded-lg border border-[#2e3240] bg-[#12141b] p-4 lg:col-span-4">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-sm font-medium text-slate-200">Live Activity</h4>
                  <span className="flex items-center gap-1 text-[10px] font-medium text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </span>
                </div>
                <div className="space-y-3">
                  {activityFeed.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs leading-relaxed text-slate-300">{item.text}</p>
                        <p className="text-[10px] text-slate-600">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
