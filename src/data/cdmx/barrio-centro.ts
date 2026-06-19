// src/data/cdmx/barrio-centro.ts
// Draft – lastReviewed: 2026-06-23

export const barrioContent = {
  nombre: 'Centro (Historic)',
  slug: 'centro',
  group: 'C',
  parentDistrict: {
    nombre: 'Cuauhtémoc',
    slug: 'cuauhtemoc',
  },
  lastReviewed: '2026-06-23',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `El Centro Histórico de CDMX es patrimonio de la humanidad y gym de barrio al mismo tiempo. Sobre Av. Madero y el Zócalo pasan millones de personas al año, pero los que viven aquí son una comunidad de residentes permanentes — colonias interiores del primer cuadro — conviviendo con trabajadores del comercio. Metro Zócalo y Metro Allende (Línea 2) conectan el barrio con toda la ciudad en menos de 20 minutos. El NSE es C con mezcla de perfil comerciante y trabajador de servicios. Los gymns del Centro sirven principalmente a trabajadores del comercio y residentes del primer cuadro. Smart Fit tiene presencia fuerte aquí porque funciona exactamente para ese perfil: membresía accesible, horario amplio, sin complicaciones. A 2.240m sobre el nivel del mar, el entrenamiento aeróbico genera adaptaciones más rápidas que a nivel del mar.

Para el vecino de Centro (Historic) que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Centro (Historic) en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en el Centro Histórico',
    metaDesc: 'Gimnasios en Centro Histórico, Cuauhtémoc CDMX: $500–$1,200 MXN/mes. Smart Fit, Metro Zócalo, Allende. Guía 2026.',
    intro: `El Centro Histórico tiene entre 10 y 18 gimnasios activos en el primer cuadro y colonias adyacentes: desde gymns de barrio a $500–$800 MXN al mes hasta Smart Fit con equipamiento completo en el rango $700–$1,100 MXN. Es uno de los mercados fitness de mayor volumen de CDMX — la densidad poblacional de trabajadores del comercio y servicios que llegan todos los días genera demanda real para gym accesible sobre la ruta.

Smart Fit tiene una o dos sucursales activas en el corredor del Centro con equipamiento de última generación, más de 200 equipos por sucursal, clases grupales incluidas y aplicación de reserva. Para el trabajador del comercio de Av. Madero o de los mercados del primer cuadro, la membresía de Smart Fit a $700–$900 MXN al mes es la opción más racional en relación precio-equipamiento de la zona.

Los gymns independientes del Centro compiten en precio — $500–$750 MXN — y en ubicación: hay establecimientos a dos cuadras del Zócalo, sobre Calle 5 de Mayo y Jr. Tacuba, en locales de planta baja con techos altos de edificio histórico. El ambiente es el del México histórico — no hay iluminación LED de diseño, hay luz de cancha y equipamiento funcional que lleva años sirviendo a los vecinos del barrio.`,
    faq: [
      {
        q: '¿Cuánto cuesta el gym en el Centro Histórico de CDMX?',
        a: 'En 2026 el rango va de $500 a $1,200 MXN mensual. Gymns independientes: $500–$800 MXN. Smart Fit en el corredor del Centro: $700–$1,100 MXN con equipamiento completo y clases incluidas. La inscripción inicial va de $150 a $350 MXN. Es un rango C accesible para la densidad de trabajadores del comercio que usan el área diariamente.',
      },
      {
        q: '¿Cómo llego a los gymns del Centro Histórico?',
        a: 'Metro Zócalo y Metro Allende (Línea 2) son las estaciones más directas — a 5-10 minutos caminando de la mayoría de los gymns del primer cuadro. Metro Bellas Artes (Líneas 2 y 8) conecta con el corredor de Av. Hidalgo y Eje Central. Desde cualquier punto de CDMX, el Metro conecta con el Centro en menos de 30 minutos. El barrio es el nodo de transporte más denso de la ciudad.',
      },
      {
        q: '¿Hay Smart Fit en el Centro Histórico?',
        a: 'Sí. Smart Fit tiene presencia en el corredor del Centro Histórico con membresías de $700–$1,100 MXN al mes, más de 200 equipos por sucursal, clases de grupo incluidas y aplicación de reserva. Para el trabajador del comercio que pasa todos los días por la zona, es la opción con mejor relación precio-equipamiento del sector. Las sucursales abren desde las 5:00am.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Centro (Historic) tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Centro (Historic) suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gymns independientes', value: '$500–$800 MXN/mes' },
      { label: 'Smart Fit',            value: '$700–$1,100 MXN/mes' },
      { label: 'Establecimientos',     value: '10–18 activos' },
      { label: 'Metro',                value: 'Zócalo + Allende (Línea 2)' },
    ],
    barrios: [
      { name: 'Tabacalera',     slug: 'tabacalera',     district: 'cuauhtemoc' },
      { name: 'Tepito',         slug: 'tepito',         district: 'cuauhtemoc' },
      { name: 'Guerrero',       slug: 'guerrero',       district: 'cuauhtemoc' },
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
    h1: 'Estudios de Fitness en el Centro Histórico — CDMX 2026',
    metaDesc: 'Estudios fitness en Centro Histórico Cuauhtémoc CDMX. Clases incluidas en Smart Fit, opciones C. Metro Zócalo. Guía 2026.',
    intro: `Los estudios boutique de pilates Reformer o yoga de alta gama no tienen presencia relevante en el primer cuadro del Centro Histórico: el perfil del barrio es de trabajador del comercio y residente C, y el modelo boutique de precio alto no se sostiene en la densidad demográfica del sector. Lo que hay son las clases de grupo dentro de los gimnasios de Centro (Historic) — aeróbics, zumba, funcional básico — y las clases incluidas en la membresía de Smart Fit.

Smart Fit en el Centro tiene la mayor variedad de clases grupales del sector: cicling, pilates básico, yoga de intensidad media, body pump y funcional de alta intensidad están en el calendario semanal, todos incluidos en la membresía. Para el trabajador del Centro que quiere más que pesas y cardio, Smart Fit tiene la propuesta más completa del barrio.

Para pilates Reformer técnico, yoga terapéutico con instructores certificados de escuelas internacionales o cycling con potenciómetros, el Metro conecta con Polanco o Roma Norte en 15-20 minutos. Para el residente del Centro con presupuesto y objetivo boutique, el transporte lo pone a menos de media hora de la mejor oferta de CDMX. Para el turista o visitante frecuente del Centro, Smart Fit tiene la ventaja de la membresía sin domiciliación bancaria en algunas sucursales — útil si la estadía en el barrio es temporal.`,
    faq: [
      {
        q: '¿Qué clases de grupo hay en el Centro Histórico?',
        a: 'Los gymns independientes ofrecen aeróbics y zumba incluidas en la membresía. Smart Fit en el Centro tiene cicling, yoga, pilates básico, body pump y funcional de alta intensidad incluidos en la membresía de $700–$1,100 MXN. Los horarios son amplios — desde las 5:00am hasta las 10:00pm en días hábiles.',
      },
      {
        q: '¿Hay estudios boutique en el Centro Histórico?',
        a: 'No de manera relevante en el primer cuadro. Hay algunos espacios emergentes en las colonias adyacentes al Centro, pero la oferta boutique de calidad de CDMX está en Polanco, Roma y Condesa. El Metro Línea 2 conecta con esas zonas en 15-20 minutos desde la estación Zócalo. Para pilates Reformer o yoga especializado, esa es la opción más práctica desde el Centro.',
      },
      {
        q: '¿Las clases de Smart Fit del Centro son buenas?',
        a: 'Sí. Las clases grupales de Smart Fit tienen instructores certificados y metodologías estandarizadas que funcionan bien para el objetivo de mantenimiento físico y acondicionamiento. No son sesiones pequeñas con instructor de alto perfil — son grupos de 15-40 personas en sala amplia con música y dinámica de clase colectiva. Para el precio que tienen incluido en la membresía, son de las mejores relación calidad-precio de CDMX.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Gymns independientes', value: 'Aeróbics / Zumba incluidas' },
      { label: 'Smart Fit clases',     value: 'Cicling, yoga, body pump, funcional' },
      { label: 'Horario',              value: '5:00am–10:00pm' },
      { label: 'Boutique más cercano', value: 'Polanco / Roma (Metro 15-20 min)' },
    ],
    barrios: [
      { name: 'Tabacalera',     slug: 'tabacalera',     district: 'cuauhtemoc' },
      { name: 'Tepito',         slug: 'tepito',         district: 'cuauhtemoc' },
      { name: 'Guerrero',       slug: 'guerrero',       district: 'cuauhtemoc' },
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
    h1: 'Entrenadores Personales en el Centro Histórico — CDMX 2026',
    metaDesc: 'Entrenadores personales en Centro Histórico CDMX: $350–$750 MXN/sesión. Smart Fit y gyms independientes. Guía 2026.',
    intro: `El personal training en el Centro Histórico está en el rango $350 a $750 MXN por sesión de una hora. Los coaches trabajan dentro de los gimnasios independientes de Centro (Historic) y en Smart Fit, con agenda por WhatsApp y disponibilidad amplia en horario extendido. El perfil es C funcional: certificación básica, orientación a pérdida de peso y acondicionamiento, conocimiento del perfil del trabajador del comercio.

Los entrenadores de Smart Fit en el Centro tienen certificación corporativa y metodologías estandarizadas — un nivel de consistencia que los gimnasios independientes de Centro (Historic) no siempre tienen. La sesión de PT en Smart Fit incluye el uso de instalaciones sin cargo adicional, lo que hace que el precio efectivo por hora sea competitivo.

Los paquetes de 10 sesiones van de $3.000 a $6,500 MXN. Para el trabajador del Centro que quiere PT con seguimiento en el camino al trabajo o de regreso, los horarios extendidos de Smart Fit (5:00am–10:00pm) son la diferencia frente a estudios boutique con ventanas horarias más estrechas. Los PTs del Centro tienen la agenda más cargada de lunes a viernes de 6:00am a 8:00am y de 5:00pm a 7:00pm — los horarios del trabajador del sector. Reservar con antelación por WhatsApp garantiza el horario; sin reserva previa, la disponibilidad es menor en esos tramos de hora pico.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en el Centro Histórico?',
        a: 'En 2026 el rango va de $350 a $750 MXN por sesión de una hora. Los PTs en gymns independientes están en $350–$550 MXN. Los coaches de Smart Fit van de $500 a $750 MXN con acceso a instalaciones completas incluido. Los paquetes de 10 sesiones van de $3.000 a $6,500 MXN con descuento del 10-15%.',
      },
      {
        q: '¿Vale la pena el PT en Smart Fit del Centro?',
        a: 'Para pérdida de peso y acondicionamiento general, sí. Los entrenadores de Smart Fit tienen certificación corporativa y metodología documentada. La ventaja adicional es el acceso a más de 200 equipos, clases grupales y horarios de 5:00am–10:00pm. Para objetivos específicos de alto rendimiento o rehabilitación deportiva, los coaches especializados de Polanco o Roma tienen mayor especialización.',
      },
      {
        q: '¿Hay PTs disponibles en el Centro Histórico en horario nocturno?',
        a: 'Sí. Smart Fit en el Centro abre hasta las 10:00pm en días hábiles, y tiene coaches disponibles en los horarios de tarde-noche (6:00–9:00pm). Los gymns independientes tienen horario hasta las 9:00–10:00pm en la mayoría de los casos. Para el trabajador del comercio con turno de tarde, el horario nocturno del gym del Centro es una de las opciones más amplias de CDMX.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'PT independiente',    value: '$350–$550 MXN/sesión' },
      { label: 'PT Smart Fit',        value: '$500–$750 MXN/sesión' },
      { label: 'Paquete 10 sesiones', value: '$3.000–$6,500 MXN' },
      { label: 'Horario',             value: '5:00am–10:00pm' },
    ],
    barrios: [
      { name: 'Tabacalera',     slug: 'tabacalera',     district: 'cuauhtemoc' },
      { name: 'Tepito',         slug: 'tepito',         district: 'cuauhtemoc' },
      { name: 'Guerrero',       slug: 'guerrero',       district: 'cuauhtemoc' },
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
    h1: 'Eventos de Fitness en el Centro Histórico — CDMX 2026',
    metaDesc: 'Eventos fitness en Centro Histórico CDMX. Alameda Central, Maratón CDMX, tai chi gratuito. Guía 2026.',
    intro: `El Centro Histórico tiene los eventos de fitness comunitario más masivos y accesibles de CDMX: la Alameda Central es el escenario permanente de actividades de tai chi, yoga al aire libre, aeróbics y circuitos de fitness organizados por la Alcaldía Cuauhtémoc y la Secretaría de Salud — gratuitas, abiertas a todos, todos los días de la semana. Son eventos de bienestar con participación de decenas a cientos de personas según el día y la actividad.

El Centro Histórico aparece en el trazado de los grandes eventos de running de CDMX: la Maratón CDMX, la Carrera Nocturna de CDMX y la Carrera del Centro Histórico tienen trazados que recorren el Zócalo, Av. Madero, el Eje Central y el corredor del primer cuadro. Para el corredor que vive o trabaja en el barrio, entrenar en ese entorno es una motivación que pocos barrios de CDMX pueden igualar.

Las organizaciones de bienestar comunitario del Centro — grupos de tai chi en el Zócalo, meditación en la Alameda, yoga en el Parque Ciudadela — tienen calendarios regulares que no dependen de presupuesto de marketing. Son comunidades activas, de participación real, que llevan años en el barrio. El Zócalo y la Alameda Central — ambos en el barrio o a 10 minutos caminando — son escenarios recurrentes de los eventos deportivos y culturales de mayor escala de CDMX organizados por el Gobierno de la Ciudad. Son de acceso gratuito y convocatoria masiva.`,
    faq: [
      {
        q: '¿Hay actividades de fitness gratuitas en el Centro Histórico?',
        a: 'Sí, muchas. La Alameda Central tiene tai chi, yoga y aeróbics al aire libre organizados por la Alcaldía Cuauhtémoc todos los días — gratuitos y abiertos a todos. El Parque Ciudadela tiene grupos de meditación y yoga con regularidad. El Zócalo tiene activaciones deportivas masivas del Gobierno de CDMX en fechas especiales. Es la oferta de fitness gratuito más densa de la ciudad.',
      },
      {
        q: '¿El Centro Histórico es un buen lugar para correr?',
        a: 'Por la mañana temprana (5:30–7:30am), sí — las calles del primer cuadro tienen poco tráfico y el entorno histórico hace del running una experiencia única. La Alameda Central tiene circuito de trote. El corredor de Eje Central hacia Paseo de la Reforma es el trazado más usado por los corredores del sector. A 2.240m de altitud, el entrenamiento aeróbico genera adaptaciones más rápidas que a nivel del mar.',
      },
      {
        q: '¿La Maratón CDMX pasa por el Centro Histórico?',
        a: 'Sí. La Maratón CDMX y varias carreras del circuito de running de la ciudad tienen el Zócalo como punto de salida o llegada, recorriendo Av. Madero, Eje Central y el corredor del primer cuadro. La Carrera del Centro Histórico, organizada específicamente para el barrio, tiene lugar en el primer semestre del año con inscripción de $250–$450 MXN con playera y medalla. El entorno patrimonial hace de estas carreras una experiencia diferente a cualquier otra en CDMX.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Tai chi y yoga',     value: 'Alameda Central – gratuito diario' },
      { label: 'Maratón CDMX',       value: 'Trazado por el primer cuadro' },
      { label: 'Carrera local',       value: 'Centro Histórico 5K–42K' },
      { label: 'Altitud CDMX',       value: '2.240m — ventaja aeróbica real' },
    ],
    barrios: [
      { name: 'Tabacalera',     slug: 'tabacalera',     district: 'cuauhtemoc' },
      { name: 'Tepito',         slug: 'tepito',         district: 'cuauhtemoc' },
      { name: 'Guerrero',       slug: 'guerrero',       district: 'cuauhtemoc' },
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
    h1: 'Bienestar y Salud en el Centro Histórico — CDMX 2026',
    metaDesc: 'Bienestar en Centro Histórico CDMX: nutrición $280–$600 MXN, masaje $220–$480 MXN, tai chi gratuito en la Alameda Central. Metro Zócalo. Guía 2026.',
    intro: `El bienestar en el Centro Histórico tiene dos dimensiones que no se encuentran juntas en ningún otro barrio de CDMX: una oferta privada de salud C accesible y una infraestructura de bienestar público gratuito sin equivalente en la ciudad. Los consultorios de nutrición tienen primera consulta de $280 a $600 MXN; el masaje de relajación y tejido profundo va de $220 a $480 MXN por sesión de 60 minutos. La Alameda Central añade tai chi, yoga y aeróbics gratuitos diarios.

Los consultorios de salud del Centro tienen precios de los más accesibles de CDMX: hay médicos generales, nutriólogos, dentistas y farmacéuticos en el primer cuadro con costos C que no se encuentran en Polanco o Lomas. Para el residente o trabajador del Centro con presupuesto ajustado, el acceso a salud preventiva básica es bueno.

Los servicios de bienestar de mayor especialización — osteopatía, medicina integrativa de primer nivel, terapias alternativas de alta gama — no están concentrados en el primer cuadro. Roma Norte y Condesa tienen la mayor densidad de esos servicios en CDMX, accesibles por Metro en 15-20 minutos desde el Zócalo. El Centro tiene también acceso a los programas de salud preventiva del IMSS y el ISSSTE — las clínicas del sector ofrecen consultas de nutrición a precio social para derechohabientes, una opción real para los trabajadores del comercio del primer cuadro.`,
    faq: [
      {
        q: '¿Hay nutriólogos accesibles en el Centro Histórico?',
        a: 'Sí. Hay consultorios de nutrición sobre Calle 5 de Mayo, el corredor de Av. Madero y los mercados del primer cuadro con primera consulta de $280 a $600 MXN y seguimiento mensual de $200 a $420 MXN. Los precios son de los más bajos de CDMX para nutriólogo certificado. Para nutrición deportiva de rendimiento, Roma Norte tiene mayor especialización a 15-20 minutos por Metro.',
      },
      {
        q: '¿Qué masajes hay en el Centro Histórico?',
        a: 'Masaje de relajación clásico y tejido profundo son los más disponibles, con precio de $220 a $480 MXN por 60 minutos. Hay centros de masaje sobre las calles principales del primer cuadro — algunos en locales históricos con techos altos y ambiente de otro siglo. Para masaje deportivo especializado, Roma o Polanco tienen mayor concentración de técnicas específicas.',
      },
      {
        q: '¿Es buena la calidad del bienestar público en el Centro?',
        a: 'Sí. La Alameda Central y los parques del primer cuadro tienen la programación de bienestar comunitario más activa de CDMX, organizada por la Alcaldía Cuauhtémoc y la Secretaría de Salud. Tai chi, yoga al aire libre y aeróbics con instructor todos los días — gratuitos. Para el residente del Centro que quiere bienestar sin costo, la oferta pública cubre lo esencial con calidad real.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',  value: '$280–$600 MXN' },
      { label: 'Masaje 60min',        value: '$220–$480 MXN' },
      { label: 'Tai chi y yoga',      value: 'Alameda Central – gratuito diario' },
      { label: 'Altitud',             value: '2.240m – factor aeróbico positivo' },
    ],
    barrios: [
      { name: 'Tabacalera',     slug: 'tabacalera',     district: 'cuauhtemoc' },
      { name: 'Tepito',         slug: 'tepito',         district: 'cuauhtemoc' },
      { name: 'Guerrero',       slug: 'guerrero',       district: 'cuauhtemoc' },
    ],
    categoriaLinks: [
      { slug: 'gimnasios',    label: 'Gimnasios'    },
      { slug: 'estudios',     label: 'Estudios'     },
      { slug: 'entrenadores', label: 'Entrenadores' },
      { slug: 'eventos',      label: 'Eventos'      },
      { slug: 'bienestar',    label: 'Bienestar'    },
    ],
  },
};
