"use client";

import { cn } from "@/lib/utils";
import {
  localeSwitch,
  locales,
  type Locale,
} from "@/i18n/config";

// Cambia entre /es y /en conservando la sección (#hash) en la que está el visitante
export function LanguageSwitcher({
  current,
  label,
  path = "",
  className,
}: {
  current: Locale;
  label: string;
  /** Ruta tras el idioma, p. ej. "/legal/privacidad"; vacía en la portada */
  path?: string;
  className?: string;
}) {
  const go = (e: React.MouseEvent<HTMLAnchorElement>, locale: Locale) => {
    e.preventDefault();
    if (locale === current) return;
    // Navegación completa a propósito: con router.push el scroll no cae en el
    // #hash porque la página cambia de alto entre idiomas
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.assign(`/${locale}${path}${window.location.hash}`);
  };

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center rounded-full border border-white/20 p-1">
        {locales.map((locale) => {
          const active = locale === current;
          return (
            <li key={locale}>
              <a
                href={`/${locale}${path}`}
                hrefLang={locale}
                lang={locale}
                aria-label={localeSwitch[locale].label}
                aria-current={active ? "true" : undefined}
                onClick={(e) => go(e, locale)}
                className={cn(
                  "grid h-9 min-w-11 place-items-center rounded-full px-2 text-xs font-bold tracking-wider transition-[background-color,color,transform] duration-150 active:scale-[0.97]",
                  active
                    ? "bg-gold text-navy-950"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                )}
              >
                {localeSwitch[locale].short}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
