import { ArrowDownRight, Newspaper } from "lucide-react";
import { profile } from "@/lib/data";
import RoleRotator from "./RoleRotator";
import TechMarquee from "./TechMarquee";
import DataFlow from "./DataFlow";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-44 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blob absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-accent opacity-30" />
        <div className="blob absolute right-0 top-40 h-[24rem] w-[24rem] rounded-full bg-accent2 opacity-25" style={{ animationDelay: "-6s" }} />
        <div className="blob absolute left-1/3 bottom-0 h-[22rem] w-[22rem] rounded-full bg-accent3 opacity-20" style={{ animationDelay: "-11s" }} />
        <div className="bg-grid absolute inset-0" />
      </div>

      <div className="mx-auto max-w-content px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            <span className="gradient-text">Deepakraj S</span>
          </h1>

          <div className="mt-4 font-mono text-xl text-foreground sm:text-2xl">
            <RoleRotator roles={profile.roles} />
          </div>

          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-105"
            >
              View projects
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm text-foreground transition-transform hover:scale-105"
            >
              <GitHubIcon size={16} /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm text-foreground transition-transform hover:scale-105"
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a
              href={profile.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm text-foreground transition-transform hover:scale-105"
            >
              <Newspaper size={16} /> Blog
            </a>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <DataFlow />
        </div>
      </div>

      <div className="mt-16">
        <TechMarquee />
      </div>
    </section>
  );
}
