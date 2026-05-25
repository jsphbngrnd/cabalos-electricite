import Link from "next/link";
import { ExternalLink } from "lucide-react";
import FooterContactForm from "@/components/contact/FooterContactForm";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/zones", label: "Zones d'intervention" },
  { href: "/professionnels", label: "Professionnels" },
  // { href: "/realisations", label: "Réalisations" }, // hidden
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const prestations = [
  { href: "/prestations#depannage", label: "Dépannage & recherche de panne" },
  { href: "/prestations#mise-aux-normes", label: "Mise aux normes & sécurité" },
  { href: "/prestations#renovation-complete", label: "Rénovation électrique" },
  { href: "/prestations#installation-appareils", label: "Installation d'appareils" },
  { href: "/prestations#tableau-electrique", label: "Tableau électrique" },
  { href: "/prestations#petits-travaux", label: "Prises, éclairages & petits travaux" },
  { href: "/prestations#securisation-vente", label: "Mise en location / vente" },
];

const colLabel = "text-[10px] font-semibold uppercase tracking-[0.14em] text-base-content/35 mb-5 block";
const linkCls = "text-sm text-base-content/55 hover:text-base-content transition-colors";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-100 border-t border-base-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-14 pb-8">

        {/* Main 3-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_0.75fr_0.5fr] gap-10 mb-12">

          {/* Col 1 – Brand */}
          <div>
            <Link href="/" className="font-heading font-medium text-base text-base-content block mb-3">
              Cabalos <span className="text-primary">électricité</span>
            </Link>
            <p className="text-sm text-base-content/40 leading-relaxed mb-6 max-w-[200px]">
              Électricienne artisane à Marseille. Travaux soignés, devis gratuit.
            </p>

            {/* Contact info */}
            <div className="space-y-1.5 mb-6">
              <a href="tel:+33632363563" className={linkCls + " block"}>
                06 32 36 35 63
              </a>
              <a href="mailto:cabal.emma@gmail.com" className={linkCls + " block"}>
                cabal.emma@gmail.com
              </a>
              <p className="text-xs text-base-content/30 pt-0.5">Lun – Ven : 8h – 18h</p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/cabalos_elec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-base-300 text-base-content/40 hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram Cabalos Électricité"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://les-fabricoleuses.com/fabricoleuse/emma-cabal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-base-content/35 hover:text-primary transition-colors"
              >
                Fabricoleuses
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Col 2 – Navigation + Prestations side by side */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <span className={colLabel}>Navigation</span>
              <ul className="space-y-2.5">
                {navigation.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkCls}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className={colLabel}>Prestations</span>
              <ul className="space-y-2.5">
                {prestations.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkCls}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3 – Message rapide */}
          <div>
            <span className={colLabel}>Message rapide</span>
            <FooterContactForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-base-300 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-base-content/30">
            &copy; {currentYear} Cabalos électricité — Marseille
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="text-xs text-base-content/30 hover:text-base-content/55 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-xs text-base-content/30 hover:text-base-content/55 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
