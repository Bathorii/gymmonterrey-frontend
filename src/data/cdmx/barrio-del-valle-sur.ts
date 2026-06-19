// src/data/cdmx/barrio-del-valle-sur.ts
// Draft – lastReviewed: 2026-06-28

export const barrioContent = {
  nombre: 'Del Valle Sur',
  slug: 'del-valle-sur',
  group: 'C',
  parentDistrict: {
    nombre: 'Benito Juárez',
    slug: 'benito-juarez',
  },
  lastReviewed: '2026-06-28',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Del Valle Sur es el extremo sur del Valle, güey — más tranquilo que Del Valle Norte, más residencial puro que Del Valle Centro, y con una identidad de barrio muy definida sobre Calle Luz Saviñón y Calle Parroquia. El perfil es NSE C con bolsas de C+ en calles específicas: familias establecidas, adultos mayores propietarios de siempre y adultos jóvenes que llegaron por la renta más accesible del sur del Valle. El Metro Zapata en Línea 3 conecta ahorita con el centro y norte de la ciudad. El Metrobús sobre Av. Insurgentes Sur cubre el tráfico hacia Insurgentes y hacia Nápoles al poniente. La densidad de servicios en Del Valle Sur es ligeramente menor que en Del Valle Centro, pero el barrio tiene todo lo que la vida diaria necesita dentro del radio de caminata. Lo que hace especial a Del Valle Sur en fitness es la

Para el vecino de Del Valle Sur que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Del Valle Sur en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Del Valle Sur — Aqua Gym y gym de barrio consolidado 2026',
    metaDesc: 'Gimnasios en Del Valle Sur, CDMX: ~10 opciones de $350 a $1,100 MXN/mes. Luz Saviñón, Parroquia, Insurgentes Sur. Aqua Gym presente. Guía 2026.',
    intro: `Del Valle Sur tiene alrededor de 10 gimnasios activos, con concentración sobre Calle Luz Saviñón, Calle Parroquia y el corredor de Av. Insurgentes Sur. El formato predominante es gym de volumen mid-range con membresías accesibles para el perfil NSE C del barrio: salas de pesas completas, equipos cardiovasculares, clases de grupo incluidas en mensualidad y en algunos casos alberca. La presencia de Aqua Gym es el elemento diferenciador del barrio frente al resto de la subzona Del Valle. El rango de precios va de $350 a $1,100 MXN al mes, con la mayoría de opciones entre $450-$850 MXN. Los gymns con alberca o Aqua Gym tienen el precio más alto del rango: $700-$1,100 MXN por el valor diferencial de las instalaciones acuáticas. Los gymns de volumen seco están en el rango de $350-$600 MXN — precio de barrio para una zona con nivel de servicio mid-range real. Lo que distingue a Del Valle Sur en gymns es la lealtad de la base de socios. Los gimnasios de Del Valle Sur tienen comunidades de usuarios que llevan años en el mismo local — adultos mayores que van de lunes a sábado, adultos de mediana edad que llevan a sus hijos los fines de semana, jóvenes del barrio que empezaron en el gym familiar. Esa continuidad crea una dinámica distinta a la de los gymns de alta rotación de zonas más jóvenes. Ahorita Del Valle Sur tiene el gym de barrio más`,
    faq: [
      {
        q: '¿Cuánto cuesta una membresía de gym con Aqua Gym en Del Valle Sur?',
        a: 'Los gymns con Aqua Gym y alberca en Del Valle Sur van de $700 a $1,100 MXN al mes con acceso a la piscina incluido en la membresía. La inscripción inicial varía de $200 a $500 MXN. Los gymns de volumen seco van de $350 a $600 MXN al mes. La diferencia de precio entre gym seco y gym con alberca en Del Valle Sur es de $300-$500 MXN al mes — una diferencia relevante que se justifica si la piscina es parte del entrenamiento regular. Comparado con centros deportivos privados de zonas premium con alberca, Del Valle Sur es 30-50% más accesible.',
      },
      {
        q: '¿Qué es Aqua Gym y cómo se practica en Del Valle Sur?',
        a: 'Aqua Gym es ejercicio aeróbico y de resistencia en el agua con el cuerpo sumergido hasta la cintura o el pecho. El impacto articular es mínimo comparado con el ejercicio en tierra, lo que lo hace ideal para adultos mayores, personas en rehabilitación de rodilla o cadera, embarazadas y personas con sobrepeso que buscan actividad cardiovascular sin carga en las articulaciones. En Del Valle Sur hay gymns con clases de Aqua Gym grupales incluidas en membresía y algunos con sesiones individuales con instructor. El formato es chido para quien no puede o no quiere el impacto del gym de pesas.',
      },
      {
        q: '¿Los gymns de Del Valle Sur tienen horarios para adultos mayores?',
        a: 'Sí, güey — es uno de los perfiles de usuario más importantes del barrio. Varios gymns sobre Luz Saviñón y Parroquia tienen clases específicas para adultos mayores en horarios matutinos: Aqua Gym, yoga terapéutico, tai chi y funcional de baja intensidad. Las clases de adultos mayores suelen estar incluidas en membresía mensual sin costo adicional. El horario más común es 7-10am de lunes a viernes. Algunos gymns tienen descuento en membresía para mayores de 60 años — pedí información directamente porque no siempre está publicado en redes.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Del Valle Sur tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Del Valle Sur suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~10' },
      { label: 'Membresía mensual', value: '$350–$1,100 MXN' },
      { label: 'Referente',         value: 'Calle Luz Saviñón / Parroquia' },
      { label: 'Acceso Metro',      value: 'Metro Zapata (L3)' },
    ],
    barrios: [
      { name: 'Del Valle Centro',   slug: 'del-valle-centro',   district: 'benito-juarez' },
      { name: 'Del Valle Norte',    slug: 'del-valle-norte',    district: 'benito-juarez' },
      { name: 'Nápoles',            slug: 'napoles',            district: 'benito-juarez' },
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
    h1: 'Estudios en Del Valle Sur — yoga, pilates y funcional de barrio 2026',
    metaDesc: 'Estudios fitness en Del Valle Sur, CDMX: yoga, pilates y funcional de $100 a $240 MXN/clase. Luz Saviñón, Parroquia, Insurgentes Sur. Guía 2026.',
    intro: `Los estudios de Del Valle Sur tienen un perfil más comunitario que boutique — espacios que llevan años en el mismo local con comunidades de practicantes estables y precio que refleja el barrio más que la tendencia de la colonia de moda. Sobre Calle Luz Saviñón, Parroquia y calles secundarias hay estudios de yoga, pilates y funcional que funcionan bien para quien busca práctica regular sin el costo de los estudios del corredor de Insurgentes Sur premium.

El formato más común es el semi-boutique de barrio: grupos de 15-30 personas por clase, instructor con certificación real y conocimiento de los practicantes regulares por nombre. La clase suelta va de $100 a $240 MXN. El plan mensual de clases ilimitadas de $700 a $1,300 MXN — más accesible que Del Valle Centro por la menor presión de renta en el sur del barrio.

Lo que distingue a los estudios de Del Valle Sur es la continuidad de los practicantes: hay gente que lleva 5-10 años yendo al mismo estudio de yoga del barrio, lo que crea un ambiente de práctica genuino y un instructor que conoce el historial y las limitaciones de cada persona. Para quien valora la relación a largo plazo sobre la novedad constante de un studio urbano de alta rotación, Del Valle Sur tiene ahorita la mejor oferta de estudios de toda la subzona Del Valle.`,
    faq: [
      {
        q: '¿Cuánto cuesta una clase de pilates en Del Valle Sur?',
        a: 'La clase de pilates mat en Del Valle Sur va de $100 a $180 MXN suelta. Pilates con reformer va de $150 a $240 MXN por sesión en grupo pequeño o $200-$350 MXN individual. Los planes mensuales de pilates mat ilimitado van de $700 a $1,100 MXN. Comparado con Narvarte Poniente o Roma Norte donde el reformer individual puede ir de $300 a $450 MXN, Del Valle Sur tiene el mismo nivel de instrucción y equipo a 25-40% menos. El barrio tiene estudios de pilates con instructores certificados en pilates contemporáneo y clásico.',
      },
      {
        q: '¿Hay yoga terapéutico en Del Valle Sur para lesiones o condiciones físicas?',
        a: 'Sí, güey. Dado el perfil de adultos mayores del barrio, hay estudios de yoga en Del Valle Sur con clases de yoga terapéutico y restaurativo específicamente diseñados para personas con condiciones físicas: dolor lumbar crónico, artritis, post-cirugía de rodilla o cadera, y recuperación de lesiones. Las clases van de $100 a $180 MXN sueltas. Algunos estudios ofrecen sesiones individuales de yoga terapéutico con evaluación inicial a $300-$500 MXN — similar al costo de una sesión de fisioterapia pero con enfoque en movimiento y respiración.',
      },
      {
        q: '¿Hay estudios de funcional o entrenamiento en grupo en Del Valle Sur?',
        a: 'Sí. Hay espacios de funcional sobre calles del barrio y sobre el corredor de Insurgentes Sur que trabajan con grupos de 8-20 personas con metodología de circuitos y resistencia. La clase suelta va de $100 a $180 MXN; el plan mensual de $650 a $1,000 MXN para frecuencia ilimitada. El formato es más cercano al entrenamiento grupal de gym que al boutique de alta intensidad de Narvarte. Para quien quiere algo más dinámico que el gym de volumen pero sin pagar precio de clase boutique, los estudios de funcional de Del Valle Sur son la opción chida.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~7' },
      { label: 'Clase suelta',      value: '$100–$240 MXN' },
      { label: 'Mensual ilimitado', value: '$700–$1,300 MXN' },
      { label: 'Especialidad',      value: 'Yoga / Pilates / Aqua fitness' },
    ],
    barrios: [
      { name: 'Del Valle Centro',   slug: 'del-valle-centro',   district: 'benito-juarez' },
      { name: 'Del Valle Norte',    slug: 'del-valle-norte',    district: 'benito-juarez' },
      { name: 'Nápoles',            slug: 'napoles',            district: 'benito-juarez' },
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
    h1: 'Entrenadores personales en Del Valle Sur',
    metaDesc: 'Entrenadores personales en Del Valle Sur, CDMX: PT certificados de $330 a $720 MXN/sesión. Luz Saviñón, Parroquia. Benito Juárez sur. Guía 2026.',
    intro: `El personal training en Del Valle Sur tiene el precio ligeramente menor que Del Valle Centro por la diferencia en renta del barrio y el perfil de la clientela. Los entrenadores cobran entre $330 y $720 MXN por sesión — el rango mid-range accesible de Benito Juárez sur para calidad de certificación real. El mercado de PT de Del Valle Sur es de largo plazo: clientes que llevan años con el mismo entrenador, relaciones de confianza establecidas y objetivos de salud integral más que de rendimiento deportivo puro.

Los PTs de Del Valle Sur tienen un perfil diverso pero con concentración en especialidades que responden al barrio: adultos mayores, personas con condiciones crónicas manejadas con ejercicio, preparación física para cirugías programadas y recuperación post-operatoria. La influencia de Aqua Gym en el barrio atrae también entrenadores con certificación en fitness acuático que trabajan tanto en piscina como en gym seco.

Para quien busca un entrenador con quien trabajar durante años — no el PT de moda de Instagram — Del Valle Sur tiene ahorita la mejor oferta de relaciones de largo plazo en fitness de toda la subzona. Los entrenadores del barrio tienen bases de clientes estables y leales, lo que es la mejor señal de calidad real. La diferencia con un PT de Narvarte no es el conocimiento — es la rotación del cliente y el precio del local.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Del Valle Sur?',
        a: 'Una sesión individual con PT certificado en Del Valle Sur va de $330 a $720 MXN. Los paquetes de 10 sesiones van de $2,800 a $6,200 MXN con descuento de 10-15%. Para sesiones en Aqua Gym o en piscina con entrenador certificado en fitness acuático, el precio suelto va de $400 a $750 MXN por la especialización del servicio. Para sesiones en el Parque Hundido o en espacios verdes cercanos hay un cargo adicional de $80-$130 MXN. Comparado con Narvarte Poniente ($500-$1,000 MXN/sesión), Del Valle Sur ofrece 25-35% de ahorro para calidad equivalente.',
      },
      {
        q: '¿Hay entrenadores con experiencia en Aqua Gym en Del Valle Sur?',
        a: 'Sí, güey — es uno de los perfiles más específicos del barrio. Hay entrenadores certificados en fitness acuático y Aqua Gym que operan en los gymns con piscina de Del Valle Sur. El servicio incluye sesiones de entrenamiento acuático estructuradas para objetivos específicos: rehabilitación de articulaciones, acondicionamiento cardiovascular de bajo impacto y pérdida de peso con resistencia acuática. La sesión con entrenador en piscina va de $400 a $750 MXN. Para adultos mayores o personas con lesiones articulares, es la opción más chida de todo Benito Juárez.',
      },
      {
        q: '¿Cómo encuentro un entrenador personal en Del Valle Sur?',
        a: 'El método más directo es visitar los gymns sobre Luz Saviñón y Parroquia y preguntar por PTs de planta o independientes. Los estudios de pilates y funcional del barrio también tienen entrenadores que hacen PT individual. En Instagram, buscá con geotag de Del Valle Sur o Del Valle Benito Juárez. Los grupos de WhatsApp de vecinos del Valle son activos y suelen tener recomendaciones de entrenadores con historial en el barrio. El referido de vecino es el mejor filtro de calidad en Del Valle Sur — la comunidad es cohesionada y la recomendación es real.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$330–$720 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,800–$6,200 MXN' },
      { label: 'Vs. Narvarte',        value: '25-35% más accesible' },
      { label: 'Especialidad',        value: 'Aqua Gym / Adultos mayores' },
    ],
    barrios: [
      { name: 'Del Valle Centro',   slug: 'del-valle-centro',   district: 'benito-juarez' },
      { name: 'Del Valle Norte',    slug: 'del-valle-norte',    district: 'benito-juarez' },
      { name: 'Nápoles',            slug: 'napoles',            district: 'benito-juarez' },
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
    h1: 'Eventos fitness en Del Valle Sur',
    metaDesc: 'Eventos fitness en Del Valle Sur, CDMX: clases abiertas, carreras y actividad barrial de $0 a $300 MXN. Guía 2026.',
    intro: `Del Valle Sur tiene una tradición deportiva de barrio que no necesita marketing para sostenerse, güey — los grupos de actividad llevan años funcionando sobre la misma dinámica de vecinos que se conocen y se cuidan en el ejercicio. El barrio tiene un perfil de adultos mayores activos que es inusualmente alto para CDMX, lo que genera eventos y actividades deportivas con un carácter genuinamente comunitario.

Los grupos de caminata matutina son el formato de evento más arraigado en Del Valle Sur: comunidades de 15-40 personas que salen desde el barrio hacia el circuito de Insurgentes Sur o el Parque Hundido los martes, jueves y sábados en la mañana. Muchos de estos grupos llevan 10-15 años funcionando con los mismos participantes y una dinámica social que va más allá del ejercicio.

Los gymns con Aqua Gym del barrio organizan festivales acuáticos y demos de Aqua Gym en datas especiales con participación de socios de todas las edades. Son los eventos más característicos de Del Valle Sur en el calendario fitness del año. Hay también carreras y actividad deportiva barrial organizada por asociaciones vecinales del Valle con regularidad. Ahorita el ecosistema de eventos de Del Valle Sur es el más sostenido de toda la subzona por la cohesión de su comunidad.`,
    faq: [
      {
        q: '¿Hay grupos de caminata o actividad outdoor en Del Valle Sur?',
        a: 'Sí, güey — varios. Hay grupos de caminata matutina que operan desde el barrio hacia Insurgentes Sur y el Parque Hundido. Algunos grupos llevan más de 10 años funcionando con los mismos participantes. La participación es libre y gratuita — solo se requiere presentarse en el punto de salida, que suele ser una esquina acordada en Luz Saviñón o Parroquia. Para running más intenso, el circuito del Parque Hundido está a 15-20 minutos en Metrobús. Preguntá en los gimnasios de Del Valle Sur o en grupos de WhatsApp de vecinos del Valle para las coordenadas de los grupos activos.',
      },
      {
        q: '¿Hay eventos de Aqua Gym abiertos al público en Del Valle Sur?',
        a: 'Los gymns con piscina del barrio organizan demos de Aqua Gym y festivales acuáticos en datas especiales como Día del Deporte o inicio de temporada. La entrada es gratuita o con cooperación de $80-$150 MXN. Los eventos incluyen clase demostrativa, prueba de equipos y en algunos casos promoción de membresía con descuento de inscripción. Para quien quiere conocer el Aqua Gym antes de comprometer membresía, estos eventos son la mejor forma de probarlo sin costo. Seguí los perfiles de Instagram de los gymns de Luz Saviñón y Parroquia para las fechas.',
      },
      {
        q: '¿Hay carreras populares que pasen por Del Valle Sur?',
        a: 'Del Valle Sur está en la zona de paso de varias carreras populares de CDMX que corren sobre Insurgentes Sur. Las carreras del Parque Hundido y las organizadas por la alcaldía Benito Juárez tienen ediciones regulares con distancias de 5K y 10K. La inscripción va de $180 a $300 MXN con playera y medalla incluidas. Las asociaciones vecinales del Valle también organizan carreras de barrio propias con trayecto interno en el vecindario. Para calendario completo, seguí las cuentas de running de Benito Juárez y los grupos vecinales del Valle en redes.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos regulares', value: 'Mensuales' },
      { label: 'Precio habitual',   value: '$0–$300 MXN' },
      { label: 'Formato estrella',  value: 'Caminata grupal / Aqua Gym demos' },
      { label: 'Outdoor cercano',   value: 'Parque Hundido (15-20 min Metrobús)' },
    ],
    barrios: [
      { name: 'Del Valle Centro',   slug: 'del-valle-centro',   district: 'benito-juarez' },
      { name: 'Del Valle Norte',    slug: 'del-valle-norte',    district: 'benito-juarez' },
      { name: 'Nápoles',            slug: 'napoles',            district: 'benito-juarez' },
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
    h1: 'Bienestar en Del Valle Sur',
    metaDesc: 'Bienestar en Del Valle Sur, CDMX: nutriólogos, masaje y fisioterapia de $280 a $720 MXN. Luz Saviñón, Parroquia. Benito Juárez sur. Guía 2026.',
    intro: `El bienestar en Del Valle Sur tiene el carácter del barrio: orientado a la salud de largo plazo más que al wellness aspiracional de temporada. La demanda de adultos mayores activos y familias de clase media establecida genera una oferta de servicios de salud sólida y accesible — nutriólogos que llevan años con los mismos pacientes, masajistas que conocen las condiciones crónicas de sus clientes, fisioterapeutas que trabajan en red con médicos del barrio.

Los consultorios de nutrición de Del Valle Sur tienen enfoque clínico y de largo plazo: manejo de peso con perspectiva de meses y años, no de semanas. La consulta inicial va de $380 a $700 MXN y los seguimientos de $250 a $480 MXN. El nutriólogo del barrio conoce a sus pacientes — no hay el fenómeno de alta rotación de clientes que se ve en zonas más jóvenes y volátiles en sus hábitos.

El masaje terapéutico y la fisioterapia tienen demanda alta por el perfil de adultos mayores activos del barrio. Una sesión de masaje de 60 minutos va de $280 a $600 MXN. Fisioterapia de $370 a $700 MXN la sesión. Ahorita Del Valle Sur tiene la mejor continuidad de servicios de bienestar de toda la subzona Del Valle — no el más innovador, pero sí el más confiable. Para quien quiere relaciones de largo plazo con sus proveedores de salud, es la opción más chida del sur de Benito Juárez.`,
    faq: [
      {
        q: '¿Hay nutriólogos en Del Valle Sur especializados en adultos mayores?',
        a: 'Sí, güey — es una de las especializaciones más presentes en el barrio. Hay nutriólogos en Del Valle Sur con experiencia en nutrición para adultos mayores: manejo de sarcopenia, osteoporosis y condiciones metabólicas crónicas mediante alimentación. También atienden el perfil de adulto mayor activo en gym o Aqua Gym que quiere optimizar su ingesta para mantener masa muscular y energía. La consulta inicial va de $380 a $700 MXN; los seguimientos de $250 a $480 MXN. El precio refleja el barrio — más accesible que Narvarte sin bajar la calidad técnica.',
      },
      {
        q: '¿Qué servicios de masaje hay en Del Valle Sur?',
        a: 'Hay centros de masaje terapéutico, deportivo y de relajación sobre Luz Saviñón, Parroquia y calles del barrio. Los servicios incluyen masaje sueco, de tejido profundo, deportivo y reflexología. Una sesión de 60 minutos va de $280 a $600 MXN. Hay también servicios de masaje para adultos mayores con técnica adaptada a condiciones como artritis y sensibilidad reducida, a $260-$520 MXN la sesión. Para recuperación post-Aqua Gym o post-entrenamiento de funcional, el masaje de recuperación muscular de 60 minutos es el servicio más solicitado del barrio.',
      },
      {
        q: '¿Hay fisioterapeutas en Del Valle Sur para adultos mayores y post-cirugía?',
        a: 'Sí. Del Valle Sur tiene fisioterapeutas con experiencia en rehabilitación de adultos mayores — post-fractura de cadera, rehabilitación de rodilla post-prótesis, manejo de equilibrio y coordinación para prevención de caídas. La sesión va de $370 a $700 MXN. Algunos fisioterapeutas de Del Valle Sur trabajan en coordinación con los médicos de familia de la zona y con los entrenadores de Aqua Gym de los gymns locales para un continuo de rehabilitación-mantenimiento-actividad. Ese modelo integrado es difícil de encontrar en barrios con menos cohesión comunitaria.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$380–$700 MXN' },
      { label: 'Masaje deportivo 60m', value: '$280–$600 MXN' },
      { label: 'Fisioterapia sesión',  value: '$370–$700 MXN' },
      { label: 'Ventaja diferencial',  value: 'Continuidad y confianza de largo plazo' },
    ],
    barrios: [
      { name: 'Del Valle Centro',   slug: 'del-valle-centro',   district: 'benito-juarez' },
      { name: 'Del Valle Norte',    slug: 'del-valle-norte',    district: 'benito-juarez' },
      { name: 'Nápoles',            slug: 'napoles',            district: 'benito-juarez' },
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
