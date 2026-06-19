// src/app/entrenadores/milpa-alta/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-milpa-alta'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'entrenadores' as const
const section = localidadContent.entrenadores
const H1 = `Entrenadores personales en Milpa Alta, CDMX — PT comunitario (${section.stats[0].value})`
const DESC = `Entrenadores personales en Milpa Alta CDMX. Sesiones desde $150 MXN. PTs comunitarios en la alcaldía más rural de CDMX. Entrenamiento funcional y deportes.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EntrenadoresMilpaAltaPage() {
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
      publishDate="2026-06-13"
      faq={section.faq}
      autorTip="Los PTs que conozco en Milpa Alta saben hacer senderismo en el Teuhtli como calentamiento. Eso vale más que cualquier certificación de influencer — el territorio lo conocen de chamba real, cuate."
    />
  )
}
