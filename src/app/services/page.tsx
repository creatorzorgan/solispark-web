"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

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
        p1: "We fund it. We build it. We maintain it. You simply pay for the discounted electricity it generates. Through our elite PPA models, SolisPark absorbs 100% of the CapEx and operational risk.",
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
                    className="mb-20 text-center lg:text-left"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Industrial <br/><span className="text-golden">Power Models.</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-3xl font-medium leading-relaxed">
                        Industry-defying capital models. Choose to partner for performance or direct ownership. 
                        Free Site Visits & Consultations included.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Sidebar */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-full lg:w-1/3 space-y-4"
                    >
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-400 px-2">Vertical Selection</h2>
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
                                    Initiate Project
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
}