// src/app/gimnasios/cuajimalpa/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-cuajimalpa'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const section = localidadContent.gimnasios

export const metadata: Metadata = {
  title: section.h1,
  description: section.metaDesc,
  alternates: { canonical: `${city.baseUrl}/gimnasios/cuajimalpa/` },
  openGraph: baseOpenGraph({ type: 'article', title: section.h1, description: section.metaDesc, url: `${city.baseUrl}/gimnasios/cuajimalpa/` }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function CuajimalpaGimnasiosPage() {
  return (
    <LocalidadPage
      localidadNombre="Cuajimalpa"
      localidadSlug="cuajimalpa"
      categoriaSlug="gimnasios"
      categoriaLabel="Gimnasios"
      h1={section.h1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-12"
      faq={section.faq}
      autorTip="La Av. Vasco de Quiroga en Santa Fe a las 7:30am es un caos total — si quieres entrenar antes del trabajo, la ventana de 5:30-7am es la única viable en ese lado de Cuajimalpa. Del lado del bosque el acceso es otro mundo: sin tráfico y con senderos a la salida del gym, a huevo cuate."
    />
  )
}
