import type { Metadata } from "next";
import PageHeader from "@/components/site/page-header";

export const metadata: Metadata = {
  title: "Mentions légales — Cabalos Électricité",
  description: "Mentions légales du site cabalos-electricite.fr — éditeur, hébergeur, propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
};

const SECTIONS = [
  {
    title: "Éditeur du site",
    content: [
      "Le site cabalos-electricite.fr est édité par :",
      "Emma Cabal — Cabalos Électricité",
      "Micro-entreprise immatriculée au Registre National des Entreprises",
      "Siège social : Marseille (13016)",
      "Téléphone : 06 32 36 35 63",
      "Email : cabal.emma@gmail.com",
      "Activité : Électricienne indépendante (code APE 4321A — Travaux d'installation électrique)",
      "Assurance Responsabilité Civile Professionnelle en vigueur",
    ],
  },
  {
    title: "Directrice de la publication",
    content: ["Emma Cabal"],
  },
  {
    title: "Hébergeur",
    content: [
      "Vercel Inc.",
      "340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis",
      "Site : vercel.com",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble du contenu de ce site (textes, photographies, logo, charte graphique) est la propriété exclusive de Cabalos Électricité, sauf mention contraire.",
      "Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est interdite sans l'accord écrit préalable de l'éditeur.",
    ],
  },
  {
    title: "Responsabilité",
    content: [
      "Les informations publiées sur ce site sont fournies à titre indicatif. Cabalos Électricité s'efforce de maintenir le site à jour mais ne saurait être tenue responsable des erreurs ou omissions.",
      "Des liens vers des sites tiers peuvent être présents. Cabalos Électricité n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
    ],
  },
  {
    title: "Droit applicable",
    content: [
      "Le présent site est soumis au droit français. Tout litige relatif à son utilisation sera soumis à la compétence exclusive des tribunaux français.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Légal · Mentions légales"
        title="Mentions légales"
        intro="Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique."
      />

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[72ch] flex flex-col gap-12">
            {SECTIONS.map(({ title, content }) => (
              <div key={title}>
                <h2 className="text-[18px] lg:text-[20px] font-medium mb-4 pb-3 border-b border-[var(--border)]">
                  {title}
                </h2>
                <ul className="flex flex-col gap-2">
                  {content.map((line, i) => (
                    <li key={i} className="text-[15px] leading-[1.6] text-[var(--muted-foreground)]">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
