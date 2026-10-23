import { Label } from "@/components/ui/label";

export function Fieldset({
  legend,
  error,
  children,
}: {
  legend: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset aria-invalid={!!error || undefined}>
      <legend className="mb-3 text-sm font-semibold text-navy-900">
        {legend}
      </legend>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <Label htmlFor={id} className="font-semibold text-navy-900">
          {label}
        </Label>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </div>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

type ChoiceProps = React.ComponentProps<"input"> & {
  label: string;
  hint: string;
};

// Tarjeta de opción: un radio real, oculto visualmente, dentro de su label
export function ChoiceCard({ label, hint, ...input }: ChoiceProps) {
  return (
    <label className="group flex cursor-pointer flex-col gap-1 rounded-2xl border border-input p-4 transition-colors duration-150 hover:border-navy-800 has-checked:border-gold has-checked:bg-gold/10 has-focus-visible:ring-3 has-focus-visible:ring-gold/50">
      <input type="radio" className="sr-only" {...input} />
      <span className="flex items-center justify-between font-semibold text-navy-900">
        {label}
        <span
          aria-hidden
          className="grid size-5 place-items-center rounded-full border-2 border-input group-has-checked:border-gold"
        >
          <span className="size-2.5 scale-50 rounded-full bg-gold opacity-0 transition-[transform,opacity] duration-150 ease-out group-has-checked:scale-100 group-has-checked:opacity-100" />
        </span>
      </span>
      <span className="text-sm text-muted-foreground">{hint}</span>
    </label>
  );
}

type PillProps = React.ComponentProps<"input"> & { label: string };

// Opción compacta en forma de píldora
export function ChoicePill({ label, ...input }: PillProps) {
  return (
    <label className="cursor-pointer rounded-full border border-input px-4 py-2.5 text-sm transition-colors duration-150 hover:border-navy-800 has-checked:border-navy-900 has-checked:bg-navy-900 has-checked:text-white has-focus-visible:ring-3 has-focus-visible:ring-gold/50">
      <input type="radio" className="sr-only" {...input} />
      {label}
    </label>
  );
}
