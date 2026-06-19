// src/app/bienestar/milpa-alta/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-milpa-alta'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar
const H1 = `Bienestar y salud en Milpa Alta, CDMX — Medicina comunitaria (${section.stats[0].value})`
const DESC = `Bienestar en Milpa Alta CDMX: servicios de salud y recuperación desde $100 MXN. Medicina tradicional, fisioterapia básica y nutrición comunitaria en alcaldía rural.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarMilpaAltaPage() {
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
      publishDate="2026-06-13"
      faq={section.faq}
      autorTip="El sobador que trabaja en el Pueblo de Milpa Alta lleva 30 años tratando a gente que trabaja de manera física. Neta que sus manos saben más de lesiones de sobrecarga que algunos fisioterapeutas con diplomado de Instagram. La tradición tiene valor, cuate."
    />
  )
}
