// Build de demo (npm run demo): noindex y sin canonical/hreflang.
// Con NEXT_PUBLIC_DEMO distinto de "true" el sitio es el de la plantilla.
export const IS_DEMO = process.env.NEXT_PUBLIC_DEMO === "true";

// Datos de muestra solo para la demo. El número de WhatsApp nunca va en el
// repositorio: se lee de NEXT_PUBLIC_WHATSAPP_NUMBER al hacer el build.
export const DEMO_FIRM = {
  name: "Altamira Ferrer",
  address: "Calle 72 # 10-34, oficina 501",
  city: "Bogotá",
  email: "contacto@altamiraferrer-demo.com",
  // Solo se lee en la rama IS_DEMO: el build normal nunca incluye el número.
  whatsapp: IS_DEMO
    ? process.env.DEMO_WHATSAPP_NUMBER || "[NÚMERO DE WHATSAPP]"
    : "[NÚMERO DE WHATSAPP]",
  legalName: "Altamira Ferrer Abogados S.A.S. (demostración)",
  taxId: "DEMO-000000",
  registry: "DEMO-000",
  bar: "Colegio de Abogados de Demostración",
  updated: "2026-10",
};

export const DEMO_LEGAL_NOTICE = {
  es: "Contenido de demostración: los datos y textos legales son de muestra.",
  en: "Demo content: the data and legal texts are samples.",
};
