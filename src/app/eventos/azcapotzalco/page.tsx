// src/app/eventos/azcapotzalco/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-azcapotzalco'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'eventos' as const
const section = localidadContent.eventos
const H1 = `Eventos fitness en Azcapotzalco, CDMX — Torneos de box y barriales 2026`
const DESC = `Eventos fitness en Azcapotzalco 2026: torneos de box amateur, Parque Tezozomoc y Metro El Rosario. Cultura deportiva obrera auténtica sin colonia premium.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EventosAzcapotzalcoPage() {
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
      publishDate="2026-06-06"
      faq={section.faq}
      autorTip="El Parque Tezozomoc lo uso para cardio de recuperación cuando no quiero ir al gym — el acceso es libre, el espacio es grande y a esa hora de la mañana está tranquilo. Lo del mapa de México en relieve es un detalle raro y bacán que no tiene ningún otro parque de la ciudad."
    />
  )
}
