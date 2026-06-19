// src/data/cdmx/localidad-xochimilco.ts

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

const vecinos = getVecinos('xochimilco')

const categoriaLinks: CatLink[] = [
  { slug: 'gimnasios', label: 'Gimnasios' },
  { slug: 'estudios', label: 'Estudios' },
  { slug: 'entrenadores', label: 'Entrenadores' },
  { slug: 'eventos', label: 'Eventos' },
  { slug: 'bienestar', label: 'Bienestar' },
]

export const localidadContent = {
  nombre: 'Xochimilco',
  slug: 'xochimilco',
  lastReviewed: '2026-06-10',

  sobreBarrio: `Xochimilco es Patrimonio de la Humanidad por la UNESCO — chinampas, trajineras y canales hacen de este lugar algo único en el mundo. Fuera del turismo de fin de semana, es una alcaldía del sur de CDMX con comunidad local sólida y muy pocos gimnasios modernos. Eso lo digo directo, cuate: si buscas lo mismo que en Roma Norte o Condesa, Xochimilco no es el lugar.

La infraestructura deportiva refleja la escala de la alcaldía — hay más cancha comunitaria y deporte en espacio público que box de CrossFit con equipo importado. Av. Guadalupe y el Embarcadero Cuemanco son los ejes donde se concentran los pocos gimnasios que existen.

El Tren Ligero conecta hacia el norte, pero el traslado no es trivial. Para quien quiere entrenar cerca de casa, la oferta local es la que es.

Lo que Xochimilco tiene que ningún barrio de Polanco puede comprar es el espacio natural: los canales, la zona chinampera y el ambiente al aire libre hacen de esta alcaldía un lugar único para actividad física outdoor. Si eso te importa, acá tiene sentido estar.`,

  gimnasios: {
    h1: 'Gimnasios en Xochimilco, CDMX – Opciones locales 2026',
    metaDesc: 'Gimnasios en Xochimilco, CDMX: 55 opciones entre $300–$900 MXN/mes. Budget cerca de Embarcadero Cuemanco y Av. Guadalupe. Fitness en la alcaldía chinampera.',
    intro: `Xochimilco tiene 55 gimnasios registrados y la neta es que la mayoría son locales de barrio — independientes, sin franquicia grande, con equipamiento básico y precio muy accesible. El rango real va de $300 a $900 MXN al mes, lo cual hace de Xochimilco una de las opciones más baratas del sur de CDMX para quienes viven en la alcaldía. Si buscas SmartFit o Gym Plus con sus estándares de cadena, tienes que ir más al norte — Tlalpan tiene más opciones de ese tipo.

El perfil del gimnasio en Xochimilco es claro: sala de pesas con barras, discos y mancuernas hasta 30-35kg, sin mucho más. No vas a encontrar zonas funcionales completas, ni piscinas, ni sauna. Lo que sí hay es espacio para trabajo de fuerza básico — sentadilla libre, press de banca, peso muerto — sin pagar el precio de una cadena que te cobra la marca en el mensual. Para quien jala con consistencia, eso alcanza.

La ubicación importa, cuate: si vives o trabajas en la alcaldía, la logística de ir al gimnasio es sencilla. Si vienes de otra parte de la ciudad solo por el gimnasio, el tiempo de traslado no justifica. Xochimilco no compite con Condesa o Benito Juárez en infraestructura de fitness — lo que tiene es precio y comunidad local.

El Embarcadero Cuemanco, con sus instalaciones deportivas y el espacio abierto del canal, ofrece opciones de actividad física que ningún gimnasio de concreto replica. El remo en canoa, los circuitos de calistenia al lado del agua, los espacios de la zona chinampera — eso es Xochimilco y es único en toda la CDMX. Para quien combina el trabajo de gym con el entrenamiento outdoor, la alcaldía tiene algo que Roma Norte nunca va a tener, y esa es la neta.`,
    queEsperar: [
      {
        titulo: 'Precio accesible, equipamiento básico',
        descripcion: 'El rango de $300-$900 MXN al mes refleja la realidad de la oferta en Xochimilco. Los gimnasios más económicos tienen barras, discos y mancuernas hasta 30kg — suficiente para trabajo de fuerza progresivo básico. Los del rango alto ($700-$900) pueden tener algo más de equipo o máquinas. Antes de inscribirte, revisá en persona el estado del equipo: discos en buen estado, barras sin doblar y racks con seguros funcionando son el mínimo necesario.',
      },
      {
        titulo: 'Comunidad de barrio, sin presión de marca',
        descripcion: 'Los gimnasios de Xochimilco son espacios comunitarios donde se conocen entre sí. No hay ambiente de competencia visual ni de Instagram — hay gente que va a jalar. Para quien prefiere un entorno tranquilo donde hacer el trabajo sin presión de la imagen, los gimnasios de barrio de Xochimilco tienen ese ambiente. El mismo instructor, la misma gente, el mismo horario — semana tras semana.',
      },
      {
        titulo: 'Acceso al aire libre único: canales y chinampas',
        descripcion: 'El Embarcadero Cuemanco y los canales de Xochimilco tienen zonas de actividad física al aire libre que no existen en ningún otro lugar de CDMX. Calistenia junto al canal, circuitos en espacios abiertos de la zona chinampera y el ambiente lacustre hacen del entrenamiento outdoor en Xochimilco una experiencia diferente. Para complementar el trabajo de gimnasio, el espacio abierto de la alcaldía es un activo real.',
      },
      {
        titulo: 'Horarios ajustados al ritmo local',
        descripcion: 'Los gimnasios de Xochimilco suelen abrir de 6am a 9pm entre semana y tienen horario reducido los fines de semana. El horario pico es temprano en la mañana — los fines de semana la zona tiene mucho turismo de trajinera y la logística local se complica. Para entrenar tranquilo en Xochimilco, el horario de entresemana es el más conveniente.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Xochimilco en 2026?',
        a: 'El rango en Xochimilco va de $300 a $900 MXN al mes — algunos de los precios más bajos del sur de CDMX. Los más económicos son salas básicas de barrio con equipamiento mínimo. Los que cobran $700-$900 MXN tienen algo más de variedad de equipo. Pocas opciones en Xochimilco superan esa cifra — para franquicias grandes como SmartFit o Gym Plus tienes que ir a Tlalpan o Iztapalapa.',
      },
      {
        q: '¿Hay SmartFit o cadenas grandes en Xochimilco?',
        a: 'La presencia de cadenas grandes en Xochimilco es muy limitada — la alcaldía no tiene la densidad de franquicias que encuentras en el centro o el norte de la ciudad. La mayoría de las opciones son gimnasios independientes. Si necesitas específicamente una cadena por la app, el acceso multisede o los estándares de equipamiento de franquicia, Tlalpan al norte tiene más opciones. Desde Xochimilco el traslado a Tlalpan es factible.',
      },
      {
        q: '¿Cómo llego a los gimnasios de Xochimilco desde el centro de CDMX?',
        a: 'El Tren Ligero desde Tasqueña (Metro Línea 2) conecta con la estación Xochimilco en aproximadamente 30-40 minutos. Las rutas de autobús por Av. División del Norte también cubren la zona. Para quien viene desde Tlalpan o Iztapalapa, el acceso es más directo. Desde el centro o el norte de la ciudad, el tiempo de traslado a Xochimilco es real — si no vives en la alcaldía, probablemente no vale el viaje solo por el gimnasio.',
      },
      {
        q: '¿Hay opciones de entrenamiento outdoor en Xochimilco además del gimnasio?',
        a: 'Sí, y es donde Xochimilco tiene ventaja sobre cualquier otra alcaldía de CDMX. El Embarcadero Cuemanco tiene instalaciones deportivas y espacio abierto. Los canales y las áreas chinamperas tienen circuitos de calistenia improvisados y grupos de running que usan las vías del Tren Ligero y los márgenes de los canales. Para kayak, remo en canoa y actividad física acuática, la zona es única en la ciudad.',
      },
    ],
    stats: [
      { label: 'Gimnasios registrados', value: '55' },
      { label: 'Precio mensual', value: '$300–$900 MXN' },
      { label: 'Zona activa', value: 'Embarcadero · Av. Guadalupe' },
      { label: 'Transporte', value: 'Tren Ligero Xochimilco' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  estudios: {
    h1: 'Estudios fitness en Xochimilco, CDMX – Clases grupales 2026',
    metaDesc: 'Estudios fitness en Xochimilco, CDMX: aeróbicos, zumba y clases grupales entre $250–$700 MXN/mes. Opciones locales cerca de la zona chinampera y Av. Guadalupe.',
    intro: `Xochimilco no tiene boxes CrossFit afiliados ni estudios boutique de Pilates Reformer — eso está en Benito Juárez, Roma Norte y Condesa. Lo que sí tiene son estudios de clases grupales con comunidad barrial real: zumba, aeróbicos con coreografía, clases de baile folklórico y algunos intentos de entrenamiento funcional básico. No es lo que verías en el feed de un influencer de fitness de Polanco, pero es lo que existe en la alcaldía y tiene su valor propio.

La neta sobre los estudios de Xochimilco: el nivel de certificación formal de los instructores es variable, pero la experiencia práctica de muchos que llevan años en la misma comunidad compensa. Una instructora de zumba que conoce desde hace diez años a las señoras del barrio y adapta la clase a sus limitaciones físicas está dando un servicio real, aunque no tenga el logo de una certificación internacional en la pared. Eso vale más que un diploma enmarcado sin historial.

El precio de clases en Xochimilco está entre $250 y $700 MXN al mes para acceso ilimitado — uno de los rangos más bajos de CDMX. Para trabajo cardiovascular regular y mantenimiento de condición física a precio accesible, la oferta de la alcaldía cumple, cuate. Para CrossFit metodológico, pilates con Reformer o spinning boutique, hay que ir al norte — y hay que ser honesto con eso.

Lo que sí tiene Xochimilco que pocos barrios tienen es el espacio natural para actividad física grupal al aire libre. Grupos de yoga informal en zonas de chinampas, clases de tai chi en espacios verdes junto al canal, actividades de danza prehispánica con raíz cultural real — eso no lo comprás en ningún estudio boutique de Condesa. Tiene un valor que va más allá del fitness estricto y que le da identidad propia a la alcaldía como destino de bienestar diferente.`,
    queEsperar: [
      {
        titulo: 'Clases grupales con enfoque comunitario',
        descripcion: 'Los estudios de Xochimilco tienen culturas de clase establecidas — la misma gente, el mismo instructor, semana tras semana. Zumba, aeróbicos y baile son el fuerte de la oferta. Para quien necesita el entorno social para sostener la rutina de actividad física, los estudios barriales de Xochimilco tienen ese componente comunitario que los estudios boutique intentan construir con presupuesto de marketing.',
      },
      {
        titulo: 'Precio entre los más bajos de CDMX',
        descripcion: 'El rango de $250-$700 MXN al mes para membresía ilimitada hace de Xochimilco una de las opciones más accesibles del sur de la ciudad. Clases sueltas pueden estar entre $40-$80 MXN. Ese precio implica estudios con equipamiento básico — expectativas ajustadas a la realidad son la clave para no decepcionarse.',
      },
      {
        titulo: 'Actividades al aire libre con identidad cultural',
        descripcion: 'Grupos de tai chi, yoga informal y danza prehispánica en espacios abiertos de la zona chinampera son parte del tejido de actividad física de Xochimilco. No están en ninguna app de fitness ni tienen Instagram con miles de seguidores, pero existen y tienen participación real. La conexión con el ambiente natural y la cultura local hace de estas actividades algo genuino que Xochimilco puede ofrecer y que ningún otro barrio de CDMX replica.',
      },
      {
        titulo: 'CrossFit y pilates Reformer: no están acá',
        descripcion: 'Si buscas metodología CrossFit con programación Rx seria o clases de pilates Reformer con certificación BASI, Xochimilco no tiene esa oferta. Para esas disciplinas, Benito Juárez, Cuauhtémoc o Miguel Hidalgo son las zonas de referencia en CDMX. Desde Xochimilco el traslado al norte es real pero factible para quienes priorizan esas metodologías.',
      },
    ],
    faq: [
      {
        q: '¿Hay CrossFit en Xochimilco?',
        a: 'La oferta de CrossFit afiliado en Xochimilco es prácticamente inexistente — la alcaldía no tiene boxes certificados activos en 2026. Para CrossFit metodológico con programación Rx seria, Benito Juárez, Cuauhtémoc y algunos puntos de Tlalpan tienen boxes afiliados. Desde Xochimilco en transporte público el traslado es de 40-60 minutos al norte de la ciudad. Para entrenamiento funcional de alta intensidad sin el logo de afiliación, hay algunas propuestas independientes en la zona que cumplen parcialmente.',
      },
      {
        q: '¿Cuánto cuesta una clase de zumba o aeróbicos en Xochimilco?',
        a: 'Las clases sueltas en estudios de Xochimilco van de $40 a $80 MXN. Los paquetes mensuales ilimitados están entre $250 y $700 MXN según el estudio. Es uno de los rangos más bajos de CDMX para actividad física en grupo. La diferencia de precio con un estudio boutique de Roma Norte o Condesa puede ser de 3x a 5x — para el mismo tipo de clase de aeróbicos básico, la diferencia de resultado en condición física es mínima.',
      },
      {
        q: '¿Vale la pena ir a Xochimilco solo para entrenar?',
        a: 'No — si no vives o trabajas en la alcaldía, el tiempo de traslado desde el centro o el norte de la ciudad no justifica hacer el viaje solo para ir al gimnasio. La oferta de Xochimilco tiene sentido para residentes de la alcaldía o para quienes están en la zona por otros motivos (turismo, visitas). Si buscas outdoor fitness específicamente — remo, kayak, calistenia junto al canal — ahí sí Xochimilco justifica el viaje porque es la única opción de ese tipo en CDMX.',
      },
      {
        q: '¿Qué actividades físicas al aire libre puedo hacer en Xochimilco?',
        a: 'El Embarcadero Cuemanco tiene instalaciones para remo y kayak. Los canales de la zona chinampera tienen espacios para correr y andar en bicicleta por caminos paralelos al agua. Grupos de tai chi y yoga informal se reúnen en las mañanas en zonas verdes de la alcaldía. La ciclovía dominical de CDMX llega parcialmente a la zona. Para actividad física al aire libre con ambiente natural único, Xochimilco tiene opciones que no existen en ningún otro punto de la ciudad.',
      },
    ],
    stats: [
      { label: 'Estudios fitness', value: '15+' },
      { label: 'Clase suelta', value: '$40–$80 MXN' },
      { label: 'Mensual ilimitado', value: '$250–$700 MXN' },
      { label: 'Disciplinas fuertes', value: 'Zumba · Aeróbicos · Outdoor' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  entrenadores: {
    h1: 'Entrenadores personales en Xochimilco, CDMX – 2026',
    metaDesc: 'Entrenadores personales en Xochimilco, CDMX. Sesiones $150–$500 MXN. PT locales con experiencia en musculación y acondicionamiento físico general.',
    intro: `Xochimilco no tiene el directorio de entrenadores certificados NSCA de Condesa ni los coaches de CrossFit de Benito Juárez. Lo que tiene son entrenadores personales con experiencia práctica en una alcaldía donde el cliente busca resultados concretos a precio accesible — sin tanto rollo de certificaciones en el logo y más trabajo real en el piso.

Como alguien que ha probado a varios PTs y sabe distinguir el que jala del que solo cobra por pararse al lado, te digo lo que busco independientemente del barrio: evaluación inicial de movimiento, programación escrita con progresión de carga, corrección técnica real y honestidad sobre los tiempos. Eso existe en Xochimilco si sabes buscar — y si no existe, no lo compensa ninguna certificación enmarcada en la pared.

Las tarifas de PT en Xochimilco son de las más bajas de CDMX: sesiones entre $150 y $500 MXN para 60 minutos. Ese rango hace accesible la inversión en coaching para quien no tiene presupuesto para los $800-$1,500 MXN por sesión que cobran en Roma Norte o Polanco. Para alguien que recién empieza, un bloque de corrección técnica a ese precio puede ser la diferencia entre años de entrenamiento bien hecho y meses perdidos con patrones incorrectos instalados.

El espacio al aire libre en Xochimilco tiene potencial real para PTs con creatividad — los márgenes de los canales, el Embarcadero Cuemanco y las áreas chinamperas ofrecen contextos de entrenamiento únicos que ningún box de concreto puede replicar. Algunos entrenadores de la zona ya están usando esos espacios para sesiones outdoor con trabajo funcional y circuitos. Eso está chido cuando funciona bien, güey — y en Xochimilco tiene sentido genuino que en Condesa no existe. Para el cuate que busca outdoor con instrucción real, es una propuesta que vale la búsqueda.`,
    queEsperar: [
      {
        titulo: 'Tarifas accesibles para acceso real al coaching',
        descripcion: 'Las sesiones de PT en Xochimilco ($150-$500 MXN) son de las más bajas de CDMX. Eso hace accesible la inversión en corrección técnica y programación para quien no tiene el presupuesto de las zonas premium. El criterio de evaluación es el mismo independientemente del precio: evaluación inicial, programa escrito y corrección técnica real son los indicadores de un buen entrenador.',
      },
      {
        titulo: 'Entrenadores con experiencia práctica de barrio',
        descripcion: 'Los PTs establecidos en Xochimilco tienen años de trabajo con clientes de la alcaldía — conocen bien los objetivos y limitaciones del perfil local. La certificación formal varía, pero la experiencia práctica acumulada tiene valor real. Pide referencias de clientes actuales o pasados antes de contratar — en una comunidad chica como Xochimilco, la reputación circula y es verificable.',
      },
      {
        titulo: 'Sesiones al aire libre en ambiente único',
        descripcion: 'Algunos entrenadores de Xochimilco ofrecen sesiones outdoor aprovechando el espacio natural de la alcaldía — circuitos funcionales junto al canal, trabajo de calistenia en áreas abiertas de la zona chinampera. Para quien disfruta entrenar al aire libre, tener esa opción con instructoría profesional en un ambiente natural único de CDMX tiene valor que el precio por sesión no refleja completamente.',
      },
      {
        titulo: 'Variabilidad de calidad: evalúa antes de contratar',
        descripcion: 'Como en cualquier zona con poca regulación de mercado, la variabilidad de calidad entre PTs de Xochimilco es real. Algunos tienen formación sólida, otros no. El filtro más confiable es la sesión de evaluación inicial: si el entrenador hace valoración de movimiento, pregunta por historial de lesiones y tiene programa escrito, es señal positiva. Si empieza a hacerte trabajar sin revisar cómo te mueves, guárdate el dinero.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Xochimilco?',
        a: 'Las tarifas en Xochimilco van de $150 a $500 MXN por sesión de 60 minutos — algunos de los precios más bajos de CDMX para PT profesional. Los paquetes de 8-10 sesiones suelen tener descuento del 10-15%. Para domicilio o sesiones en espacios al aire libre de la alcaldía, algunos entrenadores no cobran extra. Comparado con los $800-$1,500 MXN por sesión en Condesa o Polanco, la diferencia de precio es enorme aunque la calidad del coaching puede ser similar si eliges bien.',
      },
      {
        q: '¿Cómo encuentro un buen entrenador personal en Xochimilco?',
        a: 'El canal más confiable en una comunidad como Xochimilco es la recomendación directa — pregunta en el gimnasio donde entrenas, a compañeros de clase o en grupos de WhatsApp del barrio. Los entrenadores con más años en la zona tienen reputación verificable en la comunidad. También puedes pedirle al PT que te muestre el programa que diseñaría para tú antes de comprometerte — los buenos lo hacen sin problema. Si tarda más en hablar de sus resultados con fotos que en evaluar tu movimiento, sigue buscando.',
      },
      {
        q: '¿Vale la pena contratar un PT de Xochimilco o ir a uno de otra alcaldía?',
        a: 'Para corrección técnica básica y programación de fuerza general, un buen PT de Xochimilco hace el trabajo al mismo nivel que uno del norte — la barrera de precio hace la inversión más sostenible a largo plazo. Para especialización avanzada — preparación para competencia, periodización de powerlifting, rehabilitación post-quirúrgica — la probabilidad de encontrar ese perfil específico es mayor en Benito Juárez, Cuauhtémoc o Coyoacán. Para el 80% de los objetivos de entrenamiento, el barrio del PT importa menos que la persona específica.',
      },
      {
        q: '¿Hay entrenadores en Xochimilco que hagan sesiones al aire libre?',
        a: 'Sí — algunos entrenadores de la alcaldía han desarrollado propuestas de entrenamiento outdoor aprovechando el espacio natural único de Xochimilco. El Embarcadero Cuemanco y las áreas abiertas de la zona chinampera son el escenario. Para encontrarlos, pregunta en los gimnasios locales o en grupos de fitness de la alcaldía en redes sociales. El entrenamiento al aire libre en Xochimilco tiene un contexto que no existe en ningún otro punto de CDMX — para quien lo disfruta, vale la búsqueda.',
      },
    ],
    stats: [
      { label: 'Sesión individual', value: '$150–$500 MXN' },
      { label: 'Outdoor', value: 'Cuemanco · Canales' },
      { label: 'Domicilio', value: 'Disponible' },
      { label: 'Modalidades', value: 'Gym · outdoor · domicilio' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  eventos: {
    h1: 'Eventos fitness en Xochimilco, CDMX – Trajineras y deporte 2026',
    metaDesc: 'Eventos fitness en Xochimilco CDMX 2026: carreras por canales, kayak en chinampas, deporte comunitario. Agenda deportiva única en zona Patrimonio UNESCO.',
    intro: `Xochimilco tiene el mejor argumento de eventos deportivos únicos de CDMX — y ningún otro barrio de la ciudad puede decir lo mismo. Las carreras por los márgenes de los canales, el kayak y remo en la zona chinampera, los torneos acuáticos y las actividades deportivas en el Embarcadero Cuemanco son eventos que solo existen acá. No es el calendario de competencias CrossFit de Benito Juárez ni los 10K de Polanco, pero es algo diferente que tiene valor propio.

La Carrera por los Canales de Xochimilco — cuando se organiza — es uno de los recorridos más pintorescos de CDMX: corredores por caminos junto al agua, con las chinampas al fondo y el ambiente lacustre que en ningún otro lugar de la capital existe. No siempre tiene organización de nivel con chip cronometraje y finisher medal, pero la experiencia es genuina, cuate. Para corredor que quiere algo distinto a la Insurgentes o la Reforma, acá está.

Las actividades acuáticas tienen su propio calendario: torneos de kayak, jornadas de remo en canoa y actividades físicas en el agua que aprovechan la infraestructura única de la alcaldía. El Embarcadero Cuemanco tiene instalaciones deportivas acuáticas que se usaron para los Juegos Olímpicos de México '68 y siguen funcionando como centro de remo y canotaje — eso no lo tienes en ningún otro punto de la ciudad.

Los eventos deportivos comunitarios — torneos barriales, jornadas de activación física del gobierno local, fiestas deportivas ligadas a las festividades del pueblo — tienen calendario regular aunque no siempre está bien documentado en internet. La información circula en la comunidad local, en las delegaciones y en las redes de la alcaldía. Si vives acá o vienes seguido, vale la chamba de buscarla. La agenda de Xochimilco tiene más movimiento del que parece desde afuera.`,
    queEsperar: [
      {
        titulo: 'Carreras y running junto a los canales',
        descripcion: 'Las vías paralelas a los canales de Xochimilco son usadas por grupos de running locales para entrenamientos y ocasionalmente para eventos organizados. El ambiente lacustre y chinampero hace de estos recorridos algo genuinamente único en CDMX. Para grupos de running que buscan salir de la rutina de la Reforma o el Bosque de Chapultepec, las rutas de Xochimilco son una experiencia diferente.',
      },
      {
        titulo: 'Kayak y remo en infraestructura olímpica',
        descripcion: 'El Embarcadero Cuemanco tiene instalaciones de remo y canotaje que datan de los Juegos Olímpicos de 1968. El canal artificial usado en esa edición sigue operando como instalación deportiva. Para kayak, remo en canoa y canotaje, Xochimilco tiene la mejor infraestructura de CDMX — y acceder a ella es considerablemente más fácil que ir a instalaciones fuera de la ciudad.',
      },
      {
        titulo: 'Festividades deportivas con raíz cultural',
        descripcion: 'Xochimilco tiene eventos deportivos ligados a las festividades del pueblo — carreras locales en fechas de celebración, torneos de fútbol barrial y actividades deportivas durante la Feria de las Flores y otras celebraciones locales. Son eventos con identidad cultural real que no existen en versión comercial boutique. Para quien valora la experiencia auténtica sobre el evento con branding premium, acá está.',
      },
      {
        titulo: 'Ciclismo por rutas chinamperas',
        descripcion: 'Los caminos de la zona chinampera y los márgenes de los canales tienen rutas de ciclismo que grupos locales ya están usando. El ambiente es distinto a cualquier otra ruta de CDMX — sin el tráfico de la ciudad, con agua a los lados y vegetación densa. La Ciclovía de CDMX llega parcialmente a la zona. Para ciclistas que buscan rutas con paisaje natural dentro de la ciudad, Xochimilco tiene opciones únicas.',
      },
    ],
    faq: [
      {
        q: '¿Hay carreras organizadas con chip cronometraje en Xochimilco?',
        a: 'Las carreras con organización formal de alto nivel son esporádicas en Xochimilco — la alcaldía no tiene el circuito de eventos running que encuentras en Polanco o el Bosque de Chapultepec. Lo que sí hay son grupos locales de running con salidas regulares y ocasionalmente organizan eventos internos con recorrido fijo. Para carreras 5K o 10K con chip oficial, las alternativas más cercanas están en Tlalpan o Coyoacán. Desde Xochimilco el traslado es factible.',
      },
      {
        q: '¿Cómo accedo al remo y kayak en el Embarcadero Cuemanco?',
        a: 'El Embarcadero Cuemanco en Xochimilco tiene acceso para remo y kayak. Las instalaciones tienen horarios de uso y tarifas de acceso que varían según la actividad y la modalidad (individual, grupo, clases). Para información actualizada sobre horarios y costos, es necesario consultar directamente con las instalaciones — el acceso y las tarifas cambian por temporada. El Cuemanco también tiene zona para espectadores cuando hay eventos deportivos oficiales.',
      },
      {
        q: '¿Puedo hacer ciclismo por las chinampas de Xochimilco?',
        a: 'Sí — hay rutas de ciclismo por los caminos paralelos a los canales y por las vías de acceso a la zona chinampera. No son rutas pavimentadas de alto rendimiento sino caminos de tierra y concreto con ambiente natural. Para ciclismo de montaña o gravel, las condiciones son interesantes. Para ciclismo de ruta con pavimento uniforme, las condiciones no son las ideales. Grupos locales de ciclismo ya recorren estas rutas regularmente — buscalos en redes sociales de la alcaldía.',
      },
      {
        q: '¿Cómo me entero de los eventos deportivos en Xochimilco?',
        a: 'El gobierno de la Alcaldía Xochimilco tiene redes sociales donde publica el calendario de eventos deportivos y culturales. La Delegación local y las redes vecinales del barrio son los canales más confiables para eventos comunitarios. Para eventos acuáticos en el Cuemanco, la Federación Mexicana de Canotaje publica el calendario de competencias oficiales. Para grupos de running y ciclismo locales, buscalos directamente en Facebook o WhatsApp de grupos de la alcaldía.',
      },
    ],
    stats: [
      { label: 'Carrera chinampera', value: 'Ruta única en CDMX' },
      { label: 'Cuemanco', value: 'Instalaciones olímpicas 1968' },
      { label: 'Ciclismo outdoor', value: 'Rutas por canales' },
      { label: 'Festividades deportivas', value: 'Año completo' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  bienestar: {
    h1: 'Bienestar y recuperación en Xochimilco, CDMX – 2026',
    metaDesc: 'Bienestar en Xochimilco, CDMX: fisioterapia, masajes y medicina tradicional. Precios $150–$600 MXN/sesión. Zona chinampera con opciones de bienestar naturales.',
    intro: `Xochimilco tiene algo en materia de bienestar que ninguna alcaldía del norte de CDMX puede igualar: la medicina tradicional y las prácticas con raíz prehispánica tienen presencia real en la comunidad. Temazcal, masajes con plantas medicinales de las chinampas, terapias de herbolaria local — eso existe acá con una autenticidad que los centros wellness boutique de Polanco intentan replicar a precios de cinco cifras sin conseguirlo.

La oferta de fisioterapia y bienestar deportivo convencional en Xochimilco es más limitada que en el centro o el norte de la ciudad. Hay fisioterapeutas con consultorios en el pueblo de Xochimilco y zonas aledañas, con experiencia en lesiones musculoesqueléticas generales. Para rehabilitación deportiva avanzada o bienestar de alto rendimiento, las instalaciones especializadas están en Coyoacán, Benito Juárez o más al norte — hay que ser claros con eso.

El precio de servicios de bienestar en Xochimilco es accesible: fisioterapia entre $150 y $400 MXN por sesión, masaje terapéutico entre $150 y $500 MXN. El temazcal tradicional de la zona puede costar entre $200 y $600 MXN por persona en grupos. Esos rangos hacen sostenible la recuperación regular para el atleta recreativo de la alcaldía que no tiene presupuesto de spa boutique.

La conexión entre el ambiente natural de Xochimilco y el bienestar es real, cuate — hay algo genuinamente reparador en estar junto al agua y la vegetación densa de las chinampas. Algunos estudios de yoga y meditación de la zona aprovechan ese entorno para sesiones al aire libre que tienen una calidad de ambiente que ningún estudio de concreto en Roma Norte puede replicar. Para quien integra recuperación, cultura y naturaleza, Xochimilco tiene una propuesta de bienestar que está chida y es única en la ciudad. Eso no tiene precio de mercado — y esa es exactamente su fortaleza.`,
    queEsperar: [
      {
        titulo: 'Medicina tradicional y temazcal auténtico',
        descripcion: 'Xochimilco tiene temazcales de práctica tradicional con raíz cultural real — no el spa de hotel con nombre nahuatl. Algunos operan en contextos comunitarios con hierbas medicinales de las propias chinampas. Para recuperación, detoxificación y trabajo de respiración, el temazcal tradicional de Xochimilco tiene una autenticidad que los centros wellness del norte de la ciudad no consiguen. Precio: $200-$600 MXN por persona en grupos.',
      },
      {
        titulo: 'Fisioterapia accesible para lesiones del entrenamiento',
        descripcion: 'Los fisioterapeutas de Xochimilco tienen experiencia en lesiones musculoesqueléticas comunes: lumbalgias, tendinitis, cervicalgias. El precio por sesión ($150-$400 MXN) hace sostenible la atención preventiva regular. Para rehabilitación deportiva avanzada — post-cirugía, evaluación biomecánica de levantamiento olímpico — el nivel de especialización específica está en otras alcaldías.',
      },
      {
        titulo: 'Masaje terapéutico con plantas de la zona',
        descripcion: 'Algunos terapeutas de Xochimilco integran plantas medicinales locales en sus tratamientos de masaje — hierbas de las chinampas con propiedades antiinflamatorias y relajantes. Para trabajo de recuperación muscular con identidad cultural local, esa integración tiene algo que el masaje deportivo convencional no da. Los precios van de $150 a $500 MXN por sesión.',
      },
      {
        titulo: 'Yoga y meditación en entorno natural',
        descripcion: 'Hay grupos y estudios en Xochimilco que hacen sesiones de yoga y meditación al aire libre, aprovechando el entorno de canales y vegetación densa. El ambiente hace de esas prácticas algo cualitativamente diferente a una sala cerrada de concreto. Para quien practica yoga o meditación como parte del bienestar general, las opciones outdoor de Xochimilco tienen un valor difícil de monetizar.',
      },
    ],
    faq: [
      {
        q: '¿Hay temazcales tradicionales en Xochimilco?',
        a: 'Sí — Xochimilco tiene temazcales con práctica tradicional, algunos en contextos comunitarios con herbolaria de las chinampas. El precio varía: grupos pequeños pueden costar entre $200 y $600 MXN por persona. Para experiencias más turísticas o con mayor estructura, los precios pueden ser más altos. Para encontrar temazcales auténticos, pregunta en la comunidad local o con personas de la alcaldía — los mejores no siempre están en Google Maps.',
      },
      {
        q: '¿Cuánto cuesta la fisioterapia en Xochimilco?',
        a: 'Las sesiones de fisioterapia en Xochimilco van de $150 a $400 MXN por sesión de 45-60 minutos — significativamente menos que en Condesa, Polanco o Benito Juárez. Paquetes de 6-10 sesiones tienen descuento habitual. Para lesiones musculoesqueléticas comunes y atención preventiva regular, los fisioterapeutas de la zona cubren bien la necesidad. Para evaluación biomecánica avanzada de deporte de rendimiento, la especialización específica puede no estar en Xochimilco.',
      },
      {
        q: '¿Hay opciones de yoga al aire libre en Xochimilco?',
        a: 'Sí — hay grupos de yoga informal y algunos estudios que aprovechan los espacios naturales de la alcaldía para sesiones al aire libre. El ambiente de los canales y las chinampas hace de esas sesiones algo cualitativamente distinto al yoga en sala cerrada. Para encontrar estos grupos, las redes sociales locales y los tablones de la comunidad son los canales más confiables. Algunos operan de forma informal y no tienen presencia online establecida.',
      },
      {
        q: '¿Qué bienestar no voy a encontrar en Xochimilco?',
        a: 'Centros de crioterapia, presoterapia tecnológica, nutricionistas especializados en alto rendimiento deportivo, fisioterapeutas con equipamiento de electroterapia avanzada — eso no está en Xochimilco. Para bienestar de alto nivel tecnológico, Condesa, Polanco y Benito Juárez tienen la oferta. Lo que Xochimilco tiene y esos barrios no tienen es autenticidad cultural: temazcal real, herbolaria tradicional y entorno natural único. Para el atleta que integra recuperación y bienestar cultural, es una combinación que no existe en otro punto de CDMX.',
      },
    ],
    stats: [
      { label: 'Fisioterapia sesión', value: '$150–$400 MXN' },
      { label: 'Masaje terapéutico', value: '$150–$500 MXN' },
      { label: 'Temazcal tradicional', value: '$200–$600 MXN/persona' },
      { label: 'Yoga outdoor', value: 'Disponible' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,
}
