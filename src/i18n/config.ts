export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

// Cookie que guarda el idioma elegido con el selector
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// Etiquetas del selector, cada una escrita en su propio idioma
export const localeSwitch: Record<Locale, { short: string; label: string }> = {
  es: { short: "ES", label: "Ver la página en español" },
  en: { short: "EN", label: "View this page in English" },
};

// Sustituye {clave} por su valor: format("Paso {n}", { n: 2 })
export function format(
  template: string,
  values: Record<string, string | number>
) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
}
