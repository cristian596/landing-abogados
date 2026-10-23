"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ClipboardList, Gavel, MessagesSquare, ShieldCheck } from "lucide-react";
import { images } from "@/content/firm";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Eyebrow, GoldLink } from "@/components/shared/primitives";
import { Reveal } from "@/components/shared/reveal";

const icons = [MessagesSquare, ClipboardList, Gavel, ShieldCheck];

// Posición vertical (px) de cada tarjeta en escritorio: suben de izquierda a derecha
const tops = [290, 200, 110, 20];

type Step = { n: string; title: string; text: string };

export function Process({ t }: { t: Dictionary["process"] }) {
  const reduce = useReducedMotion();
  const steps: Step[] = t.steps.map((s, i) => ({
    ...s,
    n: String(i + 1).padStart(2, "0"),
  }));

  return (
    <section
      id="metodologia"
      aria-labelledby="proc-title"
      className="p-2 sm:p-3"
    >
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-navy-950 py-section text-white sm:rounded-[2.25rem]">
        <Image
          src={images.process}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-15"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-950/90 to-navy-900/80"
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <Reveal className="max-w-xl">
            <Eyebrow tone="dark">{t.eyebrow}</Eyebrow>
            <h2
              id="proc-title"
              className="mt-6 text-fluid-xl leading-[1.05] font-semibold"
            >
              {t.titleLead}{" "}
              <em className="font-normal text-gold italic">{t.titleAccent}</em>
            </h2>
            <p className="mt-5 text-white/70">{t.intro}</p>
            <GoldLink href="#consulta" className="mt-8">
              {t.cta}
            </GoldLink>
          </Reveal>

          {/* Escritorio: tarjetas escalonadas sobre una curva dorada */}
          <div className="relative mt-4 hidden h-[580px] lg:block">
            <svg
              aria-hidden
              viewBox="0 0 1000 520"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full overflow-visible"
            >
              <motion.path
                d="M0,360 C60,360 80,270 125,270 S250,190 375,180 S520,100 625,90 S800,10 875,0 S960,-6 1000,-10"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: reduce ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
              />
            </svg>

            {steps.map((s, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={s.n}
                  className="absolute w-1/4 px-3"
                  style={{ left: `${i * 25}%`, top: tops[i] }}
                >
                  <span
                    aria-hidden
                    className="absolute -top-[1.1rem] left-1/2 grid size-6 -translate-x-1/2 place-items-center rounded-full bg-gold/30"
                  >
                    <span className="size-3 rounded-full bg-gold" />
                  </span>
                  <Reveal delay={0.25 + i * 0.08}>
                    <StepCard step={s} Icon={Icon} featured={i === 1} />
                  </Reveal>
                </div>
              );
            })}
          </div>

          {/* Móvil y tablet: lista vertical */}
          <ol className="relative mt-14 space-y-5 border-l-2 border-gold/60 pl-6 lg:hidden">
            {steps.map((s, i) => {
              const Icon = icons[i];
              return (
                <Reveal as="li" key={s.n} delay={i * 0.06} className="relative">
                  <span
                    aria-hidden
                    className="absolute top-6 -left-[2.05rem] size-3.5 rounded-full bg-gold ring-4 ring-navy-950"
                  />
                  <StepCard step={s} Icon={Icon} featured={i === 1} />
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  Icon,
  featured,
}: {
  step: Step;
  Icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
}) {
  return (
    <article
      className={
        featured
          ? "rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur"
          : "rounded-2xl bg-white p-6 text-navy-900"
      }
    >
      <div className="flex items-start justify-between">
        <span className="font-heading text-3xl font-semibold">{step.n}.</span>
        <span
          className={
            featured
              ? "grid size-9 place-items-center rounded-full bg-white/10 text-gold"
              : "grid size-9 place-items-center rounded-full bg-gold/15 text-gold-deep"
          }
        >
          <Icon className="size-4" />
        </span>
      </div>
      <h3 className="mt-6 text-xl leading-tight font-semibold">{step.title}</h3>
      <p
        className={
          featured
            ? "mt-2 text-sm leading-relaxed text-white/70"
            : "mt-2 text-sm leading-relaxed text-muted-foreground"
        }
      >
        {step.text}
      </p>
    </article>
  );
}
