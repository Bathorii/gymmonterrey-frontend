// src/data/cdmx/barrio-morelos.ts
// Draft – lastReviewed: 2026-06-28

export const barrioContent = {
  nombre: 'Morelos',
  slug: 'morelos',
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

  sobreBarrio: `Morelos es el barrio obrero de la Cuauhtémoc, güey — denso, trabajador, sin pretensiones. Sobre Calle Moctezuma y Eje 1 Norte hay una vida de barrio que no se para: mercados, comercio informal, transporte y comunidad que lleva generaciones en las mismas manzanas. El NSE es C/D con cultura de actividad física práctica: el vecino de Morelos no busca gym boutique, busca un lugar donde sudar en serio a precio que no comprometa el gasto familiar del mes. La oferta de fitness responde a eso — gyms de barrio con membresías bajas, acondicionamiento general, boxeo y funcional sin adorno. Colinda con Tepito al sur, lo que significa que algo de la cultura de combate del barrio vecino permea en la zona. Metro Morelos en Línea B es el acceso principal. No es barrio para instagramear el gym, es barrio para ir, entrenar y volver.

Para el vecino de Morelos que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Morelos en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Morelos — budget fitness en barrio obrero 2026',
    metaDesc: 'Gimnasios en Morelos, CDMX: ~8 opciones de $350 a $900 MXN/mes. Moctezuma, Eje 1 Norte. Barrio obrero, precio real. Guía 2026.',
    intro: `Morelos tiene alrededor de 8 gimnasios y espacios de entrenamiento, distribuidos principalmente sobre Calle Moctezuma, Av. del Trabajo y las calles cercanas a Metro Morelos. El perfil es budget working class: membresías de $350 a $900 MXN al mes, equipamiento funcional sin renovación reciente en algunos casos, y comunidad de socios que entrena de lunes a sábado sin falta porque el gym es parte de la rutina, no un lujo opcional.

La infraestructura de los gymns de Morelos es honesta: mancuernas, barras, máquinas de cable básicas, área cardiovascular con caminadoras y bikes, y en algunos casos sala de combate con bolsas para entrenamiento de boxeo básico. No hay plataformas olímpicas ni equipamiento de CrossFit de gama alta. Lo que hay es suficiente para acondicionamiento físico completo y progresión de fuerza básica.

El acceso por transporte público es bueno: Metro Línea B estación Morelos conecta directamente al barrio, y Eje 1 Norte tiene servicio de transporte frecuente que conecta con Guerrero, Tlatelolco y Tepito. Para quien vive o trabaja en la zona norte de la Cuauhtémoc, Morelos tiene la membresía más accesible de la alcaldía sin sacrificar la funcionalidad básica del gym. La comunidad es de barrio real — te conocen por nombre después de tres semanas.`,
    faq: [
      {
        q: '¿Cuánto cuesta una membresía en Morelos?',
        a: 'Las membresías mensuales en Morelos van de $350 a $900 MXN, con la mayoría de los gymns completos en el rango de $450–$700 MXN. Es el precio más bajo de la alcaldía Cuauhtémoc para gym con equipamiento funcional real. La inscripción inicial va de $150 a $300 MXN. Algunos gymns ofrecen pago semanal o quincenal para mayor flexibilidad. La cuota incluye acceso ilimitado a las instalaciones durante el horario de apertura — sin restricción de horario pico ni membresía de nivel.',
      },
      {
        q: '¿Los gimnasios de Morelos tienen buenas instalaciones?',
        a: '¡Funcionan bien para lo que necesitas, güey! Los gymns de Morelos tienen todo lo esencial para entrenamiento de fuerza e hipertrofia: mancuernas de 5 a 40-50kg, barras y discos, máquinas de cable y poleas, y equipamiento cardiovascular básico. El mantenimiento varía — algunos espacios más nuevos tienen equipamiento más reciente, los más establecidos pueden tener máquinas con más años de uso pero siguen funcionales. Lo que no vas a encontrar son paredes de ladrillo expuesto, iluminación de diseño ni música curada. Lo que sí encuentras es hierro que funciona y gente que va a entrenar.',
      },
      {
        q: '¿Hay gimnasios con horario amplio en Morelos?',
        a: 'Los gymns de Morelos generalmente abren de 6am a 9pm de lunes a viernes, con horario reducido los sábados (7am a 3pm) y algunos cierran el domingo. El horario refleja el perfil del barrio: trabajadores que entrenan temprano en la mañana o al salir del trabajo, sin la demanda de horario nocturno extendido de barrios como Condesa. Para quien tiene horario de trabajo estándar, el horario de apertura de los gymns de Morelos cubre los ventanas de entrenamiento habituales sin problema.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Morelos tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Morelos suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~8' },
      { label: 'Membresía mensual', value: '$350–$900 MXN' },
      { label: 'Referente',         value: 'Calle Moctezuma / Eje 1 Norte' },
      { label: 'Perfil',            value: 'Budget working class' },
    ],
    barrios: [
      { name: 'Tepito',      slug: 'tepito',      district: 'cuauhtemoc' },
      { name: 'Peralvillo',  slug: 'peralvillo',  district: 'cuauhtemoc' },
      { name: 'Guerrero',    slug: 'guerrero',    district: 'cuauhtemoc' },
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
    h1: 'Estudios en Morelos',
    metaDesc: 'Estudios y clases en Morelos, CDMX: aeróbics, zumba y combate de $70 a $150 MXN/clase. Moctezuma. Formato incluido en membresía. Guía 2026.',
    intro: `El formato estudio boutique no existe en Morelos y probablemente no llegue pronto. Lo que tiene el barrio son clases de grupo integradas en las membresías de los gymns de la zona: aeróbics, zumba y spinning básico incluidos en la cuota mensual sin costo adicional. Son los formatos con más demanda en el perfil working class del barrio — clases de energía alta, instructor en vivo, sin necesidad de equipo especial y con resultados cardiovasculares reales.

La proximidad con Tepito significa que algunos gymns de Morelos tienen bolsas de boxeo y ofrecen clases básicas de combate integradas en la membresía. No son academias con trainers de peleadores profesionales — son clases de grupo de boxeo fitness para acondicionamiento físico, que funcionan bien para quien quiere trabajo de cardio-intensivo diferente a la caminadora.

El precio de clase suelta — cuando los gymns la ofrecen como opción — va de $70 a $150 MXN. Pero en Morelos la mayoría de los alumnos tiene membresía mensual que incluye todo, porque la membresía es tan accesible que pagar clase suelta no tiene sentido económico. Para quien visita el barrio o quiere probar sin comprometerse, el pase de día va de $80 a $150 MXN en la mayoría de los espacios.`,
    faq: [
      {
        q: '¿Qué tipos de clases hay en los gymns de Morelos?',
        a: 'Los gymns de Morelos incluyen principalmente aeróbics de alto impacto, zumba, spinning básico y clases de box fitness en grupos de 15-25 personas. Estas clases están incluidas en la membresía mensual sin costo adicional. El yoga y pilates formal no son parte de la oferta estándar del barrio. Si buscas esas modalidades, los barrios vecinos de Guerrero o Tlatelolco tienen alguna opción, aunque tampoco con la densidad de barrios como Condesa o Roma Norte.',
      },
      {
        q: '¿Las clases de boxeo en Morelos son de calidad real?',
        a: 'Las clases de boxeo que hay en Morelos son principalmente de formato box fitness — cardio y técnica básica en grupos, no entrenamiento de peleadores. El nivel técnico de instrucción es intermedio: suficiente para aprender guardia, jab, cross y combinaciones básicas, y para usar el boxeo como herramienta de acondicionamiento cardiovascular. Para entrenamiento de boxeo técnico con aspiraciones de competencia, Tepito queda a pocas cuadras y tiene academias de nivel muy superior. Las clases de box fitness de Morelos son chidas para quien quiere sudar y aprender algo útil, sin la seriedad del ring.',
      },
      {
        q: '¿Hay estudios boutique emergentes en Morelos?',
        a: 'Ahorita no. Morelos no está en la trayectoria de gentrificación fitness que sí se nota en San Rafael o partes de Guerrero. El perfil socioeconómico del barrio y las rentas locales no generan todavía la demanda que justifique un estudio boutique de pilates Reformer o yoga de diseño. Lo que puede aparecer en los próximos años son pequeños spaces de funcional o kick-boxing boutique que aprovechen el perfil de combate de la zona — pero eso es especulación. Ahorita lo que hay es lo que hay: clases de grupo en gymns de membresía accesible, y eso es suficiente para el barrio.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Clases disponibles',  value: 'Aeróbics / Zumba / Box fitness' },
      { label: 'Clase suelta',        value: '$70–$150 MXN' },
      { label: 'Incluido membresía',  value: 'Sí en gymns principales' },
      { label: 'Pase de día',         value: '$80–$150 MXN' },
    ],
    barrios: [
      { name: 'Tepito',     slug: 'tepito',     district: 'cuauhtemoc' },
      { name: 'Peralvillo', slug: 'peralvillo', district: 'cuauhtemoc' },
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
    h1: 'Entrenadores personales en Morelos — PT a precio de barrio 2026',
    metaDesc: 'Entrenadores personales en Morelos, CDMX: PT de $300 a $600 MXN/sesión. Moctezuma, Metro Morelos. Precio real, acceso directo. Guía 2026.',
    intro: `El personal training en Morelos tiene el precio más honesto que encuentras en la Cuauhtémoc: una sesión individual con entrenador certificado o con experiencia sólida va de $300 a $600 MXN. El modelo de trabajo es directo: acordás horario por WhatsApp, llegas al gym, entrenas. Sin formulario de intake en línea, sin programa de onboarding de 5 pasos, sin paquete de bienvenida. Resultado o no resultado — así de simple.

Los entrenadores de Morelos trabajan principalmente dentro de los gimnasios de Morelos con clientes que son vecinos de la zona o trabajadores que pasan por el Metro Morelos en la ruta diaria. El perfil de objetivo es pérdida de peso, ganancia de masa muscular y acondicionamiento general — los tres objetivos más comunes en cualquier barrio y los que más demanda tienen en Morelos. Para rehabilitación funcional avanzada o periodización de atleta de competencia, hay que buscar fuera del barrio.

Lo que diferencia a los entrenadores de Morelos del promedio de la Ciudad no es la especialización sino la continuidad: el mismo trainer, el mismo gym, el mismo grupo de clientes durante años. La fidelización va por resultado y por confianza personal, no por renovación de paquete en app. Para quien busca PT sin el overhead del boutique fitness, Morelos ahorita ofrece el acceso más directo y el precio más real de la zona norte de la Cuauhtémoc.`,
    faq: [
      {
        q: '¿Cuánto cobra un PT en Morelos?',
        a: 'Una sesión de entrenamiento personal en Morelos va de $300 a $600 MXN según la experiencia del entrenador. Los paquetes de 10 sesiones van de $2,500 a $4,800 MXN con descuento habitual de 15-20% sobre el precio de sesión suelta. El entrenamiento a domicilio tiene cargo adicional de $80-$100 MXN. Es uno de los precios más bajos de la alcaldía para PT real. Frente a los $450-$900 MXN que cobra el equivalente en Guerrero o Tlatelolco, el ahorro en Morelos es consistente, aunque la sofisticación de las instalaciones también refleja la diferencia.',
      },
      {
        q: '¿Cómo valido que un entrenador de Morelos es competente?',
        a: 'El proceso de validación es el mismo que en cualquier barrio: pedí ver su certificación (NSCA, NASM, ISSA o equivalente con examen proctored), verificá que haga diagnóstico de movimiento en la primera sesión antes de darte una rutina, y pedí referencias de clientes actuales o anteriores. En Morelos, la validación más fuerte es la referencia directa — si alguien del gym te recomendó al trainer y puedes ver el resultado de ese alumno, eso vale más que cualquier título. Los entrenadores de barrio que llevan años en el mismo gym tienen un track record visible en la comunidad.',
      },
      {
        q: '¿Vale la pena contratar PT en Morelos o mejor ir a otro barrio?',
        a: 'Depende de tu objetivo y tu presupuesto. Si tu objetivo es acondicionamiento general, pérdida de peso o ganancia básica de masa muscular, los entrenadores de Morelos son completamente competentes y el precio hace que contratar PT sea viable cuando en otros barrios no lo sería. Si buscas especialización en rehabilitación funcional, powerlifting competitivo o nutrición deportiva de alto rendimiento integrada con el entrenamiento, probablemente necesitas buscar en Guerrero o Tlatelolco. Para el 80% de los objetivos de fitness habituales, Morelos cubre bien.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$300–$600 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,500–$4,800 MXN' },
      { label: 'Perfil trainer',      value: 'Pérdida de peso / Acondicionamiento' },
      { label: 'Acceso',              value: 'Directo, sin intermediarios' },
    ],
    barrios: [
      { name: 'Tepito',     slug: 'tepito',     district: 'cuauhtemoc' },
      { name: 'Peralvillo', slug: 'peralvillo', district: 'cuauhtemoc' },
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
    h1: 'Eventos fitness en Morelos',
    metaDesc: 'Eventos fitness en Morelos, CDMX: retos internos y clases abiertas de $0 a $200 MXN. Moctezuma. Comunidad de barrio real. Guía 2026.',
    intro: `Los eventos fitness en Morelos son los de un barrio obrero que toma en serio el deporte pero no tiene ni necesita el formato de evento aspiracional. Los gymns sobre Moctezuma y Eje 1 Norte organizan retos internos trimestrales — test de resistencia física, competencia de fuerza relativa, medición de porcentaje de grasa corporal — que se anuncian en el tablón del local y por WhatsApp de socios. Sin streaming, sin premiación corporativa, sin sponsor: resultado concreto y reconocimiento de comunidad.

Las clases abiertas gratuitas son la activación más frecuente: cuando llega instructor nuevo, cuando el gym renueva equipamiento o cuando cumple aniversario. El aviso va por cartel físico y WhatsApp — Instagram no es el canal principal de comunicación de los gymns de Morelos. Para los socios que ya están en los grupos de WhatsApp, enterarse es automático. Para quien no es socio, pasar por el gym y preguntar sigue siendo el método más confiable.

La actividad física al aire libre en Morelos está principalmente en el Parque Peralvillo (a 10 minutos caminando al norte) donde hay calestenics y canchas que usan grupos de entrenamiento informales. Algunos gimnasios de Morelos organizan salidas de fin de semana a ese parque o al área de Tlatelolco. Sin inscripción, sin costo: se anuncian por WhatsApp con un día de anticipación.`,
    faq: [
      {
        q: '¿Hay eventos de actividad física al aire libre en Morelos?',
        a: 'Morelos no tiene parque propio de gran escala para eventos organizados de fitness. Lo más cercano es el Parque Peralvillo al norte del barrio, con área de calestenics y canchas deportivas donde se reúnen grupos informales de entrenamiento los fines de semana. Algunos gimnasios de Morelos organizan salidas a ese punto o hacia Tlatelolco — se anuncian por WhatsApp de la comunidad del gym. Para running con grupo grande organizado, la opción más cercana es la zona de Tlatelolco. Son actividades informales sin costo ni inscripción.',
      },
      {
        q: '¿Cómo me entero de eventos y retos en los gymns de Morelos?',
        a: 'El canal principal es el cartel físico en la entrada del gym y el grupo de WhatsApp de socios. Instagram no siempre está actualizado para los gymns de Morelos. La forma más directa de enterarte es preguntar en el mostrador del gym que te interesa — el personal siempre sabe qué hay planeado. Si ya eres socio, pedí que te agreguen al grupo de WhatsApp de la comunidad. Los eventos de Morelos no tienen mucha anticipación: se anuncian 1-2 semanas antes, no meses.',
      },
      {
        q: '¿Hay clases gratuitas de prueba en los gymns de Morelos?',
        a: 'Muchos gymns de Morelos ofrecen primera clase gratis o día de prueba sin costo para que conozcas el espacio antes de pagar membresía. La membresía mensual en el barrio es tan accesible que algunos gymns prefieren dar ese primer día gratis y no cobrar pase de día — la conversión a socio es más simple así. Para clases abiertas sin ser socio, las opciones son más ocasionales: en cambios de temporada, lanzamiento de nueva modalidad o aniversarios del local. Preguntá directamente en el gym.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Formato habitual', value: 'Retos internos / Clases abiertas' },
      { label: 'Precio eventos',   value: '$0–$200 MXN' },
      { label: 'Comunicación',     value: 'WhatsApp + cartel físico' },
      { label: 'Outdoor cercano',  value: 'Parque Peralvillo / Tlatelolco' },
    ],
    barrios: [
      { name: 'Tepito',     slug: 'tepito',     district: 'cuauhtemoc' },
      { name: 'Peralvillo', slug: 'peralvillo', district: 'cuauhtemoc' },
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
    h1: 'Bienestar en Morelos',
    metaDesc: 'Bienestar en Morelos, CDMX: nutrición y masaje de $220 a $550 MXN. Moctezuma, Eje 1 Norte. Precio de barrio, servicio real. Guía 2026.',
    intro: `El bienestar en Morelos es lo esencial bien hecho: consultorios de nutrición básica, masaje de recuperación accesible, y en algunos gymns atención de lesiones menores que no interrumpa la rutina de entrenamiento. Sin spa, sin crioterapia de diseño, sin packaging aspiracional — lo que un trabajador que entrena necesita para seguir entrenando.

Los consultorios de nutrición sobre Moctezuma y Eje 1 Norte trabajan con objetivos de pérdida de peso y mejora de hábitos alimenticios, con consulta inicial de $250 a $550 MXN y seguimiento mensual de $200 a $380 MXN. Es el rango más accesible de la Cuauhtémoc para consulta con nutriólogo con título. Para objetivos básicos de cambio de composición corporal, los profesionales de la zona son adecuados y más accesibles que los de barrios vecinos como Guerrero o Tlatelolco.

El masaje de recuperación está disponible en centros sobre Moctezuma y en algunos gymns que tienen servicio integrado: $220–$480 MXN por sesión de 60 minutos. Para quien entrena 4-5 días por semana, incluir masaje quincenal o mensual es parte del mantenimiento del cuerpo — y en Morelos ese costo es sostenible sin ajuste significativo del presupuesto. Ahorita el barrio no tiene servicios de recuperación de alta tecnología ni spas integrales, pero lo básico de nutrición y masaje está cubierto a precio real.`,
    faq: [
      {
        q: '¿Hay nutriólogos en Morelos?',
        a: 'Hay consultorios de nutrición sobre Moctezuma y Eje 1 Norte con enfoque en pérdida de peso, control glucémico y mejora de hábitos alimenticios. La consulta inicial va de $250 a $550 MXN e incluye evaluación básica de composición corporal y planteamiento de objetivos. El seguimiento mensual va de $200 a $380 MXN. No son todos nutriólogos especializados en rendimiento deportivo de alto nivel, pero para pérdida de peso y mejora de hábitos del ciudadano que entrena regularmente, el servicio es adecuado y accesible. Si buscas periodización de macros para preparación de competencia, el barrio no tiene ese perfil ahorita.',
      },
      {
        q: '¿Qué servicios de masaje hay en Morelos?',
        a: 'El masaje de tejido profundo y recuperación muscular básica está disponible en centros sobre Moctezuma a $220–$480 MXN por sesión de 60 minutos. También hay masaje de relajación clásico en el mismo rango. Algunos gimnasios de Morelos tienen servicio de masaje integrado para socios con tarifa preferencial de $180–$380 MXN. Para crioterapia, compresión neumática o baño de contraste, el barrio no tiene esas instalaciones ahorita — hay que ir a Roma Norte o Condesa. Para recuperación post-entrenamiento de semana a semana, el masaje de Morelos cubre la necesidad a un costo que no compromete el presupuesto mensual.',
      },
      {
        q: '¿Vale la pena el bienestar en Morelos o conviene ir a otro barrio?',
        a: 'Para objetivos básicos de soporte al entrenamiento — nutrición orientada a pérdida de peso o mejora de hábitos, masaje de recuperación mensual — el ecosistema de bienestar de Morelos es completamente válido y más accesible que cualquier barrio vecino. El ahorro frente a Guerrero o Tlatelolco no es enorme, pero frente a Roma Norte o Condesa es de 30-40% en el mismo tipo de servicio. Si la especialización de la consulta o la calidad del espacio físico donde recibirás el masaje es importante para tú, probablemente prefieres otro barrio. Si lo que importa es el resultado al precio más justo, Morelos cumple.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$250–$550 MXN' },
      { label: 'Masaje deportivo 60m', value: '$220–$480 MXN' },
      { label: 'Seguimiento mensual',  value: '$200–$380 MXN' },
      { label: 'Vs. Guerrero',         value: 'Similar precio, menor sofisticación' },
    ],
    barrios: [
      { name: 'Tepito',     slug: 'tepito',     district: 'cuauhtemoc' },
      { name: 'Peralvillo', slug: 'peralvillo', district: 'cuauhtemoc' },
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
