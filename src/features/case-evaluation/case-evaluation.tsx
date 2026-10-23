"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, useWatch, type FieldPath } from "react-hook-form";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { firm, legalEntity } from "@/content/firm";
import { format, type Locale } from "@/i18n/config";
import { Eyebrow } from "@/components/shared/primitives";
import { Reveal } from "@/components/shared/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChoiceCard, ChoicePill, Field, Fieldset } from "./form-fields";
import { ResultView } from "./result-view";
import { createReference, getPriority } from "./evaluate";
import { buildCaseMessage } from "./build-message";
import type {
  AreaId,
  ClientType,
  ContactPref,
  EvaluationCopy,
  EvaluationResult,
  FormValues,
  Urgency,
} from "./types";

const stepFields: FieldPath<FormValues>[][] = [
  ["area", "clientType", "situation"],
  ["urgency", "openProcess", "deadline", "description"],
  ["name", "email", "phone", "contactPref", "consent"],
];

const TOTAL_STEPS = stepFields.length;

const defaultValues: FormValues = {
  area: "",
  clientType: "",
  situation: "",
  urgency: "",
  openProcess: "",
  deadline: "",
  description: "",
  name: "",
  email: "",
  phone: "",
  contactPref: "llamada",
  consent: false,
};

const LAST_STEP = TOTAL_STEPS - 1;

