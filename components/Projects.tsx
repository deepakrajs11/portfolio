import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          index="04 · Projects"
          title="Things I've shipped"
          subtitle="Full-stack builds, backend systems, and AI agents that stay grounded in real data."
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
