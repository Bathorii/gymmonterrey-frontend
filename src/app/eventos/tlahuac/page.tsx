// src/app/eventos/tlahuac/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-tlahuac'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'eventos' as const
const section = localidadContent.eventos
const H1 = `Eventos fitness en Tláhuac, CDMX — Deporte popular y naturaleza 2026`
const DESC = `Eventos fitness Tláhuac CDMX 2026: torneos barriales, caminatas al Lago Tláhuac y deporte popular en chinampas. La agenda deportiva del sur lacustre de la CDMX.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EventosTlahuacPage() {
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
      publishDate="2026-06-11"
      faq={section.faq}
      autorTip="Las caminatas alrededor del Lago Tláhuac son el evento gratuito más subestimado del sur de la CDMX. Sin inscripción, sin costo, con un entorno lacustre que no existe en ningún otro punto de la ciudad. Güey, eso no tiene precio."
    />
  )
}
