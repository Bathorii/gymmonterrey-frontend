// src/app/bienestar/iztapalapa/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-iztapalapa'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar
const H1 = `Bienestar y recuperación en Iztapalapa, CDMX – Fisio y Salud 2026 (${section.stats[0].value})`
const DESC = `Bienestar en Iztapalapa, CDMX: fisioterapia $200–$400 MXN, masajes $200–$500 MXN. Los más accesibles del CDMX. IMSS disponible. Consultorios privados locales.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarIztapalapaPage() {
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
      publishDate="2026-06-04"
      faq={section.faq}
      autorTip="Cuate, en Iztapalapa la regla para fisio es simple: pedí la Cédula Profesional y verificala en el sitio de la SEP antes de la primera sesión. Precio bajo no implica mala calidad, pero sí implica que la verificación es más importante. Un fisio serio la muestra sin que se la pidas."
    />
  )
}
