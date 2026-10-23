// Diccionario base. Su forma define el tipo Dictionary que deben cumplir
// los demás idiomas. Las {claves} se sustituyen con format().

const es = {
  meta: {
    title: "{name} Abogados | Derecho empresarial, laboral y civil",
    description:
      "Despacho de abogados especializado en derecho empresarial, laboral y civil. Evalúe su caso en línea y reciba respuesta de un abogado en 24 horas hábiles.",
    ogDescription:
      "Evalúe su caso en línea y reciba respuesta de un abogado en 24 horas hábiles.",
    ogLocale: "es_ES",
  },

  common: {
    firmSuffix: "Abogados",
    skipLink: "Ir a la evaluación del caso",
  },

  notFound: {
    title: "Página no encontrada",
    text: "La dirección que ha abierto no existe o ha cambiado.",
    cta: "Volver al inicio",
  },

  nav: {
    items: [
      { label: "Especialidades", href: "#especialidades" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Equipo", href: "#equipo" },
      { label: "Metodología", href: "#metodologia" },
      { label: "Consulta", href: "#consulta" },
    ],
    cta: "Evaluar mi caso",
    mainLabel: "Principal",
    mobileLabel: "Móvil",
    openMenu: "Abrir menú",
    menuDescription: "Navegación del sitio",
    languageLabel: "Idioma",
  },

  hero: {
    registry: "Colegiados · Reg. 04521",
    titleLead: "Su empresa, su trabajo, su patrimonio.",
    titleAccent: "Bien defendidos.",
    intro:
      "Somos un despacho de doce abogados en derecho empresarial, laboral y civil. Le decimos con claridad qué riesgo tiene, cuánto le va a costar y qué vamos a hacer.",
    cta: "Evaluar mi caso gratis",
    reviews: "230 reseñas",
    imageAlt:
      "Andrés Altamira, socio fundador, de traje y con los brazos cruzados",
    stats: [
      { value: "18", suffix: "años", label: "ejerciendo en tres jurisdicciones" },
      { value: "1.200", suffix: "+", label: "asuntos cerrados" },
      { value: "94", suffix: "%", label: "resueltos a favor del cliente" },
      { value: "24", suffix: "h", label: "para responder su consulta" },
    ],
  },

  about: {
    eyebrow: "Quiénes somos",
    titleLead: "Preferimos un buen acuerdo",
    titleAccent: "a un mal juicio.",
    imageAlt: "Estantería con libros antiguos de derecho",
    lead: "Abrimos el despacho en 2008 porque nos cansamos de ver clientes que salían de una reunión sin entender qué les habían dicho.",
    paragraphs: [
      "Trabajamos con empresas, trabajadores y familias. La mayoría llega con un problema que lleva meses creciendo. Nuestro primer trabajo es medirlo: qué tan grave es, cuánto tiempo queda y qué opciones hay de verdad.",
      "Cada asunto lo lleva un socio, no un pasante. Usted tendrá su teléfono directo y un presupuesto cerrado antes de firmar nada.",
    ],
    highlights: [
      { title: "Socio a cargo", text: "de cada asunto" },
      { title: "Honorarios", text: "cerrados por escrito" },
      { title: "Respuesta", text: "en 24 h hábiles" },
    ],
    cta: "Hablar con un abogado",
  },

  specialties: {
    eyebrow: "Especialidades",
    titleLead: "Tres áreas.",
    titleAccent: "Un mismo criterio.",
    intro:
      "No hacemos de todo. Hacemos derecho empresarial, laboral y civil, y lo hacemos a fondo.",
    prev: "Especialidad anterior",
    next: "Especialidad siguiente",
    carousel: "carrusel",
    slide: "diapositiva",
    slidePosition: "{n} de {total}",
    consultAbout: "Consultar sobre {title}",
    items: {
      empresarial: {
        tag: "Empresarial",
        title: "Sociedades y empresa",
        text: "Constitución de sociedades, pactos de socios, compraventa de empresas y gobierno corporativo para pymes y grupos familiares.",
      },
      laboral: {
        tag: "Laboral",
        title: "Trabajo y empleo",
        text: "Despidos, reclamaciones salariales, acoso laboral y asesoría a empleadores en contratación, reglamentos y despidos colectivos.",
      },
      civil: {
        tag: "Civil",
        title: "Patrimonio y familia",
        text: "Herencias, arrendamientos, responsabilidad civil y cobro de deudas. Lo que afecta a su casa, su familia y su dinero.",
      },
      contratos: {
        tag: "Contratos",
        title: "Contratos comerciales",
        text: "Redactamos y revisamos contratos de distribución, suministro y servicios antes de que firme. Es más barato que un pleito.",
      },
      litigio: {
        tag: "Litigio",
        title: "Juicios y arbitraje",
        text: "Cuando no hay acuerdo posible, vamos a juicio preparados. Litigamos en primera instancia, apelación y arbitraje comercial.",
      },
    },
  },

  experience: {
    eyebrow: "Experiencia",
    titleLead: "Casos que hemos",
    titleAccent: "cerrado",
    intro:
      "Una muestra de los asuntos del último año. Los nombres de los clientes se quedan con nosotros.",
    cta: "Consultar un caso parecido",
    columns: { matter: "Asunto", area: "Área", date: "Fecha" },
    cases: {
      logistica: {
        title: "Reestructuración de un grupo logístico",
        area: "Empresarial",
        date: "Sep 2026",
      },
      despidoColectivo: {
        title: "Despido colectivo pactado sin juicio",
        area: "Laboral",
        date: "Ago 2026",
      },
      local: {
        title: "Recuperación de un local arrendado",
        area: "Civil",
        date: "Jun 2026",
      },
      socios: {
        title: "Ruptura entre socios fundadores",
        area: "Empresarial",
        date: "Abr 2026",
      },
      accidente: {
        title: "Indemnización por accidente de trabajo",
        area: "Laboral",
        date: "Feb 2026",
      },
      herencia: {
        title: "Herencia con bienes en dos países",
        area: "Civil",
        date: "Dic 2025",
      },
    },
  },

  team: {
    eyebrow: "Equipo",
    titleLead: "Las personas que",
    titleAccent: "llevarán su caso",
    intro:
      "Cuatro socios y ocho asociados. Usted conocerá al socio responsable desde la primera reunión.",
    portraitOf: "Retrato de {name}",
    members: {
      altamira: {
        role: "Socio fundador",
        area: "Derecho empresarial",
        bio: "Veinte años asesorando a empresas familiares. Antes, abogado interno en un banco.",
      },
      ferrer: {
        role: "Socia directora",
        area: "Derecho civil",
        bio: "Herencias y patrimonio. Media en conflictos familiares antes de pensar en demandar.",
      },
      olivares: {
        role: "Socio",
        area: "Derecho laboral",
        bio: "Ha defendido a trabajadores y a empresas, así que sabe cómo piensa la otra parte.",
      },
      lagos: {
        role: "Of counsel",
        area: "Litigio y arbitraje",
        bio: "Exjuez de primera instancia. Prepara cada juicio como si fuera a dictar la sentencia.",
      },
    },
  },

  process: {
    eyebrow: "Metodología",
    titleLead: "Cuatro pasos,",
    titleAccent: "sin rodeos",
    intro:
      "Desde la primera llamada sabrá en qué fase está su caso, qué viene después y cuánto falta.",
    cta: "Empezar por el paso 1",
    steps: [
      {
        title: "Evaluación inicial",
        text: "Revisamos su caso y le decimos, sin tecnicismos, qué opciones tiene y cuánto riesgo corre.",
      },
      {
        title: "Estrategia y presupuesto",
        text: "Plan por escrito con plazos y honorarios cerrados. Sin sorpresas en la factura.",
      },
      {
        title: "Negociación o juicio",
        text: "Intentamos el acuerdo primero. Si no llega, litigamos con el expediente ya preparado.",
      },
      {
        title: "Cierre y seguimiento",
        text: "Ejecutamos lo acordado y le avisamos de cada plazo que venga después.",
      },
    ],
  },

  evaluation: {
    eyebrow: "Consulta",
    titleLead: "Evaluación inicial",
    titleAccent: "de su caso",
    intro:
      "Tres pasos, unos cuatro minutos. Al terminar verá qué abogado lo atenderá, qué prioridad le damos y qué documentos conviene tener a mano. La primera evaluación no tiene coste.",
    hours: "Lunes a viernes · 8:30 a 18:30",
    privacyNote:
      "Todo lo que nos cuente está protegido por el secreto profesional, aunque no llegue a contratarnos.",
    stepTitles: ["Su caso", "Situación actual", "Sus datos"],
    progress: "Paso {step} de {total}: {title}",
    fields: {
      area: { legend: "¿En qué área necesita ayuda?", required: "Elija un área." },
      clientType: {
        legend: "¿Consulta como particular o como empresa?",
        required: "Indique el tipo de cliente.",
        options: {
          persona: { label: "Particular", hint: "Persona física o trabajador" },
          empresa: { label: "Empresa", hint: "Sociedad, autónomo o empleador" },
        },
      },
      situation: {
        legend: "¿Cuál se parece más a su situación?",
        required: "Elija la opción más cercana.",
        empty: "Elija primero un área para ver las opciones.",
      },
      urgency: {
        legend: "¿Qué tan urgente es?",
        required: "Indique la urgencia.",
        options: {
          baja: { label: "Puede esperar", hint: "Quiero informarme" },
          media: { label: "En las próximas semanas", hint: "Hay que moverse pronto" },
          alta: { label: "Urgente", hint: "Tengo un plazo o una citación" },
        },
      },
      openProcess: {
        legend: "¿Hay ya una demanda, citación o plazo en curso?",
        required: "Responda sí o no.",
        options: {
          si: { label: "Sí", hint: "He recibido una notificación" },
          no: { label: "No", hint: "Todavía no hay nada formal" },
        },
      },
      deadline: { label: "Fecha límite o de la citación (si la conoce)" },
      description: {
        label: "Cuéntenos brevemente qué ha pasado",
        placeholder: "Fechas, personas implicadas y qué le preocupa más.",
        counter: "{count}/1000 · mínimo 30 caracteres",
        required: "Describa su caso.",
        minLength: "Necesitamos un poco más de detalle (30 caracteres).",
      },
      name: { label: "Nombre completo", required: "Escriba su nombre." },
      phone: {
        label: "Teléfono",
        required: "Escriba un teléfono.",
        invalid: "Revise el número.",
      },
      email: {
        label: "Correo electrónico",
        required: "Escriba su correo.",
        invalid: "Revise el correo.",
      },
      contactPref: {
        legend: "¿Cómo prefiere que le contactemos?",
        options: { llamada: "Llamada", email: "Correo", whatsapp: "WhatsApp" },
      },
      consent: {
        text: "Acepto enviar estos datos por WhatsApp a {firm} para que evalúe mi caso y me contacte. El sitio web no los guarda.",
        privacyLink: "Política de privacidad",
        required: "Necesitamos su autorización para enviar la consulta.",
      },
    },
    areas: {
      empresarial: {
        label: "Empresarial",
        hint: "Sociedades, socios, contratos comerciales",
        situations: {
          sociedad: "Constituir o reorganizar una sociedad",
          socios: "Conflicto entre socios",
          compraventa: "Compra o venta de una empresa",
          contrato: "Contrato comercial incumplido",
          cumplimiento: "Cumplimiento normativo",
        },
        documents: [
          "Escrituras y estatutos de la sociedad",
          "Pacto de socios, si existe",
          "Contratos y correos relevantes",
          "Últimos estados financieros",
        ],
      },
      laboral: {
        label: "Laboral",
        hint: "Despidos, salarios, relaciones con empleados",
        situations: {
          despido: "Me despidieron",
          salarios: "Me deben salarios o prestaciones",
          acoso: "Acoso o trato discriminatorio",
          accidente: "Accidente de trabajo",
          empleador: "Soy empleador y necesito asesoría",
        },
        documents: [
          "Contrato de trabajo",
          "Carta de despido o comunicaciones",
          "Últimas nóminas",
          "Pruebas: correos, mensajes, testigos",
        ],
      },
      civil: {
        label: "Civil",
        hint: "Herencias, arriendos, deudas, daños",
        situations: {
          herencia: "Herencia o sucesión",
          arrendamiento: "Problema con un arrendamiento",
          deuda: "Me deben dinero",
          danos: "Daños y perjuicios",
          contrato: "Incumplimiento de contrato entre particulares",
        },
        documents: [
          "Contratos o escrituras",
          "Facturas, recibos o pagarés",
          "Comunicaciones con la otra parte",
          "Documentos de identidad de los implicados",
        ],
      },
    },
    actions: {
      back: "Atrás",
      next: "Continuar",
      submit: "Enviar por WhatsApp",
      noCommitment: "Sin compromiso",
      whatsappNote:
        "Se abrirá WhatsApp con su consulta ya escrita. Solo tiene que pulsar enviar.",
    },
    toast: {
      title: "Abrimos WhatsApp",
      description: "Referencia {ref}. Pulse enviar en WhatsApp para completar la consulta.",
    },
    result: {
      reference: "Referencia {ref}",
      thanks: "Gracias, {name}. Su consulta está lista en WhatsApp.",
      contactIn:
        "Pulse enviar en WhatsApp para que nos llegue. Después, un abogado le responderá {time}. Esto es lo que vemos de entrada:",
      reopenHint: "¿No se abrió WhatsApp?",
      reopen: "Abrir WhatsApp de nuevo",
      area: "Área",
      priority: "Prioridad",
      lawyer: "Abogado asignado",
      docsTitle: "Tenga a mano para la primera reunión",
      disclaimer:
        "Esta evaluación es orientativa y no constituye asesoramiento legal. El análisis definitivo lo hará el abogado tras revisar su documentación.",
      restart: "Evaluar otro caso",
      priorities: { alta: "Alta", media: "Media", normal: "Normal" },
      responseTimes: {
        alta: "hoy mismo o el próximo día hábil",
        media: "en menos de 24 horas hábiles",
        normal: "en menos de 48 horas hábiles",
      },
    },
    // Etiquetas del mensaje que llega al WhatsApp del despacho
    whatsapp: {
      title: "Nueva evaluación de caso · {firm}",
      reference: "Referencia",
      priority: "Prioridad",
      area: "Área",
      lawyer: "Abogado asignado",
      clientType: "Tipo de cliente",
      name: "Nombre",
      phone: "Teléfono",
      email: "Correo",
      contactPref: "Prefiere contacto por",
      urgency: "Urgencia",
      openProcess: "Proceso o plazo abierto",
      deadline: "Fecha límite",
      noDeadline: "Sin indicar",
      description: "Descripción",
    },
  },

  footer: {
    ctaLead: "¿Tiene dudas sobre su caso?",
    ctaAccent: "Pregúntenos.",
    cta: "Evaluar mi caso",
    tagline: "Derecho empresarial, laboral y civil desde 2008.",
    navLabel: "Pie de página",
    sections: "Secciones",
    contact: "Contacto",
    hours: "Horario",
    hoursText: "Lunes a viernes · 8:30 a 18:30",
    hoursNote: "Urgencias laborales y citaciones: atendemos el mismo día.",
    rights: "Todos los derechos reservados.",
    legal: [
      { label: "Aviso legal", slug: "aviso-legal" },
      { label: "Privacidad", slug: "privacidad" },
      { label: "Cookies", slug: "cookies" },
    ],
    credit: "Hecho con Claude Web Builder de",
  },

  // Páginas legales. Los {marcadores} se rellenan con legalEntity (src/content/firm.ts).
  // PLANTILLA ORIENTATIVA: un abogado debe revisar estos textos antes de publicarlos.
  legal: {
    backHome: "Volver al inicio",
    updated: "Última actualización: {updated}",
    pages: {
      "aviso-legal": {
        title: "Aviso legal",
        sections: [
          {
            heading: "Titular del sitio web",
            paragraphs: [
              "Este sitio web pertenece a {name}, con NIF/CIF {taxId} y domicilio en {address}, {city}.",
              "Correo electrónico: {email}. WhatsApp: {whatsapp}.",
              "Los abogados del despacho están colegiados en el {bar} con el número de registro {registry}.",
            ],
          },
          {
            heading: "Objeto",
            paragraphs: [
              "Este sitio informa sobre los servicios jurídicos de {name} y permite enviar una consulta inicial por WhatsApp. La información publicada es general y no constituye asesoramiento legal para un caso concreto.",
            ],
          },
          {
            heading: "Responsabilidad",
            paragraphs: [
              "{name} no se hace responsable de las decisiones tomadas a partir de la información general de este sitio sin una consulta profesional previa, ni de los contenidos de sitios de terceros enlazados.",
            ],
          },
          {
            heading: "Propiedad intelectual",
            paragraphs: [
              "Los textos, el diseño y la marca de este sitio pertenecen a {name} o se usan con licencia. No se permite su reproducción sin autorización.",
            ],
          },
          {
            heading: "Legislación aplicable",
            paragraphs: [
              "Este aviso legal se rige por [LEGISLACIÓN APLICABLE]. Para cualquier controversia, las partes se someten a los juzgados y tribunales de {city}.",
            ],
          },
        ],
      },
      privacidad: {
        title: "Política de privacidad",
        sections: [
          {
            heading: "Responsable del tratamiento",
            paragraphs: [
              "{name}, NIF/CIF {taxId}, con domicilio en {address}, {city}. Contacto: {email}.",
            ],
          },
          {
            heading: "Qué datos tratamos y cómo llegan",
            paragraphs: [
              "El formulario de evaluación de caso no guarda ningún dato en este sitio web. Al pulsar «Enviar por WhatsApp», su navegador abre WhatsApp con un mensaje que contiene los datos que usted ha escrito: nombre, teléfono, correo, área legal, urgencia, plazos y descripción del caso.",
              "Los datos solo nos llegan si usted envía ese mensaje desde su WhatsApp.",
            ],
          },
          {
            heading: "Finalidad y base legal",
            paragraphs: [
              "Usamos sus datos para evaluar su consulta y contactarle. La base legal es su consentimiento, que puede retirar en cualquier momento.",
            ],
          },
          {
            heading: "Destinatarios",
            paragraphs: [
              "El mensaje se transmite a través de WhatsApp, servicio de WhatsApp LLC / Meta Platforms, sujeto a sus propias condiciones y política de privacidad. Puede implicar transferencias internacionales de datos.",
              "No cedemos sus datos a otros terceros salvo obligación legal.",
              "Las fotografías de demostración se cargan desde images.unsplash.com, que recibe la dirección IP del visitante. Si se sustituyen por fotos propias alojadas en este sitio, elimine este párrafo.",
            ],
          },
          {
            heading: "Conservación",
            paragraphs: [
              "Conservamos la conversación durante [PLAZO DE CONSERVACIÓN] o mientras dure la relación profesional, y después durante los plazos que exija la ley.",
            ],
          },
          {
            heading: "Sus derechos",
            paragraphs: [
              "Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {email}. También puede reclamar ante [AUTORIDAD DE PROTECCIÓN DE DATOS].",
              "Normativa de referencia: [NORMATIVA DE PROTECCIÓN DE DATOS APLICABLE].",
            ],
          },
        ],
      },
      cookies: {
        title: "Política de cookies",
        sections: [
          {
            heading: "Qué cookies usa este sitio",
            paragraphs: [
              "Este sitio no instala cookies. No usamos herramientas de analítica, publicidad ni redes sociales.",
              "El idioma se elige con el selector ES/EN y forma parte de la dirección (/es o /en), así que no hace falta guardarlo.",
            ],
          },
          {
            heading: "Si se añaden servicios externos",
            paragraphs: [
              "Si en el futuro se incorpora analítica, un mapa, vídeos u otro servicio que use cookies, esta política deberá actualizarse y, cuando la ley lo exija, pedirse el consentimiento previo.",
            ],
          },
          {
            heading: "Contacto",
            paragraphs: ["Para cualquier duda sobre esta política, escriba a {email}."],
          },
        ],
      },
    },
  },
};

export type Dictionary = typeof es;

export default es;
