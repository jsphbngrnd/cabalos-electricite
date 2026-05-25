import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  variant?: "dark" | "primary";
}

export default function CTABanner({
  title,
  subtitle,
  ctaText,
  ctaHref,
}: CTABannerProps) {
  return (
    <section className="bg-base-200 border-base-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
        <p className="font-heading text-3xl font-medium text-base-content mb-3">
          {title}
        </p>
        {subtitle && (
          <p className="text-base text-base-content/50 max-w-md mx-auto mb-8">
            {subtitle}
          </p>
        )}
        <Link href={ctaHref} className="btn btn-primary gap-2">
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
