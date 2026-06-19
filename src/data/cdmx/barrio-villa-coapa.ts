// src/data/cdmx/barrio-villa-coapa.ts
// Draft – lastReviewed: 2026-06-21

export const barrioContent = {
  nombre: 'Villa Coapa',
  slug: 'villa-coapa',
  group: 'B',
  parentDistrict: {
    nombre: 'Tlalpan',
    slug: 'tlalpan',
  },
  lastReviewed: '2026-06-21',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Villa Coapa es la zona del sur de la CDMX que más fitness bang por tu peso ofrece ahorita — y muy poca gente que no vive ahí lo sabe todavía, güey. Sobre Periférico Sur y Canal de Miramontes el nivel socioeconómico C+ sostiene una oferta de gyms y estudios impensable hace cinco años en Tlalpan. El CC Coapa actúa como anchor comercial y concentra las cadenas y estudios con mayor flujo de membresías del sur. Lo que diferencia a Villa Coapa de otros barrios con Smart Fit es que la zona está desarrollando una capa boutique por encima del volumen de cadena: estudios de pilates y funcional independientes que aprovechan el tráfico del Periférico y la base residencial estable. Los precios son entre 25 y 30% más bajos que Roma Norte — no porque el servicio sea inferior sino porque el m² en Tlalpan todavía no paga la renta

Para el vecino de Villa Coapa que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Villa Coapa en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Villa Coapa — Smart Fit, funcional y cadenas 2026',
    metaDesc: 'Gimnasios en Villa Coapa, CDMX: ~20 opciones de $499 a $1,800 MXN/mes. Periférico Sur, CC Coapa, Metro Olivos. Guía de Rodrigo 2026.',
    intro: `Villa Coapa tiene alrededor de 20 gimnasios y estudios, con una estructura de mercado diferente a las colonias premium del norte: una base sólida de cadenas con alto volumen — Smart Fit es el anchor visible — sobre la que crece una capa de gimnasios independientes y estudios boutique que aprovechan la demanda insatisfecha del C+ tlalpense. El rango de $499 a $1,800 MXN al mes cubre desde membresía Smart Fit sin restricciones hasta pilates Reformer con grupos pequeños.

La concentración más fuerte está sobre Periférico Sur y en el CC Coapa: acceso directo en coche y Metro Olivos para transporte público. Lo que hace a Villa Coapa interesante es la relación calidad-precio en el segmento medio: un gym funcional independiente con equipamiento serio y coaches certificados que en Roma Norte cobraría $2,200 MXN aquí está en $1,400-$1,600 MXN. Para el C+ del sur que entrena en serio, esa diferencia se siente en el bolsillo todos los meses.

El Bosque de Tlalpan queda a distancia razonable para running outdoor — no es el Vivero de Coyoacán en acceso inmediato pero es opción real para quien tiene coche o bici. Los gymns tienen horarios amplios — apertura desde las 5:30am y cierre hasta las 23hs — adaptados al ritmo de una zona donde muchos miembros combinan entrenamiento con trabajo en Insurgentes Sur, Tlalpan Centro o Xochimilco.`,
    faq: [
      {
        q: '¿Smart Fit en CC Coapa es una buena opción para entrenar en Villa Coapa?',
        a: 'Para quien busca equipamiento completo, horarios amplios y precio bajo, Smart Fit CC Coapa es chido — membresía desde $499 MXN al mes con acceso a pesas libres, máquinas, cardio y clases grupales incluidas. El punto débil es la densidad de socios en horarios pico: entre 6 y 9am y entre 18 y 21hs la afluencia es alta y el equipo más popular tiene espera. Si puedes entrenar entre 10am y 16hs o después de las 21hs, la experiencia mejora notablemente. Para fuerza seria con barra olímpica y plataforma, hay gymns independientes en la zona con ese equipamiento por $900-$1,400 MXN.',
      },
      {
        q: '¿Cómo llego a los gimnasios de Villa Coapa sin coche?',
        a: 'Metro Olivos (Línea 2) es la entrada más práctica — desde la estación al CC Coapa son 5 minutos caminando. También hay varias rutas de Metrobús y pesero sobre Periférico Sur y Canal de Miramontes que cubren la zona. Para los gimnasios independientes de Villa Coapa que no están en el CC sino sobre las calles interiores del barrio, Ecobici tiene algunas estaciones. Sin coche el acceso es más limitado que en colonias del norte, pero para el CC Coapa y sus alrededores directos el Metro Olivos resuelve bien.',
      },
      {
        q: '¿Vale la pena pagar más por un gym boutique en Villa Coapa versus Smart Fit?',
        a: 'Depende del objetivo, güey. Si entrenas para salud general con cardio y algo de pesas, Smart Fit en $499-$699 MXN hace el trabajo. Si quieres coaching real en clase, programación periodizada, corrección técnica individual y grupos pequeños donde el coach te conoce, los estudios boutique de la zona en $1,200-$1,800 MXN valen la diferencia. La pregunta honesta es: ¿cuántas veces por semana vas realmente y con qué intensidad? Si vas 3-4 veces con ganas de progresar, el boutique paga con resultados.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Villa Coapa tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Villa Coapa suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~20' },
      { label: 'Membresía mensual', value: '$499–$1,800 MXN' },
      { label: 'Anchor',            value: 'Smart Fit CC Coapa' },
      { label: 'vs. Roma Norte',    value: '~28% más económico' },
    ],
    barrios: [
      { name: 'Toriello Guerra',         slug: 'toriello-guerra',          district: 'tlalpan' },
      { name: 'Fuentes del Pedregal',    slug: 'fuentes-del-pedregal',     district: 'tlalpan' },
      { name: 'Coyoacán Centro',         slug: 'coyoacan-centro',          district: 'coyoacan' },
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
    h1: 'Estudios fitness en Villa Coapa — Pilates, yoga y spinning 2026',
    metaDesc: 'Estudios en Villa Coapa, CDMX: pilates, yoga y spinning de $120 a $260 MXN/clase. Periférico Sur y CC Coapa. Guía 2026.',
    intro: `Los estudios boutique de Villa Coapa son el lado de la zona que más rápido crece — y el que más sorprende a quien viene esperando solo cadenas de volumen. Sobre las calles interiores y en el CC Coapa hay estudios de pilates Reformer, yoga y spinning que compiten en calidad con colonias premium del norte, con precios entre 25 y 30% más accesibles. El rango por clase suelta va de $120 a $250 MXN, con paquetes mensuales ilimitados de $1,000 a $1,700 MXN.

El pilates de Villa Coapa es el servicio boutique con mejor trayectoria de crecimiento del barrio: estudios con Reformers de marca reconocida, instructoras con certificación de 450 o 500 horas y grupos de máximo 6-8 personas. La diferencia respecto a Roma Norte es de $50-$90 MXN por clase suelta — significativa para quien hace pilates 3 veces por semana. Para yoga, la oferta es más modesta en cantidad pero consistente: Hatha y Vinyasa predominan, con algunos estudios que tienen instructoras con formación de linaje específico.

El spinning del CC Coapa tiene el perfil más de volumen que boutique — bikes calibradas hay, pero los estudios con métricas individuales y periodización real son todavía pocos comparado con Condesa o Roma Norte. Para cardio intenso con estructura, la alternativa más chida en la zona es el HIIT funcional de los gimnasios independientes de Villa Coapa: clases de 45 minutos con coach, programación en ciclos y grupos con seguimiento real de progresión.`,
    faq: [
      {
        q: '¿Hay estudios de pilates Reformer en Villa Coapa?',
        a: 'Sí, güey — hay al menos 3-4 estudios con Reformers en operación regular en la zona. Los precios van de $180 a $260 MXN por clase suelta y de $1,000 a $1,600 MXN por mensualidad ilimitada. Para Villa Coapa, esto representa la mejor relación calidad-precio de pilates Reformer del sur de la ciudad. Las instructoras en los estudios que vale la pena buscar tienen certificación de 450 horas mínimo — preguntá directamente al contactar, los buenos estudios siempre lo mencionan sin que tengas que insistir.',
      },
      {
        q: '¿El yoga en Villa Coapa es de buen nivel?',
        a: 'Para nivel principiante a intermedio, sí — hay clases con instructoras certificadas y grupos de tamaño razonable. Para practicantes avanzados que buscan Ashtanga serio, Iyengar o Kundalini con lineaje específico, la oferta es más limitada que en Coyoacán Centro o Condesa. Si ya tienes práctica establecida y vienes de una zona más boutique del norte, vas a encontrar opciones pero con menos variedad de estilos. Si estás empezando ahorita o llevás menos de dos años de práctica, Villa Coapa tiene todo lo que necesitas.',
      },
      {
        q: '¿Cuánto cuesta una clase de spinning en Villa Coapa?',
        a: 'El rango es de $120 a $200 MXN por clase suelta en los estudios del área. Los paquetes de 10 clases generalmente salen a $1,000-$1,500 MXN con vigencia de 30-45 días. El spinning del CC Coapa y alrededores está en la parte baja del rango boutique — bikes calibradas y buena música pero sin el sistema de métricas individuales que tienen los estudios de Condesa o Roma Norte. Para spinning de alto rendimiento con datos, vas a tener que ir más al norte; para cardio intenso con estructura básica, Villa Coapa resuelve bien.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~8' },
      { label: 'Clase suelta',      value: '$120–$260 MXN' },
      { label: 'Mensual ilimitado', value: '$1,000–$1,700 MXN' },
      { label: 'Especialidad',      value: 'Pilates Reformer · HIIT funcional' },
    ],
    barrios: [
      { name: 'Toriello Guerra',         slug: 'toriello-guerra',          district: 'tlalpan' },
      { name: 'Fuentes del Pedregal',    slug: 'fuentes-del-pedregal',     district: 'tlalpan' },
      { name: 'Coyoacán Centro',         slug: 'coyoacan-centro',          district: 'coyoacan' },
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
    h1: 'Entrenadores personales en Villa Coapa — PT certificados 2026',
    metaDesc: 'Entrenadores personales en Villa Coapa, CDMX: $300–$750 MXN/sesión. Fuerza, funcional y HIIT. Guía de Rodrigo 2026.',
    intro: `Los entrenadores personales de Villa Coapa representan una de las mejores propuestas de valor del sur del DF. El barrio tiene PTs certificados con experiencia real sin el premium de ubicación que infla los precios en Polanco, Condesa o Roma Norte — la misma formación, el mismo nivel de coaching, sin pagar el m² de la Cuauhtémoc. El rango de precio por sesión va de $300 a $750 MXN, con la media del entrenador certificado en $450-$600 MXN.

La demanda del C+ de Villa Coapa está generando una oferta de PTs cada vez más especializada: entrenadores de fuerza con certificación en powerlifting o halterofilia, coaches funcionales con background deportivo y entrenadores de HIIT con periodización real de ciclos de 4-6 semanas. Para quien entrena 3-4 veces por semana con objetivo de composición corporal o rendimiento atlético recreativo, los PTs de Villa Coapa tienen lo que se necesita sin el costo inflado de las zonas premium.

Los entrenadores trabajan principalmente en los gimnasios independientes de Villa Coapa de la zona — algunos hacen sesiones en el Bosque de Tlalpan para trabajo outdoor de cardio e intervalos. La modalidad más común es 2 sesiones semanales con PT más 1-2 sesiones independientes con programa del coach. Para paquetes de 10 o más sesiones, la mayoría ofrece descuentos de 10-15% sobre el precio unitario.`,
    faq: [
      {
        q: '¿Cuánto cuesta un entrenador personal en Villa Coapa?',
        a: 'El rango es de $300 a $750 MXN por sesión de una hora. La media del mercado para un PT certificado con 2 o más años de experiencia real está en $450-$600 MXN — notablemente más accesible que los $700-$1,200 MXN que cobra el mismo perfil en Polanco o Condesa. Los PTs más económicos en $300-$400 MXN generalmente son recién egresados de certificación con menos experiencia práctica; los de $650-$750 MXN tienen especializaciones adicionales o trayectoria competitiva. Paquetes de 10 sesiones traen descuento en casi todos los casos.',
      },
      {
        q: '¿Hay entrenadores especializados en fuerza en Villa Coapa?',
        a: 'Sí, y es ahorita el punto fuerte del barrio en entrenadores personales. Villa Coapa tiene varios PTs con background en powerlifting, fuerza olímpica o calistenia avanzada que trabajan en los gimnasios independientes de Villa Coapa de la zona. Si buscas mejorar sentadilla, peso muerto o press con técnica real y programación periodizada, estos entrenadores lo hacen bien. Preguntá específicamente por sus certificaciones en fuerza — las más reconocidas en México son NSCA-CSCS, PICP o certificaciones específicas de halterofilia FMH.',
      },
      {
        q: '¿Los entrenadores de Villa Coapa hacen sesiones outdoor?',
        a: 'Algunos sí — el Bosque de Tlalpan queda a distancia razonable para quienes tienen coche, y hay PTs del barrio que incluyen sesiones outdoor como parte de su programación para trabajo de cardio en intervalos, agilidad o entrenamiento funcional en superficie irregular. Es más limitado que la opción del Vivero de Coyoacán para PTs de Coyoacán Centro, pero existe. Si buscas entrenamiento outdoor como parte del plan, mencionalo al contactar al PT — muchos lo ofrecen sin problema pero no siempre lo anuncian directamente.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Precio sesión',  value: '$300–$750 MXN/hora' },
      { label: 'Media mercado',  value: '$450–$600 MXN' },
      { label: 'Especialidad',   value: 'Fuerza · Funcional · HIIT' },
      { label: 'vs. Polanco',    value: '~40% más económico' },
    ],
    barrios: [
      { name: 'Toriello Guerra',         slug: 'toriello-guerra',          district: 'tlalpan' },
      { name: 'Fuentes del Pedregal',    slug: 'fuentes-del-pedregal',     district: 'tlalpan' },
      { name: 'Coyoacán Centro',         slug: 'coyoacan-centro',          district: 'coyoacan' },
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
    h1: 'Eventos fitness en Villa Coapa — Carreras, clases y retos 2026',
    metaDesc: 'Eventos fitness en Villa Coapa, CDMX: carreras, clases grupales y retos de gymns. Periférico Sur y CC Coapa. Guía 2026.',
    intro: `Villa Coapa tiene una escena de eventos fitness que todavía está construyendo su identidad — más joven y menos consolidada que Coyoacán o Condesa, pero con dinámica de crecimiento real y una base C+ que cada año participa más en carreras, retos de gymns y eventos grupales. El CC Coapa y el Periférico son los espacios donde ocurren los eventos de mayor volumen; las calles internas del barrio tienen la escena más pequeña y comunitaria.

El calendario tiene dos tipos bien diferenciados: eventos corporativos de cadenas — Smart Fit y otros hacen retos de 30 días, semanas de prueba gratuita y clases masivas al aire libre — y eventos independientes de los estudios boutique, más pequeños pero con mayor coherencia de comunidad. Para carreras, el Bosque de Tlalpan recibe varios 5K y 10K durante el año a menos de 15 minutos en coche.

La zona sur en general está ganando eventos de running y fitness que antes eran exclusivos del norte: runs nocturnos sobre Insurgentes Sur y Periférico, yoga al aire libre en parques de Tlalpan y talleres de bienestar que se mueven desde Coyoacán hacia el sur. Villa Coapa está bien posicionada para recibir este derrame — la infraestructura del CC Coapa da espacios amplios y el acceso por Periférico facilita la logística.`,
    faq: [
      {
        q: '¿Hay carreras populares cerca de Villa Coapa?',
        a: 'Sí — el Bosque de Tlalpan es el escenario más cercano para carreras organizadas de 5K y 10K, a unos 12-15 minutos en coche desde el barrio. Durante el año hay al menos 4-6 eventos de running organizados ahí. Insurgentes Sur y el Anillo Periférico también reciben carreras nocturnas y matutinas organizadas por grupos de running de la zona sur. Para enterarte de los próximos eventos, seguí los grupos de running de Tlalpan en Strava y Facebook — son la fuente más actualizada del calendario local.',
      },
      {
        q: '¿Los gymns de Villa Coapa organizan retos o eventos especiales?',
        a: 'Los gymns de cadena como Smart Fit hacen retos internos de 30 días con seguimiento de resultados — generalmente 2-3 veces al año — que incluyen premios como meses gratis o merchandise. Los estudios boutique de la zona hacen talleres de fin de semana ocasionales, semanas de prueba gratuita y clases abiertas al aire libre para atraer nuevos miembros. No es la frecuencia de eventos de Condesa o Roma Norte, pero hay actividad. Seguí las cuentas de Instagram de los estudios del CC Coapa para enterarte con anticipación.',
      },
      {
        q: '¿Hay clases de yoga o fitness al aire libre en Villa Coapa?',
        a: 'De forma esporádica sí — algunos parques del barrio residencial y el área externa del CC Coapa han tenido clases abiertas de yoga y funcional, principalmente en temporadas de buen clima. No es una programación fija como la del domingo en Plaza Hidalgo de Coyoacán, pero va creciendo. El Bosque de Tlalpan es la mejor opción para actividad outdoor programada cerca de la zona — clases de yoga y caminatas organizadas suceden ahí con relativa frecuencia en fines de semana.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Carreras cercanas',  value: 'Bosque Tlalpan 5K · 10K' },
      { label: 'Retos de gymns',     value: '2-3 veces al año' },
      { label: 'Clases outdoor',     value: 'Esporádicas, creciendo' },
      { label: 'Runs nocturnos',     value: 'Insurgentes Sur · Periférico' },
    ],
    barrios: [
      { name: 'Toriello Guerra',         slug: 'toriello-guerra',          district: 'tlalpan' },
      { name: 'Fuentes del Pedregal',    slug: 'fuentes-del-pedregal',     district: 'tlalpan' },
      { name: 'Coyoacán Centro',         slug: 'coyoacan-centro',          district: 'coyoacan' },
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
    h1: 'Bienestar en Villa Coapa — Spa, nutrición y terapias 2026',
    metaDesc: 'Bienestar en Villa Coapa, CDMX: nutricionistas, masajes y terapias de $400–$800 MXN. Periférico Sur y CC Coapa. Guía 2026.',
    intro: `El ecosistema de bienestar de Villa Coapa está en un momento interesante: la base C+ del barrio tiene poder adquisitivo y demanda real de servicios de salud más allá del gym, pero la oferta boutique todavía está construyéndose. Lo que hay ahorita es sólido en el rango funcional — nutricionistas con enfoque en rendimiento, masajistas con técnica real y algunas clínicas de fisioterapia que atienden tanto a deportistas como a trabajadores sedentarios del área — pero sin la profundidad ni la especialización de zonas como Coyoacán o Polanco.

El rango de precio para bienestar en Villa Coapa es directamente atractivo: consultas de nutrición en $500-$1,000 MXN, masajes terapéuticos en $400-$750 MXN por 60 minutos y fisioterapia en $400-$700 MXN por sesión. Para el C+ del sur que antes tenía que subir a Coyoacán o Insurgentes para encontrar servicios de calidad, la oferta local ha mejorado notablemente en los últimos dos años. El CC Coapa concentra varios de estos servicios con acceso cómodo desde el estacionamiento.

Lo que falta en Villa Coapa en bienestar es la capa más especializada: espacios de meditación con programación continua, nutricionistas funcionales con enfoque integrativo profundo y terapias alternativas como acupuntura o osteopatía. Para esas necesidades, Coyoacán Centro queda a 15-20 minutos y tiene una oferta mucho más desarrollada. Para bienestar corporal directo — nutrición deportiva, recuperación muscular, fisioterapia de mantenimiento — Villa Coapa resuelve bien sin tener que salir del sur, güey.`,
    faq: [
      {
        q: '¿Hay nutricionistas deportivos en Villa Coapa?',
        a: 'Sí — el área tiene varios nutricionistas con enfoque en rendimiento deportivo y composición corporal. Los precios van de $500 a $1,000 MXN por consulta inicial con plan personalizado. El perfil predominante es nutrición deportiva convencional — macros, timing de nutrientes, suplementación básica. Para nutrición funcional más integrativa con enfoque en inflamación y microbioma, la oferta en Villa Coapa es más limitada; para ese perfil es mejor ir a Coyoacán Centro o Insurgentes Sur. Para atletas recreativos con objetivo de composición corporal, los nutricionistas de la zona hacen bien el trabajo.',
      },
      {
        q: '¿Cuánto cuesta un masaje en Villa Coapa?',
        a: 'El rango es de $400 a $750 MXN por 60 minutos — entre 15 y 25% más económico que el equivalente en Condesa o Roma Norte. Masaje de relajación: $400-$550 MXN. Masaje deportivo o tejido profundo: $550-$750 MXN. El CC Coapa tiene algunos spas con estos servicios; también hay masajistas independientes sobre las calles internas del barrio que trabajan en espacio propio. Recomendá siempre verificar certificación — en México el estándar mínimo serio es CENART o certificación equivalente de 500 horas de formación.',
      },
      {
        q: '¿Hay fisioterapia deportiva en Villa Coapa?',
        a: 'Sí, y es uno de los servicios de bienestar más desarrollados de la zona — varias clínicas de fisioterapia sobre Periférico Sur y Canal de Miramontes atienden tanto lesiones deportivas como problemas posturales. El precio por sesión está en $400-$700 MXN, más económico que las clínicas del norte de la ciudad. Para lesiones de rodilla, espalda baja o hombro relacionadas con entrenamiento, las clínicas de Villa Coapa tienen fisioterapeutas con experiencia deportiva real. Para rehabilitación post-quirúrgica más especializada, puede ser que necesites ir a centros del norte con mayor equipamiento.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',  value: '$500–$1,000 MXN' },
      { label: 'Masaje terapéutico',  value: '$400–$750 MXN/60 min' },
      { label: 'Fisioterapia',        value: '$400–$700 MXN/sesión' },
      { label: 'vs. Roma Norte',      value: '~22% más económico' },
    ],
    barrios: [
      { name: 'Toriello Guerra',         slug: 'toriello-guerra',          district: 'tlalpan' },
      { name: 'Fuentes del Pedregal',    slug: 'fuentes-del-pedregal',     district: 'tlalpan' },
      { name: 'Coyoacán Centro',         slug: 'coyoacan-centro',          district: 'coyoacan' },
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
