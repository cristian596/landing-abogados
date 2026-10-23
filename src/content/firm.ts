// Datos que no dependen del idioma: contacto, imágenes y nombres propios.
// Los textos traducibles están en src/i18n/dictionaries.

import { DEMO_FIRM, IS_DEMO } from "@/lib/demo";

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

const templateFirm = {
  // TODO: sustituir por el nombre comercial del cliente
  name: "[NOMBRE DEL DESPACHO]",

  // TODO: sustituir por el WhatsApp del cliente, con prefijo de país.
  // Formato libre ("+34 600 123 456" o "34600123456"): se limpia al generar el enlace.
  // Mientras sea un placeholder, el formulario abre WhatsApp sin destinatario.
  whatsapp: "[NÚMERO DE WHATSAPP]",

  email: "[CORREO ELECTRÓNICO]",
  address: "[DIRECCIÓN]",
  city: "[CIUDAD]",
  rating: "4,9",
  copyrightYear: 2026,
};

export const firm = IS_DEMO
  ? {
      ...templateFirm,
      name: DEMO_FIRM.name,
      whatsapp: DEMO_FIRM.whatsapp,
      email: DEMO_FIRM.email,
      address: DEMO_FIRM.address,
      city: DEMO_FIRM.city,
    }
  : templateFirm;

// Datos del titular para el aviso legal, la privacidad y el consentimiento.
// TODO: completar con los datos reales del despacho y revisarlos con un abogado.
const templateLegalEntity = {
  name: "[NOMBRE DEL DESPACHO]",
  taxId: "[NIF/CIF]",
  registry: "[NÚMERO DE REGISTRO]",
  bar: "[COLEGIO DE ABOGADOS]",
  address: firm.address,
  city: firm.city,
  email: firm.email,
  whatsapp: firm.whatsapp,
  updated: "[FECHA DE ACTUALIZACIÓN]",
};

export const legalEntity = IS_DEMO
  ? {
      ...templateLegalEntity,
      name: DEMO_FIRM.legalName,
      taxId: DEMO_FIRM.taxId,
      registry: DEMO_FIRM.registry,
      bar: DEMO_FIRM.bar,
      updated: DEMO_FIRM.updated,
    }
  : templateLegalEntity;

export const images = {
  hero: img("1519085360753-af0119f7cbe7", 1000),
  about: img("1436450412740-6b988f486c6b", 1000),
  library: img("1505664194779-8beaceb93744", 1800),
  process: img("1568992687947-868a62a9f521", 1800),
};

export const specialtyImages = {
  empresarial: img("1454165804606-c3d57bc86b40", 800),
  laboral: img("1517048676732-d65bc937f952", 800),
  civil: img("1521791055366-0d553872125f", 800),
  contratos: img("1450101499163-c8848c66ca85", 800),
  litigio: img("1589829545856-d10d557cf95f", 800),
};

export const caseImages = {
  logistica: img("1600880292203-757bb62b4baf", 600),
  despidoColectivo: img("1517048676732-d65bc937f952", 600),
  local: img("1497366216548-37526070297c", 600),
  socios: img("1454165804606-c3d57bc86b40", 600),
  accidente: img("1450101499163-c8848c66ca85", 600),
  herencia: img("1521791055366-0d553872125f", 600),
};

export const teamMembers = {
  altamira: { name: "Andrés Altamira", image: img("1519085360753-af0119f7cbe7", 700) },
  ferrer: { name: "Lucía Ferrer", image: img("1573497019940-1c28c88b4f3e", 700) },
  olivares: { name: "Martín Olivares", image: img("1560250097-0b93528c311a", 700) },
  lagos: { name: "Ernesto Lagos", image: img("1472099645785-5658abf4ff4e", 700) },
};

export type TeamMemberId = keyof typeof teamMembers;

// Abogado que recibe cada área en el formulario de evaluación
export const areaLawyer = {
  empresarial: "altamira",
  laboral: "olivares",
  civil: "ferrer",
} as const satisfies Record<string, TeamMemberId>;
