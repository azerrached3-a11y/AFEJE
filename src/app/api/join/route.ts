import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, age, city, situation, motivation } = body;

    if (!name || !age || !city || !situation || !motivation) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // Log the application (in production, send email or store in database)
    console.log("=== NOUVELLE CANDIDATURE AFEJE ===");
    console.log(`Nom: ${name}`);
    console.log(`Âge: ${age}`);
    console.log(`Ville: ${city}`);
    console.log(`Situation: ${situation}`);
    console.log(`Motivation: ${motivation}`);
    console.log(`Destinataire: rached.azer@azzcolabs.business`);
    console.log("================================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
