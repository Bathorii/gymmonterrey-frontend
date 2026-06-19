// src/app/bienestar/cuajimalpa/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-cuajimalpa'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const section = localidadContent.bienestar

export const metadata: Metadata = {
  title: section.h1,
  description: section.metaDesc,
  alternates: { canonical: `${city.baseUrl}/bienestar/cuajimalpa/` },
  openGraph: baseOpenGraph({ type: 'article', title: section.h1, description: section.metaDesc, url: `${city.baseUrl}/bienestar/cuajimalpa/` }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function CuajimaipaBienestarPage() {
  return (
    <LocalidadPage
      localidadNombre="Cuajimalpa"
      localidadSlug="cuajimalpa"
      categoriaSlug="bienestar"
      categoriaLabel="Bienestar"
      h1={section.h1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-12"
      faq={section.faq}
      autorTip="Para trail runners que entrenan en el Bosque de Cuajimalpa: fisio preventiva una vez al mes mínimo. El terreno irregular genera sobreuso de tibial anterior y presión en rodilla de bajada que se acumula sin síntomas y aparece de golpe. La fisio antes del dolor es mucho más barata que la fisio después, neta cuate."
    />
  )
}
