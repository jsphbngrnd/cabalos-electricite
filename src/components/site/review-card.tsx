interface ReviewCardProps {
  body: string;
  who: string;
  role: string;
  accent?: boolean;
}

export default function ReviewCard({ body, who, role, accent }: ReviewCardProps) {
  return (
    <article
      className="p-7 lg:p-9 rounded-[var(--radius)] border"
      style={{
        background:   accent ? "var(--primary)" : "var(--card)",
        color:        accent ? "var(--primary-foreground)" : "var(--foreground)",
        borderColor:  accent ? "var(--primary)" : "var(--border)",
      }}
    >
      <span
        className="font-display block text-[56px] leading-none mb-1"
        style={{ color: accent ? "rgba(255,255,255,.35)" : "var(--border)", lineHeight: 1 }}
        aria-hidden
      >
        "
      </span>
      <p className="text-[16px] lg:text-[17.5px] leading-[1.5] text-pretty">
        {body}
      </p>
      <div
        className="mt-6 pt-4 border-t flex items-center justify-between text-[13px]"
        style={{ borderColor: accent ? "rgba(255,255,255,.25)" : "var(--border)" }}
      >
        <div className="leading-tight">
          <div className="font-medium">{who}</div>
          <div className="opacity-70">{role}</div>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[.18em] opacity-70">★★★★★</div>
      </div>
    </article>
  );
}
