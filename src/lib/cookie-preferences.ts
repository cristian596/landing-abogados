// Preferencias de cookies del visitante y carga condicional de la analítica.
// Todo el acceso a localStorage va en try/catch: si no está disponible (modo
// privado, bloqueado), la web funciona igual y sin analítica.

const STORAGE_KEY = "preferencias-cookies";
const SCRIPT_ID = "ga-script";

// PENDIENTE: falta configurar el ID de medición. Defínelo en la variable de
// entorno NEXT_PUBLIC_GA_ID (formato G-XXXXXXXXXX). Sin ella no se carga nada
// y el interruptor de analítica no tiene efecto.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export type CookiePreferences = { analitica: boolean; fecha: string };

export function readPreferences(): CookiePreferences | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data: unknown = JSON.parse(raw);
    if (
      typeof data === "object" &&
      data !== null &&
      "analitica" in data &&
      typeof data.analitica === "boolean" &&
      "fecha" in data &&
      typeof data.fecha === "string"
    ) {
      return { analitica: data.analitica, fecha: data.fecha };
    }
  } catch {
    // almacenamiento no disponible o valor corrupto: se trata como sin elección
  }
  return null;
}

export function writePreferences(analitica: boolean): void {
  try {
    const value: CookiePreferences = {
      analitica,
      fecha: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // sin almacenamiento: la elección solo vale para esta visita
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

// Inyecta gtag.js. No hace nada si falta el ID, si el ID no tiene forma de ID
// de medición o si el script ya está cargado.
export function loadAnalytics(): void {
  if (!GA_ID || !/^G-[A-Z0-9]+$/.test(GA_ID)) return;
  if (document.getElementById(SCRIPT_ID)) {
    window[`ga-disable-${GA_ID}`] = false;
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

// Si la analítica ya se cargó en esta sesión no se puede descargar: se pide a
// Google Analytics que deje de medir (flag documentado) hasta recargar la
// página. No se borran cookies. En la siguiente carga el script no se inyecta.
export function disableAnalytics(): void {
  if (GA_ID) window[`ga-disable-${GA_ID}`] = true;
}
