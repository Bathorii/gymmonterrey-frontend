// src/app/gimnasios/tlahuac/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-tlahuac'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'gimnasios' as const
const section = localidadContent.gimnasios
const H1 = `Gimnasios en Tláhuac, CDMX — 43 opciones accesibles 2026`
const DESC = `Gimnasios en Tláhuac CDMX: 43 opciones desde $250 MXN/mes. Tren Ligero L12, Av. Tláhuac. Precios reales sin boutiques: la alcaldía más económica del sur.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function GimnasiosTlahuacPage() {
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
      publishDate="2026-06-11"
      faq={section.faq}
      autorTip="Los gimnasios de Tláhuac tienen una cosa que los del norte no pueden comprar: la gente lleva años en el mismo lugar. El instructor conoce a cada cliente, sabe su historia y da seguimiento real. Eso vale más que el app de reserva, cuate."
    />
  )
}
