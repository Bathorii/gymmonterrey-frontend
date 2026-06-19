// src/data/cdmx/barrio-asturias.ts
// Draft – lastReviewed: 2026-06-28

export const barrioContent = {
  nombre: 'Asturias',
  slug: 'asturias',
  group: 'C',
  parentDistrict: {
    nombre: 'Cuauhtémoc',
    slug: 'cuauhtemoc',
  },
  lastReviewed: '2026-06-28',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Asturias es uno de esos barrios de CDMX que la gente cruza sin detenerse, güey, pero quien vive sobre Calle Asturias o cerca de Av. Álvaro Obregón sabe que la infraestructura del día a día está resuelta y el fitness también. El perfil es NSE C con inclinación a budget y mid-range: gente que quiere un gym que funcione sin pagar la marca del barrio de moda. El Metro Álvaro Obregón en Línea 8 conecta ahorita con todo el eje este-oeste de Cuauhtémoc. El Metrobús sobre Eje 3 Sur cubre el tráfico vertical. La frontera con Álvaro Obregón le da a Asturias una accesibilidad real desde colonias vecinas sin el costo de las zonas más cotizadas. Los gymns sobre Calle Asturias y Av. Álvaro Obregón son establecimientos de formato gym de volumen: salas amplias, equipos de pesas y cardio, membresías mensuales sin contratos anuales obligatorios. La comunidad es

Para el vecino de Asturias que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Asturias en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Asturias — budget-mid sin rodeos, Cuauhtémoc 2026',
    metaDesc: 'Gimnasios en Asturias, CDMX: ~8 opciones de $300 a $900 MXN/mes. Calle Asturias, Av. Álvaro Obregón, Eje 3 Sur. Budget gym barrial. Guía 2026.',
    intro: `Asturias tiene alrededor de 8 gimnasios activos, con la mayor concentración sobre Calle Asturias y el tramo de Av. Álvaro Obregón que corre como límite sur del barrio. El formato predominante es gym de volumen con membresía mensual accesible: salas de pesas con equipos completos, área cardiovascular, y clases grupales incluidas en la cuota sin cargos adicionales. El usuario típico es vecino del barrio o trabajador de la zona que prioriza efectividad y horario sobre diseño de interiores.

El rango de precios va de $300 a $900 MXN al mes, posicionando a Asturias en la franja budget-mid de toda la alcaldía Cuauhtémoc. Las cadenas de bajo costo tienen presencia por la alta densidad habitacional entre Eje 3 Sur y la frontera con Álvaro Obregón. Los gymns independientes compiten con precio similar pero con más personalización en atención y horarios adaptados al barrio.

Lo que hace funcional a los gymns de Asturias es la relación entre costo, equipamiento y acceso. Ahorita la membresía mensual sin anualidad es el modelo estándar — ideal para quien tiene horarios irregulares o no quiere compromiso de largo plazo. Los equipos de pesas libres son el punto fuerte: mancuernas, barras olímpicas y racks disponibles sin lista de espera. Para quien compara con Condesa o Roma Norte pagando $1,500 MXN o más, Asturias entrega el 85% del entrenamiento al 50% del precio. La diferencia no está en el hierro — está en el código postal.`,
    faq: [
      {
        q: '¿Cuánto cuesta una membresía de gym en Asturias?',
        a: 'Las membresías en Asturias van de $300 a $900 MXN al mes. Las cadenas de bajo costo están en el rango de $300-$500 MXN sin inscripción anual obligatoria. Los gymns independientes con más equipo o servicios adicionales llegan a $700-$900 MXN mensual. La inscripción inicial en cadenas suele ser de $150-$300 MXN; en independientes puede ser gratuita con contrato mensual. Comparado con barrios premium de Cuauhtémoc como Polanco o Roma Norte, el ahorro en Asturias es de $500 a $1,200 MXN por mes según el tipo de gym elegido.',
      },
      {
        q: '¿Los gymns de Asturias tienen estacionamiento?',
        a: 'La mayoría de los gymns sobre Calle Asturias y Av. Álvaro Obregón no tienen estacionamiento propio, pero el estacionamiento en calle es más fácil de encontrar que en Condesa o Roma Norte. Hay algunos estacionamientos públicos de cuota en la zona. Para quien viene en transporte público, el Metro Álvaro Obregón (Línea 8) y el Metrobús sobre Eje 3 Sur cubren el acceso desde la mayor parte de la alcaldía. La mayoría de socios del barrio llegan caminando o en Metro — el gym está a distancia razonable del transporte.',
      },
      {
        q: '¿Hay gymns con alberca en Asturias?',
        a: 'Ahorita los gymns de Asturias no tienen alberca en sus instalaciones principales. El formato es gym de volumen seco: pesas, cardio, clases grupales. Para natación, la opción más cercana es algún centro deportivo de la alcaldía Cuauhtémoc o instalaciones en Doctores y Centro Histórico. Si la alberca es prioridad, vale la pena revisar la oferta de unidades deportivas públicas de la alcaldía que tienen cuota accesible para vecinos con credencial de la Ciudad. Preguntá en el gym más cercano — a veces tienen convenio con instalaciones deportivas del gobierno local.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Asturias tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Asturias suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~8' },
      { label: 'Membresía mensual', value: '$300–$900 MXN' },
      { label: 'Referente',         value: 'Calle Asturias / Av. Álvaro Obregón' },
      { label: 'Acceso Metro',      value: 'Metro Álvaro Obregón' },
    ],
    barrios: [
      { name: 'Obrera',    slug: 'obrera',    district: 'cuauhtemoc' },
      { name: 'Doctores',  slug: 'doctores',  district: 'cuauhtemoc' },
      { name: 'Tránsito',  slug: 'transito',  district: 'cuauhtemoc' },
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
    h1: 'Estudios en Asturias',
    metaDesc: 'Estudios fitness en Asturias, CDMX: funcional y clases de grupo de $80 a $170 MXN/clase. Calle Asturias, Eje 3 Sur. Guía 2026.',
    intro: `Los estudios boutique en Asturias son escasos — el formato que manda en el barrio es el gym de volumen con clases incluidas en membresía. Sobre Calle Asturias y calles secundarias hay algunos espacios de funcional y clases grupales más enfocadas que funcionan bien para quien quiere algo con más estructura que una clase abierta de gym tradicional.

El formato más accesible son las clases grupales dentro de los gimnasios de Asturias: aeróbics, body pump, funcional y yoga básico incluidos en la membresía mensual de $300-$900 MXN. Sin reserva de app, sin cupo cotizado por clase — llegas, anotás el nombre y entrás. El instructor de barrio conoce a los regulares y adapta la intensidad al grupo.

Los espacios independientes de funcional sobre Eje 3 Sur y calles internas de Asturias trabajan con grupos de 8-12 personas con enfoque en circuitos de fuerza y resistencia cardiovascular. La clase suelta va de $80 a $170 MXN. El plan mensual de clases ilimitadas de $500 a $850 MXN. Para quien quiere variedad sin manejar a Roma Norte, la oferta de Asturias cubre entrenamiento funcional, cardio de alta intensidad y yoga introductorio sin salir del barrio. Ahorita la relación precio-calidad es muy chida para quien vive en la zona.`,
    faq: [
      {
        q: '¿Hay clases de funcional o HIIT en Asturias?',
        a: 'Sí, güey. Hay algunos espacios de funcional sobre calles internas de Asturias y sobre Eje 3 Sur que trabajan con grupos reducidos y metodología de circuitos. Las clases incluyen trabajo de fuerza funcional, resistencia cardiovascular y movilidad. El precio suelto va de $80 a $170 MXN; el plan mensual de $500 a $850 MXN para frecuencia ilimitada. El nivel va desde principiantes hasta usuarios con experiencia de entrenamiento. Para HIIT específico, varios gymns de volumen del barrio incluyen clases de alta intensidad en su membresía mensual sin costo adicional.',
      },
      {
        q: '¿Qué tan fácil es llegar a los estudios de Asturias en transporte?',
        a: 'Muy fácil, güey. El Metro Álvaro Obregón en Línea 8 conecta directo. El Metrobús sobre Eje 3 Sur cubre el acceso desde el norte y sur de la alcaldía. Desde Obrera, Doctores o Tránsito el trayecto es de 5-10 minutos en Metro o caminando. Desde zonas más alejadas como Centro o Tepito, el Metro en Línea 8 llega sin transbordo. Para quien viene en coche, el estacionamiento en calle sobre Calle Asturias es más accesible que en barrios con más demanda.',
      },
      {
        q: '¿Hay clases de yoga en Asturias?',
        a: 'La oferta de yoga en Asturias es principalmente yoga de gym incluido en membresía: Hatha básico y yoga de relajación dentro de los gimnasios de Asturias. Hay uno o dos espacios independientes que dan clases con algo más de profundidad técnica a $100-$170 MXN la clase suelta. No es el ecosistema de yoga de Roma Norte con múltiples estilos y certificaciones — pero para práctica regular con instructor consistente y precio accesible, la oferta de Asturias funciona bien para principiantes y practicantes intermedios. Para estilos avanzados, Roma Norte está a 15-20 minutos en transporte.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~4' },
      { label: 'Clase suelta',      value: '$80–$170 MXN' },
      { label: 'Mensual ilimitado', value: '$500–$850 MXN' },
      { label: 'Especialidad',      value: 'Funcional / Clases grupales' },
    ],
    barrios: [
      { name: 'Obrera',    slug: 'obrera',    district: 'cuauhtemoc' },
      { name: 'Doctores',  slug: 'doctores',  district: 'cuauhtemoc' },
      { name: 'Tránsito',  slug: 'transito',  district: 'cuauhtemoc' },
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
    h1: 'Entrenadores personales en Asturias',
    metaDesc: 'Entrenadores personales en Asturias, CDMX: PT certificados de $270 a $580 MXN/sesión. Calle Asturias, Eje 3 Sur. Sin sobreprecio de zona. Guía 2026.',
    intro: `El personal training en Asturias tiene uno de los precios más accesibles de toda la alcaldía Cuauhtémoc para un nivel de certificación equivalente. Los entrenadores que operan en los gymns de Calle Asturias y Av. Álvaro Obregón cobran entre $270 y $580 MXN por sesión — significativamente menos que entrenadores con el mismo perfil en Roma Norte, Condesa o Polanco. El mercado local define el precio, no el aspiracional del barrio.

La calidad de certificación no baja con el precio. Hay PTs en Asturias con NASM, ENMH y certificaciones de la Federación Mexicana de Actividad Física que llevan años trabajando con clientes de objetivos variados: reducción de grasa, aumento de masa muscular, fortalecimiento general y preparación física para adultos mayores. El conocimiento es el mismo — la dirección del gym es diferente.

Para quien trabaja jornadas largas en la zona o viene de barrios limítrofes como Doctores, Tránsito u Obrera, los entrenadores de Asturias tienen experiencia en programas adaptados a agendas ajustadas y energía variable. Ahorita el PT en Asturias es la opción más chida para quien quiere resultados reales sin destinar $1,500-$2,500 MXN por semana en entrenamiento personalizado. La diferencia con Polanco no es la metodología — es el código postal del local.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Asturias?',
        a: 'Una sesión individual con PT certificado en Asturias va de $270 a $580 MXN. Los paquetes de 10 sesiones van de $2,200 a $4,800 MXN con descuento de 10-15% sobre precio suelto. Para sesiones a domicilio dentro del barrio hay un cargo adicional de $60-$100 MXN. Comparado con Roma Norte ($450-$900 MXN/sesión) o Polanco ($700-$1,400 MXN/sesión), el ahorro en Asturias es muy real. Para quien quiere PT 3 veces por semana, la diferencia mensual frente a zonas premium puede ser de $3,000 a $7,000 MXN.',
      },
      {
        q: '¿Los entrenadores de Asturias trabajan con personas mayores o en rehabilitación?',
        a: 'Sí, güey. Varios entrenadores del barrio tienen experiencia con adultos mayores — programas de fortalecimiento, equilibrio y movilidad adaptados a limitaciones físicas — y con usuarios en proceso de rehabilitación post-lesión coordinando con fisioterapeutas de la zona. El precio por sesión es el mismo rango: $270-$580 MXN. El enfoque es más conservador y el ritmo de progresión más controlado que en PT convencional de alto rendimiento. Pedí referencias específicas en el perfil de cliente que te corresponde antes de contratar.',
      },
      {
        q: '¿Cómo encuentro un entrenador personal en Asturias?',
        a: 'El método más directo es ir a los gymns de Calle Asturias o Av. Álvaro Obregón y preguntar por entrenadores de planta o independientes que operen ahí. La mayoría tiene tablón físico de contactos o grupo de WhatsApp del gym. También puedes buscar en Instagram con geotag de Asturias o referencias en grupos de Facebook del barrio. En Asturias no hay plataformas de reserva online — el contacto es por WhatsApp o en persona. Ahorita ese formato es el estándar en la zona y funciona bien para ambas partes.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$270–$580 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,200–$4,800 MXN' },
      { label: 'Vs. Roma Norte',      value: '35-40% más accesible' },
      { label: 'Especialidad',        value: 'Fuerza / Adultos mayores' },
    ],
    barrios: [
      { name: 'Obrera',    slug: 'obrera',    district: 'cuauhtemoc' },
      { name: 'Doctores',  slug: 'doctores',  district: 'cuauhtemoc' },
      { name: 'Tránsito',  slug: 'transito',  district: 'cuauhtemoc' },
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
    h1: 'Eventos fitness en Asturias',
    metaDesc: 'Eventos fitness en Asturias, CDMX: retos de gym, clases abiertas y actividad barrial de $0 a $200 MXN. Guía 2026.',
    intro: `Los eventos fitness en Asturias son el reflejo del barrio: sin producción elaborada, sin patrocinadores de suplementos boutique, sin transmisión en vivo con drone. Lo que hay es comunidad real, güey — vecinos que se conocen en el gym desde hace años y que compiten entre sí en retos de rendimiento trimestrales organizados por los propios gimnasios de Asturias.

El formato más común son los retos internos de asistencia y rendimiento: quién sostiene más semanas consecutivas, quién supera su marca en press de banca o en la caminadora. Sin premiación económica, solo reconocimiento del grupo y motivación genuina. Para quien entrena con motivación social, ese formato funciona mejor que cualquier challenge de app.

Los eventos de acceso libre se dan con menos frecuencia que en barrios con más presupuesto de marketing, pero existen: clases abiertas en fechas especiales, ocasionalmente actividad física en la calle en colaboración con la alcaldía. Sobre Av. Álvaro Obregón hay también eventos barriales más amplios que incluyen actividad física como parte del programa. Ahorita el ecosistema de eventos de Asturias está creciendo lentamente — sin show, pero con constancia. Para quien valora la autenticidad, es el momento de sumarse. Los gymns del sector suelen comunicar sus actividades por WhatsApp a socios activos — la forma más efectiva de enterarse es preguntar en recepción.`,
    faq: [
      {
        q: '¿Hay eventos de fitness abiertos al público en Asturias?',
        a: 'Sí, aunque menos frecuentes que en barrios más visibles. Los gimnasios de Asturias organizan retos internos trimestrales y clases abiertas en fechas especiales como Año Nuevo o inicio de verano. La entrada es gratuita o con cooperación de $50-$100 MXN. Los eventos se anuncian en Instagram de los gymns y en el tablón físico con 3-5 días de anticipación. Para eventos más grandes de la zona, Av. Álvaro Obregón concentra actividad barrial periódica que incluye fitness al aire libre.',
      },
      {
        q: '¿Cómo me entero de eventos y clases abiertas en Asturias?',
        a: 'Lo más efectivo es seguir los perfiles de Instagram de los gymns de Calle Asturias y activar notificaciones. Los grupos de WhatsApp de los gimnasios de Asturias son el canal más rápido para avisos de último momento. También hay grupos de Facebook de vecinos de Asturias y Obrera donde se anuncian eventos de la zona. A diferencia de barrios con más marketing digital, en Asturias los anuncios van a último momento — si ya eres socio de algún gym, pedí que te agreguen al grupo de comunicación del local.',
      },
      {
        q: '¿Hay actividad outdoor o grupos de running en Asturias?',
        a: 'No hay parque grande en Asturias, pero hay plazas y explanadas donde se organizan caminatas grupales matutinas de forma informal. Para running serio, el Bosque de Chapultepec es el punto más accesible: desde Metro Álvaro Obregón hay 3-5 paradas en Línea 1 hasta Chapultepec. Algunos gimnasios de Asturias organizan salidas de running o caminata los fines de semana. Ahorita preguntá directamente en el gym de tu interés si tiene grupo activo — en varios lo hay de forma informal sin publicidad en redes.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos regulares', value: 'Trimestrales' },
      { label: 'Precio habitual',   value: '$0–$200 MXN' },
      { label: 'Formato estrella',  value: 'Retos internos de gym' },
      { label: 'Outdoor cercano',   value: 'Chapultepec (3-5 paradas Metro)' },
    ],
    barrios: [
      { name: 'Obrera',    slug: 'obrera',    district: 'cuauhtemoc' },
      { name: 'Doctores',  slug: 'doctores',  district: 'cuauhtemoc' },
      { name: 'Tránsito',  slug: 'transito',  district: 'cuauhtemoc' },
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
    h1: 'Bienestar en Asturias',
    metaDesc: 'Bienestar en Asturias, CDMX: nutriólogos y masaje deportivo de $200 a $600 MXN. Calle Asturias, Eje 3 Sur. Sin precio de zona premium. Guía 2026.',
    intro: `El bienestar en Asturias es funcional y accesible — sin las instalaciones de spa de Polanco ni el branding aspiracional de Condesa, pero con servicios de nutrición, masaje deportivo y fisioterapia que cubren las necesidades de quien entrena en el barrio sin presupuesto de zona premium. Lo que hay en Asturias es honesto, güey — precio real para vecino real.

Los consultorios de nutrición sobre Calle Asturias y calles aledañas tienen enfoque práctico: composición corporal, plan alimenticio adaptado a jornadas de trabajo variables y seguimiento periódico. La consulta inicial va de $350 a $600 MXN y los seguimientos de $200 a $380 MXN. El perfil del profesional es nutriólogo con especialización clínica o deportiva — la diferencia con Roma Norte no es la formación, es el alquiler del consultorio.

El masaje deportivo y la fisioterapia son los servicios más demandados en el barrio por el perfil de trabajadores manuales y de servicios con carga física acumulada. Una sesión de masaje de recuperación de 60 minutos va de $240 a $520 MXN. Fisioterapia deportiva de $320 a $580 MXN la sesión. Ahorita Asturias ofrece acceso a servicios de bienestar serios sin la presión de precio de barrios más cotizados de Cuauhtémoc.`,
    faq: [
      {
        q: '¿Hay nutriólogos en Asturias especializados en fitness?',
        a: 'Sí, güey. Hay consultorios de nutrición con enfoque deportivo sobre Calle Asturias y calles del barrio. El servicio incluye evaluación de composición corporal, historial alimenticio, plan semanal y seguimiento quincenal o mensual. La consulta inicial va de $350 a $600 MXN; los seguimientos de $200 a $380 MXN. Los nutriólogos de la zona atienden a usuarios de gym con objetivos de pérdida de peso, ganancia de masa y mejora de rendimiento deportivo. Para quien quiere nutrición seria a precio de barrio, Asturias es una opción real.',
      },
      {
        q: '¿Qué servicios de masaje hay en Asturias?',
        a: 'Hay centros de masaje deportivo y terapéutico sobre calles internas del barrio y sobre Av. Álvaro Obregón. Los servicios incluyen masaje de recuperación muscular, relajación profunda y trabajo en puntos de tensión. Una sesión de 60 minutos va de $240 a $520 MXN. Algunos centros tienen también servicio de reflexología y masaje de espalda rápido de 30 minutos a $150-$280 MXN. Para masaje post-gym en el mismo barrio, la oferta de Asturias es suficiente y más sostenible económicamente que opciones de zonas premium.',
      },
      {
        q: '¿Hay fisioterapeutas en Asturias para lesiones deportivas?',
        a: 'Hay fisioterapeutas con experiencia en lesiones musculoesqueléticas sobre calles del barrio, aunque la oferta es menor que en Doctores por la proximidad de ese barrio al sector médico. La sesión va de $320 a $580 MXN. Para casos más especializados o que requieren coordinación con médico ortopedista, la zona de Doctores —a 10 minutos en Metro desde Álvaro Obregón— tiene más oferta integrada con el sistema de salud. Ahorita para fisioterapia de mantenimiento y lesiones leves, la oferta de Asturias es suficiente.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$350–$600 MXN' },
      { label: 'Masaje deportivo 60m', value: '$240–$520 MXN' },
      { label: 'Fisioterapia sesión',  value: '$320–$580 MXN' },
      { label: 'Ventaja diferencial',  value: 'Precio barrial sin bajar calidad' },
    ],
    barrios: [
      { name: 'Obrera',    slug: 'obrera',    district: 'cuauhtemoc' },
      { name: 'Doctores',  slug: 'doctores',  district: 'cuauhtemoc' },
      { name: 'Tránsito',  slug: 'transito',  district: 'cuauhtemoc' },
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
