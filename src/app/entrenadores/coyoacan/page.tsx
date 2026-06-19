// src/app/entrenadores/coyoacan/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-coyoacan'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'entrenadores' as const
const section = localidadContent.entrenadores

export const metadata: Metadata = {
  title: section.h1,
  description: section.metaDesc,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ type: 'article', title: section.h1, description: section.metaDesc, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function CoyoacanEntrenadoresPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Entrenadores"
      h1={section.h1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-02"
      faq={section.faq}
      autorTip="La UNAM y las facultades de ciencias del deporte del sur de CDMX generan entrenadores con formación académica real a precios menores que Polanco. Pide siempre la cédula profesional antes de contratar — los buenos cuates la muestran sin que se los pidas."
    />
  )
}
