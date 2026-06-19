// src/app/entrenadores/magdalena-contreras/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-magdalena-contreras'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'entrenadores' as const
const section = localidadContent.entrenadores
const H1 = `Entrenadores personales en La Magdalena Contreras, CDMX — 2026`
const DESC = `Entrenadores personales en La Magdalena Contreras, CDMX. Sesiones $250–$700 MXN. PTs con formación en ESEF y Licenciatura en Deportes. Rodrigo recomienda.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EntrenadoresMagdalenaContrerasPage() {
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
      publishDate="2026-06-09"
      faq={section.faq}
      autorTip="He conocido PTs de La Magdalena con formación de la ESEF que saben más de fisiología del ejercicio que entrenadores de gym boutique de Polanco con certificación online de $200 dólares. El barrio no define la calidad del entrenador, güey — el proceso de evaluación sí. Pedí siempre la sesión de prueba antes de comprometerte."
    />
  )
}
