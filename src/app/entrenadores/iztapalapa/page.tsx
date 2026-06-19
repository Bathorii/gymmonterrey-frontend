// src/app/entrenadores/iztapalapa/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-iztapalapa'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'entrenadores' as const
const section = localidadContent.entrenadores
const H1 = `Entrenadores personales en Iztapalapa, CDMX – Certificados 2026 (${section.stats[0].value})`
const DESC = `Entrenadores personales en Iztapalapa, CDMX: sesiones $300–$800 MXN. Los más accesibles del CDMX. Boxeo, funcional y fuerza. Cerro de la Estrella para outdoor.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EntrenadoresIztapalapaPage() {
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
      publishDate="2026-06-04"
      faq={section.faq}
      autorTip="Cuate, en Iztapalapa el mejor entrenador de boxeo no tiene Instagram ni se anuncia en Google — está en el gimnasio de la esquina desde hace 20 años y lo conoce cualquier vecino que haya jalado hierro en la colonia. El boca a boca local vale más que cualquier búsqueda online en esta alcaldía."
    />
  )
}
