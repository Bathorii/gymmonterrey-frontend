// src/app/bienestar/magdalena-contreras/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-magdalena-contreras'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar
const H1 = `Bienestar en La Magdalena Contreras, CDMX — Fisio y recuperación 2026`
const DESC = `Bienestar en La Magdalena Contreras, CDMX: fisioterapia, masajes y nutrición desde $200 MXN. Clínicas y centros de salud accesibles en el sur verde de la ciudad.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarMagdalenaContrerasPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Bienestar"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-09"
      faq={section.faq}
      autorTip="Después de una caminata al Ajusco, los cuádriceps y la cadera acumulan tensión real. Un masaje de tejido profundo 24-48 horas después marca la diferencia para poder volver a entrenar al día siguiente. En La Magdalena eso cuesta $180-$400 MXN — perfectamente accesible para incluirlo en la rutina de post-salida grande, cuate."
    />
  )
}
