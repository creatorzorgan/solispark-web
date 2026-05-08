"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const solutionLinks = [
    { href: "/residential", label: "Home & Family", badge: "Up to 90% savings" },
    { href: "/commercial", label: "Business & Offices", badge: "75–80% savings" },
    { href: "/industrial", label: "Factory & Plant", badge: "70–75% savings" },
    { href: "/apartments", label: "Apartments & RWAs", badge: "Up to 70% savings" },
    { href: "/ev-charging", label: "EV Charging", badge: "Near-zero charge cost" },
    { href: "/industrial", label: "Power Plant Set Up", badge: "Utility-scale EPC" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setSolutionsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 h-[72px] md:h-[90px] bg-white/90 backdrop-blur-xl border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <img
                        src="/logo.png"
                        alt="Solispark Energy"
                        className="w-40 sm:w-48 h-auto object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#0A192F]/80">
                    <Link href="/" className="hover:text-golden transition-colors font-bold">Home</Link>
                    <Link href="/about" className="hover:text-golden transition-colors font-bold">About</Link>
                    <Link href="/services" className="hover:text-golden transition-colors font-bold">Services</Link>

                    {/* Solutions dropdown */}
                    <div ref={dropdownRef} className="relative">
                        <button
                            onClick={() => setSolutionsOpen((v) => !v)}
                            className={`inline-flex items-center gap-1 font-bold transition-colors ${solutionsOpen ? "text-golden" : "hover:text-golden"}`}
                        >
                            Solutions
                            <svg
                                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {solutionsOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-[0_20px_60px_rgba(10,25,47,0.15)] border border-gray-100 overflow-hidden z-50">
                                <div className="p-1.5">
                                    {solutionLinks.map((s) => (
                                        <Link
                                            key={s.href}
                                            href={s.href}
                                            onClick={() => setSolutionsOpen(false)}
                                            className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-golden/8 group transition-colors"
                                        >
                                            <span className="text-sm font-bold text-[#0A192F] group-hover:text-golden transition-colors">{s.label}</span>
                                            <span className="text-[10px] font-bold text-golden/70 bg-golden/10 px-2 py-0.5 rounded-full">{s.badge}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/portfolio" className="hover:text-golden transition-colors font-bold">Portfolio</Link>
                    <Link href="/faq" className="hover:text-golden transition-colors font-bold">FAQ</Link>
                </nav>

                {/* Desktop CTA */}
                <Link
                    href="/contact"
                    className="hidden md:inline-flex btn-gold font-bold px-6 py-2.5 rounded-full text-sm"
                >
                    Get Free Estimate
                </Link>

                {/* Mobile Hamburger */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-[#0A192F] bg-white/80 shadow-sm"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-2xl absolute w-full left-0 top-full">
                    <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2 text-base font-bold text-[#0A192F]">
                        {navLinks.slice(0, 4).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="py-3 flex justify-between items-center hover:text-golden border-b border-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>{item.label}</span>
                                <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-[10px] text-gray-500">→</span>
                            </Link>
                        ))}

                        {/* Solutions accordion */}
                        <div className="border-b border-gray-100">
                            <button
                                onClick={() => setMobileSolutionsOpen((v) => !v)}
                                className="w-full py-3 flex justify-between items-center hover:text-golden"
                            >
                                <span>Solutions</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}>
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                            {mobileSolutionsOpen && (
                                <div className="pb-3 pl-3 flex flex-col gap-1">
                                    {solutionLinks.map((s) => (
                                        <Link
                                            key={s.href}
                                            href={s.href}
                                            onClick={() => { setIsOpen(false); setMobileSolutionsOpen(false); }}
                                            className="py-2 flex justify-between items-center text-sm text-[#0A192F]/70 hover:text-golden"
                                        >
                                            <span>{s.label}</span>
                                            <span className="text-[10px] font-bold text-golden bg-golden/10 px-2 py-0.5 rounded-full">{s.badge}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {navLinks.slice(4).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="py-3 flex justify-between items-center hover:text-golden border-b border-gray-100 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>{item.label}</span>
                                <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-[10px] text-gray-500">→</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
