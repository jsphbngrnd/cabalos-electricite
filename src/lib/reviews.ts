export interface Review {
  id: string;
  author: string;
  initials: string;
  rating: 5;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    author: "Revue Allumefeu",
    initials: "RA",
    rating: 5,
    text: "On peut dire que cette électricienne a les fils qui se touchent ! Elle nous a refait notre local à neuf et nous avons désormais la lumière à tous les étages ! Merci pour le professionnalisme et surtout les bons moments, voilà un beau travail d'artisan !",
    date: "2025-11-01",
  },
  {
    id: "2",
    author: "Antoine GUGLIELMI",
    initials: "AG",
    rating: 5,
    text: "Intervention rapide et efficace, nous sommes ravis d'avoir fait appel à Emma!",
    date: "2025-12-01",
  },
  {
    id: "3",
    author: "Mona THOMAS",
    initials: "MT",
    rating: 5,
    text: "Cabalos électricité a sauvé mon chantier ! Suite au travail bâclé d'un soit disant professionnel du métier, j'ai fait appel à Emma qui a su rattraper et terminer avec brio toutes les installations électriques dans mon gîte. Professionnalisme, bonne communication et finissions d'excellentes qualités. Je recommande !!",
    date: "2025-07-01",
  },
  {
    id: "4",
    author: "Joseph Bongrand",
    initials: "JB",
    rating: 5,
    text: "Emma a fait toute l'électricité de ma cuisine avec les saignées et le raccordement au compteur, super travail, je recommande",
    date: "2025-07-01",
  },
  {
    id: "5",
    author: "Léa",
    initials: "L",
    rating: 5,
    text: "Excellent travail, propre et soigné. Emma a littéralement sauvé mon chantier ! Je recommande ++ Merci encore 🙏 ...",
    date: "2025-07-01",
  },
  {
    id: "6",
    author: "Arthur Blaquart",
    initials: "AB",
    rating: 5,
    text: "Tout parfait merci Emma !",
    date: "2025-07-01",
  },
];
