import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  date: string;
  slug: string;
  coverImage?: string;
}

export default function ProjectCard({ title, category, location, date, slug, coverImage }: ProjectCardProps) {
  return (
    <Link href={`/realisations/${slug}`} className="group block">
      <div className="aspect-[4/3] rounded-[var(--radius)] border border-[var(--border)] mb-4 overflow-hidden relative bg-[var(--muted)]">
        {coverImage ? (
          <Image src={coverImage} alt={title} fill className="object-cover" />
        ) : (
          <div className="photo-ph w-full h-full" />
        )}
        <span className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[var(--background)] border border-[var(--border)] inline-flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      <div className="flex items-center gap-2 mb-1.5">
        <span className="inline-flex items-center rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[11.5px] font-medium tracking-tight">
          {category}
        </span>
        <span className="font-mono num text-[11.5px] text-[var(--muted-foreground)]">{date}</span>
      </div>
      <h3 className="font-display text-[18px] font-medium">{title}</h3>
      <p className="mt-1 text-[13.5px] text-[var(--muted-foreground)]">{location}</p>
    </Link>
  );
}
