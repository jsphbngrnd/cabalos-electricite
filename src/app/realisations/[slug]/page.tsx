import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRealisationBySlug, getRealisations } from "@/lib/notion";
import CTABanner from "@/components/ui/CTABanner";
import { Reveal } from "@/components/animations/ScrollReveal";
import { MapPin, Tag, Calendar, ChevronRight, ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const realisations = await getRealisations();
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const realisation = await getRealisationBySlug(slug);

  if (!realisation) {
    return { title: "Réalisation introuvable" };
  }

  return {
    title: realisation.title,
    description:
      realisation.description ||
      `Découvrez cette réalisation de Cabalos électricité à ${realisation.location} : ${realisation.category}.`,
    alternates: { canonical: `/realisations/${slug}` },
    openGraph: {
      title: realisation.title,
      description: realisation.description,
      url: `/realisations/${slug}`,
      images: realisation.image ? [{ url: realisation.image }] : [],
    },
  };
}

export default async function RealisationPage({ params }: Props) {
  const { slug } = await params;
  const realisation = await getRealisationBySlug(slug);

  if (!realisation) {
    notFound();
  }

  const formattedDate = realisation.date
    ? new Date(realisation.date).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-base-200 border-b border-base-300 py-3 px-4">
        <div className="breadcrumbs text-sm mx-auto max-w-5xl">
          <ul>
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/realisations" className="hover:text-primary transition-colors">
                Réalisations
              </Link>
            </li>
            <li>
              <span className="text-base-content font-medium truncate max-w-xs">
                {realisation.title}
              </span>
            </li>
          </ul>
        </div>
      </nav>

      <article className="py-12 bg-base-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Reveal className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="badge badge-secondary gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                {realisation.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-base-content/50 text-sm">
                <MapPin className="w-3.5 h-3.5" />
                {realisation.location}
              </span>
              {formattedDate && (
                <span className="inline-flex items-center gap-1.5 text-base-content/50 text-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  {formattedDate}
                </span>
              )}
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-base-content mb-4">
              {realisation.title}
            </h1>
            {realisation.description && (
              <p className="text-lg text-base-content/70 leading-relaxed">
                {realisation.description}
              </p>
            )}
          </Reveal>

          {/* Main image */}
          {realisation.image ? (
            <div className="aspect-video bg-base-200 overflow-hidden mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={realisation.image}
                alt={realisation.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-base-200 to-base-300 mb-8 flex items-center justify-center">
              <span className="text-base-content/30">Photo à venir</span>
            </div>
          )}

          {/* Content */}
          {realisation.content && (
            <Reveal>
              <div
                className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-base-content prose-headings:font-semibold prose-a:text-primary mb-12"
                dangerouslySetInnerHTML={{ __html: realisation.content }}
              />
            </Reveal>
          )}

          {/* Gallery */}
          {realisation.gallery && realisation.gallery.length > 0 && (
            <div className="mt-8">
              <h2 className="font-heading text-xl font-semibold text-base-content mb-4">
                Galerie photos
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {realisation.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-base-200 overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${realisation.title} – photo ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-10 pt-8 border-t border-base-200">
            <Link
              href="/realisations"
              className="btn btn-ghost btn-sm text-primary gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Retour aux réalisations
            </Link>
          </div>
        </div>
      </article>

      <CTABanner
        title="Un projet similaire en tête ?"
        subtitle="Contactez-nous pour un devis gratuit et personnalisé."
        ctaText="Demander un devis"
        ctaHref="/contact"
        variant="primary"
      />
    </>
  );
}
