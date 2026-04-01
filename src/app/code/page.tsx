import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Le Code — Valeurs et principes de l'AFEJE à Chaville (92)",
  description:
    "Le Code AFEJE : manifeste, principes et serment de notre communauté de jeunes entrepreneurs à Chaville, Viroflay et en Île-de-France.",
  alternates: { canonical: "/code" },
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
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto px-2">
            Le Code, c&apos;est pas un document. C&apos;est ce qu&apos;on est.
            Chaque membre le porte en soi.
          </p>
        </div>
      </section>

      {/* Manifeste */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 sm:space-y-8 text-white/70 text-base sm:text-lg leading-relaxed">
            <p>
              On vient d&apos;en bas. Pas par choix. Par circonstance.
            </p>
            <p>
              Personne ne nous attendait. Personne ne nous a fait de place.
              Alors on s&apos;est dit : on va la construire nous-mêmes, cette place.
              Et on va la construire ensemble.
            </p>
            <p>
              On croit que le vrai problème, c&apos;est pas le talent — c&apos;est l&apos;accès.
              L&apos;accès au savoir, aux bonnes personnes, aux outils qui permettent
              de transformer une idée en quelque chose de concret.
            </p>
            <p>
              On croit que quand tu changes ta façon de penser, tu changes ta vie.
              Que quand tu t&apos;entoures des bonnes personnes, tout devient possible.
              Que quand tu t&apos;engages vraiment, personne ne peut t&apos;arrêter.
            </p>
            <p>
              On refuse d&apos;attendre. On refuse les excuses. On refuse
              qu&apos;on nous donne ce qu&apos;on peut construire nous-mêmes.
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
            Les 10 <span className="text-[#00FFFF]">principes</span>
          </h2>
          <p className="text-white/40 text-sm text-center max-w-md mx-auto mb-10 sm:mb-12">
            C&apos;est pas des suggestions. C&apos;est les règles du jeu. Si tu les acceptes, tu es des nôtres.
          </p>
          <div className="space-y-4 sm:space-y-6">
            {[
              { num: "I", text: "La loyauté envers la communauté est absolue." },
              { num: "II", text: "Le savoir acquis se transmet. Toujours." },
              { num: "III", text: "L'excellence n'est pas une option — c'est le standard." },
              { num: "IV", text: "On protège les nôtres. On élève les nôtres." },
              { num: "V", text: "L'argent est un outil, jamais une fin." },
              { num: "VI", text: "Chaque membre est responsable de sa parole et de ses actes." },
              { num: "VII", text: "On ne mendie pas les opportunités. On les crée." },
              { num: "VIII", text: "Le respect se gagne par les résultats, pas par les mots." },
              { num: "IX", text: "L'échec est un enseignement. La lâcheté est inacceptable." },
              { num: "X", text: "Celui ou celle qui réussit seul·e a échoué." },
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
            Le <span className="text-[#00FFFF]">serment</span>
          </h2>
          <p className="text-white/40 text-sm text-center max-w-md mx-auto mb-8">
            Ce que chaque membre dit le jour où il ou elle rejoint l&apos;AFEJE.
          </p>
          <div className="border border-[#00FFFF]/20 p-6 sm:p-8 md:p-12">
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed italic">
              &ldquo;Je m&apos;engage devant les miens. Je transmettrai ce que j&apos;apprends.
              Je construirai ce qui dure. Je n&apos;oublierai jamais d&apos;où je viens.
              Et je viserai toujours plus haut que ce qu&apos;on attend de moi.
            </p>
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed italic mt-4 sm:mt-6">
              Je fais partie de l&apos;AFEJE. Et ça veut dire quelque chose.&rdquo;
            </p>
            <div className="w-12 h-px bg-[#00FFFF]/40 mx-auto mt-6 sm:mt-8" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#00FFFF]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-4">
            Ça te <span className="text-[#00FFFF]">parle</span> ?
          </h2>
          <p className="text-white/50 mb-8 sm:mb-10 max-w-lg mx-auto text-sm sm:text-base">
            Si t&apos;as lu jusqu&apos;ici et que ça résonne, c&apos;est que t&apos;es peut-être
            déjà des nôtres. Viens, on t&apos;attend.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/rejoindre"
              className="w-full sm:w-auto px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary"
            >
              Nous rejoindre →
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
