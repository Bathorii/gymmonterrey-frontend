// src/app/estudios/venustiano-carranza/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-venustiano-carranza'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'estudios' as const
const section = localidadContent.estudios
const H1 = `Estudios fitness en Venustiano Carranza, CDMX – Boxeo y Funcional 2026`
const DESC = `Estudios fitness en Venustiano Carranza: boxeo técnico, funcional y kickboxing. Clases desde $80 MXN. Autenticidad chilanga cerca del Foro Sol y Metro Balbuena.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EstudiosVenustianoCarranzaPage() {
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
      publishDate="2026-06-07"
      faq={section.faq}
      autorTip="Una clase de boxeo técnico en Venustiano Carranza con un entrenador que ha estado en el ring vale más que un curso de instructor de cardiobox en cualquier centro de la Roma. La neta es esa: el conocimiento técnico de combate no tiene estrato ni código postal."
    />
  )
}
