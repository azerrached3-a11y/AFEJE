import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diagnostic — Le labo cognitif de l'AFEJE",
  description:
    "Tests et diagnostics neurosciences de l'AFEJE. Découvre comment ton cerveau fonctionne vraiment — et ce que tu pourrais développer avec nous.",
  alternates: { canonical: "/diagnostic" },
  openGraph: {
    title: "Le Labo Cognitif — AFEJE",
    description:
      "Tests neurosciences pour entrepreneurs. Cartographie ton cerveau. Gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "AFEJE",
  },
};

const tests = [
  {
    slug: "profil-cognitif",
    title: "Profil Cognitif Entrepreneurial",
    description:
      "10 scénarios qui révèlent comment ton cerveau prend ses décisions — ses forces, ses pièges, ses angles morts.",
    dimensions: [
      "Lucidité",
      "Résilience",
      "Contrôle",
      "Métacognition",
      "Vision",
    ],
    duration: "3 min",
    status: "live" as const,
  },
  {
    slug: null,
    title: "Intelligence Émotionnelle",
    description:
      "Mesure ta capacité à lire les gens, gérer tes émotions sous pression, et utiliser l'affect comme outil de décision.",
    dimensions: ["Empathie", "Régulation", "Conscience", "Influence"],
    duration: "4 min",
    status: "coming" as const,
  },
  {
    slug: null,
    title: "Tolérance au Risque",
    description:
      "Comment ton cerveau évalue l'incertitude. Sais-tu faire la différence entre un risque calculé et un pari aveugle ?",
    dimensions: ["Calibration", "Audace", "Prudence", "Adaptabilité"],
    duration: "3 min",
    status: "coming" as const,
  },
];

export default function DiagnosticPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 sm:px-6 pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-20 text-center">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-4 sm:mb-6 font-mono animate-fade-in-up">
          Le labo cognitif
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6 sm:mb-8 animate-fade-in-up">
          TU PENSES SAVOIR
          <br />
          <span className="text-[#00FFFF]">COMMENT TU PENSES ?</span>
        </h1>
        <div className="w-20 h-px bg-[#00FFFF]/40 mx-auto mb-6 sm:mb-8 animate-line-grow" />
        <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-xl mx-auto animate-fade-in-up-delay px-2">
          Des diagnostics construits sur les neurosciences. Pas des quiz de
          magazine. Des outils qui te montrent ce que ton cerveau fait vraiment —
          surtout quand tu crois le contrôler.
        </p>
      </section>

      {/* Tests grid */}
      <section className="px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto space-y-6">
          {tests.map((test, i) => (
            <div
              key={i}
              className={`border p-6 sm:p-8 transition-all duration-300 ${
                test.status === "live"
                  ? "border-[#00FFFF]/30 hover:border-[#00FFFF]/60 card-hover"
                  : "border-white/10 opacity-50"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  {test.status === "live" ? (
                    <span className="inline-block text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-mono text-[#00FFFF] mb-2 sm:mb-3">
                      ● Disponible
                    </span>
                  ) : (
                    <span className="inline-block text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-mono text-white/30 mb-2 sm:mb-3">
                      Bientôt
                    </span>
                  )}
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight">
                    {test.title}
                  </h2>
                </div>
                <span className="text-xs font-mono text-white/20 shrink-0 ml-4">
                  {test.duration}
                </span>
              </div>

              <p className="text-sm text-white/40 leading-relaxed mb-5">
                {test.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {test.dimensions.map((dim) => (
                  <span
                    key={dim}
                    className={`text-[10px] tracking-wider uppercase px-3 py-1 border ${
                      test.status === "live"
                        ? "border-[#00FFFF]/20 text-[#00FFFF]/50"
                        : "border-white/10 text-white/20"
                    }`}
                  >
                    {dim}
                  </span>
                ))}
              </div>

              {test.status === "live" && test.slug ? (
                <Link
                  href={`/diagnostic/${test.slug}`}
                  className="inline-block px-6 py-3 bg-[#00FFFF] text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary"
                >
                  Commencer →
                </Link>
              ) : (
                <span className="inline-block px-6 py-3 border border-white/10 text-white/20 font-medium text-xs tracking-widest uppercase cursor-not-allowed">
                  Prochainement
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy section */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-6">
            Pourquoi des{" "}
            <span className="text-[#00FFFF]">diagnostics cognitifs</span> ?
          </h2>
          <p className="text-sm sm:text-base text-white/40 leading-relaxed mb-4">
            La plupart des formations te disent quoi faire. Aucune ne commence
            par te montrer comment tu penses. C&apos;est pourtant là que tout se
            joue.
          </p>
          <p className="text-sm sm:text-base text-white/40 leading-relaxed mb-8">
            Ton cerveau a des réflexes que tu ne vois pas. Des biais qui
            sabotent tes décisions. Des patterns que tu répètes sans le savoir.
            Le premier pas pour devenir un bâtisseur, c&apos;est de regarder la
            machine en face.
          </p>
          <Link
            href="/programme"
            className="text-sm text-[#00FFFF]/60 hover:text-[#00FFFF] transition-colors tracking-wider uppercase"
          >
            Découvrir le programme complet →
          </Link>
        </div>
      </section>
    </div>
  );
}
