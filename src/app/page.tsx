"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SequenceCanvas from "@/components/SequenceCanvas";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    // Preloader State
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Calculator State
    const [bill, setBill] = useState(2500);
    const [load, setLoad] = useState(3);
    const energyGenerated = load * 1440;
    const carbonEmission = Math.round(energyGenerated * 0.82);

    // Testimonial State
    const [testIndex, setTestIndex] = useState(0);
    const testimonials = [
        { name: "Rajat M., Facility Director", quote: "Switching to SolisPark's OPEX model was the best financial decision for our manufacturing unit. Day-one savings and zero operational disruption.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
        { name: "Priya S., Operations Head", quote: "Their utility-scale EPC execution is flawless. Our 5MW plant was synchronized to the grid weeks ahead of schedule.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
        { name: "Anil K., Plant Manager", quote: "The 30-year Axitec warranty and tier-1 bifacial panels give us complete peace of mind for our heavy-duty energy needs.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 400); // slight delay at 100%
                    return 100;
                }
                return prev + 2;
            });
        }, 20);
        return () => clearInterval(interval);
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div className="bg-transparent relative min-h-screen">
            {/* PRELOADER */}
            <AnimatePresence>
                {loading && (
                    <motion.div 
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[200] bg-[#0A192F] flex flex-col items-center justify-center text-[#FBFBFB]"
                    >
                        <div className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
                            {progress}%
                        </div>
                        <div className="w-64 h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
                            <motion.div 
                                className="h-full bg-golden"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* THE BACKGROUND */}
            <div className="fixed inset-0 w-full h-screen -z-20 bg-[#FBFBFB]">
                <SequenceCanvas />
            </div>

            {/* THE HERO TRACK (Scroll Area) */}
            <main ref={containerRef} className="relative bg-transparent flex flex-col">
                {/* SECTION 1: 0-100vh */}
                <div className="min-h-[100vh] w-full flex items-center justify-center snap-center px-6 py-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="bg-white/30 backdrop-blur-[16px] border border-white/20 p-6 md:p-12 rounded-[24px] shadow-2xl w-[90%] md:w-auto max-w-5xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A192F] mb-6 leading-tight">
                            Engineering India&apos;s <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#E5A500]">Megawatt Future.</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-[#0A192F]/90 font-medium mb-4">
                            End-to-end solar infrastructure development.
                        </h2>
                        <p className="text-base md:text-lg text-[#0A192F]/70 max-w-2xl font-normal mx-auto">
                            From land acquisition to grid integration, we build the nation&apos;s clean energy future.
                        </p>
                    </motion.div>
                </div>

                {/* SECTION 2: 100-200vh */}
                <div className="min-h-[100vh] w-full flex items-center justify-start snap-center px-6 md:px-12 py-24">
                     <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="bg-white/30 backdrop-blur-[16px] border border-white/20 p-6 md:p-12 rounded-[24px] shadow-2xl w-[90%] md:w-auto max-w-xl mx-auto text-left"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A192F] mb-6 leading-tight">
                            Bifacial Precision.<br />Industrial Scale.
                        </h2>
                        <p className="text-lg text-[#0A192F]/80 leading-relaxed font-medium">
                            Heavy-duty aluminum framing and advanced anti-reflective tempered glass engineered for extreme weather and maximum durability across acres of terrain.
                        </p>
                    </motion.div>
                </div>

                {/* SECTION 3: 200-300vh */}
                <div className="min-h-[100vh] w-full flex items-center justify-end snap-center px-6 md:px-12 py-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="bg-white/30 backdrop-blur-[16px] border border-white/20 p-6 md:p-12 rounded-[24px] shadow-2xl w-[90%] md:w-auto max-w-xl mx-auto text-left md:text-right"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A192F] mb-6 leading-tight">
                            Bifacial Efficiency.<br />Maximum Yield.
                        </h2>
                        <ul className="text-lg text-[#0A192F]/80 leading-relaxed space-y-4 font-medium inline-block text-left">
                            <li className="flex items-start gap-3">
                                <span className="text-golden font-bold mt-1">•</span>
                                <span>Dual-sided energy capture generates power from both direct and reflected sunlight.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-golden font-bold mt-1">•</span>
                                <span>High-density monocrystalline cells ensure peak megawatt output.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-golden font-bold mt-1">•</span>
                                <span>Lower levelized cost of energy (LCOE) for massive industrial ROI.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* SECTION 4: 300-400vh */}
                <div className="min-h-[100vh] w-full flex items-center justify-center snap-center px-6 py-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="bg-white/30 backdrop-blur-[16px] border border-white/20 p-6 md:p-12 rounded-[24px] shadow-2xl w-[90%] md:w-auto max-w-5xl w-full mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A192F] mb-10 text-center leading-tight">
                            Power Your Empire.
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { step: "01", title: "Land Acquisition" },
                                { step: "02", title: "Engineering" },
                                { step: "03", title: "EPC Execution" },
                                { step: "04", title: "Asset Management" },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/40 p-4 rounded-xl border border-white/30 text-center">
                                    <div className="text-2xl font-black text-[#FBBF24]/80 mb-1">{item.step}</div>
                                    <h4 className="text-sm font-bold text-[#0A192F]">{item.title}</h4>
                                </div>
                            ))}
                        </div>

                        {/* Contact Form Integrated */}
                        <div className="bg-[#0A192F] rounded-[2rem] p-6 md:p-10 shadow-2xl w-full mx-auto">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-[#E5A500]">Connect to the Grid</span>?</h3>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70 ml-1">Full Name</label>
                                    <input type="text" className="w-full px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:outline-none focus:border-golden/50 transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                                    <input type="email" className="w-full px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:outline-none focus:border-golden/50 transition-all" placeholder="john@company.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70 ml-1">Project Type</label>
                                    <select className="w-full px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:outline-none focus:border-golden/50 transition-all appearance-none [&>option]:bg-[#0d213f]">
                                        <option>Utility-Scale ({">="} 1MW)</option>
                                        <option>Commercial CAPEX/OPEX</option>
                                        <option>Residential</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/70 ml-1">Est. Capacity / Land Size</label>
                                    <input type="text" className="w-full px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:bg-white/10 focus:outline-none focus:border-golden/50 transition-all" placeholder="e.g. 5MW or 25 Acres" />
                                </div>

                                <div className="md:col-span-2 pt-2">
                                    <button type="button" className="w-full bg-golden hover:bg-[#E5A500] text-[#0A192F] font-bold px-6 py-4 rounded-xl text-lg transition-all shadow-xl hover:-translate-y-1 tracking-tight">
                                        Discuss Mega-Project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* SECTION 5: 400-500vh */}
                <div className="min-h-[100vh] w-full flex items-end justify-center snap-center px-6 pb-32">
                     <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-white/30 backdrop-blur-[16px] p-8 rounded-[24px] border border-white/20 shadow-2xl w-full max-w-4xl"
                    >
                        <div className="text-center flex-1">
                            <div className="text-3xl md:text-5xl font-bold text-[#0A192F] mb-1 tracking-tight">10MW+</div>
                            <div className="text-xs md:text-sm font-semibold tracking-wide text-[#0A192F]/70 uppercase">Power Generated</div>
                        </div>
                        <div className="w-full md:w-px h-px md:h-16 bg-[#0A192F]/20"></div>
                        <div className="text-center flex-1">
                            <div className="text-3xl md:text-5xl font-bold text-[#0A192F] mb-1 tracking-tight">5,970T</div>
                            <div className="text-xs md:text-sm font-semibold tracking-wide text-[#0A192F]/70 uppercase">CO2 Offset</div>
                        </div>
                        <div className="w-full md:w-px h-px md:h-16 bg-[#0A192F]/20"></div>
                        <div className="text-center flex-1">
                            <div className="text-3xl md:text-5xl font-bold text-[#0A192F] mb-1 tracking-tight">118+</div>
                            <div className="text-xs md:text-sm font-semibold tracking-wide text-[#0A192F]/70 uppercase">Installations</div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* SLIDE OVER CONTAINER */}
            <div className="relative z-10 bg-[#FAF9F6] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] w-full overflow-hidden text-[#111111]">

        <div className="relative z-50 w-full pt-32 pb-24 text-[#111111]">
            {/* 1. ABOUT SPLIT SECTION */}
            <section className="w-full py-24 md:py-32 relative z-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Typography */}
                    <div className="space-y-8">
                        <motion.h2 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
                        >
                            Solar energy <br />
                            systems reduce <br />
                            <span className="text-gray-400">operational bleed</span> <br />
                            by over 40%.
                        </motion.h2>
                        
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex items-center gap-6"
                        >
                            <div className="text-6xl md:text-8xl font-black tracking-tighter text-golden">10MW+</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-gray-500 leading-snug">
                                Successfully <br />Deployed <br />Capacity
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Images (Overlapping Pills) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center"
                    >
                        {/* Ranveer Pill */}
                        <div className="absolute left-[10%] top-[15%] w-48 h-72 md:w-64 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                            <Image 
                                src="/ranveer.jpg" 
                                alt="Ranveer Dorai" 
                                fill 
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                                sizes="(max-width: 768px) 192px, 256px"
                            />
                        </div>
                        {/* Pruthvik Pill */}
                        <div className="absolute right-[10%] bottom-[10%] w-56 h-80 md:w-72 md:h-[28rem] rounded-full overflow-hidden border-8 border-white shadow-2xl z-20">
                            <Image 
                                src="/pruthvik.jpg" 
                                alt="Pruthvik Hariprasad" 
                                fill 
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                                sizes="(max-width: 768px) 224px, 288px"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE GRID MARGINS AGITATION */}
            <motion.section 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full py-24 md:py-32 relative z-20 bg-gray-50 mb-24"
            >
                <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        The Grid is Eating <br className="hidden md:block"/>
                        <span className="text-red-600">Your Margins.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
                        Every month you delay the transition to captive solar, you burn corporate capital on inflated DISCOM tariffs. Take control of your energy destiny.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-[#111111] hover:bg-black text-white font-bold px-8 py-5 rounded-full shadow-2xl hover:-translate-y-1 transition-all text-lg tracking-tight">
                        Initiate Mega-Project
                    </Link>
                </div>
            </motion.section>

        </div>



        {/* 4. LIGHT MODE PORTFOLIO MARQUEE */}
        <div className="relative w-full bg-[#F5F5F5] text-[#111111] pt-32 pb-24 z-20">
            {/* ELITE PORTFOLIO */}
            <motion.section 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full pb-24 border-b border-black/5 relative z-20 overflow-hidden mb-32"
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
                    <h3 className="text-sm font-bold tracking-widest text-black/50 uppercase">
                        Powering India's Critical Infrastructure
                    </h3>
                </div>
                {/* Infinite Marquee - Grayscale Hover */}
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee flex whitespace-nowrap items-center space-x-24 px-12 min-w-max">
                        {/* logos duplicated for seamless loop */}
                        {["/isro-logo.png", "/rbi-logo.png", "/iisc-logo.png", "/reliance-logo.png", "/tcs-logo.png", "/isro-logo.png", "/rbi-logo.png", "/iisc-logo.png", "/reliance-logo.png", "/tcs-logo.png"].map((logo, idx) => (
                            <div key={idx} className="h-24 flex items-center justify-center p-4 bg-transparent w-64">
                                <Image src={logo} alt={`Client Logo ${idx}`} width={200} height={100} className="h-full max-w-[80%] object-contain grayscale brightness-0 opacity-40 hover:grayscale-0 hover:opacity-100 transition duration-500 cursor-pointer" />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>

        {/* 5. NATIONAL ALIGNMENT SECTION */}
        <section className="w-full bg-[#FAF9F6] py-32 relative z-20 text-[#111111]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
                {/* Left Column */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#0A192F]">
                        Partnering in India&apos;s Clean Energy Sovereignty.
                    </h2>
                    <p className="text-lg md:text-xl text-[#0A192F]/80 leading-relaxed font-medium">
                        Harness the limitless power of the sun and secure your industrial future. As a recognized Startup India entity and MNRE Approved Vendor, our utility-scale deployments directly contribute to the Prime Minister&apos;s mission for self-reliant, sustainable industrial growth.
                    </p>
                </motion.div>

                {/* Right Column */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-md h-[400px] md:h-[500px]"
                >
                    <Image 
                        src="/modi.jpg" 
                        alt="National Alignment" 
                        fill 
                        className="object-cover rounded-2xl shadow-2xl" 
                    />
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 right-4 md:-bottom-8 md:-right-8 bg-[#0A192F]/90 backdrop-blur-md border border-white/10 text-[#FBFBFB] p-5 md:p-6 rounded-2xl shadow-2xl z-30 max-w-[280px]">
                        <p className="text-sm md:text-base font-semibold leading-relaxed">
                            <span className="text-golden font-bold">MNRE Approved Vendor</span><br />SolisPark Energy | Certified Professional 2026
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* 6. SERVICES PREVIEW CAROUSEL */}
        <section className="w-full bg-[#FAF9F6] py-24 relative z-20 text-[#111111]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Top Hero Image Banner */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-16 shadow-2xl"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop" 
                        alt="Utility Scale Solar" 
                        className="w-full h-64 md:h-96 object-cover mb-16 rounded-3xl shadow-xl" 
                    />
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#0A192F]">
                        Scale Your Energy. <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-[#E5A500]">Slash Your Overhead.</span>
                    </h2>
                </motion.div>

                {/* 4-Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {[
                        { title: "CAPEX", text: "Zero-Friction Ownership. We build the massive asset, you capture 100% of the tax depreciation and decades of free power.", icon: <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
                        { title: "OPEX", text: "Power Without the Price Tag. Protect your working capital. We fund the infrastructure; you just pay for massively discounted electricity.", icon: <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
                        { title: "Ground Mounted", text: "Megawatt Dominance. Transform unused acreage into a high-yield power generation plant with our utility-scale tracking systems.", icon: <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg> },
                        { title: "O&M Contracts", text: "Bulletproof Your Yield. Advanced thermal monitoring and rapid-response maintenance to guarantee zero preventable downtime.", icon: <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg> }

                    ].map((card, idx) => (
                        <Link href="/services" key={idx}>
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group h-full flex flex-col bg-white hover:bg-[#0A192F] p-8 rounded-[2rem] border border-transparent shadow-lg hover:shadow-2xl hover:border-white/10 transition-all duration-300 cursor-pointer"
                            >
                                <div className="w-14 h-14 mb-8 text-[#0A192F] group-hover:text-golden transition-colors">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#0A192F] group-hover:text-white transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-base text-[#111111]/80 group-hover:text-white/80 transition-colors leading-relaxed font-medium">
                                        {card.text}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        {/* 7. SOLAR CALCULATOR SECTION */}
        <section className="w-full bg-[#FAF9F6] py-32 relative z-20 text-[#111111] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Left Column Topology */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#0A192F]">
                        Compute <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden to-[#E5A500]">solar</span> savings
                    </h2>
                    <p className="text-lg md:text-xl text-[#0A192F]/80 leading-relaxed font-medium">
                        Use our Calculator and estimate your monthly savings. The only input we need is your monthly electricity bill and sanctioned load.
                    </p>
                    <Link href="/contact" className="inline-block bg-[#0A192F] hover:bg-[#112240] text-golden font-bold px-8 py-4 rounded-xl shadow-xl hover:-translate-y-1 transition-all text-lg tracking-tight">
                        Get a Free Consultation
                    </Link>
                </motion.div>

                {/* Right Column Calculator */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-[#0A192F] p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(10,25,47,0.3)] border border-white/5 relative z-30"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-golden mb-8">
                        EPC Calculator / Residential Calculator
                    </h3>
                    
                    <div className="space-y-8 mb-12">
                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-semibold text-white">Enter Current Electricity Bill</label>
                            <div className="flex items-center gap-4">
                                <input 
                                    type="number" 
                                    value={bill}
                                    onChange={(e) => setBill(Number(e.target.value))}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-bold text-lg focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden transition-all"
                                />
                                <span className="text-white/80 font-medium">Rs</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm md:text-base font-semibold text-white">What is your current Sanctioned load?</label>
                            <div className="flex items-center gap-4">
                                <input 
                                    type="number" 
                                    value={load}
                                    onChange={(e) => setLoad(Number(e.target.value))}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-bold text-lg focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden transition-all"
                                />
                                <span className="text-white/80 font-medium">KW</span>
                            </div>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                        <div>
                            <div className="text-xs md:text-sm font-bold text-white/70 uppercase tracking-widest mb-3">Energy Generated</div>
                            <motion.span 
                                key={energyGenerated}
                                initial={{ opacity: 0.5, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="block text-3xl md:text-5xl font-black text-golden tracking-tighter"
                            >
                                {energyGenerated.toLocaleString()}
                            </motion.span>
                            <span className="text-lg md:text-2xl font-black text-golden tracking-tighter">KWH</span>
                        </div>
                        <div>
                            <div className="text-xs md:text-sm font-bold text-white/70 uppercase tracking-widest mb-3">Carbon Emission</div>
                            <motion.span 
                                key={carbonEmission}
                                initial={{ opacity: 0.5, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="inline-block text-2xl md:text-4xl font-bold text-golden tracking-tight"
                            >
                                {carbonEmission.toLocaleString()}
                            </motion.span>
                            <span className="inline-block ml-2 text-base md:text-xl font-medium text-white/90 tracking-tight">kg/ year</span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>

        {/* 8. INTERACTIVE TESTIMONIAL SLIDER */}
        <section className="w-full bg-[#0A192F] text-[#FBFBFB] py-32 relative z-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-16">
                    Testimonials
                </h2>

                {/* Main Slider Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column (Image) */}
                    <div className="relative w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden bg-white/5">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={testIndex}
                                src={testimonials[testIndex].img}
                                alt={testimonials[testIndex].name}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={testIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <h3 className="text-xl font-bold mb-6 text-white">
                                    {testimonials[testIndex].name}
                                </h3>
                                <p className="text-2xl md:text-4xl leading-relaxed text-white/80 mb-12 font-medium tracking-tight">
                                    "{testimonials[testIndex].quote}" —
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex items-center gap-4 mt-8 md:mt-0">
                            <button 
                                onClick={() => setTestIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                className="w-14 h-14 rounded-full bg-golden hover:bg-[#E5A500] flex items-center justify-center text-[#0A192F] transition-all hover:scale-105"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
                            </button>
                            <button 
                                onClick={() => setTestIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                className="w-14 h-14 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center text-[#0A192F] transition-all hover:scale-105"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </button>
                        </div>
                        
                        {/* Divider */}
                        <hr className="border-white/10 mt-16 w-full max-w-md" />
                    </div>
                </div>

                {/* Bottom Footer Area */}
                <div className="mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                        Our Customers Love<br />Going Solar
                    </h2>
                    <Link href="/portfolio" className="inline-flex items-center gap-3 bg-golden hover:bg-[#E5A500] text-[#0A192F] font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl">
                        Read More Reviews 
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                </div>

            </div>
        </section>
        </div>
        </div>
    );
}
