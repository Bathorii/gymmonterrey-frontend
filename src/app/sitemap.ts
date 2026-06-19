// src/app/sitemap.ts
export const dynamic = 'force-static'

import { readFileSync } from 'fs'
import path from 'path'
import type { MetadataRoute } from 'next'
import { city } from '@/config/city'
import { categories } from '@/data'

type QueueEntry = {
  slug: string
  published_at: string | null
}

function getNoindexSlugs(): Set<string> {
  try {
    const data: { slug: string; noindex?: boolean }[] = JSON.parse(
      readFileSync(path.join(process.cwd(), 'gym-static-data.json'), 'utf-8')
    )
    return new Set(data.filter(g => g.noindex).map(g => g.slug))
  } catch {
    return new Set()
  }
}

function getPublishedGyms(): QueueEntry[] {
  try {
    const queue: QueueEntry[] = JSON.parse(
      readFileSync(path.join(process.cwd(), 'publish_queue.json'), 'utf-8')
    )
    const noindex = getNoindexSlugs()
    return queue.filter(g => g.published_at !== null && !noindex.has(g.slug))
  } catch {
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = city.baseUrl
  const now = new Date()

  const corePages: MetadataRoute.Sitemap = [
    { url: `${base}/`,                  lastModified: now, priority: 1.0,  changeFrequency: 'weekly' },
    { url: `${base}/sobre-nosotros/`,   lastModified: now, priority: 0.5,  changeFrequency: 'monthly' },
    { url: `${base}/agregar-negocio/`,  lastModified: now, priority: 0.6,  changeFrequency: 'monthly' },
    { url: `${base}/blog/`,             lastModified: now, priority: 0.5,  changeFrequency: 'weekly' },
    { url: `${base}/faq/`,             lastModified: now, priority: 0.6,  changeFrequency: 'monthly' },
    { url: `${base}/contacto/`,         lastModified: now, priority: 0.4,  changeFrequency: 'monthly' },
    { url: `${base}/terminos/`,         lastModified: now, priority: 0.3,  changeFrequency: 'yearly' },
    { url: `${base}/privacidad/`,       lastModified: now, priority: 0.3,  changeFrequency: 'yearly' },
  ]

  const categoryPages: MetadataRoute.Sitemap = categories.map(cat => ({
    url: `${base}/${cat.slug}/`,
    lastModified: now,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  }))

  // Kerület (localidad) szintű oldalak
  const implementedLocalidades = [
    'cuauhtemoc', 'benito-juarez', 'miguel-hidalgo', 'alvaro-obregon',
    'coyoacan', 'tlalpan', 'iztapalapa', 'gustavo-a-madero',
    'azcapotzalco', 'venustiano-carranza', 'iztacalco',
    'magdalena-contreras', 'xochimilco', 'cuajimalpa', 'tlahuac', 'milpa-alta']

  const localidadPages: MetadataRoute.Sitemap = implementedLocalidades.flatMap(slug =>
    categories.map(cat => ({
      url: `${base}/${cat.slug}/${slug}/`,
      lastModified: now,
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    }))
  )

  // Városrész (barrio) szintű oldalak
  // Jun 18: villa-coapa, agricola-oriental, asturias, atlampa, buena-vista, centro, del-carmen, del-gas, del-valle-centro, del-valle-sur
  // Jun 18 C: doctores, granada, guadalupe-inn, guerrero, hipodromo-condesa, lomas-de-tarango, moctezuma, morelos, napoles, narvarte-oriente
  // Jun 19: obrera, pantitlan, peralvillo, portales-norte, portales-sur, roma-sur, san-rafael, santa-maria-la-ribera, tabacalera, tepepan
  const implementedBarrios = [
    'agricola-oriental', 'anzures', 'asturias', 'atlampa', 'buena-vista',
    'centro', 'claveria', 'condesa', 'coyoacan-centro', 'del-carmen',
    'del-gas', 'del-valle-centro', 'del-valle-norte', 'del-valle-sur', 'doctores',
    'fuentes-del-pedregal', 'granada', 'guadalupe-inn', 'guerrero', 'hipodromo-condesa',
    'jardin-balbuena', 'jardines-del-pedregal', 'juarez', 'las-aguilas', 'lomas-de-chapultepec',
    'lomas-de-tarango', 'moctezuma', 'morelos', 'napoles', 'narvarte-oriente',
    'narvarte-poniente', 'polanco', 'roma-norte', 'san-angel', 'san-jeronimo-aculco',
    'san-jeronimo-lidice', 'santa-fe-cuajimalpa', 'toriello-guerra', 'viaducto-piedad', 'villa-coapa',
    'obrera', 'pantitlan', 'peralvillo', 'portales-norte', 'portales-sur',
    'roma-sur', 'san-rafael', 'santa-maria-la-ribera', 'tabacalera', 'tepepan']

  const barrioPages: MetadataRoute.Sitemap = implementedBarrios.flatMap(slug =>
    categories.map(cat => ({
      url: `${base}/${cat.slug}/${slug}/`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    }))
  )

  const publishedGyms = getPublishedGyms()
  const gymPages: MetadataRoute.Sitemap = publishedGyms.map(g => ({
    url: `${base}/gimnasios/${g.slug}/`,
    lastModified: new Date(g.published_at!),
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  return [...corePages, ...categoryPages, ...localidadPages, ...barrioPages, ...gymPages]
}
