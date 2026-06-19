// src/app/gimnasios/venustiano-carranza/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-venustiano-carranza'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'gimnasios' as const
const section = localidadContent.gimnasios
const H1 = `Gimnasios en Venustiano Carranza, CDMX – Guía 2026`
const DESC = `Gimnasios en Venustiano Carranza CDMX: 82 opciones desde $400 MXN/mes. Pesas, boxeo y funcional. Metro Balbuena y Av. Congreso de la Unión.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function GimnasiosVenustianoCarranzaPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Gimnasios"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-07"
      faq={section.faq}
      autorTip="Venustiano Carranza tiene gimnasios de barrio con décadas de operación y entrenadores que llevan tanto tiempo que conocen a la familia entera de sus clientes. Eso no lo da ninguna cadena. A $500-$700 MXN al mes, cuate, es la propuesta más honesta del oriente de la ciudad."
    />
  )
}
