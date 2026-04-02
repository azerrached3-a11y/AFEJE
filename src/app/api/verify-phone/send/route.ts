import { NextResponse } from "next/server";
import twilio from "twilio";
import { supabaseAdmin } from "@/lib/supabase";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json({ error: "Numéro requis." }, { status: 400 });
    }

    // Clean phone number
    const cleaned = phone.replace(/\s/g, "");
    if (!/^\+?\d{10,15}$/.test(cleaned)) {
      return NextResponse.json({ error: "Numéro invalide." }, { status: 400 });
    }

    // Format to international if French local number
    const intlPhone = cleaned.startsWith("0")
      ? "+33" + cleaned.slice(1)
      : cleaned.startsWith("+")
        ? cleaned
        : "+" + cleaned;

    // Rate limit: 1 OTP per phone per 60 seconds
    const { data: recent } = await supabaseAdmin
      .from("phone_verifications")
      .select("created_at")
      .eq("phone", intlPhone)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (recent && Date.now() - new Date(recent.created_at).getTime() < 60000) {
      return NextResponse.json(
        { error: "Attends 60 secondes avant de renvoyer un code." },
        { status: 429 }
      );
    }

    // Generate 6-digit OTP
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString(); // 5 min

    await supabaseAdmin.from("phone_verifications").insert({
      phone: intlPhone,
      code,
      expires_at: expiresAt,
    });

    await client.messages.create({
      body: `AFEJE — Ton code de vérification : ${code}`,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: intlPhone,
    });

    return NextResponse.json({ success: true, phone: intlPhone });
  } catch (err) {
    console.error("Twilio send error:", err);
    return NextResponse.json({ error: "Erreur d'envoi SMS." }, { status: 500 });
  }
}
