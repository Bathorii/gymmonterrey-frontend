// src/data/cdmx/localidad-tlalpan.ts

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

const vecinos = getVecinos('tlalpan')

const categoriaLinks: CatLink[] = [
  { slug: 'gimnasios', label: '🏋️ Gimnasios (112)' },
  { slug: 'estudios', label: '🧘 Estudios' },
  { slug: 'entrenadores', label: '🚶 Entrenadores' },
  { slug: 'eventos', label: '📅 Eventos' },
  { slug: 'bienestar', label: '🌿 Bienestar' },
]

export const localidadContent = {
  nombre: 'Tlalpan',
  slug: 'tlalpan',
  lastReviewed: '2026-06-03',

  sobreBarrio: `Tlalpan es la alcaldía más verde de toda la Ciudad de México y eso tiene consecuencias reales para quien entrena. El Bosque de Tlalpan es uno de los ecosistemas de trail running más accesibles de la CDMX — a 30 minutos del centro hay senderos serios con desnivel real y comunidades de atletas que llevan años corriendo esos caminos. Algo que Cuauhtémoc o Benito Juárez no pueden ofrecer.

La alcaldía es heterogénea, cuate. El Pueblo de Tlalpan tiene arquitectura colonial, plazas y vida de barrio que contrasta con las zonas residenciales modernas. En fitness, esa heterogeneidad se traduce en oferta variada: desde gimnasios de barrio en el pueblo hasta centros más completos en zonas de mayor densidad.

El Periférico Sur es el eje de acceso — pero también el problema de movilidad en horas pico. Los precios van de $500 a $1,800 MXN al mes, más accesibles que el norte de la ciudad. Si el trail y la naturaleza son parte de tu práctica, Tlalpan es difícil de superar en la CDMX.`,

  gimnasios: {
    h1: 'Gimnasios en Tlalpan, CDMX — 112 opciones desde $500 MXN 2026',
    metaDesc: 'Gimnasios en Tlalpan, CDMX: 112 opciones. Precios $500–$1,800 MXN/mes. La alcaldía más verde de la ciudad. Bosque de Tlalpan. Rodrigo recomienda 2026.',
    intro: `Tlalpan tiene 112 gimnasios y el contexto importa para entender qué esperar. Esta alcaldía es la más extensa de la CDMX en territorio y también la más heterogénea — tienes zonas de pueblo histórico con gimnasios de barrio tradicional y zonas residenciales modernas con opciones más equipadas. El rango de $500 a $1,800 MXN al mes refleja esa diversidad.

Lo que hace a Tlalpan diferente de cualquier otra alcaldía de la CDMX es el Bosque de Tlalpan: 1,508 hectáreas de bosque de pino y encino a la que puedes llegar en transporte público. Para un atleta que combina gimnasio con trabajo outdoor, eso cambia el cálculo completamente. Muchos de los gymers de Tlalpan dividen su entrenamiento: hierro en el gimnasio, senderos en el bosque. Esa combinación no existe en Polanco o Cuauhtémoc.

La zona del Pueblo de Tlalpan tiene gimnasios independientes de mediana escala — sin el diseño de los boutiques de Roma Norte o Condesa, pero con equipamiento funcional y precios honestos. Los gimnasios del sector más moderno, cerca de las colonias de acceso por Periférico Sur, tienen instalaciones más grandes y en algunos casos clases grupales estructuradas.

Las cadenas tienen presencia en la alcaldía — Smart Fit y algunos formatos similares han llegado en los últimos años siguiendo el crecimiento residencial. Para quien solo necesita cardio y zona de máquinas, son una opción. Para quien busca zona de peso libre seria con cultura de fuerza, los independientes del sector siguen siendo la mejor apuesta.

Un dato importante para quien viene de zonas norte de la CDMX: el tráfico en el Periférico Sur en hora pico es serio. Si vas en coche, considera horarios de 7am o después de las 9pm. En semana santa y puentes, la salida del DF por la zona de Tlalpan puede ser catastrófica. El transporte público funciona — Metro Línea 2 (Tasqueña) + Metrobús o tren ligero te dejan en zonas del sector, aunque con tiempos de viaje de 30-50 minutos desde el centro.`,
    queEsperar: [
      {
        titulo: 'Precios accesibles para la CDMX',
        descripcion: 'El rango de $500–$1,800 MXN al mes posiciona a Tlalpan en la franja media-baja de precios de la CDMX. Eso es entre 30-50% menos que Roma Norte o Polanco para instalaciones comparables. Los gimnasios del pueblo histórico tienden al rango bajo, los más modernos al rango alto. Pregunta por el contrato mínimo — algunos piden 3 o 6 meses de compromiso.',
      },
      {
        titulo: 'Equipamiento funcional sin pretensiones',
        descripcion: 'Los gimnasios independientes de Tlalpan tienen lo que se necesita para entrenar bien: zona de pesas libre, mancuernas hasta 40kg en la mayoría, barras olímpicas, cardio básico y zona de máquinas funcional. No el diseño premium de los boutiques de Condesa, pero sí equipamiento que cumple. Visita antes de inscribirte — el estado del material dice más que cualquier foto en redes.',
      },
      {
        titulo: 'Acceso a Bosque de Tlalpan como complemento',
        descripcion: 'El Bosque de Tlalpan tiene senderos de trail running con desnivel real — desde recorridos de 5km para principiantes hasta rutas de 20km para atletas experimentados. La entrada es gratuita. Varios gimnasios de la zona tienen clientes que integran el bosque como parte de su programa de cardio semanal. Esta combinación gym + bosque es exclusiva de Tlalpan en la CDMX.',
      },
      {
        titulo: 'Heterogeneidad de oferta en la alcaldía',
        descripcion: 'No todas las zonas de Tlalpan son iguales. El Pueblo de Tlalpan tiene una escala más pequeña y gimnasios de barrio tradicional. Las colonias residenciales modernas tienen opciones más grandes y en algunos casos con clases grupales. Define primero en qué zona de la alcaldía estás o tienes acceso, y busca opciones en ese radio.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Tlalpan en 2026?',
        a: 'El rango en Tlalpan va de $500 MXN al mes en opciones básicas hasta $1,800 en los centros más completos. La mayoría de gimnasios bien equipados de la zona cobra entre $700 y $1,200 MXN. Algunos cobran inscripción adicional de $200-$500 MXN. Comparado con Roma Norte o Polanco, estás ahorrando entre el 30% y el 50% para instalaciones con equipamiento similar. Pregunta si el precio incluye clases grupales o solo acceso a área general.',
      },
      {
        q: '¿Cómo llego a los gimnasios de Tlalpan en transporte público?',
        a: 'Desde el centro de la CDMX, la ruta más directa es Metro Línea 2 hasta Tasqueña, y de ahí Metrobús Línea 1 hacia el sur o tren ligero según la zona específica de la alcaldía. El tiempo de viaje desde el centro puede ser 40-60 minutos. Para zonas más internas de la alcaldía, el microbús desde Tasqueña completa el recorrido. En auto por Periférico Sur, evita el horario pico de 7-9am y 6-8pm si puedes.',
      },
      {
        q: '¿El Bosque de Tlalpan tiene acceso abierto para entrenar?',
        a: 'Sí, el Bosque de Tlalpan es de acceso gratuito y público. Tiene varios accesos — la entrada principal está en la Calzada del Hueso. Los senderos están marcados y hay zonas habilitadas para picnic y actividad al aire libre. Para trail running, hay rutas de distintos niveles de dificultad. El bosque cierra al atardecer. En fin de semana es más concurrido pero siempre hay espacio. Lleva agua suficiente — no hay puestos en todos los senderos.',
      },
      {
        q: '¿Hay opciones de CrossFit o entrenamiento funcional en Tlalpan?',
        a: 'La oferta de CrossFit afiliado en Tlalpan es limitada comparada con Cuauhtémoc o Benito Juárez. Hay estudios de entrenamiento funcional con metodología similar al CrossFit — AMRAP, EMOM, trabajo con barras — sin la afiliación oficial. Para CrossFit metodológico con comunidad establecida, quizás valga la pena evaluar cajas en colonias más centrales y calcular si el desplazamiento vale la diferencia de precio. Para entrenamiento funcional de alta intensidad sin el branding, Tlalpan tiene opciones reales a buen precio.',
      },
    ],
    stats: [
      { label: 'Gimnasios registrados', value: '112' },
      { label: 'Precio mensual', value: '$500–$1,800 MXN' },
      { label: 'Bosque de Tlalpan', value: '1,508 ha · gratis' },
      { label: 'Acceso Metro', value: 'Tasqueña L2 + Metrobús' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  estudios: {
    h1: 'Estudios fitness en Tlalpan, CDMX — CrossFit, Yoga y Trail Running 2026',
    metaDesc: 'Estudios fitness en Tlalpan: yoga, funcional y trail. Bosque de Tlalpan. Clase desde $80 MXN. Alcaldía más verde de CDMX. Rodrigo recomienda 2026.',
    intro: `Tlalpan tiene una oferta de estudios fitness interesante precisamente por su heterogeneidad. No es la concentración de boxes CrossFit de Cuauhtémoc ni los mega-estudios de pilates de Polanco — es una mezcla de estudios independientes con identidad local, escuelas de artes marciales con décadas de historia en el pueblo, y una cultura outdoor que hace que el Bosque de Tlalpan funcione como el "estudio" más grande de la alcaldía.

Los estudios de yoga en Tlalpan tienen una orientación diferente a los de Condesa o Roma Norte. Acá el yoga tiene más conexión con tradición y práctica seria que con la estética de lifestyle. Hay estudios con maestros que llevan 20+ años de práctica, formación en India o México Tradicional, y una comunidad que practica consistentemente sin el componente de rendimiento social de las zonas norte. Neta que eso vale más para quien busca práctica real.

El entrenamiento funcional y el CrossFit metodológico tienen presencia en la alcaldía aunque con menor densidad que en Cuauhtémoc. Los estudios que existen suelen ser más pequeños — grupos de 8-15 personas por clase, con coaches que conocen a sus atletas. Eso tiene ventajas reales para el desarrollo técnico y la personalización del entrenamiento.

El Bosque de Tlalpan como complemento outdoor es el diferenciador que ningún estudio puede replicar. Grupos de trail running organizados que salen del bosque los sábados y domingos a las 7am — gratuitos, de todos los niveles, con conocedores de los senderos. Esa es la comunidad fitness más auténtica y más económica de Tlalpan.

Las clases en estudios del sector están en un rango de $80 a $500 MXN por sesión dependiendo de la disciplina y el estudio. Considerablemente menos que las mismas disciplinas en zonas prime de la CDMX.`,
    queEsperar: [
      {
        titulo: 'Yoga con práctica seria y tradición',
        descripcion: 'Tlalpan tiene estudios de yoga con historia larga — maestros con formación real, sin la superficialidad del yoga-lifestyle de redes sociales. El entorno del pueblo histórico y la naturaleza de la alcaldía crean un contexto que favorece la práctica contemplativa. Para quien busca yoga como disciplina y no como sesión de fotos, Tlalpan tiene opciones auténticas.',
      },
      {
        titulo: 'Funcional e intensidad sin branding',
        descripcion: 'Los estudios de entrenamiento funcional de Tlalpan trabajan con metodologías de alta intensidad sin el envoltorio de marca de los boxes premium. Grupos más pequeños, precios más accesibles y coaches con experiencia real en los movimientos. Para quien quiere el entrenamiento sin pagar la marca, estos estudios son una opción inteligente.',
      },
      {
        titulo: 'Grupos de trail running en el Bosque de Tlalpan',
        descripcion: 'La comunidad de trail running del Bosque de Tlalpan es de las más activas de la CDMX. Grupos organizados salen los fines de semana desde distintos accesos al bosque — algunos son gratuitos, otros tienen una cuota mínima de $50-100 MXN para pagar al guía. Las rutas van de 5 a 25km con desniveles que van de moderados a exigentes. Esta es la propuesta fitness más única de la alcaldía.',
      },
      {
        titulo: 'Artes marciales con escuelas tradicionales',
        descripcion: 'El Pueblo de Tlalpan tiene escuelas de artes marciales con décadas de funcionamiento — karate, judo, kung-fu y artes marciales mixtas con raíces en comunidades locales. Para quien busca entrenamiento marcial con tradición real y no el MMA-fitness de moda, estas escuelas tienen valor específico. Las cuotas suelen ser más bajas que los estudios modernos de MMA de zonas norte.',
      },
    ],
    faq: [
      {
        q: '¿Hay boxes de CrossFit afiliados en Tlalpan, CDMX?',
        a: 'La densidad de CrossFit afiliado en Tlalpan es menor que en Cuauhtémoc o Benito Juárez. Hay estudios de entrenamiento funcional con metodología similar — algunos con afiliación, otros independientes. Para verificar boxes afiliados en la zona, el mapa oficial de CrossFit es la fuente más confiable. Si el CrossFit con afiliación oficial es prioritario y no encuentras opción en Tlalpan, evalúa el tiempo de desplazamiento a una caja de Cuauhtémoc antes de decidir.',
      },
      {
        q: '¿Cómo se accede al Bosque de Tlalpan para entrenar?',
        a: 'El Bosque de Tlalpan tiene varios accesos — el principal está en la Calzada del Hueso. Desde Tasqueña el microbús hacia San Buenaventura o Ajusco te lleva cerca. En auto, hay estacionamiento en algunos accesos. El bosque abre al amanecer y cierra al atardecer — para trail running matutino, llegar antes de las 7am da más tiempo de sesión sin el flujo de visitantes del fin de semana. Descarga un mapa offline de los senderos antes de entrar.',
      },
      {
        q: '¿Cuánto cuesta una clase de yoga en Tlalpan?',
        a: 'Los estudios de yoga en Tlalpan tienen clases sueltas entre $80 y $250 MXN, y paquetes mensuales de $600-$1,500 MXN. Eso es entre 30-50% menos que los estudios de yoga de Condesa o Polanco. La calidad varía — algunos estudios tienen instructores con formación seria en tradición específica, otros son más orientados al bienestar general. Pide información sobre la formación del instructor antes de comprometerte a un paquete.',
      },
      {
        q: '¿Tlalpan tiene opciones de pilates Reformer?',
        a: 'La oferta de pilates Reformer en Tlalpan es limitada — hay estudios con equipos básicos, pero la concentración de Reformer de marcas reconocidas con instructoras certificadas está más en Coyoacán, Cuauhtémoc o Polanco. Si el pilates Reformer es tu práctica principal, evalúa si el desplazamiento a otra alcaldía tiene sentido comparado con las opciones disponibles en Tlalpan. Para pilates de piso básico, la oferta local es más completa.',
      },
    ],
    stats: [
      { label: 'Estudios fitness', value: '25+' },
      { label: 'Clase suelta', value: '$80–$500 MXN' },
      { label: 'Outdoor', value: 'Bosque 1,508 ha' },
      { label: 'Disciplinas', value: 'Trail · Yoga · Marciales' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  entrenadores: {
    h1: 'Entrenadores personales en Tlalpan, CDMX — PT certificados 2026',
    metaDesc: 'Entrenadores personales en Tlalpan, CDMX. PT certificados desde $300 MXN/sesión. Trail running, funcional y fuerza en la alcaldía más verde de la ciudad.',
    intro: `Tlalpan tiene entrenadores personales que reflejan la identidad de la alcaldía: profesionales con experiencia en entrenamiento outdoor, trail running y resistencia, además de los servicios tradicionales de fuerza, funcional e hipertrofia. Eso es un diferenciador real en la CDMX — no muchas alcaldías tienen entrenadores que conozcan el Bosque de Tlalpan como sala de entrenamiento.

Los entrenadores personales de Tlalpan trabajan en los gimnasios de la alcaldía, al aire libre en el bosque y los parques del sector, y a domicilio en las colonias residenciales. El rango de precios va de $300 a $900 MXN por sesión — significativamente más accesible que los PTs de Polanco o Cuauhtémoc con certificaciones similares.

Para mí, que hago box además del CrossFit, el valor de un entrenador no está en el lugar donde trabaja sino en si entiende la periodización y tiene criterio real para ajustar la carga. En Tlalpan hay entrenadores con eso, especialmente en el sector de trail y resistencia donde el nivel técnico de los coaches es genuinamente alto — llevan años guiando atletas en los senderos del bosque y eso se nota.

El perfil del cliente de los PTs de Tlalpan incluye residentes del pueblo histórico de todas las edades, familias en colonias residenciales y atletas de resistencia que usan el bosque como base de entrenamiento. Esa diversidad exige entrenadores con rango técnico amplio.

Si buscas un entrenador especializado en trail running o preparación para carreras de montaña en la CDMX, Tlalpan es probablemente la mejor alcaldía donde buscarlo. La comunidad de trail de la zona tiene coaches con experiencia real en ese tipo de preparación — algo que en Roma Norte o Condesa es mucho más difícil de encontrar.`,
    queEsperar: [
      {
        titulo: 'Especialistas en trail running y outdoor',
        descripcion: 'La comunidad de trail running de Tlalpan ha generado entrenadores con experiencia real en preparación para carreras de montaña, gestión de desnivel y entrenamiento en altitud (la alcaldía tiene zonas por encima de 2,500 metros). Para preparación de Ultra-Trail, Maratón de Montaña o mejora en running técnico, los coaches de Tlalpan tienen conocimiento específico del terreno local.',
      },
      {
        titulo: 'Entrenadores con tarifas accesibles para la CDMX',
        descripcion: 'El rango de $300 a $900 MXN por sesión de 60 minutos es entre 30-50% más accesible que los PTs de Polanco o Cuauhtémoc con formación equivalente. Para entrenamiento al aire libre en el bosque, algunos coaches trabajan con grupos pequeños de 3-5 personas a tarifas por persona más bajas que la sesión individual. Pregunta si tienen opciones de entrenamiento grupal reducido.',
      },
      {
        titulo: 'Domicilio disponible en colonias residenciales',
        descripcion: 'Las colonias residenciales de Tlalpan tienen espacio para entrenamiento a domicilio — jardines, áreas comunes de conjuntos residenciales, parques de colonia. Varios PTs de la zona trabajan con equipo portátil para sesiones en el hogar. Para familias con niños o personas con movilidad limitada, esta modalidad tiene sentido logístico real en una alcaldía tan extensa.',
      },
      {
        titulo: 'Experiencia multi-disciplinaria',
        descripcion: 'Los entrenadores de Tlalpan tienden a tener competencia en múltiples disciplinas — fuerza, resistencia, movilidad y trabajo outdoor. Eso es resultado de trabajar con una clientela diversa en una alcaldía con acceso a recursos de entrenamiento muy distintos. Para alguien que quiere un enfoque integral que combine gym y outdoor, este perfil de entrenador es más fácil de encontrar acá que en alcaldías más urbanizadas.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Tlalpan?',
        a: 'Las tarifas en Tlalpan van de $300 a $900 MXN por sesión de 60 minutos. Para entrenamiento al aire libre en el bosque, hay opciones de grupos reducidos de 3-5 personas que bajan el costo por persona a $150-$300 MXN por sesión. Comparado con Polanco o Cuauhtémoc, el mismo nivel de formación en Tlalpan cuesta entre 30% y 50% menos. Paquetes de 10 sesiones suelen tener descuento del 10-15%.',
      },
      {
        q: '¿Cómo encuentro un entrenador de trail running en Tlalpan?',
        a: 'La comunidad de trail de Tlalpan es activa en redes sociales — busca grupos de trail running CDMX en Facebook e Instagram donde hay coaches de la zona activos. Los accesos al Bosque de Tlalpan los fines de semana son puntos de encuentro donde puedes conocer a entrenadores locales. Las tiendas de running en la zona también suelen tener referencias de coaches del sector. La conexión personal en la comunidad es la mejor manera de encontrar al coach adecuado.',
      },
      {
        q: '¿Qué certificaciones debo buscar en un entrenador personal en México?',
        a: 'Las certificaciones más reconocidas en México son: Entrenador Deportivo o Licenciatura en Educación Física con reconocimiento SEP, CONADE o de universidades como UNAM, IPN o UIA. Para certificaciones internacionales: NSCA-CPT, NASM, ACE o ISSA. Para trail running específicamente, certificaciones de organizaciones como ITRA o UTAT tienen peso en la comunidad. Pide ver el certificado — un buen entrenador lo muestra sin que se lo pidas.',
      },
      {
        q: '¿Vale la pena contratar un PT para el bosque o puedo entrenar solo ahí?',
        a: 'El bosque se puede usar solo perfectamente — los senderos están marcados y la comunidad outdoor es amigable y orientadora. La diferencia de un coach en el bosque está en la periodización: dosificación del desnivel, gestión de la fatiga, progresión de distancia y preparación para objetivos específicos como carreras. Para alguien que ya tiene experiencia en trail, el coach puede ser útil en ciclos específicos de preparación. Para principiantes en trail, un guía en las primeras salidas hace diferencia real en técnica de bajada y manejo de energía.',
      },
    ],
    stats: [
      { label: 'Entrenadores estimados', value: '50+' },
      { label: 'Sesión individual', value: '$300–$900 MXN' },
      { label: 'Especialidad local', value: 'Trail running' },
      { label: 'Modalidades', value: 'Gym · bosque · domicilio' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  eventos: {
    h1: 'Eventos fitness en Tlalpan, CDMX — Trail Running y Competencias 2026',
    metaDesc: 'Eventos fitness en Tlalpan 2026: trail en Bosque de Tlalpan, Ultra Picacho-Ajusco y competencias funcionales. CDMX más verde. Rodrigo recomienda.',
    intro: `Tlalpan tiene la agenda de eventos outdoor más rica de la CDMX, cuate, y no hay comparación posible con las alcaldías del centro. El Bosque de Tlalpan y las zonas del Ajusco son el escenario de algunas de las carreras de trail y montaña más importantes del calendario capitalino. Para un atleta de resistencia, la agenda de eventos de Tlalpan tiene más valor que cualquier otra alcaldía de la ciudad.

Las carreras de trail en la zona del Bosque de Tlalpan se organizan con regularidad — desde carreras de 5km aptas para familias hasta ultra-distancias por los cerros del Ajusco. La Ultramaratón Picacho-Ajusco es uno de los eventos de montaña más reconocidos del calendario CDMX — rutas de 25, 50 y 100km con desniveles que ponen a prueba incluso a atletas experimentados. La inscripción se llena meses antes.

El Pueblo de Tlalpan como escenario de eventos también tiene su historia: carreras populares por las calles del centro histórico del pueblo, eventos ciclistas por Periférico Sur y actividades comunitarias organizadas por la alcaldía. Son eventos de menor escala que los de trail pero con la autenticidad del entorno del pueblo histórico.

Para eventos de fitness funcional y CrossFit, la presencia de Tlalpan es más limitada — los grandes torneos se siguen organizando en Cuauhtémoc y Benito Juárez. Pero los eventos inter-box y las competencias locales de los estudios de la alcaldía tienen un formato más accesible para quienes están empezando en la competencia.

El dato que nadie menciona: correr en Tlalpan implica altitud real — estamos hablando de 2,300 a 3,600 metros sobre el nivel del mar dependiendo de la zona del bosque. Eso es entrenamiento en altura natural. Los atletas que se preparan aquí bajan al centro de la ciudad a competir con ventaja aeróbica real.`,
    queEsperar: [
      {
        titulo: 'Carreras de trail en el Bosque de Tlalpan',
        descripcion: 'El Bosque de Tlalpan concentra varias carreras anuales de trail running de distinto formato — 5km, 10km, media maratón de montaña y ultra-distancias. Son eventos bien organizados con marcaje de ruta, control de tiempo y categorías por edad y nivel. La comunidad de trail de la zona tiene una cultura de seguridad bien establecida — los organizadores conocen los senderos y la gestión de riesgos.',
      },
      {
        titulo: 'Ultramaratón Picacho-Ajusco',
        descripcion: 'Uno de los eventos de montaña más respetados del calendario CDMX. Rutas por el volcán Ajusco con desnivel acumulado significativo — el formato de 50km tiene más de 3,000m de desnivel positivo. La inscripción se agota con meses de anticipación. Para participar en las distancias largas se exige historial de carreras previas. Para quien lleva años entrenando trail en Tlalpan, es el evento local de referencia.',
      },
      {
        titulo: 'Eventos comunitarios en el Pueblo de Tlalpan',
        descripcion: 'El Pueblo de Tlalpan organiza carreras populares y eventos ciclistas con regularidad — de menor escala pero con la autenticidad del entorno histórico. La Alcaldía también organiza festivales de activación física y deporte comunitario con actividades gratuitas o de bajo costo. Son eventos más accesibles para familias y atletas recreativos que no buscan la competencia de alto rendimiento.',
      },
      {
        titulo: 'Grupos de entrenamiento outdoor gratuitos',
        descripcion: 'La comunidad de trail de Tlalpan organiza salidas gratuitas o de muy bajo costo los fines de semana desde los accesos al bosque. No son eventos formales — son grupos que se coordinan por WhatsApp y redes sociales. El nivel varía por grupo: busca uno que corresponda a tu experiencia antes de aparecer en una salida de nivel avanzado sin preparación.',
      },
    ],
    faq: [
      {
        q: '¿Cuándo es la próxima carrera de trail en el Bosque de Tlalpan?',
        a: 'Las carreras de trail en el Bosque de Tlalpan se distribuyen principalmente de octubre a abril, cuando las condiciones climáticas son más favorables. Las inscripciones se abren con 2-4 meses de anticipación en plataformas como Sportix y en las redes sociales de los organizadores. Los grupos de trail de Tlalpan en Facebook son la fuente más actualizada para seguir la agenda de eventos. La temporada de lluvias (junio-septiembre) reduce la frecuencia de carreras por condiciones del sendero.',
      },
      {
        q: '¿Cómo me inscribo a la Ultramaratón Picacho-Ajusco?',
        a: 'La inscripción se realiza en línea cuando abre la convocatoria — generalmente 3-5 meses antes del evento. Los cupos son limitados y se llenan rápido para las distancias largas. Hay requisitos de experiencia: para el 50km y 100km generalmente piden historial de carreras previas con tomas de tiempo oficiales. La inscripción tiene un costo que varía entre $800 y $2,500 MXN según la distancia. Sigue las redes sociales del evento para la apertura de inscripciones.',
      },
      {
        q: '¿Hay eventos de CrossFit o fitness funcional en Tlalpan?',
        a: 'Los grandes torneos de CrossFit de la CDMX están principalmente en Cuauhtémoc y Benito Juárez. Tlalpan tiene eventos inter-box de los estudios funcionales de la alcaldía — de menor escala y más accesibles para principiantes en la competencia. Para seguir la agenda de eventos de CrossFit en la CDMX, las páginas de las cajas de Cuauhtémoc y los grupos de CrossFit CDMX en Instagram son las fuentes más completas.',
      },
      {
        q: '¿Qué equipamiento necesito para las rutas del Bosque de Tlalpan?',
        a: 'Para rutas básicas de 5-10km: calzado de trail o running estable, agua suficiente (mínimo 500ml por cada 5km) y ropa en capas por el cambio de temperatura en el bosque. Para rutas largas de más de 15km: mochila de hidratación, bastones opcionales, protector solar, botiquín básico y un mapa offline descargado. La temperatura en el bosque puede bajar 5-8°C respecto al centro de la CDMX, especialmente en la mañana. Siempre avisa a alguien la ruta que vas a hacer.',
      },
    ],
    stats: [
      { label: 'Eventos anuales', value: '20+' },
      { label: 'Bosque de Tlalpan', value: '1,508 ha · senderos' },
      { label: 'Altitud', value: '2,300–3,600 msnm' },
      { label: 'Evento estrella', value: 'Ultra Picacho-Ajusco' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  bienestar: {
    h1: 'Bienestar y recuperación en Tlalpan, CDMX — Fisio, Nutrición y Masajes 2026',
    metaDesc: 'Bienestar en Tlalpan: fisioterapia, masajes y nutrición deportiva. Desde $250 MXN. Especialistas en trail running y outdoor. CDMX. Rodrigo 2026.',
    intro: `Tlalpan tiene una oferta de bienestar deportivo específica para el perfil de atleta que vive y entrena en la alcaldía: especialistas en fisioterapia de running y trail, nutricionistas con experiencia en nutrición para deporte de resistencia y terapeutas que entienden la carga de entrenamiento de un atleta que corre en el bosque los fines de semana.

La fisioterapia deportiva en Tlalpan tiene una orientación distinta a la de las alcaldías del centro. Acá el patrón de lesiones más frecuente es de corredor de montaña — rodilla de corredor, fascitis plantar, tendinitis de Aquiles, esguinces de tobillo por terreno irregular. Los fisioterapeutas de la zona tienen experiencia específica en ese tipo de lesión porque es lo que ven consistentemente.

Los precios de fisioterapia en Tlalpan van de $250 a $700 MXN por sesión — entre 30% y 50% menos que en Polanco o Lomas de Chapultepec para servicios equivalentes. Para deportistas que van al fisioterapeuta regularmente como mantenimiento preventivo, esa diferencia de precio tiene impacto real en el presupuesto anual.

El masaje terapéutico en la alcaldía tiene una oferta interesante: terapeutas con formación en masaje deportivo, masaje de tejido profundo y algunas tradiciones de masaje terapéutico mexicano que tienen valor real para la recuperación muscular. Los precios son accesibles y el nivel de los terapeutas con formación seria es bueno.

La nutrición deportiva en Tlalpan está desarrollada para el perfil de corredor y deportista de resistencia. Hay nutricionistas con experiencia en planes de alimentación para eventos de larga distancia, gestión del peso para running y recuperación post-competencia. Para ese perfil específico, la oferta local es más especializada que en muchas otras alcaldías.`,
    queEsperar: [
      {
        titulo: 'Fisioterapia especializada en running y trail',
        descripcion: 'Los fisioterapeutas de Tlalpan tienen experiencia específica en lesiones de corredor de montaña — rodilla de corredor, fascitis plantar, tendinitis de Aquiles, síndrome de banda iliotibial. Para alguien que entrena trail y tiene molestias crónicas o lesiones repetitivas, un fisioterapeuta que conoce este patrón específico hace diferencia real en el diagnóstico y el plan de tratamiento.',
      },
      {
        titulo: 'Precios accesibles para la CDMX',
        descripcion: 'El rango de $250-$700 MXN por sesión de fisioterapia en Tlalpan es entre 30-50% más accesible que en Polanco o Cuauhtémoc. Para un corredor que va al fisio 1-2 veces al mes como mantenimiento preventivo, esa diferencia suma $500-$1,500 MXN mensuales de ahorro. La calidad del servicio en los centros bien establecidos del sector es comparable a zonas más caras.',
      },
      {
        titulo: 'Nutrición para deporte de resistencia',
        descripcion: 'La nutrición deportiva en Tlalpan tiene orientación clara hacia el corredor y el atleta de resistencia — planes de alimentación periódica para entrenamientos de volumen alto, gestión de hidratación en altitud, estrategia de carga de carbohidratos previa a carreras. Para deportistas de resistencia, esta especialización es más relevante que la nutrición genérica de composición corporal.',
      },
      {
        titulo: 'Masaje terapéutico con tradición local',
        descripcion: 'Algunos terapeutas de Tlalpan integran técnicas de masaje tradicional mexicano con formación en masaje deportivo moderno. Esa combinación tiene valor específico — el tejido profundo con técnicas de raíz cultural que tienen siglos de desarrollo para el cuerpo en movimiento. Busca terapeutas que puedan explicar qué técnicas usan y para qué sirve cada una.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta una sesión de fisioterapia deportiva en Tlalpan?',
        a: 'Las sesiones de fisioterapia en Tlalpan van de $250 a $700 MXN por sesión de 45-60 minutos. La evaluación inicial en algunos centros tiene costo diferencial de $200-$350 MXN. Paquetes de tratamiento de 10 sesiones suelen tener descuento del 15-20%. Para comparación, los mismos servicios en Polanco o Cuauhtémoc pueden costar $500-$1,200 MXN. Pregunta si el fisioterapeuta tiene experiencia específica en lesiones de corredor antes de hacer la primera cita.',
      },
      {
        q: '¿Cuándo debo ver al fisioterapeuta si entreno trail en el Bosque de Tlalpan?',
        a: 'Para prevención: revisión postural y de patrón de carrera cada 3-4 meses para corredores activos, especialmente si aumentas volumen o empiezas a entrenamiento de montaña. Para síntomas: cualquier dolor que persiste más de 48-72 horas después de una sesión de entrenamiento, dolor en rodilla o tobillo que modifica tu zancada, o molestia que no responde al descanso. No esperes a que el dolor sea incapacitante — las lesiones de corredor tratadas temprano se resuelven en semanas; las tardías pueden sacarte 3-4 meses.',
      },
      {
        q: '¿Hay masajistas con formación en masaje deportivo en Tlalpan?',
        a: 'Sí, hay terapeutas con formación en masaje deportivo y tejido profundo en Tlalpan. Los precios van de $200 a $500 MXN por sesión de 60 minutos. Para encontrar terapeutas con formación verificada, pregunta directamente sobre su certificación — masaje deportivo de SINED, masoterapia o diploma de instituciones reconocidas. Los centros de fisioterapia de la zona suelen tener terapeutas de masaje como parte del equipo.',
      },
      {
        q: '¿Vale la pena la nutrición deportiva si corro solo los fines de semana?',
        a: 'Para corredores recreativos de fin de semana con distancias de menos de 10km, la nutrición general — suficiente proteína, hidratación adecuada, comida real — suele ser suficiente sin consulta especializada. Para quien entrena para una media maratón o un trail de 20km+, una consulta con nutricionista deportivo para diseñar la estrategia de alimentación previa y posterior a la carrera tiene retorno real en rendimiento y recuperación. Si tus distancias van más allá de 15-20km semanales, vale la consulta.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar', value: '30+' },
      { label: 'Fisioterapia sesión', value: '$250–$700 MXN' },
      { label: 'Masaje terapéutico', value: '$200–$500 MXN' },
      { label: 'Especialidad', value: 'Running · Trail · Resistencia' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,
}
