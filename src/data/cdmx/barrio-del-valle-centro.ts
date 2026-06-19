// src/data/cdmx/barrio-del-valle-centro.ts
// Draft – lastReviewed: 2026-06-28

export const barrioContent = {
  nombre: 'Del Valle Centro',
  slug: 'del-valle-centro',
  group: 'C',
  parentDistrict: {
    nombre: 'Benito Juárez',
    slug: 'benito-juarez',
  },
  lastReviewed: '2026-06-28',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Del Valle Centro es la columna vertebral del Valle, güey — ni la exposición comercial de Del Valle Norte ni el carácter más residencial puro de Del Valle Sur, sino un equilibrio estable de clase media consolidada que vive, trabaja y consume en el mismo radio. Sobre Calle Uxmal y Calle Mayorazgo hay una densidad de servicios que incluye el fitness sin el markup de Narvarte o Insurgentes Sur más al norte. El perfil es NSE C+/B: familias de clase media con ingresos estables, adultos jóvenes con trabajo formal y adultos mayores que llevan décadas en el barrio. El Metro Hospital General conecta ahorita con Línea 3, y el Metrobús sobre Av. Insurgentes Sur es la arteria más importante del barrio en transporte colectivo. La oferta de fitness en Del Valle Centro refleja el perfil del barrio: gymns de formato mid-range con membresías que van de budget a premium, con la mayor concentración de opciones entre $500 y $900 MXN al mes.

Para el vecino de Del Valle Centro que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Del Valle Centro en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Del Valle Centro — mid-range estable, Benito Juárez 2026',
    metaDesc: 'Gimnasios en Del Valle Centro, CDMX: ~12 opciones de $350 a $1,200 MXN/mes. Uxmal, Mayorazgo, Insurgentes Sur. Clase media consolidada. Guía 2026.',
    intro: `Del Valle Centro tiene alrededor de 12 gimnasios activos, con concentración sobre Calle Uxmal, Calle Mayorazgo y el corredor de Av. Insurgentes Sur. El formato predominante es gym de volumen mid-range: instalaciones completas con sala de pesas libre, equipos cardiovasculares modernos, área de máquinas guiadas y clases de grupo incluidas en la membresía mensual. El espacio es más curado que en los gymns de Cuauhtémoc sur pero sin el precio de boutique de Narvarte Poniente o Roma Norte. El rango de precios va de $350 a $1,200 MXN al mes, con la mayoría de opciones entre $500-$900 MXN. Las cadenas mid-range tienen presencia fuerte en Del Valle Centro por la alta densidad de clase media con poder adquisitivo estable y hábito de gym establecido. La membresía anual es más común aquí que en barrios de NSE C puro — el perfil del usuario tiene más certeza laboral y está más dispuesto al compromiso de largo plazo. Lo que sobresale en Del Valle Centro es la calidad consistente de la oferta: los gimnasios de Del Valle Centro tienen equipos bien mantenidos, instructores con años de experiencia con la misma base de clientes, y horarios amplios que cubren el ciclo completo del día laboral. Para quien compara con Narvarte Poniente o Benito Juárez centro pagando $1,400-$1,800 MXN, Del Valle Centro entrega 90% de la calidad al 60-70% del precio. Ahorita es el mejor punto de equilibrio de Benito Juárez para quien busca calidad consistente sin pagar el premium de Narvarte Poniente o Insurgentes Norte.`,
    faq: [
      {
        q: '¿Cuánto cuesta una membresía de gym en Del Valle Centro?',
        a: 'Las membresías en Del Valle Centro van de $350 a $1,200 MXN al mes. Las cadenas mid-range están en el rango de $500-$800 MXN con inscripción inicial de $200-$400 MXN. Los gymns independientes más equipados o con instalaciones adicionales (sauna, piscina) llegan a $1,000-$1,200 MXN. La anualidad pagada por adelantado suele tener descuento de 15-25%. Comparado con Narvarte Poniente o Benito Juárez centro, el ahorro en Del Valle Centro es de $300 a $700 MXN al mes para calidad equivalente.',
      },
      {
        q: '¿Hay gymns con alberca o instalaciones completas en Del Valle Centro?',
        a: 'Sí, güey. Algunos gymns de Del Valle Centro tienen alberca terapéutica o de entrenamiento incluida en la membresía mensual. Las instalaciones completas con alberca, sauna y vapor son el formato mid-premium del barrio a $900-$1,200 MXN al mes. Para natación recreativa de bajo costo, las unidades deportivas de la alcaldía Benito Juárez tienen albercas con cuota accesible para vecinos. Verifica qué instalaciones incluye la membresía antes de firmar — algunos gymns tienen alberca pero con costo adicional por sesión.',
      },
      {
        q: '¿Los gymns de Del Valle Centro tienen estacionamiento?',
        a: 'Los gymns sobre Calle Uxmal y Mayorazgo suelen tener convenio con estacionamientos de cuota cercanos o tienen spaces propios. El estacionamiento en calle en Del Valle Centro es más accesible que en Narvarte o Roma, aunque los sábados por la mañana hay más competencia. Para quien viene en Metrobús sobre Insurgentes Sur, la experiencia es muy fluida — hay paradas sobre el corredor que dejan a poca distancia de la mayoría de los gimnasios de Del Valle Centro. El Metro Hospital General en Línea 3 es la otra opción de transporte sin estrés.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Del Valle Centro tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Del Valle Centro suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~12' },
      { label: 'Membresía mensual', value: '$350–$1,200 MXN' },
      { label: 'Referente',         value: 'Calle Uxmal / Mayorazgo' },
      { label: 'Acceso Metro',      value: 'Metro Hospital General (L3)' },
    ],
    barrios: [
      { name: 'Del Valle Norte',    slug: 'del-valle-norte',    district: 'benito-juarez' },
      { name: 'Del Valle Sur',      slug: 'del-valle-sur',      district: 'benito-juarez' },
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
    h1: 'Estudios en Del Valle Centro',
    metaDesc: 'Estudios fitness en Del Valle Centro, CDMX: yoga, funcional y pilates de $100 a $250 MXN/clase. Uxmal, Mayorazgo, Insurgentes Sur. Guía 2026.',
    intro: `Del Valle Centro tiene una oferta de estudios más diversa que la mayoría de barrios de Benito Juárez fuera del corredor de Insurgentes Sur. Sobre Calle Uxmal, Mayorazgo y calles secundarias hay estudios de yoga, pilates, funcional y ciclismo indoor que atienden el perfil de clase media activa del barrio con precios que se mantienen por debajo de los de Narvarte Poniente o Roma Norte.

El formato semi-boutique es el más común: estudios de 20-40 personas por clase, reserva por app, instructores con certificaciones internacionales y ambiente más cuidado que un gym de volumen. La clase suelta va de $100 a $250 MXN según la disciplina — yoga y funcional en el rango bajo, pilates con reformer y ciclismo indoor en el rango alto. El plan mensual de clases ilimitadas de $700 a $1,400 MXN.

Lo que distingue a los estudios de Del Valle Centro es la relación entre calidad y precio: instructores con el mismo perfil de certificación que en Narvarte o Roma Norte pero con precio 20-35% menor por la diferencia de renta del local. Para quien practica yoga o pilates regularmente, el ahorro anual frente a estudios de zonas premium es muy significativo sin sacrificar la calidad del instructor. Ahorita Del Valle Centro es el mejor punto de equilibrio de toda la alcaldía para estudio de fitness semi-boutique.`,
    faq: [
      {
        q: '¿Cuánto cuesta una clase de yoga o pilates en Del Valle Centro?',
        a: 'La clase suelta de yoga en Del Valle Centro va de $100 a $200 MXN según el estudio y el estilo. Pilates con reformer va de $160 a $250 MXN por sesión individual o en grupo pequeño. Funcional e interval training de $100 a $180 MXN. Los planes mensuales de 8-12 clases van de $700 a $1,100 MXN; el mensual ilimitado de $900 a $1,400 MXN. Comparado con Narvarte Poniente o Roma Norte donde la clase suelta de pilates puede ir de $250 a $400 MXN, el ahorro en Del Valle Centro es directo y sostenible.',
      },
      {
        q: '¿Hay estudios de pilates con reformer en Del Valle Centro?',
        a: 'Sí, güey. Hay estudios con reformer sobre calles del barrio y sobre el corredor de Insurgentes Sur. El formato varía entre sesión individual ($200-$350 MXN), dueto ($160-$250 MXN por persona) y grupo pequeño de 4-6 personas ($140-$220 MXN por persona). Los estudios de Del Valle Centro tienen reformers de marca reconocida y instructores certificados en pilates contemporáneo. La diferencia con un estudio de Polanco no es el equipo ni la certificación — es el código postal que define el precio por clase.',
      },
      {
        q: '¿Qué estilos de yoga hay en Del Valle Centro?',
        a: 'La oferta de yoga en Del Valle Centro cubre: Hatha, Vinyasa, Yin, Restaurativo y Ashtanga básico. Hay algunos estudios con clases de yoga nidra y meditación guiada. No es la variedad de 10 estilos distintos de Roma Norte con teacher trainings — pero para práctica regular con profundidad real, la oferta de Del Valle Centro es más que suficiente y con instructores que llevan años trabajando con comunidades estables de practicantes. La clase suelta va de $100 a $200 MXN según el estilo.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios',          value: '~8' },
      { label: 'Clase suelta',      value: '$100–$250 MXN' },
      { label: 'Mensual ilimitado', value: '$900–$1,400 MXN' },
      { label: 'Especialidad',      value: 'Yoga / Pilates / Funcional' },
    ],
    barrios: [
      { name: 'Del Valle Norte',    slug: 'del-valle-norte',    district: 'benito-juarez' },
      { name: 'Del Valle Sur',      slug: 'del-valle-sur',      district: 'benito-juarez' },
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
    h1: 'Entrenadores personales en Del Valle Centro',
    metaDesc: 'Entrenadores personales en Del Valle Centro, CDMX: PT certificados de $350 a $750 MXN/sesión. Uxmal, Mayorazgo. Benito Juárez mid-range. Guía 2026.',
    intro: `El personal training en Del Valle Centro está en el rango mid-range de toda la alcaldía Benito Juárez: ni el precio budget de las zonas C puro de Cuauhtémoc sur ni el precio premium de Narvarte Poniente o el corredor de Insurgentes Sur premium. Los entrenadores del barrio cobran entre $350 y $750 MXN por sesión — el punto de equilibrio para quien quiere PT con certificación real sin pagar markup de zona aspiracional.

Los PTs de Del Valle Centro tienen perfil diverso: desde entrenadores con NASM, NSCA y experiencia en fitness de alto rendimiento hasta especialistas en adultos mayores, rehabilitación post-parto y manejo de condiciones crónicas como diabetes o hipertensión mediante ejercicio. La clientela estable del barrio —familias de clase media con perspectiva de largo plazo— genera una demanda de PT con objetivos de salud integral más que solo estética, lo que atrae un perfil de entrenador más completo.

Para quien vive en Del Valle Centro y quiere PT de calidad real, la oferta del barrio es genuinamente chida: entrenadores que conocen el barrio, que trabajan con clientes de la misma zona y que tienen incentivos para mantener calidad porque su base de clientes es local y de referidos. Ahorita Del Valle Centro tiene el mejor ratio calidad-precio en PT de toda la alcaldía Benito Juárez para quien no necesita el glamour de una zona premium.`,
    faq: [
      {
        q: '¿Cuánto cobra un entrenador personal en Del Valle Centro?',
        a: 'Una sesión individual con PT certificado en Del Valle Centro va de $350 a $750 MXN. Los paquetes de 10 sesiones van de $3,000 a $6,500 MXN con descuento de 10-15%. Para sesiones a domicilio en el barrio o en parques cercanos como el Parque Hundido hay un cargo adicional de $80-$150 MXN. Comparado con Narvarte Poniente ($500-$1,000 MXN/sesión) o Polanco ($700-$1,500 MXN/sesión), Del Valle Centro ofrece el mismo nivel de certificación con precio 25-40% menor.',
      },
      {
        q: '¿Hay entrenadores especializados en salud integral en Del Valle Centro?',
        a: 'Sí, güey. El perfil de clientela de Del Valle Centro —adultos de 35-60 años con objetivos de salud integral— ha generado una concentración de PTs con especialización en adultos mayores, manejo de peso con condiciones metabólicas, rehabilitación post-lesión y entrenamiento adaptado para personas con movilidad reducida. Es uno de los barrios de Benito Juárez con más oferta en este perfil específico. Pide referencias de trabajo con casos similares al tuyo antes de contratar — en Del Valle Centro hay dónde elegir.',
      },
      {
        q: '¿Hay entrenadores que trabajen en el Parque Hundido desde Del Valle Centro?',
        a: 'Sí. El Parque Hundido está a 15-20 minutos en Metrobús desde Del Valle Centro sobre Insurgentes Sur. Hay entrenadores del barrio que ofrecen sesiones en el parque como alternativa a sesiones en gym — especialmente para entrenamiento cardiovascular, circuitos funcionales al aire libre y running con coaching. La sesión en parque puede ir de $350 a $650 MXN según el entrenador. Para quien prefiere entrenar al aire libre, Del Valle Centro tiene buena oferta de PTs que trabajan también en espacios outdoor.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'Sesión individual',   value: '$350–$750 MXN' },
      { label: 'Paquete 10 sesiones', value: '$3,000–$6,500 MXN' },
      { label: 'Vs. Narvarte',        value: '25-35% más accesible' },
      { label: 'Especialidad',        value: 'Salud integral / Adultos' },
    ],
    barrios: [
      { name: 'Del Valle Norte',    slug: 'del-valle-norte',    district: 'benito-juarez' },
      { name: 'Del Valle Sur',      slug: 'del-valle-sur',      district: 'benito-juarez' },
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
    h1: 'Eventos fitness en Del Valle Centro',
    metaDesc: 'Eventos fitness en Del Valle Centro, CDMX: carreras, yoga en parque y retos de gym de $0 a $350 MXN. Guía 2026.',
    intro: `Del Valle Centro tiene un ecosistema de eventos fitness más activo de lo que el perfil residencial tranquilo del barrio sugiere, güey. La clase media consolidada del barrio tiene hábitos deportivos establecidos y organización vecinal fuerte — combinación que genera eventos regulares y comunidades de entrenamiento que se sostienen en el tiempo sin necesidad de patrocinio corporativo.

Los grupos de running son el formato de evento más común en Del Valle Centro: comunidades que salen 2-3 veces por semana desde el barrio hacia el Parque Hundido o el circuito de Insurgentes Sur. Muchos de estos grupos llevan años funcionando y son el núcleo social deportivo del barrio. La participación es gratuita o con cuota mínima de $50-$100 MXN para eventos especiales con hidratación y snacks.

Los estudios de yoga y pilates del barrio organizan eventos de comunidad: clases en parque los domingos, retiros de medio día en fechas especiales y talleres de técnica con instructores invitados. Las inscripciones van de $0 a $350 MXN según el formato. Ahorita Del Valle Centro tiene el ecosistema de eventos fitness más sostenido de toda la subzona Del Valle — no el más vistoso, pero sí el más consistente y con comunidades de más largo aliento.`,
    faq: [
      {
        q: '¿Hay grupos de running en Del Valle Centro?',
        a: 'Sí, güey — varios. Los grupos de running del barrio salen regularmente hacia el Parque Hundido y el circuito de Insurgentes Sur. Algunos grupos tienen 5-10 años de historia y corredores que se conocen desde el inicio. La participación es libre o con cuota de $50-$100 MXN para eventos mensuales especiales. Para unirte, busca en Instagram con hashtags de running Del Valle o Benito Juárez, o preguntá directamente en los gymns y estudios del barrio — la mayoría sabe qué grupos están activos ahorita.',
      },
      {
        q: '¿Hay eventos de yoga al aire libre en Del Valle Centro?',
        a: 'Sí. Los estudios de yoga del barrio organizan clases en parques cercanos los domingos en la mañana, especialmente en primavera y otoño cuando el clima lo permite. Las clases en parque suelen ser gratuitas o con cooperación de $50-$100 MXN. Algunos estudios hacen talleres de medio día en el Parque Hundido o en espacios verdes del barrio con instructor invitado — la inscripción va de $200 a $350 MXN. Sigue los perfiles de Instagram de los estudios de yoga de Uxmal y Mayorazgo para enterarte de las fechas.',
      },
      {
        q: '¿Hay carreras o eventos deportivos organizados en Del Valle Centro?',
        a: 'Del Valle es zona de paso de varias carreras populares de CDMX que corren sobre Insurgentes Sur. Hay también carreras de barrio organizadas por asociaciones de vecinos y clubes deportivos del Valle con distancias de 5K y 10K. La inscripción va de $150 a $350 MXN con playera y medalla incluidas. Para enterarse de fechas, sigue las cuentas de las asociaciones vecinales del Valle y los perfiles de running de Benito Juárez. El Parque Hundido también organiza eventos deportivos propios con regularidad.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Eventos regulares', value: 'Mensuales' },
      { label: 'Precio habitual',   value: '$0–$350 MXN' },
      { label: 'Formato estrella',  value: 'Grupos de running / Yoga en parque' },
      { label: 'Outdoor cercano',   value: 'Parque Hundido (15-20 min Metrobús)' },
    ],
    barrios: [
      { name: 'Del Valle Norte',    slug: 'del-valle-norte',    district: 'benito-juarez' },
      { name: 'Del Valle Sur',      slug: 'del-valle-sur',      district: 'benito-juarez' },
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
    h1: 'Bienestar en Del Valle Centro',
    metaDesc: 'Bienestar en Del Valle Centro, CDMX: nutriólogos, masaje y fisioterapia de $300 a $800 MXN. Uxmal, Mayorazgo. Benito Juárez mid-range. Guía 2026.',
    intro: `Del Valle Centro tiene una oferta de bienestar que refleja el perfil de su población: clase media consolidada con poder adquisitivo para invertir en salud de forma sostenida y con demanda de servicios con nivel técnico real. Sobre Calle Uxmal, Mayorazgo y calles secundarias del barrio hay consultorios de nutrición, clínicas de fisioterapia y centros de masaje que atienden tanto a deportistas activos como a adultos en mantenimiento de salud general.

Los nutriólogos de Del Valle Centro tienen perfil clínico y deportivo — muchos atienden a pacientes derivados de médicos del barrio y a socios de los gymns locales en simultáneo. La consulta inicial va de $400 a $750 MXN y los seguimientos de $280 a $500 MXN. El precio es mayor que en Cuauhtémoc sur pero equivalente al nivel técnico que ofrece — sin el markup aspiracional de Narvarte Poniente o Roma Norte.

El masaje deportivo y la fisioterapia tienen presencia fuerte en el barrio por el perfil de adultos activos con lesiones recurrentes de entrenamiento o carga laboral sedentaria. Una sesión de masaje de recuperación de 60 minutos va de $300 a $650 MXN. Fisioterapia deportiva de $400 a $750 MXN la sesión. Ahorita Del Valle Centro ofrece la mejor cobertura de servicios de bienestar de toda la subzona Del Valle para quien busca calidad técnica real a precio justo.`,
    faq: [
      {
        q: '¿Hay nutriólogos especializados en fitness en Del Valle Centro?',
        a: 'Sí, güey — hay varios. Del Valle Centro tiene consultorios de nutrición con enfoque deportivo y clínico sobre calles del barrio. La consulta inicial va de $400 a $750 MXN; los seguimientos de $280 a $500 MXN. Los servicios incluyen evaluación de composición corporal con bioimpedancia, historial alimenticio completo, plan semanal personalizado y seguimiento quincenal. Hay nutriólogos con subespecialización en pérdida de peso, nutrición para adultos mayores y manejo nutricional de diabetes tipo 2 — el perfil de paciente del barrio genera esa demanda.',
      },
      {
        q: '¿Qué servicios de masaje hay en Del Valle Centro?',
        a: 'La oferta de masaje en Del Valle Centro es más amplia que en barrios de NSE C puro. Hay centros de masaje deportivo, masaje sueco, masaje de tejido profundo y reflexología sobre calles del barrio y el corredor de Insurgentes Sur. Una sesión de 60 minutos va de $300 a $650 MXN. Hay también spa de bienestar básico con vapor, hidroterapia y envolturas corporales a $500-$900 MXN por sesión. Para recuperación post-entrenamiento regular, el masaje de tejido profundo o deportivo de 60 minutos es el servicio más demandado en el barrio.',
      },
      {
        q: '¿Hay clínicas de fisioterapia con equipo especializado en Del Valle Centro?',
        a: 'Sí. Hay clínicas de fisioterapia sobre Insurgentes Sur y calles del barrio con equipamiento de electroterapia, ultrasonido terapéutico y camillas especializadas. La sesión va de $400 a $750 MXN. Algunos centros tienen fisioterapeutas con subespecialización en lesiones deportivas, columna y rodilla — los casos más comunes en usuarios de gym de clase media activa. Para rehabilitación post-cirugía o lesiones más complejas, hay coordinación con ortopedistas del corredor de hospitales privados de Insurgentes Sur.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Consulta nutrición',   value: '$400–$750 MXN' },
      { label: 'Masaje deportivo 60m', value: '$300–$650 MXN' },
      { label: 'Fisioterapia sesión',  value: '$400–$750 MXN' },
      { label: 'Ventaja diferencial',  value: 'Calidad técnica sin precio Narvarte' },
    ],
    barrios: [
      { name: 'Del Valle Norte',    slug: 'del-valle-norte',    district: 'benito-juarez' },
      { name: 'Del Valle Sur',      slug: 'del-valle-sur',      district: 'benito-juarez' },
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
