// src/data/cdmx/barrio-del-carmen.ts
// Draft – lastReviewed: 2026-06-23

export const barrioContent = {
  nombre: 'Del Carmen',
  slug: 'del-carmen',
  group: 'C',
  parentDistrict: {
    nombre: 'Coyoacán',
    slug: 'coyoacan',
  },
  lastReviewed: '2026-06-23',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Del Carmen es la colonia de Coyoacán donde el fitness es parte del estilo de vida intelectual: sobre Francisco Sosa, Fernández Leal y Aguayo hay una concentración de profesionistas, académicos y artistas — la influencia de la UNAM se nota a dos cuadras — que llevan yoga, pilates y meditación con la misma seriedad con la que leen un ensayo. El NSE es B–C alto, con perfil de residente permanente de clase media establecida y bolsas de profesionistas con ingresos A– que se resisten a moverse de Coyoacán. Metro Viveros es el acceso clave: el Parque de los Viveros de Coyoacán, justo al lado, es la extensión natural de cualquier rutina de entrenamiento del barrio. A 2.240m de altitud, el running y el cardio al aire libre tienen ventajas aeróbicas reales que los vecinos del barrio conocen bien.

Para el vecino de Del Carmen que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Del Carmen en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Del Carmen — Coyoacán fitness 2026',
    metaDesc: 'Gimnasios en Del Carmen, Coyoacán CDMX: $600–$1,500 MXN/mes. Viveros, Francisco Sosa. NSE B–C. Guía 2026.',
    intro: `Del Carmen tiene entre 4 y 8 establecimientos fitness activos en la colonia y el corredor inmediato sobre División del Norte y Av. Universidad: desde gymns independientes a $600–$1,000 MXN al mes hasta estudios boutique emergentes de yoga y funcional en el rango $900–$1,500 MXN. Es un mercado B–C que no tiene la densidad boutique de Condesa o Roma pero tampoco la lógica de gym de barrio C–D — está en un punto intermedio con identidad propia.

Los gymns independientes del sector tienen el perfil del gym de barrio Coyoacán: instalaciones limpias y funcionales, ambiente sin pretensión, y una comunidad de socios regular que se conoce. Las membresías van de $600 a $1,000 MXN al mes con inscripción inicial de $200–$400 MXN. El equipamiento es completo para musculación y cardio básico; algunos locales tienen sala de clases grupales con yoga y pilates mat incluidos en la membresía.

El Parque de los Viveros, a 5 minutos caminando desde el interior de Del Carmen, es el recurso de fitness más valioso del barrio: 47 hectáreas con circuito de trote de 3.5km, árboles, sombra y comunidad de corredores activa. Para muchos residentes del barrio, los Viveros son el gym principal — el establecimiento cerrado es el complemento.`,
    faq: [
      {
        q: '¿Cuánto cuesta el gym en Del Carmen Coyoacán?',
        a: 'En 2026 el rango va de $600 a $1,500 MXN mensual. Gymns independientes: $600–$1,000 MXN. Estudios boutique de yoga o funcional: $900–$1,500 MXN. La inscripción inicial va de $200 a $400 MXN. Es un rango B–C con opciones para distintos presupuestos dentro de la colonia y el corredor de División del Norte.',
      },
      {
        q: '¿El Parque de los Viveros sirve para entrenar?',
        a: 'Sí, y es el mejor activo fitness de Del Carmen. Los Viveros tienen circuito de trote de 3.5km entre árboles, espacio para calistenia y yoga al aire libre, y una comunidad de corredores activa todos los días de la semana. El acceso es gratuito de 6:00am a 6:00pm. Metro Viveros está a 5 minutos caminando. Para running, yoga matutino y funcional al aire libre, Los Viveros no tiene equivalente en Coyoacán.',
      },
      {
        q: '¿Cómo llego a los gymns de Del Carmen en transporte público?',
        a: 'Metro Viveros (Línea 3) es la estación más directa, a 5-15 minutos caminando de los gymns de Del Carmen. Desde el Centro, el Metro Línea 3 directo en 20-25 minutos. Metrobús División del Norte cubre el corredor oriente de la colonia. Desde Insurgentes, el Metrobús o combi por Av. Universidad llegan en 15-20 minutos.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Del Carmen tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Del Carmen suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gymns independientes', value: '$600–$1,000 MXN/mes' },
      { label: 'Estudios boutique',    value: '$900–$1,500 MXN/mes' },
      { label: 'Viveros',              value: 'Circuito 3.5km – gratuito' },
      { label: 'Metro',                value: 'Viveros – Línea 3' },
    ],
    barrios: [
      { name: 'Coyoacán Centro',  slug: 'coyoacan-centro',  district: 'coyoacan'    },
      { name: 'Churubusco',       slug: 'churubusco',       district: 'coyoacan'    },
      { name: 'Narvarte',         slug: 'narvarte',         district: 'benito-juarez'},
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
    h1: 'Estudios Fitness en Del Carmen — Yoga y Pilates en Coyoacán 2026',
    metaDesc: 'Estudios fitness en Del Carmen Coyoacán. Yoga, pilates y funcional boutique. Metro Viveros. NSE B–C. Guía 2026.',
    intro: `Del Carmen tiene la concentración de estudios de yoga y bienestar más auténtica de Coyoacán: no la más grande — Condesa y Roma superan a la colonia en volumen de oferta boutique — pero sí la más coherente con la identidad del barrio. Los estudios de yoga en Del Carmen tienen un perfil distinto al del yoga comercial de Polanco: son espacios pequeños, con instructoras que llevan años en el barrio, metodologías específicas (iyengar, hatha, kundalini) y comunidades de practicantes regulares que conocen la diferencia entre un alineamiento correcto y uno aproximado.

Los estudios de pilates mat y funcional también tienen presencia en la colonia — establecimientos de 15-30 personas máximo, con instructores que priorizan la técnica sobre el volumen. Las membresías van de $800 a $1,400 MXN al mes; la clase suelta de $200 a $400 MXN según la modalidad y el estudio.

Para pilates Reformer de alta gama o cycling con potenciómetros, Condesa o Polanco tienen mayor oferta especializada a 15-20 minutos por Metro. Para yoga con método, comunidad pequeña y atmósfera de colonia universitaria, Del Carmen es de los mejores barrios de CDMX. Los espacios de danza contemporánea y movimiento somático que han florecido en el barrio en los últimos años amplían la oferta más allá del fitness convencional — Del Carmen tiene esa capa cultural que Condesa o Polanco no replican al mismo precio.`,
    faq: [
      {
        q: '¿Cuánto cuesta el yoga en Del Carmen?',
        a: 'En 2026 las clases de yoga van de $200 a $400 MXN por sesión dependiendo del estudio y el estilo. Los planes mensuales van de $800 a $1,400 MXN. Los estudios de la colonia tienen grupos de 8-20 personas con instructoras establecidas en el barrio. Es un rango B–C con calidad de instrucción comparable a los estudios de Roma o Condesa a precios 10-20% menores.',
      },
      {
        q: '¿Qué estilos de yoga hay en Del Carmen?',
        a: 'Hay estudios con iyengar, hatha, kundalini y vinyasa en Del Carmen y el corredor de Francisco Sosa. El barrio tiene una tradición de yoga más ligada a la práctica seria que al yoga fitness de moda — no encontrarás beer yoga ni yoga goat aquí. Para yoga terapéutico con metodología específica, Del Carmen y el corredor de Coyoacán son la mejor opción de CDMX fuera de los grandes estudios boutique.',
      },
      {
        q: '¿Hay estudios de pilates Reformer en Del Carmen?',
        a: 'Pilates Reformer técnico no está en la colonia propiamente. Hay pilates mat en grupo en algunos estudios del sector, con precio de $200–$350 MXN por clase o $750–$1,200 MXN por membresía mensual. Para Reformer con máquinas Gratz o Balanced Body, Condesa o Polanco son las opciones más cercanas a 15-20 minutos por Metro desde la estación Viveros.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Clase yoga',          value: '$200–$400 MXN' },
      { label: 'Membresía mensual',   value: '$800–$1,400 MXN' },
      { label: 'Estilos disponibles', value: 'Iyengar / Hatha / Kundalini / Vinyasa' },
      { label: 'Reformer más cercano',value: 'Condesa (Metro 15-20 min)' },
    ],
    barrios: [
      { name: 'Coyoacán Centro',  slug: 'coyoacan-centro',  district: 'coyoacan'    },
      { name: 'Churubusco',       slug: 'churubusco',       district: 'coyoacan'    },
      { name: 'Narvarte',         slug: 'narvarte',         district: 'benito-juarez'},
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
    h1: 'Entrenadores Personales en Del Carmen — Coyoacán 2026',
    metaDesc: 'Entrenadores personales en Del Carmen Coyoacán CDMX: $400–$950 MXN/sesión. Viveros outdoor. Guía 2026.',
    intro: `El entrenamiento personal en Del Carmen está en el rango $400 a $950 MXN por sesión de una hora. El mercado es B–C con expectativa de calidad: los residentes del barrio conocen la diferencia entre un entrenador con metodología y uno sin ella, y están dispuestos a pagar por el diferencial. Los coaches del sector tienen mayor proporción de certificaciones de segundo nivel (funcional, corrección postural, yoga terapéutico aplicado al PT) que el promedio de CDMX.

El Parque de los Viveros es el entorno outdoor que diferencia el PT en Del Carmen de cualquier otro barrio de CDMX: una sesión de funcional, running o movilidad en el circuito arbolado de los Viveros a las 7:00am es una propuesta que los coaches del barrio han sabido aprovechar. Los clientes que entrenan outdoor en los Viveros tienen tasas de adherencia más altas que los que entrenan en sala — el entorno lo hace.

Los paquetes de 10 sesiones van de $3.500 a $8,500 MXN. Para el residente de Del Carmen que prioriza calidad de instrucción y entorno de entrenamiento sobre precio mínimo, los coaches del sector ofrecen una de las mejores ecuaciones de Coyoacán. Para quienes buscan entrenamiento de fuerza con enfoque técnico y no solo de estética, Del Carmen tiene coaches con formación en powerlifting y movimiento funcional que trabajan en los gymns del sector a tarifas acordes al NSE B–C de la colonia.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Del Carmen?',
        a: 'En 2026 el rango va de $400 a $950 MXN por sesión de una hora. Los paquetes de 10 sesiones van de $3.500 a $8,500 MXN con descuento del 10-15%. Es un rango B–C con coaches de mayor especialización que el promedio de barrios equivalentes de CDMX. Para el residente que quiere PT con metodología sin llegar a los precios de Polanco o Lomas, Del Carmen es una opción muy competitiva.',
      },
      {
        q: '¿Se puede entrenar con un PT en los Viveros?',
        a: 'Sí. El Parque de los Viveros es el espacio más usado por los coaches de Del Carmen para sesiones outdoor: running de técnica, funcional en el circuito arbolado, movilidad y trabajo de patrones de movimiento en entorno natural. El acceso es gratuito de 6:00am a 6:00pm. El precio de la sesión en los Viveros es el mismo que en sala — el entorno es el valor añadido que los coaches del sector ofrecen como diferenciación.',
      },
      {
        q: '¿Hay coaches de yoga terapéutico en Del Carmen?',
        a: 'Sí. El barrio tiene instructoras con formación en yoga terapéutico aplicado a condiciones específicas — lumbalgia, scoliosis, rehabilitación post-quirúrgica — que complementan la fisioterapia convencional. El precio va de $450 a $850 MXN por sesión individual. Es el tipo de especialización que refleja el perfil académico y consciente del barrio — Del Carmen tiene una de las mejores concentraciones de yoga terapéutico de Coyoacán.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$400–$950 MXN' },
      { label: 'Paquete 10 sesiones', value: '$3.500–$8,500 MXN' },
      { label: 'Outdoor preferido',   value: 'Parque de los Viveros' },
      { label: 'Especialización',     value: 'Funcional / Yoga terapéutico' },
    ],
    barrios: [
      { name: 'Coyoacán Centro',  slug: 'coyoacan-centro',  district: 'coyoacan'    },
      { name: 'Churubusco',       slug: 'churubusco',       district: 'coyoacan'    },
      { name: 'Narvarte',         slug: 'narvarte',         district: 'benito-juarez'},
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
    h1: 'Eventos de Fitness en Del Carmen — Coyoacán 2026',
    metaDesc: 'Eventos fitness en Del Carmen Coyoacán CDMX. Running en Viveros, yoga al aire libre y workshops boutique. Guía 2026.',
    intro: `Los eventos de fitness en Del Carmen tienen el perfil de Coyoacán: comunidad, intención y entorno. El Parque de los Viveros es el escenario de los grupos de running más activos del sur de CDMX — hay grupos que salen todos los días de la semana con distintos niveles y distancias, coordinados por WhatsApp y sin cuota formal. La comunidad de corredores de los Viveros es una de las más cohesionadas de la ciudad.

Los estudios de yoga y bienestar de Del Carmen organizan eventos propios con regularidad: retiros de un día en casas de la colonia, workshops de método específico con instructores invitados, y clases abiertas de presentación para nuevos practicantes. Son eventos de 10-40 personas, con inscripción de $200–$600 MXN, con difusión por WhatsApp de socios e Instagram del estudio.

La Alcaldía Coyoacán organiza activaciones de bienestar en el Parque Centenario y el corredor de Francisco Sosa con regularidad — yoga al aire libre, tai chi y aeróbics gratuitos que convocan a vecinos del barrio en temporada de primavera y verano. Son eventos sin producción elaborada pero con participación real de la comunidad de Del Carmen. El Vivero de Coyoacán y el Parque de los Coyotes son escenarios habituales de grupos de running y ciclismo matutinos organizados por la comunidad del barrio — sin inscripción, con regularidad semanal y abiertos a cualquiera que quiera sumarse.`,
    faq: [
      {
        q: '¿Hay grupos de running en los Viveros?',
        a: 'Sí. El Parque de los Viveros tiene grupos de running activos todos los días de la semana, con distintos niveles — desde caminata rápida hasta corredores de 10K–21K. Los grupos más organizados salen los martes, jueves y sábados por la mañana (6:00–7:30am). Son grupos abiertos sin cuota formal, coordinados por WhatsApp. Para unirte, busca en grupos de Facebook de running Coyoacán o pregunta en los estudios del barrio.',
      },
      {
        q: '¿Los estudios de Del Carmen hacen eventos abiertos?',
        a: 'Sí. Los estudios de yoga y bienestar del barrio organizan workshops de método, retiros de un día y clases abiertas de presentación con regularidad. La inscripción va de $200 a $600 MXN según duración y perfil del instructor. Para instructores invitados de tradiciones específicas, el precio puede ser mayor. Los eventos se difunden por WhatsApp de socios e Instagram del estudio.',
      },
      {
        q: '¿Hay carreras organizadas en Coyoacán?',
        a: 'Sí. La Alcaldía Coyoacán organiza carreras de 5K y 10K con salida del Parque de los Viveros o el Parque Centenario en el primer semestre del año, con inscripción de $200–$400 MXN con playera y medalla. La Carrera Nocturna de Coyoacán es uno de los eventos más concurridos del circuito de CDMX. El entorno arbolado de Coyoacán hace de estas carreras una experiencia diferente al asfalto de otras zonas de la ciudad.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Running Viveros',     value: 'Diario, todos los niveles' },
      { label: 'Workshops boutique',  value: '$200–$600 MXN' },
      { label: 'Gratuito',            value: 'Yoga y tai chi Alcaldía Coyoacán' },
      { label: 'Carreras',            value: 'Viveros / Centenario – $200–$400 MXN' },
    ],
    barrios: [
      { name: 'Coyoacán Centro',  slug: 'coyoacan-centro',  district: 'coyoacan'    },
      { name: 'Churubusco',       slug: 'churubusco',       district: 'coyoacan'    },
      { name: 'Narvarte',         slug: 'narvarte',         district: 'benito-juarez'},
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
    h1: 'Bienestar y Salud en Del Carmen — Coyoacán 2026',
    metaDesc: 'Bienestar en Del Carmen Coyoacán CDMX. Yoga terapéutico, meditación, nutrición B–C. Metro Viveros. Guía 2026.',
    intro: `Del Carmen es el barrio de Coyoacán con mayor concentración de servicios de bienestar holístico auténtico: no el bienestar de marketing con branding de marca deportiva internacional, sino el de instructoras con 15 años de práctica y consultoras de salud que conocen a sus clientes desde hace una década. Los consultorios de nutrición tienen primera consulta de $450 a $900 MXN y seguimiento mensual de $350 a $700 MXN. La meditación guiada y los grupos de práctica van de $150 a $350 MXN por sesión.

La acupuntura, la osteopatía y las terapias de bienestar complementarias tienen practicantes con formación verificable en Del Carmen — no tantos como en Roma o Condesa, pero con tasas de retención de clientes que hablan de resultados. El precio por sesión va de $450 a $850 MXN según la disciplina y el practicante.

El Parque de los Viveros añade la dimensión de bienestar natural que pocos barrios urbanos de CDMX pueden ofrecer: 47 hectáreas de pinos y cipreses, silencio relativo, y una comunidad de practicantes al aire libre que va de los 6:00am hasta las 6:00pm todos los días del año. Para el residente de Del Carmen, la combinación de estudio de yoga más Viveros más nutriólogo de barrio es un ecosistema de bienestar completo sin necesidad de salir de la colonia.`,
    faq: [
      {
        q: '¿Cuánto cuesta la nutrición en Del Carmen?',
        a: 'En 2026 los consultorios de nutrición de Del Carmen y el corredor de Coyoacán tienen primera consulta de $450 a $900 MXN y seguimiento mensual de $350 a $700 MXN. El enfoque va desde pérdida de peso hasta nutrición deportiva y alimentación consciente con perspectiva integrativa — reflejo del perfil B–C académico del barrio. Para nutrición de alto rendimiento deportivo, el corredor de Insurgentes-Condesa tiene mayor especialización.',
      },
      {
        q: '¿Hay meditación y mindfulness en Del Carmen?',
        a: 'Sí. Del Carmen tiene una de las mejores ofertas de meditación de Coyoacán: grupos de meditación guiada en estudios del barrio a $150–$350 MXN por sesión, programas de MBSR (Mindfulness Based Stress Reduction) de 8 semanas, y retiros de un día en casas de la colonia. Es una comunidad de practicantes seria, sin los formatos de "meditación para corporativos" que abundan en Polanco.',
      },
      {
        q: '¿Hay terapias complementarias en Del Carmen?',
        a: 'Sí. Acupuntura, osteopatía y yoga terapéutico tienen practicantes establecidos en la colonia con precio de $450 a $850 MXN por sesión. El nivel de formación y la trayectoria de los practicantes del sector es comparable con los mejores de Roma o Condesa, con la diferencia de que llevan años en el barrio y conocen a sus clientes — una continuidad de tratamiento que los estudios de moda no siempre pueden ofrecer.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',  value: '$450–$900 MXN' },
      { label: 'Meditación guiada',   value: '$150–$350 MXN/sesión' },
      { label: 'Terapias complementarias', value: '$450–$850 MXN' },
      { label: 'Viveros',             value: '47ha arboladas – gratuito diario' },
    ],
    barrios: [
      { name: 'Coyoacán Centro',  slug: 'coyoacan-centro',  district: 'coyoacan'    },
      { name: 'Churubusco',       slug: 'churubusco',       district: 'coyoacan'    },
      { name: 'Narvarte',         slug: 'narvarte',         district: 'benito-juarez'},
    ],
    categoriaLinks: [
      { slug: 'gimnasios',    label: 'Gimnasios'    },
      { slug: 'estudios',     label: 'Estudios'     },
      { slug: 'entrenadores', label: 'Entrenadores' },
      { slug: 'eventos',      label: 'Eventos'      },
      { slug: 'bienestar',    label: 'Bienestar'    },
    ],
  },
};
