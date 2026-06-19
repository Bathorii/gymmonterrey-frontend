// src/data/cdmx/localidad-milpa-alta.ts

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

const vecinos = getVecinos('milpa-alta')

const categoriaLinks: CatLink[] = [
  { slug: 'gimnasios',    label: '🏋️ Gimnasios (21)' },
  { slug: 'estudios',     label: '🧘 Estudios' },
  { slug: 'entrenadores', label: '🚶 Entrenadores' },
  { slug: 'eventos',      label: '📅 Eventos' },
  { slug: 'bienestar',    label: '🌿 Bienestar' },
]

export const localidadContent = {
  nombre: 'Milpa Alta',
  slug: 'milpa-alta',
  lastReviewed: '2026-06-13',

  sobreBarrio: `Milpa Alta es la alcaldía más rural y aislada del CDMX — y eso lo define todo. No hay Metro, no hay Metrobús, no hay boutiques de CrossFit. Lo que hay es el Pueblo de Milpa Alta, campos de nopal hasta donde alcanza la vista y una cultura comunitaria que el resto de la ciudad olvidó tener. Con 21 gimnasios, es la alcaldía con menos densidad de fitness del CDMX.

Dos lecturas, cuate. La primera: si buscas SmartFit o CrossFit afiliado, tendrás que jalar a Tlalpan o Xochimilco. La segunda: los 21 gimnasios que existen acá son genuinos, de barrio, con membresías entre $200 y $700 MXN al mes. Futbol en canchas de tierra, atletismo en la pista del pueblo, pesas en salas sin branding corporativo.

El acceso desde el centro son 1-2 horas dependiendo del punto de origen. Eso hace de Milpa Alta una alcaldía donde el deporte local es la única opción real para sus residentes — y tiene su lógica: comunidades que dependen de sus propios recursos desarrollan una cultura de actividad física que no necesita app de check-in.`,

  gimnasios: {
    h1: 'Gimnasios en Milpa Alta, CDMX — Deporte auténtico rural 2026',
    metaDesc: 'Gimnasios en Milpa Alta CDMX: 21 opciones desde $200 MXN/mes. La alcaldía más rural de CDMX. Membresías económicas en Pueblo de Milpa Alta y Av. México.',
    intro: `Milpa Alta tiene 21 gimnasios y la neta es que acá no vas a encontrar lo que hay en Condesa o Polanco. No hay spinning boutique, no hay paredes de escalar indoor, no hay cafetería de proteínas en la recepción. Lo que hay son salas de hierro en locales de barrio, con membresías que van de $200 a $700 MXN al mes — el rango más bajo de toda la CDMX para alcaldías con oferta activa.

Eso tiene un valor real para sus 140,000 habitantes: acceso a infraestructura de entrenamiento sin tener que jalar dos horas en micro al centro. Los gimnasios del Pueblo de Milpa Alta y los asentamientos cercanos son el único recurso fitness que la mayoría de los milpaltenses tienen a mano. Y los utilizan — la cultura de actividad física aquí es fuerte, aunque no se parece a la de Roma Norte.

La Av. México es el eje principal de la alcaldía y concentra los negocios más establecidos. Los gimnasios sobre esta avenida tienen la mejor accesibilidad dentro de la propia alcaldía. Equipamiento básico pero funcional: barras, discos, mancuernas, máquinas de cable. Para trabajo de fuerza básico y volumen, cubre lo necesario sin el precio de alcaldía premium.

Lo que sí vale destacar: Milpa Alta está a mayor altitud que el centro del CDMX — en algunos puntos supera los 2,400 metros. El trabajo cardiovascular acá es exigente por partida doble: el aislamiento geográfico significa que el cardio se hace al aire libre en cerros y caminos de tierra, no en cinta eléctrica. Para atletas que vienen de otras alcaldías a entrenar en altura, ese factor es real y notable desde la primera sesión. Güey, hay gente acá que entrena a diario con recursos mínimos y resultados reales. Eso merece respeto.`,
    queEsperar: [
      {
        titulo: 'Precios de membresía más bajos de CDMX',
        descripcion: 'Los gimnasios de Milpa Alta cobran entre $200 y $700 MXN al mes — significativamente menos que cualquier alcaldía con oferta boutique. Muchos no tienen cuota de inscripción adicional. Para residentes de la alcaldía con presupuesto ajustado, esto representa acceso real a equipamiento de entrenamiento sin sacrificar calidad de vida en otras áreas.',
      },
      {
        titulo: 'Salas de barrio con identidad comunitaria',
        descripcion: 'Estos no son negocios de franquicia con manual corporativo — son espacios con historia en la comunidad. Los dueños conocen a sus miembros, el ambiente es directo y sin pretensiones, y la clientela es local y leal. Para quien ya sabe entrenar y solo necesita el hierro, estos espacios funcionan exactamente para eso.',
      },
      {
        titulo: 'Equipamiento esencial sin excesos',
        descripcion: 'Barras olímpicas, discos, mancuernas hasta 40kg, jaulas de sentadilla básicas y máquinas de cable. Sin pantallas táctiles, sin vestuarios con sauna. Para entrenamiento de fuerza básico y trabajo de volumen, el equipamiento disponible cubre las necesidades de la mayoría de los practicantes regulares.',
      },
      {
        titulo: 'Alternativas al aire libre como cultura real',
        descripcion: 'La geografía de Milpa Alta — cerros, campos, caminos — es la sala de cardio más grande posible. Grupos de trote en caminos de tierra, ciclismo de montaña informal y futbol comunitario son parte del fitness real de la alcaldía. Para quien entrena sin depender exclusivamente del gym, el entorno natural ofrece posibilidades que ninguna caminadora puede replicar.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Milpa Alta en 2026?',
        a: 'Las membresías en Milpa Alta van de $200 a $700 MXN al mes — el rango más accesible de toda la CDMX. La mayoría de salas no cobran cuota de inscripción adicional. Comparado con $800-$2,500 MXN en Roma Norte o Condesa, o $600-$1,500 en alcaldías intermedias como Benito Juárez, Milpa Alta tiene los precios más bajos disponibles. El equipamiento es básico pero funcional para trabajo de fuerza y volumen.',
      },
      {
        q: '¿Hay gimnasios SmartFit o cadenas en Milpa Alta?',
        a: 'No, Milpa Alta no tiene presencia de cadenas como SmartFit, Sport City o GoldGym. Los 21 gimnasios de la alcaldía son todos independientes y de barrio. La oferta de cadenas más cercana está en Xochimilco o Tlalpan, accesibles en micro o combi en 30-60 minutos dependiendo del punto de origen. Para quien necesita la app de SmartFit o el sistema de sedes múltiples, esas opciones son fuera de la alcaldía.',
      },
      {
        q: '¿Cómo llego a los gimnasios de Milpa Alta desde el centro de CDMX?',
        a: 'Milpa Alta no tiene Metro ni Metrobús. El acceso es por combi o micro desde estaciones de Metro periféricas — Tasqueña (Línea 2) es el punto de conexión principal. Las combis hacia el Pueblo de Milpa Alta salen de la central de autobuses de Tasqueña y tardan entre 1 y 1.5 horas dependiendo del tráfico. Para residentes de la alcaldía, esto es la ruta normal. Para alguien de Condesa o Roma, es una expedición que no tiene sentido solo para entrenar.',
      },
      {
        q: '¿Vale la pena el gimnasio en Milpa Alta o es mejor buscar en Tlalpan o Xochimilco?',
        a: 'Si vives en Milpa Alta, los gimnasios locales son la opción lógica — el tiempo de traslado a Tlalpan o Xochimilco no justifica la diferencia en amenidades para entrenamiento regular. Si buscas CrossFit metodológico, pilates Reformer o instructores con especialización alta, tienes que salir de la alcaldía de todas formas. La ecuación es simple: Milpa Alta tiene los precios más bajos de CDMX y el equipamiento básico funciona. Para sesiones de fuerza estándar, cumple el propósito.',
      },
    ],
    stats: [
      { label: 'Gimnasios registrados', value: '21' },
      { label: 'Membresía mensual', value: '$200–$700 MXN' },
      { label: 'Eje principal', value: 'Av. México' },
      { label: 'Altitud aprox.', value: '2,400+ msnm' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  estudios: {
    h1: 'Estudios fitness en Milpa Alta, CDMX — Deporte comunitario 2026',
    metaDesc: 'Estudios y clases fitness en Milpa Alta CDMX: opciones comunitarias desde $100 MXN. Sin boutiques — deporte popular en la alcaldía más rural del CDMX.',
    intro: `La neta sobre estudios fitness en Milpa Alta es directa: no hay. Al menos no en el sentido boutique que tiene Condesa, Roma Norte o Benito Juárez. No hay boxes CrossFit afiliados, no hay pilates Reformer, no hay spinning con bikes calibradas y sistema de sonido profesional. Milpa Alta es la alcaldía más aislada y rural del CDMX, y eso se refleja directamente en su oferta de fitness especializado.

Lo que sí existe es deporte comunitario organizado — clases de aeróbicos en centros comunitarios del INAADE (Instituto del Deporte de la Ciudad de México), grupos de zumba organizados por vecinas del barrio, sesiones de yoga en espacios abiertos. Esto no es boutique, pero es accesible, es consistente y está integrado a la vida comunitaria de la alcaldía de una manera que ningún estudio de $2,000 MXN al mes puede replicar. La regularidad de esas clases — año tras año, sin depender de membresías ni apps — tiene un valor real que no aparece en ninguna lista de "mejores estudios del CDMX".

La Av. México y el Pueblo de Milpa Alta tienen algunos salones que ofrecen clases de baile, karate y artes marciales — disciplinas con demanda real en comunidades donde el deporte popular tiene raíces profundas. Una clase suelta en estos espacios puede costar entre $80 y $250 MXN — significativamente menos que cualquier alternativa en alcaldías del poniente o norte.

Para quien busca CrossFit metodológico, Pilates certificado o yoga con instructoras con formación en India, la opción siempre es jalar a Tlalpan o Xochimilco. Pero para quien vive en Milpa Alta y quiere clases grupales guiadas sin gastar más de lo que tiene, la oferta comunitaria cubre la necesidad real de movimiento. A huevo que eso tiene valor, cuate.`,
    queEsperar: [
      {
        titulo: 'Clases comunitarias gratuitas o de bajo costo',
        descripcion: 'El INAADE organiza actividades deportivas en centros comunitarios de Milpa Alta — aeróbicos, zumba y funcional básico con instructores pagados por el gobierno de la Ciudad. Estas clases son gratuitas o tienen cuota mínima simbólica. Para residentes de la alcaldía con presupuesto limitado, son la opción de mayor acceso real.',
      },
      {
        titulo: 'Artes marciales y deportes tradicionales',
        descripcion: 'Karate, taekwondo y artes marciales tienen presencia real en Milpa Alta, con academias establecidas en el Pueblo y comunidades aledañas. La cultura del deporte de contacto tiene raíces en la alcaldía que se refleja en la demanda de estas disciplinas. Clases mensuales entre $300 y $700 MXN con instructores locales con años de experiencia.',
      },
      {
        titulo: 'Entorno natural como espacio de entrenamiento',
        descripcion: 'Los cerros y caminos de Milpa Alta son el "estudio" de cardio natural de la alcaldía. Grupos de trote en caminos de terracería, ciclismo de montaña informal y caminatas de altura son prácticas regulares para residentes activos. La altitud hace que este trabajo aeróbico sea exigente — y el paisaje, que ningún estudio indoor puede replicar.',
      },
      {
        titulo: 'Deportes de cancha con infraestructura existente',
        descripcion: 'Milpa Alta tiene canchas de futbol, básquetbol y voleibol en todas sus comunidades — algunas de las instalaciones públicas están en buen estado. Los torneos inter-comunitarios son eventos deportivos regulares. Para quien busca actividad física colectiva con componente social real, los deportes de cancha de la alcaldía ofrecen eso sin costo.',
      },
    ],
    faq: [
      {
        q: '¿Hay clases de CrossFit en Milpa Alta?',
        a: 'No, Milpa Alta no tiene boxes CrossFit afiliados. La opción más cercana está en Tlalpan, accesible en combi en 30-45 minutos. Si CrossFit es tu disciplina principal y vives en Milpa Alta, la ecuación de transporte para ir a entrenar regularmente hay que evaluarla. Para metodología funcional básica, algunos gimnasios de barrio de la alcaldía ofrecen circuitos que comparten elementos con CrossFit aunque sin afiliación ni programación formal.',
      },
      {
        q: '¿Dónde puedo tomar clases de yoga en Milpa Alta?',
        a: 'El yoga formal con estudio dedicado no existe en Milpa Alta actualmente. Las alternativas son: clases en centros comunitarios del INAADE cuando las programan, grupos informales en espacios abiertos del Pueblo de Milpa Alta, y acceso digital a clases online. Para yoga con instructor presencial certificado, Xochimilco o Tlalpan son las opciones más cercanas con 30-60 minutos de traslado.',
      },
      {
        q: '¿Qué deportes son populares en Milpa Alta?',
        a: 'Futbol es el deporte dominante en todas sus formas — futbol 7, futbol de cancha completa, torneos inter-comunitarios. Atletismo tiene tradición en la alcaldía gracias a la pista de las instalaciones del pueblo. Karate y taekwondo tienen academias establecidas con generaciones de practicantes. Ciclismo de montaña informal es popular por la geografía de la zona. La cultura del deporte acá es popular, comunitaria y sin branding corporativo.',
      },
      {
        q: '¿Cuánto cuestan las clases de artes marciales en Milpa Alta?',
        a: 'Las academias de karate y taekwondo en Milpa Alta cobran entre $300 y $700 MXN al mes por clases regulares. Algunas tienen cuota de inscripción inicial de $200-$400 MXN. Comparado con academias de alcaldías centrales donde la mensualidad puede superar $1,500 MXN, Milpa Alta tiene artes marciales accesibles con instructores que en muchos casos llevan décadas entrenando a la comunidad.',
      },
    ],
    stats: [
      { label: 'Estudios especializados', value: '5+' },
      { label: 'Clase comunitaria', value: 'Gratis–$250 MXN' },
      { label: 'Artes marciales', value: '$300–$700 MXN/mes' },
      { label: 'Centro referencia', value: 'Pueblo de Milpa Alta' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  entrenadores: {
    h1: 'Entrenadores personales en Milpa Alta, CDMX — PT comunitario 2026',
    metaDesc: 'Entrenadores personales en Milpa Alta CDMX. Sesiones desde $150 MXN. PTs comunitarios en la alcaldía más rural de CDMX. Entrenamiento funcional y deportes.',
    intro: `Los entrenadores personales en Milpa Alta operan en un contexto completamente diferente al de Condesa o Polanco. Aquí no hay Instagram de entrenador con 50,000 seguidores ni app de reserva de sesiones. Hay cuates que llevan años entrenando a su comunidad, que conocen las familias de sus clientes y que cobran lo que el contexto permite — entre $150 y $500 MXN por sesión, dependiendo del entrenador y la modalidad.

La formación de los PTs de la zona es variable. Hay egresados de Educación Física y Ciencias del Deporte del IPN o UNAM que decidieron trabajar en su comunidad en lugar de jalar al centro. Y hay entrenadores autodidactas con años de experiencia práctica pero sin certificación formal. La diferencia en resultados que da uno y otro depende de lo que estás buscando — para fundamentos de movimiento y programación básica, la experiencia cuenta. Para rehabilitación deportiva o alto rendimiento, la formación técnica importa más.

Lo que distingue a los entrenadores de Milpa Alta es su conocimiento del entorno: saben cómo usar los cerros, los caminos y los espacios comunitarios para entrenar. Un PT local puede diseñarte una rutina que combina trabajo de fuerza en el gym de barrio con cardio en la sierra local y deporte comunitario — eso es algo que un entrenador de Roma Norte no puede ofrecerte porque no conoce el territorio.

Las sesiones grupales al aire libre en el Pueblo de Milpa Alta o en parques comunitarios son la modalidad más común y más accesible. De 3 a 8 personas por grupo, precios de $100 a $200 MXN por persona por sesión. Para quien busca guía sin presupuesto para sesiones individuales, los grupos comunitarios son la entrada real al entrenamiento guiado en esta alcaldía.`,
    queEsperar: [
      {
        titulo: 'Tarifas accesibles adaptadas al contexto',
        descripcion: 'Las sesiones individuales de PT en Milpa Alta van de $150 a $500 MXN — significativamente menos que el rango de $500-$1,500 de alcaldías centrales. Las sesiones grupales cuestan entre $100 y $200 MXN por persona. Para residentes de la alcaldía, esto representa acceso real a entrenamiento guiado sin sacrificar otras necesidades.',
      },
      {
        titulo: 'Conocimiento del territorio local',
        descripcion: 'Los entrenadores locales conocen la alcaldía y saben cómo usar su geografía única. Rutas de trote en cerros, circuitos en espacios comunitarios y acceso a instalaciones del pueblo son recursos que un entrenador de afuera no puede ofrecer. Para quien quiere integrar el entorno natural de Milpa Alta a su entrenamiento, un PT local es el guía adecuado.',
      },
      {
        titulo: 'Entrenamiento deportivo comunitario',
        descripcion: 'Algunos entrenadores de Milpa Alta trabajan con equipos de futbol, atletas locales y grupos de adultos mayores en programas comunitarios. Si buscas entrenamiento deportivo específico para fútbol, atletismo o artes marciales, los entrenadores especializados de la zona tienen experiencia real en esas disciplinas con la comunidad.',
      },
      {
        titulo: 'Verificación de credenciales más informal',
        descripcion: 'En Milpa Alta, la verificación de un PT se hace más por referencia comunitaria que por certificaciones formales exhibidas en redes. Pregunta a vecinos que ya entrenan con ese PT, observa resultados en su comunidad y haz una sesión de prueba. El boca a boca aquí funciona de manera más directa y confiable que en alcaldías donde cualquiera tiene una landing page.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Milpa Alta?',
        a: 'Las sesiones individuales de PT en Milpa Alta van de $150 a $500 MXN por sesión de 60 minutos. Las sesiones grupales de 3-8 personas cuestan entre $100 y $200 MXN por persona. Comparado con $500-$1,500 MXN en Roma Norte o Condesa, Milpa Alta tiene los entrenadores más accesibles de la CDMX. Para residentes de la alcaldía, es la única opción de entrenamiento guiado que tiene sentido económico sin el costo de transporte al centro.',
      },
      {
        q: '¿Cómo encuentro un entrenador personal en Milpa Alta?',
        a: 'La mejor manera es preguntar en el gimnasio de barrio más cercano — los entrenadores locales trabajan en o alrededor de esas salas. También en los centros comunitarios del INAADE, donde algunos PTs complementan su trabajo. El boca a boca funciona muy bien en Milpa Alta: pregunta a vecinos que entrenando bien, pide referencia del PT que los ayuda y contactalo directamente. Facebook local y grupos de WhatsApp de la comunidad son los canales más activos.',
      },
      {
        q: '¿Hay entrenadores especializados en deporte de montaña en Milpa Alta?',
        a: 'Milpa Alta tiene entrenadores con experiencia en actividades de montaña — senderismo, trote en cerro y ciclismo de terracería son prácticas establecidas en la alcaldía. Para quien quiere prepararse para rutas de montaña o mejorar su rendimiento en altitud, un guía/entrenador local tiene conocimiento real del territorio: las rutas seguras, los niveles de dificultad, los puntos de referencia. Esto es difícil de encontrar en cualquier otra alcaldía del CDMX.',
      },
      {
        q: '¿Vale la pena contratar un PT en Milpa Alta si puedo ir a entrenar a Tlalpan?',
        a: 'Depende del tiempo que tienes disponible. Si el traslado a Tlalpan o Xochimilco te quita 1-2 horas de tu día para entrenar, un PT local que maximice el tiempo de entrenamiento disponible tiene valor real. Para atletas de rendimiento que necesitan especialización alta (powerlifting, CrossFit competitivo, rehabilitación deportiva avanzada), el traslado a una zona con más opciones puede justificarse. Para fitness general y mantenerse activo, un entrenador de Milpa Alta cubre la necesidad sin el costo de tiempo del transporte.',
      },
    ],
    stats: [
      { label: 'Entrenadores activos', value: '15+' },
      { label: 'Sesión individual', value: '$150–$500 MXN' },
      { label: 'Sesión grupal', value: '$100–$200 MXN/persona' },
      { label: 'Especialidad local', value: 'Deporte de montaña' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  eventos: {
    h1: 'Eventos fitness en Milpa Alta, CDMX — Deporte y tradición 2026',
    metaDesc: 'Eventos fitness en Milpa Alta 2026: torneos comunitarios, senderismo en sierra y festivales tradicionales con actividad física en la alcaldía más rural del CDMX',
    intro: `Los eventos fitness en Milpa Alta no se anuncian en Instagram con filtros de colores ni patrocinadores — se pegan en carteles en el Pueblo, corren por WhatsApp de vecino en vecino y se llenan porque la comunidad los conoce de siempre. Esa es la lógica de los eventos en la alcaldía más rural del CDMX, y tiene su propio valor que ningún evento boutique de Polanco puede replicar.

Los torneos de futbol inter-comunidad son los eventos deportivos más frecuentes y masivos de la alcaldía. Las ligas locales operan todo el año con calendarios que respetan las festividades del pueblo — no es raro que un partido de playoffs coincida con un festival tradicional. La participación es comunitaria real: familias enteras en la cancha, no solo los jugadores. Inscripción por equipo entre $500 y $1,500 MXN por torneo — el precio más accesible del CDMX para competencia organizada.

El senderismo en la sierra de Milpa Alta es el evento de resistencia natural de la zona. Los cerros que rodean la alcaldía tienen rutas de diferente nivel de dificultad, y grupos organizados de residentes hacen caminatas y trotes en altura regularmente. La Cumbre del Teuhtli (2,700 msnm) es el punto de referencia para atletas locales — subirla corriendo a esa altitud es un test real de capacidad cardiovascular que pocas rutas del CDMX pueden igualar.

La Semana Cultural de Milpa Alta — generalmente en agosto — incluye actividades deportivas entre los eventos tradicionales. Los Juegos Deportivos Estudiantiles que organiza la Delegación concentran actividad atlética en los meses escolares — atletismo, futbol y basquetbol principalmente. Para quien quiere participar en el ritmo deportivo real de la alcaldía o simplemente conocer el ambiente comunitario, estos eventos son la mejor puerta de entrada posible.`,
    queEsperar: [
      {
        titulo: 'Torneos de futbol inter-comunitarios',
        descripcion: 'Las ligas de futbol operan durante todo el año en Milpa Alta con torneos trimestrales entre comunidades de la alcaldía. La participación es abierta — no necesitas ser atleta profesional ni tener equipo equipado. Los partidos son en canchas de tierra y concreto, el nivel va de principiante a semiprofesional, y el ambiente es de fiesta comunitaria. Inscripción por equipo entre $500 y $1,500 MXN por torneo.',
      },
      {
        titulo: 'Senderismo y trote en sierra',
        descripcion: 'La sierra de Milpa Alta tiene rutas de senderismo desde nivel básico hasta exigente. El Teuhtli (2,700 msnm) es el punto de referencia principal. Grupos organizados salen los fines de semana temprano — preguntar en la presidencia auxiliar del Pueblo de Milpa Alta es la mejor manera de encontrarlos. Costo: generalmente gratuito o con cuota mínima para el guía.',
      },
      {
        titulo: 'Festivales tradicionales con actividad física',
        descripcion: 'La Semana Cultural de Milpa Alta (agosto) incluye eventos deportivos entre las actividades tradicionales. El Carnaval de la alcaldía tiene competencias de danza y expresión corporal. Estas actividades integran deporte y tradición de manera que no encuentras en ninguna otra alcaldía del CDMX — son eventos únicos del territorio.',
      },
      {
        titulo: 'Juegos Estudiantiles de la Delegación',
        descripcion: 'El gobierno delegacional organiza Juegos Deportivos Estudiantiles en las escuelas de la alcaldía — atletismo, futbol, basquetbol y voleibol principalmente. Aunque están orientados a jóvenes en edad escolar, los eventos finales son abiertos al público y generan actividad deportiva comunitaria real durante el año lectivo.',
      },
    ],
    faq: [
      {
        q: '¿Dónde puedo correr o hacer senderismo en Milpa Alta?',
        a: 'La sierra de Milpa Alta tiene rutas de senderismo y trote accesibles desde el Pueblo de Milpa Alta. El Teuhtli es el punto de referencia principal — la ruta de ascenso tarda entre 1.5 y 3 horas dependiendo del ritmo. Otros cerros de la alcaldía tienen caminos de tierra utilizables para trote. Para información sobre rutas actualizadas y condiciones de seguridad, la mejor fuente es la presidencia auxiliar del Pueblo de Milpa Alta o grupos de senderismo locales en Facebook.',
      },
      {
        q: '¿Hay maratones o carreras de calle organizadas en Milpa Alta?',
        a: 'Milpa Alta no tiene carreras de calle organizadas del tipo maratón o 10K con cronometraje oficial. La alcaldía no está en el circuito de carreras urbanas de CDMX por su lejanía y geografía. La opción de running organizado más cercana está en Tlalpan o Xochimilco. Lo que sí tiene Milpa Alta son desafíos de montaña informales — grupos que compiten en tiempo de ascenso a los cerros locales.',
      },
      {
        q: '¿Cuándo es la Semana Cultural de Milpa Alta?',
        a: 'La Semana Cultural de Milpa Alta generalmente se realiza en agosto, aunque las fechas exactas varían cada año. Incluye festivales de danza, música, gastronomía y actividades deportivas. Para el calendario actualizado, la presidencia delegacional de Milpa Alta publica la información en su sitio web y en carteles físicos en el Pueblo. Los eventos deportivos incluidos suelen ser torneos de futbol y exhibiciones de artes marciales.',
      },
      {
        q: '¿Cómo participo en los torneos de futbol de Milpa Alta?',
        a: 'Los torneos inter-comunitarios se organizan a través de la Subdirección de Deporte de la Alcaldía Milpa Alta. necesitas un equipo de entre 7 y 11 jugadores, un nombre de equipo y la cuota de inscripción ($500-$1,500 MXN por torneo). Las convocatorias se publican en las presidencias auxiliares de cada comunidad y en Facebook local. También puedes preguntar en los gimnasios de barrio — los dueños suelen saber de las ligas activas y pueden conectarte con equipos que necesitan jugadores.',
      },
    ],
    stats: [
      { label: 'Torneos/año', value: '10+' },
      { label: 'Altitud sierra', value: 'Hasta 2,700 msnm' },
      { label: 'Cumbre referencia', value: 'Teuhtli' },
      { label: 'Semana Cultural', value: 'Agosto' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  bienestar: {
    h1: 'Bienestar y salud en Milpa Alta, CDMX — Medicina comunitaria 2026',
    metaDesc: 'Bienestar en Milpa Alta CDMX: salud y recuperación desde $100 MXN. Medicina tradicional, fisioterapia y nutrición comunitaria en la alcaldía más rural del CDMX.',
    intro: `El bienestar en Milpa Alta se entiende diferente al de las alcaldías del centro o poniente. Acá conviven la medicina convencional accesible, la medicina tradicional náhuatl con raíces en el territorio, y los servicios de fisioterapia y nutrición de los centros de salud del IMSS e ISSSTE. No hay centros de crioterapia ni consultorios con máquinas de diagnóstico de composición corporal de última generación. Pero hay algo que pocas alcaldías del CDMX tienen: acceso genuino a medicina tradicional con practicantes de la comunidad que llevan décadas en eso.

Los servicios de salud pública en Milpa Alta son la columna vertebral del bienestar de sus habitantes. El IMSS tiene unidades médicas en la alcaldía, y el INAADE provee programas de actividad física con orientación de salud. Para quien tiene seguridad social, los servicios de fisioterapia del IMSS son accesibles — aunque con tiempos de espera y sin especialización deportiva avanzada. Es la opción más económica disponible para derechohabientes.

Los consultorios privados de fisioterapia en el Pueblo de Milpa Alta cobran entre $150 y $400 MXN por sesión — accesibles para el perfil económico de la zona. La especialización en fisioterapia deportiva avanzada es limitada, pero para rehabilitación básica de lesiones musculoesqueléticas y mantenimiento preventivo, el nivel disponible es funcional y suficiente para la mayoría de practicantes regulares.

La medicina tradicional es parte real del sistema de salud comunitario de Milpa Alta. Sobadores, hueseros y terapeutas con conocimiento herbolario de tradición náhuatl atienden a residentes que combinan sus servicios con la medicina convencional. Esto no es folklore ni turismo cultural — es parte de cómo esta comunidad gestiona su salud desde hace generaciones, y tiene resultados verificados por quienes la usan a diario. Para lesiones de sobrecarga y dolor muscular crónico, los sobadores locales son el primer recurso al que muchos residentes activos acuden antes del consultorio.`,
    queEsperar: [
      {
        titulo: 'Servicios de salud pública accesibles',
        descripcion: 'El IMSS y los centros de salud de la alcaldía ofrecen servicios de fisioterapia, nutrición y medicina general con cuotas de recuperación accesibles o gratuitas para derechohabientes. Los tiempos de espera son la principal limitación. Para quienes tienen seguridad social, estos servicios son la opción más económica disponible para atención de salud relacionada con el deporte.',
      },
      {
        titulo: 'Fisioterapia privada a precio comunitario',
        descripcion: 'Los consultorios privados de fisioterapia en el Pueblo de Milpa Alta cobran entre $150 y $400 MXN por sesión. Sin la especialización deportiva avanzada de Polanco o Condesa, pero con formación profesional real. Para lesiones deportivas básicas — distensiones, tendinitis, recuperación post-esfuerzo — la atención disponible cubre lo necesario.',
      },
      {
        titulo: 'Medicina tradicional comunitaria',
        descripcion: 'Milpa Alta tiene una tradición de medicina herbolaria y terapias manuales con raíces en la cultura náhuatl del territorio. Sobadores y hueseros con décadas de práctica comunitaria atienden casos que la medicina convencional no siempre resuelve bien — lesiones crónicas, dolor muscular persistente, recuperación post-trabajo físico intenso. Es un recurso real, no exótico, para la comunidad.',
      },
      {
        titulo: 'Nutrición comunitaria en centros de salud',
        descripcion: 'Los centros de salud de la alcaldía y el DIF tienen programas de orientación nutricional gratuitos o de bajo costo. La especialización en nutrición deportiva no está disponible en la zona, pero para manejo de peso, corrección de hábitos alimentarios y nutrición preventiva, los nutricionistas de los centros públicos tienen la formación necesaria.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta la fisioterapia en Milpa Alta?',
        a: 'Los consultorios privados de fisioterapia en Milpa Alta cobran entre $150 y $400 MXN por sesión de 45-60 minutos. Los derechohabientes del IMSS pueden acceder a fisioterapia con cuotas de recuperación de $30-$80 MXN por sesión en las unidades médicas de la alcaldía. Comparado con $500-$1,200 MXN en Condesa o Roma Norte, Milpa Alta tiene las opciones más accesibles de fisioterapia privada en CDMX para zonas con cobertura de seguridad social.',
      },
      {
        q: '¿Qué es la medicina tradicional en Milpa Alta y es confiable?',
        a: 'La medicina tradicional de Milpa Alta tiene raíces en la cultura náhuatl y combina herbolaria, terapias manuales (sobada, huesero) y conocimiento ancestral del territorio. No es alternativa a la medicina convencional — es complementaria y muchos residentes la usan en paralelo con atención médica formal. Para dolor muscular crónico, lesiones de sobrecarga y recuperación post-esfuerzo, los sobadores tradicionales con décadas de experiencia tienen resultados verificados por la comunidad. Para lesiones agudas o patología médica, la consulta con médico convencional primero.',
      },
      {
        q: '¿Hay nutricionistas especializados en deporte en Milpa Alta?',
        a: 'La especialización en nutrición deportiva no está disponible en Milpa Alta actualmente. Los nutricionistas de los centros de salud públicos tienen formación clínica general — útil para corrección de hábitos y manejo de peso, pero sin la especialización en periodización nutricional para deporte de rendimiento. Para nutrición deportiva avanzada, la opción más cercana está en Tlalpan o Xochimilco. Para necesidades básicas de salud nutricional, los centros de salud de la alcaldía cubren lo esencial a costo mínimo.',
      },
      {
        q: '¿Dónde encuentro servicios de masajes terapéuticos en Milpa Alta?',
        a: 'Los servicios de masajes en Milpa Alta operan a través de dos canales: consultorios formales con terapeuta con formación, y terapeutas tradicionales comunitarios. Los primeros cobran entre $200 y $450 MXN por sesión. Los tradicionales (sobadores) tienen precios variados que a menudo dependen de la capacidad de pago del cliente. Para encontrarlos, pregunta en la farmacia del pueblo, en el centro de salud o en la presidencia auxiliar — la reputación comunitaria es el filtro más confiable disponible.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar', value: '10+' },
      { label: 'Fisioterapia privada', value: '$150–$400 MXN' },
      { label: 'IMSS cuota', value: '$30–$80 MXN' },
      { label: 'Medicina tradicional', value: 'Disponible local' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,
}
