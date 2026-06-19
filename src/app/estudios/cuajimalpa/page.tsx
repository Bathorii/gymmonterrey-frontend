// src/app/estudios/cuajimalpa/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-cuajimalpa'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const section = localidadContent.estudios

export const metadata: Metadata = {
  title: section.h1,
  description: section.metaDesc,
  alternates: { canonical: `${city.baseUrl}/estudios/cuajimalpa/` },
  openGraph: baseOpenGraph({ type: 'article', title: section.h1, description: section.metaDesc, url: `${city.baseUrl}/estudios/cuajimalpa/` }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function CuajimalpaEstudiosPage() {
  return (
    <LocalidadPage
      localidadNombre="Cuajimalpa"
      localidadSlug="cuajimalpa"
      categoriaSlug="estudios"
      categoriaLabel="Estudios"
      h1={section.h1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-12"
      faq={section.faq}
      autorTip="El combo que funciona en Cuajimalpa: clase de pilates o yoga en el estudio de Santa Fe el martes y jueves, running en el Bosque de Cuajimalpa el sábado temprano. Dos ambientes distintos en la misma alcaldía — eso es lo que hace única a esta zona de la CDMX, neta."
    />
  )
}
