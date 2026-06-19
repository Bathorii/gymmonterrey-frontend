// src/data/cdmx/localidad-tlahuac.ts

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

const vecinos = getVecinos('tlahuac')

const categoriaLinks: CatLink[] = [
  { slug: 'gimnasios', label: '🏋️ Gimnasios (43)' },
  { slug: 'estudios', label: '🧘 Estudios' },
  { slug: 'entrenadores', label: '🚴 Entrenadores' },
  { slug: 'eventos', label: '📅 Eventos' },
  { slug: 'bienestar', label: '🌿 Bienestar' },
]

export const localidadContent = {
  nombre: 'Tláhuac',
  slug: 'tlahuac',
  lastReviewed: '2026-06-11',

  sobreBarrio: `Tláhuac es la alcaldía que la mayoría de chilangos ubican en el mapa pero pocos conocen bien. Al sureste de la CDMX, con acceso por el Tren Ligero (Línea 12 del Metro) y la Avenida Tláhuac como columna vertebral, ese aislamiento relativo le da una identidad propia que no tiene nada que ver con la efervescencia de Roma Norte o Condesa.

La cultura deportiva es de barrio y de pueblo a la vez — la alcaldía tiene zonas urbanas densas y zonas casi rurales con chinampas y el Lago Tláhuac. El deporte popular tiene mucho espacio acá: fútbol en las canchas barriales, voleibol en espacios públicos y gimnasios independientes que llevan años atendiendo a la comunidad. No hay boutiques CrossFit ni yoga studios de diseño — hay salas de pesas con precio justo y entrenadores que conocen a sus clientes por nombre desde hace años.

Para quien vive en Tláhuac, los gimnasios del barrio son la opción lógica — económica y a distancia caminable. Para quien viene de fuera, hay que calcular bien el tiempo de traslado porque la distancia al centro es real, güey.`,

  gimnasios: {
    h1: 'Gimnasios en Tláhuac, CDMX — 43 opciones accesibles 2026',
    metaDesc: 'Gimnasios en Tláhuac CDMX: 43 opciones desde $250 MXN/mes. Tren Ligero L12, Av. Tláhuac. Precios reales sin boutiques: la alcaldía más económica del sur.',
    intro: `Tláhuac tiene 43 gimnasios registrados y la mayoría son exactamente lo que la alcaldía representa: establecimientos independientes, de barrio, con precios que no tienen inflación de marca. El rango real va de $250 a $800 MXN al mes — números que en Roma Norte o Condesa no te dan ni la mitad de lo que encuentras acá en equipamiento básico funcional.

La distribución de los gimnasios sigue la lógica de la alcaldía: los más accesibles están cerca de las estaciones del Tren Ligero y sobre la Avenida Tláhuac. Los del interior de los barrios son más íntimos, más baratos y más difíciles de encontrar si no conoces la zona. Ese conocimiento local importa más en Tláhuac que en cualquier otra alcaldía de la ciudad.

La cultura del gimnasio en Tláhuac es distinta a la del norte: acá la gente va a levantar hierro, a sudar y a volver a su chamba. No hay mucho de selfie, ni de ropa de marca, ni de reels de motivación. Hay consistencia y hay presencia. Para un cuate que busca ese ambiente sin distracciones, Tláhuac tiene esa propuesta auténtica que Roma Norte perdió hace tiempo.

Un punto importante que hay que decir directo: si buscas SmartFit, Bodytech o cualquier cadena de precio medio-alto con app y reserva en línea, no vas a encontrar eso en Tláhuac. Si buscas hierro, espacio y precio real, sí. La neta es que la propuesta de la alcaldía es para quien vive acá o para quien no necesita la cadena para entrenar bien.

El acceso por el Tren Ligero desde la Línea 12 del Metro hace que llegar desde el sur y el oriente de la ciudad sea más viable de lo que parece en el mapa. Desde el centro el trayecto es largo, güey — hay que ser honesto con eso. Pero para quien ya está en la zona sur, la conectividad funciona.`,
    queEsperar: [
      {
        titulo: 'Precios de barrio sin inflación de alcaldía premium',
        descripcion: 'Los gimnasios de Tláhuac operan en un mercado donde el precio es el factor decisivo para la mayoría de los clientes. Las membresías de $250 a $500 MXN al mes son comunes y realistas — no hay descuentos de temporada porque el precio de base ya es el más bajo de la oferta de la CDMX para establecimientos con equipo funcional. Para quien viene del norte de la ciudad, el ahorro puede ser de entre $300 y $1,500 MXN mensuales con equipamiento comparable.',
      },
      {
        titulo: 'Salas con peso libre y cultura de esfuerzo',
        descripcion: 'Los mejores gimnasios de Tláhuac tienen zona de peso libre con barras, discos y mancuernas en buen estado. El enfoque es el entrenamiento básico efectivo: sentadilla, press, jalón, peso muerto. No hay funcional room con cuerdas de batalla y kettlebells importadas, pero hay lo necesario para progresar si sabes programar. La cultura de la sala es seria sin ser excluyente.',
      },
      {
        titulo: 'Acceso por Tren Ligero: funcional desde la Línea 12',
        descripcion: 'El Tren Ligero conecta Tláhuac con la Línea 12 del Metro en la estación Tláhuac. Desde ahí puedes llegar a Pantitlán y conectar con las líneas del oriente, o ir hacia Mixcoac y el poniente. El servicio funciona, aunque la frecuencia en horas no pico es menor que el Metro. Para quien vive en la zona sur-oriente de la CDMX, el Tren Ligero hace a Tláhuac más accesible de lo que parece.',
      },
      {
        titulo: 'Comunidad de vecinos, no clientela de paso',
        descripcion: 'Los gimnasios de Tláhuac tienen clientela que lleva años en el mismo establecimiento. Eso crea un ambiente donde el instructor te conoce, sabe tu historial de entrenamiento y puede darte seguimiento real sin cobrarte extra. Para alguien que busca consistencia y comunidad barrial, ese modelo es más efectivo que rotar entre cadenas con staff que renueva cada tres meses.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Tláhuac en 2026?',
        a: 'Las membresías mensuales en Tláhuac van de $250 a $800 MXN al mes. Los gimnasios más básicos con pesas libres y cardiovascular cobran entre $250 y $400 MXN. Los establecimientos con más equipamiento o servicios adicionales llegan a $600 a $800 MXN. No hay cadenas premium establecidas en la alcaldía, lo que mantiene el precio de mercado por debajo de cualquier otro punto de la CDMX. Para inscripción adicional, suele ser de $100 a $200 MXN.',
      },
      {
        q: '¿Cómo llego a Tláhuac en transporte público?',
        a: 'El Tren Ligero (Línea 12 del Metro, estación Tláhuac) es la conexión principal. Desde Pantitlán tomas la Línea 12 hacia el sur y bajas en la estación Tláhuac o las intermedias según el barrio específico. La Avenida Tláhuac también tiene varias rutas de pesero y metrobús que conectan con otras alcaldías. El tiempo de traslado desde el centro de la CDMX es de 45 a 75 minutos dependiendo del punto de origen y el horario.',
      },
      {
        q: '¿Hay gimnasios abiertos temprano en Tláhuac para entrenar antes del trabajo?',
        a: 'Sí, varios gimnasios de Tláhuac abren desde las 5am o 5:30am para atender a trabajadores que salen temprano. La demanda de horario matutino en alcaldías del sur y oriente de la CDMX es alta porque mucha gente trabaja en el centro o norte y sale antes de las 7am. Confirmá el horario con el establecimiento específico porque varía entre locales. Los del lunes a sábado con cierre antes de las 9pm son los más comunes.',
      },
      {
        q: '¿Vale la pena ir a un gimnasio de Tláhuac si vivo en otra alcaldía?',
        a: 'Honestamente, neta, solo vale si ya estás en la zona sur-oriente o si vives en Tláhuac. El tiempo de traslado desde el centro, Condesa o Roma Norte hace que el ahorro económico no justifique el costo de tiempo. Lo que sí es real es que si ya estás en la Línea 12 o en el Tren Ligero por otro motivo, los gimnasios de Tláhuac son una opción seria y sin pretensiones para tu entrenamiento diario.',
      },
    ],
    stats: [
      { label: 'Gimnasios registrados', value: '43' },
      { label: 'Membresía mensual', value: '$250–$800 MXN' },
      { label: 'Transporte', value: 'Tren Ligero L12' },
      { label: 'Av. principal', value: 'Av. Tláhuac' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  estudios: {
    h1: 'Estudios fitness en Tláhuac, CDMX — Funcional y clases grupales 2026',
    metaDesc: 'Estudios fitness en Tláhuac CDMX: aeróbicos, funcional y clases grupales desde $150 MXN. Sin boutiques, con propuesta real de barrio en el sur de la ciudad.',
    intro: `Tláhuac no tiene estudios boutique de CrossFit afiliado ni yoga studios con instructores certificados en India — y eso hay que decirlo directo para no generar expectativas que la alcaldía no puede cumplir. Lo que sí tiene es estudios de aeróbicos, clases funcionales grupales y espacios de actividad física que llevan años funcionando en el barrio con una clientela fiel que no necesita la estética del norte para entrenar.

Las clases grupales de aeróbicos y zumba en Tláhuac tienen una presencia fuerte y una historia larga. Los instructores de la zona llevan temporadas de chamba en el mismo barrio y conocen a su comunidad. La clase puede no tener el audio de última generación ni el espacio de diseño, pero la coordinación y la energía del instructor hacen la diferencia real en una sesión de 60 minutos. Eso no se compra en ningún estudio boutique de Polanco con membresía de cinco cifras.

El entrenamiento funcional en grupo está disponible en algunos establecimientos de Tláhuac con equipo básico: ligas, mancuernas ligeras, TRX y peso corporal. No es el funcional room de un gym premium, pero para mantenerse activo y trabajar la capacidad física general, las opciones funcionan bien para la mayoría de objetivos de salud. El precio de $150 a $300 MXN por clase o $600 a $1,200 MXN por plan mensual grupal hace que sea accesible para la mayoría de residentes de la alcaldía.

Para quien busca disciplinas más especializadas como pilates Reformer, boxing técnico o spinning con bikes calibradas, hay que salir de Tláhuac — Iztapalapa ya tiene algo más de oferta boutique, y alcaldías como Benito Juárez o Coyoacán tienen la concentración de estudios especializados que Tláhuac no tiene todavía. Sin pretextos, así está la oferta, cuate — y hay que ser honesto con eso antes de inscribirse.`,
    queEsperar: [
      {
        titulo: 'Aeróbicos y zumba con tradición de barrio',
        descripcion: 'Las clases de aeróbicos y zumba en Tláhuac tienen instructores con años de experiencia en la zona y grupos que se conocen de temporadas enteras. El ambiente es inclusivo — van desde adolescentes hasta adultos mayores en el mismo espacio — y el enfoque es el movimiento accesible para todos. No hay filtro de nivel de entrada ni presión de rendimiento. Para quien busca actividad física constante sin la barrera de la especialización, estas clases funcionan.',
      },
      {
        titulo: 'Funcional básico accesible por precio',
        descripcion: 'Varios estudios de Tláhuac incluyen clases de entrenamiento funcional con equipo básico a precios de barrio. Una clase suelta puede costar $150 a $250 MXN. Los planes mensuales de acceso ilimitado a clases grupales están entre $600 y $1,200 MXN. Para quien empieza a entrenar o busca mantenerse activo sin objetivos de rendimiento específicos, esta propuesta cubre la necesidad.',
      },
      {
        titulo: 'Espacios pequeños con instructores presentes',
        descripcion: 'Los estudios de Tláhuac son establecimientos de tamaño reducido donde el instructor conoce a cada participante. Eso tiene ventajas reales: hay corrección individual, el instructor adapta la intensidad según el nivel del grupo y hay seguimiento informal del progreso. Lo que se pierde en infraestructura se gana en atención directa, que muchas veces es más valiosa que el equipo.',
      },
      {
        titulo: 'Sin oferta boutique: expectativas claras',
        descripcion: 'Tláhuac no tiene CrossFit afiliado, pilates Reformer ni spinning con bikes Keiser. Si buscas esas disciplinas específicas, la alcaldía no las tiene y hay que ser directo con eso. Lo que hay es actividad física accesible, funcional y de barrio. Si eso cubre tu necesidad actual, Tláhuac es la opción más económica de la CDMX para ese perfil de entrenamiento.',
      },
    ],
    faq: [
      {
        q: '¿Hay clases de CrossFit en Tláhuac?',
        a: 'No hay boxes CrossFit afiliados en Tláhuac. Hay algunos estudios que hacen entrenamiento funcional de alta intensidad con metodología similar sin la afiliación oficial. Si buscas CrossFit metodológico con programación Rx, los boxes más cercanos están en Iztapalapa o en Xochimilco, aunque la concentración mayor de boxes afiliados está en alcaldías del centro y poniente como Benito Juárez, Miguel Hidalgo y Coyoacán.',
      },
      {
        q: '¿Cuánto cuesta una clase grupal en Tláhuac?',
        a: 'Las clases grupales en estudios de Tláhuac cuestan entre $100 y $250 MXN la sesión suelta según el tipo de clase y el establecimiento. Los planes mensuales de acceso a clases grupales van de $500 a $1,200 MXN. Algunos estudios tienen planes semanales de $150 a $300 MXN. Comparado con un estudio boutique del norte de la ciudad donde una clase suelta puede costar $250 a $600 MXN, la diferencia es real y sostenida.',
      },
      {
        q: '¿Qué disciplinas fitness están disponibles en Tláhuac?',
        a: 'La oferta principal incluye aeróbicos, zumba fitness, rumba, kickboxing básico y funcional en grupo. Algunos establecimientos tienen yoga de piso básico. Para pilates Reformer, spinning boutique o metodologías especializadas, Tláhuac no cuenta con esa oferta — hay que salir de la alcaldía. Lo que hay es activo, accesible y orientado a la comunidad local sin pretensiones de nicho.',
      },
      {
        q: '¿Hay estudios de yoga en Tláhuac?',
        a: 'Hay algunos espacios que ofrecen yoga básico de piso en Tláhuac, principalmente en estudios de usos múltiples y centros comunitarios. No es yoga con linaje de práctica ni con instructores de formación internacional — es yoga funcional básico accesible para principiantes. Para yoga con profundidad de práctica y instructores certificados, las opciones en Coyoacán, Tlalpan o el centro de la CDMX son significativamente mejores.',
      },
    ],
    stats: [
      { label: 'Estudios registrados', value: '10+' },
      { label: 'Clase suelta', value: '$100–$250 MXN' },
      { label: 'Plan mensual grupal', value: '$500–$1,200 MXN' },
      { label: 'Disciplinas principales', value: 'Aeróbicos · funcional' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  entrenadores: {
    h1: 'Entrenadores personales en Tláhuac, CDMX — PT accesibles 2026',
    metaDesc: 'Entrenadores personales Tláhuac CDMX: sesiones desde $200 MXN. PT de barrio con experiencia práctica. La opción más económica del sur de la CDMX.',
    intro: `Los entrenadores personales en Tláhuac trabajan en un mercado donde el precio es la variable más importante para la mayoría de sus clientes. Eso genera un perfil de PT muy diferente al del norte de la ciudad: menos certificaciones internacionales en el CV, más años de experiencia práctica con la misma comunidad, y tarifas que hacen al entrenamiento personal accesible para quien no puede pagar $500 a $1,000 MXN por sesión.

Las tarifas de PT en Tláhuac van de $200 a $500 MXN por sesión de 60 minutos — un rango que en otras alcaldías representa el piso mínimo de las opciones básicas. Para quien busca acompañamiento y supervisión real sin la carga económica de los entrenadores del norte, Tláhuac tiene opciones funcionales. El objetivo de salud general, pérdida de peso y acondicionamiento básico está bien cubierto en ese precio.

La formación de los entrenadores en Tláhuac es variada: algunos tienen técnico o licenciatura en Educación Física, otros tienen certificaciones del IMCF o ACEF, y varios tienen años de experiencia práctica sin credencial formal pero con resultados concretos de clientes. Para objetivos básicos de salud y movimiento, la experiencia práctica de un entrenador que lleva años en el barrio tiene valor real. Para objetivos técnicos específicos, como periodización de powerlifting o preparación para competencia, hay que ser honesto: probablemente necesites salir de la alcaldía.

El entrenamiento al aire libre en el Parque Tláhuac y los espacios públicos de la alcaldía es una modalidad real que varios PT utilizan. El Lago Tláhuac y las áreas verdes circundantes ofrecen contextos de entrenamiento outdoor únicos en la CDMX — no hay otro lugar en la ciudad con chinampas y lago como backdrop para una sesión de funcional.`,
    queEsperar: [
      {
        titulo: 'Tarifas reales para el mercado de la alcaldía',
        descripcion: 'Los PTs de Tláhuac trabajan con tarifas de $200 a $500 MXN por sesión, con paquetes de 10 sesiones de $1,500 a $4,000 MXN. Estos precios son sostenibles para clientes de la zona sin que representen un sacrificio significativo. Para quien viene de alcaldías más caras, el ahorro puede ser de $300 a $800 MXN por sesión con calidad equivalente para objetivos de salud general.',
      },
      {
        titulo: 'Conocimiento local como ventaja real',
        descripcion: 'Los entrenadores que llevan años en Tláhuac conocen los parques habilitados, los horarios de uso de los gimnasios locales, las rutas de caminata y los espacios públicos que funcionan para entrenamiento outdoor. Ese conocimiento del territorio es una ventaja práctica que no tiene ningún PT que llegue de fuera. Para entrenar en Tláhuac de manera eficiente, un entrenador local que conoce el barrio hace la diferencia.',
      },
      {
        titulo: 'Entrenamiento outdoor con el Lago Tláhuac',
        descripcion: 'Tláhuac tiene uno de los entornos naturales más únicos de la CDMX: el Lago Tláhuac y las chinampas son contextos de entrenamiento outdoor que ningún parque del norte puede replicar. Algunos entrenadores de la zona hacen sesiones de funcional al aire libre en esas áreas. Para cardio, caminatas y trabajo de fuerza con peso corporal al aire libre, el entorno es genuinamente diferente.',
      },
      {
        titulo: 'Perfil de trabajo orientado a salud general',
        descripcion: 'La mayoría de entrenadores de Tláhuac trabajan con objetivos de salud general, pérdida de peso y mantenimiento de actividad física. Para ese perfil, los PT de la zona tienen la experiencia y la metodología correcta. Para objetivos más técnicos y específicos, la búsqueda tiene que ampliar el radio geográfico hacia alcaldías con más concentración de especialistas.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Tláhuac?',
        a: 'Las sesiones individuales en Tláhuac van de $200 a $500 MXN por 60 minutos. Los entrenadores con formación universitaria o certificaciones reconocidas cobran en el rango medio-alto. Paquetes de 10 sesiones tienen descuentos del 10-20% sobre el precio por sesión. El entrenamiento a domicilio puede sumar $30 a $80 MXN de desplazamiento según la distancia. Comparado con el norte de la ciudad donde una sesión empieza en $500 MXN, el ahorro es real.',
      },
      {
        q: '¿Hay entrenadores certificados en Tláhuac?',
        a: 'Hay entrenadores con certificaciones del IMCF, ACEF y técnico en Educación Física en Tláhuac. La concentración de Licenciados en Educación Física o certificaciones internacionales como NSCA y ACE es menor que en alcaldías del norte o poniente de la ciudad. Para objetivos de salud general y pérdida de peso, un entrenador con experiencia práctica de varios años puede ser tan efectivo como uno con credencial internacional. Pide referencias de clientes actuales — eso dice más que el diploma.',
      },
      {
        q: '¿Dónde entrena un PT con clientes en Tláhuac?',
        a: 'Las modalidades más comunes son el gimnasio local donde el cliente tiene membresía, espacios públicos como el Parque Tláhuac, y a domicilio. El área del Lago Tláhuac y las chinampas son contextos outdoor únicos que algunos entrenadores de la zona incorporan a sus sesiones. Para quien quiere entrenamiento de naturaleza con entorno lacustre, es una propuesta que no existe en ninguna otra alcaldía de la CDMX.',
      },
      {
        q: '¿Puedo contratar un PT de Tláhuac para objetivos de rendimiento?',
        a: 'Para objetivos de rendimiento específico — powerlifting competitivo, CrossFit Games, preparación atlética de alto nivel — la búsqueda tiene que ir más allá de Tláhuac. La alcaldía tiene entrenadores buenos para salud general y acondicionamiento básico. Para técnica olímpica, periodización avanzada o preparación de competencia, necesitas un coach con experiencia específica en esa disciplina, que probablemente está en otra alcaldía. La neta es esa.',
      },
    ],
    stats: [
      { label: 'PTs activos', value: '15+' },
      { label: 'Sesión individual', value: '$200–$500 MXN' },
      { label: 'Entorno outdoor', value: 'Lago Tláhuac · Parque' },
      { label: 'Modalidades', value: 'Gym · parque · domicilio' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  eventos: {
    h1: 'Eventos fitness en Tláhuac, CDMX — Deporte popular y naturaleza 2026',
    metaDesc: 'Eventos fitness Tláhuac CDMX 2026: torneos barriales, caminatas al Lago Tláhuac y deporte popular en chinampas. La agenda deportiva del sur lacustre de la CDMX.',
    intro: `Tláhuac tiene una agenda de eventos deportivos que no aparece en ningún portal de fitness de la ciudad, pero que mueve a miles de personas de la alcaldía durante todo el año. Los torneos barriales de fútbol, los eventos de actividad física en el Parque Tláhuac y las caminatas organizadas alrededor del Lago Tláhuac son la columna deportiva de una alcaldía que hace el fitness sin necesidad de wifi, app o reserva en línea.

El Lago Tláhuac es el evento permanente de la alcaldía, cuate. Las rutas de caminata y ciclismo alrededor del lago son gratuitas, están disponibles todos los días y ofrecen un entorno que ningún otro punto de la CDMX tiene: agua, chinampas, aves y una escala humana que las colonias del norte perdieron hace décadas. Para cardio y actividad al aire libre, el lago es un recurso que los residentes de Tláhuac tienen a disposición sin costo y sin trámite.

Los torneos barriales de fútbol son el evento deportivo más constante de la alcaldía. Cada colonia tiene su liga, sus canchas y su calendario. No están indexados en Google ni tienen registro oficial, pero son parte de la vida social de Tláhuac de manera consistente desde hace generaciones. La participación es de base popular y las inscripciones son simbólicas — nada que ver con el costo de un torneo organizado del norte.

Los eventos del IMSS y del ISSSTE en la alcaldía incluyen actividades físicas gratuitas para derechohabientes: caminatas, aeróbicos al aire libre y talleres de hábitos saludables. Son parte de una agenda institucional que pocos aprovechan pero que existe y funciona. Para quien busca actividad física sin gastar ni un peso, Tláhuac tiene más opciones de las que parece en el mapa. La neta es que la alcaldía tiene un ecosistema deportivo popular que funciona sin necesitar Instagram ni app de reservas.`,
    queEsperar: [
      {
        titulo: 'Caminatas y ciclismo alrededor del Lago Tláhuac',
        descripcion: 'El Lago Tláhuac y las chinampas circundantes tienen rutas de caminata y ciclismo que pueden durar de 1 a 3 horas según el recorrido elegido. El entorno es único en la CDMX: naturaleza lacustre a minutos del Tren Ligero. Los fines de semana hay más actividad de familias y grupos, entre semana en las mañanas puedes tener las rutas casi para ti solo. Sin costo, sin inscripción, sin horario fijo.',
      },
      {
        titulo: 'Torneos barriales de fútbol y deporte popular',
        descripcion: 'La cultura del torneo barrial es fuerte en Tláhuac. Cada colonia tiene su liga de fútbol con calendario regular y sistema de puntos. La inscripción de equipos es de $200 a $500 MXN total, no por persona. También hay torneos de voleibol y básquetbol en canchas públicas. Para participar, lo más directo es preguntar en la cancha del barrio más cercano quién organiza la liga del sector.',
      },
      {
        titulo: 'Eventos del Parque Tláhuac',
        descripcion: 'El Parque Tláhuac tiene actividades de recreación y deporte organizadas por la alcaldía y el IMSS durante todo el año. Aeróbicos al aire libre, caminatas grupales y talleres de actividad física son parte de la agenda del parque. La información circula por tableros físicos en el parque y a veces en las redes sociales de la alcaldía — hay que buscarla activamente porque no tiene presencia digital consistente.',
      },
      {
        titulo: 'Festivales de barrio con componente deportivo',
        descripcion: 'Los festivales de las colonias en Tláhuac incluyen actividades deportivas y de recreación. No son eventos de fitness en el sentido boutique, pero mueven a comunidades enteras en torno al movimiento y la actividad física. El Carnaval de Tláhuac y otras fiestas locales tienen componentes de deporte popular que son genuinamente comunitarios.',
      },
    ],
    faq: [
      {
        q: '¿Cómo llego al Lago Tláhuac para hacer ejercicio?',
        a: 'El Lago Tláhuac está accesible desde varias colonias de la alcaldía. Desde la estación del Tren Ligero puedes tomar transporte local o caminar según el sector específico. La Avenida Tláhuac conecta con varios puntos de acceso al lago. El mejor horario para ejercitarse es en la mañana antes de las 10am — la temperatura es más fresca y hay menos actividad de la zona lacustre. Llevá agua y protector solar porque la exposición es directa.',
      },
      {
        q: '¿Hay competencias de running en Tláhuac?',
        a: 'Tláhuac no tiene carreras de running formales propias con registro oficial, pero la alcaldía participa en el circuito de carreras del sur de la CDMX que incluye eventos en Iztapalapa y Xochimilco. Algunos grupos de running de la zona organizan carreras de barrio de manera informal. Para estar al tanto de eventos en el área sur de la CDMX, busca en Facebook los grupos de running del sur de la ciudad — "corredores sur CDMX" o similar te da comunidades activas.',
      },
      {
        q: '¿Qué eventos gratuitos de fitness hay en Tláhuac?',
        a: 'Las caminatas y ciclismo alrededor del Lago Tláhuac son gratuitas y disponibles todo el año. Los aeróbicos al aire libre en el Parque Tláhuac organizados por la alcaldía son gratuitos con horarios variables. Los eventos del IMSS de actividad física son gratuitos para derechohabientes. Los torneos barriales son de bajo costo por equipo. La agenda institucional de la alcaldía tiene actividades gratuitas que no están bien publicadas — vale preguntar directamente en el parque.',
      },
      {
        q: '¿Hay actividades en las chinampas para ejercitarse?',
        a: 'Las chinampas de Tláhuac no tienen circuitos de ejercicio habilitados formalmente, pero las rutas de caminata que las bordean son parte del atractivo del lago como espacio de actividad física. Algunos guías locales ofrecen tours a las chinampas en trajinera que pueden incluir caminata y observación de naturaleza. Para running o funcional, el perímetro del lago en tierra es más práctico que las chinampas, que son espacios agrícolas activos.',
      },
    ],
    stats: [
      { label: 'Lago Tláhuac', value: 'Abierto todos los días' },
      { label: 'Torneos barriales/año', value: '8–12' },
      { label: 'Acceso', value: 'Tren Ligero L12' },
      { label: 'Costo actividades', value: 'Gratis a $500 MXN' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  bienestar: {
    h1: 'Bienestar y salud en Tláhuac, CDMX — Centros de salud y recuperación 2026',
    metaDesc: 'Bienestar en Tláhuac CDMX: fisioterapia, masajes y centros de salud desde $150 MXN. IMSS, ISSSTE y clínicas privadas accesibles en el sur de la ciudad.',
    intro: `Tláhuac tiene una infraestructura de bienestar que funciona sobre dos ejes: el sistema de salud público (IMSS, ISSSTE y centros de salud del gobierno de la CDMX) y los consultorios privados de pequeño formato que atienden a la comunidad local. No hay spas de lujo ni centros de wellness con app de reserva — hay clínicas de barrio, fisioterapeutas con consultorio propio y masajistas con años de clientela fija que vuelve cada mes.

La fisioterapia en Tláhuac es accesible por dos vías: la pública con cobertura de seguridad social y la privada con precios de mercado local. Un fisioterapeuta privado en la alcaldía puede cobrar entre $150 y $350 MXN por sesión — una fracción de lo que cobran en Roma Norte o Condesa por formación universitaria equivalente. Para lesiones laborales y dolencias posturales, la cobertura del IMSS puede ser la opción más eficiente si el trabajador tiene acceso, cuate.

La nutrición en Tláhuac está disponible principalmente a través de las unidades médicas del IMSS y del gobierno capitalino, con nutricionistas que atienden diabetes, sobrepeso y patologías metabólicas. Para nutrición deportiva específica, la oferta privada en la alcaldía es limitada — la especialización en rendimiento atlético no es el perfil predominante. Para ese nivel de asesoría hay que buscar en alcaldías con más concentración de servicios especializados y hay que ser honesto con eso.

Los masajes en Tláhuac están disponibles en centros de salud y estética del barrio, con precios que van de $150 a $300 MXN por sesión. No es masaje de tejido profundo deportivo con terapeutas especializados, pero para recuperación de tensión muscular general cumple la función a un precio que no requiere justificación económica. Para el atleta recreativo de la alcaldía que busca recuperación básica accesible, la oferta local es funcional y sin pretensiones.`,
    queEsperar: [
      {
        titulo: 'Sistema de salud público: la opción más accesible',
        descripcion: 'Tláhuac tiene unidades médicas del IMSS, ISSSTE y centros de salud del gobierno de la CDMX que atienden fisioterapia básica y nutrición general. Para derechohabientes del IMSS, estos servicios son gratuitos o de copago mínimo con la orden médica correspondiente. La espera puede ser mayor que en consulta privada, pero el costo es estructuralmente inferior. Es la opción más lógica para quien tiene cobertura y busca rehabilitación básica.',
      },
      {
        titulo: 'Fisioterapia privada a precio de mercado local',
        descripcion: 'Los fisioterapeutas privados de Tláhuac atienden en consultorios pequeños con equipamiento básico. Las sesiones cuestan entre $150 y $350 MXN, significativamente menos que en el norte de la ciudad. Para rehabilitación de lesiones comunes, contracturas y dolencias posturales, el nivel de atención es funcionalmente adecuado. Para lesiones deportivas complejas o rehabilitación post-quirúrgica de alta complejidad, puede ser necesario buscar un fisioterapeuta con más equipamiento.',
      },
      {
        titulo: 'Masajes accesibles para recuperación básica',
        descripcion: 'Los centros de masaje en Tláhuac cobran entre $150 y $300 MXN por sesión de 60 minutos. El servicio disponible incluye masaje de relajación, drenaje linfático básico y algunos puntos de presoterapia. Para recuperación muscular post-entrenamiento de intensidad moderada, cubre la necesidad. Para masaje deportivo especializado de tejido profundo, hay que buscar terapeutas con formación específica que pueden estar en otras alcaldías.',
      },
      {
        titulo: 'Entorno natural como bienestar gratuito',
        descripcion: 'El activo de bienestar más genuino de Tláhuac es su entorno natural. El Lago Tláhuac, las chinampas y los parques de la alcaldía son espacios para la recuperación activa, el movimiento al aire libre y la desconexión del ritmo urbano intenso de la CDMX central. La caminata alrededor del lago como actividad de recuperación o de reducción de estrés es un recurso de bienestar gratuito que pocas alcaldías pueden ofrecer.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta la fisioterapia en Tláhuac?',
        a: 'La fisioterapia privada en Tláhuac cuesta entre $150 y $350 MXN por sesión de 45-60 minutos. Los fisioterapeutas con más equipamiento o especialización en deporte pueden cobrar en el rango alto. Para derechohabientes del IMSS o ISSSTE, la fisioterapia es gratuita o con copago mínimo con la orden médica del médico familiar. El tiempo de espera en el sistema público puede ser de 1 a 3 semanas para la primera cita.',
      },
      {
        q: '¿Hay nutricionistas especializados en deporte en Tláhuac?',
        a: 'La oferta de nutrición deportiva especializada en Tláhuac es limitada. Hay nutricionistas con consulta privada que atienden objetivos de control de peso y salud general, pero la especialización en rendimiento atlético, periodización nutricional o composición corporal para competencia no es el perfil predominante en la alcaldía. Para nutrición deportiva seria, las alcaldías con más concentración de servicios especializados son Coyoacán, Benito Juárez o el centro de la CDMX.',
      },
      {
        q: '¿Qué tipo de masajes están disponibles en Tláhuac?',
        a: 'La oferta incluye masaje sueco de relajación, drenaje linfático manual básico y algunos servicios de reflexología. El masaje deportivo de tejido profundo con terapeutas certificados específicamente en esa técnica no es fácil de encontrar en la alcaldía. Para recuperación de tensión muscular general, los centros de Tláhuac cubren la necesidad. Para trabajo de tejido profundo o liberación miofascial técnica, hay que buscar fuera de la alcaldía.',
      },
      {
        q: '¿Cómo puedo aprovechar el entorno natural de Tláhuac para el bienestar?',
        a: 'El Lago Tláhuac y las chinampas son los activos naturales más valiosos de la alcaldía para el bienestar. Las caminatas alrededor del lago (1 a 2 horas según el recorrido) son efectivas para recuperación activa, reducción de estrés y movimiento de bajo impacto. La calidad del aire en las áreas verdes de Tláhuac es mejor que en el centro de la CDMX. Para hacer de esto una práctica regular, lo mejor es ir entre semana en la mañana cuando hay menos gente y el ambiente es más tranquilo.',
      },
    ],
    stats: [
      { label: 'Centros de salud', value: 'IMSS · ISSSTE · locales' },
      { label: 'Fisioterapia privada', value: '$150–$350 MXN/sesión' },
      { label: 'Masaje', value: '$150–$300 MXN' },
      { label: 'Bienestar outdoor', value: 'Lago Tláhuac (gratis)' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,
}
