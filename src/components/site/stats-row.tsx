import { STATS } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function StatsRow() {
  return (
    <section className="px-6 lg:px-10 pb-16 lg:pb-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="h-px bg-[var(--border)]" />
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border)]">
          {STATS.map(([n, l], i) => (
            <div
              key={l}
              className={cn(
                "py-7 lg:py-9 px-2 lg:px-6",
                i === 0 && "lg:pl-0",
                i >= 2 && "border-t lg:border-t-0 border-[var(--border)]"
              )}
            >
              <div
                className="font-display num text-[34px] lg:text-[60px] leading-none font-medium"
                style={{ color: i === 0 ? "var(--primary)" : "var(--foreground)" }}
              >
                {n}
              </div>
              <div className="mt-3 text-[12.5px] uppercase tracking-[.16em] text-[var(--muted-foreground)]">
                {l}
              </div>
            </div>
          ))}
        </div>
        <div className="h-px bg-[var(--border)]" />
      </div>
    </section>
  );
}
