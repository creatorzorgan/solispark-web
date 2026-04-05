"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
    return (
        <main className="min-h-screen pt-32 pb-24 text-[#0A192F] bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Megawatts <br/><span className="text-golden">In Motion.</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Explore our elite portfolio of utility-scale assets and high-performance industrial installations across the nation.
                    </p>
                </motion.div>

                {/* Featured Project Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full bg-white border border-gray-200 rounded-[3rem] overflow-hidden mb-32 shadow-2xl group flex flex-col lg:flex-row items-center"
                >
                    <div className="w-full lg:w-3/5 h-[400px] lg:h-[650px] overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop" alt="Featured Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
                        <div className="inline-block px-4 py-2 rounded-full bg-golden/10 text-golden text-xs font-bold tracking-widest uppercase w-fit mb-8 border border-golden/20">
                            Featured Utility Scale
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-[#0A192F]">Project Alpha: 10MW</h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium mb-10">
                            Deployed across 45 acres of arid terrain. Utilizing advanced tracking and PMSG optimization, we secured a documented 18.4% yield increase over traditional static models.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                            <div>
                                <h4 className="text-4xl font-bold text-[#0A192F] tracking-tight">10MW+</h4>
                                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mt-2">Annual Yield</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-[#0A192F] tracking-tight">12.5k</h4>
                                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mt-2">Carbon Offset (Tons)</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* PROJECT VIDEO SECTION (THE COOL 3D SCROLL) */}
                <section className="w-full mb-32 py-24 px-6 md:px-12 bg-[#0A192F] rounded-[2.5rem] md:rounded-[4rem] text-white overflow-hidden relative shadow-2xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The <span className="text-golden">Performance</span> Logs.</h2>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-sm mt-4">Unfiltered Site Deployment Data</p>
                    </div>

                    <div className="relative flex justify-center items-center h-[500px] md:h-[650px]">
                        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar px-12 cursor-grab active:cursor-grabbing snap-x">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <motion.div 
                                    key={item}
                                    whileHover={{ y: -20 }}
                                    className="min-w-[280px] md:min-w-[380px] aspect-[9/16] bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative snap-center group"
                                >
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-golden/20 flex items-center justify-center border border-golden/40">
                                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="text-golden ml-1"><path d="M8 5v14l11-7z"/></svg>
                                        </div>
                                        <p className="mt-8 font-bold tracking-widest text-xs text-golden uppercase">Transmission 0{item}</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                                    <div className="absolute bottom-10 left-10">
                                        <p className="text-white font-bold text-2xl tracking-tight">Live Site <br/>Update</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Button */}
                <div className="text-center">
                    <Link 
                        href="/contact" 
                        className="inline-block bg-golden hover:bg-[#E5A500] text-[#0A192F] font-bold px-12 py-6 rounded-2xl transition-all shadow-2xl hover:-translate-y-1 text-2xl"
                    >
                        Build Your Energy Moat
                    </Link>
                </div>
            </div>
        </main>
    );
}