import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";

// Dominio público del sitio. Se define en el build (variable de entorno en
// Cloudflare Pages). Sin él no se emiten canonical ni hreflang: es mejor no
// tenerlos que publicarlos apuntando a localhost.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

// canonical + hreflang para una página que existe en todos los idiomas.
// pathFor recibe el idioma y devuelve su ruta, p. ej. (l) => `/${l}/legal/cookies`
export function localeAlternates(
  lang: Locale,
  pathFor: (locale: Locale) => string
): Metadata["alternates"] {
  if (!siteUrl) return undefined;
  return {
    canonical: pathFor(lang),
    languages: Object.fromEntries(locales.map((l) => [l, pathFor(l)])),
  };
}
