import { Client } from "@notionhq/client";

const notionToken = process.env.NOTION_TOKEN;
const realisationsDbId = process.env.NOTION_REALISATIONS_DB_ID;
const blogDbId = process.env.NOTION_BLOG_DB_ID;

let notion: Client | null = null;
if (notionToken) {
  notion = new Client({ auth: notionToken });
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Realisation {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  date: string;
  description: string;
  image: string;
  gallery: string[];
  content: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_REALISATIONS: Realisation[] = [
  {
    id: "1",
    slug: "renovation-electrique-appartement-marseille-13006",
    title: "Rénovation électrique complète – Appartement Marseille 6e",
    category: "Rénovation",
    location: "Marseille 13006",
    date: "2024-11-15",
    description:
      "Rénovation complète de l'installation électrique d'un appartement haussmannien de 120 m². Remplacement du tableau électrique, mise aux normes NF C 15-100, installation de prises et interrupteurs.",
    image: "/images/realisations/renovation-appartement.jpg",
    gallery: [],
    content: `<p>Nous avons réalisé la rénovation complète de l'installation électrique de cet appartement haussmannien situé dans le 6e arrondissement de Marseille.</p>
<h2>Travaux réalisés</h2>
<ul>
<li>Remplacement du tableau électrique vétuste par un tableau neuf aux normes</li>
<li>Création de 8 circuits spécialisés</li>
<li>Installation de 45 prises de courant</li>
<li>Mise en place d'un système de protection différentielle</li>
<li>Câblage de l'éclairage dans toutes les pièces</li>
</ul>
<p>L'installation a été réalisée en 5 jours sans coupure prolongée pour les occupants.</p>`,
  },
  {
    id: "2",
    slug: "installation-tableau-electrique-maison-aubagne",
    title: "Installation tableau électrique – Maison individuelle Aubagne",
    category: "Tableau électrique",
    location: "Aubagne",
    date: "2024-10-08",
    description:
      "Installation d'un nouveau tableau électrique dans une maison individuelle de 180 m². Mise aux normes complète avec protection différentielle et disjoncteurs adaptés.",
    image: "/images/realisations/tableau-electrique.jpg",
    gallery: [],
    content: `<p>Installation d'un tableau électrique neuf pour cette maison individuelle d'Aubagne, en remplacement d'un tableau vieillissant non conforme.</p>
<h2>Prestations effectuées</h2>
<ul>
<li>Dépose de l'ancien tableau</li>
<li>Installation d'un tableau 3 rangées 26 modules</li>
<li>Mise en place de 4 interrupteurs différentiels 30mA</li>
<li>Reprise des circuits existants</li>
<li>Test et vérification de l'ensemble de l'installation</li>
</ul>`,
  },
  {
    id: "3",
    slug: "borne-recharge-irve-marseille-13008",
    title: "Installation borne de recharge IRVE – Résidence Marseille 8e",
    category: "Borne IRVE",
    location: "Marseille 13008",
    date: "2024-09-20",
    description:
      "Installation de 4 bornes de recharge pour véhicules électriques dans la résidence. Puissance 7,4 kW par borne. Mise en conformité avec la réglementation IRVE.",
    image: "/images/realisations/borne-irve.jpg",
    gallery: [],
    content: `<p>Installation de 4 bornes de recharge pour véhicules électriques dans le parking de cette résidence du 8e arrondissement de Marseille.</p>
<h2>Caractéristiques du projet</h2>
<ul>
<li>4 bornes wallbox 7,4 kW monophasé</li>
<li>Câblage dédié depuis le TGBT</li>
<li>Protection parafoudre et différentielle type A</li>
<li>Certification IRVE niveau 2</li>
<li>Système de supervision des recharges</li>
</ul>`,
  },
  {
    id: "4",
    slug: "eclairage-led-bureau-marseille",
    title: "Rénovation éclairage LED – Bureaux Marseille Centre",
    category: "Éclairage",
    location: "Marseille 13001",
    date: "2024-08-14",
    description:
      "Remplacement de l'éclairage fluorescent par des solutions LED dans 500 m² de bureaux. Économies d'énergie estimées à 65%.",
    image: "/images/realisations/eclairage-led.jpg",
    gallery: [],
    content: `<p>Rénovation complète de l'éclairage de ces bureaux du centre de Marseille avec passage au LED.</p>
<h2>Bénéfices obtenus</h2>
<ul>
<li>Remplacement de 80 tubes fluorescents par des panneaux LED</li>
<li>Installation de détecteurs de présence</li>
<li>Variation de luminosité dans les open spaces</li>
<li>Économies d'énergie : -65% sur la facture éclairage</li>
<li>Amélioration du confort visuel des collaborateurs</li>
</ul>`,
  },
  {
    id: "5",
    slug: "mise-aux-normes-villa-cassis",
    title: "Mise aux normes NF C 15-100 – Villa Cassis",
    category: "Mise aux normes",
    location: "Cassis",
    date: "2024-07-03",
    description:
      "Mise aux normes complète d'une villa des années 70 selon la norme NF C 15-100. Mise en conformité pour vente immobilière.",
    image: "/images/realisations/mise-aux-normes.jpg",
    gallery: [],
    content: `<p>Mise aux normes complète de l'installation électrique de cette villa de Cassis construite dans les années 70, à l'occasion d'une vente immobilière.</p>
<h2>Travaux réalisés</h2>
<ul>
<li>Audit complet de l'installation existante</li>
<li>Remplacement du tableau électrique</li>
<li>Ajout des protections différentielles obligatoires</li>
<li>Mise à la terre de toutes les prises</li>
<li>Sécurisation de la salle de bain (zones de protection)</li>
<li>Rapport de conformité Consuel</li>
</ul>`,
  },
  {
    id: "6",
    slug: "installation-electrique-neuve-maison-la-ciotat",
    title: "Installation électrique neuve – Maison La Ciotat",
    category: "Installation neuve",
    location: "La Ciotat",
    date: "2024-06-18",
    description:
      "Installation électrique complète d'une maison neuve de 200 m² en construction. Plans électriques, câblage, tableau, raccordement ERDF.",
    image: "/images/realisations/installation-neuve.jpg",
    gallery: [],
    content: `<p>Réalisation de l'installation électrique complète de cette maison individuelle neuve à La Ciotat, depuis les plans jusqu'au raccordement au réseau.</p>
<h2>Prestations réalisées</h2>
<ul>
<li>Étude et plans électriques</li>
<li>Passage des gaines en phase gros œuvre</li>
<li>Câblage complet (14 circuits)</li>
<li>Installation du tableau électrique</li>
<li>Pose des appareillages et luminaires</li>
<li>Consuel et raccordement ENEDIS</li>
</ul>`,
  },
];

const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "que-dit-reellement-la-norme-nf-c-15-100",
    title: "Que dit réellement la norme NF C 15-100 ?",
    excerpt:
      "On en parle souvent, mais que contient vraiment la norme NF C 15-100 ? Mise à la terre, protections différentielles, circuits dédiés… décryptage par une électricienne.",
    date: "2024-12-01",
    readTime: "",
    image: "",
    category: "Réglementation",
    content: `<p>La norme NF C 15-100 est la référence en matière d'installations électriques basse tension en France. Elle définit les règles de sécurité à respecter pour toute installation neuve ou rénovée.</p>
<h2>Qu'est-ce que la norme NF C 15-100 ?</h2>
<p>Cette norme nationale définit les règles techniques pour les installations électriques à basse tension dans les locaux d'habitation. Elle concerne aussi bien les constructions neuves que les rénovations.</p>
<h2>Les principales exigences</h2>
<p>Parmi les exigences clés de la norme, on trouve la mise à la terre obligatoire de toutes les prises, les protections différentielles 30 mA, le nombre minimum de circuits et de prises selon la surface, et la sécurisation des salles de bain.</p>
<h2>Quand est-elle obligatoire ?</h2>
<p>La norme NF C 15-100 s'applique pour toute construction neuve, toute rénovation importante de l'installation électrique, et est contrôlée lors d'un diagnostic avant vente immobilière.</p>`,
  },
  {
    id: "2",
    slug: "comment-savoir-si-son-tableau-est-aux-normes",
    title: "Comment savoir si son tableau électrique est aux normes ?",
    excerpt:
      "Tableau vétuste, disjoncteurs qui sautent, absence de différentiel… Voici comment évaluer l'état de votre tableau électrique avant qu'il ne devienne un problème.",
    date: "2024-11-10",
    readTime: "",
    image: "",
    category: "Conseils",
    content: `<p>Le tableau électrique est le cœur de votre installation. Un tableau vieillissant ou non conforme peut présenter des risques sérieux pour votre sécurité.</p>
<h2>Les signes d'un tableau non conforme</h2>
<ul>
<li>Absence d'interrupteurs différentiels 30 mA</li>
<li>Disjoncteurs qui déclenchent fréquemment</li>
<li>Tableau en bois ou très ancien</li>
<li>Circuits non repérés ou mal étiquetés</li>
<li>Câbles de couleurs anciennes (rouge/noir au lieu de brun/bleu)</li>
</ul>
<h2>Ce que doit contenir un tableau aux normes</h2>
<p>Un tableau conforme à la NF C 15-100 doit comporter au minimum : un disjoncteur de branchement, des interrupteurs différentiels 30 mA, des disjoncteurs divisionnaires calibrés par circuit, et un repérage clair de chaque circuit.</p>`,
  },
  {
    id: "3",
    slug: "pourquoi-la-terre-est-indispensable",
    title: "Pourquoi la mise à la terre est indispensable dans un logement ?",
    excerpt:
      "Beaucoup d'appartements anciens n'ont pas de prise de terre. Ce n'est pas anodin : la terre est la première protection contre l'électrocution. Explications.",
    date: "2024-10-15",
    readTime: "",
    image: "",
    category: "Sécurité",
    content: `<p>La mise à la terre est l'un des éléments fondamentaux de la sécurité électrique. Elle est pourtant absente de nombreux logements anciens, notamment à Marseille.</p>
<h2>À quoi sert la terre ?</h2>
<p>La prise de terre permet d'évacuer les courants de défaut vers le sol plutôt que vers votre corps. En cas de défaut d'isolement sur un appareil électroménager, sans terre, c'est vous qui devenez le chemin de moindre résistance.</p>
<h2>Comment savoir si mes prises ont la terre ?</h2>
<p>Une prise avec terre possède une broche centrale (la "tige de terre") au centre de la prise. Si vos prises sont de type ancien (deux trous ronds sans broche), elles n'ont pas de terre.</p>
<h2>Que faire ?</h2>
<p>La mise à la terre de toutes les prises est obligatoire dans la norme NF C 15-100. Si votre logement en est dépourvu, il est impératif de faire réaliser ces travaux par une électricienne qualifiée.</p>`,
  },
  {
    id: "4",
    slug: "erreurs-electricite-renovation",
    title: "Les erreurs d'électricité les plus fréquentes en rénovation",
    excerpt:
      "Lors d'une rénovation, certaines erreurs électriques reviennent systématiquement. En tant qu'électricienne, voici celles que je rencontre le plus souvent — et comment les éviter.",
    date: "2024-09-05",
    readTime: "",
    image: "",
    category: "Conseils",
    content: `<p>La rénovation électrique est un domaine où les erreurs peuvent avoir des conséquences graves. Voici les plus fréquentes que je rencontre sur le terrain.</p>
<h2>1. Sous-dimensionner les circuits</h2>
<p>Ajouter une plaque de cuisson ou un chauffe-eau sur un circuit existant sans vérifier sa capacité est l'erreur classique. Chaque appareil puissant nécessite un circuit dédié.</p>
<h2>2. Oublier la mise à la terre des nouvelles prises</h2>
<p>Lors d'ajout de prises, certains oublient de raccorder la terre. Pourtant elle est obligatoire et indispensable à votre sécurité.</p>
<h2>3. Ne pas repérer les circuits</h2>
<p>Un tableau sans étiquetage clair est une source de problèmes à long terme. Chaque circuit doit être identifié pour faciliter les interventions futures.</p>
<h2>4. Utiliser des câbles inadaptés</h2>
<p>Le choix de la section du câble (1,5 mm², 2,5 mm², 6 mm²…) dépend de la puissance du circuit. Un câble sous-dimensionné peut chauffer et provoquer un incendie.</p>`,
  },
];

