// src/data/cdmx/barrio-obrera.ts
// Draft – lastReviewed: 2026-06-27

export const barrioContent = {
  nombre: 'Obrera',
  slug: 'obrera',
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

  sobreBarrio: `Obrera es el barrio que no pide permiso para existir, güey. Sobre Calle Lago Tequesquitengo y Av. Chapultepec Sur hay una densidad de trabajadores y familias de clase media que llevan décadas en el mismo edificio y que conocen su gym de barrio como conocen la tortillería de la esquina. El Metro Obrera en Línea 8 conecta ahorita con Doctores y con el Centro en minutos. El perfil fitness es budget-lánc con presencia fuerte de cadenas de bajo costo y gymns independientes que llevan años en la misma cuadra. NSE C con cultura de gym habitual: la gente viene al gym porque es parte de la semana, no porque es tendencia. Eje 3 Sur cruza el barrio y hace la zona muy accesible en transporte público. Para quien trabaja en Cuauhtémoc o vive en Obrera, la oferta de fitness es consistente, barata y funcional — exactamente lo que

Para el vecino de Obrera que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Obrera en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Obrera — budget-lánc y gym de toda la vida 2026',
    metaDesc: 'Gimnasios en Obrera, CDMX: ~9 opciones de $320 a $750 MXN/mes. Chapultepec Sur, Eje 3 Sur. Budget gym consolidado. Guía 2026.',
    intro: `Obrera tiene alrededor de 9 gimnasios activos, con una mezcla de cadenas de bajo costo y gymns independientes que llevan años operando en el barrio. La concentración mayor está sobre Av. Chapultepec Sur y las calles que cruzan Eje 3 Sur — zona de alto tráfico peatonal que hace los accesos muy fáciles desde cualquier punto del barrio.

El formato dominante es el gym de volumen con membresía mensual accesible: salas de pesas completas, área cardiovascular, clases de grupo incluidas. No hay lista de espera ni app de reserva — llegas al mostrador, pagas la mensualidad y tienes el gym disponible en el horario que necesites. Ese modelo de simplicidad funciona muy bien para el perfil de usuario de Obrera: gente con horarios variables que quiere entrenar sin fricción administrativa.

El rango de precios es de $320 a $750 MXN al mes. Las cadenas de bajo costo están en el piso del rango; los gimnasios independientes de Obrera con más personalización suben hasta $750 MXN. La inscripción inicial en cadenas va de $150-$300 MXN. Ahorita Obrera tiene una densidad de gymns adecuada para el tamaño del barrio — no hay saturación ni escasez. Para quien llega en Metro Obrera, hay opciones a menos de 5 minutos caminando en todas las direcciones.`,
    faq: [
      {
        q: '¿Qué cadenas de gym están en Obrera?',
        a: 'Obrera tiene presencia de Smart Fit y algunas cadenas regionales de bajo costo que operan en formato de membresía mensual sin compromiso de anualidad. Los gymns independientes del barrio también compiten en precio para no perder socios frente a las cadenas — lo que beneficia al usuario final. Smart Fit en particular tiene horarios amplios desde las 5am hasta las 11pm entre semana, lo que lo hace una opción real para trabajadores con turnos variables. Las membresías van de $349 a $499 MXN al mes según la modalidad de acceso.',
      },
      {
        q: '¿Hay estacionamiento para ir al gym en Obrera?',
        a: 'El estacionamiento en calle sobre Av. Chapultepec Sur está disponible antes de las 8am con relativa facilidad. Después de esa hora la demanda sube bastante. Sobre las calles internas del barrio hay más opciones de estacionamiento libre pero requieren caminar 3-5 minutos adicionales hasta el gym. Para quien va entre semana a las 6am o en turno de tarde (2-5pm), el estacionamiento no es un problema real. La alternativa más conveniente sigue siendo Metro Obrera — está a 5-8 minutos caminando de la mayoría de los gymns de la zona.',
      },
      {
        q: '¿Los gymns de Obrera tienen piscina o áreas especiales?',
        a: 'La mayoría de los gymns de Obrera son formato estándar sin piscina: pesas libres, máquinas cardiovasculares, área de peso libre y clases de grupo. Algunos gymns independientes más grandes sobre Chapultepec Sur tienen área de combate o tatami para artes marciales como servicio adicional. Para piscina cubierta, el Centro Acuático más cercano está en otras zonas de la alcaldía — Obrera no tiene ese servicio dentro del barrio. Para el entrenamiento estándar de fuerza y cardio, la infraestructura está completa.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Obrera tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Obrera suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~9' },
      { label: 'Membresía mensual', value: '$320–$750 MXN' },
      { label: 'Referente',         value: 'Chapultepec Sur / Eje 3 Sur' },
      { label: 'Acceso Metro',      value: 'Metro Obrera (Línea 8)' },
    ],
    barrios: [
      { name: 'Doctores',           slug: 'doctores',           district: 'cuauhtemoc' },
      { name: 'Centro',             slug: 'centro',             district: 'cuauhtemoc' },
      { name: 'Narvarte Poniente',  slug: 'narvarte-poniente',  district: 'benito-juarez' },
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
    h1: 'Estudios en Obrera',
    metaDesc: 'Estudios fitness en Obrera, CDMX: funcional, clases de grupo y yoga de $80 a $190 MXN/clase. Chapultepec Sur. Guía 2026.',
    intro: `Los estudios en Obrera no van a ganar premios de diseño de interiores ni van a aparecer en las listas de los mejores boutiques de CDMX — y eso no les importa porque están llenos de socios fijos que vienen todos los martes y jueves desde hace tres años. Esa es la realidad del fitness en Obrera, güey, y es más valiosa que cualquier estética de Instagram.

El formato más común son las clases de grupo integradas en la membresía de gym: zumba, body combat, aeróbics, yoga básico y funcional sin cargo adicional. Para quien quiere variedad de entrenamiento sin manejar a Condesa o pagar $300 MXN por clase suelta en Roma Norte, este modelo entrega valor real y sostenible.

Los espacios independientes de funcional y crosstraining sobre calles secundarias de Obrera tienen grupos de 8-12 personas con coaches con experiencia práctica sólida. La clase suelta va de $80 a $190 MXN; el plan mensual de $500 a $850 MXN. No hay app de reserva ni cancelación con 12 horas de anticipación — se reserva por WhatsApp y listo. Ahorita los estudios de Obrera están en un momento interesante: la demanda creció en los últimos dos años y algunos espacios están invirtiendo en equipo nuevo sin subir el precio todavía.`,
    faq: [
      {
        q: '¿Hay pilates en Obrera?',
        a: 'Hay yoga y funcional en Obrera pero pilates Reformer especializado no es el formato dominante del barrio. Hay uno o dos espacios que ofrecen pilates mat (suelo) como parte de sus clases de grupo o en sesiones independientes a $100-$180 MXN. Para pilates con máquina Reformer, Narvarte Poniente en Benito Juárez está a 2-3 kilómetros con opciones más completas. Si el pilates Reformer es tu entrenamiento principal, Obrera probablemente no es la mejor base para eso — pero si es complemento a un entrenamiento de fuerza, el pilates mat de la zona cubre perfectamente.',
      },
      {
        q: '¿Qué tan buenas son las clases de grupo en los gymns de Obrera?',
        a: 'La calidad depende del instructor y del gym. En los gymns de cadena, las clases de grupo siguen protocolos estandarizados — misma estructura, mismo nivel en todos los locales de la cadena. En los gimnasios independientes de Obrera hay más variación: algunos tienen instructores que llevan años en el espacio con metodología propia y nivel técnico real; otros rotan instructores con más frecuencia. La forma de saberlo es ir a una clase de prueba antes de pagar la mensualidad. La mayoría de los gymns dejan ver una clase gratis para nuevos interesados.',
      },
      {
        q: '¿Hay estudios de danza o ritmo en Obrera?',
        a: '¡Ahorita sí hay opciones de zumba y ritmos latinos integradas en la membresía de varios gymns de Obrera — es uno de los formatos más populares del barrio. Para danza más estructurada (salsa, bachata, cumbia con técnica real), hay academias de danza sobre Chapultepec Sur y Eje 3 Sur con clases de $100-$200 MXN sueltas. No es el circuito de academias de danza del Centro Histórico, pero para ritmos recreativos y cardio con música, la oferta de Obrera es suficiente y accesible.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~5' },
      { label: 'Clase suelta',      value: '$80–$190 MXN' },
      { label: 'Mensual ilimitado', value: '$500–$850 MXN' },
      { label: 'Especialidad',      value: 'Funcional / Clases de grupo' },
    ],
    barrios: [
      { name: 'Doctores',           slug: 'doctores',           district: 'cuauhtemoc' },
      { name: 'Centro',             slug: 'centro',             district: 'cuauhtemoc' },
      { name: 'Narvarte Poniente',  slug: 'narvarte-poniente',  district: 'benito-juarez' },
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
    h1: 'Entrenadores personales en Obrera — PT serio a precio accesible 2026',
    metaDesc: 'Entrenadores personales en Obrera, CDMX: PT certificados de $280 a $580 MXN/sesión. Chapultepec Sur, Eje 3 Sur. Sin markup de zona. Guía 2026.',
    intro: `El personal training en Obrera es de los más asequibles de Cuauhtémoc sin sacrificar calidad técnica. Los entrenadores que trabajan en los gymns de Chapultepec Sur y calles del barrio cobran entre $280 y $580 MXN por sesión — un rango que permite mantener frecuencia de 3 sesiones semanales sin destruir el presupuesto mensual.

El perfil de entrenadores en Obrera es variado: desde recién egresados de ENMH con energía y conocimiento actualizado, hasta entrenadores con 8-12 años de experiencia que conocen a sus clientes desde que empezaron con 10 kg en mancuernas y hoy hacen press banca con 80. Esa continuidad en la relación entrenador-cliente es difícil de encontrar en zonas con alta rotación de socios como los gyms de Polanco o Condesa.

Para quien empieza de cero — sin historial de entrenamiento, con objetivo claro de composición corporal o de simplemente "moverme más" — los entrenadores de Obrera tienen experiencia real trabajando con principiantes sin hacerlos sentir juzgados. El primer diagnóstico generalmente no tiene costo y el abordaje es práctico: empezamos por lo que puedes hacer, no por el programa ideal de papel. Ahorita ese perfil de entrenador es exactamente lo que necesita el 80% de las personas que buscan PT por primera vez.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Obrera?',
        a: 'Una sesión individual con PT certificado en Obrera va de $280 a $580 MXN. Los paquetes de 10 sesiones van de $2,200 a $5,000 MXN con descuento de 10-15% sobre precio suelto. Para sesiones a domicilio en el mismo barrio hay un cargo adicional de $60-$100 MXN por traslado. El precio en Obrera es ligeramente menor que en Doctores y significativamente menor que en Narvarte Poniente o Roma Norte. Para quien quiere PT 2-3 veces por semana con presupuesto de NSE C, Obrera es la opción más sostenible de la alcaldía.',
      },
      {
        q: '¿Hay entrenadores con experiencia en adultos mayores en Obrera?',
        a: 'Sí, güey. El perfil demográfico del barrio — con alta proporción de residentes de larga data con edades de 45-70 años — generó una demanda específica de entrenamiento adaptado para adultos mayores. Varios entrenadores de Obrera trabajan con personas mayores en programas de fuerza, equilibrio y movilidad que priorizan la funcionalidad cotidiana: subir escaleras, cargar bolsas, prevenir caídas. El precio por sesión es el mismo rango general. Lo que cambia es el ritmo, la selección de ejercicios y la paciencia del abordaje.',
      },
      {
        q: '¿Puedo conseguir PT en Obrera para entrenamiento online?',
        a: 'Algunos entrenadores de Obrera ofrecen seguimiento remoto por WhatsApp o videollamada — programa semanal, revisión de forma por video, ajuste de cargas. No es lo mismo que una sesión presencial, pero para quien viaja frecuentemente o tiene semanas con agenda muy apretada, el seguimiento remoto de un entrenador que ya te conoce físicamente funciona mejor que un programa genérico de app. El precio de seguimiento remoto suele ser de $800-$1,500 MXN al mes según la frecuencia de contacto. Preguntá directamente a los entrenadores del barrio cuáles ofrecen esta modalidad.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$280–$580 MXN' },
      { label: 'Paquete 10 sesiones', value: '$2,200–$5,000 MXN' },
      { label: 'Vs. Narvarte',        value: '25-35% más accesible' },
      { label: 'Especialidad',        value: 'Principiantes / Adultos mayores' },
    ],
    barrios: [
      { name: 'Doctores',           slug: 'doctores',           district: 'cuauhtemoc' },
      { name: 'Centro',             slug: 'centro',             district: 'cuauhtemoc' },
      { name: 'Narvarte Poniente',  slug: 'narvarte-poniente',  district: 'benito-juarez' },
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
    h1: 'Eventos fitness en Obrera',
    metaDesc: 'Eventos fitness en Obrera, CDMX: retos, clases abiertas y caminatas grupales de $0 a $200 MXN. Chapultepec Sur. Guía 2026.',
    intro: `Obrera no tiene el presupuesto de marketing de Condesa ni el glamour de los eventos de Polanco, pero tiene algo que se está perdiendo en los barrios más trendy: genuinidad. Los eventos de fitness en Obrera son lo que son — retos de gym entre socios, caminatas del barrio los domingos, clases abiertas cuando hay fecha especial — sin sponsor de suplemento, sin transmisión en vivo, sin lista de espera de 48 horas.

Los gymns de Chapultepec Sur organizan retos de asistencia mensual y de rendimiento trimestral con tablero visible en el local. Sin premiación económica ni reconocimiento en redes — solo el nombre en la pizarra y el respeto de los socios. Para mucha gente de Obrera, eso es motivación más que suficiente.

Las caminatas y salidas outdoor del barrio se organizan de manera informal: un grupo de socios del gym que acuerda el domingo salida a Chapultepec, se juntan en Metro Obrera a las 7am y van. Sin app, sin cuota, sin cupo limitado. La frecuencia depende de quién organiza ese mes. Ahorita hay más actividad de este tipo que hace dos años — el barrio está retomando hábitos de comunidad que se perdieron en la pandemia. Para quien quiere fitness con sentido de pertenencia real, Obrera lo tiene de forma auténtica.`,
    faq: [
      {
        q: '¿Hay grupos de caminata o running en Obrera?',
        a: 'Hay grupos informales de caminata y algunos de running que salen desde Metro Obrera los fines de semana en la mañana rumbo a Chapultepec. El ritmo es accesible — no es grupo de velocidad ni de maratón. La convocatoria suele ser por WhatsApp de algún gym del barrio o por grupos de Facebook de vecinos de Obrera. Para running más organizado con cronometraje y distancias definidas, el Bosque de Chapultepec tiene grupos establecidos que empiezan en la Fuente de Petróleos o en el Auditorio los sábados a las 7am.',
      },
      {
        q: '¿Cuándo hay clases abiertas en los gymns de Obrera?',
        a: '¡Ahorita los gymns de Obrera hacen clases abiertas principalmente en fechas especiales: Día Internacional del Deporte (6 de abril), Día del Padre, aniversarios del gym y a veces en inicio de año. La entrada suele ser gratuita o de $50-$100 MXN como cooperación. Los horarios y fechas se anuncian con 3-7 días de anticipación en Instagram del gym y en el tablón físico del local. Si ya eres socio, el grupo de WhatsApp del gym es el canal más rápido para enterarte.',
      },
      {
        q: '¿Hay eventos de nutrición o salud en Obrera?',
        a: 'Ocasionalmente los consultorios de nutrición del barrio organizan pláticas informativas gratuitas o de bajo costo ($80-$150 MXN) sobre temas de alimentación y rendimiento deportivo. Algunos gymns invitan nutriólogos de la zona para jornadas de evaluación rápida de composición corporal sin costo para los socios. Estos eventos no tienen la regularidad de un calendario fijo — se organizan cuando el nutriólogo y el gym tienen disponibilidad coordinada. Seguí los perfiles de los gymns de tu interés para no perderte los anuncios.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos regulares', value: 'Trimestrales' },
      { label: 'Precio habitual',   value: '$0–$200 MXN' },
      { label: 'Formato',           value: 'Retos y caminatas barriales' },
      { label: 'Outdoor cercano',   value: 'Bosque de Chapultepec' },
    ],
    barrios: [
      { name: 'Doctores',           slug: 'doctores',           district: 'cuauhtemoc' },
      { name: 'Centro',             slug: 'centro',             district: 'cuauhtemoc' },
      { name: 'Narvarte Poniente',  slug: 'narvarte-poniente',  district: 'benito-juarez' },
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
    h1: 'Bienestar en Obrera — nutrición y masaje a precio real de barrio 2026',
    metaDesc: 'Bienestar en Obrera, CDMX: nutriólogos y masaje de $220 a $600 MXN. Chapultepec Sur, Eje 3 Sur. Sin precio de zona premium. Guía 2026.',
    intro: `El bienestar en Obrera es directo y funcional: nutriólogos con formación sólida, masajistas con años de experiencia en recuperación muscular y algunos servicios de terapia alternativa que completaron la oferta del barrio en los últimos años. No hay spa de lujo ni tecnología de recuperación de última generación — hay servicios que funcionan y que se pueden pagar de forma sostenida.

Los consultorios de nutrición sobre Chapultepec Sur y calles de Obrera trabajan con un perfil variado de pacientes: desde personas con objetivos de composición corporal hasta adultos mayores con condiciones crónicas que necesitan ajuste alimenticio. La consulta inicial va de $350 a $600 MXN y los seguimientos de $220 a $400 MXN. El enfoque es práctico: plan de alimentación que funcione con la cocina y el presupuesto real del paciente, no el plan ideal de libro de texto.

El masaje deportivo en Obrera tiene una relación calidad-precio interesante: masajistas con 5-10 años de práctica que cobran $250-$520 MXN por 60 minutos. El servicio es de recuperación muscular real — no masaje de spa de relajación superficial. Para quien entrena 4-5 veces por semana, incorporar masaje semanal en Obrera es sostenible económicamente y marca diferencia en recuperación y en prevención de lesiones acumulativas. Ahorita es el mejor momento para consolidar ese hábito antes de que los precios suban al ritmo de la gentrificación que ya asoma sobre Chapultepec.`,
    faq: [
      {
        q: '¿Hay nutriólogos que trabajen con presupuesto limitado en Obrera?',
        a: 'Sí, güey. Los nutriólogos de Obrera entienden la realidad del barrio y diseñan planes que funcionan con el presupuesto real del paciente: ingredientes accesibles en mercados locales, recetas simples, sin suplementos caros como condición del plan. La consulta inicial de $350-$600 MXN ya incluye el plan alimenticio — no es "diagnóstico y te mando a comprar suplementos de $2,000 MXN". Para seguimientos, algunos ofrecen seguimiento por WhatsApp quincenal a menor costo que la consulta presencial completa.',
      },
      {
        q: '¿Qué tipo de masaje se consigue en Obrera?',
        a: 'El masaje más común en Obrera es el masaje de recuperación muscular profunda — deep tissue y trabajo en puntos de tensión — a $250-$520 MXN por 60 minutos. También hay masaje de relajación general a precio similar. Algunos centros ofrecen reflexología y masaje de tejido blando. Lo que no hay es masaje con piedras calientes de spa ni protocolos de lujo — el servicio es funcional y profesional, orientado a recuperación real más que a experiencia sensorial premium. Para quien necesita trabajo específico en área lesionada, pedí referencia al masajista sobre técnica en rehabilitación antes de la sesión.',
      },
      {
        q: '¿Hay psicólogos o servicios de salud mental orientados al deporte en Obrera?',
        a: 'No es el perfil predominante del barrio, pero hay consultorios de psicología general sobre Chapultepec Sur y calles aledañas que trabajan con objetivos de cambio de hábitos, motivación y relación con la alimentación. No son psicólogos deportivos especializados en rendimiento atlético — son psicólogos generales con experiencia en conducta y bienestar. El precio va de $400 a $700 MXN por sesión. Para psicología deportiva especializada, Narvarte Poniente o Roma Norte tienen más opciones en ese perfil específico.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$350–$600 MXN' },
      { label: 'Masaje deportivo 60m', value: '$250–$520 MXN' },
      { label: 'Seguimiento mensual',  value: '$220–$400 MXN' },
      { label: 'Vs. Narvarte',         value: '25-35% más accesible' },
    ],
    barrios: [
      { name: 'Doctores',           slug: 'doctores',           district: 'cuauhtemoc' },
      { name: 'Centro',             slug: 'centro',             district: 'cuauhtemoc' },
      { name: 'Narvarte Poniente',  slug: 'narvarte-poniente',  district: 'benito-juarez' },
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
