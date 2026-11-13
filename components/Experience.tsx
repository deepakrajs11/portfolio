import { experience } from "@/lib/data";
import { highlightMetrics } from "@/lib/highlight";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped production systems."
    >
      <ol className="ml-1.5 space-y-14 border-l border-border pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            {/* Timeline dot: current role takes the accent. */}
            <span
              className={`absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-background sm:-left-[45px] ${
                i === 0 ? "bg-accent" : "bg-faint"
              }`}
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-lg font-semibold tracking-tight">{job.company}</h3>
              <p className="shrink-0 font-mono text-xs tabular-nums text-muted">{job.period}</p>
            </div>
            <p className="mt-0.5 text-muted">
              {job.role} · {job.location}
            </p>

            <ul className="mt-5 space-y-3 text-sm text-muted">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-pretty">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                  <span>{highlightMetrics(b)}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
