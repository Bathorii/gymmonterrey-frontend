// src/app/bienestar/tlahuac/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-tlahuac'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar
const H1 = `Bienestar y salud en Tláhuac, CDMX — Centros de salud y recuperación 2026`
const DESC = `Bienestar en Tláhuac CDMX: fisioterapia, masajes y centros de salud desde $150 MXN. IMSS, ISSSTE y clínicas privadas accesibles en el sur de la ciudad.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarTlahuacPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Bienestar"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-11"
      faq={section.faq}
      autorTip="El Lago Tláhuac es el activo de bienestar más subestimado de la alcaldía. Una caminata de una hora por el perímetro del lago a primera hora de la mañana tiene más impacto en el estrés y la recuperación que cualquier sesión de spa. Y no cuesta nada, cuate."
    />
  )
}
