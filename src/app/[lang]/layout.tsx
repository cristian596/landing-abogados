/*
 * Copyright (C) 2026 Camilo Higuera. Todos los derechos reservados.
 * Licencia sujeta a los términos en Licencia.md
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Manrope, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { format, hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { firm } from "@/content/firm";
import { IS_DEMO } from "@/lib/demo";
import { metadataBase } from "@/lib/site-url";
import "../globals.css";

// Los nombres de variable no pueden coincidir con --font-heading / --font-body
const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const text = Manrope({
  variable: "--font-text",
  subsets: ["latin"],
  display: "swap",
});

// Solo existen /es y /en; cualquier otro idioma da 404
export const dynamicParams = false;

// Prerenderiza /es y /en en el build
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = await getDictionary(lang);
  const title = format(meta.title, { name: firm.name });

  // canonical y hreflang los define cada página (ver src/lib/site-url.ts)
  return {
    metadataBase,
    title,
    description: meta.description,
    openGraph: {
      title,
      description: meta.ogDescription,
      locale: meta.ogLocale,
      type: "website",
    },
    ...(IS_DEMO && { robots: { index: false, follow: false } }),
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${display.variable} ${text.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster theme="light" position="bottom-right" />
      </body>
    </html>
  );
}
