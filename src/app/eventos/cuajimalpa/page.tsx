// src/app/eventos/cuajimalpa/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-cuajimalpa'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const section = localidadContent.eventos

export const metadata: Metadata = {
  title: section.h1,
  description: section.metaDesc,
  alternates: { canonical: `${city.baseUrl}/eventos/cuajimalpa/` },
  openGraph: baseOpenGraph({ type: 'article', title: section.h1, description: section.metaDesc, url: `${city.baseUrl}/eventos/cuajimalpa/` }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function CuajimalpaEventosPage() {
  return (
    <LocalidadPage
      localidadNombre="Cuajimalpa"
      localidadSlug="cuajimalpa"
      categoriaSlug="eventos"
      categoriaLabel="Eventos"
      h1={section.h1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-12"
      faq={section.faq}
      autorTip="Las carreras de trail en el Bosque de Cuajimalpa se corren de octubre a mayo — la temporada seca es clave porque los senderos en lluvia son otro nivel de dificultad. Si es tu primera carrera de montaña en CDMX, empieza por los eventos de 10km antes de meterte a distancias con más desnivel, güey."
    />
  )
}
