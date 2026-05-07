"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

const SECTIONS = [
    {
        title: "Information We Collect",
        content: [
            "When you submit an enquiry form on our website, we collect your name, phone number, email address, property type, and approximate electricity bill — solely to prepare a solar savings estimate for you.",
            "We may also collect technical data such as your IP address, browser type, and pages visited via standard web analytics tools. This data is anonymised and used only to improve the website.",
        ],
    },
    {
        title: "How We Use Your Information",
        content: [
            "Your contact details are used exclusively to respond to your enquiry, schedule a free site visit, and share a personalised solar savings model.",
            "We do not use your information for automated decision-making, profiling, or any purpose unrelated to your solar enquiry.",
            "With your consent, we may send you occasional updates about government subsidies, policy changes, or new product offerings relevant to your property type.",
        ],
    },
    {
        title: "Who We Share Information With",
        content: [
            "We do not sell, rent, or trade your personal information to any third party.",
            "Your details may be shared with our field engineering and survey teams who conduct the free site visit you have requested. These teams are bound by the same confidentiality obligations as our core staff.",
            "We may share anonymised, aggregated data (e.g., 'enquiries from Gujarat rose 40% this quarter') with partners for industry research — this data never identifies you individually.",
        ],
    },
    {
        title: "Data Retention",
        content: [
            "If you submit an enquiry and do not proceed with a project, we retain your details for up to 24 months in case you wish to revisit your solar decision.",
            "If you become a Solispark customer, your project records are retained for the full duration of your Solispark service agreement (up to 30 years) as required for warranty and performance guarantee administration.",
            "You may request deletion of your data at any time by contacting us at the details below.",
        ],
    },
    {
        title: "Cookies & Analytics",
        content: [
            "Our website uses first-party cookies to remember your session and preferences. We use Google Analytics (with IP anonymisation enabled) to understand aggregate visitor behaviour.",
            "We do not use advertising or tracking cookies. You can disable cookies in your browser settings at any time without losing access to any part of the site.",
        ],
    },
    {
        title: "Your Rights",
        content: [
            "You have the right to access, correct, or request deletion of any personal information we hold about you.",
            "You may withdraw consent for marketing communications at any time by replying STOP to any SMS or clicking the unsubscribe link in any email.",
            "To exercise any of these rights, email us at privacy@solispark.in or call +91 98765 43210. We will respond within 7 business days.",
        ],
    },
    {
        title: "Security",
        content: [
            "We use industry-standard encryption (TLS) for all data transmitted through our website. Internally, access to customer data is restricted to personnel who require it to service your enquiry.",
            "We conduct periodic security reviews and do not store payment card or bank account information on our systems.",
        ],
    },
    {
        title: "Changes to This Policy",
        content: [
            "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The date of the most recent revision is shown at the top of this page.",
            "For significant changes, we will notify active customers via email before the changes take effect.",
        ],
    },
    {
        title: "Contact Us",
        content: [
            "Solispark Energy Pvt. Ltd.",
            "Email: privacy@solispark.in",
            "Phone: +91 98765 43210",
            "If you have concerns about how we handle your data that we have not addressed to your satisfaction, you may contact the Data Protection Authority of India.",
        ],
    },
];

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#FAF9F6] text-[#0A192F]">

            {/* HERO */}
            <section className="relative bg-[#0A192F] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0A192F,#08152a_70%,#06101f)]" />
                <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 md:pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-golden" />
                        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-white/80">Last updated: April 2025</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-5"
                    >
                        Privacy Policy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
                        className="text-base md:text-lg text-white/70 font-medium leading-relaxed max-w-2xl"
                    >
                        We collect only what we need to give you an accurate solar estimate — and we never sell your data. Here's exactly what we do with your information.
                    </motion.p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="w-full py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">

                    {/* Quick nav */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="mb-14 p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_rgba(10,25,47,0.04)]"
                    >
                        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0A192F]/40 mb-4">Contents</p>
                        <div className="flex flex-wrap gap-2">
                            {SECTIONS.map((s, i) => (
                                <span key={i} className="text-xs font-bold text-[#0A192F]/60 bg-[#FAF9F6] px-3 py-1.5 rounded-full border border-gray-200">
                                    {i + 1}. {s.title}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Policy sections */}
                    <div className="space-y-10">
                        {SECTIONS.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
                                className="bg-white p-7 md:p-9 rounded-3xl border border-gray-100 shadow-[0_4px_24px_rgba(10,25,47,0.04)]"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-[11px] font-black text-white bg-[#0A192F] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">{i + 1}</span>
                                    <h2 className="text-lg md:text-xl font-bold tracking-tight text-[#0A192F]">{section.title}</h2>
                                </div>
                                <ul className="space-y-3">
                                    {section.content.map((para, j) => (
                                        <li key={j} className="flex gap-3 text-sm md:text-base text-[#0A192F]/65 font-medium leading-relaxed">
                                            <svg className="flex-shrink-0 mt-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB703" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                            <span>{para}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Back to home */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-14 flex items-center gap-4"
                    >
                        <Link href="/"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#0A192F]/60 hover:text-golden transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                            Back to home
                        </Link>
                        <span className="text-[#0A192F]/20">·</span>
                        <Link href="/contact"
                            className="inline-flex items-center gap-2 text-sm font-bold text-golden hover:text-[#E5A500] transition-colors">
                            Questions? Contact us
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
