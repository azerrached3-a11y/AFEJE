import type { Metadata } from "next";
import DiagnosticTest from "@/components/DiagnosticTest";

export const metadata: Metadata = {
  title: "Profil Cognitif — Diagnostic AFEJE",
  description:
    "Découvre ton profil cognitif entrepreneurial en 10 scénarios. Lucidité, résilience, contrôle, métacognition, vision systémique. Gratuit, sans inscription.",
  alternates: { canonical: "/diagnostic/profil-cognitif" },
  openGraph: {
    title: "Diagnostic Cognitif — AFEJE",
    description:
      "10 scénarios pour cartographier ton cerveau entrepreneurial. Aucune bonne réponse — juste la vérité sur comment tu penses.",
    type: "website",
    locale: "fr_FR",
    siteName: "AFEJE",
  },
};

export default function ProfilCognitifPage() {
  return <DiagnosticTest />;
}
