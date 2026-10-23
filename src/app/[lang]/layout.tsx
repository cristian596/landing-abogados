import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Manrope, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
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

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
    ),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      locale: meta.ogLocale,
      type: "website",
    },
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
