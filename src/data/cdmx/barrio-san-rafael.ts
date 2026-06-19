// src/data/cdmx/barrio-san-rafael.ts
// Draft – lastReviewed: 2026-06-28

export const barrioContent = {
  nombre: 'San Rafael',
  slug: 'san-rafael',
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

  sobreBarrio: `San Rafael es el barrio elegante que la Ciudad olvidó durante décadas y que ahorita está despertando, güey. Sobre Av. Ribera de San Cosme y Villalongín hay casona porfiriana con fachadas que aguantan comparación con cualquier colonia de la Roma Norte, y una escena de boutique fitness que apareció en los últimos tres años siguiendo a la ola de gentrificación tranquila que llegó sin prisa desde Santa María la Ribera. El NSE es C con aspiraciones reales: vecinos jóvenes que trabajan en Reforma y buscan gimnasio a pie de casa sin pagar precio de Polanco. El Metro San Cosme hace accesible la zona para quien viene de fuera, y las calles sobre Hidalgo tienen menos tráfico del que uno esperaría a las 7am. Es el tipo de barrio donde el gym de la esquina ya lleva dos años sin anunciarse en redes y sigue lleno porque los resultados hablan solos.

Para el vecino de San Rafael que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en San Rafael en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en San Rafael',
    metaDesc: 'Gimnasios en San Rafael, CDMX: ~8 opciones de $700 a $1,800 MXN/mes. Ribera de San Cosme, Villalongín. Barrio gentrifándose, precio aún accesible. Guía 2026.',
    intro: `San Rafael tiene alrededor de 8 gimnasios y espacios de entrenamiento, una cifra modesta que va creciendo al ritmo de la transformación del barrio. Sobre Av. Ribera de San Cosme encuentras los espacios de mayor infraestructura: salas de pesas con equipamiento funcional, areas cardiovasculares y clases de grupo incluidas en membresía. Sobre Villalongín y las calles perpendiculares hay estudios más pequeños de yoga y funcional que llegaron en los últimos dos años capitalizando las rentas todavía accesibles de la zona.

El rango de precios es $700–$1,800 MXN al mes, uno de los más bajos de la Cuauhtémoc para esta calidad de instalaciones. San Rafael está en el momento dulce de la gentrificación fitness: la calidad mejoró pero los precios aún no se actualizaron al alza. Quien se instale aquí ahorita va a pagar menos que lo que cobrará este mismo espacio en dos años.

El acceso es excelente por Metro San Cosme y Línea 2, lo que hace al barrio atractivo para quienes entrenan antes o después del trabajo con transporte público. Estacionamiento en calle funciona bien sobre Av. Hidalgo en horas tempranas. La infraestructura de los gimns más establecidos — pesas libres, plataformas, máquinas de cable — es sólida; lo que falta en algunos casos es el acabado estético del boutique de Roma o Condesa, pero el trabajo se hace igual.`,
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en San Rafael?',
        a: 'Una membresía mensual en San Rafael va de $700 a $1,800 MXN, con la mayoría de los gimnasios completos en el rango de $900–$1,400 MXN. Los estudios boutique de funcional y yoga sobre Villalongín cobran $1,400–$1,800 MXN para planes ilimitados de clases. La inscripción inicial generalmente va de $300 a $600 MXN. Es uno de los precios más bajos de la alcaldía Cuauhtémoc para esta densidad de instalaciones, y la previsión es que suban conforme avance la transformación del barrio en los próximos dos años.',
      },
      {
        q: '¿Los gimnasios de San Rafael tienen buena infraestructura?',
        a: '¡Ahorita sí, güey! Los gymnasios establecidos sobre Ribera de San Cosme tienen salas de pesas con equipamiento completo — mancuernas hasta 50kg, barras olímpicas, plataformas de levantamiento, máquinas de cable y poleas. El mantenimiento es bueno porque la comunidad es pequeña y los socios son regulares. Lo que puede faltar en algunos espacios es el acabado estético — no vas a encontrar paredes de ladrillo expuesto ni iluminación de diseño — pero el equipamiento para entrenar en serio está completo.',
      },
      {
        q: '¿Cómo llego a los gimnasios de San Rafael en transporte público?',
        a: 'La forma más directa es Metro Línea 2, estación San Cosme, que queda sobre Av. Hidalgo a cuatro cuadras de los principales gimnasios de la zona. También puedes tomar Metrobús Línea 1 sobre Av. Insurgentes y bajarte en paradas cercanas a San Rafael. El barrio es caminable desde la estación: 5-10 minutos a pie llegan a cualquier punto de Ribera de San Cosme o Villalongín. Para quienes van en bici, las calles secundarias del barrio tienen muy poco tráfico en horarios de entrenamiento temprano.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de San Rafael tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de San Rafael suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~8' },
      { label: 'Membresía mensual', value: '$700–$1,800 MXN' },
      { label: 'Referente',         value: 'Ribera de San Cosme / Villalongín' },
      { label: 'Tendencia',         value: 'Gentrificación activa 2024-2026' },
    ],
    barrios: [
      { name: 'Santa María la Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
      { name: 'Tabacalera',            slug: 'tabacalera',            district: 'cuauhtemoc' },
      { name: 'Guerrero',              slug: 'guerrero',              district: 'cuauhtemoc' },
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
    h1: 'Estudios en San Rafael — boutique fitness en barrio porfiriano 2026',
    metaDesc: 'Estudios boutique en San Rafael, CDMX: yoga, funcional y pilates de $130 a $280 MXN/clase. Villalongín y Hidalgo. En expansión real. Guía 2026.',
    intro: `Los estudios boutique de San Rafael son el indicador más claro de la transformación del barrio. Hace tres años no había ninguno; ahorita hay cuatro o cinco espacios sobre Villalongín, Hidalgo y las calles entre Ribera de San Cosme y Av. México que ofrecen yoga, pilates mat y funcional en grupos de 8-14 personas. Llegaron siguiendo a los vecinos nuevos que no querían cruzar a Condesa o Roma para tomar clase.

El perfil de instructor en San Rafael es el mismo que en zonas más establecidas: certificados con 3-6 años de experiencia, que eligieron este barrio por rentas más accesibles y por comunidades que están construyendo desde cero, lo que les da más autonomía en la programación. Una clase suelta va de $130 a $280 MXN según modalidad — el rango más bajo de la Cuauhtémoc para estudios boutique reales.

Lo interesante de los estudios de San Rafael es que están en el momento de mayor apertura: comunidades de menos de 50 alumnos donde el instructor te conoce por nombre desde la primera clase, donde la programación se adapta al nivel real del grupo, y donde el precio todavía no refleja el valor de lo que se está construyendo. Para quien busca estudio boutique sin la saturación de Condesa ni los precios de Polanco, ahorita San Rafael es la mejor entrada.`,
    faq: [
      {
        q: '¿Qué modalidades de clase hay en los estudios de San Rafael?',
        a: 'Los estudios sobre Villalongín e Hidalgo ofrecen principalmente yoga (Hatha, Vinyasa básico y Yin), pilates mat en grupos de 8-12 personas, y clases de funcional y movilidad. Pilates con máquinas Reformer aún no está establecido en San Rafael — para eso tienes que ir a Roma Norte o Santa María la Ribera. El funcional en San Rafael tiene un perfil más de acondicionamiento general que de CrossFit competitivo, lo que lo hace accesible para todos los niveles. Ahorita están llegando también clases de danza fitness y barre que siguen el mismo patrón de studios de menor renta.',
      },
      {
        q: '¿Cuánto cuesta un plan mensual en un estudio de San Rafael?',
        a: 'Los planes mensuales en estudios boutique de San Rafael van de $1,200 a $1,800 MXN para clases ilimitadas de una modalidad, y de $1,500 a $2,200 MXN para pases multidisciplinarios. Las clases sueltas van de $130 a $280 MXN. Los paquetes de 8-10 clases son la opción más popular y van de $900 a $1,800 MXN según estudio. El precio es notablemente más bajo que el promedio de Roma Norte o Condesa para el mismo formato de clase, y la calidad de instrucción es comparable porque los instructores vienen de los mismos programas de certificación.',
      },
      {
        q: '¿Vale la pena tomar clases en estudios nuevos de San Rafael?',
        a: '¡Claro, güey! Los estudios en fase de construcción de comunidad tienen ventajas reales: precios inaugurales que no han subido, instructores con tiempo y atención para alumnos individuales, y programación que se adapta al nivel del grupo porque el instructor puede conocerte. El riesgo es que algunos estudios muy nuevos no tienen todavía la estabilidad operativa de los que llevan más tiempo — verificá que tengan horarios fijos publicados y al menos 3 meses de operación antes de comprar paquete mensual.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~5' },
      { label: 'Clase suelta',      value: '$130–$280 MXN' },
      { label: 'Mensual ilimitado', value: '$1,200–$2,200 MXN' },
      { label: 'Especialidad',      value: 'Yoga / Funcional / Pilates mat' },
    ],
    barrios: [
      { name: 'Santa María la Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
      { name: 'Tabacalera',            slug: 'tabacalera',            district: 'cuauhtemoc' },
      { name: 'Guerrero',              slug: 'guerrero',              district: 'cuauhtemoc' },
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
    h1: 'Entrenadores personales en San Rafael',
    metaDesc: 'Entrenadores personales en San Rafael, CDMX: PT de $400 a $800 MXN/sesión. Ribera de San Cosme. Acceso directo, precios pre-gentrificación. Guía 2026.',
    intro: `El personal training en San Rafael tiene el perfil de un barrio en transición: entrenadores certificados que eligieron la zona por rentas de espacio más bajas y por la oportunidad de construir cartera de clientes en una comunidad nueva, cobrando precios que todavía no llegaron al nivel de Roma o Condesa. Una sesión individual va de $400 a $800 MXN — 20-30% por debajo del promedio de la Cuauhtémoc en zonas más establecidas.

Los entrenadores que trabajan en San Rafael ahorita vienen de dos perfiles distintos: los que llevan 5+ años en el barrio y construyeron su base antes de la ola de nuevos vecinos, y los que llegaron en los últimos dos años siguiendo la demanda que generó el cambio demográfico. Ambos perfiles tienen certificaciones NSCA, NASM o equivalentes — el filtro de acceso al mercado serio de entrenamiento personal es el mismo en cualquier barrio.

Lo que diferencia a los entrenadores de San Rafael es el acceso: la agenda se maneja por WhatsApp, la primera evaluación de movimiento es parte de la primera sesión sin cargo extra, y la fidelización va por resultados reales más que por marketing en redes. Para quien trabaja sobre Reforma o en la zona norte de la Cuauhtémoc y busca PT sin desviarse, San Rafael tiene opciones chidas que merecen revisarse antes de que el barrio suba más.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en San Rafael?',
        a: 'Una sesión individual con entrenador certificado en San Rafael va de $400 a $800 MXN. Los paquetes de 10 sesiones van de $3,200 a $6,500 MXN con descuento de 15-20% sobre el precio de sesión suelta. El entrenamiento a domicilio o en parque tiene un cargo adicional de $80-$120 MXN por sesión según la distancia. Frente a los $600-$1,100 MXN que cobra el equivalente certificado en Condesa o Roma Norte, el ahorro es consistente y se acumula rápido en paquetes mensuales.',
      },
      {
        q: '¿Hay entrenadores especializados en fuerza o powerlifting en San Rafael?',
        a: 'Hay uno o dos entrenadores en la zona con especialización en fuerza: periodización lineal, técnica de sentadilla, press y peso muerto, y programación para ganancia de masa muscular real. No son muchos, pero los que están trabajan con metodología seria — no rutinas genéricas de 3x10. Para quien busca progresión de fuerza medida semana a semana con registro de cargas, San Rafael tiene opciones chidas sobre Ribera de San Cosme. Ahorita la mejor forma de encontrarlos es preguntar directamente en los gymns de funcional de la zona.',
      },
      {
        q: '¿Es confiable contratar PT en un barrio en transformación como San Rafael?',
        a: 'La confiabilidad del entrenador no depende del barrio sino de su certificación, experiencia documentada y referencias de clientes anteriores. En San Rafael encuentras entrenadores con 3-8 años de práctica que trabajaron en zonas más visibles antes de establecerse aquí. El protocolo de validación es el mismo que en cualquier zona: verificá certificación, pedí una sesión de evaluación antes de comprar paquete, y chequeá que haga diagnóstico de movimiento en la primera sesión. Si salta directo a la rutina sin evaluarte, eso es señal de alerta en cualquier barrio.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$400–$800 MXN' },
      { label: 'Paquete 10 sesiones', value: '$3,200–$6,500 MXN' },
      { label: 'Vs. Roma Norte',      value: '20-30% más accesible' },
      { label: 'Perfil',              value: 'Fuerza / Funcional / General' },
    ],
    barrios: [
      { name: 'Santa María la Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
      { name: 'Tabacalera',            slug: 'tabacalera',            district: 'cuauhtemoc' },
      { name: 'Guerrero',              slug: 'guerrero',              district: 'cuauhtemoc' },
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
    h1: 'Eventos fitness en San Rafael — comunidad en construcción 2026',
    metaDesc: 'Eventos fitness en San Rafael, CDMX: talleres de yoga, retos de funcional y clases abiertas de $0 a $400 MXN. Villalongín. Guía 2026.',
    intro: `Los eventos fitness en San Rafael tienen el sabor de una comunidad que se está formando: talleres de técnica en estudios de yoga recién abiertos, clases abiertas gratuitas de presentación en los nuevos espacios de funcional, y retos informales entre socios de los gymns más establecidos de Ribera de San Cosme. No hay calendar de eventos corporativos ni patrocinadores de suplementos — hay vecinos que entrenan juntos y organizan cosas para seguir haciéndolo.

Los estudios sobre Villalongín usan los talleres como herramienta de comunidad más que como fuente de ingreso: un sábado de pilates de respiración, un taller de meditación con instructora certificada, una sesión de yoga restaurativo con temas de ciclos de sueño. El precio va de $150 a $400 MXN, con frecuencia mensual o bimestral. Para socios del estudio, muchos de estos talleres son gratuitos o tienen 50% de descuento.

Los gymns de funcional de la zona organizan retos trimestrales sin premiación externa — medición de fuerza máxima, benchmark WOD, prueba de resistencia — con el objetivo de que los socios tengan un punto de referencia concreto. Sin transmisión en vivo ni pompa: número registrado, semanas de entrenamiento, número final. Para quien busca evento fitness sin posturing, San Rafael ahorita tiene la escena más honesta de la Cuauhtémoc.`,
    faq: [
      {
        q: '¿Hay clases abiertas gratuitas en San Rafael?',
        a: 'Sí, los estudios nuevos de San Rafael suelen hacer clases abiertas de presentación cuando llevan menos de seis meses operando: una clase sin costo para que la gente del barrio conozca el espacio, el instructor y el formato. También hay eventos de primer clase gratis en algunos gymns cuando lanzan nueva modalidad. La forma más segura de enterarse es seguir las cuentas de Instagram de los espacios que te interesan sobre Villalongín y Ribera de San Cosme, y activar notificaciones. Muchos anuncios de última hora van a WhatsApp de la comunidad.',
      },
      {
        q: '¿Hay grupos de running o actividad outdoor en San Rafael?',
        a: 'San Rafael no tiene parque propio de gran escala, pero está a 15-20 minutos caminando o en bici de la Alameda Central, que tiene zonas verdes amplias y grupos de caminata matutina organizados. Algunos instructores de los estudios de yoga del barrio organizan caminatas de bienestar los domingos temprano hacia la Alameda o al Parque Sullivan, que queda a pocas cuadras. Son formatos informales que se anuncian por WhatsApp de la comunidad del estudio. Para running con grupo organizado, la opción más cercana es el Bosque de Chapultepec.',
      },
      {
        q: '¿Cómo me entero de eventos fitness en San Rafael?',
        a: 'El circuito de comunicación de los eventos en San Rafael es principalmente Instagram y WhatsApp — los sitios web de muchos estudios nuevos no están actualizados. Seguí los perfiles de los espacios sobre Villalongín e Hidalgo y pedí que te agreguen al grupo de WhatsApp de socios si ya tomaste clase en alguno. Los talleres de San Rafael se llenan rápido porque los espacios son pequeños — 15-20 personas máximo — así que el aviso temprano por comunidad de WhatsApp es la forma de agarrar lugar antes de que se anuncie en redes.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Talleres',         value: 'Mensuales/Bimestrales' },
      { label: 'Precio taller',    value: '$150–$400 MXN' },
      { label: 'Formato habitual', value: 'Comunidad local pequeña' },
      { label: 'Outdoor cercano',  value: 'Alameda Central / Parque Sullivan' },
    ],
    barrios: [
      { name: 'Santa María la Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
      { name: 'Tabacalera',            slug: 'tabacalera',            district: 'cuauhtemoc' },
      { name: 'Guerrero',              slug: 'guerrero',              district: 'cuauhtemoc' },
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
    h1: 'Bienestar en San Rafael',
    metaDesc: 'Bienestar en San Rafael, CDMX: nutriólogos y masaje deportivo de $300 a $800 MXN. Ribera de San Cosme. Accesible y en crecimiento. Guía 2026.',
    intro: `El ecosistema de bienestar en San Rafael es incipiente pero real: hay consultorios de nutrición sobre Ribera de San Cosme con enfoque en rendimiento deportivo, centros de masaje recuperativo que llegaron siguiendo a los nuevos estudios de funcional, y algunos espacios que combinan yoga terapéutico con prácticas de bienestar más amplias. El perfil es NSE C con demanda real de servicios de apoyo al entrenamiento, no lujo spa.

Los nutriólogos de la zona trabajan principalmente con clientes que entrenan 3-5 días a la semana y buscan un plan práctico que funcione con la realidad de su presupuesto y horario. La consulta inicial va de $500 a $900 MXN y el seguimiento mensual de $300 a $500 MXN — el rango más accesible de la Cuauhtémoc para profesionales con credenciales reales. Algunos tienen acuerdos informales con los gyms del barrio para derivar clientes y coordinar el trabajo.

El masaje deportivo en San Rafael está en $350–$700 MXN por sesión de 60 minutos — accesible para quien lo incorpora como parte de la rutina semanal y no como lujo ocasional. Ahorita la oferta de recuperación activa no llega a crioterapia o compresión neumática — para eso hay que ir a Roma o Condesa — pero lo básico de masaje profundo y liberación miofascial está cubierto. Para quien vive en San Rafael y entrena 4 veces por semana, el ecosistema de bienestar del barrio es suficiente para una rutina completa.`,
    faq: [
      {
        q: '¿Hay nutriólogos deportivos en San Rafael?',
        a: 'Hay dos o tres consultorios de nutrición sobre Ribera de San Cosme y calles adyacentes con enfoque en rendimiento deportivo y composición corporal. Trabajan con metodología de seguimiento mensual: medición de bioimpedancia o pliegues, ajuste de macros según objetivo y fase de entrenamiento, y comunicación por WhatsApp entre consultas. La primera consulta va de $500 a $900 MXN e incluye evaluación de hábitos, historial de entrenamiento y objetivos concretos. El seguimiento mensual va de $300 a $500 MXN. Para quien busca nutrición seria sin pagar precio de Polanco, San Rafael tiene opciones chidas.',
      },
      {
        q: '¿Qué servicios de masaje o recuperación hay en San Rafael?',
        a: 'Los servicios más accesibles son masaje deportivo de tejido profundo y liberación miofascial, con precios de $350 a $700 MXN por sesión de 60 minutos. encuentras estos servicios en centros de masaje sobre Hidalgo y Villalongín, y en algunos estudios de yoga que integran trabajo corporal como complemento a las clases. Para crioterapia, baño de contraste o compresión neumática tienes que ir a Roma Norte o Condesa — San Rafael aún no tiene esas instalaciones. Para recuperación muscular de semana a semana, el masaje deportivo de la zona es suficiente y más accesible que en zonas vecinas.',
      },
      {
        q: '¿Hay spas o centros de bienestar integral en San Rafael?',
        a: 'Ahorita no hay spas con alberca, sauna o vapor propio en San Rafael. Lo que hay son espacios especializados: masaje deportivo en un lugar, consulta de nutrición en otro, yoga terapéutico en otro. puedes armar tu propio protocolo de bienestar combinando estos servicios, que juntos cubren las necesidades de recuperación y nutrición de alguien que entrena regularmente. El costo combinado en San Rafael es 20-30% menor que el equivalente en estudios integrados de Condesa o Polanco. Para lujo spa con todas las instalaciones en un lugar, el barrio todavía no llega a eso.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$500–$900 MXN' },
      { label: 'Masaje deportivo 60m', value: '$350–$700 MXN' },
      { label: 'Seguimiento mensual',  value: '$300–$500 MXN' },
      { label: 'Vs. Condesa',          value: '20-30% más accesible' },
    ],
    barrios: [
      { name: 'Santa María la Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
      { name: 'Tabacalera',            slug: 'tabacalera',            district: 'cuauhtemoc' },
      { name: 'Guerrero',              slug: 'guerrero',              district: 'cuauhtemoc' },
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
