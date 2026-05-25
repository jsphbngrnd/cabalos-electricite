import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";

const velvelyne = localFont({
  src: [
    { path: "../fonts/woff2/Velvelyne-Light.woff2",   weight: "300", style: "normal" },
    { path: "../fonts/woff2/Velvelyne-Book.woff2",    weight: "400", style: "normal" },
    { path: "../fonts/woff2/Velvelyne-Regular.woff2", weight: "500", style: "normal" },
    { path: "../fonts/woff2/Velvelyne-Bold.woff2",    weight: "700", style: "normal" },
  ],
  variable: "--font-velvelyne",
});

export const metadata: Metadata = {
  title: {
    default: "Cabalos électricité – Électricienne à Marseille",
    template: "%s | Cabalos électricité – Électricienne Marseille",
  },
  description:
    "Cabalos électricité, votre électricienne professionnelle à Marseille. Installation, rénovation, mise aux normes NF C 15-100, tableau électrique, dépannage urgence. Devis gratuit.",
  keywords: [
    "électricienne Marseille",
    "electricienne 13001",
    "mise aux normes électrique Marseille",
    "tableau électrique Marseille",
    "installation électrique Marseille",
    "dépannage électrique Marseille urgence",
    "rénovation électrique Marseille",
    "Cabalos électricité",
    "Fabricoleuses",
  ],
  authors: [{ name: "Cabalos électricité" }],
  creator: "Cabalos électricité",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://cabalos-electricite.fr"
  ),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Cabalos électricité",
    title: "Cabalos électricité – Électricienne à Marseille",
    description: "Votre électricienne professionnelle à Marseille. Installation, rénovation, mise aux normes, dépannage urgence.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cabalos électricité" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "Cabalos électricité",
  description: "Électricienne professionnelle à Marseille. Installation, rénovation, mise aux normes NF C 15-100, tableaux électriques et dépannage urgence.",
  url: "https://cabalos-electricite.fr",
  telephone: "+33-6-32-36-35-63",
  email: "cabal.emma@gmail.com",
  founder: { "@type": "Person", name: "Emma Cabal" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marseille",
    postalCode: "13001",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.2965, longitude: 5.3698 },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 43.2965, longitude: 5.3698 },
    geoRadius: "30000",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "€€",
  sameAs: ["https://les-fabricoleuses.com/fabricoleuse/emma-cabal/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${velvelyne.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="flex-1 page-in">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
