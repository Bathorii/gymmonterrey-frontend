// src/app/entrenadores/iztacalco/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-iztacalco'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'entrenadores' as const
const section = localidadContent.entrenadores
const H1 = `Entrenadores personales en Iztacalco, CDMX — Certificados y asequibles 2026`
const DESC = `Entrenadores personales en Iztacalco, CDMX. PTs certificados desde $250 MXN/sesión. Parque Velódromo y Canal de la Viga. Precio real sin boutique.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EntrenadoresIztacalcoPage() {
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
      publishDate="2026-06-08"
      faq={section.faq}
      autorTip="El cuate que lleva diez años entrenando boxeadores en Iztacalco sabe más de movimiento que cualquier trainer de Reforma con feed impecable. Buscá referencias directas de atletas que hayan mejorado con ese coach — eso es el filtro real, neta."
    />
  )
}
