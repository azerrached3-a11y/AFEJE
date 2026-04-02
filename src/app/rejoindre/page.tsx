"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function RejoindrePage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  // Phone verification state
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [verifiedPhone, setVerifiedPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [phoneLoading, setPhoneLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  async function handleSendOtp() {
    if (!phoneValue.trim()) return;
    setPhoneLoading(true);
    setPhoneError("");
    try {
      const res = await fetch("/api/verify-phone/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneValue }),
      });
      const data = await res.json();
      if (res.ok) {
        setOtpSent(true);
        setVerifiedPhone(data.phone);
      } else {
        setPhoneError(data.error || "Erreur d'envoi.");
      }
    } catch {
      setPhoneError("Erreur réseau.");
    } finally {
      setPhoneLoading(false);
    }
  }

  async function handleVerifyOtp() {
    if (!otpCode.trim()) return;
    setPhoneLoading(true);
    setPhoneError("");
    try {
      const res = await fetch("/api/verify-phone/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: verifiedPhone, code: otpCode }),
      });
      const data = await res.json();
      if (res.ok && data.verified) {
        setPhoneVerified(true);
      } else {
        setPhoneError(data.error || "Vérification échouée.");
      }
    } catch {
      setPhoneError("Erreur réseau.");
    } finally {
      setPhoneLoading(false);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (phoneValue.trim() && !phoneVerified) {
      alert("Vérifie ton numéro de téléphone avant d'envoyer ta candidature.");
      return;
    }

    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const body = {
      name: data.get("name"),
      email: data.get("email"),
      phone: verifiedPhone || null,
      phone_verified: phoneVerified,
      age: data.get("age"),
      city: data.get("city"),
      linkedin: data.get("linkedin"),
      education: data.get("education"),
      situation: data.get("situation"),
      skills: data.get("skills"),
      has_project: data.get("has_project") === "yes",
      project_description: data.get("project_description"),
      project_stage: data.get("project_stage"),
      target_audience: data.get("target_audience"),
      revenue_model: data.get("revenue_model"),
      motivation: data.get("motivation"),
      expectations: data.get("expectations"),
      availability: data.get("availability"),
      heard_from: data.get("heard_from"),
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
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* ── Section 1 : Identité ── */}
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#00FFFF]/50 font-mono mb-6">01 — Qui es-tu ?</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                    Nom complet *
                  </label>
                  <input type="text" id="name" name="name" required className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors" placeholder="Prénom et nom" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                      Email *
                    </label>
                    <input type="email" id="email" name="email" required className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors" placeholder="ton@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                      Téléphone {phoneVerified && <span className="text-green-400 text-xs ml-2">✓ Vérifié</span>}
                    </label>
                    {phoneVerified ? (
                      <div className="w-full bg-transparent border border-green-500/30 px-5 py-4 text-green-400 text-sm">
                        {verifiedPhone}
                      </div>
                    ) : !otpSent ? (
                      <div className="flex gap-2">
                        <input
                          type="tel"
                          id="phone"
                          value={phoneValue}
                          onChange={(e) => setPhoneValue(e.target.value)}
                          className="flex-1 bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors"
                          placeholder="06 xx xx xx xx"
                        />
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          disabled={phoneLoading || !phoneValue.trim()}
                          className="px-4 py-4 bg-[#00FFFF]/10 border border-[#00FFFF]/30 text-[#00FFFF] text-xs font-bold tracking-wider uppercase hover:bg-[#00FFFF]/20 transition-colors disabled:opacity-30 whitespace-nowrap"
                        >
                          {phoneLoading ? "..." : "Vérifier"}
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                          maxLength={6}
                          className="flex-1 bg-transparent border border-[#00FFFF]/30 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors text-center tracking-[0.5em] font-mono"
                          placeholder="— — — — — —"
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOtp}
                          disabled={phoneLoading || otpCode.length !== 6}
                          className="px-4 py-4 bg-[#00FFFF]/10 border border-[#00FFFF]/30 text-[#00FFFF] text-xs font-bold tracking-wider uppercase hover:bg-[#00FFFF]/20 transition-colors disabled:opacity-30 whitespace-nowrap"
                        >
                          {phoneLoading ? "..." : "Confirmer"}
                        </button>
                      </div>
                    )}
                    {phoneError && <p className="text-red-400 text-xs mt-2">{phoneError}</p>}
                    {otpSent && !phoneVerified && <p className="text-[#00FFFF]/40 text-xs mt-2">Code envoyé par SMS à {verifiedPhone}. Valable 5 minutes.</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="age" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                      Âge *
                    </label>
                    <input type="number" id="age" name="age" required min={10} max={99} className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors" placeholder="Ton âge" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="city" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                      Ville *
                    </label>
                    <input type="text" id="city" name="city" required className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors" placeholder="Ta ville actuelle" />
                  </div>
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                    LinkedIn / Portfolio
                  </label>
                  <input type="url" id="linkedin" name="linkedin" className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors" placeholder="https://linkedin.com/in/..." />
                  <p className="text-white/20 text-xs mt-2">Facultatif — ça nous aide à mieux te connaître.</p>
                </div>
              </div>
            </div>

            {/* ── Section 2 : Parcours ── */}
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#00FFFF]/50 font-mono mb-6">02 — Ton parcours</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="education" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                    Niveau d&apos;études / Formation *
                  </label>
                  <select id="education" name="education" required className="w-full bg-transparent border border-white/20 px-5 py-4 text-white focus:border-[#00FFFF]/50 focus:outline-none transition-colors">
                    <option value="" className="bg-black">Sélectionne</option>
                    <option value="college" className="bg-black">Collège</option>
                    <option value="lycee" className="bg-black">Lycée</option>
                    <option value="bac" className="bg-black">Bac</option>
                    <option value="bac+2" className="bg-black">Bac+2</option>
                    <option value="bac+3" className="bg-black">Bac+3 (Licence)</option>
                    <option value="bac+5" className="bg-black">Bac+5 (Master)</option>
                    <option value="bac+8" className="bg-black">Bac+8 (Doctorat)</option>
                    <option value="autodidacte" className="bg-black">Autodidacte</option>
                    <option value="autre" className="bg-black">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="situation" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                    Situation actuelle *
                  </label>
                  <input type="text" id="situation" name="situation" required className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors" placeholder="Étudiant, salarié, en recherche, freelance, entrepreneur..." />
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                    Tes compétences clés
                  </label>
                  <input type="text" id="skills" name="skills" className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors" placeholder="Marketing, développement web, design, vente, gestion..." />
                  <p className="text-white/20 text-xs mt-2">Pas besoin d&apos;être expert — dis-nous ce que tu sais faire.</p>
                </div>
              </div>
            </div>

            {/* ── Section 3 : Projet ── */}
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#00FFFF]/50 font-mono mb-6">03 — Ton projet</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                    Tu as déjà un projet entrepreneurial ? *
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="has_project" value="yes" required className="accent-[#00FFFF]" />
                      <span className="text-white/70">Oui</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="has_project" value="no" className="accent-[#00FFFF]" />
                      <span className="text-white/70">Non, mais je veux en créer un</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="project_description" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                    Décris ton projet (ou ton idée)
                  </label>
                  <textarea id="project_description" name="project_description" rows={3} className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors resize-none" placeholder="En 2-3 phrases : quel problème tu résous, pour qui, comment ?" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="project_stage" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                      Stade du projet
                    </label>
                    <select id="project_stage" name="project_stage" className="w-full bg-transparent border border-white/20 px-5 py-4 text-white focus:border-[#00FFFF]/50 focus:outline-none transition-colors">
                      <option value="" className="bg-black">Sélectionne</option>
                      <option value="idea" className="bg-black">Idée / Réflexion</option>
                      <option value="prototype" className="bg-black">Prototype / MVP</option>
                      <option value="launched" className="bg-black">Lancé (premiers clients)</option>
                      <option value="scaling" className="bg-black">En croissance</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="target_audience" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                      Ta cible / Ton marché
                    </label>
                    <input type="text" id="target_audience" name="target_audience" className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors" placeholder="Étudiants, PME, particuliers..." />
                  </div>
                </div>

                <div>
                  <label htmlFor="revenue_model" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                    Modèle économique envisagé
                  </label>
                  <input type="text" id="revenue_model" name="revenue_model" className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors" placeholder="Abonnement, commission, vente directe, freemium..." />
                </div>
              </div>
            </div>

            {/* ── Section 4 : Motivation & Engagement ── */}
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#00FFFF]/50 font-mono mb-6">04 — Motivation & engagement</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="motivation" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                    Pourquoi tu veux rejoindre l&apos;AFEJE ? *
                  </label>
                  <textarea id="motivation" name="motivation" required rows={4} className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors resize-none" placeholder="Sois direct — quelques phrases sincères suffisent." />
                </div>

                <div>
                  <label htmlFor="expectations" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                    Qu&apos;est-ce que tu attends du programme ?
                  </label>
                  <textarea id="expectations" name="expectations" rows={3} className="w-full bg-transparent border border-white/20 px-5 py-4 text-white placeholder-white/20 focus:border-[#00FFFF]/50 focus:outline-none transition-colors resize-none" placeholder="Mentorat, réseau, compétences, financement, structure..." />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="availability" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                      Disponibilité *
                    </label>
                    <select id="availability" name="availability" required className="w-full bg-transparent border border-white/20 px-5 py-4 text-white focus:border-[#00FFFF]/50 focus:outline-none transition-colors">
                      <option value="" className="bg-black">Sélectionne</option>
                      <option value="full-time" className="bg-black">Temps plein</option>
                      <option value="part-time" className="bg-black">Mi-temps</option>
                      <option value="evenings-weekends" className="bg-black">Soirs et week-ends</option>
                      <option value="flexible" className="bg-black">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="heard_from" className="block text-sm font-bold tracking-wider uppercase text-white/70 mb-3">
                      Comment tu as connu l&apos;AFEJE ?
                    </label>
                    <select id="heard_from" name="heard_from" className="w-full bg-transparent border border-white/20 px-5 py-4 text-white focus:border-[#00FFFF]/50 focus:outline-none transition-colors">
                      <option value="" className="bg-black">Sélectionne</option>
                      <option value="social-media" className="bg-black">Réseaux sociaux</option>
                      <option value="search" className="bg-black">Recherche Google</option>
                      <option value="word-of-mouth" className="bg-black">Bouche à oreille</option>
                      <option value="event" className="bg-black">Événement / Salon</option>
                      <option value="other" className="bg-black">Autre</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={sending}
                className="w-full px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed btn-primary"
              >
                {sending ? "ENVOI EN COURS..." : "ENVOYER MA CANDIDATURE →"}
              </button>

              <p className="text-center text-white/20 text-xs mt-4">
                C&apos;est un engagement de 12 mois. Les champs marqués * sont obligatoires.
              </p>
            </div>
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
