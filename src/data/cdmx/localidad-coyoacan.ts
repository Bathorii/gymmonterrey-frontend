// src/data/cdmx/localidad-coyoacan.ts

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

const vecinos = getVecinos('coyoacan')

const categoriaLinks: CatLink[] = [
  { slug: 'gimnasios', label: '🏋️ Gimnasios (124)' },
  { slug: 'estudios', label: '🧘 Estudios' },
  { slug: 'entrenadores', label: '🚶 Entrenadores' },
  { slug: 'eventos', label: '📅 Eventos' },
  { slug: 'bienestar', label: '🌿 Bienestar' },
]

export const localidadContent = {
  nombre: 'Coyoacán',
  slug: 'coyoacan',
  lastReviewed: '2026-06-02',

  sobreBarrio: `Coyoacán es la delegación que más me gusta de toda la CDMX para entrenar: tiene cultura universitaria, espacios verdes reales y una comunidad fitness que no necesita Instagram para existir. Los Viveros son el pulmón verde del sur — corredores desde las 6am, ciclistas, grupos de yoga al amanecer. El Jardín Centenario le da al barrio una identidad que ninguna otra delegación tiene igual.

La UNAM y el Estadio Olímpico universitario son la columna vertebral deportiva de Coyoacán. La concentración de estudiantes e investigadores crea una demanda fitness educada — gente que busca metodología, no solo sudar. Eso se traduce en boxes de CrossFit con programación seria e instructores de yoga con formación real.

Los precios son más accesibles que en Roma Norte o Polanco sin sacrificar calidad. Un gimnasio bien equipado cuesta entre $700 y $2,000 MXN al mes. La oferta de CrossFit y yoga es fuerte, reflejo de una comunidad que mezcla cultura bohemia con disciplina real. Para mí, cuate, Coyoacán es donde el fitness de CDMX tiene más sustancia.`,

  gimnasios: {
    h1: 'Gimnasios en Coyoacán, CDMX – 124 opciones universitarias 2026',
    metaDesc: 'Gimnasios en Coyoacán, CDMX: 124 opciones $700–$2,000 MXN/mes. UNAM, Viveros, Estadio Olímpico. CrossFit y pesas serias. Guía de Rodrigo 2026.',
    intro: `Coyoacán tiene 124 gimnasios registrados y la distribución refleja la dualidad del barrio: opciones universitarias accesibles cerca de la UNAM y opciones más equipadas en las zonas residenciales para el perfil profesional que vive aquí. El rango de precios va de $700 a $2,000 MXN al mes — más barato que Polanco o Santa Fe, y con calidad de equipamiento que supera a muchas zonas de precio similar en la ciudad.

La cultura deportiva de Coyoacán tiene raíz universitaria real. Los estudiantes de la UNAM, los investigadores del campus y los profesionistas del sur de la ciudad crean una demanda de entrenamiento que va más allá del cardio básico. encuentras zonas de pesas libres serias, racks de sentadilla en buen estado y un ambiente donde levantar hierro no es extraño — es lo normal.

Los Viveros de Coyoacán agregan una dimensión outdoor que pocos barrios de CDMX tienen: corredores desde las 6am, grupos de ciclistas, sesiones de yoga al aire libre. Para un cuate que combina gym con cardio outdoor, vivir o trabajar cerca de Coyoacán es una ventaja real de calidad de vida que no tiene precio de membresía.

El Estadio Olímpico Universitario es escenario de eventos deportivos durante todo el año — desde atletismo universitario hasta eventos de masa que generan ambiente de actividad física en toda la zona. Esa energía deportiva contagia y se siente en los gimnasios cercanos: el perfil de socio es más atlético que cosmético.

Comparación honesta con Roma Norte: Roma tiene más boutiques premium y más opciones de moda fitness. Coyoacán tiene mejor relación precio-equipamiento y un ambiente más deportivo. Si entrenas en serio y no necesitas el código postal de Roma, Coyoacán te da más por el mismo dinero. A huevo que sí.`,
    queEsperar: [
      {
        titulo: 'Equipamiento serio con influencia universitaria',
        descripcion: 'Los gimnasios cercanos a la UNAM y el campus universitario tienen equipamiento funcional pensado para atletas con criterio. Racks de sentadilla, plataformas, barras olímpicas en buen estado — el perfil del socio universitario exige más que máquinas de circuito. Revisá el estado de las barras y las pesas antes de inscribirte: ahí está la diferencia real entre un gimnasio que invierte y uno que no.',
      },
      {
        titulo: 'Precios accesibles sin sacrificar calidad',
        descripcion: 'El rango de $700 a $2,000 MXN por mes en Coyoacán es entre un 20 y un 40% menos que opciones comparables en Polanco o Roma Norte. La razón es estructural: el mercado universitario no aguanta precios de moda, y los gimnasios adaptaron su propuesta. Para quien busca equipamiento real a precio razonable, Coyoacán es una de las mejores opciones del sur de CDMX.',
      },
      {
        titulo: 'Acceso a Viveros como espacio outdoor complementario',
        descripcion: 'Los Viveros de Coyoacán son 40 hectáreas de espacio verde con circuito perimetral para correr, caminar y andar en bici. El acceso es gratuito y el espacio abre desde las 6am. Para alguien que quiere combinar sala de pesas con cardio outdoor, tener los Viveros a distancia caminable del gimnasio es una ventaja de calidad de vida real.',
      },
      {
        titulo: 'Ambiente deportivo vs. cosmético',
        descripcion: 'Coyoacán tiene menos "gym Instagram" que Polanco o Roma Norte. El ambiente general es más deportivo y menos aspiracional en términos de imagen. Para atletas que quieren concentrarse en entrenar sin el ruido del lifestyle fitness, eso es una ventaja. Encontrarás menos selfies en el espejo y más gente con libreta de seguimiento.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Coyoacán en 2026?',
        a: 'El rango en Coyoacán va de $700 MXN al mes en opciones básicas cerca del campus universitario hasta $2,000 MXN en gimnasios con equipamiento premium y servicios adicionales. La mayoría de opciones bien equipadas están entre $900 y $1,500 MXN. Algunos cobran inscripción de $300-$800 MXN al inicio — pregunta si está incluida en el primer mes. Comparado con Polanco o Roma Norte, Coyoacán es entre un 25 y un 40% más accesible para equipamiento equivalente.',
      },
      {
        q: '¿Cuál es el mejor gimnasio en Coyoacán para entrenamiento de fuerza?',
        a: 'Para fuerza seria, busca los gimnasios independientes con zona de peso libre equipada — racks de sentadilla, plataformas, barras olímpicas en buen estado. Evita evaluar solo por la máquina de cardio del lobby: entra a la zona de pesas y revisa el estado real del equipo. Los gimnasios cercanos al campus universitario suelen tener este perfil porque su base de socios lo exige. Pregunta al entrante que está entrenando — ellos saben mejor que cualquier reseña.',
      },
      {
        q: '¿Cómo llego a los gimnasios de Coyoacán en Metro?',
        a: 'Las estaciones de Metro Coyoacán (Línea 3) y Viveros (Línea 3) cubren la parte central del barrio. Para el campus universitario, el Metrobús por Insurgentes tiene paradas cercanas. El tráfico en Coyoacán es manejable en comparación con el norte de la ciudad, y muchos socios van en bicicleta — hay ciclopuertos en varios gimnasios de la zona. En hora pico, el Metro es siempre más predecible que el carro.',
      },
      {
        q: '¿Vale más Coyoacán o Roma Norte para entrenar?',
        a: 'Roma Norte tiene más boutiques, más opciones de CrossFit premium y más ambiente de moda fitness. Coyoacán tiene mejor precio por peso, ambiente más deportivo y los Viveros como bono outdoor que Roma no puede igualar. Para entrenamiento de fuerza serio, Coyoacán gana en relación costo-beneficio. Para quien quiere el ambiente social de los grandes boxes de CrossFit boutique, Roma Norte tiene más opciones. Neta, cuate — depende de qué priorizas.',
      },
    ],
    stats: [
      { label: 'Gimnasios registrados', value: '124' },
      { label: 'Precio mensual', value: '$700–$2,000 MXN' },
      { label: 'Metro', value: 'Coyoacán · Viveros (L3)' },
      { label: 'Espacio outdoor', value: 'Viveros de Coyoacán' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  estudios: {
    h1: 'Estudios fitness en Coyoacán, CDMX – CrossFit, Yoga y Pilates 2026',
    metaDesc: 'Estudios fitness en Coyoacán: CrossFit, yoga Viveros, pilates, funcional. $600–$1,800 MXN/mes. UNAM, campus universitario. Guía Rodrigo 2026.',
    intro: `Coyoacán tiene la mejor oferta de CrossFit y yoga del sur de CDMX, y lo que la distingue no es el diseño del local sino la seriedad del trabajo. La cultura universitaria del barrio atrae instructores con formación real — no solo certificados de fin de semana — y una comunidad que sabe evaluarlos. Para alguien como yo que viene del box y exige programación periodizada, ese contexto hace diferencia.

Los boxes de CrossFit afiliados en Coyoacán tienen el perfil que más aprecio: atletas comprometidos, coaches que entienden periodización y la capacidad de adaptar el WOD según nivel real del practicante, no el nivel que dicen tener. Hay boxes en el barrio que llevan 5+ años con la misma comunidad — eso habla de calidad que los números de Instagram no miden.

El yoga en Coyoacán tiene una dimensión que pocos barrios de CDMX ofrecen: los Viveros son escenario de práctica al aire libre durante todo el año. Grupos de yoga en el amanecer, instructoras con formación en tradiciones específicas (Ashtanga, Iyengar) y una comunidad que practica por razones más allá del wellness selfie. Para quien quiere yoga como práctica real, Coyoacán es una de las mejores zonas de la ciudad.

El pilates y el funcional también tienen presencia sólida — estudios que trabajan con grupos pequeños, instructoras que conocen la progresión de cada alumna y precios que permiten consistencia. Una clase suelta va de $150 a $400 MXN — accesible para probar antes de comprometerte.

La bohemia de Coyoacán impacta hasta en la oferta fitness: encontrarás estudios de danza contemporánea que mezclan con movimiento somático, clases de meditación guiada con base en psicología cognitiva y talleres de nutrición holística que vale filtrar con criterio pero que en algunos casos tienen sustancia real.`,
    queEsperar: [
      {
        titulo: 'CrossFit con comunidad de largo plazo',
        descripcion: 'Los boxes de Coyoacán tienen comunidades más estables que los de Polanco o Roma — el perfil universitario y profesional del barrio genera socios que se quedan. Eso se nota en el nivel técnico promedio de las clases y en la cultura de seguimiento mutuo. La inducción antes de clases regulares es señal de que el box se toma en serio la seguridad y la técnica.',
      },
      {
        titulo: 'Yoga con dimensión outdoor en Viveros',
        descripcion: 'Los Viveros de Coyoacán tienen grupos de yoga al aire libre con regularidad, especialmente fines de semana y temprano en la mañana. Algunos son gratuitos, organizados por instructores independientes. Para complementar la práctica de estudio, las sesiones en Viveros agregan una dimensión de contacto con naturaleza que pocos espacios de CDMX ofrecen.',
      },
      {
        titulo: 'Pilates con grupos pequeños y seguimiento real',
        descripcion: 'Los estudios de pilates de Coyoacán trabajan con grupos de 4-8 personas para garantizar supervisión activa. Instructoras con certificación BASI, Stott o Pilates Method Alliance. Para trabajo de core avanzado o rehabilitación postural, el formato de grupo pequeño con instructora certificada justifica el precio. Pregunta por la certificación directamente.',
      },
      {
        titulo: 'Oferta bohemia que vale filtrar',
        descripcion: 'Coyoacán tiene estudios que mezclan fitness con prácticas más alternativas — danza somática, breathwork, yoga terapéutico. Algunas tienen base real en formación certificada; otras son marketing de bienestar sin sustancia. El filtro: ¿el instructor tiene formación específica verificable? ¿puede explicar el fundamento fisiológico de lo que enseña? Si la respuesta es vaga, es señal.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta una clase de CrossFit en Coyoacán?',
        a: 'Una clase suelta en los boxes de Coyoacán cuesta entre $200 y $400 MXN. Los paquetes mensuales van de $1,200 a $2,500 MXN según frecuencia semanal. La mayoría ofrece plan de 3 clases semanales y plan ilimitado. Comparado con boxes de Roma Norte o Polanco, Coyoacán suele ser entre un 15 y un 30% más accesible para programación comparable. Siempre pide una clase de prueba antes de comprar el mes.',
      },
      {
        q: '¿Hay estudios de yoga con práctica seria en Coyoacán?',
        a: 'Sí, y es una de las fortalezas del barrio. Hay estudios con instructores certificados en Ashtanga, Iyengar y Vinyasa con años de práctica y formación en India o Brasil. Busca los que hacen clases de máximo 12 personas — eso indica que priorizan la corrección de técnica sobre el volumen de socios. Para yoga como práctica real, Coyoacán tiene de las mejores opciones del sur de CDMX. Clases sueltas desde $150 MXN, paquetes mensuales de $800 a $1,800 MXN.',
      },
      {
        q: '¿Puedo hacer ejercicio gratis en los Viveros de Coyoacán?',
        a: 'Sí. Los Viveros tienen acceso gratuito (costo simbólico de entrada algunos días) y están diseñados para actividad física — circuito perimetral de 3.5km para correr o caminar, espacio para ciclismo, zonas de pasto para ejercicio y yoga. Abren desde las 6am. Para grupos de yoga o running al aire libre, los Viveros son el mejor recurso gratuito del barrio. Hay instructores independientes que organizan clases en el parque los fines de semana — buscalos en Instagram con #ViverosCoyoacan.',
      },
      {
        q: '¿Vale la pena un estudio en Coyoacán si puedo ir a Roma Norte?',
        a: 'Para CrossFit y yoga serio, Coyoacán compite muy bien con Roma Norte a mejor precio. Lo que Roma Norte tiene sobre Coyoacán es variedad y visibilidad — más opciones, más marcas conocidas, más ambiente social. Lo que Coyoacán tiene sobre Roma es comunidades más estables, instructores con más años en el mismo espacio y los Viveros como recurso outdoor sin costo. Si el entrenamiento es la prioridad y no el ambiente social de moda, Coyoacán es la mejor chamba del sur.',
      },
    ],
    stats: [
      { label: 'Estudios fitness', value: '30+' },
      { label: 'Clase suelta', value: '$150–$400 MXN' },
      { label: 'Disciplinas', value: 'CrossFit · Yoga · Pilates' },
      { label: 'Outdoor gratis', value: 'Viveros de Coyoacán' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  entrenadores: {
    h1: 'Entrenadores personales en Coyoacán, CDMX – Certificados 2026',
    metaDesc: 'Entrenadores personales en Coyoacán, CDMX. PTs con certificación, sesiones $400–$1,200 MXN. Viveros, UNAM, domicilio. Guía Rodrigo 2026.',
    intro: `Coyoacán tiene entrenadores personales con formación académica real y una relación con el entrenamiento que va más allá de motivarte en Instagram. La proximidad a la UNAM, a la Facultad de Medicina y a institutos de educación física genera un pool de licenciados en Ciencias del Deporte y nutricionistas con comprensión real de fisiología del ejercicio. Para un cuate que exige técnica y programación periodizada, eso marca la diferencia.

Los entrenadores de Coyoacán trabajan en tres modalidades principales: gym, Viveros y domicilio. La modalidad outdoor en Viveros es especialmente interesante — sesiones de funcional, running y calistenia en un espacio verde de 40 hectáreas que la mayoría de CDMX no tiene. Para alguien que quiere salir del box sin perder la guía del entrenador, esa opción es real y accesible en este barrio.

Las tarifas van de $400 a $1,200 MXN por sesión de 60 minutos. Comparado con Polanco o Lomas de Chapultepec, es entre un 25 y un 40% más accesible para formación equivalente. Paquetes de 10 sesiones tienen descuento habitual del 10-15%.

Lo que diferencia un buen entrenador de uno que te acompaña con cara de importancia: evaluación inicial real con valoración postural y funcional, programación escrita con progresión de carga documentada, corrección de técnica activa y honestidad sobre los tiempos reales de los resultados. Si el primer día te pone a hacer burpees sin evaluar cómo te mueves, es señal de que el training es de relleno.

La cultura bohemia de Coyoacán también produce entrenadores con enfoque integral — que entienden nutrición, descanso y estilo de vida como parte del sistema de entrenamiento, no como extras. Para alguien que quiere un entrenador que piense en el panorama completo, el perfil del barrio favorece ese enfoque.`,
    queEsperar: [
      {
        titulo: 'Formación académica verificable',
        descripcion: 'La proximidad a la UNAM y a institutos de educación física genera entrenadores con licenciatura en Ciencias del Deporte o Educación Física. Esa formación implica anatomía funcional, fisiología del ejercicio y metodología de entrenamiento con base científica. Pide siempre el título o la certificación antes de contratar — un buen entrenador lo muestra sin que se lo pidas.',
      },
      {
        titulo: 'Sesiones en Viveros como opción outdoor',
        descripcion: 'Varios entrenadores de Coyoacán ofrecen sesiones en los Viveros — funcional, carrera intervalada, calistenia y circuitos outdoor. Es una opción real para quien quiere variedad sin el costo de una sala adicional. Para sesiones de fuerza con carga alta, la sala sigue siendo necesaria; para trabajo cardiovascular, funcional y de movilidad, los Viveros son tan efectivos como cualquier espacio cubierto.',
      },
      {
        titulo: 'Enfoque integral: entrenamiento y estilo de vida',
        descripcion: 'Los entrenadores de Coyoacán suelen tener una visión más amplia del rendimiento — entienden que el sueño, el estrés y la nutrición impactan los resultados tanto como el volumen de entrenamiento. Para alguien que quiere más que una rutina de ejercicios, ese perfil tiene valor real. Pregunta en la primera sesión cómo trabajan la nutrición y el descanso: la respuesta te dice mucho.',
      },
      {
        titulo: 'Evaluación antes del entrenamiento, siempre',
        descripcion: 'Un entrenador serio en Coyoacán empieza con valoración antes de ponerte a cargar: postura, movilidad, historial de lesiones, objetivos específicos. Si el primer día te da una rutina genérica sin evaluar, ese entrenador no está haciendo su trabajo. En la primera sesión, observa si pregunta más de lo que habla — eso es señal de un profesional que sabe que cada cliente es diferente.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Coyoacán?',
        a: 'Las tarifas van de $400 a $1,200 MXN por sesión de 60 minutos según formación, especialidad y modalidad. Entrenadores con licenciatura universitaria y especialización cobran en el rango medio-alto. Sesiones en Viveros pueden ser algo más económicas que en gimnasio porque no hay costo de sala. Paquetes de 10 sesiones tienen descuento del 10-15%. Comparado con Polanco o Santa Fe, Coyoacán es entre un 25 y un 40% más accesible para la misma formación.',
      },
      {
        q: '¿Cómo verifico que un entrenador de Coyoacán tiene formación real?',
        a: 'Pide el título o la certificación antes de contratar. Certificaciones internacionales válidas: NSCA-CPT, ACE-CPT, NASM, CSCS. Título universitario de licenciatura en Ciencias del Deporte o Educación Física de la UNAM o equivalente. También puedes pedir referencias de clientes anteriores. Un buen entrenador no tiene problema en mostrar su formación — el que esquiva esas preguntas te está diciendo algo. La neta, cuate.',
      },
      {
        q: '¿Hay entrenadores especializados en CrossFit o halterofilia en Coyoacán?',
        a: 'Sí. Los coaches de CrossFit de los boxes afiliados del barrio tienen certificación Level 1 o Level 2 de CrossFit HQ. Para halterofilia específica, el mejor camino es consultar en los gimnasios con plataformas — suelen tener entrenadores con ese background. También los grupos de Facebook de halterofilia CDMX o los foros de r/weightlifting en español tienen referencias por zona. El Estadio Olímpico de la UNAM es otro punto de contacto con entrenadores de atletismo y fuerza.',
      },
      {
        q: '¿Vale la pena contratar PT si ya tengo experiencia entrenando?',
        a: 'Depende de en qué punto estás y qué buscas. Si llevas 2+ años entrenando con técnica sólida y programación propia, el PT tiene valor en ciclos específicos: preparación para competencia, corrección de un plateau de fuerza, técnica en movimientos olímpicos. Si quieres un entrenador de largo plazo para hacer seguimiento y periodización anual, también tiene sentido. En Coyoacán puedes encontrar ese perfil de entrenador a precio razonable. No es lo mismo que en Roma Norte donde pagas más por el código postal que por el training.',
      },
    ],
    stats: [
      { label: 'Entrenadores activos', value: '50+' },
      { label: 'Sesión individual', value: '$400–$1,200 MXN' },
      { label: 'Modalidades', value: 'Gym · Viveros · Domicilio' },
      { label: 'Formación dominante', value: 'Licenciados UNAM / NSCA' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  eventos: {
    h1: 'Eventos fitness en Coyoacán, CDMX – Viveros, UNAM y CrossFit 2026',
    metaDesc: 'Eventos fitness en Coyoacán 2026: Viveros, Estadio Olímpico UNAM, competencias CrossFit, carreras. La zona con más movimiento outdoor del sur de CDMX.',
    intro: `Coyoacán tiene el mejor calendario de eventos deportivos al aire libre del sur de la CDMX, y la razón es estructural: los Viveros, el campus de la UNAM y el Estadio Olímpico Universitario crean una infraestructura de eventos que ninguna otra delegación del sur puede replicar. Para un güey que quiere competir, entrenar en eventos o simplemente participar en actividad física colectiva, Coyoacán tiene algo para cada mes del año.

Los Viveros de Coyoacán hospedan eventos de running con regularidad — desde carreras organizadas por el gobierno de la delegación hasta eventos privados de clubes de corredores. El circuito de 3.5km del perímetro es uno de los más usados por grupos de running de CDMX para entrenamiento semanal y algunos eventos menores de carrera. Para corredores que entrenan en el sur de la ciudad, los Viveros son el punto de encuentro obvio.

El Estadio Olímpico Universitario de la UNAM es uno de los estadios más icónicos de México y sede de eventos deportivos durante todo el año: partidos de la UNAM, eventos de atletismo universitario, algunos eventos masivos. Para atletas que quieren vivir el ambiente deportivo de un estadio histórico, estar en Coyoacán es estar cerca de eso.

Las competencias de CrossFit tienen buena representación en el barrio — los boxes de la zona participan en el circuito de eventos de CDMX y organizan competencias internas trimestrales. El nivel es variado — hay categorías para principiantes — y el ambiente es más de trabajo que de espectáculo.

Los eventos culturales de Coyoacán — el Jardín Centenario, los mercados del barrio, las ferias artesanales — también tienen sus dimensiones de bienestar: talleres de meditación, clases de yoga al aire libre, charlas de nutrición que vale filtrar con criterio. El barrio bohemio tiene mucho ruido de bienestar alternativo mezclado con contenido real.`,
    queEsperar: [
      {
        titulo: 'Running en Viveros: circuito y eventos periódicos',
        descripcion: 'Los Viveros tienen circuito perimetral de 3.5km habilitado para corredores, ciclistas y caminantes con acceso gratuito. Grupos de running se encuentran aquí los fines de semana y algunos días de semana temprano. Eventos de carrera organizados en los Viveros ocurren varias veces al año. Para corredores que buscan entrenar en grupo, es el recurso más consistente del sur de CDMX.',
      },
      {
        titulo: 'Estadio Olímpico de la UNAM: deporte y atletismo',
        descripcion: 'El Estadio Olímpico Universitario es sede de eventos de atletismo, partidos de fútbol y algunos eventos deportivos masivos. El campus de la UNAM tiene instalaciones deportivas adicionales: albercas olímpicas, canchas de atletismo, gimnasios. Algunos están disponibles para público externo a la universidad — consulta directamente con la Dirección General de Deporte Universitario de la UNAM.',
      },
      {
        titulo: 'Competencias CrossFit en el sur de CDMX',
        descripcion: 'Los boxes de Coyoacán participan en el circuito de eventos de CrossFit de CDMX y organizan competencias internas trimestrales. Las categorías incluyen principiantes, scaled y Rx. El ambiente es más deportivo que de espectáculo — funciona bien para quien quiere competir por primera vez en un entorno de trabajo real sin la presión de los grandes eventos comerciales.',
      },
      {
        titulo: 'Talleres de bienestar: filtra con criterio',
        descripcion: 'Coyoacán tiene talleres de yoga, meditación, nutrición holística y movimiento somático durante todo el año. La calidad varía enormemente — hay instructores con formación real mezclados con coaches de bienestar sin credenciales verificables. El filtro siempre es: ¿el ponente tiene título universitario o certificación verificable? ¿puede explicar el fundamento científico de lo que enseña? Si la respuesta es vaga, el taller es marketing de bienestar.',
      },
    ],
    faq: [
      {
        q: '¿Qué eventos deportivos gratuitos hay en Coyoacán?',
        a: 'Los Viveros de Coyoacán tienen acceso gratuito (entrada nominal algunos días) y circuito de running sin costo. Los grupos de running del barrio son gratuitos — buscalos en Instagram con #RunningCoyoacan o #ViverosCoyoacan. Algunos eventos de atletismo en el campus de la UNAM tienen acceso abierto. El Jardín Centenario tiene clases de yoga al aire libre organizadas periódicamente por instructores independientes. La mayoría de actividad física outdoor en Coyoacán es gratuita o de costo mínimo.',
      },
      {
        q: '¿Cómo me entero de las competencias CrossFit en Coyoacán?',
        a: 'El mejor canal es Instagram — sigue los boxes afiliados de la zona (busca CrossFit + Coyoacán). Las competencias internas se anuncian con 3-4 semanas de anticipación. Para el circuito de eventos de CDMX, la página de CrossFit México y organizadores como Throwdown México tienen la agenda de la temporada. Inscripciones generalmente por DM de Instagram o formulario en línea. Costo: $300-$800 MXN según formato y categoría.',
      },
      {
        q: '¿Puedo usar las instalaciones deportivas de la UNAM sin ser estudiante?',
        a: 'Algunas instalaciones de la UNAM están disponibles para público externo. La Dirección General de Deporte Universitario (DGDU) de la UNAM tiene programas abiertos a la comunidad en instalaciones como el frontón, la alberca y algunas canchas. El costo es accesible. La página web de la DGDU UNAM tiene la información actualizada de programas para comunidad externa. Llama directamente para confirmar disponibilidad y costo — los programas cambian cada semestre.',
      },
      {
        q: '¿Hay maratones o carreras que pasen por Coyoacán?',
        a: 'Sí. Coyoacán forma parte de algunas rutas de carreras del sur de CDMX. Los eventos más grandes de la ciudad — Maratón de la CDMX, Carrera Telcel, eventos del Club de Corredores — a veces incluyen tramos por la delegación. Para carreras locales, la Delegación Coyoacán organiza eventos periódicos con distancias de 5K y 10K. Sigue la cuenta oficial de la Alcaldía Coyoacán para fechas. El circuito de Viveros también es punto de salida de algunos eventos privados de running clubs.',
      },
    ],
    stats: [
      { label: 'Eventos/año', value: '25+' },
      { label: 'Circuito outdoor', value: 'Viveros 3.5km' },
      { label: 'Estadio', value: 'Olímpico UNAM' },
      { label: 'CrossFit competencias', value: 'Trimestral' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  bienestar: {
    h1: 'Bienestar y recuperación en Coyoacán, CDMX – Fisio, Nutrición y Masajes 2026',
    metaDesc: 'Bienestar en Coyoacán: fisioterapia deportiva, nutrición UNAM, masajes $400–$1,200 MXN. CrossFit, yoga y recuperación seria. Guía Rodrigo 2026.',
    intro: `Coyoacán tiene una infraestructura de bienestar deportivo que refleja el perfil universitario y profesional del barrio: fisioterapeutas con especialización real, nutricionistas con formación académica seria y terapeutas de masaje que entienden la diferencia entre un atleta y alguien que quiere relajarse. Para un boksero amateur como yo que entrena 5 días a la semana, ese acceso a bienestar de calidad a precio razonable no es un lujo — es parte del sistema de entrenamiento.

La fisioterapia deportiva en Coyoacán tiene respaldo universitario directo: la UNAM forma fisioterapeutas con especialización en deportes y varios trabajan en clínicas de la zona. Eso significa diagnóstico de movimiento funcional real, no solo electros y masaje superficial. Una sesión de fisioterapia en Coyoacán va de $400 a $1,200 MXN — accesible para consultas regulares, no solo cuando ya hay lesión.

Los nutricionistas deportivos del barrio tienen la formación que más importa para atletas de fuerza: entienden periodización nutricional, composición corporal y la diferencia entre una dieta de mantenimiento y una de preparación para competencia. La UNAM y otras instituciones del sur de la ciudad generan ese perfil con regularidad. Para un cuate que quiere saber qué comer alrededor del entrenamiento de fuerza — no solo "come saludable" — un nutricionista deportivo certificado en Coyoacán tiene respuestas reales.

El masaje terapéutico deportivo también tiene buena presencia: terapeutas que trabajan tejido profundo, liberación miofascial y técnicas específicas para atletas. Para alguien que hace box o CrossFit con volumen alto, el masaje de recovery no es opcional si quieres rendir en cada sesión.

La oferta bohemia del barrio también incluye opciones más alternativas — acupuntura, terapia floral, masajes energéticos. Esas tienen su espacio pero hay que evaluarlas con criterio separado del bienestar deportivo basado en evidencia.`,
    queEsperar: [
      {
        titulo: 'Fisioterapia deportiva con respaldo universitario',
        descripcion: 'La proximidad a la UNAM y a la Facultad de Medicina genera fisioterapeutas con formación universitaria y especialización en deporte. Busca profesionales con cédula profesional y experiencia específica en atletas. La primera sesión debería incluir evaluación de movimiento funcional — si solo proponen masaje sin diagnóstico previo, no es fisioterapia deportiva, es masoterapia.',
      },
      {
        titulo: 'Nutrición deportiva con formación académica',
        descripcion: 'Los nutricionistas de Coyoacán con formación en la UNAM o equivalente tienen base científica sólida para trabajo de composición corporal, periodización nutricional y planes específicos para fuerza y resistencia. Para atletas de fuerza o CrossFit, busca nutricionistas con experiencia en deporte de rendimiento — la diferencia entre nutrición general y nutrición deportiva es real y afecta los resultados.',
      },
      {
        titulo: 'Masaje terapéutico para atletas de fuerza',
        descripcion: 'El masaje de tejido profundo para atletas trabaja fascias, libera adherencias musculares y se enfoca en zonas de sobrecarga específica según la actividad. En Coyoacán hay terapeutas con formación en masaje deportivo y técnicas de liberación miofascial. Una sesión de 60 minutos post-semana de volumen alto hace diferencia real en DOMS y rango de movimiento.',
      },
      {
        titulo: 'Opciones alternativas: filtrar con criterio',
        descripcion: 'La cultura bohemia de Coyoacán genera una oferta amplia de bienestar alternativo: acupuntura, terapia floral, healing, masaje energético. Algunas tienen base en evidencia científica acumulada (acupuntura para dolor crónico, por ejemplo); otras son placebo bien vendido. El filtro: ¿el profesional puede explicar el mecanismo de acción de lo que ofrece con respaldo en estudios? Si la respuesta es solo testimonios, evalúa con criterio.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta una sesión de fisioterapia deportiva en Coyoacán?',
        a: 'Las sesiones van de $400 a $1,200 MXN por sesión de 45-60 minutos según especialización y clínica. Fisioterapeutas con especialización en deporte o biomecánica deportiva cobran en el rango alto. Paquetes de 10 sesiones tienen descuento habitual. Comparado con Polanco o Lomas, Coyoacán es entre un 20 y un 35% más accesible para formación equivalente. Para lesiones agudas, la frecuencia inicial puede ser 2-3 veces por semana. Para mantenimiento preventivo, 1 sesión al mes es suficiente para la mayoría de atletas.',
      },
      {
        q: '¿Hay nutricionistas especializados en fuerza y CrossFit en Coyoacán?',
        a: 'Sí, y la calidad está vinculada a la formación universitaria de la zona. Busca nutricionistas con título de licenciatura en nutrición y dietética (cédula profesional obligatoria en México), con especialización o experiencia en deporte de rendimiento. Para encontrarlos, consulta en los boxes de CrossFit del barrio — los coaches suelen trabajar con nutricionistas de confianza que conocen el metabolismo del entrenamiento de alta intensidad. También hay nutricionistas con práctica dentro de clínicas del área de Ciudad Universitaria.',
      },
      {
        q: '¿Qué tipo de masaje conviene después de entrenamiento de box?',
        a: 'Para box o cualquier deporte de contacto e impacto alto, el masaje de tejido profundo y la liberación miofascial tienen más retorno que el masaje sueco estándar. Trabajan las adherencias en fascia, liberan puntos de tensión en zonas de impacto habitual (hombros, caderas, tibiales) y mejoran el rango de movimiento para la siguiente sesión. El timing ideal es 24-48 horas después de la sesión más intensa de la semana. En Coyoacán hay terapeutas con formación específica en masaje deportivo — pregunta directamente si tienen experiencia con atletas de artes marciales o boxing.',
      },
      {
        q: '¿Vale más invertir en fisioterapia preventiva o esperar a tener lesión?',
        a: 'La fisioterapia preventiva tiene mucho mejor retorno que la reactiva. Una sesión de evaluación de movimiento cada 2-3 meses detecta compensaciones antes de que se vuelvan lesión — y una lesión seria puede sacarte del entrenamiento 4-8 semanas, que en términos de pérdida de rendimiento y desentrenamiento es mucho más costoso que la sesión preventiva. Para alguien que entrena 4+ días por semana con carga alta, la fisio preventiva es parte del sistema de entrenamiento. En Coyoacán puedes hacer eso a precio razonable — a huevo que es la mejor inversión.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar', value: '25+' },
      { label: 'Fisioterapia sesión', value: '$400–$1,200 MXN' },
      { label: 'Masaje terapéutico', value: '$400–$1,000 MXN' },
      { label: 'Consulta nutrición', value: '$500–$1,500 MXN' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,
}
