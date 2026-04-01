import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programme — AFEJE",
  description:
    "Le programme pédagogique AFEJE : 6 modules fondés sur les neurosciences cognitives. Gratuit, dès 15 ans.",
};

export default function ProgrammePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-36">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-4 sm:mb-6 font-mono">
            Programme pédagogique
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6 sm:mb-8">
            REPROGRAMMER
            <br />
            <span className="text-[#00FFFF]">LE CERVEAU.</span>
          </h1>
          <div className="w-20 h-px bg-[#00FFFF]/40 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed mb-4">
            Un cursus unique en France, fondé sur les neurosciences cognitives et
            l&apos;intelligence émotionnelle. 6 modules pour transformer ta façon de
            penser, d&apos;agir et de construire — accessible dès 15 ans.
          </p>
          <p className="text-white/30 text-sm">
            12 mois · 6 modules · 100% gratuit · Dès 15 ans
          </p>
        </div>
      </section>

      {/* Approche neurosciences */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-8 sm:mb-12">
            POURQUOI LES <span className="text-[#00FFFF]">NEUROSCIENCES</span> ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6">
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                La plupart des programmes se concentrent sur les compétences
                techniques. Nous, on commence par le cerveau. Parce que les vrais
                blocages ne sont pas dans le business plan — ils sont dans la tête.
              </p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Les neurosciences cognitives nous enseignent que le cerveau est
                plastique : il peut être reprogrammé. Les schémas de pensée
                limitants acquis dans un environnement difficile peuvent être
                remplacés par des circuits de performance, de résilience
                et de vision stratégique.
              </p>
              <p className="text-white/40 leading-relaxed text-sm">
                Notre approche s&apos;appuie sur la neuroplasticité, la régulation
                émotionnelle, les biais cognitifs et les mécanismes de prise de
                décision pour donner à chaque frère les armes mentales nécessaires.
              </p>
              <Link
                href="/rejoindre"
                className="inline-flex items-center gap-2 text-[#00FFFF] text-sm font-bold tracking-wider uppercase hover:gap-3 transition-all duration-300"
              >
                Commencer le programme
                <span>→</span>
              </Link>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Neuroplasticité",
                  desc: "Reprogrammer les circuits neuronaux pour remplacer les schémas limitants par des réflexes de performance.",
                },
                {
                  title: "Intelligence émotionnelle",
                  desc: "Maîtriser ses émotions pour prendre des décisions lucides sous pression.",
                },
                {
                  title: "Biais cognitifs",
                  desc: "Identifier et contourner les pièges mentaux qui sabotent la réussite.",
                },
                {
                  title: "Gestion du stress",
                  desc: "Transformer la pression en carburant grâce aux techniques de régulation neuronale.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-white/10 p-4 sm:p-5 hover:border-[#00FFFF]/20 transition-colors duration-500 card-hover"
                >
                  <h3 className="text-sm font-bold tracking-wider text-[#00FFFF]/80 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Les 6 modules */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-4 sm:mb-6 text-center">
            LES 6 <span className="text-[#00FFFF]">MODULES</span>
          </h2>
          <p className="text-white/40 text-sm text-center max-w-lg mx-auto mb-12 sm:mb-16">
            Chaque module est conçu pour produire un changement mesurable. Pas de théorie abstraite — de la transformation concrète.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "Reprogrammation mentale",
                desc: "Comprendre le fonctionnement du cerveau entrepreneurial. Identifier et déconstruire les croyances limitantes. Installer de nouveaux réflexes cognitifs orientés action et résultat.",
                tags: ["Neuroplasticité", "Mindset", "Visualisation"],
              },
              {
                num: "02",
                title: "Intelligence émotionnelle",
                desc: "Développer la conscience de soi, l'empathie stratégique et la maîtrise émotionnelle. Apprendre à lire les dynamiques humaines et à influencer positivement.",
                tags: ["Régulation", "Empathie", "Leadership"],
              },
              {
                num: "03",
                title: "Stratégie financière",
                desc: "Maîtriser les fondamentaux de la gestion financière, de la trésorerie et de l'investissement. Penser en termes de flux, de levier et de croissance durable.",
                tags: ["Gestion", "Investissement", "Cashflow"],
              },
              {
                num: "04",
                title: "Leadership et influence",
                desc: "Construire une posture de leader authentique. Communiquer avec impact, fédérer une équipe, négocier avec autorité. Du leadership de terrain, pas de théorie.",
                tags: ["Communication", "Négociation", "Vision"],
              },
              {
                num: "05",
                title: "Décision sous pression",
                desc: "Entraîner le cerveau à prendre des décisions rapides et lucides en situation de stress. Simulation, mise en situation, débriefing neuroscientifique.",
                tags: ["Stress", "Agilité", "Résilience"],
              },
              {
                num: "06",
                title: "Construction de projet",
                desc: "De l'idée à la structure : business model, proposition de valeur, stratégie de lancement. Accompagnement concret jusqu'au premier client ou partenaire.",
                tags: ["Business", "Lancement", "Exécution"],
              },
            ].map((module) => (
              <div
                key={module.num}
                className="border border-white/10 p-6 sm:p-8 hover:border-[#00FFFF]/20 transition-all duration-500 group flex flex-col card-hover"
              >
                <span className="text-[#00FFFF]/20 text-4xl sm:text-5xl font-black group-hover:text-[#00FFFF]/40 transition-colors">
                  {module.num}
                </span>
                <h3 className="text-base sm:text-lg font-bold mt-3 mb-3 group-hover:text-[#00FFFF] transition-colors">
                  {module.title}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed flex-1">
                  {module.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                  {module.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs px-2 py-1 border border-[#00FFFF]/20 text-[#00FFFF]/50 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode Brotherhood */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-8 sm:mb-12">
            LA MÉTHODE <span className="text-[#00FFFF]">FRATERNELLE</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6">
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Chaque module est vécu en groupe. La fraternité n&apos;est pas un
                concept — c&apos;est la méthode. On apprend ensemble, on échoue
                ensemble, on construit ensemble.
              </p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Le mentorat par les pairs est au cœur du dispositif : chaque
                frère plus avancé accompagne un frère qui débute. La
                responsabilité mutuelle crée un engagement qu&apos;aucun programme
                classique ne peut reproduire.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Apprentissage collectif en petits groupes fraternels",
                "Mentorat par les pairs — chaque frère est mentor et apprenti",
                "Mises en situation réelles avec débriefing neuroscientifique",
                "Responsabilité mutuelle et engagement devant le groupe",
                "Suivi personnalisé par un référent expérimenté",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 sm:gap-4 border border-white/5 px-4 py-3 hover:border-[#00FFFF]/15 transition-colors"
                >
                  <span className="w-2 h-2 bg-[#00FFFF] shrink-0 mt-1.5 rounded-full" />
                  <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Durée et rythme */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-8 sm:mb-12 text-center">
            PARCOURS ET <span className="text-[#00FFFF]">RYTHME</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "DURÉE",
                value: "12 mois",
                desc: "Un parcours complet sur une année, phases d'apprentissage et de mise en pratique alternées.",
              },
              {
                title: "RYTHME",
                value: "Intensif",
                desc: "Sessions hebdomadaires en groupe, travail personnel entre les sessions, accompagnement continu.",
              },
              {
                title: "FORMAT",
                value: "Hybride",
                desc: "Présentiel pour le collectif, outils numériques via OpenCloud Tech pour le suivi.",
              },
              {
                title: "COÛT",
                value: "0€",
                desc: "Entièrement gratuit. Pas de frais d'inscription, pas de frais cachés. Jamais.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/10 p-6 sm:p-8 text-center hover:border-[#00FFFF]/20 transition-colors duration-500 card-hover"
              >
                <p className="text-xs tracking-widest uppercase text-white/30 mb-2">
                  {item.title}
                </p>
                <p className="text-2xl sm:text-3xl font-black text-[#00FFFF] mb-4">
                  {item.value}
                </p>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
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
            PRÊT À <span className="text-[#00FFFF]">TE TRANSFORMER</span> ?
          </h2>
          <p className="text-white/50 mb-3 max-w-lg mx-auto text-sm sm:text-base">
            Le programme AFEJE n&apos;est pas pour tout le monde. Il est pour ceux
            qui sont prêts à se remettre en question et à construire quelque chose de grand.
          </p>
          <p className="text-white/30 text-xs mb-8 sm:mb-10">
            Places limitées · Candidature en 2 minutes · Dès 15 ans · 100% gratuit
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
