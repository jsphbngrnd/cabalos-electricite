import Link from "next/link";

interface ServiceRowProps {
  n: string;
  title: string;
  description: string;
  price?: string;
  slug?: string;
}

export default function ServiceRow({ n, title, description, price, slug }: ServiceRowProps) {
  const inner = (
    <div className="row grid grid-cols-12 gap-4 lg:gap-10 py-6 lg:py-7 items-start border-b border-[var(--border)]">
      <div className="col-span-1">
        <span className="font-mono num text-[14px] text-[var(--muted-foreground)]">{n}</span>
      </div>
      <h3 className="col-span-11 lg:col-span-4 font-display text-[19px] lg:text-[22px] font-medium leading-snug">
        {title}
      </h3>
      <div className="col-start-2 col-span-11 lg:col-start-auto lg:col-span-5 text-[15px] leading-[1.55] text-[var(--muted-foreground)] max-w-[52ch]">
        {description}
        {price && (
          <div className="mt-1.5 font-mono text-[12px] text-[var(--foreground)]">{price}</div>
        )}
      </div>
      <div className="col-start-2 col-span-11 lg:col-start-auto lg:col-span-2 lg:text-right text-[13.5px]">
        <span className="link font-medium inline-flex items-center gap-1.5">
          Détail{" "}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/prestations#${slug}`} className="block">
        {inner}
      </Link>
    );
  }
  return inner;
}
