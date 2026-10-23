import type { NextConfig } from "next";

// El número de WhatsApp de pruebas solo entra al build de demo. Se pasa por
// env (no como NEXT_PUBLIC_*) para que el build normal nunca lo incluya.
const demoWhatsapp =
  process.env.NEXT_PUBLIC_DEMO === "true"
    ? process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    : undefined;

const nextConfig: NextConfig = {
  // Fija el valor de NEXT_PUBLIC_DEMO aunque no esté definida, para que el
  // código de demo se elimine del JS del build normal
  env: {
    NEXT_PUBLIC_DEMO: process.env.NEXT_PUBLIC_DEMO === "true" ? "true" : "false",
    ...(demoWhatsapp && { DEMO_WHATSAPP_NUMBER: demoWhatsapp }),
  },
  // Sitio 100 % estático (carpeta out/) para Cloudflare Pages: sin servidor
  output: "export",
  // cacheComponents y partialPrefetching activan PPR (prerenderizado parcial),
  // que necesita servidor y no admite output: "export". Todo se genera en el build.
  experimental: {
    // Genera out/404.html, que redirige a /es las rutas sin idioma
    globalNotFound: true,
  },
  images: {
    // Sin servidor no hay optimizador de imágenes: se sirven tal cual
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
