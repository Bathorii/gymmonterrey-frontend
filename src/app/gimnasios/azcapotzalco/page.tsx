// src/app/gimnasios/azcapotzalco/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-azcapotzalco'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'gimnasios' as const
const section = localidadContent.gimnasios
const H1 = `Gimnasios en Azcapotzalco, CDMX — Salas de box y funcional 2026`
const DESC = `Gimnasios en Azcapotzalco, CDMX: $400–$1,200 MXN/mes. Metro El Rosario Línea 6. Cultura de boxeo auténtica y precios reales sin markup de colonia premium.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function GimnasiosAzcapotzalcoPage() {
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
      publishDate="2026-06-06"
      faq={section.faq}
      autorTip="Si buscás levantar hierro serio sin pagar el precio de Condesa, Azcapotzalco es la respuesta — cuate, el Metro Línea 6 desde El Rosario te llega rápido y el ahorro en mensualidad comparado con Roma Norte supera los $1,000 MXN al mes."
    />
  )
}
