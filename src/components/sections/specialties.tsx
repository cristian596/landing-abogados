"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { images, specialtyImages } from "@/content/firm";
import { format } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { ArrowCircle, Eyebrow } from "@/components/shared/primitives";
import { Reveal } from "@/components/shared/reveal";

type SpecialtyId = keyof typeof specialtyImages;

export function Specialties({ t }: { t: Dictionary["specialties"] }) {
  const specialties = (Object.keys(specialtyImages) as SpecialtyId[]).map(
    (id) => ({ id, image: specialtyImages[id], ...t.items[id] })
  );
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    const frame = requestAnimationFrame(sync);
    embla.on("select", sync).on("reInit", sync);
    return () => {
      cancelAnimationFrame(frame);
      embla.off("select", sync).off("reInit", sync);
    };
  }, [embla, sync]);

  return (
    <section
      id="especialidades"
      aria-labelledby="esp-title"
      className="p-2 sm:p-3"
    >
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-navy-950 py-section text-white sm:rounded-[2.25rem]">
        <Image
          src={images.library}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-20"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/70 via-navy-950/85 to-navy-950"
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <Eyebrow tone="dark">{t.eyebrow}</Eyebrow>
              <h2
                id="esp-title"
                className="mt-6 text-fluid-xl leading-[1.05] font-semibold"
              >
                {t.titleLead}{" "}
                <em className="font-normal text-gold italic">
                  {t.titleAccent}
                </em>
              </h2>
            </div>
            <div className="flex items-end gap-6 lg:max-w-sm lg:flex-col lg:items-end">
              <p className="text-white/70">{t.intro}</p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  aria-label={t.prev}
                  onClick={() => embla?.scrollPrev()}
                  disabled={!canPrev}
                  className="grid size-12 place-items-center rounded-full border border-white/25 transition-[background-color,opacity,transform] duration-150 hover:bg-white/10 active:scale-[0.97] disabled:opacity-35"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label={t.next}
                  onClick={() => embla?.scrollNext()}
                  disabled={!canNext}
                  className="grid size-12 place-items-center rounded-full bg-gold text-navy-950 transition-[background-color,opacity,transform] duration-150 hover:bg-gold-light active:scale-[0.97] disabled:opacity-35"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div
            ref={emblaRef}
            className="cursor-grab overflow-hidden px-5 active:cursor-grabbing sm:px-10 xl:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
            aria-roledescription={t.carousel}
          >
            <ul className="flex gap-4 sm:gap-5">
              {specialties.map((s, i) => (
                <li
                  key={s.id}
                  aria-roledescription={t.slide}
                  aria-label={format(t.slidePosition, {
                    n: i + 1,
                    total: specialties.length,
                  })}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[46%] lg:basis-[31%] xl:basis-[24%]"
                >
                  <article
                    className={cn(
                      "group flex h-full flex-col rounded-3xl p-5",
                      i === 1
                        ? "border border-white/15 bg-white/[0.06] backdrop-blur"
                        : "bg-white text-navy-900"
                    )}
                  >
                    <span
                      className={cn(
                        "w-fit rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase",
                        i === 1
                          ? "border-gold/50 text-gold-light"
                          : "border-navy-900/15 text-navy-800"
                      )}
                    >
                      {s.tag}
                    </span>
                    <h3 className="mt-4 text-2xl leading-tight font-semibold">
                      {s.title}
                    </h3>
                    <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={s.image}
                        alt=""
                        fill
                        sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 85vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-5 flex flex-1 items-end justify-between gap-4">
                      <p
                        className={cn(
                          "text-sm leading-relaxed",
                          i === 1 ? "text-white/70" : "text-muted-foreground"
                        )}
                      >
                        {s.text}
                      </p>
                      <a
                        href="#consulta"
                        aria-label={format(t.consultAbout, { title: s.title })}
                        className="rounded-full focus-visible:ring-3 focus-visible:ring-gold/60 focus-visible:outline-none"
                      >
                        <ArrowCircle
                          tone={i === 1 ? "dark" : "light"}
                          className="group-hover:border-gold group-hover:bg-gold group-hover:text-navy-950"
                        />
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
