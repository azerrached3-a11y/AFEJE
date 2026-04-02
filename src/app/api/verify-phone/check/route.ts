import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { phone, code } = await request.json();

    if (!phone || !code) {
      return NextResponse.json({ error: "Numéro et code requis." }, { status: 400 });
    }

    // Find the latest non-expired, non-verified code for this phone
    const { data: record } = await supabaseAdmin
      .from("phone_verifications")
      .select("id, code, expires_at")
      .eq("phone", phone)
      .eq("verified", false)
      .gt("expires_at", new Date().toISOString())
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (!record) {
      return NextResponse.json({ error: "Code expiré ou introuvable. Renvoie un nouveau code." }, { status: 400 });
    }

    if (record.code !== code) {
      return NextResponse.json({ error: "Code incorrect." }, { status: 400 });
    }

    // Mark as verified
    await supabaseAdmin
      .from("phone_verifications")
      .update({ verified: true })
      .eq("id", record.id);

    return NextResponse.json({ success: true, verified: true });
  } catch (err) {
    console.error("Phone verify error:", err);
    return NextResponse.json({ error: "Erreur de vérification." }, { status: 500 });
  }
}
