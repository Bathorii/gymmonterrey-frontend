// src/app/eventos/iztapalapa/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-iztapalapa'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'eventos' as const
const section = localidadContent.eventos
const H1 = `Eventos fitness en Iztapalapa, CDMX – Torneos, Cerro y Comunidad 2026 (${section.stats[0].value})`
const DESC = `Eventos fitness en Iztapalapa, CDMX 2026: torneos de boxeo amateur, caminatas Cerro de la Estrella, fútbol sala barrial y activaciones IMSS. Comunidad activa.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EventosIztapalapaPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Eventos"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-04"
      faq={section.faq}
      autorTip="Los torneos de boxeo de Iztapalapa que organiza la alcaldía no aparecen en los medios de fitness del CDMX — pero tienen nivel real y categorías para principiantes. Si alguna vez quisiste ver boxeo amateur auténtico o competir, busca la convocatoria en el Instagram oficial de la Alcaldía Iztapalapa antes que en cualquier otro lado."
    />
  )
}
