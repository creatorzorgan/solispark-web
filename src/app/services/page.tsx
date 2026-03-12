"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const serviceData = [
    {
        id: "capex",
        title: "CAPEX",
        headline: "Turnkey Execution. Uncapped ROI.",
        sub: "Complete engineering, procurement, and construction for maximum yield.",
        p1: "Stop renting your power. The CAPEX model grants you 100% direct ownership of your customized solar infrastructure from day one. Our elite engineering teams handle the entire lifecycle—from barren land or empty rooftops to a fully synchronized grid connection.",
        p2: "Capture 40% accelerated depreciation tax benefits, achieve lightning-fast 4-5 year break-even periods, and secure decades of free, reliable energy using Tier-1 N-Type TOPCon technology."
    },
    {
        id: "opex",
        title: "OPEX",
        headline: "Solar as a Service. Zero Capital Risk.",
        sub: "Immediate cost reduction without touching your working capital.",
        p1: "We fund it. We build it. We maintain it. You simply pay for the discounted clean energy it generates. Through our Power Purchase Agreements (PPA), SolisPark fully absorbs the capital expenditure and operational risk.",
        p2: "Transform your massive energy overhead into a predictable, reduced operational expense (OPEX). Enjoy day-one cash flow positivity. At the end of the 15-25 year term, the multi-crore asset transfers directly to your balance sheet."
    },
    {
        id: "ground",
        title: "Ground mounted",
        headline: "Utility-Scale Power. Limitless Terrain.",
        sub: "Megawatt-class generation for expansive industrial land and government EPC tenders.",
        p1: "When rooftop space isn't enough, we engineer massive ground-mounted solar parks. Utilizing advanced bifacial modules and smart tracking structures, we maximize land-use efficiency and total energy yield.",
        p2: "Built to withstand extreme environmental loads, our utility-scale deployments are the backbone of India's heavy industry transition to net-zero."
    },
    {
        id: "amc",
        title: "Annual Maintenance Contract",
        headline: "Proactive Intelligence. Peak Performance.",
        sub: "Data-driven O&M to protect your multi-crore infrastructure.",
        p1: "Solar is a heavy-duty asset; we are your insurance. Our Annual Maintenance Contracts go beyond basic cleaning. We deploy advanced thermal imaging, string-level diagnostics, and real-time SCADA monitoring.",
        p2: "By predicting component wear before it happens, we ensure zero preventable downtime and guarantee your plant operates at absolute peak generation capacity year-round."
    },
    {
        id: "group",
        title: "Group Captive Projects",
        headline: "Shared Infrastructure. Sovereign Power.",
        sub: "Leverage open-access regulations to off-take dedicated solar power from remote parks.",
        p1: "Don't have the space? No problem. The Group Captive model allows multiple industrial consumers to co-invest in a massive, off-site solar farm.",
        p2: "Draw high-volume, discounted electricity directly through the local grid under open-access policies. Enjoy the economies of scale and tax benefits of a megawatt plant without dedicating a single square foot of your own facility."
    },
    {
        id: "resco",
        title: "Solar Installation Under RESCO Model",
        headline: "The RESCO Architecture. Pure Performance.",
        sub: "Renewable Energy Service Company execution. You host, we generate.",
        p1: "Under the strict RESCO framework, SolisPark acts as your dedicated independent power producer. We finance, install, operate, and own the solar plant entirely on your premises.",
        p2: "You enter into a long-term agreement at a tariff significantly cheaper than inflated DISCOM rates. It is a completely frictionless, zero-CapEx pathway to immediately decarbonize your supply chain."
    }
];

export default function Services() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <main className="min-h-screen pt-32 pb-24 text-[#FBFBFB] bg-[#0A192F]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center lg:text-left"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Deploying <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-[#E5A500]">Utility-Scale Power</span>
                    </h1>
                    <p className="text-xl text-[#FBFBFB]/70 max-w-3xl font-medium leading-relaxed">
                        Industry-defying capital models. Choose to partner for performance or direct ownership.
                    </p>
                </motion.div>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    
                    {/* Sidebar / Tabs */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-full lg:w-1/3 space-y-4"
                    >
                        <h2 className="text-2xl font-bold mb-8 text-white px-2">All Services</h2>
                        {serviceData.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left px-6 py-4 rounded-full border transition-all duration-300 font-medium ${
                                    activeTab === index 
                                    ? "bg-white/10 border-golden text-white shadow-[0_0_15px_rgba(255,183,3,0.2)]" 
                                    : "bg-transparent border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                                }`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </motion.div>

                    {/* Dynamic Content Renderer */}
                    <div className="w-full lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group hover:border-golden/30 transition-all duration-500"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 font-bold text-9xl pointer-events-none group-hover:opacity-10 transition-opacity">
                                    0{activeTab + 1}
                                </div>
                                
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white pr-12">
                                    {serviceData[activeTab].headline}
                                </h3>
                                <h4 className="text-xl md:text-2xl text-golden mb-8 font-medium">
                                    {serviceData[activeTab].sub}
                                </h4>
                                
                                <div className="space-y-6 text-[#FBFBFB]/80 text-lg leading-relaxed font-medium mb-12">
                                    <p>{serviceData[activeTab].p1}</p>
                                    <p>{serviceData[activeTab].p2}</p>
                                </div>

                                <Link 
                                    href="/contact" 
                                    className="inline-block bg-golden hover:bg-[#E5A500] text-[#0A192F] font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-1 tracking-tight"
                                >
                                    Initiate Mega-Project
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </main>
    );
}
