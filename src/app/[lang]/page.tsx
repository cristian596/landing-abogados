import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Specialties } from "@/components/sections/specialties";
import { Experience } from "@/components/sections/experience";
import { Team } from "@/components/sections/team";
import { Process } from "@/components/sections/process";
import { CaseEvaluation } from "@/features/case-evaluation/case-evaluation";
import { ScrollToHash } from "@/components/shared/scroll-to-hash";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  // Cada sección recibe solo su parte del diccionario
  const t = await getDictionary(lang);
  const suffix = t.common.firmSuffix;

  return (
    <>
      <a
        href="#consulta"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy-950"
      >
        {t.common.skipLink}
      </a>
      <Navbar lang={lang} t={t.nav} suffix={suffix} />
      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Specialties t={t.specialties} />
        <Experience t={t.experience} />
        <Team t={t.team} />
        <Process t={t.process} />
        <CaseEvaluation t={t.evaluation} lang={lang} />
      </main>
      <Footer lang={lang} t={t.footer} nav={t.nav.items} suffix={suffix} />
      <ScrollToHash />
    </>
  );
}
