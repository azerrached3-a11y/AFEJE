import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission — AFEJE",
  description: "La mission de l'AFEJE : accompagner les jeunes entrepreneurs dès 15 ans issus de quartiers difficiles vers l'autonomie économique.",
};

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-36">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-4 sm:mb-6 font-mono">
            Notre mission
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 sm:mb-8">
            CONSTRUIRE DES
            <br />
            <span className="text-[#00FFFF]">BÂTISSEURS.</span>
          </h1>
          <div className="w-20 h-px bg-[#00FFFF]/40 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed mb-4">
            L&apos;AFEJE existe pour une raison simple : transformer le potentiel brut
            en puissance économique. On accompagne les jeunes dès 15 ans issus de
            quartiers prioritaires partout en France.
          </p>
          <p className="text-white/30 text-sm">
            Gratuit · Sans condition de diplôme · Ouvert dès 15 ans
          </p>
        </div>
      </section>

      {/* Qu'est-ce que l'AFEJE */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-8 sm:mb-10">
            QU&apos;EST-CE QUE <span className="text-[#00FFFF]">L&apos;AFEJE</span> ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-white/60 leading-relaxed mb-6 text-sm sm:text-base">
                Une association loi 1901 (n° W923012377, Préfecture des Hauts-de-Seine).
                Pas une ONG classique. Pas un incubateur de plus.
                Un cadre fraternel et exigeant pour ceux qui veulent entreprendre sérieusement
                — qu&apos;ils aient 15 ou 45 ans.
              </p>
              <p className="text-white/60 leading-relaxed mb-6 text-sm sm:text-base">
                Le talent est partout, les opportunités non. L&apos;AFEJE crée le pont
                entre le potentiel et l&apos;action concrète.
              </p>
              <Link
                href="/rejoindre"
                className="inline-flex items-center gap-2 text-[#00FFFF] text-sm font-bold tracking-wider uppercase hover:gap-3 transition-all duration-300"
              >
                Déposer ma candidature
                <span>→</span>
              </Link>
            </div>
            <div className="border border-white/10 p-6 sm:p-8 card-hover">
              <h3 className="text-sm tracking-widest uppercase text-[#00FFFF]/70 mb-5">
                En résumé
              </h3>
              <ul className="space-y-3 text-white/50 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF] mt-0.5">—</span>
                  <span>Association loi 1901, déclarée en préfecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF] mt-0.5">—</span>
                  <span>Public : dès 15 ans, sans limite d&apos;âge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF] mt-0.5">—</span>
                  <span>100% gratuit, sans condition de diplôme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF] mt-0.5">—</span>
                  <span>Objectif : autonomie économique par l&apos;entrepreneuriat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF] mt-0.5">—</span>
                  <span>Méthode : le Code de la Fraternité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF] mt-0.5">—</span>
                  <span>Pédagogie fondée sur les neurosciences cognitives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Under-15 note */}
      <section className="border-t border-[#00FFFF]/10 px-4 sm:px-6 py-10 sm:py-12 bg-[#00FFFF]/[0.03]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <span className="text-[#00FFFF] text-2xl font-black shrink-0">15-</span>
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/80 mb-2">
              Membres de moins de 15 ans
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
              Les jeunes de moins de 15 ans peuvent rejoindre la fraternité et participer aux
              formations, au mentorat et au réseau. Toutefois, ils ne sont pas intégrés aux
              activités impliquant des transactions financières réelles jusqu&apos;à leurs 15 ans.
              La formation reste accessible, l&apos;engagement aussi.
            </p>
          </div>
        </div>
      </section>

      {/* Trois Piliers */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-12 sm:mb-16 text-center">
            LES TROIS <span className="text-[#00FFFF]">PILIERS</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
            {[
              {
                num: "01",
                title: "SAVOIR",
                subtitle: "La connaissance active",
                desc: "Formation en neurosciences appliquées, intelligence émotionnelle, gestion financière, stratégie et leadership. Des compétences directement applicables, transmises par ceux qui ont construit.",
              },
              {
                num: "02",
                title: "RÉSEAU",
                subtitle: "La force collective",
                desc: "Accès à un réseau de mentors, d'entrepreneurs et de partenaires. Des connexions réelles qui ouvrent des portes. La fraternité comme levier professionnel.",
              },
              {
                num: "03",
                title: "INFRASTRUCTURE",
                subtitle: "Les fondations économiques",
                desc: "Des outils concrets : structures juridiques, accompagnement technique via AZZ&CO LABS SAS, accès à l'écosystème OpenCloud Tech. Les fondations pour bâtir durablement.",
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="border border-white/10 p-6 sm:p-8 md:p-10 hover:bg-white/[0.02] transition-all duration-500 card-hover"
              >
                <span className="text-[#00FFFF]/30 text-4xl sm:text-5xl font-black">
                  {pillar.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold tracking-widest mt-4 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#00FFFF]/60 mb-4">{pillar.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-10 sm:mb-12">
            COMMENT ÇA <span className="text-[#00FFFF]">FONCTIONNE</span>
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                step: "01",
                title: "Tu candidates",
                desc: "Remplis le formulaire en 2 minutes. On ne demande pas de diplôme ni de CV — on demande de la motivation et de l'honnêteté.",
              },
              {
                step: "02",
                title: "Tu adhères au Code",
                desc: "Un engagement moral et fraternel qui définit nos valeurs, notre discipline et notre façon d'agir ensemble. Le Code est sacré.",
              },
              {
                step: "03",
                title: "Tu suis le programme",
                desc: "6 modules fondés sur les neurosciences : reprogrammation mentale, intelligence émotionnelle, stratégie financière, leadership, décision sous pression, construction de projet.",
              },
              {
                step: "04",
                title: "Tu es accompagné",
                desc: "Mentorat par les pairs, suivi personnalisé, responsabilité mutuelle. Tu n'es jamais seul — la fraternité avance ensemble.",
              },
              {
                step: "05",
                title: "Tu construis",
                desc: "Intégration dans l'écosystème AZZ&CO LABS + OpenCloud Tech. De l'idée à l'entreprise, avec les outils et le soutien pour durer.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 sm:gap-6 items-start group"
              >
                <span className="text-[#00FFFF]/20 text-2xl sm:text-3xl font-black shrink-0 group-hover:text-[#00FFFF]/50 transition-colors">
                  {item.step}
                </span>
                <div className="border-l border-white/10 pl-4 sm:pl-6 group-hover:border-[#00FFFF]/30 transition-colors">
                  <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#00FFFF]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-4">
            LA MISSION TE PARLE <span className="text-[#00FFFF]">?</span>
          </h2>
          <p className="text-white/50 mb-3 max-w-lg mx-auto text-sm sm:text-base">
            Rejoins une fraternité qui forme, accompagne et construit avec toi.
            Pas de promesses creuses — des résultats concrets.
          </p>
          <p className="text-white/30 text-xs mb-8 sm:mb-10">
            Candidature en 2 minutes · Réponse rapide · 100% gratuit
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/rejoindre"
              className="w-full sm:w-auto px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary"
            >
              Candidater maintenant →
            </Link>
            <Link
              href="/programme"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white/60 font-medium text-sm tracking-widest uppercase hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300 text-center"
            >
              Voir le programme
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
