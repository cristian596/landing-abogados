import Image from "next/image";
import { teamMembers, type TeamMemberId } from "@/content/firm";
import { format } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Eyebrow } from "@/components/shared/primitives";
import { Reveal } from "@/components/shared/reveal";

export function Team({ t }: { t: Dictionary["team"] }) {
  const ids = Object.keys(teamMembers) as TeamMemberId[];

  return (
    <section
      id="equipo"
      aria-labelledby="team-title"
      className="bg-cream py-section"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2
              id="team-title"
              className="mt-6 text-fluid-xl leading-[1.05] font-semibold text-navy-900"
            >
              {t.titleLead}{" "}
              <em className="font-normal text-gold-deep italic">
                {t.titleAccent}
              </em>
            </h2>
          </div>
          <p className="text-muted-foreground lg:col-span-4 lg:col-start-9">
            {t.intro}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ids.map((id, i) => {
            const person = teamMembers[id];
            const copy = t.members[id];
            return (
              <Reveal
                as="li"
                key={id}
                delay={i * 0.06}
                className={i % 2 === 1 ? "lg:mt-12" : undefined}
              >
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-900">
                    <Image
                      src={person.image}
                      alt={format(t.portraitOf, { name: person.name })}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover grayscale-[35%] transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                    <span className="absolute bottom-4 left-4 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-semibold text-gold-light backdrop-blur">
                      {copy.area}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-navy-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold tracking-wide text-gold-deep uppercase">
                    {copy.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {copy.bio}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
