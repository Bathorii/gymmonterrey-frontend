// src/config/city.ts
export const city = {
  slug:                process.env.NEXT_PUBLIC_CITY_SLUG   || 'monterrey',
  name:                process.env.NEXT_PUBLIC_CITY_NAME   || 'Monterrey',
  country:             process.env.NEXT_PUBLIC_COUNTRY     || 'MX',
  lang:                process.env.NEXT_PUBLIC_LANG        || 'es-MX',
  domain:              process.env.NEXT_PUBLIC_DOMAIN      || 'gymmonterrey.com',
  siteName:            process.env.NEXT_PUBLIC_SITE_NAME   || 'GymMonterrey.com',
  cdnUrl:              process.env.NEXT_PUBLIC_CDN_URL     || '',
  apiUrl:              process.env.NEXT_PUBLIC_API_URL     || '',
  timezone:            'America/Monterrey',
  currency:            'MXN',
  currencySymbol:      '$',
  districtTerm:        'colonia',
  districtTermPlural:  'colonias',
  languageRegister:    'tuteo',
  voseoRequired:       false,
  altitudeM:           540,
  altitudeRelevant:    false,
  authorName:          'Andrés',
  baseUrl: `https://${process.env.NEXT_PUBLIC_DOMAIN || 'gymmonterrey.com'}`,
} as const

export type CityConfig = typeof city
