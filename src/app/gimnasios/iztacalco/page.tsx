// src/app/gimnasios/iztacalco/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-iztacalco'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'gimnasios' as const
const section = localidadContent.gimnasios
const H1 = `Gimnasios en Iztacalco, CDMX — Precios reales y hierro chilango 2026 (${section.stats[0].value})`
const DESC = `Gimnasios en Iztacalco, CDMX: 74 opciones desde $350 MXN/mes. Velódromo Nacional, Metro Puebla. Precio accesible, cultura barrial, peso libre real.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function GimnasiosIztacalcoPage() {
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
      publishDate="2026-06-08"
      faq={section.faq}
      autorTip="En Iztacalco el filtro es simple: si tienen barra olímpica en buen estado, el resto del equipo suele seguir el mismo nivel. Visita antes de inscribirte — los que tienen clientela de años mantienen mejor el equipo porque la gente sabe volver cuando algo funciona. A huevo que sí, cuate."
    />
  )
}