// ─── Helper: calculate read time from HTML content ────────────────────────────

export function calculateReadTime(html: string): string {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const wordCount = text ? text.split(" ").length : 0;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min`;
}

// ─── Helper: render Notion blocks to HTML ─────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderNotionBlocks(blocks: any[]): string {
  let html = "";

  for (const block of blocks) {
    switch (block.type) {
      case "paragraph": {
        const text = block.paragraph?.rich_text
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((t: any) => richTextToHtml(t))
          .join("") || "";
        html += `<p>${text}</p>\n`;
        break;
      }
      case "heading_1": {
        const text = block.heading_1?.rich_text
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((t: any) => richTextToHtml(t))
          .join("") || "";
        html += `<h1>${text}</h1>\n`;
        break;
      }
      case "heading_2": {
        const text = block.heading_2?.rich_text
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((t: any) => richTextToHtml(t))
          .join("") || "";
        html += `<h2>${text}</h2>\n`;
        break;
      }
      case "heading_3": {
        const text = block.heading_3?.rich_text
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((t: any) => richTextToHtml(t))
          .join("") || "";
        html += `<h3>${text}</h3>\n`;
        break;
      }
      case "bulleted_list_item": {
        const text = block.bulleted_list_item?.rich_text
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((t: any) => richTextToHtml(t))
          .join("") || "";
        html += `<li>${text}</li>\n`;
        break;
      }
      case "numbered_list_item": {
        const text = block.numbered_list_item?.rich_text
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((t: any) => richTextToHtml(t))
          .join("") || "";
        html += `<li>${text}</li>\n`;
        break;
      }
      case "image": {
        const url =
          block.image?.type === "external"
            ? block.image.external?.url
            : block.image?.file?.url;
        const caption = block.image?.caption
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((t: any) => t.plain_text)
          .join("") || "";
        if (url) {
          html += `<figure><img src="${url}" alt="${caption}" class="w-full rounded-lg my-4" />${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>\n`;
        }
        break;
      }
      case "quote": {
        const text = block.quote?.rich_text
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ?.map((t: any) => richTextToHtml(t))
          .join("") || "";
        html += `<blockquote>${text}</blockquote>\n`;
        break;
      }
      case "divider": {
        html += `<hr />\n`;
        break;
      }
      default:
        break;
    }
  }

  return html;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function richTextToHtml(richText: any): string {
  let text = richText.plain_text || "";
  if (richText.annotations?.bold) text = `<strong>${text}</strong>`;
  if (richText.annotations?.italic) text = `<em>${text}</em>`;
  if (richText.annotations?.code) text = `<code>${text}</code>`;
  if (richText.href) text = `<a href="${richText.href}">${text}</a>`;
  return text;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ─── Realisations ─────────────────────────────────────────────────────────────

export async function getRealisations(): Promise<Realisation[]> {
  if (!notion || !realisationsDbId) {
    return MOCK_REALISATIONS;
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: realisationsDbId,
      sorts: [{ property: "Date", direction: "descending" }],
      in_trash: false,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page: any) => {
      const props = page.properties;
      const title =
        props.Title?.title?.[0]?.plain_text || "Sans titre";
      return {
        id: page.id,
        slug: props.Slug?.rich_text?.[0]?.plain_text || slugify(title),
        title,
        category: props.Category?.select?.name || "",
        location: props.Location?.rich_text?.[0]?.plain_text || "Marseille",
        date: props.Date?.date?.start || "",
        description:
          props.Description?.rich_text?.[0]?.plain_text || "",
        image: props.Image?.files?.[0]?.file?.url || props.Image?.files?.[0]?.external?.url || "",
        gallery: [],
        content: "",
      };
    });
  } catch (error) {
    console.error("Erreur Notion getRealisations:", error);
    return MOCK_REALISATIONS;
  }
}

export async function getRealisationBySlug(
  slug: string
): Promise<Realisation | null> {
  if (!notion || !realisationsDbId) {
    return MOCK_REALISATIONS.find((r) => r.slug === slug) || null;
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: realisationsDbId,
      filter: {
        property: "Slug",
        rich_text: { equals: slug },
      },
      in_trash: false,
    });

    if (!response.results.length) {
      return MOCK_REALISATIONS.find((r) => r.slug === slug) || null;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const page = response.results[0] as any;
    const props = page.properties;
    const title = props.Title?.title?.[0]?.plain_text || "Sans titre";

    const blocksResponse = await notion.blocks.children.list({
      block_id: page.id,
    });
    const content = renderNotionBlocks(blocksResponse.results as Parameters<typeof renderNotionBlocks>[0]);

    return {
      id: page.id,
      slug: props.Slug?.rich_text?.[0]?.plain_text || slugify(title),
      title,
      category: props.Category?.select?.name || "",
      location: props.Location?.rich_text?.[0]?.plain_text || "Marseille",
      date: props.Date?.date?.start || "",
      description: props.Description?.rich_text?.[0]?.plain_text || "",
      image: props.Image?.files?.[0]?.file?.url || props.Image?.files?.[0]?.external?.url || "",
      gallery: [],
      content,
    };
  } catch (error) {
    console.error("Erreur Notion getRealisationBySlug:", error);
    return MOCK_REALISATIONS.find((r) => r.slug === slug) || null;
  }
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!notion || !blogDbId) {
    return MOCK_BLOG_POSTS;
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: blogDbId,
      sorts: [{ property: "Date", direction: "descending" }],
      in_trash: false,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page: any) => {
      const props = page.properties;
      const title = props.Title?.title?.[0]?.plain_text || "Sans titre";
      return {
        id: page.id,
        slug: props.Slug?.rich_text?.[0]?.plain_text || slugify(title),
        title,
        excerpt: props.Excerpt?.rich_text?.[0]?.plain_text || "",
        date: props.Date?.date?.start || "",
        readTime: props.ReadTime?.rich_text?.[0]?.plain_text || "5 min",
        image: props.Image?.files?.[0]?.file?.url || props.Image?.files?.[0]?.external?.url || "",
        category: props.Category?.select?.name || "",
        content: "",
      };
    });
  } catch (error) {
    console.error("Erreur Notion getBlogPosts:", error);
    return MOCK_BLOG_POSTS;
  }
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  if (!notion || !blogDbId) {
    const post = MOCK_BLOG_POSTS.find((p) => p.slug === slug) || null;
    if (post) {
      return { ...post, readTime: calculateReadTime(post.content) };
    }
    return null;
  }

  try {
    const response = await notion.dataSources.query({
      data_source_id: blogDbId,
      filter: {
        property: "Slug",
        rich_text: { equals: slug },
      },
      in_trash: false,
    });

    if (!response.results.length) {
      return MOCK_BLOG_POSTS.find((p) => p.slug === slug) || null;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const page = response.results[0] as any;
    const props = page.properties;
    const title = props.Title?.title?.[0]?.plain_text || "Sans titre";

    const blocksResponse = await notion.blocks.children.list({
      block_id: page.id,
    });
    const content = renderNotionBlocks(blocksResponse.results as Parameters<typeof renderNotionBlocks>[0]);

    return {
      id: page.id,
      slug: props.Slug?.rich_text?.[0]?.plain_text || slugify(title),
      title,
      excerpt: props.Excerpt?.rich_text?.[0]?.plain_text || "",
      date: props.Date?.date?.start || "",
      readTime: calculateReadTime(content),
      image: props.Image?.files?.[0]?.file?.url || props.Image?.files?.[0]?.external?.url || "",
      category: props.Category?.select?.name || "",
      content,
    };
  } catch (error) {
    console.error("Erreur Notion getBlogPostBySlug:", error);
    const post = MOCK_BLOG_POSTS.find((p) => p.slug === slug) || null;
    return post ? { ...post, readTime: calculateReadTime(post.content) } : null;
  }
}
