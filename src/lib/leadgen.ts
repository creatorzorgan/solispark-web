export type Vertical =
    | "solar-parks"
    | "commercial"
    | "industrial"
    | "residential"
    | "ev-charging"
    | "apartments";

export type VerticalConfig = {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cta: string;
    successHeadline: string;
    successBody: string;
};

const VERTICAL_CONFIG: Record<Vertical, VerticalConfig> = {
    "solar-parks": {
        eyebrow: "Free Consultation",
        headline: "Get your solar estimate.",
        subheadline:
            "Backed by the SolisShield™ 30-year guarantee. No spam, no obligation.",
        cta: "Book Free Consultation",
        successHeadline: "Consultation booked.",
        successBody:
            "Our team will reach out within one business day with your custom SolisShield™ project plan.",
    },
    commercial: {
        eyebrow: "Free Consultation",
        headline: "Cut your commercial energy bill.",
        subheadline:
            "Day-one savings. SolisShield™ guaranteed. Free site assessment included.",
        cta: "Book Free Consultation",
        successHeadline: "Consultation booked.",
        successBody:
            "Our commercial team will share a custom CAPEX/OPEX savings model within 24 hours.",
    },
    industrial: {
        eyebrow: "Free Consultation",
        headline: "Power your factory floor.",
        subheadline:
            "Zero downtime install. SolisShield™ secured. Free load analysis.",
        cta: "Book Free Consultation",
        successHeadline: "Consultation booked.",
        successBody:
            "Expect a load-analysis call from our heavy engineering team within one business day.",
    },
    residential: {
        eyebrow: "Free Consultation",
        headline: "Turn your home into an asset.",
        subheadline:
            "SolisShield™ 30-year guarantee. PM Surya Ghar subsidy handled end-to-end.",
        cta: "Book Free Consultation",
        successHeadline: "Consultation booked.",
        successBody:
            "Our residential consultant will call within 24 hours to schedule your free site visit.",
    },
    "ev-charging": {
        eyebrow: "Free Consultation",
        headline: "Solar-backed EV charging.",
        subheadline:
            "Future-proof your fleet or facility. SolisShield™ secured.",
        cta: "Book Free Consultation",
        successHeadline: "Consultation booked.",
        successBody:
            "Our EV solutions team will reach out with a tailored deployment plan within 24 hours.",
    },
    apartments: {
        eyebrow: "Free Consultation",
        headline: "Power your society. Save lakhs.",
        subheadline:
            "Common-area solar for apartments and RWAs. SolisShield™ guaranteed.",
        cta: "Book Free Consultation",
        successHeadline: "Consultation booked.",
        successBody:
            "We'll coordinate with your committee within 24 hours and walk through the savings model.",
    },
};

export function getVerticalConfig(vertical: Vertical = "solar-parks"): VerticalConfig {
    return VERTICAL_CONFIG[vertical];
}

export const ALL_VERTICALS: Vertical[] = [
    "solar-parks",
    "commercial",
    "industrial",
    "residential",
    "ev-charging",
    "apartments",
];

export const BILL_RANGES = [
    { id: "lt-1500", label: "Under ₹1,500" },
    { id: "1500-2500", label: "₹1,500 – ₹2,500" },
    { id: "2500-4000", label: "₹2,500 – ₹4,000" },
    { id: "4000-8000", label: "₹4,000 – ₹8,000" },
    { id: "8000-25000", label: "₹8,000 – ₹25,000" },
    { id: "25000-1L", label: "₹25,000 – ₹1 lakh" },
    { id: "gt-1L", label: "Over ₹1 lakh" },
] as const;
