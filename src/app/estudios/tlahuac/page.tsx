// src/app/estudios/tlahuac/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-tlahuac'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'estudios' as const
const section = localidadContent.estudios
const H1 = `Estudios fitness en Tláhuac, CDMX — Funcional y clases grupales 2026`
const DESC = `Estudios fitness en Tláhuac CDMX: aeróbicos, funcional y clases grupales desde $150 MXN. Sin boutiques, con propuesta real de barrio en el sur de la ciudad.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EstudiosTlahuacPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Estudios"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-11"
      faq={section.faq}
      autorTip="En Tláhuac los estudios de aeróbicos y funcional tienen instructores con años en el mismo barrio. Eso significa que el grupo se conoce y hay seguimiento real. Sin la estética del norte, con más chamba real, cuate."
    />
  )
}
