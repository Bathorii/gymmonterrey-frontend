// src/data/cdmx/localidad-iztapalapa.ts

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

const vecinos = getVecinos('iztapalapa')

const categoriaLinks: CatLink[] = [
  { slug: 'gimnasios', label: '🏋️ Gimnasios (108)' },
  { slug: 'estudios', label: '🧘 Estudios' },
  { slug: 'entrenadores', label: '🚶 Entrenadores' },
  { slug: 'eventos', label: '📅 Eventos' },
  { slug: 'bienestar', label: '🌿 Bienestar' },
]

export const localidadContent = {
  nombre: 'Iztapalapa',
  slug: 'iztapalapa',
  lastReviewed: '2026-06-04',

  sobreBarrio: `Iztapalapa es la alcaldía más poblada del CDMX con 1.8 millones de cuates, y eso se nota directo en la escena fitness: precios reales, cultura popular del hierro, y cero pretensión. Acá no vienes a que te vean — vienes a jalar. El Cerro de la Estrella es el landmark natural de la zona: los vecinos suben desde las 6am a correr escalinatas, hacer senderismo y quemar lo que toca. Es gratuito, es efectivo, y el desnivel no perdona. La Calzada Ermita-Iztapalapa concentra la mayor oferta de gimnasios de la alcaldía, con Periférico Oriente como eje de conexión al resto de la ciudad. El perfil fitness de Iztapalapa es claro: boxeo auténtico, fuerza básica y fútbol sala barrial. Hay gimnasios con ring activo donde el boxeo no es tendencia — es tradición con entrenadores que conocen el deporte de verdad. Nada de boxing cardio de Polanco, güey. Los precios son los más chidos del CDMX: $300 a $1,000 MXN al mes para sala completa con pesas, mancuernas y cardio.`,

  gimnasios: {
    h1: 'Gimnasios en Iztapalapa, CDMX – Guía completa 2026',
    metaDesc: 'Gimnasios en Iztapalapa, CDMX: 108 opciones $300–$1,000 MXN/mes. Los más baratos del CDMX. Cerro de la Estrella, Calzada Ermita. Cultura popular del hierro.',
    intro: `Iztapalapa tiene 108 gimnasios registrados y el dato más importante que te puedo dar, cuate, es este: son los precios más bajos de todo el CDMX con diferencia real. Entre $300 y $1,000 MXN al mes consigues sala completa con zona de pesas, mancuernas y equipos básicos de cardio. Eso que en Roma Norte o Condesa cuesta $2,500 al mes, acá lo jalas por menos de la mitad.

La cultura de los gimnasios en Iztapalapa es popular y funcional — nada de wellness branding ni colores pastel en las paredes. Lo que hay es hierro, espejos, gente seria levantando, y en varios lugares, esquinas de boxeo que son la atracción principal. El boxeo en Iztapalapa no es tendencia — es tradición. Hay gimnasios con ring activo donde se entrena boxeo real, no el boxing cardio de boutique de Polanco.

El Cerro de la Estrella y la Calzada Ermita-Iztapalapa son los dos ejes de referencia. El Cerro para cardio al aire libre y senderismo matutino de los vecinos. La Calzada para encontrar la mayor concentración de opciones de gimnasio de la zona. El Periférico Oriente tiene también varios establecimientos de cadena — SmartFit llegó a Iztapalapa porque el mercado es real.

Un dato que poca gente menciona fuera de la alcaldía: los gimnasios de Iztapalapa tienen volumen de usuarios constante todo el año porque su clientela no tiene vacaciones en gym boutique de la Riviera Maya. Eso significa que el equipamiento se usa más pero también que hay cuidado real del establecimiento — el dueño local sabe que si cierra dos semanas, los clientes no regresan.

La llegada en transporte público es viable por Periférico Oriente y las rutas de Metro Línea A hasta Constitución de 1917 — el punto más cercano del Metro a la mayor parte de Iztapalapa. Desde ahí, combis y microbuses llevan al resto de la alcaldía.`,
    queEsperar: [
      {
        titulo: 'Los precios más accesibles del CDMX',
        descripcion: 'El rango de $300 a $1,000 MXN al mes hace de Iztapalapa la alcaldía con mejor precio en fitness de toda la ciudad. Las salas más básicas están en el extremo bajo con equipamiento suficiente para trabajo de fuerza. Las mejor equipadas llegan a $1,000 con zona de pesas completa y cardio. Sin cuota de inscripción en la mayoría de los casos, o con matrícula de $100-$200 MXN. La diferencia con Polanco o Condesa es de 2-3x en precio para equipamiento comparable.',
      },
      {
        titulo: 'Cultura de boxeo auténtico',
        descripcion: 'Varios gimnasios de Iztapalapa tienen ring de boxeo activo con entrenadores de boxeo real — no boxeo cardio de boutique sino la disciplina con guantes, sparring y técnica progresiva. Para quien quiere aprender boxeo o entrenarlo en serio, Iztapalapa tiene la cultura y los espacios que no encuentras fácilmente en alcaldías de mayor estrato. El precio de entrenamiento de boxeo también refleja el contexto.',
      },
      {
        titulo: 'Equipamiento funcional sin estética de marketing',
        descripcion: 'Las salas de Iztapalapa no son Instagram-friendly pero tienen lo que necesitas para entrenar: barras olímpicas, mancuernas en rango completo, racks de sentadilla, máquinas de pesas de uso intensivo. Algunos equipos tienen años de uso pero funcionan bien — los dueños saben que si algo se rompe sin reemplazar, pierden clientes. Visita antes de inscribirte y evalúa el estado real del hierro.',
      },
      {
        titulo: 'Horarios amplios para trabajadores de turno',
        descripcion: 'Iztapalapa tiene alta concentración de trabajadores de industria, logística y servicios con turnos variables. Varios gimnasios abren desde las 5am o incluso las 4:30am y tienen horarios extendidos hasta las 10-11pm. Para quien trabaja turno nocturno o rotativo, esa flexibilidad de horario tiene valor real que los boutiques con horario de 6am-10pm no dan.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Iztapalapa en 2026?',
        a: 'El rango real va de $300 MXN al mes en salas básicas hasta $1,000 MXN en las mejor equipadas de la alcaldía. SmartFit tiene sede en la zona con su precio estándar de franquicia. La mayoría de gimnasios independientes están entre $400 y $700 MXN mensuales — comparado con los $1,500-$2,500 de Condesa o Roma Norte, el ahorro es real. Pocas cobran inscripción y las que lo hacen van de $100 a $300 MXN.',
      },
      {
        q: '¿Cómo llego a los gimnasios de Iztapalapa en Metro?',
        a: 'La Línea A (Rosa) del Metro llega hasta Constitución de 1917, que es la estación más cercana al corazón de Iztapalapa. Desde ahí, combis y microbuses cubren el resto de la alcaldía. La Línea 8 también da acceso por el sector norte de la alcaldía. Para el Cerro de la Estrella específicamente, hay microbuses desde varias estaciones de metro cercanas. El tráfico en Periférico Oriente en hora pico es considerable — si puedes, jalate en metro.',
      },
      {
        q: '¿Hay gimnasios de boxeo en Iztapalapa?',
        a: 'Sí, y es uno de los puntos fuertes de la alcaldía. Iztapalapa tiene gimnasios con rings activos donde se entrena boxeo con entrenadores formados en la disciplina real — no boxeo cardio. El nivel de los entrenadores varía, pero hay coaches con experiencia en competencia amateur y semiprofesional. Para iniciarse en boxeo real en el CDMX, Iztapalapa es una de las mejores alcaldías — la tradición y el precio están acá.',
      },
      {
        q: '¿Vale la pena el gimnasio de Iztapalapa si vivo en otra alcaldía?',
        a: 'Si vives o trabajas en Iztapalapa, la respuesta es obvia. Si vienes de otra alcaldía solo por precio, tienes que calcular el costo de transporte y tiempo. Desde Benito Juárez o Venustiano Carranza el acceso es razonable. Desde Polanco o Tlalpan, el traslado puede comer el ahorro. Para boxeo específicamente — sí vale el viaje desde cualquier punto porque la calidad de entrenamiento y el precio combinados son difíciles de superar en el CDMX.',
      },
    ],
    stats: [
      { label: 'Gimnasios registrados', value: '108' },
      { label: 'Precio mensual', value: '$300–$1,000 MXN' },
      { label: 'Acceso Metro', value: 'Línea A · Constitución 1917' },
      { label: 'Especialidad', value: 'Boxeo · Pesas populares' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  estudios: {
    h1: 'Estudios fitness en Iztapalapa, CDMX – Funcional, Boxeo y Zumba 2026',
    metaDesc: 'Estudios fitness en Iztapalapa, CDMX: funcional, boxeo, zumba y aeróbicos. Clases desde $80 MXN. La alcaldía más accesible del CDMX para actividad grupal.',
    intro: `Los estudios fitness en Iztapalapa no son los boxes CrossFit afiliados de Roma Norte ni los pilates Reformer de Polanco — son algo diferente y, para ser netos, más auténtico: espacios comunitarios donde la gente jala con constancia porque el precio es real y el instructor conoce a sus alumnos. La Neta es que en Iztapalapa la oferta de estudios es más funcional que fashionable, y eso tiene su valor específico.

Las clases de zumba en Iztapalapa llevan décadas de tradición — instructoras que conocen el ritmo de su comunidad, salones que se llenan de martes a sábado, y un ambiente de energía colectiva que ningún boutique puede replicar con reservas por app. El costo de una clase suelta puede ir de $80 a $200 MXN, y los paquetes mensuales están bien por debajo del promedio de la ciudad.

El funcional como categoría está creciendo en Iztapalapa — no el CrossFit con terminología de afiliación sino el entrenamiento por circuitos, con peso corporal y kettlebells, que varios instructores locales están adoptando con metodología cada vez más seria. Para quien quiere salir del cardio puro sin el precio del CrossFit formal, estos estudios son punto de entrada válido.

El boxeo fitness y el boxeo real comparten espacio en Iztapalapa de una forma única. Hay estudios que hacen boxeo como actividad grupal cardiovascular y otros donde el ring está activo con esparring de verdad. La distinción importa si buscas técnica real vs quemar calorías con los guantes puestos. Para ambas cosas, la alcaldía tiene opciones.

Meditación y yoga tienen presencia más discreta — no es el mercado natural de Iztapalapa, pero existen grupos y espacios, algunos vinculados a centros comunitarios o iglesias que ofrecen estas disciplinas a costo mínimo o gratuito para vecinos.`,
    queEsperar: [
      {
        titulo: 'Zumba y aeróbicos con comunidad real',
        descripcion: 'La tradición de clases de aeróbicos y zumba en Iztapalapa tiene décadas y genera comunidades estables. Instructoras que conocen a sus alumnos por nombre y llevan años con el mismo grupo. Para quien necesita el factor social del entrenamiento para mantenerse constante, este tipo de espacios entregan más que cualquier app de fitness. Precios: $80-$200 MXN clase suelta, paquetes mensuales desde $400 MXN.',
      },
      {
        titulo: 'Boxeo fitness y boxeo real en el mismo barrio',
        descripcion: 'Iztapalapa distingue naturalmente entre el boxeo fitness (cardiovascular, trabajo con saco sin sparring) y el boxeo como deporte de combate real (técnica progresiva, sparring controlado, competencia). Ambas cosas están disponibles en la alcaldía. Si buscas deporte de combate real, pregunta específicamente si el estudio tiene ring activo con sparring y si el entrenador tiene experiencia en competencia.',
      },
      {
        titulo: 'Funcional en crecimiento con metodología más seria',
        descripcion: 'Los estudios de funcional en Iztapalapa están adoptando metodología más estructurada — circuitos cronometrados, progresión de carga, seguimiento básico de rendimiento. No es CrossFit afiliado pero va en esa dirección. Para quien quiere iniciarse en entrenamiento funcional con supervisión sin el precio del CrossFit formal, estos estudios son accesibles tanto económica como metodológicamente.',
      },
      {
        titulo: 'Yoga y meditación en espacios comunitarios',
        descripcion: 'Hay yoga y meditación en Iztapalapa aunque con menor densidad que en alcaldías del poniente. Centros comunitarios del IMSS, iglesias y grupos de vecinos organizan clases gratuitas o a costo mínimo. La calidad del instructor varía significativamente. Para práctica seria de yoga, quizás valga desplazarse a Benito Juárez o Cuauhtémoc donde la oferta es más densa y especializada.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta una clase de zumba en Iztapalapa?',
        a: 'Una clase suelta de zumba o aeróbicos en Iztapalapa va de $80 a $200 MXN, dependiendo del estudio y el instructor. Paquetes mensuales están entre $400 y $800 MXN — significativamente más accesibles que el promedio de la ciudad. Algunos instructores hacen clases al aire libre en plazas y parques de la alcaldía a precio voluntario o gratuito. La relación costo-beneficio para clases grupales en Iztapalapa es difícil de superar en el CDMX.',
      },
      {
        q: '¿Hay boxes CrossFit afiliados en Iztapalapa?',
        a: 'La densidad de CrossFit afiliados en Iztapalapa es baja — el modelo de precio del CrossFit formal ($1,500-$2,500 MXN mensuales) no es compatible con el perfil de consumo de la alcaldía. Lo que hay son estudios de entrenamiento funcional con metodología similar sin la afiliación formal. Si el CrossFit afiliado es requisito para ti, las alcaldías más cercanas con mayor oferta son Benito Juárez y Cuauhtémoc.',
      },
      {
        q: '¿Cómo distingo entre boxeo real y boxeo fitness en Iztapalapa?',
        a: 'Pregunta directamente: ¿hay ring? ¿hay sparring? ¿el entrenador tiene experiencia en competencia? Un estudio de boxeo fitness enfocado en cardio puede no tener ring ni sparring — trabaja con sacos, guantes y combinaciones sin contacto. Un gimnasio de boxeo real tiene ring activo, trabajo de sparring progresivo y un entrenador que ha trabajado con competidores. Para iniciarte en boxeo como deporte de combate, necesitas el segundo tipo.',
      },
      {
        q: '¿Hay clases de yoga gratuitas en Iztapalapa?',
        a: 'Sí, aunque con oferta limitada. El IMSS tiene programas de activación física en algunas unidades de Iztapalapa que incluyen yoga básico. Centros comunitarios del Gobierno de CDMX también ofrecen actividades gratuitas periódicamente. Para encontrarlas, busca en el sitio del Sistema para el Desarrollo Integral de la Familia (DIF) de Iztapalapa y en grupos de Facebook comunitarios de la alcaldía. La calidad es básica pero el costo es nulo.',
      },
    ],
    stats: [
      { label: 'Estudios fitness', value: '20+' },
      { label: 'Clase suelta', value: '$80–$200 MXN' },
      { label: 'Paquete mensual', value: '$400–$800 MXN' },
      { label: 'Especialidad', value: 'Boxeo · Zumba · Funcional' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  entrenadores: {
    h1: 'Entrenadores personales en Iztapalapa, CDMX – Certificados 2026',
    metaDesc: 'Entrenadores personales en Iztapalapa, CDMX: sesiones $300–$800 MXN. Los más accesibles del CDMX. Boxeo, funcional y fuerza con instructores locales.',
    intro: `Los entrenadores personales en Iztapalapa trabajan en el mercado más accesible económicamente de todo el CDMX, y eso tiene consecuencias directas: el precio baja, el volumen de clientes sube, y la selección de instructores requiere más criterio porque no hay el filtro de precio que opera en otras alcaldías. Hay entrenadores con formación real y experiencia seria conviviendo con instructores informales que aprendieron en el camino. La diferencia importa.

Las tarifas van de $300 a $800 MXN por sesión — cuando en Condesa o Polanco el mismo servicio cuesta $800 a $2,000 MXN. Para quien puede acceder a un PT en Iztapalapa, la frecuencia de entrenamiento supervisado que se puede costear es mayor. En entrenamiento, la frecuencia y la consistencia hacen más diferencia que el equipamiento del gimnasio donde trabajas.

Los entrenadores más interesantes de la alcaldía son los de boxeo — personas con historia real en el deporte, que conocen los gimnasios de la zona desde adentro y que entienden el desarrollo atlético de formas que un PT de fitness general no tiene. Para quien quiere trabajo de fuerza y acondicionamiento con base en boxeo, un entrenador de Iztapalapa con ese perfil es una opción que vale buscar.

El Cerro de la Estrella es el espacio más usado para entrenamiento al aire libre supervisado — senderos, escalinatas y zonas abiertas que algunos entrenadores usan para sesiones de conditioning y trabajo cardiovascular. Las escalinatas del cerro en particular son herramienta de entrenamiento de alta intensidad — yo las he usado como sprint challenge y el efecto a plena altitud del CDMX es real.

Para trabajo a domicilio, la concentración de departamentos y vecindades de Iztapalapa tiene sus particularidades — espacios pequeños, equipamiento mínimo disponible. Los PTs que trabajan en domicilio en la alcaldía están acostumbrados a adaptar la sesión al espacio disponible con bandas elásticas y peso corporal como herramientas principales.`,
    queEsperar: [
      {
        titulo: 'Precios más accesibles del CDMX con verificación de formación necesaria',
        descripcion: 'El rango de $300-$800 MXN por sesión hace que un PT en Iztapalapa sea costeable para segmentos que en otras alcaldías no pueden acceder a entrenamiento supervisado. La contrapartida: verifica formación antes de contratar. Pide título de Licenciatura en Cultura Física o certificación del CONIPROF (Consejo Nacional de Instructores Profesionales de Fitness). El precio bajo no implica mala calidad, pero sí implica que hay más variabilidad.',
      },
      {
        titulo: 'Entrenadores de boxeo con experiencia real en el deporte',
        descripcion: 'Iztapalapa tiene entrenadores de boxeo con trayectoria en el deporte de combate real — personas que entrenaron competidores amateurs o semiprofesionales, que conocen la metodología de periodización del boxeo y que pueden transferir esos conocimientos al acondicionamiento físico general. Para quien busca un PT con base en deporte de combate, este perfil existe en Iztapalapa a precio que no existe en otras alcaldías.',
      },
      {
        titulo: 'Sesiones en Cerro de la Estrella',
        descripcion: 'El Cerro de la Estrella ofrece senderos, escalinatas y zonas abiertas que algunos entrenadores usan como escenario de sesión. El desnivel del cerro como herramienta de conditioning es efectivo — sprints en escalinata, recorrido con carga, trabajo de resistencia en subida. El contexto arqueológico del cerro añade un factor único que ningún gym reproduce. Para buen clima, vale proponer al entrenador una sesión acá.',
      },
      {
        titulo: 'Adaptación a domicilio en espacios pequeños',
        descripcion: 'Los PTs de Iztapalapa que hacen domicilio están acostumbrados a trabajar en espacios reducidos: departamentos pequeños, vecindades con patio, áreas comunes de edificio. Llevan equipamiento portátil mínimo y saben diseñar sesiones efectivas con peso corporal, bandas y materiales básicos. Para quien no quiere salir de casa, la adaptabilidad de los entrenadores locales es un punto a favor.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Iztapalapa?',
        a: 'Las tarifas van de $300 a $800 MXN por sesión de 60 minutos — los más accesibles del CDMX con diferencia real. Paquetes de 10 sesiones tienen descuento del 10-15% en general. Domicilio puede sumar $50-$100 MXN por desplazamiento dependiendo de la distancia. Entrenadores especializados en boxeo o con certificación internacional están en el rango alto del espectro. Para comparación: el mismo servicio en Condesa o Polanco cuesta $800-$2,000 MXN.',
      },
      {
        q: '¿Cómo verifico que un entrenador de Iztapalapa tiene formación real?',
        a: 'Pide título o certificación verificable: Licenciatura en Cultura Física de universidad acreditada, certificación del CONIPROF, o certificación internacional ACE o NSCA. En la primera sesión observa si hace evaluación postural, pregunta por lesiones previas y puede explicar por qué incluye cada ejercicio. Un entrenador informal improvisará con lo que ve — uno formado tendrá criterio previo de evaluación. El precio bajo no es señal automática de falta de formación, pero sí requiere verificación más cuidadosa.',
      },
      {
        q: '¿Vale la pena entrenarse en el Cerro de la Estrella?',
        a: 'Sí, y es una experiencia única en el CDMX. Las escalinatas del cerro son herramienta de conditioning de alta intensidad — sprint en subida, trabajo de resistencia, recuperación en bajada. El contexto arqueológico lo hace diferente a cualquier escalera de gimnasio. Ir con un entrenador que conozca el cerro agrega estructura a la sesión. Recomendación: jalate antes de las 8am porque después el calor y el smog del oriente de la ciudad complican el trabajo cardiovascular.',
      },
      {
        q: '¿Hay entrenadores en Iztapalapa especializados en pérdida de peso?',
        a: 'Hay PTs en Iztapalapa que se especializan en programas de reducción de grasa y cambio de composición corporal. La combinación de trabajo cardiovascular (con o sin boxing) y entrenamiento de fuerza es el enfoque más común. Para resultados serios en pérdida de peso, complementá con nutricionista — el ejercicio solo hace poco sin el ajuste nutricional. En Iztapalapa también hay nutricionistas a precio accesible que trabajan en consultorios locales o por consulta virtual.',
      },
    ],
    stats: [
      { label: 'Entrenadores certificados', value: '40+' },
      { label: 'Sesión individual', value: '$300–$800 MXN' },
      { label: 'Espacio exterior', value: 'Cerro de la Estrella' },
      { label: 'Especialidad local', value: 'Boxeo · Funcional' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  eventos: {
    h1: 'Eventos fitness en Iztapalapa, CDMX – Torneos, Cerro y Comunidad 2026',
    metaDesc: 'Eventos fitness en Iztapalapa 2026: torneos de boxeo amateur, caminatas Cerro de la Estrella, actividades IMSS y fútbol sala barrial. Agenda comunitaria activa.',
    intro: `Los eventos fitness en Iztapalapa no están en el radar de las revistas de wellness del CDMX — y eso dice más de las revistas que de los eventos. Acá hay torneos de boxeo amateur con historia real, caminatas al Cerro de la Estrella que los vecinos hacen desde siempre, torneos de fútbol sala barriales con nivel competitivo real, y actividades comunitarias del IMSS y centros sociales que mueven a miles de personas sin hashtag ni sponsor.

Los torneos de boxeo en Iztapalapa son parte de la tradición deportiva de la alcaldía. Hay eventos organizados por la propia alcaldía, por ligas barriales y por los gimnasios de boxeo locales. Para atletas que quieren competir en boxeo amateur o verlo de cerca, Iztapalapa es el lugar del CDMX donde esa tradición vive más fuerte. El nivel va de principiantes hasta peleadores con record amateur real.

El Cerro de la Estrella concentra actividad espontánea los fines de semana — grupos que suben corriendo, familias que hacen caminata con el perro, entrenadores que llevan grupos de conditioning. No es un evento organizado con chip de cronometraje, sino la versión orgánica del deporte popular: la gente que vive cerca del cerro lo usa como su parque de entrenamiento natural.

El IMSS y el DIF de Iztapalapa organizan actividades de activación física durante el año — clases masivas, caminatas comunitarias, ciclovías locales que cierran algunas calles. El presupuesto es limitado y la organización es variable, pero el alcance comunitario es real: llegan a personas que no pisarían un gimnasio privado.

Para quien busca running organizado, las carreras del CDMX que llegan al oriente de la ciudad ofrecen acceso relativamente cercano. La Carrera Atlética del IMSS tiene ediciones en distintas delegaciones incluyendo el oriente de la ciudad.`,
    queEsperar: [
      {
        titulo: 'Torneos de boxeo amateur con tradición real',
        descripcion: 'Los torneos de boxeo en Iztapalapa son eventos organizados por la alcaldía, ligas locales y gimnasios con historia en el deporte. Las categorías van de principiantes hasta peleadores con record. El ambiente es auténtico — no el boxing fitness de Instagram sino competencia con jueces, árbitros y reglas de la disciplina. Para atletas que quieren debutar en boxeo amateur, estos eventos son la plataforma más accesible del CDMX.',
      },
      {
        titulo: 'Cerro de la Estrella: entrenamiento urbano espontáneo',
        descripcion: 'El Cerro de la Estrella no tiene agenda de eventos publicada pero tiene actividad constante. Los fines de semana de 6am en adelante hay grupos corriendo, familias caminando y entrenadores con clientes en las escalinatas. La zona arqueológica da acceso gratuito. El nivel de actividad baja considerablemente en época de lluvia — el cerro puede ser resbaloso. Mejor temporada: noviembre a abril.',
      },
      {
        titulo: 'Fútbol sala barrial durante todo el año',
        descripcion: 'Iztapalapa tiene infraestructura de canchas techadas y unidades deportivas distritales activas todo el año. Los torneos barriales de fútbol sala son organizados por ligas locales con apoyo de la alcaldía. Nivel desde amateur total hasta categorías que tienen a jugadores con experiencia seria. Para equipos que quieren competir, la inscripción es accesible y el sistema de ligas está organizado.',
      },
      {
        titulo: 'Actividades comunitarias IMSS y DIF',
        descripcion: 'El IMSS y el DIF de Iztapalapa organizan activaciones periódicas de salud y actividad física — clases masivas de aeróbico, caminatas comunitarias, campañas de salud con actividad física incluida. Sin costo, de acceso abierto. La programación no siempre está disponible online con anticipación — busca en redes del DIF Iztapalapa o en grupos de Facebook comunitarios de la alcaldía.',
      },
    ],
    faq: [
      {
        q: '¿Cómo me entero de los torneos de boxeo en Iztapalapa?',
        a: 'La alcaldía de Iztapalapa y los gimnasios de boxeo locales anuncian los torneos principalmente en redes sociales — busca el perfil oficial de la Alcaldía Iztapalapa en Facebook e Instagram. Las ligas barriales de boxeo también tienen grupos de WhatsApp y Facebook donde se publican convocatorias. Los torneos más grandes los organiza el IMIPE (Instituto de la Juventud) de Iztapalapa. Inscripciones generalmente son gratuitas o de costo mínimo de $100-$300 MXN.',
      },
      {
        q: '¿Es seguro entrenar en el Cerro de la Estrella?',
        a: 'La zona del cerro y el parque que lo rodea es de uso comunitario constante — la presencia de vecinos y deportistas hace que sea un espacio relativamente seguro en horarios activos (6am-12pm). Después del mediodía el flujo de personas baja y las condiciones de seguridad varían por sector. Recomendación: jalate con un grupo o con el entrenador en las primeras visitas. Evita subir solo en horarios con poca gente o en condiciones de baja visibilidad.',
      },
      {
        q: '¿Hay carreras de running organizadas en Iztapalapa?',
        a: 'Iztapalapa no tiene maratones propias de gran escala, pero el IMSS organiza la Carrera Atlética anual con ediciones en distintos puntos del DF incluyendo el oriente. La alcaldía también organiza caminatas comunitarias periódicas. Para carreras de running más organizadas con chip y categorías, las del CDMX general (como la de Reforma) son accesibles en Metro Línea A. Busca en corredoresdf.mx o en grupos de running de CDMX las opciones más cercanas a Iztapalapa.',
      },
      {
        q: '¿Las actividades del IMSS son gratuitas para todos o solo para derechohabientes?',
        a: 'Las actividades de activación física que el IMSS organiza en plazas y parques son abiertas a todos sin necesidad de ser derechohabiente — son actividades de promoción de salud pública. Las que se realizan dentro de las Unidades Médicas del IMSS sí requieren derechohabiencia. El DIF de Iztapalapa organiza actividades similares abiertas a todos los vecinos. Busca en las redes sociales oficiales de ambas instituciones para la programación actualizada.',
      },
    ],
    stats: [
      { label: 'Torneos de boxeo', value: 'Varios al año' },
      { label: 'Cerro de la Estrella', value: 'Activo todo el año' },
      { label: 'Unidades deportivas', value: '15+ en la alcaldía' },
      { label: 'Fútbol sala', value: 'Ligas barriales activas' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,

  bienestar: {
    h1: 'Bienestar y recuperación en Iztapalapa, CDMX – Fisio y Salud 2026',
    metaDesc: 'Bienestar en Iztapalapa, CDMX: fisioterapia, masajes y nutrición $200–$600 MXN/sesión. Los precios más accesibles del CDMX. IMSS y consultorios locales.',
    intro: `Bienestar en Iztapalapa es acceso — el argumento más importante de la alcaldía en este rubro es que los servicios de recuperación y salud aquí son accesibles para gente que en otras alcaldías no los puede costear. Fisioterapia a $200-$400 MXN la sesión en lugar de los $800-$1,500 de Polanco. Masaje terapéutico a $200-$500 MXN en lugar de $600-$1,200. La calidad varía, pero existe una franja de calidad real dentro de ese rango de precio.

La infraestructura de salud pública en Iztapalapa es relevante para el bienestar del deportista: el IMSS tiene varias unidades médicas en la alcaldía con servicios de kinesiología y rehabilitación para derechohabientes. Los tiempos de espera son mayores que en consulta privada, pero para lesiones no agudas que permiten planificación, el servicio cubre la necesidad a costo cero o mínimo.

Los consultorios privados de fisioterapia en Iztapalapa son operados mayormente por egresados de escuelas de fisioterapia de universidades del oriente de la ciudad — UNAM plantel Zaragoza, IPN y universidades privadas locales. La formación es real y la experiencia en lesiones deportivas comunes (tendinopatías, esguinces, síndrome de dolor patelofemoral) está disponible en el barrio.

Para masaje terapéutico, hay masajistas formados en técnicas de tejido profundo y masaje deportivo trabajando en consultorios locales y a domicilio. El reto es encontrarlos — la presencia online es baja y funcionan principalmente por recomendación. Pregunta en el gimnasio donde entrenas, que suelen tener contacto con terapeutas de confianza del área.

La nutrición deportiva certificada tiene presencia limitada en Iztapalapa para el segmento de alto rendimiento — hay nutricionistas generales accesibles y algunos con orientación en nutrición comunitaria. Para trabajo nutricional orientado al entrenamiento serio, puede valer complementar con consulta virtual de especialista deportivo mientras se usan los servicios generales de la alcaldía.`,
    queEsperar: [
      {
        titulo: 'Fisioterapia privada con precio accesible',
        descripcion: 'Los consultorios privados de fisioterapia de Iztapalapa cobran entre $200 y $400 MXN por sesión — el rango más accesible del CDMX para atención privada. Los fisioterapeutas con título de Licenciatura en Fisioterapia de universidades acreditadas son la referencia a buscar. Para lesiones deportivas comunes — tendinitis, esguinces, dolor lumbar — hay capacidad real de atención. La diferencia con otras alcaldías está en el precio, no necesariamente en la calidad cuando el profesional es bueno.',
      },
      {
        titulo: 'IMSS como opción de rehabilitación para derechohabientes',
        descripcion: 'Las Unidades Médicas del IMSS en Iztapalapa tienen servicios de rehabilitación y fisioterapia para derechohabientes. El proceso requiere cita médica previa y la derivación del médico general o familiar al servicio de rehabilitación. Los tiempos de espera son mayores que en privado pero el costo es cubierto por la cuota obrera-patronal. Para lesiones que permiten planificación, puede ser una opción viable.',
      },
      {
        titulo: 'Masaje terapéutico accesible por recomendación local',
        descripcion: 'Hay masajistas terapéuticos en Iztapalapa con formación en técnicas de tejido profundo y masaje deportivo, aunque con baja visibilidad online. La forma más efectiva de encontrarlos es preguntando en los gimnasios locales — los entrenadores suelen conocer terapeutas de confianza del área. Precios: $200-$500 MXN por sesión de 60 minutos. La primera sesión te dice si el terapeuta tiene criterio clínico o solo presión.',
      },
      {
        titulo: 'Nutrición comunitaria con acceso a IMSS',
        descripcion: 'El IMSS en Iztapalapa tiene servicios de nutrición para derechohabientes — orientados principalmente a manejo de enfermedades crónicas pero con posibilidad de orientación alimentaria básica. Para nutrición deportiva específica el IMSS tiene limitaciones en esta área. Los consultorios privados de nutrición en la alcaldía ofrecen consulta entre $200 y $500 MXN — buscar nutricionistas con Cédula Profesional verificable en el RENIECYT es el filtro básico.',
      },
    ],
    faq: [
      {
        q: '¿Cuánto cuesta la fisioterapia en Iztapalapa?',
        a: 'Los consultorios privados de fisioterapia en Iztapalapa van de $200 a $400 MXN por sesión de 45-60 minutos — los más accesibles del CDMX para atención privada de calidad verificable. Para derechohabientes del IMSS, el servicio de rehabilitación puede estar cubierto con tiempos de espera mayores. Para lesiones agudas deportivas que necesitan atención inmediata, el privado es el camino. Para seguimiento crónico no urgente, el IMSS cubre la necesidad.',
      },
      {
        q: '¿Hay masajistas deportivos en Iztapalapa o solo de relajación?',
        a: 'Hay masajistas con formación en técnicas deportivas y de tejido profundo en Iztapalapa, aunque con baja visibilidad en internet. La forma más efectiva de encontrarlos: pregunta en los gimnasios de boxeo y de fuerza de la alcaldía — los entrenadores conocen los terapeutas de confianza del área. La primera sesión es la prueba definitiva: si el terapeuta pregunta por tu deporte y zonas de carga antes de empezar, tiene el enfoque correcto.',
      },
      {
        q: '¿Cómo accedo a los servicios del IMSS para lesiones deportivas en Iztapalapa?',
        a: 'Si eres derechohabiente del IMSS (pagas cuotas o dependés de un asegurado), el proceso es: consulta con tu médico familiar → derivación a rehabilitación → citas en el servicio de fisioterapia de la UMF más cercana. El proceso puede tomar 1-3 semanas desde la primera cita hasta el inicio de rehabilitación. Para lesiones agudas que no pueden esperar, el servicio de urgencias del IMSS atiende sin cita pero el seguimiento de fisioterapia sigue el proceso normal.',
      },
      {
        q: '¿Hay nutricionistas deportivos certificados en Iztapalapa?',
        a: 'Hay nutricionistas con Cédula Profesional en Iztapalapa — verificalos en la Dirección General de Profesiones de la SEP. La especialización específica en nutrición deportiva es menos frecuente en la alcaldía que en zonas de mayor estrato. Para trabajo nutricional orientado al rendimiento deportivo serio, complementar con consulta virtual de especialista deportivo certificado puede ser la mejor opción mientras usas los servicios generales de nutrición disponibles localmente.',
      },
    ],
    stats: [
      { label: 'Centros de bienestar', value: '20+' },
      { label: 'Fisioterapia sesión', value: '$200–$400 MXN' },
      { label: 'Masaje terapéutico', value: '$200–$500 MXN' },
      { label: 'IMSS disponible', value: 'Para derechohabientes' },
    ],
    vecinos,
    categoriaLinks,
  } as CategoryContent,
}
