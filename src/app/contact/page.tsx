import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — AFEJE",
  description: "Contactez l'AFEJE — Association Française d'Encadrement des Jeunes Entrepreneurs. Questions, partenariats, presse.",
};

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
            PARLONS
            <br />
            <span className="text-[#00FFFF]">ENSEMBLE.</span>
          </h1>
          <div className="w-20 h-px bg-[#00FFFF]/40 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed mb-3">
            Question, proposition de partenariat, demande presse ou simplement
            envie d&apos;en savoir plus ? On répond rapidement.
          </p>
          <p className="text-white/30 text-sm">
            Réponse sous 48h · Partenariats bienvenus · Presse & médias
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Main contact */}
            <div className="space-y-10">
              <div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#00FFFF]/70 mb-4">
                  Président
                </h2>
                <p className="text-2xl font-bold">Rached Azer</p>
                <p className="text-white/40 text-sm mt-1">
                  Fondateur de l&apos;AFEJE, AZZ&CO LABS SAS & OpenCloud Tech
                </p>
              </div>

              <div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#00FFFF]/70 mb-4">
                  Email
                </h2>
                <a
                  href="mailto:rached.azer@azzcolabs.business"
                  className="text-lg sm:text-xl text-white hover:text-[#00FFFF] transition-colors break-all"
                >
                  rached.azer@azzcolabs.business
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:rached.azer@azzcolabs.business?subject=Contact AFEJE"
                  className="px-6 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 text-center btn-primary"
                >
                  Envoyer un email →
                </a>
                <Link
                  href="/rejoindre"
                  className="px-6 py-4 border border-white/20 text-white/60 font-medium text-sm tracking-widest uppercase hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300 text-center"
                >
                  Candidater
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <div className="border border-white/10 p-6 sm:p-8 space-y-6 card-hover">
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#00FFFF]/70 mb-6">
                  Informations légales
                </h2>

                <div>
                  <p className="text-xs text-white/30 tracking-wider uppercase mb-1">
                    Dénomination
                  </p>
                  <p className="text-white/80">
                    Association Française d&apos;Encadrement des Jeunes Entrepreneurs
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/30 tracking-wider uppercase mb-1">
                    Sigle
                  </p>
                  <p className="text-white/80">AFEJE</p>
                </div>

                <div>
                  <p className="text-xs text-white/30 tracking-wider uppercase mb-1">
                    Numéro d&apos;association
                  </p>
                  <p className="text-white/80 font-mono">W923012377</p>
                </div>

                <div>
                  <p className="text-xs text-white/30 tracking-wider uppercase mb-1">
                    Préfecture
                  </p>
                  <p className="text-white/80">Hauts-de-Seine</p>
                </div>

                <div>
                  <p className="text-xs text-white/30 tracking-wider uppercase mb-1">
                    Statut juridique
                  </p>
                  <p className="text-white/80">Association loi 1901</p>
                </div>

                <div>
                  <p className="text-xs text-white/30 tracking-wider uppercase mb-1">
                    Écosystème
                  </p>
                  <p className="text-white/80">
                    AZZ&CO LABS SAS &middot; OpenCloud Tech
                  </p>
                </div>
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
            TU VEUX <span className="text-[#00FFFF]">NOUS REJOINDRE</span> ?
          </h2>
          <p className="text-white/50 mb-3 max-w-lg mx-auto text-sm sm:text-base">
            La candidature se fait en 2 minutes. Pas de CV, pas de diplôme requis
            — juste de la motivation et de l&apos;honnêteté.
          </p>
          <p className="text-white/30 text-xs mb-8 sm:mb-10">
            Dès 15 ans · 100% gratuit · Réponse rapide
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
