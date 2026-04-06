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

    // Calculator State (Dynamic Logic)
    const [bill, setBill] = useState(2500);

    // Derived Calculations based on an approx ₹8/unit tariff and 120 units/kW monthly generation
    const estimatedUnitsConsumed = bill / 8;
    const requiredKw = Math.max(1, Math.ceil(estimatedUnitsConsumed / 120));
    const energyGenerated = requiredKw * 1440; // Annual generation
    const carbonEmission = Math.round(energyGenerated * 0.82);

    // Testimonial State
    const [testIndex, setTestIndex] = useState(0);
    const testimonials = [
        { name: "Rajat M., Facility Director", quote: "Switching to Solispark's OPEX model was the best financial decision for our manufacturing unit. Day-one savings and zero operational disruption." },
        { name: "Priya S., Operations Head", quote: "Their utility-scale EPC execution is flawless. Our 5MW plant was synchronized to the grid weeks ahead of schedule." },
        { name: "Anil K., Plant Manager", quote: "The 30-year Axitec warranty and tier-1 bifacial panels give us complete peace of mind for our heavy-duty energy needs." }
    ];

    // Home FAQ accordion state
    const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

    // Deployment Protocol State
    const [activeProtocol, setActiveProtocol] = useState(0);

    // Helper function to extract initials for avatar placeholder
    const getInitials = (name: string) => {
        const parts = name.split(",")[0].trim().split(" ");
        if (parts.length > 1) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return parts[0][0].toUpperCase();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 400);
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
        offset: ["start start", "end end"],
    });

    const bubble1Opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const bubble2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
    const bubble3Opacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);

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
                        <div className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
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

            {/* HERO SCROLL TRACK + PINNED VIEWPORT */}
            <main className="relative bg-transparent">
                <div ref={containerRef} className="relative h-[800vh] w-full bg-transparent">
                    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#FAF9F6]">

                        {/* Bottom layer: 3D sequence canvas */}
                        <div className="absolute inset-0 z-0">
                            <SequenceCanvas progress={scrollYProgress} />
                        </div>

                        {/* 2.5 CIRCULAR ENERGY METER (SCROLL PROGRESS) */}
                        <div className="absolute bottom-10 left-6 md:left-12 z-50 flex items-center gap-4 pointer-events-none">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                                <svg className="absolute inset-0 w-full h-full -rotate-90">
                                    <circle cx="50%" cy="50%" r="38%" className="stroke-gray-200 fill-none" strokeWidth="4" />
                                    <motion.circle
                                        cx="50%" cy="50%" r="38%" fill="none" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"
                                        style={{ pathLength: scrollYProgress, filter: "drop-shadow(0 0 8px #FBBF24)" }}
                                    />
                                </svg>
                                <div className="text-[#0A192F] font-black text-lg md:text-xl flex flex-col items-center leading-none">
                                    <motion.span>{useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`)}</motion.span>
                                    <span className="text-[10px] uppercase tracking-widest opacity-50 mt-1 font-bold">Charge</span>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <p className="text-[#0A192F] font-bold text-sm tracking-widest uppercase">System <br /> <span className="text-golden">Optimization</span></p>
                            </div>
                        </div>

                        {/* Top layer: Triple bubble sequence */}
                        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
                            {/* BUBBLE 1 */}
                            <section className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-6">
                                <motion.div style={{ opacity: bubble1Opacity }} className="bg-white/80 backdrop-blur-xl border border-gray-100 p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-4xl w-full text-center pointer-events-auto">
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A192F] mb-6 leading-tight">
                                        Stop Renting Your Power. <br className="hidden md:block" />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#E5A500]">Own Your Energy Asset.</span>
                                    </h1>
                                    <Link href="/contact" className="inline-block bg-golden text-[#0A192F] font-black hover:scale-105 transition-transform duration-300 px-10 py-5 text-lg md:text-xl rounded-2xl shadow-[0_15px_35px_rgba(255,183,3,0.4)]">
                                        Book Your Free Energy Audit
                                    </Link>
                                </motion.div>
                            </section>

                            {/* BUBBLE 2 */}
                            <section className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-6">
                                <motion.div style={{ opacity: bubble2Opacity, y: useTransform(scrollYProgress, [0.3, 0.4], [50, 0]) }} className="bg-white/80 backdrop-blur-xl border border-gray-100 p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-3xl w-full text-center pointer-events-auto">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0A192F] mb-4 text-center">Engineering Excellence.</h2>
                                    <p className="text-lg md:text-xl text-[#0A192F]/85 font-medium">We partner exclusively with Tier-1 manufacturers. From MNRE approvals to grid synchronization, we handle the complexity so your plants run like clockwork.</p>
                                </motion.div>
                            </section>

                            {/* BUBBLE 3 */}
                            <section className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-6">
                                <motion.div style={{ opacity: bubble3Opacity, y: useTransform(scrollYProgress, [0.75, 0.85], [50, 0]) }} className="bg-white/80 backdrop-blur-xl border border-gray-100 p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-3xl w-full text-center pointer-events-auto">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0A192F] mb-4 text-center">30 Years of Secured ROI.</h2>
                                    <p className="text-lg md:text-xl text-[#0A192F]/85 font-medium">With an industry-exclusive replacement warranty, we guarantee your energy transition stays profitable for a generation.</p>
                                </motion.div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* SLIDE OVER CONTAINER */}
            <div className="relative z-10 bg-[#FAF9F6] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.06)] w-full overflow-hidden text-[#111111] mt-10">
                <div className="relative z-50 w-full pt-24 pb-24 text-[#111111]">
                    {/* MARQUEES - LARGER LOGOS */}
                    <div className="relative w-full bg-white text-[#0A192F] pt-24 pb-24 flex flex-col gap-24">
                        <section className="w-full overflow-hidden">
                            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Satisfied Clients</h2>
                            </div>

                            <div className="relative flex overflow-x-hidden group">
                                <div className="animate-marquee flex whitespace-nowrap items-center space-x-12 md:space-x-20 px-8">
                                    {["/isro-logo.png", "/iisc-logo.png", "/gail-logo.png", "/tcs-log.png", "/reliance-logo.png", "/isro-logo.png", "/iisc-logo.png", "/gail-logo.png", "/tcs-log.png", "/reliance-logo.png"].map((logo, idx) => (
                                        <div key={idx} className="h-32 flex items-center justify-center w-48 md:w-64">
                                            <img src={logo} alt="Client" className="h-[80px] md:h-[110px] max-w-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="w-full overflow-hidden pb-8">
                            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Partnering with the Best
                                    "Our Trusted Brands"</h2>
                            </div>
                            <div className="relative flex overflow-x-hidden group">
                                <div className="animate-marquee-reverse flex whitespace-nowrap items-center space-x-12 md:space-x-20 px-8">
                                    {["/adani-logo.png", "/anchor-logo.png", "/rayzon-logo.png", "/solis-logo.png", "/sungrow-logo.png", "/waaree-logo.png", "/axitec-logo.png", "/goldi-solar-logo.png", "/deye-logo.png", "/adani-logo.png", "/anchor-logo.png", "/rayzon-logo.png", "/solis-logo.png", "/sungrow-logo.png", "/waaree-logo.png", "/axitec-logo.png", "/goldi-solar-logo.png", "/deye-logo.png"].map((logo, idx) => (
                                        <div key={idx} className="h-32 flex items-center justify-center w-48 md:w-64">
                                            <img src={logo} alt="Partner" className="h-[80px] md:h-[110px] max-w-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* AXITEC USP BANNER (CLEAN SPLIT LAYOUT) */}
                    <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#0A192F]">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                            {/* Left Side: Text Content */}
                            <div className="border-l-4 border-golden pl-8 md:pl-10 order-2 lg:order-1">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
                                    The Industry's Only <br className="hidden md:block" /><span className="text-golden">30-Year Guarantee.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed">
                                    As official partners of Axitec, Solispark secures your CAPEX investment with an exclusive 30-year replacement warranty. Tier-1 German engineering, guaranteed to outlast your operational timeline.
                                </p>
                            </div>

                            {/* Right Side: Feature Image */}
                            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 order-1 lg:order-2 bg-[#0A192F]">
                                <Image
                                    src="/usp-banner.png"
                                    alt="Axitec 30-Year Warranty Security"
                                    fill
                                    className="object-contain object-center hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                        </div>
                    </section>

                    {/* THE DEPLOYMENT PROTOCOL (EXPANDING ACCORDION - TEXT ONLY) */}
                    <section className="w-full py-32 px-6 md:px-12 bg-[#FAF9F6] overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-6xl font-black text-[#0A192F] tracking-tighter uppercase italic mb-4">
                                    The Deployment <span className="text-golden">Protocol.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                                    Zero operational downtime. We execute multi-megawatt projects while your factory floor keeps running.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[500px] gap-4">
                                {[
                                    { num: "01", title: "Precision Audit", text: "Comprehensive site mapping and load analysis." },
                                    { num: "02", title: "Heavy Engineering", text: "Custom PMSG integration and structural design." },
                                    { num: "03", title: "Frictionless Build", text: "Rapid deployment with zero operational downtime." },
                                    { num: "04", title: "Sovereign Asset", text: "Grid synchronization and 30-year active management." }
                                ].map((step, index) => {
                                    const isActive = activeProtocol === index;
                                    return (
                                        <motion.div
                                            key={index}
                                            layout
                                            onClick={() => setActiveProtocol(index)}
                                            animate={{ flex: isActive ? 5 : 1 }}
                                            className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-colors duration-500 flex flex-col justify-end p-6 md:p-8 border border-gray-200/50 group ${isActive ? 'bg-[#0A192F] shadow-2xl' : 'bg-[#0A192F]/90 hover:bg-[#0A192F] opacity-90 hover:opacity-100'
                                                }`}
                                        >
                                            <div className={`flex ${isActive ? 'flex-col md:flex-row md:items-end gap-4 md:gap-8' : 'flex-col items-center justify-end h-full gap-6'}`}>
                                                {/* The Huge Step Number */}
                                                <div className="flex items-center">
                                                    <span className={`text-4xl md:text-6xl font-black transition-colors duration-300 ${isActive ? 'text-golden drop-shadow-lg' : 'text-white/30 group-hover:text-golden/50'}`}>
                                                        {step.num}
                                                    </span>
                                                </div>

                                                {/* Title & Description (Only shows when Active) */}
                                                <AnimatePresence>
                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            transition={{ duration: 0.3, delay: 0.1 }}
                                                            className="flex flex-col pb-1"
                                                        >
                                                            <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight whitespace-nowrap mb-2">
                                                                {step.title}
                                                            </h3>
                                                            <p className="text-white/80 font-medium md:text-lg max-w-sm leading-relaxed">
                                                                {step.text}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {/* Vertical Title (Shows when Inactive on Desktop) */}
                                                {!isActive && (
                                                    <div className="hidden md:flex flex-1 items-end justify-center pb-12">
                                                        <span className="text-white/50 font-bold uppercase tracking-[0.2em] whitespace-nowrap -rotate-90 origin-bottom pb-4">
                                                            {step.title}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Horizontal Title (Shows when Inactive on Mobile) */}
                                                {!isActive && (
                                                    <div className="md:hidden flex w-full justify-center">
                                                        <span className="text-white/50 font-bold uppercase tracking-widest whitespace-nowrap text-sm">
                                                            {step.title}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* NATIONAL ALIGNMENT */}
                    <section className="w-full bg-[#FAF9F6] py-32 px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0A192F]">Partnering in India&apos;s Clean Energy Sovereignty.</h2>
                            <p className="text-lg md:text-xl text-[#0A192F]/80 font-medium leading-relaxed">As a recognized Startup India entity and MNRE Approved Vendor, our deployments directly contribute to a self-reliant industrial growth.</p>
                        </div>
                        <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
                            <Image src="/modi.jpg" alt="National Alignment" fill className="object-cover rounded-2xl shadow-2xl" />
                        </div>
                    </section>

                    {/* SERVICES GRID */}
                    <section className="w-full py-24 px-6 md:px-12">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-bold text-center mb-20 text-[#0A192F]">Scale Your Energy. <span className="text-golden">Slash Overhead.</span></h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                                {[
                                    { title: "CAPEX", text: "Zero-Friction Ownership. Capture 100% tax depreciation and decades of free power.", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
                                    { title: "OPEX", text: "Power Without the Price Tag. We fund it; you just pay for discounted electricity.", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
                                    { title: "Residential", text: "Premium rooftop arrays that turn homes into high-yield energy assets.", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
                                    { title: "PMSG Tech", text: "Integrating specialized Permanent Magnet tech for maximum generation yield.", icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22v-4M7 8v2M17 8v2M7 14v2M17 14v2M12 2v4M2 12h4M18 12h4" /></svg> }
                                ].map((card, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all flex flex-col">
                                        <div className="w-14 h-14 mb-8 text-[#0A192F]">{card.icon}</div>
                                        <h3 className="text-2xl font-bold mb-4 text-[#0A192F]">{card.title}</h3>
                                        <p className="text-gray-600 font-medium mb-6 flex-grow">{card.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* NEW CTA UNDER SERVICES */}
                            <div className="mt-16 text-center">
                                <Link href="/contact" className="inline-flex items-center gap-3 bg-[#0A192F] text-white font-bold px-10 py-5 rounded-full hover:bg-golden hover:text-[#0A192F] transition-colors shadow-xl">
                                    Discuss Your Infrastructure <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* CONTACT FORM */}
                    <section className="w-full py-24 px-6 md:px-12 bg-white rounded-t-[3rem]">
                        <div className="max-w-4xl mx-auto bg-[#FAF9F6] p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
                            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-[#0A192F]">Power Your Empire.</h2>
                            <p className="text-center text-gray-600 mb-12 font-medium italic">Book your <span className="text-golden font-bold underline">Free Site Visit</span> and <span className="text-golden font-bold underline">Consultation</span> today.</p>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input type="text" placeholder="Full Name" className="p-4 rounded-xl border border-gray-200 bg-white" />
                                <input type="email" placeholder="Email Address" className="p-4 rounded-xl border border-gray-200 bg-white" />
                                <select className="p-4 rounded-xl border border-gray-200 bg-white md:col-span-2">
                                    <option>Utility-Scale Mega-Project</option>
                                    <option>Industrial CAPEX/OPEX</option>
                                    <option>Premium Residential</option>
                                </select>
                                <button className="md:col-span-2 bg-golden text-[#0A192F] font-black py-5 rounded-2xl text-xl shadow-xl hover:scale-[1.02] transition-transform">Discuss Mega-Project</button>
                            </form>
                        </div>
                    </section>

                    {/* CALCULATOR */}
                    <section className="w-full bg-[#FAF9F6] py-32 px-6 md:px-12">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <h2 className="text-5xl md:text-7xl font-bold text-[#0A192F]">Compute <br /><span className="text-golden">solar</span> savings.</h2>
                                <p className="text-lg md:text-xl text-gray-600 font-medium">Estimate your monthly yield instantly with our industrial-grade calculator.</p>
                            </div>
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100">
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex flex-col gap-4 mb-4">
                                            <div className="flex justify-between items-center">
                                                <label className="block text-sm font-bold text-[#0A192F] uppercase">Monthly Bill (INR)</label>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xl font-black text-golden tracking-tight">₹</span>
                                                    <input
                                                        type="number"
                                                        value={bill}
                                                        onChange={(e) => setBill(Number(e.target.value))}
                                                        className="w-32 p-2 rounded-lg border border-gray-200 text-lg font-black text-[#0A192F] focus:outline-none focus:ring-2 focus:ring-golden text-right"
                                                    />
                                                </div>
                                            </div>
                                            <input type="range" min="1000" max="500000" step="1" value={bill} onChange={(e) => setBill(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-golden" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">Energy Generated</p>
                                            <p className="text-3xl font-black text-golden">{energyGenerated.toLocaleString()} <span className="text-sm">KWH</span></p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">CO2 Offset</p>
                                            <p className="text-3xl font-black text-golden">{carbonEmission.toLocaleString()} <span className="text-sm">KG</span></p>
                                        </div>
                                    </div>

                                    {/* NEW CTA INSIDE CALCULATOR */}
                                    <div className="pt-8 mt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                                        <p className="text-sm font-bold text-[#0A192F] uppercase tracking-widest">Stop Paying The Grid</p>
                                        <Link href="/contact" className="bg-[#0A192F] text-white font-bold px-6 py-3 rounded-xl hover:bg-golden hover:text-[#0A192F] transition-colors flex items-center gap-2 shadow-lg">
                                            Claim This ROI
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FOUNDERS / ABOUT SECTION */}
                    <section className="w-full py-24 md:py-32 relative z-20">
                        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                                    Solar energy <br /> systems reduce <br /> <span className="text-gray-400">operational bleed</span> <br /> by over 40%.
                                </motion.h2>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
                                    Solispark Energy is a premier utility-scale solar EPC and asset management firm. We specialize in transforming idle industrial assets into high-yield, megawatt-class power generation plants. Backed by industry veterans, we engineer solutions that outlast and outperform.
                                </p>
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="flex items-center gap-6">
                                    <div className="text-6xl md:text-8xl font-black tracking-tighter text-golden">10MW+</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-gray-500 leading-snug">Successfully <br />Deployed <br />Capacity</div>
                                </motion.div>
                            </div>

                            {/* SIDE-BY-SIDE FOUNDERS */}
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full flex flex-row items-center justify-center gap-4 md:gap-6 h-[400px] md:h-[500px]">
                                <div className="relative w-1/2 h-[90%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                    <Image src="/pruthvik.jpg" alt="Pruthvik Hariprasad" fill className="object-cover" sizes="50vw" />
                                </div>
                                <div className="relative w-1/2 h-[90%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white mt-16">
                                    <Image src="/ranveer.jpg" alt="Ranveer Dorai" fill className="object-cover" sizes="50vw" />
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* 10. THE VERDICT (Premium Social Proof) */}
                    <section className="w-full py-32 px-6 md:px-12 bg-white overflow-hidden">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-black mb-16 text-[#0A192F] tracking-tighter uppercase italic">
                                The <span className="text-golden">Verdict.</span>
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                                {/* Left Side: High-End Visual Placeholder */}
                                <div className="lg:col-span-2 relative aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] overflow-hidden bg-[#FAF9F6] border border-gray-100 shadow-2xl">
                                    <div className="absolute top-6 right-6 bg-[#0A192F]/80 backdrop-blur-md border border-white/10 text-golden text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-2xl z-50">
                                        <span className="animate-pulse bg-golden w-1.5 h-1.5 rounded-full inline-block mr-2"></span>
                                        CLIENT LOGS IN DEPLOYMENT
                                    </div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={testIndex}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.6 }}
                                            className="absolute inset-0 w-full h-full"
                                        >
                                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100">
                                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-golden/10 border-4 border-golden flex items-center justify-center shadow-[0_0_50px_rgba(251,191,36,0.3)] mb-6">
                                                    <span className="text-4xl md:text-6xl font-black text-golden">{getInitials(testimonials[testIndex].name)}</span>
                                                </div>
                                                <p className="text-gray-400 font-bold tracking-[0.3em] uppercase text-[10px]">Verified Partner Asset</p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Right Side: Direct Response Copy */}
                                <div className="lg:col-span-3 space-y-12">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={testIndex}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            className="space-y-8"
                                        >
                                            <div className="text-8xl text-golden/20 font-serif leading-none h-12">“</div>
                                            <p className="text-3xl md:text-5xl font-medium text-gray-700 leading-[1.1] tracking-tight italic">
                                                {testimonials[testIndex].quote}
                                            </p>
                                            <div>
                                                <p className="text-2xl font-black text-[#0A192F] uppercase tracking-tight">{testimonials[testIndex].name}</p>
                                                <div className="flex gap-1 mt-3">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} width="22" height="22" fill="#FBBF24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="flex gap-6 pt-8">
                                        <button onClick={() => setTestIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))} className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-golden hover:border-golden transition-all group active:scale-95">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:text-[#0A192F]"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
                                        </button>
                                        <button onClick={() => setTestIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))} className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-golden hover:border-golden transition-all group active:scale-95">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:text-[#0A192F]"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 11. THE PROOF (3D Draggable Video Carousel) */}
                    <section className="w-full py-32 bg-[#0A192F] text-white overflow-hidden relative border-t border-white/5">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-golden/10 blur-[120px] rounded-full pointer-events-none"></div>

                        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                            <div className="text-center mb-20">
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-4 italic">
                                    Performance. <span className="text-golden">In Real Time.</span>
                                </h2>
                                <p className="text-white/60 font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs">
                                    Utility-Scale Deployments • Precision PMSG Engineering • Industrial-Grade ROI
                                </p>
                            </div>

                            <div className="relative flex justify-center items-center h-[500px] md:h-[650px]">
                                <div className="absolute top-8 right-8 z-50 bg-white/10 backdrop-blur-xl border border-white/20 text-golden text-xs font-black uppercase tracking-[0.3em] px-6 py-3 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.2)] flex items-center gap-3">
                                    <span className="animate-pulse bg-golden w-1.5 h-1.5 rounded-full inline-block"></span>
                                    LIVE TRANSMISSIONS PENDING
                                </div>
                                <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar px-12 cursor-grab active:cursor-grabbing snap-x">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <motion.div
                                            key={item}
                                            whileHover={{ y: -20, scale: 1.02 }}
                                            className="min-w-[280px] md:min-w-[380px] aspect-[9/16] bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative snap-center group"
                                        >
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="w-20 h-20 rounded-full bg-golden/20 flex items-center justify-center border border-golden/50 group-hover:bg-golden/40 transition-all duration-500">
                                                    <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24" className="text-golden ml-1"><path d="M8 5v14l11-7z" /></svg>
                                                </div>
                                                <p className="mt-8 font-black tracking-[0.3em] text-[10px] text-golden uppercase">Site Log 0{item}</p>
                                            </div>

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                                            <div className="absolute bottom-10 left-10 right-10">
                                                <p className="text-white font-black text-2xl leading-none mb-2 tracking-tight">Industrial <br /> Commissioning</p>
                                                <p className="text-xs font-bold text-golden uppercase tracking-widest flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-golden rounded-full animate-pulse"></span>
                                                    Verified Solispark Asset
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 mt-8">
                                <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
                                    <motion.div
                                        className="h-full bg-golden shadow-[0_0_15px_#FBBF24]"
                                        animate={{ x: [-96, 96] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        style={{ width: '40%' }}
                                    />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 italic">Swipe to verify performance</span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}