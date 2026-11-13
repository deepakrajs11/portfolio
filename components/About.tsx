import Section from "./Section";

const pillars = [
  {
    title: "Backend & distributed systems",
    body: "Microservices, Kafka, idempotent payments, caching and query tuning.",
  },
  {
    title: "Cloud-native delivery",
    body: "AWS, Docker, Kubernetes and Terraform, with Prometheus and Grafana for visibility.",
  },
  {
    title: "AI in production",
    body: "Spring AI, RAG and tool-calling agents serving real users.",
  },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Backend depth, with a product mindset.">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="max-w-xl space-y-4 text-pretty">
        <p>
          I design backend systems that stay up and stay correct: Java and Spring Boot services,
          event-driven architectures on Kafka, and the data layer underneath. My focus is
          high-throughput workloads, consistency, performance, and reliability.
        </p>
        <p>
          I also build AI-powered products, from agents with tool calling to retrieval pipelines,
          and run them in production, where latency and context management matter more than demos.
        </p>
        <p className="text-muted">
          Understand the problem deeply, design the system thoughtfully, and build it to last.
        </p>
      </div>

      <ul className="space-y-4">
        {pillars.map((p) => (
          <li key={p.title} className="card p-5">
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-2 text-pretty text-sm text-muted">{p.body}</p>
          </li>
        ))}
      </ul>
      </div>
    </Section>
  );
}
