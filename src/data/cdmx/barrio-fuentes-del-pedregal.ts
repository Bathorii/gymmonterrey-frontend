// src/data/cdmx/barrio-fuentes-del-pedregal.ts
// Draft – lastReviewed: 2026-06-21

export const barrioContent = {
  nombre: 'Fuentes del Pedregal',
  slug: 'fuentes-del-pedregal',
  group: 'B',
  parentDistrict: {
    nombre: 'Tlalpan',
    slug: 'tlalpan',
  },
  lastReviewed: '2026-06-21',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Fuentes del Pedregal es una de esas colonias residenciales de Tlalpan que el fitness chilango está descubriendo ahorita — tranquila, arbolada, con vecinos que ya tienen el hábito del ejercicio pero que hasta hace poco tenían que cruzar al Perisur o hasta Coyoacán para encontrar algo decente. Sobre Insurgentes Sur y el Periférico el tráfico pega duro en horas pico, pero las calles internas sobre Fuentes del Pedregal son caminables a cualquier hora.

El perfil NSE C+ y la cercanía al metro Universidad están jalando estudios boutique que antes solo apostaban por Coyoacán o el sur de Insurgentes. El güey que entrena acá es profesionista de 30-45 años, con carro, que prefiere no batallar con el tráfico de la CDMX si puede evitarlo. Los precios son chidos — cerca de un 20% más económicos que los boutiques de Coyoacán por servicio comparable, y eso está empezando a correr por recomendación.

Para el vecino de Fuentes del Pedregal que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Fuentes del Pedregal en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Fuentes del Pedregal — Fitness residencial Tlalpan 2026',
    metaDesc: 'Gimnasios en Fuentes del Pedregal, Tlalpan: opciones de $800 a $2,000 MXN/mes. Insurgentes Sur, Periférico Sur. Guía de Rodrigo 2026.',
    intro: `Fuentes del Pedregal tiene una oferta de gimnasios que todavía está creciendo, güey — en 2026 hay alrededor de 12 a 15 opciones entre gyms de barrio, cadenas medianas y los primeros boutiques que están llegando sobre Insurgentes Sur. La densidad no se compara con Coyoacán ni con el sur de Insurgentes, pero eso también significa que los precios siguen siendo accesibles y que no hay que reservar con días de anticipación para conseguir lugar en una clase.

Los gyms de toda la vida sobre Fuentes del Pedregal y las calles internas cobran entre $800 y $1,200 MXN al mes — equipamiento funcional, pesas libres, y horarios amplios de lunes a sábado. Las opciones con más producción sobre Insurgentes Sur suben a $1,500–$2,000 MXN al mes, todavía un 20% por debajo de lo que pagarías sobre Francisco Sosa en Coyoacán por un servicio similar. Esa brecha de precio es el argumento más fuerte de la colonia ahorita.

El acceso en transporte público es viable: la estación Metro Universidad de la línea 3 está a menos de 15 minutos caminando desde el corazón de la colonia, y el Metrobús sobre Insurgentes Sur cubre el corredor completo. Para quien viene en carro, el Periférico Sur conecta rápido con Villa Coapa y Toriello Guerra. El horario más tranquilo para entrenar sin batallar con tráfico: entre semana de 8 a 10am y después de las 21hs.`,
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Fuentes del Pedregal comparado con Coyoacán?',
        a: 'En Fuentes del Pedregal una membresía estándar está entre $800 y $1,500 MXN al mes. Los boutiques nuevos sobre Insurgentes Sur llegan a $1,800–$2,000 MXN. Eso es aproximadamente un 20% más económico que lo que encuentras en Coyoacán Centro o Villa Coyoacán por un servicio comparable. Si el presupuesto importa pero no quieres sacrificar calidad de equipamiento ni ambiente, Fuentes del Pedregal es una alternativa real y chida.',
      },
      {
        q: '¿Se puede llegar sin carro a los gimnasios de Fuentes del Pedregal?',
        a: 'Sí, sobre Insurgentes Sur el Metrobús llega directo y Metro Universidad está a unos 12-15 minutos caminando desde las calles internas. Los gyms más alejados del corredor de Insurgentes sí son más cómodos en carro, pero la mayoría de las opciones nuevas se están ubicando estratégicamente cerca del transporte. En hora pico de Periférico y de Insurgentes, el carro puede ser más lento que el transporte público — ahorita ya hay cuates que combinan Metro más caminata.',
      },
      {
        q: '¿Hay estudios boutique de pilates o yoga en Fuentes del Pedregal?',
        a: 'Están llegando, pero la oferta boutique es todavía pequeña — dos o tres estudios de pilates y yoga en 2026, contra la docena que tiene Coyoacán. Lo bueno es que los estudios que están llegando saben que compiten por precio: clases sueltas de $180 a $280 MXN y paquetes mensuales desde $1,200 MXN. Si quieres variedad boutique amplia hoy, Coyoacán Centro sigue siendo más completo; si prefieres pagar menos y en ambiente más tranquilo, Fuentes del Pedregal va creciendo rápido.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Fuentes del Pedregal tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Fuentes del Pedregal suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~12–15' },
      { label: 'Membresía mensual', value: '$800–$2,000 MXN' },
      { label: 'Calle clave',       value: 'Insurgentes Sur · Fuentes del Pedregal' },
      { label: 'Metro más cercano', value: 'Metro Universidad (Línea 3)' },
    ],
    barrios: [
      { name: 'Villa Coapa',      slug: 'villa-coapa',      district: 'tlalpan' },
      { name: 'Toriello Guerra',  slug: 'toriello-guerra',  district: 'tlalpan' },
      { name: 'Coyoacán Centro',  slug: 'coyoacan-centro',  district: 'coyoacan' },
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
    h1: 'Estudios fitness en Fuentes del Pedregal',
    metaDesc: 'Estudios en Fuentes del Pedregal, Tlalpan: pilates y yoga de $180 a $280 MXN/clase. Boutiques creciendo sobre Insurgentes Sur. Guía 2026.',
    intro: `Los estudios boutique en Fuentes del Pedregal son todavía pocos pero ya están haciendo ruido, güey. En 2026 la oferta ronda los 4 a 6 estudios entre pilates, yoga funcional y algún espacio de movilidad — nada que se compare con la densidad de Coyoacán, pero con la ventaja clave de que los precios son los más accesibles del sur de Insurgentes sur del anillo del Periférico. El vecindario está respondiendo bien: los estudios que abrieron en 2024 y 2025 reportan ocupación creciente sin necesidad de campañas de marketing pesadas, puro boca en boca entre residentes.

El precio de una clase suelta está entre $180 y $280 MXN — un 20 a 25% menos que los estudios de Coyoacán Centro que ofrecen la misma calidad de instrucción. Los paquetes mensuales de 8 a 12 clases van de $1,200 a $1,800 MXN, y algunos estudios ofrecen membresía ilimitada desde $1,600 MXN al mes. La clase de prueba con descuento del 50% es práctica común acá para captar nuevos alumnos.

El perfil de instructores es sólido: certificaciones internacionales, grupos pequeños de 6 a 10 personas y atención personalizada que los boutiques grandes de Coyoacán no pueden garantizar en sus horarios pico. Para quien vive en la colonia o llega desde Villa Coapa o Toriello Guerra, estos estudios son una opción real ahorita — sin el tráfico de cruzar a Coyoacán y sin pagar la prima de esa zona.`,
    faq: [
      {
        q: '¿Cuánto cuesta una clase de pilates en Fuentes del Pedregal?',
        a: 'Una clase suelta de pilates Reformer en los estudios de Fuentes del Pedregal está entre $200 y $280 MXN. Los paquetes de 8 clases con vigencia de 30 días van de $1,200 a $1,600 MXN. Algunos estudios tienen plan ilimitado desde $1,600 MXN al mes — si vas tres o más veces por semana, es la opción más inteligente financieramente. La clase de prueba suele costar $100–$150 MXN.',
      },
      {
        q: '¿Qué tan buenos son los instructores de yoga en Fuentes del Pedregal?',
        a: 'Los instructores de los estudios nuevos que llegaron a partir de 2024 tienen formación seria — certificaciones de 200 horas mínimo, varios con entrenamiento en Coyoacán o Roma Norte antes de abrir sus propios espacios acá. El tamaño pequeño del grupo, máximo 10 personas, permite corrección individualizada que los estudios grandes no pueden dar. Para nivel principiante e intermedio la calidad es comparable a Coyoacán; para práctica muy avanzada o especializada, todavía hay más opciones en el norte de la delegación.',
      },
      {
        q: '¿Vale la pena ir a un estudio de Fuentes del Pedregal si vivo en Coyoacán?',
        a: 'Depende del tráfico que estés dispuesto a aguantar. Si vives cerca del Periférico o sobre Insurgentes Sur, Fuentes del Pedregal puede ser más accesible que el centro de Coyoacán en horas pico. El ahorro de precio es real — un 20% menos por la misma calidad de instrucción. Pero si ya tienes estudio cerca de tu casa en Coyoacán y el precio no es el problema, no hay motivo para cruzar. Donde sí tiene sentido es para los vecinos de Villa Coapa y Toriello Guerra que antes no tenían opción boutique cercana.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios boutique', value: '~4–6' },
      { label: 'Clase suelta',      value: '$180–$280 MXN' },
      { label: 'Paquete mensual',   value: '$1,200–$1,800 MXN' },
      { label: 'Grupos',            value: 'Máx. 6–10 personas' },
    ],
    barrios: [
      { name: 'Villa Coapa',      slug: 'villa-coapa',      district: 'tlalpan' },
      { name: 'Toriello Guerra',  slug: 'toriello-guerra',  district: 'tlalpan' },
      { name: 'Coyoacán Centro',  slug: 'coyoacan-centro',  district: 'coyoacan' },
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
    h1: 'Entrenadores personales en Fuentes del Pedregal',
    metaDesc: 'Entrenadores personales en Fuentes del Pedregal, Tlalpan: sesiones de $400 a $800 MXN. Coaches a domicilio y en gimnasio disponibles 2026.',
    intro: `El mercado de entrenadores personales en Fuentes del Pedregal está creciendo junto con la colonia — en 2026 hay una base de coaches locales que trabajan tanto en los gimnasios del corredor de Insurgentes Sur como a domicilio en las casas y condominios de la zona. El perfil del cliente es el profesionista que no tiene tiempo de batallar con tráfico para ir a un estudio, y que prefiere que el entrenamiento llegue a él o estar en un gym a cinco minutos de su casa. El costo de una sesión de entrenamiento personal en Fuentes del Pedregal está entre $400 y $700 MXN la hora, dependiendo de la certificación y experiencia del coach. Los paquetes de 8 sesiones mensuales van de $2,800 a $4,800 MXN. Eso es entre un 15 y un 20% más accesible que el mismo perfil de entrenador en Coyoacán o San Ángel — la diferencia viene del costo de vida local y de que los coaches acá no tienen que pagar renta de boutique en zonas premium. Para entrenamiento a domicilio, la colonia es ideal: calles tranquilas, vecinos con jardín o espacio suficiente en departamentos, y condominios con área común que permiten sesiones sin necesidad de salir. Varios coaches de la zona ofrecen acompañamiento nutricional básico sin costo adicional para clientes con contrato mensual. La recomendación es pedirle al coach una sesión de evaluación antes de comprometerse — los coaches buenos la ofrecen sin costo`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Fuentes del Pedregal?',
        a: 'Una sesión de una hora con entrenador personal en Fuentes del Pedregal cuesta entre $400 y $700 MXN. Los coaches con certificaciones internacionales o especialización en rehabilitación pueden cobrar hasta $900 MXN. Los paquetes mensuales de 8 sesiones bajan el costo por sesión — desde $2,800 hasta $4,800 MXN dependiendo del coach. Es entre un 15 y 20% más económico que el mismo perfil de entrenador en Coyoacán.',
      },
      {
        q: '¿Hay entrenadores a domicilio disponibles en Fuentes del Pedregal?',
        a: 'Sí, y es una de las opciones más populares en la colonia. Los coaches que trabajan a domicilio en Fuentes del Pedregal cubren también Villa Coapa y Toriello Guerra sin costo de traslado adicional si la distancia es razonable. Normalmente llegan con bandas, TRX y material de movilidad — para entrenamiento de fuerza con pesas libres necesitas tener algo en casa o coordinar el uso de un área común del condominio.',
      },
      {
        q: '¿Cómo encuentro un entrenador confiable en Fuentes del Pedregal?',
        a: 'La red de recomendación del vecindario es la forma más rápida — grupos de WhatsApp de la colonia y redes de condominios tienen referencias reales. Los gyms del corredor de Insurgentes Sur también tienen tablero de coaches certificados que trabajan en sus instalaciones. Antes de contratar, pide ver la certificación vigente, un plan de entrenamiento de muestra y una sesión de evaluación. Un buen coach acá la ofrece sin problema.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión (1 hora)',    value: '$400–$700 MXN' },
      { label: 'Paquete mensual',    value: '$2,800–$4,800 MXN (8 ses.)' },
      { label: 'Modalidad popular',  value: 'Domicilio + gym local' },
      { label: 'Zona de cobertura',  value: 'Fuentes del Pedregal · Villa Coapa · Toriello' },
    ],
    barrios: [
      { name: 'Villa Coapa',      slug: 'villa-coapa',      district: 'tlalpan' },
      { name: 'Toriello Guerra',  slug: 'toriello-guerra',  district: 'tlalpan' },
      { name: 'Coyoacán Centro',  slug: 'coyoacan-centro',  district: 'coyoacan' },
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
    h1: 'Eventos fitness en Fuentes del Pedregal — Carreras y activaciones 2026',
    metaDesc: 'Eventos fitness en Fuentes del Pedregal y Tlalpan: carreras, bootcamps y activaciones al aire libre 2026. Periférico Sur y Metro Universidad.',
    intro: `La agenda de eventos fitness en Fuentes del Pedregal no es todavía tan densa como la de Coyoacán o Xochimilco, pero está creciendo ahorita con la comunidad del barrio. Los eventos que más jalan son las activaciones al aire libre organizadas por los estudios boutique locales — bootcamps en parques de la colonia, runs de barrio sobre el Periférico Sur en horario de cierre dominical, y clases abiertas de yoga funcional sin costo para presentarse ante el vecindario.

El Periférico Sur tiene tramos de cierre dominical que la comunidad de corredores de Tlalpan usa bien — la conectividad con Villa Coapa y Toriello Guerra hace que los grupos de running informales tengan alcance más amplio que solo la colonia. Las carreras organizadas más cercanas son las que se montan sobre Insurgentes Sur o en el Bosque de Tlalpan, a menos de 20 minutos en carro desde la colonia. Para competidores o corredores con mira en 10K y medio maratón, la conectividad de la zona con esas rutas es real.

Los estudios nuevos de la colonia están usando eventos gratuitos o a precio simbólico de $100–$200 MXN como estrategia de captación — chida oportunidad para probar instructores y comunidad antes de comprometer membresía. Seguir las redes sociales de los tres o cuatro estudios activos de Fuentes del Pedregal es la forma más rápida de enterarse de estas activaciones, que ahorita no tienen un hub centralizado de comunicación.`,
    faq: [
      {
        q: '¿Hay carreras o eventos de running cerca de Fuentes del Pedregal?',
        a: 'Las carreras organizadas más cercanas se montan sobre Insurgentes Sur o en el Bosque de Tlalpan. El Periférico Sur tiene tramos de cierre dominical que el vecindario usa para running informal desde temprano. Grupos organizados de corredores de Villa Coapa y Toriello Guerra tienen salidas que pasan por la colonia — busca en Facebook grupos como "Corredores Tlalpan" o "Running Sur CDMX" para unirte sin costo.',
      },
      {
        q: '¿Cuánto cuestan los eventos fitness en Fuentes del Pedregal?',
        a: 'Los bootcamps y clases abiertas que organizan los estudios de la colonia suelen ser gratuitos o con costo simbólico de $100 a $200 MXN para cubrir material. Las activaciones de apertura o aniversario de estudios son frecuentemente sin costo. Los eventos de carreras organizados formalmente sobre Insurgentes Sur tienen inscripción de $250 a $450 MXN según distancia y organización.',
      },
      {
        q: '¿Cómo me entero de los eventos fitness en la colonia?',
        a: 'La manera más práctica es seguir en Instagram y Facebook los estudios y gyms activos de Fuentes del Pedregal — los que están abriendo en 2025 y 2026 usan eventos como su principal herramienta de marketing de barrio. Los grupos de WhatsApp de condominios de la colonia también circulan avisos. No hay todavía un calendario centralizado de la zona como sí tiene Coyoacán, pero los estudios son receptivos si les escribes por DM preguntando por próximas activaciones.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gyms y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Bootcamp abierto',    value: 'Gratis–$200 MXN' },
      { label: 'Carreras cercanas',   value: 'Insurgentes Sur · Bosque de Tlalpan' },
      { label: 'Running dominical',   value: 'Periférico Sur (tramos cerrados)' },
      { label: 'Hub de eventos',      value: 'Redes de estudios locales' },
    ],
    barrios: [
      { name: 'Villa Coapa',      slug: 'villa-coapa',      district: 'tlalpan' },
      { name: 'Toriello Guerra',  slug: 'toriello-guerra',  district: 'tlalpan' },
      { name: 'Coyoacán Centro',  slug: 'coyoacan-centro',  district: 'coyoacan' },
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
    h1: 'Bienestar en Fuentes del Pedregal',
    metaDesc: 'Bienestar en Fuentes del Pedregal, Tlalpan: masajes deportivos, nutriólogos y recuperación de $350 a $900 MXN. Guía completa 2026.',
    intro: `El ecosistema de bienestar en Fuentes del Pedregal sigue el mismo patrón que el fitness de la colonia: pequeño pero creciendo, con precios que todavía respetan el bolsillo del profesionista C+ que vive acá. En 2026 la oferta incluye centros de masaje deportivo, nutriólogos con consulta presencial y en línea, y uno o dos espacios de recuperación activa con servicios de crioterapia o compresión que llegaron con la ola boutique de los últimos dos años.

El servicio de bienestar más consolidado en la zona son los masajistas deportivos — varios trabajan de forma independiente en la colonia con agenda por WhatsApp y precios de $350 a $600 MXN la hora, más accesibles que los spas integrados de Coyoacán que suben a $700–$1,000 MXN. Para el cliente que busca masaje de recuperación post-entrenamiento sin el costo de spa premium, Fuentes del Pedregal tiene opciones reales ahorita.

Nutrición es otro punto fuerte: la cercanía con las universidades del sur (UNAM, La Salle) atrae nutriólogos con formación reciente que abren consultorio en la zona residencial. Una consulta inicial está entre $400 y $700 MXN; el seguimiento mensual entre $800 y $1,500 MXN incluyendo plan alimentario actualizado. Varios ofrecen consulta por videollamada para los que prefieren no salir de casa en horas de tráfico. La combinación de precio accesible y formación académica sólida hace de esta oferta de nutrición una de las más interesantes del corredor sur de Tlalpan.`,
    faq: [
      {
        q: '¿Cuánto cuesta un masaje deportivo en Fuentes del Pedregal?',
        a: 'Un masaje deportivo de una hora con masajista independiente en Fuentes del Pedregal está entre $350 y $600 MXN. Los centros de masaje con instalaciones más formales suben a $600–$800 MXN. Para masaje de recuperación post-entrenamiento de 45 minutos, el precio baja a $280–$400 MXN. Todo esto está entre un 20 y 30% más accesible que los spas de Coyoacán Centro que ofrecen el mismo servicio.',
      },
      {
        q: '¿Hay nutriólogos especializados en rendimiento deportivo en la zona?',
        a: 'Sí, la cercanía con la UNAM y La Salle trae nutriólogos con formación reciente que se especializan en rendimiento y composición corporal. La consulta inicial está entre $400 y $700 MXN; seguimiento mensual de $800 a $1,500 MXN. Varios ofrecen plan de alimentación personalizado desde la primera consulta. La recomendación es pedir referencias explícitas de clientes con objetivos similares a los tuyos antes de contratar.',
      },
      {
        q: '¿Hay servicios de recuperación activa como crioterapia en Fuentes del Pedregal?',
        a: 'Hay uno o dos espacios que en 2025-2026 incorporaron servicios de recuperación activa — compresión neumática y frío localizado principalmente. No es todavía la oferta amplia que tiene el Parque Estadio en Coyoacán o algunas clínicas de la Insurgentes norte, pero sí hay opciones para el corredor del sur de Tlalpan. Precio de sesión de recuperación: $300–$500 MXN. Para servicios más especializados de criocámara completa todavía hay que cruzar a Coyoacán o más al norte.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Masaje deportivo (1 hr)', value: '$350–$600 MXN' },
      { label: 'Consulta nutrición',      value: '$400–$700 MXN' },
      { label: 'Seguimiento mensual',     value: '$800–$1,500 MXN' },
      { label: 'Recuperación activa',     value: '$300–$500 MXN/sesión' },
    ],
    barrios: [
      { name: 'Villa Coapa',      slug: 'villa-coapa',      district: 'tlalpan' },
      { name: 'Toriello Guerra',  slug: 'toriello-guerra',  district: 'tlalpan' },
      { name: 'Coyoacán Centro',  slug: 'coyoacan-centro',  district: 'coyoacan' },
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
