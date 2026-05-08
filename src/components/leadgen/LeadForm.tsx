"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    BILL_RANGES,
    getVerticalConfig,
    type Vertical,
    type VerticalConfig,
} from "@/lib/leadgen";

type LeadFormProps = {
    vertical?: Vertical;
    /** "card" = compact (hero column). "inline" = wider full-width section. */
    variant?: "card" | "inline";
    /** Visual theme — "light" for off-white sections, "dark" for navy sections. */
    theme?: "light" | "dark";
    className?: string;
};

type FormState = {
    name: string;
    email: string;
    whatsapp: string;
    billRange: string;
    pincode: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\d{10}$/;
const PINCODE_RE = /^\d{6}$/;

const TRANSITION = { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

export default function LeadForm({
    vertical = "solar-parks",
    variant = "card",
    theme = "light",
    className,
}: LeadFormProps) {
    const config: VerticalConfig = useMemo(() => getVerticalConfig(vertical), [vertical]);
    const isDark = theme === "dark";

    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        whatsapp: "",
        billRange: "",
        pincode: "",
    });

    const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

    const validate = (): boolean => {
        const next: typeof errors = {};
        if (!form.name.trim()) next.name = "Name required.";
        if (!EMAIL_RE.test(form.email)) next.email = "Valid email required.";
        if (!PHONE_RE.test(form.whatsapp)) next.whatsapp = "10-digit number required.";
        if (!form.billRange) next.billRange = "Pick a range.";
        if (!PINCODE_RE.test(form.pincode)) next.pincode = "6-digit PIN required.";
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus("submitting");
        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ vertical, ...form }),
            });
            if (!res.ok) throw new Error("submit failed");
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    const containerCls = cn(
        "relative w-full font-sans rounded-[2rem] border shadow-xl overflow-hidden",
        variant === "card" ? "max-w-md" : "max-w-2xl mx-auto",
        isDark
            ? "bg-[#0A192F] border-white/10 text-white"
            : "bg-white border-gray-100 text-[#0A192F]",
        className
    );

    return (
        <div className={containerCls}>
            {/* Header */}
            <div className={cn("px-7 pt-7 pb-5", isDark ? "border-b border-white/10" : "border-b border-gray-100")}>
                <span
                    className={cn(
                        "block text-[10px] font-bold uppercase tracking-[0.25em] mb-3",
                        isDark ? "text-golden" : "text-[#0A192F]/60"
                    )}
                >
                    {config.eyebrow}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                    {status === "success" ? config.successHeadline : config.headline}
                </h3>
                <p
                    className={cn(
                        "mt-2 text-sm md:text-base font-medium leading-relaxed",
                        isDark ? "text-white/70" : "text-[#0A192F]/65"
                    )}
                >
                    {status === "success" ? config.successBody : config.subheadline}
                </p>
            </div>

            {/* Body */}
            <div className="px-7 py-7">
                <AnimatePresence mode="wait">
                    {status === "success" ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={TRANSITION}
                            className="flex flex-col items-center text-center py-6"
                        >
                            <div className="w-16 h-16 rounded-full bg-golden/15 flex items-center justify-center mb-5">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <p className={cn("text-sm font-bold tracking-widest uppercase", isDark ? "text-white/60" : "text-[#0A192F]/60")}>
                                Lead secured · Solispark
                            </p>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={TRANSITION}
                            onSubmit={submit}
                            className="flex flex-col gap-4"
                        >
                            <Field label="Full Name" error={errors.name} isDark={isDark}>
                                <input
                                    value={form.name}
                                    onChange={(e) => update("name", e.target.value)}
                                    placeholder="Your name"
                                    autoComplete="name"
                                    className={inputCls(isDark)}
                                />
                            </Field>

                            <Field label="Email" error={errors.email} isDark={isDark}>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => update("email", e.target.value)}
                                    placeholder="you@email.com"
                                    autoComplete="email"
                                    className={inputCls(isDark)}
                                />
                            </Field>

                            <Field label="WhatsApp Number" error={errors.whatsapp} isDark={isDark}>
                                <div className="relative">
                                    <span
                                        className={cn(
                                            "absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold tracking-tight pointer-events-none",
                                            isDark ? "text-white/50" : "text-[#0A192F]/45"
                                        )}
                                    >
                                        +91
                                    </span>
                                    <input
                                        inputMode="numeric"
                                        maxLength={10}
                                        value={form.whatsapp}
                                        onChange={(e) => update("whatsapp", e.target.value.replace(/\D/g, ""))}
                                        placeholder="10-digit number"
                                        autoComplete="tel-national"
                                        className={cn(inputCls(isDark), "pl-12")}
                                    />
                                </div>
                            </Field>

                            <Field label="Avg. Monthly Electricity Bill" error={errors.billRange} isDark={isDark}>
                                <select
                                    value={form.billRange}
                                    onChange={(e) => update("billRange", e.target.value)}
                                    className={cn(inputCls(isDark), "appearance-none pr-10 cursor-pointer")}
                                >
                                    <option value="" disabled className="text-[#0A192F] bg-white">Select a range</option>
                                    {BILL_RANGES.map((b) => (
                                        <option key={b.id} value={b.id} className="text-[#0A192F] bg-white">{b.label}</option>
                                    ))}
                                </select>
                            </Field>

                            <Field label="PIN Code" error={errors.pincode} isDark={isDark}>
                                <input
                                    inputMode="numeric"
                                    maxLength={6}
                                    value={form.pincode}
                                    onChange={(e) => update("pincode", e.target.value.replace(/\D/g, ""))}
                                    placeholder="6-digit PIN"
                                    autoComplete="postal-code"
                                    className={inputCls(isDark)}
                                />
                            </Field>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="mt-2 inline-flex items-center justify-center gap-2 bg-golden text-[#0A192F] font-black px-6 py-4 rounded-xl shadow-[0_10px_25px_rgba(255,183,3,0.3)] hover:scale-[1.02] active:scale-[0.99] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Sending..." : config.cta}
                                {status !== "submitting" && (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                )}
                            </button>

                            <p className={cn("text-[11px] font-medium leading-relaxed text-center", isDark ? "text-white/45" : "text-[#0A192F]/45")}>
                                No spam, ever. Backed by the Solispark commitment.
                            </p>

                            {status === "error" && (
                                <p className="text-sm font-medium text-red-500 text-center -mt-1">
                                    Something went wrong. Try again or call +91 7760375599.
                                </p>
                            )}
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

/* ───────────── Field shell ───────────── */

function Field({
    label,
    error,
    isDark,
    children,
}: {
    label: string;
    error?: string;
    isDark: boolean;
    children: React.ReactNode;
}) {
    return (
        <label className="block">
            <span
                className={cn(
                    "block text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5",
                    isDark ? "text-white/60" : "text-[#0A192F]/55"
                )}
            >
                {label}
            </span>
            {children}
            {error && <span className="block mt-1 text-xs font-medium text-red-500">{error}</span>}
        </label>
    );
}

function inputCls(isDark: boolean) {
    return cn(
        "w-full px-4 py-3 rounded-xl text-sm font-medium tracking-tight outline-none transition-colors",
        "focus:ring-2 focus:ring-golden/40",
        isDark
            ? "bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-golden/50"
            : "bg-white border border-gray-200 text-[#0A192F] placeholder:text-[#0A192F]/30 focus:border-[#0A192F]/40"
    );
}
