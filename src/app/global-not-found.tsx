import type { Metadata } from "next";
import { defaultLocale } from "@/i18n/config";
import "./globals.css";

// Se exporta como out/404.html. Cloudflare Pages lo sirve para cualquier ruta
// inexistente fuera de /es y /en (que tienen su propio 404.html), así que su
// trabajo es mandar al visitante a la portada en el idioma por defecto.
const target = `/${defaultLocale}`;

export const metadata: Metadata = {
  title: "Altamira Ferrer",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang={defaultLocale}>
      <head>
        {/* Redirección sin JavaScript */}
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
      </head>
      <body className="grid min-h-dvh place-items-center bg-navy-950 p-6 text-white">
        <a href={target} className="text-gold underline underline-offset-4">
          Ir a la página principal · Go to the home page
        </a>
      </body>
    </html>
  );
}
