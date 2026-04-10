"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import FadeIn from "@/components/FadeIn";

export default function HomeContent() {
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
            ON CONSTRUIT
            <br />
            <span className="text-[#00FFFF]">ENSEMBLE.</span>
          </h1>

          <div className="w-0 h-px bg-[#00FFFF]/40 mx-auto mb-5 sm:mb-7 animate-line-grow" />

          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-4 sm:mb-6 animate-fade-in-up-delay leading-relaxed italic px-2">
            &ldquo;On vient du même endroit. On a décidé de construire autre chose.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-white/30 mb-8 sm:mb-10 animate-fade-in-up-delay">
            Association gratuite basée à Chaville (92) — ouverte dès 15 ans en Île-de-France.
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
          <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4 sm:mb-6 text-center">
            Trois choses qu&apos;on te <span className="text-[#00FFFF]">donne</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base text-center max-w-xl mx-auto mb-12 sm:mb-16">
            Pas de théorie creuse. Des outils concrets pour construire ta vie.
          </p>
          </FadeIn>
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
                desc: "Des gens qui se soutiennent, se challengent et s'élèvent mutuellement. Mentors, partenaires, opportunités — la force du collectif au service de chacun·e.",
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

      {/* Diagnostic teaser */}
      <section className="border-t border-white/5 bg-white/[0.01]">
        <FadeIn>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/40 mb-4 font-mono">
            Nouveau — Labo cognitif
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-6">
            TON CERVEAU{" "}
            <span className="text-[#00FFFF]">JOUE CONTRE TOI.</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
            10 scénarios. Pas de bonnes réponses. Découvre comment ton cerveau
            prend vraiment ses décisions — ses forces, ses pièges, ses angles morts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/diagnostic/profil-cognitif"
              className="w-full sm:w-auto px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary text-center"
            >
              Faire le test — 3 min →
            </Link>
            <Link
              href="/diagnostic"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white/50 font-medium text-sm tracking-widest uppercase hover:border-[#00FFFF]/40 hover:text-[#00FFFF] transition-all duration-300 text-center"
            >
              Voir tous les diagnostics
            </Link>
          </div>
        </div>
        </FadeIn>
      </section>

      {/* Mot du fondateur */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <FadeIn>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="flex items-center gap-3 mb-8">
            <Logo size={28} interactive />
            <p className="text-xs tracking-[0.2em] uppercase text-[#00FFFF]/50">
              Mot du fondateur
            </p>
          </div>
          <blockquote className="text-white/70 text-base sm:text-lg leading-relaxed space-y-5">
            <p>
              J&apos;ai grandi dans un quartier où les opportunités ne tombent pas du ciel.
              Personne ne m&apos;a tendu la main en me disant &ldquo;tiens, voilà un réseau,
              voilà un mentor, voilà les outils pour te lancer.&rdquo;
            </p>
            <p>
              J&apos;ai dû tout construire. Et en construisant, j&apos;ai compris un truc simple :
              le problème, c&apos;est rarement le talent. C&apos;est l&apos;accès. L&apos;accès au savoir,
              aux bonnes personnes, aux structures qui permettent de passer de l&apos;idée à l&apos;action.
            </p>
            <p>
              L&apos;AFEJE, c&apos;est ça. C&apos;est ce que j&apos;aurais voulu trouver à 15 ans.
              Un endroit où on apprend à penser autrement, où on s&apos;entraide pour de vrai,
              et où on construit des choses concrètes — pas juste des rêves.
            </p>
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-10 h-px bg-[#00FFFF]/30" />
            <div>
              <p className="text-sm font-bold text-white/80">Rached Azer</p>
              <p className="text-xs text-white/30">Fondateur de l&apos;AFEJE</p>
            </div>
          </div>
        </div>
        </FadeIn>
      </section>

      {/* Who is it for — narrative, not a checklist */}
      <section className="border-t border-white/5">
        <FadeIn>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">
            Tu te reconnais <span className="text-[#00FFFF]">là-dedans ?</span>
          </h2>
          <div className="space-y-6 text-white/60 text-sm sm:text-base leading-relaxed">
            <p>
              Tu as une idée qui te trotte dans la tête depuis des mois, mais personne
              autour de toi pour t&apos;aider à la concrétiser. Tu as l&apos;énergie, mais pas le réseau.
              Tu sais que tu vaux mieux que ce qu&apos;on attend de toi.
            </p>
            <p>
              Peut-être que tu as 16 ans et que tu veux lancer un truc. Peut-être que tu en as 30
              et que tu veux enfin te lancer pour de vrai. Peut-être que tu ne sais même pas encore
              quoi faire — juste que tu veux avancer.
            </p>
            <p className="text-white/80">
              Si ça te parle, l&apos;AFEJE est faite pour toi. On ne demande pas de diplôme,
              pas de CV, pas d&apos;expérience. On demande juste une chose : que tu sois
              prêt·e à t&apos;engager vraiment.
            </p>
          </div>
          <Link
            href="/rejoindre"
            className="inline-flex items-center gap-2 text-[#00FFFF] text-sm font-bold tracking-wider uppercase mt-8 hover:gap-3 transition-all duration-300"
          >
            Ça me parle, je candidate
            <span>→</span>
          </Link>
        </div>
        </FadeIn>
      </section>

      {/* Final CTA — warm, simple */}
      <section className="border-t border-white/5 bg-[#00FFFF]/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#00FFFF]/[0.03] blur-3xl" />
        </div>
        <FadeIn>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-6">
            On ne va pas te promettre que ce sera facile.
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            12 mois d&apos;engagement. Du travail sur toi. Des gens qui te challengent.
            Mais à la fin, tu ne seras plus la même personne.
            Et c&apos;est <span className="text-[#00FFFF]">gratuit</span>.
          </p>
          <Link
            href="/rejoindre"
            className="inline-block px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary"
          >
            Je tente l&apos;aventure →
          </Link>
        </div>
        </FadeIn>
      </section>
    </div>
  );
}
