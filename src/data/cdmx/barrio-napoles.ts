// src/data/cdmx/barrio-napoles.ts
// Draft – lastReviewed: 2026-06-29

export const barrioContent = {
  nombre: 'Nápoles',
  slug: 'napoles',
  group: 'C',
  parentDistrict: {
    nombre: 'Benito Juárez',
    slug: 'benito-juarez',
  },
  lastReviewed: '2026-06-29',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Nápoles es el barrio de tránsito que más gente conoce sin darse cuenta, güey. Sobre Insurgentes Sur — uno de los corredores más densos de la CDMX — hay una concentración de fitness de volumen real: grandes cadenas, Smart Fit Citiinsurgentes incluido, con capacidad para cientos de socios simultáneos y precios de membresía que arrancaron la democratización del gym en la ciudad. NSE C con uso intensivo de transporte: Metro Insurgentes Sur y el Metrobús son el acceso principal para socios que vienen de toda la zona sur. El barrio es residencial-comercial con dinámica mixta: edificios de departamentos, oficinas, restaurantes, y sobre Insurgentes un flujo peatonal de los más altos de la delegación. Esa densidad hace que los gymns de Nápoles trabajen con alta rotación de usuarios — no son los spaces de comunidad pequeña de Portales — pero garantizan infraestructura moderna, horarios extendidos, y el precio de

Para el vecino de Nápoles que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Nápoles en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Nápoles',
    metaDesc: 'Gimnasios en Nápoles, CDMX: ~10 opciones de $400 a $1,600 MXN/mes. Insurgentes Sur, Cozumel, Filadelfia. Smart Fit y alternativas. Guía 2026.',
    intro: `Nápoles tiene alrededor de 10 gimnasios y espacios fitness, con Smart Fit Citiinsurgentes como referente de volumen en la zona. La cadena opera con membresías desde $400 MXN al mes, infraestructura de último modelo, horarios de 5am a 11pm de lunes a viernes, y capacidad para manejar cientos de socios diarios sin colapsar la experiencia de entrenamiento. Es el formato que define el piso del mercado fitness de Benito Juárez para quien quiere acceso básico a todo sin pagar premium.

Sobre Cozumel y Filadelfia hay alternativas más locales: gymns de formato mediano con grupos de clases de 15-25 personas, entrenadores que conocen a sus socios, y membresías entre $800 y $1,600 MXN con más personalización de servicio. El perfil es distinto al de la cadena — menos volumen, más comunidad — y comparte el mercado de Nápoles con quien busca algo diferente a la experiencia de gran cadena.

El acceso es el dato definitorio de Nápoles: Metro Insurgentes Sur y el Metrobús Insurgentes conectan el barrio con toda la ciudad de sur a norte en tiempo real. Eso hace que los gymns de Nápoles sobre Insurgentes Sur sean destino de socios que no necesariamente viven en Nápoles — vienen de Portales, Del Valle Sur, incluso de Coyoacán usando el eje de transporte. La densidad de uso en hora pico es real y hay que considerarla si quieres entrenar entre 7-8am o 7-9pm en Smart Fit, güey.`,
    faq: [
      {
        q: '¿Cuánto cuesta Smart Fit en Nápoles y qué incluye?',
        a: 'Smart Fit Citiinsurgentes en Nápoles maneja planes desde $400 MXN al mes para acceso básico a equipos de pesas y cardio, hasta $700-$900 MXN con clases grupales incluidas y acceso a múltiples sucursales. La inscripción inicial ronda los $200-$400 MXN según la promoción del mes. La infraestructura incluye sala de pesas con equipamiento moderno, área cardiovascular con decenas de máquinas, vestuarios amplios y clases de grupo en salón separado. El modelo de cadena significa estandarización de calidad en equipamiento pero alta densidad de usuarios en hora pico.',
      },
      {
        q: '¿Hay alternativas a Smart Fit en Nápoles con grupos más pequeños?',
        a: '¡Ahorita sí, güey! Sobre Cozumel y Filadelfia hay gymns independientes y de cadena pequeña con membresías de $800-$1,400 MXN que ofrecen grupos de clases más reducidos, staff más estable y una dinámica más parecida al gym de barrio. Si entrenas entre semana en horario de mediodía o tarde no pico, incluso Smart Fit tiene disponibilidad razonable. Para quien prioriza la comunidad sobre el precio mínimo, los gymns sobre Filadelfia son la alternativa más práctica dentro del mismo barrio.',
      },
      {
        q: '¿Cuál es el mejor horario para ir al gym en Nápoles sin espera?',
        a: 'Los gymns de Nápoles sobre Insurgentes Sur tienen su pico de demanda entre 7-9am y 6:30-9pm de lunes a viernes. El horario de menor saturación es mediodía (12-2pm) y primeras horas de la mañana antes de las 7am — Smart Fit abre a las 5am y las primeras dos horas son las más tranquilas. Los sábados de 9 a 11am tienen una ocupación media manejable. Si tu agenda te permite horario de mediodía, la experiencia de entrenamiento en los gymns de Nápoles sobre Insurgentes es completamente diferente — sin espera en máquinas ni área cardiovascular al límite.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Nápoles tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Nápoles suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~10' },
      { label: 'Membresía mensual', value: '$400–$1,600 MXN' },
      { label: 'Referente',         value: 'Smart Fit Citiinsurgentes' },
      { label: 'Acceso',            value: 'Metro Insurgentes Sur / Metrobús' },
    ],
    barrios: [
      { name: 'Del Valle Norte',   slug: 'del-valle-norte',   district: 'benito-juarez' },
      { name: 'Del Valle Sur',     slug: 'del-valle-sur',     district: 'benito-juarez' },
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
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
    h1: 'Estudios en Nápoles — pilates, yoga y funcional sobre Insurgentes 2026',
    metaDesc: 'Estudios boutique en Nápoles, CDMX: pilates, yoga y funcional de $120 a $280 MXN/clase. Cozumel y Filadelfia. Alternativa real a la cadena. Guía 2026.',
    intro: `Los estudios de Nápoles son la alternativa real para quien quiere algo distinto al modelo de gran cadena de Insurgentes Sur. Sobre Cozumel y Filadelfia hay espacios de pilates de suelo y Reformer básico, yoga con grupos de 8-15 personas, y funcional boutique con programación más personalizada que el salón de clases de Smart Fit. El perfil del cliente es quien ya tiene claro que prefiere grupos pequeños sobre infraestructura masiva, y está dispuesto a pagar $200-$400 MXN más al mes por eso. La clase suelta en los estudios de Nápoles va de $120 a $280 MXN — por arriba de Portales Sur y por debajo de Narvarte Poniente, un punto medio que refleja bien el NSE C del barrio. Los planes mensuales van de $1,100 a $2,000 MXN para acceso ilimitado. La infraestructura no compite en diseño con los boutiques de Roma Norte, pero el nivel de instrucción en los estudios establecidos es real y consistente. Lo que diferencia los estudios de Nápoles de los de Portales es el cliente: en Nápoles hay una mayor proporción de profesionales que trabajan en la zona de Insurgentes — oficinas de seguros, despachos, empresas de servicios — y que buscan clase de mediodía o fin de tarde antes de volver a casa. Eso genera grupos con buena asistencia en horarios que en otros barrios están vacíos. Ahorita el mercado de estudios en Nápoles tiene espacio disponible y no hay lista`,
    faq: [
      {
        q: '¿Hay pilates con Reformer en Nápoles?',
        a: 'Hay estudios sobre Cozumel y Filadelfia con Reformers de calidad estándar — Balanced Body o equivalente — con grupos de 6-10 personas y instructoras con formaciones certificadas. No es el mismo volumen de espacios que en Narvarte Poniente o Condesa, pero hay opciones reales y establecidas. La clase suelta va de $180 a $280 MXN; planes mensuales de Reformer ilimitado de $1,500-$2,000 MXN. Para Reformer de Nápoles el factor clave es reservar con anticipación — los grupos son pequeños y se llenan más rápido que en gyms grandes.',
      },
      {
        q: '¿Cuánto cuesta un plan mensual en estudios de Nápoles?',
        a: 'Los planes mensuales en estudios de Nápoles van de $1,100 a $2,000 MXN según modalidad. Yoga ilimitado de $1,100 a $1,500 MXN; pilates Reformer ilimitado de $1,500 a $2,000 MXN; funcional boutique de $1,200 a $1,800 MXN. Las clases sueltas van de $120 a $280 MXN. Muchos estudios ofrecen primera clase gratis o a precio de prueba para nuevos alumnos — vale preguntar directamente antes de comprar plan mensual, porque la dinámica de la clase es lo que realmente importa para decidir si es el espacio correcto para tu práctica.',
      },
      {
        q: '¿Los estudios de yoga en Nápoles son buenos para principiantes?',
        a: '¡Ahorita sí, güey! Hay estudios sobre Cozumel con clases de yoga nivel básico explícitamente diseñadas para quien no tiene práctica previa — sin jerga técnica asumida, con corrección postural individual y progresión gradual. El formato de grupos pequeños (8-15 personas) hace posible que el instructor corrija a cada alumno en cada sesión, algo que en el salón de 40 personas de un gym grande es imposible. La clase suelta para principiantes va de $120 a $200 MXN. Dos o tres clases de prueba son suficientes para saber si el estilo del instructor encaja con lo que buscas.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~6' },
      { label: 'Clase suelta',      value: '$120–$280 MXN' },
      { label: 'Mensual ilimitado', value: '$1,100–$2,000 MXN' },
      { label: 'Especialidad',      value: 'Pilates Reformer / Yoga' },
    ],
    barrios: [
      { name: 'Del Valle Norte',   slug: 'del-valle-norte',   district: 'benito-juarez' },
      { name: 'Del Valle Sur',     slug: 'del-valle-sur',     district: 'benito-juarez' },
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
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
    h1: 'Entrenadores personales en Nápoles',
    metaDesc: 'Entrenadores personales en Nápoles, CDMX: PT certificados de $350 a $800 MXN/sesión. Insurgentes Sur y Cozumel. Cadena y independiente. Guía 2026.',
    intro: `El personal training en Nápoles tiene dos perfiles bien distintos: los entrenadores que trabajan en el modelo de cadena de Smart Fit — con seguimiento de ventas, clientes asignados por disponibilidad y paquetes cerrados — y los entrenadores independientes que trabajan sobre Cozumel y Filadelfia con mayor autonomía de programación y relación más directa con el cliente. Los precios son diferentes y también la experiencia.

Los entrenadores independientes de Nápoles cobran $350-$800 MXN por sesión y trabajan con 8-15 clientes regulares a los que conocen en profundidad. La programación es personalizada, la agenda se coordina directamente, y el primer diagnóstico de movimiento es parte de la primera sesión. El modelo de Smart Fit tiene entrenadores con certificaciones y paquetes de $400-$700 MXN por sesión dentro de la membresía, con mayor estandarización de protocolo.

Para resultado a largo plazo, la clave no es la marca sino la continuidad del entrenador. Un PT que conoce tu historial de lesiones, tu evolución de fuerza de los últimos tres meses, y tu agenda real de la semana, te va a dar mejor resultado que un entrenador nuevo cada vez. En Nápoles, los entrenadores independientes tienen esa continuidad. Los de cadena tienen la ventaja de estar integrados en el gym de membresía más baja del mercado — si ya tienes Smart Fit, el costo combinado puede ser el más accesible de la zona, güey.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Nápoles?',
        a: 'Una sesión individual va de $350 a $800 MXN según modalidad y si el entrenador trabaja en gym de cadena o de manera independiente. Los entrenadores de Smart Fit tienen paquetes internos de $400-$700 MXN por sesión adicionales a la membresía. Los independientes de Cozumel y Filadelfia cobran $450-$800 MXN con mayor personalización. Los paquetes de 10 sesiones van de $3,000 a $7,000 MXN. Entrenamiento a domicilio con costo adicional de $80-$130 MXN por traslado. El rango de Nápoles está en el punto medio de Benito Juárez — ni el más bajo ni el más alto.',
      },
      {
        q: '¿Es mejor contratar el PT de Smart Fit o uno independiente en Nápoles?',
        a: 'Depende de lo que buscas, güey. El PT de Smart Fit tiene la ventaja de estar en el mismo espacio donde ya tienes membresía — sin costo de acceso adicional, con infraestructura completa. La desventaja es el modelo de ventas de la cadena: pueden asignarte entrenador según disponibilidad, no según afinidad de estilo de trabajo. El independiente tiene más libertad de programación, agenda directa y relación más personalizada — pero tienes que coordinar acceso al gym por separado si no eres ya socio de un gym del barrio. Para alguien que empieza, Smart Fit PT es la entrada más simple. Para quien ya entrenó con PT antes y sabe qué busca, el independiente suele dar mejor resultado a mediano plazo.',
      },
      {
        q: '¿Hay entrenadores especializados en pérdida de peso o composición corporal en Nápoles?',
        a: 'Sí, hay entrenadores en Nápoles — tanto en Smart Fit como independientes — especializados en pérdida de peso con periodización metabólica y seguimiento de composición corporal. El trabajo incluye medición inicial con bioimpedancia o pliegues cutáneos, seguimiento quincenal o mensual, y ajuste del plan según los datos reales, no según la percepción subjetiva de progreso. El precio va de $350 a $700 MXN por sesión. Para resultado real en pérdida de grasa, el PT funciona mejor cuando va coordinado con nutriólogo — en Nápoles hay ambos en el barrio, y vale preguntar al entrenador si trabaja en red con algún nutricionista de la zona.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$350–$800 MXN' },
      { label: 'Paquete 10 sesiones', value: '$3,000–$7,000 MXN' },
      { label: 'Referente',           value: 'Smart Fit PT + independientes' },
      { label: 'Especialidad',        value: 'Pérdida de peso / Composición' },
    ],
    barrios: [
      { name: 'Del Valle Norte',   slug: 'del-valle-norte',   district: 'benito-juarez' },
      { name: 'Del Valle Sur',     slug: 'del-valle-sur',     district: 'benito-juarez' },
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
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
    h1: 'Eventos fitness en Nápoles',
    metaDesc: 'Eventos fitness en Nápoles, CDMX: talleres, clases abiertas y outdoor de $0 a $500 MXN. Insurgentes Sur y Parque Hundido. Guía 2026.',
    intro: `Nápoles tiene un calendario de eventos fitness más activo que los barrios al sur de la delegación, impulsado principalmente por Smart Fit y los estudios boutique sobre Cozumel y Filadelfia. La cadena organiza eventos periódicos abiertos a socios y no socios — clases de prueba, retos de asistencia mensual, lanzamientos de modalidad — con el presupuesto de marketing que una operación de ese volumen puede sostener. Los estudios independientes hacen lo suyo con formato más artesanal y grupos de 20-40 personas.

El Parque Hundido es el outdoor natural de Nápoles: a 10-15 minutos caminando desde el corazón del barrio, con circuito de running, área de calistenia y grupos espontáneos de ejercicio los fines de semana. Smart Fit a veces organiza entrenamientos al aire libre en el parque para socios — vale seguir su perfil de Instagram para no perder las fechas.

Los estudios de yoga y pilates sobre Cozumel hacen talleres técnicos bimestrales de $200-$500 MXN — intensivos de 90 minutos a 3 horas con profundización en algún aspecto específico de la práctica. Los socios con membresía activa tienen acceso con 20-40% de descuento. Para quien vive en Nápoles y quiere más variedad de eventos, Del Valle Norte tiene un calendario más denso a 10 minutos en transporte — lo mejor de ambos barrios es perfectamente combinable, güey.`,
    faq: [
      {
        q: '¿Smart Fit en Nápoles organiza eventos o clases abiertas?',
        a: 'Sí, Smart Fit Citiinsurgentes organiza eventos periódicos: clases abiertas de prueba para nuevos usuarios, retos de asistencia mensual para socios con premiación interna, y lanzamientos de nueva modalidad de clase con sesión de bienvenida gratuita. Los eventos se anuncian por la app de Smart Fit y en su perfil de Instagram — la manera más efectiva de enterarse es seguir el perfil de la sucursal específica de Insurgentes Sur, no el perfil nacional. Los socios activos reciben notificación directa por la app con 5-7 días de anticipación en la mayoría de los casos.',
      },
      {
        q: '¿Hay grupos de running en Nápoles?',
        a: 'Hay grupos informales de running que salen desde el Parque Hundido los sábados y domingos por la mañana — accesible desde Nápoles en 10-15 minutos caminando hacia el sur por Insurgentes. Smart Fit organiza ocasionalmente salidas al parque para socios interesados en running outdoor. Algunos estudios de la zona tienen grupos de running propios que coordinan por WhatsApp. El Metrobús Insurgentes conecta directamente con el parque en 3-4 paradas si quieres llegar sin la caminata. El circuito del parque mide 1.2km con buena iluminación hasta las 8pm.',
      },
      {
        q: '¿Cuánto cuestan los talleres en estudios boutique de Nápoles?',
        a: 'Los talleres técnicos en estudios de pilates y yoga de Nápoles van de $200 a $500 MXN para no socios; socios con membresía activa pagan $120-$300 MXN con descuento aplicado. El formato habitual es intensivo de 90 minutos a 3 horas un sábado o domingo por la mañana, con grupos de 15-25 personas. Los temas más frecuentes son técnica de Reformer, pranayama y meditación, movilidad para trabajo de oficina, y nutrición aplicada al entrenamiento. Los talleres de nutrición son los que se llenan más rápido — reserva con al menos una semana de anticipación cuando veas el anuncio.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos cadena',   value: 'Smart Fit (periódicos)' },
      { label: 'Talleres boutique', value: '$200–$500 MXN' },
      { label: 'Outdoor cercano',  value: 'Parque Hundido' },
      { label: 'Running grupos',   value: 'Informales + ocasional Smart Fit' },
    ],
    barrios: [
      { name: 'Del Valle Norte',   slug: 'del-valle-norte',   district: 'benito-juarez' },
      { name: 'Del Valle Sur',     slug: 'del-valle-sur',     district: 'benito-juarez' },
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
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
    h1: 'Bienestar en Nápoles',
    metaDesc: 'Bienestar en Nápoles, CDMX: nutriólogos, masaje deportivo y wellness de $350 a $900 MXN. Cozumel y Filadelfia. NSE C+ accesible. Guía 2026.',
    intro: `El ecosistema de bienestar en Nápoles es más completo que el de los barrios al sur de la delegación: consultorios de nutrición deportiva sobre Cozumel y Filadelfia, centros de masaje de recuperación muscular con disponibilidad real, y algunos servicios de wellness complementario que crecieron junto con la demanda de Smart Fit y los estudios boutique de la zona. El acceso por Metrobús e Insurgentes hace que el barrio tenga también demanda de servicios de bienestar de socios que vienen de fuera.

Los nutriólogos de Nápoles trabajan con el perfil del barrio: profesionales que entrenan con regularidad, buscan resultado de composición corporal concreto, y tienen agenda apretada entre semana. La consulta inicial va de $500 a $900 MXN con evaluación de composición corporal incluida; seguimientos de $300 a $550 MXN. Hay nutriólogos con horario de mediodía y fin de tarde para adaptarse a quien trabaja en la zona de Insurgentes.

Los masajes de recuperación son el servicio de mayor demanda ahorita: $400-$850 MXN por sesión de 60 minutos de deep tissue o liberación miofascial. Los centros sobre Cozumel tienen disponibilidad de lunes a sábado con posibilidad de reserva por WhatsApp. Para crioterapia o compresión neumática hay que ir a Narvarte Poniente o Del Valle Norte — servicios que Nápoles aún no tiene en la zona. Para recuperación semanal sostenida, lo que hay en el barrio cubre perfectamente bien, güey.`,
    faq: [
      {
        q: '¿Hay nutriólogos que trabajen con socios de gym en Nápoles?',
        a: 'Sí, güey. Hay consultorios de nutrición sobre Cozumel y Filadelfia especializados en personas que entrenan con frecuencia — el perfil más común del barrio dado el volumen de Smart Fit y estudios boutique en la zona. La primera consulta incluye medición de composición corporal, análisis de hábitos alimenticios y plan de acción con objetivos de 4-8 semanas. El precio va de $500 a $900 MXN para consulta inicial; seguimientos de $300 a $550 MXN. Algunos nutriólogos de Nápoles tienen convenio informal con entrenadores personales del barrio — vale preguntarle a tu PT si recomienda a alguien con quien ya trabaja en coordinación.',
      },
      {
        q: '¿Qué servicios de recuperación muscular hay en Nápoles?',
        a: 'Los servicios principales son masaje deportivo y deep tissue en centros de recuperación sobre Cozumel y Filadelfia a $400-$850 MXN por sesión de 60 minutos. Hay también masajistas independientes en el barrio con precios desde $300 MXN por sesión de 45 minutos. Para servicios más avanzados — crioterapia de cuerpo completo, baño de contraste, compresión neumática — hay que ir a Narvarte Poniente o Del Valle Norte. Para recuperación post-entrenamiento regular en el rango de precio NSE C, los centros de Nápoles tienen buena disponibilidad y no requieren reserva con semanas de anticipación.',
      },
      {
        q: '¿Hay servicios de bienestar mental o meditación en Nápoles?',
        a: 'Los estudios de yoga de la zona incluyen componentes de meditación y manejo de estrés en sus clases regulares — no como servicio separado sino integrado en la práctica. Hay un par de centros sobre Cozumel que ofrecen sesiones específicas de meditación guiada o terapia de sonido a $150-$350 MXN por sesión. Para psicoterapia o coaching de bienestar mental con enfoque más clínico, hay consultorios sobre Insurgentes Sur, aunque el precio sube a $700-$1,500 MXN por sesión en ese nivel de atención. Para bienestar mental integrado con actividad física, los estudios de yoga de Nápoles ofrecen lo más práctico y accesible del barrio.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$500–$900 MXN' },
      { label: 'Masaje deportivo 60m', value: '$400–$850 MXN' },
      { label: 'Meditación / sonido',  value: '$150–$350 MXN' },
      { label: 'Acceso',              value: 'Metro Insurgentes Sur' },
    ],
    barrios: [
      { name: 'Del Valle Norte',   slug: 'del-valle-norte',   district: 'benito-juarez' },
      { name: 'Del Valle Sur',     slug: 'del-valle-sur',     district: 'benito-juarez' },
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
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
