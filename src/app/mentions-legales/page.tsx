import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — AFEJE",
  description: "Mentions légales de l'Association Française d'Encadrement des Jeunes Entrepreneurs (AFEJE).",
};

export default function MentionsLegalesPage() {
  const sections = [
    {
      title: "Éditeur du site",
      items: [
        "Association Française d'Encadrement des Jeunes Entrepreneurs (AFEJE)",
        "Association loi 1901",
        "N° RNA : W923012377",
        "Siège : Chaville (92370), Hauts-de-Seine, Île-de-France",
        "Préfecture des Hauts-de-Seine",
        "Zone d'action : Chaville, Viroflay, Paris, Hauts-de-Seine, Île-de-France",
        "Président et directeur de la publication : Rached Azer",
        "Email : rached.azer@azzcolabs.business",
      ],
    },
    {
      title: "Hébergement",
      items: [
        "Vercel Inc.",
        "440 N Barranca Ave #4133, Covina, CA 91723, USA",
        "https://vercel.com",
      ],
    },
    {
      title: "Propriété intellectuelle",
      items: [
        "L'ensemble du contenu de ce site (textes, images, logo, structure) est la propriété exclusive de l'AFEJE, sauf mention contraire.",
        "Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.",
      ],
    },
    {
      title: "Données personnelles",
      items: [
        "Les données collectées via le formulaire de candidature sont uniquement utilisées dans le cadre du processus d'adhésion.",
        "Aucune donnée n'est cédée à des tiers.",
        "Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression en écrivant à : rached.azer@azzcolabs.business",
      ],
    },
    {
      title: "Cookies",
      items: [
        "Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.",
        "Aucun cookie publicitaire ou de traçage n'est utilisé.",
      ],
    },
    {
      title: "Responsabilité",
      items: [
        "L'AFEJE s'efforce d'assurer l'exactitude des informations publiées sur ce site.",
        "Elle ne saurait être tenue responsable des erreurs, omissions ou résultats liés à l'utilisation de ces informations.",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-36">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-4 sm:mb-6 font-mono">
            Légal
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none mb-6 sm:mb-8">
            MENTIONS <span className="text-[#00FFFF]">LÉGALES</span>
          </h1>
          <div className="w-20 h-px bg-[#00FFFF]/40 mb-10 sm:mb-14" />

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-sm font-bold tracking-widest uppercase text-[#00FFFF]/70 mb-4">
                  {section.title}
                </h2>
                <div className="space-y-2">
                  {section.items.map((item, i) => (
                    <p key={i} className="text-white/60 text-sm leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
