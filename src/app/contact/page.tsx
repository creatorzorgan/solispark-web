"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    // The contact form is managed via Tally override

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
                        <iframe 
                            src="https://tally.so/r/VL87lE" 
                            frameBorder="0" 
                            title="Contact Form"
                            className="w-full min-h-[600px] border-0"
                        ></iframe>
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