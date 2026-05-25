"use client";

import { reviews, type Review } from "@/lib/reviews";
import { Star } from "lucide-react";

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="card bg-base-100 shadow-sm flex-shrink-0 w-72 mx-3">
      <div className="card-body p-4">
        {/* Stars */}
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-warning text-warning"
            />
          ))}
        </div>
        {/* Text */}
        <p className="text-base-content/70 text-sm leading-relaxed mb-4 line-clamp-4">
          &ldquo;{review.text}&rdquo;
        </p>
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-content font-bold text-sm flex-shrink-0">
            {review.initials}
          </div>
          <div>
            <p className="font-semibold text-base-content text-sm">{review.author}</p>
            <p className="text-base-content/40 text-xs">
              {new Date(review.date).toLocaleDateString("fr-FR", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsMarquee() {
  const doubled = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden py-4">
      <div className="marquee-track flex w-max">
        {doubled.map((review, index) => (
          <ReviewCard key={`${review.id}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}
