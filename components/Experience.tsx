import { experience } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading index="03 · experience" title="Where I've built" />

        <div className="space-y-10">
          {experience.map((job) => (
            <div key={job.company} className="relative grid gap-4 border-l border-border pl-6 md:grid-cols-4 md:gap-8">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

              <div className="md:col-span-1">
                <p className="font-mono text-sm text-foreground">{job.role}</p>
                <p className="mt-1 text-sm text-accent">{job.company}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
