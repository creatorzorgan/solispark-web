"use client";

import { useState } from "react";
import LeadForm from "@/components/leadgen/LeadForm";
import { ALL_VERTICALS, type Vertical } from "@/lib/leadgen";
import { cn } from "@/lib/utils";

const LABELS: Record<Vertical, string> = {
    "solar-parks": "Solar Parks",
    commercial: "Commercial",
    industrial: "Industrial",
    residential: "Residential",
    "ev-charging": "EV Charging",
    apartments: "Apartments",
};

export default function LeadFormPreviewPage() {
    const [vertical, setVertical] = useState<Vertical>("solar-parks");
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [variant, setVariant] = useState<"card" | "inline">("card");

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#0A192F] font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
                {/* Header */}
                <div className="mb-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A192F]/50">
                        Internal Preview
                    </span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
                        Lead Form — <span className="text-golden">Reusable Component</span>
                    </h1>
                    <p className="mt-3 text-base md:text-lg text-[#0A192F]/65 font-medium max-w-2xl">
                        Single-step, validated, posts to{" "}
                        <code className="font-mono text-sm bg-white px-1.5 py-0.5 rounded border border-gray-200">
                            /api/lead
                        </code>
                        . Pick a config below to preview.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col gap-5 mb-12 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                    <ControlRow label="Vertical">
                        {ALL_VERTICALS.map((v) => (
                            <Pill key={v} active={vertical === v} onClick={() => setVertical(v)}>
                                {LABELS[v]}
                            </Pill>
                        ))}
                    </ControlRow>
                    <ControlRow label="Theme">
                        <Pill active={theme === "light"} onClick={() => setTheme("light")}>
                            Light
                        </Pill>
                        <Pill active={theme === "dark"} onClick={() => setTheme("dark")}>
                            Dark (navy)
                        </Pill>
                    </ControlRow>
                    <ControlRow label="Variant">
                        <Pill active={variant === "card"} onClick={() => setVariant("card")}>
                            Card (hero column)
                        </Pill>
                        <Pill active={variant === "inline"} onClick={() => setVariant("inline")}>
                            Inline (full width)
                        </Pill>
                    </ControlRow>
                </div>

                {/* Stage */}
                <div
                    className={cn(
                        "rounded-[2.5rem] p-8 md:p-16 flex justify-center transition-colors",
                        theme === "dark" ? "bg-[#050d1a]" : "bg-white border border-gray-100 shadow-sm"
                    )}
                >
                    <LeadForm
                        key={`${vertical}-${theme}-${variant}`}
                        vertical={vertical}
                        theme={theme}
                        variant={variant}
                    />
                </div>

                <p className="mt-8 text-xs font-medium text-[#0A192F]/45 text-center">
                    Submitting logs to your dev server console (no email/CRM wired yet — that&apos;s a later step).
                </p>
            </div>
        </div>
    );
}

function ControlRow({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="w-24 shrink-0 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0A192F]/50">
                {label}
            </span>
            <div className="flex flex-wrap gap-2">{children}</div>
        </div>
    );
}

function Pill({
    active,
    onClick,
    children,
}: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "px-4 py-2 rounded-full text-xs font-bold tracking-tight transition-colors",
                active
                    ? "bg-[#0A192F] text-white"
                    : "bg-gray-50 text-[#0A192F]/70 border border-gray-200 hover:border-[#0A192F]/40"
            )}
        >
            {children}
        </button>
    );
}
