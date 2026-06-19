// src/app/estudios/miguel-hidalgo/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-miguel-hidalgo'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'estudios' as const
const section = localidadContent.estudios

export const metadata: Metadata = {
  title: section.h1,
  description: section.metaDesc,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: section.h1, description: section.metaDesc, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EstudiosMiguelHidalgoPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Estudios"
      h1={section.h1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-05-31"
      faq={section.faq}
      autorTip="Los estudios de yoga en el Bosque de Chapultepec los domingos por la mañana son los más chidos de CDMX — y son gratis o cuota voluntaria. Antes de pagar $2,500 MXN en Polanco, prueba lo que el bosque tiene para ofrecerte, güey."
    />
  )
}
