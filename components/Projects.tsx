import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          index="04 · projects"
          title="Things I've shipped"
          subtitle="Backend systems, an AI-grounded research engine, and the odd full-stack build."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
