// src/data/cdmx/barrio-lomas-de-tarango.ts
// Draft – lastReviewed: 2026-06-29

export const barrioContent = {
  nombre: 'Lomas de Tarango',
  slug: 'lomas-de-tarango',
  group: 'C',
  parentDistrict: {
    nombre: 'Álvaro Obregón',
    slug: 'alvaro-obregon',
  },
  lastReviewed: '2026-06-29',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Lomas de Tarango es el barrio que está creciendo sin que el resto de CDMX se haya enterado todavía, güey. Sobre Av. Lomas de Tarango y los Bosques de Tarango hay una zona residencial de NSE C/C+ que en los últimos años ganó densidad de servicios: gimnasios nuevos, estudios pequeños de funcional, opciones de nutrición. El Bosque de Tarango es el activo que no tienen muchos barrios — miles de metros de área verde con circuito de caminata y ciclismo a dos cuadras de casa.

La oferta fitness es presupuesto-mid real: nada de branding aspiracional, todo de vecinos que entrenan con constancia. El Periférico marca el límite con Olivar del Conde y Las Águilas, y los gymns de la zona captan clientela de los tres lados. Para quien vive acá, el gym está a menos de 10 minutos a pie. Chido así.

Para el vecino de Lomas de Tarango que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Lomas de Tarango en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Lomas de Tarango — fitness C/C+ y Bosque de Tarango 2026',
    metaDesc: 'Gimnasios en Lomas de Tarango, CDMX: ~7 opciones de $700 a $1,500 MXN/mes. Lomas de Tarango, Bosques de Tarango. NSE C/C+, acceso verde. Guía 2026.',
    intro: `Lomas de Tarango tiene alrededor de 7 gimnasios y espacios de fitness, una cifra en crecimiento para un barrio que ganó densidad residencial en los últimos años. Sobre Av. Lomas de Tarango y las calles perpendiculares hay gimnasios de formato medio que llevan abiertos entre 3 y 7 años, señal de que la clientela estabilizó. El Bosque de Tarango es un diferencial único: para quienes prefieren entrenar al aire libre, el parque ofrece circuito de 5km, área de barras y calistenia, y grupos de running organizados por los propios vecinos.

El rango de precios va de $700 a $1,500 MXN al mes — budget-mid real para NSE C/C+. Para $1,000-$1,200 MXN encuentras gym completo con pesas libres, mancuernas hasta 50kg, área cardiovascular funcional y clases de grupo incluidas. La inscripción inicial está en $300-$500 MXN. No hay cadenas ni flagships de marca — hay locales con nombre propio y clientela de barrio que valora la cercanía sobre el Instagram del espacio.

Lo que está cambiando en Lomas de Tarango es la oferta especializada: ahorita ya hay un par de espacios de funcional y uno de crosstraining que abrieron en los últimos dos años capturando la demanda de quienes entrenaban antes en Las Águilas o Olivar del Conde. La tendencia apunta a que la densidad de opciones siga creciendo sin que los precios suban al nivel de zonas más consolidadas.`,
    faq: [
      {
        q: '¿Cuánto cuesta una membresía de gimnasio en Lomas de Tarango?',
        a: 'Una membresía mensual en Lomas de Tarango va de $700 a $1,500 MXN, con el rango más competitivo entre $900 y $1,200 MXN para un gym completo con pesas libres, cardio y clases de grupo. La inscripción inicial está entre $300 y $500 MXN, una de las más accesibles de Álvaro Obregón. Algunos espacios tienen plan de 3 meses a $2,400-$3,200 MXN con descuento sobre el precio mensual. Comparado con Guadalupe Inn o Las Águilas, Lomas de Tarango tiene precios similares o ligeramente menores por el menor costo de renta en la zona.',
      },
      {
        q: '¿Puedo entrenar al aire libre en Lomas de Tarango?',
        a: '¡Claro que sí, güey! El Bosque de Tarango es uno de los mejores activos del barrio para fitness al aire libre. Tiene circuito de caminata y running de varios kilómetros, área de barras y anillas para calistenia, y espacios abiertos para estiramientos o yoga. La entrada es gratuita y el horario de apertura empieza temprano — ideal para quien prefiere entrenar antes de las 8am. Los fines de semana hay grupos de running organizados informalmente que salen desde la entrada principal. El bosque complementa perfectamente cualquier membresía de gym indoor.',
      },
      {
        q: '¿Hay gymns de crosstraining o funcional en Lomas de Tarango?',
        a: 'Ahorita hay uno o dos espacios de funcional y crosstraining que abrieron en los últimos años sobre Av. Lomas de Tarango y Bosques de Tarango. Son boxes de tamaño mediano con grupos de 8-15 personas, coaches con certificación y programación semanal. El precio mensual va de $1,100 a $1,600 MXN — más accesible que boxes equivalentes en Las Águilas o Guadalupe Inn. La comunidad es pequeña pero comprometida, y el ambiente es más informal y vecinal que en zonas con más competencia de boxes premium.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Lomas de Tarango tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Lomas de Tarango suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~7' },
      { label: 'Membresía mensual', value: '$700–$1,500 MXN' },
      { label: 'Referente',         value: 'Lomas de Tarango / Bosque' },
      { label: 'NSE',               value: 'C/C+' },
    ],
    barrios: [
      { name: 'Las Águilas',           slug: 'las-aguilas',           district: 'alvaro-obregon' },
      { name: 'Guadalupe Inn',          slug: 'guadalupe-inn',          district: 'alvaro-obregon' },
      { name: 'Olivar del Conde',       slug: 'olivar-conde',           district: 'alvaro-obregon' },
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
    h1: 'Estudios boutique en Lomas de Tarango',
    metaDesc: 'Estudios boutique en Lomas de Tarango, CDMX: pilates y yoga de $120 a $250 MXN/clase. Lomas de Tarango, Bosques de Tarango. Guía real 2026.',
    intro: `La oferta de estudios boutique en Lomas de Tarango es incipiente pero en crecimiento. Hay estudios de yoga y pilates mat que llevan 2-4 años en la zona, con grupos de 6-10 personas y instructoras que viven en el barrio o en zonas colindantes. La demanda existe — el perfil C/C+ de Lomas de Tarango incluye cada vez más personas con cultura fitness consolidada que prefieren no desplazarse hasta Las Águilas o Guadalupe Inn para una clase de yoga.

El precio de clase suelta va de $120 a $250 MXN — el rango más accesible de toda la oferta de estudios en Álvaro Obregón. Los planes mensuales de clases ilimitadas están entre $1,200 y $1,800 MXN. Para Reformer de pilates la densidad es baja en la zona — hay una o dos opciones — pero el precio es notablemente menor al de zonas premium: $150 a $250 MXN por clase frente a los $200-$400 MXN de Pedregal o San Ángel.

Lo que caracteriza a los estudios de Lomas de Tarango es la relación directa entre instructor y alumno. Los grupos pequeños y la menor competencia de la zona hacen que las instructoras pongan más atención individual y que el progreso sea visible más rápido. Para quien empieza en pilates o yoga, este es un ambiente sin presiones donde aprender a ritmo real.`,
    faq: [
      {
        q: '¿Hay Reformer de pilates en Lomas de Tarango?',
        a: 'Ahorita hay una o dos opciones de Reformer en la zona — la oferta es limitada comparada con zonas más consolidadas como Pedregal o San Ángel. Lo que existe tiene máquinas en buen estado y grupos reducidos de 4-8 personas, lo que significa más atención individual por clase. El precio suelta de Reformer va de $150 a $250 MXN — más accesible que el promedio de CDMX para la misma modalidad. Si la oferta actual no alcanza tus horarios, Las Águilas y Guadalupe Inn tienen más opciones a 10-15 minutos.',
      },
      {
        q: '¿Los estudios de yoga en Lomas de Tarango tienen clases para principiantes?',
        a: '¡Sí, güey! Los estudios de la zona manejan grupos nivelados y tienen clases específicas para personas sin experiencia previa. El ambiente es sin pretensiones — instructoras que explican cada postura con detalle y no suponen que el alumno ya sabe. Las clases para principiantes duran 60-75 minutos con énfasis en respiración, alineación básica y algunas posturas fundamentales de Hatha. El precio es igual al de las clases regulares: $120-$200 MXN por clase suelta.',
      },
      {
        q: '¿Vale la pena inscribirse a un plan mensual en un estudio de Lomas de Tarango?',
        a: 'Si vas a ir 3 o más veces por semana, sí. El plan mensual de $1,200 a $1,800 MXN para clases ilimitadas sale mejor desde la cuarta o quinta clase del mes. Los estudios pequeños de la zona también tienen más flexibilidad para cambiar horarios o reagendar clases que los estudios de mayor escala. El riesgo es que si el estudio es muy nuevo, vale la pena probar 3-4 clases sueltas antes de comprometerte a un mensual, para asegurarte de que el instructor y el horario funcionan con tu vida.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~4' },
      { label: 'Clase suelta',      value: '$120–$250 MXN' },
      { label: 'Mensual ilimitado', value: '$1,200–$1,800 MXN' },
      { label: 'Diferencial',       value: 'Bosque de Tarango outdoor' },
    ],
    barrios: [
      { name: 'Las Águilas',           slug: 'las-aguilas',           district: 'alvaro-obregon' },
      { name: 'Guadalupe Inn',          slug: 'guadalupe-inn',          district: 'alvaro-obregon' },
      { name: 'Olivar del Conde',       slug: 'olivar-conde',           district: 'alvaro-obregon' },
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
    h1: 'Entrenadores personales en Lomas de Tarango',
    metaDesc: 'Entrenadores personales en Lomas de Tarango, CDMX: PT de $350 a $650 MXN/sesión. Bosque de Tarango disponible. NSE C/C+. Guía 2026.',
    intro: `El personal training en Lomas de Tarango tiene una propuesta diferente a la mayoría de zonas de CDMX: el Bosque de Tarango como espacio de entrenamiento al aire libre de uso gratuito. Hay entrenadores en la zona que ofrecen sesiones en el bosque — funcional, circuitos, HIIT con implementos — combinando el espacio verde con equipamiento portátil. El precio de estas sesiones es de $350 a $550 MXN, por debajo del promedio para PT indoor en zonas equivalentes.

Los entrenadores que trabajan en gymns de la zona cobran de $350 a $650 MXN por sesión individual, dependiendo de la certificación y los años de experiencia. El perfil de cliente en Lomas de Tarango es similar al del barrio: personas de 25-50 años con objetivo de composición corporal o mejora de condición general, sin demandas de atleta competitivo. Los entrenadores locales conocen bien este perfil y trabajan con planificación progresiva sin sobrevender resultados.

Ahorita los paquetes de 10 sesiones en la zona están entre $2,500 y $5,500 MXN — uno de los rangos más accesibles de Álvaro Obregón para PT certificado. Para quien quiere probar antes de comprometerse, varios entrenadores de la zona ofrecen primera sesión de diagnóstico sin costo. Chido para evaluar estilo de entrenamiento y compatibilidad antes de pagar paquete.`,
    faq: [
      {
        q: '¿Cuánto cuesta un entrenador personal en Lomas de Tarango?',
        a: 'Una sesión de PT en Lomas de Tarango va de $350 a $650 MXN según la experiencia del entrenador y si la sesión es en gym, en el Bosque de Tarango o a domicilio. Los paquetes de 10 sesiones están entre $2,500 y $5,500 MXN con descuento de 10-20% sobre el precio individual. Las sesiones en el Bosque de Tarango con equipamiento portátil suelen ser $50-$100 MXN más económicas que las sesiones en gym. Comparado con Las Águilas o Guadalupe Inn, el PT en Lomas de Tarango es ligeramente más accesible por el menor costo de vida de la zona.',
      },
      {
        q: '¿Hay entrenadores que den clases en el Bosque de Tarango?',
        a: '¡Ahorita sí, güey! Hay entrenadores de la zona que usan el Bosque de Tarango como espacio de trabajo: llevan sus propios implementos — TRX, cuerdas, kettlebells portátiles — y diseñan circuitos que aprovechan el terreno del bosque. Es una modalidad que funciona especialmente bien para HIIT, funcional y entrenamiento cardiovascular con variedad de estímulos que un gym indoor no puede dar. El bosque tiene área de barras fijas que también se integran al entrenamiento. Para quien disfruta entrenar al aire libre, es una opción muy chida y a muy buen precio.',
      },
      {
        q: '¿Cómo encuentro un entrenador personal en Lomas de Tarango?',
        a: 'La mejor forma es preguntar directamente en los gymns sobre Av. Lomas de Tarango — la mayoría tienen trainers propios disponibles para sesiones individuales. También hay entrenadores independientes que se anuncian en grupos de Facebook o WhatsApp del barrio y en Instagram local. Al contactar, pedí certificación, referencias de clientes actuales y una sesión de evaluación gratuita o a precio de prueba. Los entrenadores serios no tienen problema en mostrar su cartera de trabajo. Evitá contratar solo por precio sin validar la formación.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$350–$650 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,500–$5,500 MXN' },
      { label: 'Opción outdoor',      value: 'Bosque de Tarango' },
      { label: 'NSE referencia',      value: 'C/C+' },
    ],
    barrios: [
      { name: 'Las Águilas',           slug: 'las-aguilas',           district: 'alvaro-obregon' },
      { name: 'Guadalupe Inn',          slug: 'guadalupe-inn',          district: 'alvaro-obregon' },
      { name: 'Olivar del Conde',       slug: 'olivar-conde',           district: 'alvaro-obregon' },
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
    h1: 'Eventos fitness en Lomas de Tarango — outdoor y comunidad Bosque 2026',
    metaDesc: 'Eventos fitness en Lomas de Tarango, CDMX: clases outdoor, running y retos de $0 a $350 MXN. Bosque de Tarango. Comunidad activa. Guía 2026.',
    intro: `Lomas de Tarango tiene en el Bosque de Tarango su mayor activo para eventos fitness. Los fines de semana el bosque se llena de grupos de running, clases de yoga al aire libre y sesiones de entrenamiento funcional organizadas tanto por entrenadores locales como por iniciativas vecinales. La entrada al bosque es gratuita y los eventos al aire libre son en su mayoría sin costo — el modelo es comunidad abierta, no evento con entrada cara.

Los gymns de la zona organizan retos internos cada trimestre — composición corporal, resistencia cardiovascular, fuerza funcional — con tablero interno y seguimiento semanal. Sin transmisión en vivo ni patrocinadores: simplemente un objetivo compartido durante 6-8 semanas que genera adherencia y reduce la deserción de socios. Es el formato que funciona en barrios con comunidad fitness en crecimiento.

Los estudios de yoga ocasionalmente organizan sesiones matutinas en el bosque durante primavera y verano — $0 a $150 MXN por clase al aire libre con instructora presente. Ahorita el calendario de eventos en Lomas de Tarango es irregular porque la escena está en crecimiento, pero la tendencia es positiva: más vecinos que descubren el fitness y se organizan para entrenar juntos sin necesidad de infraestructura cara.`,
    faq: [
      {
        q: '¿Qué tipo de eventos de running hay en Lomas de Tarango?',
        a: 'El Bosque de Tarango es el punto de encuentro natural para grupos de running de la zona. Hay grupos informales de vecinos que salen los sábados y domingos entre 7 y 9am — trayectos de 5 a 12km según el grupo. Algunos entrenadores locales organizan grupos de running entrenado con trabajo de series e intervalos. La información de estos grupos circula por WhatsApp vecinal y grupos de Facebook de Lomas de Tarango. No hay apps ni plataformas formales — es comunidad de barrio que funciona por comunicación directa.',
      },
      {
        q: '¿Hay clases de yoga al aire libre en el Bosque de Tarango?',
        a: '¡Ahorita sí, güey! Durante primavera y los meses de buen clima, hay instructoras locales que organizan clases de yoga matutino en el bosque — generalmente los sábados entre 8 y 10am en zonas planas con buen suelo. Algunas son gratuitas como práctica de comunidad; otras tienen costo de $100 a $150 MXN para cubrir el tiempo de la instructora. La forma más confiable de enterarse es seguir Instagram de los estudios de yoga de la zona y preguntar directamente si tienen agenda de clases outdoor para el mes.',
      },
      {
        q: '¿Hay eventos de nutrición o salud en Lomas de Tarango?',
        a: 'Ocasionalmente los gymns de la zona organizan charlas de nutrición básica con especialistas locales — formato de 1 a 2 horas, gratuitas para socios o de $100 a $200 MXN para externos. La frecuencia es irregular — dos o tres veces al año en los espacios más activos. Para una agenda más sistemática de talleres de salud, los centros comunitarios y las clínicas privadas de la zona también hacen eventos abiertos al público. La información circula más por WhatsApp de comunidad que por canales formales.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Running outdoor',   value: 'Sábados/domingos 7-9am' },
      { label: 'Yoga outdoor',      value: '$0–$150 MXN' },
      { label: 'Retos internos',    value: 'Trimestrales' },
      { label: 'Bosque acceso',     value: 'Gratuito' },
    ],
    barrios: [
      { name: 'Las Águilas',           slug: 'las-aguilas',           district: 'alvaro-obregon' },
      { name: 'Guadalupe Inn',          slug: 'guadalupe-inn',          district: 'alvaro-obregon' },
      { name: 'Olivar del Conde',       slug: 'olivar-conde',           district: 'alvaro-obregon' },
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
    h1: 'Bienestar en Lomas de Tarango',
    metaDesc: 'Bienestar en Lomas de Tarango, CDMX: nutriólogos y masajes de $280 a $750 MXN. Lomas de Tarango. NSE C/C+, sin sobreprecios. Guía 2026.',
    intro: `El bienestar en Lomas de Tarango está en fase de consolidación: hay consultorios de nutrición accesibles, centros de masaje con precios alineados al barrio, y la ventaja de tener el Bosque de Tarango como recurso de bienestar gratuito para caminata, meditación al aire libre y recuperación activa. La combinación de servicios pagados accesibles y espacio verde gratuito hace de la zona una opción muy funcional para quien quiere cuidarse sin presupuesto de NSE B.

Los nutriólogos de Lomas de Tarango tienen precios entre $450 y $800 MXN por consulta inicial y $280 a $450 MXN por seguimiento mensual — el rango más accesible de Álvaro Obregón para nutrición con enfoque en salud general. Algunos tienen formación adicional en nutrición deportiva y trabajan con personas que entrenan de 3 a 5 días por semana.

Los masajes terapéuticos y de recuperación muscular disponibles en la zona van de $350 a $700 MXN por sesión de 60 minutos. Para crioterapia o servicios más especializados hay que desplazarse, pero para recuperación post-entrenamiento semanal — masaje deep tissue, compresión básica — Lomas de Tarango tiene lo necesario. Ahorita el precio de estos servicios está por debajo del promedio de CDMX, algo que puede cambiar en los próximos años conforme la zona gana densidad.`,
    faq: [
      {
        q: '¿Hay nutriólogos en Lomas de Tarango?',
        a: 'Sí, hay consultorios de nutrición clínica y dietética sobre Av. Lomas de Tarango y zonas aledañas. Los honorarios son de los más accesibles de Álvaro Obregón: $450-$800 MXN por consulta inicial y $280-$450 MXN por seguimiento mensual. El enfoque es principalmente en manejo de peso, alimentación saludable y nutrición para personas que hacen actividad física regular. No todos tienen formación específica en nutrición deportiva de alto rendimiento, pero para la mayoría de los objetivos de fitness de NSE C/C+, la atención disponible en la zona es completamente adecuada.',
      },
      {
        q: '¿El Bosque de Tarango ayuda para la recuperación y bienestar?',
        a: '¡Claro, güey! El bosque es recurso de bienestar gratuito que pocos barrios de CDMX tienen. Para recuperación activa después de días de entrenamiento intenso, una caminata de 30-45 minutos en terreno irregular del bosque activa la circulación, moviliza articulaciones y baja el sistema nervioso sin el impacto de correr. También es espacio ideal para meditación o respiración consciente en la mañana temprano. Combinado con servicios de masaje pagados de la zona, el bosque hace el ecosistema de recuperación de Lomas de Tarango muy completo para el precio.',
      },
      {
        q: '¿Hay centros de masaje o spa en Lomas de Tarango?',
        a: 'Hay centros de masaje terapéutico en la zona — principalmente deep tissue, relajante y liberación miofascial — con precios de $350 a $700 MXN por sesión de 60 minutos. No hay spas con alberca o instalaciones húmedas en el barrio; para eso el destino más cercano es San Ángel o Pedregal. Lo que sí hay es atención personalizada en espacios pequeños donde el terapeuta conoce la historia de sus clientes y puede adaptar cada sesión a lo que el cuerpo necesita ese día. Para recuperación muscular post-entrenamiento, es más que suficiente.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$450–$800 MXN' },
      { label: 'Masaje terapéutico',   value: '$350–$700 MXN' },
      { label: 'Recuperación outdoor', value: 'Bosque de Tarango gratis' },
      { label: 'NSE referencia',       value: 'C/C+' },
    ],
    barrios: [
      { name: 'Las Águilas',           slug: 'las-aguilas',           district: 'alvaro-obregon' },
      { name: 'Guadalupe Inn',          slug: 'guadalupe-inn',          district: 'alvaro-obregon' },
      { name: 'Olivar del Conde',       slug: 'olivar-conde',           district: 'alvaro-obregon' },
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