// Reglas del último paso. Se usan en el registro de los campos y también en
// isContactValid, que valida de forma síncrona antes de abrir WhatsApp.
const contactPatterns = {
  phone: /^[+()\d\s-]{7,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

const isContactValid = (v: FormValues) =>
  v.name.trim() !== "" &&
  contactPatterns.phone.test(v.phone) &&
  contactPatterns.email.test(v.email) &&
  v.consent;

const keys = <T extends object>(o: T) => Object.keys(o) as (keyof T)[];

export function CaseEvaluation({
  t,
  lang,
}: {
  t: EvaluationCopy;
  lang: Locale;
}) {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lastKey = useRef<string | null>(null);
  const reduce = useReducedMotion();
  const f = t.fields;

  const {
    register,
    control,
    trigger,
    getValues,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onTouched", defaultValues });

  const area = useWatch({ control, name: "area" });
  const openProcess = useWatch({ control, name: "openProcess" });
  const description = useWatch({ control, name: "description" });
  const situations: Record<string, string> | null = area
    ? t.areas[area].situations
    : null;

  // Al cambiar de área, la situación anterior deja de tener sentido
  useEffect(() => {
    setValue("situation", "");
  }, [area, setValue]);

  // Lleva el foco al título del paso para lectores de pantalla y teclado
  useEffect(() => {
    // Se compara con el valor anterior y no con un flag: en StrictMode el efecto
    // se ejecuta dos veces al montar y el flag dejaba pasar el segundo foco,
    // que desplazaba la página hasta esta sección.
    const key = `${step}-${result ? "r" : ""}`;
    if (lastKey.current === null) {
      lastKey.current = key;
      return;
    }
    if (lastKey.current === key) return;
    lastKey.current = key;
    headingRef.current?.focus();
  }, [step, result]);

  const next = async () => {
    const current = step;
    if (await trigger(stepFields[current], { shouldFocus: true })) {
      // Valor absoluto: un doble clic no puede saltarse un paso
      setStep(current + 1);
    }
  };

  // Envío por WhatsApp. Todo es síncrono hasta window.open: los navegadores
  // móviles bloquean la ventana si se abre después de un await o un setTimeout.
  // No hay backend: los datos solo salen del navegador en el mensaje de WhatsApp.
  const sendViaWhatsApp = () => {
    const values = getValues();
    if (!isContactValid(values)) {
      // Sin datos válidos no se abre nada; trigger solo pinta los errores
      void trigger(stepFields[LAST_STEP], { shouldFocus: true });
      return;
    }

    const ref = createReference();
    const priority = getPriority(values);
    const whatsappUrl = buildWhatsAppUrl(
      buildCaseMessage({ t, lang, values, ref, priority })
    );
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setResult({
      ref,
      firstName: values.name.trim().split(" ")[0],
      area: values.area as AreaId,
      situation: values.situation,
      priority,
      whatsappUrl,
    });
    toast.success(t.toast.title, {
      description: format(t.toast.description, { ref }),
    });
  };

  const restart = () => {
    reset();
    setResult(null);
    setStep(0);
  };

  // Solo animación de entrada: el paso anterior se desmonta al instante
  // para que nunca se pueda pulsar su botón con el estado nuevo
  const slide = {
    initial: { opacity: 0, transform: reduce ? "none" : "translateX(16px)" },
    animate: { opacity: 1, transform: "translateX(0px)" },
    transition: { duration: 0.22, ease: [0.23, 1, 0.32, 1] as const },
  };

  return (
    <section
      id="consulta"
      aria-labelledby="eval-title"
      className="mx-auto grid max-w-7xl gap-12 px-5 py-section sm:px-10 lg:grid-cols-12 lg:gap-16"
    >
      <Reveal className="lg:col-span-4">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2
          id="eval-title"
          className="mt-6 text-fluid-xl leading-[1.05] font-semibold text-navy-900"
        >
          {t.titleLead}{" "}
          <em className="font-normal text-gold-deep italic">{t.titleAccent}</em>
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">{t.intro}</p>

        <ul className="mt-10 space-y-5 text-sm">
          <li className="flex gap-3">
            <MessageCircle aria-hidden className="mt-0.5 size-4 text-gold-deep" />
            <a
              href={buildWhatsAppUrl("")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp: {firm.whatsapp}
            </a>
          </li>
          <li className="flex gap-3">
            <Mail aria-hidden className="mt-0.5 size-4 text-gold-deep" />
            <a href={`mailto:${firm.email}`} className="hover:underline">
              {firm.email}
            </a>
          </li>
          <li className="flex gap-3">
            <MapPin aria-hidden className="mt-0.5 size-4 text-gold-deep" />
            <span>
              {firm.address}, {firm.city}
            </span>
          </li>
          <li className="flex gap-3">
            <Clock aria-hidden className="mt-0.5 size-4 text-gold-deep" />
            <span>{t.hours}</span>
          </li>
        </ul>
        <p className="mt-10 border-l-2 border-gold pl-4 text-sm text-muted-foreground">
          {t.privacyNote}
        </p>
      </Reveal>

      <Reveal delay={0.1} className="lg:col-span-8">
        <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_30px_80px_-40px_rgba(11,26,46,0.35)]">
          {/* Progreso */}
          {!result && (
            <div className="border-b border-border bg-cream px-6 py-5 sm:px-10">
              <p className="sr-only" aria-live="polite">
                {format(t.progress, {
                  step: step + 1,
                  total: TOTAL_STEPS,
                  title: t.stepTitles[step],
                })}
              </p>
              <ol className="flex gap-3" aria-hidden>
                {t.stepTitles.map((title, i) => (
                  <li key={title} className="flex-1">
                    <span className="block h-1 overflow-hidden rounded-full bg-navy-900/10">
                      <span
                        className="block h-full origin-left rounded-full bg-gold transition-transform duration-300 ease-out"
                        style={{ transform: `scaleX(${i <= step ? 1 : 0})` }}
                      />
                    </span>
                    <span
                      className={cn(
                        "mt-2 block text-xs font-semibold tracking-wide uppercase",
                        i <= step ? "text-navy-900" : "text-muted-foreground"
                      )}
                    >
                      <span className="max-sm:hidden">{i + 1}. </span>
                      {title}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="p-6 sm:p-10">
            {result ? (
              <motion.div key="result" {...slide}>
                <ResultView
                  t={t}
                  result={result}
                  headingRef={headingRef}
                  onRestart={restart}
                />
              </motion.div>
            ) : (
              <motion.form
                key={step}
                {...slide}
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  // El evento submit nace del clic (o de Enter): sigue contando
                  // como gesto del usuario para window.open
                  if (step === LAST_STEP) sendViaWhatsApp();
                  else void next();
                }}
              >
                <h3
                  ref={headingRef}
                  tabIndex={-1}
                  className="text-2xl font-semibold text-navy-900 outline-none"
                >
                  {t.stepTitles[step]}
                </h3>

                {step === 0 && (
                  <div className="mt-8 space-y-9">
                    <Fieldset legend={f.area.legend} error={errors.area?.message}>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {keys(t.areas).map((id) => (
                          <ChoiceCard
                            key={id}
                            value={id}
                            label={t.areas[id].label}
                            hint={t.areas[id].hint}
                            {...register("area", { required: f.area.required })}
                          />
                        ))}
                      </div>
                    </Fieldset>

                    <Fieldset
                      legend={f.clientType.legend}
                      error={errors.clientType?.message}
                    >
                      <div className="grid gap-3 sm:grid-cols-2">
                        {keys(f.clientType.options).map((id: ClientType) => (
                          <ChoiceCard
                            key={id}
                            value={id}
                            label={f.clientType.options[id].label}
                            hint={f.clientType.options[id].hint}
                            {...register("clientType", {
                              required: f.clientType.required,
                            })}
                          />
                        ))}
                      </div>
                    </Fieldset>

                    <Fieldset
                      legend={f.situation.legend}
                      error={errors.situation?.message}
                    >
                      {situations ? (
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(situations).map(([id, label]) => (
                            <ChoicePill
                              key={id}
                              value={id}
                              label={label}
                              {...register("situation", {
                                required: f.situation.required,
                              })}
                            />
                          ))}
                        </div>
                      ) : (
                        <p className="rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground">
                          {f.situation.empty}
                        </p>
                      )}
                    </Fieldset>
                  </div>
                )}

                {step === 1 && (
                  <div className="mt-8 space-y-9">
                    <Fieldset
                      legend={f.urgency.legend}
                      error={errors.urgency?.message}
                    >
                      <div className="grid gap-3 sm:grid-cols-3">
                        {keys(f.urgency.options).map((id: Urgency) => (
                          <ChoiceCard
                            key={id}
                            value={id}
                            label={f.urgency.options[id].label}
                            hint={f.urgency.options[id].hint}
                            {...register("urgency", {
                              required: f.urgency.required,
                            })}
                          />
                        ))}
                      </div>
                    </Fieldset>

                    <Fieldset
                      legend={f.openProcess.legend}
                      error={errors.openProcess?.message}
                    >
                      <div className="grid gap-3 sm:grid-cols-2">
                        {keys(f.openProcess.options).map((id) => (
                          <ChoiceCard
                            key={id}
                            value={id}
                            label={f.openProcess.options[id].label}
                            hint={f.openProcess.options[id].hint}
                            {...register("openProcess", {
                              required: f.openProcess.required,
                            })}
                          />
                        ))}
                      </div>
                    </Fieldset>

                    {openProcess === "si" && (
                      <Field
                        id="deadline"
                        label={f.deadline.label}
                        error={errors.deadline?.message}
                      >
                        <Input
                          id="deadline"
                          type="date"
                          className="h-11 max-w-xs"
                          aria-invalid={!!errors.deadline}
                          {...register("deadline")}
                        />
                      </Field>
                    )}

                    <Field
                      id="description"
                      label={f.description.label}
                      hint={format(f.description.counter, {
                        count: description.length,
                      })}
                      error={errors.description?.message}
                    >
                      <Textarea
                        id="description"
                        rows={5}
                        maxLength={1000}
                        placeholder={f.description.placeholder}
                        className="min-h-32"
                        aria-invalid={!!errors.description}
                        {...register("description", {
                          required: f.description.required,
                          minLength: { value: 30, message: f.description.minLength },
                        })}
                      />
                    </Field>
                  </div>
                )}

                {step === 2 && (
                  <div className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="name" label={f.name.label} error={errors.name?.message}>
                        <Input
                          id="name"
                          autoComplete="name"
                          className="h-11"
                          aria-invalid={!!errors.name}
                          {...register("name", {
                            validate: (v) => v.trim() !== "" || f.name.required,
                          })}
                        />
                      </Field>
                      <Field id="phone" label={f.phone.label} error={errors.phone?.message}>
                        <Input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          className="h-11"
                          aria-invalid={!!errors.phone}
                          {...register("phone", {
                            required: f.phone.required,
                            pattern: { value: contactPatterns.phone, message: f.phone.invalid },
                          })}
                        />
                      </Field>
                    </div>
                    <Field id="email" label={f.email.label} error={errors.email?.message}>
                      <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className="h-11"
                        aria-invalid={!!errors.email}
                        {...register("email", {
                          required: f.email.required,
                          pattern: {
                            value: contactPatterns.email,
                            message: f.email.invalid,
                          },
                        })}
                      />
                    </Field>

                    <Fieldset legend={f.contactPref.legend}>
                      <div className="flex flex-wrap gap-2">
                        {keys(f.contactPref.options).map((id: ContactPref) => (
                          <ChoicePill
                            key={id}
                            value={id}
                            label={f.contactPref.options[id]}
                            {...register("contactPref")}
                          />
                        ))}
                      </div>
                    </Fieldset>

                    <div>
                      <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
                        <input
                          type="checkbox"
                          className="mt-0.5 size-5 shrink-0 accent-navy-900"
                          aria-invalid={!!errors.consent}
                          aria-describedby={errors.consent ? "consent-error" : undefined}
                          {...register("consent", { required: f.consent.required })}
                        />
                        {format(f.consent.text, { firm: legalEntity.name })}
                      </label>
                      <a
                        href={`/${lang}/legal/privacidad`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 ml-8 inline-block text-sm font-semibold text-navy-900 underline underline-offset-4 hover:text-gold-deep"
                      >
                        {f.consent.privacyLink}
                      </a>
                      {errors.consent && (
                        <p id="consent-error" className="mt-2 text-sm text-destructive">
                          {errors.consent.message}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-navy-900 transition-[background-color,transform] duration-150 hover:bg-muted active:scale-[0.97]"
                    >
                      <ArrowLeft aria-hidden className="size-4" />
                      {t.actions.back}
                    </button>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {t.actions.noCommitment}
                    </span>
                  )}
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-navy-800 active:scale-[0.97] focus-visible:ring-3 focus-visible:ring-gold/60 focus-visible:outline-none"
                  >
                    {step < LAST_STEP ? (
                      <>
                        {t.actions.next}
                        <ArrowRight aria-hidden className="size-4" />
                      </>
                    ) : (
                      <>
                        <Send aria-hidden className="size-4" />
                        {t.actions.submit}
                      </>
                    )}
                  </button>
                </div>
                {step === LAST_STEP && (
                  <p className="mt-4 text-right text-xs text-muted-foreground">
                    {t.actions.whatsappNote}
                  </p>
                )}
              </motion.form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
