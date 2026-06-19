// src/app/entrenadores/tlahuac/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-tlahuac'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'entrenadores' as const
const section = localidadContent.entrenadores
const H1 = `Entrenadores personales en Tláhuac, CDMX — PT accesibles 2026`
const DESC = `Entrenadores personales Tláhuac CDMX: sesiones desde $200 MXN. PT de barrio con experiencia práctica. La opción más económica del sur de la CDMX.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EntrenadoresTlahuacPage() {
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
      publishDate="2026-06-11"
      faq={section.faq}
      autorTip="Un PT de Tláhuac que usa el Lago Tláhuac y las chinampas para sesiones outdoor te da un entorno que no existe en ninguna otra alcaldía de la CDMX. Para entrenamiento funcional con naturaleza lacustre, eso es diferencial real, cuate."
    />
  )
}
