// src/app/eventos/milpa-alta/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-milpa-alta'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'eventos' as const
const section = localidadContent.eventos
const H1 = `Eventos fitness en Milpa Alta, CDMX — Deporte y tradición (${section.stats[0].value})`
const DESC = `Eventos fitness en Milpa Alta 2026: torneos comunitarios, senderismo en sierra y festivales tradicionales con actividad física en la alcaldía más rural del CDMX.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EventosMilpaAltaPage() {
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
      publishDate="2026-06-13"
      faq={section.faq}
      autorTip="Subir el Teuhtli corriendo desde el Pueblo de Milpa Alta es el evento de resistencia más auténtico que podés hacer en el CDMX. Sin inscripción, sin chip, sin fotógrafo. Solo cerro, altitud y tus pulmones — qué pedo más chido."
    />
  )
}
