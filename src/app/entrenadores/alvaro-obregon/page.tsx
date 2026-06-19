// src/app/entrenadores/alvaro-obregon/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-alvaro-obregon'
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

export default function EntrenadoresAlvaroObregonPage() {
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
      publishDate="2026-06-01"
      faq={section.faq}
      autorTip="Los entrenadores de powerlifting de Pedregal son los más subestimados de CDMX — no tienen Instagram de marca pero tienen más horas de rack real que muchos coaches de Santa Fe. La certificación NSCA o ACE es el filtro que vale usar antes de cualquier otra cosa, cuate."
    />
  )
}
