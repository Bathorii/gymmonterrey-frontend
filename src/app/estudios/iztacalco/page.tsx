// src/app/estudios/iztacalco/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-iztacalco'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'estudios' as const
const section = localidadContent.estudios
const H1 = `Estudios fitness en Iztacalco, CDMX — Funcional, box y disciplinas populares 2026`
const DESC = `Estudios fitness en Iztacalco, CDMX: artes marciales, funcional y aeróbicos desde $200 MXN/clase. Cultura deportiva popular, sin boutique caro.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EstudiosIztacalcoPage() {
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
      publishDate="2026-06-08"
      faq={section.faq}
      autorTip="Las academias de box de Iztacalco tienen entrenadores con historial de competencia real — no es cardio-boxing para quemar calorías. Si buscás aprender a boxear de verdad a precio chilango, esta es la zona, neta cuate."
    />
  )
}
