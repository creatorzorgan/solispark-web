import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

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
    let body: Partial<LeadPayload>;

    try {
        body = (await request.json()) as Partial<LeadPayload>;
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
    }

    if (!body.name || !body.email) {
        return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
    }

    const lead: LeadPayload = {
        vertical: body.vertical ?? "solar-parks",
        name: body.name,
        email: body.email,
        whatsapp: body.whatsapp ?? "",
        billRange: body.billRange ?? "",
        pincode: body.pincode ?? "",
        submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    console.log("[lead]", lead);

    // ── 1. GOOGLE SHEETS ────────────────────────────────────────────────────────
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: "Sheet1!A:F",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[
                    lead.submittedAt,
                    lead.name,
                    lead.email,
                    lead.whatsapp,
                    lead.billRange,
                    lead.pincode,
                ]],
            },
        });
    } catch (err) {
        console.error("[Sheets] Failed:", err);
    }

    // ── 2. EMAIL NOTIFICATION ────────────────────────────────────────────────────
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST ?? "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT ?? 587),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Solispark Leads" <${process.env.SMTP_USER}>`,
            to: process.env.NOTIFY_EMAIL ?? process.env.SMTP_USER,
            subject: `⚡ New Lead: ${lead.name}`,
            html: `
                <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
                    <div style="background:#0A192F;padding:24px 32px;">
                        <h1 style="color:#FBBF24;margin:0;font-size:22px;letter-spacing:-0.5px;">⚡ New Consultation Lead</h1>
                        <p style="color:#ffffff80;margin:6px 0 0;font-size:13px;">Solispark Energy — Lead Notification</p>
                    </div>
                    <div style="padding:32px;background:#FAF9F6;">
                        <table style="width:100%;border-collapse:collapse;font-size:15px;">
                            <tr>
                                <td style="padding:10px 0;color:#6b7280;font-weight:600;width:40%;">Date &amp; Time</td>
                                <td style="padding:10px 0;color:#0A192F;font-weight:700;">${lead.submittedAt}</td>
                            </tr>
                            <tr style="border-top:1px solid #e5e7eb;">
                                <td style="padding:10px 0;color:#6b7280;font-weight:600;">Full Name</td>
                                <td style="padding:10px 0;color:#0A192F;font-weight:700;">${lead.name}</td>
                            </tr>
                            <tr style="border-top:1px solid #e5e7eb;">
                                <td style="padding:10px 0;color:#6b7280;font-weight:600;">Email</td>
                                <td style="padding:10px 0;color:#0A192F;font-weight:700;">${lead.email}</td>
                            </tr>
                            <tr style="border-top:1px solid #e5e7eb;">
                                <td style="padding:10px 0;color:#6b7280;font-weight:600;">WhatsApp</td>
                                <td style="padding:10px 0;color:#0A192F;font-weight:700;">${lead.whatsapp || "—"}</td>
                            </tr>
                            <tr style="border-top:1px solid #e5e7eb;">
                                <td style="padding:10px 0;color:#6b7280;font-weight:600;">Monthly Bill</td>
                                <td style="padding:10px 0;color:#0A192F;font-weight:700;">${lead.billRange || "—"}</td>
                            </tr>
                            <tr style="border-top:1px solid #e5e7eb;">
                                <td style="padding:10px 0;color:#6b7280;font-weight:600;">PIN Code</td>
                                <td style="padding:10px 0;color:#0A192F;font-weight:700;">${lead.pincode || "—"}</td>
                            </tr>
                            <tr style="border-top:1px solid #e5e7eb;">
                                <td style="padding:10px 0;color:#6b7280;font-weight:600;">Project Type</td>
                                <td style="padding:10px 0;color:#0A192F;font-weight:700;">${lead.vertical}</td>
                            </tr>
                        </table>
                    </div>
                    <div style="background:#0A192F;padding:16px 32px;text-align:center;">
                        <p style="color:#ffffff40;font-size:11px;margin:0;">Solispark Energy Pvt Ltd · Bengaluru, India</p>
                    </div>
                </div>
            `,
        });
    } catch (err) {
        console.error("[Email] Failed:", err);
    }

    // ── 3. WHATSAPP (Meta Cloud API — non-critical) ──────────────────────────────
    try {
        const waRes = await fetch(
            `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messaging_product: "whatsapp",
                    to: process.env.WHATSAPP_RECIPIENT_NUMBER,
                    type: "template",
                    template: {
                        name: process.env.WHATSAPP_TEMPLATE_NAME ?? "new_lead_notification",
                        language: { code: "en" },
                        components: [
                            {
                                type: "body",
                                parameters: [
                                    { type: "text", text: lead.name },
                                    { type: "text", text: lead.email },
                                    { type: "text", text: lead.whatsapp || "N/A" },
                                    { type: "text", text: lead.billRange || "N/A" },
                                    { type: "text", text: lead.pincode || "N/A" },
                                ],
                            },
                        ],
                    },
                }),
            }
        );

        const waJson = await waRes.json();
        console.log("[WhatsApp] Response:", JSON.stringify(waJson, null, 2));
    } catch (err) {
        console.error("[WhatsApp] Failed (non-critical):", err);
    }

    return NextResponse.json({ ok: true });
}
