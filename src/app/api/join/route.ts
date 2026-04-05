import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import sgMail from "@sendgrid/mail";

let _sgReady = false;
function getSg() {
  if (!_sgReady) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    _sgReady = true;
  }
  return sgMail;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name, email, phone, phone_verified, age, city, linkedin, education, situation, skills,
      has_project, project_description, project_stage, target_audience,
      revenue_model, motivation, expectations, availability, heard_from,
    } = body;

    if (!name || !email || !age || !city || !education || !situation || !motivation || !availability) {
      return NextResponse.json(
        { error: "Certains champs obligatoires sont manquants." },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error: dbError } = await supabaseAdmin
      .from("applications")
      .insert({
        name,
        email,
        phone: phone || null,
        phone_verified: phone_verified || false,
        age: Number(age),
        city,
        linkedin: linkedin || null,
        education,
        situation,
        skills: skills || null,
        has_project: has_project || false,
        project_description: project_description || null,
        project_stage: project_stage || null,
        target_audience: target_audience || null,
        revenue_model: revenue_model || null,
        motivation,
        expectations: expectations || null,
        availability,
        heard_from: heard_from || null,
      });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Erreur lors de l'enregistrement." },
        { status: 500 }
      );
    }

    // Notify admin
    const adminMsg = {
      to: "azer.rached@afeje.com",
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `Nouvelle candidature AFEJE — ${name}`,
      text: [
        `=== NOUVELLE CANDIDATURE AFEJE ===`,
        ``,
        `— IDENTITÉ —`,
        `Nom: ${name}`,
        `Email: ${email}`,
        `Téléphone: ${phone || "—"}`,
        `Âge: ${age}`,
        `Ville: ${city}`,
        `LinkedIn: ${linkedin || "—"}`,
        ``,
        `— PARCOURS —`,
        `Formation: ${education}`,
        `Situation: ${situation}`,
        `Compétences: ${skills || "—"}`,
        ``,
        `— PROJET —`,
        `A un projet: ${has_project ? "Oui" : "Non"}`,
        `Description: ${project_description || "—"}`,
        `Stade: ${project_stage || "—"}`,
        `Cible: ${target_audience || "—"}`,
        `Modèle éco: ${revenue_model || "—"}`,
        ``,
        `— MOTIVATION —`,
        `Motivation: ${motivation}`,
        `Attentes: ${expectations || "—"}`,
        `Disponibilité: ${availability}`,
        `Source: ${heard_from || "—"}`,
      ].join("\n"),
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
                En attendant, n'hésite pas à découvrir notre <a href="https://afeje.com/programme" style="color: #0891b2;">programme de 12 mois</a>
                ou à lire notre <a href="https://afeje.com/code" style="color: #0891b2;">Code</a>.
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
      await getSg().send(welcomeMsg).catch((err) => console.error("Welcome email error:", err));
    }

    await getSg().send(adminMsg).catch((err) => console.error("Admin email error:", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Join API error:", err);
    return NextResponse.json(
      { error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
