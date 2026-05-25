import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import SectionHead from "@/components/site/section-head";
import CTABanner from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Électricienne pour syndics – Marseille",
  description:
    "Emma Cabal intervient pour les syndics de copropriété à Marseille : parties communes, diagnostic RAAT, mise aux normes, dépannage réactif.",
  alternates: { canonical: "/professionnels/syndics" },
  openGraph: {
    title: "Électricienne pour syndics de copropriété – Cabalos Électricité",
    description:
      "Parties communes, diagnostic RAAT, mise aux normes, dépannage. Une interlocutrice fiable pour vos copropriétés à Marseille.",
    url: "/professionnels/syndics",
    images: [{ url: "/OpenGraph.png", width: 1200, height: 630, alt: "Cabalos Électricité" }],
  },
};

const PRESTATIONS = [
  ["Diagnostic des parties communes", "Audit de l'installation électrique des parties communes : tableau général, éclairage de sécurité, interphonie, ascenseur. Rapport écrit avec classement des priorités."],
  ["Mise aux normes RAAT", "Mise en conformité des tableaux et installations selon les exigences réglementaires applicables aux copropriétés. Attestation fournie."],
  ["Éclairage des parties communes", "Remplacement des luminaires obsolètes par des équipements LED avec détection de présence. Réduction de la facture énergétique de la copropriété."],
  ["Dépannage réactif", "Intervention rapide sur panne d'éclairage commun, interphonie, digicode ou tableau général. Rapport d'intervention systématique pour votre archivage."],
  ["Suivi pluriannuel", "Proposition de plans de maintenance préventive sur 3 ans, permettant de budgétiser les travaux électriques dans le plan prévisionnel de travaux (PPT)."],
  ["Documentation et reporting", "Chaque intervention est documentée : bon d'intervention, photos, rapport technique — le tout transmis au format numérique pour votre GED."],
];

const FAQ = [
  ["Comment déclencher une intervention d'urgence ?", "En cas de panne affectant les parties communes, Emma est joignable par téléphone aux horaires habituels. Les urgences réelles (sécurité des occupants) sont traitées le jour même. Un devis d'urgence est établi avant intervention sauf danger immédiat."],
  ["Peut-elle faire des devis pour une AG ?", "Oui. Emma peut fournir des devis détaillés à soumettre en assemblée générale, avec descriptif des travaux, planning prévisionnel et justification technique. Elle peut également être présente pour répondre aux questions des copropriétaires si nécessaire."],
];

export default function SyndicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Professionnels · Syndics de copropriété"
        title="Électricienne référencée pour syndics de copropriété à Marseille."
        intro="Parties communes, diagnostic RAAT, mise aux normes, dépannage. Une interlocutrice réactive avec reporting systématique."
      />

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="Prestations" title="Ce qu'Emma propose aux syndics" />
          <div className="h-px bg-[var(--border)]" />
          {PRESTATIONS.map(([k, v], i) => (
            <div key={k} className="grid grid-cols-12 gap-6 lg:gap-10 py-7 lg:py-9 items-start border-b border-[var(--border)]">
              <div className="col-span-1 font-mono num text-[14px] text-[var(--muted-foreground)] pt-1">0{i + 1}</div>
              <h3 className="col-span-11 lg:col-span-4 font-display text-[20px] lg:text-[22px] font-medium leading-[1.15]">{k}</h3>
              <p className="col-start-2 col-span-11 lg:col-start-auto lg:col-span-7 text-[15.5px] leading-[1.55] text-[var(--muted-foreground)]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <SectionHead n="FAQ" title="Questions fréquentes" />
          <div className="h-px bg-[var(--border)]" />
          {FAQ.map(([q, a]) => (
            <div key={q} className="grid grid-cols-12 gap-6 lg:gap-10 py-7 lg:py-9 border-b border-[var(--border)]">
              <h3 className="col-span-12 lg:col-span-5 font-display text-[17px] lg:text-[19px] font-medium leading-[1.25]">{q}</h3>
              <p className="col-span-12 lg:col-span-7 text-[15px] leading-[1.6] text-[var(--muted-foreground)]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <Link href="/professionnels" className="text-[13px] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
            ← Tous les profils professionnels
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
