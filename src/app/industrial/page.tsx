"use client";

import { motion } from "framer-motion";
import LeadForm from "@/components/leadgen/LeadForm";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10l8-6 8 6v10"/><path d="M12 20v-6"/></svg>,
        title: "Free Site Audit & Load Analysis",
        text: "Our heavy engineering team visits, maps your facility, analyses your sanctioned load and tariff structure, and models the exact financial return.",
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
        title: "Custom Engineering Design",
        text: "Bespoke structural and electrical design for your load profile — including PMSG integration, custom racking, and grid protection systems.",
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
        title: "Zero-Downtime Installation",
        text: "We deploy in parallel to your operations — no production stoppages, no disruption to your floor. EPC execution from foundation to grid sync.",
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        title: "Grid Sync. Solispark Live.",
        text: "Your plant goes live, bills drop from month one. 24/7 remote monitoring, scheduled maintenance, and performance guarantees for 30 years.",
    },
];

export default function IndustrialPage() {
    return (
        <main className="min-h-screen bg-[#FAF9F6] text-[#0A192F]">

            {/* ── HERO ── */}
            <section className="relative bg-[#0A192F] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0A192F,#08152a_70%,#06101f)]" />
                <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,3,0.22),transparent_55%)] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 md:pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                        {/* LEFT */}
                        <div className="lg:col-span-7 space-y-6 order-1">
                            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-golden animate-pulse" />
                                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-white/80">Industrial Solar · 100 kW – 50 MW</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04]">
                                Your factory floor<br className="hidden md:block" /> deserves{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#E5A500]">sovereign power.</span>
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
                                className="text-base md:text-lg text-white/75 font-medium leading-relaxed max-w-xl">
                                Megawatt-class solar for manufacturers, warehouses, and processing plants. <strong className="text-white">Zero operational downtime</strong> during deployment. Bills slashed from day one. Secured by Solispark.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24, ease: EASE }}
                                className="relative w-full aspect-[5/3] rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-[#0A192F]">
                                <img src="/solarpark-solar.jpeg"
                                    alt="Utility-scale solar power plant" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 via-transparent to-transparent pointer-events-none" />
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.36 }}
                                className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-white/55">
                                {["100 kW – 50 MW Capacity", "Zero Downtime EPC", "PMSG Engineering"].map((t, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                                        <span className="text-[10.5px] md:text-xs font-bold tracking-wider uppercase">{t}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* RIGHT — form */}
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
                            className="lg:col-span-5 w-full flex justify-center lg:justify-end order-2">
                            <LeadForm vertical="industrial" theme="light" variant="card" />
                        </motion.div>
                    </div>

                    {/* Stats strip */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10 border border-white/10">
                        {[
                            { num: "50 MW+", label: "Max Plant Size" },
                            { num: "0", label: "Downtime During Install" },
                            { num: "40%+", label: "Operational Cost Cut" },
                            { num: "30 Years", label: "Solispark" },
                        ].map((s, i) => (
                            <div key={i} className="bg-[#0A192F]/95 px-5 py-6 flex flex-col">
                                <span className="text-2xl md:text-3xl font-black tracking-tight text-golden">{s.num}</span>
                                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/55 mt-1">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── BENEFITS ── */}
            <section className="w-full py-20 md:py-28 px-6 md:px-12 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
                            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A192F] leading-[1.05]">
                            Engineering that <span className="text-golden">outlasts your operations.</span>
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { title: "100 kW to 50 MW Range", text: "Whether you're running a 500 kW processing plant or a 20 MW industrial campus, our engineering team scales the design to match your exact load profile." },
                            { title: "PMSG-Optimised Output", text: "Permanent Magnet Synchronous Generator integration maximises energy harvest for high-load industrial profiles — delivering up to 18% more yield vs standard configurations." },
                            { title: "Zero Disruption Execution", text: "Our EPC teams work parallel to your shifts. Structural, electrical, and grid work is sequenced to avoid any interference with your production schedule." },
                            { title: "Solispark Performance Guarantee", text: "If underproduction occurs against the contractual curve, we compensate in cash. Quarterly audits, cleaning, and 24/7 remote monitoring included for 30 years." },
                        ].map((card, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                                whileHover={{ y: -4 }}
                                className="bg-white p-7 rounded-3xl border border-gray-100 shadow-[0_4px_24px_rgba(10,25,47,0.04)] hover:shadow-[0_20px_50px_rgba(10,25,47,0.08)] transition-shadow flex flex-col group">
                                <div className="w-10 h-10 rounded-xl bg-golden/10 text-golden flex items-center justify-center mb-5 group-hover:bg-golden group-hover:text-[#0A192F] transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                </div>
                                <h3 className="text-base md:text-lg font-bold tracking-tight text-[#0A192F] mb-2">{card.title}</h3>
                                <p className="text-sm text-[#0A192F]/60 font-medium leading-relaxed">{card.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="w-full py-20 md:py-28 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
                            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A192F]">
                            We Handle Everything.{" "}<span className="text-golden">You Just Save.</span>
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {STEPS.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                                whileHover={{ y: -4 }}
                                className="relative flex flex-col items-center text-center p-7 rounded-3xl bg-[#FAF9F6] border border-gray-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(10,25,47,0.08)] transition-all group">
                                <div className="relative mb-5">
                                    <div className="w-14 h-14 rounded-2xl bg-golden/10 text-golden flex items-center justify-center group-hover:bg-golden group-hover:text-[#0A192F] transition-colors">{step.icon}</div>
                                    <span className="absolute -top-2 -right-2 text-[9px] font-black text-white bg-[#0A192F] rounded-full w-5 h-5 flex items-center justify-center shadow-sm">{i + 1}</span>
                                </div>
                                <h3 className="text-base font-bold tracking-tight text-[#0A192F] mb-2 leading-snug">{step.title}</h3>
                                <p className="text-sm text-[#0A192F]/60 font-medium leading-relaxed">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BOTTOM FORM ── */}
            <section className="relative w-full py-20 md:py-28 px-6 md:px-12 bg-[#0A192F] text-white overflow-hidden">
                <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,183,3,0.18),transparent_70%)] pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="space-y-4 max-w-xl">
                        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-golden">Free Load Analysis · No Commitment</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">Get a megawatt-level savings estimate in 48 hours.</h2>
                        <p className="text-base text-white/65 font-medium leading-relaxed">Share your plant details and our heavy engineering team will deliver a full financial model — free, with zero obligation.</p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            {["Zero downtime guaranteed", "100 kW – 50 MW range", "PMSG-optimised design"].map(b => (
                                <span key={b} className="flex items-center gap-1.5 text-xs font-bold text-white/70">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-auto lg:min-w-[420px]">
                        <LeadForm vertical="industrial" theme="dark" variant="card" />
                    </div>
                </div>
            </section>
        </main>
    );
}
