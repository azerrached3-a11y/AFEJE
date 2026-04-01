import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <Logo size={60} interactive />
      <h1 className="text-5xl sm:text-7xl font-black mt-8 mb-4">
        4<span className="text-[#00FFFF]">0</span>4
      </h1>
      <p className="text-white/60 text-base sm:text-lg mb-2 max-w-md">
        Cette page n&apos;existe pas — ou plus.
      </p>
      <p className="text-white/30 text-sm mb-8">
        Peut-être une faute de frappe ? Pas de souci, on te ramène.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="px-6 py-3 bg-[#00FFFF] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 btn-primary"
        >
          Retour à l&apos;accueil →
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-white/20 text-white/60 font-medium text-sm tracking-widest uppercase hover:border-[#00FFFF]/50 hover:text-[#00FFFF] transition-all duration-300"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
