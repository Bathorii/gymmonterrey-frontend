// src/app/estudios/magdalena-contreras/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-magdalena-contreras'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'estudios' as const
const section = localidadContent.estudios
const H1 = `Estudios fitness en La Magdalena Contreras — Funcional y outdoor 2026`
const DESC = `Estudios en La Magdalena Contreras, CDMX: clases funcionales, yoga y entrenamiento outdoor cerca del Ajusco. Clase desde $80 MXN. Guía sin filtros de Rodrigo.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EstudiosMagdalenaContrerasPage() {
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
      publishDate="2026-06-09"
      faq={section.faq}
      autorTip="La Magdalena no tiene el estudio boutique de Roma Norte, cuate — pero tiene algo que Roma Norte no puede darte: instructores que llevan años con los mismos grupos y acceso al Bosque de Álvaro Obregón a 10 minutos. Para clases de yoga o funcional en contexto verde real, eso vale más que la iluminación de diseño."
    />
  )
}
