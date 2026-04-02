import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, age, city, situation, motivation } = body;

    if (!name || !age || !city || !situation || !motivation) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from("applications")
      .insert({ name, email: email || null, age: Number(age), city, situation, motivation });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Erreur lors de l'enregistrement." },
        { status: 500 }
      );
    }

    // Notify admin
    const adminMsg = {
      to: "rached.azer@azzcolabs.business",
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `Nouvelle candidature AFEJE — ${name}`,
      text: `Nouvelle candidature reçue:\n\nNom: ${name}\nEmail: ${email || "Non renseigné"}\nÂge: ${age}\nVille: ${city}\nSituation: ${situation}\nMotivation: ${motivation}`,
    };

    // Welcome email to applicant (only if they provided email)
    if (email) {
      const welcomeMsg = {
        to: email,
        from: process.env.SENDGRID_FROM_EMAIL!,
        subject: "Bienvenue chez AFEJE — On a bien reçu ta candidature",
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
            <div style="background: #000; padding: 32px; text-align: center;">
              <h1 style="color: #00FFFF; font-size: 28px; margin: 0; letter-spacing: 4px;">AFEJE</h1>
              <p style="color: rgba(255,255,255,0.5); font-size: 11px; margin-top: 8px; letter-spacing: 2px;">ASSOCIATION FRANÇAISE D'ENCADREMENT DES JEUNES ENTREPRENEURS</p>
            </div>
            <div style="padding: 32px 24px;">
              <h2 style="font-size: 20px; margin: 0 0 16px;">Salut ${name.split(" ")[0]} 👋</h2>
              <p style="line-height: 1.7; color: #444;">
                On a bien reçu ta candidature. L'équipe la lit et on te recontacte rapidement.
              </p>
              <p style="line-height: 1.7; color: #444;">
                En attendant, n'hésite pas à découvrir notre <a href="https://afeje.fr/programme" style="color: #0891b2;">programme de 12 mois</a>
                ou à lire notre <a href="https://afeje.fr/code" style="color: #0891b2;">Code</a>.
              </p>
              <div style="margin-top: 24px; padding: 16px; background: #f0fdfa; border-left: 3px solid #00FFFF;">
                <p style="margin: 0; font-size: 14px; color: #555;">
                  <strong>Rappel :</strong> Le programme AFEJE est 100% gratuit, dure 12 mois, et est ouvert dès 15 ans.
                </p>
              </div>
              <p style="margin-top: 32px; color: #888; font-size: 13px;">
                À très vite,<br/>
                <strong>L'équipe AFEJE</strong><br/>
                Chaville (92) — Île-de-France
              </p>
            </div>
          </div>
        `,
      };
      await sgMail.send(welcomeMsg).catch((err) => console.error("Welcome email error:", err));
    }

    await sgMail.send(adminMsg).catch((err) => console.error("Admin email error:", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Join API error:", err);
    return NextResponse.json(
      { error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
