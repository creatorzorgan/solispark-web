"use client";

import { motion } from "framer-motion";

export default function FAQ() {
    return (
        <main className="min-h-screen pt-32 pb-24 text-[#FBFBFB]">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-[#E5A500]">Clarity</span>
                    </h1>
                    <p className="text-xl text-[#FBFBFB]/70 mb-12 font-medium leading-relaxed">
                        Straightforward answers to navigating your megawatt transition.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6"
                >
                    <details className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl [&_summary::-webkit-details-marker]:hidden cursor-pointer" open>
                        <summary className="flex items-center justify-between font-bold text-2xl outline-none">
                            What is the lifespan of the underlying tech?
                            <span className="transition-transform group-open:rotate-180 text-golden">
                                <svg fill="none" height="28" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="text-[#FBFBFB]/70 text-lg leading-relaxed font-medium">
                                We engineer for <strong>25+ years of peak performance.</strong> We exclusively deploy Tier-1 components like N-Type TOPCon cells and heavy-duty single-axis trackers, entirely insulated by a <strong>30-year industry-exclusive warranty</strong> via our partners at Axitec.
                            </p>
                        </div>
                    </details>
                    
                    <details className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary className="flex items-center justify-between font-bold text-2xl outline-none">
                            Will the installation disrupt my operations?
                            <span className="transition-transform group-open:rotate-180 text-golden">
                                <svg fill="none" height="28" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="text-[#FBFBFB]/70 text-lg leading-relaxed font-medium">
                                <strong>Zero disruption.</strong> Our EPC teams execute parallel to your daily operations. From securing the foundation to advanced grid integration, the infrastructure is assembled cleanly, quietly, and entirely independently of your core mechanical infrastructure until the final cut-over.
                            </p>
                        </div>
                    </details>

                    <details className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                        <summary className="flex items-center justify-between font-bold text-2xl outline-none">
                            What is the 'catch' with the OPEX / BOOT model?
                            <span className="transition-transform group-open:rotate-180 text-golden">
                                <svg fill="none" height="28" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="text-[#FBFBFB]/70 text-lg leading-relaxed font-medium">
                                There is none. It is a <strong>pure performance partnership</strong>. SolisPark takes 100% of the CAPEX risk on our balance sheet. We monetize our layout over the long term, while you instantly decarbonize your footprint and secure power at a drastically discounted, flat tariff rate without spending a single rupee upfront.
                            </p>
                        </div>
                    </details>
                </motion.div>
            </div>
        </main>
    );
}
