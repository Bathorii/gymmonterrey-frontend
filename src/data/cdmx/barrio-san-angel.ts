// src/data/cdmx/barrio-san-angel.ts
// Draft – lastReviewed: 2026-06-02

export const barrioContent = {
  nombre: 'San Ángel / Altavista',
  slug: 'san-angel',
  group: 'A',
  parentDistrict: {
    nombre: 'Álvaro Obregón',
    slug: 'alvaro-obregon',
  },
  lastReviewed: '2026-06-02',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `San Ángel es el barrio más tranquilo del fitness de clase media-alta en el poniente del DF. Sobre Insurgentes Sur y sus transversales hacia Altavista hay una mezcla de gymns que llevan 10-20 años en el mismo local y boutiques más recientes que llegaron cuando el barrio se revalorizó. El ambiente es menos ansioso que Roma Norte — la gente entrena porque quiere moverse, no para fotografiar el smoothie post-clase.

La Av. Insurgentes Sur es la arteria principal y el caos de tráfico que la define en horas pico es real. Entre 7-9am y 18-20hs el tiempo de llegada en coche puede duplicarse. El truco local: el Metrobús Línea 1 para en Doctor Gálvez y Altavista, y desde ahí el gym más cercano suele estar a 4-7 minutos caminando. Para el cuate que viene del norte por Insurgentes, el Metrobús es más honesto con el tiempo que el coche los días entre semana.

Para el vecino de San Ángel / Altavista que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en San Ángel / Altavista en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en San Ángel',
    metaDesc: 'Gimnasios en San Ángel, CDMX: ~18 opciones de $900 a $2,500 MXN/mes. Insurgentes Sur, Altavista. Guía de Rodrigo 2026.',
    intro: `San Ángel tiene alrededor de 18 gimnasios distribuidos entre Insurgentes Sur y las calles del barrio Altavista. El rango de precio — $900 a $2,500 MXN — lo posiciona como el barrio más accesible del poniente premium: más barato que Polanco, comparable a Condesa en el extremo bajo y Roma Norte en el extremo alto. La diferencia con sus vecinos más aspiracionales no está en el equipamiento sino en el ambiente: menos producción visual, más pragmatismo de barrio.

Los gymns sobre Insurgentes Sur son los de mayor volumen: locales amplios, equipamiento variado, accesibles en transporte y con membresías de $900 a $1,400 MXN para quien no necesita clases boutique incluidas. Los gymns del lado de Altavista son los más interesantes en perfil: studios más pequeños con especialidades como funcional, pilates y yoga que llegaron con la nueva ola de fitness de los últimos cinco años. Ahí el precio sube a $1,500-$2,500 MXN pero los grupos son reducidos y el nivel de instrucción es real.

Un dato que no está en ningún folleto: el San Ángel Inn tiene su propio área de fitness que es accesible para no-huéspedes bajo ciertas condiciones — pregunta directamente. No es el gym más moderno del barrio, pero tiene canchas de tenis y alberca, elementos que los gymns comerciales de la zona no ofrecen. Para quien combina entrenamiento en sala con natación o tenis, ese acceso puede ser el factor decisivo.`,
    faq: [
      {
        q: '¿Qué diferencia hay entre los gymns de Insurgentes Sur y los de Altavista en San Ángel?',
        a: 'Los gymns sobre Insurgentes Sur son más grandes, más accesibles en precio ($900-$1,400 MXN) y con más equipamiento cardiovascular y de pesas. Los de Altavista son más boutique: espacios menores, grupos reducidos, especialización en funcional o pilates y precios de $1,600-$2,500 MXN. Para entrenamiento de fuerza estándar o cardio, Insurgentes Sur cumple bien. Para clases en grupo con atención individual, los studios de Altavista tienen mejor propuesta.',
      },
      {
        q: '¿San Ángel es más barato que Roma Norte para el mismo tipo de gym?',
        a: 'Sí, consistentemente entre 20 y 30% más barato para el mismo perfil de establecimiento. Un boutique de funcional con clases incluidas que cobra $2,500 MXN en Roma Norte suele estar en $1,800-$2,000 MXN en San Ángel. Los gymns independientes de fuerza van de $900 a $1,300 MXN, contra $1,200-$1,600 en Roma. La diferencia se acumula: en el año, entrenar en San Ángel versus Roma Norte puede representar un ahorro de $4,000-$8,000 MXN.',
      },
      {
        q: '¿Cómo llego a San Ángel sin coche desde el centro del CDMX?',
        a: 'Metrobús Línea 1 es la opción más directa — para en Dr. Gálvez, Altavista y La Bombilla, cubriendo el corazón del barrio fitness. Desde el centro el viaje toma 20-30 minutos según el tráfico, pero el Metrobús tiene carril exclusivo y es más predecible que el coche. Metro más cercano: Miguel Ángel de Quevedo en Línea 3 (naranja), a 10 minutos caminando del lado Altavista. Para llegar en coche desde el norte: Insurgentes Sur en Metrobús y estacionarse en la primera oportunidad es más rápido que tratar de llegar directo.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de la colonia tienen mensualidades sin compromiso de contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gyms independientes suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~18' },
      { label: 'Membresía mensual', value: '$900–$2,500 MXN' },
      { label: 'Calle clave',       value: 'Insurgentes Sur · Altavista' },
      { label: 'vs. Roma Norte',    value: '~25% más económico' },
    ],
    barrios: [
      { name: 'Chimalistac',        slug: 'chimalistac',        district: 'alvaro-obregon' },
      { name: 'Tizapán San Ángel',  slug: 'tizapan-san-angel',  district: 'alvaro-obregon' },
      { name: 'Florida',            slug: 'florida',            district: 'alvaro-obregon' },
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
    h1: 'Estudios fitness en San Ángel — Pilates, yoga y funcional 2026',
    metaDesc: 'Estudios en San Ángel, CDMX: pilates, yoga y funcional de $180 a $350 MXN/clase. Altavista y Insurgentes Sur. Guía 2026.',
    intro: `San Ángel tiene la escena de estudios boutique más honesta del poniente: no aspira a competir con los precios de Roma Norte ni con la producción de Polanco, y eso resulta en estudios donde el enfoque está en el movimiento, no en el branding. Sobre Altavista y sus calles internas hay estudios de pilates, yoga y funcional con instructoras que llevan años enseñando en el barrio y conocen a sus clientes por nombre.

El precio de una clase suelta va de $180 a $350 MXN — entre 20 y 30% más accesible que el equivalente en Roma Norte o Condesa. Los paquetes mensuales van de $1,200 a $2,000 MXN, lo que hace que un plan ilimitado en San Ángel cueste menos que un paquete de 8 clases en muchos boutiques del norte de la ciudad.

El yoga en San Ángel tiene una historia más larga que Roma Norte o Condesa — los primeros estudios del poniente del DF se establecieron en esta zona hace más de 20 años. Esa trayectoria dejó instructoras con práctica profunda y tradición genuina que no encuentras en estudios con diseño de interior cuidado pero sin sustancia. Para Iyengar, Ashtanga y Kundalini, los estudios de Altavista tienen linajes verificables que Roma Norte no siempre puede igualar.`,
    faq: [
      {
        q: '¿Los estudios de San Ángel son igual de buenos que los de Roma Norte a menor precio?',
        a: 'Para la mayoría de disciplinas y niveles, sí — la diferencia de precio no refleja una diferencia de calidad equivalente. Los estudios de yoga con más historia del barrio tienen instructoras con más años de práctica real que muchos boutiques nuevos de Roma Norte. En pilates, el equipamiento puede ser ligeramente más viejo pero el nivel de instrucción es comparable. La única área donde Roma Norte claramente gana: la densidad de opciones especializadas. En San Ángel hay menos estudios y menos variedad de disciplinas.',
      },
      {
        q: '¿Hay yoga con tradición real en San Ángel?',
        a: 'Sí. El barrio tiene estudios de yoga establecidos hace más de 15 años con instructoras formadas en tradiciones específicas — Iyengar, Ashtanga, Kundalini — que siguen operando con la misma metodología original. No son los estudios más fotogénicos del CDMX, pero tienen una profundidad de práctica que es difícil de encontrar en los boutiques de apertura reciente. Para practicantes serios que buscan lineaje real, San Ángel vale la exploración antes de pagar el doble en Roma Norte.',
      },
      {
        q: '¿Cuánto cuesta el funcional en San Ángel?',
        a: 'Clase suelta de funcional o CrossFit en los estudios de Altavista va de $180 a $280 MXN. Los paquetes de 10 clases están entre $1,400 y $2,000 MXN. Para planes mensuales ilimitados, el rango es $1,400-$1,800 MXN en los estudios más establecidos. Comparado con Roma Norte o Condesa, el mismo tipo de clase en San Ángel suele costar entre $40 y $80 MXN menos por sesión — suficiente para ser una diferencia real en el presupuesto mensual.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios especializados', value: '10+' },
      { label: 'Clase suelta',            value: '$180–$350 MXN' },
      { label: 'Plan mensual',            value: '$1,200–$2,000 MXN' },
      { label: 'Tradición yoga',          value: '20+ años en el barrio' },
    ],
    barrios: [
      { name: 'Chimalistac',       slug: 'chimalistac',       district: 'alvaro-obregon' },
      { name: 'Tizapán San Ángel', slug: 'tizapan-san-angel', district: 'alvaro-obregon' },
      { name: 'Florida',           slug: 'florida',           district: 'alvaro-obregon' },
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
    h1: 'Entrenadores personales en San Ángel — PT accesible y funcional 2026',
    metaDesc: 'Entrenadores personales en San Ángel, CDMX. Sesiones $500–$1,000 MXN. PTs en Insurgentes Sur y Altavista. Guía de Rodrigo 2026.',
    intro: `San Ángel tiene entrenadores personales con la mejor relación precio-experiencia del poniente del CDMX. El rango de $500 a $1,000 MXN por sesión cubre un espectro de formación que en Roma Norte costaría $700-$1,400 MXN. Los PTs del barrio llevan, en promedio, más años entrenando en el mismo espacio que los de colonias con mayor rotación de personal — hay entrenadores en San Ángel con 8-12 años de clientes recurrentes, lo que dice más de su calidad que cualquier certificación.

El perfil de cliente del PT de San Ángel es diferente al de Roma Norte o Polanco: menos ejecutivo buscando estética, más persona que quiere moverse mejor y quedarse sana después de los 40. Eso moldeó a los entrenadores del barrio hacia el trabajo de movilidad, prevención de lesiones y fitness funcional para vida real — un enfoque que a veces es más relevante para la mayoría de las personas que la hipertrofia de magazine.

Para atletas amateurs con objetivos específicos de rendimiento, San Ángel tiene también PTs con experiencia en preparación para carreras, ciclismo y funcional competitivo. Son más difíciles de encontrar que en Condesa o Roma Norte, pero existen — y suelen tener más tiempo disponible y cobrar menos que sus equivalentes en los barrios más aspiracionales.`,
    faq: [
      {
        q: '¿Cuánto cuesta un entrenador personal en San Ángel?',
        a: 'El rango va de $500 a $1,000 MXN por sesión individual. Los PTs con más trayectoria y especialización cobran $700-$1,000 MXN. Los entrenadores más nuevos pero con buena formación trabajan desde $500-$650 MXN. Paquetes de 10 sesiones tienen descuento estándar del 10-15%. Comparado con Roma Norte ($600-$1,400) y Polanco ($800-$1,800), San Ángel ofrece la mejor ecuación precio-experiencia del poniente premium.',
      },
      {
        q: '¿Los entrenadores de San Ángel trabajan en exteriores?',
        a: 'Algunos sí, aunque el barrio tiene menos parques de la escala del Parque México o el Parque Ámsterdam. El Vivero de Coyoacán está a 10-15 minutos en coche o Metrobús y algunos PTs de la zona incluyen sesiones outdoor ahí en sus programas. El jardín del San Ángel Inn es otro espacio que algún entrenador usa con clientes de confianza del hotel. Para quien valora el outdoor en su entrenamiento, vale preguntar al PT específico si tiene esa opción.',
      },
      {
        q: '¿Es mejor contratar PT en San Ángel o ir a un boutique de Roma Norte con coach incluido?',
        a: 'Depende del objetivo. Un boutique de Roma Norte con coach incluido ($2,000-$2,800 MXN/mes) ofrece clases en grupo con instrucción — excelente para aprender movimientos nuevos y mantener la consistencia en comunidad. Un PT individual en San Ángel ($1,800-$2,400 MXN/mes por 2 sesiones semanales) ofrece programación personalizada según tus objetivos específicos. Si llevas más de 2 años entrenando con base sólida, el PT individualizado suele dar más resultado. Para principiantes, el ambiente de grupo boutique tiene ventajas de adherencia real.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Entrenadores activos', value: '25+' },
      { label: 'Sesión individual',    value: '$500–$1,000 MXN' },
      { label: 'Perfil',              value: 'Funcional · Movilidad · Running' },
      { label: 'vs. Polanco',         value: '~40% más accesible' },
    ],
    barrios: [
      { name: 'Chimalistac',       slug: 'chimalistac',       district: 'alvaro-obregon' },
      { name: 'Tizapán San Ángel', slug: 'tizapan-san-angel', district: 'alvaro-obregon' },
      { name: 'Florida',           slug: 'florida',           district: 'alvaro-obregon' },
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
    h1: 'Eventos fitness en San Ángel — Running, bazares y activaciones 2026',
    metaDesc: 'Eventos fitness en San Ángel, CDMX 2026: running por Insurgentes Sur, bazares dominicales y activaciones de studios. Guía de Rodrigo.',
    intro: `San Ángel tiene una agenda de eventos fitness integrada con la vida del barrio de una forma que Roma Norte o Polanco no tienen: el Bazar del Sábado y el mercado de Altavista generan un ambiente de movimiento y actividad outdoor que naturalmente incorpora el fitness. Los running clubs que salen de los gymns de Insurgentes Sur terminan sus rutas en el mercado — no es el running glamoroso de Roma Norte, pero es el más honesto.

Los estudios del barrio organizan eventos con menos producción que los de Roma Norte pero con más participación de la comunidad local. Clases abiertas en el patio de los estudios, workshops de movimiento en el espacio del Bazar, sesiones de yoga al atardecer en los jardines del barrio — eventos que suceden porque la comunidad los organiza, no porque una marca los patrocina. La asistencia es más pequeña que en Polanco o Roma Norte, pero el ambiente es más genuino.

Para carreras organizadas, San Ángel está integrado en el circuito de Álvaro Obregón y Coyoacán: carreras de 5K y 10K que usan Insurgentes Sur, el Parque de los Ciervos y Vivero de Coyoacán como escenarios. Son eventos bien organizados con perfil familiar y atlético mezclado — el ambiente es menos competitivo que en las carreras de Polanco o Santa Fe pero con mayor diversidad de niveles y edades.`,
    faq: [
      {
        q: '¿Hay running clubs en San Ángel por las mañanas?',
        a: 'Sí, aunque menos organizados formalmente que en Condesa o Roma Norte. Hay grupos que salen de los gymns de Insurgentes Sur los martes y jueves a las 6:30-7am con rutas de 5-8 km. Los sábados hay un grupo más grande que sale desde el cruce de Insurgentes Sur con Altavista a las 7am. Para encontrarlos, pregunta directamente en cualquier gym de la zona o busca grupos de running San Ángel en Facebook — la comunidad es pequeña pero activa.',
      },
      {
        q: '¿Los eventos del Bazar del Sábado incluyen activaciones fitness?',
        a: 'Esporádicamente sí. Algunos estudios de yoga y funcional de Altavista organizan clases demostrativas o mini-workshops en el espacio del Bazar durante los sábados de mayor asistencia. No es una programación fija — depende de la iniciativa de cada estudio. Seguir las cuentas de Instagram de los estudios de Altavista es la forma de enterarse cuando algo está planificado. También en primavera hay activaciones más frecuentes porque el clima permite más outdoor.',
      },
      {
        q: '¿Hay carreras organizadas en San Ángel?',
        a: 'El barrio forma parte del circuito de carreras de Álvaro Obregón y Coyoacán. Hay 3-4 eventos anuales que pasan por Insurgentes Sur o usan el Vivero de Coyoacán como punto de partida y llegada — algunos tan cerca del límite de San Ángel que son prácticamente el mismo evento. Las inscripciones van de $200 a $400 MXN con playera incluida. Para el calendario, la página de la Alcaldía Álvaro Obregón y grupos de running del sur de la ciudad son las fuentes más actualizadas.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Running clubs',       value: '3+' },
      { label: 'Eventos anuales',     value: '4–6 carreras' },
      { label: 'Espacio outdoor',     value: 'Vivero de Coyoacán (10 min)' },
      { label: 'Ambiente',            value: 'Barrio · Familia · Atlético mixto' },
    ],
    barrios: [
      { name: 'Chimalistac',       slug: 'chimalistac',       district: 'alvaro-obregon' },
      { name: 'Tizapán San Ángel', slug: 'tizapan-san-angel', district: 'alvaro-obregon' },
      { name: 'Florida',           slug: 'florida',           district: 'alvaro-obregon' },
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
    h1: 'Bienestar y recuperación en San Ángel — Fisio, yoga terapéutico 2026',
    metaDesc: 'Bienestar en San Ángel, CDMX: fisioterapia y nutrición $400–$900 MXN. Altavista e Insurgentes Sur. Guía de Rodrigo 2026.',
    intro: `San Ángel tiene una tradición de bienestar más larga que la mayoría de colonias del CDMX — los primeros consultorios de fisioterapia y los primeros estudios de yoga terapéutico del poniente se establecieron acá hace más de 20 años, y muchos siguen operando con la misma calidad de siempre. El rango de precio ($400-$900 MXN para fisioterapia, $350-$800 MXN para masaje) lo posiciona como la opción de mejor relación calidad-precio en el poniente premium.

Los fisioterapeutas del barrio tienen un perfil particular: especialistas en trabajo de largo plazo con pacientes recurrentes, menos orientados a tecnología de moda y más a trabajo manual de calidad. Para lesiones musculares, problemas de espalda y recuperación de cirugías, los fisioterapeutas de San Ángel con más trayectoria tienen resultados que sus precios no anticipan. La recomendación más honesta que puedo dar: pide referencias a alguien del barrio antes de elegir — la comunidad sabe quién es bueno y quién no.

La nutrición deportiva en San Ángel tiene una oferta más limitada que en Polanco o Roma Norte, pero los profesionales que existen tienen años de experiencia práctica con atletas amateurs de la zona. Para objetivos de rendimiento en running, ciclismo o funcional, hay nutricionistas en Altavista que entienden la diferencia entre nutrición estética y nutrición de rendimiento — y cobran entre 30 y 40% menos que sus equivalentes en el norte de la ciudad.`,
    faq: [
      {
        q: '¿Cuánto cuesta fisioterapia deportiva en San Ángel?',
        a: 'El rango va de $400 a $900 MXN por sesión. Los fisioterapeutas con más especialización en deporte cobran $600-$900 MXN. Los generalistas con experiencia sólida trabajan de $400 a $600 MXN. Para San Ángel, la mejor estrategia es pedir referencias dentro del barrio — los fisioterapeutas con más años llevan a sus pacientes por décadas, lo que es el mejor indicador de calidad disponible. Evita los que abren y cierran en menos de 3 años.',
      },
      {
        q: '¿Hay yoga terapéutico en San Ángel para recuperación de lesiones?',
        a: 'Sí, y es uno de los puntos diferenciadores del barrio. Hay instructoras de yoga con especialización en yoga terapéutico e Iyengar — la tradición más usada en contexto de rehabilitación — que trabajan con pacientes referidos por fisioterapeutas locales. Una sesión individual de yoga terapéutico va de $350 a $600 MXN. Para lesiones de espalda, cadera y hombro, la combinación de fisioterapia + yoga terapéutico que algunos profesionales de San Ángel ofrecen de forma integrada es difícil de encontrar en otras colonias.',
      },
      {
        q: '¿Vale la pena el bienestar de San Ángel vs. ir a una clínica en Polanco?',
        a: 'Para la gran mayoría de necesidades de atletas amateurs, sí. San Ángel ofrece calidad comparable a Polanco en fisioterapia general, masaje terapéutico y yoga terapéutico a precios 30-50% menores. La única razón para ir a Polanco en lugar de San Ángel: si tienes una lesión muy específica que requiere diagnóstico por imagen integrado en la misma clínica, o necesitas acceso a tecnología de recuperación de alta gama (crioterapia de cámara, presoterapia avanzada). Para el 90% de los casos, San Ángel tiene todo lo necesario.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar',   value: '12+' },
      { label: 'Fisioterapia deportiva', value: '$400–$900 MXN' },
      { label: 'Masaje terapéutico',     value: '$350–$800 MXN' },
      { label: 'Tradición',             value: '20+ años yoga terapéutico' },
    ],
    barrios: [
      { name: 'Chimalistac',       slug: 'chimalistac',       district: 'alvaro-obregon' },
      { name: 'Tizapán San Ángel', slug: 'tizapan-san-angel', district: 'alvaro-obregon' },
      { name: 'Florida',           slug: 'florida',           district: 'alvaro-obregon' },
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
