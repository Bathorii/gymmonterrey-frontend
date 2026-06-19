// src/app/eventos/venustiano-carranza/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-venustiano-carranza'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'eventos' as const
const section = localidadContent.eventos
const H1 = `Eventos fitness en Venustiano Carranza, CDMX – Boxeo y Deporte Popular 2026`
const DESC = `Eventos fitness en Venustiano Carranza 2026: competencias de boxeo, carreras populares, eventos en Foro Sol y actividad deportiva del oriente de CDMX.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EventosVenustianoCarranzaPage() {
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
      publishDate="2026-06-07"
      faq={section.faq}
      autorTip="Las competencias de boxeo amateur del oriente de CDMX tienen más técnica real que muchos eventos de kickboxing boutique de Santa Fe con DJ y pantallas LED. El deporte popular sin sponsor sigue siendo el más honesto, cuate."
    />
  )
}
