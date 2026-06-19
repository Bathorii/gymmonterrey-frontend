// src/data/bogota/localidades.ts
export const localidades = [
  { name: 'Benito Juárez',         slug: 'benito-juarez',         gymCount: 180 },
  { name: 'Cuauhtémoc',            slug: 'cuauhtemoc',            gymCount: 165 },
  { name: 'Miguel Hidalgo',        slug: 'miguel-hidalgo',        gymCount: 152 },
  { name: 'Álvaro Obregón',        slug: 'alvaro-obregon',        gymCount: 138 },
  { name: 'Coyoacán',              slug: 'coyoacan',              gymCount: 124 },
  { name: 'Tlalpan',               slug: 'tlalpan',               gymCount: 112 },
  { name: 'Iztapalapa',            slug: 'iztapalapa',            gymCount: 108 },
  { name: 'Gustavo A. Madero',     slug: 'gustavo-a-madero',      gymCount: 97  },
  { name: 'Azcapotzalco',          slug: 'azcapotzalco',          gymCount: 89  },
  { name: 'Venustiano Carranza',   slug: 'venustiano-carranza',   gymCount: 82  },
  { name: 'Iztacalco',             slug: 'iztacalco',             gymCount: 74  },
  { name: 'La Magdalena Contreras',slug: 'magdalena-contreras',   gymCount: 61  },
  { name: 'Xochimilco',            slug: 'xochimilco',            gymCount: 55  },
  { name: 'Tláhuac',               slug: 'tlahuac',               gymCount: 43  },
  { name: 'Cuajimalpa',            slug: 'cuajimalpa',            gymCount: 38  },
  { name: 'Milpa Alta',            slug: 'milpa-alta',            gymCount: 21  },
] as const

export type Localidad = typeof localidades[number]
