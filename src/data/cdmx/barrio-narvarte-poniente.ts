// src/data/cdmx/barrio-narvarte-poniente.ts
// Draft – lastReviewed: 2026-06-21

export const barrioContent = {
  nombre: 'Narvarte Poniente',
  slug: 'narvarte-poniente',
  group: 'B',
  parentDistrict: {
    nombre: 'Benito Juárez',
    slug: 'benito-juarez',
  },
  lastReviewed: '2026-06-21',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Narvarte Poniente es el barrio de CrossFit de la Benito Juárez — punto. La densidad de boxes sobre Calle Amores y Diagonal San Antonio no tiene comparación en la alcaldía: CrossFit Del Valle tiene comunidad de años ahí, y alrededor se armaron espacios de funcional y gimnasia que alimentan el mismo perfil de cliente. El barrio atrae al profesional joven de 28-38 años que quiere resultados medibles, comunidad real y precio que no destroce el presupuesto. Beat Studio sobre Insurgentes Sur metió la escena boutique de ciclo de manera seria — y el barrio absorbió ambos mundos sin conflicto. Los precios están entre 15 y 20% abajo de Roma Norte, y la tendencia de gentrifación es más lenta que en Del Valle Norte: Narvarte Poniente prefiere densidad de calidad a velocidad de expansión. Metro Insurgentes Sur en línea 1 conecta el barrio de manera directa — llegar sin carro es perfectamente viable para entrenar cualquier día de la semana.

Para el vecino de Narvarte Poniente que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Narvarte Poniente en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Narvarte Poniente',
    metaDesc: 'Gimnasios en Narvarte Poniente, CDMX: CrossFit Del Valle, Beat y funcional de $900 a $2,500 MXN/mes. Amores, Diagonal San Antonio. 15-20% más barato que Roma',
    intro: `Narvarte Poniente tiene una escena de gimnasios construida sobre CrossFit y funcional de alta intensidad — densidad que no encuentras en ningún otro barrio de la Benito Juárez. La concentración más fuerte está sobre Calle Amores y Diagonal San Antonio: CrossFit Del Valle con su comunidad establecida, boxes de funcional de la misma ola y Beat Studio con su modelo de ciclo boutique sobre Insurgentes Sur. El resultado es una variedad real con opciones para casi cualquier perfil de entrenador. Los precios son el argumento más directo de Narvarte Poniente: entre 15 y 20% abajo de Roma Norte. Una membresía de CrossFit con acceso ilimitado a WODs va de $1,200 a $1,800 MXN — contra $1,600-$2,200 MXN en Condesa o Roma Norte por el mismo tipo de box. Beat Studio maneja sus propias tarifas de ciclo boutique en el rango de $2,000 a $2,500 MXN para planes mensuales — el precio de la marca, pero con acceso a la red nacional de sedes. Los gymns independientes que no son CrossFit ni ciclo boutique van de $900 a $1,400 MXN al mes — fuerza, cardio y funcional libre con clientela fija del barrio desde antes de que llegara la ola boutique. No van a Instagram pero tienen el equipamiento y los horarios que los demás no tienen. Si el objetivo es fuerza libre sin grupo ni programación impuesta, estas opciones de Narvarte son de las mejores en precio-calidad de toda la alcaldía.`,
    faq: [
      {
        q: '¿Cuánto cuesta CrossFit Del Valle en Narvarte Poniente en 2026?',
        a: 'CrossFit Del Valle maneja membresías que van de $1,400 a $1,900 MXN al mes para acceso ilimitado a WODs, dependiendo del plan y si incluye clases de gimnasia o solo el WOD estándar. Hay opciones de 3 días por semana en $1,100-$1,300 MXN. La clase suelta para no miembros va de $250 a $350 MXN. Los precios se actualizan anualmente — siempre confirma directamente con el box antes de comprometer. Para CrossFit serio con comunidad real en CDMX, Del Valle es referencia de años y los precios lo reflejan sin excesos.',
      },
      {
        q: '¿Beat Studio en Narvarte vale la diferencia de precio versus un spinning independiente?',
        a: 'Beat Studio cobra más que un estudio de spinning independiente del barrio — entre $2,000 y $2,500 MXN mensuales contra $1,200-$1,600 MXN de opciones locales. Lo que compras con Beat es el sistema de audio calibrado, la producción del instructor y la red de sedes que te permite tomar clase en cualquier Beat de CDMX. Si tomas clase más de 3 veces por semana y te mueves entre colonias, la red justifica el precio. Para 1-2 clases semanales en un solo estudio, el independiente del barrio da calidad comparable a menor costo.',
      },
      {
        q: '¿Es Narvarte Poniente accesible en transporte público para entrenar?',
        a: 'Sí, güey — Metro Insurgentes Sur en línea 1 deja a menos de 8 minutos caminando de los boxes principales sobre Amores y Diagonal San Antonio. Para quien viene del norte en línea 1 o conecta desde el sur, es uno de los accesos más directos del fitness boutique chilango sin necesidad de carro. Los fines de semana el carro tampoco es un problema serio — el estacionamiento en Narvarte Poniente fuera del horario 8-10am entre semana es bastante más tranquilo que en Condesa o Roma Norte.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Narvarte Poniente tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Narvarte Poniente suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~18' },
      { label: 'Membresía mensual', value: '$900–$2,500 MXN' },
      { label: 'Calle clave',       value: 'Amores · Diagonal San Antonio' },
      { label: 'Referencia',        value: 'CrossFit Del Valle · Beat Studio' },
    ],
    barrios: [
      { name: 'Del Valle Norte', slug: 'del-valle-norte', district: 'benito-juarez' },
      { name: 'Roma Sur',        slug: 'roma-sur',        district: 'cuauhtemoc'   },
      { name: 'Nápoles',         slug: 'napoles',         district: 'benito-juarez' },
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
    h1: 'Estudios fitness en Narvarte Poniente',
    metaDesc: 'Estudios en Narvarte Poniente, CDMX: CrossFit, Beat ciclo y funcional de $180 a $350 MXN/clase. Amores y Diagonal San Antonio. Guía 2026.',
    intro: `Narvarte Poniente tiene la mayor densidad de boxes de CrossFit por kilómetro cuadrado de toda la Benito Juárez, y eso define el perfil de sus estudios. Sobre Calle Amores y Diagonal San Antonio no encuentras la variedad pilates-yoga-spinning de Roma Norte — encuentras CrossFit serio, funcional de alta intensidad, gimnasia y ciclo boutique. Es una escena especializada y auténtica en su nicho: los estudios de acá no buscan al cliente casual, buscan al que viene a trabajar. El precio de una clase suelta va de $180 a $320 MXN — entre 15 y 20% abajo de Roma Norte o Condesa para calidad de coaching comparable. Los paquetes mensuales de CrossFit van de $1,200 a $1,800 MXN. Beat Studio en Insurgentes Sur tiene sus propias tarifas de ciclo boutique de $220 a $350 MXN por clase suelta. Para el rango de precios del barrio, la calidad del coaching es alta — el modelo CrossFit exige certificación y la competencia entre boxes mantiene el nivel arriba. El perfil del barrio atrae al cliente que ya sabe lo que quiere: no hay ventas agresivas de membresía a principiantes en los boxes de CrossFit de Narvarte porque el modelo no lo necesita. La comunidad ya está construida y el crecimiento viene por referidos. Si buscas pilates Reformer o yoga suave, Del Valle Norte o Roma Norte son más chidos. Pero si buscas CrossFit o funcional con comunidad real y precio honesto, Narvarte Poniente es la mejor opción de la Benito Juárez.`,
    faq: [
      {
        q: '¿Puedo probar un WOD en CrossFit Del Valle sin membresía previa?',
        a: 'Sí, la mayoría de boxes de CrossFit en Narvarte Poniente — incluyendo CrossFit Del Valle — permiten clase de prueba para nuevos atletas, a veces gratuita o a precio reducido de $150-$250 MXN. Para principiantes absolutos sin experiencia en CrossFit, algunos boxes exigen completar un curso de fundamentos de 3-6 sesiones antes de entrar a WOD regular — es una inversión de $800 a $1,500 MXN según el box, pero evita lesiones y garantiza que llegas al WOD con técnica básica. Llama antes para confirmar política de prueba.',
      },
      {
        q: '¿Los estudios de funcional en Narvarte tienen opciones para nivel principiante?',
        a: 'Depende del estudio — los boxes puros de CrossFit sobre Amores tienen nivel de entrada más exigente que los estudios de funcional mixto de la zona. Los espacios de funcional no afiliados a CrossFit que hay en el barrio son generalmente más accesibles para principiantes: grupos más pequeños, programación más adaptable y coaches que tienen más tiempo para correcciones individuales. Para identificarlos, filtra en Instagram por ubicación Narvarte Poniente y descarta los que solo muestran atletas avanzados en sus stories.',
      },
      {
        q: '¿Vale la pena Beat Studio en Narvarte versus otros estudios de ciclo en Narvarte Poniente?',
        a: 'Beat Studio es el referente de ciclo boutique de alta producción en Narvarte Poniente — sistema de audio de calidad real, instructores con alta energía y clases con cupo limitado que garantizan espacio. Las alternativas independientes en el barrio van de $180 a $250 MXN por clase suelta contra $220-$350 MXN de Beat. Para el cliente que quiere la experiencia completa de ciclo boutique — luces, música producida, instructor con micrófono — Beat cumple. Para el que quiere girar con buena música sin el espectáculo, las opciones del barrio dan más valor por peso.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios especializados', value: '8+' },
      { label: 'Clase suelta',            value: '$180–$350 MXN' },
      { label: 'Plan mensual',            value: '$1,200–$1,800 MXN' },
      { label: 'Disciplinas',             value: 'CrossFit · Funcional · Ciclo' },
    ],
    barrios: [
      { name: 'Del Valle Norte', slug: 'del-valle-norte', district: 'benito-juarez' },
      { name: 'Roma Sur',        slug: 'roma-sur',        district: 'cuauhtemoc'   },
      { name: 'Nápoles',         slug: 'napoles',         district: 'benito-juarez' },
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
    h1: 'Entrenadores personales en Narvarte Poniente',
    metaDesc: 'Entrenadores personales en Narvarte Poniente, CDMX. Sesiones $500–$1,100 MXN. Coaches CrossFit y funcional sobre Amores y Diagonal San Antonio. Guía de Rodrigo',
    intro: `Narvarte Poniente tiene una concentración de entrenadores personales con formación en CrossFit y movimiento funcional que no tiene comparación en la Benito Juárez. Los coaches vienen en su mayoría de la cultura box — certificación CrossFit Level 1 o 2, experiencia en competencia amateur y metodología de periodización que va más allá del gym genérico. El rango de tarifas va de $500 a $1,100 MXN por sesión, consistentemente más accesible que Roma Norte o Condesa para el mismo perfil de coach.

El modelo de entrenamiento personal en Narvarte tiene una ventaja que otros barrios boutique no tienen: los coaches saben entrenar en el espacio del box. Barras olímpicas, anillas, cajones de box jump, ropes — el entrenamiento personal acá puede usar el equipamiento completo de CrossFit que en un gym convencional no existe. Para el atleta que quiere preparación para competencia o progresar en movimientos técnicos, un PT con base en Narvarte es la opción más inteligente de la alcaldía.

Para el cliente con presupuesto más ajustado, hay coaches de los boxes que hacen sesiones semi-privadas de 2-4 personas de $300 a $500 MXN por persona — la forma más accesible de tener programación individualizada. No es PT puro, pero el ratio coach-atleta sigue siendo suficientemente bajo para corrección técnica real. Es un modelo que los boxes de Narvarte ofrecen más que los de otros barrios fitness del CDMX.`,
    faq: [
      {
        q: '¿Cuánto cobra un coach de CrossFit certificado como PT en Narvarte Poniente?',
        a: 'Los coaches de CrossFit certificados Level 1 o 2 que hacen entrenamiento personal en Narvarte Poniente cobran entre $600 y $1,100 MXN por sesión individual. Los que tienen Level 2 más competencia personal relevante están en el rango alto. Los coaches más nuevos con buena formación pero menos trayectoria arrancan en $500-$650 MXN. Para sesiones semi-privadas de 2-3 personas, el costo baja a $300-$450 MXN por persona. Siempre pide ver la certificación — en CrossFit la distinción entre Level 1 y Level 2 importa en técnica.',
      },
      {
        q: '¿Hay entrenadores en Narvarte que trabajen también en Parque Hundido o áreas verdes cercanas?',
        a: 'Sí, güey — algunos coaches del barrio atienden clientes en Parque Hundido o sobre los jardines de Insurgentes para sesiones outdoor. La ventaja: cero costo de sala y más espacio para trabajo aeróbico. La desventaja: sin barras olímpicas ni equipamiento de CrossFit. Para el cliente que quiere funcional outdoor con un PT serio, estas sesiones van de $450 a $700 MXN — generalmente el coach hace la estructura de sesión adaptada a lo disponible. La calidad depende enteramente del coach, no del espacio.',
      },
      {
        q: '¿Conviene contratar PT en Narvarte si ya tengo membresía en CrossFit Del Valle?',
        a: 'Sí, especialmente si hay movimientos técnicos donde no progresas en el contexto del WOD grupal. El WOD de CrossFit no tiene tiempo para corrección individual profunda — un PT que te observe en 5-10 sesiones de enfoque técnico puede resolver problemas de movimiento que llevan meses estancados. El costo de 4 sesiones mensuales de PT ($2,000-$3,200 MXN) versus el valor de progresar en movimientos que de otra forma tomarían un año más — la mayoría de atletas que lo intentan no vuelve atrás. Habla con tu coach del box primero: a veces lo resuelven internamente.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Entrenadores activos', value: '20+' },
      { label: 'Sesión individual',    value: '$500–$1,100 MXN' },
      { label: 'Semi-privado',         value: '$300–$450 MXN/persona' },
      { label: 'Especialidades',       value: 'CrossFit · Funcional · Gimnasia' },
    ],
    barrios: [
      { name: 'Del Valle Norte', slug: 'del-valle-norte', district: 'benito-juarez' },
      { name: 'Roma Sur',        slug: 'roma-sur',        district: 'cuauhtemoc'   },
      { name: 'Nápoles',         slug: 'napoles',         district: 'benito-juarez' },
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
    h1: 'Eventos fitness en Narvarte Poniente',
    metaDesc: 'Eventos fitness en Narvarte Poniente, CDMX: competencias CrossFit, running clubs y activaciones Beat Studio sobre Amores e Insurgentes Sur. Guía 2026.',
    intro: `Narvarte Poniente tiene el calendario de competencias de CrossFit más activo de la Benito Juárez y uno de los más consistentes del CDMX sur. Los boxes sobre Calle Amores y Diagonal San Antonio organizan eventos intra-box, competencias inter-colonias y participan en circuitos de CrossFit amateur que conectan con boxes de Condesa, Roma Sur y Doctores. La participación comunitaria es genuinamente alta — no son activaciones de marketing, son competencias donde la gente viene a medirse.

Los running clubs de Narvarte son menos formales que los de Roma Norte pero igual de constantes. Grupos de 10 a 30 personas salen sobre Insurgentes Sur hacia Parque Hundido los martes y jueves a las 7am — sin app ni registro, solo WhatsApp y ganas de correr. Beat Studio organiza eventos de ciclo boutique con frecuencia: clases especiales, desafíos de resistencia y colaboraciones con marcas de gratuitas para miembros a $200-$300 MXN para externos.

El evento más chido del año es la competencia inter-box del primer semestre — fecha varía, pero el formato es consistente: categorías scaled y rx, equipos e individuales, inscripción de $400 a $700 MXN con camiseta y hidratación. Son eventos donde el nivel es real pero la energía es de comunidad, no de ego — el tipo donde vas por primera vez y salís queriendo volver antes de que termine.`,
    faq: [
      {
        q: '¿Cómo me entero de las competencias de CrossFit en Narvarte Poniente?',
        a: 'La mejor fuente son las cuentas de Instagram de los boxes del barrio — CrossFit Del Valle y los otros boxes sobre Amores publican sus eventos con 3-6 semanas de anticipación. Los grupos de WhatsApp de cada box también son canal primario. Para competencias inter-colonias que incluyen a Narvarte, busca en Instagram con hashtag CrossFit CDMX o sigue cuentas de organizadores de eventos fitness chilangos que cubren el circuito completo. El registro suele abrirse 2-4 semanas antes y se llena ahorita — no dejes pasar.',
      },
      {
        q: '¿Hay eventos de CrossFit en Narvarte aptos para competidores novatos?',
        a: 'Sí, y es uno de los puntos fuertes del barrio. Los boxes de Narvarte Poniente tienen tradición de organizar categorías scaled accesibles para atletas con 6 meses o más de CrossFit. No necesitas double-unders perfectas ni muscle-ups — hay movimientos alternativos para cada habilidad. Mi recomendación honesta: si llevas más de 4 meses entrenando CrossFit y tu coach dice que estás listo para competir en scaled, hazlo. La primera competencia siempre es la que más aprendés, independientemente del resultado.',
      },
      {
        q: '¿Beat Studio organiza eventos especiales en Narvarte sobre Insurgentes Sur?',
        a: 'Sí, Beat hace colaboraciones y clases especiales en su sede de Insurgentes Sur con regularidad — instructores invitados, clases temáticas, desafíos de resistencia con seguimiento de métricas. Son eventos bien producidos que mezclan la experiencia del estudio con componentes de comunidad. La comunicación es principalmente por Instagram y la app propia de Beat — activa notificaciones si sigues la cuenta de la sede Narvarte. Los eventos especiales suelen tener precio de $200-$400 MXN para externos o incluidos en membresía activa.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Competencias CrossFit/año', value: '3+' },
      { label: 'Running clubs activos',     value: '2+' },
      { label: 'Eventos boutique/mes',      value: '5–10' },
      { label: 'Parque de referencia',      value: 'Parque Hundido' },
    ],
    barrios: [
      { name: 'Del Valle Norte', slug: 'del-valle-norte', district: 'benito-juarez' },
      { name: 'Roma Sur',        slug: 'roma-sur',        district: 'cuauhtemoc'   },
      { name: 'Nápoles',         slug: 'napoles',         district: 'benito-juarez' },
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
    h1: 'Bienestar y recuperación en Narvarte Poniente',
    metaDesc: 'Bienestar en Narvarte Poniente, CDMX: fisioterapia deportiva, nutrición CrossFit y masaje $400–$1,000 MXN. Amores y Diagonal San Antonio. Guía de Rodrigo 2026.',
    intro: `Narvarte Poniente tiene una infraestructura de bienestar que creció junto con su comunidad de CrossFit — y eso hace la diferencia. Los fisioterapeutas del barrio que trabajan con los boxes de Amores y Diagonal San Antonio conocen las lesiones típicas del CrossFit: hombros, muñecas, espalda baja, rodillas en sentadilla olímpica. No atienden a un cliente genérico: atienden a atletas que les llevan el WOD del día y preguntan qué pueden modificar mientras se recuperan. Esa contextualización no la encuentras en una clínica genérica.

Los precios de bienestar en Narvarte están entre 15 y 20% abajo de Roma Norte. Una sesión de fisioterapia deportiva va de $450 a $950 MXN. Masaje terapéutico de recuperación de $400 a $850 MXN. La relación precio-contexto deportivo es difícil de superar en la alcaldía: pagas menos que en Roma Norte y obtienes un profesional que entiende el tipo de carga que manejas.

La nutrición deportiva en Narvarte tiene el mismo sesgo hacia CrossFit y alta intensidad que el fitness del barrio. Hay nutricionistas que trabajan con atletas amateur con programación periodizada — no la dieta genérica de déficit calórico, sino protocolos que consideran el ciclo de entrenamiento, las fases de fuerza y los períodos de competencia. Para el atleta de CrossFit que ya optimizó el entrenamiento y quiere atacar la nutrición con la misma seriedad, Narvarte tiene opciones reales sin salir del barrio.`,
    faq: [
      {
        q: '¿Cuánto cuesta fisioterapia deportiva especializada en CrossFit en Narvarte Poniente?',
        a: 'Los fisioterapeutas del barrio con experiencia específica en lesiones de CrossFit cobran entre $500 y $950 MXN por sesión de 45-60 minutos. Para trabajo de mantenimiento y movilidad general, hay clínicas sobre calles internas del barrio desde $450 MXN. Los que trabajan integrados con alguno de los boxes de la zona suelen tener más contexto de tu entrenamiento específico — vale preguntar en tu box cuál fisioterapeuta conocen directamente. Paquetes de 5-8 sesiones tienen descuento habitual de 10-15%.',
      },
      {
        q: '¿Hay masaje de recuperación post-WOD en Narvarte Poniente?',
        a: 'Sí, y es un servicio que algunos centros de la zona diseñaron específicamente para el perfil CrossFit del barrio — sesiones de 45-60 minutos de tejido profundo orientadas a grupos musculares bajo mayor carga en el WOD. El rango va de $400 a $850 MXN según el centro y la duración. Algunos boxes de la zona tienen convenio con masajistas que atienden in situ después de clase — vale preguntar en tu box si existe ese servicio. Para recuperación post-competencia, coordinar una sesión la noche del evento tiene impacto real en cómo te sentís al día siguiente.',
      },
      {
        q: '¿Vale contratar nutricionista deportivo en Narvarte si ya sigo la dieta de mi coach de CrossFit?',
        a: 'Si tu coach de CrossFit tiene formación en nutrición y su protocolo está funcionando, probablemente no necesitas nutricionista adicional ahorita. Pero si llevás más de 6 meses con la misma programación nutricional sin progresión en composición o rendimiento, la consulta inicial con un nutricionista del barrio que conozca CrossFit ($700-$1,000 MXN) vale para identificar dónde está el techo. A veces el problema no es el entrenamiento — es el timing de proteínas post-WOD o la ingesta de carbohidratos en días de fuerza. Una consulta puede clarificar eso.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar',   value: '10+' },
      { label: 'Fisioterapia deportiva', value: '$450–$950 MXN' },
      { label: 'Masaje terapéutico',     value: '$400–$850 MXN' },
      { label: 'Nutrición deportiva',    value: '$700–$1,000 MXN consulta' },
    ],
    barrios: [
      { name: 'Del Valle Norte', slug: 'del-valle-norte', district: 'benito-juarez' },
      { name: 'Roma Sur',        slug: 'roma-sur',        district: 'cuauhtemoc'   },
      { name: 'Nápoles',         slug: 'napoles',         district: 'benito-juarez' },
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
