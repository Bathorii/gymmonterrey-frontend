// src/data/cdmx/barrio-las-aguilas.ts
// Draft – lastReviewed: 2026-06-21

export const barrioContent = {
  nombre: 'Las Águilas / Villa Verdún',
  slug: 'las-aguilas',
  group: 'B',
  parentDistrict: {
    nombre: 'Álvaro Obregón',
    slug: 'alvaro-obregon',
  },
  lastReviewed: '2026-06-21',

  contentFlags: {
    hasYear: true,
    hasPrice: true,
    hasCount: true,
  },

  sobreBarrio: `Las Águilas — con Villa Verdún en su zona poniente — es uno de los barrios más grandes del suroeste del DF, güey. Clase media real, C+/B sin pretensiones: casas de 2-3 niveles, comercio fuerte sobre Av. Las Águilas y Metro Observatorio como ancla de movilidad. La conexión con Insurgentes Sur lo integra al corredor que baja hacia San Ángel. El mercado fitness es ahorita uno de los más activos del poniente popular: gymns independientes con membresías de $700 a $1,500 MXN para quien entrena en serio sin pagar el premium de San Ángel. Entrenamiento pragmático, sin los costos de sus vecinos al sur. La infraestructura vial y de transporte le da a Las Águilas una ventaja real: Av. Las Águilas es una arteria amplia que permite llegar en coche sin el drama de las calles estrechas del sur arbolado, y Metro Observatorio resuelve el acceso para quien no depende del coche.

Para el vecino de Las Águilas / Villa Verdún que busca opciones de entrenamiento sin complicarse con el tráfico de la ciudad, la colonia tiene lo esencial disponible. La concentración de opciones locales permite mantener la constancia sin depender del coche o del Metrobús para entrenar. A 2.240 metros de altitud, el cuerpo trabaja un poco más — eso convierte cada sesión en Las Águilas / Villa Verdún en un entrenamiento ligeramente más exigente que a nivel del mar, sin ningún esfuerzo extra de tu parte.`,

  gimnasios: {
    h1: 'Gimnasios en Las Águilas',
    metaDesc: 'Gimnasios en Las Águilas, CDMX: ~12–16 opciones de $700 a $1,800 MXN/mes. Av. Las Águilas, Metro Observatorio. Guía 2026.',
    intro: `Las Águilas tiene entre 12 y 16 gimnasios distribuidos sobre Av. Las Águilas, Calle Observatorio y sus transversales, con una densidad que refleja bien el tamaño y el perfil C+/B del barrio. El rango de membresía va de $700 a $1,800 MXN — consistentemente 20% más barato que San Ángel para el mismo perfil de establecimiento y hasta 40% más accesible que Roma Norte. Para quien entrena con seriedad y no necesita el ambiente boutique del sur arbolado, Las Águilas tiene una propuesta chida. El perfil de gymns en la zona es variado: desde independientes de barrio con equipamiento funcional y membresías flexibles de $700 a $1,000 MXN, hasta establecimientos más estructurados sobre Av. Las Águilas con salas de musculación amplias, área cardiovascular y clases grupales incluidas en la membresía de $1,200 a $1,800 MXN. Smart Fit no tiene presencia confirmada ahorita dentro del barrio, pero el perfil socioeconómico y la densidad poblacional lo hacen candidato natural para una apertura en los próximos 1-2 años — cuando llegue va a presionar a los independientes a diferenciarse. El acceso es una ventaja real: Metro Observatorio en Línea 1 conecta el barrio oriente con el resto de la ciudad sin depender del tráfico de Insurgentes Sur. Los gymns sobre Calle Observatorio son los más accesibles para quien llega en Metro. El estacionamiento es generalmente resuelto — sin el drama de Condesa o San Ángel. En coche desde el norte por Periférico Sur, el acceso es directo y sin semáforos complicados hasta Av. Las Águilas.`,
    faq: [
      {
        q: '¿Las Águilas tiene cadenas como Smart Fit o solo gymns independientes?',
        a: 'Ahorita el barrio opera principalmente con gymns independientes — el perfil C+/B y la densidad poblacional son los ingredientes correctos para Smart Fit pero la cadena no tiene presencia confirmada dentro del barrio en 2026. Los independientes que operan cubren bien el rango de precio y funcionalidad que la zona demanda. Si Smart Fit abre en la zona, probablemente se instale sobre Av. Las Águilas o cerca de Metro Observatorio por el flujo de personas. Cuando llegue, el precio de membresía en los independientes probablemente se presione hacia abajo.',
      },
      {
        q: '¿Cuánto cuesta una membresía de gym en Las Águilas comparado con San Ángel?',
        a: 'En promedio 20% más barato que San Ángel para el mismo perfil, güey. Un gym independiente bien equipado con pesas, cardio y clases grupales que cobra $1,400 MXN en San Ángel suele estar en $1,100 a $1,200 MXN en Las Águilas. Los gymns más básicos del barrio arrancan en $700 MXN. En el año, la diferencia es de $3,600 a $5,000 MXN — real y acumulable. La calidad del equipamiento es comparable en los establecimientos de nivel medio; la diferencia principal está en el ambiente y la densidad de opciones boutique, que en Las Águilas es menor.',
      },
      {
        q: '¿Cómo llego a los gymns de Las Águilas sin coche?',
        a: 'Metro Observatorio en Línea 1 es la opción más directa para el barrio oriente — desde ahí los gymns sobre Calle Observatorio están a 5-10 minutos caminando. Para el barrio más al poniente sobre Av. Las Águilas, las rutas de camión locales son la alternativa: cubren la avenida principal con frecuencia razonable. El Metrobús Línea 1 sobre Insurgentes Sur cubre la frontera oriente del barrio y desde las paradas de la zona se llega a pie o en microbús local. En comparación con Jardines del Pedregal, Las Águilas tiene una accesibilidad en transporte notablemente mejor.',
      },
    
      {
        q: '¿Los gyms del barrio ofrecen membresía sin anualidad?',
        a: 'Sí, la mayoría de los gimnasios de Las Águilas / Villa Verdún tienen mensualidades sin contrato anual. La inscripción inicial se puede negociar — pregunta directamente. Los gimnasios independientes de Las Águilas / Villa Verdún suelen ser más flexibles que las cadenas en cuanto a plazos.',
      },
    ],
    stats: [
      { label: 'Gimnasios',         value: '~12–16' },
      { label: 'Membresía mensual', value: '$700–$1,800 MXN' },
      { label: 'Calle clave',       value: 'Av. Las Águilas · Observatorio' },
      { label: 'vs. San Ángel',     value: '~20% más económico' },
    ],
    barrios: [
      { name: 'San Ángel',              slug: 'san-angel',              district: 'alvaro-obregon' },
      { name: 'Jardines del Pedregal',  slug: 'jardines-del-pedregal',  district: 'alvaro-obregon' },
      { name: 'Guadalupe Inn',          slug: 'guadalupe-inn',          district: 'alvaro-obregon' },
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
    h1: 'Estudios fitness en Las Águilas',
    metaDesc: 'Estudios en Las Águilas, CDMX: funcional, crossfit y yoga de $150 a $280 MXN/clase. Av. Las Águilas. Guía 2026.',
    intro: `Los estudios boutique de Las Águilas tienen un perfil diferente al de San Ángel o Jardines del Pedregal — más orientados al funcional, crossfit y entrenamiento grupal de alta intensidad que al pilates privado o yoga de linaje. Reflejan el carácter del barrio: pragmáticos, directos al grano, sin exceso de producción visual. El cuate de Las Águilas que va a un estudio de funcional quiere trabajar duro, no fotografiar la experiencia para redes.

El precio de clase suelta va de $150 a $280 MXN — ahorita el rango más accesible del poniente del CDMX y entre 30 y 40% más barato que el equivalente en Condesa o Roma Norte. Los paquetes mensuales de clases grupales van de $900 a $1,600 MXN, lo que hace que entrenar con regularidad en Las Águilas sea uno de los mejores valores del poniente para quien no necesita el ambiente boutique premium.

Los estudios de yoga y pilates en Las Águilas son menos que en San Ángel, pero tienen clientela fiel y precios honestos. Para yoga regular sin pagar el premium del sur arbolado, los estudios sobre Av. Las Águilas ofrecen clases de $150 a $200 MXN con instructoras que llevan años en el mismo local. El ambiente es de barrio en el buen sentido: te conocen por nombre después de 3 clases y el grupo tiene consistencia de mes a mes, no la rotación de los boutiques del norte.`,
    faq: [
      {
        q: '¿Hay estudios de crossfit y funcional de buena calidad en Las Águilas?',
        a: 'Sí, y es el segmento más chido de la escena boutique del barrio. Hay 3 a 5 studios de funcional y crossfit-style sobre Av. Las Águilas y sus transversales con equipamiento real — racks, kettlebells, remos, barras olímpicas — y coaches con certificaciones verificables. El precio de clase suelta va de $180 a $280 MXN; los paquetes mensuales de $1,000 a $1,500 MXN son competitivos para el nivel de instrucción que ofrecen. El tamaño de los grupos suele ser de 8 a 15 personas — razonable para mantener corrección técnica en movimientos complejos.',
      },
      {
        q: '¿Los estudios de Las Águilas aceptan pagos por clase sin membresía?',
        a: 'La mayoría sí, güey — es parte del perfil del mercado local. Los estudios del barrio entienden que su clientela C+/B no siempre quiere comprometerse con un paquete mensual, y ofrecen clase suelta a $150-$280 MXN sin obligación de membresía. Algunos ofrecen pase de semana para probar antes de comprometerse. Los paquetes de 10 clases sin vencimiento son también comunes — permiten flexibilidad para semanas de viaje o trabajo intenso. Es un modelo más amigable que el de muchos boutiques del norte de la ciudad que solo venden membresías mensuales.',
      },
      {
        q: '¿Las Águilas tiene opciones de pilates o es solo funcional?',
        a: 'Hay opciones de pilates aunque en menor densidad que en San Ángel o Jardines del Pedregal. Sobre Av. Las Águilas y en Villa Verdún hay 2-3 estudios que ofrecen pilates mat y algunos Reformer a precios de $180 a $280 MXN por clase. No es el ecosistema de pilates privado de Jardines del Pedregal, pero para práctica regular de mat o clases semi-privadas, la calidad es sólida a un precio notablemente más accesible. Para Reformer privado con instructor dedicado a los precios de la zona, la expectativa debe ajustarse: aquí el Reformer suele ser en grupos de 4-6, no en formato 1:1.',
      },
    
      {
        q: '¿Hay clase de prueba en los estudios de la colonia?',
        a: 'La mayoría ofrece una sesión de evaluación inicial o clase de prueba a precio reducido. Es la forma más directa de verificar si el nivel y el estilo del estudio se adaptan a lo que buscas. Contacta por WhatsApp — los estudios de barrio responden rápido.',
      },
    ],
    stats: [
      { label: 'Estudios activos',   value: '~5–8' },
      { label: 'Clase suelta',       value: '$150–$280 MXN' },
      { label: 'Formato dominante',  value: 'Funcional · Crossfit · Grupal' },
      { label: 'vs. Condesa',        value: '~35% más económico' },
    ],
    barrios: [
      { name: 'San Ángel',              slug: 'san-angel',              district: 'alvaro-obregon' },
      { name: 'Jardines del Pedregal',  slug: 'jardines-del-pedregal',  district: 'alvaro-obregon' },
      { name: 'Guadalupe Inn',          slug: 'guadalupe-inn',          district: 'alvaro-obregon' },
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
    h1: 'Entrenadores personales en Las Águilas — PT accesible y online 2026',
    metaDesc: 'Personal trainers en Las Águilas, CDMX: PTs C+/B de $300 a $700 MXN/sesión. Av. Las Águilas, Metro Observatorio. Guía 2026.',
    intro: `El personal training en Las Águilas tiene un perfil distinto al de Jardines del Pedregal — más accesible en precio, más abierto a formatos híbridos y con una presencia digital que los PTs del barrio premium no necesitan cultivar. Aquí los entrenadores sí están en Instagram, sí aceptan clientes nuevos sin lista de espera y sí tienen paquetes diseñados para el presupuesto C+/B. El modelo a domicilio existe pero no domina: muchos PTs de Las Águilas / Villa Verdún trabajan en los gymns locales como entrenadores in-house o utilizan el espacio de los estudios de funcional para sus sesiones. El precio de sesión individual va de $300 a $700 MXN, con el rango más común entre $350 y $500 MXN para PTs con 2-5 años de experiencia y certificación básica verificable. Los paquetes mensuales de 12 sesiones van de $3,600 a $8,400 MXN — significativamente más accesibles que el equivalente en Jardines del Pedregal o San Ángel. Para el cuate que quiere la guía de un PT sin el presupuesto del sur arbolado, Las Águilas tiene una oferta real y variada. El entrenamiento online tuvo ahorita una penetración fuerte — varios PTs mantienen carteras mixtas de clientes presenciales y remotos. Para quien viaja frecuentemente o tiene horarios variables, el formato híbrido es la solución más práctica: presencial cuando estás en la ciudad, remoto cuando no. El nivel de muchos entrenadores es comparable al de zonas más caras — el precio diferencial refleja la zona, no la calidad del entrenador.`,
    faq: [
      {
        q: '¿Los PTs de Las Águilas tienen certificaciones verificables?',
        a: 'Sí, aunque con más variabilidad que en zonas de mayor precio. En Las Águilas encuentras PTs con NASM, ACE y certificaciones locales de IMSS o instituciones reconocidas, junto con otros que tienen solo cursos de fin de semana. La diferencia en precio entre ambos perfiles es de $100-$200 MXN por sesión — suficiente para valer la pena preguntar. Antes de contratar cualquier PT, pedí específicamente que nombre su certificación principal y cuántas horas de práctica supervisada tiene. Un PT que no puede responder eso de forma directa ya te está diciendo algo.',
      },
      {
        q: '¿Cuánto ahorro contratando un PT en Las Águilas vs. San Ángel?',
        a: 'Entre $1,500 y $4,000 MXN al mes para el mismo perfil de entrenador, güey. Un PT con 3-5 años de experiencia y certificación real que cobra $600 MXN por sesión en San Ángel suele estar en $400-$450 MXN en Las Águilas. Con 12 sesiones al mes, esa diferencia es de $1,800 a $2,400 MXN mensuales — en el año, de $21,600 a $28,800 MXN. El ahorro es real y el nivel de instrucción en el rango medio es comparable. La diferencia principal: en San Ángel el PT probablemente tiene más experiencia con clientes de alto rendimiento; en Las Águilas el perfil de clientela es más diverso.',
      },
      {
        q: '¿Hay PTs especializados en pérdida de peso en Las Águilas?',
        a: 'Sí, y es la especialización más común en el barrio porque coincide con la demanda del perfil C+/B local. La mayoría de los PTs de la zona tienen experiencia en composición corporal y pueden diseñar programas orientados a pérdida de grasa con preservación de masa muscular. Lo importante: un buen PT de pérdida de peso en Las Águilas te va a preguntar sobre tu alimentación en la primera sesión — si no lo hace, el enfoque va a ser incompleto. El entrenamiento sin ajuste nutricional resuelve solo parte del problema; los PTs que trabajan en coordinación con nutriólogos o tienen formación básica en nutrición tienen mejor trackrecord para este objetivo.',
      },
    
      {
        q: '¿Cómo verifico que un entrenador personal de la colonia esté certificado?',
        a: 'Pide su certificación avalada por la Conade o alguna institución reconocida. Los entrenadores serios la muestran sin problema. También puedes pedir referencias de clientes actuales — los buenos PT de la colonia trabajan principalmente de boca en boca.',
      },
    ],
    stats: [
      { label: 'PTs activos zona',   value: '~30–45' },
      { label: 'Sesión individual',  value: '$300–$700 MXN' },
      { label: 'Paquete mensual',    value: '$3,600–$8,400 MXN' },
      { label: 'Formato frecuente',  value: 'Gym local · Híbrido online' },
    ],
    barrios: [
      { name: 'San Ángel',              slug: 'san-angel',              district: 'alvaro-obregon' },
      { name: 'Jardines del Pedregal',  slug: 'jardines-del-pedregal',  district: 'alvaro-obregon' },
      { name: 'Guadalupe Inn',          slug: 'guadalupe-inn',          district: 'alvaro-obregon' },
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
    h1: 'Eventos fitness en Las Águilas',
    metaDesc: 'Eventos fitness en Las Águilas, CDMX: carreras, clases comunitarias y competencias locales. Metro Observatorio. Guía 2026.',
    intro: `La escena de eventos fitness de Las Águilas es más activa y accesible al público que la de sus vecinos al sur, güey. El carácter de barrio popular con densidad de población real genera demanda de eventos comunitarios que en zonas más exclusivas no tienen cabida. Clases de funcional abiertas en parque, competencias amateur de crossfit, carreras locales de 5K y 10K organizadas por los gimnasios de Las Águilas / Villa Verdún: ese es el tipo de actividad que ahorita define el calendario fitness de Las Águilas. Los gymns más activos del barrio organizan clases de prueba abiertas y eventos mensuales para traer nueva clientela — práctica común en el mercado C+/B que los boutiques premium rara vez hacen. Estos eventos son accesibles, frecuentemente gratuitos o con costo simbólico de $50 a $150 MXN: buena puerta de entrada para conocer los establecimientos del barrio sin compromiso. Las carreras urbanas organizadas desde zonas adyacentes como Coyoacán o San Ángel tienen rutas que pasan por las colonias de Las Águilas — el terreno es llano y las calles amplias lo hacen más manejable que los barrios más angostos del sur. Para quienes entrenan para sus primeras carreras, los grupos de running que se forman en los gymns de Av. Las Águilas representan una opción chida y gratuita: salen los sábados temprano y tienen participantes de todos los niveles. Es el tipo de comunidad fitness que en Roma Norte cuesta membresía mensual y aquí sucede de forma gratuita o con costo simbólico.`,
    faq: [
      {
        q: '¿Hay carreras o eventos running que pasen por Las Águilas?',
        a: 'Sí, aunque la mayoría son eventos de zonas adyacentes que incluyen las colonias de Las Águilas en su ruta. Las carreras organizadas desde Coyoacán o San Ángel frecuentemente recorren Av. Las Águilas por su amplitud y menor tráfico en horario dominical. Los gymns locales más activos también organizan sus propias carreras internas de 5K para sus comunidades. Para enterarte de eventos locales, seguir las cuentas de Instagram de los gymns de Av. Las Águilas es el canal más directo — ahí se anuncian con 1-2 semanas de anticipación.',
      },
      {
        q: '¿Los gymns de Las Águilas organizan clases abiertas gratuitas?',
        a: 'Varios sí, especialmente los que buscan captar nueva clientela. Es más común encontrar clases abiertas de prueba en Las Águilas que en San Ángel o Jardines del Pedregal porque el modelo de adquisición de clientes en el mercado C+/B depende más de la prueba directa. Ahorita, algunos gimnasios de Las Águilas / Villa Verdún hacen clases comunitarias en el parque más cercano una vez al mes — gratuitas, sin registro previo, abiertas a cualquiera. Es un formato chido para probar el nivel de instrucción de un establecimiento antes de pagar membresía.',
      },
      {
        q: '¿Hay competencias de crossfit o funcional en Las Águilas?',
        a: 'Hay competencias amateur organizadas por los estudios de funcional del barrio — cupos pequeños, formato de 2-4 eventos al año, participación abierta a quienes entrenan en la zona con mínimo 3 meses de práctica. No son competencias de nivel regional, pero tienen el nivel y la organización correctos para quien quiere su primer contacto con el formato competitivo sin el estrés de un evento grande. El costo de inscripción suele ir de $150 a $300 MXN. Para enterarte de fechas, los estudios de funcional sobre Av. Las Águilas son la fuente directa.',
      },
    
      {
        q: '¿Cómo me entero de los eventos fitness de la colonia?',
        a: 'Sigue las redes sociales de los gymns y estudios del barrio — los eventos se anuncian con pocos días de anticipación. Los grupos de WhatsApp vecinales también son buena fuente para las actividades comunitarias gratuitas en parques y jardines de la zona.',
      },
    ],
    stats: [
      { label: 'Tipo dominante',     value: 'Comunitario · Carreras locales' },
      { label: 'Clases abiertas',    value: 'Frecuentes · Gratuitas/bajo costo' },
      { label: 'Costo de inscripción', value: '$50–$300 MXN' },
      { label: 'Canal de info',      value: 'Instagram gymns locales' },
    ],
    barrios: [
      { name: 'San Ángel',              slug: 'san-angel',              district: 'alvaro-obregon' },
      { name: 'Jardines del Pedregal',  slug: 'jardines-del-pedregal',  district: 'alvaro-obregon' },
      { name: 'Guadalupe Inn',          slug: 'guadalupe-inn',          district: 'alvaro-obregon' },
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
    h1: 'Bienestar en Las Águilas',
    metaDesc: 'Bienestar en Las Águilas, CDMX: masajes, nutrición y fisioterapia de $400 a $1,200 MXN/sesión. Av. Las Águilas. Guía 2026.',
    intro: `El mercado de bienestar en Las Águilas es uno de los más accesibles y variados del poniente del CDMX — una mezcla de consultorios de nutrición, centros de masaje terapéutico, fisioterapeutas independientes y spas de barrio que operan sobre Av. Las Águilas y sus colonias adyacentes. El perfil C+/B del barrio genera demanda de servicios de calidad real a precios que no requieren el presupuesto ABC+ de Jardines del Pedregal.

Los servicios de masaje van de $400 a $1,200 MXN — entre 40 y 50% más baratos que el equivalente en Jardines del Pedregal o Santa Fe para calidad comparable. Los masajistas terapéuticos del barrio tienen experiencia real en deportivo, sueco y drenaje linfático, y varios trabajan en coordinación con los PTs y gymns de la zona para ofrecer paquetes de recuperación post-entrenamiento. El formato más común es el consultorio establecido sobre la avenida principal, accesible sin cita con varios días de anticipación.

La nutrición en Las Águilas tiene presencia fuerte por la densidad de consultorios médicos y de salud del barrio. Los nutriólogos con práctica general — pérdida de peso, control de glucosa, alimentación familiar — son abundantes y accesibles en precio: consulta inicial de $500 a $900 MXN, seguimiento mensual de $800 a $1,500 MXN. Los nutriólogos deportivos específicos son menos frecuentes que en zonas más fitness-intensivas, pero los que operan en el barrio tienen buena reputación y trabajan con clientela de los gymns locales con resultados rastreables.`,
    faq: [
      {
        q: '¿Dónde encuentro masaje terapéutico de calidad en Las Águilas?',
        a: 'Sobre Av. Las Águilas hay varios centros de masaje con 5+ años de operación que tienen masajistas con experiencia real en deportivo y terapéutico. La forma de validar calidad antes de pagar: preguntá cuántos años lleva el masajista trabajando en esa modalidad específica y si tiene clientela fija — no solo turistas de un servicio. Los centros con carteleras de servicios detalladas y precios publicados tienden a ser más transparentes que los que solo muestran el precio por hora. El rango honesto para masaje terapéutico de calidad real en el barrio: $500 a $900 MXN por sesión de 60 minutos.',
      },
      {
        q: '¿Hay nutriólogos deportivos en Las Águilas o solo generales?',
        a: 'Hay algunos nutriólogos deportivos aunque en menor densidad que en zonas más premium, güey. Los que operan en el barrio suelen tener relación directa con los gymns y PTs locales — si entrenas con un PT de la zona, él probablemente te puede referir al nutriólogo con quien trabaja de forma coordinada. Para pérdida de peso con componente de entrenamiento, esa coordinación PT-nutriólogo es ahorita el modelo más efectivo. Los nutriólogos generales del barrio son muy buenos y más accesibles — si tu objetivo es alimentación general o control de peso sin programa de entrenamiento intensivo, esa opción cubre bien la demanda.',
      },
      {
        q: '¿Las Águilas tiene fisioterapeutas para lesiones deportivas?',
        a: 'Sí, y el barrio tiene fisioterapeutas con experiencia en lesiones de rodilla, hombro y columna que son las más frecuentes en la clientela de gymns y corredores. El precio de consulta va de $400 a $800 MXN — significativamente más accesible que el equivalente en Polanco o Santa Fe. Para lesiones deportivas agudas, la recomendación es buscar fisioterapeuta con experiencia específica en el tipo de lesión, no solo uno general. Los gymns de Av. Las Águilas suelen conocer qué fisioterapeutas del barrio tienen mejor trackrecord con lesiones deportivas específicas — esa referencia directa vale más que una búsqueda en Google.',
      },
    
      {
        q: '¿Necesito cita previa para masaje en la colonia?',
        a: 'Generalmente sí, sobre todo para masaje deportivo y consultas de nutrición. La mayoría de centros acepta reservas por WhatsApp con 24-48 horas de anticipación. Entre semana en horario de mañana suele haber disponibilidad inmediata sin cita previa.',
      },
    ],
    stats: [
      { label: 'Masaje terapéutico', value: '$400–$1,200 MXN/sesión' },
      { label: 'Consulta nutrición', value: '$500–$900 MXN' },
      { label: 'Fisioterapia',       value: '$400–$800 MXN/sesión' },
      { label: 'vs. Jardines Pedregral', value: '~45% más económico' },
    ],
    barrios: [
      { name: 'San Ángel',              slug: 'san-angel',              district: 'alvaro-obregon' },
      { name: 'Jardines del Pedregal',  slug: 'jardines-del-pedregal',  district: 'alvaro-obregon' },
      { name: 'Guadalupe Inn',          slug: 'guadalupe-inn',          district: 'alvaro-obregon' },
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
