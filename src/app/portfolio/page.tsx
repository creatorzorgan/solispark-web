"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const DJI_IMAGES = [
    "/dji-image-1.jpg",
    "/dji-image-2.jpg",
    "/dji-image-3.jpg",
    "/dji-image-4.jpg",
    "/dji-image-5.jpg",
];

const YOUTUBE_VIDEOS = [
    { id: 'P7R1n6KLg1I', index: 1 },
    { id: 'ykxepfx6CAo', index: 2 },
    { id: 'l5NkwhgPyIQ', index: 3 },
    { id: 'Fy0mnh7XeFI', index: 4 },
    { id: 'w5LhrZ6duko', index: 5 },
    { id: '5ta92ZgaJ48', index: 6 },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

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

                {/* Drone stills gallery */}
                <section className="w-full mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A192F]">
                            The <span className="text-golden">Aerial</span> Record.
                        </h2>
                        <p className="text-gray-500 font-medium mt-4 max-w-xl mx-auto text-sm md:text-base">
                            High-altitude captures from live megawatt deployments—geometry, scale, and yield in a single frame.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-7 md:row-span-2 group relative rounded-[2rem] overflow-hidden border border-gray-200 bg-white shadow-xl aspect-[4/3] md:min-h-[420px]"
                        >
                            <img
                                src={DJI_IMAGES[0]}
                                alt="Drone capture 1"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A192F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-5 group relative rounded-[2rem] overflow-hidden border border-gray-200 bg-white shadow-xl aspect-[16/10] md:aspect-auto md:min-h-[200px]"
                        >
                            <img
                                src={DJI_IMAGES[1]}
                                alt="Drone capture 2"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-5 group relative rounded-[2rem] overflow-hidden border border-gray-200 bg-white shadow-xl aspect-[16/10] md:aspect-auto md:min-h-[200px]"
                        >
                            <img
                                src={DJI_IMAGES[2]}
                                alt="Drone capture 3"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-4 group relative rounded-[2rem] overflow-hidden border border-gray-200 bg-white shadow-xl aspect-[4/3]"
                        >
                            <img
                                src={DJI_IMAGES[3]}
                                alt="Drone capture 4"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-8 group relative rounded-[2rem] overflow-hidden border border-gray-200 bg-white shadow-xl aspect-[21/9] md:aspect-[2.4/1]"
                        >
                            <img
                                src={DJI_IMAGES[4]}
                                alt="Drone capture 5"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                        </motion.div>
                    </motion.div>
                </section>

                {/* PROJECT VIDEO SECTION (THE COOL 3D SCROLL) */}
                <section className="w-full mb-32 py-24 px-6 md:px-12 bg-[#0A192F] rounded-[2.5rem] md:rounded-[4rem] text-white overflow-hidden relative shadow-2xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The <span className="text-golden">Performance</span> Logs.</h2>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-sm mt-4">Unfiltered Site Deployment Data</p>
                    </div>

                    <div className="relative flex justify-center items-center h-[500px] md:h-[650px]">
                        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar px-12 cursor-grab active:cursor-grabbing snap-x">
                            {YOUTUBE_VIDEOS.map((video) => (
                                <motion.div 
                                    key={video.id}
                                    whileHover={{ y: -20 }}
                                    className="min-w-[280px] md:min-w-[380px] aspect-[9/16] bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative snap-center group"
                                >
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0&playsinline=1`}
                                        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-[1] pointer-events-none" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                                        <p className="font-bold tracking-widest text-xs text-golden uppercase">
                                            Transmission {String(video.index).padStart(2, "0")}
                                        </p>
                                    </div>
                                    <div className="absolute bottom-10 left-10 z-10">
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
