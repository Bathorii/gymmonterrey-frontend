// src/data/monterrey/content.ts

export const homeContent = {
  hero: {
    h1: 'Encuentra los mejores gimnasios en Monterrey',
    subtitle: 'Gimnasios, estudios, entrenadores y bienestar en todas las colonias de Monterrey',
  },
  stats: {
    gyms: '0',
    barrios: '0',
    localidades: '0',
    categories: '5',
  },
  faq: [
    {
      q: '¿Cuánto cuesta un gimnasio en Monterrey?',
      a: 'Los precios varían según la colonia y el tipo de gimnasio. En promedio, una membresía mensual en Monterrey cuesta entre $500 y $2,000 MXN. Los gimnasios boutique y clubes deportivos premium pueden superar los $3,000 MXN al mes.',
    },
    {
      q: '¿Cuáles son las mejores colonias para encontrar gimnasios en Monterrey?',
      a: 'Las colonias con mayor concentración de gimnasios en Monterrey incluyen San Pedro Garza García, Cumbres, Tecnológico y Del Valle. Para opciones más económicas, colonias como Mitras y Obispado también tienen buena cobertura.',
    },
    {
      q: '¿Hay gimnasios abiertos 24 horas en Monterrey?',
      a: 'Sí. Cadenas como Smart Fit y algunos gimnasios independientes operan las 24 horas los 7 días de la semana. Usa el filtro "24 horas" en GymMonterrey.com para encontrar los más cercanos.',
    },
    {
      q: '¿Cómo puedo agregar mi gimnasio a GymMonterrey.com?',
      a: 'Es gratis y sencillo. Haz clic en "Agregar negocio" en el menú y completa el formulario con los datos de tu establecimiento. Nuestro equipo revisará la información y publicará tu perfil en 24-48 horas.',
    },
    {
      q: '¿Puedo encontrar entrenadores personales en Monterrey por colonia?',
      a: 'Sí. En GymMonterrey.com puedes buscar entrenadores personales filtrando por colonia. Muchos entrenadores trabajan a domicilio, en parques o en gimnasios específicos. Encuentra al profesional ideal para tus objetivos de fitness.',
    },
  ],
}

export const categoryContent: Record<string, { h1: string; intro: string; faq: Array<{ q: string; a: string }> }> = {
  gimnasios: {
    h1: 'Gimnasios en Monterrey',
    intro: `Monterrey tiene una cultura del fitness sólida y en crecimiento. Con gimnasios distribuidos en todas sus colonias, desde San Pedro Garza García hasta Cumbres, la oferta es amplia para todos los presupuestos y objetivos.`,
    faq: [
      { q: '¿Cuántos gimnasios hay en Monterrey?', a: 'Monterrey cuenta con cientos de gimnasios distribuidos en sus colonias. Las zonas con mayor concentración son San Pedro Garza García, Cumbres y Tecnológico.' },
      { q: '¿Hay gimnasios con piscina en Monterrey?', a: 'Sí, varios gimnasios premium en San Pedro Garza García y Del Valle cuentan con piscina. Usa el filtro "piscina" en nuestra búsqueda.' },
      { q: '¿Cuánto cuesta el day pass en un gimnasio en Monterrey?', a: 'El pase de un día en Monterrey cuesta entre $80 y $250 MXN según el tipo de gimnasio.' },
      { q: '¿Qué gimnasios ofrecen clases grupales en Monterrey?', a: 'La mayoría de los gimnasios medianos y grandes incluyen clases grupales: spinning, zumba, yoga, pilates y funcional.' },
    ],
  },
  estudios: {
    h1: 'Estudios fitness en Monterrey',
    intro: `Monterrey tiene una amplia oferta de estudios especializados en yoga, pilates, CrossFit, box y spinning, concentrados principalmente en San Pedro Garza García y Cumbres.`,
    faq: [
      { q: '¿Qué tipos de estudios fitness existen en Monterrey?', a: 'En Monterrey encontrarás estudios de yoga, pilates, CrossFit, boxeo, spinning, danza y funcional.' },
      { q: '¿Cuánto cuesta una clase de yoga en Monterrey?', a: 'Una clase de yoga en Monterrey cuesta entre $150 y $400 MXN la sesión individual.' },
      { q: '¿Puedo probar una clase antes de comprar un paquete?', a: 'La mayoría de estudios boutique en Monterrey ofrecen una clase de prueba gratuita o a precio especial.' },
    ],
  },
  entrenadores: {
    h1: 'Entrenadores personales en Monterrey',
    intro: `Monterrey tiene entrenadores certificados para todos los objetivos y presupuestos, desde zonas premium como San Pedro hasta colonias populares con excelente calidad de instrucción.`,
    faq: [
      { q: '¿Cuánto cobra un entrenador personal en Monterrey?', a: 'El precio de una sesión de entrenamiento personal en Monterrey varía entre $350 y $1,200 MXN por hora, dependiendo de la experiencia, certificaciones y modalidad.' },
      { q: '¿Los entrenadores van a domicilio en Monterrey?', a: 'Sí, muchos entrenadores personales en Monterrey ofrecen servicio a domicilio.' },
    ],
  },
  eventos: {
    h1: 'Eventos fitness en Monterrey',
    intro: `Monterrey tiene un calendario activo de carreras, competencias de CrossFit y eventos comunitarios de fitness durante todo el año.`,
    faq: [
      { q: '¿Cuáles son los eventos fitness más populares en Monterrey?', a: 'Las carreras populares, los torneos de CrossFit y los retiros de yoga son los más convocados en Monterrey.' },
      { q: '¿Hay eventos fitness gratuitos en Monterrey?', a: 'Sí, muchos talleres comunitarios y eventos de estudios boutique para captar nuevos clientes son completamente gratuitos.' },
    ],
  },
  bienestar: {
    h1: 'Bienestar en Monterrey',
    intro: `Monterrey ofrece una variada oferta de masajes, fisioterapia, nutrición deportiva y centros de meditación distribuidos por toda la ciudad.`,
    faq: [
      { q: '¿Qué servicios de bienestar se pueden encontrar en Monterrey?', a: 'En Monterrey hay centros de masajes terapéuticos, spas, fisioterapia, nutrición deportiva, psicología del deporte y meditación.' },
      { q: '¿Cuánto cuesta un masaje en Monterrey?', a: 'Un masaje en Monterrey cuesta entre $400 y $1,200 MXN por sesión de 60 minutos.' },
    ],
  },
}

