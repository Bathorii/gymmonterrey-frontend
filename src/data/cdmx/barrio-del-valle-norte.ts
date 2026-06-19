// src/data/cdmx/barrio-del-valle-norte.ts
// Draft – lastReviewed: 2026-06-21

export const barrioContent = {
  nombre: 'Del Valle Norte',
  slug: 'del-valle-norte',
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

  sobreBarrio: `Del Valle Norte es uno de esos barrios que el mercado fitness descubrió antes que el resto de la ciudad. Sobre Insurgentes Sur y División del Norte se armó una escena que combina cadenas boutique serias — Orangetheory tiene presencia fuerte — con gyms independientes que no necesitan Instagram para llenar sus cupos. El perfil ABC1 del barrio no es nuevo; lo nuevo son los precios de membresía que hace tres años no hubieran funcionado acá. La gentrifación avanza sobre Calle Xola y las transversales de División del Norte, y el fitness llega antes que las cafeterías de especialidad. Metro División del Norte conecta en directo con el barrio sin necesidad de carro — ventaja real para quien entrena antes de entrar a la oficina. Los precios todavía están 10-15% abajo de Roma Norte, pero la tendencia es clara: quien llegue ahora consigue la calidad del barrio antes de que el mercado lo ajuste.

Para el vecino de Del Valle Norte que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Del Valle Norte en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Del Valle Norte',
    metaDesc: 'Gimnasios en Del Valle Norte, CDMX: ~20 opciones de $900 a $2,500 MXN/mes. Insurgentes Sur, División del Norte. 10-15% más barato que Roma Norte. Guía 2026.',
    intro: `Del Valle Norte tiene alrededor de 20 gimnasios y la densidad boutique está creciendo rápido. La concentración más fuerte está sobre Insurgentes Sur y las calles hacia División del Norte — una franja donde conviven Orangetheory con su modelo HIIT cronometrado, gyms de fuerza independientes y funcional boxes que llevan años en el barrio antes de que llegara la ola boutique. El Orangetheory sobre Insurgentes es el referente de la zona: atrae al profesional de 30-something que quiere workout estructurado sin improvisar la programación.

Los precios son el argumento más claro de Del Valle Norte versus sus vecinos del norte. Una membresía boutique estándar arranca en $1,300 MXN y llega a $2,200 MXN con clases incluidas — entre 10 y 15% abajo de lo que pagarías sobre Orizaba en Roma Norte. Los gyms independientes sin branding cuidado pero con pesas libres reales se consiguen entre $900 y $1,400 MXN. Esa diferencia de precio refleja el momento del barrio, no la calidad del entrenamiento.

Sobre Calle Xola y las transversales hacia Metro División del Norte hay opciones que todavía no ajustaron precios — gyms de toda la vida con equipamiento funcional, sin decoración de moda, donde el precio mensual no supera los $1,100 MXN. Son los güeys que van a desaparecer o subir precios en los próximos dos años, pero ahorita ofrecen la mejor relación valor de toda la Benito Juárez para quien sabe qué buscar.`,
    faq: [
      {
        q: '¿Cuánto cuesta Orangetheory en Del Valle Norte sobre Insurgentes Sur?',
        a: 'Orangetheory Del Valle Norte maneja membresías por clase en el rango de $2,000 a $2,500 MXN al mes para paquetes de 8-12 clases. La clase suelta va de $280 a $380 MXN según horario. El modelo es idéntico al de cualquier sede Orangetheory: monitor de frecuencia cardíaca, intervalos HIIT cronometrados, coaching grupal con datos en pantalla. Si ya eres miembro en otra sede de CDMX, consulta si aplica tu membresía — la política de multi-sede cambia seguido.',
      },
      {
        q: '¿Qué tan caro es Del Valle Norte comparado con Roma Norte y Narvarte Poniente?',
        a: 'Del Valle Norte está consistentemente entre 10 y 15% abajo de Roma Norte para servicios equivalentes. Versus Narvarte Poniente, los precios son comparables con ligera ventaja en Del Valle para gyms de cadena y ligera ventaja en Narvarte para boxes de CrossFit donde la competencia es más intensa. Si el presupuesto es $1,200–$1,600 MXN, Del Valle Norte tiene más opciones que Roma Norte en ese rango sin sacrificar calidad de coaching.',
      },
      {
        q: '¿Es fácil llegar al Metro División del Norte para entrenar en Del Valle Norte?',
        a: 'Sí, güey — Metro División del Norte en la línea 12 conecta directo con el barrio y está a menos de 10 minutos caminando de los gyms principales sobre esa avenida. Para quien viene de la línea 1, el transbordo en Zapata es rápido. El estacionamiento en zona Xola y División del Norte en horario de 7-9am es problemático entre semana — Metro es más eficiente que el carro para ese horario. Los fines de semana el carro no es un calvario.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Del Valle Norte tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Del Valle Norte suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~20' },
      { label: 'Membresía mensual', value: '$900–$2,500 MXN' },
      { label: 'Calle clave',       value: 'Insurgentes Sur · División del Norte' },
      { label: 'Referencia',        value: 'Orangetheory Del Valle' },
    ],
    barrios: [
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
      { name: 'Del Valle Sur',     slug: 'del-valle-sur',     district: 'benito-juarez' },
      { name: 'Nápoles',           slug: 'napoles',           district: 'benito-juarez' },
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
    h1: 'Estudios fitness en Del Valle Norte',
    metaDesc: 'Estudios en Del Valle Norte, CDMX: pilates, spinning y funcional de $180 a $350 MXN/clase. Insurgentes Sur y Xola. Más accesible que Roma Norte. Guía 2026.',
    intro: `Del Valle Norte tiene una escena de estudios boutique en plena construcción — y eso es exactamente lo que la hace interesante. Sobre Insurgentes Sur y las calles hacia Xola hay estudios de pilates Reformer con instructoras certificadas, espacios de funcional con programación seria y opciones de spinning con clientela fija del barrio desde antes de que llegaran las cadenas. El perfil es menos espectacular visualmente que Roma Norte o Condesa, pero la calidad del coaching es comparable y el precio lo refleja.

Una clase suelta en estudios de Del Valle Norte va de $180 a $350 MXN — entre 10 y 20% abajo del equivalente en Roma Norte. Los paquetes mensuales de 8-12 clases arrancan en $1,200 MXN y llegan a $2,000 MXN en los estudios más establecidos. Para el cliente que quiere calidad real sin pagar la prima del barrio de moda, esta diferencia tiene impacto mensual directo en el bolsillo.

El perfil ABC1 del barrio está empujando la oferta de estudios hacia arriba — en 2026 hay estudios nuevos sobre División del Norte que hace dos años no existían. Quien llegue ahora puede encontrar precios de membresía fundador en estudios que van a subir tarifas en cuanto terminen de construir comunidad. Si encuentras un estudio con precio de lanzamiento o congelado anual, vale considerarlo antes de que el mercado ajuste.`,
    faq: [
      {
        q: '¿Hay estudios de pilates Reformer serios en Del Valle Norte?',
        a: 'Sí, chido — sobre Insurgentes Sur y sus transversales hacia Xola hay al menos 4-5 estudios con máquinas Reformer de marca, instructoras con certificación BASI o Stott y grupos pequeños de 5-8 personas por clase. Los precios van de $220 a $350 MXN por clase suelta, ligeramente abajo de Roma Norte. Para quien viene de Condesa o Roma a buscar opciones más accesibles sin bajar de calidad, Del Valle Norte es la respuesta obvia. Pide ver el equipamiento antes de comprometer membresía.',
      },
      {
        q: '¿Vale la pena el spinning boutique en Del Valle Norte o mejor ir a Narvarte?',
        a: 'Del Valle Norte tiene opciones de spinning que compiten bien con Narvarte Poniente en calidad de instructor y sonido — la diferencia es en tamaño de comunidad, donde Narvarte tiene más masa crítica. Si la clase de spinning es el workout principal de tu semana, vale explorar ambos barrios y quedarte con el estudio que tenga el instructor que más te jale. Precio similar, experiencia puede ser muy diferente según el coach. Una clase de prueba en cada uno antes de decidir es la movida inteligente.',
      },
      {
        q: '¿Con cuánta anticipación hay que reservar en los estudios de Del Valle Norte?',
        a: 'Menos presión que en Roma Norte — en la mayoría de estudios de Del Valle Norte los horarios se pueden reservar con 6-12 horas de anticipación sin problemas, excepto en los horarios premium de 7am y 19hs entre semana. Los lunes y martes son los días con más disponibilidad espontánea. Los estudios que ya tienen comunidad establecida sobre Insurgentes Sur sí requieren reserva anticipada los jueves y viernes en horario nocturno. Descarga la app del estudio y activa notificaciones — las cancelaciones de última hora son frecuentes.',
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
      { label: 'Disciplinas',             value: 'Pilates · Spinning · Funcional' },
    ],
    barrios: [
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
      { name: 'Del Valle Sur',     slug: 'del-valle-sur',     district: 'benito-juarez' },
      { name: 'Nápoles',           slug: 'napoles',           district: 'benito-juarez' },
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
    h1: 'Entrenadores personales en Del Valle Norte',
    metaDesc: 'Entrenadores personales en Del Valle Norte, CDMX. Sesiones $500–$1,200 MXN. PTs en Insurgentes Sur, División del Norte y Calle Xola. Guía de Rodrigo 2026.',
    intro: `Del Valle Norte tiene una base de entrenadores personales que refleja el doble perfil del barrio: PTs de cadena entrenados bajo metodología Orangetheory y coaches independientes con años de trabajo en gyms de fuerza de la zona que no necesitan el branding de una franquicia para conseguir clientes. El rango de tarifas va de $550 a $1,200 MXN por sesión — entre 10 y 20% abajo de lo que cobran los PTs equivalentes en Roma Norte o Condesa.

El perfil ABC1 del barrio significa que la demanda de entrenamiento personal es real y creciente. Los mejores entrenadores independientes de Del Valle Norte están construyendo listas de espera ahorita — en 2026 todavía se pueden conseguir cupos con menos de una semana de anticipación, pero eso está cambiando rápido. Si encuentras un PT con metodología sólida que todavía tiene disponibilidad, la movida es comprometer ahorita antes de que llene.

Para quienes el presupuesto es una variable seria, hay entrenadores con base en Del Valle Norte que trabajan al aire libre — sobre División del Norte hay zonas de ejercicio y algunos coaches usan los parques de la zona para sesiones outdoor que van de $450 a $600 MXN. El entrenamiento outdoor con un PT que sabe estructurar la sesión en espacio abierto es una opción legítima y frecuente en este barrio donde el clima permite.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Del Valle Norte comparado con Roma Norte?',
        a: 'Los PTs de Del Valle Norte están en general entre $550 y $1,200 MXN por sesión individual, versus $600-$1,400 MXN en Roma Norte para perfil equivalente. La diferencia no es dramática pero sí consistente — el barrio todavía no terminó de ajustar sus tarifas al nivel de las colonias más establecidas del fitness boutique. Para el PT con certificación NSCA o similar y experiencia probada, los $1,000-$1,200 MXN son razonables. Para PTs en formación con supervisión, $550-$700 MXN.',
      },
      {
        q: '¿Los entrenadores de Orangetheory Del Valle Norte dan clases privadas fuera de la franquicia?',
        a: 'Algunos sí, güey — hay coaches de Orangetheory que dan sesiones individuales fuera de su horario de franquicia. No es política oficial de la cadena y no lo anuncian abiertamente, pero preguntando en la recepción o por contacto directo con el coach se consigue. Las tarifas en ese contexto son menores que en el gym — entre $600 y $900 MXN por sesión. La metodología HIIT con monitor de frecuencia cardíaca que aplican en el estudio se traslada bien al entrenamiento individual.',
      },
      {
        q: '¿Hay entrenadores especializados en pérdida de peso o composición corporal en Del Valle Norte?',
        a: 'Sí. El perfil de demanda del barrio — profesionales de 30-40 años con objetivos estéticos específicos — generó una oferta de PTs especializados en composición corporal y periodización del entrenamiento para resultados visibles. Encontrarás coaches que trabajan en conjunto con nutricionistas del área para dar un servicio integrado. Para validar si un PT entiende de composición corporal de verdad: pídele que explique su protocolo de medición de progreso antes de contratar. Si solo habla de "tonificar", sigue buscando.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Entrenadores activos', value: '25+' },
      { label: 'Sesión individual',    value: '$550–$1,200 MXN' },
      { label: 'Outdoor disponible',   value: 'División del Norte · zonas de ejercicio' },
      { label: 'Especialidades',       value: 'HIIT · Fuerza · Composición corporal' },
    ],
    barrios: [
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
      { name: 'Del Valle Sur',     slug: 'del-valle-sur',     district: 'benito-juarez' },
      { name: 'Nápoles',           slug: 'napoles',           district: 'benito-juarez' },
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
    h1: 'Eventos fitness en Del Valle Norte — Running, HIIT y activaciones 2026',
    metaDesc: 'Eventos fitness en Del Valle Norte, CDMX 2026: running clubs, retos Orangetheory y activaciones boutique sobre Insurgentes Sur. Guía de Rodrigo.',
    intro: `Del Valle Norte tiene un calendario de eventos fitness que está creciendo al mismo ritmo que su escena boutique. No tiene el volumen de Roma Norte todavía, pero lo que existe es auténtico y sin la saturación de eventos de marca que a veces hace ruido en las colonias más establecidas. Los running clubs informales sobre División del Norte y los retos internos de Orangetheory son los eventos con más recurrencia y comunidad real en el barrio.

Los boutiques de la zona — pilates, funcional y spinning — organizan eventos propios con frecuencia variable: retos de 21-30 días, clases abiertas para referidos, workshops temáticos. Son eventos de acceso fácil que mezclan miembros existentes con gente nueva al barrio. La mayoría tiene costo cero para miembros o entre $150 y $300 MXN para externos. Instagram y WhatsApp son los canales principales — seguir las cuentas de los estudios sobre Insurgentes Sur y Xola da el calendario completo sin buscar más.

El evento de mayor tracción en Del Valle Norte en 2026 son los retos de Orangetheory — el formato de 6 semanas con registro de métricas individuales genera competencia interna que retiene mucho cliente que de otra forma no completaría el ciclo. Para quien viene de fuera del barrio a un evento puntual, Metro División del Norte en línea 12 es la entrada más práctica: menos de 10 minutos caminando a los gyms principales de la zona sin estacionamiento que resolver.`,
    faq: [
      {
        q: '¿Hay running clubs activos en Del Valle Norte en 2026?',
        a: 'Sí, aunque menos establecidos que en Condesa o Roma Norte. Sobre División del Norte hay grupos informales que salen los miércoles y sábados entre 7 y 7:30am — grupos de 8 a 25 personas según la temporada. Algunos estudios de funcional del barrio tienen su propio running club con salida desde el gym. Para encontrarlos, busca en Instagram con ubicación Del Valle Norte o pregunta directamente en Orangetheory — suelen conocer los grupos activos del barrio.',
      },
      {
        q: '¿En qué consisten los retos de Orangetheory sobre Insurgentes Sur?',
        a: 'Los retos Orangetheory son ciclos de 6 semanas con seguimiento de métricas de cada clase — distancia en caminadora, potencia en remo, zonas de frecuencia cardíaca. Al final hay comparativo de resultados versus inicio y versus la comunidad global de la cadena. La inscripción es gratuita para miembros activos. Son efectivos para gente que necesita estructura y competencia externa para mantener constancia — no son adecuados para quien quiere autonomía en su entrenamiento.',
      },
      {
        q: '¿Se organizan eventos inter-colonia entre Del Valle Norte, Narvarte y Del Valle Sur?',
        a: 'Todavía de manera informal — no hay circuito establecido como en Condesa-Roma, pero algunos boxes de funcional y estudios de pilates del área Benito Juárez coordinan clases cruzadas y eventos conjuntos una o dos veces al año. La escena está en construcción y tiene más potencial que estructura ahorita. Si te interesa participar en algo así, habla directamente con el dueño del estudio donde entrenas — son los que conectan entre barrios y arman estas cosas de manera informal.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gyms y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Running clubs activos',  value: '2+' },
      { label: 'Eventos boutique/mes',   value: '4–8' },
      { label: 'Referencia de evento',   value: 'Retos Orangetheory (6 sem.)' },
      { label: 'Acceso Metro',           value: 'Metro División del Norte (L12)' },
    ],
    barrios: [
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
      { name: 'Del Valle Sur',     slug: 'del-valle-sur',     district: 'benito-juarez' },
      { name: 'Nápoles',           slug: 'napoles',           district: 'benito-juarez' },
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
    h1: 'Bienestar y recuperación en Del Valle Norte',
    metaDesc: 'Bienestar en Del Valle Norte, CDMX: fisioterapia deportiva, nutrición y masaje $450–$1,100 MXN. Sobre Insurgentes Sur y Calle Xola. Guía de Rodrigo 2026.',
    intro: `Del Valle Norte tiene una oferta de bienestar que crece junto con su escena fitness boutique — y que todavía no llegó a los precios de Roma Norte o Condesa. Sobre Insurgentes Sur y las calles hacia Xola hay fisioterapeutas deportivos con formación sólida, nutricionistas que trabajan con el perfil ABC1 del barrio y centros de masaje terapéutico que atienden la recuperación de miembros de Orangetheory y los estudios de la zona.

Para el atleta amateur serio — quien entrena 4-5 veces por semana — la fisioterapia preventiva en Del Valle Norte tiene una relación precio-calidad que supera a las colonias más establecidas. Una sesión con un fisioterapeuta deportivo en el área va de $500 a $1,000 MXN, entre $100 y $200 MXN abajo del equivalente en Roma Norte. La diferencia se acumula: 2 sesiones al mes son $2,400 MXN de ahorro anual sin bajar de calidad.

La nutrición deportiva en Del Valle Norte tiene un perfil interesante: hay nutricionistas que atienden a miembros de Orangetheory con protocolos específicos para HIIT de alta frecuencia. Ese conocimiento del contexto local es difícil de encontrar en consultorios genéricos. Una consulta inicial va de $700 a $1,100 MXN. Para el cliente que quiere soporte nutricional alineado con su entrenamiento — no recetas genéricas — Del Valle Norte tiene opciones reales y más accesibles que sus vecinos del norte.`,
    faq: [
      {
        q: '¿Cuánto cuesta una sesión de fisioterapia deportiva en Del Valle Norte?',
        a: 'Los fisioterapeutas deportivos de Del Valle Norte cobran entre $500 y $1,000 MXN por sesión de 45-60 minutos — entre 10 y 15% abajo del equivalente en Roma Norte. Para trabajo de movilidad y mantenimiento general, hay clínicas sobre calles internas de Xola que ofrecen sesiones desde $450 MXN. Paquetes de 5-10 sesiones tienen descuento de 10-15% en la mayoría de los consultorios del área. Prioriza fisioterapeutas que pregunten sobre tu entrenamiento antes de tocar — los que no preguntan, no contextualizan.',
      },
      {
        q: '¿Hay masaje deportivo de calidad en Del Valle Norte o hay que ir a otras colonias?',
        a: 'Del Valle Norte tiene opciones de masaje deportivo chidas sobre Insurgentes Sur y las calles hacia División del Norte. El rango va de $450 a $900 MXN por sesión de 60 minutos — ligeramente más accesible que Roma Norte o Condesa. Para tejido profundo y trabajo post-competencia, los centros que están integrados o recomendados por los estudios de la zona suelen tener los masajistas con mejor contexto deportivo. No hay que irse a otro barrio para encontrar calidad real en recuperación muscular.',
      },
      {
        q: '¿Vale la pena la nutrición deportiva en Del Valle Norte específicamente para entrenamiento HIIT?',
        a: 'Sí, y más en este barrio que en otros — la concentración de miembros Orangetheory y funcional de alta intensidad generó una demanda específica que algunos nutricionistas de la zona atienden con protocolos diseñados para esa carga de entrenamiento. El HIIT de 4-5 sesiones semanales tiene requerimientos de recuperación y timing de nutrientes muy distintos al entrenamiento de fuerza tradicional — un nutricionista que conozca el modelo tiene valor real. Consulta inicial entre $700 y $1,100 MXN, seguimiento mensual entre $550 y $900 MXN.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar',   value: '12+' },
      { label: 'Fisioterapia deportiva', value: '$450–$1,000 MXN' },
      { label: 'Masaje terapéutico',     value: '$450–$900 MXN' },
      { label: 'Nutrición deportiva',    value: '$700–$1,100 MXN consulta' },
    ],
    barrios: [
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
      { name: 'Del Valle Sur',     slug: 'del-valle-sur',     district: 'benito-juarez' },
      { name: 'Nápoles',           slug: 'napoles',           district: 'benito-juarez' },
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
