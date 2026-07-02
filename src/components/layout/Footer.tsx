// src/components/layout/Footer.tsx
import Link from 'next/link'
import { city } from '@/config/city'

export function Footer() {
  return (
    <footer style={{ background: 'var(--dark-bg)', color: '#9ca3af', padding: '48px 32px 24px' }}>
      <div style={{ maxWidth: 1180, margin: 'auto' }}>
        <div className="footer-grid">
          <div>
            <Link href="/" style={{ fontSize: 22, fontWeight: 800, color: 'white', display: 'block', marginBottom: 12 }}>
              GYM<span style={{ color: 'var(--orange)' }}>{city.slug.toUpperCase()}</span>.MX
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>
              El directorio más completo de gimnasios, estudios fitness y entrenadores personales en {city.name}, {city.country === 'MX' ? 'México' : city.country}.
            </p>
          </div>
          <div>
            <p style={{ color: 'white', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>Categorías</p>
            {[['Gimnasios', '/gimnasios/'], ['Estudios', '/estudios/'], ['Entrenadores', '/entrenadores/'], ['Eventos', '/eventos/'], ['Bienestar', '/bienestar/']].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: 'block', color: '#9ca3af', fontSize: 14, marginBottom: 8 }}>{label}</Link>
            ))}
          </div>
          <div>
            <p style={{ color: 'white', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>Municipios</p>
            {['Benito Juárez', 'Cuauhtémoc', 'Miguel Hidalgo', 'Coyoacán', 'Tlalpan'].map(label => (
              <span key={label} style={{ display: 'block', color: '#9ca3af', fontSize: 14, marginBottom: 8 }}>{label}</span>
            ))}
          </div>
          <div>
            <p style={{ color: 'white', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>GymMonterrey</p>
            {[['Sobre nosotros', '/sobre-nosotros/'], ['Agregar negocio', '/agregar-negocio/'], ['Blog', '/blog/'], ['FAQ', '/faq/'], ['Contacto', '/contacto/'], ['Términos de uso', '/terminos/'], ['Privacidad', '/privacidad/']].map(([label, href]) => (
              <Link key={href} href={href} style={{ display: 'block', color: '#9ca3af', fontSize: 14, marginBottom: 8 }}>{label}</Link>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {city.domain} · Todos los derechos reservados</span>
          <span>Hecho con ❤️ para {city.name}</span>
        </div>
      </div>
    </footer>
  )
}
