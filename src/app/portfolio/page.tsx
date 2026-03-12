"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
    return (
        <main className="min-h-screen pt-32 pb-24 text-[#FBFBFB]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Megawatts in <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-[#E5A500]">Motion</span>
                    </h1>
                    <p className="text-xl text-[#FBFBFB]/70 max-w-2xl mx-auto font-medium leading-relaxed">
                        Explore our elite portfolio of utility and commercial scale installations across India.
                    </p>
                </motion.div>

                {/* Featured Project */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl group flex flex-col md:flex-row items-center"
                >
                    <div className="w-full md:w-3/5 h-[400px] md:h-[600px] overflow-hidden relative">
                        <img src="/project-alpha.jpg" alt="Project Alpha: 10MW Utility Scale" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent md:hidden" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A192F] hidden md:block" />
                    </div>
                    <div className="w-full md:w-2/5 p-12 md:p-16 flex flex-col justify-center">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-golden/30 bg-golden/10 text-golden text-xs font-bold tracking-widest uppercase w-fit mb-6">
                            Featured Utility Scale
                        </div>
                        <h2 className="text-4xl font-bold mb-6 tracking-tight">Project Alpha: 10MW</h2>
                        <p className="text-[#FBFBFB]/70 text-lg leading-relaxed font-medium mb-8">
                            Deployed across 45 acres of arid terrain. Utilizing advanced tracking and bifacial optimization, we secured an 18.4% yield increase over traditional static models.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-3xl font-bold text-golden">10MW</h4>
                                <p className="text-sm font-bold tracking-widest text-[#FBFBFB]/50 uppercase mt-1">Capacity</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-golden">45</h4>
                                <p className="text-sm font-bold tracking-widest text-[#FBFBFB]/50 uppercase mt-1">Acres</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Masonry Grid Simulation (Fallback images just using solid blocks or the same image with a filter for proto purposes) */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden aspect-[4/5] relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 to-[#0A192F] mix-blend-overlay group-hover:opacity-0 transition-opacity z-10" />
                        <img src="/project-alpha.jpg" className="w-full h-full object-cover saturate-50 group-hover:saturate-100 transition-all duration-700" />
                        <div className="absolute bottom-6 left-6 z-20"><p className="font-bold text-xl drop-shadow-lg">Beta Array</p></div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden aspect-square relative group">
                        <div className="absolute inset-0 bg-[#0A192F]/40 group-hover:bg-transparent transition-colors z-10" />
                        <img src="/project-alpha.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute bottom-6 left-6 z-20"><p className="font-bold text-xl drop-shadow-lg">Gamma Installation</p></div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden aspect-[3/4] relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-golden/30 to-transparent mix-blend-overlay group-hover:opacity-0 transition-opacity z-10" />
                        <img src="/project-alpha.jpg" className="w-full h-full object-cover hue-rotate-15 group-hover:hue-rotate-0 transition-all duration-700" />
                        <div className="absolute bottom-6 left-6 z-20"><p className="font-bold text-xl drop-shadow-lg">Delta CAPEX</p></div>
                    </div>
                     <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden aspect-video relative group">
                        <div className="absolute inset-0 bg-[#0A192F]/60 group-hover:bg-transparent transition-colors z-10" />
                        <img src="/project-alpha.jpg" className="w-full h-full object-cover transition-all duration-700 blur-[2px] group-hover:blur-none" />
                        <div className="absolute bottom-6 left-6 z-20"><p className="font-bold text-xl drop-shadow-lg">Epsilon Works</p></div>
                    </div>
                </div>
            </div>
        </main>
    );
}
