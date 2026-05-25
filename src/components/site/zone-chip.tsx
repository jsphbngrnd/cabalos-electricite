import { cn } from "@/lib/utils";

interface ZoneChipProps {
  code: string;
  name?: string;
  active?: boolean;
}

export default function ZoneChip({ code, name, active }: ZoneChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[12.5px]",
        active
          ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]"
          : "bg-[var(--card)] border-[var(--border)] hover:border-[var(--foreground)] transition-colors cursor-pointer"
      )}
    >
      <span className="font-mono num opacity-80">{code}</span>
      {name && <span>{name}</span>}
    </span>
  );
}