export const staticPageContent = {
  sobreNosotros: {
    title: 'Sobre nosotros',
    h1: '¿Quiénes somos?',
    body: `GymMonterrey.com es el directorio de referencia para encontrar gimnasios, estudios fitness, entrenadores personales y centros de bienestar en Monterrey, México.

Nuestra misión es conectar a los regiomontanos con el lugar ideal para moverse, entrenar y cuidarse, sin importar su colonia, presupuesto u objetivo fitness.`,
  },
  agregarNegocio: {
    title: 'Agregar negocio',
    h1: 'Agrega tu gimnasio o estudio gratis',
    body: `¿Tienes un gimnasio, estudio fitness, servicio de entrenamiento personal o centro de bienestar en Monterrey? Aparece en GymMonterrey.com de forma completamente gratuita.`,
  },
  faqPage: {
    title: 'Preguntas frecuentes',
    h1: 'Preguntas frecuentes sobre GymMonterrey.com',
    items: [
      { q: '¿GymMonterrey.com es gratuito para los usuarios?', a: 'Sí, buscar y explorar el directorio es completamente gratuito.' },
      { q: '¿Cómo se seleccionan los negocios que aparecen?', a: 'Los negocios aparecen a través de importación de fuentes públicas verificadas, registro voluntario del dueño, o reporte de la comunidad.' },
      { q: '¿Puedo dejar una reseña sobre un gimnasio?', a: 'Sí. En cada perfil de establecimiento encontrarás un formulario para dejar tu opinión.' },
      { q: '¿Con qué frecuencia se actualiza la información?', a: 'El directorio se actualiza continuamente. Si ves información incorrecta, puedes reportarla desde la página del establecimiento.' },
      { q: '¿GymMonterrey.com tiene app móvil?', a: 'Por ahora, GymMonterrey.com está optimizado para móvil a través del navegador.' },
    ],
  },
  contacto: {
    title: 'Contacto',
    h1: '¿Tienes alguna pregunta?',
    body: `Estamos aquí para ayudarte. Si tienes dudas sobre el directorio, quieres reportar información incorrecta o simplemente quieres ponerte en contacto con el equipo de GymMonterrey.com, escríbenos.`,
    email: 'hola@gymmonterrey.com',
  },
  terminos: {
    title: 'Términos de uso',
    h1: 'Términos y condiciones de uso',
    lastUpdated: 'Junio 2026',
  },
  privacidad: {
    title: 'Política de privacidad',
    h1: 'Política de privacidad',
    lastUpdated: 'Junio 2026',
  },
}
