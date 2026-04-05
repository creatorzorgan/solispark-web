import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

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
            <body className="min-h-screen font-sans bg-[#FAF9F6] text-[#0A192F]">
                <Navbar />
                {children}

                {/* FOOTER */}
                <footer className="w-full bg-white text-[#0A192F] py-16 border-t border-gray-200 relative z-20 mt-16">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        {/* Brand + Bio */}
                        <div className="md:col-span-5 space-y-5">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/logo.png"
                                    alt="SolisPark Energy"
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
                                SolisPark Energy engineers utility-scale and commercial solar assets from
                                land acquisition to grid integration, helping India&apos;s enterprises own
                                their energy infrastructure and slash operating overheads.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div className="md:col-span-4 flex flex-col md:items-center space-y-4">
                            <h4 className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase">
                                Navigation
                            </h4>
                            <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm font-medium text-gray-700">
                                <Link href="/" className="hover:text-golden transition-colors">
                                    Home
                                </Link>
                                <Link href="/about" className="hover:text-golden transition-colors">
                                    About
                                </Link>
                                <Link href="/services" className="hover:text-golden transition-colors">
                                    Services
                                </Link>
                                <Link href="/portfolio" className="hover:text-golden transition-colors">
                                    Portfolio
                                </Link>
                                <Link href="/faq" className="hover:text-golden transition-colors">
                                    FAQ
                                </Link>
                                <Link href="/contact" className="hover:text-golden transition-colors">
                                    Contact
                                </Link>
                            </nav>
                        </div>

                        {/* Contact + Socials */}
                        <div className="md:col-span-3 space-y-5 md:text-right">
                            <div className="space-y-2 text-sm text-gray-600">
                                <p className="font-semibold text-gray-900">Corporate Office</p>
                                <p className="leading-relaxed">
                                    #244, F Block, 15th Main Road,
                                    <br />
                                    Sahakarnagar, Bengaluru - 92
                                </p>
                                <p>
                                    <a
                                        href="tel:+919886886122"
                                        className="hover:text-golden transition-colors"
                                    >
                                        +91 9886886122
                                    </a>
                                    <span className="text-gray-400 mx-2">/</span>
                                    <a
                                        href="tel:+917760375599"
                                        className="hover:text-golden transition-colors"
                                    >
                                        7760375599
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="mailto:solisparkenergy@gmail.com"
                                        className="hover:text-golden transition-colors"
                                    >
                                        solisparkenergy@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div className="flex md:justify-end gap-4 pt-3">
                                {/* Instagram */}
                                <a
                                    href="https://instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-golden hover:border-golden transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
                                        <circle cx="12" cy="12" r="3.5" />
                                        <path d="M17.5 6.5h.01" />
                                    </svg>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-golden hover:border-golden transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3.5 20.5 5 16.1A8 8 0 1 1 8 19.5L3.5 20.5Z" />
                                        <path d="M9 10.5c.2.9.9 1.6 1.8 2.2.7.5 1.3.8 2.1.8.6 0 .8-.1 1.2-.3.3-.2.5-.5.6-.8.1-.2 0-.4-.2-.5l-1.1-.5c-.2-.1-.4-.1-.6.1l-.3.3c-.1.1-.2.1-.4 0-.4-.2-.8-.5-1.2-.9-.3-.3-.6-.7-.8-1.1-.1-.1 0-.3.1-.4l.2-.3c.1-.2.1-.4 0-.6l-.5-1.1c-.1-.2-.3-.3-.5-.2-.4.1-.8.3-1 .6-.4.4-.6.9-.6 1.5 0 .3 0 .5.1.8Z" />
                                    </svg>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:solisparkenergy@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Email"
                                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-golden hover:border-golden transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <polyline points="3 7 12 13 21 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                        <span>© {new Date().getFullYear()} SolisPark Energy. All rights reserved.</span>
                        <div className="flex items-center gap-3">
                            <a href="/terms" className="hover:text-golden transition-colors">
                                Terms &amp; Conditions
                            </a>
                            <span className="w-px h-3 bg-gray-200" />
                            <a href="/privacy" className="hover:text-golden transition-colors">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </footer>

                {/* FLOATING CONVERSION BUTTON */}
                <div className="fixed bottom-6 right-6 z-50">
                    <Link href="/contact" className="bg-golden hover:bg-[#E5A500] text-navy font-bold px-6 py-4 rounded-full shadow-[0_10px_25px_rgba(255,183,3,0.3)] hover:shadow-[0_15px_35px_rgba(255,183,3,0.5)] hover:-translate-y-1 transition-all flex items-center gap-3">
                        {/* Calendar Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <span className="text-sm tracking-tight hidden sm:block">Book a Call</span>
                    </Link>
                </div>
            </body>
        </html>
    );
}
