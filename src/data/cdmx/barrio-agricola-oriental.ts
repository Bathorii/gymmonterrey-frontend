// src/data/cdmx/barrio-agricola-oriental.ts
// Draft – lastReviewed: 2026-06-23

export const barrioContent = {
  nombre: 'Agrícola Oriental',
  slug: 'agricola-oriental',
  group: 'C',
  parentDistrict: {
    nombre: 'Iztacalco',
    slug: 'iztacalco',
  },
  lastReviewed: '2026-06-23',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Agrícola Oriental es uno de los barrios más densamente poblados de Iztacalco: casas unifamiliares compactas, vecindades de dos pisos y una actividad comercial constante sobre Calle Agrícola Oriental y Eje 5 Sur. El NSE es D+ alto — la transición entre popular y clase media baja — con perfil de trabajador joven y familia de ingresos medios-bajos que valora los servicios accesibles sin necesidad de salir de la zona. Calz. Ignacio Zaragoza conecta el barrio con el resto del oriente de CDMX y con la NAICM al este, generando tránsito vehicular y de transporte público constante. Metro Agrícola Oriental es el ancla de movilidad del barrio — de ahí sale y llega una buena parte de la población activa todos los días. La oferta de fitness en la zona responde directamente a este perfil: gymns budget con membresías accesibles, horarios amplios y sin complicaciones de inscripción.

Para el vecino de Agrícola Oriental que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Agrícola Oriental en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Agrícola Oriental — fitness budget en Iztacalco 2026',
    metaDesc: 'Gimnasios en Agrícola Oriental, Iztacalco, CDMX: ~6 opciones de $400 a $1,000 MXN/mes. Calle Agrícola Oriental, Eje 5 Sur, Metro. NSE D+, alta densidad. Guía',
    intro: `Agrícola Oriental tiene alrededor de 6 gimnasios activos, distribuidos principalmente sobre Calle Agrícola Oriental, Eje 5 Sur y las calles adyacentes a la estación de Metro. El rango de membresía es de los más bajos de Iztacalco: $400 a $1,000 MXN mensual, con la mayoría de los gymns con equipamiento completo en el tramo $550–$800 MXN. La inscripción inicial generalmente va de $150 a $300 MXN, o se condona con pago anticipado de dos meses.

El perfil de usuario es joven — 18-40 años — con objetivo de pérdida de peso, mantenimiento físico o ganancia muscular básica. Los gymns de la zona no tienen vocación de alto rendimiento ni atraen a deportistas competitivos de ninguna modalidad específica. Lo que tienen es equipamiento funcional completo, horarios que arrancan a las 6:00am, duchas operativas y personal en piso durante el horario de apertura. Algunos incluyen clases de grupo — aeróbics y zumba — en la membresía mensual sin costo adicional.

El Metro Agrícola Oriental es la conexión de entrada más directa al barrio desde el norte y el poniente. Calz. Ignacio Zaragoza conecta con Pantitlán y con el corredor Zaragoza hacia el Estado de México. Para quien vive en el barrio, la opción de gym a 5-10 minutos caminando a precio de $550-$750 MXN es difícil de superar sin salir de la zona.`,
    faq: [
      {
        q: '¿Cuánto cuesta la membresía de un gym en Agrícola Oriental?',
        a: 'Las membresías en Agrícola Oriental van de $400 a $1,000 MXN mensuales. El rango más frecuente para gym con pesas, cardio y duchas es $550–$800 MXN. La inscripción inicial va de $150 a $300 MXN en la mayoría de los casos. Algunos gymns tienen pago quincenal de $250–$420 MXN para mayor flexibilidad. Es uno de los rangos más bajos de Iztacalco para gym funcional completo, comparado con barrios como Viaducto Piedad o Jardín Balbuena donde el precio sube 20-30% por la proximidad al corredor de Roma.',
      },
      {
        q: '¿Los gymns de Agrícola Oriental tienen buenas instalaciones?',
        a: 'Las instalaciones en Agrícola Oriental son funcionales para entrenamiento de mantenimiento e hipertrofia básica: mancuernas hasta 40kg, máquinas de cable y poleas, equipos cardiovasculares operativos y área de estiramiento. No son gymns de alta gama con iluminación de diseño ni aplicaciones de tracking digital — son espacios limpios, con equipamiento en buen estado de mantenimiento, donde el entrenamiento es el objetivo sin distracción. Para el precio que tienen, la relación calidad-costo es buena para el perfil del barrio.',
      },
      {
        q: '¿Qué Metro llega a los gymns de Agrícola Oriental?',
        a: 'Metro Línea 9 estación Agrícola Oriental es la más directa — a 5-10 minutos caminando de la mayoría de los gymns sobre Calle Agrícola Oriental. Desde el poniente (Doctores, Centro) la Línea 9 llega sin transborde. Desde Pantitlán (oriente) también Línea 9 directa. Desde el norte y Gustavo A. Madero, el camión sobre Eje 5 Sur es la opción más cómoda. Desde Jardín Balbuena, el barrio está a 15-20 minutos en camión sobre Zaragoza.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Agrícola Oriental tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Agrícola Oriental suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~6' },
      { label: 'Membresía mensual', value: '$400–$1,000 MXN' },
      { label: 'Referente',         value: 'Calle Agrícola Oriental / Metro Línea 9' },
      { label: 'Perfil',            value: 'Budget D+, alta densidad poblacional' },
    ],
    barrios: [
      { name: 'Viaducto Piedad',    slug: 'viaducto-piedad',    district: 'iztacalco'            },
      { name: 'Pantitlán',          slug: 'pantitlan',          district: 'iztacalco'            },
      { name: 'Jardín Balbuena',    slug: 'jardin-balbuena',    district: 'venustiano-carranza'  },
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
    h1: 'Estudios en Agrícola Oriental',
    metaDesc: 'Estudios y clases en Agrícola Oriental, Iztacalco: aeróbics y zumba incluidas en membresía. Metro Agrícola Oriental. NSE D+, fitness accesible. Guía 2026.',
    intro: `Los estudios boutique especializados no están presentes en Agrícola Oriental: no hay Reformer de pilates, no hay cycling con potenciómetros ni yoga en estudio diseñado. El barrio tiene clases de grupo integradas en los gymns sobre Calle Agrícola Oriental y Eje 5 Sur: aeróbics de alta intensidad, zumba y funcional básico sin cargo adicional sobre la membresía mensual. El formato responde al perfil D+ del barrio — clase grupal con instructor en vivo, sin pagar aparte, a horarios de mañana y tarde.

El alumno de clase de grupo en Agrícola Oriental es constante: la rotación en los gymns de este tipo de barrio es menor que en zonas de mayor poder adquisitivo porque cambiar de gym implica más costo relativo. La cohesión social entre socios es real — se conocen, se coordinan para ir juntos — y eso genera asistencia estable. El instructor que lleva tiempo en el barrio conoce a sus alumnos por nombre y sabe sus objetivos.

Para yoga con instructor certificado o pilates mat en grupo pequeño, la opción más cercana está en Viaducto Piedad o en el corredor hacia Jardín Balbuena sobre Zaragoza. Para clase de grupo efectiva a precio D+ sin salir del barrio, Agrícola Oriental lo tiene resuelto dentro del gym de la cuadra.`,
    faq: [
      {
        q: '¿Qué clases de grupo hay en Agrícola Oriental?',
        a: 'Los formatos más comunes son aeróbics de alto impacto y zumba, incluidos en la membresía mensual de los gymns principales sin costo adicional. Algunos gymns tienen funcional básico y cardio en grupo como parte del horario semanal de clases. Los horarios de clase van de 7:00–9:00am y 6:00–8:00pm de lunes a viernes. El tamaño del grupo es de 10-20 personas. Para modalidades más específicas como yoga o pilates, hay que salir al barrio de Viaducto Piedad o hacia Jardín Balbuena.',
      },
      {
        q: '¿Las clases de grupo en Agrícola Oriental son para cualquier nivel?',
        a: '¡Sí, güey! Los gymns de Agrícola Oriental reciben alumnos de cualquier nivel de condición física. Los instructores de aeróbics y zumba de la zona están acostumbrados a grupos mixtos y adaptan la intensidad durante la clase. El ambiente es sin competencia ni presión — si necesitas reducir el ritmo, lo haces sin problema. Es un buen punto de entrada para quien retoma actividad física después de tiempo inactivo o para quien quiere clase de grupo sin presión de rendimiento.',
      },
      {
        q: '¿Hay estudios boutique cerca de Agrícola Oriental?',
        a: 'En el barrio propiamente no hay estudio boutique. El barrio más cercano con mayor oferta de estudios especializados es Viaducto Piedad, a 10-15 minutos en camión sobre Eje 5 Sur. Jardín Balbuena, a 20 minutos sobre Calz. Ignacio Zaragoza, también tiene algo más de oferta de pilates y yoga. Para quien vive en Agrícola Oriental y quiere modalidad boutique, esas son las opciones más cercanas sin necesidad de cruzar toda la ciudad.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Clases disponibles', value: 'Aeróbics / Zumba / Funcional' },
      { label: 'Clase suelta',       value: '$70–$150 MXN' },
      { label: 'Incluido membresía', value: 'Sí en gymns principales' },
      { label: 'Ambiente',           value: 'Comunidad D+, socios regulares' },
    ],
    barrios: [
      { name: 'Viaducto Piedad',    slug: 'viaducto-piedad',    district: 'iztacalco'            },
      { name: 'Pantitlán',          slug: 'pantitlan',          district: 'iztacalco'            },
      { name: 'Jardín Balbuena',    slug: 'jardin-balbuena',    district: 'venustiano-carranza'  },
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
    h1: 'Entrenadores personales en Agrícola Oriental',
    metaDesc: 'Entrenadores personales en Agrícola Oriental, Iztacalco: PT $280–$600 MXN/sesión. Metro Línea 9. Budget D+, acceso directo. Guía 2026.',
    intro: `El personal training en Agrícola Oriental está en el rango más bajo de Iztacalco: $280 a $600 MXN por sesión individual. Es reflejo directo del NSE D+ del barrio y de la lógica de servicio sin intermediario que opera en los gymns locales. Los entrenadores trabajan dentro de los gymns sobre Calle Agrícola Oriental y Eje 5 Sur, con agenda por WhatsApp y disponibilidad desde las 6:00am.

El perfil del entrenador es práctico: certificación básica, 1-4 años de experiencia, especialización en pérdida de peso y acondicionamiento. La demanda del barrio no es fuerza competitiva ni rehabilitación funcional avanzada — es bajar de peso, tonificar y tener más energía. Los entrenadores de Agrícola Oriental entienden ese objetivo y trabajan en ese rango sin pretensiones de lo que no son.

La ventaja del PT en Agrícola Oriental es el precio: a $280-$600 MXN por sesión, es accesible para quien tiene presupuesto D+ y quiere mejorar resultados más allá del entrenamiento autónomo. Paquetes de 10 sesiones a $2,200-$4,800 MXN permiten un mes de trabajo personalizado por menos de lo que cuesta una sola sesión en zonas como Roma Norte. Para el resultado específico que el perfil del barrio busca, es suficiente. El precio accesible de los PTs del sector refleja la realidad económica del barrio sin sacrificar lo esencial.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Agrícola Oriental?',
        a: 'Una sesión individual con PT en Agrícola Oriental va de $280 a $600 MXN. Los paquetes de 10 sesiones van de $2,200 a $4,800 MXN con descuento de 15-20%. Es el rango más accesible de Iztacalco para entrenador certificado. A domicilio hay cargo adicional de $80-$100 MXN por traslado. Comparado con los $350-$700 MXN del PT en Viaducto Piedad o Jardín Balbuena, el ahorro en Agrícola Oriental es real aunque la diferencia de instalaciones también aplica.',
      },
      {
        q: '¿Cómo verifico que el entrenador de Agrícola Oriental está certificado?',
        a: 'Pedí ver el documento de certificación — ISSA, ACSM o equivalente nacional. Cualquier entrenador serio lo tiene disponible en físico o en su perfil de Instagram. El nivel base de certificación es el mismo en cualquier barrio; lo que varía es la especialización y los años de experiencia acumulada. Para entrenamiento de propósito general, la certificación básica es suficiente. Para objetivos específicos como rehabilitación post-lesión o preparación para competencia, buscá entrenadores con certificaciones adicionales en esas áreas — menos frecuentes en Agrícola Oriental.',
      },
      {
        q: '¿Vale la pena contratar PT en Agrícola Oriental si mi objetivo es bajar de peso?',
        a: '¡Sí, güey! Para pérdida de peso progresiva con supervisión, el PT de Agrícola Oriental es una opción muy razonable: precio accesible, disponibilidad alta, y conocimiento del perfil del barrio. El entrenador te arma una rutina de cardio más fuerza, te lleva el seguimiento de progreso y corrige la técnica en tiempo real — todo eso vale mucho más que entrenar solo, independientemente del barrio. Para pérdida de peso avanzada con periodización nutricional integrada, conviene combinar PT con nutriólogo — ambos disponibles en el barrio a precios D+.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$280–$600 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,200–$4,800 MXN' },
      { label: 'Perfil',              value: 'Pérdida de peso / Tonificación' },
      { label: 'Acceso',              value: 'Metro Línea 9 directo' },
    ],
    barrios: [
      { name: 'Viaducto Piedad',    slug: 'viaducto-piedad',    district: 'iztacalco'            },
      { name: 'Pantitlán',          slug: 'pantitlan',          district: 'iztacalco'            },
      { name: 'Jardín Balbuena',    slug: 'jardin-balbuena',    district: 'venustiano-carranza'  },
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
    h1: 'Eventos fitness en Agrícola Oriental — activaciones en Iztacalco 2026',
    metaDesc: 'Eventos fitness en Agrícola Oriental, Iztacalco: retos internos y clases abiertas de $0 a $180 MXN. Calle Agrícola Oriental. Guía 2026.',
    intro: `Los eventos de fitness en Agrícola Oriental son modestos en producción pero genuinos en participación: la comunidad de socios de los gimnasios de Agrícola Oriental se conoce, y cuando hay un reto interno o una clase abierta, la asistencia es real. Los gymns sobre Calle Agrícola Oriental y Eje 5 Sur organizan retos de asistencia, medición de peso quincenal y clases abiertas en aniversarios. Todo comunicado por WhatsApp del grupo de socios y cartel físico en la entrada — no por Instagram ni por campañas digitales.

El barrio no tiene parque propio de gran escala para actividad física organizada, pero Calz. Ignacio Zaragoza tiene ciclovía y banqueta amplia en algunos tramos que se usa para caminar o trotar. El parque más cercano con área verde para ejercicio es el Parque Los Reyes en Iztacalco, a 15-20 minutos en camión. Algunos gimnasios de Agrícola Oriental organizan caminatas esporádicas hacia esa zona los domingos.

Para eventos fitness de mayor escala — carreras organizadas, clases masivas, activaciones de marca — hay que ir hacia Pantitlán o hacia Jardín Balbuena sobre Zaragoza. Agrícola Oriental no tiene ese perfil de evento, pero la comunidad interna de sus gymns es más cohesionada que la de barrios con mayor rotación de socios.`,
    faq: [
      {
        q: '¿Hay eventos de running o fitness al aire libre en Agrícola Oriental?',
        a: 'Agrícola Oriental no tiene parque de gran escala propio para actividad física organizada. Los gimnasios de Agrícola Oriental hacen salidas esporádicas a Calz. Ignacio Zaragoza (caminata/trote en ciclovía) o al Parque Los Reyes en Iztacalco (15-20 min en camión), coordinadas por WhatsApp sin costo ni inscripción formal. Para carreras organizadas con chip y premiación, las más cercanas son las que se hacen en Pantitlán o las que organiza el Gobierno de Iztacalco en el corredor Zaragoza.',
      },
      {
        q: '¿Cómo me entero de eventos y novedades en los gymns de Agrícola Oriental?',
        a: 'El canal principal es el WhatsApp de socios del gym — pedí que te incluyan desde el primer día. Cartel físico en la puerta del gym es la segunda fuente más confiable. Instagram de los gimnasios de Agrícola Oriental generalmente no está activo o tiene poca frecuencia de publicación. Si estás considerando inscribirte a un gym de la zona, visitar el local y preguntar directamente es la forma más efectiva de entender qué eventos y actividades tienen planificados.',
      },
      {
        q: '¿Hay clases de prueba gratuitas en Agrícola Oriental?',
        a: '¡Sí! La mayoría de los gymns de Agrícola Oriental permiten primera visita de prueba sin costo o a precio de pase de día de $70–$130 MXN. Para clases de grupo abiertas gratuitas sin ser socio, la oportunidad más frecuente es en aniversarios del gym o cuando presentan nueva modalidad. Checá el cartel de los gymns de tu interés en la zona — si hay algo planeado, lo van a anunciar ahí con 3-5 días de anticipación.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Formato habitual', value: 'Retos internos / Clases abiertas' },
      { label: 'Precio eventos',   value: '$0–$180 MXN' },
      { label: 'Comunicación',     value: 'WhatsApp + cartel físico' },
      { label: 'Outdoor cercano',  value: 'Parque Los Reyes (15-20 min)' },
    ],
    barrios: [
      { name: 'Viaducto Piedad',    slug: 'viaducto-piedad',    district: 'iztacalco'            },
      { name: 'Pantitlán',          slug: 'pantitlan',          district: 'iztacalco'            },
      { name: 'Jardín Balbuena',    slug: 'jardin-balbuena',    district: 'venustiano-carranza'  },
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
    h1: 'Bienestar en Agrícola Oriental',
    metaDesc: 'Bienestar en Agrícola Oriental, Iztacalco: nutrición $280–$580 MXN, masaje $220–$480 MXN. Metro Línea 9. NSE D+, funcional. Guía 2026.',
    intro: `El bienestar en Agrícola Oriental es directo y honesto: nutrición básica accesible, masaje de recuperación funcional, y los precios más bajos de Iztacalco para ambos servicios. Los consultorios de nutrición sobre Calle Agrícola Oriental y Eje 5 Sur tienen énfasis en pérdida de peso y control de enfermedades crónicas — primera consulta de $280 a $580 MXN, seguimiento mensual de $220 a $400 MXN. Es el rango D+ de un barrio donde el presupuesto de salud es limitado pero la demanda de apoyo nutricional es real, especialmente para control de diabetes e hipertensión que son prevalentes en el perfil del barrio.

El masaje en Agrícola Oriental está en $220–$480 MXN por sesión de 60 minutos — el rango más bajo de Iztacalco para masaje formal con camilla. Hay centros de masaje sobre Calle Agrícola Oriental y dentro de algunos gimnasios de Agrícola Oriental. El servicio más común es masaje de relajación y tejido profundo básico; el drenaje linfático y el masaje deportivo específico existen pero con menor frecuencia de oferta.

Crioterapia y servicios de recuperación de alta tecnología no están disponibles en el barrio. Para el perfil D+ de Agrícola Oriental — quien necesita apoyo nutricional básico y recuperación post-entrenamiento sin lujo — el ecosistema local cubre sin necesidad de cruzar a barrios más costosos.`,
    faq: [
      {
        q: '¿Hay nutriólogos accesibles en Agrícola Oriental?',
        a: 'Hay consultorios de nutrición sobre Calle Agrícola Oriental y Eje 5 Sur con primera consulta de $280 a $580 MXN y seguimiento mensual de $220 a $400 MXN. El enfoque es principalmente pérdida de peso, control glucémico y educación alimentaria básica — los objetivos más comunes en el perfil D+ del barrio. No son nutriólogos especializados en rendimiento deportivo de alto nivel, pero para bajar de peso y mejorar hábitos son adecuados. El precio es 25-40% menor que el equivalente en Viaducto Piedad o Jardín Balbuena.',
      },
      {
        q: '¿Qué servicios de masaje están disponibles en Agrícola Oriental?',
        a: 'El masaje de relajación clásico y tejido profundo básico son los servicios más disponibles, con precio de $220 a $480 MXN por 60 minutos. Hay centros de masaje sobre Calle Agrícola Oriental y algunos gimnasios de Agrícola Oriental tienen servicio integrado. El drenaje linfático y el masaje deportivo específico para recuperación post-entrenamiento existen en algunos locales — preguntá directamente al llegar. Para masaje de mayor especialización técnica, Viaducto Piedad tiene mejor oferta a 10-15 minutos.',
      },
      {
        q: '¿Vale la pena la nutrición en Agrícola Oriental para apoyo al entrenamiento?',
        a: '¡Sí, güey! Si el objetivo es pérdida de peso con entrenamiento y necesitas apoyo nutricional básico para ajustar la dieta, los consultorios de Agrícola Oriental son adecuados y mucho más accesibles que las zonas más acomodadas. La combinación de membresía de gym en $550–$800 MXN más nutriólogo en $280–$400 MXN de seguimiento mensual es un presupuesto de fitness completo que cabe en el rango D+. Para periodización nutricional de deportista de rendimiento, necesitas ir a otro barrio — pero para el objetivo más común, Agrícola Oriental lo resuelve.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$280–$580 MXN' },
      { label: 'Masaje relajación 60m', value: '$220–$480 MXN' },
      { label: 'Seguimiento mensual',  value: '$220–$400 MXN' },
      { label: 'Vs. Viaducto Piedad',  value: '25-40% más accesible' },
    ],
    barrios: [
      { name: 'Viaducto Piedad',    slug: 'viaducto-piedad',    district: 'iztacalco'            },
      { name: 'Pantitlán',          slug: 'pantitlan',          district: 'iztacalco'            },
      { name: 'Jardín Balbuena',    slug: 'jardin-balbuena',    district: 'venustiano-carranza'  },
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
