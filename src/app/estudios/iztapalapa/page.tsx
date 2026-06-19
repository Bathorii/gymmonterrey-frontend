// src/app/estudios/iztapalapa/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-iztapalapa'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'estudios' as const
const section = localidadContent.estudios
const H1 = `Estudios fitness en Iztapalapa, CDMX – Funcional, Boxeo y Zumba 2026 (${section.stats[0].value})`
const DESC = `Estudios fitness en Iztapalapa, CDMX: zumba, boxeo fitness y funcional desde $80 MXN. La alcaldía más accesible del CDMX para actividad guiada. Metro Línea A.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EstudiosIztapalapaPage() {
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
      publishDate="2026-06-04"
      faq={section.faq}
      autorTip="Neta, cuate: en Iztapalapa el boxeo de gimnasio real no es tendencia — es tradición. Si buscás aprender boxeo de verdad en el CDMX, esta es tu alcaldía. Los coaches con historial de competencia están acá, no en Polanco."
    />
  )
}
