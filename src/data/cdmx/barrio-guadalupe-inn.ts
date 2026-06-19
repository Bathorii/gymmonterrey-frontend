// src/data/cdmx/barrio-guadalupe-inn.ts
// Draft – lastReviewed: 2026-06-29

export const barrioContent = {
  nombre: 'Guadalupe Inn',
  slug: 'guadalupe-inn',
  group: 'C',
  parentDistrict: {
    nombre: 'Álvaro Obregón',
    slug: 'alvaro-obregon',
  },
  lastReviewed: '2026-06-29',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Guadalupe Inn es el barrio que trabaja, entrena y no hace mucho ruido, güey. Sobre Insurgentes Sur y sus paralelas — Guadalupe Inn, Revolución — hay una clase media estable que lleva años construyendo rutina de gym sin drama ni aspiraciones de cambiar de código postal. El acceso al Metro Barranca del Muerto lo hace uno de los barrios de Álvaro Obregón con mejor conectividad, y eso se traduce en gimnasios que llenan desde las 6am con gente que viene de trabajar en la zona o en Periférico. La oferta fitness aquí es NSE C+ real: no boutique de lujo ni gym de cadena sin mantenimiento. El punto medio está bien representado — espacios completos, equipo en estado decente, coaches que se quedan varios años. Para quien vive sobre Insurgentes Sur al sur de Barranca del Muerto, Guadalupe Inn es la opción lógica antes de irse hasta San

Para el vecino de Guadalupe Inn que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Guadalupe Inn en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Guadalupe Inn — fitness NSE C+ y metro accesible 2026',
    metaDesc: 'Gimnasios en Guadalupe Inn, CDMX: ~10 opciones de $800 a $1,800 MXN/mes. Insurgentes Sur, Revolución. Clase media estable, metro Barranca del Muerto. Guía 2026.',
    intro: `Guadalupe Inn tiene alrededor de 10 gimnasios y espacios de fitness, una cifra razonable para un barrio de clase media consolidada. La concentración mayor está sobre Insurgentes Sur y Av. Revolución, con algunos gimnasios de tamaño mediano que llevan abiertos más de 8 años — señal de clientela estable y rotación baja. El Metro Barranca del Muerto es el eje que define el tráfico: muchos socios llegan en metro desde el centro o desde el sur y el barrio los capta de regreso a casa.

El rango de precios va de $800 a $1,800 MXN al mes, con la mayoría de las opciones completas entre $900 y $1,400 MXN. Para ese precio encuentras salas con pesas libres decentes, área cardiovascular funcional y clases de grupo incluidas en la membresía — no hay nada que pagar aparte salvo la inscripción inicial de $400 a $600 MXN. El perfil del socio es clase media con rutina consolidada: no busca lo más nuevo del mercado, busca que el gym funcione y esté cerca.

Lo que diferencia a Guadalupe Inn de barrios más aspiracionales es la honestidad del equipamiento. No van a encontrar pantallas LED en las caminadoras ni app propia del gym, pero los pesos libres están completos, los cables están bien calibrados y las clases de aerobics o zumba tienen instructor presencial. Para el resultado práctico de entrenar 3-4 días por semana, esta zona cubre perfectamente sin cobrar lo que no necesita.`,
    faq: [
      {
        q: '¿Cuánto cuesta una membresía de gimnasio en Guadalupe Inn?',
        a: 'Una membresía mensual completa en Guadalupe Inn va de $800 a $1,800 MXN, con la mayoría de las opciones funcionales entre $900 y $1,400 MXN. La inscripción inicial está generalmente entre $400 y $600 MXN. Para esa inversión obtienes acceso ilimitado a sala de pesas, área cardiovascular y clases de grupo incluidas. Algunos gimnasios tienen planes de 3 o 6 meses con descuento de 10-15% sobre el precio mensual. Comparado con San Ángel o Pedregal, el mismo tipo de gimnasio puede costar 15-20% más — Guadalupe Inn tiene una ecuación precio-calidad sólida para NSE C+.',
      },
      {
        q: '¿Es fácil llegar a los gimnasios de Guadalupe Inn en metro?',
        a: 'Sí, güey — esa es una de las ventajas más concretas del barrio. El Metro Barranca del Muerto (Línea 7) está bien conectado con el resto de CDMX y varios gimnasios sobre Insurgentes Sur quedan a 5-10 minutos caminando de la estación. Para quienes trabajan en el corredor de Insurgentes y viven más al sur, Guadalupe Inn es un punto de parada natural antes de llegar a casa. El tráfico vehicular sobre Insurgentes Sur en horas pico es complicado, pero en metro el acceso es confiable.',
      },
      {
        q: '¿Hay clases de funcional o crosstraining en Guadalupe Inn?',
        a: 'Ahorita hay algunos espacios de funcional en Guadalupe Inn, aunque no con la concentración que encuentras en zonas como San Ángel o Condesa. Los gymns sobre Revolución y Guadalupe Inn tienen áreas de funcional básico integradas en el gym general — no son boxes independientes. Una clase suelta de funcional o crosstraining va de $120 a $200 MXN; los planes mensuales específicos de funcional de $1,200 a $1,600 MXN. Si buscas programación periodizada avanzada y comunidad de crossfit, es posible que tengas que moverse a San Ángel o Pedregal para encontrar boxes más especializados.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Guadalupe Inn tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Guadalupe Inn suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~10' },
      { label: 'Membresía mensual', value: '$800–$1,800 MXN' },
      { label: 'Referente',         value: 'Insurgentes Sur / Barranca del Muerto' },
      { label: 'NSE',               value: 'C+' },
    ],
    barrios: [
      { name: 'San Ángel',                  slug: 'san-angel',                  district: 'alvaro-obregon' },
      { name: 'Las Águilas',                slug: 'las-aguilas',                district: 'alvaro-obregon' },
      { name: 'Jardines del Pedregal',      slug: 'jardines-del-pedregal',      district: 'alvaro-obregon' },
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
    h1: 'Estudios boutique en Guadalupe Inn',
    metaDesc: 'Estudios boutique en Guadalupe Inn, CDMX: pilates, yoga y funcional de $130 a $280 MXN/clase. Revolución, Guadalupe Inn. Guía real 2026.',
    intro: `La oferta de estudios boutique en Guadalupe Inn es más discreta que en San Ángel o Pedregal, pero hay opciones sólidas para quien prioriza la cercanía y el precio sobre el branding. Los estudios de pilates sobre Revolución y Calle Guadalupe Inn trabajan con grupos de 6-12 personas, instructoras certificadas con varios años en el mismo espacio y una relación precio-calidad que no encuentras más al norte sobre Insurgentes.

El yoga en la zona tiene un perfil práctico: clases de Hatha y flujo con énfasis en postura y respiración, sin el componente aspiracional de algunos estudios de Condesa o Roma. Los alumnos son vecinos del barrio que llevan meses o años asistiendo — la rotación es baja y el nivel del grupo sube con el tiempo. Una clase suelta va de $130 a $250 MXN, y los planes mensuales de clases ilimitadas están entre $1,400 y $2,000 MXN.

Para quien busca Reformer de pilates, la densidad es menor que en zonas más premium, pero hay opciones funcionales con máquinas en buen estado y grupos pequeños. Ahorita la demanda de Reformer en NSE C+ está creciendo en toda la ciudad y Guadalupe Inn empieza a tener representación real — el precio de entrada es más accesible que en San Ángel con calidad comparable para practicantes de nivel básico a intermedio.`,
    faq: [
      {
        q: '¿Cuánto cuesta una clase de pilates en Guadalupe Inn?',
        a: 'Una clase de pilates en Guadalupe Inn — ya sea mat o Reformer — va de $130 a $280 MXN suelta. Los planes mensuales ilimitados están entre $1,400 y $2,000 MXN según el tipo de clase. El Reformer es el más caro dentro del rango porque el mantenimiento del equipo es mayor; el mat es el punto de entrada más accesible. Frente a los estudios sobre Insurgentes más al norte, en San Ángel o Pedregal, el mismo tipo de clase puede costar 15-25% más. Para practicantes regulares que hacen 3-4 clases por semana, el ahorro anual en Guadalupe Inn es concreto.',
      },
      {
        q: '¿Los estudios de Guadalupe Inn son adecuados para principiantes?',
        a: '¡Sí, güey! La mayoría de los estudios de la zona reciben principiantes y tienen grupos nivelados. Las instructoras de pilates hacen evaluación básica en la primera clase para ubicarte en el grupo correcto — nivel principiante, intermedio o avanzado. Para yoga, hay clases específicas para quienes nunca han practicado, con énfasis en alineación y respiración antes de entrar a secuencias más exigentes. No vas a sentirte fuera de lugar si llegas sin experiencia; el ambiente es vecinal y sin pretensiones.',
      },
      {
        q: '¿Hay estudios de meditación o mindfulness en Guadalupe Inn?',
        a: 'La oferta de meditación independiente es limitada en Guadalupe Inn, pero algunos estudios de yoga integran sesiones de meditación guiada al final de las clases o como clase separada los fines de semana. El precio de sesiones de meditación integradas en un plan de yoga es sin costo adicional; las sesiones independientes de mindfulness o meditación vipassana suelen ser de $150 a $250 MXN. Si buscas un centro de meditación dedicado, San Ángel o Coyoacán tienen opciones más especializadas a 15-20 minutos.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~5' },
      { label: 'Clase suelta',      value: '$130–$280 MXN' },
      { label: 'Mensual ilimitado', value: '$1,400–$2,000 MXN' },
      { label: 'Especialidad',      value: 'Pilates mat / Yoga' },
    ],
    barrios: [
      { name: 'San Ángel',                  slug: 'san-angel',                  district: 'alvaro-obregon' },
      { name: 'Las Águilas',                slug: 'las-aguilas',                district: 'alvaro-obregon' },
      { name: 'Jardines del Pedregal',      slug: 'jardines-del-pedregal',      district: 'alvaro-obregon' },
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
    h1: 'Entrenadores personales en Guadalupe Inn',
    metaDesc: 'Entrenadores personales en Guadalupe Inn, CDMX: PT de $400 a $750 MXN/sesión. Insurgentes Sur, Revolución. Clase media, resultado real. Guía 2026.',
    intro: `El personal training en Guadalupe Inn tiene una lógica muy clara: entrenadores con experiencia real, certificaciones reconocidas y precios acordes al NSE C+ del barrio. Sobre Insurgentes Sur y Revolución trabaján PT independientes y trainers contratados por los gymns de la zona que cobran de $400 a $750 MXN por sesión — 20-30% por debajo del equivalente en San Ángel o Pedregal.

El perfil del cliente en Guadalupe Inn es adulto de 30-55 años con objetivos concretos: bajar peso, mejorar postura, recuperarse de alguna lesión crónica de espalda o rodilla. Los entrenadores que llevan en la zona más de 3 años conocen bien este perfil y trabajan con metodología orientada a resultados prácticos, no a estética de redes sociales. Las sesiones son individuales o en pareja, con progresión documentada semana a semana.

Los paquetes de 8 o 12 sesiones son el formato más común en la zona — $2,800 a $7,000 MXN según la cantidad y el nivel de especialización del entrenador. Muchos PT de Guadalupe Inn hacen diagnóstico de movimiento gratuito en la primera sesión para definir el plan antes de que el cliente pague un paquete. Ahorita es el momento de cerrar precio antes del regreso masivo de septiembre, cuando la demanda sube y algunos trainers ajustan tarifas.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Guadalupe Inn?',
        a: 'Una sesión de PT en Guadalupe Inn va de $400 a $750 MXN según experiencia y especialización del entrenador. Los paquetes de 8 sesiones están entre $2,800 y $5,000 MXN; los de 12 sesiones de $3,600 a $7,000 MXN, con descuento de 15-20% sobre el precio individual. Si el entrenamiento es a domicilio o en espacio externo, hay cargo adicional de $80 a $150 MXN por desplazamiento. Frente a San Ángel o Pedregal, donde el PT certificado arranca en $600 MXN, la zona ofrece precio más accesible con nivel de calidad comparable.',
      },
      {
        q: '¿Cómo sé si un entrenador en Guadalupe Inn está realmente certificado?',
        a: 'Pedí ver el certificado físico o digital antes de contratar — los entrenadores serios los tienen disponibles sin problema. Las certificaciones reconocidas son NSCA-CPT, NASM-CPT, ACSM y las de la Escuela del Deporte de la UNAM o equivalentes mexicanas acreditadas. Una "certificación en línea de fin de semana" sin examen proctored y sin requisitos de renovación no tiene el mismo peso. También verificá si el entrenador tiene seguro de responsabilidad civil — no todos lo tienen, pero es señal de profesionalismo. En gymns establecidos de la zona, los trainers que trabajan en piso ya pasaron un proceso mínimo de selección.',
      },
      {
        q: '¿Hay entrenadores especializados en adultos mayores o rehabilitación en Guadalupe Inn?',
        a: '¡Ahorita sí, güey! Dado el perfil etario del barrio, hay entrenadores en Guadalupe Inn con experiencia en trabajo con adultos de 50+ y en adaptación de ejercicio post-lesión o post-cirugía. Los gymns sobre Insurgentes Sur y Revolución tienen trainers que coordinan con fisioterapeutas del área y diseñan programas de fuerza funcional para personas con limitaciones articulares. La sesión va a un ritmo diferente — más progresiva, con más énfasis en movilidad y estabilidad — pero el objetivo de mejorar calidad de vida con ejercicio es completamente alcanzable en cualquier edad.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$400–$750 MXN' },
      { label: 'Paquete 8 sesiones',  value: '$2,800–$5,000 MXN' },
      { label: 'Vs. San Ángel',       value: '20-30% más accesible' },
      { label: 'Perfil cliente',      value: 'Adulto 30-55 / objetivos prácticos' },
    ],
    barrios: [
      { name: 'San Ángel',                  slug: 'san-angel',                  district: 'alvaro-obregon' },
      { name: 'Las Águilas',                slug: 'las-aguilas',                district: 'alvaro-obregon' },
      { name: 'Jardines del Pedregal',      slug: 'jardines-del-pedregal',      district: 'alvaro-obregon' },
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
    h1: 'Eventos fitness en Guadalupe Inn — talleres y retos comunidad 2026',
    metaDesc: 'Eventos fitness en Guadalupe Inn, CDMX: talleres y retos de $0 a $450 MXN. Insurgentes Sur, Revolución. Comunidad local activa. Guía 2026.',
    intro: `Guadalupe Inn no tiene el calendario de eventos fitness de zonas más aspiracionales, pero lo que organiza es consistente y sin costo inflado. Los gymns sobre Insurgentes Sur hacen retos trimestrales internos — pérdida de peso, resistencia cardiovascular, fuerza máxima — con tablero de seguimiento en el local y reconocimiento para los participantes más constantes. Sin patrocinadores externos, sin entrada cara: comunidad que se conoce y compite entre sí.

Los estudios de pilates y yoga de la zona organizan talleres de técnica semestrales — 2 a 3 horas de profundización en respiración, movilidad o corrección postural — a precios de $200 a $450 MXN, con descuento o entrada gratuita para socios activos. El formato funciona porque los grupos son pequeños y el instructor puede dar atención individual durante el taller.

Para eventos al aire libre, el acceso al Bosque de Pedregal y a los parques sobre Revolución da opción de clases de yoga matutino o grupos de caminata organizados por los mismos gymns. Ahorita el ecosistema de eventos en Guadalupe Inn está creciendo despacio pero de manera consistente — más vecinos que descubren el fitness y buscan actividades más allá de la membresía regular del gym. El acceso desde Metro Barranca del Muerto facilita la participación de residentes de toda la alcaldía.`,
    faq: [
      {
        q: '¿Hay grupos de running en Guadalupe Inn?',
        a: 'Hay algunos grupos de running informales que salen desde los gymns de Insurgentes Sur y Revolución, generalmente los sábados entre 7 y 9am. El recorrido habitual va hacia el Bosque de Pedregal o por las calles internas del barrio — trayectos de 5 a 10km según el grupo. La información de estos grupos se maneja por WhatsApp del gym o por Instagram, así que lo más directo es preguntarle al gym que te interese si tienen grupo activo de running. No es una escena tan organizada como en Condesa o Polanco, pero funciona para quien quiere compañía para sus entrenos de calle.',
      },
      {
        q: '¿Los eventos de los gimnasios de Guadalupe Inn son solo para socios?',
        a: 'Depende del evento, güey. Los retos internos de los gymns suelen ser exclusivos para socios activos — la idea es generar comunidad entre quienes ya están comprometidos con el espacio. Los talleres de estudios boutique frecuentemente están abiertos al público externo con cupo limitado, especialmente cuando el objetivo es captar nuevos alumnos. Las clases de yoga al aire libre ocasionales suelen ser abiertas y gratuitas. Lo más práctico es seguir los Instagram de los espacios que te interesan y preguntar directamente cuando veas anuncio de un evento.',
      },
      {
        q: '¿Hay eventos de nutrición o salud integral en Guadalupe Inn?',
        a: 'Ahorita hay charlas y talleres de nutrición que algunos gymns de la zona organizan con nutriólogos locales — generalmente de 1 a 2 horas, gratuitas para socios o con costo de $150 a $300 MXN para externos. Los temas más comunes son lectura de etiquetas, alimentación para entrenamiento de fuerza y manejo de peso sin dieta restrictiva. Estos eventos se anuncian con poca anticipación, así que la forma más confiable de enterarse es siendo socio del gym o teniendo activadas las notificaciones de su Instagram.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Retos internos',    value: 'Trimestrales' },
      { label: 'Precio taller',     value: '$200–$450 MXN' },
      { label: 'Running grupos',    value: 'Sábados 7-9am' },
      { label: 'Outdoor cercano',   value: 'Bosque de Pedregal' },
    ],
    barrios: [
      { name: 'San Ángel',                  slug: 'san-angel',                  district: 'alvaro-obregon' },
      { name: 'Las Águilas',                slug: 'las-aguilas',                district: 'alvaro-obregon' },
      { name: 'Jardines del Pedregal',      slug: 'jardines-del-pedregal',      district: 'alvaro-obregon' },
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
    h1: 'Bienestar en Guadalupe Inn — nutrición y recuperación precio C+ 2026',
    metaDesc: 'Bienestar en Guadalupe Inn, CDMX: nutriólogos, masajes y recuperación de $300 a $900 MXN. Insurgentes Sur. NSE C+, sin sobreprecios. Guía 2026.',
    intro: `El bienestar en Guadalupe Inn está bien representado para el perfil del barrio: hay consultorios de nutrición clínica y deportiva sobre Insurgentes Sur, centros de masaje con enfoque en recuperación muscular, y algunos servicios de terapia complementaria que aparecieron en los últimos dos años. Todo alineado con NSE C+ — precios que la clase media puede mantener mes a mes sin que sean un lujo puntual.

Los nutriólogos de la zona trabajan principalmente con objetivos de manejo de peso y mejora de composición corporal. La consulta inicial va de $500 a $900 MXN e incluye evaluación de hábitos, medición de composición corporal y plan básico. Los seguimientos quincenales o mensuales van de $300 a $500 MXN — accesible para quien quiere apoyo continuo sin pagar tarifa de consultorio en zona premium.

Los masajes de recuperación muscular son el servicio más demandado: sesiones de 60 minutos de $400 a $800 MXN, con especialistas en deep tissue y liberación miofascial que trabajan en centros sobre Revolución y Guadalupe Inn. Ahorita también hay opciones de compresión neumática en algunos gymns de la zona incluida en el costo de membresía o por sesión adicional. Para quien entrena con constancia, sumar recuperación semanal a la rutina es el cambio más rentable que puede hacer.`,
    faq: [
      {
        q: '¿Hay nutriólogos con enfoque deportivo en Guadalupe Inn?',
        a: 'Sí, güey. Hay consultorios sobre Insurgentes Sur y calles aledañas con nutriólogos que trabajan específicamente con personas que entrenan. El enfoque es práctico: plan de alimentación que funcione con la agenda real del cliente, sin restricciones extremas. La consulta inicial ($500-$900 MXN) incluye evaluación de composición corporal con bioimpedancia o pliegues cutáneos. Los seguimientos mensuales van de $300 a $500 MXN. Algunos tienen convenio informal con entrenadores del barrio para coordinar el plan de alimentación con el de entrenamiento.',
      },
      {
        q: '¿Qué servicios de recuperación muscular hay en Guadalupe Inn?',
        a: 'Lo más accesible son masajes deportivos — deep tissue y liberación miofascial — en centros sobre Revolución y Guadalupe Inn a $400-$800 MXN por sesión de 60 minutos. Algunos gymns tienen rodillo de vibración y pistola de percusión disponibles para socios sin costo extra. Para servicios más especializados como crioterapia de cuerpo completo o baño de contraste, tienes que desplazarte a San Ángel o Pedregal. Para recuperación post-entrenamiento semanal, lo que hay en Guadalupe Inn es más que suficiente.',
      },
      {
        q: '¿Hay psicólogos o terapeutas de bienestar mental en Guadalupe Inn?',
        a: 'Hay consultorios de psicología clínica y terapia cognitivo-conductual sobre Insurgentes Sur, aunque no todos tienen perfil específico de bienestar deportivo o manejo de estrés por rendimiento. El rango de honorarios va de $600 a $1,200 MXN por sesión según especialización y experiencia. Para terapia de bienestar con enfoque en ansiedad, hábitos y gestión del estrés — que es lo más demandado en Guadalupe Inn — hay opciones accesibles. Si buscas psicología deportiva específica para rendimiento atlético, el perfil es más específico y puede que tengas que buscar en zonas con mayor concentración de atletas.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$500–$900 MXN' },
      { label: 'Masaje deportivo 60m', value: '$400–$800 MXN' },
      { label: 'Seguimiento mensual',  value: '$300–$500 MXN' },
      { label: 'NSE referencia',       value: 'C+' },
    ],
    barrios: [
      { name: 'San Ángel',                  slug: 'san-angel',                  district: 'alvaro-obregon' },
      { name: 'Las Águilas',                slug: 'las-aguilas',                district: 'alvaro-obregon' },
      { name: 'Jardines del Pedregal',      slug: 'jardines-del-pedregal',      district: 'alvaro-obregon' },
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
