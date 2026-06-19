// src/data/categories.ts
export const categories = [
  { slug: 'gimnasios', label: 'Gimnasios', icon: '🏋️', count: 1500, description: 'Gimnasios en Monterrey' },
  { slug: 'estudios', label: 'Estudios', icon: '🧘', count: 300, description: 'Estudios fitness en Monterrey' },
  { slug: 'entrenadores', label: 'Entrenadores', icon: '🚶', count: 400, description: 'Entrenadores personales en Monterrey' },
  { slug: 'eventos', label: 'Eventos', icon: '📅', count: 180, description: 'Eventos fitness en Monterrey' },
  { slug: 'bienestar', label: 'Bienestar', icon: '🌿', count: 230, description: 'Centros de bienestar en Monterrey' },
] as const

export type Category = typeof categories[number]
