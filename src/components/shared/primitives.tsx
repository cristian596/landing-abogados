import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold tracking-[0.14em] uppercase",
        tone === "dark"
          ? "border-white/25 text-white/80"
          : "border-navy-900/20 text-navy-800",
        className
      )}
    >
      {children}
    </span>
  );
}

export function GoldLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center gap-3 rounded-full whitespace-nowrap bg-gold py-1.5 pr-1.5 pl-6 text-sm font-semibold text-navy-950 transition-[background-color,transform] duration-150 ease-out hover:bg-gold-light active:scale-[0.97] focus-visible:ring-3 focus-visible:ring-gold/50 focus-visible:outline-none",
        className
      )}
    >
      {children}
      <span className="grid size-9 place-items-center rounded-full bg-white text-navy-950">
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-200 ease-out group-hover:rotate-45"
        />
      </span>
    </a>
  );
}

export function ArrowCircle({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark" | "gold";
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-11 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,color] duration-200",
        tone === "light" && "border-navy-900/15 text-gold-deep",
        tone === "dark" && "border-white/25 text-white",
        tone === "gold" && "border-white bg-white text-navy-950",
        className
      )}
    >
      <ArrowUpRight className="size-4" />
    </span>
  );
}
