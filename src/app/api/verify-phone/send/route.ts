import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

async function sendTwilioSms(to: string, body: string) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;

  if (!sid || !token || !from) {
    throw new Error(`Missing Twilio env vars: SID=${!!sid} TOKEN=${!!token} FROM=${!!from}`);
  }

  const res = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(`${sid}:${token}`),
      },
      body: new URLSearchParams({ To: to, From: from, Body: body }).toString(),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Twilio API ${res.status}: ${err}`);
  }

  return res.json();
}

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

    const { error: insertErr } = await supabaseAdmin.from("phone_verifications").insert({
      phone: intlPhone,
      code,
      expires_at: expiresAt,
    });

    if (insertErr) {
      console.error("OTP insert error:", insertErr);
      return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
    }

    await sendTwilioSms(intlPhone, `AFEJE — Ton code de vérification : ${code}`);

    return NextResponse.json({ success: true, phone: intlPhone });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Phone verify send error:", message);
    return NextResponse.json({ error: "Erreur d'envoi SMS.", detail: message }, { status: 500 });
  }
}
