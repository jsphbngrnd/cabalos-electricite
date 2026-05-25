export const BASE_URL = "https://cabalos-electricite.fr";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "@id": `${BASE_URL}/#business`,
  name: "Cabalos Électricité",
  alternateName: "Cabalos Electricite",
  description:
    "Emma Cabal, électricienne indépendante à Marseille. Installation, rénovation, mise aux normes NF C 15-100, tableau électrique, dépannage urgence. Devis gratuit.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  telephone: "+33632363563",
  email: "cabal.emma@gmail.com",
  founder: {
    "@type": "Person",
    name: "Emma Cabal",
    jobTitle: "Électricienne indépendante",
    knowsAbout: ["Électricité", "NF C 15-100", "Rénovation électrique", "Dépannage"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marseille",
    addressLocality: "Marseille",
    postalCode: "13016",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.296174,
    longitude: 5.264015,
  },
  areaServed: [
    { "@type": "City", name: "Marseille" },
    { "@type": "City", name: "Aubagne" },
    { "@type": "City", name: "Aix-en-Provence" },
    { "@type": "City", name: "Cassis" },
    { "@type": "City", name: "La Ciotat" },
    { "@type": "City", name: "Allauch" },
    { "@type": "City", name: "Martigues" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Virement, Chèque, Espèces",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "10",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://instagram.com/cabalos_elec",
    "https://les-fabricoleuses.com/fabricoleuse/emma-cabal/",
  ],
};

export const localBusinessSchema = organizationSchema;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emma Cabal",
  jobTitle: "Électricienne indépendante",
  worksFor: { "@id": `${BASE_URL}/#business` },
  knowsAbout: [
    "Électricité bâtiment",
    "Norme NF C 15-100",
    "Rénovation électrique",
    "Tableau électrique",
    "Mise aux normes",
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "CAP Électricien" },
    { "@type": "EducationalOccupationalCredential", name: "Habilitations électriques B1V, BR, BC" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marseille",
    addressCountry: "FR",
  },
};

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@id": `${BASE_URL}/#business` },
    name,
    description,
    areaServed: { "@type": "City", name: "Marseille" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BASE_URL}/contact`,
      servicePhone: "+33632363563",
    },
  };
}

export function faqSchema(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function zonePageSchema(zoneName: string, postalCode: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/zones/${slug}#business`,
    name: `Cabalos Électricité — ${zoneName}`,
    description: `Emma Cabal, électricienne, intervient à ${zoneName}. Installation, rénovation, mise aux normes NF C 15-100, dépannage.`,
    url: `${BASE_URL}/zones/${slug}`,
    telephone: "+33632363563",
    areaServed: {
      "@type": "City",
      name: zoneName,
      postalCode,
    },
    parentOrganization: { "@id": `${BASE_URL}/#business` },
  };
}
