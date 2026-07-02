// src/data/monterrey/content.ts

export const homeContent = {
  hero: {
    h1: 'Encuentra los mejores gimnasios en Monterrey',
    subtitle: 'Gimnasios, estudios, entrenadores y bienestar en todas las colonias de Monterrey',
  },
  stats: {
    gyms: '1,000+',
    barrios: '50+',
    localidades: '15',
    categories: '5',
  },
  faq: [
    {
      q: '¿Cuánto cuesta un gimnasio en Monterrey?',
      a: 'Los precios varían según la colonia y el tipo de gimnasio. En promedio, una membresía mensual en Monterrey cuesta entre $500 y $2,000 MXN. Los gimnasios boutique y clubes deportivos premium pueden superar los $3,000 MXN al mes.',
    },
    {
      q: '¿Cuáles son las mejores zonas para encontrar gimnasios en Monterrey?',
      a: 'Las zonas con mayor concentración de gimnasios en el área metropolitana de Monterrey incluyen el municipio de San Pedro Garza García y colonias como Cumbres, Tecnológico y Del Valle. Para opciones más económicas, colonias como Mitras y Obispado también tienen buena cobertura.',
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
    intro: `Monterrey no es CDMX, pero tampoco es cualquier ciudad del norte. Aquí hay cultura del hierro de verdad — gyms con squat racks en serio, con gente que va a entrenar, no a selfies. La ciudad industrial más importante de México tiene una mentalidad de trabajo que se traslada directo al gym: entras, te partes el lomo, sales.

La distribución es clara: San Pedro Garza García concentra lo premium, con instalaciones de primer nivel y precios que lo reflejan ($1,500–3,000 MXN/mes). Cumbres y Tecnológico tienen la mayor densidad de opciones medias. Y colonias como Mitras, Obispado y Las Puentes ofrecen la mejor relación precio-calidad si no necesitas el lujo de San Pedro.

Lo que separa un buen gym en Monterrey de uno mediocre: la zona de peso libre. Cuántos racks hay, si los barbells están en buen estado, si hay plataformas de levantamiento. El cardio y las máquinas las tiene cualquiera. El free weight serio, no.

Un detalle práctico que suele ignorarse: el estacionamiento. Monterrey es una ciudad de coche — llegar en transporte público a muchas zonas es complicado. Si el gym no tiene estacionamiento propio o hay calle cerca, lo vas a sufrir. En GymMonterrey.com tienes esa información antes de ir.`,
    faq: [
      { q: '¿Cuántos gimnasios hay en Monterrey?', a: 'El área metropolitana de Monterrey cuenta con más de 1,000 gimnasios distribuidos en sus municipios y colonias. Las zonas con mayor concentración son San Pedro Garza García, Cumbres y Tecnológico.' },
      { q: '¿Hay gimnasios con piscina en Monterrey?', a: 'Sí, varios gimnasios premium en San Pedro Garza García y Del Valle cuentan con piscina. Usa el filtro "piscina" en nuestra búsqueda.' },
      { q: '¿Cuánto cuesta el day pass en un gimnasio en Monterrey?', a: 'El pase de un día en Monterrey cuesta entre $80 y $250 MXN según el tipo de gimnasio.' },
      { q: '¿Qué gimnasios ofrecen clases grupales en Monterrey?', a: 'La mayoría de los gimnasios medianos y grandes incluyen clases grupales: spinning, zumba, yoga, pilates y funcional.' },
    ],
  },
  estudios: {
    h1: 'Estudios fitness en Monterrey',
    intro: `La escena boutique de Monterrey creció rápido en los últimos cinco años. El CrossFit metió la primera ola — boxes en San Pedro y Cumbres con comunidades serias. Después llegaron los estudios de yoga, pilates, spinning de alto nivel y entrenamiento funcional. Hoy la oferta cubre casi todo lo que encuentras en CDMX, pero con el tamaño más manejable de la ciudad.

La diferencia clave respecto a un gym masivo: el grupo es pequeño, el instructor te ve a ti específicamente. En una clase de 12 personas con un buen coach, la curva de aprendizaje técnico se comprime. Para quien quiere aprender a mover bien — sea un snatch, una postura de yoga o un movimiento de pilates — eso vale lo que cuesta.

Los precios en Monterrey van de $150 a $450 MXN la clase suelta. Los paquetes mensuales (8–12 clases) suelen salir mejor. San Pedro tiene los estudios más caros y generalmente los mejor equipados. Cumbres tiene opciones sólidas con menos premium. Para yoga y pilates accesible, colonias como Contry y Del Valle tienen alternativas que no están en el radar principal pero funcionan bien.

Consejo directo: antes de comprar un paquete mensual, pide una clase de prueba. La mayoría de estudios la ofrecen, algunos gratis, otros a precio especial. La relación con el instructor y el vibe del grupo importan tanto como el equipamiento.`,
    faq: [
      { q: '¿Qué tipos de estudios fitness existen en Monterrey?', a: 'En Monterrey encontrarás estudios de yoga, pilates, CrossFit, boxeo, spinning, danza y funcional.' },
      { q: '¿Cuánto cuesta una clase de yoga en Monterrey?', a: 'Una clase de yoga en Monterrey cuesta entre $150 y $400 MXN la sesión individual.' },
      { q: '¿Puedo probar una clase antes de comprar un paquete?', a: 'La mayoría de estudios boutique en Monterrey ofrecen una clase de prueba gratuita o a precio especial.' },
    ],
  },
  entrenadores: {
    h1: 'Entrenadores personales en Monterrey',
    intro: `Monterrey tiene entrenadores buenos — y tiene entrenadores que se ven bien en Instagram pero que no te van a cambiar nada. Saber distinguirlos es la mitad del trabajo.

Lo primero que pregunto cuando alguien me dice que quiere contratar un entrenador en Monterrey: ¿tiene certificación de verdad? NSCA, NASM, ACSM, o equivalente mexicano de peso. Un entrenador serio responde esa pregunta sin dudar. Si vacila o te dice que "lleva años de experiencia" sin un certificado, sigue buscando.

El valor real de un buen entrenador no es darte la rutina — eso lo consigues gratis en YouTube. El valor está en tres cosas: corregirte el movimiento cuando la técnica se rompe con la fatiga, sacarte del estancamiento cuando llevas semanas sin progresar, y empujarte más allá de donde tú solo te hubieras rendido.

En cuanto a tarifas, en Monterrey una sesión individual cuesta entre $350 y $1,200 MXN por hora. San Pedro y Cumbres están en el techo; colonias populares en el piso. Las sesiones semiprivadas (2–3 personas) bajan el costo por persona sin perder demasiado la atención. Muchos entrenadores trabajan a domicilio, en parques como el Bosque Urbano o en el gimnasio donde están afiliados.`,
    faq: [
      { q: '¿Cuánto cobra un entrenador personal en Monterrey?', a: 'El precio de una sesión de entrenamiento personal en Monterrey varía entre $350 y $1,200 MXN por hora, dependiendo de la experiencia, certificaciones y modalidad.' },
      { q: '¿Los entrenadores van a domicilio en Monterrey?', a: 'Sí, muchos entrenadores personales en Monterrey ofrecen servicio a domicilio o en parques como el Bosque Urbano.' },
      { q: '¿Qué certificaciones debe tener un entrenador personal en Monterrey?', a: 'Las más reconocidas internacionalmente son NSCA, NASM y ACSM. En México también tiene peso la certificación de la CONADE y la FMEF.' },
    ],
  },
  eventos: {
    h1: 'Eventos fitness en Monterrey',
    intro: `Monterrey tiene una agenda fitness activa que va más allá de las carreras de 5K. La ciudad tiene tradición competitiva — las comunidades de CrossFit, powerlifting y artes marciales organizan torneos con regularidad, y el calendario de carreras urbanas es de los más densos del norte del país.

Los eventos importan por dos razones. La primera, obvia: la competencia te saca de la rutina y te da un objetivo externo con fecha. Cuando sabes que en dos meses hay un torneo o una carrera, tu entrenamiento cambia. La segunda razón es la comunidad: la gente que entrena en serio se concentra en estos espacios. Es donde conoces a entrenadores que valen la pena, a boxes y estudios que no salen en Google, y a personas que te van a jalar hacia arriba.

En Monterrey destacan los torneos regionales de CrossFit que se hacen en San Pedro y Santa Catarina, las carreras en el Parque Fundidora y el Bosque Urbano, y los eventos de nutrición y bienestar que organizan los estudios boutique para captar nuevos públicos. Algunos son gratuitos, especialmente los talleres de fin de semana. GymMonterrey.com publica eventos con fecha, lugar y enlace de registro.`,
    faq: [
      { q: '¿Cuáles son los eventos fitness más populares en Monterrey?', a: 'Los torneos regionales de CrossFit, las carreras en Parque Fundidora y los eventos de estudios boutique son los más convocados.' },
      { q: '¿Hay eventos fitness gratuitos en Monterrey?', a: 'Sí, muchos talleres comunitarios y activaciones de estudios boutique son completamente gratuitos.' },
      { q: '¿Dónde se realizan los principales eventos de running en Monterrey?', a: 'El Parque Fundidora, el Bosque Urbano y el Paseo Santa Lucía son los escenarios habituales de carreras y eventos masivos de fitness.' },
    ],
  },
  bienestar: {
    h1: 'Bienestar en Monterrey',
    intro: `Monterrey tiene un sector de bienestar desarrollado — más de lo que parece desde fuera. La oferta cubre masajes terapéuticos y deportivos, fisioterapia especializada en deporte, nutrición, psicología del rendimiento y centros de recuperación activa. En San Pedro y Cumbres está la mayor concentración, pero hay opciones sólidas en casi todas las zonas.

La fisioterapia deportiva es donde más me importa tener una recomendación de calidad. Monterrey tiene una cultura de entrenamiento intenso — y eso genera lesiones, sobrecargas y problemas de movilidad que se ignoran hasta que no se pueden ignorar. Tener un fisioterapeuta deportivo de confianza antes de necesitarlo urgentemente es una de las mejores inversiones que puedes hacer. Pregunta en tu gym, alguien siempre tiene referencia.

La nutrición deportiva también está bien representada. Hay nutriólogos especializados en rendimiento que entienden la diferencia entre pérdida de peso general y composición corporal para el deporte. No es lo mismo y los resultados tampoco son los mismos.

Para recuperación, los centros con crioterapia, contraste de temperatura y trabajo de movilidad están ganando terreno en San Pedro y Del Valle. Si entrenas fuerte más de cuatro días a la semana, la recuperación activa deja de ser opcional.`,
    faq: [
      { q: '¿Qué servicios de bienestar se pueden encontrar en Monterrey?', a: 'En Monterrey hay centros de masajes terapéuticos, spas, fisioterapia deportiva, nutrición deportiva, psicología del deporte y recuperación activa.' },
      { q: '¿Cuánto cuesta un masaje en Monterrey?', a: 'Un masaje relajante o terapéutico en Monterrey cuesta entre $400 y $1,200 MXN por sesión de 60 minutos.' },
      { q: '¿Hay fisioterapeutas deportivos en Monterrey?', a: 'Sí. Monterrey tiene fisioterapeutas especializados en deporte y rendimiento, muchos asociados a gimnasios y clínicas en San Pedro y Cumbres.' },
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
