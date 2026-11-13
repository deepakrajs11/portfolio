import { projects } from "@/lib/data";
import Section from "./Section";
import Arrow from "./Arrow";

function ExtLink({ href, children }: { href: string; children: string }) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <Arrow />
    </a>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Built out of office."
      description="Nights and weekends: backend systems, full-stack apps, and AI agents."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <li
            key={p.title}
            className="card card-hover flex flex-col p-6 md:[&:last-child:nth-child(odd)]:col-span-2"
          >
            <span className="w-fit rounded-md bg-subtle px-2 py-0.5 font-mono text-[11px] text-muted">
              {p.category}
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-pretty">{p.title}</h3>
            <p className="mt-1.5 text-pretty">{p.tagline}</p>
            <p className="mt-3 text-pretty text-sm text-muted">{p.description}</p>

            {p.metrics && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <li key={m} className="rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {m}
                  </li>
                ))}
              </ul>
            )}

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <li key={t} className="rounded-md bg-subtle px-2 py-1 font-mono text-[11px] text-muted">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <p className="flex flex-wrap gap-x-5 gap-y-1 border-t border-border pt-4 text-sm">
                {p.github && <ExtLink href={p.github}>Code</ExtLink>}
                {p.demo && <ExtLink href={p.demo}>Live demo</ExtLink>}
                {p.article && <ExtLink href={p.article}>Write-up</ExtLink>}
                {!p.github && !p.demo && !p.article && <span className="text-muted">Private repository</span>}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
