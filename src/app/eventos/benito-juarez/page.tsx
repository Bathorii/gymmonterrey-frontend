// src/app/eventos/benito-juarez/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-benito-juarez'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'eventos' as const
const section = localidadContent.eventos
const H1 = `Eventos fitness en Benito Juárez, CDMX – Carreras y CrossFit 2026 (${section.stats[0].value})`
const DESC = `Eventos fitness en Benito Juárez CDMX 2026: competencias CrossFit, grupos running Parque Hundido, Maratón CDMX y talleres deportivos en Insurgentes.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EventosBenitoJuarezPage() {
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
      publishDate="2026-05-30"
      faq={section.faq}
      autorTip="El Parque Hundido los sábados a las 7am es otro ambiente — sin tráfico, fresco, y los grupos de running que salen de ahí llevan años con el mismo ritual. Llega 10 minutos antes, no después. En CDMX quien llega tarde pierde el grupo y la comunidad, cuate."
    />
  )
}
