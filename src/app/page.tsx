import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "AFEJE — On construit ensemble",
  description:
    "L'AFEJE accompagne les jeunes entrepreneurs dès 15 ans avec un programme gratuit de 12 mois : neurosciences, réseau, infrastructure. Rejoins-nous.",
  openGraph: {
    title: "AFEJE — On construit ensemble",
    description:
      "Association gratuite pour jeunes entrepreneurs. 12 mois de formation, mentorat et réseau. Dès 15 ans, partout en France.",
    type: "website",
    locale: "fr_FR",
    siteName: "AFEJE",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFEJE — On construit ensemble",
    description:
      "Association gratuite pour jeunes entrepreneurs. 12 mois de formation, mentorat et réseau.",
  },
};

export default function Home() {
  return <HomeContent />;
}
