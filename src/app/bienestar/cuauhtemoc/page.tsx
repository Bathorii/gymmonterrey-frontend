// src/app/bienestar/cuauhtemoc/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-cuauhtemoc'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar

export const metadata: Metadata = {
  title: section.h1,
  description: section.metaDesc,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: section.h1, description: section.metaDesc, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarCuauhtemocPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Bienestar"
      h1={section.h1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-16"
      faq={section.faq}
      autorTip="El Mercado de Medellín y el Parque España son los puntos de concentración de la Roma antes y después del gym. Si entrenas temprano, hay cafeterías abiertas desde las 7am en Álvaro Obregón — desayuno de verdad por menos de 100 pesos, sin el precio de la colonia."
    />
  )
}
