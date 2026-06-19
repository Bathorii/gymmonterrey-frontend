// src/app/bienestar/miguel-hidalgo/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-miguel-hidalgo'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar

export const metadata: Metadata = {
  title: section.h1,
  description: section.metaDesc,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: section.h1, description: section.metaDesc, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarMiguelHidalgoPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Bienestar"
      h1={section.h1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-05-31"
      faq={section.faq}
      autorTip="La fisioterapia en Polanco tiene los especialistas más calificados de CDMX, neta. Si tu cobertura médica lo cubre parcialmente, usala — algunos gastos médicos mayores incluyen fisio con derivación. Pregunta antes de pagar de bolsillo, cuate."
    />
  )
}
