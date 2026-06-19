// src/app/bienestar/venustiano-carranza/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-venustiano-carranza'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'bienestar' as const
const section = localidadContent.bienestar
const H1 = `Bienestar y recuperación en Venustiano Carranza, CDMX – 2026`
const DESC = `Bienestar en Venustiano Carranza CDMX: fisioterapia, masaje deportivo y nutrición. Desde $150 MXN. Recuperación real en el oriente de la ciudad.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function BienestarVenustianoCarranzaPage() {
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
      publishDate="2026-06-07"
      faq={section.faq}
      autorTip="En Venustiano Carranza podés pagar fisioterapia preventiva mensual sin que sea el gasto principal del mes. $200-$500 MXN por sesión hace que la recuperación real sea viable para quien jala en serio — no solo para quien entrena en Santa Fe con tarjeta corporativa, a huevo."
    />
  )
}
