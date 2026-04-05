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
            <div className="flex gap-3 mt-4">
              {[
                { label: "Instagram", href: "https://www.instagram.com/_afeje_/", icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
                { label: "TikTok", href: "https://www.tiktok.com/@afeje_iledefrance", icon: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.81a4.84 4.84 0 0 1-1-.12z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-[#00FFFF] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white/70 mb-4">
              Contact
            </h4>
            <p className="text-sm text-white/40">Président : Rached Azer</p>
            <a
              href="mailto:azer.rached@afeje.com"
              className="text-sm text-[#00FFFF]/70 hover:text-[#00FFFF] transition-colors break-all"
            >
              azer.rached@afeje.com
            </a>
            <p className="text-xs text-white/30 mt-4">
              Chaville (92370) — Hauts-de-Seine
            </p>
            <p className="text-xs text-white/20 mt-1">
              Île-de-France · Viroflay · Paris
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} AFEJE. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="text-xs text-white/20 hover:text-[#00FFFF]/60 transition-colors"
            >
              Mentions légales
            </Link>
            <p className="text-xs text-white/20">
              Écosystème{" "}
              <span className="text-[#00FFFF]/40">AZZ&CO LABS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
