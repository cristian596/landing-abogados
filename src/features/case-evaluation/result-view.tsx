import {
  CheckCircle2,
  FileText,
  MessageCircle,
  RotateCcw,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { areaLawyer, teamMembers } from "@/content/firm";
import { format } from "@/i18n/config";
import type { EvaluationCopy, EvaluationResult } from "./types";

const priorityTone = {
  alta: "bg-red-50 text-red-800 border-red-200",
  media: "bg-gold/15 text-gold-deep border-gold/40",
  normal: "bg-emerald-50 text-emerald-800 border-emerald-200",
};

export function ResultView({
  t,
  result,
  headingRef,
  onRestart,
}: {
  t: EvaluationCopy;
  result: EvaluationResult;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  onRestart: () => void;
}) {
  const area = t.areas[result.area];
  const situations: Record<string, string> = area.situations;
  const lawyer = teamMembers[areaLawyer[result.area]].name;
  const time = t.result.responseTimes[result.priority];

  return (
    <div role="status">
      <div className="flex items-center gap-3 text-gold-deep">
        <CheckCircle2 aria-hidden className="size-6" />
        <span className="text-sm font-semibold tracking-wide uppercase">
          {format(t.result.reference, { ref: result.ref })}
        </span>
      </div>
      <h3
        ref={headingRef}
        tabIndex={-1}
        className="mt-4 text-3xl leading-tight font-semibold text-navy-900 outline-none"
      >
        {format(t.result.thanks, { name: result.firstName })}
      </h3>
      <p className="mt-3 text-muted-foreground">
        {format(t.result.contactIn, { time })}
      </p>
      {/* Respaldo si el navegador bloqueó la ventana de WhatsApp */}
      <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
        {t.result.reopenHint}
        <a
          href={result.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-semibold text-navy-950 transition-[background-color,transform] duration-150 hover:bg-gold-light active:scale-[0.97]"
        >
          <MessageCircle aria-hidden className="size-4" />
          {t.result.reopen}
        </a>
      </p>

      <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        <div className="bg-white p-5">
          <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {t.result.area}
          </dt>
          <dd className="mt-1 font-heading text-xl font-semibold text-navy-900">
            {area.label}
          </dd>
          <dd className="text-sm text-muted-foreground">
            {situations[result.situation]}
          </dd>
        </div>
        <div className="bg-white p-5">
          <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {t.result.priority}
          </dt>
          <dd className="mt-2">
            <span
              className={cn(
                "inline-flex rounded-full border px-3 py-1 text-sm font-semibold",
                priorityTone[result.priority]
              )}
            >
              {t.result.priorities[result.priority]}
            </span>
          </dd>
        </div>
        <div className="bg-white p-5">
          <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {t.result.lawyer}
          </dt>
          <dd className="mt-1 flex items-center gap-2 font-heading text-xl font-semibold text-navy-900">
            <UserRound aria-hidden className="size-4 text-gold-deep" />
            {lawyer}
          </dd>
        </div>
      </dl>

      <div className="mt-8 rounded-2xl bg-cream p-6">
        <h4 className="flex items-center gap-2 font-semibold text-navy-900">
          <FileText aria-hidden className="size-4 text-gold-deep" />
          {t.result.docsTitle}
        </h4>
        <ul className="mt-4 grid gap-2 text-sm text-navy-900 sm:grid-cols-2">
          {area.documents.map((d) => (
            <li key={d} className="flex gap-2">
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
              />
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-md text-xs text-muted-foreground">
          {t.result.disclaimer}
        </p>
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold text-navy-900 transition-[background-color,transform] duration-150 hover:bg-muted active:scale-[0.97]"
        >
          <RotateCcw aria-hidden className="size-4" />
          {t.result.restart}
        </button>
      </div>
    </div>
  );
}
