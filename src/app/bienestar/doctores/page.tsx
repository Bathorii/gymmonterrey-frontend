// src/app/bienestar/doctores/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { barrioContent } from '@/data/cdmx/barrio-doctores'
import { BarrioPage } from '@/components/barrio/BarrioPage'

const CATEGORIA = 'bienestar' as const
const section = barrioContent.bienestar
const H1 = section.h1
const DESC = section.metaDesc

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${barrioContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${barrioContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarDoctoresPage() {
  return (
    <BarrioPage
      barrioNombre={barrioContent.nombre}
      barrioSlug={barrioContent.slug}
      parentDistrictNombre={barrioContent.parentDistrict.nombre}
      parentDistrictSlug={barrioContent.parentDistrict.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Bienestar"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      barrios={section.barrios}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={barrioContent.sobreBarrio}
      publishDate="2026-06-18"
      faq={section.faq}
      autorTip="Para masaje deportivo, los días entre semana tienen mejor disponibilidad y a veces precio especial."
    />
  )
}
