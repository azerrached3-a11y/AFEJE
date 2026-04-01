import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFEJE — Association Française d'Encadrement des Jeunes Entrepreneurs",
  description:
    "L'AFEJE accompagne les jeunes entrepreneurs issus de quartiers difficiles vers l'autonomie économique. Savoir. Réseau. Infrastructure. Neurosciences appliquées.",
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
      </body>
    </html>
  );
}
