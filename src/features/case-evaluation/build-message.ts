import { areaLawyer, legalEntity, teamMembers } from "@/content/firm";
import { format, type Locale } from "@/i18n/config";
import type { EvaluationCopy, FormValues, Priority, AreaId } from "./types";

// Texto que llega al WhatsApp del despacho. Usa *negrita* de WhatsApp en las etiquetas.
export function buildCaseMessage({
  t,
  lang,
  values,
  ref,
  priority,
}: {
  t: EvaluationCopy;
  lang: Locale;
  values: FormValues;
  ref: string;
  priority: Priority;
}) {
  const w = t.whatsapp;
  const f = t.fields;
  const areaId = values.area as AreaId;
  const area = t.areas[areaId];
  const situations: Record<string, string> = area.situations;
  const line = (label: string, value: string) => `*${label}:* ${value}`;

  const deadline = values.deadline
    ? new Date(`${values.deadline}T00:00:00`).toLocaleDateString(lang)
    : w.noDeadline;

  return [
    `*${format(w.title, { firm: legalEntity.name })}*`,
    "",
    line(w.reference, ref),
    line(w.priority, t.result.priorities[priority]),
    line(w.area, `${area.label} · ${situations[values.situation] ?? ""}`),
    line(w.lawyer, teamMembers[areaLawyer[areaId]].name),
    "",
    line(w.clientType, values.clientType ? f.clientType.options[values.clientType].label : ""),
    line(w.name, values.name.trim()),
    line(w.phone, values.phone.trim()),
    line(w.email, values.email.trim()),
    line(w.contactPref, f.contactPref.options[values.contactPref]),
    line(w.urgency, values.urgency ? f.urgency.options[values.urgency].label : ""),
    line(w.openProcess, values.openProcess ? f.openProcess.options[values.openProcess].label : ""),
    line(w.deadline, deadline),
    "",
    `*${w.description}:*`,
    values.description.trim(),
  ].join("\n");
}
