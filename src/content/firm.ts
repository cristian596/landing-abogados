// Datos que no dependen del idioma: contacto, imágenes y nombres propios.
// Los textos traducibles están en src/i18n/dictionaries.

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const firm = {
  name: "Altamira Ferrer",
  phone: "+00 600 123 456",
  email: "consultas@altamiraferrer.com",
  address: "Av. de la Constitución 1450, piso 12",
  city: "Ciudad Capital",
  rating: "4,9",
  copyrightYear: 2026,
};

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
