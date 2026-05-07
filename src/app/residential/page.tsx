"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LeadForm from "@/components/leadgen/LeadForm";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
        title: "Free Home Visit & Rooftop Survey",
        text: "Our engineer visits, measures your roof, checks shading, and designs the ideal layout — no cost, no pressure.",
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
        title: "Free 3D Design + Savings Report",
        text: "You receive a custom 3D layout, exact savings projection, and full PM Surya Ghar subsidy calculation before signing anything.",
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
        title: "Hassle-Free Install & Subsidy Filing",
        text: "We handle DISCOM approvals, net-metering paperwork, and PM Surya Ghar subsidy filing. You watch it go up — we handle the red tape.",
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        title: "Solar On. Bills Drop. We Maintain.",
        text: "Your system goes live and bills fall from month one. SolisShield™ covers performance, cleaning, and monitoring for 30 years.",
    },
];

export default function ResidentialPage() {
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
                                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-white/80">Residential Solar · Bengaluru & Beyond</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04]">
                                Stop paying rent<br className="hidden md:block" /> to the grid.{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#E5A500]">Own your power.</span>
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
                                className="text-base md:text-lg text-white/75 font-medium leading-relaxed max-w-xl">
                                Up to <strong className="text-white">₹78,000 government subsidy</strong> handled end-to-end. Bills drop from month one. Backed by the SolisShield™ 30-year guarantee.
                            </motion.p>

                            {/* Family photo */}
                            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24, ease: EASE }}
                                className="relative w-full aspect-[3/4] sm:aspect-[5/3] rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-gradient-to-br from-[#FFB703] via-[#E5A500] to-[#0A192F]">
                                <picture>
                                    <source media="(min-width: 640px)" srcSet="/family-rooftop-landscape.jpg" />
                                    <img src="/family-rooftop.jpg" alt="Indian family with rooftop solar" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
                                </picture>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 via-transparent to-transparent pointer-events-none" />
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.36 }}
                                className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-white/55">
                                {["MNRE Approved Vendor", "PM Surya Ghar Partner", "SolisShield™ 30-Year Guarantee"].map((t, i) => (
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
                            <LeadForm vertical="residential" theme="light" variant="card" />
                        </motion.div>
                    </div>

                    {/* Stats strip */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10 border border-white/10">
                        {[
                            { num: "₹78,000", label: "Max Govt. Subsidy" },
                            { num: "Month 1", label: "Day-One Savings" },
                            { num: "1–3 Days", label: "Installation Time" },
                            { num: "30 Years", label: "SolisShield™" },
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
                        <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }}
                            className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-[#0A192F]/55 mb-4">Why Solispark for Your Home</motion.span>
                        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
                            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A192F] leading-[1.05]">
                            Your home, working <span className="text-golden">harder for you.</span>
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { title: "₹78K Subsidy — We File It", text: "The PM Surya Ghar Yojana gives up to ₹78,000 back. We handle the entire application, DISCOM coordination, and bank credit — you just collect the money." },
                            { title: "EMI Less Than Your Current Bill", text: "In most cases, your monthly solar EMI is lower than the electricity bill you're paying today. You start saving before you've finished paying." },
                            { title: "Storm-Proof, Roof-Friendly", text: "BIS-certified mounting rated for 180 km/h winds. No roof penetrations that void your waterproofing. Clean, professional finish guaranteed." },
                            { title: "30-Year SolisShield™ Aftercare", text: "Quarterly panel cleaning, 24/7 remote monitoring, and performance guarantees bundled into your contract — for three full decades." },
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
                        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-golden">Free Site Visit · No Commitment</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">Claim your ₹78,000 subsidy before March 2027.</h2>
                        <p className="text-base text-white/65 font-medium leading-relaxed">Slots are allocated on a first-come basis. Book your free site visit today — our team handles the rest.</p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            {["No upfront cost", "Subsidy filed by us", "Day-1 savings guaranteed"].map(b => (
                                <span key={b} className="flex items-center gap-1.5 text-xs font-bold text-white/70">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-auto lg:min-w-[420px]">
                        <LeadForm vertical="residential" theme="dark" variant="card" />
                    </div>
                </div>
            </section>
        </main>
    );
}
