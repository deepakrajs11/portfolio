import { ExternalLink, Newspaper } from "lucide-react";
import type { Project } from "@/lib/data";
import { GitHubIcon } from "./icons";

const categoryStyles: Record<Project["category"], string> = {
  "AI + Backend": "text-fuchsia-400 border-fuchsia-400/30 bg-fuchsia-400/10",
  Backend: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "Full-Stack": "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  AI: "text-violet-400 border-violet-400/30 bg-violet-400/10",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`flex flex-col rounded-lg border bg-elevated p-6 transition-colors hover:border-accent/50 ${
        project.featured ? "border-border" : "border-border"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[11px] ${categoryStyles[project.category]}`}>
          {project.category}
        </span>
      </div>

      <p className="text-sm font-medium text-accent">{project.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      {project.metrics && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <li key={m} className="rounded border border-border px-2 py-1 font-mono text-[11px] text-muted">
              {m}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="rounded bg-background px-2 py-1 font-mono text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 font-mono text-xs">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            <GitHubIcon size={14} /> code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            <ExternalLink size={14} /> live demo
          </a>
        )}
        {project.article && (
          <a
            href={project.article}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            <Newspaper size={14} /> write-up
          </a>
        )}
        {!project.github && !project.demo && !project.article && (
          <span className="text-muted/60">private repo</span>
        )}
      </div>
    </div>
  );
}
