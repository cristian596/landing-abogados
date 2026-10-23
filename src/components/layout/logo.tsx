import { Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { firm } from "@/content/firm";

export function Logo({
  suffix,
  className,
}: {
  suffix: string;
  className?: string;
}) {
  return (
    <a
      href="#inicio"
      className={cn("flex items-center gap-2.5 text-white", className)}
    >
      <span className="grid size-9 place-items-center rounded-full border border-gold/60 text-gold">
        <Scale aria-hidden className="size-4" />
      </span>
      <span className="font-heading text-lg leading-none font-semibold whitespace-nowrap">
        {firm.name}
        <span className="block font-sans text-[0.65rem] font-medium tracking-[0.3em] text-gold uppercase">
          {suffix}
        </span>
      </span>
    </a>
  );
}
