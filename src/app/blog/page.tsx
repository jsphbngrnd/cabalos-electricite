import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/notion";
import PageHeader from "@/components/site/page-header";
import CTABanner from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Blog Électricité & Conseils",
  description:
    "Conseils, réglementation et actualités sur l'électricité à Marseille. Articles rédigés par votre électricienne : normes NF C 15-100, économies d'énergie, sécurité électrique.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog · Ressources"
        title="Conseils & actualités électricité."
        intro="Articles rédigés par Emma Cabal : réglementation, NF C 15-100, bonnes pratiques et retours de chantier."
      />

      <section className="px-6 lg:px-10 pb-16 lg:pb-24">
        <div className="max-w-[1440px] mx-auto">
          {posts.length === 0 ? (
            <div className="py-16 text-center border border-dashed border-[var(--border)] rounded-[var(--radius)]">
              <p className="text-[var(--muted-foreground)]">Aucun article disponible pour le moment.</p>
            </div>
          ) : (
            <div className="-mt-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block border-b border-[var(--border)] py-7 lg:py-8 grid grid-cols-12 gap-4 lg:gap-8 items-start hover:bg-[var(--card)] transition-colors -mx-4 px-4 rounded-[var(--radius)]"
                >
                  <div className="col-span-12 lg:col-span-3 aspect-[4/3] photo-ph rounded-[var(--radius)] border border-[var(--border)]" />
                  <div className="col-span-12 lg:col-span-7">
                    <div className="flex items-center gap-3 mb-2">
                      {post.category && (
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11.5px] font-medium tracking-tight bg-[var(--primary)] text-[var(--primary-foreground)]">
                          {post.category}
                        </span>
                      )}
                      {post.date && (
                        <span className="font-mono num text-[11.5px] text-[var(--muted-foreground)]">
                          {new Date(post.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                          {post.readTime ? ` · ${post.readTime} min` : ""}
                        </span>
                      )}
                    </div>
                    <h2 className="text-[22px] lg:text-[26px] font-medium tracking-[-.008em] leading-[1.15] mb-2">
                      {post.title}
                    </h2>
                    <p className="text-[15px] leading-[1.55] text-[var(--muted-foreground)] max-w-[64ch]">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-2 lg:text-right text-[13.5px]">
                    <span className="link font-medium inline-flex items-center gap-1.5">
                      Lire{" "}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
