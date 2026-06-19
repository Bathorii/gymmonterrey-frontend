// src/app/entrenadores/cuajimalpa/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-cuajimalpa'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const section = localidadContent.entrenadores

export const metadata: Metadata = {
  title: section.h1,
  description: section.metaDesc,
  alternates: { canonical: `${city.baseUrl}/entrenadores/cuajimalpa/` },
  openGraph: baseOpenGraph({ type: 'article', title: section.h1, description: section.metaDesc, url: `${city.baseUrl}/entrenadores/cuajimalpa/` }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function CuajimalpaEntrenadoresPage() {
  return (
    <LocalidadPage
      localidadNombre="Cuajimalpa"
      localidadSlug="cuajimalpa"
      categoriaSlug="entrenadores"
      categoriaLabel="Entrenadores"
      h1={section.h1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-12"
      faq={section.faq}
      autorTip="Si trabajás en un corporativo de Santa Fe, pregunta en RRHH antes de pagar PT por tu cuenta — muchas empresas tienen programas de bienestar con entrenadores incluidos en los beneficios. Es el tipo de chamba que ya está pagada y no siempre la gente lo sabe, cuate."
    />
  )
}
