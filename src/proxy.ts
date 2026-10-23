import { NextResponse, type NextRequest } from "next/server";
import {
  defaultLocale,
  hasLocale,
  LOCALE_COOKIE,
  locales,
  type Locale,
} from "@/i18n/config";

// Elige el idioma: primero la cookie del selector, después el navegador
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && hasLocale(saved)) return saved;

  const accepted = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  return accepted.find((a) => hasLocale(a.lang))?.lang as Locale ?? defaultLocale;
}

// Redirige cualquier ruta sin idioma (p. ej. "/") a /es o /en
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasPrefix = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasPrefix) return;

  request.nextUrl.pathname = `/${pickLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Ignora internos de Next y archivos estáticos (favicon, imágenes…)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
