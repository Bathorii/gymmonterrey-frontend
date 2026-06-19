// src/data/cdmx/barrio-san-jeronimo-lidice.ts
// Draft – lastReviewed: 2026-06-02

export const barrioContent = {
  nombre: 'San Jerónimo Lídice',
  slug: 'san-jeronimo-lidice',
  group: 'A',
  parentDistrict: {
    nombre: 'La Magdalena Contreras',
    slug: 'magdalena-contreras',
  },
  lastReviewed: '2026-06-02',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `San Jerónimo Lídice es la colonia C+ del fitness silencioso: no tiene la visibilidad de Condesa ni el ruido de Santa Fe, pero tiene una comunidad de atletas amateurs seria que entrena en gymns locales de toda la vida. Los gymns son pocos — alrededor de 12 — pero los que están llevan años y conocen a sus clientes por nombre. No es el barrio para quien busca el ambiente del boutique; es para quien busca entrenar en paz sin cruzar la ciudad.

No hay Metro directo — el coche o la moto es lo más práctico. El tráfico en Periférico Sur en horas pico puede complicar el acceso. Para quien vive acá, el gym está a 5 minutos de casa — eso vale mucho. Para quien vive o trabaja cerca de San Jerónimo Lídice, la oferta fitness local es suficiente para entrenar con constancia sin necesidad de cruzar la ciudad ni pagar los precios de las zonas premium del CDMX, cuate.

Para el vecino de San Jerónimo Lídice que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar.`,

  gimnasios: {
    h1: 'Gimnasios en San Jerónimo Lídice — Fitness residencial C+ 2026',
    metaDesc: 'Gimnasios en San Jerónimo Lídice, La Magdalena Contreras: ~12 opciones de $700 a $1,800 MXN/mes. NSE C+ residencial. Guía de Rodrigo 2026.',
    intro: `San Jerónimo Lídice tiene alrededor de 12 gimnasios, la menor densidad de los barrios A del CDMX pero con una calidad de servicio que sorprende a quien llega por primera vez. El rango de $700 a $1,800 MXN posiciona la colonia como una de las más accesibles dentro de las zonas NSE C+ del sur-poniente de la ciudad. Los gymns que existen llevan años operando con la misma comunidad — hay menos rotación de clientes y de personal que en colonias con más tránsito de personas.

El perfil de los gymns de San Jerónimo Lídice es principalmente independiente: no hay Smart Fit en la colonia, hay gymns de barrio con pesas libres, área cardiovascular decente y clases de grupo básicas. Algún estudio de pilates y yoga pequeño completa la oferta. Para funcional avanzado o boutiques de spinning, la colonia no tiene el mercado que genera esas opciones — la propuesta es sólida en lo esencial, no en lo especializado.

La ventaja real de entrenar en San Jerónimo Lídice versus ir a un barrio de mayor densidad de gymns: no hay tiempo de traslado. Para quien vive en la colonia o en las colonias aledañas de La Magdalena Contreras, el gym está caminando o a 5 minutos en coche. En una ciudad donde el traslado al gym puede costar 30-45 minutos de ida, esa fricción reducida tiene impacto directo en la consistencia del entrenamiento. El mejor gym del mundo es el gym al que vas.`,
    faq: [
      {
        q: '¿Hay opciones de gym funcional o CrossFit en San Jerónimo Lídice?',
        a: 'La oferta de funcional y CrossFit en la colonia es limitada. Hay uno o dos spaces con equipamiento funcional básico, pero no boxes de CrossFit afiliados con la infraestructura y el coaching que eso implica. Para CrossFit serio, las opciones más cercanas están en San Ángel o Benito Juárez — 15-20 minutos en coche. Para funcional básico integrado en el gym, los independientes de la colonia tienen las áreas mínimas necesarias.',
      },
      {
        q: '¿Los gymns de San Jerónimo Lídice son más baratos que los de San Ángel?',
        a: 'En promedio, sí — entre 15 y 25% más accesibles para servicio comparable. Un gym independiente con equipamiento completo cuesta $700-$1,000 MXN en San Jerónimo versus $900-$1,300 MXN en San Ángel. Los estudios especializados tienen diferencia menor porque son escasos en ambas colonias. Para la opción de gym básico de calidad, San Jerónimo Lídice es la más económica del poniente C+.',
      },
      {
        q: '¿Cómo llego a San Jerónimo Lídice sin coche?',
        a: 'El acceso en transporte público es limitado — es la realidad del barrio y hay que nombrarlo. El Metrobús Línea 1 tiene paradas en Insurgentes Sur desde donde se puede tomar una combi o taxi hacia San Jerónimo. Sin coche, el tiempo de traslado desde el centro puede ser de 40-55 minutos. Para quien vive en la zona o en colonias aledañas de La Magdalena Contreras, el transporte no es factor. Para quien viene de fuera, la bicicleta o el coche son más prácticos.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de la colonia tienen mensualidades sin compromiso de contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gyms independientes suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~12' },
      { label: 'Membresía mensual', value: '$700–$1,800 MXN' },
      { label: 'Acceso outdoor',    value: 'Bosque de Pedregal (10 min)' },
      { label: 'vs. San Ángel',     value: '~20% más accesible' },
    ],
    barrios: [
      { name: 'San Jerónimo Aculco',   slug: 'san-jeronimo-aculco',   district: 'magdalena-contreras' },
      { name: 'Lomas San Ángel Inn',   slug: 'lomas-san-angel-inn',   district: 'alvaro-obregon' },
      { name: 'Contreras Centro',      slug: 'contreras-centro',      district: 'magdalena-contreras' },
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
    h1: 'Estudios fitness en San Jerónimo Lídice — Yoga y pilates 2026',
    metaDesc: 'Estudios en San Jerónimo Lídice: yoga y pilates de $140 a $250 MXN/clase. La Magdalena Contreras. Guía 2026.',
    intro: `San Jerónimo Lídice tiene una oferta de estudios pequeña pero con varios años de historia en el barrio. Los estudios de yoga y pilates que existen son operados por instructoras locales que llevan entre 5 y 15 años enseñando a la misma comunidad residencial — sin la rotación de clientes de colonias de mayor tránsito, el vínculo entre instructor y alumno es más continuo y personalizado de lo que el tamaño del estudio haría prever.

El precio es el más accesible del poniente C+: clase suelta entre $140 y $250 MXN, planes mensuales de $900 a $1,400 MXN. Comparado con San Ángel ($180-$350) o Roma Norte ($200-$400), entrenar en San Jerónimo Lídice puede representar un ahorro de $30-$150 MXN por clase manteniendo calidad de instrucción. El factor determinante sigue siendo el instructor individual — hay que evaluarlo antes de comprometerse.

Para disciplinas más especializadas que la colonia no tiene — spinning boutique, CrossFit, funcional avanzado — la opción más cercana es San Ángel a 10-15 minutos en coche. La propuesta de San Jerónimo Lídice es yoga y pilates de comunidad local: accesible, consistente y sin la saturación de clientes que tienen los estudios de colonias de mayor densidad.

La variedad de horarios y formatos hace que siempre haya una opción que se ajuste a tu rutina en la colonia.`,
    faq: [
      {
        q: '¿Los estudios de yoga de San Jerónimo Lídice tienen nivel para practicantes avanzados?',
        a: 'Algunos sí. Hay instructoras con más de 10 años de práctica propia y enseñanza que manejan clases multinivel y estudiantes con práctica avanzada. La forma de verificarlo: pide una clase de evaluación o conversación previa con la instructora sobre tu nivel y objetivos. En estudios pequeños de barrio, esa conversación es posible y natural — no tienes que llenar un formulario online para hablar con quien te va a enseñar.',
      },
      {
        q: '¿Hay pilates Reformer en San Jerónimo Lídice?',
        a: 'La oferta de Reformer en la colonia es muy limitada — uno o dos studies tienen máquinas básicas. No es el nivel de los estudios de Roma Norte o San Ángel. Para Reformer con equipamiento de primera línea e instructoras con certificación internacional, hay que ir a colonias con más mercado para esa disciplina. Para pilates Mat y funcional integrado, la colonia tiene opciones suficientes.',
      },
      {
        q: '¿Vale la pena hacer el viaje a San Ángel para estudios boutique si vivo en San Jerónimo?',
        a: 'Depende de la frecuencia. Si vas 2 veces por semana y tardás 15 minutos en llegar a San Ángel, son 60 minutos de traslado adicional por semana — 4 horas al mes. Evaluá si la diferencia de calidad del estudio justifica ese tiempo. Para principiantes e intermedios, los estudios locales de San Jerónimo tienen suficiente nivel. Para practicantes avanzados que necesitan instrucción específica que los estudios locales no ofrecen, el viaje a San Ángel puede valer.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios especializados', value: '4+' },
      { label: 'Clase suelta',            value: '$140–$250 MXN' },
      { label: 'Plan mensual',            value: '$900–$1,400 MXN' },
      { label: 'Ambiente',               value: 'Comunidad residencial local' },
    ],
    barrios: [
      { name: 'San Jerónimo Aculco', slug: 'san-jeronimo-aculco', district: 'magdalena-contreras' },
      { name: 'Lomas San Ángel Inn', slug: 'lomas-san-angel-inn', district: 'alvaro-obregon' },
      { name: 'Contreras Centro',    slug: 'contreras-centro',    district: 'magdalena-contreras' },
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
    h1: 'Entrenadores personales en San Jerónimo Lídice — PT barrio 2026',
    metaDesc: 'Entrenadores personales en San Jerónimo Lídice. Sesiones $400–$750 MXN. PT en La Magdalena Contreras. Guía de Rodrigo 2026.',
    intro: `San Jerónimo Lídice tiene entrenadores personales con el perfil más comunitario del fitness del poniente: PTs que llevan años con los mismos clientes en el barrio, conocen las lesiones de cada uno y adaptan el entrenamiento a las particularidades reales de personas con vidas complejas fuera del gym. No son los PTs más certificados de la ciudad, pero algunos son los más consistentes y contextualmente relevantes para su clientela.

El rango de precio — $400 a $750 MXN por sesión — refleja el mercado local y es el más accesible de las colonias C+ del poniente. Para quien vive en San Jerónimo Lídice o en las colonias aledañas, contratar PT local elimina el tiempo de traslado y el costo de membresía en gym lejano. La suma puede ser más inteligente que pagar PT premium en Polanco más una membresía en ese barrio más el tiempo de traslado.

Para atletas con objetivos específicos de rendimiento que requieren especialización que el barrio no tiene — preparación para competencias de halterofilia, programación de trail running avanzado, nutrición de rendimiento integrada — la opción es combinar PT local para el día a día con consultas especializadas esporádicas en San Ángel o Benito Juárez. No tiene que ser todo o nada.`,
    faq: [
      {
        q: '¿Cuánto cuesta un entrenador personal en San Jerónimo Lídice?',
        a: 'El rango va de $400 a $750 MXN por sesión individual. Los PTs con más trayectoria y formación cobran $550-$750 MXN. Los entrenadores con menos años pero buena base trabajan desde $400 MXN. Paquetes de 10 sesiones con descuento del 10-15% son estándar. Comparado con colonias más al norte, el precio es 20-40% más accesible para servicios equivalentes.',
      },
      {
        q: '¿Los PTs de San Jerónimo Lídice trabajan solo en gym o también en exteriores?',
        a: 'Algunos trabajan en exteriores — el Bosque de Pedregal a 10 minutos en coche es un recurso outdoor que algunos entrenadores del barrio usan para sesiones de running, funcional al aire libre o trabajo de movilidad en naturaleza. Pregunta directamente al PT si incluye sesiones outdoor en su propuesta. En este barrio más que en otros, la conversación directa con el entrenador es más eficiente que depender del perfil online.',
      },
      {
        q: '¿Vale la pena contratar PT de San Jerónimo Lídice o ir a los de Roma Norte?',
        a: 'Para objetivos de fitness general y mantenimiento de salud — que es la mayoría de los casos — los PTs buenos de San Jerónimo Lídice dan el mismo resultado que los de Roma Norte a menor precio y sin tiempo de traslado. La diferencia real aparece en objetivos de alto rendimiento o especialización muy específica que el mercado local no tiene. Para el 80% de las personas, el PT local a $500 MXN que conoce tu historial es mejor opción que el PT de Roma Norte a $900 MXN que te ve por primera vez.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Entrenadores activos', value: '15+' },
      { label: 'Sesión individual',    value: '$400–$750 MXN' },
      { label: 'Outdoor disponible',  value: 'Bosque de Pedregal (10 min)' },
      { label: 'vs. Roma Norte',      value: '~50% más accesible' },
    ],
    barrios: [
      { name: 'San Jerónimo Aculco', slug: 'san-jeronimo-aculco', district: 'magdalena-contreras' },
      { name: 'Lomas San Ángel Inn', slug: 'lomas-san-angel-inn', district: 'alvaro-obregon' },
      { name: 'Contreras Centro',    slug: 'contreras-centro',    district: 'magdalena-contreras' },
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
    h1: 'Eventos fitness en San Jerónimo Lídice — Running y outdoor 2026',
    metaDesc: 'Eventos fitness en San Jerónimo Lídice 2026: running, outdoor en Bosque de Pedregal y activaciones locales. Guía de Rodrigo.',
    intro: `San Jerónimo Lídice tiene la agenda de eventos fitness más tranquila de los barrios A del CDMX, y eso no es una crítica — es un perfil. La colonia no aspira a ser el centro de activaciones de marca ni el escenario de competencias masivas. Lo que tiene es una comunidad de atletas amateurs locales que organiza salidas regulares al Bosque de Pedregal para running y ciclismo, y gymns que hacen sus propios retos internos sin producción de Instagram.

El Bosque de Pedregal es el activo outdoor más importante de la zona: senderos de running en área natural protegida a 10 minutos en coche desde San Jerónimo Lídice. Los grupos locales que van ahí regularmente salen de forma informal — no requieren evento organizado para existir. Para quien quiere entrenamiento outdoor en naturaleza real sin ir hasta Cuajimalpa, el Bosque de Pedregal es la opción del sur-poniente.

Para eventos de mayor escala, el circuito de La Magdalena Contreras tiene carreras anuales que pasan por el barrio y sus calles principales. Son eventos locales con ambiente familiar que no tienen la producción de los eventos de Polanco o Roma Norte, pero sí la autenticidad que viene de que los organizadores y los participantes viven en el mismo barrio.`,
    faq: [
      {
        q: '¿Hay grupos de running que salgan al Bosque de Pedregal desde San Jerónimo?',
        a: 'Sí. Grupos informales de running de la zona salen al Bosque de Pedregal los sábados y domingos por la mañana — típicamente entre 7 y 8am desde el cruce de San Jerónimo Aculco con Periférico. No requieren inscripción. Para encontrar el grupo activo del momento, los grupos de Facebook de running de La Magdalena Contreras o de San Jerónimo son el canal más directo.',
      },
      {
        q: '¿Hay carreras organizadas en La Magdalena Contreras?',
        a: 'Sí, 2-3 carreras anuales organizadas por la Alcaldía La Magdalena Contreras que pasan por San Jerónimo y colonias aledañas. Son carreras de 5K y 10K con perfil familiar y atlético mixto, inscrición de $150-$300 MXN con playera. La información se publica en la página de la Alcaldía y en grupos de running del sur-poniente del CDMX.',
      },
      {
        q: '¿Vale la pena ir al Bosque de Pedregal para entrenar si puedo usar el Parque México?',
        a: 'Son experiencias diferentes. El Parque México es asfalto/cemento en entorno urbano — excelente para running en parque, no para trail. El Bosque de Pedregal tiene senderos de tierra con desnivel, vegetación y ambiente de naturaleza real — mejor para trail running y recuperación activa en verde. Si buscas solo kilómetros fáciles de running, el Parque México o cualquier parque urbano está bien. Si buscas variedad de terreno, trabajo de propiocepcíon y aire genuinamente más limpio, el Pedregal tiene algo distinto.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Carreras anuales',     value: '2–3' },
      { label: 'Running outdoor',      value: 'Bosque de Pedregal (10 min)' },
      { label: 'Grupos running',       value: 'Sáb y Dom 7am (informal)' },
      { label: 'Ambiente',            value: 'Comunidad local · Familiar' },
    ],
    barrios: [
      { name: 'San Jerónimo Aculco', slug: 'san-jeronimo-aculco', district: 'magdalena-contreras' },
      { name: 'Lomas San Ángel Inn', slug: 'lomas-san-angel-inn', district: 'alvaro-obregon' },
      { name: 'Contreras Centro',    slug: 'contreras-centro',    district: 'magdalena-contreras' },
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
    h1: 'Bienestar y recuperación en San Jerónimo Lídice — Fisio local 2026',
    metaDesc: 'Bienestar en San Jerónimo Lídice: fisioterapia y masaje $300–$700 MXN. La Magdalena Contreras. Guía de Rodrigo 2026.',
    intro: `San Jerónimo Lídice tiene fisioterapeutas y masajistas terapéuticos locales con precios de $300 a $700 MXN por sesión — los más accesibles del poniente C+ del CDMX. El nivel es suficiente para las necesidades habituales de atletas amateurs: trabajo de lesiones musculares, fisioterapia preventiva, masaje de recuperación post-entrenamiento. No es la infraestructura de Polanco con diagnóstico por imagen integrado, pero para el 80% de lo que la gente realmente necesita, está aquí.

Los profesionales de bienestar de San Jerónimo Lídice tienen el mismo perfil que los PTs y entrenadores del barrio: mucha trayectoria con clientes recurrentes de la comunidad local, conocimiento profundo de las particularidades de cada paciente y, en los mejores casos, una red de derivación entre ellos cuando la lesión requiere otra especialidad. Un fisioterapeuta local que lleva 8 años con los mismos vecinos sabe cuándo derivar al médico y cuándo puede resolver él.

Para bienestar de nivel superior — medicina del deporte, tecnologías avanzadas de recuperación, nutrición de rendimiento con especialización — las opciones más cercanas están en el Hospital Ángeles del Pedregal (15 minutos en coche) y en San Ángel (15-20 minutos). Para el mantenimiento regular y la prevención de lesiones comunes, San Jerónimo Lídice cubre bien sin salir del barrio.`,
    faq: [
      {
        q: '¿Cuánto cuesta fisioterapia en San Jerónimo Lídice?',
        a: 'El rango real va de $300 a $700 MXN por sesión. Los fisioterapeutas con especialización en deporte o más experiencia cobran $500-$700 MXN. Los generalistas competentes trabajan desde $300-$400 MXN. Paquetes de sesiones con descuento del 10-15%. Es el precio más accesible de las colonias C+ del poniente para fisioterapia de calidad suficiente.',
      },
      {
        q: '¿Hay masaje deportivo en San Jerónimo Lídice?',
        a: 'Sí. Hay masajistas con especialización en deporte o trabajo de tejido profundo en la colonia y sus inmediatas vecinas de La Magdalena Contreras. El rango es $300-$600 MXN por sesión de 60 minutos. Para masaje post-competencia o trabajo de recuperación activa, la opción local es suficiente para la mayoría de atletas amateurs. Para técnicas especializadas como masaje de drenaje linfático deportivo o trabajo específico de biomecánica, los centros de San Ángel tienen más opciones.',
      },
      {
        q: '¿Para qué casos vale cruzar a Hospital Ángeles del Pedregal en lugar de ir al fisio local?',
        a: 'Para lesiones con sospecha de daño estructural (ligamentos, meniscos, discos vertebrales), diagnóstico de lesiones que no mejoran después de 2-3 semanas de tratamiento local, o lesiones post-quirúrgicas que requieren seguimiento médico integrado con la fisioterapia. El Hospital Ángeles del Pedregal tiene traumatología deportiva y fisioterapia integrada. Para lesiones musculares comunes, sobrecargas de entrenamiento y trabajo de prevención, el fisioterapeuta local de San Jerónimo resuelve a menor costo y menor tiempo de traslado.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar',   value: '6+' },
      { label: 'Fisioterapia deportiva', value: '$300–$700 MXN' },
      { label: 'Masaje deportivo',       value: '$300–$600 MXN' },
      { label: 'Referencia cercana',     value: 'H. Ángeles Pedregal (15 min)' },
    ],
    barrios: [
      { name: 'San Jerónimo Aculco', slug: 'san-jeronimo-aculco', district: 'magdalena-contreras' },
      { name: 'Lomas San Ángel Inn', slug: 'lomas-san-angel-inn', district: 'alvaro-obregon' },
      { name: 'Contreras Centro',    slug: 'contreras-centro',    district: 'magdalena-contreras' },
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
