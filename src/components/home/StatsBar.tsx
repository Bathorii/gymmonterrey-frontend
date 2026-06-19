// src/components/home/StatsBar.tsx
import { homeContent } from '@/data'

export function StatsBar() {
  const { stats } = homeContent
  const items = [
    { value: stats.gyms, label: 'Gimnasios y estudios' },
    { value: stats.barrios, label: 'Colonias cubiertas' },
    { value: stats.localidades, label: 'Colonias' },
    { value: stats.categories, label: 'Categorías' },
  ]
  return (
    <div className="stats-bar">
      {items.map(i => (
        <div key={i.label} style={{ textAlign: 'center', fontSize: 14 }}>
          <strong style={{ color: 'var(--orange)', fontSize: 20, display: 'block' }}>{i.value}</strong>
          {i.label}
        </div>
      ))}
    </div>
  )
}
