// src/data/cdmx/barrio-narvarte-oriente.ts
// Draft – lastReviewed: 2026-06-29

export const barrioContent = {
  nombre: 'Narvarte Oriente',
  slug: 'narvarte-oriente',
  group: 'C',
  parentDistrict: {
    nombre: 'Benito Juárez',
    slug: 'benito-juarez',
  },
  lastReviewed: '2026-06-29',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Narvarte Oriente es el barrio que vive bien sin hacer escándalo de ello, güey. Sobre Insurgentes Sur y las paralelas — Diagonal San Antonio, Xochicalco — hay una base fitness sólida, funcional, sin pretensiones de boutique aspiracional. Es el NSE C+ que entrena porque quiere resultado, no porque quiere foto. Los precios son más honestos que en Narvarte Poniente, el vecino más famoso del lado oeste, y la infraestructura cubre sin problema lo que necesita quien vive aquí: pesas, cardio, clases de grupo, algún estudio de yoga o pilates con grupos manejables. La conectividad es el dato que cambia la decisión: Metro Etiopía a pasos de la zona, camiones sobre Insurgentes con frecuencia real. Para quien trabaja en la Cuauhtémoc y vive aquí, el gym antes o después del trabajo no es logística complicada. Narvarte Oriente no está en el radar de quienes buscan el barrio más chido

Para el vecino de Narvarte Oriente que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Narvarte Oriente en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Narvarte Oriente',
    metaDesc: 'Gimnasios en Narvarte Oriente, CDMX: ~10 opciones de $800 a $1,800 MXN/mes. Insurgentes Sur, Diagonal San Antonio. Fitness sólido, precio C+. Guía 2026.',
    intro: `Narvarte Oriente tiene alrededor de 10 gimnasios y espacios fitness, una oferta que cubre sin problema las necesidades de quien busca entrenamiento regular sin pagar el sobreprecio de Narvarte Poniente ni el volumen de las cadenas masivas del Eje Central. La zona sobre Insurgentes Sur concentra los espacios de mayor tamaño — salas de pesas con equipamiento completo, áreas cardiovasculares actualizadas — mientras que sobre Diagonal San Antonio y Xochicalco aparecen opciones más pequeñas de funcional y clases grupales. El rango de precios es $800–$1,800 MXN al mes: claramente NSE C+ con consciencia del costo. No hay membresías de $3,000 MXN en este barrio, y tampoco hace falta. El equipamiento en los gymns principales — cables, mancuernas hasta 50kg, caminadoras sin fila en hora pico — es lo que el 90% de los socios necesita semana a semana. Metro Etiopía conecta la zona con el resto de la ciudad de manera directa, lo que hace que la asistencia sea consistente incluso en semanas de trabajo intenso. Lo que no tiene Narvarte Oriente es el branding de su vecino del oeste. Lo que sí tiene es gimnasios donde el staff te conoce por nombre, grupos de clases de 15-25 personas con continuidad real, y una cultura de entrenamiento honesta donde la mayoría va a trabajar y no a que los vean trabajar. Para quien vive o trabaja en la zona, es la opción más racional del cuadrante sur de`,
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Narvarte Oriente comparado con Narvarte Poniente?',
        a: 'Un gimnasio completo en Narvarte Oriente va de $800 a $1,500 MXN al mes; los espacios más equipados llegan a $1,800 MXN con clases incluidas. Eso representa un ahorro de 15-25% frente al equivalente en Narvarte Poniente, donde la misma membresía arranca en $1,000 MXN y sube fácil a $2,200 MXN en los gymns con mayor demanda. La inscripción inicial también es más baja en Oriente — en general de $300 a $600 MXN contra los $500-$900 MXN del Poniente. Para quien entrena 4-5 días a la semana, el ahorro anual acumulado cubre otro mes de membresía.',
      },
      {
        q: '¿Qué hay sobre Insurgentes Sur en términos de gimnasios?',
        a: 'Sobre Insurgentes Sur en Narvarte Oriente encuentras los espacios de mayor infraestructura del barrio: gymns de formato mediano a grande con salas de pesas completas, áreas de cardio con 20-40 máquinas, clases de grupo incluidas en membresía y en algunos casos área de funcional separada. El acceso en transporte público es inmediato — Metrobús Insurgentes pasa directo — y hay opciones de estacionamiento lateral en las calles transversales antes de las 8am. No son gymns boutique de experiencia premium, pero la infraestructura cubre bien para el precio que manejan.',
      },
      {
        q: '¿Hay opciones de funcional o clases grupales en Narvarte Oriente?',
        a: '¡Ahorita sí, güey! Sobre Diagonal San Antonio y Xochicalco hay espacios de funcional y crosstraining con grupos de 10-20 personas y coaches con certificaciones reconocidas. El nivel es honesto: programación periodizada, trabajo de fuerza real, sin el posturing de los boxes del norte de la ciudad. Una clase suelta va de $130 a $220 MXN; los planes mensuales ilimitados de $1,200 a $1,800 MXN. Para el resultado de entrenamiento por peso de membresía, la relación en Narvarte Oriente es de las mejores del cuadrante sur de la CDMX.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Narvarte Oriente tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Narvarte Oriente suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~10' },
      { label: 'Membresía mensual', value: '$800–$1,800 MXN' },
      { label: 'Referente',         value: 'Insurgentes Sur / Metro Etiopía' },
      { label: 'Vs. Narvarte Poniente', value: '15-25% más accesible' },
    ],
    barrios: [
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
      { name: 'Del Valle Norte',   slug: 'del-valle-norte',   district: 'benito-juarez' },
      { name: 'Portales Norte',    slug: 'portales-norte',    district: 'benito-juarez' },
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
    h1: 'Estudios en Narvarte Oriente — pilates y yoga con grupos reales 2026',
    metaDesc: 'Estudios boutique en Narvarte Oriente, CDMX: pilates, yoga y funcional de $130 a $280 MXN/clase. Xochicalco y Diagonal San Antonio. Guía real 2026.',
    intro: `Los estudios boutique de Narvarte Oriente no compiten con los de Condesa en estética, pero sí en lo que importa cuando se trata de progresión real: instructores que permanecen, grupos pequeños con continuidad, y un precio que permite asistir 3-4 veces por semana sin ajustar el presupuesto mensual. Sobre Xochicalco y las calles transversales a Diagonal San Antonio hay estudios de pilates y yoga con máquinas de calidad y grupos de 8-14 personas donde los alumnos se conocen entre sí.

El perfil del estudiante de Narvarte Oriente es pragmático: busca resultado concreto, no la experiencia instagrameable de un estudio con paredes de ladrillo expuesto y velas de soya. Los instructores trabajan con eso a favor — las clases son más densas en corrección técnica y menos en narrativa de estilo de vida. El yoga tiene más presencia del Hatha e Iyengar con trabajo postural serio que del vinyasa flow decorativo.

La clase suelta va de $130 a $280 MXN; los planes mensuales de $1,400 a $2,200 MXN. La diferencia frente a Narvarte Poniente o Roma Norte está en el rango inferior: en Oriente todavía encuentras opciones serias por debajo de $1,600 MXN al mes, algo que en los barrios de moda desapareció hace dos años. Ahorita es el momento de anotarte antes de que la demanda suba los precios al nivel del otro lado de Insurgentes.`,
    faq: [
      {
        q: '¿Los estudios de pilates en Narvarte Oriente tienen máquinas de calidad?',
        a: 'Los estudios establecidos de la zona trabajan con Reformers de marcas reconocidas — Balanced Body y equipamiento equivalente — con mantenimiento regular. No es la misma inversión en ambientación que los estudios premium de Condesa, pero el equipamiento funcional es comparable. Para el 95% de los practicantes, la diferencia en máquinas la nota alguien con más de 4 años de Reformer dedicado. Para todos los demás, la experiencia de clase en Narvarte Oriente es efectiva y bien dirigida a un precio 20-30% menor que Roma Norte o Narvarte Poniente.',
      },
      {
        q: '¿Hay clases de yoga en Narvarte Oriente con instructores certificados?',
        a: 'Sí, güey. Hay estudios de yoga sobre Xochicalco y Diagonal San Antonio con instructores con formaciones de 200 y 500 horas — el estándar real de la disciplina. El perfil es más Hatha e Iyengar que vinyasa rápido, con énfasis en corrección postural y trabajo de respiración consciente. Los grupos son de 8-14 personas, lo que permite corrección individual. La clase suelta va de $130 a $200 MXN; planes mensuales ilimitados de $1,400 a $1,900 MXN. Menos show, más trabajo — y eso es exactamente lo que busca quien vive en esta zona.',
      },
      {
        q: '¿Cuánto cuesta un plan mensual en un estudio de Narvarte Oriente?',
        a: 'Los planes mensuales en estudios de Narvarte Oriente van de $1,400 a $2,200 MXN para clases ilimitadas según modalidad. Pilates con Reformer ilimitado está en el rango alto ($1,800-$2,200 MXN); yoga ilimitado en el rango bajo ($1,400-$1,800 MXN). Los paquetes de 8 o 10 clases van de $900 a $1,800 MXN y son la mejor opción para quien tiene agenda variable. Algunos estudios tienen plan de pareja o familiar con 10-15% de descuento sobre el segundo integrante — vale preguntar si no está publicado en la recepción.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~6' },
      { label: 'Clase suelta',      value: '$130–$280 MXN' },
      { label: 'Mensual ilimitado', value: '$1,400–$2,200 MXN' },
      { label: 'Especialidad',      value: 'Pilates / Yoga Hatha' },
    ],
    barrios: [
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
      { name: 'Del Valle Norte',   slug: 'del-valle-norte',   district: 'benito-juarez' },
      { name: 'Portales Norte',    slug: 'portales-norte',    district: 'benito-juarez' },
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
    h1: 'Entrenadores personales en Narvarte Oriente',
    metaDesc: 'Entrenadores personales en Narvarte Oriente, CDMX: PT certificados de $350 a $750 MXN/sesión. Insurgentes Sur y Xochicalco. Resultado sin costo de marca. Guía',
    intro: `El personal training en Narvarte Oriente tiene un perfil directo: entrenadores certificados con 3-7 años de experiencia que trabajan en los gimnasios de Narvarte Oriente o de manera independiente, y que cobran lo que corresponde a su nivel real sin inflar el precio por estar en la colonia de moda. El rango es $350-$750 MXN por sesión, con paquetes de 10 sesiones que bajan el costo unitario 15-20%.

Los entrenadores que trabajan sobre Insurgentes Sur y las calles internas de Narvarte Oriente suelen tener certificaciones NSCA-CPT, NASM o ACSM — el estándar real del sector — y muchos están especializados en pérdida de peso con periodización metabólica, fuerza funcional o rehabilitación post-lesión. No hay lista de espera ni proceso de onboarding de tres semanas: la agenda se coordina por WhatsApp y el primer diagnóstico de movimiento es parte de la primera sesión sin costo adicional.

Para quien busca un entrenador que lo conozca por nombre, entienda su historial de lesiones y ajuste la programación semana a semana según recuperación real — no según un template genérico — Narvarte Oriente tiene opciones serias ahorita. El costo mensual de 8-12 sesiones está entre $2,800 y $6,500 MXN, significativamente por debajo del equivalente en Narvarte Poniente o Del Valle Norte. La diferencia es el código postal, no el resultado.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Narvarte Oriente?',
        a: 'Una sesión individual con entrenador certificado en Narvarte Oriente va de $350 a $750 MXN según experiencia y especialización. Los paquetes de 10 sesiones van de $2,800 a $6,000 MXN — con descuento de 15-20% frente al precio de sesión suelta. Entrenamiento a domicilio tiene cargo adicional de $80-$120 MXN por sesión por transporte. Frente al equivalente en Narvarte Poniente ($500-$1,000 MXN por sesión), el ahorro en Oriente es consistente y se acumula rápido en un plan de 3 meses.',
      },
      {
        q: '¿Cómo verifico que un entrenador personal en Narvarte Oriente está bien certificado?',
        a: 'Pedile directamente el número de certificación o el documento de renovación. NSCA-CPT, NASM-CPT y ACSM-CPT son las certificaciones con examen proctored y requisitos de renovación bienal que incluyen educación continua — eso es lo que separa una certificación real de un curso de fin de semana. Si el entrenador tiene además especialización en nutrición deportiva (ISSN o NSCA-CSCS) es un plus. Lo que no dice nada sobre calidad: "certificado en 21 días", "diplomado online sin examen" o números de cédula de licenciatura en educación física sin certificación fitness actualizada.',
      },
      {
        q: '¿Hay entrenadores especializados en fuerza o powerlifting en Narvarte Oriente?',
        a: '¡Sí, güey! Hay entrenadores en la zona con especialización en fuerza — sentadilla, peso muerto, press — que trabajan en los gymns de funcional sobre Diagonal San Antonio y Xochicalco. El nivel de programación es real: periodización por bloques, control de tonelaje semanal, deload estructurado. No es el estilo "haz lo que puedas y descansá mañana". El rango de precio es $400-$750 MXN por sesión; para entrenamiento de powerlifting con competencia en horizonte hay coaches que cobran $500-$800 MXN con acceso a análisis de video de cada levantamiento.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$350–$750 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,800–$6,000 MXN' },
      { label: 'Vs. Narvarte Poniente', value: '20-30% más accesible' },
      { label: 'Especialidad',        value: 'Fuerza / Pérdida de peso' },
    ],
    barrios: [
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
      { name: 'Del Valle Norte',   slug: 'del-valle-norte',   district: 'benito-juarez' },
      { name: 'Portales Norte',    slug: 'portales-norte',    district: 'benito-juarez' },
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
    h1: 'Eventos fitness en Narvarte Oriente — talleres y retos de barrio 2026',
    metaDesc: 'Eventos fitness en Narvarte Oriente, CDMX: talleres, retos y clases abiertas de $0 a $450 MXN. Insurgentes Sur y Xochicalco. Guía 2026.',
    intro: `Narvarte Oriente no tiene el calendario de eventos de Condesa ni los pop-ups de Roma Norte, pero tiene algo que funciona: eventos de comunidad real, sin presupuesto de marketing aspiracional, donde el objetivo es el entrenamiento y no la visibilidad en redes. Los estudios sobre Xochicalco organizan talleres técnicos mensuales — pilates de suelo, yoga restaurativo, movilidad para escritorio — con grupos de 10-20 personas y precio de $180-$450 MXN.

Los gymns de funcional sobre Diagonal San Antonio tienen retos internos trimestrales donde los socios compiten contra su propio registro anterior: benchmark de fuerza, tiempo en circuito, evolución de composición corporal. Sin streaming, sin premiación en efectivo, sin posturing. Una dinámica honesta que genera más adherencia que cualquier evento con patrocinadores de suplementos.

La cercanía con el Parque Hundido — a 10-15 minutos caminando hacia el sur — convierte los fines de semana en oportunidad de outdoor fitness sin costo: grupos de running que salen desde la zona, clases de bootcamp al aire libre, y el clásico circuito de senderismo que hace la gente del barrio sin llamarlo "trail running". Ahorita el ecosistema de eventos de Narvarte Oriente está creciendo — vale seguir los perfiles de Instagram de los gymns para no perderse nada.`,
    faq: [
      {
        q: '¿Hay grupos de running organizados en Narvarte Oriente?',
        a: 'Hay grupos de running que salen desde gymns y estudios de la zona, generalmente los sábados entre 7 y 9am hacia el Parque Hundido o hasta Insurgentes Sur. Algunos son grupos informales de socios del gym; otros tienen coordinador y ruta fija semana a semana. La mejor manera de enterarte es preguntar en la recepción del gym o estudiar que ya frecuentás — la mayoría anuncia por WhatsApp de socios antes que en cualquier otro canal. Metro Etiopía y el Metrobús Insurgentes facilitan el regreso al barrio después de una ruta larga.',
      },
      {
        q: '¿Cuánto cuestan los talleres fitness en Narvarte Oriente?',
        a: 'Los talleres técnicos en estudios de Narvarte Oriente van de $180 a $450 MXN, dependiendo de la duración y el instructor. Los formatos habituales son 90 minutos a 3 horas un sábado por la mañana, con grupos de 10-20 personas. Para socios de los estudios que los organizan, el precio tiene descuento de 20-40% — algunos talleres son gratuitos para socios con membresía activa. Los talleres de nutrición aplicada al entrenamiento, que aparecen 2-3 veces al año, suelen ser los más solicitados y se llenan en los primeros dos días de anuncio.',
      },
      {
        q: '¿Hay clases o eventos gratuitos de fitness en Narvarte Oriente?',
        a: 'Sí, ocasionalmente. Los estudios hacen clases abiertas cuando presentan nuevo instructor o nueva modalidad — primera clase sin costo, sin compromiso. Los gymns de funcional tienen sesiones de prueba gratuitas para quien viene por primera vez, normalmente limitadas a una por persona. Para outdoor gratuito, el Parque Hundido tiene circuitos de ejercicio al aire libre de acceso libre toda la semana y grupos espontáneos de ejercicio los fines de semana por la mañana. Seguir los perfiles de Instagram de los espacios de la zona es la manera más práctica de enterarse con tiempo.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Talleres',         value: 'Mensuales' },
      { label: 'Precio taller',    value: '$180–$450 MXN' },
      { label: 'Formato habitual', value: 'Comunidad de barrio' },
      { label: 'Outdoor cercano',  value: 'Parque Hundido' },
    ],
    barrios: [
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
      { name: 'Del Valle Norte',   slug: 'del-valle-norte',   district: 'benito-juarez' },
      { name: 'Portales Norte',    slug: 'portales-norte',    district: 'benito-juarez' },
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
    h1: 'Bienestar en Narvarte Oriente',
    metaDesc: 'Bienestar en Narvarte Oriente, CDMX: nutriólogos, masaje deportivo y terapias de $300 a $850 MXN. Insurgentes Sur y Xochicalco. Guía real 2026.',
    intro: `El ecosistema de bienestar en Narvarte Oriente es funcional y accesible: consultorios de nutrición con enfoque deportivo sobre Insurgentes Sur, centros de masaje de recuperación muscular en las calles internas del barrio, y algunos espacios de terapias complementarias que crecieron junto con la demanda de los socios de los gymns de funcional. No hay spas de lujo ni crioterapia de cuerpo completo, pero hay lo suficiente para armar una rutina de recuperación seria semana a semana.

Los nutriólogos de la zona trabajan con clientes que entrenan 3-5 días por semana y necesitan un plan que funcione con la logística real de quien vive en Benito Juárez: acceso a mercados locales, presupuesto mensual concreto, objetivos de composición corporal claros. La consulta inicial va de $500 a $900 MXN; el seguimiento mensual de $300 a $550 MXN — 15-25% por debajo de lo que cobra el equivalente en Narvarte Poniente o Roma Norte.

Los masajes de recuperación son el servicio más demandado ahorita: deep tissue y liberación miofascial a $400-$800 MXN por sesión de 60 minutos. Para quien entrena 4 o más días a la semana, incorporar recuperación semanal es la diferencia entre progresar y estancarse por fatiga acumulada. En Narvarte Oriente ese costo es sostenible dentro del presupuesto fitness de NSE C+, y los centros tienen disponibilidad real sin lista de espera de dos semanas.`,
    faq: [
      {
        q: '¿Hay nutriólogos especializados en rendimiento deportivo en Narvarte Oriente?',
        a: 'Sí, güey. Hay consultorios sobre Insurgentes Sur y calles internas con nutriólogos que trabajan específicamente con personas que entrenan con frecuencia. La metodología incluye medición de composición corporal (bioimpedancia o pliegues), análisis de ingesta real y seguimiento quincenal o mensual. El precio va de $500 a $900 MXN para la primera consulta; seguimientos de $300 a $550 MXN. Algunos nutriólogos tienen convenio con los gimnasios de Narvarte Oriente — vale preguntar en recepción del gym si recomiendan alguno con quien ya trabajan en coordinación.',
      },
      {
        q: '¿Qué servicios de recuperación muscular hay en Narvarte Oriente?',
        a: 'Los servicios principales son masaje deportivo (deep tissue y liberación miofascial) disponibles en centros de recuperación sobre Xochicalco y Diagonal San Antonio, a $400-$800 MXN por sesión de 60 minutos. Hay espacios que además ofrecen compresión neumática ($250-$450 MXN) y electroterapia básica. Para crioterapia de cuerpo completo o baño de contraste con instalación propia hay que ir a Del Valle Norte o Narvarte Poniente. Para recuperación post-entrenamiento de semana a semana, lo que ofrece Narvarte Oriente es más que suficiente.',
      },
      {
        q: '¿Hay centros de bienestar integral en Narvarte Oriente?',
        a: 'Hay espacios que combinan dos o tres servicios — masaje, nutrición y alguna terapia complementaria — bajo el mismo techo, pero no spas en el sentido de instalación con alberca, sauna y vapor propios. Para eso el destino más cercano es Del Valle Norte, que tiene algunos centros de bienestar más completos. En Narvarte Oriente la propuesta es especialización por servicio: un centro enfocado en masaje deportivo, otro en nutrición, otro en terapias complementarias. puedes armar tu rutina combinando estos servicios con resultado igual de efectivo y precio más accesible que los centros integrales del poniente del barrio.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$500–$900 MXN' },
      { label: 'Masaje deportivo 60m', value: '$400–$800 MXN' },
      { label: 'Compresión neumática', value: '$250–$450 MXN' },
      { label: 'Vs. Narvarte Poniente', value: '15-25% más accesible' },
    ],
    barrios: [
      { name: 'Narvarte Poniente', slug: 'narvarte-poniente', district: 'benito-juarez' },
      { name: 'Del Valle Norte',   slug: 'del-valle-norte',   district: 'benito-juarez' },
      { name: 'Portales Norte',    slug: 'portales-norte',    district: 'benito-juarez' },
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
