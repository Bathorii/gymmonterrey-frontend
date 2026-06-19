// src/data/cdmx/barrio-santa-maria-la-ribera.ts
// Draft – lastReviewed: 2026-06-27

export const barrioContent = {
  nombre: 'Santa María La Ribera',
  slug: 'santa-maria-la-ribera',
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

  sobreBarrio: `Santa María La Ribera es una de las colonias más antiguas y mejor preservadas del patrimonio histórico de CDMX — el Kiosco Morisco en la Alameda de Santa María es el emblema de una colonia que sobrevivió el siglo XX con su carácter intacto. NSE C/C+, en proceso de gentrifacación gradual, con una demografía mixta de familias de toda la vida y nuevos residentes que llegaron buscando la autenticidad que Roma Norte ya perdió. El Metro Buenavista en la Línea B conecta la colonia con Tepito y el norte, mientras que a pie se accede fácil al Centro Histórico. La escena fitness de Santa María La Ribera refleja su momento: gyms de barrio con décadas de historia conviviendo con estudios de yoga que abrieron en los últimos 3 años. No es Polanco ni Roma Norte — y esa tensión entre tradición y gentrificación produce exactamente el tipo de

Para el vecino de Santa María La Ribera que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Santa María La Ribera en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Santa María La Ribera',
    metaDesc: 'Gimnasios en Santa María La Ribera, CDMX: $700–$1,800 MXN/mes. Budget-mid fitness junto al Kiosco Morisco. Metro Buenavista. Guía de Rodrigo 2026.',
    intro: `Santa María La Ribera tiene entre 12 y 18 gimnasios activos en una colonia que todavía tiene precios de barrio real: el rango va de $700 a $1,800 MXN al mes, con concentración en el rango $900–$1,400 MXN que responde al perfil NSE C/C+ de la colonia. Son gymns que llevan años en el barrio, con equipamiento funcional que no tiene que pedir disculpas y con dueños que conocen a sus clientes desde antes de que "fitness boutique" fuera una expresión en México.

Los establecimientos se distribuyen principalmente sobre Av. Salvador Díaz Mirón, Calle Manuel Carpio y las calles que rodean la Alameda de Santa María. El Kiosco Morisco y el parque que lo rodea son el espacio outdoor más usado del barrio — calistenia, carreras informales y grupos de ejercicio matutino que llevan operando más años que cualquier gym de moda de la ciudad. Metro Buenavista es el ancla de transporte: desde ahí se caminan 8–10 minutos hacia el corazón de la colonia.

En 2026, el proceso de gentrificación está trayendo algunos estudios boutique nuevos — yoga, pilates mat, funcional — que conviven con los gymns tradicionales sin todavía desplazarlos. Para el deportista que busca precio justo, instalaciones competentes y una comunidad de entrenamiento sin pretensión, Santa María La Ribera está en su momento más interesante: suficiente oferta nueva como para tener opciones, todavía suficiente barrio real como para que los precios no se hayan disparado.`,
    faq: [
      {
        q: '¿Cuánto cuesta el gimnasio en Santa María La Ribera?',
        a: 'El rango va de $700 a $1,800 MXN al mes. Los gymns de barrio tradicionales están en $700–$1,000 MXN con acceso completo. Los establecimientos más nuevos con clases incluidas están en $1,200–$1,800 MXN. Es uno de los rangos de precio más accesibles de la Cuauhtémoc — aproximadamente un 30–40% más económico que Roma Norte para equipamiento comparable.',
      },
      {
        q: '¿Cómo llego a los gimnasios de Santa María La Ribera en metro?',
        a: 'Metro Buenavista en Línea B es la opción más directa — desde ahí se caminan 8–10 minutos hacia Salvador Díaz Mirón y Manuel Carpio. También puedes llegar por Metro Guerrero en Línea B que queda en el borde sur de la colonia. Para quien llega de Polanco o Lomas, Metro Buenavista conecta sin necesidad de trasbordo desde Línea 7.',
      },
      {
        q: '¿Hay cadenas grandes de gym en Santa María La Ribera?',
        a: 'La presencia de cadenas masivas como Smart Fit es limitada en el corazón de la colonia. El barrio es territorio de gymns independientes con historia. Si buscas acceso multisede o app de cadena, las opciones más cercanas están sobre Insurgentes o en las colonias adyacentes de Tlatelolco o Guerrero. Para gym de barrio con carácter real, Santa María La Ribera es la opción.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Santa María La Ribera tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Santa María La Ribera suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~12–18' },
      { label: 'Membresía mensual', value: '$700–$1,800 MXN' },
      { label: 'vs. Roma Norte',    value: '30–40% más económico' },
      { label: 'Metro',             value: 'Buenavista · Línea B' },
    ],
    barrios: [
      { name: 'Guerrero',    slug: 'guerrero',    district: 'cuauhtemoc' },
      { name: 'Tlatelolco',  slug: 'tlatelolco',  district: 'cuauhtemoc' },
      { name: 'Doctores',    slug: 'doctores',    district: 'cuauhtemoc' },
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
    h1: 'Estudios en Santa María La Ribera',
    metaDesc: 'Estudios de fitness en Santa María La Ribera, CDMX: yoga, pilates y funcional desde $100 MXN/clase. Kiosco Morisco y alrededores. Guía 2026.',
    intro: `Los estudios boutique en Santa María La Ribera son recientes pero crecientes. El proceso de gentrificación de la colonia trajo en los últimos 3 años una ola de estudios de yoga y pilates mat que se instalaron sobre Manuel Carpio y Salvador Díaz Mirón aprovechando rentas todavía accesibles y una demografía nueva con disposición de gasto. Los precios reflejan ese momento de transición: clases de yoga entre $100 y $200 MXN, paquetes mensuales ilimitados de $800 a $1,400 MXN — más económico que Condesa o Roma Norte para formatos comparables. El yoga es el formato con más tracción nueva en la colonia: hay estudios con instructores jóvenes formados en escuelas de la ciudad que ofrecen Hatha y Vinyasa básico en grupos de 8 a 15 personas. El pilates es más limitado — principalmente mat, sin Reformer todavía en la mayoría de los espacios — pero hay un par de estudios que están invirtiendo en equipamiento. Para funcional y HIIT, algunos gymns tradicionales de la colonia adaptaron sus salones para clases grupales a precios que no superan $120 MXN por sesión. La Alameda de Santa María con el Kiosco Morisco es el espacio outdoor más auténtico de cualquier colonia de la Cuauhtémoc: un parque histórico donde la práctica de yoga al aire libre, la calistenia informal y los grupos de ejercicio matutino coexisten con la vida de barrio de siempre. Es el tipo de espacio que en Roma Norte`,
    faq: [
      {
        q: '¿Cuánto cuesta una clase de yoga en Santa María La Ribera?',
        a: 'Entre $100 y $200 MXN la clase suelta en los estudios independientes de la colonia. Los paquetes mensuales ilimitados van de $800 a $1,400 MXN. Es aproximadamente un 25–35% más económico que Roma Norte o Condesa para formatos equivalentes. La calidad varía — los estudios con instructores certificados 200 horas o más son los que mejor relación precio-instrucción ofrecen.',
      },
      {
        q: '¿Hay pilates Reformer en Santa María La Ribera?',
        a: 'Todavía es limitado en la colonia — la mayoría de los estudios trabajan con pilates mat. Hay uno o dos espacios que tienen alguna máquina reformer, pero la oferta no es comparable a la de Condesa o Hipódromo Condesa. Para Reformer con instructora certificada y equipamiento completo, vale la pena considerar las colonias vecinas. El mat pilates de la zona sí tiene buena oferta a precio muy accesible.',
      },
      {
        q: '¿La Alameda de Santa María se puede usar para entrenar?',
        a: 'Sí, y es uno de los mejores espacios públicos de la Cuauhtémoc para hacerlo. El parque tiene espacio abierto para funcional, bancas y áreas de pasto para yoga o estiramientos, y un perímetro caminable alrededor del Kiosco Morisco. Los domingos de mañana hay grupos de ejercicio informal que llevan años usando el parque como gym gratuito.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios activos',   value: '~8–12' },
      { label: 'Clase suelta yoga',  value: '$100–$200 MXN' },
      { label: 'Mensual ilimitado',  value: '$800–$1,400 MXN' },
      { label: 'Outdoor',            value: 'Alameda de Santa María · Kiosco Morisco' },
    ],
    barrios: [
      { name: 'Guerrero',    slug: 'guerrero',    district: 'cuauhtemoc' },
      { name: 'Tlatelolco',  slug: 'tlatelolco',  district: 'cuauhtemoc' },
      { name: 'Doctores',    slug: 'doctores',    district: 'cuauhtemoc' },
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
    h1: 'Entrenadores personales en Santa María La Ribera — Coaches 2026',
    metaDesc: 'Entrenadores personales en Santa María La Ribera, CDMX: sesiones $200–$450 MXN. Alameda de Santa María, gimnasios de Santa María La Ribera. Guía 2026.',
    intro: `Los entrenadores personales de Santa María La Ribera trabajan principalmente en dos registros: coaches de gym de barrio con años de trayectoria y clientela fija que atienden dentro de los establecimientos tradicionales de la colonia, y coaches freelance más jóvenes que llegaron con el proceso de gentrificación y trabajan en la Alameda de Santa María o a domicilio. Las sesiones individuales van de $200 a $450 MXN — entre los rangos más accesibles de toda la Cuauhtémoc para coaching real.

La Alameda de Santa María con el Kiosco Morisco es el espacio outdoor favorito: el parque tiene dimensiones suficientes para entrenamiento funcional con equipamiento portátil, un perímetro caminable para intervalos de running y acceso abierto todos los días desde temprano. Los fines de semana de mañana hay coaches trabajando con grupos pequeños en el parque — una forma económica de tener estructura de entrenamiento sin pagar membresía de gym.

Para encontrar un buen entrenador en Santa María La Ribera, las recomendaciones de los propios gymns de barrio son el punto de partida más confiable. Los dueños de estos establecimientos llevan años en la colonia y saben quién trabaja bien. Para coaching especializado en fuerza o periodización de rendimiento, vale la pena preguntar en los estudios de funcional que abrieron recientemente sobre Manuel Carpio.`,
    faq: [
      {
        q: '¿Cuánto cuesta un entrenador personal en Santa María La Ribera?',
        a: 'Las sesiones individuales van de $200 a $450 MXN dependiendo de experiencia y formato. Coaches dentro de gymns tradicionales del barrio están en $200–$300 MXN. Coaches freelance con mayor formación y metodología estructurada están en $300–$450 MXN. En dupla o trío el costo baja $60–$100 MXN por persona.',
      },
      {
        q: '¿Los coaches de Santa María La Ribera trabajan en la Alameda?',
        a: 'Sí, la Alameda de Santa María es el spot outdoor más usado. Los coaches freelance atienden principalmente los sábados y domingos de mañana, y algunos tienen sesiones entre semana a las 7–8am. Es el formato más accesible de la colonia: sin membresía de gym, sin costo de espacio, con estructura de entrenamiento real al precio más bajo del mercado.',
      },
      {
        q: '¿Hay coaches especializados en adultos mayores en Santa María La Ribera?',
        a: 'La demografía de la colonia genera demanda específica para ese perfil — hay entrenadores en los gymns tradicionales del barrio con experiencia en trabajo con adultos mayores, desde movilidad y funcional básico hasta rehabilitación post-lesión. Es un nicho que los gymns de barrio atienden mejor que los estudios boutique nuevos, que se orientan más a personas de 25 a 40 años.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual', value: '$200–$450 MXN' },
      { label: 'Outdoor',           value: 'Alameda de Santa María' },
      { label: 'vs. Roma Norte',    value: '35–50% más económico' },
      { label: 'Sesión en dupla',   value: '-$60–$100 MXN/persona' },
    ],
    barrios: [
      { name: 'Guerrero',    slug: 'guerrero',    district: 'cuauhtemoc' },
      { name: 'Tlatelolco',  slug: 'tlatelolco',  district: 'cuauhtemoc' },
      { name: 'Doctores',    slug: 'doctores',    district: 'cuauhtemoc' },
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
    h1: 'Eventos fitness en Santa María La Ribera',
    metaDesc: 'Eventos fitness en Santa María La Ribera, CDMX 2026: jornadas en la Alameda, open days yoga, grupos de running alrededor del Kiosco Morisco.',
    intro: `Los eventos fitness en Santa María La Ribera tienen el carácter del barrio: comunitarios, históricos y sin pretensión. La Alameda de Santa María con el Kiosco Morisco es el escenario de jornadas deportivas barriales que llevan décadas operando — grupos de ejercicio matutino, clases de aeróbicos al aire libre y ocasionalmente eventos organizados por la alcaldía de Cuauhtémoc con instructores comunitarios. Son los eventos con más raigambre de cualquier colonia de la zona y los que mejor reflejan la cultura del barrio.

Los estudios de yoga y funcional que llegaron en los últimos años empezaron a organizar open days y masterclasses: clases de prueba gratuitas o a precio simbólico los sábados de mañana en la Alameda o en sus propios locales. Es el momento de encuentro entre la tradición de barrio y la nueva ola de fitness más estructurado. El resultado son eventos accesibles que convocan tanto a residentes de toda la vida como a los recién llegados.

El proceso de gentrificación está trayendo también eventos de mayor escala: pop-ups de marcas de ropa deportiva, carreras barriales con inscripción simbólica y masterclasses de instructores invitados de Roma Norte o Condesa que usan Santa María La Ribera como escenario alternativo. La temporada de octubre a noviembre concentra la mayor actividad, cuando el clima de CDMX invita al outdoor y los estudios recuperan el ritmo después del verano.`,
    faq: [
      {
        q: '¿Hay clases de ejercicio gratuitas en la Alameda de Santa María?',
        a: 'Sí, los grupos de ejercicio comunitario en la Alameda llevan años operando — aeróbicos y funcional matutino principalmente los domingos. Ocasionalmente la alcaldía organiza jornadas con instructores comunitarios de acceso libre. Los estudios de yoga del barrio también hacen clases al aire libre periódicas en el parque, a $0 o precio simbólico.',
      },
      {
        q: '¿Hay eventos de running que pasen por Santa María La Ribera?',
        a: 'La colonia no tiene un circuito de running tan definido como la Av. Ámsterdam del Hipódromo, pero la Alameda y Salvador Díaz Mirón son usados por grupos de corredores informales. Para carreras con chip y clasificación, las del Parque Bicentenario o las del Centro Histórico son las más cercanas y accesibles desde Metro Buenavista.',
      },
      {
        q: '¿Los estudios nuevos de yoga de Santa María La Ribera hacen open days?',
        a: 'Sí, periódicamente los estudios de Calle Manuel Carpio y Salvador Díaz Mirón organizan clases de prueba gratuitas o a $80–$100 MXN. Los anuncian en Instagram con una semana de anticipación. Es la mejor forma de evaluar instructor y ambiente antes de comprometerse con una membresía — en una colonia con oferta variada, hacer el recorrido de open days tiene sentido.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Ejercicio comunitario', value: 'Alameda de Santa María · dom' },
      { label: 'Open days estudios',    value: 'Periódicos · $0–$100 MXN' },
      { label: 'Temporada alta',        value: 'Oct–Nov / Mar–Abr' },
      { label: 'Metro acceso',          value: 'Buenavista · Línea B' },
    ],
    barrios: [
      { name: 'Guerrero',    slug: 'guerrero',    district: 'cuauhtemoc' },
      { name: 'Tlatelolco',  slug: 'tlatelolco',  district: 'cuauhtemoc' },
      { name: 'Doctores',    slug: 'doctores',    district: 'cuauhtemoc' },
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
    h1: 'Bienestar en Santa María La Ribera — Masajes y wellness accesible 2026',
    metaDesc: 'Bienestar en Santa María La Ribera, CDMX: masajes, terapias y nutrición desde $150 MXN. Colonia patrimonio Cuauhtémoc. Guía 2026.',
    intro: `El bienestar en Santa María La Ribera es genuinamente accesible — no hay el markup de colonia de moda que presiona los precios en Roma Norte o Condesa. Los centros de masaje terapéutico del barrio cobran entre $150 y $350 MXN por 60 minutos, con terapeutas que llevan años atendiendo a la misma clientela de barrio. No es el spa de diseño de Polanco — es el masajista que conoce tu espalda desde hace dos años y que te atiende sin turno de dos semanas. La colonia tiene una tradición de medicina alternativa y terapias holísticas que antecede al boom del wellness urbano: hay consultorios de acupuntura, herbolaria y terapia neural sobre Manuel Carpio y las calles adyacentes que llevan operando desde antes de que "bienestar" fuera un segmento de mercado. Para quien busca ese tipo de cuidado integrado a precio de barrio real, Santa María La Ribera es una de las pocas colonias de la Cuauhtémoc donde todavía existe. La nutrición deportiva está creciendo con la llegada de estudios de yoga y fitness más estructurado: hay nutricionistas jóvenes que abrieron consultorios sobre Salvador Díaz Mirón orientados específicamente a practicantes de gym y yoga, con consultas entre $300 y $500 MXN. Para crioterapia o compresión neumática, la oferta en la colonia es prácticamente nula — para esos servicios hay que ir a Roma Norte o Condesa. Pero para masaje real, nutrición básica y terapia holística accesible, el barrio`,
    faq: [
      {
        q: '¿Cuánto cuesta un masaje en Santa María La Ribera?',
        a: 'Los masajes terapéuticos en la colonia van de $150 a $350 MXN por 60 minutos. Los centros más establecidos sobre Manuel Carpio y Salvador Díaz Mirón están en el rango $200–$300 MXN. Para masaje deportivo especializado o de tejido profundo, el rango sube a $280–$400 MXN. Son de los precios más accesibles de toda la Cuauhtémoc para el mismo tipo de servicio.',
      },
      {
        q: '¿Hay acupuntura y terapias alternativas en Santa María La Ribera?',
        a: 'Sí, la colonia tiene una tradición larga de medicina alternativa. Hay consultorios de acupuntura, herbolaria, homeopatía y terapia neural sobre Manuel Carpio y las calles adyacentes. Son establecimientos con años de trayectoria, no negocios nuevos de tendencia. Las consultas son accesibles — en el rango $200–$400 MXN dependiendo del tipo de terapia.',
      },
      {
        q: '¿Hay nutricionistas especializados en deportistas en Santa María La Ribera?',
        a: 'Hay algunas opciones nuevas que llegaron con los estudios de yoga y fitness de los últimos años — nutricionistas jóvenes con orientación deportiva sobre Salvador Díaz Mirón. Las consultas van de $300 a $500 MXN. Para seguimiento nutricional mensual integrado con tu rutina de gym, es el formato más práctico si entrenas en la colonia y no quieres cruzar la ciudad para ver a un especialista.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Masaje terapéutico 60min', value: '$150–$350 MXN' },
      { label: 'Consulta nutrición',        value: '$300–$500 MXN' },
      { label: 'Terapias alternativas',     value: 'Acupuntura · herbolaria disponibles' },
      { label: 'vs. Roma Norte',            value: '40–50% más económico' },
    ],
    barrios: [
      { name: 'Guerrero',    slug: 'guerrero',    district: 'cuauhtemoc' },
      { name: 'Tlatelolco',  slug: 'tlatelolco',  district: 'cuauhtemoc' },
      { name: 'Doctores',    slug: 'doctores',    district: 'cuauhtemoc' },
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
