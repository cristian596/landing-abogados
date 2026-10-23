import Image from "next/image";
import { images } from "@/content/firm";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Eyebrow, GoldLink } from "@/components/shared/primitives";
import { Reveal } from "@/components/shared/reveal";

export function About({ t }: { t: Dictionary["about"] }) {
  return (
    <section
      aria-labelledby="about-title"
      className="mx-auto grid max-w-7xl gap-12 px-5 py-section sm:px-10 lg:grid-cols-12 lg:gap-16"
    >
      <Reveal className="lg:col-span-5">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2
          id="about-title"
          className="mt-6 text-fluid-xl leading-[1.08] font-semibold text-navy-900"
        >
          {t.titleLead}{" "}
          <em className="font-normal text-gold-deep italic">{t.titleAccent}</em>
        </h2>
        <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-3xl lg:block">
          <Image
            src={images.about}
            alt={t.imageAlt}
            fill
            sizes="40vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-16">
        <p className="text-fluid-lg leading-snug font-medium text-navy-900">
          {t.lead}
        </p>
        <div className="mt-6 space-y-4 text-fluid-base leading-relaxed text-muted-foreground">
          {t.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {t.highlights.map((h) => (
            <li key={h.title} className="bg-cream px-5 py-4">
              <span className="block font-heading text-lg font-semibold text-navy-900">
                {h.title}
              </span>
              <span className="text-sm text-muted-foreground">{h.text}</span>
            </li>
          ))}
        </ul>

        <GoldLink href="#consulta" className="mt-10">
          {t.cta}
        </GoldLink>
      </Reveal>
    </section>
  );
}
