// src/app/bienestar/azcapotzalco/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-azcapotzalco'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar
const H1 = `Bienestar y recuperación en Azcapotzalco, CDMX — Fisio y masajes 2026`
const DESC = `Bienestar en Azcapotzalco, CDMX: fisioterapia $200–$600 MXN, masajes y nutrición. Sin precio premium. Especialistas en box. Metro El Rosario Línea 6.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarAzcapotzalcoPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Bienestar"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-06"
      faq={section.faq}
      autorTip="Para lesiones de box — muñecas, hombros, manos — los fisioterapeutas de Azcapotzalco las ven con regularidad porque el barrio las genera. Preguntá en tu gym de box directamente por referencias: la red de referidos del barrio es más confiable que cualquier búsqueda en Google, cuate."
    />
  )
}
