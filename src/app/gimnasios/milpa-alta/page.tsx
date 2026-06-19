// src/app/gimnasios/milpa-alta/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-milpa-alta'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'gimnasios' as const
const section = localidadContent.gimnasios
const H1 = `Gimnasios en Milpa Alta, CDMX — Deporte auténtico rural (${section.stats[0].value})`
const DESC = `Gimnasios en Milpa Alta CDMX: 21 opciones desde $200 MXN/mes. La alcaldía más rural de CDMX. Membresías económicas en Pueblo de Milpa Alta y Av. México.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function GimnasiosMilpaAltaPage() {
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
      publishDate="2026-06-13"
      faq={section.faq}
      autorTip="Güey, Milpa Alta tiene gyms que llevan décadas aguantando sin franquicias ni app de check-in. Si vivís acá, $300 MXN al mes y tienes tu hierro. Si venís de Condesa, el traslado no vale la pena — pero eso ya lo sabías."
    />
  )
}
