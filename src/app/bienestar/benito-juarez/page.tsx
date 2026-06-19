// src/app/bienestar/benito-juarez/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-benito-juarez'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar
const H1 = `Bienestar y recuperación en Benito Juárez, CDMX – Fisio y Nutrición 2026 (${section.stats[0].value})`
const DESC = `Bienestar en Benito Juárez CDMX: fisioterapia deportiva, nutrición certificada y masajes terapéuticos. WTC y Del Valle. Sesión $600–$1,800 MXN.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarBenitoJuarezPage() {
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
      publishDate="2026-05-30"
      faq={section.faq}
      autorTip="Benito Juárez tiene clínicas de fisioterapia deportiva en el WTC con tecnología que no encontrás en Polanco al mismo precio. Para lesiones de hombro y muñeca del boxeo, busca fisioterapeutas con experiencia en deportes de combate — no cualquier fisio entiende esas sobrecargas específicas, cuate."
    />
  )
}
