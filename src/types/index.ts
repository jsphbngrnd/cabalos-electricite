export interface Realisation {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  location: string;
  date: string;
  coverImage: string;
  images: string[];
  tags: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: number;
  tags: string[];
  author: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NotionPage {
  id: string;
  properties: Record<string, unknown>;
  cover?: { external?: { url: string }; file?: { url: string } };
  url: string;
}
