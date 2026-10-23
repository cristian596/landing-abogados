import { firm } from "@/content/firm";

let warned = false;

// Enlace de WhatsApp (wa.me) con el mensaje ya escrito.
// wa.me solo acepta dígitos con prefijo de país, sin "+", espacios ni guiones.
export function buildWhatsAppUrl(message: string, phone: string = firm.whatsapp) {
  const digits = phone.replace(/\D/g, "");

  // Aviso único en desarrollo mientras siga el placeholder de firm.ts
  if (!digits && !warned && process.env.NODE_ENV !== "production") {
    warned = true;
    console.warn(
      "[whatsapp] Falta el número de WhatsApp del despacho en src/content/firm.ts"
    );
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
