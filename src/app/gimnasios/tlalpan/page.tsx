// src/app/gimnasios/tlalpan/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-tlalpan'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'gimnasios' as const
const section = localidadContent.gimnasios
const H1 = `Gimnasios en Tlalpan, CDMX — 112 opciones desde $500 MXN en la alcaldía más verde 2026`
const DESC = `Gimnasios en Tlalpan, CDMX: 112 opciones. Precios $500–$1,800 MXN/mes. Acceso al Bosque de Tlalpan. Metro Tasqueña Línea 2. Rodrigo recomienda 2026.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function GimnasiosTlalpanPage() {
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
      publishDate="2026-06-03"
      faq={section.faq}
      autorTip="Ninguna otra alcaldía de la CDMX te da gym + Bosque de Tlalpan a 10 minutos — esa combinación es el diferenciador que los cuates de Roma Norte no pueden replicar, neta."
    />
  )
}
