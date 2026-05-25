# Cabalos Électricité – Site Web

Site vitrine pour **Cabalos Électricité**, électricienne à Marseille.  
Construit avec **Next.js 16**, **Tailwind CSS v4**, **Notion comme CMS** et déployé sur **Vercel**.

---

## Stack technique

| Outil | Usage |
|---|---|
| Next.js 16 (App Router) | Framework React SSG/SSR |
| Tailwind CSS v4 | Styles |
| Notion API | CMS pour Réalisations et Blog |
| Resend | Envoi des emails du formulaire de contact |
| Vercel | Hébergement & déploiement |

---

## Lancer en local

```bash
npm install
cp .env.example .env.local
# Remplir les variables dans .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## Variables d'environnement

Copier `.env.example` en `.env.local` et remplir :

| Variable | Description |
|---|---|
| `NOTION_TOKEN` | Token d'intégration Notion (Internal Integration Token) |
| `NOTION_REALISATIONS_DB_ID` | ID de la base de données Notion "Réalisations" |
| `NOTION_BLOG_DB_ID` | ID de la base de données Notion "Blog" |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails |
| `CONTACT_EMAIL` | Email destinataire des formulaires |
| `NEXT_PUBLIC_SITE_URL` | URL du site en production |

> **Sans ces variables**, le site fonctionne avec des données de démonstration.

---

## Configurer Notion comme CMS

### 1. Créer une intégration Notion
1. Aller sur [notion.so/my-integrations](https://notion.so/my-integrations)
2. Créer une intégration → copier le **Internal Integration Token** → `NOTION_TOKEN`

### 2. Base de données "Réalisations"
Créer une DB Notion avec ces propriétés :

| Propriété | Type |
|---|---|
| `Title` | Titre (title) |
| `Slug` | Texte (text) |
| `Description` | Texte (text) |
| `Catégorie` | Sélection (select) |
| `Localisation` | Texte (text) |
| `Date` | Date |
| `Tags` | Multi-sélection (multi_select) |
| `Published` | Case à cocher (checkbox) |

- Ajouter une image de couverture à chaque page Notion
- Partager la DB avec l'intégration
- Copier l'ID de la DB → `NOTION_REALISATIONS_DB_ID`

### 3. Base de données "Blog"
Créer une DB Notion avec ces propriétés :

| Propriété | Type |
|---|---|
| `Title` | Titre (title) |
| `Slug` | Texte (text) |
| `Excerpt` | Texte (text) |
| `Date` | Date |
| `ReadTime` | Nombre (number) |
| `Tags` | Multi-sélection (multi_select) |
| `Author` | Texte (text) |
| `Published` | Case à cocher (checkbox) |

- Copier l'ID de la DB → `NOTION_BLOG_DB_ID`

---

## Configurer Resend pour les emails

1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier votre domaine (ex: `cabalos-electricite.fr`)
3. Créer une clé API → `RESEND_API_KEY`
4. Mettre l'email de destination dans `CONTACT_EMAIL`

---

## Déployer sur Vercel

### Option 1 — Via CLI
```bash
npm i -g vercel
vercel
```

### Option 2 — Via GitHub
1. Pousser le code sur GitHub
2. Connecter le repo sur [vercel.com](https://vercel.com)
3. Ajouter les variables d'environnement dans Vercel Dashboard
4. Déployer

### Variables d'environnement sur Vercel
Dans **Project Settings → Environment Variables**, ajouter toutes les variables de `.env.example`.

---

## Structure du projet

```
src/
├── app/
│   ├── page.tsx              # Accueil
│   ├── prestations/          # Services
│   ├── realisations/         # Liste + [slug]
│   ├── blog/                 # Liste + [slug]
│   ├── contact/              # Formulaire de contact
│   └── actions.ts            # Server Actions (formulaires)
├── components/
│   ├── layout/               # Header, Footer
│   ├── ui/                   # CTABanner, ReviewsMarquee
│   ├── home/                 # Hero, ServicesOverview, StatsSection
│   └── contact/              # ContactForm, FooterContactForm
├── lib/
│   ├── notion.ts             # Client Notion + données mock
│   └── reviews.ts            # Reviews Google mockées
└── types/
    └── index.ts              # Types TypeScript
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Accueil — Hero, services, stats, reviews, CTA |
| `/prestations` | 8 prestations détaillées + FAQ |
| `/realisations` | Grille des réalisations (Notion) |
| `/realisations/[slug]` | Détail d'une réalisation |
| `/blog` | Liste des articles (Notion) |
| `/blog/[slug]` | Article complet |
| `/contact` | Formulaire de contact + infos |

---

## SEO & AEO

- Metadata complète sur chaque page (title, description, OG, Twitter)
- Schema.org `LocalBusiness` dans le layout global
- Schema.org `Article` sur les pages blog
- Contenu optimisé pour les mots-clés : électricienne Marseille, mise aux normes, tableau électrique, IRVE, dépannage électrique Marseille

---

## Modifier le contenu texte

### Pages statiques
Le contenu texte des pages statiques est directement dans les fichiers source :

| Page | Fichier |
|---|---|
| Accueil (hero, stats) | `src/components/home/Hero.tsx`, `src/components/home/StatsSection.tsx` |
| Services résumés | `src/components/home/ServicesOverview.tsx` |
| Prestations détaillées | `src/app/prestations/page.tsx` |
| Contact (infos, horaires) | `src/app/contact/page.tsx` |
| Header (navigation) | `src/components/layout/Header.tsx` |
| Footer (coordonnées, liens) | `src/components/layout/Footer.tsx` |
| Avis clients (marquee) | `src/lib/reviews.ts` |

Pour modifier : ouvrir le fichier correspondant, modifier le texte entre guillemets ou entre balises JSX, sauvegarder. Le site se recompile automatiquement en dev.

### Pages CMS (Notion)
Le contenu des **Réalisations** et du **Blog** est géré dans Notion :
- Ouvrir la base de données Notion correspondante
- Modifier directement la page Notion
- Le site récupère automatiquement les données à chaque build (ou en ISR toutes les heures)
- Pour forcer une mise à jour : déclencher un redéploiement sur Vercel

### Coordonnées de contact
Les coordonnées apparaissent à plusieurs endroits. Pour les mettre à jour, modifier ces fichiers :
- `src/app/layout.tsx` — JSON-LD Schema.org
- `src/components/layout/Footer.tsx` — Pied de page
- `src/app/contact/page.tsx` — Page contact
- `src/app/page.tsx` — JSON-LD de l'accueil

### SEO (titres, descriptions)
Chaque page exporte un objet `metadata` en haut du fichier :
```tsx
export const metadata: Metadata = {
  title: "...",
  description: "...",
}
```
Modifier directement dans le fichier de la page concernée.
