// src/app/estudios/azcapotzalco/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-azcapotzalco'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'estudios' as const
const section = localidadContent.estudios
const H1 = `Estudios fitness en Azcapotzalco, CDMX — Box, funcional y aeróbicos 2026`
const DESC = `Estudios fitness en Azcapotzalco, CDMX: box técnico, funcional y aeróbicos. Clases $80–$250 MXN. Movimiento obrero auténtico sin precio de colonia premium.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EstudiosAzcapotzalcoPage() {
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
      publishDate="2026-06-06"
      faq={section.faq}
      autorTip="El box técnico de Azcapotzalco no es cardio boxing con playlist — es técnica real con entrenadores que pelearon. Si querés aprender a boxear de verdad sin el marketing boutique de Condesa, acá es donde hay que ir, güey."
    />
  )
}
