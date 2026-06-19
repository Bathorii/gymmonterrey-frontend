// src/data/cdmx/barrio-granada.ts
// Draft – lastReviewed: 2026-06-29

export const barrioContent = {
  nombre: 'Granada',
  slug: 'granada',
  group: 'C',
  parentDistrict: {
    nombre: 'Miguel Hidalgo',
    slug: 'miguel-hidalgo',
  },
  lastReviewed: '2026-06-29',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Granada es el barrio que está dejando de ser el que era, güey, y eso lo hace interesante ahora mismo. Sobre Ejército Nacional y Mariano Escobedo — las dos arterias que conectan Polanco con el resto de la Miguel Hidalgo — hay una concentración creciente de oficinas, restaurantes y servicios que empujaron hacia arriba la demanda de fitness de la zona. NSE C+ en transición: todavía hay precios reales de barrio residencial junto a gimnasios que ya cobran precio Polanco por estar a tres cuadras del mercado de lujo. La dinámica de Granada es mixta: residencial en las calles internas sobre Legaria, comercial y de tránsito intenso sobre Ejército Nacional. Metro Polanco y Metro Refinería conectan el barrio con Insurgentes y el eje norte de la ciudad. Para quien trabaja en la zona de corporativos de Ejército Nacional o en las oficinas entre Mariano Escobedo y Legaria, el

Para el vecino de Granada que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Granada en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Granada',
    metaDesc: 'Gimnasios en Granada, CDMX: ~9 opciones de $700 a $2,000 MXN/mes. Ejército Nacional, Legaria, Mariano Escobedo. NSE C+ en transición. Guía 2026.',
    intro: `Granada tiene alrededor de 9 gimnasios y espacios fitness, una oferta en expansión que refleja el crecimiento comercial de la zona en los últimos tres años. Sobre Ejército Nacional hay gymns de formato mediano a grande con infraestructura moderna — sala de pesas completa, área cardiovascular actualizada, clases de grupo incluidas — con membresías que van de $700 a $1,600 MXN al mes. Sobre Legaria y las calles internas del barrio hay opciones más locales con grupos más pequeños y dinámica más parecida al gym de barrio que al hub corporativo. El rango de precios está subiendo. Hace tres años Granada tenía los precios de un barrio C estable. Hoy, los gymns sobre Ejército Nacional — que compiten directamente por la clientela que trabaja en los corporativos de la zona — manejan precios de $1,200-$2,000 MXN que se acercan a Anzures y a los gymns más accesibles de Polanco. Los espacios en calles internas todavía mantienen el rango de $700-$1,100 MXN con membresía real. El acceso por Metro Polanco y Metro Refinería es el argumento de logística más sólido de Granada: conecta con Insurgentes, Periférico norte, y el eje central sin cambios complicados. Para quien llega de Azcapotzalco, Tacuba o el norte de la ciudad, Granada es el punto de gym más accesible de la Miguel Hidalgo antes de pagar el premium de Polanco o Anzures. El momento de entrar es ahora, antes de que los precios terminen`,
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Granada comparado con Polanco?',
        a: 'Granada está en el punto medio entre el precio de barrio C y el precio Polanco. Los gymns sobre Ejército Nacional manejan membresías de $1,000-$2,000 MXN al mes; los espacios en calles internas de $700 a $1,100 MXN. Eso representa un ahorro de 20-35% frente al equivalente en Polanco ($1,500-$3,500 MXN para gym completo), manteniendo una ubicación a 10-15 minutos en metro. La inscripción inicial en Granada va de $300 a $700 MXN, frente a los $600-$1,200 MXN de los gymns sobre Masaryk. Para quien trabaja en la zona de Ejército Nacional, la diferencia anual acumulada es significativa.',
      },
      {
        q: '¿Qué tipo de gimnasios hay en Granada sobre Ejército Nacional?',
        a: 'Sobre Ejército Nacional en Granada hay principalmente gymns de formato mediano-grande orientados a quien trabaja en los corporativos de la zona: salas de pesas completas, áreas cardiovasculares de 30-50 máquinas, clases de grupo incluidas (spinning, funcional, aerobics) y en algunos casos área de funcional separada con equipamiento de calistenia. El perfil es gym serio de horario extendido (6am-10pm) con menos énfasis en la experiencia estética que en la funcionalidad. Algunos tienen estacionamiento propio o validación en estacionamiento cercano — dato relevante dado el tráfico sobre Ejército Nacional en hora pico.',
      },
      {
        q: '¿Hay opciones de funcional o CrossFit en Granada?',
        a: '¡Ahorita sí, güey! Sobre Legaria y calles internas del barrio hay dos o tres espacios de funcional y crosstraining con grupos de 10-20 personas y coaches con certificaciones reconocidas. El nivel es serio para quien quiere programación periodizada y trabajo de fuerza real sin el precio de un box en Polanco o Lomas. Una clase suelta va de $150 a $250 MXN; planes mensuales ilimitados de $1,200 a $1,800 MXN. El perfil de cliente es mixto: algunos vienen del barrio, otros llegan desde Polanco o Anzures específicamente porque este tipo de box en Granada cobra 20-30% menos que sus vecinos del norte.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Granada tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Granada suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~9' },
      { label: 'Membresía mensual', value: '$700–$2,000 MXN' },
      { label: 'Referente',         value: 'Ejército Nacional / Metro Polanco' },
      { label: 'Vs. Polanco',       value: '20-35% más accesible' },
    ],
    barrios: [
      { name: 'Polanco',              slug: 'polanco',              district: 'miguel-hidalgo' },
      { name: 'Anzures',              slug: 'anzures',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
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
    h1: 'Estudios en Granada',
    metaDesc: 'Estudios boutique en Granada, CDMX: pilates, yoga y funcional de $150 a $320 MXN/clase. Ejército Nacional y Legaria. Calidad creciente, precio aún real. Guía',
    intro: `Los estudios de Granada están en el punto de inflexión más interesante del mercado fitness de la Miguel Hidalgo: calidad que se acerca a Anzures y Polanco, precios que todavía no llegaron ahí. Sobre Ejército Nacional y Mariano Escobedo hay estudios de pilates con Reformer de calidad, yoga con instructores que vienen de formarse en estudios de referencia, y funcional boutique con programación competitiva — todo a precios que están subiendo pero aún por debajo de la referencia del norte de la delegación.

La clase suelta en estudios de Granada va de $150 a $320 MXN, con planes mensuales de $1,300 a $2,200 MXN. El rango superior ya toca el piso de los estudios más accesibles de Polanco, pero el rango inferior sigue siendo significativamente más bajo. Para quien practica 3-4 veces por semana, el plan mensual en Granada puede ser 15-25% menor que el equivalente en Anzures o Condesa por el mismo nivel de instrucción.

Lo que diferencia los estudios de Granada de los de barrios con mayor historia fitness es la novedad: muchos abrieron en los últimos dos o tres años y trajeron instructores con formaciones actualizadas, equipamiento nuevo, y metodologías que en Polanco ya llevan cinco años. El cliente que llega a los estudios de Granada ahorita entra en un momento donde la relación calidad-precio es la mejor que va a tener este barrio en varios años. El ajuste de precios está en proceso, güey.`,
    faq: [
      {
        q: '¿Los estudios de pilates en Granada tienen máquinas de calidad?',
        a: 'Los estudios establecidos de Granada trabajan con Reformers Balanced Body y equipamiento equivalente — el mismo estándar que usan los estudios referentes de Condesa y Polanco. La diferencia no está en el equipo sino en el tiempo en el mercado: los estudios de Granada son más recientes y todavía están construyendo su base de alumnos. Eso significa disponibilidad real en horarios que en Polanco están al límite de capacidad, y posibilidad de acceder a instructoras senior sin lista de espera. Para el nivel de práctica del 90% de los alumnos de pilates, la experiencia en Granada es comparable con Polanco a precio 15-25% menor.',
      },
      {
        q: '¿Cuánto cuesta un plan mensual en un estudio boutique de Granada?',
        a: 'Los planes mensuales en estudios de Granada van de $1,300 a $2,200 MXN para clases ilimitadas según modalidad. Pilates Reformer ilimitado está en el rango de $1,700-$2,200 MXN; yoga ilimitado de $1,300-$1,800 MXN; funcional boutique de $1,400-$2,000 MXN. Las clases sueltas van de $150 a $320 MXN. Algunos estudios tienen paquetes de 10 clases de $1,200 a $2,500 MXN con caducidad de 60-90 días — buena opción para quien tiene agenda variable y no puede comprometerse a horario fijo semana a semana.',
      },
      {
        q: '¿Hay spinning boutique en Granada?',
        a: '¡Ahorita sí, güey! Hay un par de espacios sobre Ejército Nacional con clases de spinning de formato boutique: bikes estáticas con métricas individuales, instructores especializados, grupos de 15-20 personas máximo. El precio va de $180 a $300 MXN por clase suelta; planes mensuales ilimitados de $1,500-$2,000 MXN. Comparado con los boutiques de spinning de Polanco ($280-$450 MXN por clase), el precio en Granada es 20-35% menor por el mismo tipo de experiencia. Para quien hace spinning 3 o más veces por semana, la diferencia mensual acumulada en Granada es real y notable.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~7' },
      { label: 'Clase suelta',      value: '$150–$320 MXN' },
      { label: 'Mensual ilimitado', value: '$1,300–$2,200 MXN' },
      { label: 'Especialidad',      value: 'Pilates / Yoga / Spinning' },
    ],
    barrios: [
      { name: 'Polanco',              slug: 'polanco',              district: 'miguel-hidalgo' },
      { name: 'Anzures',              slug: 'anzures',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
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
    h1: 'Entrenadores personales en Granada',
    metaDesc: 'Entrenadores personales en Granada, CDMX: PT certificados de $450 a $950 MXN/sesión. Ejército Nacional y Legaria. Calidad real, precio aún C+. Guía 2026.',
    intro: `El personal training en Granada vive el mismo momento de transición que el barrio: precios que están subiendo pero que todavía no llegaron al nivel de Polanco o Lomas, y entrenadores con nivel de certificación y experiencia comparable con los del norte de la delegación. Una ventana de oportunidad real para quien quiere trabajar con un PT serio sin pagar el precio de la marca del código postal.

Los entrenadores de Granada cobran $450-$950 MXN por sesión individual — por encima de Portales y Narvarte Oriente, por debajo de Anzures y Polanco. El perfil es variado: hay entrenadores que vienen de trabajar en gymns de Polanco y eligieron Granada por el costo de alquiler más bajo, coaches especializados en fuerza y halterofilia que usan los espacios de funcional de Legaria, y entrenadores independientes con 4-8 años de experiencia y base de clientes estable que prefieren la menor competencia de Granada frente a la saturación de Polanco.

Para quien trabaja en los corporativos de Ejército Nacional o Mariano Escobedo, contratar un PT en Granada es la opción más práctica: mismo código postal de trabajo, precio más bajo que cruzar a Polanco, y logística de entrenamiento directa antes o después de la jornada. El primer diagnóstico de movimiento es sin costo en la mayoría de los entrenadores independientes del barrio — empezá ahí para ver si la dinámica funciona antes de comprometerte a un paquete, güey.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Granada?',
        a: 'Una sesión individual con entrenador certificado en Granada va de $450 a $950 MXN según experiencia y especialización. Los paquetes de 10 sesiones van de $3,800 a $8,000 MXN con descuento de 10-20% frente al precio de sesión suelta. El entrenamiento a domicilio tiene cargo adicional de $80-$150 MXN por traslado según distancia. Frente al equivalente en Polanco ($700-$1,500 MXN por sesión), Granada ofrece ahorro de 20-35% para el mismo nivel de certificación. El rango seguirá subiendo en los próximos 12-18 meses conforme el barrio consolide su perfil C+.',
      },
      {
        q: '¿Hay entrenadores especializados en fuerza y halterofilia en Granada?',
        a: '¡Sí, güey! Sobre Legaria y en los spaces de funcional del barrio hay coaches especializados en fuerza — powerlifting, halterofilia, fuerza funcional — con certificaciones NSCA-CSCS o equivalente y experiencia en preparación de atletas amateurs para competencia. El nivel de programación es real: periodización por bloques, control de volumen semanal, trabajo técnico en los tres levantamientos fundamentales. Una sesión va de $550 a $950 MXN. Para quien busca entrenador de fuerza serio en la Miguel Hidalgo sin pagar el precio de los coaches de Lomas o Santa Fe, Granada tiene ahorita las mejores opciones del cuadrante.',
      },
      {
        q: '¿Cómo encuentro un buen entrenador personal en Granada sin conocer el barrio?',
        a: 'La ruta más directa es entrar a los gymns y estudios sobre Ejército Nacional y Legaria y preguntar por entrenadores independientes — muchos trabajan de manera autónoma dentro de esos espacios. Pedí siempre sesión de evaluación antes de comprar paquete: diagnóstico postural, test de movilidad y conversación sobre historial de lesiones son los mínimos de cualquier entrenador serio. Las certificaciones a verificar: NSCA-CPT, NASM-CPT o ACSM-CPT con número de renovación activo. Si tiene además especialización (CSCS, pesas olímpicas, nutrición deportiva), es un plus real. Comparar dos o tres entrenadores antes de decidir siempre vale la primera sesión.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$450–$950 MXN' },
      { label: 'Paquete 10 sesiones', value: '$3,800–$8,000 MXN' },
      { label: 'Vs. Polanco',         value: '20-35% más accesible' },
      { label: 'Especialidad',        value: 'Fuerza / Halterofilia' },
    ],
    barrios: [
      { name: 'Polanco',              slug: 'polanco',              district: 'miguel-hidalgo' },
      { name: 'Anzures',              slug: 'anzures',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
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
    h1: 'Eventos fitness en Granada',
    metaDesc: 'Eventos fitness en Granada, CDMX: talleres, running y outdoor de $0 a $600 MXN. Ejército Nacional y Parque América. Guía 2026.',
    intro: `Granada tiene el calendario de eventos fitness más dinámico de su historia reciente — y eso se explica por el crecimiento de la zona. Los estudios que abrieron en los últimos dos años necesitan construir comunidad rápido, y la manera de hacerlo es con eventos: clases abiertas, talleres técnicos, sesiones de prueba gratuitas para nuevos usuarios. El resultado es un calendario más activo que el de Anzures o Narvarte Oriente, aunque todavía menos denso que el de Condesa o Polanco.

Los talleres técnicos sobre Ejército Nacional y en los estudios de Legaria van de $200 a $600 MXN — formato de 2-3 horas un sábado por la mañana con grupos de 15-30 personas. Los socios activos de los estudios organizadores acceden con 30-50% de descuento en la mayoría de los casos. Los gymns de funcional sobre Legaria tienen retos internos trimestrales bien organizados: benchmark de fuerza, tiempo en circuito, evolución de composición corporal.

El Parque América es el outdoor natural de Granada: a 10-15 minutos caminando desde el centro del barrio, con circuito de running y área de ejercicio al aire libre. Algunos gymns y estudios del barrio organizan sesiones grupales en el parque los fines de semana — la manera de enterarse es seguir sus perfiles de Instagram o pedir que te agreguen al grupo de WhatsApp de socios. Ahorita Granada es el barrio de la Miguel Hidalgo donde el calendario de eventos crece más rápido, güey.`,
    faq: [
      {
        q: '¿Hay grupos de running en Granada?',
        a: 'Hay grupos de running organizados desde gymns y estudios de Granada que salen hacia el Parque América los sábados por la mañana entre 7 y 9am. Algunos grupos son informales de socios del gym; otros tienen coordinador y ruta fija con registro por WhatsApp. El Parque América tiene circuito de running y buen entorno para grupos de hasta 30 personas. Metro Polanco está a 10-15 minutos caminando del parque — el acceso en transporte desde otras colonias es directo. Para enterarte de qué grupos están activos, la vía más rápida es preguntar en los gymns sobre Ejército Nacional o Legaria.',
      },
      {
        q: '¿Cuánto cuestan los talleres en estudios de Granada?',
        a: 'Los talleres en estudios de Granada van de $200 a $600 MXN para el público general; socios con membresía activa pagan $120-$350 MXN con descuento aplicado. El formato habitual es intensivo de 2-3 horas un sábado por la mañana con grupos de 15-30 personas. Los temas más frecuentes son técnica de Reformer avanzado, yoga de restauración, movilidad funcional para trabajo de oficina, y nutrición deportiva básica. Los talleres de nutrición se llenan más rápido — reservá con al menos una semana de anticipación cuando veas el anuncio en Instagram del estudio.',
      },
      {
        q: '¿Hay clases abiertas o eventos gratuitos en Granada?',
        a: '¡Ahorita sí, güey! Los estudios que abrieron recientemente en Granada organizan clases abiertas gratuitas o a precio simbólico ($0-$100 MXN) cuando presentan nuevo instructor, nueva modalidad de clase, o buscan atraer nuevos alumnos. Los gymns de funcional tienen sesiones de prueba gratuitas para quien viene por primera vez — normalmente una sesión de clase regular sin compromiso. Para el outdoor, el Parque América tiene actividad de ejercicio espontáneo libre de lunes a domingo desde las 6am. Seguir los perfiles de Instagram de los espacios del barrio es la manera más práctica de enterarse con tiempo suficiente para reservar.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Talleres',         value: 'Bimestrales y en crecimiento' },
      { label: 'Precio taller',    value: '$200–$600 MXN' },
      { label: 'Outdoor cercano',  value: 'Parque América' },
      { label: 'Dinámica',         value: 'Barrio en expansión de oferta' },
    ],
    barrios: [
      { name: 'Polanco',              slug: 'polanco',              district: 'miguel-hidalgo' },
      { name: 'Anzures',              slug: 'anzures',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
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
    h1: 'Bienestar en Granada',
    metaDesc: 'Bienestar en Granada, CDMX: nutriólogos, masaje deportivo y wellness de $450 a $1,100 MXN. Ejército Nacional y Legaria. Calidad C+ accesible. Guía 2026.',
    intro: `El ecosistema de bienestar de Granada refleja el momento del barrio: más completo que hace dos años, menos completo que Polanco o Condesa, con precios que todavía permiten armar una rutina de recuperación seria sin presupuesto de colonia de lujo. Sobre Ejército Nacional y Mariano Escobedo hay consultorios de nutrición deportiva con metodología actualizada, centros de masaje de recuperación con disponibilidad real, y algunos servicios de wellness emergentes que llegaron con la oleada de apertura de estudios boutique.

Los nutriólogos de Granada trabajan con un perfil de cliente que combina lo que tiene el barrio: profesionales que trabajan en los corporativos de la zona, personas que entrenan con regularidad en los gymns y estudios del barrio, y algunos clientes que vienen de Polanco o Anzures porque el precio de consulta en Granada es 15-25% menor. La primera consulta va de $550 a $1,000 MXN; el seguimiento mensual de $350 a $600 MXN.

Los masajes de recuperación son el servicio de mayor demanda ahorita: $450-$900 MXN por sesión de 60 minutos en los centros sobre Legaria y Ejército Nacional. Hay centros que ya ofrecen crioterapia localizada y compresión neumática — algo que en Portales o Narvarte Oriente todavía no llegó. Para recuperación post-entrenamiento con tecnología básica de apoyo, Granada tiene la oferta más completa de la zona sur de la Miguel Hidalgo, güey.`,
    faq: [
      {
        q: '¿Hay nutriólogos especializados en rendimiento deportivo en Granada?',
        a: 'Sí, güey. Hay consultorios de nutrición sobre Ejército Nacional y Mariano Escobedo con especialización en rendimiento deportivo y composición corporal. La metodología incluye evaluación de composición corporal con bioimpedancia o pliegues, análisis de hábitos alimenticios y plan de 4-8 semanas con seguimiento quincenal o mensual. El precio va de $550 a $1,000 MXN para primera consulta; seguimientos de $350 a $600 MXN. Algunos nutriólogos de Granada tienen convenio con estudios y gimnasios de Granada y trabajan en red con entrenadores personales para coordinar el plan completo de entrenamiento y alimentación.',
      },
      {
        q: '¿Qué servicios de recuperación muscular hay en Granada?',
        a: 'Granada tiene masaje deportivo (deep tissue y liberación miofascial) en centros sobre Legaria y Ejército Nacional a $450-$900 MXN por sesión de 60 minutos. Hay también centros que ofrecen crioterapia localizada ($400-$700 MXN) y compresión neumática ($300-$550 MXN) — servicios que en barrios al sur de la delegación todavía no están disponibles. Para crioterapia de cuerpo completo o baño de contraste con instalación completa hay que ir a Polanco o Santa Fe. Para recuperación post-entrenamiento semanal con tecnología de soporte básica, Granada tiene ahorita la oferta más completa de la Miguel Hidalgo por debajo del precio de Polanco.',
      },
      {
        q: '¿Hay spas o centros de bienestar integral en Granada?',
        a: 'Hay centros que combinan masaje, terapias complementarias y algunos servicios de relajación en Granada, aunque no spas con alberca y sauna propios al estilo de los integrados en gymns premium de Polanco. Lo que sí hay son centros de recuperación con dos o tres servicios combinables bajo el mismo techo — masaje más crioterapia localizada, por ejemplo — que permiten armar una sesión de recuperación completa en 90-120 minutos. El precio de la sesión combinada va de $700 a $1,400 MXN, significativamente por debajo del equivalente en Polanco o Santa Fe. Para bienestar funcional con tecnología básica de recuperación, Granada tiene la mejor relación precio-servicio del cuadrante poniente de la CDMX.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$550–$1,000 MXN' },
      { label: 'Masaje deportivo 60m', value: '$450–$900 MXN' },
      { label: 'Crioterapia local',    value: '$400–$700 MXN' },
      { label: 'Vs. Polanco',          value: '15-25% más accesible' },
    ],
    barrios: [
      { name: 'Polanco',              slug: 'polanco',              district: 'miguel-hidalgo' },
      { name: 'Anzures',              slug: 'anzures',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
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
