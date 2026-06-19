// src/data/cdmx/localidad-benito-juarez.ts

interface QueEsperarItem { titulo: string; descripcion: string }
interface Stat { label: string; value: string }
interface Vecino { name: string; slug: string }
interface CatLink { slug: string; label: string }

interface CategoryContent {
  h1: string
  metaDesc: string
  intro: string
  queEsperar: QueEsperarItem[]
  faq: { q: string; a: string }[]
  stats: Stat[]
  vecinos: Vecino[]
  categoriaLinks: CatLink[]
}

import { getVecinos } from './neighborhood-graph'

const vecinos = getVecinos('benito-juarez')

const categoriaLinks: CatLink[] = [
  { slug: 'gimnasios',    label: '🏋️ Gimnasios (180)' },
  { slug: 'estudios',     label: '🧘 Estudios' },
  { slug: 'entrenadores', label: '🚶 Entrenadores' },
  { slug: 'eventos',      label: '📅 Eventos' },
  { slug: 'bienestar',    label: '🌿 Bienestar' },
]

export const localidadContent = {
  nombre: 'Benito Juárez',
  slug: 'benito-juarez',
  lastReviewed: '2026-05-30',

  sobreBarrio: `Benito Juárez es la alcaldía más densamente poblada de la Ciudad de México y eso se refleja en su escena fitness: más de 180 gimnasios para una población que entrena duro. La alcaldía tiene dos caras — la zona del World Trade Center e Insurgentes Sur con gimnasios premium para el mundo corporativo, y Del Valle, Narvarte y Ciudad de los Deportes con opciones más accesibles para el vecino de toda la vida.

El acceso en Metro es real y funcional: Insurgentes, Mixcoac y Nativitas cubren la mayor parte de la alcaldía. Llegar a entrenar sin carro es posible en casi todas las zonas, lo que en CDMX no es poca cosa.

El Parque Hundido sobre Insurgentes Sur es el espacio verde más activo de la alcaldía — grupos de running, calistenia y yoga aparecen cada mañana con o sin instructor. El WTC genera flujo constante de ejecutivos que demanda gimnasios con horarios extendidos y estándares internacionales.

La neta: Benito Juárez tiene todo lo que necesitas para entrenar bien a cualquier nivel de presupuesto, sabiendo dónde buscar.`,

  gimnasios: {
    h1: 'Gimnasios en Benito Juárez, CDMX – Guía completa 2026',
    metaDesc: 'Gimnasios en Benito Juárez CDMX: 180 opciones $500–$2,500 MXN/mes. WTC, Insurgentes Sur, Del Valle. Smart Fit, Sport City y independientes.',
    intro: `Benito Juárez tiene 180 gimnasios registrados y la diversidad es real: desde el Smart Fit de $599 MXN mensual en Insurgentes hasta el club deportivo privado de Del Valle que cobra $2,500 sin chistar. La alcaldía tiene el mayor número de gimnasios de CDMX en términos absolutos, y eso genera competencia que beneficia al usuario — equipamiento actualizado, clases incluidas, presión constante de no bajar el nivel.

El eje WTC-Insurgentes Sur concentra los gimnasios más grandes y con mejor infraestructura: horarios de 5am a 11pm, regaderas decentes, estacionamiento incluido en varios casos. El precio está en $1,000-$2,000 MXN mensual para lo bueno de esa zona. El perfil corporativo del WTC sostiene esa demanda de lunes a viernes.

Del Valle, Narvarte y Ciudad de los Deportes tienen propuesta diferente: gimnasios de barrio con años en el mismo local, propietarios que conocen a sus clientes por nombre, hierro de verdad sin pretensión estética. Cuestan entre $500 y $900 MXN y tienen zonas de peso libre que compiten bien con las de cadena. La neta es que para levantar hierro serio, un gym de barrio en Del Valle te da lo mismo que un Sport City a la mitad del precio.

Con 180 gimnasios, la competencia también genera presión de precios. Muchos ofrecen primera semana gratis, membresías sin contrato anual y descuentos para estudiantes. Vale negociar antes de firmar — en los independientes, el precio publicado rara vez es el precio final.

Un dato que importa: el Metro Insurgentes Sur en hora pico (7-9am y 5-7pm) es un desmadre con bolsa de gym. Jalá antes de las 7am o después de las 7pm entre semana. Los sábados la movilidad está mucho mejor — el día ideal para explorar opciones sin presión.`,
    queEsperar: [
      {
        titulo: 'Dos perfiles claramente distintos de gimnasio',
        descripcion: 'La zona WTC-Insurgentes tiene gimnasios de cadena con instalaciones premium orientados al perfil corporativo — grandes, bien mantenidos, con estacionamiento. Del Valle y Narvarte tienen gimnasios de barrio con más personalidad, menos imagen y mejores precios. Antes de inscribirte, decidí qué necesitas más: infraestructura de primer nivel o hierro real sin inflación de precio por el barrio.',
      },
      {
        titulo: 'Equipamiento serio en el rango medio',
        descripcion: 'A diferencia de Cuauhtémoc donde los precios intermedios a veces no garantizan buen equipo, en Benito Juárez el rango $700-$1,200 MXN tiene opciones con zonas de peso libre completas: barras olímpicas, racks de sentadilla, mancuernas en series hasta 40-50kg. Visita en persona y prestá atención al estado de los collarines, el desgaste de la goma y el volumen de socios en hora pico.',
      },
      {
        titulo: 'Horarios extendidos para el perfil corporativo',
        descripcion: 'La mayoría de gimnasios en la zona WTC-Insurgentes abren a las 5am y cierran tarde. Eso responde al perfil de trabajadores del World Trade Center y Insurgentes que necesitan entrenar antes de entrar o después de salir. En fines de semana los horarios suelen reducirse — verifica antes de depender de entrenar sábado o domingo a las 7am.',
      },
      {
        titulo: 'Presión de precio por competencia alta',
        descripcion: 'Con 180 gimnasios en una alcaldía, la competencia genera presión de precios. Muchos gimnasios ofrecen primera semana gratis, membresías sin contrato anual y descuentos para estudiantes universitarios. Vale la pena negociar antes de firmar — en especial en los independientes, el precio publicado rara vez es el precio final si pides descuento por pronto pago.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Benito Juárez en 2026?',
        a: 'El rango en Benito Juárez va de $500 MXN al mes en gimnasios de barrio en Del Valle hasta $2,500 en clubes privados de Insurgentes y el WTC. Smart Fit y las cadenas accesibles están alrededor de $599-$799 MXN. Para un gimnasio independiente bien equipado en Del Valle o Narvarte, calcula $700-$1,000. La neta es que acá no necesitas pagar arriba de $1,200 para tener una zona de pesas libre decente — buscale.',
      },
      {
        q: '¿Cuáles son los mejores gimnasios de Benito Juárez para peso libre?',
        a: 'Para zona de pesas libre seria, los independientes de Del Valle y Narvarte suelen tener mejor relación precio-equipo que las cadenas de Insurgentes. Algunos tienen plataformas de levantamiento y racks libres que las cadenas rellenaron con máquinas guided. Visita en tu horario real de entrenamiento — no a mediodía cuando está vacío — y evalúa cuántos racks hay disponibles en hora pico. Eso te dice más que cualquier descripción en su página web.',
      },
      {
        q: '¿Cómo llego a los gimnasios de Benito Juárez en Metro?',
        a: 'Metro Insurgentes (Línea 1), Mixcoac (Línea 7) y Nativitas (Línea 2) son las estaciones más útiles para la alcaldía. Para la zona WTC, Insurgentes o Eugenia son las más cercanas. Para Del Valle, Mixcoac o Nativitas. El Metrobús sobre Insurgentes Sur es otra opción. Evita horas pico entre semana (7-9am y 5-7pm) si puedes — el tiempo de desplazamiento en esas franjas se multiplica fácil por dos.',
      },
      {
        q: '¿Es mejor Benito Juárez o Cuauhtémoc para entrenar?',
        a: 'Depende del perfil. Cuauhtémoc tiene Roma Norte con la oferta boutique más densa de CDMX. Benito Juárez tiene mayor variedad de precio y más espacio por instalación. Para CrossFit y estudios funcionales, Roma Norte (Cuauhtémoc) sigue siendo la meca. Para entrenamiento de fuerza puro sin pretensiones, los independientes de Del Valle compiten bien. Si trabajas en Insurgentes o el WTC, Benito Juárez es la opción lógica sin necesidad de comparar.',
      },
    ],
    stats: [
      { label: 'Gimnasios registrados', value: '180' },
      { label: 'Precio mensual', value: '$500–$2,500 MXN' },
      { label: 'Metro', value: 'Insurgentes · Mixcoac' },
      { label: 'Zona corporativa', value: 'WTC · Insurgentes Sur' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  estudios: {
    h1: 'Estudios fitness en Benito Juárez, CDMX – CrossFit, Yoga y Pilates 2026',
    metaDesc: 'Estudios fitness en Benito Juárez CDMX: CrossFit, pilates Reformer, yoga y spinning. Insurgentes Sur y Del Valle. Clase $180–$600 MXN.',
    intro: `Benito Juárez tiene una oferta de estudios boutique con identidad propia en la franja Insurgentes Sur-Del Valle, aunque Roma Norte siga siendo la zona más densa de CDMX para CrossFit y pilates. Los estudios de esta alcaldía tienden a ser más grandes, más orientados al cliente corporativo del WTC, y con precios más accesibles que los boutiques de Cuauhtémoc. No es exactamente lo mismo, pero cuate, la calidad es sólida.

Los boxes CrossFit de Benito Juárez tienen programación seria y comunidad que lleva años entrenando junta. El perfil de atleta es quizás menos aspiracional que en Roma Norte pero no menos comprometido — gente que jala porque entrena de verdad, no para el feed de Instagram. La diferencia entre un box serio y uno que usa el nombre como marketing se nota en la clase de inducción. Eso genera un ambiente que encuentro más auténtico.

El pilates Reformer tiene opciones bien equipadas en la franja Insurgentes-Mixcoac. Instructoras con certificación internacional, grupos pequeños y equipos de marca reconocida. El precio es 10-20% menor que la misma calidad en Cuauhtémoc — dato real para quien vive o trabaja en esta alcaldía.

El yoga tiene presencia en múltiples formatos: yoga flow para el cliente corporativo de Insurgentes, yoga más tradicional en estudios de Del Valle con instructores de años de práctica. El Parque Hundido tiene clases al aire libre organizadas por instructores independientes en las mañanas — gratis o con colaboración mínima.

Para atletas de fuerza que buscan trabajo complementario, la franja Insurgentes-Del Valle tiene opciones reales sin necesidad de cruzar toda la ciudad a Roma Norte.

Precios orientativos: clase suelta CrossFit $200-$400 MXN, pilates Reformer $300-$600 MXN, paquetes mensuales $1,500-$4,000 MXN según disciplina y estudio.`,
    queEsperar: [
      {
        titulo: 'CrossFit orientado al atleta funcional, no al escaparate',
        descripcion: 'Los boxes de Benito Juárez tienen un perfil de atleta que entrena por método y rendimiento, no por estética de redes sociales. Eso genera comunidades más estables y menos rotación. Los coaches con más años en la zona conocen a sus atletas y ajustan la programación según las capacidades del grupo real. Para quien busca metodología seria sin el hype de los barrios más trendy, esta es una opción sólida.',
      },
      {
        titulo: 'Pilates Reformer con mejor relación precio-calidad',
        descripcion: 'Los estudios de pilates Reformer de Benito Juárez ofrecen calidad comparable a los de Roma Norte y Condesa a precios 10-20% menores. Para trabajo de core, movilidad de cadera y rehabilitación postural, la diferencia está en la instructora — no en el barrio. Busca instructoras con certificación BASI, Stott o Polestar y grupos de máximo 6 personas.',
      },
      {
        titulo: 'Yoga corporativo y yoga de práctica real',
        descripcion: 'La zona WTC-Insurgentes tiene estudios orientados al cliente corporativo con clases de 45-60 minutos de Vinyasa Flow eficientes y bien manejadas. Del Valle tiene opciones de yoga más tradicional con menos marketing y más práctica real. Para principiantes, cualquiera de los dos funciona. Para practicantes con más años de práctica que buscan profundidad, Del Valle tiene las opciones más honestas.',
      },
      {
        titulo: 'Accesibilidad por Metro como ventaja real',
        descripcion: 'La mayoría de estudios boutique de Benito Juárez están a menos de 15 minutos caminando de una estación de Metro. Eso los hace accesibles sin carro de una forma que no aplica a todos los barrios de CDMX. En una ciudad donde la movilidad puede consumir 2 horas del día, tener el estudio a 3 estaciones de Metro del trabajo tiene valor logístico real.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta CrossFit en Benito Juárez?',
        a: 'Los boxes de Benito Juárez cobran orientativamente entre $1,800 y $3,500 MXN al mes por membresía con 3-4 clases semanales. Clase suelta entre $180 y $400 MXN. Son precios más accesibles que los boxes de Roma Norte o Condesa, con calidad de programación comparable. Algunos ofrecen primera clase gratuita — aprovéchala para evaluar el ambiente y el nivel del coach antes de comprometerte.',
      },
      {
        q: '¿Hay estudios de pilates Reformer en Benito Juárez?',
        a: 'Sí, la franja Insurgentes-Mixcoac tiene varios estudios con Reformers de calidad y grupos reducidos. Clase suelta entre $300 y $600 MXN, paquetes de 8 clases entre $1,800 y $3,500 MXN. Pregunta por certificación de la instructora antes de inscribirte — BASI, Stott o Polestar son los estándares internacionales que garantizan formación real.',
      },
      {
        q: '¿Qué opciones de yoga hay en Benito Juárez?',
        a: 'Hay yoga de corporativo (Vinyasa Flow, yoga express) en la zona WTC-Insurgentes y yoga más tradicional en Del Valle y Narvarte. Para principiantes, el yoga corporativo de Insurgentes es accesible y bien manejado. Para practicantes avanzados que buscan Ashtanga, Iyengar o meditación integrada, explorá los estudios de Del Valle. También hay clases al aire libre en el Parque Hundido organizadas por instructores independientes en las mañanas — gratis o con colaboración mínima.',
      },
      {
        q: '¿Vale la pena un estudio en Benito Juárez o mejor ir a Roma Norte?',
        a: 'Roma Norte (Cuauhtémoc) tiene mayor densidad de estudios boutique y más años de tradición CrossFit en CDMX. Benito Juárez tiene mejor accesibilidad en Metro, precios 10-20% menores y estudios con menos hype y más sustancia. Para quien vive o trabaja en Insurgentes, Mixcoac o Del Valle, no tiene sentido cruzar toda la ciudad a Roma Norte. Para quien puede elegir libremente y prioriza la comunidad más activa en CrossFit, Roma Norte sigue siendo la referencia.',
      },
    ],
    stats: [
      { label: 'Estudios fitness', value: '40+' },
      { label: 'Clase suelta', value: '$200–$600 MXN' },
      { label: 'Disciplinas', value: '7+' },
      { label: 'Zona más activa', value: 'Insurgentes · Del Valle' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  entrenadores: {
    h1: 'Entrenadores personales en Benito Juárez, CDMX – Certificados 2026',
    metaDesc: 'Entrenadores personales en Benito Juárez CDMX. Certificados NSCA, ACE y Colef. Sesiones $180–$1,500 MXN. Parque Hundido y entrenamiento a domicilio.',
    intro: `Benito Juárez tiene una buena concentración de entrenadores personales certificados. El perfil mixto de la alcaldía — zona corporativa (WTC, Insurgentes) con barrios residenciales establecidos (Del Valle, Narvarte) — genera demanda para distintos tipos de PT: el que trabaja con ejecutivos en horarios extremos, el que hace grupos funcionales en el Parque Hundido, y el especializado en fuerza que opera en los gimnasios independientes de Del Valle.

Como boxeador amateur, tengo el filtro claro: un PT bueno tiene metodología, no improvisación. Evaluación inicial con postura y movilidad, programación con carga progresiva y corrección de técnica activa. El que te pone a hacer 200 burpees el primer día "para ver tu nivel" no está evaluando — está improvisando porque no tiene programa. Güey, ese no es el que quieres. Pide sesión de evaluación inicial antes de comprometerte con cualquier PT en la alcaldía.

El Parque Hundido sobre Insurgentes Sur es el espacio más usado para entrenamiento al aire libre con PT. Varios entrenadores tienen grupos funcionales los sábados y domingos a la mañana — opción más económica que sesiones individuales y con buen ambiente grupal. Para quien recién empieza, los grupos en el parque son una puerta de entrada más accesible.

La alcaldía también tiene entrenadores especializados en deportes de combate, boxeo y artes marciales, por la tradición de gimnasios de combate en la zona sur de la ciudad. Para preparación física específica para boxeo o artes marciales, Benito Juárez tiene opciones que no encuentras con esa concentración en otras alcaldías de CDMX.

Precios orientativos: $500-$1,500 MXN por sesión de 60 minutos. Domicilio suma costo de desplazamiento según zona. Comparado con Polanco o Santa Fe, Benito Juárez tiene tarifas 15-20% más accesibles para calidad comparable.`,
    queEsperar: [
      {
        titulo: 'Certificaciones con títulos universitarios mexicanos',
        descripcion: 'El estándar en México es el título de Licenciatura en Cultura Física y Deporte o en Educación Física, complementado con certificaciones como NSCA-CPT, ACE o especialización en CrossFit. Busca entrenadores que mencionen su formación específica. En Benito Juárez hay PTs con título universitario que trabajan en los gimnasios del WTC y en estudios boutique — son los que tienen la base técnica más sólida.',
      },
      {
        titulo: 'Evaluación inicial como diferenciador real',
        descripcion: 'Un PT serio en Benito Juárez empieza con evaluación de postura, movilidad de cadera, tobillo y hombros, y patrones de movimiento básicos antes de poner peso. Para alguien con trabajo de boxeo, la evaluación de hombros y columna cervical es especialmente importante. Si el primer día el entrenador te pone directo en la barra sin valoración previa, es señal clara de que trabaja sin metodología.',
      },
      {
        titulo: 'Grupos al aire libre en el Parque Hundido',
        descripcion: 'El Parque Hundido tiene espacios de calistenia y áreas abiertas donde varios entrenadores organizan grupos de entrenamiento funcional los fines de semana. Es la opción más económica para entrenar bajo supervisión real en la alcaldía — el costo suele ser la mitad o menos que una sesión individual. El ambiente al aire libre sobre Insurgentes Sur es uno de los mejores de CDMX para esa modalidad.',
      },
      {
        titulo: 'Especialización en artes marciales y boxeo',
        descripcion: 'Benito Juárez tiene varios entrenadores especializados en preparación física para boxeo y artes marciales, por la tradición de gimnasios de combate en la zona sur de la ciudad. Para trabajo de acondicionamiento específico de boxeo — resistencia aeróbica, velocidad de reacción, trabajo de core para golpes — hay opciones reales que no encuentras en otras alcaldías con tanta concentración.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Benito Juárez?',
        a: 'Las tarifas en Benito Juárez van de $500 a $1,500 MXN por sesión de 60 minutos. Paquetes de 10 sesiones suelen tener descuento del 10-15%. Entrenamiento a domicilio suma $100-$200 MXN de desplazamiento según zona. Los PTs especializados en deportes de combate o preparación para competencias cobran en el rango alto. Comparado con Roma Norte o Polanco, Benito Juárez tiene precios 15-25% más accesibles con calidad comparable.',
      },
      {
        q: '¿Cómo evalúo a un entrenador personal antes de contratar?',
        a: 'Pide una sesión de evaluación inicial — los PTs serios la ofrecen, a veces gratuita. En esa sesión observa: ¿hace valoración postural? ¿pregunta por historial de lesiones? ¿tiene programa escrito o improvisa? ¿puede explicar la lógica detrás de cada ejercicio? Si el entrenador no puede justificar por qué incluye un ejercicio específico para tu objetivo, no tiene metodología — tiene improvisación. En Benito Juárez hay opciones serias, pero hay que filtrar.',
      },
      {
        q: '¿Hay entrenadores especializados en boxeo en Benito Juárez?',
        a: 'Sí, la zona sur de la ciudad tiene tradición de gimnasios de boxeo y la alcaldía tiene entrenadores con experiencia en preparación física para combate y boxeo amateur. Para encontrarlos, busca directamente en gimnasios de boxeo de la zona —Ciudad de los Deportes tiene algunos históricos. También hay PTs que trabajan en el Parque Hundido con preparación de boxeo los fines de semana. Para trabajo de técnica de boxeo real, un entrenador con trayectoria en el deporte es distinto a un PT que "hace clase de kickboxing fitness".',
      },
      {
        q: '¿Vale contratar PT si entreno en un box CrossFit?',
        a: 'En Benito Juárez la combinación tiene sentido para atletas que quieren trabajo específico fuera de la metodología CrossFit: técnica de levantamiento olímpico profunda, periodización de fuerza para un ciclo de competencia o trabajo de movilidad específico que el formato de clase no cubre. Un PT que complementa al CrossFit tiene que entender la metodología para no contradecirla — preguntale si tiene experiencia trabajando con atletas de CrossFit antes de contratar.',
      },
    ],
    stats: [
      { label: 'Entrenadores certificados', value: '70+' },
      { label: 'Sesión individual', value: '$500–$1,500 MXN' },
      { label: 'Parque habilitado', value: 'Parque Hundido' },
      { label: 'Modalidades', value: 'Gym · domicilio · parque' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  eventos: {
    h1: 'Eventos fitness en Benito Juárez, CDMX – Carreras y CrossFit 2026',
    metaDesc: 'Eventos fitness en Benito Juárez CDMX 2026: competencias CrossFit, grupos running Parque Hundido, Maratón CDMX y talleres deportivos en Insurgentes.',
    intro: `Benito Juárez tiene una agenda de eventos fitness activa que combina la escala metropolitana de eventos en Insurgentes Sur con la actividad barrial del Parque Hundido y Ciudad de los Deportes. La alcaldía no tiene el hype de Roma Norte para eventos CrossFit boutique, pero tiene sustancia real: grupos de running consolidados, competencias de boxes con comunidad sólida y el paso del Maratón de la Ciudad de México que convierte la zona en epicentro de actividad atlética en noviembre.

El Parque Hundido sobre Insurgentes Sur es el nodo central de eventos al aire libre. Los grupos de running llevan años organizando salidas los sábados y domingos a las 7am desde el parque — hay grupos para todo tipo de ritmo, desde quienes van tranquilo hasta los que entrenan para competir. El ambiente es más de barrio que de evento Instagram, lo que para mí es una señal positiva.

Las competencias CrossFit de los boxes de Benito Juárez tienen nivel real. La alcaldía tiene atletas con años de entrenamiento y los eventos internos suelen ser más competidos que los de zonas con boxes más nuevos. Para debutar en CrossFit competitivo, los eventos scaled de estos boxes son una buena puerta de entrada.

El Maratón de la Ciudad de México es el evento del año para los corredores de la alcaldía. La ruta pasa por Insurgentes Sur y Periférico, dos vialidades que atraviesan Benito Juárez. Los grupos de running del Parque Hundido ajustan su programación anual en función de esa fecha — si quieres prepararte en comunidad para el maratón, el grupo correcto en el parque correcto puede hacer toda la diferencia.

Neta: la mejor forma de estar al tanto del calendario de eventos en la alcaldía es seguir directamente a los boxes CrossFit y grupos de running activos en Instagram.`,
    queEsperar: [
      {
        titulo: 'Grupos de running en el Parque Hundido',
        descripcion: 'El Parque Hundido tiene grupos de running activos que salen sábados y domingos a las 7am. Hay grupos para distintos ritmos y distancias — desde los que van a 6:30 min/km hasta quienes se preparan para competir. La mayoría son gratuitos o cobran colaboración mínima. Es una de las formas más efectivas de mantener consistencia en el entrenamiento de resistencia y de conocer gente que se mueve en serio en la alcaldía.',
      },
      {
        titulo: 'Competencias CrossFit con nivel competitivo real',
        descripcion: 'Los boxes de Benito Juárez tienen atletas con años de entrenamiento y los eventos internos reflejan eso. Las categorías scaled dan acceso a principiantes, pero el ambiente es más competitivo que en zonas con boxes más recientes. Para quienes llevan 6-12 meses en CrossFit y quieren su primera experiencia competitiva, los eventos de Benito Juárez son una buena escala.',
      },
      {
        titulo: 'Maratón CDMX: el evento mayor de la alcaldía',
        descripcion: 'El Maratón de la Ciudad de México pasa por Insurgentes Sur en noviembre, convirtiendo Benito Juárez en zona de paso de miles de corredores. Los grupos de running del Parque Hundido organizan ciclos de preparación de 16-20 semanas orientados al maratón. Para corredores que quieren completar su primer maratón o mejorar su marca, unirse a un grupo de preparación es significativamente más efectivo que entrenar solo.',
      },
      {
        titulo: 'Eventos en Ciudad de los Deportes y zona sur',
        descripcion: 'Ciudad de los Deportes, sobre Insurgentes Sur, es un complejo deportivo histórico que organiza eventos de boxeo, atletismo y deportes de combate durante el año. Para fans del boxeo amateur y atletas de combate, esta zona tiene historia y eventos que no existen en los barrios del norte. Los precios de entrada a eventos son accesibles — muchos son gratuitos para residentes.',
      },
    ],
    faq: [
      {
        q: '¿Cuándo son los eventos CrossFit en Benito Juárez?',
        a: 'Los boxes de Benito Juárez organizan competencias trimestrales, generalmente en febrero-marzo, mayo-junio, agosto-septiembre y noviembre-diciembre. Las convocatorias se publican en Instagram de cada box con 4-6 semanas de anticipación. Inscripciones entre $200 y $600 MXN según escala del evento y categoría. Para el circuito de eventos CrossFit de CDMX, los grupos de CrossFit México City en Facebook tienen el calendario más actualizado.',
      },
      {
        q: '¿Dónde y cuándo salen los grupos de running del Parque Hundido?',
        a: 'Los grupos principales salen del Parque Hundido los sábados y domingos a las 7am. Hay grupos de distintos ritmos — busca en grupos de Facebook de "Running CDMX" o "Corredores Benito Juárez" para encontrar el que se ajuste a tu nivel. La mayoría son gratuitos. En semana también hay salidas más pequeñas de martes y jueves a las 6:30am. El parque tiene área de estiramiento y calistenia para calentar antes de la salida.',
      },
      {
        q: '¿Cómo me inscribo al Maratón de la Ciudad de México?',
        a: 'El Maratón de CDMX se realiza en noviembre. Las inscripciones abren en línea varios meses antes a través del sitio oficial del evento. Los lugares se agotan rápido — los de 2026 probablemente abran a mediados de año. El precio sube conforme se acerca la fecha. Para completarlo bien, calcula 18-20 semanas de preparación específica con plan estructurado. Los grupos de running del Parque Hundido tienen planes de preparación organizados para este evento.',
      },
      {
        q: '¿Hay eventos de boxeo amateur en Benito Juárez?',
        a: 'Sí, Ciudad de los Deportes y algunos gimnasios de boxeo históricos de la zona sur organizan veladas de boxeo amateur durante el año. La alcaldía tiene tradición en deportes de combate y los eventos son más accesibles económicamente que los boxeos de alto perfil. Para seguir el calendario, busca en las cuentas de Instagram de los gimnasios de boxeo de Ciudad de los Deportes y Narvarte.',
      },
    ],
    stats: [
      { label: 'Eventos/año', value: '25+' },
      { label: 'Grupos running', value: '5+ activos' },
      { label: 'Parque principal', value: 'Parque Hundido' },
      { label: 'Evento mayor', value: 'Maratón CDMX (nov)' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  bienestar: {
    h1: 'Bienestar y recuperación en Benito Juárez, CDMX – Fisio y Nutrición 2026',
    metaDesc: 'Bienestar en Benito Juárez CDMX: fisioterapia deportiva, nutrición certificada y masajes terapéuticos. WTC y Del Valle. Sesión $180–$1,800 MXN.',
    intro: `Benito Juárez tiene una infraestructura de bienestar deportivo sólida que muchas veces queda eclipsada por la visibilidad de Roma Norte o Polanco, pero que tiene profesionales de primer nivel a precios más accesibles. Para un atleta que entrena boxeo amateur 4 veces por semana, el bienestar no es opcional — es parte del sistema que mantiene el cuerpo en condición de seguir entrenando sin parar por lesiones.

Los fisioterapeutas deportivos de la alcaldía tienen experiencia con atletas de combate, corredores y CrossFitters. La zona Insurgentes Sur-WTC concentra clínicas con equipamiento serio: ultrasonido terapéutico, electroestimulación, vendaje funcional y trabajo de tejido profundo. El precio es 20-30% menor que en Polanco o Lomas para la misma calidad técnica — un diferencial real que vale aprovechar si buscas rendimiento sin gastar de más.

Los nutricionistas deportivos trabajan con metas específicas: composición corporal, rendimiento en combate, manejo de peso para competencia. Para boxeadores que necesitan manejar la categoría sin sacrificar fuerza, un nutricionista con experiencia en deportes de combate es pieza crítica del equipo. No es el generalista que te da 1,200 calorías y te desea suerte.

El masaje terapéutico tiene opciones reales para atletas: terapeutas con formación en masaje deportivo que trabajan zonas específicas de sobrecarga según el deporte. No el masaje relajante de spa — el trabajo de tejido profundo en hombros, cuello y espalda baja que necesita un boxeador o CrossFitter con volumen alto. Para quien entrena más de 4 veces por semana, una sesión cada 2-3 semanas tiene impacto medible en la recuperación.

Precios orientativos: fisioterapia $600-$1,800 MXN por sesión, nutrición $800-$2,000 por consulta, masaje $500-$1,200 MXN. Todos los rangos son 20-30% menores que en Polanco o Santa Fe para calidad técnica comparable.`,
    queEsperar: [
      {
        titulo: 'Fisioterapia deportiva con equipamiento clínico real',
        descripcion: 'Las clínicas de fisioterapia deportiva de Benito Juárez en la zona WTC-Insurgentes tienen equipamiento serio: ultrasonido terapéutico, electroestimulación de alta frecuencia, laser terapéutico y equipos de diatermia. Para lesiones agudas y recuperación de sobrecargas crónicas de entrenamiento, esa tecnología hace diferencia en los tiempos de recuperación. Busca fisioterapeutas con especialidad en deporte o con posgrado en fisioterapia musculoesquelética.',
      },
      {
        titulo: 'Nutrición deportiva especializada en deportes de combate',
        descripcion: 'La tradición de deportes de combate en la zona sur de CDMX ha generado algunos de los mejores nutricionistas especializados en manejo de peso para competencia. Para atletas que necesitan bajar a una categoría específica sin perder fuerza ni resistencia, o subir de categoría añadiendo músculo con control, esa especialización tiene valor real que no encuentras en un nutricionista generalista.',
      },
      {
        titulo: 'Masaje terapéutico orientado al rendimiento deportivo',
        descripcion: 'El masaje terapéutico de tejido profundo en Benito Juárez está pensado para deportistas, no para spa. Los terapeutas con formación en masaje deportivo trabajan zonas específicas de sobrecarga — hombros y zona cervical para boxeadores y CrossFitters, caderas y piernas para corredores — con técnicas que mejoran la circulación, liberan adherencias y aceleran la recuperación entre sesiones de alto volumen.',
      },
      {
        titulo: 'Centros de bienestar accesibles sin sacrificar calidad',
        descripcion: 'Benito Juárez tiene centros de bienestar con precios 20-30% menores que Polanco o Santa Fe para calidad técnica comparable. Para atletas que necesitan atención regular de fisio y nutrición sin presupuesto de club privado, esta alcaldía ofrece opciones reales. Evalúa las credenciales del profesional antes que la dirección del consultorio.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta la fisioterapia deportiva en Benito Juárez?',
        a: 'Las sesiones de fisioterapia en Benito Juárez cuestan entre $600 y $1,800 MXN por 45-60 minutos. Las clínicas de la zona WTC-Insurgentes suelen estar en el rango alto con equipamiento más completo. Las de Del Valle y Narvarte tienen buena calidad a precios 20-30% menores. Paquetes de 10 sesiones suelen tener descuento. Para lesiones agudas, la frecuencia inicial recomendada es 2-3 veces por semana.',
      },
      {
        q: '¿Cómo encuentro un nutricionista deportivo de confianza en Benito Juárez?',
        a: 'Busca profesionales con Licenciatura en Nutrición y Ciencias de los Alimentos de universidades mexicanas reconocidas más especialización en nutrición deportiva. El registro en el Colegio Mexicano de Nutriólogos es verificable. Señal positiva: te pide historial de entrenamiento, composición corporal y objetivo específico antes de cualquier recomendación. Señal negativa: protocolo genérico sin evaluación individual.',
      },
      {
        q: '¿Hay psicología deportiva disponible en Benito Juárez?',
        a: 'Sí, algunos centros de bienestar del WTC y Insurgentes tienen psicólogos con especialización en deporte. Para atletas de combate, la psicología deportiva tiene aplicación real en manejo de ansiedad precompetitiva, rutinas de activación y recuperación mental después de derrotas. Una consulta inicial vale para evaluar si aplica a tu situación concreta. No es necesario para atletas recreativos, sí útil para quienes compiten con regularidad.',
      },
      {
        q: '¿Vale la pena la acupuntura para recuperación deportiva?',
        a: 'Para dolor muscular crónico, tendinitis persistente y recuperación de sobrecargas repetitivas (muy común en boxeo por el trabajo de hombros), la acupuntura tiene evidencia de efectividad en esas condiciones. Benito Juárez tiene algunos practicantes con formación seria en medicina tradicional china. Verifica titulación antes de la primera sesión — el campo tiene mucha variación de calidad.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar', value: '35+' },
      { label: 'Fisioterapia sesión', value: '$600–$1,800 MXN' },
      { label: 'Masaje terapéutico', value: '$500–$1,200 MXN' },
      { label: 'Consulta nutrición', value: '$800–$2,000 MXN' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,
}
