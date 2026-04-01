import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "AFEJE — Association jeunes entrepreneurs Chaville, Viroflay, Paris (92)",
  description:
    "L'AFEJE, basée à Chaville (92370), accompagne gratuitement les jeunes entrepreneurs dès 15 ans en Île-de-France. Programme de 12 mois : neurosciences, réseau, mentorat. Viroflay, Paris, Hauts-de-Seine.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AFEJE — Jeunes entrepreneurs à Chaville & Viroflay (92)",
    description:
      "Programme gratuit de 12 mois pour jeunes entrepreneurs dès 15 ans. Basé à Chaville (92370), Hauts-de-Seine. Neurosciences, réseau, infrastructure.",
    type: "website",
    locale: "fr_FR",
    siteName: "AFEJE",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFEJE — Jeunes entrepreneurs Chaville (92)",
    description:
      "Association gratuite pour jeunes entrepreneurs en Île-de-France. 12 mois de formation et mentorat à Chaville.",
  },
};

export default function Home() {
  return <HomeContent />;
}
