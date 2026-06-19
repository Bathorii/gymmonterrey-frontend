// src/app/bienestar/tlalpan/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-tlalpan'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar
const H1 = `Bienestar en Tlalpan, CDMX — Fisioterapia para Trail Running y Masajes 2026`
const DESC = `Bienestar en Tlalpan CDMX: fisioterapia para trail, masajes y nutrición deportiva. Desde $250 MXN. Especialistas en outdoor. Rodrigo 2026.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarTlalpanPage() {
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
      publishDate="2026-06-03"
      faq={section.faq}
      autorTip="Un fisioterapeuta en Tlalpan que conoce las lesiones del Bosque de Ajusco entiende lo que le pasa a tu tobillo de una manera que el de Polanco no puede — esa especialización vale el viaje, cuate."
    />
  )
}
