// src/app/gimnasios/benito-juarez/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-benito-juarez'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'gimnasios' as const
const section = localidadContent.gimnasios
const H1 = `Gimnasios en Benito Juárez, CDMX – Guía completa 2026 (${section.stats[0].value})`
const DESC = `Gimnasios en Benito Juárez CDMX: 180 opciones $500–$2,500 MXN/mes. WTC, Insurgentes Sur, Del Valle. Smart Fit, Sport City y gimnasios de barrio.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function GimnasiosBenitoJuarezPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Gimnasios"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-05-30"
      faq={section.faq}
      autorTip="La neta de Benito Juárez: los independientes de Del Valle tienen mejor hierro que muchas cadenas de Insurgentes al mismo precio. Evita el Metro en hora pico entre semana para llegar al gym — entre 7-9am y 5-7pm es un caos, cuate. Jala temprano o tarde."
    />
  )
}
