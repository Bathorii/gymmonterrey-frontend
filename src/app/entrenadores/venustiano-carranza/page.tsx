// src/app/entrenadores/venustiano-carranza/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-venustiano-carranza'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'entrenadores' as const
const section = localidadContent.entrenadores
const H1 = `Entrenadores personales en Venustiano Carranza, CDMX – 2026`
const DESC = `Entrenadores personales en Venustiano Carranza CDMX: boxeo, funcional y pesas. Sesiones $200–$600 MXN. Coaches con experiencia real en el oriente de la ciudad.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EntrenadoresVenustianoCarranzaPage() {
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
      publishDate="2026-06-07"
      faq={section.faq}
      autorTip="Hay entrenadores en Venustiano Carranza que llevan más años formando atletas que algunos instructores del norte llevan vivos. Esa experiencia práctica acumulada vale más que cualquier certificación de fin de semana. Pregunta quién es el entrenador antes de preguntar cuánto cuesta el gym, güey."
    />
  )
}
