import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-24 sm:py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[#00FFFF]/20 to-transparent" />
          <div className="absolute bottom-20 right-10 w-px h-60 bg-gradient-to-b from-transparent via-[#00FFFF]/20 to-transparent" />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-[#00FFFF]/5 rotate-45 hidden sm:block" />
          <div className="absolute bottom-1/4 left-[20%] w-20 h-20 border border-white/5 rotate-12 hidden sm:block" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00FFFF]/[0.02] blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in-up">
            <Logo size={90} animate interactive />
          </div>

          <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-5 sm:mb-6 animate-fade-in-up font-mono">
            Association Française d&apos;Encadrement des Jeunes Entrepreneurs
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-5 sm:mb-7 animate-fade-in-up">
            LE CODE DE LA
            <br />
            <span className="text-[#00FFFF]">FRATERNITÉ.</span>
          </h1>

          <div className="w-0 h-px bg-[#00FFFF]/40 mx-auto mb-5 sm:mb-7 animate-line-grow" />

          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 sm:mb-6 animate-fade-in-up-delay leading-relaxed italic px-2">
            &ldquo;On vient du même endroit. On a décidé de montrer autre chose.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-white/30 mb-8 sm:mb-10 animate-fade-in-up-delay font-mono">
            Dès 15 ans · Gratuit · Partout en France
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up-delay-2 px-2">
            <Link
              href="/rejoindre"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 text-center btn-primary"
            >
              Je veux rejoindre →
            </Link>
            <Link
              href="/programme"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 border border-white/20 text-white/70 font-medium text-sm tracking-widest uppercase hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300 text-center"
            >
              Découvrir le programme
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00FFFF]">15+</p>
            <p className="text-xs sm:text-sm text-white/40 mt-2 tracking-wider uppercase">
              Ans — Ouvert à tous
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00FFFF]">6</p>
            <p className="text-xs sm:text-sm text-white/40 mt-2 tracking-wider uppercase">
              Modules neurosciences
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00FFFF]">12</p>
            <p className="text-xs sm:text-sm text-white/40 mt-2 tracking-wider uppercase">
              Mois de transformation
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00FFFF]">0€</p>
            <p className="text-xs sm:text-sm text-white/40 mt-2 tracking-wider uppercase">
              Gratuit, sans condition
            </p>
          </div>
        </div>
      </section>

      {/* Pillars preview */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4 sm:mb-6 text-center">
            LES TROIS <span className="text-[#00FFFF]">PILIERS</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base text-center max-w-xl mx-auto mb-12 sm:mb-16">
            Chaque pilier est un levier concret vers ton autonomie. Pas de théorie creuse — des outils pour construire.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "SAVOIR",
                desc: "Neurosciences appliquées, intelligence émotionnelle, gestion financière, stratégie. Ton cerveau est ton premier outil — on t'apprend à l'utiliser à pleine puissance.",
                link: "/programme",
                cta: "Voir le programme →",
              },
              {
                num: "02",
                title: "RÉSEAU",
                desc: "Un cercle de frères qui se soutiennent, se challengent et s'élèvent mutuellement. Mentors, partenaires, opportunités — la force du collectif au service de chacun.",
                link: "/mission",
                cta: "Comprendre la mission →",
              },
              {
                num: "03",
                title: "INFRASTRUCTURE",
                desc: "AZZ&CO LABS pour le business, OpenCloud Tech pour la tech. Des structures réelles pour passer de l'idée au projet, du projet à l'entreprise.",
                link: "/impact",
                cta: "Voir l'impact →",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="border border-white/10 p-6 sm:p-8 hover:border-[#00FFFF]/30 transition-all duration-500 group card-hover flex flex-col"
              >
                <span className="text-[#00FFFF]/20 text-3xl font-black mb-3 group-hover:text-[#00FFFF]/40 transition-colors">
                  {pillar.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold tracking-widest mb-4 group-hover:text-[#00FFFF] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">
                  {pillar.desc}
                </p>
                <Link
                  href={pillar.link}
                  className="text-[#00FFFF]/60 text-xs tracking-wider uppercase hover:text-[#00FFFF] transition-colors"
                >
                  {pillar.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neuroscience teaser */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#00FFFF]/60 mb-4 font-mono">
                Ce qui nous rend différents
              </p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">
                FONDÉ SUR LES <span className="text-[#00FFFF]">NEUROSCIENCES</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-4 text-sm sm:text-base">
                Les vrais blocages ne sont pas dans le business plan — ils sont dans la tête.
                Notre programme s&apos;appuie sur les neurosciences cognitives pour reprogrammer
                les schémas de pensée limitants et activer les circuits de la performance.
              </p>
              <p className="text-white/40 leading-relaxed text-sm mb-6">
                Neuroplasticité, gestion du stress, intelligence émotionnelle, prise de décision
                sous pression — chaque module transforme la façon dont tu penses, agis et construis.
              </p>
              <Link
                href="/programme"
                className="inline-flex items-center gap-2 text-[#00FFFF] text-sm font-bold tracking-wider uppercase hover:gap-3 transition-all duration-300"
              >
                Découvrir les 6 modules
                <span>→</span>
              </Link>
            </div>
            <div className="flex justify-center">
              <Logo size={200} animate className="opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-center">
            C&apos;EST POUR <span className="text-[#00FFFF]">TOI</span> SI...
          </h2>
          <p className="text-white/40 text-sm text-center max-w-md mx-auto mb-10 sm:mb-14">
            Tu n&apos;as pas besoin d&apos;un diplôme. Tu as besoin d&apos;une décision.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {[
              "Tu as 15 ans ou plus et tu veux entreprendre",
              "Tu as une idée mais pas de réseau pour la concrétiser",
              "Tu viens d'un quartier et tu veux prouver que c'est possible",
              "Tu veux reprogrammer ta façon de penser et d'agir",
              "Tu cherches un cadre fraternel, exigeant et bienveillant",
              "Tu es prêt à t'engager sur 12 mois de transformation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border border-white/10 px-4 sm:px-5 py-3 sm:py-4 hover:border-[#00FFFF]/20 transition-colors card-hover"
              >
                <span className="w-1.5 h-1.5 bg-[#00FFFF] shrink-0 mt-1.5 rounded-full" />
                <p className="text-white/70 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — conversion optimized */}
      <section className="border-t border-white/5 bg-[#00FFFF]/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#00FFFF]/[0.03] blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black tracking-tight mb-4">
            PRÊT À ÉCRIRE <span className="text-[#00FFFF]">TON HISTOIRE</span> ?
          </h2>
          <p className="text-white/50 mb-3 max-w-lg mx-auto text-sm sm:text-base">
            L&apos;AFEJE n&apos;est pas un programme. C&apos;est un engagement. Une fraternité.
            Un choix de vie qui commence maintenant.
          </p>
          <p className="text-white/30 text-xs mb-8 sm:mb-10">
            Places limitées · Candidature en 2 minutes · 100% gratuit
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/rejoindre"
              className="w-full sm:w-auto px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary"
            >
              Candidater maintenant →
            </Link>
            <Link
              href="/code"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white/60 font-medium text-sm tracking-widest uppercase hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300 text-center"
            >
              Lire le Code
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
