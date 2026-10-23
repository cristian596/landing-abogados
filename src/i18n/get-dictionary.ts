import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/es";

// Carga perezosa: cada página solo importa el idioma que necesita
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("./dictionaries/es").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();

export type { Dictionary };
