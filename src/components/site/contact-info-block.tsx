import { ReactNode } from "react";

interface ContactInfoBlockProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

export default function ContactInfoBlock({ icon, label, value, href }: ContactInfoBlockProps) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="inline-flex w-9 h-9 items-center justify-center rounded-[var(--radius)] bg-[var(--muted)] text-[var(--foreground)] flex-shrink-0">
        {icon}
      </span>
      <div>
        <div className="eyebrow">{label}</div>
        <div className="mt-1 text-[15.5px] font-medium">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:bg-[var(--muted)] rounded-[var(--radius)] -m-2 p-2 transition-colors">
        {inner}
      </a>
    );
  }
  return inner;
}
