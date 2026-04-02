import { NextResponse } from "next/server";

const TOGETHER_API_URL = "https://api.together.xyz/v1/chat/completions";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de l'AFEJE (Association Française d'Encadrement des Jeunes Entrepreneurs).

À propos de l'AFEJE :
- Association loi 1901, basée à Chaville (92370), Hauts-de-Seine, Île-de-France.
- Fondée par Rached Azer (Président).
- Programme GRATUIT de 12 mois pour jeunes entrepreneurs dès 15 ans.
- 6 modules : neurosciences cognitives, réseau professionnel, infrastructure, mentorat, financement, lancement.
- Valeurs : transparence, entraide, rigueur, diversité, éthique.
- Contact : rached.azer@azzcolabs.business
- Site web : https://afeje.com

Tu dois :
- Répondre en français, de manière amicale et directe (tutoiement).
- Aider les visiteurs à comprendre le programme, les conditions d'accès, et comment candidater.
- Être concis (3-4 phrases max par réponse).
- Rediriger vers la page /rejoindre pour candidater.
- Ne jamais inventer d'informations que tu ne connais pas sur l'association.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages requis." }, { status: 400 });
    }

    const response = await fetch(TOGETHER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Together AI error:", errText);
      return NextResponse.json({ error: "Erreur IA." }, { status: 502 });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu répondre.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
