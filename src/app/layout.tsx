import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Solispark Energy | Utility-Scale Solar Infrastructure",
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
                                    alt="Solispark Energy"
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
                                Solispark Energy engineers utility-scale and commercial solar assets from
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
                                        href="tel:+917760375599"
                                        className="hover:text-golden transition-colors"
                                    >
                                        +91 7760375599
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
                                    href="https://www.instagram.com/solisparkenergyofficial/"
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

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/company/solispark-energy-pvt-ltd/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
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
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/profile.php?id=61577415141530"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
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
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
                        <span>© {new Date().getFullYear()} Solispark Energy. All rights reserved.</span>
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

                {/* FLOATING CONVERSION STACK — WhatsApp + Click-to-Call */}
                <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/917760375599?text=Hi%20Solispark%20%E2%80%94%20I%27m%20interested%20in%20a%20solar%20consultation."
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        className="group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all"
                    >
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.241.39-.999 3.648 3.737-.997zm9.605-5.612c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01a1.094 1.094 0 0 0-.793.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                        </svg>
                    </a>
                    {/* Click-to-Call */}
                    <a
                        href="tel:+917760375599"
                        aria-label="Call Solispark"
                        className="group w-14 h-14 rounded-full bg-golden text-[#0A192F] flex items-center justify-center shadow-[0_10px_30px_rgba(255,183,3,0.45)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(255,183,3,0.6)] transition-all"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </a>
                </div>
            </body>
        </html>
    );
}
