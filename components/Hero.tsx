import { ArrowDownRight, Newspaper } from "lucide-react";
import { profile } from "@/lib/data";
import RoleRotator from "./RoleRotator";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-20">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto max-w-content px-6">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            open to backend / AI engineering roles
          </p>

          <h1 className="font-mono text-3xl leading-tight text-foreground sm:text-5xl">
            <span className="text-muted">$</span> whoami
            <br />
            {profile.name}
          </h1>

          <div className="mt-4 font-mono text-lg text-muted sm:text-xl">
            <RoleRotator roles={profile.roles} />
          </div>

          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              view projects <ArrowDownRight size={16} />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <GitHubIcon size={16} /> github
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedInIcon size={16} /> linkedin
            </a>
            <a
              href={profile.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Newspaper size={16} /> blog
            </a>
          </div>
        </div>

        <div className="mt-16">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}
