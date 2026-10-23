import { firm } from "@/content/firm";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { GoldLink } from "@/components/shared/primitives";
import { Logo } from "@/components/layout/logo";

// Los enlaces llevan /{idioma} delante para funcionar también desde las páginas legales
export function Footer({
  lang,
  t,
  nav,
  suffix,
}: {
  lang: Locale;
  t: Dictionary["footer"];
  nav: Dictionary["nav"]["items"];
  suffix: string;
}) {
  const home = `/${lang}`;

  return (
    <footer className="p-2 sm:p-3">
      <div className="rounded-[1.75rem] bg-navy-950 px-5 pt-16 pb-8 text-white sm:rounded-[2.25rem] sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-12 lg:flex-row lg:items-end">
            <p className="max-w-2xl font-heading text-fluid-xl leading-[1.1] font-semibold">
              {t.ctaLead}{" "}
              <em className="font-normal text-gold italic">{t.ctaAccent}</em>
            </p>
            <GoldLink href={`${home}#consulta`}>{t.cta}</GoldLink>
          </div>

          <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo suffix={suffix} href={home} />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
                {t.tagline}
              </p>
            </div>
            <nav aria-label={t.navLabel}>
              <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                {t.sections}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={`${home}${n.href}`} className="hover:text-white">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                {t.contact}
              </h2>
              <address className="mt-4 space-y-2 text-sm text-white/75 not-italic">
                <p>
                  {firm.address}
                  <br />
                  {firm.city}
                </p>
                <p>
                  <a
                    href={buildWhatsAppUrl("")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp: {firm.whatsapp}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${firm.email}`} className="hover:text-white">
                    {firm.email}
                  </a>
                </p>
              </address>
            </div>
            <div>
              <h2 className="font-sans text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                {t.hours}
              </h2>
              <p className="mt-4 text-sm text-white/75">{t.hoursText}</p>
              <p className="mt-2 text-sm text-white/75">{t.hoursNote}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/15 pt-8 text-xs text-white/55 sm:flex-row sm:justify-between">
            <p>
              © {firm.copyrightYear} {firm.name} {suffix}. {t.rights}
            </p>
            <ul className="flex flex-wrap gap-5">
              {t.legal.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`${home}/legal/${item.slug}`}
                    className="hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-center text-sm text-white/45">
            {t.credit}{" "}
            <a
              href="https://tododeia.com"
              className="underline-offset-4 hover:underline"
            >
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
