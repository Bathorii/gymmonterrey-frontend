// src/data/cdmx/barrio-guerrero.ts
// Draft – lastReviewed: 2026-06-27

export const barrioContent = {
  nombre: 'Guerrero',
  slug: 'guerrero',
  group: 'C',
  parentDistrict: {
    nombre: 'Cuauhtémoc',
    slug: 'cuauhtemoc',
  },
  lastReviewed: '2026-06-27',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Guerrero es una de las colonias más densas y más honestas de la Cuauhtémoc: NSE C/D+, urbana al máximo, sin el barniz de gentrificación que ya transformó sus vecinas del sur. El Eje 1 Norte y Av. Hidalgo son las arterias que le dan ritmo, Metro Guerrero en la Línea B y Metro Garibaldi en la Línea 8 y B le dan conectividad real con toda la ciudad. Es la colonia donde el mariachi coexiste con el gym de barrio de 4am, donde Calle Magnolia tiene más historia que cualquier mural de Roma Norte. La escena fitness de Guerrero es funcional y sin pretensión: gymns que abren temprano porque sus clientes trabajan en el mercado o en la construcción, entrenadores que cobran precios de barrio real y parques que llevan décadas siendo el gym gratuito de miles de residentes. No es el destino de las marcas de ropa

Para el vecino de Guerrero que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Guerrero en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Guerrero',
    metaDesc: 'Gimnasios en Guerrero, CDMX: $500–$1,200 MXN/mes. Budget gym denso urbano, Metro Guerrero/Garibaldi. Eje 1 Norte, Av. Hidalgo. Guía de Rodrigo 2026.',
    intro: `Guerrero tiene entre 15 y 22 gimnasios activos — una densidad alta para una colonia de su perfil, explicada por el tamaño de su base de residentes, su conectividad en metro y el precio de renta de locales que todavía permite que el gym de barrio sea un negocio viable. El rango de precios va de $500 a $1,200 MXN al mes, con la mayor concentración en el segmento $600–$900 MXN — algunos de los precios más bajos de toda la Cuauhtémoc para acceso completo a equipamiento de pesas y cardio. Los establecimientos se distribuyen sobre Av. Hidalgo, Eje 1 Norte y Calle Magnolia, con presencia adicional en las calles internas del barrio. Metro Guerrero en Línea B y Metro Garibaldi en Línea 8 son los puntos de referencia más usados por los usuarios que vienen de otras colonias — desde ambas estaciones se caminan menos de 8 minutos hacia la mayoría de los gimnasios de Guerrero. Los horarios son amplios: varios abren desde las 4:30 o 5am para capturar a los trabajadores con turno matutino. El perfil del usuario de Guerrero es el más diverso de esta guía: desde deportistas de barrio que entrenan fuerza desde los 16 años hasta adultos mayores que van tres veces por semana a máquinas de bajo impacto. Los gimnasios de Guerrero construyeron su programación alrededor de esa diversidad — más funcional, más accesible para principiantes, menos especialización boutique. Para quien busca`,
    faq: [
      {
        q: '¿Cuánto cuesta el gym en Guerrero?',
        a: 'El rango va de $500 a $1,200 MXN al mes. La mayoría de los gymns de barrio sobre Hidalgo y Eje 1 Norte cobran entre $600 y $900 MXN con acceso completo a pesas y cardio. Para planes quincenales o por semana, hay opciones desde $200 MXN. Es uno de los rangos de precio más accesibles de toda la Cuauhtémoc.',
      },
      {
        q: '¿Hay gimnasios cerca de Metro Guerrero y Metro Garibaldi?',
        a: 'Sí, desde ambas estaciones se caminan menos de 8 minutos hacia varios gimnasios de Guerrero. Metro Guerrero en Línea B da acceso directo al corazón de la colonia sobre Hidalgo y Magnolia. Metro Garibaldi en Línea 8 y B es la puerta al sector norte de Guerrero hacia Eje 1 Norte. Para quien no tiene coche, la conectividad en metro es de las mejores de la Cuauhtémoc.',
      },
      {
        q: '¿Hay gymns en Guerrero que abran muy temprano?',
        a: 'Sí, varios gimnasios de Guerrero abren entre las 4:30 y las 5am entre semana — coherente con la base de clientes que tiene turnos laborales tempranos. Es uno de los pocos sectores de la ciudad donde encuentras acceso a pesas libres antes de las 6am sin tener que pagar membresía de cadena nacional. Los sábados la apertura es generalmente a las 6 o 7am.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Guerrero tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Guerrero suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~15–22' },
      { label: 'Membresía mensual', value: '$500–$1,200 MXN' },
      { label: 'Metro',             value: 'Guerrero (L.B) · Garibaldi (L.8/B)' },
      { label: 'Apertura temprana', value: 'Desde 4:30–5am' },
    ],
    barrios: [
      { name: 'Santa María La Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
      { name: 'Tlatelolco',            slug: 'tlatelolco',            district: 'cuauhtemoc' },
      { name: 'Tabacalera',            slug: 'tabacalera',            district: 'cuauhtemoc' },
    ],
    categoriaLinks: [
      { slug: 'gimnasios',    label: 'Gimnasios'    },
      { slug: 'estudios',     label: 'Estudios'     },
      { slug: 'entrenadores', label: 'Entrenadores' },
      { slug: 'eventos',      label: 'Eventos'      },
      { slug: 'bienestar',    label: 'Bienestar'    },
    ],
  },

  estudios: {
    h1: 'Estudios en Guerrero — Fitness accesible en colonia densa 2026',
    metaDesc: 'Estudios de fitness en Guerrero, CDMX: clases grupales desde $80 MXN. Funcional, aeróbicos y yoga básico. Eje 1 Norte, Hidalgo. Guía 2026.',
    intro: `Los estudios boutique en Guerrero son escasos — no es la realidad del barrio y probablemente no lo será en el corto plazo. Lo que sí tiene Guerrero es una oferta robusta de clases grupales dentro de los gymns del sector: aeróbicos, zumba, funcional básico y algunas clases de yoga mat que se dictan en el mismo salón donde hace dos horas había una clase de spinning de bajo costo. El formato es práctico, los precios están incluidos en la membresía de gym o cuestan entre $80 y $120 MXN por clase suelta — los más económicos de la Cuauhtémoc. El yoga llegó a Guerrero en los últimos años, principalmente en formato comunitario: clases en parques, en centros comunitarios de la alcaldía y en algunos estudios pequeños sobre Magnolia que atienden a residentes del barrio con precios entre $80 y $150 MXN la sesión. No hay Reformer ni Iyengar — pero hay instructores que llevan 10 años dando clases en el barrio y que conocen a sus estudiantes por nombre y apellido. Para funcional y HIIT, los gymns de barrio de Guerrero tienen programación de clases incluida en la membresía que cubre bien las necesidades del deportista recreativo. No es el funcional periodizado de los boxes de Condesa — es la clase de 45 minutos con 15 personas donde el instructor grita en el momento correcto y todos terminan sudando. Eso también es fitness, y en Guerrero lo`,
    faq: [
      {
        q: '¿Hay clases de yoga en Guerrero?',
        a: 'Sí, principalmente en formato comunitario en parques y centros de la alcaldía, y en algunos estudios pequeños sobre Magnolia. Las clases cuestan entre $80 y $150 MXN. No esperes linajes avanzados o Reformer — es yoga accesible con buenos instructores que llevan años en el barrio. Para yoga más estructurado, Santa María La Ribera está a 10 minutos en metro.',
      },
      {
        q: '¿Las clases grupales de los gymns de Guerrero están incluidas en la membresía?',
        a: 'En la mayoría sí — aeróbicos, zumba y funcional básico suelen estar incluidos en la membresía entre $600 y $900 MXN. Algunos gymns cobran un pequeño adicional ($30–$60 MXN) para clases especiales o instructores invitados. Es la forma más económica de acceder a clases grupales en toda la Cuauhtémoc.',
      },
      {
        q: '¿Hay spinning en Guerrero?',
        a: 'Hay gymns con bikes estáticas que hacen clases de spinning básico incluidas en la membresía. No es el spinning boutique con metrics individuales de Condesa — es la clase de 45 minutos con música fuerte y un instructor que sabe cómo motivar a un grupo. Para la mayoría de las personas, eso es suficiente y cuesta una fracción del spinning boutique del norte.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios especializados', value: '~4–6' },
      { label: 'Clase suelta',            value: '$80–$150 MXN' },
      { label: 'Clases en gym',           value: 'Incluidas en membresía' },
      { label: 'Formato dominante',       value: 'Aeróbicos · funcional · zumba' },
    ],
    barrios: [
      { name: 'Santa María La Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
      { name: 'Tlatelolco',            slug: 'tlatelolco',            district: 'cuauhtemoc' },
      { name: 'Tabacalera',            slug: 'tabacalera',            district: 'cuauhtemoc' },
    ],
    categoriaLinks: [
      { slug: 'gimnasios',    label: 'Gimnasios'    },
      { slug: 'estudios',     label: 'Estudios'     },
      { slug: 'entrenadores', label: 'Entrenadores' },
      { slug: 'eventos',      label: 'Eventos'      },
      { slug: 'bienestar',    label: 'Bienestar'    },
    ],
  },

  entrenadores: {
    h1: 'Entrenadores personales en Guerrero — Coaches accesibles 2026',
    metaDesc: 'Entrenadores personales en Guerrero, CDMX: sesiones desde $150 MXN. Parques del barrio, gymns sobre Hidalgo y Eje 1 Norte. Guía 2026.',
    intro: `Los entrenadores personales de Guerrero son parte del tejido del barrio — literalmente. Hay coaches que llevan 15 o 20 años atendiendo a los mismos clientes en los mismos gymns del sector, con una base de confianza que ningún sistema de reseñas puede replicar. Las sesiones individuales van de $150 a $350 MXN, los precios más accesibles de cualquier colonia con oferta real de coaching personal en la Cuauhtémoc.

Los parques del barrio son el espacio outdoor principal: el Parque Solidaridad sobre Eje 1 Norte y los parques de bolsillo sobre Hidalgo y Magnolia son usados por coaches freelance que trabajan principalmente los fines de semana de mañana y algunas tardes entre semana. No hay la infraestructura de calistenia del Parque España — pero hay espacio y hay coaches que saben usarlo bien para trabajo funcional con equipamiento portátil.

Para entrenamiento de fuerza con periodización, los coaches de los gymns de barrio de Guerrero tienen experiencia real porque sus clientes llevan años entrenando con objetivos concretos. No es el coach de Instagram con 30,000 seguidores — es el señor de 50 años que entrena fuerza desde los 20 y que sabe más de periodización empírica que muchos coaches con título universitario. Para resultados reales a precio real, Guerrero tiene esa opción.`,
    faq: [
      {
        q: '¿Cuánto cuesta un entrenador personal en Guerrero?',
        a: 'Las sesiones individuales van de $150 a $350 MXN. Los coaches dentro de gimnasios de Guerrero suelen estar en $150–$250 MXN. Los freelance con mayor formación formal están en $250–$350 MXN. En dupla o trío el costo baja $50–$80 MXN por persona — formato muy habitual en el barrio para dividir el costo sin perder la supervisión.',
      },
      {
        q: '¿Dónde trabajan los coaches freelance de Guerrero?',
        a: 'Principalmente en parques del barrio — el Parque Solidaridad en Eje 1 Norte y los parques de bolsillo sobre Hidalgo y Magnolia. También a domicilio en las zonas residenciales del barrio. Los fines de semana de mañana son los horarios de mayor actividad outdoor. Para quien vive en el barrio, el domicilio es a menudo la opción más práctica y no necesariamente más cara.',
      },
      {
        q: '¿Cómo encuentro un buen entrenador personal en Guerrero?',
        a: 'La recomendación directa dentro de los gimnasios de Guerrero es el método más confiable. Los dueños de los establecimientos llevan años conociendo a su comunidad y saben quién trabaja bien. También puedes preguntar en los parques del barrio los fines de semana — los coaches que llevan tiempo en el sector se conocen entre sí y generalmente se recomiendan mutuamente cuando están llenos.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual', value: '$150–$350 MXN' },
      { label: 'Outdoor',           value: 'Parque Solidaridad · Eje 1 Norte' },
      { label: 'vs. Roma Norte',    value: '50–60% más económico' },
      { label: 'Sesión en dupla',   value: '-$50–$80 MXN/persona' },
    ],
    barrios: [
      { name: 'Santa María La Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
      { name: 'Tlatelolco',            slug: 'tlatelolco',            district: 'cuauhtemoc' },
      { name: 'Tabacalera',            slug: 'tabacalera',            district: 'cuauhtemoc' },
    ],
    categoriaLinks: [
      { slug: 'gimnasios',    label: 'Gimnasios'    },
      { slug: 'estudios',     label: 'Estudios'     },
      { slug: 'entrenadores', label: 'Entrenadores' },
      { slug: 'eventos',      label: 'Eventos'      },
      { slug: 'bienestar',    label: 'Bienestar'    },
    ],
  },

  eventos: {
    h1: 'Eventos fitness en Guerrero',
    metaDesc: 'Eventos fitness en Guerrero, CDMX 2026: jornadas comunitarias, grupos de running, eventos de alcaldía. Metro Guerrero, Garibaldi, Eje 1 Norte.',
    intro: `Los eventos fitness en Guerrero son comunitarios por naturaleza y por necesidad. No hay presupuesto de marca para pop-ups de $500 MXN de inscripción — hay alcaldía, hay Juntas de Vecinos y hay coaches que llevan años organizando jornadas deportivas en los parques del barrio porque esa es la forma en que la actividad física llega a una colonia de perfil NSE C/D+. Y esas jornadas tienen convocatoria real: aeróbicos masivos los domingos, torneos de fútbol en las canchas del barrio, circuitos de funcional con instructores comunitarios.

Metro Guerrero y Metro Garibaldi son puntos de encuentro naturales para eventos de mayor escala que conectan el barrio con el resto de la ciudad: desde aquí acceden corredores que participan en carreras que pasan por el Centro Histórico, ciclistas que salen en grupo los domingos por el Eje 1 Norte y grupos de caminata que recorren Tepito y la Lagunilla como parte de un circuito urbano. El fitness en Guerrero no necesita un parque de diseño — necesita espacio y comunidad, y tiene ambos.

Los gimnasios de Guerrero organizan periódicamente torneos internos y "challenges" de fuerza que son abiertos al barrio: levantamiento de pesas, reps de pullup o planks cronometrados. Son eventos con poca producción y mucha participación real. Para quien busca competir sin el costo de entrada de una competencia boutique, los eventos de los gymns de Guerrero son la opción más honesta de la ciudad.`,
    faq: [
      {
        q: '¿Hay clases de ejercicio comunitario gratuitas en Guerrero?',
        a: 'Sí, regularmente. La alcaldía de Cuauhtémoc organiza jornadas de activación física en los parques del barrio con instructores comunitarios — aeróbicos, funcional básico y yoga. Los domingos son el día de mayor actividad outdoor. Para enterarte de los eventos, el tablón del Centro Comunitario de la colonia y las redes de la alcaldía son las fuentes más confiables.',
      },
      {
        q: '¿Hay eventos de running que pasen por Guerrero o Garibaldi?',
        a: 'Guerrero está en el recorrido de varias carreras urbanas que conectan el norte de la Cuauhtémoc con el Centro Histórico. Metro Garibaldi es un punto de concentración habitual para grupos de running del barrio que salen los domingos temprano. Para carreras con chip y clasificación, las del Parque Bicentenario o las del Bosque de Chapultepec son las más accesibles desde ambas estaciones de metro.',
      },
      {
        q: '¿Los gymns de Guerrero organizan competencias internas?',
        a: 'Varios sí — torneos de fuerza, challenges de resistencia y competencias de fútbol en las canchas del barrio son los formatos más frecuentes. La inscripción es simbólica o gratuita. Son eventos con mucha participación de la comunidad del gym porque llevan años con los mismos clientes. El premio es pequeño — el reconocimiento de barrio es lo que convoca.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Jornadas comunitarias', value: 'Mensuales · alcaldía + vecinos' },
      { label: 'Running outdoor',       value: 'Grupos domingo · Metro Garibaldi' },
      { label: 'Challenges gym',        value: 'Periódicos · inscripción gratuita' },
      { label: 'Conectividad metro',    value: 'Guerrero (L.B) · Garibaldi (L.8/B)' },
    ],
    barrios: [
      { name: 'Santa María La Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
      { name: 'Tlatelolco',            slug: 'tlatelolco',            district: 'cuauhtemoc' },
      { name: 'Tabacalera',            slug: 'tabacalera',            district: 'cuauhtemoc' },
    ],
    categoriaLinks: [
      { slug: 'gimnasios',    label: 'Gimnasios'    },
      { slug: 'estudios',     label: 'Estudios'     },
      { slug: 'entrenadores', label: 'Entrenadores' },
      { slug: 'eventos',      label: 'Eventos'      },
      { slug: 'bienestar',    label: 'Bienestar'    },
    ],
  },

  bienestar: {
    h1: 'Bienestar en Guerrero — Masajes y salud accesible en Cuauhtémoc 2026',
    metaDesc: 'Bienestar en Guerrero, CDMX: masajes desde $120 MXN, terapias tradicionales, nutrición básica. Hidalgo, Magnolia, Eje 1 Norte. Guía 2026.',
    intro: `El bienestar en Guerrero es real, accesible y sin el lenguaje del wellness de tendencia. Los centros de masaje del barrio cobran entre $120 y $280 MXN por 60 minutos — los precios más bajos de la Cuauhtémoc para masaje terapéutico con experiencia real. No son spas de diseño con booking online y playlist cuidada — son locales sobre Hidalgo y Magnolia donde el terapeuta tiene 15 años de práctica y manos que saben lo que hacen.

La colonia tiene tradición en medicina alternativa y terapias populares: hueseros, sobadores, curanderos y terapeutas de medicina tradicional mexicana que llevan generaciones en el barrio. Para quien busca ese tipo de atención complementaria a la práctica deportiva, Guerrero es uno de los pocos sectores de la Cuauhtémoc donde todavía existe con autenticidad y precio accesible. No es turismo de bienestar — es el cuidado del cuerpo como práctica cultural.

La nutrición deportiva en Guerrero es básica — hay tiendas de suplementos sobre Hidalgo y Eje 1 Norte con proteínas y aminoácidos a precios competitivos, y algunos nutricionistas generales con orientación básica en deportistas. Para seguimiento nutricional especializado con periodización para rendimiento, las opciones más cercanas con mayor formación están en Santa María La Ribera o Tlatelolco. Para el deportista recreativo que busca orientación básica y precio real, Guerrero tiene lo necesario.`,
    faq: [
      {
        q: '¿Cuánto cuesta un masaje en Guerrero?',
        a: 'Los masajes terapéuticos en los centros del barrio van de $120 a $280 MXN por 60 minutos — de los precios más bajos de la Cuauhtémoc para masaje con experiencia real. Hay tanto masaje sueco o de relajación como masaje de tejido profundo en ese rango. Para masaje deportivo especializado, el rango sube a $200–$320 MXN.',
      },
      {
        q: '¿Hay hueseros o sobadores en Guerrero?',
        a: 'Sí, la colonia tiene tradición en medicina tradicional con hueseros y sobadores que llevan años en el barrio. Es una práctica complementaria que muchos deportistas de la zona usan para recuperación post-lesión o dolor muscular crónico. Las consultas son accesibles y el acceso es por recomendación dentro del barrio — preguntá en los gymns locales porque suelen saber quién está disponible.',
      },
      {
        q: '¿Dónde consigo suplementos deportivos en Guerrero?',
        a: 'Hay tiendas de suplementos sobre Hidalgo y Eje 1 Norte con proteínas, creatina y aminoácidos a precios competitivos — en general más económicos que en colonias del norte de la ciudad. Los gimnasios de Guerrero también tienen suplementos básicos en recepción. Para marcas importadas o productos más especializados, Tepito y Tlatelolco tienen mayor variedad a precio mayoreo.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Masaje terapéutico 60min', value: '$120–$280 MXN' },
      { label: 'Medicina tradicional',     value: 'Hueseros · sobadores disponibles' },
      { label: 'Suplementos',              value: 'Tiendas en Hidalgo · Eje 1 Norte' },
      { label: 'vs. Roma Norte',           value: '55–65% más económico' },
    ],
    barrios: [
      { name: 'Santa María La Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
      { name: 'Tlatelolco',            slug: 'tlatelolco',            district: 'cuauhtemoc' },
      { name: 'Tabacalera',            slug: 'tabacalera',            district: 'cuauhtemoc' },
    ],
    categoriaLinks: [
      { slug: 'gimnasios',    label: 'Gimnasios'    },
      { slug: 'estudios',     label: 'Estudios'     },
      { slug: 'entrenadores', label: 'Entrenadores' },
      { slug: 'eventos',      label: 'Eventos'      },
      { slug: 'bienestar',    label: 'Bienestar'    },
    ],
  },
}
