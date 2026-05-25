interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
}

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="px-6 lg:px-10 pt-14 lg:pt-20 pb-10 lg:pb-14">
      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-6 lg:gap-10">
        <div className="col-span-12 lg:col-span-8">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className="mt-4 text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.04] font-medium tracking-[-.018em] text-balance">
            {title}
          </h1>
        </div>
        {intro && (
          <p className="col-span-12 lg:col-span-4 lg:pl-6 self-end text-[15.5px] leading-[1.55] text-[var(--muted-foreground)] max-w-[44ch] text-pretty">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
