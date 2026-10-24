"use client";

import { useEffect, useId, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import {
  disableAnalytics,
  loadAnalytics,
  readPreferences,
  writePreferences,
} from "@/lib/cookie-preferences";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Switch({
  checked,
  disabled,
  onCheckedChange,
  labelId,
  descriptionId,
}: {
  checked: boolean;
  disabled?: boolean;
  onCheckedChange?: (value: boolean) => void;
  labelId: string;
  descriptionId: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelId}
      aria-describedby={descriptionId}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "relative mt-0.5 inline-flex h-7 w-12 shrink-0 items-center rounded-full border border-transparent transition-colors duration-150 ease-out focus-visible:ring-3 focus-visible:ring-gold/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60",
        checked ? "bg-navy-900" : "bg-navy-900/25"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "block size-5 rounded-full bg-white shadow transition-transform duration-150 ease-out",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
}

// Enlace del pie, panel de preferencias y carga de la analítica. Al montar
// aplica la preferencia guardada sin mostrar nada.
export function CookieSettings({
  lang,
  label,
  t,
  className,
}: {
  lang: Locale;
  label: string;
  t: Dictionary["footer"]["cookiePanel"];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const id = useId();

  useEffect(() => {
    if (readPreferences()?.analitica) loadAnalytics();
  }, []);

  function handleOpenChange(next: boolean) {
    if (next) setAnalytics(readPreferences()?.analitica ?? false);
    setOpen(next);
  }

  function save() {
    writePreferences(analytics);
    if (analytics) loadAnalytics();
    else disableAnalytics();
    setOpen(false);
  }

  const items = [
    {
      key: "technical",
      title: t.technicalTitle,
      text: t.technicalText,
      checked: true,
      disabled: true,
    },
    {
      key: "analytics",
      title: t.analyticsTitle,
      text: t.analyticsText,
      checked: analytics,
      disabled: false,
    },
  ];

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <button type="button" className={className}>
          {label}
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full gap-6 p-6 sm:p-8"
      >
        <SheetHeader className="p-0">
          <SheetTitle className="text-2xl leading-tight font-semibold text-navy-900">
            {t.title}
          </SheetTitle>
          <SheetDescription className="mt-2 leading-relaxed">
            {t.description}
          </SheetDescription>
        </SheetHeader>

        <ul className="space-y-5">
          {items.map((item) => {
            const labelId = `${id}-${item.key}-label`;
            const descriptionId = `${id}-${item.key}-text`;
            return (
              <li
                key={item.key}
                className="flex items-start justify-between gap-4 border-t border-border pt-5"
              >
                <div>
                  <p
                    id={labelId}
                    className="text-base font-semibold text-navy-900"
                  >
                    {item.title}
                  </p>
                  <p
                    id={descriptionId}
                    className="mt-1 text-sm leading-relaxed text-muted-foreground"
                  >
                    {item.text}
                  </p>
                </div>
                <Switch
                  checked={item.checked}
                  disabled={item.disabled}
                  onCheckedChange={item.disabled ? undefined : setAnalytics}
                  labelId={labelId}
                  descriptionId={descriptionId}
                />
              </li>
            );
          })}
        </ul>

        <a
          href={`/${lang}/legal/cookies`}
          className="text-sm font-semibold text-navy-900 underline underline-offset-4 hover:text-gold-deep"
        >
          {t.policyLink}
        </a>

        <button
          type="button"
          onClick={save}
          className="mt-auto inline-flex min-h-12 items-center justify-center rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-navy-800 focus-visible:ring-3 focus-visible:ring-gold/60 focus-visible:outline-none active:scale-[0.97]"
        >
          {t.save}
        </button>
      </SheetContent>
    </Sheet>
  );
}
