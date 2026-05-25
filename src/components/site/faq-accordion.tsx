"use client";

import { useState } from "react";
import { FAQ } from "@/lib/content";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div>
      <div className="h-px bg-[var(--border)]" />
      {FAQ.map(([q, a], i) => (
        <div key={i} className="border-b border-[var(--border)]">
          <button
            onClick={() => setOpen((o) => (o === i ? -1 : i))}
            className="w-full py-5 lg:py-6 flex items-start justify-between gap-6 text-left focus-ring rounded"
          >
            <div className="flex items-start gap-5">
              <span className="font-mono num text-[13px] text-[var(--muted-foreground)] mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[18px] lg:text-[20px] font-medium">{q}</span>
            </div>
            <span
              className="font-mono text-[20px] leading-none mt-1 text-[var(--muted-foreground)] flex-shrink-0"
              style={{
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.25s ease",
                display: "inline-block",
              }}
            >
              +
            </span>
          </button>

          {/* Smooth expand/collapse using CSS grid rows trick */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: open === i ? "1fr" : "0fr",
              transition: "grid-template-rows 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <p className="pb-5 lg:pl-12 text-[15.5px] leading-[1.55] text-[var(--muted-foreground)] max-w-[68ch]">
                {a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
