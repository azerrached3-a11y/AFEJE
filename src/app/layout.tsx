import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://afeje.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AFEJE — Association jeunes entrepreneurs à Chaville, Hauts-de-Seine (92)",
    template: "%s | AFEJE — Chaville (92)",
  },
  description:
    "L'AFEJE, basée à Chaville (92370), accompagne gratuitement les jeunes entrepreneurs dès 15 ans en Île-de-France. Programme de 12 mois : neurosciences, réseau, mentorat. Hauts-de-Seine, Viroflay, Paris.",
  keywords: [
    "AFEJE",
    "association jeunes entrepreneurs",
    "Chaville",
    "92370",
    "Hauts-de-Seine",
    "92",
    "Viroflay",
    "Paris",
    "Île-de-France",
    "IDF",
    "entrepreneuriat jeunes",
    "accompagnement entrepreneurs",
    "association loi 1901",
    "neurosciences entrepreneuriat",
    "mentorat jeunes",
    "formation gratuite entrepreneurs",
    "quartiers prioritaires",
    "92000",
    "Nanterre",
    "Boulogne-Billancourt",
  ],
  authors: [{ name: "AFEJE — Rached Azer" }],
  creator: "AFEJE",
  publisher: "AFEJE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "AFEJE",
    title: "AFEJE — Association jeunes entrepreneurs à Chaville (92)",
    description:
      "Programme gratuit de 12 mois pour jeunes entrepreneurs dès 15 ans. Basé à Chaville, Hauts-de-Seine. Neurosciences, réseau, infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFEJE — Jeunes entrepreneurs à Chaville (92)",
    description:
      "Association gratuite pour jeunes entrepreneurs en Île-de-France. 12 mois de formation et mentorat.",
  },
  verification: {},
  category: "association",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": `${SITE_URL}/#organization`,
      name: "AFEJE — Association Française d'Encadrement des Jeunes Entrepreneurs",
      alternateName: "AFEJE",
      url: SITE_URL,
      logo: `${SITE_URL}/afeje-logo.svg`,
      description:
        "Association loi 1901 basée à Chaville (92370) qui accompagne gratuitement les jeunes entrepreneurs dès 15 ans en Île-de-France avec un programme de 12 mois fondé sur les neurosciences.",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Rached Azer",
        jobTitle: "Président",
        email: "rached.azer@azzcolabs.business",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chaville",
        postalCode: "92370",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Chaville",
          containedInPlace: { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
        },
        {
          "@type": "City",
          name: "Viroflay",
        },
        {
          "@type": "City",
          name: "Paris",
        },
        {
          "@type": "AdministrativeArea",
          name: "Hauts-de-Seine (92)",
        },
        {
          "@type": "AdministrativeArea",
          name: "Île-de-France",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "rached.azer@azzcolabs.business",
        contactType: "customer service",
        availableLanguage: "French",
      },
      sameAs: [],
      keywords:
        "association jeunes entrepreneurs, Chaville, 92370, Hauts-de-Seine, Viroflay, Paris, Île-de-France, accompagnement entrepreneurial, neurosciences, mentorat gratuit, formation jeunes",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AFEJE",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "fr-FR",
    },
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#school`,
      name: "Programme AFEJE",
      description:
        "Programme pédagogique gratuit de 12 mois pour jeunes entrepreneurs. 6 modules fondés sur les neurosciences cognitives. Basé à Chaville (92370), ouvert en Île-de-France.",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chaville",
        postalCode: "92370",
        addressRegion: "Île-de-France",
        addressCountry: "FR",
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 48.8076,
          longitude: 2.1894,
        },
        geoRadius: "30000",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00FFFF] focus:text-black focus:font-bold focus:text-sm"
        >
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-16">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
