"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/prestations", label: "Prestations" },
  { href: "/zones", label: "Zones" },
  { href: "/professionnels", label: "Professionnels" },
  // { href: "/realisations", label: "Réalisations" }, // hidden
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/95 backdrop-blur-sm border-b border-base-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="font-heading font-medium text-base text-base-content shrink-0">
          Cabalos <span className="text-primary">électricité</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-150 ${
                pathname === link.href
                  ? "text-base-content"
                  : "text-base-content/45 hover:text-base-content"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/contact"
            className="hidden md:inline-flex btn btn-primary btn-sm px-4"
          >
            Devis gratuit
          </Link>
          <button
            className="md:hidden text-base-content/60 hover:text-base-content transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-base-300 bg-base-100">
          <nav className="flex flex-col px-6 py-5 gap-4">
            <Link href="/" className="text-sm text-base-content/60 hover:text-base-content">Accueil</Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href ? "text-base-content" : "text-base-content/60 hover:text-base-content"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="text-sm text-base-content/60 hover:text-base-content">Contact</Link>
            <Link href="/contact" className="btn btn-primary btn-sm mt-1">
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
