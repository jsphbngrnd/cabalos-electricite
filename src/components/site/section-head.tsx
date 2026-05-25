import { cn } from "@/lib/utils";

interface SectionHeadProps {
  n?: string;
  title: string;
  intro?: string;
  className?: string;
}

export default function SectionHead({ n, title, intro, className }: SectionHeadProps) {
  return (
    <div className={cn("grid grid-cols-12 gap-6 lg:gap-10 mb-10", className)}>
      <div className="col-span-12 lg:col-span-3">
        {n && <div className="eyebrow">{n}</div>}
        <h2 className="mt-2 text-[28px] lg:text-[32px] font-medium tracking-[-.012em]">{title}</h2>
      </div>
      {intro && (
        <p className="col-span-12 lg:col-span-9 lg:pl-10 text-[16.5px] leading-[1.55] text-[var(--muted-foreground)] max-w-[60ch] text-pretty">
          {intro}
        </p>
      )}
    </div>
  );
}
