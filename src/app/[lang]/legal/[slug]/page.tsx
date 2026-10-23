import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { firm, legalEntity } from "@/content/firm";
import { format, hasLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/get-dictionary";
import { localeAlternates } from "@/lib/site-url";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Footer } from "@/components/layout/footer";

type Slug = keyof Dictionary["legal"]["pages"];

const slugs: Slug[] = ["aviso-legal", "privacidad", "cookies"];

const isSlug = (value: string): value is Slug =>
  (slugs as string[]).includes(value);

// Solo existen las rutas listadas aquí; cualquier otro slug da 404
export const dynamicParams = false;

// Prerenderiza las 3 páginas legales en cada idioma
export function generateStaticParams() {
  return locales.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

async function load(params: PageProps<"/[lang]/legal/[slug]">["params"]) {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !isSlug(slug)) notFound();
  const t = await getDictionary(lang);
  return { lang: lang as Locale, t, page: t.legal.pages[slug], slug };
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/legal/[slug]">): Promise<Metadata> {
  const { lang, page, slug } = await load(params);
  return {
    title: `${page.title} | ${firm.name}`,
    alternates: localeAlternates(lang, (l) => `/${l}/legal/${slug}`),
  };
}

export default async function LegalPage({
  params,
}: PageProps<"/[lang]/legal/[slug]">) {
  const { lang, t, page, slug } = await load(params);
  const home = `/${lang}`;

  return (
    <>
      <header className="bg-navy-950">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
          <Logo suffix={t.common.firmSuffix} href={home} />
          <LanguageSwitcher
            current={lang}
            label={t.nav.languageLabel}
            path={`/legal/${slug}`}
          />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-section sm:px-10">
        <a
          href={home}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-deep"
        >
          <ArrowLeft aria-hidden className="size-4" />
          {t.legal.backHome}
        </a>
        <h1 className="mt-6 text-fluid-xl leading-tight font-semibold text-navy-900">
          {page.title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {format(t.legal.updated, { updated: legalEntity.updated })}
        </p>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-navy-900">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
                {section.paragraphs.map((p) => (
                  <p key={p}>{format(p, legalEntity)}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer
        lang={lang}
        t={t.footer}
        nav={t.nav.items}
        suffix={t.common.firmSuffix}
      />
    </>
  );
}
