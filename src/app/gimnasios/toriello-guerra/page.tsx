// src/app/gimnasios/toriello-guerra/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { barrioContent } from '@/data/cdmx/barrio-toriello-guerra'
import { BarrioPage } from '@/components/barrio/BarrioPage'

const CATEGORIA = 'gimnasios' as const
const section = barrioContent.gimnasios
const H1 = section.h1
const DESC = section.metaDesc

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${barrioContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${barrioContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function GimnasiosTorielloGuerraPage() {
  return (
    <BarrioPage
      barrioNombre={barrioContent.nombre}
      barrioSlug={barrioContent.slug}
      parentDistrictNombre={barrioContent.parentDistrict.nombre}
      parentDistrictSlug={barrioContent.parentDistrict.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Gimnasios"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      barrios={section.barrios}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={barrioContent.sobreBarrio}
      publishDate="2026-06-18"
      faq={section.faq}
      autorTip="Llegá en los primeros 30 minutos de apertura — los gymns de barrio están casi vacíos a esa hora."
    />
  )
}
