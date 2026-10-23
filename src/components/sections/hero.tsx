import Image from "next/image";
import { BadgeCheck, Scale, Star } from "lucide-react";
import { firm, images } from "@/content/firm";
import type { Dictionary } from "@/i18n/get-dictionary";
import { GoldLink } from "@/components/shared/primitives";
import { cn } from "@/lib/utils";

// Entrada solo con CSS: corre en el primer pintado, sin esperar a la hidratación
const enter =
  "animate-in fade-in-0 motion-safe:slide-in-from-bottom-6 duration-400 ease-out fill-mode-backwards";
// Literales completos: Tailwind no detecta clases construidas con plantillas
const statDelays = ["delay-240", "delay-300", "delay-350", "delay-400"];

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section id="inicio" className="p-2 sm:p-3">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-navy-950 text-white sm:rounded-[2.25rem]">
        {/* Fondo: degradado marino + balanza decorativa */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_40%,var(--navy-700)_0%,var(--navy-900)_45%,var(--navy-950)_80%)]"
        />
        <Scale
          aria-hidden
          strokeWidth={0.6}
          className="absolute top-1/2 left-[62%] -z-10 size-[38rem] -translate-1/2 text-white/[0.05] max-lg:hidden"
        />

        {/* Retrato */}
        <div className="absolute inset-y-0 right-0 -z-10 w-full sm:w-[62%] lg:w-[52%]">
          <Image
            src={images.hero}
            alt={t.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 52vw, (min-width: 640px) 62vw, 100vw"
            className="object-cover object-[50%_20%] opacity-40 [mask-image:linear-gradient(to_right,transparent,black_35%)] sm:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pt-32 sm:px-10 sm:pt-40 lg:pt-44">
          <div className="max-w-2xl">
            <div className={enter}>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy-950/60 px-3 py-1.5 text-xs font-semibold tracking-wide text-gold-light">
                <BadgeCheck aria-hidden className="size-4" />
                {t.registry}
              </p>
            </div>
            <div className={cn(enter, "delay-60")}>
              <h1 className="mt-6 text-fluid-2xl leading-[1.02] font-semibold tracking-tight text-balance">
                {t.titleLead}{" "}
                <em className="font-normal text-gold italic">{t.titleAccent}</em>
              </h1>
            </div>
            <div className={cn(enter, "delay-120")}>
              <p className="mt-6 max-w-lg text-fluid-base leading-relaxed text-white/75">
                {t.intro}
              </p>
            </div>
            <div
              className={cn(
                enter,
                "delay-180 mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
              )}
            >
              <GoldLink href="#consulta">{t.cta}</GoldLink>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex text-gold" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <span className="text-white/75">
                  <strong className="font-semibold text-white">
                    {firm.rating}
                  </strong>{" "}
                  · {t.reviews}
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-20 grid grid-cols-2 border-t border-white/15 sm:mt-28 lg:grid-cols-4">
            {t.stats.map((s, i) => (
              <li
                key={s.label}
                className={cn(
                  enter,
                  statDelays[i],
                  "border-white/15 py-7 pr-4 max-lg:odd:border-r max-lg:even:pl-5 max-lg:[&:nth-child(-n+2)]:border-b lg:pl-8 lg:first:pl-0 lg:[&:not(:first-child)]:border-l"
                )}
              >
                <span className="font-heading text-4xl font-semibold sm:text-5xl">
                  {s.value}
                  <span className="text-gold">{s.suffix}</span>
                </span>
                <span className="mt-2 block text-sm text-white/65">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
