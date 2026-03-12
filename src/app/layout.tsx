import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "SolisPark Energy | Utility-Scale Solar Infrastructure",
    description: "End-to-end solar infrastructure development. From land acquisition to grid integration, we build India's megawatt clean energy future.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
            <body className="min-h-screen font-sans bg-[#0A192F] text-[#FBFBFB]">
                <Navbar />
                {children}

                {/* FOOTER */}
                <footer className="w-full bg-[#0A192F] text-white py-16 border-t border-white/10 relative z-20">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col space-y-4">
                            <span className="text-2xl font-bold tracking-tight">SolisPark Energy.</span>
                            <span className="text-sm text-white/70 max-w-sm leading-relaxed">
                                Building India's megawatt clean energy future from land acquisition to grid integration.
                            </span>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2 opacity-80">Contact Office</h4>
                            <div className="text-sm text-white/80 space-y-3 font-medium">
                                <p className="leading-relaxed">#244, F Block, 15th Main Road,<br/>Sahakarnagar, Bengaluru - 92</p>
                                <p><a href="tel:+919886886122" className="hover:text-golden transition">+91 9886886122</a> <span className="text-white/30 mx-2">/</span> <a href="tel:+917760375599" className="hover:text-golden transition">7760375599</a></p>
                                <p><a href="mailto:solisparkenergy@gmail.com" className="hover:text-golden transition border-b border-golden/30 pb-0.5">solisparkenergy@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 md:items-end">
                            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2 opacity-80 md:text-right">Corporate Info</h4>
                            <div className="flex flex-col space-y-3 md:items-end text-sm text-white/70">
                                <a href="/terms" className="hover:text-golden transition">Terms & Conditions</a>
                                <a href="/terms" className="hover:text-golden transition">Privacy Policy</a>
                            </div>
                            <a href="/Company Profile.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-lg transition-all font-semibold flex items-center gap-3 text-sm w-fit group">
                                <span>Download Corporate Profile</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 group-hover:text-golden transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                            </a>
                        </div>
                    </div>
                </footer>

                {/* FLOATING CONVERSION BUTTON */}
                <div className="fixed bottom-6 right-6 z-50">
                    <a href="/Company Profile.pdf" target="_blank" rel="noopener noreferrer" className="bg-golden hover:bg-[#E5A500] text-navy font-bold px-6 py-4 rounded-full shadow-[0_10px_25px_rgba(255,183,3,0.3)] hover:shadow-[0_15px_35px_rgba(255,183,3,0.5)] hover:-translate-y-1 transition-all flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                        <span className="text-sm tracking-tight hidden sm:block">Download Corporate Profile</span>
                    </a>
                </div>
            </body>
        </html>
    );
}
