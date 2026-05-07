import { NextResponse } from "next/server";

export type LeadPayload = {
    vertical: string;
    name: string;
    email: string;
    whatsapp: string;
    billRange: string;
    pincode: string;
    submittedAt: string;
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Partial<LeadPayload>;

        if (!body.name || !body.email || !body.whatsapp || !body.pincode) {
            return NextResponse.json(
                { ok: false, error: "Missing required fields." },
                { status: 400 }
            );
        }

        const lead: LeadPayload = {
            vertical: body.vertical ?? "solar-parks",
            name: body.name,
            email: body.email,
            whatsapp: body.whatsapp,
            billRange: body.billRange ?? "",
            pincode: body.pincode,
            submittedAt: new Date().toISOString(),
        };

        // TODO: wire to email (Resend/SendGrid) or CRM (HubSpot/Zoho) here.
        console.log("[lead]", lead);

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json(
            { ok: false, error: "Invalid request." },
            { status: 400 }
        );
    }
}
