"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import RadarChart from "@/components/RadarChart";
import {
  questions,
  dimensions,
  computeScores,
  getOverallScore,
  getProfileName,
  getProfileDescription,
  getScoreLevel,
} from "@/lib/diagnostic-data";

type Phase = "intro" | "quiz" | "computing" | "results";

export default function DiagnosticTest() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const startQuiz = useCallback(() => {
    setPhase("quiz");
    setCurrentQ(0);
    setAnswers(Array(questions.length).fill(-1));
  }, []);

  const selectOption = useCallback(
    (optionIndex: number) => {
      if (transitioning) return;
      setSelectedOption(optionIndex);

      const newAnswers = [...answers];
      newAnswers[currentQ] = optionIndex;
      setAnswers(newAnswers);

      setTransitioning(true);

      setTimeout(() => {
        if (currentQ < questions.length - 1) {
          setCurrentQ((prev) => prev + 1);
          setSelectedOption(null);
          setTransitioning(false);
        } else {
          setPhase("computing");
          const computed = computeScores(newAnswers);
          setScores(computed);

          setTimeout(() => {
            setPhase("results");
            setTimeout(() => setShowResults(true), 100);
          }, 2500);
        }
      }, 600);
    },
    [currentQ, answers, transitioning]
  );

  const restart = useCallback(() => {
    setPhase("intro");
    setCurrentQ(0);
    setAnswers(Array(questions.length).fill(-1));
    setSelectedOption(null);
    setScores({});
    setShowResults(false);
    setTransitioning(false);
  }, []);

  const shareResults = useCallback(() => {
    const overall = getOverallScore(scores);
    const profile = getProfileName(overall);
    const lines = dimensions.map(
      (d) => `${d.shortLabel}: ${scores[d.id]}/100`
    );
    const text = `Mon profil cognitif AFEJE : ${profile} (${overall}/100)\n${lines.join(
      " · "
    )}\n\nFais le test → https://afeje.com/diagnostic/profil-cognitif`;
    navigator.clipboard.writeText(text).then(() => {
      alert("Résultat copié ! Colle-le où tu veux.");
    });
  }, [scores]);

  // ── INTRO ──
  if (phase === "intro") {
    return (
      <div className="min-h-screen flex flex-col">
        <section className="flex-1 flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-2xl text-center">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-4 sm:mb-6 font-mono animate-fade-in-up">
              Diagnostic cognitif
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6 sm:mb-8 animate-fade-in-up">
              TON CERVEAU
              <br />
              <span className="text-[#00FFFF]">JOUE CONTRE TOI.</span>
            </h1>
            <div className="w-20 h-px bg-[#00FFFF]/40 mx-auto mb-6 sm:mb-8 animate-line-grow" />
            <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-3 animate-fade-in-up-delay px-2">
              10 scénarios. Pas de bonnes réponses. Chaque choix révèle comment
              ton cerveau fonctionne vraiment — ses forces, ses pièges, ses
              angles morts.
            </p>
            <p className="text-sm text-white/30 mb-10 animate-fade-in-up-delay">
              3 minutes · Gratuit · Aucune inscription
            </p>
            <button
              onClick={startQuiz}
              className="px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary animate-fade-in-up-delay-2"
            >
              Découvrir mon profil →
            </button>
            <div className="mt-16 grid grid-cols-5 gap-3 sm:gap-4 max-w-md mx-auto animate-fade-in-up-delay-2">
              {dimensions.map((d) => (
                <div key={d.id} className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 border border-white/10 flex items-center justify-center mx-auto mb-2">
                    <div className="w-2 h-2 bg-[#00FFFF]/30 rotate-45" />
                  </div>
                  <p className="text-[8px] sm:text-[9px] text-white/30 tracking-wider uppercase leading-tight">
                    {d.shortLabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ── QUIZ ──
  if (phase === "quiz") {
    const q = questions[currentQ];
    const progressPct = ((currentQ + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen flex flex-col">
        {/* Progress bar */}
        <div className="fixed top-16 left-0 right-0 z-40">
          <div className="h-0.5 bg-white/5">
            <div
              className="h-full bg-[#00FFFF] transition-all duration-500 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Question counter */}
        <div className="pt-24 sm:pt-28 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto flex items-center justify-between mb-8">
            <span className="text-xs font-mono text-white/30 tracking-wider">
              {String(currentQ + 1).padStart(2, "0")}/{String(questions.length).padStart(2, "0")}
            </span>
            <span className="text-xs font-mono text-[#00FFFF]/40 tracking-wider">
              {q.title}
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 flex items-start justify-center px-4 sm:px-6 pb-16">
          <div
            className={`max-w-2xl w-full transition-all duration-400 ${
              transitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed mb-10 sm:mb-12 font-medium">
              {q.scenario}
            </p>

            <div className="space-y-3">
              {q.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => selectOption(i)}
                  disabled={transitioning}
                  className={`w-full text-left border p-4 sm:p-5 transition-all duration-300 group ${
                    selectedOption === i
                      ? "border-[#00FFFF]/60 bg-[#00FFFF]/10 scale-[1.01]"
                      : "border-white/10 hover:border-[#00FFFF]/30 hover:bg-white/[0.02]"
                  } ${transitioning && selectedOption !== i ? "opacity-30" : ""}`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className={`text-xs font-mono mt-0.5 shrink-0 w-6 h-6 flex items-center justify-center border transition-colors ${
                        selectedOption === i
                          ? "border-[#00FFFF] text-[#00FFFF]"
                          : "border-white/20 text-white/30 group-hover:border-[#00FFFF]/40 group-hover:text-[#00FFFF]/60"
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <p
                      className={`text-sm sm:text-base leading-relaxed transition-colors ${
                        selectedOption === i
                          ? "text-white"
                          : "text-white/60 group-hover:text-white/80"
                      }`}
                    >
                      {option.text}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── COMPUTING ──
  if (phase === "computing") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 border-2 border-[#00FFFF]/20 rotate-45 animate-pulse" />
            <div className="absolute inset-2 border border-[#00FFFF]/40 rotate-12 computing-spin" />
            <div className="absolute inset-4 bg-[#00FFFF]/10 rotate-45" />
          </div>
          <p className="text-sm tracking-[0.3em] uppercase text-[#00FFFF]/60 font-mono">
            Analyse en cours
          </p>
          <p className="text-xs text-white/20 mt-2">
            Cartographie de ton profil cognitif...
          </p>
        </div>
        <style jsx>{`
          .computing-spin {
            animation: spin 2s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(12deg); }
            to { transform: rotate(372deg); }
          }
        `}</style>
      </div>
    );
  }

  // ── RESULTS ──
  const overall = getOverallScore(scores);
  const profileName = getProfileName(overall);
  const profileDesc = getProfileDescription(overall);

  const radarData = dimensions.map((d) => ({
    label: d.shortLabel,
    value: scores[d.id] || 0,
  }));

  return (
    <div
      className={`min-h-screen transition-opacity duration-700 ${
        showResults ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero result */}
      <section className="px-4 sm:px-6 pt-24 sm:pt-28 md:pt-36 pb-12 text-center">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#00FFFF]/60 mb-4 font-mono">
          Ton profil cognitif
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none mb-3">
          <span className="text-[#00FFFF]">{profileName}</span>
        </h1>
        <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white/10 font-mono">
          {overall}/100
        </p>
      </section>

      {/* Radar chart */}
      <section className="px-4 sm:px-6 pb-12 flex justify-center">
        <RadarChart data={radarData} size={340} animated={showResults} />
      </section>

      {/* Profile description */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            {profileDesc}
          </p>
        </div>
      </section>

      {/* Dimension breakdown */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-10 text-center">
            Tes 5 <span className="text-[#00FFFF]">dimensions</span>
          </h2>
          <div className="space-y-8">
            {dimensions.map((d) => {
              const score = scores[d.id] || 0;
              const level = getScoreLevel(score);
              return (
                <div key={d.id} className="border border-white/10 p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-bold tracking-wider uppercase text-white/80">
                        {d.label}
                      </h3>
                      <p className="text-xs text-white/30 mt-1">
                        {d.description}
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <span
                        className="text-2xl font-black font-mono"
                        style={{ color: level.color }}
                      >
                        {score}
                      </span>
                      <p
                        className="text-[10px] tracking-wider uppercase font-bold"
                        style={{ color: level.color }}
                      >
                        {level.label}
                      </p>
                    </div>
                  </div>
                  {/* Score bar */}
                  <div className="h-1 bg-white/5 mb-4">
                    <div
                      className="h-full transition-all duration-1000 ease-out"
                      style={{
                        width: showResults ? `${score}%` : "0%",
                        backgroundColor: level.color,
                      }}
                    />
                  </div>
                  {/* AFEJE module link */}
                  <p className="text-xs text-[#00FFFF]/40 leading-relaxed">
                    {d.afejeModule}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What AFEJE would unlock */}
      <section className="border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20 bg-white/[0.02]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-6">
            Ce que le programme{" "}
            <span className="text-[#00FFFF]">développerait</span> chez toi
          </h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-10">
            Le test montre où tu en es. Le programme AFEJE change où tu vas. 12
            mois de travail sur ton cerveau, tes réflexes, tes angles morts — avec
            un collectif qui te challenge vraiment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dimensions
              .sort((a, b) => (scores[a.id] || 0) - (scores[b.id] || 0))
              .slice(0, 2)
              .map((d) => (
                <div
                  key={d.id}
                  className="border border-[#00FFFF]/20 p-5 text-left"
                >
                  <p className="text-xs tracking-wider uppercase text-[#00FFFF]/50 mb-2">
                    Axe de progression
                  </p>
                  <h3 className="text-sm font-bold text-white/80 mb-2">
                    {d.label}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed">
                    {d.afejeModule}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="border-t border-white/5 bg-[#00FFFF]/5 px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#00FFFF]/[0.03] blur-3xl" />
        </div>
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-4">
            Et <span className="text-[#00FFFF]">maintenant</span> ?
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8">
            Tu connais ton profil. La question c&apos;est : qu&apos;est-ce que
            t&apos;en fais ?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/rejoindre"
              className="w-full sm:w-auto px-8 py-4 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary text-center"
            >
              Rejoindre l&apos;AFEJE →
            </Link>
            <button
              onClick={shareResults}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white/60 font-medium text-sm tracking-widest uppercase hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300 text-center"
            >
              Partager mon profil
            </button>
          </div>
          <button
            onClick={restart}
            className="mt-6 text-xs text-white/20 hover:text-white/40 transition-colors tracking-wider uppercase"
          >
            Refaire le test
          </button>
        </div>
      </section>
    </div>
  );
}
