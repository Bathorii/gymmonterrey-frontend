// src/data/cdmx/barrio-tabacalera.ts
// Draft – lastReviewed: 2026-06-27

export const barrioContent = {
  nombre: 'Tabacalera',
  slug: 'tabacalera',
  group: 'C',
  parentDistrict: {
    nombre: 'Cuauhtémoc',
    slug: 'cuauhtemoc',
  },
  lastReviewed: '2026-06-27',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Tabacalera está en ese momento interesante donde el barrio ya no es lo que era y todavía no es lo que va a ser, güey. Sobre Av. Hidalgo y Calle Ezequiel Montes hay galerías nuevas en edificios que fueron fábricas, y también hay la panadería de toda la vida y el gym de barrio que lleva 15 años en la misma planta baja. Metro Hidalgo conecta ahorita con Reforma en minutos y con la Alameda Central a pie. El perfil fitness es NSE C con gentrifación visible pero no completada — los precios todavía no subieron al nivel que subirán cuando el barrio termine de transformarse. Los gymns sobre Ramos Arizpe y Ezequiel Montes sirven a los residentes históricos y a los nuevos inquilinos de los lofts que llegaron por el precio y se quedaron por el barrio. La Alameda Central es el outdoor de facto para quien

Para el vecino de Tabacalera que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Tabacalera en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Tabacalera',
    metaDesc: 'Gimnasios en Tabacalera, CDMX: ~7 opciones de $330 a $820 MXN/mes. Hidalgo, Ezequiel Montes. Cerca de Alameda Central. Guía 2026.',
    intro: `Tabacalera tiene alrededor de 7 gimnasios activos — una cifra que refleja el tamaño real del barrio y la composición de sus usuarios actuales. Sobre Av. Hidalgo y calles internas como Ezequiel Montes y Ramos Arizpe hay gymns de formato mediano que llevan años operando para la comunidad histórica del barrio y que ahorita están viendo llegar nuevos socios desde los departamentos reformados de los edificios fabriles.

El perfil del gym de Tabacalera es de transición: equipos que van de lo básico a lo razonablemente moderno, precios que todavía están en el rango budget de $330 a $820 MXN al mes, y una mezcla de clientes entre el residente de 20 años y el joven profesional que llegó hace seis meses. Esa coexistencia hace el ambiente más interesante que el gym homogéneo de zona premium.

La ventaja logística de Tabacalera es clara: Metro Hidalgo a 5 minutos caminando de la mayoría de los gymns, Metrobús sobre Hidalgo y la Alameda Central a pie para quien prefiere complementar el gym con outdoor. Para quien trabaja en Reforma o en el Centro y vive en Tabacalera, el acceso al gym antes o después del trabajo es más fácil que en casi cualquier otro barrio de Cuauhtémoc. Ahorita es el momento de aprovechar los precios antes de que el barrio termine su proceso de transformación y los ajuste al alza.`,
    faq: [
      {
        q: '¿Cuánto cuesta un gimnasio en Tabacalera?',
        a: 'Las membresías mensuales en Tabacalera van de $330 a $820 MXN. Las cadenas de bajo costo están en el piso del rango; los gimnasios independientes de Tabacalera con más servicios o equipo nuevo suben hasta $820 MXN. La inscripción inicial varía de $150 a $350 MXN. El precio en Tabacalera es comparable con Doctores y Obrera — el proceso de gentrificación todavía no subió los precios al nivel que tienen barrios más transformados como Roma Norte. Para quien quiere budget gym cerca de Reforma o del Centro, Tabacalera tiene la mejor relación precio-acceso de la zona.',
      },
      {
        q: '¿Hay algún gym cerca de la Alameda Central en Tabacalera?',
        a: 'Sí, güey. Varios gymns de Tabacalera están a 5-10 minutos caminando de la Alameda Central, lo que hace conveniente combinar sesión de gym interior con caminata o running en la Alameda. La Alameda tiene circuito de caminata de aproximadamente 1.2 km alrededor del perímetro — completamente plano y con sombra de árboles. Para quien quiere warm-up o cool-down al aire libre antes o después del gym, la combinación es perfecta. En la mañana de lunes a viernes entre 6 y 8am la Alameda está tranquila y es el mejor momento para usarla.',
      },
      {
        q: '¿Los gymns de Tabacalera tienen estacionamiento?',
        a: 'El estacionamiento en calle sobre Av. Hidalgo está restringido por el alto tráfico de la zona. Las calles internas del barrio — Ezequiel Montes, Ramos Arizpe — tienen más disponibilidad de estacionamiento libre pero requieren caminar 5-8 minutos hasta el gym. Hay estacionamientos de piso en la zona a $30-$50 MXN por hora. Para quien viene en coche, el horario ideal es antes de las 8am cuando la demanda de estacionamiento sobre Hidalgo es menor. La opción más conveniente sigue siendo Metro Hidalgo — 2 líneas, sin transbordo desde la mayoría de los puntos de CDMX.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Tabacalera tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Tabacalera suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~7' },
      { label: 'Membresía mensual', value: '$330–$820 MXN' },
      { label: 'Referente',         value: 'Av. Hidalgo / Ezequiel Montes' },
      { label: 'Outdoor cercano',   value: 'Alameda Central (5 min)' },
    ],
    barrios: [
      { name: 'Centro',              slug: 'centro',              district: 'cuauhtemoc' },
      { name: 'Guerrero',            slug: 'guerrero',            district: 'cuauhtemoc' },
      { name: 'Santa María la Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
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
    h1: 'Estudios en Tabacalera',
    metaDesc: 'Estudios fitness en Tabacalera, CDMX: funcional, yoga y danza de $90 a $210 MXN/clase. Hidalgo, Ramos Arizpe. Cerca de Alameda Central. Guía 2026.',
    intro: `Tabacalera tiene algo que pocos barrios en transición logran sostener al mismo tiempo: estudios de fitness accesibles para los residentes históricos y espacios creativos emergentes que empiezan a atraer usuarios de otras zonas. El resultado es una oferta heterogénea que va del funcional de barrio al estudio de yoga en nave industrial reconvertida — todo en un radio de 10 cuadras.

Los gymns de Tabacalera incluyen clases de grupo en su membresía sin cargo adicional: funcional, aeróbics, yoga básico y body combat como los formatos más comunes. El precio mensual de $330-$820 MXN ya cubre esas clases. Para quien quiere variedad en una semana sin multiplicar el gasto, ese modelo es el más eficiente.

Los espacios independientes que empezaron a aparecer en Tabacalera en los últimos 3-4 años — influencia del proceso de gentrificación del barrio — tienen un perfil más boutique: yoga con enfoque más serio, funcional con programación periodizada, algunos con colectivos de danza contemporánea. El precio de clase suelta va de $90 a $210 MXN — todavía por debajo del estándar de Roma Norte y Condesa. Ahorita es el momento óptimo para aprovechar esa brecha antes de que el barrio termine su transformación y los precios se ajusten al nuevo perfil socioeconómico.`,
    faq: [
      {
        q: '¿Hay estudios de yoga serios en Tabacalera?',
        a: 'Hay opciones de yoga en Tabacalera en dos formatos: yoga de gym incluido en membresía mensual (Hatha básico, yoga de relajación) y estudios independientes emergentes con enfoque más técnico. Los estudios independientes están sobre calles internas del barrio y en algunos edificios reformados donde el espacio permite grupos pequeños de 8-12 personas. La clase suelta va de $100 a $200 MXN. No es el ecosistema denso de yoga de Roma Norte — pero hay dos o tres espacios con instructoras serias que llevan años de práctica y que están estableciendo comunidad en el barrio. Vale explorarlo ahorita antes de que suban precios.',
      },
      {
        q: '¿Hay funcional o crosstraining en Tabacalera?',
        a: '¡Sí, güey! Hay espacios de funcional emergentes sobre Ramos Arizpe y calles del barrio con grupos de 8-15 personas y coaches con programación real — no solo circuitos improvisados. El formato es más informal que un box afiliado pero más estructurado que una clase de gym genérica. La clase suelta va de $90 a $180 MXN; el plan mensual de $550 a $950 MXN. Para quien vive en Tabacalera y quiere entrenamiento funcional sin ir a Roma Norte o Condesa, estos espacios cubren el objetivo con calidad real y precio todavía accesible.',
      },
      {
        q: '¿Hay estudios de danza o movimiento artístico en Tabacalera?',
        a: 'Tabacalera está desarrollando una escena de danza contemporánea y movimiento creativo que tiene sentido dado el perfil artístico del barrio en proceso de gentrificación. Hay colectivos de danza que dan clases abiertas periódicamente en naves industriales reconvertidas y en espacios culturales del barrio — algunos gratuitos, otros con cooperación de $100-$250 MXN. El Centro Cultural del Bosque, cercano al barrio, también tiene programación de danza con clases abiertas. Para movimiento creativo con contexto cultural, Tabacalera es la opción más interesante del norte de Cuauhtémoc.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~6' },
      { label: 'Clase suelta',      value: '$90–$210 MXN' },
      { label: 'Mensual ilimitado', value: '$550–$950 MXN' },
      { label: 'Tendencia',         value: 'Emergente / en gentrificación' },
    ],
    barrios: [
      { name: 'Centro',              slug: 'centro',              district: 'cuauhtemoc' },
      { name: 'Guerrero',            slug: 'guerrero',            district: 'cuauhtemoc' },
      { name: 'Santa María la Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
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
    h1: 'Entrenadores personales en Tabacalera',
    metaDesc: 'Entrenadores personales en Tabacalera, CDMX: PT de $300 a $650 MXN/sesión. Hidalgo, Ezequiel Montes. Precio pre-gentrificación. Guía 2026.',
    intro: `El personal training en Tabacalera está en un momento de ventana: los precios todavía responden al mercado histórico del barrio pero los entrenadores que están llegando al barrio con el proceso de gentrificación tienen el perfil de zonas más caras. Para quien contrata PT en Tabacalera ahorita, el precio puede ser de barrio C con calidad que en 2-3 años va a costar precio de barrio B.

Los entrenadores establecidos en Tabacalera cobran entre $300 y $650 MXN por sesión — consistente con el rango de Doctores y Obrera. Los entrenadores emergentes que llegaron con el cambio del barrio están en el mismo rango por el momento, aunque algunos tienen credenciales y especializaciones que en otras zonas cobrarían $800-$1,000 MXN por sesión. Esa brecha temporal es una oportunidad real para quien está buscando PT ahora.

La proximidad a la Alameda Central hace que algunos entrenadores de Tabacalera incluyan sesiones outdoor como parte del programa de entrenamiento: running, calistenia, trabajo de agilidad en el parque complementando las sesiones de gym interior. Ese modelo mixto no cuesta más y añade variedad real al entrenamiento. Para quien valora el outdoor dentro del programa de PT, Tabacalera es el único barrio de Cuauhtémoc donde eso es logísticamente natural dentro del mismo barrio.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Tabacalera?',
        a: 'Una sesión individual de PT en Tabacalera va de $300 a $650 MXN según el perfil y experiencia del entrenador. Los paquetes de 10 sesiones van de $2,500 a $5,500 MXN con descuento de 10-15% sobre precio suelto. Para sesiones que incluyan trabajo en Alameda Central como complemento al gym, la mayoría de los entrenadores no cobran extra por el desplazamiento dado que la distancia es mínima. Comparado con entrenadores equivalentes en Reforma o Polanco ($700-$1,400 MXN/sesión), el ahorro en Tabacalera es significativo y se proyecta a aumentar conforme el barrio suba de nivel.',
      },
      {
        q: '¿Hay entrenadores especializados en fuerza o powerlifting en Tabacalera?',
        a: 'Hay entrenadores en Tabacalera con especialización en fuerza y entrenamiento de resistencia progresiva — no necesariamente powerlifting puro de competición, pero sí programación seria con sentadilla, press, peso muerto y progresión de carga real. El número es menor que en zonas con tradición de box o gym de fuerza establecido, pero los que están tienen conocimiento actualizado. Para powerlifting de competición con coaching específico, Doctores y algunas zonas del norte de la ciudad tienen opciones más consolidadas.',
      },
      {
        q: '¿Cómo encuentro un entrenador personal en Tabacalera?',
        a: 'El método más directo es presentarte en los gymns de Av. Hidalgo y Ezequiel Montes y preguntar por entrenadores disponibles. También puedes buscar en Instagram con geotag de Tabacalera o preguntar en grupos de Facebook de vecinos del barrio. Algunos entrenadores emergentes del barrio tienen perfil activo en Instagram con contenido de entrenamiento — es la forma más fácil de evaluar su enfoque antes de contactarlos. El primer contacto suele ser por WhatsApp y el primer diagnóstico generalmente no tiene costo. Ahorita el acceso es más directo que en zonas con lista de espera.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$300–$650 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,500–$5,500 MXN' },
      { label: 'Ventaja actual',      value: 'Precio pre-gentrificación' },
      { label: 'Outdoor integrado',   value: 'Alameda Central (5 min)' },
    ],
    barrios: [
      { name: 'Centro',              slug: 'centro',              district: 'cuauhtemoc' },
      { name: 'Guerrero',            slug: 'guerrero',            district: 'cuauhtemoc' },
      { name: 'Santa María la Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
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
    h1: 'Eventos fitness en Tabacalera',
    metaDesc: 'Eventos fitness en Tabacalera, CDMX: clases en Alameda, retos de gym y cultura en movimiento de $0 a $250 MXN. Hidalgo. Guía 2026.',
    intro: `Tabacalera tiene una ventaja de eventos que los barrios más caros no pueden comprar: la Alameda Central a 5 minutos y el proceso de gentrificación que está generando una programación cultural emergente en edificios históricos del barrio. La combinación produce eventos de movimiento que van desde el running matutino gratuito en la Alameda hasta exhibiciones de danza contemporánea en naves industriales reconvertidas — sin que nada de eso te cueste más de $250 MXN.

Los gimnasios de Tabacalera organizan retos internos con la misma lógica que en Doctores o Tlatelolco: asistencia mensual, rendimiento en ejercicios benchmark, progresión de carga en 6 semanas. Sin premiación económica, sin sponsor — solo métrica real y comunidad que se conoce. Para quien entrena para mejorar algo concreto, ese formato entrega lo que promete.

Los eventos culturales de movimiento que están apareciendo en Tabacalera son los más interesantes desde la perspectiva de fitness alternativo: colectivos de danza contemporánea con clases abiertas en espacios industriales, talleres de movimiento somático en galerías del barrio, y caminatas culturales guiadas los domingos que funcionan como outdoor social sin etiqueta de fitness. Ahorita Tabacalera es el barrio con la propuesta de eventos de movimiento más heterogénea y sorpresiva de toda la alcaldía Cuauhtémoc.`,
    faq: [
      {
        q: '¿Se puede hacer running en la Alameda Central desde Tabacalera?',
        a: '¡Ahorita sí, güey, y es una de las mejores combinaciones del barrio! La Alameda Central está a 5 minutos caminando desde la mayoría de los gymns de Tabacalera sobre Av. Hidalgo. El circuito perimetral de la Alameda es de aproximadamente 1.2 km en superficie plana con sombra de árboles — perfecto para warm-up o cool-down de 2-3 vueltas antes o después del gym. En la mañana entre 6 y 8am la Alameda es tranquila y es el mejor momento. Para running de distancia mayor, el Bosque de Chapultepec está a 3-4 paradas de Metro.',
      },
      {
        q: '¿Hay eventos culturales de movimiento en Tabacalera?',
        a: 'Sí, y son únicos en Cuauhtémoc. Varios espacios culturales del barrio — galerías en edificios industriales reconvertidos, centros comunitarios históricos — tienen programación periódica de danza contemporánea, movimiento somático y clases de yoga en colaboración con artistas y colectivos del barrio. La frecuencia es irregular — no hay un calendario fijo — pero hay actividad real. La mejor forma de enterarse es seguir a los espacios culturales de Tabacalera en Instagram: La Fábrica Centro Histórico y otros espacios similares anuncian eventos con 5-10 días de anticipación.',
      },
      {
        q: '¿Hay caminatas o tours activos en Tabacalera?',
        a: 'Hay caminatas guiadas de arquitectura e historia del barrio organizadas por colectivos culturales de Tabacalera que funcionan como outdoor social activo — 2-3 horas caminando por el barrio con guía sobre la historia de los edificios fabriles y el proceso de transformación. El precio suele ser de $80-$200 MXN o cooperación libre. No son caminatas fitness con pulsómetro y estadísticas — son caminatas culturales con 3-5 km de recorrido que se hacen caminando rápido. Para quien quiere actividad outdoor con contenido, es la propuesta más original del barrio.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos regulares', value: 'Mensuales' },
      { label: 'Precio habitual',   value: '$0–$250 MXN' },
      { label: 'Outdoor referente', value: 'Alameda Central' },
      { label: 'Diferencial',       value: 'Eventos culturales de movimiento' },
    ],
    barrios: [
      { name: 'Centro',              slug: 'centro',              district: 'cuauhtemoc' },
      { name: 'Guerrero',            slug: 'guerrero',            district: 'cuauhtemoc' },
      { name: 'Santa María la Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
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
    h1: 'Bienestar en Tabacalera',
    metaDesc: 'Bienestar en Tabacalera, CDMX: nutriólogos, masaje y terapias de $250 a $700 MXN. Hidalgo, Ramos Arizpe. Cerca Alameda Central. Guía 2026.',
    intro: `El bienestar en Tabacalera está viviendo el mismo proceso que el barrio entero: convivencia entre lo histórico y lo emergente. Sobre Av. Hidalgo y calles internas hay consultorios de nutrición con años de práctica que sirven a los residentes de siempre, y ahorita están apareciendo espacios de bienestar más modernos — masaje deportivo especializado, terapias de recuperación — atraídos por el nuevo perfil de usuario del barrio en gentrificación.

Los consultorios de nutrición de Tabacalera trabajan principalmente con objetivos de salud general y composición corporal, con metodología práctica adaptada a quien come fuera de casa la mayor parte del tiempo. La consulta inicial va de $380 a $700 MXN y los seguimientos de $250 a $450 MXN. Para el nivel de atención, el precio está por debajo de zonas como Reforma o Santa María la Ribera donde la misma calidad de consulta cuesta $700-$1,000 MXN.

El masaje de recuperación muscular en Tabacalera va de $270 a $580 MXN por sesión de 60 minutos — rango accesible para quien entrena con frecuencia y quiere sostener la recuperación semanal sin sobrepasar el presupuesto. Ahorita hay una brecha real entre el precio de bienestar en Tabacalera y el de barrios cercanos más caros como Reforma o Roma Norte — esa brecha se va a cerrar conforme avance el proceso de gentrificación. Para quien vive o trabaja en el barrio, el momento de consolidar la rutina de bienestar con los precios actuales es ahora.`,
    faq: [
      {
        q: '¿Hay nutriólogos en Tabacalera cerca del Metro Hidalgo?',
        a: 'Sí, hay consultorios de nutrición sobre Av. Hidalgo y Ezequiel Montes a 5-10 minutos caminando desde Metro Hidalgo. El acceso en transporte público desde cualquier punto de la ciudad es directo — Metro Hidalgo está en Línea 2 y conecta con Bellas Artes (Líneas 2 y 8), Hidalgo (Líneas 2 y 3) y toda la red. La consulta inicial va de $380 a $700 MXN e incluye evaluación de composición corporal y plan alimenticio. Para quien trabaja en Reforma o en el Centro y quiere una cita de nutrición antes o después del trabajo, Tabacalera es logísticamente conveniente.',
      },
      {
        q: '¿Qué servicios de masaje hay en Tabacalera?',
        a: 'Hay centros de masaje sobre Ramos Arizpe y calles del barrio con servicios de deep tissue, relajación general y liberación miofascial a $270-$580 MXN por 60 minutos. Algunos espacios emergentes del barrio — asociados al proceso cultural de gentrificación — ofrecen masaje con enfoque holístico o técnicas de masaje thai y ayurvédico a precios similares. Para masaje deportivo de recuperación post-entrenamiento, los centros más especializados están sobre Hidalgo o en el límite con Centro. La calidad varía — pedí referencias antes de reservar.',
      },
      {
        q: '¿Hay terapias alternativas o de bienestar holístico en Tabacalera?',
        a: '¡Ahorita sí, güey, y es uno de los efectos más interesantes de la gentrificación del barrio! Están apareciendo espacios de acupuntura, reiki, terapia de sonido y meditación guiada en edificios históricos reformados de Tabacalera. El precio varía por servicio: acupuntura de $400-$700 MXN, reiki de $300-$500 MXN, sesiones de meditación grupal de $100-$200 MXN. No son los mismos espacios que sirven a los residentes históricos — son espacios nuevos que llegaron con el nuevo perfil del barrio. Para bienestar holístico accesible con ambiente artístico, Tabacalera es la opción más sorprendente de Cuauhtémoc en 2026.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$380–$700 MXN' },
      { label: 'Masaje deportivo 60m', value: '$270–$580 MXN' },
      { label: 'Terapias alternativas', value: '$100–$700 MXN' },
      { label: 'Tendencia',            value: 'Wellness emergente en gentrificación' },
    ],
    barrios: [
      { name: 'Centro',              slug: 'centro',              district: 'cuauhtemoc' },
      { name: 'Guerrero',            slug: 'guerrero',            district: 'cuauhtemoc' },
      { name: 'Santa María la Ribera', slug: 'santa-maria-la-ribera', district: 'cuauhtemoc' },
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
