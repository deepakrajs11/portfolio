import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="03 · Experience" title="Where I've built" />

        <div className="relative space-y-12">
          <div
            className="absolute left-[5px] top-2 hidden h-[calc(100%-1rem)] w-px sm:block"
            style={{ background: "linear-gradient(to bottom, rgb(var(--accent)), rgb(var(--accent-2)), transparent)" }}
          />

          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="relative grid gap-4 pl-0 sm:pl-8 md:grid-cols-4 md:gap-8">
                <span className="absolute left-0 top-1.5 hidden h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgb(var(--accent))] sm:block" />

                <div className="md:col-span-1">
                  <p className="font-mono text-sm text-foreground">{job.role}</p>
                  <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
                  <p className="mt-1 text-xs text-muted">{job.location}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{job.period}</p>
                </div>

                <ul className="space-y-2.5 text-sm leading-relaxed text-muted md:col-span-3">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
