"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is the lifespan of the underlying tech?",
            answer: "We engineer for 25+ years of peak performance. We exclusively deploy Tier-1 components like N-Type TOPCon cells and heavy-duty single-axis trackers, entirely insulated by a 30-year industry-exclusive warranty via our partners at Axitec."
        },
        {
            question: "Will the installation disrupt my operations?",
            answer: "Zero disruption. Our EPC teams execute parallel to your daily operations. From securing the foundation to advanced grid integration, the infrastructure is assembled cleanly, quietly, and entirely independently of your core mechanical infrastructure until the final cut-over."
        },
        {
            question: "What is the 'catch' with the OPEX / BOOT model?",
            answer: "There is none. It is a pure performance partnership. Solispark takes 100% of the CAPEX risk on our balance sheet. We monetize our layout over the long term, while you instantly decarbonize your footprint and secure power at a drastically discounted, flat tariff rate without spending a single rupee upfront."
        },
        {
             question: "Do you handle MNRE and DISCOM approvals?",
             answer: "Yes. As an MNRE Approved Vendor, our in-house regulatory team handles 100% of the red tape, from net-metering applications to final DISCOM synchronization."
        },
        {
             question: "How do I know my exact ROI?",
             answer: "Before any commitment, we conduct a massive site audit. We cross-reference your historical grid load with high-fidelity solar irradiance modeling for your coordinates to guarantee your projected yield and payback period down to the decimal."
        }
    ];

    return (
        <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                {/* Header */}
                <section className="mb-12 md:mb-16 text-center">
                    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 mb-4">
                        FAQ · B2B Solar Strategy
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A192F] mb-4">
                        Answers for serious energy buyers.
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                        The five questions every CFO, plant head, and promoter asks before committing to a solar asset—clarified in one place.
                    </p>
                </section>

                {/* FAQ List */}
                <section className="mb-16">
                    <div className="rounded-3xl border border-gray-200 bg-white shadow-sm divide-y divide-gray-100 overflow-hidden">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <button
                                    key={faq.question}
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors bg-white"
                                >
                                    <div>
                                        <h2 className="text-base md:text-lg font-semibold text-[#0A192F] mb-2">
                                            {faq.question}
                                        </h2>
                                        {isOpen && (
                                            <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-2">
                                                {faq.answer}
                                            </p>
                                        )}
                                    </div>
                                    <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 text-xs text-gray-500 font-bold">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* CTA */}
                <section className="mt-10">
                    <div className="rounded-3xl bg-[#0A192F] text-white px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                                Book a Free Site Survey.
                            </h2>
                            <p className="text-sm md:text-base text-white/80 max-w-xl">
                                Share your latest electricity bill and sanctioned load, and our engineers will design a site-specific yield and savings model for your facility.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-golden px-7 py-3 text-sm md:text-base font-bold text-[#0A192F] hover:bg-[#E5A500] transition-colors"
                        >
                            Book a Free Site Survey
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}