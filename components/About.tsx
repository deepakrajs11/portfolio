import { education } from "@/lib/data";

const facts = [
  { value: "1+ yr", label: "in production backend systems" },
  { value: "30K+", label: "daily requests served across microservices" },
  { value: "10+", label: "services wired together with Kafka" },
  { value: "8.9 / 10", label: "CGPA, B.E. Computer Science" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="font-mono text-xs text-accent">01 · about</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
              I like systems that stay correct under pressure.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Most of my day is spent inside Spring Boot services — modeling state transitions for
                financial transactions, keeping event-driven pipelines exactly-once with Kafka, and making
                sure a service degrades gracefully instead of falling over under load.
              </p>
              <p>
                I&rsquo;ve spent the last year building compliance and financing workflows for a bank, and before
                that, distributed order/payment systems handling tens of thousands of requests a day. In
                parallel, I build production AI agents on Spring AI — retrieval, tool calling, and grounding
                an LLM&rsquo;s output in real data instead of letting it guess.
              </p>
              <p>
                I&rsquo;m equally comfortable wiring up the AWS infrastructure a service runs on (Terraform,
                ECS/Lambda, GitLab CI/CD) or building the React/Next.js frontend on top when a project needs
                one — but backend and system design is where I default.
              </p>
            </div>

            <div className="mt-6 rounded-lg border border-border bg-elevated px-4 py-3 font-mono text-xs text-muted">
              <span className="text-accent">education —</span> {education.school}
              <br />
              {education.degree} · {education.period} · {education.detail}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-1">
            {facts.map((f) => (
              <div key={f.label} className="rounded-lg border border-border bg-elevated p-5">
                <p className="font-mono text-2xl text-accent">{f.value}</p>
                <p className="mt-1 text-xs text-muted">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
