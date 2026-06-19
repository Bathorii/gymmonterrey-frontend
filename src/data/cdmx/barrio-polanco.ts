// src/data/cdmx/barrio-polanco.ts
// Draft – lastReviewed: 2026-06-02

export const barrioContent = {
  nombre: 'Polanco',
  slug: 'polanco',
  group: 'A',
  parentDistrict: {
    nombre: 'Miguel Hidalgo',
    slug: 'miguel-hidalgo',
  },
  lastReviewed: '2026-06-02',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Polanco es donde el fitness chilango muestra su versión más cara y más completa en infraestructura. Sobre Masaryk y sus paralelas Virgilio y Edgar Allan Poe se concentra la mayor densidad de gymns premium de la Miguel Hidalgo: Gold's Gym flagship, boutiques de pilates con Reformer Gratz y boxes de CrossFit con plataformas olímpicas.

El rango es $1,500–$4,000 MXN al mes — el techo más alto de la ciudad para fitness de calidad. El Parque Lincoln complementa la oferta indoor con circuitos de running y zonas de entrenamiento al aire libre, menos masivo que el Parque México de Condesa y con un ambiente más tranquilo en fin de semana. Metro Polanco en la línea 7 queda a 8 minutos de Masaryk, pero el estacionamiento en horas pico (7-9am, 18-20hs) es problemático. Lo más inteligente: llegar antes de las 7am o después de las 20hs.

Para el vecino de Polanco que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Polanco en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Polanco — Gold\'s Gym, boutique y fitness premium 2026',
    metaDesc: 'Gimnasios en Polanco, CDMX: ~20 opciones de $1,500 a $4,000 MXN/mes. Masaryk, Gold\'s Gym flagship, Parque Lincoln. Guía de Rodrigo 2026.',
    intro: `Polanco tiene alrededor de 20 gimnasios y el promedio de precio más alto de toda la Miguel Hidalgo. La concentración principal está en el triángulo formado por Masaryk, Virgilio y Edgar Allan Poe: cuatro manzanas donde conviven el Gold's Gym más grande del DF, boutiques de funcional con equipamiento de importación, estudios de pilates con máquinas Gratz o Balanced Body y algún gym independiente de fuerza que sobrevivió al mar de premium de sus vecinos.

El Gold's Gym flagship de Polanco es el referente de lo que puede ofrecer una cadena cuando tiene el presupuesto para equiparse en serio: sala de pesas con más de 100 estaciones, área cardiovascular con 80+ máquinas, clases de grupo en salones amplios, servicio de PT incluido en membresías premium y acceso a instalaciones de la cadena en todo el país. Las membresías van de $1,500 a $2,500 MXN según el plan — no barato, pero completo para quien usa todo lo que ofrece.

Los boutiques sobre Edgar Allan Poe y sus calles perpendiculares son el otro extremo: espacios pequeños, grupos reducidos de 8-12 personas, coaches con certificaciones NSCA o equivalente y programación periodizada seria. Una membresía aquí va de $2,200 a $4,000 MXN al mes con clases incluidas. La diferencia versus el Gold's no es en equipamiento sino en atención individual — en el boutique el coach te conoce por nombre y recuerda tus PRs; en la cadena eres uno más. Cada perfil tiene su cliente ideal.`,
    faq: [
      {
        q: '¿Cuánto cuesta el Gold\'s Gym de Polanco y qué incluye?',
        a: 'El Gold\'s Gym flagship de Polanco tiene membresías entre $1,500 y $2,500 MXN al mes según el plan (solo sala, sala + clases, o premium con PT incluido). Las inscripciones van de $500 a $1,000 MXN dependiendo de la promoción del momento. Es la membresía más completa en infraestructura del barrio — sala enorme, muchas máquinas, clases variadas. El punto débil: en horas pico de 7-9am y 18-20hs la sala se llena y hay espera para máquinas populares.',
      },
      {
        q: '¿Cuál es la diferencia real entre un boutique de Polanco y uno de Roma Norte?',
        a: 'La infraestructura suele ser comparable o ligeramente superior en Polanco — inmuebles más grandes, estacionamiento propio o validado, servicios adicionales como nutricionista en el espacio. El precio es 15-25% más alto que Roma Norte para el mismo tipo de servicio boutique. La comunidad y el ambiente son distintos: Roma Norte tiene más creatives y millennials; Polanco tiene más ejecutivos y familias NSE A. Para el resultado de entrenamiento, la diferencia es marginal si el objetivo es el mismo.',
      },
      {
        q: '¿Cómo llego a Polanco sin coche y sin perder tiempo?',
        a: 'Metro Polanco en Línea 7 te deja a 8 minutos caminando de Masaryk — es la opción más práctica si vienes del norte, sur o poniente. Desde el centro, Metrobús Línea 7 también llega a la zona. En Uber o taxi, el tráfico en Masaryk en horas pico convierte un viaje de 10 minutos en 30. Para el gym específico, verifica si tiene estacionamiento validado — muchos boutiques de la zona tienen convenio con estacionamientos de 2 horas sin costo con validación.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de la colonia tienen mensualidades sin compromiso de contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gyms independientes suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~20' },
      { label: 'Membresía mensual', value: '$1,500–$4,000 MXN' },
      { label: 'Referente',         value: 'Gold\'s Gym flagship' },
      { label: 'Outdoor',           value: 'Parque Lincoln' },
    ],
    barrios: [
      { name: 'Anzures',               slug: 'anzures',               district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec',  slug: 'lomas-de-chapultepec',  district: 'miguel-hidalgo' },
      { name: 'Granada',               slug: 'granada',               district: 'miguel-hidalgo' },
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
    h1: 'Estudios fitness en Polanco — Pilates Gratz, spinning y funcional 2026',
    metaDesc: 'Estudios en Polanco, CDMX: pilates Reformer Gratz, spinning boutique y funcional de $280 a $500 MXN/clase. Masaryk y Edgar Allan Poe. Guía 2026.',
    intro: `Polanco tiene los estudios boutique más caros del CDMX y también algunos de los más completos en equipamiento. Los estudios de pilates sobre Edgar Allan Poe y Virgilio tienen máquinas Gratz — el estándar de manufactura más alto en Reformer — con instructoras que se formaron en Nueva York o Barcelona y cobran lo que corresponde a esa trayectoria. Una clase suelta va de $300 a $500 MXN; los planes mensuales ilimitados arrancan en $2,500 MXN.

El spinning boutique de Polanco es otro escalón arriba: bikes Stages con métricas individuales, instructores que hacen periodización seria de potencia y audio systems que hacen sentir la diferencia en los primeros cinco minutos. No es entretenimiento — es entrenamiento con datos. Los estudios más establecidos de la zona tienen lista de espera para sus horarios de 7am y 7pm. Para conseguir lugar en esos horarios, la reserva con 48 horas de anticipación es necesaria, no opcional.

Para funcional y CrossFit, Polanco tiene boxes con plataformas olímpicas, barras Rogue y coaching individual en cada clase. El ambiente es más corporativo que en Roma Norte o Condesa — menos hoodie, más ropa técnica de marca — pero el nivel de entrenamiento en los mejores boxes del barrio es legítimamente alto. Para quien puede pagar el precio, la infraestructura de Polanco en estudios boutique no tiene competidor directo en el CDMX.`,
    faq: [
      {
        q: '¿Vale la pena el pilates con máquinas Gratz en Polanco vs. equipamiento estándar?',
        a: 'Para practicantes avanzados con más de 2 años de Reformer, la diferencia de las máquinas Gratz se siente — el movimiento del carriage es más fluido, el manejo del spring más preciso y el feedback propioceptivo más claro. Para principiantes e intermedios, la diferencia es mínima y no justifica el sobreprecio versus un studio con Balanced Body o PEAK Pilates, que son excelentes. Mi posición: si llevas 3+ años de pilates serio y quieres llevar la técnica al siguiente nivel, los studios Gratz de Polanco tienen algo real que ofrecer.',
      },
      {
        q: '¿Cuánto cuesta un spinning boutique en Polanco?',
        a: 'Clase suelta de spinning boutique en Polanco va de $250 a $450 MXN. Los estudios con métricas individuales y coaches certificados en potencia están en el rango alto. Paquetes de 10 clases de $2,000 a $3,500 MXN según el estudio. Algunos tienen planes mensuales ilimitados de $2,800 a $4,000 MXN. Para quien hace más de 3 sesiones por semana, el ilimitado puede ser la opción más inteligente — se paga solo si usas 8-10 clases al mes.',
      },
      {
        q: '¿Los studios de Polanco tienen estacionamiento?',
        a: 'La mayoría de estudios boutique y gymns de calidad de Polanco tienen convenio con estacionamientos cercanos — validación de 1 a 2 horas sin costo con consumo. Algunos tienen estacionamiento propio en subterráneo. El Gold\'s Gym tiene estacionamiento amplio. Para los estudios sobre Masaryk, el estacionamiento de los centros comerciales cercanos suele tener convenio. Verifica al momento de inscribirte — en Polanco el estacionamiento es parte del servicio que se espera.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios especializados', value: '10+' },
      { label: 'Clase suelta',            value: '$280–$500 MXN' },
      { label: 'Plan mensual',            value: '$2,000–$4,000 MXN' },
      { label: 'Equipamiento',            value: 'Gratz · Rogue · Stages' },
    ],
    barrios: [
      { name: 'Anzures',              slug: 'anzures',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
      { name: 'Granada',              slug: 'granada',              district: 'miguel-hidalgo' },
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
    h1: 'Entrenadores personales en Polanco',
    metaDesc: 'Entrenadores personales en Polanco, CDMX. Sesiones $800–$1,800 MXN. PTs con certificaciones internacionales en Masaryk y Parque Lincoln. Guía 2026.',
    intro: `Polanco tiene los entrenadores personales más caros del CDMX y, en los mejores casos, los más completos en formación. El rango es de $800 a $1,800 MXN por sesión individual — el extremo alto del mercado chilango de fitness personal. Los PTs top del barrio tienen certificaciones NSCA-CSCS, experiencia con atletas de competencia y en algunos casos trayectoria como atletas ellos mismos. El cuate con 10 años preparando deportistas de alto rendimiento y tres certificaciones internacionales cobra $1,500 MXN por sesión en Polanco y tiene su agenda llena.

La diferencia versus Roma Norte o Condesa no es solo precio — es también perfil de clientela. Los PTs de Polanco atienden ejecutivos con objetivos específicos de composición, atletas amateurs serios que compiten regularmente y algunos deportistas profesionales que prefieren trabajar con discreción. El contexto moldea al entrenador: los PTs de Polanco saben manejar clientes exigentes con agendas difíciles y expectativas de resultado medible.

Para el atleta con presupuesto limitado que quiere acceder a los mejores PTs de Polanco, hay una opción: el Parque Lincoln para sesiones outdoor tiene entrenadores que ofrecen sus servicios a precios ligeramente más accesibles ($700-$1,000 MXN) por no tener costo de sala. No todos los mejores PTs del barrio están disponibles así, pero algunos sí trabajan ese esquema con clientes específicos.`,
    faq: [
      {
        q: '¿Cuánto cobra el PT más caro de Polanco y qué justifica ese precio?',
        a: 'Los PTs de mayor trayectoria en Polanco cobran entre $1,400 y $1,800 MXN por sesión. Lo que justifica ese precio: certificaciones NSCA-CSCS o equivalente, años de experiencia con atletismo de alto rendimiento, metodología de periodización documentada y seguimiento continuo entre sesiones vía app o WhatsApp. Si el PT no puede explicar su sistema de periodización en términos concretos en la primera reunión, no importa lo que cobre — eso no está justificado.',
      },
      {
        q: '¿Hay PTs en Polanco que trabajen en el Parque Lincoln?',
        a: 'Sí, aunque son menos que en el Parque México de la Condesa. Hay entrenadores que usan el Parque Lincoln como espacio outdoor para clientes con trabajo funcional, running técnico o HIIT al aire libre. El parque tiene canchas, zonas de pasto y circuitos de caminata. Para encontrar PTs que trabajen ahí, pregunta directamente en los gymns de la zona — los entrenadores con base en el barrio suelen conocer la opción del parque para ciertas sesiones.',
      },
      {
        q: '¿Vale la diferencia de precio entre un PT de Polanco y uno de la Condesa?',
        a: 'Para la mayoría de objetivos de fitness general, no — la calidad de los mejores PTs de Condesa y Roma Norte es comparable a la de Polanco, con precios 20-35% menores. La excepción válida: si tienes un objetivo muy específico (preparación para competencia de halterofilia, recuperación post-cirugía de rodilla, atletismo de alto rendimiento) y hay un especialista puntual en Polanco que domina ese campo mejor que cualquiera en otra colonia, el precio deja de ser la variable relevante.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Entrenadores activos', value: '25+' },
      { label: 'Sesión individual',    value: '$800–$1,800 MXN' },
      { label: 'Outdoor',             value: 'Parque Lincoln' },
      { label: 'Perfil',              value: 'Certificaciones internacionales' },
    ],
    barrios: [
      { name: 'Anzures',              slug: 'anzures',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
      { name: 'Granada',              slug: 'granada',              district: 'miguel-hidalgo' },
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
    h1: 'Eventos fitness en Polanco — Premium activations y Parque Lincoln 2026',
    metaDesc: 'Eventos fitness en Polanco, CDMX 2026: activaciones boutique, carreras en Parque Lincoln y events corporativos premium. Guía de Rodrigo.',
    intro: `Polanco tiene el calendario de eventos fitness más producido del CDMX: activaciones con marcas deportivas internacionales, lanzamientos de colecciones de ropa técnica, masterclasses con atletas de talla internacional y eventos de bienestar corporativo que los estudios organizan para sus comunidades de ejecutivos. La producción es impecable, la logística siempre está resuelta y la lista de asistentes suele incluir caras conocidas del mundo del deporte y los negocios.

El Parque Lincoln es el escenario outdoor del barrio: un parque de diseño con zona de lago, jardines formales y circuito de caminata que sirve como punto de encuentro para running clubs y eventos al aire libre. No tiene la extensión del Parque México de Condesa, pero tiene más carácter arquitectónico y menos masividad en fin de semana — el ambiente es más tranquilo y el entrenamiento outdoor más cómodo en horas pico.

Para eventos competitivos, los studios de Polanco participan en retos entre comunidades y circuitos de competencia amateur que conectan con Lomas, Anzures y Santa Fe. El nivel de los participantes tiende a ser alto en estos eventos — el barrio tiene atletas amateurs con años de entrenamiento serio. Para competencias de levantamiento o CrossFit, el ambiente de Polanco exige que llegues preparado o que estés dispuesto a ser el último del día sin complejos.`,
    faq: [
      {
        q: '¿Cómo me entero de los eventos boutique en Polanco?',
        a: 'Instagram es el canal principal — los estudios de Polanco tienen comunidades activas y publican eventos con 1-2 semanas de anticipación. Algunos tienen newsletters semanales que vale suscribirse. También las cuentas de marcas deportivas de retail de Masaryk (Nike, Lululemon, Adidas) organizan activaciones y masterclasses periódicas abiertas al público. Para eventos más exclusivos, la membresía en el gym o studio es la puerta de entrada.',
      },
      {
        q: '¿Hay running clubs en el Parque Lincoln?',
        a: 'Sí, aunque menos consolidados que los del Parque México en Condesa. Los sábados hay grupos de running que salen del Parque Lincoln a las 7:30am con distancias de 5 a 10 km, algunos extendiéndose hacia Bosque de Chapultepec. También hay grupos de lunes y miércoles a las 7am menos numerosos pero más consistentes. Para encontrarlos, busca grupos de running Polanco en Facebook o pregunta en los gymns de Masaryk.',
      },
      {
        q: '¿Los eventos de marcas en Masaryk son abiertos al público?',
        a: 'La mayoría sí. Las activaciones de Nike, Adidas, Lululemon y otras marcas deportivas con presencia en Masaryk generalmente son abiertas al público o requieren solo registro online gratuito. Los masterclasses con atletas patrocinados suelen tener cupos limitados de 30-50 personas que se llenan rápido. Seguir las cuentas de Instagram de los flagship stores de Masaryk es la forma más eficiente de enterarse antes de que se llenen los cupos.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos marca/mes',     value: '4–8' },
      { label: 'Parque de running',     value: 'Parque Lincoln' },
      { label: 'Competencias anuales',  value: '5+' },
      { label: 'Marcas con presencia',  value: 'Nike · Lululemon · Adidas' },
    ],
    barrios: [
      { name: 'Anzures',              slug: 'anzures',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
      { name: 'Granada',              slug: 'granada',              district: 'miguel-hidalgo' },
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
    h1: 'Bienestar y recuperación en Polanco',
    metaDesc: 'Bienestar en Polanco, CDMX: medicina deportiva, fisioterapia y nutrición $700–$1,800 MXN. Masaryk y Edgar Allan Poe. Guía de Rodrigo 2026.',
    intro: `Polanco tiene la infraestructura de bienestar más especializada del CDMX: médicos del deporte certificados, fisioterapeutas con posgrado en biomecánica, nutricionistas con especialización en periodización nutricional para rendimiento y centros de recuperación con tecnología actualizada — crioterapia localizada, presoterapia de cámara y electroestimulación de última generación. El precio es consecuente: una sesión de fisioterapia deportiva va de $800 a $1,600 MXN; la consulta médica deportiva de $1,000 a $2,000 MXN.

La diferencia de Polanco en bienestar no es solo de precio — es de protocolo. Los mejores profesionales del barrio tienen un sistema de trabajo: evaluación inicial completa, diagnóstico basado en evidencia, plan de intervención documentado y seguimiento con métricas. No son profesionales que tratan síntomas; son profesionales que trabajan con sistemas. Para un atleta con lesión recurrente o plateau de rendimiento que no entiende por qué, ese nivel de protocolo puede ser el factor diferenciador.

La medicina del deporte tiene en Polanco una presencia que pocas colonias del CDMX pueden igualar. Hay médicos especialistas en deporte con formación en fisiología del ejercicio, experiencia con atletas de alto rendimiento y acceso a diagnóstico por imagen integrado en la misma clínica. Para diagnósticos que otros profesionales no han podido resolver, la inversión en una consulta aquí puede valer más que seis meses de fisioterapia sin diagnóstico correcto.`,
    faq: [
      {
        q: '¿Cuánto cuesta una consulta de medicina del deporte en Polanco?',
        a: 'Los médicos del deporte en Polanco cobran entre $1,000 y $2,000 MXN por consulta inicial, dependiendo de la especialización y la inclusión de diagnóstico por imagen. Consultas de seguimiento van de $700 a $1,200 MXN. Algunas clínicas integran consulta médica, fisioterapia y nutrición en paquetes mensuales de $3,000-$5,000 MXN. Para diagnóstico específico de lesión con ecografía musculoesquelética, el costo adicional va de $500 a $1,000 MXN.',
      },
      {
        q: '¿Hay recuperación con tecnología avanzada en Polanco?',
        a: 'Sí. Hay centros en Polanco con crioterapia localizada, presoterapia de cámara completa, diatermia, TECAR y electroestimulación de alta frecuencia. Estos son complementos para recuperación post-competencia o aceleración de recuperación de lesión — no sustitutos de fisioterapia y nutrición correcta. Una sesión de presoterapia va de $500 a $800 MXN; crioterapia localizada de $400 a $700 MXN. Para atletas que compiten frecuentemente, tener acceso a estas tecnologías puede acelerar la recuperación entre eventos.',
      },
      {
        q: '¿Es necesario ir a Polanco para bienestar deportivo o Roma Norte y Condesa tienen el mismo nivel?',
        a: 'Para la mayoría de atletas amateurs con necesidades estándar de prevención y recuperación, Roma Norte y Condesa tienen profesionales de bienestar de excelente nivel a precios más accesibles. Polanco añade valor específico en: medicina del deporte con diagnóstico por imagen integrado, fisioterapeutas con especialización en biomecánica avanzada y tecnologías de recuperación de alta gama. Si tu necesidad es mantenimiento y prevención general, la diferencia de precio de Polanco no se justifica. Si tienes un problema específico y complejo, puede valer el viaje.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar',  value: '15+' },
      { label: 'Fisioterapia deportiva', value: '$700–$1,600 MXN' },
      { label: 'Medicina del deporte',  value: '$1,000–$2,000 MXN consulta' },
      { label: 'Tecnología',           value: 'Crioterapia · Presoterapia' },
    ],
    barrios: [
      { name: 'Anzures',              slug: 'anzures',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
      { name: 'Granada',              slug: 'granada',              district: 'miguel-hidalgo' },
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
