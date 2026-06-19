// src/app/eventos/magdalena-contreras/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-magdalena-contreras'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'eventos' as const
const section = localidadContent.eventos
const H1 = `Eventos fitness en La Magdalena Contreras, CDMX — Trail y outdoor 2026`
const DESC = `Eventos fitness en La Magdalena Contreras 2026: senderismo en el Ajusco, carreras de trail, eventos del IDUJEM y actividades outdoor en el Bosque Álvaro Obregón.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EventosMagdalenaContrerasPage() {
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
      publishDate="2026-06-09"
      faq={section.faq}
      autorTip="El Ajusco es el evento fitness permanente de La Magdalena Contreras — los sábados temprano hay grupos saliendo con regularidad y la dificultad real del terreno supera cualquier clase de bootcamp de studio. Si querés trail de verdad sin salir de la ciudad, cuate, el Ajusco desde La Magdalena es lo que buscás."
    />
  )
}
