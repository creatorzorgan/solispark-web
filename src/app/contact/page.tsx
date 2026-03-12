"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <main className="min-h-screen pt-32 pb-24 text-[#FBFBFB] flex items-center">
            <div className="max-w-3xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12 shadow-2xl overflow-hidden relative"
                >
                    <div className="text-center mb-10 relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Initiate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-[#E5A500]">Mega-Project</span>
                        </h1>
                        <p className="text-lg text-[#FBFBFB]/70 font-medium">
                            Skip the wait. Connect directly with our engineering desk.
                        </p>
                    </div>

                    <div className="relative z-10 min-h-[400px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form 
                                    key="form"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                    transition={{ duration: 0.4 }}
                                    onSubmit={handleSubmit}
                                    className="w-full space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold tracking-widest uppercase text-[#FBFBFB]/50 pl-2">Enterprise Name</label>
                                            <input required type="text" className="w-full bg-[#0A192F]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-golden/50 focus:ring-1 focus:ring-golden/50 transition-all" placeholder="Acme Corp" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold tracking-widest uppercase text-[#FBFBFB]/50 pl-2">Expected Capacity</label>
                                            <input required type="text" className="w-full bg-[#0A192F]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-golden/50 focus:ring-1 focus:ring-golden/50 transition-all" placeholder="10MW or 45 Acres" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold tracking-widest uppercase text-[#FBFBFB]/50 pl-2">Executive Contact</label>
                                        <input required type="email" className="w-full bg-[#0A192F]/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-golden/50 focus:ring-1 focus:ring-golden/50 transition-all" placeholder="ceo@acme.com" />
                                    </div>
                                    <button type="submit" className="w-full bg-golden hover:bg-[#E5A500] text-[#0A192F] font-bold text-lg py-5 rounded-2xl mt-4 shadow-[0_10px_30px_rgba(255,183,3,0.2)] hover:shadow-[0_15px_40px_rgba(255,183,3,0.4)] transition-all hover:-translate-y-1">
                                        Connect to Grid
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 0.5, type: "spring" }}
                                    className="w-full flex flex-col items-center text-center space-y-8"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center border border-green-500/30 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <h3 className="text-3xl font-bold">Transmission Captured</h3>
                                    <p className="text-lg text-[#FBFBFB]/70 font-medium">Bypass the queue. Speak to our directors instantly.</p>
                                    
                                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                        <a href="https://wa.me/919886886122" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-6 rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                                            Chat on WhatsApp Now
                                        </a>
                                        <a href="tel:+919886886122" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-6 rounded-2xl shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                            Call Engineering Desk
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
