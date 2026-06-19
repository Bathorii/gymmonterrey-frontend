// src/data/cdmx/barrio-peralvillo.ts
// Draft – lastReviewed: 2026-06-28

export const barrioContent = {
  nombre: 'Peralvillo',
  slug: 'peralvillo',
  group: 'C',
  parentDistrict: {
    nombre: 'Cuauhtémoc',
    slug: 'cuauhtemoc',
  },
  lastReviewed: '2026-06-28',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Peralvillo es el barrio del borde norte de la Cuauhtémoc, güey — zona de transición entre la alcaldía y Gustavo A. Madero, con un perfil de barrio obrero tranquilo que no aparece mucho en los artículos de Ciudad de México pero que tiene su propia lógica interna. Sobre Av. Peralvillo y Calle Magnolia hay vida de barrio densa: mercado, talleres mecánicos, vecindades y una comunidad que lleva generaciones en las mismas manzanas. NSE C con fitness budget real: el gym del barrio es parte de la infraestructura comunitaria, como la farmacia o el mercado. Metro Potrero y Lagunilla son los puntos de referencia de transporte. No es zona turística ni gentrificada — es barrio de Ciudad de México honesto, y los gymns que tiene son exactamente lo que el barrio necesita. Para quien vive o trabaja cerca de Peralvillo, la oferta fitness local es suficiente para entrenar con constancia sin necesidad de cruzar la ciudad ni pagar los precios de las zonas premium del CDMX, cuate.

Para el vecino de Peralvillo que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar.`,

  gimnasios: {
    h1: 'Gimnasios en Peralvillo',
    metaDesc: 'Gimnasios en Peralvillo, CDMX: ~6 opciones de $350 a $800 MXN/mes. Av. Peralvillo, Magnolia. Barrio norte, precio real. Guía 2026.',
    intro: `Peralvillo tiene alrededor de 6 gimnasios y espacios de entrenamiento, distribuidos sobre Av. Peralvillo, Calle Magnolia y las calles cercanas a Metro Potrero y Lagunilla. La oferta es budget y práctica: membresías de $350 a $800 MXN al mes, equipamiento básico funcional, y comunidad de socios de barrio que entrena con consistencia y sin pretensiones.

El perfil de los gymns de Peralvillo responde directamente al barrio: espacios medianos con todo lo esencial — mancuernas, barras, máquinas de cable, área cardiovascular — sin el acabado estético ni el equipamiento especializado de zonas con mayor densidad de fitness. Algunos tienen bolsas de boxeo como reflejo de la cultura de combate que permea desde Tepito y Morelos al sur. La membresía más cara del barrio es equivalente a la más barata de Roma Norte.

El acceso es razonable: Metro Línea B estación Lagunilla conecta con el barrio, y Eje 1 Norte tiene transporte frecuente que enlaza con Morelos, Tepito y Guerrero. Para quien vive en Peralvillo o en la zona norte colindante de Gustavo A. Madero, el gym del barrio es la opción más lógica sin desvío ni gasto de transporte adicional. La comunidad es pequeña y conocida — el gym de Peralvillo es el gym del vecino, en el mejor sentido de esa frase.`,
    faq: [
      {
        q: '¿Cuánto cuesta el gym en Peralvillo?',
        a: 'Las membresías mensuales en Peralvillo van de $350 a $800 MXN, con la mayoría de los gymns en el rango de $400–$650 MXN. Es uno de los precios más bajos de toda la alcaldía Cuauhtémoc para gym con equipamiento completo funcional. La inscripción inicial va de $150 a $300 MXN y algunos gymns la condonen con membresía semestral o anual. El pase de día, cuando está disponible, va de $80 a $130 MXN. Para quien vive en el barrio o en la zona norte colindante, la relación precio-acceso es la mejor de la zona norte de la Cuauhtémoc.',
      },
      {
        q: '¿Los gymns de Peralvillo tienen equipamiento adecuado?',
        a: 'Para entrenamiento de mantenimiento, pérdida de peso e hipertrofia básica, sí. Los gymns de Peralvillo tienen mancuernas de 5 a 40kg en la mayoría de los casos, barras y discos para press y sentadilla básica, máquinas de cable y poleas, y equipamiento cardiovascular estándar: caminadoras, bikes y elípticas. El equipamiento más especializado — plataformas olímpicas, jaulas de powerlifting, remo concepto — no está en el barrio. Si tu entrenamiento requiere ese tipo de infraestructura, necesitas ir a Guerrero o Tlatelolco donde hay gymns con mayor inversión en equipamiento.',
      },
      {
        q: '¿Cómo llego a los gymns de Peralvillo en transporte público?',
        a: 'La forma más directa es Metro Línea B, estación Lagunilla, que queda en el límite sur del barrio. También puedes usar Eje 1 Norte con transporte público de superficie que conecta Peralvillo con Morelos, Tepito y Guerrero en ambas direcciones. Desde el centro histórico el viaje es de 10-15 minutos en Metro. Desde colonias como Lindavista o Tlatelolco, Eje 1 Norte conecta directamente. El barrio no tiene estaciones de Metrobús propias, pero la conexión por Metro y transporte de superficie es suficiente para una ruta de entrenamiento sin complicaciones.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Peralvillo tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Peralvillo suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~6' },
      { label: 'Membresía mensual', value: '$350–$800 MXN' },
      { label: 'Referente',         value: 'Av. Peralvillo / Calle Magnolia' },
      { label: 'Perfil',            value: 'Budget barrio norte Cuauhtémoc' },
    ],
    barrios: [
      { name: 'Morelos',    slug: 'morelos',    district: 'cuauhtemoc' },
      { name: 'Tlatelolco', slug: 'tlatelolco', district: 'cuauhtemoc' },
      { name: 'Guerrero',   slug: 'guerrero',   district: 'cuauhtemoc' },
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
    h1: 'Estudios en Peralvillo — clases de grupo en barrio del norte 2026',
    metaDesc: 'Estudios y clases en Peralvillo, CDMX: aeróbics y zumba de $70 a $140 MXN/clase. Magnolia, Potrero. Incluido en membresía. Guía 2026.',
    intro: `El estudio boutique no existe en Peralvillo — el barrio no tiene la densidad demográfica ni el perfil de ingreso que genere esa demanda ahorita. Lo que tiene son clases de grupo integradas en las membresías de los gymns de la zona: aeróbics, zumba y clases de box fitness que se llenan en las horas pico del barrio — mañana temprano y tarde-noche al salir del trabajo.

El formato es claro y funcional: 45-60 minutos de clase grupal con instructor en vivo, sin equipo especial, incluida en la membresía mensual. La mayoría de los socios de Peralvillo no paga clase suelta porque la membresía es tan accesible que incluir las clases en la cuota tiene más sentido económico. Cuando el gym ofrece la opción de clase suelta, va de $70 a $140 MXN.

Los gymns de Peralvillo sobre Magnolia y Av. Peralvillo tienen grupos de clase estables: los mismos alumnos a la misma hora, con el mismo instructor, semana a semana. Esa estabilidad genera comunidad y continuidad — el instructor conoce el nivel de cada alumno y adapta la intensidad de manera informal. No es boutique personalizado, pero tampoco es la clase anónima de un gym cadena. Para quien busca clase de grupo accesible con ambiente de barrio real, Peralvillo tiene exactamente eso.`,
    faq: [
      {
        q: '¿Qué modalidades de clase hay en Peralvillo?',
        a: 'Los gymns de Peralvillo ofrecen principalmente aeróbics de alto impacto, zumba y box fitness como clases grupales incluidas en membresía. Algunos espacios tienen spinning básico en días específicos. El yoga, pilates y funcional boutique no están disponibles en el barrio ahorita. Para esas modalidades, los barrios vecinos de Tlatelolco o Guerrero tienen alguna opción con mayor variedad. Dentro de Peralvillo, las clases disponibles son las que tienen más demanda en el perfil C del barrio — aeróbics y combate básico.',
      },
      {
        q: '¿Los instructores de clases en Peralvillo son buenos?',
        a: 'Para los formatos que ofrecen, sí. Los instructores de aeróbics y zumba de los gymns de Peralvillo tienen experiencia suficiente para llevar clases grupales de 15-25 personas con energía y estructura. La certificación formal varía — algunos tienen título de instructor de fitness, otros tienen experiencia práctica de años sin certificación internacional. Para los objetivos de la clase — cardio de alta intensidad y mejora de coordinación — el resultado es adecuado. Si buscas instrucción altamente técnica en alguna disciplina específica, necesitas ir a un barrio con mayor densidad de instructores especializados.',
      },
      {
        q: '¿Hay estudios emergentes o espacios nuevos de fitness en Peralvillo?',
        a: 'Ahorita no hay señales claras de un estudio boutique emergente en Peralvillo. El barrio está en el borde norte de la Cuauhtémoc y no comparte la trayectoria de gentrificación de San Rafael o partes de Guerrero. Lo que puede aparecer en el mediano plazo son pequeños spaces de funcional o kickboxing que aprovechen el perfil de combate que permea desde Morelos y Tepito al sur. Para 2026, la oferta es la que hay: clases de grupo en gymns budget sin boutique. Que eso sea suficiente depende de qué buscas.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Clases disponibles',  value: 'Aeróbics / Zumba / Box fitness' },
      { label: 'Clase suelta',        value: '$70–$140 MXN' },
      { label: 'Incluido membresía',  value: 'Sí en gymns principales' },
      { label: 'Tamaño grupo',        value: '15-25 personas' },
    ],
    barrios: [
      { name: 'Morelos',    slug: 'morelos',    district: 'cuauhtemoc' },
      { name: 'Tlatelolco', slug: 'tlatelolco', district: 'cuauhtemoc' },
      { name: 'Guerrero',   slug: 'guerrero',   district: 'cuauhtemoc' },
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
    h1: 'Entrenadores personales en Peralvillo',
    metaDesc: 'Entrenadores personales en Peralvillo, CDMX: PT de $280 a $580 MXN/sesión. Av. Peralvillo, Potrero. Acceso directo, sin overhead. Guía 2026.',
    intro: `El personal training en Peralvillo tiene el precio más bajo que encuentras en la Cuauhtémoc: una sesión con entrenador va de $280 a $580 MXN. El modelo de trabajo es de barrio: acordás por WhatsApp, entrenas en el gym del barrio, el trainer sabe tu nombre y tu historial desde la segunda semana. Sin sistema de reservas, sin paquete de bienvenida, sin overhead de boutique.

Los entrenadores de Peralvillo trabajan principalmente con objetivos de acondicionamiento general y pérdida de peso — los dos objetivos más comunes en el perfil del barrio. Algunos tienen experiencia en box fitness y entrenamiento de combate básico, por la proximidad cultural con Morelos y Tepito. Para rehabilitación funcional avanzada o periodización de fuerza para atleta competitivo, hay que buscar fuera del barrio.

Lo que tiene de especial el PT en Peralvillo es la accesibilidad real: a $280–$580 MXN por sesión, contratar trainer personal deja de ser privilegio y se convierte en opción viable para alguien con presupuesto C. El ahorro frente a barrios como Guerrero ($350–$700 MXN) o Tlatelolco ($400–$750 MXN) es modesto pero consistente. Para quien vive en la zona norte de la Cuauhtémoc o en Gustavo A. Madero colindante, Peralvillo ahorita tiene el acceso a PT más económico sin cruzar toda la ciudad.`,
    faq: [
      {
        q: '¿Cuánto cobra un PT en Peralvillo?',
        a: 'Una sesión de entrenamiento personal en Peralvillo va de $280 a $580 MXN. Los paquetes de 10 sesiones van de $2,300 a $4,600 MXN con descuento habitual de 15-20%. El entrenamiento a domicilio tiene cargo adicional de $70-$100 MXN. Es el precio más bajo de la Cuauhtémoc para PT con entrenador presente. La diferencia frente a barrios como Tlatelolco o Guerrero no es enorme, pero frente a Roma Norte o Condesa el ahorro anual acumulado en paquetes mensuales es significativo.',
      },
      {
        q: '¿Los entrenadores de Peralvillo tienen certificaciones?',
        a: 'El nivel de certificación varía más en Peralvillo que en barrios con mayor densidad de fitness. Hay entrenadores con certificaciones formales — ISSA, certificaciones nacionales con examen — y otros que operan por experiencia práctica sin credencial internacional. El protocolo de validación es el mismo: pedí ver la certificación, verificá que haga diagnóstico de movimiento en la primera sesión, y chequeá referencias de otros clientes. La experiencia práctica sólida sin certificación puede ser válida, pero no puedes saberlo sin hacer esas preguntas básicas primero.',
      },
      {
        q: '¿Vale la pena PT en Peralvillo para alguien que viene de otro barrio?',
        a: 'Para alguien que no vive en la zona, el beneficio de precio hay que pesarlo contra el tiempo de desplazamiento. Si Peralvillo queda de paso en tu ruta diaria — por el Metro Lagunilla o Eje 1 Norte — entonces el costo-beneficio es claro. Si tienes que hacer un desvío significativo, probablemente el ahorro de $100–$200 MXN por sesión frente a un trainer de Guerrero no justifica el tiempo. Para quien vive en el barrio o en la zona norte colindante, Peralvillo tiene el acceso a PT más económico y directo de la zona sin discusión.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$280–$580 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,300–$4,600 MXN' },
      { label: 'Perfil',              value: 'Acondicionamiento / Pérdida de peso' },
      { label: 'Acceso',              value: 'Directo por WhatsApp' },
    ],
    barrios: [
      { name: 'Morelos',    slug: 'morelos',    district: 'cuauhtemoc' },
      { name: 'Tlatelolco', slug: 'tlatelolco', district: 'cuauhtemoc' },
      { name: 'Guerrero',   slug: 'guerrero',   district: 'cuauhtemoc' },
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
    h1: 'Eventos fitness en Peralvillo',
    metaDesc: 'Eventos fitness en Peralvillo, CDMX: clases abiertas y retos internos de $0 a $180 MXN. Av. Peralvillo. Comunidad pequeña, formato real. Guía 2026.',
    intro: `Los eventos de Peralvillo son los de un barrio pequeño con comunidad real: clases abiertas ocasionales cuando llega instructor nuevo, retos internos trimestrales en los gymns más establecidos, y salidas de fin de semana al Parque Peralvillo o a la zona de Lagunilla donde hay espacio al aire libre. Sin sponsorships, sin streaming, sin premiación corporativa — actividades que la comunidad organiza para seguir entrenando junta con un objetivo concreto.

Los gymns sobre Magnolia y Av. Peralvillo anuncian sus eventos por cartel físico y WhatsApp de socios. No hay agenda pública de eventos en redes sociales — o si la hay, no siempre está actualizada. Para quien ya es parte de la comunidad de algún gym de la zona, enterarse de los eventos es automático. Para quien llega de fuera, la única forma confiable es preguntar directamente en el mostrador del gym.

El Parque Peralvillo, a pocas cuadras al norte del barrio, es el espacio de actividad física al aire libre más cercano: área de calestenics, canchas multiusos y espacio para correr. Algunos instructores organizan sesiones de entrenamiento outdoor ahí los fines de semana — sin costo, con aviso por WhatsApp de un día de anticipación. Para running con grupo más organizado, Tlatelolco tiene mejores opciones a 15 minutos de distancia.`,
    faq: [
      {
        q: '¿Hay parque o espacio para entrenamiento outdoor en Peralvillo?',
        a: 'El Parque Peralvillo queda a pocas cuadras del barrio al norte, con área de calestenics, canchas multiusos y espacio para correr. Es el punto de reunión de grupos informales de entrenamiento los fines de semana temprano — grupos pequeños de 5-15 personas que se reúnen sin inscripción ni costo. Algunos gimnasios de Peralvillo tienen instructores que llevan grupos ahí ocasionalmente. Para espacio outdoor más amplio, Tlatelolco tiene la zona peatonal alrededor de la Plaza de las Tres Culturas, a 15-20 minutos caminando o en transporte.',
      },
      {
        q: '¿Hay eventos de fitness para toda la familia en Peralvillo?',
        a: 'Los gymns de Peralvillo no tienen programación específica para niños ni adultos mayores de manera formal. Lo que hay son clases de grupo estándar abiertas a mayores de 16 años en la mayoría de los casos. Algunos gymns tienen horarios de la mañana con grupos más tranquilos donde adultos mayores entrenan con mayor comodidad. Para programación familiar o actividad física para niños, el parque del barrio y los eventos culturales de Lagunilla son mejores opciones que los gymns. La oferta de fitness familiar formal no es el fuerte de la zona ahorita.',
      },
      {
        q: '¿Cómo me entero de clases gratuitas o eventos en Peralvillo?',
        a: '¡Hay que ir y preguntar, güey! El canal principal de eventos en Peralvillo es el cartel físico en la entrada del gym y el WhatsApp de socios — Instagram no es confiable para este perfil de gymns. Si quieres clase de prueba, la mayoría de los gimnasios de Peralvillo ofrecen primera clase gratis sin compromiso — preguntá directamente en el mostrador. Si quieres estar al tanto de retos y clases abiertas, pedí que te agreguen al WhatsApp de la comunidad del gym cuando te hagas socio. Así de simple funciona Peralvillo.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Formato habitual', value: 'Retos internos / Clases abiertas' },
      { label: 'Precio eventos',   value: '$0–$180 MXN' },
      { label: 'Outdoor',          value: 'Parque Peralvillo (calestenics)' },
      { label: 'Comunicación',     value: 'WhatsApp + cartel físico' },
    ],
    barrios: [
      { name: 'Morelos',    slug: 'morelos',    district: 'cuauhtemoc' },
      { name: 'Tlatelolco', slug: 'tlatelolco', district: 'cuauhtemoc' },
      { name: 'Guerrero',   slug: 'guerrero',   district: 'cuauhtemoc' },
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
    h1: 'Bienestar en Peralvillo — nutrición y masaje a precio real 2026',
    metaDesc: 'Bienestar en Peralvillo, CDMX: nutrición y masaje de $200 a $500 MXN. Av. Peralvillo, Magnolia. Más accesible de la Cuauhtémoc norte. Guía 2026.',
    intro: `El bienestar en Peralvillo es el más accesible de la zona norte de la Cuauhtémoc: consultorios de nutrición a $220–$500 MXN de consulta inicial, masaje de recuperación a $200–$450 MXN por sesión de 60 minutos. No hay spa, no hay crioterapia, no hay envolturas de algas — hay lo que un vecino de barrio que entrena 3-4 días por semana necesita para mantenerse sano y seguir entrenando.

Los consultorios de nutrición de la zona trabajan principalmente con pérdida de peso, control glucémico y orientación de hábitos alimenticios. No son especialistas en nutrición deportiva de alto rendimiento, pero para los objetivos de fitness del perfil C del barrio son adecuados. El seguimiento mensual va de $180 a $350 MXN — el rango más bajo de la alcaldía para profesional con título.

El masaje de recuperación es el servicio de bienestar más demandado en Peralvillo: tejido profundo y drenaje linfático básico a $200–$450 MXN por sesión de 60 minutos. Algunos gimnasios de Peralvillo tienen servicio integrado de masaje para socios con tarifa preferencial. Para quien entrena 4-5 días por semana y quiere incluir masaje mensual o bisemanal como parte de la rutina, en Peralvillo ese costo es completamente sostenible. Es el acceso más económico a masaje deportivo real de toda la Cuauhtémoc ahorita.`,
    faq: [
      {
        q: '¿Hay nutriólogos en Peralvillo?',
        a: 'Hay consultorios de nutrición sobre Av. Peralvillo y calles adyacentes con enfoque en pérdida de peso y mejora de hábitos alimenticios. La consulta inicial va de $220 a $500 MXN e incluye evaluación básica y planteamiento de objetivos. El seguimiento mensual va de $180 a $350 MXN — el precio más bajo de la Cuauhtémoc para nutriólogo con título. No son todos especialistas en nutrición deportiva de alto rendimiento, pero para pérdida de peso y hábitos saludables del ciudadano que entrena regularmente, el servicio cubre la necesidad. Para periodización de macros para deportista de competencia, hay que buscar fuera del barrio.',
      },
      {
        q: '¿Qué servicios de masaje hay en Peralvillo?',
        a: 'El masaje de tejido profundo y recuperación muscular básica está disponible en centros sobre Magnolia y Av. Peralvillo a $200–$450 MXN por sesión de 60 minutos. También hay masaje de relajación clásico en el mismo rango. Algunos gimnasios de Peralvillo tienen servicio de masaje para socios con tarifa de $180–$380 MXN. Crioterapia, compresión neumática y otros servicios de alta tecnología no están en el barrio ahorita. Para quien necesita esos servicios, Roma Norte o Condesa tienen la oferta más completa aunque a precios tres veces superiores.',
      },
      {
        q: '¿Vale la pena el bienestar en Peralvillo si vengo de otro barrio?',
        a: 'Para el masaje de recuperación mensual, el precio de Peralvillo puede justificar el desplazamiento si vives en la zona norte o de camino. La diferencia de $100–$150 MXN por sesión frente a Guerrero o Tlatelolco acumula $600–$900 MXN en semestral — suficiente para cubrir una sesión extra. Para la consulta de nutrición, el desplazamiento se justifica menos porque la frecuencia de visita es menor. Si ya vas al gym de Peralvillo, incorporar masaje y nutrición de la zona es la opción más lógica. Si vienes solo por el servicio de bienestar, calcula el tiempo de viaje contra el ahorro real.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$220–$500 MXN' },
      { label: 'Masaje deportivo 60m', value: '$200–$450 MXN' },
      { label: 'Seguimiento mensual',  value: '$180–$350 MXN' },
      { label: 'Posición',             value: 'Más accesible de Cuauhtémoc norte' },
    ],
    barrios: [
      { name: 'Morelos',    slug: 'morelos',    district: 'cuauhtemoc' },
      { name: 'Tlatelolco', slug: 'tlatelolco', district: 'cuauhtemoc' },
      { name: 'Guerrero',   slug: 'guerrero',   district: 'cuauhtemoc' },
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
