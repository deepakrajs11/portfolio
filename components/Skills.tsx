import { certifications, education, skillGroups } from "@/lib/data";
import Section from "./Section";
import LeetCodeStats from "./LeetCodeStats";

const chip = "rounded-md bg-subtle px-2 py-1 text-[13px]";
const row = "grid gap-2.5 px-5 py-4 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-4";

export default function Skills() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Tools I reach for."
      description="Languages, frameworks, and infrastructure I use to design and operate production systems."
    >
      {/* One panel of divided rows: denser than a card per group, so it balances Experience. */}
      <div className="card divide-y divide-border">
        {skillGroups.map((g) => (
          <div key={g.label} className={row}>
            <h3 className="pt-1 text-sm font-medium">{g.label}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {g.skills.map((s) => (
                <li key={s} className={chip}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={row}>
          <h3 className="text-sm font-medium">Problem solving</h3>
          <p className="text-sm">
            <LeetCodeStats />
          </p>
        </div>

        <div className={row}>
          <h3 className="pt-1 text-sm font-medium">Education</h3>
          <div className="text-sm">
            <p>{education.school}</p>
            <p className="mt-0.5 text-muted">
              {education.degree} · {education.period} · {education.detail}
            </p>
          </div>
        </div>

        <div className={row}>
          <h3 className="pt-1 text-sm font-medium">Certifications</h3>
          <ul className="flex flex-wrap gap-1.5">
            {certifications.map((c) => (
              <li key={c} className={chip}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
