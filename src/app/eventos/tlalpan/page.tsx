// src/app/eventos/tlalpan/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-tlalpan'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'eventos' as const
const section = localidadContent.eventos
const H1 = `Eventos fitness en Tlalpan, CDMX — Trail Running y Ultra Picacho-Ajusco 2026`
const DESC = `Eventos en Tlalpan 2026: trail en Bosque de Tlalpan, Ultra Picacho-Ajusco y competencias outdoor. CDMX más verde. Rodrigo recomienda.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EventosTlalpanPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Eventos"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-03"
      faq={section.faq}
      autorTip="La Ultra Picacho-Ajusco es el evento donde los runners de Tlalpan demuestran que entrenar en altitud real tiene su precio y su recompensa — si llegaste a estar listo para eso, cuate, qué pedo más chido."
    />
  )
}
