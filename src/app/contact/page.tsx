"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

const BILL_RANGES = [
    "Under ₹2,000",
    "₹2,000 – ₹5,000",
    "₹5,000 – ₹10,000",
    "₹10,000 – ₹25,000",
    "₹25,000 – ₹50,000",
    "Above ₹50,000",
];

const VERTICALS = [
    { value: "industrial-capex", label: "Industrial – CAPEX" },
    { value: "industrial-opex", label: "Industrial – OPEX / BOOT" },
    { value: "residential", label: "Premium Residential" },
    { value: "utility-scale", label: "Utility-Scale / Solar Park" },
    { value: "ev-charging", label: "EV Charging Infrastructure" },
    { value: "commercial", label: "Commercial Rooftop" },
];

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        whatsapp: "",
        billRange: "",
        pincode: "",
        vertical: "",
    });
    const [status, setStatus] = useState<Status>("idle");

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error();
            setStatus("success");
            setForm({ name: "", email: "", whatsapp: "", billRange: "", pincode: "", vertical: "" });
        } catch {
            setStatus("error");
        }
    }

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
                            {["MNRE Certified", "Startup India", "Solispark Backed"].map((badge) => (
                                <span key={badge} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[11px] font-bold tracking-wide text-[#0A192F]/60">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — consultation form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-8 bg-white border border-gray-100 rounded-[2rem] shadow-[0_20px_60px_rgba(10,25,47,0.06)] overflow-hidden"
                    >
                        <div className="px-7 pt-7 pb-4 border-b border-gray-100">
                            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0A192F]/50">
                                Secure Consultation Form · Solispark
                            </span>
                            <p className="mt-1 text-sm text-[#0A192F]/55 font-medium">
                                Takes under 2 minutes. No spam, ever.
                            </p>
                        </div>

                        <div className="p-7 md:p-10">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.96 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-golden/10 border-2 border-golden flex items-center justify-center">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6 9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <h2 className="text-2xl font-black uppercase tracking-tight text-[#0A192F]">
                                            Request Received
                                        </h2>
                                        <p className="text-[#0A192F]/60 font-medium max-w-sm text-sm leading-relaxed">
                                            Our engineering team will reach out within 24 hours to schedule your free site visit and savings analysis.
                                        </p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-2 text-sm font-bold text-golden underline underline-offset-4"
                                        >
                                            Submit another enquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                                    >
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-[#0A192F]/50">Full Name *</label>
                                            <input
                                                name="name"
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Rajat Sharma"
                                                className="p-3.5 rounded-xl border border-gray-200 bg-[#FAF9F6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-golden"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-[#0A192F]/50">Email Address *</label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="rajat@company.com"
                                                className="p-3.5 rounded-xl border border-gray-200 bg-[#FAF9F6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-golden"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-[#0A192F]/50">WhatsApp Number</label>
                                            <input
                                                name="whatsapp"
                                                type="tel"
                                                value={form.whatsapp}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                className="p-3.5 rounded-xl border border-gray-200 bg-[#FAF9F6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-golden"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-[#0A192F]/50">PIN Code</label>
                                            <input
                                                name="pincode"
                                                type="text"
                                                value={form.pincode}
                                                onChange={handleChange}
                                                placeholder="560001"
                                                className="p-3.5 rounded-xl border border-gray-200 bg-[#FAF9F6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-golden"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-[#0A192F]/50">Avg. Monthly Bill</label>
                                            <select
                                                name="billRange"
                                                value={form.billRange}
                                                onChange={handleChange}
                                                className="p-3.5 rounded-xl border border-gray-200 bg-[#FAF9F6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-golden"
                                            >
                                                <option value="">Select range</option>
                                                {BILL_RANGES.map((r) => (
                                                    <option key={r} value={r}>{r}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-[#0A192F]/50">Project Type</label>
                                            <select
                                                name="vertical"
                                                value={form.vertical}
                                                onChange={handleChange}
                                                className="p-3.5 rounded-xl border border-gray-200 bg-[#FAF9F6] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-golden"
                                            >
                                                <option value="">Select type</option>
                                                {VERTICALS.map((v) => (
                                                    <option key={v.value} value={v.value}>{v.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {status === "error" && (
                                            <p className="sm:col-span-2 text-center text-red-500 text-sm font-bold">
                                                Something went wrong. Please try again or call us directly.
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="sm:col-span-2 mt-2 bg-golden text-[#0A192F] font-black py-4 rounded-2xl text-base shadow-lg hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3"
                                        >
                                            {status === "loading" ? (
                                                <>
                                                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                    </svg>
                                                    Submitting…
                                                </>
                                            ) : (
                                                "Get My Free Estimate →"
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
