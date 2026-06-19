// src/app/entrenadores/benito-juarez/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-benito-juarez'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'entrenadores' as const
const section = localidadContent.entrenadores
const H1 = `Entrenadores personales en Benito Juárez, CDMX – Certificados 2026 (${section.stats[0].value})`
const DESC = `Entrenadores personales en Benito Juárez CDMX. Certificados NSCA, ACE y Colef. Sesiones $500–$1,500 MXN. Parque Hundido y domicilio.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EntrenadoresBenitoJuarezPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Entrenadores"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-05-30"
      faq={section.faq}
      autorTip="Para boxeo amateur, Benito Juárez tiene preparadores físicos que conocen el deporte de verdad — Ciudad de los Deportes tiene esa tradición. No confundas al PT que hace clase de kickboxing fitness con el que tiene experiencia en acondicionamiento para combate real, cuate."
    />
  )
}
