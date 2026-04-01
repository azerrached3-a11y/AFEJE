import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact — Résultats de l'AFEJE à Chaville et en Hauts-de-Seine",
  description:
    "L'impact de l'AFEJE basée à Chaville (92370) : carrières, entreprises, autonomie économique pour les jeunes d'Île-de-France. Viroflay, Paris, Hauts-de-Seine.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-36">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-4 sm:mb-6 font-mono">
            Notre impact
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 sm:mb-8">
            CE QU&apos;ON
            <br />
            <span className="text-[#00FFFF]">CONSTRUIT.</span>
          </h1>
          <div className="w-20 h-px bg-[#00FFFF]/40 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed mb-4">
            Des personnes transformées. Des entreprises lancées. De l&apos;autonomie
            économique conquise. Pas des statistiques — des vies qui changent.
          </p>
          <p className="text-white/30 text-sm">
            On ne parle pas d&apos;impact en chiffres. On parle de vies qui changent.
          </p>
        </div>
      </section>

      {/* Ce que nous bâtissons */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-10 sm:mb-12">
            Ce qu&apos;on <span className="text-[#00FFFF]">construit</span> vraiment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "DES ESPRITS",
                desc: "Grâce aux neurosciences, chaque membre reprogramme ses schémas de pensée. On transforme les croyances limitantes en réflexes de performance et de leadership.",
                icon: (
                  <div className="w-12 h-12 border border-[#00FFFF]/30 flex items-center justify-center mb-6">
                    <div className="w-4 h-4 bg-[#00FFFF]/20 rotate-45" />
                  </div>
                ),
              },
              {
                title: "DES ENTREPRISES",
                desc: "De l'idée au premier client, du business model à la structure juridique. On accompagne la création d'activités économiques viables et durables.",
                icon: (
                  <div className="w-12 h-12 border border-[#00FFFF]/30 flex items-center justify-center mb-6">
                    <div className="w-6 h-0.5 bg-[#00FFFF]/40" />
                  </div>
                ),
              },
              {
                title: "L'AUTONOMIE",
                desc: "L'objectif final : des jeunes qui ne dépendent de personne. Qui créent de la valeur. Qui élèvent leur communauté par l'exemple.",
                icon: (
                  <div className="w-12 h-12 border border-[#00FFFF]/30 flex items-center justify-center mb-6">
                    <div className="w-4 h-4 border border-[#00FFFF]/30 rotate-45" />
                  </div>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/10 p-6 sm:p-8 hover:border-[#00FFFF]/20 transition-all duration-500 card-hover"
              >
                {item.icon}
                <h3 className="text-base sm:text-lg font-bold tracking-widest mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que ça change concrètement */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-8 sm:mb-10">
            Ce que ça <span className="text-[#00FFFF]">change</span> concrètement
          </h2>
          <div className="space-y-6 text-white/60 text-sm sm:text-base leading-relaxed">
            <p>
              Avant l&apos;AFEJE, tu doutais de toi à chaque décision. Tu te disais
              &ldquo;c&apos;est pas pour moi&rdquo; ou &ldquo;je suis pas assez prêt·e.&rdquo;
              Tu avais l&apos;idée, mais elle restait dans ta tête.
            </p>
            <p>
              Après, tu prends des décisions différemment. Tu gères la pression.
              Tu sais à qui parler et comment avancer. Tu as lancé quelque chose
              — ou tu es en train de le faire, avec des gens qui croient en toi.
            </p>
            <p className="text-white/80">
              C&apos;est pas de la magie. C&apos;est 12 mois de travail, de remise en
              question, et de soutien collectif. Et à la fin, tu ne penses plus
              pareil.
            </p>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-10 sm:mb-12">
            C&apos;est pour <span className="text-[#00FFFF]">qui</span> ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-white/60 leading-relaxed mb-6 text-sm sm:text-base">
                L&apos;AFEJE est ouverte à tous{" "}
                <strong className="text-white">dès 15 ans</strong>, sans limite d&apos;âge.
                On cible en priorité les jeunes issus de quartiers prioritaires et de
                milieux défavorisés en France.
              </p>
              <p className="text-white/60 leading-relaxed mb-6 text-sm sm:text-base">
                Celles et ceux qui ont le feu mais pas le cadre. L&apos;ambition mais
                pas le réseau. L&apos;énergie mais pas les outils.
              </p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                On ne cherche pas des profils parfaits. On cherche des bâtisseurs
                prêts à s&apos;engager dans un parcours exigeant de 12 mois.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Jeunes entrepreneurs en devenir",
                "Porteurs de projets sans réseau ni structure",
                "Talents issus de quartiers prioritaires",
                "Profils atypiques avec une vraie ambition",
                "Celles et ceux qui veulent changer leur façon de penser",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 sm:gap-4 border border-white/10 px-4 sm:px-6 py-3 sm:py-4 hover:border-[#00FFFF]/15 transition-colors"
                >
                  <span className="w-2 h-2 bg-[#00FFFF] shrink-0" />
                  <p className="text-white/70 text-xs sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Écosystème */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-10 sm:mb-12">
            On n&apos;est pas <span className="text-[#00FFFF]">seuls</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="border border-white/10 p-6 sm:p-8 hover:border-[#00FFFF]/20 transition-all duration-500 card-hover">
              <h3 className="text-base sm:text-lg font-bold tracking-widest mb-2">
                AZZ&CO LABS <span className="text-[#00FFFF]">SAS</span>
              </h3>
              <p className="text-xs text-white/30 mb-4 tracking-wider">
                PARTENAIRE OPÉRATIONNEL
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Structure commerciale qui fournit le cadre opérationnel, le
                support technique et l&apos;accompagnement aux projets issus de
                l&apos;AFEJE. Le pont entre la formation et le marché.
              </p>
            </div>
            <div className="border border-white/10 p-6 sm:p-8 hover:border-[#00FFFF]/20 transition-all duration-500 card-hover">
              <h3 className="text-base sm:text-lg font-bold tracking-widest mb-2">
                OPENCLOUD <span className="text-[#00FFFF]">TECH</span>
              </h3>
              <p className="text-xs text-white/30 mb-4 tracking-wider">
                INFRASTRUCTURE TECHNOLOGIQUE
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                Partenaire technologique qui met à disposition l&apos;infrastructure
                cloud et les outils numériques nécessaires au développement des
                projets entrepreneuriaux.
              </p>
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
            Tu veux faire partie de <span className="text-[#00FFFF]">cette histoire</span> ?
          </h2>
          <p className="text-white/50 mb-8 sm:mb-10 max-w-lg mx-auto text-sm sm:text-base">
            2 minutes pour candidater. Gratuit. Ouvert à toutes et tous.
            On attend juste ta motivation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/rejoindre"
              className="w-full sm:w-auto px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary"
            >
              Faire partie de l&apos;aventure →
            </Link>
            <Link
              href="/programme"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white/60 font-medium text-sm tracking-widest uppercase hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300 text-center"
            >
              Découvrir le programme
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
