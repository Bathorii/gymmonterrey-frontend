// src/data/cdmx/barrio-roma-sur.ts
// Draft – lastReviewed: 2026-06-27

export const barrioContent = {
  nombre: 'Roma Sur',
  slug: 'roma-sur',
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

  sobreBarrio: `Roma Sur vive a la sombra de Roma Norte y esa es exactamente su ventaja. La colonia sobre Álvaro Obregón Sur, Jalapa y Orizaba Sur tiene el mismo tejido de casonas porfirianas y calles sombreadas que su vecina del norte, con menos ruido, menos turismo y una escena fitness que creció de manera más orgánica: estudios de yoga con linaje real, gimnasios de fuerza sin pretensión y entrenadores que llevan años con los mismos clientes del barrio. El perfil NSE B/C+ sostiene una demanda estable sin los picos de gentrificación activa que presionan los precios en Roma Norte. El Metro Álvaro Obregón en la Línea 1 es el ancla de transporte del barrio — desde ahí se caminan 5 a 7 minutos hacia la mayoría de los establecimientos fitness de la zona. Para quien llega en coche, Roma Sur tiene mejor disponibilidad de estacionamiento que su vecina del

Para el vecino de Roma Sur que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Roma Sur en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Roma Sur',
    metaDesc: 'Gimnasios en Roma Sur, Cuauhtémoc CDMX: $1,000–$2,200 MXN/mes. Boutique yoga, funcional indie. Metro Álvaro Obregón. Guía de Rodrigo 2026.',
    intro: `Roma Sur tiene entre 15 y 20 gimnasios activos — suficiente para un barrio de su densidad y perfil, pero lejos del volumen de Roma Norte. Esa diferencia no es un déficit: es coherente con una colonia más residencial y calmada que su vecina del norte. El rango de precios va de $1,000 a $2,200 MXN al mes, aproximadamente un 15–20% más accesible que Roma Norte para el mismo tipo de establecimiento — el efecto directo de estar un escalón abajo en el mapa de gentrificación de la Cuauhtémoc. La oferta se distribuye principalmente sobre Jalapa, Orizaba Sur y sus transversales: gimnasios funcionales independientes con equipamiento serio, estudios de yoga con grupos pequeños y algunas opciones de pilates mat. Lo que Roma Sur no tiene en volumen lo compensa en calidad de relación cliente-instructor: varios estudios de la zona llevan años con las mismas personas, lo que es el indicador más honesto de que algo está funcionando bien. La escena boutique de yoga es particularmente fuerte — hay al menos 4 estudios con instructores formados en linajes específicos y capacidad de clase limitada que permite corrección individual real. El acceso desde Metro Álvaro Obregón en Línea 1 hace que Roma Sur sea la opción más práctica para quienes trabajan en el centro histórico o en el Eje Central. El tráfico sobre Álvaro Obregón Sur entre semana de 18 a 20hs es un tema — si llegas en coche`,
    faq: [
      {
        q: '¿Los gimnasios de Roma Sur son más baratos que los de Roma Norte?',
        a: 'En promedio sí, entre un 15 y 20% más accesibles para el mismo tipo de establecimiento. Un gimnasio funcional con clases incluidas que cuesta $2,200 MXN en Roma Norte suele ir a $1,800–$2,000 MXN en Roma Sur. Para yoga boutique la diferencia es similar. No es un salto dramático pero es real, y se acumula en el año.',
      },
      {
        q: '¿Cuáles son los mejores horarios para ir al gym en Roma Sur?',
        a: 'La mañana temprana entre 7 y 9am es la franja más tranquila entre semana — los establecimientos tienen buena disponibilidad y el tráfico sobre Álvaro Obregón Sur está manejable. La franja de 18 a 20hs es la más concurrida, especialmente en estudios de yoga y funcional. Los sábados de 9 a 11am tienen buen ambiente sin la saturación del horario pico semanal.',
      },
      {
        q: '¿Hay gimnasios cerca del Metro Álvaro Obregón en Roma Sur?',
        a: 'Sí. Caminando 5–7 minutos desde la salida del Metro Álvaro Obregón sobre Jalapa y Orizaba Sur tienes varias opciones: estudios de yoga, gymns funcionales independientes y al menos un estudio de pilates mat. Es una de las mejores conexiones metro-gym de la Cuauhtémoc para quien no tiene coche.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Roma Sur tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Roma Sur suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~15–20' },
      { label: 'Membresía mensual', value: '$1,000–$2,200 MXN' },
      { label: 'vs. Roma Norte',    value: '15–20% más económico' },
      { label: 'Metro',             value: 'Álvaro Obregón · Línea 1' },
    ],
    barrios: [
      { name: 'Roma Norte',          slug: 'roma-norte',          district: 'cuauhtemoc' },
      { name: 'Condesa',             slug: 'condesa',             district: 'cuauhtemoc' },
      { name: 'Narvarte Poniente',   slug: 'narvarte-poniente',   district: 'benito-juarez' },
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
    h1: 'Estudios en Roma Sur — Yoga boutique y pilates en Cuauhtémoc 2026',
    metaDesc: 'Estudios boutique en Roma Sur, CDMX: yoga, pilates y funcional desde $150 MXN/clase. Jalapa, Orizaba Sur. Guía de Rodrigo 2026.',
    intro: `La escena de estudios en Roma Sur es la más madura de la colonia y la que mejor define su identidad fitness. El yoga boutique es el eje: hay al menos 4 estudios sobre Jalapa y Orizaba Sur con instructores formados en linajes concretos — Iyengar, Ashtanga, Yin — y grupos de máximo 10 a 12 personas que permiten corrección individual real. La clase suelta va de $150 a $280 MXN, con paquetes mensuales ilimitados de $1,100 a $1,800 MXN. Un escalón más accesible que Roma Norte para servicios comparables.

El pilates en Roma Sur está creciendo: hay estudios con mat y algunos con Reformer de segunda generación. Las sesiones grupales de Reformer van de $200 a $300 MXN; las individuales suben a $350–$500 MXN. Para funcional, los estudios independientes sobre Calle Jalapa ofrecen HIIT y entrenamiento en circuito en grupos de 8 a 15 personas a precios entre $130 y $200 MXN por clase. Nada del espectáculo boutique de Polanco, pero trabajo real con instructores que saben lo que hacen.

Roma Sur tiene una particularidad respecto a Condesa o Roma Norte: los estudios tienen más lealtad de clientela y menos rotación. Eso significa grupos más cohesionados, instructores que adaptan las clases al nivel real de los presentes y un ambiente más de comunidad que de consumidor. Para quien busca un estudio donde te conozcan por nombre desde la tercera clase, Roma Sur tiene esa cultura más que sus vecinas.`,
    faq: [
      {
        q: '¿Qué estilos de yoga hay en Roma Sur?',
        a: 'Hatha, Vinyasa, Iyengar, Ashtanga y Yin están representados en la zona, con al menos dos estudios que ofrecen formación de instructores — indicador de seriedad en el linaje. Para principiantes, Hatha y Vinyasa básico están disponibles en la mayoría. Para practicantes avanzados, el Iyengar y el Ashtanga de Roma Sur compiten bien con cualquier estudio de Roma Norte.',
      },
      {
        q: '¿El pilates de Roma Sur tiene Reformer o es solo mat?',
        a: 'Hay estudios con ambos formatos. Para Reformer, la oferta es más limitada que en Condesa o Roma Norte — hay 2 o 3 estudios con máquinas. Para pilates mat en grupo, la oferta es más amplia y el precio más accesible: clases desde $130 MXN. Si el Reformer es prioritario, vale confirmar disponibilidad antes de ir porque los grupos son pequeños y se llenan rápido.',
      },
      {
        q: '¿Cuándo conviene ir a los estudios de yoga de Roma Sur para encontrar lugar?',
        a: 'Los martes y miércoles a las 7am son los turnos con mejor disponibilidad. El sábado de 10am es el más concurrido en casi todos los estudios de la zona. Si buscas el horario de 18–19hs entre semana, reservá con 2 días de anticipación mínimo — los grupos son pequeños y se llenan. Los domingos de mañana tienen buen ambiente y suelen tener lugar.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios activos',    value: '~10–12' },
      { label: 'Clase suelta yoga',   value: '$150–$280 MXN' },
      { label: 'Mensual ilimitado',   value: '$1,100–$1,800 MXN' },
      { label: 'Tamaño grupo',        value: 'Máx. 10–12 personas' },
    ],
    barrios: [
      { name: 'Roma Norte',          slug: 'roma-norte',          district: 'cuauhtemoc' },
      { name: 'Condesa',             slug: 'condesa',             district: 'cuauhtemoc' },
      { name: 'Narvarte Poniente',   slug: 'narvarte-poniente',   district: 'benito-juarez' },
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
    h1: 'Entrenadores personales en Roma Sur — Coaches en Cuauhtémoc 2026',
    metaDesc: 'Entrenadores personales en Roma Sur, CDMX: sesiones $300–$600 MXN. Jalapa, Orizaba Sur, Parque España. Guía de Rodrigo 2026.',
    intro: `Los entrenadores personales en Roma Sur tienen un perfil característico: coaches que eligieron la colonia por su tranquilidad y se quedaron porque construyeron una base de clientes estable. Hay menos rotación de coaches aquí que en Roma Norte — y eso es una ventaja real para el cliente que busca consistencia. Las sesiones individuales van de $300 a $600 MXN según experiencia y formato, con un escalón por debajo de los $500–$800 MXN que manejan los coaches más establecidos de Roma Norte.

El Parque España, a 8–10 minutos caminando desde el corazón de Roma Sur, es el espacio outdoor más usado por los coaches freelance de la zona. El parque tiene zona de calistenia, bancas para trabajo de peso corporal y suficiente espacio abierto para entrenamiento funcional con equipamiento portátil. Para quien quiere entrenamiento outdoor sin pagar membresía de gym, el binomio coach freelance + Parque España es la opción más inteligente del sector.

Para sesiones de funcional, fuerza o running, Roma Sur tiene coaches con años de trayectoria y resultados documentados. No es el mercado de coachs de Instagram que proliferó en Polanco — es un mercado más de boca en boca donde la recomendación de un cliente satisfecho vale más que mil seguidores. Para encontrar un buen coach en la zona, preguntá directamente en los estudios de yoga o funcional — suelen saber quién trabaja bien en el barrio.`,
    faq: [
      {
        q: '¿Cuánto cuesta una sesión con entrenador personal en Roma Sur?',
        a: 'Las sesiones individuales van de $300 a $600 MXN según experiencia y formato. Coaches con más de 5 años de trayectoria y certificaciones específicas están en el rango $500–$600 MXN. Para entrenamiento en dupla o trío, el costo por persona baja entre $100 y $150 MXN — una opción práctica si tienes compañero de entrenamiento con objetivos similares.',
      },
      {
        q: '¿Los coaches de Roma Sur trabajan en el Parque España?',
        a: 'Sí, el Parque España es el spot outdoor preferido de los coaches freelance de la zona. Está a 8–10 minutos caminando desde Jalapa y Orizaba Sur. Los horarios más frecuentes son 7–9am y 17–19hs entre semana. Los sábados de mañana el parque tiene buen movimiento de coaches trabajando con grupos pequeños.',
      },
      {
        q: '¿Cómo encuentro un buen entrenador personal en Roma Sur?',
        a: 'La recomendación de boca en boca funciona mejor que Instagram en Roma Sur. Preguntá directamente en los estudios de yoga o funcional de Jalapa y Orizaba Sur — el barrio es pequeño y la comunidad fitness se conoce. Los gymns independientes de la zona también suelen tener coaches freelance asociados que atienden sesiones por fuera del horario habitual del establecimiento.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',  value: '$300–$600 MXN' },
      { label: 'Parque outdoor',     value: 'Parque España (8–10 min)' },
      { label: 'vs. Roma Norte',     value: '15–20% más económico' },
      { label: 'Sesión en dupla',    value: '-$100–$150 MXN/persona' },
    ],
    barrios: [
      { name: 'Roma Norte',          slug: 'roma-norte',          district: 'cuauhtemoc' },
      { name: 'Condesa',             slug: 'condesa',             district: 'cuauhtemoc' },
      { name: 'Narvarte Poniente',   slug: 'narvarte-poniente',   district: 'benito-juarez' },
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
    h1: 'Eventos fitness en Roma Sur — Clases abiertas y pop-ups 2026',
    metaDesc: 'Eventos fitness en Roma Sur, CDMX 2026: open days de yoga, clases abiertas, pop-ups en Parque España. Cuauhtémoc.',
    intro: `Los eventos fitness en Roma Sur son más tranquilos y curados que en Roma Norte — menos espectáculo, más substancia. Los estudios de yoga organizan open days periódicos con clases de prueba gratuita o a precio simbólico ($50–$100 MXN); son el formato de evento más frecuente y el que mejor refleja la cultura del barrio. Los anuncian por Instagram con 1–2 semanas de anticipación y los cupos se llenan rápido porque los grupos son pequeños.

El Parque España, a pocos minutos de Roma Sur, concentra actividad outdoor especialmente los fines de semana: coaches freelance con grupos de entrenamiento funcional, clases de yoga al aire libre en temporada de primavera–otoño y ocasionalmente masterclasses de running con instructores especializados. Es el espacio donde más frecuentemente confluyen residentes de Roma Sur con los de Condesa y Roma Norte — sin la presión de precios de los establecimientos indoor.

Los estudios de funcional organizan periódicamente "workout challenges" internos abiertos a visitantes — una semana de clases a precio reducido para atraer nuevos clientes. Son los eventos más accesibles para quien quiere probar un estudio sin comprometerse con una membresía. La temporada de mayor actividad es septiembre a noviembre, cuando el clima en CDMX es el más amable para las actividades al aire libre y los estudios recuperan el ritmo post-verano.`,
    faq: [
      {
        q: '¿Los estudios de yoga de Roma Sur hacen clases de prueba gratuitas?',
        a: 'Varios sí — algunos estudios sobre Jalapa y Orizaba Sur ofrecen primera clase gratuita o a $50–$100 MXN de manera habitual, no solo en open days. Vale la pena preguntar directamente en el estudio porque no siempre lo publican en redes. Los open days formales se anuncian en Instagram con 1–2 semanas de anticipación.',
      },
      {
        q: '¿Hay eventos de running que pasen por Roma Sur?',
        a: 'Roma Sur está dentro del circuito habitual de algunas carreras urbanas de la Cuauhtémoc que conectan con Álvaro Obregón y el Eje Central. Para carreras con chip y clasificación, la opción más cercana y frecuente es en el Parque España o en el Parque México de Condesa. Los coaches de running de la zona organizan grupos de entrenamiento informal los sábados temprano en el Parque España.',
      },
      {
        q: '¿Cuándo es la temporada de más eventos fitness en Roma Sur?',
        a: 'Septiembre a noviembre es la ventana más activa — estudios que volvieron de la calma de agosto con energía renovada y el clima de CDMX en su mejor momento. Marzo–abril también tiene buena actividad. Los domingos son el día de mayor movimiento outdoor en el Parque España. En enero y febrero muchos estudios pequeños tienen rotación de clientes nueva — buen momento para llegar si quieres cupo en grupos que normalmente están llenos.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Open days yoga',       value: 'Periódicos · $0–$100 MXN' },
      { label: 'Parque outdoor',       value: 'Parque España (10 min)' },
      { label: 'Temporada alta',       value: 'Sep–Nov / Mar–Abr' },
      { label: 'Anuncio anticipación', value: '1–2 semanas en RRSS' },
    ],
    barrios: [
      { name: 'Roma Norte',          slug: 'roma-norte',          district: 'cuauhtemoc' },
      { name: 'Condesa',             slug: 'condesa',             district: 'cuauhtemoc' },
      { name: 'Narvarte Poniente',   slug: 'narvarte-poniente',   district: 'benito-juarez' },
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
    h1: 'Bienestar en Roma Sur — Spa, masajes y wellness en Cuauhtémoc 2026',
    metaDesc: 'Bienestar en Roma Sur, CDMX: masajes deportivos, spa y nutrición. Precios $250–$700 MXN/sesión. Jalapa, Orizaba Sur. Guía de Rodrigo 2026.',
    intro: `El bienestar en Roma Sur tiene el mismo carácter tranquilo que define a la colonia: centros pequeños, atención personalizada y precios que reflejan un barrio NSE B/C+ sin el markup de Roma Norte. Sobre Jalapa y las calles transversales hay centros de masaje terapéutico y deportivo con sesiones de 60 minutos entre $250 y $450 MXN — un escalón más accesible que los $350–$600 MXN que manejan los establecimientos equivalentes de Roma Norte o Condesa.

Los estudios de yoga de la zona son también la entrada natural al bienestar: varios ofrecen talleres de meditación, breathwork y yoga restaurativo que funcionan como recuperación activa post-entrenamiento. Algunos tienen convenio con nutricionistas o terapeutas que atienden en el mismo espacio, lo que hace más fácil armar una rutina integral sin cruzar la colonia. Para masaje thai o de tejido profundo, hay especialistas en el corredor de Orizaba Sur con años de práctica y clientela fija.

La nutrición deportiva en Roma Sur está cubierta por nutricionistas independientes que trabajan en consultorios sobre Jalapa y las calles adyacentes. Las consultas arrancan en $400–$600 MXN con seguimiento mensual disponible. La demanda creció con la expansión de los estudios de yoga y funcional — muchos clientes de esos estudios buscan alinear la alimentación con el entrenamiento, y los nutricionistas del barrio atienden específicamente ese perfil.`,
    faq: [
      {
        q: '¿Cuánto cuesta un masaje deportivo en Roma Sur versus Roma Norte?',
        a: 'En Roma Sur una sesión de 60 minutos de masaje deportivo o terapéutico va de $250 a $450 MXN. En Roma Norte el equivalente está en $350–$600 MXN. La diferencia refleja el costo del inmueble y la demanda — en Roma Sur pagas el mismo nivel de trabajo pero menos el nombre de la dirección.',
      },
      {
        q: '¿Hay centros de spa en Roma Sur?',
        a: 'Hay centros de bienestar con servicios de spa básico — masaje, aromaterapia, tratamientos corporales — pero no los mega-spas de cadena que encuentras en Polanco o Santa Fe. El formato dominante es el centro pequeño con 2 o 3 terapeutas y atención con cita previa. Para servicios de spa más completos como sauna o hidroterapia, la Condesa o Narvarte tienen mayor oferta.',
      },
      {
        q: '¿Hay nutricionistas especializados en deportistas en Roma Sur?',
        a: 'Sí, varios nutricionistas deportivos con consultorios sobre Jalapa y Orizaba Sur orientados específicamente a deportistas de gimnasio y practicantes de yoga. Las consultas van de $400 a $600 MXN. Muchos estudios de yoga de la zona tienen convenio informal con nutricionistas — preguntá en tu estudio de referencia porque suelen tener recomendación directa.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Masaje 60min',        value: '$250–$450 MXN' },
      { label: 'Consulta nutrición',  value: '$400–$600 MXN' },
      { label: 'vs. Roma Norte',      value: '~25% más económico' },
      { label: 'Formato dominante',   value: 'Centros pequeños · cita previa' },
    ],
    barrios: [
      { name: 'Roma Norte',          slug: 'roma-norte',          district: 'cuauhtemoc' },
      { name: 'Condesa',             slug: 'condesa',             district: 'cuauhtemoc' },
      { name: 'Narvarte Poniente',   slug: 'narvarte-poniente',   district: 'benito-juarez' },
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
