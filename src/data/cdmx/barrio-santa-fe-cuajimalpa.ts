// src/data/cdmx/barrio-santa-fe-cuajimalpa.ts
// Draft – lastReviewed: 2026-06-02

export const barrioContent = {
  nombre: 'Santa Fe (Cuajimalpa)',
  slug: 'santa-fe-cuajimalpa',
  group: 'A',
  parentDistrict: {
    nombre: 'Cuajimalpa',
    slug: 'cuajimalpa',
  },
  lastReviewed: '2026-06-02',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Santa Fe es el barrio donde el fitness cuesta lo que cuesta: $2,000–$5,000 MXN al mes es el rango real, y los que pagan son ejecutivos de Punta Santa Fe, Arcos Bosques y las torres de Vasco de Quiroga. Sport City tiene dos sedes, Sports World también, y boutiques de funcional y pilates completan la oferta. Es el único barrio del CDMX donde el gym con alberca, spa y estacionamiento amplio es el estándar, no la excepción.

El tráfico en Vasco de Quiroga en 7-9am y 18-20hs es el atasco más impredecible del poniente del CDMX. Para quien trabaja en los corporativos: entrenar a las 6am o en la hora de comida es el único esquema lógico. La mayoría de gymns de la zona abren desde las 5:30am precisamente por eso — el mercado lo exige. Desde afuera, el Metrobús Línea 7 hasta Observatorio más taxi es más predecible que el coche.

Para el vecino de Santa Fe (Cuajimalpa) que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Santa Fe (Cuajimalpa) en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Santa Fe',
    metaDesc: 'Gimnasios en Santa Fe, Cuajimalpa: ~18 opciones de $2,000 a $5,000 MXN/mes. Sport City, Sports World, funcional boutique. Guía de Rodrigo 2026.',
    intro: `Santa Fe tiene alrededor de 18 gimnasios y el promedio de precio por membresía más alto del CDMX — más caro que Polanco en el extremo superior del mercado. El corredor de Vasco de Quiroga entre las torres corporativas concentra Sport City con dos formatos (completo y express), Sports World con instalaciones de cadena premium, y varios boutiques de funcional, pilates y spinning que atienden el flujo de ejecutivos de los Centros Comerciales Santa Fe y Punta Santa Fe.

Sport City Santa Fe es probablemente el gym con más infraestructura de la ciudad: albercas olímpicas en algunas sedes, canchas de squash, spa de recuperación, sala de pesas con más de 150 estaciones y programación de clases de grupo que corre de 5:30am a 10pm. La membresía va de $1,800 a $3,500 MXN según el plan y la sede — no la más barata, pero la más completa en términos de instalaciones bajo un mismo techo.

Los boutiques de Santa Fe son el otro extremo: espacios diseñados para los 30-45 minutos de almuerzo del ejecutivo, con clases de 45 minutos de alta intensidad, vestuarios impecables y sistema de reserva en app. Una membresía boutique aquí va de $2,500 a $5,000 MXN al mes. El precio refleja el inmueble de Santa Fe — los metros cuadrados en ese sector son entre los más caros del DF — más que el entrenamiento en sí. Eso hay que tenerlo claro antes de comparar con un boutique de Roma Norte.`,
    faq: [
      {
        q: '¿Cuánto cuesta Sport City en Santa Fe y qué incluye?',
        a: 'Sport City Santa Fe tiene membresías entre $1,800 y $3,500 MXN al mes según el plan y si incluye clases de grupo ilimitadas. El plan básico da acceso a sala de pesas y cardio. Los planes premium incluyen clases, spa de recuperación y acceso a todas las sedes de la cadena en el país. La inscripción va de $500 a $1,500 MXN con promociones frecuentes. Es la membresía más cara de la cadena por la localización, pero la sede de Santa Fe tiene las mejores instalaciones del Sport City CDMX.',
      },
      {
        q: '¿Valen la pena los boutiques de Santa Fe si sus precios son más altos que Roma Norte?',
        a: 'El precio extra de Santa Fe versus Roma Norte refleja principalmente el costo del inmueble y la conveniencia para quien trabaja en el sector. Si vives o trabajas en Santa Fe y el boutique queda a 5 minutos caminando, el precio adicional tiene sentido logístico. Si vienes desde afuera solo por el gimnasio, el mismo nivel de boutique en Roma Norte o Condesa a menor precio y menos tráfico es la mejor ecuación. La excepción: si hay un especialista o una comunidad específica en ese boutique de Santa Fe que no encuentras en otro lado.',
      },
      {
        q: '¿Cuál es el mejor horario para ir al gym en Santa Fe sin el problema del tráfico?',
        a: 'Para quien trabaja en los corporativos de Santa Fe: 6-7:30am (antes del tráfico pesado) o hora de comida 13-14hs (el sector se vacía). Para quien viene de afuera: llegar después de las 9am cuando el tráfico de entrada se disuelve, o en la tarde después de las 20hs cuando la salida ya pasó. Evitar a toda costa las 7-9am y las 18-20hs en Vasco de Quiroga — esas franjas pueden triplicar el tiempo de llegada.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de la colonia tienen mensualidades sin compromiso de contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gyms independientes suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~18' },
      { label: 'Membresía mensual', value: '$2,000–$5,000 MXN' },
      { label: 'Cadenas presentes', value: 'Sport City · Sports World' },
      { label: 'Tráfico crítico',   value: '7-9am y 18-20hs en Vasco de Quiroga' },
    ],
    barrios: [
      { name: 'Bosques de las Lomas', slug: 'bosques-lomas',        district: 'miguel-hidalgo' },
      { name: 'Contadero',            slug: 'contadero',            district: 'cuajimalpa' },
      { name: 'Lomas de Vista Hermosa', slug: 'lomas-de-vista-hermosa', district: 'cuajimalpa' },
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
    h1: 'Estudios fitness en Santa Fe',
    metaDesc: 'Estudios en Santa Fe, Cuajimalpa: pilates, spinning y funcional de $300 a $600 MXN/clase. Vasco de Quiroga y CC Santa Fe. Guía 2026.',
    intro: `Santa Fe tiene los estudios boutique más orientados al ejecutivo del CDMX: formato de 45-50 minutos de clase intensa, clases de alta frecuencia a lo largo del día con horarios que cubren el almuerzo corporativo, vestuarios con amenidades completas y sistema de reserva en app que funciona. No hay excusa de logística para no entrenar si trabajas en los corporativos del sector — los estudios están diseñados para que la sesión encaje en el día de trabajo, no al revés.

El precio por clase suelta va de $300 a $600 MXN — el rango más alto del CDMX para clases individuales, superando incluso a algunos boutiques de Polanco. Los planes mensuales van de $2,500 a $5,000 MXN para acceso ilimitado. La justificación del precio es el inmueble, la producción y la conveniencia de ubicación — no necesariamente una calidad de instrucción superior al equivalente de Roma Norte.

Los estudios de pilates de Santa Fe tienen Reformers de primera línea, instructoras con certificaciones internacionales y grupos de máximo 6-8 personas. Para quien tiene el presupuesto y quiere la conveniencia de Santa Fe, el nivel es genuinamente alto. Para el atleta que puede ir a Roma Norte o Condesa sin problema de logística, esos mismos estudios cuestan 25-35% menos por el mismo nivel de instrucción.`,
    faq: [
      {
        q: '¿Cuánto cuesta una clase de funcional o HIIT en Santa Fe?',
        a: 'Los estudios de funcional y HIIT en Santa Fe cobran entre $300 y $500 MXN por clase suelta. Algunos boutiques de alta intensidad de 45 minutos están en $400-$600 MXN. Paquetes de 10 clases van de $2,500 a $4,500 MXN según el estudio. Planes ilimitados de $2,800 a $5,000 MXN al mes. Es el precio más alto del CDMX para este tipo de clases — la localización en el corazón corporativo de Santa Fe se paga.',
      },
      {
        q: '¿Los estudios de Santa Fe son mejores que los de Roma Norte o solo más caros?',
        a: 'Para la mayoría de disciplinas, son comparables en calidad y más caros en precio. Los boutiques de Roma Norte, Condesa y algunos de San Ángel tienen el mismo nivel de equipamiento, instrucción y comunidad que los de Santa Fe a precios 20-35% menores. La diferencia real de Santa Fe: la conveniencia de ubicación para quien trabaja en el sector, los horarios diseñados para la jornada ejecutiva y las instalaciones integradas con los corporativos (algunos gymns tienen convenio con las empresas del sector). Para quien no trabaja en Santa Fe, el premium no se justifica.',
      },
      {
        q: '¿Hay estudios de yoga en Santa Fe?',
        a: 'Sí, aunque con menos densidad que los de funcional y pilates. Hay estudios de yoga que atienden el sector ejecutivo con clases de 45-60 minutos orientadas al manejo del estrés, yoga de mediodía y sesiones de mindfulness corporativo. Los precios siguen la lógica del sector: $250-$450 MXN por clase suelta. Para yoga más tradicional o práctica avanzada con lineaje serio, Roma Norte o San Ángel tienen mejor oferta a menor precio.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios especializados', value: '10+' },
      { label: 'Clase suelta',            value: '$300–$600 MXN' },
      { label: 'Plan mensual',            value: '$2,500–$5,000 MXN' },
      { label: 'Horario executivo',       value: 'Mediodía 13-14hs con alta demanda' },
    ],
    barrios: [
      { name: 'Bosques de las Lomas',   slug: 'bosques-lomas',          district: 'miguel-hidalgo' },
      { name: 'Contadero',              slug: 'contadero',              district: 'cuajimalpa' },
      { name: 'Lomas de Vista Hermosa', slug: 'lomas-de-vista-hermosa', district: 'cuajimalpa' },
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
    h1: 'Entrenadores personales en Santa Fe',
    metaDesc: 'Entrenadores personales en Santa Fe, Cuajimalpa. Sesiones $900–$2,000 MXN. PTs en Sport City y corporativos. Guía de Rodrigo 2026.',
    intro: `Santa Fe tiene los entrenadores personales más caros del CDMX fuera de Polanco: el rango real va de $900 a $2,000 MXN por sesión, con algunos PTs especializados en bienestar ejecutivo cobrando el extremo superior de ese rango con naturalidad. El contexto del mercado lo explica: los clientes de PT de Santa Fe tienen poder adquisitivo alto, disponibilidad horaria limitada y expectativas de resultado tangible en el menor tiempo posible. Los PTs del sector se adaptan a ese perfil.

Los entrenadores con base en Santa Fe tienen características que se repiten: sesiones de 45-60 minutos por la lógica del almuerzo corporativo, disponibilidad en horarios atípicos (6am, mediodía, 20hs), capacidad de entrenar en cualquier espacio — sala del hotel, terraza del corporativo, Sport City —, y comunicación directa vía app entre sesiones. Es PT de servicio completo para cliente de agujero en el tiempo.

Como boxeador amateur que valora la sustancia sobre el servicio, mi evaluación honesta de los PTs de Santa Fe: los buenos son genuinamente buenos. Los que cobran $1,800 MXN por sesión y están bien ocupados en Santa Fe generalmente merecen ese precio. El problema es que el mercado de Santa Fe también genera PTs con precio de lujo sin el nivel correspondiente — el filtro de presupuesto no garantiza calidad. Sesión de evaluación inicial sin costo extra es el criterio mínimo para cualquier PT serio.`,
    faq: [
      {
        q: '¿Cuánto cuesta el PT más accesible de Santa Fe?',
        a: 'Los PTs con menos trayectoria pero buena formación trabajan desde $900 MXN en Santa Fe. Los que tienen base en Sport City o Sports World y menos especialización cobran $800-$1,200 MXN. Para acceder a PT de calidad real por menos, hay que salir del sector de Santa Fe: San Ángel tiene PTs equivalentes a $500-$800 MXN. Para quien trabaja en Santa Fe y tiene el tiempo como variable crítica, el precio local puede justificarse. Para quien puede elegir, la diferencia de $400-$800 MXN por sesión tiene impacto real en el mes.',
      },
      {
        q: '¿Hay PTs en Santa Fe que trabajen en bienestar corporativo?',
        a: 'Sí. Muchos entrenadores del sector tienen contratos con corporativos para programas de bienestar empresarial — clases grupales en instalaciones de la empresa, sesiones individuales como beneficio para ejecutivos clave, talleres de nutrición para equipos. Si trabajas en uno de los corporativos grandes de Santa Fe, pregunta en Recursos Humanos si tienen PT incluido como beneficio. Algunos lo tienen y no lo comunican activamente.',
      },
      {
        q: '¿Vale la pena el PT de Santa Fe si puedo ir a uno de Condesa o Roma Norte?',
        a: 'Só si el factor tiempo es crítico. Si vives o trabajas en Santa Fe y el PT queda a 5 minutos caminando, el precio adicional tiene sentido porque elimina el tiempo de traslado. Si puedes ir a Roma Norte o Condesa sin complicación logística, los PTs de esas colonias ofrecen calidad comparable a precios 30-50% menores. La ubicación en Santa Fe es una ventaja solo si usas la ventaja — si de todas formas cruzás la ciudad, el premium no tiene justificación.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Entrenadores activos', value: '30+' },
      { label: 'Sesión individual',    value: '$900–$2,000 MXN' },
      { label: 'Bienestar corporativo', value: 'Programas empresa disponibles' },
      { label: 'vs. Roma Norte',       value: '~40% más caro' },
    ],
    barrios: [
      { name: 'Bosques de las Lomas',   slug: 'bosques-lomas',          district: 'miguel-hidalgo' },
      { name: 'Contadero',              slug: 'contadero',              district: 'cuajimalpa' },
      { name: 'Lomas de Vista Hermosa', slug: 'lomas-de-vista-hermosa', district: 'cuajimalpa' },
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
    h1: 'Eventos fitness en Santa Fe — Corporativo wellness y running 2026',
    metaDesc: 'Eventos fitness en Santa Fe, Cuajimalpa 2026: wellness corporativo, carreras del poniente y activaciones boutique. Guía de Rodrigo.',
    intro: `Santa Fe tiene el calendario de eventos fitness más orientado al sector corporativo del CDMX: wellness days de empresa, carreras 5K entre equipos de trabajo, masterclasses de marcas deportivas en los Centros Comerciales y activaciones de Sport City y Sports World para sus comunidades de socios. Son eventos de producción impecable con logística resuelta — la cadencia de Santa Fe.

Para running organizado, el sector conecta con el circuito del poniente que incluye el Bosque de Chapultepec hacia el oriente y el Bosque de Cuajimalpa hacia el poniente. Algunos grupos de running de Santa Fe hacen rutas largas los sábados que conectan ambos bosques — 15-20 km de ruta mixta asfalto-sendero. Para trail running serio, el Bosque de Cuajimalpa a 10 minutos al poniente tiene el terreno y la comunidad.

Los eventos de boutique de Santa Fe son frecuentes pero cerrados: masterclasses de marcas, retos entre comunidades de gymns y eventos de lanzamiento de products de ropa técnica que usan el espacio del sector financiero como escenario. Para acceder, la membresía en el estudio o seguir las cuentas de las marcas en Instagram es el mecanismo estándar. No son eventos abiertos en el sentido de Roma Norte — Santa Fe no tiene esa tradición de apertura de barrio.`,
    faq: [
      {
        q: '¿Los eventos wellness corporativos de Santa Fe son solo para empleados?',
        a: 'La mayoría sí — son beneficios empresariales cerrados para empleados de corporativos específicos. Sin embargo, algunos eventos más grandes como carreras 5K o ferias de bienestar abren cupos para externos o familiares. Las activaciones de marcas deportivas en los centros comerciales del sector (CC Santa Fe, Punta Santa Fe) son abiertas al público sin inscripción. Para eventos internos de empresa, la única forma de acceder es ser empleado o conocer a alguien que lo sea.',
      },
      {
        q: '¿Hay grupos de running que salgan de Santa Fe hacia el Bosque de Cuajimalpa?',
        a: 'Sí. Grupos de running con base en Santa Fe organizan salidas al Bosque de Cuajimalpa los sábados y domingos por la mañana — típicamente 7am desde la zona de la Fuente de Petróleos o directamente desde el bosque. Para rutas largas de trail, la conexión con la comunidad de mountain running del poniente es el acceso. Busca grupos de running poniente o trail CDMX en Facebook e Instagram — la escena es activa y los grupos suelen incluir miembros de Santa Fe.',
      },
      {
        q: '¿Cuándo son las activaciones de Nike, Lululemon o Adidas en Santa Fe?',
        a: 'Las marcas con presencia en los centros comerciales de Santa Fe organizan activaciones 2-4 veces al año por temporada: back-to-school, verano, temporada de carreras. Las cuentas de Instagram de cada tienda publican los eventos con 1-2 semanas de anticipación. Lululemon es la más activa en eventos de comunidad fitness del sector — clases de yoga gratuitas, masterclasses de running y pop-ups de meditación son formatos recurrentes.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos corporativos/año', value: '15+' },
      { label: 'Running grupos',           value: 'Sáb 7am → Bosque Cuajimalpa' },
      { label: 'Marcas activas',           value: 'Nike · Lululemon · Adidas' },
      { label: 'Trail acceso',             value: 'Bosque de Cuajimalpa (10 min)' },
    ],
    barrios: [
      { name: 'Bosques de las Lomas',   slug: 'bosques-lomas',          district: 'miguel-hidalgo' },
      { name: 'Contadero',              slug: 'contadero',              district: 'cuajimalpa' },
      { name: 'Lomas de Vista Hermosa', slug: 'lomas-de-vista-hermosa', district: 'cuajimalpa' },
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
    h1: 'Bienestar y recuperación en Santa Fe — Clínica, fisio y nutrición 2026',
    metaDesc: 'Bienestar en Santa Fe, Cuajimalpa: medicina deportiva, fisioterapia y nutrición $800–$2,000 MXN. Vasco de Quiroga. Guía de Rodrigo 2026.',
    intro: `Santa Fe tiene la infraestructura de bienestar más orientada al ejecutivo de toda la CDMX: clínicas integradas con médico del deporte, fisioterapeuta, nutricionista y psicólogo en el mismo espacio, con horarios que cubren la jornada corporativa. El precio refleja esa estructura: fisioterapia deportiva de $900 a $1,600 MXN, nutrición de $1,000 a $1,800 MXN por consulta inicial, masaje terapéutico de $800 a $1,400 MXN.

El Hospital Ángeles Santa Fe — uno de los mejores hospitales privados del CDMX en el sector — está en la zona y tiene un departamento de medicina del deporte con diagnóstico por imagen integrado. Para lesiones complejas o post-quirúrgico que requieren seguimiento médico-fisioterapéutico integrado, ese recurso a 10 minutos del gym tiene un valor logístico real.

Para bienestar ejecutivo — manejo del estrés, nutrición de rendimiento para viajes frecuentes, programas de bienestar corporativo — Santa Fe tiene consultores especializados en ese perfil que pocas colonias del CDMX pueden igualar. Son profesionales que entienden las particularidades del ejecutivo con poco tiempo, mucho estrés y objetivos de salud que compiten con una agenda imposible. Para el resto de las personas, los mismos servicios están disponibles en Roma Norte o Condesa a precios 30-50% menores.

La proximidad es el factor decisivo: cuando el centro de bienestar queda a pocas cuadras, la constancia llega sola.`,
    faq: [
      {
        q: '¿Cuánto cuesta fisioterapia deportiva en Santa Fe?',
        a: 'El rango va de $800 a $1,600 MXN por sesión. Las clínicas integradas con médico del deporte están en el rango alto. Los fisioterapeutas independientes con base en el sector trabajan desde $700 MXN. El Hospital Ángeles Santa Fe tiene servicio de fisioterapia deportiva con escala de precios de clínica hospitalaria — en el rango $900-$1,800 MXN por sesión dependiendo del servicio. Para fisioterapia de alto nivel con diagnóstico integrado, Santa Fe tiene la infraestructura; para mantenimiento general, el precio no se justifica versus San Ángel o Roma Norte.',
      },
      {
        q: '¿Hay nutricionistas especializados en bienestar ejecutivo en Santa Fe?',
        a: 'Sí. Hay nutricionistas en el sector especializados en las particularidades del cliente ejecutivo: nutrición para viajes frecuentes, manejo de comidas de negocios, estrategias de alimentación con agenda impredecible y objetivos de composición corporal con tiempo limitado para entrenamiento. La consulta inicial va de $1,000 a $1,800 MXN. Para nutrición de rendimiento deportivo estándar sin el contexto ejecutivo, los nutricionistas de San Ángel o Roma Norte tienen el mismo nivel a menor precio.',
      },
      {
        q: '¿Vale la pena el bienestar de Santa Fe si no trabajo en el sector?',
        a: 'Para la mayoría de personas, no — el precio es significativamente superior a servicios equivalentes en otras colonias sin diferencia de calidad que lo justifique. La excepción es el Hospital Ángeles Santa Fe para diagnóstico de lesiones complejas: tener medicina del deporte de alto nivel a 10 minutos del gym tiene sentido si estás en medio de una rehabilitación seria. Para mantenimiento, prevención y nutrición de rutina, Roma Norte, Condesa o San Ángel ofrecen el mismo nivel a precios mucho más accesibles.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar',   value: '12+' },
      { label: 'Fisioterapia deportiva', value: '$800–$1,600 MXN' },
      { label: 'Hospital referencia',    value: 'Ángeles Santa Fe (10 min)' },
      { label: 'vs. Roma Norte',         value: '~50% más caro' },
    ],
    barrios: [
      { name: 'Bosques de las Lomas',   slug: 'bosques-lomas',          district: 'miguel-hidalgo' },
      { name: 'Contadero',              slug: 'contadero',              district: 'cuajimalpa' },
      { name: 'Lomas de Vista Hermosa', slug: 'lomas-de-vista-hermosa', district: 'cuajimalpa' },
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
