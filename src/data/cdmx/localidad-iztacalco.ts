// src/data/cdmx/localidad-iztacalco.ts

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

const vecinos = getVecinos('iztacalco')

const categoriaLinks: CatLink[] = [
  { slug: 'gimnasios', label: '🏋️ Gimnasios' },
  { slug: 'estudios', label: '🧘 Estudios' },
  { slug: 'entrenadores', label: '🚶 Entrenadores' },
  { slug: 'eventos', label: '📅 Eventos' },
  { slug: 'bienestar', label: '🌿 Bienestar' },
]

export const localidadContent = {
  nombre: 'Iztacalco',
  slug: 'iztacalco',
  lastReviewed: '2026-06-08',

  sobreBarrio: `Iztacalco es la alcaldía más chica de la CDMX en extensión — compacta, densa y con cultura barrial definida donde el deporte popular tiene presencia real desde décadas. El Velódromo Nacional es su símbolo deportivo y le da una identidad que pocas alcaldías tienen de forma tan concreta.

Los precios de los gimnasios acá son de los más accesibles del oriente de la ciudad — entre $350 y $1,000 MXN al mes, con salas que para lo que cobran tienen buen equipamiento de peso libre. No vas a encontrar los boutiques de $2,500 MXN de Benito Juárez ni las cadenas premium de Reforma, pero sí lugares donde la gente va a trabajar en serio sin poses.

El Metro Puebla es el acceso principal, y el Canal de la Viga tiene potencial para trabajo outdoor que runners y ciclistas ya aprovechan. La Av. Ermita-Iztapalapa es el eje comercial donde se concentran varias opciones de servicios. Iztacalco no es para quien busca experiencia fitness de lifestyle — es para quien quiere mover hierro a precio chilango real.`,

  gimnasios: {
    h1: 'Gimnasios en Iztacalco, CDMX — Precios reales y hierro chilango 2026',
    metaDesc: 'Gimnasios en Iztacalco, CDMX: 74 opciones desde $350 MXN/mes. Velódromo Nacional, Metro Puebla. Precio accesible, cultura barrial, peso libre real.',
    intro: `Iztacalco tiene 74 gimnasios registrados y la neta es que esta alcaldía tiene una de las mejores relaciones precio-equipamiento del oriente de la CDMX. El rango real está entre $350 y $1,000 MXN al mes — lejos de los $2,500 que cobran los boutiques de Roma Norte. Para quien jala en serio y no necesita pagar el código postal donde entrena, Iztacalco tiene opciones que valen la pena explorar.

La concentración principal está en el eje de la Av. Ermita-Iztapalapa y las colonias internas — Agrícola Oriental, Jardín Balbuena, Veinte de Noviembre. Los independientes dominan la escena: salas con racks, barras olímpicas, mancuernas hasta 40kg y zonas funcionales básicas. El nivel de mantenimiento varía entre establecimientos — hay que visitar antes de inscribirse. Los que llevan años con la misma clientela generalmente tienen más cuidado del espacio.

El Metro Puebla (Línea 9) es el acceso más práctico para quien viene del centro o de otras alcaldías. Desde la estación, la mayoría de gimnasios de la zona están a 5-15 minutos a pie. Para quien viene de Benito Juárez en bici, el trayecto por la Av. Ermita-Iztapalapa es directo y manejable sin necesidad de Metro.

La inscripción en los independientes suele ser $200-$400 MXN adicional al primer mes — hay que considerarlo al comparar con cadenas que no siempre cobran inscripción. Varios gimnasios incluyen clases grupales en la membresía: aeróbicos, funcional y spinning básico.

Lo que valoro en los gimnasios de Iztacalco es que no hay pose. La gente llega, trabaja y se va. No hay filtros de Instagram ni iluminación cinematográfica. Hay hierro, hay espacio y hay gente que sabe usarlo. Para un cuate del box como yo, ese ambiente de sala seria vale más que el diseño boutique de otras zonas. A huevo que sí.`,
    queEsperar: [
      {
        titulo: 'Precio chilango real, sin markup de barrio premium',
        descripcion: 'El rango en Iztacalco va de $350 a $1,000 MXN mensuales — algunos de los precios más accesibles del oriente de la CDMX. No hay markup de barrio de moda ni costo por la "experiencia". Hay gimnasios funcionales con equipamiento suficiente para quien tiene plan de entrenamiento claro. Para quienes buscan bajo costo sin sacrificar acceso a peso libre real, Iztacalco es una opción que muchos chilangos de otras zonas no consideran.',
      },
      {
        titulo: 'Independientes con zona de pesas real',
        descripcion: 'Los gimnasios independientes de Iztacalco tienen zonas de peso libre que cubren lo necesario para entrenamiento de fuerza serio: racks, barras olímpicas, mancuernas hasta 40kg, algunos con plataformas. El mantenimiento varía entre establecimientos — visitar antes de inscribirse es indispensable. Los que están bien mantenidos tienen clientela fija de años y eso es siempre buena señal.',
      },
      {
        titulo: 'Horarios para trabajadores de la zona',
        descripcion: 'Los gimnasios de Iztacalco generalmente abren desde las 6am y tienen horarios adaptados al perfil de trabajador que entrena antes o después del turno. Muchos cierran entre las 21 y 22h en día de semana. Los sábados el horario suele reducirse a media tarde. Confirmar antes si entrenas en horarios no estándar.',
      },
      {
        titulo: 'Smart Fit y cadenas en puntos de acceso',
        descripcion: 'Smart Fit tiene presencia en la zona con sus tarifas estándar de $499 MXN mensuales. Para quien quiere equipamiento moderno, clases grupales y horarios extendidos garantizados, la cadena cubre bien la necesidad. El precio está en la franja media del rango de Iztacalco. Los independientes pueden tener más carácter pero menos consistencia en equipamiento y horarios.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Iztacalco en 2026?',
        a: 'El rango en Iztacalco va de $350 a $1,000 MXN mensuales. Los independientes con buena zona de pesas suelen cobrar entre $400 y $700 MXN. Smart Fit tiene sus tarifas estándar alrededor de $499 MXN con todas las clases incluidas. Comparado con los $1,500-$2,500 MXN de boutiques de Benito Juárez o Cuauhtémoc, el diferencial es real. La inscripción suele ser de $200-$400 MXN adicional en los independientes.',
      },
      {
        q: '¿Cómo llego en Metro a los gimnasios de Iztacalco?',
        a: 'La estación Metro Puebla de la Línea 9 es el acceso principal. Desde ahí la mayoría de los gimnasios de la zona central de la alcaldía están a 5-15 minutos a pie. Para colonias más internas como Agrícola Oriental, puede ser necesario un transporte adicional — pesero o metrobús desde la estación. Desde el Centro Histórico el tiempo en Metro es de 15-20 minutos. Para quien viene de Benito Juárez, el transporte en bici por la Av. Ermita-Iztapalapa es una opción directa.',
      },
      {
        q: '¿Hay buenos gimnasios de pesas en Iztacalco?',
        a: 'Sí, hay varios independientes con zonas de peso libre funcionales. La clave es visitar personalmente antes de inscribirte — el estado del equipo varía mucho entre establecimientos del mismo rango de precio. Pregunta por la barra olímpica: si tienen una en buen estado, el resto del equipamiento suele estar en condición similar. Los que tienen clientela de años tienden a mantener mejor el equipo porque la gente se queda cuando el espacio funciona bien.',
      },
      {
        q: '¿Vale la pena un gimnasio de Iztacalco si vengo de Benito Juárez o Venustiano Carranza?',
        a: 'Si el objetivo es bajar el costo mensual 40-60% para calidad comparable de hierro disponible, sí vale la pena considerar el desplazamiento. Desde Benito Juárez el acceso en Metro Puebla o en bici no es complicado. Si buscas clases boutique, ambiente premium o equipamiento de última generación, la oferta de Iztacalco no cubre eso. Para trabajo serio de fuerza a precio real, la ecuación funciona.',
      },
    ],
    stats: [
      { label: 'Gimnasios registrados', value: '74' },
      { label: 'Membresía mensual', value: '$350–$1,000 MXN' },
      { label: 'Acceso Metro', value: 'Línea 9 — Metro Puebla' },
      { label: 'Referencia deportiva', value: 'Velódromo Nacional' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  estudios: {
    h1: 'Estudios fitness en Iztacalco, CDMX — Funcional, box y disciplinas populares 2026',
    metaDesc: 'Estudios fitness en Iztacalco, CDMX: artes marciales, funcional y aeróbicos desde $200 MXN/clase. Cultura deportiva popular, sin boutique caro.',
    intro: `Iztacalco no tiene la densidad de estudios boutique de Benito Juárez ni la variedad de boxes CrossFit de Cuauhtémoc, pero tiene algo que pocas alcaldías mantienen con tanta intensidad: cultura marcial popular real. Los cuates de acá entrenan box, lucha y artes marciales desde generaciones — hay academias que llevan décadas formando peleadores y que no necesitan el branding de moda para tener alumnos comprometidos.

El box tiene presencia fuerte en Iztacalco — academias con ringside, sacos en buen estado y entrenadores que saben la diferencia entre un boxeador y un chico que toma clases de cardio-boxing. Para alguien como yo que tiene el box como disciplina central, encontrar una academia seria en una zona accesible y a precio real es lo que busco. La técnica no sabe de códigos postales y tampoco necesita Instagram.

El entrenamiento funcional tiene representación a través de estudios independientes que ofrecen clases grupales con dinámica de alta intensidad — sin afiliación CrossFit pero con estructura similar. Los precios son más accesibles que en zonas boutique: $200-$500 MXN por clase suelta, paquetes mensuales $800-$1,500 MXN. La calidad depende del instructor específico, no del logo en la pared.

La lucha olímpica y la lucha libre también tienen presencia real acá — la influencia de la Arena México en la cultura popular del oriente de la CDMX se traduce en academias donde se practica agarre de verdad. Para quien busca disciplinas de contacto a precio chilango real, Iztacalco ofrece opciones que en Polanco simplemente no existen.

Lo que está más limitado: pilates Reformer con equipos premium, yoga avanzado con instructores de certificación internacional o estudios de spinning boutique con audio de alta gama. Para esas experiencias hay que jalar a Benito Juárez o Cuauhtémoc. Pero si buscas intensidad real, disciplina marcial auténtica y funcional sin pagar el barrio de moda, Iztacalco tiene lo suyo, neta.`,
    queEsperar: [
      {
        titulo: 'Academias de box con historia real',
        descripcion: 'Iztacalco tiene academias de boxeo con trayectoria — entrenadores que formaron peleadores y que enseñan técnica antes de poner a nadie a golpear el saco. El ambiente es de academia seria, no de clase de cardio-boxing para perder peso. Si buscas aprender a boxear de verdad, estas academias son la opción correcta. Las clases grupales cuestan $150-$300 MXN, planes mensuales $700-$1,200 MXN.',
      },
      {
        titulo: 'Funcional con intensidad real a precio accesible',
        descripcion: 'Los estudios de entrenamiento funcional de Iztacalco ofrecen clases con dinámica de alta intensidad — trabajo por tiempo, combinación de calistenia y peso libre, clases grupales cronometradas. No tienen afiliación CrossFit pero la propuesta es similar. Precios $200-$500 MXN por clase suelta, paquetes de $800-$1,500 MXN mensuales. La calidad depende del instructor — visitar antes de comprometerse.',
      },
      {
        titulo: 'Lucha y otras artes marciales',
        descripcion: 'La tradición de la lucha olímpica y la lucha libre tiene presencia en Iztacalco — la influencia de la Arena México en la cultura popular del oriente de la ciudad se extiende a academias donde se practica lucha real. Para alguien interesado en disciplinas de agarre, la zona tiene opciones que no existen en las alcaldías boutique.',
      },
      {
        titulo: 'Yoga y pilates básico en gimnasios locales',
        descripcion: 'Los gimnasios independientes de Iztacalco incluyen clases de yoga básico y aeróbicos en la membresía. No son estudios especializados con instructoras con formación en India, pero cubren las necesidades de flexibilidad y recuperación activa de quien entrena fuerza o artes marciales. Para trabajo de movilidad complementario sin costo adicional, esta opción funciona.',
      },
    ],
    faq: [
      {
        q: '¿Dónde puedo aprender a boxear en Iztacalco?',
        a: 'Iztacalco tiene academias de boxeo con entrenadores con experiencia real. La mayoría están en colonias como Jardín Balbuena y sobre el eje de la Av. Ermita-Iztapalapa. El costo de clases grupales va de $150 a $300 MXN por sesión, con planes mensuales de $700 a $1,200 MXN. Para encontrar la academia correcta, busca entrenadores que hablen de técnica desde la primera sesión — si solo te ponen a hacer cardio con guantes, no están enseñando box.',
      },
      {
        q: '¿Hay estudios de CrossFit en Iztacalco?',
        a: 'No hay boxes CrossFit afiliados en Iztacalco actualmente. La alcaldía tiene estudios de entrenamiento funcional con dinámica similar pero sin la afiliación formal. Para CrossFit afiliado con metodología estándar, los boxes más cercanos están en Benito Juárez o Venustiano Carranza. Si el objetivo es entrenamiento funcional de alta intensidad grupal a precio accesible, los estudios locales de Iztacalco tienen propuestas válidas.',
      },
      {
        q: '¿Cuánto cuestan las clases en estudios de Iztacalco?',
        a: 'Las clases sueltas en estudios de artes marciales y funcional van de $150 a $500 MXN dependiendo de la disciplina. Box y lucha en academias locales: $150-$300 MXN por clase. Funcional e HIIT: $200-$500 MXN. Paquetes mensuales: $700-$1,500 MXN según disciplina y frecuencia. El rango es significativamente menor que en Benito Juárez ($700-$2,500 MXN por clase en boutiques), manteniendo calidad técnica comparable en disciplinas marciales.',
      },
      {
        q: '¿Hay estudios de yoga o pilates en Iztacalco?',
        a: 'Hay yoga básico incluido en las membresías de gimnasios locales — no estudios especializados independientes. Para pilates Reformer con equipos de calidad o yoga avanzado con instructores certificados, hay que ir a Benito Juárez o Cuauhtémoc donde la oferta es más amplia. Si buscas yoga como práctica seria con instructor calificado en Iztacalco, puede ser necesario buscar con tiempo porque la oferta es limitada y los buenos instructores se conocen por referencia directa.',
      },
    ],
    stats: [
      { label: 'Estudios fitness', value: '20+' },
      { label: 'Clase suelta (artes marciales)', value: '$150–$300 MXN' },
      { label: 'Plan mensual', value: '$700–$1,500 MXN' },
      { label: 'Especialidad local', value: 'Box · lucha · funcional' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  entrenadores: {
    h1: 'Entrenadores personales en Iztacalco, CDMX — Certificados y asequibles 2026',
    metaDesc: 'Entrenadores personales en Iztacalco, CDMX. PTs certificados desde $250 MXN/sesión. Parque Velódromo y Canal de la Viga. Precio real sin boutique.',
    intro: `Iztacalco tiene entrenadores personales que trabajan con criterio técnico y cobran tarifas que reflejan la realidad económica de la alcaldía — no los precios de Roma Norte ni Polanco. Para mí, que valoro al entrenador que sabe corregir la técnica sobre el que tiene mejor foto de perfil, esto es lo que importa: formación, experiencia práctica y honestidad sobre lo que el entrenamiento puede y no puede hacer.

El rango de tarifas está entre $250 y $800 MXN por sesión. La variación depende de la certificación, los años de experiencia y la especialidad. No es el rango de $1,000-$2,500 de trainers boutique de Polanco, pero en ese diferencial no siempre hay diferencia de calidad — a veces solo hay diferencia de marketing. El cuate que formó boxeadores en Iztacalco durante diez años sabe tanto de movimiento humano como el trainer de Reforma con feed impecable. El barrio no determina el conocimiento.

El Canal de la Viga ofrece posibilidades para entrenamiento outdoor — running, ciclismo, trabajo funcional en espacios abiertos. Varios entrenadores de la zona incorporan este espacio en sesiones con clientes que quieren diversificar del gimnasio. El Velódromo Nacional, aunque es principalmente para ciclismo de competencia, está en la zona y refuerza la cultura deportiva local que hace que los entrenadores de Iztacalco tengan contexto real de alto rendimiento.

Para domicilio, Iztacalco tiene conjuntos residenciales y viviendas con espacio donde el trabajo con implementos básicos es perfectamente ejecutable. El costo de desplazamiento dentro de la alcaldía generalmente está incluido en la tarifa. Para clientes fuera de la alcaldía, los entrenadores suelen cobrar un adicional razonable.

Los paquetes de 10 sesiones en Iztacalco rondan los $2,000-$6,500 MXN con descuento del 10-15% respecto al precio por sesión individual. Para quien empieza o retoma el entrenamiento guiado, ese rango hace posible comprometerse varios meses sin sacrificar otras prioridades del presupuesto.`,
    queEsperar: [
      {
        titulo: 'Tarifas accesibles para la realidad de la alcaldía',
        descripcion: 'Los entrenadores personales de Iztacalco cobran entre $250 y $800 MXN por sesión de 60 minutos. Paquetes de 10 sesiones tienen descuento del 10-15%. El rango es 40-60% menor que en alcaldías boutique de la CDMX para perfiles de formación comparables. Verificar experiencia específica y pedir sesión de prueba antes de comprometerse a un paquete largo.',
      },
      {
        titulo: 'Entrenadores con perfil técnico en disciplinas populares',
        descripcion: 'Iztacalco tiene entrenadores con especialización práctica en box, lucha y artes marciales — disciplinas con tradición real en la zona. Para atletas que buscan mejorar en estas disciplinas específicas, los entrenadores de la alcaldía tienen experiencia que los trainers de boutique de otras zonas no tienen. Un coach de box con 10 años en la zona vale más para ese objetivo que cualquier certificación genérica de fitness.',
      },
      {
        titulo: 'Entrenamiento outdoor en Canal de la Viga',
        descripcion: 'El Canal de la Viga ofrece espacio para entrenamiento outdoor — running, ciclismo y trabajo funcional en ambiente abierto. Varios entrenadores de la zona incorporan este espacio en sesiones con clientes, especialmente para trabajo cardiovascular y funcional. El contexto urbano del canal tiene sus particularidades — no es el Parque de Chapultepec, pero funciona para variedad de estímulos al aire libre.',
      },
      {
        titulo: 'Domicilio práctico dentro de la alcaldía',
        descripcion: 'El entrenamiento a domicilio tiene demanda en Iztacalco para clientes que prefieren evitar el desplazamiento. Los entrenadores locales llevan implementos básicos y diseñan sesiones efectivas en el espacio disponible. Para quien trabaja turno completo y el tiempo es el recurso más escaso, esta modalidad tiene lógica práctica.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Iztacalco?',
        a: 'Las tarifas en Iztacalco van de $250 a $800 MXN por sesión de 60 minutos. Los paquetes de 10 sesiones suelen costar $2,000-$6,500 MXN con descuento. Para domicilio dentro de la alcaldía el costo de traslado generalmente está incluido. Comparado con los $1,000-$2,500 por sesión de trainers premium de Polanco o Roma Norte, el diferencial es significativo. La calidad técnica depende del entrenador específico, no del barrio donde trabaja.',
      },
      {
        q: '¿Hay entrenadores especializados en box o artes marciales en Iztacalco?',
        a: 'Sí, Iztacalco tiene coaches de box y artes marciales con experiencia real — algunos han formado competidores y tienen años en la zona. Para encontrarlos, la mejor ruta es visitar las academias de box y lucha de la alcaldía y preguntar directamente. Los entrenadores serios de disciplinas marciales tienen historial de trabajo y referencias directas de sus alumnos. El boca a boca en la comunidad deportiva local es la fuente más confiable.',
      },
      {
        q: '¿Puedo entrenar en el Canal de la Viga con un entrenador personal?',
        a: 'Sí, varios entrenadores de Iztacalco incorporan el Canal de la Viga para sesiones outdoor — running, calistenia y trabajo funcional en espacio abierto. El canal tiene zonas donde el trabajo al aire libre es seguro y práctico. Para sesiones de fuerza con equipamiento, el gimnasio sigue siendo la opción principal. Para diversificar el estímulo con cardio y funcional outdoor, el canal tiene espacio utilizable.',
      },
      {
        q: '¿Vale la pena contratar un PT de Iztacalco si vivo en Benito Juárez?',
        a: 'Si tu objetivo es artes marciales o disciplinas donde los entrenadores de Iztacalco tienen especialización real, sí vale el desplazamiento. Si buscas fitness general o culturismo, probablemente tienes opciones comparables más cerca en Benito Juárez sin necesidad de cruzar alcaldías. La clave es el objetivo específico: para box y lucha serios a precio accesible, Iztacalco tiene trainers que justifican el viaje desde zonas adyacentes.',
      },
    ],
    stats: [
      { label: 'Entrenadores activos', value: '40+' },
      { label: 'Sesión individual', value: '$250–$800 MXN' },
      { label: 'Outdoor', value: 'Canal de la Viga' },
      { label: 'Especialidad', value: 'Box · lucha · fuerza' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  eventos: {
    h1: 'Eventos fitness en Iztacalco, CDMX — Velódromo, canal y cultura popular 2026',
    metaDesc: 'Eventos fitness en Iztacalco, CDMX 2026: Velódromo Nacional, Canal de la Viga y torneos de artes marciales barriales. Metro Puebla.',
    intro: `Iztacalco tiene el Velódromo Nacional — y ese dato solo ya lo pone en un lugar distinto al de otras alcaldías cuando hablamos de eventos deportivos. El velódromo es infraestructura de competencia de primer nivel y ocasionalmente abre para eventos de ciclismo de pista y actividades deportivas que concentran a la comunidad ciclista de toda la ciudad. No es un evento de fin de semana cualquiera — cuando hay evento en el velódromo, la zona se activa de manera distinta y el acceso desde Metro Puebla lo hace accesible para cualquier chilango.

Los torneos de artes marciales son los eventos deportivos más frecuentes y genuinos de la alcaldía. Box, lucha y kickboxing tienen torneos locales que las academias de la zona organizan con regularidad — algunos internos, otros abiertos a competidores de otras alcaldías. El nivel competitivo varía pero el ambiente es de comunidad deportiva real donde el atleta importa más que el espectador. La inscripción a torneos abiertos suele estar entre $200 y $500 MXN según categoría.

El Canal de la Viga tiene potencial para eventos deportivos al aire libre — carreras, ciclismo y actividades acuáticas en temporadas específicas. Algunas organizaciones deportivas comunitarias lo usan para actividades que combinan deporte y recuperación del espacio público. Los grupos de running de la zona entrenan ahí con regularidad.

Los eventos masivos del gobierno de la Ciudad tienen presencia en la alcaldía — clases abiertas, jornadas deportivas comunitarias y actividades en parques locales que mueven a comunidades enteras sin costo de acceso. El INDEPORTE organiza estas jornadas con cierta frecuencia durante el año, especialmente en temporadas vacacionales. Para quien vive en Iztacalco, estos eventos son parte del calendario anual que complementa el entrenamiento regular sin necesidad de pagar inscripción.`,
    queEsperar: [
      {
        titulo: 'Eventos en el Velódromo Nacional',
        descripcion: 'El Velódromo Nacional en Iztacalco es infraestructura deportiva de primer nivel que alberga competencias de ciclismo de pista y eventos especiales. Cuando hay evento abierto al público, es una experiencia deportiva genuina en la zona. Para seguir la agenda del velódromo, las redes sociales de la CONADE y del gobierno de la CDMX son las fuentes más actualizadas.',
      },
      {
        titulo: 'Torneos locales de artes marciales',
        descripcion: 'Las academias de box, lucha y kickboxing de Iztacalco organizan torneos con regularidad semestral. Los internos son para alumnos de la propia academia — ideal para primeras experiencias competitivas. Los abiertos reciben competidores de otras alcaldías y tienen más escala. La inscripción típica es de $200-$500 MXN según categoría y formato del evento.',
      },
      {
        titulo: 'Actividades deportivas en Canal de la Viga',
        descripcion: 'El Canal de la Viga tiene actividades deportivas comunitarias organizadas por grupos locales y dependencias del gobierno — carreras, paseos ciclistas y en temporada apropiada actividades acuáticas. No son eventos de gran escala pero reflejan el uso activo del espacio público por parte de la comunidad deportiva de Iztacalco.',
      },
      {
        titulo: 'Jornadas deportivas del gobierno de la CDMX',
        descripcion: 'El INDEPORTE y el gobierno de la Ciudad organizan jornadas deportivas y clases masivas en parques de Iztacalco durante el año. Aeróbicos, yoga, actividad física para adultos mayores y deportes comunitarios — sin costo de acceso, sin inscripción previa. Son el evento fitness más accesible y democrático de la alcaldía.',
      },
    ],
    faq: [
      {
        q: '¿Cuándo hay eventos en el Velódromo Nacional de Iztacalco?',
        a: 'El Velódromo Nacional tiene agenda variable — competencias de ciclismo de pista nacionales e internacionales, y eventos especiales de apertura comunitaria. Para conocer la agenda actualizada, sigue las redes sociales de la CONADE (Comisión Nacional de Cultura Física y Deporte) y el sitio oficial del Velódromo. Los eventos de competencia tienen entrada libre para espectadores en muchos casos — es una experiencia deportiva de alto nivel accesible desde el Metro Puebla.',
      },
      {
        q: '¿Cómo me entero de los torneos de box en Iztacalco?',
        a: 'La mejor fuente es preguntar directamente en las academias de box de la alcaldía — los entrenadores conocen el calendario local y los eventos abiertos de otras academias. También hay grupos en Facebook y WhatsApp de box chilango donde se anuncian torneos con anticipación. La FMBOX (Federación Mexicana de Box) tiene la agenda de eventos oficiales. Para torneos de primera experiencia, los internos de academia son el punto de entrada correcto.',
      },
      {
        q: '¿Hay carreras o eventos de running en Iztacalco?',
        a: 'Iztacalco tiene participación en las carreras populares de la CDMX que recorren el oriente de la ciudad. El Canal de la Viga es usado por grupos de running locales para entrenamiento regular, aunque no es una ruta oficial de carreras. Para el calendario completo de carreras populares en la CDMX, la app y sitio de Corredores de México tienen la información más actualizada. La Carrera Atlética de la Ciudad de México y otras carreras masivas a veces incluyen tramos por el oriente.',
      },
      {
        q: '¿Vale la pena ir a Iztacalco solo para eventos deportivos?',
        a: 'Para eventos del Velódromo Nacional con ciclismo de pista de alto nivel, sí — es una experiencia que no existe en la mayoría de alcaldías. Para torneos de artes marciales, si esa es tu disciplina y buscas ambiente competitivo auténtico sin el glam de otros formatos, los torneos de Iztacalco valen la visita. Para eventos de escala grande y variedad, el Centro Histórico o Chapultepec tienen más opciones concentradas. Cada evento tiene su razón para existir y su público natural.',
      },
    ],
    stats: [
      { label: 'Infraestructura deportiva', value: 'Velódromo Nacional' },
      { label: 'Torneos artes marciales', value: '3–4 por año' },
      { label: 'Outdoor', value: 'Canal de la Viga' },
      { label: 'Jornadas INDEPORTE', value: 'Gratuitas, todo el año' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  bienestar: {
    h1: 'Bienestar y recuperación en Iztacalco, CDMX — Fisio y masajes accesibles 2026',
    metaDesc: 'Bienestar en Iztacalco, CDMX: fisioterapia desde $300 MXN/sesión y masajes terapéuticos. Clínicas locales accesibles. Metro Puebla. Sin precio boutique.',
    intro: `Iztacalco tiene una oferta de bienestar que funciona para quien entrena en serio y necesita recuperación de calidad sin pagar el precio de zonas boutique. Los servicios de fisioterapia y masaje terapéutico existen en la alcaldía a un precio que es 40-60% menor que en Benito Juárez o Cuauhtémoc para calidad comparable de atención.

Lo que importa en bienestar deportivo es lo que siempre: ¿el fisioterapeuta evalúa antes de tratar? ¿el masajista tiene formación en tejido profundo o solo hace masaje de spa? ¿el nutricionista entiende el entrenamiento o solo cuenta calorías? Esas preguntas tienen las mismas respuestas correctas en Iztacalco que en Polanco — la diferencia está en quién cobra qué por estar en qué colonia.

Los fisioterapeutas de la zona trabajan principalmente con lesiones musculoesqueléticas de trabajadores físicos y deportistas recreativos. Tienen experiencia práctica en los problemas más frecuentes de quien levanta peso o hace artes marciales regularmente: rodillas, hombros, zona lumbar, codos. Para atención de estas condiciones, la calidad de un fisioterapeuta universitario de Iztacalco es perfectamente suficiente y las sesiones cuestan entre $300 y $700 MXN.

El masaje terapéutico tiene oferta real en la alcaldía — no solo el masaje de relajación genérico, sino terapeutas con formación en masaje deportivo que trabajan con atletas de la zona. Los precios van de $300 a $600 MXN por sesión de 60 minutos — mucho más accesible que los $800-$1,500 de centros boutique de otras alcaldías. Para quien entrena box o artes marciales con volumen alto, el masaje de recuperación a ese precio es viable como parte regular del programa.

Hay también nutricionistas con formación universitaria en la alcaldía. Para composición corporal y objetivos de entrenamiento general, cubren bien. Para periodización nutricional de competencia, puede ser necesario buscar especialistas con enfoque deportivo específico en otras zonas.`,
    queEsperar: [
      {
        titulo: 'Fisioterapia a precio chilango real',
        descripcion: 'Las sesiones de fisioterapia en Iztacalco cuestan entre $300 y $700 MXN por sesión de 45-60 minutos — significativamente menos que en Benito Juárez o Cuauhtémoc. Los fisioterapeutas con título universitario tienen formación equivalente a la de cualquier zona de la ciudad. Para lesiones comunes de entrenamiento, la atención de calidad no requiere pagar el precio boutique.',
      },
      {
        titulo: 'Masaje terapéutico con formación real',
        descripcion: 'Hay terapeutas en Iztacalco con formación en masaje deportivo y tejido profundo. Los precios van de $300 a $600 MXN por sesión de 60 minutos — mucho menos que centros boutique. Para atletas con volumen alto de entrenamiento, el masaje terapéutico regular es recuperación activa, no gasto discrecional. En Iztacalco el precio lo hace sostenible.',
      },
      {
        titulo: 'Nutrición básica para quien entrena',
        descripcion: 'Hay nutricionistas en la alcaldía con formación universitaria general. Para objetivos de pérdida de peso y acondicionamiento básico con entrenamiento de soporte, la consulta local funciona. Para nutrición deportiva de rendimiento específico, puede ser necesario buscar especialistas en otras alcaldías con más concentración de ese perfil profesional. Consulta: $300-$600 MXN por primera sesión.',
      },
      {
        titulo: 'Centros de salud del sector público',
        descripcion: 'Iztacalco tiene centros de salud públicos con servicio de rehabilitación física que atienden a derechohabientes del IMSS o ISSSTE. Para quien tiene servicio de salud, estos centros ofrecen atención de fisioterapia sin costo adicional. La disponibilidad de turnos puede ser limitada — la espera para servicio público varía significativamente según el centro y el período del año.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta la fisioterapia en Iztacalco?',
        a: 'Las sesiones de fisioterapia privada en Iztacalco van de $300 a $700 MXN por sesión de 45-60 minutos. Paquetes de 10 sesiones tienen descuento del 10-15%. Para derechohabientes del IMSS o ISSSTE, los centros de salud públicos de la alcaldía ofrecen rehabilitación física sin costo. Comparado con los $700-$1,500 de clínicas boutique de Benito Juárez, el diferencial es real. La formación universitaria del fisioterapeuta es el indicador de calidad más confiable, independientemente de la zona.',
      },
      {
        q: '¿Hay masajistas deportivos certificados en Iztacalco?',
        a: 'Sí, hay terapeutas con formación en masaje deportivo en la alcaldía. Pregunta directamente por su certificación — título en masoterapia, terapia manual o masaje deportivo específico. Los precios van de $300 a $600 MXN por sesión de 60 minutos. Para verificar calidad, pide referencias de otros atletas que hayan sido atendidos por ese terapeuta — el boca a boca en comunidades deportivas locales es el filtro más confiable.',
      },
      {
        q: '¿Vale la pena el fisioterapeuta de Iztacalco o mejor ir a otra alcaldía?',
        a: 'Para lesiones comunes de entrenamiento — tendinitis, dolor lumbar, sobrecargas musculares, lesiones de hombro — la calidad de un fisioterapeuta universitario de Iztacalco es suficiente y el precio es 40-60% menor. Si necesitas equipamiento muy específico (ondas de choque, equipos de electroterapia de alta generación) que solo tienen clínicas de alta especialización, puede ser necesario ir a otras zonas. Para atención general de calidad, la ecuación de Iztacalco funciona bien.',
      },
      {
        q: '¿Hay centros de recuperación con crioterapia o tecnología avanzada en Iztacalco?',
        a: 'No es frecuente encontrar tecnologías de recuperación avanzadas como crioterapia de cuerpo completo en Iztacalco. La alcaldía tiene fisioterapia y masaje terapéutico de calidad a precio accesible, pero no los centros de recuperación deportiva de alta tecnología que existen en Polanco o Santa Fe. Para tecnología avanzada de recuperación, hay que buscar en alcaldías con más concentración de centros deportivos de alto rendimiento. Para la mayoría de atletas, la fisioterapia y el masaje deportivo tienen mayor impacto que las tecnologías avanzadas de recuperación.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar', value: '15+' },
      { label: 'Fisioterapia sesión', value: '$300–$700 MXN' },
      { label: 'Masaje terapéutico', value: '$300–$600 MXN' },
      { label: 'Consulta nutrición', value: '$300–$600 MXN' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,
}
