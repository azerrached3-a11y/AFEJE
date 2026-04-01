import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={32} interactive />
              <h3 className="text-xl font-bold tracking-widest text-[#00FFFF]">
                AFEJE
              </h3>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Association Française d&apos;Encadrement
              <br />
              des Jeunes Entrepreneurs
            </p>
            <p className="text-xs text-white/30 mt-2">N° W923012377</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white/70 mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/mission", label: "Mission" },
                { href: "/code", label: "Le Code" },
                { href: "/programme", label: "Programme" },
                { href: "/impact", label: "Impact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-[#00FFFF] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Rejoindre */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white/70 mb-4">
              Nous rejoindre
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/rejoindre"
                className="text-sm text-white/40 hover:text-[#00FFFF] transition-colors"
              >
                Candidater
              </Link>
              <Link
                href="/contact"
                className="text-sm text-white/40 hover:text-[#00FFFF] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white/70 mb-4">
              Contact
            </h4>
            <p className="text-sm text-white/40">Président : Rached Azer</p>
            <a
              href="mailto:rached.azer@azzcolabs.business"
              className="text-sm text-[#00FFFF]/70 hover:text-[#00FFFF] transition-colors break-all"
            >
              rached.azer@azzcolabs.business
            </a>
            <p className="text-xs text-white/30 mt-4">
              Préfecture des Hauts-de-Seine
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} AFEJE. Tous droits réservés.
          </p>
          <p className="text-xs text-white/20">
            Écosystème{" "}
            <span className="text-[#00FFFF]/40">AZZ&CO LABS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
