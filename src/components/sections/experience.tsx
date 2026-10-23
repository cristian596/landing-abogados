"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";
import { caseImages } from "@/content/firm";
import type { Dictionary } from "@/i18n/get-dictionary";
import { ArrowCircle, Eyebrow, GoldLink } from "@/components/shared/primitives";
import { Reveal } from "@/components/shared/reveal";

type CaseId = keyof typeof caseImages;

export function Experience({ t }: { t: Dictionary["experience"] }) {
  const cases = (Object.keys(caseImages) as CaseId[]).map((id) => ({
    id,
    image: caseImages[id],
    ...t.cases[id],
  }));
  const [active, setActive] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();

  // La miniatura sigue al cursor con un muelle suave (solo con ratón)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 30 });
  const y = useSpring(my, { stiffness: 300, damping: 30 });
  const follow = useMotionTemplate`translate3d(${x}px, ${y}px, 0)`;

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !listRef.current) return;
    const r = listRef.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section
      id="experiencia"
      aria-labelledby="exp-title"
      className="mx-auto max-w-7xl px-5 py-section sm:px-10"
    >
      <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2
            id="exp-title"
            className="mt-6 text-fluid-xl leading-[1.05] font-semibold text-navy-900"
          >
            {t.titleLead}{" "}
            <em className="font-normal text-gold-deep italic">
              {t.titleAccent}
            </em>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-5 lg:max-w-sm">
          <p className="text-muted-foreground">{t.intro}</p>
          <GoldLink href="#consulta">{t.cta}</GoldLink>
        </div>
      </Reveal>

      <div className="mt-14">
        <div
          aria-hidden
          className="hidden grid-cols-[1fr_12rem_8rem_3rem] gap-6 border-b border-border px-6 pb-4 text-sm font-medium text-muted-foreground md:grid"
        >
          <span>{t.columns.matter}</span>
          <span>{t.columns.area}</span>
          <span>{t.columns.date}</span>
          <span />
        </div>

        <ul
          ref={listRef}
          onPointerMove={onMove}
          onPointerLeave={() => setActive(null)}
          className="relative"
        >
          {cases.map((c, i) => (
            <li
              key={c.id}
              onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
              className={cn(
                "grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 border-b border-border px-4 py-6 transition-colors duration-200 sm:px-6 md:grid-cols-[1fr_12rem_8rem_3rem]",
                active === i && "rounded-2xl border-transparent bg-gold"
              )}
            >
              <h3 className="text-xl font-medium text-navy-900 sm:text-2xl">
                {c.title}
              </h3>
              <span
                className={cn(
                  "w-fit rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase max-md:col-start-1 max-md:row-start-2",
                  active === i
                    ? "border-navy-950/40 text-navy-950"
                    : "border-navy-900/15 text-navy-800"
                )}
              >
                {c.area}
              </span>
              <span className="text-sm font-semibold tracking-wide text-navy-900 uppercase max-md:hidden">
                {c.date}
              </span>
              <ArrowCircle
                tone={active === i ? "gold" : "light"}
                className="max-md:col-start-2 max-md:row-span-2 max-md:row-start-1"
              />
            </li>
          ))}

          <AnimatePresence>
            {active !== null && !reduce && (
              <motion.div
                aria-hidden
                style={{ transform: follow }}
                className="pointer-events-none absolute top-0 left-0 z-10 hidden md:block"
              >
                <motion.div
                  initial={{ opacity: 0, transform: "scale(0.95)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  exit={{ opacity: 0, transform: "scale(0.95)" }}
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                  className="relative -mt-24 ml-8 h-40 w-56 -rotate-3 overflow-hidden rounded-xl border-4 border-white shadow-2xl"
                >
                  <Image
                    src={cases[active].image}
                    alt=""
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
