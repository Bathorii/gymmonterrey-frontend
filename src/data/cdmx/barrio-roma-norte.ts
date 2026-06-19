// src/data/cdmx/barrio-roma-norte.ts
// Draft – lastReviewed: 2026-06-02

export const barrioContent = {
  nombre: 'Roma Norte',
  slug: 'roma-norte',
  group: 'A',
  parentDistrict: {
    nombre: 'Cuauhtémoc',
    slug: 'cuauhtemoc',
  },
  lastReviewed: '2026-06-02',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Roma Norte es la colonia más hipster y a la vez más genuina del fitness chilango. Sobre Orizaba y Álvaro Obregón se concentran boutiques de pilates, boxes de CrossFit y estudios de funcional que ya no piden disculpas por cobrar $2,500 MXN al mes — y los cuates igual hacen fila. El parque de la Av. Ámsterdam define el ritmo outdoor: corredores matutinos, ciclistas y calistenia en las bancas.

Llegar en Metro (Insurgentes en la línea 1) es viable, pero el estacionamiento en horas pico es un calvario. El sweet spot para entrenar sin pelea: entre semana antes de las 7am o después de las 21hs. Los fines de semana el Parque Ámsterdam se llena desde las 8am — outdoor gratis en el corazón de la colonia. Para quien vive o trabaja cerca de Roma Norte, la oferta fitness local es suficiente para entrenar con constancia sin necesidad de cruzar la ciudad ni pagar los precios de las zonas premium del CDMX, cuate.

Para el vecino de Roma Norte que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar.`,

  gimnasios: {
    h1: 'Gimnasios en Roma Norte — Boutique fitness y precios reales 2026',
    metaDesc: 'Gimnasios en Roma Norte, CDMX: ~30 opciones de $1,200 a $3,000 MXN/mes. Orizaba, Álvaro Obregón, Parque Ámsterdam. Guía de Rodrigo 2026.',
    intro: `Roma Norte tiene alrededor de 30 gimnasios y la densidad de boutiques más alta de la Cuauhtémoc. La concentración más fuerte está sobre Orizaba y sus transversales con Álvaro Obregón — tres cuadras donde conviven funcional box, pilates Reformer, spinning boutique y algún gym indie de toda la vida. El gimnasio de cadena está, pero no domina: aquí el mercado son los creativos, los nómadas digitales y los profesionales de 30-something que pagan la membresía como parte del estilo de vida.

Los precios son los más altos de la zona centro-sur del CDMX. Una membresía boutique estándar arranca en $1,500 MXN y llega fácil a $2,500 o $3,000 MXN con clases incluidas. Los gymns independientes sin branding cuidado pero con pesas libres serias se consiguen en $1,200–$1,600 MXN. La diferencia de precio refleja más el costo del inmueble que la calidad del entrenamiento — hay que tenerlo claro antes de firmar.

El Parque Ámsterdam tiene 1.2 km de circuito oval, iluminado y seguro, que el vecindario usa como pista de running desde las 6am. Los fines de semana el área se llena rápido — si prefieres entrenar sin multitudes, la ventana de 6-7am entre semana es la ideal.

La oferta local cubre los principales objetivos — fuerza, funcional y clases grupales — sin necesidad de cruzar la ciudad.`,
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio boutique sobre Orizaba en Roma Norte?',
        a: 'Los boutiques sobre Orizaba y Álvaro Obregón están en el rango de $1,800 a $2,800 MXN al mes con clases incluidas. Algunos cobran por clase suelta de $200 a $400 MXN. Los gymns más independientes de la zona, sin el branding cuidado pero con equipamiento funcional, van de $1,200 a $1,600 MXN. La inscripción adicional es común — entre $300 y $600 MXN. Siempre pregunta si incluye todas las clases o si hay cobro extra por disciplinas específicas.',
      },
      {
        q: '¿Qué tan caro es Roma Norte comparado con Roma Sur o Doctores?',
        a: 'Roma Norte es consistentemente un 25-35% más caro que Roma Sur y casi el doble que Doctores para el mismo tipo de servicio. Un gym funcional en Doctores que cobra $700-900 MXN al mes tiene el equivalente en Roma Norte a $1,400-1,800 MXN. La diferencia es el barrio y la producción — el entrenamiento de fondo suele ser comparable. Si el presupuesto es la variable crítica, Roma Sur o Doctores dan acceso a la misma calidad de movimiento sin pagar la prima de la colonia.',
      },
      {
        q: '¿Cuál es el mejor horario para entrenar en Roma Norte sin perder tiempo en tráfico?',
        a: 'Entre semana la ventana pre-7am y post-21hs tiene tráfico manejable. La hora pico de los boutiques es 7-9am y 18-20hs — en esos horarios las clases se reservan con 12-24 horas de anticipación o no hay lugar. El Parque Ámsterdam está menos concurrido de lunes a miércoles antes de las 7am. Para llegar sin estrés de estacionamiento, Metro Insurgentes y caminar 8 minutos es más rápido que dar tres vueltas buscando lugar.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de la colonia tienen mensualidades sin compromiso de contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gyms independientes suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~30' },
      { label: 'Membresía mensual', value: '$1,200–$3,000 MXN' },
      { label: 'Calle clave',       value: 'Orizaba · Álvaro Obregón' },
      { label: 'Outdoor',           value: 'Parque Ámsterdam (1.2 km oval)' },
    ],
    barrios: [
      { name: 'Condesa',  slug: 'condesa',  district: 'cuauhtemoc' },
      { name: 'Roma Sur', slug: 'roma-sur', district: 'cuauhtemoc' },
      { name: 'Juárez',   slug: 'juarez',   district: 'cuauhtemoc' },
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
    h1: 'Estudios fitness en Roma Norte — Pilates, yoga y funcional 2026',
    metaDesc: 'Estudios en Roma Norte, CDMX: pilates Reformer, yoga y CrossFit de $200 a $400 MXN/clase. Los mejores estudios sobre Orizaba y Álvaro Obregón. Guía 2026.',
    intro: `Roma Norte concentra la mayor densidad de estudios boutique de todo el CDMX por kilómetro cuadrado. Sobre Orizaba y sus transversales hay pilates Reformer con instructoras certificadas BASI, yoga en estudios con calefacción, boxes de CrossFit con coaching individual en cada clase y espacios de funcional con programación seria — todo en un radio caminable desde el Parque Ámsterdam.

El perfil de los estudios es coherente con el barrio: producción visual cuidada, comunidad activa en redes, instructoras que entienden de periodización y no solo de Instagram. Una clase suelta va de $200 a $400 MXN; los paquetes mensuales de 8-12 clases arrancan en $1,500 MXN y llegan a $2,800 MXN en los estudios más establecidos. No hay opción económica que se llame boutique acá — el barrio no lo permite.

Para quien quiere ir más de dos veces por semana, los planes ilimitados de algunos estudios sobre Orizaba son la opción más inteligente financieramente: $2,200-$2,800 MXN al mes contra $400 MXN por clase suelta. La diferencia se amortiza en la semana tres. La recomendación es reservar las clases con 24 horas de anticipación — los horarios de 7am y 7pm se llenan en minutos, especialmente jueves y viernes.

La variedad de horarios y formatos hace que siempre haya una opción que se ajuste a tu rutina en la colonia.`,
    faq: [
      {
        q: '¿Cuál es el costo de una clase de pilates Reformer en Roma Norte?',
        a: 'Una clase suelta de pilates Reformer sobre Orizaba o Álvaro Obregón cuesta entre $280 y $400 MXN. Los paquetes de 8 clases van de $1,800 a $2,400 MXN con vigencia de 30-45 días. Algunos estudios ofrecen clase de prueba con descuento de 50%. Los estudios más pequeños de las calles internas tienen precios ligeramente más accesibles — $220-$320 MXN por clase — sin sacrificar calidad del equipamiento.',
      },
      {
        q: '¿Vale la pena el yoga de Roma Norte contra opciones más baratas en la ciudad?',
        a: 'Si buscas yoga terapéutico serio o práctica avanzada con instructoras formadas en India, Roma Norte tiene oferta que pocas colonias pueden igualar. Para yoga básico o intermedio, la diferencia de calidad versus un estudio de $150 MXN por clase en otra colonia es menor. Mi posición honesta: para principiantes, el precio de Roma Norte es difícil de justificar. Para practicantes con más de 2 años de práctica seria, los estudios de acá sí entregan un nivel diferente.',
      },
      {
        q: '¿Con cuánta anticipación hay que reservar clases en Roma Norte?',
        a: 'Los horarios premium — 7am y 7pm de lunes a viernes — se agotan entre 12 y 24 horas antes. Los jueves y viernes por la tarde son los más saturados. La ventana más fácil para conseguir lugar sin planificación: martes y miércoles en horarios de 9-11am o 20-21hs. Si tu agenda es fija, vale la pena suscribirse a las notificaciones de cancelación de los estudios — suele haber liberaciones en las 2-3 horas previas a la clase.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios especializados', value: '15+' },
      { label: 'Clase suelta',            value: '$200–$400 MXN' },
      { label: 'Plan mensual',            value: '$1,500–$2,800 MXN' },
      { label: 'Disciplinas',             value: 'Pilates · Yoga · CrossFit' },
    ],
    barrios: [
      { name: 'Condesa',  slug: 'condesa',  district: 'cuauhtemoc' },
      { name: 'Roma Sur', slug: 'roma-sur', district: 'cuauhtemoc' },
      { name: 'Juárez',   slug: 'juarez',   district: 'cuauhtemoc' },
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
    h1: 'Entrenadores personales en Roma Norte — Fuerza, funcional y boxeo 2026',
    metaDesc: 'Entrenadores personales en Roma Norte, CDMX. Sesiones $600–$1,400 MXN. PTs especializados en boxeo, fuerza y funcional sobre Orizaba. Guía de Rodrigo 2026.',
    intro: `Roma Norte tiene una concentración de entrenadores personales que refleja perfectamente el perfil del barrio: PTs con certificaciones internacionales, especializaciones en composición corporal, preparación física para combate y funcional avanzado — y las tarifas van en consecuencia, de $700 a $1,400 MXN por sesión individual. Es el mercado más competitivo del CDMX para fitness personal, y eso significa que los malos entrenadores no sobreviven: la exigencia del cliente de Roma Norte filtra rápido.

Como boxeador amateur que sabe lo que busca en un PT, distinguir entre el entrenador con certificación de moda y el que entiende de periodización real importa. En Roma Norte los encuentras de los dos tipos — la clave es pedir metodología antes de pagar. Los mejores entrenadores del barrio tienen listas de espera. No es exageración: pregunta en cualquier gym sobre Orizaba y te van a decir que el PT bueno tiene cupo lleno.

Para quienes el presupuesto es una variable real, hay entrenadores con base en Roma Norte que atienden en parques cercanos — Parque Ámsterdam o Parque España — a tarifas más accesibles de $500 a $700 MXN. La sesión al aire libre con un PT serio que sabe usar el espacio outdoor es una opción legítima, especialmente en clima templado. El entrenamiento no necesita cuatro paredes para ser efectivo.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Roma Norte?',
        a: 'El rango en Roma Norte va de $600 a $1,400 MXN por sesión individual. Los PTs con certificaciones NSCA o CSCS y años de experiencia están en $900-$1,400. Los entrenadores con menos trayectoria pero buena formación arrancan en $600-$800. Para sesiones en parque (Ámsterdam o España) sin costo de sala, algunos entrenadores trabajan desde $500 MXN. Siempre pide una sesión de evaluación inicial — los buenos la ofrecen antes de venderte el paquete.',
      },
      {
        q: '¿Hay entrenadores especializados en boxeo o artes marciales en Roma Norte?',
        a: 'Sí, y es uno de los perfiles más buscados en el barrio. Hay coaches de boxeo amateur con experiencia en ring real — no solo fitness boxing — que trabajan tanto en boxes locales como en sesiones individuales. También encuentras entrenadores de Muay Thai, BJJ preparación física y MMA conditioning. Para ubicarlos, los boxes de CrossFit y functional training de Orizaba suelen tener o conocer entrenadores de combate. No son fáciles de googlear pero están en la red del barrio.',
      },
      {
        q: '¿Vale la pena contratar PT en Roma Norte si puedo ir solo al gym?',
        a: 'Para objetivos específicos — composición corporal, recuperación de lesión, preparación para competencia — la diferencia de resultado con y sin PT es real y medible. Para mantenimiento general y fitness básico, depende de tu disciplina de entrenamiento autónomo. Mi evaluación honesta: si llevas más de 6 meses entrenando sin progresión visible, 2-3 meses con un buen PT que te corrija la programación y la técnica vale más que seguir girando en el mismo lugar.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Entrenadores activos', value: '40+' },
      { label: 'Sesión individual',    value: '$600–$1,400 MXN' },
      { label: 'Outdoor disponible',   value: 'Parque Ámsterdam · Parque España' },
      { label: 'Especialidades',       value: 'Funcional · Boxeo · Composición corporal' },
    ],
    barrios: [
      { name: 'Condesa',  slug: 'condesa',  district: 'cuauhtemoc' },
      { name: 'Roma Sur', slug: 'roma-sur', district: 'cuauhtemoc' },
      { name: 'Juárez',   slug: 'juarez',   district: 'cuauhtemoc' },
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
    h1: 'Eventos fitness en Roma Norte — Running, box y activaciones 2026',
    metaDesc: 'Eventos fitness en Roma Norte, CDMX 2026: running en Parque Ámsterdam, activaciones boutique y competencias de boxeo. Guía de Rodrigo.',
    intro: `Roma Norte tiene el calendario de eventos fitness más activo de la Cuauhtémoc, con activaciones que van desde running clubs informales hasta competencias de boxeo y retos de CrossFit que llenan los estudios sobre Orizaba. El Parque Ámsterdam es el eje central: el circuito oval de 1.2 km es escenario habitual para running clubs que salen los martes y jueves a las 7am, con grupos de 10 a 40 personas según la temporada.

Los boutiques de la zona organizan sus propios eventos con frecuencia — retos de 30 días, clases abiertas al público, workshops de nutrición con marcas alineadas al estilo del barrio. Son eventos de acceso fácil: la mayoría son gratuitos para miembros o con costo de $200-$400 MXN para externos. Instagram es el canal de comunicación principal de todos estos eventos — si seguís las cuentas de los estudios sobre Orizaba, el calendario se arma solo.

Para competencias más serias, los boxes de CrossFit y funcional de Roma Norte participan en circuitos intercolonias que incluyen eventos en Condesa, Juárez y Santa María la Ribera. Son competencias amateur bien organizadas con categorías por nivel que no requieren ser atleta de alto rendimiento para participar. La primera vez que fui a uno como espectador terminé inscribiéndome en el siguiente — el ambiente es difícil de describir sin haberlo vivido.`,
    faq: [
      {
        q: '¿Cuándo y dónde se reúnen los running clubs en Roma Norte?',
        a: 'El Parque Ámsterdam tiene grupos de running informales los martes y jueves a las 7am que se juntan en la entrada principal sobre Av. Ámsterdam. Los sábados hay grupos más grandes desde las 7:30am que a veces extienden la ruta hacia Condesa o el Parque España. No requieren inscripción previa — solo llegar con tenis. Algunos estudios de Roma Norte organizan sus propios running clubs con salida desde el gym.',
      },
      {
        q: '¿Hay competencias de CrossFit o funcional accesibles para principiantes en Roma Norte?',
        a: 'Sí. Los boxes de CrossFit de Roma Norte y Condesa organizan eventos internos con categorías scaled que son perfectos para principiantes. También participan en circuitos inter-colonias con categorías rookie. La mayoría de competencias tienen registro en línea 2-4 semanas antes y cuota de inscripción de $300-$600 MXN que incluye camiseta y comida post-evento. El nivel de comunidad en estos eventos es uno de los mejores del fitness chilango.',
      },
      {
        q: '¿Se hacen eventos de boxeo en Roma Norte?',
        a: 'Sí, aunque con menor frecuencia que los de CrossFit o running. Algunos boxes y gyms con área de combate de Roma Norte organizan veladas amateur de boxeo, eventos de sparring abierto y workshops técnicos con exboxeadores profesionales. Para boxeo competitivo amateur, la escena está más activa en Doctores y la Bondojito, pero Roma Norte tiene eventos técnicos de calidad una o dos veces por mes. Los grupos de WhatsApp de los boxes locales son el mejor canal para enterarse.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Running clubs activos',  value: '4+' },
      { label: 'Eventos boutique/mes',   value: '8–12' },
      { label: 'Parque de eventos',      value: 'Parque Ámsterdam' },
      { label: 'Competencias anuales',   value: '6+' },
    ],
    barrios: [
      { name: 'Condesa',  slug: 'condesa',  district: 'cuauhtemoc' },
      { name: 'Roma Sur', slug: 'roma-sur', district: 'cuauhtemoc' },
      { name: 'Juárez',   slug: 'juarez',   district: 'cuauhtemoc' },
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
    h1: 'Bienestar y recuperación en Roma Norte',
    metaDesc: 'Bienestar en Roma Norte, CDMX: fisioterapia deportiva, nutrición y masaje $500–$1,200 MXN. Profesionales sobre Orizaba y Álvaro Obregón. Guía 2026.',
    intro: `Roma Norte tiene la infraestructura de bienestar más completa de la Cuauhtémoc concentrada en pocas cuadras. Sobre Orizaba y Álvaro Obregón conviven fisioterapeutas deportivos con posgrado, nutricionistas especializados en rendimiento, psicólogos del deporte y centros de masaje terapéutico con diferentes especialidades. El nivel es coherente con el mercado: los profesionales de bienestar de Roma Norte atienden a clientes que saben qué pedir y no aceptan genéricos.

Para quien entrena seriamente — de manera regular con intensidad real, no una vez por semana — la fisioterapia preventiva es tan importante como el entrenamiento mismo. Una sesión mensual de valoración con un fisioterapeuta que conozca tu historial de movimiento puede prevenir lesiones que corten semanas de entrenamiento. En Roma Norte encuentras fisioterapeutas que trabajan integrados con los estudios boutique del barrio: saben quiénes son los instructores, conocen las lesiones típicas de cada disciplina y tienen protocolos de recuperación específicos.

La nutrición deportiva en Roma Norte tiene un perfil interesante: hay nutricionistas que trabajan con atletas amateur de nivel serio — gente que compite en carreras, CrossFit o boxeo amateur — y entienden la diferencia entre nutrición de rendimiento y nutrición estética. Una consulta inicial va de $800 a $1,200 MXN. Los seguimientos mensuales van de $600 a $1,000 MXN. Para el atleta que quiere pasar a siguiente nivel sin trial and error en la cocina, esa inversión tiene retorno directo y medible.`,
    faq: [
      {
        q: '¿Cuánto cuesta una sesión de fisioterapia deportiva en Roma Norte?',
        a: 'Los fisioterapeutas deportivos de Roma Norte cobran entre $600 y $1,200 MXN por sesión de 45-60 minutos. Los más especializados con posgrado en deporte o electrodiagnóstico avanzado están en el rango alto. Para mantenimiento general y trabajo de movilidad, hay opciones de $500-$700 MXN en clínicas más pequeñas de las calles internas. Paquetes de 5-10 sesiones suelen tener descuento del 10-15%.',
      },
      {
        q: '¿Hay servicios de masaje deportivo accesibles en Roma Norte?',
        a: 'Sí, aunque accesible es relativo en este barrio. El masaje terapéutico deportivo va de $600 a $1,000 MXN por sesión de 60 minutos en los centros establecidos. Hay opciones más económicas de $400-$500 MXN en espacios más pequeños sobre calles secundarias. Para masaje de recuperación post-competencia o trabajo de tejido profundo específico, los centros integrados con estudios de CrossFit o pilates suelen tener los masajistas con mejor contexto deportivo.',
      },
      {
        q: '¿Vale la pena la nutrición deportiva en Roma Norte si entreno solo por salud?',
        a: 'Para mantenimiento general de salud sin objetivos específicos de composición o rendimiento, la mayoría de personas no necesita nutricionista mensual. Una consulta inicial de valoración ($800-$1,200 MXN) para entender tu punto de partida puede ser suficiente por 6-12 meses si los objetivos son básicos. Para quien quiere cambios específicos de composición corporal, preparación para competencia o manejo de patologías asociadas al entrenamiento, el seguimiento continuo tiene sentido y retorno real.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar',   value: '20+' },
      { label: 'Fisioterapia deportiva', value: '$500–$1,200 MXN' },
      { label: 'Masaje terapéutico',     value: '$400–$1,000 MXN' },
      { label: 'Nutrición deportiva',    value: '$800–$1,200 MXN consulta' },
    ],
    barrios: [
      { name: 'Condesa',  slug: 'condesa',  district: 'cuauhtemoc' },
      { name: 'Roma Sur', slug: 'roma-sur', district: 'cuauhtemoc' },
      { name: 'Juárez',   slug: 'juarez',   district: 'cuauhtemoc' },
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
