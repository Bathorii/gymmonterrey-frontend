// src/data/cdmx/barrio-moctezuma.ts
// Draft – lastReviewed: 2026-06-29

export const barrioContent = {
  nombre: 'Moctezuma',
  slug: 'moctezuma',
  group: 'C',
  parentDistrict: {
    nombre: 'Venustiano Carranza',
    slug: 'venustiano-carranza',
  },
  lastReviewed: '2026-06-29',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Moctezuma es el barrio que el aeropuerto define pero no se deja dominar, güey. Sobre Av. Oceanía, Blvd. Puerto Aéreo y Calle Moctezuma hay una clase media estable — trabajadores del AICM, del sector logístico, familias de segunda y tercera generación en Moctezuma — que entrena con constancia sin aspiraciones de cambiar de colonia. El Metro Moctezuma en Línea 1 conecta con todo CDMX, y eso se nota en la clientela de los gymns: mezcla de vecinos y de gente que viene del centro o de Iztacalco.

NSE C real: nada de boutique, nada de cadenas premium. Lo que hay son gymns que funcionan, que llevan años abiertos y que conocen a sus socios por nombre. Para quien vive sobre estas calles, ahorita la oferta local cubre perfectamente sin necesidad de cruzar delegación. Para quien vive o trabaja cerca de Moctezuma, la oferta fitness local es suficiente para entrenar con constancia sin necesidad de cruzar la ciudad ni pagar los precios de las zonas premium del CDMX, cuate.

Para el vecino de Moctezuma que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar.`,

  gimnasios: {
    h1: 'Gimnasios en Moctezuma',
    metaDesc: 'Gimnasios en Moctezuma, CDMX: ~9 opciones de $600 a $1,300 MXN/mes. Av. Oceanía, Puerto Aéreo. Metro Moctezuma. NSE C, precio real. Guía 2026.',
    intro: `Moctezuma tiene alrededor de 9 gimnasios y espacios de fitness — una oferta consistente con el perfil de barrio de clase media estable en Venustiano Carranza. La concentración está sobre Av. Oceanía y Blvd. Puerto Aéreo, con algunos gymns sobre las calles internas del barrio que llevan más de 10 años de operación. El Metro Moctezuma (Línea 1) da conectividad directa con el centro de CDMX, y varios gymns de la zona abren desde las 6am para captar el flujo de trabajadores en turno matutino. El rango de precios es $600 a $1,300 MXN al mes, con la mayoría de las opciones completas entre $750 y $1,100 MXN. Para ese precio encuentras gym con pesas libres funcionales, área cardiovascular operativa y clases de grupo incluidas. La inscripción inicial va de $300 a $500 MXN. El perfil del socio es adulto de 25-50 años con objetivo de mantenimiento y bienestar general — no hay demanda de equipamiento de competencia ni de programación periodizada avanzada. Lo que caracteriza a los gymns de Moctezuma es la longevidad y la clientela fiel. Los espacios que llevan más de 8 años abiertos en la zona tienen socios que empezaron como jóvenes y siguen yendo a la misma hora los mismos días. Esa estabilidad es el mejor indicador de calidad en un gym: no hay clientela fiel donde el servicio es malo. Para quien busca un espacio donde lo van a conocer y donde`,
    faq: [
      {
        q: '¿Cuánto cuesta una membresía de gimnasio en Moctezuma?',
        a: 'Una membresía mensual en Moctezuma va de $600 a $1,300 MXN. Los gymns más básicos pero completos están entre $650 y $900 MXN; los espacios con mayor superficie, más variedad de equipamiento y clases de grupo diversas entre $1,000 y $1,300 MXN. La inscripción inicial va de $300 a $500 MXN. Para planes de 3 o 6 meses hay descuentos de 10-15% en algunos espacios. Comparado con Jardín Balbuena o Peñón de los Baños, el rango de precio en Moctezuma es similar; frente a zonas más al poniente como Doctores o Roma, es 15-20% más accesible.',
      },
      {
        q: '¿Es fácil llegar a los gimnasios de Moctezuma en transporte público?',
        a: '¡Uno de los mejor conectados de Venustiano Carranza, güey! El Metro Moctezuma (Línea 1) es el eje principal: desde el centro de CDMX llega en 15-20 minutos, desde Pantitlán en 10 minutos. Sobre Av. Oceanía también pasan metrobuses y rutas de transporte colectivo que conectan con Iztacalco, Iztapalapa y el norte. Para quienes trabajan en el AICM o en el corredor logístico de Puerto Aéreo, varios gymns de la zona quedan a 5-10 minutos caminando de sus lugares de trabajo. La conectividad es el activo más claro del barrio.',
      },
      {
        q: '¿Hay gymns de funcional o crosstraining en Moctezuma?',
        a: 'Ahorita hay uno o dos espacios de funcional en Moctezuma — la oferta es limitada pero existe. Los boxes de crosstraining de mayor especialización están en zonas con mayor densidad de practitioners: Doctores, Iztapalapa, o más al norte en Tepito o Lindavista. Lo que sí hay en Moctezuma son gymns de formato mixto que incluyen áreas de funcional básico — kettlebells, TRX, cuerdas — integradas en el gym general. Para funcional como complemento del entrenamiento con pesas, la oferta local cubre. Para programación de CrossFit competitivo, es mejor buscar en otra zona.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Moctezuma tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Moctezuma suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~9' },
      { label: 'Membresía mensual', value: '$600–$1,300 MXN' },
      { label: 'Referente',         value: 'Av. Oceanía / Metro Moctezuma' },
      { label: 'NSE',               value: 'C' },
    ],
    barrios: [
      { name: 'Jardín Balbuena',        slug: 'jardin-balbuena',        district: 'venustiano-carranza' },
      { name: 'Peñón de los Baños',     slug: 'penon-banos',            district: 'venustiano-carranza' },
      { name: 'Viaducto Piedad',        slug: 'viaducto-piedad',        district: 'iztacalco' },
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
    h1: 'Estudios boutique en Moctezuma',
    metaDesc: 'Estudios boutique en Moctezuma, CDMX: yoga y pilates de $100 a $220 MXN/clase. Oceanía, Moctezuma. NSE C, sin branding. Guía 2026.',
    intro: `La oferta de estudios boutique en Moctezuma es modesta pero funcional para el perfil del barrio. Hay dos o tres estudios de yoga y pilates mat sobre calles internas de la colonia que llevan 3-6 años operando con grupos de 8-14 personas y precios muy accesibles — $100 a $200 MXN por clase suelta. No tienen el branding ni el equipamiento de estudios en zonas premium, pero las instructoras tienen años de experiencia y conocen bien a su clientela.

El yoga en Moctezuma tiene un perfil práctico y sin pretensiones: clases de Hatha y flujo básico orientadas a personas que quieren estirarse, trabajar la postura y reducir el estrés de jornadas de trabajo físico o administrativo. Las sesiones son de 60-75 minutos con grupos mixtos en edad y nivel. No hay separación estricta de niveles — el instructor adapta las instrucciones para que cada alumno trabaje dentro de sus capacidades.

Para Reformer de pilates no hay oferta disponible en Moctezuma actualmente. Para esa modalidad la referencia más cercana es Jardín Balbuena o zonas al poniente. Lo que sí existe son clases de pilates mat con instructoras que conocen el método y adaptan el trabajo para diferentes niveles de condición física. Para quien nunca ha hecho pilates, Moctezuma es un buen lugar para empezar: precio bajo, grupos pequeños y ambiente sin presiones.`,
    faq: [
      {
        q: '¿Cuánto cuestan las clases de yoga en Moctezuma?',
        a: 'Una clase de yoga en Moctezuma va de $100 a $200 MXN por sesión suelta — uno de los rangos más accesibles de Venustiano Carranza. Los planes mensuales de clases ilimitadas están entre $900 y $1,400 MXN. Algunos estudios tienen precios especiales para vecinos del barrio o para quien se inscriba antes del día 5 del mes. No hay Reformer de pilates disponible; para esa modalidad la opción más cercana está en Jardín Balbuena o Doctores. Para yoga y pilates mat, la oferta de Moctezuma es suficiente para practicantes de nivel básico a intermedio.',
      },
      {
        q: '¿Los estudios de Moctezuma son adecuados para principiantes absolutos?',
        a: '¡Son de los mejores ambientes para empezar, güey! Los estudios de Moctezuma tienen grupos heterogéneos sin separación estricta de nivel, lo que significa que la instructora explica todo desde la base y no supone que el alumno ya sabe cómo pararse en tadasana o qué es la postura del perro boca abajo. El ambiente es relajado y el grupo es vecinal — no hay presión de performance ni de parecer que ya llevás años practicando. Para quien quiere probar yoga o pilates sin intimidarse, un estudio de barrio en Moctezuma es el punto de entrada correcto.',
      },
      {
        q: '¿Hay clases de meditación o mindfulness en Moctezuma?',
        a: 'La oferta de meditación independiente es muy limitada en Moctezuma — algunos estudios de yoga incluyen 10-15 minutos de meditación guiada al final de la clase pero no hay sesiones de meditación formal como oferta separada. Para meditación Vipassana, MBSR o prácticas más estructuradas, hay que desplazarse a Coyoacán, Doctores o el centro histórico donde hay centros más especializados. Lo que sí hay en la zona son clases de yoga con componente de relajación y respiración que tienen efecto calmante real sin necesitar la etiqueta de "meditación".',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~3' },
      { label: 'Clase suelta',      value: '$100–$220 MXN' },
      { label: 'Mensual ilimitado', value: '$900–$1,400 MXN' },
      { label: 'Perfil',           value: 'Barrio / sin pretensiones' },
    ],
    barrios: [
      { name: 'Jardín Balbuena',        slug: 'jardin-balbuena',        district: 'venustiano-carranza' },
      { name: 'Peñón de los Baños',     slug: 'penon-banos',            district: 'venustiano-carranza' },
      { name: 'Viaducto Piedad',        slug: 'viaducto-piedad',        district: 'iztacalco' },
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
    h1: 'Entrenadores personales en Moctezuma',
    metaDesc: 'Entrenadores personales en Moctezuma, CDMX: PT de $320 a $650 MXN/sesión. Oceanía, Puerto Aéreo. NSE C, precio accesible. Guía 2026.',
    intro: `El personal training en Moctezuma tiene precios acordes al NSE C del barrio: sesiones individuales de $320 a $650 MXN y paquetes de 8-10 sesiones de $2,200 a $5,000 MXN. Los entrenadores de la zona trabajan principalmente en los gymns sobre Av. Oceanía y Puerto Aéreo, con algunos independientes que ofrecen sesiones en parques del barrio o a domicilio. El acceso es directo — sin lista de espera, sin app para reservar, con WhatsApp y agenda semanal acordada entre entrenador y cliente.

El perfil del cliente de PT en Moctezuma es concreto: adulto de 30-55 años, trabajador con jornada larga, con objetivo de bajar de peso, mejorar la condición cardiovascular o aliviar dolores crónicos de espalda y cuello por trabajo sedentario o físico repetitivo. Los entrenadores de la zona conocen este perfil y trabajan con sesiones de 50-60 minutos que combinan movilidad, fuerza funcional y resistencia en formato eficiente.

Para objetivos más específicos — powerlifting, preparación para carrera, rehabilitación post-cirugía — la oferta de Moctezuma puede ser limitada. En esos casos vale la pena buscar entrenadores con especialización en zonas con mayor densidad de practitioners de alto nivel. Para la mayoría de los objetivos de fitness de NSE C, los entrenadores de Moctezuma cubren bien y a precio que permite continuidad mes a mes — que es la variable más importante para el resultado.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Moctezuma?',
        a: 'Una sesión de PT en Moctezuma va de $320 a $650 MXN según la experiencia y certificación del entrenador. Los paquetes de 8 sesiones están entre $2,200 y $4,500 MXN; los de 10 sesiones de $2,500 a $5,000 MXN con descuento de 10-15% sobre el precio individual. Para sesiones a domicilio hay cargo adicional de $60-$120 MXN por desplazamiento. Frente a zonas con mayor concentración de PT certificados como Doctores o Condesa, el precio en Moctezuma es 20-30% más accesible. La clave sigue siendo verificar certificación antes de contratar por precio.',
      },
      {
        q: '¿Cómo verifico que un entrenador en Moctezuma está bien capacitado?',
        a: 'Pedí ver la certificación física o digital — NSCA-CPT, NASM-CPT, ACSM, o certificaciones de la Escuela del Deporte o cultura física de universidad mexicana acreditada. Una certificación en línea de 3 días no tiene el mismo respaldo que una con examen proctored y renovación bienal con créditos de educación continua. También pedí 2-3 referencias de clientes actuales a quienes puedas contactar directamente. Un entrenador serio tiene las dos cosas disponibles sin problema. Evitá pagar paquete completo antes de hacer al menos una sesión de evaluación o prueba.',
      },
      {
        q: '¿Hay entrenadores con experiencia en trabajo para personas con sobre peso en Moctezuma?',
        a: '¡Ahorita sí, güey — es de hecho el perfil de objetivo más común en la zona! Los entrenadores de Moctezuma trabajan regularmente con personas que empiezan desde una condición física baja o con sobrepeso significativo. El enfoque habitual es progresivo: primera etapa con trabajo de movilidad y resistencia cardiovascular baja intensidad, segunda etapa con incorporación de fuerza funcional, tercera con periodización de mayor intensidad. El progreso es más lento al principio pero la adherencia es mayor porque el cuerpo no está sobreexigido desde el primer día. Para este tipo de programa, los entrenadores con experiencia en la zona son una buena opción.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$320–$650 MXN' },
      { label: 'Paquete 8 sesiones',  value: '$2,200–$4,500 MXN' },
      { label: 'Disponibilidad',      value: 'Sin lista de espera' },
      { label: 'Vs. Doctores',        value: '20-30% más accesible' },
    ],
    barrios: [
      { name: 'Jardín Balbuena',        slug: 'jardin-balbuena',        district: 'venustiano-carranza' },
      { name: 'Peñón de los Baños',     slug: 'penon-banos',            district: 'venustiano-carranza' },
      { name: 'Viaducto Piedad',        slug: 'viaducto-piedad',        district: 'iztacalco' },
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
    h1: 'Eventos fitness en Moctezuma — retos, comunidad y Puerto Aéreo 2026',
    metaDesc: 'Eventos fitness en Moctezuma, CDMX: retos y clases comunitarias de $0 a $350 MXN. Oceanía, Moctezuma. Comunidad barrial activa. Guía 2026.',
    intro: `Moctezuma no tiene un calendario de eventos fitness tan activo como zonas con mayor concentración de boutiques o comunidades de crossfit, pero lo que organiza es consistente y de acceso real. Los gymns sobre Av. Oceanía hacen retos internos dos veces al año — composición corporal en 8 semanas, resistencia en 30 días — con tablero en el local y comunicación por el grupo de WhatsApp de socios. Sin entrada externa ni transmisión: comunidad del gym compitiendo internamente.

La Unidad Deportiva Moctezuma es el espacio de eventos comunitarios más activo del barrio: canchas de fútbol, básquetbol y voleibol con actividades organizadas por la delegación, ligas de fin de semana y ocasionalmente clases abiertas de acondicionamiento físico. La entrada es gratuita para vecinos del barrio con CURP registrada en el sistema de la delegación — un recurso que muchos vecinos no están aprovechando.

Los grupos de caminata y running sobre Av. Oceanía existen de manera informal — salen los sábados entre 7 y 8:30am en grupos de 15-40 personas de distintas edades. El tráfico sobre Oceanía en esas horas es manejable y hay carril lateral que da algo de espacio para correr con seguridad. La organización es por WhatsApp de vecinos — sin cuota, sin registro formal.`,
    faq: [
      {
        q: '¿Hay eventos deportivos en la Unidad Deportiva Moctezuma?',
        a: 'Sí, güey — la Unidad Deportiva Moctezuma es el hub de actividad comunitaria del barrio. La delegación Venustiano Carranza organiza torneos de fútbol, básquetbol y voleibol de manera regular, además de actividades de acondicionamiento físico supervisadas en temporada de verano y fines de semana largos. El acceso es gratuito o de cuota mínima para vecinos. Las ligas internas de fútbol son de las más activas de la zona oriente de CDMX — si jugás fútbol y vives en Moctezuma, esta es la referencia directa para unirte.',
      },
      {
        q: '¿Cómo me entero de los retos y eventos de los gimnasios de Moctezuma?',
        a: 'La comunicación de los gymns de Moctezuma es principalmente por Instagram y grupos de WhatsApp de socios. Los retos internos se anuncian al inicio de cada trimestre en el tablón del gym y en el grupo de socios. Para eventos externos o colaboraciones con otros espacios, la información circula con 1-2 semanas de anticipación. Lo más práctico es pedir al gym que te agreguen al grupo de comunicación en el momento de inscribirte — ahí van los avisos antes que en cualquier otro canal. Algunos gymns también usan Facebook para anuncios de eventos públicos.',
      },
      {
        q: '¿Hay grupos de running en Moctezuma?',
        a: 'Hay grupos de running informales sobre Av. Oceanía y por las calles internas del barrio — la organización es vecinal y sin estructura formal. Los sábados entre 7 y 8:30am salen grupos de diferentes ritmos desde puntos de la avenida o desde la Unidad Deportiva. El recorrido típico es de 5 a 10km según el grupo. Para encontrarlos, la mejor forma es buscar en grupos de Facebook o WhatsApp de vecinos de Moctezuma, o preguntar directamente en los gymns de Oceanía si tienen grupo de running activo o conocen alguno del barrio.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Retos internos',       value: '2 veces/año' },
      { label: 'Unidad Deportiva',     value: 'Acceso gratuito vecinos' },
      { label: 'Running grupos',       value: 'Sábados 7-8:30am Oceanía' },
      { label: 'Perfil eventos',       value: 'Comunitario / barrial' },
    ],
    barrios: [
      { name: 'Jardín Balbuena',        slug: 'jardin-balbuena',        district: 'venustiano-carranza' },
      { name: 'Peñón de los Baños',     slug: 'penon-banos',            district: 'venustiano-carranza' },
      { name: 'Viaducto Piedad',        slug: 'viaducto-piedad',        district: 'iztacalco' },
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
    h1: 'Bienestar en Moctezuma',
    metaDesc: 'Bienestar en Moctezuma, CDMX: nutriólogos y masajes de $270 a $750 MXN. Av. Oceanía. NSE C, accesible, sin branding. Guía 2026.',
    intro: `El bienestar en Moctezuma tiene la honestidad del barrio: precios alineados con NSE C, servicios funcionales sin decoración aspiracional, y atención de nutriólogos y terapeutas que llevan años trabajando con la misma clientela. Sobre Av. Oceanía y calles del barrio hay consultorios de nutrición clínica, centros de masaje terapéutico y algunos consultorios de medicina general que integran orientación de actividad física básica en su atención.

Los nutriólogos de Moctezuma tienen consultas iniciales de $400 a $750 MXN y seguimientos mensuales de $270 a $450 MXN — alineados con el ingreso del barrio y sostenibles para quien quiere atención continua sin descapitalizarse. El enfoque es práctico: alimentación que funcione con la cocina y la economía real del cliente, sin planes imposibles de seguir en una familia de clase media trabajadora.

Los masajes terapéuticos son el servicio de recuperación más demandado y más accesible: deep tissue y relajante de $300 a $650 MXN por sesión de 60 minutos en centros sobre Moctezuma y Oceanía. La Unidad Deportiva suma con acceso a instalaciones deportivas de bajo costo. Ahorita el ecosistema de bienestar de Moctezuma es uno de los más honestos del oriente de CDMX — sin pretensiones de ser otra cosa que lo que necesita el barrio.`,
    faq: [
      {
        q: '¿Hay nutriólogos accesibles en Moctezuma?',
        a: 'Sí, güey — Moctezuma tiene consultorios de nutrición con precios entre los más accesibles del oriente de CDMX. La consulta inicial va de $400 a $750 MXN con evaluación de hábitos alimenticios y plan básico incluido. Los seguimientos mensuales están entre $270 y $450 MXN — precio que permite atención continua para quien tiene presupuesto ajustado. El enfoque de los nutriólogos de la zona es muy práctico: planes que funcionen con los ingredientes y el tiempo disponible de una familia de clase media, sin ingredientes importados ni superfoods inasequibles.',
      },
      {
        q: '¿Qué servicios de recuperación muscular hay en Moctezuma?',
        a: 'Los masajes terapéuticos — deep tissue, relajante y liberación miofascial — son el servicio más accesible y disponible en la zona. Los precios van de $300 a $650 MXN por sesión de 60 minutos en centros sobre Calle Moctezuma y Av. Oceanía. No hay crioterapia ni compresión neumática avanzada en Moctezuma — para eso el destino más cercano es zonas al poniente con mayor oferta de recuperación especializada. Para recuperación post-entrenamiento semanal con masaje, la oferta de Moctezuma es completa y a precio que permite hacerlo de manera regular.',
      },
      {
        q: '¿Hay servicios de bienestar mental en Moctezuma?',
        a: 'Hay algunos consultorios de psicología clínica y trabajo social en la zona — sobre todo en centros de salud de la delegación que ofrecen atención a precio de cuota de recuperación (muy bajo o gratuito para vecinos con CURP). Para psicología privada con enfoque en bienestar y gestión del estrés, hay consultorios sobre Av. Oceanía con precios de $500 a $900 MXN por sesión. La oferta es menor en densidad que en zonas como Coyoacán o Doctores, pero para las demandas habituales del barrio — ansiedad laboral, estrés familiar, manejo de hábitos — hay opciones funcionales disponibles.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',  value: '$400–$750 MXN' },
      { label: 'Masaje terapéutico',  value: '$300–$650 MXN' },
      { label: 'Psicología privada',  value: '$500–$900 MXN' },
      { label: 'Salud pública',       value: 'Centros delegacionales gratis' },
    ],
    barrios: [
      { name: 'Jardín Balbuena',        slug: 'jardin-balbuena',        district: 'venustiano-carranza' },
      { name: 'Peñón de los Baños',     slug: 'penon-banos',            district: 'venustiano-carranza' },
      { name: 'Viaducto Piedad',        slug: 'viaducto-piedad',        district: 'iztacalco' },
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
