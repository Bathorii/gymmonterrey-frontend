// src/app/bienestar/iztacalco/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-iztacalco'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar
const H1 = `Bienestar y recuperación en Iztacalco, CDMX — Fisio y masajes accesibles 2026`
const DESC = `Bienestar en Iztacalco, CDMX: fisioterapia desde $300 MXN/sesión y masajes terapéuticos. Clínicas locales accesibles. Metro Puebla. Sin precio boutique.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarIztacalcoPage() {
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
      publishDate="2026-06-08"
      faq={section.faq}
      autorTip="La fisioterapia en Iztacalco es 40-60% más barata que en Polanco con formación universitaria equivalente. Para quien jala con volumen alto, la atención preventiva mensual cuesta menos que una lesión mal gestionada que te para tres semanas. Costo-beneficio claro, neta."
    />
  )
}
