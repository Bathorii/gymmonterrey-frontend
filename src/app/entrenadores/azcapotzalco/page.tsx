// src/app/entrenadores/azcapotzalco/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-azcapotzalco'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'entrenadores' as const
const section = localidadContent.entrenadores
const H1 = `Entrenadores personales en Azcapotzalco, CDMX — Box y fuerza 2026`
const DESC = `Entrenadores personales en Azcapotzalco, CDMX. PTs y entrenadores de box $150–$500 MXN/sesión. Sin markup de colonia. Metro El Rosario Línea 6. Trabajo real.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EntrenadoresAzcapotzalcoPage() {
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
      publishDate="2026-06-06"
      faq={section.faq}
      autorTip="Un entrenador de box de Azcapotzalco que peleó en su momento va a enseñarte qué funciona bajo presión — no lo que dice el manual de coaching. La neta es que ese conocimiento no lo encontrás en un estudio boutique de Polanco, cuate."
    />
  )
}
