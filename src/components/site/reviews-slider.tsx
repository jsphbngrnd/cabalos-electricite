"use client";

import { useState, useEffect } from "react";
import { REVIEWS } from "@/lib/content";
import ReviewCard from "./review-card";

const PER_PAGE = 2;
const INTERVAL = 5000;

function ArrowBtn({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "prev" ? "Précédent" : "Suivant"}
      className="w-9 h-9 flex items-center justify-center border border-[var(--border)] rounded-[var(--radius)] hover:bg-[var(--muted)] transition-colors"
    >
      {dir === "prev" ? (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}

export default function ReviewsSlider() {
  const total = REVIEWS.length;
  const pages = Math.ceil(total / PER_PAGE);
  const [page, setPage] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = (p: number) => {
    setPage(((p % pages) + pages) % pages);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    const id = setInterval(() => goTo(page + 1), INTERVAL);
    return () => clearInterval(id);
  }, [page]);

  const i0 = (page * PER_PAGE) % total;
  const i1 = (i0 + 1) % total;
  const visible = [REVIEWS[i0], REVIEWS[i1]];

  return (
    <div>
      <div
        key={animKey}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6"
        style={{ animation: "reviews-in 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        {visible.map((r, i) => (
          <div key={i} className={i === 1 ? "hidden lg:block" : undefined}>
            <ReviewCard body={r.body} who={r.who} role={r.role} accent={r.accent} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Page ${i + 1}`}
              style={{
                width: i === page ? "24px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === page ? "var(--primary)" : "var(--border)",
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <ArrowBtn dir="prev" onClick={() => goTo(page - 1)} />
          <ArrowBtn dir="next" onClick={() => goTo(page + 1)} />
        </div>
      </div>
    </div>
  );
}
