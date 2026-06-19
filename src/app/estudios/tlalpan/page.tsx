// src/app/estudios/tlalpan/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-tlalpan'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'estudios' as const
const section = localidadContent.estudios
const H1 = `Estudios fitness en Tlalpan, CDMX — Yoga, Trail Running y Marciales 2026`
const DESC = `Estudios en Tlalpan: yoga, trail en Bosque de Tlalpan y artes marciales. Clase desde $80 MXN. Alcaldía más verde de la CDMX. Rodrigo 2026.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EstudiosTlalpanPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Estudios"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-03"
      faq={section.faq}
      autorTip="Los grupos de trail del Bosque de Tlalpan los sábados a las 7am son el estudio fitness más chido de la CDMX — gratuito, con desnivel real y comunidad que lleva años en los mismos senderos, cuate."
    />
  )
}
