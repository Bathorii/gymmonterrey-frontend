// src/data/cdmx/barrio-coyoacan-centro.ts
// Draft – lastReviewed: 2026-06-21

export const barrioContent = {
  nombre: 'Coyoacán Centro',
  slug: 'coyoacan-centro',
  group: 'B',
  parentDistrict: {
    nombre: 'Coyoacán',
    slug: 'coyoacan',
  },
  lastReviewed: '2026-06-21',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Coyoacán Centro es el barrio más chido para quienes buscan fitness sin el postureo de Polanco ni el ruido de Roma Norte. Sobre Francisco Sosa y Higuera viven expatriados, intelectuales y artistas que entrenan en boutiques de yoga y pilates donde la vibe bohemia no baja la calidad del servicio. La Plaza Hidalgo funciona como punto de encuentro natural — hay gente corriendo el perímetro desde las 6am, güey. El barrio tiene algo que Roma Norte no puede comprar: historia caminable. Cada estudio de bienestar comparte cuadra con casas coloniales del siglo XVII, y eso se filtra al ambiente de las clases. Los precios son entre 15 y 20% más accesibles que Roma Norte para el mismo perfil boutique — no porque la calidad sea menor sino porque el m² sigue siendo más barato sobre Higuera que sobre Orizaba. Metro Viveros y Metro Coyoacán son las entradas más prácticas; coche

Para el vecino de Coyoacán Centro que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Coyoacán Centro en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Coyoacán Centro — Boutique, yoga y funcional 2026',
    metaDesc: 'Gimnasios en Coyoacán Centro, CDMX: ~18 opciones de $900 a $2,400 MXN/mes. Francisco Sosa, Higuera, Plaza Hidalgo. Guía de Rodrigo 2026.',
    intro: `Coyoacán Centro tiene alrededor de 18 gimnasios y estudios, y la relación calidad-precio que encuentras aquí es difícil de igualar en el sur de la ciudad. El rango de $900 a $2,400 MXN al mes cubre desde gyms funcionales indie con equipamiento serio hasta estudios de yoga y pilates con instructoras de formación real. No es la oferta más grande del DF pero sí de las más consistentes en nivel dentro de su escala de precios. La concentración más fuerte está sobre Francisco Sosa y sus transversales hacia Higuera: cuatro cuadras donde conviven spinning boutique, pilates Reformer y gymns de fuerza con plataformas. La Plaza Hidalgo y el Vivero complementan la escena outdoor — el Vivero tiene 39 hectáreas de pista de tierra perfecta para running de bajo impacto, disponible de martes a domingo. Para calistenia al aire libre, el perímetro de la plaza tiene bancas y barras que usa la comunidad local desde antes de que el workout outdoor se pusiera de moda. El diferencial de precio versus Roma Norte es real: un boutique de funcional con clases incluidas que cuesta $2.240 m sobre el nivel del marXN en Orizaba suele salir en $2,000 a $2,200 MXN en Francisco Sosa. Para quien busca nivel boutique sin el premium del eje central, Coyoacán Centro es la opción más inteligente del sur. Los expats y la comunidad intelectual mantienen la demanda alta, lo que obliga a los estudios a sostener el estándar sin subir el precio`,
    faq: [
      {
        q: '¿Los gimnasios de Coyoacán Centro son buenos comparados con Roma Norte?',
        a: 'Son chidos, güey — comparables en calidad de instructoras y equipamiento para el rango boutique, entre 15 y 20% más accesibles en precio. Un estudio de yoga con certificación 500 horas en Francisco Sosa cobra $1,600-$2,000 MXN de mensualidad ilimitada; el equivalente en Roma Norte va de $2,000 a $2.240 m sobre el nivel del marXN. La diferencia no refleja menor nivel sino menor costo de inmueble. Para gyms de fuerza independientes, la diferencia es menor pero sigue siendo real.',
      },
      {
        q: '¿Cómo llego a los gimnasios de Coyoacán Centro sin coche?',
        a: 'Metro Viveros (Línea 3) y Metro Coyoacán (Línea 3) son las dos entradas más prácticas — desde ambas estaciones a los estudios sobre Francisco Sosa son 5 a 8 minutos caminando. Ecobici tiene varias estaciones en el barrio para el último kilómetro. En coche, el tráfico sobre División del Norte en horas pico es un tema real; si vienes entre semana, la ventana de oro es antes de las 7:30am o después de las 21hs. Los fines de semana la circulación es notablemente más fluida.',
      },
      {
        q: '¿El Vivero de Coyoacán es una buena opción para correr?',
        a: 'Es de las mejores opciones de running al aire libre de todo el DF, güey — 39 hectáreas con pistas de tierra de bajo impacto rodeadas de árboles. Está abierto de martes a domingo de 6am a 17hs. El perímetro principal son aproximadamente 2.5 km de circuito irregular; puedes hacer entre 3 y 5 vueltas para una sesión de 7 a 12 km sin salir del parque. No está iluminado de noche, así que la franja matutina es la ideal. Entrada libre.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de la colonia tienen mensualidades sin compromiso de contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gyms independientes suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~18' },
      { label: 'Membresía mensual', value: '$900–$2,400 MXN' },
      { label: 'Outdoor',           value: 'Vivero de Coyoacán · Plaza Hidalgo' },
      { label: 'vs. Roma Norte',    value: '~18% más económico' },
    ],
    barrios: [
      { name: 'Del Carmen',                slug: 'del-carmen',              district: 'coyoacan' },
      { name: 'Jardines del Pedregal',     slug: 'jardines-del-pedregal',   district: 'alvaro-obregon' },
      { name: 'Roma Sur',                  slug: 'roma-sur',                district: 'cuauhtemoc' },
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
    h1: 'Estudios fitness en Coyoacán Centro — Yoga, pilates y spinning 2026',
    metaDesc: 'Estudios en Coyoacán Centro, CDMX: yoga, pilates Reformer y spinning de $160 a $320 MXN/clase. Francisco Sosa y Higuera. Guía 2026.',
    intro: `Coyoacán Centro tiene la escena de yoga más auténtica del sur de la ciudad — no la más grande, pero sí la más consistente en intención. Sobre Higuera y Francisco Sosa hay estudios con lineajes claros donde la parte bohemia del barrio no es decoración sino actitud real: clases con capacidad limitada, instructoras que corrigen individualmente y una vibe que no encuentras en los mega-estudios. El rango de precio por clase suelta va de $160 a $300 MXN, con paquetes mensuales ilimitados de $1,300 a $2,100 MXN.

El pilates Reformer de Coyoacán Centro es el secreto mejor guardado del sur, güey. Los estudios sobre estas calles tienen Reformers de primera línea, grupos de máximo 6 personas y precios entre $40 y $80 MXN menos por clase que los equivalentes en Roma Norte. Para funcional, el barrio tiene algunos boxes indie con coaches que programan en serio — no solo ponen música y cuentan burpees sino que llevan progresión de ciclos y marcan cargas según nivel.

El spinning boutique del barrio es más modesto en cantidad que Condesa pero consistente: bikes calibradas, instructores con estructura de clase real y métricas para seguimiento. Para quien entrena en Coyoacán y busca cardio intenso sin destruir articulaciones, esta es la alternativa más práctica al running del Vivero. Los estudios del barrio tienen horarios adaptados al ritmo del sur — clases desde las 6:30am y bloques nocturnos hasta las 21hs.`,
    faq: [
      {
        q: '¿Qué estilos de yoga hay en Coyoacán Centro?',
        a: 'La oferta incluye Hatha, Vinyasa, Kundalini y Yin — con varios estudios que mezclan estilos según instructor. El barrio tiene al menos dos estudios con instructoras formadas en tradiciones específicas y certificaciones de 500 horas. Para principiantes, Hatha y Vinyasa suave son la entrada más práctica. Para practicantes con experiencia, busca los estudios que tienen programa de formación propio — eso indica que hay metodología detrás y no solo clases sueltas, güey.',
      },
      {
        q: '¿El pilates en Coyoacán Centro vale la pena versus ir a Roma Norte?',
        a: 'Totalmente, güey — la calidad es comparable y el precio es entre $40 y $80 MXN menos por clase suelta en promedio. Un paquete de 8 clases que cuesta $2,100 MXN en Roma Norte suele salir en $1,700-$1,900 MXN en Francisco Sosa. Si vives en el sur o en Coyoacán, no tiene ningún sentido pagar el premium de Roma Norte más el costo de tiempo y tráfico para llegar. Los estudios de Coyoacán Centro tienen el mismo estándar de Reformer y certificación de instructoras.',
      },
      {
        q: '¿Hay estudios de yoga para principiantes en Coyoacán Centro?',
        a: 'Sí, y están bien orientados para alguien que empieza ahorita. La mayoría de los estudios del barrio tienen clases "introducción" o "básico" en su programación semanal. El ambiente bohémico del barrio hace que las clases de principiantes sean menos intimidantes que en estudios más premium de otras colonias. Recomendá buscar estudios que ofrezcan una clase de prueba gratuita o con precio reducido — en Coyoacán Centro varios lo hacen, a diferencia de los boutiques de Roma Norte que ya casi no lo practican.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~10' },
      { label: 'Clase suelta',      value: '$160–$300 MXN' },
      { label: 'Mensual ilimitado', value: '$1,300–$2,100 MXN' },
      { label: 'Especialidad',      value: 'Yoga linaje · Pilates Reformer' },
    ],
    barrios: [
      { name: 'Del Carmen',                slug: 'del-carmen',              district: 'coyoacan' },
      { name: 'Jardines del Pedregal',     slug: 'jardines-del-pedregal',   district: 'alvaro-obregon' },
      { name: 'Roma Sur',                  slug: 'roma-sur',                district: 'cuauhtemoc' },
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
    h1: 'Entrenadores personales en Coyoacán Centro — PT certificados 2026',
    metaDesc: 'Entrenadores personales en Coyoacán Centro, CDMX: $350–$900 MXN/sesión. Funcional, fuerza y yoga terapéutico. Guía de Rodrigo 2026.',
    intro: `Los entrenadores personales de Coyoacán Centro tienen un perfil diferente al de Polanco o Santa Fe: menos enfocados en estética de Instagram y más en funcionalidad real y salud a largo plazo. El barrio expat e intelectual genera una demanda de entrenadores que sepan explicar lo que hacen — por qué este ejercicio, qué adaptación busca, cómo progresa el ciclo. Eso se filtra en la calidad del PT disponible sobre Francisco Sosa y alrededores.

El rango de precio por sesión va de $350 a $900 MXN, con la media del entrenador certificado con experiencia real en $550-$700 MXN por hora. En comparación, el mismo perfil en Polanco cobra entre $900 y $1,400 MXN — la diferencia es significativa para quienes entrenan tres veces por semana. Los entrenadores del barrio trabajan tanto en los gymns locales como de forma independiente, muchos con acceso al Vivero de Coyoacán para sesiones outdoor que incluyen trabajo de movilidad en el parque.

La especialización más fuerte del barrio es yoga terapéutico y entrenamiento funcional con enfoque en movilidad — consecuencia directa de la comunidad que vive aquí, donde hay muchos mayores de 45 años y expatriados que entrenan para mantener calidad de vida y no para competir. Para quienes buscan fuerza pura o preparación atlética específica, hay PTs con esa formación pero son menos numerosos que en zonas con mayor concentración de gymns de fuerza.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Coyoacán Centro?',
        a: 'El rango es de $350 a $900 MXN por sesión de una hora, güey. La media para un entrenador certificado con 3 o más años de experiencia real está entre $550 y $700 MXN. Los PTs independientes que trabajan en el Vivero o en tu departamento suelen estar en la parte baja del rango. Los que operan dentro de estudios boutique con coordinación del espacio incluida cobran en la parte alta. Paquetes de 10 sesiones generalmente traen 10-15% de descuento sobre el precio por sesión.',
      },
      {
        q: '¿Hay entrenadores especializados en adultos mayores en Coyoacán Centro?',
        a: 'Sí, y es ahorita una de las especialidades más desarrolladas del barrio — la demografía de Coyoacán Centro tiene una base importante de personas mayores de 55 años que quieren entrenar con intención y no solo "moverse un poco". Varios PTs del barrio tienen formación específica en entrenamiento funcional para adultos mayores, movilidad articular y trabajo de equilibrio. Para esta necesidad específica, Coyoacán Centro tiene más oferta calificada que zonas más jóvenes como Roma Norte o Condesa.',
      },
      {
        q: '¿Puedo entrenar con un PT en el Vivero de Coyoacán?',
        a: 'Totalmente — el Vivero está abierto de martes a domingo de 6am a 17hs y varios entrenadores del barrio ofrecen sesiones outdoor ahí. El ambiente es chido: pistas de tierra, árboles centenarios, sin el ruido del gym. Las sesiones en el Vivero suelen incluir trabajo de movilidad, cardio en intervalos sobre la pista y fuerza con peso corporal. Algunos PTs llevan bandas de resistencia y kettlebells portátiles. Es más económico que el gym indoor y aplica muy bien para entrenamiento funcional y de resistencia.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Precio sesión',  value: '$350–$900 MXN/hora' },
      { label: 'Media mercado',  value: '$550–$700 MXN' },
      { label: 'Especialidad',   value: 'Funcional · Yoga terapéutico' },
      { label: 'Outdoor',        value: 'Vivero de Coyoacán disponible' },
    ],
    barrios: [
      { name: 'Del Carmen',                slug: 'del-carmen',              district: 'coyoacan' },
      { name: 'Jardines del Pedregal',     slug: 'jardines-del-pedregal',   district: 'alvaro-obregon' },
      { name: 'Roma Sur',                  slug: 'roma-sur',                district: 'cuauhtemoc' },
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
    h1: 'Eventos fitness en Coyoacán Centro — Carreras, yoga y talleres 2026',
    metaDesc: 'Eventos fitness en Coyoacán Centro, CDMX: carreras, clases al aire libre y talleres de bienestar. Plaza Hidalgo y Vivero. Guía 2026.',
    intro: `Coyoacán Centro tiene una vida de eventos fitness que mezcla lo comunitario con lo boutique — combinación difícil de replicar en otros barrios del DF. La Plaza Hidalgo y el perímetro del Vivero son los escenarios naturales donde la actividad surge de forma orgánica: clases de yoga al aire libre los domingos, running clubs que salen desde el kiosco a las 7am y eventos culturales que incluyen meditación guiada o sesiones de respiración.

El calendario de eventos organizados es más estacional que en Roma Norte o Condesa — menos frecuencia pero más arraigo comunitario cuando suceden. Los estudios boutique hacen talleres intensivos de fin de semana con instructores visitantes de otras ciudades o del extranjero, generalmente en el rango de $800 a $1,500 MXN por taller. Para carreras, el Bosque de Tlalpan y el Vivero de Coyoacán reciben eventos de 5K y 10K varias veces al año, con acceso caminando desde el barrio.

La comunidad expat e intelectual genera demanda de eventos más nicho: retiros de medio día de yoga y meditación, talleres de movimiento consciente, sesiones de Yin Yoga con cena colectiva al final. Es el tipo de evento que no ves en grandes carteles sino en grupos de WhatsApp y cuentas de Instagram de los estudios locales — la mejor forma de no perderse nada es seguir a los estudios de Francisco Sosa directamente.`,
    faq: [
      {
        q: '¿Hay clases de yoga gratuitas en Coyoacán Centro?',
        a: 'Sí — sobre la Plaza Hidalgo y en el Vivero de Coyoacán hay clases comunitarias de yoga y meditación, generalmente los domingos por la mañana. La frecuencia varía según temporada y no siempre son anunciadas con anticipación. La mejor forma de enterarse es siguiendo las cuentas de Instagram de los estudios del barrio o preguntando directamente en los estudios de Francisco Sosa. Algunas son gratuitas; otras tienen una cooperación voluntaria de $50-$100 MXN.',
      },
      {
        q: '¿Cuánto cuestan los talleres fitness en Coyoacán Centro?',
        a: 'Los talleres de fin de semana con instructores especializados van de $800 a $1,500 MXN dependiendo de la duración y el instructor. Talleres de 3 horas de yoga o movimiento con instructor local certificado: $800-$1,000 MXN. Talleres de día completo con instructor visitante de otra ciudad o del extranjero: $1,200-$1,500 MXN. Son precios chidos considerando que el equivalente en Roma Norte o Condesa suele estar $200-$400 MXN más caro para el mismo perfil de instructor.',
      },
      {
        q: '¿Hay running clubs en Coyoacán Centro?',
        a: 'Hay al menos 2 grupos de running activos que salen desde la Plaza Hidalgo o Metro Viveros — generalmente los martes, jueves y sábados por la mañana. Son grupos informales sin cuota de membresía. Las distancias típicas son 5 a 10 km usando el circuito del Vivero más las calles aledañas de Francisco Sosa. Para encontrarlos, busca en Strava clubs de Coyoacán o pregunta en los gymns locales — son comunidades pequeñas pero bien establecidas desde hace años.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos regulares',  value: 'Domingo yoga Plaza Hidalgo' },
      { label: 'Talleres boutique',  value: '$800–$1,500 MXN' },
      { label: 'Running clubs',      value: '~2 grupos activos' },
      { label: 'Carreras cercanas',  value: 'Vivero 5K · Tlalpan 10K' },
    ],
    barrios: [
      { name: 'Del Carmen',                slug: 'del-carmen',              district: 'coyoacan' },
      { name: 'Jardines del Pedregal',     slug: 'jardines-del-pedregal',   district: 'alvaro-obregon' },
      { name: 'Roma Sur',                  slug: 'roma-sur',                district: 'cuauhtemoc' },
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
    h1: 'Bienestar en Coyoacán Centro — Spa, meditación y nutrición 2026',
    metaDesc: 'Bienestar en Coyoacán Centro, CDMX: spa, meditación, nutricionistas y terapias alternativas. Francisco Sosa y Higuera. Guía 2026.',
    intro: `El ecosistema de bienestar de Coyoacán Centro es quizás el aspecto más diferenciador del barrio en todo el DF. La comunidad bohémica, intelectual y expat que vive sobre Francisco Sosa y Higuera genera una demanda que va más allá del gym: nutricionistas funcionales, psicólogos con enfoque somático, acupunturistas, masajistas especializados y espacios de meditación con programación continua.

El rango de precio para bienestar es amplio: desde consultas de nutrición en $600-$1,200 MXN hasta sesiones de masaje terapéutico en $500-$900 MXN por 60 minutos. Lo que diferencia a Coyoacán Centro es la concentración de profesionales independientes con formación seria — no spas de cadena sino practicantes con consultorio propio donde la relación con el cliente es de largo plazo. Es el tipo de bienestar que no se mide en Instagram sino en resultados acumulados con el mismo profesional durante meses.

El barrio tiene además una oferta de bienestar mental que pocos barrios del DF pueden igualar: espacios de meditación guiada, grupos de mindfulness y retiros de fin de semana que combinan yoga, meditación y nutrición consciente. Para quien busca un enfoque integral, Coyoacán Centro tiene la oferta más coherente del sur de la ciudad, con precios entre 20 y 30% más accesibles que Polanco o Lomas.`,
    faq: [
      {
        q: '¿Hay nutricionistas especializados en deporte en Coyoacán Centro?',
        a: 'Sí, güey — el barrio tiene varios nutricionistas con enfoque en rendimiento y alimentación funcional. Los precios van de $600 a $1,200 MXN por consulta inicial con plan personalizado. El perfil predominante es nutrición funcional con visión integrativa — no solo macros sino inflamación, digestión y hábitos de sueño. Para atletas recreativos o personas que entrenan 3-4 veces por semana, este enfoque es más útil que la nutrición convencional de caloría simple. Muchos tienen espacio de consulta propio sobre Higuera o Francisco Sosa.',
      },
      {
        q: '¿Cuánto cuesta un masaje terapéutico en Coyoacán Centro?',
        a: 'El rango es de $500 a $900 MXN por 60 minutos, dependiendo de la técnica y el practicante. Masaje sueco de relajación: $500-$650 MXN. Masaje de tejido profundo o deportivo: $650-$900 MXN. Técnicas más especializadas como Shiatsu o Thai: $750-$950 MXN. Los precios son entre 15 y 25% más económicos que en Condesa o Roma Norte para el mismo nivel de servicio. Recomendá buscar practicantes independientes con espacio propio — la calidad suele ser mejor que los spas de cadena.',
      },
      {
        q: '¿Hay espacios de meditación en Coyoacán Centro?',
        a: 'El barrio tiene al menos 3 espacios con programación regular de meditación guiada — sesiones semanales de 60 a 90 minutos en rango de $100 a $200 MXN por clase. Algunos estudios de yoga del barrio integran meditación como parte de su programación sin costo adicional a la membresía. Para práctica más intensa, hay retiros de fin de semana de viernes noche a domingo mediodía en el rango de $1,800 a $3,500 MXN incluyendo alimentación. La comunidad de meditación de Coyoacán es pequeña pero muy activa y bien conectada.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',  value: '$600–$1,200 MXN' },
      { label: 'Masaje terapéutico',  value: '$500–$900 MXN/60 min' },
      { label: 'Meditación',          value: '$100–$200 MXN/sesión' },
      { label: 'vs. Polanco',         value: '~25% más económico' },
    ],
    barrios: [
      { name: 'Del Carmen',                slug: 'del-carmen',              district: 'coyoacan' },
      { name: 'Jardines del Pedregal',     slug: 'jardines-del-pedregal',   district: 'alvaro-obregon' },
      { name: 'Roma Sur',                  slug: 'roma-sur',                district: 'cuauhtemoc' },
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
