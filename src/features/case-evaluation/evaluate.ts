import type { FormValues, Priority } from "./types";

const DAY = 86_400_000;

const urgencyScore = { baja: 1, media: 2, alta: 3, "": 0 } as const;

// Puntúa el caso: urgencia declarada + proceso abierto + plazo cercano.
// Función pura (sin React) para poder probarla y cambiar el criterio fácilmente.
export function getPriority(
  values: Pick<FormValues, "urgency" | "openProcess" | "deadline">,
  now = Date.now()
): Priority {
  let score: number = urgencyScore[values.urgency];
  if (values.openProcess === "si") score += 2;
  if (values.deadline) {
    const days = (new Date(values.deadline).getTime() - now) / DAY;
    if (days <= 15) score += 2;
  }
  if (score >= 5) return "alta";
  if (score >= 3) return "media";
  return "normal";
}

// Referencia corta y legible para el cliente, p. ej. AF-K76USP
export const createReference = (now = Date.now()) =>
  `AF-${now.toString(36).toUpperCase().slice(-6)}`;
