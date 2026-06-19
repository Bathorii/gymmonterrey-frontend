// src/app/eventos/iztacalco/page.tsx
import type { Metadata } from 'next'
import { baseOpenGraph, OG_IMAGE } from '@/lib/metadata'
import { city } from '@/config/city'
import { localidadContent } from '@/data/cdmx/localidad-iztacalco'
import { LocalidadPage } from '@/components/localidad/LocalidadPage'

const CATEGORIA = 'eventos' as const
const section = localidadContent.eventos
const H1 = `Eventos fitness en Iztacalco, CDMX — Velódromo, canal y cultura popular 2026`
const DESC = `Eventos fitness en Iztacalco, CDMX 2026: eventos del Velódromo Nacional, actividades en Canal de la Viga y torneos de artes marciales barriales. Acceso Metro Puebla.`

export const metadata: Metadata = {
  title: H1,
  description: DESC,
  alternates: { canonical: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/` },
  openGraph: baseOpenGraph({ title: H1, description: DESC, url: `${city.baseUrl}/${CATEGORIA}/${localidadContent.slug}/`, type: 'article' }),
  twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] },
}

export default function EventosIztacalcoPage() {
  return (
    <LocalidadPage
      localidadNombre={localidadContent.nombre}
      localidadSlug={localidadContent.slug}
      categoriaSlug={CATEGORIA}
      categoriaLabel="Eventos"
      h1={H1}
      intro={section.intro}
      stats={section.stats}
      vecinos={section.vecinos}
      categoriaLinks={section.categoriaLinks}
      sobreBarrio={localidadContent.sobreBarrio}
      publishDate="2026-06-08"
      faq={section.faq}
      autorTip="Cuando el Velódromo Nacional tiene evento abierto al público, es de las experiencias deportivas más auténticas del oriente de la CDMX. La agenda la dan la CONADE y las redes del velódromo. Desde Metro Puebla son minutos, cuate."
    />
  )
}
