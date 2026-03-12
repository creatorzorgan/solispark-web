"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
    const [expandedFounder, setExpandedFounder] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-[#0A192F] text-[#FBFBFB] overflow-hidden">
            {/* SECTION 1: THE MISSION (Split Layout) */}
            <section className="relative w-full min-h-screen flex items-center pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full h-[50vh] md:h-[80vh] rounded-[2rem] overflow-hidden shadow-2xl"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop" 
                            alt="Utility Scale Solar Field" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>
                    
                    {/* Right: Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                            Architects of India's <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#E5A500]">Energy Transformation.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[#FBFBFB]/80 leading-relaxed font-medium">
                            SolisPark Energy isn't just a provider; we are the infrastructure backbone for the next generation of Indian industry. Guided by veteran expertise, we engineer megawatt solutions that outlast and outperform.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: THE EDGE (4-Block Icon Grid) */}
            <section className="w-full bg-[#FAF9F6] text-[#111111] py-32 rounded-t-[3rem] relative z-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-20 text-center"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A192F]">
                            The SolisPark Edge
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Engineering Excellence", text: "Top-tier N-Type TOPCon tech ensuring maximum yield density per acre.", icon: <svg className="w-12 h-12 text-[#FFB703]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
                            { step: "02", title: "Integrity", text: "Transparent EPC execution across all utility-scale infrastructure milestones.", icon: <svg className="w-12 h-12 text-[#FFB703]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg> },
                            { step: "03", title: "Innovation", text: "Advanced O&M protocols and real-time digital tracking systems.", icon: <svg className="w-12 h-12 text-[#FFB703]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg> },
                            { step: "04", title: "Social Impact", text: "An unyielding commitment to India's net-zero 2070 vision and clean sovereignty.", icon: <svg className="w-12 h-12 text-[#FFB703]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg> }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col group"
                            >
                                <div className="text-[#0A192F] mb-8 group-hover:text-golden transition-colors">
                                    {item.icon}
                                </div>
                                <div className="text-xl font-black text-golden mb-2">{item.step}</div>
                                <h3 className="text-2xl font-bold text-[#0A192F] mb-4">{item.title}</h3>
                                <p className="text-base text-gray-600 font-medium leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE LEADERSHIP */}
            <section className="w-full bg-[#0A192F] py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#FBFBFB]">
                            The Architects<br/>of Transformation.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {[
                            { name: "Pruthvik Hariprasad", title: "Director · Strategist", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", note: "The solar industry doesn't need more vendors; it needs strategists. By crossing MBA frameworks with B.Tech engineering reality, we've unlocked a deployment model that virtually eliminates Capex risk while guaranteeing decades of high-yield performance." },
                            { name: "Ranveer Dorai", title: "Director · Innovator", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", note: "True energy sovereignty isn't just about throwing panels on a roof. It's about millimeter-level technical precision. We integrate top-tier N-Type cells with advanced mounting structures to ensure our utility-scale arrays survive, adapt, and dominate the elements." }
                        ].map((founder, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col group transition-all border border-transparent hover:border-white/10"
                            >
                                <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] mb-8 transition-transform duration-700">
                                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight text-[#FBFBFB] group-hover:text-golden transition-colors">{founder.name}</h3>
                                    <p className="text-white/60 font-bold tracking-widest uppercase text-sm mb-6">{founder.title}</p>
                                    <button 
                                        onClick={() => setExpandedFounder(expandedFounder === idx ? null : idx)}
                                        className="inline-flex items-center gap-2 border border-golden text-golden hover:bg-golden hover:text-[#0A192F] font-bold px-6 py-3 rounded-full transition-all tracking-wide text-sm"
                                    >
                                        A Note from {founder.name.split(" ")[0]}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${expandedFounder === idx ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {expandedFounder === idx && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            className="overflow-hidden text-center"
                                        >
                                            <p className="text-lg text-white/80 leading-relaxed font-medium px-4 pb-4">
                                                "{founder.note}"
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE CERTIFICATION */}
            <section className="w-full bg-[#0A192F] pb-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl md:text-5xl font-bold text-[#FBFBFB] tracking-tight leading-tight">
                                Government Backed <br/>& Certified.
                            </h3>
                            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-medium max-w-2xl">
                                Recognized by the Ministry of New and Renewable Energy (India) for utility-scale deployment. We meet the highest national standards for infrastructure reliability, safety, and operational excellence.
                            </p>
                        </div>
                        
                        {/* Interactive Image Preview */}
                        <div className="w-full lg:w-[400px] relative group cursor-pointer">
                            <div className="absolute inset-0 bg-golden/20 rounded-2xl blur-xl group-hover:bg-golden/40 transition-all duration-500"></div>
                            <div className="relative bg-white p-6 rounded-2xl shadow-2xl overflow-hidden border border-white/20 transform group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center min-h-[200px]">
                                <div className="absolute inset-0 bg-[#0A192F]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-sm">
                                    <span className="text-golden font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                        View Certificate
                                    </span>
                                </div>
                                <img src="/mnre-logo.png" alt="MNRE Certificate Preview" className="w-[80%] h-auto object-contain rounded opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
