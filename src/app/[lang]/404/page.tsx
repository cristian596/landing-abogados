import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { firm } from "@/content/firm";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Logo } from "@/components/layout/logo";
import { GoldLink } from "@/components/shared/primitives";

// Se exporta como out/es/404.html y out/en/404.html. Cloudflare Pages sirve
// el 404.html más cercano, así que /es/lo-que-sea muestra esta página en español.
export async function generateMetadata({
  params,
}: PageProps<"/[lang]/404">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = await getDictionary(lang);
  return { title: `${t.notFound.title} | ${firm.name}`, robots: { index: false } };
}

export default async function LocaleNotFound({
  params,
}: PageProps<"/[lang]/404">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);

  return (
    <main className="grid min-h-dvh place-items-center bg-navy-950 px-5 text-white">
      <div className="max-w-md text-center">
        <Logo
          suffix={t.common.firmSuffix}
          href={`/${lang}`}
          className="justify-center"
        />
        <p className="mt-12 font-heading text-7xl font-semibold text-gold">404</p>
        <h1 className="mt-4 text-fluid-xl font-semibold">{t.notFound.title}</h1>
        <p className="mt-3 text-white/70">{t.notFound.text}</p>
        <GoldLink href={`/${lang}`} className="mt-8">
          {t.notFound.cta}
        </GoldLink>
      </div>
    </main>
  );
}
