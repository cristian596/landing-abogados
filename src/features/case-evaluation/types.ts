import type { Dictionary } from "@/i18n/get-dictionary";

export type EvaluationCopy = Dictionary["evaluation"];

export type AreaId = keyof EvaluationCopy["areas"];
export type Urgency = keyof EvaluationCopy["fields"]["urgency"]["options"];
export type ClientType = keyof EvaluationCopy["fields"]["clientType"]["options"];
export type ContactPref = keyof EvaluationCopy["fields"]["contactPref"]["options"];
export type Priority = keyof EvaluationCopy["result"]["priorities"];

export type FormValues = {
  area: AreaId | "";
  clientType: ClientType | "";
  situation: string; // id de la situación dentro del área elegida
  urgency: Urgency | "";
  openProcess: "si" | "no" | "";
  deadline: string;
  description: string;
  name: string;
  email: string;
  phone: string;
  contactPref: ContactPref;
  consent: boolean;
};

export type EvaluationResult = {
  ref: string;
  firstName: string;
  area: AreaId;
  situation: string;
  priority: Priority;
};
