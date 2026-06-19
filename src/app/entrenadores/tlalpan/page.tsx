// src/app/entrenadores/tlalpan/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-tlalpan'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'entrenadores' as const
const section = localidadContent.entrenadores
const H1 = `Entrenadores personales en Tlalpan, CDMX — Trail Running y PT certificados 2026`
const DESC = `Entrenadores en Tlalpan CDMX: trail running, fuerza y outdoor. Desde $300 MXN/sesión. Alcaldía más verde. Rodrigo recomienda 2026.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EntrenadoresTlalpanPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Entrenadores"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-03"
      faq={section.faq}
      autorTip="Si buscás un coach de trail en la CDMX que conozca el Bosque de Tlalpan como su patio trasero, Tlalpan es donde hay que buscar — eso no lo encontrás en Cuauhtémoc, neta cuate."
    />
  )
}
