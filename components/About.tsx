import { education } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">01 · About</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Software Engineer building reliable systems for real-world scale.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              I specialize in <strong className="font-semibold text-foreground">Java, Spring Boot,
              distributed systems, and cloud-native engineering</strong>, with a focus on designing
              backend systems that are scalable, resilient, and production-ready. I enjoy working on
              problems involving <strong className="font-semibold text-foreground">high-throughput
              services, event-driven architectures, data consistency, performance, and system
              reliability</strong>.
            </p>
            <p>
              Alongside backend engineering, I explore{" "}
              <strong className="font-semibold text-foreground">AI-powered systems</strong>, turning
              emerging technologies into practical products rather than isolated experiments.
            </p>
            <p>
              I&rsquo;m driven by a simple idea:{" "}
              <strong className="font-semibold text-foreground">
                understand the problem deeply, design the system thoughtfully, and build it to last.
              </strong>
            </p>
          </div>

          <div className="mt-7 flex items-center gap-3 rounded-2xl border border-border bg-elevated/60 px-5 py-4 text-sm text-muted">
            <span className="shrink-0 rounded-lg bg-gradient-to-br from-accent to-accent2 px-2.5 py-1 font-mono text-xs font-semibold text-black">
              EDU
            </span>
            <span>
              <span className="text-foreground">{education.school}</span> — {education.degree} ·{" "}
              {education.period} · {education.detail}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
