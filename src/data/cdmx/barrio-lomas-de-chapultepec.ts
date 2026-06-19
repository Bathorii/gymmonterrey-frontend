// src/data/cdmx/barrio-lomas-de-chapultepec.ts
// Draft – lastReviewed: 2026-06-21

export const barrioContent = {
  nombre: 'Lomas de Chapultepec',
  slug: 'lomas-de-chapultepec',
  group: 'B',
  parentDistrict: {
    nombre: 'Miguel Hidalgo',
    slug: 'miguel-hidalgo',
  },
  lastReviewed: '2026-06-21',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Lomas de Chapultepec es el barrio donde el fitness en CDMX llega a su versión más cara y más reservada, güey. Sobre Paseo de las Palmas el Sports World flagship es la referencia: instalaciones de 3,000 m², alberca semiolímpica, canchas de squash y sala de pesas con equipamiento de importación que pocas instalaciones privadas del país superan. NSE A con tendencia a la discreción — aquí no se postea, se entrena.

La oferta complementaria son entrenadores con certificaciones internacionales que trabajan por agenda privada en instalaciones o domicilios. Los precios reflejan el mercado: membresía Sports World de $2,500 a $4,500 MXN al mes, sesión de PT de $800 a $1,800 MXN. La cercanía al Bosque de Chapultepec añade la dimensión outdoor — grupos de running al amanecer son habituales entre semana. Para quien vive o trabaja cerca de Lomas de Chapultepec, la oferta fitness local es suficiente para entrenar con constancia sin necesidad de cruzar la ciudad ni pagar los precios de las zonas premium del CDMX, cuate.

Para el vecino de Lomas de Chapultepec que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar.`,

  gimnasios: {
    h1: 'Gimnasios en Lomas de Chapultepec',
    metaDesc: 'Gimnasios en Lomas de Chapultepec, CDMX: Sports World flagship y ~6 opciones de $2,200 a $4,500 MXN/mes. Paseo de las Palmas. Guía real 2026.',
    intro: `Lomas de Chapultepec tiene una densidad baja de gimnasios — alrededor de 6 espacios en todo el barrio — pero lo que existe es de la categoría más alta del CDMX. El Sports World de Lomas es el referente absoluto: alberca semiolímpica, más de 100 máquinas cardiovasculares, sala de pesas con equipamiento Technogym y Life Fitness, y canchas de squash y padel. No hay instalaciones comparables en la Miguel Hidalgo en términos de infraestructura por metro cuadrado. La membresía va de $2,500 a $4,500 MXN al mes, uno de los más altos de la ciudad para un gimnasio de formato grande. Para quien usa todo lo que ofrece — alberca, clases, sala de pesas, canchas — el costo por uso se vuelve razonable. Para quien solo quiere levantar pesas tres veces por semana, es un exceso de instalaciones. Los gymns privados y boutiques en Lomas son una categoría aparte: espacios de 200-400 m² con acceso por membresía o invitación, grupos de 5-15 personas máximo, algunos sin rótulo en la calle ni Instagram público — 100% por referidos. Si tienes el contacto correcto, combinan calidad e individualización que el Sports World no puede ofrecer. En Lomas la cercanía al Bosque de Chapultepec también funciona como extensión natural del entrenamiento — muchos socios del Sports World combinan el gym con una vuelta de 5 km por el circuito exterior antes de entrar a pesas, lo que hace de esta zona una de las pocas del CDMX donde el entrenamiento outdoor y el gimnasio conviven en el mismo desplazamiento sin planificación extra.`,
    faq: [
      {
        q: '¿Cuánto cuesta el Sports World de Lomas de Chapultepec y qué incluye?',
        a: 'El Sports World Lomas tiene membresías entre $2,500 y $4,500 MXN al mes según el plan elegido. El plan básico incluye sala de pesas y cardiovascular; los planes medios agregan clases de grupo ilimitadas y acceso a instalaciones acuáticas; el plan premium incluye también acceso a canchas de squash y padel, créditos de servicios de recuperación y acceso a instalaciones de la cadena en todo el país. La inscripción inicial va de $1,000 a $2,000 MXN dependiendo de la promoción del momento. Es cara para ser una cadena, pero las instalaciones en Lomas son de lo más completo del CDMX.',
      },
      {
        q: '¿Hay algún gimnasio más accesible en Lomas sin pagar Sports World premium?',
        a: 'En la zona de Lomas de Chapultepec estricta las opciones fuera del Sports World son limitadas y no son más baratas — son boutiques y espacios privados que cobran igual o más por un formato diferente (grupos muy pequeños, PT incluido). Si buscas precio más accesible en la misma zona geográfica, la frontera con Anzures sobre Ejército Nacional y la frontera con Polanco sobre Masaryk tienen opciones a $1,100-$2,500 MXN. Para quedarte en Lomas con precios menores al Sports World tienes que buscar gymns independientes pequeños en las calles secundarias — existen pero no se anuncian.',
      },
      {
        q: '¿Cómo llego al Sports World Lomas sin coche en hora pico?',
        a: 'Sin coche, Lomas de Chapultepec es complicado de acceder en hora pico. El Metrobús Línea 1 pasa por Periférico y deja a unos 15 minutos caminando de Paseo de las Palmas — opción funcional si vienes del sur o del norte de la ciudad. En Uber, el tráfico sobre Periférico en horario de 7-9am y 18-20hs puede triplicar el tiempo de viaje. La opción más práctica para usuarios sin coche es entrenar fuera de hora pico — las instalaciones del Sports World en horario de 10am a 4pm tienen ocupación 50% menor que en rush hour y el acceso en transporte es mucho más fluido.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Lomas de Chapultepec tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Lomas de Chapultepec suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~6' },
      { label: 'Membresía mensual', value: '$2,500–$4,500 MXN' },
      { label: 'Referente',         value: 'Sports World flagship' },
      { label: 'NSE',               value: 'A (residencial cerrado)' },
    ],
    barrios: [
      { name: 'Polanco',   slug: 'polanco',   district: 'miguel-hidalgo' },
      { name: 'Anzures',   slug: 'anzures',   district: 'miguel-hidalgo' },
      { name: 'Santa Fe',  slug: 'santa-fe-ao', district: 'alvaro-obregon' },
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
    h1: 'Estudios boutique en Lomas de Chapultepec',
    metaDesc: 'Estudios en Lomas de Chapultepec, CDMX: pilates Reformer privado y yoga de $350 a $700 MXN/clase. Paseo de las Palmas. Guía real 2026.',
    intro: `Los estudios boutique de Lomas de Chapultepec operan con perfil bajo y clientela fija. No hacen campañas de Instagram con descuento, y no siempre aceptan clases sueltas sin referido. Es el modelo de negocio de un mercado NSE A que valora la privacidad tanto como la instrucción. Una clase de pilates Reformer puede costar entre $350 y $700 MXN; los planes mensuales ilimitados arrancan en $3,000 MXN. La calidad de instrucción en los mejores estudios es genuinamente alta. Los instructores tienen formación en centros de referencia — Pilates Center de Boulder, BASI, o programas europeos — y trabajan con máquinas Gratz o Balanced Body profesional. Los grupos son de 4-8 personas máximo, lo que garantiza atención individual real en cada clase. El yoga en Lomas tiene perfil similar: instructores con formaciones de 500 horas, clases de 8-10 personas y énfasis en técnica y anatomía. Algunos estudios tienen yoga terapéutico para lesiones o patologías específicas — escoliosis, rehabilitación post-cirugía — difíciles de encontrar con ese nivel de especialización en otros barrios. El acceso es por referido o contacto directo. Lo que diferencia a los mejores estudios de Lomas de sus equivalentes en Polanco no es el formato sino la continuidad: los grupos son estables, los alumnos se conocen entre sí desde hace años y el instructor diseña progresiones a largo plazo en lugar de clases sueltas sin hilo conductor. Para quien valora ese tipo de comunidad, Lomas es el lugar.`,
    faq: [
      {
        q: '¿Cómo accedo a un estudio boutique privado en Lomas si no tengo referido?',
        a: 'La mayoría de los estudios boutique de Lomas aceptan nuevos alumnos directamente si llegas por su sitio web o Instagram y solicitas información — no todos operan 100% por referido, aunque muchos prefieren ese modelo. El primer paso es buscar los estudios que están activos en redes (aunque con bajo volumen de posts), contactar por DM o por el correo de contacto que tengan, y pedir información sobre disponibilidad. Algunos tienen lista de espera de 2-4 semanas para horarios de primera hora. Si llegas dispuesto a tomar horarios en horas intermedias (10am-1pm), la entrada es más directa.',
      },
      {
        q: '¿Vale la pena pagar $700 MXN por clase de pilates en Lomas cuando en Anzures pago $250 MXN?',
        a: 'Depende de lo que buscas, güey. Si buscas pilates para mantenerte activo y tener una hora de movimiento de calidad a la semana, no — Anzures o Polanco tienen estudios con instructoras certificadas y máquinas buenas a $200-$350 MXN por clase con el mismo resultado práctico. Si buscas progresar en pilates avanzado con instructor que tiene 15 años de experiencia, grupos de 5 personas, máquinas Gratz y retroalimentación técnica detallada en cada clase, entonces la diferencia de precio tiene correlato real en la experiencia. El criterio es tu nivel actual y tu objetivo concreto, no el nombre del barrio.',
      },
      {
        q: '¿Hay estudios de spinning o funcional boutique en Lomas?',
        a: 'En Lomas de Chapultepec estricta la oferta de spinning boutique y funcional es menor que en Polanco o Condesa. El Sports World cubre spinning con instructores y equipamiento de calidad incluido en la membresía. Para funcional y CrossFit boutique, los espacios más cercanos están sobre la frontera con Polanco (Masaryk y alrededores) o en Anzures (Newton y Arquímedes). Si la prioridad es pilates o yoga de nivel avanzado, Lomas tiene lo mejor del CDMX. Si la prioridad es funcional o spinning boutique, Polanco queda a 10-15 minutos y tiene mayor densidad de opciones específicas.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~5' },
      { label: 'Clase suelta',      value: '$350–$700 MXN' },
      { label: 'Mensual ilimitado', value: '$3,000–$5,000 MXN' },
      { label: 'Perfil',            value: 'Privado / referido' },
    ],
    barrios: [
      { name: 'Polanco',   slug: 'polanco',   district: 'miguel-hidalgo' },
      { name: 'Anzures',   slug: 'anzures',   district: 'miguel-hidalgo' },
      { name: 'Santa Fe',  slug: 'santa-fe-ao', district: 'alvaro-obregon' },
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
    h1: 'Entrenadores personales en Lomas de Chapultepec',
    metaDesc: 'Entrenadores personales en Lomas de Chapultepec, CDMX: PT certificados de $800 a $1,800 MXN/sesión. El estándar más alto del CDMX. Guía 2026.',
    intro: `El personal training en Lomas de Chapultepec es la versión más premium del servicio en CDMX. Los entrenadores tienen certificaciones NSCA-CSCS, especializaciones en biomecánica o rehabilitación, y en algunos casos experiencia con atletas de alto rendimiento. La sesión individual va de $800 a $1,800 MXN — el techo más alto de la ciudad para PT. El modelo más habitual no es el PT en el gym: es el entrenador que va al domicilio o trabaja en instalación privada. Muchos clientes tienen home gym con Technogym o Rogue, y el entrenador lleva el programa y el seguimiento. Este formato elimina el desplazamiento y maximiza la privacidad. El costo suma la sesión más $150-$300 MXN de desplazamiento según distancia. Los entrenadores en Lomas también coordinan el plan con el médico internista o nutriólogo del cliente — enfoque multidisciplinario que en otros barrios existe pero es menos sistemático. Para pérdida de peso supervisada, rehabilitación post-quirúrgica o patologías crónicas, este nivel de coordinación puede marcar diferencia clínica real. Lo que caracteriza al PT de Lomas en su mejor versión es la continuidad del vínculo: el entrenador conoce el historial del cliente durante años, ajusta la programación cuando hay viaje de negocios, estrés laboral alto o temporada de menor tiempo disponible. No es solo una sesión vendida — es un servicio de mantenimiento de la condición física que se adapta a la vida real del cliente. Ese nivel de gestión es lo que separa al PT de Lomas de un entrenador que vende horas sueltas — y es la razón por la que muchos clientes mantienen el mismo entrenador durante 5 o 10 años.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal de alto nivel en Lomas de Chapultepec?',
        a: 'Los entrenadores personales de mayor trayectoria y certificación en Lomas cobran de $800 a $1,800 MXN por sesión de 60 minutos. Los paquetes de 10 sesiones van de $7,000 a $15,000 MXN con descuento de 10-15% sobre el precio suelto. El entrenamiento a domicilio suma $150-$300 MXN de cargo de desplazamiento por sesión. Algunos entrenadores tienen también un cargo de evaluación inicial de $800-$1,200 MXN que incluye diagnóstico de movimiento, composición corporal y diseño del primer mes de programa — que luego se descuenta del primer paquete contratado.',
      },
      {
        q: '¿Cómo encuentro un PT serio en Lomas que no sea solo imagen?',
        a: 'Las señales de un entrenador de nivel real: certificación NSCA-CSCS o NASM-CPT con renovación activa, metodología de evaluación en la primera sesión (no arranca con ejercicios sin diagnóstico previo), programación escrita semana a semana con progresión documentada, y referencias verificables de clientes actuales. En Lomas, muchos entrenadores trabajan por referido dentro de la comunidad residencial — pedile a vecinos o conocidos del barrio una recomendación directa es el método más confiable. Ahorita también hay entrenadores en la zona con perfil LinkedIn verificable donde puedes confirmar certificaciones y experiencia.',
      },
      {
        q: '¿Vale la pena un PT en Lomas vs. contratar uno más barato en Anzures o Polanco?',
        a: 'Si el entrenador en Lomas tiene certificaciones de mayor rigor, experiencia relevante para tu objetivo específico y un historial de resultados documentado con clientes similares a ti, puede valer la diferencia de precio. El problema es que en Lomas, como en cualquier mercado premium, el precio no siempre correlaciona con calidad — hay entrenadores que cobran $1,500 MXN por sesión con menos rigor metodológico que colegas de Anzures que cobran $600 MXN. El criterio correcto es el nivel de evaluación que hacen, la lógica del programa que diseñan y las referencias que pueden mostrar — no el código postal donde trabajan.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$800–$1,800 MXN' },
      { label: 'Paquete 10 sesiones', value: '$7,000–$15,000 MXN' },
      { label: 'Domicilio',           value: '+$150-$300 MXN/sesión' },
      { label: 'Perfil',              value: 'NSCA-CSCS / multidisciplinario' },
    ],
    barrios: [
      { name: 'Polanco',   slug: 'polanco',   district: 'miguel-hidalgo' },
      { name: 'Anzures',   slug: 'anzures',   district: 'miguel-hidalgo' },
      { name: 'Santa Fe',  slug: 'santa-fe-ao', district: 'alvaro-obregon' },
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
    h1: 'Eventos fitness en Lomas de Chapultepec',
    metaDesc: 'Eventos fitness en Lomas de Chapultepec, CDMX: retiros de bienestar, grupos de running y clínicas de rendimiento. Paseo de las Palmas. Guía 2026.',
    intro: `La escena de eventos fitness en Lomas de Chapultepec es discreta por diseño, güey. No hay pop-ups en la calle ni convocatorias abiertas — los eventos son privados, por invitación o para socios activos. El Sports World Lomas organiza clínicas trimestrales con especialistas externos — nutrición deportiva, biomecánica, preparación mental — gratuitas con membresía activa, en grupos de 15-25 personas. Los retiros de wellness de fin de semana son el evento más característico de la comunidad: escapadas de 2 noches a Valle de Bravo, Tepoztlán o Malinalco, con yoga matutino, meditación y alimentación supervisada. El organizador suele ser un estudio boutique o grupo de entrenadores de la zona. El costo va de $4,500 a $9,000 MXN incluyendo hospedaje, con grupos de 8-15 participantes. El Bosque de Chapultepec es el espacio outdoor más utilizado: grupos de running desde la entrada de Palmas a las 6am, cycling en el Circuito del Bosque, bootcamp informal por entrenadores de la zona. La distancia desde Paseo de las Palmas es de 10-15 minutos caminando — acceso cotidiano que pocas colonias del CDMX tienen. Lo que hace especial esta combinación es que el outdoor del Bosque y la instalación del Sports World se complementan sin esfuerzo logístico: quien sale a correr 40 minutos a las 6am y entra al gym a las 7am para su sesión de fuerza tiene todo resuelto en el mismo desplazamiento. Para quien vive en Lomas, esa combinación de parque, instalación premium y comunidad activa convierte el entrenamiento en algo cotidiano y no en una tarea logística.`,
    faq: [
      {
        q: '¿Hay retiros de wellness organizados desde Lomas y cuánto cuestan?',
        a: 'Sí, es el tipo de evento más frecuente en la comunidad fitness de Lomas. Los retiros de fin de semana a Valle de Bravo, Tepoztlán o destinos similares cuestan de $4,500 a $9,000 MXN por persona incluyendo hospedaje, comidas y actividades. Los organizadores suelen ser estudios boutique del barrio o grupos de entrenadores — se anuncian en los grupos de WhatsApp de los socios activos o por Instagram privado de los estudios. Para acceder sin ser socio activo de algún espacio en Lomas, la vía más directa es contactar a un estudio boutique de la zona y preguntar si tienen eventos próximos abiertos a nuevas personas.',
      },
      {
        q: '¿Puedo unirme a grupos de running del Bosque de Chapultepec desde Lomas?',
        a: '¡Ahorita sí, chido! Hay grupos de running que salen desde la entrada del Bosque sobre Paseo de la Reforma y desde la zona de Palmas los sábados entre 6:30 y 8am. Algunos grupos son organizados por gymns de Polanco y Lomas con inscripción libre por WhatsApp; otros son informales y se juntan por costumbre en el mismo punto semana a semana. No hay costo para unirse a los grupos informales. Para los grupos organizados con coach, puede haber cuota de $100-$200 MXN por salida o membresía mensual de $600-$1,000 MXN incluyendo todas las salidas del mes.',
      },
      {
        q: '¿Hay clínicas o eventos de rendimiento deportivo en Lomas?',
        a: 'Las clínicas del Sports World Lomas para socios son las más accesibles — trimestrales, gratuitas con membresía activa, sobre temas de nutrición deportiva, recuperación y rendimiento. Fuera del Sports World, algunos entrenadores de la zona organizan workshops de un día sobre temas específicos: programación de fuerza, técnica de levantamiento olímpico, periodización para no deportistas. El costo de estos workshops va de $800 a $1,800 MXN por persona con grupos de 8-12 personas. Se anuncian principalmente en los canales privados de los entrenadores y no siempre tienen visibilidad pública.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos habituales',  value: 'Retiros wellness / Clínicas' },
      { label: 'Retiro fin de semana', value: '$4,500–$9,000 MXN' },
      { label: 'Running outdoor',     value: 'Bosque de Chapultepec' },
      { label: 'Acceso',              value: 'Socios / referido / grupos' },
    ],
    barrios: [
      { name: 'Polanco',   slug: 'polanco',   district: 'miguel-hidalgo' },
      { name: 'Anzures',   slug: 'anzures',   district: 'miguel-hidalgo' },
      { name: 'Santa Fe',  slug: 'santa-fe-ao', district: 'alvaro-obregon' },
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
    h1: 'Bienestar en Lomas de Chapultepec',
    metaDesc: 'Bienestar en Lomas de Chapultepec, CDMX: spa médico, nutriólogos clínicos y crioterapia de $800 a $2,500 MXN. Paseo de las Palmas. Guía 2026.',
    intro: `El ecosistema de bienestar en Lomas de Chapultepec es el más completo y el más caro del CDMX. Sobre Paseo de las Palmas hay clínicas de medicina funcional, centros de estética médica anti-aging, consultorios de psicología del rendimiento y spas con instalaciones comparables a los mejores hoteles cinco estrellas de la ciudad. Los nutriólogos clínicos trabajan con un protocolo diferente al estándar: análisis de sangre completo antes de diseñar el plan, seguimiento de biomarcadores cada 3 meses, y coordinación con médico internista cuando hay patologías. La consulta inicial va de $1,200 a $2,000 MXN; el seguimiento mensual de $800 a $1,400 MXN — significativamente más que en Anzures o Polanco, con mayor alcance para quien tiene necesidades de salud complejas. Los servicios de recuperación incluyen tecnología no disponible en todos los barrios: crioterapia de cuerpo completo ($900-$1,500 MXN), compresión neumática NormaTec ($500-$800 MXN), fotobiomodulación con luz roja ($600-$1,000 MXN) y cámaras hiperbáricas. No son necesarios para el 95% de quienes entrenan — pero para atletas de alto rendimiento o personas en recuperación de lesiones graves, el acceso local tiene valor práctico real. Lo que distingue a Lomas en bienestar no es solo la tecnología disponible sino la integración del servicio: el nutriólogo, el entrenador y el médico internista pueden comunicarse directamente sobre el mismo cliente, sin que el paciente tenga que ser el intermediario entre especialistas que no se conocen. Ese modelo coordinado, chido y funcional, es difícil de replicar en otros barrios donde los proveedores operan de forma aislada.`,
    faq: [
      {
        q: '¿Qué diferencia hay entre un nutriólogo clínico de Lomas y uno de Polanco?',
        a: 'El nutriólogo clínico de Lomas típicamente trabaja con mayor integración de datos de laboratorio — análisis de sangre completo como punto de partida, seguimiento de biomarcadores cada trimestre, coordinación con médico internista cuando hay patologías de base. El nutriólogo de Polanco puede tener el mismo enfoque (hay excelentes profesionales allá) pero en Lomas la cultura del cliente es más exigente en profundidad del protocolo y la oferta de servicios refleja esa demanda. Para el objetivo de pérdida de grasa con salud general sin patologías complejas, el nutriólogo de Polanco o Anzures entrega el mismo resultado práctico a menor costo.',
      },
      {
        q: '¿Vale la pena la crioterapia de cuerpo completo en Lomas?',
        a: 'Para recuperación post-entrenamiento intensivo — más de 4 sesiones de fuerza a la semana, preparación de competencia, semanas de mayor volumen de entrenamiento — la crioterapia tiene evidencia moderada de beneficio en reducción de inflamación y percepción de recuperación muscular. El costo de $900-$1,500 MXN por sesión en Lomas es alto para hacerlo de forma rutinaria. Como herramienta puntual en semanas de mayor exigencia o en proceso de recuperación de lesión, puede aportar valor real. Para quien entrena 3 veces por semana a intensidad moderada, el agua fría de la regadera después de entrenar hace el 80% del trabajo a costo cero.',
      },
      {
        q: '¿Hay spas con instalaciones completas (alberca, sauna, vapor) en Lomas?',
        a: 'Sí, Lomas tiene spas con instalaciones de formato completo — circuito de aguas con jacuzzi, sauna seca, vapor y alberca — en formato de uso por horas o con membresía mensual. El Sports World Lomas tiene área húmeda incluida en membresías premium. Fuera del Sports World hay spas independientes sobre Paseo de las Palmas y calles paralelas con circuito completo. El uso por sesión va de $800 a $1,800 MXN; las membresías mensuales de $3,500 a $6,000 MXN con acceso ilimitado. Para quien valora el ritual de spa como parte de la rutina de recuperación semanal, Lomas tiene las mejores instalaciones de la Miguel Hidalgo.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición clínica', value: '$1,200–$2,000 MXN' },
      { label: 'Crioterapia cuerpo completo', value: '$900–$1,500 MXN' },
      { label: 'Spa sesión',                 value: '$800–$1,800 MXN' },
      { label: 'Perfil',                     value: 'Medicina funcional / premium' },
    ],
    barrios: [
      { name: 'Polanco',   slug: 'polanco',   district: 'miguel-hidalgo' },
      { name: 'Anzures',   slug: 'anzures',   district: 'miguel-hidalgo' },
      { name: 'Santa Fe',  slug: 'santa-fe-ao', district: 'alvaro-obregon' },
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
