// src/data/cdmx/localidad-alvaro-obregon.ts

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

const vecinos = getVecinos('alvaro-obregon')

const categoriaLinks: CatLink[] = [
  { slug: 'gimnasios', label: '🏋️ Gimnasios (138)' },
  { slug: 'estudios', label: '🧘 Estudios' },
  { slug: 'entrenadores', label: '🚶 Entrenadores' },
  { slug: 'eventos', label: '📅 Eventos' },
  { slug: 'bienestar', label: '🌿 Bienestar' },
]

export const localidadContent = {
  nombre: 'Álvaro Obregón',
  slug: 'alvaro-obregon',
  lastReviewed: '2026-06-01',

  sobreBarrio: `Álvaro Obregón es la alcaldía de las contradicciones más extremas de la Ciudad de México — y eso define cómo se entrena acá. Santa Fe, el megacomplejo corporativo sobre Av. Vasco de Quiroga, tiene los gimnasios más caros de CDMX y densidad boutique que compite con Polanco. Más adentro, colonias como Olivar del Conde, Merced Gómez o Florida tienen opciones de $600 a $800 MXN donde la gente del barrio entrena sin corporativo de por medio.

El acceso es inevitable: la alcaldía no tiene Metro. El Metrobús corre sobre Insurgentes Sur; el Cablebús conecta zonas específicas. Para quien trabaja en Santa Fe, el tráfico sobre Vasco de Quiroga en horas pico es uno de los peores de la ciudad — calcular los tiempos es parte de la estrategia de entrenamiento, cuate.

La escena fitness refleja exactamente la geografía socioeconómica: desde el Smart Fit de $1,000 MXN en Santa Fe hasta el gimnasio de colonia a $600 MXN. La neta es que en qué zona vives o trabajas determina qué parte del ecosistema te corresponde explorar.

La onda fitness en Álvaro Obregón tiene hora pico clara: antes de las 8am y después de las 7pm, cuando el corporativo ya soltó a la gente. Santa Fe se pone full en esos horarios — si puedes ir entre semana a mediodía o un sábado temprano, los equipos están libres y el ambiente es otro. En las colonias del interior, los gimnasios independientes no tienen ese problema: precios planos y clientela constante todo el día. Para moverse por la alcaldía sin coche, el Cablebús Línea 2 cambió las cosas en colonias como San Bartolo Ameyalco y Jalalpa — acceso real para zonas que antes estaban básicamente desconectadas. La alcaldía tiene potencial outdoor infrautilizado: el Parque Lira en Tacubaya y los terrenos verdes cerca del Desierto de los Leones son opciones reales para quien combina gimnasio con entrenamiento en exterior. No es el Bosque de Tlalpan, pero para quien vive acá es ventaja que no hay que subestimar, güey.`,

  gimnasios: {
    h1: 'Gimnasios en Álvaro Obregón, CDMX – 138 opciones desde $600 MXN/mes',
    metaDesc: 'Gimnasios en Álvaro Obregón, CDMX: 138 opciones desde $600 MXN. Santa Fe boutique hasta $2,000 MXN. Pedregal, San Ángel e independientes de colonia.',
    intro: `Álvaro Obregón tiene 138 gimnasios y la brecha de precios más amplia de cualquier alcaldía de CDMX — de $600 MXN al mes en salas de colonia hasta $2,000 MXN en los gym boutique de las torres corporativas de Santa Fe. Esa disparidad no es un problema, es información: en qué parte de la alcaldía estés define completamente tu mercado.

Santa Fe es el caso extremo. Las torres corporativas de Av. Vasco de Quiroga tienen gimnasios integrados — algunos de uso exclusivo para empleados, otros abiertos como membresía externa. Los estudios boutique alrededor de City Santa Fe tienen los precios más altos de la alcaldía. Para quien trabaja ahí, hay opciones reales — pero estás pagando la renta corporativa. La neta es esa, cuate.

Pedregal y San Ángel tienen una propuesta diferente: gimnasios con equipo serio, cultura de clase media consolidada y precios que reflejan una zona residencial sin el overhead corporativo de Santa Fe. Para pesas libres y equipamiento completo, los gimnasios de Pedregal compiten bien con lo que ofrece Benito Juárez o Cuauhtémoc a precios similares o menores.

Las colonias al interior — Olivar del Conde, Merced Gómez, Las Águilas — tienen salas independientes desde $600 MXN donde el equipamiento es funcional. Para quien vive en esas zonas y entrena por convicción, tienen todo lo necesario para una rutina seria a un precio que en Santa Fe no existe.

El acceso sin Metro es el reto real de Álvaro Obregón. Metrobús sobre Insurgentes Sur, Cablebús en zonas específicas y carro son las opciones disponibles. Para quienes dependen del transporte público, el tiempo de traslado al gimnasio es un factor que impacta directamente en la consistencia del entrenamiento. Calcula bien antes de comprometerte con una zona.`,
    queEsperar: [
      {
        titulo: 'Santa Fe: precio premium con equipamiento premium',
        descripcion: 'Los gimnasios de Santa Fe en torno a Vasco de Quiroga y City Santa Fe tienen el mejor equipamiento de la alcaldía — cardio de última generación, zonas de peso libre amplias, clases grupales de alta producción. El precio refleja la zona: $1,200 a $2,000 MXN mensuales. Para quien trabaja en las torres y puede ir entre semana sin el tráfico pico, la logística tiene sentido. Si tienes que cruzar el tráfico de Santa Fe solo para ir al gimnasio, calcula bien si vale el jalón.',
      },
      {
        titulo: 'Pedregal y San Ángel: el balance real de la alcaldía',
        descripcion: 'Los gimnasios de Pedregal y San Ángel tienen equipamiento completo — pesas libres, racks, zona de cardio — sin el overhead de precio de Santa Fe. La clientela es residencial, los horarios son estables y la relación precio-equipo es de las mejores de la alcaldía. Para quien vive en esas colonias, es la opción lógica. Para quien viene desde otra zona, el acceso sobre Insurgentes Sur en Metrobús es funcional.',
      },
      {
        titulo: 'Colonias internas: precio real para presupuesto real',
        descripcion: 'Olivar del Conde, Merced Gómez, Florida y Las Águilas tienen salas independientes que van de $600 a $900 MXN al mes. El equipamiento no es de Santa Fe, pero para trabajo de pesas libre funcional, las salas de colonia de Álvaro Obregón tienen lo que necesitas. Son el tipo de gimnasio donde la gente va a entrenar, no a Instagram. Y eso, a veces, es lo que buscas.',
      },
      {
        titulo: 'Smart Fit como opción estandarizada',
        descripcion: 'Smart Fit tiene presencia en la alcaldía con el equipamiento estandarizado que caracteriza a la cadena. Para quien viaja frecuentemente y necesita acceso a múltiples sedes, la red de Smart Fit en CDMX tiene cobertura amplia. El precio de cadena económica en la zona de Santa Fe sigue siendo más caro que los independientes de colonia, pero más accesible que los boutique del corporativo.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta el gimnasio en Álvaro Obregón en 2026?',
        a: 'El rango en Álvaro Obregón va de $600 MXN en salas independientes de colonia hasta $2,000 MXN en gimnasios boutique de Santa Fe. Los gimnasios de Pedregal y San Ángel están en el rango medio de $800 a $1,400 MXN. Smart Fit y cadenas similares rondan los $700-$1,100 MXN según el plan. Es la alcaldía con la mayor disparidad de precios de CDMX — tu código postal define tu mercado más que en cualquier otra delegación.',
      },
      {
        q: '¿Cómo llego a los gimnasios de Santa Fe sin carro?',
        a: 'Santa Fe tiene Metrobús en la ruta que corre sobre Vasco de Quiroga, conectando con el norte de la ciudad. También hay Cablebús (Línea 2) que conecta Constitución de 1917 con Santa Fe, aunque el tiempo de traslado puede ser largo desde el oriente. Desde el poniente y sur, el transporte concesionado es la opción más directa. El tráfico en Santa Fe en horas pico (7-10am, 6-9pm) hace que el carro también sea lento — calcula bien antes de elegir gimnasio en esa zona sin tener transporte claro.',
      },
      {
        q: '¿Cuáles son los mejores gimnasios en Pedregal para pesas?',
        a: 'Los gimnasios de Pedregal con mejor reputación para pesas libres son los independientes con más años en el barrio. Para identificarlos, las recomendaciones de comunidades de fuerza en Facebook y Reddit CDMX son las más actualizadas. En persona, busca salas con racks de sentadilla libres, mancuernas hasta 40kg o más, y plataforma si haces movimientos olímpicos. El número de racks funcionales disponibles en horario pico te dice más sobre la sala que cualquier anuncio.',
      },
      {
        q: '¿Vale la pena pagar los gimnasios de Santa Fe si trabajo allá?',
        a: 'Depende del tiempo. Si puedes entrenar entre semana en horario de almuerzo o llegas o sales fuera del pico de tráfico de Santa Fe, la logística funciona. Si tienes que cruzar el caos de Vasco de Quiroga en hora pico solo para llegar al gym, el tiempo invertido puede ser mayor al beneficio de la proximidad laboral. Muchos que trabajan en Santa Fe prefieren entrenar en colonias como San Ángel o Pedregal donde el acceso es más predecible. La neta: calcula el tiempo total de puerta a puerta antes de decidir.',
      },
    ],
    stats: [
      { label: 'Gimnasios registrados', value: '138' },
      { label: 'Precio mensual', value: '$600–$2,000 MXN' },
      { label: 'Zona premium', value: 'Santa Fe (Vasco de Quiroga)' },
      { label: 'Transporte', value: 'Metrobús Insurgentes Sur' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  estudios: {
    h1: 'Estudios fitness en Álvaro Obregón, CDMX – CrossFit, Yoga y Pilates 2026',
    metaDesc: 'Estudios fitness en Álvaro Obregón: CrossFit en Pedregal, yoga boutique en Santa Fe, pilates Reformer. Clases $150–$600 MXN. Insurgentes Sur y Vasco de Quiroga.',
    intro: `Los estudios fitness de Álvaro Obregón reflejan la misma dualidad de la alcaldía: yoga boutique de $500 MXN por clase en los edificios de Santa Fe y boxes de CrossFit en Pedregal con comunidades serias a precios que no te dejan sin chamba. La oferta existe en ambos extremos y en el medio — saber dónde caés depende de dónde entrenas y qué buscas.

Santa Fe tiene estudios de yoga, meditación y pilates Reformer orientados al ejecutivo corporativo — espacios premium, instructores con certificaciones internacionales, y precios que reflejan la zona. Para alguien que trabaja en Santa Fe y tiene presupuesto para eso, la calidad está ahí. Para alguien que busca el mismo nivel de instrucción a menor costo, San Ángel y Pedregal tienen opciones que compiten en calidad con menos overhead de localidad.

El CrossFit de Álvaro Obregón tiene presencia concentrada en Pedregal y la zona sur de la alcaldía. Los boxes con más historia son comunidades sólidas — programación Rx seria, coaches certificados y ambiente de comunidad real. La diferencia con los boxes del norte de CDMX no es de calidad sino de cultura: más barrio, menos influencer. Para atletas que quieren CrossFit metodológico sin el ruido de las redes sociales, la zona sur tiene algo diferente.

El pilates tiene representación seria en San Ángel y Pedregal — estudios con equipos Reformer reales, clases en grupos reducidos y precio más razonable que Santa Fe. Para trabajo de core, rehabilitación postural o entrenamiento de movilidad avanzada, los estudios de esta zona ofrecen calidad sin el precio corporativo.

La clase suelta en Álvaro Obregón va de $150 MXN en estudios de colonia hasta $600 MXN en boutiques de Santa Fe. Para el promedio de la alcaldía, $200-$350 MXN cubre acceso a clases de calidad real en estudios de Pedregal o San Ángel.`,
    queEsperar: [
      {
        titulo: 'CrossFit serio en la zona sur',
        descripcion: 'Los boxes de CrossFit de Pedregal y colonias colindantes tienen comunidades comprometidas con programación Rx estructurada y coaches certificados. Son menos mediáticos que los de Roma o Condesa pero técnicamente equivalentes o superiores en algunos casos. La clase de inducción obligatoria sigue siendo el indicador de que el box prioriza la técnica. Buscalos así antes de inscribirte.',
      },
      {
        titulo: 'Yoga y meditación corporativa en Santa Fe',
        descripcion: 'Los estudios de yoga de Santa Fe tienen instructores con formación internacional y espacios diseñados para el ejecutivo que llega en traje. La calidad de instrucción es real pero el precio refleja la zona. Para quien trabaja en Santa Fe, la conveniencia logística puede justificar el costo. Para quien puede elegir zona, San Ángel tiene estudios de yoga con calidad comparable a precios menores.',
      },
      {
        titulo: 'Pilates Reformer con grupos pequeños',
        descripcion: 'San Ángel y Pedregal tienen estudios de pilates Reformer con equipos de calidad real y grupos de 4-8 personas que permiten corrección individual. Los precios son significativamente menores a Santa Fe. Para trabajo de core avanzado o rehabilitación, la relación precio-calidad en esta zona de la alcaldía es de las mejores de CDMX.',
      },
      {
        titulo: 'Funcional y HIIT de colonia',
        descripcion: 'Las colonias internas de Álvaro Obregón tienen estudios de entrenamiento funcional orientados a la comunidad local. Sin la producción de los estudios boutique pero con instrucción real y precios accesibles — $150 a $250 MXN por clase, membresías mensuales desde $800 MXN. Para quien busca calidad funcional sin pagar Santa Fe, estos estudios entregan lo que necesitan.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta una clase de CrossFit en Álvaro Obregón?',
        a: 'Los boxes de CrossFit de Álvaro Obregón tienen clases sueltas de $200 a $400 MXN y membresías mensuales de $1,200 a $2,000 MXN para planes de 3+ clases semanales. Los boxes de Pedregal suelen estar en el rango bajo-medio de ese espectro. La mayoría ofrece clase de prueba gratuita o a costo nominal. Siempre pide la sesión de prueba antes de comprometerte con membresía mensual — la comunidad y el coach son lo que determina si un box funciona para tú.',
      },
      {
        q: '¿Hay buenos estudios de yoga en San Ángel?',
        a: 'Sí, San Ángel tiene estudios de yoga con instructores con formación seria — algunos con estudios en India, otros con certificación Yoga Alliance de larga duración. Los estilos representados incluyen Hatha, Vinyasa y Yin. Los precios son accesibles comparados con Santa Fe. Para práctica seria con corrección de técnica, busca estudios con clases de máximo 12 personas — el tamaño del grupo es el indicador más claro de atención individualizada.',
      },
      {
        q: '¿Qué diferencia hay entre los estudios de Santa Fe y los de Pedregal?',
        a: 'La diferencia principal es el precio y el ambiente, no necesariamente la calidad de instrucción. Santa Fe tiene más producción, más diseño de interiores y más branding. Pedregal tiene más comunidad, más continuidad de instructores y menos overhead de zona corporativa. Para alguien que busca instrucción técnica real, Pedregal ofrece equivalente o mejor relación precio-calidad. Para alguien que busca el ambiente de estudios de Polanco o Roma Norte transportado al poniente, Santa Fe es la opción.',
      },
      {
        q: '¿Hay opciones económicas de estudios fitness en Álvaro Obregón?',
        a: 'Sí, las colonias más accesibles de la alcaldía tienen estudios con clases desde $150 MXN y membresías mensuales desde $800 MXN. Zumba, aeróbicos, yoga básico y funcional de bajo impacto son las disciplinas más accesibles en precio. Para CrossFit y pilates Reformer con equipo real, el rango económico sube a $200-$300 MXN por clase. Si el presupuesto es el factor principal, explorar los estudios de Olivar del Conde y Merced Gómez vale la pena antes de decidir.',
      },
    ],
    stats: [
      { label: 'Estudios fitness', value: '30+' },
      { label: 'Clase suelta', value: '$150–$600 MXN' },
      { label: 'Zona CrossFit', value: 'Pedregal · San Ángel' },
      { label: 'Zona yoga premium', value: 'Santa Fe' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  entrenadores: {
    h1: 'Entrenadores personales en Álvaro Obregón, CDMX – PT certificados 2026',
    metaDesc: 'Entrenadores personales en Álvaro Obregón, CDMX. PTs certificados NSCA, ACE. Sesiones $400–$1,500 MXN. Santa Fe, Pedregal y domicilio disponible.',
    intro: `Los entrenadores personales de Álvaro Obregón operan en dos mercados casi sin superposición: el de Santa Fe, donde el PT corporativo cobra $1,000-$1,500 MXN por sesión y trabaja con ejecutivos con agenda apretada y presupuesto sin límite, y el de Pedregal y San Ángel, donde los entrenadores certificados cobran $400-$800 MXN y trabajan con atletas amateur que toman en serio su progresión.

La neta es que la diferencia de precio entre esos dos mercados no siempre refleja diferencia de conocimiento. Hay entrenadores en Pedregal con certificación NSCA, experiencia en periodización y habilidad técnica real que no tienen el branding corporativo de los de Santa Fe pero que entregan resultados equivalentes o mejores. Para quien puede elegir, Pedregal da mejor costo-beneficio que Santa Fe.

Un factor específico de Álvaro Obregón para el entrenador: el tráfico. Un entrenador que hace domicilio en Santa Fe tiene que calcular el tiempo de desplazamiento dentro del cálculo de su tarifa — el jalón de llegar a Santa Fe en hora pico es real. Para sesiones en Pedregal o San Ángel, el acceso es más predecible sobre Insurgentes Sur.

Las certificaciones que valen en México: NSCA-CPT, ACE, NASM y la licenciatura en Educación Física de UNAM o escuelas con formación reconocida. El IMCF (Instituto Mexicano de Ciencias del Fitness) también forma entrenadores con bases técnicas sólidas. Pide siempre la certificación antes de comprometerte — los buenos entrenadores la muestran sin que les pidas dos veces.

Para atletas de fuerza en Álvaro Obregón, hay entrenadores especializados en powerlifting y levantamiento olímpico que trabajan en los gimnasios de Pedregal. Son los más difíciles de encontrar porque no se anuncian en Instagram sino que tienen su clientela por recomendación — pero cuando los encuentras, entregan coaching técnico real.`,
    queEsperar: [
      {
        titulo: 'Dos mercados con precios muy distintos',
        descripcion: 'Santa Fe: PTs corporativos con tarifa de $1,000-$1,500 MXN por sesión, orientados al ejecutivo con agenda premium. Pedregal y San Ángel: entrenadores certificados a $400-$800 MXN con conocimiento técnico equivalente sin el overhead corporativo. Para la mayoría de atletas amateur que buscan resultados serios, el mercado de Pedregal/San Ángel ofrece mejor costo-beneficio. La diferencia de precio no es de conocimiento, es de zona y branding.',
      },
      {
        titulo: 'Especialistas en fuerza y powerlifting',
        descripcion: 'Los gimnasios de Pedregal tienen entrenadores especializados en powerlifting y levantamiento olímpico que trabajan con atletas serios de fuerza. No los vas a encontrar en Instagram — circulan por recomendación dentro de la comunidad. Para técnica de sentadilla, peso muerto y press con periodización seria, estos entrenadores entregan coaching que no consigues en un gym corporativo de Santa Fe a ningún precio.',
      },
      {
        titulo: 'Domicilio en zonas residenciales',
        descripcion: 'Pedregal y San Ángel tienen conjuntos residenciales con espacio suficiente para entrenamiento a domicilio con equipo portátil. El domicilio en estas zonas es logísticamente más eficiente que en Santa Fe donde el tráfico impredecible complica la puntualidad. Para quien tiene espacio en casa y prefiere no moverse, los PTs de la zona hacen domicilio con kit completo de pesas, TRX y banda.',
      },
      {
        titulo: 'Certificación como filtro básico obligatorio',
        descripcion: 'En Álvaro Obregón, como en toda CDMX, la diferencia entre un entrenador certificado y uno que aprendió en YouTube puede ser significativa para la seguridad de tu entrenamiento. NSCA-CPT, ACE, NASM o licenciatura en Educación Física son los estándares que vale exigir. Un entrenador que no puede mostrar su certificación o título es una señal de alerta. Los buenos la tienen y la muestran.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Álvaro Obregón?',
        a: 'El rango va de $400 MXN en Pedregal y colonias internas hasta $1,500 MXN en Santa Fe. La diferencia no es siempre de calidad sino de zona y branding. Paquetes de 10 sesiones tienen descuento del 10-20% en la mayoría de casos. Para entrenadores de powerlifting especializados, el rango medio-alto de Pedregal ($600-$900 MXN) da acceso a coaching técnico real. Siempre pide la certificación antes de comprometerte con un paquete.',
      },
      {
        q: '¿Cómo encuentro un buen PT en Pedregal o San Ángel?',
        a: 'El canal más efectivo es la recomendación dentro de los gimnasios de la zona. Los entrenadores de fuerza y powerlifting de la alcaldía circulan por recomendación en comunidades de Facebook de fuerza CDMX — esos grupos son la fuente más actualizada. Para PT de CrossFit, los boxes de Pedregal tienen coaches staff disponibles para sesiones individuales además de las clases grupales. Pedir una sesión de evaluación antes de pagar un paquete es el estándar mínimo que debería ofrecer cualquier entrenador serio.',
      },
      {
        q: '¿Vale la pena contratar un PT en Santa Fe si trabajo ahí?',
        a: 'La lógica de conveniencia puede tener sentido si puedes entrenar en hora de almuerzo o antes/después del pico de tráfico. Si el PT de Santa Fe cobra $1,200 MXN y uno de Pedregal con la misma certificación cobra $600 MXN, la diferencia de $600 por sesión acumulada en un mes de entrenamiento es significativa. A menos que la conveniencia horaria sea crítica para mantener la consistencia, la diferencia de precio justifica trasladarse. Haz el cálculo con tus números reales.',
      },
      {
        q: '¿Hay entrenadores especializados en nutrición y pérdida de peso en Álvaro Obregón?',
        a: 'Sí, es la especialización más demandada en la alcaldía. Los mejores resultados los ofrecen entrenadores que trabajan en conjunto con nutricionistas — la combinación de periodización de entrenamiento con plan nutricional específico es lo que mueve la composición corporal de forma sostenida. Un entrenador que solo habla de ejercicio y no te orienta sobre nutrición está dejando el 80% del resultado sin atender. En Álvaro Obregón hay entrenadores con doble formación (EF + nutrición) o que tienen convenios con nutricionistas en la misma zona.',
      },
    ],
    stats: [
      { label: 'Entrenadores certificados', value: '45+' },
      { label: 'Sesión individual', value: '$400–$1,500 MXN' },
      { label: 'Zona accesible', value: 'Pedregal · San Ángel' },
      { label: 'Modalidades', value: 'Gym · domicilio · parque' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  eventos: {
    h1: 'Eventos fitness en Álvaro Obregón, CDMX – Carreras, CrossFit y Santa Fe 2026',
    metaDesc: 'Eventos fitness en Álvaro Obregón 2026: carreras urbanas en Santa Fe, competencias CrossFit en Pedregal y eventos deportivos por Insurgentes Sur.',
    intro: `La agenda de eventos fitness de Álvaro Obregón tiene la misma dualidad que todo en la alcaldía: eventos corporativos de alto presupuesto en Santa Fe y eventos comunitarios de barrio en Pedregal, San Ángel y colonias internas. Ambos existen, ambos tienen valor, y para el atleta que vive o trabaja en la zona, saber cuáles son relevantes depende exactamente de dónde está.

Santa Fe organiza eventos deportivos corporativos con cierta frecuencia — carreras de empresa, torneos entre corporativos y eventos de activación física vinculados a los edificios de oficinas. Para quien trabaja en esas torres y quiere competir en formato organizacional, esos eventos existen. Para el atleta amateur independiente, la relevancia es menor.

Los boxes de CrossFit de Pedregal organizan competencias internas cuatrimestrales abiertas a todos los niveles. El ambiente es el que caracteriza al CrossFit en cualquier parte del mundo — comunidad, cronómetros, WODs en tiempo real y el apoyo colectivo que no encuentras en ningún otro formato de competencia fitness. Para el atleta novato que quiere su primera experiencia de competencia, el evento interno de box es la entrada correcta.

Las carreras urbanas de CDMX tienen rutas que pasan por zonas de Álvaro Obregón — Insurgentes Sur es una de las avenidas más usadas en maratones y medias maratones capitalinas. El Bosque de Tlalpan, en la frontera sur de la alcaldía, es destino habitual de corredores de trail y mountain bikers que buscan terreno natural a menor distancia del centro de la ciudad que otros bosques metropolitanos.

Para atletismo y carrera, los grupos de running que parten desde San Ángel son los más organizados de la zona — rutas de 8 a 15km por las calles de la alcaldía con salidas fijas los fines de semana por la mañana.`,
    queEsperar: [
      {
        titulo: 'Competencias CrossFit en Pedregal',
        descripcion: 'Los boxes de CrossFit de Pedregal organizan competencias cuatrimestrales con categorías para todos los niveles, incluyendo categorías novato para primera experiencia competitiva. El formato CrossFit tiene la cultura de apoyo colectivo que lo caracteriza — no importa si llegas primero o último, el ambiente empuja. Para atletas de CrossFit en la zona, estos eventos son el circuito local más accesible y constante.',
      },
      {
        titulo: 'Carreras urbanas por Insurgentes Sur',
        descripcion: 'Insurgentes Sur es la columna de la alcaldía para corredores — vías amplias, acceso en Metrobús y grupos de running establecidos que salen los fines de semana. Las carreras organizadas de CDMX usan esta arteria con frecuencia. Para corredores de distancia, entrenar sobre Insurgentes y las calles del entorno de San Ángel da acceso a rutas de 10-20km en terreno urbano manejable.',
      },
      {
        titulo: 'Bosque de Tlalpan para trail y outdoor',
        descripcion: 'El Bosque de Tlalpan, en la frontera sur de la alcaldía, es el espacio de trail y outdoor más cercano para los atletas de Álvaro Obregón. Rutas de terreno natural de 5 a 20km para trail running, ciclismo de montaña y senderismo. Los fines de semana por la mañana concentran la mayor actividad. A diferencia de Chapultepec, tiene menor masificación y mayor sensación de espacio natural.',
      },
      {
        titulo: 'Eventos corporativos de Santa Fe',
        descripcion: 'Santa Fe organiza eventos deportivos corporativos — carreras de empresa, torneos entre corporativos y jornadas de activación física para empleados de las torres. Para el atleta independiente, el acceso a estos eventos suele requerir estar vinculado a alguna de las empresas organizadoras. Para quien trabaja en las torres, son una opción de competencia organizada con costos a cargo del empleador.',
      },
    ],
    faq: [
      {
        q: '¿Cuándo son las competencias de CrossFit en Álvaro Obregón?',
        a: 'Los boxes de Pedregal organizan competencias cuatrimestrales — generalmente en marzo, junio, septiembre y diciembre. Las fechas exactas se anuncian en Instagram de cada box con 4-6 semanas de anticipación. Para participar, la mayoría requiere ser miembro activo del box o pagar inscripción de visitante. Las competencias abiertas del circuito CrossFit CDMX se anuncian en grupos de Facebook de CrossFit México City.',
      },
      {
        q: '¿Hay carreras de 5K o 10K en Álvaro Obregón?',
        a: 'Las carreras organizadas que pasan por la alcaldía incluyen la Carrera Nocturna de Santa Fe y eventos de distancia corta que usan las vías del corredor Insurgentes-San Ángel. El calendario de carreras CDMX en la app Runners CDMX o en grupos de Facebook de corredores capitalinos tiene las fechas más actualizadas. Para maratones y medias maratones, la Carrera Ibero en Universidad Iberoamericana es la referencia del poniente capitalino.',
      },
      {
        q: '¿Cómo llego al Bosque de Tlalpan desde Álvaro Obregón?',
        a: 'El Bosque de Tlalpan está en la frontera sur de la alcaldía, accesible por Insurgentes Sur hasta su cruce con Periférico. En carro son 20-30 minutos desde San Ángel dependiendo del tráfico. En transporte público, el Metro Línea 3 hasta Miguel Ángel de Quevedo y de ahí pesero hacia el sur es la ruta más directa, aunque el tiempo varía. Los ciclistas de la zona suelen ir en bici directamente sobre las ciclovías de Insurgentes Sur.',
      },
      {
        q: '¿Qué grupos de running activos hay en San Ángel?',
        a: 'San Ángel tiene varios grupos de running que salen los sábados y domingos por la mañana — búscalos en Instagram con hashtag #RunnersSanAngel y en grupos de Facebook de running CDMX. Los grupos tienen rutas de 8 a 15km por las calles del barrio y hacia el Pedregal. La mayoría es gratuita con inscripción libre. Algunos grupos tienen acceso a plataformas de registro de tiempos (Strava) para seguimiento de progresión.',
      },
    ],
    stats: [
      { label: 'Eventos/año', value: '20+' },
      { label: 'Carrera principal', value: 'Insurgentes Sur' },
      { label: 'Outdoor', value: 'Bosque de Tlalpan' },
      { label: 'CrossFit hub', value: 'Pedregal' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  bienestar: {
    h1: 'Bienestar y recuperación en Álvaro Obregón, CDMX – Fisio y Nutrición 2026',
    metaDesc: 'Bienestar en Álvaro Obregón: fisioterapia deportiva, nutrición clínica y masajes en Santa Fe, Pedregal y San Ángel. Sesiones $400–$1,500 MXN.',
    intro: `El ecosistema de bienestar de Álvaro Obregón tiene la misma segmentación de precios que todo en la alcaldía: clínicas de fisioterapia de primer nivel en Santa Fe con tarifas corporativas, y consultorios en Pedregal y San Ángel con calidad técnica equivalente a precios significativamente menores. Para el atleta que sabe buscar, el acceso a bienestar serio en Álvaro Obregón no requiere el presupuesto de Santa Fe.

La fisioterapia deportiva tiene representación sólida en la alcaldía. Los fisioterapeutas de San Ángel y Pedregal trabajan con una clientela que entrena — CrossFitters, corredores, atletas de fuerza — y tienen el conocimiento de biomecánica y patología deportiva que eso requiere. Las técnicas disponibles incluyen terapia manual, electroestimulación, vendaje funcional y trabajo de movilidad — el stack estándar para recuperación de lesiones de entrenamiento.

La nutrición clínica deportiva tiene presencia real en la alcaldía. Los nutriólogos con enfoque en deporte de San Ángel y Pedregal trabajan con periodización nutricional para fuerza, resistencia y composición corporal. En México el título que vale buscar es el de Licenciado en Nutrición egresado de UNAM, UAM o escuelas con programa acreditado. La diferencia entre un nutriólogo titulado y un coach de nutrición sin respaldo académico es crítica para casos que involucran salud y no solo estética.

Para masaje terapéutico deportivo, la alcaldía tiene terapeutas con formación en masaje de tejido profundo, masaje deportivo y técnicas de liberación miofascial. Los precios van de $400 a $800 MXN por sesión de 60 minutos, con el extremo alto en Santa Fe. Para un atleta con volumen de entrenamiento alto, el masaje quincenal es parte de la recuperación activa — no un lujo.

La psicología del deporte tiene representación en San Ángel con algunos psicólogos especializados en rendimiento deportivo y manejo del componente mental del entrenamiento. Es la disciplina más subestimada del bienestar atlético y la que más impacto tiene cuando el atleta llega a cierto nivel de estancamiento.`,
    queEsperar: [
      {
        titulo: 'Fisioterapia deportiva: dos mercados de precio',
        descripcion: 'Santa Fe tiene clínicas de fisioterapia con equipamiento avanzado y tarifas corporativas. Pedregal y San Ángel tienen fisioterapeutas con formación deportiva equivalente a precios 30-50% menores. Para lesiones de entrenamiento, la zona de Pedregal/San Ángel ofrece el mejor costo-beneficio de la alcaldía. Siempre verifica que el fisioterapeuta tenga cédula profesional — es el requisito mínimo legal para ejercer en México.',
      },
      {
        titulo: 'Nutrición deportiva con licenciatura universitaria',
        descripcion: 'Los nutriólogos de Álvaro Obregón con orientación deportiva trabajan con periodización nutricional real — no solo conteo de calorías. La diferencia entre un licenciado en nutrición y un coach sin respaldo académico es la base científica del plan y la capacidad de manejar casos con condiciones de salud. En la alcaldía hay nutriólogos titulados de UNAM y UAM con especialización en deporte — pide siempre la cédula antes de empezar.',
      },
      {
        titulo: 'Masaje terapéutico para atletas',
        descripcion: 'Los terapeutas de masaje deportivo de San Ángel y Pedregal tienen formación en tejido profundo y técnicas de liberación miofascial. Para atletas que entrenan 4-6 veces por semana, el masaje quincenal reduce el DOMS acumulado y mejora el rango de movimiento para las sesiones siguientes. Los precios en el rango de Pedregal ($400-$600 MXN) son más accesibles que Santa Fe ($700-$1,500 MXN) con calidad técnica comparable.',
      },
      {
        titulo: 'Acceso sin tráfico de Santa Fe',
        descripcion: 'Para citas de bienestar que no requieren estar en Santa Fe, Pedregal y San Ángel tienen la ventaja logística del acceso predecible sobre Insurgentes Sur. El tráfico de Santa Fe en horas pico es uno de los peores de CDMX — una cita de fisioterapia después del trabajo en esa zona puede convertirse en una logística de dos horas entre ida y vuelta. Evalúa eso en el cálculo total antes de elegir dónde atenderte.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta la fisioterapia deportiva en Álvaro Obregón?',
        a: 'El rango va de $400 MXN en Pedregal y San Ángel hasta $1,200 MXN en clínicas de Santa Fe. La mayoría de fisioterapeutas de la zona residencial de la alcaldía cobran entre $500 y $800 MXN por sesión de 45-60 minutos. Paquetes de 8-10 sesiones tienen descuento del 10-15%. Para lesiones agudas, la frecuencia inicial puede ser 2-3 sesiones semanales — calcula ese costo total antes de elegir entre zona premium y zona accesible.',
      },
      {
        q: '¿Cómo encuentro un nutriólogo deportivo en Álvaro Obregón?',
        a: 'El canal más directo es la recomendación de tu entrenador o del gimnasio donde estás inscrito — los buenos PTs tienen nutriólogos de confianza a quienes derivan. También puedes buscar en el Colegio de Nutriólogos de México, que tiene registro de profesionales con cédula. Para especialización deportiva, busca nutriólogos que trabajen con atletas de tu disciplina específica — un nutriólogo que trabaja con powerlifters entiende diferente a la fuerza que uno que trabaja principalmente con pérdida de peso estética.',
      },
      {
        q: '¿Hay centros de recuperación avanzada en Álvaro Obregón?',
        a: 'Santa Fe tiene algunos centros con crioterapia localizada, presoterapia y electroestimulación muscular (EMS). Pedregal tiene centros con electroestimulación y diatermia como tecnologías estándar. La crioterapia de cuerpo completo y las cámaras de flotación son más raras en la alcaldía — para esas tecnologías, Polanco o Roma Norte tienen más opciones. Para la mayoría de atletas amateur, fisioterapia, masaje y nutrición tienen mayor impacto que las tecnologías avanzadas de recuperación.',
      },
      {
        q: '¿Vale la pena la psicología deportiva para alguien que entrena aficionado?',
        a: 'Sí, especialmente si notás que el componente mental afecta tu entrenamiento: falta de motivación consistente, bloqueos en competencia, dificultad para mantener la constancia o ansiedad antes de entrenar. La psicología del deporte no es solo para atletas de élite — cualquier persona con objetivos serios puede beneficiarse del trabajo de gestión mental. En San Ángel hay psicólogos con orientación en rendimiento deportivo que trabajan con atletas amateur. Una consulta de evaluación inicial te dice si el trabajo en ese eje tiene sentido para tu situación.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar', value: '25+' },
      { label: 'Fisioterapia sesión', value: '$400–$1,200 MXN' },
      { label: 'Masaje deportivo', value: '$400–$800 MXN' },
      { label: 'Consulta nutrición', value: '$500–$1,200 MXN' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,
}
