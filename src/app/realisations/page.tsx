import type { Metadata } from "next";
import Link from "next/link";
import { getRealisations } from "@/lib/notion";
import PageHeader from "@/components/site/page-header";
import CTABanner from "@/components/site/cta-banner";
import ProjectCard from "@/components/site/project-card";

export const metadata: Metadata = {
  title: "Réalisations à Marseille",
  description:
    "Découvrez les réalisations de Cabalos électricité à Marseille : rénovations électriques, tableaux, bornes IRVE, éclairage LED. Photos et détails de chantiers.",
  alternates: { canonical: "/realisations" },
};

export default async function RealisationsPage() {
  const realisations = await getRealisations();

  return (
    <>
      <PageHeader
        eyebrow="Portfolio · Réalisations"
        title="Quelques chantiers réalisés à Marseille."
        intro="Rénovations complètes, tableaux électriques, bornes IRVE, éclairages — chaque projet livré propre et documenté."
      />

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          {realisations.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-[var(--border)] rounded-[var(--radius)]">
              <p className="text-[var(--muted-foreground)]">Aucune réalisation disponible pour le moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {realisations.map((real) => (
                <ProjectCard
                  key={real.id}
                  title={real.title}
                  category={real.category}
                  location={real.location}
                  date={real.date
                    ? new Date(real.date).toLocaleDateString("fr-FR", { month: "2-digit", year: "numeric" }).replace("/", ".")
                    : ""}
                  slug={real.slug}
                  coverImage={real.image}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
