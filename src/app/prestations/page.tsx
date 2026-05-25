import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, TARIFS, FAQ } from "@/lib/content";
import JsonLd from "@/components/seo/json-ld";
import { organizationSchema, faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schemas";
import PageHeader from "@/components/site/page-header";
import SectionHead from "@/components/site/section-head";
import FaqAccordion from "@/components/site/faq-accordion";
import CTABanner from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Prestations électriques à Marseille",
  description:
    "Dépannage, mise aux normes, rénovation, installation d'appareils, tableau électrique — 8 prestations à Marseille et dans un rayon de 30 km. Devis gratuit.",
  alternates: { canonical: "/prestations" },
};

export default function PrestationsPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema(FAQ)} />
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Prestations", url: "/prestations" }])} />
      {SERVICES.map((s) => (
        <JsonLd key={s.slug} data={serviceSchema(s.t, s.d)} />
      ))}
      <PageHeader
        eyebrow="Page · Prestations"
        title="Huit prestations couvrant tous les travaux électriques courants."
        intro="Pour les particuliers comme pour les professionnels, à Marseille et dans un rayon de 30 km. Devis gratuit après diagnostic sur place."
      />

      {/* Services list */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="h-px bg-[var(--border)]" />
          {SERVICES.map((s) => (
            <div
              key={s.n}
              id={s.slug}
              className="grid grid-cols-12 gap-4 lg:gap-10 py-8 lg:py-10 border-b border-[var(--border)]"
            >
              {/* Num */}
              <div className="col-span-2 lg:col-span-1">
                <span className="font-mono num text-[14px] text-[var(--muted-foreground)] pt-1 block">{s.n}</span>
              </div>

              {/* Title + desc */}
              <div className="col-span-10 lg:col-span-4">
                <h3 className="font-display text-[19px] lg:text-[22px] font-medium leading-snug mb-3">
                  {s.t}
                </h3>
                <p className="text-[14.5px] leading-[1.55] text-[var(--muted-foreground)]">{s.d}</p>
                {s.price && (
                  <div className="mt-3 inline-flex items-center gap-2 border border-[var(--border)] rounded px-3 py-1.5">
                    <span className="font-mono num text-[12px] text-[var(--foreground)]">{s.price}</span>
                  </div>
                )}
              </div>

              {/* Details + conclusion */}
              <div className="col-span-12 lg:col-span-5">
                {s.details && s.details.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-[var(--muted-foreground)]">
                        <span
                          className="mt-[6px] inline-block w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: "var(--primary)" }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
                {s.conclusion && (
                  <p className="text-[14px] leading-[1.5] font-medium">{s.conclusion}</p>
                )}
              </div>

              {/* CTA */}
              <div className="col-span-12 lg:col-span-2 lg:text-right text-[13.5px] lg:pt-1">
                <Link href="/contact" className="link font-medium inline-flex items-center gap-1.5">
                  Devis
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tarifs dépannage */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="Tarifs" title="Dépannage — grille horaire" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden">
            {TARIFS.map((t, i) => (
              <div
                key={t.label}
                className="bg-[var(--card)] p-6 lg:p-7"
                style={i === 0 ? { background: "var(--primary)", color: "var(--primary-foreground)" } : {}}
              >
                <div
                  className="font-mono text-[11px] tracking-widest uppercase mb-4"
                  style={i === 0 ? { opacity: 0.75 } : { color: "var(--muted-foreground)" }}
                >
                  {t.detail}
                </div>
                <div className="text-[24px] lg:text-[28px] font-medium tracking-[-.015em] mb-1">{t.price}</div>
                <div className="text-[13px] font-medium mb-3">{t.label}</div>
                <p
                  className="text-[13px] leading-[1.55]"
                  style={i === 0 ? { opacity: 0.8 } : { color: "var(--muted-foreground)" }}
                >
                  {t.note}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-[var(--muted-foreground)]">
            Pour les travaux (rénovation, tableau, installation) — devis détaillé après diagnostic sur place, gratuit et sans engagement.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="FAQ" title="Questions fréquentes" />
          <FaqAccordion />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
