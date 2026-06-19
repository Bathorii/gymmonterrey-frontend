export const DISTRICT_NAMES: Record<string, string> = {
  'cuauhtemoc':           'Cuauhtémoc',
  'benito-juarez':        'Benito Juárez',
  'miguel-hidalgo':       'Miguel Hidalgo',
  'coyoacan':             'Coyoacán',
  'alvaro-obregon':       'Álvaro Obregón',
  'iztacalco':            'Iztacalco',
  'iztapalapa':           'Iztapalapa',
  'gustavo-a-madero':     'Gustavo A. Madero',
  'azcapotzalco':         'Azcapotzalco',
  'venustiano-carranza':  'Venustiano Carranza',
  'magdalena-contreras':  'La Magdalena Contreras',
  'tlalpan':              'Tlalpan',
  'xochimilco':           'Xochimilco',
  'tlahuac':              'Tláhuac',
  'cuajimalpa':           'Cuajimalpa',
  'milpa-alta':           'Milpa Alta',
}

const EDGES: [string, string][] = [
  ['cuauhtemoc',        'miguel-hidalgo'],
  ['cuauhtemoc',        'benito-juarez'],
  ['cuauhtemoc',        'venustiano-carranza'],
  ['cuauhtemoc',        'iztacalco'],
  ['cuauhtemoc',        'azcapotzalco'],
  ['cuauhtemoc',        'gustavo-a-madero'],
  ['benito-juarez',     'miguel-hidalgo'],
  ['benito-juarez',     'coyoacan'],
  ['benito-juarez',     'iztacalco'],
  ['benito-juarez',     'alvaro-obregon'],
  ['miguel-hidalgo',    'alvaro-obregon'],
  ['miguel-hidalgo',    'azcapotzalco'],
  ['miguel-hidalgo',    'cuajimalpa'],
  ['coyoacan',          'alvaro-obregon'],
  ['coyoacan',          'iztacalco'],
  ['coyoacan',          'magdalena-contreras'],
  ['coyoacan',          'tlalpan'],
  ['coyoacan',          'xochimilco'],
  ['alvaro-obregon',    'magdalena-contreras'],
  ['alvaro-obregon',    'cuajimalpa'],
  ['iztacalco',         'iztapalapa'],
  ['iztacalco',         'venustiano-carranza'],
  ['iztapalapa',        'venustiano-carranza'],
  ['iztapalapa',        'tlahuac'],
  ['iztapalapa',        'xochimilco'],
  ['gustavo-a-madero',  'azcapotzalco'],
  ['gustavo-a-madero',  'venustiano-carranza'],
  ['magdalena-contreras','tlalpan'],
  ['tlalpan',           'xochimilco'],
  ['tlalpan',           'tlahuac'],
  ['tlalpan',           'milpa-alta'],
  ['xochimilco',        'tlahuac'],
  ['xochimilco',        'milpa-alta'],
  ['tlahuac',           'milpa-alta'],
  ['alvaro-obregon', 'tlalpan'],
  ['azcapotzalco', 'cuajimalpa'],
  ['benito-juarez', 'iztapalapa'],
]

const GRAPH: Record<string, string[]> = {}
for (const [a, b] of EDGES) {
  if (!GRAPH[a]) GRAPH[a] = []
  if (!GRAPH[b]) GRAPH[b] = []
  GRAPH[a].push(b)
  GRAPH[b].push(a)
}

export function getVecinos(slug: string): { name: string; slug: string }[] {
  return (GRAPH[slug] || []).map(s => ({ name: DISTRICT_NAMES[s] ?? s, slug: s }))
}
