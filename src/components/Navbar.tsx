"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/mission", label: "Mission" },
  { href: "/code", label: "Le Code" },
  { href: "/programme", label: "Programme" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-black/70 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Logo size={34} interactive />
          <span className="text-lg sm:text-xl font-bold tracking-widest text-[#00FFFF] group-hover:text-white transition-colors duration-300">
            AFEJE
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs xl:text-sm font-medium tracking-wider uppercase transition-colors duration-300 relative ${
                isActive(link.href)
                  ? "text-[#00FFFF]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#00FFFF]" />
              )}
            </Link>
          ))}
          <Link
            href="/rejoindre"
            className="ml-2 px-5 py-2 bg-[#00FFFF] text-black text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 btn-primary"
          >
            Rejoindre
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Ouvrir le menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/98 border-t border-white/10 px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 text-lg font-medium tracking-wider uppercase transition-colors border-b border-white/5 ${
                isActive(link.href)
                  ? "text-[#00FFFF]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/rejoindre"
            className="mt-4 px-6 py-4 bg-[#00FFFF] text-black text-center font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300 btn-primary"
          >
            Rejoindre la fraternité
          </Link>
        </div>
      </div>
    </nav>
  );
}
