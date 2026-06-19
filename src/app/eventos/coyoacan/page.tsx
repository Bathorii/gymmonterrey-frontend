// src/app/eventos/coyoacan/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-coyoacan'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'eventos' as const
const section = localidadContent.eventos

export const metadata: Metadata = {
  title: section.h1,
  description: section.metaDesc,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ type: 'article', title: section.h1, description: section.metaDesc, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function CoyoacanEventosPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Eventos"
      h1={section.h1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-02"
      faq={section.faq}
      autorTip="El circuito de los Viveros los domingos temprano es el evento gratuito más consistente del sur de CDMX. 3.5km de perímetro, sin carro, sin cuota. Para un día de cardio activo de recuperación, no hay nada mejor en toda la delegación. Qué pedo con lo que se regala gratis acá."
    />
  )
}
