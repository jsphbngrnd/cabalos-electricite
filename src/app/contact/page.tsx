import type { Metadata } from "next";
import { ZONES_ARR, ZONES_VILLES } from "@/lib/content";
import PageHeader from "@/components/site/page-header";
import ContactForm from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact — Devis gratuit",
  description:
    "Contactez Emma Cabal, électricienne à Marseille. Devis gratuit après diagnostic sur place. Réponse sous 48 heures.",
  alternates: { canonical: "/contact" },
};

const CONTACT_INFO = [
  { label: "Téléphone", value: "06 · 32 · 36 · 35 · 63", href: "tel:0632363563" },
  { label: "Email", value: "cabal.emma@gmail.com", href: "mailto:cabal.emma@gmail.com" },
  { label: "Atelier", value: "Marseille — 13016" },
  { label: "Horaires", value: "Lun → Ven · 8h–18h" },
];

export default function ContactPage() {
  const displayZones = [...ZONES_ARR.slice(0, 8), ...ZONES_VILLES.slice(0, 4)];

  return (
    <>
      <PageHeader
        eyebrow="Page · Contact"
        title="Décrivez le chantier en quelques lignes."
        intro="Réponse sous 48 heures (les urgences sont traitées le jour même au téléphone). Diagnostic sur place gratuit, devis détaillé envoyé par mail."
      />

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-[var(--border)] flex flex-col gap-8 pt-2">
            {/* Contact info */}
            <div className="grid sm:grid-cols-2 gap-6">
              {CONTACT_INFO.map(({ label, value, href }) => (
                <div key={label}>
                  <div className="eyebrow">{label}</div>
                  {href ? (
                    <a href={href} className="mt-2 block text-[16px] hover:text-[var(--primary)] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <div className="mt-2 text-[16px]">{value}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <div className="eyebrow mb-3">Réseaux</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Instagram @cabalos_elec", href: "https://instagram.com/cabalos_elec" },
                  { label: "Annuaire Fabricoleuses", href: "https://les-fabricoleuses.com/fabricoleuse/emma-cabal/" },
                  { label: "Google Reviews", href: "https://maps.google.com/?q=Cabalos+Electricite" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] px-3 py-1.5 border border-[var(--border)] rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:border-[var(--foreground)] transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div>
              <div className="eyebrow mb-3">Zone d&rsquo;intervention</div>
              <div className="aspect-[4/3] photo-ph rounded-[var(--radius)] border border-[var(--border)] flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1451.6!2d5.3820843!3d43.2960144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f557dacad7728b%3A0xb079eed899b999ba!2sCabalos%20%C3%89lectricit%C3%A9!5e0!3m2!1sfr!2sfr!4v1748000000000!5m2!1sfr!2sfr"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zone d'intervention Cabalos Électricité"
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {displayZones.map((z) => (
                  <span
                    key={z}
                    className="text-[12px] px-2 py-1 border border-[var(--border)] rounded font-mono"
                  >
                    {z}
                  </span>
                ))}
                <span className="text-[12px] px-2 py-1 text-[var(--muted-foreground)] font-mono">
                  + {ZONES_ARR.length + ZONES_VILLES.length - displayZones.length} autres
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
