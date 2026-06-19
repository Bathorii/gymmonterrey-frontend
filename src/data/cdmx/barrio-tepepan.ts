// src/data/cdmx/barrio-tepepan.ts
// Draft – lastReviewed: 2026-06-30

export const barrioContent = {
  nombre: 'Tepepan',
  slug: 'tepepan',
  group: 'C',
  parentDistrict: {
    nombre: 'Xochimilco',
    slug: 'xochimilco',
  },
  lastReviewed: '2026-06-30',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Tepepan es, junto con Pedregal de Santo Domingo, el barrio de Xochimilco con el NSE más alto de la alcaldía: clase C consolidada con algunas familias C+ en privadas sobre Calz. de Tlalpan y Av. División del Norte. El barrio no tiene el turismo ni el ambiente de los canales del centro de Xochimilco — es residencial, tranquilo y bien servido de comercio local. Calz. de Tlalpan es el eje de conexión norte-sur que lo vincula con Villa Coapa al norte y con Xochimilco centro al sur, y también con el Tren Ligero que corre paralelo al eje. La cercanía con Tlalpan y Villa Coapa genera demanda de fitness de perfil más ambicioso que el del Xochimilco popular: el vecino de Tepepan ya conoce los gymns de Villa Coapa y tiene criterio comparativo. La oferta local responde: gymns de gama media, algunos estudios emergentes, y personal trainers con

Para el vecino de Tepepan que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Tepepan en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Tepepan — fitness mid en el Xochimilco residencial 2026',
    metaDesc: 'Gimnasios en Tepepan, Xochimilco, CDMX: ~4 opciones de $600 a $1,400 MXN/mes. Calz. de Tlalpan, Av. División del Norte. NSE C, mejor perfil de Xochimilco. Guía',
    intro: `Tepepan tiene alrededor de 4 gimnasios activos, distribuidos sobre Calz. de Tlalpan, Calle Tepepan y Av. División del Norte. El rango de membresía es el más alto de Xochimilco: $600 a $1,400 MXN mensual, con la mayoría de los gymns bien equipados en el tramo $800–$1,100 MXN. No es el precio de Villa Coapa ni de Coyoacán, pero está claramente por encima del resto de la alcaldía. La inscripción inicial va de $300 a $600 MXN, con condonación frecuente en promociones de temporada.

El perfil del socio en Tepepan es más exigente que el del Xochimilco popular: conoce bien el servicio de Villa Coapa y Toriello Guerra, tiene criterio comparativo, y no tolera equipamiento en mal estado ni falta de personal en piso. Los gymns que funcionan en la zona son los que mantienen estándar de limpieza, equipamiento actualizado y horarios respetados. Mancuernas hasta 50kg en los gymns más completos, máquinas de cable y poleas de calidad, área cardiovascular con equipo reciente, y duchas con temperatura estable.

Algunos gymns de Tepepan tienen clases de grupo incluidas en membresía — spinning, funcional, yoga básico — con mayor variedad que el promedio de Xochimilco. También hay capacidad de PT sin salir del gym. La conectividad es buena: Calz. de Tlalpan tiene camión constante hacia Villa Coapa al norte y hacia el centro de Xochimilco al sur, y el Tren Ligero corre paralelo al eje con estación cercana.`,
    faq: [
      {
        q: '¿Cuánto cuesta un gym en Tepepan comparado con el resto de Xochimilco?',
        a: 'En Tepepan las membresías van de $600 a $1,400 MXN mensual, el rango más alto de Xochimilco. Comparado con el Xochimilco popular donde el gym estándar va de $400 a $900 MXN, Tepepan está 30-40% por encima. La diferencia se justifica en mejor equipamiento, más espacio y personal más capacitado. Comparado con Villa Coapa o Toriello Guerra en Tlalpan — donde las membresías van de $700 a $1,600 MXN — Tepepan es equivalente o ligeramente más accesible para equipamiento similar.',
      },
      {
        q: '¿Los gymns de Tepepan tienen mejor equipamiento que el resto de Xochimilco?',
        a: '¡Sí, notablemente! El equipamiento en Tepepan es el más completo de la alcaldía: mancuernas hasta 50kg en los gymns más grandes, máquinas de cable de marcas reconocidas, área cardiovascular con equipo de menos de 5 años, y zonas de funcional con kettlebells, TRX y cajas de pliometría. Algunos gymns tienen área separada de spinning con bikes de calidad. Para el perfil C del barrio, que conoce los estándares de Villa Coapa, esto es lo mínimo aceptable — y los gymns de Tepepan lo cumplen.',
      },
      {
        q: '¿Cómo llego a los gymns de Tepepan desde otras zonas de CDMX?',
        a: 'Desde Tlalpan y Villa Coapa: camión sobre Calz. de Tlalpan hacia el sur, 10-15 minutos. Tren Ligero con estación cercana desde el norte (Taxqueña) es otra opción cómoda. Desde Coyoacán: Av. División del Norte directa hacia el sur, 20-25 minutos en camión o auto. Desde el centro de CDMX: Calz. de Tlalpan en camión es el eje más directo, aunque tarda más — 35-45 minutos dependiendo del tráfico. Auto es la opción más práctica para quien viene de fuera; hay estacionamiento en la calle sin problema en los gymns de Tepepan.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Tepepan tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Tepepan suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~4' },
      { label: 'Membresía mensual', value: '$600–$1,400 MXN' },
      { label: 'Referente',         value: 'Calz. de Tlalpan / Av. División del Norte' },
      { label: 'Perfil',            value: 'Mid fitness, mejor NSE de Xochimilco' },
    ],
    barrios: [
      { name: 'Paseos del Sur',    slug: 'paseos-sur',       district: 'xochimilco' },
      { name: 'Toriello Guerra',   slug: 'toriello-guerra',  district: 'tlalpan'    },
      { name: 'Villa Coapa',       slug: 'villa-coapa',      district: 'tlalpan'    },
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
    h1: 'Estudios en Tepepan',
    metaDesc: 'Estudios y clases en Tepepan, Xochimilco: spinning, funcional y yoga incluidos o desde $120 MXN/clase. Calz. de Tlalpan. NSE C, mid fitness. Guía 2026.',
    intro: `Tepepan tiene la oferta de estudios más diversa de Xochimilco: no es Roma Norte ni Coyoacán, pero sí hay más allá del aeróbics y zumba del Xochimilco popular. Los gymns de la zona incluyen clases de spinning, funcional avanzado y yoga básico en la membresía o con cargo reducido. Y en el último año aparecieron uno o dos estudios pequeños independientes con pilates mat y yoga flow en grupos de máximo 12 personas — perfil que responde a la demanda del vecino de Tepepan que conoce los estudios de Villa Coapa y quiere algo cercano sin cruzar la alcaldía.

El spinning en Tepepan es el formato con más demanda fuera de las pesas: algunos gymns tienen sala de spinning dedicada con bikes de calidad media y instructor certificado. Las clases van de 45 a 60 minutos, con horarios de mañana y tarde. El precio como clase suelta — cuando no está incluida en membresía — va de $120 a $200 MXN. Para Xochimilco, ese precio y ese formato es inusual: es estándar de Tlalpan o Coyoacán importado al barrio con mejor NSE de la alcaldía.

El yoga y el pilates mat emergentes en Tepepan son pequeños — máximo 8-12 alumnos por clase, en locales sin pretensiones de spa boutique — pero el nivel de instrucción es adecuado. La clase suelta va de $130 a $220 MXN. Para Xochimilco, eso es novedad real.`,
    faq: [
      {
        q: '¿Hay spinning en Tepepan?',
        a: '¡Sí! Es el formato de clase más característico de Tepepan dentro de Xochimilco. Algunos gymns tienen sala de spinning dedicada con bikes de calidad media y clases de 45-60 minutos con instructor certificado. Las clases están incluidas en membresías premium o tienen cargo de $120–$200 MXN como clase suelta. Es un formato que no existe en la mayoría de los barrios de Xochimilco — para encontrarlo más desarrollado hay que ir a Villa Coapa o Toriello Guerra. En Tepepan, está disponible sin cruzar la alcaldía.',
      },
      {
        q: '¿Hay yoga o pilates en Tepepan?',
        a: 'Hay uno o dos estudios pequeños en Tepepan con yoga flow y pilates mat en grupos de 8-12 personas, establecidos en el último año. No tienen el acabado de los estudios de Coyoacán o Roma Norte, pero la instrucción es competente y el ambiente es tranquilo — acorde con el carácter residencial del barrio. La clase suelta va de $130 a $220 MXN. Verificá que estén operando antes de ir — algunos estudios nuevos tienen horarios variables. Son los primeros de este formato en Xochimilco fuera del corredor de Tepepan.',
      },
      {
        q: '¿Vale más la pena ir a estudios de Tepepan o de Villa Coapa?',
        a: 'Depende de la especialización que busqués, güey. Para spinning y funcional, Tepepan tiene oferta local decente que evita el desplazamiento a Villa Coapa. Para yoga y pilates, la oferta de Villa Coapa tiene más trayectoria, más formatos y mejor infraestructura — vale el traslado si eso es tu objetivo principal. Para el vecino de Tepepan que quiere spinning o funcional sin salir del barrio, la oferta local está bien y el precio es comparable. Para especialización avanzada en modalidades específicas, Villa Coapa o Toriello Guerra tienen más opciones.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Clases disponibles',  value: 'Spinning / Funcional / Yoga / Pilates mat' },
      { label: 'Clase suelta',        value: '$120–$220 MXN' },
      { label: 'Incluido membresía',  value: 'En gymns premium de la zona' },
      { label: 'Tendencia',           value: 'Estudios boutique emergentes' },
    ],
    barrios: [
      { name: 'Paseos del Sur',    slug: 'paseos-sur',       district: 'xochimilco' },
      { name: 'Toriello Guerra',   slug: 'toriello-guerra',  district: 'tlalpan'    },
      { name: 'Villa Coapa',       slug: 'villa-coapa',      district: 'tlalpan'    },
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
    h1: 'Entrenadores personales en Tepepan',
    metaDesc: 'Entrenadores personales en Tepepan, Xochimilco: PT $400–$800 MXN/sesión. Calz. de Tlalpan. NSE C, mejor oferta de PT en Xochimilco. Guía 2026.',
    intro: `El personal training en Tepepan es el más desarrollado de Xochimilco: $400 a $800 MXN por sesión individual, con entrenadores que en varios casos tienen más experiencia y especialización que el promedio de la alcaldía. El perfil del cliente de Tepepan — C con criterio comparativo de Villa Coapa — empuja hacia arriba la calidad del entrenador que puede trabajar en la zona. Los que se establecen aquí saben que el cliente conoce el mercado.

Los entrenadores de Tepepan trabajan dentro de los gymns sobre Calz. de Tlalpan y también hacen PT outdoor en la zona — el Parque Ecológico de Xochimilco y las áreas verdes del corredor de Tlalpan son opciones para sesiones al aire libre que algunos clientes prefieren. Hay entrenadores con especialización en fuerza, en pérdida de peso con periodización, y en funcional para adultos mayores — este último perfil es más frecuente en Tepepan que en barrios similares porque el barrio tiene una población adulta establecida con demanda de ese tipo de programa.

Para PT de rendimiento deportivo específico — preparación para competencia, halterofilia, rehabilitación post-lesión — la opción más completa sigue siendo Villa Coapa o Coyoacán. Para todo el rango de PT de propósito general con nivel C, Tepepan lo tiene sin necesidad de salir de Xochimilco.`,
    faq: [
      {
        q: '¿Cuánto cobra un PT en Tepepan comparado con el resto de Xochimilco?',
        a: 'En Tepepan el PT va de $400 a $800 MXN por sesión — el rango más alto de Xochimilco, pero comparable con Toriello Guerra y Villa Coapa en Tlalpan. Comparado con el resto de Xochimilco donde el PT va de $280 a $600 MXN, Tepepan está 25-35% por encima. La diferencia se justifica en mayor especialización del entrenador y mejores instalaciones donde opera. Los paquetes de 10 sesiones van de $3,200 a $6,400 MXN con 15-20% de descuento.',
      },
      {
        q: '¿Hay entrenadores especializados en adultos mayores en Tepepan?',
        a: '¡Sí, y es una de las especialidades más presentes en el barrio! Tepepan tiene una población adulta establecida de 50-70 años con demanda de programa de fuerza funcional, movilidad y equilibrio. Hay entrenadores en la zona con experiencia específica en ese perfil — periodización para adulto mayor, adaptación de ejercicios para patologías comunes, trabajo de equilibrio y coordinación. Es un nicho que en Xochimilco solo está bien cubierto en Tepepan. Preguntá explícitamente al entrenador su experiencia con adultos mayores antes de contratar.',
      },
      {
        q: '¿Los entrenadores de Tepepan hacen sesiones outdoor?',
        a: 'Sí, algunos entrenadores de Tepepan incorporan sesiones en el Parque Ecológico de Xochimilco o en áreas verdes del corredor de Tlalpan como parte del programa. El formato combina funcional al aire libre con trabajo de fuerza bajo techo en el gym — alternancia que muchos clientes de la zona valoran. El cargo adicional por sesión outdoor varía: algunos entrenadores lo incluyen sin costo si el parque está en ruta, otros cobran $80-$100 MXN adicionales por traslado. Acordalo explícitamente antes de firmar el paquete.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$400–$800 MXN' },
      { label: 'Paquete 10 sesiones', value: '$3,200–$6,400 MXN' },
      { label: 'Especialidad local',  value: 'Adultos mayores / Funcional' },
      { label: 'Outdoor disponible',  value: 'Parque Ecológico de Xochimilco' },
    ],
    barrios: [
      { name: 'Paseos del Sur',    slug: 'paseos-sur',       district: 'xochimilco' },
      { name: 'Toriello Guerra',   slug: 'toriello-guerra',  district: 'tlalpan'    },
      { name: 'Villa Coapa',       slug: 'villa-coapa',      district: 'tlalpan'    },
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
    h1: 'Eventos fitness en Tepepan — activaciones en el sur de CDMX 2026',
    metaDesc: 'Eventos fitness en Tepepan, Xochimilco: carreras, clases abiertas y actividades en parque de $0 a $350 MXN. Calz. de Tlalpan. Guía 2026.',
    intro: `Los eventos de fitness en Tepepan tienen el carácter del barrio: organizados, tranquilos y con más coherencia que escándalo. Los gymns sobre Calz. de Tlalpan y Av. División del Norte hacen eventos internos de medición de composición corporal, retos de asistencia mensual y presentación de nuevas modalidades de clase. La comunicación va por WhatsApp de socios e Instagram de los gymns — en Tepepan, a diferencia del Xochimilco popular, Instagram está medianamente activo y es una fuente válida de aviso de novedades.

El Parque Ecológico de Xochimilco — 287 hectáreas a 10-15 minutos de Tepepan — es el referente outdoor de la zona. Las carreras organizadas en el parque o en el corredor Xochimilco son los eventos fitness de mayor escala accesibles desde el barrio sin necesidad de cruzar la ciudad. El Gobierno de Xochimilco y las asociaciones de corredores del sur de CDMX organizan 2-3 carreras anuales en el parque — seguí sus redes para enterarte de fechas.

Av. División del Norte es también eje de llegada hacia Coyoacán y sus eventos fitness más desarrollados. Para quien vive en Tepepan y quiere participar en clases masivas, ferias de bienestar o eventos de running de mayor producción, Coyoacán está a 20-25 minutos en camión y tiene la oferta más activa del sur de CDMX en ese formato.`,
    faq: [
      {
        q: '¿Hay carreras organizadas cerca de Tepepan?',
        a: 'El Parque Ecológico de Xochimilco organiza 2-3 carreras anuales en sus circuitos interiores — son las más cercanas y accesibles desde Tepepan, a 10-15 minutos en camión. El Gobierno de Xochimilco también organiza carreras en el corredor de Calz. de Tlalpan en fechas específicas. Para carreras más frecuentes y de mayor escala, el corredor de Tlalpan — carreras en Parque Fuentes Brotantes, Pedregal, etc. — está a 15-20 minutos hacia el norte. Seguí las redes de la alcaldía de Xochimilco y de las asociaciones de corredores del sur para el calendario completo.',
      },
      {
        q: '¿Cómo me entero de eventos en los gymns de Tepepan?',
        a: 'Instagram de los gymns de Tepepan está medianamente activo — más que en barrios populares de Xochimilco. Es una fuente válida para seguir novedades de clases, cambios de horario y eventos. WhatsApp de socios sigue siendo el canal más inmediato. Para eventos de la alcaldía y del Parque Ecológico de Xochimilco, seguí sus perfiles de Instagram y Facebook — tienen presencia activa y publican eventos con anticipación suficiente para planear. El cartel físico en los gymns también funciona para los eventos internos.',
      },
      {
        q: '¿Hay actividad outdoor gratuita cerca de Tepepan?',
        a: '¡Sí, y buena! El Parque Ecológico de Xochimilco tiene área de calistenia, circuito de running bien señalado, y espacio para funcional al aire libre. Hay grupos de running y caminata que se organizan en el parque los fines de semana — algunos vinculados a los gymns de Tepepan, otros autónomos. El parque tiene acceso gratuito en los horarios de apertura de la alcaldía. Es el mejor recurso outdoor de la zona y un diferenciador real de Tepepan frente a barrios del oriente de CDMX que no tienen esa proximidad a espacio verde de escala.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Formato habitual', value: 'Retos / Clases abiertas / Running en parque' },
      { label: 'Precio eventos',   value: '$0–$350 MXN' },
      { label: 'Comunicación',     value: 'WhatsApp + Instagram activo' },
      { label: 'Outdoor cercano',  value: 'Parque Ecológico Xochimilco (10-15 min)' },
    ],
    barrios: [
      { name: 'Paseos del Sur',    slug: 'paseos-sur',       district: 'xochimilco' },
      { name: 'Toriello Guerra',   slug: 'toriello-guerra',  district: 'tlalpan'    },
      { name: 'Villa Coapa',       slug: 'villa-coapa',      district: 'tlalpan'    },
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
    h1: 'Bienestar en Tepepan — nutrición y recuperación mid en Xochimilco 2026',
    metaDesc: 'Bienestar en Tepepan, Xochimilco: nutrición $450–$900 MXN, masaje $350–$750 MXN. Calz. de Tlalpan. NSE C, mejor oferta de bienestar en Xochimilco. Guía 2026.',
    intro: `El bienestar en Tepepan es el más desarrollado de Xochimilco: nutrición con nutriólogos de mayor especialización, masaje deportivo de mayor calidad técnica, y el inicio de una oferta de recuperación activa que aún no existe en el resto de la alcaldía. Los consultorios de nutrición sobre Calz. de Tlalpan y Calle Tepepan tienen tanto perfil de pérdida de peso como nutrición deportiva básica para quien entrena con regularidad. Primera consulta de $450 a $900 MXN; seguimiento mensual de $350 a $600 MXN — el rango C del barrio más alto de Xochimilco.

El masaje en Tepepan está en $350–$750 MXN por sesión de 60 minutos — claramente por encima del resto de Xochimilco pero equivalente al estándar de Toriello Guerra y Villa Coapa en Tlalpan. Hay centros de masaje con acabado más cuidado que el de los barrios populares: privacidad real, temperatura estable, camillas en buen estado. El tejido profundo deportivo y el drenaje linfático son los servicios más disponibles, con masaje tailandés y reflexología en algunos locales.

La oferta de recuperación activa de alta tecnología — crioterapia, compresión neumática — todavía no llegó a Tepepan. Toriello Guerra y Villa Coapa tienen más en ese rango. Pero para nutrición formal y masaje de recuperación de calidad media-alta sin cruzar la alcaldía, Tepepan es la única opción en Xochimilco que lo tiene.`,
    faq: [
      {
        q: '¿Los nutriólogos de Tepepan son mejores que los del resto de Xochimilco?',
        a: '¡En general sí, güey! Tepepan tiene nutriólogos con perfil más completo que el promedio de Xochimilco: algunos con especialización en nutrición deportiva básica, no solo pérdida de peso y control glucémico. La primera consulta va de $450 a $900 MXN y el seguimiento mensual de $350 a $600 MXN — más caro que el Xochimilco popular pero equivalente a Toriello Guerra. Para quien entrena 4-5 días por semana y quiere ajuste nutricional real con seguimiento de macros, los nutriólogos de Tepepan son la opción más adecuada dentro de Xochimilco.',
      },
      {
        q: '¿Qué servicios de masaje hay en Tepepan?',
        a: 'Tepepan tiene la mejor oferta de masaje de Xochimilco: tejido profundo deportivo, drenaje linfático, masaje sueco de relajación y en algunos locales masaje tailandés y reflexología. El precio va de $350 a $750 MXN por sesión de 60 minutos. Los espacios tienen mayor cuidado en acabado y privacidad que los del Xochimilco popular. Para masaje de recuperación post-entrenamiento de calidad sin cruzar a Tlalpan, Tepepan es la opción real dentro de la alcaldía.',
      },
      {
        q: '¿Hay servicios de recuperación activa en Tepepan?',
        a: 'La recuperación activa de alta tecnología — crioterapia, compresión neumática, baño de contraste — todavía no está disponible en Tepepan ni en el resto de Xochimilco. Para esos servicios hay que ir a Villa Coapa o Toriello Guerra en Tlalpan, a 15-20 minutos por Calz. de Tlalpan. Lo que sí está disponible en Tepepan son masaje deportivo técnico, drenaje linfático y en algunos locales ultrasonido terapéutico básico. Para el ciclo de recuperación de un entrenamiento de 4-5 días semanales, la oferta de Tepepan cubre las necesidades más frecuentes.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$450–$900 MXN' },
      { label: 'Masaje deportivo 60m', value: '$350–$750 MXN' },
      { label: 'Seguimiento mensual',  value: '$350–$600 MXN' },
      { label: 'Vs. resto Xochimilco', value: 'Mejor oferta de la alcaldía' },
    ],
    barrios: [
      { name: 'Paseos del Sur',    slug: 'paseos-sur',       district: 'xochimilco' },
      { name: 'Toriello Guerra',   slug: 'toriello-guerra',  district: 'tlalpan'    },
      { name: 'Villa Coapa',       slug: 'villa-coapa',      district: 'tlalpan'    },
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
