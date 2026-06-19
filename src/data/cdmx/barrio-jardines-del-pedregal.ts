// src/data/cdmx/barrio-jardines-del-pedregal.ts
// Draft – lastReviewed: 2026-06-21

export const barrioContent = {
  nombre: 'Jardines del Pedregal',
  slug: 'jardines-del-pedregal',
  group: 'B',
  parentDistrict: {
    nombre: 'Álvaro Obregón',
    slug: 'alvaro-obregon',
  },
  lastReviewed: '2026-06-21',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Jardines del Pedregal es uno de los barrios más exclusivos del sur del DF, güey — residencias sobre roca volcánica del Pedregal de San Ángel, calles arboladas y nivel socioeconómico ABC+ sin disculpas. El Periférico Sur marca el límite oriente y divide el barrio de Coyoacán con una frontera de tráfico que en horas pico es absoluta. La cercanía con la Reserva Ecológica del Pedregal de la UNAM le da al barrio un aire de quietud que pocas zonas del CDMX pueden sostener. El mercado fitness aquí es ahorita uno de los más seleccionados de la ciudad: pocos establecimientos, todos de nivel alto, con fuerte predominio del personal training a domicilio. Los residentes ABC+ no buscan el Smart Fit — buscan el entrenador que llega a las 6am con equipo propio y factura en serio. Los gymns que sobreviven en el perímetro son los que entendieron ese perfil. Es un barrio donde la calidad de vida se nota en cada esquina.

Para el vecino de Jardines del Pedregal que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Jardines del Pedregal en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Jardines del Pedregal',
    metaDesc: 'Gimnasios en Jardines del Pedregal, CDMX: opciones ABC+ de $2,000 a $4,500 MXN/mes. Av. de las Fuentes, Periférico Sur. Guía 2026.',
    intro: `Jardines del Pedregal tiene alrededor de 6 a 8 gimnasios dentro y en el perímetro inmediato del barrio — una densidad muy baja para una zona de este tamaño, y eso es intencional, güey. El perfil socioeconómico ABC+ del barrio no genera demanda de cadenas de volumen: genera demanda de personal training privado, acceso a instalaciones de alto nivel y membresías que no se comparten con desconocidos. El resultado es un mercado pequeño, seleccionado y con precios que arrancan donde otros barrios terminan.

El rango de membresía mensual va de $2,000 a $4,500 MXN para los gymns establecidos en la zona. Los servicios de personal training — que es ahorita el verdadero motor del fitness aquí — van de $500 a $1,200 MXN por sesión según el entrenador y la especialización. Muchos de los mejores PTs del poniente operan sobre Jardines del Pedregal con agenda completa: su clientela son ejecutivos, profesionistas y familias que priorizan la atención individualizada sobre el costo.

Sobre Av. de las Fuentes hay establecimientos que combinan sala de musculación con clases boutique para residentes — sin el ruido de las cadenas de volumen. El acceso en coche es la opción real: el transporte público llega al perímetro pero no penetra el interior con la frecuencia que haría viable depender de él. Estacionamiento en los gymns establecidos: generalmente resuelto, sin el drama de Condesa o Roma.`,
    faq: [
      {
        q: '¿Por qué hay tan pocos gymns en Jardines del Pedregal si es una zona tan grande?',
        a: 'El modelo fitness del barrio es diferente al del resto del CDMX, güey. El perfil ABC+ de los residentes prefiere personal training a domicilio o en instalaciones privadas sobre la membresía de gym compartido. Un PT que llega a las 6am con equipo propio es el estándar aquí, no la excepción. Los gymns que operan en el barrio son los que entendieron que su cliente no busca volumen ni precio bajo — busca atención exclusiva y discreción. Ese mercado soporta pocos establecimientos pero todos con márgenes chidos.',
      },
      {
        q: '¿Cuánto cuesta el personal training en Jardines del Pedregal?',
        a: 'Ahorita el rango va de $500 a $1,200 MXN por sesión según el entrenador, la especialización y si el servicio es a domicilio o en instalación. Los PTs más solicitados del barrio tienen agenda completa y trabajan por referidos — no se anuncian en aplicaciones de descuento. Para encontrar un buen PT en la zona, la recomendación directa de vecino a vecino sigue siendo el canal que funciona. El costo anual con sesiones 3 veces por semana está fácilmente entre $80,000 y $180,000 MXN.',
      },
      {
        q: '¿Puedo llegar a los gymns de Jardines del Pedregal en transporte público?',
        a: 'Con dificultad real. El interior del barrio no tiene cobertura de Metrobús ni Metro caminable — el Metrobús Línea 1 pasa sobre Insurgentes Sur que es la frontera oriente, y desde ahí al corazón de Jardines del Pedregal hay entre 15 y 25 minutos caminando según el punto exacto. En coche es la opción honesta para la mayoría de los gymns en la zona. Si vienes desde Coyoacán o Santa Fe, el acceso por Periférico Sur funciona bien fuera de horas pico.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Jardines del Pedregal tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Jardines del Pedregal suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~6–8' },
      { label: 'Membresía mensual', value: '$2,000–$4,500 MXN' },
      { label: 'Calle clave',       value: 'Av. de las Fuentes · Periférico Sur' },
      { label: 'PT por sesión',     value: '$500–$1,200 MXN' },
    ],
    barrios: [
      { name: 'San Ángel',          slug: 'san-angel',          district: 'alvaro-obregon' },
      { name: 'Santa Fe AO',        slug: 'santa-fe-ao',        district: 'alvaro-obregon' },
      { name: 'Coyoacán Centro',    slug: 'coyoacan-centro',    district: 'coyoacan' },
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
    h1: 'Estudios fitness en Jardines del Pedregal',
    metaDesc: 'Estudios en Jardines del Pedregal, CDMX: pilates, yoga y funcional premium de $350 a $700 MXN/clase. Guía 2026.',
    intro: `Los estudios boutique de Jardines del Pedregal operan en un registro diferente al de Roma Norte o Condesa, güey — menos visibilidad en redes, más lista de espera real. El perfil del barrio genera demanda de estudios privados o semi-privados donde el grupo reducido no es un atributo de marketing sino el modo de operación estándar. Pilates en máquina con instructor dedicado, yoga para grupos de 4 a 8 personas, funcional con periodización individualizada: ese es el menú que ahorita domina la escena boutique local.

El precio de clase suelta en estudios de Jardines del Pedregal va de $350 a $700 MXN — consistentemente el rango más alto del poniente del CDMX. La justificación real detrás del precio es el ratio instructor-alumno: un estudio de pilates que limita el grupo a 4 personas en Reformer no puede cobrar lo mismo que un boutique de 20 alumnos en Condesa. Para quien busca atención real y corrección técnica genuina, ese precio es honesto.

Los estudios más chidos del barrio no tienen presencia fuerte en Google Maps o redes — operan por referidos y con clientela estable que no rota mucho. La forma de acceder a ellos es preguntar directamente a residentes del barrio o a los PTs locales que conocen el ecosistema. El resultado cuando lo encuentras: instalaciones impecables, instructoras con años en la misma metodología y un ambiente donde no hay prisa ni competencia por el espacio en el mat.`,
    faq: [
      {
        q: '¿Los estudios de Jardines del Pedregal tienen lista de espera?',
        a: 'Los más solicitados, sí. Los estudios de pilates en Reformer con grupos de 4 personas y alta reputación local manejan lista de espera de 2 a 6 semanas para nuevos alumnos — especialmente en los horarios de 7am a 9am que prefiere la clientela ABC+. La recomendación práctica: contactar directamente al estudio con anticipación y preguntar por horarios menos demandados como mediodía o primera tarde. La flexibilidad en el horario reduce el tiempo de espera a días en lugar de semanas.',
      },
      {
        q: '¿Vale la pena pagar $500 MXN por clase de pilates en Jardines del Pedregal?',
        a: 'Depende de lo que busques, güey. Si el grupo es de 3-4 personas en Reformer con instructora que corrige postura continuamente, ese precio es defendible — estás pagando atención real, no un lugar en una sala de 20. Si el estudio cobra $500 MXN y mete 12 personas en la clase, el precio no tiene justificación técnica. La pregunta que hay que hacer antes de inscribirse: ¿cuántos alumnos máximo por clase? La respuesta te dice todo sobre si el precio es honesto.',
      },
      {
        q: '¿Hay estudios de yoga accesibles cerca de Jardines del Pedregal?',
        a: 'Ahorita los estudios de yoga más accesibles en precio están sobre la frontera con San Ángel — sobre Insurgentes Sur hay opciones de $200 a $350 MXN por clase que son perfectamente válidas para práctica regular. Dentro de Jardines del Pedregal el yoga tiende a estar integrado en estudios holísticos con clases privadas o semi-privadas a precios de $400 a $650 MXN. Para quien quiere práctica grupal estándar sin el precio premium, la frontera de San Ángel sobre Insurgentes Sur es la zona donde el precio-calidad se equilibra mejor.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios activos',   value: '~4–6' },
      { label: 'Clase suelta',       value: '$350–$700 MXN' },
      { label: 'Formato dominante',  value: 'Pilates · Reformer privado' },
      { label: 'Grupos máx.',        value: '4–8 alumnos' },
    ],
    barrios: [
      { name: 'San Ángel',          slug: 'san-angel',          district: 'alvaro-obregon' },
      { name: 'Santa Fe AO',        slug: 'santa-fe-ao',        district: 'alvaro-obregon' },
      { name: 'Coyoacán Centro',    slug: 'coyoacan-centro',    district: 'coyoacan' },
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
    h1: 'Entrenadores personales en Jardines del Pedregal',
    metaDesc: 'Personal trainers en Jardines del Pedregal, CDMX: PTs ABC+ con certificación real, $500–$1,200 MXN/sesión. Guía 2026.',
    intro: `El personal training en Jardines del Pedregal es ahorita el eje del mercado fitness del barrio, no un servicio complementario. El modelo predominante: el entrenador llega al domicilio del cliente con equipo portátil — mancuernas ajustables, TRX, bandas de resistencia, foam roller — y trabaja en el jardín, el garage adaptado o el cuarto de ejercicio de la residencia. Es el formato más chido para quien no quiere invertir tiempo en traslado y prefiere la privacidad de su propio espacio.

Los mejores PTs de la zona tienen certificaciones verificables — NASM, ACE, NSCA — con especialización en uno o dos dominios reales: hipertrofia, rehabilitación post-lesión, entrenamiento para adultos mayores, rendimiento deportivo. No es el universo de coaches autodidactas que domina plataformas de redes sociales; aquí la clientela ABC+ exige credenciales y trackrecord concreto. Un PT que trabaja en Jardines del Pedregal y lleva 5+ años en el barrio tiene referencias de primera mano que pesan más que cualquier certificado.

El esquema de contratación más común es el paquete mensual de 12 sesiones — 3 por semana — con precio que va de $6,000 a $14,400 MXN según el perfil del entrenador. Los PTs más solicitados no negocian precio y tienen lista de espera. Para encontrar un buen match, la recomendación local directa sigue siendo el canal más efectivo: preguntar a vecinos del barrio o a los administradores de los gymns de la zona que conocen el ecosistema de PTs activos.`,
    faq: [
      {
        q: '¿Cómo encuentro un buen PT en Jardines del Pedregal si no aparecen en Google?',
        a: 'Los mejores PTs de Jardines del Pedregal trabajan por referidos y no necesitan presencia digital activa — su agenda se llena por recomendación de cliente a cliente. El camino más directo: preguntar en los gymns del perímetro (sobre todo los que tienen buena reputación en la zona), en grupos de WhatsApp de residentes del barrio, o a instructoras de los estudios boutique locales. En ese ecosistema todos se conocen y la recomendación directa es más confiable que una búsqueda en redes.',
      },
      {
        q: '¿Qué esperar de una sesión de PT a domicilio en Jardines del Pedregal?',
        a: 'Ahorita el estándar de los PTs más chidos del barrio incluye evaluación inicial real — postura, movilidad, historial de lesiones — antes de la primera sesión de entrenamiento. El programa debe ser periodizado con progresión semanal documentada, no improvisado sesión a sesión. El PT llega con su propio equipo portátil y adapta el trabajo al espacio disponible. Si el entrenador no hace evaluación inicial y empieza a entrenar en la primera sesión sin conocer tu historial, eso ya te dice algo.',
      },
      {
        q: '¿Los PTs de Jardines del Pedregal trabajan también con adultos mayores?',
        a: 'Varios de los entrenadores más establecidos del barrio tienen especialización real en trabajo con adultos mayores — equilibrio, prevención de caídas, movilidad funcional, fuerza adaptada. Es uno de los perfiles de demanda más altos en el barrio dado el rango de edad de los residentes. Al buscar un PT para adulto mayor, hay que confirmar específicamente que tiene experiencia documentada en ese perfil, no solo que "trabaja con todas las edades". La diferencia entre los que tienen la especialización y los que no se nota desde la primera sesión.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'PTs activos zona',   value: '~20–30' },
      { label: 'Sesión individual',  value: '$500–$1,200 MXN' },
      { label: 'Paquete mensual',    value: '$6,000–$14,400 MXN' },
      { label: 'Formato dominante',  value: 'A domicilio con equipo propio' },
    ],
    barrios: [
      { name: 'San Ángel',          slug: 'san-angel',          district: 'alvaro-obregon' },
      { name: 'Santa Fe AO',        slug: 'santa-fe-ao',        district: 'alvaro-obregon' },
      { name: 'Coyoacán Centro',    slug: 'coyoacan-centro',    district: 'coyoacan' },
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
    h1: 'Eventos fitness en Jardines del Pedregal',
    metaDesc: 'Eventos fitness en Jardines del Pedregal, CDMX: workshops, retiros y clínicas especializadas para perfil ABC+. Guía 2026.',
    intro: `La escena de eventos fitness en Jardines del Pedregal es pequeña y selectiva — refleja el carácter del barrio. No hay carreras de 5K masivas ni festivales de yoga en parque público: los eventos que se organizan aquí son workshops privados en estudios locales, retiros de fin de semana con cupo limitado y clínicas especializadas donde el grupo no supera las 15 personas. Es el formato que funciona para una clientela que valora la exclusividad real sobre la experiencia de masa.

Los workshops más frecuentes giran en torno a pilates avanzado, movilidad y recuperación, nutrición aplicada al rendimiento y mindfulness en formato no espiritual — herramientas prácticas de regulación del sistema nervioso para profesionistas de alto estrés. El precio va de $800 a $2,500 MXN por persona según el formato y la duración, y los cupos se llenan rápido entre la red de contactos local.

Los retiros de fin de semana vinculados al barrio — generalmente con salida a Valle de Bravo, Tepoztlán o Malinalco — tienen una presencia fuerte en el perfil de los residentes de Jardines del Pedregal. El organizador suele ser un PT o instructora del barrio que lleva a su clientela habitual: 8 a 12 personas, alojamiento de nivel, programa estructurado de movimiento y recuperación. Para acceder a estos retiros, la conexión con los profesionales locales es ahorita el único canal real — no están en plataformas públicas de eventos.`,
    faq: [
      {
        q: '¿Hay eventos fitness abiertos al público en Jardines del Pedregal?',
        a: 'Muy pocos, güey — el carácter cerrado del barrio se refleja en su escena de eventos. Los workshops y clínicas que se organizan son principalmente para clientela existente de los estudios y PTs locales. Para acceder a eventos como externo, la mejor estrategia es contactar directamente a los estudios boutique del barrio y preguntar por su calendario de eventos abiertos. Algunos organizan ocasionalmente workshops de introducción a disciplinas específicas que son accesibles para personas nuevas.',
      },
      {
        q: '¿Cómo me entero de los retiros fitness organizados desde Jardines del Pedregal?',
        a: 'Ahorita la mayoría de los retiros se comunican por WhatsApp entre la clientela existente de PTs e instructoras locales. Si ya tienes relación con un entrenador o estudio del barrio, pide que te incluyan en su grupo de novedades o lista de retiros. Si eres nuevo en la zona, el camino es primero establecer relación con un profesional del barrio a través de sesiones regulares — el acceso a los retiros viene después. No hay plataforma pública donde aparezcan listados de forma consistente.',
      },
      {
        q: '¿Los eventos de Jardines del Pedregal son exclusivos para residentes?',
        a: 'No formalmente — no hay restricción de residencia — pero en la práctica la mayoría de los cupos se llenan entre la red de contactos del organizador antes de que el evento sea comunicado públicamente. Es exclusividad de red, no de barrio. Si vienes de San Ángel, Santa Fe o Coyoacán y tienes conexión con un profesional local, el acceso es real. El filtro real es tener relación previa con alguien del ecosistema, no vivir en el barrio.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Tipo dominante',     value: 'Workshop privado · Retiro' },
      { label: 'Cupo típico',        value: '8–15 personas' },
      { label: 'Precio evento',      value: '$800–$2,500 MXN' },
      { label: 'Canal de acceso',    value: 'Red de contactos directa' },
    ],
    barrios: [
      { name: 'San Ángel',          slug: 'san-angel',          district: 'alvaro-obregon' },
      { name: 'Santa Fe AO',        slug: 'santa-fe-ao',        district: 'alvaro-obregon' },
      { name: 'Coyoacán Centro',    slug: 'coyoacan-centro',    district: 'coyoacan' },
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
    h1: 'Bienestar en Jardines del Pedregal',
    metaDesc: 'Bienestar en Jardines del Pedregal, CDMX: masajes, nutrición y recuperación de $900 a $2,800 MXN/sesión. Guía 2026.',
    intro: `El mercado de bienestar en Jardines del Pedregal es ahorita uno de los más completos y caros del poniente del CDMX — reflejo directo del poder adquisitivo ABC+ del barrio y de la integración real entre fitness, nutrición y recuperación. No estamos hablando de spas de hotel genéricos: el ecosistema local incluye consultorios de nutrición deportiva, servicios de fisioterapia domiciliaria, masaje terapéutico de nivel clínico y programas de recuperación diseñados para profesionistas de alto rendimiento.

Los servicios de masaje y recuperación van de $900 a $2,800 MXN por sesión según la especialización y el formato — domiciliario o en consultorio. Los masajistas terapéuticos más solicitados de Jardines del Pedregal trabajan por referidos con agenda llena: deportivo, miofascial, drenaje linfático y técnicas de recuperación post-entrenamiento intensivo. El modelo domiciliario es predominante, especialmente para residentes con poco tiempo libre que prefieren la recuperación en su propio espacio.

La nutrición es el complemento más buscado después del PT — y el barrio tiene nutriólogos deportivos con práctica real que trabajan con protocolos individualizados, no con planes genéricos descargados de internet. El precio de consulta va de $1,200 a $2,500 MXN para la primera sesión con evaluación completa; el seguimiento mensual está entre $2,000 y $4,000 MXN. Para quien busca integrar entrenamiento, alimentación y recuperación en un solo sistema coherente, Jardines del Pedregal tiene los profesionales que pueden sostenerlo — si tienes el presupuesto y la red de contactos para llegar a ellos.`,
    faq: [
      {
        q: '¿Hay fisioterapeutas que vayan a domicilio en Jardines del Pedregal?',
        a: 'Sí, y es uno de los servicios más demandados del barrio. Los fisioterapeutas que atienden domicilio en Jardines del Pedregal trabajan mayoritariamente por referidos con clientela estable — lesiones deportivas, post-quirúrgicos, dolor crónico de espalda y recuperación funcional. El precio va de $1,200 a $2,000 MXN por sesión domiciliaria según la especialización. Para encontrarlos, la ruta más directa es preguntar al PT local o al estudio de pilates de confianza — el ecosistema de profesionales se conoce bien.',
      },
      {
        q: '¿Vale la pena contratar nutriólogo deportivo en Jardines del Pedregal?',
        a: 'Si entrenas con seriedad y no estás viendo los resultados esperados a pesar de la constancia, sí, güey — un nutriólogo deportivo con práctica real puede identificar en 2-3 sesiones dónde está el cuello de botella. La diferencia entre un nutriólogo genérico y uno deportivo está en la periodización de la alimentación según el ciclo de entrenamiento: no es solo "come más proteína". Los que trabajan en la zona tienen experiencia con clientela de alto rendimiento amateur y ejecutivos de alto estrés — dos perfiles muy distintos que requieren abordajes diferentes.',
      },
      {
        q: '¿Dónde puedo encontrar masaje terapéutico de nivel real en Jardines del Pedregal?',
        a: 'Ahorita los mejores masajistas terapéuticos de la zona no tienen página web actualizada ni presencia fuerte en Google Maps — operan por recomendación directa con clientela fija. La ruta más efectiva: preguntar en los estudios de pilates o yoga del barrio y a los PTs locales. Ellos conocen qué profesionales tienen técnica real para recuperación post-entrenamiento versus quienes hacen masaje de relajación estándar. La distinción importa especialmente para trabajo miofascial o de puntos gatillo donde la técnica incorrecta puede empeorar el problema.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Masaje terapéutico', value: '$900–$2,800 MXN/sesión' },
      { label: 'Consulta nutrición', value: '$1,200–$2,500 MXN' },
      { label: 'Fisio domiciliaria', value: '$1,200–$2,000 MXN/sesión' },
      { label: 'Formato dominante',  value: 'Servicio privado a domicilio' },
    ],
    barrios: [
      { name: 'San Ángel',          slug: 'san-angel',          district: 'alvaro-obregon' },
      { name: 'Santa Fe AO',        slug: 'santa-fe-ao',        district: 'alvaro-obregon' },
      { name: 'Coyoacán Centro',    slug: 'coyoacan-centro',    district: 'coyoacan' },
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
