import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
