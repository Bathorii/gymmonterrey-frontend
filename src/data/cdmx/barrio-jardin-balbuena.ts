// src/data/cdmx/barrio-jardin-balbuena.ts
// Draft – lastReviewed: 2026-06-21

export const barrioContent = {
  nombre: 'Jardín Balbuena',
  slug: 'jardin-balbuena',
  group: 'B',
  parentDistrict: {
    nombre: 'Venustiano Carranza',
    slug: 'venustiano-carranza',
  },
  lastReviewed: '2026-06-21',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Jardín Balbuena es la colonia del oriente que más en serio se toma el fitness en toda Venustiano Carranza, güey. La razón es obvia: la Ciudad Deportiva está literalmente sobre Circunvalación, con alberca olímpica, pistas de atletismo, canchas y el Velódromo a menos de diez minutos caminando para cualquier vecino de la colonia. El Foro Sol le da un perfil de barrio activo y con movimiento que las colonias del oriente no suelen tener. La comunidad que entrena acá es diversa y auténtica — no es el mercado de boutique de Roma Norte ni el C+ aspiracional de Polanco, sino cuates que llevan años en la pista, la alberca o el box desde chamaco. Los precios reflejan eso: sin pretensiones, sin producción cara, pero con coaches que saben lo que hacen y con instalaciones públicas de las mejores de la ciudad. Sobre Congreso de la Unión y Circunvalación está la mayor concentración de opciones privadas de la colonia — gyms y academias que llevan años sirviendo al vecindario sin necesidad de escaparate.

Para el vecino de Jardín Balbuena que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Jardín Balbuena en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Jardín Balbuena — Fitness oriente CDMX 2026',
    metaDesc: 'Gimnasios en Jardín Balbuena, Venustiano Carranza: opciones de $600 a $1,500 MXN/mes. Ciudad Deportiva, Circunvalación. Guía de Rodrigo 2026.',
    intro: `Jardín Balbuena tiene alrededor de 10 a 14 gimnasios entre opciones privadas y el complejo de instalaciones de la Ciudad Deportiva — que técnicamente no es un gym privado pero en la práctica funciona como el mejor equipamiento de bajo costo del oriente del CDMX. El INDEPORTE gestiona las instalaciones deportivas de la Ciudad Deportiva con cuotas municipales que van de $200 a $500 MXN al mes según modalidad, lo cual hace que comparar solo gyms privados dé una imagen incompleta del mercado. Los gimnasios privados de la colonia sobre Congreso de la Unión y Circunvalación tienen precios entre $600 y $1,200 MXN al mes — rango C+ sin pretensiones boutique, equipamiento funcional serio, horarios amplios. A diferencia del poniente, acá no hay inflación de precio por branding ni por costo inmobiliario: pagas la membresía y entrenas, sin extras. Eso es exactamente lo que busca el vecindario de Balbuena y de la Moctezuma. El acceso en transporte es muy bueno: Metro Velódromo y Metro Ciudad Deportiva en la línea 9 conectan directo con el corazón de la zona deportiva. Para quien viene del Viaducto Piedad o de Iztacalco, el recorrido es de 15-20 minutos sin tráfico. El Foro Sol no complica el acceso a los gimnasios de Jardín Balbuena excepto los días de evento grande, cuando el tráfico sobre Circunvalación se traba después de las 18hs. La recomendación para esos días: llegar antes de las 17hs o después de las 20hs.`,
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Jardín Balbuena comparado con Roma Norte?',
        a: 'Los gymns privados de Jardín Balbuena están entre $600 y $1,200 MXN al mes — aproximadamente un 25 a 40% más económico que el equivalente en Roma Norte. Si sumas las instalaciones de la Ciudad Deportiva con cuotas desde $200 MXN al mes por disciplina, la diferencia es mayor todavía. La brecha de precio no refleja brecha de calidad en infraestructura: la Ciudad Deportiva tiene alberca olímpica y pistas que Roma Norte no puede igualar.',
      },
      {
        q: '¿Las instalaciones de la Ciudad Deportiva están abiertas al público general?',
        a: 'Sí, con registro y cuota municipal. Las instalaciones de la Ciudad Deportiva operadas por INDEPORTE permiten acceso a vecinos de la CDMX con credencial oficial. Alberca, pistas de atletismo, canchas y sala de pesas tienen horarios de acceso público con cuotas de $200 a $500 MXN al mes según modalidad. Hay que ir a registrarse presencialmente con credencial — no hay sistema de registro en línea estable ahorita. Vale la pena el trámite.',
      },
      {
        q: '¿Cuál es la mejor zona de Jardín Balbuena para encontrar gimnasio?',
        a: 'Sobre Circunvalación y Congreso de la Unión está la mayor concentración de opciones privadas. Para instalaciones públicas, la Ciudad Deportiva en sí es el hub — entras por las puertas sobre Circunvalación. Metro Velódromo te deja a 5 minutos caminando del Velódromo y a 10 de la alberca. Si buscas artes marciales o box, sobre Congreso de la Unión hay varios espacios serios con trayectoria de más de 10 años en la colonia.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Jardín Balbuena tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Jardín Balbuena suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios privados',   value: '~10–14' },
      { label: 'Membresía mensual',    value: '$600–$1,200 MXN' },
      { label: 'Ciudad Deportiva',     value: '$200–$500 MXN/mes (INDEPORTE)' },
      { label: 'Metro más cercano',    value: 'Velódromo / Ciudad Deportiva (L9)' },
    ],
    barrios: [
      { name: 'Viaducto Piedad',       slug: 'viaducto-piedad',  district: 'iztacalco' },
      { name: 'Moctezuma',             slug: 'moctezuma',         district: 'venustiano-carranza' },
      { name: 'Peñón de los Baños',    slug: 'penon-banos',       district: 'venustiano-carranza' },
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
    h1: 'Estudios fitness en Jardín Balbuena',
    metaDesc: 'Estudios en Jardín Balbuena: box, karate, natación y funcional de $150 a $350 MXN/clase. Ciudad Deportiva y Circunvalación. Guía 2026.',
    intro: `Los estudios de Jardín Balbuena son un animal diferente a los boutiques del poniente de la ciudad — y eso es un chido, no un defecto. Acá la tradición deportiva pesa: academias de box con 20 años de historia sobre Congreso de la Unión, clubes de atletismo que se entrenan en las pistas del Velódromo, escuelas de artes marciales con linaje serio, y clases de natación en la alberca olímpica de la Ciudad Deportiva que no tienen equivalente de calidad en ningún gym privado del poniente. Lo que sí está llegando ahorita son los estudios de funcional y movilidad más modernos — dos o tres espacios abiertos en 2024-2025 que trabajan con programación periodizada, grupos pequeños y coaching individual en cada sesión. El precio de estos estudios nuevos está entre $180 y $350 MXN por clase suelta, y paquetes mensuales de $1,200 a $1,800 MXN — más accesible que cualquier boutique comparable en Roma Norte o Condesa. La clientela los está descubriendo por recomendación: el boca en boca funciona bien en esta colonia. Para quien busca disciplinas olímpicas o deportes de base, Jardín Balbuena tiene una concentración que pocas colonias de la CDMX pueden igualar. Natación sincronizada, clavados, atletismo de pista, ciclismo en pista — todo con entrenadores que tienen experiencia en competencia, no solo en fitness comercial. El acceso por Metro Velódromo o Ciudad Deportiva hace que llegar sin carro sea más cómodo que a muchos estudios boutique del centro.`,
    faq: [
      {
        q: '¿Hay clases de box o artes marciales serias en Jardín Balbuena?',
        a: 'Sí, y son de las mejores del oriente de la ciudad. Sobre Congreso de la Unión hay academias de box thai, karate y lucha con entrenadores que tienen trayectoria en competencia federal. El precio de una clase suelta va de $80 a $200 MXN; membresías mensuales entre $600 y $1,000 MXN. Son espacios sin producción boutique pero con nivel técnico que los gyms de funcional moderno no tienen. Si el objetivo es aprender el deporte de verdad, estas academias son el camino.',
      },
      {
        q: '¿Puedo nadar en la alberca olímpica de la Ciudad Deportiva?',
        a: 'Sí, con registro en INDEPORTE y cuota mensual de alrededor de $300–$500 MXN por acceso a natación. La alberca tiene carriles libres en horarios establecidos y clases con instructor para distintos niveles. El proceso de registro es presencial con credencial oficial. La alberca es olímpica de 50 metros — para el nadador serio o el triatleta que vive en el oriente, no hay instalación privada en la zona que se le acerque.',
      },
      {
        q: '¿Hay estudios de yoga o pilates en Jardín Balbuena?',
        a: 'La oferta de yoga y pilates es más limitada que en colonias del poniente, pero existe. Hay dos o tres estudios de yoga con clases de $120 a $200 MXN y grupos de hasta 15 personas — más grande que un boutique de Roma Norte pero más asequible. Pilates Reformer específicamente es escaso en Balbuena; lo más cercano con equipamiento completo está en Iztacalco o en la Moctezuma. Si el pilates Reformer es la prioridad, habría que cruzar al Viaducto Piedad o más al poniente.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Academias deportivas', value: '~8–12 (box, karate, atletismo)' },
      { label: 'Clase suelta funcional', value: '$180–$350 MXN' },
      { label: 'Alberca olímpica',     value: 'Ciudad Deportiva ($300–$500 MXN/mes)' },
      { label: 'Paquete mensual',      value: '$1,200–$1,800 MXN' },
    ],
    barrios: [
      { name: 'Viaducto Piedad',       slug: 'viaducto-piedad',  district: 'iztacalco' },
      { name: 'Moctezuma',             slug: 'moctezuma',         district: 'venustiano-carranza' },
      { name: 'Peñón de los Baños',    slug: 'penon-banos',       district: 'venustiano-carranza' },
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
    h1: 'Entrenadores personales en Jardín Balbuena — Coaches deportivos 2026',
    metaDesc: 'Entrenadores en Jardín Balbuena, Venustiano Carranza: sesiones de $300 a $600 MXN. Coaches en Ciudad Deportiva y a domicilio. Guía 2026.',
    intro: `El mercado de entrenadores personales en Jardín Balbuena tiene una característica que pocas colonias de la CDMX pueden ofrecer: acceso a coaches con experiencia real en competencia deportiva, no solo en fitness comercial. Sobre las instalaciones de la Ciudad Deportiva trabajan entrenadores de atletismo, natación y ciclismo con trayectoria en competencia federada que también aceptan clientes particulares fuera de sus horas de entrenamiento de equipo.

El costo de sesiones en Jardín Balbuena es de los más accesibles de la ciudad para la calidad de experiencia que se consigue. Una sesión de entrenamiento personal general está entre $300 y $550 MXN la hora; los coaches especializados en deporte olímpico o de alto rendimiento pueden cobrar $600–$800 MXN por la especificidad del conocimiento. Los paquetes mensuales de 8 sesiones van de $2,000 a $3,800 MXN — entre un 20 y 35% más económico que un coach equivalente en Roma Norte o Polanco.

Para entrenamiento funcional y preparación física general, la zona tiene coaches independientes que trabajan tanto en los gymns privados de Circunvalación como a domicilio en la colonia y en Moctezuma. La recomendación de Rodrigo: si tu objetivo es rendimiento deportivo real — ya sea atletismo, natación o deportes de combate — Jardín Balbuena tiene acceso a entrenadores que son difíciles de encontrar en el poniente a ningún precio. Para fitness general y composición corporal, el precio es chido y el nivel técnico es sólido.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Jardín Balbuena?',
        a: 'Una sesión de una hora está entre $300 y $550 MXN para entrenamiento funcional general. Coaches especializados en atletismo, natación competitiva o deportes de combate con experiencia federada pueden cobrar $600–$800 MXN. Paquetes mensuales de 8 sesiones: $2,000–$3,800 MXN. Es entre un 20 y 35% más accesible que el mismo perfil en Roma Norte o Condesa.',
      },
      {
        q: '¿Cómo contacto a los entrenadores de la Ciudad Deportiva para sesiones privadas?',
        a: 'Presentándote directamente en las instalaciones en horario de entrenamiento — los coaches de atletismo, natación y ciclismo tienen horarios fijos en las pistas y alberca. Muchos aceptan clientes particulares en horarios no reservados para sus equipos. También puedes preguntar en la administración de INDEPORTE en la Ciudad Deportiva si tienen registro de entrenadores disponibles para sesiones privadas. No hay plataforma digital de matchmaking acá — el contacto es directo.',
      },
      {
        q: '¿Hay entrenadores a domicilio disponibles en Jardín Balbuena?',
        a: 'Sí, pero la modalidad a domicilio es menos común que en las colonias del poniente donde el cliente típico tiene más espacio en casa. Los coaches independientes que trabajan en los gymns de Circunvalación suelen aceptar sesiones a domicilio en la colonia y Moctezuma sin costo adicional de traslado. El perfil de entrenamiento a domicilio en Balbuena es más de funcional con peso corporal y bandas — para pesas libres serias el gym privado sigue siendo la opción más práctica.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión (1 hora)',      value: '$300–$550 MXN' },
      { label: 'Coach especializado',  value: '$600–$800 MXN' },
      { label: 'Paquete mensual',      value: '$2,000–$3,800 MXN (8 ses.)' },
      { label: 'Perfil diferenciador', value: 'Coaches con trayectoria en competencia' },
    ],
    barrios: [
      { name: 'Viaducto Piedad',       slug: 'viaducto-piedad',  district: 'iztacalco' },
      { name: 'Moctezuma',             slug: 'moctezuma',         district: 'venustiano-carranza' },
      { name: 'Peñón de los Baños',    slug: 'penon-banos',       district: 'venustiano-carranza' },
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
    h1: 'Eventos fitness en Jardín Balbuena',
    metaDesc: 'Eventos deportivos en Jardín Balbuena: carreras, ciclismo y competencias en Ciudad Deportiva 2026. Foro Sol y Velódromo. Guía completa.',
    intro: `Jardín Balbuena tiene la agenda de eventos deportivos más activa del oriente del CDMX, güey — y tiene sentido porque tiene la infraestructura para sostenerla. El Velódromo Agustín Melgar es sede de eventos de ciclismo de pista con regularidad; la Ciudad Deportiva alberga competencias de atletismo, natación y artes marciales varios fines de semana al año; y el Foro Sol, aunque es venue de entretenimiento, genera una cultura de activación alrededor del barrio que las colonias sin un ancla de ese tamaño no tienen.

Las carreras populares son uno de los eventos más frecuentes sobre Circunvalación — el corredor es plano y amplio, lo cual lo hace ideal para 5K y 10K que organizan clubes locales y delegaciones. El costo de inscripción está entre $200 y $400 MXN con kit y chip incluidos. Los eventos de atletismo en la Ciudad Deportiva tienen acceso gratuito como espectador y cuotas de inscripción para participantes según la federación organizadora.

Para ciclistas, el Velódromo tiene sesiones públicas de pista los fines de semana con cuota de $80 a $150 MXN por sesión — acceso a pista de madera de competencia sin necesidad de ser federado. Eso es algo que no existe en ningún punto del poniente o centro de la ciudad. El calendario se comunica por Facebook de los clubes deportivos de la Ciudad Deportiva y por el portal de INDEPORTE — no hay hub centralizado, pero la información existe si sabes dónde buscar.`,
    faq: [
      {
        q: '¿Hay competencias de ciclismo en el Velódromo de Jardín Balbuena?',
        a: 'Sí, el Velódromo Agustín Melgar tiene competencias de ciclismo de pista con regularidad — desde categorías infantiles hasta masters. Las sesiones públicas de fin de semana para no-federados tienen cuota de $80 a $150 MXN por sesión con bicicleta propia. Para competer en eventos federados necesitas licencia, que INDEPORTE puede orientarte a tramitar. Es la única pista de madera de competencia de la CDMX con acceso público.',
      },
      {
        q: '¿Cuándo hay carreras en Jardín Balbuena o Circunvalación?',
        a: 'Los clubes de running locales organizan carreras populares sobre Circunvalación y en parques de la zona con frecuencia de cuatro a seis eventos al año. Adicionalmente, la delegación Venustiano Carranza organiza activaciones deportivas en fechas cívicas. Las inscripciones están entre $200 y $400 MXN. Busca en Facebook los grupos "Corredores Venustiano Carranza" y "Running Ciudad Deportiva CDMX" para enterarte de próximas fechas.',
      },
      {
        q: '¿El Foro Sol afecta el acceso a los gimnasios en días de evento?',
        a: 'En días de evento grande en el Foro Sol, el tráfico sobre Circunvalación y Congreso de la Unión se complica a partir de las 17-18hs y durante la salida del evento. Los gimnasios de Jardín Balbuena no suelen verse afectados en acceso si llegas antes de las 17hs o si vienes en Metro — Velódromo y Ciudad Deportiva están fuera del perímetro de mayor impacto. Los días de evento son de martes a domingo principalmente; los lunes son los más tranquilos del mes.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Carreras populares',    value: '4–6 al año sobre Circunvalación' },
      { label: 'Velódromo público',     value: '$80–$150 MXN/sesión (fines de semana)' },
      { label: 'Inscripción carrera',   value: '$200–$400 MXN con kit' },
      { label: 'Venue principal',       value: 'Ciudad Deportiva · Velódromo Agustín Melgar' },
    ],
    barrios: [
      { name: 'Viaducto Piedad',       slug: 'viaducto-piedad',  district: 'iztacalco' },
      { name: 'Moctezuma',             slug: 'moctezuma',         district: 'venustiano-carranza' },
      { name: 'Peñón de los Baños',    slug: 'penon-banos',       district: 'venustiano-carranza' },
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
    h1: 'Bienestar en Jardín Balbuena — Recuperación y salud deportiva 2026',
    metaDesc: 'Bienestar en Jardín Balbuena, Venustiano Carranza: masajes, fisioterapia y nutrición de $280 a $700 MXN. Guía completa 2026.',
    intro: `El ecosistema de bienestar en Jardín Balbuena está orientado más hacia la recuperación deportiva y la funcionalidad que hacia el bienestar de lifestyle — lo cual tiene perfecto sentido dado el perfil de la colonia. Los servicios que más se usan acá son fisioterapia deportiva, masaje de recuperación y nutrición para rendimiento, no spa con velas y música ambient. Eso se refleja en el precio y en el tipo de profesional disponible.

La fisioterapia es el servicio de bienestar más desarrollado en la zona — con la Ciudad Deportiva atrayendo atletas con lesiones, hay una base de fisioterapeutas con formación seria en el área que trabajan tanto de forma independiente como en clínicas de dos o tres gabinetes sobre Congreso de la Unión. Una sesión de fisioterapia deportiva está entre $350 y $600 MXN; el seguimiento post-lesión con plan de rehabilitación entre $1,500 y $2,800 MXN al mes. Son precios muy competitivos para el nivel de formación que se consigue acá.

Los masajistas deportivos independientes cobran $280 a $500 MXN por sesión — más accesible que cualquier spa del poniente y con foco en recuperación muscular. Para nutrición, hay un par de nutriólogos con especialidad en rendimiento que atienden a deportistas de la Ciudad Deportiva con consulta de $350 a $600 MXN. La combinación de precio accesible, especialización real y ubicación conveniente hace del bienestar en Balbuena un mercado honesto y sin inflación de marca.`,
    faq: [
      {
        q: '¿Cuánto cuesta la fisioterapia deportiva en Jardín Balbuena?',
        a: 'Una sesión de fisioterapia deportiva en Jardín Balbuena está entre $350 y $600 MXN. Los planes de rehabilitación post-lesión con seguimiento mensual van de $1,500 a $2,800 MXN. Los fisioterapeutas que trabajan cercanos a la Ciudad Deportiva tienen experiencia con lesiones de atletismo, natación y deportes de combate — perfil difícil de encontrar en el poniente a ese precio. Siempre pide ver la cédula profesional antes de iniciar tratamiento.',
      },
      {
        q: '¿Hay masajistas deportivos confiables en la colonia?',
        a: 'Sí, hay varios masajistas independientes con clientela establecida en la zona — recomendados dentro de la comunidad deportiva de la Ciudad Deportiva. El precio está entre $280 y $500 MXN por sesión de una hora de masaje deportivo o de recuperación. No tienen el branding ni el espacio de un spa de Roma Norte, pero el trabajo técnico es sólido. Pedí referencia a los coaches de la Ciudad Deportiva — ellos tienen los contactos confiables de la zona.',
      },
      {
        q: '¿Hay nutriólogos especializados en deporte en Jardín Balbuena?',
        a: 'Hay dos o tres nutriólogos en la zona con especialidad en rendimiento deportivo y composición corporal — uno de ellos trabaja en consulta a deportistas de la Ciudad Deportiva. La consulta inicial está entre $350 y $600 MXN; seguimiento mensual de $800 a $1,500 MXN con plan actualizado. Para objetivos de rendimiento competitivo, vale la pena buscar nutriólogo con experiencia en el deporte específico que practicas — acá hay opciones reales para atletismo, natación y artes marciales.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Fisioterapia (1 ses.)',  value: '$350–$600 MXN' },
      { label: 'Masaje deportivo',       value: '$280–$500 MXN/hora' },
      { label: 'Consulta nutrición',     value: '$350–$600 MXN' },
      { label: 'Rehabilitación mensual', value: '$1,500–$2,800 MXN' },
    ],
    barrios: [
      { name: 'Viaducto Piedad',       slug: 'viaducto-piedad',  district: 'iztacalco' },
      { name: 'Moctezuma',             slug: 'moctezuma',         district: 'venustiano-carranza' },
      { name: 'Peñón de los Baños',    slug: 'penon-banos',       district: 'venustiano-carranza' },
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
