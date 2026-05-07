"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/leadgen/LeadForm";

export default function Home() {
    // Calculator State (Dynamic Logic)
    const [bill, setBill] = useState(2500);

    // Derived Calculations based on an approx ₹8/unit tariff and 120 units/kW monthly generation
    const estimatedUnitsConsumed = bill / 8;
    const requiredKw = Math.max(1, Math.ceil(estimatedUnitsConsumed / 120));
    const energyGenerated = requiredKw * 1440; // Annual generation
    const carbonEmission = Math.round(energyGenerated * 0.82);

    // Testimonial State
    const [testIndex, setTestIndex] = useState(0);
    const testimonials = [
        {
            name: "Suresh Narayanan",
            role: "Factory Owner · Peenya Industrial Area, Bengaluru",
            savings: "Bill: ₹1.4L → ₹18K/mo",
            quote: "Our electricity bill was killing margins for years. Now it's basically nothing. Solispark finished the whole thing in 3 days — I never had to chase a single approval.",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop&fit=facearea&facepad=3",
        },
        {
            name: "Priya Venkatesh",
            role: "RWA Secretary · Whitefield, Bengaluru",
            savings: "Society saves ₹42,000/mo",
            quote: "From BESCOM approvals to the subsidy landing in our account — they handled every single thing. Our 84 flats now barely pay for common area electricity.",
            photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop&fit=facearea&facepad=3",
        },
        {
            name: "Arjun Hegde",
            role: "Director, Operations · Electronic City, Bengaluru",
            savings: "₹68K/mo saved from Month 1",
            quote: "Month 6, one inverter flagged an error. The SolisShield team replaced it in 36 hours. No calls, no paperwork. That's the difference between a promise and a guarantee.",
            photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=600&auto=format&fit=crop&fit=facearea&facepad=3",
        },
    ];

    // Popup lead capture state
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setShowPopup(true), 10000);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="bg-transparent relative min-h-screen">
            {/* HERO — Solar Parks flagship */}
            <main className="relative bg-[#0A192F] text-white overflow-hidden">
                {/* Layered background — gradient + grid + radial glow. No assets, instant load. */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0A192F,#08152a_70%,#06101f)]" />
                <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,3,0.22),transparent_55%)] pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,183,3,0.10),transparent_70%)] pointer-events-none" />

                <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12 md:pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                        {/* LEFT — copy + family photo + trust row */}
                        <div className="lg:col-span-7 lg:pr-6 order-1">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-6"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-golden animate-pulse" />
                                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-white/80">
                                    Utility-Scale Solar Infrastructure
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04] mb-5"
                            >
                                Stop Renting Your Power. <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#E5A500]">
                                    Own Your Energy Asset.
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                                className="text-base md:text-lg text-white/75 font-medium leading-relaxed max-w-xl mb-8"
                            >
                                India&apos;s premier EPC partner for megawatt-class solar parks. From land to grid — engineered to outlast your operational timeline, secured by SolisShield&trade;.
                            </motion.p>

                            {/* FAMILY PHOTO — responsive: portrait on mobile, landscape on desktop. */}
                            {/* Drop /family-rooftop.jpg (portrait) and /family-rooftop-landscape.jpg in /public — they swap automatically at the sm breakpoint. */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                                className="relative w-full aspect-[3/4] sm:aspect-[5/3] rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] mb-7 bg-gradient-to-br from-[#FFB703] via-[#E5A500] to-[#0A192F]"
                            >
                                <picture>
                                    <source media="(min-width: 640px)" srcSet="/family-rooftop-landscape.jpg" />
                                    <img
                                        src="/family-rooftop.jpg"
                                        alt="Indian family on a rooftop with solar panels at golden hour"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="eager"
                                        decoding="async"
                                    />
                                </picture>

                                {/* Subtle bottom-fade for tonal blend with the dark hero bg */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 via-transparent to-transparent pointer-events-none" />
                            </motion.div>

                            {/* TRUST ROW */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.36 }}
                                className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-white/55"
                            >
                                {["MNRE Approved Vendor", "Backed by Startup India", "Tier-1 Component Partners"].map((t, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 12l2 2 4-4" />
                                            <circle cx="12" cy="12" r="10" />
                                        </svg>
                                        <span className="text-[10.5px] md:text-xs font-bold tracking-wider uppercase">{t}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* RIGHT — Lead form embedded above the fold (mobile: appears AFTER copy, BEFORE photo on tablet+) */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-5 w-full flex justify-center lg:justify-end order-2"
                        >
                            <LeadForm vertical="solar-parks" theme="light" variant="card" />
                        </motion.div>
                    </div>
                </section>

                {/* STAT STRIP — full-width band below hero, fade-up on scroll */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10 border border-white/10 backdrop-blur-sm">
                        {[
                            { num: "12 MW+", label: "Active Capacity" },
                            { num: "119+", label: "Projects Delivered" },
                            { num: "8", label: "States Operational" },
                            { num: "30y", label: "SolisShield™" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-[#0A192F]/95 px-5 py-6 md:py-7 flex flex-col"
                            >
                                <span className="text-3xl md:text-4xl font-black tracking-tight text-golden">
                                    {stat.num}
                                </span>
                                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase text-white/55 mt-1.5">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </main>

            {/* SLIDE OVER CONTAINER */}
            <div className="relative z-10 bg-[#FAF9F6] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.06)] w-full overflow-hidden text-[#111111] mt-10">
                <div className="relative z-50 w-full pt-24 pb-24 text-[#111111]">
                    {/* MARQUEES - LARGER LOGOS */}
                    <div className="relative w-full bg-white text-[#0A192F] pt-24 pb-24 flex flex-col gap-24">
                        <section className="w-full overflow-hidden">
                            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Satisfied Clients</h2>
                            </div>

                            <div className="relative flex overflow-x-hidden group">
                                <div className="animate-marquee flex whitespace-nowrap items-center space-x-12 md:space-x-20 px-8">
                                    {["/isro-logo.png", "/iisc-logo.png", "/gail-logo.png", "/tcs-log.png", "/reliance-logo.png", "/isro-logo.png", "/iisc-logo.png", "/gail-logo.png", "/tcs-log.png", "/reliance-logo.png"].map((logo, idx) => (
                                        <div key={idx} className="h-32 flex items-center justify-center w-48 md:w-64">
                                            <img src={logo} alt="Client" className="h-[80px] md:h-[110px] max-w-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="w-full overflow-hidden pb-8">
                            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Partnering with the Best
                                    "Our Trusted Brands"</h2>
                            </div>
                            <div className="relative flex overflow-x-hidden group">
                                <div className="animate-marquee-reverse flex whitespace-nowrap items-center space-x-12 md:space-x-20 px-8">
                                    {["/adani-logo.png", "/anchor-logo.png", "/rayzon-logo.png", "/solis-logo.png", "/sungrow-logo.png", "/waaree-logo.png", "/axitec-logo.png", "/goldi-solar-logo.png", "/deye-logo.png", "/adani-logo.png", "/anchor-logo.png", "/rayzon-logo.png", "/solis-logo.png", "/sungrow-logo.png", "/waaree-logo.png", "/axitec-logo.png", "/goldi-solar-logo.png", "/deye-logo.png"].map((logo, idx) => (
                                        <div key={idx} className="h-32 flex items-center justify-center w-48 md:w-64">
                                            <img src={logo} alt="Partner" className="h-[80px] md:h-[110px] max-w-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* VERTICAL SELECTOR — "What best describes you?" */}
                    <section className="w-full py-16 md:py-20 px-6 md:px-12 bg-[#0A192F]">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-10 md:mb-14">
                                <motion.span
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-golden mb-4"
                                >
                                    Solar for Every Need
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.05]"
                                >
                                    What best describes <span className="text-golden">you?</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                                    className="mt-3 text-base text-white/55 font-medium max-w-xl mx-auto"
                                >
                                    Pick your solar journey — we&apos;ve built a dedicated guide for each.
                                </motion.p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {[
                                    {
                                        href: "/residential",
                                        title: "Home & Family",
                                        sub: "Rooftop solar + PM Surya Ghar subsidy",
                                        badge: "Up to ₹78K subsidy",
                                        icon: (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                                            </svg>
                                        ),
                                    },
                                    {
                                        href: "/commercial",
                                        title: "Business & Offices",
                                        sub: "CAPEX or zero-cost OPEX / PPA model",
                                        badge: "20–30% below grid",
                                        icon: (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                                            </svg>
                                        ),
                                    },
                                    {
                                        href: "/industrial",
                                        title: "Factory & Plant",
                                        sub: "100 kW – 50 MW EPC, zero downtime",
                                        badge: "40%+ cost reduction",
                                        icon: (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M2 20h20M4 20V10l4-4 4 4V8l4-4 4 4v12"/>
                                            </svg>
                                        ),
                                    },
                                    {
                                        href: "/apartments",
                                        title: "Apartments & RWAs",
                                        sub: "Common-area solar for societies",
                                        badge: "50%+ common bill cut",
                                        icon: (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><line x1="9" y1="22" x2="9" y2="12"/><line x1="15" y1="22" x2="15" y2="12"/><line x1="9" y1="12" x2="15" y2="12"/>
                                            </svg>
                                        ),
                                    },
                                    {
                                        href: "/ev-charging",
                                        title: "EV Charging",
                                        sub: "Solar-backed fleet & facility chargers",
                                        badge: "Near-zero charge cost",
                                        icon: (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/><path d="M9 7l2 3h2l-2 5"/>
                                            </svg>
                                        ),
                                    },
                                ].map((v, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-40px" }}
                                        transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Link
                                            href={v.href}
                                            className="group flex flex-col items-center text-center p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-golden/40 transition-all h-full"
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-golden/10 text-golden flex items-center justify-center mb-4 group-hover:bg-golden group-hover:text-[#0A192F] transition-colors shrink-0">
                                                {v.icon}
                                            </div>
                                            <h3 className="text-sm md:text-base font-bold text-white tracking-tight mb-1.5 leading-snug">
                                                {v.title}
                                            </h3>
                                            <p className="text-[11px] md:text-xs text-white/50 font-medium leading-relaxed mb-3">
                                                {v.sub}
                                            </p>
                                            <span className="mt-auto inline-block px-2.5 py-1 rounded-full bg-golden/10 text-golden text-[10px] font-bold tracking-wide">
                                                {v.badge}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4 — WHY SOLISPARK (4 FEATURE CARDS) */}
                    <section className="w-full py-20 md:py-28 px-6 md:px-12 bg-[#FAF9F6]">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-14 md:mb-20">
                                <motion.span
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#0A192F]/55 mb-4"
                                >
                                    The Solispark Advantage
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A192F] leading-[1.05]"
                                >
                                    Built for buyers who <br className="hidden md:block" />
                                    <span className="text-golden">can&apos;t afford to fail.</span>
                                </motion.h2>
                            </div>

                            {/* Wide installation photo */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="mb-12 relative w-full h-[220px] md:h-[300px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.10)]"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop"
                                    alt="Solispark commercial solar installation in Bengaluru"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/65 via-[#0A192F]/20 to-transparent pointer-events-none" />
                                <div className="absolute inset-0 flex items-end p-7">
                                    <div>
                                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-golden mb-1.5">Live Project · Bengaluru</p>
                                        <p className="text-white text-xl md:text-2xl font-bold tracking-tight leading-snug">500 kW commercial rooftop —<br className="hidden md:block" />commissioned in 8 days, zero downtime.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                                {[
                                    {
                                        title: "Guaranteed Savings",
                                        text: "Day-one electricity bill cuts. SolisShield™ pays the difference if you don't hit projected ROI.",
                                        icon: (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                        ),
                                    },
                                    {
                                        title: "Zero-Hassle Install",
                                        text: "From DISCOM approvals to grid sync, we handle 47 touchpoints so you don't see a single one.",
                                        icon: (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        ),
                                    },
                                    {
                                        title: "Storm-Proof Engineering",
                                        text: "Every mount tested for 180 km/h gusts. BIS-compliant racking. Tier-1 panels, no exceptions.",
                                        icon: (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                        ),
                                    },
                                    {
                                        title: "30-Year Aftercare",
                                        text: "Quarterly performance audits, panel cleaning, and 24/7 monitoring built into every contract.",
                                        icon: (
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                        ),
                                    },
                                ].map((card, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-60px" }}
                                        transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                        whileHover={{ y: -4 }}
                                        className="group bg-white p-7 md:p-8 rounded-3xl border border-gray-100 shadow-[0_4px_24px_rgba(10,25,47,0.04)] hover:shadow-[0_20px_50px_rgba(10,25,47,0.08)] transition-shadow flex flex-col"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-golden/10 text-golden flex items-center justify-center mb-6 group-hover:bg-golden group-hover:text-[#0A192F] transition-colors">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold tracking-tight text-[#0A192F] mb-2.5 leading-snug">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm md:text-[15px] text-[#0A192F]/65 font-medium leading-relaxed">
                                            {card.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SECTION 5 — SOLISSHIELD™ GUARANTEE */}
                    <section className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-[#0A192F] text-white overflow-hidden">
                        {/* Layered backgrounds */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0A192F,#08152a)]" />
                        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />
                        <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,183,3,0.18),transparent_70%)] pointer-events-none" />

                        <div className="relative z-10 max-w-7xl mx-auto">
                            <div className="max-w-3xl mb-14 md:mb-20">
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-golden/30 bg-golden/10 backdrop-blur-sm mb-6"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-golden animate-pulse" />
                                    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-golden">
                                        SolisShield&trade; · Industry-First
                                    </span>
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.03] mb-6"
                                >
                                    30 years. <br />
                                    One promise. <br />
                                    <span className="text-golden">Zero excuses.</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-base md:text-lg text-white/70 font-medium leading-relaxed max-w-xl"
                                >
                                    SolisShield&trade; bundles every guarantee under one trademark. The most comprehensive solar protection in India — built so finance teams sleep easy and ops teams stay focused.
                                </motion.p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                {[
                                    {
                                        eyebrow: "01",
                                        title: "30-Year Replacement",
                                        text: "Tier-1 Axitec panels replaced at zero cost if any module underperforms — for three full decades.",
                                    },
                                    {
                                        eyebrow: "02",
                                        title: "Performance Guarantee",
                                        text: "If your system underproduces against the projected curve, we compensate the deficit in cash.",
                                    },
                                    {
                                        eyebrow: "03",
                                        title: "Active Asset Management",
                                        text: "Quarterly performance audits, professional panel cleaning, and 24/7 remote monitoring — included.",
                                    },
                                    {
                                        eyebrow: "04",
                                        title: "Day-One Savings Promise",
                                        text: "Bills drop from month one — or your full deposit refunded. No fine print.",
                                    },
                                ].map((p, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-60px" }}
                                        transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                        className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-golden/40 transition-colors"
                                    >
                                        <span className="block text-3xl md:text-4xl font-black tracking-tighter text-golden mb-3">
                                            {p.eyebrow}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2.5">
                                            {p.title}
                                        </h3>
                                        <p className="text-sm md:text-[15px] text-white/65 font-medium leading-relaxed">
                                            {p.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SECTION 6 — ZERO-INVESTMENT EXPLAINER */}
                    <section className="w-full py-20 md:py-28 px-6 md:px-12 bg-[#FAF9F6]">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
                                <motion.span
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#0A192F]/55 mb-4"
                                >
                                    Zero CAPEX · Day-One Power
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A192F] leading-[1.05] mb-5"
                                >
                                    Don&apos;t pay a rupee upfront.
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-base md:text-lg text-[#0A192F]/65 font-medium leading-relaxed"
                                >
                                    Whether you&apos;re a homeowner or a 50 MW factory — there&apos;s a path to switch with zero money down.
                                </motion.p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
                                {/* Path 1 — Residential / Apartments */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative p-7 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(10,25,47,0.04)] hover:shadow-[0_20px_50px_rgba(10,25,47,0.08)] transition-shadow flex flex-col"
                                >
                                    <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#0A192F]/55 mb-3">
                                        Homes &amp; Societies
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0A192F] mb-4">
                                        PM Surya Ghar Subsidy
                                    </h3>
                                    <p className="text-sm md:text-[15px] text-[#0A192F]/70 font-medium leading-relaxed mb-6">
                                        The Government of India subsidises up to <span className="font-bold text-[#0A192F]">₹78,000</span> of your rooftop system. We handle the application, paperwork, and DISCOM coordination end-to-end.
                                    </p>
                                    <ul className="space-y-2.5 mb-7">
                                        {["Day-one savings cover any remaining EMI", "Subsidy directly credited to your bank", "Application handled by our team"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm md:text-[15px] text-[#0A192F]/75 font-medium">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto flex items-center justify-between pt-5 border-t border-gray-100">
                                        <span className="text-[11px] font-bold tracking-wider uppercase text-[#0A192F]/45">
                                            Deadline · Mar 2027
                                        </span>
                                        <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A192F] hover:text-golden transition-colors">
                                            Apply for Residential
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </motion.div>

                                {/* Path 2 — Commercial / Industrial */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative p-7 md:p-10 rounded-3xl bg-[#0A192F] text-white border border-[#0A192F] shadow-[0_20px_50px_rgba(10,25,47,0.15)] flex flex-col overflow-hidden"
                                >
                                    <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[radial-gradient(circle,rgba(255,183,3,0.18),transparent_70%)] pointer-events-none" />
                                    <span className="relative text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-golden mb-3">
                                        Commercial &amp; Industrial
                                    </span>
                                    <h3 className="relative text-2xl md:text-3xl font-bold tracking-tight mb-4">
                                        OPEX / PPA Model
                                    </h3>
                                    <p className="relative text-sm md:text-[15px] text-white/70 font-medium leading-relaxed mb-6">
                                        We build, finance, and operate the asset. You pay only for the power consumed — at a tariff <span className="font-bold text-white">20–30% below grid rates</span>. Zero CAPEX, predictable cost.
                                    </p>
                                    <ul className="relative space-y-2.5 mb-7">
                                        {["Locked tariff for 25 years", "Books stay clean — no on-balance-sheet asset", "Day-one savings, zero capital outlay"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm md:text-[15px] text-white/80 font-medium">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="relative mt-auto flex items-center justify-between pt-5 border-t border-white/10">
                                        <span className="text-[11px] font-bold tracking-wider uppercase text-white/45">
                                            For 100 kW – 50 MW loads
                                        </span>
                                        <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-golden hover:text-white transition-colors">
                                            Get OPEX Proposal
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* HOW IT WORKS — 4-Step Process */}
                    <section className="w-full py-20 md:py-28 px-6 md:px-12 bg-white overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-14 md:mb-20">
                                <motion.span
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#0A192F]/55 mb-4"
                                >
                                    Our Process
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A192F] leading-[1.05]"
                                >
                                    We Handle Everything.{" "}
                                    <span className="text-golden">You Just Save.</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                                    className="mt-4 text-base md:text-lg text-[#0A192F]/60 font-medium max-w-2xl mx-auto leading-relaxed"
                                >
                                    From your first call to 30 years of guaranteed performance — we own every step so you don&apos;t have to.
                                </motion.p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 relative">
                                {/* Connecting line on desktop */}
                                <div className="hidden lg:block absolute top-[3.25rem] left-[14%] right-[14%] h-px bg-gray-200 z-0" />

                                {[
                                    {
                                        num: "01",
                                        title: "Free Home Visit & Rooftop Survey",
                                        text: "Our engineer visits your site, measures your rooftop, assesses shading, and designs the optimal layout — at zero cost to you.",
                                        icon: (
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                <polyline points="9 22 9 12 15 12 15 22" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        num: "02",
                                        title: "Free 3D Solar Design",
                                        text: "You receive a custom 3D model, a projected savings report, and full subsidy calculations — before any commitment or payment.",
                                        icon: (
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                                <polyline points="2 17 12 22 22 17" />
                                                <polyline points="2 12 12 17 22 12" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        num: "03",
                                        title: "Hassle-Free Installation & Subsidy Support",
                                        text: "We manage permits, DISCOM approvals, and PM Surya Ghar subsidy applications end-to-end. You watch it go up — we handle the paperwork.",
                                        icon: (
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        num: "04",
                                        title: "Solar On. You Save. We Maintain.",
                                        text: "Your system goes live and bills drop from month one. We monitor, maintain, and guarantee performance for 30 years under SolisShield™.",
                                        icon: (
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            </svg>
                                        ),
                                    },
                                ].map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-60px" }}
                                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        whileHover={{ y: -4 }}
                                        className="relative z-10 flex flex-col items-center text-center p-7 md:p-8 rounded-3xl bg-[#FAF9F6] border border-gray-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(10,25,47,0.08)] transition-all group"
                                    >
                                        <div className="relative mb-6">
                                            <div className="w-14 h-14 rounded-2xl bg-golden/10 text-golden flex items-center justify-center group-hover:bg-golden group-hover:text-[#0A192F] transition-colors">
                                                {step.icon}
                                            </div>
                                            <span className="absolute -top-2 -right-2 text-[9px] font-black text-white bg-[#0A192F] rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                                                {i + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-base md:text-lg font-bold tracking-tight text-[#0A192F] mb-3 leading-snug">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-[#0A192F]/60 font-medium leading-relaxed">
                                            {step.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* PHOTO GALLERY STRIP */}
                    <section className="w-full px-6 md:px-12 pb-16 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#0A192F]/40 mb-5">From our installations across Karnataka</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    {
                                        src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=900&auto=format&fit=crop",
                                        label: "Residential Rooftop · Bengaluru",
                                        caption: "3 kW · installed in 1 day",
                                    },
                                    {
                                        src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=900&auto=format&fit=crop",
                                        label: "Industrial Solar Park · Karnataka",
                                        caption: "1.2 MW · zero downtime install",
                                    },
                                    {
                                        src: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=900&auto=format&fit=crop",
                                        label: "Commercial Rooftop · Mysuru",
                                        caption: "Bills dropped 78% from Month 1",
                                    },
                                ].map((photo, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-40px" }}
                                        transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-[0_4px_20px_rgba(10,25,47,0.07)] cursor-pointer"
                                    >
                                        <img
                                            src={photo.src}
                                            alt={photo.label}
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/75 via-[#0A192F]/10 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-golden mb-1">{photo.label}</p>
                                            <p className="text-white text-sm font-bold leading-snug">{photo.caption}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* NATIONAL ALIGNMENT */}
                    <section className="w-full bg-[#FAF9F6] py-32 px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A192F]">Partnering in India&apos;s Clean Energy Sovereignty.</h2>
                            <p className="text-lg md:text-xl text-[#0A192F]/80 font-medium leading-relaxed">As a recognized Startup India entity and MNRE Approved Vendor, our deployments directly contribute to a self-reliant industrial growth.</p>
                        </div>
                        <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
                            <Image src="/modi.jpg" alt="National Alignment" fill className="object-cover rounded-2xl shadow-2xl" />
                        </div>
                    </section>

                    {/* CONTACT FORM */}
                    <section className="w-full py-24 px-6 md:px-12 bg-white rounded-t-[3rem]">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A192F] mb-4"
                            >
                                Power Your Empire.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="text-base md:text-lg text-gray-600 font-medium"
                            >
                                Book your <span className="text-golden font-bold">Free Site Visit</span> &amp; <span className="text-golden font-bold">Consultation</span> — backed by SolisShield&trade;.
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <LeadForm vertical="solar-parks" theme="light" variant="inline" />
                        </motion.div>
                    </section>

                    {/* CALCULATOR */}
                    <section className="w-full bg-[#FAF9F6] py-20 md:py-28 px-6 md:px-12">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-6"
                            >
                                <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#0A192F]/55">
                                    Instant Estimate
                                </span>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A192F] leading-[1.05]">
                                    See your monthly <br /><span className="text-golden">savings</span>, instantly.
                                </h2>
                                <p className="text-base md:text-lg text-[#0A192F]/65 font-medium leading-relaxed">
                                    Move the slider. We&apos;ll show you what stops leaking from your bank account every month — and what it costs to lock that in.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white p-7 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(10,25,47,0.08)] border border-gray-100"
                            >
                                {/* Bill input */}
                                <div className="mb-7">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0A192F]/55">
                                            Avg. Monthly Bill
                                        </label>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-base font-bold text-[#0A192F]/55">₹</span>
                                            <input
                                                type="number"
                                                value={bill}
                                                onChange={(e) => setBill(Math.max(1000, Number(e.target.value) || 1000))}
                                                className="w-28 px-2 py-1.5 rounded-lg border border-gray-200 text-base font-bold tracking-tight text-[#0A192F] focus:outline-none focus:ring-2 focus:ring-golden/40 text-right"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="1000"
                                        max="500000"
                                        step="100"
                                        value={bill}
                                        onChange={(e) => setBill(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer accent-golden"
                                    />
                                </div>

                                {/* Savings vs EMI bar */}
                                {(() => {
                                    const monthlySavings = Math.round(bill * 0.85);
                                    const systemCostInr = requiredKw * 60000;
                                    const subsidyInr = Math.min(78000, requiredKw * 26000);
                                    const netCost = Math.max(0, systemCostInr - subsidyInr);
                                    const emi = Math.round((netCost / 60) * 1.05); // 60-month plan, light financing margin
                                    const netGain = Math.max(0, monthlySavings - emi);
                                    const emiPct = monthlySavings > 0 ? Math.min(100, (emi / monthlySavings) * 100) : 0;

                                    return (
                                        <div className="space-y-5 pt-6 border-t border-gray-100">
                                            <div className="flex items-baseline justify-between">
                                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0A192F]/55">
                                                    Monthly Savings
                                                </span>
                                                <span className="text-3xl md:text-4xl font-black tracking-tight text-golden">
                                                    ₹{monthlySavings.toLocaleString("en-IN")}
                                                </span>
                                            </div>

                                            {/* Stacked bar — EMI inside savings, golden remainder = your gain */}
                                            <div className="relative h-3 w-full rounded-full bg-gray-100 overflow-hidden">
                                                <motion.div
                                                    className="absolute inset-y-0 left-0 bg-golden"
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                                />
                                                <motion.div
                                                    className="absolute inset-y-0 left-0 bg-[#0A192F]"
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: `${emiPct}%` }}
                                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                                />
                                            </div>

                                            <div className="flex items-baseline justify-between text-sm">
                                                <span className="flex items-center gap-2 text-[#0A192F]/65 font-medium">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-[#0A192F]" />
                                                    EMI for 60 months
                                                </span>
                                                <span className="font-bold text-[#0A192F]">
                                                    ₹{emi.toLocaleString("en-IN")}/mo
                                                </span>
                                            </div>
                                            <div className="flex items-baseline justify-between text-sm">
                                                <span className="flex items-center gap-2 text-[#0A192F]/65 font-medium">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-golden" />
                                                    Your monthly gain
                                                </span>
                                                <span className="font-bold text-golden">
                                                    ₹{netGain.toLocaleString("en-IN")}/mo
                                                </span>
                                            </div>

                                            {/* Secondary stats */}
                                            <div className="grid grid-cols-2 gap-6 pt-5 border-t border-gray-100">
                                                <div>
                                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0A192F]/45 mb-1">
                                                        System Size
                                                    </p>
                                                    <p className="text-xl font-bold tracking-tight text-[#0A192F]">
                                                        {requiredKw} <span className="text-xs font-bold text-[#0A192F]/55">kW</span>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#0A192F]/45 mb-1">
                                                        CO₂ Offset / yr
                                                    </p>
                                                    <p className="text-xl font-bold tracking-tight text-[#0A192F]">
                                                        {(carbonEmission / 1000).toFixed(1)} <span className="text-xs font-bold text-[#0A192F]/55">tonnes</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <Link href="/contact" className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-golden text-[#0A192F] font-black px-6 py-4 rounded-xl shadow-[0_10px_25px_rgba(255,183,3,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-transform">
                                                Lock In These Savings
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    );
                                })()}
                            </motion.div>
                        </div>
                    </section>

                    {/* FOUNDERS / ABOUT SECTION */}
                    <section className="w-full py-24 md:py-32 relative z-20">
                        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                                    Solar energy <br /> systems reduce <br /> <span className="text-gray-400">operational bleed</span> <br /> by over 40%.
                                </motion.h2>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
                                    Solispark Energy is a premier utility-scale solar EPC and asset management firm. We specialize in transforming idle industrial assets into high-yield, megawatt-class power generation plants. Backed by industry veterans, we engineer solutions that outlast and outperform.
                                </p>
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="flex items-center gap-6">
                                    <div className="text-6xl md:text-8xl font-black tracking-tighter text-golden">12 MW+</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-gray-500 leading-snug">Successfully <br />Deployed <br />Capacity</div>
                                </motion.div>
                            </div>

                            {/* SIDE-BY-SIDE FOUNDERS */}
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full flex flex-row items-center justify-center gap-4 md:gap-6 h-[400px] md:h-[500px]">
                                <div className="relative w-1/2 h-[90%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                    <Image src="/pruthvik.jpg" alt="Pruthvik Hariprasad" fill className="object-cover" sizes="50vw" />
                                </div>
                                <div className="relative w-1/2 h-[90%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white mt-16">
                                    <Image src="/ranveer.jpg" alt="Ranveer Dorai" fill className="object-cover" sizes="50vw" />
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* SECTION 8 — POWERING INDIA (IMPACT STATS BAND) */}
                    <section className="relative w-full py-20 md:py-28 px-6 md:px-12 bg-[#0A192F] text-white overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0A192F,#08152a)]" />
                        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />
                        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,183,3,0.18),transparent_70%)] pointer-events-none" />

                        <div className="relative z-10 max-w-7xl mx-auto">
                            <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
                                <motion.span
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-golden mb-4"
                                >
                                    Powering India · Cumulative Impact
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
                                >
                                    Numbers we&apos;re <span className="text-golden">proud of.</span>
                                </motion.h2>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10 border border-white/10">
                                {[
                                    { num: "22 GWh+", label: "Annual Generation" },
                                    { num: "18,000+", label: "Tonnes CO₂ Offset" },
                                    { num: "₹150 Cr+", label: "Lifetime Client Savings" },
                                    { num: "12,500+", label: "Lives Powered" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                        className="bg-[#0A192F]/95 px-5 py-7 md:py-8 flex flex-col"
                                    >
                                        <span className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-golden leading-none">
                                            {stat.num}
                                        </span>
                                        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase text-white/55 mt-2">
                                            {stat.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SECTION 9 — REAL-TIME MONITORING APP TEASER */}
                    <section className="w-full py-20 md:py-28 px-6 md:px-12 bg-[#FAF9F6]">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                            {/* LEFT — copy */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="order-2 lg:order-1 space-y-6"
                            >
                                <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#0A192F]/55">
                                    SolisShield™ Live · Always-On Monitoring
                                </span>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A192F] leading-[1.05]">
                                    Track every panel, <br />
                                    <span className="text-golden">24/7.</span>
                                </h2>
                                <p className="text-base md:text-lg text-[#0A192F]/65 font-medium leading-relaxed max-w-xl">
                                    Live generation, panel-level health, weather alerts, and ROI snapshots — straight to your phone. Our team gets the same alerts you do, so issues get fixed before they cost you.
                                </p>
                                <ul className="space-y-3 pt-2">
                                    {[
                                        "Real-time generation & savings ticker",
                                        "Panel-level fault detection in under 60 seconds",
                                        "Weather + storm alerts with SolisShield™ response",
                                        "Monthly performance reports — auto-emailed",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm md:text-[15px] text-[#0A192F]/75 font-medium">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* RIGHT — Phone mockup */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="order-1 lg:order-2 flex justify-center"
                            >
                                <div className="relative w-[280px] md:w-[320px] aspect-[9/19] rounded-[3rem] bg-[#0A192F] shadow-[0_30px_80px_rgba(10,25,47,0.25)] border-[10px] border-[#0A192F] overflow-hidden">
                                    {/* Status bar */}
                                    <div className="absolute top-0 inset-x-0 px-7 py-3 flex items-center justify-between text-white text-[10px] font-bold z-20">
                                        <span>9:41</span>
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black" />
                                        <div className="flex items-center gap-1.5">
                                            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" aria-hidden="true"><rect x="0" y="6" width="3" height="4" rx="0.5" /><rect x="4" y="4" width="3" height="6" rx="0.5" /><rect x="8" y="2" width="3" height="8" rx="0.5" /><rect x="12" y="0" width="2" height="10" rx="0.5" opacity="0.5" /></svg>
                                            <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor" aria-hidden="true"><path d="M1 7C3 4.5 5.5 3 8 3s5 1.5 7 4l-1 1c-1.5-2-3.5-3-6-3s-4.5 1-6 3L1 7z" /></svg>
                                            <span>92%</span>
                                        </div>
                                    </div>

                                    {/* App content */}
                                    <div className="absolute inset-0 pt-12 px-5 pb-6 flex flex-col gap-4">
                                        {/* App header */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-golden">SolisShield™ Live</p>
                                                <p className="text-white/50 text-[10px] font-medium">Tue, 28 Apr · Bengaluru</p>
                                            </div>
                                            <div className="w-7 h-7 rounded-full bg-golden/20 flex items-center justify-center">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            </div>
                                        </div>

                                        {/* Big stat */}
                                        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 backdrop-blur-sm">
                                            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/50 mb-1.5">Generated Today</p>
                                            <p className="text-3xl font-black tracking-tight text-golden leading-none">
                                                12.4 <span className="text-base text-white/70">kWh</span>
                                            </p>
                                            <div className="mt-3 flex items-end gap-1 h-8">
                                                {[0.3, 0.5, 0.7, 0.9, 1, 0.85, 0.6].map((h, i) => (
                                                    <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-golden/30 to-golden" style={{ height: `${h * 100}%` }} />
                                                ))}
                                            </div>
                                            <div className="flex justify-between mt-1.5 text-[8px] text-white/40 font-bold tracking-wide">
                                                <span>6AM</span><span>9</span><span>12</span><span>3</span><span>6PM</span>
                                            </div>
                                        </div>

                                        {/* 2x2 mini cards */}
                                        <div className="grid grid-cols-2 gap-2.5">
                                            {[
                                                { label: "Panels Online", value: "24/24", tone: "green" },
                                                { label: "Voltage", value: "232V", tone: "neutral" },
                                                { label: "Saved (mo)", value: "₹4,820", tone: "gold" },
                                                { label: "ROI", value: "104%", tone: "gold" },
                                            ].map((c, i) => (
                                                <div key={i} className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5">
                                                    <p className="text-[8px] font-bold tracking-[0.18em] uppercase text-white/50 mb-1">
                                                        {c.label}
                                                    </p>
                                                    <p className={`text-base font-black tracking-tight ${c.tone === "gold" ? "text-golden" : c.tone === "green" ? "text-green-400" : "text-white"}`}>
                                                        {c.value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Status pill */}
                                        <div className="mt-auto inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-green-400">
                                                All Systems Healthy
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* 10. THE VERDICT (Premium Social Proof) */}
                    <section className="w-full py-32 px-6 md:px-12 bg-white overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-16 text-[#0A192F] tracking-tight leading-[1.05]">
                                The <span className="text-golden">Verdict.</span>
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                                {/* Left Side: High-End Visual Placeholder */}
                                <div className="lg:col-span-2 relative aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] overflow-hidden bg-[#0A192F] border border-gray-100 shadow-2xl">
                                    <div className="absolute top-6 right-6 z-50 flex items-center gap-2 bg-[#0A192F]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl">
                                        <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                                        <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Verified Customer</span>
                                    </div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={testIndex}
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.97 }}
                                            transition={{ duration: 0.55 }}
                                            className="absolute inset-0 w-full h-full"
                                        >
                                            <img
                                                src={testimonials[testIndex].photo}
                                                alt={testimonials[testIndex].name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent pointer-events-none" />
                                            <div className="absolute bottom-6 left-6">
                                                <p className="text-golden text-[9px] font-bold tracking-[0.25em] uppercase mb-1">Solispark Customer · Bengaluru</p>
                                                <p className="text-white text-base font-bold leading-snug">{testimonials[testIndex].name}</p>
                                                <p className="text-white/60 text-xs font-medium mt-0.5">{testimonials[testIndex].role.split("·")[0].trim()}</p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Right Side: Direct Response Copy */}
                                <div className="lg:col-span-3 space-y-12">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={testIndex}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            className="space-y-8"
                                        >
                                            <span className="block text-6xl font-serif text-golden/25 leading-none select-none" aria-hidden="true">&ldquo;</span>
                                            <p className="text-xl md:text-2xl font-medium text-[#0A192F]/80 leading-[1.4] tracking-tight">
                                                {testimonials[testIndex].quote}
                                            </p>
                                            <div>
                                                <p className="text-xl md:text-2xl font-bold text-[#0A192F] tracking-tight">{testimonials[testIndex].name}</p>
                                                <p className="text-sm text-[#0A192F]/55 font-medium mt-1">{testimonials[testIndex].role}</p>
                                                <div className="flex flex-wrap items-center gap-3 mt-3">
                                                    <div className="flex gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} width="18" height="18" fill="#FBBF24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                        ))}
                                                    </div>
                                                    <span className="px-3 py-1 rounded-full bg-golden/10 text-golden text-[11px] font-bold tracking-wide">
                                                        {testimonials[testIndex].savings}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="flex gap-6 pt-8">
                                        <button onClick={() => setTestIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))} className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-golden hover:border-golden transition-all group active:scale-95">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:text-[#0A192F]"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
                                        </button>
                                        <button onClick={() => setTestIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))} className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-golden hover:border-golden transition-all group active:scale-95">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:text-[#0A192F]"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            {/* POPUP LEAD CAPTURE — appears after 10s, dismissed by X or backdrop click */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        key="popup-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:p-4"
                        onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
                    >
                        <motion.div
                            key="popup-card"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 60 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full sm:max-w-lg md:max-w-3xl bg-[#0A192F] rounded-t-[2rem] sm:rounded-[2rem] shadow-[0_-20px_60px_rgba(0,0,0,0.5)] sm:shadow-[0_40px_120px_rgba(0,0,0,0.6)] flex flex-col md:flex-row max-h-[92svh] sm:max-h-[90vh] overflow-hidden"
                        >
                            {/* Close — always anchored to top-right, above scroll */}
                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0"
                                aria-label="Close"
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Left — family photo, desktop only */}
                            <div className="hidden md:block relative w-[42%] shrink-0">
                                <img
                                    src="/family-rooftop-landscape.jpg"
                                    alt="Indian family with rooftop solar"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A192F]/70 pointer-events-none" />
                                <div className="absolute bottom-8 left-6 right-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-green-400 text-[10px] font-bold tracking-[0.2em] uppercase">119+ Families Already Saving</span>
                                    </div>
                                    <p className="text-white font-bold text-lg leading-snug">
                                        Your bills could look<br />like this, too.
                                    </p>
                                </div>
                            </div>

                            {/* Right — form, scrollable on mobile */}
                            <div className="flex-1 overflow-y-auto overscroll-contain">
                                {/* drag handle on mobile only */}
                                <div className="flex justify-center pt-3 pb-1 sm:hidden">
                                    <div className="w-10 h-1 rounded-full bg-white/20" />
                                </div>
                                <div className="p-5 sm:p-7 md:p-9 pt-3 sm:pt-10 md:pt-9">
                                    <LeadForm vertical="solar-parks" theme="dark" variant="card" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}