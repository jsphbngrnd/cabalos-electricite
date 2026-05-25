import type { MetadataRoute } from 'next'
import { zones } from '@/lib/zones'
import { getRealisations, getBlogPosts } from '@/lib/notion'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cabalos-electricite.fr'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/prestations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/realisations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/zones`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/professionnels`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/professionnels/syndics`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/professionnels/maitres-oeuvre`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/professionnels/architectes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/professionnels/architectes-interieur`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/professionnels/plaquistes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Pages de zones (22 zones)
  const zonePages: MetadataRoute.Sitemap = zones.map((zone) => ({
    url: `${BASE_URL}/zones/${zone.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: zone.type === 'arrondissement' ? 0.7 : 0.6,
  }))

  // Pages réalisations (Notion CMS)
  let realisationPages: MetadataRoute.Sitemap = []
  try {
    const realisations = await getRealisations()
    realisationPages = realisations.map((r) => ({
      url: `${BASE_URL}/realisations/${r.slug}`,
      lastModified: r.date ? new Date(r.date) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // fallback si Notion indisponible
  }

  // Pages blog (Notion CMS)
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = await getBlogPosts()
    blogPages = posts.map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // fallback si Notion indisponible
  }

  return [...staticPages, ...zonePages, ...realisationPages, ...blogPages]
}
