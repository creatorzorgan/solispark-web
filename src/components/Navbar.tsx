import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
                "h-[72px] bg-white/40 backdrop-blur-xl border-b border-white/20"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    {/* Explicitly using standard HTML image to prevent unhandled build errors if size info is omitted. 
              The Next.js framework will still serve this appropriately from the public folder. */}
                    <img
                        src="/logo.png"
                        alt="SolisPark Energy"
                        className="h-8 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
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
                </nav>

                {/* CTA */}
                <Link href="/contact" className="bg-golden hover:bg-[#E5A500] text-navy font-semibold px-6 py-2.5 rounded-full text-sm transition-all hover:shadow-[0_0_15px_rgba(255,183,3,0.4)]">
                    Initiate Mega-Project
                </Link>
            </div>
        </header>
    );
}
