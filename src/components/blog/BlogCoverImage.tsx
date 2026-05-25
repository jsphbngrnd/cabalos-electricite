"use client";

import { useState } from "react";

interface BlogCoverImageProps {
  src: string | null | undefined;
  alt: string;
  fallback: string;
  category?: string | null;
}

export default function BlogCoverImage({ src, alt, fallback, category }: BlogCoverImageProps) {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  return (
    <div className="relative w-full h-48 overflow-hidden bg-base-200">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={() => setImgSrc(fallback)}
      />
      {category && (
        <div className="absolute top-3 left-3">
          <span className="badge badge-primary text-xs gap-1">
            {category}
          </span>
        </div>
      )}
    </div>
  );
}
