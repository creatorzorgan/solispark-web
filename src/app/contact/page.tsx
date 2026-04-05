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
        <main className="min-h-screen pt-32 pb-24 bg-[#FAF9F6] text-[#0A192F] flex items-center">
            <div className="max-w-3xl mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border border-gray-200 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative"
                >
                    <div className="text-center mb-10 relative z-10">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase italic">
                            Initiate Your <span className="text-golden">Mega-Project</span>
                        </h1>
                        <p className="text-lg text-gray-500 font-bold">
                            Direct channel to our engineering desk. Secure your asset today.
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
                                            <label className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 pl-2">Enterprise Name</label>
                                            <input required type="text" className="w-full bg-[#FAF9F6] border border-gray-200 rounded-2xl px-6 py-4 text-[#0A192F] font-bold focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden transition-all" placeholder="Acme Corp" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 pl-2">Expected Capacity</label>
                                            <input required type="text" className="w-full bg-[#FAF9F6] border border-gray-200 rounded-2xl px-6 py-4 text-[#0A192F] font-bold focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden transition-all" placeholder="10MW or 45 Acres" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 pl-2">Executive Contact Email</label>
                                        <input required type="email" className="w-full bg-[#FAF9F6] border border-gray-200 rounded-2xl px-6 py-4 text-[#0A192F] font-bold focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden transition-all" placeholder="ceo@acme.com" />
                                    </div>
                                    
                                    <div className="bg-golden/5 border border-golden/20 p-4 rounded-xl">
                                        <p className="text-[11px] text-golden font-bold uppercase tracking-widest text-center italic">
                                            Free Site Visit & Consultation Included
                                        </p>
                                    </div>

                                    <button type="submit" className="w-full bg-[#0A192F] hover:bg-golden text-white hover:text-[#0A192F] font-black text-xl py-6 rounded-2xl mt-4 shadow-xl transition-all active:scale-95 uppercase tracking-tighter italic">
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
                                    <div className="w-24 h-24 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center border-4 border-green-500/20 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black uppercase italic tracking-tighter">Transmission Captured</h3>
                                        <p className="text-lg text-gray-500 font-bold mt-2">Bypass the queue. Speak to our directors instantly.</p>
                                    </div>
                                    
                                    <div className="w-full grid grid-cols-1 gap-4 mt-8">
                                        <a href="https://wa.me/919886886122" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-6 rounded-2xl shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-lg uppercase italic tracking-tight">
                                            Chat on WhatsApp Now
                                        </a>
                                        <a href="tel:+919886886122" className="bg-[#0A192F] hover:bg-gray-800 text-white font-black py-6 rounded-2xl shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-lg uppercase italic tracking-tight">
                                            Call Engineering Desk
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
                
                {/* Visual Security Badge */}
                <div className="mt-12 flex justify-center items-center gap-8 opacity-40 grayscale">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em]">MNRE Certified</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em]">Startup India</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em]">PMSG Tech Ready</div>
                </div>
            </div>
        </main>
    );
}