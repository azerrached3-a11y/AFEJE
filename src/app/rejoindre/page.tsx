"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function RejoindrePage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const body = {
      name: data.get("name"),
      email: data.get("email"),
      age: data.get("age"),
      city: data.get("city"),
      situation: data.get("situation"),
      motivation: data.get("motivation"),
    };

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("Erreur lors de l'envoi. Réessaye plus tard.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 border-2 border-[#00FFFF] flex items-center justify-center mx-auto mb-8">
            <div className="w-6 h-6 bg-[#00FFFF] rotate-45" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4">
            C&apos;est <span className="text-[#00FFFF]">envoyé.</span>
          </h1>
          <p className="text-white/60 leading-relaxed mb-4">
            On a bien reçu ta candidature. On la lit, on en discute,
            et on te recontacte rapidement si ça matche.
          </p>
          <p className="text-[#00FFFF]/60 text-sm mb-8">
            En attendant, hésite pas à lire le Code ou découvrir le programme.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-white/20 text-white/60 text-sm tracking-widest uppercase hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 sm:px-6 py-24 sm:py-28 md:py-36">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-4 sm:mb-6 font-mono">
            Candidature
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none mb-6 sm:mb-8">
            NOUS
            <br />
            <span className="text-[#00FFFF]">REJOINDRE.</span>
          </h1>
          <div className="w-20 h-px bg-[#00FFFF]/40 mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed mb-3">
            2 minutes, c&apos;est tout ce qu&apos;il faut. Sois honnête dans tes réponses —
            on ne cherche pas des profils parfaits, on cherche des gens motivé·es.
          </p>
          <p className="text-white/30 text-sm">
            C&apos;est gratuit, ouvert dès 15 ans, et on répond vite.
          </p>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xl sm:text-2xl font-black text-[#00FFFF]">2 min</p>
            <p className="text-[10px] sm:text-xs text-white/30 mt-1 tracking-wider uppercase">Temps de candidature</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-black text-[#00FFFF]">0€</p>
            <p className="text-[10px] sm:text-xs text-white/30 mt-1 tracking-wider uppercase">Aucun frais</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-black text-[#00FFFF]">15+</p>
            <p className="text-[10px] sm:text-xs text-white/30 mt-1 tracking-wider uppercase">Âge minimum</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
              >
                Comment tu t&apos;appelles ?
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors"
                placeholder="Ton nom complet"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
              >
                Ton email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors"
                placeholder="Pour qu'on puisse te recontacter"
              />
              <p className="text-white/20 text-xs mt-2">
                Facultatif — mais on t&apos;enverra un mail de bienvenue si tu le renseignes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
                >
                  Tu as quel âge ?
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min={10}
                  max={99}
                  className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors"
                  placeholder="Ton âge"
                />
                <p className="text-white/20 text-xs mt-2">
                  Ouvert dès 15 ans. Les -15 ans peuvent candidater (voir conditions).
                </p>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
                >
                  Tu vis où ?
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors"
                  placeholder="Ta ville"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="situation"
                className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
              >
                Tu fais quoi en ce moment ?
              </label>
              <input
                type="text"
                id="situation"
                name="situation"
                required
                className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors"
                placeholder="Étudiant, salarié, en recherche, entrepreneur..."
              />
            </div>

            <div>
              <label
                htmlFor="motivation"
                className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3"
              >
                Pourquoi tu veux nous rejoindre ?
              </label>
              <textarea
                id="motivation"
                name="motivation"
                required
                rows={5}
                className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors resize-none"
                placeholder="Dis-nous ce qui te motive. Sois direct. Pas besoin d'un roman — quelques phrases sincères suffisent."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed btn-primary"
            >
              {sending ? "ENVOI EN COURS..." : "ENVOYER MA CANDIDATURE →"}
            </button>

            <p className="text-center text-white/20 text-xs">
              C&apos;est un engagement de 12 mois. On ne te demande rien d&apos;autre que ta motivation.
            </p>
          </form>
        </div>
      </section>

      {/* Under-15 note */}
      <section className="border-t border-[#00FFFF]/10 px-4 sm:px-6 py-10 sm:py-12 bg-[#00FFFF]/[0.03]">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <span className="text-[#00FFFF] text-2xl font-black shrink-0">15-</span>
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/80 mb-2">
              Tu as moins de 15 ans ?
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Tu peux nous rejoindre et participer aux formations, au mentorat
              et au réseau. Toutefois, tu ne seras pas intégré·e aux activités impliquant
              des transactions financières réelles avant tes 15 ans.
              Candidate quand même — on veut te connaître.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
