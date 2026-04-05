import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Contact — AFEJE à Chaville (92370), Hauts-de-Seine",
  description:
    "Contactez l'AFEJE à Chaville (92370). Questions, partenariats, presse. Association jeunes entrepreneurs en Île-de-France, Viroflay, Paris.",
  alternates: { canonical: "/contact" },
};

function SocialIcon({ platform }: { platform: string }) {
  const size = 22;
  switch (platform) {
    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.81a4.84 4.84 0 0 1-1-.12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "x":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "youtube":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

const socials = [
  {
    name: "Instagram",
    platform: "instagram",
    handle: "@_afeje_",
    href: "https://www.instagram.com/_afeje_/",
    color: "hover:text-pink-400 hover:border-pink-400/30",
  },
  {
    name: "TikTok",
    platform: "tiktok",
    handle: "@afeje_iledefrance",
    href: "https://www.tiktok.com/@afeje_iledefrance",
    color: "hover:text-white hover:border-white/30",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-36">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-4 sm:mb-6 font-mono">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 sm:mb-8">
            RESTONS
            <br />
            <span className="text-[#00FFFF]">CONNECTÉS.</span>
          </h1>
          <div className="w-20 h-px bg-[#00FFFF]/40 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed">
            Un DM, un email, un commentaire — peu importe le canal.
            On est là, on répond, et on est toujours contents d&apos;échanger.
          </p>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-3">
            Retrouve-nous <span className="text-[#00FFFF]">partout</span>
          </h2>
          <p className="text-white/40 text-sm mb-10 sm:mb-12">
            Suis l&apos;aventure AFEJE au quotidien. Coulisses, témoignages, contenus.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} — ${social.handle}`}
                className={`group flex items-center gap-4 border border-white/10 p-5 sm:p-6 transition-all duration-300 card-hover ${social.color}`}
              >
                <div className="w-12 h-12 border border-white/15 flex items-center justify-center shrink-0 group-hover:border-current transition-colors duration-300 text-white/50 group-hover:text-current">
                  <SocialIcon platform={social.platform} />
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base text-white/80 group-hover:text-current transition-colors">
                    {social.name}
                  </p>
                  <p className="text-xs text-white/30 mt-0.5 group-hover:text-white/50 transition-colors">
                    {social.handle}
                  </p>
                </div>
                <span className="ml-auto text-white/10 group-hover:text-current group-hover:translate-x-1 transition-all duration-300 text-lg">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Direct contact + Legal side by side */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Direct contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-6">
                  Écrire <span className="text-[#00FFFF]">directement</span>
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Question, partenariat, presse, ou juste un mot sympa —
                  c&apos;est Rached qui lit et qui répond. Sous 48h max.
                </p>
              </div>

              <div className="border border-white/10 p-5 sm:p-6 card-hover">
                <div className="flex items-center gap-4 mb-4">
                  <Logo size={36} interactive />
                  <div>
                    <p className="font-bold text-white/90">Rached Azer</p>
                    <p className="text-xs text-white/30">Fondateur & Président</p>
                  </div>
                </div>
                <a
                  href="mailto:azer.rached@afeje.com"
                  className="text-[#00FFFF] hover:text-white transition-colors text-sm sm:text-base break-all"
                >
                  azer.rached@afeje.com
                </a>
              </div>

              <a
                href="mailto:azer.rached@afeje.com?subject=Contact AFEJE"
                className="inline-block px-6 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary"
              >
                Envoyer un email →
              </a>
            </div>

            {/* Legal */}
            <div>
              <div className="border border-white/10 p-6 sm:p-8 space-y-6 card-hover">
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#00FFFF]/70 mb-6">
                  Informations légales
                </h2>

                {[
                  { label: "Dénomination", value: "Association Française d'Encadrement des Jeunes Entrepreneurs" },
                  { label: "Sigle", value: "AFEJE" },
                  { label: "N° association", value: "W923012377", mono: true },
                  { label: "Siège", value: "Chaville (92370), Hauts-de-Seine" },
                  { label: "Préfecture", value: "Hauts-de-Seine — Île-de-France" },
                  { label: "Zone d'action", value: "Chaville · Viroflay · Paris · Hauts-de-Seine · IDF" },
                  { label: "Statut", value: "Association loi 1901" },
                  { label: "Écosystème", value: "AZZ&CO LABS SAS · OpenCloud Tech" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs text-white/30 tracking-wider uppercase mb-1">
                      {item.label}
                    </p>
                    <p className={`text-white/80 ${item.mono ? "font-mono" : ""}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#00FFFF]/5 px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#00FFFF]/[0.03] blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-4">
            Envie de <span className="text-[#00FFFF]">nous rejoindre</span> ?
          </h2>
          <p className="text-white/50 mb-8 sm:mb-10 max-w-lg mx-auto text-sm sm:text-base">
            Pas besoin de CV ni de diplôme. 2 minutes pour candidater,
            et c&apos;est gratuit. On attend juste ta motivation.
          </p>
          <Link
            href="/rejoindre"
            className="inline-block px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary"
          >
            Candidater maintenant →
          </Link>
        </div>
      </section>
    </div>
  );
}
