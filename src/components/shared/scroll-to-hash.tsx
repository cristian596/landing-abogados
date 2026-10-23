"use client";

import { useEffect } from "react";

// Al entrar con un #hash (p. ej. tras cambiar de idioma) el navegador intenta
// saltar antes de que la página esté hidratada; aquí se repite el salto al montar.
export function ScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    // "instant" ignora el scroll-smooth global: al cargar no tiene sentido animar
    const timer = setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ block: "start", behavior: "instant" });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
