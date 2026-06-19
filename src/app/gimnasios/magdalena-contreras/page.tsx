// src/app/gimnasios/magdalena-contreras/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-magdalena-contreras'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'gimnasios' as const
const section = localidadContent.gimnasios
const H1 = `Gimnasios en La Magdalena Contreras, CDMX — Opción verde 2026`
const DESC = `Gimnasios en La Magdalena Contreras, CDMX: 61 opciones desde $400 MXN/mes. Smart Fit y gimnasios independientes. Acceso al Bosque Álvaro Obregón. Guía de Rodrigo.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function GimnasiosMagdalenaContrerasPage() {
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
      publishDate="2026-06-09"
      faq={section.faq}
      autorTip="La neta de La Magdalena Contreras: el gym te cuesta $400-$900 MXN al mes y a 20 minutos tenés el Ajusco para senderismo real. Esa combinación — sala de pesas más montaña accesible — no la tiene ninguna alcaldía del centro. Si el outdoor forma parte de tu rutina, cuate, este es tu barrio en la CDMX."
    />
  )
}
