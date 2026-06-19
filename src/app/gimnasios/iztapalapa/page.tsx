// src/app/gimnasios/iztapalapa/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-iztapalapa'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'gimnasios' as const
const section = localidadContent.gimnasios
const H1 = `Gimnasios en Iztapalapa, CDMX – Guía completa 2026 (${section.stats[0].value})`
const DESC = `Gimnasios en Iztapalapa, CDMX: 108 opciones $300–$1,000 MXN/mes. Los precios más bajos del CDMX. Boxeo auténtico, Cerro de la Estrella. Metro Línea A.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function GimnasiosIztapalapaPage() {
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
      publishDate="2026-06-04"
      faq={section.faq}
      autorTip="En Iztapalapa las escalinatas del Cerro de la Estrella antes de las 8am son el mejor warmup de activación cardiovascular que encontrás en el CDMX sin pagar nada. Cuate, el desnivel te exige más que cualquier caminadora y el contexto arqueológico no tiene precio."
    />
  )
}
