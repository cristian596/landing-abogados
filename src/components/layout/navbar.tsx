"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { GoldLink } from "@/components/shared/primitives";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar({
  lang,
  t,
  suffix,
}: {
  lang: Locale;
  t: Dictionary["nav"];
  suffix: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300",
        scrolled
          ? "bg-navy-950/90 shadow-lg shadow-navy-950/20 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <Logo suffix={suffix} />

        <nav aria-label={t.mainLabel} className="hidden lg:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur xl:gap-1">
            {t.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-3 py-2 text-sm whitespace-nowrap text-white/80 transition-colors duration-150 hover:bg-white/10 hover:text-white xl:px-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher
            current={lang}
            label={t.languageLabel}
            className="max-sm:hidden"
          />
          <div className="hidden lg:block">
            <GoldLink href="#consulta">{t.cta}</GoldLink>
          </div>

          <Sheet>
            <SheetTrigger
              aria-label={t.openMenu}
              className="grid size-11 place-items-center rounded-full border border-white/20 text-white active:scale-[0.97] lg:hidden"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85%] max-w-sm border-navy-800 bg-navy-950 text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-white">
                  <Logo suffix={suffix} />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  {t.menuDescription}
                </SheetDescription>
              </SheetHeader>
              <nav aria-label={t.mobileLabel} className="px-4">
                <ul className="flex flex-col">
                  {t.items.map((item) => (
                    <li key={item.href} className="border-b border-white/10">
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="block py-4 font-heading text-2xl text-white"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <SheetClose asChild>
                  <a
                    href="#consulta"
                    className="mt-8 flex min-h-12 items-center justify-center rounded-full bg-gold font-semibold text-navy-950 active:scale-[0.97]"
                  >
                    {t.cta}
                  </a>
                </SheetClose>
                <LanguageSwitcher
                  current={lang}
                  label={t.languageLabel}
                  className="mt-6 flex justify-center"
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
