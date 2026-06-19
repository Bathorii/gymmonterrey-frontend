// src/app/estudios/benito-juarez/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-benito-juarez'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'estudios' as const
const section = localidadContent.estudios
const H1 = `Estudios fitness en Benito Juárez, CDMX – CrossFit, Yoga y Pilates 2026 (${section.stats[0].value})`
const DESC = `Estudios fitness en Benito Juárez CDMX: CrossFit, pilates Reformer, yoga y spinning. Insurgentes Sur y Del Valle. Clase $200–$600 MXN.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EstudiosBenitoJuarezPage() {
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
      publishDate="2026-05-30"
      faq={section.faq}
      autorTip="Los boxes de Benito Juárez tienen atletismo más auténtico que los de Roma Norte — menos hype, más jalada de verdad. Si buscas CrossFit con comunidad real sin pagar marca de barrio, Insurgentes y Del Valle tienen opciones que no te van a decepcionar, cuate."
    />
  )
}
