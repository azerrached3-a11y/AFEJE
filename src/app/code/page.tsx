import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Le Code — AFEJE",
  description: "Le Code de la Fraternité : manifeste, principes et serment de l'AFEJE.",
};

export default function CodePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-36 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00FFFF]/[0.02] blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-4 sm:mb-6 font-mono">
            Le manifeste
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6 sm:mb-8">
            LE
            <br />
            <span className="text-[#00FFFF]">CODE.</span>
          </h1>
          <div className="w-20 h-px bg-[#00FFFF]/40 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto px-2 mb-3">
            Ce qui nous lie. Ce qui nous définit. Ce qui nous sépare du reste.
          </p>
          <p className="text-white/30 text-xs">
            Le Code est l&apos;ADN de chaque frère AFEJE — il se lit, se vit et se transmet.
          </p>
        </div>
      </section>

      {/* Manifeste */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-10 sm:mb-12 text-center">
            LE <span className="text-[#00FFFF]">MANIFESTE</span>
          </h2>
          <div className="space-y-6 sm:space-y-8 text-white/70 text-base sm:text-lg leading-relaxed">
            <p>
              Nous sommes ceux qui viennent d&apos;en bas. Pas par choix. Par circonstance.
              Mais ce qui nous définit, ce n&apos;est pas d&apos;où on vient — c&apos;est où on va.
            </p>
            <p>
              Nous croyons que l&apos;entrepreneuriat est la voie royale vers la dignité
              économique. Que le savoir se transmet entre frères. Que le réseau se
              construit dans la loyauté. Que l&apos;infrastructure se bâtit dans la durée.
            </p>
            <p>
              Nous croyons en la puissance des neurosciences pour reprogrammer les
              schémas de pensée. En la discipline comme moteur de transformation.
              En la fraternité comme socle de tout ce qu&apos;on construit.
            </p>
            <p>
              Nous refusons l&apos;assistanat. Nous refusons les excuses. Nous refusons
              d&apos;attendre qu&apos;on nous donne ce qu&apos;on peut construire nous-mêmes.
            </p>
            <p>
              Chaque membre de cette fraternité est un bâtisseur. Chaque engagement est
              sacré. Chaque réussite individuelle élève le collectif.
            </p>
            <p className="text-[#00FFFF] font-bold text-lg sm:text-xl">
              On ne demande pas la permission. On construit.
            </p>
          </div>
        </div>
      </section>

      {/* Les Principes */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-4 sm:mb-6 text-center">
            LES 10 <span className="text-[#00FFFF]">PRINCIPES</span>
          </h2>
          <p className="text-white/40 text-sm text-center max-w-md mx-auto mb-10 sm:mb-12">
            Ces principes ne sont pas des suggestions. Ce sont les règles du jeu. Si tu les acceptes, tu es des nôtres.
          </p>
          <div className="space-y-4 sm:space-y-6">
            {[
              { num: "I", text: "La loyauté envers la fraternité est absolue." },
              { num: "II", text: "Le savoir acquis se transmet. Toujours." },
              { num: "III", text: "L'excellence n'est pas une option — c'est le standard." },
              { num: "IV", text: "On protège les nôtres. On élève les nôtres." },
              { num: "V", text: "L'argent est un outil, jamais une fin." },
              { num: "VI", text: "Chaque frère est responsable de sa parole et de ses actes." },
              { num: "VII", text: "On ne mendie pas les opportunités. On les crée." },
              { num: "VIII", text: "Le respect se gagne par les résultats, pas par les mots." },
              { num: "IX", text: "L'échec est un enseignement. La lâcheté est inacceptable." },
              { num: "X", text: "Un frère qui réussit seul a échoué." },
            ].map((rule) => (
              <div
                key={rule.num}
                className="flex items-start gap-4 sm:gap-6 group border-b border-white/5 pb-4 sm:pb-6"
              >
                <span className="text-[#00FFFF]/30 text-xl sm:text-2xl font-black shrink-0 min-w-[2.5rem] sm:min-w-[3rem] text-right group-hover:text-[#00FFFF]/70 transition-colors">
                  {rule.num}
                </span>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed group-hover:text-white transition-colors">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Serment */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-24 bg-white/[0.02] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#00FFFF]/[0.03] blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-10 sm:mb-12">
            LE <span className="text-[#00FFFF]">SERMENT</span>
          </h2>
          <div className="border border-[#00FFFF]/20 p-6 sm:p-8 md:p-12">
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed italic">
              &ldquo;Je m&apos;engage devant mes frères à honorer le Code. À transmettre ce
              que j&apos;apprends. À construire ce qui dure. À ne jamais oublier d&apos;où je
              viens, et à toujours viser plus haut que ce qu&apos;on attend de moi.
            </p>
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed italic mt-4 sm:mt-6">
              Je suis un bâtisseur. Je suis un frère. Je suis AFEJE.&rdquo;
            </p>
            <div className="w-12 h-px bg-[#00FFFF]/40 mx-auto mt-6 sm:mt-8" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#00FFFF]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-4">
            CE CODE TE <span className="text-[#00FFFF]">PARLE</span> ?
          </h2>
          <p className="text-white/50 mb-3 max-w-lg mx-auto text-sm sm:text-base">
            Si ces mots résonnent en toi, c&apos;est que tu es peut-être déjà un frère.
            Il ne reste qu&apos;à officialiser.
          </p>
          <p className="text-white/30 text-xs mb-8 sm:mb-10">
            Candidature en 2 minutes · Places limitées · 100% gratuit
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/rejoindre"
              className="w-full sm:w-auto px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary"
            >
              Rejoindre la fraternité →
            </Link>
            <Link
              href="/mission"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white/60 font-medium text-sm tracking-widest uppercase hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300 text-center"
            >
              Découvrir la mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
