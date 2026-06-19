// src/data/cdmx/barrio-doctores.ts
// Draft – lastReviewed: 2026-06-27

export const barrioContent = {
  nombre: 'Doctores',
  slug: 'doctores',
  group: 'C',
  parentDistrict: {
    nombre: 'Cuauhtémoc',
    slug: 'cuauhtemoc',
  },
  lastReviewed: '2026-06-27',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Doctores es el barrio médico de CDMX y también uno de los más honestos para entrenar, güey. Sobre Av. Doctores y Calle Aranda hay una densidad de población activa que no necesita boutique para tomarse en serio el gym. El Metro Obrera conecta ahorita con el Centro y con Obrera sin transbordos, y el Metrobús sobre Eje 3 Sur cubre el resto.

El perfil es NSE C con cultura fitness de volumen: la gente viene a cargar peso, sudar y regresarse a trabajar. Los gymns sobre Doctores y Aranda tienen equipos completos, membresías bajas y horarios que respetan a quien trabaja jornada en hospitales o clínicas cercanas. No hay lista de espera, no hay clases con nombre aspiracional — hay hierro, cardio y comunidad real. Para quien vive o trabaja en el barrio médico, la oferta de fitness es directa y costo-efectiva dentro de toda la alcaldía Cuauhtémoc.

Para el vecino de Doctores que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Doctores en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Doctores — volumen, hierro y presupuesto real 2026',
    metaDesc: 'Gimnasios en Doctores, CDMX: ~11 opciones de $300 a $800 MXN/mes. Av. Doctores, Eje 3 Sur. Budget gym con equipos completos. Guía 2026.',
    intro: `Doctores tiene alrededor de 11 gimnasios activos, con una concentración fuerte sobre Av. Doctores y Eje 3 Sur donde el formato es gym de volumen con membresía baja: salas de pesas amplias, máquinas cardiovasculares en cantidad y clases de grupo incluidas en la cuota mensual. El perfil del usuario es trabajador de hospital, administrativo de clínica o residente del barrio con jornada larga — gente que quiere entrenar rápido y efectivo sin rodeos.

El rango de precios es de $300 a $800 MXN al mes, uno de los más bajos de Cuauhtémoc. Las cadenas de budget gym tienen presencia en Doctores por la alta densidad habitacional y por el flujo constante de trabajadores del sector salud. La membresía mensual sin anualidad es el modelo más común — funcional para quien tiene horarios rotativos o irregulares.

Lo que sobresale en Doctores no es el diseño del espacio ni el branding — es la infraestructura funcional a precio justo. Los gymns sobre Aranda y Calle Tolsá tienen equipos de pesas libres decentes, área de cardio y algunos tienen piscina o área de combate. Para resultado de entrenamiento, la diferencia con un gym de $1,500 MXN en Roma Norte es marginal. Para el presupuesto mensual, la diferencia es muy real. Ahorita Doctores es la opción más costo-efectiva de Cuauhtémoc para quien prioriza el entrenamiento sobre la estética del local.`,
    faq: [
      {
        q: '¿Cuánto cuesta una membresía de gym en Doctores?',
        a: 'Las membresías en Doctores van de $300 a $800 MXN al mes. Las cadenas de bajo costo están en el rango de $300-$500 MXN sin inscripción anual obligatoria. Los gymns independientes con más equipo o servicios adicionales llegan a $700-$800 MXN. La inscripción inicial varía: en cadenas suele ser de $150-$300 MXN, en gymns independientes puede ser gratuita con contrato mensual. Comparado con Roma Norte o Condesa, el ahorro mensual en Doctores puede ser de $500 a $1,500 MXN según el tipo de gym elegido.',
      },
      {
        q: '¿Hay gymns con horarios extendidos para trabajadores de hospital en Doctores?',
        a: '¡Ahorita sí, güey! Varios gymns sobre Av. Doctores y Eje 3 Sur tienen horarios desde las 5:30 o 6am hasta las 10 o 11pm entre semana, y sábado hasta las 9pm. Algunos abren incluso en turno de madrugada para personal de guardia nocturna — verificá directamente con el gym de tu interés porque los horarios varían por local. El hecho de que el barrio tenga alta concentración de trabajadores de salud con turnos rotativos hizo que varios gymns adaptaran sus horarios a esa demanda.',
      },
      {
        q: '¿Los gymns de Doctores son seguros para ir en la noche?',
        a: 'Los gymns sobre Av. Doctores y Aranda son locales establecidos con acceso controlado y usuarios conocidos. El barrio tiene actividad constante por el sector médico lo que mantiene presencia humana en la calle incluso en horarios nocturnos. Dicho eso, como en cualquier zona urbana densa, es recomendable ir y venir en grupos o en transporte (Metro Obrera o Metrobús Eje 3 Sur) más que caminando solo de noche por calles secundarias. El gym en sí es seguro; el trayecto depende de la ruta que elijas.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Doctores tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Doctores suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~11' },
      { label: 'Membresía mensual', value: '$300–$800 MXN' },
      { label: 'Referente',         value: 'Av. Doctores / Aranda' },
      { label: 'Acceso Metro',      value: 'Metro Obrera / Doctores' },
    ],
    barrios: [
      { name: 'Obrera',      slug: 'obrera',      district: 'cuauhtemoc' },
      { name: 'Centro',      slug: 'centro',      district: 'cuauhtemoc' },
      { name: 'Tabacalera',  slug: 'tabacalera',  district: 'cuauhtemoc' },
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
    h1: 'Estudios en Doctores',
    metaDesc: 'Estudios fitness en Doctores, CDMX: funcional, clases de grupo y yoga de $80 a $180 MXN/clase. Av. Doctores, Eje 3 Sur. Guía 2026.',
    intro: `Los estudios boutique en Doctores no son el formato dominante — acá manda el gym de volumen con clases incluidas en membresía. Pero sobre Calle Aranda y calles secundarias hay espacios de funcional, kickboxing y yoga básico que funcionan bien para quien quiere algo más enfocado que una clase de zumba multitudinaria.

El formato más accesible son las clases grupales dentro de los gimnasios de Doctores: aeróbics, step, body combat y yoga incluidos en la membresía mensual de $300-$800 MXN. No hay cargo adicional por clase, no hay cupo limitado con reserva de app. llegas, firmás la lista y entrás. El instructor lleva años en el mismo espacio y conoce a los regulares por nombre.

Los espacios independientes de funcional sobre Eje 3 Sur trabajan con grupos de 10-15 personas y un enfoque en circuitos, resistencia y trabajo cardiovascular de alta intensidad. La clase suelta va de $80 a $180 MXN — por debajo de cualquier boutique de Roma Norte. El plan mensual de $500 a $900 MXN para frecuencia ilimitada. Para quien quiere variedad en una semana sin manejar a Condesa, los estudios de Doctores cubren perfectamente el entrenamiento funcional, el cardio y el yoga básico sin salir del barrio.`,
    faq: [
      {
        q: '¿Hay clases de kickboxing o artes marciales en Doctores?',
        a: 'Sí. Doctores tiene tradición fuerte en artes marciales — hay dojos de boxeo, karate y kickboxing sobre calles internas del barrio con historia de décadas. Las clases van de $100 a $200 MXN sueltas o $500-$900 MXN en plan mensual. El nivel va desde principiantes absolutos hasta competidores activos. Para quien quiere aprender técnica real de combate o defensa personal sin pagar el precio de un gym boutique de MMA, Doctores es una de las mejores opciones de toda la alcaldía.',
      },
      {
        q: '¿Qué tan accesibles son los estudios de Doctores en transporte público?',
        a: 'Muy accesibles, güey. Metro Obrera en Línea 8 y Metro Doctores en Línea 3 cubren los extremos del barrio. Sobre Eje 3 Sur pasa el Metrobús. Desde el Centro, Obrera o Tabacalera el trayecto en Metro es de 2-4 minutos. Desde Roma Norte o Condesa, el Metrobús sobre Insurgentes conecta en 10-15 minutos. Para quien viene en coche, el estacionamiento en calle sobre Av. Doctores está disponible con más facilidad que en Roma o Condesa.',
      },
      {
        q: '¿Hay yoga serio en Doctores o solo yoga de gym?',
        a: 'La oferta de yoga en Doctores es predominantemente yoga de gym — Hatha básico y yoga de relajación incluidos en membresía de gimnasio. Hay uno o dos espacios independientes que dan clases de Hatha e Iyengar con más seriedad técnica, a $100-$180 MXN la clase suelta. No es el ecosistema de yoga de Roma Norte con 8 estilos distintos y teacher trainings — pero para practica regular con instructor consistente y precio accesible, la oferta de Doctores funciona. Para yoga avanzado o estilos más especializados, Roma Norte está a 15 minutos en Metrobús.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~6' },
      { label: 'Clase suelta',      value: '$80–$180 MXN' },
      { label: 'Mensual ilimitado', value: '$500–$900 MXN' },
      { label: 'Especialidad',      value: 'Funcional / Artes marciales' },
    ],
    barrios: [
      { name: 'Obrera',      slug: 'obrera',      district: 'cuauhtemoc' },
      { name: 'Centro',      slug: 'centro',      district: 'cuauhtemoc' },
      { name: 'Tabacalera',  slug: 'tabacalera',  district: 'cuauhtemoc' },
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
    h1: 'Entrenadores personales en Doctores — PT real a precio real 2026',
    metaDesc: 'Entrenadores personales en Doctores, CDMX: PT certificados de $280 a $600 MXN/sesión. Av. Doctores, Aranda. Sin markup de zona. Guía 2026.',
    intro: `El personal training en Doctores tiene el precio más accesible de toda la alcaldía Cuauhtémoc para un nivel de certificación equivalente. Los entrenadores que trabajan en los gymns de Av. Doctores y Aranda cobran entre $280 y $600 MXN por sesión — 30-50% menos que entrenadores con el mismo perfil en Roma Norte o Condesa. La razón es simple: el mercado local no sostiene más, y el entrenador que quiere trabajar en el barrio adapta su precio o pierde clientes.

Lo que no cambia con el precio es la calidad de certificación. Hay entrenadores en Doctores con NASM, NSCA y ENMH que llevan 5-10 años trabajando en la zona con clientes de distintos objetivos: pérdida de peso, rehabilitación post-lesión, fuerza y rendimiento atlético. La diferencia con un entrenador de Polanco no es el conocimiento — es el código postal del gym y el presupuesto del barrio.

Para trabajadores del sector salud del barrio — médicos, enfermeras, técnicos con jornadas largas — los entrenadores de Doctores tienen experiencia específica en adaptar programas a horarios irregulares, déficit de sueño acumulado y alta demanda de recuperación. Ahorita es el mejor mercado de CDMX para encontrar PT serio sin presupuesto de zona premium. La red de especialistas del sector es una ventaja real.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Doctores?',
        a: 'Una sesión individual con PT certificado en Doctores va de $280 a $600 MXN. Los paquetes de 10 sesiones van de $2,200 a $5,000 MXN con descuento de 10-15% sobre precio suelto. Para sesiones a domicilio en el barrio hay un cargo adicional de $60-$100 MXN. Comparado con Roma Norte ($450-$900 MXN/sesión) o Polanco ($700-$1,400 MXN/sesión), el ahorro en Doctores es el más significativo de toda la alcaldía Cuauhtémoc. Para quien quiere PT 3 veces por semana, la diferencia anual es de $50,000-$100,000 MXN según zona de comparación.',
      },
      {
        q: '¿Los entrenadores de Doctores trabajan con pacientes en rehabilitación?',
        a: '¡Sí, güey! Dado el perfil médico del barrio, varios entrenadores de Doctores tienen experiencia coordinando con fisioterapeutas y médicos para programas de rehabilitación activa — regreso al ejercicio post-cirugía, manejo de dolor lumbar crónico, fortalecimiento post-lesión articular. Algunos tienen relaciones establecidas con clínicas del barrio y manejan casos derivados formalmente. El protocolo es más conservador que el PT convencional y el precio por sesión es el mismo rango: $280-$600 MXN. Pedí referencias específicas en rehabilitación antes de contratar.',
      },
      {
        q: '¿Cómo encuentro un entrenador personal en Doctores?',
        a: 'El método más directo es presentarte en los gymns de Av. Doctores o Aranda y preguntar por el entrenador de planta o los independientes que operan ahí. La mayoría de los gymns tienen tablón de anuncios con datos de contacto de los PT asociados. También puedes buscar en Instagram con geotag de Doctores o buscar referencias en grupos de Facebook de vecinos del barrio. A diferencia de zonas más premium, en Doctores no hay plataformas de reserva online — el contacto es directo, por WhatsApp o en persona. Ahorita ese formato funciona mejor para ambas partes.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$280–$600 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,200–$5,000 MXN' },
      { label: 'Vs. Roma Norte',      value: '30-40% más accesible' },
      { label: 'Especialidad',        value: 'Pérdida de peso / Rehab' },
    ],
    barrios: [
      { name: 'Obrera',      slug: 'obrera',      district: 'cuauhtemoc' },
      { name: 'Centro',      slug: 'centro',      district: 'cuauhtemoc' },
      { name: 'Tabacalera',  slug: 'tabacalera',  district: 'cuauhtemoc' },
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
    h1: 'Eventos fitness en Doctores',
    metaDesc: 'Eventos fitness en Doctores, CDMX: torneos de artes marciales, retos de gym y clases abiertas de $0 a $250 MXN. Guía 2026.',
    intro: `Doctores tiene una escena de eventos fitness más activa de lo que parece desde afuera, güey. Los dojos de boxeo y artes marciales del barrio organizan torneos internos y exhibiciones que son el formato de evento más tradicional de la zona — comunidad compitiendo frente a comunidad, sin patrocinadores de suplementos ni transmisión en vivo. El nivel de participación es alto porque los asistentes son socios del mismo gym que pelean.

Los gymns de volumen sobre Av. Doctores hacen retos trimestrales de asistencia y rendimiento: quién levanta más en 4 semanas, quién cumple más sesiones en el mes. Sin premiación económica, solo reconocimiento del grupo. Para quien entrena con motivación de comunidad, eso funciona mejor que cualquier reto de app.

Los eventos de acceso libre son menos frecuentes que en barrios con más presupuesto de marketing, pero existen: clases abiertas en datas especiales, jornadas de salud en colaboración con hospitales del barrio, y ocasionalmente clases en explanadas públicas cuando la temporada lo permite. Ahorita el ecosistema de eventos de Doctores está creciendo en organización — los gymns más establecidos están empezando a coordinarse para hacer eventos conjuntos de barrio. Para quien valora la autenticidad sobre el show, es el momento ideal para sumarse.`,
    faq: [
      {
        q: '¿Hay torneos de boxeo o artes marciales abiertos al público en Doctores?',
        a: 'Sí, los dojos del barrio organizan exhibiciones y torneos internos con alguna frecuencia — generalmente una o dos veces al año para los eventos más grandes y mensual para categorías de principiantes. La entrada a estos eventos suele ser gratuita o de $50-$150 MXN como cooperación. Los dojos anuncian sus torneos en Instagram y en el tablón físico del local. Doctores tiene historia real en boxeo amateur en CDMX — los torneos locales son genuinos, no producción aspiracional.',
      },
      {
        q: '¿Cómo me entero de eventos y clases abiertas en Doctores?',
        a: 'La mejor forma es seguir directamente los perfiles de Instagram de los gymns y dojos del barrio y activar notificaciones. También hay grupos de Facebook de vecinos de Doctores y Obrera donde se anuncian eventos de barrio. A diferencia de zonas premium con calendarios online actualizados, en Doctores los anuncios van a último momento — 3-5 días antes — porque el formato es más informal. Si ya eres socio de algún gym del barrio, pedí que te agreguen al grupo de WhatsApp de la comunidad.',
      },
      {
        q: '¿Hay grupos de running o actividad outdoor cerca de Doctores?',
        a: 'No hay parque grande en Doctores, pero el Parque Lázaro Cárdenas y algunas explanadas del barrio se usan para caminatas grupales matutinas. Para running serio, el punto más cercano es el circuito del Bosque de Chapultepec — desde Doctores en Metro son 3-4 paradas hasta Chapultepec en Línea 1. Algunos gimnasios de Doctores organizan salidas de running hacia Chapultepec los sábados en la mañana. Preguntá en el gym de tu interés si tiene grupo de running activo.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos regulares', value: 'Trimestrales' },
      { label: 'Precio habitual',   value: '$0–$250 MXN' },
      { label: 'Formato estrella',  value: 'Torneos de artes marciales' },
      { label: 'Outdoor cercano',   value: 'Chapultepec (3-4 paradas Metro)' },
    ],
    barrios: [
      { name: 'Obrera',      slug: 'obrera',      district: 'cuauhtemoc' },
      { name: 'Centro',      slug: 'centro',      district: 'cuauhtemoc' },
      { name: 'Tabacalera',  slug: 'tabacalera',  district: 'cuauhtemoc' },
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
    h1: 'Bienestar en Doctores',
    metaDesc: 'Bienestar en Doctores, CDMX: nutriólogos y masaje deportivo de $200 a $650 MXN. Av. Doctores, Aranda. Sin precio de zona premium. Guía 2026.',
    intro: `Doctores tiene una ventaja única en bienestar que ningún otro barrio de Cuauhtémoc puede replicar: la proximidad a hospitales y clínicas genera una oferta de salud densa y accesible que incluye nutriólogos, fisioterapeutas y servicios de masaje especializado que trabajan en red con el sector médico del barrio. No es bienestar aspiracional — es bienestar funcional con respaldo clínico real.

Los consultorios de nutrición sobre Av. Doctores y calles aledañas tienen enfoque práctico: medición de composición corporal, plan alimenticio adaptado a jornadas de trabajo irregular, y seguimiento quincenal. La consulta inicial va de $350 a $650 MXN y los seguimientos de $200 a $400 MXN — los precios más accesibles de toda la alcaldía para atención con nivel técnico real.

El masaje deportivo y la fisioterapia son los servicios más demandados de la zona por el perfil de trabajadores de salud con alta carga física. Una sesión de masaje de recuperación de 60 minutos va de $250 a $550 MXN. Hay también fisioterapeutas que trabajan con usuarios de gym en rehabilitación de lesiones deportivas a $350-$600 MXN la sesión. Ahorita Doctores ofrece la mejor relación precio-calidad en servicios de bienestar de toda la alcaldía Cuauhtémoc — el código postal bajo no baja la calidad de atención.`,
    faq: [
      {
        q: '¿Hay fisioterapeutas en Doctores que trabajen con lesiones deportivas?',
        a: 'Sí, güey. El barrio médico tiene fisioterapeutas con experiencia en lesiones musculoesqueléticas deportivas — rodilla, hombro, tobillo, zona lumbar — que trabajan en consultorios privados sobre Av. Doctores y Calle Aranda. Algunos tienen convenio con los gimnasios de Doctores para recibir casos derivados de entrenadores. La sesión va de $350 a $600 MXN. La diferencia con una fisioterapia en Roma Norte o Condesa no es el nivel de atención — es el precio. Para quien necesita 10-15 sesiones de rehabilitación, el ahorro en Doctores es significativo.',
      },
      {
        q: '¿Qué servicios de nutrición hay en Doctores?',
        a: 'Hay consultorios de nutrición con enfoque deportivo y clínico sobre Av. Doctores y calles del barrio. El servicio incluye evaluación de composición corporal, historial alimenticio, plan semanal y seguimiento periódico. La consulta inicial va de $350 a $650 MXN; los seguimientos de $200 a $400 MXN. Algunos nutriólogos tienen formación clínica hospitalaria además de la especialización en nutrición deportiva — el perfil del barrio médico atrae ese tipo de profesional. Para quien quiere nutrición seria a precio accesible, Doctores es la mejor opción de Cuauhtémoc.',
      },
      {
        q: '¿Hay spas o servicios de relajación en Doctores?',
        a: 'No hay spas con instalaciones completas (sauna, vapor, alberca) en Doctores. Hay centros de masaje y relajación sobre calles internas del barrio con precios de $250-$550 MXN por sesión de 60 minutos. El servicio es funcional y honesto: masaje de recuperación muscular, relajación de tejido blando, trabajo en puntos de tensión. Para instalaciones de spa completo, el Centro Histórico o Tabacalera son los destinos más cercanos. Para la mayoría de quienes entrenan en el barrio, el masaje post-gym en Doctores es suficiente y sostenible.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$350–$650 MXN' },
      { label: 'Masaje deportivo 60m', value: '$250–$550 MXN' },
      { label: 'Fisioterapia sesión',  value: '$350–$600 MXN' },
      { label: 'Ventaja diferencial',  value: 'Red médica integrada' },
    ],
    barrios: [
      { name: 'Obrera',      slug: 'obrera',      district: 'cuauhtemoc' },
      { name: 'Centro',      slug: 'centro',      district: 'cuauhtemoc' },
      { name: 'Tabacalera',  slug: 'tabacalera',  district: 'cuauhtemoc' },
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
