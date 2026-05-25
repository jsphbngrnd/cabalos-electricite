import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/notion";
import CTABanner from "@/components/ui/CTABanner";
import { Reveal } from "@/components/animations/ScrollReveal";
import { Calendar, Clock, Tag, ArrowRight, ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article introuvable" };
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Emma Cabal",
      url: "https://cabalos-electricite.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Cabalos électricité",
      logo: {
        "@type": "ImageObject",
        url: "https://cabalos-electricite.fr/logo.png",
      },
    },
    image: post.image || "https://cabalos-electricite.fr/og-image.jpg",
    url: `https://cabalos-electricite.fr/blog/${slug}`,
  };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : [],
    },
    other: {
      "script:ld+json": JSON.stringify(articleSchema),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-base-200 border-b border-base-300 py-3 px-4">
        <div className="breadcrumbs text-sm mx-auto max-w-6xl">
          <ul>
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <span className="text-base-content font-medium truncate max-w-xs">
                {post.title}
              </span>
            </li>
          </ul>
        </div>
      </nav>

      <div className="py-12 bg-base-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <article className="flex-1 min-w-0">
              {/* Meta */}
              <Reveal>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                {post.category && (
                  <span className="badge badge-secondary gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    {post.category}
                  </span>
                )}
                {formattedDate && (
                  <span className="flex items-center gap-1.5 text-base-content/50 text-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    {formattedDate}
                  </span>
                )}
                {post.readTime && (
                  <span className="flex items-center gap-1.5 text-base-content/50 text-sm">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} de lecture
                  </span>
                )}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-base-content mb-5 leading-tight">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-lg text-base-content/70 leading-relaxed mb-6 border-l-4 border-primary pl-4">
                  {post.excerpt}
                </p>
              )}
              </Reveal>

              {/* Main image — only rendered when a real src exists */}
              {post.image && (
                <div className="aspect-video bg-base-200 overflow-hidden mb-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              {post.content && (
                <Reveal>
                  <div
                    className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-base-content prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-base-content/70 prose-p:leading-relaxed prose-p:mb-5 prose-a:text-primary prose-li:text-base-content/70 prose-li:leading-relaxed prose-strong:text-base-content prose-ul:my-5 prose-ol:my-5"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </Reveal>
              )}

              {/* Back */}
              <div className="mt-10 pt-8 border-t border-base-200">
                <Link
                  href="/blog"
                  className="btn btn-ghost btn-sm text-primary gap-1"
                >
                  <ArrowLeft className="w-4 h-4" /> Retour au blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0 space-y-8">
              {/* CTA contact */}
              <div className="card bg-primary text-primary-content shadow-sm">
                <div className="card-body">
                  <h3 className="font-heading card-title text-lg">
                    Besoin d&apos;un devis ?
                  </h3>
                  <p className="text-primary-content/80 text-sm">
                    Électricienne à Marseille, nous intervenons rapidement pour
                    tous vos travaux électriques.
                  </p>
                  <div className="card-actions mt-2">
                    <Link
                      href="/contact"
                      className="btn btn-outline border-white text-white hover:bg-white hover:text-primary w-full gap-2"
                    >
                      Demander un devis
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Recent posts */}
              {recentPosts.length > 0 && (
                <div>
                  <h3 className="font-heading font-semibold text-base-content text-base mb-4">
                    Articles récents
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((p, index) => (
                      <Link
                        key={p.id}
                        href={`/blog/${p.slug}`}
                        className="flex gap-3 group"
                      >
                        <div className="w-16 h-16 bg-base-200 flex-shrink-0 overflow-hidden rounded-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.image || `/blog/cover-${(index % 3) + 1}.svg`}
                            alt={p.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-base-content group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {p.title}
                          </p>
                          {p.date && (
                            <p className="text-xs text-base-content/40 mt-1">
                              {new Date(p.date).toLocaleDateString("fr-FR", {
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>

      <CTABanner
        title="Prêt à passer à l'action ?"
        subtitle="Contactez-nous pour un devis gratuit et personnalisé à Marseille."
        ctaText="Nous contacter"
        ctaHref="/contact"
        variant="primary"
      />
    </>
  );
}
