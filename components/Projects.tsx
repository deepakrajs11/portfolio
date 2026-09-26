import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import HoodieCoder from "./HoodieCoder";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden border-t border-border py-24">
      <HoodieCoder />

      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          index="04 · Projects"
          title="Built Out of Office"
          subtitle="Nights and weekends — full-stack builds, backend systems, and AI agents."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
