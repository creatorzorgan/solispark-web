"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <main className="min-h-screen pt-24 md:pt-32 pb-24 bg-[#FAF9F6] text-[#0A192F]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Page header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12 md:mb-16"
                >
                    <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#0A192F]/55 mb-4">
                        Free Consultation · No Obligation
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A192F] leading-[1.04] mb-4">
                        Get Your <span className="text-golden">Free Estimate.</span>
                    </h1>
                    <p className="text-base md:text-lg text-[#0A192F]/65 font-medium max-w-xl leading-relaxed">
                        Share your details and our engineers will design a site-specific savings model — at zero cost, zero commitment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* LEFT — trust signals + contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-4 space-y-8"
                    >
                        {/* What happens next */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
                            <h2 className="text-base font-bold tracking-tight text-[#0A192F] mb-5">
                                What happens next
                            </h2>
                            <ol className="space-y-4">
                                {[
                                    "We review your form within 24 hours",
                                    "An engineer calls to understand your load & rooftop",
                                    "You receive a free 3D design + savings report",
                                    "We schedule a no-cost site visit at your convenience",
                                ].map((step, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-[#0A192F]/70 font-medium">
                                        <span className="w-5 h-5 rounded-full bg-golden/15 text-golden flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Direct contact */}
                        <div className="bg-[#0A192F] rounded-3xl p-7 text-white space-y-4">
                            <h2 className="text-base font-bold tracking-tight mb-1">Prefer to call?</h2>
                            <a href="tel:+919886886122" className="flex items-center gap-3 text-sm font-bold text-golden hover:text-white transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12 19.79 19.79 0 0 1 1.06 3.38 2 2 0 0 1 3.05 1.2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                                </svg>
                                +91 9886886122
                            </a>
                            <a href="tel:+917760375599" className="flex items-center gap-3 text-sm font-bold text-golden hover:text-white transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12 19.79 19.79 0 0 1 1.06 3.38 2 2 0 0 1 3.05 1.2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                                </svg>
                                +91 7760375599
                            </a>
                            <a href="mailto:solisparkenergy@gmail.com" className="flex items-center gap-3 text-sm font-bold text-golden hover:text-white transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                                solisparkenergy@gmail.com
                            </a>
                            <div className="pt-3 border-t border-white/10 text-xs text-white/50 font-medium leading-relaxed">
                                #244, F Block, 15th Main Road,<br />
                                Sahakarnagar, Bengaluru – 560092
                            </div>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-3">
                            {["MNRE Certified", "Startup India", "SolisShield™ Backed"].map((badge) => (
                                <span key={badge} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[11px] font-bold tracking-wide text-[#0A192F]/60">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Tally form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-8 bg-white border border-gray-100 rounded-[2rem] shadow-[0_20px_60px_rgba(10,25,47,0.06)] overflow-hidden"
                    >
                        <div className="px-7 pt-7 pb-4 border-b border-gray-100">
                            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0A192F]/50">
                                Secure Consultation Form · SolisShield™
                            </span>
                            <p className="mt-1 text-sm text-[#0A192F]/55 font-medium">
                                Takes under 2 minutes. No spam, ever.
                            </p>
                        </div>
                        <div className="px-2">
                            <iframe
                                src="https://tally.so/r/VL87lE"
                                frameBorder="0"
                                title="Contact Form"
                                className="w-full min-h-[640px] border-0"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
