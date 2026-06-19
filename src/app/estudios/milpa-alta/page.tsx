// src/app/estudios/milpa-alta/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-milpa-alta'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'estudios' as const
const section = localidadContent.estudios
const H1 = `Estudios fitness en Milpa Alta, CDMX — Deporte comunitario (${section.stats[0].value})`
const DESC = `Estudios y clases fitness en Milpa Alta CDMX: opciones comunitarias desde $100 MXN. Sin boutiques — deporte popular en la alcaldía más rural del CDMX.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EstudiosMilpaAltaPage() {
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
      publishDate="2026-06-13"
      faq={section.faq}
      autorTip="La neta sobre estudios en Milpa Alta: los centros comunitarios del INAADE tienen más energía real que muchos estudios boutique de Roma Norte. Sin costo, sin app, sin cobro por la toalla. A huevo que tiene valor."
    />
  )
}
