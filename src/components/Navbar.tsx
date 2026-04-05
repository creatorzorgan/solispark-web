"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                        alt="SolisPark Energy"
                        className="w-40 sm:w-48 h-auto object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0A192F]/80">
                    {navLinks.slice(0, 5).map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-golden transition-colors font-bold"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <Link
                    href="/contact"
                    className="hidden md:inline-flex bg-golden hover:bg-[#E5A500] text-[#0A192F] font-bold px-6 py-2.5 rounded-full text-sm transition-all hover:shadow-[0_0_15px_rgba(255,183,3,0.4)]"
                >
                    Initiate Mega-Project
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
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
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="py-3 flex justify-between items-center hover:text-golden border-b border-gray-100 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>{item.label}</span>
                                <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-[10px] text-gray-500">
                                    →
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}