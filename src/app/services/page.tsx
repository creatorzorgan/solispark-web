"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/leadgen/LeadForm";

const serviceData = [
    {
        id: "capex",
        title: "CAPEX",
        headline: "Ownership. Tax Benefits. Uncapped ROI.",
        sub: "Complete turnkey execution for maximum yield sovereignty.",
        p1: "Stop renting your power from the grid. The CAPEX model grants you 100% direct ownership of your solar infrastructure from Day 1. Our engineering team handles everything—from land acquisition to grid synchronization.",
        p2: "Capture 40% accelerated depreciation, achieve a 4-year break-even, and secure decades of free energy using specialized PMSG integrations and Tier-1 TOPCon technology."
    },
    {
        id: "opex",
        title: "OPEX",
        headline: "Solar as a Service. Zero Capital Risk.",
        sub: "Immediate operational savings without touching your working capital.",
        p1: "We fund it. We build it. We maintain it. You simply pay for the discounted electricity it generates. Through our elite PPA models, Solispark absorbs 100% of the CapEx and operational risk.",
        p2: "Transform a massive overhead into a predictable, reduced expense. Enjoy immediate cash-flow positivity. At the end of the term, the multi-crore asset transfers to your balance sheet for free."
    },
    {
        id: "ground",
        title: "Ground Mounted",
        headline: "Utility-Scale Dominance.",
        sub: "Megawatt-class generation for heavy industrial assets.",
        p1: "When rooftops aren't enough, we engineer massive solar parks. Utilizing advanced bifacial modules and high-precision tracking, we maximize every square inch of land for peak energy density.",
        p2: "Built to dominate extreme environmental loads, our utility-scale deployments are the backbone of clean energy sovereignty for India's industrial leaders."
    },
    {
        id: "residential",
        title: "Residential",
        headline: "The Premium Home Asset.",
        sub: "State-of-the-art rooftop solutions for modern living.",
        p1: "Solar is the highest-yielding upgrade you can give your home. We install elite, aesthetic rooftop arrays that slash your domestic bills and increase your property value instantly.",
        p2: "Enjoy a frictionless transition with our 'White-Glove' service, including free site visits, design consultation, and long-term performance monitoring."
    },
    {
        id: "amc",
        title: "O&M Contracts",
        headline: "Bulletproof Yield. Peak Performance.",
        sub: "Data-driven maintenance to protect your infrastructure.",
        p1: "Solar is a heavy-duty asset; we are your insurance. Our Annual Maintenance Contracts go beyond cleaning. We deploy thermal imaging, string-level diagnostics, and real-time SCADA monitoring.",
        p2: "By predicting component failures before they happen, we ensure zero preventable downtime and guarantee your plant operates at 100% capacity year-round."
    }
];

export default function Services() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <main className="min-h-screen pt-32 pb-24 text-[#0A192F] bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-14 text-center lg:text-left"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Solar Solutions.<br /><span className="text-golden">Every Scale.</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-3xl font-medium leading-relaxed">
                        From a single home rooftop to a 50 MW industrial plant — we design, build, and guarantee every system. Choose your ownership model or browse by property type below.
                    </p>
                </motion.div>

                {/* VERTICAL NAVIGATION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-16"
                >
                    <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-5">Browse by property type</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                        {[
                            { href: "/residential", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label: "Home & Family", badge: "Up to ₹78K subsidy" },
                            { href: "/commercial", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>, label: "Business & Offices", badge: "20–30% below grid" },
                            { href: "/industrial", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10l4-4 4 4 4-4 4 4v10"/></svg>, label: "Factory & Plant", badge: "40%+ cost reduction" },
                            { href: "/apartments", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></svg>, label: "Apartments & RWAs", badge: "50%+ common bill cut" },
                            { href: "/ev-charging", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="9" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>, label: "EV Charging", badge: "Near-zero charge cost" },
                            { href: "/industrial", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>, label: "Power Plant Set Up", badge: "MW-scale generation" },
                        ].map((v, i) => (
                            <Link key={i} href={v.href}
                                className="group flex flex-col items-start gap-3 p-4 rounded-2xl border border-gray-200 bg-white hover:border-golden hover:shadow-[0_8px_30px_rgba(10,25,47,0.08)] hover:-translate-y-1 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-golden/10 text-golden flex items-center justify-center group-hover:bg-golden group-hover:text-[#0A192F] transition-colors">{v.icon}</div>
                                <div>
                                    <p className="text-sm font-bold text-[#0A192F] leading-snug">{v.label}</p>
                                    <p className="text-[10px] font-bold text-golden/80 mt-0.5">{v.badge}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Sidebar */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-full lg:w-1/3 space-y-4"
                    >
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-400 px-2">Ownership Models</h2>
                        {serviceData.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left px-8 py-5 rounded-2xl border transition-all duration-300 font-bold text-lg ${
                                    activeTab === index 
                                    ? "bg-[#0A192F] border-[#0A192F] text-white shadow-xl scale-[1.02]" 
                                    : "bg-white border-gray-200 text-gray-400 hover:border-golden hover:text-golden"
                                }`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </motion.div>

                    {/* Content Area */}
                    <div className="w-full lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white border border-gray-100 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-bold text-[12rem] pointer-events-none group-hover:opacity-[0.06] transition-opacity leading-none tracking-tighter">
                                    {activeTab + 1}
                                </div>
                                
                                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#0A192F]">
                                    {serviceData[activeTab].headline}
                                </h3>
                                <h4 className="text-xl md:text-2xl text-golden mb-10 font-bold">
                                    {serviceData[activeTab].sub}
                                </h4>
                                
                                <div className="space-y-8 text-gray-600 text-lg leading-relaxed font-medium mb-12">
                                    <p>{serviceData[activeTab].p1}</p>
                                    <p>{serviceData[activeTab].p2}</p>
                                </div>

                                <Link
                                    href="/contact"
                                    className="inline-block bg-golden hover:bg-[#E5A500] text-[#0A192F] font-bold px-10 py-5 rounded-2xl transition-all shadow-xl hover:-translate-y-1"
                                >
                                    Get Free Estimate
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* BOTTOM LEAD CAPTURE */}
            <div className="relative mt-24 py-20 md:py-28 px-6 md:px-12 bg-[#0A192F] rounded-[2.5rem] text-white overflow-hidden">
                <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,183,3,0.18),transparent_70%)] pointer-events-none" />
                <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="space-y-4 max-w-lg">
                        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-golden">
                            Free Site Visit · Solispark
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.05]">
                            Not sure which model fits you?
                        </h2>
                        <p className="text-base text-white/65 font-medium leading-relaxed">
                            Our engineers will analyse your load, rooftop, and budget — and recommend the right structure. Free, in under 48 hours.
                        </p>
                    </div>
                    <div className="w-full lg:w-auto lg:min-w-[420px]">
                        <LeadForm vertical="commercial" theme="dark" variant="card" />
                    </div>
                </div>
            </div>
        </main>
    );
}