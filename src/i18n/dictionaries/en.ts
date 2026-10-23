import type { Dictionary } from "./es";

const en: Dictionary = {
  meta: {
    title: "{name} Law Firm | Business, employment and civil law",
    description:
      "Law firm focused on business, employment and civil law. Get your case assessed online and hear back from a lawyer within one business day.",
    ogDescription:
      "Get your case assessed online and hear back from a lawyer within one business day.",
    ogLocale: "en_US",
  },

  common: {
    firmSuffix: "Law Firm",
    skipLink: "Skip to the case assessment",
  },

  notFound: {
    title: "Page not found",
    text: "The address you opened does not exist or has changed.",
    cta: "Back to home",
  },

  nav: {
    items: [
      { label: "Practice areas", href: "#especialidades" },
      { label: "Track record", href: "#experiencia" },
      { label: "Team", href: "#equipo" },
      { label: "Our process", href: "#metodologia" },
      { label: "Contact", href: "#consulta" },
    ],
    cta: "Assess my case",
    mainLabel: "Main",
    mobileLabel: "Mobile",
    openMenu: "Open menu",
    menuDescription: "Site navigation",
    languageLabel: "Language",
  },

  hero: {
    registry: "Licensed · Reg. 04521",
    titleLead: "Your business, your job, your assets.",
    titleAccent: "Properly defended.",
    intro:
      "We are a firm of twelve lawyers in business, employment and civil law. We tell you plainly how much risk you face, what it will cost and what we are going to do.",
    cta: "Assess my case for free",
    reviews: "230 reviews",
    imageAlt: "Andrés Altamira, founding partner, in a suit with arms crossed",
    stats: [
      { value: "18", suffix: "yrs", label: "practising in three jurisdictions" },
      { value: "1,200", suffix: "+", label: "matters closed" },
      { value: "94", suffix: "%", label: "resolved in the client's favour" },
      { value: "24", suffix: "h", label: "to answer your enquiry" },
    ],
  },

  about: {
    eyebrow: "Who we are",
    titleLead: "We'd rather reach a good deal",
    titleAccent: "than win a bad trial.",
    imageAlt: "Bookshelf with old law books",
    lead: "We opened the firm in 2008 because we were tired of seeing clients leave a meeting without understanding what they had been told.",
    paragraphs: [
      "We work with companies, employees and families. Most come to us with a problem that has been growing for months. Our first job is to size it up: how serious it is, how much time is left and which options are actually on the table.",
      "Every matter is led by a partner, not a trainee. You get their direct line and a fixed quote before you sign anything.",
    ],
    highlights: [
      { title: "A partner", text: "on every matter" },
      { title: "Fixed fees", text: "agreed in writing" },
      { title: "Reply", text: "within 24 business hours" },
    ],
    cta: "Talk to a lawyer",
  },

  specialties: {
    eyebrow: "Practice areas",
    titleLead: "Three areas.",
    titleAccent: "One standard.",
    intro:
      "We don't do everything. We do business, employment and civil law, and we do them thoroughly.",
    prev: "Previous practice area",
    next: "Next practice area",
    carousel: "carousel",
    slide: "slide",
    slidePosition: "{n} of {total}",
    consultAbout: "Ask about {title}",
    items: {
      empresarial: {
        tag: "Business",
        title: "Companies and corporate",
        text: "Company formation, shareholder agreements, mergers and acquisitions, and corporate governance for SMEs and family groups.",
      },
      laboral: {
        tag: "Employment",
        title: "Work and employment",
        text: "Dismissals, wage claims, workplace harassment, and advice for employers on hiring, internal policies and collective redundancies.",
      },
      civil: {
        tag: "Civil",
        title: "Property and family",
        text: "Inheritance, leases, civil liability and debt recovery. The things that affect your home, your family and your money.",
      },
      contratos: {
        tag: "Contracts",
        title: "Commercial contracts",
        text: "We draft and review distribution, supply and service agreements before you sign. It costs far less than a lawsuit.",
      },
      litigio: {
        tag: "Litigation",
        title: "Trials and arbitration",
        text: "When no agreement is possible, we go to court prepared. We litigate at first instance, on appeal and in commercial arbitration.",
      },
    },
  },

  experience: {
    eyebrow: "Track record",
    titleLead: "Cases we have",
    titleAccent: "closed",
    intro:
      "A sample of matters from the past year. Our clients' names stay with us.",
    cta: "Ask about a similar case",
    columns: { matter: "Matter", area: "Area", date: "Date" },
    cases: {
      logistica: {
        title: "Restructuring of a logistics group",
        area: "Business",
        date: "Sep 2026",
      },
      despidoColectivo: {
        title: "Collective redundancy settled out of court",
        area: "Employment",
        date: "Aug 2026",
      },
      local: {
        title: "Recovery of a leased commercial unit",
        area: "Civil",
        date: "Jun 2026",
      },
      socios: {
        title: "Split between founding partners",
        area: "Business",
        date: "Apr 2026",
      },
      accidente: {
        title: "Compensation for a workplace accident",
        area: "Employment",
        date: "Feb 2026",
      },
      herencia: {
        title: "Estate with assets in two countries",
        area: "Civil",
        date: "Dec 2025",
      },
    },
  },

  team: {
    eyebrow: "Team",
    titleLead: "The people who will",
    titleAccent: "handle your case",
    intro:
      "Four partners and eight associates. You will meet the partner in charge at the very first meeting.",
    portraitOf: "Portrait of {name}",
    members: {
      altamira: {
        role: "Founding partner",
        area: "Business law",
        bio: "Twenty years advising family businesses. Before that, in-house counsel at a bank.",
      },
      ferrer: {
        role: "Managing partner",
        area: "Civil law",
        bio: "Inheritance and estates. She mediates family disputes before anyone thinks of suing.",
      },
      olivares: {
        role: "Partner",
        area: "Employment law",
        bio: "He has represented both workers and companies, so he knows how the other side thinks.",
      },
      lagos: {
        role: "Of counsel",
        area: "Litigation and arbitration",
        bio: "Former trial judge. He prepares every case as if he were the one writing the ruling.",
      },
    },
  },

  process: {
    eyebrow: "Our process",
    titleLead: "Four steps,",
    titleAccent: "no detours",
    intro:
      "From the first call you'll know what stage your case is at, what comes next and how long is left.",
    cta: "Start with step 1",
    steps: [
      {
        title: "Initial assessment",
        text: "We review your case and tell you, without jargon, what your options are and how much risk you face.",
      },
      {
        title: "Strategy and quote",
        text: "A written plan with deadlines and fixed fees. No surprises on the invoice.",
      },
      {
        title: "Negotiation or trial",
        text: "We try to settle first. If that fails, we litigate with the file already prepared.",
      },
      {
        title: "Closing and follow-up",
        text: "We carry out what was agreed and flag every deadline that comes after.",
      },
    ],
  },

  evaluation: {
    eyebrow: "Contact",
    titleLead: "Initial assessment",
    titleAccent: "of your case",
    intro:
      "Three steps, about four minutes. At the end you'll see which lawyer will handle it, what priority we give it and which documents to have ready. The first assessment is free.",
    hours: "Monday to Friday · 8:30 am to 6:30 pm",
    privacyNote:
      "Everything you tell us is protected by legal privilege, even if you don't end up hiring us.",
    stepTitles: ["Your case", "Current situation", "Your details"],
    progress: "Step {step} of {total}: {title}",
    fields: {
      area: { legend: "Which area do you need help with?", required: "Choose an area." },
      clientType: {
        legend: "Are you asking as an individual or a company?",
        required: "Tell us the type of client.",
        options: {
          persona: { label: "Individual", hint: "Private person or employee" },
          empresa: { label: "Company", hint: "Business, self-employed or employer" },
        },
      },
      situation: {
        legend: "Which is closest to your situation?",
        required: "Choose the closest option.",
        empty: "Choose an area first to see the options.",
      },
      urgency: {
        legend: "How urgent is it?",
        required: "Tell us how urgent it is.",
        options: {
          baja: { label: "It can wait", hint: "I want to understand my options" },
          media: { label: "In the next few weeks", hint: "We need to move soon" },
          alta: { label: "Urgent", hint: "I have a deadline or a summons" },
        },
      },
      openProcess: {
        legend: "Is there already a lawsuit, summons or deadline running?",
        required: "Answer yes or no.",
        options: {
          si: { label: "Yes", hint: "I've received a notice" },
          no: { label: "No", hint: "Nothing formal yet" },
        },
      },
      deadline: { label: "Deadline or hearing date (if you know it)" },
      description: {
        label: "Briefly tell us what happened",
        placeholder: "Dates, people involved and what worries you most.",
        counter: "{count}/1000 · at least 30 characters",
        required: "Describe your case.",
        minLength: "We need a little more detail (30 characters).",
      },
      name: { label: "Full name", required: "Enter your name." },
      phone: {
        label: "Phone",
        required: "Enter a phone number.",
        invalid: "Check the number.",
      },
      email: {
        label: "Email",
        required: "Enter your email.",
        invalid: "Check the email address.",
      },
      contactPref: {
        legend: "How would you like us to contact you?",
        options: { llamada: "Phone call", email: "Email", whatsapp: "WhatsApp" },
      },
      consent: {
        text: "I agree to send this information via WhatsApp to {firm} so they can assess my case and contact me. The website does not store it.",
        privacyLink: "Privacy policy",
        required: "We need your permission to send the enquiry.",
      },
    },
    areas: {
      empresarial: {
        label: "Business",
        hint: "Companies, partners, commercial contracts",
        situations: {
          sociedad: "Set up or restructure a company",
          socios: "Dispute between partners",
          compraventa: "Buying or selling a business",
          contrato: "Breach of a commercial contract",
          cumplimiento: "Regulatory compliance",
        },
        documents: [
          "Company deeds and articles of association",
          "Shareholder agreement, if any",
          "Relevant contracts and emails",
          "Latest financial statements",
        ],
      },
      laboral: {
        label: "Employment",
        hint: "Dismissals, wages, dealings with staff",
        situations: {
          despido: "I was dismissed",
          salarios: "I'm owed wages or benefits",
          acoso: "Harassment or discrimination",
          accidente: "Workplace accident",
          empleador: "I'm an employer and need advice",
        },
        documents: [
          "Employment contract",
          "Dismissal letter or related messages",
          "Recent payslips",
          "Evidence: emails, messages, witnesses",
        ],
      },
      civil: {
        label: "Civil",
        hint: "Inheritance, leases, debts, damages",
        situations: {
          herencia: "Inheritance or estate",
          arrendamiento: "Problem with a lease",
          deuda: "Someone owes me money",
          danos: "Damages",
          contrato: "Breach of contract between individuals",
        },
        documents: [
          "Contracts or deeds",
          "Invoices, receipts or promissory notes",
          "Correspondence with the other party",
          "ID documents of the people involved",
        ],
      },
    },
    actions: {
      back: "Back",
      next: "Continue",
      submit: "Send via WhatsApp",
      noCommitment: "No obligation",
      whatsappNote:
        "WhatsApp will open with your enquiry already written. You just need to press send.",
    },
    toast: {
      title: "Opening WhatsApp",
      description: "Reference {ref}. Press send in WhatsApp to complete your enquiry.",
    },
    result: {
      reference: "Reference {ref}",
      thanks: "Thank you, {name}. Your enquiry is ready in WhatsApp.",
      contactIn:
        "Press send in WhatsApp so it reaches us. A lawyer will then reply {time}. Here's our first read:",
      reopenHint: "WhatsApp didn't open?",
      reopen: "Open WhatsApp again",
      area: "Area",
      priority: "Priority",
      lawyer: "Assigned lawyer",
      docsTitle: "Have these ready for the first meeting",
      disclaimer:
        "This assessment is for guidance only and is not legal advice. The lawyer will give a full analysis after reviewing your documents.",
      restart: "Assess another case",
      priorities: { alta: "High", media: "Medium", normal: "Standard" },
      responseTimes: {
        alta: "today or on the next business day",
        media: "within 24 business hours",
        normal: "within 48 business hours",
      },
    },
    whatsapp: {
      title: "New case assessment · {firm}",
      reference: "Reference",
      priority: "Priority",
      area: "Area",
      lawyer: "Assigned lawyer",
      clientType: "Client type",
      name: "Name",
      phone: "Phone",
      email: "Email",
      contactPref: "Prefers contact by",
      urgency: "Urgency",
      openProcess: "Open proceedings or deadline",
      deadline: "Deadline",
      noDeadline: "Not given",
      description: "Description",
    },
  },

  footer: {
    ctaLead: "Questions about your case?",
    ctaAccent: "Ask us.",
    cta: "Assess my case",
    tagline: "Business, employment and civil law since 2008.",
    navLabel: "Footer",
    sections: "Sections",
    contact: "Contact",
    hours: "Office hours",
    hoursText: "Monday to Friday · 8:30 am to 6:30 pm",
    hoursNote: "Employment emergencies and summonses: same-day response.",
    rights: "All rights reserved.",
    legal: [
      { label: "Legal notice", slug: "aviso-legal" },
      { label: "Privacy", slug: "privacidad" },
      { label: "Cookies", slug: "cookies" },
    ],
    credit: "Built with Claude Web Builder by",
  },

  // TEMPLATE FOR GUIDANCE ONLY: a lawyer must review these texts before publishing.
  legal: {
    backHome: "Back to home",
    updated: "Last updated: {updated}",
    pages: {
      "aviso-legal": {
        title: "Legal notice",
        sections: [
          {
            heading: "Website owner",
            paragraphs: [
              "This website belongs to {name}, tax ID {taxId}, registered at {address}, {city}.",
              "Email: {email}. WhatsApp: {whatsapp}.",
              "The firm's lawyers are members of the {bar} under registration number {registry}.",
            ],
          },
          {
            heading: "Purpose",
            paragraphs: [
              "This website describes the legal services of {name} and lets you send an initial enquiry via WhatsApp. The information published is general and is not legal advice for any specific case.",
            ],
          },
          {
            heading: "Liability",
            paragraphs: [
              "{name} is not liable for decisions made on the basis of the general information on this site without first consulting a professional, nor for the content of linked third-party sites.",
            ],
          },
          {
            heading: "Intellectual property",
            paragraphs: [
              "The text, design and brand of this site belong to {name} or are used under licence. They may not be reproduced without permission.",
            ],
          },
          {
            heading: "Governing law",
            paragraphs: [
              "This legal notice is governed by [GOVERNING LAW]. Any dispute shall be submitted to the courts of {city}.",
            ],
          },
        ],
      },
      privacidad: {
        title: "Privacy policy",
        sections: [
          {
            heading: "Data controller",
            paragraphs: [
              "{name}, tax ID {taxId}, registered at {address}, {city}. Contact: {email}.",
            ],
          },
          {
            heading: "What data we process and how it reaches us",
            paragraphs: [
              "The case assessment form does not store any data on this website. When you press \"Send via WhatsApp\", your browser opens WhatsApp with a message containing what you entered: name, phone, email, legal area, urgency, deadlines and case description.",
              "We only receive your data if you send that message from your own WhatsApp.",
            ],
          },
          {
            heading: "Purpose and legal basis",
            paragraphs: [
              "We use your data to assess your enquiry and contact you. The legal basis is your consent, which you can withdraw at any time.",
            ],
          },
          {
            heading: "Recipients",
            paragraphs: [
              "The message is transmitted through WhatsApp, a service of WhatsApp LLC / Meta Platforms, subject to its own terms and privacy policy. This may involve international data transfers.",
              "We do not share your data with other third parties unless required by law.",
              "The demo photographs are loaded from images.unsplash.com, which receives the visitor's IP address. If they are replaced with your own photos hosted on this site, remove this paragraph.",
            ],
          },
          {
            heading: "Retention",
            paragraphs: [
              "We keep the conversation for [RETENTION PERIOD] or for as long as the professional relationship lasts, and afterwards for the periods required by law.",
            ],
          },
          {
            heading: "Your rights",
            paragraphs: [
              "You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to {email}. You may also lodge a complaint with [DATA PROTECTION AUTHORITY].",
              "Applicable rules: [APPLICABLE DATA PROTECTION LAW].",
            ],
          },
        ],
      },
      cookies: {
        title: "Cookie policy",
        sections: [
          {
            heading: "Which cookies this site uses",
            paragraphs: [
              "This site does not set any cookies. We do not use analytics, advertising or social media tools.",
              "The language is chosen with the ES/EN switch and is part of the address (/es or /en), so it does not need to be stored.",
            ],
          },
          {
            heading: "If external services are added",
            paragraphs: [
              "If analytics, a map, videos or any other cookie-setting service is added in the future, this policy must be updated and, where the law requires it, prior consent must be requested.",
            ],
          },
          {
            heading: "Contact",
            paragraphs: ["For any questions about this policy, write to {email}."],
          },
        ],
      },
    },
  },
};

export default en;
