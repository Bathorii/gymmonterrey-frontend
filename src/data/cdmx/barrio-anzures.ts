// src/data/cdmx/barrio-anzures.ts
// Draft – lastReviewed: 2026-06-21

export const barrioContent = {
  nombre: 'Anzures',
  slug: 'anzures',
  group: 'B',
  parentDistrict: {
    nombre: 'Miguel Hidalgo',
    slug: 'miguel-hidalgo',
  },
  lastReviewed: '2026-06-21',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Anzures es el barrio que Polanco no sabe que envidia, güey. Sobre Ejército Nacional y sus paralelas — Arquímedes, Newton, Homero — hay una concentración de boutiques de pilates y yoga que en calidad de instrucción está a la par de los mejores estudios de Masaryk, pero 15-20% más barata en membresía mensual. El vecindario es residencial y tranquilo: poco tráfico a las 7am y estacionamiento en calle accesible antes de las 8hs.

La oferta de fitness en Anzures no tiene el brillo aspiracional de Polanco, y eso es exactamente lo que busca quien vive aquí. NSE B+ con cultura fitness seria: el cliente quiere resultado, no Instagram. Los estudios de funcional sobre Newton tienen grupos reducidos y coaches que conocen a sus alumnos por nombre. Para quien trabaja en la zona, Anzures ofrece la misma calidad que su vecino más caro sin pagar lo mismo.

Para el vecino de Anzures que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Anzures en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Anzures — boutique fitness y funcional a precio real 2026',
    metaDesc: 'Gimnasios en Anzures, CDMX: ~12 opciones de $1,100 a $2,800 MXN/mes. Ejército Nacional, Arquímedes. Calidad Polanco, precio menor. Guía 2026.',
    intro: `Anzures tiene alrededor de 12 gimnasios y estudios fitness, un número discreto para el tamaño del barrio, pero con una concentración de calidad que sorprende a quien viene de buscar solo sobre Masaryk. La zona sobre Ejército Nacional concentra los espacios de mayor infraestructura — salas de pesas completas, áreas cardiovasculares modernas — mientras que sobre Arquímedes y Newton están los boutiques más especializados en funcional y fuerza.

El rango de precios es $1,100–$2,800 MXN al mes, 15-20% menos que el equivalente en Polanco. Los gimnasios de Anzures no gastan lo mismo en renta ni en marketing aspiracional, y parte de ese ahorro se traslada a la membresía. La infraestructura real — máquinas, plataformas, pesas libres — está al mismo nivel que lo que encuentras a cuatro cuadras sobre Masaryk.

Lo que no tiene Anzures es la marca. No hay un flagship ni un boutique con lista de espera de 48 horas. Lo que sí tiene son coaches que llevan años en el mismo espacio, comunidades de 30-80 socios donde el progreso se nota, y horarios de 6am que respetan el tiempo de quien trabaja en Ejército Nacional. Para el resultado de entrenamiento, la diferencia con Polanco es marginal. Para el precio mensual, es real y se acumula.`,
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Anzures comparado con Polanco?',
        a: 'Un gimnasio completo en Anzures va de $1,100 a $2,200 MXN al mes para membresía regular; los boutiques más especializados llegan a $2,800 MXN con clases incluidas. Eso representa un ahorro de 15-20% frente al equivalente en Polanco, donde el mismo tipo de espacio arranca en $1,500 MXN y llega a $4,000 MXN. La inscripción inicial también es menor — en general de $400 a $700 MXN contra los $800-$1,000 MXN que manejan muchos gymns sobre Masaryk. Para quien vive o trabaja en la zona, el ahorro anual acumulado es significativo sin sacrificar calidad.',
      },
      {
        q: '¿Qué tipo de gimnasios hay sobre Ejército Nacional en Anzures?',
        a: 'Sobre Ejército Nacional encuentras principalmente espacios de formato mediano a grande: salas de pesas con 40-80 estaciones, áreas cardiovasculares con caminadoras y bikes, clases de grupo incluidas en membresía y, en algunos casos, área de funcional separada. No son gymns boutique de grupos de 10 personas — son espacios completos para quien quiere variedad en una sola membresía. El tráfico peatonal sobre Ejército Nacional en horas pico los hace muy accesibles en transporte público; en coche, el estacionamiento en calle funciona bien antes de las 8am.',
      },
      {
        q: '¿Hay clases de funcional o CrossFit serias en Anzures?',
        a: '¡Ahorita sí, güey! Sobre Calle Newton y Arquímedes hay dos o tres espacios de funcional y crosstraining con grupos de 10-15 personas máximo, coaches con certificaciones NSCA o CrossFit Level 2, y programación periodizada semana a semana. El ambiente es menos corporativo que en los boxes de Polanco — más honesto, menos posturing. Una clase suelta va de $180 a $280 MXN; los planes mensuales ilimitados de $1,800 a $2,500 MXN. Para el resultado de entrenamiento, están al mismo nivel que sus vecinos más caros de Masaryk.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de la colonia tienen mensualidades sin compromiso de contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gyms independientes suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~12' },
      { label: 'Membresía mensual', value: '$1,100–$2,800 MXN' },
      { label: 'Referente',         value: 'Ejército Nacional / Newton' },
      { label: 'Vs. Polanco',       value: '15-20% más accesible' },
    ],
    barrios: [
      { name: 'Polanco',              slug: 'polanco',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
      { name: 'Granada',              slug: 'granada',              district: 'miguel-hidalgo' },
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
    h1: 'Estudios en Anzures',
    metaDesc: 'Estudios boutique en Anzures, CDMX: pilates Reformer, yoga flow y funcional de $160 a $350 MXN/clase. Arquímedes y Newton. Guía real 2026.',
    intro: `Anzures tiene la concentración de estudios boutique más interesante de la Miguel Hidalgo si buscas calidad sin pagar el sobreprecio de la marca-Polanco. Sobre Arquímedes y Newton hay estudios de pilates con máquinas Balanced Body y PEAK Pilates — completamente serios para todos los niveles — con instructoras que llevan 5-10 años enseñando y conocen a sus alumnos por nombre y por historial de progresión.

El yoga en Anzures tiene un perfil diferente al de Condesa o Roma Norte: menos flow vinyasa para Instagram, más Hatha e Iyengar con trabajo postural serio. Los estudios tienen grupos de 8-14 personas y rotación de alumnos baja, lo que sube el nivel promedio del grupo con el tiempo.

El precio es la razón por la que mucha gente sobre Masaryk camina 10 minutos hasta Anzures. Una clase suelta de Reformer va de $180 a $350 MXN — frente a los $300-$500 MXN de Polanco. Los planes mensuales arrancan en $1,800 MXN. Para quien hace 3-4 clases por semana, el ahorro anual puede pagar meses de membresía extra.

Lo que también diferencia a los estudios de Anzures es la continuidad: no hay alta rotación de instructores porque los estudios no tienen el presupuesto de marketing para atraer nuevos alumnos constantemente y compensar las bajas. El resultado es comunidades pequeñas y estables, donde el nivel promedio del grupo sube con el tiempo y la progresión personal es visible mes a mes.`,
    faq: [
      {
        q: '¿Los estudios de pilates en Anzures son tan buenos como los de Polanco?',
        a: 'Para el 90% de los practicantes de pilates, sí. Los estudios de Anzures tienen máquinas Balanced Body o PEAK Pilates — el estándar utilizado por la mayoría de los studios serios del mundo — con instructoras certificadas y grupos de 8-12 personas. La diferencia frente a los estudios con máquinas Gratz de Polanco la sentís solo si eres practicante avanzado con más de 3 años de Reformer. Para todos los demás, la calidad de instrucción y la experiencia de clase es comparable y el precio es 15-25% menor.',
      },
      {
        q: '¿Hay spinning boutique en Anzures?',
        a: 'Hay opciones de spinning en la zona, aunque no con la misma densidad que en Polanco o Condesa. Los estudios sobre Ejército Nacional y Homero tienen bikes estáticas de calidad y clases de 45-50 minutos con instructor en vivo. El rango de precio es $160-$280 MXN por clase suelta, por debajo del estándar de los boutiques de Masaryk. Si buscas métricas individuales por clase y coaches especializados en potencia de ciclismo, puede que tengas que cruzar a Polanco para eso — pero para spinning de calidad como entrenamiento cardiovascular, Anzures cubre perfectamente.',
      },
      {
        q: '¿Cuánto cuesta un plan mensual de clases en un estudio boutique de Anzures?',
        a: 'Los planes mensuales en estudios boutique de Anzures van de $1,800 a $2,500 MXN para clases ilimitadas, dependiendo del tipo de estudio y las clases incluidas. Pilates Reformer ilimitado está en el rango de $2,000-$2,500 MXN; yoga ilimitado de $1,800 a $2,200 MXN. Las clases sueltas van de $160 a $350 MXN según la modalidad. Algunos estudios tienen paquetes de 10 clases de $1,400 a $2,500 MXN que son la mejor opción si no puedes comprometerte a horario fijo todas las semanas.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~8' },
      { label: 'Clase suelta',      value: '$160–$350 MXN' },
      { label: 'Mensual ilimitado', value: '$1,800–$2,500 MXN' },
      { label: 'Especialidad',      value: 'Pilates Reformer / Yoga' },
    ],
    barrios: [
      { name: 'Polanco',              slug: 'polanco',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
      { name: 'Granada',              slug: 'granada',              district: 'miguel-hidalgo' },
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
    h1: 'Entrenadores personales en Anzures',
    metaDesc: 'Entrenadores personales en Anzures, CDMX: PT certificados de $450 a $900 MXN/sesión. Ejército Nacional, Newton. Mismo nivel, mejor precio. Guía 2026.',
    intro: `El personal training en Anzures tiene un perfil muy claro: entrenadores certificados con 3-8 años de experiencia que trabajan en gimnasios de la zona o de manera independiente sobre Ejército Nacional y Arquímedes, y que cobran 20-30% menos que sus colegas con cartera de clientes en Polanco. La diferencia no es de calidad — es de branding del código postal.

Los entrenadores que trabajan en Anzures suelen tener certificaciones NSCA, NASM o ACSM, que son el estándar real del sector, y especializaciones en fuerza, rehabilitación funcional o pérdida de peso con periodización metabólica. Muchos tienen clientes que vienen de Polanco, Lomas y Chapultepec Heights y que llegaron por recomendación — la mejor validación que existe en este negocio. La sesión individual va de $450 a $900 MXN en la zona, frente a los $700-$1,400 MXN que cobra el equivalente certificado sobre Masaryk.

Para quienes buscan entrenamiento de fuerza con periodización seria — no "rutinas de TikTok con banda elástica" — Anzures tiene entrenadores especializados en powerlifting y halterofilia que trabajan en los gymns de funcional de la zona. El acceso es más directo que en Polanco: no hay lista de espera, la agenda se arma por WhatsApp, y el primer diagnóstico de movimiento lo hacen gratis antes de comprometerte a un paquete. Ahorita es el mejor momento para contratar PT en Anzures antes de que suban precios al nivel de sus vecinos.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Anzures?',
        a: 'Una sesión de PT con entrenador certificado en Anzures va de $450 a $900 MXN según experiencia, especialización y si la sesión es en gimnasio del barrio o en espacio propio. Los paquetes de 10 sesiones van de $3,500 a $7,500 MXN — con descuento de 15-20% sobre el precio de sesión suelta. Los entrenamientos a domicilio o en espacios del cliente tienen un cargo adicional de transporte de $80-$150 MXN por sesión dependiendo de la distancia. Frente al equivalente en Polanco ($700-$1,400 MXN por sesión), el ahorro en Anzures es consistente.',
      },
      {
        q: '¿Cómo encuentro un buen entrenador personal en Anzures sin arriesgar el dinero?',
        a: 'El método más seguro es pedir una sesión de evaluación o una clase de prueba antes de comprar paquete. Los entrenadores serios en Anzures hacen diagnóstico de movimiento en la primera sesión — evaluación postural, test de movilidad básica, historial de lesiones — sin cobrarte extra. Si el entrenador salta directo a la rutina sin evaluarte, es una señal de alerta. También verificá certificaciones: NSCA-CPT, NASM-CPT o ACSM son los estándares reconocidos. "Certificado en línea en 3 semanas" no es lo mismo que una certificación con examen proctored y requisitos de renovación.',
      },
      {
        q: '¿Hay entrenadores especializados en rehabilitación o lesiones en Anzures?',
        a: '¡Sí, güey! Hay entrenadores en Anzures con especialización en rehabilitación funcional post-lesión — particularmente en rodilla, hombro y zona lumbar, que son las tres áreas de mayor consulta en fitness. Algunos trabajaron previamente en clínicas de fisioterapia y tienen experiencia coordinando el regreso al ejercicio después de cirugía o tratamiento. El rango de precio es similar al PT convencional ($450-$900 MXN/sesión) pero con protocolo de trabajo diferente: primera sesión de evaluación extensa, progresión conservadora y comunicación con el fisioterapeuta tratante cuando aplica.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual', value: '$450–$900 MXN' },
      { label: 'Paquete 10 sesiones', value: '$3,500–$7,500 MXN' },
      { label: 'Vs. Polanco',       value: '20-30% más accesible' },
      { label: 'Especialidad',      value: 'Fuerza / Rehab funcional' },
    ],
    barrios: [
      { name: 'Polanco',              slug: 'polanco',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
      { name: 'Granada',              slug: 'granada',              district: 'miguel-hidalgo' },
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
    h1: 'Eventos fitness en Anzures — talleres, retos y open gyms verano 2026',
    metaDesc: 'Eventos fitness en Anzures, CDMX: talleres de pilates, retos de fuerza y jornadas de bienestar de $0 a $600 MXN. Ejército Nacional. Guía 2026.',
    intro: `Anzures no tiene el calendario de eventos de Polanco ni la escena de pop-ups de Condesa, pero lo que tiene es consistente: talleres de técnica mensual en los estudios de pilates y yoga de Arquímedes, retos de fuerza en los gymns de funcional de Newton, y jornadas de bienestar en colaboración con centros de nutrición del barrio. El formato es comunidad local, no evento aspiracional.

Los talleres de técnica son el formato más frecuente: un sábado de 2-3 horas donde un instructor profundiza en algún aspecto específico — respiración en pilates, fuerza en halterofilia, meditación vipassana. El precio ronda los $200-$600 MXN, frente a los $800-$1,500 MXN de eventos similares en Polanco. Para socios de un estudio de Anzures, muchos talleres son gratuitos o tienen 30-50% de descuento.

Los gymns de funcional sobre Newton organizan retos internos trimestrales — WOD especial, prueba de fuerza máxima, benchmark — donde la comunidad compite sin presión externa. Sin premiación en efectivo ni transmisión en vivo: un objetivo real durante 4-6 semanas. Menos show, más trabajo.

El ecosistema de eventos de Anzures es pequeño pero honesto. No hay patrocinadores de suplementos ni transmisiones en vivo — hay gente que entrena junta, se conoce y mide su progreso de forma concreta. Para quien busca eso sin pagar la entrada aspiracional de Polanco, la propuesta es directa y funciona.`,
    faq: [
      {
        q: '¿Hay eventos de running o outdoor fitness en Anzures?',
        a: 'Anzures no tiene parque propio de gran escala como el Parque México de Condesa, pero está a 10-15 minutos caminando del Bosque de Chapultepec, que es el punto de reunión de grupos de running de la zona poniente del CDMX. Varios grupos organizados salen desde la entrada de Chapultepec sobre Paseo de la Reforma los sábados entre 7 y 9am. Algunos gymns de Anzures tienen grupos de running propios que salen desde el local — verificá en el tablón de anuncios o en el WhatsApp de socios del gym de tu interés.',
      },
      {
        q: '¿Cómo me entero de talleres y eventos en estudios de Anzures?',
        a: 'La mayoría de los estudios y gymns de Anzures anuncian sus eventos por Instagram y WhatsApp — no siempre tienen sitio web actualizado. Seguí los perfiles de los estudios que te interesan y activá las notificaciones para no perder los anuncios de última hora. Algunos talleres se llenan en 48-72 horas porque los espacios son pequeños. Si ya eres socio de algún espacio en la zona, pedí que te agreguen al grupo de WhatsApp de la comunidad — ahí van los avisos antes que en cualquier otro canal.',
      },
      {
        q: '¿Hay clases o eventos gratuitos de fitness en Anzures?',
        a: 'Ocasionalmente, sí. Algunos estudios hacen clases abiertas gratuitas cuando tienen nuevo instructor, cuando lanzan una nueva modalidad de clase, o en fechas especiales como el Día Internacional del Yoga. También hay eventos de bienvenida donde la primera clase para nuevos alumnos no tiene costo. Fuera de eso, los eventos gratuitos consistentes en la zona son los grupos de running del Bosque de Chapultepec — acceso libre cualquier fin de semana temprano en la mañana.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Talleres',         value: 'Mensuales' },
      { label: 'Precio taller',    value: '$200–$600 MXN' },
      { label: 'Formato habitual', value: 'Comunidad local' },
      { label: 'Outdoor cercano',  value: 'Bosque de Chapultepec' },
    ],
    barrios: [
      { name: 'Polanco',              slug: 'polanco',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
      { name: 'Granada',              slug: 'granada',              district: 'miguel-hidalgo' },
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
    h1: 'Bienestar en Anzures',
    metaDesc: 'Bienestar en Anzures, CDMX: nutriólogos, masajes deportivos y crioterapia de $350 a $1,200 MXN. Ejército Nacional y Homero. Guía real 2026.',
    intro: `El ecosistema de bienestar en Anzures es menos visible que el de Polanco pero más accesible y, en muchos casos, igual de efectivo. Sobre Ejército Nacional y Homero hay consultorios de nutrición con enfoque deportivo, centros de masaje especializado en recuperación muscular, y espacios de terapias complementarias — crioterapia local, compresión neumática — que aparecieron en los últimos dos años por demanda de los socios de funcional.

Los nutriólogos de Anzures trabajan con clientes que entrenan 4-5 días por semana y buscan un plan que funcione con su agenda real. La consulta inicial va de $600 a $1,000 MXN y el seguimiento mensual de $350 a $600 MXN — 20-30% por debajo de Polanco. Algunos tienen convenio con los gymns de Newton para coordinar entrenamiento y nutrición.

Los masajes de recuperación — deep tissue, liberación miofascial — son el servicio más demandado de la zona. Una sesión de 60 minutos va de $450 a $900 MXN, frente a los $700-$1,300 MXN de los spas equivalentes en Polanco. Para quien entrena 4 o más días a la semana, incluir recuperación semanal marca diferencia real — y en Anzures ese costo es sostenible. Ahorita la zona tiene suficiente densidad de servicios de recuperación para armar una rutina completa sin salir del barrio.`,
    faq: [
      {
        q: '¿Hay nutriólogos especializados en fitness en Anzures?',
        a: 'Sí, hay varios consultorios de nutrición con enfoque en rendimiento deportivo sobre Ejército Nacional y calles aledañas. La mayoría trabajan con metodología de medición de composición corporal — bioimpedancia o pliegues cutáneos — y hacen seguimiento quincenal o mensual del progreso. La consulta inicial incluye evaluación de hábitos alimenticios, historial de entrenamiento y objetivos concretos. El precio va de $600 a $1,000 MXN para la primera consulta y $350-$600 MXN para seguimientos. Algunos tienen integración directa con entrenadores de gymns de la zona para coordinar el plan completo.',
      },
      {
        q: '¿Qué servicios de recuperación muscular hay en Anzures?',
        a: 'Los servicios más accesibles son masaje deportivo (deep tissue y liberación miofascial), que encuentras en centros de recuperación sobre Homero y Ejército Nacional a $450-$900 MXN por sesión de 60 minutos. Ahorita también hay espacios que ofrecen crioterapia localizada ($350-$600 MXN por sesión) y compresión neumática ($300-$500 MXN). Para baño de contraste o crioterapia de cuerpo completo tienes que ir a Polanco o Santa Fe, donde hay instalaciones más completas. Para recuperación post-entrenamiento de semana a semana, los servicios de Anzures son más que suficientes.',
      },
      {
        q: '¿Hay spas o centros de bienestar integral en Anzures?',
        a: 'Anzures tiene centros de masaje y recuperación pero no spas en el sentido de instalaciones con alberca, sauna y vapor propios. Para eso, el destino más cercano es Polanco, que tiene spas integrados en algunos gymns premium. En Anzures, lo que encuentras son espacios especializados — un centro enfocado en masaje deportivo, otro en nutrición, otro en terapias complementarias — que trabajan de manera independiente o en red informal. Puedes armar tu propio paquete de bienestar combinando estos servicios, a menudo con resultado igual de efectivo y precio más accesible.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$600–$1,000 MXN' },
      { label: 'Masaje deportivo 60m', value: '$450–$900 MXN' },
      { label: 'Crioterapia local',    value: '$350–$600 MXN' },
      { label: 'Vs. Polanco',          value: '20-30% más accesible' },
    ],
    barrios: [
      { name: 'Polanco',              slug: 'polanco',              district: 'miguel-hidalgo' },
      { name: 'Lomas de Chapultepec', slug: 'lomas-de-chapultepec', district: 'miguel-hidalgo' },
      { name: 'Granada',              slug: 'granada',              district: 'miguel-hidalgo' },
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
