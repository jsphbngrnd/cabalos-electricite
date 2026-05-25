import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  slug: string;
}

export default function BlogPostCard({ title, excerpt, category, date, readTime, slug }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block border-b border-[var(--border)] py-7 lg:py-8 grid grid-cols-12 gap-4 lg:gap-8 items-start hover:bg-[var(--card)] transition-colors -mx-4 px-4 rounded-[var(--radius)]"
    >
      <div className="col-span-12 lg:col-span-3 aspect-[4/3] photo-ph rounded-[var(--radius)] border border-[var(--border)]" />
      <div className="col-span-12 lg:col-span-7">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11.5px] font-medium tracking-tight bg-[var(--primary)] text-[var(--primary-foreground)]">
            {category}
          </span>
          <span className="font-mono num text-[11.5px] text-[var(--muted-foreground)]">
            {date} · {readTime} min
          </span>
        </div>
        <h3 className="text-[22px] lg:text-[26px] font-medium tracking-[-.008em] leading-[1.15] mb-2">{title}</h3>
        <p className="text-[15px] leading-[1.55] text-[var(--muted-foreground)] max-w-[64ch]">{excerpt}</p>
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
  );
}
