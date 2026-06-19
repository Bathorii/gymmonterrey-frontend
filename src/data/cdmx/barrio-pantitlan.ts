// src/data/cdmx/barrio-pantitlan.ts
// Draft – lastReviewed: 2026-06-30

export const barrioContent = {
  nombre: 'Pantitlán',
  slug: 'pantitlan',
  group: 'C',
  parentDistrict: {
    nombre: 'Iztacalco',
    slug: 'iztacalco',
  },
  lastReviewed: '2026-06-30',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Pantitlán es el nodo de Metro más importante del oriente de CDMX: cuatro líneas convergen en una sola estación — L1, L5, L9 y LA (Línea A hacia el Estado de México) — generando uno de los flujos de pasajeros más altos del sistema. Calz. Ignacio Zaragoza y Av. 5 de Mayo son los ejes comerciales del barrio, con mercados, tiendas de ropa de trabajo, tlapalerías y servicios cotidianos orientados al perfil C/D+ de la zona. El barrio tiene más de tránsito que de residencia consolidada — mucha gente pasa por Pantitlán todos los días pero menos de la que se imagina vive ahí. Los gymns que funcionaron en la zona son los que entendieron esa lógica: precio bajo, sin contrato, horarios que empatan con los flujos del Metro. Para quien vive o trabaja cerca de Pantitlán, la oferta fitness local es suficiente para entrenar con constancia sin necesidad de cruzar la ciudad ni pagar los precios de las zonas premium del CDMX, cuate.

Para el vecino de Pantitlán que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar.`,

  gimnasios: {
    h1: 'Gimnasios en Pantitlán',
    metaDesc: 'Gimnasios en Pantitlán, Iztacalco, CDMX: ~5 opciones de $400 a $950 MXN/mes. Calz. Zaragoza, Metro L1/L5/L9/LA. NSE C/D+, nodo de tránsito masivo. Guía 2026.',
    intro: `Pantitlán tiene alrededor de 5 gimnasios activos, concentrados principalmente sobre Calz. Ignacio Zaragoza, Av. 5 de Mayo y las calles adyacentes al nodo de Metro. El rango de membresía va de $400 a $950 MXN mensual — el más bajo de Iztacalco para gym con equipamiento completo. La inscripción inicial generalmente va de $150 a $280 MXN, con varios gymns que la condonan cuando pagas dos o más meses por adelantado. La lógica de los gymns de Pantitlán es la del nodo de tránsito masivo: membresía sin compromiso largo, horarios que arrancan a las 5:30am, y acceso desde cuatro líneas de Metro sin transborde. El equipamiento es funcional para mantenimiento, pérdida de peso e hipertrofia básica: mancuernas hasta 40kg, máquinas de cable y poleas, área cardiovascular con caminadoras y bikes, duchas operativas. Algunos tienen clases de aeróbics y zumba incluidas en la membresía. El perfil del socio en Pantitlán es heterogéneo: hay vecinos del barrio, trabajadores que pasan en camino al Estado de México, y personas de Iztacalco y Venustiano Carranza que usan la conexión de Metro para llegar sin rodeo. Para quien vive en el oriente del DF o en municipios mexiquenses conectados por Línea A, Pantitlán es la opción de gym más conveniente por acceso de Metro sin necesidad de salir del sistema.`,
    faq: [
      {
        q: '¿Qué clases de grupo hay en los gymns de Pantitlán?',
        a: 'Los formatos más comunes son aeróbics de alto impacto, zumba y funcional básico, incluidos en la membresía mensual sin costo adicional. Algunos gymns tienen cardio en grupo y kickboxing de acondicionamiento. Los horarios de clase van de 6:00–9:00am y 5:30–8:00pm de lunes a viernes. El sábado generalmente hay una o dos clases por la mañana. Para modalidades especializadas como yoga o pilates mat, hay que salir del barrio hacia Moctezuma o Viaducto Piedad.',
      },
      {
        q: '¿Puedo tomar clases en Pantitlán si vengo del Estado de México en Línea A?',
        a: '¡Claro, güey! Es uno de los casos de uso más prácticos del barrio: llegas en Línea A desde municipios como Neza, Chimalhuacán o Los Reyes, haces clase de 45-60 minutos, y seguís tu ruta o volvés al metro. Los gymns sobre Calz. Zaragoza están a 5-10 minutos caminando de la estación Pantitlán. La membresía te da acceso ilimitado y las clases de grupo están incluidas. Para quien vive en el oriente del Estado de México y trabaja en CDMX, este es el modelo más eficiente de incorporar fitness a la rutina sin costo de tiempo extra significativo.',
      },
      {
        q: '¿Las clases de grupo en Pantitlán son buenas para principiantes?',
        a: '¡Sí! Las clases de aeróbics y zumba en Pantitlán son accesibles para cualquier nivel de condición física. Los instructores están acostumbrados a grupos heterogéneos — de primera vez y de socios regulares — y la dinámica de la clase permite adaptarse al ritmo de cada uno. No hay presión de rendimiento ni comparación entre compañeros. Si estás empezando, estas clases son un buen punto de entrada: energía real, instructor en vivo y precio que no pesa.',
      },
    ],
    stats: [
      { label: 'Clases disponibles', value: 'Aeróbics / Zumba / Funcional' },
      { label: 'Clase suelta',       value: '$70–$140 MXN' },
      { label: 'Incluido membresía', value: 'Sí en gymns principales' },
      { label: 'Acceso',             value: '4 líneas de Metro en la misma estación' },
    ],
    barrios: [
      { name: 'Agrícola Oriental', slug: 'agricola-oriental', district: 'iztacalco'           },
      { name: 'Viaducto Piedad',   slug: 'viaducto-piedad',   district: 'iztacalco'           },
      { name: 'Moctezuma',         slug: 'moctezuma',         district: 'venustiano-carranza' },
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
    h1: 'Estudios en Pantitlán',
    metaDesc: 'Estudios en Pantitlán, Iztacalco, CDMX: aeróbics, zumba y funcional incluidos en membresía de gym, $70–$140 MXN clase suelta. Metro L1/L5/L9/LA. Guía 2026.',
    intro: `Pantitlán no es zona de estudios boutique — y eso es parte de su lógica. El nodo de cuatro Metros concentra tránsito masivo de perfil C/D+, y el modelo de negocio que funciona aquí no es la membresía de estudio especializado sino la clase de grupo integrada en el gym de barrio: aeróbics de alto impacto, zumba y funcional básico, incluidos en la membresía mensual sin cargo adicional. Los gymns sobre Calz. Ignacio Zaragoza y Av. 5 de Mayo tienen clases de grupo con grupos de 12-22 personas, horarios múltiples de 6:00–9:00am y 5:30–8:00pm de lunes a viernes, y sábado con una o dos clases por la mañana. La clase suelta, para quien no tiene membresía, va de $70 a $140 MXN — el precio más accesible del oriente de Iztacalco para clase de grupo con instructor en vivo. El instructor conoce a los socios regulares pero también recibe continuamente a alumnos nuevos que vienen del Estado de México o de otros barrios de Iztacalco en Línea A. No hay pilates Reformer ni yoga studio en Pantitlán ahorita. Para esas modalidades especializadas — yoga con certificación, pilates mat o reformer, spinning con potenciómetros — la opción más eficiente son Moctezuma en Venustiano Carranza o el corredor de Iztacalco hacia Viaducto Piedad, ambos a menos de 15 minutos en Metro desde la misma estación Pantitlán. La ventaja de estar en el nodo de 4 Metros es exactamente esa: sin`,
    faq: [
      {
        q: '¿Hay estudios boutique de yoga o pilates en Pantitlán?',
        a: 'No hay estudios boutique especializados en Pantitlán ahorita — ni yoga studio, ni pilates Reformer, ni spinning con potenciómetros. El barrio opera en formato gym de barrio con clases de grupo incluidas: aeróbics, zumba y funcional. Para yoga con certificación o pilates mat/reformer, la opción más cercana es Moctezuma en Venustiano Carranza o Viaducto Piedad en Iztacalco, a menos de 15 minutos en Metro desde Pantitlán.',
      },
      {
        q: '¿Cuánto cuesta una clase suelta en los gymns de Pantitlán?',
        a: 'La clase suelta en los gymns de Pantitlán va de $70 a $140 MXN, dependiendo del gym y el formato. Los socios con membresía mensual tienen las clases de grupo incluidas sin costo adicional. Para quien viene esporádicamente desde el Estado de México en Línea A, el formato de clase suelta es el más conveniente: entrás, haces clase de 45-60 minutos, y volvés al metro sin compromiso de membresía.',
      },
      {
        q: '¿Puedo llegar a mejores estudios desde Pantitlán en Metro?',
        a: '¡Claro, güey! Esa es la ventaja del nodo de 4 Metros: desde Pantitlán, Moctezuma está a 3-4 estaciones en L9, y Viaducto Piedad en Iztacalco está accesible en L1. Los estudios de esas zonas tienen yoga, pilates Reformer y spinning con más infraestructura. Si vives en el oriente y usas Pantitlán como punto de conexión, puedes acceder a esa oferta sin costo de tiempo extra significativo.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Clases disponibles',  value: 'Aeróbics / Zumba / Funcional' },
      { label: 'Clase suelta',        value: '$70–$140 MXN' },
      { label: 'Incluido membresía',  value: 'Sí en gymns principales' },
      { label: 'Acceso',              value: '4 líneas de Metro en la misma estación' },
    ],
    barrios: [
      { name: 'Agrícola Oriental / Iztacalco', slug: 'agricola-oriental', district: 'iztacalco'           },
      { name: 'Viaducto Piedad / Iztacalco',   slug: 'viaducto-piedad',   district: 'iztacalco'           },
      { name: 'Moctezuma / Venustiano Carranza', slug: 'moctezuma',        district: 'venustiano-carranza' },
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
    h1: 'Entrenadores personales en Pantitlán',
    metaDesc: 'Entrenadores personales en Pantitlán, Iztacalco: PT $270–$580 MXN/sesión. Metro L1/L5/L9/LA. Budget C/D+, acceso por 4 Metros. Guía 2026.',
    intro: `El personal training en Pantitlán está en el rango más accesible del oriente de CDMX: $270 a $580 MXN por sesión individual, con agenda directa por WhatsApp y sin intermediario. Los entrenadores trabajan dentro de los gymns sobre Calz. Zaragoza y Av. 5 de Mayo, con disponibilidad desde las 5:30am para quien combina sesión con Metro en la mañana temprana.

El perfil del entrenador en Pantitlán es práctico: certificación básica, experiencia de 1-4 años, foco en pérdida de peso y acondicionamiento general. Es el perfil correcto para los objetivos de la demanda del barrio — quien viene a Pantitlán a entrenar no está buscando preparación para powerlifting ni periodización de atleta olímpico. Busca bajar de peso, estar en forma y tener más energía, y el entrenador local entiende ese objetivo y trabaja eficientemente hacia él.

La ventaja única de Pantitlán para PT es la conectividad: si tienes el horario justo para una sesión de 50 minutos entre transbordo y llegada al trabajo, el nodo de cuatro Metros hace que la ventana de tiempo sea real. Algunos clientes de los gymns de Pantitlán son trabajadores mexiquenses que coordinan su sesión de PT en el camino a CDMX y vuelven directo en Línea A. Es un modelo de fitness de tránsito que no existe en ningún otro barrio de Iztacalco.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Pantitlán?',
        a: 'Una sesión individual con PT en Pantitlán va de $270 a $580 MXN según experiencia y objetivo. Los paquetes de 10 sesiones van de $2,160 a $4,600 MXN con 15-20% de descuento. Es el rango más bajo de Iztacalco para PT certificado. A domicilio o en parque hay cargo adicional de $80-$100 MXN por traslado. La comparación con el PT en Moctezuma ($350-$700 MXN) o en Jardín Balbuena ($380-$750 MXN) muestra un ahorro de $80-$200 MXN por sesión — significativo para quien entrena 3 días semanales.',
      },
      {
        q: '¿Puedo tener sesión de PT en Pantitlán si vengo del Estado de México?',
        a: '¡Sí, güey! Es uno de los casos más prácticos del barrio. llegas en Línea A, entrenas 50 minutos con el PT, y volvés al metro directo. Los gymns sobre Calz. Zaragoza están a 5-10 minutos caminando de la estación. Coordiná el horario con el entrenador la noche anterior por WhatsApp — con anticipación de un día es suficiente. Algunos entrenadores de Pantitlán tienen cartera de clientes mexiquenses que vienen específicamente por esta lógica de eficiencia de tránsito.',
      },
      {
        q: '¿Los entrenadores de Pantitlán pueden hacer seguimiento nutricional?',
        a: 'Los entrenadores de Pantitlán no son nutriólogos — hacen entrenamiento físico, no prescripción dietética clínica. Algunos tienen conocimiento básico de nutrición y pueden darte orientaciones generales sobre alimentación en el contexto del entrenamiento, pero para seguimiento nutricional formal con plan de alimentación, necesitas consultar a un nutriólogo certificado. Los hay en el barrio a precios D+. La combinación de PT más nutriólogo en Pantitlán a presupuesto C/D+ es una de las más accesibles del oriente de CDMX.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$270–$580 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,160–$4,600 MXN' },
      { label: 'Perfil',              value: 'Pérdida de peso / Acondicionamiento' },
      { label: 'Acceso único',        value: 'L1 + L5 + L9 + LA en 1 estación' },
    ],
    barrios: [
      { name: 'Agrícola Oriental', slug: 'agricola-oriental', district: 'iztacalco'           },
      { name: 'Viaducto Piedad',   slug: 'viaducto-piedad',   district: 'iztacalco'           },
      { name: 'Moctezuma',         slug: 'moctezuma',         district: 'venustiano-carranza' },
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
    h1: 'Eventos fitness en Pantitlán',
    metaDesc: 'Eventos fitness en Pantitlán, Iztacalco: retos internos y clases abiertas de $0 a $170 MXN. Metro Pantitlán. Nodo de tránsito masivo. Guía 2026.',
    intro: `Los eventos de fitness en Pantitlán tienen la escala del barrio: comunidad interna de gymns, sin producción de evento masivo. Los retos internos de asistencia y acondicionamiento se resuelven entre socios por WhatsApp — quién va más días en el mes, tabla de abdominales quincenal, medición de composición corporal comparativa. Es la cultura de los gymns de barrio C/D+ que funciona por cohesión social, no por marketing digital.

Lo que distingue a Pantitlán de barrios similares es el potencial de convocatoria por Metro: si un gym organiza clase abierta gratuita o evento outdoor en las inmediaciones de la estación, puede tener llegada de personas de cuatro líneas diferentes. Eso no ocurre con frecuencia — la mayoría de los eventos son internos y de baja escala — pero cuando ocurre, el efecto de convocatoria es real sin necesidad de inversión en publicidad.

Calz. Ignacio Zaragoza tiene tramos de ciclovía y el área del nodo tiene explanadas peatonales amplias que se usan para actividad física informal. El parque más cercano con área verde para correr es el Parque Pantitlán, pequeño pero funcional para caminata y estiramiento. Para eventos outdoor de mayor escala — carreras organizadas, clases masivas — hay que ir hacia el corredor de Iztacalco o hacia Venustiano Carranza.`,
    faq: [
      {
        q: '¿Hay carreras organizadas en Pantitlán?',
        a: 'Pantitlán no tiene carrera propia organizada de forma regular, pero el nodo de Metro conecta directamente con el corredor Zaragoza donde el Gobierno de Iztacalco organiza 1-2 carreras anuales. La más cercana en formato es la que se hace sobre Calz. Zaragoza en tramos cerrados — seguí las redes del Gobierno de Iztacalco para enterarte de fechas y modalidades de inscripción. Para running con grupo organizado y salidas semanales, la opción más cercana está en Jardín Balbuena o Moctezuma, a 15-20 minutos en Metro.',
      },
      {
        q: '¿Cómo me entero de eventos fitness en Pantitlán?',
        a: 'El canal más confiable es el grupo de WhatsApp de socios del gym — pedí que te agreguen al inscribirte. Cartel físico en la puerta del gym es la segunda fuente. El flujo de tránsito del nodo hace que los carteles visibles desde la calle sean efectivos — si hay algo interesante, lo verás cuando pases. Instagram de los gimnasios de Pantitlán generalmente no está activo. Para eventos de la alcaldía en la zona, seguí las redes del Gobierno de Iztacalco.',
      },
      {
        q: '¿Hay área de ejercicio al aire libre en Pantitlán?',
        a: 'El Parque Pantitlán tiene área de calistenia básica y espacio para caminata, aunque es un parque pequeño comparado con el Parque Tezozómoc o el Parque Los Reyes. Para ejercicio outdoor más serio — running con circuito, área de pasto para funcional — hay que ir a parques más grandes en la zona. Calz. Zaragoza tiene tramos de ciclovía que algunos usan para trote mañanero. Los gimnasios de Pantitlán no suelen organizar salidas outdoor con frecuencia, pero puedes preguntar si hay grupos informales de caminata.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Formato habitual', value: 'Retos internos / Clases abiertas' },
      { label: 'Precio eventos',   value: '$0–$170 MXN' },
      { label: 'Comunicación',     value: 'WhatsApp + cartel físico' },
      { label: 'Ventaja única',    value: 'Convocatoria por 4 líneas de Metro' },
    ],
    barrios: [
      { name: 'Agrícola Oriental', slug: 'agricola-oriental', district: 'iztacalco'           },
      { name: 'Viaducto Piedad',   slug: 'viaducto-piedad',   district: 'iztacalco'           },
      { name: 'Moctezuma',         slug: 'moctezuma',         district: 'venustiano-carranza' },
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
    h1: 'Bienestar en Pantitlán',
    metaDesc: 'Bienestar en Pantitlán, Iztacalco: nutrición $270–$560 MXN, masaje $210–$460 MXN. Metro L1/L5/L9/LA. Budget C/D+. Guía 2026.',
    intro: `El bienestar en Pantitlán tiene los precios más bajos del oriente de Iztacalco: nutrición básica desde $270 MXN primera consulta, masaje de recuperación desde $210 MXN por sesión de 60 minutos. Es reflejo del NSE C/D+ del barrio y de la lógica de servicio para el perfil de tránsito — rápido, accesible, sin ceremonia. Los consultorios de nutrición sobre Calz. Zaragoza y Av. 5 de Mayo tienen énfasis en pérdida de peso y control de enfermedades crónicas, con seguimiento mensual de $200 a $380 MXN.

El masaje en Pantitlán está en $210–$460 MXN por sesión de 60 minutos. Los centros de masaje sobre Calz. Zaragoza ofrecen tejido profundo y relajación clásica principalmente. El masaje deportivo específico existe en algunos locales pero con menor frecuencia que en barrios de mayor NSE. Para recuperación post-entrenamiento básica — tensión muscular, fatiga de entrenamiento — es suficiente.

Para quien usa Pantitlán en tránsito y quiere servicio de bienestar de paso, la lógica del nodo funciona: llegas en Metro, haces consulta o masaje de 45-60 minutos, y volvés a la ruta sin rodeo. Es el modelo de bienestar de tránsito que muy pocos barrios de CDMX pueden ofrecer con cuatro líneas de Metro disponibles. La conectividad de Pantitlán permite llegar a mejores centros de bienestar en colonias vecinas en menos de 15 minutos.`,
    faq: [
      {
        q: '¿Hay nutriólogos en Pantitlán?',
        a: 'Hay consultorios de nutrición sobre Calz. Zaragoza y Av. 5 de Mayo con primera consulta de $270 a $560 MXN y seguimiento mensual de $200 a $380 MXN. El enfoque predominante es pérdida de peso, control glucémico y educación alimentaria — los objetivos más comunes en el perfil C/D+ del barrio. No son nutriólogos deportivos de alto rendimiento, pero para control de peso y mejora de hábitos del perfil del barrio son adecuados y más accesibles que cualquier opción en barrios de mayor NSE del oriente.',
      },
      {
        q: '¿Los servicios de masaje en Pantitlán son confiables?',
        a: 'Los centros de masaje establecidos sobre Calz. Zaragoza con local formal, camilla y privacidad son confiables para los servicios que ofrecen: relajación clásica y tejido profundo básico. Preguntá si tienen carta de servicios con precios visibles antes de entrar — es señal de formalidad. Evitá los puestos de masaje informales en el área del nodo sin local fijo. Para masaje deportivo técnico de recuperación post-entrenamiento específico, los locales sobre Agrícola Oriental o Viaducto Piedad tienen mejor oferta en ese formato.',
      },
      {
        q: '¿Vale la pena el bienestar en Pantitlán si vengo del Estado de México?',
        a: '¡Sí, güey! Si llegas en Línea A desde el Estado de México y tienes ventana de tiempo, la combinación de consulta de nutrición más entrenamiento en el mismo nodo es imbatible en eficiencia logística. Los precios de bienestar en Pantitlán son entre 20-35% menores que en barrios de mayor NSE como Moctezuma o Jardín Balbuena. Si el presupuesto de salud es ajustado y el tiempo también, el modelo de bienestar de tránsito de Pantitlán es una de las opciones más prácticas del oriente de CDMX.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',    value: '$270–$560 MXN' },
      { label: 'Masaje relajación 60m', value: '$210–$460 MXN' },
      { label: 'Seguimiento mensual',   value: '$200–$380 MXN' },
      { label: 'Acceso único',          value: '4 líneas de Metro en 1 estación' },
    ],
    barrios: [
      { name: 'Agrícola Oriental', slug: 'agricola-oriental', district: 'iztacalco'           },
      { name: 'Viaducto Piedad',   slug: 'viaducto-piedad',   district: 'iztacalco'           },
      { name: 'Moctezuma',         slug: 'moctezuma',         district: 'venustiano-carranza' },
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
